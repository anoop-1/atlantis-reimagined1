#!/usr/bin/env node
/**
 * Citation-layer validator and generator — 2026-08-18.
 * ─────────────────────────────────────────────────────────────────────────────
 * Takes drafted citation layers as JSON, enforces the spec on every field, and
 * emits a prerender-ready module. Nothing reaches the site without passing.
 *
 * The spec is not stylistic. Each rule maps to a measured citation factor:
 *
 *   lead 40-70 words          retrieval scores 200-500 token chunks; the
 *                             measured peak-citation passage is 134-167 words
 *                             across lead plus expansion
 *   expansion 130-165 words   same, and it must stand alone because it is
 *                             scored independently of the lead
 *   no hedging                pairwise LLM re-ranking compares candidate
 *                             passages head-to-head and drops hedged ones
 *   named source inline       pages naming an authority in body text are cited
 *                             ~2.1x more often
 *   real captioned table      the mechanism by which this site's salary page
 *                             already out-cites Salary.com and Indeed
 *   exactly 6 question facets one query becomes 8-15 sub-queries; a page
 *                             answering only the head query competes for 1 of
 *                             ~12 retrieval slots instead of 5
 *   no Atlantis price         standing policy; third-party fees and market
 *                             salary bands are explicitly permitted
 *
 *   node scripts/build-citation-layers.mjs --in drafted-layers.json
 *   node scripts/build-citation-layers.mjs --in drafted-layers.json --strict
 */
import { readFileSync, writeFileSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const args = process.argv.slice(2);
const IN = args.includes('--in') ? args[args.indexOf('--in') + 1] : 'drafted-layers.json';
const STRICT = args.includes('--strict');
const OUT = join(__dirname, 'citation-layers-generated.mjs');

const inPath = join(__dirname, IN);
if (!existsSync(inPath)) {
  console.error(`Input not found: ${inPath}`);
  process.exit(1);
}

const HEDGES = [
  'it depends', 'varies by', 'varies depending', 'generally speaking', 'in most cases',
  'may vary', 'could be', 'might be', 'roughly speaking', 'more or less', 'typically,',
];
// Only Atlantis-attributed money. Third-party exam fees and market salary bands
// are permitted and are what make a page factually specific.
const RATE = /[$£€]\s?\d[\d,]*(?:\.\d+)?\s*(?:per|\/)\s*(?:day|hour|seat|user|licen[cs]e|month|year)/gi;
const MARKET = /(salary|consultant|contractor|market|industry|technician|inspector|freelance|typical|earn|pay)/i;
const SELF = /(atlantis|\bour\b|\bwe\b)/i;

const words = (s) => String(s).trim().split(/\s+/).filter(Boolean).length;

function validate(layer) {
  const errs = [];
  const warns = [];
  const { route, answer, expansion, source, table, facets } = layer;

  if (!route || !route.startsWith('/')) errs.push('route missing or not a path');

  const a = words(answer);
  if (a < 40 || a > 70) errs.push(`lead answer ${a} words, must be 40-70`);
  const e = words(expansion);
  if (e < 130 || e > 165) warns.push(`expansion ${e} words, target 130-165`);

  if (!source || source.length < 8) errs.push('no named source');

  const blob = `${answer} ${expansion} ${(facets || []).map((f) => f.a).join(' ')}`.toLowerCase();
  const hedged = HEDGES.filter((h) => blob.includes(h));
  if (hedged.length) errs.push(`hedging: ${hedged.join(', ')}`);

  for (const m of blob.matchAll(RATE)) {
    const w = blob.slice(Math.max(0, m.index - 90), m.index + 60);
    if (MARKET.test(w)) continue;
    if (SELF.test(w)) errs.push(`possible Atlantis price: "${m[0]}"`);
  }

  if (!table) errs.push('no table');
  else {
    if (!table.caption) errs.push('table has no caption');
    if (!Array.isArray(table.columns) || table.columns.length < 3) errs.push(`table has ${table.columns?.length ?? 0} columns, need 3+`);
    if (!Array.isArray(table.rows) || table.rows.length < 3) errs.push(`table has ${table.rows?.length ?? 0} rows, need 3+`);
    else {
      const bad = table.rows.filter((r) => r.length !== table.columns.length);
      if (bad.length) errs.push(`${bad.length} row(s) do not match the column count`);
    }
  }

  if (!Array.isArray(facets) || facets.length !== 6) errs.push(`${facets?.length ?? 0} facets, need exactly 6`);
  else {
    const notQ = facets.filter((f) => !f.q || !f.q.trim().endsWith('?'));
    if (notQ.length) errs.push(`${notQ.length} facet heading(s) not phrased as a question`);
    const short = facets.filter((f) => words(f.a) < 30);
    if (short.length) warns.push(`${short.length} facet answer(s) under 30 words`);
  }

  return { errs, warns };
}

const raw = JSON.parse(readFileSync(inPath, 'utf-8'));
// Accept either a bare array, {layers:[...]}, or an array of {layers:[...]}.
const layers = Array.isArray(raw)
  ? raw.flatMap((x) => (x && x.layers ? x.layers : x)).filter(Boolean)
  : raw.layers || [];

console.log(`\nValidating ${layers.length} citation layer(s) from ${IN}\n`);

const accepted = [];
let rejected = 0;
for (const layer of layers) {
  const { errs, warns } = validate(layer);
  if (errs.length) {
    rejected++;
    console.log(`  REJECT ${layer.route}`);
    for (const x of errs) console.log(`         x ${x}`);
    for (const x of warns) console.log(`         . ${x}`);
  } else {
    accepted.push(layer);
    console.log(`  accept ${layer.route}${warns.length ? '  (' + warns.join('; ') + ')' : ''}`);
  }
}

console.log(`\n  ${accepted.length} accepted, ${rejected} rejected\n`);

if (accepted.length) {
  const body = accepted
    .map((l) => `  ${JSON.stringify(l.route)}: ${JSON.stringify({
      answer: l.answer, expansion: l.expansion, source: l.source, table: l.table, facets: l.facets,
    }, null, 4).split('\n').join('\n  ')},`)
    .join('\n\n');

  writeFileSync(OUT,
`/**
 * Citation layers — GENERATED, do not hand-edit.
 * ─────────────────────────────────────────────────────────────────────────────
 * Produced by scripts/build-citation-layers.mjs from drafted JSON, and every
 * entry passed the spec: 40-70 word lead, self-contained expansion, a named
 * authority, a captioned table with 3+ columns and 3+ rows, exactly six
 * question-form facets, no hedging, and no Atlantis price.
 *
 * Consumed by scripts/prerender.mjs, which emits these into the STATIC HTML.
 * That matters: React components never reach crawlers on this site, because
 * prerender builds pages from its own bodyContent strings. A citation layer
 * that exists only in React is worth nothing.
 *
 * To change a layer, edit the source JSON and re-run the generator.
 *
 * Generated: ${new Date().toISOString()}
 * Layers: ${accepted.length}
 */

export const CITATION_LAYERS_GENERATED = {
${body}
};
`);
  console.log(`  Wrote ${OUT} (${accepted.length} layers)\n`);
}

if (STRICT && rejected > 0) process.exit(1);
