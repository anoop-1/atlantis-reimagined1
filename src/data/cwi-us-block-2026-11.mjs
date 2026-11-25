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
  NE: 'omaha', NV: 'las-vegas', NH: 'boston', NJ: 'newark', NM: 'phoenix', NY: 'new-york', NC: 'charlotte', ND: 'minneapolis', OH: 'columbus-ohio',
  OK: 'oklahoma-city', OR: 'portland', PA: 'philadelphia', RI: 'boston', SC: 'north-charleston', SD: 'omaha', TN: 'nashville', TX: 'houston',
  UT: 'salt-lake-city', VT: 'boston', VA: 'norfolk', WA: 'seattle', WV: 'pittsburgh', WI: 'milwaukee', WY: 'denver',
};
/** Training pages whose nearest CWI page is not the state default (training-page slug -> CWI city slug). */
const CITY_OVERRIDE = {
  // Texas
  baytown: 'houston', 'deer-park': 'houston', 'pasadena-texas': 'houston', galveston: 'houston', 'texas-city': 'houston', 'sugar-land': 'houston', freeport: 'houston',
  'port-arthur': 'beaumont', austin: 'san-antonio', brownsville: 'corpus-christi', midland: 'fort-worth', odessa: 'fort-worth', 'el-paso': 'phoenix',
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
  };
}

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
export const CWI_BLOCK_CLASS = {
  section: 'container mx-auto max-w-4xl px-6 py-6',
  box: 'rounded-xl border-l-4 border-accent bg-accent/5 p-6',
  h2: 'text-xl md:text-2xl font-bold mb-2',
  p: 'text-slate-700 mb-3',
  ul: 'list-disc pl-6 space-y-1',
  a: 'text-primary underline underline-offset-2 hover:no-underline',
};
export function cwiBlockHtml(b) {
  const C = CWI_BLOCK_CLASS;
  return `<section data-cwi-block="2026-11" data-keep-on-rewrite="cwi" class="${C.section}" aria-label="${esc(b.h)}"><div class="${C.box}"><h2 class="${C.h2}">${esc(b.h)}</h2><p class="${C.p}">${esc(b.p)}</p><ul class="${C.ul}">${b.links.map(([h, l]) => `<li><a href="${h}" class="${C.a}" data-cwi-link="${b.kind}">${esc(l)}</a></li>`).join('')}</ul></div></section>`;
}
