import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { prisma } from "@/lib/prisma";
import { authOptions } from "../../auth/config";

export async function GET() {
  const session = await getServerSession(authOptions);

  if (
    !session ||
    (session.user?.role !== "ADMIN" && session.user?.role !== "SUPERADMIN")
  ) {
    return new NextResponse("Unauthorized", { status: 401 });
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
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
