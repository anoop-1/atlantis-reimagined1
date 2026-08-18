#!/usr/bin/env node
import { assertPermutationGenAllowed } from './_permutation-freeze.mjs';
assertPermutationGenAllowed('gen-tier3-expansion.mjs');

/**
 * Tier-3 city expansion — adds DT + ERP + Reporting wrapper pages across
 * USA, Canada, Europe, Australia, New Zealand industrial hubs.
 * Run: node scripts/gen-tier3-expansion.mjs
 */
import { writeFileSync, existsSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const PAGES_DIR = join(__dirname, "..", "src", "pages");

// Tier-3 cities (US/CA/EU/AU/NZ) — well-paying industrial NDT markets
const cities = [
  // ── USA (well-paying oil, aerospace, power, chemical hubs) ──
  { slug: "tulsa",                display: "Tulsa",                country: "USA",         pascal: "Tulsa" },
  { slug: "beaumont",             display: "Beaumont",             country: "USA",         pascal: "Beaumont" },
  { slug: "mobile",               display: "Mobile",               country: "USA",         pascal: "Mobile" },
  { slug: "st-louis",             display: "St. Louis",            country: "USA",         pascal: "StLouis" },
  { slug: "cleveland",            display: "Cleveland",            country: "USA",         pascal: "Cleveland" },
  { slug: "cincinnati",           display: "Cincinnati",           country: "USA",         pascal: "Cincinnati" },
  { slug: "nashville",            display: "Nashville",            country: "USA",         pascal: "Nashville" },
  { slug: "louisville",           display: "Louisville",           country: "USA",         pascal: "Louisville" },
  { slug: "kansas-city",          display: "Kansas City",          country: "USA",         pascal: "KansasCity" },
  { slug: "minneapolis",          display: "Minneapolis",          country: "USA",         pascal: "Minneapolis" },
  { slug: "milwaukee",            display: "Milwaukee",            country: "USA",         pascal: "Milwaukee" },
  { slug: "charlotte",            display: "Charlotte",            country: "USA",         pascal: "Charlotte" },
  // ── Canada (oil sands, power, aerospace) ──
  { slug: "toronto",              display: "Toronto",              country: "Canada",      pascal: "Toronto" },
  { slug: "vancouver",            display: "Vancouver",            country: "Canada",      pascal: "Vancouver" },
  { slug: "montreal",             display: "Montreal",             country: "Canada",      pascal: "Montreal" },
  { slug: "fort-mcmurray",        display: "Fort McMurray",        country: "Canada",      pascal: "FortMcMurray" },
  { slug: "halifax",              display: "Halifax",              country: "Canada",      pascal: "Halifax" },
  // ── Europe (industrial/offshore/aerospace hubs not yet covered) ──
  { slug: "glasgow",              display: "Glasgow",              country: "UK",          pascal: "Glasgow" },
  { slug: "paris",                display: "Paris",                country: "France",      pascal: "Paris" },
  { slug: "madrid",               display: "Madrid",               country: "Spain",       pascal: "Madrid" },
  { slug: "genoa",                display: "Genoa",                country: "Italy",       pascal: "Genoa" },
  { slug: "piraeus",              display: "Piraeus",              country: "Greece",      pascal: "Piraeus" },
  { slug: "plymouth",             display: "Plymouth",             country: "UK",          pascal: "Plymouth" },
  { slug: "newcastle",            display: "Newcastle",            country: "UK",          pascal: "Newcastle" },
  // ── Australia (LNG, iron ore, defence) ──
  { slug: "sydney",               display: "Sydney",               country: "Australia",   pascal: "Sydney" },
  { slug: "karratha",             display: "Karratha",             country: "Australia",   pascal: "Karratha" },
  { slug: "gladstone",            display: "Gladstone",            country: "Australia",   pascal: "Gladstone" },
  { slug: "darwin",               display: "Darwin",               country: "Australia",   pascal: "Darwin" },
  // ── New Zealand (marine, geothermal power, food processing) ──
  { slug: "auckland",             display: "Auckland",             country: "New Zealand", pascal: "Auckland" },
  { slug: "wellington",           display: "Wellington",           country: "New Zealand", pascal: "Wellington" },
  { slug: "christchurch",         display: "Christchurch",         country: "New Zealand", pascal: "Christchurch" },
];

const dtTpl = (c) => `import DigitalTwinLocationPage from '@/components/DigitalTwinLocationPage';

export default function DigitalTwin${c.pascal}() {
    return <DigitalTwinLocationPage city="${c.display}" country="${c.country}" slug="digital-twin-${c.slug}" />;
}
`;
const erpTpl = (c) => `import ErpLocationPage from '@/components/ErpLocationPage';

export default function NDTErp${c.pascal}() {
  return <ErpLocationPage city="${c.display}" country="${c.country}" slug="ndt-erp-${c.slug}" />;
}
`;
const repTpl = (c) => `import ReportingLocationPage from '@/components/ReportingLocationPage';

export default function NDTReporting${c.pascal}() {
  return <ReportingLocationPage city="${c.display}" country="${c.country}" slug="ndt-reporting-${c.slug}" />;
}
`;

let created = 0, skipped = 0;
const writeIf = (p, c) => {
  if (existsSync(p)) { skipped++; return; }
  writeFileSync(p, c, "utf8");
  created++;
};

for (const c of cities) {
  writeIf(join(PAGES_DIR, `digital-twin-${c.slug}.tsx`), dtTpl(c));
  writeIf(join(PAGES_DIR, `ndt-erp-${c.slug}.tsx`), erpTpl(c));
  writeIf(join(PAGES_DIR, `ndt-reporting-${c.slug}.tsx`), repTpl(c));
}

// App.tsx snippets
const dtLazy = cities.map((c) => `const DigitalTwin${c.pascal} = lazy(() => import("./pages/digital-twin-${c.slug}"));`).join("\n");
const erpLazy = cities.map((c) => `const NDTErp${c.pascal} = lazy(() => import("./pages/ndt-erp-${c.slug}"));`).join("\n");
const repLazy = cities.map((c) => `const NDTReporting${c.pascal} = lazy(() => import("./pages/ndt-reporting-${c.slug}"));`).join("\n");

const dtRoutes = cities.map((c) => `                  <Route path="/digital-twin-${c.slug}" element={<LazyRoute Component={DigitalTwin${c.pascal}} />} />`).join("\n");
const erpRoutes = cities.map((c) => `                  <Route path="/ndt-erp-${c.slug}" element={<LazyRoute Component={NDTErp${c.pascal}} />} />`).join("\n");
const repRoutes = cities.map((c) => `                  <Route path="/ndt-reporting-${c.slug}" element={<LazyRoute Component={NDTReporting${c.pascal}} />} />`).join("\n");

// prerender.mjs snippets
const dtPrerender = cities.map((c) =>
  `  { slug: '${c.slug}', city: '${c.display}', country: '${c.country}', assets: 'industrial inspection assets in ${c.display}, ${c.country}' },`
).join("\n");
const erpPrerender = cities.map((c) =>
  `  { city: '${c.display}', country: '${c.country}', slug: '${c.slug}', industries: 'inspection operations in ${c.display}, ${c.country}' },`
).join("\n");
const repPrerender = cities.map((c) =>
  `  { city: '${c.display}', country: '${c.country}', slug: '${c.slug}' },`
).join("\n");

// URL list for GSC
const urls = cities.flatMap((c) => [
  `https://atlantisndt.com/digital-twin-${c.slug}`,
  `https://atlantisndt.com/ndt-erp-${c.slug}`,
  `https://atlantisndt.com/ndt-reporting-${c.slug}`,
]).join("\n");

writeFileSync(
  join(__dirname, "tier3-expansion-snippets.txt"),
  `=== DT LAZY IMPORTS ===\n${dtLazy}\n\n=== ERP LAZY IMPORTS ===\n${erpLazy}\n\n=== REPORTING LAZY IMPORTS ===\n${repLazy}\n\n=== DT ROUTES ===\n${dtRoutes}\n\n=== ERP ROUTES ===\n${erpRoutes}\n\n=== REPORTING ROUTES ===\n${repRoutes}\n\n=== PRERENDER DT ===\n${dtPrerender}\n\n=== PRERENDER ERP ===\n${erpPrerender}\n\n=== PRERENDER REPORTING ===\n${repPrerender}\n\n=== GSC URL LIST ===\n${urls}\n`,
  "utf8"
);

console.log(`Tier-3 expansion: ${created} files created, ${skipped} skipped.`);
console.log(`Cities: ${cities.length} × 3 products = ${cities.length * 3} expected pages`);
