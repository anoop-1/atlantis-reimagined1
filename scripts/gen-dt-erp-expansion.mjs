#!/usr/bin/env node
/**
 * Generates DT + ERP wrapper pages for tier-2 cities + fills gaps.
 * Run: node scripts/gen-dt-erp-expansion.mjs
 */

import { writeFileSync, existsSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const PAGES_DIR = join(__dirname, "..", "src", "pages");

// ── Tier-2 cities (create DT + ERP wrappers for each) ──────────────────────
const tier2 = [
  { slug: "manama",          display: "Manama",          country: "Bahrain",      pascal: "Manama" },
  { slug: "odessa",          display: "Odessa",          country: "USA",          pascal: "Odessa" },
  { slug: "bergen",          display: "Bergen",          country: "Norway",       pascal: "Bergen" },
  { slug: "ras-al-khaimah",  display: "Ras Al Khaimah",  country: "UAE",          pascal: "RasAlKhaimah" },
  { slug: "sohar",           display: "Sohar",           country: "Oman",         pascal: "Sohar" },
  { slug: "basrah",          display: "Basrah",          country: "Iraq",         pascal: "Basrah" },
  { slug: "port-harcourt",   display: "Port Harcourt",   country: "Nigeria",      pascal: "PortHarcourt" },
  { slug: "midland",         display: "Midland",         country: "USA",          pascal: "Midland" },
  { slug: "anchorage",       display: "Anchorage",       country: "USA",          pascal: "Anchorage" },
  { slug: "bakersfield",     display: "Bakersfield",     country: "USA",          pascal: "Bakersfield" },
  { slug: "sharjah",         display: "Sharjah",         country: "UAE",          pascal: "Sharjah" },
  { slug: "melbourne",       display: "Melbourne",       country: "Australia",    pascal: "Melbourne" },
  { slug: "jubail",          display: "Jubail",          country: "Saudi Arabia", pascal: "Jubail" },
  { slug: "yanbu",           display: "Yanbu",           country: "Saudi Arabia", pascal: "Yanbu" },
  { slug: "edmonton",        display: "Edmonton",        country: "Canada",       pascal: "Edmonton" },
];

// ── Gap fills (already have one product, missing other) ────────────────────
const gapFills = [
  { product: "dt",  slug: "chennai",   display: "Chennai",   country: "India",       pascal: "Chennai" },
  { product: "erp", slug: "rotterdam", display: "Rotterdam", country: "Netherlands", pascal: "Rotterdam" },
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

let created = 0;
let skipped = 0;
const writeIf = (filePath, content) => {
  if (existsSync(filePath)) { skipped++; return; }
  writeFileSync(filePath, content, "utf8");
  created++;
};

for (const c of tier2) {
  writeIf(join(PAGES_DIR, `digital-twin-${c.slug}.tsx`), dtTpl(c));
  writeIf(join(PAGES_DIR, `ndt-erp-${c.slug}.tsx`), erpTpl(c));
}
for (const g of gapFills) {
  if (g.product === "dt")  writeIf(join(PAGES_DIR, `digital-twin-${g.slug}.tsx`), dtTpl(g));
  if (g.product === "erp") writeIf(join(PAGES_DIR, `ndt-erp-${g.slug}.tsx`),       erpTpl(g));
}

// ── Build App.tsx snippets ─────────────────────────────────────────────────
const dtLazy = tier2.map((c) =>
  `const DigitalTwin${c.pascal} = lazy(() => import("./pages/digital-twin-${c.slug}"));`).join("\n")
  + `\nconst DigitalTwin${gapFills[0].pascal} = lazy(() => import("./pages/digital-twin-${gapFills[0].slug}"));`;

const erpLazy = tier2.map((c) =>
  `const NDTErp${c.pascal} = lazy(() => import("./pages/ndt-erp-${c.slug}"));`).join("\n")
  + `\nconst NDTErp${gapFills[1].pascal} = lazy(() => import("./pages/ndt-erp-${gapFills[1].slug}"));`;

const dtRoutes = tier2.map((c) =>
  `                  <Route path="/digital-twin-${c.slug}" element={<LazyRoute Component={DigitalTwin${c.pascal}} />} />`
).join("\n")
  + `\n                  <Route path="/digital-twin-${gapFills[0].slug}" element={<LazyRoute Component={DigitalTwin${gapFills[0].pascal}} />} />`;

const erpRoutes = tier2.map((c) =>
  `                  <Route path="/ndt-erp-${c.slug}" element={<LazyRoute Component={NDTErp${c.pascal}} />} />`
).join("\n")
  + `\n                  <Route path="/ndt-erp-${gapFills[1].slug}" element={<LazyRoute Component={NDTErp${gapFills[1].pascal}} />} />`;

const today = new Date().toISOString().split("T")[0];
const sitemap = tier2.map((c) =>
  `  <url><loc>https://atlantisndt.com/digital-twin-${c.slug}</loc><lastmod>${today}</lastmod><changefreq>monthly</changefreq><priority>0.8</priority></url>
  <url><loc>https://atlantisndt.com/ndt-erp-${c.slug}</loc><lastmod>${today}</lastmod><changefreq>monthly</changefreq><priority>0.8</priority></url>`
).join("\n")
  + `\n  <url><loc>https://atlantisndt.com/digital-twin-${gapFills[0].slug}</loc><lastmod>${today}</lastmod><changefreq>monthly</changefreq><priority>0.8</priority></url>`
  + `\n  <url><loc>https://atlantisndt.com/ndt-erp-${gapFills[1].slug}</loc><lastmod>${today}</lastmod><changefreq>monthly</changefreq><priority>0.8</priority></url>`;

writeFileSync(
  join(__dirname, "dt-erp-expansion-snippets.txt"),
  `=== DT LAZY IMPORTS ===\n\n${dtLazy}\n\n=== ERP LAZY IMPORTS ===\n\n${erpLazy}\n\n=== DT ROUTES ===\n\n${dtRoutes}\n\n=== ERP ROUTES ===\n\n${erpRoutes}\n\n=== SITEMAP ===\n\n${sitemap}\n`,
  "utf8"
);

console.log(`DT + ERP expansion: ${created} files created, ${skipped} skipped.`);
console.log(`Cities: ${tier2.length} tier-2 × 2 products + ${gapFills.length} gap fills`);
