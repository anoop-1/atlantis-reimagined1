#!/usr/bin/env node
/**
 * Wires the newly-created ERP pages from generate-erp-pages-2026-05-23.mjs
 * into src/App.tsx (lazy imports + Routes) and src/data/curated-cities.ts
 * (ERP_CITY_PAGE_SLUGS + CURATED_CITY_SLUGS).
 *
 * Idempotent: skips lines already present.
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.join(__dirname, '..');
const APP_TSX = path.join(ROOT, 'src', 'App.tsx');
const CURATED_TS = path.join(ROOT, 'src', 'data', 'curated-cities.ts');
const STATE = path.join(__dirname, 'erp-pages-2026-05-23-state.json');

const state = JSON.parse(fs.readFileSync(STATE, 'utf8'));
const group1 = state.group1; // sub-cities (ndt-erp-* stubs)
const group2 = state.group2; // countries (ndt-erp-* stubs)
const group3 = state.group3; // /erp/{slug} pillars
const group4 = state.group4; // /erp/{slug} triple crosses

// ─── Patch App.tsx ─────────────────────────────────────────────────────────
let app = fs.readFileSync(APP_TSX, 'utf8');

// Build the import lines.
const stubImports = [...group1, ...group2].map(
  (p) => `const ${p.compName} = lazy(() => import("./pages/${p.slug}"));`
).join('\n');

const erpModuleImports = [...group3, ...group4].map(
  (p) => `const ${p.compName} = lazy(() => import("./pages/erp/${p.slug}"));`
).join('\n');

const stubRoutes = [...group1, ...group2].map(
  (p) => `                  <Route path="/${p.slug}" element={<LazyRoute Component={${p.compName}} />} />`
).join('\n');

const erpModuleRoutes = [...group3, ...group4].map(
  (p) => `                  <Route path="${p.route}" element={<LazyRoute Component={${p.compName}} />} />`
).join('\n');

// Anchor: append imports right before "const NDTTrainingSaudiArabia = lazy("
const IMPORT_ANCHOR = 'const NDTTrainingSaudiArabia = lazy(() => import("./pages/ndt-training-saudi-arabia"));';
if (!app.includes('// === ERP Expansion 2026-05-23 ===')) {
  const importBlock = `// === ERP Expansion 2026-05-23 (sub-cities + countries + pillars + triple-cross) ===
${stubImports}
${erpModuleImports}
// === END ERP Expansion 2026-05-23 ===

`;
  if (app.includes(IMPORT_ANCHOR)) {
    app = app.replace(IMPORT_ANCHOR, importBlock + IMPORT_ANCHOR);
  } else {
    console.error('Could not find IMPORT_ANCHOR');
    process.exit(1);
  }
}

// Route anchor: insert before the </Routes> closing tag (find last existing ndt-erp route)
// We'll insert after the "ndt-erp-christchurch" route
const ROUTE_ANCHOR = '<Route path="/ndt-erp-christchurch" element={<LazyRoute Component={NDTErpChristchurch} />} />';
if (!app.includes('{/* === ERP Expansion 2026-05-23 routes === */}')) {
  const routeBlock = `${ROUTE_ANCHOR}
                  {/* === ERP Expansion 2026-05-23 routes === */}
${stubRoutes}
${erpModuleRoutes}
                  {/* === END ERP Expansion 2026-05-23 routes === */}`;
  if (app.includes(ROUTE_ANCHOR)) {
    app = app.replace(ROUTE_ANCHOR, routeBlock);
  } else {
    console.error('Could not find ROUTE_ANCHOR');
    process.exit(1);
  }
}

fs.writeFileSync(APP_TSX, app, 'utf8');
console.log(`Patched ${APP_TSX}`);

// ─── Patch curated-cities.ts ───────────────────────────────────────────────
let curated = fs.readFileSync(CURATED_TS, 'utf8');

// Build the new ERP_CITY_PAGE_SLUGS entries (just the slug portion after "ndt-erp-")
const newErpCitySlugs = [...group1, ...group2].map((p) =>
  p.slug.replace(/^ndt-erp-/, '')
);

// Add to ERP_CITY_PAGE_SLUGS
const ERP_SLUGS_ANCHOR = "'uk','usa','vancouver','vietnam','vizag','wellington','yanbu',";
if (!curated.includes('// === ERP Expansion 2026-05-23 ===')) {
  const newLine = `${ERP_SLUGS_ANCHOR}
  // === ERP Expansion 2026-05-23 ===
  ${newErpCitySlugs.map((s) => `'${s}'`).join(',')},`;
  if (curated.includes(ERP_SLUGS_ANCHOR)) {
    curated = curated.replace(ERP_SLUGS_ANCHOR, newLine);
  } else {
    console.error('Could not find ERP_SLUGS_ANCHOR');
    process.exit(1);
  }
}

// Also add the same slugs to CURATED_CITY_SLUGS so they get index, follow
// Find the closing "]);" of the CURATED_CITY_SLUGS set
// We'll insert before the matching close bracket.
const CURATED_CLOSE_ANCHOR_REGEX = /(export const CURATED_CITY_SLUGS: Set<string> = new Set\(\[)([\s\S]*?)(\n\]\);)/;
if (!curated.includes('// === ERP Expansion 2026-05-23 (curated) ===')) {
  const match = curated.match(CURATED_CLOSE_ANCHOR_REGEX);
  if (!match) {
    console.error('Could not find CURATED_CITY_SLUGS bracket');
    process.exit(1);
  }
  const insertion = `\n  // === ERP Expansion 2026-05-23 (curated) ===\n  ${newErpCitySlugs.map((s) => `'${s}'`).join(', ')},\n`;
  curated = curated.replace(CURATED_CLOSE_ANCHOR_REGEX, `$1$2${insertion}$3`);
}

fs.writeFileSync(CURATED_TS, curated, 'utf8');
console.log(`Patched ${CURATED_TS}`);

console.log('\n=== Wiring summary ===');
console.log(`stub imports added:       ${(group1.length + group2.length)}`);
console.log(`erp-module imports added: ${(group3.length + group4.length)}`);
console.log(`stub routes added:        ${(group1.length + group2.length)}`);
console.log(`erp-module routes added:  ${(group3.length + group4.length)}`);
console.log(`new erp city slugs:       ${newErpCitySlugs.length}`);
