import { NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { rateLimit } from "@/lib/rate-limit";

const schema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  subject: z.string().min(1),
  message: z.string().min(1),
});

export async function POST(req: Request) {
  const limited = rateLimit(req, "contact", { limit: 5, windowMs: 60_000 });
  if (!limited.ok) return limited.response;

  const parsed = schema.safeParse(await req.json().catch(() => null));
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Please fill in all fields with a valid email" },
      { status: 400 }
    );
  }

  try {
    await prisma.contact.create({ data: parsed.data });
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact submit failed:", err);
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 });
  }
}
