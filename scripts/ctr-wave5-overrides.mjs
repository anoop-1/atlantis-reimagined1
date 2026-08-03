/**
 * CTR wave 5 — 2026-08-04.
 * ─────────────────────────────────────────────────────────────────────────────
 * Three jobs in one layer, because they all resolve to the same field:
 *
 * 1. **Fix a pricing-policy breach.** `/consulting/ndt-consulting-level-iii`
 *    shipped the title `ASNT Level III Consulting 2026: $1,500–$3,500/day
 *    Independent Approval`, with the same day rate repeated in the description
 *    (legacy CTR_OVERRIDES, prerender.mjs ~line 283). That is an Atlantis
 *    service rate in a title tag — a direct breach of CLAUDE.md §18. Wave 5 sits
 *    above every earlier layer, so overriding here is what actually removes it
 *    from the served HTML.
 *
 * 2. **De-cannibalise by title.** Several pages compete with a sibling on the
 *    same term. `/consulting` and `/consulting/ndt-consulting-level-iii` had
 *    near-identical titles, so Google had no basis to prefer either and ranked
 *    both badly (p24.8 / p49.8 on "asnt level iii consulting"). Each title now
 *    claims one intent and concedes the other.
 *
 * 3. **Recover clicks from rankings already held.** Measured by
 *    scripts/ctr-opportunity-engine.mjs over 90d to 2026-08-01, ranked by clicks
 *    lost against the CTR normally seen at that position.
 *
 * Owner direction 2026-08-04: Atlantis does NOT sell API 510/570/653 training —
 * those pages exist to attract traffic. Primary services are **NDT training at
 * all levels**, **ASNT Level III consulting**, and **inspection services**. This
 * wave therefore favours those, not the API exam cluster.
 *
 * No Atlantis price appears anywhere (§18). Industry salary and third-party exam
 * fees remain permitted and are untouched.
 */

export const CTR_WAVE5_OVERRIDES = {
  /* ── 1. Pricing breach + the most commercially valuable cluster ─────────── */

  // 268i across 4 competing pages, best p12.1, 0 clicks. This page wins the term.
  '/consulting/ndt-consulting-level-iii': {
    title: 'Outsourced ASNT Level III — Written Practice, Procedure Approval, Audit Cover',
    description:
      'Engage a Level III without carrying one on payroll: written practice authored to SNT-TC-1A or CP-189, procedures written and approved, personnel qualification administered, and someone accountable when a client or accreditation body audits you. Retainer or per project.',
  },

  // Was titled almost identically to the page above. It concedes the Level III
  // term and takes the broader consulting intent instead.
  '/consulting': {
    title: 'NDT Consulting Services — Programmes, Procedures, RBI and Fitness-for-Service',
    description:
      'Independent NDT consulting for operators and contractors: inspection programme design, procedure development, risk-based inspection to API 580/581, fitness-for-service to API 579, quality-system and vendor audits, and expert support when a finding is disputed.',
  },

  /* ── 2. De-cannibalisation by intent ────────────────────────────────────── */

  // Owns the DOCUMENT term "snt-tc-1a" (676i, best p9.5); /asnt-certification
  // owns the PATHWAY term "asnt certification" (786i p7.4, rewritten in wave 4).
  '/blog/asnt-snt-tc-1a-certification-requirements': {
    title: 'SNT-TC-1A — What the Document Actually Requires of Your Written Practice',
    description:
      'SNT-TC-1A is a recommended practice, not a standard, and that distinction decides audits. What your Written Practice must specify, training and experience hours by level and method, vision testing, examination structure, and who may certify whom.',
  },

  // 269i, best p3.1 with 0% CTR. Narrowed strictly to the comparison intent so
  // it stops competing on the bare "snt-tc-1a" term.
  '/blog/iso-9712-vs-asnt-snt-tc-1a-certification-comparison': {
    title: 'ISO 9712 vs SNT-TC-1A — Which One Your Client Will Actually Accept',
    description:
      'Third-party certification against employer-based certification: who issues it, whether it travels with the technician when they change employer, how recertification differs, and which contracts and regions insist on one specifically.',
  },

  // 794 words competing against its own 5,830-word blog, and the only page left
  // carrying a keyword-stuffed pipe-separated title. Claims the SERVICE intent.
  '/radiographic-testing': {
    title: 'Radiographic Testing Services — Coverage, Codes and What You Receive',
    description:
      'RT carried out to ASME Section V Article 2 and ISO 17636: source and technique selection for your wall thickness, IQI-proven sensitivity, film or digital capture, and an interpreted report with the images retained and retrievable for audit.',
  },

  // Commercial PAUT intent; the glossary keeps the definition and the blog keeps
  // equipment and setup.
  '/phased-array-ut': {
    title: 'Phased Array UT Services — Encoded Scans, Scan Plans and Demonstrable Coverage',
    description:
      'PAUT delivered with a written scan plan, encoded data you can re-examine after the crew leaves, and coverage that can be evidenced against the code rather than asserted. Weld examination, corrosion mapping and thick-section inspection.',
  },

  /* ── 3. Click recovery on rankings already held ─────────────────────────── */

  // 341i, p2.4–3.1, 2.9% CTR — losing the click to a snippet box.
  '/blog/asme-section-v-article-6-liquid-penetrant-pt-requirements-explained': {
    title: 'ASME Section V Article 6 — Penetrant Requirements, Dwell and Acceptance',
    description:
      'What Article 6 requires for liquid penetrant examination: surface preparation, penetrant type and sensitivity, minimum dwell, excess removal, developer, and the lighting and evaluation conditions an auditor checks — with acceptance coming from the construction code.',
  },

  // 518i, p2.8–4.2, 0% CTR across every variant.
  '/blog/rt-vs-ut-complete-comparison': {
    title: 'RT vs UT — Which Finds Your Defect, and Which Will Miss It',
    description:
      'Radiography images volume and reads well on porosity and slag; ultrasonics finds the tight planar flaws radiography misses and gives depth. Which to specify by wall thickness, defect type, access and code — and why critical welds often need both.',
  },

  // 404i, p4.6–6.2, mostly 0%.
  '/blog/aws-d1-1-weld-acceptance-criteria-comprehensive-guide': {
    title: 'AWS D1.1 Weld Acceptance Criteria — Visual, UT and RT Limits in One Place',
    description:
      'The D1.1 acceptance limits engineers actually look up: undercut, porosity, reinforcement and profile for visual, plus the ultrasonic and radiographic criteria — and how statically loaded and cyclically loaded connections are judged differently.',
  },

  /* ── 4. Buyer-intent service queries, currently buried ──────────────────── */

  // 624i at p44.6, 0 clicks. Title alone will not lift this — service depth
  // ships alongside it — but the snippet has to match the query when it does.
  '/services/mfl-pipeline-inspection': {
    title: 'MFL Pipeline Inspection — Corrosion and Metal Loss Screening at Scale',
    description:
      'Magnetic flux leakage screening for pipelines and tank floors: fast coverage of large areas, metal-loss sizing confirmed by ultrasonics at the indications found, and reporting that feeds corrosion rate and remaining-life rather than stopping at a defect list.',
  },

  // 611i at p51.6, 0 clicks.
  '/blog/ship-hull-and-propulsion-system-inspection': {
    title: 'Ship Hull Inspection — Thickness, Coatings and Class Survey Evidence',
    description:
      'Hull and propulsion inspection for class survey and condition assessment: plate thickness measurement and diminution against allowable, weld and structural examination, coating and corrosion condition, and shafting and propeller checks.',
  },

  // 727i, best p5.5, 0 clicks — the buying query is "surface crack detection services".
  '/blog/surface-breaking-crack-detection-comprehensive-methods': {
    title: 'Surface Crack Detection — Which Method to Use on Which Material',
    description:
      'Choosing between magnetic particle, penetrant, eddy current and ACFM for surface-breaking cracks: what each detects, where each fails, whether coatings and ferromagnetism rule one out, and what sensitivity you can evidence afterwards.',
  },
};

/**
 * Wave 5 is the newest layer and wins on any shared path.
 * Apply directly in the render loop — merging into another layer's branch is
 * what silently discarded 32 of 36 wave-1 overrides (CLAUDE.md §21.1).
 * Always verify the built HTML, never the returned counter.
 */
export function applyCtrWave5(routes) {
  const byPath = new Map(routes.map((r) => [r.path, r]));
  let applied = 0;
  const missing = [];
  for (const [path, o] of Object.entries(CTR_WAVE5_OVERRIDES)) {
    const r = byPath.get(path);
    if (!r) { missing.push(path); continue; }
    r.title = o.title;
    r.description = o.description;
    applied++;
  }
  return { applied, total: Object.keys(CTR_WAVE5_OVERRIDES).length, missing };
}

/**
 * Guard: no Atlantis service price may re-enter this layer. Industry salary and
 * third-party exam fees are permitted elsewhere on the site, but nothing in this
 * file should carry a currency figure at all.
 */
export function assertNoPricesInWave5() {
  const offenders = [];
  for (const [path, o] of Object.entries(CTR_WAVE5_OVERRIDES)) {
    for (const field of ['title', 'description']) {
      if (/[$£€₹]\s?\d|\b\d+\s?(?:USD|EUR|GBP|SAR|AED|INR)\b|per day|\/day|per hour|\/hour/i.test(o[field] || '')) {
        offenders.push(`${path} → ${field}`);
      }
    }
  }
  if (offenders.length) {
    throw new Error(`CTR wave 5 contains pricing, which CLAUDE.md §18 forbids:\n  ${offenders.join('\n  ')}`);
  }
}
