import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Varsh Foundation - Reach one, Reach all",
    short_name: "Varsh Foundation",
    description:
      "Together for a safer, More equal world - Free from sexual abuse",
    start_url: "/",
    display: "standalone",
    background_color: "#141517",
    theme_color: "#FF3600",
    icons: [
      {
        src: "/icon.png",
        sizes: "48x48",
        type: "image/png",
      },
      {
        src: "/apple-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}
