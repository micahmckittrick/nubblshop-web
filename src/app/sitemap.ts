import type { MetadataRoute } from "next";
import { knots } from "@/content/knots";
import { siteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: siteUrl },
    { url: `${siteUrl}/how-to-fuzzy` },
    { url: `${siteUrl}/knots` },
    ...knots.map((k) => ({ url: `${siteUrl}/knots/${k.slug}` })),
    { url: `${siteUrl}/demos` },
    { url: `${siteUrl}/about` },
    { url: `${siteUrl}/faq` },
    { url: `${siteUrl}/privacy` },
    { url: `${siteUrl}/terms` },
  ];
}
