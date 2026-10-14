import type { MetadataRoute } from "next";

/**
 * Previously this disallowed Applebot and Bingbot from the entire site, which
 * removed VARSH from Bing and Apple search altogether — almost certainly not
 * intended. All crawlers are now allowed, with the admin and API kept out.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/admin/", "/api/", "/login", "/uploads/"],
      },
    ],
    sitemap: "https://varshfoundation.org/sitemap.xml",
  };
}
