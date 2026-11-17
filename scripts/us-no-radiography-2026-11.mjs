/**
 * Crawler pass: no radiography offer on US inspection pages — 2026-11-17 (CLAUDE.md §78).
 *
 * Runs inside scripts/seo-release-2026-09-12.mjs on the built page (after the editorial pass and any
 * replaceMain upgrade, so nothing rewritten later can bring the offer back). The text rule lives in
 * src/data/us-no-radiography-2026-11.mjs, shared with the depth-page records the React layer reads:
 *   - editorial pages (React renders this same <main>): offer sentences only;
 *   - /inspection/third-party-inspection-{US city} (React renders src/data/depth-pages.json, whose
 *     records were rewritten with the same rule, force mode): every RT method list in the page.
 * Each changed page carries one US note (data-us-rt-note). The build fails if a second pass of the
 * rule would still change a page (idempotence = no offer left that the rule recognises).
 */
import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { setUsPlaces, isUsInspectionPath, stripUsRtOffer, US_RT_NOTE_HTML, US_RT_DEPTH_PATHS } from '../src/data/us-no-radiography-2026-11.mjs';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const readJson = (p) => JSON.parse(readFileSync(join(ROOT, p), 'utf8'));
{
  const na = readJson('src/data/na-training-cities.json').cities;
  const conv = readJson('src/data/us-conventional-ndt-2026-11/_cities.json');
  setUsPlaces([
    ...Object.entries(na).filter(([, e]) => /USA|United States/.test(e[2])).map(([s]) => s),
    ...(Array.isArray(conv) ? conv : conv.cities).map((c) => c.slug),
  ]);
}

const LEAF = 'main p, main li, main td, main th, main h2, main h3, main h4, main dd, main dt, main caption, main figcaption';
export const usRtStats = { pages: 0, sentences: 0, notes: 0, residual: [] };

function walkStrings(o, fn) {
  if (typeof o === 'string') return fn(o);
  if (Array.isArray(o)) return o.map((x) => walkStrings(x, fn));
  if (o && typeof o === 'object') { const r = {}; for (const [k, v] of Object.entries(o)) r[k] = walkStrings(v, fn); return r; }
  return o;
}

/** @param {import('cheerio').CheerioAPI} $ */
export function applyUsNoRadiography($, path) {
  if (!isUsInspectionPath(path)) return 0;
  const force = /^\/inspection\/third-party-inspection-/.test(path);
  let n = 0;
  let first = null;
  $(LEAF).each((_, el) => {
    const e = $(el);
    if (e.closest('[data-us-rt-note]').length) return;
    if (e.children('p,li,ul,ol,table,div,section').length) return;
    const html = e.html() || '';
    const r = stripUsRtOffer(html, { force });
    if (r.n) { e.html(r.text); n += r.n; if (!first) first = e; }
  });
  // Method tables ("Method | What it finds | Typical application | Reference") on US service pages: an RT row
  // offers radiography; the row goes (the note below states the US position).
  $('main table tr').each((_, tr) => {
    const first = $(tr).children('td,th').first().text().trim();
    if (/^(?:Profile RT|RT|Radiograph)/.test(first)) { $(tr).remove(); n++; }
  });
  const desc = $('meta[name="description"]');
  if (desc.length) { const r = stripUsRtOffer(desc.attr('content') || '', { force }); if (r.n) { desc.attr('content', r.text); n += r.n; } }
  $('script[type="application/ld+json"]').each((_, el) => {
    const raw = $(el).html() || '';
    if (!/\bRT\b|[Rr]adiograph/.test(raw)) return;
    try {
      let changed = 0;
      const j = walkStrings(JSON.parse(raw), (s) => { const r = stripUsRtOffer(s, { force }); changed += r.n; return r.text; });
      if (changed) { $(el).text(JSON.stringify(j).replace(/</g, '\\u003c')); n += changed; }
    } catch { /* leave unparseable JSON-LD to the release graph check */ }
  });
  const wantsNote = force ? US_RT_DEPTH_PATHS.includes(path) : n > 0;
  if (wantsNote && !$('[data-us-rt-note]').length) {
    const answer = $('main section[data-citation-block="answer"]').first();
    const anchor = answer.length ? answer : (first ? (first.closest('table,ul,ol').length ? first.closest('table,ul,ol') : first) : $('main h1').first());
    if (anchor && anchor.length) { anchor.after(US_RT_NOTE_HTML); usRtStats.notes++; }
  }
  // Idempotence check: nothing the rule recognises may remain.
  const left = [];
  $(LEAF).each((_, el) => {
    const e = $(el);
    if (e.closest('[data-us-rt-note]').length || e.children('p,li,ul,ol,table,div,section').length) return;
    if (stripUsRtOffer(e.html() || '', { force }).n) left.push(e.text().slice(0, 120));
  });
  if (left.length) usRtStats.residual.push(`${path}: ${left[0]}`);
  if (n) { usRtStats.pages++; usRtStats.sentences += n; }
  return n;
}

export function assertUsNoRadiographyClean() {
  if (usRtStats.residual.length) throw new Error(`US RT offer still present after the pass:\n  ${usRtStats.residual.slice(0, 20).join('\n  ')}`);
  return usRtStats;
}
