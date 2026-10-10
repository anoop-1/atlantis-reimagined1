/**
 * Full keyword coverage audit — every keyword from the 2026-10-10 competitor analysis
 * (CLAUDE.md §49, 365 keywords across 7 segments) plus the 100-keyword portfolio (§51).
 * ─────────────────────────────────────────────────────────────────────────────
 * For each keyword: which owner page carries it in the BUILT text (dist), whether any
 * §50 related-link anchor uses it, whether it is in the tracked 100, and whether it is
 * deliberately excluded (owner plan 2026-10-10: API training excluded, 3D scanning
 * deprioritised; §49: phrases that would imply claims Atlantis cannot evidence).
 *
 *   node scripts/keyword-coverage-audit-2026-10.mjs   (after npm run build)
 *   → scripts/keyword-coverage-audit-2026-10.json
 */
import { readFileSync, writeFileSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { KEYWORD_LINK_TARGETS } from '../src/data/keyword-links-2026-10.mjs';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const SEG = JSON.parse(readFileSync(join(ROOT, 'scripts/keyword-segments-2026-10.json'), 'utf-8'));
const PORT = JSON.parse(readFileSync(join(ROOT, 'scripts/keyword-portfolio-2026-10.json'), 'utf-8')).keywords;
const norm = (s) => String(s).toLowerCase().replace(/&amp;/g, '&').replace(/[^a-z0-9]+/g, ' ').trim();
const cache = new Map();
function text(p) {
  if (cache.has(p)) return cache.get(p);
  const f = join(ROOT, 'dist', p === '/' ? '' : p, 'index.html');
  const t = existsSync(f) ? norm(readFileSync(f, 'utf-8').replace(/<script[\s\S]*?<\/script>/g, ' ').replace(/<[^>]+>/g, ' ')) : '';
  cache.set(p, t); return t;
}
// Deliberate exclusions, with the reason recorded once.
const EXCLUDE = [
  [/\baioa\b|d1 4426|boeing/, 'claim Atlantis cannot evidence (prime approval / AIOA)'],
  [/exam mode|strapping|htha\b/, 'feature or service Atlantis has not confirmed'], // client portal: confirmed 2026-10-10 (portal.atlantisndt.com, §53 screenshots)
  [/^api (510|570|653) (training|course|exam prep)|api certification training/, 'owner plan: API training excluded'],
  [/^acc p$/, 'fragment of ACCP (ACCP itself is covered)'],
  [/^v1 block$/, 'needs owner confirmation (V1 block scenario in the simulator). LMS: owner confirmed 2026-10-10 that Practical NDT is integrated with the Atlantis LMS and ERP'],
];
const anchors = Object.values(KEYWORD_LINK_TARGETS).flatMap((t) => t.anchors.map((a) => norm(a)));
const tracked = new Set(PORT.map((r) => norm(r.keyword)));
const rows = [];
for (const [seg, { pages, kw }] of Object.entries(SEG)) {
  for (const k of kw) {
    const n = norm(k);
    const on = pages.filter((p) => text(p).includes(n));
    const ex = EXCLUDE.find(([re]) => re.test(n));
    rows.push({ segment: seg, keyword: k, ownerPages: on, covered: on.length > 0, anchor: anchors.some((a) => a.includes(n)),
      tracked: tracked.has(n), excluded: ex ? ex[1] : null, deprioritised: seg === 'scan' });
  }
}
const by = (f) => rows.filter(f).length;
const summary = {
  total: rows.length, covered: by((r) => r.covered), missing: by((r) => !r.covered && !r.excluded),
  excluded: by((r) => r.excluded), tracked: by((r) => r.tracked), anchored: by((r) => r.anchor),
  bySegment: Object.fromEntries(Object.keys(SEG).map((s) => [s, {
    total: by((r) => r.segment === s), covered: by((r) => r.segment === s && r.covered),
    missing: rows.filter((r) => r.segment === s && !r.covered && !r.excluded).map((r) => r.keyword) }])),
};
writeFileSync(join(ROOT, 'scripts/keyword-coverage-audit-2026-10.json'), JSON.stringify({ generated: new Date().toISOString().slice(0, 10), summary, rows }, null, 1));
console.log(JSON.stringify(summary, null, 1));
