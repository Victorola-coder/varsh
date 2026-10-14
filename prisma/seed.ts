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
  teamDefault,
  projectsDefault,
  faqsDefault,
  clubsDefault,
  blogPostsDefault,
  contactDefault,
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
  // --- Default admin ------------------------------------------------------
  // "admin123" is a documented default and must never reach a deployed site,
  // so refuse to fall back to it outside development.
  if (!process.env.ADMIN_PASSWORD && process.env.NODE_ENV === "production") {
    throw new Error(
      "ADMIN_PASSWORD must be set when seeding a production database. " +
        "Generate one (e.g. `openssl rand -base64 24`) and set it in the environment."
    );
  }
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
  await ensureContent("contact", contactDefault);

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
      data: clubsDefault,
    })
  );


  await ifEmpty(prisma.teamMember.count(), () =>
    prisma.teamMember.createMany({ data: withOrder(teamDefault) })
  );

  await ifEmpty(prisma.faq.count(), () =>
    prisma.faq.createMany({ data: withOrder(faqsDefault) })
  );

  await ifEmpty(prisma.project.count(), () =>
    prisma.project.createMany({ data: withOrder(projectsDefault) })
  );

  await ifEmpty(prisma.blogPost.count(), () =>
    prisma.blogPost.createMany({
      data: withOrder(
        blogPostsDefault.map((p) => ({
          ...p,
          date: p.date ? new Date(p.date) : null,
        }))
      ),
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
