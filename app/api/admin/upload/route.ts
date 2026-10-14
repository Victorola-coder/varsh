import { NextRequest, NextResponse } from "next/server";
import { randomBytes } from "crypto";
import { mkdir, writeFile } from "fs/promises";
import path from "path";
import { put } from "@vercel/blob";
import sharp from "sharp";
import { requireAdmin } from "@/lib/admin-auth";
import { rateLimit } from "@/lib/rate-limit";

/**
 * Admin image upload.
 *
 * Every image the site had was an untouched camera original — up to 14 MB and
 * 5760px wide — so uploads are processed rather than stored as-is: capped at
 * 2000px on the longest edge and re-encoded to WebP. A typical phone photo
 * lands around 100-200 KB.
 *
 * Storage has two paths, because Vercel's filesystem is read-only at runtime:
 *   - BLOB_READ_WRITE_TOKEN set  -> Vercel Blob (production)
 *   - otherwise                  -> public/uploads (local dev, or any host
 *                                   with a persistent disk)
 * Create a Blob store in the Vercel dashboard and the token is injected
 * automatically; without it, uploads on Vercel would appear to succeed and
 * then vanish on the next deploy.
 */
export const runtime = "nodejs";

const MAX_BYTES = 15 * 1024 * 1024;
const ACCEPTED = ["image/jpeg", "image/png", "image/webp", "image/avif", "image/gif"];
const MAX_EDGE = 2000;

export async function POST(req: NextRequest) {
  const { response } = await requireAdmin();
  if (response) return response;

  const limited = rateLimit(req, "upload", { limit: 30, windowMs: 60_000 });
  if (!limited.ok) return limited.response;

  let form: FormData;
  try {
    form = await req.formData();
  } catch {
    return NextResponse.json({ error: "Expected multipart form data" }, { status: 400 });
  }

  const file = form.get("file");
  if (!(file instanceof File)) {
    return NextResponse.json({ error: "No file provided" }, { status: 400 });
  }
  if (file.size > MAX_BYTES) {
    return NextResponse.json(
      { error: `That file is ${(file.size / 1048576).toFixed(1)}MB — the limit is 15MB` },
      { status: 413 }
    );
  }
  if (file.type && !ACCEPTED.includes(file.type)) {
    return NextResponse.json(
      { error: `Unsupported image type: ${file.type}` },
      { status: 415 }
    );
  }

  const input = Buffer.from(await file.arrayBuffer());

  let output: Buffer;
  let width: number | undefined;
  let height: number | undefined;
  try {
    const pipeline = sharp(input, { animated: true }).rotate(); // honour EXIF orientation
    const meta = await pipeline.metadata();
    const resized =
      (meta.width ?? 0) > MAX_EDGE || (meta.height ?? 0) > MAX_EDGE
        ? pipeline.resize(MAX_EDGE, MAX_EDGE, { fit: "inside", withoutEnlargement: true })
        : pipeline;
    output = await resized.webp({ quality: 80 }).toBuffer();
    const out = await sharp(output).metadata();
    width = out.width;
    height = out.height;
  } catch (err) {
    console.error("Image processing failed:", err);
    return NextResponse.json({ error: "That file could not be read as an image" }, { status: 400 });
  }

  // Keep a readable stem from the original name, plus a short random suffix so
  // re-uploading the same filename never clobbers an image already in use.
  const stem =
    path
      .parse(file.name || "image")
      .name.toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "")
      .slice(0, 40) || "image";
  const filename = `${stem}-${randomBytes(4).toString("hex")}.webp`;

  let url: string;
  try {
    if (process.env.BLOB_READ_WRITE_TOKEN) {
      const blob = await put(`uploads/${filename}`, output, {
        access: "public",
        contentType: "image/webp",
        // The filename already carries a random suffix.
        addRandomSuffix: false,
      });
      url = blob.url;
    } else {
      const dir = path.join(process.cwd(), "public", "uploads");
      await mkdir(dir, { recursive: true });
      await writeFile(path.join(dir, filename), output);
      url = `/uploads/${filename}`;
    }
  } catch (err) {
    console.error("Image write failed:", err);
    return NextResponse.json(
      { error: "Could not save the image on the server" },
      { status: 500 }
    );
  }

  return NextResponse.json({
    url,
    width,
    height,
    bytes: output.length,
    originalBytes: file.size,
  });
}
