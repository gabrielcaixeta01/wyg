import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

// `/login` is intentionally absent: it is noindex, and listing a noindex URL
// in the sitemap sends contradictory signals to crawlers.
const ROUTES = [
  { path: "", priority: 1 },
  { path: "/register", priority: 0.8 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return ROUTES.map(({ path, priority }) => ({
    url: `${SITE_URL}${path}`,
    lastModified,
    changeFrequency: "monthly",
    priority,
  }));
}
