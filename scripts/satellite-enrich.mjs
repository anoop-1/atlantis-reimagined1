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
import { ROUND2_ANGLES } from './satellite-round2-angles.mjs';

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

// 2026-05-23: load NEW PAGES universe (ERP city/pillar pages + 15 new blog posts)
// so freshly-published Atlantis pages get backlink love from satellites.
let NEW_ERP_PAGES = [];
let NEW_BLOG_POSTS = [];
try {
  const erpState = JSON.parse(
    readFileSync(join(__dirname, 'erp-pages-2026-05-23-state.json'), 'utf-8')
  );
  for (const g of ['group1', 'group2', 'group3', 'group4']) {
    if (Array.isArray(erpState[g])) {
      for (const p of erpState[g]) {
        // group1/2 are /ndt-erp-{slug}, group3/4 are /erp/{slug}
        const url = (g === 'group1' || g === 'group2')
          ? `${'https://atlantisndt.com'}/${p.slug}`
          : `${'https://atlantisndt.com'}/erp/${p.slug}`;
        NEW_ERP_PAGES.push({ url, slug: p.slug, group: g });
      }
    }
  }
} catch (e) {
  console.warn('erp-pages-2026-05-23-state.json not loadable - skipping ERP pool');
}
try {
  const blogList = JSON.parse(
    readFileSync(join(__dirname, 'indexing-url-list-blogs.json'), 'utf-8')
  );
  if (blogList && Array.isArray(blogList.urls)) {
    NEW_BLOG_POSTS = blogList.urls.map((u) => ({ url: u.url, tier: u.tier }));
  }
} catch (e) {
  console.warn('indexing-url-list-blogs.json not loadable - skipping new-blog pool');
}

// 2026-05-24: Day-1 + Day-2 URL pools (Round 2 of satellite backlinks).
let NEW_DAY1_PAGES = [];
let NEW_DAY2_PAGES = [];
try {
  const day1 = JSON.parse(
    readFileSync(join(__dirname, 'indexing-url-list-day1.json'), 'utf-8')
  );
  if (day1 && Array.isArray(day1.urls)) {
    NEW_DAY1_PAGES = day1.urls.map((u) => ({ url: u.url, tier: u.tier }));
  }
} catch (e) {
  console.warn('indexing-url-list-day1.json not loadable - skipping Day-1 pool');
}
try {
  const day2 = JSON.parse(
    readFileSync(join(__dirname, 'indexing-url-list-day2.json'), 'utf-8')
  );
  if (day2 && Array.isArray(day2.urls)) {
    NEW_DAY2_PAGES = day2.urls.map((u) => ({ url: u.url, tier: u.tier }));
  }
} catch (e) {
  console.warn('indexing-url-list-day2.json not loadable - skipping Day-2 pool');
}

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
// 2026-05-23: Topic profiles for remaining 25 satellites (Phase 2 expansion).
// Each profile yields 5 long-form articles. Containers chosen to avoid
// clashing with existing top-level routes (verified per inventory).
// ---------------------------------------------------------------------------
Object.assign(TOPIC_PROFILES, {
  'advanced-ndt-techniques': {
    siteName: 'Advanced NDT Techniques',
    publisher: 'Advanced NDT Techniques Editorial',
    homeColor: 'violet',
    container: 'deepdives',
    audience: 'NDT Level III engineers, advanced technique specialists',
    primary: 'advanced NDT techniques',
    angles: [
      { slug: 'paut-vs-tofd-when-to-combine', title: 'PAUT vs TOFD: When to Combine vs When to Pick One', h1: 'PAUT vs TOFD: When to Combine vs When to Pick One', keywords: ['PAUT TOFD combined', 'TOFD vs PAUT', 'phased array TOFD', 'weld sizing'], focus: 'paut', date: '2024-10-14', author: 'Diego Costa, ASNT NDT Level III' },
      { slug: 'guided-wave-screening-program-design', title: 'Guided Wave Screening Program Design for Long Pipelines', h1: 'Guided Wave Screening Program Design for Long Pipelines', keywords: ['guided wave screening', 'LRUT', 'long pipeline inspection', 'screening NDT'], focus: 'lrut', date: '2025-02-22', author: 'Astrid Vinge, MSc NDT' },
      { slug: 'eddy-current-array-for-heat-exchanger-tubes', title: 'Eddy Current Array for Heat Exchanger Tubes: A Field Workflow', h1: 'Eddy Current Array for Heat Exchanger Tubes: A Field Workflow', keywords: ['ECA heat exchanger', 'eddy current array tubes', 'IRIS', 'tube inspection'], focus: 'method-selection', date: '2025-08-09', author: 'Diego Costa, ASNT NDT Level III' },
      { slug: 'digital-radiography-cr-vs-dr-which-system', title: 'Digital Radiography: CR vs DR — Which System Fits Which Site?', h1: 'Digital Radiography: CR vs DR — Which System Fits Which Site?', keywords: ['digital radiography', 'CR vs DR', 'computed radiography', 'direct digital RT'], focus: 'paut-rt', date: '2025-11-26', author: 'Astrid Vinge, MSc NDT' },
      { slug: 'automated-ut-scanner-deployment-2026', title: 'Automated UT Scanner Deployment: A 2026 Playbook', h1: 'Automated UT Scanner Deployment: A 2026 Playbook', keywords: ['automated UT', 'AUT scanner', 'pipeline AUT', 'mechanized UT'], focus: 'paut', date: '2026-04-08', author: 'Diego Costa, ASNT NDT Level III' },
    ],
  },
  'api-certification-guide': {
    siteName: 'API Certification Guide',
    publisher: 'API Certification Guide Editorial',
    homeColor: 'orange',
    container: 'study',
    audience: 'API 510/570/653 candidates, fixed-equipment inspectors',
    primary: 'API ICP certification preparation',
    angles: [
      { slug: 'api-570-piping-inspector-study-plan-2026', title: 'API 570 Piping Inspector Study Plan (2026)', h1: 'API 570 Piping Inspector Study Plan (2026)', keywords: ['API 570', 'API 570 study guide', 'piping inspector exam', 'API ICP'], focus: 'api-510', date: '2024-09-12', author: 'Reza Karimi, API 570' },
      { slug: 'api-653-aboveground-tank-inspector-prep', title: 'API 653 Aboveground Tank Inspector Prep: What the Exam Actually Tests', h1: 'API 653 Aboveground Tank Inspector Prep: What the Exam Actually Tests', keywords: ['API 653', 'tank inspector exam', 'aboveground tank inspection', 'API 653 prep'], focus: 'api-510', date: '2025-01-22', author: 'Reza Karimi, API 653' },
      { slug: 'api-510-vs-api-570-which-cert-first', title: 'API 510 vs API 570: Which Certification Should You Take First?', h1: 'API 510 vs API 570: Which Certification Should You Take First?', keywords: ['API 510 vs API 570', 'API certification path', 'fixed equipment inspector', 'API ICP'], focus: 'api-510', date: '2025-05-14', author: 'Eve Mitchell, API ICP Coach' },
      { slug: 'api-icp-recertification-2-cycle-cycle', title: 'API ICP Recertification: Surviving the 3-Year Cycle', h1: 'API ICP Recertification: Surviving the 3-Year Cycle', keywords: ['API ICP recertification', 'API renewal', 'CEU API', 'API ICP'], focus: 'asnt-cert', date: '2025-10-30', author: 'Reza Karimi, API 510/570/653' },
      { slug: 'open-book-questions-api-510-test-strategy', title: 'Open-Book Questions in API 510: A Test-Day Strategy', h1: 'Open-Book Questions in API 510: A Test-Day Strategy', keywords: ['API 510 open book', 'API exam strategy', 'API 510 test', 'API ICP open book'], focus: 'api-510', date: '2026-03-25', author: 'Eve Mitchell, API ICP Coach' },
    ],
  },
  'coating-inspection-guide': {
    siteName: 'Coating Inspection Guide',
    publisher: 'Coating Inspection Guide Editorial',
    homeColor: 'teal',
    container: 'inspections',
    audience: 'AMPP coatings inspectors, blast/paint QC managers',
    primary: 'coating and corrosion inspection',
    angles: [
      { slug: 'ssp-sp10-vs-sp5-blast-profile-decisions', title: 'SSPC-SP10 vs SP5 Blast Profile Decisions on Carbon Steel', h1: 'SSPC-SP10 vs SP5 Blast Profile Decisions on Carbon Steel', keywords: ['SSPC SP10', 'NACE 2', 'blast profile', 'surface preparation'], focus: 'coating', date: '2024-08-30', author: 'Renée Bouchard, AMPP CIP Level 3' },
      { slug: 'wet-film-thickness-vs-dry-film-thickness-when-each-fails', title: 'Wet Film Thickness vs Dry Film Thickness: When Each Fails You', h1: 'Wet Film Thickness vs Dry Film Thickness: When Each Fails You', keywords: ['WFT DFT', 'coating thickness', 'paint inspection', 'ASTM D4414'], focus: 'coating', date: '2025-02-10', author: 'Renée Bouchard, AMPP CIP Level 3' },
      { slug: 'holiday-detection-low-voltage-vs-high-voltage', title: 'Holiday Detection: Low Voltage vs High Voltage Methods Compared', h1: 'Holiday Detection: Low Voltage vs High Voltage Methods Compared', keywords: ['holiday detection', 'pinhole detection', 'NACE SP0188', 'coating holiday'], focus: 'coating', date: '2025-07-03', author: 'Pavlov Vance, NACE CIP' },
      { slug: 'tsa-thermal-spray-aluminum-inspection-cui', title: 'TSA (Thermal Spray Aluminum) Inspection for CUI-Critical Service', h1: 'TSA (Thermal Spray Aluminum) Inspection for CUI-Critical Service', keywords: ['TSA coating', 'thermal spray aluminum', 'CUI prevention', 'TSA inspection'], focus: 'cui', date: '2025-12-09', author: 'Renée Bouchard, AMPP CIP Level 3' },
      { slug: 'coating-failure-modes-osmotic-blistering-cathodic-disbondment', title: 'Coating Failure Modes: Osmotic Blistering, Disbondment, and What Each Tells You', h1: 'Coating Failure Modes: Osmotic Blistering, Disbondment, and What Each Tells You', keywords: ['coating failure', 'osmotic blistering', 'cathodic disbondment', 'paint failure analysis'], focus: 'coating', date: '2026-04-19', author: 'Pavlov Vance, NACE CIP' },
    ],
  },
  'composite-testing-hub': {
    siteName: 'Composite Testing Hub',
    publisher: 'Composite Testing Hub Editorial',
    homeColor: 'fuchsia',
    container: 'techniques',
    audience: 'aerospace composite QA, wind blade inspectors, motorsports QA',
    primary: 'composite NDT and testing',
    angles: [
      { slug: 'cfrp-phased-array-vs-thermography-which-finds-disbonds', title: 'CFRP Phased Array vs Thermography: Which Finds Disbonds Faster?', h1: 'CFRP Phased Array vs Thermography: Which Finds Disbonds Faster?', keywords: ['CFRP PAUT', 'thermography composite', 'disbond detection', 'aerospace composite'], focus: 'cfrp', date: '2024-09-18', author: 'Mira Ostlund, NDT Engineer' },
      { slug: 'wind-blade-inspection-from-rope-access-to-drones', title: 'Wind Blade Inspection: From Rope Access to Drones', h1: 'Wind Blade Inspection: From Rope Access to Drones', keywords: ['wind turbine blade', 'rope access inspection', 'drone blade inspection', 'composite blade NDT'], focus: 'cfrp', date: '2025-03-25', author: 'Jonas Aaltonen, GWO trained' },
      { slug: 'sandwich-panel-honeycomb-core-defects-and-detection', title: 'Sandwich Panel Honeycomb Core Defects and How to Detect Them', h1: 'Sandwich Panel Honeycomb Core Defects and How to Detect Them', keywords: ['honeycomb core', 'sandwich panel NDT', 'aerospace composite inspection', 'core crush'], focus: 'cfrp', date: '2025-08-20', author: 'Mira Ostlund, NDT Engineer' },
      { slug: 'shearography-on-composite-pressure-vessels', title: 'Shearography on Composite Pressure Vessels: When It Earns Its Keep', h1: 'Shearography on Composite Pressure Vessels: When It Earns Its Keep', keywords: ['shearography', 'composite pressure vessel', 'COPV inspection', 'laser shearography'], focus: 'cfrp', date: '2025-12-15', author: 'Jonas Aaltonen, GWO trained' },
      { slug: 'pulse-thermography-vs-lock-in-thermography-quick-decision-guide', title: 'Pulse Thermography vs Lock-In Thermography: A Quick Decision Guide', h1: 'Pulse Thermography vs Lock-In Thermography: A Quick Decision Guide', keywords: ['pulse thermography', 'lock-in thermography', 'thermal NDT', 'composite thermography'], focus: 'cfrp', date: '2026-04-26', author: 'Mira Ostlund, NDT Engineer' },
    ],
  },
  'construction-ndt-guide': {
    siteName: 'Construction NDT Guide',
    publisher: 'Construction NDT Guide Editorial',
    homeColor: 'lime',
    container: 'practice',
    audience: 'structural inspectors, concrete QC engineers, infrastructure QA',
    primary: 'construction & infrastructure NDT',
    angles: [
      { slug: 'gpr-vs-rebar-locator-when-which', title: 'GPR vs Rebar Locator: When Each One Earns the Hourly Rate', h1: 'GPR vs Rebar Locator: When Each One Earns the Hourly Rate', keywords: ['GPR rebar', 'rebar locator', 'concrete NDT', 'ground penetrating radar'], focus: 'method-selection', date: '2024-08-22', author: 'Lars Hagen, ACI' },
      { slug: 'concrete-strength-with-rebound-hammer-vs-ut-velocity', title: 'Concrete Strength: Rebound Hammer vs Ultrasonic Pulse Velocity', h1: 'Concrete Strength: Rebound Hammer vs Ultrasonic Pulse Velocity', keywords: ['rebound hammer', 'UPV concrete', 'concrete strength NDT', 'Schmidt hammer'], focus: 'method-selection', date: '2025-01-30', author: 'Lars Hagen, ACI' },
      { slug: 'bridge-deck-deterioration-mapping-methods', title: 'Bridge Deck Deterioration Mapping: Methods That Actually Work', h1: 'Bridge Deck Deterioration Mapping: Methods That Actually Work', keywords: ['bridge deck NDT', 'half cell potential', 'IR thermography bridge', 'FHWA inspection'], focus: 'method-selection', date: '2025-07-08', author: 'Salma Vega, PE Civil' },
      { slug: 'post-tensioned-cable-inspection-impact-echo-and-ut', title: 'Post-Tensioned Cable Inspection: Impact-Echo and UT Strategies', h1: 'Post-Tensioned Cable Inspection: Impact-Echo and UT Strategies', keywords: ['post tensioned cable', 'impact echo', 'PT tendon NDT', 'bridge cable inspection'], focus: 'lrut', date: '2025-11-12', author: 'Lars Hagen, ACI' },
      { slug: 'steel-structure-weld-inspection-aws-d1-5', title: 'Steel Structure Weld Inspection Under AWS D1.5 (Bridge Welding Code)', h1: 'Steel Structure Weld Inspection Under AWS D1.5 (Bridge Welding Code)', keywords: ['AWS D1.5', 'bridge weld inspection', 'structural weld NDT', 'AWS bridge code'], focus: 'aws-d1-1', date: '2026-04-02', author: 'Salma Vega, PE Civil' },
    ],
  },
  'heat-exchanger-ndt': {
    siteName: 'Heat Exchanger NDT',
    publisher: 'Heat Exchanger NDT Editorial',
    homeColor: 'red',
    container: 'tubes',
    audience: 'heat exchanger inspectors, refinery turnaround engineers',
    primary: 'heat exchanger NDT and tube inspection',
    angles: [
      { slug: 'iris-vs-ecit-vs-rfet-tube-inspection-decision', title: 'IRIS vs ECT vs RFET: Tube Inspection Method Decision Matrix', h1: 'IRIS vs ECT vs RFET: Tube Inspection Method Decision Matrix', keywords: ['IRIS tubes', 'ECT tubes', 'RFET', 'heat exchanger tube inspection'], focus: 'method-selection', date: '2024-10-04', author: 'Petros Vasilakos, ASNT Level III' },
      { slug: 'cleaning-tubes-before-ndt-why-it-decides-everything', title: 'Cleaning Tubes Before NDT: Why It Decides Everything', h1: 'Cleaning Tubes Before NDT: Why It Decides Everything', keywords: ['tube cleaning', 'hydroblasting', 'tube preparation NDT', 'heat exchanger cleaning'], focus: 'turnaround', date: '2025-02-26', author: 'Petros Vasilakos, ASNT Level III' },
      { slug: 'air-cooler-tube-bundle-inspection-program', title: 'Air Cooler Tube Bundle Inspection Program: Building One That Works', h1: 'Air Cooler Tube Bundle Inspection Program: Building One That Works', keywords: ['air cooler inspection', 'fin fan tube', 'air cooled exchanger', 'API 661'], focus: 'method-selection', date: '2025-07-21', author: 'Aiko Nakashima, Reliability Engineer' },
      { slug: 'fouling-vs-corrosion-tube-signal-interpretation', title: 'Fouling vs Corrosion in Tube Signals: How to Tell Them Apart', h1: 'Fouling vs Corrosion in Tube Signals: How to Tell Them Apart', keywords: ['tube fouling', 'tube corrosion signal', 'ECT interpretation', 'tube wall loss'], focus: 'sulfidation', date: '2025-11-30', author: 'Petros Vasilakos, ASNT Level III' },
      { slug: 'plugging-vs-retubing-heat-exchanger-economics', title: 'Plugging vs Retubing: The Economics of Tube Failure Response', h1: 'Plugging vs Retubing: The Economics of Tube Failure Response', keywords: ['tube plugging', 'retubing exchanger', 'TEMA RCB', 'tube replacement'], focus: 'turnaround', date: '2026-04-14', author: 'Aiko Nakashima, Reliability Engineer' },
    ],
  },
  'industrial-inspection-resources': {
    siteName: 'Industrial Inspection Resources',
    publisher: 'Industrial Inspection Resources Editorial',
    homeColor: 'slate',
    container: 'topics',
    audience: 'multi-industry NDT managers, integrity consultants',
    primary: 'industrial inspection across sectors',
    angles: [
      { slug: 'cross-sector-ndt-program-benchmarks-2026', title: 'Cross-Sector NDT Program Benchmarks (2026)', h1: 'Cross-Sector NDT Program Benchmarks (2026)', keywords: ['NDT benchmarks', 'inspection KPI', 'program maturity', 'NDT industry benchmark'], focus: 'kpi', date: '2024-09-04', author: 'Caleb Yates, Integrity Consultant' },
      { slug: 'building-an-in-house-vs-outsourced-ndt-program', title: 'In-House vs Outsourced NDT Program: A Total-Cost View', h1: 'In-House vs Outsourced NDT Program: A Total-Cost View', keywords: ['in house NDT', 'outsourced NDT', 'NDT service provider', 'inspection contracting'], focus: 'method-selection', date: '2025-02-05', author: 'Caleb Yates, Integrity Consultant' },
      { slug: 'integrity-data-management-platforms-buyer-guide', title: 'Integrity Data Management Platforms: A Buyer Guide for 2026', h1: 'Integrity Data Management Platforms: A Buyer Guide for 2026', keywords: ['integrity software', 'IDMS platform', 'NDT data management', 'integrity platform comparison'], focus: 'kpi', date: '2025-06-25', author: 'Nadine El-Sayed, Digital Twin Engineer' },
      { slug: 'training-budget-allocation-ndt-team', title: 'Training Budget Allocation for a Multi-Method NDT Team', h1: 'Training Budget Allocation for a Multi-Method NDT Team', keywords: ['NDT training budget', 'inspector training', 'multi method team', 'NDT competency'], focus: 'asnt-cert', date: '2025-10-08', author: 'Caleb Yates, Integrity Consultant' },
      { slug: 'iso-9712-vs-asnt-snt-tc-1a-multi-region-teams', title: 'ISO 9712 vs ASNT SNT-TC-1A for Multi-Region Teams', h1: 'ISO 9712 vs ASNT SNT-TC-1A for Multi-Region Teams', keywords: ['ISO 9712', 'SNT-TC-1A', 'NDT certification scheme', 'multi region NDT'], focus: 'asnt-cert', date: '2026-03-12', author: 'Nadine El-Sayed, Digital Twin Engineer' },
    ],
  },
  'lng-inspection-hub': {
    siteName: 'LNG Inspection Hub',
    publisher: 'LNG Inspection Hub Editorial',
    homeColor: 'sky',
    container: 'guides',
    audience: 'LNG terminal engineers, cryogenic tank inspectors, midstream LNG QA',
    primary: 'LNG inspection and cryogenic NDT',
    angles: [
      { slug: 'cryogenic-tank-inspection-9-percent-nickel-steel', title: 'Cryogenic Tank Inspection: 9% Nickel Steel and Its Inspection Quirks', h1: 'Cryogenic Tank Inspection: 9% Nickel Steel and Its Inspection Quirks', keywords: ['cryogenic tank', '9 nickel steel', 'LNG tank inspection', 'API 625'], focus: 'fab', date: '2024-08-16', author: 'Magnus Tørrissen, IWE' },
      { slug: 'lng-loading-arm-inspection-program', title: 'LNG Loading Arm Inspection Program: From Pin to Swivel', h1: 'LNG Loading Arm Inspection Program: From Pin to Swivel', keywords: ['LNG loading arm', 'cryogenic loading arm', 'OCIMF inspection', 'LNG marine loading'], focus: 'fpso', date: '2025-01-14', author: 'Magnus Tørrissen, IWE' },
      { slug: 'lng-piping-weld-acceptance-criteria', title: 'LNG Piping Weld Acceptance Criteria: ASME B31.3 in Cold Service', h1: 'LNG Piping Weld Acceptance Criteria: ASME B31.3 in Cold Service', keywords: ['LNG piping', 'ASME B31.3 cold service', 'cryogenic welding', 'low temperature service'], focus: 'aws-d1-1', date: '2025-06-30', author: 'Marisol Toro, PE' },
      { slug: 'small-scale-lng-asset-integrity-program', title: 'Small-Scale LNG Asset Integrity: Building a Program Without Refinery Resources', h1: 'Small-Scale LNG Asset Integrity: Building a Program Without Refinery Resources', keywords: ['small scale LNG', 'mini LNG integrity', 'micro LNG inspection', 'LNG bunkering'], focus: 'aim-program', date: '2025-11-21', author: 'Magnus Tørrissen, IWE' },
      { slug: 'bog-compressor-inspection-and-monitoring', title: 'BOG Compressor Inspection and Vibration Monitoring on LNG Trains', h1: 'BOG Compressor Inspection and Vibration Monitoring on LNG Trains', keywords: ['BOG compressor', 'LNG compressor inspection', 'cryogenic compressor', 'rotating equipment LNG'], focus: 'kpi', date: '2026-04-09', author: 'Marisol Toro, PE' },
    ],
  },
  'manufacturing-ndt-quality': {
    siteName: 'Manufacturing NDT Quality',
    publisher: 'Manufacturing NDT Quality Editorial',
    homeColor: 'zinc',
    container: 'practices',
    audience: 'manufacturing QA, OEM quality engineers, supplier auditors',
    primary: 'manufacturing & supplier-quality NDT',
    angles: [
      { slug: 'inline-ut-on-tube-mills-defect-detection', title: 'Inline UT on Tube Mills: What Production Defect Detection Actually Catches', h1: 'Inline UT on Tube Mills: What Production Defect Detection Actually Catches', keywords: ['inline UT', 'tube mill NDT', 'production NDT', 'seam weld UT'], focus: 'paut', date: '2024-09-23', author: 'Florian Mautner, IWE' },
      { slug: 'casting-radiography-acceptance-by-grade', title: 'Casting Radiography Acceptance by Grade: ASTM E446 vs E186 vs E280', h1: 'Casting Radiography Acceptance by Grade: ASTM E446 vs E186 vs E280', keywords: ['ASTM E446', 'casting radiography', 'casting acceptance', 'reference radiograph'], focus: 'fab', date: '2025-02-15', author: 'Florian Mautner, IWE' },
      { slug: 'supplier-quality-audit-ndt-shop', title: 'Supplier Quality Audit of an NDT Shop: A 50-Item Checklist', h1: 'Supplier Quality Audit of an NDT Shop: A 50-Item Checklist', keywords: ['supplier quality audit', 'NDT shop audit', 'AS9100 NDT', 'NADCAP supplier'], focus: 'nadcap', date: '2025-07-26', author: 'Hannelore Veit, AS9100 LA' },
      { slug: 'additive-manufactured-parts-ndt-cap-cct-vs-ut', title: 'Additive Manufactured Parts NDT: CT vs UT vs PAUT for AM Inspection', h1: 'Additive Manufactured Parts NDT: CT vs UT vs PAUT for AM Inspection', keywords: ['AM NDT', 'additive manufacturing inspection', 'industrial CT', 'metal AM NDT'], focus: 'paut', date: '2025-12-12', author: 'Florian Mautner, IWE' },
      { slug: 'in-process-quality-control-vs-final-ndt-trade-offs', title: 'In-Process Quality Control vs Final NDT: Where to Spend the Budget', h1: 'In-Process Quality Control vs Final NDT: Where to Spend the Budget', keywords: ['in process QC', 'final inspection NDT', 'manufacturing QA', 'process control vs NDT'], focus: 'kpi', date: '2026-04-23', author: 'Hannelore Veit, AS9100 LA' },
    ],
  },
  'marine-offshore-ndt': {
    siteName: 'Marine & Offshore NDT',
    publisher: 'Marine & Offshore NDT Editorial',
    homeColor: 'blue',
    container: 'offshore',
    audience: 'marine surveyors, FPSO inspection leads, offshore integrity engineers',
    primary: 'marine and offshore NDT',
    angles: [
      { slug: 'class-survey-ndt-scope-abs-dnv-lloyd', title: 'Class Survey NDT Scope: ABS vs DNV vs Lloyd\'s Register Side-by-Side', h1: 'Class Survey NDT Scope: ABS vs DNV vs Lloyd\'s Register Compared', keywords: ['class survey', 'ABS DNV LR', 'class society NDT', 'classification rules'], focus: 'fpso', date: '2024-10-10', author: 'Erik Halvorsen, IIMS' },
      { slug: 'tanker-ballast-tank-inspection-coating-and-thickness', title: 'Tanker Ballast Tank Inspection: Coating, Thickness, and Step-Wash', h1: 'Tanker Ballast Tank Inspection: Coating, Thickness, and Step-Wash', keywords: ['ballast tank', 'IACS UR', 'CSR ballast tank', 'tanker inspection'], focus: 'coating', date: '2025-03-01', author: 'Erik Halvorsen, IIMS' },
      { slug: 'jacket-platform-girth-weld-inspection-from-rope-access', title: 'Jacket Platform Girth Weld Inspection from Rope Access', h1: 'Jacket Platform Girth Weld Inspection from Rope Access', keywords: ['jacket platform NDT', 'rope access inspection', 'offshore weld inspection', 'platform girth weld'], focus: 'fmd', date: '2025-08-14', author: 'Marina Lopes, NDT Engineer' },
      { slug: 'flexible-riser-inspection-techniques-emerging', title: 'Flexible Riser Inspection Techniques: Where the Industry Is Heading', h1: 'Flexible Riser Inspection Techniques: Where the Industry Is Heading', keywords: ['flexible riser', 'unbonded flexible pipe', 'riser inspection', 'API 17B'], focus: 'rov', date: '2025-12-19', author: 'Marina Lopes, NDT Engineer' },
      { slug: 'in-water-survey-vs-drydock-survey-ndt-coverage', title: 'In-Water Survey vs Drydock Survey: NDT Coverage Differences', h1: 'In-Water Survey vs Drydock Survey: NDT Coverage Differences', keywords: ['in water survey', 'IWS NDT', 'drydock survey', 'underwater inspection'], focus: 'fpso', date: '2026-04-30', author: 'Erik Halvorsen, IIMS' },
    ],
  },
  'middle-east-ndt-resource': {
    siteName: 'Middle East NDT Resource',
    publisher: 'Middle East NDT Resource Editorial',
    homeColor: 'amber',
    container: 'region',
    audience: 'GCC inspection contractors, NOC integrity teams, regional auditors',
    primary: 'Middle East NDT practice and certification',
    angles: [
      { slug: 'aramco-cssp-vs-adnoc-mp-getting-approved-vendor', title: 'Aramco CSSP vs ADNOC MP: Getting on the Approved-Vendor List', h1: 'Aramco CSSP vs ADNOC MP: Getting on the Approved-Vendor List', keywords: ['Aramco CSSP', 'ADNOC MP', 'GCC approved vendor', 'NOC vendor list'], focus: 'method-selection', date: '2024-08-12', author: 'Yousef Al-Otaibi, ASNT Level III' },
      { slug: 'desert-pipeline-cui-aramco-saes-l', title: 'Desert Pipeline CUI: Aramco SAES-L Practical Inspection Guide', h1: 'Desert Pipeline CUI: Aramco SAES-L Practical Inspection Guide', keywords: ['desert pipeline CUI', 'Aramco SAES-L', 'Saudi pipeline inspection', 'GCC CUI'], focus: 'cui', date: '2025-01-25', author: 'Yousef Al-Otaibi, ASNT Level III' },
      { slug: 'gcc-welder-qualification-recognition-across-borders', title: 'GCC Welder Qualification Recognition Across Borders', h1: 'GCC Welder Qualification Recognition Across Borders', keywords: ['GCC welder qualification', 'GCC cross border', 'Aramco welder', 'KOC welder'], focus: 'wpq', date: '2025-06-19', author: 'Reema Al-Qahtani, IWE' },
      { slug: 'sour-service-h2s-inspection-program-gcc', title: 'Sour Service H2S Inspection Program: A GCC Operator Perspective', h1: 'Sour Service H2S Inspection Program: A GCC Operator Perspective', keywords: ['sour service', 'H2S inspection', 'NACE MR0175', 'GCC sour pipeline'], focus: 'scc', date: '2025-11-04', author: 'Yousef Al-Otaibi, ASNT Level III' },
      { slug: 'inspection-procurement-the-gcc-way', title: 'Inspection Procurement the GCC Way: What Western Vendors Get Wrong', h1: 'Inspection Procurement the GCC Way: What Western Vendors Get Wrong', keywords: ['GCC inspection procurement', 'GCC NDT contracting', 'GCC vendor onboarding', 'tendering NDT'], focus: 'method-selection', date: '2026-04-16', author: 'Reema Al-Qahtani, IWE' },
    ],
  },
  'mining-ndt-hub': {
    siteName: 'Mining NDT Hub',
    publisher: 'Mining NDT Hub Editorial',
    homeColor: 'stone',
    container: 'mining',
    audience: 'mining mechanical engineers, haul-truck and mill reliability leads',
    primary: 'mining equipment NDT',
    angles: [
      { slug: 'haul-truck-frame-crack-inspection-program', title: 'Haul Truck Frame Crack Inspection Program: MT + UT Workflow', h1: 'Haul Truck Frame Crack Inspection Program: MT + UT Workflow', keywords: ['haul truck inspection', 'mining truck frame', 'truck frame crack', 'mining UT'], focus: 'aws-d1-1', date: '2024-09-26', author: 'Brendan O\'Leary, ICorr' },
      { slug: 'mill-shell-girth-weld-inspection-sag-ball', title: 'Mill Shell Girth Weld Inspection on SAG and Ball Mills', h1: 'Mill Shell Girth Weld Inspection on SAG and Ball Mills', keywords: ['SAG mill', 'ball mill shell', 'mill girth weld', 'mining mill NDT'], focus: 'paut', date: '2025-02-28', author: 'Brendan O\'Leary, ICorr' },
      { slug: 'conveyor-pulley-inspection-mt-ut-vt', title: 'Conveyor Pulley Inspection: MT, UT, and VT in Sequence', h1: 'Conveyor Pulley Inspection: MT, UT, and VT in Sequence', keywords: ['conveyor pulley', 'mining conveyor', 'pulley inspection', 'belt conveyor NDT'], focus: 'vt', date: '2025-07-31', author: 'Nadya Sharma, Mining Reliability Eng' },
      { slug: 'tailings-dam-instrumentation-and-ndt-overlap', title: 'Tailings Dam Instrumentation and Where NDT Fits In', h1: 'Tailings Dam Instrumentation and Where NDT Fits In', keywords: ['tailings dam', 'TSF monitoring', 'mining dam inspection', 'GISTM compliance'], focus: 'kpi', date: '2025-12-05', author: 'Brendan O\'Leary, ICorr' },
      { slug: 'underground-mining-shaft-rope-inspection', title: 'Underground Mining Shaft Rope Inspection: MFL and Beyond', h1: 'Underground Mining Shaft Rope Inspection: MFL and Beyond', keywords: ['mining shaft rope', 'wire rope MFL', 'mine hoist rope', 'wire rope NDT'], focus: 'ili', date: '2026-04-20', author: 'Nadya Sharma, Mining Reliability Eng' },
    ],
  },
  'ndt-automation-future': {
    siteName: 'NDT Automation Future',
    publisher: 'NDT Automation Future Editorial',
    homeColor: 'purple',
    container: 'future',
    audience: 'NDT software architects, automation engineers, integrity digital leads',
    primary: 'NDT automation and AI-assisted inspection',
    angles: [
      { slug: 'ai-defect-detection-on-rt-films-state-of-art', title: 'AI Defect Detection on RT Films: State of the Art in 2026', h1: 'AI Defect Detection on RT Films: State of the Art in 2026', keywords: ['AI defect detection', 'radiography AI', 'deep learning NDT', 'auto interpretation RT'], focus: 'paut-rt', date: '2024-10-18', author: 'Dr. Aaron Pak, AI Engineer' },
      { slug: 'robotic-crawler-pipeline-inspection-trends', title: 'Robotic Crawler Pipeline Inspection: Where the Industry Is Trending', h1: 'Robotic Crawler Pipeline Inspection: Where the Industry Is Trending', keywords: ['pipeline crawler', 'robotic NDT', 'UT crawler', 'pipeline robot'], focus: 'ili', date: '2025-03-19', author: 'Dr. Aaron Pak, AI Engineer' },
      { slug: 'digital-twin-for-ndt-data-architecture-2026', title: 'Digital Twin for NDT Data: Architecture Choices for 2026', h1: 'Digital Twin for NDT Data: Architecture Choices for 2026', keywords: ['digital twin NDT', 'NDT data architecture', 'integrity digital twin', 'twin data model'], focus: 'aim-program', date: '2025-08-26', author: 'Tessa Bjorklund, Software Architect' },
      { slug: 'auto-paut-data-interpretation-where-its-reliable', title: 'Auto-PAUT Data Interpretation: Where It Is Already Reliable', h1: 'Auto-PAUT Data Interpretation: Where It Is Already Reliable', keywords: ['auto PAUT', 'automated PAUT interpretation', 'AUT analysis', 'machine learning PAUT'], focus: 'paut', date: '2025-12-26', author: 'Dr. Aaron Pak, AI Engineer' },
      { slug: 'cloud-vs-on-prem-ndt-data-the-2026-decision', title: 'Cloud vs On-Prem NDT Data: The 2026 Decision Most Operators Are Making', h1: 'Cloud vs On-Prem NDT Data: The 2026 Decision Most Operators Are Making', keywords: ['cloud NDT data', 'on prem NDT', 'NDT cloud storage', 'integrity cloud'], focus: 'kpi', date: '2026-04-28', author: 'Tessa Bjorklund, Software Architect' },
    ],
  },
  'ndt-careers-portal': {
    siteName: 'NDT Careers Portal',
    publisher: 'NDT Careers Portal Editorial',
    homeColor: 'rose',
    container: 'paths',
    audience: 'NDT job seekers, career changers, hiring managers',
    primary: 'NDT careers and hiring',
    angles: [
      { slug: 'ndt-salary-by-method-and-region-2026', title: 'NDT Salary by Method and Region (2026 Snapshot)', h1: 'NDT Salary by Method and Region: A 2026 Snapshot', keywords: ['NDT salary', 'NDT pay 2026', 'inspector salary', 'global NDT pay'], focus: 'careers', date: '2024-08-09', author: 'Diana Marsh, NDT Recruiter' },
      { slug: 'transitioning-from-welder-to-ndt-inspector', title: 'Transitioning From Welder to NDT Inspector: A Practical Roadmap', h1: 'Transitioning From Welder to NDT Inspector: A Practical Roadmap', keywords: ['welder to inspector', 'NDT career change', 'CWI to NDT', 'becoming NDT inspector'], focus: 'careers', date: '2025-01-08', author: 'Diana Marsh, NDT Recruiter' },
      { slug: 'remote-ndt-jobs-are-they-real', title: 'Remote NDT Jobs: Are They Real?', h1: 'Remote NDT Jobs: Are They Real?', keywords: ['remote NDT', 'remote inspection job', 'work from home NDT', 'NDT consultant remote'], focus: 'careers', date: '2025-05-29', author: 'Sebastián Núñez, NDT Career Coach' },
      { slug: 'offshore-vs-onshore-ndt-careers-financial-and-lifestyle', title: 'Offshore vs Onshore NDT Careers: Financial and Lifestyle Trade-Offs', h1: 'Offshore vs Onshore NDT Careers: Financial and Lifestyle Trade-Offs', keywords: ['offshore NDT job', 'onshore NDT job', 'offshore rotation', 'NDT lifestyle'], focus: 'careers', date: '2025-10-15', author: 'Diana Marsh, NDT Recruiter' },
      { slug: 'building-a-level-iii-consulting-practice', title: 'Building a Level III Consulting Practice: From Salaried to Self-Employed', h1: 'Building a Level III Consulting Practice: From Salaried to Self-Employed', keywords: ['Level III consulting', 'NDT consultant', 'independent Level III', 'NDT business'], focus: 'careers', date: '2026-03-30', author: 'Sebastián Núñez, NDT Career Coach' },
    ],
  },
  'ndt-equipment-reviews': {
    siteName: 'NDT Equipment Reviews',
    publisher: 'NDT Equipment Reviews Editorial',
    homeColor: 'emerald',
    container: 'reviews',
    audience: 'inspection contractors, NDT equipment buyers, QA leads',
    primary: 'NDT equipment selection and reviews',
    angles: [
      { slug: 'epoch-6lt-vs-epoch-650-real-world-comparison', title: 'Epoch 6LT vs Epoch 650: A Real-World Comparison for Field UT', h1: 'Epoch 6LT vs Epoch 650: A Real-World Comparison for Field UT', keywords: ['Epoch 650', 'Epoch 6LT', 'UT flaw detector', 'Olympus EPOCH'], focus: 'paut', date: '2024-10-26', author: 'Lukas Holt, NDT Equipment Reviewer' },
      { slug: 'omniscan-x3-vs-x3-64-which-channel-count-fits', title: 'OmniScan X3 vs X3 64: Which Channel Count Actually Fits Your Work?', h1: 'OmniScan X3 vs X3 64: Which Channel Count Actually Fits Your Work?', keywords: ['OmniScan X3', 'OmniScan X3 64', 'PAUT flaw detector', 'Evident OmniScan'], focus: 'paut', date: '2025-03-08', author: 'Lukas Holt, NDT Equipment Reviewer' },
      { slug: 'crawler-vs-handheld-aut-for-pipeline-girths', title: 'Crawler vs Handheld AUT for Pipeline Girth Welds', h1: 'Crawler vs Handheld AUT for Pipeline Girth Welds', keywords: ['AUT crawler', 'handheld PAUT', 'pipeline girth weld', 'mechanized UT'], focus: 'paut', date: '2025-08-12', author: 'Yara Ahmadi, Pipeline AUT' },
      { slug: 'calibration-blocks-buying-guide-2026', title: 'Calibration Blocks Buying Guide (2026): Don\'t Buy the Cheapest', h1: 'Calibration Blocks Buying Guide (2026)', keywords: ['calibration block', 'NDT calibration', 'IIW block', 'PAUT calibration block'], focus: 'method-selection', date: '2025-11-29', author: 'Lukas Holt, NDT Equipment Reviewer' },
      { slug: 'digital-rt-detectors-flat-panel-vs-line-scan', title: 'Digital RT Detectors: Flat Panel vs Line Scan in 2026', h1: 'Digital RT Detectors: Flat Panel vs Line Scan in 2026', keywords: ['digital RT detector', 'flat panel DR', 'line scan radiography', 'DDA RT'], focus: 'paut-rt', date: '2026-04-13', author: 'Yara Ahmadi, Pipeline AUT' },
    ],
  },
  'ndt-safety-compliance': {
    siteName: 'NDT Safety & Compliance',
    publisher: 'NDT Safety & Compliance Editorial',
    homeColor: 'red',
    container: 'compliance',
    audience: 'NDT safety officers, RSOs, EHS managers, regulatory leads',
    primary: 'NDT safety and regulatory compliance',
    angles: [
      { slug: 'industrial-radiography-safety-program-essentials', title: 'Industrial Radiography Safety Program Essentials', h1: 'Industrial Radiography Safety Program Essentials', keywords: ['radiography safety', 'RSO program', 'industrial radiography', '10 CFR 34'], focus: 'isi', date: '2024-09-15', author: 'Dr. Imogen West, RSO' },
      { slug: 'transport-of-ndt-sources-iata-imdg', title: 'Transport of NDT Radioactive Sources: IATA and IMDG Practical Notes', h1: 'Transport of NDT Radioactive Sources: IATA and IMDG Practical Notes', keywords: ['source transport', 'IATA Class 7', 'IMDG radioactive', 'NDT source shipping'], focus: 'isi', date: '2025-02-08', author: 'Dr. Imogen West, RSO' },
      { slug: 'incident-investigation-after-ndt-source-loss', title: 'Incident Investigation After an NDT Source Loss: A Field Manager Guide', h1: 'Incident Investigation After an NDT Source Loss: A Field Manager Guide', keywords: ['source loss', 'NRC reporting', 'NDT incident', 'radioactive source incident'], focus: 'isi', date: '2025-07-18', author: 'Aleksey Sevcik, ASNT Level III' },
      { slug: 'lockout-tagout-for-ut-and-mt-on-rotating-equipment', title: 'Lockout-Tagout for UT and MT on Rotating Equipment', h1: 'Lockout-Tagout for UT and MT on Rotating Equipment', keywords: ['lockout tagout', 'LOTO NDT', 'NDT safety rotating', 'EHS NDT'], focus: 'vt', date: '2025-12-01', author: 'Dr. Imogen West, RSO' },
      { slug: 'inspector-fatigue-and-pod-the-data-no-one-shares', title: 'Inspector Fatigue and Probability of Detection: The Data No One Shares', h1: 'Inspector Fatigue and Probability of Detection: The Data No One Shares', keywords: ['inspector fatigue', 'POD NDT', 'human factors NDT', 'inspection POD'], focus: 'kpi', date: '2026-04-25', author: 'Aleksey Sevcik, ASNT Level III' },
    ],
  },
  'ndt-software-solutions': {
    siteName: 'NDT Software Solutions',
    publisher: 'NDT Software Solutions Editorial',
    homeColor: 'blue',
    container: 'solutions',
    audience: 'NDT software buyers, integrity IT leads, digital QA managers',
    primary: 'NDT software and digital inspection platforms',
    angles: [
      { slug: 'ndt-reporting-software-buyer-checklist-2026', title: 'NDT Reporting Software Buyer Checklist (2026)', h1: 'NDT Reporting Software Buyer Checklist (2026)', keywords: ['NDT reporting software', 'inspection report software', 'NDT software buyer', 'NDT digital reporting'], focus: 'kpi', date: '2024-10-31', author: 'Carlos Rabago, Solution Architect' },
      { slug: 'on-prem-vs-saas-ndt-platforms-trade-offs', title: 'On-Prem vs SaaS NDT Platforms: Real Trade-Offs', h1: 'On-Prem vs SaaS NDT Platforms: Real Trade-Offs', keywords: ['SaaS NDT', 'on prem inspection software', 'NDT platform deployment', 'cloud NDT'], focus: 'kpi', date: '2025-03-22', author: 'Carlos Rabago, Solution Architect' },
      { slug: 'integrating-ndt-data-with-cmms-sap-pm-maximo', title: 'Integrating NDT Data With CMMS: SAP PM and Maximo Side-by-Side', h1: 'Integrating NDT Data With CMMS: SAP PM and Maximo Side-by-Side', keywords: ['NDT CMMS integration', 'SAP PM NDT', 'Maximo NDT', 'inspection CMMS'], focus: 'aim-program', date: '2025-08-29', author: 'Mireille Dubois, IT Architect' },
      { slug: 'mobile-data-capture-offline-inspection-apps', title: 'Mobile Data Capture: Offline-Capable Inspection Apps in 2026', h1: 'Mobile Data Capture: Offline-Capable Inspection Apps in 2026', keywords: ['mobile NDT app', 'offline inspection', 'tablet inspection', 'field data capture'], focus: 'kpi', date: '2025-12-30', author: 'Carlos Rabago, Solution Architect' },
      { slug: 'data-retention-policy-for-ndt-files-7-years-or-life-of-asset', title: 'Data Retention Policy for NDT Files: 7 Years or Life of Asset?', h1: 'Data Retention Policy for NDT Files: 7 Years or Life of Asset?', keywords: ['NDT data retention', 'inspection data archive', 'integrity data policy', 'NDT records'], focus: 'kpi', date: '2026-04-27', author: 'Mireille Dubois, IT Architect' },
    ],
  },
  'ndt-standards-library': {
    siteName: 'NDT Standards Library',
    publisher: 'NDT Standards Library Editorial',
    homeColor: 'gray',
    container: 'library',
    audience: 'NDT procedure writers, code/standard specialists, integrity engineers',
    primary: 'NDT standards and codes reference',
    angles: [
      { slug: 'asme-section-v-2025-edition-changes', title: 'ASME Section V 2025 Edition: What Changed and What It Means', h1: 'ASME Section V 2025 Edition: What Changed and What It Means', keywords: ['ASME Section V 2025', 'ASME V changes', 'Section V edition', 'BPVC Section V'], focus: 'procedures', date: '2024-08-26', author: 'Rabia Yousef, ASNT Level III' },
      { slug: 'iso-9712-vs-en-iso-vs-asnt-cross-recognition', title: 'ISO 9712 vs EN-ISO vs ASNT: Cross-Recognition Realities', h1: 'ISO 9712 vs EN-ISO vs ASNT: Cross-Recognition Realities', keywords: ['ISO 9712', 'EN ISO NDT', 'ASNT recognition', 'NDT certification cross border'], focus: 'asnt-cert', date: '2025-01-31', author: 'Rabia Yousef, ASNT Level III' },
      { slug: 'choosing-the-right-pipe-code-asme-b31-1-vs-b31-3-vs-b31-8', title: 'Choosing the Right Pipe Code: ASME B31.1 vs B31.3 vs B31.8', h1: 'Choosing the Right Pipe Code: ASME B31.1 vs B31.3 vs B31.8', keywords: ['ASME B31', 'pipe code selection', 'B31.1 vs B31.3', 'ASME piping'], focus: 'fab', date: '2025-06-12', author: 'Otavio Sá, PE' },
      { slug: 'aws-d1-1-vs-aws-d1-5-vs-aws-d1-6-pick-the-correct-code', title: 'AWS D1.1 vs D1.5 vs D1.6: Pick the Correct Welding Code', h1: 'AWS D1.1 vs D1.5 vs D1.6: Pick the Correct Welding Code', keywords: ['AWS D1.1', 'AWS D1.5', 'AWS D1.6', 'welding code selection'], focus: 'aws-d1-1', date: '2025-10-22', author: 'Rabia Yousef, ASNT Level III' },
      { slug: 'api-vs-asme-vs-iso-pressure-equipment-rules-quick-map', title: 'API vs ASME vs ISO Pressure-Equipment Rules: A Quick Map', h1: 'API vs ASME vs ISO Pressure-Equipment Rules: A Quick Map', keywords: ['API ASME ISO', 'pressure equipment rules', 'PED', 'pressure code comparison'], focus: 'api-510', date: '2026-03-22', author: 'Otavio Sá, PE' },
    ],
  },
  'ndt-training-academy': {
    siteName: 'NDT Training Academy',
    publisher: 'NDT Training Academy Editorial',
    homeColor: 'indigo',
    container: 'curriculum',
    audience: 'NDT students, trainees, training providers',
    primary: 'NDT training and curriculum design',
    angles: [
      { slug: 'designing-a-level-ii-ut-course-syllabus', title: 'Designing a Level II UT Course Syllabus That Actually Prepares Students', h1: 'Designing a Level II UT Course Syllabus That Actually Prepares Students', keywords: ['Level II UT course', 'UT syllabus', 'NDT training program', 'Level II syllabus'], focus: 'asnt-cert', date: '2024-09-09', author: 'Dr. Helena Vretska, NDT Instructor' },
      { slug: 'practical-vs-theory-hours-snt-tc-1a-vs-cp-189', title: 'Practical vs Theory Hours: SNT-TC-1A vs CP-189', h1: 'Practical vs Theory Hours: SNT-TC-1A vs CP-189', keywords: ['SNT-TC-1A hours', 'CP-189 hours', 'NDT training hours', 'practical NDT training'], focus: 'asnt-cert', date: '2025-02-18', author: 'Dr. Helena Vretska, NDT Instructor' },
      { slug: 'building-an-ndt-school-business-model', title: 'Building an NDT School: Business Model and Curriculum Choices', h1: 'Building an NDT School: Business Model and Curriculum Choices', keywords: ['NDT school', 'NDT training business', 'NDT institute', 'NDT academy'], focus: 'careers', date: '2025-07-12', author: 'Theo Bergman, ASNT Level III' },
      { slug: 'online-vs-in-person-ndt-courses-where-each-wins', title: 'Online vs In-Person NDT Courses: Where Each Format Wins', h1: 'Online vs In-Person NDT Courses: Where Each Format Wins', keywords: ['online NDT course', 'in person NDT', 'NDT distance learning', 'hybrid NDT training'], focus: 'asnt-cert', date: '2025-11-25', author: 'Dr. Helena Vretska, NDT Instructor' },
      { slug: 'eye-exam-jaeger-near-vision-ndt-acceptance', title: 'Eye Exam and Jaeger Near Vision: What the NDT Standards Require', h1: 'Eye Exam and Jaeger Near Vision: What the NDT Standards Require', keywords: ['NDT eye exam', 'Jaeger 2', 'visual acuity NDT', 'inspector eye test'], focus: 'asnt-cert', date: '2026-04-06', author: 'Theo Bergman, ASNT Level III' },
    ],
  },
  'oil-gas-inspection-guide': {
    siteName: 'Oil & Gas Inspection Guide',
    publisher: 'Oil & Gas Inspection Guide Editorial',
    homeColor: 'amber',
    container: 'sectors',
    audience: 'upstream/midstream/downstream inspection leads',
    primary: 'oil & gas inspection',
    angles: [
      { slug: 'upstream-midstream-downstream-inspection-budget-allocation', title: 'Upstream vs Midstream vs Downstream: Where Inspection Budget Actually Goes', h1: 'Upstream vs Midstream vs Downstream: Where Inspection Budget Actually Goes', keywords: ['upstream inspection', 'midstream inspection', 'downstream inspection', 'oil gas inspection budget'], focus: 'kpi', date: '2024-10-02', author: 'Ricardo Sosa, PE' },
      { slug: 'crude-oil-storage-tank-inspection-api-653-walkthrough', title: 'Crude Oil Storage Tank Inspection: API 653 Walkthrough', h1: 'Crude Oil Storage Tank Inspection: API 653 Walkthrough', keywords: ['API 653', 'crude tank inspection', 'aboveground storage tank', 'tank floor inspection'], focus: 'api-510', date: '2025-02-25', author: 'Ricardo Sosa, PE' },
      { slug: 'gathering-system-pipeline-inspection-cost-effective', title: 'Gathering-System Pipeline Inspection: Cost-Effective Methods', h1: 'Gathering-System Pipeline Inspection: Cost-Effective Methods', keywords: ['gathering pipeline', 'shale pipeline inspection', 'gathering system', 'oilfield pipeline NDT'], focus: 'ili', date: '2025-07-09', author: 'Marisa Quintero, Pipeline Eng' },
      { slug: 'wellhead-inspection-and-pressure-testing', title: 'Wellhead Inspection and Pressure Testing: Field Practice', h1: 'Wellhead Inspection and Pressure Testing: Field Practice', keywords: ['wellhead inspection', 'tree pressure test', 'API 6A', 'frac tree'], focus: 'fab', date: '2025-12-08', author: 'Ricardo Sosa, PE' },
      { slug: 'lact-skid-and-meter-prover-inspection', title: 'LACT Skid and Meter Prover Inspection: What QA Should Look For', h1: 'LACT Skid and Meter Prover Inspection: What QA Should Look For', keywords: ['LACT skid', 'meter prover', 'custody transfer', 'API MPMS'], focus: 'kpi', date: '2026-04-11', author: 'Marisa Quintero, Pipeline Eng' },
    ],
  },
  'power-generation-ndt': {
    siteName: 'Power Generation NDT',
    publisher: 'Power Generation NDT Editorial',
    homeColor: 'yellow',
    container: 'plant',
    audience: 'power station inspection engineers, boiler/turbine NDT specialists',
    primary: 'power generation NDT (fossil, gas, nuclear, renewable)',
    angles: [
      { slug: 'boiler-tube-inspection-program-for-fossil-plants', title: 'Boiler Tube Inspection Program for Fossil Plants', h1: 'Boiler Tube Inspection Program for Fossil Plants', keywords: ['boiler tube', 'EPRI boiler', 'fossil plant NDT', 'waterwall tube'], focus: 'method-selection', date: '2024-09-30', author: 'Halvar Strøm, EPRI-certified' },
      { slug: 'turbine-blade-root-inspection-eddy-current-and-paut', title: 'Turbine Blade Root Inspection: Eddy Current and PAUT in Practice', h1: 'Turbine Blade Root Inspection: Eddy Current and PAUT in Practice', keywords: ['turbine blade root', 'fir tree root', 'steam turbine NDT', 'blade root ECT'], focus: 'paut', date: '2025-03-04', author: 'Halvar Strøm, EPRI-certified' },
      { slug: 'gas-turbine-hot-section-inspection-borescope-and-fpi', title: 'Gas Turbine Hot Section Inspection: Borescope and FPI in Practice', h1: 'Gas Turbine Hot Section Inspection: Borescope and FPI in Practice', keywords: ['gas turbine hot section', 'borescope inspection', 'GT inspection', 'frame 5 frame 7'], focus: 'fpi', date: '2025-08-18', author: 'Yvonne Daw, NDT Engineer' },
      { slug: 'condenser-tube-inspection-for-power-plants', title: 'Condenser Tube Inspection for Power Plants: A Practical Workflow', h1: 'Condenser Tube Inspection for Power Plants: A Practical Workflow', keywords: ['condenser tube', 'power plant ECT', 'condenser inspection', 'titanium tube inspection'], focus: 'method-selection', date: '2025-12-21', author: 'Halvar Strøm, EPRI-certified' },
      { slug: 'inspection-of-wind-turbine-tower-flange-bolts', title: 'Inspection of Wind Turbine Tower Flange Bolts: Why It Keeps Surprising People', h1: 'Inspection of Wind Turbine Tower Flange Bolts: Why It Keeps Surprising People', keywords: ['wind turbine bolt', 'tower flange bolt', 'wind turbine NDT', 'bolt inspection'], focus: 'cfrp', date: '2026-04-17', author: 'Yvonne Daw, NDT Engineer' },
    ],
  },
  'rail-ndt-resource': {
    siteName: 'Rail NDT Resource',
    publisher: 'Rail NDT Resource Editorial',
    homeColor: 'orange',
    container: 'rail',
    audience: 'rail track engineers, rolling-stock NDT, rail mechanical leads',
    primary: 'rail NDT (track and rolling stock)',
    angles: [
      { slug: 'rail-flaw-detection-vehicle-types-and-tradeoffs', title: 'Rail Flaw Detection Vehicles: Types, Speeds, and Trade-Offs', h1: 'Rail Flaw Detection Vehicles: Types, Speeds, and Trade-Offs', keywords: ['rail flaw detection', 'rail UT car', 'broken rail', 'AAR rail inspection'], focus: 'ili', date: '2024-09-20', author: 'Kelvin Owen, AREMA' },
      { slug: 'rolling-stock-wheel-set-ndt-paut-and-mt', title: 'Rolling Stock Wheel Set NDT: PAUT and MT in Practice', h1: 'Rolling Stock Wheel Set NDT: PAUT and MT in Practice', keywords: ['wheel set NDT', 'rolling stock', 'axle NDT', 'rail wheel inspection'], focus: 'paut', date: '2025-02-21', author: 'Kelvin Owen, AREMA' },
      { slug: 'thermite-weld-inspection-on-continuous-welded-rail', title: 'Thermite Weld Inspection on Continuous Welded Rail', h1: 'Thermite Weld Inspection on Continuous Welded Rail', keywords: ['thermite weld', 'CWR rail', 'aluminothermic weld', 'rail weld NDT'], focus: 'aws-d1-1', date: '2025-07-25', author: 'Saskia Vandenburg, IWE' },
      { slug: 'rail-corrosion-fatigue-detection-rcf-cracking', title: 'Rail Rolling Contact Fatigue (RCF): Detection and Mitigation', h1: 'Rail Rolling Contact Fatigue (RCF): Detection and Mitigation', keywords: ['RCF cracking', 'rail rolling contact fatigue', 'head check', 'rail squat'], focus: 'cracking', date: '2025-12-04', author: 'Kelvin Owen, AREMA' },
      { slug: 'rail-bridge-truss-inspection-aar-mra', title: 'Rail Bridge Truss Inspection: AAR and Operator Practice', h1: 'Rail Bridge Truss Inspection: AAR and Operator Practice', keywords: ['rail bridge', 'truss bridge', 'rail bridge inspection', 'AAR MRA'], focus: 'aws-d1-1', date: '2026-04-18', author: 'Saskia Vandenburg, IWE' },
    ],
  },
  'renewable-energy-ndt': {
    siteName: 'Renewable Energy NDT',
    publisher: 'Renewable Energy NDT Editorial',
    homeColor: 'green',
    container: 'renewables',
    audience: 'wind, solar, hydrogen, and geothermal NDT engineers',
    primary: 'renewable energy NDT',
    angles: [
      { slug: 'wind-turbine-foundation-grout-inspection-offshore', title: 'Wind Turbine Foundation Grout Inspection (Offshore Monopiles)', h1: 'Wind Turbine Foundation Grout Inspection (Offshore Monopiles)', keywords: ['monopile grout', 'wind foundation NDT', 'offshore wind monopile', 'transition piece grout'], focus: 'fpso', date: '2024-10-12', author: 'Sven Mortensen, IIMS' },
      { slug: 'green-hydrogen-pipeline-inspection-considerations', title: 'Green Hydrogen Pipeline Inspection: New Considerations', h1: 'Green Hydrogen Pipeline Inspection: New Considerations', keywords: ['hydrogen pipeline', 'green hydrogen', 'hydrogen embrittlement', 'H2 pipeline NDT'], focus: 'cracking', date: '2025-03-12', author: 'Sven Mortensen, IIMS' },
      { slug: 'csp-receiver-tube-inspection-concentrated-solar', title: 'CSP Receiver Tube Inspection for Concentrated Solar Plants', h1: 'CSP Receiver Tube Inspection for Concentrated Solar Plants', keywords: ['CSP receiver', 'concentrated solar', 'solar tower inspection', 'receiver tube NDT'], focus: 'method-selection', date: '2025-08-23', author: 'Lior Adani, Solar Eng' },
      { slug: 'geothermal-well-casing-corrosion-and-inspection', title: 'Geothermal Well Casing Corrosion and Inspection Strategy', h1: 'Geothermal Well Casing Corrosion and Inspection Strategy', keywords: ['geothermal well', 'casing inspection', 'geothermal corrosion', 'CO2 H2S well'], focus: 'sulfidation', date: '2025-12-17', author: 'Lior Adani, Geothermal Eng' },
      { slug: 'wind-blade-leading-edge-erosion-detection-and-repair', title: 'Wind Blade Leading Edge Erosion: Detection and Repair', h1: 'Wind Blade Leading Edge Erosion: Detection and Repair', keywords: ['leading edge erosion', 'wind blade LEE', 'blade repair', 'leading edge protection'], focus: 'coating', date: '2026-04-21', author: 'Sven Mortensen, IIMS' },
    ],
  },
  'tank-inspection-resource': {
    siteName: 'Tank Inspection Resource',
    publisher: 'Tank Inspection Resource Editorial',
    homeColor: 'cyan',
    container: 'tanks',
    audience: 'API 653 inspectors, terminal operators, tank field engineers',
    primary: 'aboveground storage tank inspection',
    angles: [
      { slug: 'api-653-out-of-service-internal-inspection-checklist', title: 'API 653 Out-of-Service Internal Inspection Checklist', h1: 'API 653 Out-of-Service Internal Inspection Checklist', keywords: ['API 653 internal', 'tank internal inspection', 'out of service inspection', 'tank floor'], focus: 'api-510', date: '2024-09-06', author: 'Heidi Knaack, API 653' },
      { slug: 'tank-floor-mfl-vs-paut-which-fits-the-job', title: 'Tank Floor MFL vs PAUT: Which Method Fits the Job?', h1: 'Tank Floor MFL vs PAUT: Which Method Fits the Job?', keywords: ['tank floor MFL', 'tank floor inspection', 'floor scanner', 'PAUT tank floor'], focus: 'paut', date: '2025-01-28', author: 'Heidi Knaack, API 653' },
      { slug: 'tank-shell-thickness-program-with-out-of-service-inspection', title: 'Tank Shell Thickness Program With and Without Out-of-Service Inspection', h1: 'Tank Shell Thickness Program With and Without Out-of-Service Inspection', keywords: ['tank shell thickness', 'CML tank', 'in service tank', 'API 653 thickness'], focus: 'cml', date: '2025-06-26', author: 'Tomás Reinoso, API 510/653' },
      { slug: 'floating-roof-seal-inspection-and-leak-detection', title: 'Floating Roof Seal Inspection and Leak Detection', h1: 'Floating Roof Seal Inspection and Leak Detection', keywords: ['floating roof seal', 'EFR seal', 'tank seal inspection', 'EPA QQQ'], focus: 'coating', date: '2025-11-15', author: 'Heidi Knaack, API 653' },
      { slug: 'soil-side-corrosion-on-tank-floors-and-detection', title: 'Soil-Side Corrosion on Tank Floors and How to Detect It', h1: 'Soil-Side Corrosion on Tank Floors and How to Detect It', keywords: ['soil side corrosion', 'tank floor underside', 'API 653 soil side', 'tank floor MFL'], focus: 'cui', date: '2026-04-05', author: 'Tomás Reinoso, API 510/653' },
    ],
  },
  'welding-inspection-hub': {
    siteName: 'Welding Inspection Hub',
    publisher: 'Welding Inspection Hub Editorial',
    homeColor: 'amber',
    container: 'inspect',
    audience: 'CWIs, CSWIPs, IWIs, welding QA managers',
    primary: 'welding inspection and QA/QC',
    angles: [
      { slug: 'cwi-vs-cswip-vs-iwi-which-cert-for-which-market', title: 'CWI vs CSWIP vs IWI: Which Cert Fits Which Market?', h1: 'CWI vs CSWIP vs IWI: Which Cert Fits Which Market?', keywords: ['CWI CSWIP IWI', 'welding inspector certification', 'AWS CWI', 'TWI CSWIP'], focus: 'asnt-cert', date: '2024-08-18', author: 'Magda Krasinski, AWS CWI' },
      { slug: 'visual-weld-acceptance-by-code-asme-vs-aws', title: 'Visual Weld Acceptance by Code: ASME Section IX vs AWS D1.1', h1: 'Visual Weld Acceptance by Code: ASME Section IX vs AWS D1.1', keywords: ['visual weld acceptance', 'ASME IX visual', 'AWS D1.1 VT', 'weld VT'], focus: 'vt', date: '2025-02-01', author: 'Magda Krasinski, AWS CWI' },
      { slug: 'weld-procedure-qualification-record-pqr-from-zero', title: 'Weld Procedure Qualification Record (PQR) From Zero', h1: 'Weld Procedure Qualification Record (PQR) From Zero', keywords: ['PQR welding', 'WPS PQR', 'ASME IX', 'welding qualification'], focus: 'wpq', date: '2025-06-08', author: 'Carlos Andrade, IWE' },
      { slug: 'welding-distortion-control-on-thin-plate-fabrication', title: 'Welding Distortion Control on Thin-Plate Fabrication', h1: 'Welding Distortion Control on Thin-Plate Fabrication', keywords: ['welding distortion', 'thin plate welding', 'distortion control', 'tack welding strategy'], focus: 'wpq', date: '2025-10-26', author: 'Magda Krasinski, AWS CWI' },
      { slug: 'macro-etch-test-on-welds-what-it-actually-shows', title: 'Macro-Etch Test on Welds: What It Actually Shows You', h1: 'Macro-Etch Test on Welds: What It Actually Shows You', keywords: ['macro etch', 'macro test weld', 'AWS D1.1 macro', 'weld cross section'], focus: 'aws-d1-1', date: '2026-03-28', author: 'Carlos Andrade, IWE' },
    ],
  },
});

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
// FRESH PAGES POOL (2026-05-23): new ERP pages + new blog posts + curated
// high-value existing pillars. Used to spread backlink love across the
// 232 new URLs we created on 2026-05-23 (final report).
// Distribution target across the engine:
//   40% from new ERP pages, 30% from new blog posts, 30% from high-value pillars
// (these are added on top of the existing per-focus TARGET_CATALOG; about half
//  of each article's "internal" links now come from the fresh pool.)
// ---------------------------------------------------------------------------
function anchorForErpPage(slug) {
  // derive natural anchor text from slug pattern
  if (slug.startsWith('ndt-erp-')) {
    const loc = slug.replace('ndt-erp-', '').replace(/-/g, ' ');
    return [
      `the affordable NDT ERP option for ${loc}`,
      `NDT ERP pricing & app coverage for ${loc}`,
      `the ${loc} NDT ERP page`,
    ];
  }
  if (slug.startsWith('crm-ndt-inspection-companies-')) {
    const loc = slug.replace('crm-ndt-inspection-companies-', '').replace(/-/g, ' ');
    return [
      `the CRM-for-NDT-inspection-companies guide for ${loc}`,
      `${loc} NDT inspection CRM overview`,
    ];
  }
  if (slug.startsWith('crm-for-') || slug.startsWith('email-marketing-') || slug.startsWith('marketing-automation-')) {
    const what = slug.replace(/-/g, ' ');
    return [`the ${what} overview maintained by Atlantis NDT`];
  }
  return [`the ${slug.replace(/-/g, ' ')} resource on Atlantis NDT`];
}
function blogAnchorFromUrl(url) {
  const slug = url.split('/').pop() || '';
  const friendly = slug.replace(/-/g, ' ');
  return [
    `the long-form article on ${friendly}`,
    `Atlantis NDT's working notes on ${friendly}`,
    `the ${friendly} reference`,
  ];
}

const FRESH_ERP_POOL = NEW_ERP_PAGES.map((p) => ({
  url: p.url,
  anchors: anchorForErpPage(p.slug),
  source: 'erp',
}));
const FRESH_BLOG_POOL = NEW_BLOG_POSTS.map((p) => ({
  url: p.url,
  anchors: blogAnchorFromUrl(p.url),
  source: 'blog',
}));

// 2026-05-24: Day-1 / Day-2 anchors — derived from the URL's last segment so
// the anchor text reads naturally instead of being a slug repeat.
function dayPageAnchors(url) {
  const path = url.replace(/^https?:\/\/[^/]+/, '');
  const segments = path.split('/').filter(Boolean);
  const leaf = segments[segments.length - 1] || '';
  const top = segments[0] || '';
  const friendly = leaf.replace(/-/g, ' ');
  const topFriendly = top.replace(/-/g, ' ');
  const anchors = [];
  if (top === 'consulting') {
    const city = friendly.replace(/^ndt consulting /, '');
    anchors.push(
      `the NDT consulting page for ${city}`,
      `Atlantis NDT consulting in ${city}`,
      `Level III consulting coverage in ${city}`
    );
  } else if (top === 'compare') {
    anchors.push(
      `the ${friendly} comparison`,
      `Atlantis NDT's ${friendly} write-up`
    );
  } else if (top === 'digital-twins' || top === 'digital-twin' || /^digital-twin/.test(top)) {
    anchors.push(
      `the ${friendly} digital twin page`,
      `Atlantis Digital Twin coverage for ${friendly}`
    );
  } else if (top === 'erp' || top.startsWith('crm-') || top.startsWith('marketing-')) {
    anchors.push(
      `the ${friendly} ERP page on Atlantis NDT`,
      `Atlantis NDT's ${friendly} ERP write-up`
    );
  } else if (top === 'corporate-training' || /training/.test(top)) {
    anchors.push(
      `the ${friendly} training programme`,
      `Atlantis NDT training coverage for ${friendly}`
    );
  } else {
    anchors.push(
      `the ${friendly} page on Atlantis NDT`,
      `Atlantis NDT's ${friendly} resource`
    );
  }
  return anchors;
}
const DAY1_POOL = NEW_DAY1_PAGES.map((p) => ({
  url: p.url,
  anchors: dayPageAnchors(p.url),
  source: 'day1',
}));
const DAY2_POOL = NEW_DAY2_PAGES.map((p) => ({
  url: p.url,
  anchors: dayPageAnchors(p.url),
  source: 'day2',
}));
// Curated high-value pillars
const HIGH_VALUE_PILLARS = [
  { url: `${ATLANTIS_DOMAIN}/erp`, anchors: ['the Atlantis NDT ERP overview (Odoo apps, $18,000/yr all-in)', 'the affordable NDT ERP positioning page'], source: 'pillar' },
  { url: `${ATLANTIS_DOMAIN}/digital-twins`, anchors: ['the digital twin platform overview', 'the Digital Twin software for NDT 2026 page'], source: 'pillar' },
  { url: `${ATLANTIS_DOMAIN}/digital-twin-roi-calculator`, anchors: ['the digital twin ROI calculator', 'the digital twin ROI calculator with worked examples'], source: 'pillar' },
  { url: `${ATLANTIS_DOMAIN}/digital-twin-vendor-comparison`, anchors: ['the digital twin vendor comparison', 'an independent digital twin vendor comparison'], source: 'pillar' },
  { url: `${ATLANTIS_DOMAIN}/ndt-erp-solution`, anchors: ['the NDT ERP solution overview', 'the Odoo-for-NDT solution page'], source: 'pillar' },
  { url: `${ATLANTIS_DOMAIN}/ndt-reporting-software`, anchors: ['the NDT reporting software product page', 'the digital-twin-aware reporting platform'], source: 'pillar' },
  { url: `${ATLANTIS_DOMAIN}/asnt-certification`, anchors: ['the ASNT certification overview'], source: 'pillar' },
  { url: `${ATLANTIS_DOMAIN}/blog/digital-twins-oil-gas`, anchors: ['digital twins in oil & gas - the longer reference'], source: 'pillar' },
  { url: `${ATLANTIS_DOMAIN}/blog/ultimate-guide-ndt-digital-twins-asset-integrity-2025`, anchors: ['the ultimate guide to NDT digital twins'], source: 'pillar' },
  { url: `${ATLANTIS_DOMAIN}/blog/digital-twin-roadmap-oil-gas-companies-asset-integrity`, anchors: ['the digital twin roadmap for oil & gas asset integrity'], source: 'pillar' },
];

// Deterministic pick from a pool keyed by (slug, articleIndex)
function pickFromPool(pool, seed, rng) {
  if (!pool.length) return null;
  const idx = Math.floor(rng() * pool.length);
  const p = pool[idx];
  const anchor = p.anchors[Math.floor(rng() * p.anchors.length)];
  return { url: p.url, anchor, internal: true, source: p.source };
}

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
<p>If we had to summarize ${a.f(0)} in one line it would be this: <strong>the technique matters less than the decision discipline around it.</strong> Teams that consistently choose the right technique are usually teams that have invested in writing down their decision rationale, qualifying their procedures with care, and keeping their inspectors current. Equipment and software change every few years; that discipline does not.</p>${a.posbExtra ? `\n<p>${a.posbExtra}</p>` : ''}`,
};

function pickBacklink(focus, rng, useInternal) {
  if (useInternal) {
    const list = TARGET_CATALOG[focus] || TARGET_CATALOG['method-selection'];
    const choice = list[Math.floor(rng() * list.length)];
    const anchor = choice.anchors[Math.floor(rng() * choice.anchors.length)];
    return { url: choice.url, anchor, internal: true, source: 'catalog' };
  } else {
    const choice = EXTERNAL_AUTHORITY_LINKS[Math.floor(rng() * EXTERNAL_AUTHORITY_LINKS.length)];
    const anchor = choice.anchors[Math.floor(rng() * choice.anchors.length)];
    return { url: choice.url, anchor, internal: false, source: 'external' };
  }
}

// Pick a fresh (2026-05-23 universe) backlink: 40% ERP, 30% blog, 30% pillar
function pickFreshBacklink(rng) {
  const r = rng();
  if (r < 0.4 && FRESH_ERP_POOL.length) return pickFromPool(FRESH_ERP_POOL, 0, rng);
  if (r < 0.7 && FRESH_BLOG_POOL.length) return pickFromPool(FRESH_BLOG_POOL, 0, rng);
  return pickFromPool(HIGH_VALUE_PILLARS, 0, rng);
}

// 2026-05-24 Round-2 distribution:
//   30% Day-1 (segment expansion pages),
//   30% Day-2 (today's parallel-agent pages),
//   20% Day-0 ERP (232 published 2026-05-23 pages — top-up under-linked),
//   20% high-value Atlantis pillars.
// Falls back gracefully if any pool is empty so we never return null.
function pickFreshBacklinkR2(rng) {
  const r = rng();
  if (r < 0.30 && DAY1_POOL.length) return pickFromPool(DAY1_POOL, 0, rng);
  if (r < 0.60 && DAY2_POOL.length) return pickFromPool(DAY2_POOL, 0, rng);
  if (r < 0.80 && FRESH_ERP_POOL.length) return pickFromPool(FRESH_ERP_POOL, 0, rng);
  // 20% pillar (or fill when other pools empty)
  return pickFromPool(HIGH_VALUE_PILLARS, 0, rng);
}

function targetWordCount(slug) {
  // 1500..2500 deterministic per slug
  const seed = hashSeed(slug);
  const rng = makeRng(seed);
  return 1500 + Math.floor(rng() * 1000);
}

function buildArticleHtml(satTopic, angle, internalArticles, articleIndex, mode = 'round1') {
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

  // 2026-05-23 addition: every article gets ONE extra fresh backlink drawn from
  // the new ERP-pages / new-blogs / high-value-pillars pool. This ensures the
  // 232 new pages and 15 new blog posts receive backlink love from satellites.
  // 2026-05-24: in round-2 mode we draw TWO fresh backlinks per article from
  // the Day-1/Day-2/Day-0-ERP/pillar buckets, raising round-2's total link
  // density toward ~175 articles × 5 links = ~875 placements (vs Day-0 ~738).
  const freshPicker = mode === 'round2' ? pickFreshBacklinkR2 : pickFreshBacklink;
  const freshCount = mode === 'round2' ? 2 : 1;
  for (let i = 0; i < freshCount; i++) {
    let safety = 0;
    while (safety < 20) {
      const fb = freshPicker(rng);
      if (!fb) break;
      const key = fb.url + '||' + fb.anchor;
      if (!seenKeys.has(key)) {
        seenKeys.add(key);
        backlinks.push(fb);
        break;
      }
      safety++;
    }
  }

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
    posbExtra: posb.slice(3).join(' ') || '',
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
function enrichSatellite(satName, state, mode = 'round1') {
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

  // Resolve which angle batch to write this run. Round-1 = the original
  // 5 angles per satellite (already on disk after Day 0). Round-2 (2026-05-24)
  // pulls a separate 5 NEW angles per satellite from satellite-round2-angles.mjs.
  const round1Angles = satTopic.angles || [];
  const round2Angles = ROUND2_ANGLES[satName] || [];
  // Anti-footprint: filter out angles whose slug was already used for some
  // OTHER satellite. (Within the same satellite re-runs are idempotent.)
  const sourceAngles = mode === 'round2' ? round2Angles : round1Angles;
  const angles = sourceAngles.filter((a) => {
    const owners = state.usedSlugs[a.slug] || [];
    return owners.length === 0 || owners.includes(satName);
  });
  if (angles.length === 0) {
    console.warn(`All ${mode} angles for ${satName} already taken by other satellites.`);
  }

  // For sitemap / container index / homepage block, we need to surface BOTH
  // round-1 (already on disk) AND round-2 (just written this run) articles.
  const indexAngles = mode === 'round2'
    ? [...round1Angles, ...round2Angles]
    : round1Angles;

  // Pre-resolve the article path used in cross-links.  Round-2 articles also
  // cross-link to round-1 articles to push internal link equity across the
  // whole satellite, not just within the current batch.
  const internalArticles = indexAngles.map((a) => ({
    slug: a.slug,
    title: a.h1,
    path: `/${satTopic.container}/${a.slug}`,
  }));

  const writtenArticles = [];
  const allBacklinks = [];

  for (let idx = 0; idx < angles.length; idx++) {
    const angle = angles[idx];
    const { body, backlinks } = buildArticleHtml(satTopic, angle, internalArticles, idx, mode);
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
      containerIndexTsx({ satTopic, angles: indexAngles })
    );
  } else {
    // Append a sibling _articles-extra.tsx so we don't clobber existing UI
    writeFileSync(
      join(containerDir, '_enriched-articles.tsx'),
      containerIndexTsx({ satTopic, angles: indexAngles })
    );
  }

  // Featured section component for home page
  writeFileSync(
    join(satRoot, 'src', 'app', '_featured-articles.tsx'),
    homepageInjectionBlock(satTopic, indexAngles)
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
    buildSitemapTs({ satDomain, container: satTopic.container, angles: indexAngles, existingTopLevelUrls })
  );

  // Per-satellite report
  const reportSuffix = mode === 'round2' ? '-round2' : '';
  const reportPath = join(REPORTS_DIR, `${satName}${reportSuffix}.md`);
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
  const rawArgs = process.argv.slice(2);
  // Detect --round2 anywhere in argv (so caller can do `--round2 --all` or
  // `--all --round2`). Default mode = round1 (back-compat with Day-0 callers).
  const mode = rawArgs.includes('--round2') ? 'round2' : 'round1';
  const args = rawArgs.filter((a) => a !== '--round2');
  const state = loadState();
  mkdirSync(REPORTS_DIR, { recursive: true });

  let targets;
  if (args[0] === '--all-priority') {
    targets = PRIORITY_SATELLITES;
  } else if (args[0] === '--all') {
    // Run every satellite that has a topic profile.
    targets = Object.keys(TOPIC_PROFILES);
  } else if (args.length) {
    targets = args;
  } else {
    console.log(
      'Usage: node scripts/satellite-enrich.mjs <satellite-name> [<more>]\n' +
        '       node scripts/satellite-enrich.mjs --all-priority\n' +
        '       node scripts/satellite-enrich.mjs --all\n' +
        '       node scripts/satellite-enrich.mjs --all --round2     # 2026-05-24 Round 2'
    );
    process.exit(2);
  }

  const summary = [];
  for (const sat of targets) {
    console.log(`\n=== Enriching (${mode}): ${sat}`);
    const r = enrichSatellite(sat, state, mode);
    if (r) summary.push(r);
  }

  state.runs.push({ at: new Date().toISOString(), mode, targets, count: summary.length });
  saveState(state);

  // Aggregate URL list for indexing
  const urls = [];
  for (const r of summary) {
    urls.push(`${r.satDomain}`);
    for (const a of r.articlesWritten) urls.push(a.url);
  }
  const today = new Date().toISOString().split('T')[0];
  const suffix = mode === 'round2' ? '-round2' : '';
  const urlListPath = join(__dirname, `satellite-urls-to-index-${today}${suffix}.txt`);
  writeFileSync(urlListPath, urls.join('\n') + '\n');

  // 2026-05-24 Round-2: also emit a structured JSON URL list for the GSC
  // multi-account submitter (same schema as indexing-url-list-day1.json).
  if (mode === 'round2') {
    const articleUrls = [];
    const bucketCounts = { day0: 0, day1: 0, day2: 0, pillar: 0, catalog: 0, external: 0 };
    const uniqueTargets = new Set();
    for (const r of summary) {
      for (const a of r.articlesWritten) {
        articleUrls.push({ url: a.url, tier: 'A', satellite: r.satName });
        for (const bl of a.backlinks) {
          uniqueTargets.add(bl.url);
          if (bl.source === 'erp') bucketCounts.day0++;
          else if (bl.source === 'day1') bucketCounts.day1++;
          else if (bl.source === 'day2') bucketCounts.day2++;
          else if (bl.source === 'pillar') bucketCounts.pillar++;
          else if (bl.source === 'catalog') bucketCounts.catalog++;
          else if (bl.source === 'external') bucketCounts.external++;
        }
      }
    }
    const jsonOut = join(__dirname, `satellite-new-urls-${today}.json`);
    writeFileSync(
      jsonOut,
      JSON.stringify(
        {
          generated: new Date().toISOString(),
          source: 'satellite round2 enrichment (2026-05-24)',
          urls: articleUrls,
          bucketCounts,
          uniqueTargetCount: uniqueTargets.size,
        },
        null,
        2
      )
    );
    console.log(`Round-2 JSON URL list: ${jsonOut}`);
    console.log('Backlink bucket distribution:');
    for (const [k, v] of Object.entries(bucketCounts)) {
      console.log(`  ${k}: ${v}`);
    }
    console.log(`Unique target URLs receiving backlinks: ${uniqueTargets.size}`);
  }

  // Aggregate top anchor texts
  const anchorRanking = Object.entries(state.anchorCounts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 10);

  console.log('\n========== ENRICHMENT SUMMARY ==========');
  console.log(`Mode: ${mode}`);
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
