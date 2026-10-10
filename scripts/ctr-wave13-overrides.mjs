/**
 * CTR wave 13 — 2026-10-10. Money-page snippets, from a competitor SERP review.
 * ─────────────────────────────────────────────────────────────────────────────
 * EVIDENCE (live fetch 2026-10-10 + competitor review of the six US clusters):
 *   /training               title 72 chars (truncated); description trimmed to a
 *                           fragment ending "...TOFD training and certification".
 *   /digital-twins          title 71 chars (truncated).
 *   /consulting             description cut to "...written practices to SNT-TC-1A".
 *   /digital-twin-reporting React and crawler titles disagreed; crawler meta still
 *                           promised API 579 FFS (dropped 2026-10-04).
 *   /inspection-services    title said "Inspection Services" while the page says
 *                           Atlantis is not inspector of record. Now NDE wording.
 *   /practical-ndt          generic title; the simulator cluster is the least
 *                           contested SERP (Extende/TWI pages are thin, no demo).
 *   /api-653-certification  title 69 chars; "api 653" 1,622 impr @ p13.5 (GSC 09-02).
 * Competitor pattern: thin, FAQ-less vendor pages that win on one concrete hook
 * (format, methods, approvals). These snippets lead with the concrete hook.
 *
 * ONE SOURCE: src/data/money-page-meta.json is also imported by the React pages,
 * so the crawler HTML and the rendered <title> cannot drift (§19.1, §46.3).
 * /erp is deliberately absent: ERP_HUB_META re-asserts its title after every
 * wave, and its current 58-char title already fits.
 *
 * Rules: title <= 60, description 140-155 (inside the trimmer cap), no Atlantis
 * price, no numerals in ERP copy, every claim already on the page.
 * Re-measure: 2026-11-07 (4 weeks after deploy), on position first, then CTR.
 */
import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
export const CTR_WAVE13_OVERRIDES = JSON.parse(
  readFileSync(join(here, '..', 'src', 'data', 'money-page-meta.json'), 'utf-8'),
);

export function assertWave13() {
  const bad = [];
  for (const [p, o] of Object.entries(CTR_WAVE13_OVERRIDES)) {
    if (o.title.length > 60) bad.push(`${p}: title ${o.title.length}`);
    if (o.description.length < 140 || o.description.length > 155) bad.push(`${p}: description ${o.description.length}`);
    const all = `${o.title} ${o.description}`;
    if (/[$€£₹]\s?\d|\b(?:USD|INR|AED|SAR)\s?\d/i.test(all)) bad.push(`${p}: currency`);
    if (/odoo/i.test(all)) bad.push(`${p}: Odoo`);
  }
  if (bad.length) throw new Error(`CTR wave 13 overrides invalid:\n  ${bad.join('\n  ')}`);
}
