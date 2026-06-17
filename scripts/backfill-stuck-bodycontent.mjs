#!/usr/bin/env node
/**
 * Day-8 — Append a fenced block to scripts/prerender.mjs that explicitly
 * push routes for the 232 stuck Day-0 URLs (`ndt-erp-*` cities/states/regions
 * that never had a prerender entry → react-snap shipped blank shells → Google
 * marked them "Crawled — currently not indexed").
 *
 * Reads scripts/_stuck-bodycontent-audit.json (run audit-stuck-bodycontent.mjs
 * first). Inserts the fenced block immediately before the first
 * `routes.forEach` so all backfilled routes participate in HTML generation.
 *
 * Idempotent: skips if the fence already exists.
 *
 * CLAUDE.md §18 compliant — uses Demo/Quote on request, no pricing tokens.
 */
import { readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');

const FENCE_START = '// === Day-8 stuck-page bodyContent backfill ===';
const FENCE_END   = '// === /Day-8 stuck-page bodyContent backfill ===';

const audit = JSON.parse(readFileSync(join(ROOT, 'scripts', '_stuck-bodycontent-audit.json'), 'utf-8'));
const targets = [...audit.missing, ...audit.empty];

if (targets.length === 0) {
  console.log('No targets to backfill. Audit reports all routes have bodyContent.');
  process.exit(0);
}

const prerPath = join(ROOT, 'scripts', 'prerender.mjs');
let prer = readFileSync(prerPath, 'utf-8');

if (prer.includes(FENCE_START)) {
  console.log('Fence already present — skipping (idempotent).');
  process.exit(0);
}

// Locate the insertion anchor: the first `routes.forEach` (HTML generation).
const anchor = 'routes.forEach(route => {';
const idx = prer.indexOf(anchor);
if (idx === -1) {
  console.error('Could not locate `routes.forEach` insertion anchor.');
  process.exit(1);
}

// Build the fenced block. Each entry derives city name from kebab slug.
function slugToCity(slug) {
  return slug.split('-')
    .map(w => w.length > 0 ? (w[0].toUpperCase() + w.slice(1)) : w)
    .join(' ');
}

const lines = [FENCE_START];
lines.push(`// ${targets.length} URLs backfilled (missing prerender entries → blank-shell damage).`);
lines.push(`const _day8StuckBackfill = [`);
for (const p of targets) {
  // Path looks like /ndt-erp-baytown, /ndt-erp-pasadena-texas, etc.
  const slug = p.replace(/^\/ndt-erp-/, '');
  const city = slugToCity(slug);
  lines.push(`  { path: ${JSON.stringify(p)}, slug: ${JSON.stringify(slug)}, city: ${JSON.stringify(city)} },`);
}
lines.push(`];`);
lines.push(`for (const _r of _day8StuckBackfill) {`);
lines.push(`  routes.push({`);
lines.push(`    path: _r.path,`);
lines.push(`    title: \`Affordable NDT ERP in \${_r.city} — Fully Customizable, All 30+ Odoo Apps Included | Atlantis NDT\`,`);
lines.push(`    description: \`Atlantis NDT ERP for inspection companies in \${_r.city}. Affordable, accessible, fully customizable — all 30+ Odoo apps included. ASNT/ISO 9712 certification tracking, work orders, RBI software, calibration management, invoicing, CRM, payroll. Demo on request: info@atlantisndt.com.\`,`);
lines.push(`    canonical: \`\${SITE_URL}\${_r.path}\`,`);
lines.push(`    bodyContent: \`  <header><nav aria-label="Main Navigation"><a href="/">Home</a><a href="/erp">NDT ERP</a><a href="/consulting">Consulting</a><a href="/contact">Contact</a></nav></header>\\n  <main>\\n    <h1>Affordable NDT ERP in \${_r.city}</h1>\\n    <p>Atlantis NDT ERP — accessible, fully customizable, all 30+ Odoo apps included. Built for inspection companies in \${_r.city}: ASNT/ISO 9712 certification tracking, work orders, RBI software, calibration management, invoicing, CRM, payroll, and document control. Demo on request: info@atlantisndt.com. Quote on request — pricing varies by region and scope.</p>\\n    <p>Integrated with API 510, API 570, API 653 inspection scheduling, AWS D1.1 / ASME B31.3 weld traceability, and ISO 9001:2015 / ISO 17020 / ISO 17025 audit-ready documentation.</p>\\n    <p><a href="/erp">See full NDT ERP →</a> · <a href="/best-ndt-reporting-software-2026">Reporting Software</a> · <a href="/consulting/asnt-level-iii-consulting-services">ASNT Level III Consulting</a> · <a href="/digital-twins">Digital Twin Platform</a></p>\\n  </main>\`,`);
lines.push(`  });`);
lines.push(`}`);
lines.push(`console.log('🧱 Day-8 backfilled ' + _day8StuckBackfill.length + ' stuck ERP city routes (blank-shell repair).');`);
lines.push(FENCE_END);
lines.push('');

const block = lines.join('\n');

// Insert the block immediately before the routes.forEach line.
const before = prer.slice(0, idx);
const after  = prer.slice(idx);
const newPrer = before + block + '\n\n' + after;

writeFileSync(prerPath, newPrer, 'utf-8');
console.log(`Backfilled ${targets.length} routes into scripts/prerender.mjs.`);
console.log(`Block inserted at offset ${idx} (just before first routes.forEach).`);
