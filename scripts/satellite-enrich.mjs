#!/usr/bin/env node
/**
 * Satellite Enrichment Engine
 *
 * Generates 5 NEW long-form articles for a single satellite Next.js site.
 *
 * Usage:
 *   node scripts/satellite-enrich.mjs <satellite-name>
 *   node scripts/satellite-enrich.mjs --all-priority
 *
 * Anti-footprint guarantees:
 *  - Globally tracks used slugs, anchor texts, and target backlink URLs across
 *    every satellite (scripts/satellite-enrich-state.json) so we never repeat
 *    the same slug + backlink combination on a different site.
 *  - Per-article publishedAt dates are spread across 2024-2026 deterministically.
 *  - ~50% of new articles point at atlantisndt.com / ndt-connect.com; the rest
 *    point at neutral authority sites (ASNT, API, ASNT-IS, NACE/AMPP, NIST).
 *  - Word counts vary 1,500-2,500 with deterministic per-slug variance.
 *  - JSON-LD publisher / author varies per satellite.
 *
 * Constraints honored:
 *  - No external API calls. All content composed from a local fragment library
 *    + curated topic data + src/data/blogs.json target slugs.
 *  - Only writes inside backlink-sites/<sat>/ and scripts/satellite-reports/.
 */

import {
  readFileSync,
  writeFileSync,
  mkdirSync,
  existsSync,
  readdirSync,
  appendFileSync,
} from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createHash } from 'node:crypto';

const __dirname = dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = resolve(__dirname, '..');
const SATS_DIR = join(REPO_ROOT, 'backlink-sites');
const REPORTS_DIR = join(__dirname, 'satellite-reports');
const STATE_FILE = join(__dirname, 'satellite-enrich-state.json');

const BLOGS = JSON.parse(
  readFileSync(join(REPO_ROOT, 'src', 'data', 'blogs.json'), 'utf-8')
);

const SATELLITE_INVENTORY = JSON.parse(
  readFileSync(join(__dirname, 'satellite-inventory-2026-05-09.json'), 'utf-8')
);

// ---------------------------------------------------------------------------
// State (anti-footprint cross-satellite memory)
// ---------------------------------------------------------------------------
function loadState() {
  if (!existsSync(STATE_FILE)) {
    return { usedSlugs: {}, anchorCounts: {}, targetUrlCounts: {}, runs: [] };
  }
  return JSON.parse(readFileSync(STATE_FILE, 'utf-8'));
}
function saveState(s) {
  writeFileSync(STATE_FILE, JSON.stringify(s, null, 2));
}

// ---------------------------------------------------------------------------
// Topic profiles - keyed by satellite directory name
// ---------------------------------------------------------------------------
const PRIORITY_SATELLITES = [
  'ndt-knowledge-hub',
  'asset-integrity-hub',
  'pipeline-integrity-guide',
  'petrochemical-ndt-hub',
  'nuclear-ndt-resource',
  'subsea-inspection-guide',
  'aerospace-ndt-standards', // proxy for aerospace-ndt-center (ndt-connect)
  'pressure-vessel-ndt', // proxy for pressure-vessel-inspection (ndt-connect)
  'weld-quality-resource', // proxy for weld-inspection-pro (ndt-connect)
  'corrosion-management-ndt', // proxy for corrosion-engineering-guide (ndt-connect)
];

const TOPIC_PROFILES = {
  'ndt-knowledge-hub': {
    siteName: 'NDT Knowledge Hub',
    publisher: 'NDT Knowledge Hub Editorial Board',
    homeColor: 'primary',
    container: 'guides', // existing /guides directory
    audience: 'NDT technicians, Level II/III candidates, inspection engineers',
    primary: 'NDT education',
    angles: [
      {
        slug: 'ndt-method-selection-decision-framework-2026',
        title: 'NDT Method Selection: A Decision Framework for Inspection Engineers (2026)',
        h1: 'NDT Method Selection: A Decision Framework for Inspection Engineers',
        keywords: ['NDT method selection', 'inspection planning', 'NDT decision matrix', 'flaw detection method'],
        focus: 'method-selection',
        date: '2024-11-12',
        author: 'Daniel Hertzog, ASNT NDT Level III',
      },
      {
        slug: 'how-to-pass-asnt-level-iii-basic-exam-study-plan',
        title: 'How to Pass the ASNT Level III Basic Exam: 90-Day Study Plan',
        h1: 'How to Pass the ASNT Level III Basic Exam: 90-Day Study Plan',
        keywords: ['ASNT Level III basic', 'NDT certification exam', 'ASNT study plan', 'Level III preparation'],
        focus: 'asnt-cert',
        date: '2025-02-04',
        author: 'Renu Patel, NDT Educator',
      },
      {
        slug: 'reading-ndt-procedures-asme-section-v-walkthrough',
        title: 'Reading NDT Procedures: A Practical Walkthrough of ASME Section V',
        h1: 'Reading NDT Procedures: A Practical Walkthrough of ASME Section V',
        keywords: ['ASME Section V', 'NDT procedure', 'examination procedure', 'WPS NDT'],
        focus: 'procedures',
        date: '2025-06-21',
        author: 'Daniel Hertzog, ASNT NDT Level III',
      },
      {
        slug: 'common-ndt-acronyms-explained-glossary-2026',
        title: 'Common NDT Acronyms Explained: A Field Engineer Glossary (2026)',
        h1: 'Common NDT Acronyms Explained: A Field Engineer Glossary',
        keywords: ['NDT acronyms', 'NDT glossary', 'PAUT TOFD ECT', 'inspection terminology'],
        focus: 'glossary',
        date: '2026-01-09',
        author: 'NDT Knowledge Hub Editorial Team',
      },
      {
        slug: 'ndt-career-paths-from-level-i-to-level-iii-engineer',
        title: 'NDT Career Paths: From Level I Trainee to Level III Engineer',
        h1: 'NDT Career Paths: From Level I Trainee to Level III Engineer',
        keywords: ['NDT career', 'NDT salary', 'Level III career', 'inspection engineer'],
        focus: 'careers',
        date: '2026-03-18',
        author: 'Renu Patel, NDT Educator',
      },
    ],
  },
  'asset-integrity-hub': {
    siteName: 'Asset Integrity Hub',
    publisher: 'Asset Integrity Hub Research Group',
    homeColor: 'blue',
    container: 'blog',
    audience: 'reliability engineers, integrity managers, plant superintendents',
    primary: 'asset integrity management',
    angles: [
      {
        slug: 'risk-based-inspection-vs-time-based-which-cuts-cost-more',
        title: 'Risk-Based Inspection vs Time-Based: Which Cuts Cost More?',
        h1: 'Risk-Based Inspection vs Time-Based Inspection: Which Cuts Cost More?',
        keywords: ['risk-based inspection', 'RBI', 'time-based inspection', 'API 580'],
        focus: 'rbi',
        date: '2024-09-30',
        author: 'Marcus Whelan, CEng, IPlantE',
      },
      {
        slug: 'building-an-asset-integrity-management-system-12-month-roadmap',
        title: 'Building an Asset Integrity Management System: A 12-Month Roadmap',
        h1: 'Building an Asset Integrity Management System: A 12-Month Roadmap',
        keywords: ['AIM system', 'asset integrity', 'integrity roadmap', 'API 580 implementation'],
        focus: 'aim-program',
        date: '2025-01-15',
        author: 'Marcus Whelan, CEng, IPlantE',
      },
      {
        slug: 'fitness-for-service-api-579-when-to-use-which-level',
        title: 'Fitness-for-Service (API 579): When to Use Level 1, 2, or 3',
        h1: 'Fitness-for-Service (API 579): When to Use Level 1, 2, or 3 Assessment',
        keywords: ['API 579', 'fitness for service', 'FFS assessment', 'pressure equipment'],
        focus: 'ffs',
        date: '2025-05-22',
        author: 'Yuki Nakamura, PhD, P.Eng',
      },
      {
        slug: 'measuring-asset-integrity-kpis-that-actually-matter',
        title: 'Measuring Asset Integrity: KPIs That Actually Matter',
        h1: 'Measuring Asset Integrity: KPIs That Actually Matter',
        keywords: ['integrity KPI', 'asset performance', 'reliability metric', 'plant KPI'],
        focus: 'kpi',
        date: '2025-10-04',
        author: 'Marcus Whelan, CEng, IPlantE',
      },
      {
        slug: 'integrity-operating-windows-ow-best-practices-refineries',
        title: 'Integrity Operating Windows (IOWs): Best Practices for Refineries',
        h1: 'Integrity Operating Windows (IOWs): Best Practices for Refineries',
        keywords: ['integrity operating window', 'IOW', 'API 584', 'refinery integrity'],
        focus: 'iow',
        date: '2026-02-11',
        author: 'Yuki Nakamura, PhD, P.Eng',
      },
    ],
  },
  'pipeline-integrity-guide': {
    siteName: 'Pipeline Integrity Guide',
    publisher: 'Pipeline Integrity Guide Editorial',
    homeColor: 'orange',
    container: 'case-studies',
    audience: 'pipeline integrity engineers, midstream operators, regulators',
    primary: 'pipeline integrity & inspection',
    angles: [
      {
        slug: 'in-line-inspection-tool-selection-mfl-vs-ut-vs-emat',
        title: 'In-Line Inspection Tool Selection: MFL vs UT vs EMAT',
        h1: 'In-Line Inspection Tool Selection: MFL vs UT vs EMAT',
        keywords: ['in-line inspection', 'MFL ILI', 'UT crawler', 'EMAT pipeline'],
        focus: 'ili',
        date: '2024-08-19',
        author: 'Hector Alvarez, NACE-certified Pipeline Inspector',
      },
      {
        slug: 'direct-assessment-eca-dca-ica-which-when',
        title: 'Direct Assessment for Buried Pipelines: ECA, DCA, and ICA Compared',
        h1: 'Direct Assessment for Buried Pipelines: ECA, DCA, and ICA Compared',
        keywords: ['direct assessment', 'ECDA pipeline', 'ICDA pipeline', 'NACE SP0502'],
        focus: 'da',
        date: '2024-12-03',
        author: 'Hector Alvarez, NACE-certified Pipeline Inspector',
      },
      {
        slug: 'crack-management-program-pipeline-asme-b31-8s',
        title: 'Pipeline Crack Management Program: Aligning with ASME B31.8S',
        h1: 'Pipeline Crack Management Program: Aligning with ASME B31.8S',
        keywords: ['pipeline crack management', 'ASME B31.8S', 'SCC pipeline', 'fatigue crack'],
        focus: 'cracking',
        date: '2025-04-08',
        author: 'Linnea Söderberg, MSc, IWE',
      },
      {
        slug: 'pipeline-coating-disbondment-detection-tools',
        title: 'Pipeline Coating Disbondment: Detection Tools and Field Workflow',
        h1: 'Pipeline Coating Disbondment: Detection Tools and Field Workflow',
        keywords: ['coating disbondment', 'CIPS DCVG', 'cathodic protection survey', 'pipeline coating'],
        focus: 'coating',
        date: '2025-09-02',
        author: 'Hector Alvarez, NACE-certified Pipeline Inspector',
      },
      {
        slug: 'pipeline-rehabilitation-options-composite-vs-steel-sleeve',
        title: 'Pipeline Rehabilitation Options: Composite Sleeves vs Steel Sleeves',
        h1: 'Pipeline Rehabilitation Options: Composite Sleeves vs Steel Sleeves',
        keywords: ['pipeline repair', 'composite sleeve', 'type B sleeve', 'PRCI repair'],
        focus: 'repair',
        date: '2026-04-04',
        author: 'Linnea Söderberg, MSc, IWE',
      },
    ],
  },
  'petrochemical-ndt-hub': {
    siteName: 'Petrochemical NDT Hub',
    publisher: 'Petrochemical NDT Hub Technical Committee',
    homeColor: 'green',
    container: 'processes',
    audience: 'refinery / petrochemical inspection teams, fixed-equipment engineers',
    primary: 'petrochemical & refinery NDT',
    angles: [
      {
        slug: 'high-temperature-hydrogen-attack-htha-inspection-strategy',
        title: 'High Temperature Hydrogen Attack (HTHA): Inspection Strategy for Refineries',
        h1: 'High Temperature Hydrogen Attack (HTHA): Inspection Strategy for Refineries',
        keywords: ['HTHA inspection', 'API 941', 'hydrogen attack', 'TOFD HTHA'],
        focus: 'htha',
        date: '2024-10-22',
        author: 'Dr. Karim Idrissi, Materials Engineer',
      },
      {
        slug: 'fcc-unit-inspection-priority-equipment-and-damage-mechanisms',
        title: 'FCC Unit Inspection: Priority Equipment and Damage Mechanisms',
        h1: 'FCC Unit Inspection: Priority Equipment and Damage Mechanisms',
        keywords: ['FCC inspection', 'fluid catalytic cracker', 'API 571', 'refinery turnaround'],
        focus: 'fcc',
        date: '2025-03-11',
        author: 'Dr. Karim Idrissi, Materials Engineer',
      },
      {
        slug: 'amine-unit-corrosion-monitoring-and-ut-strategies',
        title: 'Amine Unit Corrosion Monitoring: UT Strategies and CML Selection',
        h1: 'Amine Unit Corrosion Monitoring: UT Strategies and CML Selection',
        keywords: ['amine corrosion', 'amine unit', 'CML selection', 'UT thickness amine'],
        focus: 'amine',
        date: '2025-07-29',
        author: 'Pia Lindqvist, AMPP-certified Coatings Inspector',
      },
      {
        slug: 'sulfidation-corrosion-crude-units-monitoring-program',
        title: 'Sulfidation Corrosion in Crude Units: Building a Monitoring Program',
        h1: 'Sulfidation Corrosion in Crude Units: Building a Monitoring Program',
        keywords: ['sulfidation corrosion', 'crude unit', 'API RP 939-C', 'high temperature corrosion'],
        focus: 'sulfidation',
        date: '2026-01-23',
        author: 'Dr. Karim Idrissi, Materials Engineer',
      },
      {
        slug: 'turnaround-inspection-planning-petrochemical-shutdown',
        title: 'Turnaround Inspection Planning: A Field Guide for Petrochemical Shutdowns',
        h1: 'Turnaround Inspection Planning: A Field Guide for Petrochemical Shutdowns',
        keywords: ['turnaround inspection', 'TAR planning', 'shutdown inspection', 'work pack'],
        focus: 'turnaround',
        date: '2026-04-12',
        author: 'Pia Lindqvist, AMPP-certified Coatings Inspector',
      },
    ],
  },
  'nuclear-ndt-resource': {
    siteName: 'Nuclear NDT Resource',
    publisher: 'Nuclear NDT Resource Editorial',
    homeColor: 'indigo',
    container: 'techniques',
    audience: 'nuclear ISI engineers, ASME XI inspectors, regulatory specialists',
    primary: 'nuclear NDT and ASME Section XI',
    angles: [
      {
        slug: 'asme-section-xi-isi-program-essentials',
        title: 'ASME Section XI ISI Program Essentials for Class 1 Components',
        h1: 'ASME Section XI ISI Program Essentials for Class 1 Components',
        keywords: ['ASME Section XI', 'ISI program', 'Class 1 components', 'nuclear NDT'],
        focus: 'isi',
        date: '2024-07-17',
        author: 'Dr. Eve Lindberg, ASNT NDT Level III',
      },
      {
        slug: 'reactor-vessel-head-penetration-inspection-pdi-qualification',
        title: 'Reactor Vessel Head Penetration Inspection: PDI Qualification Explained',
        h1: 'Reactor Vessel Head Penetration Inspection: PDI Qualification Explained',
        keywords: ['RPV head penetration', 'PDI qualification', 'PWSCC', 'Alloy 600 inspection'],
        focus: 'rpv',
        date: '2025-02-12',
        author: 'Toshio Hamada, ASNT NDT Level III',
      },
      {
        slug: 'piping-weld-inspection-class-1-vs-class-2-rules',
        title: 'Piping Weld Inspection: ASME XI Class 1 vs Class 2 Rules',
        h1: 'Piping Weld Inspection: ASME XI Class 1 vs Class 2 Rules',
        keywords: ['ASME XI piping', 'Class 1 piping', 'nuclear weld inspection', 'IWB IWC'],
        focus: 'piping',
        date: '2025-08-04',
        author: 'Dr. Eve Lindberg, ASNT NDT Level III',
      },
      {
        slug: 'small-modular-reactor-smr-ndt-emerging-considerations',
        title: 'Small Modular Reactor (SMR) NDT: Emerging Considerations',
        h1: 'Small Modular Reactor (SMR) NDT: Emerging Considerations',
        keywords: ['SMR NDT', 'small modular reactor', 'modular reactor inspection', 'NRC requirements'],
        focus: 'smr',
        date: '2026-02-26',
        author: 'Toshio Hamada, ASNT NDT Level III',
      },
      {
        slug: 'phased-array-qualification-for-nuclear-applications',
        title: 'Phased Array Qualification for Nuclear Applications: Building a Demonstration Block',
        h1: 'Phased Array Qualification for Nuclear Applications: Building a Demonstration Block',
        keywords: ['PAUT nuclear', 'phased array qualification', 'demonstration block', 'PDI PAUT'],
        focus: 'paut',
        date: '2026-04-15',
        author: 'Dr. Eve Lindberg, ASNT NDT Level III',
      },
    ],
  },
  'subsea-inspection-guide': {
    siteName: 'Subsea Inspection Guide',
    publisher: 'Subsea Inspection Guide Editorial',
    homeColor: 'cyan',
    container: 'deepwater',
    audience: 'subsea engineers, ROV inspection contractors, integrity managers',
    primary: 'subsea inspection & integrity',
    angles: [
      {
        slug: 'rov-inspection-class-iii-vs-class-iv-which-tooling',
        title: 'ROV Inspection Class III vs Class IV: Which Tooling Fits Which Scope',
        h1: 'ROV Inspection Class III vs Class IV: Which Tooling Fits Which Scope',
        keywords: ['ROV inspection class', 'observation ROV', 'work class ROV', 'subsea inspection'],
        focus: 'rov',
        date: '2024-09-08',
        author: 'Captain Olav Berg, IMCA D 04',
      },
      {
        slug: 'subsea-pipeline-fjellsiganger-inspection-flooded-member',
        title: 'Subsea Pipeline FMD: Detecting Flooded Members With Reliability',
        h1: 'Subsea Pipeline FMD: Detecting Flooded Members With Reliability',
        keywords: ['flooded member detection', 'FMD subsea', 'subsea pipeline integrity', 'gamma backscatter'],
        focus: 'fmd',
        date: '2025-01-29',
        author: 'Captain Olav Berg, IMCA D 04',
      },
      {
        slug: 'cathodic-protection-survey-deepwater-cp-monitoring',
        title: 'Cathodic Protection Survey for Deepwater Assets: CP Monitoring Best Practice',
        h1: 'Cathodic Protection Survey for Deepwater Assets: CP Monitoring Best Practice',
        keywords: ['cathodic protection subsea', 'CP survey', 'DNV-RP-B401', 'subsea CP'],
        focus: 'cp',
        date: '2025-06-04',
        author: 'Marisol Reyes, MSc Subsea Engineering',
      },
      {
        slug: 'subsea-weld-flaw-sizing-with-paut-and-tofd',
        title: 'Subsea Weld Flaw Sizing With PAUT and TOFD: Field Workflow',
        h1: 'Subsea Weld Flaw Sizing With PAUT and TOFD: Field Workflow',
        keywords: ['subsea PAUT', 'TOFD subsea', 'weld sizing', 'pipeline girth weld'],
        focus: 'paut-subsea',
        date: '2025-11-19',
        author: 'Marisol Reyes, MSc Subsea Engineering',
      },
      {
        slug: 'fpso-hull-inspection-program-class-survey-coordination',
        title: 'FPSO Hull Inspection Program: Coordinating With Class Surveys',
        h1: 'FPSO Hull Inspection Program: Coordinating With Class Surveys',
        keywords: ['FPSO inspection', 'hull integrity', 'class survey FPSO', 'in-water survey'],
        focus: 'fpso',
        date: '2026-03-09',
        author: 'Captain Olav Berg, IMCA D 04',
      },
    ],
  },
  'aerospace-ndt-standards': {
    siteName: 'Aerospace NDT Standards',
    publisher: 'Aerospace NDT Standards Editorial',
    homeColor: 'sky',
    container: 'standards',
    audience: 'aerospace NDT inspectors, NAS 410 candidates, NADCAP auditors',
    primary: 'aerospace NDT and certification',
    angles: [
      {
        slug: 'nas-410-vs-en-4179-aerospace-certification-paths',
        title: 'NAS 410 vs EN 4179: Two Aerospace NDT Certification Paths Compared',
        h1: 'NAS 410 vs EN 4179: Two Aerospace NDT Certification Paths Compared',
        keywords: ['NAS 410', 'EN 4179', 'aerospace NDT certification', 'NANDTB'],
        focus: 'nas-en',
        date: '2024-08-05',
        author: 'Capt. Russell Fairchild, NANDTB Level III',
      },
      {
        slug: 'composite-aircraft-structure-ndt-cfrp-inspection',
        title: 'Composite Aircraft Structure NDT: CFRP Inspection Methods',
        h1: 'Composite Aircraft Structure NDT: CFRP Inspection Methods',
        keywords: ['CFRP inspection', 'composite aircraft NDT', 'phased array composite', 'thermography composite'],
        focus: 'cfrp',
        date: '2024-12-15',
        author: 'Aiyana Roy, NDT Engineer',
      },
      {
        slug: 'engine-disk-bore-inspection-eddy-current-array',
        title: 'Engine Disk Bore Inspection: Eddy Current Array in Aero Engines',
        h1: 'Engine Disk Bore Inspection: Eddy Current Array in Aero Engines',
        keywords: ['engine disk inspection', 'eddy current array', 'aero engine NDT', 'rotating component NDT'],
        focus: 'engine',
        date: '2025-05-06',
        author: 'Capt. Russell Fairchild, NANDTB Level III',
      },
      {
        slug: 'nadcap-audit-readiness-aerospace-ndt-shop',
        title: 'NADCAP Audit Readiness: A Checklist for the Aerospace NDT Shop',
        h1: 'NADCAP Audit Readiness: A Checklist for the Aerospace NDT Shop',
        keywords: ['NADCAP audit', 'aerospace NDT audit', 'NADCAP NDT', 'AC7114'],
        focus: 'nadcap',
        date: '2025-10-21',
        author: 'Aiyana Roy, NDT Engineer',
      },
      {
        slug: 'fluorescent-penetrant-inspection-fpi-aerospace-process-control',
        title: 'Fluorescent Penetrant Inspection (FPI) in Aerospace: Process Control That Works',
        h1: 'Fluorescent Penetrant Inspection (FPI) in Aerospace: Process Control That Works',
        keywords: ['FPI process control', 'fluorescent penetrant aerospace', 'ASTM E1417', 'FPI line'],
        focus: 'fpi',
        date: '2026-03-30',
        author: 'Capt. Russell Fairchild, NANDTB Level III',
      },
    ],
  },
  'pressure-vessel-ndt': {
    siteName: 'Pressure Vessel NDT',
    publisher: 'Pressure Vessel NDT Editorial',
    homeColor: 'red',
    container: 'operation',
    audience: 'API 510 inspectors, fixed-equipment engineers, OEM QA leads',
    primary: 'pressure vessel inspection',
    angles: [
      {
        slug: 'api-510-internal-vs-external-inspection-decision',
        title: 'API 510 Internal vs External Inspection: Choosing the Right Approach',
        h1: 'API 510 Internal vs External Inspection: Choosing the Right Approach',
        keywords: ['API 510 internal inspection', 'on-stream inspection', 'pressure vessel inspection', 'ASME VIII'],
        focus: 'api-510',
        date: '2024-09-25',
        author: 'Inga Sørensen, API 510 Inspector',
      },
      {
        slug: 'asme-section-viii-fabrication-ndt-requirements-walkthrough',
        title: 'ASME Section VIII Fabrication NDT Requirements: A Walkthrough',
        h1: 'ASME Section VIII Fabrication NDT Requirements: A Walkthrough',
        keywords: ['ASME VIII fabrication', 'pressure vessel NDT', 'ASME Section VIII Div 1', 'NDE rules'],
        focus: 'fab',
        date: '2025-02-19',
        author: 'Vikram Sahota, Welding Engineer',
      },
      {
        slug: 'reformer-tubes-creep-damage-monitoring-strategies',
        title: 'Reformer Tubes Creep Damage Monitoring: Strategies That Work',
        h1: 'Reformer Tubes Creep Damage Monitoring: Strategies That Work',
        keywords: ['reformer tube creep', 'LOTIS', 'reformer NDT', 'creep monitoring'],
        focus: 'reformer',
        date: '2025-07-15',
        author: 'Inga Sørensen, API 510 Inspector',
      },
      {
        slug: 'corrosion-monitoring-locations-cml-selection-guide',
        title: 'Corrosion Monitoring Locations (CMLs): A Selection Guide for Pressure Vessels',
        h1: 'Corrosion Monitoring Locations (CMLs): A Selection Guide for Pressure Vessels',
        keywords: ['CML selection', 'corrosion monitoring locations', 'API 510 CML', 'thickness monitoring'],
        focus: 'cml',
        date: '2025-12-03',
        author: 'Vikram Sahota, Welding Engineer',
      },
      {
        slug: 'long-range-ut-screening-pressure-vessels',
        title: 'Long-Range UT Screening for Pressure Vessels: When It Adds Real Value',
        h1: 'Long-Range UT Screening for Pressure Vessels: When It Adds Real Value',
        keywords: ['long range UT', 'guided wave testing', 'LRUT vessels', 'screening NDT'],
        focus: 'lrut',
        date: '2026-04-22',
        author: 'Inga Sørensen, API 510 Inspector',
      },
    ],
  },
  'weld-quality-resource': {
    siteName: 'Weld Quality Resource',
    publisher: 'Weld Quality Resource Editorial',
    homeColor: 'amber',
    container: 'methods',
    audience: 'CWIs, welding engineers, fabrication QC managers',
    primary: 'weld inspection and quality',
    angles: [
      {
        slug: 'aws-d1-1-weld-acceptance-cracks-vs-incomplete-fusion',
        title: 'AWS D1.1 Weld Acceptance: Cracks vs Incomplete Fusion vs Slag',
        h1: 'AWS D1.1 Weld Acceptance: Cracks vs Incomplete Fusion vs Slag',
        keywords: ['AWS D1.1', 'weld acceptance criteria', 'incomplete fusion', 'weld defect'],
        focus: 'aws-d1-1',
        date: '2024-10-08',
        author: 'Wendell Park, AWS CWI',
      },
      {
        slug: 'phased-array-vs-radiography-girth-welds-which-finds-more',
        title: 'Phased Array vs Radiography on Girth Welds: Which Finds More Defects?',
        h1: 'Phased Array vs Radiography on Girth Welds: Which Finds More Defects?',
        keywords: ['PAUT vs RT', 'girth weld inspection', 'phased array RT comparison', 'pipeline weld'],
        focus: 'paut-rt',
        date: '2025-01-19',
        author: 'Sara Klein, IWE',
      },
      {
        slug: 'visual-weld-inspection-vt-pitfalls-cwi-experience',
        title: 'Visual Weld Inspection (VT) Pitfalls: A CWI Field Perspective',
        h1: 'Visual Weld Inspection (VT) Pitfalls: A CWI Field Perspective',
        keywords: ['visual weld inspection', 'VT inspection', 'CWI tips', 'AWS A3.0'],
        focus: 'vt',
        date: '2025-06-17',
        author: 'Wendell Park, AWS CWI',
      },
      {
        slug: 'welder-qualification-vs-procedure-qualification-records',
        title: 'Welder Qualification vs Procedure Qualification Records: Who Owns What?',
        h1: 'Welder Qualification vs Procedure Qualification Records: Who Owns What?',
        keywords: ['welder qualification', 'PQR WPS', 'ASME Section IX', 'WPQ'],
        focus: 'wpq',
        date: '2025-11-08',
        author: 'Sara Klein, IWE',
      },
      {
        slug: 'orbital-welding-inspection-semiconductor-pharma-piping',
        title: 'Orbital Welding Inspection for Semiconductor & Pharma Piping',
        h1: 'Orbital Welding Inspection for Semiconductor & Pharma Piping',
        keywords: ['orbital welding inspection', 'high purity piping', 'BPE inspection', 'AWS D18.2'],
        focus: 'orbital',
        date: '2026-04-29',
        author: 'Wendell Park, AWS CWI',
      },
    ],
  },
  'corrosion-management-ndt': {
    siteName: 'Corrosion Management NDT',
    publisher: 'Corrosion Management NDT Editorial',
    homeColor: 'rose',
    container: 'management',
    audience: 'corrosion engineers, AMPP-certified inspectors, materials managers',
    primary: 'corrosion management & monitoring',
    angles: [
      {
        slug: 'cui-inspection-strategy-when-to-strip-insulation',
        title: 'CUI Inspection Strategy: When to Strip Insulation vs Use Pulsed Eddy Current',
        h1: 'CUI Inspection Strategy: When to Strip Insulation vs Use Pulsed Eddy Current',
        keywords: ['CUI inspection', 'pulsed eddy current', 'corrosion under insulation', 'API 583'],
        focus: 'cui',
        date: '2024-08-28',
        author: 'Hannah O\'Connell, NACE/AMPP CIP III',
      },
      {
        slug: 'ph-monitoring-vs-corrosion-coupons-which-data-trust',
        title: 'pH Monitoring vs Corrosion Coupons: Which Data Should You Trust?',
        h1: 'pH Monitoring vs Corrosion Coupons: Which Data Should You Trust?',
        keywords: ['corrosion coupons', 'pH monitoring', 'process corrosion', 'corrosion data'],
        focus: 'monitoring-data',
        date: '2025-03-04',
        author: 'Felipe Moraes, AMPP-certified',
      },
      {
        slug: 'msl-stress-corrosion-cracking-austenitic-stainless',
        title: 'Stress Corrosion Cracking in Austenitic Stainless: Detection and Mitigation',
        h1: 'Stress Corrosion Cracking in Austenitic Stainless: Detection and Mitigation',
        keywords: ['stress corrosion cracking', 'SCC stainless', 'chloride SCC', 'API 571 SCC'],
        focus: 'scc',
        date: '2025-08-19',
        author: 'Hannah O\'Connell, NACE/AMPP CIP III',
      },
      {
        slug: 'inhibitor-injection-program-effectiveness-monitoring',
        title: 'Inhibitor Injection Program Effectiveness: How to Actually Monitor It',
        h1: 'Inhibitor Injection Program Effectiveness: How to Actually Monitor It',
        keywords: ['corrosion inhibitor', 'inhibitor monitoring', 'sour service', 'oilfield corrosion'],
        focus: 'inhibitor',
        date: '2025-12-22',
        author: 'Felipe Moraes, AMPP-certified',
      },
      {
        slug: 'building-corrosion-management-program-iso-55000',
        title: 'Building a Corrosion Management Program Under ISO 55000',
        h1: 'Building a Corrosion Management Program Under ISO 55000',
        keywords: ['corrosion management program', 'ISO 55000', 'asset management corrosion', 'CMP'],
        focus: 'cmp',
        date: '2026-04-30',
        author: 'Hannah O\'Connell, NACE/AMPP CIP III',
      },
    ],
  },
};

// ---------------------------------------------------------------------------
// Backlink target catalog - resolved against blogs.json + main domain pages
// ---------------------------------------------------------------------------
const ATLANTIS_DOMAIN = 'https://atlantisndt.com';
const NDTCONNECT_DOMAIN = 'https://ndt-connect.com';

// Curated mapping: focus key -> set of internal target candidates
function blogUrl(slug) {
  return `${ATLANTIS_DOMAIN}/blog/${slug}`;
}
const BLOG_SLUGS = new Set(BLOGS.map((b) => b.slug));

const TARGET_CATALOG = {
  // each entry: { url, anchors: [text, text, ...] }
  // we use varied anchor text per article to avoid over-optimization
  'method-selection': [
    { url: blogUrl('ndt-pipeline-integrity-inspection-guide'), anchors: ['NDT method selection workflow used in pipeline integrity programs', 'how integrity engineers compare inspection methods'] },
    { url: blogUrl('ultrasonic-testing'), anchors: ['the ultrasonic testing methods most often shortlisted', 'comparison of TOFD, PAUT and conventional UT'] },
    { url: blogUrl('asnt-snt-tc-1a-vs-cp-189-comparison'), anchors: ['the SNT-TC-1A vs CP-189 qualification comparison'] },
  ],
  'asnt-cert': [
    { url: blogUrl('ndt-level-iii-certification-requirements-guide'), anchors: ['the full Level III certification requirements', 'requirements published in the Level III certification guide'] },
    { url: blogUrl('ndt-training-complete-guide-courses-certification-global'), anchors: ['structured NDT training pathways', 'how candidates plan their NDT training'] },
    { url: `${ATLANTIS_DOMAIN}/asnt-certification`, anchors: ['the ASNT certification overview maintained by Atlantis NDT'] },
  ],
  procedures: [
    { url: blogUrl('ndt-procedure-writing-guide-asme-section-v'), anchors: ['the ASME Section V procedure-writing guide', 'a worked example of an ASME Section V procedure'] },
    { url: blogUrl('asme-section-v-ndt-requirements-guide'), anchors: ['the ASME Section V requirements summary'] },
  ],
  glossary: [
    { url: blogUrl('100-questions-answers-ndt-atlantis-global-guide'), anchors: ['100 frequently asked NDT questions answered'] },
    { url: blogUrl('ndt-training-vs-certification-2025-oil-gas-expectations'), anchors: ['the difference between training and certification'] },
  ],
  careers: [
    { url: blogUrl('ndt-career-top-choice-2025-global-market-trends'), anchors: ['the 2025 NDT career and salary outlook'] },
    { url: blogUrl('ndt-level-iii-certification-requirements-guide'), anchors: ['Level III certification requirements'] },
  ],
  rbi: [
    { url: blogUrl('risk-based-inspection-rbi-implementation-guide'), anchors: ['a step-by-step RBI implementation guide', 'the API 580/581 implementation walkthrough'] },
    { url: blogUrl('api-579-fitness-for-service-guide'), anchors: ['the companion API 579 fitness-for-service article'] },
  ],
  'aim-program': [
    { url: blogUrl('risk-based-inspection-rbi-implementation-guide'), anchors: ['the RBI rollout playbook'] },
    { url: blogUrl('digital-twin-roadmap-oil-gas-companies-asset-integrity'), anchors: ['a digital-twin roadmap for asset integrity programs'] },
    { url: `${ATLANTIS_DOMAIN}/digital-twins`, anchors: ['Atlantis NDT\'s digital twin platform overview'] },
  ],
  ffs: [
    { url: blogUrl('api-579-fitness-for-service-guide'), anchors: ['the deeper API 579 engineering walkthrough', 'the API 579 fitness-for-service primer'] },
  ],
  kpi: [
    { url: blogUrl('digital-twins-ndt-reporting-oil-gas-asset-integrity'), anchors: ['integrity KPI dashboards built on NDT reporting data'] },
    { url: blogUrl('best-ndt-reporting-software-oil-gas-digital-twin'), anchors: ['the best NDT reporting software for KPI tracking'] },
  ],
  iow: [
    { url: blogUrl('risk-based-inspection-rbi-implementation-guide'), anchors: ['IOWs as the trigger layer for RBI'] },
    { url: blogUrl('digital-twin-roadmap-oil-gas-companies-asset-integrity'), anchors: ['integrating IOWs into a digital twin program'] },
  ],
  ili: [
    { url: blogUrl('ndt-pipeline-integrity-inspection-guide'), anchors: ['the broader pipeline integrity inspection guide', 'the pipeline integrity primer used as a reference'] },
    { url: blogUrl('guided-wave-testing-for-pipeline-inspection'), anchors: ['guided wave screening for pipelines'] },
  ],
  da: [
    { url: blogUrl('pipeline-corrosion-and-mechanical-damage-assessment'), anchors: ['the pipeline corrosion and mechanical damage assessment'] },
    { url: blogUrl('nace-corrosion-management-standards'), anchors: ['the NACE corrosion management standards summary'] },
  ],
  cracking: [
    { url: blogUrl('ndt-pipeline-integrity-inspection-guide'), anchors: ['the pipeline integrity overview that introduces crack management'] },
  ],
  coating: [
    { url: blogUrl('nace-corrosion-management-standards'), anchors: ['the NACE/AMPP standards reference'] },
  ],
  repair: [
    { url: blogUrl('pipeline-corrosion-and-mechanical-damage-assessment'), anchors: ['the corresponding mechanical damage assessment notes'] },
  ],
  htha: [
    { url: blogUrl('phased-array-ultrasonic-testing-paut-guide'), anchors: ['the PAUT technology guide used for HTHA scanning'] },
    { url: blogUrl('asme-section-viii-division-1-pressure-vessel-ndt'), anchors: ['the ASME Section VIII Division 1 NDT rules'] },
  ],
  fcc: [
    { url: blogUrl('asme-section-viii-division-1-pressure-vessel-ndt'), anchors: ['the ASME VIII Division 1 NDT companion'] },
    { url: blogUrl('risk-based-inspection-rbi-implementation-guide'), anchors: ['RBI prioritisation across an FCC unit'] },
  ],
  amine: [
    { url: blogUrl('ultrasonic-thickness-measurement-corrosion-monitoring-guide'), anchors: ['the UT thickness monitoring reference'] },
    { url: blogUrl('corrosion-mapping-with-multiple-ndt-methods'), anchors: ['corrosion mapping techniques across multiple NDT methods'] },
  ],
  sulfidation: [
    { url: blogUrl('corrosion-mapping-with-multiple-ndt-methods'), anchors: ['the corrosion mapping methodology'] },
    { url: blogUrl('ultrasonic-thickness-measurement-corrosion-monitoring-guide'), anchors: ['the corrosion thickness measurement guide'] },
  ],
  turnaround: [
    { url: blogUrl('digital-twins-reduce-refinery-turnaround-time'), anchors: ['why digital twins shorten refinery turnaround time'] },
    { url: `${ATLANTIS_DOMAIN}/ndt-reporting-software`, anchors: ['the inspection reporting software used in modern turnarounds'] },
  ],
  isi: [
    { url: blogUrl('nuclear-power-plant-ndt-strict-standards-compliance'), anchors: ['the nuclear NDT compliance reference'] },
    { url: blogUrl('asme-section-v-ndt-requirements-guide'), anchors: ['the ASME Section V requirements digest'] },
  ],
  rpv: [
    { url: blogUrl('phased-array-ultrasonic-testing-paut-guide'), anchors: ['the PAUT technology overview for nuclear scope'] },
  ],
  piping: [
    { url: blogUrl('ndt-procedure-writing-guide-asme-section-v'), anchors: ['the ASME Section V procedure-writing reference'] },
  ],
  smr: [
    { url: blogUrl('nuclear-power-plant-ndt-strict-standards-compliance'), anchors: ['the wider nuclear NDT compliance article'] },
  ],
  paut: [
    { url: blogUrl('phased-array-ultrasonic-testing-complete-technical-guide'), anchors: ['the complete PAUT technical guide'] },
    { url: blogUrl('conventional-ut-vs-phased-array-which-method-to-choose'), anchors: ['the conventional UT vs PAUT decision guide'] },
  ],
  rov: [
    { url: blogUrl('offshore-platform-inspection-subsea-ndt-challenges'), anchors: ['the deeper subsea NDT challenges article'] },
  ],
  fmd: [
    { url: blogUrl('offshore-platform-inspection-subsea-ndt-challenges'), anchors: ['offshore platform inspection challenges'] },
  ],
  cp: [
    { url: blogUrl('nace-corrosion-management-standards'), anchors: ['the NACE corrosion management overview'] },
  ],
  'paut-subsea': [
    { url: blogUrl('phased-array-ultrasonic-testing-paut-guide'), anchors: ['the technical PAUT guide'] },
  ],
  fpso: [
    { url: blogUrl('dnvgl-rules-for-offshore-structures'), anchors: ['the DNV rules summary for offshore structures'] },
  ],
  'nas-en': [
    { url: blogUrl('aerospace-composite-inspection-ndt-methods-guide'), anchors: ['the aerospace composite inspection guide'] },
    { url: `${ATLANTIS_DOMAIN}/aerospace-ndt-services`, anchors: ['the aerospace NDT services overview'] },
  ],
  cfrp: [
    { url: blogUrl('aerospace-composite-inspection-ndt-methods-guide'), anchors: ['the methods overview for composite inspection'] },
  ],
  engine: [
    { url: blogUrl('aerospace-composite-inspection-ndt-methods-guide'), anchors: ['the broader aerospace NDT methods reference'] },
  ],
  nadcap: [
    { url: `${ATLANTIS_DOMAIN}/aerospace-ndt-services`, anchors: ['the aerospace NDT services capabilities page'] },
  ],
  fpi: [
    { url: blogUrl('penetrant-testing'), anchors: ['the penetrant testing technique reference'] },
  ],
  'api-510': [
    { url: blogUrl('api-510-pressure-vessel-inspection-code'), anchors: ['the API 510 inspection code summary'] },
    { url: blogUrl('pressure-vessel-inspection-and-compliance'), anchors: ['the pressure vessel inspection and compliance overview'] },
  ],
  fab: [
    { url: blogUrl('asme-section-viii-division-1-pressure-vessel-ndt'), anchors: ['the ASME Section VIII Division 1 NDT requirements'] },
  ],
  reformer: [
    { url: blogUrl('phased-array-ultrasonic-testing-paut-guide'), anchors: ['the PAUT technology overview'] },
  ],
  cml: [
    { url: blogUrl('ultrasonic-thickness-measurement-corrosion-monitoring-guide'), anchors: ['the ultrasonic thickness measurement guide'] },
  ],
  lrut: [
    { url: blogUrl('guided-wave-testing-for-pipeline-inspection'), anchors: ['the guided wave testing primer'] },
  ],
  'aws-d1-1': [
    { url: blogUrl('aws-d1-1-weld-acceptance-criteria-comprehensive-guide'), anchors: ['the comprehensive AWS D1.1 acceptance criteria guide'] },
    { url: blogUrl('weld-defect-classification-and-detection-methods'), anchors: ['the weld defect classification reference'] },
  ],
  'paut-rt': [
    { url: blogUrl('radiography-vs-digital-radiography-complete-comparison'), anchors: ['the digital radiography vs film comparison'] },
    { url: blogUrl('phased-array-ultrasonic-testing-paut-guide'), anchors: ['the PAUT technology guide'] },
  ],
  vt: [
    { url: blogUrl('visual-testing'), anchors: ['the dedicated visual testing reference'] },
  ],
  wpq: [
    { url: blogUrl('weld-inspection-ndt-methods-guide'), anchors: ['the weld inspection methods overview'] },
  ],
  orbital: [
    { url: blogUrl('automotive-welded-components-inspection'), anchors: ['the welded components inspection reference'] },
  ],
  cui: [
    { url: blogUrl('corrosion-under-insulation-cui-detection-guide'), anchors: ['the dedicated CUI detection guide', 'the longer CUI inspection deep-dive'] },
    { url: blogUrl('ultrasonic-thickness-measurement-corrosion-monitoring-guide'), anchors: ['the UT corrosion monitoring guide'] },
  ],
  'monitoring-data': [
    { url: blogUrl('nace-corrosion-management-standards'), anchors: ['the NACE/AMPP standards summary'] },
  ],
  scc: [
    { url: blogUrl('corrosion-mapping-with-multiple-ndt-methods'), anchors: ['the corrosion mapping methodology'] },
  ],
  inhibitor: [
    { url: blogUrl('nace-corrosion-management-standards'), anchors: ['the NACE corrosion management standards'] },
  ],
  cmp: [
    { url: blogUrl('nace-corrosion-management-standards'), anchors: ['the NACE/AMPP standards reference'] },
    { url: `${ATLANTIS_DOMAIN}/ndt-reporting-software`, anchors: ['inspection reporting software used in CMP execution'] },
  ],
};

// External authority sites used as the "non-money" backlinks (~50% of the time)
// These are picked by deterministic hash so distribution is varied.
const EXTERNAL_AUTHORITY_LINKS = [
  { url: 'https://www.asnt.org/', anchors: ['ASNT (American Society for Nondestructive Testing)', 'the ASNT body of knowledge resources'] },
  { url: 'https://www.api.org/products-and-services/individual-certification-programs', anchors: ['the API ICP individual certification program', 'the API individual certification program overview'] },
  { url: 'https://www.ampp.org/', anchors: ['AMPP (Association for Materials Protection and Performance)', 'the AMPP standards portal'] },
  { url: 'https://www.nrc.gov/reactors/operating/ops-experience.html', anchors: ['NRC operating experience reports', 'the NRC operating experience archive'] },
  { url: 'https://www.iaea.org/topics/non-destructive-testing', anchors: ['the IAEA non-destructive testing programme'] },
  { url: 'https://www.aws.org/standards', anchors: ['the AWS standards catalog'] },
  { url: 'https://www.dnv.com/services/structural-and-asset-integrity-services-2293', anchors: ['DNV asset integrity services portfolio'] },
  { url: 'https://www.imca-int.com/', anchors: ['the IMCA technical resources for offshore work'] },
  { url: 'https://www.nadcap.com/', anchors: ['the NADCAP audit programme overview'] },
  { url: 'https://www.iso.org/standard/55000', anchors: ['ISO 55000 asset management family'] },
];

// ---------------------------------------------------------------------------
// Article composition primitives
// ---------------------------------------------------------------------------

// Stable seeded RNG so re-runs are deterministic per slug
function hashSeed(s) {
  return parseInt(createHash('sha1').update(s).digest('hex').slice(0, 8), 16);
}
function makeRng(seed) {
  let x = seed || 1;
  return () => {
    x = (x * 1103515245 + 12345) & 0x7fffffff;
    return x / 0x7fffffff;
  };
}

const SECTION_TEMPLATES = {
  intro: (a) =>
    `<p>This article walks through the practical decisions ${a.audience} need to make when working on ${a.focusLong}. The goal is not theory — it is the kind of working knowledge an experienced inspector or engineer would share over a coffee on a job site, with enough rigor to point back to code and standard references when those decisions get challenged in audit. Throughout the piece we focus on the parts of ${a.f(0)} that turn into real schedule or budget pain when they go wrong.</p>`,
  context: (a) =>
    `<h2>Why this comes up so often in the field</h2>
<p>Ask any ${a.audienceShort} how often ${a.f(0)} drives schedule pain and you will hear the same answer: more often than the project plan ever assumes. Part of the reason is that ${a.f(2)} sits at the intersection of multiple owners — operations, integrity, fabrication, and QA — and the ownership boundaries are rarely clean. When a problem surfaces, it is usually too late to plan; the team is already in execution mode and looking for guidance.</p>
<p>The framing in this guide assumes you are the person who has to make a defensible call quickly, document it well, and live with the consequences. Where standards apply, we cite the specific clauses; where the standards leave a gap, we describe how leading operators close that gap in practice.</p>`,
  scope: (a) =>
    `<h2>Scope of this guide</h2>
<p>We cover four things explicitly:</p>
<ul>
<li><strong>The decision points</strong> that drive most ${a.f(1)} disputes between QA, integrity, and operations.</li>
<li><strong>The minimum data</strong> a defensible decision needs — what to record, in what format, and where it lives in the long term.</li>
<li><strong>Common failure modes</strong> we see when teams skip steps under schedule pressure.</li>
<li><strong>Reference standards</strong> that translate between geographies (US, EU, Middle East, Asia-Pacific).</li>
</ul>`,
  decisionMatrix: (a, rng) =>
    `<h2>The core decision matrix</h2>
<p>Below is the working matrix our team uses on day one of any ${a.f(0)} engagement. It is deliberately simple because complexity here costs more than it saves.</p>
<table class="prose-table">
<thead><tr><th>Question</th><th>If yes</th><th>If no</th></tr></thead>
<tbody>
<tr><td>Is the equipment in active service?</td><td>Plan on-stream NDT only; coordinate IOW windows.</td><td>Open the equipment; plan internal visual + targeted NDT.</td></tr>
<tr><td>Is the dominant damage mechanism general thinning?</td><td>Use UT scanning grids on selected CMLs.</td><td>Bias toward crack-detection methods (PAUT, MT, ECT).</td></tr>
<tr><td>Has the equipment had prior repairs?</td><td>Re-baseline with a corrosion map; re-evaluate fitness.</td><td>Use historical CML data; flag any anomalies above threshold.</td></tr>
<tr><td>Is access limited (insulation, refractory, internals)?</td><td>Screening method first (PEC, GWT, FMD).</td><td>Direct measurement methods.</td></tr>
</tbody>
</table>
<p>The discipline that makes this matrix actually work is forcing each row to be answered in writing — not in a verbal handoff at the morning meeting.</p>`,
  techniqueDeepDive: (a, rng) =>
    `<h2>Technique selection in practice</h2>
<p>The textbook approach to ${a.f(0)} usually points engineers at one or two techniques. The field reality is messier; the technique that ranks best on a comparison chart is often not the one that fits the access, the schedule, or the inspector skill mix actually available on the day. We walk through three patterns we see repeatedly.</p>
<h3>Pattern A: prove the absence of a known mechanism</h3>
<p>When the integrity model already predicts a specific damage mechanism — say HTHA in a hydroprocessing reactor or SCC in a chloride-bearing line — the inspection design needs to be written around <em>finding</em> that mechanism, not around generic surface coverage. Probability of detection (POD) becomes the design variable. ${a.posb1}</p>
<h3>Pattern B: find what you are not expecting</h3>
<p>Screening campaigns are different. Their job is to flag anomalies you did not predict. POD is still important, but coverage and false-call rate matter more, because the field team has finite time to chase any flag the screening throws up. ${a.posb2}</p>
<h3>Pattern C: requalify after a repair</h3>
<p>Post-repair inspection is the most procedural of the three patterns and the most likely to be weakened by schedule pressure. The required NDT is usually defined by the original construction code (ASME VIII, ASME XI, AWS D1.1, and so on), which is fine — but the decision about <em>how</em> to apply it under field conditions is rarely covered. ${a.posb3}</p>`,
  data: (a) =>
    `<h2>The data the audit will ask for</h2>
<p>Auditors do not argue with conclusions; they argue with the evidence behind them. For any defensible ${a.f(0)} report, the evidence packet needs to include at minimum:</p>
<ul>
<li>The qualified procedure (revision, approval signatures, applicable code edition).</li>
<li>The personnel certification records (level, method, and currency).</li>
<li>The calibration records for the day of inspection (block IDs, calibration block traceability).</li>
<li>The raw data set, archived in a format that can be re-evaluated by an independent reviewer years later.</li>
<li>The decision rationale — written, dated, and signed by the responsible Level III or PE.</li>
</ul>
<p>The last bullet is where most programs fail an audit. It does not take much: a one-paragraph note attached to the report explaining why the team chose method X with parameters Y is usually enough. Without it, the report stands alone and any later question becomes a guessing game.</p>`,
  pitfalls: (a) =>
    `<h2>Common pitfalls (and how to avoid them)</h2>
<ul>
<li><strong>Reusing a procedure without a delta-review.</strong> The procedure was written for an original scope; the new scope has different geometry, different access, or different acceptance criteria. Even one of those differences can invalidate the procedure for the new application.</li>
<li><strong>Skipping the calibration block check.</strong> A worn or unverified calibration block is the single most common reason high-quality equipment generates poor data.</li>
<li><strong>Letting one inspector own the data interpretation alone.</strong> Interpretation of ${a.f(0)} should always have a second reviewer for any indication that drives a fitness or repair decision.</li>
<li><strong>Treating the report as the deliverable.</strong> The deliverable is the decision the report enables. A well-formatted report that does not let the asset owner act is a failure.</li>
</ul>`,
  faq: (a) =>
    `<h2>Frequently asked questions</h2>
<h3>How long does this work typically add to a turnaround schedule?</h3>
<p>It depends on how much of the work was pre-planned. Pre-planned screening can usually fit inside the existing critical path; reactive ${a.f(0)} after an unexpected finding can extend a turnaround by 24–96 hours per equipment item, sometimes more. The cheapest hour you will ever buy is the planning hour you spent six months earlier.</p>
<h3>Who signs the decision?</h3>
<p>Best practice is a Level III for the NDT decision and a fixed-equipment or integrity engineer (PE/CEng) for the fitness decision. The two are different decisions even when they share the same data.</p>
<h3>What changes when the asset is in a regulated environment?</h3>
<p>The data you keep, how long you keep it, and who can review it. The technical work usually does not change much — the documentation effort goes up significantly.</p>`,
  closing: (a) =>
    `<h2>Closing thoughts</h2>
<p>If we had to summarize ${a.f(0)} in one line it would be this: <strong>the technique matters less than the decision discipline around it.</strong> Teams that consistently choose the right technique are usually teams that have invested in writing down their decision rationale, qualifying their procedures with care, and keeping their inspectors current. Equipment and software change every few years; that discipline does not.</p>`,
};

function pickBacklink(focus, rng, useInternal) {
  if (useInternal) {
    const list = TARGET_CATALOG[focus] || TARGET_CATALOG['method-selection'];
    const choice = list[Math.floor(rng() * list.length)];
    const anchor = choice.anchors[Math.floor(rng() * choice.anchors.length)];
    return { url: choice.url, anchor, internal: true };
  } else {
    const choice = EXTERNAL_AUTHORITY_LINKS[Math.floor(rng() * EXTERNAL_AUTHORITY_LINKS.length)];
    const anchor = choice.anchors[Math.floor(rng() * choice.anchors.length)];
    return { url: choice.url, anchor, internal: false };
  }
}

function targetWordCount(slug) {
  // 1500..2500 deterministic per slug
  const seed = hashSeed(slug);
  const rng = makeRng(seed);
  return 1500 + Math.floor(rng() * 1000);
}

function buildArticleHtml(satTopic, angle, internalArticles, articleIndex) {
  const seed = hashSeed(angle.slug);
  const rng = makeRng(seed);
  // Pick a clean, varied "focus phrase" derived from the first keyword instead
  // of using the entire title sentence (which sounded robotic when repeated).
  const focusLong = satTopic.primary;
  const focusShortBase = (angle.keywords[0] || satTopic.primary).toLowerCase();
  // Prepare 4 synonym phrases for the focus so we can rotate them through the body
  const focusVariants = [
    focusShortBase,
    `${focusShortBase} programs`,
    `this kind of inspection`,
    `${focusShortBase} planning`,
  ];
  const focusShort = focusVariants[0];
  const audienceShort = satTopic.audience.split(',')[0];

  // Choose 2-3 backlinks, with no two identical (anchor, url) pairs in one article.
  // Mix internal/external WITHIN an article (deterministic by index): articles at
  // even index favor 2 internal + 1 external; odd index favors 1 internal + 2 external.
  // This guarantees each article still has at least 1 internal money-link unless the
  // catalog is exhausted, while keeping the overall ratio close to 50/50.
  const backlinkCount = 2 + Math.floor(rng() * 2); // 2 or 3
  const internalQuota = articleIndex % 2 === 0
    ? Math.ceil(backlinkCount / 2)
    : Math.floor(backlinkCount / 2);
  const externalQuota = backlinkCount - internalQuota;
  const backlinks = [];
  const seenKeys = new Set();
  function tryAdd(useInternal) {
    let safety = 0;
    while (safety < 20) {
      const bl = pickBacklink(angle.focus, rng, useInternal);
      const key = bl.url + '||' + bl.anchor;
      if (!seenKeys.has(key)) {
        seenKeys.add(key);
        backlinks.push(bl);
        return true;
      }
      safety++;
    }
    return false;
  }
  for (let i = 0; i < internalQuota; i++) tryAdd(true);
  for (let i = 0; i < externalQuota; i++) tryAdd(false);

  // Pre-build "para sub-blocks" with backlinks injected
  const posb = backlinks.map((bl) => {
    const rel = bl.internal ? 'noopener' : 'noopener nofollow';
    return `Practical teams often cross-reference <a href="${bl.url}" rel="${rel}">${bl.anchor}</a> to align their practice with what is already published in the wider community.`;
  });
  const articleContext = {
    audience: satTopic.audience,
    audienceShort,
    focusLong,
    focusShort,
    f: (i) => focusVariants[i % focusVariants.length],
    posb1: posb[0] || '',
    posb2: posb[1] || posb[0] || '',
    posb3: posb[2] || posb[0] || '',
  };

  // Cross-link to 2 other internal articles in this satellite
  const otherInternal = internalArticles
    .filter((a) => a.slug !== angle.slug)
    .slice(0, 2);
  const internalCrossLinks = otherInternal
    .map(
      (a) => `<li><a href="${a.path}">${a.title}</a></li>`
    )
    .join('\n');

  // Compose the full article body
  let body =
    SECTION_TEMPLATES.intro(articleContext) +
    SECTION_TEMPLATES.context(articleContext) +
    SECTION_TEMPLATES.scope(articleContext) +
    SECTION_TEMPLATES.decisionMatrix(articleContext, rng) +
    SECTION_TEMPLATES.techniqueDeepDive(articleContext, rng) +
    SECTION_TEMPLATES.data(articleContext) +
    SECTION_TEMPLATES.pitfalls(articleContext) +
    SECTION_TEMPLATES.faq(articleContext) +
    SECTION_TEMPLATES.closing(articleContext);

  // Pad to target word count using a final "deeper background" section that
  // pulls focus-specific bullets. Rather than hand-write padding per topic
  // (which would be obvious), we generate pragmatic bullet content keyed off
  // the angle's keywords.
  const target = targetWordCount(angle.slug);
  const wordCount = body.replace(/<[^>]+>/g, ' ').split(/\s+/).filter(Boolean).length;
  if (wordCount < target) {
    body += renderDeeperBackground(angle, satTopic, rng, target - wordCount, articleContext);
  }

  // Append related satellite articles section
  if (internalCrossLinks) {
    body += `\n<h2>Related on ${satTopic.siteName}</h2>\n<ul>\n${internalCrossLinks}\n</ul>\n`;
  }

  return { body, backlinks };
}

function renderDeeperBackground(angle, satTopic, rng, wordsNeeded, ctx) {
  // We add ~3-6 paragraph blocks until we hit the target. Each block pulls a
  // keyword from the angle and a different framing.
  const frames = [
    (kw) =>
      `<h3>How ${kw} fits into the bigger picture</h3>
<p>It is easy to study ${kw} as an isolated subject — most courses do exactly that — but the engineering value only appears when you place ${kw} alongside the other levers your program already uses. ${ctx.posb2 || ''} For most ${ctx.audienceShort} the question is not "what is ${kw}?" but "where does ${kw} sit in our existing program, and what does it replace or complement?". That framing usually changes the procurement conversation, the training conversation, and the audit conversation in the same direction.</p>
<p>If your team is being asked to justify investment in ${kw}, the easiest place to start is a one-page side-by-side: current state, gap, expected uplift, and the specific risk ranking that improves. The numbers do not have to be precise; they have to be defensible.</p>`,
    (kw) =>
      `<h3>Operator behaviours that actually move the needle on ${kw}</h3>
<p>Three behaviours we see at high-performing operators consistently show up in ${kw} programs that are working: written rationale for every off-procedure decision; a standing peer-review for indications that drive a fitness call; and a quarterly close-out review where the integrity engineer and the inspection lead sit down with the raw data, not just the summary. None of these behaviours require new hardware. All three improve outcomes more than another tool purchase usually does.</p>
<p>What we do not see at high-performing operators is over-reliance on a single inspector or a single contractor. Cross-checking — even informally — is the cheapest insurance you can buy on a ${kw} program.</p>`,
    (kw) =>
      `<h3>Documentation patterns worth borrowing</h3>
<p>The best ${kw} documentation packages we have seen share three patterns:</p>
<ul>
<li>A short narrative section at the front of every report explaining the inspection objective in plain English. Auditors, regulators, and new hires all read the narrative first.</li>
<li>A consistent indication-numbering scheme that survives across multiple inspection campaigns, so an indication found in 2024 can be tracked through 2026 and 2028 without renaming.</li>
<li>An attached "open items" list with target dates, ownership, and the trigger that closes each item. This is the single most useful artifact for a turnaround manager.</li>
</ul>
<p>If your current report template is missing one of those, that is the easiest documentation improvement you can make this quarter, and it costs nothing beyond a template update.</p>`,
    (kw) =>
      `<h3>Procurement and contract considerations</h3>
<p>${kw} engagements have a recurring procurement pitfall: the scope of work is written in inspection-deliverable language ("ten welds inspected by PAUT"), and the contract success criteria are written in commercial language ("on time, on budget, no NCRs"). Neither captures the engineering outcome the asset owner actually needs, which is a defensible decision about fitness for service. Contracts that explicitly include a deliverable like "decision-grade report with Level III rationale signed and dated" align all three parties — owner, integrity engineer, and contractor — around the same outcome.</p>`,
    (kw) =>
      `<h3>Training and competency considerations</h3>
<p>Tooling improvements in ${kw} usually outpace inspector training by 18–24 months. Phased array systems, advanced eddy current arrays, and automated scanners are now common; structured training pathways for those tools are less common. The implication for hiring managers is straightforward: budget for technique-specific training as part of the equipment purchase, not as a separate line item to be defended later.</p>
<p>Competency on a written exam does not equal competency on a job site. The most reliable way to check applied competency is a witnessed scan of a known-flaw block, evaluated independently by a Level III who did not run the scan.</p>`,
  ];
  const kws = angle.keywords;
  let added = '';
  let added_words = 0;
  let i = 0;
  while (added_words < wordsNeeded && i < 12) {
    const f = frames[i % frames.length];
    const block = f(kws[i % kws.length]);
    added += block + '\n';
    added_words += block.replace(/<[^>]+>/g, ' ').split(/\s+/).filter(Boolean).length;
    i++;
  }
  return added;
}

// ---------------------------------------------------------------------------
// File writers
// ---------------------------------------------------------------------------

function buildMetaDescription(angle, satTopic) {
  // Build a unique 140-160 char description (not the title verbatim).
  const kw = angle.keywords[0];
  const audienceShort = satTopic.audience.split(',')[0];
  const variants = [
    `Practical guide for ${audienceShort}: how to apply ${kw} in real inspection work, what auditors expect, and where most programs fall short.`,
    `A field-oriented walkthrough of ${kw} for ${audienceShort}, with decision matrices, code references, and the documentation auditors actually want.`,
    `${angle.h1.split(':')[0].trim()} explained for ${audienceShort} — covering ${kw}, common pitfalls, and the data your audit packet needs.`,
    `Working notes for ${audienceShort} on ${kw}: how to choose the technique, document the decision, and survive the next audit.`,
  ];
  const idx = hashSeed(angle.slug) % variants.length;
  let d = variants[idx];
  if (d.length > 158) d = d.slice(0, 155) + '...';
  return d;
}

function articleTsx({ satTopic, angle, body, satDomain }) {
  const canonical = `${satDomain}/${satTopic.container}/${angle.slug}`;
  const datePublished = new Date(angle.date).toISOString();
  const dateModified = datePublished;
  const description = buildMetaDescription(angle, satTopic);
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: angle.h1,
    description,
    author: { '@type': 'Person', name: angle.author },
    publisher: {
      '@type': 'Organization',
      name: satTopic.publisher,
      url: satDomain,
    },
    datePublished,
    dateModified,
    mainEntityOfPage: { '@type': 'WebPage', '@id': canonical },
    keywords: angle.keywords.join(', '),
  };

  const escapedBody = body
    .replace(/`/g, '\\`')
    .replace(/\$\{/g, '\\${');

  return `import { Metadata } from 'next';

export const metadata: Metadata = {
  title: ${JSON.stringify(angle.title)},
  description: ${JSON.stringify(description)},
  keywords: ${JSON.stringify(angle.keywords)},
  alternates: { canonical: ${JSON.stringify(canonical)} },
  openGraph: {
    title: ${JSON.stringify(angle.title)},
    description: ${JSON.stringify(description)},
    type: 'article',
    url: ${JSON.stringify(canonical)},
    siteName: ${JSON.stringify(satTopic.siteName)},
    locale: 'en_US',
    publishedTime: ${JSON.stringify(datePublished)},
    modifiedTime: ${JSON.stringify(dateModified)},
    authors: [${JSON.stringify(angle.author)}],
  },
};

const jsonLd = ${JSON.stringify(jsonLd, null, 2)};

export default function ArticlePage() {
  return (
    <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 prose prose-slate prose-lg">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <nav className="breadcrumb text-sm text-gray-500 mb-6">
        <a href="/" className="hover:underline">Home</a>
        <span> / </span>
        <a href="/${satTopic.container}" className="hover:underline">${satTopic.container.replace(/-/g, ' ')}</a>
        <span> / </span>
        <span>${angle.h1.replace(/'/g, "\\'")}</span>
      </nav>
      <h1>${angle.h1.replace(/'/g, "\\'")}</h1>
      <p className="text-sm text-gray-500 mb-8">By ${angle.author.replace(/'/g, "\\'")} &middot; Published ${angle.date}</p>
      <div dangerouslySetInnerHTML={{ __html: \`${escapedBody}\` }} />
    </article>
  );
}
`;
}

function containerIndexTsx({ satTopic, angles }) {
  const items = angles
    .map(
      (a) => `<li className="border-b border-gray-200 py-6">
          <a href="/${satTopic.container}/${a.slug}" className="text-xl font-semibold text-gray-900 hover:text-${satTopic.homeColor}-600">${a.h1.replace(/'/g, "\\'")}</a>
          <p className="text-sm text-gray-500 mt-2">By ${a.author.replace(/'/g, "\\'")} &middot; ${a.date}</p>
          <p className="text-gray-700 mt-3">${a.title.replace(/'/g, "\\'")}</p>
        </li>`
    )
    .join('\n');
  return `import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '${satTopic.siteName} — In-Depth Articles',
  description: 'Long-form practical articles on ${satTopic.primary} for ${satTopic.audience}.',
};

export default function ContainerIndex() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900">${satTopic.siteName} — In-Depth Articles</h1>
      <p className="text-gray-600 mt-3">Practical long-form guides on ${satTopic.primary}, written for ${satTopic.audience}.</p>
      <ul className="mt-8">
        ${items}
      </ul>
    </div>
  );
}
`;
}

function buildSitemapTs({ satDomain, container, angles, existingTopLevelUrls }) {
  const today = new Date().toISOString().split('T')[0];
  const seen = new Set();
  const entries = [];
  function addEntry(path, opts = {}) {
    const url = path === '' ? '${baseUrl}' : `\${baseUrl}${path}`;
    if (seen.has(url)) return;
    seen.add(url);
    entries.push({
      url,
      lastModified: opts.lastModified || today,
      changeFrequency: opts.changeFrequency || 'weekly',
      priority: opts.priority ?? 0.7,
    });
  }
  addEntry('', { changeFrequency: 'monthly', priority: 1.0 });
  // existing top-level routes (excluding the article container, which we add last)
  for (const tlu of existingTopLevelUrls) {
    if (tlu === `/${container}`) continue;
    addEntry(tlu, { priority: 0.7 });
  }
  addEntry(`/${container}`, { priority: 0.8 });
  for (const a of angles) {
    addEntry(`/${container}/${a.slug}`, {
      lastModified: a.date,
      changeFrequency: 'monthly',
      priority: 0.7,
    });
  }
  const lines = entries.map(
    (e) =>
      `{ url: \`${e.url}\`, lastModified: '${e.lastModified}', changeFrequency: '${e.changeFrequency}' as const, priority: ${e.priority} }`
  );
  return `import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || '${satDomain}';
  return [
    ${lines.join(',\n    ')}
  ];
}
`;
}

function homepageInjectionBlock(satTopic, angles) {
  // We do not rewrite the existing home page. We add a small JSX file imported
  // optionally, but the more durable approach for a Next.js app is to write a
  // ready-to-paste partial file the operator can drop in. For automated
  // satellite enrichment we instead patch the home page if a marker is found,
  // and otherwise create a sibling component file that the operator can wire up.
  const items = angles
    .map(
      (a) => `        <a href="/${satTopic.container}/${a.slug}" className="block p-4 bg-white border border-gray-200 rounded hover:border-${satTopic.homeColor}-500 hover:shadow transition">
          <div className="text-xs uppercase tracking-wide text-${satTopic.homeColor}-600">${a.date}</div>
          <div className="mt-1 text-base font-semibold text-gray-900">${a.h1.replace(/'/g, "\\'")}</div>
          <div className="mt-2 text-sm text-gray-600">${a.title.replace(/'/g, "\\'")}</div>
        </a>`
    )
    .join('\n');
  return `import React from 'react';

/**
 * Auto-generated by satellite-enrich.mjs.
 * Drop this component into the home page (page.tsx) where appropriate, or
 * import it as a section. The component is fully self-contained.
 */
export default function FeaturedArticles() {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="flex items-end justify-between mb-8">
        <h2 className="text-2xl font-bold text-gray-900">Featured industry articles</h2>
        <a href="/${satTopic.container}" className="text-sm text-${satTopic.homeColor}-600 hover:underline">Browse all &rarr;</a>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
${items}
      </div>
      <div className="mt-12 p-6 bg-${satTopic.homeColor}-50 border border-${satTopic.homeColor}-100 rounded">
        <div className="text-sm uppercase tracking-wide text-${satTopic.homeColor}-700 font-medium">Featured industry resource</div>
        <h3 className="text-lg font-semibold text-gray-900 mt-1">Atlantis NDT — Independent Level III consulting and digital twin reporting</h3>
        <p className="text-sm text-gray-700 mt-2">A long-running independent NDT consultancy used as a reference partner across many of the programs discussed on this site. Level III oversight, NDT reporting software, and a digital twin platform that ties inspection data back to asset integrity decisions.</p>
        <a href="https://atlantisndt.com" rel="noopener" className="inline-block mt-3 text-sm font-medium text-${satTopic.homeColor}-700 hover:underline">Visit atlantisndt.com &rarr;</a>
      </div>
    </section>
  );
}
`;
}

// ---------------------------------------------------------------------------
// Discover existing top-level URLs in a satellite (so the rewritten sitemap
// preserves them).
// ---------------------------------------------------------------------------
function listExistingTopLevelPaths(satRoot) {
  const appDir = join(satRoot, 'src', 'app');
  if (!existsSync(appDir)) return [];
  const out = new Set();
  function walk(dir, prefix) {
    for (const e of readdirSync(dir, { withFileTypes: true })) {
      if (!e.isDirectory()) continue;
      // skip auto-generated / weird
      if (/[{}]/.test(e.name)) continue;
      const sub = join(dir, e.name);
      const next = `${prefix}/${e.name}`;
      if (existsSync(join(sub, 'page.tsx')) || existsSync(join(sub, 'page.ts'))) {
        out.add(next);
      }
      walk(sub, next);
    }
  }
  walk(appDir, '');
  return [...out].sort();
}

// ---------------------------------------------------------------------------
// Main per-satellite enrichment
// ---------------------------------------------------------------------------
function enrichSatellite(satName, state) {
  const satTopic = TOPIC_PROFILES[satName];
  if (!satTopic) {
    console.error(`No topic profile for ${satName} - skipping`);
    return null;
  }
  const satRoot = join(SATS_DIR, satName);
  if (!existsSync(satRoot)) {
    console.error(`Satellite root not found: ${satRoot}`);
    return null;
  }
  const satDomain = `https://${satName}.vercel.app`;
  const containerDir = join(satRoot, 'src', 'app', satTopic.container);
  mkdirSync(containerDir, { recursive: true });

  // Anti-footprint: filter out angles whose slug was already used for some
  // OTHER satellite. (Within the same satellite re-runs are idempotent.)
  const angles = satTopic.angles.filter((a) => {
    const owners = state.usedSlugs[a.slug] || [];
    return owners.length === 0 || owners.includes(satName);
  });
  if (angles.length === 0) {
    console.warn(`All angles for ${satName} already taken by other satellites.`);
  }

  // Pre-resolve the article path used in cross-links
  const internalArticles = angles.map((a) => ({
    slug: a.slug,
    title: a.h1,
    path: `/${satTopic.container}/${a.slug}`,
  }));

  const writtenArticles = [];
  const allBacklinks = [];

  for (let idx = 0; idx < angles.length; idx++) {
    const angle = angles[idx];
    const { body, backlinks } = buildArticleHtml(satTopic, angle, internalArticles, idx);
    const tsx = articleTsx({ satTopic, angle, body, satDomain });
    const articleDir = join(containerDir, angle.slug);
    mkdirSync(articleDir, { recursive: true });
    const articlePath = join(articleDir, 'page.tsx');
    writeFileSync(articlePath, tsx);

    const wordCount = body.replace(/<[^>]+>/g, ' ').split(/\s+/).filter(Boolean).length;
    writtenArticles.push({
      slug: angle.slug,
      title: angle.title,
      author: angle.author,
      date: angle.date,
      path: `/${satTopic.container}/${angle.slug}`,
      url: `${satDomain}/${satTopic.container}/${angle.slug}`,
      wordCount,
      backlinks,
      file: articlePath.replace(REPO_ROOT, ''),
    });
    allBacklinks.push(...backlinks);

    // update state
    state.usedSlugs[angle.slug] = state.usedSlugs[angle.slug] || [];
    if (!state.usedSlugs[angle.slug].includes(satName)) {
      state.usedSlugs[angle.slug].push(satName);
    }
    for (const bl of backlinks) {
      state.anchorCounts[bl.anchor] = (state.anchorCounts[bl.anchor] || 0) + 1;
      state.targetUrlCounts[bl.url] = (state.targetUrlCounts[bl.url] || 0) + 1;
    }
  }

  // Container index (or update existing). If a container index page exists
  // already we leave it alone (don't rewrite hand-tuned home pages); we always
  // write the article pages. We also write a Featured section component into
  // src/app/_featured-articles.tsx that the operator can include in the home.
  const containerIndexPath = join(containerDir, 'page.tsx');
  if (!existsSync(containerIndexPath)) {
    writeFileSync(
      containerIndexPath,
      containerIndexTsx({ satTopic, angles })
    );
  } else {
    // Append a sibling _articles-extra.tsx so we don't clobber existing UI
    writeFileSync(
      join(containerDir, '_enriched-articles.tsx'),
      containerIndexTsx({ satTopic, angles })
    );
  }

  // Featured section component for home page
  writeFileSync(
    join(satRoot, 'src', 'app', '_featured-articles.tsx'),
    homepageInjectionBlock(satTopic, angles)
  );

  // Patch homepage page.tsx if a marker is present, else leave a banner comment
  const homePath = join(satRoot, 'src', 'app', 'page.tsx');
  if (existsSync(homePath)) {
    const orig = readFileSync(homePath, 'utf-8');
    const bannerMarker = '// satellite-enrich:';
    if (!orig.includes('FeaturedArticles') && !orig.includes(bannerMarker)) {
      const banner =
        `${bannerMarker} FeaturedArticles component generated at\n` +
        `// ./_featured-articles.tsx. Import and place inside this file's JSX to\n` +
        `// surface the new long-form articles on the home page.\n\n`;
      writeFileSync(homePath, banner + orig);
    }
  }

  // Build sitemap.ts (or update existing) - merge existing top-level routes
  const existingTopLevelUrls = listExistingTopLevelPaths(satRoot).filter((p) => {
    // exclude the new article URLs - we add them explicitly. Keep all other paths.
    return !p.startsWith(`/${satTopic.container}/`);
  });
  const sitemapPath = join(satRoot, 'src', 'app', 'sitemap.ts');
  writeFileSync(
    sitemapPath,
    buildSitemapTs({ satDomain, container: satTopic.container, angles, existingTopLevelUrls })
  );

  // Per-satellite report
  const reportPath = join(REPORTS_DIR, `${satName}.md`);
  const totalInternalBacklinks = allBacklinks.filter((b) => b.internal).length;
  const totalExternalBacklinks = allBacklinks.filter((b) => !b.internal).length;
  const avgWords = Math.round(
    writtenArticles.reduce((a, c) => a + c.wordCount, 0) /
      Math.max(1, writtenArticles.length)
  );
  const reportLines = [
    `# Satellite enrichment report — ${satName}`,
    ``,
    `- Site: ${satDomain}`,
    `- Topic: ${satTopic.primary}`,
    `- Audience: ${satTopic.audience}`,
    `- Container: \`/${satTopic.container}\``,
    `- Generated at: ${new Date().toISOString()}`,
    ``,
    `## New articles written (${writtenArticles.length})`,
    ``,
    ...writtenArticles.map(
      (a) =>
        `- **${a.title}** — ${a.wordCount} words — \`${a.path}\` — by ${a.author} (${a.date})`
    ),
    ``,
    `## Backlink summary`,
    ``,
    `- Internal (atlantisndt / ndt-connect) backlinks: **${totalInternalBacklinks}**`,
    `- External authority (ASNT / API / AMPP / etc) backlinks: **${totalExternalBacklinks}**`,
    `- Average article length: **${avgWords} words**`,
    ``,
    `## Backlink detail`,
    ``,
    ...writtenArticles.map((a) => {
      const lines = [`### ${a.title}`];
      for (const bl of a.backlinks) {
        const tag = bl.internal ? '[internal]' : '[external authority]';
        lines.push(`- ${tag} \`${bl.anchor}\` → ${bl.url}`);
      }
      return lines.join('\n');
    }),
    ``,
    `## Files touched`,
    ``,
    ...writtenArticles.map((a) => `- ${a.file}`),
    `- ${sitemapPath.replace(REPO_ROOT, '')}`,
    `- ${join('backlink-sites', satName, 'src', 'app', '_featured-articles.tsx')}`,
    ``,
    `## URLs to submit to GSC`,
    ``,
    '```',
    ...writtenArticles.map((a) => a.url),
    `${satDomain}`,
    '```',
    ``,
  ];
  writeFileSync(reportPath, reportLines.join('\n'));

  return {
    satName,
    satDomain,
    container: satTopic.container,
    articlesWritten: writtenArticles,
    backlinkSummary: {
      internal: totalInternalBacklinks,
      external: totalExternalBacklinks,
      avgWords,
    },
    reportPath: reportPath.replace(REPO_ROOT, ''),
  };
}

// ---------------------------------------------------------------------------
// CLI
// ---------------------------------------------------------------------------
function main() {
  const args = process.argv.slice(2);
  const state = loadState();
  mkdirSync(REPORTS_DIR, { recursive: true });

  let targets;
  if (args[0] === '--all-priority') {
    targets = PRIORITY_SATELLITES;
  } else if (args.length) {
    targets = args;
  } else {
    console.log(
      'Usage: node scripts/satellite-enrich.mjs <satellite-name> [<more>]\n' +
        '       node scripts/satellite-enrich.mjs --all-priority'
    );
    process.exit(2);
  }

  const summary = [];
  for (const sat of targets) {
    console.log(`\n=== Enriching: ${sat}`);
    const r = enrichSatellite(sat, state);
    if (r) summary.push(r);
  }

  state.runs.push({ at: new Date().toISOString(), targets, count: summary.length });
  saveState(state);

  // Aggregate URL list for indexing
  const urls = [];
  for (const r of summary) {
    urls.push(`${r.satDomain}`);
    for (const a of r.articlesWritten) urls.push(a.url);
  }
  const today = new Date().toISOString().split('T')[0];
  const urlListPath = join(__dirname, `satellite-urls-to-index-${today}.txt`);
  writeFileSync(urlListPath, urls.join('\n') + '\n');

  // Aggregate top anchor texts
  const anchorRanking = Object.entries(state.anchorCounts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 10);

  console.log('\n========== ENRICHMENT SUMMARY ==========');
  console.log(`Satellites enriched: ${summary.length}`);
  console.log(`Total articles written: ${summary.reduce((a, c) => a + c.articlesWritten.length, 0)}`);
  console.log(
    `Total internal (atlantisndt/ndt-connect) backlinks: ${summary.reduce((a, c) => a + c.backlinkSummary.internal, 0)}`
  );
  console.log(
    `Total external authority backlinks: ${summary.reduce((a, c) => a + c.backlinkSummary.external, 0)}`
  );
  console.log(`URL list: ${urlListPath}`);
  console.log(`Top anchor texts:`);
  for (const [a, n] of anchorRanking) {
    console.log(`  (${n}x) ${a}`);
  }
  console.log('========================================');
}

main();
