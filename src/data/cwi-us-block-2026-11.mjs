// AWS CWI section on US NDT training pages (owner, 2026-11-20: "add AWS CWI Training in various US cities ...
// in the training section ... we'll provide corporate, online & one to one trainings"; owner chose "20 new cities
// + CWI block": a short CWI section on every US NDT training city page, linking to the nearest CWI page).
//
// Pages: every path in US_TRAINING_PAGES (US city, state and region training pages, src/data/us-training-2026-11.mjs)
// plus the two training hubs, /training and /ndt-training-usa. One model for both layers: the crawler
// (scripts/cwi-us-block-2026-11.mjs) and React (src/components/CwiTrainingBlock.tsx) render cwiBlockHtml().
// The CWI city list below must match the CWI city pages in src/data/audit-cwi-2026-11/_pages.json (the build
// guard checks it). No fees: the formats are named, the price is a quote on request.
import { US_TRAINING_PAGES } from './us-training-2026-11.mjs';

export const CWI_NATIONAL = '/aws-cwi-training';
export const CWI_PAGE = (slug) => `/training/cwi-training-${slug}`;

/** CWI city pages: citySlug -> [city, state]. Keep in step with _pages.json (family "cwi", kind "city"). */
export const CWI_CITIES = {
  atlanta: ['Atlanta', 'GA'], baltimore: ['Baltimore', 'MD'], 'baton-rouge': ['Baton Rouge', 'LA'], boston: ['Boston', 'MA'],
  charlotte: ['Charlotte', 'NC'], chicago: ['Chicago', 'IL'], cincinnati: ['Cincinnati', 'OH'], cleveland: ['Cleveland', 'OH'],
  dallas: ['Dallas', 'TX'], denver: ['Denver', 'CO'], detroit: ['Detroit', 'MI'], houston: ['Houston', 'TX'],
  indianapolis: ['Indianapolis', 'IN'], jacksonville: ['Jacksonville', 'FL'], 'kansas-city': ['Kansas City', 'MO'], 'los-angeles': ['Los Angeles', 'CA'],
  miami: ['Miami', 'FL'], milwaukee: ['Milwaukee', 'WI'], minneapolis: ['Minneapolis', 'MN'], nashville: ['Nashville', 'TN'],
  'new-york': ['New York', 'NY'], philadelphia: ['Philadelphia', 'PA'], phoenix: ['Phoenix', 'AZ'], pittsburgh: ['Pittsburgh', 'PA'],
  portland: ['Portland', 'OR'], 'salt-lake-city': ['Salt Lake City', 'UT'], 'san-diego': ['San Diego', 'CA'], seattle: ['Seattle', 'WA'],
  'st-louis': ['St. Louis', 'MO'], tampa: ['Tampa', 'FL'], tulsa: ['Tulsa', 'OK'], 'washington-dc': ['Washington', 'DC'],
  // 2026-11-20: 20 new cities
  'san-antonio': ['San Antonio', 'TX'], 'fort-worth': ['Fort Worth', 'TX'], 'corpus-christi': ['Corpus Christi', 'TX'], beaumont: ['Beaumont', 'TX'],
  'lake-charles': ['Lake Charles', 'LA'], 'new-orleans': ['New Orleans', 'LA'], mobile: ['Mobile', 'AL'], birmingham: ['Birmingham', 'AL'],
  'oklahoma-city': ['Oklahoma City', 'OK'], wichita: ['Wichita', 'KS'], omaha: ['Omaha', 'NE'], memphis: ['Memphis', 'TN'],
  louisville: ['Louisville', 'KY'], 'columbus-ohio': ['Columbus', 'OH'], buffalo: ['Buffalo', 'NY'], newark: ['Newark', 'NJ'],
  norfolk: ['Norfolk', 'VA'], 'north-charleston': ['North Charleston', 'SC'], 'las-vegas': ['Las Vegas', 'NV'], 'san-francisco': ['San Francisco', 'CA'],
  // 2026-11-28: API/CWI wave
  midland: ['Midland', 'TX'], 'el-paso': ['El Paso', 'TX'], bakersfield: ['Bakersfield', 'CA'], albuquerque: ['Albuquerque', 'NM'],
};

const STATE_CODE = {
  Alabama: 'AL', Alaska: 'AK', Arizona: 'AZ', Arkansas: 'AR', California: 'CA', Colorado: 'CO', Connecticut: 'CT', Delaware: 'DE', Florida: 'FL', Georgia: 'GA',
  Hawaii: 'HI', Idaho: 'ID', Illinois: 'IL', Indiana: 'IN', Iowa: 'IA', Kansas: 'KS', Kentucky: 'KY', Louisiana: 'LA', Maine: 'ME', Maryland: 'MD',
  Massachusetts: 'MA', Michigan: 'MI', Minnesota: 'MN', Mississippi: 'MS', Missouri: 'MO', Montana: 'MT', Nebraska: 'NE', Nevada: 'NV', 'New Hampshire': 'NH',
  'New Jersey': 'NJ', 'New Mexico': 'NM', 'New York': 'NY', 'North Carolina': 'NC', 'North Dakota': 'ND', Ohio: 'OH', Oklahoma: 'OK', Oregon: 'OR', Pennsylvania: 'PA',
  'Rhode Island': 'RI', 'South Carolina': 'SC', 'South Dakota': 'SD', Tennessee: 'TN', Texas: 'TX', Utah: 'UT', Vermont: 'VT', Virginia: 'VA', Washington: 'WA',
  'West Virginia': 'WV', Wisconsin: 'WI', Wyoming: 'WY',
};
/** State -> the CWI page to send its pages to: the state's main CWI city, or the nearest one in a neighbouring state. */
const STATE_DEFAULT = {
  AL: 'birmingham', AK: 'seattle', AZ: 'phoenix', AR: 'memphis', CA: 'los-angeles', CO: 'denver', CT: 'boston', DE: 'philadelphia', DC: 'washington-dc',
  FL: 'tampa', GA: 'atlanta', HI: 'los-angeles', ID: 'salt-lake-city', IL: 'chicago', IN: 'indianapolis', IA: 'omaha', KS: 'wichita', KY: 'louisville',
  LA: 'baton-rouge', ME: 'boston', MD: 'baltimore', MA: 'boston', MI: 'detroit', MN: 'minneapolis', MS: 'new-orleans', MO: 'st-louis', MT: 'salt-lake-city',
  NE: 'omaha', NV: 'las-vegas', NH: 'boston', NJ: 'newark', NM: 'albuquerque', NY: 'new-york', NC: 'charlotte', ND: 'minneapolis', OH: 'columbus-ohio',
  OK: 'oklahoma-city', OR: 'portland', PA: 'philadelphia', RI: 'boston', SC: 'north-charleston', SD: 'omaha', TN: 'nashville', TX: 'houston',
  UT: 'salt-lake-city', VT: 'boston', VA: 'norfolk', WA: 'seattle', WV: 'pittsburgh', WI: 'milwaukee', WY: 'denver',
};
/** Training pages whose nearest CWI page is not the state default (training-page slug -> CWI city slug). */
const CITY_OVERRIDE = {
  // Texas
  baytown: 'houston', 'deer-park': 'houston', 'pasadena-texas': 'houston', galveston: 'houston', 'texas-city': 'houston', 'sugar-land': 'houston', freeport: 'houston',
  'port-arthur': 'beaumont', austin: 'san-antonio', brownsville: 'corpus-christi', midland: 'fort-worth', odessa: 'midland', 'el-paso': 'phoenix', 'longview-texas': 'dallas',
  // California
  'san-jose': 'san-francisco', martinez: 'san-francisco', sacramento: 'san-francisco', 'el-segundo': 'los-angeles', 'long-beach': 'los-angeles', bakersfield: 'los-angeles',
  // Florida
  orlando: 'tampa',
  // Louisiana and Mississippi
  lafayette: 'lake-charles', houma: 'new-orleans', shreveport: 'baton-rouge', pascagoula: 'mobile', jackson: 'new-orleans',
  // Alabama
  huntsville: 'birmingham', montgomery: 'birmingham',
  // Ohio
  toledo: 'detroit', dayton: 'cincinnati', akron: 'cleveland',
  // Pennsylvania and New York
  erie: 'buffalo', allentown: 'philadelphia', albany: 'new-york',
  // Missouri, Tennessee, Kentucky, Illinois, Indiana
  springfield: 'st-louis', peoria: 'chicago', whiting: 'chicago', knoxville: 'nashville', chattanooga: 'atlanta', 'oak-ridge': 'nashville', lexington: 'louisville',
  // Carolinas, Virginia, Georgia
  'greenville-south-carolina': 'charlotte', 'wilmington-north-carolina': 'north-charleston', raleigh: 'charlotte', fayetteville: 'charlotte', aiken: 'atlanta',
  richmond: 'norfolk', lynchburg: 'norfolk', 'newport-news': 'norfolk', savannah: 'jacksonville',
  // West and Mountain
  tucson: 'phoenix', reno: 'san-francisco', 'colorado-springs': 'denver', ogden: 'salt-lake-city', farmington: 'denver', hobbs: 'fort-worth', casper: 'denver',
  spokane: 'seattle', tacoma: 'seattle', richland: 'seattle', billings: 'denver', williston: 'minneapolis', 'idaho-falls': 'salt-lake-city', fairbanks: 'seattle',
  // New England, Great Lakes
  'east-hartford': 'boston', groton: 'boston', providence: 'boston', 'portsmouth-new-hampshire': 'boston', 'bath-maine': 'boston', duluth: 'minneapolis',
  'grand-rapids': 'detroit', 'des-moines': 'omaha', 'little-rock': 'memphis',
  // US training cities added 2026-11-23 (state default is not the nearest CWI page)
  pensacola: 'mobile', evansville: 'louisville', 'rochester-new-york': 'buffalo', syracuse: 'buffalo', amarillo: 'oklahoma-city',
  'cedar-rapids': 'chicago', 'columbia-south-carolina': 'charlotte',
  'charleston-west-virginia': 'columbus-ohio',
};
/** Region pages: the CWI page that best represents the region, or the national page. */
const REGION_TARGET = {
  'gulf-coast': 'houston', 'permian-basin': 'fort-worth', 'southern-california': 'los-angeles', 'pacific-northwest': 'seattle', 'great-lakes': 'cleveland',
  'texas-inland': 'dallas', 'mid-atlantic': 'philadelphia', northeast: 'new-york', southeast: 'atlanta', midwest: 'chicago', 'west-coast': 'los-angeles',
  'rockies-plains': 'denver', appalachia: 'pittsburgh',
};

const label = (slug) => { const [c, st] = CWI_CITIES[slug]; return st === 'DC' ? 'Washington, DC' : `${c}, ${st}`; };
const HUB_CITIES = ['houston', 'chicago', 'los-angeles', 'philadelphia', 'atlanta', 'tampa', 'dallas', 'seattle', 'new-orleans', 'pittsburgh'];

/** Nearest CWI city slug for a US training page path, or null for the national page. */
export function nearestCwi(path) {
  const slug = String(path).replace(/^\/ndt-training-/, '');
  if (CWI_CITIES[slug]) return slug;
  if (CITY_OVERRIDE[slug]) return CITY_OVERRIDE[slug];
  if (REGION_TARGET[slug]) return REGION_TARGET[slug];
  const place = US_TRAINING_PAGES[path] || '';
  const st = (place.match(/, ([A-Z]{2})$/) || [])[1] || STATE_CODE[place] || null;
  return st && STATE_DEFAULT[st] ? STATE_DEFAULT[st] : null;
}

// 2026-11-28 (owner): API 510/570/580/653 exam-prep courses, self-paced online with instructor Q&A. The same section
// on US training pages carries a short API paragraph linking the nearest API city pages, the region page and the
// USA hub. API_CITIES must match the city rows in src/data/api-training-2026-11/_pages.json (that module's guard checks).
export const API_HUB = '/api-inspector-training-usa';
export const API_CITY_PAGE = (code, slug) => `/training/api-${code}-training-${slug}`;
const API_CITY_META = {
  houston: ['Houston, TX', 'gulf-coast'], 'corpus-christi': ['Corpus Christi, TX', 'gulf-coast'], beaumont: ['Beaumont, TX', 'gulf-coast'],
  midland: ['Midland, TX', 'mountain-plains'], 'lake-charles': ['Lake Charles, LA', 'gulf-coast'], 'baton-rouge': ['Baton Rouge, LA', 'gulf-coast'],
  'new-orleans': ['New Orleans, LA', 'gulf-coast'], mobile: ['Mobile, AL', 'gulf-coast'], tulsa: ['Tulsa, OK', 'mountain-plains'],
  'los-angeles': ['Los Angeles, CA', 'west-coast'], 'san-francisco': ['San Francisco Bay Area, CA', 'west-coast'], seattle: ['Seattle, WA', 'west-coast'],
  chicago: ['Chicago, IL', 'midwest'], toledo: ['Toledo, OH', 'midwest'], 'st-louis': ['St. Louis, MO', 'midwest'],
  philadelphia: ['Philadelphia, PA', 'northeast'], newark: ['Newark, NJ', 'northeast'], denver: ['Denver, CO', 'mountain-plains'],
  'salt-lake-city': ['Salt Lake City, UT', 'mountain-plains'], billings: ['Billings, MT', 'mountain-plains'],
};
/** API cities whose four course pages are live (records written). Add a city only when all four exist; the
 *  API training guard (scripts/api-training-2026-11.mjs) fails if a listed city is missing a page. */
export const API_LIVE_CITIES = ['houston', 'beaumont', 'corpus-christi', 'baton-rouge', 'los-angeles', 'chicago', 'midland', 'lake-charles'];
export const API_CITIES = Object.fromEntries(API_LIVE_CITIES.map((s) => [s, API_CITY_META[s]]));
const API_REGION_NAME = { 'gulf-coast': 'Gulf Coast', 'west-coast': 'West Coast', midwest: 'Midwest', northeast: 'Northeast and Mid-Atlantic', southeast: 'Southeast', 'mountain-plains': 'Mountain and Plains' };
const API_STATE_REGION = {
  TX: 'gulf-coast', LA: 'gulf-coast', MS: 'gulf-coast', AL: 'gulf-coast', CA: 'west-coast', WA: 'west-coast', OR: 'west-coast', AK: 'west-coast', HI: 'west-coast',
  IL: 'midwest', IN: 'midwest', OH: 'midwest', MI: 'midwest', MN: 'midwest', WI: 'midwest', MO: 'midwest', IA: 'midwest', KY: 'midwest',
  PA: 'northeast', NJ: 'northeast', NY: 'northeast', DE: 'northeast', MD: 'northeast', VA: 'northeast', WV: 'northeast', DC: 'northeast', CT: 'northeast',
  MA: 'northeast', RI: 'northeast', NH: 'northeast', VT: 'northeast', ME: 'northeast',
  GA: 'southeast', FL: 'southeast', SC: 'southeast', NC: 'southeast', TN: 'southeast', AR: 'southeast',
  OK: 'mountain-plains', KS: 'mountain-plains', NE: 'mountain-plains', CO: 'mountain-plains', UT: 'mountain-plains', WY: 'mountain-plains',
  MT: 'mountain-plains', ND: 'mountain-plains', SD: 'mountain-plains', NM: 'mountain-plains', AZ: 'mountain-plains', NV: 'mountain-plains', ID: 'mountain-plains',
};
const API_TEXT = 'Atlantis also runs exam-prep courses for API 510, API 570, API 580 and API 653. They are self-paced and online, with an instructor answering your questions, and fees are quoted on request. API administers the examinations and issues the certification.';
function apiPart(path, place) {
  if (path === '/training' || path === '/ndt-training-usa') {
    return { h: 'API 510, 570, 580 and 653 exam prep', p: API_TEXT, links: [[API_HUB, 'API inspector training in the USA'], ['/api-510-training', 'API 510 exam prep'], ['/api-570-training', 'API 570 exam prep'], ['/api-580-training', 'API 580 exam prep'], ['/api-653-training', 'API 653 exam prep']] };
  }
  const slug = String(path).replace(/^\/ndt-training-/, '');
  const st = (String(place).match(/, ([A-Z]{2})$/) || [])[1] || STATE_CODE[place] || null;
  const region = API_CITIES[slug] ? API_CITIES[slug][1] : (st && API_STATE_REGION[st]) || null;
  const links = [];
  if (API_CITIES[slug]) for (const c of ['510', '570', '580', '653']) links.push([API_CITY_PAGE(c, slug), `API ${c} exam prep in ${API_CITIES[slug][0]}`]);
  if (region) links.push([`/api-inspector-training-${region}`, `API inspector exam prep: ${API_REGION_NAME[region]}`]);
  links.push([API_HUB, 'API 510, 570, 580 and 653 exam prep in the USA']);
  return { h: `API inspector exam prep for ${place}`, p: API_TEXT, links };
}
/** Every page the API part of the block can link to (for the build guard). */
export function apiBlockTargets() {
  const t = new Set([API_HUB, '/api-510-training', '/api-570-training', '/api-580-training', '/api-653-training']);
  for (const r of Object.keys(API_REGION_NAME)) t.add(`/api-inspector-training-${r}`);
  for (const s of Object.keys(API_CITIES)) for (const c of ['510', '570', '580', '653']) t.add(API_CITY_PAGE(c, s));
  return t;
}

const FORMATS = 'in three formats: corporate for a team at your facility, online at your own pace, or one-to-one, online or in person';

/** @returns {{kind:'city'|'hub', h:string, p:string, links:[string,string][]} | null} */
export function cwiBlockFor(rawPath) {
  const path = String(rawPath || '').replace(/\/+$/, '') || '/';
  if (path === '/training' || path === '/ndt-training-usa') {
    return {
      kind: 'hub',
      h: 'AWS CWI exam prep: six days',
      p: `Alongside ASNT NDT training, we run a six-day exam prep course for the AWS Certified Welding Inspector (CWI) examination, ${FORMATS}. It covers Parts A, B and C, and fees are quoted on request. AWS administers the examination and issues the certification.`,
      links: [[CWI_NATIONAL, 'The six-day AWS CWI course: outline, exam and eligibility'], ...HUB_CITIES.filter((s) => CWI_CITIES[s]).map((s) => [CWI_PAGE(s), `AWS CWI exam prep in ${label(s)}`])],

      api: apiPart(path, 'the USA'),
    };
  }
  const place = US_TRAINING_PAGES[path];
  if (!place) return null;
  const near = nearestCwi(path);
  const links = [];
  if (near) links.push([CWI_PAGE(near), `AWS CWI exam prep in ${label(near)}`]);
  links.push([CWI_NATIONAL, 'The six-day AWS CWI course: outline, exam and eligibility']);
  return {
    kind: 'city',
    h: `AWS CWI exam prep for ${place}`,
    p: `Welders, QC inspectors and fabrication staff in ${place} who want the AWS Certified Welding Inspector credential can take our six-day CWI exam prep course ${FORMATS}. AWS administers the examination and issues the certification.`,
    links,

    api: apiPart(path, place),
  };
}

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
export const CWI_BLOCK_CLASS = {
  section: 'container mx-auto max-w-4xl px-6 py-6',
  box: 'rounded-xl border-l-4 border-accent bg-accent/5 p-6',
  h2: 'text-xl md:text-2xl font-bold mb-2',
  h3: 'text-lg font-semibold mt-5 mb-2',
  p: 'text-slate-700 mb-3',
  ul: 'list-disc pl-6 space-y-1',
  a: 'text-primary underline underline-offset-2 hover:no-underline',
};
export function cwiBlockHtml(b) {
  const C = CWI_BLOCK_CLASS;
  const api = b.api ? `<h3 class="${C.h3}">${esc(b.api.h)}</h3><p class="${C.p}">${esc(b.api.p)}</p><ul class="${C.ul}">${b.api.links.map(([h, l]) => `<li><a href="${h}" class="${C.a}" data-api-link="${b.kind}">${esc(l)}</a></li>`).join('')}</ul>` : '';
  return `<section data-cwi-block="2026-11" data-keep-on-rewrite="cwi" class="${C.section}" aria-label="${esc(b.h)}"><div class="${C.box}"><h2 class="${C.h2}">${esc(b.h)}</h2><p class="${C.p}">${esc(b.p)}</p><ul class="${C.ul}">${b.links.map(([h, l]) => `<li><a href="${h}" class="${C.a}" data-cwi-link="${b.kind}">${esc(l)}</a></li>`).join('')}</ul>${api}</div></section>`;
}
