import type { MetadataRoute } from "next";
import { BUSINESS } from "@/content/business";
import { DICTS, LANGS } from "@/lib/i18n";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const languages: Record<string, string> = {};
  LANGS.forEach((l) => {
    languages[DICTS[l].htmlLang] = `${BUSINESS.siteUrl}${DICTS[l].path === "/" ? "/" : DICTS[l].path}`;
  });
  return LANGS.map((l) => ({
    url: `${BUSINESS.siteUrl}${DICTS[l].path === "/" ? "/" : DICTS[l].path}`,
    lastModified,
    changeFrequency: "monthly",
    priority: l === "es" ? 1 : 0.8,
    alternates: { languages },
  }));
}
