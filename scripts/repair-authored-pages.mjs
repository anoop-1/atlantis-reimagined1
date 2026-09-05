#!/usr/bin/env node
/**
 * Repair deterministic spec violations in authored pages. 2026-09-02.
 * ─────────────────────────────────────────────────────────────────────────────
 * The authoring workflow runs author -> edit as a pipeline. When the edit stage
 * dies (session limit, API error), the pipeline nulls the item and the authored
 * content is lost from the return value even though it succeeded and is sitting
 * in the run journal.
 *
 * Recovering it is worth doing: on the 2026-09-02 batch, 40 author agents
 * completed and produced 120 pages at a median 1,868 body words, and only a
 * handful carried spec violations. Throwing that away and re-running would
 * spend the tokens twice.
 *
 * This repairs ONLY what can be fixed without inventing content:
 *   description over 155  -> trimmed at a clean boundary
 *   title over 60         -> trimmed at a word boundary
 *   more than 6 facets    -> the first 6 kept
 *   ragged table rows     -> padded or truncated to the column count
 *
 * It deliberately does NOT repair:
 *   answer or expansion outside their word band  (needs rewriting, not trimming)
 *   fewer than 6 facets, fewer than 6 sections, body under 1,500 words
 * Those need an author. Pages still failing after repair are dropped rather than
 * shipped thin — the site already carries the cost of thin pages and the bar is
 * the point.
 *
 *   node scripts/repair-authored-pages.mjs --in <pages.json> --out <repaired.json>
 */
import { readFileSync, writeFileSync, existsSync } from 'fs';
import { trimDescription } from './snippet-geometry.mjs';

const args = process.argv.slice(2);
const IN = args.includes('--in') ? args[args.indexOf('--in') + 1] : null;
const OUT = args.includes('--out') ? args[args.indexOf('--out') + 1] : null;

if (!IN || !existsSync(IN) || !OUT) {
  console.error('Usage: node scripts/repair-authored-pages.mjs --in <pages.json> --out <repaired.json>');
  process.exit(1);
}

const words = (s) => String(s ?? '').trim().split(/\s+/).filter(Boolean).length;

function trimTitle(t, max = 60) {
  const s = String(t || '').trim();
  if (s.length <= max) return s;
  let cut = s.slice(0, max);
  const sp = cut.lastIndexOf(' ');
  if (sp > 20) cut = cut.slice(0, sp);
  return cut.replace(/[\s,;:—–-]+$/, '').trim();
}

const pages = JSON.parse(readFileSync(IN, 'utf-8'));
const repaired = [];
const dropped = [];
const fixes = { title: 0, description: 0, facets: 0, table: 0 };

for (const p of pages) {
  const q = { ...p };

  if ((q.title || '').length > 60) { q.title = trimTitle(q.title); fixes.title++; }
  if ((q.description || '').length > 155) { q.description = trimDescription(q.description, 155); fixes.description++; }
  if (Array.isArray(q.facets) && q.facets.length > 6) { q.facets = q.facets.slice(0, 6); fixes.facets++; }

  const t = q.table;
  if (t && Array.isArray(t.columns) && Array.isArray(t.rows)) {
    const n = t.columns.length;
    if (t.rows.some((r) => !Array.isArray(r) || r.length !== n)) {
      t.rows = t.rows
        .filter(Array.isArray)
        .map((r) => (r.length > n ? r.slice(0, n) : [...r, ...Array(n - r.length).fill('')]));
      fixes.table++;
    }
  }

  // What remains unrepairable is a content problem, not a formatting one.
  const bodyWords = (q.sections || []).reduce((s, x) => s + words((x.paragraphs || []).join(' ')), 0);
  const errs = [];
  const a = words(q.answer);
  if (a < 40 || a > 70) errs.push(`answer ${a} words`);
  if (!Array.isArray(q.facets) || q.facets.length !== 6) errs.push(`${q.facets?.length ?? 0} facets`);
  if (q.facets?.some((f) => !String(f.q || '').trim().endsWith('?'))) errs.push('facet not a question');
  if (!Array.isArray(q.sections) || q.sections.length < 6) errs.push(`${q.sections?.length ?? 0} sections`);
  if (!Array.isArray(q.faq) || q.faq.length < 4) errs.push(`${q.faq?.length ?? 0} faq`);
  if (bodyWords < 1500) errs.push(`${bodyWords} body words`);
  if (!q.table || (q.table.columns || []).length < 3 || (q.table.rows || []).length < 3) errs.push('table too small');

  if (errs.length) dropped.push({ slug: q.slug, errs });
  else repaired.push(q);
}

writeFileSync(OUT, JSON.stringify(repaired, null, 2));
console.log(`in ${pages.length}  ->  repaired and passing ${repaired.length}  ·  dropped ${dropped.length}`);
console.log(`  auto-fixed: title ${fixes.title} · description ${fixes.description} · facets ${fixes.facets} · table ${fixes.table}`);
for (const d of dropped.slice(0, 12)) console.log(`  DROPPED ${d.slug}: ${d.errs.join(', ')}`);
if (dropped.length > 12) console.log(`  ... and ${dropped.length - 12} more`);
