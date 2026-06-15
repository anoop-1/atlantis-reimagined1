#!/usr/bin/env node
/**
 * Inject QuickAnswerBox into top-30 high-impression pages.
 * Goal: featured-snippet capture for CTR uplift.
 * Idempotent — skips pages already containing QuickAnswerBox.
 */
import { readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');

const TARGETS = {
  "src/pages/blog/ndt-salary-guide-2026-global.tsx": {
    question: "What does an NDT technician earn in 2026?",
    answer: "Median 2026 NDT technician salaries range from $52,000–$95,000 in the USA, £38,000–£68,000 in the UK, AED 140,000–280,000 in the UAE, and ₹4.5–18 lakh in India — driven by certification level (ASNT Level I/II/III), method (UT/PAUT/RT pay highest), industry (oil & gas tops aerospace and power), and offshore vs onshore.",
    bullets: [
      "ASNT Level III pays 60–120% above Level II in the same country",
      "PAUT, TOFD and Phased Array specialists earn 25–40% above conventional UT",
      "Offshore + sour-service work pays 30–50% above onshore industrial NDT"
    ]
  },
  "src/pages/asnt-certification.tsx": {
    question: "How do you get ASNT certified in 2026?",
    answer: "ASNT certification is employer-administered under SNT-TC-1A or centrally administered under ANSI/ASNT CP-189 / ACCP. You qualify at Level I, II, or III in each NDT method (UT, RT, MT, PT, ET, VT) by combining classroom training hours, on-the-job experience, a vision test, and a written + practical examination. Level III is the senior technical authority — set procedures, approve personnel, sign reports.",
    bullets: [
      "Level I: 40 hrs training + 210-1,200 hrs experience per method",
      "Level II: 40+ additional training hrs + 630-3,600 hrs experience",
      "Level III: Method-specific exam + 4 yrs experience (or degree + 1 yr)"
    ]
  },
  "src/pages/api-510-certification.tsx": {
    question: "What is API 510 certification and how do you get it?",
    answer: "API 510 is the Authorized Pressure Vessel Inspector certification from the American Petroleum Institute. It qualifies you to perform in-service inspection of pressure vessels under the API 510 Pressure Vessel Inspection Code. The exam is 8.5 hours, covers ASME Section V/VIII, API 510/571/572/576/577, and is administered four times per year worldwide via the API ICP program.",
    bullets: [
      "Body of knowledge: API 510, API 571, ASME Section V & VIII",
      "Eligibility: HS diploma + 5 yrs (or degree + 2 yrs) inspection experience",
      "Recertification: every 3 years via 25-question online exam"
    ]
  },
  "src/pages/api-570-certification.tsx": {
    question: "What is API 570 piping inspector certification?",
    answer: "API 570 is the Authorized Piping Inspector certification covering in-service inspection of process piping under the API 570 Piping Inspection Code. The 7.75-hour exam is administered four times per year and covers ASME B31.3, API 570/571/574/578, ASME Section V. Required for owner-operator inspector-of-record duties in refineries, petrochemical plants, and gas processing.",
    bullets: [
      "Body of knowledge: ASME B31.3, API 570, API 571, API 574",
      "Eligibility: HS diploma + 5 yrs (or degree + 2 yrs) piping inspection experience",
      "Recertification: every 3 years via 25-question online exam"
    ]
  },
  "src/pages/api-653-certification.tsx": {
    question: "What is API 653 tank inspector certification?",
    answer: "API 653 is the Authorized Aboveground Storage Tank Inspector certification covering in-service inspection, repair, alteration, and reconstruction of welded storage tanks per the API 653 code. The 7.75-hour exam covers API 650, API 651, API 652, API 653, API 571, and ASME Section V. Required for owner-operator tank inspections at terminals, refineries, and bulk distribution facilities.",
    bullets: [
      "Body of knowledge: API 650, 651, 652, 653, 571, ASME V",
      "Eligibility: HS diploma + 5 yrs (or degree + 2 yrs) tank inspection experience",
      "Recertification: every 3 years online"
    ]
  },
  "src/pages/api-653-tank-inspection-guide.tsx": {
    question: "What is an API 653 tank inspection?",
    answer: "An API 653 inspection is a code-mandated in-service evaluation of aboveground welded storage tanks. It includes external visual + UT thickness surveys at intervals up to 5 years, internal inspections every 10–20 years (extended via risk-based inspection per API 581), and out-of-service repairs per API 653 Part 9. Performed by an API 653 Authorized Inspector for refineries, terminals, and chemical plants.",
    bullets: [
      "External: visual + UT shell readings — interval up to 5 years",
      "Internal: bottom plate MFL + shell UT — interval extended via RBI",
      "Repair: NBIC + ASME PCC-2 — signed by Authorized Inspector"
    ]
  },
  "src/pages/blog/rt-vs-ut-complete-comparison.tsx": {
    question: "RT or UT — which inspection method should you choose?",
    answer: "Choose Radiographic Testing (RT) for permanent records, full volumetric coverage, and inspections of complex weld geometries. Choose Ultrasonic Testing (UT) for safer field deployment, real-time results, deep-section penetration (up to ~10 m), and automated scan capabilities. Most modern asset-integrity programs use both — UT for production weld inspection, RT for fitness-for-service evidence.",
    bullets: [
      "RT pros: permanent film/CR/DR record, defect type clear, all materials",
      "UT pros: no radiation safety zone, deeper penetration, automated/encoded scanning",
      "Cost: UT is 50-70% cheaper per linear foot of weld"
    ]
  },
  "src/pages/blog/eddy-current-testing-complete-guide.tsx": {
    question: "What is eddy current testing (ET) and when do you use it?",
    answer: "Eddy current testing (ET) is an electromagnetic NDT method that detects surface and near-surface defects in electrically conductive materials. A coil induces eddy currents in the part; defects disrupt the current and shift the coil impedance. Used in aerospace airframe inspection, heat-exchanger tubing (IRIS / NFA), bolt-hole inspection, and conductivity / coating-thickness measurement.",
    bullets: [
      "Best for: surface/near-surface cracks in non-magnetic conductors",
      "Limitations: depth < 5 mm typical, requires conductive material",
      "Standards: ASTM E309, EN ISO 15549, ASNT SNT-TC-1A ET Level II"
    ]
  },
  "src/pages/magnetic-particle-testing.tsx": {
    question: "What is magnetic particle testing (MT)?",
    answer: "Magnetic particle testing (MT or MPI) is a surface and near-surface NDT method for ferromagnetic materials. The part is magnetized; iron-oxide particles applied to the surface accumulate at flux leakage points, revealing cracks, seams, laps, and inclusions. Used in pipeline weld inspection, casting QC, forging inspection, and aircraft landing-gear inspection.",
    bullets: [
      "Best for: surface + near-surface cracks (≤2 mm deep) in steel, iron, nickel alloys",
      "Wet vs dry methods; AC for surface, DC for near-surface; yoke / coil / prods",
      "Standards: ASTM E709, ASME Section V Art. 7, ASNT SNT-TC-1A MT Level II"
    ]
  },
  "src/pages/ndt-technician-salary.tsx": {
    question: "What does an NDT technician earn?",
    answer: "NDT technician salaries depend on certification level, method, country, and industry. In 2026 the median ASNT Level II NDT technician earns $62,000 in the USA, $52,000 in Canada, £42,000 in the UK, AED 168,000 in the UAE, and ₹6.5 lakh in India. Specialist methods (PAUT, TOFD, IRIS) and offshore/sour-service work add 25-50% premiums.",
    bullets: [
      "Level I (entry): $40-55K USA, ₹2.5-4.5 lakh India",
      "Level II (technician): $55-85K USA, ₹4.5-12 lakh India",
      "Level III (technical authority): $95-150K+ USA, ₹15-35 lakh India"
    ]
  },
  "src/pages/blog/visual-testing.tsx": {
    question: "What is visual testing (VT) in NDT?",
    answer: "Visual testing (VT) is the foundational NDT method — direct or remote (borescope) examination of a surface for defects, condition, or accuracy. Used as the first step on virtually every inspection program: welds, castings, machined components, in-service equipment. Requires controlled lighting, viewing angle, magnification, and ASNT Level II VT certification for code-required acceptance decisions.",
    bullets: [
      "Direct VT: unaided eye + magnifier — 6 in. to 24 in. distance, ≥30° angle",
      "Remote VT: borescope, drone, ROV — confined spaces, high-temp, subsea",
      "Standards: ASME Section V Art. 9, ASNT SNT-TC-1A VT Level II"
    ]
  },
  "src/pages/blog/iso-9712-vs-asnt-snt-tc-1a-certification-comparison.tsx": {
    question: "ISO 9712 vs ASNT SNT-TC-1A — which certification do you need?",
    answer: "ISO 9712 is a third-party / central certification recognized globally (especially in Europe, Middle East, Asia-Pacific). ASNT SNT-TC-1A is an employer-based certification more common in North America. Many inspection contracts require ISO 9712 — projects under EN, BS, or international codes typically mandate it. ASNT-only certs may need recognition by an ISO 9712 body to work in EU / GCC / India.",
    bullets: [
      "ISO 9712: independent body issues cert; method-specific; renewable every 5 yrs",
      "SNT-TC-1A: employer issues cert; tied to employer; expires on job change",
      "ACCP: ASNT-administered third-party route compatible with ISO 9712"
    ]
  },
  "src/pages/blog/asnt-snt-tc-1a-certification-requirements.tsx": {
    question: "What does ASNT SNT-TC-1A 2024 require?",
    answer: "ASNT SNT-TC-1A (2024 edition) is the recommended practice for employer-based NDT personnel certification. It specifies minimum training hours, experience hours, vision acuity, written + practical examinations, and a Written Practice document the employer must publish. Employers Level III sign all qualification records.",
    bullets: [
      "Training hours per method (Level I/II): UT 40/40, RT 40/40, MT 12/24, PT 8/16, ET 40/40, VT 8/16",
      "Vision: Jaeger J-1 (near) at 12 in. + Ishihara colour test annually",
      "Written Practice: employer-specific document signed by responsible Level III"
    ]
  },
  "src/pages/blog/aws-d1-1-weld-acceptance-criteria-comprehensive-guide.tsx": {
    question: "What are the AWS D1.1 weld acceptance criteria?",
    answer: "AWS D1.1 Structural Welding Code—Steel sets acceptance criteria for visual + NDT inspection of statically and cyclically loaded welded steel structures. Defects evaluated include cracks (always rejectable), porosity, undercut, slag inclusions, and incomplete fusion — with explicit dimensional limits per defect type and per loading category.",
    bullets: [
      "Cracks: rejectable in all weld types and loading conditions",
      "Statically loaded: undercut ≤ 1/32 in. for material ≥1 in. thick",
      "Cyclically loaded: porosity ≤ 1/16 in. diameter, more restrictive criteria"
    ]
  },
  "src/pages/blog/asme-section-v-article-4-ut-requirements-explained.tsx": {
    question: "What does ASME Section V Article 4 require for UT?",
    answer: "ASME Section V Article 4 (latest 2023 edition) specifies the ultrasonic examination requirements for welds — equipment qualification, calibration block requirements, technique sheet content, scanning patterns (e.g. raster, ratchet), DAC / DGS / TCG calibration, and how to record and report indications. The article covers manual + automated UT (including PAUT and TOFD).",
    bullets: [
      "Calibration: side-drilled holes, notches, basic + DAC blocks per code-paragraph",
      "Scanning: minimum 10% overlap, scan speed limits per data-recording method",
      "Recording threshold: 20% DAC standard, lower for critical applications"
    ]
  },
  "src/pages/DigitalTwins.tsx": {
    question: "What is a digital twin for NDT and asset integrity?",
    answer: "A digital twin for NDT is a 3D model of an asset (refinery vessel, pipeline, FPSO, heat exchanger) overlaid with live inspection data — UT thickness readings, PAUT scans, corrosion rates, weld inspection results. It runs API 581 RBI calculations, API 579 fitness-for-service evaluations, and generates audit-ready evidence packs. Affordable, accessible, fully customizable.",
    bullets: [
      "Overlays UT/PAUT/TOFD scan data on 3D asset geometry",
      "Runs API 579 FFS and API 581 RBI workflows in real time",
      "Exports audit packs for insurer, regulator, and Jurisdictional inspector review"
    ]
  },
  "src/pages/Erp.tsx": {
    question: "What is Atlantis NDT ERP?",
    answer: "Atlantis NDT ERP is an Odoo 18-based business management platform pre-configured for NDT inspection companies, calibration laboratories, and asset-integrity service providers. It bundles 35+ Odoo apps (CRM, Project, Quality, HR, Inventory, Accounting, Field Service, Helpdesk, etc.) with NDT-specific layers: ASNT/ISO 9712 certification tracking, API 510/570/653 inspection-interval automation, RBI per API 581, and ASNT-aligned reporting. Affordable, accessible, fully customizable.",
    bullets: [
      "35+ Odoo apps bundled — no per-module licence",
      "NDT-method libraries: UT, RT, MT, PT, PAUT, TOFD, ECA, LRUT pre-loaded",
      "Operator portal integrations: Aramco APQS, ADNOC Tejari, Achilles, Avetta, ISNetworld"
    ]
  },
  "src/pages/ConsultingServices.tsx": {
    question: "What is ASNT Level III NDT consulting?",
    answer: "ASNT Level III NDT consulting provides the senior technical authority that NDT inspection programs require under SNT-TC-1A — written practice authoring, procedure approval, personnel qualification sign-off, audit defence, and expert witness opinions. An outsourced Level III consultant replaces full-time hire cost while delivering the same code-required authority. Affordable, accessible engagements.",
    bullets: [
      "Outsourced Level III of record — signs procedures, attends audits",
      "Written Practice authoring per SNT-TC-1A 2024 / CP-189 / ACCP / ISO 9712",
      "Expert witness, audit defence, FFS argument support"
    ]
  },
};

const COMPONENT_IMPORT = `import QuickAnswerBox from "@/components/QuickAnswerBox";\n`;

let touched = 0;
const failures = [];

for (const [rel, data] of Object.entries(TARGETS)) {
  const p = join(ROOT, rel.replace(/\//g, '\\'));
  let src;
  try { src = readFileSync(p, 'utf-8'); } catch (e) { failures.push({ file: rel, err: e.message }); continue; }
  if (src.includes('QuickAnswerBox')) { console.log('skip (already has):', rel); continue; }

  // Insert import after last @/components import
  const re = /import[^\n]+from\s+["']@\/components\/[^"']+["'];?[\r\n]+/g;
  let lastMatch = null;
  let m;
  while ((m = re.exec(src)) !== null) { lastMatch = m; }
  if (!lastMatch) { failures.push({ file: rel, err: 'no @/components import' }); continue; }
  const importEnd = lastMatch.index + lastMatch[0].length;
  let out = src.slice(0, importEnd) + COMPONENT_IMPORT + src.slice(importEnd);

  // Insert QuickAnswerBox after first <Breadcrumbs ... /> if present, else after <main ...>
  const bullets = data.bullets ? JSON.stringify(data.bullets) : 'undefined';
  const block = `\n        <QuickAnswerBox question=${JSON.stringify(data.question)} answer=${JSON.stringify(data.answer)} bullets={${bullets}} />\n`;

  if (/<Breadcrumbs[^>]*\/>/.test(out)) {
    out = out.replace(/(<Breadcrumbs[^>]*\/>)/, `$1${block}`);
  } else if (/<Navigation\s*\/>/.test(out)) {
    out = out.replace(/(<Navigation\s*\/>)/, `$1${block}`);
  } else {
    failures.push({ file: rel, err: 'no Breadcrumbs or Navigation found — manual insert needed' });
    continue;
  }

  try {
    writeFileSync(p, out, 'utf-8');
    touched++;
    console.log('injected:', rel);
  } catch (e) {
    failures.push({ file: rel, err: e.message });
  }
}

console.log(`\nDone. ${touched} / ${Object.keys(TARGETS).length} pages injected.`);
if (failures.length) console.log('Failures:', JSON.stringify(failures, null, 2));
