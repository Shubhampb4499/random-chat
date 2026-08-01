import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "ChatNova",
    short_name: "ChatNova",
    description:
      "Free anonymous random chat with strangers. No signup required.",
    start_url: "/",
    display: "standalone",
    background_color: "#030712",
    theme_color: "#16a34a",
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}