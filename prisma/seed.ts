/**
 * Seed the database with a default admin and the website's current content so
 * the public site looks identical after switching to DB-backed content.
 *
 * Usage:  npx tsx prisma/seed.ts   (or:  npm run seed)
 *
 * Idempotent: the admin and singleton sections are upserted without
 * overwriting existing values, and collections are only seeded when their
 * table is empty — so re-running never clobbers edits made through the admin.
 *
 * Content defaults live in ../lib/default-content (shared with the public
 * site's fallbacks) so there is a single source of truth.
 */
import * as dotenv from "dotenv";
import { hash } from "bcryptjs";
import { PrismaClient } from "../app/generated/prisma";
import {
  heroDefault,
  moreDefault,
  aboutDefault,
  newsletterDefault,
  initiativesDefault,
  thematicAreasDefault,
  reachStatsDefault,
  stridesDefault,
} from "../lib/default-content";

dotenv.config();

const prisma = new PrismaClient();

/** Create a SiteContent row only if the key doesn't already exist. */
async function ensureContent(key: string, value: unknown) {
  await prisma.siteContent.upsert({
    where: { key },
    update: {}, // leave existing content untouched
    create: { key, value: value as object },
  });
}

/** Run `seed` only when the table is empty. */
async function ifEmpty(count: Promise<number>, seed: () => Promise<unknown>) {
  if ((await count) === 0) await seed();
}

const withOrder = <T extends object>(items: T[]) =>
  items.map((item, i) => ({ ...item, order: i + 1 }));

async function main() {
  // --- Default admin (CHANGE THIS PASSWORD AFTER FIRST LOGIN) -------------
  const password = await hash(process.env.ADMIN_PASSWORD ?? "admin123", 10);
  const admin = await prisma.user.upsert({
    where: { email: process.env.ADMIN_EMAIL ?? "admin@varshfoundation.org" },
    update: {},
    create: {
      email: process.env.ADMIN_EMAIL ?? "admin@varshfoundation.org",
      name: "Admin",
      password,
      role: "ADMIN",
    },
  });
  console.log(`✓ Admin ready: ${admin.email}`);

  // --- Singleton sections -------------------------------------------------
  await ensureContent("hero", heroDefault);
  await ensureContent("more", moreDefault);
  await ensureContent("about", aboutDefault);
  await ensureContent("newsletter", newsletterDefault);

  // --- Collections (seed only when empty) ---------------------------------
  await ifEmpty(prisma.initiative.count(), () =>
    prisma.initiative.createMany({ data: withOrder(initiativesDefault) })
  );

  await ifEmpty(prisma.thematicArea.count(), () =>
    prisma.thematicArea.createMany({ data: withOrder(thematicAreasDefault) })
  );

  await ifEmpty(prisma.reachStat.count(), () =>
    prisma.reachStat.createMany({ data: withOrder(reachStatsDefault) })
  );

  await ifEmpty(prisma.stride.count(), () =>
    prisma.stride.createMany({ data: withOrder(stridesDefault) })
  );

  // --- Campus Clubs -------------------------------------------------------
  await ifEmpty(prisma.campusClub.count(), () =>
    prisma.campusClub.createMany({
      data: [
        {
          name: "Obafemi Awolowo University",
          university: "Obafemi Awolowo University",
          location: "Ile-Ife, Osun State",
          clubName: "VARSH OAU Club",
          imageUrl: "/images/clubs/oau.png",
          coordinator: "Anjola Abolade Oyelola",
          phone: "+2349036770892",
          email: "varshoau@gmail.com",
          order: 1,
        },
        {
          name: "University of Ilorin",
          university: "University of Ilorin",
          location: "Kwara State",
          clubName: "VARSH UNILORIN Club",
          imageUrl: "/images/clubs/unilorin.png",
          coordinator: "Evelyn Modupeoluwa Onaolapo",
          phone: "+2348107430869",
          email: "varshunilorinnclub@gmail.com",
          order: 2,
        },
        {
          name: "Federal University Lokoja",
          university: "Federal University Lokoja",
          location: "Lokoja, Kogi State",
          clubName: "VARSH FULOKOJA Club",
          imageUrl: "/images/clubs/fulokoja.png",
          order: 3,
        },
        {
          name: "Nigerian Institute of Journalism",
          university: "Nigerian Institute of Journalism",
          location: "Ikeja, Lagos State",
          clubName: "VARSH NIJ Club",
          imageUrl: "/images/clubs/nij.png",
          coordinator: "Oluwaseyifunmi Mary Adebayo",
          phone: "+23470838176",
          email: "nijvarshfoundation@gmail.com",
          order: 4,
        },
        {
          name: "Osun State University",
          university: "Osun State University",
          location: "Osogbo, Osun State",
          clubName: "VARSH UNIOSUN Club",
          imageUrl: "/images/clubs/uniosun.png",
          coordinator: "Samuel Oluwafemi Ajala",
          phone: "+2348156403260",
          email: "varshuniosunclub@gmail.com",
          order: 5,
        },
        {
          name: "Olabisi Onabanjo University",
          university: "Olabisi Onabanjo University",
          location: "Ago-Iwoye, Ogun State",
          clubName: "VARSH OOU Club",
          imageUrl: "/images/clubs/oou.png",
          coordinator: "Tolani Deborah Ewuyemi",
          phone: "+2347041679545",
          email: "varshoouclub@gmail.com",
          order: 6,
        },
        {
          name: "Ahmadu Bello University",
          university: "Ahmadu Bello University",
          location: "Zaria, Kaduna State",
          clubName: "VARSH ABU Club",
          imageUrl: "/images/clubs/abu.png",
          order: 7,
        },
        {
          name: "Federal University of Agriculture",
          university: "Federal University of Agriculture, Abeokuta",
          location: "Abeokuta, Ogun State",
          clubName: "VARSH FUNAAB Club",
          imageUrl: "/images/clubs/funaab.png",
          coordinator: "Afolabi Olawunmi Joyqueen",
          phone: "+2347079720917",
          email: "varshfunnabclub@gmail.com",
          order: 8,
        },
        {
          name: "Federal University of Technology, Minna",
          university: "Federal University of Technology, Minna, Niger State",
          location: "Minna, Niger State",
          clubName: "VARSH FUTMINNA Club",
          imageUrl: "/images/clubs/futminna.png",
          order: 9,
        },
        {
          name: "Federal University of Technology, Akure",
          university: "Federal University of Technology, Akure",
          location: "Akure, Ondo State",
          clubName: "VARSH FUTA Club",
          imageUrl: "/images/clubs/futa.png",
          order: 10,
        },
        {
          name: "Osun State Polytechnic, Iree",
          university: "Osun State Polytechnic, Iree, Osun State",
          location: "Iree, Osun State",
          clubName: "VARSH OSPOLY Club",
          imageUrl: "/images/clubs/ospoly.png",
          order: 11,
        },
        {
          name: "Osun State College Of Education, Ila-Orangun",
          university:
            "Osun State College Of Education, Ila-Orangun (in affiliation with Ekiti State University)",
          location: "Ila-Orangun, Osun State",
          clubName: "VARSH OSSCEILA Club",
          imageUrl: "/images/clubs/osued.png",
          order: 12,
        },
      ],
    })
  );

  console.log("✓ Seed complete");
}

main()
  .catch((err) => {
    console.error("Seed failed:", err);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
