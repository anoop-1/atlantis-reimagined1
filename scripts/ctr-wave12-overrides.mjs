/**
 * CTR wave 12 — 2026-10-08. US page-1/2 pages with zero clicks whose title
 * does not lead with the wording searchers use.
 * ─────────────────────────────────────────────────────────────────────────────
 * DATA: GSC 28d 2026-09-07 → 10-05, US-filtered query×page
 * (scratchpad/gsc-1008.json). Pages already retitled by wave 10 (09-29) or
 * wave 11 (10-04) are excluded — their new titles postdate most of the window.
 *
 *   /blog/asme-b31-9-…-2026-decoded — "b31.9" 76 @10.4, "b31.9 welding code"
 *     37 @8.7, "b31.9 piping code" 17 @10.1: 1 click. Title said "Inspection
 *     Decoded"; searchers ask for the code itself.
 *   /blog/ut-level-2-practice-questions — "level 2 questions" 56 @9.1, 0 clicks,
 *     while "ut level 2 practice test" converts (7 clicks @3.1).
 *   /glossary/api-581 — "api 581" 89 @17.0, 0 clicks; "What Is …? NDT Glossary
 *     Definition" template title. Explains RBI; Atlantis does not offer it.
 *   /glossary/calibration-block — "calibration blocks" 37 @16.7, "ndt
 *     calibration blocks" 25 @14.5: singular template title.
 *   /ndt-erp-solution — "ndt inspection software" 35 @6.1, 0 clicks. The wave-3
 *     title named certification tracking only.
 *   /blog/cwi-certification-requirements-cost-career-impact — "aws cwi
 *     certification" 247 @10.1, 0 clicks. Informational; Atlantis does not
 *     offer CWI training.
 *
 * Rules: title <= 60, description 140-158, no Atlantis price, no invented
 * numbers, every claim already on the page. Titles/descriptions only — H1s
 * unchanged, so the two render layers stay aligned.
 * Re-measure: 2026-10-29 (3 weeks after deploy).
 */

export const CTR_WAVE12_OVERRIDES = {
  '/blog/asme-b31-9-building-services-piping-code-2026-decoded': {
    title: 'ASME B31.9 Building Services Piping Code: Scope & Welding',
    description: 'ASME B31.9 explained: which building services piping the code covers, its welding and examination rules, the NDE methods used, and how it differs from B31.1.',
  },
  '/blog/ut-level-2-practice-questions': {
    title: 'UT Level 2 Questions: 50+ Practice Test Questions & Answers',
    description: 'Free UT Level 2 practice test: 50+ questions and answers on ASME V Article 4, calibration, DAC and TCG, angle beam setup and technique sheets, by a Level III.',
  },
  '/glossary/api-581': {
    title: 'API 581 Explained: Risk-Based Inspection Methodology (RBI)',
    description: 'API RP 581 in plain terms: how probability and consequence of failure are calculated, how RBI results set inspection intervals, and the NDE data it relies on.',
  },
  '/glossary/calibration-block': {
    title: 'NDT Calibration Blocks: Types, Reflectors and Uses in UT',
    description: 'NDT calibration blocks explained: reference specimens with side-drilled holes, flat-bottom holes and notches, common block types, and how UT setups use them.',
  },
  '/ndt-erp-solution': {
    title: 'NDT Inspection Software: Certs, Calibration, Jobs & Reports',
    description: 'NDT inspection software for testing firms: track technician certifications and expiries, equipment calibration, jobs and reports in one system. See a demo.',
  },
  '/blog/cwi-certification-requirements-cost-career-impact': {
    title: 'AWS CWI Certification: Requirements, Exam Parts & Renewal',
    description: 'AWS CWI certification explained: eligibility by education and experience, the fundamentals, practical and code-book exam parts, and how CWI differs from NDT.',
  },
};

export const TITLE_MAX = 60;
export const DESC_MIN = 140;
export const DESC_MAX = 158;

export function assertWave12() {
  const bad = [];
  for (const [p, o] of Object.entries(CTR_WAVE12_OVERRIDES)) {
    if (o.title.length > TITLE_MAX) bad.push(`${p}: title ${o.title.length}`);
    if (o.description.length < DESC_MIN || o.description.length > DESC_MAX) bad.push(`${p}: description ${o.description.length}`);
    const all = `${o.title} ${o.description}`;
    if (/[$€£]\s?\d/.test(all)) bad.push(`${p}: currency`);
    if (/odoo/i.test(all)) bad.push(`${p}: Odoo`);
  }
  if (bad.length) throw new Error(`CTR wave 12 overrides invalid:\n  ${bad.join('\n  ')}`);
}
