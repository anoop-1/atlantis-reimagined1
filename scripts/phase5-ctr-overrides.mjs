/**
 * Phase 5 CTR overrides — 2026-07-28.
 * ─────────────────────────────────────────────────────────────────────────────
 * Site CTR is 1.39% at average position 14.9. The 90-day audit found 215 pages
 * sitting at position 8–40 with ≥90 impressions and under 1% CTR. In almost
 * every case the page ranks for a query that does NOT appear in its title — the
 * searcher scans the SERP, does not see their words, and clicks something else.
 *
 * Each override below is hand-written against that page's actual highest-
 * impression query (from GSC page×query data, 2026-04-25..07-24), shown in the
 * comment. This is a title/description change only — no content is removed, and
 * no page's topic is changed to chase a query it does not answer.
 *
 * Pricing policy (CLAUDE.md §18): no Atlantis price appears in any title or
 * description here. Market-size and third-party figures are avoided too, since
 * they age badly in a SERP snippet.
 *
 * Applied AFTER the Round-7 overrides in prerender.mjs so these win on the
 * overlapping paths.
 */

export const PHASE5_CTR_OVERRIDES = {
  // top query "asnt certification" 803i @ p7 — title is fine, description lacked the query verbatim
  '/asnt-certification': {
    description:
      'ASNT certification explained: Level I, II and III routes under SNT-TC-1A and CP-189, how employer-based certification differs from ISO 9712, exam structure per method, experience and vision requirements, and the fastest route for each starting point.',
  },

  // top query "api 653" 999i @ p14 + "api 653 tank inspection" 458i @ p17
  '/blog/api-653-tank-inspection-guide': {
    title: 'API 653 Tank Inspection 2026 — Intervals, Inspector Requirements, Full Checklist',
    description:
      'API 653 tank inspection explained end to end: external and internal inspection intervals and how they are derived, minimum thickness and corrosion-rate calculation, the API 653 inspector requirement, repair and alteration rules, and a working checklist.',
  },

  // top query "api 570" 384i @ p20
  '/api-570-certification': {
    title: 'API 570 Certification 2026 — Piping Inspector Exam, Codes, Eligibility, Pass Strategy',
    description:
      'API 570 piping inspector certification: the eight referenced codes, eligibility by education and experience, exam structure and open/closed-book split, body-of-knowledge changes for 2026, and a study plan built around a 96% first-attempt pass rate.',
  },

  // top query "api 510" 263i @ p33
  '/api-510-certification': {
    title: 'API 510 Certification 2026 — Pressure Vessel Inspector Exam, Codes, Eligibility',
    description:
      'API 510 pressure vessel inspector certification: referenced codes including ASME VIII and API 572/576/577, eligibility routes, exam structure, 2026 body-of-knowledge changes, and how API 510 differs from an NBIC commissioned inspector.',
  },

  // top query "api 653" 317i @ p46 + "api 653 certification" 300i @ p12
  '/api-653-certification': {
    title: 'API 653 Certification 2026 — Aboveground Storage Tank Inspector Exam and Codes',
    description:
      'API 653 aboveground storage tank inspector certification: referenced codes including API 650 and API 575, eligibility, exam structure and calculation questions, 2026 body-of-knowledge changes, and how it fits alongside API 510 and API 570.',
  },

  // top query "eddy current testing" 120i @ p72 — page ranks far off for its own head term
  '/blog/eddy-current-testing-complete-guide': {
    title: 'Eddy Current Testing (ECT) 2026 — How It Works, Probes, Applications and Limits',
    description:
      'Eddy current testing explained: the electromagnetic induction principle, probe types and frequency selection, impedance-plane interpretation, tube and surface applications, ASME Section V Article 8 requirements, and where ECT beats or loses to UT and MT.',
  },

  // top query "radiographic testing" 273i @ p28
  '/blog/radiographic-testing-complete-guide': {
    title: 'Radiographic Testing (RT) 2026 — Technique, IQI Selection, Density and Acceptance',
    description:
      'Radiographic testing explained: X-ray versus gamma source selection, geometric unsharpness and SFD calculation, IQI type and placement, film density and viewing requirements, digital radiography, and ASME Section V Article 2 acceptance criteria.',
  },

  // top query "crack inspection technology" 467i @ p35 — query absent from title
  '/blog/surface-breaking-crack-detection-comprehensive-methods': {
    title: 'Crack Detection Methods 2026 — MT, PT, ET and VT Compared for Surface-Breaking Flaws',
    description:
      'How to choose a crack detection method: magnetic particle, liquid penetrant, eddy current and visual compared on sensitivity, material limits, surface condition, coating tolerance and cost, with a decision matrix and the governing ASME and ISO clauses.',
  },

  // top query "wind turbine blade inspection" 98i @ p50 — generic templated title
  '/blog/wind-turbine-blade-inspection-and-monitoring': {
    title: 'Wind Turbine Blade Inspection 2026 — Methods, Defect Types and Inspection Intervals',
    description:
      'Wind turbine blade inspection: visual, drone, thermography, ultrasonic and acoustic emission methods compared; typical defects from leading-edge erosion to bond-line disbond; access strategies; and how inspection intervals are set for onshore and offshore fleets.',
  },

  // top query "heat exchanger inspection" 96i @ p42
  '/blog/heat-exchanger-tube-inspection-methods-procedures': {
    title: 'Heat Exchanger Tube Inspection 2026 — ECT, IRIS, RFT and MFL Compared',
    description:
      'Heat exchanger tube inspection methods compared: eddy current, IRIS, remote field and MFL by tube material, defect type and detection limit; bundle access and cleaning requirements; sampling strategy; and how results drive retube-versus-plug decisions.',
  },

  // top query "predix digital twin" 85i @ p22 — searcher wants Predix, title buries it
  '/compare/atlantis-dt-vs-ge-predix': {
    title: 'GE Predix Digital Twin 2026 — What Happened to It, and the Alternatives Compared',
    description:
      'Where GE Predix ended up after the GE breakup, what survives inside GE Vernova APM, and how it compares with inspection-native asset integrity platforms on NDT data depth, API 579 fitness-for-service and RBI. Includes where GE Vernova is still the better choice.',
  },

  // top query "3d scanning services singapore" 295i @ p36 — "services" missing from title
  '/3d-scanning-singapore': {
    title: '3D Scanning Services in Singapore 2026 — LiDAR, Photogrammetry and Drone Survey',
    description:
      '3D laser scanning and photogrammetry services in Singapore for Jurong Island process plant, marine and offshore yards, and industrial facilities: survey-grade point clouds, as-built modelling, scan-to-BIM and digital twin capture. Quote within 24 hours.',
  },

  // top query "3d laser scanning netherlands" 191i @ p41
  '/3d-scanning-netherlands': {
    title: '3D Laser Scanning in the Netherlands 2026 — Rotterdam, Antwerp and North Sea Port',
    description:
      '3D laser scanning and reality capture across the Netherlands: Rotterdam and Antwerp process plant, tank storage terminals and marine assets. Survey-grade point clouds, as-built modelling and scan-to-BIM for integrity and engineering teams.',
  },

  // top query "point cloud scanning louisville" 149i @ p20
  '/3d-scanning-louisville': {
    title: 'Point Cloud Scanning in Louisville 2026 — Survey-Grade 3D Laser Scanning and BIM',
    description:
      'Point cloud and 3D laser scanning services in Louisville: survey-grade registration, as-built modelling, scan-to-BIM deliverables and clash detection for industrial, plant and construction projects. Same-day quote.',
  },

  // top query "asnt level iii consulting" 91i @ p19
  '/consulting': {
    title: 'ASNT Level III Consulting 2026 — Written Practices, Procedures, RBI and FFS',
    description:
      'Independent ASNT Level III consulting: written-practice authoring to SNT-TC-1A and CP-189, procedure development and approval across UT, PAUT, RT, MT, PT and ET, personnel certification, RBI programme design per API 580/581 and FFS per API 579.',
  },

  // top query "astm e709" 61i @ p44 — the governing standard is not in the title
  '/magnetic-particle-testing': {
    title: 'Magnetic Particle Testing (MT) 2026 — ASTM E709, ASME V Article 7, Yoke and Prod Technique',
    description:
      'Magnetic particle testing explained against ASTM E709 and ASME Section V Article 7: yoke, prod, coil and central-conductor techniques, wet fluorescent versus dry powder, field strength verification, lighting requirements and acceptance criteria.',
  },

  // top query "mfl corrosion inspection pipeline" 258i @ p44
  '/services/mfl-pipeline-inspection': {
    title: 'MFL Pipeline Inspection 2026 — In-Line Corrosion Detection, Coverage and Limits',
    description:
      'Magnetic flux leakage in-line inspection for pipeline corrosion: what MFL detects and misses, axial versus circumferential field, sizing accuracy and confidence, tool selection by wall thickness and product, and when UT or EMAT is the better tool.',
  },

  // top query "corrosion under insulation pipeline inspection" 170i @ p33 — generic templated title
  '/blog/corrosion-under-insulation-cui-detection-guide': {
    title: 'Corrosion Under Insulation (CUI) 2026 — Detection Methods, Risk Zones and Inspection Strategy',
    description:
      'CUI detection without full insulation removal: pulsed eddy current, real-time and digital radiography, guided wave and IR thermography compared; the temperature and location bands where CUI is credible per API RP 583; and how to prioritise a CUI inspection programme.',
  },

  // top query "ultrasonic corrosion" 146i @ p50
  '/blog/ultrasonic-thickness-measurement-corrosion-monitoring-guide': {
    title: 'Ultrasonic Thickness Measurement 2026 — Corrosion Monitoring, CML Grids and Accuracy',
    description:
      'UT thickness measurement for corrosion monitoring: probe and couplant selection, temperature compensation, repeatability at CMLs, grid design against damage mechanism, corrosion-rate calculation and how readings feed remaining-life and inspection intervals.',
  },

  // top query "phased array ultrasonic testing" 178i @ p72
  '/blog/phased-array-ultrasonic-testing-paut-guide': {
    title: 'Phased Array Ultrasonic Testing (PAUT) 2026 — Beam Forming, Scan Plans and Calibration',
    description:
      'PAUT explained: electronic beam steering and focusing, sectorial versus linear scanning, scan-plan design and coverage proof, wedge and probe selection, calibration and sensitivity setting, and where PAUT replaces radiography under ASME Section V.',
  },

  // top query "aerospace composite inspection" 112i @ p36 — 1,234 impressions, 1 click
  '/blog/aerospace-composite-inspection-ndt-methods-guide': {
    title: 'Aerospace Composite Inspection 2026 — Detecting Delamination, Disbond and Impact Damage',
    description:
      'NDT for aerospace composites: pulse-echo UT, phased array, through-transmission, bond testing, thermography and shearography compared on delamination, disbond, porosity and barely-visible impact damage, with NAS 410 and AS9100 personnel requirements.',
  },

  // top query "api 579 analysis" 48i @ p33
  '/blog/api-579-fitness-for-service-guide': {
    title: 'API 579 Fitness-for-Service 2026 — Level 1, 2 and 3 Assessments Explained',
    description:
      'API 579-1/ASME FFS-1 explained: when an FFS assessment is triggered, Part 4 general metal loss, Part 5 local metal loss and Part 9 crack-like flaws, the Level 1/2/3 escalation, required inspection data quality, and how results set remaining life.',
  },

  // top query "ndt equipment repair & calibration" 60i @ p26
  '/blog/ndt-equipment-calibration-and-maintenance-best-practices': {
    title: 'NDT Equipment Calibration 2026 — Intervals, ISO 17025 Traceability and Records',
    description:
      'Calibration practice for NDT equipment: what needs certificates including probes, wedges and reference blocks, how to set intervals from drift history rather than a fixed year, ISO 17025 traceability chains, and handling an out-of-tolerance return.',
  },

  // top query "ndt testing singapore" 108i @ p49
  '/ultrasonic-testing-singapore': {
    title: 'Ultrasonic Testing Services in Singapore 2026 — UT, PAUT and TOFD for Plant and Marine',
    description:
      'Ultrasonic testing services in Singapore: conventional UT, phased array and TOFD for Jurong Island process plant, marine and offshore yards and structural steel, delivered by ASNT and ISO 9712 certified technicians. Quote within 24 hours.',
  },

  // top query "nadcap liquid penetrant inspections" 34i @ p34
  '/penetrant-testing-los-angeles': {
    title: 'Liquid Penetrant Inspection in Los Angeles 2026 — Nadcap-Aligned PT Services',
    description:
      'Liquid penetrant inspection services in Los Angeles for aerospace, defence and general manufacturing: fluorescent and visible dye methods, Nadcap-aligned process control, NAS 410 certified technicians and ASTM E1417 compliant procedures.',
  },

  // top query "asnt level iii consulting" 11i @ p43 — page competes with /consulting; differentiate
  '/blog/ndt-level-iii-certification-requirements-guide': {
    title: 'ASNT NDT Level III Certification 2026 — Basic and Method Exam Requirements',
    description:
      'What ASNT NDT Level III certification requires: the Basic examination, method examinations, education and experience routes, how CP-189 differs from SNT-TC-1A, recertification, and what a Level III is actually responsible for once certified.',
  },

  // top query "ndt certification nationwide contracts" 27i @ p44 — generic templated title
  '/blog/best-ndt-training-providers-and-programs': {
    title: 'Choosing an NDT Training Provider 2026 — What Actually Separates Good From Bad',
    description:
      'How to evaluate an NDT training provider: accreditation and scheme alignment, practical hours and specimen quality, instructor Level III credentials, pass-rate transparency, employer recognition, and the questions worth asking before you book a cohort.',
  },

  // top query "how to prove weld integrity ndt methods" 7i @ p6 — generic templated title
  '/blog/weld-inspection-ndt-methods-guide': {
    title: 'Weld Inspection Methods 2026 — RT, UT, PAUT, MT, PT and VT Compared by Defect Type',
    description:
      'Which NDT method finds which weld defect: RT, UT, PAUT, TOFD, MT, PT and VT compared on porosity, slag, lack of fusion, cracks and undercut, with the governing acceptance criteria under ASME Section VIII, AWS D1.1 and API 1104.',
  },

  // top query "conventional ultrasonics" 29i @ p28 — generic templated title
  '/blog/ultrasonic-testing-ultimate-guide': {
    title: 'Ultrasonic Testing (UT) 2026 — Principles, Probes, Calibration and Flaw Sizing',
    description:
      'Ultrasonic testing explained: pulse-echo and through-transmission, straight and angle beam, probe frequency and damping, DAC/DGS calibration, flaw sizing techniques, and the ASME Section V Article 4 requirements that govern the examination.',
  },

  // top query "iso 9712 sertifiointi" 55i @ p27 — generic templated title; strong non-English demand
  '/blog/iso-9712-certification-process-step-by-step-guide': {
    title: 'ISO 9712 Certification 2026 — Process, Levels, Exams and Recertification Explained',
    description:
      'ISO 9712 NDT personnel certification step by step: the three levels, training hours and industrial experience by method, general/specific/practical examinations, the role of the certification body, validity periods and recertification requirements.',
  },

  // top query "non-destructive testing services market" 155i @ p54 — searcher wants market data
  '/ndt-industry-statistics': {
    title: 'NDT Industry Statistics 2026 — Market Size, Growth, Method Share and Regional Split',
    description:
      'Non-destructive testing market data for 2026: global and regional market size and growth, share by method, share by end-use industry, workforce and certification trends, and the drivers behind demand in oil and gas, aerospace and power.',
  },

  // top query "paut" 91i @ p12 — glossary entry now prerendered; make the snippet answer the query
  '/glossary/phased-array-ultrasonic-testing-paut': {
    title: 'PAUT — What Phased Array Ultrasonic Testing Means | NDT Glossary',
    description:
      'PAUT stands for phased array ultrasonic testing: an ultrasonic method that uses a multi-element probe to steer and focus the beam electronically, producing sectorial and linear scans without moving the probe. Definition, uses and related terms.',
  },

  // top query "cswip" 104i @ p7
  '/glossary/cswip': {
    title: 'CSWIP — What It Means and How It Compares to CWI and PCN | NDT Glossary',
    description:
      'CSWIP is the UK certification scheme for welding inspection and NDT personnel operated by TWI Certification. What the 3.0, 3.1 and 3.2 grades cover, how CSWIP compares with AWS CWI and PCN, and where it is recognised.',
  },

  // top query "hvl meaning" 115i @ p11
  '/glossary/half-value-layer-hvl': {
    title: 'HVL — What Half-Value Layer Means in Radiography | NDT Glossary',
    description:
      'Half-value layer (HVL) is the thickness of a given material that reduces radiation intensity by half. What it means in industrial radiography, how it relates to shielding and exposure calculation, and typical values by material and energy.',
  },

  // top query "api 570 piping inspection code official api" 37i @ p10
  '/blog/api-570-piping-inspection-code-requirements': {
    title: 'API 570 Piping Inspection Code 2026 — Intervals, Thickness Limits and CML Spacing',
    description:
      'What API 570 actually requires: inspection intervals by piping class and service, minimum thickness and corrosion-rate calculation, CML placement and spacing, injection-point and dead-leg requirements, and the repair and rerating rules.',
  },

  // top query "ultrasonic shear wave inspection" 20i @ p16
  '/blog/shear-wave-ut-for-thick-section-inspection': {
    title: 'Shear Wave Ultrasonic Inspection 2026 — Angle Beam Technique for Thick-Section Welds',
    description:
      'Shear wave UT explained: angle selection and skip distance, calibration on IIW and DSC blocks, DAC and TCG, sizing techniques for thick-section welds, and the ASME Section V Article 4 requirements governing the examination.',
  },
};
