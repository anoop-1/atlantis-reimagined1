#!/usr/bin/env node
/**
 * Route authored page content into the right pipeline. 2026-09-02.
 * ─────────────────────────────────────────────────────────────────────────────
 * Content arrives as a flat array of pages in the citation-spec shape. Two
 * different pipelines consume it and sending a page to the wrong one is a real
 * bug, not a stylistic choice:
 *
 *   EXISTING path -> scripts/page-upgrades.json
 *       applyPageUpgrades APPENDS to a route that already exists. Feeding an
 *       existing path to the depth-page builder instead would push a SECOND
 *       route object onto the same path and let whichever ran last silently win.
 *
 *   NEW path      -> scripts/drafted-pages.json
 *       build-depth-pages.mjs creates the route. It also REWRITES its outputs
 *       wholesale from its input file, so this appends to the cumulative file
 *       rather than handing it a fresh one — passing only the new pages once
 *       replaced 52 live pages with 9.
 *
 * Existence is decided against dist/, which is the built site, not against a
 * guess about the URL shape.
 *
 *   node scripts/merge-authored-pages.mjs --in <authored.json>
 *   node scripts/merge-authored-pages.mjs --in <authored.json> --dry-run
 */
import { readFileSync, writeFileSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const args = process.argv.slice(2);
const IN = args.includes('--in') ? args[args.indexOf('--in') + 1] : null;
const DRY = args.includes('--dry-run');

if (!IN || !existsSync(IN)) {
  console.error('Usage: node scripts/merge-authored-pages.mjs --in <authored.json> [--dry-run]');
  process.exit(1);
}

const words = (s) => String(s ?? '').trim().split(/\s+/).filter(Boolean).length;

/** Hard rules from CLAUDE.md, enforced here so nothing reaches the site unchecked. */
function policyErrors(p) {
  const errs = [];
  const blob = JSON.stringify(p);

  // An Atlantis price. Third-party fees, salary bands and competitor list
  // prices are explicitly permitted, so the test is contextual, not a blanket
  // ban on currency — a blanket sweep once destroyed legitimate salary content.
  const RATE = /[$£€]\s?\d[\d,]*(?:\.\d+)?\s*(?:per|\/)\s*(?:day|hour|seat|user|licen[cs]e|month|year)/gi;
  const MARKET = /(salary|consultant|contractor|market|industry|technician|inspector|freelance|typical|earn|pay|vendor|list price|competitor|alternative)/i;
  const SELF = /(atlantis|\bour\b|\bwe\b)/i;
  for (const m of blob.matchAll(RATE)) {
    const w = blob.slice(Math.max(0, m.index - 90), m.index + 60);
    if (MARKET.test(w)) continue;
    if (SELF.test(w)) errs.push(`possible Atlantis price: "${m[0]}"`);
  }
  if (/anu\.anoop485@gmail\.com/i.test(blob)) errs.push('personal email must never appear publicly');
  // Atlantis does not sell API 510/570/653 training; those pages exist to
  // attract traffic. A page claiming otherwise is a false commercial statement.
  if (/\b(we|atlantis)\b[^.]{0,80}\b(offers?|provides?|delivers?|sells?|runs?)\b[^.]{0,40}\bAPI (510|570|653)[^.]{0,30}\b(training|course)/i.test(blob)) {
    errs.push('implies Atlantis sells API 510/570/653 training');
  }
  return errs;
}

/** The citation spec, matching the depth-page builder so nothing is rejected later. */
function specErrors(p) {
  const errs = [];
  if (!p.slug?.startsWith('/')) errs.push('slug missing or not a path');
  if (!p.title) errs.push('no title');
  else if (p.title.length > 60) errs.push(`title ${p.title.length} chars, must be <= 60`);
  if (!p.description) errs.push('no description');
  else if (p.description.length > 155) errs.push(`description ${p.description.length} chars, must be <= 155`);
  const a = words(p.answer);
  if (a < 40 || a > 70) errs.push(`answer ${a} words, must be 40-70`);
  if (!p.source || p.source.length < 8) errs.push('no named source');
  const t = p.table;
  if (!t) errs.push('no table');
  else {
    if (!t.caption) errs.push('table has no caption');
    if (!Array.isArray(t.columns) || t.columns.length < 3) errs.push(`table needs 3+ columns, has ${t.columns?.length ?? 0}`);
    if (!Array.isArray(t.rows) || t.rows.length < 3) errs.push(`table needs 3+ rows, has ${t.rows?.length ?? 0}`);
    else if (t.rows.some((r) => r.length !== t.columns.length)) errs.push('table row/column count mismatch');
  }
  if (!Array.isArray(p.facets) || p.facets.length !== 6) errs.push(`${p.facets?.length ?? 0} facets, need exactly 6`);
  else if (p.facets.some((f) => !String(f.q || '').trim().endsWith('?'))) errs.push('a facet heading is not a question');
  if (!Array.isArray(p.sections) || p.sections.length < 3) errs.push(`${p.sections?.length ?? 0} sections, need 3+`);
  return errs;
}

const incoming = JSON.parse(readFileSync(IN, 'utf-8'));
const pages = Array.isArray(incoming) ? incoming : incoming.pages || [];
console.log(`Incoming pages: ${pages.length}`);

const upgradesPath = join(__dirname, 'page-upgrades.json');
const draftedPath = join(__dirname, 'drafted-pages.json');
const upgrades = JSON.parse(readFileSync(upgradesPath, 'utf-8'));
const drafted = JSON.parse(readFileSync(draftedPath, 'utf-8'));
const haveUpgrade = new Set(upgrades.map((p) => p.slug));
const haveDrafted = new Set(drafted.map((p) => p.slug));

const toUpgrade = [], toCreate = [], rejected = [], skipped = [];

for (const raw of pages) {
  const p = { ...raw };
  if (!p.slug) { rejected.push({ slug: '(none)', errs: ['no slug'] }); continue; }
  if (!p.slug.startsWith('/')) p.slug = `/${p.slug}`;
  // The builder requires an h1 distinct from the title tag.
  if (!p.h1) p.h1 = p.title;

  const errs = [...specErrors(p), ...policyErrors(p)];
  if (errs.length) { rejected.push({ slug: p.slug, errs }); continue; }

  if (haveUpgrade.has(p.slug) || haveDrafted.has(p.slug)) {
    skipped.push(p.slug);
    continue;
  }

  const built = join(ROOT, 'dist', ...p.slug.replace(/^\//, '').split('/'), 'index.html');
  if (existsSync(built)) toUpgrade.push(p);
  else toCreate.push(p);
}

console.log(`\n  upgrade (path exists in dist/): ${toUpgrade.length}`);
toUpgrade.forEach((p) => console.log(`      ${p.slug}`));
console.log(`  create  (new route):            ${toCreate.length}`);
toCreate.forEach((p) => console.log(`      ${p.slug}`));
if (skipped.length) {
  console.log(`  skipped (already in a pipeline): ${skipped.length}`);
  skipped.forEach((s) => console.log(`      ${s}`));
}
if (rejected.length) {
  console.log(`\n  REJECTED: ${rejected.length}`);
  rejected.forEach((r) => console.log(`      ${r.slug}\n         - ${r.errs.join('\n         - ')}`));
}

if (DRY) {
  console.log('\n--dry-run: nothing written.');
  process.exit(rejected.length ? 1 : 0);
}

if (toUpgrade.length) {
  writeFileSync(upgradesPath, JSON.stringify([...upgrades, ...toUpgrade], null, 2));
  console.log(`\n✅ page-upgrades.json: ${upgrades.length} -> ${upgrades.length + toUpgrade.length}`);
}
if (toCreate.length) {
  // APPEND to the cumulative file. build-depth-pages.mjs rewrites its outputs
  // from whatever it is given, so handing it only the new pages would delete
  // every existing depth page.
  writeFileSync(draftedPath, JSON.stringify([...drafted, ...toCreate], null, 2));
  console.log(`✅ drafted-pages.json: ${drafted.length} -> ${drafted.length + toCreate.length}`);
  console.log('   next: node scripts/build-depth-pages.mjs --in drafted-pages.json');
  console.log('         node scripts/sync-depth-routes.mjs');
}
