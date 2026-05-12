// Generate ERP module + industry + missing-city stub TSX files.
// Reads scripts/gen-erp-data.json. Writes src/pages/erp-modules/*.tsx,
// src/pages/erp-industries/*.tsx, and src/pages/ndt-erp-*.tsx for missing cities.
// Also patches App.tsx routes and prerender.mjs entries.
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const DATA = JSON.parse(readFileSync(join(__dirname, 'gen-erp-data.json'), 'utf-8'));

// ---------- module stubs ----------
const moduleDir = join(ROOT, 'src/pages/erp-modules');
mkdirSync(moduleDir, { recursive: true });
const moduleStub = (m) => `import ErpModulePage from '@/components/ErpModulePage';
const data = ${JSON.stringify(m, null, 2)};
export default function ErpModule_${m.slug.replace(/-/g, '_')}() { return <ErpModulePage {...data} />; }
`;
for (const m of DATA.modules) writeFileSync(join(moduleDir, `${m.slug}.tsx`), moduleStub(m));
console.log(`✓ ${DATA.modules.length} module pages written`);

// ---------- industry stubs ----------
const industryDir = join(ROOT, 'src/pages/erp-industries');
mkdirSync(industryDir, { recursive: true });
const industryStub = (i) => `import ErpIndustryPage from '@/components/ErpIndustryPage';
const data = ${JSON.stringify(i, null, 2)};
export default function ErpIndustry_${i.slug.replace(/-/g, '_')}() { return <ErpIndustryPage {...data} />; }
`;
for (const i of DATA.industries) writeFileSync(join(industryDir, `${i.slug}.tsx`), industryStub(i));
console.log(`✓ ${DATA.industries.length} industry pages written`);

// ---------- city ERP stubs ----------
// Read training/consulting cities that lack ERP page
import { readdirSync } from 'fs';
const allPages = readdirSync(join(ROOT, 'src/pages'));
const erpCities = new Set(allPages.filter(p => p.startsWith('ndt-erp-') && p.endsWith('.tsx')).map(p => p.replace(/^ndt-erp-/, '').replace(/\.tsx$/, '')));
const consultingCities = new Set(allPages.filter(p => p.startsWith('ndt-consulting-') && p.endsWith('.tsx')).map(p => p.replace(/^ndt-consulting-/, '').replace(/\.tsx$/, '')));
const trainingCities = new Set(allPages.filter(p => p.startsWith('ndt-training-') && p.endsWith('.tsx')).map(p => p.replace(/^ndt-training-/, '').replace(/\.tsx$/, '')));

// Cities to expand: consulting + training cities, drop state-level + 'level-iii' noise
const skipSuffix = /state$/;
const skipExact = new Set(['level-iii']);
const candidateCities = new Set([...consultingCities, ...trainingCities]);
const missingCities = [...candidateCities].filter(c => !erpCities.has(c) && !skipSuffix.test(c) && !skipExact.has(c)).sort();

// Country resolver (matches existing pattern)
const countryMap = {
  // GCC + ME
  'abu-dhabi': 'UAE', 'dubai': 'UAE', 'sharjah': 'UAE', 'ras-al-khaimah': 'UAE',
  'saudi-arabia': 'Saudi Arabia', 'jubail': 'Saudi Arabia', 'yanbu': 'Saudi Arabia', 'dammam': 'Saudi Arabia',
  'doha': 'Qatar', 'qatar': 'Qatar',
  'kuwait': 'Kuwait', 'kuwait-city': 'Kuwait',
  'muscat': 'Oman', 'sohar': 'Oman', 'oman': 'Oman',
  'manama': 'Bahrain', 'bahrain': 'Bahrain',
  'basrah': 'Iraq',
  // India
  'mumbai': 'India', 'hyderabad': 'India', 'chennai': 'India', 'delhi': 'India',
  'bangalore': 'India', 'kolkata': 'India', 'ahmedabad': 'India', 'pune': 'India',
  'kochi': 'India', 'vizag': 'India', 'jamnagar': 'India',
  // SEA + APAC
  'singapore': 'Singapore', 'kuala-lumpur': 'Malaysia', 'malaysia': 'Malaysia',
  'jakarta': 'Indonesia', 'indonesia': 'Indonesia',
  'bangkok': 'Thailand', 'thailand': 'Thailand',
  'manila': 'Philippines', 'philippines': 'Philippines',
  'ho-chi-minh': 'Vietnam', 'vietnam': 'Vietnam',
  'hong-kong': 'Hong Kong', 'taipei': 'Taiwan', 'taiwan': 'Taiwan',
  'beijing': 'China', 'shanghai': 'China', 'shenzhen': 'China',
  'japan': 'Japan', 'south-korea': 'South Korea',
  // Australia + NZ
  'perth': 'Australia', 'sydney': 'Australia', 'melbourne': 'Australia',
  'brisbane': 'Australia', 'darwin': 'Australia', 'gladstone': 'Australia',
  'karratha': 'Australia', 'newcastle': 'Australia', 'australia': 'Australia',
  'auckland': 'New Zealand', 'wellington': 'New Zealand',
  'christchurch': 'New Zealand', 'new-zealand': 'New Zealand',
  // Europe
  'london': 'UK', 'aberdeen': 'UK', 'glasgow': 'UK', 'plymouth': 'UK',
  'scotland': 'UK', 'uk': 'UK',
  'oslo': 'Norway', 'bergen': 'Norway', 'stavanger': 'Norway', 'norway': 'Norway',
  'rotterdam': 'Netherlands', 'netherlands': 'Netherlands',
  'paris': 'France', 'france': 'France',
  'madrid': 'Spain', 'spain': 'Spain',
  'genoa': 'Italy', 'piraeus': 'Greece', 'italy': 'Italy',
  'germany': 'Germany', 'belgium': 'Belgium',
  // Africa
  'lagos': 'Nigeria', 'port-harcourt': 'Nigeria', 'nigeria': 'Nigeria',
  'cape-town': 'South Africa', 'johannesburg': 'South Africa', 'south-africa': 'South Africa',
  'accra': 'Ghana', 'nairobi': 'Kenya', 'casablanca': 'Morocco',
  'algeria': 'Algeria', 'angola': 'Angola', 'egypt': 'Egypt',
  // Americas
  'calgary': 'Canada', 'edmonton': 'Canada', 'fort-mcmurray': 'Canada',
  'toronto': 'Canada', 'vancouver': 'Canada', 'montreal': 'Canada', 'halifax': 'Canada',
  'mexico-city': 'Mexico', 'sao-paulo': 'Brazil', 'rio-de-janeiro': 'Brazil',
  'brazil': 'Brazil', 'argentina': 'Argentina', 'buenos-aires': 'Argentina',
  'colombia': 'Colombia', 'bogota': 'Colombia',
  'lima': 'Peru', 'santiago': 'Chile', 'trinidad': 'Trinidad and Tobago',
  // USA — default
};
const usaDefaults = new Set(['houston', 'austin', 'dallas', 'fort-worth', 'san-antonio', 'corpus-christi',
  'midland', 'odessa', 'beaumont', 'lake-charles', 'new-orleans', 'baton-rouge', 'mobile',
  'tulsa', 'oklahoma-city', 'denver', 'colorado-springs', 'cheyenne',
  'pittsburgh', 'cleveland', 'cincinnati', 'detroit', 'milwaukee', 'minneapolis', 'kansas-city',
  'chicago', 'philadelphia', 'charlotte', 'raleigh', 'nashville', 'louisville', 'st-louis',
  'norfolk', 'savannah', 'orlando', 'huntsville',
  'los-angeles', 'san-francisco', 'sacramento', 'bakersfield', 'phoenix', 'seattle', 'anchorage']);

const cityNameFromSlug = (s) => s.split('-').map(w => w === 'usa' || w === 'uk' || w === 'uae' ? w.toUpperCase() : (w[0]?.toUpperCase() ?? '') + w.slice(1)).join(' ');

const cityStub = (slug) => {
  const country = countryMap[slug] ?? (usaDefaults.has(slug) ? 'USA' : 'USA');
  const cityName = cityNameFromSlug(slug);
  return `import ErpLocationPage from '@/components/ErpLocationPage';
export default function NDTErp_${slug.replace(/-/g, '_')}() {
  return <ErpLocationPage city="${cityName}" country="${country}" slug="ndt-erp-${slug}" />;
}
`;
};

let cityWritten = 0;
for (const slug of missingCities) {
  const path = join(ROOT, `src/pages/ndt-erp-${slug}.tsx`);
  if (!existsSync(path)) {
    writeFileSync(path, cityStub(slug));
    cityWritten++;
  }
}
console.log(`✓ ${cityWritten} missing city ERP stubs written`);

// ---------- emit App.tsx route patch list ----------
const lazyLines = [];
const routeLines = [];
for (const m of DATA.modules) {
  const id = `ErpMod_${m.slug.replace(/-/g, '_')}`;
  lazyLines.push(`const ${id} = lazy(() => import("./pages/erp-modules/${m.slug}"));`);
  routeLines.push(`                  <Route path="/erp-modules/${m.slug}" element={<LazyRoute Component={${id}} />} />`);
}
for (const i of DATA.industries) {
  const id = `ErpInd_${i.slug.replace(/-/g, '_')}`;
  lazyLines.push(`const ${id} = lazy(() => import("./pages/erp-industries/${i.slug}"));`);
  routeLines.push(`                  <Route path="/erp-industries/${i.slug}" element={<LazyRoute Component={${id}} />} />`);
}
for (const slug of missingCities) {
  const id = `NDTErp_${slug.replace(/-/g, '_')}`;
  lazyLines.push(`const ${id} = lazy(() => import("./pages/ndt-erp-${slug}"));`);
  routeLines.push(`                  <Route path="/ndt-erp-${slug}" element={<LazyRoute Component={${id}} />} />`);
}
writeFileSync(join(__dirname, 'gen-erp-app-patches.txt'),
  '// === LAZY IMPORTS ===\n' + lazyLines.join('\n') + '\n\n// === ROUTES ===\n' + routeLines.join('\n') + '\n');
console.log(`✓ App.tsx patches written to scripts/gen-erp-app-patches.txt (${lazyLines.length} entries)`);

// ---------- emit prerender route entries ----------
const prerenderEntries = [];
for (const m of DATA.modules) {
  prerenderEntries.push({
    path: `/erp-modules/${m.slug}`,
    title: `${m.title} | Atlantis NDT ERP`,
    description: m.desc,
    bodyH1: m.h1,
    bodyText: m.intro.slice(0, 500),
  });
}
for (const i of DATA.industries) {
  prerenderEntries.push({
    path: `/erp-industries/${i.slug}`,
    title: `${i.title} | Atlantis NDT ERP`,
    description: i.desc,
    bodyH1: i.h1,
    bodyText: i.intro.slice(0, 500),
  });
}
writeFileSync(join(__dirname, 'gen-erp-prerender-entries.json'), JSON.stringify(prerenderEntries, null, 2));
console.log(`✓ ${prerenderEntries.length} prerender entries written to scripts/gen-erp-prerender-entries.json`);

console.log(`\nSummary:`);
console.log(`  Modules: ${DATA.modules.length}`);
console.log(`  Industries: ${DATA.industries.length}`);
console.log(`  Missing city stubs: ${cityWritten}`);
console.log(`  Total new TSX files: ${DATA.modules.length + DATA.industries.length + cityWritten}`);
