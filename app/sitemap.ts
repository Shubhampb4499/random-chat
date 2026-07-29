import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://chatnova.in",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
  ];
}