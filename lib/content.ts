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
  type Hero,
  type MoreBand,
  type About,
  type Newsletter,
  type InitiativeItem,
  type ThematicAreaItem,
  type ReachStatItem,
  type StrideItem,
  teamDefault,
  projectsDefault,
  faqsDefault,
  clubsDefault,
  type TeamMemberItem,
  type ProjectItem,
  type FaqItem,
  type CampusClubItem,
} from "./default-content";

/**
 * Server-side content accessors for the public site. Each reads from the DB
 * and falls back to the bundled defaults when the row is missing or the DB is
 * unreachable, so the site always renders.
 */

async function singleton<T>(key: string, fallback: T): Promise<T> {
  try {
    const row = await prisma.siteContent.findUnique({ where: { key } });
    return (row?.value as T) ?? fallback;
  } catch {
    return fallback;
  }
}

export const getHero = () => singleton<Hero>("hero", heroDefault);
export const getMore = () => singleton<MoreBand>("more", moreDefault);
export const getAbout = () => singleton<About>("about", aboutDefault);
export const getNewsletter = () =>
  singleton<Newsletter>("newsletter", newsletterDefault);

export async function getInitiatives(): Promise<InitiativeItem[]> {
  try {
    const rows = await prisma.initiative.findMany({
      where: { published: true },
      orderBy: { order: "asc" },
    });
    return rows.length ? rows : initiativesDefault;
  } catch {
    return initiativesDefault;
  }
}

export async function getThematicAreas(): Promise<ThematicAreaItem[]> {
  try {
    const rows = await prisma.thematicArea.findMany({
      where: { published: true },
      orderBy: { order: "asc" },
    });
    return rows.length ? rows : thematicAreasDefault;
  } catch {
    return thematicAreasDefault;
  }
}

export async function getReachStats(): Promise<ReachStatItem[]> {
  try {
    const rows = await prisma.reachStat.findMany({ orderBy: { order: "asc" } });
    return rows.length ? rows : reachStatsDefault;
  } catch {
    return reachStatsDefault;
  }
}

export async function getStrides(): Promise<StrideItem[]> {
  try {
    const rows = await prisma.stride.findMany({ orderBy: { order: "asc" } });
    return rows.length ? rows : stridesDefault;
  } catch {
    return stridesDefault;
  }
}

// ---------------------------------------------------------------------------
// About / Projects / FAQs / Clubs
// ---------------------------------------------------------------------------

export async function getTeam(): Promise<TeamMemberItem[]> {
  try {
    const rows = await prisma.teamMember.findMany({
      where: { published: true },
      orderBy: { order: "asc" },
    });
    return rows.length ? (rows as TeamMemberItem[]) : teamDefault;
  } catch {
    return teamDefault;
  }
}

export async function getProjects(): Promise<ProjectItem[]> {
  try {
    const rows = await prisma.project.findMany({
      where: { published: true },
      orderBy: { order: "asc" },
    });
    return rows.length ? (rows as unknown as ProjectItem[]) : projectsDefault;
  } catch {
    return projectsDefault;
  }
}

export async function getFaqs(): Promise<FaqItem[]> {
  try {
    const rows = await prisma.faq.findMany({
      where: { published: true },
      orderBy: { order: "asc" },
    });
    return rows.length ? (rows as FaqItem[]) : faqsDefault;
  } catch {
    return faqsDefault;
  }
}

export async function getClubs(): Promise<CampusClubItem[]> {
  try {
    const rows = await prisma.campusClub.findMany({
      where: { published: true },
      orderBy: { order: "asc" },
    });
    return rows.length ? (rows as CampusClubItem[]) : clubsDefault;
  } catch {
    return clubsDefault;
  }
}
