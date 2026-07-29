/**
 * CTR wave 2 — 2026-07-29.
 * ─────────────────────────────────────────────────────────────────────────────
 * The fresh audit found the largest single opportunity on the account is not new
 * content: **71 pages rank in the top 10 with ≥200 impressions and under 3% CTR**,
 * worth roughly 7,156 clicks per 90 days if they reached a 5% CTR. The site
 * currently earns about 2,000 clicks per 28 days in total.
 *
 * Every rewrite below is hand-written against that page's own highest-impression
 * query from GSC page×query data (90d to 2026-07-26), shown in the comment. The
 * recurring defect is the same one wave 1 found: the page ranks for a phrase that
 * never appears in its title, so the searcher scans past it.
 *
 * Rules held throughout:
 *   - No Atlantis price, ever (CLAUDE.md §18).
 *   - Descriptions answer the query rather than advertise; the click is earned by
 *     showing the answer is here, not by claiming excellence.
 *   - Where the page serves an audience that overlaps the ERP buyer, the
 *     description says so plainly — that is the ERP harvest strategy executed on
 *     pages that already have the traffic.
 *
 * Applied after wave 1 and after Round-7, so these win on any overlapping path.
 */

export const CTR_WAVE2_OVERRIDES = {
  // 41,868 impr @ 0.80% CTR, pos 5.9 — top queries: "ndt level 3 salary" (363i),
  // "ndt technician salary" (277i), "ndt level 2 salary in gulf" (225i)
  '/blog/ndt-salary-guide-2026-global': {
    title: 'NDT Salary Guide 2026 — Level 1, Level 2 and Level 3 Pay by Region',
    description:
      'What NDT inspectors actually earn: Level 1, Level 2 and Level 3 pay compared across the Gulf, North America, Europe, India and Asia-Pacific, by method and by certification held, with the factors that move a salary band the most.',
  },

  // 11,454 impr @ 0.79%, pos 7.8 — "snt-tc-1a" (357i @ p19), "asnt snt-tc-1a" (285i)
  '/blog/asnt-snt-tc-1a-certification-requirements': {
    title: 'SNT-TC-1A Requirements Explained — Training Hours, Experience, Exams, Vision',
    description:
      'What ASNT SNT-TC-1A actually requires of an employer: recommended training hours and experience by method and level, the general, specific and practical examinations, annual vision examination, and the written practice that governs all of it.',
  },

  // 9,874 impr @ 1.09%, pos 6.0 — "rt vs ut" (119i), "ut vs rt" (66i)
  '/blog/rt-vs-ut-complete-comparison': {
    title: 'RT vs UT — Which Weld Inspection Method Finds What, and When to Specify Each',
    description:
      'Radiography versus ultrasonics compared on the defects each actually detects, orientation sensitivity, access and radiation-safety constraints, permanent-record value, speed, and the ASME and AWS clauses that govern substituting one for the other.',
  },

  // 8,640 impr @ 1.35%, pos 7.1 — "aws d1.1 acceptance criteria" (154i @ p5)
  '/blog/aws-d1-1-weld-acceptance-criteria-comprehensive-guide': {
    title: 'AWS D1.1 Acceptance Criteria — Visual, UT and RT Limits in One Place',
    description:
      'AWS D1.1 weld acceptance criteria set out by examination method: visual limits on undercut, porosity, profile and cracks; ultrasonic acceptance tables; radiographic criteria; and how statically and cyclically loaded connections differ.',
  },

  // 7,246 impr @ 1.42%, pos 5.7 — "api exam schedule" (410i), "api exam schedule 2026" (339i)
  '/blog/api-510-570-653-exam-schedule-2026': {
    title: 'API Exam Schedule 2026 — Every 510, 570 and 653 Window and Deadline',
    description:
      'All 2026 API ICP exam windows for API 510, API 570 and API 653: application open and close dates, exam dates, result timing, the CBT alternative, which body of knowledge edition applies, and how far ahead to apply.',
  },

  // 7,106 impr @ 1.73%, pos 6.7 — "asme section viii division 1" (99i @ p8)
  '/blog/asme-section-viii-division-1-pressure-vessel-ndt': {
    title: 'ASME Section VIII Division 1 — NDE Requirements and Acceptance Criteria',
    description:
      'What Section VIII Division 1 requires for examination of pressure vessel welds: when radiography or ultrasonics is mandatory, joint efficiency and its effect on required thickness, UW-51 and UW-52 acceptance, and the Section V articles invoked.',
  },

  // 6,112 impr @ 1.11%, pos 9.0 — "asme b31.3" (129i @ p37)
  '/blog/asme-b31-3-process-piping-requirements': {
    title: 'ASME B31.3 Process Piping — Examination Requirements by Fluid Service',
    description:
      'What B31.3 requires by fluid service category: examination extent for normal, Category D, Category M and high-pressure service, acceptance criteria by weld type, examiner qualification, and the leak testing that follows.',
  },

  // 6,083 impr @ 1.18%, pos 8.0 — "visual inspection ndt" (134i @ p31)
  '/blog/visual-testing': {
    title: 'Visual Inspection in NDT — Procedure, Lighting, Access and Acceptance',
    description:
      'Visual testing done as a qualified NDT method: what ASME Section V Article 9 requires, direct versus remote examination and how remote is demonstrated equivalent, lighting measured at the surface, inspector qualification and vision currency.',
  },

  // 6,039 impr @ 1.24%, pos 6.2 — "snt-tc-1a" (132i), "cp-189" (66i @ p6)
  '/blog/asnt-snt-tc-1a-vs-cp-189-comparison': {
    title: 'SNT-TC-1A vs CP-189 — What Actually Changes for an Employer',
    description:
      'The practical difference between a recommended practice and a standard: where CP-189 removes employer discretion, what it obliges you to hold, how the two treat Level III qualification, and which one a client specification is likely to name.',
  },

  // 5,906 impr @ 1.71%, pos 5.5 — "iso 9712 vs asnt" (71i @ p3)
  '/blog/iso-9712-vs-asnt-snt-tc-1a-certification-comparison': {
    title: 'ISO 9712 vs ASNT SNT-TC-1A — Which Certification Your Client Will Accept',
    description:
      'Third-party certification versus employer-based certification: who issues it, what transfers when you change employer, how recertification differs, which regions and client specifications expect which scheme, and how to hold both.',
  },

  // 4,006 impr @ 0.65%, pos 9.2 — "mt ndt" (26i), governing standard absent from title
  '/blog/magnetic-particle-testing-complete-guide': {
    title: 'Magnetic Particle Testing (MT) — Technique, Field Strength and Acceptance',
    description:
      'MT explained against ASTM E709 and ASME Section V Article 7: yoke, prod, coil and central-conductor techniques, wet fluorescent versus dry visible, field adequacy verification, lighting requirements, and how indications are dispositioned.',
  },

  // 3,863 impr @ 0.83%, pos 5.6 — "ndt technician salary" (78i), "ndt salary in dubai" (40i)
  '/ndt-technician-salary': {
    title: 'NDT Technician Salary — What the Pay Actually Depends On',
    description:
      'NDT technician pay by region, certification level and method, including the Gulf premium, what advanced methods add, how API inspector certifications change the band, and the difference between staff, contract and offshore rotation pay.',
  },

  // 2,494 impr @ 0.52%, pos 10.6 — "api 653" (152i @ p17)
  '/blog/api-653-certification-complete-guide': {
    title: 'API 653 Certification — Requirements, Exam Structure and Reference Set',
    description:
      'What API 653 certification takes: eligibility by education and experience, the referenced publications including API 650 and API 575, exam structure and the calculations that decide it, and recertification once you hold it.',
  },

  // 2,399 impr @ 0.17% — the worst CTR at this volume on the site
  '/blog/cwi-certification-requirements-cost-career-impact': {
    title: 'AWS CWI Certification — Requirements, Part A/B/C Structure and What It Is Worth',
    description:
      'What the AWS Certified Welding Inspector credential requires, how the fundamentals, practical and code-book parts differ, where candidates most often fail, how CWI compares with API inspector certifications, and what it changes on a job spec.',
  },

  // 2,366 impr @ 1.69% — cost-intent page; no Atlantis price, per policy
  '/blog/ndt-inspection-cost-2026-by-method-pricing-matrix': {
    title: 'What Drives NDT Inspection Cost — Method, Access, Mobilisation and Scope',
    description:
      'Why quotes for the same scope differ so widely: how method choice, access and scaffolding, mobilisation distance, standby risk, reporting format and certification requirements each move the number, and how to compare quotes fairly.',
  },

  // 2,099 impr @ 0.52%, pos 8.3 — "asset integrity digital twin" (15i @ p63)
  '/digital-twins': {
    title: 'Asset Integrity Digital Twin — Inspection Data, RBI and FFS on One Model',
    description:
      'A digital twin built from measured inspection data: every UT and PAUT reading bound to its CML, corrosion rates trended automatically, API 581 risk ranking on measured condition, and API 579 fitness-for-service against the stored thickness grid.',
  },

  // 1,888 impr @ 1.01% — "ut corrosion inspection pipeline" (215i @ p23)
  '/blog/pipe-wall-thickness-inspection-ut-procedures': {
    title: 'UT Pipe Wall Thickness and Corrosion Inspection — Procedure and Accuracy',
    description:
      'Ultrasonic wall thickness measurement on piping: probe and couplant selection, temperature compensation, repeatability at corrosion monitoring locations, grid design against the credible damage mechanism, and corrosion-rate calculation.',
  },

  // 1,658 impr @ 0.78% — "asnt vs pcn" (39i @ p4)
  '/compare/asnt-vs-pcn': {
    title: 'ASNT vs PCN — Which NDT Certification Travels, and Where',
    description:
      'ASNT and PCN compared on who issues the certificate, whether it transfers between employers, how each is recertified, which regions and client specifications expect which, and what it costs you to hold the wrong one.',
  },

  // 1,343 impr @ 0.45% — sibling of rt-vs-ut; differentiate rather than compete
  '/blog/ut-vs-rt-comparison': {
    title: 'UT vs RT for Weld Inspection — A Decision Table by Defect and Constraint',
    description:
      'A side-by-side decision table: which method to specify by defect type, material thickness, access, radiation-safety constraint, record requirement and turnaround — plus when phased array replaces radiography and what the code requires to allow it.',
  },

  // 1,216 impr @ 1.32% — "forging lap defect" (38i @ p7), "seam defect in forging" (24i @ p5)
  '/blog/forging-defect-detection-and-assessment': {
    title: 'Forging Defects — Laps, Seams and Bursts, and How Each Is Detected',
    description:
      'How to tell a lap from a crack, why seams behave differently under penetrant and magnetic particle, where bursts originate, which method finds which defect, and at what stage of manufacture the examination should be performed.',
  },

  // 1,036 impr @ 1.35% — "ndt reporting software" (127i @ p8); ERP-adjacent, harvest page
  '/best-ndt-reporting-software-2026': {
    title: 'NDT Reporting Software Compared — What Actually Reduces Turnaround',
    description:
      'Reporting software evaluated on the properties that matter: dataset separated from template so one survey issues in several client formats, provenance captured automatically, offline authoring that survives a refinery, and full data export.',
  },

  // 1,017 impr @ 0.10% — second-worst CTR on the site at this volume
  '/blog/ndt-technician-salary-guide-2026-industry-report': {
    title: 'NDT Pay by Certification Level — What Each Step Up Is Actually Worth',
    description:
      'How pay changes as certification changes: Level 1 to Level 2, adding advanced methods, moving to Level 3, and adding API inspector credentials — with the regional and industry factors that widen or close the gap.',
  },

  // 988 impr @ 0.40%, pos 11.4 — "inspection api" (34i), "rig api certified inspections" (28i)
  '/api-inspector-guide': {
    title: 'API Inspector Certifications — 510, 570 and 653 Compared for Your Scope',
    description:
      'Which API inspector certification fits which work: pressure vessels, piping or storage tanks, what each requires, how they overlap, which to specify in an RFP, and how they sit alongside AWS CWI and NBIC commissioning.',
  },

  // 986 impr @ 1.12% — pass-rate intent
  '/blog/cwi-pass-rate-by-part-a-b-c-breakdown': {
    title: 'CWI Pass Rates by Part — Where Candidates Actually Fail',
    description:
      'The AWS CWI examination broken down by part: what fundamentals, practical and code-book each test, which part accounts for most failures, why code-book navigation under time pressure is the real discriminator, and how to prepare for each.',
  },

  // 911 impr @ 1.43% — "api 617" (370i @ p8) — strong single-term page
  '/blog/api-617-centrifugal-compressor-inspection': {
    title: 'API 617 Centrifugal Compressors — Inspection and Test Requirements',
    description:
      'What API 617 requires through manufacture and test: material and NDE requirements for casings, impellers and rotors, mechanical running and performance testing, witness and hold points, and the documentation an owner should insist on.',
  },

  // 1,289 impr @ 1.55% — MFL commercial intent
  '/blog/mfl-pipeline-inspection-cost-vendors-when-to-use-vs-ut': {
    title: 'MFL Pipeline Inspection — What It Detects, What It Misses, and When to Use UT',
    description:
      'Magnetic flux leakage in-line inspection assessed honestly: the defects it finds and the orientations it misses, sizing confidence, wall thickness and coating limits, why every indication needs ultrasonic prove-up, and when EMAT is the better tool.',
  },
};
