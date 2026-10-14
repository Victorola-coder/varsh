import { z } from "zod";

/**
 * Validation schemas for editable content. These back both the admin API
 * routes and (implicitly) the admin forms. `order`/`published` carry defaults
 * so the forms can omit them.
 */

const order = z.coerce.number().int().default(0);
const published = z.coerce.boolean().default(true);
const slug = z
  .string()
  .min(1)
  .regex(/^[a-z0-9-]+$/, "Use lowercase letters, numbers and dashes only");

export const initiativeSchema = z.object({
  title: z.string().min(1),
  slug,
  description: z.string().min(1),
  image: z.string().min(1),
  order,
  published,
});

export const thematicAreaSchema = z.object({
  title: z.string().min(1),
  content: z.string().min(1),
  icon: z.string().min(1),
  order,
  published,
});

export const reachStatSchema = z.object({
  number: z.string().min(1),
  label: z.string().min(1),
  description: z.string().min(1),
  order,
});

export const strideSchema = z.object({
  label: z.string().min(1),
  text: z.string().min(1),
  order,
});

export const teamMemberSchema = z.object({
  name: z.string().min(1),
  role: z.string().min(1),
  group: z.enum(["team", "patrons", "legal"]).default("team"),
  bio: z.string().optional().nullable(),
  image: z.string().optional().nullable(),
  order,
  published,
});

export const projectSchema = z.object({
  title: z.string().min(1),
  slug,
  summary: z.string().optional().nullable(),
  content: z.string().optional().nullable(),
  image: z.string().optional().nullable(),
  images: z.array(z.string()).default([]),
  category: z.enum(["main", "other"]).default("main"),
  date: z.coerce.date().optional().nullable(),
  order,
  published,
});

export const blogPostSchema = z.object({
  title: z.string().min(1),
  slug,
  excerpt: z.string().min(1),
  content: z.string().optional().nullable(),
  image: z.string().optional().nullable(),
  author: z.string().optional().nullable(),
  category: z.string().optional().nullable(),
  url: z.string().optional().nullable(),
  date: z.coerce.date().optional().nullable(),
  order,
  published,
});

export const faqSchema = z.object({
  question: z.string().min(1),
  answer: z.string().min(1),
  category: z.string().optional().nullable(),
  order,
  published,
});

export const campusClubSchema = z.object({
  name: z.string().min(1),
  university: z.string().min(1),
  location: z.string().optional().nullable(),
  clubName: z.string().optional().nullable(),
  imageUrl: z.string().optional().nullable(),
  coordinator: z.string().optional().nullable(),
  phone: z.string().optional().nullable(),
  email: z.string().optional().nullable(),
  description: z.string().optional().nullable(),
  order,
  published,
});

// --- Singleton (SiteContent) section shapes -------------------------------

export const heroSchema = z.object({
  eyebrow: z.string().optional(),
  heading: z.string().min(1),
  subheading: z.string().min(1),
  ctaLabel: z.string().min(1),
  ctaHref: z.string().min(1),
  ctaLabel2: z.string().optional(),
  ctaHref2: z.string().optional(),
  image: z.string().min(1),
});

export const moreSchema = z.object({
  heading: z.string().min(1),
  body: z.string().min(1),
  ctaLabel: z.string().min(1),
  ctaHref: z.string().min(1),
  image: z.string().min(1),
});

export const aboutSchema = z.object({
  title: z.string().min(1),
  story: z.string().min(1),
  stridesHeading: z.string().min(1),
  image: z.string().min(1),
});

export const newsletterSchema = z.object({
  badge: z.string().min(1),
  heading: z.string().min(1),
  body: z.string().min(1),
  bullets: z.array(z.string().min(1)),
});

export const contactSchema = z.object({
  email: z.string().email(),
  phone: z.string().optional(),
  address: z.string().optional(),
  facebook: z.string().optional(),
  twitter: z.string().optional(),
  instagram: z.string().optional(),
  youtube: z.string().optional(),
  linkedin: z.string().optional(),
});

export const singletonSchemas: Record<string, z.ZodTypeAny> = {
  hero: heroSchema,
  more: moreSchema,
  about: aboutSchema,
  newsletter: newsletterSchema,
  contact: contactSchema,
};
