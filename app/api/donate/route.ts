import { NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { rateLimit } from "@/lib/rate-limit";

/**
 * Records a donation *pledge*. There is no payment gateway wired up yet, so a
 * row here means "someone said they intend to give", not "money arrived" —
 * hence `status: "pending"`. Swap in the gateway callback before treating
 * these as real income.
 */
const schema = z.object({
  amount: z.coerce.number().positive().max(1_000_000_000),
  name: z.string().trim().min(1).optional(),
  email: z.string().email(),
  frequency: z.enum(["one-time", "monthly", "annually"]).default("one-time"),
  anonymous: z.coerce.boolean().default(false),
  message: z.string().trim().max(2000).optional(),
});

export async function POST(req: Request) {
  const limited = rateLimit(req, "donate", { limit: 5, windowMs: 60_000 });
  if (!limited.ok) return limited.response;

  const parsed = schema.safeParse(await req.json().catch(() => null));
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Please provide a valid amount and email address" },
      { status: 400 }
    );
  }

  const { amount, name, email, frequency, anonymous, message } = parsed.data;

  try {
    await prisma.donation.create({
      data: {
        amount,
        email,
        frequency,
        anonymous,
        name: anonymous ? null : name ?? null,
        message: message ?? null,
        status: "pending",
      },
    });
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Donation pledge failed:", err);
    return NextResponse.json(
      { error: "Failed to record your donation" },
      { status: 500 }
    );
  }
}
