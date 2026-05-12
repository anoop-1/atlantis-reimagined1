import fs from 'fs';
let pre = fs.readFileSync('scripts/prerender.mjs', 'utf-8');
const toAdd = JSON.parse(fs.readFileSync('scripts/_erp-cities-to-add.json', 'utf-8'));

const cmap = {
  'abu-dhabi': 'UAE', 'dubai': 'UAE', 'sharjah': 'UAE', 'ras-al-khaimah': 'UAE',
  'saudi-arabia': 'Saudi Arabia', 'jubail': 'Saudi Arabia', 'yanbu': 'Saudi Arabia', 'dammam': 'Saudi Arabia',
  'doha': 'Qatar', 'qatar': 'Qatar', 'kuwait': 'Kuwait', 'kuwait-city': 'Kuwait',
  'muscat': 'Oman', 'sohar': 'Oman', 'oman': 'Oman',
  'manama': 'Bahrain', 'bahrain': 'Bahrain', 'basrah': 'Iraq',
  'mumbai': 'India', 'hyderabad': 'India', 'chennai': 'India', 'delhi': 'India',
  'bangalore': 'India', 'kolkata': 'India', 'ahmedabad': 'India', 'pune': 'India',
  'kochi': 'India', 'vizag': 'India', 'jamnagar': 'India',
  'singapore': 'Singapore', 'kuala-lumpur': 'Malaysia', 'malaysia': 'Malaysia',
  'jakarta': 'Indonesia', 'indonesia': 'Indonesia',
  'bangkok': 'Thailand', 'thailand': 'Thailand',
  'manila': 'Philippines', 'philippines': 'Philippines',
  'ho-chi-minh': 'Vietnam', 'vietnam': 'Vietnam',
  'hong-kong': 'Hong Kong', 'taipei': 'Taiwan', 'taiwan': 'Taiwan',
  'beijing': 'China', 'shanghai': 'China', 'shenzhen': 'China',
  'japan': 'Japan', 'south-korea': 'South Korea',
  'perth': 'Australia', 'sydney': 'Australia', 'melbourne': 'Australia',
  'brisbane': 'Australia', 'darwin': 'Australia', 'gladstone': 'Australia',
  'karratha': 'Australia', 'newcastle': 'Australia', 'australia': 'Australia',
  'auckland': 'New Zealand', 'wellington': 'New Zealand',
  'christchurch': 'New Zealand', 'new-zealand': 'New Zealand',
  'london': 'UK', 'aberdeen': 'UK', 'glasgow': 'UK', 'plymouth': 'UK',
  'scotland': 'UK', 'uk': 'UK',
  'oslo': 'Norway', 'bergen': 'Norway', 'stavanger': 'Norway', 'norway': 'Norway',
  'rotterdam': 'Netherlands', 'netherlands': 'Netherlands',
  'paris': 'France', 'france': 'France',
  'madrid': 'Spain', 'spain': 'Spain',
  'genoa': 'Italy', 'piraeus': 'Greece', 'italy': 'Italy',
  'germany': 'Germany', 'belgium': 'Belgium',
  'lagos': 'Nigeria', 'port-harcourt': 'Nigeria', 'nigeria': 'Nigeria',
  'cape-town': 'South Africa', 'johannesburg': 'South Africa', 'south-africa': 'South Africa',
  'accra': 'Ghana', 'nairobi': 'Kenya', 'casablanca': 'Morocco',
  'algeria': 'Algeria', 'angola': 'Angola', 'egypt': 'Egypt',
  'calgary': 'Canada', 'edmonton': 'Canada', 'fort-mcmurray': 'Canada',
  'toronto': 'Canada', 'vancouver': 'Canada', 'montreal': 'Canada', 'halifax': 'Canada',
  'mexico-city': 'Mexico', 'sao-paulo': 'Brazil', 'rio-de-janeiro': 'Brazil',
  'brazil': 'Brazil', 'argentina': 'Argentina', 'buenos-aires': 'Argentina',
  'colombia': 'Colombia', 'bogota': 'Colombia',
  'lima': 'Peru', 'santiago': 'Chile', 'trinidad': 'Trinidad and Tobago',
};
const usaSet = new Set(['atlanta', 'austin', 'dallas', 'fort-worth', 'san-antonio', 'corpus-christi', 'midland', 'odessa', 'beaumont', 'lake-charles', 'new-orleans', 'baton-rouge', 'mobile', 'tulsa', 'oklahoma-city', 'denver', 'colorado-springs', 'cheyenne', 'pittsburgh', 'cleveland', 'cincinnati', 'detroit', 'milwaukee', 'minneapolis', 'kansas-city', 'chicago', 'philadelphia', 'charlotte', 'raleigh', 'nashville', 'louisville', 'st-louis', 'norfolk', 'savannah', 'orlando', 'huntsville', 'los-angeles', 'san-francisco', 'sacramento', 'bakersfield', 'phoenix', 'seattle', 'anchorage', 'houston', 'new-york', 'boston', 'miami', 'tampa']);

const nameFromSlug = (s) => s.split('-').map(w => ['usa', 'uk', 'uae'].includes(w) ? w.toUpperCase() : (w[0]?.toUpperCase() ?? '') + w.slice(1)).join(' ');

const industryFor = (slug) => {
  const country = cmap[slug] ?? (usaSet.has(slug) ? 'USA' : 'USA');
  if (country === 'USA') return 'oil & gas, petrochemical, aerospace, and manufacturing operations';
  if (country === 'India') return 'refining, petrochemical, power generation, and aerospace sectors';
  if (['UAE', 'Saudi Arabia', 'Qatar', 'Kuwait', 'Oman', 'Bahrain'].includes(country)) return 'oil & gas, petrochemical, refining, and Vision-2030 industrial projects';
  if (country === 'Singapore') return 'Jurong Island petrochemical, marine, and offshore sectors';
  if (country === 'Indonesia') return 'Pertamina refineries, Petrokimia complexes, and LNG operations';
  if (country === 'Australia') return 'LNG, mining, and onshore / offshore oil & gas operations';
  if (country === 'Canada') return 'oil sands, midstream pipelines, and refining operations';
  if (country === 'UK') return 'North Sea offshore, decommissioning, nuclear, and aerospace';
  if (country === 'Norway') return 'NCS offshore operations, NORSOK compliance, and subsea integrity';
  if (country === 'Netherlands') return 'Europoort refineries, petrochemical, and offshore wind';
  if (country === 'Brazil') return 'pre-salt offshore, refining, and Petrobras operations';
  if (country === 'Nigeria') return 'Niger Delta operations, NLNG, and Lagos industrial sector';
  return 'industrial inspection, process plant, and infrastructure sectors';
};

const newEntries = toAdd.map(slug => {
  const city = nameFromSlug(slug);
  const country = cmap[slug] ?? (usaSet.has(slug) ? 'USA' : 'USA');
  return '  { city: ' + JSON.stringify(city) + ', country: ' + JSON.stringify(country) + ', slug: ' + JSON.stringify(slug) + ', industries: ' + JSON.stringify(industryFor(slug)) + ' },';
}).join('\n');

const m = pre.match(/(const erpCities = \[[\s\S]*?)(^\];)/m);
if (!m) { console.error('erpCities array not found'); process.exit(1); }
pre = pre.replace(m[0], m[1] + newEntries + '\n' + m[2]);
fs.writeFileSync('scripts/prerender.mjs', pre);
console.log('Inserted', toAdd.length, 'erpCities entries');
