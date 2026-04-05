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
  // ── USA — Top 20 Industrial/Energy Hubs ──────────────────────────
  'houston',              // World oil/gas capital, largest refining corridor
  'new-orleans',          // Gulf Coast petrochemical hub, offshore operations
  'dallas',               // Major energy corporate HQ center
  'los-angeles',          // Aerospace hub, port infrastructure
  'chicago',              // Heavy manufacturing, nuclear facilities
  'philadelphia',         // Refining corridor, defense manufacturing
  'pittsburgh',           // Steel industry, power generation
  'detroit',              // Automotive manufacturing hub
  'seattle',              // Boeing/aerospace manufacturing
  'denver',               // Oil/gas operations, mining
  'new-york',             // Construction, infrastructure inspection
  'atlanta',              // Aerospace, Lockheed Martin operations
  'san-francisco',        // Tech manufacturing, bridge/infrastructure
  'boston',                // Defense, GE Aviation, academia
  'phoenix',              // Semiconductor manufacturing
  'port-arthur-texas',    // Largest US refinery (Motiva)
  'lake-charles-louisiana', // LNG export, petrochemical corridor
  'baton-rouge',          // ExxonMobil refinery, chemical plants
  'corpus-christi',       // Port, refining, LNG export
  'tampa',                // Power generation, marine inspection
  'miami',                // Marine, cruise ship inspections

  // ── Middle East — Oil/Gas Powerhouses ────────────────────────────
  'abu-dhabi',            // ADNOC operations, offshore oil/gas
  'dubai',                // Construction boom, infrastructure
  'jubail-saudi-arabia',  // Largest industrial city, SABIC/Aramco
  'doha-qatar',           // LNG capital of the world
  'dammam-saudi-arabia',  // Saudi Aramco HQ region
  'ras-laffan-qatar',     // World's largest LNG processing
  'yanbu-saudi-arabia',   // Saudi Aramco refining hub
  'al-khobar-saudi-arabia', // Saudi industrial eastern province

  // ── Europe — Industrial Powerhouses ──────────────────────────────
  'aberdeen-united-kingdom', // North Sea oil/gas capital
  'rotterdam-netherlands',   // Europe's largest port, petrochemicals
  'hamburg-germany',         // Shipbuilding, aerospace (Airbus)
  'stavanger-norway',        // Norwegian oil/gas capital
  'london-united-kingdom',   // Engineering HQs, nuclear/rail
  'munich-germany',          // Aerospace, automotive (BMW)
  'toulouse-france',         // Airbus HQ, aerospace manufacturing
  'milan-italy',             // Heavy manufacturing, ENI operations
  'antwerp-belgium',         // Second-largest petrochemical cluster globally
  'gdansk-poland',           // Shipbuilding, offshore wind

  // ── Asia-Pacific — Major Industrial Centers ──────────────────────
  'singapore',            // Jurong Island petrochemical hub
  'mumbai-india',         // ONGC operations, offshore oil/gas
  'chennai',              // Major refining hub, automotive
  'perth-australia',      // Western Australia LNG/mining capital
  'tokyo-japan',          // Nuclear industry, heavy engineering
  'seoul-south-korea',    // Shipbuilding, nuclear, Samsung Heavy
  'shanghai-china',       // Largest manufacturing base globally
  'kuala-lumpur-malaysia', // Petronas operations, oil/gas
  'bangkok-thailand',     // Petrochemical corridor, automotive
  'hyderabad-india',      // Aerospace/defense manufacturing
  'ulsan-south-korea',    // Hyundai Heavy Industries, world's largest shipyard
  'geoje-south-korea',    // Samsung Heavy Industries shipyard
  'jamnagar-india',       // World's largest refinery (Reliance)
  'yokohama-japan',       // Major shipbuilding, JFE Steel
  'brisbane-australia',   // LNG projects, mining hub

  // ── Americas (non-US) & Africa ───────────────────────────────────
  'lagos-nigeria',              // West Africa oil/gas operations
  'luanda-angola',              // Offshore oil production hub
  'rio-de-janeiro-brazil',      // Petrobras operations, pre-salt oil
  'johannesburg-south-africa',  // Mining, power generation
  'calgary-canada',             // Canadian oil sands capital
  'edmonton-canada',            // Oil sands operations hub
]);

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
