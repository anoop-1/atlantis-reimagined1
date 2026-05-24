// Central registry of every language Atlantis supports across the site.
// A language appears in a city's dropdown if it's in the city's `languages` array.
// A language shows as ENABLED (vs. grayed-out) if the translated page exists — that's a
// runtime check against TRANSLATED_PAGES.

export type LangCode = "en" | "es" | "pt" | "de" | "fr" | "ko" | "ar" | "ja" | "zh-CN";

export interface Language {
  code: LangCode;
  name: string;        // English name
  nativeName: string;  // Endonym — shown in dropdown
  flag: string;        // emoji flag (or ISO country for flag library)
  dir: "ltr" | "rtl";
}

export const LANGUAGES: Record<LangCode, Language> = {
  en: { code: "en", name: "English",    nativeName: "English",  flag: "🇺🇸", dir: "ltr" },
  es: { code: "es", name: "Spanish",    nativeName: "Español",  flag: "🇪🇸", dir: "ltr" },
  pt: { code: "pt", name: "Portuguese", nativeName: "Português",flag: "🇧🇷", dir: "ltr" },
  de: { code: "de", name: "German",     nativeName: "Deutsch",  flag: "🇩🇪", dir: "ltr" },
  fr: { code: "fr", name: "French",     nativeName: "Français", flag: "🇫🇷", dir: "ltr" },
  ko: { code: "ko", name: "Korean",     nativeName: "한국어",    flag: "🇰🇷", dir: "ltr" },
  ar: { code: "ar", name: "Arabic",     nativeName: "العربية",  flag: "🇸🇦", dir: "rtl" },
  ja: { code: "ja", name: "Japanese",   nativeName: "日本語",    flag: "🇯🇵", dir: "ltr" },
  "zh-CN": { code: "zh-CN", name: "Chinese (Simplified)", nativeName: "简体中文", flag: "🇨🇳", dir: "ltr" },
};

// Which translated pages actually exist, by kind.
// TEMPLATE:  <kind>  --> Set<LangCode>
// Populated by the build step from the prerendered dist/ tree, OR hand-maintained here
// as translations ship. Until a translation ships, the dropdown shows it grayed-out.
export const TRANSLATED_PAGES: Record<string, Set<LangCode>> = {
  // key: route-kind like "ndt-erp-solution" or "ndt-erp-houston"
  // value: set of LangCodes for which a rendered page exists (always includes "en" if the EN page exists)
  "ndt-erp-solution": new Set(["en"]),
  // Each ERP city page starts EN-only; add lang codes here as translations ship.
};

/** Check whether a given route has a rendered translation available. */
export function hasTranslation(routeKey: string, lang: LangCode): boolean {
  if (lang === "en") return true; // EN is canonical; always exists
  const set = TRANSLATED_PAGES[routeKey];
  return !!set && set.has(lang);
}
