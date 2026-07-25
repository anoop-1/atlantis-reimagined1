// Sibling-product slug sets extracted from src/data/curated-cities.ts.
// Used by scripts/prerender.mjs to conditionally emit related-product links
// without dead-linking to non-existent pages.

export const DT_CITY_PAGE_SLUGS = new Set([
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
]);

/** Cities that have an /ndt-erp-{slug} page. */
export const ERP_CITY_PAGE_SLUGS = new Set([
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
]);

/** Cities that have an /ndt-reporting-{slug} page. */
export const REPORTING_CITY_PAGE_SLUGS = new Set([
  'aberdeen','abu-dhabi','auckland','beaumont','bergen','calgary','charlotte','chennai',
  'christchurch','cincinnati','cleveland','darwin','denver','doha','dubai','fort-mcmurray',
  'genoa','gladstone','glasgow','halifax','houston','hyderabad','kansas-city','karratha',
  'kuala-lumpur','kuwait','lagos','london','louisville','madrid','manama','milwaukee',
  'minneapolis','mobile','montreal','mumbai','muscat','nashville','new-orleans','newcastle',
  'odessa','oslo','paris','perth','piraeus','plymouth','ras-al-khaimah','rotterdam',
  'saudi-arabia','singapore','st-louis','sydney','toronto','tulsa','vancouver','wellington',
]);

/** Cities that have a /ndt-training-{slug} page (individual TSX + DynamicTrainingPage fallback). */
export const TRAINING_CITY_PAGE_SLUGS = new Set([
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
]);

/** Cities that have a /consulting/ndt-consulting-{slug} page. Matches CONSULTING_CITY_SLUGS in city-profiles.ts. */
export const CONSULTING_CITY_PAGE_SLUGS = new Set([
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
]);
