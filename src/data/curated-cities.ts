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

  // ── ERP expansion 2026-05 ────────────────────────────────────
  'accra',
  'ahmedabad',
  'algeria',
  'anchorage',
  'angola',
  'argentina',
  'auckland',
  'austin',
  'australia',
  'bahrain',
  'bakersfield',
  'bangalore',
  'bangkok',
  'basrah',
  'beaumont',
  'beijing',
  'belgium',
  'bergen',
  'bogota',
  'brazil',
  'brisbane',
  'buenos-aires',
  'cape-town',
  'casablanca',
  'charlotte',
  'christchurch',
  'cincinnati',
  'cleveland',
  'colombia',
  'colorado-springs',
  'dammam',
  'darwin',
  'delhi',
  'edmonton',
  'egypt',
  'fort-mcmurray',
  'fort-worth',
  'france',
  'genoa',
  'germany',
  'gladstone',
  'glasgow',
  'halifax',
  'ho-chi-minh',
  'hong-kong',
  'huntsville',
  'india',
  'indonesia',
  'italy',
  'jakarta',
  'jamnagar',
  'japan',
  'johannesburg',
  'jubail',
  'kansas-city',
  'karratha',
  'kochi',
  'kolkata',
  'lake-charles',
  'lima',
  'louisville',
  'madrid',
  'malaysia',
  'manama',
  'manila',
  'melbourne',
  'midland',
  'milwaukee',
  'minneapolis',
  'mobile',
  'montreal',
  'nairobi',
  'nashville',
  'netherlands',
  'new-zealand',
  'newcastle',
  'nigeria',
  'norfolk',
  'norway',
  'odessa',
  'oklahoma-city',
  'oman',
  'online',
  'orlando',
  'paris',
  'philippines',
  'piraeus',
  'plymouth',
  'port-harcourt',
  'qatar',
  'raleigh',
  'rio-de-janeiro',
  'sacramento',
  'san-antonio',
  'santiago',
  'sao-paulo',
  'savannah',
  'scotland',
  'shanghai',
  'shenzhen',
  'software-comparison',
  'sohar',
  'solution',
  'south-africa',
  'south-korea',
  'spain',
  'st-louis',
  'sydney',
  'taipei',
  'taiwan',
  'thailand',
  'toronto',
  'trinidad',
  'tulsa',
  'uk',
  'usa',
  'vancouver',
  'vietnam',
  'vizag',
  'wellington',
  'yanbu',

  // ── ERP Tier 1 expansion 2026-05 ─────────────────────────────────
  'riyadh',

  // ── Training expansion 2026-05-16 — additional slugs ─────────────
  // (Most cities already curated via earlier ERP expansion;
  //  these are the previously-uncurated ones that now have
  //  hand-built TrainingLocationPage pages.)
  'jacksonville',
  'portland',
  'salt-lake-city',
  'san-diego',
  'washington-dc',
  'baltimore',
  'indianapolis',
  'edinburgh',
  'stavanger',
  'antwerp',
  'barcelona',
  'hamburg',
  'marseille',
  'milan',
  'gdansk',
  'canada',
  'uae',
  'mexico',
  // === ERP Expansion 2026-05-23 (curated) ===
  'baytown', 'pasadena-texas', 'texas-city', 'deer-park', 'la-porte', 'channelview', 'sugar-land', 'pearland', 'conroe', 'galveston', 'port-arthur', 'freeport-texas', 'orange-texas', 'long-beach', 'carson', 'wilmington-california', 'torrance', 'el-segundo', 'vernon', 'richmond-california', 'martinez', 'benicia', 'joliet', 'hammond', 'east-chicago', 'trainer', 'marcus-hook', 'paulsboro', 'linden-nj', 'dearborn', 'monaca', 'clairton', 'jebel-ali', 'mussafah', 'ruwais', 'fujairah', 'khobar', 'ras-tanura', 'khurais', 'shaybah', 'abqaiq', 'riyadh', 'duqm', 'salalah', 'ras-laffan', 'mesaieed', 'al-zour', 'pune', 'vadodara', 'surat', 'visakhapatnam', 'balikpapan', 'cilacap', 'bontang', 'pengerang', 'bintulu', 'kerteh', 'kemaman', 'miri', 'jurong-island', 'port-hedland', 'port-kembla', 'whyalla', 'grangemouth', 'stanlow', 'fawley', 'immingham', 'teesside', 'mongstad', 'karsto', 'trondheim', 'sarnia', 'hamilton-ontario', 'fort-saskatchewan', 'lloydminster', 'texas', 'louisiana', 'california', 'alaska', 'north-dakota', 'ohio', 'pennsylvania', 'alberta', 'ontario', 'iraq', 'kazakhstan', 'azerbaijan', 'turkey', 'greece', 'cyprus', 'israel', 'tunisia', 'mozambique', 'tanzania', 'ghana', 'gabon', 'senegal', 'ivory-coast', 'suriname', 'guyana', 'panama', 'ecuador', 'bangladesh', 'sri-lanka', 'pakistan', 'myanmar', 'mongolia',

  // === Comparison + Industry + State expansion 2026-05-23 ===
  'maharashtra', 'gujarat', 'tamil-nadu', 'karnataka', 'telangana', 'andhra-pradesh', 'kerala', 'west-bengal',
  'new-york-state', 'florida', 'illinois', 'michigan', 'colorado',
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

// ─────────────────────────────────────────────────────────────────────────────
// City-page coverage indexes — the source of truth for which product-line city
// pages physically exist in src/pages/. RelatedProducts (city-sibling mode)
// reads these so it can never emit a broken internal link.
//
// IMPORTANT: keep these in sync with the actual page files. Adding a new
// city-templated page (e.g. src/pages/ndt-erp-newcity.tsx) is a 1-line update.
// ─────────────────────────────────────────────────────────────────────────────

/** Cities that have a /digital-twin-{slug} page wired in App.tsx + src/pages. */
export const DT_CITY_PAGE_SLUGS: Set<string> = new Set([
  'accra','gabon','ghana','ivory-coast','mozambique','nairobi','senegal','tanzania','balikpapan','bangladesh','bintulu','bontang','cilacap','jurong-island','kemaman','kerteh','miri','mongolia','myanmar','pakistan','sri-lanka','cyprus','fawley','grangemouth','greece','immingham','karsto','mongstad','stanlow','teesside','trondheim','turkey','gujarat','maharashtra','tamil-nadu','karnataka','kerala','telangana','andhra-pradesh','west-bengal','visakhapatnam','abqaiq','al-zour','duqm','fujairah','iraq','israel','khurais','mesaieed','mussafah','ras-laffan','salalah','shaybah','tunisia','alberta','azerbaijan','ecuador','guyana','kazakhstan','ontario','panama','port-kembla','suriname','alaska','california','clairton','conroe','detroit','florida','hammond','joliet','long-beach','martinez','new-york-state','ohio','pasadena-texas','pennsylvania','sugar-land','torrance','wilmington-california','baytown','carson','colorado','dearborn','east-chicago','freeport-texas','huntsville','la-porte','louisiana','michigan','norfolk','orange-texas','paulsboro','phoenix','texas','trainer','benicia','channelview','colorado-springs','deer-park','el-segundo','galveston','illinois','linden-nj','marcus-hook','monaca','north-dakota','orlando','pearland','richmond-california','texas-city','vernon','map-ta-phut','rayong','ulsan','yeosu','daesan','kawasaki','yokkaichi','mailiao','karachi','colombo','antwerp','wilhelmshaven','ludwigshafen','leuna','tarragona','sines','porvoo','gdansk','schwechat','le-havre','jazan','rabigh','sitra','skikda','arzew','mohammedia','mangalore','paradip','panipat','dahej','cartagena','talara','esmeraldas','tula','salina-cruz','mombasa','pointe-noire','whiting','garyville','toledo-ohio', // scale add 2026-07-24
  'adelaide','geelong','kwinana','port-hedland','mackay','wollongong','new-plymouth','whangarei','tauranga','saint-john','regina','saskatoon','nanticoke','fort-saskatchewan','hamilton-ontario','lloydminster','sarnia','whyalla', // AU/NZ/CA add 2026-07-24
  'aberdeen','abu-dhabi','anchorage','auckland','bakersfield','basrah','beaumont',
  'bergen','calgary','charlotte','chennai','christchurch','cincinnati','cleveland',
  'darwin','denver','doha','dubai','edmonton','fort-mcmurray','genoa','gladstone',
  'glasgow','halifax','houston','hyderabad','jubail','kansas-city','karratha',
  'kuala-lumpur','kuwait','lagos','london','louisville','madrid','manama','melbourne',
  'midland','milwaukee','minneapolis','mobile','montreal','mumbai','muscat','nashville',
  'new-orleans','newcastle','odessa','oslo','paris','perth','piraeus','plymouth',
  'port-harcourt','ras-al-khaimah','rotterdam','saudi-arabia','sharjah','singapore',
  'sohar','st-louis','sydney','toronto','tulsa','vancouver','wellington','yanbu',
  // === DT day-1 expansion 2026-05-24 ===
  'riyadh','pune','vadodara','surat','ras-tanura','ruwais','jebel-ali','pengerang',
  // === DT day-2 expansion 2026-05-25 ===
  'dammam','khobar','ho-chi-minh','manila','shenzhen','shanghai',
]);

/** Cities that have an /ndt-erp-{slug} page. */
export const ERP_CITY_PAGE_SLUGS: Set<string> = new Set([
  'birmingham','portland','newark','billings','casper','williston','salt-lake-city','freeport','gary','tampa','jacksonville', // ERP US push 2026-08-06
  'map-ta-phut','rayong','ulsan','yeosu','daesan','kawasaki','yokkaichi','mailiao','karachi','colombo','antwerp','wilhelmshaven','ludwigshafen','leuna','tarragona','sines','porvoo','gdansk','schwechat','le-havre','jazan','rabigh','sitra','skikda','arzew','mohammedia','mangalore','paradip','panipat','dahej','cartagena','talara','esmeraldas','tula','salina-cruz','mombasa','pointe-noire','whiting','garyville','toledo-ohio', // scale add 2026-07-24
  'adelaide','geelong','kwinana','mackay','wollongong','new-plymouth','whangarei','tauranga','saint-john','regina','saskatoon','nanticoke', // AU/NZ/CA add 2026-07-24
  'aberdeen','abu-dhabi','accra','ahmedabad','algeria','anchorage','angola','argentina',
  'atlanta','auckland','austin','australia','bahrain','bakersfield','bangalore','bangkok',
  'basrah','baton-rouge','beaumont','beijing','belgium','bergen','bogota','brazil',
  'brisbane','buenos-aires','calgary','cape-town','casablanca','charlotte','chennai',
  'chicago','christchurch','cincinnati','cleveland','colombia','colorado-springs',
  'corpus-christi','dallas','dammam','darwin','delhi','denver','detroit','doha','dubai',
  'edmonton','egypt','fort-mcmurray','fort-worth','france','genoa','germany','gladstone',
  'glasgow','halifax','ho-chi-minh','hong-kong','houston','huntsville','hyderabad',
  'india','indonesia','italy','jakarta','jamnagar','japan','johannesburg','jubail',
  'kansas-city','karratha','kochi','kolkata','kuala-lumpur','kuwait','lagos',
  'lake-charles','lima','london','los-angeles','louisville','madrid','malaysia','manama',
  'manila','melbourne','mexico-city','midland','milwaukee','minneapolis','mobile',
  'montreal','mumbai','muscat','nairobi','nashville','netherlands','new-orleans',
  'new-york','new-zealand','newcastle','nigeria','norfolk','norway','odessa',
  'oklahoma-city','oman','online','orlando','oslo','paris','perth','philadelphia',
  'philippines','phoenix','piraeus','pittsburgh','plymouth','port-harcourt','qatar',
  'raleigh','ras-al-khaimah','rio-de-janeiro','rotterdam','sacramento','san-antonio',
  'san-francisco','santiago','sao-paulo','saudi-arabia','savannah','scotland','seattle',
  'shanghai','sharjah','shenzhen','singapore','sohar','south-africa','south-korea',
  'spain','st-louis','sydney','taipei','taiwan','thailand','toronto','trinidad','tulsa',
  'uk','usa','vancouver','vietnam','vizag','wellington','yanbu',
  // === ERP Expansion 2026-05-23 ===
  'baytown','pasadena-texas','texas-city','deer-park','la-porte','channelview','sugar-land','pearland','conroe','galveston','port-arthur','freeport-texas','orange-texas','long-beach','carson','wilmington-california','torrance','el-segundo','vernon','richmond-california','martinez','benicia','joliet','hammond','east-chicago','trainer','marcus-hook','paulsboro','linden-nj','dearborn','monaca','clairton','jebel-ali','mussafah','ruwais','fujairah','khobar','ras-tanura','khurais','shaybah','abqaiq','riyadh','duqm','salalah','ras-laffan','mesaieed','al-zour','pune','vadodara','surat','visakhapatnam','balikpapan','cilacap','bontang','pengerang','bintulu','kerteh','kemaman','miri','jurong-island','port-hedland','port-kembla','whyalla','grangemouth','stanlow','fawley','immingham','teesside','mongstad','karsto','trondheim','sarnia','hamilton-ontario','fort-saskatchewan','lloydminster','texas','louisiana','california','alaska','north-dakota','ohio','pennsylvania','alberta','ontario','iraq','kazakhstan','azerbaijan','turkey','greece','cyprus','israel','tunisia','mozambique','tanzania','ghana','gabon','senegal','ivory-coast','suriname','guyana','panama','ecuador','bangladesh','sri-lanka','pakistan','myanmar','mongolia',
  // === Comparison + Industry + State expansion 2026-05-23 ===
  'maharashtra','gujarat','tamil-nadu','karnataka','telangana','andhra-pradesh','kerala','west-bengal',
  'new-york-state','florida','illinois','michigan','colorado',
]);

/** Cities that have an /ndt-reporting-{slug} page. */
export const REPORTING_CITY_PAGE_SLUGS: Set<string> = new Set([
  'aberdeen','abu-dhabi','auckland','beaumont','bergen','calgary','charlotte','chennai',
  'christchurch','cincinnati','cleveland','darwin','denver','doha','dubai','fort-mcmurray',
  'genoa','gladstone','glasgow','halifax','houston','hyderabad','kansas-city','karratha',
  'kuala-lumpur','kuwait','lagos','london','louisville','madrid','manama','milwaukee',
  'minneapolis','mobile','montreal','mumbai','muscat','nashville','new-orleans','newcastle',
  'odessa','oslo','paris','perth','piraeus','plymouth','ras-al-khaimah','rotterdam',
  'saudi-arabia','singapore','st-louis','sydney','toronto','tulsa','vancouver','wellington',
]);

/** Cities that have a /ndt-training-{slug} page (individual TSX + DynamicTrainingPage fallback). */
export const TRAINING_CITY_PAGE_SLUGS: Set<string> = new Set([
  // Hand-built /src/pages/ndt-training-*.tsx files (original 17)
  'atlanta','chicago','dallas','denver','dubai','houston','hyderabad','india','jakarta','los-angeles',
  'new-orleans','new-york','online','philadelphia','pittsburgh','saudi-arabia','singapore','usa',
  // === Training expansion 2026-05-16 — 88 new city + country training pages ===
  // GCC + ME
  'abu-dhabi','dammam','jubail','yanbu','sharjah','ras-al-khaimah','manama','muscat','sohar','kuwait','qatar','uae','oman',
  // USA
  'anchorage','austin','baton-rouge','beaumont','cincinnati','cleveland','corpus-christi','detroit','fort-worth',
  'kansas-city','lake-charles','midland','milwaukee','minneapolis','mobile','nashville','oklahoma-city','st-louis','tulsa',
  'jacksonville','miami','portland','salt-lake-city','san-diego','tampa','washington-dc','baltimore','indianapolis','boston','seattle',
  // Canada
  'calgary','edmonton','fort-mcmurray','halifax','montreal','vancouver','canada',
  // India + Asia
  'bangalore','chennai','delhi','kochi','kolkata','mumbai','ho-chi-minh','kuala-lumpur','shanghai',
  'malaysia','philippines','south-korea',
  // Australia
  'brisbane','melbourne','perth','sydney','australia',
  // Europe + UK
  'london','glasgow','edinburgh','oslo','stavanger','rotterdam','antwerp','barcelona','hamburg','marseille','paris','milan','gdansk','norway',
  // Africa + LatAm
  'lagos','port-harcourt','sao-paulo','mexico-city','brazil','nigeria','mexico',
  // Legacy DynamicTrainingPage map entries kept for back-compat
  'aberdeen','doha','johannesburg','riyadh',
  // === Training expansion 2026-05-24 ===
  'baytown','galveston','odessa','port-arthur','pasadena-texas','deer-park','sugar-land',
  'jebel-ali','fujairah','pune','vadodara','surat','huntsville','orlando','norfolk',
  // === Training day-2 expansion 2026-05-25 ===
  'ruwais','mussafah','ras-tanura','khurais','shaybah','khobar','abqaiq','al-zour',
  'kerteh','manila','bangkok','balikpapan','cilacap','pengerang','bintulu',
  // === Training day-2 enrichment 2026-05-25 — vizag alias slug for DynamicTrainingPage ===
  'vizag','kochi','jubail','yanbu','dammam',
]);

/** Cities that have a /consulting/ndt-consulting-{slug} page. Matches CONSULTING_CITY_SLUGS in city-profiles.ts. */
export const CONSULTING_CITY_PAGE_SLUGS: Set<string> = new Set([
  'houston','los-angeles','new-orleans','denver','chicago','dubai','saudi-arabia','qatar',
  'kuwait','abu-dhabi','mumbai','chennai','bangalore','delhi','singapore','uk','norway',
  'calgary','seattle','dallas','phoenix','philadelphia','san-francisco','detroit','pittsburgh',
  'baton-rouge','corpus-christi','tulsa','beaumont','austin','san-antonio','fort-worth',
  'midland','sacramento','orlando','norfolk','huntsville','mobile','oklahoma-city',
  'colorado-springs','savannah','raleigh','nashville','lake-charles','bahrain','oman',
  'jubail','yanbu','dammam','kolkata','ahmedabad','jamnagar','vizag','kochi','malaysia',
  'indonesia','thailand','vietnam','philippines','south-korea','japan','taiwan','australia',
  'new-zealand','germany','netherlands','france','italy','spain','belgium','scotland',
  'aberdeen','edmonton','toronto','vancouver','mexico-city','brazil','argentina','colombia',
  'trinidad','nigeria','south-africa','egypt','angola','algeria','perth','melbourne','sydney',
  'brisbane','beijing','shanghai','shenzhen','hong-kong','taipei','manila','jakarta','bangkok',
  'ho-chi-minh','sao-paulo','rio-de-janeiro','buenos-aires','bogota','lima','santiago','lagos',
  'johannesburg','cape-town','nairobi','accra','casablanca',
  // === Consulting expansion 2026-05-24 — 20 new high-priority consulting cities ===
  'riyadh','khobar','ras-tanura','jebel-ali','mussafah','ruwais','sharjah','fujairah',
  'manama','muscat','sohar','duqm','pune','vadodara','hyderabad','surat','baytown',
  'port-arthur','balikpapan','fort-mcmurray',
  // === Consulting day-2 expansion 2026-05-24 — 15 additional consulting cities ===
  'galveston','odessa-texas','pasadena-texas','deer-park','sugar-land',
  'khurais','shaybah','al-zour',
  'cilacap','pengerang','bintulu',
  'hamilton-ontario','sarnia','fort-saskatchewan','port-hedland',
]);

/** Product line identifier used by RelatedProducts to pick sibling links. */
export type CityProduct = 'digital-twin' | 'erp' | 'reporting' | 'training' | 'consulting';

/**
 * Returns true iff a city-templated page exists for the given product line.
 * Used by RelatedProducts to skip emitting broken internal links.
 */
export function cityHasProductPage(product: CityProduct, citySlug: string): boolean {
  switch (product) {
    case 'digital-twin': return DT_CITY_PAGE_SLUGS.has(citySlug);
    case 'erp':          return ERP_CITY_PAGE_SLUGS.has(citySlug);
    case 'reporting':    return REPORTING_CITY_PAGE_SLUGS.has(citySlug);
    case 'training':     return TRAINING_CITY_PAGE_SLUGS.has(citySlug);
    case 'consulting':   return CONSULTING_CITY_PAGE_SLUGS.has(citySlug);
    default:             return false;
  }
}

/** URL builder for a city/product combination. */
export function productCityHref(product: CityProduct, citySlug: string): string {
  switch (product) {
    case 'digital-twin': return `/digital-twin-${citySlug}`;
    case 'erp':          return `/ndt-erp-${citySlug}`;
    case 'reporting':    return `/ndt-reporting-${citySlug}`;
    case 'training':     return `/ndt-training-${citySlug}`;
    case 'consulting':   return `/consulting/ndt-consulting-${citySlug}`;
    default:             return '/';
  }
}
