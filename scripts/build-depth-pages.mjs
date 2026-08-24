#!/usr/bin/env node
/**
 * Depth-page builder — Phase 2 of the 90-day plan. 2026-08-18.
 * ─────────────────────────────────────────────────────────────────────────────
 * Takes drafted page content as JSON, validates it against the citation spec,
 * and emits everything the two render layers need:
 *
 *   src/data/depth-pages.json      consumed by src/components/DepthPage.tsx
 *                                  (human visitors)
 *   scripts/depth-pages-routes.mjs consumed by scripts/prerender.mjs
 *                                  (crawlers and AI retrievers — the layer that
 *                                  actually matters for citation)
 *   scripts/depth-pages-routes.txt the <Route> lines to paste into App.tsx
 *
 * A page is REJECTED, not warned about, if it fails the spec. That is
 * deliberate: this site already carries ~5,000 pages of which 116 produce 80%
 * of clicks, so publishing a thin page is a net negative. The bar is the point.
 *
 *   node scripts/build-depth-pages.mjs --in drafted-pages.json
 *   node scripts/build-depth-pages.mjs --in drafted-pages.json --strict
 */
import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { sanitiseDeep } from './sanitise-content.mjs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const args = process.argv.slice(2);
const IN = args.includes('--in') ? args[args.indexOf('--in') + 1] : 'drafted-pages.json';
const STRICT = args.includes('--strict');

const inPath = join(__dirname, IN);
if (!existsSync(inPath)) {
  console.error(`Input not found: ${inPath}`);
  process.exit(1);
}

const HEDGES = ['it depends', 'varies by', 'varies depending', 'generally speaking', 'in most cases', 'may vary', 'could be', 'might be'];
const RATE = /[$£€]\s?\d[\d,]*(?:\.\d+)?\s*(?:per|\/)\s*(?:day|hour|seat|user|licen[cs]e|month|year)/gi;
const MARKET = /(salary|consultant|contractor|market|industry|technician|inspector|freelance|typical|earn|pay|vendor|list price)/i;
const SELF = /(atlantis|\bour\b|\bwe\b)/i;
const words = (s) => String(s ?? '').trim().split(/\s+/).filter(Boolean).length;

function validate(p) {
  const errs = [], warns = [];
  if (!p.slug?.startsWith('/')) errs.push('slug missing or not a path');
  if (!p.title) errs.push('no title');
  else if (p.title.length > 75) warns.push(`title ${p.title.length} chars, may truncate`);
  if (!p.description) errs.push('no description');
  else if (p.description.length < 100 || p.description.length > 175) warns.push(`description ${p.description.length} chars, target 150-165`);
  if (!p.h1) errs.push('no h1');
  if (p.h1 && p.title && p.h1.trim() === p.title.trim()) warns.push('h1 identical to title tag');

  const a = words(p.answer);
  if (a < 40 || a > 70) errs.push(`answer ${a} words, must be 40-70`);
  const e = words(p.expansion);
  if (e < 130 || e > 165) warns.push(`expansion ${e} words, target 130-165`);
  if (!p.source || p.source.length < 8) errs.push('no named source');

  const blob = [p.answer, p.expansion, ...(p.facets ?? []).map((f) => f.a),
    ...(p.sections ?? []).flatMap((s) => s.paragraphs ?? []), ...(p.faq ?? []).map((f) => f.a)].join(' ').toLowerCase();

  const hedged = HEDGES.filter((h) => blob.includes(h));
  if (hedged.length) warns.push(`hedging in body: ${hedged.join(', ')}`);

  for (const m of blob.matchAll(RATE)) {
    const w = blob.slice(Math.max(0, m.index - 90), m.index + 60);
    if (MARKET.test(w)) continue;
    if (SELF.test(w)) errs.push(`possible Atlantis price: "${m[0]}"`);
  }
  if (/anu\.anoop485@gmail\.com/i.test(blob)) errs.push('personal email must never appear publicly');

  const t = p.table;
  if (!t) errs.push('no table');
  else {
    if (!t.caption) errs.push('table has no caption');
    if (!Array.isArray(t.columns) || t.columns.length < 3) errs.push(`table has ${t.columns?.length ?? 0} columns, need 3+`);
    if (!Array.isArray(t.rows) || t.rows.length < 3) errs.push(`table has ${t.rows?.length ?? 0} rows, need 3+`);
    else if (t.rows.some((r) => r.length !== t.columns.length)) errs.push('row/column count mismatch');
  }

  if (!Array.isArray(p.facets) || p.facets.length !== 6) errs.push(`${p.facets?.length ?? 0} facets, need exactly 6`);
  else if (p.facets.some((f) => !f.q?.trim().endsWith('?'))) errs.push('a facet heading is not phrased as a question');

  const secWords = (p.sections ?? []).reduce((n, s) => n + (s.paragraphs ?? []).reduce((m, x) => m + words(x), 0), 0);
  if (!Array.isArray(p.sections) || p.sections.length < 6) errs.push(`${p.sections?.length ?? 0} sections, need 6+`);
  if (secWords < 900) errs.push(`body is ${secWords} words across sections — too thin to publish on this site`);
  else if (secWords < 1400) warns.push(`body ${secWords} words, briefs targeted 2,000+`);

  if (!Array.isArray(p.faq) || p.faq.length < 4) errs.push(`${p.faq?.length ?? 0} FAQ pairs, need 4+`);

  return { errs, warns, secWords };
}

const raw = JSON.parse(readFileSync(inPath, 'utf-8'));
const pages = Array.isArray(raw) ? raw.flatMap((x) => (x && x.pages ? x.pages : x)).filter(Boolean) : raw.pages ?? [];

// Agents reach for Markdown out of habit, and every field here is HTML-escaped
// before it reaches the page, so a Markdown link would render as literal syntax.
// Normalised BEFORE validation so the word counts that gate the citation band are
// measured on the text a reader actually sees.
{
  const _n = sanitiseDeep(pages);
  if (_n) console.log(`  normalised ${_n} field(s) containing Markdown`);
}
console.log(`\nValidating ${pages.length} depth page(s) from ${IN}\n`);

const accepted = [];
let rejected = 0;
for (const p of pages) {
  const { errs, warns, secWords } = validate(p);
  if (errs.length) {
    rejected++;
    console.log(`  REJECT ${p.slug}`);
    for (const x of errs) console.log(`         x ${x}`);
  } else {
    accepted.push(p);
    console.log(`  accept ${p.slug}  (${secWords} body words)${warns.length ? '  [' + warns.join('; ') + ']' : ''}`);
  }
}
console.log(`\n  ${accepted.length} accepted, ${rejected} rejected\n`);

if (!accepted.length) {
  if (STRICT) process.exit(1);
  process.exit(0);
}

// ── 1. Data for the React layer ──────────────────────────────────────────────
const dataDir = join(__dirname, '..', 'src', 'data');
mkdirSync(dataDir, { recursive: true });
writeFileSync(join(dataDir, 'depth-pages.json'), JSON.stringify(accepted, null, 2));

// ── 2. Static HTML for the prerender layer ───────────────────────────────────
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

/**
 * Escape a field, THEN turn its markdown links into real anchors.
 *
 * Order matters: escaping first means any stray angle bracket in the prose is
 * neutralised, and only the anchors this function emits carry live markup. The
 * href is restricted to site-relative paths and https URLs — a link written as
 * javascript: or data: is dropped back to plain text rather than rendered.
 *
 * This exists because every in-body link the content agents wrote was being
 * discarded by the sanitiser. 148 depth pages shipped with none.
 */
const MD_LINK_RE = /\[([^\]]+)\]\(([^)]+)\)/g;
function renderInline(s) {
  return esc(s).replace(MD_LINK_RE, (whole, text, href) => {
    const h = String(href).trim();
    if (!/^(\/[^\s]*|https:\/\/[^\s]+)$/.test(h)) return text;
    return `<a href="${h}">${text}</a>`;
  });
}

function renderBody(p) {
  const parts = [];
  parts.push('  <header><nav aria-label="Main Navigation"><a href="/">Home</a><a href="/consulting">Consulting</a><a href="/training">Training</a><a href="/erp">ERP</a><a href="/digital-twins">Digital Twins</a><a href="/contact">Contact</a></nav></header>');
  parts.push('  <main>');
  parts.push(`    <h1>${esc(p.h1)}</h1>`);
  parts.push(
    '    <section data-citation-block="answer" aria-label="Direct answer">' +
    `<p>${renderInline(p.answer)}</p><p>${renderInline(p.expansion)}</p><p><strong>Source:</strong> ${esc(p.source)}</p></section>`
  );
  parts.push(
    '    <div data-citation-block="byline">Technically reviewed by <a href="/authors/anoop-rayavarapu">Anoop Rayavarapu</a> — ASNT NDT Level III (UT, RT, MT, PT, VT, ET) · API 653 · ISO 9001:2015 Lead Auditor</div>'
  );
  const t = p.table;
  parts.push(
    '    <figure data-citation-block="table"><table><caption>' + esc(t.caption) + '</caption>' +
    '<thead><tr>' + t.columns.map((c) => `<th scope="col">${esc(c)}</th>`).join('') + '</tr></thead><tbody>' +
    t.rows.map((r) => '<tr>' + r.map((c, i) => (i === 0 ? `<th scope="row">${esc(c)}</th>` : `<td>${esc(c)}</td>`)).join('') + '</tr>').join('') +
    '</tbody></table>' + (t.note ? `<figcaption>${esc(t.note)}</figcaption>` : '') + '</figure>'
  );
  for (const s of p.sections) {
    parts.push(`    <h2>${esc(s.heading)}</h2>`);
    for (const para of s.paragraphs) parts.push(`    <p>${renderInline(para)}</p>`);
  }
  for (const f of p.facets) {
    parts.push(`    <section data-citation-block="facet"><h2>${esc(f.q)}</h2><p>${renderInline(f.a)}</p></section>`);
  }
  parts.push('    <p><a href="/contact">Request a consultation</a></p>');
  parts.push('  </main>');
  return parts.join('\n');
}

const routes = accepted.map((p) => ({
  path: p.slug,
  title: p.title,
  description: p.description,
  h1: p.h1,
  bodyContent: renderBody(p),
  structuredData: {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'TechArticle',
        headline: p.h1,
        description: p.description,
        author: { '@type': 'Person', '@id': 'https://atlantisndt.com/#anoop-rayavarapu', name: 'Anoop Rayavarapu' },
        publisher: { '@type': 'Organization', name: 'Atlantis NDT', url: 'https://atlantisndt.com' },
        mainEntityOfPage: `https://atlantisndt.com${p.slug}`,
      },
      {
        '@type': 'FAQPage',
        mainEntity: p.faq.map((f) => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
      },
    ],
  },
}));

writeFileSync(join(__dirname, 'depth-pages-routes.mjs'),
`/**
 * Depth-page prerender routes — GENERATED, do not hand-edit.
 * Produced by scripts/build-depth-pages.mjs from drafted JSON.
 * Every page passed the citation spec before being emitted here.
 * Edit the source JSON and re-run the builder to change anything.
 *
 * Generated: ${new Date().toISOString()}
 * Pages: ${accepted.length}
 */

export const DEPTH_PAGE_ROUTES = ${JSON.stringify(routes, null, 2)};
`);

// ── 3. Route lines for App.tsx ───────────────────────────────────────────────
writeFileSync(join(__dirname, 'depth-pages-routes.txt'),
  accepted.map((p) => `                  <Route path="${p.slug}" element={<LazyRoute Component={DepthPage} />} />`).join('\n') + '\n');

console.log(`  src/data/depth-pages.json        ${accepted.length} pages (React layer)`);
console.log(`  scripts/depth-pages-routes.mjs   ${accepted.length} routes (prerender layer)`);
console.log(`  scripts/depth-pages-routes.txt   <Route> lines for App.tsx\n`);

if (STRICT && rejected > 0) process.exit(1);
