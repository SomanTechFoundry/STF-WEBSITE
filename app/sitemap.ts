import type { MetadataRoute } from "next";
import { workApps } from "@/lib/work";

const siteUrl = "https://somantechfoundry.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: siteUrl, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${siteUrl}/services`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${siteUrl}/work`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${siteUrl}/careers`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${siteUrl}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
  ];

  const workRoutes: MetadataRoute.Sitemap = workApps.map((app) => ({
    url: `${siteUrl}/work/${app.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...workRoutes];
}
