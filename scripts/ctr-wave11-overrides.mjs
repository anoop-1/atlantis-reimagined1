/**
 * CTR wave 11 — 2026-10-04. US page-1 bleeders + course-intent titles.
 * ─────────────────────────────────────────────────────────────────────────────
 * DATA: GSC US-filtered, 90d 2026-07-04 → 10-02 (scratchpad/gsc-us-ctr-2026-10-04.json),
 * query×page rows aggregated per page. Selection: impression-weighted US
 * position <= 10, >= 50 US impressions, CTR < 3%. 17 pages qualified.
 *
 * Rewritten here (title leads with the dominant US query wording):
 *   /blog/ndt-salary-guide-2026-global — 4,186 US impr, 19 clicks, pos 6.6.
 *     "ndt level 3 salary" 296 @7.5, "ndt salary level 3" 167 @8.2,
 *     "ndt level 2 salary" 181 @7.5, "ndt technician salary" 174 @6.0.
 *     /ndt-technician-salary 301s here, so this page carries that query too.
 *     Salary figures in the description are the page's own US table values.
 *   /blog/asme-section-v-article-6-... — 147 impr, pos 8.4 ("asme section v
 *     article 6" @2.0, "asme section 5 article 6" @2.1). The wave-7 title said
 *     "ASME V", not the "Section V" wording searchers use.
 *   /blog/ge-predix-alternatives-2026-... — 113 impr, 0 clicks, pos 5.4.
 *   /standards/nace-sp0188 — 52 impr, pos 9.9 ("nace sp0188" 42 @10.5).
 *     Differentiated from /blog/nace-sp0188-holiday-detection-2028 (wave 10),
 *     which carried a near-identical title.
 *
 * Qualified but NOT rewritten (see scratchpad/ctr-wave-2026-10-04.md):
 *   retitled by wave 10 on 2026-09-29 with the query already leading — the GSC
 *   window predates that change, so re-titling now would be churn: rt-vs-ut,
 *   is-ndt-a-good-career, ultrasonic-testing-seattle, nationwide-us-contracts,
 *   pipeline-audit-preparation, 10-cfr-50-appendix-b, /about, /contact.
 *   Impressions dominated by 15+ word AI-assistant prompts: api-936-vs-api-653,
 *   asnt-level-iii-vs-api-qute, malaysia ERP, ndt-inspection-software-comparison.
 *   /ndt-technician-salary is a 301 to the salary guide.
 *
 * COURSE PAGES (competitor teardown 2026-10-02 §4.0 item 6 / §4.3): Applus+
 * holds #1 for "ut level 2 course"-type queries with a 350-word sheet. The
 * Atlantis method × level pages were titled as requirement explainers. Titles
 * now carry the commercial "course" wording; the requirement facts stay in the
 * description and the H2s. The same title / description / H1 are written into
 * the depth-page data (src/data/depth-pages.json, scripts/drafted-pages.json,
 * scripts/depth-pages-routes.mjs) so the React layer and the crawler agree.
 *
 * Rules: title <= 60 chars, description 140-158, no Atlantis price, no
 * invented numbers (hours are SNT-TC-1A figures already on each page).
 */

export const COURSE_RETITLES = {
  '/ut-level-1-training': {
    title: 'UT Level 1 Course — Online & Onsite ASNT Training',
    h1: 'UT Level 1 Course — Ultrasonic Testing Level I Training',
    description: 'UT Level 1 course under ASNT SNT-TC-1A: 40 training hours, 210 hours of UT experience and the three exams, taught live online or onsite by a Level III.',
  },
  '/ut-level-2-training': {
    title: 'UT Level 2 Course — Online & Onsite ASNT Training',
    h1: 'UT Level 2 Course — Ultrasonic Testing Level II Training',
    description: 'UT Level 2 course under ASNT SNT-TC-1A: 80 cumulative training hours, 840 experience hours, calibration and code evaluation authority. Online or onsite.',
  },
  '/mt-level-1-training': {
    title: 'MT Level 1 Course — Online & Onsite ASNT Training',
    h1: 'MT Level 1 Course — Magnetic Particle Testing Level I Training',
    description: 'MT Level 1 course under ASNT SNT-TC-1A: 12 classroom hours, 70 hours of MT experience and the general, specific and practical exams. Online or onsite.',
  },
  '/mt-level-2-training': {
    title: 'MT Level 2 Course — Online & Onsite ASNT Training',
    h1: 'MT Level 2 Course — Magnetic Particle Testing Level II Training',
    description: 'MT Level 2 course under ASNT SNT-TC-1A: 8 more classroom hours, 210 MT hours, accept/reject authority and AWS D1.1 structural work. Online or onsite.',
  },
  '/rt-level-1-training': {
    title: 'RT Level 1 Course — Online & Onsite ASNT Training',
    h1: 'RT Level 1 Course — Radiographic Testing Level I Training',
    description: 'RT Level 1 course under ASNT SNT-TC-1A: 40 training hours and 210 experience hours, plus the separate radiation-safety track. Live online or onsite.',
  },
  '/rt-level-2-training': {
    title: 'RT Level 2 Course — Online & Onsite ASNT Training',
    h1: 'RT Level 2 Course — Radiographic Testing Level II Training',
    description: 'RT Level 2 course under ASNT SNT-TC-1A: 80 cumulative training hours, 840 experience hours, film and digital interpretation authority. Online or onsite.',
  },
  '/pt-level-1-training': {
    title: 'PT Level 1 Course — Online & Onsite ASNT Training',
    h1: 'PT Level 1 Course — Liquid Penetrant Testing Level I Training',
    description: 'PT Level 1 course under ASNT SNT-TC-1A: 4 classroom hours, 70 hours of PT experience, dwell and rinse skills and the three exams. Online or onsite.',
  },
  '/pt-level-2-training': {
    title: 'PT Level 2 Course — Online & Onsite ASNT Training',
    h1: 'PT Level 2 Course — Liquid Penetrant Testing Level II Training',
    description: 'PT Level 2 course under ASNT SNT-TC-1A: 8 more classroom hours, 140 PT hours and accept/reject authority under ASME V Article 6. Online or onsite.',
  },
  '/vt-level-1-training': {
    title: 'VT Level 1 Course — Online & Onsite ASNT Training',
    h1: 'VT Level 1 Course — Visual Testing Level I Training',
    description: 'VT Level 1 course under ASNT SNT-TC-1A: 8 classroom hours, 70 VT hours, direct and remote visual, lighting and vision rules. Live online or onsite.',
  },
  '/vt-level-2-training': {
    title: 'VT Level 2 Course — Online & Onsite ASNT Training',
    h1: 'VT Level 2 Course — Visual Testing Level II Training',
    description: 'VT Level 2 course under ASNT SNT-TC-1A: 16 more classroom hours, 140 VT hours, weld visual acceptance and exam content, led by a Level III. Online or onsite.',
  },
  '/et-level-1-training': {
    title: 'ET Level 1 Course — Online & Onsite ASNT Training',
    h1: 'ET Level 1 Course — Eddy Current Testing Level I Training',
    description: 'ET Level 1 course under ASNT SNT-TC-1A: 40 training hours and 210 eddy current hours, with the NAS 410 aerospace route explained. Online or onsite.',
  },
  '/et-level-2-training': {
    title: 'ET Level 2 Course — Online & Onsite ASNT Training',
    h1: 'ET Level 2 Course — Eddy Current Testing Level II Training',
    description: 'ET Level 2 course under ASNT SNT-TC-1A: 80 training hours, 840 experience hours, impedance-plane interpretation and the NAS 410 contrast. Online or onsite.',
  },
};

export const CTR_WAVE11_OVERRIDES = {
  '/blog/ndt-salary-guide-2026-global': {
    title: 'NDT Level 3 & Level 2 Salary 2026 — NDT Technician Pay',
    description: 'NDT Level 3 salary in the US runs $80,000–$130,000 for staff roles and Level 2 $55,000–$80,000. Pay by method, industry and country, and what raises it.',
  },
  '/blog/asme-section-v-article-6-liquid-penetrant-pt-requirements-explained': {
    title: 'ASME Section V Article 6 Explained — PT Requirements',
    description: 'ASME Section V Article 6 in plain terms: what a liquid penetrant procedure must specify, from surface prep and dwell to removal, developer and lighting.',
  },
  '/blog/ge-predix-alternatives-2026-asset-integrity-migration': {
    title: 'GE Predix Alternatives 2026 — Options After GE Vernova',
    description: 'GE Predix alternatives for asset integrity teams: where Predix sits after the GE split, how the main options compare, and a data migration checklist.',
  },
  '/standards/nace-sp0188': {
    title: 'NACE SP0188 Standard — Holiday Test Voltage by Thickness',
    description: 'NACE SP0188 picks the method by coating thickness: wet sponge at or below 500 microns, high-voltage spark above it, at 525 x the square root of mils.',
  },
  ...Object.fromEntries(Object.entries(COURSE_RETITLES).map(([p, o]) => [p, { title: o.title, description: o.description }])),
};

export const TITLE_MAX = 60;
export const DESC_MIN = 140;
export const DESC_MAX = 158;

export function assertWave11Lengths() {
  const bad = [];
  for (const [path, o] of Object.entries(CTR_WAVE11_OVERRIDES)) {
    if (!o.title || !o.description) { bad.push(`${path}: missing title or description`); continue; }
    if (o.title.length > TITLE_MAX) bad.push(`${path}: title ${o.title.length} > ${TITLE_MAX}`);
    if (o.description.length > DESC_MAX) bad.push(`${path}: description ${o.description.length} > ${DESC_MAX}`);
    if (o.description.length < DESC_MIN) bad.push(`${path}: description ${o.description.length} < ${DESC_MIN}`);
  }
  for (const [path, o] of Object.entries(COURSE_RETITLES)) {
    if (!o.h1) bad.push(`${path}: course retitle without h1`);
  }
  if (bad.length) throw new Error(`CTR wave 11 length violations:\n  ${bad.join('\n  ')}`);
  return Object.keys(CTR_WAVE11_OVERRIDES).length;
}

/** No Atlantis price (salary bands are market data, allowed), no vendor name, no personal email, no CWI/API training offer. */
export function assertWave11Clean() {
  const bad = [];
  const titles = new Map();
  for (const [p, o] of Object.entries(CTR_WAVE11_OVERRIDES)) {
    const s = `${o.title} ${o.description}`;
    if (/[$£€₹]\s?\d/.test(s) && !/salary/i.test(s)) bad.push(`${p}: currency figure outside salary context`);
    if (/odoo/i.test(s)) bad.push(`${p}: vendor name`);
    if (/anu\.anoop485/i.test(s)) bad.push(`${p}: personal email`);
    if (/\b(CWI|API 5\d\d|ISO 9712|PCN|CSWIP)\b[^.]*\b(course|training|prep)\b/i.test(s)) bad.push(`${p}: non-ASNT training offer`);
    const t = o.title.toLowerCase();
    if (titles.has(t)) bad.push(`${p}: duplicate title with ${titles.get(t)}`);
    titles.set(t, p);
  }
  if (bad.length) throw new Error(`CTR wave 11 content violations:\n  ${bad.join('\n  ')}`);
}
