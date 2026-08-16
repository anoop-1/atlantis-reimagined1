/**
 * Phase E — ERP head-term routing — 2026-08-16.
 * ─────────────────────────────────────────────────────────────────────────────
 * Grounded in scripts/phase-harvest-erp-2026-08-16.json (USA, 90d): 142
 * queries · 1,459i · 3 clicks. The shape confirms §21.3 for the fifth time —
 * ERP is absent from its category, and the residual constraint is OFF-PAGE
 * (§29.4: the software head pages already carry 1,500–5,300 internal links).
 *
 * What on-page work is left is OWNERSHIP ROUTING, not content:
 *
 *   "ndt software"            176i p64.8 across 7 pages —
 *       top URL is /ndt-reporting-software-comparison, a comparison page.
 *       The category page built for the term (/ndt-inspection-software,
 *       1,967w) is not the one Google serves.
 *   "ndt inspection software" 155i across 5 pages — same shape.
 *   "ndt reporting software"  118i p14.3 — the one head term we hold
 *       (/best-ndt-reporting-software-2026, snippet block shipped §28.2).
 *
 * DECIDED BY THE DATA, recorded so nobody re-litigates it:
 *  - NO new workflow posts. Every planned angle already exists
 *    (calibration-management-software-iso-17025-guide-2026,
 *    best-ndt-inspection-software-2026-buyers-guide,
 *    ndt-software-procurement-checklist-2027,
 *    inspection-contractor-spreadsheets-to-system) — a new one cannibalises.
 *  - NO new comparison pages. Measured "{vendor} vs" demand: 1–2 impressions
 *    per query ("trackwise vs pilgrim" 1i).
 *  - NO new geo pages (§28.1 — zero US city-level ERP queries, fifth
 *    confirmation).
 *
 * Division of labour made explicit with scope statements + exact anchors,
 * §39.2 mechanism: category page = /ndt-inspection-software · "best/compare"
 * intent = the comparison assets · reporting = /best-ndt-reporting-software.
 * No numerals outside standards designations (§20.10). No pricing (§18).
 */

const esc = (s) => String(s == null ? '' : s)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const L = (href, text) => `<a href="${href}">${esc(text)}</a>`;

const CATEGORY_OWNER = '/ndt-inspection-software';

const BLOCKS = [
  {
    path: '/ndt-reporting-software-comparison',
    heading: 'Comparing tools versus choosing the category',
    body: `This page exists to help you compare — evaluation criteria, and how the tools differ. If you are a step earlier than that and still mapping what ${L(CATEGORY_OWNER, 'NDT software')} actually covers as a category — field capture, reporting, certification records, equipment and calibration, and where an ERP takes over — start with the category page and come back here to compare.`,
  },
  {
    path: '/blog/ndt-inspection-software-2026-best-platforms-compared',
    heading: 'From the shortlist back to the requirements',
    body: `A comparison is only as good as the requirements it is scored against. Before weighing platforms, the category page for ${L(CATEGORY_OWNER, 'NDT inspection software')} sets out what an inspection company actually needs the system to hold — the evidence chain from field capture to signed report — and the ${L('/resources/business-software-evaluation-checklist', 'evaluation checklist')} turns it into a scoring sheet.`,
  },
  {
    path: '/ndt-connect',
    heading: 'Looking for inspection management software?',
    body: `NDT Connect is a service, not a software product. If your search was for a system to run inspection operations — scheduling, technician records, work orders, reporting — that is ${L('/inspection-management-software', 'inspection management software')}, and the wider category is covered under ${L(CATEGORY_OWNER, 'NDT software')}.`,
  },
  {
    path: '/ndt-inspection-software',
    heading: 'Where this fits among the tools you may be comparing',
    body: `This page covers the category. When you are ready to weigh specific tools, ${L('/best-ndt-reporting-software-2026', 'the reporting software comparison')} scores the reporting layer — the part that decides turnaround time — and ${L('/blog/best-ndt-inspection-software-2026-buyers-guide', 'the buyer’s guide')} covers the procurement sequence. Companies still running the business on spreadsheets should start with ${L('/blog/inspection-contractor-spreadsheets-to-system', 'the migration path')} instead — buying software before fixing the data model reimplements the spreadsheet at higher cost.`,
  },
];

export function applyErpHeadtermRouting(routes, append) {
  const byPath = new Map(routes.map((r) => [r.path, r]));
  const out = { applied: 0, missing: [] };
  for (const b of BLOCKS) {
    const r = byPath.get(b.path);
    if (!r) { out.missing.push(b.path); continue; }
    append(r, `
    <section aria-label="${esc(b.heading)}">
      <h2>${esc(b.heading)}</h2>
      <p>${b.body}</p>
    </section>`);
    out.applied++;
  }
  return out;
}

/** §20.10 — no numerals may enter ERP copy outside standards designations. */
export function assertErpRoutingNoNumbers() {
  const blob = BLOCKS.map((b) => `${b.heading} ${b.body}`).join(' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/SNT-TC-1A|CP-189|ISO \d+|API \d+|NAS \d+|ISO\/IEC \d+|17025|2026/g, '');
  const hits = blob.match(/\d/g);
  if (hits) throw new Error(`erp routing copy contains numerals: ${blob.match(/[^ ]*\d[^ ]*/g).join(', ')}`);
}

export function assertErpRoutingTargets(routes) {
  const paths = new Set(routes.map((r) => r.path));
  const need = new Set();
  for (const b of BLOCKS) {
    need.add(b.path);
    for (const m of b.body.matchAll(/href="(\/[^"#?]*)"/g)) need.add(m[1]);
  }
  const missing = [...need].filter((p) => !paths.has(p));
  if (missing.length) throw new Error(`erp routing targets missing: ${missing.join(', ')}`);
}
