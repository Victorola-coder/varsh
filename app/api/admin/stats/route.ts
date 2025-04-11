import { prisma } from "@/lib/prisma";
import { getSession } from "@/lib/jwt";
import { NextResponse } from "next/server";

export async function GET() {
  const session = await getSession();

  if (!session || (session.role !== "ADMIN" && session.role !== "SUPERADMIN")) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const [newsletters, contacts, donations, clubs] = await Promise.all([
      prisma.newsletterSubscription.count(),
      prisma.contact.count(),
      prisma.donation.count(),
      prisma.campusClub.count(),
    ]);

    return NextResponse.json({
      newsletters,
      contacts,
      donations,
      clubs,
    });
  } catch (error) {
    console.error("Failed to fetch admin stats:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
