import { prisma } from "./prisma";
import type { ZodTypeAny } from "zod";
import {
  initiativeSchema,
  thematicAreaSchema,
  reachStatSchema,
  strideSchema,
  teamMemberSchema,
  projectSchema,
  faqSchema,
  campusClubSchema,
} from "./content-schemas";

type ResourceConfig = {
  /**
   * Prisma model delegate. Typed loosely on purpose so a single generic
   * dispatcher can serve every model — input is validated by `schema`.
   */
  model: any;
  schema: ZodTypeAny;
};

/** Collection resources reachable at /api/admin/content/<slug>. */
export const resources: Record<string, ResourceConfig> = {
  initiatives: { model: prisma.initiative, schema: initiativeSchema },
  "thematic-areas": { model: prisma.thematicArea, schema: thematicAreaSchema },
  "reach-stats": { model: prisma.reachStat, schema: reachStatSchema },
  strides: { model: prisma.stride, schema: strideSchema },
  team: { model: prisma.teamMember, schema: teamMemberSchema },
  projects: { model: prisma.project, schema: projectSchema },
  faqs: { model: prisma.faq, schema: faqSchema },
  clubs: { model: prisma.campusClub, schema: campusClubSchema },
};

export function getResource(name: string): ResourceConfig | null {
  return resources[name] ?? null;
}

/** Read-only submission tables reachable at /api/admin/submissions/<slug>. */
export const submissions: Record<string, { model: any }> = {
  donations: { model: prisma.donation },
  contacts: { model: prisma.contact },
  subscribers: { model: prisma.newsletterSubscription },
};

export function getSubmission(name: string) {
  return submissions[name] ?? null;
}
