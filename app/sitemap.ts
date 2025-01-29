import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://varsh.org",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
  ];
}
