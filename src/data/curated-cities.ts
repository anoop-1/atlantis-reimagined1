/**
 * Curated High-Value Cities for SEO Indexing
 * ────────────────────────────────────────────
 * Only these 60 cities get "index, follow" for city-templated pages.
 * All other city-template pages get "noindex, follow" to prevent
 * Google doorway page penalties from thin/duplicate content.
 *
 * Selection criteria:
 *   - Major oil/gas, petrochemical, refining hubs
 *   - Aerospace & defense manufacturing centers
 *   - Shipbuilding & marine inspection hubs
 *   - Nuclear & power generation centers
 *   - Cities where Atlantis NDT has real business presence
 *
 * To add a city: add its slug to CURATED_CITY_SLUGS below.
 * To check: import { isCuratedCity } from '@/data/curated-cities'
 *
 * Last updated: April 2026
 */

export const CURATED_CITY_SLUGS: Set<string> = new Set([
  // ── USA — Top 25 Industrial/Energy Hubs ──────────────────────────
  'houston',
  'new-orleans',
  'dallas',
  'los-angeles',
  'chicago',
  'philadelphia',
  'pittsburgh',
  'detroit',
  'seattle',
  'denver',
  'new-york',
  'atlanta',
  'san-francisco',
  'boston',
  'phoenix',
  'port-arthur-texas',
  'lake-charles-louisiana',
  'baton-rouge',
  'corpus-christi',
  'tampa',
  'miami',
  'odessa-texas',
  'midland-texas',
  'anchorage-alaska',
  'bakersfield-california',

  // ── Middle East — Oil/Gas Powerhouses ────────────────────────────
  'abu-dhabi',
  'dubai',
  'saudi-arabia',
  'kuwait',
  'muscat',
  'doha',
  'jubail-saudi-arabia',
  'doha-qatar',
  'dammam-saudi-arabia',
  'ras-laffan-qatar',
  'yanbu-saudi-arabia',
  'al-khobar-saudi-arabia',
  'ras-al-khaimah',
  'sohar-oman',
  'manama-bahrain',
  'basrah-iraq',
  'sharjah',

  // ── Europe — Industrial Powerhouses ──────────────────────────────
  'aberdeen',
  'aberdeen-united-kingdom',
  'rotterdam',
  'rotterdam-netherlands',
  'hamburg-germany',
  'stavanger-norway',
  'oslo',
  'london',
  'london-united-kingdom',
  'munich-germany',
  'toulouse-france',
  'milan-italy',
  'antwerp-belgium',
  'gdansk-poland',
  'bergen-norway',
  'sunderland-uk',

  // ── Asia-Pacific — Major Industrial Centers ──────────────────────
  'singapore',
  'mumbai',
  'mumbai-india',
  'chennai',
  'perth',
  'perth-australia',
  'tokyo-japan',
  'seoul-south-korea',
  'shanghai-china',
  'kuala-lumpur',
  'kuala-lumpur-malaysia',
  'bangkok-thailand',
  'hyderabad',
  'hyderabad-india',
  'ulsan-south-korea',
  'geoje-south-korea',
  'jamnagar-india',
  'yokohama-japan',
  'brisbane-australia',
  'melbourne-australia',
  'busan-south-korea',
  'tianjin-china',

  // ── Americas (non-US) & Africa ───────────────────────────────────
  'lagos',
  'lagos-nigeria',
  'luanda-angola',
  'port-harcourt-nigeria',
  'rio-de-janeiro-brazil',
  'johannesburg-south-africa',
  'calgary',
  'calgary-canada',
  'edmonton-canada',
  'mexico-city',
  'buenos-aires-argentina',
]);

/**
 * Product-page prefix list. Used to normalize slugs like
 *   digital-twin-houston  →  houston
 *   ndt-erp-abu-dhabi     →  abu-dhabi
 *   ndt-reporting-dubai   →  dubai
 * so product-templated city pages can be gated against CURATED_CITY_SLUGS.
 */
const PRODUCT_PREFIXES = [
  'digital-twin-',
  'ndt-erp-',
  'ndt-reporting-',
  'ndt-reporting-software-',
  'inspection-reporting-software-',
  'ndt-consulting-',
];

/**
 * Normalize a full page slug to its bare city slug for curation check.
 * Returns the input unchanged if no product prefix is found.
 */
export function cityFromProductSlug(slug: string): string {
  for (const p of PRODUCT_PREFIXES) {
    if (slug.startsWith(p)) return slug.slice(p.length);
  }
  return slug;
}

/**
 * Check if a city slug is in the curated high-value list.
 * Use this to determine whether a city-template page should be indexed.
 *
 * @param citySlug - The city slug from the URL (e.g., 'houston', 'abu-dhabi')
 * @returns true if the city is curated (should be indexed), false otherwise
 */
export function isCuratedCity(citySlug: string): boolean {
  return CURATED_CITY_SLUGS.has(citySlug);
}

/**
 * Total curated cities count.
 * Used for analytics and status reporting.
 */
export const CURATED_CITY_COUNT = CURATED_CITY_SLUGS.size;
