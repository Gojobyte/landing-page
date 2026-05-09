import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://launchpad.app", lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: "https://launchpad.app/about", lastModified: new Date(), changeFrequency: "monthly", priority: 0.5 },
    { url: "https://launchpad.app/contact", lastModified: new Date(), changeFrequency: "monthly", priority: 0.5 },
    { url: "https://launchpad.app/privacy", lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
    { url: "https://launchpad.app/terms", lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
  ];
}
