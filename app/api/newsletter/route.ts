import { NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { rateLimit } from "@/lib/rate-limit";

const schema = z.object({ email: z.string().email() });

export async function POST(req: Request) {
  const limited = rateLimit(req, "newsletter", { limit: 5, windowMs: 60_000 });
  if (!limited.ok) return limited.response;

  const parsed = schema.safeParse(await req.json().catch(() => null));
  if (!parsed.success) {
    return NextResponse.json({ error: "A valid email is required" }, { status: 400 });
  }

  try {
    await prisma.newsletterSubscription.upsert({
      where: { email: parsed.data.email },
      update: { active: true },
      create: { email: parsed.data.email },
    });
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Newsletter subscribe failed:", err);
    return NextResponse.json({ error: "Failed to subscribe" }, { status: 500 });
  }
}
