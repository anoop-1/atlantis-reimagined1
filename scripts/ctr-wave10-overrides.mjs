/**
 * CTR wave 10 — 2026-09-29. Page-1 pages that under-earn their position.
 * ─────────────────────────────────────────────────────────────────────────────
 * DATA (GSC, 90d 2026-06-30 → 09-27, 28d 08-31 → 09-27, pulled 2026-09-29)
 *
 * Country-filtered page data is badly suppressed on this property: the USA
 * page dimension returns 197 of 1,634 US clicks and 54k of 160k US
 * impressions. The selection therefore uses the COMPLETE all-geo page data for
 * position and CTR, and the US-filtered rows only as a floor on US exposure:
 *
 *   (a) all-geo position <= 12, >= 50 impressions, >= 4 US-filtered impressions
 *       (the filtered rows cover roughly a third of real US impressions), or
 *   (b) >= 15 US-filtered impressions at US position <= 12
 *   … and CTR below the site's OWN band for that position (not an industry
 *   table — the site curve is compressed 4-6x, see memory note):
 *
 *     pos 1-3 4.12% · 3-5 2.94% · 5-7 1.76% · 7-9 1.62% · 9-11 1.75% · 11-13 1.11%
 *
 * Excluded: pages owned by other agents (ERP hubs, software hubs, alternatives,
 * templates, integrations, ROI calculators, practical-ndt, /ndt-training-{city}),
 * anything retitled in the last 30 days (waves 7/8/9, the 09-07 standards
 * titles, the 09-12 editorial layer, blogs.json titles changed since 08-29) —
 * EXCEPT four whose post-change CTR fell at an equal or better position
 * (MT guide 0.57→0.42%, Level III requirements 1.12→0.25%, API 570 salary
 * 1.01→0.86%, AWS D1.5 0.77→0.34%) — pages where >= 60% of query impressions
 * are 9+ word AI-assistant prompts, and pages whose impressions are mostly
 * the owner's own "site:" / brand searches.
 *
 * Title rule proven on this site: <= 60 chars, lead with the searcher's exact
 * phrasing, no brand suffix. Description 140-158 chars: answer, concrete
 * benefit, next step. No prices, no invented numbers — every figure below is
 * a code fact or already stated on the page.
 *
 * Full candidate table: scratchpad/ctr-wave10-2026-09-29.md
 */

export const CTR_WAVE10_OVERRIDES = {
  // ── Owner audit 2026-09-30 item 13: the five highest-impression bleeders ──
  // Salary guide 60k impr pos 5.5 0.9%; exam schedule 15.6k pos 6.1; ASME VIII
  // 12.7k; AWS D1.1 9.8k; RT vs UT 10k (pos 2.2-2.4 on "rt vs ut", ~1% CTR).
  '/blog/ndt-salary-guide-2026-global': {
    title: 'NDT Salary 2026 — Level 1, 2 and 3 Technician Pay by Country',
    description: 'NDT technician salary in 2026 for Level 1, 2 and 3, plus API inspector pay, across the US, Gulf, Europe, India and Australia, and which tickets raise pay.',
  },
  '/blog/api-510-570-653-exam-schedule-2026': {
    title: 'API Exam Schedule 2026 — 510, 570 and 653 Dates, Deadlines',
    description: 'API exam schedule 2026: official testing windows and application deadlines for API 510, 570 and 653, checked September 12. Confirm your seat with API.',
  },
  '/blog/asme-section-viii-division-1-pressure-vessel-ndt': {
    title: 'ASME Section VIII Div 1 — RT and UT Acceptance Criteria',
    description: 'ASME Section VIII Div 1 NDE: when RT or UT is mandatory, how joint efficiency changes required thickness, and RT and UT acceptance criteria for welds.',
  },
  '/blog/aws-d1-1-weld-acceptance-criteria-comprehensive-guide': {
    title: 'AWS D1.1 Acceptance Criteria — Visual, UT and RT Tables',
    description: 'AWS D1.1 acceptance criteria in one place: undercut, porosity and profile limits for visual inspection, UT and RT criteria, and static vs cyclic loading.',
  },
  '/blog/rt-vs-ut-complete-comparison': {
    title: 'RT vs UT for Weld Inspection — Which to Specify and When',
    description: 'RT vs UT compared: radiography reads porosity and slag, ultrasonics finds tight planar flaws and gives depth. Choose by wall thickness, flaw type and access.',
  },

  // ── Re-dos: wave 7 / 9 / standards titles that lost CTR after the change ──
  '/blog/magnetic-particle-testing-complete-guide': {
    title: 'Magnetic Particle Testing (MT) — How It Works, Step by Step',
    description: 'Magnetic particle testing explained: yoke, prod and coil techniques, AC vs DC, wet vs dry particles, the defects MT finds, its limits and MT Level II.',
  },
  '/blog/api-570-inspector-salary-2026-by-region-experience': {
    title: 'API 570 Inspector Salary 2026 — US Gulf Coast and Global Pay',
    description: 'What API 570 piping inspectors earn in 2026 by region and experience, the gain from adding API 510 and 653, offshore differentials and day rates.',
  },
  '/blog/ndt-level-iii-certification-requirements-guide': {
    title: 'ASNT Level III Certification — Requirements and Exam Prep',
    description: 'ASNT NDT Level III certification: eligibility by education and experience, the Basic and Method exams, preparatory course options and 5-year renewal.',
  },
  '/standards/aws-d1-5': {
    title: 'AWS D1.5 Bridge Welding Code — NDT and Inspection Rules',
    description: 'AASHTO/AWS D1.5 bridge welding code: scope, fracture-critical members, stricter fatigue and toughness rules than D1.1, NDT methods and related codes.',
  },

  // ── Method and comparison guides ──
  '/blog/ut-vs-rt-comparison': {
    title: 'UT or RT? A Decision Table by Defect, Thickness and Access',
    description: 'A quick UT vs RT decision table: which method to specify by defect type, wall thickness, access and radiation-safety limits on weld inspection jobs.',
  },
  '/blog/mfl-pipeline-inspection-cost-vendors-when-to-use-vs-ut': {
    title: 'MFL Pipeline Inspection — Corrosion Detection vs UT (2026)',
    description: 'How MFL in-line inspection finds pipeline corrosion, the flaws it misses, sizing confidence, cost drivers, and when UT in-line inspection is better.',
  },
  '/blog/penetrant-testing': {
    title: 'Penetrant Testing (PT) — Visible and Fluorescent Methods',
    description: 'Liquid penetrant testing explained: visible dye vs fluorescent penetrant, the step-by-step PT procedure, what it detects, its limits and PT careers.',
  },
  '/blog/forging-defect-detection-and-assessment': {
    title: 'Forging Seam and Lap Defects — Detection and Assessment',
    description: 'Forging defects explained: how seams, laps and bursts form, telling a lap from a crack, and which NDT method finds each one: MT, PT or UT, and when.',
  },
  '/blog/flange-face-inspection-and-leakage-assessment': {
    title: 'Flange Face Inspection — Defects, Methods and Acceptance',
    description: 'Flange face inspection: surface defects that cause leaks, detection methods and NDT standards, a step-by-step procedure and acceptance criteria.',
  },
  '/blog/real-time-3d-imaging-in-ndt-inspection': {
    title: 'NDT 3D Imaging — Real-Time 3D Inspection Explained (2026)',
    description: 'Real-time 3D imaging in NDT explained: the technologies, current applications, benefits, limitations, implementation steps and where it is heading.',
  },
  '/blog/three-dimensional-ndt-mapping-techniques': {
    title: '3D NDT Mapping — Volumetric Inspection Techniques Explained',
    description: 'How 3D NDT mapping builds volumetric maps from multiple scan angles and probe positions: the physics, equipment, procedure, standards and uses.',
  },
  '/blog/mining-equipment-weld-inspection': {
    title: 'Mining Equipment Weld Inspection — UT, MT and AWS D1.1',
    description: 'Weld inspection for mining equipment: lack of fusion and hydrogen cracking, the NDT methods that catch them (UT, RT, MT) and AWS D1.1 acceptance.',
  },
  '/blog/digital-twin-vs-apm-vs-eam-vs-historian-explained': {
    title: 'Digital Twin vs APM vs EAM vs Historian — Explained',
    description: 'Digital twin, APM, EAM and historian compared: plain definitions, what each system does, a capability table and how they fit an asset integrity stack.',
  },

  // ── Certification / career (individual intent) ──
  '/blog/iso-9712-certification-process-step-by-step-guide': {
    title: 'ISO 9712 Certification — Levels, Exams and Hours (2026)',
    description: 'ISO 9712 certification step by step: Level 1, 2 and 3 requirements, training and experience hours by method, exams, vision test and renewal.',
  },
  '/blog/asnt-accp-level-2-level-3-complete-path-explained-2026': {
    title: 'ACCP Level 2 Is Now ASNT 9712 — What Changed in 2026',
    description: 'ASNT replaced ACCP with ASNT 9712 and the ASNT NDT Level II exam. What it means for Level 2 and Level 3 candidates and how it compares with SNT-TC-1A.',
  },
  '/blog/ndt-level-iii-career-path-complete-guide': {
    title: 'NDT Level 3 Requirements and Career Path — 2026 Roadmap',
    description: 'How to become an NDT Level 3: SNT-TC-1A eligibility, the ASNT Basic and Method exams, a timeline from Level II, salary outcomes and consulting paths.',
  },
  '/blog/is-ndt-a-good-career': {
    title: 'Is NDT a Good Career? 2026 Salary, Outlook and Downsides',
    description: 'Is NDT a good career in 2026? What NDT technicians earn by level, job stability across industries, the honest downsides, and who thrives in it.',
  },
  '/blog/how-long-does-ndt-training-take': {
    title: 'How Long Is NDT Training? Level I, II, III Hours and OJT',
    description: 'How long NDT training takes: classroom hours by level, SNT-TC-1A on-the-job experience hours, and a realistic timeline to working Level II inspector.',
  },
  '/blog/paut-level-2-certification-requirements': {
    title: 'PAUT Level 2 Certification — Requirements, Hours and Path',
    description: 'PAUT Level 2 requirements: UT Level II first, phased array training hours, experience, practical exams, and the SNT-TC-1A vs ISO 9712 routes.',
  },
  '/blog/pcn-vs-asnt-certification-difference': {
    title: 'PCN vs ASNT — The Difference for US NDT Technicians',
    description: 'PCN vs ASNT for a US technician: employer-issued SNT-TC-1A vs portable ISO 9712 PCN, exams, renewal, what you redo abroad and where ASNT 9712 fits.',
  },
  '/blog/api-510-certification-worth-it-2026': {
    title: 'API 510 Certification Cost 2026 — Is It Worth It?',
    description: 'API 510 certification cost line by line: API exam and renewal fees, code books, Prometric travel and study time, weighed against the pay and bid payoff.',
  },
  '/blog/ndt-inspector-continuing-education-requirements': {
    title: 'NDT Inspector Continuing Education — ASNT, API, AWS Recert',
    description: 'Continuing education for NDT inspectors: ASNT Level III renewal, SNT-TC-1A recertification, the API ICP 3-year cycle and AWS CWI renewal rules.',
  },
  '/blog/asnt-level-3-cost-2026-what-affects-your-quote': {
    title: 'ASNT Level 3 Exam Fees and Prep — What Drives the Cost',
    description: 'What drives ASNT Level 3 cost: Basic and Method exam fees set by ASNT, number of methods, prep depth, and cohort vs onsite delivery. Ask for a quote.',
  },
  '/vt-level-2-training': {
    title: 'VT Level 2 Training — SNT-TC-1A Hours, Exam, Online',
    description: 'VT Level 2 training under SNT-TC-1A: classroom and experience hours, exam content, ASME and API context, led by an ASNT NDT Level III. Online or onsite.',
  },
  // Not a CTR pick (74 impr) — wording fix: the old title sold "ACCP Level 2",
  // a programme ASNT has replaced with ASNT 9712 / ASNT NDT Level II.
  '/ndt-level-2-training': {
    title: 'NDT Level 2 Certification 2026 — SNT-TC-1A and ASNT 9712',
    description: 'NDT Level 2 certification: prerequisites, extra training hours, a realistic timeline, and employer-based SNT-TC-1A vs central ASNT NDT Level II (ASNT 9712).',
  },
  '/snt-tc-1a-certification': {
    title: 'SNT-TC-1A Certification — What It Is and How It Works',
    description: 'SNT-TC-1A is ASNT\'s recommended practice, not a certificate: your employer certifies you under a written practice. Levels, hours and exams explained.',
  },
  '/blog/ndt-certification-nationwide-us-contracts-multi-site': {
    title: 'NDT Certification for Nationwide US Contracts — One Program',
    description: 'How a US inspection contractor runs one SNT-TC-1A certification program across states and client sites: one written practice, audits and records.',
  },
  '/training-india': {
    title: 'ASNT NDT Training in India — SNT-TC-1A Level I, II, III',
    description: 'ASNT SNT-TC-1A NDT training across India: Level I, II and III in UT, RT, MT, PT, VT and ET for teams and individuals, live online or onsite.',
  },
  '/training-me': {
    title: 'ASNT NDT Training in the UAE, Saudi Arabia and the Gulf',
    description: 'ASNT SNT-TC-1A NDT training for Gulf teams in the UAE and Saudi Arabia: Level I, II and III in UT, RT, MT, PT, VT and ET, live online or onsite.',
  },

  // ── Codes and standards guides ──
  '/blog/asme-section-v-article-5-ultrasonic-thickness-measurement-requirements': {
    title: 'ASME Section V Ultrasonic Thickness Measurement — Article 5',
    description: 'ASME Section V UT thickness measurement: T-530 equipment, calibration blocks, CML grid design, surface condition, t-min and remaining-life limits.',
  },
  '/blog/api-617-centrifugal-compressor-inspection': {
    title: 'API 617 Centrifugal Compressor Standard — What It Requires',
    description: 'API 617 explained: scope for axial and centrifugal compressors, material and NDE rules for casings, impellers and rotors, shop testing and records.',
  },
  '/blog/nas-410-aerospace-ndt-certification-explained': {
    title: 'NAS 410 Aerospace NDT Certification — Requirements 2026',
    description: 'NAS 410 for aerospace NDT: Level 1, 2 and 3 requirements, EN 4179 equivalence, the employer written practice, vision tests and recertification.',
  },
  '/blog/nas-410-vs-snt-tc-1a': {
    title: 'NAS 410 vs SNT-TC-1A — Aerospace NDT Certification Compared',
    description: 'NAS 410 vs SNT-TC-1A: training and experience hours by method (16 vs 4 PT hours), exam rules, the Level 3 divide and which one your contract binds.',
  },
  '/blog/api-570-piping-inspection-code-requirements': {
    title: 'API 570 Piping Inspection — Intervals, CMLs, Corrosion Rates',
    description: 'API 570 piping inspection: intervals by piping class, CML spacing, corrosion-rate and remaining-life math, minimum thickness, repairs and alterations.',
  },
  '/blog/api-510-pressure-vessel-inspection-code': {
    title: 'API 510 Pressure Vessel Inspection Code — Key Requirements',
    description: 'API 510 in-service vessel inspection: internal and external intervals, minimum thickness and MAWP, CML placement, NDE methods and repair rules.',
  },
  '/blog/asme-b31-3-process-piping-code-explained': {
    title: 'ASME B31.3 Process Piping Code — 2026 Requirements Guide',
    description: 'ASME B31.3 explained: fluid service categories, wall thickness, Section IX welding, Table 341.3.2 examination extent, pressure testing and API 570.',
  },
  '/blog/asme-b31-1-power-piping-code-explained': {
    title: 'ASME B31.1 Power Piping Code 2026 — Inspection Requirements',
    description: 'ASME B31.1 power piping: service categories, 136.4 NDE rules, Section IX welding, P91 and Cr-Mo materials, hydrotesting and how it differs from B31.3.',
  },
  '/blog/asme-b31-5-refrigeration-piping-code-2026-decoded': {
    title: 'ASME B31.5 Refrigeration Piping Code — Inspection Guide',
    description: 'ASME B31.5 refrigeration piping: scope, examination requirements, weld acceptance, welder qualification, NDE method choice and common pitfalls.',
  },
  '/blog/xrf-positive-material-identification-pmi-2028': {
    title: 'ASTM E1476 XRF Positive Material Identification (PMI)',
    description: 'ASTM E1476 XRF positive material identification: alloy verification, equipment and calibration, acceptance, inspector qualification and audit findings.',
  },
  '/blog/nace-sp0188-holiday-detection-2028': {
    title: 'NACE SP0188 Holiday Testing — Wet Sponge vs High Voltage',
    description: 'NACE SP0188 holiday detection: low-voltage wet sponge vs high-voltage spark testing, when each applies, code cross-references and acceptance.',
  },
  '/blog/asme-pcc-3-in-service-inspection-planning-2026-decoded': {
    title: 'ASME PCC-3 — In-Service Inspection Planning Explained',
    description: 'ASME PCC-3 inspection planning: risk-, condition- and calendar-based approaches, how it works with API 510, 570 and 653, and an implementation roadmap.',
  },
  '/blog/corrosion-under-insulation-cui-api-rp-583-2026-decoded': {
    title: 'API RP 583 — Corrosion Under Insulation (CUI) Explained',
    description: 'API RP 583 corrosion under insulation: the susceptible temperature range, susceptibility factors, CUI detection methods, prevention and mitigation.',
  },
  '/blog/iso-3452-penetrant-testing-specification': {
    title: 'ISO 3452 Penetrant Testing — Requirements and Acceptance',
    description: 'ISO 3452 penetrant testing requirements: methods, sensitivity, acceptance criteria, HAZ rejection rules, personnel qualification and documentation.',
  },
  '/blog/ndt-procedure-writing-guide-asme-section-v': {
    title: 'NDT Procedure Writing — ASME Section V Guide for Level III',
    description: 'How to write an NDT procedure that passes audit: ASME Section V essential elements, scope, demonstration, Level III approval and rejection causes.',
  },
  '/blog/pipeline-audit-preparation-what-operators-check': {
    title: 'Pipeline Audit Preparation Services — What Auditors Check',
    description: 'Pipeline integrity audit preparation: the records auditors pull first, the operator-qualification trap, recurring findings and how to close gaps.',
  },
  '/blog/calibration-management-software-iso-17025-guide-2026': {
    title: 'ISO 17025 Calibration Software — What It Must Do (2026)',
    description: 'ISO/IEC 17025 calibration management software: intervals, traceability, uncertainty budgets, why spreadsheets fail audits, and a rollout checklist.',
  },
  '/inspection/piping-circuit-inspection-cml': {
    title: 'CML Inspection in Piping — Circuits, Placement and API 570',
    description: 'Condition monitoring locations (CMLs) in piping: circuits by damage mechanism, CML selection and placement, paired-reading corrosion rates, API 570.',
  },
  '/ndt-standards-comparison': {
    title: 'NDT Standards and Codes Compared — ASME, ASTM, ISO, API',
    description: 'NDT standards side by side: ASME Section V, the ASTM E-series, ISO and EN, AWS and API: which applies by industry and country, and how acceptance differs.',
  },

  // ── Compliance guides (US regulated buyers) ──
  '/compliance/nas-410/pt': {
    title: 'NAS 410 / EN 4179 Penetrant Testing (PT) Requirements',
    description: 'What NAS 410 and EN 4179 require for penetrant testing: procedure approval, who signs it, PT personnel certification, equipment evidence and audits.',
  },
  '/compliance/nas-410/written-practice': {
    title: 'NAS 410 Written Practice — What It Must Contain (EN 4179)',
    description: 'What an NAS 410 / EN 4179 written practice must contain, who signs it, how auditors test it, record retention, and why a generic template falls short.',
  },
  '/compliance/10-cfr-50-appendix-b': {
    title: '10 CFR 50 Appendix B — QA Requirements for NDT Suppliers',
    description: '10 CFR 50 Appendix B for NDT suppliers: who it binds, the 18 quality assurance criteria, documents auditors request, findings and Level III sign-off.',
  },
  '/compliance/nupic': {
    title: 'NUPIC Audits — What NDT Suppliers to Nuclear Plants Need',
    description: 'NUPIC for NDT and inservice inspection suppliers to US nuclear plants: who it applies to, audit documents, common findings and Level III sign-off.',
  },
  '/compliance/nupic/et': {
    title: 'NUPIC Eddy Current (ET) Requirements — Audit Guide',
    description: 'What a NUPIC audit expects for eddy current testing: procedure approval, ET personnel qualification, equipment evidence and the records sampled.',
  },
  '/compliance/absa-alberta': {
    title: 'ABSA Alberta Compliance — AB-515 for Inspection Companies',
    description: 'ABSA and AB-515 compliance for inspection companies in Alberta: who it applies to, audit documents, renewal, common findings and certification.',
  },
  '/compliance/nadcap-ac7114': {
    title: 'Nadcap AC7114 — NDT Accreditation for Inspection Companies',
    description: 'Nadcap AC7114 NDT accreditation: who needs it, documents auditors request, the renewal cycle, common findings and whether an outside Level III can sign.',
  },
  '/compliance/nadcap-ac7114/ndt-procedures': {
    title: 'Nadcap AC7114 NDT Procedures — What Auditors Check',
    description: 'What NDT procedures must contain under Nadcap AC7114, who approves them, how PRI auditors test them, record retention and why templates fall short.',
  },
  '/compliance/nadcap-ac7114/examination-records': {
    title: 'Nadcap AC7114 Examination Records — Audit Requirements',
    description: 'What NDT examination records must contain under Nadcap AC7114, who signs them, how PRI auditors test them, retention and why templates fall short.',
  },
  '/compliance/navsea-t9074/rt': {
    title: 'NAVSEA T9074-AS-GIB-010/271 — RT Requirements',
    description: 'NAVSEA T9074-AS-GIB-010/271 radiography rules: procedure approval, the Level III Examiner, RT personnel certification, equipment and audit sampling.',
  },
  '/consulting/navsea-ndt-requirements-shipyard': {
    title: 'NAVSEA 271 NDT Requirements for Shipyards (T9074)',
    description: 'NAVSEA 271 for shipyard NDT: SNT-TC-1A as a mandatory minimum, the Level III Examiner, three-year certifications and Examiner-approved procedures.',
  },
  '/compliance/osha-psm-1910-119/written-practice': {
    title: 'OSHA PSM Written Practice for NDT Providers (1910.119)',
    description: 'What an NDT written practice must contain for OSHA PSM (29 CFR 1910.119) mechanical integrity work, who signs it, audits and record retention.',
  },
  '/compliance/faa-14-cfr-145/personnel-certification-records': {
    title: 'FAA Part 145 NDT Personnel Certification Records',
    description: 'What NDT personnel certification records an FAA Part 145 repair station with an NDI rating must keep, who signs them, audits and retention time.',
  },

  // ── Glossary definitions (answer the "meaning" query in the title) ──
  '/glossary/cswip': {
    title: 'CSWIP Full Form and Meaning — CSWIP vs CWI vs PCN',
    description: 'CSWIP stands for Certification Scheme for Welding and Inspection Personnel, run by TWI. What the 3.0, 3.1 and 3.2 grades cover, and CWI and PCN.',
  },
  '/glossary/flat-bottom-hole-fbh': {
    title: 'FBH Meaning in UT — Flat-Bottom Hole Reference Reflector',
    description: 'FBH means flat-bottom hole: a drilled reflector of known diameter and depth used to set ultrasonic sensitivity and DAC or DGS curves. Uses and mistakes.',
  },
  '/glossary/astm-e165': {
    title: 'ASTM E165 — Liquid Penetrant Testing Standard Explained',
    description: 'ASTM E165 is the standard practice for liquid penetrant testing: Type I fluorescent and Type II visible penetrants, methods, scope and common misuse.',
  },
  '/glossary/api-1163': {
    title: 'API 1163 — In-Line Inspection Systems Qualification',
    description: 'API 1163 explained: how in-line inspection (ILI) tools, processes and results are qualified for liquid and gas pipelines, and related standards.',
  },
  '/glossary/api-570': {
    title: 'API 570 Meaning — Piping Inspection Code in Plain English',
    description: 'What API 570 is: the inspection, repair, alteration and rerating code for in-service process piping, who it applies to, how it is used and misuse.',
  },
  '/glossary/astm-e709': {
    title: 'ASTM E709 — Magnetic Particle Testing Guide Explained',
    description: 'ASTM E709 is the standard guide for magnetic particle testing: principles, magnetizing techniques, wet and dry particles, equipment and process control.',
  },
  '/glossary/awwa-d100': {
    title: 'AWWA D100 — Welded Steel Water Tank Standard Explained',
    description: 'AWWA D100 covers welded carbon steel water storage tanks: materials, design, fabrication and welding, and the NDT and inspection rules that apply.',
  },
  '/glossary/api-1104': {
    title: 'API 1104 — Welding of Pipelines Standard Explained',
    description: 'API 1104 explained: the welding standard for pipelines and related facilities, procedure and welder qualification, RT and UT acceptance, and scope.',
  },
  '/glossary/asme-b31-4': {
    title: 'ASME B31.4 — Liquid Pipeline Code Explained',
    description: 'ASME B31.4 covers pipelines carrying liquids such as crude oil, refined products and ammonia: scope, design, welding and NDT rules and related codes.',
  },
  '/glossary/iso-3452': {
    title: 'ISO 3452 Meaning — Penetrant Testing Standard Series',
    description: 'ISO 3452 is the international penetrant testing series: general principles, penetrant materials, reference blocks, equipment and temperature limits.',
  },
  '/glossary/api-580': {
    title: 'API 580 — Risk-Based Inspection (RBI) Standard Explained',
    description: 'API 580 is the recommended practice for risk-based inspection programs: its elements, likelihood and consequence of failure, and the link to API 581.',
  },
  '/glossary/astm-e1417': {
    title: 'ASTM E1417 — Aerospace Liquid Penetrant Testing Explained',
    description: 'ASTM E1417 is the practice for penetrant testing of aerospace and critical parts: penetrant types, methods, sensitivity levels and process control.',
  },
  '/glossary/astm-e1444': {
    title: 'ASTM E1444 — Magnetic Particle Testing Standard Explained',
    description: 'ASTM E1444/E1444M is the practice for magnetic particle testing of aerospace and critical parts: process controls, techniques and how it differs from E709.',
  },
  '/glossary/pcn': {
    title: 'PCN Full Form in NDT — PCN Certification Explained',
    description: 'PCN means Personnel Certification in Non-Destructive Testing, the BINDT scheme to ISO 9712. How it works, its levels, renewal and PCN vs ASNT.',
  },
  '/glossary/asme-ix': {
    title: 'ASME Section IX — Welding Qualification Code Explained',
    description: 'ASME Section IX sets welding and brazing qualification rules: WPS, PQR and welder performance qualification, essential variables and links to NDT.',
  },
  '/glossary/blow-out-preventer-bop': {
    title: 'What Is a Blowout Preventer (BOP)? Stack and Function',
    description: 'A blowout preventer (BOP) is the high-pressure valve stack at the wellhead that seals the well during drilling. What the stack does and where NDT applies.',
  },
  '/glossary/bobbin-coil': {
    title: 'Bobbin Coil Probe — Eddy Current Tube Inspection Explained',
    description: 'A bobbin coil is an eddy current probe pulled through tubes to inspect the full circumference: absolute vs differential coils, correct use and limits.',
  },
  '/glossary/level-ii': {
    title: 'What Is NDT Level 2? Duties, Hours and Certification',
    description: 'An NDT Level 2 sets up and calibrates equipment, performs and interprets tests to procedure and guides Level 1s. SNT-TC-1A hours, exams, certification.',
  },
  '/glossary/normal-beam-probe': {
    title: 'Normal Beam Probe — 0° UT Probe for Thickness Checks',
    description: 'A normal-beam (0°) ultrasonic probe sends longitudinal waves straight into the part for thickness gauging and lamination checks. Correct use and pitfalls.',
  },
  '/glossary/post-emulsifiable-penetrant': {
    title: 'Post-Emulsifiable Penetrant — Hydrophilic vs Lipophilic',
    description: 'Post-emulsifiable penetrants need a separate emulsifier after dwell: hydrophilic vs lipophilic types, sensitivity, process settings and governing codes.',
  },
  '/glossary/se-75': {
    title: 'Selenium-75 (Se-75) — Half-Life and Radiography Use',
    description: 'Selenium-75 is a low-energy gamma source (about 120-day half-life, average 0.22 MeV) used to radiograph thin steel. Where Se-75 fits in radiography.',
  },
  '/glossary/couplant': {
    title: 'Couplant Meaning in Ultrasonic Testing — Types and Use',
    description: 'Couplant is the liquid or gel between an ultrasonic probe and the test surface that removes air so sound can pass. Couplant types, use and mistakes.',
  },

  // ── Product / comparison / brand pages ──
  '/compare/atlantis-dt-vs-siemens-mindsphere': {
    title: 'Siemens MindSphere Alternative — Inspection Digital Twin',
    description: 'Siemens MindSphere (now Insights Hub) vs an inspection-native digital twin: NDT data, damage mechanisms, integrations, and when IoT fits better.',
  },
  '/compare/atlantis-dt-vs-bentley-itwin': {
    title: 'Bentley iTwin vs an Inspection Digital Twin (2026)',
    description: 'What Bentley iTwin does well, where buyers find its edges, how an NDT inspection digital twin differs, and what to test during an evaluation.',
  },
  '/ultrasonic-testing-seattle': {
    title: 'UT Testing in Seattle — Ultrasonic Inspection Services',
    description: 'Ultrasonic testing (UT) in Seattle: weld inspection, thickness measurement and flaw detection, led by an ASNT NDT Level III. Quote on request.',
  },
  '/3d-scanning-cincinnati': {
    title: 'Photogrammetry and 3D Scanning in Cincinnati — As-Built',
    description: '3D scanning in Cincinnati: LiDAR laser scanning, photogrammetry inspection and drone capture for as-built surveys and plant models. Quote on request.',
  },
  '/about': {
    title: 'About Atlantis NDT — ASNT NDT Level III-Led NDT Company',
    description: 'Atlantis NDT is led by Anoop Rayavarapu, ASNT NDT Level III. We build NDT reporting, ERP and digital twin software and deliver training and consulting.',
  },
  '/contact': {
    title: 'Contact Atlantis NDT — Training, Software and Consulting',
    description: 'Contact Atlantis NDT at info@atlantisndt.com for SNT-TC-1A training, Level III consulting, NDT reporting, ERP or digital twin demos. Quote on request.',
  },
  '/blog': {
    title: 'Atlantis NDT Blog — NDT Methods, Codes and Certification',
    description: 'Guides on NDT methods, ASNT SNT-TC-1A certification, ASME, API and AWS codes, practice questions and inspection software, by ASNT Level III authors.',
  },
};

export const TITLE_MAX = 60;
export const DESC_MIN = 140;
export const DESC_MAX = 158;

/** Geometry is the intervention; a regression silently undoes it. */
export function assertWave10Lengths() {
  const bad = [];
  for (const [path, o] of Object.entries(CTR_WAVE10_OVERRIDES)) {
    if (!o.title || !o.description) { bad.push(`${path}: missing title or description`); continue; }
    if (o.title.length > TITLE_MAX) bad.push(`${path}: title ${o.title.length} > ${TITLE_MAX}`);
    if (o.description.length > DESC_MAX) bad.push(`${path}: description ${o.description.length} > ${DESC_MAX}`);
    if (o.description.length < DESC_MIN) bad.push(`${path}: description ${o.description.length} < ${DESC_MIN}`);
  }
  if (bad.length) throw new Error(`CTR wave 10 length violations:\n  ${bad.join('\n  ')}`);
  return Object.keys(CTR_WAVE10_OVERRIDES).length;
}

/** CLAUDE.md hard rules: no Atlantis price, no platform vendor name, no personal email. */
export function assertWave10Clean() {
  const MONEY = /[$£€₹]\s?\d|\b\d+\s?(?:USD|GBP|EUR|AED|SAR|INR)\b|\bper (?:seat|user|licen[cs]e|day)\b/i;
  const bad = [];
  const titles = new Map();
  for (const [p, o] of Object.entries(CTR_WAVE10_OVERRIDES)) {
    const s = `${o.title} ${o.description}`;
    if (MONEY.test(s)) bad.push(`${p}: price`);
    if (/odoo/i.test(s)) bad.push(`${p}: vendor name`);
    if (/anu\.anoop485/i.test(s)) bad.push(`${p}: personal email`);
    if (/\bACCP\b/.test(s) && !/(replaced|is now|formerly)/i.test(s)) bad.push(`${p}: ACCP presented as current`);
    const t = o.title.toLowerCase();
    if (titles.has(t)) bad.push(`${p}: duplicate title with ${titles.get(t)}`);
    titles.set(t, p);
  }
  if (bad.length) throw new Error(`CTR wave 10 content violations:\n  ${bad.join('\n  ')}`);
}
