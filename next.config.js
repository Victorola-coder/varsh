/** @type {import('next').NextConfig} */

// Sent on every response. Deliberately conservative: no CSP yet, because the
// app uses inline styles via Tailwind/framer-motion and a wrong CSP breaks the
// site silently. Add one once the inline-style sources are pinned down.
const securityHeaders = [
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "X-DNS-Prefetch-Control", value: "on" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
];

const nextConfig = {
  poweredByHeader: false,
  images: {
    // AVIF first: typically 20-30% smaller than WebP, with WebP as the
    // fallback for browsers that don't accept it.
    formats: ["image/avif", "image/webp"],
    // Optimised variants are immutable (the source path changes when the
    // image does), so they can be cached hard.
    minimumCacheTTL: 60 * 60 * 24 * 30,
    remotePatterns: [
      {
        port: "",
        protocol: "https",
        hostname: "placehold.co",
      },
      {
        // Vercel Blob public URLs, used by admin image uploads in production.
        protocol: "https",
        hostname: "*.public.blob.vercel-storage.com",
      },
    ],
  },
  async headers() {
    return [
      { source: "/:path*", headers: securityHeaders },
      {
        // Uploaded images are content-addressed by their random filename, so
        // they never change once written.
        source: "/uploads/:path*",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
