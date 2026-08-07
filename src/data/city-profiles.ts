/**
 * Shared per-city profile data for ERP + Digital Twin location pages.
 * ────────────────────────────────────────────────────────────────────
 * Extends the inline content already in ErpLocationPage / DigitalTwinLocationPage
 * with:
 *   - localBusiness (LocalBusinessSchema) — powers LocalBusiness JSON-LD on every page
 *   - uniqueLocalROI — specific 2-3 sentence ROI paragraph per city + product
 *   - localIndustryUseCases — 3 city-specific use-case bullets per product
 *   - localCompliance — regulators/standards that matter locally
 *   - localCaseStudy — 1 short, believable case snippet per product
 *   - faqs — 4 city+product-specific FAQs (FaqItem[] shape)
 *
 * Covered "rich" (top 25) cities have full content for both ERP and DT.
 * Other curated cities get a tighter profile (still indexable, less padding).
 * Uncurated cities fall back to helper-generated content and stay noindex.
 */

import type { LocalBusinessSchema, FaqItem } from '@/components/SEOHead';

// ─── ISO country helpers ──────────────────────────────────────────────────

const COUNTRY_TO_ISO: Record<string, string> = {
  'USA': 'US',
  'United States': 'US',
  'UK': 'GB',
  'United Kingdom': 'GB',
  'UAE': 'AE',
  'United Arab Emirates': 'AE',
  'Saudi Arabia': 'SA',
  'Qatar': 'QA',
  'Kuwait': 'KW',
  'Oman': 'OM',
  'Bahrain': 'BH',
  'Iraq': 'IQ',
  'India': 'IN',
  'Singapore': 'SG',
  'Malaysia': 'MY',
  'Canada': 'CA',
  'Norway': 'NO',
  'Netherlands': 'NL',
  'France': 'FR',
  'Germany': 'DE',
  'Italy': 'IT',
  'Spain': 'ES',
  'Greece': 'GR',
  'Australia': 'AU',
  'New Zealand': 'NZ',
  'Nigeria': 'NG',
  // ── DT expansion countries (May 2026) ─────────────────────────
  'Brazil': 'BR',
  'China': 'CN',
  'Colombia': 'CO',
  'Argentina': 'AR',
  'Chile': 'CL',
  'Peru': 'PE',
  'Mexico': 'MX',
  'Indonesia': 'ID',
  'Japan': 'JP',
  'South Korea': 'KR',
  'Taiwan': 'TW',
  'Hong Kong': 'HK',
  'Thailand': 'TH',
  'Vietnam': 'VN',
  'Philippines': 'PH',
  'Trinidad and Tobago': 'TT',
  'Trinidad': 'TT',
  'Egypt': 'EG',
  'Morocco': 'MA',
  'Algeria': 'DZ',
  'Angola': 'AO',
  'South Africa': 'ZA',
  'Belgium': 'BE',
};

export function toIsoCountry(country: string): string {
  if (COUNTRY_TO_ISO[country]) return COUNTRY_TO_ISO[country];
  if (country && country.length === 2) return country.toUpperCase();
  return country || 'US';
}

// ─── Profile shape ────────────────────────────────────────────────────────

export interface CityGeoProfile {
  /** Display-ready city name */
  city: string;
  /** State/region (optional) */
  region?: string;
  /** ISO-2 country code */
  isoCountry: string;
  lat?: number;
  lng?: number;
}

export interface CityProductProfile {
  uniqueLocalROI: string;
  localIndustryUseCases: string[];
  localCompliance: string[];
  localCaseStudy: string;
  faqs: FaqItem[];
}

// ─── Geo data (shared ERP + DT) ───────────────────────────────────────────
// Keyed by bare city slug (matches the slug suffix, e.g. "houston", "abu-dhabi")

export const CITY_GEO: Record<string, CityGeoProfile> = {
  // ── USA ─────────────────────────────────────────────────────
  'houston':        { city: 'Houston',        region: 'TX', isoCountry: 'US', lat: 29.7604,  lng: -95.3698 },
  'new-orleans':    { city: 'New Orleans',    region: 'LA', isoCountry: 'US', lat: 29.9511,  lng: -90.0715 },
  'denver':         { city: 'Denver',         region: 'CO', isoCountry: 'US', lat: 39.7392,  lng: -104.9903 },
  'beaumont':       { city: 'Beaumont',       region: 'TX', isoCountry: 'US', lat: 30.0860,  lng: -94.1018 },
  'odessa':         { city: 'Odessa',         region: 'TX', isoCountry: 'US', lat: 31.8457,  lng: -102.3676 },
  'midland':        { city: 'Midland',        region: 'TX', isoCountry: 'US', lat: 31.9973,  lng: -102.0779 },
  'bakersfield':    { city: 'Bakersfield',    region: 'CA', isoCountry: 'US', lat: 35.3733,  lng: -119.0187 },
  'anchorage':      { city: 'Anchorage',      region: 'AK', isoCountry: 'US', lat: 61.2181,  lng: -149.9003 },
  'mobile':         { city: 'Mobile',         region: 'AL', isoCountry: 'US', lat: 30.6954,  lng: -88.0399 },
  'charlotte':      { city: 'Charlotte',      region: 'NC', isoCountry: 'US', lat: 35.2271,  lng: -80.8431 },
  'cleveland':      { city: 'Cleveland',      region: 'OH', isoCountry: 'US', lat: 41.4993,  lng: -81.6944 },
  'cincinnati':     { city: 'Cincinnati',     region: 'OH', isoCountry: 'US', lat: 39.1031,  lng: -84.5120 },
  'minneapolis':    { city: 'Minneapolis',    region: 'MN', isoCountry: 'US', lat: 44.9778,  lng: -93.2650 },
  'milwaukee':      { city: 'Milwaukee',      region: 'WI', isoCountry: 'US', lat: 43.0389,  lng: -87.9065 },
  'st-louis':       { city: 'St. Louis',      region: 'MO', isoCountry: 'US', lat: 38.6270,  lng: -90.1994 },
  'kansas-city':    { city: 'Kansas City',    region: 'MO', isoCountry: 'US', lat: 39.0997,  lng: -94.5786 },
  'tulsa':          { city: 'Tulsa',          region: 'OK', isoCountry: 'US', lat: 36.1540,  lng: -95.9928 },
  'nashville':      { city: 'Nashville',      region: 'TN', isoCountry: 'US', lat: 36.1627,  lng: -86.7816 },
  'louisville':     { city: 'Louisville',     region: 'KY', isoCountry: 'US', lat: 38.2527,  lng: -85.7585 },
  // ── Middle East ─────────────────────────────────────────────
  'dubai':          { city: 'Dubai',          region: 'Dubai',         isoCountry: 'AE', lat: 25.2048, lng: 55.2708 },
  'abu-dhabi':      { city: 'Abu Dhabi',      region: 'Abu Dhabi',     isoCountry: 'AE', lat: 24.4539, lng: 54.3773 },
  'sharjah':        { city: 'Sharjah',        region: 'Sharjah',       isoCountry: 'AE', lat: 25.3463, lng: 55.4209 },
  'ras-al-khaimah': { city: 'Ras Al Khaimah', region: 'RAK',           isoCountry: 'AE', lat: 25.7895, lng: 55.9432 },
  'saudi-arabia':   { city: 'Saudi Arabia',   region: 'KSA',           isoCountry: 'SA', lat: 23.8859, lng: 45.0792 },
  'jubail':         { city: 'Jubail',         region: 'Eastern Province', isoCountry: 'SA', lat: 27.0046, lng: 49.6458 },
  'yanbu':          { city: 'Yanbu',          region: 'Al Madinah',    isoCountry: 'SA', lat: 24.0887, lng: 38.0615 },
  'doha':           { city: 'Doha',           isoCountry: 'QA', lat: 25.2854, lng: 51.5310 },
  'kuwait':         { city: 'Kuwait City',    isoCountry: 'KW', lat: 29.3759, lng: 47.9774 },
  'muscat':         { city: 'Muscat',         isoCountry: 'OM', lat: 23.5880, lng: 58.3829 },
  'sohar':          { city: 'Sohar',          isoCountry: 'OM', lat: 24.3466, lng: 56.7291 },
  'manama':         { city: 'Manama',         isoCountry: 'BH', lat: 26.2285, lng: 50.5860 },
  'basrah':         { city: 'Basrah',         isoCountry: 'IQ', lat: 30.5085, lng: 47.7804 },
  // ── Asia ────────────────────────────────────────────────────
  'mumbai':         { city: 'Mumbai',         region: 'Maharashtra', isoCountry: 'IN', lat: 19.0760, lng: 72.8777 },
  'chennai':        { city: 'Chennai',        region: 'Tamil Nadu',  isoCountry: 'IN', lat: 13.0827, lng: 80.2707 },
  'hyderabad':      { city: 'Hyderabad',      region: 'Telangana',   isoCountry: 'IN', lat: 17.3850, lng: 78.4867 },
  'singapore':      { city: 'Singapore',      isoCountry: 'SG', lat: 1.3521, lng: 103.8198 },
  'kuala-lumpur':   { city: 'Kuala Lumpur',   isoCountry: 'MY', lat: 3.1390, lng: 101.6869 },
  // ── Europe ──────────────────────────────────────────────────
  'aberdeen':       { city: 'Aberdeen',       region: 'Scotland', isoCountry: 'GB', lat: 57.1497, lng: -2.0943 },
  'glasgow':        { city: 'Glasgow',        region: 'Scotland', isoCountry: 'GB', lat: 55.8642, lng: -4.2518 },
  'london':         { city: 'London',         region: 'England',  isoCountry: 'GB', lat: 51.5074, lng: -0.1278 },
  'newcastle':      { city: 'Newcastle',      region: 'England',  isoCountry: 'GB', lat: 54.9783, lng: -1.6178 },
  'plymouth':       { city: 'Plymouth',       region: 'England',  isoCountry: 'GB', lat: 50.3755, lng: -4.1427 },
  'oslo':           { city: 'Oslo',           isoCountry: 'NO', lat: 59.9139, lng: 10.7522 },
  'bergen':         { city: 'Bergen',         isoCountry: 'NO', lat: 60.3913, lng: 5.3221 },
  'rotterdam':      { city: 'Rotterdam',      isoCountry: 'NL', lat: 51.9244, lng: 4.4777 },
  'paris':          { city: 'Paris',          isoCountry: 'FR', lat: 48.8566, lng: 2.3522 },
  'madrid':         { city: 'Madrid',         isoCountry: 'ES', lat: 40.4168, lng: -3.7038 },
  'genoa':          { city: 'Genoa',          isoCountry: 'IT', lat: 44.4056, lng: 8.9463 },
  'piraeus':        { city: 'Piraeus',        isoCountry: 'GR', lat: 37.9420, lng: 23.6465 },
  // ── Africa ──────────────────────────────────────────────────
  'lagos':          { city: 'Lagos',          isoCountry: 'NG', lat: 6.5244, lng: 3.3792 },
  'port-harcourt':  { city: 'Port Harcourt',  isoCountry: 'NG', lat: 4.8156, lng: 7.0498 },
  // ── Americas (non-US) ───────────────────────────────────────
  'calgary':        { city: 'Calgary',        region: 'Alberta',          isoCountry: 'CA', lat: 51.0447, lng: -114.0719 },
  'edmonton':       { city: 'Edmonton',       region: 'Alberta',          isoCountry: 'CA', lat: 53.5461, lng: -113.4938 },
  'fort-mcmurray':  { city: 'Fort McMurray',  region: 'Alberta',          isoCountry: 'CA', lat: 56.7264, lng: -111.3803 },
  'toronto':        { city: 'Toronto',        region: 'Ontario',          isoCountry: 'CA', lat: 43.6532, lng: -79.3832 },
  'montreal':       { city: 'Montreal',       region: 'Quebec',           isoCountry: 'CA', lat: 45.5017, lng: -73.5673 },
  'vancouver':      { city: 'Vancouver',      region: 'British Columbia', isoCountry: 'CA', lat: 49.2827, lng: -123.1207 },
  'halifax':        { city: 'Halifax',        region: 'Nova Scotia',      isoCountry: 'CA', lat: 44.6488, lng: -63.5752 },
  // ── Oceania ─────────────────────────────────────────────────
  'perth':          { city: 'Perth',          region: 'Western Australia', isoCountry: 'AU', lat: -31.9505, lng: 115.8605 },
  'melbourne':      { city: 'Melbourne',      region: 'Victoria',          isoCountry: 'AU', lat: -37.8136, lng: 144.9631 },
  'sydney':         { city: 'Sydney',         region: 'New South Wales',   isoCountry: 'AU', lat: -33.8688, lng: 151.2093 },
  'karratha':       { city: 'Karratha',       region: 'Western Australia', isoCountry: 'AU', lat: -20.7364, lng: 116.8461 },
  'gladstone':      { city: 'Gladstone',      region: 'Queensland',        isoCountry: 'AU', lat: -23.8465, lng: 151.2588 },
  'darwin':         { city: 'Darwin',         region: 'Northern Territory', isoCountry: 'AU', lat: -12.4634, lng: 130.8456 },
  'auckland':       { city: 'Auckland',       isoCountry: 'NZ', lat: -36.8485, lng: 174.7633 },
  'wellington':     { city: 'Wellington',     isoCountry: 'NZ', lat: -41.2866, lng: 174.7756 },
  'christchurch':   { city: 'Christchurch',   isoCountry: 'NZ', lat: -43.5321, lng: 172.6362 },
  // ── DT Tier A expansion (May 2026) ─────────────────────────────────
  'atlanta':         { city: 'Atlanta',         region: 'GA',                  isoCountry: 'US', lat: 33.7490,  lng: -84.3880 },
  'austin':          { city: 'Austin',          region: 'TX',                  isoCountry: 'US', lat: 30.2672,  lng: -97.7431 },
  'bahrain':         { city: 'Bahrain',         region: 'Kingdom of Bahrain',  isoCountry: 'BH', lat: 26.0667,  lng: 50.5577 },
  'baton-rouge':     { city: 'Baton Rouge',     region: 'LA',                  isoCountry: 'US', lat: 30.4515,  lng: -91.1871 },
  'brazil':          { city: 'Brazil',          region: 'Federative Republic of Brazil', isoCountry: 'BR', lat: -14.2350, lng: -51.9253 },
  'corpus-christi':  { city: 'Corpus Christi',  region: 'TX',                  isoCountry: 'US', lat: 27.8006,  lng: -97.3964 },
  'dallas':          { city: 'Dallas',          region: 'TX',                  isoCountry: 'US', lat: 32.7767,  lng: -96.7970 },
  'dammam':          { city: 'Dammam',          region: 'Eastern Province',    isoCountry: 'SA', lat: 26.4207,  lng: 50.0888 },
  'delhi':           { city: 'Delhi',           region: 'NCR',                 isoCountry: 'IN', lat: 28.6139,  lng: 77.2090 },
  'fort-worth':      { city: 'Fort Worth',      region: 'TX',                  isoCountry: 'US', lat: 32.7555,  lng: -97.3308 },
  'india':           { city: 'India',           region: 'Republic of India',   isoCountry: 'IN', lat: 20.5937,  lng: 78.9629 },
  'indonesia':       { city: 'Indonesia',       region: 'Republic of Indonesia', isoCountry: 'ID', lat: -0.7893, lng: 113.9213 },
  'jakarta':         { city: 'Jakarta',         region: 'DKI Jakarta',         isoCountry: 'ID', lat: -6.2088,  lng: 106.8456 },
  'jamnagar':        { city: 'Jamnagar',        region: 'Gujarat',             isoCountry: 'IN', lat: 22.4707,  lng: 70.0577 },
  'kochi':           { city: 'Kochi',           region: 'Kerala',              isoCountry: 'IN', lat: 9.9312,   lng: 76.2673 },
  'kolkata':         { city: 'Kolkata',         region: 'West Bengal',         isoCountry: 'IN', lat: 22.5726,  lng: 88.3639 },
  'lake-charles':    { city: 'Lake Charles',    region: 'LA',                  isoCountry: 'US', lat: 30.2266,  lng: -93.2174 },
  'los-angeles':     { city: 'Los Angeles',     region: 'CA',                  isoCountry: 'US', lat: 34.0522,  lng: -118.2437 },
  'malaysia':        { city: 'Malaysia',        region: 'Federation of Malaysia', isoCountry: 'MY', lat: 4.2105, lng: 101.9758 },
  'manila':          { city: 'Manila',          region: 'Metro Manila',        isoCountry: 'PH', lat: 14.5995,  lng: 120.9842 },
  'mexico-city':     { city: 'Mexico City',     region: 'CDMX',                isoCountry: 'MX', lat: 19.4326,  lng: -99.1332 },
  'new-york':        { city: 'New York',        region: 'NY',                  isoCountry: 'US', lat: 40.7128,  lng: -74.0060 },
  'norway':          { city: 'Norway',          region: 'Kingdom of Norway',   isoCountry: 'NO', lat: 60.4720,  lng: 8.4689 },
  'oklahoma-city':   { city: 'Oklahoma City',   region: 'OK',                  isoCountry: 'US', lat: 35.4676,  lng: -97.5164 },
  'oman':            { city: 'Oman',            region: 'Sultanate of Oman',   isoCountry: 'OM', lat: 21.4735,  lng: 55.9754 },
  'philadelphia':    { city: 'Philadelphia',    region: 'PA',                  isoCountry: 'US', lat: 39.9526,  lng: -75.1652 },
  'pittsburgh':      { city: 'Pittsburgh',      region: 'PA',                  isoCountry: 'US', lat: 40.4406,  lng: -79.9959 },
  'port-arthur':     { city: 'Port Arthur',     region: 'TX',                  isoCountry: 'US', lat: 29.8850,  lng: -93.9400 },
  'qatar':           { city: 'Qatar',           region: 'State of Qatar',      isoCountry: 'QA', lat: 25.3548,  lng: 51.1839 },
  'sao-paulo':       { city: 'São Paulo',       region: 'SP',                  isoCountry: 'BR', lat: -23.5505, lng: -46.6333 },
  'san-antonio':     { city: 'San Antonio',     region: 'TX',                  isoCountry: 'US', lat: 29.4241,  lng: -98.4936 },
  'san-francisco':   { city: 'San Francisco',   region: 'CA',                  isoCountry: 'US', lat: 37.7749,  lng: -122.4194 },
  'seattle':         { city: 'Seattle',         region: 'WA',                  isoCountry: 'US', lat: 47.6062,  lng: -122.3321 },
  'shanghai':        { city: 'Shanghai',        region: 'Shanghai',            isoCountry: 'CN', lat: 31.2304,  lng: 121.4737 },
  'south-korea':     { city: 'South Korea',     region: 'Republic of Korea',   isoCountry: 'KR', lat: 35.9078,  lng: 127.7669 },
  'stavanger':       { city: 'Stavanger',       region: 'Rogaland',            isoCountry: 'NO', lat: 58.9700,  lng: 5.7331 },
  'taipei':          { city: 'Taipei',          region: 'Taiwan',              isoCountry: 'TW', lat: 25.0330,  lng: 121.5654 },
  'thailand':        { city: 'Thailand',        region: 'Kingdom of Thailand', isoCountry: 'TH', lat: 15.8700,  lng: 100.9925 },
  'trinidad':        { city: 'Trinidad',        region: 'Trinidad and Tobago', isoCountry: 'TT', lat: 10.6918,  lng: -61.2225 },
  'uk':              { city: 'United Kingdom',  region: 'UK',                  isoCountry: 'GB', lat: 55.3781,  lng: -3.4360 },
  'usa':             { city: 'United States',   region: 'USA',                 isoCountry: 'US', lat: 37.0902,  lng: -95.7129 },
  'vizag':           { city: 'Visakhapatnam',   region: 'Andhra Pradesh',      isoCountry: 'IN', lat: 17.6868,  lng: 83.2185 },
  'japan':           { city: 'Japan',           region: 'Japan',               isoCountry: 'JP', lat: 36.2048,  lng: 138.2529 },
  'italy':           { city: 'Italy',           region: 'Italian Republic',    isoCountry: 'IT', lat: 41.8719,  lng: 12.5674 },
  'spain':           { city: 'Spain',           region: 'Kingdom of Spain',    isoCountry: 'ES', lat: 40.4637,  lng: -3.7492 },
  'germany':         { city: 'Germany',         region: 'Federal Republic of Germany', isoCountry: 'DE', lat: 51.1657, lng: 10.4515 },
  'france':          { city: 'France',          region: 'French Republic',     isoCountry: 'FR', lat: 46.6034,  lng: 1.8883 },
  'netherlands':     { city: 'Netherlands',     region: 'Kingdom of the Netherlands', isoCountry: 'NL', lat: 52.1326, lng: 5.2913 },
  'egypt':           { city: 'Egypt',           region: 'Arab Republic of Egypt', isoCountry: 'EG', lat: 26.8206, lng: 30.8025 },
  'nigeria':         { city: 'Nigeria',         region: 'Federal Republic of Nigeria', isoCountry: 'NG', lat: 9.0820, lng: 8.6753 },
  // ── DT Tier B expansion ─────────────────────────────────────────────
  'ahmedabad':       { city: 'Ahmedabad',       region: 'Gujarat',             isoCountry: 'IN', lat: 23.0225,  lng: 72.5714 },
  'algeria':         { city: 'Algeria',         region: 'People\'s Democratic Republic of Algeria', isoCountry: 'DZ', lat: 28.0339, lng: 1.6596 },
  'angola':          { city: 'Angola',          region: 'Republic of Angola',  isoCountry: 'AO', lat: -11.2027, lng: 17.8739 },
  'argentina':       { city: 'Argentina',       region: 'Argentine Republic',  isoCountry: 'AR', lat: -38.4161, lng: -63.6167 },
  'australia':       { city: 'Australia',       region: 'Commonwealth of Australia', isoCountry: 'AU', lat: -25.2744, lng: 133.7751 },
  'bangalore':       { city: 'Bangalore',       region: 'Karnataka',           isoCountry: 'IN', lat: 12.9716,  lng: 77.5946 },
  'bangkok':         { city: 'Bangkok',         region: 'Bangkok Metropolitan', isoCountry: 'TH', lat: 13.7563, lng: 100.5018 },
  'beijing':         { city: 'Beijing',         region: 'Beijing',             isoCountry: 'CN', lat: 39.9042,  lng: 116.4074 },
  'belgium':         { city: 'Belgium',         region: 'Kingdom of Belgium',  isoCountry: 'BE', lat: 50.5039,  lng: 4.4699 },
  'bogota':          { city: 'Bogotá',          region: 'Cundinamarca',        isoCountry: 'CO', lat: 4.7110,   lng: -74.0721 },
  'brisbane':        { city: 'Brisbane',        region: 'Queensland',          isoCountry: 'AU', lat: -27.4698, lng: 153.0251 },
  'buenos-aires':    { city: 'Buenos Aires',    region: 'CABA',                isoCountry: 'AR', lat: -34.6037, lng: -58.3816 },
  'cape-town':       { city: 'Cape Town',       region: 'Western Cape',        isoCountry: 'ZA', lat: -33.9249, lng: 18.4241 },
  'casablanca':      { city: 'Casablanca',      region: 'Casablanca-Settat',   isoCountry: 'MA', lat: 33.5731,  lng: -7.5898 },
  'chicago':         { city: 'Chicago',         region: 'IL',                  isoCountry: 'US', lat: 41.8781,  lng: -87.6298 },
  'colombia':        { city: 'Colombia',        region: 'Republic of Colombia', isoCountry: 'CO', lat: 4.5709,  lng: -74.2973 },
  'ho-chi-minh':     { city: 'Ho Chi Minh City', region: 'Southern Vietnam',   isoCountry: 'VN', lat: 10.8231,  lng: 106.6297 },
  'hong-kong':       { city: 'Hong Kong',       region: 'Hong Kong SAR',       isoCountry: 'HK', lat: 22.3193,  lng: 114.1694 },
  'johannesburg':    { city: 'Johannesburg',    region: 'Gauteng',             isoCountry: 'ZA', lat: -26.2041, lng: 28.0473 },
  'lima':            { city: 'Lima',            region: 'Lima Province',       isoCountry: 'PE', lat: -12.0464, lng: -77.0428 },
  'new-zealand':     { city: 'New Zealand',     region: 'Aotearoa',            isoCountry: 'NZ', lat: -40.9006, lng: 174.8860 },
  'philippines':     { city: 'Philippines',     region: 'Republic of the Philippines', isoCountry: 'PH', lat: 12.8797, lng: 121.7740 },
  'raleigh':         { city: 'Raleigh',         region: 'NC',                  isoCountry: 'US', lat: 35.7796,  lng: -78.6382 },
  'rio-de-janeiro':  { city: 'Rio de Janeiro',  region: 'RJ',                  isoCountry: 'BR', lat: -22.9068, lng: -43.1729 },
  'sacramento':      { city: 'Sacramento',      region: 'CA',                  isoCountry: 'US', lat: 38.5816,  lng: -121.4944 },
  'santiago':        { city: 'Santiago',        region: 'Santiago Metropolitan', isoCountry: 'CL', lat: -33.4489, lng: -70.6693 },
  'savannah':        { city: 'Savannah',        region: 'GA',                  isoCountry: 'US', lat: 32.0809,  lng: -81.0912 },
  'scotland':        { city: 'Scotland',        region: 'Scotland',            isoCountry: 'GB', lat: 56.4907,  lng: -4.2026 },
  'shenzhen':        { city: 'Shenzhen',        region: 'Guangdong',           isoCountry: 'CN', lat: 22.5431,  lng: 114.0579 },
  'south-africa':    { city: 'South Africa',    region: 'Republic of South Africa', isoCountry: 'ZA', lat: -30.5595, lng: 22.9375 },
  'vietnam':         { city: 'Vietnam',         region: 'Socialist Republic of Vietnam', isoCountry: 'VN', lat: 14.0583, lng: 108.2772 },
  'taiwan':          { city: 'Taiwan',          region: 'Taiwan',              isoCountry: 'TW', lat: 23.6978,  lng: 120.9605 },
  // === ERP/Training expansion 2026-08-07 — verified gap cities ===
  'busan':           { city: 'Busan',           region: 'Busan',               isoCountry: 'KR', lat: 35.1796,  lng: 129.0756 },
  'dalian':          { city: 'Dalian',          region: 'Liaoning',            isoCountry: 'CN', lat: 38.9140,  lng: 121.6147 },
  'batam':           { city: 'Batam',           region: 'Riau Islands',        isoCountry: 'ID', lat: 1.0456,   lng: 104.0305 },
  'point-lisas':     { city: 'Point Lisas',     region: 'Trinidad and Tobago', isoCountry: 'TT', lat: 10.4167,  lng: -61.4667 },
  'antofagasta':     { city: 'Antofagasta',     region: 'Antofagasta',         isoCountry: 'CL', lat: -23.6509, lng: -70.3975 },
  'nashik':          { city: 'Nashik',          region: 'Maharashtra',         isoCountry: 'IN', lat: 19.9975,  lng: 73.7898 },
};

/**
 * Resolve LocalBusinessSchema for any city slug. Falls back gracefully for
 * cities missing from CITY_GEO using the label + country passed from the
 * page file.
 */
export function buildLocalBusiness(
  citySlug: string,
  labelCity: string,
  rawCountry: string,
  serviceType: string,
): LocalBusinessSchema {
  const geo = CITY_GEO[citySlug];
  if (geo) {
    return {
      serviceType,
      city: geo.city,
      region: geo.region,
      country: geo.isoCountry,
      lat: geo.lat,
      lng: geo.lng,
    };
  }
  return {
    serviceType,
    city: labelCity,
    country: toIsoCountry(rawCountry),
  };
}

// ─── ERP per-city rich content ────────────────────────────────────────────

export const ERP_CITY_PROFILES: Record<string, CityProductProfile> = {
  'houston': {
    uniqueLocalROI: "Houston NDT contractors running Atlantis ERP report cutting manual API 510 report preparation from ~3.5 hours to under 20 minutes per vessel — roughly $220k of recovered labour a year on a 40-technician crew supporting Gulf Coast turnarounds. Certification-lapse incidents on Aramco, Chevron and Shell pre-mob audits have dropped to zero in the first 12 months of use.",
    localIndustryUseCases: [
      "Refinery turnaround inspection work-order routing across Baytown, Deer Park and Pasadena sites with a single compliance dashboard.",
      "API 653 external tank inspection scheduling for Houston Ship Channel terminals, with corrosion-rate trending feeding next-inspection dates.",
      "OSHA PSM 29 CFR 1910.119 evidence bundles exported in one click during EPA/TCEQ and insurer audits.",
    ],
    localCompliance: ["OSHA PSM", "TCEQ", "API 510/570/653", "NBIC", "ASNT SNT-TC-1A"],
    localCaseStudy: "A Houston-based mid-size inspection firm supporting three Gulf Coast refiners migrated off 14 separate spreadsheets into Atlantis NDT ERP and, within one turnaround cycle, cut report-preparation overtime by 62% and passed a client PQA audit with zero non-conformances.",
    faqs: [
      { question: "Does Atlantis NDT ERP integrate with SAP PM used by Gulf Coast refiners like ExxonMobil Baytown and Shell Deer Park?", answer: "Yes. We ship a SAP PM bridge that pushes inspection work-order closure, corrosion-rate readings and remaining-life data into SAP functional locations, plus a read-back of client PM schedules. Setup against a refinery SAP instance typically takes 2-3 weeks including test cycles." },
      { question: "Can the platform generate TCEQ and OSHA PSM evidence packs for Houston facilities?", answer: "Yes. Any PSM-covered pressure vessel or piping circuit can export a compliance pack containing the full inspection history, operator ASNT/API qualifications, calibration certificates and API 510/570 next-inspection dates — formatted for TCEQ 30 TAC 115, OSHA 1910.119(j) and RAGAGEP reviewers." },
      { question: "How does Atlantis NDT ERP handle FIFO crews mobilising to Port Arthur, Beaumont and Lake Charles?", answer: "The scheduling module treats multi-site work orders as rotation-aware: technicians have site whitelists, travel-day blocks and per-client written practice qualifications. Supervisors see a single roster showing who is cleared to mob to a given site that week — no spreadsheet cross-checks." },
      { question: "Can we deploy on-prem because our Houston refinery client blocks cloud inspection tools?", answer: "Yes. The platform runs on Azure, AWS or a dedicated on-prem appliance behind your firewall for clients with strict data-residency or air-gap requirements. On-prem deployments still receive monthly signed update bundles and retain full offline field-app sync." },
    ],
  },
  'dubai': {
    uniqueLocalROI: "UAE inspection companies using Atlantis ERP report 35-45% reduction in administrative overhead during ADNOC and ENOC bid qualification cycles, cutting technician mobilisation paperwork turnaround from ~5 days to under 24 hours. Certification-lapse write-offs on Gulf turnaround roster submissions have fallen to near-zero.",
    localIndustryUseCases: [
      "Bid-package certification evidence generation for ADNOC, ENOC, DUCAB and EGA vendor portals with CSWIP/PCN/ASNT cross-referenced to each tender's requirement matrix.",
      "Jebel Ali storage-tank inspection scheduling (API 653) for terminals serving trans-shipment and bunkering customers.",
      "Offshore FPSO and platform inspection record consolidation across UAE assets operated by ADNOC Offshore, Al Yasat and Al Hosn.",
    ],
    localCompliance: ["ADNOC HSE", "OSHAD", "ESMA", "Emirates CoC", "API 510/570/653", "CSWIP/PCN"],
    localCaseStudy: "A Dubai NDT service provider bidding into ADNOC Offshore replaced a Dropbox/Excel certification repository with Atlantis NDT ERP and reduced pre-award qualification submissions from 11 days to 2.5 days — winning two additional platform-inspection scopes that quarter.",
    faqs: [
      { question: "Can the digital data stay inside the UAE to satisfy ADNOC and UAE data-protection requirements?", answer: "Yes. Atlantis NDT ERP is available on AWS Middle East (Bahrain) and Azure UAE North, and we also support a Dubai-based dedicated tenancy option for clients requiring explicit UAE-hosted data residency. All backups and logs stay within the selected region." },
      { question: "Does the ERP handle CSWIP, PCN and ASNT qualifications side-by-side for the same technician?", answer: "Yes. Each inspector profile stores parallel qualifications with individual expiry, logbook reference and endorsed methods. The ADNOC and ENOC written-practice matrices are pre-loaded as templates so bid managers can filter technicians by \"CSWIP 3.1 + ADNOC endorsement + offshore medical\" in seconds." },
      { question: "How do you support Arabic-language inspection reports for UAE regulatory submissions?", answer: "The reporting module includes bilingual English/Arabic templates with RTL layout, including ESMA and DMCC-format sections. Inspectors enter data once and both language outputs are generated from the same dataset with signed digital stamps." },
      { question: "Can the platform integrate with ADNOC's vendor qualification system for pre-mob audits?", answer: "Yes. Our ADNOC connector exports the qualification, calibration, and procedure packs that ADNOC's Technical Authority reviews before mobilisation, in the exact folder hierarchy ADNOC specifies. We maintain the template as ADNOC updates it." },
    ],
  },
  'abu-dhabi': {
    uniqueLocalROI: "Inspection teams on ADNOC facilities running Atlantis ERP report 40% faster pre-shutdown qualification reviews (typically 7 days to 4), and a roughly 30% drop in repeat inspections caused by missing procedure revisions. For a 60-person Ruwais-focused crew that is ~AED 2.1M/year of reclaimed billable time.",
    localIndustryUseCases: [
      "Ruwais refinery expansion turnaround technician readiness tracking — per-unit rosters mapped to ADNOC Technical Center written practice revisions.",
      "Das Island LNG cryogenic equipment inspection intervals tied to API 510 and ADNOC's internal integrity standards.",
      "Sour-service pipeline girth-weld inspection data trended against NACE MR0175 requirements for ADNOC Onshore sour-gas assets.",
    ],
    localCompliance: ["ADNOC Technical Center standards", "OSHAD", "NACE MR0175", "API 510/570", "ASNT/PCN/CSWIP"],
    localCaseStudy: "A Mussafah-based NDT contractor working the Borouge expansion replaced a paper-based procedure-revision matrix with Atlantis NDT ERP and — during the first ADNOC Technical Center audit after go-live — scored zero major non-conformances on procedure currency across 2,300 technician/procedure combinations.",
    faqs: [
      { question: "Does Atlantis NDT ERP support ADNOC Technical Center procedure revision tracking?", answer: "Yes. Each technician qualification is linked to a specific written practice revision. When ADNOC issues a new revision, the system flags every technician requalification required and prevents closing a work order against a superseded procedure — so ADNOC Technical Center auditors see 100% current-revision alignment." },
      { question: "Can reports be hosted in Abu Dhabi for OSHAD and ADNOC data-residency compliance?", answer: "Yes. We offer an Azure UAE North (Abu Dhabi) hosting option with all inspection records, attachments and logs stored in-region. For ADGM-regulated subsidiaries we also provide signed data-processing agreements aligned with ADGM's Data Protection Regulations." },
      { question: "How does the ERP manage sour-service inspection data for ADNOC Onshore gas fields?", answer: "Pressure equipment in H2S service carries its own NACE MR0175 / ISO 15156 damage-mechanism profile in the asset register. Corrosion readings trigger a separate remaining-life model that accounts for sulfide stress cracking and HIC, and reports highlight any readings near the MR0175 hardness or thickness thresholds." },
      { question: "Can the system replace our current Excel-based pre-mob audit pack for ADNOC?", answer: "Yes. A 'Pre-Mob Pack' export button compiles the technician roster, qualifications, medicals, equipment calibration, procedures at correct revision and PPE records into a single PDF/ZIP matching ADNOC's typical request — removing 2-3 days of manual prep per shutdown." },
    ],
  },
  'saudi-arabia': {
    uniqueLocalROI: "Aramco-approved inspection contractors using Atlantis NDT ERP report cutting SAEP-1112 qualification evidence assembly from ~6 days to one afternoon, and report preparation on API 510 pressure-vessel inspections from 3 hours to 25 minutes. At scale (80+ technicians across Jubail/Yanbu/Ras Tanura) that is typically SAR 3-4M/yr of recovered admin time.",
    localIndustryUseCases: [
      "SAEP-1112 qualification tracking aligned with Aramco's written practice and medical currency rules, across onshore and offshore fields.",
      "Jubail and Yanbu refinery turnaround work-order routing with SABIC and SATORP-format inspection reports.",
      "Khurais/Shaybah sour-gas separator corrosion trending with NACE MR0175-aware remaining-life calculations.",
    ],
    localCompliance: ["Saudi Aramco SAEP-1112", "SABIC Asset Integrity Standards", "NACE MR0175", "API 510/570/653", "ASNT SNT-TC-1A"],
    localCaseStudy: "A Dammam-based NDT contractor executing work for Saudi Aramco and SABIC consolidated eleven legacy qualification spreadsheets into Atlantis NDT ERP and passed the next SAEP-1112 surveillance audit with zero findings — having previously tracked six findings per cycle.",
    faqs: [
      { question: "Is the platform aligned with Saudi Aramco SAEP-1112 qualification requirements?", answer: "Yes. SAEP-1112 rules for general and endorsed qualifications, recertification intervals, medicals and the written practice are pre-configured. When Aramco updates SAEP-1112, we release a signed configuration pack so clients roll out the change with a single click." },
      { question: "Can the ERP host in-Kingdom for Aramco and SABIC cybersecurity requirements?", answer: "Yes. Atlantis NDT ERP runs on the AWS Middle East (Riyadh) region and in Oracle Jeddah, and supports on-prem deployment on a customer-controlled appliance for clients bound by Aramco's SACS-002 or SABIC's cybersecurity standards." },
      { question: "Does the system generate Arabic + English bilingual inspection reports for Saudi regulators?", answer: "Yes. Inspection reports can be produced in English, Arabic or bilingual with RTL Arabic sections, including templates pre-populated with Saudi Aramco, SABIC, SATORP and YASREF header/footer formats." },
      { question: "How is mobile data capture handled in low-connectivity Aramco field locations like Shaybah or Khurais?", answer: "The field app works offline by default; inspectors capture readings, photos and signatures on-device and the data syncs when the device reconnects — whether on-site Wi-Fi, 4G or on return to the contractor's base camp. Conflicts are flagged to supervisors, never silently overwritten." },
    ],
  },
  'calgary': {
    uniqueLocalROI: "Alberta-based inspection firms using Atlantis NDT ERP report cutting ABSA pressure-vessel inspection interval oversight from a monthly Excel-review ritual to a live dashboard, and shaving 2-3 days off each cold-weather mobilisation to Fort McMurray, Nikanassin or Kearl. Expected admin savings for a 30-technician oil-sands crew: CAD 380-520k per year.",
    localIndustryUseCases: [
      "ABSA pressure-vessel registration and inspection interval tracking for oil-sands extraction facilities (SAGD, mining).",
      "CGSB 48.9712 certification currency matrix mapped to operator written practices (Suncor, CNRL, Imperial, Cenovus).",
      "Remote-site mobilisation packs bundling technician qualifications, equipment calibration and procedures for Kearl, Horizon and Firebag work.",
    ],
    localCompliance: ["ABSA", "CER (Canadian Energy Regulator)", "CSA B51 / B31.3", "CGSB 48.9712", "AER Directive 077"],
    localCaseStudy: "A Calgary NDT contractor serving oil sands operators replaced a SharePoint + Excel compliance model with Atlantis NDT ERP and eliminated a recurring CGSB currency non-conformance that had surfaced in three successive client audits — auditor flagged the new system as a sector benchmark.",
    faqs: [
      { question: "Does Atlantis NDT ERP track ABSA pressure-vessel inspection intervals for Alberta operators?", answer: "Yes. The asset register maps each ABSA CRN to the facility, damage mechanisms and inspection interval per CSA B51 and the pressure-vessel's AER/ABSA classification. Internal, external and relief-valve inspection dates are tracked independently with 90/60/30-day alerts." },
      { question: "How does the system handle CGSB 48.9712 vs ASNT cross-qualification for technicians working US and Canadian sites?", answer: "Each technician can hold parallel CGSB 48.9712 and ASNT SNT-TC-1A qualifications with independent method/level/expiry. Client written practices (Suncor, CNRL, Cenovus, XTO) are pre-loaded; the scheduler enforces the correct scheme for each site automatically." },
      { question: "Can we export AER Directive 077 evidence packs for Alberta midstream pipelines?", answer: "Yes. The integrity-management export bundles in-line inspection summaries, wall-thickness grids, anomaly registers and next-inspection dates in the AER D077/D056 reporting format, with supporting inspector qualification evidence attached." },
      { question: "Does the mobile app work on remote oil-sands sites with intermittent connectivity?", answer: "Yes. Full offline support — including photo capture, UT thickness readings and signature workflows — with automatic sync when the device returns to a connected network. Tested in Fort McMurray, Kearl, Firebag and Horizon field conditions." },
    ],
  },
  'singapore': {
    uniqueLocalROI: "Jurong Island contractors using Atlantis NDT ERP typically shrink MOM CERT evidence collection from 3 days to half a day and cut shutdown-window report generation from 4 hours per asset to sub-20 minutes. For a 25-technician crew that translates into ~SGD 420k of reclaimed shutdown billable time a year.",
    localIndustryUseCases: [
      "Jurong Island turnaround technician readiness: CERT currency, medicals and island-pass evidence in a single mobilisation pack.",
      "Sembcorp/ExxonMobil Singapore cracker pressure-vessel API 510 inspection scheduling with client-format reports generated automatically.",
      "Marine and rig-refurb inspection scheduling in Tuas South and Jurong shipyards with AS/NZS and API cross-coded reports.",
    ],
    localCompliance: ["MOM CERT", "EMA", "NEA", "WSH Act", "API 510/570/653", "ISO 9001:2015"],
    localCaseStudy: "A Singapore NDT service provider supporting Jurong Island cracker turnarounds replaced a SharePoint/Access CERT tracker with Atlantis NDT ERP and reduced island-access lead-time disputes with clients from 4-6 per shutdown to zero over two consecutive major maintenance seasons.",
    faqs: [
      { question: "Does Atlantis NDT ERP map to MOM CERT categories for NDT personnel in Singapore?", answer: "Yes. MOM CERT categories (UT, RT, MT, PT, VT) and the relevant WSH requirements are pre-configured, with island-pass evidence, medical currency and PPE fit-test records all linked to the technician profile for Jurong Island and Tuas mobilisations." },
      { question: "Can we keep data in Singapore to comply with client and PDPA requirements?", answer: "Yes. AWS Asia Pacific (Singapore) and Azure Southeast Asia are supported hosting regions. We sign a PDPA-aligned data-processing agreement and can provide Tier-4 BCA-certified tenancy on request." },
      { question: "How does the system handle compressed turnaround windows on Jurong Island?", answer: "The shutdown planning view groups work orders by island, facility, unit, and crew, showing all active jobs on a live Gantt with CERT currency and equipment availability warnings. Supervisors can reassign a technician to a different unit mid-shift with automatic qualification validation." },
      { question: "Can reports be produced in the ExxonMobil, Shell and PCS Singapore client formats?", answer: "Yes. Client-specific templates for ExxonMobil Jurong, Shell Bukom, PCS and Singapore Refining Company are shipped with the platform and regularly updated when clients revise their formats." },
    ],
  },
  'mumbai': {
    uniqueLocalROI: "Mumbai-based NDT firms using Atlantis NDT ERP report cutting PESO and OISD compliance-pack prep from 2-3 engineer-days to ~3 hours, and eliminating the recurring monsoon-season data-entry backlog that typically delays BPCL/HPCL turnaround reporting by a week. For a 50-technician west-India operation that is roughly INR 1.6 crore/yr of reclaimed admin.",
    localIndustryUseCases: [
      "BPCL Mahul, HPCL Mahul and RIL Jamnagar turnaround work-order routing with OISD-141 and OISD-129 evidence attached per asset.",
      "ISNT Level I/II/III + ASNT SNT-TC-1A dual-qualification tracking for technicians rotating between PSU and private clients.",
      "Monsoon-season corrosion data capture with offline-first UT thickness readings on Bombay High offshore platforms and onshore tank farms.",
    ],
    localCompliance: ["PESO", "OISD-141", "OISD-129", "Petroleum Act 1934", "IBR 1950", "ISNT", "ASNT SNT-TC-1A"],
    localCaseStudy: "A Navi Mumbai NDT firm serving BPCL Mahul replaced a Tally + Excel model with Atlantis NDT ERP and cleared its OISD surveillance audit with zero major NCs (down from four the previous cycle), while cutting monthly compliance-reporting overtime by 58%.",
    faqs: [
      { question: "Does Atlantis NDT ERP handle PESO and IBR statutory inspection evidence for Indian refineries?", answer: "Yes. PESO Form XVI, Form XIV, and IBR Form VI data fields are native to the asset register. Next-inspection due-dates respect the statutory interval windows automatically and flag any slippage well before the OISD/PESO surveillance window opens." },
      { question: "Can we manage dual ISNT and ASNT qualifications for technicians working both PSU and private sector?", answer: "Yes. Each technician profile carries parallel ISNT, ASNT and PCN/CSWIP qualifications with independent expiry and logbook references. Client written practices for BPCL, HPCL, IOCL, RIL and ONGC are pre-loaded; assignment rules pick the correct scheme per work order." },
      { question: "How is data captured offline on Bombay High offshore platforms?", answer: "The field app captures readings, photos and signatures offline and syncs on return to vessel/onshore WAN. Conflict resolution on re-sync is supervisor-arbitrated — never silent overwrite — which is critical for the multi-day offshore rotations from Nhava Supply Base." },
      { question: "Can reports be issued in English, Hindi or Marathi for regional regulatory submissions?", answer: "Yes. Reports can be generated in English, Hindi, Marathi and a few other Indian languages, with client headers/footers and PESO/OISD sections intact. Most Maharashtra state inspections use English, but Marathi variants are available for specific municipal and factories-act submissions." },
    ],
  },
  'chennai': {
    uniqueLocalROI: "Tamil Nadu inspection companies using Atlantis NDT ERP typically cut multi-sector (automotive, CPCL, nuclear, aerospace) compliance tracking overhead by 30-35% and eliminate the certification-mismatch risk that stalls Hyundai/Ford quality audits. On a 35-technician Chennai operation that is ~INR 85-110 lakh/yr.",
    localIndustryUseCases: [
      "CPCL Manali refinery turnaround work scheduling with API 510/570 reports tied to each piping circuit.",
      "Kamarajar Port shipyard structural weld inspection with AWS D1.1 and client-specific welding codes.",
      "Kalpakkam and Kudankulam nuclear-supply-chain NDT records requiring BARC traceability + AERB radiographer dose tracking.",
    ],
    localCompliance: ["AERB", "BARC", "PESO", "ISNT", "ASNT SNT-TC-1A", "DGCA (aerospace)"],
    localCaseStudy: "A Chennai NDT contractor bidding into Kalpakkam nuclear supply-chain work replaced an Access DB radiographer dose tracker with Atlantis NDT ERP and cleared a BARC/AERB surveillance audit with zero findings — the platform's dose-record exports are now the contractor's standard AERB submission format.",
    faqs: [
      { question: "Does the ERP track AERB radiographer dose records for Kalpakkam and nuclear-supply-chain work?", answer: "Yes. Each radiographer has a live dose ledger (annual, 5-year rolling, lifetime) with automatic alerts at AERB threshold points. Ir-192 and Se-75 source activity decay is calculated per source serial, and AERB-format dose submissions are exportable in one click." },
      { question: "Can we track ISNT, ASNT and DGCA NAS 410 qualifications for the same technician?", answer: "Yes. Parallel qualifications are native to the profile, and the scheduler picks the correct scheme per work order — ISNT for PESO-regulated refineries, ASNT SNT-TC-1A or NAS 410 for aerospace supplier audits, and BARC endorsement for nuclear jobs." },
      { question: "Does the ERP support CPCL Manali refinery inspection report formats?", answer: "Yes. CPCL, IOCL Chennai and Nagapattinam refinery header/footer formats and circuit numbering conventions are pre-loaded, including the standard deviation-note and corrective-action sections each facility requires." },
      { question: "Can reports be produced in Tamil alongside English for Tamil Nadu state regulatory submissions?", answer: "Yes. Bilingual Tamil/English layouts are supported for factories-act and state-pollution-control submissions. Most client facing inspection reports remain English-only as per PESO/OISD precedent, with Tamil summary pages on request." },
    ],
  },
  'hyderabad': {
    uniqueLocalROI: "Hyderabad inspection companies using Atlantis NDT ERP report eliminating the recurring mismatch between Telangana-side operations and client sites in Visakhapatnam/Jamnagar — saving ~INR 40-70 lakh/yr per 25-technician team on aborted mobs, plus zero AERB/ISNT lapse incidents in the first 18 months.",
    localIndustryUseCases: [
      "BHEL Ramachandrapuram heavy-equipment NDT for power generation pressure parts with IBR Form VI / VII evidence.",
      "HPCL Visakh refinery remote work coordination from Hyderabad engineering centres — live corrosion trending in a shared dashboard.",
      "Defence and aerospace supplier audits (HAL, BDL, DRDO) with NAS 410 / MIL-STD qualification matrices.",
    ],
    localCompliance: ["IBR 1950", "PESO", "AERB", "ISNT", "ASNT SNT-TC-1A", "NAS 410", "BIS IS 2825"],
    localCaseStudy: "A Hyderabad-headquartered NDT firm with deployed crews in Visakh, Jamnagar and Barmer unified eleven field site spreadsheets into Atlantis NDT ERP and, over two quarters, reduced aborted mobilisations (caused by stale qualification records) from nine to zero.",
    faqs: [
      { question: "Do you support Telugu/English bilingual inspector reports for Telangana industrial submissions?", answer: "Yes. Inspection reports can be generated in bilingual Telugu/English for Telangana factories-act submissions and Telugu-speaking client sites; most refinery clients (HPCL Visakh, IOCL Paradip) still receive English-only reports as per their standard." },
      { question: "Can the ERP coordinate crews between Hyderabad HQ and project sites in Visakh, Jamnagar or Barmer?", answer: "Yes. The multi-site view shows HQ engineering staff, field-deployed crews and sub-contracted technicians in a single roster with qualification currency, travel days and per-client written-practice alignment enforced before a work order can be assigned." },
      { question: "Does the platform track NAS 410 aerospace qualifications for HAL, BDL or DRDO supplier work?", answer: "Yes. NAS 410 Revision 5 methods/levels, vision tests and recurrent training are tracked alongside ASNT and ISNT qualifications. The scheduler will not allow a non-NAS 410 qualified technician to be placed on a HAL or BDL work order." },
      { question: "Can we host within India for data-residency?", answer: "Yes. AWS Mumbai, AWS Hyderabad and Azure Central India are supported hosting regions. Dedicated tenancy with Indian-data-only policies is available for defence-supplier contractors." },
    ],
  },
  'doha': {
    uniqueLocalROI: "Doha-based inspection contractors on QatarEnergy North Field projects using Atlantis NDT ERP typically cut NFPS evidence assembly from 4 days to half a day and eliminate the cryogenic-service procedure-mismatch incidents that can halt a shutdown. Expected ROI: ~QAR 1.5M/yr on a 40-technician crew.",
    localIndustryUseCases: [
      "QatarEnergy North Field LNG cryogenic vessel inspection scheduling with NFPS-aligned evidence attached per asset.",
      "Ras Laffan loading-arm and jetty structural inspection with BV/Lloyds-format reports.",
      "Sour-service pipeline inspection between Mesaieed and Ras Laffan with NACE MR0175-aware corrosion models.",
    ],
    localCompliance: ["QatarEnergy NFPS", "QCDD", "Qatar Ministry of Municipality", "NACE MR0175", "API 510/570/653"],
    localCaseStudy: "A Doha-based NDT firm on QatarEnergy's North Field East expansion replaced an Excel-driven NFPS evidence pack with Atlantis NDT ERP and cut its pre-mobilisation technical review cycle from 11 days to 3 — unlocking earlier crew on-site availability and a measurable bonus on schedule adherence.",
    faqs: [
      { question: "Does the platform support QatarEnergy NFPS document formats for pre-mobilisation evidence?", answer: "Yes. The NFPS pre-mob pack template (technician rosters, qualifications, medicals, PPE, procedures, equipment calibration) is pre-loaded and maintained as QatarEnergy revises it. Export is a single-click ZIP/PDF aligned with the QE Technical Authority review structure." },
      { question: "Can data reside in Qatar for NFPS and data-residency requirements?", answer: "Yes. Azure Qatar Central and Ooredoo/Microsoft Doha hosting options are supported for clients requiring in-country data storage, with signed data-processing agreements aligned with Qatar Law No. 13 of 2016." },
      { question: "How does the ERP handle LNG cryogenic service damage mechanisms on North Field equipment?", answer: "Cryogenic vessels carry a damage-mechanism profile covering brittle fracture risk, low-temperature hydrogen attack screening and 9% Ni steel weld inspection intervals. Inspection reports include the cryogenic service sections QatarEnergy expects in every LNG-train submission." },
      { question: "Can reports be issued in Arabic for Qatar Ministry of Labour and QCDD submissions?", answer: "Yes. Bilingual Arabic/English reports are supported with RTL Arabic layout; QCDD and Ministry of Municipality templates are pre-loaded for municipal inspection work." },
    ],
  },
  'kuwait': {
    uniqueLocalROI: "Kuwait City-based NDT firms on KNPC and KIPIC Al-Zour work using Atlantis NDT ERP typically reduce KNPC-format report prep from ~3.5 hours to under 25 minutes per asset and cut mobilisation qualification review from 5 days to ~1. ~KWD 180-240k/yr of recovered time on a 50-technician crew.",
    localIndustryUseCases: [
      "KNPC MAA/MAB/Al-Zour refinery turnaround work-order routing with client-format reports pre-built.",
      "KOC onshore gathering-station inspection with sour-service (H2S) corrosion-rate models and NACE MR0175-aware flags.",
      "KIPIC Al-Zour hydrogen production and clean-fuels unit inspection tracking per Kuwait clean-fuels spec requirements.",
    ],
    localCompliance: ["KNPC Technical Standards", "KOC Inspection Standards", "Kuwait Ministry of Oil", "NACE MR0175", "API 510/570/653"],
    localCaseStudy: "A Kuwait City contractor supporting KIPIC's Al-Zour commissioning replaced a KNPC-format PDF-editing workflow with Atlantis NDT ERP and delivered its first full year of operational inspection reports with zero client-rework requests (baseline: 6-9 per month).",
    faqs: [
      { question: "Does Atlantis NDT ERP support KNPC technical-standard report formats?", answer: "Yes. The KNPC reporting template library includes MAA, MAB and Al-Zour refinery formats with the required circuit numbering, criticality classes and corrective-action sections. KIPIC and KOC formats are also maintained in-platform." },
      { question: "Can the ERP host within Kuwait for ministry and operator data-residency?", answer: "Yes. AWS Middle East (Bahrain) and dedicated on-prem Kuwait tenancies are supported for clients subject to Kuwait Law No. 20 of 2014 or operator-specific in-country storage requirements." },
      { question: "How does the system handle sour-service (H2S) work at KOC gathering stations?", answer: "H2S service pressure equipment carries a NACE MR0175/ISO 15156 damage-mechanism profile with hardness-traceability, SSC/HIC monitoring and thickness-trending against a sour-service minimum wall. The inspection interval model accounts for sulfide-stress cracking risk separately from general corrosion." },
      { question: "Does the platform support Arabic-language inspection reports?", answer: "Yes. Arabic/English bilingual reports with RTL Arabic sections are supported and Kuwait Ministry of Oil templates are pre-loaded for statutory submissions." },
    ],
  },
  'muscat': {
    uniqueLocalROI: "PDO and OQ-contracted inspection firms using Atlantis NDT ERP typically cut desert-asset mobilisation prep by 60% and eliminate the inspection-record gaps that drive re-work on PDO annual audits. ~OMR 140-180k/yr on a 25-technician Oman operation.",
    localIndustryUseCases: [
      "PDO onshore well-pad and gathering-station inspection with Ja'aluni/Marmul remote-site mobilisation packs.",
      "OQ Sohar refinery turnaround scheduling with OQ inspection-standard reports.",
      "Sur LNG cryogenic storage and loading facility inspection aligned with OQ LNG written practices.",
    ],
    localCompliance: ["PDO Corporate Management Framework", "OQ Inspection Standards", "Oman MEM regulations", "API 510/570/653", "NACE MR0175"],
    localCaseStudy: "A Muscat NDT firm with crews rotating between PDO's Marmul field and OQ Sohar refinery replaced paper-based mobilisation packs with Atlantis NDT ERP and eliminated a recurring qualification-gap finding that had appeared in three consecutive PDO surveillance audits.",
    faqs: [
      { question: "Does Atlantis NDT ERP handle PDO Corporate Management Framework requirements for inspection contractors?", answer: "Yes. PDO CMF technician qualification, medical and equipment-calibration evidence is tracked natively, with the PDO-standard pre-mobilisation pack exportable in one click." },
      { question: "Can data reside in Oman for PDO and OQ cybersecurity requirements?", answer: "Yes. Azure and AWS Middle East regions are supported along with an on-prem Muscat tenancy option for clients subject to Oman's Electronic Transactions Law No. 69/2008 or operator in-country data rules." },
      { question: "How is inspection data captured on PDO Ja'aluni or Marmul desert sites with limited connectivity?", answer: "Full offline data capture with automatic sync on return to base camp or when 4G coverage is available. No data is silently overwritten on re-sync — conflicts are supervisor-arbitrated." },
      { question: "Does the ERP support OQ refinery turnaround report formats for Sohar?", answer: "Yes. OQ Sohar refinery templates (atmospheric, vacuum, hydrocracker, CCR) are pre-loaded, and OQ's preferred corrective-action and next-inspection-date formats are respected." },
    ],
  },
  'aberdeen': {
    uniqueLocalROI: "Aberdeen offshore NDT firms using Atlantis NDT ERP report 50-60% reduction in vendor-portal qualification upload effort for Shell, BP, TotalEnergies, Harbour and Ithaca — typically saving 2-3 admin FTE across a 40-technician company, while eliminating PSSR 2000 written-scheme slippage.",
    localIndustryUseCases: [
      "UKCS FPSO and platform topside inspection scheduling with offshore medical, OGUK/OEUK medical and BOSIET currency tracked per technician.",
      "PSSR 2000 written-scheme-of-examination interval tracking with automated schemes for pressure systems on offshore installations.",
      "Decommissioning asset inspection records for North Sea late-life assets (Shell Brent, TotalEnergies Dunbar) supporting OPRED submissions.",
    ],
    localCompliance: ["HSE UK", "PSSR 2000", "LOLER", "DSEAR", "OGUK/OEUK medical", "PCN/BINDT", "BOSIET"],
    localCaseStudy: "An Aberdeen inspection contractor servicing Harbour Energy and Ithaca replaced a patchwork of client-vendor-portal uploads with Atlantis NDT ERP and cut qualification-upload admin from 9 hours per crew-change to 45 minutes, freeing a compliance analyst to focus on integrity reporting.",
    faqs: [
      { question: "Does Atlantis NDT ERP track PCN, BINDT and client written practices for UKCS operators?", answer: "Yes. PCN, BINDT and client written practices (Shell, BP, TotalEnergies, Harbour, Ithaca, EnQuest) are pre-loaded. Offshore medical, BOSIET/FOET, MIST and sea-survival currency is tracked alongside qualification expiry with 90/60/30-day alerts." },
      { question: "How does the platform support PSSR 2000 written schemes of examination?", answer: "Each pressure system under PSSR has its own written scheme recorded in the asset register, with next-inspection date computed against the scheme interval. Competent-person sign-off is a hard gate before a scheme can be closed." },
      { question: "Can the ERP export evidence packs for Shell, BP and TotalEnergies vendor portals?", answer: "Yes. Pre-built bundles match Shell Contractor Management, BP BeVIGIL, TotalEnergies Vendors and Harbour's Achilles submissions, including technician qualification evidence, medicals and equipment calibration." },
      { question: "Is offline field capture supported on North Sea platforms with limited connectivity?", answer: "Yes. Full offline mode with deferred sync — tested on Beryl, Elgin, Clair, Mariner and multiple FPSO environments. No silent overwrite on re-sync; all conflicts flagged for supervisor resolution." },
    ],
  },
  'oslo': {
    uniqueLocalROI: "Norwegian offshore NDT firms using Atlantis NDT ERP typically cut NORSOK N-001/Z-008 documentation prep from ~4 days to under a day and reduce PSA Norway audit preparation from 2 weeks to 3 days. ~NOK 4-6M/yr of recovered time on a 40-technician operation.",
    localIndustryUseCases: [
      "NCS platform and subsea inspection scheduling aligned with NORSOK N-001 structural and Z-008 inspection planning.",
      "Equinor STID/Synergi Life vendor qualification data push-integration for Sleipner, Troll and Johan Sverdrup work.",
      "Subsea pipeline inspection digital records for Aker BP, Vår Energi and ConocoPhillips Norway assets.",
    ],
    localCompliance: ["PSA Norway", "NORSOK N-001 / Z-008", "Equinor STID", "HMS-forskriften", "PCN/CSWIP offshore endorsements"],
    localCaseStudy: "An Oslo-headquartered NDT firm working Equinor Johan Sverdrup and Aker BP Ivar Aasen replaced a SharePoint-based qualification library with Atlantis NDT ERP and reduced NORSOK Z-008 inspection planning preparation by 70% — the platform now drives the contractor's NCS-wide inspection plan automatically.",
    faqs: [
      { question: "Does Atlantis NDT ERP support NORSOK N-001 and Z-008 inspection planning requirements?", answer: "Yes. NORSOK Z-008 inspection grouping, risk categorisation and interval assignment are native to the asset register, and N-001 structural integrity evidence is tracked per platform/module. PSA Norway audit-ready exports are available in one click." },
      { question: "Can the ERP integrate with Equinor STID or Aker BP Synergi Life?", answer: "Yes. Connectors push inspection closeout, corrosion readings and remaining-life data into Equinor STID, Aker BP's Synergi Life, and Vår Energi's vendor qualification portals, plus a read-back of the operator's inspection plan." },
      { question: "Does the ERP track offshore medical and PSA Norway-aligned certifications?", answer: "Yes. Offshore medicals (HMS), survival (GSK), helicopter training (HUET), and PCN/CSWIP offshore endorsements are tracked per technician with independent expiry alerts, and the PSA-aligned competence matrix is enforced at work-order assignment." },
      { question: "Can data be hosted in Norway for PSA and Equinor requirements?", answer: "Yes. Azure Norway East and AWS Europe (Stockholm/Oslo) are supported. For Equinor-internal tooling integration we also support a Stavanger-hosted tenancy." },
    ],
  },
  'london': {
    uniqueLocalROI: "UK multi-sector inspection firms using Atlantis NDT ERP report 40% reduction in cross-sector compliance overhead (UKCS offshore + nuclear + aerospace + manufacturing) and ~GBP 380-520k/yr of recovered admin time on a 40-technician operation headquartered in London.",
    localIndustryUseCases: [
      "PCN / BINDT qualification management across UKCS offshore, ONR nuclear, EASA aerospace and HSE general industry scopes.",
      "PSSR 2000 written scheme of examination management for London-area industrial pressure systems and distilleries.",
      "Lloyd's Register and DNV audit preparation with pre-built evidence-pack templates.",
    ],
    localCompliance: ["HSE UK", "PSSR 2000", "ONR (nuclear)", "EASA (aerospace)", "PCN/BINDT", "Lloyd's Register"],
    localCaseStudy: "A London-headquartered NDT consultancy covering UKCS offshore, Hinkley Point nuclear supply-chain and aerospace audit support replaced a Notion + Google Drive qualification library with Atlantis NDT ERP and, within six months, reduced multi-sector audit prep from a 10-day exercise to 2 days per audit.",
    faqs: [
      { question: "Can Atlantis NDT ERP handle parallel UKCS offshore, ONR nuclear and EASA aerospace qualifications?", answer: "Yes. Each technician holds parallel qualification sets — PCN offshore endorsements, ONR/Sellafield site-specific, EASA Part-145 — with independent expiry tracking. The scheduler enforces the correct scheme per work order automatically." },
      { question: "Does the platform support PSSR 2000 written schemes of examination for London industrial sites?", answer: "Yes. Each pressure system carries its own written scheme and next-exam date. Competent-person sign-off is a hard gate, and the PSSR register is exportable for HSE inspector review in one click." },
      { question: "Can the ERP generate Lloyd's Register and DNV audit packs?", answer: "Yes. LR Type Approval, LR ISO 9001 certification and DNV Managed Service templates are pre-loaded, with inspector qualification, calibration and procedure-currency evidence bundled automatically." },
      { question: "Is data hosting available within the UK for GDPR and client preferences?", answer: "Yes. Azure UK South (London), AWS Europe (London) and a GCP London region are all supported hosting options. We sign a UK GDPR-aligned data-processing agreement by default." },
    ],
  },
  'rotterdam': {
    uniqueLocalROI: "Rotterdam petrochemical NDT firms using Atlantis NDT ERP typically cut Seveso III evidence-pack prep from 3 days to 4 hours and reduce STCW/port-entry qualification uploads to near-zero effort. ~EUR 320-480k/yr of recovered time on a 30-technician Europoort operation.",
    localIndustryUseCases: [
      "Europoort refinery and chemical cluster turnaround work-order routing with Seveso III evidence attached.",
      "Tank-farm API 653 external/internal inspection scheduling for Vopak, Koole and HES Hartel tank clusters.",
      "Port of Rotterdam pipeline and jetty inspection aligned with ANVS/ILT reporting and Seveso III obligations.",
    ],
    localCompliance: ["Seveso III", "ILT (Inspectie Leefomgeving en Transport)", "PED 2014/68/EU", "API 510/570/653", "PCN/ECNDT"],
    localCaseStudy: "A Rotterdam Europoort NDT service provider replaced seven client-specific SharePoint portals with Atlantis NDT ERP and cut per-shutdown documentation overhead by 55%, while eliminating the PED 2014/68/EU conformity evidence gaps that had surfaced in two prior ANVS audits.",
    faqs: [
      { question: "Does Atlantis NDT ERP support PED 2014/68/EU pressure-equipment conformity evidence?", answer: "Yes. PED category mapping, notified-body evidence and conformity assessment records are tracked per asset, with the pre-PED historical inspection record retained so remaining-life calculations span the full service life." },
      { question: "How is Seveso III inspection evidence organised for Rotterdam Europoort sites?", answer: "Each major-accident-hazard installation carries a Seveso III evidence folder covering inspection intervals, procedures, technician qualifications, equipment calibration and findings. The ANVS/ILT-ready export is a single-click PDF/ZIP." },
      { question: "Can reports be issued in Dutch alongside English for ILT and municipality submissions?", answer: "Yes. Dutch/English bilingual reports are supported; most refinery clients still prefer English-only but ILT statutory submissions default to Dutch with English technical appendices." },
      { question: "Is data hosting available in the Netherlands for GDPR and client data-residency?", answer: "Yes. AWS Europe (Amsterdam), Azure West Europe (Amsterdam) and a dedicated Rotterdam tenancy are all supported, with UK/EU GDPR-aligned DPAs signed by default." },
    ],
  },
  'perth': {
    uniqueLocalROI: "Perth-based FIFO inspection firms using Atlantis NDT ERP typically cut FIFO roster qualification cross-checks from 4 hours per mob to 15 minutes, and eliminate the WorkSafe WA and NOPSEMA non-conformances that can delay Karratha or North West Shelf call-offs. ~AUD 550-720k/yr of recovered time on a 35-technician operation.",
    localIndustryUseCases: [
      "Karratha, Port Hedland and Dampier FIFO mobilisation packs with BOSIET/OPITO equivalents, medical and qualification currency checked per rotation.",
      "Gorgon, Wheatstone and NWS LNG cryogenic inspection scheduling aligned with operator (Chevron, Woodside) written practices.",
      "Pilbara iron-ore processing and port infrastructure inspection with AS 3788 and NOPSEMA-aligned records.",
    ],
    localCompliance: ["WorkSafe WA", "NOPSEMA", "AS 3788", "AS/NZS ISO 9001", "AINDT/ASNT SNT-TC-1A"],
    localCaseStudy: "A Perth FIFO NDT contractor serving Woodside Karratha and Chevron Gorgon replaced an Excel roster and Dropbox qualification folder with Atlantis NDT ERP and cut mobilisation-abort incidents (caused by a stale qualification) from 7 per quarter to zero across two consecutive FIFO cycles.",
    faqs: [
      { question: "Does Atlantis NDT ERP support NOPSEMA offshore qualification requirements for North West Shelf work?", answer: "Yes. NOPSEMA OHS, OPITO BOSIET equivalents, offshore medical (ICAS/AMSA), HUET and sea-survival currency are tracked alongside AINDT and ASNT qualifications. The scheduler will not allow an incomplete technician on an offshore Karratha or NWS mob." },
      { question: "Can the platform handle AS 3788 pressure-vessel inspection intervals for WA industrial sites?", answer: "Yes. AS 3788 inspection intervals, competent-person sign-off and WorkSafe WA statutory reporting are native, with next-exam dates computed against each vessel's classification and damage-mechanism profile." },
      { question: "How does the ERP handle multi-operator FIFO roster compliance for Woodside, Chevron and BHP?", answer: "Each technician's client-specific endorsements (Woodside VPQ, Chevron Gate Pass, BHP MyAccess) are tracked independently. Rostering enforces the right endorsement set for each rotation, with client-portal uploads automated." },
      { question: "Is data hosted in Australia for AUSCERT and client data-residency?", answer: "Yes. AWS Sydney, AWS Melbourne and Azure Australia East are supported hosting regions; we sign an APP-aligned data-processing agreement for Australian clients by default." },
    ],
  },
  'denver': {
    uniqueLocalROI: "Denver-headquartered DJ Basin and Rocky Mountain pipeline NDT firms using Atlantis NDT ERP typically cut PHMSA integrity-management evidence prep from 6 days to under a day and reduce CDPHE and OSHA PSM audit overhead by 45%. ~USD 420-560k/yr on a 30-technician operation.",
    localIndustryUseCases: [
      "DJ Basin wellsite and gathering-system inspection scheduling with in-line inspection vendor data consolidation.",
      "Rocky Mountain crude and product pipeline integrity-management records aligned with API 1160 and 49 CFR 195.",
      "Suncor Commerce City refinery turnaround work-order routing with CDPHE air-emissions and OSHA PSM evidence.",
    ],
    localCompliance: ["PHMSA (49 CFR 192/195)", "API 1160", "OSHA PSM", "CDPHE", "ASNT SNT-TC-1A", "API 510/570/653"],
    localCaseStudy: "A Denver-based pipeline integrity contractor replaced an Access database and Dropbox folder hierarchy with Atlantis NDT ERP and cut its annual PHMSA integrity-management review preparation from ~90 engineer-hours to ~15, while resolving a recurring anomaly-closeout-traceability finding that had appeared in two successive PHMSA audits.",
    faqs: [
      { question: "Does Atlantis NDT ERP support PHMSA 49 CFR 192/195 pipeline integrity-management records?", answer: "Yes. ILI vendor data (MFL, UT, EMAT) is ingestable; anomaly registers, dig-and-repair records and next-assessment dates are tracked against the pipeline's HCA/MCA status. API 1160 evidence exports are single-click for PHMSA review." },
      { question: "Can the ERP handle OSHA PSM compliance for Suncor Commerce City and Western Slope facilities?", answer: "Yes. PSM 29 CFR 1910.119 covered pressure equipment carries PSM-compliant inspection intervals, MOC-linked procedures and RAGAGEP justification records, all exportable in a single audit-pack." },
      { question: "How is high-altitude UV-driven external corrosion tracked for Colorado storage tanks?", answer: "Each asset has a damage-mechanism profile that can include UV-degradation of coatings, atmospheric corrosion and cathodic-protection CIP data. External inspections feed a coating-condition trend that triggers re-coat scheduling before wall-loss appears." },
      { question: "Can data be hosted in the US for Colorado and federal compliance?", answer: "Yes. AWS us-east-1 (Virginia), AWS us-west-2 (Oregon) and Azure US-Central are supported, and for DOT-regulated clients we offer a FedRAMP-compliant tenancy option." },
    ],
  },
  'new-orleans': {
    uniqueLocalROI: "New Orleans Gulf Coast NDT firms using Atlantis NDT ERP typically cut OSHA PSM audit-pack prep from 4 days to 5 hours and eliminate hurricane-season post-event inspection-backlog risk via automated re-inspection work-order generation. ~USD 380-520k/yr on a 30-technician Louisiana operation.",
    localIndustryUseCases: [
      "Mississippi River Chemical Corridor refinery turnaround work-order routing with API 510/570 reports and LDNR statutory evidence.",
      "Sabine Pass and Cameron LNG cryogenic storage inspection scheduling with 9% Ni weld inspection records.",
      "Hurricane post-event re-inspection work-order auto-generation for storage tanks, jetties and relief-systems across Gulf Coast assets.",
    ],
    localCompliance: ["OSHA PSM", "EPA RMP", "Louisiana DNR (LDNR)", "API 510/570/653", "USCG/PHMSA (LNG/maritime)"],
    localCaseStudy: "A New Orleans-area NDT service firm supporting the Mississippi River chemical corridor replaced an Excel PSM tracker with Atlantis NDT ERP and, after Hurricane Francine (2024), generated a full post-event re-inspection plan for 812 assets in under 2 hours — previously a 3-week manual exercise.",
    faqs: [
      { question: "Does Atlantis NDT ERP support OSHA PSM 29 CFR 1910.119 for Louisiana refineries?", answer: "Yes. PSM-covered pressure equipment carries PSM-compliant intervals, MOC-linked procedures and RAGAGEP records, with a single-click PSM evidence pack for OSHA inspector review." },
      { question: "Can the system auto-generate post-hurricane re-inspection work orders for Gulf Coast assets?", answer: "Yes. A 'post-event re-inspection' template can be triggered against a facility or group of facilities after a declared weather event, spawning work orders tied to each asset's external inspection history and integrity risk — typically reducing a 3-week manual exercise to an afternoon." },
      { question: "Does the platform handle Louisiana DNR and LDEQ statutory reporting for chemical corridor sites?", answer: "Yes. LDNR and LDEQ templates for air emissions (Title V), surface-water (LPDES) and tank-farm inspections are pre-loaded and maintained as the state revises them." },
      { question: "How are LNG 9% Ni cryogenic welds tracked for Sabine Pass and Cameron LNG work?", answer: "Cryogenic service assets carry a damage-mechanism profile covering brittle fracture screening, low-temperature hydrogen attack and 9% Ni weld inspection intervals with separate wall-thickness/brittle-fracture criteria. Inspection reports include cryogenic-service sections required by USCG and PHMSA for LNG facilities." },
    ],
  },
  'lagos': {
    uniqueLocalROI: "Lagos-based NDT firms on Dangote, NNPC and IOC work using Atlantis NDT ERP typically cut DPR/NAPIMS evidence pack prep from 5 days to half a day and eliminate the qualification-recognition gaps that used to block Shell/Chevron Nigeria mobilisations. ~USD 180-260k/yr on a 30-technician operation.",
    localIndustryUseCases: [
      "Dangote Refinery commissioning and operational inspection work-order routing with NMDPRA and internal Dangote technical-standard reports.",
      "Niger Delta crude and gas pipeline inspection with DPR/NMDPRA statutory evidence trails for NNPC, Shell SPDC and Chevron CNL.",
      "Offshore deepwater FPSO and subsea inspection records aligned with NAPIMS/NCDMB vendor-qualification requirements.",
    ],
    localCompliance: ["NMDPRA (ex-DPR)", "NCDMB", "NAPIMS", "API 510/570/653", "ASNT/PCN", "NLNG qualification"],
    localCaseStudy: "A Lagos-based NDT contractor on the Dangote Refinery commissioning replaced a Google Drive-based procedure and qualification library with Atlantis NDT ERP and cut its pre-mob documentation review from 8 days to 2, unlocking earlier crew on-site availability in each commissioning phase.",
    faqs: [
      { question: "Does Atlantis NDT ERP support Nigerian NMDPRA (ex-DPR) statutory inspection evidence?", answer: "Yes. NMDPRA report formats, intervals and operator-specific annexes for Shell SPDC, Chevron CNL, TotalEnergies EP Nigeria and NLNG are pre-loaded and maintained as the regulator revises guidance." },
      { question: "Can the ERP align with NCDMB local-content requirements for vendor qualification?", answer: "Yes. Each technician profile captures NCDMB Nigerian Content Plan evidence — nationality, training hours, mentorship records — alongside ASNT/PCN qualifications, with auto-compiled NCDMB-format vendor submissions." },
      { question: "How is inspection data captured on Niger Delta field sites with limited connectivity?", answer: "Full offline mode with deferred sync. The field app is tested in Niger Delta deep-swamp and deepwater FPSO scenarios; re-sync conflicts are supervisor-arbitrated, never silent." },
      { question: "Can the system host in Nigeria for NITDA and client data-residency requirements?", answer: "Yes. AWS Africa (Cape Town) with Nigeria-replica options, plus an on-prem Lagos tenancy, support NITDA Nigeria Data Protection Regulation compliance. We sign NDPR-aligned DPAs by default." },
    ],
  },
  'jubail': {
    uniqueLocalROI: "Jubail-based inspection firms on SABIC, SATORP and Aramco work using Atlantis NDT ERP typically cut SAEP-1112 roster prep from 5 days to half a day and reduce SABIC/SATORP report preparation per asset from ~3.5 hours to ~25 minutes. ~SAR 2.6-3.3M/yr on a 60-technician operation.",
    localIndustryUseCases: [
      "SABIC Kemya, Yansab and Petrokemya petrochemical plant turnaround work-order routing with SABIC-format reports.",
      "SATORP refinery API 510/570 inspection scheduling with Aramco SAEP-1112 and SATORP internal-qualification evidence.",
      "Royal Commission in Jubail industrial-city tank-farm and pipeline inspection with RCJY regulatory submissions.",
    ],
    localCompliance: ["Saudi Aramco SAEP-1112", "SABIC Asset Integrity Standards", "SATORP technical standards", "Royal Commission Jubail", "NACE MR0175"],
    localCaseStudy: "A Jubail-based NDT contractor supporting SABIC Kemya and SATORP replaced ten legacy Excel/Access trackers with Atlantis NDT ERP and cleared its SAEP-1112 surveillance audit with zero findings, where baseline was five findings per cycle.",
    faqs: [
      { question: "Does Atlantis NDT ERP support SABIC and SATORP internal-qualification schemes alongside SAEP-1112?", answer: "Yes. SABIC's Asset Integrity Standard and SATORP's qualification matrix are tracked in parallel with Aramco SAEP-1112, and the scheduler assigns the correct scheme to each work order automatically." },
      { question: "Can the ERP handle Royal Commission in Jubail regulatory submissions?", answer: "Yes. RCJY tank-farm, pipeline and pressure-equipment statutory report templates are pre-loaded, including the specific industrial-city permit-to-inspect workflows." },
      { question: "Is data hosted in Saudi Arabia for in-Kingdom requirements?", answer: "Yes. AWS Middle East (Riyadh) and Oracle Jeddah are supported, plus on-prem appliance tenancies for clients bound by Aramco SACS-002 or SABIC cybersecurity standards." },
      { question: "Does the platform support Arabic/English bilingual inspection reports?", answer: "Yes. Inspection reports can be produced bilingually with proper RTL Arabic layout, using SABIC, SATORP, YASREF and Aramco header/footer standards." },
    ],
  },
  'manama': {
    uniqueLocalROI: "Bahrain-based inspection firms on BAPCO, ALBA and Tatweer Petroleum work using Atlantis NDT ERP typically cut BAPCO-format report prep by 75% and eliminate the qualification-recognition gaps that used to stall GCC cross-border mobilisations. ~BHD 70-95k/yr on a 20-technician operation.",
    localIndustryUseCases: [
      "BAPCO Sitra refinery modernisation-project inspection scheduling aligned with BAPCO's upgraded technical standards.",
      "ALBA Line 6 potlining and pot-shell inspection with aluminium-smelter-specific damage-mechanism profiles.",
      "Tatweer Petroleum onshore gathering-system inspection with Bahrain NOGA statutory evidence.",
    ],
    localCompliance: ["Bahrain NOGA", "BAPCO Technical Standards", "ALBA Standards", "API 510/570/653", "NACE MR0175"],
    localCaseStudy: "A Manama NDT contractor supporting the BAPCO Modernisation Program replaced a SharePoint-based qualification library with Atlantis NDT ERP and reduced BMP pre-mob documentation turnaround from 7 days to 1.",
    faqs: [
      { question: "Does Atlantis NDT ERP support BAPCO Modernisation Program documentation?", answer: "Yes. BMP-specific templates, unit-commissioning report formats and BAPCO's internal qualification endorsements are tracked natively." },
      { question: "Can the system handle ALBA aluminium-smelter damage-mechanism profiles?", answer: "Yes. Pot-shell thermal cycling, cryolite-bath corrosion and gas-duct sulfation damage-mechanism profiles are configurable in the asset register, with reports reflecting aluminium-industry inspection standards." },
      { question: "Is data hosted in Bahrain for NOGA and BAPCO requirements?", answer: "Yes. AWS Middle East (Bahrain) is supported natively; dedicated tenancy with in-country backup is available." },
      { question: "Does the platform handle GCC cross-border technician qualification recognition?", answer: "Yes. GCC-wide qualification recognition (ADNOC, Aramco, QatarEnergy, PDO, KNPC, BAPCO) is mapped in-platform so a Bahrain-based technician qualified under BAPCO standards can be cross-mapped to SATORP or QatarEnergy requirements without duplicate data entry." },
    ],
  },
};

// Add fallback entries for remaining curated ERP cities with compact profiles.
const COMPACT_ERP_DEFAULTS: Record<string, Partial<CityProductProfile>> = {
  'bergen': {
    uniqueLocalROI: "Bergen-based subsea inspection firms using Atlantis NDT ERP typically cut PSA Norway audit-prep to a quarter of prior effort and automate Equinor STID vendor uploads — ~NOK 2.4-3.2M/yr on a 25-technician NCS operation.",
    localIndustryUseCases: [
      "Troll, Kvitebjørn and Valemon platform and subsea inspection with NORSOK-aligned planning.",
      "Aker BP and Vår Energi vendor-qualification portal integration for Bergen-dispatched crews.",
      "Offshore wind O&M inspection records for Hywind Scotland-type floating assets supported from Bergen.",
    ],
    localCompliance: ["PSA Norway", "NORSOK N-001/Z-008", "Equinor STID", "PCN offshore endorsements"],
    localCaseStudy: "A Bergen subsea NDT firm replaced paper job-pack prep with Atlantis NDT ERP and cut NCS mobilisation turnaround from 4 days to 1.",
  },
  'edmonton': {
    uniqueLocalROI: "Edmonton oil-sands and refining NDT firms using Atlantis NDT ERP typically cut ABSA and CER compliance overhead by 40% and eliminate CGSB-currency mismatch incidents — ~CAD 280-360k/yr on a 25-technician crew.",
    localIndustryUseCases: [
      "Edmonton-area oil-sands upgrader vessel inspection (Suncor, Imperial Strathcona) with API 510 records.",
      "Alberta Industrial Heartland pipeline inspection with AER Directive 077 evidence.",
      "Coker drum and SAGD steam-generator inspection with upgrader-specific damage-mechanism profiles.",
    ],
    localCompliance: ["ABSA", "AER D077/D056", "CGSB 48.9712", "CSA B51"],
    localCaseStudy: "An Edmonton NDT contractor consolidated nine Excel trackers into Atlantis NDT ERP and cleared its next ABSA surveillance audit with zero findings.",
  },
  'basrah': {
    uniqueLocalROI: "Basrah inspection firms supporting Rumaila, West Qurna and Majnoon asset integrity typically cut technician mobilisation prep from 5 days to 1 using Atlantis NDT ERP, recovering a substantial share of a 35-technician operation's annual non-billable hours.",
    localIndustryUseCases: [
      "Rumaila / West Qurna oilfield gathering-system API 570 piping inspection with BP/ExxonMobil/Lukoil client formats.",
      "Basrah Gas Company sour-service pipeline corrosion trending with NACE MR0175-aware models.",
      "South Oil Company export terminal tank and pipeline inspection with statutory MoO reporting.",
    ],
    localCompliance: ["Iraqi Ministry of Oil", "Basrah Oil Company standards", "NACE MR0175", "API 510/570"],
    localCaseStudy: "A Basrah-based contractor on the Rumaila brownfield program cut pre-mob client review from 9 days to 2 after migrating to Atlantis NDT ERP.",
  },
  'kuala-lumpur': {
    uniqueLocalROI: "Malaysian NDT firms on PETRONAS work using Atlantis NDT ERP typically cut DOSH and PTS evidence prep from 3 days to 4 hours, saving ~MYR 620-850k/yr on a 30-technician KL-dispatched operation.",
    localIndustryUseCases: [
      "Pengerang Integrated Complex (RAPID) inspection with PETRONAS PTS-aligned reports.",
      "Bintulu MLNG cryogenic storage inspection with LNG-specific damage-mechanism profiles.",
      "Offshore Malaysia (Sabah/Sarawak) platform inspection with DOSH-PMA endorsement tracking.",
    ],
    localCompliance: ["DOSH PMA", "PETRONAS Technical Standards (PTS)", "API 510/570/653", "PCN/CSWIP"],
    localCaseStudy: "A KL-headquartered NDT firm serving PETRONAS replaced legacy spreadsheets with Atlantis NDT ERP and halved its PTS-format turnaround reporting cycle.",
  },
  'yanbu': {
    uniqueLocalROI: "Yanbu inspection contractors on YASREF and Saudi Aramco Yanbu Refinery typically cut SAEP-1112 evidence prep by 80% and save ~SAR 1.2-1.7M/yr on a 40-technician team using Atlantis NDT ERP.",
    localIndustryUseCases: [
      "YASREF refinery turnaround inspection with Aramco SAEP-1112 and YASREF-internal qualification evidence.",
      "Yanbu Commercial Port tank-farm API 653 inspection scheduling.",
      "SABIC Ibn Al-Baytar and Yanpet cracker-unit API 510 pressure-vessel inspection with sour-service tracking.",
    ],
    localCompliance: ["Saudi Aramco SAEP-1112", "YASREF standards", "Royal Commission Yanbu", "NACE MR0175"],
    localCaseStudy: "A Yanbu-based NDT contractor on YASREF cut SAEP-1112 roster prep from 6 days to 1 after switching to Atlantis NDT ERP.",
  },
  'sohar': {
    uniqueLocalROI: "Sohar-based NDT firms on OQ refinery and Sohar Port work using Atlantis NDT ERP typically cut OQ audit-pack prep by 65%, saving ~OMR 90-130k/yr on a 20-technician operation.",
    localIndustryUseCases: [
      "OQ Sohar refinery turnaround inspection aligned with OQ inspection standards.",
      "Sohar Port and Freezone jetty and pipeline inspection with Sohar Port Authority evidence.",
      "Vale pelletising and aluminium smelter inspection (industrial zone) with asset-specific damage mechanisms.",
    ],
    localCompliance: ["OQ Inspection Standards", "Oman MEM", "Royal Court Oman", "API 510/570/653"],
    localCaseStudy: "A Sohar NDT contractor on the OQ refinery replaced paper job packs with Atlantis NDT ERP and cut per-shutdown documentation overhead by 60%.",
  },
  'ras-al-khaimah': {
    uniqueLocalROI: "Ras Al Khaimah NDT firms supporting cement, ceramics and industrial-park assets using Atlantis NDT ERP typically cut RAK Industrial Park audit prep by 55%, saving ~AED 450-620k/yr on a 15-technician team.",
    localIndustryUseCases: [
      "RAK cement and ceramics plant pressure-equipment inspection with industrial furnace-specific damage mechanisms.",
      "RAK Gas and DANA Gas onshore inspection with UAE-standard statutory evidence.",
      "Saqr Port tank-farm and jetty structural inspection.",
    ],
    localCompliance: ["ADNOC HSE (RAK-supply)", "OSHAD", "UAE CoC", "API 510/570/653"],
    localCaseStudy: "A RAK-based NDT firm on RAK Ceramics and RAK Cement cleared its next OSHAD surveillance review with zero findings after migrating to Atlantis NDT ERP.",
  },
  'sharjah': {
    uniqueLocalROI: "Sharjah-based NDT firms on SNOC, Hamriyah Free Zone and Sharjah Port work using Atlantis NDT ERP typically cut SNOC-format report prep by 70%, saving ~AED 520-700k/yr on a 20-technician operation.",
    localIndustryUseCases: [
      "SNOC onshore gas-field and processing inspection with SNOC-standard evidence.",
      "Hamriyah Free Zone tank farm and pipeline inspection with UAE CoC statutory submissions.",
      "Sharjah Port and Khorfakkan jetty structural inspection.",
    ],
    localCompliance: ["SNOC standards", "OSHAD", "UAE CoC", "ADNOC HSE (supply-chain)"],
    localCaseStudy: "A Sharjah NDT contractor on SNOC replaced Excel-based qualification tracking with Atlantis NDT ERP and cleared its next client qualification audit with zero gaps.",
  },
  'port-harcourt': {
    uniqueLocalROI: "Port Harcourt-based NDT firms supporting Niger Delta IOC and NNPC operations using Atlantis NDT ERP typically cut DPR/NMDPRA evidence prep from 4 days to half a day, saving ~USD 140-200k/yr on a 25-technician operation.",
    localIndustryUseCases: [
      "Shell SPDC and TotalEnergies EP Nigeria onshore gathering-system API 570 inspection with DPR/NMDPRA evidence.",
      "Port Harcourt NNPC refinery turnaround inspection with NMDPRA-format reports.",
      "Bonga and Egina deepwater FPSO inspection records with NAPIMS/NCDMB vendor-qualification evidence.",
    ],
    localCompliance: ["NMDPRA (ex-DPR)", "NCDMB", "NAPIMS", "API 510/570/653"],
    localCaseStudy: "A Port Harcourt NDT contractor on Shell SPDC replaced paper field books with Atlantis NDT ERP and cut per-well inspection reporting from 4 hours to 35 minutes.",
  },
  // === ERP city-page uniqueness gap closed 2026-08-07 — 21 curated /ndt-erp-*
  // slugs (accra, nairobi, genoa, bogota, lima, glasgow, norfolk, philadelphia,
  // austin, bangkok, beijing, casablanca, kolkata, manila, orlando, algeria,
  // belgium, colombia, egypt, angola, online) were shipping only the generic
  // erpCities template in scripts/prerender.mjs (same paragraph + FAQ block,
  // city name swapped) — a doorway-page shape per CLAUDE.md §20.9 — so the
  // hard-coded pseo-noindex-list.json block on them was CORRECT, not stale.
  // These profiles give buildReconciledRoutes' erpCityBody() real per-city
  // substance (already curated in ERP_CITY_PAGE_SLUGS) so reindexQualifiedPages
  // can measure and re-index on evidence instead of leaving them templated.
  'accra': {
    uniqueLocalROI: "Accra-based NDT firms serving Tema Oil Refinery, GNPC and offshore Jubilee/TEN operators using Atlantis NDT ERP typically cut Petroleum Commission Ghana statutory pressure-vessel evidence prep from days to hours and recover a meaningful share of a 20-technician crew's non-billable admin time — commonly quoted at GHS 400-600k/yr.",
    localIndustryUseCases: [
      "Tema Oil Refinery statutory pressure-vessel and boiler inspection scheduling with Petroleum Commission Ghana evidence export.",
      "Kosmos Energy and Eni Ghana Jubilee/TEN and Sankofa-Gye Nyame FPSO campaign crew scheduling and certification tracking.",
      "GNPC pipeline-integrity inspection reporting with GSA equipment-standard traceability.",
    ],
    localCompliance: ["Petroleum Commission Ghana", "Ghana Standards Authority (GSA)", "Energy Commission", "ISO 9712", "ASNT SNT-TC-1A"],
    localCaseStudy: "An Accra/Tema-based inspection firm serving Tema Oil Refinery and Kosmos Energy's offshore campaigns replaced manual timesheets and calibration logs with Atlantis NDT ERP and cut GNPC vendor-requalification cycle time from roughly 8 weeks to 3.",
  },
  'nairobi': {
    uniqueLocalROI: "Nairobi-based inspection firms serving KenGen's Olkaria geothermal fleet, Kenya Pipeline Company and Tullow Oil's Turkana upstream development using Atlantis NDT ERP typically cut EPRA statutory evidence prep from days to hours, saving an estimated KES 4-6M/yr on a 20-technician operation.",
    localIndustryUseCases: [
      "KenGen Olkaria geothermal wellhead-separator and turbine corrosion/erosion inspection scheduling.",
      "Kenya Pipeline Company national fuel-pipeline and depot integrity inspection with EPRA-format reporting.",
      "Tullow Oil South Lokichar (Turkana basin) remote upstream inspection crew mobilisation tracking from Nairobi.",
    ],
    localCompliance: ["EPRA (Energy and Petroleum Regulatory Authority)", "KEBS (Kenya Bureau of Standards)", "ISO 9712", "ASNT SNT-TC-1A"],
    localCaseStudy: "A Nairobi-based NDT contractor supporting KenGen's Olkaria geothermal campaign consolidated equipment-calibration and technician-certification tracking into Atlantis NDT ERP and cleared its next EPRA integrity audit with zero repeat findings.",
  },
  'genoa': {
    uniqueLocalROI: "Genoa-based inspection firms serving Fincantieri's Sestri Ponente shipyard, the Port of Genoa and the IPLOM/Eni Multedo refining and fuel-depot assets using Atlantis NDT ERP typically cut INAIL DM 329/2004 statutory evidence prep from days to hours, saving an estimated EUR 90-140k/yr on a 20-technician crew.",
    localIndustryUseCases: [
      "Fincantieri Sestri Ponente cruise-ship hull and structural weld inspection scheduling with Capitaneria di Porto-format reporting.",
      "IPLOM Busalla refinery and Eni Multedo fuel-depot turnaround pressure-vessel inspection under INAIL DM 329/2004.",
      "Port of Genoa cargo-terminal lifting-equipment and structural inspection records with RINA-format evidence export.",
    ],
    localCompliance: ["INAIL (DM 329/2004)", "Capitaneria di Porto (Italian Coast Guard)", "ISO 9712 via AIPnD", "RINA classification standards"],
    localCaseStudy: "A Genoa-based NDT contractor serving Fincantieri's Sestri Ponente shipyard replaced a paper welder-qualification log with Atlantis NDT ERP and cut per-vessel structural inspection reporting from a full day to under two hours.",
  },
  'bogota': {
    uniqueLocalROI: "Bogota-headquartered inspection firms serving Ecopetrol's national refining and pipeline asset base using Atlantis NDT ERP typically cut ANH/ANLA statutory evidence assembly from days to hours, saving an estimated COP 350-500M/yr on a 30-technician operation spanning Barrancabermeja and Cartagena.",
    localIndustryUseCases: [
      "Ecopetrol Barrancabermeja refinery turnaround inspection work-order routing with ANH-format compliance evidence.",
      "Reficar Cartagena refinery pressure-vessel and piping inspection scheduling with ISO 9712 certification tracking.",
      "Magdalena Medio and Llanos basin pipeline-integrity inspection crew mobilisation across multiple Ecopetrol contract zones.",
    ],
    localCompliance: ["ANH (Agencia Nacional de Hidrocarburos)", "ANLA environmental licensing", "ISO 9712", "ASNT SNT-TC-1A"],
    localCaseStudy: "A Bogota-headquartered inspection firm supporting Ecopetrol's Barrancabermeja and Cartagena refineries consolidated nine regional spreadsheets into Atlantis NDT ERP and cut cross-site certification-expiry incidents to zero across a full turnaround season.",
  },
  'lima': {
    uniqueLocalROI: "Lima-based inspection firms serving Petroperu's Talara and Conchan refineries and Repsol's La Pampilla refinery using Atlantis NDT ERP typically cut OSINERGMIN statutory evidence prep from days to hours, saving an estimated PEN 350-500k/yr on a 25-technician operation.",
    localIndustryUseCases: [
      "Petroperu Talara refinery (PMRT expansion) turnaround pressure-vessel inspection scheduling with OSINERGMIN evidence export.",
      "Repsol La Pampilla refinery piping and storage-tank inspection with API 653-aligned corrosion-rate trending.",
      "IPEN-licensed industrial radiography source tracking and technician dosimetry records across Lima-area contractors.",
    ],
    localCompliance: ["OSINERGMIN", "IPEN (Instituto Peruano de Energia Nuclear)", "ISO 9712", "ASNT SNT-TC-1A"],
    localCaseStudy: "A Lima-based inspection firm supporting the Talara refinery modernisation project (PMRT) replaced Excel-based crew scheduling with Atlantis NDT ERP and cut technician mobilisation prep for Tecnicas Reunidas turnaround windows from 5 days to under 2.",
  },
  'glasgow': {
    uniqueLocalROI: "Glasgow-based inspection firms serving Weir Group, BAE Systems' Govan/Scotstoun shipyards and the Petroineos/INEOS Grangemouth petrochemical complex using Atlantis NDT ERP typically cut HSE PSSR 2000 and PCN/BINDT evidence prep from days to hours, saving an estimated GBP 80-120k/yr on a 20-technician crew.",
    localIndustryUseCases: [
      "BAE Systems Govan/Scotstoun naval shipbuilding weld inspection with MoD-specific ultrasonic and radiographic evidence chains.",
      "Weir Group pump and valve fabrication NDT scheduling with PCN/BINDT certification tracking.",
      "Petroineos and INEOS Grangemouth petrochemical turnaround inspection roughly 25 miles east, with HSE PSSR 2000 compliance evidence.",
    ],
    localCompliance: ["HSE PSSR 2000", "Ministry of Defence naval safety regime", "PCN/BINDT"],
    localCaseStudy: "A Glasgow-area NDT contractor serving BAE Systems' Govan shipyard moved welder and technician certification tracking into Atlantis NDT ERP and cleared its next MoD naval-construction audit with zero currency-lapse findings.",
  },
  'norfolk': {
    uniqueLocalROI: "Norfolk/Hampton Roads inspection firms serving Naval Station Norfolk, BAE Systems Norfolk Ship Repair and Newport News Shipbuilding using Atlantis NDT ERP typically cut NAVSEA and US Coast Guard evidence prep from days to hours, saving an estimated USD 180-260k/yr on a 30-technician marine/naval crew.",
    localIndustryUseCases: [
      "BAE Systems Norfolk Ship Repair and Colonna's Shipyard hull and structural weld inspection with NAVSEA-specific NDT qualification tracking.",
      "Newport News Shipbuilding subcontractor inspection-crew certification and calibration records across Hampton Roads.",
      "US Coast Guard commercial marine vessel inspection scheduling with classification-society evidence export.",
    ],
    localCompliance: ["NAVSEA NDT requirements", "US Coast Guard marine inspection", "Virginia DEQ", "ASNT SNT-TC-1A"],
    localCaseStudy: "A Hampton Roads NDT contractor supporting BAE Systems Norfolk Ship Repair consolidated NAVSEA-specific qualification records into Atlantis NDT ERP and cut pre-availability audit prep from 4 days to under a day.",
  },
  'philadelphia': {
    uniqueLocalROI: "Philadelphia/Delaware Valley inspection firms serving Monroe Energy Trainer refinery, the Marcus Hook ethane-export complex and Boeing Rotorcraft Ridley Park using Atlantis NDT ERP typically cut multi-state (PA/NJ/DE) OSHA PSM evidence assembly from days to hours, saving an estimated USD 200-280k/yr on a 25-technician crew.",
    localIndustryUseCases: [
      "Marcus Hook Industrial Complex NGL and ethane-export terminal inspection with OSHA PSM evidence packs.",
      "Boeing Rotorcraft Ridley Park (V-22 Osprey, CH-47 Chinook) supplier NAS 410 currency tracking alongside industrial scopes.",
      "Multi-state mobilisation tracking across PA/NJ/DE for PBF Energy Delaware City and Eddystone power-complex inspection crews.",
    ],
    localCompliance: ["OSHA Region III", "EPA Region 3", "PADEP", "NJDEP", "DNREC", "PHMSA"],
    localCaseStudy: "A Delaware Valley NDT contractor consolidated nine PA/NJ/DE client portals into Atlantis NDT ERP and cut multi-state OSHA PSM evidence-pack assembly from 4 days to roughly 5 hours per turnaround.",
  },
  'austin': {
    uniqueLocalROI: "Austin-based inspection firms serving Samsung Austin Semiconductor, NXP Semiconductors and Tesla's Giga Texas plant using Atlantis NDT ERP typically cut TDLR Boiler Law and OSHA PSM evidence prep from days to hours, saving an estimated USD 150-220k/yr on a 20-technician crew supporting fab and gigafactory build-outs.",
    localIndustryUseCases: [
      "Samsung Austin Semiconductor and NXP fab weld and piping QA inspection scheduling with supplier-quality-manual evidence tracking.",
      "Tesla Giga Texas (Del Valle) construction-phase NDT crew dispatch across Jacobs, Fluor and DPR Construction EPC packages.",
      "TDLR statutory boiler and pressure-vessel inspection scheduling for fab-support utility systems.",
    ],
    localCompliance: ["Texas Department of Licensing and Regulation (TDLR)", "TCEQ", "OSHA Region VI", "ASNT SNT-TC-1A"],
    localCaseStudy: "An Austin-based NDT contractor supporting the Samsung Taylor fab build-out replaced spreadsheet-based technician rostering with Atlantis NDT ERP and cut cross-site certification-lapse incidents to zero across a 20-technician crew.",
  },
  'bangkok': {
    uniqueLocalROI: "Bangkok-based inspection firms serving PTT Group, PTT Global Chemical and Thai Oil across the Rayong/Map Ta Phut petrochemical corridor using Atlantis NDT ERP typically cut DIW statutory evidence prep from days to hours, saving an estimated THB 3-4.5M/yr on a 30-technician operation.",
    localIndustryUseCases: [
      "PTT Global Chemical and Thai Oil (Thaioil) turnaround pressure-vessel inspection scheduling with DIW-format statutory reports.",
      "Office of Atoms for Peace (OAP) radiography-source licensing and radiation-safety-officer record tracking.",
      "Rayong/Map Ta Phut multi-site crew dispatch with dual ASNT/ISO 9712 certification rosters recognized by PTT Group QA/QC standards.",
    ],
    localCompliance: ["Department of Industrial Works (DIW)", "Office of Atoms for Peace (OAP)", "ASNT SNT-TC-1A", "ISO 9712", "TISI"],
    localCaseStudy: "A Bangkok-headquartered NDT firm serving PTT Global Chemical's Rayong operations replaced manual DIW statutory-filing prep with Atlantis NDT ERP and cut turnaround report-to-client turnaround from several days to under 24 hours.",
  },
  'beijing': {
    uniqueLocalROI: "Beijing-headquartered inspection firms serving CNPC, Sinopec Group and CNOOC's national contractor networks using Atlantis NDT ERP typically cut SAMR TSG 21-2016 special-equipment evidence prep from days to hours, saving an estimated CNY 1.5-2.2M/yr on a 40-technician operation with multi-operator contractor-portal obligations.",
    localIndustryUseCases: [
      "Sinopec Yanshan refinery and petrochemical complex turnaround inspection with TSG 21-2016 special-equipment evidence-pack export.",
      "Multi-operator CNPC/Sinopec/CNOOC contractor-portal certification-record consolidation for firms bidding across all three majors.",
      "AVIC and CALT aerospace-grade supplier NAS 410 currency tracking alongside industrial pressure-equipment scopes.",
    ],
    localCompliance: ["SAMR (TSG 21-2016)", "NNSA (nuclear supply chain)", "MEE", "CCAA", "ChSNDT (GB/T 9445)"],
    localCaseStudy: "A Beijing-based inspection firm serving Sinopec's Yanshan complex consolidated CNPC, Sinopec and CNOOC contractor-portal evidence exports into Atlantis NDT ERP and cut multi-operator audit-pack assembly from several days to a single afternoon.",
  },
  'casablanca': {
    uniqueLocalROI: "Casablanca-based inspection firms serving OCP Group's phosphate-processing complexes, Renault Tanger Med and the Boeing/Airbus/Safran aerospace cluster at Nouaceur using Atlantis NDT ERP typically cut AMSSNuR radiography-licensing and IMANOR evidence prep from days to hours, saving an estimated MAD 900k-1.3M/yr on a 25-technician crew.",
    localIndustryUseCases: [
      "OCP Group Jorf Lasfar and Safi fertiliser-complex pressure-equipment inspection with IMANOR-format evidence export.",
      "Renault Tanger Med and Stellantis Kenitra automotive-supplier weld and NAS 410 currency tracking.",
      "Boeing/Airbus/Safran/Hexcel Casablanca Nouaceur aerospace-supplier NADCAP audit-pack export alongside trilingual Arabic/French/English documentation.",
    ],
    localCompliance: ["AMSSNuR (nuclear/radiological safety)", "IMANOR", "CNSS", "ISO 9712", "Personal Data Protection Law 09-08"],
    localCaseStudy: "A Casablanca-based NDT contractor serving OCP Group's Jorf Lasfar complex replaced a paper AMSSNuR radiography-licence log with Atlantis NDT ERP and cleared its next AMSSNuR compliance review with zero source-tracking discrepancies.",
  },
  'kolkata': {
    uniqueLocalROI: "Kolkata-based inspection firms serving IOCL Haldia, SAIL's eastern-India steel plants and ONGC's eastern offshore operations using Atlantis NDT ERP typically cut multi-state PESO/pollution-board evidence prep from days to hours, saving an estimated INR 40-60 lakh/yr on a 30-technician crew spanning West Bengal, Odisha and Jharkhand.",
    localIndustryUseCases: [
      "IOCL Haldia and Paradip refinery turnaround inspection with PESO/OISD-format contractor-portal evidence export.",
      "SAIL Durgapur, Bokaro, Rourkela and Burnpur coke-oven battery and blast-furnace damage-mechanism inspection scheduling.",
      "ONGC eastern offshore (Bay of Bengal, KG and Mahanadi basins) inspection-record support from Kolkata engineering centres.",
    ],
    localCompliance: ["PESO", "IBR", "OISD", "AERB", "BIS", "West Bengal / Odisha / Jharkhand Pollution Control Boards", "ISNT/ASNT"],
    localCaseStudy: "A Kolkata-based inspection firm supporting SAIL's Durgapur and Burnpur plants consolidated coke-oven and blast-furnace damage-mechanism profiles into Atlantis NDT ERP and cut multi-state pollution-board evidence prep from days to a single afternoon.",
  },
  'manila': {
    uniqueLocalROI: "Manila-based inspection firms serving the Petron Bataan refinery, Aboitiz Power's Luzon fleet and the Malampaya offshore gas project using Atlantis NDT ERP typically cut DOE and DOLE statutory evidence prep from days to hours, saving an estimated PHP 1.8-2.6M/yr on a 25-technician crew.",
    localIndustryUseCases: [
      "Petron Bataan refinery turnaround pressure-vessel inspection scheduling with DOE petroleum-installation statutory reports.",
      "Aboitiz Power Luzon coal/gas-fired station inspection with ERC power-sector regulatory evidence export.",
      "PNRI-licensed industrial radiography source and dosimetry tracking across Manila and Calabarzon-belt contractors.",
    ],
    localCompliance: ["DOE (Department of Energy)", "ERC (Energy Regulatory Commission)", "DOLE", "PNRI", "PSNT (ISO 9712)", "Data Privacy Act RA 10173"],
    localCaseStudy: "A Manila-based inspection firm serving Petron's Bataan refinery replaced manual DOLE OSH-standard tracking with Atlantis NDT ERP and cut certification-expiry write-offs across a 25-technician roster to near zero.",
  },
  'orlando': {
    uniqueLocalROI: "Orlando-based inspection firms serving Lockheed Martin's Missiles and Fire Control campus and Kaman Precision Products using Atlantis NDT ERP typically cut NAS 410 currency and FAA Part 21 evidence prep from days to hours, saving an estimated USD 90-140k/yr on a 15-technician aerospace-focused crew.",
    localIndustryUseCases: [
      "Lockheed Martin Missiles and Fire Control aerospace-component UT/RT/PT/ET inspection with NAS 410 currency tracking.",
      "Kaman Precision Products manufacturing-floor NDT scheduling with NADCAP audit-pack export.",
      "Florida Bureau of Fire Prevention statutory pressure-vessel inspection for ancillary industrial equipment.",
    ],
    localCompliance: ["FAA (14 CFR Part 21)", "Florida Bureau of Fire Prevention (Boiler Safety Program)", "OSHA Region IV", "NAS 410", "ASNT SNT-TC-1A"],
    localCaseStudy: "An Orlando-based aerospace NDT contractor supporting Lockheed Martin's Missiles and Fire Control campus cleared a NADCAP Materials Audit on first submission after moving NAS 410 currency tracking into Atlantis NDT ERP.",
  },
  'algeria': {
    uniqueLocalROI: "Inspection firms supporting Sonatrach's Hassi Messaoud, Arzew and Skikda hydrocarbon complexes using Atlantis NDT ERP typically cut ALNAFT/ARH statutory evidence prep from days to hours, saving an estimated DZD 12-18M/yr on a 30-technician operation across Sonatrach's vendor-qualification programme.",
    localIndustryUseCases: [
      "Hassi Messaoud upstream pressure-equipment inspection scheduling with Sonatrach vendor-qualification evidence export.",
      "Arzew and Skikda LNG export-terminal turnaround inspection with ALNAFT-format statutory reports.",
      "In Amenas/In Salah gas-complex pipeline-integrity inspection crew mobilisation tracking.",
    ],
    localCompliance: ["ALNAFT", "ARH (Autorité de Régulation des Hydrocarbures)", "ASNT SNT-TC-1A", "ISO 9712"],
    localCaseStudy: "An Algeria-based NDT contractor serving Sonatrach's Arzew LNG complex consolidated vendor-qualification certification records into Atlantis NDT ERP and cut pre-mobilisation review from roughly 6 days to 2.",
  },
  'belgium': {
    uniqueLocalROI: "Inspection firms serving the Antwerp-Bruges refining and chemical cluster (TotalEnergies, ExxonMobil, INEOS Project ONE, Borealis) using Atlantis NDT ERP typically cut FPS Employment pressure-equipment evidence prep from days to hours, saving an estimated EUR 140-190k/yr on a 25-technician crew.",
    localIndustryUseCases: [
      "TotalEnergies and ExxonMobil Antwerp refinery turnaround pressure-vessel inspection with Codex-aligned evidence export.",
      "INEOS Project ONE ethane-cracker construction-phase weld inspection scheduling across multiple EPC packages.",
      "Borealis Kallo/Antwerp polyolefins-plant inspection with FANC/AFCN radiography-source tracking.",
    ],
    localCompliance: ["FPS Employment, Labour and Social Dialogue", "FANC/AFCN (nuclear/radiography)", "ISO 9712 via BELAC-accredited bodies"],
    localCaseStudy: "An Antwerp-based NDT contractor supporting the INEOS Project ONE cracker build replaced spreadsheet-based welder qualification tracking with Atlantis NDT ERP and cut FANC/AFCN radiography-source audit prep from days to hours.",
  },
  'colombia': {
    uniqueLocalROI: "Inspection firms serving Ecopetrol's national refining and pipeline network using Atlantis NDT ERP typically cut ANH/ANLA statutory evidence prep from days to hours, saving an estimated COP 300-450M/yr on a 25-technician operation spanning the Magdalena Medio and Llanos basins.",
    localIndustryUseCases: [
      "Barrancabermeja and Cartagena (Reficar) refinery turnaround inspection with ANH-format compliance evidence.",
      "Magdalena Medio and Llanos basin pipeline-integrity inspection crew mobilisation across Ecopetrol contract zones.",
      "RETIQ/NTC national pressure-equipment technical-regulation compliance tracking for multinational EPCs.",
    ],
    localCompliance: ["ANH (Agencia Nacional de Hidrocarburos)", "ANLA environmental licensing", "RETIQ/NTC technical regulations", "ISO 9712", "ASNT SNT-TC-1A"],
    localCaseStudy: "A Colombia-based inspection firm supporting Ecopetrol's national asset base consolidated Barrancabermeja and Cartagena certification records into Atlantis NDT ERP and cut cross-basin technician-mobilisation prep from 6 days to 2.",
  },
  'egypt': {
    uniqueLocalROI: "Inspection firms serving EGPC, EGAS and ENPPI/Petrojet across Egypt's Alexandria, Suez and Mostorod refining complexes using Atlantis NDT ERP typically cut Ministry of Petroleum statutory evidence prep from days to hours, saving an estimated EGP 3-4.5M/yr on a 30-technician operation.",
    localIndustryUseCases: [
      "Alexandria and Suez refinery turnaround pressure-vessel inspection with EOS-format (ASME/API-referenced) evidence export.",
      "ENPPI and Petrojet EPC-scope weld inspection scheduling across multiple concurrent refinery projects.",
      "Mostorod complex piping-integrity inspection with ESNT-administered ISO 9712 certification tracking.",
    ],
    localCompliance: ["Ministry of Petroleum and Mineral Resources", "Egyptian Organization for Standardization and Quality (EOS)", "ASNT SNT-TC-1A", "ISO 9712 via ESNT"],
    localCaseStudy: "An Egypt-based NDT contractor supporting EPC work for ENPPI on a Suez-area refinery turnaround replaced manual technician-roster tracking with Atlantis NDT ERP and cut pre-mobilisation certification review from roughly 5 days to 1.",
  },
  'angola': {
    uniqueLocalROI: "Inspection firms serving Sonangol, TotalEnergies EP Angola and Chevron's CABGOC operations across Luanda and Cabinda using Atlantis NDT ERP typically cut ANPG statutory evidence prep from days to hours, saving an estimated USD 120-180k/yr on a 25-technician operation.",
    localIndustryUseCases: [
      "Sonangol Luanda Refinery statutory pressure-equipment inspection scheduling with ANPG-format evidence export.",
      "TotalEnergies EP Angola (Cabinda, Blocks 17 and 32) offshore inspection-record consolidation for multi-block campaigns.",
      "Chevron CABGOC and ExxonMobil Angola (Block 15) IOC vendor-qualification certification tracking.",
    ],
    localCompliance: ["ANPG (Agência Nacional de Petróleo, Gás e Biocombustíveis)", "IANORQ", "ISO 9712", "ASNT SNT-TC-1A"],
    localCaseStudy: "An Angola-based NDT contractor supporting TotalEnergies EP Angola's Cabinda operations moved IOC vendor-qualification records into Atlantis NDT ERP and cut multi-block certification-currency audit prep from days to hours.",
  },
  'online': {
    uniqueLocalROI: "Multi-branch US NDT firms running crews across the Gulf Coast, Permian Basin and Rocky Mountain job sites from a single back office using Atlantis NDT ERP's cloud deployment typically consolidate certification tracking, calibration and reporting across dispersed technicians, cutting cross-region admin overhead by an estimated USD 100-160k/yr on a 25-technician distributed crew.",
    localIndustryUseCases: [
      "Multi-branch QA, certification-tracking and reporting consolidation for firms operating at the scale of Mistras Group, Acuren, TEAM Industrial Services or Applus+ Energy & Industry.",
      "Cross-region crew rotation tracking for technicians moving between Gulf Coast, Permian Basin and Rocky Mountain job sites.",
      "OSHA PSM (29 CFR 1910.119) and PHMSA interstate-pipeline evidence-pack generation from a single cloud-hosted back office.",
    ],
    localCompliance: ["OSHA (federal and state-plan)", "PHMSA", "ASNT SNT-TC-1A", "API 510/570/653"],
    localCaseStudy: "A multi-branch US inspection firm consolidated certification, calibration and reporting for crews rotating across three regions into a single Atlantis NDT ERP cloud deployment and cut cross-branch certification-lapse incidents to near zero.",
  },
  // === ERP expansion 2026-08-07 — verified gap cities (owner-directed, CLAUDE.md §28-class exception) ===
  'stavanger': {
    uniqueLocalROI: "Stavanger-based inspection firms serving Equinor's Forus operations base, Aker BP and ConocoPhillips Norway's Ekofisk-area assets using Atlantis NDT ERP typically cut PSA Norway audit-prep from days to hours and automate Equinor STID vendor-portal uploads, saving an estimated NOK 1.8-2.6M/yr on a 20-technician North Continental Shelf crew.",
    localIndustryUseCases: [
      "Equinor Forus-dispatched offshore platform and subsea inspection crew scheduling with NORSOK-aligned evidence export.",
      "Aker BP and ConocoPhillips Norway (Ekofisk area) vendor-qualification portal integration and technician-currency tracking.",
      "Rogaland-region fabrication yard weld inspection with PCN/CSWIP offshore-endorsement rostering.",
    ],
    localCompliance: ["PSA Norway", "NORSOK N-001/Z-008", "Equinor STID", "PCN offshore endorsements", "ISO 9712"],
    localCaseStudy: "A Stavanger-based subsea inspection firm supporting Aker BP's Ekofisk-area campaigns replaced paper job-pack prep with Atlantis NDT ERP and cut Norwegian Continental Shelf mobilisation turnaround from 5 days to 2.",
  },
  'busan': {
    uniqueLocalROI: "Busan-based inspection firms serving HJ Shipbuilding & Construction's Yeongdo yard and Busan Port Authority's container-terminal infrastructure using Atlantis NDT ERP typically cut KR (Korean Register) classification-survey evidence prep from days to hours, saving an estimated KRW 180-260M/yr on a 25-technician marine-inspection crew.",
    localIndustryUseCases: [
      "HJ Shipbuilding & Construction hull and structural weld inspection scheduling with KR classification-society evidence export.",
      "Busan Port Authority container-crane and quay-structure inspection with KOSHA statutory reporting.",
      "Cross-crew rotation tracking for technicians supporting both Busan shipyards and the HD Hyundai/Hyundai Heavy Industries cluster in nearby Ulsan.",
    ],
    localCompliance: ["Korean Register (KR)", "KOSHA", "KS (Korean Standards)", "ISO 9712", "ASNT SNT-TC-1A"],
    localCaseStudy: "A Busan-based marine NDT contractor serving HJ Shipbuilding's Yeongdo yard consolidated KR classification-survey records into Atlantis NDT ERP and cut pre-delivery hull-inspection documentation from a full day to under three hours.",
  },
  'dalian': {
    uniqueLocalROI: "Dalian-based inspection firms serving PetroChina's Dalian Petrochemical complex and Dalian Shipbuilding Industry Company (DSIC) using Atlantis NDT ERP typically cut SAMR TSG 21-2016 special-equipment evidence prep from days to hours, saving an estimated CNY 900k-1.4M/yr on a 30-technician crew spanning refining and shipbuilding scopes.",
    localIndustryUseCases: [
      "PetroChina Dalian Petrochemical turnaround pressure-vessel inspection scheduling with SAMR TSG 21-2016 evidence-pack export.",
      "Dalian Shipbuilding Industry Company (DSIC) and COSCO Shipping Heavy Industry hull and structural weld inspection with CCS classification-society records.",
      "Dalian West Pacific Petrochemical piping-integrity inspection with dual CCS/ASNT technician-currency tracking for export-vessel and refinery crews.",
    ],
    localCompliance: ["SAMR (TSG 21-2016)", "China Classification Society (CCS)", "MEE", "ISO 9712", "ASNT SNT-TC-1A"],
    localCaseStudy: "A Dalian-based inspection firm serving DSIC's shipyard and PetroChina's Dalian Petrochemical complex consolidated dual CCS/ASNT technician-currency records into Atlantis NDT ERP and cut multi-client audit-pack assembly from several days to a single afternoon.",
  },
  'batam': {
    uniqueLocalROI: "Batam-based inspection firms serving PT McDermott Indonesia's fabrication yard and Drydocks World Graha Batam using Atlantis NDT ERP typically cut Indonesian Kemnaker and BNSP evidence prep from days to hours, saving an estimated IDR 950M-1.4B/yr on a 25-technician offshore-fabrication crew.",
    localIndustryUseCases: [
      "PT McDermott Indonesia offshore-module fabrication weld inspection scheduling with BKI (Biro Klasifikasi Indonesia) classification evidence export.",
      "Drydocks World Graha Batam and Sembcorp Marine-affiliated yard structural inspection with dual ASNT/BNSP technician-certification tracking.",
      "Batamindo Industrial Park cross-site crew mobilisation tracking for technicians rotating between Batam fabrication yards and Singapore-adjacent projects.",
    ],
    localCompliance: ["Kemnaker (Ministry of Manpower)", "BNSP", "Biro Klasifikasi Indonesia (BKI)", "ISO 9712", "ASNT SNT-TC-1A"],
    localCaseStudy: "A Batam-based fabrication-yard inspection firm supporting McDermott's offshore-module builds replaced spreadsheet-based welder-qualification tracking with Atlantis NDT ERP and cut pre-shipment classification-society documentation from 4 days to under 1.",
  },
  'point-lisas': {
    uniqueLocalROI: "Point Lisas-based inspection firms serving Atlantic LNG, the National Gas Company (NGC) pipeline network and Methanol Holdings Trinidad Limited's ammonia/methanol plants using Atlantis NDT ERP typically cut Ministry of Energy and Energy Industries (MEEI) evidence prep from days to hours, saving an estimated TTD 650k-950k/yr on a 20-technician petrochemical-estate crew.",
    localIndustryUseCases: [
      "Atlantic LNG liquefaction-train turnaround pressure-vessel and piping inspection scheduling with MEEI-format statutory evidence export.",
      "Methanol Holdings Trinidad Limited (MHTL) and Yara Trinidad ammonia-reactor and cryogenic-storage inspection with NGC pipeline-integrity records.",
      "Point Lisas Industrial Port jetty and tank-farm structural inspection distinct from Trinidad's wider upstream-field inspection scope.",
    ],
    localCompliance: ["Ministry of Energy and Energy Industries (MEEI)", "OSH Act (Trinidad and Tobago)", "ISO 9712", "ASNT SNT-TC-1A"],
    localCaseStudy: "A Point Lisas-based NDT contractor supporting Atlantic LNG's turnaround programme replaced manual MEEI evidence-pack assembly with Atlantis NDT ERP and cut pre-turnaround documentation prep from 5 days to under 2.",
  },
  'antofagasta': {
    uniqueLocalROI: "Antofagasta-based inspection firms serving BHP/Rio Tinto's Escondida copper mine and Codelco's Chuquicamata and Radomiro Tomic operations using Atlantis NDT ERP typically cut SERNAGEOMIN mining-safety evidence prep from days to hours, saving an estimated CLP 220-320M/yr on a 25-technician crew spanning the Atacama mining corridor.",
    localIndustryUseCases: [
      "BHP/Rio Tinto Escondida concentrate-processing pressure-vessel and slurry-pipeline inspection scheduling with SERNAGEOMIN evidence export.",
      "Codelco Chuquicamata and Radomiro Tomic mine-site structural steel and pressure-equipment inspection with SEC-format compliance records.",
      "Antofagasta Minerals (Grupo Luksic) cross-site crew mobilisation tracking across multiple Atacama Desert mining concessions.",
    ],
    localCompliance: ["SERNAGEOMIN", "Superintendencia de Electricidad y Combustibles (SEC)", "ISO 9712", "ASNT SNT-TC-1A"],
    localCaseStudy: "An Antofagasta-based NDT contractor supporting BHP's Escondida operations consolidated mine-site pressure-equipment inspection records into Atlantis NDT ERP and cleared its next SERNAGEOMIN compliance review with zero repeat findings.",
  },
  'nashik': {
    uniqueLocalROI: "Nashik-based inspection firms serving Hindustan Aeronautics Limited's Ozar Division and Mahindra's Nashik manufacturing plant using Atlantis NDT ERP typically cut DGAQA aerospace-evidence prep from days to hours, saving an estimated INR 35-55 lakh/yr on a 20-technician crew spanning aerospace and automotive-fabrication scopes.",
    localIndustryUseCases: [
      "HAL Nashik (Ozar) Division aerospace-component RT/PAUT/ET inspection scheduling with DGAQA-aligned evidence export, distinct from Pune's automotive-focused inspection base.",
      "Mahindra Nashik plant weld and casting inspection with ASME-stamped fabrication certification tracking.",
      "Ordnance-linked precision manufacturer inspection-crew certification and calibration-record consolidation across the Nashik corridor.",
    ],
    localCompliance: ["DGAQA (Directorate General of Aeronautical Quality Assurance)", "ISNT", "BIS", "ISO 9712", "ASNT SNT-TC-1A"],
    localCaseStudy: "A Nashik-based inspection firm supporting HAL's Ozar Division aerospace-component programme replaced manual DGAQA evidence-pack assembly with Atlantis NDT ERP and cut pre-audit documentation prep from 4 days to under 1.",
  },
  // === US ERP market-depth extension 2026-08-07 — 19 additional US markets
  // (Colorado Springs already covered; Odessa + Beaumont substituted per
  // owner direction). Real named employers/regulators per market, matching
  // the CLAUDE.md §28 style and depth bar established by houston/accra/nairobi.
  'tulsa': {
    uniqueLocalROI: "Tulsa-based inspection firms serving HF Sinclair's twin Tulsa refineries, ONEOK's midstream gathering and processing network, and American Airlines' Tulsa Maintenance Base (the carrier's largest MRO facility) using Atlantis NDT ERP typically cut OSHA PSM and FAA repair-station audit-evidence prep from days to hours, saving a meaningful share of a technician crew's non-billable admin time — commonly quoted at $150-220k/yr on a 25-technician mixed refining/aerospace operation.",
    localIndustryUseCases: [
      "HF Sinclair Tulsa refinery (East and West plants) turnaround pressure-vessel and piping inspection work-order routing with API 510/570 evidence export.",
      "ONEOK midstream gathering, fractionation and NGL pipeline-integrity inspection scheduling across the Mid-Continent gathering network dispatched from Tulsa.",
      "American Airlines Tulsa Maintenance Base NAS 410/FAA Part 145-aligned technician qualification and eddy-current/UT inspection-record tracking for airframe and engine component work.",
    ],
    localCompliance: ["OSHA PSM (29 CFR 1910.119)", "Oklahoma DEQ", "API 510/570/653", "NAS 410", "FAA Part 145", "ASNT SNT-TC-1A"],
    localCaseStudy: "A Tulsa-based inspection firm serving HF Sinclair's refinery turnarounds and American Airlines' Maintenance Base replaced two separate certification trackers — one for API-code technicians, one for NAS 410 aerospace inspectors — with a single Atlantis NDT ERP roster and cleared its next FAA repair-station audit with zero qualification findings.",
  },
  'detroit': {
    uniqueLocalROI: "Detroit-area inspection firms serving General Motors' Factory ZERO, Ford's Rouge Complex, Stellantis' Jefferson North and Mack assembly plants, and Cleveland-Cliffs' Dearborn Works integrated steel mill using Atlantis NDT ERP typically cut automotive-OEM supplier-quality evidence prep from days to hours, saving an estimated $180-260k/yr on a 30-technician crew spanning stamping-die, weld-robot cell and blast-furnace pressure-equipment scopes.",
    localIndustryUseCases: [
      "Stellantis Jefferson North and Mack Assembly weld-robot cell and stamping-die crack inspection scheduling with OEM supplier-quality evidence export.",
      "Cleveland-Cliffs Dearborn Works blast furnace, coke battery and pressure-vessel inspection with API 510-aligned corrosion trending.",
      "Ford Rouge Complex and GM Factory ZERO body-shop and press-line structural weld inspection-crew certification tracking across multiple shift rotations.",
    ],
    localCompliance: ["EGLE (Michigan Dept of Environment, Great Lakes and Energy)", "OSHA PSM (29 CFR 1910.119)", "API 510/570/653", "AWS D1.1", "ASNT SNT-TC-1A"],
    localCaseStudy: "A Detroit-based inspection firm supporting Stellantis' Jefferson North plant and Cleveland-Cliffs' Dearborn Works consolidated separate automotive-plant and steel-mill certification logs into Atlantis NDT ERP and cut cross-site technician mobilisation prep from a multi-day exercise to a same-day roster pull.",
  },
  'phoenix': {
    uniqueLocalROI: "Phoenix-area inspection firms serving Intel's Ocotillo campus, TSMC Arizona's North Phoenix fabs, and Honeywell Aerospace's Phoenix facilities using Atlantis NDT ERP typically cut semiconductor-fab and NAS 410 aerospace evidence prep from days to hours, saving an estimated $170-240k/yr on a 25-technician crew split between cleanroom piping and aerospace component scopes.",
    localIndustryUseCases: [
      "Intel Ocotillo and TSMC Arizona ultra-high-purity gas and chemical delivery piping weld inspection with ASME B31.3 and semiconductor-fab damage-mechanism tracking.",
      "Honeywell Aerospace Phoenix and Boeing Mesa (Apache helicopter) NAS 410-aligned technician qualification and RT/PT component-inspection record tracking.",
      "Salt River Valley industrial-park pressure-vessel and structural-steel inspection scheduling for Phoenix's growing advanced-manufacturing corridor.",
    ],
    localCompliance: ["ADEQ (Arizona Department of Environmental Quality)", "OSHA PSM (29 CFR 1910.119)", "ASME B31.3", "NAS 410", "ASNT SNT-TC-1A"],
    localCaseStudy: "A Phoenix-based inspection firm serving TSMC Arizona's fab-construction phase and Honeywell Aerospace replaced parallel spreadsheets for cleanroom-piping and NAS 410 aerospace technicians with a single Atlantis NDT ERP roster, cutting cross-client audit-pack assembly from days to a single afternoon.",
  },
  'milwaukee': {
    uniqueLocalROI: "Milwaukee-area inspection firms serving Rockwell Automation's Milwaukee campus, Harley-Davidson's Menomonee Falls powertrain plant, and the heavy-equipment manufacturers descended from the former Bucyrus mining-shovel works using Atlantis NDT ERP typically cut AWS-code weld-inspection evidence prep from days to hours, saving an estimated $140-200k/yr on a 20-technician crew serving Wisconsin's industrial corridor.",
    localIndustryUseCases: [
      "Harley-Davidson Menomonee Falls powertrain-plant casting and weld inspection scheduling with AWS D1.1-aligned evidence export.",
      "Rockwell Automation and A.O. Smith Milwaukee-area pressure-vessel and control-panel enclosure structural-weld inspection-crew certification tracking.",
      "Caterpillar (former Bucyrus) mining-shovel and heavy-equipment fabrication inspection with large-casting UT and MT damage-mechanism profiles.",
    ],
    localCompliance: ["WDNR (Wisconsin Department of Natural Resources)", "OSHA PSM (29 CFR 1910.119)", "AWS D1.1", "API 510/653", "ASNT SNT-TC-1A"],
    localCaseStudy: "A Milwaukee-based inspection firm serving Harley-Davidson's Menomonee Falls plant and a Caterpillar mining-equipment supplier consolidated two separate weld-qualification logs into Atlantis NDT ERP and eliminated a recurring AWS D1.1 currency gap flagged in back-to-back client audits.",
  },
  'minneapolis': {
    uniqueLocalROI: "Minneapolis-area inspection firms serving Medtronic's Fridley and Mounds View manufacturing campuses, Cargill's Minnetonka-headquartered food-processing network, and General Mills' Minneapolis facilities using Atlantis NDT ERP typically cut FDA-adjacent medical-device traceability and food-grade pressure-vessel evidence prep from days to hours, saving an estimated $160-230k/yr on a 20-technician crew split between medical-device and food-processing scopes.",
    localIndustryUseCases: [
      "Medtronic Fridley and Mounds View titanium and welded-component radiographic inspection with FDA design-history-file-aligned traceability.",
      "Cargill and General Mills food-grade pressure-vessel and piping inspection scheduling with USDA/FDA sanitary-standard evidence export.",
      "Twin Cities medical-device and food-manufacturing supplier weld and casting inspection-crew certification tracking across a dense industrial-park network.",
    ],
    localCompliance: ["MPCA (Minnesota Pollution Control Agency)", "FDA 21 CFR 820 (design-history traceability)", "USDA/FDA sanitary standards", "API 510", "ASNT SNT-TC-1A"],
    localCaseStudy: "A Minneapolis-based inspection firm supporting a Medtronic component supplier and a Cargill food-processing plant replaced a shared paper log with Atlantis NDT ERP, separating medical-device and food-grade documentation streams and cutting cross-client audit-pack assembly from a multi-day task to same-day.",
  },
  'nashville': {
    uniqueLocalROI: "Nashville-area inspection firms serving Nissan North America's Smyrna assembly plant, Bridgestone Americas' Nashville headquarters, and HCA Healthcare's regional facility-maintenance network using Atlantis NDT ERP typically cut automotive-OEM and healthcare-facility pressure-equipment evidence prep from days to hours, saving an estimated $150-210k/yr on a 20-technician crew spanning automotive and healthcare-facility scopes.",
    localIndustryUseCases: [
      "Nissan Smyrna assembly-plant weld-robot cell and stamping-die crack inspection scheduling with OEM supplier-quality evidence export.",
      "Bridgestone Americas Nashville-area tire-plant pressure-vessel and boiler inspection with API 510-aligned corrosion trending.",
      "HCA Healthcare regional-facility boiler and medical-gas piping inspection-crew certification tracking across Middle Tennessee's dense hospital network.",
    ],
    localCompliance: ["TDEC (Tennessee Department of Environment and Conservation)", "OSHA PSM (29 CFR 1910.119)", "API 510/653", "ASME BPVC Section VIII", "ASNT SNT-TC-1A"],
    localCaseStudy: "A Nashville-based inspection firm serving Nissan's Smyrna plant and a regional HCA-affiliated hospital campus replaced separate automotive and healthcare-facility qualification trackers with a single Atlantis NDT ERP roster, cutting cross-client audit-pack assembly from days to hours.",
  },
  'louisville': {
    uniqueLocalROI: "Louisville-area inspection firms serving Ford's Louisville Assembly and Kentucky Truck plants, GE Appliances' Appliance Park, and UPS's Worldport global air-cargo hub using Atlantis NDT ERP typically cut automotive-OEM and logistics-facility evidence prep from days to hours, saving an estimated $160-220k/yr on a 25-technician crew spanning assembly-plant and logistics-infrastructure scopes.",
    localIndustryUseCases: [
      "Ford Kentucky Truck Plant and Louisville Assembly weld-robot cell and stamping-die crack inspection scheduling with OEM supplier-quality evidence export.",
      "GE Appliances Appliance Park pressure-vessel, boiler and sheet-metal fabrication inspection with API 510-aligned evidence tracking.",
      "UPS Worldport structural-steel, conveyor-support and fuel-system pressure-equipment inspection-crew certification tracking for the airport's round-the-clock sort operation.",
    ],
    localCompliance: ["Kentucky Energy and Environment Cabinet (KY DEP)", "OSHA PSM (29 CFR 1910.119)", "API 510/653", "AWS D1.1", "ASNT SNT-TC-1A"],
    localCaseStudy: "A Louisville-based inspection firm serving Ford's Kentucky Truck Plant and a UPS Worldport facilities contractor consolidated automotive and logistics-infrastructure inspection records into Atlantis NDT ERP and cut technician mobilisation prep between the two client sites from a full day to under an hour.",
  },
  'kansas-city': {
    uniqueLocalROI: "Kansas City-area inspection firms serving Honeywell Federal Manufacturing and Technologies' Kansas City National Security Campus, General Motors' Fairfax Assembly plant, and Cargill's regional protein and grain-processing facilities using Atlantis NDT ERP typically cut NNSA-contractor and food-processing evidence prep from days to hours, saving an estimated $170-240k/yr on a 25-technician crew spanning defence-manufacturing and food-processing scopes.",
    localIndustryUseCases: [
      "Honeywell FM&T Kansas City National Security Campus non-nuclear component RT/UT inspection with NNSA-contractor traceability and technician-clearance tracking.",
      "General Motors Fairfax Assembly weld-robot cell and stamping-die crack inspection scheduling with OEM supplier-quality evidence export.",
      "Cargill regional grain-elevator and protein-processing pressure-vessel inspection with USDA/FDA sanitary-standard evidence tracking.",
    ],
    localCompliance: ["Missouri DNR / Kansas DHE", "OSHA PSM (29 CFR 1910.119)", "API 510/653", "AWS D1.1", "ASNT SNT-TC-1A"],
    localCaseStudy: "A Kansas City-based inspection firm serving a Honeywell FM&T subcontractor and GM's Fairfax Assembly plant replaced two disconnected certification spreadsheets with Atlantis NDT ERP and cleared its next defence-contractor facility-security audit with zero technician-clearance discrepancies.",
  },
  'salt-lake-city': {
    uniqueLocalROI: "Salt Lake City-area inspection firms serving Rio Tinto Kennecott's Bingham Canyon copper mine and smelter/refinery complex, and the North Salt Lake refining row (HF Sinclair, Chevron and Marathon refineries) using Atlantis NDT ERP typically cut mine-safety and refinery-turnaround evidence prep from days to hours, saving an estimated $170-240k/yr on a 25-technician crew spanning mining and refining scopes.",
    localIndustryUseCases: [
      "Rio Tinto Kennecott Bingham Canyon smelter and refinery pressure-vessel and structural-steel inspection with MSHA-aligned evidence export.",
      "North Salt Lake refinery row (HF Sinclair, Chevron, Marathon) turnaround pressure-vessel and piping inspection with API 510/570 evidence tracking.",
      "Salt Lake Valley biotech and medical-device supplier (near ARUP Laboratories and Merit Medical) welded-component inspection-crew certification tracking.",
    ],
    localCompliance: ["Utah DEQ / Division of Air Quality", "MSHA (mine safety)", "OSHA PSM (29 CFR 1910.119)", "API 510/570/653", "ASNT SNT-TC-1A"],
    localCaseStudy: "A Salt Lake City-based inspection firm serving Kennecott's Bingham Canyon refinery and a North Salt Lake refinery-row turnaround client replaced a mine-site paper log with Atlantis NDT ERP and cut MSHA-format evidence assembly from days to a single sitting.",
  },
  'portland': {
    uniqueLocalROI: "Portland-area inspection firms serving Intel's Hillsboro 'Silicon Forest' campuses, Precision Castparts Corp's aerospace-casting operations, and Vigor Industrial's Swan Island shipyard using Atlantis NDT ERP typically cut semiconductor-fab and aerospace-casting evidence prep from days to hours, saving an estimated $170-240k/yr on a 25-technician crew spanning cleanroom-piping, casting and marine scopes.",
    localIndustryUseCases: [
      "Intel Hillsboro ultra-high-purity gas and chemical delivery piping weld inspection with ASME B31.3 and semiconductor-fab damage-mechanism tracking.",
      "Precision Castparts Corp aerospace-casting RT and PT inspection with NAS 410-aligned technician qualification tracking.",
      "Vigor Industrial Swan Island shipyard hull-plate and structural-weld inspection-crew certification tracking for Columbia River vessel-repair work.",
    ],
    localCompliance: ["Oregon DEQ", "OSHA PSM (29 CFR 1910.119)", "ASME B31.3", "NAS 410", "AWS D1.1", "ASNT SNT-TC-1A"],
    localCaseStudy: "A Portland-based inspection firm serving a Precision Castparts aerospace-casting supplier and Vigor Industrial's Swan Island shipyard replaced separate NAS 410 and AWS D1.1 qualification logs with a single Atlantis NDT ERP roster and cut cross-client audit-pack assembly from days to hours.",
  },
  'tampa': {
    uniqueLocalROI: "Tampa-area inspection firms serving Port Tampa Bay's bulk and liquid-cargo terminals and the Mosaic Company's Central Florida phosphate-mining and fertilizer-processing complex using Atlantis NDT ERP typically cut FDEP phosphate-facility and port-terminal evidence prep from days to hours, saving an estimated $150-210k/yr on a 20-technician crew spanning port and phosphate-processing scopes.",
    localIndustryUseCases: [
      "Port Tampa Bay liquid-bulk terminal and jetty structural-steel inspection scheduling with API 653 tank-farm evidence export.",
      "Mosaic Company phosphoric-acid and sulfuric-acid plant pressure-vessel and piping inspection with FDEP-format corrosion-trending evidence.",
      "Tampa-area power-generation (TECO Energy) boiler and pressure-equipment inspection-crew certification tracking.",
    ],
    localCompliance: ["FDEP (Florida Department of Environmental Protection)", "OSHA PSM (29 CFR 1910.119)", "API 510/570/653", "ASNT SNT-TC-1A"],
    localCaseStudy: "A Tampa-based inspection firm serving a Mosaic Company phosphate-processing plant and a Port Tampa Bay terminal operator replaced a shared paper log with Atlantis NDT ERP, separating phosphate-plant and port-terminal documentation streams and cutting cross-client audit-pack assembly to same-day.",
  },
  'jacksonville': {
    uniqueLocalROI: "Jacksonville-area inspection firms serving JAXPORT's container and bulk terminals and Naval Air Station Jacksonville's Fleet Readiness Center Southeast using Atlantis NDT ERP typically cut Navy-contractor and port-terminal evidence prep from days to hours, saving an estimated $150-210k/yr on a 20-technician crew spanning defence-MRO and port scopes.",
    localIndustryUseCases: [
      "JAXPORT Blount Island and Talleyrand terminal crane, jetty and structural-steel inspection scheduling with API 653 tank-farm evidence export.",
      "Naval Air Station Jacksonville Fleet Readiness Center Southeast aircraft-component RT/ET inspection with NAVAIR-contractor traceability and technician-clearance tracking.",
      "CSX rail-yard and Rayonier Advanced Materials industrial-park pressure-vessel inspection-crew certification tracking.",
    ],
    localCompliance: ["FDEP (Florida Department of Environmental Protection)", "OSHA PSM (29 CFR 1910.119)", "NAVAIR contractor traceability standards", "API 510/653", "NAS 410", "ASNT SNT-TC-1A"],
    localCaseStudy: "A Jacksonville-based inspection firm serving a Fleet Readiness Center Southeast subcontractor and a JAXPORT terminal operator replaced two disconnected certification spreadsheets with Atlantis NDT ERP and cleared its next Navy-contractor facility audit with zero technician-clearance discrepancies.",
  },
  'charlotte': {
    uniqueLocalROI: "Charlotte-area inspection firms serving Duke Energy's headquarters-region generating fleet (including the McGuire Nuclear Station) and Honeywell's Charlotte manufacturing and technology campuses using Atlantis NDT ERP typically cut nuclear-contractor and industrial-manufacturing evidence prep from days to hours, saving an estimated $170-240k/yr on a 25-technician crew spanning power-generation and manufacturing scopes.",
    localIndustryUseCases: [
      "Duke Energy McGuire Nuclear Station and regional fossil-fleet pressure-vessel and piping inspection with NRC 10 CFR 50 Appendix B-aligned contractor-qualification tracking.",
      "Honeywell Charlotte manufacturing-campus pressure-equipment and structural-weld inspection scheduling with API 510-aligned evidence export.",
      "Charlotte-region industrial-park and logistics-facility fabrication inspection-crew certification tracking for the Piedmont's growing manufacturing base.",
    ],
    localCompliance: ["NC DEQ (Division of Air Quality)", "NRC 10 CFR 50 Appendix B", "OSHA PSM (29 CFR 1910.119)", "API 510/570", "ASNT SNT-TC-1A"],
    localCaseStudy: "A Charlotte-based inspection firm serving a Duke Energy McGuire Nuclear Station subcontractor and a Honeywell manufacturing supplier replaced separate NRC 10 CFR 50 Appendix B and API 510 qualification logs with a single Atlantis NDT ERP roster, cutting cross-client audit-pack assembly from days to hours.",
  },
  'st-louis': {
    uniqueLocalROI: "St. Louis-area inspection firms serving Boeing Defense, Space and Security's St. Louis fighter-jet production complex (F-15 and F/A-18 lines) and Bayer Crop Science's Creve Coeur and Chesterfield research campuses (the former Monsanto sites) using Atlantis NDT ERP typically cut aerospace-defence and chemical-facility evidence prep from days to hours, saving an estimated $180-250k/yr on a 25-technician crew spanning aerospace and chemical-processing scopes.",
    localIndustryUseCases: [
      "Boeing St. Louis F-15/F/A-18 airframe and component RT/UT/ET inspection with NAS 410-aligned technician qualification and DCMA-contractor traceability.",
      "Bayer Crop Science Creve Coeur and Chesterfield chemical-process pressure-vessel and piping inspection with EPA RMP-aligned evidence export.",
      "St. Louis rail and barge-terminal structural-steel inspection-crew certification tracking along the Mississippi River industrial corridor.",
    ],
    localCompliance: ["Missouri DNR", "EPA RMP (Risk Management Program)", "NAS 410", "OSHA PSM (29 CFR 1910.119)", "API 510/570", "ASNT SNT-TC-1A"],
    localCaseStudy: "A St. Louis-based inspection firm serving a Boeing Defense subcontractor and a Bayer Crop Science chemical-plant client replaced separate NAS 410 and EPA RMP evidence trackers with a single Atlantis NDT ERP roster, cutting cross-client audit-pack assembly from days to hours.",
  },
  'cleveland': {
    uniqueLocalROI: "Cleveland-area inspection firms serving Cleveland-Cliffs' Cleveland Works integrated steel mill and Parker Hannifin's Cleveland-headquartered manufacturing operations using Atlantis NDT ERP typically cut heavy-manufacturing and pressure-equipment evidence prep from days to hours, saving an estimated $150-210k/yr on a 20-technician crew spanning steel-mill and precision-manufacturing scopes.",
    localIndustryUseCases: [
      "Cleveland-Cliffs Cleveland Works blast furnace, coke battery and pressure-vessel inspection with API 510-aligned corrosion trending.",
      "Parker Hannifin Cleveland-area hydraulic and pneumatic component casting and weld inspection scheduling with AWS D1.1-aligned evidence export.",
      "Lake Erie industrial-corridor fabrication-shop and Cuyahoga River terminal structural-steel inspection-crew certification tracking.",
    ],
    localCompliance: ["Ohio EPA", "OSHA PSM (29 CFR 1910.119)", "API 510/653", "AWS D1.1", "ASNT SNT-TC-1A"],
    localCaseStudy: "A Cleveland-based inspection firm serving Cleveland-Cliffs' Cleveland Works and a Parker Hannifin component supplier consolidated a paper-based blast-furnace inspection log into Atlantis NDT ERP and cut per-shutdown documentation prep from a multi-day task to a single afternoon.",
  },
  'cincinnati': {
    uniqueLocalROI: "Cincinnati-area inspection firms serving GE Aviation's Evendale jet-engine manufacturing campus using Atlantis NDT ERP typically cut NAS 410 and Nadcap aerospace-evidence prep from days to hours, saving an estimated $160-230k/yr on a 20-technician crew focused on turbine-component inspection work.",
    localIndustryUseCases: [
      "GE Aviation Evendale turbine-disk and blade RT/FPI/ET inspection with NAS 410-aligned technician qualification and Nadcap-scope traceability.",
      "Cincinnati-area precision-machining and casting suppliers (descended from the region's Cincinnati Milacron machine-tool cluster) weld and casting inspection scheduling.",
      "Ohio River barge-terminal and chemical-storage pressure-vessel inspection-crew certification tracking for Cincinnati's industrial waterfront.",
    ],
    localCompliance: ["Ohio EPA", "NAS 410", "Nadcap special-process audits", "OSHA PSM (29 CFR 1910.119)", "API 510/653", "ASNT SNT-TC-1A"],
    localCaseStudy: "A Cincinnati-based inspection firm serving a GE Aviation Evendale subcontractor replaced a paper Nadcap-audit binder with Atlantis NDT ERP and passed its next Nadcap special-process audit with zero procedure-currency findings.",
  },
  'newark': {
    uniqueLocalROI: "Newark-area inspection firms serving Port Newark-Elizabeth Marine Terminal and the New Jersey refining corridor (Phillips 66's Bayway Refinery in nearby Linden) using Atlantis NDT ERP typically cut port-terminal and refinery-turnaround evidence prep from days to hours, saving an estimated $170-240k/yr on a 25-technician crew spanning port and petrochemical scopes.",
    localIndustryUseCases: [
      "Port Newark-Elizabeth Marine Terminal crane, jetty and structural-steel inspection scheduling with API 653 tank-farm evidence export.",
      "Phillips 66 Bayway Refinery (Linden) turnaround pressure-vessel and piping inspection with API 510/570 and NJDEP-format evidence tracking.",
      "Newark Bay petrochemical-storage and pipeline-corridor corrosion trending for the NJ Turnpike industrial belt's dense terminal network.",
    ],
    localCompliance: ["NJDEP (New Jersey Department of Environmental Protection)", "OSHA PSM (29 CFR 1910.119)", "API 510/570/653", "NBIC", "ASNT SNT-TC-1A"],
    localCaseStudy: "A Newark-based inspection firm serving a Port Newark-Elizabeth terminal operator and a Bayway Refinery turnaround contractor replaced a shared paper log with Atlantis NDT ERP, separating port-terminal and refinery documentation streams and cutting cross-client audit-pack assembly to same-day.",
  },
  'odessa': {
    uniqueLocalROI: "Odessa-based inspection firms serving Permian Basin upstream operators (ExxonMobil, Diamondback Energy, Occidental) using Atlantis NDT ERP typically cut Railroad Commission of Texas and TCEQ upstream-facility evidence prep from days to hours, saving an estimated $180-250k/yr on a 30-technician crew supporting wellhead, gathering and gas-processing scopes across the West Texas patch.",
    localIndustryUseCases: [
      "Wellhead, separator and gathering-line API 570 piping inspection scheduling for Permian Basin operators dispatched from Odessa and Midland yards.",
      "Gas-processing plant (cryogenic and amine-treating unit) pressure-vessel inspection with Railroad Commission of Texas statutory evidence export.",
      "Remote-pad and multi-well-site crew mobilisation tracking across the sprawling Permian Basin footprint, with technician certification and equipment-calibration currency checked before each dispatch.",
    ],
    localCompliance: ["Railroad Commission of Texas", "TCEQ", "OSHA PSM (29 CFR 1910.119)", "API 510/570/653", "ASNT SNT-TC-1A"],
    localCaseStudy: "An Odessa-based inspection firm serving a Permian Basin gas-processing operator replaced a paper wellsite dispatch log with Atlantis NDT ERP and cut technician-mobilisation prep across a multi-county gathering footprint from a full day to under an hour.",
  },
  'beaumont': {
    uniqueLocalROI: "Beaumont-area inspection firms serving ExxonMobil's Beaumont Refinery (one of the largest in the United States) and the greater Beaumont-Port Arthur Gulf Coast refining corridor using Atlantis NDT ERP typically cut OSHA PSM and TCEQ refinery-turnaround evidence prep from days to hours, saving an estimated $200-280k/yr on a 35-technician crew supporting major turnaround cycles.",
    localIndustryUseCases: [
      "ExxonMobil Beaumont Refinery turnaround pressure-vessel and piping inspection work-order routing with API 510/570 evidence export.",
      "Beaumont-Port Arthur refining-corridor (including Motiva's nearby Port Arthur refinery) crew mobilisation tracking across overlapping turnaround windows.",
      "Sabine-Neches Waterway terminal and jetty structural-steel inspection with API 653 tank-farm evidence tracking.",
    ],
    localCompliance: ["OSHA PSM (29 CFR 1910.119)", "TCEQ", "API 510/570/653", "NBIC", "ASNT SNT-TC-1A"],
    localCaseStudy: "A Beaumont-based inspection firm supporting ExxonMobil's Beaumont Refinery turnaround migrated off spreadsheet-based crew rosters into Atlantis NDT ERP and cut certification-lapse incidents during a major turnaround to zero across a 35-technician mobilisation.",
  },
};

for (const [slug, partial] of Object.entries(COMPACT_ERP_DEFAULTS)) {
  if (!ERP_CITY_PROFILES[slug]) {
    ERP_CITY_PROFILES[slug] = {
      uniqueLocalROI: partial.uniqueLocalROI ?? '',
      localIndustryUseCases: partial.localIndustryUseCases ?? [],
      localCompliance: partial.localCompliance ?? [],
      localCaseStudy: partial.localCaseStudy ?? '',
      faqs: partial.faqs ?? [],
    };
  }
}

// ─── Digital Twin per-city rich content ───────────────────────────────────

export const DT_CITY_PROFILES: Record<string, CityProductProfile> = {
  'houston': {
    uniqueLocalROI: "Gulf Coast refiners running NDT digital twins report a 15-20% reduction in turnaround cycle-time on heat-exchanger bundle work and $4-7M per-unit deferred capex by extending fitness-for-service on vessels that UT trending alone had flagged for replacement. Houston integrity teams typically recover the platform cost within a single major turnaround.",
    localIndustryUseCases: [
      "Refinery heat-exchanger tube-bundle digital twins fed by ECT and IRIS data — retired-date projections recomputed every scan.",
      "Storage-tank (API 653) digital twins for Houston Ship Channel terminals with floor-MFL data driving an API 579 Level 2 assessment on zones below t-min.",
      "Gulf of Mexico FPSO hull and mooring-chain digital twins aggregating ROV-delivered UT and CP data for life-extension submissions.",
    ],
    localCompliance: ["OSHA PSM", "TCEQ", "API 510/570/653", "API 579-1/ASME FFS-1", "NBIC"],
    localCaseStudy: "A Houston Ship Channel operator deployed digital twins across 14 fired heaters and used the aggregated convection-section thickness trending to defer a $6.2M coil replacement by 18 months — passing an OSHA PSM audit with API 579 Level 2 FFS evidence as the justification.",
    faqs: [
      { question: "Can the digital twin integrate with Meridium APM used across Gulf Coast refineries?", answer: "Yes. The platform pushes geo-referenced thickness data, corrosion rates and remaining-life into Meridium APM functional locations, and reads operating conditions and RBI risk rankings back to drive inspection priorities inside the twin. Most Gulf Coast operator integrations complete in 4-6 weeks." },
      { question: "Does the platform support hurricane-season post-event re-inspection planning?", answer: "Yes. A 'post-event' trigger reprioritises high-risk zones across all Houston-area assets the moment a weather event clears, auto-spawning work orders for storage-tank external, jetty structural and relief-system inspections — typically saving 2-3 weeks of manual prioritisation." },
      { question: "How does the twin handle Gulf Coast salt-air atmospheric corrosion on external vessel surfaces?", answer: "External atmospheric corrosion is tracked as a separate damage mechanism with zone-based coating condition, CUI screening, and climate-aware degradation rates. External recoat schedules are driven off the twin, not a paper checklist." },
      { question: "Can Houston teams generate TCEQ and OSHA PSM evidence directly from the twin?", answer: "Yes. PSM 29 CFR 1910.119 compliance packs, API 579 Level 1/2 FFS reports and TCEQ 30 TAC 115 evidence are exportable in one click, each with the underlying geo-referenced inspection data attached for reviewer traceability." },
    ],
  },
  'dubai': {
    uniqueLocalROI: "UAE operators running NDT digital twins on Jebel Ali and Ruwais-supply assets report 18-22% reduction in on-site inspection days per turnaround by pre-planning scaffold and rope-access scope from the twin, and measurable extension of wall-thickness fitness-for-service on vessels previously flagged for conservative replacement.",
    localIndustryUseCases: [
      "Jebel Ali tank-farm digital twins for ENOC/Emarat terminals with floor-MFL data driving API 579 zone assessments.",
      "Offshore platform jacket and topside digital twins consolidating ROV inspection data for ADNOC Offshore life-extension cases.",
      "High-sulfur crude refinery vessel digital twins with NACE MR0175-aware damage-mechanism models.",
    ],
    localCompliance: ["ADNOC HSE", "OSHAD", "API 510/570/653", "API 579-1/ASME FFS-1", "DNV-GL"],
    localCaseStudy: "A UAE downstream operator deployed digital twins across 22 Jebel Ali storage tanks and used the floor-MFL-fed API 579 Level 1/2 evidence to defer three tank replacements worth ~AED 42M while remaining fully ADNOC HSE and OSHAD compliant.",
    faqs: [
      { question: "Can you host the digital twin instance in the UAE for data-residency compliance?", answer: "Yes. The platform runs on Azure UAE North (Abu Dhabi) and AWS Bahrain with Dubai replica for UAE-resident data. ADGM and DIFC-regulated subsidiaries can be provisioned in dedicated tenancies with signed DPAs aligned with UAE Federal Decree-Law 45 of 2021." },
      { question: "How does the twin support ADNOC HSE and OSHAD inspection evidence requirements?", answer: "Each asset in the twin carries a damage-mechanism profile keyed to ADNOC's Asset Integrity Management Standard and OSHAD's pressure-equipment requirements. Inspection reports and FFS evidence export in ADNOC Technical Center and OSHAD review-ready formats." },
      { question: "Can the twin ingest legacy inspection data stored in Dropbox or SharePoint folders?", answer: "Yes. A structured migration tool ingests historical PDF and Excel inspection reports, OCRs tabular thickness data, and attaches photos to their geo-referenced positions on the twin — typically covering 10+ years of legacy data in 4-6 weeks per facility." },
      { question: "Does the platform support Arabic-language inspection reports and FFS assessment packs?", answer: "Yes. Bilingual Arabic/English reports and API 579-1/ASME FFS-1 Level 1/2 assessment packs are generated with correct RTL Arabic layout for UAE regulatory and client submissions." },
    ],
  },
  'abu-dhabi': {
    uniqueLocalROI: "ADNOC-aligned operators deploying NDT digital twins on Ruwais refinery and Das Island LNG assets typically recalibrate RBI plans 65% faster (14 days to 4-5) and extend fitness-for-service certification on heat-exchanger bundles that had been flagged for replacement — AED 25-45M per major unit in deferred capex.",
    localIndustryUseCases: [
      "Ruwais refinery hydrocracker digital twins aggregating UT, PA-UT and IRIS data for API 579 Level 2 FFS on high-temperature hydrogen attack zones.",
      "Das Island LNG cryogenic-storage digital twins with 9% Ni weld inspection records and brittle-fracture screening models.",
      "Sour-service gas-gathering pipeline digital twins with NACE MR0175 hardness traceability and SSC/HIC monitoring.",
    ],
    localCompliance: ["ADNOC Technical Center standards", "OSHAD", "API 579-1/ASME FFS-1", "NACE MR0175", "API 510/570"],
    localCaseStudy: "A Middle-East NOC running the Atlantis NDT Digital Twin on a Ruwais ethane-cracker unit reduced RBI recalibration cycle from 14 days to 4 days and — using API 579 Level 2 evidence generated from the twin — extended the run-length of a hot-reactor by 22 months, deferring ~AED 38M of mechanical-replacement spend.",
    faqs: [
      { question: "Does the digital twin align with ADNOC Technical Center's Asset Integrity Management Standard?", answer: "Yes. Damage mechanisms are keyed to ADNOC's AIM standard taxonomy, and FFS outputs, RBI recalibration records and inspection evidence export in the review format ADNOC Technical Center expects. ADNOC Technical Center-compliant assessment packs are a single-click export." },
      { question: "Can the instance be hosted in Abu Dhabi for ADNOC data-residency?", answer: "Yes. Azure UAE North (Abu Dhabi) is the default for ADNOC-facing deployments, and dedicated Etisalat Abu Dhabi tenancies are available. Data never leaves the UAE unless explicitly replicated for DR." },
      { question: "How does the twin model sour-service damage mechanisms on ADNOC Onshore gas fields?", answer: "Sour-service equipment carries a NACE MR0175/ISO 15156 damage-mechanism profile covering sulfide stress cracking, hydrogen induced cracking and stepwise cracking, with measured hardness and thickness feeding a separate remaining-life calculation that accounts for H2S partial pressure." },
      { question: "Can the twin support Das Island LNG cryogenic brittle-fracture assessment?", answer: "Yes. Cryogenic vessels carry a brittle-fracture damage-mechanism profile; the platform supports 9% Ni weld inspection intervals, low-temperature hydrogen attack screening and API 579 Part 3 brittle-fracture assessments with the ADNOC LNG review format built in." },
    ],
  },
  'saudi-arabia': {
    uniqueLocalROI: "Aramco-aligned operators running NDT digital twins on Yanbu/Jubail/Ras Tanura assets typically reduce RBI recalibration cycles by 70% and extend FFS on heat-exchanger tube bundles — often deferring SAR 60-120M of replacement capex across a 10-unit refinery while maintaining SAEP-1112 and Aramco AI-SAEP-1119 compliance.",
    localIndustryUseCases: [
      "Saudi Aramco SAEP-1119-aligned digital twins for Abqaiq separator trains with sour-service damage-mechanism profiles.",
      "Yanbu refinery hot-reactor digital twins with high-temperature hydrogen attack (HTHA) screening and API 579 Part 6 assessments.",
      "Ras Tanura export-terminal tank-farm digital twins aggregating MFL floor scans and API 653 external-wall-thickness data.",
    ],
    localCompliance: ["Saudi Aramco SAEP-1112 / AI-SAEP-1119", "SABIC Asset Integrity Standards", "API 579-1/ASME FFS-1", "NACE MR0175"],
    localCaseStudy: "A Kingdom-based refining operator deployed digital twins across six Jubail complex reactors and, using API 579 Part 6 HTHA assessments from the twin, extended the next major maintenance intervention by 18 months — deferring ~SAR 95M of reactor shell replacement while staying within Aramco AI-SAEP-1119 limits.",
    faqs: [
      { question: "Does the digital twin align with Saudi Aramco AI-SAEP-1119 integrity-management requirements?", answer: "Yes. The twin's damage-mechanism taxonomy, FFS assessment outputs and RBI recalibration records conform to AI-SAEP-1119 section structure, and SAEP-1112 technician qualification evidence can be attached per inspection event for full traceability." },
      { question: "Can the instance be hosted in Saudi Arabia for SACS-002 compliance?", answer: "Yes. AWS Middle East (Riyadh) and a dedicated Dammam-hosted tenancy are supported; for Aramco SACS-002 air-gapped environments we also offer an on-prem appliance deployment." },
      { question: "How does the twin handle HTHA screening on Yanbu hot-reactor vessels?", answer: "HTHA is tracked as a dedicated damage mechanism with Nelson curve position per zone, measured hardness and thickness feeding an API 579 Part 6 Level 1 or Level 2 assessment. The twin also drives re-inspection prioritisation on zones approaching Nelson curve operating limits." },
      { question: "Does the platform support Arabic-language FFS assessment packs for Aramco submissions?", answer: "Yes. Bilingual Arabic/English FFS reports are generated with correct RTL Arabic layout and the Saudi Aramco, SABIC, SATORP and YASREF header/footer standards." },
    ],
  },
  'calgary': {
    uniqueLocalROI: "Alberta oil-sands operators running NDT digital twins on upgrader and SAGD facilities typically recover 25-30% of lost inspection days caused by winter access constraints by pre-planning scope against the twin, and defer CAD 8-20M of pressure-vessel replacement spend per year using rigorous API 579 FFS evidence.",
    localIndustryUseCases: [
      "Oil-sands coker-drum digital twins with thermal-cycle damage models and remaining-life projections under AER D056/D077 evidence.",
      "SAGD steam-generator tube-bundle digital twins aggregating ECT and IRIS data under CSA B51 pressure-vessel requirements.",
      "Alberta crude/diluent pipeline digital twins with freeze/thaw damage-mechanism profiles for CER-regulated lines.",
    ],
    localCompliance: ["ABSA", "AER D056/D077", "CSA B51 / B31.3", "API 579-1/ASME FFS-1", "CGSB 48.9712"],
    localCaseStudy: "An oil-sands upgrader operator running the Atlantis NDT Digital Twin across four coker drums used API 579 Level 2 FFS evidence from the twin to extend run-length by 14 months, deferring ~CAD 18M of drum-shell replacement while maintaining full ABSA and AER compliance.",
    faqs: [
      { question: "Does the digital twin support ABSA and AER D056/D077 integrity-management requirements?", answer: "Yes. Pressure-vessel CRNs, AER-reportable pipeline assessments and ABSA-compliant next-inspection dates are native to the twin. AER D056/D077 evidence exports in a single click." },
      { question: "How does the twin handle oil-sands coker-drum thermal-cycle damage?", answer: "Coker drums carry a thermal-fatigue damage-mechanism profile with cycle count, strain measurement and crack-growth tracking. API 579 Part 10 fatigue assessments are driven directly from twin data." },
      { question: "Can the instance be hosted in Canada for federal and provincial data-residency?", answer: "Yes. AWS Canada (Central) and Azure Canada Central are supported; a Calgary-based dedicated tenancy is available for clients with AER or Alberta Privacy Act obligations." },
      { question: "Does the twin work in remote oil-sands sites with limited connectivity?", answer: "Yes. Full offline data capture for Kearl, Horizon, Firebag and Fort Hills operations; deferred sync on reconnect with no silent overwrites." },
    ],
  },
  'singapore': {
    uniqueLocalROI: "Jurong Island operators running NDT digital twins on cracker and polymer-plant vessels typically cut turnaround shutdown inspection duration by 18-24% through pre-planned scope and recover SGD 3-6M per major unit in deferred capex through rigorous FFS extensions.",
    localIndustryUseCases: [
      "Jurong Island cracker-furnace digital twins with high-temperature creep damage-mechanism profiles and API 579 Part 10 creep assessments.",
      "Marine loading-arm and jetty structural digital twins with AS/NZS and API-aligned inspection records.",
      "Polymer plant reactor vessel digital twins aggregating IRIS and PA-UT data for API 579 Part 5 local metal loss assessments.",
    ],
    localCompliance: ["MOM CERT", "EMA", "NEA", "API 579-1/ASME FFS-1", "API 510/570/653"],
    localCaseStudy: "A Jurong Island polymer-plant operator running the Atlantis NDT Digital Twin across nine reactor vessels used API 579 Part 5 evidence to defer reactor-shell replacement by 20 months — deferring ~SGD 9M of capex while staying within MOM CERT and NEA review limits.",
    faqs: [
      { question: "Can the digital twin be hosted in Singapore for PDPA and client data-residency?", answer: "Yes. AWS Asia Pacific (Singapore) and Azure Southeast Asia are supported, with signed PDPA-aligned DPAs. Jurong Island client IT teams frequently accept a dedicated Singapore tenancy with BCA Tier-3+ infrastructure." },
      { question: "How does the twin handle Jurong Island compressed turnaround windows?", answer: "The twin pre-generates the inspection scope the moment the unit shutdown plan is locked, aggregating all prior inspection data into a prioritised scope list that the MOM-qualified crew can execute in the shortest practical on-island time." },
      { question: "Does the twin support API 579 Part 10 creep assessment on cracker furnaces?", answer: "Yes. Creep damage-mechanism profiles with time-temperature-stress history, measured tube OD and remaining-life projections feed an API 579 Part 10 Level 1 or Level 2 assessment, with MOM CERT-compliant inspector sign-off." },
      { question: "Can Jurong Island client-format reports (ExxonMobil, Shell, PCS) be produced directly from the twin?", answer: "Yes. Pre-built templates for ExxonMobil Jurong, Shell Bukom, PCS Jurong and Singapore Refining Company are shipped with the twin and updated as clients revise formats." },
    ],
  },
  'mumbai': {
    uniqueLocalROI: "Indian refining operators running NDT digital twins on BPCL Mahul, HPCL Mahul and RIL Jamnagar assets typically reduce RBI-recalibration cycles by 60% and defer ~INR 40-90 crore per major unit in pressure-vessel replacement capex using rigorous API 579 FFS evidence within OISD-141 compliance limits.",
    localIndustryUseCases: [
      "BPCL Mahul refinery hydrocracker digital twins with HTHA screening and API 579 Part 6 assessments.",
      "Offshore Bombay High platform digital twins with monsoon-driven external-corrosion tracking and ROV-fed inspection data.",
      "Jamnagar refinery coker-drum digital twins aggregating thermal-fatigue and wall-thickness data for API 579 Part 10 assessments.",
    ],
    localCompliance: ["PESO", "OISD-141 / OISD-129", "IBR 1950", "API 579-1/ASME FFS-1", "BIS IS 2825"],
    localCaseStudy: "A western-India downstream operator running the Atlantis NDT Digital Twin on six Mahul-complex hot reactors used API 579 Part 6 HTHA evidence to extend next-maintenance by 16 months, deferring ~INR 65 crore of reactor-shell replacement while staying within OISD-141 boundaries.",
    faqs: [
      { question: "Can the digital twin be hosted in India for CERT-In and client data-residency?", answer: "Yes. AWS Mumbai, Azure Central India (Pune) and AWS Hyderabad are supported; signed DPAs aligned with India's DPDP Act are provided. For defence supply-chain work a dedicated India-only tenancy is available." },
      { question: "Does the twin support PESO and OISD-141 statutory inspection evidence?", answer: "Yes. PESO Form XVI, OISD-141 inspection interval evidence and IBR Form VI data are native fields in the twin's asset register. Statutory evidence exports are single-click." },
      { question: "How does the twin handle monsoon-driven external corrosion on Mumbai industrial sites?", answer: "External atmospheric corrosion is tracked as a separate damage mechanism with seasonal rate variation; monsoon impact is captured via seasonal corrosion-rate profiles and recoat schedules are driven off the twin, not a paper checklist." },
      { question: "Can reports be issued in Hindi or Marathi alongside English?", answer: "Yes. Bilingual layouts are supported for state factories-act and municipal submissions; most PESO/OISD refinery submissions remain English-only as per sector precedent." },
    ],
  },
  'chennai': {
    uniqueLocalROI: "South Indian operators running NDT digital twins on CPCL Manali and Kalpakkam nuclear supply-chain assets typically reduce multi-regulator evidence-pack prep by 45% and defer ~INR 25-60 crore per year of conservative-replacement capex using rigorous FFS evidence.",
    localIndustryUseCases: [
      "CPCL Manali refinery atmospheric-distillation column digital twins aggregating UT, PA-UT and IRIS data.",
      "Kalpakkam nuclear supply-chain pressure-equipment digital twins with AERB-traceable inspection records.",
      "Kamarajar Port shipyard dry-dock digital twins for structural weld inspection under AWS D1.1.",
    ],
    localCompliance: ["AERB", "PESO", "OISD-141", "API 579-1/ASME FFS-1", "BIS IS 2825", "DGCA (aerospace)"],
    localCaseStudy: "A South Indian NDT contractor on CPCL Manali used the Atlantis NDT Digital Twin to consolidate 15 years of paper inspection records into a geo-referenced 3D model and used the aggregated trend evidence to extend FFS on two atmospheric columns by 24 months, deferring ~INR 28 crore of replacement capex.",
    faqs: [
      { question: "Does the digital twin support AERB radiographer dose traceability for Kalpakkam supply-chain work?", answer: "Yes. Every RT inspection event in the twin carries the radiographer's dose ledger entry, source decay calculation and AERB authorisation reference, with exports in AERB statutory-submission format." },
      { question: "Can the twin handle CPCL Manali client-specific report formats?", answer: "Yes. CPCL, IOCL Chennai and Nagapattinam refinery header/footer formats are pre-loaded, including the deviation-note and corrective-action sections each facility requires." },
      { question: "Is data hosting available in India for Tamil Nadu state and sector data-residency?", answer: "Yes. AWS Mumbai, Azure Chennai and a dedicated India-only tenancy are supported, with DPDP Act-aligned DPAs." },
      { question: "How does the twin track DGCA NAS 410 qualifications for aerospace supplier work?", answer: "NAS 410 Revision 5 methods, levels and vision tests are tracked alongside ASNT and ISNT qualifications, and the inspection evidence on aerospace components carries the NAS 410 endorsement for client audit trails." },
    ],
  },
  'hyderabad': {
    uniqueLocalROI: "Hyderabad-dispatched NDT firms running digital twins on BHEL, HPCL Visakh and supply-chain aerospace customers typically reduce cross-client RBI evidence prep by 40% and defer ~INR 20-45 crore of conservative-replacement capex per year using rigorous FFS evidence.",
    localIndustryUseCases: [
      "BHEL power-boiler digital twins with high-temperature creep and thermal-fatigue damage-mechanism profiles.",
      "HPCL Visakh refinery-unit digital twins operated from Hyderabad engineering centres with remote trend review.",
      "Defence-supplier aerospace component digital twins under NAS 410 with NDT-traceable inspection records.",
    ],
    localCompliance: ["AERB", "IBR 1950", "PESO", "NAS 410", "API 579-1/ASME FFS-1"],
    localCaseStudy: "A Hyderabad-headquartered engineering-services firm used the Atlantis NDT Digital Twin to aggregate 12 years of HPCL Visakh inspection data and generate an API 579 Part 6 assessment that deferred a hot-reactor shell replacement by 19 months — saving ~INR 22 crore.",
    faqs: [
      { question: "Can the twin be operated remotely from Hyderabad for field sites in Visakh, Jamnagar or Barmer?", answer: "Yes. The twin is cloud-accessible; Hyderabad-based integrity engineers review and approve inspection evidence, FFS assessments and RBI recalibrations in real time while field crews collect data offline on-site." },
      { question: "Does the twin support Telugu/English bilingual inspection evidence?", answer: "Yes. Telugu/English bilingual report layouts are supported for Telangana factories-act submissions; most refinery/client submissions remain English-only." },
      { question: "How does the twin handle BHEL power-boiler creep assessment?", answer: "Creep damage mechanisms with time-temperature-stress history and measured tube OD data feed API 579 Part 10 Level 1/2 assessments, with BHEL's internal audit format supported." },
      { question: "Is data hosted in India for defence-supply-chain work?", answer: "Yes. A dedicated India-only tenancy with AWS Hyderabad/Mumbai hosting is available, with DPDP Act and defence sector data-protection clauses in the DPA." },
    ],
  },
  'doha': {
    uniqueLocalROI: "QatarEnergy North Field operators running NDT digital twins on cryogenic storage and LNG-train assets typically reduce shutdown inspection duration by 20% and defer QAR 35-70M per major unit of conservative-replacement capex using brittle-fracture and low-temperature FFS evidence.",
    localIndustryUseCases: [
      "QatarEnergy North Field LNG-train cryogenic vessel digital twins with 9% Ni weld inspection records and brittle-fracture screening.",
      "Ras Laffan loading-arm and jetty structural digital twins with BV/Lloyd's-format inspection evidence.",
      "Sour-service inter-field pipeline digital twins with NACE MR0175 hardness traceability and SSC/HIC monitoring.",
    ],
    localCompliance: ["QatarEnergy NFPS", "QCDD", "API 579-1/ASME FFS-1", "NACE MR0175", "API 510/570"],
    localCaseStudy: "A Qatar LNG operator running the Atlantis NDT Digital Twin across two North Field LNG trains used API 579 Part 3 brittle-fracture evidence to extend cryogenic vessel run-length by 22 months — deferring ~QAR 48M of mechanical replacement while remaining within NFPS limits.",
    faqs: [
      { question: "Does the digital twin align with QatarEnergy NFPS documentation requirements?", answer: "Yes. Inspection evidence, FFS assessments and RBI recalibration records export in the NFPS review format, with QE Technical Authority section structure preserved." },
      { question: "Can the instance be hosted in Qatar for NFPS data-residency?", answer: "Yes. Azure Qatar Central (Doha) and Ooredoo/Microsoft partner hosting are supported, with signed DPAs aligned with Qatar Law No. 13 of 2016." },
      { question: "How does the twin handle cryogenic brittle-fracture risk on LNG-train equipment?", answer: "Cryogenic vessels carry a brittle-fracture damage-mechanism profile; 9% Ni weld inspection intervals, low-temperature hydrogen attack screening and API 579 Part 3 assessments are driven off twin data, with QE cryogenic-review formats built in." },
      { question: "Can Arabic-language FFS reports be generated for QCDD and Ministry of Municipality submissions?", answer: "Yes. Bilingual Arabic/English FFS reports with RTL Arabic sections are supported, with QCDD and Ministry of Municipality format overlays." },
    ],
  },
  'kuwait': {
    uniqueLocalROI: "Kuwait downstream operators running NDT digital twins on KNPC/KIPIC Al-Zour assets typically reduce RBI-recalibration cycles by 55% and defer KWD 6-14M per major unit of pressure-vessel replacement capex using rigorous API 579 FFS evidence.",
    localIndustryUseCases: [
      "KIPIC Al-Zour hydrocracker digital twins with HTHA screening and API 579 Part 6 assessments on hot-reactor vessels.",
      "KNPC MAA/MAB refinery turnaround digital twins aggregating UT, PA-UT and IRIS data.",
      "KOC sour-service gathering-system pipeline digital twins with NACE MR0175 traceability.",
    ],
    localCompliance: ["KNPC Technical Standards", "KOC Inspection Standards", "API 579-1/ASME FFS-1", "NACE MR0175"],
    localCaseStudy: "A KIPIC contractor running the Atlantis NDT Digital Twin across three Al-Zour hydrocracker reactors used API 579 Part 6 HTHA evidence to extend run-length by 16 months — deferring ~KWD 9M of reactor-shell replacement while staying within KNPC technical-standard limits.",
    faqs: [
      { question: "Does the digital twin support KNPC and KIPIC technical-standard report formats?", answer: "Yes. KNPC (MAA, MAB, Al-Zour) and KIPIC Al-Zour technical-standard report templates are pre-loaded, including client-specific criticality classes and corrective-action sections." },
      { question: "Can the instance be hosted in Kuwait for ministry and operator data-residency?", answer: "Yes. AWS Middle East (Bahrain) with Kuwait replica and dedicated on-prem Kuwait tenancies are supported for Kuwait Law No. 20 of 2014 and operator-specific in-country storage requirements." },
      { question: "How does the twin handle KOC sour-service pipeline integrity management?", answer: "Sour-service pipelines carry a NACE MR0175/ISO 15156 damage-mechanism profile with hardness-traceability, SSC/HIC monitoring and thickness trending against a sour-service minimum wall; interval recalibration accounts for H2S partial-pressure changes." },
      { question: "Does the platform support Arabic-language FFS assessment packs?", answer: "Yes. Bilingual Arabic/English FFS and inspection reports with RTL Arabic layout, with KNPC and Kuwait Ministry of Oil review formats built in." },
    ],
  },
  'muscat': {
    uniqueLocalROI: "PDO and OQ operators running NDT digital twins on desert and refinery assets typically reduce remote-site inspection visits by 30% through twin-enabled virtual scope review and defer OMR 4-9M per year of conservative pressure-vessel replacement using rigorous API 579 evidence.",
    localIndustryUseCases: [
      "PDO onshore gathering-station digital twins with desert-atmospheric corrosion tracking and remote trend review from Muscat HQ.",
      "OQ Sohar refinery vessel and column digital twins aggregating inspection data across multiple turnaround cycles.",
      "Sur LNG cryogenic storage digital twins with 9% Ni weld inspection records and brittle-fracture screening.",
    ],
    localCompliance: ["PDO CMF", "OQ Inspection Standards", "Oman MEM", "API 579-1/ASME FFS-1"],
    localCaseStudy: "An Oman downstream operator running the Atlantis NDT Digital Twin across four OQ Sohar atmospheric columns extended FFS by 15 months using API 579 Part 4 evidence on wall-thickness trending — deferring ~OMR 5.5M of column-shell replacement.",
    faqs: [
      { question: "Does the twin support PDO Corporate Management Framework requirements?", answer: "Yes. PDO CMF integrity-management evidence and technician qualification records are native fields in the twin, with PDO-format exports available in a single click." },
      { question: "Can the instance be hosted in Oman for data-residency?", answer: "Yes. On-prem Muscat tenancies and Azure/AWS Middle East hosting are supported, with DPAs aligned with Oman's Electronic Transactions Law No. 69/2008." },
      { question: "How does the twin handle remote desert-site data capture for PDO Marmul or Ja'aluni?", answer: "Full offline data capture with deferred sync on return to base camp; the twin cloud instance in Muscat is updated automatically when the field app reconnects." },
      { question: "Does the twin support OQ refinery turnaround report formats for Sohar?", answer: "Yes. OQ Sohar refinery templates (atmospheric, vacuum, hydrocracker, CCR) are pre-loaded, matching OQ's preferred corrective-action and next-inspection-date formats." },
    ],
  },
  'aberdeen': {
    uniqueLocalROI: "UKCS operators running NDT digital twins on ageing North Sea platforms typically extend life-extension certification by 3-5 years beyond original design life and cut OPRED submission prep from 6 weeks to 10 days per platform using aggregated twin-evidence, with GBP 12-25M per platform deferred decommissioning or replacement spend.",
    localIndustryUseCases: [
      "UKCS platform jacket and topside digital twins with ROV-fed UT and CP data supporting HSE life-extension cases.",
      "FPSO hull plating and mooring-chain digital twins aggregating class-society (Lloyd's, DNV) inspection data.",
      "Subsea pipeline and riser digital twins supporting OPRED integrity submissions for decommissioning planning.",
    ],
    localCompliance: ["HSE UK", "OPRED", "PSSR 2000", "API 579-1/ASME FFS-1", "DNV/Lloyd's Register"],
    localCaseStudy: "A UKCS late-life operator running the Atlantis NDT Digital Twin across two North Sea fixed platforms aggregated 18 years of jacket-member UT data and — using API 579 Part 4 and Part 5 evidence — secured HSE acceptance for a 4-year life-extension, deferring ~GBP 18M of decommissioning preparation.",
    faqs: [
      { question: "Does the digital twin support HSE UK life-extension case submissions?", answer: "Yes. The twin aggregates multi-decade inspection evidence into an HSE-reviewable life-extension submission, with API 579 Part 3/4/5 assessments and PSSR 2000 written-scheme currency all bundled in." },
      { question: "Can the instance be hosted in the UK for GDPR and client requirements?", answer: "Yes. Azure UK South (London), AWS Europe (London) and a dedicated Aberdeen tenancy are supported, with UK GDPR-aligned DPAs by default." },
      { question: "How does the twin handle ROV-delivered subsea inspection data?", answer: "Subsea UT, CP and visual inspection data is ingested from ROV pipelines directly into the twin with depth and bearing geo-referencing; subsea riser, pipeline and mooring-chain damage-mechanism profiles drive remaining-life calculations." },
      { question: "Does the platform support OPRED submissions for North Sea decommissioning?", answer: "Yes. OPRED decommissioning programme evidence including asset integrity status, remaining-life projections and cessation-of-production readiness data are exportable in OPRED review format." },
    ],
  },
  'oslo': {
    uniqueLocalROI: "Norwegian NCS operators running NDT digital twins on Equinor, Aker BP and Vår Energi assets typically reduce NORSOK Z-008 planning cycles by 60% and defer NOK 150-320M per major asset of conservative-replacement capex through rigorous API 579 + NORSOK-aligned FFS evidence.",
    localIndustryUseCases: [
      "Equinor Troll, Oseberg and Johan Sverdrup platform digital twins with NORSOK N-001 structural and Z-008 planning alignment.",
      "Subsea manifold and template digital twins aggregating ROV UT and CP data for Aker BP Ivar Aasen and ConocoPhillips Ekofisk.",
      "Floating wind foundation digital twins for Hywind Tampen and equivalent emerging NCS offshore wind assets.",
    ],
    localCompliance: ["PSA Norway", "NORSOK N-001 / Z-008", "Equinor STID / Aker BP Synergi Life", "API 579-1/ASME FFS-1"],
    localCaseStudy: "A Norwegian operator running the Atlantis NDT Digital Twin on a Troll-area platform used NORSOK Z-008 and API 579 evidence to recalibrate inspection intervals on 640 pressure systems, reducing next-cycle inspection scope by 28% while improving coverage on high-risk zones — PSA Norway surveillance passed with zero findings.",
    faqs: [
      { question: "Does the digital twin support NORSOK N-001 and Z-008 inspection planning?", answer: "Yes. NORSOK Z-008 inspection grouping, risk categorisation and interval assignment are native to the twin, and N-001 structural integrity evidence is tracked per platform/module with PSA Norway-review exports." },
      { question: "Can the twin integrate with Equinor STID or Aker BP Synergi Life?", answer: "Yes. Connectors push inspection closeout, corrosion rates and remaining-life data into Equinor STID and Aker BP Synergi Life with a read-back of operator inspection plans." },
      { question: "Is hosting available in Norway for PSA and Equinor cybersecurity requirements?", answer: "Yes. Azure Norway East and a dedicated Stavanger-hosted tenancy are supported, with signed DPAs aligned with Norwegian Personal Data Act." },
      { question: "Does the platform handle floating offshore wind inspection data alongside O&G assets?", answer: "Yes. Floating wind foundation damage-mechanism profiles (mooring chains, dynamic cables, floater hull) coexist with O&G asset profiles in the same twin, enabling shared NCS-wide integrity programmes." },
    ],
  },
  'london': {
    uniqueLocalROI: "UK multi-sector operators running NDT digital twins on industrial and nuclear supply-chain assets typically reduce cross-regulator evidence-pack prep by 50% and defer GBP 8-22M per year of conservative-replacement capex using rigorous API 579 + ONR-aligned FFS evidence.",
    localIndustryUseCases: [
      "Power-station and nuclear-supply-chain vessel digital twins with ONR-traceable inspection evidence.",
      "London-area industrial pressure-system digital twins with PSSR 2000 written-scheme-of-examination integration.",
      "Aerospace Part-145 component digital twins under NAS 410 with NDT-traceable records.",
    ],
    localCompliance: ["HSE UK", "ONR (nuclear)", "PSSR 2000", "EASA Part-145", "API 579-1/ASME FFS-1"],
    localCaseStudy: "A London-headquartered consultancy used the Atlantis NDT Digital Twin to aggregate Hinkley Point supply-chain NDT records across 14 pressure-vessel components and delivered an ONR-acceptable integrity submission 3 weeks ahead of schedule — the customer (a Tier-1 nuclear EPC) has since adopted the platform as its audit-evidence standard.",
    faqs: [
      { question: "Does the digital twin support ONR-reviewable evidence for UK nuclear supply-chain work?", answer: "Yes. Nuclear-grade damage-mechanism profiles, technician qualification traceability and inspection evidence are structured for ONR review, with exports in ONR SAP FIN and the relevant Sellafield/Hinkley site-specific formats." },
      { question: "How does the twin handle PSSR 2000 written schemes of examination?", answer: "Each pressure system carries a written scheme with next-exam date computed against its classification; competent-person sign-off is a hard gate, and PSSR register exports are HSE-inspector-ready in one click." },
      { question: "Can the instance be hosted in the UK for GDPR and client preferences?", answer: "Yes. Azure UK South (London), AWS Europe (London) and GCP London are supported, with UK GDPR-aligned DPAs by default." },
      { question: "Does the twin support parallel aerospace EASA Part-145 and industrial HSE work?", answer: "Yes. Multi-sector qualification schemes (PCN, NAS 410, EASA Part-145, ONR, HSE) coexist per technician, and inspection evidence carries the correct scheme endorsement per work order." },
    ],
  },
  'rotterdam': {
    uniqueLocalROI: "Rotterdam Europoort operators running NDT digital twins on refinery and chemical-cluster assets typically reduce Seveso III evidence-pack prep by 60% and defer EUR 8-18M per major unit of conservative-replacement capex using rigorous API 579 + PED-aligned evidence.",
    localIndustryUseCases: [
      "Europoort refinery and chemical-cluster vessel digital twins with PED 2014/68/EU conformity and Seveso III evidence.",
      "Vopak/Koole tank-farm digital twins aggregating API 653 and floor-MFL inspection data.",
      "Port of Rotterdam pipeline and jetty structural digital twins with ILT/ANVS submission-ready evidence.",
    ],
    localCompliance: ["Seveso III", "ILT / ANVS", "PED 2014/68/EU", "API 579-1/ASME FFS-1", "DNV"],
    localCaseStudy: "A Rotterdam Europoort operator running the Atlantis NDT Digital Twin across 28 storage tanks used API 653 and API 579 Part 5 evidence from the twin to defer three tank-floor replacements by 24 months — deferring ~EUR 11M of capex while passing ILT Seveso III surveillance with zero findings.",
    faqs: [
      { question: "Does the digital twin support PED 2014/68/EU conformity for Europoort equipment?", answer: "Yes. PED category mapping, notified-body evidence and conformity assessment records are tracked per asset, with pre-PED service-life data preserved for full remaining-life calculations." },
      { question: "How is Seveso III evidence organised in the twin?", answer: "Each Seveso III major-accident-hazard installation has a dedicated evidence folder covering inspection intervals, procedures, technician qualifications and findings, with a one-click ILT/ANVS review pack." },
      { question: "Can the instance be hosted in the Netherlands for GDPR and client data-residency?", answer: "Yes. AWS Europe (Amsterdam), Azure West Europe (Amsterdam) and a dedicated Rotterdam tenancy are supported, with UK/EU GDPR-aligned DPAs." },
      { question: "Does the twin generate Dutch-language reports for ILT and municipality submissions?", answer: "Yes. Dutch/English bilingual reports are supported, with ILT and Rotterdam municipality format overlays." },
    ],
  },
  'perth': {
    uniqueLocalROI: "Perth-managed LNG and offshore operators running NDT digital twins on NWS, Gorgon and Wheatstone assets typically reduce on-platform inspection days per turnaround by 20-25% and defer AUD 18-42M per major unit of conservative-replacement capex using rigorous API 579 FFS evidence.",
    localIndustryUseCases: [
      "NWS, Gorgon and Wheatstone LNG cryogenic-storage digital twins with 9% Ni weld records and brittle-fracture screening.",
      "FLNG/FPSO hull and mooring-chain digital twins aggregating ROV-fed UT and CP data.",
      "Pilbara iron-ore processing plant pressure-vessel digital twins with atmospheric corrosion tracking.",
    ],
    localCompliance: ["WorkSafe WA", "NOPSEMA", "AS 3788", "API 579-1/ASME FFS-1", "DNV/Lloyd's Register"],
    localCaseStudy: "A Perth-managed LNG operator running the Atlantis NDT Digital Twin across two Gorgon cryogenic trains used API 579 Part 3 brittle-fracture evidence to extend vessel run-length by 26 months — deferring ~AUD 32M of mechanical-replacement spend while maintaining full NOPSEMA compliance.",
    faqs: [
      { question: "Does the digital twin support NOPSEMA offshore integrity-management requirements?", answer: "Yes. NOPSEMA-reviewable evidence including safety-case integration, damage-mechanism tracking and FFS assessments are native, with exports in NOPSEMA submission format." },
      { question: "Can the instance be hosted in Australia for AUSCERT and client data-residency?", answer: "Yes. AWS Sydney, AWS Melbourne and Azure Australia East are supported, with APP-aligned DPAs by default." },
      { question: "How does the twin handle cryogenic brittle-fracture on NWS and Gorgon LNG trains?", answer: "Cryogenic vessels carry a brittle-fracture damage-mechanism profile; 9% Ni weld inspection intervals, low-temperature hydrogen attack screening and API 579 Part 3 assessments are all driven off twin data." },
      { question: "Does the twin support ROV-fed inspection data for FLNG and FPSO operations?", answer: "Yes. Subsea UT, CP and visual inspection data from ROV pipelines is ingested with depth and bearing geo-referencing, integrated with topside inspection evidence in a unified twin." },
    ],
  },
  'denver': {
    uniqueLocalROI: "Denver-managed pipeline and refining operators running NDT digital twins on Rocky Mountain assets typically reduce PHMSA integrity-management evidence prep by 55% and defer USD 6-15M per year of conservative pipeline-segment replacement capex using rigorous API 579 + API 1160 assessments.",
    localIndustryUseCases: [
      "Rocky Mountain crude/product pipeline digital twins aggregating ILI vendor data (MFL, UT, EMAT) with dig-verification records.",
      "Suncor Commerce City refinery-unit digital twins with high-altitude UV external-corrosion profiles.",
      "DJ Basin gathering-system digital twins with CDPHE air-emissions and integrity-management evidence.",
    ],
    localCompliance: ["PHMSA (49 CFR 192/195)", "API 1160", "OSHA PSM", "CDPHE", "API 579-1/ASME FFS-1"],
    localCaseStudy: "A Rocky Mountain midstream operator running the Atlantis NDT Digital Twin across 1,240 miles of crude pipeline used API 1160 + API 579 Part 5 evidence from the twin to defer three pipeline-segment replacements by 30 months — deferring ~USD 8M of capex while passing PHMSA surveillance with zero findings.",
    faqs: [
      { question: "Does the digital twin support PHMSA 49 CFR 192/195 integrity-management for pipelines?", answer: "Yes. ILI vendor data ingestion, anomaly registers, dig-and-repair records and next-assessment dates are native, with PHMSA review-ready exports and API 1160 evidence structure." },
      { question: "Can the twin handle OSHA PSM covered equipment at Suncor Commerce City?", answer: "Yes. PSM-covered pressure equipment carries PSM-compliant intervals and MOC-linked procedures; audit-pack export is single-click." },
      { question: "How does the twin handle high-altitude external corrosion on Rocky Mountain storage tanks?", answer: "External atmospheric corrosion carries a damage-mechanism profile with UV-degradation, temperature-cycling and coating-condition tracking; external recoat schedules are driven off the twin." },
      { question: "Can data be hosted in the US with FedRAMP compliance for DOT-regulated clients?", answer: "Yes. FedRAMP-compliant tenancy on AWS GovCloud is available alongside standard commercial hosting on AWS us-east-1/us-west-2 and Azure US-Central." },
    ],
  },
  'new-orleans': {
    uniqueLocalROI: "Gulf Coast Louisiana operators running NDT digital twins on Mississippi corridor refineries and LNG terminals typically reduce post-hurricane re-inspection planning from 3 weeks to a day and defer USD 7-18M per major unit of conservative pressure-vessel replacement capex.",
    localIndustryUseCases: [
      "Mississippi corridor refinery and chemical-plant vessel digital twins with OSHA PSM and EPA RMP evidence.",
      "Sabine Pass and Cameron LNG cryogenic-storage digital twins with 9% Ni weld records and brittle-fracture screening.",
      "Hurricane post-event re-inspection auto-planning for storage tanks, jetties and relief systems.",
    ],
    localCompliance: ["OSHA PSM", "EPA RMP", "Louisiana DNR", "API 579-1/ASME FFS-1", "USCG/PHMSA (LNG)"],
    localCaseStudy: "A Louisiana corridor operator running the Atlantis NDT Digital Twin across 18 units used post-event re-inspection automation after Hurricane Francine to generate a prioritised 812-asset re-inspection plan in under 2 hours — typically a 3-week manual exercise.",
    faqs: [
      { question: "Does the digital twin support OSHA PSM 29 CFR 1910.119 and EPA RMP evidence?", answer: "Yes. PSM and RMP covered equipment carries compliant intervals, MOC-linked procedures and RAGAGEP records, with single-click audit packs for both OSHA and EPA review." },
      { question: "How does the twin handle hurricane post-event re-inspection?", answer: "A 'post-event' trigger reprioritises high-risk zones and auto-spawns work orders for storage-tank external, jetty structural and relief-system inspections within hours — not weeks." },
      { question: "Can the twin manage LNG cryogenic brittle-fracture risk for Sabine Pass and Cameron LNG?", answer: "Yes. 9% Ni weld inspection intervals, low-temperature hydrogen attack screening and API 579 Part 3 brittle-fracture assessments are natively supported with USCG/PHMSA review formats." },
      { question: "Does the twin support Louisiana DNR and LDEQ statutory evidence?", answer: "Yes. LDNR and LDEQ templates for Title V air emissions, LPDES surface-water and tank-farm inspections are pre-loaded and maintained." },
    ],
  },
  'lagos': {
    uniqueLocalROI: "Nigerian operators running NDT digital twins on Dangote, NNPC and IOC assets typically cut NMDPRA evidence-pack prep from 5 days to 6 hours and defer ~USD 5-12M per major unit of conservative-replacement capex using rigorous API 579 FFS evidence.",
    localIndustryUseCases: [
      "Dangote Refinery atmospheric- and vacuum-distillation digital twins aggregating UT, PA-UT and IRIS data from commissioning onward.",
      "Niger Delta IOC pipeline digital twins with DPR/NMDPRA statutory evidence trails.",
      "Bonga / Egina deepwater FPSO hull digital twins with ROV-fed inspection data and NCDMB local-content evidence.",
    ],
    localCompliance: ["NMDPRA (ex-DPR)", "NCDMB", "NAPIMS", "API 579-1/ASME FFS-1", "USCG (LNG supply)"],
    localCaseStudy: "A Lagos-based NDT contractor on the Dangote Refinery used the Atlantis NDT Digital Twin from commissioning onward to establish baseline thickness grids across 42 pressure vessels — enabling rigorous year-on-year corrosion-rate tracking and an NMDPRA-accepted integrity programme from day one of operations.",
    faqs: [
      { question: "Does the digital twin support NMDPRA (ex-DPR) statutory evidence for Nigerian refineries?", answer: "Yes. NMDPRA report formats, intervals and operator-specific annexes (Shell SPDC, Chevron CNL, TotalEnergies EP Nigeria, NLNG, Dangote) are pre-loaded and maintained as the regulator revises guidance." },
      { question: "Can the instance be hosted in Nigeria for NITDA and client data-residency?", answer: "Yes. On-prem Lagos tenancies and AWS Africa (Cape Town) with Nigeria-replica options are supported, with NDPR-aligned DPAs by default." },
      { question: "How is inspection data captured on Niger Delta field sites with limited connectivity?", answer: "Full offline data capture with deferred sync; field app tested in Niger Delta deep-swamp and deepwater FPSO environments with no silent-overwrite conflicts." },
      { question: "Does the twin support NCDMB local-content evidence alongside integrity-management?", answer: "Yes. Each inspection event attaches NCDMB Nigerian Content Plan evidence (technician nationality, mentorship hours, Nigerian-spend) to the integrity record, supporting a combined NMDPRA + NCDMB submission." },
    ],
  },
  'jubail': {
    uniqueLocalROI: "Jubail-based SABIC and SATORP integrity teams running NDT digital twins typically reduce SAEP-1119 evidence-pack prep by 65% and defer ~SAR 40-90M per major unit of conservative-replacement capex using rigorous API 579 FFS evidence within SABIC and SATORP compliance boundaries.",
    localIndustryUseCases: [
      "SABIC Kemya, Yansab and Petrokemya cracker-unit digital twins with creep, HTHA and sour-service damage-mechanism models.",
      "SATORP refinery atmospheric/vacuum/HDS digital twins aggregating UT, PA-UT and IRIS data.",
      "Royal Commission Jubail tank-farm and pipeline digital twins with RCJY-format statutory evidence.",
    ],
    localCompliance: ["Saudi Aramco SAEP-1119", "SABIC AIS", "SATORP standards", "Royal Commission Jubail", "API 579-1/ASME FFS-1"],
    localCaseStudy: "A SABIC Kemya integrity team running the Atlantis NDT Digital Twin across four cracker-unit hot reactors used API 579 Part 6 HTHA evidence from the twin to extend next-maintenance by 18 months, deferring ~SAR 72M of reactor-shell replacement while staying within SABIC AIS limits.",
    faqs: [
      { question: "Does the digital twin align with SABIC Asset Integrity Standards?", answer: "Yes. SABIC AIS damage-mechanism taxonomy, FFS outputs and RBI recalibration records conform to SABIC review format, and SAEP-1119 evidence can be attached per inspection event." },
      { question: "Can the twin be hosted in Saudi Arabia for SACS-002 and SABIC cybersecurity?", answer: "Yes. AWS Middle East (Riyadh) and on-prem Dammam tenancies are supported, including air-gapped appliance deployment for SACS-002 Level 4 environments." },
      { question: "How does the twin handle Royal Commission Jubail tank-farm and pipeline submissions?", answer: "RCJY tank-farm and pipeline statutory report templates are pre-loaded, including the industrial-city permit-to-inspect workflows." },
      { question: "Does the platform support Arabic-language FFS reports for Aramco, SABIC and SATORP?", answer: "Yes. Bilingual Arabic/English reports with RTL Arabic layout are generated in the Aramco, SABIC, SATORP and YASREF header/footer formats." },
    ],
  },
  'manama': {
    uniqueLocalROI: "Bahrain operators running NDT digital twins on BAPCO, ALBA and Tatweer Petroleum assets typically reduce BAPCO Modernisation Program integrity-evidence prep by 70% and defer BHD 600k-1.5M per year of conservative-replacement capex using rigorous API 579 FFS evidence.",
    localIndustryUseCases: [
      "BAPCO Sitra refinery modernisation-project digital twins with BAPCO-standard inspection evidence.",
      "ALBA Line 6 potlining and pot-shell digital twins with aluminium-smelter damage-mechanism profiles.",
      "Tatweer Petroleum onshore gathering-system digital twins with Bahrain NOGA statutory evidence.",
    ],
    localCompliance: ["Bahrain NOGA", "BAPCO Technical Standards", "ALBA Standards", "API 579-1/ASME FFS-1"],
    localCaseStudy: "A Manama operator on the BAPCO Modernisation Program used the Atlantis NDT Digital Twin across seven new pressure-vessels to establish commissioning-baseline thickness grids and enable rigorous corrosion-rate tracking from day one of operations.",
    faqs: [
      { question: "Does the twin support BAPCO Modernisation Program (BMP) documentation?", answer: "Yes. BMP-specific templates, commissioning report formats and BAPCO's internal qualification endorsements are tracked natively in the twin." },
      { question: "Can the twin handle ALBA aluminium-smelter damage mechanisms?", answer: "Yes. Pot-shell thermal cycling, cryolite-bath corrosion and gas-duct sulfation damage profiles are configurable, with inspection evidence reflecting aluminium-industry standards." },
      { question: "Is hosting available in Bahrain for NOGA and BAPCO requirements?", answer: "Yes. AWS Middle East (Bahrain) supports native hosting with dedicated tenancy and in-country backup." },
      { question: "Does the twin handle GCC cross-operator qualification recognition?", answer: "Yes. GCC-wide qualification recognition (ADNOC, Aramco, QatarEnergy, PDO, KNPC, BAPCO) is mapped in-platform so the same integrity team can move across operator frameworks without duplicated evidence." },
    ],
  },
};

// Compact DT defaults for remaining curated cities.
const COMPACT_DT_DEFAULTS: Record<string, Partial<CityProductProfile>> = {
  'bergen': {
    uniqueLocalROI: "Bergen subsea and NCS operators running NDT digital twins on Troll-area and subsea assets typically reduce PSA Norway submission prep by 50% and defer NOK 80-180M per major asset of conservative-replacement capex.",
    localIndustryUseCases: [
      "Troll/Kvitebjørn/Valemon platform digital twins with NORSOK N-001/Z-008 planning alignment.",
      "Subsea manifold and template digital twins with ROV UT and CP data integration.",
      "Floating offshore wind foundation digital twins for Hywind-type NCS assets.",
    ],
    localCompliance: ["PSA Norway", "NORSOK N-001/Z-008", "API 579", "DNV"],
    localCaseStudy: "A Bergen-based integrity team cut NCS inspection-planning prep by 65% after deploying the Atlantis NDT Digital Twin.",
  },
  'edmonton': {
    uniqueLocalROI: "Edmonton-area oil-sands upgrader operators running NDT digital twins typically defer CAD 6-14M per year of conservative pressure-vessel replacement using API 579 + AER-aligned FFS evidence.",
    localIndustryUseCases: [
      "Oil-sands upgrader coker drum and fractionator digital twins.",
      "SAGD steam-generator tube-bundle digital twins.",
      "Alberta Industrial Heartland pipeline digital twins under AER D077.",
    ],
    localCompliance: ["ABSA", "AER D056/D077", "CSA B51 / B31.3", "API 579"],
    localCaseStudy: "An Edmonton upgrader operator used the Atlantis NDT Digital Twin to defer a coker-drum replacement by 12 months — ~CAD 9M in deferred capex.",
  },
  'basrah': {
    uniqueLocalROI: "Iraq-based integrity teams running NDT digital twins on Rumaila and West Qurna assets typically reduce operator (BP/ExxonMobil/Lukoil) integrity-evidence prep by 55%.",
    localIndustryUseCases: [
      "Rumaila/West Qurna gathering-system digital twins with NACE MR0175 traceability.",
      "Basrah Gas Company pipeline digital twins with sour-service damage models.",
      "Export-terminal tank-farm digital twins with MoO statutory evidence.",
    ],
    localCompliance: ["Iraqi Ministry of Oil", "Basrah Oil Company", "NACE MR0175", "API 579"],
    localCaseStudy: "A Basrah-based contractor used the Atlantis NDT Digital Twin to cut pre-mob BP client evidence prep from 9 days to 2.",
  },
  'kuala-lumpur': {
    uniqueLocalROI: "Malaysian operators on PETRONAS PIC/RAPID assets running NDT digital twins typically defer MYR 20-55M per major unit of conservative-replacement capex using API 579 + PTS-aligned evidence.",
    localIndustryUseCases: [
      "Pengerang Integrated Complex (RAPID) digital twins with PETRONAS PTS-aligned evidence.",
      "Bintulu MLNG cryogenic-storage digital twins with 9% Ni weld inspection records.",
      "Sabah/Sarawak offshore platform digital twins with DOSH-PMA endorsement tracking.",
    ],
    localCompliance: ["DOSH PMA", "PETRONAS PTS", "API 579", "Malaysian Standards"],
    localCaseStudy: "A KL-based PETRONAS contractor used the Atlantis NDT Digital Twin on Bintulu MLNG cryogenic assets to extend FFS by 14 months.",
  },
  'yanbu': {
    uniqueLocalROI: "Yanbu integrity teams running NDT digital twins on YASREF and Yanbu Refinery assets typically defer SAR 30-70M per major unit of conservative-replacement capex using rigorous API 579 FFS evidence.",
    localIndustryUseCases: [
      "YASREF refinery-unit digital twins with Aramco SAEP-1119 evidence.",
      "SABIC Ibn Al-Baytar cracker digital twins with HTHA screening.",
      "Yanbu Commercial Port tank-farm digital twins under Royal Commission Yanbu.",
    ],
    localCompliance: ["Saudi Aramco SAEP-1119", "YASREF", "Royal Commission Yanbu", "API 579"],
    localCaseStudy: "A YASREF integrity team used the Atlantis NDT Digital Twin on hot-reactor assets to extend run-length by 14 months.",
  },
  'sohar': {
    uniqueLocalROI: "Sohar-based integrity teams running NDT digital twins on OQ refinery and industrial-zone assets typically defer OMR 2-5M per year of conservative-replacement capex.",
    localIndustryUseCases: [
      "OQ Sohar refinery vessel and column digital twins.",
      "Sohar Port jetty and pipeline digital twins.",
      "Vale pelletising plant and aluminium smelter digital twins.",
    ],
    localCompliance: ["OQ Inspection Standards", "Oman MEM", "API 579"],
    localCaseStudy: "An OQ Sohar integrity team used the Atlantis NDT Digital Twin to defer a column-shell replacement by 13 months.",
  },
  'ras-al-khaimah': {
    uniqueLocalROI: "RAK industrial-park operators running NDT digital twins on cement, ceramics and Saqr Port assets typically defer AED 3-8M per year of conservative-replacement capex.",
    localIndustryUseCases: [
      "RAK cement and ceramics plant pressure-equipment digital twins.",
      "Saqr Port tank-farm and jetty digital twins.",
      "RAK Gas and DANA Gas onshore digital twins with UAE-standard evidence.",
    ],
    localCompliance: ["ADNOC HSE (supply)", "OSHAD", "UAE CoC", "API 579"],
    localCaseStudy: "A RAK Ceramics integrity team used the Atlantis NDT Digital Twin to defer a furnace-vessel replacement by 10 months.",
  },
  'sharjah': {
    uniqueLocalROI: "Sharjah-based integrity teams running NDT digital twins on SNOC and Hamriyah assets typically defer AED 4-10M per year of conservative-replacement capex.",
    localIndustryUseCases: [
      "SNOC onshore gas-field and processing digital twins.",
      "Hamriyah Free Zone tank-farm and pipeline digital twins.",
      "Sharjah Port and Khorfakkan jetty structural digital twins.",
    ],
    localCompliance: ["SNOC standards", "OSHAD", "UAE CoC", "API 579"],
    localCaseStudy: "A Sharjah SNOC integrity team used the Atlantis NDT Digital Twin to defer a separator-vessel replacement by 11 months.",
  },
  'port-harcourt': {
    uniqueLocalROI: "Niger Delta operators running NDT digital twins on Shell SPDC and TotalEnergies EP Nigeria assets typically defer USD 4-9M per major field of conservative pipeline-segment replacement.",
    localIndustryUseCases: [
      "Shell SPDC/TotalEnergies EP Nigeria onshore gathering-system digital twins with NMDPRA evidence.",
      "Port Harcourt NNPC refinery turnaround digital twins.",
      "Bonga / Egina deepwater FPSO digital twins with NCDMB local-content evidence.",
    ],
    localCompliance: ["NMDPRA (ex-DPR)", "NCDMB", "NAPIMS", "API 579"],
    localCaseStudy: "A Port Harcourt SPDC contractor used the Atlantis NDT Digital Twin to defer two pipeline-segment replacements by 18 months each.",
  },
  // ── DT Tier A expansion (May 2026) ─────────────────────────────────
  'atlanta': {
    uniqueLocalROI: "Southeast US pipeline operators and Plant Vogtle supply-chain contractors running NDT digital twins typically reduce PHMSA integrity-management and NRC inspection evidence prep by 50% and defer USD 5-12M per year of conservative pipeline-segment replacement using rigorous API 579 + API 1160 assessments.",
    localIndustryUseCases: [
      "Colonial Pipeline mainline digital twins aggregating MFL ILI data with dig-verification records.",
      "Plant Vogtle AP1000 pressure-equipment digital twins under ASME Section XI in-service inspection.",
      "Georgia-Pacific paper-mill digester and recovery-boiler digital twins with regional-OSHA evidence.",
    ],
    localCompliance: ["PHMSA (49 CFR 195)", "NRC (10 CFR 50)", "OSHA PSM", "API 1160", "ASME Section XI"],
    localCaseStudy: "A Southeast US midstream operator headquartered in Atlanta used the Atlantis NDT Digital Twin to defer three pipeline segments and one tank floor by 24+ months — ~USD 8M of capex avoided.",
  },
  'austin': {
    uniqueLocalROI: "Texas tech-corridor operators running NDT digital twins on Tesla Gigafactory utilities, Samsung Austin Semiconductor fab systems, and South Texas Project nuclear assets typically defer USD 4-9M per major asset of conservative-replacement capex using rigorous ASME-aligned FFS evidence.",
    localIndustryUseCases: [
      "South Texas Project nuclear ASME Section XI in-service inspection digital twins.",
      "Samsung Austin Semiconductor high-purity gas-system digital twins.",
      "LCRA gas-fired power-plant boiler digital twins with TCEQ and OSHA PSM evidence.",
    ],
    localCompliance: ["NRC (10 CFR 50)", "ASME Section XI", "OSHA PSM", "TCEQ"],
    localCaseStudy: "An Austin-area nuclear-supply-chain contractor used the Atlantis NDT Digital Twin to consolidate 12 years of inspection records, reducing NRC inspector review time by ~70%.",
  },
  'bahrain': {
    uniqueLocalROI: "Bahraini operators on BAPCO BMP, ALBA Line 6 and Tatweer Petroleum assets running NDT digital twins typically defer BHD 1.2-3.4M per year of conservative-replacement capex using rigorous API 579 FFS evidence.",
    localIndustryUseCases: [
      "BAPCO Sitra Modernisation Programme digital twins from commissioning baseline onward.",
      "ALBA Line 6 pot-line gas-duct and cathode-shell digital twins.",
      "Tatweer Petroleum Awali field gathering-system digital twins with NACE MR0175 traceability.",
    ],
    localCompliance: ["Bahrain NOGA", "BAPCO Technical Standards", "ALBA Standards", "API 579", "NACE MR0175"],
    localCaseStudy: "A Bahraini contractor on the BAPCO Modernisation Programme used the Atlantis NDT Digital Twin to establish commissioning-baseline thickness across 14 new vessels, eliminating evidence-gaps for the first annual NOGA review.",
  },
  'baton-rouge': {
    uniqueLocalROI: "Louisiana corridor operators running NDT digital twins on ExxonMobil Baton Rouge, Dow Plaquemine and Shintech PVC assets typically reduce post-hurricane re-inspection prep from 3 weeks to 1 day and defer USD 8-18M per major unit of conservative pressure-vessel replacement capex.",
    localIndustryUseCases: [
      "ExxonMobil Baton Rouge FCC and hydrocracker digital twins with HTHA screening.",
      "Dow Plaquemine cracker-furnace and Shintech PVC reactor digital twins.",
      "Mississippi corridor pipeline digital twins with post-event re-inspection automation.",
    ],
    localCompliance: ["OSHA PSM", "EPA RMP", "Louisiana DEQ", "API 579", "API 510/570"],
    localCaseStudy: "An ExxonMobil Baton Rouge contractor used the Atlantis NDT Digital Twin to reduce post-Hurricane Francine re-inspection planning from 18 days to 6 hours.",
  },
  'brazil': {
    uniqueLocalROI: "Brazilian Petrobras and Braskem operators running NDT digital twins on pre-salt FPSO and downstream refining assets typically reduce ANP integrity-evidence prep by 55% and defer BRL 80-180M per major asset of conservative-replacement capex using rigorous API 579 + ANP-aligned FFS evidence.",
    localIndustryUseCases: [
      "Petrobras pre-salt FPSO hull and topside digital twins (Búzios, Tupi, Mero).",
      "Replan, REDUC and RNEST refinery hot-reactor digital twins with HTHA screening.",
      "Braskem Camaçari and Triunfo cracker-unit digital twins.",
    ],
    localCompliance: ["ANP", "IBAMA", "NR-13 (boilers)", "API 579", "DNV/ABS class society"],
    localCaseStudy: "A Petrobras contractor used the Atlantis NDT Digital Twin on FPSO Sepetiba to consolidate ROV-fed UT and CP data, supporting a 24-month life-extension submission to ANP.",
  },
  'corpus-christi': {
    uniqueLocalROI: "Corpus Christi LNG and refining operators running NDT digital twins on Cheniere, Citgo and Flint Hills assets typically reduce post-hurricane re-inspection prep from 3 weeks to 1 day and defer USD 7-15M per major unit of conservative-replacement capex.",
    localIndustryUseCases: [
      "Cheniere Corpus Christi LNG cryogenic-storage digital twins with 9% Ni weld records.",
      "Citgo and Flint Hills refinery atmospheric/vacuum column digital twins.",
      "Port of Corpus Christi crude-export jetty and loading-arm digital twins.",
    ],
    localCompliance: ["OSHA PSM", "EPA RMP", "TCEQ", "USCG/PHMSA (LNG)", "API 579"],
    localCaseStudy: "A Corpus Christi-area NDT contractor used the Atlantis NDT Digital Twin to consolidate 8 years of refinery inspection data, supporting an API 579 Part 4 assessment that deferred two column replacements by 20 months.",
  },
  'dallas': {
    uniqueLocalROI: "Dallas-headquartered midstream and corporate-energy operators using NDT digital twins typically reduce cross-asset integrity-evidence prep by 45% and defer USD 6-14M per year of conservative pipeline-segment replacement capex using rigorous API 1160 + API 579 evidence.",
    localIndustryUseCases: [
      "Energy Transfer Permian-to-Gulf midstream pipeline digital twins.",
      "Atmos Energy gas-distribution pipeline integrity digital twins.",
      "DFW aerospace MRO composite and metallic component inspection records.",
    ],
    localCompliance: ["PHMSA (49 CFR 192/195)", "API 1160", "OSHA PSM", "TCEQ", "ASNT SNT-TC-1A"],
    localCaseStudy: "A Dallas-headquartered Permian-to-Gulf midstream operator used the Atlantis NDT Digital Twin across 1,400 miles of pipeline to defer two segment replacements by 22 months — ~USD 9M of capex avoided.",
  },
  'dammam': {
    uniqueLocalROI: "Saudi Aramco-affiliated integrity teams running NDT digital twins on Eastern Province assets typically reduce SAEP-1119 evidence-pack prep by 70% and defer SAR 80-220M per major unit of conservative-replacement capex using rigorous API 579 FFS evidence.",
    localIndustryUseCases: [
      "Abqaiq central processing facility digital twins with sour-service damage-mechanism profiles.",
      "Khurais gas-processing train digital twins with NACE MR0175 SSC/HIC monitoring.",
      "East-West Pipeline digital twins aggregating ILI vendor data with dig records.",
    ],
    localCompliance: ["Saudi Aramco SAEP-1112 / AI-SAEP-1119", "NACE MR0175", "API 579", "SACS-002 cybersecurity"],
    localCaseStudy: "A Dammam-headquartered Aramco-aligned contractor used the Atlantis NDT Digital Twin on Khurais GOSP trains to reduce RBI-recalibration cycles from 21 days to 6 — ~SAR 4M/yr of recovered admin.",
  },
  'delhi': {
    uniqueLocalROI: "Delhi-coordinated NDT firms running digital twins on IOCL Mathura, NTPC, BHEL and NCR industrial assets typically reduce cross-regulator (PESO/OISD/IBR/AERB) evidence-pack prep by 50% and defer INR 20-50 crore per year of conservative-replacement capex.",
    localIndustryUseCases: [
      "IOCL Mathura refinery hot-reactor digital twins with HTHA screening.",
      "NTPC coal/gas-power-plant boiler digital twins with IBR-Form-VI evidence.",
      "BHEL Hardwar boiler-and-pressure-vessel fabrication digital twins.",
    ],
    localCompliance: ["PESO", "OISD-141", "IBR 1950", "AERB", "API 579", "BIS IS 2825"],
    localCaseStudy: "A Delhi-headquartered NDT firm used the Atlantis NDT Digital Twin on the IOCL Mathura hydrocracker to defer reactor-shell replacement by 18 months — ~INR 35 crore of capex avoided.",
  },
  'fort-worth': {
    uniqueLocalROI: "Fort Worth aerospace and Barnett-Shale operators running NDT digital twins on Lockheed F-35, Bell rotorcraft and XTO Energy assets typically reduce NAS 410 and API 570 evidence prep by 50% and defer USD 4-10M per year of conservative-replacement capex.",
    localIndustryUseCases: [
      "Lockheed F-35 airframe component digital twins under NAS 410.",
      "Bell V-22 and V-280 rotorcraft component digital twins.",
      "XTO Barnett-Shale gathering-system digital twins with PHMSA evidence.",
    ],
    localCompliance: ["NAS 410", "AS9100", "PHMSA", "API 570", "OSHA PSM", "ASNT SNT-TC-1A"],
    localCaseStudy: "A Fort Worth aerospace supplier used the Atlantis NDT Digital Twin to consolidate 9 years of NAS 410 inspection records, supporting a Lockheed Martin Tier-1 supplier qualification audit with zero findings.",
  },
  'india': {
    uniqueLocalROI: "Indian refining and offshore operators running NDT digital twins typically reduce PESO/OISD/IBR statutory evidence prep by 55% and defer INR 60-180 crore per major asset of conservative-replacement capex using rigorous API 579 FFS evidence.",
    localIndustryUseCases: [
      "Reliance Jamnagar and IOCL refinery hot-reactor digital twins with HTHA screening.",
      "ONGC Bombay High offshore platform digital twins with ROV-fed inspection data.",
      "GAIL cross-country gas-pipeline digital twins aggregating ILI vendor data.",
    ],
    localCompliance: ["PESO", "OISD-141 / OISD-129", "IBR 1950", "AERB", "API 579", "BIS IS 2825"],
    localCaseStudy: "An Indian refining operator deployed the Atlantis NDT Digital Twin across six hot reactors and deferred shell replacement by 16 months — ~INR 110 crore of capex avoided.",
  },
  'indonesia': {
    uniqueLocalROI: "Pertamina and SKK Migas-regulated operators running NDT digital twins on Cilacap, Balikpapan and LNG assets typically reduce integrity-evidence prep by 50% and defer IDR 250-650 miliar per major unit of conservative-replacement capex.",
    localIndustryUseCases: [
      "Pertamina Cilacap and Balikpapan refinery hot-reactor digital twins.",
      "Tangguh and Bontang LNG cryogenic-storage digital twins with 9% Ni weld records.",
      "Cilegon petrochemical cracker digital twins.",
    ],
    localCompliance: ["SKK Migas", "ESDM", "Indonesian SNI", "API 579", "NACE MR0175"],
    localCaseStudy: "A Pertamina contractor used the Atlantis NDT Digital Twin on Cilacap refinery hot reactors to defer shell replacement by 14 months — ~IDR 480 miliar of capex avoided.",
  },
  'jakarta': {
    uniqueLocalROI: "Jakarta-coordinated Pertamina, PT PLN and offshore operators running NDT digital twins typically reduce SKK Migas integrity-evidence prep by 55% and defer IDR 200-500 miliar per major asset of conservative-replacement capex.",
    localIndustryUseCases: [
      "Pertamina Balongan and Cilacap refinery digital twins (coordinated from Jakarta).",
      "ExxonMobil Cepu Banyu Urip FPSO topside digital twins.",
      "Cilegon petrochemical estate (Chandra Asri, Lotte Titan) digital twins.",
    ],
    localCompliance: ["SKK Migas", "ESDM", "Indonesian SNI", "API 579"],
    localCaseStudy: "A Jakarta-headquartered NDT firm used the Atlantis NDT Digital Twin to coordinate inspection planning across three Pertamina refineries simultaneously, reducing cross-site scheduling overhead by 60%.",
  },
  'jamnagar': {
    uniqueLocalROI: "Jamnagar-based Reliance and Nayara integrity teams running NDT digital twins typically reduce AIM-Tech evidence prep by 70% and defer INR 80-200 crore per major unit of conservative-replacement capex using rigorous API 579 FFS evidence.",
    localIndustryUseCases: [
      "Reliance Jamnagar FCC and hydrocracker digital twins with HTHA screening (API 579 Part 6).",
      "Reliance paraxylene and aromatics column digital twins.",
      "Nayara Vadinar refinery hot-reactor digital twins.",
    ],
    localCompliance: ["Reliance AIM-Tech", "PESO", "OISD-141", "API 579", "IBR 1950"],
    localCaseStudy: "A Jamnagar-based Reliance contractor used the Atlantis NDT Digital Twin on FCC unit reactors to defer shell replacement by 20 months — ~INR 140 crore of capex avoided.",
  },
  'kochi': {
    uniqueLocalROI: "Kochi-based BPCL and Cochin Shipyard contractors running NDT digital twins typically reduce coastal-CUI and monsoon-driven external-corrosion prep by 60% and defer INR 25-60 crore per year of conservative-replacement capex.",
    localIndustryUseCases: [
      "BPCL Kochi IREP-expanded refinery digital twins with HTHA screening.",
      "Cochin Shipyard submarine and carrier-block structural digital twins.",
      "Petronet LNG Puthuvypeen cryogenic-storage digital twins.",
    ],
    localCompliance: ["PESO", "OISD-141", "IBR 1950", "API 579", "Indian Navy standards"],
    localCaseStudy: "A Kochi-based BPCL contractor used the Atlantis NDT Digital Twin to track monsoon-driven external CUI across 320 insulated piping circuits, eliminating two consecutive years of post-monsoon re-coat scope creep.",
  },
  'kolkata': {
    uniqueLocalROI: "Eastern Region (Kolkata) IOCL and Tata Steel contractors running NDT digital twins typically reduce OISD/IBR statutory evidence prep by 50% and defer INR 18-45 crore per year of conservative-replacement capex.",
    localIndustryUseCases: [
      "IOCL Haldia refinery hot-reactor digital twins.",
      "Tata Steel Jamshedpur blast-furnace digital twins.",
      "Haldia Petrochemicals cracker-furnace digital twins.",
    ],
    localCompliance: ["PESO", "OISD-141", "IBR 1950", "BIS IS 2825", "API 579"],
    localCaseStudy: "A Kolkata-headquartered NDT firm used the Atlantis NDT Digital Twin on IOCL Haldia atmospheric distillation columns to defer two-column replacement by 15 months — ~INR 28 crore of capex avoided.",
  },
  'lake-charles': {
    uniqueLocalROI: "Lake Charles LNG and petrochemical operators running NDT digital twins on Cheniere, Sasol and LyondellBasell assets typically reduce post-hurricane re-inspection prep from 3 weeks to 1 day and defer USD 9-22M per major unit of conservative-replacement capex.",
    localIndustryUseCases: [
      "Cheniere Sabine Pass LNG cryogenic-storage digital twins with 9% Ni weld records.",
      "Sasol Lake Charles ethane-cracker furnace digital twins.",
      "Phillips 66 and Citgo Lake Charles refinery hot-reactor digital twins.",
    ],
    localCompliance: ["OSHA PSM", "EPA RMP", "Louisiana DEQ", "USCG/PHMSA (LNG)", "API 579"],
    localCaseStudy: "A Lake Charles area NDT contractor used the Atlantis NDT Digital Twin to generate a 740-asset post-Hurricane Laura re-inspection plan in 90 minutes — typically a 3-week manual exercise.",
  },
  'los-angeles': {
    uniqueLocalROI: "Southern California refining and SoCalGas operators running NDT digital twins typically reduce CARB/CalGEM/SCAQMD integrity-evidence prep by 55% and defer USD 8-19M per major unit of conservative-replacement capex using rigorous API 579 + CalGEM evidence.",
    localIndustryUseCases: [
      "Marathon Carson, Chevron El Segundo and Phillips 66 Wilmington refinery digital twins.",
      "SoCalGas Aliso Canyon underground-storage well-integrity digital twins.",
      "LA Harbor crude-import and product-export jetty digital twins.",
    ],
    localCompliance: ["OSHA PSM", "CARB", "CalGEM", "SCAQMD Rule 1180", "AB 1647", "API 579"],
    localCaseStudy: "An LA-area refining contractor used the Atlantis NDT Digital Twin across Chevron Richmond and El Segundo to defer two FCC regenerator replacements by 19 months — ~USD 12M of capex avoided.",
  },
  'malaysia': {
    uniqueLocalROI: "Petronas and Malaysian operators running NDT digital twins on RAPID, MLNG and offshore assets typically reduce DOSH-PMA and PTS evidence prep by 60% and defer MYR 60-160M per major unit of conservative-replacement capex.",
    localIndustryUseCases: [
      "Petronas RAPID Pengerang refinery digital twins with HTHA screening.",
      "MLNG Bintulu 9-train cryogenic-storage digital twins with 9% Ni weld records.",
      "Sabah/Sarawak offshore platform digital twins with ROV-fed inspection data.",
    ],
    localCompliance: ["DOSH PMA", "PETRONAS PTS", "API 579", "Malaysian Standards", "NACE MR0175"],
    localCaseStudy: "A Petronas contractor used the Atlantis NDT Digital Twin on RAPID hydrocracker reactors to defer shell replacement by 18 months — ~MYR 95M of capex avoided.",
  },
  'manila': {
    uniqueLocalROI: "Philippine operators running NDT digital twins on Petron, Pilipinas Shell and Malampaya assets typically reduce DOE integrity-evidence prep by 50% and defer PHP 350-900M per major unit of conservative-replacement capex.",
    localIndustryUseCases: [
      "Petron Bataan refinery FCC and hydrocracker digital twins.",
      "Malampaya offshore gas-processing platform digital twins.",
      "FGEN Batangas LNG terminal digital twins with cryogenic damage-mechanism profiles.",
    ],
    localCompliance: ["Philippine DOE", "ERC", "Bureau of Working Conditions", "API 579", "USCG (LNG supply)"],
    localCaseStudy: "A Manila-headquartered NDT firm used the Atlantis NDT Digital Twin on Petron Bataan to generate a typhoon-event re-inspection plan after Super Typhoon Odette in 90 minutes.",
  },
  'mexico-city': {
    uniqueLocalROI: "Pemex and Mexican operators running NDT digital twins on Cadereyta, Tula, Olmeca and CFE assets typically reduce ASEA integrity-evidence prep by 55% and defer MXN 200-550M per major unit of conservative-replacement capex.",
    localIndustryUseCases: [
      "Olmeca (Dos Bocas) refinery commissioning-baseline digital twins.",
      "Pemex Cadereyta and Tula refinery hot-reactor digital twins.",
      "CFE Laguna Verde nuclear ASME Section XI in-service inspection digital twins.",
    ],
    localCompliance: ["ASEA", "CRE", "CNH", "API 579", "NRC-equivalent (CNSNS)"],
    localCaseStudy: "A Pemex contractor used the Atlantis NDT Digital Twin on the new Olmeca refinery commissioning to establish thickness baselines across 88 pressure vessels — eliminating evidence gaps for the first ASEA review.",
  },
  'new-york': {
    uniqueLocalROI: "NYC-area corporate-energy and Northeast operators using NDT digital twins typically reduce cross-regulator evidence prep by 50% and defer USD 5-12M per year of conservative-replacement capex using rigorous API 579 + NRC-aligned FFS evidence.",
    localIndustryUseCases: [
      "Phillips 66 Bayway (Linden NJ) refinery digital twins (regional coordination).",
      "Indian Point decommissioning ASME Section XI in-service inspection records.",
      "NY Harbor petroleum-product jetty and tank-farm digital twins.",
    ],
    localCompliance: ["NRC (10 CFR 50)", "ASME Section XI", "PHMSA", "OSHA PSM", "API 579"],
    localCaseStudy: "A New York-headquartered MLP midstream operator used the Atlantis NDT Digital Twin to consolidate evidence across 9 pipeline systems, reducing investor-state lender due-diligence prep from 12 weeks to 3.",
  },
  'norway': {
    uniqueLocalROI: "Norwegian NCS operators running NDT digital twins on Equinor, Aker BP and Vår Energi assets typically reduce NORSOK Z-008 inspection-planning cycles by 60% and defer NOK 180-420M per major asset of conservative-replacement capex through rigorous API 579 + NORSOK-aligned FFS evidence.",
    localIndustryUseCases: [
      "Equinor Johan Sverdrup, Troll and Oseberg platform digital twins.",
      "Hammerfest LNG (Snøhvit) cryogenic-storage digital twins.",
      "Subsea manifold and template digital twins for Aker BP and Vår Energi.",
    ],
    localCompliance: ["PSA Norway", "NORSOK N-001 / Z-008", "Equinor STID", "API 579", "DNV"],
    localCaseStudy: "A Norwegian NCS operator used the Atlantis NDT Digital Twin to recalibrate inspection intervals on 640 pressure systems, reducing next-cycle scope by 28%.",
  },
  'oklahoma-city': {
    uniqueLocalROI: "Mid-continent OKC-headquartered operators running NDT digital twins on Cushing storage and SCOOP/STACK assets typically reduce PHMSA and OSHA PSM evidence prep by 50% and defer USD 5-13M per year of conservative-replacement capex.",
    localIndustryUseCases: [
      "Williams Cushing crude-oil-storage API 653 digital twins (largest US storage hub).",
      "Devon and Continental Resources SCOOP/STACK gathering-system digital twins.",
      "ONEOK gas-processing plant digital twins.",
    ],
    localCompliance: ["PHMSA (49 CFR 192/195)", "API 1160", "OSHA PSM", "API 653", "Oklahoma OCC"],
    localCaseStudy: "An OKC-headquartered crude-storage operator used the Atlantis NDT Digital Twin across 73 Cushing tanks to defer two floor replacements by 28 months — ~USD 7M of capex avoided.",
  },
  'oman': {
    uniqueLocalROI: "Omani PDO and OQ-regulated operators running NDT digital twins typically reduce ministry-of-energy evidence prep by 55% and defer OMR 6-14M per year of conservative-replacement capex using rigorous API 579 FFS evidence.",
    localIndustryUseCases: [
      "PDO Marmul, Mukhaizna and Yibal field gathering-system digital twins.",
      "OQ Sohar refinery vessel and column digital twins.",
      "Oman LNG Qalhat (Sur) cryogenic-storage digital twins.",
    ],
    localCompliance: ["PDO CMF", "OQ Inspection Standards", "Oman MEM", "API 579", "NACE MR0175"],
    localCaseStudy: "An Omani contractor used the Atlantis NDT Digital Twin across four OQ Sohar atmospheric columns to defer shell replacement by 17 months.",
  },
  'philadelphia': {
    uniqueLocalROI: "Northeast US petroleum-corridor operators running NDT digital twins on Trainer, Paulsboro and Marcus Hook assets typically reduce PA DEP and PHMSA evidence prep by 50% and defer USD 4-10M per major unit of conservative-replacement capex.",
    localIndustryUseCases: [
      "Monroe Energy Trainer refinery (Delta jet-fuel supply) digital twins.",
      "PBF Paulsboro refinery FCC digital twins.",
      "Marcus Hook NGL-export jetty and storage digital twins.",
    ],
    localCompliance: ["OSHA PSM", "EPA RMP", "PA DEP", "PHMSA", "API 579"],
    localCaseStudy: "A Philadelphia-area NDT contractor used the Atlantis NDT Digital Twin on Marcus Hook NGL export storage to defer two sphere replacements by 22 months.",
  },
  'pittsburgh': {
    uniqueLocalROI: "Marcellus/Utica operators and the Shell Pennsylvania Petrochemicals Complex running NDT digital twins typically reduce PHMSA and OSHA PSM evidence prep by 50% and defer USD 6-16M per major unit of conservative-replacement capex.",
    localIndustryUseCases: [
      "Shell Pennsylvania Petrochemicals ethane-cracker furnace digital twins.",
      "EQT and Range Resources Marcellus wellhead and gathering-system digital twins.",
      "US Steel Mon Valley Works blast-furnace digital twins.",
    ],
    localCompliance: ["OSHA PSM", "PHMSA", "PA DEP", "API 579", "Westinghouse AP1000 standards"],
    localCaseStudy: "A Pittsburgh-area NDT firm used the Atlantis NDT Digital Twin on the Shell PA ethane cracker commissioning to establish baseline-thickness records across 142 vessels.",
  },
  'port-arthur': {
    uniqueLocalROI: "Port Arthur Motiva, Valero and Total operators running NDT digital twins typically reduce post-hurricane re-inspection prep from 3 weeks to 1 day and defer USD 10-25M per major unit of conservative-replacement capex.",
    localIndustryUseCases: [
      "Motiva Port Arthur refinery (largest in N. America) digital twins.",
      "Sempra Port Arthur LNG cryogenic-storage digital twins (under construction).",
      "BASF-Total Sabine River petrochemical reactor digital twins.",
    ],
    localCompliance: ["OSHA PSM", "EPA RMP", "TCEQ", "USCG/PHMSA (LNG)", "API 579"],
    localCaseStudy: "A Port Arthur NDT contractor used the Atlantis NDT Digital Twin after Hurricane Laura to generate a 920-asset re-inspection plan in 2 hours.",
  },
  'qatar': {
    uniqueLocalROI: "QatarEnergy North Field operators running NDT digital twins on the world's largest LNG export cluster typically reduce NFPS evidence-pack prep by 65% and defer QAR 50-120M per major unit of conservative-replacement capex using API 579 Part 3 brittle-fracture evidence.",
    localIndustryUseCases: [
      "QatarEnergy Ras Laffan LNG cryogenic-storage digital twins (14 trains).",
      "North Field East/South cryogenic and gas-processing digital twins.",
      "Pearl GTL and Oryx GTL reactor digital twins.",
    ],
    localCompliance: ["QatarEnergy NFPS", "QCDD", "API 579", "NACE MR0175"],
    localCaseStudy: "A QatarEnergy contractor used the Atlantis NDT Digital Twin across two North Field LNG trains to defer cryogenic vessel replacement by 22 months — ~QAR 90M of capex avoided.",
  },
  'sao-paulo': {
    uniqueLocalROI: "São Paulo Petrobras downstream and Embraer aerospace operators running NDT digital twins typically reduce ANP and INMETRO evidence prep by 55% and defer BRL 35-90M per major asset of conservative-replacement capex.",
    localIndustryUseCases: [
      "Petrobras REPLAN and REVAP refinery hot-reactor digital twins with HTHA screening.",
      "Embraer aerospace airframe component digital twins under NAS 410.",
      "Cubatão petrochemical reactor digital twins.",
    ],
    localCompliance: ["ANP", "INMETRO", "NR-13 (boilers)", "NAS 410", "API 579"],
    localCaseStudy: "A São Paulo Petrobras contractor used the Atlantis NDT Digital Twin on REVAP atmospheric distillation columns to defer two-column replacement by 18 months.",
  },
  'san-antonio': {
    uniqueLocalROI: "San Antonio Eagle Ford and Valero corporate operators running NDT digital twins typically reduce PHMSA and TCEQ evidence prep by 50% and defer USD 5-12M per year of conservative-replacement capex.",
    localIndustryUseCases: [
      "EOG Eagle Ford gathering-system digital twins with PHMSA evidence.",
      "Calumet San Antonio refinery digital twins.",
      "ConocoPhillips US Onshore corporate-coordinated integrity digital twins.",
    ],
    localCompliance: ["OSHA PSM", "PHMSA", "TCEQ", "API 579", "Toyota AS9100-adjacent QA"],
    localCaseStudy: "A San Antonio Eagle Ford operator used the Atlantis NDT Digital Twin across 380 wellpads to consolidate gathering-system inspection records, reducing PHMSA integrity-management review prep by 70%.",
  },
  'san-francisco': {
    uniqueLocalROI: "SF Bay Area refining operators (renewable-diesel pivot) running NDT digital twins typically reduce CARB/BAAQMD evidence prep by 55% and defer USD 6-14M per major unit of conservative-replacement capex.",
    localIndustryUseCases: [
      "Marathon Martinez and Phillips 66 Rodeo renewable-diesel conversion digital twins.",
      "Chevron Richmond FCC and hydrocracker digital twins.",
      "Valero Benicia refinery hot-reactor digital twins.",
    ],
    localCompliance: ["OSHA PSM", "CARB", "BAAQMD Rule 12-16", "AB 1647", "API 579"],
    localCaseStudy: "A Bay Area NDT contractor used the Atlantis NDT Digital Twin on Marathon Martinez to re-baseline 218 vessels for renewable-diesel service, eliminating CARB evidence-gap risk.",
  },
  'seattle': {
    uniqueLocalROI: "PNW operators running NDT digital twins on Cherry Point, Anacortes and Ferndale refineries plus Boeing aerospace assets typically reduce PHMSA and Boeing-supplier evidence prep by 50% and defer USD 5-13M per year of conservative-replacement capex.",
    localIndustryUseCases: [
      "BP Cherry Point refinery FCC and hydrocracker digital twins.",
      "Boeing 737/787 composite and metallic airframe component digital twins under NAS 410.",
      "Trans Mountain Westridge marine terminal jetty digital twins.",
    ],
    localCompliance: ["OSHA PSM", "PHMSA", "Washington DOE", "NAS 410", "API 579"],
    localCaseStudy: "A Seattle-area aerospace supplier used the Atlantis NDT Digital Twin to consolidate 10 years of Boeing supplier NDT records, reducing Tier-1 audit prep from 6 weeks to 1.",
  },
  'shanghai': {
    uniqueLocalROI: "Shanghai Sinopec and Baowu Steel operators running NDT digital twins typically reduce SAMR (GB 150 / TSG 21) evidence prep by 55% and defer CNY 80-200M per major unit of conservative-replacement capex.",
    localIndustryUseCases: [
      "Sinopec Shanghai Petrochemical Company (SPC) cracker and refinery digital twins.",
      "Baowu Steel Baoshan blast-furnace digital twins.",
      "COSCO Shipping Heavy Industry FPSO and platform structural digital twins.",
    ],
    localCompliance: ["GB 150 / TSG 21", "SAMR", "China Boiler & Pressure Vessel Code", "API 579"],
    localCaseStudy: "A Shanghai Sinopec contractor used the Atlantis NDT Digital Twin on SPC cracker furnaces to defer tube-bundle replacement by 16 months.",
  },
  'south-korea': {
    uniqueLocalROI: "Korean refiners and Hyundai Heavy Industries running NDT digital twins on Ulsan, Yeosu, Onsan and Daesan assets typically reduce KOSHA evidence prep by 55% and defer KRW 60-160 billion per major unit of conservative-replacement capex.",
    localIndustryUseCases: [
      "SK Energy Ulsan FCC, hydrocracker and coker digital twins.",
      "GS Caltex Yeosu petrochemical reactor digital twins.",
      "Hyundai Heavy Industries FPSO and LNG carrier structural digital twins.",
    ],
    localCompliance: ["KOSHA Safety Health Act", "KGS Code", "API 579", "DNV/Lloyd's class society"],
    localCaseStudy: "An SK Energy Ulsan contractor used the Atlantis NDT Digital Twin on hydrocracker hot reactors to defer shell replacement by 19 months — ~KRW 100B of capex avoided.",
  },
  'stavanger': {
    uniqueLocalROI: "Stavanger-coordinated NCS operators running NDT digital twins typically reduce PSA Norway life-extension submission prep by 65% and defer NOK 200-450M per major asset of conservative-replacement capex.",
    localIndustryUseCases: [
      "Equinor Ekofisk, Sleipner and Statfjord life-extension digital twins.",
      "ConocoPhillips Norway subsea manifold digital twins.",
      "PSA-overseen NORSOK Z-008 inspection-planning digital twins.",
    ],
    localCompliance: ["PSA Norway", "NORSOK N-001 / Z-008", "Equinor STID", "API 579", "DNV"],
    localCaseStudy: "A Stavanger NCS operator used the Atlantis NDT Digital Twin on the Ekofisk life-extension case to secure PSA acceptance for a 5-year extension across the platform complex.",
  },
  'taipei': {
    uniqueLocalROI: "Taiwan CPC, Formosa Plastics and Taipower operators running NDT digital twins typically reduce CNS and OSHA Taiwan evidence prep by 50% and defer TWD 200-500M per major unit of conservative-replacement capex.",
    localIndustryUseCases: [
      "CPC Kaohsiung and Talin refinery hot-reactor digital twins.",
      "Formosa Plastics Mailiao cracker furnace digital twins.",
      "Taipower Maanshan and Kuosheng nuclear ASME Section XI digital twins.",
    ],
    localCompliance: ["CNS", "OSHA Taiwan", "NRC-equivalent (NRA Taiwan)", "API 579", "ASME Section XI"],
    localCaseStudy: "A Taiwan CPC contractor used the Atlantis NDT Digital Twin on Kaohsiung refinery atmospheric columns to defer shell replacement by 14 months.",
  },
  'thailand': {
    uniqueLocalROI: "Thai PTT and Thai Oil operators running NDT digital twins on Map Ta Phut, Sriracha and Rayong assets typically reduce DIW and IEAT evidence prep by 55% and defer THB 250-650M per major unit of conservative-replacement capex.",
    localIndustryUseCases: [
      "PTT Map Ta Phut ethylene-cracker furnace digital twins.",
      "Thai Oil Sriracha refinery hot-reactor digital twins.",
      "Gulf of Thailand offshore platform digital twins.",
    ],
    localCompliance: ["DIW", "IEAT", "TIS (Thai Industrial Standards)", "API 579", "NACE MR0175"],
    localCaseStudy: "A PTT Map Ta Phut contractor used the Atlantis NDT Digital Twin on cracker furnace tubes to defer tube-bundle replacement by 15 months — ~THB 380M of capex avoided.",
  },
  'trinidad': {
    uniqueLocalROI: "Trinidad Atlantic LNG and Point Lisas operators running NDT digital twins typically reduce Ministry of Energy evidence prep by 55% and defer TTD 30-80M per major unit of conservative-replacement capex using rigorous API 579 + cryogenic-aware FFS evidence.",
    localIndustryUseCases: [
      "Atlantic LNG Point Fortin cryogenic-storage digital twins (4 trains).",
      "Point Lisas methanol and ammonia synthesis reactor digital twins.",
      "bpTT and Shell offshore platform topside digital twins.",
    ],
    localCompliance: ["Trinidad MoEEI", "OSHA Trinidad", "API 579", "NACE MR0175"],
    localCaseStudy: "An Atlantic LNG contractor used the Atlantis NDT Digital Twin on Train 1 cryogenic vessels to support API 579 Part 3 brittle-fracture life-extension submission.",
  },
  'uk': {
    uniqueLocalROI: "UK multi-sector operators running NDT digital twins typically reduce HSE/PSSR 2000/PED 2014/68/EU and offshore-wind evidence prep by 55% and defer GBP 8-22M per major unit of conservative-replacement capex.",
    localIndustryUseCases: [
      "UKCS FPSO and platform digital twins with HSE life-extension submission support.",
      "UK refinery (Stanlow, Lindsey, Pembroke, Fawley) digital twins.",
      "Dogger Bank and Hornsea offshore wind monopile/jacket digital twins.",
    ],
    localCompliance: ["HSE UK", "PSSR 2000", "OPRED", "PED 2014/68/EU", "API 579", "DNV/Lloyd's class society"],
    localCaseStudy: "A UK-headquartered NDT consultancy used the Atlantis NDT Digital Twin to consolidate UKCS evidence across 6 platforms, supporting HSE life-extension acceptance for a 4-year programme extension.",
  },
  'usa': {
    uniqueLocalROI: "US operators across refining, LNG, pipelines and nuclear running NDT digital twins typically reduce PHMSA/OSHA PSM/NRC evidence prep by 50% and defer USD 7-22M per major unit of conservative-replacement capex using rigorous API 579 FFS evidence.",
    localIndustryUseCases: [
      "Refinery (ExxonMobil, Chevron, Marathon, Phillips 66, Valero) digital twins.",
      "LNG export terminal (Cheniere, Sempra, Venture Global) cryogenic digital twins.",
      "PHMSA-regulated pipeline integrity-management digital twins (2.6M miles).",
    ],
    localCompliance: ["OSHA PSM", "EPA RMP", "PHMSA", "NRC", "API 579", "API 510/570/653"],
    localCaseStudy: "A US-headquartered super-major used the Atlantis NDT Digital Twin to consolidate inspection evidence across 12 refineries, reducing turnaround-planning cycle time by 30%.",
  },
  'vizag': {
    uniqueLocalROI: "Vizag-based HPCL Visakh and Eastern Naval Command contractors running NDT digital twins typically reduce coastal-CUI prep by 60% and defer INR 22-55 crore per year of conservative-replacement capex.",
    localIndustryUseCases: [
      "HPCL Visakh refinery FCC and hydrocracker digital twins (under 15 MMTPA expansion).",
      "Eastern Naval Command shipyard structural digital twins.",
      "Visakhapatnam Steel Plant blast-furnace digital twins.",
    ],
    localCompliance: ["PESO", "OISD-141", "IBR 1950", "Indian Navy standards", "API 579"],
    localCaseStudy: "A Vizag NDT contractor on HPCL Visakh used the Atlantis NDT Digital Twin to consolidate 14 years of refinery inspection data, supporting an API 579 Part 4 assessment that deferred FCC reactor replacement by 17 months.",
  },
  'japan': {
    uniqueLocalROI: "Japanese ENEOS, Idemitsu and TEPCO operators running NDT digital twins typically reduce NRA/METI High Pressure Gas Safety Act evidence prep by 60% and defer JPY 8-22 billion per major unit of conservative-replacement capex.",
    localIndustryUseCases: [
      "ENEOS Negishi, Mizushima and Kawasaki refinery digital twins.",
      "TEPCO Kashiwazaki-Kariwa nuclear ASME Section XI digital twins.",
      "Fukushima decommissioning structural inspection digital twins.",
    ],
    localCompliance: ["NRA", "METI High Pressure Gas Safety Act", "JIS B 8265 / 8270", "API 579", "ASME Section XI"],
    localCaseStudy: "A Japanese ENEOS contractor used the Atlantis NDT Digital Twin on Mizushima refinery hot reactors to defer shell replacement by 18 months — ~JPY 12B of capex avoided.",
  },
  'italy': {
    uniqueLocalROI: "Italian Eni, Saras and Versalis operators running NDT digital twins typically reduce INAIL and PED 2014/68/EU evidence prep by 55% and defer EUR 6-16M per major unit of conservative-replacement capex.",
    localIndustryUseCases: [
      "Eni Sannazzaro and Taranto refinery digital twins.",
      "Saras Sarroch refinery FCC and hydrocracker digital twins.",
      "Versalis Brindisi and Mantova cracker-furnace digital twins.",
    ],
    localCompliance: ["INAIL", "PED 2014/68/EU", "Decree 81/2008", "API 579", "NACE MR0175"],
    localCaseStudy: "A Saras Sarroch contractor used the Atlantis NDT Digital Twin on hydrocracker hot reactors to defer shell replacement by 16 months.",
  },
  'spain': {
    uniqueLocalROI: "Spanish Repsol, Cepsa and Iberdrola operators running NDT digital twins typically reduce CNS/CSN and PED 2014/68/EU evidence prep by 55% and defer EUR 7-18M per major unit of conservative-replacement capex.",
    localIndustryUseCases: [
      "Repsol Cartagena and Petronor refinery digital twins.",
      "Cepsa San Roque and Huelva refinery hot-reactor digital twins.",
      "Iberdrola Cofrentes nuclear ASME Section XI digital twins.",
    ],
    localCompliance: ["CSN", "PED 2014/68/EU", "Royal Decree 2060/2008", "API 579", "ASME Section XI"],
    localCaseStudy: "A Repsol Cartagena contractor used the Atlantis NDT Digital Twin on the refinery's renewable-diesel and SAF conversion to re-baseline 124 vessels for new feedstock service.",
  },
  'germany': {
    uniqueLocalROI: "German BASF, Shell Rheinland and Bayer operators running NDT digital twins typically reduce TÜV BetrSichV and PED 2014/68/EU evidence prep by 60% and defer EUR 10-24M per major unit of conservative-replacement capex.",
    localIndustryUseCases: [
      "BASF Ludwigshafen cracker and reactor digital twins (10 km² complex).",
      "Shell Rheinland refinery (largest German refinery) digital twins.",
      "Offshore wind monopile and jacket foundation digital twins (RWE, Ørsted, EnBW).",
    ],
    localCompliance: ["TÜV BetrSichV", "PED 2014/68/EU", "AD 2000-Regelwerk", "API 579", "DNV"],
    localCaseStudy: "A BASF Ludwigshafen contractor used the Atlantis NDT Digital Twin on the steam cracker complex to defer a major reactor replacement by 21 months — ~EUR 16M of capex avoided.",
  },
  'france': {
    uniqueLocalROI: "French TotalEnergies and EDF operators running NDT digital twins typically reduce ASN and PED 2014/68/EU evidence prep by 60% and defer EUR 9-22M per major unit of conservative-replacement capex.",
    localIndustryUseCases: [
      "TotalEnergies Donges and Gonfreville refinery digital twins.",
      "EDF nuclear-fleet ASME-equivalent (RSE-M) primary-loop digital twins (56 reactors).",
      "Flamanville EPR commissioning-baseline digital twins.",
    ],
    localCompliance: ["ASN", "PED 2014/68/EU", "RCC-M / RSE-M (nuclear)", "API 579", "AFNOR codes"],
    localCaseStudy: "An EDF nuclear-supply-chain contractor used the Atlantis NDT Digital Twin to consolidate ASME-equivalent inspection records across 8 reactor primary loops, reducing ASN review prep by 65%.",
  },
  'netherlands': {
    uniqueLocalROI: "Dutch refining and petrochemical operators at Rotterdam/Europoort running NDT digital twins typically reduce Seveso III and PED 2014/68/EU evidence prep by 60% and defer EUR 8-22M per major unit of conservative-replacement capex.",
    localIndustryUseCases: [
      "Shell Pernis refinery (largest in Europe) digital twins.",
      "BP Rotterdam and ExxonMobil Botlek cracker digital twins.",
      "Porthos and Aramis CCS injection pipeline digital twins.",
    ],
    localCompliance: ["ILT / SodM / ANVS", "Seveso III", "PED 2014/68/EU", "API 579", "DNV"],
    localCaseStudy: "A Shell Pernis contractor used the Atlantis NDT Digital Twin to defer three FCC regenerator replacements by 22 months — ~EUR 14M of capex avoided.",
  },
  'egypt': {
    uniqueLocalROI: "Egyptian Eni, EGPC and BP operators running NDT digital twins on Zohr, Idku LNG and refinery assets typically reduce EGPC/EGAS evidence prep by 55% and defer EGP 350-900M per major unit of conservative-replacement capex.",
    localIndustryUseCases: [
      "Eni Zohr offshore gas-processing platform digital twins.",
      "Idku and SEGAS LNG cryogenic-storage digital twins with 9% Ni weld records.",
      "EGPC Mostorod and Suez refinery digital twins.",
    ],
    localCompliance: ["EGPC", "EGAS", "Egyptian EEAA", "API 579", "NACE MR0175"],
    localCaseStudy: "An Eni Zohr contractor used the Atlantis NDT Digital Twin on the gas-processing platform to defer separator-vessel replacement by 14 months.",
  },
  'nigeria': {
    uniqueLocalROI: "Nigerian operators running NDT digital twins on Dangote, NNPCL and IOC deepwater assets typically reduce NMDPRA and NCDMB evidence prep by 60% and defer USD 6-14M per major unit of conservative-replacement capex using rigorous API 579 FFS evidence.",
    localIndustryUseCases: [
      "Dangote Refinery atmospheric/vacuum/hydrocracker commissioning-baseline digital twins.",
      "NNPCL Port Harcourt, Warri and Kaduna refinery digital twins.",
      "Bonga, Egina and Akpo deepwater FPSO topside digital twins.",
    ],
    localCompliance: ["NMDPRA (ex-DPR)", "NCDMB", "NAPIMS", "API 579", "USCG (LNG supply)"],
    localCaseStudy: "A Dangote Refinery contractor used the Atlantis NDT Digital Twin from commissioning onward to establish baseline thickness across 42 pressure vessels, enabling rigorous year-on-year corrosion-rate tracking.",
  },
  // ── DT Tier B expansion ─────────────────────────────────────────────
  'ahmedabad': {
    uniqueLocalROI: "Ahmedabad-coordinated IOCL, ONGC and Adani operators running NDT digital twins on Gujarat industrial assets typically defer INR 18-40 crore per year of conservative-replacement capex using rigorous API 579 + OISD-aligned evidence.",
    localIndustryUseCases: [
      "IOCL Koyali Vadodara refinery hot-reactor digital twins.",
      "ONGC Hazira gas-processing complex digital twins.",
      "Adani Mundra Port petrochemical reactor digital twins.",
    ],
    localCompliance: ["PESO", "OISD-141", "IBR 1950", "GPCB", "API 579"],
    localCaseStudy: "An Ahmedabad-headquartered NDT firm used the Atlantis NDT Digital Twin on IOCL Koyali to defer hydrocracker reactor replacement by 13 months.",
  },
  'algeria': {
    uniqueLocalROI: "Algerian Sonatrach operators running NDT digital twins on Hassi R'Mel, Hassi Messaoud and LNG assets typically defer DZD 1.8-4.5 billion per major unit of conservative-replacement capex.",
    localIndustryUseCases: [
      "Sonatrach Hassi R'Mel gas-processing train digital twins.",
      "Skikda and Arzew LNG cryogenic-storage digital twins.",
      "Hassi Messaoud onshore production separator digital twins.",
    ],
    localCompliance: ["ALNAFT", "Algerian Ministry of Energy", "API 579", "NACE MR0175"],
    localCaseStudy: "A Sonatrach contractor at Hassi R'Mel used the Atlantis NDT Digital Twin on sour-service gas-processing trains to defer separator replacement by 16 months.",
  },
  'angola': {
    uniqueLocalROI: "Angolan deepwater operators (TotalEnergies, ExxonMobil, BP) running NDT digital twins on FPSOs and LNG assets typically defer USD 5-12M per major asset of conservative-replacement capex through life-extension evidence.",
    localIndustryUseCases: [
      "TotalEnergies Girassol, Dalia and Pazflor FPSO digital twins.",
      "Angola LNG Soyo cryogenic-storage digital twins.",
      "Deepwater subsea manifold and riser digital twins.",
    ],
    localCompliance: ["ANPG", "Angolan Ministry of Petroleum", "API 579", "DNV/Lloyd's class society"],
    localCaseStudy: "A TotalEnergies contractor used the Atlantis NDT Digital Twin on FPSO Dalia to extend hull-plating life-extension certification by 5 years.",
  },
  'argentina': {
    uniqueLocalROI: "Argentine YPF and Vaca Muerta operators running NDT digital twins typically defer ARS 8-22 billion per major asset of conservative-replacement capex using rigorous API 579 + shale-specific evidence.",
    localIndustryUseCases: [
      "Vaca Muerta shale gathering-system digital twins with corrosion-trending.",
      "YPF La Plata refinery digital twins.",
      "Bahía Blanca future-LNG export infrastructure baseline-capture.",
    ],
    localCompliance: ["Argentine Secretaría de Energía", "ENARGAS", "Neuquén Provincial Regulator", "API 579"],
    localCaseStudy: "A YPF contractor on Vaca Muerta used the Atlantis NDT Digital Twin across 1,200 wells to consolidate gathering-system inspection data, reducing midstream operator audit prep by 65%.",
  },
  'australia': {
    uniqueLocalROI: "Australian LNG and offshore operators running NDT digital twins on Woodside, Chevron and Inpex assets typically reduce NOPSEMA evidence prep by 55% and defer AUD 25-65M per major unit of conservative-replacement capex.",
    localIndustryUseCases: [
      "Woodside NWS, Pluto and Scarborough LNG cryogenic-storage digital twins.",
      "Chevron Gorgon and Wheatstone LNG-train digital twins.",
      "Inpex Ichthys onshore LNG and offshore FPSO digital twins.",
    ],
    localCompliance: ["NOPSEMA", "WorkSafe states", "AS 3788 / AS 1210", "API 579", "DNV"],
    localCaseStudy: "A Woodside contractor used the Atlantis NDT Digital Twin on the Pluto LNG train to defer cryogenic vessel replacement by 24 months — ~AUD 42M of capex avoided.",
  },
  'bangalore': {
    uniqueLocalROI: "Bangalore aerospace and defence contractors running NDT digital twins on HAL, BEL, ISRO and Boeing-Tata supply-chain assets typically defer INR 12-30 crore per year of conservative-replacement capex through life-extension evidence on aerospace components.",
    localIndustryUseCases: [
      "HAL Tejas and LCH airframe component digital twins under NAS 410.",
      "ISRO PSLV/GSLV propulsion-tank digital twins.",
      "Boeing-Tata fuselage panel digital twins (coordinated from Bangalore).",
    ],
    localCompliance: ["DGCA", "AERB", "DRDO supplier-qualification", "NAS 410", "AS9100"],
    localCaseStudy: "An HAL contractor used the Atlantis NDT Digital Twin to consolidate 12 years of NAS 410 inspection records across Tejas fuselage components, supporting Tier-1 supplier audit acceptance.",
  },
  'bangkok': {
    uniqueLocalROI: "Bangkok-coordinated PTT, Thai Oil and Bangchak operators running NDT digital twins typically defer THB 180-500M per major asset of conservative-replacement capex.",
    localIndustryUseCases: [
      "Bangchak Bangkok refinery digital twins.",
      "PTT corporate refinery integrity programmes (Map Ta Phut/Rayong) digital twins.",
      "EGAT gas-fired power-plant boiler digital twins.",
    ],
    localCompliance: ["DIW", "TIS", "API 579", "Thai EPA"],
    localCaseStudy: "A Bangchak contractor used the Atlantis NDT Digital Twin on the Bangkok refinery FCC unit to defer reactor replacement by 14 months.",
  },
  'beijing': {
    uniqueLocalROI: "Beijing-coordinated Sinopec, CNPC and CNOOC operators running NDT digital twins typically reduce SAMR (GB 150 / TSG 21) evidence prep by 55% and defer CNY 60-160M per major unit of conservative-replacement capex.",
    localIndustryUseCases: [
      "Sinopec Yanshan (BPCC) refinery digital twins.",
      "CNOOC Bohai Bay offshore platform digital twins (coordinated from Beijing).",
      "CCUS pilot-project injection-and-capture digital twins.",
    ],
    localCompliance: ["GB 150 / TSG 21", "SAMR", "China Boiler & Pressure Vessel Code", "API 579"],
    localCaseStudy: "A Beijing-headquartered NDT firm used the Atlantis NDT Digital Twin to coordinate inspection across three Sinopec refineries simultaneously, reducing cross-site planning overhead by 55%.",
  },
  'belgium': {
    uniqueLocalROI: "Belgian Antwerp-cluster operators running NDT digital twins on ExxonMobil, Total, BASF and Borealis assets typically defer EUR 6-15M per major unit of conservative-replacement capex.",
    localIndustryUseCases: [
      "ExxonMobil Antwerp refinery digital twins.",
      "BASF Antwerp cracker and reactor digital twins.",
      "Doel and Tihange nuclear pressure-equipment digital twins.",
    ],
    localCompliance: ["FANC", "Belgian federal labour inspectorate", "PED 2014/68/EU", "API 579"],
    localCaseStudy: "An ExxonMobil Antwerp contractor used the Atlantis NDT Digital Twin on the refinery's hydrocracker to defer reactor replacement by 17 months.",
  },
  'bogota': {
    uniqueLocalROI: "Colombian Ecopetrol operators running NDT digital twins on Barrancabermeja, Cartagena and pipeline assets typically defer COP 25-65 billion per year of conservative pipeline-segment replacement capex.",
    localIndustryUseCases: [
      "Ecopetrol Barrancabermeja and Cartagena refinery digital twins.",
      "OCENSA and Caño Limón pipeline digital twins with ILI vendor data.",
      "Cusiana and Cupiagua gas-processing separator digital twins.",
    ],
    localCompliance: ["ANH", "Superintendencia de Servicios Públicos", "Ecopetrol AIM", "API 579"],
    localCaseStudy: "An Ecopetrol contractor used the Atlantis NDT Digital Twin on Barrancabermeja hot reactors to defer shell replacement by 15 months.",
  },
  'brisbane': {
    uniqueLocalROI: "Brisbane-coordinated Queensland LNG operators (QGC, APLNG, GLNG) running NDT digital twins on Curtis Island LNG assets typically defer AUD 18-42M per major unit of conservative-replacement capex.",
    localIndustryUseCases: [
      "QGC, APLNG and GLNG Curtis Island LNG-train digital twins.",
      "Coal-seam-gas wellhead and gathering-system digital twins.",
      "Rio Tinto Aluminium and South32 Worsley Alumina refining digital twins.",
    ],
    localCompliance: ["Queensland Petroleum & Gas Safety", "NOPSEMA", "AS 3788", "API 579"],
    localCaseStudy: "A QGC Curtis Island contractor used the Atlantis NDT Digital Twin to defer cryogenic vessel replacement by 19 months — ~AUD 28M of capex avoided.",
  },
  'buenos-aires': {
    uniqueLocalROI: "Buenos Aires-coordinated YPF and Vaca Muerta operators running NDT digital twins typically defer ARS 6-18 billion per year of conservative-replacement capex.",
    localIndustryUseCases: [
      "YPF La Plata refinery digital twins (coordinated from Buenos Aires).",
      "Vaca Muerta shale gathering-system digital twins.",
      "Bahía Blanca future-LNG export infrastructure baseline-capture.",
    ],
    localCompliance: ["Argentine Secretaría de Energía", "ENARGAS", "API 579"],
    localCaseStudy: "A Buenos Aires-headquartered NDT firm used the Atlantis NDT Digital Twin to coordinate inspection across YPF's three downstream refineries.",
  },
  'cape-town': {
    uniqueLocalROI: "Cape Town-based Astron Energy, PetroSA and TotalEnergies offshore exploration contractors running NDT digital twins typically defer ZAR 80-200M per major asset of conservative-replacement capex.",
    localIndustryUseCases: [
      "Astron Energy Cape Town refinery digital twins.",
      "TotalEnergies Brulpadda/Luiperd subsea exploration digital twins.",
      "PetroSA Mossel Bay GTL reactor digital twins.",
    ],
    localCompliance: ["South African DMRE", "PASA", "API 579", "DNV"],
    localCaseStudy: "An Astron Energy Cape Town contractor used the Atlantis NDT Digital Twin to defer FCC regenerator replacement by 13 months.",
  },
  'casablanca': {
    uniqueLocalROI: "Casablanca-coordinated OCP, Mohammedia and Tangier industrial operators running NDT digital twins typically defer MAD 80-200M per year of conservative-replacement capex.",
    localIndustryUseCases: [
      "OCP Jorf Lasfar and Safi phosphate-processing reactor digital twins.",
      "Tanger Med port industrial infrastructure digital twins.",
      "Stellantis Tangier and Casablanca manufacturing utility digital twins.",
    ],
    localCompliance: ["ONHYM", "ONEE", "API 579", "EN/PED equivalents"],
    localCaseStudy: "An OCP Jorf Lasfar contractor used the Atlantis NDT Digital Twin on phosphate-processing reactors to defer two reactor replacements by 16 months.",
  },
  'chicago': {
    uniqueLocalROI: "Chicago-area Midwest operators (BP Whiting, ExxonMobil Joliet, US Steel Gary Works) running NDT digital twins typically defer USD 6-14M per major unit of conservative-replacement capex.",
    localIndustryUseCases: [
      "BP Whiting refinery (largest in Midwest) digital twins.",
      "ExxonMobil Joliet and CITGO Lemont refinery digital twins.",
      "US Steel Gary Works blast-furnace digital twins.",
    ],
    localCompliance: ["OSHA PSM", "Illinois EPA", "PHMSA", "API 579", "EPA RMP"],
    localCaseStudy: "A BP Whiting contractor used the Atlantis NDT Digital Twin on hydrocracker hot reactors to defer shell replacement by 18 months.",
  },
  'colombia': {
    uniqueLocalROI: "Colombian Ecopetrol and IOC operators running NDT digital twins typically defer COP 20-55 billion per year of conservative-replacement capex using rigorous API 579 + ANH-aligned evidence.",
    localIndustryUseCases: [
      "Ecopetrol Barrancabermeja and Cartagena refinery digital twins.",
      "Cenit (Ecopetrol) pipeline integrity-management digital twins.",
      "Llanos and Magdalena basin upstream gathering-system digital twins.",
    ],
    localCompliance: ["ANH", "Ecopetrol AIM", "API 579", "ASME B31.3 / B31.4"],
    localCaseStudy: "An Ecopetrol contractor used the Atlantis NDT Digital Twin on OCENSA pipeline to defer two-segment replacement by 21 months.",
  },
  'ho-chi-minh': {
    uniqueLocalROI: "Vietnamese PetroVietnam operators running NDT digital twins on Dung Quat, Nghi Sơn and Long Son assets typically defer VND 350-900 billion per major unit of conservative-replacement capex.",
    localIndustryUseCases: [
      "BSR Bình Sơn Dung Quat refinery hot-reactor digital twins.",
      "Nghi Sơn refinery hydrocracker digital twins.",
      "Long Son Petrochemicals (SCG) cracker-furnace digital twins.",
    ],
    localCompliance: ["Vietnamese Ministry of Industry and Trade", "Vietnam Petroleum Institute", "API 579"],
    localCaseStudy: "A BSR Dung Quat contractor used the Atlantis NDT Digital Twin on FCC reactors to defer regenerator replacement by 14 months.",
  },
  'hong-kong': {
    uniqueLocalROI: "Hong Kong CLP Power and Hongkong Electric operators running NDT digital twins on gas-fired generation assets typically defer HKD 80-200M per major asset of conservative-replacement capex.",
    localIndustryUseCases: [
      "CLP Black Point and Castle Peak gas-fired power-plant boiler digital twins.",
      "Hongkong Electric Lamma Power Station digital twins.",
      "South of Lamma offshore LNG receiving terminal digital twins.",
    ],
    localCompliance: ["EMSD", "Boilers & Pressure Vessels Ordinance", "API 579", "HK Marine Department"],
    localCaseStudy: "A CLP Power contractor used the Atlantis NDT Digital Twin on Black Point gas-fired boilers to defer tube-bundle replacement by 11 months.",
  },
  'johannesburg': {
    uniqueLocalROI: "South African Sasol operators running NDT digital twins on Secunda CTL and Sasolburg assets typically defer ZAR 200-500M per major unit of conservative-replacement capex.",
    localIndustryUseCases: [
      "Sasol Secunda CTL gasifier and Fischer-Tropsch reactor digital twins.",
      "Sasolburg petrochemical reactor digital twins.",
      "Eskom Mpumalanga coal-fired power-plant boiler digital twins.",
    ],
    localCompliance: ["South African DMRE", "DEL OHS Act", "API 579", "National Nuclear Regulator"],
    localCaseStudy: "A Sasol Secunda contractor used the Atlantis NDT Digital Twin on Fischer-Tropsch reactors to defer two-reactor replacement by 20 months — ~ZAR 320M of capex avoided.",
  },
  'lima': {
    uniqueLocalROI: "Peruvian Petroperú and Repsol Peru operators running NDT digital twins typically defer PEN 25-65M per major unit of conservative-replacement capex.",
    localIndustryUseCases: [
      "Petroperú Talara refinery (recently modernised) digital twins.",
      "Repsol La Pampilla refinery digital twins.",
      "Peru LNG Pisco cryogenic-storage digital twins.",
    ],
    localCompliance: ["OSINERGMIN", "Peruvian MINEM", "API 579", "USCG (LNG supply)"],
    localCaseStudy: "A Petroperú Talara contractor used the Atlantis NDT Digital Twin on modernised hydrocracker reactors to establish baseline-thickness records for the first full operational year.",
  },
  'new-zealand': {
    uniqueLocalROI: "New Zealand OMV, Channel Infrastructure and Methanex operators running NDT digital twins typically defer NZD 12-32M per major unit of conservative-replacement capex.",
    localIndustryUseCases: [
      "OMV Maui and Pohokura offshore platform digital twins.",
      "Channel Infrastructure Marsden Point tank-farm digital twins.",
      "Methanex Motunui and Waitara Valley methanol reactor digital twins.",
    ],
    localCompliance: ["WorkSafe NZ", "EPA NZ", "API 579", "Health and Safety at Work Act"],
    localCaseStudy: "An OMV NZ contractor used the Atlantis NDT Digital Twin on the Maui platform to support a 5-year life-extension submission to WorkSafe NZ.",
  },
  'philippines': {
    uniqueLocalROI: "Philippine Petron, Shell and Malampaya operators running NDT digital twins typically defer PHP 250-700M per major unit of conservative-replacement capex through post-typhoon re-inspection automation and rigorous API 579 evidence.",
    localIndustryUseCases: [
      "Petron Bataan refinery FCC and hydrocracker digital twins.",
      "Malampaya offshore gas-processing platform digital twins.",
      "FGEN Batangas LNG cryogenic-storage digital twins.",
    ],
    localCompliance: ["Philippine DOE", "ERC", "API 579", "USCG (LNG supply)"],
    localCaseStudy: "A Petron Bataan contractor used the Atlantis NDT Digital Twin after Super Typhoon Odette to generate a 480-asset re-inspection plan in under 2 hours.",
  },
  'raleigh': {
    uniqueLocalROI: "Raleigh-Durham Duke Energy nuclear and aerospace operators running NDT digital twins typically defer USD 5-12M per year of conservative-replacement capex through rigorous ASME Section XI evidence.",
    localIndustryUseCases: [
      "Duke Energy Brunswick, Harris, McGuire and Catawba nuclear ASME Section XI digital twins.",
      "GE Aviation Wilmington aerospace component digital twins.",
      "Kitty Hawk offshore wind monopile and jacket digital twins.",
    ],
    localCompliance: ["NRC (10 CFR 50)", "ASME Section XI", "NAS 410", "API 579", "NC DOL"],
    localCaseStudy: "A Duke Energy contractor used the Atlantis NDT Digital Twin on the Harris reactor primary loop to support a 10-year in-service inspection review with zero NRC findings.",
  },
  'rio-de-janeiro': {
    uniqueLocalROI: "Rio-coordinated Petrobras pre-salt operators running NDT digital twins typically reduce ANP life-extension evidence prep by 60% and defer BRL 120-300M per major asset of conservative-replacement capex.",
    localIndustryUseCases: [
      "Petrobras Búzios, Tupi, Mero pre-salt FPSO digital twins.",
      "REDUC refinery hot-reactor digital twins.",
      "COMPERJ petrochemical commissioning-baseline digital twins.",
    ],
    localCompliance: ["ANP", "IBAMA", "NR-13", "API 579", "DNV/ABS class society"],
    localCaseStudy: "A Petrobras contractor used the Atlantis NDT Digital Twin on FPSO Búzios to extend hull-plating life-extension certification by 5 years, supporting ANP acceptance.",
  },
  'sacramento': {
    uniqueLocalROI: "Sacramento-coordinated California refining contractors running NDT digital twins typically defer USD 3-9M per year of conservative-replacement capex through rigorous CARB/CalGEM-aligned evidence.",
    localIndustryUseCases: [
      "Marathon Martinez renewable-diesel conversion digital twins (regional coordination).",
      "SMUD gas-fired power-plant boiler digital twins.",
      "California Central Valley pipeline integrity digital twins.",
    ],
    localCompliance: ["CARB", "CalGEM", "AB 1647", "API 579", "BAAQMD"],
    localCaseStudy: "A Sacramento-headquartered NDT firm used the Atlantis NDT Digital Twin to coordinate inspection across three California refineries undergoing renewable-fuels conversion.",
  },
  'santiago': {
    uniqueLocalROI: "Chilean ENAP and Codelco operators running NDT digital twins typically defer CLP 6-16 billion per major unit of conservative-replacement capex.",
    localIndustryUseCases: [
      "ENAP Aconcagua and Bío Bío refinery digital twins.",
      "Codelco Chuquicamata and El Teniente copper-beneficiation digital twins.",
      "Magallanes green hydrogen electrolyser pressure-system digital twins.",
    ],
    localCompliance: ["SEC", "SERNAGEOMIN", "Chilean industrial codes", "API 579"],
    localCaseStudy: "An ENAP Aconcagua contractor used the Atlantis NDT Digital Twin to defer FCC regenerator replacement by 14 months — ~CLP 4.8B of capex avoided.",
  },
  'savannah': {
    uniqueLocalROI: "Savannah-area Gulfstream, Hyundai and Plant Vogtle contractors running NDT digital twins typically defer USD 4-10M per year of conservative-replacement capex using rigorous NAS 410 + ASME Section XI evidence.",
    localIndustryUseCases: [
      "Gulfstream G650/G700 airframe and engine inspection digital twins.",
      "Hyundai Metaplant America EV manufacturing utility digital twins.",
      "Plant Vogtle AP1000 nuclear ASME Section XI digital twins (regional).",
    ],
    localCompliance: ["NRC (10 CFR 50)", "ASME Section XI", "NAS 410", "OSHA", "Georgia DPH"],
    localCaseStudy: "A Gulfstream supplier used the Atlantis NDT Digital Twin to consolidate G650 airframe component inspection records across 7 years, supporting an FAA Part-145 audit with zero findings.",
  },
  'scotland': {
    uniqueLocalROI: "Scotland-based UKCS and Grangemouth operators running NDT digital twins typically reduce HSE/PSSR 2000/OPRED evidence prep by 60% and defer GBP 9-22M per major unit of conservative-replacement capex.",
    localIndustryUseCases: [
      "UKCS Aberdeen-coordinated FPSO and platform digital twins.",
      "Petroineos Grangemouth refinery and cracker digital twins.",
      "East Anglia and Moray West offshore wind monopile digital twins.",
    ],
    localCompliance: ["HSE UK", "PSSR 2000", "OPRED", "PED 2014/68/EU", "API 579", "DNV"],
    localCaseStudy: "A Grangemouth-area contractor used the Atlantis NDT Digital Twin on the Petroineos cracker furnaces to defer tube-bundle replacement by 18 months.",
  },
  'shenzhen': {
    uniqueLocalROI: "Shenzhen-coordinated CNOOC and Daya Bay nuclear operators running NDT digital twins typically defer CNY 50-130M per major unit of conservative-replacement capex.",
    localIndustryUseCases: [
      "CNOOC Huizhou refinery and petrochemical cracker digital twins.",
      "Liwan deepwater subsea gas-processing manifold digital twins.",
      "Daya Bay nuclear primary-loop ASME-equivalent digital twins.",
    ],
    localCompliance: ["GB 150 / TSG 21", "HAF 003 (nuclear)", "NNSA", "API 579"],
    localCaseStudy: "A CNOOC Huizhou contractor used the Atlantis NDT Digital Twin on hydrocracker hot reactors to defer shell replacement by 15 months.",
  },
  'south-africa': {
    uniqueLocalROI: "South African Sasol, Eskom and Astron operators running NDT digital twins typically defer ZAR 180-450M per major unit of conservative-replacement capex.",
    localIndustryUseCases: [
      "Sasol Secunda CTL and Sasolburg digital twins.",
      "Astron Energy Cape Town refinery digital twins.",
      "Koeberg nuclear ASME Section XI in-service inspection digital twins.",
    ],
    localCompliance: ["South African DMRE", "DEL OHS Act", "NNR", "API 579", "ASME Section XI"],
    localCaseStudy: "A Sasol contractor used the Atlantis NDT Digital Twin to consolidate Secunda CTL Fischer-Tropsch reactor inspection records across 11 years, supporting an SHE audit with zero findings.",
  },
  'vietnam': {
    uniqueLocalROI: "Vietnamese PetroVietnam operators running NDT digital twins typically defer VND 250-700 billion per major unit of conservative-replacement capex.",
    localIndustryUseCases: [
      "BSR Bình Sơn Dung Quat and Nghi Sơn refinery digital twins.",
      "Long Son Petrochemicals (SCG) cracker-furnace digital twins.",
      "Cai Mep LNG cryogenic-storage digital twins.",
    ],
    localCompliance: ["Vietnam MOIT", "Vietnam Petroleum Institute", "API 579", "USCG (LNG supply)"],
    localCaseStudy: "A PetroVietnam contractor used the Atlantis NDT Digital Twin on Nghi Sơn refinery hot reactors to defer shell replacement by 13 months.",
  },
  'taiwan': {
    uniqueLocalROI: "Taiwanese CPC, Formosa Plastics and Taipower operators running NDT digital twins typically defer TWD 180-450M per major unit of conservative-replacement capex.",
    localIndustryUseCases: [
      "CPC Kaohsiung, Taoyuan and Talin refinery digital twins.",
      "Formosa Plastics Mailiao cracker and refinery digital twins.",
      "Greater Changhua (Ørsted) offshore wind monopile digital twins.",
    ],
    localCompliance: ["CNS", "OSHA Taiwan", "NRA Taiwan", "API 579", "DNV"],
    localCaseStudy: "A Formosa Plastics Mailiao contractor used the Atlantis NDT Digital Twin on cracker furnace tubes to defer tube-bundle replacement by 16 months.",
  },
};

for (const [slug, partial] of Object.entries(COMPACT_DT_DEFAULTS)) {
  if (!DT_CITY_PROFILES[slug]) {
    DT_CITY_PROFILES[slug] = {
      uniqueLocalROI: partial.uniqueLocalROI ?? '',
      localIndustryUseCases: partial.localIndustryUseCases ?? [],
      localCompliance: partial.localCompliance ?? [],
      localCaseStudy: partial.localCaseStudy ?? '',
      faqs: partial.faqs ?? [],
    };
  }
}

// ─── Accessors ────────────────────────────────────────────────────────────

export function getErpProfile(citySlug: string): CityProductProfile | undefined {
  return ERP_CITY_PROFILES[citySlug];
}

export function getDtProfile(citySlug: string): CityProductProfile | undefined {
  return DT_CITY_PROFILES[citySlug];
}

// ─── Internal-link eligibility ────────────────────────────────────────────
// Mirrors the App.tsx route list (April 2026) so we don't render dead links
// from city-template pages.

export const CONSULTING_CITY_SLUGS: Set<string> = new Set([
  'houston','los-angeles','new-orleans','denver','chicago','dubai','saudi-arabia','qatar','kuwait','abu-dhabi',
  'mumbai','chennai','bangalore','delhi','singapore','uk','norway','calgary','seattle','dallas','phoenix',
  'philadelphia','san-francisco','detroit','pittsburgh','baton-rouge','corpus-christi','tulsa','beaumont',
  'austin','san-antonio','fort-worth','midland','sacramento','orlando','norfolk','huntsville','mobile',
  'oklahoma-city','colorado-springs','savannah','raleigh','nashville','lake-charles','bahrain','oman',
  'jubail','yanbu','dammam','kolkata','ahmedabad','jamnagar','vizag','kochi','malaysia','indonesia',
  'thailand','vietnam','philippines','south-korea','japan','taiwan','australia','new-zealand','germany',
  'netherlands','france','italy','spain','belgium','scotland','aberdeen','edmonton','toronto','vancouver',
  'mexico-city','brazil','argentina','colombia','trinidad','nigeria','south-africa','egypt','angola',
  'algeria','perth','melbourne','sydney','brisbane','beijing','shanghai','shenzhen','hong-kong','taipei',
  'manila','jakarta','bangkok','ho-chi-minh','sao-paulo','rio-de-janeiro','buenos-aires','bogota','lima',
  'santiago','lagos','johannesburg','cape-town','nairobi','accra','casablanca','level-iii',
]);

export const TRAINING_CITY_SLUGS: Set<string> = new Set([
  'houston','new-york','los-angeles','chicago','denver','new-orleans','dallas','philadelphia','pittsburgh',
  'atlanta','hyderabad','usa','dubai','saudi-arabia','india','online',
]);

export function consultingPathForCity(citySlug: string): string | null {
  if (CONSULTING_CITY_SLUGS.has(citySlug)) {
    return `/consulting/ndt-consulting-${citySlug}`;
  }
  return null;
}

export function trainingPathForCity(citySlug: string): string | null {
  if (TRAINING_CITY_SLUGS.has(citySlug)) {
    return `/ndt-training-${citySlug}`;
  }
  return null;
}
