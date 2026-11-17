/**
 * CTR wave 19 — 2026-11-17 (CLAUDE.md §78). Built from the first GSC/GA4 pull through the APIs
 * (scripts/seo-trends-pull.py → reports/seo-trends-2026-11-17.json, window 2026-10-18..11-14).
 *   inspection-hubs.json   21 US inspection hubs: impressions 202 → 4,461 in 28 days at avg position 37.6, on
 *                          "magnetic particle inspection indiana", "welding inspections in new jersey",
 *                          "structural welding inspections ny", "ndt companies near me", "maritime ndt services".
 *                          Titles lead with UT, MT and PT (owner focus 2026-11-14), not PAUT; no RT (§76).
 *   training-and-codes.json  long titles (69–90 characters) on high-impression training and code pages.
 * Supersedes the wave-18 rule "no inspection pages" (owner, 2026-11-14/16/17: refine MT/PT/UT inspection in the US).
 * Newest layer: wave 19 → 18 → 17 … (AUTHORED_GEOMETRY_WAVES).
 * Rules: title <= 60, description 140-155, no Atlantis price, no numerals in ERP/software copy except standards,
 * no claim words, no radiography offer, every path a built page.
 */
import { readFileSync, readdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const DIR = join(dirname(fileURLToPath(import.meta.url)), '..', 'src', 'data', 'ctr-wave19');
const SOURCES = {};
export const CTR_WAVE19_OVERRIDES = {};
for (const f of readdirSync(DIR).filter((n) => n.endsWith('.json')).sort()) {
  const raw = JSON.parse(readFileSync(join(DIR, f), 'utf-8'));
  for (const [p, o] of Object.entries(raw)) {
    if (!p.startsWith('/')) continue;
    if (CTR_WAVE19_OVERRIDES[p]) throw new Error(`CTR wave 19: ${p} is in both ${SOURCES[p]} and ${f}`);
    CTR_WAVE19_OVERRIDES[p] = { title: o.title, description: o.description };
    SOURCES[p] = f;
  }
}

const STANDARD = /\b(?:API|ASME|ASTM|AWS|ISO|EN|NAS|SNT-TC-|CP-|B31\.|NACE|SP|IACS|MIL|BS|CSA|CAN\/CGSB-|ANSI|NBIC|TP|UR|O\*NET|IEC)\s?[-A-Z0-9./]*\d[-A-Z0-9./:]*/gi;
// Paths whose React copy is checked against an older wave's file must be edited there, not overridden here.
const ONE_SOURCE = {};
for (const f of ['ctr-wave15-software-meta.json', join('ctr-wave16', 'software.json')]) {
  const j = JSON.parse(readFileSync(join(DIR, '..', f), 'utf-8'));
  for (const p of Object.keys(j)) if (p.startsWith('/')) ONE_SOURCE[p] = f;
}
const softwarePath = (p) => /^\/(?:erp|ndt-erp|ndt-inspection-software|best-ndt-reporting-software|ndt-reporting|inspection-management-software|digital-twin)/.test(p);

/** @param {Set<string>} [knownPaths] built paths */
export function assertWave19(knownPaths) {
  const bad = [];
  for (const [p, o] of Object.entries(CTR_WAVE19_OVERRIDES)) {
    if (!o.title || o.title.length > 60) bad.push(`${p}: title ${o.title?.length}`);
    if (!o.description || o.description.length < 140 || o.description.length > 155) bad.push(`${p}: description ${o.description?.length}`);
    const all = `${o.title} ${o.description}`;
    if (/[$€£₹]\s?\d|\b(?:USD|INR|AED|SAR|CAD|GBP|EUR)\s?\d/i.test(all)) bad.push(`${p}: price figure`);
    if (/\b(?:#1|best-in-class|world-class|guaranteed|leading provider|within 24 hours|24-hour)\b/i.test(all)) bad.push(`${p}: claim or time-promise wording`);
    if (softwarePath(p) && /\d/.test(all.replace(STANDARD, ''))) bad.push(`${p}: numeral in software copy`);
    if (knownPaths && !knownPaths.has(p)) bad.push(`${p}: not a built page`);
    if (/\bRT\b|radiograph/i.test(`${o.title}`) && /inspection-services-/.test(p)) bad.push(`${p}: radiography in a US inspection hub title (§76)`);
    if (ONE_SOURCE[p]) bad.push(`${p}: its copy has one source in ${ONE_SOURCE[p]}; edit it there`);
  }
  if (bad.length) throw new Error(`CTR wave 19 overrides invalid:\n  ${bad.join('\n  ')}`);
  return Object.keys(CTR_WAVE19_OVERRIDES).length;
}
