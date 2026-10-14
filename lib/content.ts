import { unstable_cache } from "next/cache";
import { prisma } from "./prisma";
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
  type Hero,
  type MoreBand,
  type About,
  type Newsletter,
  type InitiativeItem,
  type ThematicAreaItem,
  type ReachStatItem,
  type StrideItem,
  type TeamMemberItem,
  type ProjectItem,
  type FaqItem,
  type CampusClubItem,
  type BlogPostItem,
} from "./default-content";

/**
 * Server-side content accessors for the public site. Each reads from the DB
 * and falls back to the bundled defaults when the row is missing or the DB is
 * unreachable, so the site always renders.
 *
 * Reads go through the Next data cache rather than running on every request,
 * which is what lets the public pages render statically. Each accessor is
 * tagged, and the admin write routes call `revalidateTag` on save — so an edit
 * still shows up immediately without making every visitor pay for a query.
 */

/** Tag applied to every content read; busting it refreshes the whole site. */
export const CONTENT_TAG = "content";

/** Per-section tag. Matches the admin route slugs (`/api/admin/...`). */
export const contentTag = (name: string) => `content:${name}`;

/** Wrap a DB read in the data cache, tagged so admin writes can bust it. */
function cached<T>(fn: () => Promise<T>, name: string) {
  return unstable_cache(fn, [contentTag(name)], {
    tags: [CONTENT_TAG, contentTag(name)],
    revalidate: 3600,
  });
}

async function singleton<T>(key: string, fallback: T): Promise<T> {
  try {
    const row = await prisma.siteContent.findUnique({ where: { key } });
    return (row?.value as T) ?? fallback;
  } catch {
    return fallback;
  }
}

/** Read a published collection, falling back to the bundled defaults. */
async function collection<T>(
  read: () => Promise<unknown[]>,
  fallback: T[]
): Promise<T[]> {
  try {
    const rows = await read();
    return rows.length ? (rows as T[]) : fallback;
  } catch {
    return fallback;
  }
}

// --- Homepage singletons ---------------------------------------------------

export const getHero = cached(
  () => singleton<Hero>("hero", heroDefault),
  "hero"
);
export const getMore = cached(
  () => singleton<MoreBand>("more", moreDefault),
  "more"
);
export const getAbout = cached(
  () => singleton<About>("about", aboutDefault),
  "about"
);
export const getNewsletter = cached(
  () => singleton<Newsletter>("newsletter", newsletterDefault),
  "newsletter"
);

// --- Homepage collections --------------------------------------------------

export const getInitiatives = cached(
  () =>
    collection<InitiativeItem>(
      () =>
        prisma.initiative.findMany({
          where: { published: true },
          orderBy: { order: "asc" },
        }),
      initiativesDefault
    ),
  "initiatives"
);

export const getThematicAreas = cached(
  () =>
    collection<ThematicAreaItem>(
      () =>
        prisma.thematicArea.findMany({
          where: { published: true },
          orderBy: { order: "asc" },
        }),
      thematicAreasDefault
    ),
  "thematic-areas"
);

export const getReachStats = cached(
  () =>
    collection<ReachStatItem>(
      () => prisma.reachStat.findMany({ orderBy: { order: "asc" } }),
      reachStatsDefault
    ),
  "reach-stats"
);

export const getStrides = cached(
  () =>
    collection<StrideItem>(
      () => prisma.stride.findMany({ orderBy: { order: "asc" } }),
      stridesDefault
    ),
  "strides"
);

// --- About / Projects / FAQs / Clubs --------------------------------------

export const getTeam = cached(
  () =>
    collection<TeamMemberItem>(
      () =>
        prisma.teamMember.findMany({
          where: { published: true },
          orderBy: { order: "asc" },
        }),
      teamDefault
    ),
  "team"
);

export const getProjects = cached(
  () =>
    collection<ProjectItem>(
      () =>
        prisma.project.findMany({
          where: { published: true },
          orderBy: { order: "asc" },
        }),
      projectsDefault
    ),
  "projects"
);

export const getFaqs = cached(
  () =>
    collection<FaqItem>(
      () =>
        prisma.faq.findMany({
          where: { published: true },
          orderBy: { order: "asc" },
        }),
      faqsDefault
    ),
  "faqs"
);

export const getClubs = cached(
  () =>
    collection<CampusClubItem>(
      () =>
        prisma.campusClub.findMany({
          where: { published: true },
          orderBy: { order: "asc" },
        }),
      clubsDefault
    ),
  "clubs"
);

export const getBlogPosts = cached(
  () =>
    collection<BlogPostItem>(
      () =>
        prisma.blogPost.findMany({
          where: { published: true },
          orderBy: [{ order: "asc" }, { date: "desc" }],
        }),
      blogPostsDefault
    ),
  "blog"
);
