import type { LangCode } from "@/data/language-map";
import { LANGUAGES, hasTranslation } from "@/data/language-map";

/**
 * Build the absolute URL for a given route + language.
 * Default language (en) lives at /<slug>. Alternates at /<lang>/<slug>.
 */
export function buildLocalizedUrl(origin: string, slug: string, lang: LangCode): string {
  const norm = slug.replace(/^\//, "");
  return lang === "en" ? `${origin}/${norm}` : `${origin}/${lang}/${norm}`;
}

/**
 * Build the alternates map for SEOHead's `alternates` prop.
 * Includes ONLY languages where the translated page actually exists, plus x-default → EN.
 * This prevents us from advertising hreflang alternates that 404.
 */
export function buildAlternates(
  origin: string,
  routeKey: string,            // e.g. "ndt-erp-houston"
  slug: string,                // same as routeKey for ERP city pages; may differ elsewhere
  supportedLangs: LangCode[],  // the city's `languages` array
): Record<string, string> {
  const out: Record<string, string> = {};
  for (const lang of supportedLangs) {
    if (hasTranslation(routeKey, lang)) {
      out[lang] = buildLocalizedUrl(origin, slug, lang);
    }
  }
  out["x-default"] = buildLocalizedUrl(origin, slug, "en");
  return out;
}

/**
 * Helper for prerender.mjs — emits all routes for a given ERP city.
 * Returns only languages that have been marked as translated.
 */
export function erpCityRoutes(slug: string, supportedLangs: LangCode[]): string[] {
  const routes = ["/ndt-erp-" + slug];
  for (const lang of supportedLangs) {
    if (lang === "en") continue;
    if (hasTranslation("ndt-erp-" + slug, lang)) {
      routes.push(`/${lang}/ndt-erp-${slug}`);
    }
  }
  return routes;
}
