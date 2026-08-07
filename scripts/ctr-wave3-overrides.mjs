/**
 * CTR wave 3 — 2026-07-29.
 * ─────────────────────────────────────────────────────────────────────────────
 * Completes the harvest identified in the 2026-07-29 audit: 71 pages ranking in
 * the top 10 with ≥200 impressions and under 3% CTR, worth roughly 7,156 clicks
 * per 90 days at a 5% CTR against a site earning ~2,000 clicks per 28 days.
 * Waves 1 and 2 covered the largest; this covers the remaining tail.
 *
 * Each rewrite is matched to the page's own highest-impression query (90d to
 * 2026-07-26), shown in the comment. Two additional aims beyond CTR:
 *
 *   1. **De-cannibalise.** Several pages here compete with a sibling on the same
 *      term — the ASME Section V articles, the two B31.3 pages, the API 510/570
 *      salary and cost pages. Titles are differentiated by the *angle* each page
 *      genuinely takes so Google has a reason to keep both.
 *   2. **ERP harvest (Track A).** Where a page is read by operations and quality
 *      managers rather than candidates, the description says what the page does
 *      for a business, not just what it explains. That is the audience the ERP
 *      platform sells to, and they are already on these pages.
 *
 * No Atlantis price appears anywhere (CLAUDE.md §18).
 */

export const CTR_WAVE3_OVERRIDES = {
  // 7,341i @ 2.37%, p5.8 — "asme section 5 article 4" (184i @ p3)
  '/blog/asme-section-v-article-4-ut-requirements-explained': {
    title: 'ASME Section V Article 4 — UT Requirements, Calibration and Acceptance',
    description:
      'What Article 4 requires for ultrasonic examination of welds: written procedure elements, calibration blocks and DAC/TCG setup, scanning coverage, recording level, and the Mandatory Appendices covering phased array and TOFD.',
  },

  // 2,196i @ 2.05%, p9.6 — "api 510 body of knowledge 2026" (194i @ p4)
  '/blog/api-510-body-of-knowledge-2026-changes-explained': {
    title: 'API 510 Body of Knowledge 2026 — What Changed and Which Editions Apply',
    description:
      'The 2026 API 510 body of knowledge broken down: topic areas and their weighting, the exact reference editions in force, what changed from the previous cycle, and which publications to buy before you start studying.',
  },

  // 882i @ 1.13%, p7.9 — "ndt training in uae" (63i @ p32); brand query dominant
  '/training-me': {
    title: 'NDT Training in the UAE, Saudi Arabia and the Gulf — ASNT and ISO 9712',
    description:
      'ASNT and ISO 9712 aligned NDT training across the Gulf: Level I, II and III in UT, RT, MT, PT, VT and ET plus API inspector preparation, delivered as public cohorts, on-site corporate programmes and blended online theory.',
  },

  // 789i @ 1.39% — "ultrasonic testing defects" (22i)
  '/blog/defect-sizing-techniques-in-ultrasonic-inspection': {
    title: 'Ultrasonic Defect Sizing — Amplitude, Tip Diffraction and What Each Misses',
    description:
      'How ultrasonic flaw sizing actually works: 6 dB and 20 dB drop methods, tip-diffraction and TOFD sizing, why amplitude-based sizing under-reads planar defects, and which technique a fitness-for-service assessment can rely on.',
  },

  // 640i @ 1.09% — "api 570 inspector salary" (12i @ p7)
  '/blog/api-570-inspector-salary-2026-by-region-experience': {
    title: 'API 570 Inspector Salary — What the Certification Is Actually Worth',
    description:
      'API 570 piping inspector pay by region and experience, how it compares with API 510 and API 653, what stacking certifications adds, and the industries and contract types that pay the most for the same credential.',
  },

  // 561i @ 2.32% — "asnt india" (54i @ p9)
  '/training-india': {
    title: 'ASNT and ISO 9712 NDT Training in India — Levels, Methods and Pathways',
    description:
      'NDT training and certification across India: ASNT Level I, II and III and ISO 9712 pathways in UT, RT, MT, PT, VT and ET, plus API 510, 570 and 653 inspector preparation, with classroom, on-site and blended delivery.',
  },

  // 541i @ 0.18% — legacy 2025 salary page cannibalising the 2026 guide
  '/blog/ndt-salary-guide-2025-global-level-1-2-3': {
    title: 'NDT Salary by Level — How Level 1, 2 and 3 Pay Actually Differs',
    description:
      'The pay gap between NDT levels explained rather than tabulated: what each step up changes about the work, why Level 3 pay varies so widely, and which methods and certifications move a band more than seniority does.',
  },

  // 530i @ 2.45% — "api 570 exam fees" (59i @ p7)
  '/api-570-india': {
    title: 'API 570 in India — Exam Route, Eligibility and Preparation',
    description:
      'How to take API 570 from India: eligibility by education and experience, the application and Prometric route, the reference set you need, exam windows, and how preparation is usually structured around a working schedule.',
  },

  // 486i @ 0.62%, p9.7 — comparison intent
  '/compare/api-510-vs-api-570': {
    title: 'API 510 vs API 570 — Which Inspector Certification Fits Your Work',
    description:
      'Pressure vessels or piping: what each certification covers, where the scopes overlap, which one employers ask for more often in which industries, what each exam demands, and the case for holding both.',
  },

  // 466i @ 1.50% — "shear wave ndt" (24i @ p17)
  '/blog/compression-wave-vs-shear-wave-technical-differences': {
    title: 'Compression vs Shear Wave UT — Why the Mode Changes What You Detect',
    description:
      'The practical difference between longitudinal and shear wave ultrasonics: velocity and wavelength, mode conversion at the interface, why angle beam uses shear, and which mode to specify for thickness, laminations and weld defects.',
  },

  // 456i @ 1.54%, p10.3 — brand-heavy; make the hub earn its click.
  // 2026-08-07: retargeted onto specific buyer-stage course terms (GSC 90-day
  // pull showed the page absent from "ASNT Level 2 UT online course", "PAUT
  // Level 2 training course", "TOFD training and certification course") while
  // keeping every previously-ranking term (ASNT, ISO 9712, method list, API
  // 510/570/653 inspector prep, delivery-mode language) intact.
  '/training': {
    title: 'NDT Training Courses — ASNT Level 2 UT Online, PAUT & TOFD Certification',
    description:
      'ASNT and ISO 9712 aligned training — including the ASNT Level 2 UT online course, PAUT and TOFD training and certification, and eddy current (ET) Level 2 certification — across UT, RT, MT, PT, VT, ET and advanced methods, plus API 510, 570 and 653 inspector preparation. Delivered as public cohorts, on-site corporate group programmes, or blended online theory with supervised practical.',
  },

  // 451i @ 2.00% — differentiate from the Article-specific pages
  '/blog/asme-section-v-ndt-requirements-guide': {
    title: 'ASME Section V — Which Article Governs Which Examination',
    description:
      'A map of ASME Section V: what each article covers from radiography through acoustic emission, how Section V relates to the acceptance criteria in the referencing construction code, and which edition applies to historical work.',
  },

  // 450i @ 2.00% — "ndt procedure development and review" (9i @ p11) — operations audience
  '/blog/ndt-procedure-writing-guide-asme-section-v': {
    title: 'Writing an NDT Procedure That Survives an Audit',
    description:
      'What a written procedure must contain under ASME Section V, how narrow to scope it so it can be demonstrated, who has to approve it, how technique sheets sit beneath it, and how to keep revisions recoverable years later.',
  },

  // 448i @ 1.79% — "asme section v nondestructive examination ultrasonic thickness" (63i @ p8)
  '/blog/asme-section-v-article-5-ultrasonic-thickness-measurement-requirements': {
    title: 'ASME Section V Article 5 — Ultrasonic Thickness Measurement Requirements',
    description:
      'What Article 5 requires for UT thickness measurement: procedure elements, calibration and verification, surface condition and couplant, temperature compensation, and how the readings feed corrosion-rate and remaining-life calculation.',
  },

  // 443i @ 0.00% — zero clicks despite page-one ranking
  '/blog/weld-inspection-acceptance-criteria-aws-vs-asme': {
    title: 'Weld Acceptance Criteria — AWS D1.1 vs ASME, and Which Governs Your Joint',
    description:
      'Why the same weld indication can pass structurally and fail in pressure service: how AWS D1.1 and ASME acceptance criteria differ, which code governs which item, and how a disposition is defended when it is challenged.',
  },

  // 440i @ 1.36% — "asme b31.1 latest edition 2026"
  '/blog/asme-b31-1-power-piping-code-explained': {
    title: 'ASME B31.1 Power Piping — Examination, Testing and In-Service Requirements',
    description:
      'What B31.1 requires for power piping: examination extent by service, welding and NDE requirements, hydrostatic testing, and the in-service inspection expectations that follow through the plant lifetime.',
  },

  // 432i @ 0.46% — cost-intent; no Atlantis price
  '/blog/cwi-exam-cost-2026-total-investment-calculator': {
    title: 'What the AWS CWI Really Costs You — Beyond the Exam Fee',
    description:
      'The full cost of becoming a Certified Welding Inspector: application and exam, the code books you must own, seminar or self-study, travel and time off, retake exposure, and recertification — with the factors that change each.',
  },

  // 409i @ 0.98% — ERP page; generic positioning, no numbers (owner direction)
  '/ndt-erp-solution': {
    title: 'All-in-One Business Software for Service and Inspection Companies | Atlantis',
    description:
      'One platform for quoting, projects, job costing, field teams, compliance records and accounts — with the depth inspection and testing businesses need built in. Affordable, accessible, fully customizable. Book a free consultation.',
  },

  // 373i @ 1.34% — "api 510 exam fees in india" (37i @ p7)
  '/api-510-india': {
    title: 'API 510 in India — Eligibility, Exam Route and Preparation',
    description:
      'Taking API 510 from India: who qualifies by education and experience, the application and Prometric process, the reference publications required, exam windows, and how candidates usually structure preparation around work.',
  },

  // 356i @ 0.00% — zero clicks; operations audience, ERP-adjacent
  '/blog/ai-in-ndt-machine-learning-for-defect-detection': {
    title: 'Machine Learning in NDT — Where It Works and Where It Does Not Yet',
    description:
      'An honest look at AI-assisted defect detection: what automated interpretation does reliably today, why training data quality decides everything, how human-in-the-loop review is structured, and what a code body will currently accept.',
  },

  // 350i @ 0.57% — pass-rate intent
  '/blog/api-icp-pass-rates-510-vs-570-vs-653-2026': {
    title: 'API 510 vs 570 vs 653 — Which Exam Candidates Find Hardest',
    description:
      'How the three API ICP exams compare in difficulty: reference set size, calculation load, where candidates most often lose marks in each, and what that means for the order in which to take them.',
  },

  // 336i @ 0.30%, p11.6 — "hull corrosion mapping" (15i)
  '/corrosion-mapping': {
    title: 'Corrosion Mapping — Encoded UT and Phased Array for Repeatable Wall Loss Data',
    description:
      'Corrosion mapping that produces a trend rather than a snapshot: encoded C-scan coverage, reproducible scan geometry between campaigns, hull and subsea application, and how the data feeds remaining-life and RBI decisions.',
  },

  // 322i @ 1.86% — "asme b31.3 latest edition 2026" (15i @ p5)
  '/blog/asme-b31-3-process-piping-code-explained': {
    title: 'ASME B31.3 Explained — Fluid Service Categories and What They Change',
    description:
      'B31.3 from first principles: how fluid service category drives examination extent and acceptance, what Category D and Category M change, designer and examiner responsibilities, and where the current edition differs from the last.',
  },

  // 320i @ 0.94% — "accp level 2" (13i @ p5)
  '/blog/asnt-accp-level-2-level-3-complete-path-explained-2026': {
    title: 'ASNT ACCP vs Employer Certification — What Central Certification Changes',
    description:
      'How the ASNT ACCP pathway differs from employer-based SNT-TC-1A certification: what transfers between employers, the practical examination requirement, how Level III differs, and which route suits which career.',
  },

  // 310i @ 0.32%, p10.5 — "advanced phased array ut" (24i @ p28)
  '/phased-array-ut': {
    title: 'Phased Array UT Services — Encoded Scans, Scan Plans and Code Coverage',
    description:
      'Phased array examination delivered with a documented scan plan that proves coverage: sectorial and linear scanning, encoded and reproducible data, weld examination in lieu of radiography, and corrosion mapping that trends.',
  },

  // 306i @ 0.33% — "api 510 pressure vessel inspection code" (9i @ p10)
  '/blog/api-510-pressure-vessel-inspection-code': {
    title: 'API 510 Code Requirements — Intervals, Thickness and Repair Rules',
    description:
      'What API 510 actually requires: inspection intervals for internal and external examination, minimum thickness and MAWP calculation, CML placement, and the rules governing repair, alteration and rerating of pressure vessels.',
  },

  // 297i @ 1.01%, p11.4
  '/ndt-standards-comparison': {
    title: 'NDT Standards Compared — ASME, ASTM, ISO, EN and API Side by Side',
    description:
      'Which standards body governs what: ASME Section V versus the ASTM E-series versus the ISO 17636/17640 family, where EN and API sit, how the same examination is specified differently in each, and which to cite in a procedure.',
  },

  // 296i @ 2.36% — cost-intent; keep quote framing, no figures
  '/blog/asnt-level-3-cost-2026-what-affects-your-quote': {
    title: 'What Drives ASNT Level III Cost — Methods, Delivery and Timing',
    description:
      'Why two ASNT Level III quotes differ so much: number of methods, Basic versus method exams, public cohort against on-site delivery, preparation depth, retake exposure and recertification — with what to check before comparing.',
  },

  // 295i @ 0.68% — "mindsphere alternative" (6i @ p26)
  '/compare/atlantis-dt-vs-siemens-mindsphere': {
    title: 'Siemens MindSphere Alternative for Inspection-Led Asset Integrity',
    description:
      'MindSphere compared with an inspection-native digital twin: where an industrial IoT platform is the right answer, where CML-resolution thickness data and API 579 assessment are not native to it, and how the two coexist.',
  },

  // 294i @ 2.04%, p13.0 — "ped standards" (22i @ p65)
  '/blog/ped-directive-for-european-pressure-equipment': {
    title: 'PED 2014/68/EU — Categories, Modules and What NDE Is Required',
    description:
      'The Pressure Equipment Directive in practice: how equipment is categorised, which conformity assessment module applies, notified body involvement, personnel approval requirements for NDE, and how PED sits alongside EN 13445.',
  },

  // 285i @ 1.75% — class society intent
  '/blog/lloyds-register-classification-standards': {
    title: 'Lloyd\'s Register Class Requirements — Survey Cycle and NDT Acceptance',
    description:
      'What classification actually requires: the survey cycle from annual through special survey, thickness measurement by an approved firm, the report format class expects, and how findings are dispositioned against class rules.',
  },

  // 281i @ 1.07% — RBI; operations audience, ERP/DT-adjacent
  '/blog/risk-based-inspection-rbi-implementation-guide': {
    title: 'Implementing RBI — What API 580 and 581 Actually Require of You',
    description:
      'A practical route into risk-based inspection: the data quality it depends on, damage-mechanism review, how probability and consequence are derived, what makes an interval extension defensible, and where programmes quietly drift.',
  },

  // 280i @ 0.36% — "iso 9934 non-destructive testing magnetic particle" (7i @ p7)
  '/blog/iso-9934-magnetic-particle-testing-standards': {
    title: 'ISO 9934 — Magnetic Particle Testing Requirements Across All Three Parts',
    description:
      'ISO 9934 explained part by part: general principles, detection media and their verification, and equipment requirements — plus how the ISO route compares with ASTM E1444 and ASME Section V Article 7 in practice.',
  },
};
