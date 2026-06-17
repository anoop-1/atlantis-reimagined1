/**
 * Day-8 — Region-specific hreflang builder for city pages.
 *
 * The 4 LocationPage templates (Erp, Training, Consulting, DigitalTwin) used
 * to emit `en-${country}` raw, which produced INVALID hreflang values like
 * `en-United Arab Emirates` whenever `country` was a full name. Google
 * silently drops invalid hreflang, leaving the auto-derived 9-variant fallback
 * (all → same canonical) — i.e. no real geo-targeting.
 *
 * This helper accepts either ISO country code OR full country name and emits
 * a clean 3-link hreflang triplet: primary region, generic `en`, and `x-default`.
 * Markets where Atlantis CTR is already 2-4× US average (AE, IN, MY, AU, GB, CA,
 * SG, ZA, NG) are mapped to their proper regional locale. Unknown markets fall
 * back to `en` so we never emit invalid tags.
 */

const FULL_NAME_TO_ISO: Record<string, string> = {
  // English
  'united states': 'US', 'usa': 'US', 'u.s.a.': 'US', 'us': 'US',
  'united arab emirates': 'AE', 'uae': 'AE', 'u.a.e.': 'AE',
  'saudi arabia': 'SA', 'ksa': 'SA',
  'india': 'IN',
  'united kingdom': 'GB', 'uk': 'GB', 'great britain': 'GB',
  'canada': 'CA',
  'singapore': 'SG',
  'australia': 'AU',
  'qatar': 'QA',
  'kuwait': 'KW',
  'oman': 'OM',
  'bahrain': 'BH',
  'malaysia': 'MY',
  'nigeria': 'NG',
  'south africa': 'ZA',
  'indonesia': 'ID',
  'norway': 'NO',
  'netherlands': 'NL',
  'france': 'FR',
  'germany': 'DE',
  'spain': 'ES',
  'italy': 'IT',
  'mexico': 'MX',
  'brazil': 'BR',
  'argentina': 'AR',
  'colombia': 'CO',
  'china': 'CN',
  'south korea': 'KR',
  'japan': 'JP',
  'taiwan': 'TW',
  'thailand': 'TH',
  'vietnam': 'VN',
  'new zealand': 'NZ',
  'greece': 'GR',
  'turkey': 'TR',
  'egypt': 'EG',
  'morocco': 'MA',
  'algeria': 'DZ',
  'trinidad and tobago': 'TT',
  'venezuela': 'VE',
  'peru': 'PE',
  'chile': 'CL',
  'ecuador': 'EC',
  'iran': 'IR',
  'iraq': 'IQ',
  'pakistan': 'PK',
  'bangladesh': 'BD',
  'philippines': 'PH',
};

/** Markets with a genuine en-XX SERP cluster. Others fall back to plain `en`. */
const ISO_TO_HREFLANG: Record<string, string> = {
  US: 'en-US',
  GB: 'en-GB',
  IN: 'en-IN',
  AE: 'en-AE',
  CA: 'en-CA',
  AU: 'en-AU',
  SG: 'en-SG',
  MY: 'en-MY',
  NG: 'en-NG',
  ZA: 'en-ZA',
  NZ: 'en-NZ',
  IE: 'en-IE',
  PH: 'en-PH',
  // GCC English-secondary markets — Google does NOT serve dedicated en-XX
  // SERPs for SA/QA/KW/OM/BH, so we just use plain `en` and let geo-targeting
  // ride on the LocalBusiness schema we already emit.
};

export interface HreflangLink {
  hreflang: string;
  href: string;
}

export function normalizeCountry(input: string | undefined | null): string {
  if (!input) return 'GLOBAL';
  const trimmed = String(input).trim();
  if (trimmed.length === 2 && /^[A-Za-z]{2}$/.test(trimmed)) {
    return trimmed.toUpperCase();
  }
  const lc = trimmed.toLowerCase();
  return FULL_NAME_TO_ISO[lc] || 'GLOBAL';
}

export function isoToHreflang(iso: string): string {
  return ISO_TO_HREFLANG[iso.toUpperCase()] || 'en';
}

/** Day-8 hreflang builder. Returns a 3-link triplet to override SEOHead's
 *  auto-derived 9-variant blanket. */
export function buildCityHreflang(canonical: string, country: string | undefined | null): HreflangLink[] {
  const iso = normalizeCountry(country);
  const primary = isoToHreflang(iso);
  const links: HreflangLink[] = [{ hreflang: primary, href: canonical }];
  if (primary !== 'en') links.push({ hreflang: 'en', href: canonical });
  links.push({ hreflang: 'x-default', href: canonical });
  return links;
}
