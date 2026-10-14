/** @type {import('next').NextConfig} */
const nextConfig = {
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
    ],
  },
};

module.exports = nextConfig;
