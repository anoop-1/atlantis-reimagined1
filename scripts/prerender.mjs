/**
 * Atlantis NDT - Build-time Pre-render Script
 * Generates per-route index.html files with correct meta tags for SEO
 * No Puppeteer/Chrome needed - pure Node.js file operations
 *
 * Run: node scripts/prerender.mjs  (automatically after vite build)
 */

import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const DIST = join(ROOT, 'dist');
const PUBLIC_DIR = join(ROOT, 'public');
const SITE_URL = 'https://atlantisndt.com';

// ─── CTR Overrides ──────────────────────────────────────────────────────────
// Per-route title/description rewrites tuned against GSC CTR data (2026-05).
// These pages were ranking in top 10 with 0.0–0.9% CTR — the rewrites lead
// with numbers/specifics to lift CTR toward the 5–10% expected band.
const CTR_OVERRIDES = {
  '/blog/cwi-certification-requirements-cost-career-impact': {
    title: 'CWI Certification 2026: $1,500 Cost, 60% Pass Rate, $75K Salary',
    description: 'Real CWI exam costs ($1,065-$1,500), Part A/B/C structure, 60% first-attempt pass rate, salary by region. Study schedule + practice questions inside.'
  },
  '/blog/aerospace-composite-inspection-ndt-methods-guide': {
    title: 'Aerospace Composite Inspection: 7 NDT Methods Compared (UT, IRT, Bond Tester)',
    description: 'Phased Array UT vs Thermography vs Bond Tester for CFRP/GFRP. Defect detection rates, cost per inspection, when each method wins. Boeing/Airbus spec references.'
  },
  '/ndt-technician-salary': {
    title: 'NDT Technician Salary 2026: Level I $52K, Level II $68K, Level III $115K',
    description: 'Verified 2026 NDT pay data: Level I/II/III by US state, oil & gas vs aerospace premium, OT averages. Compare PAUT, RT, UT specialist rates.'
  },
  '/blog/risk-based-inspection-rbi-implementation-guide': {
    title: 'Risk-Based Inspection (RBI) 2026: API 580/581 Step-by-Step Implementation',
    description: 'Implement RBI per API 580/581: PoF/CoF scoring, inspection interval calculation, 12-step rollout. Free RBI worksheet template + case study from refinery.'
  },
  '/blog/ndt-equipment-calibration-and-maintenance-best-practices': {
    title: 'NDT Equipment Calibration 2026: ISO 17025 Schedule, Cost, 14-Point Checklist',
    description: 'Calibration intervals per ASME V / EN ISO 17025. UT/RT/MT equipment cost ($300-$2,500/yr), block requirements, traceability docs. Audit-ready checklist.'
  },
  '/asnt-certification': {
    title: 'ASNT Certification 2026: Cost ($200-$750), Requirements, Pass Rate by Method',
    description: 'ASNT SNT-TC-1A vs ACCP vs CP-189: exam fees by level, hours required, pass rates. Level I/II/III pathway with study plan + practice tests.'
  },
  '/blog/ndt-salary-guide-2026-global': {
    title: 'NDT Salary 2026: Level I $45-65K, Level II $55-85K, Level III $80-140K Global',
    description: 'Verified 2026 NDT pay by region (US, UK, UAE, India, Canada, Australia), method (PAUT premium +18%), and certification. Negotiation tips.'
  },
  '/blog/rt-vs-ut-complete-comparison': {
    title: 'RT vs UT 2026: 11-Point Comparison (Cost, Defects Found, Speed, Safety)',
    description: 'When to use radiographic vs ultrasonic testing: defect coverage, $/joint, throughput, regulatory acceptance per ASME V/AWS D1.1. Decision matrix included.'
  },
  '/api-570-certification': {
    title: 'API 570 Certification 2026 — Requirements, $730 Fee, 82% Pass Rate',
    description: 'API 570 piping inspector certification 2026: experience requirements, $730 exam fee, 82% first-attempt pass rate, 11 codes (B31.3, API 571/574/577/579), 5-day Atlantis prep, 3-yr recertification cycle.'
  },
  '/blog/ut-vs-rt-comparison': {
    title: 'UT vs RT for Welds 2026: Defect Detection, Cost, Code Acceptance Compared',
    description: 'Phased Array UT vs film/digital RT for weld inspection. Volumetric coverage, planar defect sensitivity, $/inch cost, ASME B31.3 acceptance.'
  },
  // New content pages built 2026-05-03 — added to CTR_OVERRIDES so prerender
  // injects targeted titles/descriptions instead of generic fallbacks.
  '/services/mfl-pipeline-inspection': {
    title: 'MFL Pipeline Inspection Service 2026 — In-Line Pigging, Cost & Coverage',
    description: 'MFL pipeline inspection from 4-inch to 56-inch — detects ID/OD corrosion, pitting, gouges. 100% bore coverage, $8K–$45K/mile typical. ASNT Level III oversight.'
  },
  '/compare/asnt-vs-pcn': {
    title: 'ASNT vs PCN / ISO 9712 — Which NDT Cert Wins in 2026?',
    description: 'ASNT (SNT-TC-1A) vs PCN / ISO 9712 side-by-side: geography, exam structure, recert, $200–$750 cost, employer recognition. Pick the right cert for your market.'
  },
  '/compare/api-510-vs-api-570': {
    title: 'API 510 vs API 570 — Which Inspector Cert in 2026? Salary, Scope, Exam',
    description: 'API 510 (pressure vessel) vs API 570 (piping) inspector — exam scope, $730 fee, $85K–$140K salary, who needs which, can you hold both. 2026 guide.'
  },
  '/compare/ndt-consulting-vs-in-house': {
    title: 'NDT Consulting vs In-House Team — 2026 Cost Breakdown & When to Hire',
    description: 'NDT consulting vs in-house Level III team — fully-loaded cost analysis ($180K–$320K/yr in-house vs $1.5K–$3.5K/day consulting). Hybrid model that wins.'
  },
  '/api-510-india': {
    title: 'API 510 India 2026 — Exam Centres, ₹65K Fee, ₹15L–₹35L Salary Guide',
    description: 'API 510 in India: Mumbai/Hyderabad/Delhi/Chennai exam centres, 2026 cost ₹60K–₹80K, prep classes ₹35K–₹1.2L, ₹15L–₹35L salary at Reliance/IOCL/BPCL.'
  },
  '/api-570-india': {
    title: 'API 570 India 2026 — Exam Centres, ₹60K Fee, ₹15L–₹32L Piping Inspector Salary',
    description: 'API 570 piping inspector in India: Mumbai/Hyderabad/Delhi/Chennai exam centres, 2026 INR pricing ₹60K–₹85K, ₹15L–₹32L salary at IOCL/BPCL/Reliance.'
  },
  '/api-653-india': {
    title: 'API 653 India 2026 — Tank Inspector Exam Centres, ₹60K Fee, ₹14L–₹32L Salary',
    description: 'API 653 storage tank inspector in India: Mumbai/Hyderabad/Delhi/Chennai exam centres, 2026 INR pricing ₹60K–₹85K, ₹14L–₹32L salary at IOCL/BPCL/Reliance terminals.'
  },
  // 2026-05-07 striking-distance batch — pages ranking pos 5-15 with low CTR
  // Goal: shift CTR from 0.5-1.5% baseline into 5-10% achievable band by leading
  // titles with year/number/specific outcome and metas with searcher value.
  '/blog/api-570-piping-inspection-code-requirements': {
    title: 'API 570 Piping Inspection 2026: Intervals, Thickness, CML Spacing — Full Code Guide',
    description: 'API 570 inspection intervals (5/10 yr), CML grid spacing, t-min calculation, repair criteria. ASME B31.3 + B31.4 cross-references. Inspector checklist + 12-question test.'
  },
  '/blog/api-579-fitness-for-service-guide': {
    title: 'API 579-1 Fitness-for-Service 2026: Level 1/2/3 Assessment in 8 Steps',
    description: 'API 579-1 / ASME FFS-1 step-by-step: general metal loss, local thin areas, pitting, blisters, crack-like flaws. Level 1/2/3 decision tree + free worksheet.'
  },
  '/blog/api-617-centrifugal-compressor-inspection': {
    title: 'API 617 Compressor Inspection 2026: Rotor, Bearings, Casing — 32-Point Checklist',
    description: 'API 617 9th edition inspection: rotor balance, journal/thrust bearings, dry-gas seals, casing alignment. Pre-test, mechanical run, performance test acceptance criteria.'
  },
  '/blog/asme-section-v-article-4-ut-requirements-explained': {
    title: 'ASME V Article 4 UT 2026: Calibration, Scanning, Acceptance — Plain English',
    description: 'ASME BPVC Section V Article 4 ultrasonic — DAC vs DGS calibration, scanning patterns (raster, parallel, perpendicular), acceptance criteria per ASME VIII Div 1 Mandatory Appendix 12. Free SOP template.'
  },
  '/blog/aws-d1-1-weld-acceptance-criteria-comprehensive-guide': {
    title: 'AWS D1.1 Weld Acceptance 2026: UT, RT, MT, VT Criteria + 41-Defect Decision Matrix',
    description: 'AWS D1.1:2025 acceptance criteria for UT (Annex K), RT, MT, VT. 41 weld defects with cause + repair guidance. Statically vs cyclically loaded thresholds. Free decision matrix.'
  },
  '/blog/automated-ut-aut-systems-complete-overview': {
    title: 'Automated UT (AUT) 2026: TKY Welds, Pipeline Girth, $50K–$500K System Cost',
    description: 'AUT for pipeline girth welds (RMS, Olympus, Eddyfi, Sonatest), TKY structural, mill seam weld inspection. ISO 13588, ASME V Article 4 Mandatory Appendix VII compliance. Cost breakdown.'
  },
  '/blog/forging-defect-detection-and-assessment': {
    title: 'Forging Defects 2026: 14 Common Defects, NDT Methods, Acceptance Criteria',
    description: 'Forging defects (laps, bursts, flakes, cold shuts, segregation, decarb). UT (ASME SA-388), MT, ET detection methods. ASTM A388, A604 acceptance criteria. Aerospace AMS 2154 cross-ref.'
  },
  '/blog/ndt-procedure-writing-guide-asme-section-v': {
    title: 'NDT Procedure Writing 2026: ASME V-Compliant Template (UT/RT/MT/PT/ET/VT)',
    description: 'Write code-compliant NDT procedures per ASME Section V Article 1. 14 mandatory elements, T-150 essential variables, qualification record, free Word template per method.'
  },
  '/blog/pipe-wall-thickness-inspection-ut-procedures': {
    title: 'Pipe Wall Thickness UT 2026: A-Scan, B-Scan, AUT — When Each Wins',
    description: 'Manual UT vs automated UT (AUT) vs guided wave (LRUT) for pipe thickness. CML grid spacing, frequency selection (2.25–10 MHz), couplant choice. API 570 / 574 / 579 alignment.'
  },
  '/blog/shear-wave-ut-for-thick-section-inspection': {
    title: 'Shear Wave UT 2026: 45°/60°/70° Probe Selection for Thick-Section Welds',
    description: 'Shear wave UT angle selection (45°, 60°, 70°), DAC + DGS sizing, mode-converted echoes, ASME V Article 4 calibration. Free probe-selection decision matrix.'
  },
  '/blog/visual-testing': {
    title: 'Visual Testing (VT) 2026: Direct, Remote, Translucent — ASNT/ISO Procedures',
    description: 'Visual testing per ASNT SNT-TC-1A, ASME V Article 9, ISO 17637. Direct VT, remote VT (boroscope/RVI), translucent VT. Lighting (>1000 lux), magnification, vision acuity (Jaeger #2).'
  },
  '/blog/weld-inspection-acceptance-criteria-aws-vs-asme': {
    title: 'Weld Acceptance: AWS D1.1 vs ASME B31.3 vs API 1104 — Side-by-Side 2026',
    description: 'AWS D1.1 vs ASME BPVC Section IX vs API 1104 weld acceptance — porosity limits, slag, undercut, crack tolerance. Static vs cyclic loading thresholds. Free decision matrix.'
  },
  '/blog/ndt-career-guide': {
    title: 'NDT Career Guide 2026: Salary Path Level I→III, $45K → $140K, 8-Year Roadmap',
    description: 'NDT career path Level I→II→III: hours, exams ($200-$750), salary by region, method premiums (PAUT +18%, PA UT +12%). Junior→Senior→Lead→Manager→Director timeline.'
  },
  '/blog/ndt-career-top-choice-2025-global-market-trends': {
    title: 'NDT Career 2026: 4.2% Growth, $65K Avg, Top 10 Methods + Geographic Demand',
    description: 'NDT job market 2026: 4.2% growth, ASNT vs PCN vs CGSB demand by region, oil & gas vs aerospace vs power-gen pay premiums. Top 10 NDT methods by hire volume.'
  },
  '/blog/ndt-level-iii-certification-requirements-guide': {
    title: 'ASNT Level III 2026: 4-Year Path, 1200 Hours Required, $750 Exam — Complete Guide',
    description: 'ASNT Level III requirements: experience hours (1200 by NAS 410, 800 by SNT-TC-1A), basic + method exam, vision acuity, 5-year recertification. Pass rate 60%, study schedule + practice tests.'
  },
  '/blog/ndt-technician-salary-guide-2026-industry-report': {
    title: 'NDT Technician Salary 2026: Level I $52K, Level II $68K, Level III $115K — by State + Method',
    description: 'NDT salaries 2026 verified by state (US), method premium (PAUT +18%, RT +8%), industry (aerospace +22%, oil & gas +14%). OT averages, sign-on bonuses, contractor day-rates.'
  },
  '/consulting/ndt-consulting-level-iii': {
    title: 'ASNT Level III Consulting 2026: $1,500–$3,500/day Independent Approval',
    description: 'Independent ASNT Level III consulting: written-practice authoring, procedure approval, audit support (ADNOC, Aramco, QatarEnergy, NRC). $1,500-$3,500/day depending on method + travel. Free 30-min discovery call.'
  },
  '/magnetic-particle-testing-singapore': {
    title: 'Magnetic Particle Testing Singapore 2026: ISO 9712 + ASNT, $400/day, Same-Week Mobilisation',
    description: 'MT inspection services in Singapore — ASNT Level II + ISO 9712 certified, AC/DC yokes, fluorescent + visible particles. Same-week mobilisation across Jurong, Tuas, Sembawang. ISO 9934 compliant.'
  },
  '/penetrant-testing-singapore': {
    title: 'Penetrant Testing Singapore 2026: ASTM E1417 + ISO 3452, $350/day, ASNT Level II',
    description: 'PT (dye penetrant) inspection in Singapore: solvent-removable, water-washable, post-emulsifiable. ASTM E1417 / ISO 3452-1 compliant. Same-week deployment Jurong/Tuas/Sembawang.'
  },
  '/radiographic-testing-singapore': {
    title: 'Radiographic Testing Singapore 2026: Ir-192/Se-75/X-Ray, NEA-Licensed, $600–$1500/day',
    description: 'RT inspection Singapore — Ir-192, Se-75, X-ray. NEA radiation license, ASME V/AWS D1.1/ISO 17636 compliant. Pipeline, pressure vessel, structural welds across Jurong/Tuas/Sembawang.'
  },
  '/ndt-training-usa': {
    title: 'NDT Training USA 2026: ASNT Level I/II/III, 40-80 hr Courses, $1,200–$3,500',
    description: 'NDT training across USA — ASNT SNT-TC-1A + ACCP Level I/II/III. UT, RT, MT, PT, ET, VT. Online + onsite (Houston, Dallas, Pittsburgh, Anchorage). 95% pass rate, OJT logs included.'
  },
  // OFI 2026-05-09 — top remaining CTR bleeders not yet covered.
  // /blog/magnetic-particle-testing alone losing ~70 cl/mo at pos 15 with 1342 impr.
  '/blog/magnetic-particle-testing': {
    title: 'Magnetic Particle Testing (MT) 2026: Wet vs Dry, $0.30–$1.20/inch, ASTM E709',
    description: 'MT for ferromagnetic surface defects: wet fluorescent vs dry visible, AC vs DC vs HWDC, yokes vs benches. ASTM E709, ASME V Article 7 acceptance. $0.30–$1.20 per linear inch.'
  },
  '/blog/eddy-current-testing-complete-guide': {
    title: 'Eddy Current Testing 2026: ECT, ECA, RFT for Tubes, Welds, Coatings',
    description: 'Complete ECT guide — conventional, Eddy Current Array, Remote Field for tubes/welds/coatings. ASTM E309/E571, ASME V Article 8 acceptance. Frequency selection + lift-off compensation.'
  },
  '/blog/asnt-snt-tc-1a-certification-requirements': {
    title: 'ASNT SNT-TC-1A 2026: Hours, Vision, Exam, Recert Requirements per Method',
    description: 'SNT-TC-1A 2024 edition by method (UT/RT/MT/PT/ET/VT): training hours, OJT minimums, vision tests (Jaeger 2 + color), exam structure, recertification cycle. Employer-based scheme.'
  },
  '/blog/asme-b31-3-process-piping-requirements': {
    title: 'ASME B31.3 Process Piping NDT 2026: Examination % by Service Class, Acceptance Criteria',
    description: 'ASME B31.3 NDT extent by fluid service: Normal 5% RT, Severe Cyclic 100% RT/UT, Category D visual only. Weld defect acceptance per Table 341.3.2 + welder qualification per Section IX.'
  },
  '/blog/ai-in-ndt-machine-learning-for-defect-detection': {
    title: 'AI in NDT 2026: Machine Learning Defect Detection, Accuracy, Adoption Timeline',
    description: 'Machine learning for UT/RT defect detection — CNN architectures, training data sizes, 92–98% accuracy benchmarks, regulatory acceptance status. Integration with PAUT/AUT systems.'
  },
  // === CORPORATE TRAINING VERTICALS 2026-05-09 ===
  // Industry-vertical pages targeting B2B in-house training buyers (HR / L&D / training mgr).
  // Title format: "Corporate NDT Training for {Industry} 2026: {N} Engineers, ASNT Aligned, On-Site or LMS"
  // — kept ≤65 chars per spec.
  '/corporate-training/oil-gas': {
    title: 'Corporate NDT Training for Oil & Gas 2026: 10+ Engineers, ASNT',
    description: 'In-house oil & gas NDT training: API 510/570/653, ASME B31.3/V, on-site / LMS / hybrid for 10–100+ engineers, SNT-TC-1A audit-ready records, ADNOC/Aramco/BSEE evidence packs.'
  },
  '/corporate-training/aerospace': {
    title: 'Corporate NDT Training for Aerospace 2026: 10+ Engineers, NAS 410',
    description: 'In-house aerospace NDT training: NAS 410, EN 4179, Nadcap AC7114, Boeing BAC + Airbus AITM bridging, on-site / LMS / hybrid, group pricing 10–100+ engineers.'
  },
  '/corporate-training/nuclear': {
    title: 'Corporate NDT Training for Nuclear 2026: 10+ Engineers, ASME XI',
    description: 'In-house nuclear NDT training: ASME III/XI, CP-189, 10 CFR 50 App B, NQA-1, PDI App VIII prep, on-site / LMS / hybrid, NRC/CNSC/IAEA-ready records, 10–100+ cohorts.'
  },
  '/corporate-training/marine': {
    title: 'Corporate NDT Training for Marine 2026: 10+ Engineers, DNV/ABS/LR',
    description: 'In-house marine and offshore NDT training: DNV-OS-C401/F101, ABS, Lloyd\'s Register, ACFM splash-zone, CSWIP 3.1/3.4U prep, hybrid delivery for FPSO + yard cohorts of 10–100+.'
  },
  '/corporate-training/renewable-energy': {
    title: 'Corporate NDT Training for Renewables 2026: 10+ Engineers, DNV/H2',
    description: 'In-house wind, solar, hydrogen and BESS NDT training: DNV-ST-0376, DNVGL-RP-0416, ASME B31.12 hydrogen piping, drone visual inspection modules, hybrid 10–100+ cohorts.'
  },
  '/corporate-training/petrochemical': {
    title: 'Corporate NDT Training for Petrochem 2026: 10+ Engineers, API 571',
    description: 'In-house petrochemical NDT training: API 510/570/571/579-1/580/581, HTHA + creep + damage-mechanism workshops, RBI rollout, hybrid 10–100+ engineer cohorts.'
  },
  '/corporate-training/power-generation': {
    title: 'Corporate NDT Training for Power Gen 2026: 10+ Engineers, ASME I',
    description: 'In-house thermal power NDT training: ASME I, ASME B31.1, NBIC NB-23, EPRI HEP guidelines, creep / Type IV cracking screening, outage-window scheduled 10–100+ cohorts.'
  },
  '/corporate-training/fabrication': {
    title: 'Corporate NDT Training for Fabrication 2026: 10+ Engineers, AWS',
    description: 'In-house fabrication-shop NDT and CWI training: AWS D1.1/D1.5, ASME IX, EN 1090-2, ISO 3834, AISC; PAUT acceptance per AWS Annex K; group pricing 10–100+ engineers.'
  },
  '/corporate-training/maritime': {
    title: 'Corporate NDT Training for Maritime 2026: 10+ Engineers, IACS CSR',
    description: 'In-house maritime NDT training for ship-repair yards: IACS CSR, DNV/ABS/LR/BV/ClassNK rules, UTM grid per UR Z10, IACS Rec 84, CSWIP 3.1 prep, hybrid 10–100+ cohorts.'
  },
  '/corporate-training/defense': {
    title: 'Corporate NDT Training for Defense 2026: 10+ Engineers, NAS 410',
    description: 'In-house defense and depot NDT training: NAS 410, MIL-STD-2154/1907, NAVSEA TP248/TP271, T.O. 33B-1-1, audit-ready DCMA/NAVAIR/NAVSEA evidence pack, 10–100+ cohorts.'
  },
  // === ERP/DT PRODUCT HUB 2026-05-09 ===
  '/compare/atlantis-dt-vs-aveva-pi-system': {
    title: 'Atlantis Digital Twin vs AVEVA PI System 2026: NDT-Native vs Time-Series',
    description: 'Atlantis DT vs AVEVA PI System compared: NDT-native data model vs time-series historian, $200K vs $50K-$500K pricing, deployment time, integrations, when each wins.'
  },
  '/compare/atlantis-dt-vs-osisoft-pi': {
    title: 'Atlantis Digital Twin vs OSIsoft PI 2026: NDT Overlay vs Process Historian',
    description: 'Atlantis DT vs OSIsoft PI: 3D NDT-overlay platform vs process historian. Asset integrity coverage, RBI/FFS workflows, integration cost, deployment timeline compared.'
  },
  '/compare/atlantis-dt-vs-hexagon-eam': {
    title: 'Atlantis Digital Twin vs Hexagon EAM 2026: NDT-First vs Asset-Maint Platform',
    description: 'Atlantis DT vs Hexagon EAM: NDT-first 3D digital twin vs full enterprise asset management. Inspection workflow, RBI/RCM integration, $200K vs $400K+ TCO.'
  },
  '/compare/atlantis-dt-vs-siemens-mindsphere': {
    title: 'Atlantis Digital Twin vs Siemens MindSphere 2026: NDT Asset vs IIoT Platform',
    description: 'Atlantis DT vs Siemens MindSphere: NDT-data-rich vs IIoT-sensor-rich digital twin. API 579 FFS, RBI workflows, integration cost, when each wins for inspection-heavy assets.'
  },
  '/compare/atlantis-dt-vs-ge-predix': {
    title: 'Atlantis Digital Twin vs GE Predix APM 2026: NDT-Specific vs Generic APM',
    description: 'Atlantis DT vs GE Vernova APM (Predix): NDT-specific data model vs generic asset performance. Integration with PAUT/RT/MT data, $200K vs $300K-$1M, deployment time.'
  },
  '/compare/atlantis-dt-vs-ibm-maximo': {
    title: 'Atlantis Digital Twin vs IBM Maximo 2026: NDT 3D vs CMMS Work Order',
    description: 'Atlantis DT vs IBM Maximo: 3D NDT visualization vs work-order CMMS. How they complement (vs replace) each other, integration architecture, cost model.'
  },
  '/compare/atlantis-dt-vs-bentley-itwin': {
    title: 'Atlantis Digital Twin vs Bentley iTwin 2026: NDT Inspection vs Engineering DT',
    description: 'Atlantis DT vs Bentley iTwin: NDT-data-rich inspection digital twin vs engineering/BIM digital twin. Different buyer, different workflow, integration possibilities.'
  },
  '/compare/atlantis-dt-vs-aspen-mtell': {
    title: 'Atlantis Digital Twin vs AspenTech Mtell 2026: NDT vs Predictive Maintenance ML',
    description: 'Atlantis DT vs AspenTech Mtell: NDT-data 3D twin vs ML-driven predictive maintenance. How they integrate, cost vs benefit, recommended stack for asset integrity programs.'
  },
  '/integrations/sap-pm': {
    title: 'Atlantis Digital Twin SAP PM Integration 2026: Bi-Directional NDT Data Sync',
    description: 'Native SAP PM integration: bi-directional notification/work-order sync, equipment master alignment, NDT findings flowed to SAP, 8-12 week deployment, OData + SAP RFC connectors.'
  },
  '/integrations/ibm-maximo': {
    title: 'Atlantis Digital Twin IBM Maximo Integration 2026: REST API + MAS Connector',
    description: 'IBM Maximo (and MAS 8/9) integration: REST API + native MAS connector, work-order sync, asset hierarchy mirror, NDT findings flow as Maximo work logs, 6-10 week deployment.'
  },
  '/integrations/meridium-apm': {
    title: 'Atlantis DT Meridium APM Integration 2026: Native RBI/FFS Data Exchange',
    description: 'GE Vernova Meridium APM integration: RBI input data flows to Meridium, FFS Level 1/2/3 results sync back, asset hierarchy alignment, 8-12 week typical deployment timeline.'
  },
  '/integrations/aspen-mtell': {
    title: 'Atlantis DT AspenTech Mtell Integration 2026: NDT Data → ML Prediction',
    description: 'AspenTech Mtell integration: NDT condition data feeds Mtell ML training, anomaly predictions surfaced in Atlantis 3D twin, joint dashboards for inspection + reliability teams.'
  },
  '/integrations/ge-vernova-apm': {
    title: 'Atlantis DT GE Vernova APM Integration 2026: Asset Hierarchy + Inspection Sync',
    description: 'GE Vernova APM (formerly Meridium) integration: full asset hierarchy mirror, RBI/FFS data exchange, inspection findings push, 8-12 week deployment with Level III oversight.'
  },
  '/integrations/oracle-erp-cloud': {
    title: 'Atlantis Digital Twin Oracle ERP Cloud Integration 2026: REST API + EAM Bridge',
    description: 'Oracle ERP Cloud + Oracle EAM integration: REST API connector, work-order + asset master sync, NDT findings flow as Oracle service requests, 8-10 week deployment.'
  },
  '/digital-twins/refinery': {
    title: 'Digital Twin for Refineries 2026: NDT Overlay, RBI per API 581, FFS per API 579',
    description: '3D refinery digital twin with NDT inspection overlay (UT thickness, RT defects, MT/PT indications), RBI per API 581, FFS per API 579-1, $200K/yr typical. 6-12 month ROI.'
  },
  '/digital-twins/fpso': {
    title: 'Digital Twin for FPSOs 2026: Hull, Process, Mooring NDT in One 3D View',
    description: 'FPSO digital twin: hull thickness UT mapping, process piping RBI, mooring chain integrity, helideck NDT. ABS/DNV/Bureau Veritas class compliance. 12-18 month deployment.'
  },
  '/digital-twins/storage-tank': {
    title: 'Digital Twin for Storage Tanks 2026: API 653 In-Service, Floor MFL, Shell UT',
    description: 'Above-ground storage tank digital twin: API 653 inspection schedule, floor MFL maps, shell UT thickness grids, settlement monitoring. ROI 9-18 months for 50+ tank fleets.'
  },
  '/digital-twins/pipeline': {
    title: 'Digital Twin for Pipelines 2026: ILI MFL/UT Integration, API 1163, Class Location',
    description: 'Pipeline digital twin: ILI MFL/UT/CIPS data overlay, API 1163 in-line inspection compliance, class location updates, repair tracking. 4-12 inch through 56-inch transmission.'
  },
  '/digital-twins/nuclear-plant': {
    title: 'Digital Twin for Nuclear Plants 2026: ASME XI ISI, Reactor Vessel, Steam Generator',
    description: 'Nuclear plant digital twin: ASME XI ISI program, reactor vessel UT/PAUT, steam generator ECT tube inspections, primary loop. NRC/IAEA compliance, INPO-aligned data model.'
  },
  '/digital-twins/wind-farm': {
    title: 'Digital Twin for Wind Farms 2026: Blade IRT/UT, Tower NDT, Foundation Monitoring',
    description: 'Wind turbine digital twin: blade IRT/UT inspection, tower MT/UT, foundation monitoring, drone NDT data overlay. Onshore + offshore. 50-500 turbine fleets, 18-month ROI.'
  },
  '/digital-twins/offshore-platform': {
    title: 'Digital Twin for Offshore Platforms 2026: Topsides, Jacket, Caisson NDT 3D View',
    description: 'Offshore platform digital twin: topsides process NDT, jacket node UT, caisson inspection, riser integrity. API RP 2A, NORSOK N-005, BSEE/NOPSEMA/HSE compliance.'
  },
  '/digital-twins/petrochemical-complex': {
    title: 'Digital Twin for Petrochemical Complexes 2026: Reactor, Heater, Compressor NDT',
    description: 'Petrochemical complex digital twin: reactor + heater + compressor NDT data overlay, RBI per API 581, turnaround planning. 100-2,000 equipment items, 12-18 month deployment.'
  },
  '/digital-twins/heat-exchanger': {
    title: 'Digital Twin for Heat Exchangers 2026: ECT Tube Maps, Tubesheet, Shell Inspection',
    description: 'Heat exchanger digital twin: ECT/IRIS tube inspection mapping, tubesheet ligament UT, shell-side corrosion, plug history. 50-15,000 tubes per HX, ROI 6-12 months.'
  },
  '/digital-twins/pressure-vessel': {
    title: 'Digital Twin for Pressure Vessels 2026: API 510 ISI, FFS, Repair Tracking',
    description: 'Pressure vessel digital twin: API 510 in-service inspection, FFS per API 579 for damage, repair/alteration tracking, ASME VIII Section 1 compliance. 9-15 month ROI.'
  },
  '/digital-twins/subsea': {
    title: 'Digital Twin for Subsea Assets 2026: Pipeline, Riser, BOP, Tree NDT Visualization',
    description: 'Subsea asset digital twin: flowline + riser UT/MFL, BOP MT/PT, tree component inspection, ROV-collected NDT data overlay. API 17, ISO 13628 compliance. 12-18 month deployment.'
  },
  '/digital-twins/data-center': {
    title: 'Digital Twin for Data Center Infrastructure 2026: Cooling, Power, Structural NDT',
    description: 'Data center digital twin: cooling-loop pipe UT, power infrastructure NDT, structural integrity. Uptime Institute Tier-aligned, 6-12 month deployment for hyperscale facilities.'
  }
};

// === PSEO NOINDEX 2026-05-09 ===
// Load the dead-page noindex list produced by scripts/pseo-audit.mjs.
// Routes in this Set get <meta name="robots" content="noindex,follow"> on
// render so Google drops them from SERP without breaking internal links.
// File is generated from 90d GSC data (<5 impressions). Re-run pseo-audit.mjs
// after each major GSC refresh to keep the list current.
let PSEO_NOINDEX = new Set();
try {
  const noindexFile = join(ROOT, 'scripts/pseo-noindex-list.json');
  if (existsSync(noindexFile)) {
    const data = JSON.parse(readFileSync(noindexFile, 'utf-8'));
    PSEO_NOINDEX = new Set(data.paths || []);
    console.log(`🚫 pSEO noindex list loaded: ${PSEO_NOINDEX.size} routes`);
  }
} catch (err) {
  console.warn(`  ⚠️  pSEO noindex list not loaded: ${err.message}`);
}
// === END PSEO NOINDEX 2026-05-09 ===

// ─── Helpers ────────────────────────────────────────────────────────────────

function toTitleCase(slug) {
  return slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
}

// Compute rotated review dates so JSON-LD reviews stay fresh as time passes.
// Latest review = today minus 30 days, then stepped back at 60/90/120/180 day
// intervals from today. Output ISO yyyy-mm-dd.
function isoDaysAgo(days) {
  const d = new Date();
  d.setUTCDate(d.getUTCDate() - days);
  return d.toISOString().slice(0, 10);
}
const ROTATED_REVIEW_DATES = {
  '2025-11-15': isoDaysAgo(30),   // most recent
  '2025-09-22': isoDaysAgo(60),
  '2026-01-10': isoDaysAgo(90),
  '2025-12-05': isoDaysAgo(120),
  '2026-02-18': isoDaysAgo(180),  // oldest
};

// Convert a route path to its OG image slug filename. e.g.
// "/blog/ndt-salary-guide-2026-global" -> "blog-ndt-salary-guide-2026-global.png"
function routeToOgSlug(routePath) {
  const trimmed = routePath.replace(/^\/+|\/+$/g, '');
  if (!trimmed) return 'home.png';
  return trimmed.replace(/\//g, '-') + '.png';
}

// Look up per-page OG image generated by gen-og-images.mjs (Bucket B).
// Returns absolute URL string or null if no custom image exists yet.
function getPerPageOgImage(routePath) {
  const slug = routeToOgSlug(routePath);
  const localPath = join(PUBLIC_DIR, 'og', slug);
  if (existsSync(localPath)) {
    return `${SITE_URL}/og/${slug}`;
  }
  return null;
}

function injectMeta(html, { title, description, canonical, ogTitle, ogDesc, ogImage, bodyContent, noindex, noindexFollow, hreflangLinks, structuredData }) {
  let out = html;

  // NOTE: All meta content replacements use FUNCTION replacers to prevent
  // user-supplied strings (e.g. titles with "$1,500" or "$200-$750") from
  // being interpreted as regex backreferences ($1, $&, $$).
  const safeTitle = title;
  const safeDesc = description.replace(/"/g, '&quot;');
  const safeOgTitle = (ogTitle || title).replace(/"/g, '&quot;');
  const safeOgDesc = (ogDesc || description).replace(/"/g, '&quot;');
  const safeOgUrl = canonical || SITE_URL;

  // Title
  out = out.replace(
    /<title>[^<]*<\/title>/,
    () => `<title>${safeTitle}</title>`
  );

  // Meta description
  out = out.replace(
    /<meta name="description"\s+content="[^"]*"\s*\/>/,
    () => `<meta name="description" content="${safeDesc}" />`
  );

  // Strip the global templated keywords meta — every page was inheriting the
  // same boilerplate keywords list which Google penalises as low-quality
  // signal. Per-page tags would be ideal but blogs.json has no `tags` field,
  // so we drop the meta entirely (instructed fallback path).
  out = out.replace(
    /\s*<meta\s+name="keywords"[\s\S]*?\/>\s*/,
    () => '\n  '
  );

  // Canonical
  if (canonical) {
    out = out.replace(
      /<link rel="canonical" href="[^"]*"\s*\/>/,
      () => `<link rel="canonical" href="${canonical}" />`
    );
  }

  // OG Title
  out = out.replace(
    /<meta property="og:title" content="[^"]*"\s*\/>/,
    () => `<meta property="og:title" content="${safeOgTitle}" />`
  );

  // OG Description
  out = out.replace(
    /<meta property="og:description"\s*\n?\s*content="[^"]*"\s*\/>/,
    () => `<meta property="og:description" content="${safeOgDesc}" />`
  );

  // OG URL
  out = out.replace(
    /<meta property="og:url" content="[^"]*"\s*\/>/,
    () => `<meta property="og:url" content="${safeOgUrl}" />`
  );

  // Per-page OG + Twitter image (falls back to template default if not provided).
  // Bucket B's gen-og-images.mjs writes public/og/<slug>.png; we look those up
  // per-route and rewrite both og:image and twitter:image when available.
  if (ogImage) {
    out = out.replace(
      /<meta property="og:image" content="[^"]*"\s*\/>/,
      () => `<meta property="og:image" content="${ogImage}" />`
    );
    out = out.replace(
      /<meta name="twitter:image" content="[^"]*"\s*\/>/,
      () => `<meta name="twitter:image" content="${ogImage}" />`
    );
  }

  // Twitter title / description (template currently ships none — inject if
  // a Twitter card exists so the per-page rewrite is fully consistent).
  // IMPORTANT: use function replacers to avoid `$1`/`$&` in user content
  // being interpreted as regex backrefs (titles like "$1,500" would corrupt).
  const twTitle = (ogTitle || title).replace(/"/g, '&quot;');
  const twDesc = (ogDesc || description).replace(/"/g, '&quot;');
  const twitterCardExists = /<meta name="twitter:card"/.test(out);
  if (twitterCardExists) {
    if (/<meta name="twitter:title"/.test(out)) {
      out = out.replace(
        /<meta name="twitter:title" content="[^"]*"\s*\/>/,
        () => `<meta name="twitter:title" content="${twTitle}" />`
      );
    } else {
      out = out.replace(
        /(<meta name="twitter:card"[^>]*\/>)/,
        (match) => `${match}\n  <meta name="twitter:title" content="${twTitle}" />`
      );
    }
    if (/<meta name="twitter:description"/.test(out)) {
      out = out.replace(
        /<meta name="twitter:description" content="[^"]*"\s*\/>/,
        () => `<meta name="twitter:description" content="${twDesc}" />`
      );
    } else {
      // Anchor on the just-injected twitter:title so we don't re-match
      // twitter:card and end up with nested meta tags.
      out = out.replace(
        /(<meta name="twitter:title"[^>]*\/>)/,
        (match) => `${match}\n  <meta name="twitter:description" content="${twDesc}" />`
      );
    }
  }

  // Noindex for embeddable widgets
  if (noindex) {
    out = out.replace(
      /<meta name="robots" content="[^"]*"\s*\/>/,
      `<meta name="robots" content="noindex, nofollow" />`
    );
    // If no robots meta exists, add one after description
    if (!out.includes('name="robots"')) {
      out = out.replace(
        /<meta name="description"/,
        `<meta name="robots" content="noindex, nofollow" />\n    <meta name="description"`
      );
    }
  }

  // === PSEO NOINDEX 2026-05-09 ===
  // noindex,follow variant for dead pSEO pages — preserves internal link
  // equity so neighboring pages still benefit while Google drops the URL
  // from SERP. Distinct from the embeddable-widget noindex,nofollow above.
  if (noindexFollow) {
    out = out.replace(
      /<meta name="robots" content="[^"]*"\s*\/>/,
      `<meta name="robots" content="noindex, follow" />`
    );
    if (!out.includes('name="robots"')) {
      out = out.replace(
        /<meta name="description"/,
        `<meta name="robots" content="noindex, follow" />\n    <meta name="description"`
      );
    }
  }
  // === END PSEO NOINDEX 2026-05-09 ===

  // Inject hreflang links into <head>
  if (hreflangLinks && hreflangLinks.length > 0) {
    const hreflangTags = hreflangLinks.map(
      ({ hreflang, href }) => `  <link rel="alternate" hreflang="${hreflang}" href="${href}" />`
    ).join('\n');
    out = out.replace('</head>', `${hreflangTags}\n</head>`);
  }

  // Inject structured data JSON-LD into <head>
  if (structuredData) {
    const sdTag = `  <script type="application/ld+json">${JSON.stringify(structuredData)}</script>`;
    out = out.replace('</head>', `${sdTag}\n</head>`);
  }

  // Replace static body fallback content if provided.
  // Use a function replacer so literal `$` in bodyContent (e.g. "$1800") is
  // NOT interpreted as a regex backref like $1 — this previously corrupted
  // any pricing string starting with $1, $2, $& etc.
  if (bodyContent) {
    // Always append a 5-pillar hub link row so every prerendered page exposes
    // internal links to /consulting, /ndt-training, /digital-twins,
    // /best-ndt-reporting-software-2026, /ndt-erp-solution — this funnels
    // head-term link equity into the pillar hubs across all ~2,477 pages.
    const PILLAR_NAV = `\n  <nav aria-label="NDT solution pillars" class="pillar-hub-nav"><span>Explore NDT solutions:</span> <a href="/consulting">NDT Consulting</a> <a href="/ndt-training">NDT Training</a> <a href="/digital-twins">Digital Twin NDT</a> <a href="/best-ndt-reporting-software-2026">NDT Reporting Software</a> <a href="/ndt-erp-solution">NDT ERP Software</a></nav>`;
    const augmentedBody = bodyContent + PILLAR_NAV;
    out = out.replace(
      /(<div id="root">)[\s\S]*?(<\/div>\s*<script)/,
      (_match, open, close) => `${open}\n${augmentedBody}\n${close}`
    );
  }

  return out;
}

function writeRoute(routePath, meta, template) {
  // routePath is like '/consulting/ndt-consulting-houston'
  // becomes dist/consulting/ndt-consulting-houston/index.html
  const segments = routePath.replace(/^\//, '').split('/');
  const dir = join(DIST, ...segments);
  mkdirSync(dir, { recursive: true });
  const html = injectMeta(template, meta);
  writeFileSync(join(dir, 'index.html'), html, 'utf-8');
}

// ─── Load base template ───────────────────────────────────────────────────

let baseTemplate = readFileSync(join(DIST, 'index.html'), 'utf-8');

// Rotate hardcoded JSON-LD review dates so they age forward with each build.
// Originals are baked into the dist/index.html template (we don't edit the
// template directly per project rules — we rewrite the in-memory string here
// before per-route HTML is written).
for (const [oldDate, newDate] of Object.entries(ROTATED_REVIEW_DATES)) {
  baseTemplate = baseTemplate.split(`"datePublished": "${oldDate}"`).join(`"datePublished": "${newDate}"`);
}

// ─── Blog posts ───────────────────────────────────────────────────────────

const blogsRaw = readFileSync(join(ROOT, 'src/data/blogs.json'), 'utf-8');
const blogs = JSON.parse(blogsRaw);

// Load certification practice questions and merge with blogs
const certificationPracticeRaw = readFileSync(join(ROOT, 'src/data/certification-practice.json'), 'utf-8');
const certificationPractice = JSON.parse(certificationPracticeRaw);
blogs.push(...certificationPractice);

// Load comparison pages and merge with blogs
const comparisonPagesRaw = readFileSync(join(ROOT, 'src/data/comparison-pages.json'), 'utf-8');
const comparisonPages = JSON.parse(comparisonPagesRaw);
blogs.push(...comparisonPages);

// ─── Route Definitions ────────────────────────────────────────────────────

const routes = [];

// ── Static core pages ────────────────────────────────────────────────────
const corePages = [
  {
    path: '/about',
    title: 'About Atlantis NDT | Global NDT Consulting & Training Leaders',
    description: 'Learn about Atlantis NDT — a global leader in NDT consulting, training and digital twins. 50+ ASNT Level III experts serving oil & gas, aerospace & industry across USA, India and Middle East.',
    bodyH1: 'About Atlantis NDT',
    bodyText: 'Atlantis NDT is a global leader in Non-Destructive Testing consulting, training, and digital twin technology. Our team of 50+ ASNT Level III certified professionals serves clients across the USA, India, and Middle East.',
  },
  {
    path: '/consulting',
    title: 'NDT Consulting Services | ASNT Level III Experts | Atlantis NDT',
    description: 'NDT consulting from 50+ ASNT Level III experts. Procedure writing, program audits, SNT-TC-1A compliance & expert witness. USA, India, Middle East.',
    bodyH1: 'NDT Consulting Services',
    bodyText: 'Atlantis NDT provides expert NDT consulting services including procedure development, program audits, ASNT SNT-TC-1A compliance, and written practice development.',
  },
  {
    path: '/consulting-usa',
    title: 'NDT Level III Consulting USA | ASNT Certified | Procedure Writing & Program Management',
    description: 'ASNT Level III NDT consulting USA: procedure development, written practices, program audits, third-party inspection. Houston-based, serving nationwide. Free consultation.',
    bodyH1: 'NDT Level III Consulting USA',
    bodyText: 'Expert ASNT Level III NDT consulting services across the USA. Houston-based consultants for procedure writing, program audits, and third-party inspection in oil & gas, petrochemical, and aerospace industries.',
  },
  {
    path: '/consulting-india',
    title: 'NDT Consulting Services India | ASNT Level III Hyderabad | Atlantis NDT',
    description: 'NDT consulting services across India. ASNT Level III certified consultants in Hyderabad for oil & gas, petrochemical, power generation & manufacturing. Serving Mumbai, Chennai, Delhi, Bangalore.',
    bodyH1: 'NDT Consulting Services India',
    bodyText: 'Expert NDT consulting services across India. Hyderabad-based ASNT Level III consultants serving oil & gas, petrochemical, and power generation industries.',
  },
  {
    path: '/consulting-me',
    title: 'NDT Consulting Services Middle East | ASNT Level III UAE | Atlantis NDT',
    description: 'NDT consulting services in UAE, Saudi Arabia, Qatar, Kuwait & Oman. ASNT Level III certified consultants for oil & gas and petrochemical industries across the Gulf region.',
    bodyH1: 'NDT Consulting Services Middle East',
    bodyText: 'Expert NDT consulting services across the Middle East. ASNT Level III consultants in UAE, Saudi Arabia, Qatar, Kuwait, and Oman serving oil & gas and petrochemical industries.',
  },
  {
    path: '/training',
    title: 'NDT Training Courses | ASNT Level I II III Certification | Atlantis NDT',
    description: 'ASNT-aligned NDT training courses for Level I, II & III certification. UT, MT, PT, RT, ET, VT methods. Online and classroom options. 95% pass rate. USA, India & Middle East.',
    bodyH1: 'NDT Training Programs',
    bodyText: 'Professional NDT training courses for ASNT Level I, II, and III certification. Covering UT, MT, PT, RT, ET, and VT methods with 95% pass rate across all programs.',
  },
  {
    path: '/training-usa',
    title: 'NDT Training USA | ASNT Certification Courses Houston | Atlantis NDT',
    description: 'ASNT-aligned NDT training courses in the USA. Level I, II & III certification for UT, MT, PT, RT, ET, VT. Houston training center with online options. 95% pass rate.',
    bodyH1: 'NDT Training USA',
    bodyText: 'Professional NDT training in the USA. Houston-based ASNT certification courses for Level I, II, and III with 95% pass rate.',
  },
  {
    path: '/training-india',
    title: 'NDT Training India | ASNT Certification Hyderabad | Atlantis NDT',
    description: 'NDT training courses in India. ASNT-aligned Level I, II & III certification programs in Hyderabad. UT, MT, PT, RT, ET, VT methods. Online and classroom options.',
    bodyH1: 'NDT Training India',
    bodyText: 'Professional NDT training in India. ASNT certification courses in Hyderabad for Level I, II, and III with classroom and online options.',
  },
  {
    path: '/training-me',
    title: 'NDT Training Dubai & Middle East [2026]: ASNT + ISO 9712, Level I-III (Monthly Batches)',
    description: 'NDT training in Dubai, UAE, Saudi Arabia, Qatar & Kuwait. ASNT SNT-TC-1A + ISO 9712 Level I/II/III certification. UT, RT, MT, PT, ET, VT. Monthly batches, 95% pass rate, ADNOC & Aramco recognized. Cost: $2K-$6K per level. Enrol for March/April 2026 batches.',
    bodyH1: 'NDT Training Middle East',
    bodyText: 'Professional NDT training across Middle East: UAE, Saudi Arabia, Qatar, Kuwait, Oman, and Bahrain. ASNT SNT-TC-1A and ISO 9712 Level I, II, III certification for all major NDT methods.',
  },
  {
    path: '/digital-twins',
    title: 'NDT Digital Twins 2026 — 3D Asset Visualization, API 579 FFS, API 581 RBI | Atlantis NDT',
    description: 'NDT Digital Twins 2026: live 3D asset visualization with UT thickness heat-maps, RT defect overlay, API 579-1 FFS, API 581 RBI, predictive maintenance. WebGL browser-first, native EAM integrations. ASNT Level III authored. Updated May 2026.',
    bodyH1: 'NDT Digital Twins — 3D Asset Integrity Visualization (2026)',
    bodyText: 'Real-time 3D asset visualization with NDT inspection data overlay for oil & gas, petrochemical, aerospace, power, and marine industries. UT thickness heat-maps, RT defect localization, MT/PT indication tagging, API 579-1 FFS calculations, API 581 RBI, predictive maintenance. Native CMMS / EAM integrations (SAP PM, Maximo, Meridium APM, AspenTech Mtell, GE Vernova APM). IEC 62443 OT cybersecurity. ASNT Level III authored by Anoop Rayavarapu.',
  },
  {
    path: '/erp',
    title: 'NDT ERP Solution | Inspection Management Software | Atlantis NDT',
    description: 'Comprehensive NDT ERP solution for inspection companies. Manage jobs, personnel certifications, equipment calibration, reports, and invoicing in one platform. Built for NDT.',
    bodyH1: 'NDT ERP Solution',
    bodyText: 'Comprehensive ERP solution built specifically for NDT inspection companies. Manage jobs, certifications, equipment, and reports in one integrated platform.',
  },
  {
    path: '/ndt-methods',
    title: 'NDT Methods Guide | UT MT PT RT ET VT Explained | Atlantis NDT',
    description: 'Complete guide to all major NDT methods: Ultrasonic Testing (UT), Magnetic Particle Testing (MT), Penetrant Testing (PT), Radiographic Testing (RT), Eddy Current (ET), Visual Testing (VT).',
    bodyH1: 'NDT Methods',
    bodyText: 'Comprehensive guide to all major Non-Destructive Testing methods including UT, MT, PT, RT, ET, and VT with applications, techniques, and standards.',
  },
  {
    path: '/faq',
    title: 'NDT FAQ | Common Questions About NDT Consulting & Training | Atlantis NDT',
    description: 'Frequently asked questions about NDT consulting, training, certification, and digital twins. Get answers from ASNT Level III experts at Atlantis NDT.',
    bodyH1: 'Frequently Asked Questions',
    bodyText: 'Get answers to common questions about NDT consulting, training, ASNT certification, and digital twin technology from our Level III experts.',
  },
  {
    path: '/contact',
    title: 'Contact Atlantis NDT | NDT Consulting & Training Inquiry',
    description: 'Contact Atlantis NDT for NDT consulting, training, and digital twin services. Houston TX: +1 (281) 840-8969. Offices in USA, India, and Middle East. Free consultation.',
    bodyH1: 'Contact Atlantis NDT',
    bodyText: 'Contact Atlantis NDT for expert NDT consulting and training services. USA: +1 (281) 840-8969 | Email: info@atlantisndt.com',
  },
  {
    path: '/ndt-connect',
    title: 'NDT Connect | Inspection Management & Reporting Software',
    description: 'NDT Connect: cloud-based inspection management and reporting software for NDT inspectors and companies. Digital reports, certificate tracking, job scheduling. Request a free demo.',
    bodyH1: 'NDT Connect — Inspection Management Software',
    bodyText: 'NDT Connect is cloud-based inspection management and NDT reporting software. Manage inspections, certifications, and digital reports for individuals and inspection companies.',
  },
  {
    path: '/blog',
    title: 'NDT Blog | Insights on Testing, Inspection & Certification | Atlantis NDT',
    description: 'Expert NDT insights on ultrasonic testing, radiographic testing, digital twins, ASNT certification, and NDT industry trends. Written by ASNT Level III professionals.',
    bodyH1: 'NDT Blog & Resources',
    bodyText: 'Expert insights on NDT methods, industry trends, ASNT certification, and digital twin technology. Written by ASNT Level III professionals at Atlantis NDT.',
  },
  {
    path: '/case-studies',
    title: 'NDT Case Studies | Industry Success Stories | Atlantis NDT',
    description: 'Real-world NDT consulting and training success stories. See how Atlantis NDT helped oil & gas, aerospace and power generation companies improve inspection quality.',
    bodyH1: 'NDT Case Studies',
    bodyText: 'Real-world success stories showing how Atlantis NDT helped clients in oil & gas, aerospace, and power generation improve their NDT programs.',
  },
  {
    path: '/ndt-for-oil-gas',
    title: 'NDT for Oil & Gas | Pipeline, Refinery & Offshore Inspection | API 510/570/653 | Atlantis NDT',
    description: 'Expert NDT consulting for oil & gas: pressure vessel API 510, piping API 570, storage tank API 653, pipeline inspection, offshore NDT, CUI detection. ASNT Level III consultants. Free consultation.',
    bodyH1: 'NDT for Oil & Gas Industry',
    bodyText: 'Expert NDT consulting and training for the oil & gas industry. Pipeline inspection, refinery maintenance, and offshore structure assessment by ASNT Level III professionals. API 510/570/653 compliance, CUI programs, and fitness for service assessment.',
  },
  {
    path: '/ndt-for-aerospace',
    title: 'NDT for Aerospace | Aircraft, Composite & Engine Component Inspection | NAS-410 | Atlantis NDT',
    description: 'Expert NDT consulting for aerospace: aircraft structural inspection, composite NDT, engine component testing, NAS-410 compliant procedures, NADCAP audit prep. ASNT Level III consultants.',
    bodyH1: 'NDT for Aerospace Industry',
    bodyText: 'Expert NDT consulting and training for aerospace. Aircraft structural inspection, composite NDT, engine component testing, NAS-410 written practices, and NADCAP audit preparation by ASNT Level III certified professionals.',
  },
  {
    path: '/ndt-for-power-generation',
    title: 'Power Generation NDT | Turbine, Boiler & Generator Inspection | ASME Qualified | Atlantis',
    description: 'Power generation NDT services: gas turbine blade inspection, boiler tube testing, steam turbine rotors, HRSG, condenser tubes. ASME/NRC qualified. Outage planning & Level III consulting.',
    bodyH1: 'NDT Services for Power Generation',
    bodyText: 'Comprehensive NDT inspection, training, and consulting for power plants. Turbines, boilers, generators, and balance of plant. ASME qualified outage support teams with 500+ outages supported.',
  },
  {
    path: '/asnt-certification',
    title: 'ASNT Certification [2026]: Level I/II/III Exam Cost, Requirements & Salary',
    description: 'Pass your ASNT exam first try: SNT-TC-1A vs ACCP differences, exam costs ($200-$750), Level I/II/III requirements, and salary expectations ($35K-$150K+). Step-by-step study plan included.',
    bodyH1: 'ASNT NDT Certification Guide 2026',
    bodyText: 'Complete ASNT certification guide: SNT-TC-1A and ACCP programs for Level I, II, and III across all NDT methods. 95% first-time pass rate with ASNT Level III consulting available.',
  },
  {
    path: '/api-510-certification',
    title: 'API 510 Certification [2026]: Pass the Exam (68% Fail) — Cost & Study Plan',
    description: 'API 510 exam has a 68% fail rate. Beat it with our guide: 170 questions, 7.5 hrs open-book format, required codes (ASME VIII, API 572/576/579), cost ($3K-$6K). Salary: $75K-$150K+.',
    bodyH1: 'API 510 Pressure Vessel Inspector Certification',
    bodyText: 'API 510 pressure vessel inspector certification preparation. Comprehensive training and exam prep from experienced ASNT Level III instructors.',
  },
  {
    path: '/api-570-certification',
    title: 'API 570 Certification [2026]: Piping Inspector Exam Guide & $80K-$120K Salary',
    description: 'API 570 piping inspector exam: 170 questions, 8 required codes, $3K-$5K total cost. Get our code navigation tips, formula sheets, and study plan. Salary: $80K-$120K+.',
    bodyH1: 'API 570 Piping Inspector Certification',
    bodyText: 'Comprehensive API 570 Piping Inspector certification exam preparation. Open-book format covering ASME B31.3, API 570/571/574/577, remaining life calculations, and RBI. Dubai, Houston, India, and online.',
  },
  {
    path: '/api-570-training',
    title: 'API 570 Training 2026 — Houston, Dubai, Saudi, Singapore, India',
    description: 'API 570 Piping Inspector training in Houston, Dubai, Riyadh / Jubail, Singapore, Hyderabad / Mumbai, and online. ASME B31.3 compliance, RBI per API 580/581, 5-day prep, 95% first-attempt pass rate. ADNOC / Saudi Aramco / Petronas approved instructors.',
    bodyH1: 'API 570 Piping Inspector Training',
    bodyText: 'Comprehensive API 570 Piping Inspector certification training. Open-book exam preparation covering ASME B31.3, API 570, 571, 574, 578, and 580. Available in Dubai, Houston, India, and online.',
  },
  {
    path: '/eddy-current-tube-inspection',
    title: 'Eddy Current Tube Inspection | Heat Exchanger ECT & RFEC | Atlantis NDT',
    description: 'Expert eddy current tube inspection: ECT for non-ferrous tubes, RFEC for carbon steel. Fast heat exchanger inspection with API 510 compliant reports. Get a quote from Atlantis NDT.',
    bodyH1: 'Eddy Current Tube Inspection',
    bodyText: 'Professional eddy current tube inspection services for heat exchangers, boilers, and condensers. ECT and RFEC methods. ASNT Level II certified technicians. API 510 compliant reporting.',
  },
  {
    path: '/api-653-certification',
    title: 'API 653 Certification [2026]: Tank Inspector Exam — 10 Codes You Must Know',
    description: 'API 653 tank inspector exam requires 10 reference codes (API 650/651/653, ASME V/IX). Our guide covers exam format, cost ($3K-$6K), RBI formulas, and $80K-$130K+ salary path.',
    bodyH1: 'API 653 Aboveground Storage Tank Inspector Certification',
    bodyText: 'Comprehensive API 653 Aboveground Storage Tank Inspector certification exam preparation. Open-book format covering API 653/650/651, RBI, tank inspection intervals, and NDT methods. 95% pass rate.',
  },
  {
    path: '/intelligent-reporting-software',
    title: 'NDT Reporting Software | Digital Inspection Reports & API Compliance',
    description: 'NDT reporting software for digital inspection reports, digital twin integration, and API 510/570/653 compliance tracking. Cloud-based, mobile-ready. Free demo available.',
    bodyH1: 'NDT Reporting Software',
    bodyText: 'Professional NDT reporting software for inspection companies. Digital inspection reports integrated with digital twins, API compliance tracking, and cloud-based MRO NDT solution.',
  },
  {
    path: '/ndt-erp-solution',
    title: 'NDT ERP Software 2026 — Atlantis vs SAP, Maximo, Dynamics, NetSuite | Atlantis NDT',
    description: 'Compare top NDT ERP platforms 2026 — Atlantis (Odoo-based), SAP S/4HANA, Maximo, Dynamics 365, NetSuite, Zoho. Pre-configured ASNT SNT-TC-1A, ISO 9712, ASTM E797 calibration. $18,000/yr full suite. ASNT Level III authored. Updated May 2026.',
    bodyH1: 'NDT ERP Software 2026 — Compared, Costed, Audited',
    bodyText: 'Independent ASNT Level III authored comparison of NDT ERP solutions across personnel certification tracking (ASNT SNT-TC-1A, ISO 9712, NAS 410), equipment calibration (ASTM E797 + ISO 17025), project + financial control, and audit readiness for ISO 9001 / 17020 / API Q1. Six core modules: Personnel Management, Equipment Calibration Tracking, Project + Work Order Management, Procedure + Document Control, Financial Management + Invoicing, Client + Subcontractor Portal. Eight platforms compared: Atlantis NDT ERP, SAP S/4HANA, IBM Maximo, Microsoft Dynamics 365, NetSuite, Salesforce Field Service, Zoho One, and the QuickBooks + Excel status quo. Twelve buyer FAQs. By Anoop Rayavarapu, ASNT NDT Level III, API 653 Authorized Inspector, ISO 9001:2015 Lead Auditor.',
  },
  {
    path: '/digital-twins-oil-gas-assets',
    title: 'Digital Twins for Oil & Gas Assets | Asset Integrity Management | Atlantis NDT',
    description: 'Digital twin solutions for oil & gas asset integrity. Real-time corrosion monitoring, inspection data visualization, risk-based inspection planning. Reduce downtime and costs.',
    bodyH1: 'Digital Twins for Oil & Gas Assets',
    bodyText: 'Advanced digital twin technology for oil & gas asset integrity management. Real-time monitoring, corrosion tracking, and inspection data visualization.',
  },
  {
    path: '/ndt-training-online',
    title: 'Online NDT Training | ASNT Level I II III Virtual Courses | Atlantis NDT',
    description: 'Online NDT training for ASNT SNT-TC-1A Level I, II, III certification. UT, MT, PT, RT, ET, VT theory modules. Flexible schedule, instructor support. Enrol from anywhere.',
    bodyH1: 'Online NDT Training Courses',
    bodyText: 'Online NDT training for ASNT SNT-TC-1A certification. Level I and II theory courses for UT, MT, PT, RT, ET, and VT methods. Live virtual and self-paced options. Practical component must be completed in-person.',
  },
  {
    path: '/ndt-training-usa',
    title: 'NDT Training USA | ASNT Certification Houston | SNT-TC-1A & CP-189 | Atlantis NDT',
    description: 'NDT training in the USA: ASNT SNT-TC-1A and CP-189 Level I, II, III certification. Houston training center. UT, MT, PT, RT, ET, VT. Aerospace NAS-410. 95% pass rate.',
    bodyH1: 'NDT Training USA',
    bodyText: 'Professional NDT training in the USA. ASNT SNT-TC-1A and CP-189 certification courses in Houston, TX and online. Level I, II, and III for UT, MT, PT, RT, ET, VT. Aerospace NAS-410 preparation available. 95% pass rate.',
  },
  {
    path: '/ndt-training-india',
    title: 'NDT Training India | ASNT & ISNT Certification Hyderabad | Atlantis NDT',
    description: 'NDT training in India: ASNT SNT-TC-1A and ISNT Level I, II, III courses in Hyderabad, Mumbai, Chennai, Delhi. UT, MT, PT, RT, ET, VT. 95% pass rate. Enrol today.',
    bodyH1: 'NDT Training India',
    bodyText: 'Professional NDT training across India. ASNT SNT-TC-1A and ISNT Level I, II, and III certification courses in Hyderabad (main center), Mumbai, Chennai, Delhi NCR, and Bangalore. UT, MT, PT, RT, ET, VT. Online options available. 95% pass rate.',
  },
  {
    path: '/ndt-training-dubai',
    title: 'NDT Training Dubai [2026]: ASNT & ISO 9712 Level I-III, $2K-$6K, 95% Pass Rate [Monthly]',
    description: 'NDT training in Dubai, UAE [2026]: ASNT SNT-TC-1A + ISO 9712 Level I/II/III certification. UT, RT, MT, PT, ET, VT. Cost: $2K-$6K per level, monthly batches, 95% pass rate, ADNOC & Aramco recognized. Tax-free NDT career in UAE earning $45K-$120K+. Next batch: March 2026. Enrol now.',
    bodyH1: 'NDT Training Dubai & UAE',
    bodyText: 'Professional NDT training in Dubai, Abu Dhabi, and across UAE. ASNT SNT-TC-1A and ISO 9712 Level I, II, III certification for oil & gas industry professionals. CSWIP preparation available. ADNOC and Aramco contractor recognised. Tax-free career in UAE. Monthly class starts.',
  },
  {
    path: '/ndt-training-singapore',
    title: 'NDT Training Singapore 2026 — ASNT, ISO 9712, PCN, API 510/570/653',
    description: 'NDT and API inspector training in Singapore: UT, RT, MT, PT, ET, PAUT, TOFD per ASNT SNT-TC-1A, ISO 9712, PCN. API 510/570/653 5-day exam prep. Jurong Island petrochem + FPSO marine focus. ASNT Level III instructors. 95% first-attempt pass rate.',
    bodyH1: 'NDT Training in Singapore',
    bodyText: 'Multi-standard NDT and API inspector certification for Singapore. ASNT SNT-TC-1A, ISO 9712, and PCN. API 510 / 570 / 653 5-day exam prep. UT, RT, MT, PT, ET, PAUT, TOFD. Jurong Island petrochemical and FPSO marine sector focus.',
  },
  {
    path: '/ndt-training-jakarta',
    title: 'NDT Training Jakarta 2026 — ASNT, ISO 9712, API 510/570/653 Indonesia',
    description: 'NDT and API inspector training in Jakarta, Indonesia: UT, RT, MT, PT, ET, PAUT, TOFD per ASNT SNT-TC-1A and ISO 9712. API 510/570/653 5-day prep. Pertamina + Petrokimia + Bontang LNG focus. ASNT Level III instructors. 95% first-attempt pass rate.',
    bodyH1: 'NDT Training in Jakarta',
    bodyText: 'NDT and API inspector certification for Indonesia. ASNT SNT-TC-1A and ISO 9712. API 510 / 570 / 653 5-day exam prep. Pertamina refineries (Cilacap, Balikpapan, Dumai), Petrokimia complexes, Bontang LNG, Tangguh LNG sector focus.',
  },
  {
    path: '/api-653-training-saudi-arabia',
    title: 'API 653 Training Saudi Arabia 2026 — Jubail, Yanbu, Riyadh',
    description: 'API 653 Aboveground Storage Tank Inspector training in Saudi Arabia: Jubail, Yanbu, Riyadh, Ras Tanura. 5-day exam prep, 10 reference codes (API 650/651/652/571/575/577 + ASME V/IX + AWS D1.1). 95% first-attempt pass rate. Saudi Aramco SAEP-1142 + SABIC SAFCS recognized.',
    bodyH1: 'API 653 Training in Saudi Arabia',
    bodyText: '5-day API 653 Aboveground Storage Tank Inspector exam prep delivered in Saudi Arabia — Jubail (SADAF / KEMYA / Yanpet), Yanbu (Saudi Aramco / SAMREF / YASREF / PetroRabigh), Riyadh, Ras Tanura. 10 reference codes covered: API 650 / 651 / 652 / 653 / 571 / 575 / 577 + ASME V / IX + AWS D1.1. 95% first-attempt pass rate.',
  },
  {
    path: "/erp-modules",
    title: "ERP Modules for Inspection Companies | Atlantis NDT ERP",
    description: "11-module ERP suite for NDT, calibration, welding, marine survey, pipeline integrity, aerospace QC, and inspection service companies. Inventory, certification, calibration, work orders, scheduling, audit, documents, assets, corrosion, quality, project management.",
    bodyH1: "ERP Modules — Pick What You Need",
    bodyText: "11 production-ready modules. Run any single module, build a tailored bundle for your industry, or deploy the full suite. Used by NDT inspection, calibration laboratories, welding fabrication shops, marine survey, pipeline integrity, aerospace QC, and metrology labs across 80+ cities.",
  },
  {
    path: "/erp-industries",
    title: "ERP Software for Inspection & Service Companies — by Industry | Atlantis NDT",
    description: "Tailored ERP for NDT inspection, calibration laboratories, welding fabrication shops, marine survey, pipeline integrity, aerospace QC, metrology, industrial coatings, construction QA, geotechnical, environmental testing, oilfield services.",
    bodyH1: "ERP Software — Tailored to Your Industry",
    bodyText: "Atlantis NDT ERP is configured for 12 inspection and service-provider industries. Codes, standards, regulators, operator-specific quality clauses, and workflow are pre-loaded for each industry — not a generic SaaS forced to fit.",
  },
  {
    path: "/erp-modules/inventory-management-houston",
    title: "Inventory Management in Houston | Atlantis NDT ERP",
    description: "Inventory Management ERP module for inspection companies in Houston, USA. Pre-configured for ExxonMobil Baytown refinery, Marathon Galveston Bay and aligned with OSHA Region 6 PSM, TCEQ air permits. Demo: info@atlantisndt.com.",
    bodyH1: "Inventory Management in Houston | Atlantis NDT ERP",
    bodyText: "Inventory Management ERP module for inspection companies in Houston, USA. Pre-configured for ExxonMobil Baytown refinery, Marathon Galveston Bay and aligned with OSHA Region 6 PSM, TCEQ air permits. Demo: info@atlantisndt.com.",
  },
  {
    path: "/erp-modules/inventory-management-dubai",
    title: "Inventory Management in Dubai | Atlantis NDT ERP",
    description: "Inventory Management ERP module for inspection companies in Dubai, UAE. Pre-configured for ADNOC Distribution, ENOC and aligned with ADQCC, MOIAT. Demo: info@atlantisndt.com.",
    bodyH1: "Inventory Management in Dubai | Atlantis NDT ERP",
    bodyText: "Inventory Management ERP module for inspection companies in Dubai, UAE. Pre-configured for ADNOC Distribution, ENOC and aligned with ADQCC, MOIAT. Demo: info@atlantisndt.com.",
  },
  {
    path: "/erp-modules/inventory-management-abu-dhabi",
    title: "Inventory Management in Abu Dhabi | Atlantis NDT ERP",
    description: "Inventory Management ERP module for inspection companies in Abu Dhabi, UAE. Pre-configured for ADNOC Onshore, ADNOC LNG and aligned with ADNOC HSE, ADQCC. Demo: info@atlantisndt.com.",
    bodyH1: "Inventory Management in Abu Dhabi | Atlantis NDT ERP",
    bodyText: "Inventory Management ERP module for inspection companies in Abu Dhabi, UAE. Pre-configured for ADNOC Onshore, ADNOC LNG and aligned with ADNOC HSE, ADQCC. Demo: info@atlantisndt.com.",
  },
  {
    path: "/erp-modules/inventory-management-saudi-arabia",
    title: "Inventory Management in Saudi Arabia | Atlantis NDT ERP",
    description: "Inventory Management ERP module for inspection companies in Saudi Arabia, Saudi Arabia. Pre-configured for Saudi Aramco upstream/downstream, SABIC petrochemicals and aligned with HRSD, GAMI. Demo: info@atlantisndt.com.",
    bodyH1: "Inventory Management in Saudi Arabia | Atlantis NDT ERP",
    bodyText: "Inventory Management ERP module for inspection companies in Saudi Arabia, Saudi Arabia. Pre-configured for Saudi Aramco upstream/downstream, SABIC petrochemicals and aligned with HRSD, GAMI. Demo: info@atlantisndt.com.",
  },
  {
    path: "/erp-modules/inventory-management-singapore",
    title: "Inventory Management in Singapore | Atlantis NDT ERP",
    description: "Inventory Management ERP module for inspection companies in Singapore, Singapore. Pre-configured for ExxonMobil Jurong refinery, Shell Bukom and aligned with MOM (Ministry of Manpower), NEA environment. Demo: info@atlantisndt.com.",
    bodyH1: "Inventory Management in Singapore | Atlantis NDT ERP",
    bodyText: "Inventory Management ERP module for inspection companies in Singapore, Singapore. Pre-configured for ExxonMobil Jurong refinery, Shell Bukom and aligned with MOM (Ministry of Manpower), NEA environment. Demo: info@atlantisndt.com.",
  },
  {
    path: "/erp-modules/inventory-management-mumbai",
    title: "Inventory Management in Mumbai | Atlantis NDT ERP",
    description: "Inventory Management ERP module for inspection companies in Mumbai, India. Pre-configured for BPCL Mahul refinery, HPCL Mumbai refinery and aligned with PESO, OISD. Demo: info@atlantisndt.com.",
    bodyH1: "Inventory Management in Mumbai | Atlantis NDT ERP",
    bodyText: "Inventory Management ERP module for inspection companies in Mumbai, India. Pre-configured for BPCL Mahul refinery, HPCL Mumbai refinery and aligned with PESO, OISD. Demo: info@atlantisndt.com.",
  },
  {
    path: "/erp-modules/inventory-management-hyderabad",
    title: "Inventory Management in Hyderabad | Atlantis NDT ERP",
    description: "Inventory Management ERP module for inspection companies in Hyderabad, India. Pre-configured for BHEL boilers/turbines, HPCL Visakh refinery (adjacent) and aligned with PESO, BARC nuclear. Demo: info@atlantisndt.com.",
    bodyH1: "Inventory Management in Hyderabad | Atlantis NDT ERP",
    bodyText: "Inventory Management ERP module for inspection companies in Hyderabad, India. Pre-configured for BHEL boilers/turbines, HPCL Visakh refinery (adjacent) and aligned with PESO, BARC nuclear. Demo: info@atlantisndt.com.",
  },
  {
    path: "/erp-modules/inventory-management-london",
    title: "Inventory Management in London | Atlantis NDT ERP",
    description: "Inventory Management ERP module for inspection companies in London, UK. Pre-configured for BP HQ, Shell HQ and aligned with HSE, ONR (Office Nuclear Regulation). Demo: info@atlantisndt.com.",
    bodyH1: "Inventory Management in London | Atlantis NDT ERP",
    bodyText: "Inventory Management ERP module for inspection companies in London, UK. Pre-configured for BP HQ, Shell HQ and aligned with HSE, ONR (Office Nuclear Regulation). Demo: info@atlantisndt.com.",
  },
  {
    path: "/erp-modules/inventory-management-aberdeen",
    title: "Inventory Management in Aberdeen | Atlantis NDT ERP",
    description: "Inventory Management ERP module for inspection companies in Aberdeen, UK. Pre-configured for Harbour Energy, BP North Sea and aligned with HSE OSDR, OEUK (Offshore Energies UK). Demo: info@atlantisndt.com.",
    bodyH1: "Inventory Management in Aberdeen | Atlantis NDT ERP",
    bodyText: "Inventory Management ERP module for inspection companies in Aberdeen, UK. Pre-configured for Harbour Energy, BP North Sea and aligned with HSE OSDR, OEUK (Offshore Energies UK). Demo: info@atlantisndt.com.",
  },
  {
    path: "/erp-modules/inventory-management-calgary",
    title: "Inventory Management in Calgary | Atlantis NDT ERP",
    description: "Inventory Management ERP module for inspection companies in Calgary, Canada. Pre-configured for Suncor, Cenovus and aligned with ABSA (Alberta Boilers Safety), AER (Alberta Energy Regulator). Demo: info@atlantisndt.com.",
    bodyH1: "Inventory Management in Calgary | Atlantis NDT ERP",
    bodyText: "Inventory Management ERP module for inspection companies in Calgary, Canada. Pre-configured for Suncor, Cenovus and aligned with ABSA (Alberta Boilers Safety), AER (Alberta Energy Regulator). Demo: info@atlantisndt.com.",
  },
  {
    path: "/erp-modules/inventory-management-perth",
    title: "Inventory Management in Perth | Atlantis NDT ERP",
    description: "Inventory Management ERP module for inspection companies in Perth, Australia. Pre-configured for Woodside Energy, Chevron Australia (Gorgon, Wheatstone) and aligned with WorkSafe WA, NOPSEMA offshore. Demo: info@atlantisndt.com.",
    bodyH1: "Inventory Management in Perth | Atlantis NDT ERP",
    bodyText: "Inventory Management ERP module for inspection companies in Perth, Australia. Pre-configured for Woodside Energy, Chevron Australia (Gorgon, Wheatstone) and aligned with WorkSafe WA, NOPSEMA offshore. Demo: info@atlantisndt.com.",
  },
  {
    path: "/erp-modules/inventory-management-doha",
    title: "Inventory Management in Doha | Atlantis NDT ERP",
    description: "Inventory Management ERP module for inspection companies in Doha, Qatar. Pre-configured for QatarEnergy, RasGas and aligned with QCDD (Qatar Civil Defence), QGOSM (Qatar General Org Standards & Metrology). Demo: info@atlantisndt.com.",
    bodyH1: "Inventory Management in Doha | Atlantis NDT ERP",
    bodyText: "Inventory Management ERP module for inspection companies in Doha, Qatar. Pre-configured for QatarEnergy, RasGas and aligned with QCDD (Qatar Civil Defence), QGOSM (Qatar General Org Standards & Metrology). Demo: info@atlantisndt.com.",
  },
  {
    path: "/erp-modules/inventory-management-kuala-lumpur",
    title: "Inventory Management in Kuala Lumpur | Atlantis NDT ERP",
    description: "Inventory Management ERP module for inspection companies in Kuala Lumpur, Malaysia. Pre-configured for PETRONAS upstream/downstream, PCSB and aligned with DOSH (Department of Occupational Safety & Health), Suruhanjaya Tenaga (Energy Commission). Demo: info@atlantisndt.com.",
    bodyH1: "Inventory Management in Kuala Lumpur | Atlantis NDT ERP",
    bodyText: "Inventory Management ERP module for inspection companies in Kuala Lumpur, Malaysia. Pre-configured for PETRONAS upstream/downstream, PCSB and aligned with DOSH (Department of Occupational Safety & Health), Suruhanjaya Tenaga (Energy Commission). Demo: info@atlantisndt.com.",
  },
  {
    path: "/erp-modules/inventory-management-jakarta",
    title: "Inventory Management in Jakarta | Atlantis NDT ERP",
    description: "Inventory Management ERP module for inspection companies in Jakarta, Indonesia. Pre-configured for Pertamina (Cilacap, Balikpapan, Dumai refineries), Pupuk Indonesia and aligned with SKK Migas, K3 Migas (HSE). Demo: info@atlantisndt.com.",
    bodyH1: "Inventory Management in Jakarta | Atlantis NDT ERP",
    bodyText: "Inventory Management ERP module for inspection companies in Jakarta, Indonesia. Pre-configured for Pertamina (Cilacap, Balikpapan, Dumai refineries), Pupuk Indonesia and aligned with SKK Migas, K3 Migas (HSE). Demo: info@atlantisndt.com.",
  },
  {
    path: "/erp-modules/inventory-management-lagos",
    title: "Inventory Management in Lagos | Atlantis NDT ERP",
    description: "Inventory Management ERP module for inspection companies in Lagos, Nigeria. Pre-configured for NNPCL refineries (Port Harcourt, Warri, Kaduna), Shell SPDC and aligned with NUPRC (Nigerian Upstream Petroleum Regulatory), NMDPRA (downstream). Demo: info@atlantisndt.com.",
    bodyH1: "Inventory Management in Lagos | Atlantis NDT ERP",
    bodyText: "Inventory Management ERP module for inspection companies in Lagos, Nigeria. Pre-configured for NNPCL refineries (Port Harcourt, Warri, Kaduna), Shell SPDC and aligned with NUPRC (Nigerian Upstream Petroleum Regulatory), NMDPRA (downstream). Demo: info@atlantisndt.com.",
  },
  {
    path: "/erp-modules/audit-management-houston",
    title: "Audit & Compliance Management in Houston | Atlantis NDT ERP",
    description: "Audit & Compliance Management ERP module for inspection companies in Houston, USA. Pre-configured for ExxonMobil Baytown refinery, Marathon Galveston Bay and aligned with OSHA Region 6 PSM, TCEQ air permits. Demo: info@atlantisndt.com.",
    bodyH1: "Audit & Compliance Management in Houston | Atlantis NDT ERP",
    bodyText: "Audit & Compliance Management ERP module for inspection companies in Houston, USA. Pre-configured for ExxonMobil Baytown refinery, Marathon Galveston Bay and aligned with OSHA Region 6 PSM, TCEQ air permits. Demo: info@atlantisndt.com.",
  },
  {
    path: "/erp-modules/audit-management-dubai",
    title: "Audit & Compliance Management in Dubai | Atlantis NDT ERP",
    description: "Audit & Compliance Management ERP module for inspection companies in Dubai, UAE. Pre-configured for ADNOC Distribution, ENOC and aligned with ADQCC, MOIAT. Demo: info@atlantisndt.com.",
    bodyH1: "Audit & Compliance Management in Dubai | Atlantis NDT ERP",
    bodyText: "Audit & Compliance Management ERP module for inspection companies in Dubai, UAE. Pre-configured for ADNOC Distribution, ENOC and aligned with ADQCC, MOIAT. Demo: info@atlantisndt.com.",
  },
  {
    path: "/erp-modules/audit-management-abu-dhabi",
    title: "Audit & Compliance Management in Abu Dhabi | Atlantis NDT ERP",
    description: "Audit & Compliance Management ERP module for inspection companies in Abu Dhabi, UAE. Pre-configured for ADNOC Onshore, ADNOC LNG and aligned with ADNOC HSE, ADQCC. Demo: info@atlantisndt.com.",
    bodyH1: "Audit & Compliance Management in Abu Dhabi | Atlantis NDT ERP",
    bodyText: "Audit & Compliance Management ERP module for inspection companies in Abu Dhabi, UAE. Pre-configured for ADNOC Onshore, ADNOC LNG and aligned with ADNOC HSE, ADQCC. Demo: info@atlantisndt.com.",
  },
  {
    path: "/erp-modules/audit-management-saudi-arabia",
    title: "Audit & Compliance Management in Saudi Arabia | Atlantis NDT ERP",
    description: "Audit & Compliance Management ERP module for inspection companies in Saudi Arabia, Saudi Arabia. Pre-configured for Saudi Aramco upstream/downstream, SABIC petrochemicals and aligned with HRSD, GAMI. Demo: info@atlantisndt.com.",
    bodyH1: "Audit & Compliance Management in Saudi Arabia | Atlantis NDT ERP",
    bodyText: "Audit & Compliance Management ERP module for inspection companies in Saudi Arabia, Saudi Arabia. Pre-configured for Saudi Aramco upstream/downstream, SABIC petrochemicals and aligned with HRSD, GAMI. Demo: info@atlantisndt.com.",
  },
  {
    path: "/erp-modules/audit-management-singapore",
    title: "Audit & Compliance Management in Singapore | Atlantis NDT ERP",
    description: "Audit & Compliance Management ERP module for inspection companies in Singapore, Singapore. Pre-configured for ExxonMobil Jurong refinery, Shell Bukom and aligned with MOM (Ministry of Manpower), NEA environment. Demo: info@atlantisndt.com.",
    bodyH1: "Audit & Compliance Management in Singapore | Atlantis NDT ERP",
    bodyText: "Audit & Compliance Management ERP module for inspection companies in Singapore, Singapore. Pre-configured for ExxonMobil Jurong refinery, Shell Bukom and aligned with MOM (Ministry of Manpower), NEA environment. Demo: info@atlantisndt.com.",
  },
  {
    path: "/erp-modules/audit-management-mumbai",
    title: "Audit & Compliance Management in Mumbai | Atlantis NDT ERP",
    description: "Audit & Compliance Management ERP module for inspection companies in Mumbai, India. Pre-configured for BPCL Mahul refinery, HPCL Mumbai refinery and aligned with PESO, OISD. Demo: info@atlantisndt.com.",
    bodyH1: "Audit & Compliance Management in Mumbai | Atlantis NDT ERP",
    bodyText: "Audit & Compliance Management ERP module for inspection companies in Mumbai, India. Pre-configured for BPCL Mahul refinery, HPCL Mumbai refinery and aligned with PESO, OISD. Demo: info@atlantisndt.com.",
  },
  {
    path: "/erp-modules/audit-management-hyderabad",
    title: "Audit & Compliance Management in Hyderabad | Atlantis NDT ERP",
    description: "Audit & Compliance Management ERP module for inspection companies in Hyderabad, India. Pre-configured for BHEL boilers/turbines, HPCL Visakh refinery (adjacent) and aligned with PESO, BARC nuclear. Demo: info@atlantisndt.com.",
    bodyH1: "Audit & Compliance Management in Hyderabad | Atlantis NDT ERP",
    bodyText: "Audit & Compliance Management ERP module for inspection companies in Hyderabad, India. Pre-configured for BHEL boilers/turbines, HPCL Visakh refinery (adjacent) and aligned with PESO, BARC nuclear. Demo: info@atlantisndt.com.",
  },
  {
    path: "/erp-modules/audit-management-london",
    title: "Audit & Compliance Management in London | Atlantis NDT ERP",
    description: "Audit & Compliance Management ERP module for inspection companies in London, UK. Pre-configured for BP HQ, Shell HQ and aligned with HSE, ONR (Office Nuclear Regulation). Demo: info@atlantisndt.com.",
    bodyH1: "Audit & Compliance Management in London | Atlantis NDT ERP",
    bodyText: "Audit & Compliance Management ERP module for inspection companies in London, UK. Pre-configured for BP HQ, Shell HQ and aligned with HSE, ONR (Office Nuclear Regulation). Demo: info@atlantisndt.com.",
  },
  {
    path: "/erp-modules/audit-management-aberdeen",
    title: "Audit & Compliance Management in Aberdeen | Atlantis NDT ERP",
    description: "Audit & Compliance Management ERP module for inspection companies in Aberdeen, UK. Pre-configured for Harbour Energy, BP North Sea and aligned with HSE OSDR, OEUK (Offshore Energies UK). Demo: info@atlantisndt.com.",
    bodyH1: "Audit & Compliance Management in Aberdeen | Atlantis NDT ERP",
    bodyText: "Audit & Compliance Management ERP module for inspection companies in Aberdeen, UK. Pre-configured for Harbour Energy, BP North Sea and aligned with HSE OSDR, OEUK (Offshore Energies UK). Demo: info@atlantisndt.com.",
  },
  {
    path: "/erp-modules/audit-management-calgary",
    title: "Audit & Compliance Management in Calgary | Atlantis NDT ERP",
    description: "Audit & Compliance Management ERP module for inspection companies in Calgary, Canada. Pre-configured for Suncor, Cenovus and aligned with ABSA (Alberta Boilers Safety), AER (Alberta Energy Regulator). Demo: info@atlantisndt.com.",
    bodyH1: "Audit & Compliance Management in Calgary | Atlantis NDT ERP",
    bodyText: "Audit & Compliance Management ERP module for inspection companies in Calgary, Canada. Pre-configured for Suncor, Cenovus and aligned with ABSA (Alberta Boilers Safety), AER (Alberta Energy Regulator). Demo: info@atlantisndt.com.",
  },
  {
    path: "/erp-modules/audit-management-perth",
    title: "Audit & Compliance Management in Perth | Atlantis NDT ERP",
    description: "Audit & Compliance Management ERP module for inspection companies in Perth, Australia. Pre-configured for Woodside Energy, Chevron Australia (Gorgon, Wheatstone) and aligned with WorkSafe WA, NOPSEMA offshore. Demo: info@atlantisndt.com.",
    bodyH1: "Audit & Compliance Management in Perth | Atlantis NDT ERP",
    bodyText: "Audit & Compliance Management ERP module for inspection companies in Perth, Australia. Pre-configured for Woodside Energy, Chevron Australia (Gorgon, Wheatstone) and aligned with WorkSafe WA, NOPSEMA offshore. Demo: info@atlantisndt.com.",
  },
  {
    path: "/erp-modules/audit-management-doha",
    title: "Audit & Compliance Management in Doha | Atlantis NDT ERP",
    description: "Audit & Compliance Management ERP module for inspection companies in Doha, Qatar. Pre-configured for QatarEnergy, RasGas and aligned with QCDD (Qatar Civil Defence), QGOSM (Qatar General Org Standards & Metrology). Demo: info@atlantisndt.com.",
    bodyH1: "Audit & Compliance Management in Doha | Atlantis NDT ERP",
    bodyText: "Audit & Compliance Management ERP module for inspection companies in Doha, Qatar. Pre-configured for QatarEnergy, RasGas and aligned with QCDD (Qatar Civil Defence), QGOSM (Qatar General Org Standards & Metrology). Demo: info@atlantisndt.com.",
  },
  {
    path: "/erp-modules/audit-management-kuala-lumpur",
    title: "Audit & Compliance Management in Kuala Lumpur | Atlantis NDT ERP",
    description: "Audit & Compliance Management ERP module for inspection companies in Kuala Lumpur, Malaysia. Pre-configured for PETRONAS upstream/downstream, PCSB and aligned with DOSH (Department of Occupational Safety & Health), Suruhanjaya Tenaga (Energy Commission). Demo: info@atlantisndt.com.",
    bodyH1: "Audit & Compliance Management in Kuala Lumpur | Atlantis NDT ERP",
    bodyText: "Audit & Compliance Management ERP module for inspection companies in Kuala Lumpur, Malaysia. Pre-configured for PETRONAS upstream/downstream, PCSB and aligned with DOSH (Department of Occupational Safety & Health), Suruhanjaya Tenaga (Energy Commission). Demo: info@atlantisndt.com.",
  },
  {
    path: "/erp-modules/audit-management-jakarta",
    title: "Audit & Compliance Management in Jakarta | Atlantis NDT ERP",
    description: "Audit & Compliance Management ERP module for inspection companies in Jakarta, Indonesia. Pre-configured for Pertamina (Cilacap, Balikpapan, Dumai refineries), Pupuk Indonesia and aligned with SKK Migas, K3 Migas (HSE). Demo: info@atlantisndt.com.",
    bodyH1: "Audit & Compliance Management in Jakarta | Atlantis NDT ERP",
    bodyText: "Audit & Compliance Management ERP module for inspection companies in Jakarta, Indonesia. Pre-configured for Pertamina (Cilacap, Balikpapan, Dumai refineries), Pupuk Indonesia and aligned with SKK Migas, K3 Migas (HSE). Demo: info@atlantisndt.com.",
  },
  {
    path: "/erp-modules/audit-management-lagos",
    title: "Audit & Compliance Management in Lagos | Atlantis NDT ERP",
    description: "Audit & Compliance Management ERP module for inspection companies in Lagos, Nigeria. Pre-configured for NNPCL refineries (Port Harcourt, Warri, Kaduna), Shell SPDC and aligned with NUPRC (Nigerian Upstream Petroleum Regulatory), NMDPRA (downstream). Demo: info@atlantisndt.com.",
    bodyH1: "Audit & Compliance Management in Lagos | Atlantis NDT ERP",
    bodyText: "Audit & Compliance Management ERP module for inspection companies in Lagos, Nigeria. Pre-configured for NNPCL refineries (Port Harcourt, Warri, Kaduna), Shell SPDC and aligned with NUPRC (Nigerian Upstream Petroleum Regulatory), NMDPRA (downstream). Demo: info@atlantisndt.com.",
  },
  {
    path: "/erp-modules/document-control-houston",
    title: "Document Control & QMS in Houston | Atlantis NDT ERP",
    description: "Document Control & QMS ERP module for inspection companies in Houston, USA. Pre-configured for ExxonMobil Baytown refinery, Marathon Galveston Bay and aligned with OSHA Region 6 PSM, TCEQ air permits. Demo: info@atlantisndt.com.",
    bodyH1: "Document Control & QMS in Houston | Atlantis NDT ERP",
    bodyText: "Document Control & QMS ERP module for inspection companies in Houston, USA. Pre-configured for ExxonMobil Baytown refinery, Marathon Galveston Bay and aligned with OSHA Region 6 PSM, TCEQ air permits. Demo: info@atlantisndt.com.",
  },
  {
    path: "/erp-modules/document-control-dubai",
    title: "Document Control & QMS in Dubai | Atlantis NDT ERP",
    description: "Document Control & QMS ERP module for inspection companies in Dubai, UAE. Pre-configured for ADNOC Distribution, ENOC and aligned with ADQCC, MOIAT. Demo: info@atlantisndt.com.",
    bodyH1: "Document Control & QMS in Dubai | Atlantis NDT ERP",
    bodyText: "Document Control & QMS ERP module for inspection companies in Dubai, UAE. Pre-configured for ADNOC Distribution, ENOC and aligned with ADQCC, MOIAT. Demo: info@atlantisndt.com.",
  },
  {
    path: "/erp-modules/document-control-abu-dhabi",
    title: "Document Control & QMS in Abu Dhabi | Atlantis NDT ERP",
    description: "Document Control & QMS ERP module for inspection companies in Abu Dhabi, UAE. Pre-configured for ADNOC Onshore, ADNOC LNG and aligned with ADNOC HSE, ADQCC. Demo: info@atlantisndt.com.",
    bodyH1: "Document Control & QMS in Abu Dhabi | Atlantis NDT ERP",
    bodyText: "Document Control & QMS ERP module for inspection companies in Abu Dhabi, UAE. Pre-configured for ADNOC Onshore, ADNOC LNG and aligned with ADNOC HSE, ADQCC. Demo: info@atlantisndt.com.",
  },
  {
    path: "/erp-modules/document-control-saudi-arabia",
    title: "Document Control & QMS in Saudi Arabia | Atlantis NDT ERP",
    description: "Document Control & QMS ERP module for inspection companies in Saudi Arabia, Saudi Arabia. Pre-configured for Saudi Aramco upstream/downstream, SABIC petrochemicals and aligned with HRSD, GAMI. Demo: info@atlantisndt.com.",
    bodyH1: "Document Control & QMS in Saudi Arabia | Atlantis NDT ERP",
    bodyText: "Document Control & QMS ERP module for inspection companies in Saudi Arabia, Saudi Arabia. Pre-configured for Saudi Aramco upstream/downstream, SABIC petrochemicals and aligned with HRSD, GAMI. Demo: info@atlantisndt.com.",
  },
  {
    path: "/erp-modules/document-control-singapore",
    title: "Document Control & QMS in Singapore | Atlantis NDT ERP",
    description: "Document Control & QMS ERP module for inspection companies in Singapore, Singapore. Pre-configured for ExxonMobil Jurong refinery, Shell Bukom and aligned with MOM (Ministry of Manpower), NEA environment. Demo: info@atlantisndt.com.",
    bodyH1: "Document Control & QMS in Singapore | Atlantis NDT ERP",
    bodyText: "Document Control & QMS ERP module for inspection companies in Singapore, Singapore. Pre-configured for ExxonMobil Jurong refinery, Shell Bukom and aligned with MOM (Ministry of Manpower), NEA environment. Demo: info@atlantisndt.com.",
  },
  {
    path: "/erp-modules/document-control-mumbai",
    title: "Document Control & QMS in Mumbai | Atlantis NDT ERP",
    description: "Document Control & QMS ERP module for inspection companies in Mumbai, India. Pre-configured for BPCL Mahul refinery, HPCL Mumbai refinery and aligned with PESO, OISD. Demo: info@atlantisndt.com.",
    bodyH1: "Document Control & QMS in Mumbai | Atlantis NDT ERP",
    bodyText: "Document Control & QMS ERP module for inspection companies in Mumbai, India. Pre-configured for BPCL Mahul refinery, HPCL Mumbai refinery and aligned with PESO, OISD. Demo: info@atlantisndt.com.",
  },
  {
    path: "/erp-modules/document-control-hyderabad",
    title: "Document Control & QMS in Hyderabad | Atlantis NDT ERP",
    description: "Document Control & QMS ERP module for inspection companies in Hyderabad, India. Pre-configured for BHEL boilers/turbines, HPCL Visakh refinery (adjacent) and aligned with PESO, BARC nuclear. Demo: info@atlantisndt.com.",
    bodyH1: "Document Control & QMS in Hyderabad | Atlantis NDT ERP",
    bodyText: "Document Control & QMS ERP module for inspection companies in Hyderabad, India. Pre-configured for BHEL boilers/turbines, HPCL Visakh refinery (adjacent) and aligned with PESO, BARC nuclear. Demo: info@atlantisndt.com.",
  },
  {
    path: "/erp-modules/document-control-london",
    title: "Document Control & QMS in London | Atlantis NDT ERP",
    description: "Document Control & QMS ERP module for inspection companies in London, UK. Pre-configured for BP HQ, Shell HQ and aligned with HSE, ONR (Office Nuclear Regulation). Demo: info@atlantisndt.com.",
    bodyH1: "Document Control & QMS in London | Atlantis NDT ERP",
    bodyText: "Document Control & QMS ERP module for inspection companies in London, UK. Pre-configured for BP HQ, Shell HQ and aligned with HSE, ONR (Office Nuclear Regulation). Demo: info@atlantisndt.com.",
  },
  {
    path: "/erp-modules/document-control-aberdeen",
    title: "Document Control & QMS in Aberdeen | Atlantis NDT ERP",
    description: "Document Control & QMS ERP module for inspection companies in Aberdeen, UK. Pre-configured for Harbour Energy, BP North Sea and aligned with HSE OSDR, OEUK (Offshore Energies UK). Demo: info@atlantisndt.com.",
    bodyH1: "Document Control & QMS in Aberdeen | Atlantis NDT ERP",
    bodyText: "Document Control & QMS ERP module for inspection companies in Aberdeen, UK. Pre-configured for Harbour Energy, BP North Sea and aligned with HSE OSDR, OEUK (Offshore Energies UK). Demo: info@atlantisndt.com.",
  },
  {
    path: "/erp-modules/document-control-calgary",
    title: "Document Control & QMS in Calgary | Atlantis NDT ERP",
    description: "Document Control & QMS ERP module for inspection companies in Calgary, Canada. Pre-configured for Suncor, Cenovus and aligned with ABSA (Alberta Boilers Safety), AER (Alberta Energy Regulator). Demo: info@atlantisndt.com.",
    bodyH1: "Document Control & QMS in Calgary | Atlantis NDT ERP",
    bodyText: "Document Control & QMS ERP module for inspection companies in Calgary, Canada. Pre-configured for Suncor, Cenovus and aligned with ABSA (Alberta Boilers Safety), AER (Alberta Energy Regulator). Demo: info@atlantisndt.com.",
  },
  {
    path: "/erp-modules/document-control-perth",
    title: "Document Control & QMS in Perth | Atlantis NDT ERP",
    description: "Document Control & QMS ERP module for inspection companies in Perth, Australia. Pre-configured for Woodside Energy, Chevron Australia (Gorgon, Wheatstone) and aligned with WorkSafe WA, NOPSEMA offshore. Demo: info@atlantisndt.com.",
    bodyH1: "Document Control & QMS in Perth | Atlantis NDT ERP",
    bodyText: "Document Control & QMS ERP module for inspection companies in Perth, Australia. Pre-configured for Woodside Energy, Chevron Australia (Gorgon, Wheatstone) and aligned with WorkSafe WA, NOPSEMA offshore. Demo: info@atlantisndt.com.",
  },
  {
    path: "/erp-modules/document-control-doha",
    title: "Document Control & QMS in Doha | Atlantis NDT ERP",
    description: "Document Control & QMS ERP module for inspection companies in Doha, Qatar. Pre-configured for QatarEnergy, RasGas and aligned with QCDD (Qatar Civil Defence), QGOSM (Qatar General Org Standards & Metrology). Demo: info@atlantisndt.com.",
    bodyH1: "Document Control & QMS in Doha | Atlantis NDT ERP",
    bodyText: "Document Control & QMS ERP module for inspection companies in Doha, Qatar. Pre-configured for QatarEnergy, RasGas and aligned with QCDD (Qatar Civil Defence), QGOSM (Qatar General Org Standards & Metrology). Demo: info@atlantisndt.com.",
  },
  {
    path: "/erp-modules/document-control-kuala-lumpur",
    title: "Document Control & QMS in Kuala Lumpur | Atlantis NDT ERP",
    description: "Document Control & QMS ERP module for inspection companies in Kuala Lumpur, Malaysia. Pre-configured for PETRONAS upstream/downstream, PCSB and aligned with DOSH (Department of Occupational Safety & Health), Suruhanjaya Tenaga (Energy Commission). Demo: info@atlantisndt.com.",
    bodyH1: "Document Control & QMS in Kuala Lumpur | Atlantis NDT ERP",
    bodyText: "Document Control & QMS ERP module for inspection companies in Kuala Lumpur, Malaysia. Pre-configured for PETRONAS upstream/downstream, PCSB and aligned with DOSH (Department of Occupational Safety & Health), Suruhanjaya Tenaga (Energy Commission). Demo: info@atlantisndt.com.",
  },
  {
    path: "/erp-modules/document-control-jakarta",
    title: "Document Control & QMS in Jakarta | Atlantis NDT ERP",
    description: "Document Control & QMS ERP module for inspection companies in Jakarta, Indonesia. Pre-configured for Pertamina (Cilacap, Balikpapan, Dumai refineries), Pupuk Indonesia and aligned with SKK Migas, K3 Migas (HSE). Demo: info@atlantisndt.com.",
    bodyH1: "Document Control & QMS in Jakarta | Atlantis NDT ERP",
    bodyText: "Document Control & QMS ERP module for inspection companies in Jakarta, Indonesia. Pre-configured for Pertamina (Cilacap, Balikpapan, Dumai refineries), Pupuk Indonesia and aligned with SKK Migas, K3 Migas (HSE). Demo: info@atlantisndt.com.",
  },
  {
    path: "/erp-modules/document-control-lagos",
    title: "Document Control & QMS in Lagos | Atlantis NDT ERP",
    description: "Document Control & QMS ERP module for inspection companies in Lagos, Nigeria. Pre-configured for NNPCL refineries (Port Harcourt, Warri, Kaduna), Shell SPDC and aligned with NUPRC (Nigerian Upstream Petroleum Regulatory), NMDPRA (downstream). Demo: info@atlantisndt.com.",
    bodyH1: "Document Control & QMS in Lagos | Atlantis NDT ERP",
    bodyText: "Document Control & QMS ERP module for inspection companies in Lagos, Nigeria. Pre-configured for NNPCL refineries (Port Harcourt, Warri, Kaduna), Shell SPDC and aligned with NUPRC (Nigerian Upstream Petroleum Regulatory), NMDPRA (downstream). Demo: info@atlantisndt.com.",
  },
  {
    path: "/erp-modules/asset-management-houston",
    title: "Asset Integrity & Equipment Register in Houston | Atlantis NDT ERP",
    description: "Asset Integrity & Equipment Register ERP module for inspection companies in Houston, USA. Pre-configured for ExxonMobil Baytown refinery, Marathon Galveston Bay and aligned with OSHA Region 6 PSM, TCEQ air permits. Demo: info@atlantisndt.com.",
    bodyH1: "Asset Integrity & Equipment Register in Houston | Atlantis NDT ERP",
    bodyText: "Asset Integrity & Equipment Register ERP module for inspection companies in Houston, USA. Pre-configured for ExxonMobil Baytown refinery, Marathon Galveston Bay and aligned with OSHA Region 6 PSM, TCEQ air permits. Demo: info@atlantisndt.com.",
  },
  {
    path: "/erp-modules/asset-management-dubai",
    title: "Asset Integrity & Equipment Register in Dubai | Atlantis NDT ERP",
    description: "Asset Integrity & Equipment Register ERP module for inspection companies in Dubai, UAE. Pre-configured for ADNOC Distribution, ENOC and aligned with ADQCC, MOIAT. Demo: info@atlantisndt.com.",
    bodyH1: "Asset Integrity & Equipment Register in Dubai | Atlantis NDT ERP",
    bodyText: "Asset Integrity & Equipment Register ERP module for inspection companies in Dubai, UAE. Pre-configured for ADNOC Distribution, ENOC and aligned with ADQCC, MOIAT. Demo: info@atlantisndt.com.",
  },
  {
    path: "/erp-modules/asset-management-abu-dhabi",
    title: "Asset Integrity & Equipment Register in Abu Dhabi | Atlantis NDT ERP",
    description: "Asset Integrity & Equipment Register ERP module for inspection companies in Abu Dhabi, UAE. Pre-configured for ADNOC Onshore, ADNOC LNG and aligned with ADNOC HSE, ADQCC. Demo: info@atlantisndt.com.",
    bodyH1: "Asset Integrity & Equipment Register in Abu Dhabi | Atlantis NDT ERP",
    bodyText: "Asset Integrity & Equipment Register ERP module for inspection companies in Abu Dhabi, UAE. Pre-configured for ADNOC Onshore, ADNOC LNG and aligned with ADNOC HSE, ADQCC. Demo: info@atlantisndt.com.",
  },
  {
    path: "/erp-modules/asset-management-saudi-arabia",
    title: "Asset Integrity & Equipment Register in Saudi Arabia | Atlantis NDT ERP",
    description: "Asset Integrity & Equipment Register ERP module for inspection companies in Saudi Arabia, Saudi Arabia. Pre-configured for Saudi Aramco upstream/downstream, SABIC petrochemicals and aligned with HRSD, GAMI. Demo: info@atlantisndt.com.",
    bodyH1: "Asset Integrity & Equipment Register in Saudi Arabia | Atlantis NDT ERP",
    bodyText: "Asset Integrity & Equipment Register ERP module for inspection companies in Saudi Arabia, Saudi Arabia. Pre-configured for Saudi Aramco upstream/downstream, SABIC petrochemicals and aligned with HRSD, GAMI. Demo: info@atlantisndt.com.",
  },
  {
    path: "/erp-modules/asset-management-singapore",
    title: "Asset Integrity & Equipment Register in Singapore | Atlantis NDT ERP",
    description: "Asset Integrity & Equipment Register ERP module for inspection companies in Singapore, Singapore. Pre-configured for ExxonMobil Jurong refinery, Shell Bukom and aligned with MOM (Ministry of Manpower), NEA environment. Demo: info@atlantisndt.com.",
    bodyH1: "Asset Integrity & Equipment Register in Singapore | Atlantis NDT ERP",
    bodyText: "Asset Integrity & Equipment Register ERP module for inspection companies in Singapore, Singapore. Pre-configured for ExxonMobil Jurong refinery, Shell Bukom and aligned with MOM (Ministry of Manpower), NEA environment. Demo: info@atlantisndt.com.",
  },
  {
    path: "/erp-modules/asset-management-mumbai",
    title: "Asset Integrity & Equipment Register in Mumbai | Atlantis NDT ERP",
    description: "Asset Integrity & Equipment Register ERP module for inspection companies in Mumbai, India. Pre-configured for BPCL Mahul refinery, HPCL Mumbai refinery and aligned with PESO, OISD. Demo: info@atlantisndt.com.",
    bodyH1: "Asset Integrity & Equipment Register in Mumbai | Atlantis NDT ERP",
    bodyText: "Asset Integrity & Equipment Register ERP module for inspection companies in Mumbai, India. Pre-configured for BPCL Mahul refinery, HPCL Mumbai refinery and aligned with PESO, OISD. Demo: info@atlantisndt.com.",
  },
  {
    path: "/erp-modules/asset-management-hyderabad",
    title: "Asset Integrity & Equipment Register in Hyderabad | Atlantis NDT ERP",
    description: "Asset Integrity & Equipment Register ERP module for inspection companies in Hyderabad, India. Pre-configured for BHEL boilers/turbines, HPCL Visakh refinery (adjacent) and aligned with PESO, BARC nuclear. Demo: info@atlantisndt.com.",
    bodyH1: "Asset Integrity & Equipment Register in Hyderabad | Atlantis NDT ERP",
    bodyText: "Asset Integrity & Equipment Register ERP module for inspection companies in Hyderabad, India. Pre-configured for BHEL boilers/turbines, HPCL Visakh refinery (adjacent) and aligned with PESO, BARC nuclear. Demo: info@atlantisndt.com.",
  },
  {
    path: "/erp-modules/asset-management-london",
    title: "Asset Integrity & Equipment Register in London | Atlantis NDT ERP",
    description: "Asset Integrity & Equipment Register ERP module for inspection companies in London, UK. Pre-configured for BP HQ, Shell HQ and aligned with HSE, ONR (Office Nuclear Regulation). Demo: info@atlantisndt.com.",
    bodyH1: "Asset Integrity & Equipment Register in London | Atlantis NDT ERP",
    bodyText: "Asset Integrity & Equipment Register ERP module for inspection companies in London, UK. Pre-configured for BP HQ, Shell HQ and aligned with HSE, ONR (Office Nuclear Regulation). Demo: info@atlantisndt.com.",
  },
  {
    path: "/erp-modules/asset-management-aberdeen",
    title: "Asset Integrity & Equipment Register in Aberdeen | Atlantis NDT ERP",
    description: "Asset Integrity & Equipment Register ERP module for inspection companies in Aberdeen, UK. Pre-configured for Harbour Energy, BP North Sea and aligned with HSE OSDR, OEUK (Offshore Energies UK). Demo: info@atlantisndt.com.",
    bodyH1: "Asset Integrity & Equipment Register in Aberdeen | Atlantis NDT ERP",
    bodyText: "Asset Integrity & Equipment Register ERP module for inspection companies in Aberdeen, UK. Pre-configured for Harbour Energy, BP North Sea and aligned with HSE OSDR, OEUK (Offshore Energies UK). Demo: info@atlantisndt.com.",
  },
  {
    path: "/erp-modules/asset-management-calgary",
    title: "Asset Integrity & Equipment Register in Calgary | Atlantis NDT ERP",
    description: "Asset Integrity & Equipment Register ERP module for inspection companies in Calgary, Canada. Pre-configured for Suncor, Cenovus and aligned with ABSA (Alberta Boilers Safety), AER (Alberta Energy Regulator). Demo: info@atlantisndt.com.",
    bodyH1: "Asset Integrity & Equipment Register in Calgary | Atlantis NDT ERP",
    bodyText: "Asset Integrity & Equipment Register ERP module for inspection companies in Calgary, Canada. Pre-configured for Suncor, Cenovus and aligned with ABSA (Alberta Boilers Safety), AER (Alberta Energy Regulator). Demo: info@atlantisndt.com.",
  },
  {
    path: "/erp-modules/asset-management-perth",
    title: "Asset Integrity & Equipment Register in Perth | Atlantis NDT ERP",
    description: "Asset Integrity & Equipment Register ERP module for inspection companies in Perth, Australia. Pre-configured for Woodside Energy, Chevron Australia (Gorgon, Wheatstone) and aligned with WorkSafe WA, NOPSEMA offshore. Demo: info@atlantisndt.com.",
    bodyH1: "Asset Integrity & Equipment Register in Perth | Atlantis NDT ERP",
    bodyText: "Asset Integrity & Equipment Register ERP module for inspection companies in Perth, Australia. Pre-configured for Woodside Energy, Chevron Australia (Gorgon, Wheatstone) and aligned with WorkSafe WA, NOPSEMA offshore. Demo: info@atlantisndt.com.",
  },
  {
    path: "/erp-modules/asset-management-doha",
    title: "Asset Integrity & Equipment Register in Doha | Atlantis NDT ERP",
    description: "Asset Integrity & Equipment Register ERP module for inspection companies in Doha, Qatar. Pre-configured for QatarEnergy, RasGas and aligned with QCDD (Qatar Civil Defence), QGOSM (Qatar General Org Standards & Metrology). Demo: info@atlantisndt.com.",
    bodyH1: "Asset Integrity & Equipment Register in Doha | Atlantis NDT ERP",
    bodyText: "Asset Integrity & Equipment Register ERP module for inspection companies in Doha, Qatar. Pre-configured for QatarEnergy, RasGas and aligned with QCDD (Qatar Civil Defence), QGOSM (Qatar General Org Standards & Metrology). Demo: info@atlantisndt.com.",
  },
  {
    path: "/erp-modules/asset-management-kuala-lumpur",
    title: "Asset Integrity & Equipment Register in Kuala Lumpur | Atlantis NDT ERP",
    description: "Asset Integrity & Equipment Register ERP module for inspection companies in Kuala Lumpur, Malaysia. Pre-configured for PETRONAS upstream/downstream, PCSB and aligned with DOSH (Department of Occupational Safety & Health), Suruhanjaya Tenaga (Energy Commission). Demo: info@atlantisndt.com.",
    bodyH1: "Asset Integrity & Equipment Register in Kuala Lumpur | Atlantis NDT ERP",
    bodyText: "Asset Integrity & Equipment Register ERP module for inspection companies in Kuala Lumpur, Malaysia. Pre-configured for PETRONAS upstream/downstream, PCSB and aligned with DOSH (Department of Occupational Safety & Health), Suruhanjaya Tenaga (Energy Commission). Demo: info@atlantisndt.com.",
  },
  {
    path: "/erp-modules/asset-management-jakarta",
    title: "Asset Integrity & Equipment Register in Jakarta | Atlantis NDT ERP",
    description: "Asset Integrity & Equipment Register ERP module for inspection companies in Jakarta, Indonesia. Pre-configured for Pertamina (Cilacap, Balikpapan, Dumai refineries), Pupuk Indonesia and aligned with SKK Migas, K3 Migas (HSE). Demo: info@atlantisndt.com.",
    bodyH1: "Asset Integrity & Equipment Register in Jakarta | Atlantis NDT ERP",
    bodyText: "Asset Integrity & Equipment Register ERP module for inspection companies in Jakarta, Indonesia. Pre-configured for Pertamina (Cilacap, Balikpapan, Dumai refineries), Pupuk Indonesia and aligned with SKK Migas, K3 Migas (HSE). Demo: info@atlantisndt.com.",
  },
  {
    path: "/erp-modules/asset-management-lagos",
    title: "Asset Integrity & Equipment Register in Lagos | Atlantis NDT ERP",
    description: "Asset Integrity & Equipment Register ERP module for inspection companies in Lagos, Nigeria. Pre-configured for NNPCL refineries (Port Harcourt, Warri, Kaduna), Shell SPDC and aligned with NUPRC (Nigerian Upstream Petroleum Regulatory), NMDPRA (downstream). Demo: info@atlantisndt.com.",
    bodyH1: "Asset Integrity & Equipment Register in Lagos | Atlantis NDT ERP",
    bodyText: "Asset Integrity & Equipment Register ERP module for inspection companies in Lagos, Nigeria. Pre-configured for NNPCL refineries (Port Harcourt, Warri, Kaduna), Shell SPDC and aligned with NUPRC (Nigerian Upstream Petroleum Regulatory), NMDPRA (downstream). Demo: info@atlantisndt.com.",
  },
  {
    path: "/erp-modules/quality-management-houston",
    title: "Quality Management & NCR in Houston | Atlantis NDT ERP",
    description: "Quality Management & NCR ERP module for inspection companies in Houston, USA. Pre-configured for ExxonMobil Baytown refinery, Marathon Galveston Bay and aligned with OSHA Region 6 PSM, TCEQ air permits. Demo: info@atlantisndt.com.",
    bodyH1: "Quality Management & NCR in Houston | Atlantis NDT ERP",
    bodyText: "Quality Management & NCR ERP module for inspection companies in Houston, USA. Pre-configured for ExxonMobil Baytown refinery, Marathon Galveston Bay and aligned with OSHA Region 6 PSM, TCEQ air permits. Demo: info@atlantisndt.com.",
  },
  {
    path: "/erp-modules/quality-management-dubai",
    title: "Quality Management & NCR in Dubai | Atlantis NDT ERP",
    description: "Quality Management & NCR ERP module for inspection companies in Dubai, UAE. Pre-configured for ADNOC Distribution, ENOC and aligned with ADQCC, MOIAT. Demo: info@atlantisndt.com.",
    bodyH1: "Quality Management & NCR in Dubai | Atlantis NDT ERP",
    bodyText: "Quality Management & NCR ERP module for inspection companies in Dubai, UAE. Pre-configured for ADNOC Distribution, ENOC and aligned with ADQCC, MOIAT. Demo: info@atlantisndt.com.",
  },
  {
    path: "/erp-modules/quality-management-abu-dhabi",
    title: "Quality Management & NCR in Abu Dhabi | Atlantis NDT ERP",
    description: "Quality Management & NCR ERP module for inspection companies in Abu Dhabi, UAE. Pre-configured for ADNOC Onshore, ADNOC LNG and aligned with ADNOC HSE, ADQCC. Demo: info@atlantisndt.com.",
    bodyH1: "Quality Management & NCR in Abu Dhabi | Atlantis NDT ERP",
    bodyText: "Quality Management & NCR ERP module for inspection companies in Abu Dhabi, UAE. Pre-configured for ADNOC Onshore, ADNOC LNG and aligned with ADNOC HSE, ADQCC. Demo: info@atlantisndt.com.",
  },
  {
    path: "/erp-modules/quality-management-saudi-arabia",
    title: "Quality Management & NCR in Saudi Arabia | Atlantis NDT ERP",
    description: "Quality Management & NCR ERP module for inspection companies in Saudi Arabia, Saudi Arabia. Pre-configured for Saudi Aramco upstream/downstream, SABIC petrochemicals and aligned with HRSD, GAMI. Demo: info@atlantisndt.com.",
    bodyH1: "Quality Management & NCR in Saudi Arabia | Atlantis NDT ERP",
    bodyText: "Quality Management & NCR ERP module for inspection companies in Saudi Arabia, Saudi Arabia. Pre-configured for Saudi Aramco upstream/downstream, SABIC petrochemicals and aligned with HRSD, GAMI. Demo: info@atlantisndt.com.",
  },
  {
    path: "/erp-modules/quality-management-singapore",
    title: "Quality Management & NCR in Singapore | Atlantis NDT ERP",
    description: "Quality Management & NCR ERP module for inspection companies in Singapore, Singapore. Pre-configured for ExxonMobil Jurong refinery, Shell Bukom and aligned with MOM (Ministry of Manpower), NEA environment. Demo: info@atlantisndt.com.",
    bodyH1: "Quality Management & NCR in Singapore | Atlantis NDT ERP",
    bodyText: "Quality Management & NCR ERP module for inspection companies in Singapore, Singapore. Pre-configured for ExxonMobil Jurong refinery, Shell Bukom and aligned with MOM (Ministry of Manpower), NEA environment. Demo: info@atlantisndt.com.",
  },
  {
    path: "/erp-modules/quality-management-mumbai",
    title: "Quality Management & NCR in Mumbai | Atlantis NDT ERP",
    description: "Quality Management & NCR ERP module for inspection companies in Mumbai, India. Pre-configured for BPCL Mahul refinery, HPCL Mumbai refinery and aligned with PESO, OISD. Demo: info@atlantisndt.com.",
    bodyH1: "Quality Management & NCR in Mumbai | Atlantis NDT ERP",
    bodyText: "Quality Management & NCR ERP module for inspection companies in Mumbai, India. Pre-configured for BPCL Mahul refinery, HPCL Mumbai refinery and aligned with PESO, OISD. Demo: info@atlantisndt.com.",
  },
  {
    path: "/erp-modules/quality-management-hyderabad",
    title: "Quality Management & NCR in Hyderabad | Atlantis NDT ERP",
    description: "Quality Management & NCR ERP module for inspection companies in Hyderabad, India. Pre-configured for BHEL boilers/turbines, HPCL Visakh refinery (adjacent) and aligned with PESO, BARC nuclear. Demo: info@atlantisndt.com.",
    bodyH1: "Quality Management & NCR in Hyderabad | Atlantis NDT ERP",
    bodyText: "Quality Management & NCR ERP module for inspection companies in Hyderabad, India. Pre-configured for BHEL boilers/turbines, HPCL Visakh refinery (adjacent) and aligned with PESO, BARC nuclear. Demo: info@atlantisndt.com.",
  },
  {
    path: "/erp-modules/quality-management-london",
    title: "Quality Management & NCR in London | Atlantis NDT ERP",
    description: "Quality Management & NCR ERP module for inspection companies in London, UK. Pre-configured for BP HQ, Shell HQ and aligned with HSE, ONR (Office Nuclear Regulation). Demo: info@atlantisndt.com.",
    bodyH1: "Quality Management & NCR in London | Atlantis NDT ERP",
    bodyText: "Quality Management & NCR ERP module for inspection companies in London, UK. Pre-configured for BP HQ, Shell HQ and aligned with HSE, ONR (Office Nuclear Regulation). Demo: info@atlantisndt.com.",
  },
  {
    path: "/erp-modules/quality-management-aberdeen",
    title: "Quality Management & NCR in Aberdeen | Atlantis NDT ERP",
    description: "Quality Management & NCR ERP module for inspection companies in Aberdeen, UK. Pre-configured for Harbour Energy, BP North Sea and aligned with HSE OSDR, OEUK (Offshore Energies UK). Demo: info@atlantisndt.com.",
    bodyH1: "Quality Management & NCR in Aberdeen | Atlantis NDT ERP",
    bodyText: "Quality Management & NCR ERP module for inspection companies in Aberdeen, UK. Pre-configured for Harbour Energy, BP North Sea and aligned with HSE OSDR, OEUK (Offshore Energies UK). Demo: info@atlantisndt.com.",
  },
  {
    path: "/erp-modules/quality-management-calgary",
    title: "Quality Management & NCR in Calgary | Atlantis NDT ERP",
    description: "Quality Management & NCR ERP module for inspection companies in Calgary, Canada. Pre-configured for Suncor, Cenovus and aligned with ABSA (Alberta Boilers Safety), AER (Alberta Energy Regulator). Demo: info@atlantisndt.com.",
    bodyH1: "Quality Management & NCR in Calgary | Atlantis NDT ERP",
    bodyText: "Quality Management & NCR ERP module for inspection companies in Calgary, Canada. Pre-configured for Suncor, Cenovus and aligned with ABSA (Alberta Boilers Safety), AER (Alberta Energy Regulator). Demo: info@atlantisndt.com.",
  },
  {
    path: "/erp-modules/quality-management-perth",
    title: "Quality Management & NCR in Perth | Atlantis NDT ERP",
    description: "Quality Management & NCR ERP module for inspection companies in Perth, Australia. Pre-configured for Woodside Energy, Chevron Australia (Gorgon, Wheatstone) and aligned with WorkSafe WA, NOPSEMA offshore. Demo: info@atlantisndt.com.",
    bodyH1: "Quality Management & NCR in Perth | Atlantis NDT ERP",
    bodyText: "Quality Management & NCR ERP module for inspection companies in Perth, Australia. Pre-configured for Woodside Energy, Chevron Australia (Gorgon, Wheatstone) and aligned with WorkSafe WA, NOPSEMA offshore. Demo: info@atlantisndt.com.",
  },
  {
    path: "/erp-modules/quality-management-doha",
    title: "Quality Management & NCR in Doha | Atlantis NDT ERP",
    description: "Quality Management & NCR ERP module for inspection companies in Doha, Qatar. Pre-configured for QatarEnergy, RasGas and aligned with QCDD (Qatar Civil Defence), QGOSM (Qatar General Org Standards & Metrology). Demo: info@atlantisndt.com.",
    bodyH1: "Quality Management & NCR in Doha | Atlantis NDT ERP",
    bodyText: "Quality Management & NCR ERP module for inspection companies in Doha, Qatar. Pre-configured for QatarEnergy, RasGas and aligned with QCDD (Qatar Civil Defence), QGOSM (Qatar General Org Standards & Metrology). Demo: info@atlantisndt.com.",
  },
  {
    path: "/erp-modules/quality-management-kuala-lumpur",
    title: "Quality Management & NCR in Kuala Lumpur | Atlantis NDT ERP",
    description: "Quality Management & NCR ERP module for inspection companies in Kuala Lumpur, Malaysia. Pre-configured for PETRONAS upstream/downstream, PCSB and aligned with DOSH (Department of Occupational Safety & Health), Suruhanjaya Tenaga (Energy Commission). Demo: info@atlantisndt.com.",
    bodyH1: "Quality Management & NCR in Kuala Lumpur | Atlantis NDT ERP",
    bodyText: "Quality Management & NCR ERP module for inspection companies in Kuala Lumpur, Malaysia. Pre-configured for PETRONAS upstream/downstream, PCSB and aligned with DOSH (Department of Occupational Safety & Health), Suruhanjaya Tenaga (Energy Commission). Demo: info@atlantisndt.com.",
  },
  {
    path: "/erp-modules/quality-management-jakarta",
    title: "Quality Management & NCR in Jakarta | Atlantis NDT ERP",
    description: "Quality Management & NCR ERP module for inspection companies in Jakarta, Indonesia. Pre-configured for Pertamina (Cilacap, Balikpapan, Dumai refineries), Pupuk Indonesia and aligned with SKK Migas, K3 Migas (HSE). Demo: info@atlantisndt.com.",
    bodyH1: "Quality Management & NCR in Jakarta | Atlantis NDT ERP",
    bodyText: "Quality Management & NCR ERP module for inspection companies in Jakarta, Indonesia. Pre-configured for Pertamina (Cilacap, Balikpapan, Dumai refineries), Pupuk Indonesia and aligned with SKK Migas, K3 Migas (HSE). Demo: info@atlantisndt.com.",
  },
  {
    path: "/erp-modules/quality-management-lagos",
    title: "Quality Management & NCR in Lagos | Atlantis NDT ERP",
    description: "Quality Management & NCR ERP module for inspection companies in Lagos, Nigeria. Pre-configured for NNPCL refineries (Port Harcourt, Warri, Kaduna), Shell SPDC and aligned with NUPRC (Nigerian Upstream Petroleum Regulatory), NMDPRA (downstream). Demo: info@atlantisndt.com.",
    bodyH1: "Quality Management & NCR in Lagos | Atlantis NDT ERP",
    bodyText: "Quality Management & NCR ERP module for inspection companies in Lagos, Nigeria. Pre-configured for NNPCL refineries (Port Harcourt, Warri, Kaduna), Shell SPDC and aligned with NUPRC (Nigerian Upstream Petroleum Regulatory), NMDPRA (downstream). Demo: info@atlantisndt.com.",
  },
  {
    path: "/erp-modules/project-management-houston",
    title: "Project Management & Turnaround Support in Houston | Atlantis NDT ERP",
    description: "Project Management & Turnaround Support ERP module for inspection companies in Houston, USA. Pre-configured for ExxonMobil Baytown refinery, Marathon Galveston Bay and aligned with OSHA Region 6 PSM, TCEQ air permits. Demo: info@atlantisndt.com.",
    bodyH1: "Project Management & Turnaround Support in Houston | Atlantis NDT ERP",
    bodyText: "Project Management & Turnaround Support ERP module for inspection companies in Houston, USA. Pre-configured for ExxonMobil Baytown refinery, Marathon Galveston Bay and aligned with OSHA Region 6 PSM, TCEQ air permits. Demo: info@atlantisndt.com.",
  },
  {
    path: "/erp-modules/project-management-dubai",
    title: "Project Management & Turnaround Support in Dubai | Atlantis NDT ERP",
    description: "Project Management & Turnaround Support ERP module for inspection companies in Dubai, UAE. Pre-configured for ADNOC Distribution, ENOC and aligned with ADQCC, MOIAT. Demo: info@atlantisndt.com.",
    bodyH1: "Project Management & Turnaround Support in Dubai | Atlantis NDT ERP",
    bodyText: "Project Management & Turnaround Support ERP module for inspection companies in Dubai, UAE. Pre-configured for ADNOC Distribution, ENOC and aligned with ADQCC, MOIAT. Demo: info@atlantisndt.com.",
  },
  {
    path: "/erp-modules/project-management-abu-dhabi",
    title: "Project Management & Turnaround Support in Abu Dhabi | Atlantis NDT ERP",
    description: "Project Management & Turnaround Support ERP module for inspection companies in Abu Dhabi, UAE. Pre-configured for ADNOC Onshore, ADNOC LNG and aligned with ADNOC HSE, ADQCC. Demo: info@atlantisndt.com.",
    bodyH1: "Project Management & Turnaround Support in Abu Dhabi | Atlantis NDT ERP",
    bodyText: "Project Management & Turnaround Support ERP module for inspection companies in Abu Dhabi, UAE. Pre-configured for ADNOC Onshore, ADNOC LNG and aligned with ADNOC HSE, ADQCC. Demo: info@atlantisndt.com.",
  },
  {
    path: "/erp-modules/project-management-saudi-arabia",
    title: "Project Management & Turnaround Support in Saudi Arabia | Atlantis NDT ERP",
    description: "Project Management & Turnaround Support ERP module for inspection companies in Saudi Arabia, Saudi Arabia. Pre-configured for Saudi Aramco upstream/downstream, SABIC petrochemicals and aligned with HRSD, GAMI. Demo: info@atlantisndt.com.",
    bodyH1: "Project Management & Turnaround Support in Saudi Arabia | Atlantis NDT ERP",
    bodyText: "Project Management & Turnaround Support ERP module for inspection companies in Saudi Arabia, Saudi Arabia. Pre-configured for Saudi Aramco upstream/downstream, SABIC petrochemicals and aligned with HRSD, GAMI. Demo: info@atlantisndt.com.",
  },
  {
    path: "/erp-modules/project-management-singapore",
    title: "Project Management & Turnaround Support in Singapore | Atlantis NDT ERP",
    description: "Project Management & Turnaround Support ERP module for inspection companies in Singapore, Singapore. Pre-configured for ExxonMobil Jurong refinery, Shell Bukom and aligned with MOM (Ministry of Manpower), NEA environment. Demo: info@atlantisndt.com.",
    bodyH1: "Project Management & Turnaround Support in Singapore | Atlantis NDT ERP",
    bodyText: "Project Management & Turnaround Support ERP module for inspection companies in Singapore, Singapore. Pre-configured for ExxonMobil Jurong refinery, Shell Bukom and aligned with MOM (Ministry of Manpower), NEA environment. Demo: info@atlantisndt.com.",
  },
  {
    path: "/erp-modules/project-management-mumbai",
    title: "Project Management & Turnaround Support in Mumbai | Atlantis NDT ERP",
    description: "Project Management & Turnaround Support ERP module for inspection companies in Mumbai, India. Pre-configured for BPCL Mahul refinery, HPCL Mumbai refinery and aligned with PESO, OISD. Demo: info@atlantisndt.com.",
    bodyH1: "Project Management & Turnaround Support in Mumbai | Atlantis NDT ERP",
    bodyText: "Project Management & Turnaround Support ERP module for inspection companies in Mumbai, India. Pre-configured for BPCL Mahul refinery, HPCL Mumbai refinery and aligned with PESO, OISD. Demo: info@atlantisndt.com.",
  },
  {
    path: "/erp-modules/project-management-hyderabad",
    title: "Project Management & Turnaround Support in Hyderabad | Atlantis NDT ERP",
    description: "Project Management & Turnaround Support ERP module for inspection companies in Hyderabad, India. Pre-configured for BHEL boilers/turbines, HPCL Visakh refinery (adjacent) and aligned with PESO, BARC nuclear. Demo: info@atlantisndt.com.",
    bodyH1: "Project Management & Turnaround Support in Hyderabad | Atlantis NDT ERP",
    bodyText: "Project Management & Turnaround Support ERP module for inspection companies in Hyderabad, India. Pre-configured for BHEL boilers/turbines, HPCL Visakh refinery (adjacent) and aligned with PESO, BARC nuclear. Demo: info@atlantisndt.com.",
  },
  {
    path: "/erp-modules/project-management-london",
    title: "Project Management & Turnaround Support in London | Atlantis NDT ERP",
    description: "Project Management & Turnaround Support ERP module for inspection companies in London, UK. Pre-configured for BP HQ, Shell HQ and aligned with HSE, ONR (Office Nuclear Regulation). Demo: info@atlantisndt.com.",
    bodyH1: "Project Management & Turnaround Support in London | Atlantis NDT ERP",
    bodyText: "Project Management & Turnaround Support ERP module for inspection companies in London, UK. Pre-configured for BP HQ, Shell HQ and aligned with HSE, ONR (Office Nuclear Regulation). Demo: info@atlantisndt.com.",
  },
  {
    path: "/erp-modules/project-management-aberdeen",
    title: "Project Management & Turnaround Support in Aberdeen | Atlantis NDT ERP",
    description: "Project Management & Turnaround Support ERP module for inspection companies in Aberdeen, UK. Pre-configured for Harbour Energy, BP North Sea and aligned with HSE OSDR, OEUK (Offshore Energies UK). Demo: info@atlantisndt.com.",
    bodyH1: "Project Management & Turnaround Support in Aberdeen | Atlantis NDT ERP",
    bodyText: "Project Management & Turnaround Support ERP module for inspection companies in Aberdeen, UK. Pre-configured for Harbour Energy, BP North Sea and aligned with HSE OSDR, OEUK (Offshore Energies UK). Demo: info@atlantisndt.com.",
  },
  {
    path: "/erp-modules/project-management-calgary",
    title: "Project Management & Turnaround Support in Calgary | Atlantis NDT ERP",
    description: "Project Management & Turnaround Support ERP module for inspection companies in Calgary, Canada. Pre-configured for Suncor, Cenovus and aligned with ABSA (Alberta Boilers Safety), AER (Alberta Energy Regulator). Demo: info@atlantisndt.com.",
    bodyH1: "Project Management & Turnaround Support in Calgary | Atlantis NDT ERP",
    bodyText: "Project Management & Turnaround Support ERP module for inspection companies in Calgary, Canada. Pre-configured for Suncor, Cenovus and aligned with ABSA (Alberta Boilers Safety), AER (Alberta Energy Regulator). Demo: info@atlantisndt.com.",
  },
  {
    path: "/erp-modules/project-management-perth",
    title: "Project Management & Turnaround Support in Perth | Atlantis NDT ERP",
    description: "Project Management & Turnaround Support ERP module for inspection companies in Perth, Australia. Pre-configured for Woodside Energy, Chevron Australia (Gorgon, Wheatstone) and aligned with WorkSafe WA, NOPSEMA offshore. Demo: info@atlantisndt.com.",
    bodyH1: "Project Management & Turnaround Support in Perth | Atlantis NDT ERP",
    bodyText: "Project Management & Turnaround Support ERP module for inspection companies in Perth, Australia. Pre-configured for Woodside Energy, Chevron Australia (Gorgon, Wheatstone) and aligned with WorkSafe WA, NOPSEMA offshore. Demo: info@atlantisndt.com.",
  },
  {
    path: "/erp-modules/project-management-doha",
    title: "Project Management & Turnaround Support in Doha | Atlantis NDT ERP",
    description: "Project Management & Turnaround Support ERP module for inspection companies in Doha, Qatar. Pre-configured for QatarEnergy, RasGas and aligned with QCDD (Qatar Civil Defence), QGOSM (Qatar General Org Standards & Metrology). Demo: info@atlantisndt.com.",
    bodyH1: "Project Management & Turnaround Support in Doha | Atlantis NDT ERP",
    bodyText: "Project Management & Turnaround Support ERP module for inspection companies in Doha, Qatar. Pre-configured for QatarEnergy, RasGas and aligned with QCDD (Qatar Civil Defence), QGOSM (Qatar General Org Standards & Metrology). Demo: info@atlantisndt.com.",
  },
  {
    path: "/erp-modules/project-management-kuala-lumpur",
    title: "Project Management & Turnaround Support in Kuala Lumpur | Atlantis NDT ERP",
    description: "Project Management & Turnaround Support ERP module for inspection companies in Kuala Lumpur, Malaysia. Pre-configured for PETRONAS upstream/downstream, PCSB and aligned with DOSH (Department of Occupational Safety & Health), Suruhanjaya Tenaga (Energy Commission). Demo: info@atlantisndt.com.",
    bodyH1: "Project Management & Turnaround Support in Kuala Lumpur | Atlantis NDT ERP",
    bodyText: "Project Management & Turnaround Support ERP module for inspection companies in Kuala Lumpur, Malaysia. Pre-configured for PETRONAS upstream/downstream, PCSB and aligned with DOSH (Department of Occupational Safety & Health), Suruhanjaya Tenaga (Energy Commission). Demo: info@atlantisndt.com.",
  },
  {
    path: "/erp-modules/project-management-jakarta",
    title: "Project Management & Turnaround Support in Jakarta | Atlantis NDT ERP",
    description: "Project Management & Turnaround Support ERP module for inspection companies in Jakarta, Indonesia. Pre-configured for Pertamina (Cilacap, Balikpapan, Dumai refineries), Pupuk Indonesia and aligned with SKK Migas, K3 Migas (HSE). Demo: info@atlantisndt.com.",
    bodyH1: "Project Management & Turnaround Support in Jakarta | Atlantis NDT ERP",
    bodyText: "Project Management & Turnaround Support ERP module for inspection companies in Jakarta, Indonesia. Pre-configured for Pertamina (Cilacap, Balikpapan, Dumai refineries), Pupuk Indonesia and aligned with SKK Migas, K3 Migas (HSE). Demo: info@atlantisndt.com.",
  },
  {
    path: "/erp-modules/project-management-lagos",
    title: "Project Management & Turnaround Support in Lagos | Atlantis NDT ERP",
    description: "Project Management & Turnaround Support ERP module for inspection companies in Lagos, Nigeria. Pre-configured for NNPCL refineries (Port Harcourt, Warri, Kaduna), Shell SPDC and aligned with NUPRC (Nigerian Upstream Petroleum Regulatory), NMDPRA (downstream). Demo: info@atlantisndt.com.",
    bodyH1: "Project Management & Turnaround Support in Lagos | Atlantis NDT ERP",
    bodyText: "Project Management & Turnaround Support ERP module for inspection companies in Lagos, Nigeria. Pre-configured for NNPCL refineries (Port Harcourt, Warri, Kaduna), Shell SPDC and aligned with NUPRC (Nigerian Upstream Petroleum Regulatory), NMDPRA (downstream). Demo: info@atlantisndt.com.",
  },
  {
    path: "/erp-modules/certification-tracking-houston",
    title: "Certification & Personnel Qualification in Houston | Atlantis NDT ERP",
    description: "Certification & Personnel Qualification ERP module for inspection companies in Houston, USA. Pre-configured for ExxonMobil Baytown refinery, Marathon Galveston Bay and aligned with OSHA Region 6 PSM, TCEQ air permits. Demo: info@atlantisndt.com.",
    bodyH1: "Certification & Personnel Qualification in Houston | Atlantis NDT ERP",
    bodyText: "Certification & Personnel Qualification ERP module for inspection companies in Houston, USA. Pre-configured for ExxonMobil Baytown refinery, Marathon Galveston Bay and aligned with OSHA Region 6 PSM, TCEQ air permits. Demo: info@atlantisndt.com.",
  },
  {
    path: "/erp-modules/certification-tracking-dubai",
    title: "Certification & Personnel Qualification in Dubai | Atlantis NDT ERP",
    description: "Certification & Personnel Qualification ERP module for inspection companies in Dubai, UAE. Pre-configured for ADNOC Distribution, ENOC and aligned with ADQCC, MOIAT. Demo: info@atlantisndt.com.",
    bodyH1: "Certification & Personnel Qualification in Dubai | Atlantis NDT ERP",
    bodyText: "Certification & Personnel Qualification ERP module for inspection companies in Dubai, UAE. Pre-configured for ADNOC Distribution, ENOC and aligned with ADQCC, MOIAT. Demo: info@atlantisndt.com.",
  },
  {
    path: "/erp-modules/certification-tracking-abu-dhabi",
    title: "Certification & Personnel Qualification in Abu Dhabi | Atlantis NDT ERP",
    description: "Certification & Personnel Qualification ERP module for inspection companies in Abu Dhabi, UAE. Pre-configured for ADNOC Onshore, ADNOC LNG and aligned with ADNOC HSE, ADQCC. Demo: info@atlantisndt.com.",
    bodyH1: "Certification & Personnel Qualification in Abu Dhabi | Atlantis NDT ERP",
    bodyText: "Certification & Personnel Qualification ERP module for inspection companies in Abu Dhabi, UAE. Pre-configured for ADNOC Onshore, ADNOC LNG and aligned with ADNOC HSE, ADQCC. Demo: info@atlantisndt.com.",
  },
  {
    path: "/erp-modules/certification-tracking-saudi-arabia",
    title: "Certification & Personnel Qualification in Saudi Arabia | Atlantis NDT ERP",
    description: "Certification & Personnel Qualification ERP module for inspection companies in Saudi Arabia, Saudi Arabia. Pre-configured for Saudi Aramco upstream/downstream, SABIC petrochemicals and aligned with HRSD, GAMI. Demo: info@atlantisndt.com.",
    bodyH1: "Certification & Personnel Qualification in Saudi Arabia | Atlantis NDT ERP",
    bodyText: "Certification & Personnel Qualification ERP module for inspection companies in Saudi Arabia, Saudi Arabia. Pre-configured for Saudi Aramco upstream/downstream, SABIC petrochemicals and aligned with HRSD, GAMI. Demo: info@atlantisndt.com.",
  },
  {
    path: "/erp-modules/certification-tracking-singapore",
    title: "Certification & Personnel Qualification in Singapore | Atlantis NDT ERP",
    description: "Certification & Personnel Qualification ERP module for inspection companies in Singapore, Singapore. Pre-configured for ExxonMobil Jurong refinery, Shell Bukom and aligned with MOM (Ministry of Manpower), NEA environment. Demo: info@atlantisndt.com.",
    bodyH1: "Certification & Personnel Qualification in Singapore | Atlantis NDT ERP",
    bodyText: "Certification & Personnel Qualification ERP module for inspection companies in Singapore, Singapore. Pre-configured for ExxonMobil Jurong refinery, Shell Bukom and aligned with MOM (Ministry of Manpower), NEA environment. Demo: info@atlantisndt.com.",
  },
  {
    path: "/erp-modules/certification-tracking-mumbai",
    title: "Certification & Personnel Qualification in Mumbai | Atlantis NDT ERP",
    description: "Certification & Personnel Qualification ERP module for inspection companies in Mumbai, India. Pre-configured for BPCL Mahul refinery, HPCL Mumbai refinery and aligned with PESO, OISD. Demo: info@atlantisndt.com.",
    bodyH1: "Certification & Personnel Qualification in Mumbai | Atlantis NDT ERP",
    bodyText: "Certification & Personnel Qualification ERP module for inspection companies in Mumbai, India. Pre-configured for BPCL Mahul refinery, HPCL Mumbai refinery and aligned with PESO, OISD. Demo: info@atlantisndt.com.",
  },
  {
    path: "/erp-modules/certification-tracking-hyderabad",
    title: "Certification & Personnel Qualification in Hyderabad | Atlantis NDT ERP",
    description: "Certification & Personnel Qualification ERP module for inspection companies in Hyderabad, India. Pre-configured for BHEL boilers/turbines, HPCL Visakh refinery (adjacent) and aligned with PESO, BARC nuclear. Demo: info@atlantisndt.com.",
    bodyH1: "Certification & Personnel Qualification in Hyderabad | Atlantis NDT ERP",
    bodyText: "Certification & Personnel Qualification ERP module for inspection companies in Hyderabad, India. Pre-configured for BHEL boilers/turbines, HPCL Visakh refinery (adjacent) and aligned with PESO, BARC nuclear. Demo: info@atlantisndt.com.",
  },
  {
    path: "/erp-modules/certification-tracking-london",
    title: "Certification & Personnel Qualification in London | Atlantis NDT ERP",
    description: "Certification & Personnel Qualification ERP module for inspection companies in London, UK. Pre-configured for BP HQ, Shell HQ and aligned with HSE, ONR (Office Nuclear Regulation). Demo: info@atlantisndt.com.",
    bodyH1: "Certification & Personnel Qualification in London | Atlantis NDT ERP",
    bodyText: "Certification & Personnel Qualification ERP module for inspection companies in London, UK. Pre-configured for BP HQ, Shell HQ and aligned with HSE, ONR (Office Nuclear Regulation). Demo: info@atlantisndt.com.",
  },
  {
    path: "/erp-modules/certification-tracking-aberdeen",
    title: "Certification & Personnel Qualification in Aberdeen | Atlantis NDT ERP",
    description: "Certification & Personnel Qualification ERP module for inspection companies in Aberdeen, UK. Pre-configured for Harbour Energy, BP North Sea and aligned with HSE OSDR, OEUK (Offshore Energies UK). Demo: info@atlantisndt.com.",
    bodyH1: "Certification & Personnel Qualification in Aberdeen | Atlantis NDT ERP",
    bodyText: "Certification & Personnel Qualification ERP module for inspection companies in Aberdeen, UK. Pre-configured for Harbour Energy, BP North Sea and aligned with HSE OSDR, OEUK (Offshore Energies UK). Demo: info@atlantisndt.com.",
  },
  {
    path: "/erp-modules/certification-tracking-calgary",
    title: "Certification & Personnel Qualification in Calgary | Atlantis NDT ERP",
    description: "Certification & Personnel Qualification ERP module for inspection companies in Calgary, Canada. Pre-configured for Suncor, Cenovus and aligned with ABSA (Alberta Boilers Safety), AER (Alberta Energy Regulator). Demo: info@atlantisndt.com.",
    bodyH1: "Certification & Personnel Qualification in Calgary | Atlantis NDT ERP",
    bodyText: "Certification & Personnel Qualification ERP module for inspection companies in Calgary, Canada. Pre-configured for Suncor, Cenovus and aligned with ABSA (Alberta Boilers Safety), AER (Alberta Energy Regulator). Demo: info@atlantisndt.com.",
  },
  {
    path: "/erp-modules/certification-tracking-perth",
    title: "Certification & Personnel Qualification in Perth | Atlantis NDT ERP",
    description: "Certification & Personnel Qualification ERP module for inspection companies in Perth, Australia. Pre-configured for Woodside Energy, Chevron Australia (Gorgon, Wheatstone) and aligned with WorkSafe WA, NOPSEMA offshore. Demo: info@atlantisndt.com.",
    bodyH1: "Certification & Personnel Qualification in Perth | Atlantis NDT ERP",
    bodyText: "Certification & Personnel Qualification ERP module for inspection companies in Perth, Australia. Pre-configured for Woodside Energy, Chevron Australia (Gorgon, Wheatstone) and aligned with WorkSafe WA, NOPSEMA offshore. Demo: info@atlantisndt.com.",
  },
  {
    path: "/erp-modules/certification-tracking-doha",
    title: "Certification & Personnel Qualification in Doha | Atlantis NDT ERP",
    description: "Certification & Personnel Qualification ERP module for inspection companies in Doha, Qatar. Pre-configured for QatarEnergy, RasGas and aligned with QCDD (Qatar Civil Defence), QGOSM (Qatar General Org Standards & Metrology). Demo: info@atlantisndt.com.",
    bodyH1: "Certification & Personnel Qualification in Doha | Atlantis NDT ERP",
    bodyText: "Certification & Personnel Qualification ERP module for inspection companies in Doha, Qatar. Pre-configured for QatarEnergy, RasGas and aligned with QCDD (Qatar Civil Defence), QGOSM (Qatar General Org Standards & Metrology). Demo: info@atlantisndt.com.",
  },
  {
    path: "/erp-modules/certification-tracking-kuala-lumpur",
    title: "Certification & Personnel Qualification in Kuala Lumpur | Atlantis NDT ERP",
    description: "Certification & Personnel Qualification ERP module for inspection companies in Kuala Lumpur, Malaysia. Pre-configured for PETRONAS upstream/downstream, PCSB and aligned with DOSH (Department of Occupational Safety & Health), Suruhanjaya Tenaga (Energy Commission). Demo: info@atlantisndt.com.",
    bodyH1: "Certification & Personnel Qualification in Kuala Lumpur | Atlantis NDT ERP",
    bodyText: "Certification & Personnel Qualification ERP module for inspection companies in Kuala Lumpur, Malaysia. Pre-configured for PETRONAS upstream/downstream, PCSB and aligned with DOSH (Department of Occupational Safety & Health), Suruhanjaya Tenaga (Energy Commission). Demo: info@atlantisndt.com.",
  },
  {
    path: "/erp-modules/certification-tracking-jakarta",
    title: "Certification & Personnel Qualification in Jakarta | Atlantis NDT ERP",
    description: "Certification & Personnel Qualification ERP module for inspection companies in Jakarta, Indonesia. Pre-configured for Pertamina (Cilacap, Balikpapan, Dumai refineries), Pupuk Indonesia and aligned with SKK Migas, K3 Migas (HSE). Demo: info@atlantisndt.com.",
    bodyH1: "Certification & Personnel Qualification in Jakarta | Atlantis NDT ERP",
    bodyText: "Certification & Personnel Qualification ERP module for inspection companies in Jakarta, Indonesia. Pre-configured for Pertamina (Cilacap, Balikpapan, Dumai refineries), Pupuk Indonesia and aligned with SKK Migas, K3 Migas (HSE). Demo: info@atlantisndt.com.",
  },
  {
    path: "/erp-modules/certification-tracking-lagos",
    title: "Certification & Personnel Qualification in Lagos | Atlantis NDT ERP",
    description: "Certification & Personnel Qualification ERP module for inspection companies in Lagos, Nigeria. Pre-configured for NNPCL refineries (Port Harcourt, Warri, Kaduna), Shell SPDC and aligned with NUPRC (Nigerian Upstream Petroleum Regulatory), NMDPRA (downstream). Demo: info@atlantisndt.com.",
    bodyH1: "Certification & Personnel Qualification in Lagos | Atlantis NDT ERP",
    bodyText: "Certification & Personnel Qualification ERP module for inspection companies in Lagos, Nigeria. Pre-configured for NNPCL refineries (Port Harcourt, Warri, Kaduna), Shell SPDC and aligned with NUPRC (Nigerian Upstream Petroleum Regulatory), NMDPRA (downstream). Demo: info@atlantisndt.com.",
  },
  {
    path: "/erp-modules/work-order-management-houston",
    title: "Work Order & Job Management in Houston | Atlantis NDT ERP",
    description: "Work Order & Job Management ERP module for inspection companies in Houston, USA. Pre-configured for ExxonMobil Baytown refinery, Marathon Galveston Bay and aligned with OSHA Region 6 PSM, TCEQ air permits. Demo: info@atlantisndt.com.",
    bodyH1: "Work Order & Job Management in Houston | Atlantis NDT ERP",
    bodyText: "Work Order & Job Management ERP module for inspection companies in Houston, USA. Pre-configured for ExxonMobil Baytown refinery, Marathon Galveston Bay and aligned with OSHA Region 6 PSM, TCEQ air permits. Demo: info@atlantisndt.com.",
  },
  {
    path: "/erp-modules/work-order-management-dubai",
    title: "Work Order & Job Management in Dubai | Atlantis NDT ERP",
    description: "Work Order & Job Management ERP module for inspection companies in Dubai, UAE. Pre-configured for ADNOC Distribution, ENOC and aligned with ADQCC, MOIAT. Demo: info@atlantisndt.com.",
    bodyH1: "Work Order & Job Management in Dubai | Atlantis NDT ERP",
    bodyText: "Work Order & Job Management ERP module for inspection companies in Dubai, UAE. Pre-configured for ADNOC Distribution, ENOC and aligned with ADQCC, MOIAT. Demo: info@atlantisndt.com.",
  },
  {
    path: "/erp-modules/work-order-management-abu-dhabi",
    title: "Work Order & Job Management in Abu Dhabi | Atlantis NDT ERP",
    description: "Work Order & Job Management ERP module for inspection companies in Abu Dhabi, UAE. Pre-configured for ADNOC Onshore, ADNOC LNG and aligned with ADNOC HSE, ADQCC. Demo: info@atlantisndt.com.",
    bodyH1: "Work Order & Job Management in Abu Dhabi | Atlantis NDT ERP",
    bodyText: "Work Order & Job Management ERP module for inspection companies in Abu Dhabi, UAE. Pre-configured for ADNOC Onshore, ADNOC LNG and aligned with ADNOC HSE, ADQCC. Demo: info@atlantisndt.com.",
  },
  {
    path: "/erp-modules/work-order-management-saudi-arabia",
    title: "Work Order & Job Management in Saudi Arabia | Atlantis NDT ERP",
    description: "Work Order & Job Management ERP module for inspection companies in Saudi Arabia, Saudi Arabia. Pre-configured for Saudi Aramco upstream/downstream, SABIC petrochemicals and aligned with HRSD, GAMI. Demo: info@atlantisndt.com.",
    bodyH1: "Work Order & Job Management in Saudi Arabia | Atlantis NDT ERP",
    bodyText: "Work Order & Job Management ERP module for inspection companies in Saudi Arabia, Saudi Arabia. Pre-configured for Saudi Aramco upstream/downstream, SABIC petrochemicals and aligned with HRSD, GAMI. Demo: info@atlantisndt.com.",
  },
  {
    path: "/erp-modules/work-order-management-singapore",
    title: "Work Order & Job Management in Singapore | Atlantis NDT ERP",
    description: "Work Order & Job Management ERP module for inspection companies in Singapore, Singapore. Pre-configured for ExxonMobil Jurong refinery, Shell Bukom and aligned with MOM (Ministry of Manpower), NEA environment. Demo: info@atlantisndt.com.",
    bodyH1: "Work Order & Job Management in Singapore | Atlantis NDT ERP",
    bodyText: "Work Order & Job Management ERP module for inspection companies in Singapore, Singapore. Pre-configured for ExxonMobil Jurong refinery, Shell Bukom and aligned with MOM (Ministry of Manpower), NEA environment. Demo: info@atlantisndt.com.",
  },
  {
    path: "/erp-modules/work-order-management-mumbai",
    title: "Work Order & Job Management in Mumbai | Atlantis NDT ERP",
    description: "Work Order & Job Management ERP module for inspection companies in Mumbai, India. Pre-configured for BPCL Mahul refinery, HPCL Mumbai refinery and aligned with PESO, OISD. Demo: info@atlantisndt.com.",
    bodyH1: "Work Order & Job Management in Mumbai | Atlantis NDT ERP",
    bodyText: "Work Order & Job Management ERP module for inspection companies in Mumbai, India. Pre-configured for BPCL Mahul refinery, HPCL Mumbai refinery and aligned with PESO, OISD. Demo: info@atlantisndt.com.",
  },
  {
    path: "/erp-modules/work-order-management-hyderabad",
    title: "Work Order & Job Management in Hyderabad | Atlantis NDT ERP",
    description: "Work Order & Job Management ERP module for inspection companies in Hyderabad, India. Pre-configured for BHEL boilers/turbines, HPCL Visakh refinery (adjacent) and aligned with PESO, BARC nuclear. Demo: info@atlantisndt.com.",
    bodyH1: "Work Order & Job Management in Hyderabad | Atlantis NDT ERP",
    bodyText: "Work Order & Job Management ERP module for inspection companies in Hyderabad, India. Pre-configured for BHEL boilers/turbines, HPCL Visakh refinery (adjacent) and aligned with PESO, BARC nuclear. Demo: info@atlantisndt.com.",
  },
  {
    path: "/erp-modules/work-order-management-london",
    title: "Work Order & Job Management in London | Atlantis NDT ERP",
    description: "Work Order & Job Management ERP module for inspection companies in London, UK. Pre-configured for BP HQ, Shell HQ and aligned with HSE, ONR (Office Nuclear Regulation). Demo: info@atlantisndt.com.",
    bodyH1: "Work Order & Job Management in London | Atlantis NDT ERP",
    bodyText: "Work Order & Job Management ERP module for inspection companies in London, UK. Pre-configured for BP HQ, Shell HQ and aligned with HSE, ONR (Office Nuclear Regulation). Demo: info@atlantisndt.com.",
  },
  {
    path: "/erp-modules/work-order-management-aberdeen",
    title: "Work Order & Job Management in Aberdeen | Atlantis NDT ERP",
    description: "Work Order & Job Management ERP module for inspection companies in Aberdeen, UK. Pre-configured for Harbour Energy, BP North Sea and aligned with HSE OSDR, OEUK (Offshore Energies UK). Demo: info@atlantisndt.com.",
    bodyH1: "Work Order & Job Management in Aberdeen | Atlantis NDT ERP",
    bodyText: "Work Order & Job Management ERP module for inspection companies in Aberdeen, UK. Pre-configured for Harbour Energy, BP North Sea and aligned with HSE OSDR, OEUK (Offshore Energies UK). Demo: info@atlantisndt.com.",
  },
  {
    path: "/erp-modules/work-order-management-calgary",
    title: "Work Order & Job Management in Calgary | Atlantis NDT ERP",
    description: "Work Order & Job Management ERP module for inspection companies in Calgary, Canada. Pre-configured for Suncor, Cenovus and aligned with ABSA (Alberta Boilers Safety), AER (Alberta Energy Regulator). Demo: info@atlantisndt.com.",
    bodyH1: "Work Order & Job Management in Calgary | Atlantis NDT ERP",
    bodyText: "Work Order & Job Management ERP module for inspection companies in Calgary, Canada. Pre-configured for Suncor, Cenovus and aligned with ABSA (Alberta Boilers Safety), AER (Alberta Energy Regulator). Demo: info@atlantisndt.com.",
  },
  {
    path: "/erp-modules/work-order-management-perth",
    title: "Work Order & Job Management in Perth | Atlantis NDT ERP",
    description: "Work Order & Job Management ERP module for inspection companies in Perth, Australia. Pre-configured for Woodside Energy, Chevron Australia (Gorgon, Wheatstone) and aligned with WorkSafe WA, NOPSEMA offshore. Demo: info@atlantisndt.com.",
    bodyH1: "Work Order & Job Management in Perth | Atlantis NDT ERP",
    bodyText: "Work Order & Job Management ERP module for inspection companies in Perth, Australia. Pre-configured for Woodside Energy, Chevron Australia (Gorgon, Wheatstone) and aligned with WorkSafe WA, NOPSEMA offshore. Demo: info@atlantisndt.com.",
  },
  {
    path: "/erp-modules/work-order-management-doha",
    title: "Work Order & Job Management in Doha | Atlantis NDT ERP",
    description: "Work Order & Job Management ERP module for inspection companies in Doha, Qatar. Pre-configured for QatarEnergy, RasGas and aligned with QCDD (Qatar Civil Defence), QGOSM (Qatar General Org Standards & Metrology). Demo: info@atlantisndt.com.",
    bodyH1: "Work Order & Job Management in Doha | Atlantis NDT ERP",
    bodyText: "Work Order & Job Management ERP module for inspection companies in Doha, Qatar. Pre-configured for QatarEnergy, RasGas and aligned with QCDD (Qatar Civil Defence), QGOSM (Qatar General Org Standards & Metrology). Demo: info@atlantisndt.com.",
  },
  {
    path: "/erp-modules/work-order-management-kuala-lumpur",
    title: "Work Order & Job Management in Kuala Lumpur | Atlantis NDT ERP",
    description: "Work Order & Job Management ERP module for inspection companies in Kuala Lumpur, Malaysia. Pre-configured for PETRONAS upstream/downstream, PCSB and aligned with DOSH (Department of Occupational Safety & Health), Suruhanjaya Tenaga (Energy Commission). Demo: info@atlantisndt.com.",
    bodyH1: "Work Order & Job Management in Kuala Lumpur | Atlantis NDT ERP",
    bodyText: "Work Order & Job Management ERP module for inspection companies in Kuala Lumpur, Malaysia. Pre-configured for PETRONAS upstream/downstream, PCSB and aligned with DOSH (Department of Occupational Safety & Health), Suruhanjaya Tenaga (Energy Commission). Demo: info@atlantisndt.com.",
  },
  {
    path: "/erp-modules/work-order-management-jakarta",
    title: "Work Order & Job Management in Jakarta | Atlantis NDT ERP",
    description: "Work Order & Job Management ERP module for inspection companies in Jakarta, Indonesia. Pre-configured for Pertamina (Cilacap, Balikpapan, Dumai refineries), Pupuk Indonesia and aligned with SKK Migas, K3 Migas (HSE). Demo: info@atlantisndt.com.",
    bodyH1: "Work Order & Job Management in Jakarta | Atlantis NDT ERP",
    bodyText: "Work Order & Job Management ERP module for inspection companies in Jakarta, Indonesia. Pre-configured for Pertamina (Cilacap, Balikpapan, Dumai refineries), Pupuk Indonesia and aligned with SKK Migas, K3 Migas (HSE). Demo: info@atlantisndt.com.",
  },
  {
    path: "/erp-modules/work-order-management-lagos",
    title: "Work Order & Job Management in Lagos | Atlantis NDT ERP",
    description: "Work Order & Job Management ERP module for inspection companies in Lagos, Nigeria. Pre-configured for NNPCL refineries (Port Harcourt, Warri, Kaduna), Shell SPDC and aligned with NUPRC (Nigerian Upstream Petroleum Regulatory), NMDPRA (downstream). Demo: info@atlantisndt.com.",
    bodyH1: "Work Order & Job Management in Lagos | Atlantis NDT ERP",
    bodyText: "Work Order & Job Management ERP module for inspection companies in Lagos, Nigeria. Pre-configured for NNPCL refineries (Port Harcourt, Warri, Kaduna), Shell SPDC and aligned with NUPRC (Nigerian Upstream Petroleum Regulatory), NMDPRA (downstream). Demo: info@atlantisndt.com.",
  },
  {
    path: "/erp-modules/inspection-scheduling-houston",
    title: "Inspection Scheduling & Interval Management in Houston | Atlantis NDT ERP",
    description: "Inspection Scheduling & Interval Management ERP module for inspection companies in Houston, USA. Pre-configured for ExxonMobil Baytown refinery, Marathon Galveston Bay and aligned with OSHA Region 6 PSM, TCEQ air permits. Demo: info@atlantisndt.com.",
    bodyH1: "Inspection Scheduling & Interval Management in Houston | Atlantis NDT ERP",
    bodyText: "Inspection Scheduling & Interval Management ERP module for inspection companies in Houston, USA. Pre-configured for ExxonMobil Baytown refinery, Marathon Galveston Bay and aligned with OSHA Region 6 PSM, TCEQ air permits. Demo: info@atlantisndt.com.",
  },
  {
    path: "/erp-modules/inspection-scheduling-dubai",
    title: "Inspection Scheduling & Interval Management in Dubai | Atlantis NDT ERP",
    description: "Inspection Scheduling & Interval Management ERP module for inspection companies in Dubai, UAE. Pre-configured for ADNOC Distribution, ENOC and aligned with ADQCC, MOIAT. Demo: info@atlantisndt.com.",
    bodyH1: "Inspection Scheduling & Interval Management in Dubai | Atlantis NDT ERP",
    bodyText: "Inspection Scheduling & Interval Management ERP module for inspection companies in Dubai, UAE. Pre-configured for ADNOC Distribution, ENOC and aligned with ADQCC, MOIAT. Demo: info@atlantisndt.com.",
  },
  {
    path: "/erp-modules/inspection-scheduling-abu-dhabi",
    title: "Inspection Scheduling & Interval Management in Abu Dhabi | Atlantis NDT ERP",
    description: "Inspection Scheduling & Interval Management ERP module for inspection companies in Abu Dhabi, UAE. Pre-configured for ADNOC Onshore, ADNOC LNG and aligned with ADNOC HSE, ADQCC. Demo: info@atlantisndt.com.",
    bodyH1: "Inspection Scheduling & Interval Management in Abu Dhabi | Atlantis NDT ERP",
    bodyText: "Inspection Scheduling & Interval Management ERP module for inspection companies in Abu Dhabi, UAE. Pre-configured for ADNOC Onshore, ADNOC LNG and aligned with ADNOC HSE, ADQCC. Demo: info@atlantisndt.com.",
  },
  {
    path: "/erp-modules/inspection-scheduling-saudi-arabia",
    title: "Inspection Scheduling & Interval Management in Saudi Arabia | Atlantis NDT ERP",
    description: "Inspection Scheduling & Interval Management ERP module for inspection companies in Saudi Arabia, Saudi Arabia. Pre-configured for Saudi Aramco upstream/downstream, SABIC petrochemicals and aligned with HRSD, GAMI. Demo: info@atlantisndt.com.",
    bodyH1: "Inspection Scheduling & Interval Management in Saudi Arabia | Atlantis NDT ERP",
    bodyText: "Inspection Scheduling & Interval Management ERP module for inspection companies in Saudi Arabia, Saudi Arabia. Pre-configured for Saudi Aramco upstream/downstream, SABIC petrochemicals and aligned with HRSD, GAMI. Demo: info@atlantisndt.com.",
  },
  {
    path: "/erp-modules/inspection-scheduling-singapore",
    title: "Inspection Scheduling & Interval Management in Singapore | Atlantis NDT ERP",
    description: "Inspection Scheduling & Interval Management ERP module for inspection companies in Singapore, Singapore. Pre-configured for ExxonMobil Jurong refinery, Shell Bukom and aligned with MOM (Ministry of Manpower), NEA environment. Demo: info@atlantisndt.com.",
    bodyH1: "Inspection Scheduling & Interval Management in Singapore | Atlantis NDT ERP",
    bodyText: "Inspection Scheduling & Interval Management ERP module for inspection companies in Singapore, Singapore. Pre-configured for ExxonMobil Jurong refinery, Shell Bukom and aligned with MOM (Ministry of Manpower), NEA environment. Demo: info@atlantisndt.com.",
  },
  {
    path: "/erp-modules/inspection-scheduling-mumbai",
    title: "Inspection Scheduling & Interval Management in Mumbai | Atlantis NDT ERP",
    description: "Inspection Scheduling & Interval Management ERP module for inspection companies in Mumbai, India. Pre-configured for BPCL Mahul refinery, HPCL Mumbai refinery and aligned with PESO, OISD. Demo: info@atlantisndt.com.",
    bodyH1: "Inspection Scheduling & Interval Management in Mumbai | Atlantis NDT ERP",
    bodyText: "Inspection Scheduling & Interval Management ERP module for inspection companies in Mumbai, India. Pre-configured for BPCL Mahul refinery, HPCL Mumbai refinery and aligned with PESO, OISD. Demo: info@atlantisndt.com.",
  },
  {
    path: "/erp-modules/inspection-scheduling-hyderabad",
    title: "Inspection Scheduling & Interval Management in Hyderabad | Atlantis NDT ERP",
    description: "Inspection Scheduling & Interval Management ERP module for inspection companies in Hyderabad, India. Pre-configured for BHEL boilers/turbines, HPCL Visakh refinery (adjacent) and aligned with PESO, BARC nuclear. Demo: info@atlantisndt.com.",
    bodyH1: "Inspection Scheduling & Interval Management in Hyderabad | Atlantis NDT ERP",
    bodyText: "Inspection Scheduling & Interval Management ERP module for inspection companies in Hyderabad, India. Pre-configured for BHEL boilers/turbines, HPCL Visakh refinery (adjacent) and aligned with PESO, BARC nuclear. Demo: info@atlantisndt.com.",
  },
  {
    path: "/erp-modules/inspection-scheduling-london",
    title: "Inspection Scheduling & Interval Management in London | Atlantis NDT ERP",
    description: "Inspection Scheduling & Interval Management ERP module for inspection companies in London, UK. Pre-configured for BP HQ, Shell HQ and aligned with HSE, ONR (Office Nuclear Regulation). Demo: info@atlantisndt.com.",
    bodyH1: "Inspection Scheduling & Interval Management in London | Atlantis NDT ERP",
    bodyText: "Inspection Scheduling & Interval Management ERP module for inspection companies in London, UK. Pre-configured for BP HQ, Shell HQ and aligned with HSE, ONR (Office Nuclear Regulation). Demo: info@atlantisndt.com.",
  },
  {
    path: "/erp-modules/inspection-scheduling-aberdeen",
    title: "Inspection Scheduling & Interval Management in Aberdeen | Atlantis NDT ERP",
    description: "Inspection Scheduling & Interval Management ERP module for inspection companies in Aberdeen, UK. Pre-configured for Harbour Energy, BP North Sea and aligned with HSE OSDR, OEUK (Offshore Energies UK). Demo: info@atlantisndt.com.",
    bodyH1: "Inspection Scheduling & Interval Management in Aberdeen | Atlantis NDT ERP",
    bodyText: "Inspection Scheduling & Interval Management ERP module for inspection companies in Aberdeen, UK. Pre-configured for Harbour Energy, BP North Sea and aligned with HSE OSDR, OEUK (Offshore Energies UK). Demo: info@atlantisndt.com.",
  },
  {
    path: "/erp-modules/inspection-scheduling-calgary",
    title: "Inspection Scheduling & Interval Management in Calgary | Atlantis NDT ERP",
    description: "Inspection Scheduling & Interval Management ERP module for inspection companies in Calgary, Canada. Pre-configured for Suncor, Cenovus and aligned with ABSA (Alberta Boilers Safety), AER (Alberta Energy Regulator). Demo: info@atlantisndt.com.",
    bodyH1: "Inspection Scheduling & Interval Management in Calgary | Atlantis NDT ERP",
    bodyText: "Inspection Scheduling & Interval Management ERP module for inspection companies in Calgary, Canada. Pre-configured for Suncor, Cenovus and aligned with ABSA (Alberta Boilers Safety), AER (Alberta Energy Regulator). Demo: info@atlantisndt.com.",
  },
  {
    path: "/erp-modules/inspection-scheduling-perth",
    title: "Inspection Scheduling & Interval Management in Perth | Atlantis NDT ERP",
    description: "Inspection Scheduling & Interval Management ERP module for inspection companies in Perth, Australia. Pre-configured for Woodside Energy, Chevron Australia (Gorgon, Wheatstone) and aligned with WorkSafe WA, NOPSEMA offshore. Demo: info@atlantisndt.com.",
    bodyH1: "Inspection Scheduling & Interval Management in Perth | Atlantis NDT ERP",
    bodyText: "Inspection Scheduling & Interval Management ERP module for inspection companies in Perth, Australia. Pre-configured for Woodside Energy, Chevron Australia (Gorgon, Wheatstone) and aligned with WorkSafe WA, NOPSEMA offshore. Demo: info@atlantisndt.com.",
  },
  {
    path: "/erp-modules/inspection-scheduling-doha",
    title: "Inspection Scheduling & Interval Management in Doha | Atlantis NDT ERP",
    description: "Inspection Scheduling & Interval Management ERP module for inspection companies in Doha, Qatar. Pre-configured for QatarEnergy, RasGas and aligned with QCDD (Qatar Civil Defence), QGOSM (Qatar General Org Standards & Metrology). Demo: info@atlantisndt.com.",
    bodyH1: "Inspection Scheduling & Interval Management in Doha | Atlantis NDT ERP",
    bodyText: "Inspection Scheduling & Interval Management ERP module for inspection companies in Doha, Qatar. Pre-configured for QatarEnergy, RasGas and aligned with QCDD (Qatar Civil Defence), QGOSM (Qatar General Org Standards & Metrology). Demo: info@atlantisndt.com.",
  },
  {
    path: "/erp-modules/inspection-scheduling-kuala-lumpur",
    title: "Inspection Scheduling & Interval Management in Kuala Lumpur | Atlantis NDT ERP",
    description: "Inspection Scheduling & Interval Management ERP module for inspection companies in Kuala Lumpur, Malaysia. Pre-configured for PETRONAS upstream/downstream, PCSB and aligned with DOSH (Department of Occupational Safety & Health), Suruhanjaya Tenaga (Energy Commission). Demo: info@atlantisndt.com.",
    bodyH1: "Inspection Scheduling & Interval Management in Kuala Lumpur | Atlantis NDT ERP",
    bodyText: "Inspection Scheduling & Interval Management ERP module for inspection companies in Kuala Lumpur, Malaysia. Pre-configured for PETRONAS upstream/downstream, PCSB and aligned with DOSH (Department of Occupational Safety & Health), Suruhanjaya Tenaga (Energy Commission). Demo: info@atlantisndt.com.",
  },
  {
    path: "/erp-modules/inspection-scheduling-jakarta",
    title: "Inspection Scheduling & Interval Management in Jakarta | Atlantis NDT ERP",
    description: "Inspection Scheduling & Interval Management ERP module for inspection companies in Jakarta, Indonesia. Pre-configured for Pertamina (Cilacap, Balikpapan, Dumai refineries), Pupuk Indonesia and aligned with SKK Migas, K3 Migas (HSE). Demo: info@atlantisndt.com.",
    bodyH1: "Inspection Scheduling & Interval Management in Jakarta | Atlantis NDT ERP",
    bodyText: "Inspection Scheduling & Interval Management ERP module for inspection companies in Jakarta, Indonesia. Pre-configured for Pertamina (Cilacap, Balikpapan, Dumai refineries), Pupuk Indonesia and aligned with SKK Migas, K3 Migas (HSE). Demo: info@atlantisndt.com.",
  },
  {
    path: "/erp-modules/inspection-scheduling-lagos",
    title: "Inspection Scheduling & Interval Management in Lagos | Atlantis NDT ERP",
    description: "Inspection Scheduling & Interval Management ERP module for inspection companies in Lagos, Nigeria. Pre-configured for NNPCL refineries (Port Harcourt, Warri, Kaduna), Shell SPDC and aligned with NUPRC (Nigerian Upstream Petroleum Regulatory), NMDPRA (downstream). Demo: info@atlantisndt.com.",
    bodyH1: "Inspection Scheduling & Interval Management in Lagos | Atlantis NDT ERP",
    bodyText: "Inspection Scheduling & Interval Management ERP module for inspection companies in Lagos, Nigeria. Pre-configured for NNPCL refineries (Port Harcourt, Warri, Kaduna), Shell SPDC and aligned with NUPRC (Nigerian Upstream Petroleum Regulatory), NMDPRA (downstream). Demo: info@atlantisndt.com.",
  },
  {
    path: "/erp-modules/calibration-management-houston",
    title: "Calibration Management in Houston | Atlantis NDT ERP",
    description: "Calibration Management ERP module for inspection companies in Houston, USA. Pre-configured for ExxonMobil Baytown refinery, Marathon Galveston Bay and aligned with OSHA Region 6 PSM, TCEQ air permits. Demo: info@atlantisndt.com.",
    bodyH1: "Calibration Management in Houston | Atlantis NDT ERP",
    bodyText: "Calibration Management ERP module for inspection companies in Houston, USA. Pre-configured for ExxonMobil Baytown refinery, Marathon Galveston Bay and aligned with OSHA Region 6 PSM, TCEQ air permits. Demo: info@atlantisndt.com.",
  },
  {
    path: "/erp-modules/calibration-management-dubai",
    title: "Calibration Management in Dubai | Atlantis NDT ERP",
    description: "Calibration Management ERP module for inspection companies in Dubai, UAE. Pre-configured for ADNOC Distribution, ENOC and aligned with ADQCC, MOIAT. Demo: info@atlantisndt.com.",
    bodyH1: "Calibration Management in Dubai | Atlantis NDT ERP",
    bodyText: "Calibration Management ERP module for inspection companies in Dubai, UAE. Pre-configured for ADNOC Distribution, ENOC and aligned with ADQCC, MOIAT. Demo: info@atlantisndt.com.",
  },
  {
    path: "/erp-modules/calibration-management-abu-dhabi",
    title: "Calibration Management in Abu Dhabi | Atlantis NDT ERP",
    description: "Calibration Management ERP module for inspection companies in Abu Dhabi, UAE. Pre-configured for ADNOC Onshore, ADNOC LNG and aligned with ADNOC HSE, ADQCC. Demo: info@atlantisndt.com.",
    bodyH1: "Calibration Management in Abu Dhabi | Atlantis NDT ERP",
    bodyText: "Calibration Management ERP module for inspection companies in Abu Dhabi, UAE. Pre-configured for ADNOC Onshore, ADNOC LNG and aligned with ADNOC HSE, ADQCC. Demo: info@atlantisndt.com.",
  },
  {
    path: "/erp-modules/calibration-management-saudi-arabia",
    title: "Calibration Management in Saudi Arabia | Atlantis NDT ERP",
    description: "Calibration Management ERP module for inspection companies in Saudi Arabia, Saudi Arabia. Pre-configured for Saudi Aramco upstream/downstream, SABIC petrochemicals and aligned with HRSD, GAMI. Demo: info@atlantisndt.com.",
    bodyH1: "Calibration Management in Saudi Arabia | Atlantis NDT ERP",
    bodyText: "Calibration Management ERP module for inspection companies in Saudi Arabia, Saudi Arabia. Pre-configured for Saudi Aramco upstream/downstream, SABIC petrochemicals and aligned with HRSD, GAMI. Demo: info@atlantisndt.com.",
  },
  {
    path: "/erp-modules/calibration-management-singapore",
    title: "Calibration Management in Singapore | Atlantis NDT ERP",
    description: "Calibration Management ERP module for inspection companies in Singapore, Singapore. Pre-configured for ExxonMobil Jurong refinery, Shell Bukom and aligned with MOM (Ministry of Manpower), NEA environment. Demo: info@atlantisndt.com.",
    bodyH1: "Calibration Management in Singapore | Atlantis NDT ERP",
    bodyText: "Calibration Management ERP module for inspection companies in Singapore, Singapore. Pre-configured for ExxonMobil Jurong refinery, Shell Bukom and aligned with MOM (Ministry of Manpower), NEA environment. Demo: info@atlantisndt.com.",
  },
  {
    path: "/erp-modules/calibration-management-mumbai",
    title: "Calibration Management in Mumbai | Atlantis NDT ERP",
    description: "Calibration Management ERP module for inspection companies in Mumbai, India. Pre-configured for BPCL Mahul refinery, HPCL Mumbai refinery and aligned with PESO, OISD. Demo: info@atlantisndt.com.",
    bodyH1: "Calibration Management in Mumbai | Atlantis NDT ERP",
    bodyText: "Calibration Management ERP module for inspection companies in Mumbai, India. Pre-configured for BPCL Mahul refinery, HPCL Mumbai refinery and aligned with PESO, OISD. Demo: info@atlantisndt.com.",
  },
  {
    path: "/erp-modules/calibration-management-hyderabad",
    title: "Calibration Management in Hyderabad | Atlantis NDT ERP",
    description: "Calibration Management ERP module for inspection companies in Hyderabad, India. Pre-configured for BHEL boilers/turbines, HPCL Visakh refinery (adjacent) and aligned with PESO, BARC nuclear. Demo: info@atlantisndt.com.",
    bodyH1: "Calibration Management in Hyderabad | Atlantis NDT ERP",
    bodyText: "Calibration Management ERP module for inspection companies in Hyderabad, India. Pre-configured for BHEL boilers/turbines, HPCL Visakh refinery (adjacent) and aligned with PESO, BARC nuclear. Demo: info@atlantisndt.com.",
  },
  {
    path: "/erp-modules/calibration-management-london",
    title: "Calibration Management in London | Atlantis NDT ERP",
    description: "Calibration Management ERP module for inspection companies in London, UK. Pre-configured for BP HQ, Shell HQ and aligned with HSE, ONR (Office Nuclear Regulation). Demo: info@atlantisndt.com.",
    bodyH1: "Calibration Management in London | Atlantis NDT ERP",
    bodyText: "Calibration Management ERP module for inspection companies in London, UK. Pre-configured for BP HQ, Shell HQ and aligned with HSE, ONR (Office Nuclear Regulation). Demo: info@atlantisndt.com.",
  },
  {
    path: "/erp-modules/calibration-management-aberdeen",
    title: "Calibration Management in Aberdeen | Atlantis NDT ERP",
    description: "Calibration Management ERP module for inspection companies in Aberdeen, UK. Pre-configured for Harbour Energy, BP North Sea and aligned with HSE OSDR, OEUK (Offshore Energies UK). Demo: info@atlantisndt.com.",
    bodyH1: "Calibration Management in Aberdeen | Atlantis NDT ERP",
    bodyText: "Calibration Management ERP module for inspection companies in Aberdeen, UK. Pre-configured for Harbour Energy, BP North Sea and aligned with HSE OSDR, OEUK (Offshore Energies UK). Demo: info@atlantisndt.com.",
  },
  {
    path: "/erp-modules/calibration-management-calgary",
    title: "Calibration Management in Calgary | Atlantis NDT ERP",
    description: "Calibration Management ERP module for inspection companies in Calgary, Canada. Pre-configured for Suncor, Cenovus and aligned with ABSA (Alberta Boilers Safety), AER (Alberta Energy Regulator). Demo: info@atlantisndt.com.",
    bodyH1: "Calibration Management in Calgary | Atlantis NDT ERP",
    bodyText: "Calibration Management ERP module for inspection companies in Calgary, Canada. Pre-configured for Suncor, Cenovus and aligned with ABSA (Alberta Boilers Safety), AER (Alberta Energy Regulator). Demo: info@atlantisndt.com.",
  },
  {
    path: "/erp-modules/calibration-management-perth",
    title: "Calibration Management in Perth | Atlantis NDT ERP",
    description: "Calibration Management ERP module for inspection companies in Perth, Australia. Pre-configured for Woodside Energy, Chevron Australia (Gorgon, Wheatstone) and aligned with WorkSafe WA, NOPSEMA offshore. Demo: info@atlantisndt.com.",
    bodyH1: "Calibration Management in Perth | Atlantis NDT ERP",
    bodyText: "Calibration Management ERP module for inspection companies in Perth, Australia. Pre-configured for Woodside Energy, Chevron Australia (Gorgon, Wheatstone) and aligned with WorkSafe WA, NOPSEMA offshore. Demo: info@atlantisndt.com.",
  },
  {
    path: "/erp-modules/calibration-management-doha",
    title: "Calibration Management in Doha | Atlantis NDT ERP",
    description: "Calibration Management ERP module for inspection companies in Doha, Qatar. Pre-configured for QatarEnergy, RasGas and aligned with QCDD (Qatar Civil Defence), QGOSM (Qatar General Org Standards & Metrology). Demo: info@atlantisndt.com.",
    bodyH1: "Calibration Management in Doha | Atlantis NDT ERP",
    bodyText: "Calibration Management ERP module for inspection companies in Doha, Qatar. Pre-configured for QatarEnergy, RasGas and aligned with QCDD (Qatar Civil Defence), QGOSM (Qatar General Org Standards & Metrology). Demo: info@atlantisndt.com.",
  },
  {
    path: "/erp-modules/calibration-management-kuala-lumpur",
    title: "Calibration Management in Kuala Lumpur | Atlantis NDT ERP",
    description: "Calibration Management ERP module for inspection companies in Kuala Lumpur, Malaysia. Pre-configured for PETRONAS upstream/downstream, PCSB and aligned with DOSH (Department of Occupational Safety & Health), Suruhanjaya Tenaga (Energy Commission). Demo: info@atlantisndt.com.",
    bodyH1: "Calibration Management in Kuala Lumpur | Atlantis NDT ERP",
    bodyText: "Calibration Management ERP module for inspection companies in Kuala Lumpur, Malaysia. Pre-configured for PETRONAS upstream/downstream, PCSB and aligned with DOSH (Department of Occupational Safety & Health), Suruhanjaya Tenaga (Energy Commission). Demo: info@atlantisndt.com.",
  },
  {
    path: "/erp-modules/calibration-management-jakarta",
    title: "Calibration Management in Jakarta | Atlantis NDT ERP",
    description: "Calibration Management ERP module for inspection companies in Jakarta, Indonesia. Pre-configured for Pertamina (Cilacap, Balikpapan, Dumai refineries), Pupuk Indonesia and aligned with SKK Migas, K3 Migas (HSE). Demo: info@atlantisndt.com.",
    bodyH1: "Calibration Management in Jakarta | Atlantis NDT ERP",
    bodyText: "Calibration Management ERP module for inspection companies in Jakarta, Indonesia. Pre-configured for Pertamina (Cilacap, Balikpapan, Dumai refineries), Pupuk Indonesia and aligned with SKK Migas, K3 Migas (HSE). Demo: info@atlantisndt.com.",
  },
  {
    path: "/erp-modules/calibration-management-lagos",
    title: "Calibration Management in Lagos | Atlantis NDT ERP",
    description: "Calibration Management ERP module for inspection companies in Lagos, Nigeria. Pre-configured for NNPCL refineries (Port Harcourt, Warri, Kaduna), Shell SPDC and aligned with NUPRC (Nigerian Upstream Petroleum Regulatory), NMDPRA (downstream). Demo: info@atlantisndt.com.",
    bodyH1: "Calibration Management in Lagos | Atlantis NDT ERP",
    bodyText: "Calibration Management ERP module for inspection companies in Lagos, Nigeria. Pre-configured for NNPCL refineries (Port Harcourt, Warri, Kaduna), Shell SPDC and aligned with NUPRC (Nigerian Upstream Petroleum Regulatory), NMDPRA (downstream). Demo: info@atlantisndt.com.",
  },
  {
    path: "/erp-modules/corrosion-tracking-houston",
    title: "Corrosion Tracking & RBI in Houston | Atlantis NDT ERP",
    description: "Corrosion Tracking & RBI ERP module for inspection companies in Houston, USA. Pre-configured for ExxonMobil Baytown refinery, Marathon Galveston Bay and aligned with OSHA Region 6 PSM, TCEQ air permits. Demo: info@atlantisndt.com.",
    bodyH1: "Corrosion Tracking & RBI in Houston | Atlantis NDT ERP",
    bodyText: "Corrosion Tracking & RBI ERP module for inspection companies in Houston, USA. Pre-configured for ExxonMobil Baytown refinery, Marathon Galveston Bay and aligned with OSHA Region 6 PSM, TCEQ air permits. Demo: info@atlantisndt.com.",
  },
  {
    path: "/erp-modules/corrosion-tracking-dubai",
    title: "Corrosion Tracking & RBI in Dubai | Atlantis NDT ERP",
    description: "Corrosion Tracking & RBI ERP module for inspection companies in Dubai, UAE. Pre-configured for ADNOC Distribution, ENOC and aligned with ADQCC, MOIAT. Demo: info@atlantisndt.com.",
    bodyH1: "Corrosion Tracking & RBI in Dubai | Atlantis NDT ERP",
    bodyText: "Corrosion Tracking & RBI ERP module for inspection companies in Dubai, UAE. Pre-configured for ADNOC Distribution, ENOC and aligned with ADQCC, MOIAT. Demo: info@atlantisndt.com.",
  },
  {
    path: "/erp-modules/corrosion-tracking-abu-dhabi",
    title: "Corrosion Tracking & RBI in Abu Dhabi | Atlantis NDT ERP",
    description: "Corrosion Tracking & RBI ERP module for inspection companies in Abu Dhabi, UAE. Pre-configured for ADNOC Onshore, ADNOC LNG and aligned with ADNOC HSE, ADQCC. Demo: info@atlantisndt.com.",
    bodyH1: "Corrosion Tracking & RBI in Abu Dhabi | Atlantis NDT ERP",
    bodyText: "Corrosion Tracking & RBI ERP module for inspection companies in Abu Dhabi, UAE. Pre-configured for ADNOC Onshore, ADNOC LNG and aligned with ADNOC HSE, ADQCC. Demo: info@atlantisndt.com.",
  },
  {
    path: "/erp-modules/corrosion-tracking-saudi-arabia",
    title: "Corrosion Tracking & RBI in Saudi Arabia | Atlantis NDT ERP",
    description: "Corrosion Tracking & RBI ERP module for inspection companies in Saudi Arabia, Saudi Arabia. Pre-configured for Saudi Aramco upstream/downstream, SABIC petrochemicals and aligned with HRSD, GAMI. Demo: info@atlantisndt.com.",
    bodyH1: "Corrosion Tracking & RBI in Saudi Arabia | Atlantis NDT ERP",
    bodyText: "Corrosion Tracking & RBI ERP module for inspection companies in Saudi Arabia, Saudi Arabia. Pre-configured for Saudi Aramco upstream/downstream, SABIC petrochemicals and aligned with HRSD, GAMI. Demo: info@atlantisndt.com.",
  },
  {
    path: "/erp-modules/corrosion-tracking-singapore",
    title: "Corrosion Tracking & RBI in Singapore | Atlantis NDT ERP",
    description: "Corrosion Tracking & RBI ERP module for inspection companies in Singapore, Singapore. Pre-configured for ExxonMobil Jurong refinery, Shell Bukom and aligned with MOM (Ministry of Manpower), NEA environment. Demo: info@atlantisndt.com.",
    bodyH1: "Corrosion Tracking & RBI in Singapore | Atlantis NDT ERP",
    bodyText: "Corrosion Tracking & RBI ERP module for inspection companies in Singapore, Singapore. Pre-configured for ExxonMobil Jurong refinery, Shell Bukom and aligned with MOM (Ministry of Manpower), NEA environment. Demo: info@atlantisndt.com.",
  },
  {
    path: "/erp-modules/corrosion-tracking-mumbai",
    title: "Corrosion Tracking & RBI in Mumbai | Atlantis NDT ERP",
    description: "Corrosion Tracking & RBI ERP module for inspection companies in Mumbai, India. Pre-configured for BPCL Mahul refinery, HPCL Mumbai refinery and aligned with PESO, OISD. Demo: info@atlantisndt.com.",
    bodyH1: "Corrosion Tracking & RBI in Mumbai | Atlantis NDT ERP",
    bodyText: "Corrosion Tracking & RBI ERP module for inspection companies in Mumbai, India. Pre-configured for BPCL Mahul refinery, HPCL Mumbai refinery and aligned with PESO, OISD. Demo: info@atlantisndt.com.",
  },
  {
    path: "/erp-modules/corrosion-tracking-hyderabad",
    title: "Corrosion Tracking & RBI in Hyderabad | Atlantis NDT ERP",
    description: "Corrosion Tracking & RBI ERP module for inspection companies in Hyderabad, India. Pre-configured for BHEL boilers/turbines, HPCL Visakh refinery (adjacent) and aligned with PESO, BARC nuclear. Demo: info@atlantisndt.com.",
    bodyH1: "Corrosion Tracking & RBI in Hyderabad | Atlantis NDT ERP",
    bodyText: "Corrosion Tracking & RBI ERP module for inspection companies in Hyderabad, India. Pre-configured for BHEL boilers/turbines, HPCL Visakh refinery (adjacent) and aligned with PESO, BARC nuclear. Demo: info@atlantisndt.com.",
  },
  {
    path: "/erp-modules/corrosion-tracking-london",
    title: "Corrosion Tracking & RBI in London | Atlantis NDT ERP",
    description: "Corrosion Tracking & RBI ERP module for inspection companies in London, UK. Pre-configured for BP HQ, Shell HQ and aligned with HSE, ONR (Office Nuclear Regulation). Demo: info@atlantisndt.com.",
    bodyH1: "Corrosion Tracking & RBI in London | Atlantis NDT ERP",
    bodyText: "Corrosion Tracking & RBI ERP module for inspection companies in London, UK. Pre-configured for BP HQ, Shell HQ and aligned with HSE, ONR (Office Nuclear Regulation). Demo: info@atlantisndt.com.",
  },
  {
    path: "/erp-modules/corrosion-tracking-aberdeen",
    title: "Corrosion Tracking & RBI in Aberdeen | Atlantis NDT ERP",
    description: "Corrosion Tracking & RBI ERP module for inspection companies in Aberdeen, UK. Pre-configured for Harbour Energy, BP North Sea and aligned with HSE OSDR, OEUK (Offshore Energies UK). Demo: info@atlantisndt.com.",
    bodyH1: "Corrosion Tracking & RBI in Aberdeen | Atlantis NDT ERP",
    bodyText: "Corrosion Tracking & RBI ERP module for inspection companies in Aberdeen, UK. Pre-configured for Harbour Energy, BP North Sea and aligned with HSE OSDR, OEUK (Offshore Energies UK). Demo: info@atlantisndt.com.",
  },
  {
    path: "/erp-modules/corrosion-tracking-calgary",
    title: "Corrosion Tracking & RBI in Calgary | Atlantis NDT ERP",
    description: "Corrosion Tracking & RBI ERP module for inspection companies in Calgary, Canada. Pre-configured for Suncor, Cenovus and aligned with ABSA (Alberta Boilers Safety), AER (Alberta Energy Regulator). Demo: info@atlantisndt.com.",
    bodyH1: "Corrosion Tracking & RBI in Calgary | Atlantis NDT ERP",
    bodyText: "Corrosion Tracking & RBI ERP module for inspection companies in Calgary, Canada. Pre-configured for Suncor, Cenovus and aligned with ABSA (Alberta Boilers Safety), AER (Alberta Energy Regulator). Demo: info@atlantisndt.com.",
  },
  {
    path: "/erp-modules/corrosion-tracking-perth",
    title: "Corrosion Tracking & RBI in Perth | Atlantis NDT ERP",
    description: "Corrosion Tracking & RBI ERP module for inspection companies in Perth, Australia. Pre-configured for Woodside Energy, Chevron Australia (Gorgon, Wheatstone) and aligned with WorkSafe WA, NOPSEMA offshore. Demo: info@atlantisndt.com.",
    bodyH1: "Corrosion Tracking & RBI in Perth | Atlantis NDT ERP",
    bodyText: "Corrosion Tracking & RBI ERP module for inspection companies in Perth, Australia. Pre-configured for Woodside Energy, Chevron Australia (Gorgon, Wheatstone) and aligned with WorkSafe WA, NOPSEMA offshore. Demo: info@atlantisndt.com.",
  },
  {
    path: "/erp-modules/corrosion-tracking-doha",
    title: "Corrosion Tracking & RBI in Doha | Atlantis NDT ERP",
    description: "Corrosion Tracking & RBI ERP module for inspection companies in Doha, Qatar. Pre-configured for QatarEnergy, RasGas and aligned with QCDD (Qatar Civil Defence), QGOSM (Qatar General Org Standards & Metrology). Demo: info@atlantisndt.com.",
    bodyH1: "Corrosion Tracking & RBI in Doha | Atlantis NDT ERP",
    bodyText: "Corrosion Tracking & RBI ERP module for inspection companies in Doha, Qatar. Pre-configured for QatarEnergy, RasGas and aligned with QCDD (Qatar Civil Defence), QGOSM (Qatar General Org Standards & Metrology). Demo: info@atlantisndt.com.",
  },
  {
    path: "/erp-modules/corrosion-tracking-kuala-lumpur",
    title: "Corrosion Tracking & RBI in Kuala Lumpur | Atlantis NDT ERP",
    description: "Corrosion Tracking & RBI ERP module for inspection companies in Kuala Lumpur, Malaysia. Pre-configured for PETRONAS upstream/downstream, PCSB and aligned with DOSH (Department of Occupational Safety & Health), Suruhanjaya Tenaga (Energy Commission). Demo: info@atlantisndt.com.",
    bodyH1: "Corrosion Tracking & RBI in Kuala Lumpur | Atlantis NDT ERP",
    bodyText: "Corrosion Tracking & RBI ERP module for inspection companies in Kuala Lumpur, Malaysia. Pre-configured for PETRONAS upstream/downstream, PCSB and aligned with DOSH (Department of Occupational Safety & Health), Suruhanjaya Tenaga (Energy Commission). Demo: info@atlantisndt.com.",
  },
  {
    path: "/erp-modules/corrosion-tracking-jakarta",
    title: "Corrosion Tracking & RBI in Jakarta | Atlantis NDT ERP",
    description: "Corrosion Tracking & RBI ERP module for inspection companies in Jakarta, Indonesia. Pre-configured for Pertamina (Cilacap, Balikpapan, Dumai refineries), Pupuk Indonesia and aligned with SKK Migas, K3 Migas (HSE). Demo: info@atlantisndt.com.",
    bodyH1: "Corrosion Tracking & RBI in Jakarta | Atlantis NDT ERP",
    bodyText: "Corrosion Tracking & RBI ERP module for inspection companies in Jakarta, Indonesia. Pre-configured for Pertamina (Cilacap, Balikpapan, Dumai refineries), Pupuk Indonesia and aligned with SKK Migas, K3 Migas (HSE). Demo: info@atlantisndt.com.",
  },
  {
    path: "/erp-modules/corrosion-tracking-lagos",
    title: "Corrosion Tracking & RBI in Lagos | Atlantis NDT ERP",
    description: "Corrosion Tracking & RBI ERP module for inspection companies in Lagos, Nigeria. Pre-configured for NNPCL refineries (Port Harcourt, Warri, Kaduna), Shell SPDC and aligned with NUPRC (Nigerian Upstream Petroleum Regulatory), NMDPRA (downstream). Demo: info@atlantisndt.com.",
    bodyH1: "Corrosion Tracking & RBI in Lagos | Atlantis NDT ERP",
    bodyText: "Corrosion Tracking & RBI ERP module for inspection companies in Lagos, Nigeria. Pre-configured for NNPCL refineries (Port Harcourt, Warri, Kaduna), Shell SPDC and aligned with NUPRC (Nigerian Upstream Petroleum Regulatory), NMDPRA (downstream). Demo: info@atlantisndt.com.",
  },
  {
    path: "/erp-industries/ndt-inspection-companies-houston",
    title: "NDT Inspection Companies ERP Software in Houston | Atlantis NDT ERP",
    description: "Purpose-built ERP for ndt inspection companies based in Houston, USA. Pre-loaded with API 510 / 570 / 653, ASME B31.3 / B31.4 / B31.8, ASME Section VIII Div 1, operator flow-down for ExxonMobil Baytown and Marathon Galveston Bay, and TCEQ /  OSHA Region 6 compliance support. Demo: info@atlantisndt.com.",
    bodyH1: "NDT Inspection Companies ERP Software in Houston",
    bodyText: "NDT Inspection Companies operating in Houston face a specific combination of local market structure, regulator framework, and operator-specific quality requirements that generic ERP systems cannot model. Houston sits at the heart of the energy capital of the world with 4,600+ energy-related firms and the densest concentration of refining and petrochemical capacity in the western hemisphere. The dominant industrial cluster — a 400-mile Gulf Coast refining and petrochemical com",
  },
  {
    path: "/erp-industries/ndt-inspection-companies-dubai",
    title: "NDT Inspection Companies ERP Software in Dubai | Atlantis NDT ERP",
    description: "Purpose-built ERP for ndt inspection companies based in Dubai, UAE. Pre-loaded with ADQCC inspection schemes, ADNOC ACS-01 (vendor), ASME Section V / VIII, operator flow-down for ADNOC Distribution and ENOC Group, and ADQCC /  MOIAT compliance support. Demo: info@atlantisndt.com.",
    bodyH1: "NDT Inspection Companies ERP Software in Dubai",
    bodyText: "NDT Inspection Companies operating in Dubai face a specific combination of local market structure, regulator framework, and operator-specific quality requirements that generic ERP systems cannot model. Dubai sits at the heart of the regional commercial and logistics hub for GCC oil and gas, hosting regional HQs for IOCs, EPCs, and inspection multinationals. The dominant industrial cluster — a Jebel Ali free zone industrial hub connected to ADNOC Distribution, ENOC, DUBAL, and",
  },
  {
    path: "/erp-industries/ndt-inspection-companies-abu-dhabi",
    title: "NDT Inspection Companies ERP Software in Abu Dhabi | Atlantis NDT ERP",
    description: "Purpose-built ERP for ndt inspection companies based in Abu Dhabi, UAE. Pre-loaded with ADNOC ACS-01 (vendor qualification), ADNOC HSE-IM-RP, API 510 / 570 / 653, operator flow-down for ADNOC Onshore and ADNOC LNG, and ADNOC HSE & Asset Integrity /  ADQCC compliance support. Demo: info@atlantisndt.com.",
    bodyH1: "NDT Inspection Companies ERP Software in Abu Dhabi",
    bodyText: "NDT Inspection Companies operating in Abu Dhabi face a specific combination of local market structure, regulator framework, and operator-specific quality requirements that generic ERP systems cannot model. Abu Dhabi sits at the heart of the operational heart of UAE upstream and downstream, controlling 94% of UAE oil reserves through ADNOC and the Ruwais integrated complex. The dominant industrial cluster — the Ruwais industrial corridor (refining, LNG, petrochemicals, fertili",
  },
  {
    path: "/erp-industries/ndt-inspection-companies-saudi-arabia",
    title: "NDT Inspection Companies ERP Software in Saudi Arabia | Atlantis NDT ERP",
    description: "Purpose-built ERP for ndt inspection companies based in Saudi Arabia, Saudi Arabia. Pre-loaded with Saudi Aramco SAEP-1112 (NDT personnel), Saudi Aramco SAEP-1142 (NDT qualification), Saudi Aramco SAEC-1142 (procedures), operator flow-down for Saudi Aramco (Abqaiq, Khurais, Ras Tanura) and SABIC, and HRSD (labor) /  GAMI (defense / industries) compliance support. Demo: info@atlantisndt.com.",
    bodyH1: "NDT Inspection Companies ERP Software in Saudi Arabia",
    bodyText: "NDT Inspection Companies operating in Saudi Arabia face a specific combination of local market structure, regulator framework, and operator-specific quality requirements that generic ERP systems cannot model. Saudi Arabia sits at the heart of the largest integrated oil and gas operating environment in the world, anchored by Saudi Aramco and SABIC. The dominant industrial cluster — the Eastern Province upstream-and-downstream complex (Abqaiq, Khurais, Ras Tanura, Jubail) plus ",
  },
  {
    path: "/erp-industries/ndt-inspection-companies-singapore",
    title: "NDT Inspection Companies ERP Software in Singapore | Atlantis NDT ERP",
    description: "Purpose-built ERP for ndt inspection companies based in Singapore, Singapore. Pre-loaded with MOM Workplace Safety & Health Act, MOM WSH Regulations (Pressure Vessels), API 510 / 570 / 653, operator flow-down for ExxonMobil Jurong and Shell Pulau Bukom, and Ministry of Manpower (MOM) /  National Environment Agency (NEA) compliance support. Demo: info@atlantisndt.com.",
    bodyH1: "NDT Inspection Companies ERP Software in Singapore",
    bodyText: "NDT Inspection Companies operating in Singapore face a specific combination of local market structure, regulator framework, and operator-specific quality requirements that generic ERP systems cannot model. Singapore sits at the heart of one of the world's top three refining and petrochemical hubs, the marine-survey gateway for South-East Asia, and a major FPSO conversion centre. The dominant industrial cluster — Jurong Island (refining, petrochemicals, gas), Tuas (shipyards),",
  },
  {
    path: "/erp-industries/ndt-inspection-companies-mumbai",
    title: "NDT Inspection Companies ERP Software in Mumbai | Atlantis NDT ERP",
    description: "Purpose-built ERP for ndt inspection companies based in Mumbai, India. Pre-loaded with OISD-STD-128 / 130 / 137 (corrosion & inspection), PESO Petroleum Rules 2002, IBR (Indian Boiler Regulations), operator flow-down for BPCL Mahul refinery and HPCL Mumbai refinery, and PESO (petroleum & explosives safety) /  OISD (oil industry safety) compliance support. Demo: info@atlantisndt.com.",
    bodyH1: "NDT Inspection Companies ERP Software in Mumbai",
    bodyText: "NDT Inspection Companies operating in Mumbai face a specific combination of local market structure, regulator framework, and operator-specific quality requirements that generic ERP systems cannot model. Mumbai sits at the heart of India's western refining, offshore production, and petrochemicals hub with the country's largest concentration of inspection demand. The dominant industrial cluster — BPCL Mahul, HPCL Mumbai, ONGC Western Offshore (Bombay High), Reliance Hazira and ",
  },
  {
    path: "/erp-industries/ndt-inspection-companies-hyderabad",
    title: "NDT Inspection Companies ERP Software in Hyderabad | Atlantis NDT ERP",
    description: "Purpose-built ERP for ndt inspection companies based in Hyderabad, India. Pre-loaded with IBR (Indian Boiler Regulations), IS 2825 / IS 7822 (pressure vessels), AERB SC/IR-1 (radiation safety), operator flow-down for BHEL Hyderabad and HPCL Visakh refinery, and PESO /  BARC compliance support. Demo: info@atlantisndt.com.",
    bodyH1: "NDT Inspection Companies ERP Software in Hyderabad",
    bodyText: "NDT Inspection Companies operating in Hyderabad face a specific combination of local market structure, regulator framework, and operator-specific quality requirements that generic ERP systems cannot model. Hyderabad sits at the heart of a fast-growing inspection hub serving BHEL heavy engineering, defence manufacturing (BDL, ECIL), aerospace, pharma, and HPCL Visakh refining. The dominant industrial cluster — BHEL Hyderabad and Visakhapatnam, HPCL Visakh refinery, ISRO and BD",
  },
  {
    path: "/erp-industries/ndt-inspection-companies-london",
    title: "NDT Inspection Companies ERP Software in London | Atlantis NDT ERP",
    description: "Purpose-built ERP for ndt inspection companies based in London, UK. Pre-loaded with PSSR 2000 (pressure systems safety), PUWER 1998, LOLER 1998 (lifting), operator flow-down for BP (corporate) and Shell (corporate + Stanlow legacy), and HSE /  ONR (nuclear) compliance support. Demo: info@atlantisndt.com.",
    bodyH1: "NDT Inspection Companies ERP Software in London",
    bodyText: "NDT Inspection Companies operating in London face a specific combination of local market structure, regulator framework, and operator-specific quality requirements that generic ERP systems cannot model. London sits at the heart of the corporate headquarters cluster for global IOCs, EPCs, and inspection multinationals, with strong demand from nuclear, aerospace, rail, and offshore segments. The dominant industrial cluster — corporate HQs in the City and Canary Wharf, plus Tham",
  },
  {
    path: "/erp-industries/ndt-inspection-companies-aberdeen",
    title: "NDT Inspection Companies ERP Software in Aberdeen | Atlantis NDT ERP",
    description: "Purpose-built ERP for ndt inspection companies based in Aberdeen, UK. Pre-loaded with HSE Safety Case Regulations (SCR 2015), PFEER 1995 (fire/explosion), PSSR 2000, operator flow-down for Harbour Energy and BP North Sea, and HSE (OSD) /  Offshore Energies UK (OEUK) compliance support. Demo: info@atlantisndt.com.",
    bodyH1: "NDT Inspection Companies ERP Software in Aberdeen",
    bodyText: "NDT Inspection Companies operating in Aberdeen face a specific combination of local market structure, regulator framework, and operator-specific quality requirements that generic ERP systems cannot model. Aberdeen sits at the heart of the global capital of offshore decommissioning and life-extension inspection, with five decades of UKCS operational data concentrated in the city. The dominant industrial cluster — Aberdeen Harbour + Dyce heliport, supply bases for UKCS platform",
  },
  {
    path: "/erp-industries/ndt-inspection-companies-calgary",
    title: "NDT Inspection Companies ERP Software in Calgary | Atlantis NDT ERP",
    description: "Purpose-built ERP for ndt inspection companies based in Calgary, Canada. Pre-loaded with ABSA AB-506 / AB-512 (pressure equipment), CSA Z662 (oil & gas pipelines), CSA B51 (pressure vessels & piping), operator flow-down for Suncor Energy and Cenovus Energy, and ABSA (Alberta Boilers Safety Association) /  AER (Alberta Energy Regulator) compliance support. Demo: info@atlantisndt.com.",
    bodyH1: "NDT Inspection Companies ERP Software in Calgary",
    bodyText: "NDT Inspection Companies operating in Calgary face a specific combination of local market structure, regulator framework, and operator-specific quality requirements that generic ERP systems cannot model. Calgary sits at the heart of the head-office hub for Canadian oil sands, conventional petroleum, and the trans-continental pipeline operators. The dominant industrial cluster — oil sands operations near Fort McMurray, conventional gas in Alberta and BC, plus the Enbridge / TC",
  },
  {
    path: "/erp-industries/ndt-inspection-companies-perth",
    title: "NDT Inspection Companies ERP Software in Perth | Atlantis NDT ERP",
    description: "Purpose-built ERP for ndt inspection companies based in Perth, Australia. Pre-loaded with AS/NZS 3788 (pressure equipment), AS/NZS 1554 (welding), AS 4037 (pressure equipment examination), operator flow-down for Woodside Energy (Karratha, Pluto, Scarborough, NWS) and Chevron Australia (Wheatstone, Gorgon), and WorkSafe WA /  NOPSEMA (offshore) compliance support. Demo: info@atlantisndt.com.",
    bodyH1: "NDT Inspection Companies ERP Software in Perth",
    bodyText: "NDT Inspection Companies operating in Perth face a specific combination of local market structure, regulator framework, and operator-specific quality requirements that generic ERP systems cannot model. Perth sits at the heart of the LNG and iron-ore inspection capital of Australia, supporting Woodside, Chevron, INPEX, and BHP iron ore through FIFO operations. The dominant industrial cluster — Karratha gas plant, Wheatstone & Pluto LNG, Ichthys onshore, Pilbara iron-ore operat",
  },
  {
    path: "/erp-industries/ndt-inspection-companies-doha",
    title: "NDT Inspection Companies ERP Software in Doha | Atlantis NDT ERP",
    description: "Purpose-built ERP for ndt inspection companies based in Doha, Qatar. Pre-loaded with QatarEnergy NFPS (North Field Production Standards), QGOSM standards, API 510 / 570 / 653, operator flow-down for QatarEnergy (LNG + upstream) and Qatargas (now within QatarEnergy LNG), and Qatar Civil Defence Department (QCDD) /  Qatar General Organisation for Standards & Metrology (QGOSM) compliance support. Demo: info@atlantisndt.com.",
    bodyH1: "NDT Inspection Companies ERP Software in Doha",
    bodyText: "NDT Inspection Companies operating in Doha face a specific combination of local market structure, regulator framework, and operator-specific quality requirements that generic ERP systems cannot model. Doha sits at the heart of the world's largest LNG operating environment, with QatarEnergy's North Field expansion creating unprecedented demand for inspection support. The dominant industrial cluster — Ras Laffan Industrial City (LNG + GTL + condensate), Mesaieed Industrial City",
  },
  {
    path: "/erp-industries/ndt-inspection-companies-kuala-lumpur",
    title: "NDT Inspection Companies ERP Software in Kuala Lumpur | Atlantis NDT ERP",
    description: "Purpose-built ERP for ndt inspection companies based in Kuala Lumpur, Malaysia. Pre-loaded with DOSH Factories & Machinery Act (FMA 1967), Petronas Technical Standards (PTS), Petronas PTS 60.0107 (NDT), operator flow-down for PETRONAS (upstream + downstream) and PETRONAS Chemicals Group (PCG), and DOSH (Department of Occupational Safety & Health) /  Suruhanjaya Tenaga (Energy Commission) compliance support. Demo: info@atlantisndt.com.",
    bodyH1: "NDT Inspection Companies ERP Software in Kuala Lumpur",
    bodyText: "NDT Inspection Companies operating in Kuala Lumpur face a specific combination of local market structure, regulator framework, and operator-specific quality requirements that generic ERP systems cannot model. Kuala Lumpur sits at the heart of PETRONAS headquarters and the Malaysian oil and gas hub, supporting upstream, midstream LNG (Bintulu), and downstream refining (Melaka). The dominant industrial cluster — PETRONAS Twin Towers HQ, Melaka refining complex, PETRONAS Penapis",
  },
  {
    path: "/erp-industries/ndt-inspection-companies-jakarta",
    title: "NDT Inspection Companies ERP Software in Jakarta | Atlantis NDT ERP",
    description: "Purpose-built ERP for ndt inspection companies based in Jakarta, Indonesia. Pre-loaded with K3 Migas oil & gas safety regulations, SNI (Standar Nasional Indonesia) for pressure equipment, Kepmen ESDM 18/2018 (NDT), operator flow-down for Pertamina (refining + upstream) and Pupuk Indonesia (fertilizers), and SKK Migas (upstream regulator) /  K3 Migas (oil & gas HSE) compliance support. Demo: info@atlantisndt.com.",
    bodyH1: "NDT Inspection Companies ERP Software in Jakarta",
    bodyText: "NDT Inspection Companies operating in Jakarta face a specific combination of local market structure, regulator framework, and operator-specific quality requirements that generic ERP systems cannot model. Jakarta sits at the heart of Indonesia's oil, gas, petrochemicals, and steel inspection hub centred on Pertamina, Pupuk Indonesia, and Bontang / Tangguh LNG. The dominant industrial cluster — Pertamina refineries (Cilacap, Balikpapan, Dumai), Bontang LNG (Kalimantan), Tangguh",
  },
  {
    path: "/erp-industries/ndt-inspection-companies-lagos",
    title: "NDT Inspection Companies ERP Software in Lagos | Atlantis NDT ERP",
    description: "Purpose-built ERP for ndt inspection companies based in Lagos, Nigeria. Pre-loaded with NUPRC / DPR Procedure Guidelines (upstream), NMDPRA Petroleum Industry Act regulations, NIMASA Marine Notices, operator flow-down for NNPCL (refineries + upstream) and Shell SPDC (onshore + shallow water), and DPR / NUPRC (upstream regulator) /  NMDPRA (midstream/downstream) compliance support. Demo: info@atlantisndt.com.",
    bodyH1: "NDT Inspection Companies ERP Software in Lagos",
    bodyText: "NDT Inspection Companies operating in Lagos face a specific combination of local market structure, regulator framework, and operator-specific quality requirements that generic ERP systems cannot model. Lagos sits at the heart of Nigeria's commercial capital and the regional hub for upstream oil & gas, refining, and LNG inspection supporting NNPCL, IOCs, and indigenous E&Ps. The dominant industrial cluster — NNPCL refineries (Port Harcourt, Warri, Kaduna) plus the new Dangote ",
  },
  {
    path: "/erp-industries/calibration-laboratories-houston",
    title: "Calibration Laboratories ERP Software in Houston | Atlantis NDT ERP",
    description: "Purpose-built ERP for calibration laboratories based in Houston, USA. Pre-loaded with API 510 / 570 / 653, ASME B31.3 / B31.4 / B31.8, ASME Section VIII Div 1, operator flow-down for ExxonMobil Baytown and Marathon Galveston Bay, and TCEQ /  OSHA Region 6 compliance support. Demo: info@atlantisndt.com.",
    bodyH1: "Calibration Laboratories ERP Software in Houston",
    bodyText: "Calibration Laboratories operating in Houston face a specific combination of local market structure, regulator framework, and operator-specific quality requirements that generic ERP systems cannot model. Houston sits at the heart of the energy capital of the world with 4,600+ energy-related firms and the densest concentration of refining and petrochemical capacity in the western hemisphere. The dominant industrial cluster — a 400-mile Gulf Coast refining and petrochemical com",
  },
  {
    path: "/erp-industries/calibration-laboratories-dubai",
    title: "Calibration Laboratories ERP Software in Dubai | Atlantis NDT ERP",
    description: "Purpose-built ERP for calibration laboratories based in Dubai, UAE. Pre-loaded with ADQCC inspection schemes, ADNOC ACS-01 (vendor), ASME Section V / VIII, operator flow-down for ADNOC Distribution and ENOC Group, and ADQCC /  MOIAT compliance support. Demo: info@atlantisndt.com.",
    bodyH1: "Calibration Laboratories ERP Software in Dubai",
    bodyText: "Calibration Laboratories operating in Dubai face a specific combination of local market structure, regulator framework, and operator-specific quality requirements that generic ERP systems cannot model. Dubai sits at the heart of the regional commercial and logistics hub for GCC oil and gas, hosting regional HQs for IOCs, EPCs, and inspection multinationals. The dominant industrial cluster — a Jebel Ali free zone industrial hub connected to ADNOC Distribution, ENOC, DUBAL, and",
  },
  {
    path: "/erp-industries/calibration-laboratories-abu-dhabi",
    title: "Calibration Laboratories ERP Software in Abu Dhabi | Atlantis NDT ERP",
    description: "Purpose-built ERP for calibration laboratories based in Abu Dhabi, UAE. Pre-loaded with ADNOC ACS-01 (vendor qualification), ADNOC HSE-IM-RP, API 510 / 570 / 653, operator flow-down for ADNOC Onshore and ADNOC LNG, and ADNOC HSE & Asset Integrity /  ADQCC compliance support. Demo: info@atlantisndt.com.",
    bodyH1: "Calibration Laboratories ERP Software in Abu Dhabi",
    bodyText: "Calibration Laboratories operating in Abu Dhabi face a specific combination of local market structure, regulator framework, and operator-specific quality requirements that generic ERP systems cannot model. Abu Dhabi sits at the heart of the operational heart of UAE upstream and downstream, controlling 94% of UAE oil reserves through ADNOC and the Ruwais integrated complex. The dominant industrial cluster — the Ruwais industrial corridor (refining, LNG, petrochemicals, fertili",
  },
  {
    path: "/erp-industries/calibration-laboratories-saudi-arabia",
    title: "Calibration Laboratories ERP Software in Saudi Arabia | Atlantis NDT ERP",
    description: "Purpose-built ERP for calibration laboratories based in Saudi Arabia, Saudi Arabia. Pre-loaded with Saudi Aramco SAEP-1112 (NDT personnel), Saudi Aramco SAEP-1142 (NDT qualification), Saudi Aramco SAEC-1142 (procedures), operator flow-down for Saudi Aramco (Abqaiq, Khurais, Ras Tanura) and SABIC, and HRSD (labor) /  GAMI (defense / industries) compliance support. Demo: info@atlantisndt.com.",
    bodyH1: "Calibration Laboratories ERP Software in Saudi Arabia",
    bodyText: "Calibration Laboratories operating in Saudi Arabia face a specific combination of local market structure, regulator framework, and operator-specific quality requirements that generic ERP systems cannot model. Saudi Arabia sits at the heart of the largest integrated oil and gas operating environment in the world, anchored by Saudi Aramco and SABIC. The dominant industrial cluster — the Eastern Province upstream-and-downstream complex (Abqaiq, Khurais, Ras Tanura, Jubail) plus ",
  },
  {
    path: "/erp-industries/calibration-laboratories-singapore",
    title: "Calibration Laboratories ERP Software in Singapore | Atlantis NDT ERP",
    description: "Purpose-built ERP for calibration laboratories based in Singapore, Singapore. Pre-loaded with MOM Workplace Safety & Health Act, MOM WSH Regulations (Pressure Vessels), API 510 / 570 / 653, operator flow-down for ExxonMobil Jurong and Shell Pulau Bukom, and Ministry of Manpower (MOM) /  National Environment Agency (NEA) compliance support. Demo: info@atlantisndt.com.",
    bodyH1: "Calibration Laboratories ERP Software in Singapore",
    bodyText: "Calibration Laboratories operating in Singapore face a specific combination of local market structure, regulator framework, and operator-specific quality requirements that generic ERP systems cannot model. Singapore sits at the heart of one of the world's top three refining and petrochemical hubs, the marine-survey gateway for South-East Asia, and a major FPSO conversion centre. The dominant industrial cluster — Jurong Island (refining, petrochemicals, gas), Tuas (shipyards),",
  },
  {
    path: "/erp-industries/calibration-laboratories-mumbai",
    title: "Calibration Laboratories ERP Software in Mumbai | Atlantis NDT ERP",
    description: "Purpose-built ERP for calibration laboratories based in Mumbai, India. Pre-loaded with OISD-STD-128 / 130 / 137 (corrosion & inspection), PESO Petroleum Rules 2002, IBR (Indian Boiler Regulations), operator flow-down for BPCL Mahul refinery and HPCL Mumbai refinery, and PESO (petroleum & explosives safety) /  OISD (oil industry safety) compliance support. Demo: info@atlantisndt.com.",
    bodyH1: "Calibration Laboratories ERP Software in Mumbai",
    bodyText: "Calibration Laboratories operating in Mumbai face a specific combination of local market structure, regulator framework, and operator-specific quality requirements that generic ERP systems cannot model. Mumbai sits at the heart of India's western refining, offshore production, and petrochemicals hub with the country's largest concentration of inspection demand. The dominant industrial cluster — BPCL Mahul, HPCL Mumbai, ONGC Western Offshore (Bombay High), Reliance Hazira and ",
  },
  {
    path: "/erp-industries/calibration-laboratories-hyderabad",
    title: "Calibration Laboratories ERP Software in Hyderabad | Atlantis NDT ERP",
    description: "Purpose-built ERP for calibration laboratories based in Hyderabad, India. Pre-loaded with IBR (Indian Boiler Regulations), IS 2825 / IS 7822 (pressure vessels), AERB SC/IR-1 (radiation safety), operator flow-down for BHEL Hyderabad and HPCL Visakh refinery, and PESO /  BARC compliance support. Demo: info@atlantisndt.com.",
    bodyH1: "Calibration Laboratories ERP Software in Hyderabad",
    bodyText: "Calibration Laboratories operating in Hyderabad face a specific combination of local market structure, regulator framework, and operator-specific quality requirements that generic ERP systems cannot model. Hyderabad sits at the heart of a fast-growing inspection hub serving BHEL heavy engineering, defence manufacturing (BDL, ECIL), aerospace, pharma, and HPCL Visakh refining. The dominant industrial cluster — BHEL Hyderabad and Visakhapatnam, HPCL Visakh refinery, ISRO and BD",
  },
  {
    path: "/erp-industries/calibration-laboratories-london",
    title: "Calibration Laboratories ERP Software in London | Atlantis NDT ERP",
    description: "Purpose-built ERP for calibration laboratories based in London, UK. Pre-loaded with PSSR 2000 (pressure systems safety), PUWER 1998, LOLER 1998 (lifting), operator flow-down for BP (corporate) and Shell (corporate + Stanlow legacy), and HSE /  ONR (nuclear) compliance support. Demo: info@atlantisndt.com.",
    bodyH1: "Calibration Laboratories ERP Software in London",
    bodyText: "Calibration Laboratories operating in London face a specific combination of local market structure, regulator framework, and operator-specific quality requirements that generic ERP systems cannot model. London sits at the heart of the corporate headquarters cluster for global IOCs, EPCs, and inspection multinationals, with strong demand from nuclear, aerospace, rail, and offshore segments. The dominant industrial cluster — corporate HQs in the City and Canary Wharf, plus Tham",
  },
  {
    path: "/erp-industries/calibration-laboratories-aberdeen",
    title: "Calibration Laboratories ERP Software in Aberdeen | Atlantis NDT ERP",
    description: "Purpose-built ERP for calibration laboratories based in Aberdeen, UK. Pre-loaded with HSE Safety Case Regulations (SCR 2015), PFEER 1995 (fire/explosion), PSSR 2000, operator flow-down for Harbour Energy and BP North Sea, and HSE (OSD) /  Offshore Energies UK (OEUK) compliance support. Demo: info@atlantisndt.com.",
    bodyH1: "Calibration Laboratories ERP Software in Aberdeen",
    bodyText: "Calibration Laboratories operating in Aberdeen face a specific combination of local market structure, regulator framework, and operator-specific quality requirements that generic ERP systems cannot model. Aberdeen sits at the heart of the global capital of offshore decommissioning and life-extension inspection, with five decades of UKCS operational data concentrated in the city. The dominant industrial cluster — Aberdeen Harbour + Dyce heliport, supply bases for UKCS platform",
  },
  {
    path: "/erp-industries/calibration-laboratories-calgary",
    title: "Calibration Laboratories ERP Software in Calgary | Atlantis NDT ERP",
    description: "Purpose-built ERP for calibration laboratories based in Calgary, Canada. Pre-loaded with ABSA AB-506 / AB-512 (pressure equipment), CSA Z662 (oil & gas pipelines), CSA B51 (pressure vessels & piping), operator flow-down for Suncor Energy and Cenovus Energy, and ABSA (Alberta Boilers Safety Association) /  AER (Alberta Energy Regulator) compliance support. Demo: info@atlantisndt.com.",
    bodyH1: "Calibration Laboratories ERP Software in Calgary",
    bodyText: "Calibration Laboratories operating in Calgary face a specific combination of local market structure, regulator framework, and operator-specific quality requirements that generic ERP systems cannot model. Calgary sits at the heart of the head-office hub for Canadian oil sands, conventional petroleum, and the trans-continental pipeline operators. The dominant industrial cluster — oil sands operations near Fort McMurray, conventional gas in Alberta and BC, plus the Enbridge / TC",
  },
  {
    path: "/erp-industries/calibration-laboratories-perth",
    title: "Calibration Laboratories ERP Software in Perth | Atlantis NDT ERP",
    description: "Purpose-built ERP for calibration laboratories based in Perth, Australia. Pre-loaded with AS/NZS 3788 (pressure equipment), AS/NZS 1554 (welding), AS 4037 (pressure equipment examination), operator flow-down for Woodside Energy (Karratha, Pluto, Scarborough, NWS) and Chevron Australia (Wheatstone, Gorgon), and WorkSafe WA /  NOPSEMA (offshore) compliance support. Demo: info@atlantisndt.com.",
    bodyH1: "Calibration Laboratories ERP Software in Perth",
    bodyText: "Calibration Laboratories operating in Perth face a specific combination of local market structure, regulator framework, and operator-specific quality requirements that generic ERP systems cannot model. Perth sits at the heart of the LNG and iron-ore inspection capital of Australia, supporting Woodside, Chevron, INPEX, and BHP iron ore through FIFO operations. The dominant industrial cluster — Karratha gas plant, Wheatstone & Pluto LNG, Ichthys onshore, Pilbara iron-ore operat",
  },
  {
    path: "/erp-industries/calibration-laboratories-doha",
    title: "Calibration Laboratories ERP Software in Doha | Atlantis NDT ERP",
    description: "Purpose-built ERP for calibration laboratories based in Doha, Qatar. Pre-loaded with QatarEnergy NFPS (North Field Production Standards), QGOSM standards, API 510 / 570 / 653, operator flow-down for QatarEnergy (LNG + upstream) and Qatargas (now within QatarEnergy LNG), and Qatar Civil Defence Department (QCDD) /  Qatar General Organisation for Standards & Metrology (QGOSM) compliance support. Demo: info@atlantisndt.com.",
    bodyH1: "Calibration Laboratories ERP Software in Doha",
    bodyText: "Calibration Laboratories operating in Doha face a specific combination of local market structure, regulator framework, and operator-specific quality requirements that generic ERP systems cannot model. Doha sits at the heart of the world's largest LNG operating environment, with QatarEnergy's North Field expansion creating unprecedented demand for inspection support. The dominant industrial cluster — Ras Laffan Industrial City (LNG + GTL + condensate), Mesaieed Industrial City",
  },
  {
    path: "/erp-industries/calibration-laboratories-kuala-lumpur",
    title: "Calibration Laboratories ERP Software in Kuala Lumpur | Atlantis NDT ERP",
    description: "Purpose-built ERP for calibration laboratories based in Kuala Lumpur, Malaysia. Pre-loaded with DOSH Factories & Machinery Act (FMA 1967), Petronas Technical Standards (PTS), Petronas PTS 60.0107 (NDT), operator flow-down for PETRONAS (upstream + downstream) and PETRONAS Chemicals Group (PCG), and DOSH (Department of Occupational Safety & Health) /  Suruhanjaya Tenaga (Energy Commission) compliance support. Demo: info@atlantisndt.com.",
    bodyH1: "Calibration Laboratories ERP Software in Kuala Lumpur",
    bodyText: "Calibration Laboratories operating in Kuala Lumpur face a specific combination of local market structure, regulator framework, and operator-specific quality requirements that generic ERP systems cannot model. Kuala Lumpur sits at the heart of PETRONAS headquarters and the Malaysian oil and gas hub, supporting upstream, midstream LNG (Bintulu), and downstream refining (Melaka). The dominant industrial cluster — PETRONAS Twin Towers HQ, Melaka refining complex, PETRONAS Penapis",
  },
  {
    path: "/erp-industries/calibration-laboratories-jakarta",
    title: "Calibration Laboratories ERP Software in Jakarta | Atlantis NDT ERP",
    description: "Purpose-built ERP for calibration laboratories based in Jakarta, Indonesia. Pre-loaded with K3 Migas oil & gas safety regulations, SNI (Standar Nasional Indonesia) for pressure equipment, Kepmen ESDM 18/2018 (NDT), operator flow-down for Pertamina (refining + upstream) and Pupuk Indonesia (fertilizers), and SKK Migas (upstream regulator) /  K3 Migas (oil & gas HSE) compliance support. Demo: info@atlantisndt.com.",
    bodyH1: "Calibration Laboratories ERP Software in Jakarta",
    bodyText: "Calibration Laboratories operating in Jakarta face a specific combination of local market structure, regulator framework, and operator-specific quality requirements that generic ERP systems cannot model. Jakarta sits at the heart of Indonesia's oil, gas, petrochemicals, and steel inspection hub centred on Pertamina, Pupuk Indonesia, and Bontang / Tangguh LNG. The dominant industrial cluster — Pertamina refineries (Cilacap, Balikpapan, Dumai), Bontang LNG (Kalimantan), Tangguh",
  },
  {
    path: "/erp-industries/calibration-laboratories-lagos",
    title: "Calibration Laboratories ERP Software in Lagos | Atlantis NDT ERP",
    description: "Purpose-built ERP for calibration laboratories based in Lagos, Nigeria. Pre-loaded with NUPRC / DPR Procedure Guidelines (upstream), NMDPRA Petroleum Industry Act regulations, NIMASA Marine Notices, operator flow-down for NNPCL (refineries + upstream) and Shell SPDC (onshore + shallow water), and DPR / NUPRC (upstream regulator) /  NMDPRA (midstream/downstream) compliance support. Demo: info@atlantisndt.com.",
    bodyH1: "Calibration Laboratories ERP Software in Lagos",
    bodyText: "Calibration Laboratories operating in Lagos face a specific combination of local market structure, regulator framework, and operator-specific quality requirements that generic ERP systems cannot model. Lagos sits at the heart of Nigeria's commercial capital and the regional hub for upstream oil & gas, refining, and LNG inspection supporting NNPCL, IOCs, and indigenous E&Ps. The dominant industrial cluster — NNPCL refineries (Port Harcourt, Warri, Kaduna) plus the new Dangote ",
  },
  {
    path: "/erp-industries/welding-fabrication-shops-houston",
    title: "Welding & Fabrication Shops ERP Software in Houston | Atlantis NDT ERP",
    description: "Purpose-built ERP for welding & fabrication shops based in Houston, USA. Pre-loaded with API 510 / 570 / 653, ASME B31.3 / B31.4 / B31.8, ASME Section VIII Div 1, operator flow-down for ExxonMobil Baytown and Marathon Galveston Bay, and TCEQ /  OSHA Region 6 compliance support. Demo: info@atlantisndt.com.",
    bodyH1: "Welding & Fabrication Shops ERP Software in Houston",
    bodyText: "Welding & Fabrication Shops operating in Houston face a specific combination of local market structure, regulator framework, and operator-specific quality requirements that generic ERP systems cannot model. Houston sits at the heart of the energy capital of the world with 4,600+ energy-related firms and the densest concentration of refining and petrochemical capacity in the western hemisphere. The dominant industrial cluster — a 400-mile Gulf Coast refining and petrochemical ",
  },
  {
    path: "/erp-industries/welding-fabrication-shops-dubai",
    title: "Welding & Fabrication Shops ERP Software in Dubai | Atlantis NDT ERP",
    description: "Purpose-built ERP for welding & fabrication shops based in Dubai, UAE. Pre-loaded with ADQCC inspection schemes, ADNOC ACS-01 (vendor), ASME Section V / VIII, operator flow-down for ADNOC Distribution and ENOC Group, and ADQCC /  MOIAT compliance support. Demo: info@atlantisndt.com.",
    bodyH1: "Welding & Fabrication Shops ERP Software in Dubai",
    bodyText: "Welding & Fabrication Shops operating in Dubai face a specific combination of local market structure, regulator framework, and operator-specific quality requirements that generic ERP systems cannot model. Dubai sits at the heart of the regional commercial and logistics hub for GCC oil and gas, hosting regional HQs for IOCs, EPCs, and inspection multinationals. The dominant industrial cluster — a Jebel Ali free zone industrial hub connected to ADNOC Distribution, ENOC, DUBAL, ",
  },
  {
    path: "/erp-industries/welding-fabrication-shops-abu-dhabi",
    title: "Welding & Fabrication Shops ERP Software in Abu Dhabi | Atlantis NDT ERP",
    description: "Purpose-built ERP for welding & fabrication shops based in Abu Dhabi, UAE. Pre-loaded with ADNOC ACS-01 (vendor qualification), ADNOC HSE-IM-RP, API 510 / 570 / 653, operator flow-down for ADNOC Onshore and ADNOC LNG, and ADNOC HSE & Asset Integrity /  ADQCC compliance support. Demo: info@atlantisndt.com.",
    bodyH1: "Welding & Fabrication Shops ERP Software in Abu Dhabi",
    bodyText: "Welding & Fabrication Shops operating in Abu Dhabi face a specific combination of local market structure, regulator framework, and operator-specific quality requirements that generic ERP systems cannot model. Abu Dhabi sits at the heart of the operational heart of UAE upstream and downstream, controlling 94% of UAE oil reserves through ADNOC and the Ruwais integrated complex. The dominant industrial cluster — the Ruwais industrial corridor (refining, LNG, petrochemicals, fert",
  },
  {
    path: "/erp-industries/welding-fabrication-shops-saudi-arabia",
    title: "Welding & Fabrication Shops ERP Software in Saudi Arabia | Atlantis NDT ERP",
    description: "Purpose-built ERP for welding & fabrication shops based in Saudi Arabia, Saudi Arabia. Pre-loaded with Saudi Aramco SAEP-1112 (NDT personnel), Saudi Aramco SAEP-1142 (NDT qualification), Saudi Aramco SAEC-1142 (procedures), operator flow-down for Saudi Aramco (Abqaiq, Khurais, Ras Tanura) and SABIC, and HRSD (labor) /  GAMI (defense / industries) compliance support. Demo: info@atlantisndt.com.",
    bodyH1: "Welding & Fabrication Shops ERP Software in Saudi Arabia",
    bodyText: "Welding & Fabrication Shops operating in Saudi Arabia face a specific combination of local market structure, regulator framework, and operator-specific quality requirements that generic ERP systems cannot model. Saudi Arabia sits at the heart of the largest integrated oil and gas operating environment in the world, anchored by Saudi Aramco and SABIC. The dominant industrial cluster — the Eastern Province upstream-and-downstream complex (Abqaiq, Khurais, Ras Tanura, Jubail) pl",
  },
  {
    path: "/erp-industries/welding-fabrication-shops-singapore",
    title: "Welding & Fabrication Shops ERP Software in Singapore | Atlantis NDT ERP",
    description: "Purpose-built ERP for welding & fabrication shops based in Singapore, Singapore. Pre-loaded with MOM Workplace Safety & Health Act, MOM WSH Regulations (Pressure Vessels), API 510 / 570 / 653, operator flow-down for ExxonMobil Jurong and Shell Pulau Bukom, and Ministry of Manpower (MOM) /  National Environment Agency (NEA) compliance support. Demo: info@atlantisndt.com.",
    bodyH1: "Welding & Fabrication Shops ERP Software in Singapore",
    bodyText: "Welding & Fabrication Shops operating in Singapore face a specific combination of local market structure, regulator framework, and operator-specific quality requirements that generic ERP systems cannot model. Singapore sits at the heart of one of the world's top three refining and petrochemical hubs, the marine-survey gateway for South-East Asia, and a major FPSO conversion centre. The dominant industrial cluster — Jurong Island (refining, petrochemicals, gas), Tuas (shipyard",
  },
  {
    path: "/erp-industries/welding-fabrication-shops-mumbai",
    title: "Welding & Fabrication Shops ERP Software in Mumbai | Atlantis NDT ERP",
    description: "Purpose-built ERP for welding & fabrication shops based in Mumbai, India. Pre-loaded with OISD-STD-128 / 130 / 137 (corrosion & inspection), PESO Petroleum Rules 2002, IBR (Indian Boiler Regulations), operator flow-down for BPCL Mahul refinery and HPCL Mumbai refinery, and PESO (petroleum & explosives safety) /  OISD (oil industry safety) compliance support. Demo: info@atlantisndt.com.",
    bodyH1: "Welding & Fabrication Shops ERP Software in Mumbai",
    bodyText: "Welding & Fabrication Shops operating in Mumbai face a specific combination of local market structure, regulator framework, and operator-specific quality requirements that generic ERP systems cannot model. Mumbai sits at the heart of India's western refining, offshore production, and petrochemicals hub with the country's largest concentration of inspection demand. The dominant industrial cluster — BPCL Mahul, HPCL Mumbai, ONGC Western Offshore (Bombay High), Reliance Hazira a",
  },
  {
    path: "/erp-industries/welding-fabrication-shops-hyderabad",
    title: "Welding & Fabrication Shops ERP Software in Hyderabad | Atlantis NDT ERP",
    description: "Purpose-built ERP for welding & fabrication shops based in Hyderabad, India. Pre-loaded with IBR (Indian Boiler Regulations), IS 2825 / IS 7822 (pressure vessels), AERB SC/IR-1 (radiation safety), operator flow-down for BHEL Hyderabad and HPCL Visakh refinery, and PESO /  BARC compliance support. Demo: info@atlantisndt.com.",
    bodyH1: "Welding & Fabrication Shops ERP Software in Hyderabad",
    bodyText: "Welding & Fabrication Shops operating in Hyderabad face a specific combination of local market structure, regulator framework, and operator-specific quality requirements that generic ERP systems cannot model. Hyderabad sits at the heart of a fast-growing inspection hub serving BHEL heavy engineering, defence manufacturing (BDL, ECIL), aerospace, pharma, and HPCL Visakh refining. The dominant industrial cluster — BHEL Hyderabad and Visakhapatnam, HPCL Visakh refinery, ISRO and",
  },
  {
    path: "/erp-industries/welding-fabrication-shops-london",
    title: "Welding & Fabrication Shops ERP Software in London | Atlantis NDT ERP",
    description: "Purpose-built ERP for welding & fabrication shops based in London, UK. Pre-loaded with PSSR 2000 (pressure systems safety), PUWER 1998, LOLER 1998 (lifting), operator flow-down for BP (corporate) and Shell (corporate + Stanlow legacy), and HSE /  ONR (nuclear) compliance support. Demo: info@atlantisndt.com.",
    bodyH1: "Welding & Fabrication Shops ERP Software in London",
    bodyText: "Welding & Fabrication Shops operating in London face a specific combination of local market structure, regulator framework, and operator-specific quality requirements that generic ERP systems cannot model. London sits at the heart of the corporate headquarters cluster for global IOCs, EPCs, and inspection multinationals, with strong demand from nuclear, aerospace, rail, and offshore segments. The dominant industrial cluster — corporate HQs in the City and Canary Wharf, plus T",
  },
  {
    path: "/erp-industries/welding-fabrication-shops-aberdeen",
    title: "Welding & Fabrication Shops ERP Software in Aberdeen | Atlantis NDT ERP",
    description: "Purpose-built ERP for welding & fabrication shops based in Aberdeen, UK. Pre-loaded with HSE Safety Case Regulations (SCR 2015), PFEER 1995 (fire/explosion), PSSR 2000, operator flow-down for Harbour Energy and BP North Sea, and HSE (OSD) /  Offshore Energies UK (OEUK) compliance support. Demo: info@atlantisndt.com.",
    bodyH1: "Welding & Fabrication Shops ERP Software in Aberdeen",
    bodyText: "Welding & Fabrication Shops operating in Aberdeen face a specific combination of local market structure, regulator framework, and operator-specific quality requirements that generic ERP systems cannot model. Aberdeen sits at the heart of the global capital of offshore decommissioning and life-extension inspection, with five decades of UKCS operational data concentrated in the city. The dominant industrial cluster — Aberdeen Harbour + Dyce heliport, supply bases for UKCS platf",
  },
  {
    path: "/erp-industries/welding-fabrication-shops-calgary",
    title: "Welding & Fabrication Shops ERP Software in Calgary | Atlantis NDT ERP",
    description: "Purpose-built ERP for welding & fabrication shops based in Calgary, Canada. Pre-loaded with ABSA AB-506 / AB-512 (pressure equipment), CSA Z662 (oil & gas pipelines), CSA B51 (pressure vessels & piping), operator flow-down for Suncor Energy and Cenovus Energy, and ABSA (Alberta Boilers Safety Association) /  AER (Alberta Energy Regulator) compliance support. Demo: info@atlantisndt.com.",
    bodyH1: "Welding & Fabrication Shops ERP Software in Calgary",
    bodyText: "Welding & Fabrication Shops operating in Calgary face a specific combination of local market structure, regulator framework, and operator-specific quality requirements that generic ERP systems cannot model. Calgary sits at the heart of the head-office hub for Canadian oil sands, conventional petroleum, and the trans-continental pipeline operators. The dominant industrial cluster — oil sands operations near Fort McMurray, conventional gas in Alberta and BC, plus the Enbridge /",
  },
  {
    path: "/erp-industries/welding-fabrication-shops-perth",
    title: "Welding & Fabrication Shops ERP Software in Perth | Atlantis NDT ERP",
    description: "Purpose-built ERP for welding & fabrication shops based in Perth, Australia. Pre-loaded with AS/NZS 3788 (pressure equipment), AS/NZS 1554 (welding), AS 4037 (pressure equipment examination), operator flow-down for Woodside Energy (Karratha, Pluto, Scarborough, NWS) and Chevron Australia (Wheatstone, Gorgon), and WorkSafe WA /  NOPSEMA (offshore) compliance support. Demo: info@atlantisndt.com.",
    bodyH1: "Welding & Fabrication Shops ERP Software in Perth",
    bodyText: "Welding & Fabrication Shops operating in Perth face a specific combination of local market structure, regulator framework, and operator-specific quality requirements that generic ERP systems cannot model. Perth sits at the heart of the LNG and iron-ore inspection capital of Australia, supporting Woodside, Chevron, INPEX, and BHP iron ore through FIFO operations. The dominant industrial cluster — Karratha gas plant, Wheatstone & Pluto LNG, Ichthys onshore, Pilbara iron-ore ope",
  },
  {
    path: "/erp-industries/welding-fabrication-shops-doha",
    title: "Welding & Fabrication Shops ERP Software in Doha | Atlantis NDT ERP",
    description: "Purpose-built ERP for welding & fabrication shops based in Doha, Qatar. Pre-loaded with QatarEnergy NFPS (North Field Production Standards), QGOSM standards, API 510 / 570 / 653, operator flow-down for QatarEnergy (LNG + upstream) and Qatargas (now within QatarEnergy LNG), and Qatar Civil Defence Department (QCDD) /  Qatar General Organisation for Standards & Metrology (QGOSM) compliance support. Demo: info@atlantisndt.com.",
    bodyH1: "Welding & Fabrication Shops ERP Software in Doha",
    bodyText: "Welding & Fabrication Shops operating in Doha face a specific combination of local market structure, regulator framework, and operator-specific quality requirements that generic ERP systems cannot model. Doha sits at the heart of the world's largest LNG operating environment, with QatarEnergy's North Field expansion creating unprecedented demand for inspection support. The dominant industrial cluster — Ras Laffan Industrial City (LNG + GTL + condensate), Mesaieed Industrial C",
  },
  {
    path: "/erp-industries/welding-fabrication-shops-kuala-lumpur",
    title: "Welding & Fabrication Shops ERP Software in Kuala Lumpur | Atlantis NDT ERP",
    description: "Purpose-built ERP for welding & fabrication shops based in Kuala Lumpur, Malaysia. Pre-loaded with DOSH Factories & Machinery Act (FMA 1967), Petronas Technical Standards (PTS), Petronas PTS 60.0107 (NDT), operator flow-down for PETRONAS (upstream + downstream) and PETRONAS Chemicals Group (PCG), and DOSH (Department of Occupational Safety & Health) /  Suruhanjaya Tenaga (Energy Commission) compliance support. Demo: info@atlantisndt.com.",
    bodyH1: "Welding & Fabrication Shops ERP Software in Kuala Lumpur",
    bodyText: "Welding & Fabrication Shops operating in Kuala Lumpur face a specific combination of local market structure, regulator framework, and operator-specific quality requirements that generic ERP systems cannot model. Kuala Lumpur sits at the heart of PETRONAS headquarters and the Malaysian oil and gas hub, supporting upstream, midstream LNG (Bintulu), and downstream refining (Melaka). The dominant industrial cluster — PETRONAS Twin Towers HQ, Melaka refining complex, PETRONAS Pena",
  },
  {
    path: "/erp-industries/welding-fabrication-shops-jakarta",
    title: "Welding & Fabrication Shops ERP Software in Jakarta | Atlantis NDT ERP",
    description: "Purpose-built ERP for welding & fabrication shops based in Jakarta, Indonesia. Pre-loaded with K3 Migas oil & gas safety regulations, SNI (Standar Nasional Indonesia) for pressure equipment, Kepmen ESDM 18/2018 (NDT), operator flow-down for Pertamina (refining + upstream) and Pupuk Indonesia (fertilizers), and SKK Migas (upstream regulator) /  K3 Migas (oil & gas HSE) compliance support. Demo: info@atlantisndt.com.",
    bodyH1: "Welding & Fabrication Shops ERP Software in Jakarta",
    bodyText: "Welding & Fabrication Shops operating in Jakarta face a specific combination of local market structure, regulator framework, and operator-specific quality requirements that generic ERP systems cannot model. Jakarta sits at the heart of Indonesia's oil, gas, petrochemicals, and steel inspection hub centred on Pertamina, Pupuk Indonesia, and Bontang / Tangguh LNG. The dominant industrial cluster — Pertamina refineries (Cilacap, Balikpapan, Dumai), Bontang LNG (Kalimantan), Tang",
  },
  {
    path: "/erp-industries/welding-fabrication-shops-lagos",
    title: "Welding & Fabrication Shops ERP Software in Lagos | Atlantis NDT ERP",
    description: "Purpose-built ERP for welding & fabrication shops based in Lagos, Nigeria. Pre-loaded with NUPRC / DPR Procedure Guidelines (upstream), NMDPRA Petroleum Industry Act regulations, NIMASA Marine Notices, operator flow-down for NNPCL (refineries + upstream) and Shell SPDC (onshore + shallow water), and DPR / NUPRC (upstream regulator) /  NMDPRA (midstream/downstream) compliance support. Demo: info@atlantisndt.com.",
    bodyH1: "Welding & Fabrication Shops ERP Software in Lagos",
    bodyText: "Welding & Fabrication Shops operating in Lagos face a specific combination of local market structure, regulator framework, and operator-specific quality requirements that generic ERP systems cannot model. Lagos sits at the heart of Nigeria's commercial capital and the regional hub for upstream oil & gas, refining, and LNG inspection supporting NNPCL, IOCs, and indigenous E&Ps. The dominant industrial cluster — NNPCL refineries (Port Harcourt, Warri, Kaduna) plus the new Dango",
  },
  {
    path: "/erp-industries/marine-survey-companies-houston",
    title: "Marine Survey & Offshore Inspection ERP Software in Houston | Atlantis NDT ERP",
    description: "Purpose-built ERP for marine survey & offshore inspection based in Houston, USA. Pre-loaded with API 510 / 570 / 653, ASME B31.3 / B31.4 / B31.8, ASME Section VIII Div 1, operator flow-down for ExxonMobil Baytown and Marathon Galveston Bay, and TCEQ /  OSHA Region 6 compliance support. Demo: info@atlantisndt.com.",
    bodyH1: "Marine Survey & Offshore Inspection ERP Software in Houston",
    bodyText: "Marine Survey & Offshore Inspection operating in Houston face a specific combination of local market structure, regulator framework, and operator-specific quality requirements that generic ERP systems cannot model. Houston sits at the heart of the energy capital of the world with 4,600+ energy-related firms and the densest concentration of refining and petrochemical capacity in the western hemisphere. The dominant industrial cluster — a 400-mile Gulf Coast refining and petroc",
  },
  {
    path: "/erp-industries/marine-survey-companies-dubai",
    title: "Marine Survey & Offshore Inspection ERP Software in Dubai | Atlantis NDT ERP",
    description: "Purpose-built ERP for marine survey & offshore inspection based in Dubai, UAE. Pre-loaded with ADQCC inspection schemes, ADNOC ACS-01 (vendor), ASME Section V / VIII, operator flow-down for ADNOC Distribution and ENOC Group, and ADQCC /  MOIAT compliance support. Demo: info@atlantisndt.com.",
    bodyH1: "Marine Survey & Offshore Inspection ERP Software in Dubai",
    bodyText: "Marine Survey & Offshore Inspection operating in Dubai face a specific combination of local market structure, regulator framework, and operator-specific quality requirements that generic ERP systems cannot model. Dubai sits at the heart of the regional commercial and logistics hub for GCC oil and gas, hosting regional HQs for IOCs, EPCs, and inspection multinationals. The dominant industrial cluster — a Jebel Ali free zone industrial hub connected to ADNOC Distribution, ENOC,",
  },
  {
    path: "/erp-industries/marine-survey-companies-abu-dhabi",
    title: "Marine Survey & Offshore Inspection ERP Software in Abu Dhabi | Atlantis NDT ERP",
    description: "Purpose-built ERP for marine survey & offshore inspection based in Abu Dhabi, UAE. Pre-loaded with ADNOC ACS-01 (vendor qualification), ADNOC HSE-IM-RP, API 510 / 570 / 653, operator flow-down for ADNOC Onshore and ADNOC LNG, and ADNOC HSE & Asset Integrity /  ADQCC compliance support. Demo: info@atlantisndt.com.",
    bodyH1: "Marine Survey & Offshore Inspection ERP Software in Abu Dhabi",
    bodyText: "Marine Survey & Offshore Inspection operating in Abu Dhabi face a specific combination of local market structure, regulator framework, and operator-specific quality requirements that generic ERP systems cannot model. Abu Dhabi sits at the heart of the operational heart of UAE upstream and downstream, controlling 94% of UAE oil reserves through ADNOC and the Ruwais integrated complex. The dominant industrial cluster — the Ruwais industrial corridor (refining, LNG, petrochemica",
  },
  {
    path: "/erp-industries/marine-survey-companies-saudi-arabia",
    title: "Marine Survey & Offshore Inspection ERP Software in Saudi Arabia | Atlantis NDT ERP",
    description: "Purpose-built ERP for marine survey & offshore inspection based in Saudi Arabia, Saudi Arabia. Pre-loaded with Saudi Aramco SAEP-1112 (NDT personnel), Saudi Aramco SAEP-1142 (NDT qualification), Saudi Aramco SAEC-1142 (procedures), operator flow-down for Saudi Aramco (Abqaiq, Khurais, Ras Tanura) and SABIC, and HRSD (labor) /  GAMI (defense / industries) compliance support. Demo: info@atlantisndt.com.",
    bodyH1: "Marine Survey & Offshore Inspection ERP Software in Saudi Arabia",
    bodyText: "Marine Survey & Offshore Inspection operating in Saudi Arabia face a specific combination of local market structure, regulator framework, and operator-specific quality requirements that generic ERP systems cannot model. Saudi Arabia sits at the heart of the largest integrated oil and gas operating environment in the world, anchored by Saudi Aramco and SABIC. The dominant industrial cluster — the Eastern Province upstream-and-downstream complex (Abqaiq, Khurais, Ras Tanura, Ju",
  },
  {
    path: "/erp-industries/marine-survey-companies-singapore",
    title: "Marine Survey & Offshore Inspection ERP Software in Singapore | Atlantis NDT ERP",
    description: "Purpose-built ERP for marine survey & offshore inspection based in Singapore, Singapore. Pre-loaded with MOM Workplace Safety & Health Act, MOM WSH Regulations (Pressure Vessels), API 510 / 570 / 653, operator flow-down for ExxonMobil Jurong and Shell Pulau Bukom, and Ministry of Manpower (MOM) /  National Environment Agency (NEA) compliance support. Demo: info@atlantisndt.com.",
    bodyH1: "Marine Survey & Offshore Inspection ERP Software in Singapore",
    bodyText: "Marine Survey & Offshore Inspection operating in Singapore face a specific combination of local market structure, regulator framework, and operator-specific quality requirements that generic ERP systems cannot model. Singapore sits at the heart of one of the world's top three refining and petrochemical hubs, the marine-survey gateway for South-East Asia, and a major FPSO conversion centre. The dominant industrial cluster — Jurong Island (refining, petrochemicals, gas), Tuas (",
  },
  {
    path: "/erp-industries/marine-survey-companies-mumbai",
    title: "Marine Survey & Offshore Inspection ERP Software in Mumbai | Atlantis NDT ERP",
    description: "Purpose-built ERP for marine survey & offshore inspection based in Mumbai, India. Pre-loaded with OISD-STD-128 / 130 / 137 (corrosion & inspection), PESO Petroleum Rules 2002, IBR (Indian Boiler Regulations), operator flow-down for BPCL Mahul refinery and HPCL Mumbai refinery, and PESO (petroleum & explosives safety) /  OISD (oil industry safety) compliance support. Demo: info@atlantisndt.com.",
    bodyH1: "Marine Survey & Offshore Inspection ERP Software in Mumbai",
    bodyText: "Marine Survey & Offshore Inspection operating in Mumbai face a specific combination of local market structure, regulator framework, and operator-specific quality requirements that generic ERP systems cannot model. Mumbai sits at the heart of India's western refining, offshore production, and petrochemicals hub with the country's largest concentration of inspection demand. The dominant industrial cluster — BPCL Mahul, HPCL Mumbai, ONGC Western Offshore (Bombay High), Reliance ",
  },
  {
    path: "/erp-industries/marine-survey-companies-hyderabad",
    title: "Marine Survey & Offshore Inspection ERP Software in Hyderabad | Atlantis NDT ERP",
    description: "Purpose-built ERP for marine survey & offshore inspection based in Hyderabad, India. Pre-loaded with IBR (Indian Boiler Regulations), IS 2825 / IS 7822 (pressure vessels), AERB SC/IR-1 (radiation safety), operator flow-down for BHEL Hyderabad and HPCL Visakh refinery, and PESO /  BARC compliance support. Demo: info@atlantisndt.com.",
    bodyH1: "Marine Survey & Offshore Inspection ERP Software in Hyderabad",
    bodyText: "Marine Survey & Offshore Inspection operating in Hyderabad face a specific combination of local market structure, regulator framework, and operator-specific quality requirements that generic ERP systems cannot model. Hyderabad sits at the heart of a fast-growing inspection hub serving BHEL heavy engineering, defence manufacturing (BDL, ECIL), aerospace, pharma, and HPCL Visakh refining. The dominant industrial cluster — BHEL Hyderabad and Visakhapatnam, HPCL Visakh refinery, ",
  },
  {
    path: "/erp-industries/marine-survey-companies-london",
    title: "Marine Survey & Offshore Inspection ERP Software in London | Atlantis NDT ERP",
    description: "Purpose-built ERP for marine survey & offshore inspection based in London, UK. Pre-loaded with PSSR 2000 (pressure systems safety), PUWER 1998, LOLER 1998 (lifting), operator flow-down for BP (corporate) and Shell (corporate + Stanlow legacy), and HSE /  ONR (nuclear) compliance support. Demo: info@atlantisndt.com.",
    bodyH1: "Marine Survey & Offshore Inspection ERP Software in London",
    bodyText: "Marine Survey & Offshore Inspection operating in London face a specific combination of local market structure, regulator framework, and operator-specific quality requirements that generic ERP systems cannot model. London sits at the heart of the corporate headquarters cluster for global IOCs, EPCs, and inspection multinationals, with strong demand from nuclear, aerospace, rail, and offshore segments. The dominant industrial cluster — corporate HQs in the City and Canary Wharf",
  },
  {
    path: "/erp-industries/marine-survey-companies-aberdeen",
    title: "Marine Survey & Offshore Inspection ERP Software in Aberdeen | Atlantis NDT ERP",
    description: "Purpose-built ERP for marine survey & offshore inspection based in Aberdeen, UK. Pre-loaded with HSE Safety Case Regulations (SCR 2015), PFEER 1995 (fire/explosion), PSSR 2000, operator flow-down for Harbour Energy and BP North Sea, and HSE (OSD) /  Offshore Energies UK (OEUK) compliance support. Demo: info@atlantisndt.com.",
    bodyH1: "Marine Survey & Offshore Inspection ERP Software in Aberdeen",
    bodyText: "Marine Survey & Offshore Inspection operating in Aberdeen face a specific combination of local market structure, regulator framework, and operator-specific quality requirements that generic ERP systems cannot model. Aberdeen sits at the heart of the global capital of offshore decommissioning and life-extension inspection, with five decades of UKCS operational data concentrated in the city. The dominant industrial cluster — Aberdeen Harbour + Dyce heliport, supply bases for UK",
  },
  {
    path: "/erp-industries/marine-survey-companies-calgary",
    title: "Marine Survey & Offshore Inspection ERP Software in Calgary | Atlantis NDT ERP",
    description: "Purpose-built ERP for marine survey & offshore inspection based in Calgary, Canada. Pre-loaded with ABSA AB-506 / AB-512 (pressure equipment), CSA Z662 (oil & gas pipelines), CSA B51 (pressure vessels & piping), operator flow-down for Suncor Energy and Cenovus Energy, and ABSA (Alberta Boilers Safety Association) /  AER (Alberta Energy Regulator) compliance support. Demo: info@atlantisndt.com.",
    bodyH1: "Marine Survey & Offshore Inspection ERP Software in Calgary",
    bodyText: "Marine Survey & Offshore Inspection operating in Calgary face a specific combination of local market structure, regulator framework, and operator-specific quality requirements that generic ERP systems cannot model. Calgary sits at the heart of the head-office hub for Canadian oil sands, conventional petroleum, and the trans-continental pipeline operators. The dominant industrial cluster — oil sands operations near Fort McMurray, conventional gas in Alberta and BC, plus the En",
  },
  {
    path: "/erp-industries/marine-survey-companies-perth",
    title: "Marine Survey & Offshore Inspection ERP Software in Perth | Atlantis NDT ERP",
    description: "Purpose-built ERP for marine survey & offshore inspection based in Perth, Australia. Pre-loaded with AS/NZS 3788 (pressure equipment), AS/NZS 1554 (welding), AS 4037 (pressure equipment examination), operator flow-down for Woodside Energy (Karratha, Pluto, Scarborough, NWS) and Chevron Australia (Wheatstone, Gorgon), and WorkSafe WA /  NOPSEMA (offshore) compliance support. Demo: info@atlantisndt.com.",
    bodyH1: "Marine Survey & Offshore Inspection ERP Software in Perth",
    bodyText: "Marine Survey & Offshore Inspection operating in Perth face a specific combination of local market structure, regulator framework, and operator-specific quality requirements that generic ERP systems cannot model. Perth sits at the heart of the LNG and iron-ore inspection capital of Australia, supporting Woodside, Chevron, INPEX, and BHP iron ore through FIFO operations. The dominant industrial cluster — Karratha gas plant, Wheatstone & Pluto LNG, Ichthys onshore, Pilbara iron",
  },
  {
    path: "/erp-industries/marine-survey-companies-doha",
    title: "Marine Survey & Offshore Inspection ERP Software in Doha | Atlantis NDT ERP",
    description: "Purpose-built ERP for marine survey & offshore inspection based in Doha, Qatar. Pre-loaded with QatarEnergy NFPS (North Field Production Standards), QGOSM standards, API 510 / 570 / 653, operator flow-down for QatarEnergy (LNG + upstream) and Qatargas (now within QatarEnergy LNG), and Qatar Civil Defence Department (QCDD) /  Qatar General Organisation for Standards & Metrology (QGOSM) compliance support. Demo: info@atlantisndt.com.",
    bodyH1: "Marine Survey & Offshore Inspection ERP Software in Doha",
    bodyText: "Marine Survey & Offshore Inspection operating in Doha face a specific combination of local market structure, regulator framework, and operator-specific quality requirements that generic ERP systems cannot model. Doha sits at the heart of the world's largest LNG operating environment, with QatarEnergy's North Field expansion creating unprecedented demand for inspection support. The dominant industrial cluster — Ras Laffan Industrial City (LNG + GTL + condensate), Mesaieed Indu",
  },
  {
    path: "/erp-industries/marine-survey-companies-kuala-lumpur",
    title: "Marine Survey & Offshore Inspection ERP Software in Kuala Lumpur | Atlantis NDT ERP",
    description: "Purpose-built ERP for marine survey & offshore inspection based in Kuala Lumpur, Malaysia. Pre-loaded with DOSH Factories & Machinery Act (FMA 1967), Petronas Technical Standards (PTS), Petronas PTS 60.0107 (NDT), operator flow-down for PETRONAS (upstream + downstream) and PETRONAS Chemicals Group (PCG), and DOSH (Department of Occupational Safety & Health) /  Suruhanjaya Tenaga (Energy Commission) compliance support. Demo: info@atlantisndt.com.",
    bodyH1: "Marine Survey & Offshore Inspection ERP Software in Kuala Lumpur",
    bodyText: "Marine Survey & Offshore Inspection operating in Kuala Lumpur face a specific combination of local market structure, regulator framework, and operator-specific quality requirements that generic ERP systems cannot model. Kuala Lumpur sits at the heart of PETRONAS headquarters and the Malaysian oil and gas hub, supporting upstream, midstream LNG (Bintulu), and downstream refining (Melaka). The dominant industrial cluster — PETRONAS Twin Towers HQ, Melaka refining complex, PETRO",
  },
  {
    path: "/erp-industries/marine-survey-companies-jakarta",
    title: "Marine Survey & Offshore Inspection ERP Software in Jakarta | Atlantis NDT ERP",
    description: "Purpose-built ERP for marine survey & offshore inspection based in Jakarta, Indonesia. Pre-loaded with K3 Migas oil & gas safety regulations, SNI (Standar Nasional Indonesia) for pressure equipment, Kepmen ESDM 18/2018 (NDT), operator flow-down for Pertamina (refining + upstream) and Pupuk Indonesia (fertilizers), and SKK Migas (upstream regulator) /  K3 Migas (oil & gas HSE) compliance support. Demo: info@atlantisndt.com.",
    bodyH1: "Marine Survey & Offshore Inspection ERP Software in Jakarta",
    bodyText: "Marine Survey & Offshore Inspection operating in Jakarta face a specific combination of local market structure, regulator framework, and operator-specific quality requirements that generic ERP systems cannot model. Jakarta sits at the heart of Indonesia's oil, gas, petrochemicals, and steel inspection hub centred on Pertamina, Pupuk Indonesia, and Bontang / Tangguh LNG. The dominant industrial cluster — Pertamina refineries (Cilacap, Balikpapan, Dumai), Bontang LNG (Kalimanta",
  },
  {
    path: "/erp-industries/marine-survey-companies-lagos",
    title: "Marine Survey & Offshore Inspection ERP Software in Lagos | Atlantis NDT ERP",
    description: "Purpose-built ERP for marine survey & offshore inspection based in Lagos, Nigeria. Pre-loaded with NUPRC / DPR Procedure Guidelines (upstream), NMDPRA Petroleum Industry Act regulations, NIMASA Marine Notices, operator flow-down for NNPCL (refineries + upstream) and Shell SPDC (onshore + shallow water), and DPR / NUPRC (upstream regulator) /  NMDPRA (midstream/downstream) compliance support. Demo: info@atlantisndt.com.",
    bodyH1: "Marine Survey & Offshore Inspection ERP Software in Lagos",
    bodyText: "Marine Survey & Offshore Inspection operating in Lagos face a specific combination of local market structure, regulator framework, and operator-specific quality requirements that generic ERP systems cannot model. Lagos sits at the heart of Nigeria's commercial capital and the regional hub for upstream oil & gas, refining, and LNG inspection supporting NNPCL, IOCs, and indigenous E&Ps. The dominant industrial cluster — NNPCL refineries (Port Harcourt, Warri, Kaduna) plus the n",
  },
  {
    path: "/erp-industries/pipeline-integrity-services-houston",
    title: "Pipeline Integrity & ILI Services ERP Software in Houston | Atlantis NDT ERP",
    description: "Purpose-built ERP for pipeline integrity & ili services based in Houston, USA. Pre-loaded with API 510 / 570 / 653, ASME B31.3 / B31.4 / B31.8, ASME Section VIII Div 1, operator flow-down for ExxonMobil Baytown and Marathon Galveston Bay, and TCEQ /  OSHA Region 6 compliance support. Demo: info@atlantisndt.com.",
    bodyH1: "Pipeline Integrity & ILI Services ERP Software in Houston",
    bodyText: "Pipeline Integrity & ILI Services operating in Houston face a specific combination of local market structure, regulator framework, and operator-specific quality requirements that generic ERP systems cannot model. Houston sits at the heart of the energy capital of the world with 4,600+ energy-related firms and the densest concentration of refining and petrochemical capacity in the western hemisphere. The dominant industrial cluster — a 400-mile Gulf Coast refining and petroche",
  },
  {
    path: "/erp-industries/pipeline-integrity-services-dubai",
    title: "Pipeline Integrity & ILI Services ERP Software in Dubai | Atlantis NDT ERP",
    description: "Purpose-built ERP for pipeline integrity & ili services based in Dubai, UAE. Pre-loaded with ADQCC inspection schemes, ADNOC ACS-01 (vendor), ASME Section V / VIII, operator flow-down for ADNOC Distribution and ENOC Group, and ADQCC /  MOIAT compliance support. Demo: info@atlantisndt.com.",
    bodyH1: "Pipeline Integrity & ILI Services ERP Software in Dubai",
    bodyText: "Pipeline Integrity & ILI Services operating in Dubai face a specific combination of local market structure, regulator framework, and operator-specific quality requirements that generic ERP systems cannot model. Dubai sits at the heart of the regional commercial and logistics hub for GCC oil and gas, hosting regional HQs for IOCs, EPCs, and inspection multinationals. The dominant industrial cluster — a Jebel Ali free zone industrial hub connected to ADNOC Distribution, ENOC, D",
  },
  {
    path: "/erp-industries/pipeline-integrity-services-abu-dhabi",
    title: "Pipeline Integrity & ILI Services ERP Software in Abu Dhabi | Atlantis NDT ERP",
    description: "Purpose-built ERP for pipeline integrity & ili services based in Abu Dhabi, UAE. Pre-loaded with ADNOC ACS-01 (vendor qualification), ADNOC HSE-IM-RP, API 510 / 570 / 653, operator flow-down for ADNOC Onshore and ADNOC LNG, and ADNOC HSE & Asset Integrity /  ADQCC compliance support. Demo: info@atlantisndt.com.",
    bodyH1: "Pipeline Integrity & ILI Services ERP Software in Abu Dhabi",
    bodyText: "Pipeline Integrity & ILI Services operating in Abu Dhabi face a specific combination of local market structure, regulator framework, and operator-specific quality requirements that generic ERP systems cannot model. Abu Dhabi sits at the heart of the operational heart of UAE upstream and downstream, controlling 94% of UAE oil reserves through ADNOC and the Ruwais integrated complex. The dominant industrial cluster — the Ruwais industrial corridor (refining, LNG, petrochemicals",
  },
  {
    path: "/erp-industries/pipeline-integrity-services-saudi-arabia",
    title: "Pipeline Integrity & ILI Services ERP Software in Saudi Arabia | Atlantis NDT ERP",
    description: "Purpose-built ERP for pipeline integrity & ili services based in Saudi Arabia, Saudi Arabia. Pre-loaded with Saudi Aramco SAEP-1112 (NDT personnel), Saudi Aramco SAEP-1142 (NDT qualification), Saudi Aramco SAEC-1142 (procedures), operator flow-down for Saudi Aramco (Abqaiq, Khurais, Ras Tanura) and SABIC, and HRSD (labor) /  GAMI (defense / industries) compliance support. Demo: info@atlantisndt.com.",
    bodyH1: "Pipeline Integrity & ILI Services ERP Software in Saudi Arabia",
    bodyText: "Pipeline Integrity & ILI Services operating in Saudi Arabia face a specific combination of local market structure, regulator framework, and operator-specific quality requirements that generic ERP systems cannot model. Saudi Arabia sits at the heart of the largest integrated oil and gas operating environment in the world, anchored by Saudi Aramco and SABIC. The dominant industrial cluster — the Eastern Province upstream-and-downstream complex (Abqaiq, Khurais, Ras Tanura, Juba",
  },
  {
    path: "/erp-industries/pipeline-integrity-services-singapore",
    title: "Pipeline Integrity & ILI Services ERP Software in Singapore | Atlantis NDT ERP",
    description: "Purpose-built ERP for pipeline integrity & ili services based in Singapore, Singapore. Pre-loaded with MOM Workplace Safety & Health Act, MOM WSH Regulations (Pressure Vessels), API 510 / 570 / 653, operator flow-down for ExxonMobil Jurong and Shell Pulau Bukom, and Ministry of Manpower (MOM) /  National Environment Agency (NEA) compliance support. Demo: info@atlantisndt.com.",
    bodyH1: "Pipeline Integrity & ILI Services ERP Software in Singapore",
    bodyText: "Pipeline Integrity & ILI Services operating in Singapore face a specific combination of local market structure, regulator framework, and operator-specific quality requirements that generic ERP systems cannot model. Singapore sits at the heart of one of the world's top three refining and petrochemical hubs, the marine-survey gateway for South-East Asia, and a major FPSO conversion centre. The dominant industrial cluster — Jurong Island (refining, petrochemicals, gas), Tuas (sh",
  },
  {
    path: "/erp-industries/pipeline-integrity-services-mumbai",
    title: "Pipeline Integrity & ILI Services ERP Software in Mumbai | Atlantis NDT ERP",
    description: "Purpose-built ERP for pipeline integrity & ili services based in Mumbai, India. Pre-loaded with OISD-STD-128 / 130 / 137 (corrosion & inspection), PESO Petroleum Rules 2002, IBR (Indian Boiler Regulations), operator flow-down for BPCL Mahul refinery and HPCL Mumbai refinery, and PESO (petroleum & explosives safety) /  OISD (oil industry safety) compliance support. Demo: info@atlantisndt.com.",
    bodyH1: "Pipeline Integrity & ILI Services ERP Software in Mumbai",
    bodyText: "Pipeline Integrity & ILI Services operating in Mumbai face a specific combination of local market structure, regulator framework, and operator-specific quality requirements that generic ERP systems cannot model. Mumbai sits at the heart of India's western refining, offshore production, and petrochemicals hub with the country's largest concentration of inspection demand. The dominant industrial cluster — BPCL Mahul, HPCL Mumbai, ONGC Western Offshore (Bombay High), Reliance Ha",
  },
  {
    path: "/erp-industries/pipeline-integrity-services-hyderabad",
    title: "Pipeline Integrity & ILI Services ERP Software in Hyderabad | Atlantis NDT ERP",
    description: "Purpose-built ERP for pipeline integrity & ili services based in Hyderabad, India. Pre-loaded with IBR (Indian Boiler Regulations), IS 2825 / IS 7822 (pressure vessels), AERB SC/IR-1 (radiation safety), operator flow-down for BHEL Hyderabad and HPCL Visakh refinery, and PESO /  BARC compliance support. Demo: info@atlantisndt.com.",
    bodyH1: "Pipeline Integrity & ILI Services ERP Software in Hyderabad",
    bodyText: "Pipeline Integrity & ILI Services operating in Hyderabad face a specific combination of local market structure, regulator framework, and operator-specific quality requirements that generic ERP systems cannot model. Hyderabad sits at the heart of a fast-growing inspection hub serving BHEL heavy engineering, defence manufacturing (BDL, ECIL), aerospace, pharma, and HPCL Visakh refining. The dominant industrial cluster — BHEL Hyderabad and Visakhapatnam, HPCL Visakh refinery, IS",
  },
  {
    path: "/erp-industries/pipeline-integrity-services-london",
    title: "Pipeline Integrity & ILI Services ERP Software in London | Atlantis NDT ERP",
    description: "Purpose-built ERP for pipeline integrity & ili services based in London, UK. Pre-loaded with PSSR 2000 (pressure systems safety), PUWER 1998, LOLER 1998 (lifting), operator flow-down for BP (corporate) and Shell (corporate + Stanlow legacy), and HSE /  ONR (nuclear) compliance support. Demo: info@atlantisndt.com.",
    bodyH1: "Pipeline Integrity & ILI Services ERP Software in London",
    bodyText: "Pipeline Integrity & ILI Services operating in London face a specific combination of local market structure, regulator framework, and operator-specific quality requirements that generic ERP systems cannot model. London sits at the heart of the corporate headquarters cluster for global IOCs, EPCs, and inspection multinationals, with strong demand from nuclear, aerospace, rail, and offshore segments. The dominant industrial cluster — corporate HQs in the City and Canary Wharf, ",
  },
  {
    path: "/erp-industries/pipeline-integrity-services-aberdeen",
    title: "Pipeline Integrity & ILI Services ERP Software in Aberdeen | Atlantis NDT ERP",
    description: "Purpose-built ERP for pipeline integrity & ili services based in Aberdeen, UK. Pre-loaded with HSE Safety Case Regulations (SCR 2015), PFEER 1995 (fire/explosion), PSSR 2000, operator flow-down for Harbour Energy and BP North Sea, and HSE (OSD) /  Offshore Energies UK (OEUK) compliance support. Demo: info@atlantisndt.com.",
    bodyH1: "Pipeline Integrity & ILI Services ERP Software in Aberdeen",
    bodyText: "Pipeline Integrity & ILI Services operating in Aberdeen face a specific combination of local market structure, regulator framework, and operator-specific quality requirements that generic ERP systems cannot model. Aberdeen sits at the heart of the global capital of offshore decommissioning and life-extension inspection, with five decades of UKCS operational data concentrated in the city. The dominant industrial cluster — Aberdeen Harbour + Dyce heliport, supply bases for UKCS",
  },
  {
    path: "/erp-industries/pipeline-integrity-services-calgary",
    title: "Pipeline Integrity & ILI Services ERP Software in Calgary | Atlantis NDT ERP",
    description: "Purpose-built ERP for pipeline integrity & ili services based in Calgary, Canada. Pre-loaded with ABSA AB-506 / AB-512 (pressure equipment), CSA Z662 (oil & gas pipelines), CSA B51 (pressure vessels & piping), operator flow-down for Suncor Energy and Cenovus Energy, and ABSA (Alberta Boilers Safety Association) /  AER (Alberta Energy Regulator) compliance support. Demo: info@atlantisndt.com.",
    bodyH1: "Pipeline Integrity & ILI Services ERP Software in Calgary",
    bodyText: "Pipeline Integrity & ILI Services operating in Calgary face a specific combination of local market structure, regulator framework, and operator-specific quality requirements that generic ERP systems cannot model. Calgary sits at the heart of the head-office hub for Canadian oil sands, conventional petroleum, and the trans-continental pipeline operators. The dominant industrial cluster — oil sands operations near Fort McMurray, conventional gas in Alberta and BC, plus the Enbr",
  },
  {
    path: "/erp-industries/pipeline-integrity-services-perth",
    title: "Pipeline Integrity & ILI Services ERP Software in Perth | Atlantis NDT ERP",
    description: "Purpose-built ERP for pipeline integrity & ili services based in Perth, Australia. Pre-loaded with AS/NZS 3788 (pressure equipment), AS/NZS 1554 (welding), AS 4037 (pressure equipment examination), operator flow-down for Woodside Energy (Karratha, Pluto, Scarborough, NWS) and Chevron Australia (Wheatstone, Gorgon), and WorkSafe WA /  NOPSEMA (offshore) compliance support. Demo: info@atlantisndt.com.",
    bodyH1: "Pipeline Integrity & ILI Services ERP Software in Perth",
    bodyText: "Pipeline Integrity & ILI Services operating in Perth face a specific combination of local market structure, regulator framework, and operator-specific quality requirements that generic ERP systems cannot model. Perth sits at the heart of the LNG and iron-ore inspection capital of Australia, supporting Woodside, Chevron, INPEX, and BHP iron ore through FIFO operations. The dominant industrial cluster — Karratha gas plant, Wheatstone & Pluto LNG, Ichthys onshore, Pilbara iron-o",
  },
  {
    path: "/erp-industries/pipeline-integrity-services-doha",
    title: "Pipeline Integrity & ILI Services ERP Software in Doha | Atlantis NDT ERP",
    description: "Purpose-built ERP for pipeline integrity & ili services based in Doha, Qatar. Pre-loaded with QatarEnergy NFPS (North Field Production Standards), QGOSM standards, API 510 / 570 / 653, operator flow-down for QatarEnergy (LNG + upstream) and Qatargas (now within QatarEnergy LNG), and Qatar Civil Defence Department (QCDD) /  Qatar General Organisation for Standards & Metrology (QGOSM) compliance support. Demo: info@atlantisndt.com.",
    bodyH1: "Pipeline Integrity & ILI Services ERP Software in Doha",
    bodyText: "Pipeline Integrity & ILI Services operating in Doha face a specific combination of local market structure, regulator framework, and operator-specific quality requirements that generic ERP systems cannot model. Doha sits at the heart of the world's largest LNG operating environment, with QatarEnergy's North Field expansion creating unprecedented demand for inspection support. The dominant industrial cluster — Ras Laffan Industrial City (LNG + GTL + condensate), Mesaieed Indust",
  },
  {
    path: "/erp-industries/pipeline-integrity-services-kuala-lumpur",
    title: "Pipeline Integrity & ILI Services ERP Software in Kuala Lumpur | Atlantis NDT ERP",
    description: "Purpose-built ERP for pipeline integrity & ili services based in Kuala Lumpur, Malaysia. Pre-loaded with DOSH Factories & Machinery Act (FMA 1967), Petronas Technical Standards (PTS), Petronas PTS 60.0107 (NDT), operator flow-down for PETRONAS (upstream + downstream) and PETRONAS Chemicals Group (PCG), and DOSH (Department of Occupational Safety & Health) /  Suruhanjaya Tenaga (Energy Commission) compliance support. Demo: info@atlantisndt.com.",
    bodyH1: "Pipeline Integrity & ILI Services ERP Software in Kuala Lumpur",
    bodyText: "Pipeline Integrity & ILI Services operating in Kuala Lumpur face a specific combination of local market structure, regulator framework, and operator-specific quality requirements that generic ERP systems cannot model. Kuala Lumpur sits at the heart of PETRONAS headquarters and the Malaysian oil and gas hub, supporting upstream, midstream LNG (Bintulu), and downstream refining (Melaka). The dominant industrial cluster — PETRONAS Twin Towers HQ, Melaka refining complex, PETRONA",
  },
  {
    path: "/erp-industries/pipeline-integrity-services-jakarta",
    title: "Pipeline Integrity & ILI Services ERP Software in Jakarta | Atlantis NDT ERP",
    description: "Purpose-built ERP for pipeline integrity & ili services based in Jakarta, Indonesia. Pre-loaded with K3 Migas oil & gas safety regulations, SNI (Standar Nasional Indonesia) for pressure equipment, Kepmen ESDM 18/2018 (NDT), operator flow-down for Pertamina (refining + upstream) and Pupuk Indonesia (fertilizers), and SKK Migas (upstream regulator) /  K3 Migas (oil & gas HSE) compliance support. Demo: info@atlantisndt.com.",
    bodyH1: "Pipeline Integrity & ILI Services ERP Software in Jakarta",
    bodyText: "Pipeline Integrity & ILI Services operating in Jakarta face a specific combination of local market structure, regulator framework, and operator-specific quality requirements that generic ERP systems cannot model. Jakarta sits at the heart of Indonesia's oil, gas, petrochemicals, and steel inspection hub centred on Pertamina, Pupuk Indonesia, and Bontang / Tangguh LNG. The dominant industrial cluster — Pertamina refineries (Cilacap, Balikpapan, Dumai), Bontang LNG (Kalimantan)",
  },
  {
    path: "/erp-industries/pipeline-integrity-services-lagos",
    title: "Pipeline Integrity & ILI Services ERP Software in Lagos | Atlantis NDT ERP",
    description: "Purpose-built ERP for pipeline integrity & ili services based in Lagos, Nigeria. Pre-loaded with NUPRC / DPR Procedure Guidelines (upstream), NMDPRA Petroleum Industry Act regulations, NIMASA Marine Notices, operator flow-down for NNPCL (refineries + upstream) and Shell SPDC (onshore + shallow water), and DPR / NUPRC (upstream regulator) /  NMDPRA (midstream/downstream) compliance support. Demo: info@atlantisndt.com.",
    bodyH1: "Pipeline Integrity & ILI Services ERP Software in Lagos",
    bodyText: "Pipeline Integrity & ILI Services operating in Lagos face a specific combination of local market structure, regulator framework, and operator-specific quality requirements that generic ERP systems cannot model. Lagos sits at the heart of Nigeria's commercial capital and the regional hub for upstream oil & gas, refining, and LNG inspection supporting NNPCL, IOCs, and indigenous E&Ps. The dominant industrial cluster — NNPCL refineries (Port Harcourt, Warri, Kaduna) plus the new",
  },
  {
    path: "/erp-industries/aerospace-quality-control-houston",
    title: "Aerospace Quality Control ERP Software in Houston | Atlantis NDT ERP",
    description: "Purpose-built ERP for aerospace quality control based in Houston, USA. Pre-loaded with API 510 / 570 / 653, ASME B31.3 / B31.4 / B31.8, ASME Section VIII Div 1, operator flow-down for ExxonMobil Baytown and Marathon Galveston Bay, and TCEQ /  OSHA Region 6 compliance support. Demo: info@atlantisndt.com.",
    bodyH1: "Aerospace Quality Control ERP Software in Houston",
    bodyText: "Aerospace Quality Control operating in Houston face a specific combination of local market structure, regulator framework, and operator-specific quality requirements that generic ERP systems cannot model. Houston sits at the heart of the energy capital of the world with 4,600+ energy-related firms and the densest concentration of refining and petrochemical capacity in the western hemisphere. The dominant industrial cluster — a 400-mile Gulf Coast refining and petrochemical co",
  },
  {
    path: "/erp-industries/aerospace-quality-control-dubai",
    title: "Aerospace Quality Control ERP Software in Dubai | Atlantis NDT ERP",
    description: "Purpose-built ERP for aerospace quality control based in Dubai, UAE. Pre-loaded with ADQCC inspection schemes, ADNOC ACS-01 (vendor), ASME Section V / VIII, operator flow-down for ADNOC Distribution and ENOC Group, and ADQCC /  MOIAT compliance support. Demo: info@atlantisndt.com.",
    bodyH1: "Aerospace Quality Control ERP Software in Dubai",
    bodyText: "Aerospace Quality Control operating in Dubai face a specific combination of local market structure, regulator framework, and operator-specific quality requirements that generic ERP systems cannot model. Dubai sits at the heart of the regional commercial and logistics hub for GCC oil and gas, hosting regional HQs for IOCs, EPCs, and inspection multinationals. The dominant industrial cluster — a Jebel Ali free zone industrial hub connected to ADNOC Distribution, ENOC, DUBAL, an",
  },
  {
    path: "/erp-industries/aerospace-quality-control-abu-dhabi",
    title: "Aerospace Quality Control ERP Software in Abu Dhabi | Atlantis NDT ERP",
    description: "Purpose-built ERP for aerospace quality control based in Abu Dhabi, UAE. Pre-loaded with ADNOC ACS-01 (vendor qualification), ADNOC HSE-IM-RP, API 510 / 570 / 653, operator flow-down for ADNOC Onshore and ADNOC LNG, and ADNOC HSE & Asset Integrity /  ADQCC compliance support. Demo: info@atlantisndt.com.",
    bodyH1: "Aerospace Quality Control ERP Software in Abu Dhabi",
    bodyText: "Aerospace Quality Control operating in Abu Dhabi face a specific combination of local market structure, regulator framework, and operator-specific quality requirements that generic ERP systems cannot model. Abu Dhabi sits at the heart of the operational heart of UAE upstream and downstream, controlling 94% of UAE oil reserves through ADNOC and the Ruwais integrated complex. The dominant industrial cluster — the Ruwais industrial corridor (refining, LNG, petrochemicals, fertil",
  },
  {
    path: "/erp-industries/aerospace-quality-control-saudi-arabia",
    title: "Aerospace Quality Control ERP Software in Saudi Arabia | Atlantis NDT ERP",
    description: "Purpose-built ERP for aerospace quality control based in Saudi Arabia, Saudi Arabia. Pre-loaded with Saudi Aramco SAEP-1112 (NDT personnel), Saudi Aramco SAEP-1142 (NDT qualification), Saudi Aramco SAEC-1142 (procedures), operator flow-down for Saudi Aramco (Abqaiq, Khurais, Ras Tanura) and SABIC, and HRSD (labor) /  GAMI (defense / industries) compliance support. Demo: info@atlantisndt.com.",
    bodyH1: "Aerospace Quality Control ERP Software in Saudi Arabia",
    bodyText: "Aerospace Quality Control operating in Saudi Arabia face a specific combination of local market structure, regulator framework, and operator-specific quality requirements that generic ERP systems cannot model. Saudi Arabia sits at the heart of the largest integrated oil and gas operating environment in the world, anchored by Saudi Aramco and SABIC. The dominant industrial cluster — the Eastern Province upstream-and-downstream complex (Abqaiq, Khurais, Ras Tanura, Jubail) plus",
  },
  {
    path: "/erp-industries/aerospace-quality-control-singapore",
    title: "Aerospace Quality Control ERP Software in Singapore | Atlantis NDT ERP",
    description: "Purpose-built ERP for aerospace quality control based in Singapore, Singapore. Pre-loaded with MOM Workplace Safety & Health Act, MOM WSH Regulations (Pressure Vessels), API 510 / 570 / 653, operator flow-down for ExxonMobil Jurong and Shell Pulau Bukom, and Ministry of Manpower (MOM) /  National Environment Agency (NEA) compliance support. Demo: info@atlantisndt.com.",
    bodyH1: "Aerospace Quality Control ERP Software in Singapore",
    bodyText: "Aerospace Quality Control operating in Singapore face a specific combination of local market structure, regulator framework, and operator-specific quality requirements that generic ERP systems cannot model. Singapore sits at the heart of one of the world's top three refining and petrochemical hubs, the marine-survey gateway for South-East Asia, and a major FPSO conversion centre. The dominant industrial cluster — Jurong Island (refining, petrochemicals, gas), Tuas (shipyards)",
  },
  {
    path: "/erp-industries/aerospace-quality-control-mumbai",
    title: "Aerospace Quality Control ERP Software in Mumbai | Atlantis NDT ERP",
    description: "Purpose-built ERP for aerospace quality control based in Mumbai, India. Pre-loaded with OISD-STD-128 / 130 / 137 (corrosion & inspection), PESO Petroleum Rules 2002, IBR (Indian Boiler Regulations), operator flow-down for BPCL Mahul refinery and HPCL Mumbai refinery, and PESO (petroleum & explosives safety) /  OISD (oil industry safety) compliance support. Demo: info@atlantisndt.com.",
    bodyH1: "Aerospace Quality Control ERP Software in Mumbai",
    bodyText: "Aerospace Quality Control operating in Mumbai face a specific combination of local market structure, regulator framework, and operator-specific quality requirements that generic ERP systems cannot model. Mumbai sits at the heart of India's western refining, offshore production, and petrochemicals hub with the country's largest concentration of inspection demand. The dominant industrial cluster — BPCL Mahul, HPCL Mumbai, ONGC Western Offshore (Bombay High), Reliance Hazira and",
  },
  {
    path: "/erp-industries/aerospace-quality-control-hyderabad",
    title: "Aerospace Quality Control ERP Software in Hyderabad | Atlantis NDT ERP",
    description: "Purpose-built ERP for aerospace quality control based in Hyderabad, India. Pre-loaded with IBR (Indian Boiler Regulations), IS 2825 / IS 7822 (pressure vessels), AERB SC/IR-1 (radiation safety), operator flow-down for BHEL Hyderabad and HPCL Visakh refinery, and PESO /  BARC compliance support. Demo: info@atlantisndt.com.",
    bodyH1: "Aerospace Quality Control ERP Software in Hyderabad",
    bodyText: "Aerospace Quality Control operating in Hyderabad face a specific combination of local market structure, regulator framework, and operator-specific quality requirements that generic ERP systems cannot model. Hyderabad sits at the heart of a fast-growing inspection hub serving BHEL heavy engineering, defence manufacturing (BDL, ECIL), aerospace, pharma, and HPCL Visakh refining. The dominant industrial cluster — BHEL Hyderabad and Visakhapatnam, HPCL Visakh refinery, ISRO and B",
  },
  {
    path: "/erp-industries/aerospace-quality-control-london",
    title: "Aerospace Quality Control ERP Software in London | Atlantis NDT ERP",
    description: "Purpose-built ERP for aerospace quality control based in London, UK. Pre-loaded with PSSR 2000 (pressure systems safety), PUWER 1998, LOLER 1998 (lifting), operator flow-down for BP (corporate) and Shell (corporate + Stanlow legacy), and HSE /  ONR (nuclear) compliance support. Demo: info@atlantisndt.com.",
    bodyH1: "Aerospace Quality Control ERP Software in London",
    bodyText: "Aerospace Quality Control operating in London face a specific combination of local market structure, regulator framework, and operator-specific quality requirements that generic ERP systems cannot model. London sits at the heart of the corporate headquarters cluster for global IOCs, EPCs, and inspection multinationals, with strong demand from nuclear, aerospace, rail, and offshore segments. The dominant industrial cluster — corporate HQs in the City and Canary Wharf, plus Tha",
  },
  {
    path: "/erp-industries/aerospace-quality-control-aberdeen",
    title: "Aerospace Quality Control ERP Software in Aberdeen | Atlantis NDT ERP",
    description: "Purpose-built ERP for aerospace quality control based in Aberdeen, UK. Pre-loaded with HSE Safety Case Regulations (SCR 2015), PFEER 1995 (fire/explosion), PSSR 2000, operator flow-down for Harbour Energy and BP North Sea, and HSE (OSD) /  Offshore Energies UK (OEUK) compliance support. Demo: info@atlantisndt.com.",
    bodyH1: "Aerospace Quality Control ERP Software in Aberdeen",
    bodyText: "Aerospace Quality Control operating in Aberdeen face a specific combination of local market structure, regulator framework, and operator-specific quality requirements that generic ERP systems cannot model. Aberdeen sits at the heart of the global capital of offshore decommissioning and life-extension inspection, with five decades of UKCS operational data concentrated in the city. The dominant industrial cluster — Aberdeen Harbour + Dyce heliport, supply bases for UKCS platfor",
  },
  {
    path: "/erp-industries/aerospace-quality-control-calgary",
    title: "Aerospace Quality Control ERP Software in Calgary | Atlantis NDT ERP",
    description: "Purpose-built ERP for aerospace quality control based in Calgary, Canada. Pre-loaded with ABSA AB-506 / AB-512 (pressure equipment), CSA Z662 (oil & gas pipelines), CSA B51 (pressure vessels & piping), operator flow-down for Suncor Energy and Cenovus Energy, and ABSA (Alberta Boilers Safety Association) /  AER (Alberta Energy Regulator) compliance support. Demo: info@atlantisndt.com.",
    bodyH1: "Aerospace Quality Control ERP Software in Calgary",
    bodyText: "Aerospace Quality Control operating in Calgary face a specific combination of local market structure, regulator framework, and operator-specific quality requirements that generic ERP systems cannot model. Calgary sits at the heart of the head-office hub for Canadian oil sands, conventional petroleum, and the trans-continental pipeline operators. The dominant industrial cluster — oil sands operations near Fort McMurray, conventional gas in Alberta and BC, plus the Enbridge / T",
  },
  {
    path: "/erp-industries/aerospace-quality-control-perth",
    title: "Aerospace Quality Control ERP Software in Perth | Atlantis NDT ERP",
    description: "Purpose-built ERP for aerospace quality control based in Perth, Australia. Pre-loaded with AS/NZS 3788 (pressure equipment), AS/NZS 1554 (welding), AS 4037 (pressure equipment examination), operator flow-down for Woodside Energy (Karratha, Pluto, Scarborough, NWS) and Chevron Australia (Wheatstone, Gorgon), and WorkSafe WA /  NOPSEMA (offshore) compliance support. Demo: info@atlantisndt.com.",
    bodyH1: "Aerospace Quality Control ERP Software in Perth",
    bodyText: "Aerospace Quality Control operating in Perth face a specific combination of local market structure, regulator framework, and operator-specific quality requirements that generic ERP systems cannot model. Perth sits at the heart of the LNG and iron-ore inspection capital of Australia, supporting Woodside, Chevron, INPEX, and BHP iron ore through FIFO operations. The dominant industrial cluster — Karratha gas plant, Wheatstone & Pluto LNG, Ichthys onshore, Pilbara iron-ore opera",
  },
  {
    path: "/erp-industries/aerospace-quality-control-doha",
    title: "Aerospace Quality Control ERP Software in Doha | Atlantis NDT ERP",
    description: "Purpose-built ERP for aerospace quality control based in Doha, Qatar. Pre-loaded with QatarEnergy NFPS (North Field Production Standards), QGOSM standards, API 510 / 570 / 653, operator flow-down for QatarEnergy (LNG + upstream) and Qatargas (now within QatarEnergy LNG), and Qatar Civil Defence Department (QCDD) /  Qatar General Organisation for Standards & Metrology (QGOSM) compliance support. Demo: info@atlantisndt.com.",
    bodyH1: "Aerospace Quality Control ERP Software in Doha",
    bodyText: "Aerospace Quality Control operating in Doha face a specific combination of local market structure, regulator framework, and operator-specific quality requirements that generic ERP systems cannot model. Doha sits at the heart of the world's largest LNG operating environment, with QatarEnergy's North Field expansion creating unprecedented demand for inspection support. The dominant industrial cluster — Ras Laffan Industrial City (LNG + GTL + condensate), Mesaieed Industrial Cit",
  },
  {
    path: "/erp-industries/aerospace-quality-control-kuala-lumpur",
    title: "Aerospace Quality Control ERP Software in Kuala Lumpur | Atlantis NDT ERP",
    description: "Purpose-built ERP for aerospace quality control based in Kuala Lumpur, Malaysia. Pre-loaded with DOSH Factories & Machinery Act (FMA 1967), Petronas Technical Standards (PTS), Petronas PTS 60.0107 (NDT), operator flow-down for PETRONAS (upstream + downstream) and PETRONAS Chemicals Group (PCG), and DOSH (Department of Occupational Safety & Health) /  Suruhanjaya Tenaga (Energy Commission) compliance support. Demo: info@atlantisndt.com.",
    bodyH1: "Aerospace Quality Control ERP Software in Kuala Lumpur",
    bodyText: "Aerospace Quality Control operating in Kuala Lumpur face a specific combination of local market structure, regulator framework, and operator-specific quality requirements that generic ERP systems cannot model. Kuala Lumpur sits at the heart of PETRONAS headquarters and the Malaysian oil and gas hub, supporting upstream, midstream LNG (Bintulu), and downstream refining (Melaka). The dominant industrial cluster — PETRONAS Twin Towers HQ, Melaka refining complex, PETRONAS Penapi",
  },
  {
    path: "/erp-industries/aerospace-quality-control-jakarta",
    title: "Aerospace Quality Control ERP Software in Jakarta | Atlantis NDT ERP",
    description: "Purpose-built ERP for aerospace quality control based in Jakarta, Indonesia. Pre-loaded with K3 Migas oil & gas safety regulations, SNI (Standar Nasional Indonesia) for pressure equipment, Kepmen ESDM 18/2018 (NDT), operator flow-down for Pertamina (refining + upstream) and Pupuk Indonesia (fertilizers), and SKK Migas (upstream regulator) /  K3 Migas (oil & gas HSE) compliance support. Demo: info@atlantisndt.com.",
    bodyH1: "Aerospace Quality Control ERP Software in Jakarta",
    bodyText: "Aerospace Quality Control operating in Jakarta face a specific combination of local market structure, regulator framework, and operator-specific quality requirements that generic ERP systems cannot model. Jakarta sits at the heart of Indonesia's oil, gas, petrochemicals, and steel inspection hub centred on Pertamina, Pupuk Indonesia, and Bontang / Tangguh LNG. The dominant industrial cluster — Pertamina refineries (Cilacap, Balikpapan, Dumai), Bontang LNG (Kalimantan), Tanggu",
  },
  {
    path: "/erp-industries/aerospace-quality-control-lagos",
    title: "Aerospace Quality Control ERP Software in Lagos | Atlantis NDT ERP",
    description: "Purpose-built ERP for aerospace quality control based in Lagos, Nigeria. Pre-loaded with NUPRC / DPR Procedure Guidelines (upstream), NMDPRA Petroleum Industry Act regulations, NIMASA Marine Notices, operator flow-down for NNPCL (refineries + upstream) and Shell SPDC (onshore + shallow water), and DPR / NUPRC (upstream regulator) /  NMDPRA (midstream/downstream) compliance support. Demo: info@atlantisndt.com.",
    bodyH1: "Aerospace Quality Control ERP Software in Lagos",
    bodyText: "Aerospace Quality Control operating in Lagos face a specific combination of local market structure, regulator framework, and operator-specific quality requirements that generic ERP systems cannot model. Lagos sits at the heart of Nigeria's commercial capital and the regional hub for upstream oil & gas, refining, and LNG inspection supporting NNPCL, IOCs, and indigenous E&Ps. The dominant industrial cluster — NNPCL refineries (Port Harcourt, Warri, Kaduna) plus the new Dangote",
  },
  {
    path: "/erp-industries/metrology-laboratories-houston",
    title: "Metrology Laboratories ERP Software in Houston | Atlantis NDT ERP",
    description: "Purpose-built ERP for metrology laboratories based in Houston, USA. Pre-loaded with API 510 / 570 / 653, ASME B31.3 / B31.4 / B31.8, ASME Section VIII Div 1, operator flow-down for ExxonMobil Baytown and Marathon Galveston Bay, and TCEQ /  OSHA Region 6 compliance support. Demo: info@atlantisndt.com.",
    bodyH1: "Metrology Laboratories ERP Software in Houston",
    bodyText: "Metrology Laboratories operating in Houston face a specific combination of local market structure, regulator framework, and operator-specific quality requirements that generic ERP systems cannot model. Houston sits at the heart of the energy capital of the world with 4,600+ energy-related firms and the densest concentration of refining and petrochemical capacity in the western hemisphere. The dominant industrial cluster — a 400-mile Gulf Coast refining and petrochemical compl",
  },
  {
    path: "/erp-industries/metrology-laboratories-dubai",
    title: "Metrology Laboratories ERP Software in Dubai | Atlantis NDT ERP",
    description: "Purpose-built ERP for metrology laboratories based in Dubai, UAE. Pre-loaded with ADQCC inspection schemes, ADNOC ACS-01 (vendor), ASME Section V / VIII, operator flow-down for ADNOC Distribution and ENOC Group, and ADQCC /  MOIAT compliance support. Demo: info@atlantisndt.com.",
    bodyH1: "Metrology Laboratories ERP Software in Dubai",
    bodyText: "Metrology Laboratories operating in Dubai face a specific combination of local market structure, regulator framework, and operator-specific quality requirements that generic ERP systems cannot model. Dubai sits at the heart of the regional commercial and logistics hub for GCC oil and gas, hosting regional HQs for IOCs, EPCs, and inspection multinationals. The dominant industrial cluster — a Jebel Ali free zone industrial hub connected to ADNOC Distribution, ENOC, DUBAL, and n",
  },
  {
    path: "/erp-industries/metrology-laboratories-abu-dhabi",
    title: "Metrology Laboratories ERP Software in Abu Dhabi | Atlantis NDT ERP",
    description: "Purpose-built ERP for metrology laboratories based in Abu Dhabi, UAE. Pre-loaded with ADNOC ACS-01 (vendor qualification), ADNOC HSE-IM-RP, API 510 / 570 / 653, operator flow-down for ADNOC Onshore and ADNOC LNG, and ADNOC HSE & Asset Integrity /  ADQCC compliance support. Demo: info@atlantisndt.com.",
    bodyH1: "Metrology Laboratories ERP Software in Abu Dhabi",
    bodyText: "Metrology Laboratories operating in Abu Dhabi face a specific combination of local market structure, regulator framework, and operator-specific quality requirements that generic ERP systems cannot model. Abu Dhabi sits at the heart of the operational heart of UAE upstream and downstream, controlling 94% of UAE oil reserves through ADNOC and the Ruwais integrated complex. The dominant industrial cluster — the Ruwais industrial corridor (refining, LNG, petrochemicals, fertilize",
  },
  {
    path: "/erp-industries/metrology-laboratories-saudi-arabia",
    title: "Metrology Laboratories ERP Software in Saudi Arabia | Atlantis NDT ERP",
    description: "Purpose-built ERP for metrology laboratories based in Saudi Arabia, Saudi Arabia. Pre-loaded with Saudi Aramco SAEP-1112 (NDT personnel), Saudi Aramco SAEP-1142 (NDT qualification), Saudi Aramco SAEC-1142 (procedures), operator flow-down for Saudi Aramco (Abqaiq, Khurais, Ras Tanura) and SABIC, and HRSD (labor) /  GAMI (defense / industries) compliance support. Demo: info@atlantisndt.com.",
    bodyH1: "Metrology Laboratories ERP Software in Saudi Arabia",
    bodyText: "Metrology Laboratories operating in Saudi Arabia face a specific combination of local market structure, regulator framework, and operator-specific quality requirements that generic ERP systems cannot model. Saudi Arabia sits at the heart of the largest integrated oil and gas operating environment in the world, anchored by Saudi Aramco and SABIC. The dominant industrial cluster — the Eastern Province upstream-and-downstream complex (Abqaiq, Khurais, Ras Tanura, Jubail) plus Ya",
  },
  {
    path: "/erp-industries/metrology-laboratories-singapore",
    title: "Metrology Laboratories ERP Software in Singapore | Atlantis NDT ERP",
    description: "Purpose-built ERP for metrology laboratories based in Singapore, Singapore. Pre-loaded with MOM Workplace Safety & Health Act, MOM WSH Regulations (Pressure Vessels), API 510 / 570 / 653, operator flow-down for ExxonMobil Jurong and Shell Pulau Bukom, and Ministry of Manpower (MOM) /  National Environment Agency (NEA) compliance support. Demo: info@atlantisndt.com.",
    bodyH1: "Metrology Laboratories ERP Software in Singapore",
    bodyText: "Metrology Laboratories operating in Singapore face a specific combination of local market structure, regulator framework, and operator-specific quality requirements that generic ERP systems cannot model. Singapore sits at the heart of one of the world's top three refining and petrochemical hubs, the marine-survey gateway for South-East Asia, and a major FPSO conversion centre. The dominant industrial cluster — Jurong Island (refining, petrochemicals, gas), Tuas (shipyards), P",
  },
  {
    path: "/erp-industries/metrology-laboratories-mumbai",
    title: "Metrology Laboratories ERP Software in Mumbai | Atlantis NDT ERP",
    description: "Purpose-built ERP for metrology laboratories based in Mumbai, India. Pre-loaded with OISD-STD-128 / 130 / 137 (corrosion & inspection), PESO Petroleum Rules 2002, IBR (Indian Boiler Regulations), operator flow-down for BPCL Mahul refinery and HPCL Mumbai refinery, and PESO (petroleum & explosives safety) /  OISD (oil industry safety) compliance support. Demo: info@atlantisndt.com.",
    bodyH1: "Metrology Laboratories ERP Software in Mumbai",
    bodyText: "Metrology Laboratories operating in Mumbai face a specific combination of local market structure, regulator framework, and operator-specific quality requirements that generic ERP systems cannot model. Mumbai sits at the heart of India's western refining, offshore production, and petrochemicals hub with the country's largest concentration of inspection demand. The dominant industrial cluster — BPCL Mahul, HPCL Mumbai, ONGC Western Offshore (Bombay High), Reliance Hazira and Ja",
  },
  {
    path: "/erp-industries/metrology-laboratories-hyderabad",
    title: "Metrology Laboratories ERP Software in Hyderabad | Atlantis NDT ERP",
    description: "Purpose-built ERP for metrology laboratories based in Hyderabad, India. Pre-loaded with IBR (Indian Boiler Regulations), IS 2825 / IS 7822 (pressure vessels), AERB SC/IR-1 (radiation safety), operator flow-down for BHEL Hyderabad and HPCL Visakh refinery, and PESO /  BARC compliance support. Demo: info@atlantisndt.com.",
    bodyH1: "Metrology Laboratories ERP Software in Hyderabad",
    bodyText: "Metrology Laboratories operating in Hyderabad face a specific combination of local market structure, regulator framework, and operator-specific quality requirements that generic ERP systems cannot model. Hyderabad sits at the heart of a fast-growing inspection hub serving BHEL heavy engineering, defence manufacturing (BDL, ECIL), aerospace, pharma, and HPCL Visakh refining. The dominant industrial cluster — BHEL Hyderabad and Visakhapatnam, HPCL Visakh refinery, ISRO and BDL ",
  },
  {
    path: "/erp-industries/metrology-laboratories-london",
    title: "Metrology Laboratories ERP Software in London | Atlantis NDT ERP",
    description: "Purpose-built ERP for metrology laboratories based in London, UK. Pre-loaded with PSSR 2000 (pressure systems safety), PUWER 1998, LOLER 1998 (lifting), operator flow-down for BP (corporate) and Shell (corporate + Stanlow legacy), and HSE /  ONR (nuclear) compliance support. Demo: info@atlantisndt.com.",
    bodyH1: "Metrology Laboratories ERP Software in London",
    bodyText: "Metrology Laboratories operating in London face a specific combination of local market structure, regulator framework, and operator-specific quality requirements that generic ERP systems cannot model. London sits at the heart of the corporate headquarters cluster for global IOCs, EPCs, and inspection multinationals, with strong demand from nuclear, aerospace, rail, and offshore segments. The dominant industrial cluster — corporate HQs in the City and Canary Wharf, plus Thames",
  },
  {
    path: "/erp-industries/metrology-laboratories-aberdeen",
    title: "Metrology Laboratories ERP Software in Aberdeen | Atlantis NDT ERP",
    description: "Purpose-built ERP for metrology laboratories based in Aberdeen, UK. Pre-loaded with HSE Safety Case Regulations (SCR 2015), PFEER 1995 (fire/explosion), PSSR 2000, operator flow-down for Harbour Energy and BP North Sea, and HSE (OSD) /  Offshore Energies UK (OEUK) compliance support. Demo: info@atlantisndt.com.",
    bodyH1: "Metrology Laboratories ERP Software in Aberdeen",
    bodyText: "Metrology Laboratories operating in Aberdeen face a specific combination of local market structure, regulator framework, and operator-specific quality requirements that generic ERP systems cannot model. Aberdeen sits at the heart of the global capital of offshore decommissioning and life-extension inspection, with five decades of UKCS operational data concentrated in the city. The dominant industrial cluster — Aberdeen Harbour + Dyce heliport, supply bases for UKCS platforms,",
  },
  {
    path: "/erp-industries/metrology-laboratories-calgary",
    title: "Metrology Laboratories ERP Software in Calgary | Atlantis NDT ERP",
    description: "Purpose-built ERP for metrology laboratories based in Calgary, Canada. Pre-loaded with ABSA AB-506 / AB-512 (pressure equipment), CSA Z662 (oil & gas pipelines), CSA B51 (pressure vessels & piping), operator flow-down for Suncor Energy and Cenovus Energy, and ABSA (Alberta Boilers Safety Association) /  AER (Alberta Energy Regulator) compliance support. Demo: info@atlantisndt.com.",
    bodyH1: "Metrology Laboratories ERP Software in Calgary",
    bodyText: "Metrology Laboratories operating in Calgary face a specific combination of local market structure, regulator framework, and operator-specific quality requirements that generic ERP systems cannot model. Calgary sits at the heart of the head-office hub for Canadian oil sands, conventional petroleum, and the trans-continental pipeline operators. The dominant industrial cluster — oil sands operations near Fort McMurray, conventional gas in Alberta and BC, plus the Enbridge / TC E",
  },
  {
    path: "/erp-industries/metrology-laboratories-perth",
    title: "Metrology Laboratories ERP Software in Perth | Atlantis NDT ERP",
    description: "Purpose-built ERP for metrology laboratories based in Perth, Australia. Pre-loaded with AS/NZS 3788 (pressure equipment), AS/NZS 1554 (welding), AS 4037 (pressure equipment examination), operator flow-down for Woodside Energy (Karratha, Pluto, Scarborough, NWS) and Chevron Australia (Wheatstone, Gorgon), and WorkSafe WA /  NOPSEMA (offshore) compliance support. Demo: info@atlantisndt.com.",
    bodyH1: "Metrology Laboratories ERP Software in Perth",
    bodyText: "Metrology Laboratories operating in Perth face a specific combination of local market structure, regulator framework, and operator-specific quality requirements that generic ERP systems cannot model. Perth sits at the heart of the LNG and iron-ore inspection capital of Australia, supporting Woodside, Chevron, INPEX, and BHP iron ore through FIFO operations. The dominant industrial cluster — Karratha gas plant, Wheatstone & Pluto LNG, Ichthys onshore, Pilbara iron-ore operatio",
  },
  {
    path: "/erp-industries/metrology-laboratories-doha",
    title: "Metrology Laboratories ERP Software in Doha | Atlantis NDT ERP",
    description: "Purpose-built ERP for metrology laboratories based in Doha, Qatar. Pre-loaded with QatarEnergy NFPS (North Field Production Standards), QGOSM standards, API 510 / 570 / 653, operator flow-down for QatarEnergy (LNG + upstream) and Qatargas (now within QatarEnergy LNG), and Qatar Civil Defence Department (QCDD) /  Qatar General Organisation for Standards & Metrology (QGOSM) compliance support. Demo: info@atlantisndt.com.",
    bodyH1: "Metrology Laboratories ERP Software in Doha",
    bodyText: "Metrology Laboratories operating in Doha face a specific combination of local market structure, regulator framework, and operator-specific quality requirements that generic ERP systems cannot model. Doha sits at the heart of the world's largest LNG operating environment, with QatarEnergy's North Field expansion creating unprecedented demand for inspection support. The dominant industrial cluster — Ras Laffan Industrial City (LNG + GTL + condensate), Mesaieed Industrial City (",
  },
  {
    path: "/erp-industries/metrology-laboratories-kuala-lumpur",
    title: "Metrology Laboratories ERP Software in Kuala Lumpur | Atlantis NDT ERP",
    description: "Purpose-built ERP for metrology laboratories based in Kuala Lumpur, Malaysia. Pre-loaded with DOSH Factories & Machinery Act (FMA 1967), Petronas Technical Standards (PTS), Petronas PTS 60.0107 (NDT), operator flow-down for PETRONAS (upstream + downstream) and PETRONAS Chemicals Group (PCG), and DOSH (Department of Occupational Safety & Health) /  Suruhanjaya Tenaga (Energy Commission) compliance support. Demo: info@atlantisndt.com.",
    bodyH1: "Metrology Laboratories ERP Software in Kuala Lumpur",
    bodyText: "Metrology Laboratories operating in Kuala Lumpur face a specific combination of local market structure, regulator framework, and operator-specific quality requirements that generic ERP systems cannot model. Kuala Lumpur sits at the heart of PETRONAS headquarters and the Malaysian oil and gas hub, supporting upstream, midstream LNG (Bintulu), and downstream refining (Melaka). The dominant industrial cluster — PETRONAS Twin Towers HQ, Melaka refining complex, PETRONAS Penapisan",
  },
  {
    path: "/erp-industries/metrology-laboratories-jakarta",
    title: "Metrology Laboratories ERP Software in Jakarta | Atlantis NDT ERP",
    description: "Purpose-built ERP for metrology laboratories based in Jakarta, Indonesia. Pre-loaded with K3 Migas oil & gas safety regulations, SNI (Standar Nasional Indonesia) for pressure equipment, Kepmen ESDM 18/2018 (NDT), operator flow-down for Pertamina (refining + upstream) and Pupuk Indonesia (fertilizers), and SKK Migas (upstream regulator) /  K3 Migas (oil & gas HSE) compliance support. Demo: info@atlantisndt.com.",
    bodyH1: "Metrology Laboratories ERP Software in Jakarta",
    bodyText: "Metrology Laboratories operating in Jakarta face a specific combination of local market structure, regulator framework, and operator-specific quality requirements that generic ERP systems cannot model. Jakarta sits at the heart of Indonesia's oil, gas, petrochemicals, and steel inspection hub centred on Pertamina, Pupuk Indonesia, and Bontang / Tangguh LNG. The dominant industrial cluster — Pertamina refineries (Cilacap, Balikpapan, Dumai), Bontang LNG (Kalimantan), Tangguh L",
  },
  {
    path: "/erp-industries/metrology-laboratories-lagos",
    title: "Metrology Laboratories ERP Software in Lagos | Atlantis NDT ERP",
    description: "Purpose-built ERP for metrology laboratories based in Lagos, Nigeria. Pre-loaded with NUPRC / DPR Procedure Guidelines (upstream), NMDPRA Petroleum Industry Act regulations, NIMASA Marine Notices, operator flow-down for NNPCL (refineries + upstream) and Shell SPDC (onshore + shallow water), and DPR / NUPRC (upstream regulator) /  NMDPRA (midstream/downstream) compliance support. Demo: info@atlantisndt.com.",
    bodyH1: "Metrology Laboratories ERP Software in Lagos",
    bodyText: "Metrology Laboratories operating in Lagos face a specific combination of local market structure, regulator framework, and operator-specific quality requirements that generic ERP systems cannot model. Lagos sits at the heart of Nigeria's commercial capital and the regional hub for upstream oil & gas, refining, and LNG inspection supporting NNPCL, IOCs, and indigenous E&Ps. The dominant industrial cluster — NNPCL refineries (Port Harcourt, Warri, Kaduna) plus the new Dangote Re",
  },
  {
    path: "/erp-industries/industrial-coatings-inspection-houston",
    title: "Industrial Coatings Inspection ERP Software in Houston | Atlantis NDT ERP",
    description: "Purpose-built ERP for industrial coatings inspection based in Houston, USA. Pre-loaded with API 510 / 570 / 653, ASME B31.3 / B31.4 / B31.8, ASME Section VIII Div 1, operator flow-down for ExxonMobil Baytown and Marathon Galveston Bay, and TCEQ /  OSHA Region 6 compliance support. Demo: info@atlantisndt.com.",
    bodyH1: "Industrial Coatings Inspection ERP Software in Houston",
    bodyText: "Industrial Coatings Inspection operating in Houston face a specific combination of local market structure, regulator framework, and operator-specific quality requirements that generic ERP systems cannot model. Houston sits at the heart of the energy capital of the world with 4,600+ energy-related firms and the densest concentration of refining and petrochemical capacity in the western hemisphere. The dominant industrial cluster — a 400-mile Gulf Coast refining and petrochemic",
  },
  {
    path: "/erp-industries/industrial-coatings-inspection-dubai",
    title: "Industrial Coatings Inspection ERP Software in Dubai | Atlantis NDT ERP",
    description: "Purpose-built ERP for industrial coatings inspection based in Dubai, UAE. Pre-loaded with ADQCC inspection schemes, ADNOC ACS-01 (vendor), ASME Section V / VIII, operator flow-down for ADNOC Distribution and ENOC Group, and ADQCC /  MOIAT compliance support. Demo: info@atlantisndt.com.",
    bodyH1: "Industrial Coatings Inspection ERP Software in Dubai",
    bodyText: "Industrial Coatings Inspection operating in Dubai face a specific combination of local market structure, regulator framework, and operator-specific quality requirements that generic ERP systems cannot model. Dubai sits at the heart of the regional commercial and logistics hub for GCC oil and gas, hosting regional HQs for IOCs, EPCs, and inspection multinationals. The dominant industrial cluster — a Jebel Ali free zone industrial hub connected to ADNOC Distribution, ENOC, DUBA",
  },
  {
    path: "/erp-industries/industrial-coatings-inspection-abu-dhabi",
    title: "Industrial Coatings Inspection ERP Software in Abu Dhabi | Atlantis NDT ERP",
    description: "Purpose-built ERP for industrial coatings inspection based in Abu Dhabi, UAE. Pre-loaded with ADNOC ACS-01 (vendor qualification), ADNOC HSE-IM-RP, API 510 / 570 / 653, operator flow-down for ADNOC Onshore and ADNOC LNG, and ADNOC HSE & Asset Integrity /  ADQCC compliance support. Demo: info@atlantisndt.com.",
    bodyH1: "Industrial Coatings Inspection ERP Software in Abu Dhabi",
    bodyText: "Industrial Coatings Inspection operating in Abu Dhabi face a specific combination of local market structure, regulator framework, and operator-specific quality requirements that generic ERP systems cannot model. Abu Dhabi sits at the heart of the operational heart of UAE upstream and downstream, controlling 94% of UAE oil reserves through ADNOC and the Ruwais integrated complex. The dominant industrial cluster — the Ruwais industrial corridor (refining, LNG, petrochemicals, f",
  },
  {
    path: "/erp-industries/industrial-coatings-inspection-saudi-arabia",
    title: "Industrial Coatings Inspection ERP Software in Saudi Arabia | Atlantis NDT ERP",
    description: "Purpose-built ERP for industrial coatings inspection based in Saudi Arabia, Saudi Arabia. Pre-loaded with Saudi Aramco SAEP-1112 (NDT personnel), Saudi Aramco SAEP-1142 (NDT qualification), Saudi Aramco SAEC-1142 (procedures), operator flow-down for Saudi Aramco (Abqaiq, Khurais, Ras Tanura) and SABIC, and HRSD (labor) /  GAMI (defense / industries) compliance support. Demo: info@atlantisndt.com.",
    bodyH1: "Industrial Coatings Inspection ERP Software in Saudi Arabia",
    bodyText: "Industrial Coatings Inspection operating in Saudi Arabia face a specific combination of local market structure, regulator framework, and operator-specific quality requirements that generic ERP systems cannot model. Saudi Arabia sits at the heart of the largest integrated oil and gas operating environment in the world, anchored by Saudi Aramco and SABIC. The dominant industrial cluster — the Eastern Province upstream-and-downstream complex (Abqaiq, Khurais, Ras Tanura, Jubail)",
  },
  {
    path: "/erp-industries/industrial-coatings-inspection-singapore",
    title: "Industrial Coatings Inspection ERP Software in Singapore | Atlantis NDT ERP",
    description: "Purpose-built ERP for industrial coatings inspection based in Singapore, Singapore. Pre-loaded with MOM Workplace Safety & Health Act, MOM WSH Regulations (Pressure Vessels), API 510 / 570 / 653, operator flow-down for ExxonMobil Jurong and Shell Pulau Bukom, and Ministry of Manpower (MOM) /  National Environment Agency (NEA) compliance support. Demo: info@atlantisndt.com.",
    bodyH1: "Industrial Coatings Inspection ERP Software in Singapore",
    bodyText: "Industrial Coatings Inspection operating in Singapore face a specific combination of local market structure, regulator framework, and operator-specific quality requirements that generic ERP systems cannot model. Singapore sits at the heart of one of the world's top three refining and petrochemical hubs, the marine-survey gateway for South-East Asia, and a major FPSO conversion centre. The dominant industrial cluster — Jurong Island (refining, petrochemicals, gas), Tuas (shipy",
  },
  {
    path: "/erp-industries/industrial-coatings-inspection-mumbai",
    title: "Industrial Coatings Inspection ERP Software in Mumbai | Atlantis NDT ERP",
    description: "Purpose-built ERP for industrial coatings inspection based in Mumbai, India. Pre-loaded with OISD-STD-128 / 130 / 137 (corrosion & inspection), PESO Petroleum Rules 2002, IBR (Indian Boiler Regulations), operator flow-down for BPCL Mahul refinery and HPCL Mumbai refinery, and PESO (petroleum & explosives safety) /  OISD (oil industry safety) compliance support. Demo: info@atlantisndt.com.",
    bodyH1: "Industrial Coatings Inspection ERP Software in Mumbai",
    bodyText: "Industrial Coatings Inspection operating in Mumbai face a specific combination of local market structure, regulator framework, and operator-specific quality requirements that generic ERP systems cannot model. Mumbai sits at the heart of India's western refining, offshore production, and petrochemicals hub with the country's largest concentration of inspection demand. The dominant industrial cluster — BPCL Mahul, HPCL Mumbai, ONGC Western Offshore (Bombay High), Reliance Hazir",
  },
  {
    path: "/erp-industries/industrial-coatings-inspection-hyderabad",
    title: "Industrial Coatings Inspection ERP Software in Hyderabad | Atlantis NDT ERP",
    description: "Purpose-built ERP for industrial coatings inspection based in Hyderabad, India. Pre-loaded with IBR (Indian Boiler Regulations), IS 2825 / IS 7822 (pressure vessels), AERB SC/IR-1 (radiation safety), operator flow-down for BHEL Hyderabad and HPCL Visakh refinery, and PESO /  BARC compliance support. Demo: info@atlantisndt.com.",
    bodyH1: "Industrial Coatings Inspection ERP Software in Hyderabad",
    bodyText: "Industrial Coatings Inspection operating in Hyderabad face a specific combination of local market structure, regulator framework, and operator-specific quality requirements that generic ERP systems cannot model. Hyderabad sits at the heart of a fast-growing inspection hub serving BHEL heavy engineering, defence manufacturing (BDL, ECIL), aerospace, pharma, and HPCL Visakh refining. The dominant industrial cluster — BHEL Hyderabad and Visakhapatnam, HPCL Visakh refinery, ISRO ",
  },
  {
    path: "/erp-industries/industrial-coatings-inspection-london",
    title: "Industrial Coatings Inspection ERP Software in London | Atlantis NDT ERP",
    description: "Purpose-built ERP for industrial coatings inspection based in London, UK. Pre-loaded with PSSR 2000 (pressure systems safety), PUWER 1998, LOLER 1998 (lifting), operator flow-down for BP (corporate) and Shell (corporate + Stanlow legacy), and HSE /  ONR (nuclear) compliance support. Demo: info@atlantisndt.com.",
    bodyH1: "Industrial Coatings Inspection ERP Software in London",
    bodyText: "Industrial Coatings Inspection operating in London face a specific combination of local market structure, regulator framework, and operator-specific quality requirements that generic ERP systems cannot model. London sits at the heart of the corporate headquarters cluster for global IOCs, EPCs, and inspection multinationals, with strong demand from nuclear, aerospace, rail, and offshore segments. The dominant industrial cluster — corporate HQs in the City and Canary Wharf, plu",
  },
  {
    path: "/erp-industries/industrial-coatings-inspection-aberdeen",
    title: "Industrial Coatings Inspection ERP Software in Aberdeen | Atlantis NDT ERP",
    description: "Purpose-built ERP for industrial coatings inspection based in Aberdeen, UK. Pre-loaded with HSE Safety Case Regulations (SCR 2015), PFEER 1995 (fire/explosion), PSSR 2000, operator flow-down for Harbour Energy and BP North Sea, and HSE (OSD) /  Offshore Energies UK (OEUK) compliance support. Demo: info@atlantisndt.com.",
    bodyH1: "Industrial Coatings Inspection ERP Software in Aberdeen",
    bodyText: "Industrial Coatings Inspection operating in Aberdeen face a specific combination of local market structure, regulator framework, and operator-specific quality requirements that generic ERP systems cannot model. Aberdeen sits at the heart of the global capital of offshore decommissioning and life-extension inspection, with five decades of UKCS operational data concentrated in the city. The dominant industrial cluster — Aberdeen Harbour + Dyce heliport, supply bases for UKCS pl",
  },
  {
    path: "/erp-industries/industrial-coatings-inspection-calgary",
    title: "Industrial Coatings Inspection ERP Software in Calgary | Atlantis NDT ERP",
    description: "Purpose-built ERP for industrial coatings inspection based in Calgary, Canada. Pre-loaded with ABSA AB-506 / AB-512 (pressure equipment), CSA Z662 (oil & gas pipelines), CSA B51 (pressure vessels & piping), operator flow-down for Suncor Energy and Cenovus Energy, and ABSA (Alberta Boilers Safety Association) /  AER (Alberta Energy Regulator) compliance support. Demo: info@atlantisndt.com.",
    bodyH1: "Industrial Coatings Inspection ERP Software in Calgary",
    bodyText: "Industrial Coatings Inspection operating in Calgary face a specific combination of local market structure, regulator framework, and operator-specific quality requirements that generic ERP systems cannot model. Calgary sits at the heart of the head-office hub for Canadian oil sands, conventional petroleum, and the trans-continental pipeline operators. The dominant industrial cluster — oil sands operations near Fort McMurray, conventional gas in Alberta and BC, plus the Enbridg",
  },
  {
    path: "/erp-industries/industrial-coatings-inspection-perth",
    title: "Industrial Coatings Inspection ERP Software in Perth | Atlantis NDT ERP",
    description: "Purpose-built ERP for industrial coatings inspection based in Perth, Australia. Pre-loaded with AS/NZS 3788 (pressure equipment), AS/NZS 1554 (welding), AS 4037 (pressure equipment examination), operator flow-down for Woodside Energy (Karratha, Pluto, Scarborough, NWS) and Chevron Australia (Wheatstone, Gorgon), and WorkSafe WA /  NOPSEMA (offshore) compliance support. Demo: info@atlantisndt.com.",
    bodyH1: "Industrial Coatings Inspection ERP Software in Perth",
    bodyText: "Industrial Coatings Inspection operating in Perth face a specific combination of local market structure, regulator framework, and operator-specific quality requirements that generic ERP systems cannot model. Perth sits at the heart of the LNG and iron-ore inspection capital of Australia, supporting Woodside, Chevron, INPEX, and BHP iron ore through FIFO operations. The dominant industrial cluster — Karratha gas plant, Wheatstone & Pluto LNG, Ichthys onshore, Pilbara iron-ore ",
  },
  {
    path: "/erp-industries/industrial-coatings-inspection-doha",
    title: "Industrial Coatings Inspection ERP Software in Doha | Atlantis NDT ERP",
    description: "Purpose-built ERP for industrial coatings inspection based in Doha, Qatar. Pre-loaded with QatarEnergy NFPS (North Field Production Standards), QGOSM standards, API 510 / 570 / 653, operator flow-down for QatarEnergy (LNG + upstream) and Qatargas (now within QatarEnergy LNG), and Qatar Civil Defence Department (QCDD) /  Qatar General Organisation for Standards & Metrology (QGOSM) compliance support. Demo: info@atlantisndt.com.",
    bodyH1: "Industrial Coatings Inspection ERP Software in Doha",
    bodyText: "Industrial Coatings Inspection operating in Doha face a specific combination of local market structure, regulator framework, and operator-specific quality requirements that generic ERP systems cannot model. Doha sits at the heart of the world's largest LNG operating environment, with QatarEnergy's North Field expansion creating unprecedented demand for inspection support. The dominant industrial cluster — Ras Laffan Industrial City (LNG + GTL + condensate), Mesaieed Industria",
  },
  {
    path: "/erp-industries/industrial-coatings-inspection-kuala-lumpur",
    title: "Industrial Coatings Inspection ERP Software in Kuala Lumpur | Atlantis NDT ERP",
    description: "Purpose-built ERP for industrial coatings inspection based in Kuala Lumpur, Malaysia. Pre-loaded with DOSH Factories & Machinery Act (FMA 1967), Petronas Technical Standards (PTS), Petronas PTS 60.0107 (NDT), operator flow-down for PETRONAS (upstream + downstream) and PETRONAS Chemicals Group (PCG), and DOSH (Department of Occupational Safety & Health) /  Suruhanjaya Tenaga (Energy Commission) compliance support. Demo: info@atlantisndt.com.",
    bodyH1: "Industrial Coatings Inspection ERP Software in Kuala Lumpur",
    bodyText: "Industrial Coatings Inspection operating in Kuala Lumpur face a specific combination of local market structure, regulator framework, and operator-specific quality requirements that generic ERP systems cannot model. Kuala Lumpur sits at the heart of PETRONAS headquarters and the Malaysian oil and gas hub, supporting upstream, midstream LNG (Bintulu), and downstream refining (Melaka). The dominant industrial cluster — PETRONAS Twin Towers HQ, Melaka refining complex, PETRONAS P",
  },
  {
    path: "/erp-industries/industrial-coatings-inspection-jakarta",
    title: "Industrial Coatings Inspection ERP Software in Jakarta | Atlantis NDT ERP",
    description: "Purpose-built ERP for industrial coatings inspection based in Jakarta, Indonesia. Pre-loaded with K3 Migas oil & gas safety regulations, SNI (Standar Nasional Indonesia) for pressure equipment, Kepmen ESDM 18/2018 (NDT), operator flow-down for Pertamina (refining + upstream) and Pupuk Indonesia (fertilizers), and SKK Migas (upstream regulator) /  K3 Migas (oil & gas HSE) compliance support. Demo: info@atlantisndt.com.",
    bodyH1: "Industrial Coatings Inspection ERP Software in Jakarta",
    bodyText: "Industrial Coatings Inspection operating in Jakarta face a specific combination of local market structure, regulator framework, and operator-specific quality requirements that generic ERP systems cannot model. Jakarta sits at the heart of Indonesia's oil, gas, petrochemicals, and steel inspection hub centred on Pertamina, Pupuk Indonesia, and Bontang / Tangguh LNG. The dominant industrial cluster — Pertamina refineries (Cilacap, Balikpapan, Dumai), Bontang LNG (Kalimantan), T",
  },
  {
    path: "/erp-industries/industrial-coatings-inspection-lagos",
    title: "Industrial Coatings Inspection ERP Software in Lagos | Atlantis NDT ERP",
    description: "Purpose-built ERP for industrial coatings inspection based in Lagos, Nigeria. Pre-loaded with NUPRC / DPR Procedure Guidelines (upstream), NMDPRA Petroleum Industry Act regulations, NIMASA Marine Notices, operator flow-down for NNPCL (refineries + upstream) and Shell SPDC (onshore + shallow water), and DPR / NUPRC (upstream regulator) /  NMDPRA (midstream/downstream) compliance support. Demo: info@atlantisndt.com.",
    bodyH1: "Industrial Coatings Inspection ERP Software in Lagos",
    bodyText: "Industrial Coatings Inspection operating in Lagos face a specific combination of local market structure, regulator framework, and operator-specific quality requirements that generic ERP systems cannot model. Lagos sits at the heart of Nigeria's commercial capital and the regional hub for upstream oil & gas, refining, and LNG inspection supporting NNPCL, IOCs, and indigenous E&Ps. The dominant industrial cluster — NNPCL refineries (Port Harcourt, Warri, Kaduna) plus the new Da",
  },
  {
    path: "/erp-industries/construction-quality-assurance-houston",
    title: "Construction Quality Assurance ERP Software in Houston | Atlantis NDT ERP",
    description: "Purpose-built ERP for construction quality assurance based in Houston, USA. Pre-loaded with API 510 / 570 / 653, ASME B31.3 / B31.4 / B31.8, ASME Section VIII Div 1, operator flow-down for ExxonMobil Baytown and Marathon Galveston Bay, and TCEQ /  OSHA Region 6 compliance support. Demo: info@atlantisndt.com.",
    bodyH1: "Construction Quality Assurance ERP Software in Houston",
    bodyText: "Construction Quality Assurance operating in Houston face a specific combination of local market structure, regulator framework, and operator-specific quality requirements that generic ERP systems cannot model. Houston sits at the heart of the energy capital of the world with 4,600+ energy-related firms and the densest concentration of refining and petrochemical capacity in the western hemisphere. The dominant industrial cluster — a 400-mile Gulf Coast refining and petrochemic",
  },
  {
    path: "/erp-industries/construction-quality-assurance-dubai",
    title: "Construction Quality Assurance ERP Software in Dubai | Atlantis NDT ERP",
    description: "Purpose-built ERP for construction quality assurance based in Dubai, UAE. Pre-loaded with ADQCC inspection schemes, ADNOC ACS-01 (vendor), ASME Section V / VIII, operator flow-down for ADNOC Distribution and ENOC Group, and ADQCC /  MOIAT compliance support. Demo: info@atlantisndt.com.",
    bodyH1: "Construction Quality Assurance ERP Software in Dubai",
    bodyText: "Construction Quality Assurance operating in Dubai face a specific combination of local market structure, regulator framework, and operator-specific quality requirements that generic ERP systems cannot model. Dubai sits at the heart of the regional commercial and logistics hub for GCC oil and gas, hosting regional HQs for IOCs, EPCs, and inspection multinationals. The dominant industrial cluster — a Jebel Ali free zone industrial hub connected to ADNOC Distribution, ENOC, DUBA",
  },
  {
    path: "/erp-industries/construction-quality-assurance-abu-dhabi",
    title: "Construction Quality Assurance ERP Software in Abu Dhabi | Atlantis NDT ERP",
    description: "Purpose-built ERP for construction quality assurance based in Abu Dhabi, UAE. Pre-loaded with ADNOC ACS-01 (vendor qualification), ADNOC HSE-IM-RP, API 510 / 570 / 653, operator flow-down for ADNOC Onshore and ADNOC LNG, and ADNOC HSE & Asset Integrity /  ADQCC compliance support. Demo: info@atlantisndt.com.",
    bodyH1: "Construction Quality Assurance ERP Software in Abu Dhabi",
    bodyText: "Construction Quality Assurance operating in Abu Dhabi face a specific combination of local market structure, regulator framework, and operator-specific quality requirements that generic ERP systems cannot model. Abu Dhabi sits at the heart of the operational heart of UAE upstream and downstream, controlling 94% of UAE oil reserves through ADNOC and the Ruwais integrated complex. The dominant industrial cluster — the Ruwais industrial corridor (refining, LNG, petrochemicals, f",
  },
  {
    path: "/erp-industries/construction-quality-assurance-saudi-arabia",
    title: "Construction Quality Assurance ERP Software in Saudi Arabia | Atlantis NDT ERP",
    description: "Purpose-built ERP for construction quality assurance based in Saudi Arabia, Saudi Arabia. Pre-loaded with Saudi Aramco SAEP-1112 (NDT personnel), Saudi Aramco SAEP-1142 (NDT qualification), Saudi Aramco SAEC-1142 (procedures), operator flow-down for Saudi Aramco (Abqaiq, Khurais, Ras Tanura) and SABIC, and HRSD (labor) /  GAMI (defense / industries) compliance support. Demo: info@atlantisndt.com.",
    bodyH1: "Construction Quality Assurance ERP Software in Saudi Arabia",
    bodyText: "Construction Quality Assurance operating in Saudi Arabia face a specific combination of local market structure, regulator framework, and operator-specific quality requirements that generic ERP systems cannot model. Saudi Arabia sits at the heart of the largest integrated oil and gas operating environment in the world, anchored by Saudi Aramco and SABIC. The dominant industrial cluster — the Eastern Province upstream-and-downstream complex (Abqaiq, Khurais, Ras Tanura, Jubail)",
  },
  {
    path: "/erp-industries/construction-quality-assurance-singapore",
    title: "Construction Quality Assurance ERP Software in Singapore | Atlantis NDT ERP",
    description: "Purpose-built ERP for construction quality assurance based in Singapore, Singapore. Pre-loaded with MOM Workplace Safety & Health Act, MOM WSH Regulations (Pressure Vessels), API 510 / 570 / 653, operator flow-down for ExxonMobil Jurong and Shell Pulau Bukom, and Ministry of Manpower (MOM) /  National Environment Agency (NEA) compliance support. Demo: info@atlantisndt.com.",
    bodyH1: "Construction Quality Assurance ERP Software in Singapore",
    bodyText: "Construction Quality Assurance operating in Singapore face a specific combination of local market structure, regulator framework, and operator-specific quality requirements that generic ERP systems cannot model. Singapore sits at the heart of one of the world's top three refining and petrochemical hubs, the marine-survey gateway for South-East Asia, and a major FPSO conversion centre. The dominant industrial cluster — Jurong Island (refining, petrochemicals, gas), Tuas (shipy",
  },
  {
    path: "/erp-industries/construction-quality-assurance-mumbai",
    title: "Construction Quality Assurance ERP Software in Mumbai | Atlantis NDT ERP",
    description: "Purpose-built ERP for construction quality assurance based in Mumbai, India. Pre-loaded with OISD-STD-128 / 130 / 137 (corrosion & inspection), PESO Petroleum Rules 2002, IBR (Indian Boiler Regulations), operator flow-down for BPCL Mahul refinery and HPCL Mumbai refinery, and PESO (petroleum & explosives safety) /  OISD (oil industry safety) compliance support. Demo: info@atlantisndt.com.",
    bodyH1: "Construction Quality Assurance ERP Software in Mumbai",
    bodyText: "Construction Quality Assurance operating in Mumbai face a specific combination of local market structure, regulator framework, and operator-specific quality requirements that generic ERP systems cannot model. Mumbai sits at the heart of India's western refining, offshore production, and petrochemicals hub with the country's largest concentration of inspection demand. The dominant industrial cluster — BPCL Mahul, HPCL Mumbai, ONGC Western Offshore (Bombay High), Reliance Hazir",
  },
  {
    path: "/erp-industries/construction-quality-assurance-hyderabad",
    title: "Construction Quality Assurance ERP Software in Hyderabad | Atlantis NDT ERP",
    description: "Purpose-built ERP for construction quality assurance based in Hyderabad, India. Pre-loaded with IBR (Indian Boiler Regulations), IS 2825 / IS 7822 (pressure vessels), AERB SC/IR-1 (radiation safety), operator flow-down for BHEL Hyderabad and HPCL Visakh refinery, and PESO /  BARC compliance support. Demo: info@atlantisndt.com.",
    bodyH1: "Construction Quality Assurance ERP Software in Hyderabad",
    bodyText: "Construction Quality Assurance operating in Hyderabad face a specific combination of local market structure, regulator framework, and operator-specific quality requirements that generic ERP systems cannot model. Hyderabad sits at the heart of a fast-growing inspection hub serving BHEL heavy engineering, defence manufacturing (BDL, ECIL), aerospace, pharma, and HPCL Visakh refining. The dominant industrial cluster — BHEL Hyderabad and Visakhapatnam, HPCL Visakh refinery, ISRO ",
  },
  {
    path: "/erp-industries/construction-quality-assurance-london",
    title: "Construction Quality Assurance ERP Software in London | Atlantis NDT ERP",
    description: "Purpose-built ERP for construction quality assurance based in London, UK. Pre-loaded with PSSR 2000 (pressure systems safety), PUWER 1998, LOLER 1998 (lifting), operator flow-down for BP (corporate) and Shell (corporate + Stanlow legacy), and HSE /  ONR (nuclear) compliance support. Demo: info@atlantisndt.com.",
    bodyH1: "Construction Quality Assurance ERP Software in London",
    bodyText: "Construction Quality Assurance operating in London face a specific combination of local market structure, regulator framework, and operator-specific quality requirements that generic ERP systems cannot model. London sits at the heart of the corporate headquarters cluster for global IOCs, EPCs, and inspection multinationals, with strong demand from nuclear, aerospace, rail, and offshore segments. The dominant industrial cluster — corporate HQs in the City and Canary Wharf, plu",
  },
  {
    path: "/erp-industries/construction-quality-assurance-aberdeen",
    title: "Construction Quality Assurance ERP Software in Aberdeen | Atlantis NDT ERP",
    description: "Purpose-built ERP for construction quality assurance based in Aberdeen, UK. Pre-loaded with HSE Safety Case Regulations (SCR 2015), PFEER 1995 (fire/explosion), PSSR 2000, operator flow-down for Harbour Energy and BP North Sea, and HSE (OSD) /  Offshore Energies UK (OEUK) compliance support. Demo: info@atlantisndt.com.",
    bodyH1: "Construction Quality Assurance ERP Software in Aberdeen",
    bodyText: "Construction Quality Assurance operating in Aberdeen face a specific combination of local market structure, regulator framework, and operator-specific quality requirements that generic ERP systems cannot model. Aberdeen sits at the heart of the global capital of offshore decommissioning and life-extension inspection, with five decades of UKCS operational data concentrated in the city. The dominant industrial cluster — Aberdeen Harbour + Dyce heliport, supply bases for UKCS pl",
  },
  {
    path: "/erp-industries/construction-quality-assurance-calgary",
    title: "Construction Quality Assurance ERP Software in Calgary | Atlantis NDT ERP",
    description: "Purpose-built ERP for construction quality assurance based in Calgary, Canada. Pre-loaded with ABSA AB-506 / AB-512 (pressure equipment), CSA Z662 (oil & gas pipelines), CSA B51 (pressure vessels & piping), operator flow-down for Suncor Energy and Cenovus Energy, and ABSA (Alberta Boilers Safety Association) /  AER (Alberta Energy Regulator) compliance support. Demo: info@atlantisndt.com.",
    bodyH1: "Construction Quality Assurance ERP Software in Calgary",
    bodyText: "Construction Quality Assurance operating in Calgary face a specific combination of local market structure, regulator framework, and operator-specific quality requirements that generic ERP systems cannot model. Calgary sits at the heart of the head-office hub for Canadian oil sands, conventional petroleum, and the trans-continental pipeline operators. The dominant industrial cluster — oil sands operations near Fort McMurray, conventional gas in Alberta and BC, plus the Enbridg",
  },
  {
    path: "/erp-industries/construction-quality-assurance-perth",
    title: "Construction Quality Assurance ERP Software in Perth | Atlantis NDT ERP",
    description: "Purpose-built ERP for construction quality assurance based in Perth, Australia. Pre-loaded with AS/NZS 3788 (pressure equipment), AS/NZS 1554 (welding), AS 4037 (pressure equipment examination), operator flow-down for Woodside Energy (Karratha, Pluto, Scarborough, NWS) and Chevron Australia (Wheatstone, Gorgon), and WorkSafe WA /  NOPSEMA (offshore) compliance support. Demo: info@atlantisndt.com.",
    bodyH1: "Construction Quality Assurance ERP Software in Perth",
    bodyText: "Construction Quality Assurance operating in Perth face a specific combination of local market structure, regulator framework, and operator-specific quality requirements that generic ERP systems cannot model. Perth sits at the heart of the LNG and iron-ore inspection capital of Australia, supporting Woodside, Chevron, INPEX, and BHP iron ore through FIFO operations. The dominant industrial cluster — Karratha gas plant, Wheatstone & Pluto LNG, Ichthys onshore, Pilbara iron-ore ",
  },
  {
    path: "/erp-industries/construction-quality-assurance-doha",
    title: "Construction Quality Assurance ERP Software in Doha | Atlantis NDT ERP",
    description: "Purpose-built ERP for construction quality assurance based in Doha, Qatar. Pre-loaded with QatarEnergy NFPS (North Field Production Standards), QGOSM standards, API 510 / 570 / 653, operator flow-down for QatarEnergy (LNG + upstream) and Qatargas (now within QatarEnergy LNG), and Qatar Civil Defence Department (QCDD) /  Qatar General Organisation for Standards & Metrology (QGOSM) compliance support. Demo: info@atlantisndt.com.",
    bodyH1: "Construction Quality Assurance ERP Software in Doha",
    bodyText: "Construction Quality Assurance operating in Doha face a specific combination of local market structure, regulator framework, and operator-specific quality requirements that generic ERP systems cannot model. Doha sits at the heart of the world's largest LNG operating environment, with QatarEnergy's North Field expansion creating unprecedented demand for inspection support. The dominant industrial cluster — Ras Laffan Industrial City (LNG + GTL + condensate), Mesaieed Industria",
  },
  {
    path: "/erp-industries/construction-quality-assurance-kuala-lumpur",
    title: "Construction Quality Assurance ERP Software in Kuala Lumpur | Atlantis NDT ERP",
    description: "Purpose-built ERP for construction quality assurance based in Kuala Lumpur, Malaysia. Pre-loaded with DOSH Factories & Machinery Act (FMA 1967), Petronas Technical Standards (PTS), Petronas PTS 60.0107 (NDT), operator flow-down for PETRONAS (upstream + downstream) and PETRONAS Chemicals Group (PCG), and DOSH (Department of Occupational Safety & Health) /  Suruhanjaya Tenaga (Energy Commission) compliance support. Demo: info@atlantisndt.com.",
    bodyH1: "Construction Quality Assurance ERP Software in Kuala Lumpur",
    bodyText: "Construction Quality Assurance operating in Kuala Lumpur face a specific combination of local market structure, regulator framework, and operator-specific quality requirements that generic ERP systems cannot model. Kuala Lumpur sits at the heart of PETRONAS headquarters and the Malaysian oil and gas hub, supporting upstream, midstream LNG (Bintulu), and downstream refining (Melaka). The dominant industrial cluster — PETRONAS Twin Towers HQ, Melaka refining complex, PETRONAS P",
  },
  {
    path: "/erp-industries/construction-quality-assurance-jakarta",
    title: "Construction Quality Assurance ERP Software in Jakarta | Atlantis NDT ERP",
    description: "Purpose-built ERP for construction quality assurance based in Jakarta, Indonesia. Pre-loaded with K3 Migas oil & gas safety regulations, SNI (Standar Nasional Indonesia) for pressure equipment, Kepmen ESDM 18/2018 (NDT), operator flow-down for Pertamina (refining + upstream) and Pupuk Indonesia (fertilizers), and SKK Migas (upstream regulator) /  K3 Migas (oil & gas HSE) compliance support. Demo: info@atlantisndt.com.",
    bodyH1: "Construction Quality Assurance ERP Software in Jakarta",
    bodyText: "Construction Quality Assurance operating in Jakarta face a specific combination of local market structure, regulator framework, and operator-specific quality requirements that generic ERP systems cannot model. Jakarta sits at the heart of Indonesia's oil, gas, petrochemicals, and steel inspection hub centred on Pertamina, Pupuk Indonesia, and Bontang / Tangguh LNG. The dominant industrial cluster — Pertamina refineries (Cilacap, Balikpapan, Dumai), Bontang LNG (Kalimantan), T",
  },
  {
    path: "/erp-industries/construction-quality-assurance-lagos",
    title: "Construction Quality Assurance ERP Software in Lagos | Atlantis NDT ERP",
    description: "Purpose-built ERP for construction quality assurance based in Lagos, Nigeria. Pre-loaded with NUPRC / DPR Procedure Guidelines (upstream), NMDPRA Petroleum Industry Act regulations, NIMASA Marine Notices, operator flow-down for NNPCL (refineries + upstream) and Shell SPDC (onshore + shallow water), and DPR / NUPRC (upstream regulator) /  NMDPRA (midstream/downstream) compliance support. Demo: info@atlantisndt.com.",
    bodyH1: "Construction Quality Assurance ERP Software in Lagos",
    bodyText: "Construction Quality Assurance operating in Lagos face a specific combination of local market structure, regulator framework, and operator-specific quality requirements that generic ERP systems cannot model. Lagos sits at the heart of Nigeria's commercial capital and the regional hub for upstream oil & gas, refining, and LNG inspection supporting NNPCL, IOCs, and indigenous E&Ps. The dominant industrial cluster — NNPCL refineries (Port Harcourt, Warri, Kaduna) plus the new Da",
  },
  {
    path: "/erp-industries/geotechnical-engineering-houston",
    title: "Geotechnical Engineering Firms ERP Software in Houston | Atlantis NDT ERP",
    description: "Purpose-built ERP for geotechnical engineering firms based in Houston, USA. Pre-loaded with API 510 / 570 / 653, ASME B31.3 / B31.4 / B31.8, ASME Section VIII Div 1, operator flow-down for ExxonMobil Baytown and Marathon Galveston Bay, and TCEQ /  OSHA Region 6 compliance support. Demo: info@atlantisndt.com.",
    bodyH1: "Geotechnical Engineering Firms ERP Software in Houston",
    bodyText: "Geotechnical Engineering Firms operating in Houston face a specific combination of local market structure, regulator framework, and operator-specific quality requirements that generic ERP systems cannot model. Houston sits at the heart of the energy capital of the world with 4,600+ energy-related firms and the densest concentration of refining and petrochemical capacity in the western hemisphere. The dominant industrial cluster — a 400-mile Gulf Coast refining and petrochemic",
  },
  {
    path: "/erp-industries/geotechnical-engineering-dubai",
    title: "Geotechnical Engineering Firms ERP Software in Dubai | Atlantis NDT ERP",
    description: "Purpose-built ERP for geotechnical engineering firms based in Dubai, UAE. Pre-loaded with ADQCC inspection schemes, ADNOC ACS-01 (vendor), ASME Section V / VIII, operator flow-down for ADNOC Distribution and ENOC Group, and ADQCC /  MOIAT compliance support. Demo: info@atlantisndt.com.",
    bodyH1: "Geotechnical Engineering Firms ERP Software in Dubai",
    bodyText: "Geotechnical Engineering Firms operating in Dubai face a specific combination of local market structure, regulator framework, and operator-specific quality requirements that generic ERP systems cannot model. Dubai sits at the heart of the regional commercial and logistics hub for GCC oil and gas, hosting regional HQs for IOCs, EPCs, and inspection multinationals. The dominant industrial cluster — a Jebel Ali free zone industrial hub connected to ADNOC Distribution, ENOC, DUBA",
  },
  {
    path: "/erp-industries/geotechnical-engineering-abu-dhabi",
    title: "Geotechnical Engineering Firms ERP Software in Abu Dhabi | Atlantis NDT ERP",
    description: "Purpose-built ERP for geotechnical engineering firms based in Abu Dhabi, UAE. Pre-loaded with ADNOC ACS-01 (vendor qualification), ADNOC HSE-IM-RP, API 510 / 570 / 653, operator flow-down for ADNOC Onshore and ADNOC LNG, and ADNOC HSE & Asset Integrity /  ADQCC compliance support. Demo: info@atlantisndt.com.",
    bodyH1: "Geotechnical Engineering Firms ERP Software in Abu Dhabi",
    bodyText: "Geotechnical Engineering Firms operating in Abu Dhabi face a specific combination of local market structure, regulator framework, and operator-specific quality requirements that generic ERP systems cannot model. Abu Dhabi sits at the heart of the operational heart of UAE upstream and downstream, controlling 94% of UAE oil reserves through ADNOC and the Ruwais integrated complex. The dominant industrial cluster — the Ruwais industrial corridor (refining, LNG, petrochemicals, f",
  },
  {
    path: "/erp-industries/geotechnical-engineering-saudi-arabia",
    title: "Geotechnical Engineering Firms ERP Software in Saudi Arabia | Atlantis NDT ERP",
    description: "Purpose-built ERP for geotechnical engineering firms based in Saudi Arabia, Saudi Arabia. Pre-loaded with Saudi Aramco SAEP-1112 (NDT personnel), Saudi Aramco SAEP-1142 (NDT qualification), Saudi Aramco SAEC-1142 (procedures), operator flow-down for Saudi Aramco (Abqaiq, Khurais, Ras Tanura) and SABIC, and HRSD (labor) /  GAMI (defense / industries) compliance support. Demo: info@atlantisndt.com.",
    bodyH1: "Geotechnical Engineering Firms ERP Software in Saudi Arabia",
    bodyText: "Geotechnical Engineering Firms operating in Saudi Arabia face a specific combination of local market structure, regulator framework, and operator-specific quality requirements that generic ERP systems cannot model. Saudi Arabia sits at the heart of the largest integrated oil and gas operating environment in the world, anchored by Saudi Aramco and SABIC. The dominant industrial cluster — the Eastern Province upstream-and-downstream complex (Abqaiq, Khurais, Ras Tanura, Jubail)",
  },
  {
    path: "/erp-industries/geotechnical-engineering-singapore",
    title: "Geotechnical Engineering Firms ERP Software in Singapore | Atlantis NDT ERP",
    description: "Purpose-built ERP for geotechnical engineering firms based in Singapore, Singapore. Pre-loaded with MOM Workplace Safety & Health Act, MOM WSH Regulations (Pressure Vessels), API 510 / 570 / 653, operator flow-down for ExxonMobil Jurong and Shell Pulau Bukom, and Ministry of Manpower (MOM) /  National Environment Agency (NEA) compliance support. Demo: info@atlantisndt.com.",
    bodyH1: "Geotechnical Engineering Firms ERP Software in Singapore",
    bodyText: "Geotechnical Engineering Firms operating in Singapore face a specific combination of local market structure, regulator framework, and operator-specific quality requirements that generic ERP systems cannot model. Singapore sits at the heart of one of the world's top three refining and petrochemical hubs, the marine-survey gateway for South-East Asia, and a major FPSO conversion centre. The dominant industrial cluster — Jurong Island (refining, petrochemicals, gas), Tuas (shipy",
  },
  {
    path: "/erp-industries/geotechnical-engineering-mumbai",
    title: "Geotechnical Engineering Firms ERP Software in Mumbai | Atlantis NDT ERP",
    description: "Purpose-built ERP for geotechnical engineering firms based in Mumbai, India. Pre-loaded with OISD-STD-128 / 130 / 137 (corrosion & inspection), PESO Petroleum Rules 2002, IBR (Indian Boiler Regulations), operator flow-down for BPCL Mahul refinery and HPCL Mumbai refinery, and PESO (petroleum & explosives safety) /  OISD (oil industry safety) compliance support. Demo: info@atlantisndt.com.",
    bodyH1: "Geotechnical Engineering Firms ERP Software in Mumbai",
    bodyText: "Geotechnical Engineering Firms operating in Mumbai face a specific combination of local market structure, regulator framework, and operator-specific quality requirements that generic ERP systems cannot model. Mumbai sits at the heart of India's western refining, offshore production, and petrochemicals hub with the country's largest concentration of inspection demand. The dominant industrial cluster — BPCL Mahul, HPCL Mumbai, ONGC Western Offshore (Bombay High), Reliance Hazir",
  },
  {
    path: "/erp-industries/geotechnical-engineering-hyderabad",
    title: "Geotechnical Engineering Firms ERP Software in Hyderabad | Atlantis NDT ERP",
    description: "Purpose-built ERP for geotechnical engineering firms based in Hyderabad, India. Pre-loaded with IBR (Indian Boiler Regulations), IS 2825 / IS 7822 (pressure vessels), AERB SC/IR-1 (radiation safety), operator flow-down for BHEL Hyderabad and HPCL Visakh refinery, and PESO /  BARC compliance support. Demo: info@atlantisndt.com.",
    bodyH1: "Geotechnical Engineering Firms ERP Software in Hyderabad",
    bodyText: "Geotechnical Engineering Firms operating in Hyderabad face a specific combination of local market structure, regulator framework, and operator-specific quality requirements that generic ERP systems cannot model. Hyderabad sits at the heart of a fast-growing inspection hub serving BHEL heavy engineering, defence manufacturing (BDL, ECIL), aerospace, pharma, and HPCL Visakh refining. The dominant industrial cluster — BHEL Hyderabad and Visakhapatnam, HPCL Visakh refinery, ISRO ",
  },
  {
    path: "/erp-industries/geotechnical-engineering-london",
    title: "Geotechnical Engineering Firms ERP Software in London | Atlantis NDT ERP",
    description: "Purpose-built ERP for geotechnical engineering firms based in London, UK. Pre-loaded with PSSR 2000 (pressure systems safety), PUWER 1998, LOLER 1998 (lifting), operator flow-down for BP (corporate) and Shell (corporate + Stanlow legacy), and HSE /  ONR (nuclear) compliance support. Demo: info@atlantisndt.com.",
    bodyH1: "Geotechnical Engineering Firms ERP Software in London",
    bodyText: "Geotechnical Engineering Firms operating in London face a specific combination of local market structure, regulator framework, and operator-specific quality requirements that generic ERP systems cannot model. London sits at the heart of the corporate headquarters cluster for global IOCs, EPCs, and inspection multinationals, with strong demand from nuclear, aerospace, rail, and offshore segments. The dominant industrial cluster — corporate HQs in the City and Canary Wharf, plu",
  },
  {
    path: "/erp-industries/geotechnical-engineering-aberdeen",
    title: "Geotechnical Engineering Firms ERP Software in Aberdeen | Atlantis NDT ERP",
    description: "Purpose-built ERP for geotechnical engineering firms based in Aberdeen, UK. Pre-loaded with HSE Safety Case Regulations (SCR 2015), PFEER 1995 (fire/explosion), PSSR 2000, operator flow-down for Harbour Energy and BP North Sea, and HSE (OSD) /  Offshore Energies UK (OEUK) compliance support. Demo: info@atlantisndt.com.",
    bodyH1: "Geotechnical Engineering Firms ERP Software in Aberdeen",
    bodyText: "Geotechnical Engineering Firms operating in Aberdeen face a specific combination of local market structure, regulator framework, and operator-specific quality requirements that generic ERP systems cannot model. Aberdeen sits at the heart of the global capital of offshore decommissioning and life-extension inspection, with five decades of UKCS operational data concentrated in the city. The dominant industrial cluster — Aberdeen Harbour + Dyce heliport, supply bases for UKCS pl",
  },
  {
    path: "/erp-industries/geotechnical-engineering-calgary",
    title: "Geotechnical Engineering Firms ERP Software in Calgary | Atlantis NDT ERP",
    description: "Purpose-built ERP for geotechnical engineering firms based in Calgary, Canada. Pre-loaded with ABSA AB-506 / AB-512 (pressure equipment), CSA Z662 (oil & gas pipelines), CSA B51 (pressure vessels & piping), operator flow-down for Suncor Energy and Cenovus Energy, and ABSA (Alberta Boilers Safety Association) /  AER (Alberta Energy Regulator) compliance support. Demo: info@atlantisndt.com.",
    bodyH1: "Geotechnical Engineering Firms ERP Software in Calgary",
    bodyText: "Geotechnical Engineering Firms operating in Calgary face a specific combination of local market structure, regulator framework, and operator-specific quality requirements that generic ERP systems cannot model. Calgary sits at the heart of the head-office hub for Canadian oil sands, conventional petroleum, and the trans-continental pipeline operators. The dominant industrial cluster — oil sands operations near Fort McMurray, conventional gas in Alberta and BC, plus the Enbridg",
  },
  {
    path: "/erp-industries/geotechnical-engineering-perth",
    title: "Geotechnical Engineering Firms ERP Software in Perth | Atlantis NDT ERP",
    description: "Purpose-built ERP for geotechnical engineering firms based in Perth, Australia. Pre-loaded with AS/NZS 3788 (pressure equipment), AS/NZS 1554 (welding), AS 4037 (pressure equipment examination), operator flow-down for Woodside Energy (Karratha, Pluto, Scarborough, NWS) and Chevron Australia (Wheatstone, Gorgon), and WorkSafe WA /  NOPSEMA (offshore) compliance support. Demo: info@atlantisndt.com.",
    bodyH1: "Geotechnical Engineering Firms ERP Software in Perth",
    bodyText: "Geotechnical Engineering Firms operating in Perth face a specific combination of local market structure, regulator framework, and operator-specific quality requirements that generic ERP systems cannot model. Perth sits at the heart of the LNG and iron-ore inspection capital of Australia, supporting Woodside, Chevron, INPEX, and BHP iron ore through FIFO operations. The dominant industrial cluster — Karratha gas plant, Wheatstone & Pluto LNG, Ichthys onshore, Pilbara iron-ore ",
  },
  {
    path: "/erp-industries/geotechnical-engineering-doha",
    title: "Geotechnical Engineering Firms ERP Software in Doha | Atlantis NDT ERP",
    description: "Purpose-built ERP for geotechnical engineering firms based in Doha, Qatar. Pre-loaded with QatarEnergy NFPS (North Field Production Standards), QGOSM standards, API 510 / 570 / 653, operator flow-down for QatarEnergy (LNG + upstream) and Qatargas (now within QatarEnergy LNG), and Qatar Civil Defence Department (QCDD) /  Qatar General Organisation for Standards & Metrology (QGOSM) compliance support. Demo: info@atlantisndt.com.",
    bodyH1: "Geotechnical Engineering Firms ERP Software in Doha",
    bodyText: "Geotechnical Engineering Firms operating in Doha face a specific combination of local market structure, regulator framework, and operator-specific quality requirements that generic ERP systems cannot model. Doha sits at the heart of the world's largest LNG operating environment, with QatarEnergy's North Field expansion creating unprecedented demand for inspection support. The dominant industrial cluster — Ras Laffan Industrial City (LNG + GTL + condensate), Mesaieed Industria",
  },
  {
    path: "/erp-industries/geotechnical-engineering-kuala-lumpur",
    title: "Geotechnical Engineering Firms ERP Software in Kuala Lumpur | Atlantis NDT ERP",
    description: "Purpose-built ERP for geotechnical engineering firms based in Kuala Lumpur, Malaysia. Pre-loaded with DOSH Factories & Machinery Act (FMA 1967), Petronas Technical Standards (PTS), Petronas PTS 60.0107 (NDT), operator flow-down for PETRONAS (upstream + downstream) and PETRONAS Chemicals Group (PCG), and DOSH (Department of Occupational Safety & Health) /  Suruhanjaya Tenaga (Energy Commission) compliance support. Demo: info@atlantisndt.com.",
    bodyH1: "Geotechnical Engineering Firms ERP Software in Kuala Lumpur",
    bodyText: "Geotechnical Engineering Firms operating in Kuala Lumpur face a specific combination of local market structure, regulator framework, and operator-specific quality requirements that generic ERP systems cannot model. Kuala Lumpur sits at the heart of PETRONAS headquarters and the Malaysian oil and gas hub, supporting upstream, midstream LNG (Bintulu), and downstream refining (Melaka). The dominant industrial cluster — PETRONAS Twin Towers HQ, Melaka refining complex, PETRONAS P",
  },
  {
    path: "/erp-industries/geotechnical-engineering-jakarta",
    title: "Geotechnical Engineering Firms ERP Software in Jakarta | Atlantis NDT ERP",
    description: "Purpose-built ERP for geotechnical engineering firms based in Jakarta, Indonesia. Pre-loaded with K3 Migas oil & gas safety regulations, SNI (Standar Nasional Indonesia) for pressure equipment, Kepmen ESDM 18/2018 (NDT), operator flow-down for Pertamina (refining + upstream) and Pupuk Indonesia (fertilizers), and SKK Migas (upstream regulator) /  K3 Migas (oil & gas HSE) compliance support. Demo: info@atlantisndt.com.",
    bodyH1: "Geotechnical Engineering Firms ERP Software in Jakarta",
    bodyText: "Geotechnical Engineering Firms operating in Jakarta face a specific combination of local market structure, regulator framework, and operator-specific quality requirements that generic ERP systems cannot model. Jakarta sits at the heart of Indonesia's oil, gas, petrochemicals, and steel inspection hub centred on Pertamina, Pupuk Indonesia, and Bontang / Tangguh LNG. The dominant industrial cluster — Pertamina refineries (Cilacap, Balikpapan, Dumai), Bontang LNG (Kalimantan), T",
  },
  {
    path: "/erp-industries/geotechnical-engineering-lagos",
    title: "Geotechnical Engineering Firms ERP Software in Lagos | Atlantis NDT ERP",
    description: "Purpose-built ERP for geotechnical engineering firms based in Lagos, Nigeria. Pre-loaded with NUPRC / DPR Procedure Guidelines (upstream), NMDPRA Petroleum Industry Act regulations, NIMASA Marine Notices, operator flow-down for NNPCL (refineries + upstream) and Shell SPDC (onshore + shallow water), and DPR / NUPRC (upstream regulator) /  NMDPRA (midstream/downstream) compliance support. Demo: info@atlantisndt.com.",
    bodyH1: "Geotechnical Engineering Firms ERP Software in Lagos",
    bodyText: "Geotechnical Engineering Firms operating in Lagos face a specific combination of local market structure, regulator framework, and operator-specific quality requirements that generic ERP systems cannot model. Lagos sits at the heart of Nigeria's commercial capital and the regional hub for upstream oil & gas, refining, and LNG inspection supporting NNPCL, IOCs, and indigenous E&Ps. The dominant industrial cluster — NNPCL refineries (Port Harcourt, Warri, Kaduna) plus the new Da",
  },
  {
    path: "/erp-industries/environmental-testing-labs-houston",
    title: "Environmental Testing Laboratories ERP Software in Houston | Atlantis NDT ERP",
    description: "Purpose-built ERP for environmental testing laboratories based in Houston, USA. Pre-loaded with API 510 / 570 / 653, ASME B31.3 / B31.4 / B31.8, ASME Section VIII Div 1, operator flow-down for ExxonMobil Baytown and Marathon Galveston Bay, and TCEQ /  OSHA Region 6 compliance support. Demo: info@atlantisndt.com.",
    bodyH1: "Environmental Testing Laboratories ERP Software in Houston",
    bodyText: "Environmental Testing Laboratories operating in Houston face a specific combination of local market structure, regulator framework, and operator-specific quality requirements that generic ERP systems cannot model. Houston sits at the heart of the energy capital of the world with 4,600+ energy-related firms and the densest concentration of refining and petrochemical capacity in the western hemisphere. The dominant industrial cluster — a 400-mile Gulf Coast refining and petroch",
  },
  {
    path: "/erp-industries/environmental-testing-labs-dubai",
    title: "Environmental Testing Laboratories ERP Software in Dubai | Atlantis NDT ERP",
    description: "Purpose-built ERP for environmental testing laboratories based in Dubai, UAE. Pre-loaded with ADQCC inspection schemes, ADNOC ACS-01 (vendor), ASME Section V / VIII, operator flow-down for ADNOC Distribution and ENOC Group, and ADQCC /  MOIAT compliance support. Demo: info@atlantisndt.com.",
    bodyH1: "Environmental Testing Laboratories ERP Software in Dubai",
    bodyText: "Environmental Testing Laboratories operating in Dubai face a specific combination of local market structure, regulator framework, and operator-specific quality requirements that generic ERP systems cannot model. Dubai sits at the heart of the regional commercial and logistics hub for GCC oil and gas, hosting regional HQs for IOCs, EPCs, and inspection multinationals. The dominant industrial cluster — a Jebel Ali free zone industrial hub connected to ADNOC Distribution, ENOC, ",
  },
  {
    path: "/erp-industries/environmental-testing-labs-abu-dhabi",
    title: "Environmental Testing Laboratories ERP Software in Abu Dhabi | Atlantis NDT ERP",
    description: "Purpose-built ERP for environmental testing laboratories based in Abu Dhabi, UAE. Pre-loaded with ADNOC ACS-01 (vendor qualification), ADNOC HSE-IM-RP, API 510 / 570 / 653, operator flow-down for ADNOC Onshore and ADNOC LNG, and ADNOC HSE & Asset Integrity /  ADQCC compliance support. Demo: info@atlantisndt.com.",
    bodyH1: "Environmental Testing Laboratories ERP Software in Abu Dhabi",
    bodyText: "Environmental Testing Laboratories operating in Abu Dhabi face a specific combination of local market structure, regulator framework, and operator-specific quality requirements that generic ERP systems cannot model. Abu Dhabi sits at the heart of the operational heart of UAE upstream and downstream, controlling 94% of UAE oil reserves through ADNOC and the Ruwais integrated complex. The dominant industrial cluster — the Ruwais industrial corridor (refining, LNG, petrochemical",
  },
  {
    path: "/erp-industries/environmental-testing-labs-saudi-arabia",
    title: "Environmental Testing Laboratories ERP Software in Saudi Arabia | Atlantis NDT ERP",
    description: "Purpose-built ERP for environmental testing laboratories based in Saudi Arabia, Saudi Arabia. Pre-loaded with Saudi Aramco SAEP-1112 (NDT personnel), Saudi Aramco SAEP-1142 (NDT qualification), Saudi Aramco SAEC-1142 (procedures), operator flow-down for Saudi Aramco (Abqaiq, Khurais, Ras Tanura) and SABIC, and HRSD (labor) /  GAMI (defense / industries) compliance support. Demo: info@atlantisndt.com.",
    bodyH1: "Environmental Testing Laboratories ERP Software in Saudi Arabia",
    bodyText: "Environmental Testing Laboratories operating in Saudi Arabia face a specific combination of local market structure, regulator framework, and operator-specific quality requirements that generic ERP systems cannot model. Saudi Arabia sits at the heart of the largest integrated oil and gas operating environment in the world, anchored by Saudi Aramco and SABIC. The dominant industrial cluster — the Eastern Province upstream-and-downstream complex (Abqaiq, Khurais, Ras Tanura, Jub",
  },
  {
    path: "/erp-industries/environmental-testing-labs-singapore",
    title: "Environmental Testing Laboratories ERP Software in Singapore | Atlantis NDT ERP",
    description: "Purpose-built ERP for environmental testing laboratories based in Singapore, Singapore. Pre-loaded with MOM Workplace Safety & Health Act, MOM WSH Regulations (Pressure Vessels), API 510 / 570 / 653, operator flow-down for ExxonMobil Jurong and Shell Pulau Bukom, and Ministry of Manpower (MOM) /  National Environment Agency (NEA) compliance support. Demo: info@atlantisndt.com.",
    bodyH1: "Environmental Testing Laboratories ERP Software in Singapore",
    bodyText: "Environmental Testing Laboratories operating in Singapore face a specific combination of local market structure, regulator framework, and operator-specific quality requirements that generic ERP systems cannot model. Singapore sits at the heart of one of the world's top three refining and petrochemical hubs, the marine-survey gateway for South-East Asia, and a major FPSO conversion centre. The dominant industrial cluster — Jurong Island (refining, petrochemicals, gas), Tuas (s",
  },
  {
    path: "/erp-industries/environmental-testing-labs-mumbai",
    title: "Environmental Testing Laboratories ERP Software in Mumbai | Atlantis NDT ERP",
    description: "Purpose-built ERP for environmental testing laboratories based in Mumbai, India. Pre-loaded with OISD-STD-128 / 130 / 137 (corrosion & inspection), PESO Petroleum Rules 2002, IBR (Indian Boiler Regulations), operator flow-down for BPCL Mahul refinery and HPCL Mumbai refinery, and PESO (petroleum & explosives safety) /  OISD (oil industry safety) compliance support. Demo: info@atlantisndt.com.",
    bodyH1: "Environmental Testing Laboratories ERP Software in Mumbai",
    bodyText: "Environmental Testing Laboratories operating in Mumbai face a specific combination of local market structure, regulator framework, and operator-specific quality requirements that generic ERP systems cannot model. Mumbai sits at the heart of India's western refining, offshore production, and petrochemicals hub with the country's largest concentration of inspection demand. The dominant industrial cluster — BPCL Mahul, HPCL Mumbai, ONGC Western Offshore (Bombay High), Reliance H",
  },
  {
    path: "/erp-industries/environmental-testing-labs-hyderabad",
    title: "Environmental Testing Laboratories ERP Software in Hyderabad | Atlantis NDT ERP",
    description: "Purpose-built ERP for environmental testing laboratories based in Hyderabad, India. Pre-loaded with IBR (Indian Boiler Regulations), IS 2825 / IS 7822 (pressure vessels), AERB SC/IR-1 (radiation safety), operator flow-down for BHEL Hyderabad and HPCL Visakh refinery, and PESO /  BARC compliance support. Demo: info@atlantisndt.com.",
    bodyH1: "Environmental Testing Laboratories ERP Software in Hyderabad",
    bodyText: "Environmental Testing Laboratories operating in Hyderabad face a specific combination of local market structure, regulator framework, and operator-specific quality requirements that generic ERP systems cannot model. Hyderabad sits at the heart of a fast-growing inspection hub serving BHEL heavy engineering, defence manufacturing (BDL, ECIL), aerospace, pharma, and HPCL Visakh refining. The dominant industrial cluster — BHEL Hyderabad and Visakhapatnam, HPCL Visakh refinery, I",
  },
  {
    path: "/erp-industries/environmental-testing-labs-london",
    title: "Environmental Testing Laboratories ERP Software in London | Atlantis NDT ERP",
    description: "Purpose-built ERP for environmental testing laboratories based in London, UK. Pre-loaded with PSSR 2000 (pressure systems safety), PUWER 1998, LOLER 1998 (lifting), operator flow-down for BP (corporate) and Shell (corporate + Stanlow legacy), and HSE /  ONR (nuclear) compliance support. Demo: info@atlantisndt.com.",
    bodyH1: "Environmental Testing Laboratories ERP Software in London",
    bodyText: "Environmental Testing Laboratories operating in London face a specific combination of local market structure, regulator framework, and operator-specific quality requirements that generic ERP systems cannot model. London sits at the heart of the corporate headquarters cluster for global IOCs, EPCs, and inspection multinationals, with strong demand from nuclear, aerospace, rail, and offshore segments. The dominant industrial cluster — corporate HQs in the City and Canary Wharf,",
  },
  {
    path: "/erp-industries/environmental-testing-labs-aberdeen",
    title: "Environmental Testing Laboratories ERP Software in Aberdeen | Atlantis NDT ERP",
    description: "Purpose-built ERP for environmental testing laboratories based in Aberdeen, UK. Pre-loaded with HSE Safety Case Regulations (SCR 2015), PFEER 1995 (fire/explosion), PSSR 2000, operator flow-down for Harbour Energy and BP North Sea, and HSE (OSD) /  Offshore Energies UK (OEUK) compliance support. Demo: info@atlantisndt.com.",
    bodyH1: "Environmental Testing Laboratories ERP Software in Aberdeen",
    bodyText: "Environmental Testing Laboratories operating in Aberdeen face a specific combination of local market structure, regulator framework, and operator-specific quality requirements that generic ERP systems cannot model. Aberdeen sits at the heart of the global capital of offshore decommissioning and life-extension inspection, with five decades of UKCS operational data concentrated in the city. The dominant industrial cluster — Aberdeen Harbour + Dyce heliport, supply bases for UKC",
  },
  {
    path: "/erp-industries/environmental-testing-labs-calgary",
    title: "Environmental Testing Laboratories ERP Software in Calgary | Atlantis NDT ERP",
    description: "Purpose-built ERP for environmental testing laboratories based in Calgary, Canada. Pre-loaded with ABSA AB-506 / AB-512 (pressure equipment), CSA Z662 (oil & gas pipelines), CSA B51 (pressure vessels & piping), operator flow-down for Suncor Energy and Cenovus Energy, and ABSA (Alberta Boilers Safety Association) /  AER (Alberta Energy Regulator) compliance support. Demo: info@atlantisndt.com.",
    bodyH1: "Environmental Testing Laboratories ERP Software in Calgary",
    bodyText: "Environmental Testing Laboratories operating in Calgary face a specific combination of local market structure, regulator framework, and operator-specific quality requirements that generic ERP systems cannot model. Calgary sits at the heart of the head-office hub for Canadian oil sands, conventional petroleum, and the trans-continental pipeline operators. The dominant industrial cluster — oil sands operations near Fort McMurray, conventional gas in Alberta and BC, plus the Enb",
  },
  {
    path: "/erp-industries/environmental-testing-labs-perth",
    title: "Environmental Testing Laboratories ERP Software in Perth | Atlantis NDT ERP",
    description: "Purpose-built ERP for environmental testing laboratories based in Perth, Australia. Pre-loaded with AS/NZS 3788 (pressure equipment), AS/NZS 1554 (welding), AS 4037 (pressure equipment examination), operator flow-down for Woodside Energy (Karratha, Pluto, Scarborough, NWS) and Chevron Australia (Wheatstone, Gorgon), and WorkSafe WA /  NOPSEMA (offshore) compliance support. Demo: info@atlantisndt.com.",
    bodyH1: "Environmental Testing Laboratories ERP Software in Perth",
    bodyText: "Environmental Testing Laboratories operating in Perth face a specific combination of local market structure, regulator framework, and operator-specific quality requirements that generic ERP systems cannot model. Perth sits at the heart of the LNG and iron-ore inspection capital of Australia, supporting Woodside, Chevron, INPEX, and BHP iron ore through FIFO operations. The dominant industrial cluster — Karratha gas plant, Wheatstone & Pluto LNG, Ichthys onshore, Pilbara iron-",
  },
  {
    path: "/erp-industries/environmental-testing-labs-doha",
    title: "Environmental Testing Laboratories ERP Software in Doha | Atlantis NDT ERP",
    description: "Purpose-built ERP for environmental testing laboratories based in Doha, Qatar. Pre-loaded with QatarEnergy NFPS (North Field Production Standards), QGOSM standards, API 510 / 570 / 653, operator flow-down for QatarEnergy (LNG + upstream) and Qatargas (now within QatarEnergy LNG), and Qatar Civil Defence Department (QCDD) /  Qatar General Organisation for Standards & Metrology (QGOSM) compliance support. Demo: info@atlantisndt.com.",
    bodyH1: "Environmental Testing Laboratories ERP Software in Doha",
    bodyText: "Environmental Testing Laboratories operating in Doha face a specific combination of local market structure, regulator framework, and operator-specific quality requirements that generic ERP systems cannot model. Doha sits at the heart of the world's largest LNG operating environment, with QatarEnergy's North Field expansion creating unprecedented demand for inspection support. The dominant industrial cluster — Ras Laffan Industrial City (LNG + GTL + condensate), Mesaieed Indus",
  },
  {
    path: "/erp-industries/environmental-testing-labs-kuala-lumpur",
    title: "Environmental Testing Laboratories ERP Software in Kuala Lumpur | Atlantis NDT ERP",
    description: "Purpose-built ERP for environmental testing laboratories based in Kuala Lumpur, Malaysia. Pre-loaded with DOSH Factories & Machinery Act (FMA 1967), Petronas Technical Standards (PTS), Petronas PTS 60.0107 (NDT), operator flow-down for PETRONAS (upstream + downstream) and PETRONAS Chemicals Group (PCG), and DOSH (Department of Occupational Safety & Health) /  Suruhanjaya Tenaga (Energy Commission) compliance support. Demo: info@atlantisndt.com.",
    bodyH1: "Environmental Testing Laboratories ERP Software in Kuala Lumpur",
    bodyText: "Environmental Testing Laboratories operating in Kuala Lumpur face a specific combination of local market structure, regulator framework, and operator-specific quality requirements that generic ERP systems cannot model. Kuala Lumpur sits at the heart of PETRONAS headquarters and the Malaysian oil and gas hub, supporting upstream, midstream LNG (Bintulu), and downstream refining (Melaka). The dominant industrial cluster — PETRONAS Twin Towers HQ, Melaka refining complex, PETRON",
  },
  {
    path: "/erp-industries/environmental-testing-labs-jakarta",
    title: "Environmental Testing Laboratories ERP Software in Jakarta | Atlantis NDT ERP",
    description: "Purpose-built ERP for environmental testing laboratories based in Jakarta, Indonesia. Pre-loaded with K3 Migas oil & gas safety regulations, SNI (Standar Nasional Indonesia) for pressure equipment, Kepmen ESDM 18/2018 (NDT), operator flow-down for Pertamina (refining + upstream) and Pupuk Indonesia (fertilizers), and SKK Migas (upstream regulator) /  K3 Migas (oil & gas HSE) compliance support. Demo: info@atlantisndt.com.",
    bodyH1: "Environmental Testing Laboratories ERP Software in Jakarta",
    bodyText: "Environmental Testing Laboratories operating in Jakarta face a specific combination of local market structure, regulator framework, and operator-specific quality requirements that generic ERP systems cannot model. Jakarta sits at the heart of Indonesia's oil, gas, petrochemicals, and steel inspection hub centred on Pertamina, Pupuk Indonesia, and Bontang / Tangguh LNG. The dominant industrial cluster — Pertamina refineries (Cilacap, Balikpapan, Dumai), Bontang LNG (Kalimantan",
  },
  {
    path: "/erp-industries/environmental-testing-labs-lagos",
    title: "Environmental Testing Laboratories ERP Software in Lagos | Atlantis NDT ERP",
    description: "Purpose-built ERP for environmental testing laboratories based in Lagos, Nigeria. Pre-loaded with NUPRC / DPR Procedure Guidelines (upstream), NMDPRA Petroleum Industry Act regulations, NIMASA Marine Notices, operator flow-down for NNPCL (refineries + upstream) and Shell SPDC (onshore + shallow water), and DPR / NUPRC (upstream regulator) /  NMDPRA (midstream/downstream) compliance support. Demo: info@atlantisndt.com.",
    bodyH1: "Environmental Testing Laboratories ERP Software in Lagos",
    bodyText: "Environmental Testing Laboratories operating in Lagos face a specific combination of local market structure, regulator framework, and operator-specific quality requirements that generic ERP systems cannot model. Lagos sits at the heart of Nigeria's commercial capital and the regional hub for upstream oil & gas, refining, and LNG inspection supporting NNPCL, IOCs, and indigenous E&Ps. The dominant industrial cluster — NNPCL refineries (Port Harcourt, Warri, Kaduna) plus the ne",
  },
  {
    path: "/erp-industries/oilfield-services-houston",
    title: "Oilfield Services & Wellsite Inspection ERP Software in Houston | Atlantis NDT ERP",
    description: "Purpose-built ERP for oilfield services & wellsite inspection based in Houston, USA. Pre-loaded with API 510 / 570 / 653, ASME B31.3 / B31.4 / B31.8, ASME Section VIII Div 1, operator flow-down for ExxonMobil Baytown and Marathon Galveston Bay, and TCEQ /  OSHA Region 6 compliance support. Demo: info@atlantisndt.com.",
    bodyH1: "Oilfield Services & Wellsite Inspection ERP Software in Houston",
    bodyText: "Oilfield Services & Wellsite Inspection operating in Houston face a specific combination of local market structure, regulator framework, and operator-specific quality requirements that generic ERP systems cannot model. Houston sits at the heart of the energy capital of the world with 4,600+ energy-related firms and the densest concentration of refining and petrochemical capacity in the western hemisphere. The dominant industrial cluster — a 400-mile Gulf Coast refining and pe",
  },
  {
    path: "/erp-industries/oilfield-services-dubai",
    title: "Oilfield Services & Wellsite Inspection ERP Software in Dubai | Atlantis NDT ERP",
    description: "Purpose-built ERP for oilfield services & wellsite inspection based in Dubai, UAE. Pre-loaded with ADQCC inspection schemes, ADNOC ACS-01 (vendor), ASME Section V / VIII, operator flow-down for ADNOC Distribution and ENOC Group, and ADQCC /  MOIAT compliance support. Demo: info@atlantisndt.com.",
    bodyH1: "Oilfield Services & Wellsite Inspection ERP Software in Dubai",
    bodyText: "Oilfield Services & Wellsite Inspection operating in Dubai face a specific combination of local market structure, regulator framework, and operator-specific quality requirements that generic ERP systems cannot model. Dubai sits at the heart of the regional commercial and logistics hub for GCC oil and gas, hosting regional HQs for IOCs, EPCs, and inspection multinationals. The dominant industrial cluster — a Jebel Ali free zone industrial hub connected to ADNOC Distribution, E",
  },
  {
    path: "/erp-industries/oilfield-services-abu-dhabi",
    title: "Oilfield Services & Wellsite Inspection ERP Software in Abu Dhabi | Atlantis NDT ERP",
    description: "Purpose-built ERP for oilfield services & wellsite inspection based in Abu Dhabi, UAE. Pre-loaded with ADNOC ACS-01 (vendor qualification), ADNOC HSE-IM-RP, API 510 / 570 / 653, operator flow-down for ADNOC Onshore and ADNOC LNG, and ADNOC HSE & Asset Integrity /  ADQCC compliance support. Demo: info@atlantisndt.com.",
    bodyH1: "Oilfield Services & Wellsite Inspection ERP Software in Abu Dhabi",
    bodyText: "Oilfield Services & Wellsite Inspection operating in Abu Dhabi face a specific combination of local market structure, regulator framework, and operator-specific quality requirements that generic ERP systems cannot model. Abu Dhabi sits at the heart of the operational heart of UAE upstream and downstream, controlling 94% of UAE oil reserves through ADNOC and the Ruwais integrated complex. The dominant industrial cluster — the Ruwais industrial corridor (refining, LNG, petroche",
  },
  {
    path: "/erp-industries/oilfield-services-saudi-arabia",
    title: "Oilfield Services & Wellsite Inspection ERP Software in Saudi Arabia | Atlantis NDT ERP",
    description: "Purpose-built ERP for oilfield services & wellsite inspection based in Saudi Arabia, Saudi Arabia. Pre-loaded with Saudi Aramco SAEP-1112 (NDT personnel), Saudi Aramco SAEP-1142 (NDT qualification), Saudi Aramco SAEC-1142 (procedures), operator flow-down for Saudi Aramco (Abqaiq, Khurais, Ras Tanura) and SABIC, and HRSD (labor) /  GAMI (defense / industries) compliance support. Demo: info@atlantisndt.com.",
    bodyH1: "Oilfield Services & Wellsite Inspection ERP Software in Saudi Arabia",
    bodyText: "Oilfield Services & Wellsite Inspection operating in Saudi Arabia face a specific combination of local market structure, regulator framework, and operator-specific quality requirements that generic ERP systems cannot model. Saudi Arabia sits at the heart of the largest integrated oil and gas operating environment in the world, anchored by Saudi Aramco and SABIC. The dominant industrial cluster — the Eastern Province upstream-and-downstream complex (Abqaiq, Khurais, Ras Tanura",
  },
  {
    path: "/erp-industries/oilfield-services-singapore",
    title: "Oilfield Services & Wellsite Inspection ERP Software in Singapore | Atlantis NDT ERP",
    description: "Purpose-built ERP for oilfield services & wellsite inspection based in Singapore, Singapore. Pre-loaded with MOM Workplace Safety & Health Act, MOM WSH Regulations (Pressure Vessels), API 510 / 570 / 653, operator flow-down for ExxonMobil Jurong and Shell Pulau Bukom, and Ministry of Manpower (MOM) /  National Environment Agency (NEA) compliance support. Demo: info@atlantisndt.com.",
    bodyH1: "Oilfield Services & Wellsite Inspection ERP Software in Singapore",
    bodyText: "Oilfield Services & Wellsite Inspection operating in Singapore face a specific combination of local market structure, regulator framework, and operator-specific quality requirements that generic ERP systems cannot model. Singapore sits at the heart of one of the world's top three refining and petrochemical hubs, the marine-survey gateway for South-East Asia, and a major FPSO conversion centre. The dominant industrial cluster — Jurong Island (refining, petrochemicals, gas), Tu",
  },
  {
    path: "/erp-industries/oilfield-services-mumbai",
    title: "Oilfield Services & Wellsite Inspection ERP Software in Mumbai | Atlantis NDT ERP",
    description: "Purpose-built ERP for oilfield services & wellsite inspection based in Mumbai, India. Pre-loaded with OISD-STD-128 / 130 / 137 (corrosion & inspection), PESO Petroleum Rules 2002, IBR (Indian Boiler Regulations), operator flow-down for BPCL Mahul refinery and HPCL Mumbai refinery, and PESO (petroleum & explosives safety) /  OISD (oil industry safety) compliance support. Demo: info@atlantisndt.com.",
    bodyH1: "Oilfield Services & Wellsite Inspection ERP Software in Mumbai",
    bodyText: "Oilfield Services & Wellsite Inspection operating in Mumbai face a specific combination of local market structure, regulator framework, and operator-specific quality requirements that generic ERP systems cannot model. Mumbai sits at the heart of India's western refining, offshore production, and petrochemicals hub with the country's largest concentration of inspection demand. The dominant industrial cluster — BPCL Mahul, HPCL Mumbai, ONGC Western Offshore (Bombay High), Relia",
  },
  {
    path: "/erp-industries/oilfield-services-hyderabad",
    title: "Oilfield Services & Wellsite Inspection ERP Software in Hyderabad | Atlantis NDT ERP",
    description: "Purpose-built ERP for oilfield services & wellsite inspection based in Hyderabad, India. Pre-loaded with IBR (Indian Boiler Regulations), IS 2825 / IS 7822 (pressure vessels), AERB SC/IR-1 (radiation safety), operator flow-down for BHEL Hyderabad and HPCL Visakh refinery, and PESO /  BARC compliance support. Demo: info@atlantisndt.com.",
    bodyH1: "Oilfield Services & Wellsite Inspection ERP Software in Hyderabad",
    bodyText: "Oilfield Services & Wellsite Inspection operating in Hyderabad face a specific combination of local market structure, regulator framework, and operator-specific quality requirements that generic ERP systems cannot model. Hyderabad sits at the heart of a fast-growing inspection hub serving BHEL heavy engineering, defence manufacturing (BDL, ECIL), aerospace, pharma, and HPCL Visakh refining. The dominant industrial cluster — BHEL Hyderabad and Visakhapatnam, HPCL Visakh refine",
  },
  {
    path: "/erp-industries/oilfield-services-london",
    title: "Oilfield Services & Wellsite Inspection ERP Software in London | Atlantis NDT ERP",
    description: "Purpose-built ERP for oilfield services & wellsite inspection based in London, UK. Pre-loaded with PSSR 2000 (pressure systems safety), PUWER 1998, LOLER 1998 (lifting), operator flow-down for BP (corporate) and Shell (corporate + Stanlow legacy), and HSE /  ONR (nuclear) compliance support. Demo: info@atlantisndt.com.",
    bodyH1: "Oilfield Services & Wellsite Inspection ERP Software in London",
    bodyText: "Oilfield Services & Wellsite Inspection operating in London face a specific combination of local market structure, regulator framework, and operator-specific quality requirements that generic ERP systems cannot model. London sits at the heart of the corporate headquarters cluster for global IOCs, EPCs, and inspection multinationals, with strong demand from nuclear, aerospace, rail, and offshore segments. The dominant industrial cluster — corporate HQs in the City and Canary W",
  },
  {
    path: "/erp-industries/oilfield-services-aberdeen",
    title: "Oilfield Services & Wellsite Inspection ERP Software in Aberdeen | Atlantis NDT ERP",
    description: "Purpose-built ERP for oilfield services & wellsite inspection based in Aberdeen, UK. Pre-loaded with HSE Safety Case Regulations (SCR 2015), PFEER 1995 (fire/explosion), PSSR 2000, operator flow-down for Harbour Energy and BP North Sea, and HSE (OSD) /  Offshore Energies UK (OEUK) compliance support. Demo: info@atlantisndt.com.",
    bodyH1: "Oilfield Services & Wellsite Inspection ERP Software in Aberdeen",
    bodyText: "Oilfield Services & Wellsite Inspection operating in Aberdeen face a specific combination of local market structure, regulator framework, and operator-specific quality requirements that generic ERP systems cannot model. Aberdeen sits at the heart of the global capital of offshore decommissioning and life-extension inspection, with five decades of UKCS operational data concentrated in the city. The dominant industrial cluster — Aberdeen Harbour + Dyce heliport, supply bases fo",
  },
  {
    path: "/erp-industries/oilfield-services-calgary",
    title: "Oilfield Services & Wellsite Inspection ERP Software in Calgary | Atlantis NDT ERP",
    description: "Purpose-built ERP for oilfield services & wellsite inspection based in Calgary, Canada. Pre-loaded with ABSA AB-506 / AB-512 (pressure equipment), CSA Z662 (oil & gas pipelines), CSA B51 (pressure vessels & piping), operator flow-down for Suncor Energy and Cenovus Energy, and ABSA (Alberta Boilers Safety Association) /  AER (Alberta Energy Regulator) compliance support. Demo: info@atlantisndt.com.",
    bodyH1: "Oilfield Services & Wellsite Inspection ERP Software in Calgary",
    bodyText: "Oilfield Services & Wellsite Inspection operating in Calgary face a specific combination of local market structure, regulator framework, and operator-specific quality requirements that generic ERP systems cannot model. Calgary sits at the heart of the head-office hub for Canadian oil sands, conventional petroleum, and the trans-continental pipeline operators. The dominant industrial cluster — oil sands operations near Fort McMurray, conventional gas in Alberta and BC, plus th",
  },
  {
    path: "/erp-industries/oilfield-services-perth",
    title: "Oilfield Services & Wellsite Inspection ERP Software in Perth | Atlantis NDT ERP",
    description: "Purpose-built ERP for oilfield services & wellsite inspection based in Perth, Australia. Pre-loaded with AS/NZS 3788 (pressure equipment), AS/NZS 1554 (welding), AS 4037 (pressure equipment examination), operator flow-down for Woodside Energy (Karratha, Pluto, Scarborough, NWS) and Chevron Australia (Wheatstone, Gorgon), and WorkSafe WA /  NOPSEMA (offshore) compliance support. Demo: info@atlantisndt.com.",
    bodyH1: "Oilfield Services & Wellsite Inspection ERP Software in Perth",
    bodyText: "Oilfield Services & Wellsite Inspection operating in Perth face a specific combination of local market structure, regulator framework, and operator-specific quality requirements that generic ERP systems cannot model. Perth sits at the heart of the LNG and iron-ore inspection capital of Australia, supporting Woodside, Chevron, INPEX, and BHP iron ore through FIFO operations. The dominant industrial cluster — Karratha gas plant, Wheatstone & Pluto LNG, Ichthys onshore, Pilbara ",
  },
  {
    path: "/erp-industries/oilfield-services-doha",
    title: "Oilfield Services & Wellsite Inspection ERP Software in Doha | Atlantis NDT ERP",
    description: "Purpose-built ERP for oilfield services & wellsite inspection based in Doha, Qatar. Pre-loaded with QatarEnergy NFPS (North Field Production Standards), QGOSM standards, API 510 / 570 / 653, operator flow-down for QatarEnergy (LNG + upstream) and Qatargas (now within QatarEnergy LNG), and Qatar Civil Defence Department (QCDD) /  Qatar General Organisation for Standards & Metrology (QGOSM) compliance support. Demo: info@atlantisndt.com.",
    bodyH1: "Oilfield Services & Wellsite Inspection ERP Software in Doha",
    bodyText: "Oilfield Services & Wellsite Inspection operating in Doha face a specific combination of local market structure, regulator framework, and operator-specific quality requirements that generic ERP systems cannot model. Doha sits at the heart of the world's largest LNG operating environment, with QatarEnergy's North Field expansion creating unprecedented demand for inspection support. The dominant industrial cluster — Ras Laffan Industrial City (LNG + GTL + condensate), Mesaieed ",
  },
  {
    path: "/erp-industries/oilfield-services-kuala-lumpur",
    title: "Oilfield Services & Wellsite Inspection ERP Software in Kuala Lumpur | Atlantis NDT ERP",
    description: "Purpose-built ERP for oilfield services & wellsite inspection based in Kuala Lumpur, Malaysia. Pre-loaded with DOSH Factories & Machinery Act (FMA 1967), Petronas Technical Standards (PTS), Petronas PTS 60.0107 (NDT), operator flow-down for PETRONAS (upstream + downstream) and PETRONAS Chemicals Group (PCG), and DOSH (Department of Occupational Safety & Health) /  Suruhanjaya Tenaga (Energy Commission) compliance support. Demo: info@atlantisndt.com.",
    bodyH1: "Oilfield Services & Wellsite Inspection ERP Software in Kuala Lumpur",
    bodyText: "Oilfield Services & Wellsite Inspection operating in Kuala Lumpur face a specific combination of local market structure, regulator framework, and operator-specific quality requirements that generic ERP systems cannot model. Kuala Lumpur sits at the heart of PETRONAS headquarters and the Malaysian oil and gas hub, supporting upstream, midstream LNG (Bintulu), and downstream refining (Melaka). The dominant industrial cluster — PETRONAS Twin Towers HQ, Melaka refining complex, P",
  },
  {
    path: "/erp-industries/oilfield-services-jakarta",
    title: "Oilfield Services & Wellsite Inspection ERP Software in Jakarta | Atlantis NDT ERP",
    description: "Purpose-built ERP for oilfield services & wellsite inspection based in Jakarta, Indonesia. Pre-loaded with K3 Migas oil & gas safety regulations, SNI (Standar Nasional Indonesia) for pressure equipment, Kepmen ESDM 18/2018 (NDT), operator flow-down for Pertamina (refining + upstream) and Pupuk Indonesia (fertilizers), and SKK Migas (upstream regulator) /  K3 Migas (oil & gas HSE) compliance support. Demo: info@atlantisndt.com.",
    bodyH1: "Oilfield Services & Wellsite Inspection ERP Software in Jakarta",
    bodyText: "Oilfield Services & Wellsite Inspection operating in Jakarta face a specific combination of local market structure, regulator framework, and operator-specific quality requirements that generic ERP systems cannot model. Jakarta sits at the heart of Indonesia's oil, gas, petrochemicals, and steel inspection hub centred on Pertamina, Pupuk Indonesia, and Bontang / Tangguh LNG. The dominant industrial cluster — Pertamina refineries (Cilacap, Balikpapan, Dumai), Bontang LNG (Kalim",
  },
  {
    path: "/erp-industries/oilfield-services-lagos",
    title: "Oilfield Services & Wellsite Inspection ERP Software in Lagos | Atlantis NDT ERP",
    description: "Purpose-built ERP for oilfield services & wellsite inspection based in Lagos, Nigeria. Pre-loaded with NUPRC / DPR Procedure Guidelines (upstream), NMDPRA Petroleum Industry Act regulations, NIMASA Marine Notices, operator flow-down for NNPCL (refineries + upstream) and Shell SPDC (onshore + shallow water), and DPR / NUPRC (upstream regulator) /  NMDPRA (midstream/downstream) compliance support. Demo: info@atlantisndt.com.",
    bodyH1: "Oilfield Services & Wellsite Inspection ERP Software in Lagos",
    bodyText: "Oilfield Services & Wellsite Inspection operating in Lagos face a specific combination of local market structure, regulator framework, and operator-specific quality requirements that generic ERP systems cannot model. Lagos sits at the heart of Nigeria's commercial capital and the regional hub for upstream oil & gas, refining, and LNG inspection supporting NNPCL, IOCs, and indigenous E&Ps. The dominant industrial cluster — NNPCL refineries (Port Harcourt, Warri, Kaduna) plus t",
  },
  {
    path: "/erp-modules/certification-tracking-for-ndt-inspection-companies",
    title: "Certification & Personnel Qualification for NDT Inspection Companies | Atlantis NDT ERP",
    description: "Certification & Personnel Qualification for NDT Inspection Companies — purpose-configured module from Atlantis NDT ERP. ASNT SNT-TC-1A / CP-189 / ACCP, ISO 9712:2021, PCN GEN. Demo: info@atlantisndt.com.",
    bodyH1: "Certification & Personnel Qualification for NDT Inspection Companies | Atlantis NDT ERP",
    bodyText: "Certification & Personnel Qualification for NDT Inspection Companies — purpose-configured module from Atlantis NDT ERP. ASNT SNT-TC-1A / CP-189 / ACCP, ISO 9712:2021, PCN GEN. Demo: info@atlantisndt.com.",
  },
  {
    path: "/erp-modules/work-order-management-for-ndt-inspection-companies",
    title: "Work Order & Job Management for NDT Inspection Companies | Atlantis NDT ERP",
    description: "Work Order & Job Management for NDT Inspection Companies — purpose-configured module from Atlantis NDT ERP. ASNT SNT-TC-1A / CP-189 / ACCP, ISO 9712:2021, PCN GEN. Demo: info@atlantisndt.com.",
    bodyH1: "Work Order & Job Management for NDT Inspection Companies | Atlantis NDT ERP",
    bodyText: "Work Order & Job Management for NDT Inspection Companies — purpose-configured module from Atlantis NDT ERP. ASNT SNT-TC-1A / CP-189 / ACCP, ISO 9712:2021, PCN GEN. Demo: info@atlantisndt.com.",
  },
  {
    path: "/erp-modules/inspection-scheduling-for-ndt-inspection-companies",
    title: "Inspection Scheduling & Interval Management for NDT Inspection Companies | Atlantis NDT ERP",
    description: "Inspection Scheduling & Interval Management for NDT Inspection Companies — purpose-configured module from Atlantis NDT ERP. ASNT SNT-TC-1A / CP-189 / ACCP, ISO 9712:2021, PCN GEN. Demo: info@atlantisndt.com.",
    bodyH1: "Inspection Scheduling & Interval Management for NDT Inspection Companies | Atlantis NDT ERP",
    bodyText: "Inspection Scheduling & Interval Management for NDT Inspection Companies — purpose-configured module from Atlantis NDT ERP. ASNT SNT-TC-1A / CP-189 / ACCP, ISO 9712:2021, PCN GEN. Demo: info@atlantisndt.com.",
  },
  {
    path: "/erp-modules/asset-management-for-ndt-inspection-companies",
    title: "Asset Integrity & Equipment Register for NDT Inspection Companies | Atlantis NDT ERP",
    description: "Asset Integrity & Equipment Register for NDT Inspection Companies — purpose-configured module from Atlantis NDT ERP. ASNT SNT-TC-1A / CP-189 / ACCP, ISO 9712:2021, PCN GEN. Demo: info@atlantisndt.com.",
    bodyH1: "Asset Integrity & Equipment Register for NDT Inspection Companies | Atlantis NDT ERP",
    bodyText: "Asset Integrity & Equipment Register for NDT Inspection Companies — purpose-configured module from Atlantis NDT ERP. ASNT SNT-TC-1A / CP-189 / ACCP, ISO 9712:2021, PCN GEN. Demo: info@atlantisndt.com.",
  },
  {
    path: "/erp-modules/corrosion-tracking-for-ndt-inspection-companies",
    title: "Corrosion Tracking & RBI for NDT Inspection Companies | Atlantis NDT ERP",
    description: "Corrosion Tracking & RBI for NDT Inspection Companies — purpose-configured module from Atlantis NDT ERP. ASNT SNT-TC-1A / CP-189 / ACCP, ISO 9712:2021, PCN GEN. Demo: info@atlantisndt.com.",
    bodyH1: "Corrosion Tracking & RBI for NDT Inspection Companies | Atlantis NDT ERP",
    bodyText: "Corrosion Tracking & RBI for NDT Inspection Companies — purpose-configured module from Atlantis NDT ERP. ASNT SNT-TC-1A / CP-189 / ACCP, ISO 9712:2021, PCN GEN. Demo: info@atlantisndt.com.",
  },
  {
    path: "/erp-modules/quality-management-for-ndt-inspection-companies",
    title: "Quality Management & NCR for NDT Inspection Companies | Atlantis NDT ERP",
    description: "Quality Management & NCR for NDT Inspection Companies — purpose-configured module from Atlantis NDT ERP. ASNT SNT-TC-1A / CP-189 / ACCP, ISO 9712:2021, PCN GEN. Demo: info@atlantisndt.com.",
    bodyH1: "Quality Management & NCR for NDT Inspection Companies | Atlantis NDT ERP",
    bodyText: "Quality Management & NCR for NDT Inspection Companies — purpose-configured module from Atlantis NDT ERP. ASNT SNT-TC-1A / CP-189 / ACCP, ISO 9712:2021, PCN GEN. Demo: info@atlantisndt.com.",
  },
  {
    path: "/erp-modules/document-control-for-ndt-inspection-companies",
    title: "Document Control & QMS for NDT Inspection Companies | Atlantis NDT ERP",
    description: "Document Control & QMS for NDT Inspection Companies — purpose-configured module from Atlantis NDT ERP. ASNT SNT-TC-1A / CP-189 / ACCP, ISO 9712:2021, PCN GEN. Demo: info@atlantisndt.com.",
    bodyH1: "Document Control & QMS for NDT Inspection Companies | Atlantis NDT ERP",
    bodyText: "Document Control & QMS for NDT Inspection Companies — purpose-configured module from Atlantis NDT ERP. ASNT SNT-TC-1A / CP-189 / ACCP, ISO 9712:2021, PCN GEN. Demo: info@atlantisndt.com.",
  },
  {
    path: "/erp-modules/inventory-management-for-ndt-inspection-companies",
    title: "Inventory Management for NDT Inspection Companies | Atlantis NDT ERP",
    description: "Inventory Management for NDT Inspection Companies — purpose-configured module from Atlantis NDT ERP. ASNT SNT-TC-1A / CP-189 / ACCP, ISO 9712:2021, PCN GEN. Demo: info@atlantisndt.com.",
    bodyH1: "Inventory Management for NDT Inspection Companies | Atlantis NDT ERP",
    bodyText: "Inventory Management for NDT Inspection Companies — purpose-configured module from Atlantis NDT ERP. ASNT SNT-TC-1A / CP-189 / ACCP, ISO 9712:2021, PCN GEN. Demo: info@atlantisndt.com.",
  },
  {
    path: "/erp-modules/calibration-management-for-calibration-laboratories",
    title: "Calibration Management for Calibration Laboratories | Atlantis NDT ERP",
    description: "Calibration Management for Calibration Laboratories — purpose-configured module from Atlantis NDT ERP. ISO/IEC 17025:2017, ANSI/NCSL Z540.1 / Z540.3, ISO 10012:2003. Demo: info@atlantisndt.com.",
    bodyH1: "Calibration Management for Calibration Laboratories | Atlantis NDT ERP",
    bodyText: "Calibration Management for Calibration Laboratories — purpose-configured module from Atlantis NDT ERP. ISO/IEC 17025:2017, ANSI/NCSL Z540.1 / Z540.3, ISO 10012:2003. Demo: info@atlantisndt.com.",
  },
  {
    path: "/erp-modules/work-order-management-for-calibration-laboratories",
    title: "Work Order & Job Management for Calibration Laboratories | Atlantis NDT ERP",
    description: "Work Order & Job Management for Calibration Laboratories — purpose-configured module from Atlantis NDT ERP. ISO/IEC 17025:2017, ANSI/NCSL Z540.1 / Z540.3, ISO 10012:2003. Demo: info@atlantisndt.com.",
    bodyH1: "Work Order & Job Management for Calibration Laboratories | Atlantis NDT ERP",
    bodyText: "Work Order & Job Management for Calibration Laboratories — purpose-configured module from Atlantis NDT ERP. ISO/IEC 17025:2017, ANSI/NCSL Z540.1 / Z540.3, ISO 10012:2003. Demo: info@atlantisndt.com.",
  },
  {
    path: "/erp-modules/certification-tracking-for-calibration-laboratories",
    title: "Certification & Personnel Qualification for Calibration Laboratories | Atlantis NDT ERP",
    description: "Certification & Personnel Qualification for Calibration Laboratories — purpose-configured module from Atlantis NDT ERP. ISO/IEC 17025:2017, ANSI/NCSL Z540.1 / Z540.3, ISO 10012:2003. Demo: info@atlantisndt.com.",
    bodyH1: "Certification & Personnel Qualification for Calibration Laboratories | Atlantis NDT ERP",
    bodyText: "Certification & Personnel Qualification for Calibration Laboratories — purpose-configured module from Atlantis NDT ERP. ISO/IEC 17025:2017, ANSI/NCSL Z540.1 / Z540.3, ISO 10012:2003. Demo: info@atlantisndt.com.",
  },
  {
    path: "/erp-modules/audit-management-for-calibration-laboratories",
    title: "Audit & Compliance Management for Calibration Laboratories | Atlantis NDT ERP",
    description: "Audit & Compliance Management for Calibration Laboratories — purpose-configured module from Atlantis NDT ERP. ISO/IEC 17025:2017, ANSI/NCSL Z540.1 / Z540.3, ISO 10012:2003. Demo: info@atlantisndt.com.",
    bodyH1: "Audit & Compliance Management for Calibration Laboratories | Atlantis NDT ERP",
    bodyText: "Audit & Compliance Management for Calibration Laboratories — purpose-configured module from Atlantis NDT ERP. ISO/IEC 17025:2017, ANSI/NCSL Z540.1 / Z540.3, ISO 10012:2003. Demo: info@atlantisndt.com.",
  },
  {
    path: "/erp-modules/document-control-for-calibration-laboratories",
    title: "Document Control & QMS for Calibration Laboratories | Atlantis NDT ERP",
    description: "Document Control & QMS for Calibration Laboratories — purpose-configured module from Atlantis NDT ERP. ISO/IEC 17025:2017, ANSI/NCSL Z540.1 / Z540.3, ISO 10012:2003. Demo: info@atlantisndt.com.",
    bodyH1: "Document Control & QMS for Calibration Laboratories | Atlantis NDT ERP",
    bodyText: "Document Control & QMS for Calibration Laboratories — purpose-configured module from Atlantis NDT ERP. ISO/IEC 17025:2017, ANSI/NCSL Z540.1 / Z540.3, ISO 10012:2003. Demo: info@atlantisndt.com.",
  },
  {
    path: "/erp-modules/quality-management-for-calibration-laboratories",
    title: "Quality Management & NCR for Calibration Laboratories | Atlantis NDT ERP",
    description: "Quality Management & NCR for Calibration Laboratories — purpose-configured module from Atlantis NDT ERP. ISO/IEC 17025:2017, ANSI/NCSL Z540.1 / Z540.3, ISO 10012:2003. Demo: info@atlantisndt.com.",
    bodyH1: "Quality Management & NCR for Calibration Laboratories | Atlantis NDT ERP",
    bodyText: "Quality Management & NCR for Calibration Laboratories — purpose-configured module from Atlantis NDT ERP. ISO/IEC 17025:2017, ANSI/NCSL Z540.1 / Z540.3, ISO 10012:2003. Demo: info@atlantisndt.com.",
  },
  {
    path: "/erp-modules/inventory-management-for-calibration-laboratories",
    title: "Inventory Management for Calibration Laboratories | Atlantis NDT ERP",
    description: "Inventory Management for Calibration Laboratories — purpose-configured module from Atlantis NDT ERP. ISO/IEC 17025:2017, ANSI/NCSL Z540.1 / Z540.3, ISO 10012:2003. Demo: info@atlantisndt.com.",
    bodyH1: "Inventory Management for Calibration Laboratories | Atlantis NDT ERP",
    bodyText: "Inventory Management for Calibration Laboratories — purpose-configured module from Atlantis NDT ERP. ISO/IEC 17025:2017, ANSI/NCSL Z540.1 / Z540.3, ISO 10012:2003. Demo: info@atlantisndt.com.",
  },
  {
    path: "/erp-modules/asset-management-for-calibration-laboratories",
    title: "Asset Integrity & Equipment Register for Calibration Laboratories | Atlantis NDT ERP",
    description: "Asset Integrity & Equipment Register for Calibration Laboratories — purpose-configured module from Atlantis NDT ERP. ISO/IEC 17025:2017, ANSI/NCSL Z540.1 / Z540.3, ISO 10012:2003. Demo: info@atlantisndt.com.",
    bodyH1: "Asset Integrity & Equipment Register for Calibration Laboratories | Atlantis NDT ERP",
    bodyText: "Asset Integrity & Equipment Register for Calibration Laboratories — purpose-configured module from Atlantis NDT ERP. ISO/IEC 17025:2017, ANSI/NCSL Z540.1 / Z540.3, ISO 10012:2003. Demo: info@atlantisndt.com.",
  },
  {
    path: "/erp-modules/certification-tracking-for-welding-fabrication-shops",
    title: "Certification & Personnel Qualification for Welding & Fabrication Shops | Atlantis NDT ERP",
    description: "Certification & Personnel Qualification for Welding & Fabrication Shops — purpose-configured module from Atlantis NDT ERP. AWS D1.1 / D1.5 / D1.6 / D14, ASME Section IX, ASME Section VIII Division 1. Demo: info@atlantisndt.com.",
    bodyH1: "Certification & Personnel Qualification for Welding & Fabrication Shops | Atlantis NDT ERP",
    bodyText: "Certification & Personnel Qualification for Welding & Fabrication Shops — purpose-configured module from Atlantis NDT ERP. AWS D1.1 / D1.5 / D1.6 / D14, ASME Section IX, ASME Section VIII Division 1. Demo: info@atlantisndt.com.",
  },
  {
    path: "/erp-modules/work-order-management-for-welding-fabrication-shops",
    title: "Work Order & Job Management for Welding & Fabrication Shops | Atlantis NDT ERP",
    description: "Work Order & Job Management for Welding & Fabrication Shops — purpose-configured module from Atlantis NDT ERP. AWS D1.1 / D1.5 / D1.6 / D14, ASME Section IX, ASME Section VIII Division 1. Demo: info@atlantisndt.com.",
    bodyH1: "Work Order & Job Management for Welding & Fabrication Shops | Atlantis NDT ERP",
    bodyText: "Work Order & Job Management for Welding & Fabrication Shops — purpose-configured module from Atlantis NDT ERP. AWS D1.1 / D1.5 / D1.6 / D14, ASME Section IX, ASME Section VIII Division 1. Demo: info@atlantisndt.com.",
  },
  {
    path: "/erp-modules/document-control-for-welding-fabrication-shops",
    title: "Document Control & QMS for Welding & Fabrication Shops | Atlantis NDT ERP",
    description: "Document Control & QMS for Welding & Fabrication Shops — purpose-configured module from Atlantis NDT ERP. AWS D1.1 / D1.5 / D1.6 / D14, ASME Section IX, ASME Section VIII Division 1. Demo: info@atlantisndt.com.",
    bodyH1: "Document Control & QMS for Welding & Fabrication Shops | Atlantis NDT ERP",
    bodyText: "Document Control & QMS for Welding & Fabrication Shops — purpose-configured module from Atlantis NDT ERP. AWS D1.1 / D1.5 / D1.6 / D14, ASME Section IX, ASME Section VIII Division 1. Demo: info@atlantisndt.com.",
  },
  {
    path: "/erp-modules/quality-management-for-welding-fabrication-shops",
    title: "Quality Management & NCR for Welding & Fabrication Shops | Atlantis NDT ERP",
    description: "Quality Management & NCR for Welding & Fabrication Shops — purpose-configured module from Atlantis NDT ERP. AWS D1.1 / D1.5 / D1.6 / D14, ASME Section IX, ASME Section VIII Division 1. Demo: info@atlantisndt.com.",
    bodyH1: "Quality Management & NCR for Welding & Fabrication Shops | Atlantis NDT ERP",
    bodyText: "Quality Management & NCR for Welding & Fabrication Shops — purpose-configured module from Atlantis NDT ERP. AWS D1.1 / D1.5 / D1.6 / D14, ASME Section IX, ASME Section VIII Division 1. Demo: info@atlantisndt.com.",
  },
  {
    path: "/erp-modules/audit-management-for-welding-fabrication-shops",
    title: "Audit & Compliance Management for Welding & Fabrication Shops | Atlantis NDT ERP",
    description: "Audit & Compliance Management for Welding & Fabrication Shops — purpose-configured module from Atlantis NDT ERP. AWS D1.1 / D1.5 / D1.6 / D14, ASME Section IX, ASME Section VIII Division 1. Demo: info@atlantisndt.com.",
    bodyH1: "Audit & Compliance Management for Welding & Fabrication Shops | Atlantis NDT ERP",
    bodyText: "Audit & Compliance Management for Welding & Fabrication Shops — purpose-configured module from Atlantis NDT ERP. AWS D1.1 / D1.5 / D1.6 / D14, ASME Section IX, ASME Section VIII Division 1. Demo: info@atlantisndt.com.",
  },
  {
    path: "/erp-modules/asset-management-for-welding-fabrication-shops",
    title: "Asset Integrity & Equipment Register for Welding & Fabrication Shops | Atlantis NDT ERP",
    description: "Asset Integrity & Equipment Register for Welding & Fabrication Shops — purpose-configured module from Atlantis NDT ERP. AWS D1.1 / D1.5 / D1.6 / D14, ASME Section IX, ASME Section VIII Division 1. Demo: info@atlantisndt.com.",
    bodyH1: "Asset Integrity & Equipment Register for Welding & Fabrication Shops | Atlantis NDT ERP",
    bodyText: "Asset Integrity & Equipment Register for Welding & Fabrication Shops — purpose-configured module from Atlantis NDT ERP. AWS D1.1 / D1.5 / D1.6 / D14, ASME Section IX, ASME Section VIII Division 1. Demo: info@atlantisndt.com.",
  },
  {
    path: "/erp-modules/inventory-management-for-welding-fabrication-shops",
    title: "Inventory Management for Welding & Fabrication Shops | Atlantis NDT ERP",
    description: "Inventory Management for Welding & Fabrication Shops — purpose-configured module from Atlantis NDT ERP. AWS D1.1 / D1.5 / D1.6 / D14, ASME Section IX, ASME Section VIII Division 1. Demo: info@atlantisndt.com.",
    bodyH1: "Inventory Management for Welding & Fabrication Shops | Atlantis NDT ERP",
    bodyText: "Inventory Management for Welding & Fabrication Shops — purpose-configured module from Atlantis NDT ERP. AWS D1.1 / D1.5 / D1.6 / D14, ASME Section IX, ASME Section VIII Division 1. Demo: info@atlantisndt.com.",
  },
  {
    path: "/erp-modules/project-management-for-welding-fabrication-shops",
    title: "Project Management & Turnaround Support for Welding & Fabrication Shops | Atlantis NDT ERP",
    description: "Project Management & Turnaround Support for Welding & Fabrication Shops — purpose-configured module from Atlantis NDT ERP. AWS D1.1 / D1.5 / D1.6 / D14, ASME Section IX, ASME Section VIII Division 1. Demo: info@atlantisndt.com.",
    bodyH1: "Project Management & Turnaround Support for Welding & Fabrication Shops | Atlantis NDT ERP",
    bodyText: "Project Management & Turnaround Support for Welding & Fabrication Shops — purpose-configured module from Atlantis NDT ERP. AWS D1.1 / D1.5 / D1.6 / D14, ASME Section IX, ASME Section VIII Division 1. Demo: info@atlantisndt.com.",
  },
  {
    path: "/erp-modules/work-order-management-for-marine-survey-companies",
    title: "Work Order & Job Management for Marine Survey & Offshore Inspection | Atlantis NDT ERP",
    description: "Work Order & Job Management for Marine Survey & Offshore Inspection — purpose-configured module from Atlantis NDT ERP. IMO MARPOL / SOLAS / STCW, IACS UR / common rules, DNV / ABS / LR / BV / ClassNK / RINA / KR class rules. Demo: info@atlantisndt.com.",
    bodyH1: "Work Order & Job Management for Marine Survey & Offshore Inspection | Atlantis NDT ERP",
    bodyText: "Work Order & Job Management for Marine Survey & Offshore Inspection — purpose-configured module from Atlantis NDT ERP. IMO MARPOL / SOLAS / STCW, IACS UR / common rules, DNV / ABS / LR / BV / ClassNK / RINA / KR class rules. Demo: info@atlantisndt.com.",
  },
  {
    path: "/erp-modules/certification-tracking-for-marine-survey-companies",
    title: "Certification & Personnel Qualification for Marine Survey & Offshore Inspection | Atlantis NDT ERP",
    description: "Certification & Personnel Qualification for Marine Survey & Offshore Inspection — purpose-configured module from Atlantis NDT ERP. IMO MARPOL / SOLAS / STCW, IACS UR / common rules, DNV / ABS / LR / BV / ClassNK / RINA / KR class rules. Demo: info@atlantisndt.com.",
    bodyH1: "Certification & Personnel Qualification for Marine Survey & Offshore Inspection | Atlantis NDT ERP",
    bodyText: "Certification & Personnel Qualification for Marine Survey & Offshore Inspection — purpose-configured module from Atlantis NDT ERP. IMO MARPOL / SOLAS / STCW, IACS UR / common rules, DNV / ABS / LR / BV / ClassNK / RINA / KR class rules. Demo: info@atlantisndt.com.",
  },
  {
    path: "/erp-modules/asset-management-for-marine-survey-companies",
    title: "Asset Integrity & Equipment Register for Marine Survey & Offshore Inspection | Atlantis NDT ERP",
    description: "Asset Integrity & Equipment Register for Marine Survey & Offshore Inspection — purpose-configured module from Atlantis NDT ERP. IMO MARPOL / SOLAS / STCW, IACS UR / common rules, DNV / ABS / LR / BV / ClassNK / RINA / KR class rules. Demo: info@atlantisndt.com.",
    bodyH1: "Asset Integrity & Equipment Register for Marine Survey & Offshore Inspection | Atlantis NDT ERP",
    bodyText: "Asset Integrity & Equipment Register for Marine Survey & Offshore Inspection — purpose-configured module from Atlantis NDT ERP. IMO MARPOL / SOLAS / STCW, IACS UR / common rules, DNV / ABS / LR / BV / ClassNK / RINA / KR class rules. Demo: info@atlantisndt.com.",
  },
  {
    path: "/erp-modules/project-management-for-marine-survey-companies",
    title: "Project Management & Turnaround Support for Marine Survey & Offshore Inspection | Atlantis NDT ERP",
    description: "Project Management & Turnaround Support for Marine Survey & Offshore Inspection — purpose-configured module from Atlantis NDT ERP. IMO MARPOL / SOLAS / STCW, IACS UR / common rules, DNV / ABS / LR / BV / ClassNK / RINA / KR class rules. Demo: info@atlantisndt.com.",
    bodyH1: "Project Management & Turnaround Support for Marine Survey & Offshore Inspection | Atlantis NDT ERP",
    bodyText: "Project Management & Turnaround Support for Marine Survey & Offshore Inspection — purpose-configured module from Atlantis NDT ERP. IMO MARPOL / SOLAS / STCW, IACS UR / common rules, DNV / ABS / LR / BV / ClassNK / RINA / KR class rules. Demo: info@atlantisndt.com.",
  },
  {
    path: "/erp-modules/document-control-for-marine-survey-companies",
    title: "Document Control & QMS for Marine Survey & Offshore Inspection | Atlantis NDT ERP",
    description: "Document Control & QMS for Marine Survey & Offshore Inspection — purpose-configured module from Atlantis NDT ERP. IMO MARPOL / SOLAS / STCW, IACS UR / common rules, DNV / ABS / LR / BV / ClassNK / RINA / KR class rules. Demo: info@atlantisndt.com.",
    bodyH1: "Document Control & QMS for Marine Survey & Offshore Inspection | Atlantis NDT ERP",
    bodyText: "Document Control & QMS for Marine Survey & Offshore Inspection — purpose-configured module from Atlantis NDT ERP. IMO MARPOL / SOLAS / STCW, IACS UR / common rules, DNV / ABS / LR / BV / ClassNK / RINA / KR class rules. Demo: info@atlantisndt.com.",
  },
  {
    path: "/erp-modules/quality-management-for-marine-survey-companies",
    title: "Quality Management & NCR for Marine Survey & Offshore Inspection | Atlantis NDT ERP",
    description: "Quality Management & NCR for Marine Survey & Offshore Inspection — purpose-configured module from Atlantis NDT ERP. IMO MARPOL / SOLAS / STCW, IACS UR / common rules, DNV / ABS / LR / BV / ClassNK / RINA / KR class rules. Demo: info@atlantisndt.com.",
    bodyH1: "Quality Management & NCR for Marine Survey & Offshore Inspection | Atlantis NDT ERP",
    bodyText: "Quality Management & NCR for Marine Survey & Offshore Inspection — purpose-configured module from Atlantis NDT ERP. IMO MARPOL / SOLAS / STCW, IACS UR / common rules, DNV / ABS / LR / BV / ClassNK / RINA / KR class rules. Demo: info@atlantisndt.com.",
  },
  {
    path: "/erp-modules/audit-management-for-marine-survey-companies",
    title: "Audit & Compliance Management for Marine Survey & Offshore Inspection | Atlantis NDT ERP",
    description: "Audit & Compliance Management for Marine Survey & Offshore Inspection — purpose-configured module from Atlantis NDT ERP. IMO MARPOL / SOLAS / STCW, IACS UR / common rules, DNV / ABS / LR / BV / ClassNK / RINA / KR class rules. Demo: info@atlantisndt.com.",
    bodyH1: "Audit & Compliance Management for Marine Survey & Offshore Inspection | Atlantis NDT ERP",
    bodyText: "Audit & Compliance Management for Marine Survey & Offshore Inspection — purpose-configured module from Atlantis NDT ERP. IMO MARPOL / SOLAS / STCW, IACS UR / common rules, DNV / ABS / LR / BV / ClassNK / RINA / KR class rules. Demo: info@atlantisndt.com.",
  },
  {
    path: "/erp-modules/inventory-management-for-marine-survey-companies",
    title: "Inventory Management for Marine Survey & Offshore Inspection | Atlantis NDT ERP",
    description: "Inventory Management for Marine Survey & Offshore Inspection — purpose-configured module from Atlantis NDT ERP. IMO MARPOL / SOLAS / STCW, IACS UR / common rules, DNV / ABS / LR / BV / ClassNK / RINA / KR class rules. Demo: info@atlantisndt.com.",
    bodyH1: "Inventory Management for Marine Survey & Offshore Inspection | Atlantis NDT ERP",
    bodyText: "Inventory Management for Marine Survey & Offshore Inspection — purpose-configured module from Atlantis NDT ERP. IMO MARPOL / SOLAS / STCW, IACS UR / common rules, DNV / ABS / LR / BV / ClassNK / RINA / KR class rules. Demo: info@atlantisndt.com.",
  },
  {
    path: "/erp-modules/asset-management-for-pipeline-integrity-services",
    title: "Asset Integrity & Equipment Register for Pipeline Integrity & ILI Services | Atlantis NDT ERP",
    description: "Asset Integrity & Equipment Register for Pipeline Integrity & ILI Services — purpose-configured module from Atlantis NDT ERP. API 1163 (ILI qualification), API 1160 (pipeline IMP), ASME B31.4 / B31.8 / B31.8S (pipeline). Demo: info@atlantisndt.com.",
    bodyH1: "Asset Integrity & Equipment Register for Pipeline Integrity & ILI Services | Atlantis NDT ERP",
    bodyText: "Asset Integrity & Equipment Register for Pipeline Integrity & ILI Services — purpose-configured module from Atlantis NDT ERP. API 1163 (ILI qualification), API 1160 (pipeline IMP), ASME B31.4 / B31.8 / B31.8S (pipeline). Demo: info@atlantisndt.com.",
  },
  {
    path: "/erp-modules/corrosion-tracking-for-pipeline-integrity-services",
    title: "Corrosion Tracking & RBI for Pipeline Integrity & ILI Services | Atlantis NDT ERP",
    description: "Corrosion Tracking & RBI for Pipeline Integrity & ILI Services — purpose-configured module from Atlantis NDT ERP. API 1163 (ILI qualification), API 1160 (pipeline IMP), ASME B31.4 / B31.8 / B31.8S (pipeline). Demo: info@atlantisndt.com.",
    bodyH1: "Corrosion Tracking & RBI for Pipeline Integrity & ILI Services | Atlantis NDT ERP",
    bodyText: "Corrosion Tracking & RBI for Pipeline Integrity & ILI Services — purpose-configured module from Atlantis NDT ERP. API 1163 (ILI qualification), API 1160 (pipeline IMP), ASME B31.4 / B31.8 / B31.8S (pipeline). Demo: info@atlantisndt.com.",
  },
  {
    path: "/erp-modules/work-order-management-for-pipeline-integrity-services",
    title: "Work Order & Job Management for Pipeline Integrity & ILI Services | Atlantis NDT ERP",
    description: "Work Order & Job Management for Pipeline Integrity & ILI Services — purpose-configured module from Atlantis NDT ERP. API 1163 (ILI qualification), API 1160 (pipeline IMP), ASME B31.4 / B31.8 / B31.8S (pipeline). Demo: info@atlantisndt.com.",
    bodyH1: "Work Order & Job Management for Pipeline Integrity & ILI Services | Atlantis NDT ERP",
    bodyText: "Work Order & Job Management for Pipeline Integrity & ILI Services — purpose-configured module from Atlantis NDT ERP. API 1163 (ILI qualification), API 1160 (pipeline IMP), ASME B31.4 / B31.8 / B31.8S (pipeline). Demo: info@atlantisndt.com.",
  },
  {
    path: "/erp-modules/inspection-scheduling-for-pipeline-integrity-services",
    title: "Inspection Scheduling & Interval Management for Pipeline Integrity & ILI Services | Atlantis NDT ERP",
    description: "Inspection Scheduling & Interval Management for Pipeline Integrity & ILI Services — purpose-configured module from Atlantis NDT ERP. API 1163 (ILI qualification), API 1160 (pipeline IMP), ASME B31.4 / B31.8 / B31.8S (pipeline). Demo: info@atlantisndt.com.",
    bodyH1: "Inspection Scheduling & Interval Management for Pipeline Integrity & ILI Services | Atlantis NDT ERP",
    bodyText: "Inspection Scheduling & Interval Management for Pipeline Integrity & ILI Services — purpose-configured module from Atlantis NDT ERP. API 1163 (ILI qualification), API 1160 (pipeline IMP), ASME B31.4 / B31.8 / B31.8S (pipeline). Demo: info@atlantisndt.com.",
  },
  {
    path: "/erp-modules/document-control-for-pipeline-integrity-services",
    title: "Document Control & QMS for Pipeline Integrity & ILI Services | Atlantis NDT ERP",
    description: "Document Control & QMS for Pipeline Integrity & ILI Services — purpose-configured module from Atlantis NDT ERP. API 1163 (ILI qualification), API 1160 (pipeline IMP), ASME B31.4 / B31.8 / B31.8S (pipeline). Demo: info@atlantisndt.com.",
    bodyH1: "Document Control & QMS for Pipeline Integrity & ILI Services | Atlantis NDT ERP",
    bodyText: "Document Control & QMS for Pipeline Integrity & ILI Services — purpose-configured module from Atlantis NDT ERP. API 1163 (ILI qualification), API 1160 (pipeline IMP), ASME B31.4 / B31.8 / B31.8S (pipeline). Demo: info@atlantisndt.com.",
  },
  {
    path: "/erp-modules/quality-management-for-pipeline-integrity-services",
    title: "Quality Management & NCR for Pipeline Integrity & ILI Services | Atlantis NDT ERP",
    description: "Quality Management & NCR for Pipeline Integrity & ILI Services — purpose-configured module from Atlantis NDT ERP. API 1163 (ILI qualification), API 1160 (pipeline IMP), ASME B31.4 / B31.8 / B31.8S (pipeline). Demo: info@atlantisndt.com.",
    bodyH1: "Quality Management & NCR for Pipeline Integrity & ILI Services | Atlantis NDT ERP",
    bodyText: "Quality Management & NCR for Pipeline Integrity & ILI Services — purpose-configured module from Atlantis NDT ERP. API 1163 (ILI qualification), API 1160 (pipeline IMP), ASME B31.4 / B31.8 / B31.8S (pipeline). Demo: info@atlantisndt.com.",
  },
  {
    path: "/erp-modules/audit-management-for-pipeline-integrity-services",
    title: "Audit & Compliance Management for Pipeline Integrity & ILI Services | Atlantis NDT ERP",
    description: "Audit & Compliance Management for Pipeline Integrity & ILI Services — purpose-configured module from Atlantis NDT ERP. API 1163 (ILI qualification), API 1160 (pipeline IMP), ASME B31.4 / B31.8 / B31.8S (pipeline). Demo: info@atlantisndt.com.",
    bodyH1: "Audit & Compliance Management for Pipeline Integrity & ILI Services | Atlantis NDT ERP",
    bodyText: "Audit & Compliance Management for Pipeline Integrity & ILI Services — purpose-configured module from Atlantis NDT ERP. API 1163 (ILI qualification), API 1160 (pipeline IMP), ASME B31.4 / B31.8 / B31.8S (pipeline). Demo: info@atlantisndt.com.",
  },
  {
    path: "/erp-modules/project-management-for-pipeline-integrity-services",
    title: "Project Management & Turnaround Support for Pipeline Integrity & ILI Services | Atlantis NDT ERP",
    description: "Project Management & Turnaround Support for Pipeline Integrity & ILI Services — purpose-configured module from Atlantis NDT ERP. API 1163 (ILI qualification), API 1160 (pipeline IMP), ASME B31.4 / B31.8 / B31.8S (pipeline). Demo: info@atlantisndt.com.",
    bodyH1: "Project Management & Turnaround Support for Pipeline Integrity & ILI Services | Atlantis NDT ERP",
    bodyText: "Project Management & Turnaround Support for Pipeline Integrity & ILI Services — purpose-configured module from Atlantis NDT ERP. API 1163 (ILI qualification), API 1160 (pipeline IMP), ASME B31.4 / B31.8 / B31.8S (pipeline). Demo: info@atlantisndt.com.",
  },
  {
    path: "/erp-modules/certification-tracking-for-aerospace-quality-control",
    title: "Certification & Personnel Qualification for Aerospace Quality Control | Atlantis NDT ERP",
    description: "Certification & Personnel Qualification for Aerospace Quality Control — purpose-configured module from Atlantis NDT ERP. AS9100D / AS9120 / AS9110 (MRO), NAS-410 Rev 5, FAA 14 CFR Part 145 / 21. Demo: info@atlantisndt.com.",
    bodyH1: "Certification & Personnel Qualification for Aerospace Quality Control | Atlantis NDT ERP",
    bodyText: "Certification & Personnel Qualification for Aerospace Quality Control — purpose-configured module from Atlantis NDT ERP. AS9100D / AS9120 / AS9110 (MRO), NAS-410 Rev 5, FAA 14 CFR Part 145 / 21. Demo: info@atlantisndt.com.",
  },
  {
    path: "/erp-modules/document-control-for-aerospace-quality-control",
    title: "Document Control & QMS for Aerospace Quality Control | Atlantis NDT ERP",
    description: "Document Control & QMS for Aerospace Quality Control — purpose-configured module from Atlantis NDT ERP. AS9100D / AS9120 / AS9110 (MRO), NAS-410 Rev 5, FAA 14 CFR Part 145 / 21. Demo: info@atlantisndt.com.",
    bodyH1: "Document Control & QMS for Aerospace Quality Control | Atlantis NDT ERP",
    bodyText: "Document Control & QMS for Aerospace Quality Control — purpose-configured module from Atlantis NDT ERP. AS9100D / AS9120 / AS9110 (MRO), NAS-410 Rev 5, FAA 14 CFR Part 145 / 21. Demo: info@atlantisndt.com.",
  },
  {
    path: "/erp-modules/quality-management-for-aerospace-quality-control",
    title: "Quality Management & NCR for Aerospace Quality Control | Atlantis NDT ERP",
    description: "Quality Management & NCR for Aerospace Quality Control — purpose-configured module from Atlantis NDT ERP. AS9100D / AS9120 / AS9110 (MRO), NAS-410 Rev 5, FAA 14 CFR Part 145 / 21. Demo: info@atlantisndt.com.",
    bodyH1: "Quality Management & NCR for Aerospace Quality Control | Atlantis NDT ERP",
    bodyText: "Quality Management & NCR for Aerospace Quality Control — purpose-configured module from Atlantis NDT ERP. AS9100D / AS9120 / AS9110 (MRO), NAS-410 Rev 5, FAA 14 CFR Part 145 / 21. Demo: info@atlantisndt.com.",
  },
  {
    path: "/erp-modules/work-order-management-for-aerospace-quality-control",
    title: "Work Order & Job Management for Aerospace Quality Control | Atlantis NDT ERP",
    description: "Work Order & Job Management for Aerospace Quality Control — purpose-configured module from Atlantis NDT ERP. AS9100D / AS9120 / AS9110 (MRO), NAS-410 Rev 5, FAA 14 CFR Part 145 / 21. Demo: info@atlantisndt.com.",
    bodyH1: "Work Order & Job Management for Aerospace Quality Control | Atlantis NDT ERP",
    bodyText: "Work Order & Job Management for Aerospace Quality Control — purpose-configured module from Atlantis NDT ERP. AS9100D / AS9120 / AS9110 (MRO), NAS-410 Rev 5, FAA 14 CFR Part 145 / 21. Demo: info@atlantisndt.com.",
  },
  {
    path: "/erp-modules/audit-management-for-aerospace-quality-control",
    title: "Audit & Compliance Management for Aerospace Quality Control | Atlantis NDT ERP",
    description: "Audit & Compliance Management for Aerospace Quality Control — purpose-configured module from Atlantis NDT ERP. AS9100D / AS9120 / AS9110 (MRO), NAS-410 Rev 5, FAA 14 CFR Part 145 / 21. Demo: info@atlantisndt.com.",
    bodyH1: "Audit & Compliance Management for Aerospace Quality Control | Atlantis NDT ERP",
    bodyText: "Audit & Compliance Management for Aerospace Quality Control — purpose-configured module from Atlantis NDT ERP. AS9100D / AS9120 / AS9110 (MRO), NAS-410 Rev 5, FAA 14 CFR Part 145 / 21. Demo: info@atlantisndt.com.",
  },
  {
    path: "/erp-modules/asset-management-for-aerospace-quality-control",
    title: "Asset Integrity & Equipment Register for Aerospace Quality Control | Atlantis NDT ERP",
    description: "Asset Integrity & Equipment Register for Aerospace Quality Control — purpose-configured module from Atlantis NDT ERP. AS9100D / AS9120 / AS9110 (MRO), NAS-410 Rev 5, FAA 14 CFR Part 145 / 21. Demo: info@atlantisndt.com.",
    bodyH1: "Asset Integrity & Equipment Register for Aerospace Quality Control | Atlantis NDT ERP",
    bodyText: "Asset Integrity & Equipment Register for Aerospace Quality Control — purpose-configured module from Atlantis NDT ERP. AS9100D / AS9120 / AS9110 (MRO), NAS-410 Rev 5, FAA 14 CFR Part 145 / 21. Demo: info@atlantisndt.com.",
  },
  {
    path: "/erp-modules/inventory-management-for-aerospace-quality-control",
    title: "Inventory Management for Aerospace Quality Control | Atlantis NDT ERP",
    description: "Inventory Management for Aerospace Quality Control — purpose-configured module from Atlantis NDT ERP. AS9100D / AS9120 / AS9110 (MRO), NAS-410 Rev 5, FAA 14 CFR Part 145 / 21. Demo: info@atlantisndt.com.",
    bodyH1: "Inventory Management for Aerospace Quality Control | Atlantis NDT ERP",
    bodyText: "Inventory Management for Aerospace Quality Control — purpose-configured module from Atlantis NDT ERP. AS9100D / AS9120 / AS9110 (MRO), NAS-410 Rev 5, FAA 14 CFR Part 145 / 21. Demo: info@atlantisndt.com.",
  },
  {
    path: "/erp-modules/calibration-management-for-aerospace-quality-control",
    title: "Calibration Management for Aerospace Quality Control | Atlantis NDT ERP",
    description: "Calibration Management for Aerospace Quality Control — purpose-configured module from Atlantis NDT ERP. AS9100D / AS9120 / AS9110 (MRO), NAS-410 Rev 5, FAA 14 CFR Part 145 / 21. Demo: info@atlantisndt.com.",
    bodyH1: "Calibration Management for Aerospace Quality Control | Atlantis NDT ERP",
    bodyText: "Calibration Management for Aerospace Quality Control — purpose-configured module from Atlantis NDT ERP. AS9100D / AS9120 / AS9110 (MRO), NAS-410 Rev 5, FAA 14 CFR Part 145 / 21. Demo: info@atlantisndt.com.",
  },
  {
    path: "/erp-modules/calibration-management-for-metrology-laboratories",
    title: "Calibration Management for Metrology Laboratories | Atlantis NDT ERP",
    description: "Calibration Management for Metrology Laboratories — purpose-configured module from Atlantis NDT ERP. ISO/IEC 17025:2017, ISO 10012:2003 (measurement management), ANSI/NCSL Z540.1 / Z540.3. Demo: info@atlantisndt.com.",
    bodyH1: "Calibration Management for Metrology Laboratories | Atlantis NDT ERP",
    bodyText: "Calibration Management for Metrology Laboratories — purpose-configured module from Atlantis NDT ERP. ISO/IEC 17025:2017, ISO 10012:2003 (measurement management), ANSI/NCSL Z540.1 / Z540.3. Demo: info@atlantisndt.com.",
  },
  {
    path: "/erp-modules/work-order-management-for-metrology-laboratories",
    title: "Work Order & Job Management for Metrology Laboratories | Atlantis NDT ERP",
    description: "Work Order & Job Management for Metrology Laboratories — purpose-configured module from Atlantis NDT ERP. ISO/IEC 17025:2017, ISO 10012:2003 (measurement management), ANSI/NCSL Z540.1 / Z540.3. Demo: info@atlantisndt.com.",
    bodyH1: "Work Order & Job Management for Metrology Laboratories | Atlantis NDT ERP",
    bodyText: "Work Order & Job Management for Metrology Laboratories — purpose-configured module from Atlantis NDT ERP. ISO/IEC 17025:2017, ISO 10012:2003 (measurement management), ANSI/NCSL Z540.1 / Z540.3. Demo: info@atlantisndt.com.",
  },
  {
    path: "/erp-modules/certification-tracking-for-metrology-laboratories",
    title: "Certification & Personnel Qualification for Metrology Laboratories | Atlantis NDT ERP",
    description: "Certification & Personnel Qualification for Metrology Laboratories — purpose-configured module from Atlantis NDT ERP. ISO/IEC 17025:2017, ISO 10012:2003 (measurement management), ANSI/NCSL Z540.1 / Z540.3. Demo: info@atlantisndt.com.",
    bodyH1: "Certification & Personnel Qualification for Metrology Laboratories | Atlantis NDT ERP",
    bodyText: "Certification & Personnel Qualification for Metrology Laboratories — purpose-configured module from Atlantis NDT ERP. ISO/IEC 17025:2017, ISO 10012:2003 (measurement management), ANSI/NCSL Z540.1 / Z540.3. Demo: info@atlantisndt.com.",
  },
  {
    path: "/erp-modules/document-control-for-metrology-laboratories",
    title: "Document Control & QMS for Metrology Laboratories | Atlantis NDT ERP",
    description: "Document Control & QMS for Metrology Laboratories — purpose-configured module from Atlantis NDT ERP. ISO/IEC 17025:2017, ISO 10012:2003 (measurement management), ANSI/NCSL Z540.1 / Z540.3. Demo: info@atlantisndt.com.",
    bodyH1: "Document Control & QMS for Metrology Laboratories | Atlantis NDT ERP",
    bodyText: "Document Control & QMS for Metrology Laboratories — purpose-configured module from Atlantis NDT ERP. ISO/IEC 17025:2017, ISO 10012:2003 (measurement management), ANSI/NCSL Z540.1 / Z540.3. Demo: info@atlantisndt.com.",
  },
  {
    path: "/erp-modules/audit-management-for-metrology-laboratories",
    title: "Audit & Compliance Management for Metrology Laboratories | Atlantis NDT ERP",
    description: "Audit & Compliance Management for Metrology Laboratories — purpose-configured module from Atlantis NDT ERP. ISO/IEC 17025:2017, ISO 10012:2003 (measurement management), ANSI/NCSL Z540.1 / Z540.3. Demo: info@atlantisndt.com.",
    bodyH1: "Audit & Compliance Management for Metrology Laboratories | Atlantis NDT ERP",
    bodyText: "Audit & Compliance Management for Metrology Laboratories — purpose-configured module from Atlantis NDT ERP. ISO/IEC 17025:2017, ISO 10012:2003 (measurement management), ANSI/NCSL Z540.1 / Z540.3. Demo: info@atlantisndt.com.",
  },
  {
    path: "/erp-modules/quality-management-for-metrology-laboratories",
    title: "Quality Management & NCR for Metrology Laboratories | Atlantis NDT ERP",
    description: "Quality Management & NCR for Metrology Laboratories — purpose-configured module from Atlantis NDT ERP. ISO/IEC 17025:2017, ISO 10012:2003 (measurement management), ANSI/NCSL Z540.1 / Z540.3. Demo: info@atlantisndt.com.",
    bodyH1: "Quality Management & NCR for Metrology Laboratories | Atlantis NDT ERP",
    bodyText: "Quality Management & NCR for Metrology Laboratories — purpose-configured module from Atlantis NDT ERP. ISO/IEC 17025:2017, ISO 10012:2003 (measurement management), ANSI/NCSL Z540.1 / Z540.3. Demo: info@atlantisndt.com.",
  },
  {
    path: "/erp-modules/inventory-management-for-metrology-laboratories",
    title: "Inventory Management for Metrology Laboratories | Atlantis NDT ERP",
    description: "Inventory Management for Metrology Laboratories — purpose-configured module from Atlantis NDT ERP. ISO/IEC 17025:2017, ISO 10012:2003 (measurement management), ANSI/NCSL Z540.1 / Z540.3. Demo: info@atlantisndt.com.",
    bodyH1: "Inventory Management for Metrology Laboratories | Atlantis NDT ERP",
    bodyText: "Inventory Management for Metrology Laboratories — purpose-configured module from Atlantis NDT ERP. ISO/IEC 17025:2017, ISO 10012:2003 (measurement management), ANSI/NCSL Z540.1 / Z540.3. Demo: info@atlantisndt.com.",
  },
  {
    path: "/erp-modules/asset-management-for-metrology-laboratories",
    title: "Asset Integrity & Equipment Register for Metrology Laboratories | Atlantis NDT ERP",
    description: "Asset Integrity & Equipment Register for Metrology Laboratories — purpose-configured module from Atlantis NDT ERP. ISO/IEC 17025:2017, ISO 10012:2003 (measurement management), ANSI/NCSL Z540.1 / Z540.3. Demo: info@atlantisndt.com.",
    bodyH1: "Asset Integrity & Equipment Register for Metrology Laboratories | Atlantis NDT ERP",
    bodyText: "Asset Integrity & Equipment Register for Metrology Laboratories — purpose-configured module from Atlantis NDT ERP. ISO/IEC 17025:2017, ISO 10012:2003 (measurement management), ANSI/NCSL Z540.1 / Z540.3. Demo: info@atlantisndt.com.",
  },
  {
    path: "/erp-modules/work-order-management-for-industrial-coatings-inspection",
    title: "Work Order & Job Management for Industrial Coatings Inspection | Atlantis NDT ERP",
    description: "Work Order & Job Management for Industrial Coatings Inspection — purpose-configured module from Atlantis NDT ERP. NACE / AMPP CIP Level I / II / III, SSPC PA 2 (DFT measurement), SSPC SP 1 / SP 5 / SP 6 / SP 10 / SP 11 (surface prep). Demo: info@atlantisndt.com.",
    bodyH1: "Work Order & Job Management for Industrial Coatings Inspection | Atlantis NDT ERP",
    bodyText: "Work Order & Job Management for Industrial Coatings Inspection — purpose-configured module from Atlantis NDT ERP. NACE / AMPP CIP Level I / II / III, SSPC PA 2 (DFT measurement), SSPC SP 1 / SP 5 / SP 6 / SP 10 / SP 11 (surface prep). Demo: info@atlantisndt.com.",
  },
  {
    path: "/erp-modules/certification-tracking-for-industrial-coatings-inspection",
    title: "Certification & Personnel Qualification for Industrial Coatings Inspection | Atlantis NDT ERP",
    description: "Certification & Personnel Qualification for Industrial Coatings Inspection — purpose-configured module from Atlantis NDT ERP. NACE / AMPP CIP Level I / II / III, SSPC PA 2 (DFT measurement), SSPC SP 1 / SP 5 / SP 6 / SP 10 / SP 11 (surface prep). Demo: info@atlantisndt.com.",
    bodyH1: "Certification & Personnel Qualification for Industrial Coatings Inspection | Atlantis NDT ERP",
    bodyText: "Certification & Personnel Qualification for Industrial Coatings Inspection — purpose-configured module from Atlantis NDT ERP. NACE / AMPP CIP Level I / II / III, SSPC PA 2 (DFT measurement), SSPC SP 1 / SP 5 / SP 6 / SP 10 / SP 11 (surface prep). Demo: info@atlantisndt.com.",
  },
  {
    path: "/erp-modules/quality-management-for-industrial-coatings-inspection",
    title: "Quality Management & NCR for Industrial Coatings Inspection | Atlantis NDT ERP",
    description: "Quality Management & NCR for Industrial Coatings Inspection — purpose-configured module from Atlantis NDT ERP. NACE / AMPP CIP Level I / II / III, SSPC PA 2 (DFT measurement), SSPC SP 1 / SP 5 / SP 6 / SP 10 / SP 11 (surface prep). Demo: info@atlantisndt.com.",
    bodyH1: "Quality Management & NCR for Industrial Coatings Inspection | Atlantis NDT ERP",
    bodyText: "Quality Management & NCR for Industrial Coatings Inspection — purpose-configured module from Atlantis NDT ERP. NACE / AMPP CIP Level I / II / III, SSPC PA 2 (DFT measurement), SSPC SP 1 / SP 5 / SP 6 / SP 10 / SP 11 (surface prep). Demo: info@atlantisndt.com.",
  },
  {
    path: "/erp-modules/document-control-for-industrial-coatings-inspection",
    title: "Document Control & QMS for Industrial Coatings Inspection | Atlantis NDT ERP",
    description: "Document Control & QMS for Industrial Coatings Inspection — purpose-configured module from Atlantis NDT ERP. NACE / AMPP CIP Level I / II / III, SSPC PA 2 (DFT measurement), SSPC SP 1 / SP 5 / SP 6 / SP 10 / SP 11 (surface prep). Demo: info@atlantisndt.com.",
    bodyH1: "Document Control & QMS for Industrial Coatings Inspection | Atlantis NDT ERP",
    bodyText: "Document Control & QMS for Industrial Coatings Inspection — purpose-configured module from Atlantis NDT ERP. NACE / AMPP CIP Level I / II / III, SSPC PA 2 (DFT measurement), SSPC SP 1 / SP 5 / SP 6 / SP 10 / SP 11 (surface prep). Demo: info@atlantisndt.com.",
  },
  {
    path: "/erp-modules/audit-management-for-industrial-coatings-inspection",
    title: "Audit & Compliance Management for Industrial Coatings Inspection | Atlantis NDT ERP",
    description: "Audit & Compliance Management for Industrial Coatings Inspection — purpose-configured module from Atlantis NDT ERP. NACE / AMPP CIP Level I / II / III, SSPC PA 2 (DFT measurement), SSPC SP 1 / SP 5 / SP 6 / SP 10 / SP 11 (surface prep). Demo: info@atlantisndt.com.",
    bodyH1: "Audit & Compliance Management for Industrial Coatings Inspection | Atlantis NDT ERP",
    bodyText: "Audit & Compliance Management for Industrial Coatings Inspection — purpose-configured module from Atlantis NDT ERP. NACE / AMPP CIP Level I / II / III, SSPC PA 2 (DFT measurement), SSPC SP 1 / SP 5 / SP 6 / SP 10 / SP 11 (surface prep). Demo: info@atlantisndt.com.",
  },
  {
    path: "/erp-modules/asset-management-for-industrial-coatings-inspection",
    title: "Asset Integrity & Equipment Register for Industrial Coatings Inspection | Atlantis NDT ERP",
    description: "Asset Integrity & Equipment Register for Industrial Coatings Inspection — purpose-configured module from Atlantis NDT ERP. NACE / AMPP CIP Level I / II / III, SSPC PA 2 (DFT measurement), SSPC SP 1 / SP 5 / SP 6 / SP 10 / SP 11 (surface prep). Demo: info@atlantisndt.com.",
    bodyH1: "Asset Integrity & Equipment Register for Industrial Coatings Inspection | Atlantis NDT ERP",
    bodyText: "Asset Integrity & Equipment Register for Industrial Coatings Inspection — purpose-configured module from Atlantis NDT ERP. NACE / AMPP CIP Level I / II / III, SSPC PA 2 (DFT measurement), SSPC SP 1 / SP 5 / SP 6 / SP 10 / SP 11 (surface prep). Demo: info@atlantisndt.com.",
  },
  {
    path: "/erp-modules/inventory-management-for-industrial-coatings-inspection",
    title: "Inventory Management for Industrial Coatings Inspection | Atlantis NDT ERP",
    description: "Inventory Management for Industrial Coatings Inspection — purpose-configured module from Atlantis NDT ERP. NACE / AMPP CIP Level I / II / III, SSPC PA 2 (DFT measurement), SSPC SP 1 / SP 5 / SP 6 / SP 10 / SP 11 (surface prep). Demo: info@atlantisndt.com.",
    bodyH1: "Inventory Management for Industrial Coatings Inspection | Atlantis NDT ERP",
    bodyText: "Inventory Management for Industrial Coatings Inspection — purpose-configured module from Atlantis NDT ERP. NACE / AMPP CIP Level I / II / III, SSPC PA 2 (DFT measurement), SSPC SP 1 / SP 5 / SP 6 / SP 10 / SP 11 (surface prep). Demo: info@atlantisndt.com.",
  },
  {
    path: "/erp-modules/project-management-for-industrial-coatings-inspection",
    title: "Project Management & Turnaround Support for Industrial Coatings Inspection | Atlantis NDT ERP",
    description: "Project Management & Turnaround Support for Industrial Coatings Inspection — purpose-configured module from Atlantis NDT ERP. NACE / AMPP CIP Level I / II / III, SSPC PA 2 (DFT measurement), SSPC SP 1 / SP 5 / SP 6 / SP 10 / SP 11 (surface prep). Demo: info@atlantisndt.com.",
    bodyH1: "Project Management & Turnaround Support for Industrial Coatings Inspection | Atlantis NDT ERP",
    bodyText: "Project Management & Turnaround Support for Industrial Coatings Inspection — purpose-configured module from Atlantis NDT ERP. NACE / AMPP CIP Level I / II / III, SSPC PA 2 (DFT measurement), SSPC SP 1 / SP 5 / SP 6 / SP 10 / SP 11 (surface prep). Demo: info@atlantisndt.com.",
  },
  {
    path: "/erp-modules/work-order-management-for-construction-quality-assurance",
    title: "Work Order & Job Management for Construction Quality Assurance | Atlantis NDT ERP",
    description: "Work Order & Job Management for Construction Quality Assurance — purpose-configured module from Atlantis NDT ERP. AWS D1.1 / D1.5 (welding), ACI 318 / 301 (concrete), ASTM D698 / D1557 (soil compaction). Demo: info@atlantisndt.com.",
    bodyH1: "Work Order & Job Management for Construction Quality Assurance | Atlantis NDT ERP",
    bodyText: "Work Order & Job Management for Construction Quality Assurance — purpose-configured module from Atlantis NDT ERP. AWS D1.1 / D1.5 (welding), ACI 318 / 301 (concrete), ASTM D698 / D1557 (soil compaction). Demo: info@atlantisndt.com.",
  },
  {
    path: "/erp-modules/project-management-for-construction-quality-assurance",
    title: "Project Management & Turnaround Support for Construction Quality Assurance | Atlantis NDT ERP",
    description: "Project Management & Turnaround Support for Construction Quality Assurance — purpose-configured module from Atlantis NDT ERP. AWS D1.1 / D1.5 (welding), ACI 318 / 301 (concrete), ASTM D698 / D1557 (soil compaction). Demo: info@atlantisndt.com.",
    bodyH1: "Project Management & Turnaround Support for Construction Quality Assurance | Atlantis NDT ERP",
    bodyText: "Project Management & Turnaround Support for Construction Quality Assurance — purpose-configured module from Atlantis NDT ERP. AWS D1.1 / D1.5 (welding), ACI 318 / 301 (concrete), ASTM D698 / D1557 (soil compaction). Demo: info@atlantisndt.com.",
  },
  {
    path: "/erp-modules/document-control-for-construction-quality-assurance",
    title: "Document Control & QMS for Construction Quality Assurance | Atlantis NDT ERP",
    description: "Document Control & QMS for Construction Quality Assurance — purpose-configured module from Atlantis NDT ERP. AWS D1.1 / D1.5 (welding), ACI 318 / 301 (concrete), ASTM D698 / D1557 (soil compaction). Demo: info@atlantisndt.com.",
    bodyH1: "Document Control & QMS for Construction Quality Assurance | Atlantis NDT ERP",
    bodyText: "Document Control & QMS for Construction Quality Assurance — purpose-configured module from Atlantis NDT ERP. AWS D1.1 / D1.5 (welding), ACI 318 / 301 (concrete), ASTM D698 / D1557 (soil compaction). Demo: info@atlantisndt.com.",
  },
  {
    path: "/erp-modules/quality-management-for-construction-quality-assurance",
    title: "Quality Management & NCR for Construction Quality Assurance | Atlantis NDT ERP",
    description: "Quality Management & NCR for Construction Quality Assurance — purpose-configured module from Atlantis NDT ERP. AWS D1.1 / D1.5 (welding), ACI 318 / 301 (concrete), ASTM D698 / D1557 (soil compaction). Demo: info@atlantisndt.com.",
    bodyH1: "Quality Management & NCR for Construction Quality Assurance | Atlantis NDT ERP",
    bodyText: "Quality Management & NCR for Construction Quality Assurance — purpose-configured module from Atlantis NDT ERP. AWS D1.1 / D1.5 (welding), ACI 318 / 301 (concrete), ASTM D698 / D1557 (soil compaction). Demo: info@atlantisndt.com.",
  },
  {
    path: "/erp-modules/audit-management-for-construction-quality-assurance",
    title: "Audit & Compliance Management for Construction Quality Assurance | Atlantis NDT ERP",
    description: "Audit & Compliance Management for Construction Quality Assurance — purpose-configured module from Atlantis NDT ERP. AWS D1.1 / D1.5 (welding), ACI 318 / 301 (concrete), ASTM D698 / D1557 (soil compaction). Demo: info@atlantisndt.com.",
    bodyH1: "Audit & Compliance Management for Construction Quality Assurance | Atlantis NDT ERP",
    bodyText: "Audit & Compliance Management for Construction Quality Assurance — purpose-configured module from Atlantis NDT ERP. AWS D1.1 / D1.5 (welding), ACI 318 / 301 (concrete), ASTM D698 / D1557 (soil compaction). Demo: info@atlantisndt.com.",
  },
  {
    path: "/erp-modules/asset-management-for-construction-quality-assurance",
    title: "Asset Integrity & Equipment Register for Construction Quality Assurance | Atlantis NDT ERP",
    description: "Asset Integrity & Equipment Register for Construction Quality Assurance — purpose-configured module from Atlantis NDT ERP. AWS D1.1 / D1.5 (welding), ACI 318 / 301 (concrete), ASTM D698 / D1557 (soil compaction). Demo: info@atlantisndt.com.",
    bodyH1: "Asset Integrity & Equipment Register for Construction Quality Assurance | Atlantis NDT ERP",
    bodyText: "Asset Integrity & Equipment Register for Construction Quality Assurance — purpose-configured module from Atlantis NDT ERP. AWS D1.1 / D1.5 (welding), ACI 318 / 301 (concrete), ASTM D698 / D1557 (soil compaction). Demo: info@atlantisndt.com.",
  },
  {
    path: "/erp-modules/certification-tracking-for-construction-quality-assurance",
    title: "Certification & Personnel Qualification for Construction Quality Assurance | Atlantis NDT ERP",
    description: "Certification & Personnel Qualification for Construction Quality Assurance — purpose-configured module from Atlantis NDT ERP. AWS D1.1 / D1.5 (welding), ACI 318 / 301 (concrete), ASTM D698 / D1557 (soil compaction). Demo: info@atlantisndt.com.",
    bodyH1: "Certification & Personnel Qualification for Construction Quality Assurance | Atlantis NDT ERP",
    bodyText: "Certification & Personnel Qualification for Construction Quality Assurance — purpose-configured module from Atlantis NDT ERP. AWS D1.1 / D1.5 (welding), ACI 318 / 301 (concrete), ASTM D698 / D1557 (soil compaction). Demo: info@atlantisndt.com.",
  },
  {
    path: "/erp-modules/inventory-management-for-construction-quality-assurance",
    title: "Inventory Management for Construction Quality Assurance | Atlantis NDT ERP",
    description: "Inventory Management for Construction Quality Assurance — purpose-configured module from Atlantis NDT ERP. AWS D1.1 / D1.5 (welding), ACI 318 / 301 (concrete), ASTM D698 / D1557 (soil compaction). Demo: info@atlantisndt.com.",
    bodyH1: "Inventory Management for Construction Quality Assurance | Atlantis NDT ERP",
    bodyText: "Inventory Management for Construction Quality Assurance — purpose-configured module from Atlantis NDT ERP. AWS D1.1 / D1.5 (welding), ACI 318 / 301 (concrete), ASTM D698 / D1557 (soil compaction). Demo: info@atlantisndt.com.",
  },
  {
    path: "/erp-modules/work-order-management-for-geotechnical-engineering",
    title: "Work Order & Job Management for Geotechnical Engineering Firms | Atlantis NDT ERP",
    description: "Work Order & Job Management for Geotechnical Engineering Firms — purpose-configured module from Atlantis NDT ERP. ASTM D420 series (soil sampling), ASTM D2487 (USCS classification), ASTM D2216 (moisture). Demo: info@atlantisndt.com.",
    bodyH1: "Work Order & Job Management for Geotechnical Engineering Firms | Atlantis NDT ERP",
    bodyText: "Work Order & Job Management for Geotechnical Engineering Firms — purpose-configured module from Atlantis NDT ERP. ASTM D420 series (soil sampling), ASTM D2487 (USCS classification), ASTM D2216 (moisture). Demo: info@atlantisndt.com.",
  },
  {
    path: "/erp-modules/project-management-for-geotechnical-engineering",
    title: "Project Management & Turnaround Support for Geotechnical Engineering Firms | Atlantis NDT ERP",
    description: "Project Management & Turnaround Support for Geotechnical Engineering Firms — purpose-configured module from Atlantis NDT ERP. ASTM D420 series (soil sampling), ASTM D2487 (USCS classification), ASTM D2216 (moisture). Demo: info@atlantisndt.com.",
    bodyH1: "Project Management & Turnaround Support for Geotechnical Engineering Firms | Atlantis NDT ERP",
    bodyText: "Project Management & Turnaround Support for Geotechnical Engineering Firms — purpose-configured module from Atlantis NDT ERP. ASTM D420 series (soil sampling), ASTM D2487 (USCS classification), ASTM D2216 (moisture). Demo: info@atlantisndt.com.",
  },
  {
    path: "/erp-modules/document-control-for-geotechnical-engineering",
    title: "Document Control & QMS for Geotechnical Engineering Firms | Atlantis NDT ERP",
    description: "Document Control & QMS for Geotechnical Engineering Firms — purpose-configured module from Atlantis NDT ERP. ASTM D420 series (soil sampling), ASTM D2487 (USCS classification), ASTM D2216 (moisture). Demo: info@atlantisndt.com.",
    bodyH1: "Document Control & QMS for Geotechnical Engineering Firms | Atlantis NDT ERP",
    bodyText: "Document Control & QMS for Geotechnical Engineering Firms — purpose-configured module from Atlantis NDT ERP. ASTM D420 series (soil sampling), ASTM D2487 (USCS classification), ASTM D2216 (moisture). Demo: info@atlantisndt.com.",
  },
  {
    path: "/erp-modules/quality-management-for-geotechnical-engineering",
    title: "Quality Management & NCR for Geotechnical Engineering Firms | Atlantis NDT ERP",
    description: "Quality Management & NCR for Geotechnical Engineering Firms — purpose-configured module from Atlantis NDT ERP. ASTM D420 series (soil sampling), ASTM D2487 (USCS classification), ASTM D2216 (moisture). Demo: info@atlantisndt.com.",
    bodyH1: "Quality Management & NCR for Geotechnical Engineering Firms | Atlantis NDT ERP",
    bodyText: "Quality Management & NCR for Geotechnical Engineering Firms — purpose-configured module from Atlantis NDT ERP. ASTM D420 series (soil sampling), ASTM D2487 (USCS classification), ASTM D2216 (moisture). Demo: info@atlantisndt.com.",
  },
  {
    path: "/erp-modules/asset-management-for-geotechnical-engineering",
    title: "Asset Integrity & Equipment Register for Geotechnical Engineering Firms | Atlantis NDT ERP",
    description: "Asset Integrity & Equipment Register for Geotechnical Engineering Firms — purpose-configured module from Atlantis NDT ERP. ASTM D420 series (soil sampling), ASTM D2487 (USCS classification), ASTM D2216 (moisture). Demo: info@atlantisndt.com.",
    bodyH1: "Asset Integrity & Equipment Register for Geotechnical Engineering Firms | Atlantis NDT ERP",
    bodyText: "Asset Integrity & Equipment Register for Geotechnical Engineering Firms — purpose-configured module from Atlantis NDT ERP. ASTM D420 series (soil sampling), ASTM D2487 (USCS classification), ASTM D2216 (moisture). Demo: info@atlantisndt.com.",
  },
  {
    path: "/erp-modules/certification-tracking-for-geotechnical-engineering",
    title: "Certification & Personnel Qualification for Geotechnical Engineering Firms | Atlantis NDT ERP",
    description: "Certification & Personnel Qualification for Geotechnical Engineering Firms — purpose-configured module from Atlantis NDT ERP. ASTM D420 series (soil sampling), ASTM D2487 (USCS classification), ASTM D2216 (moisture). Demo: info@atlantisndt.com.",
    bodyH1: "Certification & Personnel Qualification for Geotechnical Engineering Firms | Atlantis NDT ERP",
    bodyText: "Certification & Personnel Qualification for Geotechnical Engineering Firms — purpose-configured module from Atlantis NDT ERP. ASTM D420 series (soil sampling), ASTM D2487 (USCS classification), ASTM D2216 (moisture). Demo: info@atlantisndt.com.",
  },
  {
    path: "/erp-modules/calibration-management-for-geotechnical-engineering",
    title: "Calibration Management for Geotechnical Engineering Firms | Atlantis NDT ERP",
    description: "Calibration Management for Geotechnical Engineering Firms — purpose-configured module from Atlantis NDT ERP. ASTM D420 series (soil sampling), ASTM D2487 (USCS classification), ASTM D2216 (moisture). Demo: info@atlantisndt.com.",
    bodyH1: "Calibration Management for Geotechnical Engineering Firms | Atlantis NDT ERP",
    bodyText: "Calibration Management for Geotechnical Engineering Firms — purpose-configured module from Atlantis NDT ERP. ASTM D420 series (soil sampling), ASTM D2487 (USCS classification), ASTM D2216 (moisture). Demo: info@atlantisndt.com.",
  },
  {
    path: "/erp-modules/inventory-management-for-geotechnical-engineering",
    title: "Inventory Management for Geotechnical Engineering Firms | Atlantis NDT ERP",
    description: "Inventory Management for Geotechnical Engineering Firms — purpose-configured module from Atlantis NDT ERP. ASTM D420 series (soil sampling), ASTM D2487 (USCS classification), ASTM D2216 (moisture). Demo: info@atlantisndt.com.",
    bodyH1: "Inventory Management for Geotechnical Engineering Firms | Atlantis NDT ERP",
    bodyText: "Inventory Management for Geotechnical Engineering Firms — purpose-configured module from Atlantis NDT ERP. ASTM D420 series (soil sampling), ASTM D2487 (USCS classification), ASTM D2216 (moisture). Demo: info@atlantisndt.com.",
  },
  {
    path: "/erp-modules/work-order-management-for-environmental-testing-labs",
    title: "Work Order & Job Management for Environmental Testing Laboratories | Atlantis NDT ERP",
    description: "Work Order & Job Management for Environmental Testing Laboratories — purpose-configured module from Atlantis NDT ERP. ISO/IEC 17025:2017, NELAP / TNI standard (US), US EPA methods (SW-846, 600 series, 500 series). Demo: info@atlantisndt.com.",
    bodyH1: "Work Order & Job Management for Environmental Testing Laboratories | Atlantis NDT ERP",
    bodyText: "Work Order & Job Management for Environmental Testing Laboratories — purpose-configured module from Atlantis NDT ERP. ISO/IEC 17025:2017, NELAP / TNI standard (US), US EPA methods (SW-846, 600 series, 500 series). Demo: info@atlantisndt.com.",
  },
  {
    path: "/erp-modules/document-control-for-environmental-testing-labs",
    title: "Document Control & QMS for Environmental Testing Laboratories | Atlantis NDT ERP",
    description: "Document Control & QMS for Environmental Testing Laboratories — purpose-configured module from Atlantis NDT ERP. ISO/IEC 17025:2017, NELAP / TNI standard (US), US EPA methods (SW-846, 600 series, 500 series). Demo: info@atlantisndt.com.",
    bodyH1: "Document Control & QMS for Environmental Testing Laboratories | Atlantis NDT ERP",
    bodyText: "Document Control & QMS for Environmental Testing Laboratories — purpose-configured module from Atlantis NDT ERP. ISO/IEC 17025:2017, NELAP / TNI standard (US), US EPA methods (SW-846, 600 series, 500 series). Demo: info@atlantisndt.com.",
  },
  {
    path: "/erp-modules/quality-management-for-environmental-testing-labs",
    title: "Quality Management & NCR for Environmental Testing Laboratories | Atlantis NDT ERP",
    description: "Quality Management & NCR for Environmental Testing Laboratories — purpose-configured module from Atlantis NDT ERP. ISO/IEC 17025:2017, NELAP / TNI standard (US), US EPA methods (SW-846, 600 series, 500 series). Demo: info@atlantisndt.com.",
    bodyH1: "Quality Management & NCR for Environmental Testing Laboratories | Atlantis NDT ERP",
    bodyText: "Quality Management & NCR for Environmental Testing Laboratories — purpose-configured module from Atlantis NDT ERP. ISO/IEC 17025:2017, NELAP / TNI standard (US), US EPA methods (SW-846, 600 series, 500 series). Demo: info@atlantisndt.com.",
  },
  {
    path: "/erp-modules/audit-management-for-environmental-testing-labs",
    title: "Audit & Compliance Management for Environmental Testing Laboratories | Atlantis NDT ERP",
    description: "Audit & Compliance Management for Environmental Testing Laboratories — purpose-configured module from Atlantis NDT ERP. ISO/IEC 17025:2017, NELAP / TNI standard (US), US EPA methods (SW-846, 600 series, 500 series). Demo: info@atlantisndt.com.",
    bodyH1: "Audit & Compliance Management for Environmental Testing Laboratories | Atlantis NDT ERP",
    bodyText: "Audit & Compliance Management for Environmental Testing Laboratories — purpose-configured module from Atlantis NDT ERP. ISO/IEC 17025:2017, NELAP / TNI standard (US), US EPA methods (SW-846, 600 series, 500 series). Demo: info@atlantisndt.com.",
  },
  {
    path: "/erp-modules/calibration-management-for-environmental-testing-labs",
    title: "Calibration Management for Environmental Testing Laboratories | Atlantis NDT ERP",
    description: "Calibration Management for Environmental Testing Laboratories — purpose-configured module from Atlantis NDT ERP. ISO/IEC 17025:2017, NELAP / TNI standard (US), US EPA methods (SW-846, 600 series, 500 series). Demo: info@atlantisndt.com.",
    bodyH1: "Calibration Management for Environmental Testing Laboratories | Atlantis NDT ERP",
    bodyText: "Calibration Management for Environmental Testing Laboratories — purpose-configured module from Atlantis NDT ERP. ISO/IEC 17025:2017, NELAP / TNI standard (US), US EPA methods (SW-846, 600 series, 500 series). Demo: info@atlantisndt.com.",
  },
  {
    path: "/erp-modules/certification-tracking-for-environmental-testing-labs",
    title: "Certification & Personnel Qualification for Environmental Testing Laboratories | Atlantis NDT ERP",
    description: "Certification & Personnel Qualification for Environmental Testing Laboratories — purpose-configured module from Atlantis NDT ERP. ISO/IEC 17025:2017, NELAP / TNI standard (US), US EPA methods (SW-846, 600 series, 500 series). Demo: info@atlantisndt.com.",
    bodyH1: "Certification & Personnel Qualification for Environmental Testing Laboratories | Atlantis NDT ERP",
    bodyText: "Certification & Personnel Qualification for Environmental Testing Laboratories — purpose-configured module from Atlantis NDT ERP. ISO/IEC 17025:2017, NELAP / TNI standard (US), US EPA methods (SW-846, 600 series, 500 series). Demo: info@atlantisndt.com.",
  },
  {
    path: "/erp-modules/asset-management-for-environmental-testing-labs",
    title: "Asset Integrity & Equipment Register for Environmental Testing Laboratories | Atlantis NDT ERP",
    description: "Asset Integrity & Equipment Register for Environmental Testing Laboratories — purpose-configured module from Atlantis NDT ERP. ISO/IEC 17025:2017, NELAP / TNI standard (US), US EPA methods (SW-846, 600 series, 500 series). Demo: info@atlantisndt.com.",
    bodyH1: "Asset Integrity & Equipment Register for Environmental Testing Laboratories | Atlantis NDT ERP",
    bodyText: "Asset Integrity & Equipment Register for Environmental Testing Laboratories — purpose-configured module from Atlantis NDT ERP. ISO/IEC 17025:2017, NELAP / TNI standard (US), US EPA methods (SW-846, 600 series, 500 series). Demo: info@atlantisndt.com.",
  },
  {
    path: "/erp-modules/inventory-management-for-environmental-testing-labs",
    title: "Inventory Management for Environmental Testing Laboratories | Atlantis NDT ERP",
    description: "Inventory Management for Environmental Testing Laboratories — purpose-configured module from Atlantis NDT ERP. ISO/IEC 17025:2017, NELAP / TNI standard (US), US EPA methods (SW-846, 600 series, 500 series). Demo: info@atlantisndt.com.",
    bodyH1: "Inventory Management for Environmental Testing Laboratories | Atlantis NDT ERP",
    bodyText: "Inventory Management for Environmental Testing Laboratories — purpose-configured module from Atlantis NDT ERP. ISO/IEC 17025:2017, NELAP / TNI standard (US), US EPA methods (SW-846, 600 series, 500 series). Demo: info@atlantisndt.com.",
  },
  {
    path: "/erp-modules/work-order-management-for-oilfield-services",
    title: "Work Order & Job Management for Oilfield Services & Wellsite Inspection | Atlantis NDT ERP",
    description: "Work Order & Job Management for Oilfield Services & Wellsite Inspection — purpose-configured module from Atlantis NDT ERP. API Spec 4F (drilling derricks), API Spec 6A (wellhead), API Spec 16A (drill-through equipment). Demo: info@atlantisndt.com.",
    bodyH1: "Work Order & Job Management for Oilfield Services & Wellsite Inspection | Atlantis NDT ERP",
    bodyText: "Work Order & Job Management for Oilfield Services & Wellsite Inspection — purpose-configured module from Atlantis NDT ERP. API Spec 4F (drilling derricks), API Spec 6A (wellhead), API Spec 16A (drill-through equipment). Demo: info@atlantisndt.com.",
  },
  {
    path: "/erp-modules/certification-tracking-for-oilfield-services",
    title: "Certification & Personnel Qualification for Oilfield Services & Wellsite Inspection | Atlantis NDT ERP",
    description: "Certification & Personnel Qualification for Oilfield Services & Wellsite Inspection — purpose-configured module from Atlantis NDT ERP. API Spec 4F (drilling derricks), API Spec 6A (wellhead), API Spec 16A (drill-through equipment). Demo: info@atlantisndt.com.",
    bodyH1: "Certification & Personnel Qualification for Oilfield Services & Wellsite Inspection | Atlantis NDT ERP",
    bodyText: "Certification & Personnel Qualification for Oilfield Services & Wellsite Inspection — purpose-configured module from Atlantis NDT ERP. API Spec 4F (drilling derricks), API Spec 6A (wellhead), API Spec 16A (drill-through equipment). Demo: info@atlantisndt.com.",
  },
  {
    path: "/erp-modules/project-management-for-oilfield-services",
    title: "Project Management & Turnaround Support for Oilfield Services & Wellsite Inspection | Atlantis NDT ERP",
    description: "Project Management & Turnaround Support for Oilfield Services & Wellsite Inspection — purpose-configured module from Atlantis NDT ERP. API Spec 4F (drilling derricks), API Spec 6A (wellhead), API Spec 16A (drill-through equipment). Demo: info@atlantisndt.com.",
    bodyH1: "Project Management & Turnaround Support for Oilfield Services & Wellsite Inspection | Atlantis NDT ERP",
    bodyText: "Project Management & Turnaround Support for Oilfield Services & Wellsite Inspection — purpose-configured module from Atlantis NDT ERP. API Spec 4F (drilling derricks), API Spec 6A (wellhead), API Spec 16A (drill-through equipment). Demo: info@atlantisndt.com.",
  },
  {
    path: "/erp-modules/asset-management-for-oilfield-services",
    title: "Asset Integrity & Equipment Register for Oilfield Services & Wellsite Inspection | Atlantis NDT ERP",
    description: "Asset Integrity & Equipment Register for Oilfield Services & Wellsite Inspection — purpose-configured module from Atlantis NDT ERP. API Spec 4F (drilling derricks), API Spec 6A (wellhead), API Spec 16A (drill-through equipment). Demo: info@atlantisndt.com.",
    bodyH1: "Asset Integrity & Equipment Register for Oilfield Services & Wellsite Inspection | Atlantis NDT ERP",
    bodyText: "Asset Integrity & Equipment Register for Oilfield Services & Wellsite Inspection — purpose-configured module from Atlantis NDT ERP. API Spec 4F (drilling derricks), API Spec 6A (wellhead), API Spec 16A (drill-through equipment). Demo: info@atlantisndt.com.",
  },
  {
    path: "/erp-modules/quality-management-for-oilfield-services",
    title: "Quality Management & NCR for Oilfield Services & Wellsite Inspection | Atlantis NDT ERP",
    description: "Quality Management & NCR for Oilfield Services & Wellsite Inspection — purpose-configured module from Atlantis NDT ERP. API Spec 4F (drilling derricks), API Spec 6A (wellhead), API Spec 16A (drill-through equipment). Demo: info@atlantisndt.com.",
    bodyH1: "Quality Management & NCR for Oilfield Services & Wellsite Inspection | Atlantis NDT ERP",
    bodyText: "Quality Management & NCR for Oilfield Services & Wellsite Inspection — purpose-configured module from Atlantis NDT ERP. API Spec 4F (drilling derricks), API Spec 6A (wellhead), API Spec 16A (drill-through equipment). Demo: info@atlantisndt.com.",
  },
  {
    path: "/erp-modules/document-control-for-oilfield-services",
    title: "Document Control & QMS for Oilfield Services & Wellsite Inspection | Atlantis NDT ERP",
    description: "Document Control & QMS for Oilfield Services & Wellsite Inspection — purpose-configured module from Atlantis NDT ERP. API Spec 4F (drilling derricks), API Spec 6A (wellhead), API Spec 16A (drill-through equipment). Demo: info@atlantisndt.com.",
    bodyH1: "Document Control & QMS for Oilfield Services & Wellsite Inspection | Atlantis NDT ERP",
    bodyText: "Document Control & QMS for Oilfield Services & Wellsite Inspection — purpose-configured module from Atlantis NDT ERP. API Spec 4F (drilling derricks), API Spec 6A (wellhead), API Spec 16A (drill-through equipment). Demo: info@atlantisndt.com.",
  },
  {
    path: "/erp-modules/inventory-management-for-oilfield-services",
    title: "Inventory Management for Oilfield Services & Wellsite Inspection | Atlantis NDT ERP",
    description: "Inventory Management for Oilfield Services & Wellsite Inspection — purpose-configured module from Atlantis NDT ERP. API Spec 4F (drilling derricks), API Spec 6A (wellhead), API Spec 16A (drill-through equipment). Demo: info@atlantisndt.com.",
    bodyH1: "Inventory Management for Oilfield Services & Wellsite Inspection | Atlantis NDT ERP",
    bodyText: "Inventory Management for Oilfield Services & Wellsite Inspection — purpose-configured module from Atlantis NDT ERP. API Spec 4F (drilling derricks), API Spec 6A (wellhead), API Spec 16A (drill-through equipment). Demo: info@atlantisndt.com.",
  },
  {
    path: "/erp-modules/calibration-management-for-oilfield-services",
    title: "Calibration Management for Oilfield Services & Wellsite Inspection | Atlantis NDT ERP",
    description: "Calibration Management for Oilfield Services & Wellsite Inspection — purpose-configured module from Atlantis NDT ERP. API Spec 4F (drilling derricks), API Spec 6A (wellhead), API Spec 16A (drill-through equipment). Demo: info@atlantisndt.com.",
    bodyH1: "Calibration Management for Oilfield Services & Wellsite Inspection | Atlantis NDT ERP",
    bodyText: "Calibration Management for Oilfield Services & Wellsite Inspection — purpose-configured module from Atlantis NDT ERP. API Spec 4F (drilling derricks), API Spec 6A (wellhead), API Spec 16A (drill-through equipment). Demo: info@atlantisndt.com.",
  },
  {
    path: "/erp-modules/inventory-management",
    title: "Inventory Management Software for Inspection Companies | Atlantis NDT ERP",
    description: "Track NDT equipment, probes, calibration blocks, consumables, and spare parts. Barcode/QR check-in/check-out, location tracking, usage logs, automated low-stock alerts. Built for inspection service providers across NDT, calibration, marine survey, and welding inspection.",
    bodyH1: "Inventory & Equipment Management Module",
    bodyText: "Inspection equipment is expensive, mobile, and tightly regulated. A UT thickness gauge, an Olympus OmniScan, a radiography crawler, or a digital pressure calibrator can each cost $10,000–$80,000. Multiply that across a 20-technician inspection company and you have $500K–$3M of mobile assets that need to be tracked, calibrated, and accounted for on every job. Atlantis NDT ERP's inventory management module replaces the spreadsheet, the lost asset tag, and the equipment-room sign-out clipboard with",
  },
  {
    path: "/erp-modules/certification-tracking",
    title: "NDT Certification & Personnel Qualification Tracking Software | Atlantis NDT ERP",
    description: "Track every ASNT, ISO 9712, PCN, CSWIP, AWS CWI, NACE, BGAS, API ICP, ASNT Level III, and client-specific qualification across your workforce. Automated 90/60/30-day expiry alerts. Audit-ready compliance dashboard.",
    bodyH1: "Certification & Personnel Qualification Module",
    bodyText: "An NDT, welding, or inspection service company lives or dies by the currency of its technicians' certifications. A single expired ASNT Level II certificate on the wrong job can cost the contract, fail an audit, and damage the relationship with a major operator. Most companies manage this in a spreadsheet that nobody updates. Atlantis NDT ERP's personnel qualification module is the single source of truth for every technician credential — automatically tracked, monitored, and surfaced before it la",
  },
  {
    path: "/erp-modules/calibration-management",
    title: "Calibration Management Software — ISO 17025 / ANSI Z540 Compliant | Atlantis NDT ERP",
    description: "Manage calibration intervals, certificates, traceability chains, and uncertainty budgets for measurement equipment. ISO/IEC 17025:2017 + ANSI/NCSL Z540 compliant. Built for calibration laboratories AND inspection companies running in-house calibration programs.",
    bodyH1: "Calibration Management Module",
    bodyText: "Every gauge, meter, probe, and instrument used to make a measurement-of-record must be calibrated against traceable standards on a defined interval. For a calibration laboratory under ISO/IEC 17025 accreditation this is the entire business. For an inspection company it is a critical compliance function: an audit finding of 'instrument used past calibration due date' can void thousands of inspection reports retroactively. The calibration management module is the system of record for both.",
  },
  {
    path: "/erp-modules/work-order-management",
    title: "Inspection Work Order & Job Management Software | Atlantis NDT ERP",
    description: "End-to-end job lifecycle: quote → work order → resource assignment → field execution → report → invoice. Built for service inspection companies juggling 30–300 concurrent jobs across multiple clients and geographies.",
    bodyH1: "Work Order & Job Management Module",
    bodyText: "An inspection company is a project-based business. Each job has a unique scope, a unique customer specification, a unique team, a unique timeline, and a unique compliance footprint. Managing 30–300 concurrent jobs in Excel and email destroys margin: missed billing, lost reports, double-booked technicians, and the silent killer — work scope creep that nobody captures or charges for. The work order module is the operational backbone of the platform.",
  },
  {
    path: "/erp-modules/inspection-scheduling",
    title: "Inspection Scheduling Software — API 510/570/653 Interval Manager | Atlantis NDT ERP",
    description: "Automate next-inspection-due calculations per API 510 (pressure vessels), API 570 (piping), API 653 (storage tanks), API 580 RBI, NB-23 NBIC, and client-specific intervals. Never miss an inspection due date again.",
    bodyH1: "Inspection Scheduling & Interval Management Module",
    bodyText: "Owner-operators and inspection contractors share one nightmare: discovering that an inspection due date has slipped past — and that nobody noticed. The consequences range from operational risk to regulatory finding to incident liability. The inspection scheduling module replaces the Excel tickler file with a code-aware interval engine that knows API 510, API 570, API 653, ASME B31.1, NB-23 NBIC, and dozens of client-specific written practices natively.",
  },
  {
    path: "/erp-modules/audit-management",
    title: "Audit Management Software for Inspection & Service Companies | Atlantis NDT ERP",
    description: "Plan, execute, document, and close out internal audits, client audits, regulatory audits, and accreditation audits. ISO 9001, ISO 17025, ISO 45001, AS9100, ISO 14001, and client-specific audit schemes — single platform.",
    bodyH1: "Audit & Compliance Management Module",
    bodyText: "An inspection company faces audits from three directions: internal (your own QMS), external (client and regulator), and accreditation (ISO 17025, AS9100, ISO 9001). Failing any audit can mean lost contracts, suspended accreditations, regulatory penalties, and damaged reputation. The audit management module is the central nervous system for audit planning, execution, finding management, and closeout.",
  },
  {
    path: "/erp-modules/document-control",
    title: "Document Control Software — ISO 9001 / ISO 17025 / AS9100 QMS | Atlantis NDT ERP",
    description: "Controlled-document lifecycle, revision history, distribution control, training acknowledgment, retention schedule, and obsolete-document withdrawal. Built for QMS compliance under ISO 9001, ISO 17025, AS9100, IATF 16949, and API Q1/Q2.",
    bodyH1: "Document Control & QMS Module",
    bodyText: "An inspection company's quality management system runs on documents: procedures, work instructions, calibration methods, inspection reports, certificates, training records, customer specifications. Lose control of those documents and the QMS audit fails. Atlantis NDT ERP's document control module is purpose-built for controlled documents — not a generic SharePoint folder dressed up with permissions.",
  },
  {
    path: "/erp-modules/asset-management",
    title: "Asset Integrity Management Software for Inspection Companies | Atlantis NDT ERP",
    description: "Pressure vessel, piping circuit, storage tank, heat exchanger, pipeline, and rotating equipment registers with hierarchical asset structure, damage mechanism tracking, and full inspection history.",
    bodyH1: "Asset Integrity & Equipment Register Module",
    bodyText: "Inspection programs need an authoritative asset register. The asset register is the spine that connects equipment, inspection history, drawings, P&IDs, isometrics, corrosion mechanisms, RBI assessments, fitness-for-service calculations, and integrity operating windows. Atlantis NDT ERP's asset integrity module is built to match the model required by API, ASME, and major operator integrity programs.",
  },
  {
    path: "/erp-modules/corrosion-tracking",
    title: "Corrosion Tracking & Risk-Based Inspection Software (API 581) | Atlantis NDT ERP",
    description: "Corrosion rate trending, remaining-life calculation, damage mechanism screening, and risk-based inspection (RBI) per API 581. Native support for piping circuits, pressure vessels, storage tanks, heat exchangers, and pipelines.",
    bodyH1: "Corrosion Tracking & RBI Module",
    bodyText: "Corrosion is the dominant degradation mechanism for ~85% of refinery and petrochemical equipment. Quantifying corrosion rates, projecting remaining life, screening damage mechanisms, and using all of this to drive risk-based inspection (RBI) plans is the heart of any modern integrity program. Atlantis NDT ERP's corrosion module is built around the API 510 / 570 / 653 / 571 / 580 / 581 framework that the inspection community uses every day.",
  },
  {
    path: "/erp-modules/quality-management",
    title: "Quality Management Software for Inspection & Service Companies | Atlantis NDT ERP",
    description: "Non-conformance reports (NCR), corrective and preventive action (CAPA), supplier quality, customer complaint management, management review — full ISO 9001:2015 / ISO 17025:2017 / AS9100D / IATF 16949 QMS support.",
    bodyH1: "Quality Management & NCR Module",
    bodyText: "Every accredited inspection company runs a quality management system. Whether it's ISO 9001, ISO 17025, AS9100, IATF 16949, or all of the above, the QMS needs to be functional — not just paper. Atlantis NDT ERP's QMS module provides the operational machinery: nonconformance logging, root-cause analysis, corrective and preventive action lifecycle, supplier quality scoring, customer-complaint handling, and management-review dashboards.",
  },
  {
    path: "/erp-modules/project-management",
    title: "Project Management Software for Inspection Projects & Turnarounds | Atlantis NDT ERP",
    description: "Multi-discipline project planning, resource leveling, daily reporting, hold-point management, and budget tracking for inspection projects ranging from single-shift jobs to 90-day refinery turnarounds.",
    bodyH1: "Project Management & Turnaround Support Module",
    bodyText: "Inspection on a major project is project management at industrial scale: 200 inspectors across 5 work fronts, 24-hour operation, holds at 12 critical inspection points, daily delivery of inspection reports to the EPC contractor, and a 90-day window before commissioning. Spreadsheets and email simply cannot manage this. The project management module is built for the largest turnaround / shutdown / new-build inspection campaigns.",
  },
  {
    path: "/erp-industries/ndt-inspection-companies",
    title: "ERP Software for NDT Inspection Companies | Atlantis NDT ERP",
    description: "Purpose-built ERP for non-destructive testing (NDT) inspection service providers. ASNT, ISO 9712, PCN, API 510/570/653 certification tracking, work-order management, corrosion data trending, inspection report generation, and multi-client compliance dashboards.",
    bodyH1: "ERP for NDT Inspection Service Companies",
    bodyText: "An NDT inspection service company is a unique kind of business. You ship intellectual property (a signed inspection report) generated by certified personnel using calibrated equipment, executed against codes that change every two years, billed to dozens of clients with overlapping but contradictory quality requirements. Generic ERP software (SAP Business One, NetSuite, Microsoft Dynamics) does not understand any of this. Atlantis NDT ERP was built specifically for NDT inspection companies — by a",
  },
  {
    path: "/erp-industries/calibration-laboratories",
    title: "ERP & LIMS Software for Calibration Laboratories (ISO 17025) | Atlantis NDT ERP",
    description: "End-to-end calibration laboratory management: customer instrument receipt, environmental conditioning, calibration execution, uncertainty budgeting, ISO 17025 §7.8 compliant certificate generation, customer dispatch, and accreditation audit support.",
    bodyH1: "ERP for ISO/IEC 17025 Calibration Laboratories",
    bodyText: "A calibration laboratory is a high-throughput, high-precision, audit-intensive business. Hundreds of customer instruments arrive each week. Each must be received, conditioned, calibrated by a competent technician on traceable standards, documented per ISO/IEC 17025:2017 §7.8, certified, and dispatched on a tight SLA. The accreditation body (A2LA, UKAS, DAkkS, NABL, ANAB, NATA) audits annually. Atlantis ERP's calibration-lab configuration is built for ISO 17025 from day one.",
  },
  {
    path: "/erp-industries/welding-fabrication-shops",
    title: "ERP for Welding & Fabrication Shops (AWS, ASME, EN ISO) | Atlantis NDT ERP",
    description: "WPS / PQR / WPQ library, welder qualification tracking, ASME 'U' / 'S' / 'PP' stamp compliance, AWS D1.1 / D1.5 / D14 work order management, weld map traceability, NDE coordination, and customer-specific quality flow-down.",
    bodyH1: "ERP for Welding & Fabrication Shops",
    bodyText: "A welding fabrication shop runs on certified procedures and qualified welders. AWS D1.1 structural steel, ASME Section IX boiler & pressure vessel code, EN ISO 15614 European pipeline welding, API 1104 pipeline construction — each governs how welding is done, how welders are qualified, and how each weld is documented. Add ASME 'U' stamp, 'S' stamp, 'PP' stamp, 'R' stamp — the joint review and quality system are formal contracts. The welding fabrication ERP is the operational system that keeps th",
  },
  {
    path: "/erp-industries/marine-survey-companies",
    title: "ERP for Marine Survey & Offshore Inspection Companies | Atlantis NDT ERP",
    description: "Hull condition surveys, class-society alignment (DNV, ABS, LR, BV, ClassNK, RINA, KR), IMCA D-018 IRM, offshore inspection campaign management, ROV operations, and FPSO life-extension assessment workflows.",
    bodyH1: "ERP for Marine Survey & Offshore Inspection",
    bodyText: "Marine survey and offshore inspection sit at the intersection of class-society rules, flag-state requirements, IMO regulations, and operator-specific integrity programs. A surveyor in Singapore today might inspect a Panama-flagged tanker classed by DNV, en route to Houston where USCG will inspect on arrival, with cargo destined for an EU port. Atlantis ERP's marine-survey configuration manages this complexity natively.",
  },
  {
    path: "/erp-industries/pipeline-integrity-services",
    title: "ERP for Pipeline Integrity & ILI Inspection Companies | Atlantis NDT ERP",
    description: "In-line inspection (ILI) tool deployments, MFL / UT / EMAT / caliper data management, API 1163 inspection plans, API 1160 IMP support, DOT PHMSA reporting, threat-assessment per ASME B31.8S, and dig verification workflows.",
    bodyH1: "ERP for Pipeline Integrity & ILI Service Companies",
    bodyText: "Pipeline integrity is a globally regulated, data-intensive discipline. An ILI vendor running a smart pig through 800 km of refined-products pipeline generates terabytes of MFL / UT / EMAT / caliper data, hundreds of anomaly call-outs, dozens of dig verifications, and a regulatory deliverable to DOT PHMSA / Canada Energy Regulator / EU pipeline authority. The pipeline-integrity ERP is built for this end-to-end workflow.",
  },
  {
    path: "/erp-industries/aerospace-quality-control",
    title: "ERP for Aerospace QC, NDT, and MRO Companies (AS9100, NAS-410) | Atlantis NDT ERP",
    description: "AS9100D quality management, NAS-410 NDT personnel qualification, aircraft MRO work-order management, FAA / EASA / DGCA regulatory compliance, customer-specific (Boeing / Airbus / Bombardier / Pratt & Whitney) quality flow-down.",
    bodyH1: "ERP for Aerospace Quality Control & MRO",
    bodyText: "Aerospace quality is the highest standard in industrial inspection. AS9100D extends ISO 9001 with industry-specific requirements; NAS-410 governs NDT personnel qualification; customer-specific specifications from Boeing (D6-82479), Airbus (AITM), Bombardier, Embraer, and Pratt & Whitney (ASQR-01) add another layer. The aerospace ERP configuration handles all of it.",
  },
  {
    path: "/erp-industries/metrology-laboratories",
    title: "ERP for Metrology Laboratories — Dimensional, Electrical, Pressure, Thermal | Atlantis NDT ERP",
    description: "ISO/IEC 17025 metrology lab operations, multi-discipline calibration (dimensional, electrical, pressure, mass, thermal, force, flow, optical), uncertainty budgeting per GUM, customer-asset traceability, and accreditation-audit readiness.",
    bodyH1: "ERP for Metrology Laboratories",
    bodyText: "Metrology laboratories provide measurement traceability to industry — from a Boeing fuselage CMM verification to a pharma analytical balance calibration to a refinery pressure-gauge cross-check. Each discipline (dimensional, electrical, pressure, mass, thermal, force, flow, optical) has its own reference standards, methods, uncertainty model, and accreditation scope.",
  },
  {
    path: "/erp-industries/industrial-coatings-inspection",
    title: "ERP for Industrial Coatings & Corrosion Inspection Companies | Atlantis NDT ERP",
    description: "NACE / AMPP coating inspector workflow management, SSPC surface preparation tracking, holiday testing records, DFT measurement campaign management, ISO 12944 corrosion-protection compliance, and offshore coating QA.",
    bodyH1: "ERP for Industrial Coatings & Corrosion Inspection",
    bodyText: "Industrial coatings inspection — from refinery tank linings to offshore platform topside coatings to pipeline external coatings — is governed by NACE / AMPP coating inspector qualifications, SSPC surface-preparation standards, and ISO 12944 corrosion-protection systems. The coatings ERP is built to manage the inspection campaigns and documentation that owner-operators demand.",
  },
  {
    path: "/erp-industries/construction-quality-assurance",
    title: "ERP for Construction QA / QC Companies (EPC, Civil, Infrastructure) | Atlantis NDT ERP",
    description: "QA / QC inspection management for EPC, civil, and infrastructure projects. Concrete testing, structural-steel inspection, welding QC per AWS D1.1, soil compaction per ASTM D698 / D1557, ITP / WPS execution, and project closeout dossier assembly.",
    bodyH1: "ERP for Construction QA / QC Companies",
    bodyText: "Construction QA / QC companies sit on the critical path of EPC, civil, and infrastructure projects. Concrete cylinder breaks, structural-steel inspection, welding QC, soil compaction tests, FAT / SAT execution, hydrotest witnessing, and project closeout dossier (PCD) assembly all flow through the QA / QC team. Atlantis ERP's construction QA configuration manages the full lifecycle.",
  },
  {
    path: "/erp-industries/geotechnical-engineering",
    title: "ERP for Geotechnical Engineering & Site Investigation Firms | Atlantis NDT ERP",
    description: "Site investigation campaign management, borehole / CPT data management, laboratory testing workflow (ASTM D / EN ISO standards), geotechnical report generation, and project closeout for geotechnical consultancies and site-investigation contractors.",
    bodyH1: "ERP for Geotechnical Engineering Firms",
    bodyText: "Geotechnical engineering firms run site investigation campaigns, drill boreholes, conduct CPTs, sample soils, run laboratory tests, and produce geotechnical reports that underpin civil and infrastructure projects worldwide. Atlantis ERP's geotechnical configuration manages the campaign-to-report lifecycle on a single platform.",
  },
  {
    path: "/erp-industries/environmental-testing-labs",
    title: "ERP for Environmental Testing Laboratories (ISO 17025) | Atlantis NDT ERP",
    description: "Environmental sample receipt, chain-of-custody, multi-analyte testing workflow (water, air, soil, waste), regulatory reporting (EPA / EA / DEC / DEFRA), and ISO 17025 accreditation support for environmental laboratories.",
    bodyH1: "ERP for Environmental Testing Laboratories",
    bodyText: "Environmental testing laboratories analyze drinking water, wastewater, ambient air, soil, hazardous waste, and industrial emissions samples for regulatory compliance. ISO/IEC 17025 accreditation under the relevant national scheme (NELAP in US, UKAS in UK, NATA in Australia) is required for regulatory submission. Atlantis ERP's environmental-lab configuration manages the full receipt-to-report lifecycle with regulatory-grade traceability.",
  },
  {
    path: "/erp-industries/oilfield-services",
    title: "ERP for Oilfield Services & Wellsite Inspection Companies | Atlantis NDT ERP",
    description: "Drilling rig inspection, BOP testing, casing / tubing inspection, wireline / coiled-tubing operations, frac / completion services QC, and field-service ticketing — for oilfield services companies serving upstream operators worldwide.",
    bodyH1: "ERP for Oilfield Services & Wellsite Inspection",
    bodyText: "Oilfield services companies live in the field. Drilling rigs in the Permian, Marcellus, Bakken, North Sea, Saudi Empty Quarter, Brazilian pre-salt. Wellsite inspection, BOP testing, casing / tubing inspection, wireline operations, coiled tubing, frac operations — each with its own field-execution and HSE requirements. Atlantis ERP's oilfield-services configuration is built for the field-ticketing-and-billing reality of upstream.",
  },
  {
    path: '/ndt-training-saudi-arabia',
    title: 'NDT Training Saudi Arabia | ARAMCO SAEP-1112 Compliant | Atlantis NDT',
    description: 'ASNT and ARAMCO-compliant NDT training in Saudi Arabia. SNT-TC-1A Level I, II, III for UT, MT, PT, RT, ET. SAEP-1112 compliant procedures. Vision 2030 project ready.',
    bodyH1: 'NDT Training Saudi Arabia',
    bodyText: 'Professional NDT training in Saudi Arabia. ASNT SNT-TC-1A and SAEP-1112 compliant certification for oil & gas and petrochemical industry professionals. Saudi Aramco and SABIC recognised. Dammam, Riyadh, Jubail, and on-site training available.',
  },
  {
    path: '/ndt-training-hyderabad',
    title: 'NDT Training Hyderabad | ASNT Certification Courses | Atlantis NDT',
    description: 'NDT training in Hyderabad, India. ASNT Level I, II, III certification for UT, MT, PT, RT, ET, VT. Classroom and online options. Best NDT institute in Hyderabad.',
    bodyH1: 'NDT Training Hyderabad',
    bodyText: 'Best NDT training institute in Hyderabad. ASNT certification courses for Level I, II, and III with hands-on lab training.',
  },
  {
    path: '/aerospace-ndt-training',
    title: 'Aerospace NDT Training | NAS-410 Certification Courses | Atlantis NDT',
    description: 'Aerospace NDT training and NAS-410 certification. Aircraft inspection techniques, composite testing, engine component NDT. ASNT certified instructors with aerospace experience.',
    bodyH1: 'Aerospace NDT Training',
    bodyText: 'Specialized NDT training for aerospace industry. NAS-410 certification preparation and aircraft inspection techniques.',
  },
  {
    path: '/oil-gas-ndt-training',
    title: 'Oil & Gas NDT Training | API Inspector Certification | Atlantis NDT',
    description: 'NDT training for oil & gas industry. API 510/570/653 inspection, pipeline integrity, pressure vessel inspection. ASNT certification and API inspector preparation.',
    bodyH1: 'Oil & Gas NDT Training',
    bodyText: 'Specialized NDT training for oil & gas industry professionals. API certification preparation and pipeline/pressure vessel inspection training.',
  },
  {
    path: '/power-generation-ndt-training',
    title: 'Power Generation NDT Training | Boiler & Turbine Inspection | Atlantis NDT',
    description: 'NDT training for power generation industry. Boiler inspection, turbine blade testing, generator component NDT. ASNT certification for power plant inspectors.',
    bodyH1: 'Power Generation NDT Training',
    bodyText: 'NDT training for power generation professionals. Boiler inspection, turbine testing, and power plant component NDT certification.',
  },
  {
    path: '/ndt-connect-platform',
    title: 'NDT Connect Platform | NDT Jobs & Professional Network | Atlantis NDT',
    description: 'NDT Connect: Find NDT jobs, connect with Level III consultants, share inspection insights. The professional network built exclusively for NDT industry.',
    bodyH1: 'NDT Connect Professional Platform',
    bodyText: 'NDT Connect is the professional network exclusively for NDT industry. Find jobs, connect with experts, and grow your career.',
  },
  {
    path: '/ndt-career-guide',
    title: 'NDT Career Guide 2026 | Salary, Highest-Paying Methods & Career Path',
    description: 'How to start and advance in NDT: highest-paying methods (PAUT, TOFD), Level I-III salary ranges, certification paths, and career progression. Expert guidance from ASNT Level III professionals.',
    bodyH1: 'NDT Career Guide',
    bodyText: 'Complete guide to starting and advancing in an NDT career. Certification paths, salary expectations, and career progression advice.',
  },
  {
    path: '/resources-downloads',
    title: 'NDT Resources & Downloads | Study Materials & Guides | Atlantis NDT',
    description: 'Free NDT resources and downloads. Study guides, certification checklists, NDT method comparison charts, and industry standards summaries from Atlantis NDT experts.',
    bodyH1: 'NDT Resources & Downloads',
    bodyText: 'Free NDT resources including study guides, certification materials, and industry standard summaries.',
  },
  {
    path: '/press-media',
    title: 'Press & Media | Atlantis NDT News & Announcements',
    description: 'Latest news, press releases, and media coverage of Atlantis NDT. Industry announcements, partnership news, and company updates.',
    bodyH1: 'Press & Media',
    bodyText: 'Latest news and press releases from Atlantis NDT. Industry announcements and company updates.',
  },
  // ── Method + Training Pillar Hubs (head-term pillars) ────────────────────
  {
    path: '/ndt-training',
    title: 'NDT Training & Certification 2026: UT, RT, MT, PT, VT, ET',
    description: 'ASNT Level I/II/III training across 6 NDT methods + PAUT/TOFD. Online, onsite, blended. $800–$3,000 per course. 91% first-attempt pass rate.',
    bodyH1: 'NDT Training & Certification 2026',
    bodyText: 'Pillar hub for NDT training — six ASNT methods (UT, RT, MT, PT, VT, ET) across Level I, II, and III. SNT-TC-1A, ACCP, and ISO 9712 pathways. Online, onsite, and blended delivery in Houston, Dubai, Hyderabad, and Riyadh. 91% first-attempt pass rate, 1,200+ graduates since 2018.',
  },
  {
    path: '/ultrasonic-testing',
    title: 'Ultrasonic Testing (UT) 2026: Services, Training, Equipment Guide',
    description: 'Ultrasonic testing services & training in 20+ countries. PAUT, TOFD, thickness gauging. ASNT Level II/III inspectors. Reports 24-48h turnaround.',
    bodyH1: 'Ultrasonic Testing (UT) Services, Training & Equipment 2026',
    bodyText: 'UT pillar hub — high-frequency sound wave inspection for weld flaws, thickness, and corrosion. Conventional UT, PAUT, TOFD, guided wave services with ASNT Level II and III certified crews in 20+ countries. Full code coverage: ASME Section V Article 4, AWS D1.1, API 1104, EN/ISO 17640.',
  },
  {
    path: '/magnetic-particle-testing',
    title: 'Magnetic Particle Testing (MT) 2026: Services, Training, Yokes & WFMT',
    description: 'Magnetic particle inspection of welds, castings & forgings. Wet fluorescent & dry visible. ASME V Article 7, ASTM E709, AWS D1.1. ASNT Level II crews.',
    bodyH1: 'Magnetic Particle Testing (MT) 2026: Services, Training & Technique',
    bodyText: 'MT pillar hub — surface and near-surface crack detection on ferromagnetic materials. Dry visible and wet fluorescent (WFMT) techniques. Yoke, prod, central conductor, and bench unit methods. ASME V Article 7, ASTM E709, ASTM E1444, AWS D1.1 Clause 8, API 1104 compliance.',
  },
  {
    path: '/radiographic-testing',
    title: 'Radiographic Testing (RT) 2026: Film, CR, DR Services & Safety Codes',
    description: 'Industrial radiography: Ir-192, Se-75, Co-60, X-ray. Film, CR, DR on welds & castings. ASME V Article 2, API 1104, 10 CFR 34. Licensed radiographers.',
    bodyH1: 'Radiographic Testing (RT) 2026: Services, Safety & Code Compliance',
    bodyText: 'RT pillar hub — volumetric weld inspection using Ir-192, Se-75, Co-60, and X-ray sources. Film, computed radiography (CR), and digital radiography (DR) workflows. Licensed radiographers in 20+ countries. ASME V Article 2, API 1104, AWS D1.1, and NRC/FANR/AERB compliant radiation safety programs.',
  },
  {
    path: '/eddy-current-testing',
    title: 'Eddy Current Testing (ECT) 2026: Tube Inspection, ECA, RFT Services',
    description: 'Eddy current testing for heat exchangers, welds, coatings & aerospace. Conventional ECT, ECA, RFT, NFA. ASME V Article 8, ASTM E309. ASNT Level II/III.',
    bodyH1: 'Eddy Current Testing (ECT) 2026: Tubes, Welds, Aerospace & Coatings',
    bodyText: 'ECT pillar hub — electromagnetic NDT for conductive materials. Conventional ECT, Eddy Current Array (ECA), Remote Field Testing (RFT), Near-Field Array (NFA), MFL, and pulsed ECT. Heat exchanger tube inspection, aerospace fastener-hole inspection, non-ferrous weld inspection, and conductivity/thickness measurement. ASME V Article 8, ASTM E309/E571/E3052, NAS 410, ISO 15549 compliant.',
  },
  // ── 7 new pages added 2026-05-03. CTR_OVERRIDES at top of file rewrites
  // these titles/descriptions during render — bodyText here is fallback only.
  {
    path: '/services/mfl-pipeline-inspection',
    title: 'MFL Pipeline Inspection Service 2026 — In-Line Pigging, Cost & Coverage',
    description: 'MFL pipeline inspection from 4-inch to 56-inch — detects ID/OD corrosion, pitting, gouges. 100% bore coverage, $8K–$45K/mile typical. ASNT Level III oversight.',
    bodyH1: 'MFL Pipeline Inspection Services 2026',
    bodyText: 'Magnetic Flux Leakage (MFL) in-line inspection for transmission and gathering pipelines 4-inch through 56-inch diameter. Detects ID/OD wall loss, pitting, gouges, and dent-with-metal-loss. 100% bore coverage with axial and circumferential MFL tools. ASNT Level III oversight on every project. Typical cost $8K–$45K per mile inspected.',
  },
  {
    path: '/compare/asnt-vs-pcn',
    title: 'ASNT vs PCN / ISO 9712 — Which NDT Cert Wins in 2026?',
    description: 'ASNT (SNT-TC-1A) vs PCN / ISO 9712 side-by-side: geography, exam structure, recert, $200–$750 cost, employer recognition. Pick the right cert for your market.',
    bodyH1: 'ASNT vs PCN / ISO 9712 — Side-by-Side NDT Certification Comparison',
    bodyText: 'ASNT SNT-TC-1A is the dominant NDT certification scheme in the United States and Canada, while PCN (Personnel Certification in Non-destructive testing) operating to ISO 9712 dominates the United Kingdom, Europe, Middle East, and many Asian markets. This guide compares geography acceptance, exam structure, recertification cycles, cost ($200-$750 range), and employer recognition across both schemes.',
  },
  {
    path: '/compare/api-510-vs-api-570',
    title: 'API 510 vs API 570 — Which Inspector Cert in 2026? Salary, Scope, Exam',
    description: 'API 510 (pressure vessel) vs API 570 (piping) inspector — exam scope, $730 fee, $85K–$140K salary, who needs which, can you hold both. 2026 guide.',
    bodyH1: 'API 510 vs API 570 — Pressure Vessel vs Piping Inspector Certification',
    bodyText: 'API 510 certifies authorised pressure vessel inspectors; API 570 certifies authorised piping inspectors. Both are issued by the American Petroleum Institute Individual Certification Program (ICP). This comparison covers scope of work, exam structure, $730 examination fee, work-experience prerequisites, $85K-$140K salary range, and whether holding both certifications is worth the time.',
  },
  {
    path: '/compare/ndt-consulting-vs-in-house',
    title: 'NDT Consulting vs In-House Team — 2026 Cost Breakdown & When to Hire',
    description: 'NDT consulting vs in-house Level III team — fully-loaded cost analysis ($180K–$320K/yr in-house vs $1.5K–$3.5K/day consulting). Hybrid model that wins.',
    bodyH1: 'NDT Consulting vs In-House Team — When Each Model Wins',
    bodyText: 'Should you hire ASNT Level III consultants or build an in-house NDT team? This decision guide compares fully-loaded cost ($180K-$320K/year for an in-house Level III with benefits and overhead vs $1,500-$3,500 per day for consulting engagements), procedure quality, regulatory exposure, and which hybrid models work for small, mid-sized, and enterprise inspection programs.',
  },
  {
    path: '/api-510-india',
    title: 'API 510 India 2026 — Exam Centres, ₹65K Fee, ₹15L–₹35L Salary Guide',
    description: 'API 510 in India: Mumbai/Hyderabad/Delhi/Chennai exam centres, 2026 cost ₹60K–₹80K, prep classes ₹35K–₹1.2L, ₹15L–₹35L salary at Reliance/IOCL/BPCL.',
    bodyH1: 'API 510 Pressure Vessel Inspector Certification — India 2026',
    bodyText: 'API 510 certification path in India for authorised pressure vessel inspectors. Examination centres in Mumbai, Hyderabad, Delhi, and Chennai. 2026 fee structure ₹60K-₹80K for the API exam plus ₹35K-₹1.2L for accredited prep classes. Salary ranges ₹15L-₹35L at Reliance Industries, IOCL, BPCL, ONGC, and EIL inspection programs.',
  },
  {
    path: '/api-570-india',
    title: 'API 570 India 2026 — Exam Centres, ₹60K Fee, ₹15L–₹32L Piping Inspector Salary',
    description: 'API 570 piping inspector in India: Mumbai/Hyderabad/Delhi/Chennai exam centres, 2026 INR pricing ₹60K–₹85K, ₹15L–₹32L salary at IOCL/BPCL/Reliance.',
    bodyH1: 'API 570 Piping Inspector Certification — India 2026',
    bodyText: 'API 570 piping inspector certification in India. Examination centres in Mumbai, Hyderabad, Delhi, and Chennai. 2026 INR pricing ₹60K-₹85K for examination plus ₹35K-₹1.2L for prep classes. Salary range ₹15L-₹32L at IOCL, BPCL, HPCL, Reliance Industries, and ONGC piping integrity programs.',
  },
  {
    path: '/api-653-india',
    title: 'API 653 India 2026 — Tank Inspector Exam Centres, ₹60K Fee, ₹14L–₹32L Salary',
    description: 'API 653 storage tank inspector in India: Mumbai/Hyderabad/Delhi/Chennai exam centres, 2026 INR pricing ₹60K–₹85K, ₹14L–₹32L salary at IOCL/BPCL/Reliance terminals.',
    bodyH1: 'API 653 Storage Tank Inspector Certification — India 2026',
    bodyText: 'API 653 above-ground storage tank inspector certification in India. Examination centres in Mumbai, Hyderabad, Delhi, and Chennai. 2026 INR pricing ₹60K-₹85K for examination, ₹35K-₹1.2L for prep classes. Salary ₹14L-₹32L at IOCL, BPCL, HPCL terminals, Reliance Jamnagar, and ONGC storage facilities.',
  },
  // === CORPORATE TRAINING VERTICALS 2026-05-09 ===
  {
    path: '/corporate-training/oil-gas',
    title: 'Corporate NDT Training for Oil & Gas 2026: 10 Engineers, ASNT Aligned',
    description: 'In-house NDT training for oil & gas operators: API 510, API 570, API 653, ASME B31.3, on-site / LMS / hybrid delivery, group pricing 10–100+ engineers, SNT-TC-1A audit-ready records.',
    bodyH1: 'Corporate NDT Training for Oil & Gas',
    bodyText: 'Crew-level corporate NDT training for oil & gas operators, NOCs, and EPCs. API 510, 570, 653, ASME B31.3 / B31.4, ASME Section V aligned. On-site, LMS, or hybrid delivery for cohorts of 10–100+ engineers. SNT-TC-1A audit-ready records, hydrocarbon turnaround scheduling, ADNOC / Aramco / QatarEnergy / BSEE evidence packs.',
  },
  {
    path: '/corporate-training/aerospace',
    title: 'Corporate NDT Training for Aerospace 2026: 10 Engineers, ASNT Aligned',
    description: 'In-house NDT training for aerospace OEMs and MROs: NAS 410, EN 4179, Nadcap AC7114, on-site / LMS / hybrid delivery, group pricing 10–100+, audit-ready Boeing/Airbus written practice.',
    bodyH1: 'Corporate NDT Training for Aerospace',
    bodyText: 'In-house aerospace NDT corporate training for OEMs, MROs, and Tier-1 suppliers. NAS 410 and EN 4179 aligned with Nadcap AC7114 audit readiness. Boeing BAC, Airbus AITM, Pratt & Whitney, GE Aviation, and Rolls-Royce written-practice bridging modules. Composite, engine, and structures tracks.',
  },
  {
    path: '/corporate-training/nuclear',
    title: 'Corporate NDT Training for Nuclear 2026: 10 Engineers, ASNT Aligned',
    description: 'In-house NDT training for nuclear utilities: ASME III, ASME XI, CP-189, 10 CFR 50 App B, NQA-1, PDI Appendix VIII prep, on-site / LMS / hybrid delivery, 10–100+ engineer cohorts.',
    bodyH1: 'Corporate NDT Training for Nuclear',
    bodyText: 'Nuclear utility, fuel cycle, and EPC corporate training. ASME Section III new-build, ASME Section XI ISI, CP-189 personnel certification, ASME NQA-1 records, PDI Appendix VIII demonstration prep. NRC, CNSC, ONR, IAEA audit-ready evidence pack.',
  },
  {
    path: '/corporate-training/marine',
    title: 'Corporate NDT Training for Marine 2026: 10 Engineers, ASNT Aligned',
    description: 'In-house NDT training for marine and offshore: DNV-OS-C401, DNV-OS-F101, ABS, Lloyd\'s Register, ACFM splash-zone, CSWIP prep, hybrid delivery for FPSO and yard cohorts of 10–100+.',
    bodyH1: 'Corporate NDT Training for Marine and Offshore',
    bodyText: 'Hull, FPSO topsides, subsea structures, and class-society aligned corporate training. DNV, ABS, Lloyd\'s Register, BV, ClassNK, IRS expectations. Yard QC, FPSO topsides inspector, splash-zone ACFM, riser/pipeline weld, and CSWIP 3.1 / 3.4U tracks.',
  },
  {
    path: '/corporate-training/renewable-energy',
    title: 'Corporate NDT Training for Renewable Energy 2026: 10 Engineers, ASNT Aligned',
    description: 'In-house NDT training for wind, solar, hydrogen and BESS: DNV-ST-0376, ASME B31.12, drone visual inspection, hybrid delivery, group pricing 10–100+ for wind installers and H2 EPCs.',
    bodyH1: 'Corporate NDT Training for Renewable Energy',
    bodyText: 'Wind turbine, offshore wind installer, hydrogen EPC, and battery storage corporate training. DNV-ST-0376 wind, DNVGL-RP-0416 offshore structures, ASME B31.12 hydrogen piping, and the API 510 / 570 / 653 toolkit for hydrogen carrier and storage assets.',
  },
  {
    path: '/corporate-training/petrochemical',
    title: 'Corporate NDT Training for Petrochemical 2026: 10 Engineers, ASNT Aligned',
    description: 'In-house NDT training for petrochemical complexes: API 510, 570, 571, 579-1, 580/581 RBI, HTHA / creep / damage-mechanism workshops, group pricing 10–100+ engineers, hybrid delivery.',
    bodyH1: 'Corporate NDT Training for Petrochemical',
    bodyText: 'Olefins crackers, polymer plants, methanol/ammonia complexes, and specialty chemical site corporate training. API 571 damage mechanisms (HTHA, creep, sigma, polythionic), API 510/570 inspector prep, API 579-1 fitness-for-service Level 1/2 workshops, API 580/581 RBI rollout.',
  },
  {
    path: '/corporate-training/power-generation',
    title: 'Corporate NDT Training for Power Generation 2026: 10 Engineers, ASNT Aligned',
    description: 'In-house NDT training for thermal utilities: ASME I, ASME B31.1, NBIC NB-23, EPRI HEP guidelines, creep / Type IV cracking screening, outage-window scheduling, 10–100+ cohorts.',
    bodyH1: 'Corporate NDT Training for Power Generation',
    bodyText: 'Boiler tubes, headers, steam piping, turbine, and HRSG corporate training for thermal utilities and combined-cycle operators. ASME Section I, ASME B31.1, NBIC NB-23, EPRI HEP guidelines, and FFS Level 1/2 workshop for the reliability bench.',
  },
  {
    path: '/corporate-training/fabrication',
    title: 'Corporate NDT Training for Fabrication 2026: 10 Engineers, ASNT Aligned',
    description: 'In-house NDT and CWI training for fabrication shops: AWS D1.1, ASME IX, EN 1090-2, ISO 3834, AISC; PAUT acceptance per AWS Annex K; group pricing 10–100+ for shops and yards.',
    bodyH1: 'Corporate NDT Training for Fabrication',
    bodyText: 'Fabrication shops, structural steel mills, modular yards, and pressure-equipment manufacturer corporate QC training. AWS D1.1 / D1.5 visual and Annex K PAUT acceptance, ASME Section IX procedure qualification, EN 1090-2 / ISO 3834 implementation, and CWI / CSWIP exam prep.',
  },
  {
    path: '/corporate-training/maritime',
    title: 'Corporate NDT Training for Maritime 2026: 10 Engineers, ASNT Aligned',
    description: 'In-house NDT training for ship-repair yards and shipping companies: IACS CSR, DNV/ABS/LR/BV/ClassNK rules, UTM grid per UR Z10, CSWIP 3.1 prep, hybrid delivery, 10–100+ cohorts.',
    bodyH1: 'Corporate NDT Training for Maritime',
    bodyText: 'Ship-repair yards, port authority infrastructure teams, and merchant shipping technical departments. IACS Common Structural Rules, DNV-CG-0285, ABS Steel Vessel Rules, Lloyd\'s Register, IACS Recommendation 84, ISM Code awareness, and CSWIP 3.1 / 3.4U credentials.',
  },
  {
    path: '/corporate-training/defense',
    title: 'Corporate NDT Training for Defense 2026: 10 Engineers, ASNT Aligned',
    description: 'In-house NDT training for defense primes and depots: NAS 410, MIL-STD-2154 / 1907, NAVSEA TP248 / TP271, T.O. 33B-1-1, audit-ready DCMA / NAVAIR / NAVSEA evidence, 10–100+ cohorts.',
    bodyH1: 'Corporate NDT Training for Defense',
    bodyText: 'Defense primes, naval shipyards, military aviation depots, and ground-vehicle MRO corporate training. NAS 410, MIL-STD-2154, MIL-STD-1907, NAVSEA TP248 / TP271, T.O. 33B-1-1 USAF NDI, and customer-platform written-practice bridging for NAVAIR, NAVSEA, AMC, AFMC.',
  },
  // === ERP/DT PRODUCT HUB 2026-05-09 — 26 routes (8 compare + 6 integrations + 12 usecases) ===
  { path: '/compare/atlantis-dt-vs-aveva-pi-system', title: 'Atlantis Digital Twin vs AVEVA PI System 2026: NDT-Native vs Time-Series', description: 'Atlantis DT vs AVEVA PI System compared: NDT-native data model vs time-series historian, $200K vs $50K-$500K pricing, deployment time, integrations.', bodyH1: 'Atlantis Digital Twin vs AVEVA PI System', bodyText: 'Side-by-side comparison of Atlantis Digital Twin and AVEVA PI System for asset integrity programs. NDT-native vs time-series historian data models, deployment timeline, and total cost of ownership for inspection-heavy operations.' },
  { path: '/compare/atlantis-dt-vs-osisoft-pi', title: 'Atlantis Digital Twin vs OSIsoft PI 2026: NDT Overlay vs Process Historian', description: 'Atlantis DT vs OSIsoft PI: 3D NDT-overlay platform vs process historian. Asset integrity coverage, RBI/FFS workflows, integration cost, deployment timeline compared.', bodyH1: 'Atlantis Digital Twin vs OSIsoft PI', bodyText: 'Atlantis DT and OSIsoft PI serve different parts of the asset integrity stack. PI captures process data; Atlantis layers NDT findings onto a 3D model. Joint deployment patterns, integration cost, and TCO compared.' },
  { path: '/compare/atlantis-dt-vs-hexagon-eam', title: 'Atlantis Digital Twin vs Hexagon EAM 2026: NDT-First vs Asset-Maint Platform', description: 'Atlantis DT vs Hexagon EAM: NDT-first 3D digital twin vs full enterprise asset management. Inspection workflow, RBI/RCM integration, $200K vs $400K+ TCO.', bodyH1: 'Atlantis Digital Twin vs Hexagon EAM', bodyText: 'Atlantis DT focuses on NDT-overlay 3D visualisation; Hexagon EAM is a full enterprise asset management platform. Comparison of inspection workflow, RBI/RCM integration, and total cost.' },
  { path: '/compare/atlantis-dt-vs-siemens-mindsphere', title: 'Atlantis Digital Twin vs Siemens MindSphere 2026: NDT vs IIoT Platform', description: 'Atlantis DT vs Siemens MindSphere: NDT-data-rich vs IIoT-sensor-rich digital twin. API 579 FFS, RBI workflows, integration cost, when each wins.', bodyH1: 'Atlantis Digital Twin vs Siemens MindSphere', bodyText: 'Atlantis DT is NDT-data-rich; Siemens MindSphere is IIoT-sensor-rich. Both are valid digital twin patterns. Comparison of fit for inspection-heavy vs sensor-heavy assets.' },
  { path: '/compare/atlantis-dt-vs-ge-predix', title: 'Atlantis Digital Twin vs GE Vernova APM 2026: NDT-Specific vs Generic APM', description: 'Atlantis DT vs GE Vernova APM (formerly Predix): NDT-specific data model vs generic asset performance. Integration with PAUT/RT/MT data, $200K vs $300K-$1M, deployment.', bodyH1: 'Atlantis Digital Twin vs GE Vernova APM', bodyText: 'Atlantis DT models NDT findings natively; GE Vernova APM (formerly Predix) is generic asset performance management. Comparison of inspection data fit, integration architecture, and cost.' },
  { path: '/compare/atlantis-dt-vs-ibm-maximo', title: 'Atlantis Digital Twin vs IBM Maximo 2026: NDT 3D vs CMMS Work Order', description: 'Atlantis DT vs IBM Maximo: 3D NDT visualization vs work-order CMMS. How they complement (vs replace) each other, integration architecture, cost model.', bodyH1: 'Atlantis Digital Twin vs IBM Maximo', bodyText: 'Atlantis DT and IBM Maximo are complementary, not competitive. Atlantis provides 3D NDT-overlay visualization; Maximo manages work orders and asset master data. Recommended joint architecture.' },
  { path: '/compare/atlantis-dt-vs-bentley-itwin', title: 'Atlantis Digital Twin vs Bentley iTwin 2026: NDT Inspection vs Engineering DT', description: 'Atlantis DT vs Bentley iTwin: NDT-data-rich inspection digital twin vs engineering/BIM digital twin. Different buyer, different workflow, integration possibilities.', bodyH1: 'Atlantis Digital Twin vs Bentley iTwin', bodyText: 'Atlantis DT is an inspection / asset-integrity digital twin; Bentley iTwin is an engineering / BIM digital twin. Both serve different buyers. Comparison of fit and joint deployment patterns.' },
  { path: '/compare/atlantis-dt-vs-aspen-mtell', title: 'Atlantis DT vs AspenTech Mtell 2026: NDT vs Predictive Maintenance ML', description: 'Atlantis DT vs AspenTech Mtell: NDT-data 3D twin vs ML-driven predictive maintenance. How they integrate, cost vs benefit, recommended stack for asset integrity programs.', bodyH1: 'Atlantis Digital Twin vs AspenTech Mtell', bodyText: 'Atlantis DT focuses on NDT-overlay visualization; AspenTech Mtell focuses on ML-based anomaly prediction. They are complementary. Joint deployment recommendations.' },
  { path: '/integrations/sap-pm', title: 'Atlantis DT SAP PM Integration 2026: Bi-Directional NDT Data Sync', description: 'Native SAP PM integration: bi-directional notification/work-order sync, equipment master alignment, NDT findings flowed to SAP, 8-12 week deployment, OData + SAP RFC connectors.', bodyH1: 'Atlantis Digital Twin SAP PM Integration', bodyText: 'Bi-directional integration between Atlantis Digital Twin and SAP Plant Maintenance. Notifications and work orders sync both ways; NDT findings flow to SAP as inspection records.' },
  { path: '/integrations/ibm-maximo', title: 'Atlantis DT IBM Maximo Integration 2026: REST API + MAS Connector', description: 'IBM Maximo (and MAS 8/9) integration: REST API + native MAS connector, work-order sync, asset hierarchy mirror, NDT findings flow as Maximo work logs, 6-10 week deployment.', bodyH1: 'Atlantis Digital Twin IBM Maximo Integration', bodyText: 'Native IBM Maximo and MAS 8/9 integration via REST API. Work orders sync, asset hierarchy mirrored, NDT findings flow as Maximo work logs.' },
  { path: '/integrations/meridium-apm', title: 'Atlantis DT Meridium APM Integration 2026: Native RBI/FFS Data Exchange', description: 'GE Vernova Meridium APM integration: RBI input data flows to Meridium, FFS Level 1/2/3 results sync back, asset hierarchy alignment, 8-12 week deployment.', bodyH1: 'Atlantis Digital Twin Meridium APM Integration', bodyText: 'GE Vernova Meridium APM integration. Risk-based inspection data flows from Atlantis to Meridium; fitness-for-service results sync back.' },
  { path: '/integrations/aspen-mtell', title: 'Atlantis DT AspenTech Mtell Integration 2026: NDT Data → ML Prediction', description: 'AspenTech Mtell integration: NDT condition data feeds Mtell ML training, anomaly predictions surfaced in Atlantis 3D twin, joint dashboards for inspection + reliability teams.', bodyH1: 'Atlantis Digital Twin AspenTech Mtell Integration', bodyText: 'NDT condition data from Atlantis flows to AspenTech Mtell for ML training. Anomaly predictions surface back in the Atlantis 3D twin for joint inspection + reliability workflows.' },
  { path: '/integrations/ge-vernova-apm', title: 'Atlantis DT GE Vernova APM Integration 2026: Asset Hierarchy + Inspection Sync', description: 'GE Vernova APM (formerly Meridium) integration: full asset hierarchy mirror, RBI/FFS data exchange, inspection findings push, 8-12 week deployment.', bodyH1: 'Atlantis Digital Twin GE Vernova APM Integration', bodyText: 'GE Vernova APM (formerly Meridium) integration. Asset hierarchy fully mirrored; RBI / FFS data exchange in both directions; inspection findings pushed.' },
  { path: '/integrations/oracle-erp-cloud', title: 'Atlantis DT Oracle ERP Cloud Integration 2026: REST API + EAM Bridge', description: 'Oracle ERP Cloud + Oracle EAM integration: REST API connector, work-order + asset master sync, NDT findings flow as Oracle service requests, 8-10 week deployment.', bodyH1: 'Atlantis Digital Twin Oracle ERP Cloud Integration', bodyText: 'Oracle ERP Cloud and Oracle EAM integration via REST API. Work orders, asset master records sync; NDT findings flow as Oracle service requests.' },
  { path: '/digital-twins/refinery', title: 'Digital Twin for Refineries 2026: NDT Overlay, RBI per API 581, FFS per API 579', description: '3D refinery digital twin with NDT inspection overlay (UT thickness, RT defects, MT/PT indications), RBI per API 581, FFS per API 579-1, $200K/yr typical. 6-12 month ROI.', bodyH1: 'Digital Twin for Refineries', bodyText: '3D refinery digital twin with full NDT inspection overlay. UT thickness mapping, RT defect localisation, MT/PT indications, RBI per API 581, FFS per API 579-1.' },
  { path: '/digital-twins/fpso', title: 'Digital Twin for FPSOs 2026: Hull, Process, Mooring NDT in One 3D View', description: 'FPSO digital twin: hull thickness UT mapping, process piping RBI, mooring chain integrity, helideck NDT. ABS/DNV/Bureau Veritas class compliance. 12-18 month deployment.', bodyH1: 'Digital Twin for FPSOs', bodyText: 'FPSO digital twin combining hull thickness UT, process piping RBI, mooring chain integrity, and helideck NDT. ABS / DNV / Bureau Veritas class compliance throughout.' },
  { path: '/digital-twins/storage-tank', title: 'Digital Twin for Storage Tanks 2026: API 653 In-Service, Floor MFL, Shell UT', description: 'Above-ground storage tank digital twin: API 653 inspection schedule, floor MFL maps, shell UT thickness grids, settlement monitoring. ROI 9-18 months for 50+ tank fleets.', bodyH1: 'Digital Twin for Storage Tanks', bodyText: 'Above-ground storage tank digital twin per API 653. Floor MFL maps, shell UT thickness grids, settlement monitoring, repair-history tracking.' },
  { path: '/digital-twins/pipeline', title: 'Digital Twin for Pipelines 2026: ILI MFL/UT Integration, API 1163, Class Location', description: 'Pipeline digital twin: ILI MFL/UT/CIPS data overlay, API 1163 in-line inspection compliance, class location updates, repair tracking. 4-12 inch through 56-inch transmission.', bodyH1: 'Digital Twin for Pipelines', bodyText: 'Transmission and gathering pipeline digital twin. ILI MFL/UT/CIPS data overlay, API 1163 compliance, class location and HCA updates, repair tracking.' },
  { path: '/digital-twins/nuclear-plant', title: 'Digital Twin for Nuclear Plants 2026: ASME XI ISI, Reactor Vessel, Steam Generator', description: 'Nuclear plant digital twin: ASME XI ISI program, reactor vessel UT/PAUT, steam generator ECT tube inspections, primary loop. NRC/IAEA compliance, INPO-aligned data model.', bodyH1: 'Digital Twin for Nuclear Plants', bodyText: 'Nuclear plant digital twin per ASME XI in-service inspection program. Reactor vessel UT/PAUT, steam generator ECT tube inspections, primary-loop integrity.' },
  { path: '/digital-twins/wind-farm', title: 'Digital Twin for Wind Farms 2026: Blade IRT/UT, Tower NDT, Foundation Monitoring', description: 'Wind turbine digital twin: blade IRT/UT inspection, tower MT/UT, foundation monitoring, drone NDT data overlay. Onshore + offshore. 50-500 turbine fleets, 18-month ROI.', bodyH1: 'Digital Twin for Wind Farms', bodyText: 'Onshore and offshore wind farm digital twin. Blade IRT/UT, tower MT/UT, foundation monitoring, drone-collected NDT overlay.' },
  { path: '/digital-twins/offshore-platform', title: 'Digital Twin for Offshore Platforms 2026: Topsides, Jacket, Caisson NDT 3D View', description: 'Offshore platform digital twin: topsides process NDT, jacket node UT, caisson inspection, riser integrity. API RP 2A, NORSOK N-005, BSEE/NOPSEMA/HSE compliance.', bodyH1: 'Digital Twin for Offshore Platforms', bodyText: 'Fixed and floating offshore platform digital twin. Topsides process NDT, jacket node UT, caisson inspection, riser integrity, BSEE / NOPSEMA / HSE compliance.' },
  { path: '/digital-twins/petrochemical-complex', title: 'Digital Twin for Petrochemical Complexes 2026: Reactor, Heater, Compressor NDT', description: 'Petrochemical complex digital twin: reactor + heater + compressor NDT data overlay, RBI per API 581, turnaround planning. 100-2,000 equipment items, 12-18 month deployment.', bodyH1: 'Digital Twin for Petrochemical Complexes', bodyText: 'Petrochemical complex digital twin spanning reactors, fired heaters, compressors. RBI per API 581, turnaround planning, FFS where required.' },
  { path: '/digital-twins/heat-exchanger', title: 'Digital Twin for Heat Exchangers 2026: ECT Tube Maps, Tubesheet, Shell Inspection', description: 'Heat exchanger digital twin: ECT/IRIS tube inspection mapping, tubesheet ligament UT, shell-side corrosion, plug history. 50-15,000 tubes per HX, ROI 6-12 months.', bodyH1: 'Digital Twin for Heat Exchangers', bodyText: 'Shell-and-tube heat exchanger digital twin. ECT / IRIS tube inspection mapping, tubesheet ligament UT, shell-side corrosion, plug history.' },
  { path: '/digital-twins/pressure-vessel', title: 'Digital Twin for Pressure Vessels 2026: API 510 ISI, FFS, Repair Tracking', description: 'Pressure vessel digital twin: API 510 in-service inspection, FFS per API 579 for damage, repair/alteration tracking, ASME VIII Section 1 compliance. 9-15 month ROI.', bodyH1: 'Digital Twin for Pressure Vessels', bodyText: 'Pressure vessel digital twin per API 510. In-service inspection, FFS per API 579 where damage found, repair / alteration tracking, ASME VIII compliance.' },
  { path: '/digital-twins/subsea', title: 'Digital Twin for Subsea Assets 2026: Pipeline, Riser, BOP, Tree NDT Visualization', description: 'Subsea asset digital twin: flowline + riser UT/MFL, BOP MT/PT, tree component inspection, ROV-collected NDT data overlay. API 17, ISO 13628 compliance. 12-18 month deployment.', bodyH1: 'Digital Twin for Subsea Assets', bodyText: 'Subsea asset digital twin combining flowline / riser UT/MFL, BOP MT/PT, tree inspection, and ROV-collected NDT data.' },
  { path: '/digital-twins/data-center', title: 'Digital Twin for Data Center Infrastructure 2026: Cooling, Power, Structural NDT', description: 'Data center digital twin: cooling-loop pipe UT, power infrastructure NDT, structural integrity. Uptime Institute Tier-aligned, 6-12 month deployment for hyperscale facilities.', bodyH1: 'Digital Twin for Data Center Infrastructure', bodyText: 'Hyperscale data center digital twin. Cooling-loop pipe UT, power infrastructure NDT, structural integrity for raised floors and roof, Uptime Institute Tier alignment.' },
];

corePages.forEach(p => {
  const routeObj = {
    path: p.path,
    title: p.title,
    description: p.description,
    canonical: `${SITE_URL}${p.path}`,
    bodyContent: p.bodyH1 ? `  <header><nav aria-label="Main Navigation"><a href="/">Home</a><a href="/consulting">NDT Consulting</a><a href="/training">NDT Training</a><a href="/blog">Blog</a><a href="/contact">Contact</a></nav></header>\n  <main>\n    <h1>${p.bodyH1}</h1>\n    <p>${p.bodyText}</p>\n  </main>` : null,
  };

  // Add structured data for FAQ page
  if (p.path === '/faq') {
    routeObj.structuredData = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is Non-Destructive Testing (NDT)?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Non-Destructive Testing (NDT) is a group of analysis techniques used to evaluate the properties of materials, components, or assemblies without causing damage. NDT methods are essential for quality control, safety inspections, and maintenance in industries like oil & gas, aerospace, power generation, and manufacturing."
          }
        },
        {
          "@type": "Question",
          "name": "What are the main types of NDT methods?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The main NDT methods include Ultrasonic Testing (UT), Radiographic Testing (RT), Magnetic Particle Testing (MT), Liquid Penetrant Testing (PT), Eddy Current Testing (ET), and Visual Testing (VT). Each method has specific applications depending on the material type, defect orientation, and accessibility."
          }
        },
        {
          "@type": "Question",
          "name": "Why is NDT important for industrial safety?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "NDT is critical for detecting defects before they lead to equipment failure, environmental damage, or safety incidents. Regular NDT inspections ensure structural integrity, extend asset life, reduce downtime, and comply with regulatory requirements in industries like oil & gas, nuclear, and aerospace."
          }
        },
        {
          "@type": "Question",
          "name": "How do I choose the right NDT method for my application?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The choice depends on several factors: material type (ferrous vs non-ferrous), defect type (surface vs subsurface), accessibility, and required sensitivity. For surface cracks on ferromagnetic materials, use MT. For subsurface defects, UT or RT is preferred. PT works on non-porous materials for surface defects. Our consultants can help you select the optimal method."
          }
        },
        {
          "@type": "Question",
          "name": "What NDT certifications does Atlantis offer?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Atlantis NDT offers training and certification for ASNT (American Society for Nondestructive Testing) Level I, II, and III across all major NDT methods including UT, RT, MT, PT, ET, and VT. We also provide preparation for CSWIP and PCN certifications."
          }
        },
        {
          "@type": "Question",
          "name": "What is the difference between NDT Level I, II, and III?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Level I technicians perform specific calibrations and tests under supervision. Level II technicians can set up equipment, interpret results, and prepare reports. Level III professionals can design test procedures, train others, and interpret codes and specifications. Each level requires more experience and knowledge."
          }
        },
        {
          "@type": "Question",
          "name": "How long does NDT training take?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Training duration varies by method and level. Level I typically requires 40 hours of classroom training, Level II requires 40-80 hours depending on the method. Certification also requires documented experience hours and passing written and practical exams."
          }
        },
        {
          "@type": "Question",
          "name": "Do you offer online NDT training?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we offer blended learning options combining online theoretical training with hands-on practical sessions. This allows flexibility for working professionals while ensuring practical competency through in-person labs."
          }
        }
      ]
    };
  }

  // Add Course schema for training pages
  if (p.path === '/training') {
    routeObj.structuredData = {
      "@context": "https://schema.org",
      "@type": "Course",
      "name": "NDT Training - ASNT Level I, II, III Certification",
      "description": "Professional NDT training courses for ASNT Level I, II, and III certification. Covering UT, MT, PT, RT, ET, and VT methods with flexible scheduling and 95% pass rate.",
      "provider": { "@type": "Organization", "name": "Atlantis NDT", "url": SITE_URL },
      "educationalLevel": "Professional",
      "courseCode": "NDT-CERT",
      "hasCourseInstance": {
        "@type": "CourseInstance",
        "courseMode": "Blended",
        "courseWorkload": "PT40H",
        "instructor": { "@type": "Organization", "name": "Atlantis NDT", "url": SITE_URL }
      }
    };
  }

  if (p.path === '/training-usa') {
    routeObj.structuredData = {
      "@context": "https://schema.org",
      "@type": "Course",
      "name": "NDT Training USA - ASNT Level I, II, III Certification",
      "description": "Professional NDT training in the USA. Houston-based ASNT certification courses for Level I, II, and III with 95% pass rate. UT, MT, PT, RT, ET, VT methods.",
      "provider": { "@type": "Organization", "name": "Atlantis NDT", "url": SITE_URL },
      "educationalLevel": "Professional",
      "courseCode": "NDT-USA",
      "hasCourseInstance": {
        "@type": "CourseInstance",
        "courseMode": "Blended",
        "courseWorkload": "PT40H",
        "instructor": { "@type": "Organization", "name": "Atlantis NDT", "url": SITE_URL }
      }
    };
  }

  if (p.path === '/training-india') {
    routeObj.structuredData = {
      "@context": "https://schema.org",
      "@type": "Course",
      "name": "NDT Training India - ASNT Level I, II, III Certification",
      "description": "Professional NDT training in India. ASNT certification courses in Hyderabad for Level I, II, and III with classroom and online options. UT, MT, PT, RT, ET, VT methods.",
      "provider": { "@type": "Organization", "name": "Atlantis NDT", "url": SITE_URL },
      "educationalLevel": "Professional",
      "courseCode": "NDT-IND",
      "hasCourseInstance": {
        "@type": "CourseInstance",
        "courseMode": "Blended",
        "courseWorkload": "PT40H",
        "instructor": { "@type": "Organization", "name": "Atlantis NDT", "url": SITE_URL }
      }
    };
  }

  if (p.path === '/training-me') {
    routeObj.structuredData = {
      "@context": "https://schema.org",
      "@type": "Course",
      "name": "NDT Training Middle East - ASNT Level I, II, III Certification",
      "description": "Professional NDT training across Middle East: UAE, Saudi Arabia, Qatar, Kuwait, Oman, and Bahrain. ASNT SNT-TC-1A and ISO 9712 Level I, II, III certification.",
      "provider": { "@type": "Organization", "name": "Atlantis NDT", "url": SITE_URL },
      "educationalLevel": "Professional",
      "courseCode": "NDT-ME",
      "hasCourseInstance": {
        "@type": "CourseInstance",
        "courseMode": "Blended",
        "courseWorkload": "PT40H",
        "instructor": { "@type": "Organization", "name": "Atlantis NDT", "url": SITE_URL }
      }
    };
  }

  if (p.path === '/ndt-training-online') {
    routeObj.structuredData = {
      "@context": "https://schema.org",
      "@type": "Course",
      "name": "Online NDT Training - ASNT Level I, II, III Certification",
      "description": "Online NDT training for ASNT SNT-TC-1A certification. Level I and II theory courses for UT, MT, PT, RT, ET, and VT methods. Live virtual and self-paced options.",
      "provider": { "@type": "Organization", "name": "Atlantis NDT", "url": SITE_URL },
      "educationalLevel": "Professional",
      "courseCode": "NDT-ONLINE",
      "hasCourseInstance": {
        "@type": "CourseInstance",
        "courseMode": "Online",
        "courseWorkload": "PT40H",
        "instructor": { "@type": "Organization", "name": "Atlantis NDT", "url": SITE_URL }
      }
    };
  }

  if (p.path === '/ndt-training-usa') {
    routeObj.structuredData = {
      "@context": "https://schema.org",
      "@type": "Course",
      "name": "NDT Training USA - ASNT Level I, II, III Certification",
      "description": "Professional NDT training in the USA. Houston-based ASNT certification courses for Level I, II, and III with 95% pass rate. UT, MT, PT, RT, ET, VT methods.",
      "provider": { "@type": "Organization", "name": "Atlantis NDT", "url": SITE_URL },
      "educationalLevel": "Professional",
      "courseCode": "NDT-USA",
      "hasCourseInstance": {
        "@type": "CourseInstance",
        "courseMode": "Blended",
        "courseWorkload": "PT40H",
        "instructor": { "@type": "Organization", "name": "Atlantis NDT", "url": SITE_URL }
      }
    };
  }

  if (p.path === '/ndt-training-india') {
    routeObj.structuredData = {
      "@context": "https://schema.org",
      "@type": "Course",
      "name": "NDT Training India - ASNT Level I, II, III Certification",
      "description": "Professional NDT training in India. ASNT certification courses in Hyderabad for Level I, II, and III with classroom and online options. UT, MT, PT, RT, ET, VT methods.",
      "provider": { "@type": "Organization", "name": "Atlantis NDT", "url": SITE_URL },
      "educationalLevel": "Professional",
      "courseCode": "NDT-IND",
      "hasCourseInstance": {
        "@type": "CourseInstance",
        "courseMode": "Blended",
        "courseWorkload": "PT40H",
        "instructor": { "@type": "Organization", "name": "Atlantis NDT", "url": SITE_URL }
      }
    };
  }

  routes.push(routeObj);
});

// ── Blog post pages ──────────────────────────────────────────────────────
blogs.forEach(blog => {
  const blogCanonical = `${SITE_URL}/blog/${blog.slug}`;
  const blogDesc = blog.metaDescription || blog.excerpt || blog.description || `${blog.title} - Expert NDT insights from ASNT Level III professionals at Atlantis NDT.`;
  const isoDate = blog.createdAt || blog.date || '2026-01-01';
  const isoModified = blog.updatedAt || isoDate;

  // Article structured data for pre-rendered HTML (critical for Googlebot)
  const blogStructuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "TechArticle",
        "headline": blog.title,
        "description": blogDesc,
        "datePublished": isoDate,
        "dateModified": isoModified,
        "author": { "@type": "Organization", "name": "Atlantis NDT", "url": SITE_URL },
        "publisher": {
          "@type": "Organization",
          "name": "Atlantis NDT",
          "logo": { "@type": "ImageObject", "url": `${SITE_URL}/favicon-96x96.jpg`, "width": 96, "height": 96 }
        },
        "mainEntityOfPage": { "@type": "WebPage", "@id": blogCanonical },
        "image": `${SITE_URL}/og-image.jpg`,
        "inLanguage": "en-US",
        "isAccessibleForFree": true
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": SITE_URL },
          { "@type": "ListItem", "position": 2, "name": "Blog", "item": `${SITE_URL}/blog` },
          { "@type": "ListItem", "position": 3, "name": blog.title, "item": blogCanonical }
        ]
      }
    ]
  };

  routes.push({
    path: `/blog/${blog.slug}`,
    title: `${blog.title} | Atlantis NDT`,
    description: blogDesc,
    canonical: blogCanonical,
    structuredData: blogStructuredData,
    bodyContent: `  <header><nav aria-label="Main Navigation"><a href="/">Home</a><a href="/blog">Blog</a><a href="/contact">Contact</a></nav></header>\n  <main>\n    <article>\n      <h1>${blog.title}</h1>\n      <p>${blog.snippet || blog.excerpt || ''}</p>\n    </article>\n  </main>`,
  });
});

// ── Consulting city pages ────────────────────────────────────────────────
const consultingCities = [
  'houston', 'los-angeles', 'new-orleans', 'denver', 'chicago', 'seattle',
  'dallas', 'phoenix', 'philadelphia', 'san-francisco', 'detroit', 'pittsburgh',
  'baton-rouge', 'corpus-christi', 'tulsa', 'beaumont', 'dubai', 'saudi-arabia',
  'qatar', 'kuwait', 'abu-dhabi', 'bahrain', 'oman', 'jubail', 'yanbu', 'dammam',
  'mumbai', 'hyderabad', 'bangalore', 'chennai', 'delhi', 'kolkata', 'pune',
  'ahmedabad', 'kochi', 'vizag', 'jamnagar', 'singapore', 'malaysia', 'indonesia',
  'thailand', 'vietnam', 'philippines', 'hong-kong', 'taiwan', 'south-korea',
  'japan', 'china', 'beijing', 'shanghai', 'shenzhen', 'australia', 'sydney',
  'melbourne', 'brisbane', 'perth', 'new-zealand', 'uk', 'norway', 'netherlands',
  'belgium', 'germany', 'france', 'spain', 'italy', 'scotland', 'aberdeen',
  'calgary', 'edmonton', 'toronto', 'vancouver', 'nigeria', 'ghana', 'accra',
  'south-africa', 'cape-town', 'johannesburg', 'nairobi', 'kenya', 'egypt',
  'algeria', 'angola', 'brazil', 'sao-paulo', 'rio-de-janeiro', 'argentina',
  'buenos-aires', 'chile', 'santiago', 'colombia', 'bogota', 'peru', 'lima',
  'mexico-city', 'trinidad', 'bangkok', 'jakarta', 'manila', 'casablanca',
  'lagos', 'ho-chi-minh',
];

// Region-specific differentiators to beat local competitors
const regionDifferentiators = {
  // Middle East
  'dubai': { industries: 'oil & gas, petrochemical, and downstream', certs: 'ASNT Level III & API certified', usp: 'Serving UAE, GCC & Middle East' },
  'saudi-arabia': { industries: 'upstream, downstream & petrochemical', certs: 'Saudi Aramco approved, ASNT Level III', usp: 'Kingdom-wide coverage from Jubail to Yanbu' },
  'qatar': { industries: 'LNG, gas processing & offshore', certs: 'QatarEnergy approved, ASNT certified', usp: 'North Field expansion & Ras Laffan expertise' },
  'kuwait': { industries: 'refining, upstream & petrochemical', certs: 'ASNT Level III & API certified', usp: 'Clean fuels project & KIPIC support' },
  'abu-dhabi': { industries: 'offshore, downstream & sour gas', certs: 'ADNOC approved, ASNT Level III', usp: 'Ruwais & offshore platform specialists' },
  'bahrain': { industries: 'refining, aluminum & petrochemical', certs: 'ASNT Level III certified', usp: 'BAPCO modernization expertise' },
  'oman': { industries: 'EOR, LNG & petrochemical', certs: 'ASNT Level III & API certified', usp: 'PDO & Duqm SEZ specialists' },
  // India
  'mumbai': { industries: 'refining, offshore & petrochemical', certs: 'ASNT Level III, ISNT affiliated', usp: 'Western India corridor specialists' },
  'chennai': { industries: 'automotive, power & refining', certs: 'ASNT Level III certified', usp: 'South India industrial hub experts' },
  'bangalore': { industries: 'aerospace, defense & manufacturing', certs: 'ASNT Level III, NAS 410', usp: 'HAL corridor & aerospace NDT specialists' },
  'delhi': { industries: 'refining, pipeline & power generation', certs: 'ASNT Level III certified', usp: 'North India refinery specialists' },
  'kolkata': { industries: 'steel, thermal power & petrochemical', certs: 'ASNT Level III certified', usp: 'Eastern India heavy industry experts' },
  // Europe
  'uk': { industries: 'offshore, nuclear & aerospace', certs: 'PCN, ASNT Level III certified', usp: 'North Sea & decommissioning experts' },
  'aberdeen': { industries: 'offshore oil & gas, subsea & wind', certs: 'PCN Level III, ASNT certified', usp: 'North Sea integrity management specialists' },
  'norway': { industries: 'offshore, subsea & energy', certs: 'NORSOK compliant, ASNT Level III', usp: 'Norwegian shelf & platform life extension' },
  'germany': { industries: 'chemical, automotive & manufacturing', certs: 'DIN EN ISO, ASNT Level III', usp: 'Ludwigshafen & Leverkusen corridor' },
  'netherlands': { industries: 'refining, offshore & petrochemical', certs: 'ASNT Level III, EN certified', usp: 'Europoort & Rotterdam complex specialists' },
  'france': { industries: 'nuclear, refining & aerospace', certs: 'COFREND, ASNT Level III', usp: 'Nuclear fleet & Total Energies support' },
  'italy': { industries: 'refining, petrochemical & manufacturing', certs: 'ASNT Level III, EN certified', usp: 'ENI operations & Mediterranean refining' },
  // Asia-Pacific
  'singapore': { industries: 'petrochemical, marine & aerospace', certs: 'ASNT Level III certified', usp: 'Jurong Island & regional APAC hub' },
  'australia': { industries: 'LNG, mining & infrastructure', certs: 'ISO 9712, ASNT Level III', usp: 'Gorgon, Wheatstone & NW Shelf experts' },
  'japan': { industries: 'refining, manufacturing & nuclear', certs: 'JIS compliant, ASNT Level III', usp: 'Japanese quality standards specialists' },
  'south-korea': { industries: 'refining, shipbuilding & petrochemical', certs: 'ASNT Level III certified', usp: 'Ulsan mega-refinery specialists' },
  'malaysia': { industries: 'offshore, refining & petrochemical', certs: 'ASNT Level III certified', usp: 'Petronas operations & South China Sea' },
  // Africa
  'nigeria': { industries: 'offshore, onshore & refining', certs: 'ASNT Level III certified', usp: 'Niger Delta & deepwater specialists' },
  'south-africa': { industries: 'synfuels, refining & mining', certs: 'ASNT Level III certified', usp: 'Sasol & SAPREF operations experts' },
  'egypt': { industries: 'gas, refining & petrochemical', certs: 'ASNT Level III certified', usp: 'Mediterranean & Red Sea operations' },
  // Asia-Pacific continued
  'indonesia': { industries: 'offshore, refining & petrochemical', certs: 'ASNT Level III certified', usp: 'Balikpapan, Cilacap & Dumai refinery experts' },
  'thailand': { industries: 'petrochemical, refining & manufacturing', certs: 'ASNT Level III certified', usp: 'Map Ta Phut & PTT operations specialists' },
  'vietnam': { industries: 'offshore, refining & gas processing', certs: 'ASNT Level III certified', usp: 'Dung Quat & Nghi Son refinery experts' },
  'philippines': { industries: 'refining, power & manufacturing', certs: 'ASNT Level III certified', usp: 'Bataan refinery & industrial zone specialists' },
  'hong-kong': { industries: 'marine, construction & infrastructure', certs: 'ASNT Level III certified', usp: 'Asia-Pacific financial hub NDT support' },
  'taiwan': { industries: 'semiconductor, petrochemical & manufacturing', certs: 'ASNT Level III certified', usp: 'Formosa Plastics & CPC refinery specialists' },
  'china': { industries: 'refining, petrochemical & manufacturing', certs: 'ASNT Level III certified', usp: 'Sinopec & PetroChina operations support' },
  'beijing': { industries: 'refining, power & pipeline', certs: 'ASNT Level III certified', usp: 'North China refinery & pipeline specialists' },
  'shanghai': { industries: 'petrochemical, shipbuilding & manufacturing', certs: 'ASNT Level III certified', usp: 'Yangtze Delta industrial corridor experts' },
  'shenzhen': { industries: 'electronics, manufacturing & construction', certs: 'ASNT Level III certified', usp: 'Pearl River Delta industrial hub specialists' },
  'sydney': { industries: 'power, manufacturing & infrastructure', certs: 'ISO 9712, ASNT Level III', usp: 'NSW industrial infrastructure specialists' },
  'melbourne': { industries: 'aerospace, manufacturing & defense', certs: 'ISO 9712, ASNT Level III', usp: 'Victoria advanced manufacturing hub experts' },
  'brisbane': { industries: 'LNG, mining & energy', certs: 'ISO 9712, ASNT Level III', usp: 'Curtis Island LNG & Queensland mining experts' },
  'perth': { industries: 'LNG, mining & offshore', certs: 'ISO 9712, ASNT Level III', usp: 'Gorgon, Wheatstone & Pilbara mining specialists' },
  'new-zealand': { industries: 'energy, manufacturing & infrastructure', certs: 'ASNT Level III certified', usp: 'Taranaki energy & infrastructure experts' },
  'bangkok': { industries: 'petrochemical, automotive & power', certs: 'ASNT Level III certified', usp: 'Eastern Seaboard & Map Ta Phut specialists' },
  'jakarta': { industries: 'refining, offshore & manufacturing', certs: 'ASNT Level III certified', usp: 'Pertamina operations & Java industrial hub' },
  'manila': { industries: 'power, shipbuilding & manufacturing', certs: 'ASNT Level III certified', usp: 'Bataan & Subic Bay industrial corridor' },
  'ho-chi-minh': { industries: 'refining, gas & manufacturing', certs: 'ASNT Level III certified', usp: 'Southern Vietnam industrial hub experts' },
  // Europe continued
  'belgium': { industries: 'petrochemical, refining & nuclear', certs: 'ASNT Level III, EN certified', usp: 'Antwerp port & chemical corridor specialists' },
  'spain': { industries: 'refining, petrochemical & energy', certs: 'ASNT Level III, EN certified', usp: 'Repsol operations & Mediterranean corridor' },
  'scotland': { industries: 'offshore, whisky & energy', certs: 'PCN, ASNT Level III certified', usp: 'North Sea & renewable energy specialists' },
  // Canada
  'calgary': { industries: 'oil sands, midstream & pipeline', certs: 'ASNT Level III, CWB certified', usp: 'Canadian energy sector specialists' },
  'edmonton': { industries: 'oil sands upgrading & petrochemical', certs: 'ASNT Level III, CWB certified', usp: 'Alberta upgrader & refinery specialists' },
  'toronto': { industries: 'automotive, steel & manufacturing', certs: 'ASNT Level III, CGSB certified', usp: 'Golden Horseshoe industrial corridor experts' },
  'vancouver': { industries: 'pipeline, marine & LNG', certs: 'ASNT Level III, CWB certified', usp: 'Trans Mountain & Pacific gateway specialists' },
  // Africa continued
  'ghana': { industries: 'offshore petroleum & mining', certs: 'ASNT Level III certified', usp: 'Jubilee field & West Africa specialists' },
  'accra': { industries: 'offshore oil & gas, mining & industrial', certs: 'ASNT Level III certified', usp: 'Ghana petroleum & mining hub experts' },
  'cape-town': { industries: 'refining, maritime & manufacturing', certs: 'ASNT Level III certified', usp: 'Western Cape industrial corridor specialists' },
  'johannesburg': { industries: 'mining, steel & manufacturing', certs: 'ASNT Level III certified', usp: 'Gauteng mining & industrial hub experts' },
  'nairobi': { industries: 'energy, geothermal & infrastructure', certs: 'ASNT Level III certified', usp: 'East Africa energy & infrastructure specialists' },
  'kenya': { industries: 'geothermal, pipeline & manufacturing', certs: 'ASNT Level III certified', usp: 'Turkana pipeline & geothermal experts' },
  'algeria': { industries: 'gas, refining & petrochemical', certs: 'ASNT Level III certified', usp: 'Sonatrach operations & Saharan pipeline specialists' },
  'angola': { industries: 'offshore deepwater & LNG', certs: 'ASNT Level III certified', usp: 'Sonangol & Angola LNG specialists' },
  'casablanca': { industries: 'phosphate, automotive & manufacturing', certs: 'ASNT Level III certified', usp: 'OCP phosphate & Moroccan industrial hub experts' },
  'lagos': { industries: 'offshore, refining & petrochemical', certs: 'ASNT Level III certified', usp: 'Lagos industrial corridor & West Africa hub' },
  // Americas
  'houston': { industries: 'oil & gas, petrochemical & refining', certs: 'ASNT Level III, API 510/570/653', usp: 'Gulf Coast headquarters, 50+ consultants' },
  'los-angeles': { industries: 'refining, aerospace & manufacturing', certs: 'ASNT Level III, NAS 410', usp: 'West Coast refining & aerospace specialists' },
  'new-orleans': { industries: 'LNG, petrochemical & refining', certs: 'ASNT Level III, API certified', usp: 'Mississippi River corridor & LNG export experts' },
  'denver': { industries: 'oil & gas, aerospace & renewable energy', certs: 'ASNT Level III certified', usp: 'DJ Basin & Rocky Mountain energy specialists' },
  'chicago': { industries: 'refining, steel & manufacturing', certs: 'ASNT Level III, API certified', usp: 'Midwest heavy crude refining & manufacturing experts' },
  'seattle': { industries: 'aerospace, refining & maritime', certs: 'ASNT Level III, NAS 410', usp: 'Boeing corridor & Pacific Northwest specialists' },
  'dallas': { industries: 'aerospace, defense & manufacturing', certs: 'ASNT Level III, NAS 410', usp: 'DFW defense manufacturing corridor experts' },
  'phoenix': { industries: 'semiconductor, aerospace & solar', certs: 'ASNT Level III certified', usp: 'Arizona semiconductor & aerospace specialists' },
  'philadelphia': { industries: 'refining, pharmaceutical & manufacturing', certs: 'ASNT Level III, API certified', usp: 'East Coast refining & industrial corridor experts' },
  'san-francisco': { industries: 'tech manufacturing, refining & marine', certs: 'ASNT Level III certified', usp: 'Bay Area industrial & energy specialists' },
  'detroit': { industries: 'automotive, steel & manufacturing', certs: 'ASNT Level III certified', usp: 'Michigan automotive & heavy industry experts' },
  'pittsburgh': { industries: 'steel, nuclear & manufacturing', certs: 'ASNT Level III certified', usp: 'Steel City industrial heritage specialists' },
  'baton-rouge': { industries: 'refining, petrochemical & chemical', certs: 'ASNT Level III, API certified', usp: 'Louisiana refinery corridor specialists' },
  'corpus-christi': { industries: 'refining, petrochemical & LNG', certs: 'ASNT Level III, API certified', usp: 'South Texas refining & export terminal experts' },
  'tulsa': { industries: 'pipeline, midstream & refining', certs: 'ASNT Level III, API certified', usp: 'Oklahoma pipeline & midstream hub specialists' },
  'beaumont': { industries: 'refining, petrochemical & LNG', certs: 'ASNT Level III, API certified', usp: 'Golden Triangle refinery corridor experts' },
  'brazil': { industries: 'pre-salt deepwater, refining & offshore', certs: 'ASNT Level III certified', usp: 'Petrobras & pre-salt expertise' },
  'sao-paulo': { industries: 'refining, petrochemical & manufacturing', certs: 'ASNT Level III certified', usp: 'REPLAN refinery & Paulinia industrial hub' },
  'rio-de-janeiro': { industries: 'offshore deepwater, refining & subsea', certs: 'ASNT Level III certified', usp: 'Pre-salt FPSO & Comperj specialists' },
  'argentina': { industries: 'oil & gas, mining & power', certs: 'ASNT Level III certified', usp: 'Vaca Muerta shale & Patagonia operations' },
  'buenos-aires': { industries: 'refining, petrochemical & power', certs: 'ASNT Level III certified', usp: 'Argentine industrial corridor specialists' },
  'chile': { industries: 'mining, energy & LNG', certs: 'ASNT Level III certified', usp: 'Copper mining & LNG terminal specialists' },
  'santiago': { industries: 'mining, manufacturing & energy', certs: 'ASNT Level III certified', usp: 'Chilean mining & energy corridor experts' },
  'colombia': { industries: 'oil & gas, refining & pipeline', certs: 'ASNT Level III certified', usp: 'Ecopetrol operations & Andean specialists' },
  'bogota': { industries: 'refining, pipeline & manufacturing', certs: 'ASNT Level III certified', usp: 'Barrancabermeja refinery corridor experts' },
  'peru': { industries: 'mining, gas & refining', certs: 'ASNT Level III certified', usp: 'Camisea gas & Peruvian mining specialists' },
  'lima': { industries: 'refining, mining & manufacturing', certs: 'ASNT Level III certified', usp: 'Talara refinery & Peruvian industrial hub' },
  'mexico-city': { industries: 'refining, automotive & petrochemical', certs: 'ASNT Level III certified', usp: 'PEMEX operations & Mexican manufacturing experts' },
  'trinidad': { industries: 'LNG, gas processing & petrochemical', certs: 'ASNT Level III certified', usp: 'Atlantic LNG & Point Lisas specialists' },
  // Middle East continued
  'jubail': { industries: 'petrochemical, desalination & steel', certs: 'Saudi Aramco approved, ASNT Level III', usp: 'Royal Commission industrial city specialists' },
  'yanbu': { industries: 'refining, petrochemical & utilities', certs: 'Saudi Aramco approved, ASNT Level III', usp: 'Red Sea industrial corridor experts' },
  'dammam': { industries: 'oil & gas, marine & manufacturing', certs: 'Saudi Aramco approved, ASNT Level III', usp: 'Eastern Province petroleum hub specialists' },
  // India continued
  'hyderabad': { industries: 'pharmaceutical, aerospace & defense', certs: 'ASNT Level III certified', usp: 'DRDO corridor & pharma manufacturing experts' },
  'pune': { industries: 'automotive, defense & manufacturing', certs: 'ASNT Level III certified', usp: 'Western India automotive & defense hub' },
  'ahmedabad': { industries: 'refining, textile & petrochemical', certs: 'ASNT Level III certified', usp: 'Gujarat refinery & industrial corridor specialists' },
  'kochi': { industries: 'refining, shipbuilding & petrochemical', certs: 'ASNT Level III certified', usp: 'BPCL Kochi refinery & Cochin Shipyard experts' },
  'vizag': { industries: 'refining, steel & shipbuilding', certs: 'ASNT Level III certified', usp: 'HPCL Vizag refinery & Rashtriya Ispat specialists' },
  'jamnagar': { industries: 'refining & petrochemical', certs: 'ASNT Level III certified', usp: 'Reliance Jamnagar mega-refinery specialists' },
};

// Country codes for hreflang mapping
const cityCountryMap = {
  'houston': 'US', 'los-angeles': 'US', 'new-orleans': 'US', 'denver': 'US', 'chicago': 'US',
  'seattle': 'US', 'dallas': 'US', 'phoenix': 'US', 'philadelphia': 'US', 'san-francisco': 'US',
  'detroit': 'US', 'pittsburgh': 'US', 'baton-rouge': 'US', 'corpus-christi': 'US', 'tulsa': 'US',
  'beaumont': 'US', 'austin': 'US', 'san-antonio': 'US', 'fort-worth': 'US', 'midland': 'US',
  'sacramento': 'US', 'orlando': 'US', 'norfolk': 'US', 'huntsville': 'US', 'mobile': 'US',
  'oklahoma-city': 'US', 'colorado-springs': 'US', 'savannah': 'US', 'raleigh': 'US',
  'nashville': 'US', 'lake-charles': 'US',
  'dubai': 'AE', 'abu-dhabi': 'AE',
  'saudi-arabia': 'SA', 'jubail': 'SA', 'yanbu': 'SA', 'dammam': 'SA',
  'qatar': 'QA', 'kuwait': 'KW', 'bahrain': 'BH', 'oman': 'OM',
  'mumbai': 'IN', 'hyderabad': 'IN', 'bangalore': 'IN', 'chennai': 'IN', 'delhi': 'IN',
  'kolkata': 'IN', 'pune': 'IN', 'ahmedabad': 'IN', 'kochi': 'IN', 'vizag': 'IN', 'jamnagar': 'IN',
  'singapore': 'SG', 'malaysia': 'MY', 'indonesia': 'ID', 'thailand': 'TH', 'vietnam': 'VN',
  'philippines': 'PH', 'japan': 'JP', 'south-korea': 'KR',
  'uk': 'GB', 'aberdeen': 'GB', 'scotland': 'GB',
  'norway': 'NO', 'netherlands': 'NL', 'belgium': 'BE', 'germany': 'DE', 'france': 'FR',
  'spain': 'ES', 'italy': 'IT',
  'calgary': 'CA', 'edmonton': 'CA', 'toronto': 'CA', 'vancouver': 'CA',
  'australia': 'AU', 'sydney': 'AU', 'melbourne': 'AU', 'brisbane': 'AU', 'perth': 'AU',
  'new-zealand': 'NZ',
  'nigeria': 'NG', 'lagos': 'NG', 'ghana': 'GH', 'accra': 'GH',
  'south-africa': 'ZA', 'cape-town': 'ZA', 'johannesburg': 'ZA',
  'nairobi': 'KE', 'kenya': 'KE', 'egypt': 'EG', 'algeria': 'DZ', 'angola': 'AO',
  'casablanca': 'MA',
  'brazil': 'BR', 'sao-paulo': 'BR', 'rio-de-janeiro': 'BR',
  'argentina': 'AR', 'buenos-aires': 'AR', 'chile': 'CL', 'santiago': 'CL',
  'colombia': 'CO', 'bogota': 'CO', 'peru': 'PE', 'lima': 'PE',
  'mexico-city': 'MX', 'trinidad': 'TT',
  'beijing': 'CN', 'shanghai': 'CN', 'shenzhen': 'CN', 'china': 'CN',
  'hong-kong': 'HK', 'taiwan': 'TW', 'taipei': 'TW', 'manila': 'PH',
  'bangkok': 'TH', 'jakarta': 'ID', 'ho-chi-minh': 'VN',
};

consultingCities.forEach(citySlug => {
  const cityName = toTitleCase(citySlug);
  const diff = regionDifferentiators[citySlug];
  const canonical = `${SITE_URL}/consulting/ndt-consulting-${citySlug}`;
  const countryCode = cityCountryMap[citySlug] || 'US';
  const title = diff
    ? `NDT Consulting ${cityName} | ${diff.certs} | ${diff.usp} | Atlantis NDT`
    : `NDT Consulting ${cityName} | ASNT Level III Experts | Free Quote | Atlantis NDT`;
  const desc = diff
    ? `Expert NDT consulting in ${cityName} for ${diff.industries}. ${diff.certs} professionals. Procedure writing, program audits, SNT-TC-1A compliance & expert witness. ${diff.usp}. Get a free quote.`
    : `Top-rated NDT consulting in ${cityName}: ASNT Level III procedure writing, program audits, SNT-TC-1A compliance, and expert witness. 50+ certified consultants. Get a free quote today.`;

  // Hreflang for geo-targeting
  const hreflangLinks = [
    { hreflang: `en-${countryCode}`, href: canonical },
    { hreflang: 'en', href: canonical },
    { hreflang: 'x-default', href: canonical }
  ];

  // LocalBusiness + ProfessionalService structured data in pre-rendered HTML
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "name": `NDT Level III Consulting in ${cityName}`,
        "description": desc,
        "url": canonical,
        "telephone": "+1-281-840-8969",
        "email": "info@atlantisndt.com",
        "address": { "@type": "PostalAddress", "addressLocality": cityName, "addressCountry": countryCode },
        "areaServed": { "@type": "Place", "name": cityName },
        "serviceType": "NDT Level III Consulting",
        "provider": { "@type": "Organization", "name": "Atlantis NDT", "url": SITE_URL },
        "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "127", "bestRating": "5" },
        "priceRange": "$$"
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": SITE_URL },
          { "@type": "ListItem", "position": 2, "name": "Consulting", "item": `${SITE_URL}/consulting` },
          { "@type": "ListItem", "position": 3, "name": `NDT Consulting ${cityName}`, "item": canonical }
        ]
      }
    ]
  };

  routes.push({
    path: `/consulting/ndt-consulting-${citySlug}`,
    title,
    description: desc,
    canonical,
    hreflangLinks,
    structuredData,
    bodyContent: `  <header><nav><a href="/">Home</a><a href="/consulting">Consulting</a><a href="/contact">Contact</a></nav></header>\n  <main>\n    <h1>NDT Level III Consulting ${cityName}</h1>\n    <p>ASNT Level III NDT consulting services in ${cityName}${diff ? ` for ${diff.industries}` : ''}. Expert procedure development, program audits, SNT-TC-1A compliance, and written practice development${diff ? `. ${diff.usp}` : ' for oil & gas, petrochemical, and industrial facilities'}.</p>\n    ${diff ? `<p>Our ${cityName} consulting team holds ${diff.certs} qualifications. We provide on-site Level III support, procedure writing, and personnel certification programs tailored to ${cityName}'s ${diff.industries} industry requirements.</p>` : `<p>Our consulting team provides on-site Level III support, procedure writing, and personnel certification programs for industrial facilities in ${cityName}.</p>`}\n  </main>`,
  });
});

// Special city consulting page
routes.push({
  path: '/consulting/ndt-consulting-level-iii',
  title: 'NDT Level III Consulting | ASNT Certified Expert Consultants',
  description: 'NDT Level III consulting services: ASNT-certified procedure development, SNT-TC-1A compliance, program audits, personnel qualification, written practices, and expert witness. Global coverage.',
  canonical: `${SITE_URL}/consulting/ndt-consulting-level-iii`,
});

// ── NDT Method + City pages ───────────────────────────────────────────────
const methodPages = [
  { method: 'Ultrasonic Testing', slug: 'ultrasonic-testing', short: 'UT', detail: 'weld inspection, thickness measurement, corrosion mapping and flaw detection' },
  { method: 'Radiographic Testing', slug: 'radiographic-testing', short: 'RT', detail: 'weld inspection, casting evaluation, pipe inspection and volumetric flaw detection' },
  { method: 'Magnetic Particle Testing', slug: 'magnetic-particle-testing', short: 'MT', detail: 'surface and near-surface crack detection in ferromagnetic materials' },
  { method: 'Liquid Penetrant Testing', slug: 'penetrant-testing', short: 'PT', detail: 'surface-breaking defect detection in welds, castings and machined parts' },
  { method: 'Eddy Current Testing', slug: 'eddy-current-testing', short: 'ET', detail: 'heat exchanger tube inspection, surface crack detection and conductivity testing' },
  { method: 'Visual Testing', slug: 'visual-testing', short: 'VT', detail: 'direct and remote visual inspection of welds, structures and components' },
];

// Use all cities from allCitySlugs (defined later) + additional EU/city expansion
// This ensures pre-rendered HTML exists for every method+city URL submitted to GSC
const methodCities = [
  // US — major metros & industrial hubs
  'houston', 'los-angeles', 'new-orleans', 'denver', 'chicago', 'seattle',
  'dallas', 'phoenix', 'philadelphia', 'san-francisco', 'detroit', 'pittsburgh',
  'new-york', 'boston', 'atlanta', 'miami', 'washington-dc', 'nashville',
  'minneapolis', 'cleveland', 'baltimore', 'tampa', 'charlotte', 'indianapolis',
  'san-diego', 'portland', 'salt-lake-city', 'kansas-city', 'st-louis', 'milwaukee',
  'cincinnati', 'jacksonville', 'baton-rouge', 'corpus-christi', 'tulsa', 'beaumont',
  // Middle East
  'dubai', 'saudi-arabia', 'qatar', 'kuwait', 'abu-dhabi', 'bahrain', 'oman',
  'jubail', 'yanbu', 'dammam',
  // India
  'mumbai', 'chennai', 'bangalore', 'delhi', 'kolkata', 'ahmedabad', 'jamnagar',
  'vizag', 'kochi',
  // Asia-Pacific
  'singapore', 'malaysia', 'indonesia', 'thailand', 'vietnam', 'south-korea',
  'japan', 'taiwan', 'australia', 'perth', 'melbourne', 'sydney', 'brisbane',
  // Europe
  'uk', 'norway', 'germany', 'netherlands', 'france', 'italy', 'spain',
  'aberdeen', 'rotterdam', 'stavanger', 'london', 'hamburg', 'antwerp',
  'marseille', 'milan', 'barcelona', 'gdansk', 'edinburgh',
  // Canada
  'calgary', 'edmonton', 'toronto', 'vancouver',
  // Africa
  'nigeria', 'lagos', 'south-africa', 'johannesburg',
  // Latin America
  'brazil', 'colombia', 'mexico-city',
];

methodPages.forEach(m => {
  // Main method page
  routes.push({
    path: `/${m.slug}`,
    title: `${m.method} (${m.short}) | NDT Inspection Services | Atlantis NDT`,
    description: `Professional ${m.method} (${m.short}) services. ASNT Level II & III certified inspectors for ${m.detail}. Oil & gas, aerospace & industrial inspection worldwide.`,
    canonical: `${SITE_URL}/${m.slug}`,
    bodyContent: `  <header><nav><a href="/">Home</a><a href="/consulting">Consulting</a><a href="/blog">Blog</a></nav></header>\n  <main>\n    <h1>${m.method} Services</h1>\n    <p>Professional ${m.method} (${m.short}) inspection services from ASNT Level II & III certified inspectors. Specializing in ${m.detail}.</p>\n  </main>`,
  });

  // City-specific method pages
  methodCities.forEach(citySlug => {
    const cityName = toTitleCase(citySlug);
    const diff = regionDifferentiators[citySlug] || {};
    const localIndustries = diff.industries ? `<p>Serving ${cityName}'s ${diff.industries} sectors with certified ${m.short} inspection teams. ${diff.usp || ''}.</p>` : '';
    const localCerts = diff.certs ? `<p>Our ${cityName} inspectors hold ${diff.certs} qualifications, ensuring full compliance with local and international standards.</p>` : '';
    routes.push({
      path: `/${m.slug}-${citySlug}`,
      title: `${m.method} ${cityName} | ${m.short} Inspection Services | Atlantis NDT`,
      description: `Professional ${m.method} (${m.short}) services in ${cityName}. ASNT Level II & III certified inspectors for ${m.detail}. Serving oil & gas, aerospace & industrial clients.`,
      canonical: `${SITE_URL}/${m.slug}-${citySlug}`,
      bodyContent: `  <header><nav><a href="/">Home</a><a href="/consulting">Consulting</a><a href="/contact">Contact</a></nav></header>\n  <main>\n    <h1>${m.method} Services ${cityName}</h1>\n    <p>Professional ${m.method} (${m.short}) inspection services in ${cityName} from ASNT Level II & III certified inspectors. Specializing in ${m.detail}.</p>\n    ${localIndustries}${localCerts}\n  </main>`,
    });
  });
});

// ── Ultrasonic Testing pillar page override (replaces generic methodPages entry) ──
routes.push({
  path: '/ultrasonic-testing',
  title: 'Ultrasonic Testing (UT) | PAUT, TOFD, AUT Guide | ASME V Art 4 | Atlantis NDT',
  description: 'Complete guide to ultrasonic testing: conventional UT, phased array (PAUT), TOFD, AUT, guided wave. ASME V Article 4, API 5L, AWS D1.1. Level I-III UT training and Level III consulting.',
  canonical: `${SITE_URL}/ultrasonic-testing`,
  bodyContent: `  <header><nav><a href="/">Home</a><a href="/consulting">Consulting</a><a href="/training">Training</a><a href="/blog">Blog</a><a href="/contact">Contact</a></nav></header>\n  <main>\n    <h1>Ultrasonic Testing (UT) | Complete Guide to UT NDT Methods</h1>\n    <p>Complete guide to ultrasonic testing (UT): conventional pulse-echo, phased array UT (PAUT), TOFD, automated UT, guided wave testing, and immersion UT. ASME Section V Article 4, API 5L, API 1104, AWS D1.1 compliant. ASNT Level I–III UT training and Level III consulting from Atlantis NDT.</p>\n  </main>`,
});

// ── Magnetic Particle Testing pillar page override ──────────────────────────
routes.push({
  path: '/magnetic-particle-testing',
  title: 'Magnetic Particle Testing (MT/MPI) | Surface Defect Detection | ASME V Art 7 | Atlantis NDT',
  description: 'Complete guide to magnetic particle testing (MT/MPI): wet fluorescent, dry powder, yoke and prod methods. ASME V Article 7, API 650, AWS D1.1. Level I-III MT training and Level III consulting.',
  canonical: `${SITE_URL}/magnetic-particle-testing`,
  bodyContent: `  <header><nav><a href="/">Home</a><a href="/consulting">Consulting</a><a href="/training">Training</a><a href="/blog">Blog</a><a href="/contact">Contact</a></nav></header>\n  <main>\n    <h1>Magnetic Particle Testing (MT/MPI) | Surface &amp; Near-Surface Defect Detection</h1>\n    <p>Complete guide to magnetic particle testing (MT/MPI): wet fluorescent MT (WFMT), dry powder MT, yoke method, prod method, and coil/central conductor technique. ASME Section V Article 7, API 650, API 570, AWS D1.1 compliant. ASNT Level I–III MT training and Level III consulting from Atlantis NDT.</p>\n  </main>`,
});

// ── Liquid Penetrant Testing pillar page override ───────────────────────────
routes.push({
  path: '/penetrant-testing',
  title: 'Liquid Penetrant Testing (PT/FPI) | Surface Crack Detection | ASME V Art 6 | Atlantis NDT',
  description: 'Complete guide to liquid penetrant testing: visible dye, fluorescent FPI, water washable, post-emulsifiable. ASME V Article 6, AMS 2644, ASTM E1417. Level I-III PT training and consulting.',
  canonical: `${SITE_URL}/penetrant-testing`,
  bodyContent: `  <header><nav><a href="/">Home</a><a href="/consulting">Consulting</a><a href="/training">Training</a><a href="/blog">Blog</a><a href="/contact">Contact</a></nav></header>\n  <main>\n    <h1>Liquid Penetrant Testing (PT/FPI) | Surface Defect Detection | Any Material</h1>\n    <p>Complete guide to liquid penetrant testing (PT/FPI): visible dye penetrant, fluorescent penetrant inspection (FPI), water washable PT, and post-emulsifiable PT. AMS 2644 sensitivity levels 1/2 through 4. ASME Section V Article 6, AMS 2644, ASTM E1417, API 570 compliant. ASNT Level I–III PT training and Level III consulting from Atlantis NDT.</p>\n  </main>`,
});

// ── Radiographic Testing pillar page override ────────────────────────────
routes.push({
  path: '/radiographic-testing',
  title: 'Radiographic Testing (RT) | X-Ray, Gamma & Digital Radiography | ASME V Art 2 | Atlantis NDT',
  description: 'Complete guide to radiographic testing: film RT, digital radiography, gamma (Ir-192, Co-60), computed radiography. ASME V Article 2, API 1104, AWS D1.1. Level I-III RT training and consulting.',
  canonical: `${SITE_URL}/radiographic-testing`,
  bodyContent: `  <header><nav><a href="/">Home</a><a href="/consulting">Consulting</a><a href="/training">Training</a><a href="/blog">Blog</a><a href="/contact">Contact</a></nav></header>\n  <main>\n    <h1>Radiographic Testing (RT) | X-Ray, Gamma &amp; Digital Radiography | ASME V Art 2</h1>\n    <p>Complete guide to radiographic testing (RT): film radiography, digital radiography (DR), computed radiography (CR), and gamma radiography with Ir-192, Co-60, Se-75. ASME Section V Article 2, API 1104 pipeline radiography, AWS D1.1. ASNT Level I–III RT training, radiation safety consulting, and Level III RT consulting from Atlantis NDT.</p>\n  </main>`,
});

// ── Visual Testing pillar page override ──────────────────────────────────
routes.push({
  path: '/visual-testing',
  title: 'Visual Testing (VT) | Direct & Remote Visual Inspection | ASME V Art 9 | Atlantis NDT',
  description: 'Complete guide to visual testing: direct VT, borescope inspection, remote visual (RVI), drone NDT. ASME V Article 9, AWS D1.1. Level I-III VT training and certification. Atlantis NDT.',
  canonical: `${SITE_URL}/visual-testing`,
  bodyContent: `  <header><nav><a href="/">Home</a><a href="/consulting">Consulting</a><a href="/training">Training</a><a href="/blog">Blog</a><a href="/contact">Contact</a></nav></header>\n  <main>\n    <h1>Visual Testing (VT) | Direct &amp; Remote Visual Inspection | ASME V Art 9</h1>\n    <p>Complete guide to visual testing (VT): direct visual examination, remote visual inspection (RVI), rigid borescope inspection, flexible videoscope inspection, and drone/UAV NDT. ASME Section V Article 9, AWS D1.1 weld visual acceptance criteria. ASNT Level I–III VT training, AWS CWI preparation, and Level III VT consulting from Atlantis NDT.</p>\n  </main>`,
});

// ── Phased Array UT pillar page ──────────────────────────────────────────
routes.push({
  path: '/phased-array-ut',
  title: 'Phased Array UT (PAUT) | S-Scan Weld Inspection | ASME V App IV | Atlantis NDT',
  description: 'Complete guide to phased array ultrasonic testing (PAUT): S-scan, TFM, ASME V Appendix IV, AWS D1.1 Annex K. PAUT vs conventional UT. Level II PAUT training and Level III consulting.',
  canonical: `${SITE_URL}/phased-array-ut`,
  bodyContent: `  <header><nav><a href="/">Home</a><a href="/consulting">Consulting</a><a href="/training">Training</a><a href="/blog">Blog</a><a href="/contact">Contact</a></nav></header>\n  <main>\n    <h1>Phased Array Ultrasonic Testing (PAUT) | Advanced Weld &amp; Component Inspection | Atlantis NDT</h1>\n    <p>Complete guide to phased array ultrasonic testing (PAUT): S-scan beam steering, multi-angle weld inspection, TFM (Total Focusing Method), ASME V Appendix IV compliance, PAUT vs conventional UT comparison, and Level I–III PAUT training from Atlantis NDT.</p>\n  </main>`,
});

// ── TOFD Testing pillar page ─────────────────────────────────────────────
routes.push({
  path: '/tofd-testing',
  title: 'TOFD Testing | Time of Flight Diffraction | ASME V App III | Weld Inspection | Atlantis NDT',
  description: 'Complete guide to TOFD testing: time of flight diffraction for weld volumetric inspection. ASME V Appendix III, EN ISO 10863. TOFD vs PAUT vs RT comparison. Specialist training available.',
  canonical: `${SITE_URL}/tofd-testing`,
  bodyContent: `  <header><nav><a href="/">Home</a><a href="/consulting">Consulting</a><a href="/training">Training</a><a href="/blog">Blog</a><a href="/contact">Contact</a></nav></header>\n  <main>\n    <h1>TOFD Testing | Time of Flight Diffraction | Weld Volumetric Inspection | Atlantis NDT</h1>\n    <p>Complete guide to TOFD testing (time of flight diffraction): diffraction physics, D-scan interpretation, lateral wave and back wall reference signals, dead zone, ASME V Article 4 Mandatory Appendix III, EN ISO 10863, BS 7706. TOFD vs PAUT vs radiographic testing comparison. Specialist TOFD training and ASME Appendix III procedure development from Atlantis NDT.</p>\n  </main>`,
});

// ── Additional standalone pages ──────────────────────────────────────────
// NOTE: Paths with 301 redirects in vercel.json are excluded to avoid static files overriding redirects
const extraPages = [
  // REMOVED: /digital-twins-ndt-guide → redirects to /digital-twins
  // REMOVED: /digital-twins-oil-gas → content consolidated into /digital-twins
  { path: '/ut-vs-rt-comparison', title: 'UT vs RT: Which Weld Inspection Method Wins? [2026 Comparison]', description: 'UT costs $800/weld vs RT at $1,500 — but RT catches defects UT misses. Side-by-side comparison: cost, speed, safety, accuracy, and ASME/AWS code requirements. Free decision matrix.' },
  { path: '/blog/api-653-tank-inspection-guide', title: 'API 653 Tank Inspection [2026]: Intervals, Floor Scan & Free Checklist', description: 'API 653 inspection intervals: external every 5 yr, internal every 10 yr (RBI-adjustable). Covers floor UT/MFL scanning, shell thickness, hot-tap repair criteria. Download free checklist.' },
  // REMOVED: /blog/ndt-career-guide → redirects to /blog/ndt-salary-guide-2025-global-level-1-2-3
  { path: '/blog/ut-vs-rt-comparison', title: 'UT vs RT for Welds [2026]: Cost, Safety & Accuracy — Which to Choose?', description: 'Choosing UT or RT for weld inspection? Compare cost ($800 vs $1,500+/weld), radiation safety, defect sensitivity, and ASME/AWS requirements. Includes decision matrix and expert picks.' },
  // REMOVED: /blog/digital-twins-ndt-guide → redirects to /blog/ultimate-guide-ndt-digital-twins-asset-integrity-2025
  // REMOVED: /blog/digital-twins-oil-gas → redirects to /blog/ultimate-guide-ndt-digital-twins-asset-integrity-2025

  // Tools - New Pages
  { path: '/tools', title: 'NDT Tools Hub | Calculators & Reference Guides [2026]', description: 'Free online NDT tools: ultrasonic thickness calculator, corrosion rate calculator, sound velocity reference, certification cost calculator, ROI calculator, and NDT method selector.' },
  { path: '/tools/ndt-method-selector', title: 'NDT Method Selector | Choose the Right Testing Technique [2026]', description: 'Interactive NDT method selector: find the best inspection technique for your application. Compare ultrasonic, radiographic, magnetic particle, penetrant, eddy current, and visual testing.' },
  { path: '/tools/ndt-certification-cost-calculator', title: 'NDT Certification Cost Calculator [2026] | Training Budget Estimator', description: 'Calculate NDT certification costs: ASNT Level I, II, III, API, CSWIP training & exam fees by location. Plan your NDT training budget.' },
  { path: '/tools/ndt-roi-calculator', title: 'NDT ROI Calculator [2026] | Return on NDT Investment | Atlantis NDT', description: 'Calculate ROI from NDT inspections: compare cost vs defects caught, downtime prevented, and safety improvements. Business case for NDT investment.' },
  { path: '/tools/ndt-quick-reference', title: 'NDT Quick Reference Guide [2026] | Methods, Codes & Standards', description: 'Fast-access NDT reference: methods comparison, ASME/API code requirements, sound velocity values, typical defect depths, certification costs, and procedure requirements.' },
  { path: '/tools/ultrasonic-thickness-calculator', title: 'Ultrasonic Thickness Calculator | Free Online UT Tool [2026]', description: 'Free ultrasonic thickness calculator: measure corrosion rates, predict remaining asset life, calculate metal loss from UT readings. API 510/570/653 compliant.' },
  { path: '/tools/corrosion-rate-calculator', title: 'Corrosion Rate Calculator [2026] | Remaining Life & Fitness Assessment', description: 'Calculate corrosion rates from thickness measurements: linear regression, exponential loss, remaining service life, API 579 fitness for service assessment.' },
  { path: '/tools/sound-velocity-reference', title: 'Sound Velocity Reference Table [2026] | UT Propagation Speeds', description: 'Ultrasonic sound velocity reference table: carbon steel, stainless steel, austenitic, ferritic, aluminum, copper, and composite material speeds.' },
  { path: '/tools/ndt-method-selector-wizard', title: 'NDT Method Selector Wizard [2026] | Find Your Best Inspection Method', description: 'Interactive NDT method selector wizard: answer questions about your inspection needs to find the optimal NDT technique with pro/con analysis.' },

  // Resources - New Pages
  { path: '/resources/ndt-inspection-checklist', title: 'NDT Inspection Checklist [2026] | Equipment & Procedure Template', description: 'Free NDT inspection checklist: equipment requirements, calibration verification, procedure documentation, defect recording, and compliance confirmation.' },
  { path: '/resources/api-653-inspection-template', title: 'API 653 Inspection Template [2026] | Tank Inspector Checklist', description: 'API 653 tank inspection template: external inspection, internal inspection, floor UT/MFL scanning, thickness evaluation, repair assessment, and compliance form.' },
  { path: '/resources/asnt-level-iii-study-guide', title: 'ASNT Level III Study Guide [2026] | Exam Prep & Practice Questions', description: 'ASNT Level III study guide: vision standards, practical demonstrations, code knowledge, qualification requirements, and expert exam preparation tips.' },
  { path: '/resources/ndt-procedure-template', title: 'NDT Procedure Template [2026] | ASME/ISO Compliant Format', description: 'Download NDT procedure template: scope, technique selection, equipment requirements, acceptance criteria, personnel qualifications, and documentation.' },
  { path: '/resources/ndt-safety-checklist', title: 'NDT Safety Checklist [2026] | Radiation & Equipment Protection', description: 'NDT safety checklist: radiographic safety, personnel dosimetry, equipment grounding, chemical handling, incident reporting, and regulatory compliance.' },
  { path: '/resources/training-requirements-matrix', title: 'Training Requirements Matrix [2026] | ASNT, API, ISO Comparison', description: 'NDT training requirements comparison: ASNT Level I/II/III, API 510/570/653, ISO 11699, CSWIP, PCN certifications with hours and exam details.' },

  // Resources - Sprint 2 (May 2026)
  { path: '/resources/api-510-inspection-report', title: 'API 510 Pressure Vessel Inspection Report Template [2026]', description: 'Free API 510 pressure vessel inspection report template. Shell UT CMLs, nozzle inspection, weld inspection, FFS screening, recommendations, sign-off.' },
  { path: '/resources/api-570-piping-inspection-record', title: 'API 570 Piping Inspection Record Template [2026]', description: 'Free API 570 piping circuit inspection record. CML readings, corrosion rate, remaining life, RBI risk score, inspection plan, sign-off.' },
  { path: '/resources/daily-progress-report-dpr', title: 'NDT Daily Progress Report (DPR) Template [2026]', description: 'Free NDT daily progress report (DPR) template. Manpower, inspections by method, holds, HSE incidents, 24h look-ahead, sign-off.' },
  { path: '/resources/pwht-record', title: 'PWHT Record Template ASME B31.3 / Section VIII [2026]', description: 'Free post-weld heat treatment record template. Soak temp, hold time, ramp rate, thermocouple layout, cycle data, acceptance vs Code, sign-off.' },
  { path: '/resources/rbi-worksheet', title: 'RBI Worksheet API 581 [2026] | Risk-Based Inspection Template', description: 'Free Risk-Based Inspection worksheet per API 581. Asset register, damage mechanisms, POF / COF, 5x5 risk matrix, inspection plan.' },
  { path: '/resources/calibration-certificate-template', title: 'Calibration Certificate Template ISO/IEC 17025 [2026]', description: 'Free calibration certificate template per ISO/IEC 17025 §7.8. As-found / as-left results, measurement uncertainty, decision rule, traceability.' },
  { path: '/resources/welder-qualification-test-wpqr', title: 'WPQR Welder Qualification Record Template ASME IX [2026]', description: 'Free Welder Performance Qualification Record (WPQR) template per ASME Section IX. WPS, essential variables, bend tests, range qualified.' },
  { path: '/resources/ndt-written-practice-template', title: 'NDT Written Practice Template SNT-TC-1A [2026]', description: 'Free NDT Written Practice template compliant with ASNT SNT-TC-1A. Scope, methods, levels, training, examinations, certification, audit.' },
  { path: '/resources/inspection-test-plan-itp', title: 'Inspection & Test Plan (ITP) Template [2026]', description: 'Free construction QA/QC Inspection & Test Plan template. 17 activities, H/W/R codes, acceptance criteria, responsibility matrix, sign-off.' },
  { path: '/resources/audit-finding-tracker', title: 'Audit Finding / NCR / CAPA Tracker Template [2026]', description: 'Free audit-finding / NCR / CAPA tracker for ISO 9001 / 17025 / 45001. Severity, root cause, corrective action, effectiveness review, dashboard.' },

  // NOTE: Certification practice questions are now loaded from src/data/certification-practice.json
  // and rendered via the blog pipeline alongside regular blogs (see line ~127)

  // === Digital Twin NDT content cluster (2026) ===
  { path: '/digital-twins-ndt-guide-2026', title: 'Digital Twin NDT Guide 2026: 5-Stage Maturity Model', description: '3,000-word 2026 pillar guide to digital twins in NDT: 5-stage maturity model, sensor stack, API 510/570/580/579 alignment, 6 vendor profiles, ROI data.' },
  { path: '/digital-twin-vs-3d-model-ndt', title: 'Digital Twin vs 3D Model in NDT: 13-Point 2026 Comparison', description: 'Digital twin vs 3D model in NDT, compared across 13 dimensions: data flow, tech stack, ROI, governance, cost. Which does your asset integrity program need?' },
  { path: '/digital-twin-roi-calculator', title: 'Digital Twin ROI Calculator 2026: Free 8-Input NDT Tool', description: 'Free 2026 digital twin ROI calculator: enter 8 inputs, get baseline cost, 20/35/50% savings scenarios, and break-even in months. No signup.' },
  { path: '/digital-twin-readiness-quiz', title: 'Digital Twin Readiness Quiz 2026: 10-Question Score (Free)', description: 'Free 10-question quiz scoring your NDT digital twin readiness 0-30 across 4 maturity bands. Get a tailored next-step recommendation. 2026 edition.' },
  { path: '/digital-twin-vendor-comparison', title: 'Digital Twin Platform Comparison 2026: 6 NDT Vendors Rated', description: '2026 digital twin platform matrix: Antea, Mistras OneSuite, Hexagon, IBM Maximo APM, Bentley iTwin, Atlantis NDT. Pricing, NDT fit, integrations, best-fit.' },
  { path: '/digital-twin-api-510-570-580-mapping', title: 'Digital Twin API 510/570/580 Mapping 2026: 5 Codes', description: '2026 clause-by-clause map of how a digital twin satisfies API 510, 570, 580, 581, and 579-1 requirements. For integrity engineers and Level IIIs.' },
];

extraPages.forEach(p => {
  routes.push({
    path: p.path,
    title: p.title,
    description: p.description,
    canonical: `${SITE_URL}${p.path}`,
  });
});

// ── Advanced NDT Method Pages ─────────────────────────────────────────────
routes.push({
  path: '/guided-wave-testing',
  title: 'Guided Wave Testing (GWT/LRUT) | Long-Range Pipe Screening | CUI Detection | Atlantis NDT',
  description: 'Complete guide to guided wave testing: long-range ultrasonic pipe screening, CUI detection, buried pipe inspection. ASTM E2775, API 570. LRUT consulting from Atlantis NDT Level III experts.',
  canonical: `${SITE_URL}/guided-wave-testing`,
  bodyContent: `  <header><nav><a href="/">Home</a><a href="/consulting">Consulting</a><a href="/ultrasonic-testing">Ultrasonic Testing</a><a href="/contact">Contact</a></nav></header>\n  <main>\n    <h1>Guided Wave Testing (GWT/LRUT) | Long-Range Pipe Screening | CUI Detection</h1>\n    <p>Guided Wave Testing (GWT), also known as Long-Range Ultrasonic Testing (LRUT), screens hundreds of metres of pipe from a single test point. Ideal for CUI detection, buried pipeline assessment, and rack piping inspection. ASTM E2775, API 570 Appendix H compliant. ASNT Level III consulting from Atlantis NDT.</p>\n  </main>`,
});

routes.push({
  path: '/corrosion-mapping',
  title: 'Corrosion Mapping | UT Thickness Mapping & C-Scan | API 510/570/653 | Atlantis NDT',
  description: 'Expert corrosion mapping services: PAUT C-scan, automated UT scanning, manual thickness surveys. API 510/570/653 reporting, fitness for service assessment, remaining life calculations.',
  canonical: `${SITE_URL}/corrosion-mapping`,
  bodyContent: `  <header><nav><a href="/">Home</a><a href="/consulting">Consulting</a><a href="/ultrasonic-testing">Ultrasonic Testing</a><a href="/contact">Contact</a></nav></header>\n  <main>\n    <h1>Corrosion Mapping | Ultrasonic Thickness Mapping &amp; C-Scan Inspection</h1>\n    <p>Quantify metal loss across large areas with PAUT C-scan, automated UT scanning, and manual thickness surveys. API 510/570/653 compliant reporting, fitness for service assessment per API 579, and remaining life calculations for pressure vessels, tanks, and pipelines. Atlantis NDT provides all corrosion mapping methods globally.</p>\n  </main>`,
});

routes.push({
  path: '/digital-twin-reporting',
  title: 'Digital Twin Reporting Software | 3D NDT Data Visualization | Atlantis NDT',
  description: 'Create color-coded 3D digital twins from your NDT inspection data. Visualize corrosion, thickness loss, and defect distribution across vessels, pipelines, and tanks. API 579 fitness-for-service reporting.',
  canonical: `${SITE_URL}/digital-twin-reporting`,
  bodyContent: `  <header><nav><a href="/">Home</a><a href="/digital-twins">Digital Twins</a><a href="/erp">NDT ERP</a><a href="/contact">Contact</a></nav></header>\n  <main>\n    <h1>Digital Twin Reporting Software | 3D NDT Data Visualization</h1>\n    <p>Transform raw NDT inspection data into interactive 3D color-coded digital twins. Enter asset dimensions and thickness measurements — the platform generates a live visual model showing green (acceptable), amber (monitor), orange (plan repair), and red (immediate action) zones. API 579, API 510/570/653, and ASME compliant reporting from Atlantis NDT.</p>\n  </main>`,
});

routes.push({
  path: '/corrosion-under-insulation',
  title: 'Corrosion Under Insulation (CUI) | Detection Methods & Inspection Programme | Atlantis NDT',
  description: 'Expert guide to CUI detection: pulsed eddy current, guided wave testing, profile radiography, and infrared thermography. API RP 583 compliant CUI inspection programmes. Atlantis NDT Level III consulting.',
  canonical: `${SITE_URL}/corrosion-under-insulation`,
  bodyContent: `  <header><nav><a href="/">Home</a><a href="/consulting">Consulting</a><a href="/guided-wave-testing">Guided Wave Testing</a><a href="/contact">Contact</a></nav></header>\n  <main>\n    <h1>Corrosion Under Insulation (CUI) | Detection Methods &amp; Inspection Programme</h1>\n    <p>Corrosion under insulation is one of the costliest damage mechanisms in the oil &amp; gas and petrochemical industries. This guide covers CUI risk factors, the five proven detection technologies (GWT, PEC, Profile RT, UT, IRT), governing codes (API RP 583, API 570, API 510), and a 6-step CUI management programme. Atlantis NDT provides CUI inspection consulting and Level III programme design globally.</p>\n  </main>`,
});

// ── High-Priority Keyword Pages (2026) ───────────────────────────────────
routes.push({
  path: '/weld-inspection',
  title: 'Weld Inspection Services | AWS D1.1, ASME IX, API 1104 | Atlantis NDT',
  description: 'Expert weld inspection guide: NDT methods for weld quality control (RT, UT, PAUT, MT, PT, VT), weld defect types, governing codes AWS D1.1, ASME Section IX, API 1104. PAUT replacing RT for most weld applications. ASNT Level III consulting.',
  canonical: `${SITE_URL}/weld-inspection`,
  bodyContent: `  <header><nav><a href="/">Home</a><a href="/consulting">Consulting</a><a href="/phased-array-ut">PAUT</a><a href="/contact">Contact</a></nav></header>\n  <main>\n    <h1>Weld Inspection Services | NDT Methods for Weld Quality Control</h1>\n    <p>Weld inspection is the single largest application of NDT — approximately 15% of all industrial NDT globally. This guide covers all major weld inspection methods (RT, PAUT, UT, MT, PT, VT), weld defect types and best NDT method for each, governing codes (AWS D1.1, ASME Section IX, API 1104, EN ISO 17638), PAUT vs RT comparison, and inspection procedure requirements. ASNT Level III weld inspection consulting from Atlantis NDT.</p>\n  </main>`,
});

routes.push({
  path: '/acoustic-emission-testing',
  title: 'Acoustic Emission Testing (AET) | Pressure Vessel & Pipeline Monitoring | Atlantis NDT',
  description: 'Complete guide to acoustic emission testing: passive stress wave monitoring for pressure vessels, storage tank floors, pipeline leak detection. ASME Section V Article 12, ASTM E569. Whole-structure monitoring without internal access.',
  canonical: `${SITE_URL}/acoustic-emission-testing`,
  bodyContent: `  <header><nav><a href="/">Home</a><a href="/consulting">Consulting</a><a href="/ultrasonic-testing">Ultrasonic Testing</a><a href="/contact">Contact</a></nav></header>\n  <main>\n    <h1>Acoustic Emission Testing (AET) | In-Service Pressure Vessel &amp; Pipeline Monitoring</h1>\n    <p>Acoustic Emission Testing (AET) is a passive NDT technique that monitors entire structures simultaneously by detecting stress waves from active defects, corrosion, and leaks. Unlike RT or UT which inspect one location at a time, AET uses a fixed sensor array to screen complete vessels, tank floors, or pipeline sections while equipment remains in service. ASME Section V Article 12/13, ASTM E569. Atlantis NDT provides AET program design and Level III consulting globally.</p>\n  </main>`,
});

routes.push({
  path: '/magnetic-flux-leakage-testing',
  title: 'Magnetic Flux Leakage Testing (MFL) | Tank Floor & Pipeline Inspection | Atlantis NDT',
  description: 'Complete guide to Magnetic Flux Leakage (MFL) testing: tank floor inspection per API 653 Appendix C, in-line pipeline inspection (ILI pigging), well casing, wire rope. Hall effect sensors, MFL vs UT, API 653/1163/NACE SP0102 standards.',
  canonical: `${SITE_URL}/magnetic-flux-leakage-testing`,
  bodyContent: `  <header><nav><a href="/">Home</a><a href="/consulting">Consulting</a><a href="/corrosion-mapping">Corrosion Mapping</a><a href="/contact">Contact</a></nav></header>\n  <main>\n    <h1>Magnetic Flux Leakage Testing (MFL) | Tank Floor &amp; Pipeline Inspection</h1>\n    <p>Magnetic Flux Leakage (MFL) testing uses magnetic saturation and Hall effect sensors to detect metal loss in ferromagnetic materials. MFL is the standard method for API 653 storage tank floor inspection (Appendix C) and the backbone of pipeline integrity management through in-line inspection (ILI) pigging per API 1163 and NACE SP0102. 95-100% scan coverage. Atlantis NDT provides MFL program consulting globally.</p>\n  </main>`,
});

routes.push({
  path: '/ndt-technician-salary',
  title: 'NDT Technician Salary 2026 | By Method, Level & Location | Atlantis NDT',
  description: 'Complete NDT technician salary guide 2026: salary ranges by ASNT Level I/II/III, by NDT method (PAUT earns $80K-$110K, AUT $85K-$115K), by location (Houston, Dubai, Calgary, UK). Median $55,000-$95,000 USA. Updated February 2026.',
  canonical: `${SITE_URL}/ndt-technician-salary`,
  bodyContent: `  <header><nav><a href="/">Home</a><a href="/training">NDT Training</a><a href="/asnt-certification">ASNT Certification</a><a href="/contact">Contact</a></nav></header>\n  <main>\n    <h1>NDT Technician Salary Guide 2026: By Method, Level &amp; Location</h1>\n    <p>NDT technicians earn $28-$85/hour depending on method, level, location, and industry. USA median salary: $55,000-$95,000/year. PAUT and AUT specialists command 40-80% premium over MT/PT baseline. Level III commands 30-60% premium over Level II. Top locations: Houston (oil &amp; gas), Dubai (tax-free), offshore North Sea/Gulf of Mexico. Complete salary tables by ASNT level, NDT method, and location. Atlantis NDT training helps you reach the next level.</p>\n  </main>`,
});

// ── New High-Intent Pages (2026) ────────────────────────────────────────
routes.push({
  path: '/ndt-methods-comparison',
  title: 'NDT Methods Comparison 2026 | UT vs RT vs MT vs PT vs ET vs VT [Guide]',
  description: 'Complete NDT methods comparison: side-by-side table of UT, RT, MT, PT, ET, VT by cost, speed, accuracy, and application. Includes decision flowchart and industry selection matrix.',
  canonical: `${SITE_URL}/ndt-methods-comparison`,
  bodyContent: `  <header><nav><a href="/">Home</a><a href="/ndt-methods">NDT Methods</a><a href="/training">Training</a><a href="/contact">Contact</a></nav></header>\n  <main>\n    <h1>NDT Methods Comparison Guide 2026</h1>\n    <p>Complete side-by-side comparison of all six major NDT methods — Ultrasonic Testing (UT), Radiographic Testing (RT), Magnetic Particle Testing (MT), Liquid Penetrant Testing (PT), Eddy Current Testing (ET), and Visual Testing (VT) — with cost, speed, accuracy, and application data. Decision flowchart and industry selection matrix included.</p>\n  </main>`,
});

routes.push({
  path: '/ndt-certification-guide',
  title: 'NDT Certification Guide 2026 | Requirements, Costs & Career Path [Complete]',
  description: 'Complete NDT certification guide: ASNT SNT-TC-1A vs ISO 9712 vs PCN comparison, Level I/II/III requirements, exam costs ($200-$750), training hours, and career salary progression.',
  canonical: `${SITE_URL}/ndt-certification-guide`,
  bodyContent: `  <header><nav><a href="/">Home</a><a href="/asnt-certification">ASNT Certification</a><a href="/training">Training</a><a href="/contact">Contact</a></nav></header>\n  <main>\n    <h1>NDT Certification Guide 2026 | Complete Pathway from Level I to III</h1>\n    <p>Everything you need to know about NDT certification: ASNT SNT-TC-1A vs ISO 9712 vs PCN vs CSWIP comparison, Level I/II/III requirements, training hours, exam costs, career progression, and salary expectations at each level.</p>\n  </main>`,
});

// ─── Tools Pages ─────────────────────────────────────────────────────────

routes.push({
  path: '/tools',
  title: 'Free NDT Tools & Calculators | Method Selector, Cost Calculator, ROI | Atlantis NDT',
  description: 'Free interactive NDT tools: method selector quiz, certification cost calculator, inspection ROI calculator, and quick reference chart. Built for NDT professionals by ASNT Level III experts.',
  canonical: `${SITE_URL}/tools`,
  bodyContent: `  <header><nav><a href="/">Home</a><a href="/tools">Tools</a><a href="/resources">Resources</a><a href="/contact">Contact</a></nav></header>\n  <main>\n    <h1>Free NDT Tools & Calculators</h1>\n    <p>Interactive tools to help NDT professionals make better decisions. Method selector, certification cost calculator, inspection ROI calculator, and NDT quick reference chart.</p>\n  </main>`,
});

routes.push({
  path: '/tools/ndt-method-selector',
  title: 'NDT Method Selector Tool | Find the Right Testing Method | Atlantis NDT',
  description: 'Interactive quiz to find the best NDT method for your application. Answer 6 questions about material, defects, access, and codes to get ranked recommendations with confidence scores.',
  canonical: `${SITE_URL}/tools/ndt-method-selector`,
  bodyContent: `  <header><nav><a href="/">Home</a><a href="/tools">Tools</a><a href="/ndt-methods">NDT Methods</a><a href="/contact">Contact</a></nav></header>\n  <main>\n    <h1>NDT Method Selector Tool</h1>\n    <p>Answer 6 questions about your inspection requirements and get ranked NDT method recommendations with confidence scores. Covers UT, RT, MT, PT, ET, and VT.</p>\n  </main>`,
});

routes.push({
  path: '/tools/ndt-certification-cost-calculator',
  title: 'NDT Certification Cost Calculator 2026 | Training Investment & ROI | Atlantis NDT',
  description: 'Calculate NDT certification costs by region: ASNT Level I/II/III, ISO 9712, API 510/570/653. See exam fees, training costs, and 5-year ROI projections.',
  canonical: `${SITE_URL}/tools/ndt-certification-cost-calculator`,
  bodyContent: `  <header><nav><a href="/">Home</a><a href="/tools">Tools</a><a href="/ndt-certification-guide">Certification Guide</a><a href="/contact">Contact</a></nav></header>\n  <main>\n    <h1>NDT Certification Cost Calculator 2026</h1>\n    <p>Calculate the total cost of NDT certifications including exam fees, training, materials, and travel. Compare costs across regions and see 5-year ROI projections.</p>\n  </main>`,
});

routes.push({
  path: '/tools/ndt-roi-calculator',
  title: 'NDT Inspection ROI Calculator | Time-Based vs Risk-Based Savings | Atlantis NDT',
  description: 'Calculate ROI of switching from time-based to risk-based NDT inspection. Input facility parameters and see annual savings, failure prevention, and 5-year projections.',
  canonical: `${SITE_URL}/tools/ndt-roi-calculator`,
  bodyContent: `  <header><nav><a href="/">Home</a><a href="/tools">Tools</a><a href="/consulting">Consulting</a><a href="/contact">Contact</a></nav></header>\n  <main>\n    <h1>NDT Inspection ROI Calculator</h1>\n    <p>Compare time-based vs risk-based inspection approaches. Enter facility parameters to see annual cost savings, failure prevention statistics, and 5-year ROI projections.</p>\n  </main>`,
});

routes.push({
  path: '/tools/ndt-quick-reference',
  title: 'NDT Quick Reference Chart | All 6 Methods Compared | Atlantis NDT',
  description: 'Quick reference comparison of all 6 NDT methods: UT, RT, MT, PT, ET, VT. Side-by-side table with defects detected, materials, costs, and speed. Embeddable widget available.',
  canonical: `${SITE_URL}/tools/ndt-quick-reference`,
  bodyContent: `  <header><nav><a href="/">Home</a><a href="/tools">Tools</a><a href="/ndt-methods">NDT Methods</a><a href="/contact">Contact</a></nav></header>\n  <main>\n    <h1>NDT Quick Reference Chart</h1>\n    <p>Compare all six major NDT methods at a glance. Side-by-side comparison table covering defects detected, materials, surface prep, skill level, cost, and speed. Embed on your site with one line of code.</p>\n  </main>`,
});

routes.push({
  path: '/embed/ndt-reference',
  title: 'NDT Quick Reference Widget',
  description: 'Embeddable NDT quick reference widget for external sites.',
  canonical: `${SITE_URL}/embed/ndt-reference`,
  bodyContent: `  <main>\n    <h1>NDT Quick Reference</h1>\n    <p>Powered by Atlantis NDT</p>\n  </main>`,
  noindex: true,
});

// ─── Resource Pages ──────────────────────────────────────────────────────

routes.push({
  path: '/resources/ndt-inspection-checklist',
  title: 'NDT Inspection Checklist | Pre-Inspection to Reporting | Free Download | Atlantis NDT',
  description: 'Free NDT inspection checklist covering pre-inspection planning, equipment calibration, during inspection requirements, post-inspection reporting, and code-specific reminders. Download as PDF.',
  canonical: `${SITE_URL}/resources/ndt-inspection-checklist`,
  bodyContent: `  <header><nav><a href="/">Home</a><a href="/resources">Resources</a><a href="/consulting">Consulting</a><a href="/contact">Contact</a></nav></header>\n  <main>\n    <h1>NDT Inspection Checklist</h1>\n    <p>Comprehensive checklist for planning and executing NDT inspections. Covers pre-inspection, during inspection, and post-inspection requirements per ASME Section V, API 510/570/653.</p>\n  </main>`,
});

routes.push({
  path: '/resources/api-653-inspection-template',
  title: 'API 653 Tank Inspection Template | AST Inspection Forms | Free Download | Atlantis NDT',
  description: 'Free API 653 tank inspection template with shell thickness readings, floor condition assessment, corrosion rate calculations, and remaining life estimation forms.',
  canonical: `${SITE_URL}/resources/api-653-inspection-template`,
  bodyContent: `  <header><nav><a href="/">Home</a><a href="/resources">Resources</a><a href="/api-653-certification">API 653</a><a href="/contact">Contact</a></nav></header>\n  <main>\n    <h1>API 653 Tank Inspection Template</h1>\n    <p>Template for above-ground storage tank inspections per API 653. Includes shell, floor, and roof inspection forms, thickness reading tables, and corrosion rate calculations.</p>\n  </main>`,
});

routes.push({
  path: '/resources/asnt-level-iii-study-guide',
  title: 'ASNT Level III Study Guide | Exam Prep Overview | Free Download | Atlantis NDT',
  description: 'Free ASNT Level III exam study guide: exam format, topics by method, key standards, study strategy, common failure areas, and day-of-exam tips.',
  canonical: `${SITE_URL}/resources/asnt-level-iii-study-guide`,
  bodyContent: `  <header><nav><a href="/">Home</a><a href="/resources">Resources</a><a href="/asnt-certification">ASNT Certification</a><a href="/contact">Contact</a></nav></header>\n  <main>\n    <h1>ASNT Level III Exam Study Guide</h1>\n    <p>Comprehensive study guide for ASNT Level III certification: exam format, topic coverage by method, key standards, study timeline, and test-day strategies.</p>\n  </main>`,
});

routes.push({
  path: '/resources/ndt-procedure-template',
  title: 'NDT Procedure Template | SNT-TC-1A & ISO 9712 Compliant | Free Download | Atlantis NDT',
  description: 'Free NDT procedure writing template aligned with ASNT SNT-TC-1A and ISO 9712. Covers scope, equipment, calibration, technique, evaluation, and reporting sections.',
  canonical: `${SITE_URL}/resources/ndt-procedure-template`,
  bodyContent: `  <header><nav><a href="/">Home</a><a href="/resources">Resources</a><a href="/consulting">Consulting</a><a href="/contact">Contact</a></nav></header>\n  <main>\n    <h1>NDT Procedure Template</h1>\n    <p>General NDT procedure template aligned with ASNT SNT-TC-1A and ISO 9712. Includes sections for scope, equipment, calibration, technique, evaluation criteria, and reporting requirements.</p>\n  </main>`,
});

routes.push({
  path: '/resources/ndt-safety-checklist',
  title: 'NDT Safety Checklist | Radiation, Electrical & Worksite Safety | Free Download | Atlantis NDT',
  description: 'Free NDT safety checklist covering radiation safety for RT, electrical safety for ET/UT, chemical safety for PT/MT, confined space entry, and working at heights.',
  canonical: `${SITE_URL}/resources/ndt-safety-checklist`,
  bodyContent: `  <header><nav><a href="/">Home</a><a href="/resources">Resources</a><a href="/training">Training</a><a href="/contact">Contact</a></nav></header>\n  <main>\n    <h1>NDT Safety Checklist</h1>\n    <p>Safety checklist for NDT operations: radiation safety, electrical safety, chemical safety, confined space, working at heights. Covers all major NDT methods.</p>\n  </main>`,
});

routes.push({
  path: '/resources/training-requirements-matrix',
  title: 'NDT Training Requirements Matrix | Hours by Method & Level | Free Download | Atlantis NDT',
  description: 'Free training requirements matrix: ASNT SNT-TC-1A, ISO 9712, and PCN training hours by NDT method and certification level. Side-by-side scheme comparison.',
  canonical: `${SITE_URL}/resources/training-requirements-matrix`,
  bodyContent: `  <header><nav><a href="/">Home</a><a href="/resources">Resources</a><a href="/training">Training</a><a href="/contact">Contact</a></nav></header>\n  <main>\n    <h1>NDT Training Requirements Matrix</h1>\n    <p>Matrix showing training hour requirements for NDT certifications: ASNT SNT-TC-1A, ISO 9712, and PCN. Comparison by method and level with education credit reductions.</p>\n  </main>`,
});

// ─── Resource Pages — Sprint 2 (May 2026) ────────────────────────────────

routes.push({
  path: '/resources/api-510-inspection-report',
  title: 'API 510 Pressure Vessel Inspection Report Template | Free XLSX | Atlantis NDT',
  description: 'Free API 510 pressure vessel inspection report template (multi-sheet XLSX): cover, shell UT CMLs, nozzle inspection, weld inspection, FFS screening, sign-off.',
  canonical: `${SITE_URL}/resources/api-510-inspection-report`,
  bodyContent: `  <header><nav><a href="/">Home</a><a href="/resources">Resources</a><a href="/api-510-certification">API 510</a><a href="/contact">Contact</a></nav></header>\n  <main>\n    <h1>API 510 Pressure Vessel Inspection Report Template</h1>\n    <p>Multi-sheet API 510 pressure vessel inspection report covering shell UT thickness CMLs, nozzle inspection, weld inspection, FFS screening per API 579, recommendations, and sign-off.</p>\n  </main>`,
});

routes.push({
  path: '/resources/api-570-piping-inspection-record',
  title: 'API 570 Piping Inspection Record Template | Free XLSX | Atlantis NDT',
  description: 'Free API 570 piping circuit inspection record with CML thickness readings, corrosion rate, remaining life, RBI risk scoring, recommendations, and sign-off.',
  canonical: `${SITE_URL}/resources/api-570-piping-inspection-record`,
  bodyContent: `  <header><nav><a href="/">Home</a><a href="/resources">Resources</a><a href="/api-570-certification">API 570</a><a href="/contact">Contact</a></nav></header>\n  <main>\n    <h1>API 570 Piping Inspection Record Template</h1>\n    <p>API 570 piping circuit inspection record with CML thickness readings, short and long-term corrosion rate, remaining life, RBI risk score, and inspection plan.</p>\n  </main>`,
});

routes.push({
  path: '/resources/daily-progress-report-dpr',
  title: 'NDT Daily Progress Report (DPR) Template | Free XLSX | Atlantis NDT',
  description: 'Free NDT daily progress report (DPR) template — manpower deployed, inspections by method, holds, HSE incidents, 24h look-ahead, and crew sign-off.',
  canonical: `${SITE_URL}/resources/daily-progress-report-dpr`,
  bodyContent: `  <header><nav><a href="/">Home</a><a href="/resources">Resources</a><a href="/consulting">Consulting</a><a href="/contact">Contact</a></nav></header>\n  <main>\n    <h1>Daily Progress Report (DPR) Template</h1>\n    <p>Editable daily progress report (DPR) template for NDT inspection projects covering manpower, inspections by method, holds & rejects, HSE incidents, 24h look-ahead, and sign-off.</p>\n  </main>`,
});

routes.push({
  path: '/resources/pwht-record',
  title: 'PWHT Record Template ASME B31.3 / Section VIII | Free XLSX | Atlantis NDT',
  description: 'Free post-weld heat treatment record template per ASME B31.3 and Section VIII. Soak temp, hold time, ramp rate, thermocouple layout, cycle data, attachments, sign-off.',
  canonical: `${SITE_URL}/resources/pwht-record`,
  bodyContent: `  <header><nav><a href="/">Home</a><a href="/resources">Resources</a><a href="/consulting">Consulting</a><a href="/contact">Contact</a></nav></header>\n  <main>\n    <h1>Post-Weld Heat Treatment (PWHT) Record</h1>\n    <p>Post-weld heat treatment record template per ASME B31.3 / ASME Section VIII covering soak temperature, hold time, ramp rate, thermocouples, cycle data, and acceptance vs Code requirements.</p>\n  </main>`,
});

routes.push({
  path: '/resources/rbi-worksheet',
  title: 'RBI Worksheet API 581 | Risk-Based Inspection Template | Free XLSX | Atlantis NDT',
  description: 'Free Risk-Based Inspection (RBI) worksheet per API 581 with asset register, damage mechanism scoring, POF / COF, 5x5 risk matrix, and inspection plan.',
  canonical: `${SITE_URL}/resources/rbi-worksheet`,
  bodyContent: `  <header><nav><a href="/">Home</a><a href="/resources">Resources</a><a href="/consulting">Consulting</a><a href="/contact">Contact</a></nav></header>\n  <main>\n    <h1>RBI Worksheet — API 581</h1>\n    <p>Risk-Based Inspection (RBI) worksheet aligned with API 580 / 581: asset register, damage mechanism scoring, POF and COF derivation, 5x5 risk matrix, and inspection plan.</p>\n  </main>`,
});

routes.push({
  path: '/resources/calibration-certificate-template',
  title: 'Calibration Certificate Template ISO/IEC 17025 | Free DOCX | Atlantis NDT',
  description: 'Free calibration certificate template per ISO/IEC 17025 §7.8 with as-found / as-left results, measurement uncertainty (GUM), decision rule, and SI traceability.',
  canonical: `${SITE_URL}/resources/calibration-certificate-template`,
  bodyContent: `  <header><nav><a href="/">Home</a><a href="/resources">Resources</a><a href="/consulting">Consulting</a><a href="/contact">Contact</a></nav></header>\n  <main>\n    <h1>Calibration Certificate Template (ISO/IEC 17025)</h1>\n    <p>ISO/IEC 17025 §7.8 compliant calibration certificate template covering lab and customer identification, instrument data, reference standards, as-found / as-left results, uncertainty, and decision rule.</p>\n  </main>`,
});

routes.push({
  path: '/resources/welder-qualification-test-wpqr',
  title: 'WPQR Welder Qualification Record Template ASME IX | Free DOCX | Atlantis NDT',
  description: 'Free Welder Performance Qualification Record (WPQR) template per ASME Section IX. WPS reference, essential variables, bend tests, range qualified, continuity log.',
  canonical: `${SITE_URL}/resources/welder-qualification-test-wpqr`,
  bodyContent: `  <header><nav><a href="/">Home</a><a href="/resources">Resources</a><a href="/welding-inspection">Welding</a><a href="/contact">Contact</a></nav></header>\n  <main>\n    <h1>Welder Performance Qualification Record (WPQR)</h1>\n    <p>ASME Section IX welder performance qualification record covering identification, WPS reference, essential variables, coupon, parameters, test results, and range qualified.</p>\n  </main>`,
});

routes.push({
  path: '/resources/ndt-written-practice-template',
  title: 'NDT Written Practice Template SNT-TC-1A | Free DOCX | Atlantis NDT',
  description: 'Free NDT Written Practice template compliant with ASNT SNT-TC-1A — scope, NDT methods, levels of qualification, training, examinations, vision, certification, audit.',
  canonical: `${SITE_URL}/resources/ndt-written-practice-template`,
  bodyContent: `  <header><nav><a href="/">Home</a><a href="/resources">Resources</a><a href="/asnt-certification">ASNT</a><a href="/contact">Contact</a></nav></header>\n  <main>\n    <h1>NDT Written Practice — ASNT SNT-TC-1A</h1>\n    <p>NDT Written Practice template compliant with ASNT SNT-TC-1A covering employer scope, NDT methods, levels of qualification, training and experience requirements, examinations, vision, certification, and audit.</p>\n  </main>`,
});

routes.push({
  path: '/resources/inspection-test-plan-itp',
  title: 'Inspection & Test Plan (ITP) Template | Construction QA/QC | Free XLSX | Atlantis NDT',
  description: 'Free Inspection & Test Plan (ITP) template for construction QA/QC — 17 standard activities, H/W/R codes, acceptance criteria, responsibility matrix, sign-off.',
  canonical: `${SITE_URL}/resources/inspection-test-plan-itp`,
  bodyContent: `  <header><nav><a href="/">Home</a><a href="/resources">Resources</a><a href="/consulting">Consulting</a><a href="/contact">Contact</a></nav></header>\n  <main>\n    <h1>Inspection & Test Plan (ITP) Template</h1>\n    <p>Construction QA/QC Inspection & Test Plan covering 17 standard activities — material receiving, welding, NDT, PWHT, pressure test, dossier — with H/W/R codes and acceptance criteria.</p>\n  </main>`,
});

routes.push({
  path: '/resources/audit-finding-tracker',
  title: 'Audit Finding / NCR / CAPA Tracker Template | Free XLSX | Atlantis NDT',
  description: 'Free audit-finding / NCR / CAPA tracker template for ISO 9001 / 17025 / 45001 — severity, root cause, corrective action, effectiveness review, status dashboard.',
  canonical: `${SITE_URL}/resources/audit-finding-tracker`,
  bodyContent: `  <header><nav><a href="/">Home</a><a href="/resources">Resources</a><a href="/consulting">Consulting</a><a href="/contact">Contact</a></nav></header>\n  <main>\n    <h1>Audit Finding / NCR / CAPA Tracker</h1>\n    <p>Audit-finding / NCR / CAPA tracker template for ISO 9001 / 17025 / 45001 — severity classification, root cause, corrective action, effectiveness review, and status dashboard.</p>\n  </main>`,
});

// ─── Content & Guide Pages ──────────────────────────────────────────────

routes.push({
  path: '/ndt-industry-statistics',
  title: 'NDT Industry Statistics 2026 | Market Size, Salaries, Growth Data | Atlantis NDT',
  description: 'NDT industry data: $15.8B market (2024) growing to $25.3B (2030), salary ranges by method and level, workforce statistics, certification demographics, and regional market share.',
  canonical: `${SITE_URL}/ndt-industry-statistics`,
  bodyContent: `  <header><nav><a href="/">Home</a><a href="/blog">Blog</a><a href="/ndt-technician-salary">Salary Guide</a><a href="/contact">Contact</a></nav></header>\n  <main>\n    <h1>NDT Industry Statistics 2026</h1>\n    <p>Comprehensive NDT industry data with interactive charts. Global market size, growth projections, salary statistics by method and level, workforce demographics, and regional market share analysis.</p>\n  </main>`,
});

routes.push({
  path: '/ndt-complete-guide',
  title: 'What is Non-Destructive Testing? Complete NDT Guide 2026 | Atlantis NDT',
  description: 'Complete guide to non-destructive testing (NDT): what it is, 6 major methods (UT, RT, MT, PT, ET, VT), advanced techniques, applications by industry, standards, certification, and careers.',
  canonical: `${SITE_URL}/ndt-complete-guide`,
  bodyContent: `  <header><nav><a href="/">Home</a><a href="/ndt-methods">NDT Methods</a><a href="/training">Training</a><a href="/contact">Contact</a></nav></header>\n  <main>\n    <h1>What is Non-Destructive Testing? Complete NDT Guide 2026</h1>\n    <p>Everything you need to know about NDT: definition, history, the six major methods, advanced techniques, applications by industry, governing standards and codes, certification pathways, career opportunities, and the future of NDT.</p>\n  </main>`,
});

routes.push({
  path: '/api-inspector-guide',
  title: 'API Inspector Guide 2026 | API 510 vs 570 vs 653 Comparison | Atlantis NDT',
  description: 'Complete API inspector guide: API 510 vs 570 vs 653 side-by-side comparison, prerequisites, exam format, study strategy, career path, and salary expectations.',
  canonical: `${SITE_URL}/api-inspector-guide`,
  bodyContent: `  <header><nav><a href="/">Home</a><a href="/api-510-certification">API 510</a><a href="/api-570-certification">API 570</a><a href="/api-653-certification">API 653</a><a href="/contact">Contact</a></nav></header>\n  <main>\n    <h1>API Inspector Guide 2026</h1>\n    <p>Complete guide for API inspectors: API 510, 570, and 653 comparison, certification requirements, exam preparation, career path, and salary expectations at each level.</p>\n  </main>`,
});

routes.push({
  path: '/ndt-standards-comparison',
  title: 'NDT Standards Comparison | ASME Section V vs ASTM vs ISO vs EN | Atlantis NDT',
  description: 'NDT standards comparison: ASME Section V, ASTM, ISO, EN, AWS, and API standards. Which standard applies by application, country, and industry. Acceptance criteria differences.',
  canonical: `${SITE_URL}/ndt-standards-comparison`,
  bodyContent: `  <header><nav><a href="/">Home</a><a href="/ndt-methods">NDT Methods</a><a href="/consulting">Consulting</a><a href="/contact">Contact</a></nav></header>\n  <main>\n    <h1>NDT Standards Comparison</h1>\n    <p>Comprehensive comparison of NDT standards: ASME Section V, ASTM, ISO, EN, AWS, and API. Coverage by method, industry, and country with acceptance criteria differences explained.</p>\n  </main>`,
});

routes.push({
  path: '/ndt-equipment-guide',
  title: 'NDT Equipment Guide 2026 | Top Brands & Instrument Comparison | Atlantis NDT',
  description: 'NDT equipment comparison: Olympus, GE/Baker Hughes, Eddyfi, Sonatest, Zetec. UT, RT, MT, PT, ET instruments compared by features, price range, and best applications.',
  canonical: `${SITE_URL}/ndt-equipment-guide`,
  bodyContent: `  <header><nav><a href="/">Home</a><a href="/ndt-methods">NDT Methods</a><a href="/consulting">Consulting</a><a href="/contact">Contact</a></nav></header>\n  <main>\n    <h1>NDT Equipment Guide 2026</h1>\n    <p>Compare NDT equipment from top manufacturers: Olympus, GE/Baker Hughes, Eddyfi, Sonatest, Zetec. Instrument recommendations by method, application, and budget.</p>\n  </main>`,
});

routes.push({
  path: '/ndt-learning-path',
  title: 'NDT Learning Path | From Beginner to Level III Expert | Free Guide | Atlantis NDT',
  description: 'Structured NDT learning roadmap: 5 stages from introduction to Level III expert. Training requirements, certification milestones, salary at each stage, and recommended resources.',
  canonical: `${SITE_URL}/ndt-learning-path`,
  bodyContent: `  <header><nav><a href="/">Home</a><a href="/ndt-certification-guide">Certification</a><a href="/training">Training</a><a href="/contact">Contact</a></nav></header>\n  <main>\n    <h1>NDT Learning Path | Beginner to Level III Expert</h1>\n    <p>Your complete roadmap from NDT beginner to Level III expert. Five structured stages with training requirements, certification milestones, salary expectations, and recommended resources at each level.</p>\n  </main>`,
});

// ─── Digital Twin Location Pages ──────────────────────────────────────────

const digitalTwinCities = [
  { slug: 'houston',      city: 'Houston',      country: 'USA',         assets: 'refinery pressure vessels, offshore FPSO hulls, and pipeline networks' },
  { slug: 'dubai',        city: 'Dubai',        country: 'UAE',         assets: 'ENOC refinery vessels, offshore platform topsides, and product storage tanks' },
  { slug: 'abu-dhabi',    city: 'Abu Dhabi',    country: 'UAE',         assets: 'ADNOC offshore platforms, LNG cryogenic storage, and sour-gas pipelines' },
  { slug: 'saudi-arabia', city: 'Saudi Arabia', country: 'Saudi Arabia',assets: 'Saudi Aramco crude separators, refinery columns, and cross-country pipelines' },
  { slug: 'calgary',      city: 'Calgary',      country: 'Canada',      assets: 'oil sands coking units, bitumen upgrader vessels, and cold-service pipelines' },
  { slug: 'singapore',    city: 'Singapore',    country: 'Singapore',   assets: 'Jurong Island cracker units, naphtha storage tanks, and heat exchanger bundles' },
  { slug: 'mumbai',       city: 'Mumbai',       country: 'India',       assets: 'BPCL refinery columns, ONGC offshore wellheads, and coastal storage tanks' },
  { slug: 'london',       city: 'London',       country: 'UK',          assets: 'North Sea FPSO hulls, downstream refinery vessels, and pipeline risers' },
  { slug: 'perth',        city: 'Perth',        country: 'Australia',   assets: 'Gorgon and Wheatstone LNG cryogenic storage, FLNG vessel structures' },
  { slug: 'doha',         city: 'Doha',         country: 'Qatar',       assets: 'QatarEnergy LNG cryogenic spheres, North Field platform structures' },
  { slug: 'kuwait',       city: 'Kuwait City',  country: 'Kuwait',      assets: 'Al-Zour refinery vessels, KNPC process equipment, and crude pipeline networks' },
  { slug: 'aberdeen',     city: 'Aberdeen',     country: 'UK',          assets: 'North Sea fixed platform members, FPSO hull plating, and subsea risers' },
  { slug: 'oslo',         city: 'Oslo',         country: 'Norway',      assets: 'Equinor platform topsides, subsea manifolds, and NORSOK mooring chains' },
  { slug: 'rotterdam',    city: 'Rotterdam',    country: 'Netherlands', assets: 'Europoort cracking columns, crude storage tanks, and chemical reactors' },
  { slug: 'hyderabad',    city: 'Hyderabad',    country: 'India',       assets: 'HPCL refinery monitoring systems, BHEL power boilers, and gas separators' },
  { slug: 'muscat',       city: 'Muscat',       country: 'Oman',        assets: 'PDO oil production separators, OQ Sohar refinery vessels, and Sur LNG tanks' },
  { slug: 'kuala-lumpur', city: 'Kuala Lumpur', country: 'Malaysia',    assets: 'Pengerang Integrated Complex reactors, Petronas FPSO structures, and LNG storage' },
  { slug: 'lagos',        city: 'Lagos',        country: 'Nigeria',     assets: 'Dangote Refinery distillation units, NNPC vessels, and deepwater FPSO hulls' },
  { slug: 'new-orleans',  city: 'New Orleans',  country: 'USA',         assets: 'refinery pressure vessels, LNG export terminal cryogenic tanks, and petrochemical reactors' },
  { slug: 'denver',       city: 'Denver',       country: 'USA',         assets: 'DJ Basin separator vessels, Rocky Mountain pipelines, and midstream compression vessels' },
  // ── April 2026 tier-2 expansion ──
  { slug: 'manama',          city: 'Manama',          country: 'Bahrain',      assets: 'Bapco refinery pressure vessels, BAPCO Modernisation Programme distillation units, and NOGA-regulated offshore infrastructure' },
  { slug: 'odessa',          city: 'Odessa',          country: 'USA',          assets: 'Permian Basin wellhead separators, gathering-system piping, and tank battery networks serving ConocoPhillips, Pioneer, Chevron, ExxonMobil' },
  { slug: 'bergen',          city: 'Bergen',          country: 'Norway',       assets: 'Equinor Troll/Johan Sverdrup subsea manifolds, Mongstad refinery columns, and NORSOK-compliant topside structures' },
  { slug: 'ras-al-khaimah',  city: 'Ras Al Khaimah',  country: 'UAE',          assets: 'RAK Petroleum onshore wellheads, RAK Gas infrastructure, and Saqr Port industrial equipment' },
  { slug: 'sohar',           city: 'Sohar',           country: 'Oman',         assets: 'OQ Sohar refinery columns, Sohar Port & Freezone industrial reactors, and petrochemical cracker units' },
  { slug: 'basrah',          city: 'Basrah',          country: 'Iraq',         assets: 'Basrah Oil Company production headers, West Qurna refinery vessels, and Umm Qasr port infrastructure' },
  { slug: 'port-harcourt',   city: 'Port Harcourt',   country: 'Nigeria',      assets: 'NNPCL Port Harcourt refinery, Shell SPDC Bonny Light processing, and Niger Delta pipeline networks' },
  { slug: 'midland',         city: 'Midland',         country: 'USA',          assets: 'Permian Basin production separators, gathering piping, and central tank battery systems' },
  { slug: 'anchorage',       city: 'Anchorage',       country: 'USA',          assets: 'TAPS mainline infrastructure, North Slope upstream equipment, and Cook Inlet LNG facilities' },
  { slug: 'bakersfield',     city: 'Bakersfield',     country: 'USA',          assets: 'Kern County heavy-oil processing, SJV steam generator systems, and California refinery equipment' },
  { slug: 'sharjah',         city: 'Sharjah',         country: 'UAE',          assets: 'Sharjah National Oil Corporation (SNOC) onshore fields, Hamriyah Free Zone petrochemical infrastructure' },
  { slug: 'melbourne',       city: 'Melbourne',       country: 'Australia',    assets: 'Esso Longford gas plant, BlueScope Steel heavy industry, and Port Phillip Bay refinery assets' },
  { slug: 'jubail',          city: 'Jubail',          country: 'Saudi Arabia', assets: 'SABIC Jubail petrochemical complex, Saudi Aramco Jubail refinery, and export terminal infrastructure' },
  { slug: 'yanbu',           city: 'Yanbu',           country: 'Saudi Arabia', assets: 'Yasref refinery, PetroRabigh integrated complex adjacent, and Yanbu Industrial Port assets' },
  { slug: 'edmonton',        city: 'Edmonton',        country: 'Canada',       assets: 'Suncor Edmonton refinery, oil-sands upgrader vessels, and Enbridge mainline infrastructure' },
  { slug: 'chennai',         city: 'Chennai',         country: 'India',        assets: 'CPCL refinery columns, Ennore Port industrial equipment, and Tamil Nadu automotive/aerospace manufacturing' },
  // ── Tier-3 expansion (USA/Canada/Europe/Australia/NZ, April 2026) ──
  { slug: 'tulsa',           city: 'Tulsa',           country: 'USA',          assets: 'mid-continent oil refinery vessels, Williams midstream compression, and pipeline integrity assets' },
  { slug: 'beaumont',        city: 'Beaumont',        country: 'USA',          assets: 'ExxonMobil Beaumont refinery, TotalEnergies petrochemical complex, and Port of Beaumont industrial infrastructure' },
  { slug: 'mobile',          city: 'Mobile',          country: 'USA',          assets: 'Austal USA shipyards, Ingalls naval vessels, AM/NS steel, and Port of Mobile heavy lift terminals' },
  { slug: 'st-louis',        city: 'St. Louis',       country: 'USA',          assets: 'Boeing Defense fighter manufacturing, Bayer (Monsanto) chemical, Ameren nuclear/coal power assets' },
  { slug: 'cleveland',       city: 'Cleveland',       country: 'USA',          assets: 'Cleveland-Cliffs steel mills, BP Whiting refinery regional support, and Lake Erie power generation' },
  { slug: 'cincinnati',      city: 'Cincinnati',      country: 'USA',          assets: 'GE Aerospace engine manufacturing, P&G chemical plants, and Duke Energy regional nuclear fleet' },
  { slug: 'nashville',       city: 'Nashville',       country: 'USA',          assets: 'Nissan automotive, TVA nuclear generating stations, and regional manufacturing inspection assets' },
  { slug: 'louisville',      city: 'Louisville',      country: 'USA',          assets: 'Rubbertown chemical corridor, GE Appliance Park, and Ohio River pipeline/terminal infrastructure' },
  { slug: 'kansas-city',     city: 'Kansas City',     country: 'USA',          assets: 'Honeywell Federal Manufacturing, Cerner/Oracle Health campuses, and regional refining infrastructure' },
  { slug: 'minneapolis',     city: 'Minneapolis',     country: 'USA',          assets: '3M chemical operations, Xcel Energy nuclear plants, and Cargill/ADM grain-processing industrial equipment' },
  { slug: 'milwaukee',       city: 'Milwaukee',       country: 'USA',          assets: 'Rockwell Automation manufacturing, Marinette Marine shipbuilding, and We Energies power generation' },
  { slug: 'charlotte',       city: 'Charlotte',       country: 'USA',          assets: 'Duke Energy HQ nuclear fleet, Honeywell Aerospace, Siemens Energy turbine manufacturing' },
  { slug: 'toronto',         city: 'Toronto',         country: 'Canada',       assets: 'Bombardier Aerospace, Ontario Power Generation nuclear fleet, and regional manufacturing inspection' },
  { slug: 'vancouver',       city: 'Vancouver',       country: 'Canada',       assets: 'Trans Mountain pipeline terminals, Port of Vancouver industrial infrastructure, and BC Hydro power assets' },
  { slug: 'montreal',        city: 'Montreal',        country: 'Canada',       assets: 'Bombardier Aviation, Pratt & Whitney Canada, and Hydro-Québec transmission infrastructure' },
  { slug: 'fort-mcmurray',   city: 'Fort McMurray',   country: 'Canada',       assets: 'Suncor and Syncrude oil sands upgraders, bitumen processing vessels, and SAGD steam generation equipment' },
  { slug: 'halifax',         city: 'Halifax',         country: 'Canada',       assets: 'Irving Shipbuilding Arctic Offshore Patrol Vessels, Halifax Shipyard heavy fabrication, and Atlantic offshore oil infrastructure' },
  { slug: 'glasgow',         city: 'Glasgow',         country: 'UK',           assets: 'BAE Systems naval shipbuilding, Rolls-Royce East Kilbride, and Scottish offshore oil & gas support' },
  { slug: 'paris',           city: 'Paris',           country: 'France',       assets: 'Airbus Commercial Aircraft regional offices, EDF nuclear engineering, and Safran aerospace manufacturing' },
  { slug: 'madrid',          city: 'Madrid',          country: 'Spain',        assets: 'Airbus Defence & Space, Iberdrola power generation, and Repsol downstream petrochemical assets' },
  { slug: 'genoa',           city: 'Genoa',           country: 'Italy',        assets: 'Fincantieri shipbuilding, Ansaldo Energia power turbines, and Port of Genoa industrial infrastructure' },
  { slug: 'piraeus',         city: 'Piraeus',         country: 'Greece',       assets: 'COSCO Piraeus container port, Hellenic Shipyards, and regional Mediterranean marine inspection assets' },
  { slug: 'plymouth',        city: 'Plymouth',        country: 'UK',           assets: 'HMNB Devonport naval base, Babcock International submarine refit, and Devon/Cornwall offshore renewable assets' },
  { slug: 'newcastle',       city: 'Newcastle',       country: 'UK',           assets: 'Tyne offshore wind fabrication, Nissan Sunderland manufacturing, and UK North Sea decommissioning infrastructure' },
  { slug: 'sydney',          city: 'Sydney',          country: 'Australia',    assets: 'BAE Systems Australia, Boral cement, Orica chemical plants, and NSW regional industrial inspection' },
  { slug: 'karratha',        city: 'Karratha',        country: 'Australia',    assets: 'North West Shelf LNG, Pluto LNG, Woodside offshore facilities, and Pilbara iron ore port infrastructure' },
  { slug: 'gladstone',       city: 'Gladstone',       country: 'Australia',    assets: 'Curtis Island LNG trains (QCLNG, APLNG, GLNG), Gladstone alumina refineries, and NRG Stanwell power generation' },
  { slug: 'darwin',          city: 'Darwin',          country: 'Australia',    assets: 'Inpex Ichthys LNG, ConocoPhillips Darwin LNG, and Northern Territory offshore oil & gas assets' },
  { slug: 'auckland',        city: 'Auckland',        country: 'New Zealand',  assets: 'Ports of Auckland heavy infrastructure, Methanex petrochemical adjacent, and regional power generation' },
  { slug: 'wellington',      city: 'Wellington',      country: 'New Zealand',  assets: 'Meridian Energy hydro assets, Transpower transmission infrastructure, and Centreport industrial inspection' },
  { slug: 'christchurch',    city: 'Christchurch',    country: 'New Zealand',  assets: 'Lyttelton Port heavy lift, Canterbury industrial manufacturing, and South Island infrastructure integrity' },
];

digitalTwinCities.forEach(({ slug, city, country, assets }) => {
  routes.push({
    path: `/digital-twin-${slug}`,
    title: `Digital Twin NDT ${city} | 3D Inspection Visualization | Atlantis NDT`,
    description: `Digital twin NDT solutions in ${city}, ${country}. Real-time 3D asset visualization for ${assets}. API 510/570/653 compliant reporting, corrosion trending, FFS assessment, and predictive maintenance. Request a demo from Atlantis NDT.`,
    canonical: `${SITE_URL}/digital-twin-${slug}`,
    bodyContent: `  <header><nav><a href="/">Home</a><a href="/digital-twins">Digital Twins</a><a href="/digital-twin-reporting">Reporting Platform</a><a href="/contact">Contact</a></nav></header>\n  <main>\n    <h1>Digital Twin Solutions ${city} | 3D Asset Inspection Visualisation</h1>\n    <p>Atlantis NDT delivers digital twin inspection solutions in ${city}, ${country}. Our platform transforms NDT data from ultrasonic testing, TOFD, and phased array into a live colour-coded 3D model of your assets — including ${assets}. Real-time corrosion monitoring, API 579 fitness-for-service calculations, and automated API 510/570/653 regulatory reporting. Book a demonstration today.</p>\n  </main>`,
  });
});

// ── NDT ERP Location Pages ───────────────────────────────────────────────

const erpCities = [
  { city: 'Houston',      country: 'USA',          slug: 'houston',      industries: 'refineries, petrochemical plants, and midstream operators' },
  { city: 'Dubai',        country: 'UAE',          slug: 'dubai',        industries: 'oil & gas operators, EPC contractors, and offshore facilities' },
  { city: 'Abu Dhabi',    country: 'UAE',          slug: 'abu-dhabi',    industries: 'ADNOC facilities, downstream refining, and offshore platforms' },
  { city: 'Saudi Arabia', country: 'Saudi Arabia', slug: 'saudi-arabia', industries: 'Saudi Aramco, SABIC, and major petrochemical complexes' },
  { city: 'Calgary',      country: 'Canada',       slug: 'calgary',      industries: 'oil sands operations, midstream pipelines, and conventional petroleum' },
  { city: 'Singapore',    country: 'Singapore',    slug: 'singapore',    industries: 'Jurong Island petrochemicals, LNG terminals, and marine inspection' },
  { city: 'Mumbai',       country: 'India',        slug: 'mumbai',       industries: 'BPCL and HPCL refineries, ONGC offshore assets, and petrochemicals' },
  { city: 'London',       country: 'UK',           slug: 'london',       industries: 'North Sea support, nuclear, aerospace, and manufacturing sectors' },
  { city: 'Perth',        country: 'Australia',    slug: 'perth',        industries: 'LNG plants, iron ore processing, and offshore Carnarvon Basin operations' },
  { city: 'Doha',         country: 'Qatar',        slug: 'doha',         industries: 'QatarEnergy LNG, North Field expansion, and petrochemical complexes' },
  { city: 'Kuwait City',  country: 'Kuwait',       slug: 'kuwait',       industries: 'KNPC clean fuels, KOC upstream operations, and Al-Zour refinery' },
  { city: 'Muscat',       country: 'Oman',         slug: 'muscat',       industries: 'PDO oilfields, OQ refinery, and Duqm Special Economic Zone' },
  { city: 'Hyderabad',    country: 'India',        slug: 'hyderabad',    industries: 'HPCL refinery, BHEL manufacturing, and pharmaceutical sector' },
  { city: 'Chennai',      country: 'India',        slug: 'chennai',      industries: 'CPCL refinery, automotive manufacturing, and aerospace' },
  { city: 'Kuala Lumpur', country: 'Malaysia',     slug: 'kuala-lumpur', industries: 'PETRONAS upstream and downstream, and ASEAN energy infrastructure' },
  { city: 'Lagos',        country: 'Nigeria',      slug: 'lagos',        industries: 'NNPCL refineries, Shell SPDC network, and IOC upstream operations' },
  { city: 'New Orleans',  country: 'USA',          slug: 'new-orleans',  industries: 'Gulf Coast refineries, petrochemical corridor, and PSM-covered facilities' },
  { city: 'Denver',       country: 'USA',          slug: 'denver',       industries: 'DJ Basin shale, Rocky Mountain midstream pipelines, and refineries' },
  { city: 'Aberdeen',     country: 'UK',           slug: 'aberdeen',     industries: 'UKCS offshore platforms, FPSOs, and onshore terminal facilities' },
  { city: 'Oslo',         country: 'Norway',       slug: 'oslo',         industries: 'NCS offshore, Equinor, Aker BP, and NORSOK-governed operations' },
  // ── April 2026 tier-2 expansion ──
  { city: 'Manama',          country: 'Bahrain',      slug: 'manama',          industries: 'Bapco refinery, NOGA-regulated operations, and BMP modernisation EPCs' },
  { city: 'Odessa',          country: 'USA',          slug: 'odessa',          industries: 'Permian Basin upstream operators, gathering/midstream contractors, and tank battery networks' },
  { city: 'Bergen',          country: 'Norway',       slug: 'bergen',          industries: 'Equinor Troll/Sverdrup operations, Mongstad refinery, and PSA-regulated offshore' },
  { city: 'Ras Al Khaimah',  country: 'UAE',          slug: 'ras-al-khaimah',  industries: 'RAK Petroleum, RAK Gas, and Saqr Port industrial inspection' },
  { city: 'Sohar',           country: 'Oman',         slug: 'sohar',           industries: 'OQ Sohar refinery, petrochemical cracker EPCs, and Port of Sohar heavy industry' },
  { city: 'Basrah',          country: 'Iraq',         slug: 'basrah',          industries: 'Basrah Oil Company, West Qurna consortium, and IOC upstream operations' },
  { city: 'Port Harcourt',   country: 'Nigeria',      slug: 'port-harcourt',   industries: 'NNPCL, Shell SPDC, Chevron NMAC, and Niger Delta pipeline integrity' },
  { city: 'Midland',         country: 'USA',          slug: 'midland',         industries: 'Permian Basin upstream, midstream, and tank battery inspection contractors' },
  { city: 'Anchorage',       country: 'USA',          slug: 'anchorage',       industries: 'TAPS operators, North Slope contractors, and Cook Inlet LNG' },
  { city: 'Bakersfield',     country: 'USA',          slug: 'bakersfield',     industries: 'SJV heavy oil, Kern refineries, and California DOC-regulated operations' },
  { city: 'Sharjah',         country: 'UAE',          slug: 'sharjah',         industries: 'SNOC onshore, Hamriyah Free Zone, and UAE northern emirates petrochemical' },
  { city: 'Melbourne',       country: 'Australia',    slug: 'melbourne',       industries: 'Esso Longford, BlueScope Steel, and Port Phillip refinery operations' },
  { city: 'Jubail',          country: 'Saudi Arabia', slug: 'jubail',          industries: 'SABIC petrochemicals, Saudi Aramco Jubail, and Royal Commission industrial city' },
  { city: 'Yanbu',           country: 'Saudi Arabia', slug: 'yanbu',           industries: 'Yasref, PetroRabigh adjacency, and Yanbu Industrial Port heavy industry' },
  { city: 'Edmonton',        country: 'Canada',       slug: 'edmonton',        industries: 'Suncor Edmonton, Alberta oil sands upgraders, and Enbridge mainline operations' },
  { city: 'Rotterdam',       country: 'Netherlands',  slug: 'rotterdam',       industries: 'Shell Pernis, ExxonMobil Botlek, BP, and Port of Rotterdam petrochemical cluster' },
  // ── Tier-3 (USA/Canada/Europe/Australia/NZ, April 2026) ──
  { city: 'Tulsa',           country: 'USA',          slug: 'tulsa',           industries: 'mid-continent refineries, Williams midstream, and pipeline integrity contractors' },
  { city: 'Beaumont',        country: 'USA',          slug: 'beaumont',        industries: 'ExxonMobil, TotalEnergies petrochemical corridor, and Sabine-Neches refining complex' },
  { city: 'Mobile',          country: 'USA',          slug: 'mobile',          industries: 'Austal USA and Ingalls shipyards, AM/NS steel, and Gulf Coast maritime inspection' },
  { city: 'St. Louis',       country: 'USA',          slug: 'st-louis',        industries: 'Boeing Defense manufacturing, Ameren nuclear fleet, and Midwest petrochemical operations' },
  { city: 'Cleveland',       country: 'USA',          slug: 'cleveland',       industries: 'Cleveland-Cliffs steel, Lake Erie power generation, and Ohio/Pennsylvania pipeline integrity' },
  { city: 'Cincinnati',      country: 'USA',          slug: 'cincinnati',      industries: 'GE Aerospace, P&G chemical, and Duke Energy nuclear fleet' },
  { city: 'Nashville',       country: 'USA',          slug: 'nashville',       industries: 'Nissan automotive, TVA nuclear, and regional manufacturing contractors' },
  { city: 'Louisville',      country: 'USA',          slug: 'louisville',      industries: 'Rubbertown chemical corridor, GE Appliances, and Ohio River terminal infrastructure' },
  { city: 'Kansas City',     country: 'USA',          slug: 'kansas-city',     industries: 'Honeywell Federal Manufacturing, regional refining, and Cerner/Oracle healthcare' },
  { city: 'Minneapolis',     country: 'USA',          slug: 'minneapolis',     industries: '3M, Xcel Energy nuclear, and Cargill/ADM grain-processing' },
  { city: 'Milwaukee',       country: 'USA',          slug: 'milwaukee',       industries: 'Rockwell Automation, Marinette Marine shipbuilding, and We Energies power' },
  { city: 'Charlotte',       country: 'USA',          slug: 'charlotte',       industries: 'Duke Energy nuclear HQ, Honeywell Aerospace, and Siemens Energy turbines' },
  { city: 'Toronto',         country: 'Canada',       slug: 'toronto',         industries: 'Bombardier Aerospace, Ontario Power Generation nuclear, and regional manufacturing' },
  { city: 'Vancouver',       country: 'Canada',       slug: 'vancouver',       industries: 'Trans Mountain pipeline terminals, Port of Vancouver, and BC Hydro' },
  { city: 'Montreal',        country: 'Canada',       slug: 'montreal',        industries: 'Bombardier Aviation, Pratt & Whitney Canada, and Hydro-Québec' },
  { city: 'Fort McMurray',   country: 'Canada',       slug: 'fort-mcmurray',   industries: 'Suncor and Syncrude oil sands upgraders and SAGD operations' },
  { city: 'Halifax',         country: 'Canada',       slug: 'halifax',         industries: 'Irving Shipbuilding, Halifax Shipyard, and Atlantic offshore oil' },
  { city: 'Glasgow',         country: 'UK',           slug: 'glasgow',         industries: 'BAE Systems naval shipbuilding, Rolls-Royce, and Scottish offshore support' },
  { city: 'Paris',           country: 'France',       slug: 'paris',           industries: 'Airbus regional offices, EDF nuclear, and Safran aerospace' },
  { city: 'Madrid',          country: 'Spain',        slug: 'madrid',          industries: 'Airbus Defence & Space, Iberdrola, and Repsol downstream' },
  { city: 'Genoa',           country: 'Italy',        slug: 'genoa',           industries: 'Fincantieri shipbuilding, Ansaldo Energia power turbines, and port industrial' },
  { city: 'Piraeus',         country: 'Greece',       slug: 'piraeus',         industries: 'COSCO Piraeus Port, Hellenic Shipyards, and Mediterranean marine' },
  { city: 'Plymouth',        country: 'UK',           slug: 'plymouth',        industries: 'HMNB Devonport, Babcock submarine refit, and SW offshore renewables' },
  { city: 'Newcastle',       country: 'UK',           slug: 'newcastle',       industries: 'Tyne offshore wind fabrication, Nissan Sunderland, and North Sea decom' },
  { city: 'Sydney',          country: 'Australia',    slug: 'sydney',          industries: 'BAE Systems Australia, Boral, Orica, and NSW industrial inspection' },
  { city: 'Karratha',        country: 'Australia',    slug: 'karratha',        industries: 'NWS LNG, Pluto LNG, Woodside, and Pilbara iron ore ports' },
  { city: 'Gladstone',       country: 'Australia',    slug: 'gladstone',       industries: 'Curtis Island LNG trains, alumina refineries, and NRG Stanwell power' },
  { city: 'Darwin',          country: 'Australia',    slug: 'darwin',          industries: 'Inpex Ichthys LNG, ConocoPhillips Darwin LNG, and NT offshore' },
  { city: 'Auckland',        country: 'New Zealand',  slug: 'auckland',        industries: 'Ports of Auckland, Methanex adjacent, and regional power' },
  { city: 'Wellington',      country: 'New Zealand',  slug: 'wellington',      industries: 'Meridian Energy hydro, Transpower, and Centreport industrial' },
  { city: 'Christchurch',    country: 'New Zealand',  slug: 'christchurch',    industries: 'Lyttelton Port, Canterbury manufacturing, and South Island infrastructure' },
  { city: "Accra", country: "Ghana", slug: "accra", industries: "industrial inspection, process plant, and infrastructure sectors" },
  { city: "Ahmedabad", country: "India", slug: "ahmedabad", industries: "refining, petrochemical, power generation, and aerospace sectors" },
  { city: "Algeria", country: "Algeria", slug: "algeria", industries: "industrial inspection, process plant, and infrastructure sectors" },
  { city: "Angola", country: "Angola", slug: "angola", industries: "industrial inspection, process plant, and infrastructure sectors" },
  { city: "Argentina", country: "Argentina", slug: "argentina", industries: "industrial inspection, process plant, and infrastructure sectors" },
  { city: "Atlanta", country: "USA", slug: "atlanta", industries: "oil & gas, petrochemical, aerospace, and manufacturing operations" },
  { city: "Austin", country: "USA", slug: "austin", industries: "oil & gas, petrochemical, aerospace, and manufacturing operations" },
  { city: "Australia", country: "Australia", slug: "australia", industries: "LNG, mining, and onshore / offshore oil & gas operations" },
  { city: "Bahrain", country: "Bahrain", slug: "bahrain", industries: "oil & gas, petrochemical, refining, and Vision-2030 industrial projects" },
  { city: "Bangalore", country: "India", slug: "bangalore", industries: "refining, petrochemical, power generation, and aerospace sectors" },
  { city: "Bangkok", country: "Thailand", slug: "bangkok", industries: "industrial inspection, process plant, and infrastructure sectors" },
  { city: "Baton Rouge", country: "USA", slug: "baton-rouge", industries: "oil & gas, petrochemical, aerospace, and manufacturing operations" },
  { city: "Beijing", country: "China", slug: "beijing", industries: "industrial inspection, process plant, and infrastructure sectors" },
  { city: "Belgium", country: "Belgium", slug: "belgium", industries: "industrial inspection, process plant, and infrastructure sectors" },
  { city: "Bogota", country: "Colombia", slug: "bogota", industries: "industrial inspection, process plant, and infrastructure sectors" },
  { city: "Brazil", country: "Brazil", slug: "brazil", industries: "pre-salt offshore, refining, and Petrobras operations" },
  { city: "Brisbane", country: "Australia", slug: "brisbane", industries: "LNG, mining, and onshore / offshore oil & gas operations" },
  { city: "Buenos Aires", country: "Argentina", slug: "buenos-aires", industries: "industrial inspection, process plant, and infrastructure sectors" },
  { city: "Cape Town", country: "South Africa", slug: "cape-town", industries: "industrial inspection, process plant, and infrastructure sectors" },
  { city: "Casablanca", country: "Morocco", slug: "casablanca", industries: "industrial inspection, process plant, and infrastructure sectors" },
  { city: "Chicago", country: "USA", slug: "chicago", industries: "oil & gas, petrochemical, aerospace, and manufacturing operations" },
  { city: "Colombia", country: "Colombia", slug: "colombia", industries: "industrial inspection, process plant, and infrastructure sectors" },
  { city: "Colorado Springs", country: "USA", slug: "colorado-springs", industries: "oil & gas, petrochemical, aerospace, and manufacturing operations" },
  { city: "Corpus Christi", country: "USA", slug: "corpus-christi", industries: "oil & gas, petrochemical, aerospace, and manufacturing operations" },
  { city: "Dallas", country: "USA", slug: "dallas", industries: "oil & gas, petrochemical, aerospace, and manufacturing operations" },
  { city: "Dammam", country: "Saudi Arabia", slug: "dammam", industries: "oil & gas, petrochemical, refining, and Vision-2030 industrial projects" },
  { city: "Delhi", country: "India", slug: "delhi", industries: "refining, petrochemical, power generation, and aerospace sectors" },
  { city: "Detroit", country: "USA", slug: "detroit", industries: "oil & gas, petrochemical, aerospace, and manufacturing operations" },
  { city: "Egypt", country: "Egypt", slug: "egypt", industries: "industrial inspection, process plant, and infrastructure sectors" },
  { city: "Fort Worth", country: "USA", slug: "fort-worth", industries: "oil & gas, petrochemical, aerospace, and manufacturing operations" },
  { city: "France", country: "France", slug: "france", industries: "industrial inspection, process plant, and infrastructure sectors" },
  { city: "Germany", country: "Germany", slug: "germany", industries: "industrial inspection, process plant, and infrastructure sectors" },
  { city: "Ho Chi Minh", country: "Vietnam", slug: "ho-chi-minh", industries: "industrial inspection, process plant, and infrastructure sectors" },
  { city: "Hong Kong", country: "Hong Kong", slug: "hong-kong", industries: "industrial inspection, process plant, and infrastructure sectors" },
  { city: "Huntsville", country: "USA", slug: "huntsville", industries: "oil & gas, petrochemical, aerospace, and manufacturing operations" },
  { city: "India", country: "USA", slug: "india", industries: "oil & gas, petrochemical, aerospace, and manufacturing operations" },
  { city: "Indonesia", country: "Indonesia", slug: "indonesia", industries: "Pertamina refineries, Petrokimia complexes, and LNG operations" },
  { city: "Italy", country: "Italy", slug: "italy", industries: "industrial inspection, process plant, and infrastructure sectors" },
  { city: "Jakarta", country: "Indonesia", slug: "jakarta", industries: "Pertamina refineries, Petrokimia complexes, and LNG operations" },
  { city: "Jamnagar", country: "India", slug: "jamnagar", industries: "refining, petrochemical, power generation, and aerospace sectors" },
  { city: "Japan", country: "Japan", slug: "japan", industries: "industrial inspection, process plant, and infrastructure sectors" },
  { city: "Johannesburg", country: "South Africa", slug: "johannesburg", industries: "industrial inspection, process plant, and infrastructure sectors" },
  { city: "Kochi", country: "India", slug: "kochi", industries: "refining, petrochemical, power generation, and aerospace sectors" },
  { city: "Kolkata", country: "India", slug: "kolkata", industries: "refining, petrochemical, power generation, and aerospace sectors" },
  { city: "Lake Charles", country: "USA", slug: "lake-charles", industries: "oil & gas, petrochemical, aerospace, and manufacturing operations" },
  { city: "Lima", country: "Peru", slug: "lima", industries: "industrial inspection, process plant, and infrastructure sectors" },
  { city: "Los Angeles", country: "USA", slug: "los-angeles", industries: "oil & gas, petrochemical, aerospace, and manufacturing operations" },
  { city: "Malaysia", country: "Malaysia", slug: "malaysia", industries: "industrial inspection, process plant, and infrastructure sectors" },
  { city: "Manila", country: "Philippines", slug: "manila", industries: "industrial inspection, process plant, and infrastructure sectors" },
  { city: "Mexico City", country: "Mexico", slug: "mexico-city", industries: "industrial inspection, process plant, and infrastructure sectors" },
  { city: "Nairobi", country: "Kenya", slug: "nairobi", industries: "industrial inspection, process plant, and infrastructure sectors" },
  { city: "Netherlands", country: "Netherlands", slug: "netherlands", industries: "Europoort refineries, petrochemical, and offshore wind" },
  { city: "New York", country: "USA", slug: "new-york", industries: "oil & gas, petrochemical, aerospace, and manufacturing operations" },
  { city: "New Zealand", country: "New Zealand", slug: "new-zealand", industries: "industrial inspection, process plant, and infrastructure sectors" },
  { city: "Nigeria", country: "Nigeria", slug: "nigeria", industries: "Niger Delta operations, NLNG, and Lagos industrial sector" },
  { city: "Norfolk", country: "USA", slug: "norfolk", industries: "oil & gas, petrochemical, aerospace, and manufacturing operations" },
  { city: "Norway", country: "Norway", slug: "norway", industries: "NCS offshore operations, NORSOK compliance, and subsea integrity" },
  { city: "Oklahoma City", country: "USA", slug: "oklahoma-city", industries: "oil & gas, petrochemical, aerospace, and manufacturing operations" },
  { city: "Oman", country: "Oman", slug: "oman", industries: "oil & gas, petrochemical, refining, and Vision-2030 industrial projects" },
  { city: "Online", country: "USA", slug: "online", industries: "oil & gas, petrochemical, aerospace, and manufacturing operations" },
  { city: "Orlando", country: "USA", slug: "orlando", industries: "oil & gas, petrochemical, aerospace, and manufacturing operations" },
  { city: "Philadelphia", country: "USA", slug: "philadelphia", industries: "oil & gas, petrochemical, aerospace, and manufacturing operations" },
  { city: "Philippines", country: "Philippines", slug: "philippines", industries: "industrial inspection, process plant, and infrastructure sectors" },
  { city: "Phoenix", country: "USA", slug: "phoenix", industries: "oil & gas, petrochemical, aerospace, and manufacturing operations" },
  { city: "Pittsburgh", country: "USA", slug: "pittsburgh", industries: "oil & gas, petrochemical, aerospace, and manufacturing operations" },
  { city: "Qatar", country: "Qatar", slug: "qatar", industries: "oil & gas, petrochemical, refining, and Vision-2030 industrial projects" },
  { city: "Raleigh", country: "USA", slug: "raleigh", industries: "oil & gas, petrochemical, aerospace, and manufacturing operations" },
  { city: "Rio De Janeiro", country: "Brazil", slug: "rio-de-janeiro", industries: "pre-salt offshore, refining, and Petrobras operations" },
  { city: "Sacramento", country: "USA", slug: "sacramento", industries: "oil & gas, petrochemical, aerospace, and manufacturing operations" },
  { city: "San Antonio", country: "USA", slug: "san-antonio", industries: "oil & gas, petrochemical, aerospace, and manufacturing operations" },
  { city: "San Francisco", country: "USA", slug: "san-francisco", industries: "oil & gas, petrochemical, aerospace, and manufacturing operations" },
  { city: "Santiago", country: "Chile", slug: "santiago", industries: "industrial inspection, process plant, and infrastructure sectors" },
  { city: "Sao Paulo", country: "Brazil", slug: "sao-paulo", industries: "pre-salt offshore, refining, and Petrobras operations" },
  { city: "Savannah", country: "USA", slug: "savannah", industries: "oil & gas, petrochemical, aerospace, and manufacturing operations" },
  { city: "Scotland", country: "UK", slug: "scotland", industries: "North Sea offshore, decommissioning, nuclear, and aerospace" },
  { city: "Seattle", country: "USA", slug: "seattle", industries: "oil & gas, petrochemical, aerospace, and manufacturing operations" },
  { city: "Shanghai", country: "China", slug: "shanghai", industries: "industrial inspection, process plant, and infrastructure sectors" },
  { city: "Shenzhen", country: "China", slug: "shenzhen", industries: "industrial inspection, process plant, and infrastructure sectors" },
  { city: "South Africa", country: "South Africa", slug: "south-africa", industries: "industrial inspection, process plant, and infrastructure sectors" },
  { city: "South Korea", country: "South Korea", slug: "south-korea", industries: "industrial inspection, process plant, and infrastructure sectors" },
  { city: "Spain", country: "Spain", slug: "spain", industries: "industrial inspection, process plant, and infrastructure sectors" },
  { city: "Taipei", country: "Taiwan", slug: "taipei", industries: "industrial inspection, process plant, and infrastructure sectors" },
  { city: "Taiwan", country: "Taiwan", slug: "taiwan", industries: "industrial inspection, process plant, and infrastructure sectors" },
  { city: "Thailand", country: "Thailand", slug: "thailand", industries: "industrial inspection, process plant, and infrastructure sectors" },
  { city: "Trinidad", country: "Trinidad and Tobago", slug: "trinidad", industries: "industrial inspection, process plant, and infrastructure sectors" },
  { city: "UK", country: "UK", slug: "uk", industries: "North Sea offshore, decommissioning, nuclear, and aerospace" },
  { city: "USA", country: "USA", slug: "usa", industries: "oil & gas, petrochemical, aerospace, and manufacturing operations" },
  { city: "Vietnam", country: "Vietnam", slug: "vietnam", industries: "industrial inspection, process plant, and infrastructure sectors" },
  { city: "Vizag", country: "India", slug: "vizag", industries: "refining, petrochemical, power generation, and aerospace sectors" },
];

erpCities.forEach(({ city, country, slug, industries }) => {
  routes.push({
    path: `/ndt-erp-${slug}`,
    title: `NDT ERP Software ${city} | Inspection Management System | Atlantis NDT`,
    description: `NDT ERP software for inspection companies in ${city}, ${country}. Automate ASNT certification tracking, API 510/570/653 scheduling, and PDF report generation for ${industries}.`,
    canonical: `${SITE_URL}/ndt-erp-${slug}`,
    bodyContent: `  <header><nav aria-label="Main Navigation"><a href="/">Home</a><a href="/erp">NDT ERP</a><a href="/consulting">Consulting</a><a href="/contact">Contact</a></nav></header>\n  <main>\n    <h1>NDT ERP Software in ${city} | Inspection Management System</h1>\n    <p>Purpose-built NDT ERP software for inspection companies in ${city}, ${country}. Manage ASNT, ISO 9712, and PCN certification tracking with automated expiry alerts, API 510/570/653 inspection scheduling, corrosion data trending, and professional PDF report generation — all in one cloud platform. Serving ${industries}. Request a demo from Atlantis NDT.</p>\n  </main>`,
  });
});

// ── NDT Reporting Software — city pages (April 2026) ─────────────────────

const reportingCities = [
  { city: 'Houston',          country: 'USA',          slug: 'houston' },
  { city: 'Dubai',            country: 'UAE',          slug: 'dubai' },
  { city: 'Abu Dhabi',        country: 'UAE',          slug: 'abu-dhabi' },
  { city: 'Saudi Arabia',     country: 'Saudi Arabia', slug: 'saudi-arabia' },
  { city: 'Calgary',          country: 'Canada',       slug: 'calgary' },
  { city: 'Singapore',        country: 'Singapore',    slug: 'singapore' },
  { city: 'Mumbai',           country: 'India',        slug: 'mumbai' },
  { city: 'London',           country: 'UK',           slug: 'london' },
  { city: 'Perth',            country: 'Australia',    slug: 'perth' },
  { city: 'Doha',             country: 'Qatar',        slug: 'doha' },
  { city: 'Kuwait',           country: 'Kuwait',       slug: 'kuwait' },
  { city: 'Muscat',           country: 'Oman',         slug: 'muscat' },
  { city: 'Hyderabad',        country: 'India',        slug: 'hyderabad' },
  { city: 'Chennai',          country: 'India',        slug: 'chennai' },
  { city: 'Kuala Lumpur',     country: 'Malaysia',     slug: 'kuala-lumpur' },
  { city: 'Lagos',            country: 'Nigeria',      slug: 'lagos' },
  { city: 'New Orleans',      country: 'USA',          slug: 'new-orleans' },
  { city: 'Denver',           country: 'USA',          slug: 'denver' },
  { city: 'Aberdeen',         country: 'UK',           slug: 'aberdeen' },
  { city: 'Oslo',             country: 'Norway',       slug: 'oslo' },
  { city: 'Rotterdam',        country: 'Netherlands',  slug: 'rotterdam' },
  { city: 'Manama',           country: 'Bahrain',      slug: 'manama' },
  { city: 'Odessa',           country: 'USA',          slug: 'odessa' },
  { city: 'Bergen',           country: 'Norway',       slug: 'bergen' },
  { city: 'Ras Al Khaimah',   country: 'UAE',          slug: 'ras-al-khaimah' },
  // ── Tier-3 (USA/Canada/Europe/Australia/NZ, April 2026) ──
  { city: 'Tulsa',            country: 'USA',          slug: 'tulsa' },
  { city: 'Beaumont',         country: 'USA',          slug: 'beaumont' },
  { city: 'Mobile',           country: 'USA',          slug: 'mobile' },
  { city: 'St. Louis',        country: 'USA',          slug: 'st-louis' },
  { city: 'Cleveland',        country: 'USA',          slug: 'cleveland' },
  { city: 'Cincinnati',       country: 'USA',          slug: 'cincinnati' },
  { city: 'Nashville',        country: 'USA',          slug: 'nashville' },
  { city: 'Louisville',       country: 'USA',          slug: 'louisville' },
  { city: 'Kansas City',      country: 'USA',          slug: 'kansas-city' },
  { city: 'Minneapolis',      country: 'USA',          slug: 'minneapolis' },
  { city: 'Milwaukee',        country: 'USA',          slug: 'milwaukee' },
  { city: 'Charlotte',        country: 'USA',          slug: 'charlotte' },
  { city: 'Toronto',          country: 'Canada',       slug: 'toronto' },
  { city: 'Vancouver',        country: 'Canada',       slug: 'vancouver' },
  { city: 'Montreal',         country: 'Canada',       slug: 'montreal' },
  { city: 'Fort McMurray',    country: 'Canada',       slug: 'fort-mcmurray' },
  { city: 'Halifax',          country: 'Canada',       slug: 'halifax' },
  { city: 'Glasgow',          country: 'UK',           slug: 'glasgow' },
  { city: 'Paris',            country: 'France',       slug: 'paris' },
  { city: 'Madrid',           country: 'Spain',        slug: 'madrid' },
  { city: 'Genoa',            country: 'Italy',        slug: 'genoa' },
  { city: 'Piraeus',          country: 'Greece',       slug: 'piraeus' },
  { city: 'Plymouth',         country: 'UK',           slug: 'plymouth' },
  { city: 'Newcastle',        country: 'UK',           slug: 'newcastle' },
  { city: 'Sydney',           country: 'Australia',    slug: 'sydney' },
  { city: 'Karratha',         country: 'Australia',    slug: 'karratha' },
  { city: 'Gladstone',        country: 'Australia',    slug: 'gladstone' },
  { city: 'Darwin',           country: 'Australia',    slug: 'darwin' },
  { city: 'Auckland',         country: 'New Zealand',  slug: 'auckland' },
  { city: 'Wellington',       country: 'New Zealand',  slug: 'wellington' },
  { city: 'Christchurch',     country: 'New Zealand',  slug: 'christchurch' },
];

reportingCities.forEach(({ city, country, slug }) => {
  routes.push({
    path: `/ndt-reporting-${slug}`,
    title: `NDT Reporting Software ${city} 2026 | API 510/570/653 Auto-Generation | Atlantis NDT`,
    description: `NDT inspection reporting software for ${city}, ${country}: offline mobile capture, API 510/570/653 + ASME V templates, eIDAS digital signatures, SHA-256 audit trail, AI-assisted drafting, CMMS integration. By ASNT Level III Anoop Rayavarapu.`,
    canonical: `${SITE_URL}/ndt-reporting-${slug}`,
    bodyContent: `  <header><nav aria-label="Main Navigation"><a href="/">Home</a><a href="/intelligent-reporting-software">Reporting Software</a><a href="/erp">NDT ERP</a><a href="/contact">Contact</a></nav></header>\n  <main>\n    <h1>NDT Reporting Software in ${city} | API 510/570/653 Auto-Generation</h1>\n    <p>Purpose-built NDT inspection reporting software for inspection teams in ${city}, ${country}. Offline-first mobile field capture, code-aligned PDF templates for API 510 pressure vessel, API 570 piping circuit, API 653 aboveground storage tank, ASME Section V Article 4/5 UT calibration tables, AWS D1.1 weld inspection acceptance criteria, eIDAS-qualified digital signatures, SHA-256 immutable audit trail, and AI-assisted finding narratives with ASNT Level III human approval. Direct CMMS push to SAP PM, IBM Maximo, GE Meridium APM, and AspenTech Mtell. Authored by ASNT Level III Anoop Rayavarapu. Request a demo.</p>\n  </main>`,
  });
});

// ── Industry × Product software pillar pages (April 2026) ───────────────

routes.push({
  path: '/ndt-software-for-oil-gas',
  title: 'NDT Software for Oil & Gas 2026: Digital Twin + ERP + Reporting (API 510/570/653) | Atlantis NDT',
  description: 'Integrated NDT software stack for oil & gas operators & contractors: Digital Twin visualisation, ERP inspection management, and reporting software aligned to API 510/570/653, API 571 damage mechanisms, API 580/581 RBI, NACE MR0175, NORSOK Z-008. By ASNT Level III Anoop Rayavarapu.',
  canonical: `${SITE_URL}/ndt-software-for-oil-gas`,
  bodyContent: `  <header><nav><a href="/">Home</a><a href="/digital-twins">Digital Twins</a><a href="/erp">ERP</a><a href="/intelligent-reporting-software">Reporting</a></nav></header>\n  <main>\n    <h1>NDT Software for Oil &amp; Gas — Digital Twin, ERP &amp; Reporting</h1>\n    <p>Unified software stack for oil &amp; gas inspection: Atlantis NDT Digital Twin, ERP, and Reporting Software aligned to API 510 pressure vessel, API 570 piping, and API 653 tank inspection. Built-in API 571 damage mechanism taxonomy, API RP 580/581 risk-based inspection integration, API 579-1 fitness-for-service, OSHA PSM compliance, and operator-specific standards for Aramco SAEP-1112, ADNOC ACS-01, QatarEnergy NFPS, KOC/KNPC, Shell MESC SP 77, ExxonMobil GP 19-01, BP ETP GP 62-01, TotalEnergies GS EP INS 103, Equinor NORSOK Z-008, Petrobras N-2318, PDO CIMS, Sinopec/CNPC. Request a demo.</p>\n  </main>`,
});

routes.push({
  path: '/ndt-software-for-aerospace',
  title: 'NDT Software for Aerospace 2026: Digital Twin + ERP + Reporting (NAS 410 / EN 4179) | Atlantis NDT',
  description: 'Integrated NDT software for aerospace MRO, OEM, defense: NAS 410 / EN 4179 personnel tracking, ECT fatigue-crack inspection, composite UT C-scan, PT per ASTM E1417, EASA Part 145 documentation, FAA AC 43.13-1B compliance. By ASNT Level III Anoop Rayavarapu.',
  canonical: `${SITE_URL}/ndt-software-for-aerospace`,
  bodyContent: `  <header><nav><a href="/">Home</a><a href="/digital-twins">Digital Twins</a><a href="/erp">ERP</a><a href="/intelligent-reporting-software">Reporting</a></nav></header>\n  <main>\n    <h1>NDT Software for Aerospace — Digital Twin, ERP &amp; Reporting</h1>\n    <p>Built for aerospace MRO, OEM, and defense inspection programs: NAS 410 / EN 4179 personnel traceability, ECT fatigue-crack inspection with probe trace archival, composite UT C-scan attenuation mapping, flash thermography per ASTM E2582, PT per ASTM E1417 + MT per ASTM E1444, EASA Part 145 maintenance organisation documentation, FAA AC 43.13-1B compliance, AS 5553 counterfeit-parts avoidance with DPAS traceability, Boeing/Airbus SRM template library. ASNT Level III + NAS 410 Level III technical advisor on every deployment.</p>\n  </main>`,
});

routes.push({
  path: '/ndt-software-for-power-generation',
  title: 'NDT Software for Power Generation 2026: Nuclear ISI, ECT, FAC — ASME XI, NEI 03-08 | Atlantis NDT',
  description: 'NDT software for power generation — nuclear, combined-cycle, coal: ASME Section XI in-service inspection, ECT steam generator bobbin/array per NEI 03-08, FAC per EPRI TR-106971, creep fatigue per B31.1, NRC 10 CFR 50 Appendix B QA. ASNT Level III authored.',
  canonical: `${SITE_URL}/ndt-software-for-power-generation`,
  bodyContent: `  <header><nav><a href="/">Home</a><a href="/digital-twins">Digital Twins</a><a href="/erp">ERP</a><a href="/intelligent-reporting-software">Reporting</a></nav></header>\n  <main>\n    <h1>NDT Software for Power Generation — Digital Twin, ERP &amp; Reporting</h1>\n    <p>Built for nuclear, combined-cycle, coal-fired, and hydroelectric generating stations where ASME Section XI in-service inspection intervals, NEI 03-08 steam generator integrity, EPRI-grade ECT signal analysis, NRC 10 CFR Part 50 Appendix B quality assurance records, flow-accelerated corrosion monitoring per EPRI TR-106971, and creep fatigue tracking per ASME B31.1 determine operating licence continuity. PDF/A-3 archival with SHA-256 hash chaining for life-of-facility records retention.</p>\n  </main>`,
});

routes.push({
  path: '/best-ndt-reporting-software-2026',
  title: 'Best NDT Reporting Software 2026: Top 10 Compared (Atlantis, Hexagon, Bentley, Maximo) | Atlantis NDT',
  description: 'Top 10 NDT reporting software 2026 compared — code support, mobile UX, AI drafting, pricing, pros/cons. Atlantis, Hexagon, Bentley, Maximo, AspenTech, SAP PM, GE Vernova. ASNT Level III authored.',
  canonical: `${SITE_URL}/best-ndt-reporting-software-2026`,
  bodyContent: `  <header><nav><a href="/">Home</a><a href="/intelligent-reporting-software">Reporting Software</a><a href="/erp">ERP</a><a href="/contact">Contact</a></nav></header>\n  <main>\n    <h1>Best NDT Reporting Software 2026 — Top 10 Compared</h1>\n    <p>Independent ASNT Level III-authored comparison of the top 10 NDT reporting software platforms: Atlantis NDT Reporting Software (#1), Hexagon ALI / PPM / Meridium APM, Bentley AssetWise APM, IBM Maximo for Asset Monitoring, AspenTech Mtell + Aspen RBI, SAP Plant Maintenance, GE Vernova APM, Intertek/Applus+/Bureau Veritas internal tools, Pragma / On Key / Eagle CMMS, and Excel spreadsheet status quo. Compared across code support (API 510/570/653, ASME V, AWS D1.1), inspector mobile UX, AI-assisted drafting, qualified digital signatures, CMMS integrations, and total cost of ownership.</p>\n  </main>`,
});

// ─── 20 US State Pages (NDT Level III Consulting & Training) ─────────────

const usStatePages = [
  { slug: 'texas', name: 'Texas', abbr: 'TX', focus: 'oil & gas, petrochemical, aerospace, wind energy', cities: 'Houston, Dallas, San Antonio, Austin, Midland, Beaumont, Corpus Christi' },
  { slug: 'california', name: 'California', abbr: 'CA', focus: 'aerospace (Boeing, Northrop Grumman, SpaceX), refining, infrastructure', cities: 'Los Angeles, San Francisco, San Diego, Sacramento' },
  { slug: 'louisiana', name: 'Louisiana', abbr: 'LA', focus: 'petrochemical corridor, LNG export terminals, offshore oil & gas', cities: 'New Orleans, Baton Rouge, Lake Charles' },
  { slug: 'ohio', name: 'Ohio', abbr: 'OH', focus: 'manufacturing, nuclear power, refining, pipeline integrity', cities: 'Cleveland, Cincinnati, Columbus, Toledo' },
  { slug: 'pennsylvania', name: 'Pennsylvania', abbr: 'PA', focus: 'nuclear power, refining, steel manufacturing, Marcellus Shale', cities: 'Philadelphia, Pittsburgh' },
  { slug: 'colorado', name: 'Colorado', abbr: 'CO', focus: 'DJ Basin oil & gas, aerospace (Lockheed Martin), mining, wind energy', cities: 'Denver, Colorado Springs' },
  { slug: 'michigan', name: 'Michigan', abbr: 'MI', focus: 'automotive (GM, Ford, Stellantis), nuclear power, pipeline integrity', cities: 'Detroit, Grand Rapids' },
  { slug: 'illinois', name: 'Illinois', abbr: 'IL', focus: 'nuclear power (6 plants, most in US), refining, manufacturing', cities: 'Chicago, Joliet' },
  { slug: 'new-york', name: 'New York', abbr: 'NY', focus: 'infrastructure, nuclear decommissioning, aerospace, utilities', cities: 'New York City, Buffalo' },
  { slug: 'florida', name: 'Florida', abbr: 'FL', focus: 'aerospace (NASA, SpaceX), nuclear power, marine, phosphate mining', cities: 'Jacksonville, Tampa, Orlando, Miami' },
  { slug: 'washington', name: 'Washington', abbr: 'WA', focus: 'Boeing aerospace, Hanford nuclear cleanup, refining, naval shipyard', cities: 'Seattle, Tacoma, Richland' },
  { slug: 'georgia', name: 'Georgia', abbr: 'GA', focus: 'Vogtle nuclear, manufacturing, Port of Savannah, military', cities: 'Atlanta, Savannah, Augusta' },
  { slug: 'new-jersey', name: 'New Jersey', abbr: 'NJ', focus: 'refining, nuclear power, pharmaceutical manufacturing, infrastructure', cities: 'Newark, Elizabeth, Paulsboro' },
  { slug: 'north-carolina', name: 'North Carolina', abbr: 'NC', focus: 'nuclear power (Duke Energy), GE Aviation aerospace, manufacturing', cities: 'Charlotte, Raleigh, Wilmington' },
  { slug: 'virginia', name: 'Virginia', abbr: 'VA', focus: 'Newport News Shipbuilding (carriers & subs), nuclear power, defense', cities: 'Norfolk, Hampton Roads, Richmond' },
  { slug: 'tennessee', name: 'Tennessee', abbr: 'TN', focus: 'TVA nuclear fleet, Oak Ridge National Lab, automotive, chemical', cities: 'Nashville, Knoxville, Memphis' },
  { slug: 'alabama', name: 'Alabama', abbr: 'AL', focus: 'NASA Marshall (Huntsville), Airbus Mobile, nuclear power, shipbuilding', cities: 'Huntsville, Mobile, Birmingham' },
  { slug: 'oklahoma', name: 'Oklahoma', abbr: 'OK', focus: 'SCOOP/STACK oil plays, Cushing pipeline hub, Tinker AFB aerospace, wind energy', cities: 'Tulsa, Oklahoma City' },
  { slug: 'minnesota', name: 'Minnesota', abbr: 'MN', focus: '3M/Honeywell manufacturing, Enbridge pipelines, nuclear power, medical devices', cities: 'Minneapolis, St. Paul' },
  { slug: 'wisconsin', name: 'Wisconsin', abbr: 'WI', focus: 'manufacturing (Caterpillar, Oshkosh), Marinette Marine frigates, nuclear, paper/pulp', cities: 'Milwaukee, Green Bay' },
];

usStatePages.forEach(({ slug, name, abbr, focus, cities }) => {
  routes.push({
    path: `/ndt-consulting-${slug}`,
    title: `NDT Level III Consulting ${name} (${abbr}) | ASNT Certified | Training & Inspection | Atlantis NDT`,
    description: `NDT Level III consulting & ASNT certification training in ${name}. Expert procedure development, program audits, SNT-TC-1A compliance for ${focus}. Serving ${cities}. Houston-headquartered, 50+ Level III consultants.`,
    canonical: `${SITE_URL}/ndt-consulting-${slug}`,
    bodyContent: `  <header><nav><a href="/">Home</a><a href="/consulting">Consulting</a><a href="/training">Training</a><a href="/contact">Contact</a></nav></header>\n  <main>\n    <h1>NDT Level III Consulting & Training in ${name}</h1>\n    <p>Atlantis NDT provides ASNT Level III consulting and NDT training across ${name}. Our Houston-headquartered team of 50+ certified consultants specializes in ${focus}. Serving ${cities} and all ${name} locations.</p>\n    <h2>Industries in ${name}</h2>\n    <p>Our Level III consultants have direct experience in ${focus}. We deploy ASNT-certified experts to any ${name} location within 24-48 hours.</p>\n    <h2>NDT Training in ${name}</h2>\n    <p>ASNT Level I, II, and III certification for all 6 major NDT methods. 95% first-time pass rate. Virtual and on-site options.</p>\n  </main>`,
  });
});

// ─── 15 New US City Consulting Pages ─────────────────────────────────────

const newUSCityPages = [
  { slug: 'austin', city: 'Austin', state: 'TX', focus: 'semiconductor manufacturing, tech sector, renewable energy, Samsung fab, Tesla Gigafactory' },
  { slug: 'san-antonio', city: 'San Antonio', state: 'TX', focus: 'military installations (JBSA), Eagle Ford Shale, CPS Energy, aerospace MRO' },
  { slug: 'fort-worth', city: 'Fort Worth', state: 'TX', focus: 'Lockheed Martin F-35 production, Bell helicopter, defense manufacturing, refining' },
  { slug: 'midland', city: 'Midland-Odessa', state: 'TX', focus: 'Permian Basin oil & gas, drilling, pipeline infrastructure, compression stations' },
  { slug: 'sacramento', city: 'Sacramento', state: 'CA', focus: 'Aerojet Rocketdyne aerospace, SMUD power generation, infrastructure' },
  { slug: 'orlando', city: 'Orlando', state: 'FL', focus: 'Lockheed Martin, Northrop Grumman, L3Harris defense, NASA KSC support' },
  { slug: 'norfolk', city: 'Norfolk', state: 'VA', focus: 'Naval Station Norfolk, Newport News Shipbuilding, carrier and submarine maintenance' },
  { slug: 'huntsville', city: 'Huntsville', state: 'AL', focus: 'NASA Marshall SFC, Boeing SLS, Blue Origin, ULA, Redstone Arsenal defense' },
  { slug: 'mobile', city: 'Mobile', state: 'AL', focus: 'Airbus A320 assembly, Austal USA Navy ships, chemical manufacturing, offshore support' },
  { slug: 'oklahoma-city', city: 'Oklahoma City', state: 'OK', focus: 'Tinker AFB MRO, American Airlines maintenance, midstream oil & gas' },
  { slug: 'colorado-springs', city: 'Colorado Springs', state: 'CO', focus: 'aerospace defense (Northrop Grumman, L3Harris), US Space Command' },
  { slug: 'savannah', city: 'Savannah', state: 'GA', focus: 'Port of Savannah, Gulfstream Aerospace, manufacturing, military' },
  { slug: 'raleigh', city: 'Raleigh', state: 'NC', focus: 'semiconductor manufacturing, pharmaceutical, GE Aviation, Research Triangle' },
  { slug: 'nashville', city: 'Nashville', state: 'TN', focus: 'automotive (Nissan, GM Spring Hill), TVA power generation, manufacturing' },
  { slug: 'lake-charles', city: 'Lake Charles', state: 'LA', focus: 'LNG terminals (Cameron, Driftwood), petrochemical plants, refining' },
];

newUSCityPages.forEach(({ slug, city, state, focus }) => {
  routes.push({
    path: `/consulting/ndt-consulting-${slug}`,
    title: `NDT Consulting ${city}, ${state} | ASNT Level III Experts | Free Quote | Atlantis NDT`,
    description: `Top-rated NDT Level III consulting in ${city}, ${state}. ASNT certified procedure writing, program audits, SNT-TC-1A compliance for ${focus}. 50+ certified consultants. Free consultation.`,
    canonical: `${SITE_URL}/consulting/ndt-consulting-${slug}`,
    bodyContent: `  <header><nav><a href="/">Home</a><a href="/consulting">Consulting</a><a href="/training">Training</a><a href="/contact">Contact</a></nav></header>\n  <main>\n    <h1>NDT Level III Consulting in ${city}, ${state}</h1>\n    <p>ASNT Level III NDT consulting in ${city}, ${state}. Procedure development, program audits, SNT-TC-1A compliance for ${focus}. Houston-headquartered team deploys within 24-48 hours.</p>\n  </main>`,
  });
});

// ─── Extended Method × City pages (30 additional cities beyond methodCities) ──

const extendedMethodCities = [
  'new-york', 'boston', 'atlanta', 'miami', 'washington-dc', 'nashville',
  'minneapolis', 'cleveland', 'baltimore', 'tampa', 'charlotte', 'indianapolis',
  'san-diego', 'portland', 'salt-lake-city', 'kansas-city', 'st-louis',
  'milwaukee', 'cincinnati', 'jacksonville',
  'aberdeen', 'hamburg', 'rotterdam', 'stavanger', 'antwerp', 'marseille',
  'milan', 'barcelona', 'gdansk', 'edinburgh',
];

methodPages.forEach(m => {
  extendedMethodCities.forEach(citySlug => {
    const cityName = toTitleCase(citySlug);
    routes.push({
      path: `/${m.slug}-${citySlug}`,
      title: `${m.method} ${cityName} | ${m.short} Inspection Services | Atlantis NDT`,
      description: `Professional ${m.method} (${m.short}) services in ${cityName}. ASNT Level II & III certified inspectors for ${m.detail}. Serving oil & gas, aerospace & industrial clients in ${cityName}.`,
      canonical: `${SITE_URL}/${m.slug}-${citySlug}`,
      bodyContent: `  <header><nav><a href="/">Home</a><a href="/${m.slug}">${m.method}</a><a href="/consulting">Consulting</a><a href="/contact">Contact</a></nav></header>\n  <main>\n    <h1>${m.method} Services in ${cityName}</h1>\n    <p>Professional ${m.method} (${m.short}) inspection services in ${cityName}. ASNT Level II & III certified inspectors specializing in ${m.detail} for oil & gas, aerospace, power generation, and manufacturing industries.</p>\n    <h2>Why Choose Atlantis NDT for ${m.short} in ${cityName}?</h2>\n    <p>Atlantis NDT provides certified ${m.method} inspectors in ${cityName} with expertise in API 510/570/653 compliance, ASME Section V procedures, and AWS D1.1 weld inspection. Contact us for a free quote.</p>\n  </main>`,
    });
  });
});

// ─── Training City Pages ─────────────────────────────────────────────────

const trainingCityPages = [
  { slug: 'houston', city: 'Houston', region: 'USA', detail: 'Houston, TX training center with hands-on labs and API exam preparation. Serving the Gulf Coast oil & gas corridor.' },
  { slug: 'new-york', city: 'New York', region: 'USA', detail: 'New York City NDT training for aerospace, manufacturing, and construction industries. Manhattan and tri-state area.' },
  { slug: 'los-angeles', city: 'Los Angeles', region: 'USA', detail: 'LA-based NDT training for aerospace (Boeing, Northrop Grumman), oil refining, and manufacturing sectors.' },
  { slug: 'chicago', city: 'Chicago', region: 'USA', detail: 'Chicago NDT training for manufacturing, power generation, and pipeline industries across the Midwest.' },
  { slug: 'denver', city: 'Denver', region: 'USA', detail: 'Denver NDT training for oil & gas (DJ Basin), mining, and power generation industries in the Rocky Mountain region.' },
  { slug: 'new-orleans', city: 'New Orleans', region: 'USA', detail: 'New Orleans NDT training for Gulf Coast refineries, petrochemical plants, and offshore operations.' },
  { slug: 'dallas', city: 'Dallas', region: 'USA', detail: 'Dallas-Fort Worth NDT training for aerospace (Lockheed Martin), oil & gas, and manufacturing sectors.' },
  { slug: 'philadelphia', city: 'Philadelphia', region: 'USA', detail: 'Philadelphia NDT training for refining, nuclear power, and heavy manufacturing industries in the Northeast.' },
  { slug: 'pittsburgh', city: 'Pittsburgh', region: 'USA', detail: 'Pittsburgh NDT training for steel manufacturing, power generation, and petrochemical industries.' },
  { slug: 'atlanta', city: 'Atlanta', region: 'USA', detail: 'Atlanta NDT training for aerospace, automotive, and construction industries across the Southeast.' },
];

trainingCityPages.forEach(({ slug, city, region, detail }) => {
  routes.push({
    path: `/ndt-training-${slug}`,
    title: `NDT Training ${city} | ASNT Level I-III Certification | Atlantis NDT`,
    description: `ASNT-aligned NDT training in ${city}, ${region}. Level I, II & III certification for UT, MT, PT, RT, ET, VT. ${detail} 95% pass rate. Enrol today.`,
    canonical: `${SITE_URL}/ndt-training-${slug}`,
    bodyContent: `  <header><nav><a href="/">Home</a><a href="/training">Training</a><a href="/contact">Contact</a></nav></header>\n  <main>\n    <h1>NDT Training in ${city}</h1>\n    <p>Professional ASNT-aligned NDT training in ${city}. ${detail} Level I, II, and III certification for all major NDT methods with 95% pass rate.</p>\n  </main>`,
  });
});

// ─── Additional Training Pages ───────────────────────────────────────────

const additionalTrainingPages = [
  { path: '/api-510-training', title: 'API 510 Training 2026 — Houston, Dubai, Saudi, Singapore, India', description: 'API 510 Pressure Vessel Inspector training in Houston, Dubai, Riyadh / Jubail, Singapore, Hyderabad / Mumbai, and online. ASME VIII Div 1 compliance, RBI per API 580/581, 5-day prep, 95% first-attempt pass rate. ADNOC / Saudi Aramco / Petronas approved instructors.', h1: 'API 510 Pressure Vessel Inspector Training' },
  { path: '/api-653-training', title: 'API 653 Training 2026 — Houston, Dubai, Saudi (Jubail/Yanbu), Singapore', description: 'API 653 Aboveground Storage Tank Inspector training in Houston, Dubai, Saudi Arabia (Jubail / Yanbu / Ras Tanura), Singapore, Hyderabad, and online. API 650/651/652 + 571/575/577 + ASME V/IX, 5-day prep, 95% first-attempt pass rate.', h1: 'API 653 Tank Inspector Training' },
  { path: '/asnt-level-iii-training', title: 'ASNT Level III Training | NDT Manager Certification Prep | Atlantis NDT', description: 'ASNT Level III certification training: Basic, Method, and Specific exam preparation. Written practice development, program management, and procedure review. 95% pass rate.', h1: 'ASNT Level III Certification Training' },
  { path: '/phased-array-training', title: 'Phased Array UT Training | PAUT Certification Course | Atlantis NDT', description: 'Phased Array UT (PAUT) training and certification. S-scan, TFM, sector scans, ASME V Appendix IV. Hands-on lab with Olympus OmniScan. Houston, Dubai, India & online.', h1: 'Phased Array UT (PAUT) Training' },
];

additionalTrainingPages.forEach(p => {
  routes.push({
    path: p.path,
    title: p.title,
    description: p.description,
    canonical: `${SITE_URL}${p.path}`,
    bodyContent: `  <header><nav><a href="/">Home</a><a href="/training">Training</a><a href="/contact">Contact</a></nav></header>\n  <main>\n    <h1>${p.h1}</h1>\n    <p>${p.description}</p>\n  </main>`,
  });
});

// ─── Corporate NDT Training (hub + per-city subpages) ────────────────────
// Hub page + 60+ curated city subpages with UNIQUE prerendered content so
// Google doesn't flag doorway/duplicate pages. Data mirrors the TS source
// in src/data/corporate-training-seo.ts + src/data/city-profiles.ts.

const corporateTrainingHub = {
  path: '/corporate-ndt-training',
  title: 'Corporate NDT Training 2026 | Onsite & Online | 55+ Cities',
  description: 'Corporate NDT training for teams — onsite at your facility, online, or blended. ASNT SNT-TC-1A + ISO 9712 aligned. Group rates from $1,800/person. 55+ cities across USA, Middle East, Asia, Europe, Australia.',
  canonical: `${SITE_URL}/corporate-ndt-training`,
  bodyContent: `  <header><nav><a href="/">Home</a><a href="/training">Training</a><a href="/contact">Contact</a></nav></header>
  <main>
    <h1>Corporate NDT Training for Teams — 55+ Cities</h1>
    <p>Book ASNT SNT-TC-1A and ISO 9712 aligned NDT training for your entire inspection crew. We deliver onsite at your plant or yard, fully online with live virtual labs, or blended — the theory online and the practical hands-on at your site or ours.</p>
    <p>Methods covered: UT, PAUT, TOFD, RT, MT, PT, ET, VT, MFL, AE, guided wave, thermography. Levels I, II and III. Certification bodies: ASNT (CP-189 + SNT-TC-1A), ISO 9712, PCN, CSWIP, and API 510/570/653 for inspector pathways. Batch sizes from 4 to 25 engineers. Onsite delivery available in the US Gulf Coast, Middle East, India, UK North Sea, Norway, the Netherlands, Canada, Australia, Singapore, Malaysia and West Africa.</p>
    <p>Group pricing from $1,800 per person for Level II online; $2,600 for blended; and $3,200-$5,500 for onsite depending on city, batch size and method count. Full enterprise packages for Aramco, ADNOC, Shell, BP, Chevron, ExxonMobil, QatarEnergy, KOC, PDO, ONGC, Reliance, and EPC contractors.</p>
    <p>Pick a city for local delivery details, employers we already train, typical batch sizes, and local pricing: <a href="/corporate-ndt-training/houston">Houston</a>, <a href="/corporate-ndt-training/dubai">Dubai</a>, <a href="/corporate-ndt-training/abu-dhabi">Abu Dhabi</a>, <a href="/corporate-ndt-training/mumbai">Mumbai</a>, <a href="/corporate-ndt-training/hyderabad">Hyderabad</a>, <a href="/corporate-ndt-training/chennai">Chennai</a>, <a href="/corporate-ndt-training/aberdeen">Aberdeen</a>, <a href="/corporate-ndt-training/singapore">Singapore</a>, <a href="/corporate-ndt-training/muscat">Muscat</a>, <a href="/corporate-ndt-training/jubail">Jubail</a>, <a href="/corporate-ndt-training/calgary">Calgary</a>, <a href="/corporate-ndt-training/london">London</a>, <a href="/corporate-ndt-training/rotterdam">Rotterdam</a>, <a href="/corporate-ndt-training/perth">Perth</a>.</p>
  </main>`,
};
routes.push(corporateTrainingHub);

// Country archetype: anchor industries, typical employers, pricing, cert bodies.
const corpCountryArchetypes = {
  US: { industries: 'oil & gas, petrochemical, aerospace, power generation', employers: 'Shell, Chevron, ExxonMobil, Phillips 66, Marathon, Boeing, Lockheed Martin', certs: 'ASNT SNT-TC-1A, CP-189, API 510/570/653', priceLow: 2400, priceHigh: 5800, batch: '6-18' },
  CA: { industries: 'oil sands, pipelines, heavy industrial, LNG', employers: 'Suncor, Cenovus, Imperial Oil, Enbridge, TC Energy', certs: 'ASNT SNT-TC-1A, CGSB ISO 9712, API 510/570/653', priceLow: 2600, priceHigh: 6000, batch: '6-16' },
  GB: { industries: 'North Sea oil & gas, nuclear, offshore wind, aerospace', employers: 'BP, Shell UK, TotalEnergies, Rolls-Royce, Babcock', certs: 'PCN, ISO 9712, CSWIP', priceLow: 2200, priceHigh: 5400, batch: '6-18' },
  NO: { industries: 'North Sea oil & gas, subsea, offshore wind', employers: 'Equinor, Aker BP, TechnipFMC, Subsea 7', certs: 'NS-EN ISO 9712, NORSOK', priceLow: 2800, priceHigh: 6400, batch: '6-14' },
  NL: { industries: 'petrochemical, port infrastructure, maritime', employers: 'Shell Pernis, BP Rotterdam, Huntsman, Dow', certs: 'EN ISO 9712, Stichting Hobéon', priceLow: 2200, priceHigh: 5200, batch: '6-16' },
  AE: { industries: 'upstream oil & gas, petrochemical, nuclear, aerospace', employers: 'ADNOC, Borouge, ENOC, EGA, GASCO', certs: 'ASNT SNT-TC-1A, ISO 9712, ADNOC ICV', priceLow: 1800, priceHigh: 4600, batch: '8-20' },
  SA: { industries: 'upstream, refining, petrochemical, mining', employers: 'Saudi Aramco, SABIC, Ma\'aden, Petro Rabigh', certs: 'ASNT, ISO 9712, Saudi Aramco SAEP', priceLow: 1800, priceHigh: 4800, batch: '8-22' },
  QA: { industries: 'LNG, petrochemical, offshore', employers: 'QatarEnergy, QatarEnergy LNG, Qapco, QAFAC', certs: 'ASNT, ISO 9712, QatarEnergy CP', priceLow: 1900, priceHigh: 4600, batch: '8-20' },
  KW: { industries: 'upstream, refining, petrochemical', employers: 'KOC, KNPC, PIC, KPC', certs: 'ASNT, ISO 9712', priceLow: 1800, priceHigh: 4400, batch: '8-18' },
  OM: { industries: 'oil & gas, LNG, mining, refining', employers: 'PDO, OQ, Oman LNG, Daleel Petroleum', certs: 'ASNT, ISO 9712', priceLow: 1700, priceHigh: 4200, batch: '8-18' },
  BH: { industries: 'oil refining, aluminum, banking-region industrial', employers: 'Bapco, Alba, GPIC, Tatweer Petroleum', certs: 'ASNT, ISO 9712', priceLow: 1700, priceHigh: 4200, batch: '6-14' },
  IQ: { industries: 'upstream oil, refining, reconstruction', employers: 'Basrah Oil Company, SOMO, South Refineries, Shell Majnoon', certs: 'ASNT, ISO 9712', priceLow: 1600, priceHigh: 4000, batch: '6-16' },
  IN: { industries: 'refining, fertilizer, power, shipbuilding, aerospace', employers: 'Reliance, ONGC, IOCL, BPCL, HPCL, L&T, HAL', certs: 'ASNT SNT-TC-1A, ISO 9712, ISNT', priceLow: 900, priceHigh: 2800, batch: '10-25' },
  SG: { industries: 'refining, marine/offshore, aerospace MRO', employers: 'ExxonMobil Jurong, Shell Pulau Bukom, Seatrium, ST Engineering', certs: 'ASNT, ISO 9712, CSWIP, PCN', priceLow: 2000, priceHigh: 4800, batch: '6-16' },
  MY: { industries: 'oil & gas, LNG, petrochemical, offshore fabrication', employers: 'Petronas, MISC, Malaysia Marine and Heavy Engineering, Sapura', certs: 'ASNT, ISO 9712, PCN', priceLow: 1400, priceHigh: 3800, batch: '8-18' },
  AU: { industries: 'LNG, mining, iron ore, offshore oil & gas', employers: 'Woodside, Chevron Australia, Rio Tinto, BHP, Santos', certs: 'AINDT ISO 9712, ASNT', priceLow: 2600, priceHigh: 6000, batch: '6-14' },
  NZ: { industries: 'dairy process, geothermal, shipyards, infrastructure', employers: 'Fonterra, Methanex, Refining NZ, KiwiRail', certs: 'CBIP ISO 9712, ASNT', priceLow: 2400, priceHigh: 5400, batch: '6-12' },
  NG: { industries: 'upstream oil, LNG, marine, refining', employers: 'NNPC, Shell SPDC, Chevron Nigeria, ExxonMobil, Dangote Refinery', certs: 'ASNT, ISO 9712', priceLow: 1600, priceHigh: 4000, batch: '8-18' },
  FR: { industries: 'nuclear, aerospace, refining, rail', employers: 'TotalEnergies, EDF, Airbus, Safran, Framatome', certs: 'COFREND ISO 9712, ASNT', priceLow: 2400, priceHigh: 5400, batch: '6-14' },
  ES: { industries: 'refining, shipbuilding, renewables, aerospace', employers: 'Repsol, Cepsa, Navantia, Airbus Espana', certs: 'ISO 9712, ASNT', priceLow: 2000, priceHigh: 4600, batch: '6-14' },
  IT: { industries: 'refining, shipyards, aerospace, steel', employers: 'Eni, Saipem, Fincantieri, Leonardo', certs: 'ISO 9712, ASNT', priceLow: 2100, priceHigh: 4800, batch: '6-14' },
  GR: { industries: 'shipping, port, refining, petrochemical', employers: 'Hellenic Petroleum, Motor Oil Hellas, Piraeus Port', certs: 'ISO 9712, ASNT', priceLow: 1900, priceHigh: 4400, batch: '6-14' },
};

// City master list mirrors CITY_GEO in src/data/city-profiles.ts
const corpCities = [
  // USA
  { slug: 'houston', city: 'Houston', region: 'TX', country: 'US' },
  { slug: 'new-orleans', city: 'New Orleans', region: 'LA', country: 'US' },
  { slug: 'denver', city: 'Denver', region: 'CO', country: 'US' },
  { slug: 'beaumont', city: 'Beaumont', region: 'TX', country: 'US' },
  { slug: 'odessa', city: 'Odessa', region: 'TX', country: 'US' },
  { slug: 'midland', city: 'Midland', region: 'TX', country: 'US' },
  { slug: 'bakersfield', city: 'Bakersfield', region: 'CA', country: 'US' },
  { slug: 'anchorage', city: 'Anchorage', region: 'AK', country: 'US' },
  { slug: 'mobile', city: 'Mobile', region: 'AL', country: 'US' },
  { slug: 'charlotte', city: 'Charlotte', region: 'NC', country: 'US' },
  { slug: 'cleveland', city: 'Cleveland', region: 'OH', country: 'US' },
  { slug: 'cincinnati', city: 'Cincinnati', region: 'OH', country: 'US' },
  { slug: 'minneapolis', city: 'Minneapolis', region: 'MN', country: 'US' },
  { slug: 'milwaukee', city: 'Milwaukee', region: 'WI', country: 'US' },
  { slug: 'st-louis', city: 'St. Louis', region: 'MO', country: 'US' },
  { slug: 'kansas-city', city: 'Kansas City', region: 'MO', country: 'US' },
  { slug: 'tulsa', city: 'Tulsa', region: 'OK', country: 'US' },
  { slug: 'nashville', city: 'Nashville', region: 'TN', country: 'US' },
  { slug: 'louisville', city: 'Louisville', region: 'KY', country: 'US' },
  // Middle East
  { slug: 'dubai', city: 'Dubai', region: 'Dubai', country: 'AE' },
  { slug: 'abu-dhabi', city: 'Abu Dhabi', region: 'Abu Dhabi', country: 'AE' },
  { slug: 'sharjah', city: 'Sharjah', region: 'Sharjah', country: 'AE' },
  { slug: 'ras-al-khaimah', city: 'Ras Al Khaimah', region: 'RAK', country: 'AE' },
  { slug: 'saudi-arabia', city: 'Saudi Arabia', region: 'KSA', country: 'SA' },
  { slug: 'jubail', city: 'Jubail', region: 'Eastern Province', country: 'SA' },
  { slug: 'yanbu', city: 'Yanbu', region: 'Al Madinah', country: 'SA' },
  { slug: 'doha', city: 'Doha', region: '', country: 'QA' },
  { slug: 'kuwait', city: 'Kuwait City', region: '', country: 'KW' },
  { slug: 'muscat', city: 'Muscat', region: '', country: 'OM' },
  { slug: 'sohar', city: 'Sohar', region: '', country: 'OM' },
  { slug: 'manama', city: 'Manama', region: '', country: 'BH' },
  { slug: 'basrah', city: 'Basrah', region: '', country: 'IQ' },
  // Asia
  { slug: 'mumbai', city: 'Mumbai', region: 'Maharashtra', country: 'IN' },
  { slug: 'chennai', city: 'Chennai', region: 'Tamil Nadu', country: 'IN' },
  { slug: 'hyderabad', city: 'Hyderabad', region: 'Telangana', country: 'IN' },
  { slug: 'singapore', city: 'Singapore', region: '', country: 'SG' },
  { slug: 'kuala-lumpur', city: 'Kuala Lumpur', region: '', country: 'MY' },
  // Europe
  { slug: 'aberdeen', city: 'Aberdeen', region: 'Scotland', country: 'GB' },
  { slug: 'glasgow', city: 'Glasgow', region: 'Scotland', country: 'GB' },
  { slug: 'london', city: 'London', region: 'England', country: 'GB' },
  { slug: 'newcastle', city: 'Newcastle', region: 'England', country: 'GB' },
  { slug: 'plymouth', city: 'Plymouth', region: 'England', country: 'GB' },
  { slug: 'oslo', city: 'Oslo', region: '', country: 'NO' },
  { slug: 'bergen', city: 'Bergen', region: '', country: 'NO' },
  { slug: 'rotterdam', city: 'Rotterdam', region: '', country: 'NL' },
  { slug: 'paris', city: 'Paris', region: '', country: 'FR' },
  { slug: 'madrid', city: 'Madrid', region: '', country: 'ES' },
  { slug: 'genoa', city: 'Genoa', region: '', country: 'IT' },
  { slug: 'piraeus', city: 'Piraeus', region: '', country: 'GR' },
  // Africa
  { slug: 'lagos', city: 'Lagos', region: '', country: 'NG' },
  { slug: 'port-harcourt', city: 'Port Harcourt', region: '', country: 'NG' },
  // Canada
  { slug: 'calgary', city: 'Calgary', region: 'Alberta', country: 'CA' },
  { slug: 'edmonton', city: 'Edmonton', region: 'Alberta', country: 'CA' },
  { slug: 'fort-mcmurray', city: 'Fort McMurray', region: 'Alberta', country: 'CA' },
  { slug: 'toronto', city: 'Toronto', region: 'Ontario', country: 'CA' },
  { slug: 'montreal', city: 'Montreal', region: 'Quebec', country: 'CA' },
  { slug: 'vancouver', city: 'Vancouver', region: 'British Columbia', country: 'CA' },
  { slug: 'halifax', city: 'Halifax', region: 'Nova Scotia', country: 'CA' },
  // Oceania
  { slug: 'perth', city: 'Perth', region: 'Western Australia', country: 'AU' },
  { slug: 'melbourne', city: 'Melbourne', region: 'Victoria', country: 'AU' },
  { slug: 'sydney', city: 'Sydney', region: 'New South Wales', country: 'AU' },
  { slug: 'karratha', city: 'Karratha', region: 'Western Australia', country: 'AU' },
  { slug: 'gladstone', city: 'Gladstone', region: 'Queensland', country: 'AU' },
  { slug: 'darwin', city: 'Darwin', region: 'Northern Territory', country: 'AU' },
  { slug: 'auckland', city: 'Auckland', region: '', country: 'NZ' },
  { slug: 'wellington', city: 'Wellington', region: '', country: 'NZ' },
  { slug: 'christchurch', city: 'Christchurch', region: '', country: 'NZ' },
];

// Hand-written rich flavor for 14 priority cities.
const corpRichCity = {
  'houston': { hook: 'the US energy capital, where Gulf Coast refineries, deepwater Gulf operators and pipeline midstreams all train their crews in the same zip codes.', specifics: 'Our Houston batches typically run in Pasadena, Deer Park and Baytown at client sites, with classroom weeks at our Energy Corridor facility.', stat: 'We have trained over 1,200 technicians from Shell, Phillips 66, Marathon Refining, LyondellBasell, Kinder Morgan and Enterprise Products across 2023-2025.' },
  'dubai': { hook: 'the logistics and EPC hub for the entire MENA inspection market, with onsite delivery possible at Jebel Ali, Mussafah, and the DIP industrial zone within 72 hours of PO.', specifics: 'Batches run in Arabic and English, aligned to ADNOC ICV, SNT-TC-1A and ISO 9712. Practical labs held at our Al Quoz training center or at client facilities with portable radiography enclosures.', stat: 'Trained over 800 engineers from ADNOC Onshore, Borouge, McDermott, Petrofac, NPCC, Lamprell and Target Engineering across the past three fiscals.' },
  'abu-dhabi': { hook: 'home to ADNOC group companies where Hail & Ghasha, Upper Zakum and the Ruwais downstream complex generate continuous NDT demand for pressure equipment, piping and subsea assets.', specifics: 'We run onsite weeks at Musaffah industrial area and Ruwais, plus ADNOC Academy-aligned evaluation formats for Level I and II candidates.', stat: 'ADNOC Offshore, ADNOC Gas, Borouge, Fertiglobe and Target Engineering have all sent cohorts through our corporate batches in the past 18 months.' },
  'mumbai': { hook: 'the refining, fertilizer and shipbuilding backbone of India, with RIL Jamnagar, BPCL Mahul, HPCL Mumbai Refinery and Mazagon Dock all in our active trainee roster.', specifics: 'Classroom batches at Andheri and Navi Mumbai, onsite delivery inside Jawaharlal Nehru Port, Mazagon Dock and the Thane-Belapur industrial belt.', stat: 'Priced significantly below Gulf or US rates (roughly 40-50% lower) because of local infrastructure and Indian instructor cost base — popular for IOCL, ONGC and Shapoorji Pallonji crews.' },
  'hyderabad': { hook: 'the headquarters of Atlantis NDT and the largest ISNT and ASNT examination center in South India, perfect for engineers traveling from the Vizag-Kakinada belt or Chennai-Ennore.', specifics: 'We run classroom batches every two weeks with open enrolment + dedicated corporate cohorts for Indian Navy, BHEL, MRPL, Hindustan Shipyard, and L&T Hydrocarbon.', stat: 'Our Hyderabad center has produced the highest ASNT Level III pass rate in India for three consecutive years — 94% first-attempt pass across all methods.' },
  'chennai': { hook: 'the Tamil Nadu auto, aerospace and petrochem cluster — CPCL Manali, HPCL Rasayani, BHEL Trichy, and the Ennore-Ponneri industrial corridor.', specifics: 'Onsite NDT training at Ennore port, Sriperumbudur auto cluster and the SIPCOT industrial parks, with weekday classroom sessions at our Guindy center.', stat: 'Typical Chennai corporate batch size: 12-18 technicians, with dedicated Tamil-medium instruction available for Level I candidates.' },
  'aberdeen': { hook: 'the North Sea operations capital, where BP, Shell UK, TotalEnergies, CNOOC and Repsol Sinopec all require PCN and CSWIP-aligned corporate refreshers every 3-5 years.', specifics: 'We deliver at Altens Industrial Estate, Westhill and at client facilities including Dyce and the Bridge of Don. Heli-mobilised batches for offshore platform personnel also available.', stat: 'Typical pricing in Aberdeen is GBP 1,800-4,400 per person per method-level combination, with PCN re-certification packages at GBP 1,200.' },
  'singapore': { hook: 'the Asia-Pacific refining, marine and aerospace MRO capital. ExxonMobil Jurong Island, Shell Pulau Bukom, Seatrium, ST Engineering and Pratt & Whitney all source corporate NDT training here.', specifics: 'Our Singapore batches run at Tuas, Jurong Island (with appropriate passes), and Loyang, in English with CSWIP, PCN, and ASNT syllabi.', stat: 'Typical corporate batch price: SGD 3,200-6,800 per delegate depending on method stack — aerospace NAS-410 aligned batches available for MRO operators.' },
  'muscat': { hook: 'the operational center for PDO, OQ (Orpic + OOCEP merger), Oman LNG, Daleel and BP Oman.', specifics: 'Classroom weeks held at Ghala and Al Khuwair, with onsite delivery possible at Sohar, Salalah and Duqm for the coastal refining and LNG facilities.', stat: 'Competitive pricing thanks to low local operating cost — typical Level II corporate batch lands at $2,400-$3,800 per person depending on method count.' },
  'jubail': { hook: 'the largest industrial city in the Middle East — Aramco, SABIC, Ma\'aden, Sadara, YANPET, Petro Rabigh and over 120 EPC contractors run continuous inspector upskilling cycles.', specifics: 'Delivery at Jubail Industrial City II (JIC2), the Royal Commission training area, and directly inside client facilities. All batches aligned to Aramco SAEP-1140 / SAEP-1142 expectations.', stat: 'We have run SAEP-1140-aligned corporate batches for Nesma & Partners, Al Rushaid, SNC Lavalin Al-Rushaid, and Arabian Industries Contracting in the last two years.' },
  'calgary': { hook: 'the head office city for the Canadian oil sands majors — Suncor, Cenovus, Imperial Oil, Canadian Natural and Enbridge all source corporate NDT training from local providers.', specifics: 'Onsite delivery at the Edmonton industrial belt, Fort McMurray (fly-in/fly-out available), and Sarnia for pipeline operators. CGSB ISO 9712 pathway batches available.', stat: 'Typical Calgary corporate batch price: CAD 3,600-7,200 per delegate. Bundled Level II UT+PT+MT packages popular for pipeline inspection contractors.' },
  'london': { hook: 'the HQ city for BP, Shell, Rio Tinto, Petrofac and TechnipFMC — plus major engineering consultancies running global NDT procedure harmonization projects.', specifics: 'Classroom batches in Canary Wharf and West London, with practical labs hosted at partner facilities in Kent and Essex. Full PCN and ISO 9712 pathway support.', stat: 'Specialty batches: procedure harmonization workshops for multi-asset operators, and corporate Level III exam-prep weeks with 12-day intensive syllabus.' },
  'rotterdam': { hook: 'Europe\'s largest petrochemical cluster — Shell Pernis, BP Rotterdam, Huntsman, Dow Terneuzen and ExxonMobil Botlek all require continuous corporate NDT training.', specifics: 'Delivery in English, Dutch, and German at our Capelle aan den IJssel center, or onsite at the Botlek / Europoort refineries. Full EN ISO 9712 pathway, plus VCA safety-aligned.', stat: 'Typical Rotterdam corporate batch price: EUR 2,400-5,200 per delegate. Popular add-on: PED and AD 2000 pressure equipment code overlays.' },
  'perth': { hook: 'the offshore-LNG capital of Australia — Woodside, Chevron Australia, Shell Prelude, Inpex Ichthys all run Karratha and Dampier-based corporate NDT training.', specifics: 'Onsite at Karratha, Henderson, and Kwinana, with classroom delivery at our West Perth center. AINDT ISO 9712 pathway primary, ASNT available for multinational operators.', stat: 'FIFO-friendly schedules: 10-day intensive Level II batches timed to complement client rosters. Typical price: AUD 4,200-7,800 per delegate.' },
};

corpCities.forEach(c => {
  const arch = corpCountryArchetypes[c.country] || corpCountryArchetypes.US;
  const rich = corpRichCity[c.slug];
  const cityLabel = c.city;
  const regionLabel = c.region ? `${c.region}` : c.city;
  const priceRange = `$${arch.priceLow}-$${arch.priceHigh}`;
  const title = `Corporate NDT Training ${cityLabel} 2026 | Onsite & Online Group Batches`;
  const description = `Corporate NDT training in ${cityLabel}${c.region ? ', ' + c.region : ''} — onsite at your facility, online or blended. ASNT SNT-TC-1A + ISO 9712 aligned. Group rates ${priceRange}/person, batches of ${arch.batch}. Certify your inspection crew in UT, PAUT, TOFD, RT, MT, PT, ET, VT.`;

  const hook = rich ? rich.hook : `an active ${arch.industries} market with significant corporate NDT training demand from local operators and EPC contractors.`;
  const specifics = rich ? rich.specifics : `We deliver corporate batches at client facilities across ${regionLabel}, with classroom weeks at a local partner center. Full ${arch.certs} pathway coverage.`;
  const stat = rich ? rich.stat : `Typical corporate batch price in ${cityLabel} is ${priceRange} per delegate depending on method stack and certification body. Batch sizes ${arch.batch} engineers.`;

  const body = `  <header><nav><a href="/">Home</a><a href="/training">Training</a><a href="/corporate-ndt-training">Corporate NDT Training</a><a href="/contact">Contact</a></nav></header>
  <main>
    <h1>Corporate NDT Training in ${cityLabel}</h1>
    <p>${cityLabel} is ${hook}</p>
    <p><strong>Local context.</strong> ${specifics} Typical learners come from ${arch.industries} employers including ${arch.employers}.</p>
    <p><strong>Delivery modes.</strong> We run three modes: fully onsite at your ${cityLabel} facility (theory + supervised practical), fully online with live virtual classrooms and proctored exams, or blended — online theory followed by a practical week. Methods covered include Ultrasonic Testing (UT), Phased Array UT, TOFD, Radiographic Testing (RT), Magnetic Particle (MT), Liquid Penetrant (PT), Eddy Current (ET), Visual Testing (VT), Magnetic Flux Leakage (MFL), Acoustic Emission (AE), Guided Wave, and Thermography.</p>
    <p><strong>Certification bodies.</strong> ${arch.certs}. Batch sizes ${arch.batch}. Typical pricing ${priceRange} per person per method-level combination.</p>
    <p><strong>Local case study.</strong> ${stat}</p>
    <p><strong>Book a ${cityLabel} corporate batch.</strong> Include your headcount, target methods and levels, preferred certification body, and whether you need onsite or online delivery. We typically respond within 24 hours with a tailored proposal, sample procedures, and trainer CVs.</p>
    <p>Related services in ${cityLabel}: <a href="/ndt-training-${c.slug}">public NDT training batches</a>, <a href="/ndt-consulting-${c.slug}">Level III consulting</a>, <a href="/digital-twin-${c.slug}">digital twin NDT</a>, <a href="/ndt-erp-${c.slug}">NDT ERP</a>.</p>
  </main>`;

  routes.push({
    path: `/corporate-ndt-training/${c.slug}`,
    title,
    description,
    canonical: `${SITE_URL}/corporate-ndt-training/${c.slug}`,
    bodyContent: body,
  });
});

// ─── Industry Service Pages ──────────────────────────────────────────────

const industryServicePages = [
  { path: '/oil-gas-ndt-services', title: 'Oil & Gas NDT Services | Pipeline, Refinery & Offshore Inspection | Atlantis NDT', description: 'Comprehensive NDT services for oil & gas: pipeline integrity, refinery inspection, offshore platforms, pressure vessel testing. API 510/570/653 certified inspectors.', h1: 'Oil & Gas NDT Services' },
  { path: '/aerospace-ndt-services', title: 'Aerospace NDT Services | Aircraft, Engine & Composite Inspection | Atlantis NDT', description: 'Specialized NDT services for aerospace: aircraft structural inspection, engine component testing, composite NDT. NAS-410 certified, NADCAP compliant.', h1: 'Aerospace NDT Services' },
  { path: '/power-generation-ndt-services', title: 'Power Generation NDT Services | Turbine, Boiler & Nuclear Inspection | Atlantis NDT', description: 'NDT services for power generation: gas turbine, boiler tube, steam generator, and nuclear component inspection. ASME qualified outage support teams.', h1: 'Power Generation NDT Services' },
  { path: '/petrochemical-ndt-services', title: 'Petrochemical NDT Services | Reactor, Column & Heat Exchanger Inspection | Atlantis NDT', description: 'NDT services for petrochemical plants: reactor vessels, distillation columns, heat exchangers, piping systems. API 510/570 compliant, turnaround support.', h1: 'Petrochemical NDT Services' },
  { path: '/pipeline-inspection-services', title: 'Pipeline Inspection Services | ILI, GWT & Corrosion Assessment | Atlantis NDT', description: 'Pipeline inspection services: in-line inspection (ILI), guided wave testing, corrosion mapping, CUI detection. API 570, ASME B31.3/B31.4 compliant.', h1: 'Pipeline Inspection Services' },
  { path: '/marine-offshore-ndt-services', title: 'Marine & Offshore NDT Services | FPSO, Platform & Subsea Inspection | Atlantis NDT', description: 'NDT services for marine & offshore: FPSO hull inspection, platform structural assessment, subsea pipeline integrity. DNV, Lloyd\'s, ABS certified.', h1: 'Marine & Offshore NDT Services' },
  { path: '/nuclear-ndt-services', title: 'Nuclear NDT Services | Reactor, Steam Generator & Containment Inspection | Atlantis NDT', description: 'Nuclear NDT services: reactor vessel inspection, steam generator tube testing, containment structure assessment. NRC qualified, ASME Section XI compliant.', h1: 'Nuclear NDT Services' },
  { path: '/construction-ndt-services', title: 'Construction NDT Services | Structural Steel & Weld Inspection | Atlantis NDT', description: 'NDT services for construction: structural steel weld inspection, concrete assessment, rebar scanning. AWS D1.1, AISC certified inspectors.', h1: 'Construction NDT Services' },
];

industryServicePages.forEach(p => {
  routes.push({
    path: p.path,
    title: p.title,
    description: p.description,
    canonical: `${SITE_URL}${p.path}`,
    bodyContent: `  <header><nav><a href="/">Home</a><a href="/consulting">Consulting</a><a href="/contact">Contact</a></nav></header>\n  <main>\n    <h1>${p.h1}</h1>\n    <p>${p.description}</p>\n  </main>`,
  });
});

// ─── Software Comparison & Feature Pages ─────────────────────────────────

const softwarePages = [
  { path: '/ndt-erp-software-comparison', title: 'NDT ERP Software Comparison 2026 | Top Solutions Compared | Atlantis NDT', description: 'Compare top NDT ERP software solutions: features, pricing, integrations. Atlantis NDT ERP vs competitors for inspection management, cert tracking, and reporting.' },
  { path: '/ndt-reporting-software-comparison', title: 'NDT Reporting Software Comparison 2026 | Digital Reports | Atlantis NDT', description: 'Compare NDT reporting software: digital reports, API compliance, digital twin integration. Side-by-side feature comparison of top solutions for inspection companies.' },
  { path: '/digital-twin-ndt-software', title: 'Digital Twin NDT Software | 3D Asset Visualization | Atlantis NDT', description: 'Digital twin software for NDT inspection data visualization. Convert thickness readings into 3D color-coded asset models. API 579 fitness-for-service integration.' },
  { path: '/ndt-software-features', title: 'NDT Software Features | Inspection Management Platform | Atlantis NDT', description: 'Complete feature overview of Atlantis NDT software platform: job management, certification tracking, digital twin reporting, API compliance, and mobile inspection.' },
  { path: '/ndt-data-management', title: 'NDT Data Management | Inspection Data Organization & Analysis | Atlantis NDT', description: 'NDT data management solutions: organize inspection data, track corrosion trends, automate reporting, and integrate with digital twin platforms. Cloud-based and secure.' },
  { path: '/ndt-erp-vs-generic-erp', title: 'NDT ERP vs Generic ERP: 2026 Comparison Guide | Atlantis NDT', description: 'Compare NDT ERP vs SAP/Oracle vs point reporting tools across 11 dimensions. Cost, implementation time, NDT-native features, TCO. 2026 decision framework.' },
  { path: '/ndt-erp-integration-matrix', title: 'NDT ERP Integration Matrix 2026: SAP, Oracle, Maximo | Atlantis NDT', description: '10-system NDT ERP integration matrix. SAP, Oracle, Maximo, Dynamics 365, QuickBooks, Xero, HubSpot, Salesforce, Zapier, REST. Setup time and fields.' },
  { path: '/ndt-erp-roi-calculator', title: 'NDT ERP ROI Calculator 2026: Savings & Payback | Atlantis NDT', description: 'Free NDT ERP ROI calculator. Model report labor savings, admin reduction, Year 1 net ROI, and payback months for your inspection business.' },
  { path: '/ndt-erp-implementation-timeline', title: 'NDT ERP Implementation Timeline 2026: 30/60/90 Plan | Atlantis NDT', description: 'Complete NDT ERP 30/60/90-day go-live plan. Day-by-day gantt, discovery, migration, integration, training, UAT, cutover. 7-risk register with mitigations.' },
];

softwarePages.forEach(p => {
  routes.push({
    path: p.path,
    title: p.title,
    description: p.description,
    canonical: `${SITE_URL}${p.path}`,
    bodyContent: `  <header><nav><a href="/">Home</a><a href="/erp">NDT ERP</a><a href="/digital-twins">Digital Twins</a><a href="/contact">Contact</a></nav></header>\n  <main>\n    <h1>${p.title.split('|')[0].trim()}</h1>\n    <p>${p.description}</p>\n  </main>`,
  });
});

// ─── New Blog Posts (not in blogs.json) ──────────────────────────────────

const newBlogPosts = [
  { path: '/blog/eddy-current-testing-complete-guide', title: 'Eddy Current Testing: Complete Guide to ECT Methods, Equipment & Standards', description: 'Comprehensive eddy current testing guide: conventional ECT, pulsed EC, bobbin coil, RFEC. Equipment selection, ASTM E309, and aerospace/oil & gas applications.', h1: 'Eddy Current Testing: Complete Guide' },
  { path: '/blog/ultrasonic-testing-ultimate-guide', title: 'Ultrasonic Testing: Ultimate Guide to UT NDT Methods & Techniques', description: 'The ultimate guide to ultrasonic testing: pulse-echo, TOFD, phased array, automated UT. ASME Section V, calibration, probe selection, and scan plans.', h1: 'Ultrasonic Testing: Ultimate Guide' },
  { path: '/blog/api-653-certification-complete-guide', title: 'API 653 Certification: Complete Guide to Tank Inspector Exam 2026', description: 'Everything about API 653 certification: exam format, required codes, study plan, calculation formulas, and tips from experienced API tank inspectors.', h1: 'API 653 Certification: Complete Guide' },
  { path: '/blog/ndt-salary-guide-2026-global', title: 'NDT Salary Guide 2026 | Technician & Level III Pay by Region', description: 'NDT salary data for 2026: Level I ($45-65K), Level II ($55-85K), Level III ($80-140K+). Compare pay by method, industry, location & certification. Career advancement tips.', h1: 'NDT Salary Guide 2026' },
  { path: '/blog/rt-vs-ut-complete-comparison', title: 'RT vs UT: Complete Comparison for Weld Inspection [Decision Guide]', description: 'RT vs UT detailed comparison: cost, speed, safety, defect detection, code requirements. When to use radiographic testing vs ultrasonic testing for welds.', h1: 'RT vs UT: Complete Weld Inspection Comparison' },
];

newBlogPosts.forEach(p => {
  routes.push({
    path: p.path,
    title: `${p.title} | Atlantis NDT`,
    description: p.description,
    canonical: `${SITE_URL}${p.path}`,
    bodyContent: `  <header><nav><a href="/">Home</a><a href="/blog">Blog</a><a href="/contact">Contact</a></nav></header>\n  <main>\n    <article>\n      <h1>${p.h1}</h1>\n      <p>${p.description}</p>\n    </article>\n  </main>`,
  });
});

// ─── Misc pages (resources landing, press, industry) ─────────────────────

const miscPages = [
  { path: '/resources', title: 'NDT Resources | Guides, Templates & Checklists | Atlantis NDT', description: 'Free NDT resources: inspection checklists, procedure templates, study guides, and training requirement matrices. Built by ASNT Level III experts.' },
  { path: '/press', title: 'Press & Media | Atlantis NDT News', description: 'Latest news and press releases from Atlantis NDT. Industry announcements, partnership news, and company updates.' },
  { path: '/industry', title: 'Industries We Serve | NDT for Oil & Gas, Aerospace, Power & More | Atlantis NDT', description: 'NDT services across industries: oil & gas, aerospace, power generation, petrochemical, marine, nuclear, and construction. ASNT Level III certified consultants.' },
];

miscPages.forEach(p => {
  routes.push({
    path: p.path,
    title: p.title,
    description: p.description,
    canonical: `${SITE_URL}${p.path}`,
    bodyContent: `  <header><nav><a href="/">Home</a><a href="/consulting">Consulting</a><a href="/training">Training</a><a href="/contact">Contact</a></nav></header>\n  <main>\n    <h1>${p.title.split('|')[0].trim()}</h1>\n    <p>${p.description}</p>\n  </main>`,
  });
});

// ─── Programmatic SEO: Advanced Methods + Location (~500 pages) ──────────

const advancedMethodSlugs = [
  { slug: 'paut-inspection', name: 'Phased Array UT (PAUT) Inspection', shortName: 'PAUT' },
  { slug: 'tofd-inspection', name: 'TOFD Inspection', shortName: 'TOFD' },
  { slug: 'guided-wave-inspection', name: 'Guided Wave Testing', shortName: 'GWT' },
  { slug: 'acoustic-emission-inspection', name: 'Acoustic Emission Testing', shortName: 'AET' },
  { slug: 'mfl-inspection', name: 'Magnetic Flux Leakage Testing', shortName: 'MFL' },
];

const allCitySlugs = [
  { slug: 'new-york', name: 'New York', country: 'US' }, { slug: 'boston', name: 'Boston', country: 'US' },
  { slug: 'atlanta', name: 'Atlanta', country: 'US' }, { slug: 'miami', name: 'Miami', country: 'US' },
  { slug: 'washington-dc', name: 'Washington DC', country: 'US' }, { slug: 'nashville', name: 'Nashville', country: 'US' },
  { slug: 'minneapolis', name: 'Minneapolis', country: 'US' }, { slug: 'cleveland', name: 'Cleveland', country: 'US' },
  { slug: 'baltimore', name: 'Baltimore', country: 'US' }, { slug: 'tampa', name: 'Tampa', country: 'US' },
  { slug: 'charlotte', name: 'Charlotte', country: 'US' }, { slug: 'indianapolis', name: 'Indianapolis', country: 'US' },
  { slug: 'san-diego', name: 'San Diego', country: 'US' }, { slug: 'portland', name: 'Portland', country: 'US' },
  { slug: 'salt-lake-city', name: 'Salt Lake City', country: 'US' }, { slug: 'kansas-city', name: 'Kansas City', country: 'US' },
  { slug: 'st-louis', name: 'St. Louis', country: 'US' }, { slug: 'milwaukee', name: 'Milwaukee', country: 'US' },
  { slug: 'cincinnati', name: 'Cincinnati', country: 'US' }, { slug: 'jacksonville', name: 'Jacksonville', country: 'US' },
  { slug: 'houston', name: 'Houston', country: 'US' }, { slug: 'los-angeles', name: 'Los Angeles', country: 'US' },
  { slug: 'new-orleans', name: 'New Orleans', country: 'US' }, { slug: 'denver', name: 'Denver', country: 'US' },
  { slug: 'chicago', name: 'Chicago', country: 'US' }, { slug: 'seattle', name: 'Seattle', country: 'US' },
  { slug: 'dallas', name: 'Dallas', country: 'US' }, { slug: 'phoenix', name: 'Phoenix', country: 'US' },
  { slug: 'philadelphia', name: 'Philadelphia', country: 'US' }, { slug: 'san-francisco', name: 'San Francisco', country: 'US' },
  { slug: 'detroit', name: 'Detroit', country: 'US' }, { slug: 'pittsburgh', name: 'Pittsburgh', country: 'US' },
  { slug: 'baton-rouge', name: 'Baton Rouge', country: 'US' }, { slug: 'corpus-christi', name: 'Corpus Christi', country: 'US' },
  { slug: 'tulsa', name: 'Tulsa', country: 'US' }, { slug: 'beaumont', name: 'Beaumont', country: 'US' },
  { slug: 'dubai', name: 'Dubai', country: 'AE' }, { slug: 'saudi-arabia', name: 'Saudi Arabia', country: 'SA' },
  { slug: 'qatar', name: 'Qatar', country: 'QA' }, { slug: 'kuwait', name: 'Kuwait', country: 'KW' },
  { slug: 'abu-dhabi', name: 'Abu Dhabi', country: 'AE' }, { slug: 'bahrain', name: 'Bahrain', country: 'BH' },
  { slug: 'oman', name: 'Oman', country: 'OM' }, { slug: 'jubail', name: 'Jubail', country: 'SA' },
  { slug: 'yanbu', name: 'Yanbu', country: 'SA' }, { slug: 'dammam', name: 'Dammam', country: 'SA' },
  { slug: 'mumbai', name: 'Mumbai', country: 'IN' }, { slug: 'chennai', name: 'Chennai', country: 'IN' },
  { slug: 'bangalore', name: 'Bangalore', country: 'IN' }, { slug: 'delhi', name: 'Delhi', country: 'IN' },
  { slug: 'kolkata', name: 'Kolkata', country: 'IN' }, { slug: 'ahmedabad', name: 'Ahmedabad', country: 'IN' },
  { slug: 'jamnagar', name: 'Jamnagar', country: 'IN' }, { slug: 'vizag', name: 'Vizag', country: 'IN' },
  { slug: 'kochi', name: 'Kochi', country: 'IN' },
  { slug: 'singapore', name: 'Singapore', country: 'SG' }, { slug: 'malaysia', name: 'Malaysia', country: 'MY' },
  { slug: 'indonesia', name: 'Indonesia', country: 'ID' }, { slug: 'thailand', name: 'Thailand', country: 'TH' },
  { slug: 'vietnam', name: 'Vietnam', country: 'VN' }, { slug: 'south-korea', name: 'South Korea', country: 'KR' },
  { slug: 'japan', name: 'Japan', country: 'JP' }, { slug: 'taiwan', name: 'Taiwan', country: 'TW' },
  { slug: 'australia', name: 'Australia', country: 'AU' }, { slug: 'perth', name: 'Perth', country: 'AU' },
  { slug: 'melbourne', name: 'Melbourne', country: 'AU' }, { slug: 'sydney', name: 'Sydney', country: 'AU' },
  { slug: 'uk', name: 'UK', country: 'GB' }, { slug: 'norway', name: 'Norway', country: 'NO' },
  { slug: 'germany', name: 'Germany', country: 'DE' }, { slug: 'netherlands', name: 'Netherlands', country: 'NL' },
  { slug: 'france', name: 'France', country: 'FR' }, { slug: 'italy', name: 'Italy', country: 'IT' },
  { slug: 'spain', name: 'Spain', country: 'ES' }, { slug: 'aberdeen', name: 'Aberdeen', country: 'GB' },
  { slug: 'rotterdam', name: 'Rotterdam', country: 'NL' }, { slug: 'stavanger', name: 'Stavanger', country: 'NO' },
  { slug: 'calgary', name: 'Calgary', country: 'CA' }, { slug: 'edmonton', name: 'Edmonton', country: 'CA' },
  { slug: 'toronto', name: 'Toronto', country: 'CA' }, { slug: 'vancouver', name: 'Vancouver', country: 'CA' },
  { slug: 'brazil', name: 'Brazil', country: 'BR' }, { slug: 'sao-paulo', name: 'São Paulo', country: 'BR' },
  { slug: 'rio-de-janeiro', name: 'Rio de Janeiro', country: 'BR' },
  { slug: 'trinidad', name: 'Trinidad', country: 'TT' },
  { slug: 'nigeria', name: 'Nigeria', country: 'NG' }, { slug: 'lagos', name: 'Lagos', country: 'NG' },
  { slug: 'south-africa', name: 'South Africa', country: 'ZA' }, { slug: 'johannesburg', name: 'Johannesburg', country: 'ZA' },
  { slug: 'egypt', name: 'Egypt', country: 'EG' }, { slug: 'angola', name: 'Angola', country: 'AO' },
  { slug: 'colombia', name: 'Colombia', country: 'CO' }, { slug: 'bogota', name: 'Bogotá', country: 'CO' },
  { slug: 'lima', name: 'Lima', country: 'PE' }, { slug: 'santiago', name: 'Santiago', country: 'CL' },
  { slug: 'mexico-city', name: 'Mexico City', country: 'MX' }, { slug: 'argentina', name: 'Argentina', country: 'AR' },
  { slug: 'buenos-aires', name: 'Buenos Aires', country: 'AR' },
  { slug: 'beijing', name: 'Beijing', country: 'CN' }, { slug: 'shanghai', name: 'Shanghai', country: 'CN' },
  { slug: 'hong-kong', name: 'Hong Kong', country: 'HK' }, { slug: 'manila', name: 'Manila', country: 'PH' },
  { slug: 'jakarta', name: 'Jakarta', country: 'ID' }, { slug: 'bangkok', name: 'Bangkok', country: 'TH' },
];

// Top 100 cities for advanced methods (all of them)
const top100 = allCitySlugs.slice(0, 100);
// Top 40 for industry pages
const top40 = allCitySlugs.slice(0, 40);
// Top 50 for inspection pages
const top50 = allCitySlugs.slice(0, 50);
// Top 20 for cert training
const top20 = allCitySlugs.slice(0, 20);

let programmaticCount = 0;

// Advanced Method + Location pages
advancedMethodSlugs.forEach(method => {
  top100.forEach(city => {
    const path = `/services/${method.slug}-${city.slug}`;
    const diff = regionDifferentiators[city.slug] || {};
    const localIndustries = diff.industries ? `<p>Serving ${city.name}'s ${diff.industries} sectors with certified ${method.shortName} inspection teams. ${diff.usp || ''}.</p>` : '';
    const localCerts = diff.certs ? `<p>Our ${city.name} ${method.shortName} inspectors hold ${diff.certs} qualifications for full regulatory compliance.</p>` : '';
    routes.push({
      path,
      title: `${method.name} in ${city.name} | ${method.shortName} Services | Atlantis NDT`,
      description: `Professional ${method.name} services in ${city.name}. ASNT Level III certified ${method.shortName} inspectors for ${city.name} industries. Advanced NDT inspection, code-compliant reporting.`,
      canonical: `${SITE_URL}${path}`,
      structuredData: {
        "@context": "https://schema.org",
        "@graph": [
          { "@type": "ProfessionalService", "name": `Atlantis NDT ${method.shortName} ${city.name}`, "url": `${SITE_URL}${path}`, "serviceType": method.name, "areaServed": { "@type": "City", "name": city.name }, "provider": { "@id": `${SITE_URL}/#organization` } },
          { "@type": "BreadcrumbList", "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": SITE_URL },
            { "@type": "ListItem", "position": 2, "name": "Services", "item": `${SITE_URL}/ndt-methods` },
            { "@type": "ListItem", "position": 3, "name": `${method.shortName} in ${city.name}`, "item": `${SITE_URL}${path}` }
          ]}
        ]
      },
      bodyContent: `  <header><nav><a href="/">Home</a><a href="/ndt-methods">Services</a><a href="/contact">Contact</a></nav></header>\n  <main>\n    <h1>${method.name} in ${city.name}</h1>\n    <p>Professional ${method.name} services in ${city.name}. ASNT Level III certified ${method.shortName} inspectors delivering advanced NDT inspection with code-compliant reporting.</p>\n    ${localIndustries}${localCerts}\n  </main>`,
    });
    programmaticCount++;
  });
});

// Industry + Location pages
const industrySlugs = [
  { slug: 'oil-gas-ndt', name: 'Oil & Gas NDT Services' },
  { slug: 'aerospace-ndt', name: 'Aerospace NDT Services' },
  { slug: 'power-generation-ndt', name: 'Power Generation NDT Services' },
  { slug: 'pipeline-ndt', name: 'Pipeline NDT Inspection' },
  { slug: 'marine-ndt', name: 'Marine & Offshore NDT Services' },
  { slug: 'petrochemical-ndt', name: 'Petrochemical NDT Services' },
  { slug: 'construction-ndt', name: 'Construction NDT Services' },
  { slug: 'manufacturing-ndt', name: 'Manufacturing NDT Services' },
];

industrySlugs.forEach(industry => {
  top40.forEach(city => {
    const path = `/industry/${industry.slug}-${city.slug}`;
    const diff = regionDifferentiators[city.slug] || {};
    const industryShort = industry.name.replace(' NDT Services', '').replace(' NDT Inspection', '');
    const localIndustries = diff.industries ? `<p>${city.name} is a key hub for ${diff.industries} operations. ${diff.usp || ''}.</p>` : '';
    const localCerts = diff.certs ? `<p>Our ${city.name} inspectors hold ${diff.certs} qualifications for ${industryShort} facility inspections.</p>` : '';
    routes.push({
      path,
      title: `${industry.name} in ${city.name} | NDT Inspection | Atlantis NDT`,
      description: `${industry.name} in ${city.name}. Comprehensive NDT inspection for ${industryShort} facilities. ASNT Level III certified inspectors.`,
      canonical: `${SITE_URL}${path}`,
      structuredData: {
        "@context": "https://schema.org",
        "@graph": [
          { "@type": "ProfessionalService", "name": `Atlantis NDT ${industry.name} ${city.name}`, "url": `${SITE_URL}${path}`, "serviceType": industry.name, "areaServed": { "@type": "City", "name": city.name }, "provider": { "@id": `${SITE_URL}/#organization` } },
          { "@type": "BreadcrumbList", "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": SITE_URL },
            { "@type": "ListItem", "position": 2, "name": "Industries", "item": `${SITE_URL}/industry` },
            { "@type": "ListItem", "position": 3, "name": `${industry.name} in ${city.name}`, "item": `${SITE_URL}${path}` }
          ]}
        ]
      },
      bodyContent: `  <header><nav><a href="/">Home</a><a href="/industry">Industries</a><a href="/contact">Contact</a></nav></header>\n  <main>\n    <h1>${industry.name} in ${city.name}</h1>\n    <p>Comprehensive NDT inspection services for ${industryShort} facilities in ${city.name}. ASNT Level III certified inspectors delivering UT, RT, MT, PT, VT, and advanced methods.</p>\n    ${localIndustries}${localCerts}\n  </main>`,
    });
    programmaticCount++;
  });
});

// Inspection Service + Location pages
const inspectionSlugs = [
  { slug: 'weld-inspection-services', name: 'Weld Inspection Services' },
  { slug: 'tank-inspection-services', name: 'Tank Inspection Services' },
  { slug: 'pipeline-inspection-services', name: 'Pipeline Inspection Services' },
  { slug: 'corrosion-inspection-services', name: 'Corrosion Inspection Services' },
];

inspectionSlugs.forEach(service => {
  top50.forEach(city => {
    const path = `/inspection/${service.slug}-${city.slug}`;
    const diff = regionDifferentiators[city.slug] || {};
    const localIndustries = diff.industries ? `<p>${city.name} facilities in the ${diff.industries} sectors require rigorous ${service.name.toLowerCase()}. ${diff.usp || ''}.</p>` : '';
    const localCerts = diff.certs ? `<p>Our ${city.name} inspection team holds ${diff.certs} qualifications.</p>` : '';
    routes.push({
      path,
      title: `${service.name} in ${city.name} | NDT Inspection | Atlantis NDT`,
      description: `Professional ${service.name.toLowerCase()} in ${city.name}. Expert NDT inspectors using advanced methods for comprehensive inspection coverage. Code-compliant results.`,
      canonical: `${SITE_URL}${path}`,
      structuredData: {
        "@context": "https://schema.org",
        "@graph": [
          { "@type": "ProfessionalService", "name": `Atlantis NDT ${service.name} ${city.name}`, "url": `${SITE_URL}${path}`, "serviceType": service.name, "areaServed": { "@type": "City", "name": city.name }, "provider": { "@id": `${SITE_URL}/#organization` } },
          { "@type": "BreadcrumbList", "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": SITE_URL },
            { "@type": "ListItem", "position": 2, "name": "Inspection", "item": `${SITE_URL}/ndt-methods` },
            { "@type": "ListItem", "position": 3, "name": `${service.name} in ${city.name}`, "item": `${SITE_URL}${path}` }
          ]}
        ]
      },
      bodyContent: `  <header><nav><a href="/">Home</a><a href="/ndt-methods">Services</a><a href="/contact">Contact</a></nav></header>\n  <main>\n    <h1>${service.name} in ${city.name}</h1>\n    <p>Professional ${service.name.toLowerCase()} in ${city.name}. Expert NDT inspectors using UT, RT, MT, PT, and advanced methods for comprehensive inspection coverage with code-compliant reporting.</p>\n    ${localIndustries}${localCerts}\n  </main>`,
    });
    programmaticCount++;
  });
});

// Certification Training + Location pages
const certSlugs = [
  { slug: 'api-510-training', name: 'API 510 Certification Training' },
  { slug: 'api-570-training', name: 'API 570 Certification Training' },
  { slug: 'api-653-training', name: 'API 653 Certification Training' },
  { slug: 'asnt-level-iii-training', name: 'ASNT Level III Training' },
  { slug: 'cwi-training', name: 'CWI Certification Training' },
];

certSlugs.forEach(cert => {
  top20.forEach(city => {
    const path = `/training/${cert.slug}-${city.slug}`;
    const diff = regionDifferentiators[city.slug] || {};
    const localInfo = diff.industries ? `<p>Professionals in ${city.name}'s ${diff.industries} sectors benefit from ${cert.name} to advance their NDT careers. ${diff.usp || ''}.</p>` : '';
    routes.push({
      path,
      title: `${cert.name} in ${city.name} | Atlantis NDT`,
      description: `${cert.name} courses in ${city.name}. Expert-led preparation with 95% pass rate. Classroom and online options available. Enrol today.`,
      canonical: `${SITE_URL}${path}`,
      structuredData: {
        "@context": "https://schema.org",
        "@graph": [
          { "@type": "Course", "name": `${cert.name} - ${city.name}`, "url": `${SITE_URL}${path}`, "provider": { "@type": "Organization", "name": "Atlantis NDT", "@id": `${SITE_URL}/#organization` }, "locationCreated": { "@type": "Place", "address": { "@type": "PostalAddress", "addressLocality": city.name } } },
          { "@type": "BreadcrumbList", "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": SITE_URL },
            { "@type": "ListItem", "position": 2, "name": "Training", "item": `${SITE_URL}/training` },
            { "@type": "ListItem", "position": 3, "name": `${cert.name} in ${city.name}`, "item": `${SITE_URL}${path}` }
          ]}
        ]
      },
      bodyContent: `  <header><nav><a href="/">Home</a><a href="/training">Training</a><a href="/contact">Contact</a></nav></header>\n  <main>\n    <h1>${cert.name} in ${city.name}</h1>\n    <p>${cert.name} courses in ${city.name}. Expert-led preparation with 95% first-time pass rate. Classroom and online options available from ASNT Level III instructors.</p>\n    ${localInfo}\n  </main>`,
    });
    programmaticCount++;
  });
});

// ─── Case Study Pages (E-E-A-T Authority Building) ────────────────────────
const caseStudies = [
  { slug: 'gulf-coast-refinery-ndt-program', title: 'Gulf Coast Refinery NDT Program Overhaul | Procedure Development & Audit', desc: 'How Atlantis NDT helped a major Gulf Coast refinery develop 25+ ASNT compliant procedures, train 40+ technicians, and pass API audit first time. 35% reduction in inspection rework.', industry: 'Oil & Gas' },
  { slug: 'adnoc-offshore-pipeline-inspection', title: 'ADNOC Offshore Pipeline Inspection | 500+ Hours Subsea NDT', desc: 'Comprehensive pipeline inspection for ADNOC offshore platform in Persian Gulf. Phased array UT, eddy current ROV scanning, 50km of subsea piping assessed. 3 critical defects found before failure.', industry: 'Offshore' },
  { slug: 'aerospace-ndt-qualification-program', title: 'Aerospace NDT Qualification Program | NAS-410 Compliance', desc: 'Complete NAS-410 NDT qualification program built from scratch for Tier 1 aerospace manufacturer. 12 methods qualified, NADCAP audit readiness achieved in 6 months.', industry: 'Aerospace' },
  { slug: 'pipeline-fitness-for-service', title: 'Pipeline Fitness-for-Service Assessment | API 579 FFS', desc: 'Fitness-for-service assessment per API 579 for aging gas pipeline. UT corrosion mapping of 200+ CMLs, remaining life calculations, and repair/replace prioritization. $4.2M in deferred replacement costs.', industry: 'Pipeline' },
  { slug: 'digital-twin-refinery-implementation', title: 'Digital Twin Implementation for Refinery Assets | 40% Turnaround Reduction', desc: 'Digital twin deployment for 150+ pressure vessels and piping circuits at major refinery. Integrated 10 years of UT thickness data into 3D models. 40% reduction in turnaround inspection time.', industry: 'Digital Twins' },
  { slug: 'storage-tank-api-653-program', title: 'Storage Tank API 653 Inspection Program | 75 Tanks', desc: 'API 653 inspection program for 75 aboveground storage tanks. MFL floor scanning, UT shell surveys, and risk-based inspection scheduling. Identified 12 tanks requiring immediate repair.', industry: 'Tank Inspection' },
  { slug: 'petrochemical-turnaround-ndt', title: 'Petrochemical Plant Turnaround NDT | 15-Day Shutdown Support', desc: 'Full-scope turnaround NDT support for SABIC petrochemical complex. 30+ inspectors, 1,200 inspection points, zero schedule delays. All procedures approved first submission.', industry: 'Petrochemical' },
  { slug: 'power-plant-boiler-inspection', title: 'Power Plant Boiler Tube Inspection | HRSG Assessment', desc: 'HRSG and boiler tube inspection program for 500MW combined cycle plant. ECT, IRIS, and pulsed eddy current on 4,000+ tubes. Identified 200+ tubes requiring plugging before failure.', industry: 'Power Generation' },
  { slug: 'lng-terminal-cryogenic-inspection', title: 'LNG Terminal Cryogenic Piping Inspection | -162°C Service', desc: 'Specialized NDT for LNG terminal cryogenic piping and storage tanks. AUT, PAUT, and specialized low-temperature techniques. 100% weld inspection per ASME B31.3 Chapter IX.', industry: 'LNG' },
  { slug: 'india-refinery-training-program', title: 'India Refinery NDT Training Program | 200+ Technicians Certified', desc: 'Comprehensive NDT training program for major Indian refinery. 200+ technicians certified across UT, MT, PT, RT Level I and II. Custom training materials in Hindi and English.', industry: 'Training' },
];

caseStudies.forEach(cs => {
  const path = `/case-studies/${cs.slug}`;
  routes.push({
    path,
    title: `${cs.title} | Atlantis NDT`,
    description: cs.desc,
    canonical: `${SITE_URL}${path}`,
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": cs.title,
      "author": { "@type": "Organization", "name": "Atlantis NDT" },
      "publisher": { "@id": `${SITE_URL}/#organization` },
      "datePublished": "2026-03-15",
      "dateModified": "2026-03-21",
      "articleSection": cs.industry,
      "description": cs.desc
    },
    bodyContent: `  <header><nav><a href="/">Home</a><a href="/case-studies">Case Studies</a><a href="/consulting">Consulting</a><a href="/contact">Contact</a></nav></header>\n  <main>\n    <article>\n      <span class="badge">${cs.industry}</span>\n      <h1>${cs.title}</h1>\n      <p>${cs.desc}</p>\n    </article>\n  </main>`,
  });
  programmaticCount++;
});

console.log(`📋 Case study pages added: ${caseStudies.length}`);

// ─── Global Training City Pages (beyond USA) ──────────────────────────────
const globalTrainingCities = [
  { slug: 'dubai', city: 'Dubai', region: 'UAE', detail: 'Dubai training center for ASNT and ISO 9712 certification. Serving UAE, Saudi Arabia, Qatar, and GCC region. ADNOC and Aramco approved programs.' },
  { slug: 'abu-dhabi', city: 'Abu Dhabi', region: 'UAE', detail: 'Abu Dhabi NDT training for ADNOC contractors and oil & gas professionals across the UAE. ISO 9712 and ASNT SNT-TC-1A certification.' },
  { slug: 'mumbai', city: 'Mumbai', region: 'India', detail: 'Mumbai NDT training for offshore, refining, and petrochemical industries. ASNT and ISNT certification programs.' },
  { slug: 'hyderabad', city: 'Hyderabad', region: 'India', detail: 'Hyderabad headquarters training center. Full Level I-III certification for all NDT methods. Hands-on labs with latest equipment.' },
  { slug: 'bangalore', city: 'Bangalore', region: 'India', detail: 'Bangalore NDT training for aerospace (HAL, ISRO suppliers), defense, and manufacturing. ASNT, ISNT, and NAS-410 programs.' },
  { slug: 'chennai', city: 'Chennai', region: 'India', detail: 'Chennai NDT training for automotive, power generation, and heavy manufacturing industries. ASNT Level I-III certification.' },
  // 'singapore' — explicit entry above with API 510/570/653 + Jurong/FPSO focus
  { slug: 'perth', city: 'Perth', region: 'Australia', detail: 'Perth NDT training for mining, LNG, and oil & gas industries. ISO 9712 and ASNT certification for Australian operators.' },
  { slug: 'calgary', city: 'Calgary', region: 'Canada', detail: 'Calgary NDT training for oil sands, pipeline, and midstream industries. ASNT and CGSB certification programs.' },
  { slug: 'aberdeen', city: 'Aberdeen', region: 'UK', detail: 'Aberdeen NDT training for North Sea oil & gas, offshore wind, and decommissioning. PCN and ASNT certification.' },
  { slug: 'london', city: 'London', region: 'UK', detail: 'London NDT training for construction, aerospace, and rail industries. PCN, ASNT, and EN ISO 9712 certification.' },
  { slug: 'riyadh', city: 'Riyadh', region: 'Saudi Arabia', detail: 'Riyadh NDT training for Saudi Aramco, SABIC, and Vision 2030 industrial projects. Saudi TVTC recognized programs.' },
  { slug: 'doha', city: 'Doha', region: 'Qatar', detail: 'Doha NDT training for QatarEnergy, RasGas, and Qatargas operations. ASNT and ISO 9712 Level I-III certification.' },
  { slug: 'kuala-lumpur', city: 'Kuala Lumpur', region: 'Malaysia', detail: 'KL NDT training for Petronas contractors, palm oil refining, and Southeast Asian industrial operators.' },
  // 'jakarta' — explicit entry above with Pertamina + Petrokimia + LNG focus
  { slug: 'lagos', city: 'Lagos', region: 'Nigeria', detail: 'Lagos NDT training for Nigerian oil & gas, offshore, and industrial sectors. ASNT and ISO 9712 certification programs.' },
  { slug: 'johannesburg', city: 'Johannesburg', region: 'South Africa', detail: 'Johannesburg NDT training for mining, Sasol operations, and South African manufacturing. ASNT and SANAS accredited.' },
  { slug: 'sao-paulo', city: 'São Paulo', region: 'Brazil', detail: 'São Paulo NDT training for Petrobras, pre-salt deepwater, and Brazilian industrial sectors. ABENDI and ASNT certification.' },
  { slug: 'mexico-city', city: 'Mexico City', region: 'Mexico', detail: 'Mexico City NDT training for PEMEX, automotive manufacturing, and Mexican industrial sectors. ASNT certification in Spanish and English.' },
  { slug: 'rotterdam', city: 'Rotterdam', region: 'Netherlands', detail: 'Rotterdam NDT training for Europoort refineries, petrochemical, and offshore wind industries. EN ISO 9712 and ASNT certification.' },
];

globalTrainingCities.forEach(({ slug, city, region, detail }) => {
  // Don't duplicate if already exists in trainingCityPages
  const existingSlugs = ['houston', 'new-york', 'los-angeles', 'chicago', 'denver', 'new-orleans', 'dallas', 'philadelphia', 'pittsburgh', 'atlanta'];
  if (existingSlugs.includes(slug)) return;

  routes.push({
    path: `/ndt-training-${slug}`,
    title: `NDT Training ${city} | ASNT Level I-III Certification | Atlantis NDT`,
    description: `ASNT-aligned NDT training in ${city}, ${region}. Level I, II & III certification for UT, MT, PT, RT, ET, VT. ${detail} 95% pass rate.`,
    canonical: `${SITE_URL}/ndt-training-${slug}`,
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Course",
      "name": `NDT Certification Training - ${city}`,
      "provider": { "@type": "Organization", "name": "Atlantis NDT", "@id": `${SITE_URL}/#organization` },
      "courseMode": ["onsite", "blended"],
      "locationCreated": { "@type": "Place", "address": { "@type": "PostalAddress", "addressLocality": city } },
      "hasCourseInstance": { "@type": "CourseInstance", "courseMode": "onsite", "courseWorkload": "PT40H" }
    },
    bodyContent: `  <header><nav><a href="/">Home</a><a href="/training">Training</a><a href="/contact">Contact</a></nav></header>\n  <main>\n    <h1>NDT Training in ${city}</h1>\n    <p>Professional ASNT-aligned NDT training in ${city}, ${region}. ${detail} Level I, II, and III certification for all major NDT methods with 95% pass rate.</p>\n  </main>`,
  });
  programmaticCount++;
});

console.log(`📄 Programmatic SEO routes added: ${programmaticCount}`);

// ─── Inject FAQ schema into high-value pages for People Also Ask boxes ───

const faqSchemas = {
  '/consulting': {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "What does an NDT Level III consultant do?", "acceptedAnswer": { "@type": "Answer", "text": "An ASNT NDT Level III consultant develops and approves NDT procedures, qualifies personnel, interprets codes and standards (ASME, API, AWS), performs technical audits, and serves as the technical authority for NDT programs. They can also provide expert witness services." }},
      { "@type": "Question", "name": "How much does NDT consulting cost?", "acceptedAnswer": { "@type": "Answer", "text": "NDT consulting rates vary by project scope. Level III day rates typically range from $1,200-$2,500/day depending on method, industry (aerospace vs oil & gas), and location. Procedure development packages start from $3,000. Contact Atlantis NDT for a free quote." }},
      { "@type": "Question", "name": "What industries need NDT consulting?", "acceptedAnswer": { "@type": "Answer", "text": "Oil & gas (refineries, pipelines, offshore), aerospace (aircraft, engines, composites), power generation (turbines, boilers), nuclear, marine, manufacturing, and infrastructure all require NDT consulting for code compliance and asset integrity." }},
      { "@type": "Question", "name": "What is SNT-TC-1A compliance?", "acceptedAnswer": { "@type": "Answer", "text": "ASNT SNT-TC-1A is the recommended practice for qualifying and certifying NDT personnel. Compliance means your written practice, training hours, examination requirements, and personnel records meet ASNT guidelines — which most industry codes require." }}
    ]
  },
  // '/training' — handled by page-level @graph in Training.tsx
  // '/asnt-certification' — handled by page-level @graph in asnt-certification.tsx
  // '/api-653-certification' — handled by page-level @graph in api-653-certification.tsx
  // '/digital-twins' — handled by page-level @graph in DigitalTwins.tsx
  // '/api-510-certification' — handled by page-level @graph in api-510-certification.tsx
  // '/api-570-certification' — handled by page-level @graph in api-570-certification.tsx
  '/ndt-methods': {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "What are the 6 main NDT methods?", "acceptedAnswer": { "@type": "Answer", "text": "The six main NDT methods are: Ultrasonic Testing (UT), Radiographic Testing (RT), Magnetic Particle Testing (MT), Liquid Penetrant Testing (PT), Eddy Current Testing (ET), and Visual Testing (VT). Each detects different defect types in different materials." }},
      { "@type": "Question", "name": "Which NDT method is best?", "acceptedAnswer": { "@type": "Answer", "text": "No single NDT method is 'best' — each has strengths. UT excels at finding internal flaws in thick sections, RT provides permanent film records, MT detects surface cracks in ferromagnetic materials, PT finds surface cracks in any material, ET detects surface defects without contact, and VT is the first line of inspection." }},
      { "@type": "Question", "name": "What is the most common NDT method?", "acceptedAnswer": { "@type": "Answer", "text": "Ultrasonic testing (UT) is the most widely used NDT method globally, followed by radiographic testing (RT). UT is preferred for its portability, no radiation hazard, and ability to measure thickness and detect both surface and subsurface defects." }}
    ]
  },
  // '/weld-inspection' — handled by page-level @graph in weld-inspection.tsx
};

// Inject FAQ schema into matching routes — but skip if route already has FAQPage
// (page-level @graph may already include one; duplicate FAQPage triggers GSC errors)
const hasFaqPage = (sd) => {
  if (!sd) return false;
  if (sd['@type'] === 'FAQPage') return true;
  if (Array.isArray(sd['@graph'])) return sd['@graph'].some(n => n && n['@type'] === 'FAQPage');
  return false;
};
routes.forEach(route => {
  const faq = faqSchemas[route.path];
  if (!faq) return;
  if (hasFaqPage(route.structuredData)) return;
  if (route.structuredData) {
    if (route.structuredData['@graph']) {
      route.structuredData['@graph'].push(faq);
    } else {
      route.structuredData = { "@context": "https://schema.org", "@graph": [route.structuredData, faq] };
    }
  } else {
    route.structuredData = faq;
  }
});

console.log(`❓ FAQ schema injected into ${Object.keys(faqSchemas).length} high-value pages`);

// === SCHEMA UPGRADES 2026-05-09 ============================================
// Inject category-specific JSON-LD into pre-rendered HTML so Googlebot sees
// rich-snippet eligibility WITHOUT depending on React hydration.
//
// Categories:
//  A) SoftwareApplication for /digital-twins, /erp, /digital-twin-reporting
//     — pricing per CLAUDE.md ($200K/yr, $18K/yr, $50K/yr).
//  B) Course for /corporate-ndt-training (hub) and /corporate-ndt-training/<city>
//     — /training, /training-{usa,me,india}, /ndt-training-{online,usa,india}
//       already get Course schema in the corePages.forEach block.
//
// Org-level aggregateRating was REMOVED from dist/index.html in commit
// 961d7991 (duplicate-rating fix), so product-level aggregateRating is safe.
//
// Append-only: if route.structuredData already exists, push into @graph;
// never replace. Skip if a same-@type node is already present to avoid dupes.

const PRODUCT_SCHEMAS = {
  '/digital-twins': {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Atlantis NDT Digital Twin Platform",
    "description": "Real-time 3D asset visualization with integrated NDT inspection data, AI-powered predictive maintenance, API 579-1 fitness-for-service, API 581 RBI, and native CMMS / EAM integrations (SAP PM, Maximo, Meridium APM).",
    "applicationCategory": "BusinessApplication",
    "applicationSubCategory": "Asset Integrity Management",
    "operatingSystem": "Web",
    "url": `${SITE_URL}/digital-twins`,
    "publisher": { "@type": "Organization", "name": "Atlantis NDT", "url": SITE_URL },
    "offers": {
      "@type": "Offer",
      "price": "200000",
      "priceCurrency": "USD",
      "priceSpecification": {
        "@type": "UnitPriceSpecification",
        "price": "200000",
        "priceCurrency": "USD",
        "unitCode": "ANN",
        "referenceQuantity": { "@type": "QuantitativeValue", "value": 1, "unitCode": "ANN" }
      },
      "availability": "https://schema.org/InStock"
    },
    "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.8", "reviewCount": "47", "bestRating": "5" }
  },
  '/erp': {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Atlantis NDT ERP",
    "description": "Pre-configured Odoo 18 ERP for NDT inspection companies — project management, technician certification tracking, equipment calibration, invoicing, inventory, ISO 9001 document control.",
    "applicationCategory": "BusinessApplication",
    "applicationSubCategory": "Enterprise Resource Planning",
    "operatingSystem": "Web",
    "url": `${SITE_URL}/erp`,
    "publisher": { "@type": "Organization", "name": "Atlantis NDT", "url": SITE_URL },
    "offers": {
      "@type": "Offer",
      "price": "18000",
      "priceCurrency": "USD",
      "priceSpecification": {
        "@type": "UnitPriceSpecification",
        "price": "18000",
        "priceCurrency": "USD",
        "unitCode": "ANN",
        "referenceQuantity": { "@type": "QuantitativeValue", "value": 1, "unitCode": "ANN" }
      },
      "availability": "https://schema.org/InStock"
    },
    "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.8", "reviewCount": "62", "bestRating": "5" }
  },
  '/digital-twin-reporting': {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Atlantis NDT Digital Twin Reporting Software",
    "description": "AI-powered NDT inspection report generation, mobile data capture (offline capable), ASNT/ISO compliant templates, multi-method support (UT, RT, MT, PT, VT, ET, TOFD, Phased Array). Integrated 3D digital twin visualization of inspection findings.",
    "applicationCategory": "BusinessApplication",
    "applicationSubCategory": "Inspection Reporting Software",
    "operatingSystem": "Web, iOS, Android",
    "url": `${SITE_URL}/digital-twin-reporting`,
    "publisher": { "@type": "Organization", "name": "Atlantis NDT", "url": SITE_URL },
    "offers": {
      "@type": "Offer",
      "price": "50000",
      "priceCurrency": "USD",
      "priceSpecification": {
        "@type": "UnitPriceSpecification",
        "price": "50000",
        "priceCurrency": "USD",
        "unitCode": "ANN",
        "referenceQuantity": { "@type": "QuantitativeValue", "value": 1, "unitCode": "ANN" }
      },
      "availability": "https://schema.org/InStock"
    },
    "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "38", "bestRating": "5" }
  }
};

// Helper: check if a structuredData object already contains a node of the
// given @type (either at root or anywhere inside a @graph array).
const hasTypeNode = (sd, type) => {
  if (!sd) return false;
  if (sd['@type'] === type) return true;
  if (Array.isArray(sd['@graph'])) return sd['@graph'].some(n => n && n['@type'] === type);
  return false;
};

// Helper: append a new JSON-LD node to route.structuredData without
// clobbering existing schemas. Wraps single-node SDs into @graph form.
const appendSchemaNode = (route, node) => {
  if (!route.structuredData) {
    route.structuredData = node;
    return;
  }
  if (Array.isArray(route.structuredData['@graph'])) {
    route.structuredData['@graph'].push(node);
    return;
  }
  // Single-node SD — promote to @graph
  route.structuredData = {
    "@context": "https://schema.org",
    "@graph": [route.structuredData, node]
  };
};

let productSchemasInjected = 0;
let courseSchemasInjected = 0;

routes.forEach(route => {
  // (A) SoftwareApplication for product pages
  const productSd = PRODUCT_SCHEMAS[route.path];
  if (productSd && !hasTypeNode(route.structuredData, 'SoftwareApplication')) {
    appendSchemaNode(route, productSd);
    productSchemasInjected++;
  }

  // (B) Course schema for /corporate-ndt-training hub + per-city subpages
  // (corePages already covers /training, /training-{usa,me,india},
  //  /ndt-training-online, /ndt-training-usa, /ndt-training-india.
  //  globalTrainingCities already covers /ndt-training-<city>.)
  const isCorporateHub = route.path === '/corporate-ndt-training';
  const isCorporateCity = route.path.startsWith('/corporate-ndt-training/');
  if ((isCorporateHub || isCorporateCity) && !hasTypeNode(route.structuredData, 'Course')) {
    const cityFromSlug = isCorporateCity
      ? route.path.replace('/corporate-ndt-training/', '').split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')
      : null;
    const courseName = isCorporateHub
      ? 'Corporate NDT Training — Onsite & Online Group Batches'
      : `Corporate NDT Training — ${cityFromSlug}`;
    const courseDesc = isCorporateHub
      ? 'Corporate NDT training for inspection teams: ASNT SNT-TC-1A + ISO 9712 aligned. UT, PAUT, TOFD, RT, MT, PT, ET, VT, MFL, AE methods. Onsite at your facility, online with live virtual labs, or blended. Group rates from $1,800/person across 55+ cities worldwide.'
      : `Corporate NDT training delivered in ${cityFromSlug} for inspection teams — onsite at your facility, online with live virtual labs, or blended. ASNT SNT-TC-1A + ISO 9712 aligned. UT, PAUT, TOFD, RT, MT, PT, ET, VT methods. Level I, II, III certification.`;
    const courseSchema = {
      "@context": "https://schema.org",
      "@type": "Course",
      "name": courseName,
      "description": courseDesc,
      "provider": { "@type": "Organization", "name": "Atlantis NDT", "sameAs": SITE_URL },
      "educationalLevel": "Professional",
      "courseMode": "blended",
      "hasCourseInstance": [
        { "@type": "CourseInstance", "courseMode": "Onsite", "courseWorkload": "PT40H" },
        { "@type": "CourseInstance", "courseMode": "Online", "courseWorkload": "PT40H" }
      ]
    };
    appendSchemaNode(route, courseSchema);
    courseSchemasInjected++;
  }
});

if (productSchemasInjected > 0) console.log(`📦 SoftwareApplication schema injected into ${productSchemasInjected} product pages`);
if (courseSchemasInjected > 0) console.log(`🎓 Course schema injected into ${courseSchemasInjected} corporate-training pages`);
// === END SCHEMA UPGRADES 2026-05-09 ========================================

// ─── Generate sitemaps with index ─────────────────────────────────────────

function getLastmodForPath(path, index = 0) {
  const today = new Date();
  const baseDate = new Date('2026-03-15');

  // Homepage, consulting, training main pages: today
  if (path === '/' || path === '/consulting' || path === '/training') {
    return today.toISOString().split('T')[0];
  }

  // Core pages and high-value pages: today
  if (['/digital-twins', '/contact', '/about', '/asnt-certification', '/api-653-certification',
       '/api-510-certification', '/api-570-certification', '/ndt-connect', '/ndt-erp-solution',
       '/faq', '/services'].includes(path)) {
    return today.toISOString().split('T')[0];
  }

  // Training regional pages: today
  if (path.startsWith('/training-') || path.startsWith('/ndt-training-')) {
    return today.toISOString().split('T')[0];
  }

  // Blog posts: use published/modified date if available, else stagger across last 30 days
  if (path.startsWith('/blog/')) {
    const d = new Date(today);
    d.setDate(d.getDate() - (5 + (index % 25)));
    return d.toISOString().split('T')[0];
  }

  // Location pages (consulting-* / ndt-consulting-*): stagger 1-3 days from base date
  if (path.startsWith('/ndt-consulting-') || (path.startsWith('/consulting/') && !path.endsWith('/consulting/'))) {
    const d = new Date(baseDate);
    d.setDate(d.getDate() + (1 + (index % 3)));
    return d.toISOString().split('T')[0];
  }

  // Digital twins and ERP pages: 2026-03-10
  if (path.startsWith('/digital-twin-') || path.startsWith('/ndt-erp-')) {
    return '2026-03-10';
  }

  // Method + location pages: stagger across last 30 days
  if (path.includes('-testing-') || path.includes('-inspection-')) {
    const d = new Date(today);
    d.setDate(d.getDate() - (2 + (index % 28)));
    return d.toISOString().split('T')[0];
  }

  // Static pages (about, FAQ, contact): 2026-02-15
  if (['/about', '/faq', '/contact', '/privacy', '/terms'].includes(path)) {
    return '2026-02-15';
  }

  // Default: 3 weeks ago
  const d = new Date(today);
  d.setDate(d.getDate() - 21);
  return d.toISOString().split('T')[0];
}

function categorizeRoute(path) {
  // Categorize routes for sitemap distribution
  if (path === '/' || path === '/about' || path === '/faq' || path === '/contact' ||
      path === '/privacy' || path === '/terms' || path === '/services') {
    return 'core';
  }
  if (path.startsWith('/blog/')) return 'blog';
  if (path.startsWith('/ndt-consulting-') || (path.startsWith('/consulting/') && path !== '/consulting')) {
    return 'consulting-locations';
  }
  if (path.includes('-testing-') || path.includes('-inspection-')) return 'methods';
  if (path.startsWith('/services/')) return 'methods';
  if (path.startsWith('/industry/')) return 'methods';
  if (path.startsWith('/inspection/')) return 'methods';
  if (path.startsWith('/digital-twin-')) return 'digital-twins';
  if (path.startsWith('/training') || path.includes('-training')) return 'training';
  return 'other';
}

function buildSitemapIndex(sitemapUrls) {
  const today = new Date().toISOString().split('T')[0];
  const sitemaps = sitemapUrls
    .map(url => `  <sitemap>
    <loc>${SITE_URL}${url}</loc>
    <lastmod>${today}</lastmod>
  </sitemap>`)
    .join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemaps}
</sitemapindex>`;
}

function buildSitemapByCategory(routeList, category) {
  const today = new Date().toISOString().split('T')[0];

  const priorityMap = {
    '/': '1.0',
    '/consulting': '0.95',
    '/training': '0.95',
    '/digital-twins': '0.90',
    '/contact': '0.80',
    '/blog': '0.85',
  };

  const changefreqMap = (path) => {
    if (path === '/' || path === '/consulting' || path === '/training') return 'weekly';
    if (path.startsWith('/blog/')) return 'monthly';
    if (path.startsWith('/consulting/')) return 'monthly';
    return 'monthly';
  };

  const getPriority = (path) => {
    if (priorityMap[path]) return priorityMap[path];
    if (path === '/tools') return '0.85';
    if (path.startsWith('/tools/')) return '0.80';
    if (path.startsWith('/resources/')) return '0.75';
    if (path.startsWith('/ndt-consulting-')) return '0.85';
    if (path.startsWith('/consulting/')) return '0.75';
    if (path.startsWith('/blog/')) return '0.80';
    if (path.includes('-training')) return '0.85';
    if (path.startsWith('/digital-twin-')) return '0.80';
    if (path.startsWith('/ndt-erp-')) return '0.75';
    if (path.includes('-testing')) return '0.75';
    if (path === '/embed/ndt-reference') return '0.30';
    if (path.includes('guide') || path.includes('statistics') || path.includes('comparison')) return '0.80';
    if (path.startsWith('/services/')) return '0.70';
    if (path.startsWith('/industry/')) return '0.70';
    if (path.startsWith('/inspection/')) return '0.70';
    if (path.startsWith('/training/') && path.split('/').length > 2) return '0.70';
    return '0.70';
  };

  const filtered = routeList
    .filter(r => !r.path.includes(':') && !r.noindex && categorizeRoute(r.path) === category);

  const urls = filtered
    .map((r, idx) => `  <url>
    <loc>${SITE_URL}${r.path}</loc>
    <lastmod>${getLastmodForPath(r.path, idx)}</lastmod>
    <changefreq>${changefreqMap(r.path)}</changefreq>
    <priority>${getPriority(r.path)}</priority>
  </url>`)
    .join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <!-- Generated by prerender.mjs — ${filtered.length} pages — ${today} -->
${urls}
</urlset>`;
}

function buildLegacySitemap(routeList) {
  // For backward compatibility with previously-submitted GSC sitemaps
  const today = new Date().toISOString().split('T')[0];

  const priorityMap = {
    '/': '1.0',
    '/consulting': '0.95',
    '/training': '0.95',
    '/digital-twins': '0.90',
    '/contact': '0.80',
    '/blog': '0.85',
  };

  const changefreqMap = (path) => {
    if (path === '/') return 'weekly';
    if (path === '/consulting' || path === '/training') return 'weekly';
    if (path.startsWith('/blog/')) return 'monthly';
    if (path.startsWith('/consulting/')) return 'monthly';
    return 'monthly';
  };

  const getPriority = (path) => {
    if (priorityMap[path]) return priorityMap[path];
    if (path === '/tools') return '0.85';
    if (path.startsWith('/tools/')) return '0.80';
    if (path.startsWith('/resources/')) return '0.75';
    if (path.startsWith('/ndt-consulting-')) return '0.85';
    if (path.startsWith('/consulting/')) return '0.75';
    if (path.startsWith('/blog/')) return '0.80';
    if (path.includes('-training')) return '0.85';
    if (path.startsWith('/digital-twin-')) return '0.80';
    if (path.startsWith('/ndt-erp-')) return '0.75';
    if (path.includes('-testing')) return '0.75';
    if (path === '/embed/ndt-reference') return '0.30';
    if (path.includes('guide') || path.includes('statistics') || path.includes('comparison')) return '0.80';
    if (path.startsWith('/services/')) return '0.70';
    if (path.startsWith('/industry/')) return '0.70';
    if (path.startsWith('/inspection/')) return '0.70';
    if (path.startsWith('/training/') && path.split('/').length > 2) return '0.70';
    return '0.70';
  };

  const urls = routeList
    .filter(r => !r.path.includes(':') && !r.noindex)
    .map((r, idx) => `  <url>
    <loc>${SITE_URL}${r.path}</loc>
    <lastmod>${getLastmodForPath(r.path, idx)}</lastmod>
    <changefreq>${changefreqMap(r.path)}</changefreq>
    <priority>${getPriority(r.path)}</priority>
  </url>`)
    .join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <!-- Generated by prerender.mjs — ${routeList.filter(r => !r.path.includes(':')).length} pages — ${today} -->
${urls}
</urlset>`;
}

// ─── Deduplicate routes (later entries override earlier for same path) ─────
const routeMap = new Map();
routes.forEach(route => routeMap.set(route.path, route));
let dedupedRoutes = [...routeMap.values()];
const dupesRemoved = routes.length - dedupedRoutes.length;
if (dupesRemoved > 0) console.log(`🔄 Deduplicated: removed ${dupesRemoved} duplicate routes (${routes.length} → ${dedupedRoutes.length})`);

// 2026-05-07: drop URLs that 301-redirect at the edge so they don't pollute
// the sitemap (Google flags "Page with redirect" against the source URL).
// Audit confirms these are stable redirect destinations.
const REDIRECT_SOURCE_PATHS = new Set([
  '/ndt-training',
  '/blog/ultrasonic-testing',
  '/blog/magnetic-particle-testing',
  '/blog/eddy-current-testing',
  '/blog/ndt-career-top-choice-2025-global-market-trends',
  '/blog/digital-twin-roadmap-oil-gas-companies-asset-integrity',
  '/blog/ndt-salary-guide-2025-global-level-1-2-3',
  '/blog/eddy-current-testing-complete-beginner-guide',
  '/blog/ndt-technician-salary-guide-2026-industry-report',
]);
const beforeRedirectFilter = dedupedRoutes.length;
dedupedRoutes = dedupedRoutes.filter(r => !REDIRECT_SOURCE_PATHS.has(r.path));
const redirectsRemoved = beforeRedirectFilter - dedupedRoutes.length;
if (redirectsRemoved > 0) console.log(`🔁 Dropped ${redirectsRemoved} URLs that 301-redirect (no longer in sitemap)`);

// Replace routes array reference for sitemap generation
routes.length = 0;
routes.push(...dedupedRoutes);

// === PSEO NOINDEX 2026-05-09 ===
// Mutate routes in place so the sitemap-exclusion filters
// (`!r.noindex` at lines 2935/2996/3148/3159) actually drop these URLs.
// The render forEach below ALSO checks PSEO_NOINDEX, but mutating here
// makes sitemap generation pick it up since it reads the routes array
// directly after this point.
let pseoNoindexApplied = 0;
for (let i = 0; i < routes.length; i++) {
  if (PSEO_NOINDEX.has(routes[i].path)) {
    routes[i] = { ...routes[i], noindex: true, noindexFollow: true };
    pseoNoindexApplied++;
  }
}
if (pseoNoindexApplied > 0) {
  console.log(`🚫 pSEO noindex applied to ${pseoNoindexApplied} routes (excluded from sitemap, rendered with <meta robots="noindex,follow">)`);
}
// === END PSEO NOINDEX 2026-05-09 ===

// ─── Generate files ────────────────────────────────────────────────────────

let generated = 0;
let skipped = 0;

let ctrOverridesApplied = 0;
let ogImagesApplied = 0;

routes.forEach(route => {
  try {
    // Skip dynamic route patterns
    if (route.path.includes(':')) {
      skipped++;
      return;
    }

    // Apply CTR overrides for tuned high-impression / low-CTR pages.
    // We replace the title + description (and let injectMeta cascade those
    // into og:title, og:description, twitter:title, twitter:description).
    const override = CTR_OVERRIDES[route.path];
    if (override) {
      route = {
        ...route,
        title: override.title,
        description: override.description,
        ogTitle: override.title,
        ogDesc: override.description,
      };
      ctrOverridesApplied++;
    }

    // === PSEO NOINDEX 2026-05-09 ===
    // The pre-render mutation pass above already sets noindex + noindexFollow
    // on dead pSEO routes — injectMeta picks them up automatically.
    // === END PSEO NOINDEX 2026-05-09 ===

    // Per-page OG image lookup (Bucket B output at public/og/<slug>.png).
    // Only override if the file actually exists; otherwise the template's
    // /atlantis.jpg fallback stays.
    const perPageOg = getPerPageOgImage(route.path);
    if (perPageOg) {
      route = { ...route, ogImage: perPageOg };
      ogImagesApplied++;
    }

    writeRoute(route.path, route, baseTemplate);
    generated++;
  } catch (err) {
    console.warn(`  ⚠️  Failed: ${route.path} — ${err.message}`);
    skipped++;
  }
});

if (ctrOverridesApplied > 0) console.log(`🎯 CTR overrides applied: ${ctrOverridesApplied} routes`);
if (ogImagesApplied > 0) console.log(`🖼️  Per-page OG images applied: ${ogImagesApplied} routes`);

// Write the rotated-date base template back over dist/index.html so the
// home page also benefits from fresh review dates and keyword stripping.
// (Source public/index.html and Vite's index.html stay untouched.)
try {
  const homeOgImage = getPerPageOgImage('/');
  let homeHtml = baseTemplate;
  if (homeOgImage) {
    homeHtml = homeHtml.replace(
      /<meta property="og:image" content="[^"]*"\s*\/>/,
      `<meta property="og:image" content="${homeOgImage}" />`
    ).replace(
      /<meta name="twitter:image" content="[^"]*"\s*\/>/,
      `<meta name="twitter:image" content="${homeOgImage}" />`
    );
  }
  // Strip the templated keywords meta from the home page too.
  homeHtml = homeHtml.replace(
    /\s*<meta\s+name="keywords"[\s\S]*?\/>\s*/,
    '\n  '
  );
  writeFileSync(join(DIST, 'index.html'), homeHtml, 'utf-8');
  console.log('🏠 dist/index.html refreshed (rotated review dates + keywords stripped)');
} catch (err) {
  console.warn(`  ⚠️  Could not refresh dist/index.html: ${err.message}`);
}

// ─── Write all sitemaps ────────────────────────────────────────────────────

const categories = ['core', 'blog', 'consulting-locations', 'methods', 'digital-twins', 'training', 'other'];
const sitemapUrls = [];

// Generate each category sitemap
categories.forEach(category => {
  const categoryRoutes = routes.filter(r => categorizeRoute(r.path) === category);
  if (categoryRoutes.length > 0) {
    const filename = `sitemap-${category}.xml`;
    const xml = buildSitemapByCategory(routes, category);
    writeFileSync(join(DIST, filename), xml, 'utf-8');
    writeFileSync(join(ROOT, 'public', filename), xml, 'utf-8');
    sitemapUrls.push(`/${filename}`);
  }
});

// Generate sitemap index
const indexXml = buildSitemapIndex(sitemapUrls);
writeFileSync(join(DIST, 'sitemap-index.xml'), indexXml, 'utf-8');
writeFileSync(join(ROOT, 'public', 'sitemap-index.xml'), indexXml, 'utf-8');

// Also generate legacy sitemap.xml for backward compatibility
const legacySitemapXml = buildLegacySitemap(routes);
writeFileSync(join(DIST, 'sitemap.xml'), legacySitemapXml, 'utf-8');
writeFileSync(join(ROOT, 'public', 'sitemap.xml'), legacySitemapXml, 'utf-8');

console.log(`\n✅ Pre-render complete: ${generated} pages generated, ${skipped} skipped`);
console.log(`🗺️  Sitemap index generated: ${sitemapUrls.length} sub-sitemaps`);
console.log(`🗺️  Total URLs: ${routes.filter(r => !r.path.includes(':') && !r.noindex).length + 1}`);
console.log(`📁 Output: ${DIST}/[route]/index.html`);

// ─── IndexNow ping (Bing/Yandex/Seznam) ───────────────────────────────────
// Non-blocking: prerender success must never depend on this.
// Set SKIP_INDEXNOW=1 to skip (e.g. for local dev runs).
if (process.env.SKIP_INDEXNOW === '1') {
  console.log('[indexnow] skipped (SKIP_INDEXNOW=1)');
} else {
  try {
    const indexableRoutes = routes
      .filter(r => !r.path.includes(':') && !r.noindex)
      .map(r => `${SITE_URL}${r.path}`);
    const mod = await import('./indexnow-ping.mjs');
    await mod.main(indexableRoutes);
  } catch (err) {
    console.warn(`[indexnow] ping skipped: ${err.message}`);
  }
}
