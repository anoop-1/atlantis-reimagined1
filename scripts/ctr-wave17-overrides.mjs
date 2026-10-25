/**
 * CTR wave 17 — 2026-10-26. Titles and descriptions rewritten from the North American
 * competitor-keyword research (CLAUDE.md §64): the phrases US and Canadian competitors lead with,
 * matched to our GSC queries and the owner's Keyword Planner export. One file per product line in
 * src/data/ctr-wave17/ (training, consulting, inspection, software); a path may appear in only one file. Newest layer: wave 17 → 16 → 15 → 14 → 13 … (AUTHORED_GEOMETRY_WAVES).
 * Built pages own their <head> (SEOHead stands down when atlantis-publication is present),
 * so the crawler title is the title Google reads.
 * Rules: title <= 60, description 140-155, no Atlantis price, no numerals in ERP/software
 * copy except standards designations, no claim words, every path a built page.
 */
import { readFileSync, readdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const DIR = join(dirname(fileURLToPath(import.meta.url)), '..', 'src', 'data', 'ctr-wave17');
const SOURCES = {};
export const CTR_WAVE17_OVERRIDES = {};
for (const f of readdirSync(DIR).filter((n) => n.endsWith('.json')).sort()) {
  const raw = JSON.parse(readFileSync(join(DIR, f), 'utf-8'));
  for (const [p, o] of Object.entries(raw)) {
    if (!p.startsWith('/')) continue;
    if (CTR_WAVE17_OVERRIDES[p]) throw new Error(`CTR wave 17: ${p} is in both ${SOURCES[p]} and ${f}`);
    CTR_WAVE17_OVERRIDES[p] = { title: o.title, description: o.description };
    SOURCES[p] = f;
  }
}

const STANDARD = /\b(?:API|ASME|ASTM|AWS|ISO|EN|NAS|SNT-TC-|CP-|B31\.|NACE|SP|IACS|MIL|BS|CSA|CAN\/CGSB-|ANSI|NBIC|TP|UR|O\*NET|IEC)\s?[-A-Z0-9./]*\d[-A-Z0-9./:]*/gi;
const softwarePath = (p) => /^\/(?:erp|ndt-erp|ndt-inspection-software|best-ndt-reporting-software|ndt-reporting|inspection-management-software|digital-twin)/.test(p);

/** @param {Set<string>} [knownPaths] built paths */
export function assertWave17(knownPaths) {
  const bad = [];
  for (const [p, o] of Object.entries(CTR_WAVE17_OVERRIDES)) {
    if (!o.title || o.title.length > 60) bad.push(`${p}: title ${o.title?.length}`);
    if (!o.description || o.description.length < 140 || o.description.length > 155) bad.push(`${p}: description ${o.description?.length}`);
    const all = `${o.title} ${o.description}`;
    if (/[$€£₹]\s?\d|\b(?:USD|INR|AED|SAR|CAD|GBP|EUR)\s?\d/i.test(all)) bad.push(`${p}: price figure`);
    if (/\b(?:#1|best-in-class|world-class|guaranteed|leading provider|within 24 hours|24-hour)\b/i.test(all)) bad.push(`${p}: claim or time-promise wording`);
    if (softwarePath(p) && /\d/.test(all.replace(STANDARD, ''))) bad.push(`${p}: numeral in software copy`);
    if (knownPaths && !knownPaths.has(p)) bad.push(`${p}: not a built page`);
  }
  if (bad.length) throw new Error(`CTR wave 17 overrides invalid:\n  ${bad.join('\n  ')}`);
  return Object.keys(CTR_WAVE17_OVERRIDES).length;
}
