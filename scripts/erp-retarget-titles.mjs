/**
 * ERP title retargeting — "NDT ERP" is not what US buyers search. 2026-08-26.
 * ─────────────────────────────────────────────────────────────────────────────
 * MEASURED, over 90 days, on the ERP/software section of this site:
 *
 *   queries containing "erp"     28 queries ·   190 impressions
 *   task-language queries        70 queries · 1,082 impressions
 *
 *   ndt software                        328 impressions · position 52
 *   ndt reporting software              273 · position 13
 *   ndt inspection software              38 · position 33
 *   ndt inspection management software   21 · position 31
 *
 * Against that, 1,104 ERP-family page titles and 791 h1s say "NDT ERP", while
 * only 667 titles mention "software" at all. The family is aimed at a phrase
 * drawing 190 impressions and away from one drawing 756.
 *
 * This is also a second-order cannibalisation problem: 1,104 pages competing for
 * one low-demand head term is the same shape that put the consulting hub at
 * position 22 behind its own children.
 *
 * WHAT THIS PASS DOES, AND THE GATE THAT KEEPS IT SAFE
 * It rewrites "NDT ERP" to the buyer's vocabulary in titles and h1s — but ONLY
 * on pages with no measured demand. A page currently earning impressions keeps
 * its title untouched, whatever it says, because a page that works is not a
 * page to experiment on. The owner's standing instruction is explicit that
 * impressions must never go backwards, and a title rewrite on an earning page is
 * exactly how that happens.
 *
 * The city, module or industry differentiator in each title is preserved. This
 * changes the head term, not the thing that makes each page distinct — the
 * de-cannibalisation lesson from the consulting family, applied here.
 *
 * /erp itself is EXCLUDED. Its title was written from a US-filtered GSC pull on
 * 2026-08-07 that found zero US queries containing the literal word "erp", and
 * it deliberately leads on "compliance tracking, calibration management and
 * audit preparation". That decision was measured and stands.
 */
import { readFileSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

/** Pages whose titles were set from their own measurement — never touch these. */
const PROTECTED = new Set(['/erp', '/erp-modules', '/erp-industries', '/ndt-erp-solution']);

/**
 * Replacements, ordered. "NDT ERP" alone becomes the management-layer term
 * buyers actually type; the possessive and prefixed forms are handled first so
 * the bare rule does not mangle them.
 */
const RULES = [
  [/\bAffordable NDT ERP\b/gi, 'NDT Inspection Management Software'],
  [/\bNDT ERP Software\b/gi, 'NDT Inspection Management Software'],
  [/\bNDT ERP System\b/gi, 'NDT Inspection Management Software'],
  [/\bNDT ERP\b/g, 'NDT Inspection Software'],
  [/\bERP for NDT\b/gi, 'Inspection Software for NDT'],
];

function retarget(s) {
  let out = String(s || '');
  for (const [re, to] of RULES) out = out.replace(re, to);
  return out.replace(/\s{2,}/g, ' ').trim();
}

/**
 * @param routes  prerender route list, mutated in place
 * @param demand  Map of path -> impressions over the measurement window
 */
export function retargetErpTitles(routes, demand) {
  const out = { retitled: 0, keptForDemand: 0, protectedSkipped: 0, examples: [] };

  for (const r of routes) {
    if (!r || !r.path) continue;
    if (!/^\/(erp|ndt-erp|erp-modules|erp-industries)/.test(r.path)) continue;
    if (PROTECTED.has(r.path)) { out.protectedSkipped++; continue; }

    const hasErp = /\bNDT ERP\b|\bERP for NDT\b/i.test(`${r.title || ''} ${r.h1 || ''}`);
    if (!hasErp) continue;

    // The gate. A page with measured demand keeps what it has.
    if ((demand.get(r.path) || 0) > 0) { out.keptForDemand++; continue; }

    const beforeTitle = r.title;
    const t = retarget(r.title);
    const h = retarget(r.h1);
    if (t === r.title && h === r.h1) continue;

    r.title = t;
    r.h1 = h;
    // The h1 also lives inside bodyContent for the generated families, so the
    // static layer has to be updated too or the two layers disagree.
    if (r.bodyContent && beforeTitle) {
      r.bodyContent = r.bodyContent.replace(/<h1([^>]*)>([\s\S]*?)<\/h1>/, (m, attrs, inner) =>
        `<h1${attrs}>${retarget(inner)}</h1>`);
    }
    out.retitled++;
    if (out.examples.length < 3) out.examples.push(`${r.path}: "${t.slice(0, 62)}"`);
  }
  return out;
}

/** Load path -> impressions from the audit artefact, if present. */
export function loadDemandMap() {
  const m = new Map();
  const f = join(__dirname, 'erp-demand.json');
  if (!existsSync(f)) return m;
  for (const row of JSON.parse(readFileSync(f, 'utf-8'))) m.set(row.path, row.impressions);
  return m;
}
