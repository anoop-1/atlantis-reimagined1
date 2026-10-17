/**
 * CTR wave 14 — 2026-10-17. US queries already ranking p3–15, and the inspection
 * service owners, retitled to lead with the searcher's own words.
 * ─────────────────────────────────────────────────────────────────────────────
 * EVIDENCE (GSC, USA, 90 days to ~16 Oct 2026; country-filtered rows are shape only):
 *   /compare/asnt-vs-pcn                 "what's the difference between pcn and asnt ndt courses?" 116i p5.2, 0 clicks
 *   /blog/mt-vs-pt-comparison            "mt vs pt" 78i p7.4, 0 clicks; old title 84 chars (truncated)
 *   /blog/api-510-570-653-exam-schedule-2026  "api 510 test dates" 79i p6 · "api 570 test dates" 65i p7.1
 *   /blog/api-510-body-of-knowledge-2026-changes-explained  "api 510 body of knowledge 2026" 71i p3.1; title 70 chars
 *   /blog/asme-b31-9-…-decoded           "b31.9 welding code" 61i p8.8, 0 clicks
 *   /ultrasonic-testing                  "ultrasonic inspection services" 61i p17.8; title 66 chars
 *   /inspection/phased-array-inspection-services  "paut inspection" 52i p26 (owner; /phased-array-ut re-angled to the method)
 *   /ndt-school                          "ndt school near me" 48i p6.4 · "ndt technician school near me" 18i p4.8; title 84 chars
 *   /weld-inspection                     "weld inspection services" 48i p44
 *   /inspection-services-indiana         "magnetic particle inspection indiana" 29i p9.4
 *   /blog/asnt-level-iii-vs-api-qute-ultrasonic-scopes  "api qute" 28i p12.2
 *   /consulting/navsea-ndt-requirements-shipyard        "tech pub 271" 28i p7.9
 *   /resources/asnt-level-iii-study-guide               "asnt level 3 study guide" 16i p9.9; title 67 chars
 *   /magnetic-flux-leakage-testing       "mfl tools" 19i p9.6; title 95 chars with a "Quote 24h" promise
 * Each page also opens with a query-verbatim H2 and a 40–60 word direct answer
 * (src/data/rank-wave14-2026-10.json, both layers).
 *
 * Non-software paths only (the ERP/software workstream adds wave 15 above this one).
 * The API exam schedule title is re-asserted after prerender by
 * scripts/seo-editorial-2026-09-12.mjs, which reads it from this file.
 * Rules: title <= 60, description 140–155, no Atlantis price, no turnaround promise,
 * exam dates only as API published them, every claim already on the page.
 * Re-measure: 2026-11-14 (4 weeks after deploy), position first, then CTR.
 */

export const CTR_WAVE14_OVERRIDES = {
  '/compare/asnt-vs-pcn': {
    title: 'ASNT vs PCN: NDT Course and Certification Differences',
    description: 'PCN vs ASNT NDT courses compared: central ISO 9712 exams vs employer SNT-TC-1A certification, portability, recertification, and which suits your market.',
  },
  '/blog/mt-vs-pt-comparison': {
    title: 'MT vs PT: Magnetic Particle vs Penetrant Testing Compared',
    description: 'MT vs PT compared: which materials each works on, surface vs near-surface flaws, preparation and dwell time, speed, and when a code calls for each method.',
  },
  '/blog/api-510-570-653-exam-schedule-2026': {
    title: 'API 510, 570 and 653 Test Dates: 2026 Exam Windows',
    description: "API 510, 570 and 653 test dates for 2026: each programme's testing windows and application deadlines from API's schedule, checked September 12.",
  },
  '/blog/api-510-body-of-knowledge-2026-changes-explained': {
    title: 'API 510 Body of Knowledge 2026: Editions and What Changed',
    description: 'The 2026 API 510 Body of Knowledge: windows from September 2026 to May 2027, the 2025 ASME editions, the new RP 571 mechanisms and the exam format.',
  },
  '/blog/asme-b31-9-building-services-piping-code-2026-decoded': {
    title: 'ASME B31.9 Welding Code: Qualification, Examination, Scope',
    description: 'ASME B31.9 welding rules for building services piping: Section IX procedure and welder qualification, visual examination of welds, added NDE and scope.',
  },
  '/ndt-school': {
    title: 'NDT Schools Near You: What They Teach, How to Choose',
    description: 'Looking for an NDT school near you? What a school provides, why none can certify you under SNT-TC-1A, and what to check: instructors, specimens, hours.',
  },
  '/resources/asnt-level-iii-study-guide': {
    title: 'ASNT Level 3 Study Guide 2026: Basic and Method Exam Prep',
    description: 'Free ASNT Level III study guide: Basic exam topics, Method exam formats by method, the standards to study, a study plan and the areas candidates miss.',
  },
  '/blog/asnt-level-iii-vs-api-qute-ultrasonic-scopes': {
    title: 'API QUTE Explained: QUTE (M), QUTE (PA) vs ASNT Level III',
    description: 'API QUTE explained: how QUTE (M) and QUTE (PA) replaced QUTE, QUSE, QUPA and QUSE-PA, what each proves beside ASNT Level III, and how to word a UT clause.',
  },
  '/consulting/navsea-ndt-requirements-shipyard': {
    title: 'NAVSEA Tech Pub 271: NDT Requirements for Navy Shipyards',
    description: 'NAVSEA Tech Pub 271 (T9074-AS-GIB-010/271 Rev 1) explained: SNT-TC-1A as mandatory minimums for Navy work, certification limits, transfers and acceptance.',
  },
  '/magnetic-flux-leakage-testing': {
    title: 'Magnetic Flux Leakage Testing (MFL): Tools, Tanks, Pipelines',
    description: 'MFL testing explained: how flux leakage tools scan tank floors, pipelines, casing and wire rope for metal loss, the limits, and why UT confirms the wall.',
  },
  '/inspection-services-indiana': {
    title: 'NDT Inspection in Indiana: Magnetic Particle, UT, PAUT, API',
    description: 'NDT inspection in Indiana: magnetic particle, UT thickness, PAUT, TOFD, PT and VT, plus API 510/570/653 support for mills, refineries and plants.',
  },
  '/ultrasonic-testing': {
    title: 'Ultrasonic Inspection Services: UT Thickness, Welds, PAUT',
    description: 'Ultrasonic inspection services across the USA: UT thickness at CMLs, shear-wave and PAUT weld examination, corrosion mapping, Level III-reviewed reports.',
  },
  '/inspection/phased-array-inspection-services': {
    title: 'PAUT Inspection Services: Encoded Weld and Corrosion Scans',
    description: 'PAUT inspection services across the USA: encoded weld examination, corrosion mapping and crack sizing, with a scan plan, raw data and Level III review.',
  },
  '/phased-array-ut': {
    title: 'Phased Array Ultrasonic Testing (PAUT): How It Works, Uses',
    description: 'How phased array ultrasonic testing works: focal laws, sectorial and linear scans, TFM, PAUT compared with conventional UT and RT, and where each is used.',
  },
  '/weld-inspection': {
    title: 'Weld Inspection Services: VT, MT, PT, UT and PAUT to Code',
    description: 'Weld inspection services across the USA: VT, MT, PT, UT, PAUT and TOFD to AWS D1.1, ASME and API 1104, with method selection and Level III review.',
  },
};

export const TITLE_MAX = 60;
export const DESC_MIN = 140;
export const DESC_MAX = 155;
const SOFTWARE = /^\/(?:erp|ndt-erp|erp-|ndt-inspection-software|inspection-management-software|best-ndt-reporting-software|digital-twin|ndt-software)|software/i;

export function assertWave14() {
  const bad = [];
  for (const [p, o] of Object.entries(CTR_WAVE14_OVERRIDES)) {
    if (SOFTWARE.test(p)) bad.push(`${p}: software path (wave 15 owns these)`);
    if (o.title.length > TITLE_MAX) bad.push(`${p}: title ${o.title.length}`);
    if (o.description.length < DESC_MIN || o.description.length > DESC_MAX) bad.push(`${p}: description ${o.description.length}`);
    const all = `${o.title} ${o.description}`;
    if (/[$€£₹]\s?\d|\b(?:USD|INR|AED|SAR|CAD)\s?\d/i.test(all)) bad.push(`${p}: currency`);
    if (/within \d+\s*(?:hours?|days?)|\b24\s*h\b|same[- ]day/i.test(all)) bad.push(`${p}: turnaround promise`);
    if (/odoo/i.test(all)) bad.push(`${p}: Odoo`);
  }
  if (bad.length) throw new Error(`CTR wave 14 overrides invalid:\n  ${bad.join('\n  ')}`);
}
