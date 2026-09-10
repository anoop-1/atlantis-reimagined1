/**
 * CTR wave 9 — 2026-09-10. The SNT-TC-1A / ASNT cluster, US + Canada.
 * ─────────────────────────────────────────────────────────────────────────────
 * WHY THIS CLUSTER
 *
 * A fresh 90-day pull with the USA country filter (2026-06-10 → 09-07) showed
 * the one training cluster where the site is genuinely within striking
 * distance: 179 queries around SNT-TC-1A / ASNT / CP-189, 2,335 US
 * impressions, positions 5–29 — spread across six pages that all compete for
 * the same terms and none of which leads with the term in its title:
 *
 *   /asnt-certification                                  825i  pos 28.9  105 queries
 *   /blog/asnt-snt-tc-1a-certification-requirements      377i  pos 21.2
 *   /blog/asnt-snt-tc-1a-vs-cp-189-comparison            353i  pos 18.2
 *   /blog/iso-9712-vs-asnt-snt-tc-1a-certification-…     127i  pos 22.2
 *   /compare/asnt-vs-pcn                                 108i  pos  9.3   0 clicks
 *
 * Canada: "snt-tc-1a" 34i pos 7.2. Every other US training page sits at
 * position 40–80 for queries it cannot win ("ndt training near me"), so the
 * wave leaves those alone.
 *
 * Each page is assigned ONE primary term and its title leads with it. The
 * rule proven on this site (article-23 at 5.97% vs aws-d1-5 at 0.45% at the
 * same position): title ≤60 leading with the search term, no brand suffix;
 * description ≤155 opening with the subject and carrying one concrete number.
 */

export const CTR_WAVE9_OVERRIDES = {
  '/asnt-certification': {
    title: 'ASNT Certification — Level I, II, III Requirements 2026',
    description:
      'ASNT certification explained: SNT-TC-1A employer-based vs CP-189 and ACCP, training hours per level, exams, vision and 5-year recertification.',
  },
  '/blog/asnt-snt-tc-1a-certification-requirements': {
    title: 'SNT-TC-1A Requirements — 2024 Edition Explained',
    description:
      'SNT-TC-1A requirements by level: training hours, experience, the 3 exams, vision, 5-year recertification and what the 2024 edition changed.',
  },
  '/blog/asnt-snt-tc-1a-vs-cp-189-comparison': {
    title: 'SNT-TC-1A vs CP-189 — Key Differences for Employers',
    description:
      'SNT-TC-1A vs CP-189: recommended practice vs standard, Level III requirements, training hours, exams, recertification, and which customers specify each.',
  },
  '/blog/iso-9712-vs-asnt-snt-tc-1a-certification-comparison': {
    title: 'ISO 9712 vs SNT-TC-1A — Central vs Employer Certification',
    description:
      'ISO 9712 vs SNT-TC-1A: central third-party vs employer-based certification — portability, who pays, exams, and which one US and Canadian work demands.',
  },
  '/compare/asnt-vs-pcn': {
    title: 'ASNT vs PCN — Which NDT Certification Do You Need?',
    description:
      'ASNT vs PCN compared on who certifies, exams, portability and recertification, with a decision by market: US and Canada, North Sea, Middle East, Asia.',
  },
  '/compliance/ansi-asnt-cp-189': {
    title: 'ANSI/ASNT CP-189 — Requirements and Audit Checklist',
    description:
      'ANSI/ASNT CP-189: the mandatory NDT personnel qualification standard — Level III requirements, exams, recertification and the 7 clauses auditors check.',
  },
  '/glossary/snt-tc-1a': {
    title: 'SNT-TC-1A Meaning — ASNT Recommended Practice Explained',
    description:
      'SNT-TC-1A: the ASNT recommended practice for employer-based NDT certification — what it covers, the 2024 edition, and how it differs from CP-189.',
  },
  '/blog/ndt-level-iii-certification-requirements-guide': {
    title: 'NDT Level III Requirements — ASNT Basic and Method Exams',
    description:
      'NDT Level III requirements: eligibility by education and experience, the ASNT Basic and Method exams, employer vs ASNT certification, 5-year recert.',
  },
  '/resources/ndt-written-practice-template': {
    title: 'NDT Written Practice Template — SNT-TC-1A 2024 Format',
    description:
      'NDT written practice template in SNT-TC-1A 2024 format: the 10 sections an auditor expects, what to write in each, and when a Level III should author it.',
  },
  '/training-usa': {
    title: 'NDT Training USA — Employer-Based SNT-TC-1A Certification',
    description:
      'NDT training across the USA, on-site from Houston by ASNT Level III instructors: Level I/II/III courses and exams under your SNT-TC-1A written practice.',
  },
  '/corporate-ndt-training': {
    title: 'Corporate NDT Training — On-Site Cohorts, SNT-TC-1A',
    description:
      'Corporate NDT training for inspection companies and asset owners: cohorts of 4-25 technicians trained and examined on-site under your SNT-TC-1A programme.',
  },
  '/ndt-training-canada': {
    title: 'NDT Training Canada — CGSB, SNT-TC-1A and NAS 410 Explained',
    description:
      'NDT training in Canada: when CGSB is mandatory, where employer-based SNT-TC-1A applies, NAS 410 for aerospace, and on-site delivery in Alberta and Ontario.',
  },
};

export const TITLE_MAX = 60;
export const DESC_MAX = 155;

/** The geometry is the point; a regression on it silently undoes the wave. */
export function assertWave9Lengths() {
  const bad = [];
  for (const [path, o] of Object.entries(CTR_WAVE9_OVERRIDES)) {
    if (!o.title || !o.description) bad.push(`${path}: missing title or description`);
    if ((o.title || '').length > TITLE_MAX) bad.push(`${path}: title ${o.title.length} > ${TITLE_MAX}`);
    if ((o.description || '').length > DESC_MAX) bad.push(`${path}: description ${o.description.length} > ${DESC_MAX}`);
  }
  if (bad.length) throw new Error(`CTR wave 9 length violations:\n  ${bad.join('\n  ')}`);
  return Object.keys(CTR_WAVE9_OVERRIDES).length;
}

/** CLAUDE.md hard rule: no Atlantis price anywhere public. */
export function assertNoPricesInWave9() {
  const MONEY = /[$£€]\s?\d|\b\d+\s?(?:USD|GBP|EUR|AED|SAR)\b|\bper (?:seat|user|licen[cs]e)\b/i;
  const bad = Object.entries(CTR_WAVE9_OVERRIDES)
    .filter(([, o]) => MONEY.test(`${o.title} ${o.description}`))
    .map(([p]) => p);
  if (bad.length) throw new Error(`CTR wave 9 contains a price: ${bad.join(', ')}`);
}
