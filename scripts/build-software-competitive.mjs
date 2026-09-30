#!/usr/bin/env node
/**
 * SOFTWARE-COMPETITIVE builder — 2026-09-29.
 * ─────────────────────────────────────────────────────────────────────────────
 * Authoring lives in scripts/software-competitive/*.mjs (JS, so the copy can
 * share one vendor-facts table). This script validates it and writes the JSON
 * that BOTH render layers read, so crawlers and visitors see identical text:
 *
 *   src/data/software-competitive/pages/<key>.json   new pages (SoftwareComparePage + prerender)
 *   src/data/software-competitive/blocks/<key>.json  blocks inserted into existing pages
 *   src/data/software-competitive/compare-links.json link block for ERP city hubs + /erp/apps
 *   src/data/deep-content/<key>.json                 additive sections on existing depth/React pages
 *
 * Gates (build fails): title <= 60, description <= 160, no Atlantis price,
 * no "Odoo", no personal email, new pages >= 1,800 words, >= 3 contact CTAs.
 *
 *   node scripts/build-software-competitive.mjs
 */
import { writeFileSync, mkdirSync, existsSync, readFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { ALTERNATIVE_PAGES } from './software-competitive/alternatives.mjs';
import { FSM, FLOODLIGHT_DEEP, EXCEL_DEEP, GENERIC_ERP_DEEP } from './software-competitive/comparisons.mjs';
import { bestBlockHtml, BEST_FAQ, BEST_PATH, BEST_TITLE, BEST_H1, BEST_DESC } from './software-competitive/best-software.mjs';
import { COMPARE_LINKS_HTML, OWNER_LINK_HTML, OWNER_LINK_PAGES, words, atlantisSoftwareNode, faqNode, SITE } from './software-competitive/common.mjs';
import { bestSchema } from './software-competitive/best-software.mjs';
import { readdirSync } from 'fs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const OUT = join(ROOT, 'src/data/software-competitive');
const PUBLISHED = '2026-09-29';

const errors = [];
function gate(label, text) {
  const t = String(text);
  if (/odoo/i.test(t)) errors.push(`${label}: mentions Odoo`);
  if (/anu\.anoop485@gmail\.com/i.test(t)) errors.push(`${label}: personal email`);
  if (/[$£€₹]\s?\d/.test(t)) errors.push(`${label}: currency amount`);
  if (/\b(RBI|fitness[- ]for[- ]service|API 579|API 58[01]|Gantt|barcode)\b/i.test(t.replace(/barcodes, QR codes and RFID/gi, '')))
    errors.push(`${label}: forbidden capability term`);
  if (/aggregateRating|"price"/.test(t)) errors.push(`${label}: rating/price schema`);
}
const ctaCount = (html) => (html.match(/href="\/contact\?service=erp&amp;subject=/g) || []).length;

function writeJson(file, data) {
  mkdirSync(dirname(file), { recursive: true });
  writeFileSync(file, JSON.stringify(data, null, 2) + '\n');
}
const key = (path) => path.replace(/^\//, '').replace(/\//g, '__');

// ── New pages ────────────────────────────────────────────────────────────────
for (const p of [...ALTERNATIVE_PAGES, FSM]) {
  if (p.title.length > 60) errors.push(`${p.slug}: title ${p.title.length} chars`);
  if (p.description.length > 160) errors.push(`${p.slug}: description ${p.description.length} chars`);
  const w = words(p.bodyHtml);
  if (w < 1800 || w > 2700) errors.push(`${p.slug}: ${w} words (target 1,800-2,500)`);
  if (ctaCount(p.bodyHtml) < 3) errors.push(`${p.slug}: only ${ctaCount(p.bodyHtml)} contact CTAs`);
  gate(p.slug, p.title + p.description + p.bodyHtml + JSON.stringify(p.faq));
  console.log(`  page ${p.slug}  ${w} words, ${ctaCount(p.bodyHtml)} CTAs, title ${p.title.length}`);
  writeJson(join(OUT, 'pages', key(p.slug) + '.json'), {
    slug: p.slug, title: p.title, description: p.description, h1: p.h1,
    publishedAt: PUBLISHED, bodyHtml: p.bodyHtml.trim(), faq: p.faq,
    schema: [atlantisSoftwareNode(SITE + p.slug), faqNode(p.faq, SITE + p.slug)],
  });
}

// ── Block for /best-ndt-reporting-software-2026 ──────────────────────────────
{
  const html = bestBlockHtml().trim();
  if (BEST_TITLE.length > 60) errors.push(`best: title ${BEST_TITLE.length}`);
  if (BEST_DESC.length > 160) errors.push(`best: desc ${BEST_DESC.length}`);
  gate('best block', html + JSON.stringify(BEST_FAQ));
  console.log(`  block ${BEST_PATH}  ${words(html)} words, ${ctaCount(html)} CTAs, title ${BEST_TITLE.length}, desc ${BEST_DESC.length}`);
  writeJson(join(OUT, 'blocks', key(BEST_PATH) + '.json'), {
    path: BEST_PATH, title: BEST_TITLE, h1: BEST_H1, description: BEST_DESC, html, faq: BEST_FAQ,
    schema: [atlantisSoftwareNode(SITE + BEST_PATH, 'Atlantis NDT ERP and NDT Reports'), ...bestSchema()],
  });
}

// ── Compare-links block ──────────────────────────────────────────────────────
{
  const cityHubs = readdirSync(join(ROOT, 'src/data/deep-content'))
    .filter((f) => /^ndt-erp-.+.json$/.test(f) && f !== 'ndt-erp-solution.json' && !/^ndt-erp-vs-/.test(f))
    .map((f) => '/' + f.replace(/.json$/, '')).sort();
  console.log('  compare-links: ' + cityHubs.length + ' city hubs, ' + OWNER_LINK_PAGES.length + ' owner-link pages');
  writeJson(join(OUT, 'compare-links.json'), { html: COMPARE_LINKS_HTML, ownerHtml: OWNER_LINK_HTML, ownerLinkPages: OWNER_LINK_PAGES, cityHubs });
}

// ── Deep-content additions (existing pages; appended by scripts/deep-content.mjs) ─
for (const [path, html] of [
  ['/floodlight-software-alternatives', FLOODLIGHT_DEEP],
  ['/ndt-reporting-software-vs-excel', EXCEL_DEEP],
  ['/ndt-erp-vs-generic-erp', GENERIC_ERP_DEEP],
]) {
  gate(path, html);
  const f = join(ROOT, 'src/data/deep-content', key(path) + '.json');
  if (existsSync(f)) {
    const cur = JSON.parse(readFileSync(f, 'utf8'));
    if (!String(cur.generator || '').startsWith('software-competitive')) errors.push(`${path}: deep-content file exists from another stream; not overwriting`);
  }
  console.log(`  deep ${path}  ${words(html)} words, ${ctaCount(html)} CTAs`);
  writeJson(f, { path, generator: 'software-competitive 2026-09-29', bodyHtml: html.trim() });
}

if (errors.length) {
  console.error('\nSOFTWARE-COMPETITIVE gate failed:\n  ' + errors.join('\n  '));
  process.exit(1);
}
console.log('\nSOFTWARE-COMPETITIVE data written.');
