import type { MetadataRoute } from "next";
import { getBlogPosts } from "@/lib/content";

const BASE = "https://varshfoundation.org";

/** Static public routes. The sitemap previously listed only the homepage. */
const ROUTES: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
  { path: "", priority: 1, changeFrequency: "weekly" },
  { path: "/about", priority: 0.8, changeFrequency: "monthly" },
  { path: "/projects", priority: 0.9, changeFrequency: "monthly" },
  { path: "/clubs", priority: 0.7, changeFrequency: "monthly" },
  { path: "/blog", priority: 0.8, changeFrequency: "weekly" },
  { path: "/faqs", priority: 0.6, changeFrequency: "monthly" },
  { path: "/get-involved", priority: 0.8, changeFrequency: "monthly" },
  { path: "/donate", priority: 0.9, changeFrequency: "monthly" },
  { path: "/contact", priority: 0.6, changeFrequency: "yearly" },
  { path: "/feedback", priority: 0.4, changeFrequency: "yearly" },
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();

  const staticEntries = ROUTES.map((r) => ({
    url: `${BASE}${r.path}`,
    lastModified: now,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));

  // Blog posts are DB-driven, so the sitemap grows as the admin publishes.
  let postEntries: MetadataRoute.Sitemap = [];
  try {
    const posts = await getBlogPosts();
    postEntries = posts.map((p) => ({
      url: `${BASE}/blog/${p.slug}`,
      lastModified: p.date ? new Date(p.date) : now,
      changeFrequency: "yearly" as const,
      priority: 0.5,
    }));
  } catch {
    // A sitemap without posts beats a build failure.
  }

  return [...staticEntries, ...postEntries];
}
