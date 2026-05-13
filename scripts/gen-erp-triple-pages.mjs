// Tier 1: Module × Industry × City triple cross pages.
// 50 high-value combos at /erp/{module}-{industry}-{city}.
// Each page is built from three lookup tables (module, industry, city) so the
// content is genuinely different per (X, Y, Z) — not template-only.
// Patch files only — DO NOT modify App.tsx or scripts/prerender.mjs.

import { readFileSync, writeFileSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const DATA = JSON.parse(readFileSync(join(__dirname, 'gen-erp-data.json'), 'utf-8'));

const MODULE_BY_SLUG = Object.fromEntries(DATA.modules.map(m => [m.slug, m]));
const INDUSTRY_BY_SLUG = Object.fromEntries(DATA.industries.map(i => [i.slug, i]));

// ─── City context (lat/lng + operator / regulator / market profile) ─────────
const CITY_CTX = {
  // Sprint 5 / 6 cities reused for triple pages where applicable.
  'houston':       { name: 'Houston',        country: 'USA',          iso: 'US', lat: 29.7604,  lng: -95.3698,
    market: 'the energy capital of the world with 4,600+ oil & gas firms',
    cluster: 'the 400-mile Gulf Coast refining and petrochemical complex',
    operators: ['ExxonMobil Baytown', 'Marathon Galveston Bay', 'LyondellBasell Channelview', 'Valero Houston / Texas City', 'Phillips 66 Sweeny', 'Shell Deer Park', 'Chevron Phillips Cedar Bayou', 'INEOS Chocolate Bayou'],
    regulators: ['TCEQ', 'OSHA Region 6 PSM', 'USCG District 8', 'Texas Railroad Commission', 'EPA Region 6', 'DOT PHMSA 49 CFR 192 / 195', 'Texas DSHS Radiation Control'],
    codes: ['API 510 / 570 / 653', 'ASME B31.3 / B31.4 / B31.8', 'OSHA 29 CFR 1910.119 PSM', 'TCEQ 30 TAC Chapter 116'],
    flavor: 'Houston turnarounds compress 9 months of work into 30 days', },
  'dubai':         { name: 'Dubai',          country: 'UAE',          iso: 'AE', lat: 25.2048,  lng: 55.2708,
    market: 'the regional commercial hub for GCC oil and gas',
    cluster: 'the Jebel Ali industrial zone and northern emirate fabricators',
    operators: ['ADNOC Distribution', 'ENOC Group', 'DUBAL / EGA', 'DEWA', 'Dragon Oil', 'Emirates Steel', 'Borouge marketing arm', 'Dubai Petroleum'],
    regulators: ['ADQCC', 'MOIAT', 'Dubai Municipality', 'Dubai Civil Defence', 'UAE FANR'],
    codes: ['ADNOC ACS-01', 'API 510 / 570 / 653', 'ASME Section V / VIII', 'ISO 9712', 'IMO MARPOL'],
    flavor: 'Dubai inspection businesses staff project mobilisations into KSA, Oman, and Iraq from Dubai HQ', },
  'abu-dhabi':     { name: 'Abu Dhabi',      country: 'UAE',          iso: 'AE', lat: 24.4539,  lng: 54.3773,
    market: 'the operational heart of UAE upstream and downstream',
    cluster: 'the Ruwais integrated refining / LNG / petrochemical complex',
    operators: ['ADNOC Onshore', 'ADNOC LNG', 'Borouge', 'Fertil', 'TAQA', 'ADNOC Refining', 'ADNOC Gas Processing', 'ADNOC Sour Gas'],
    regulators: ['ADNOC HSE & Asset Integrity', 'ADQCC', 'Federal NCEMA', 'UAE FANR'],
    codes: ['ADNOC ACS-01', 'ADNOC HSE-IM-RP', 'API 510 / 570 / 653', 'ASME Section VIII Div 1 / 2'],
    flavor: 'ADNOC ACS-01 compliance is binary for contract eligibility', },
  'saudi-arabia':  { name: 'Saudi Arabia',   country: 'Saudi Arabia', iso: 'SA', lat: 23.8859,  lng: 45.0792,
    market: 'the largest integrated oil and gas operating environment in the world',
    cluster: 'the Eastern Province upstream-and-downstream complex (Abqaiq, Khurais, Ras Tanura, Jubail) plus Yanbu',
    operators: ['Saudi Aramco', 'SABIC', "Ma'aden", 'SADAF / KEMYA / Yanpet', 'Petro Rabigh', 'Saudi Kayan', 'Yansab', 'Jubail Industrial City operators'],
    regulators: ['HRSD', 'GAMI', 'SASO', 'Saudi Aramco SAEP-1112 / 1142', 'SABIC vendor approval'],
    codes: ['Saudi Aramco SAEP-1112 / 1142', 'SAES-H / SAES-W / SAES-L', 'API 510 / 570 / 653', 'ASME Section V / VIII / IX'],
    flavor: 'SAEP-1112 / 1142 currency is non-negotiable for vendor eligibility', },
  'singapore':     { name: 'Singapore',      country: 'Singapore',    iso: 'SG', lat: 1.3521,   lng: 103.8198,
    market: 'a top three world refining and petrochemical hub',
    cluster: 'Jurong Island, Pulau Bukom, Tuas shipyards, and the FPSO conversion yards at Sembcorp / Keppel',
    operators: ['ExxonMobil Jurong', 'Shell Pulau Bukom', 'Vopak', 'Sembcorp Marine', 'Keppel FPSO', 'MODEC Asia', 'PetroChina International Singapore', 'Chevron Singapore'],
    regulators: ['MOM (Ministry of Manpower)', 'NEA', 'MPA', 'EDB', 'SCDF radiation licensing'],
    codes: ['MOM WSH', 'API 510 / 570 / 653', 'ASME Section V / VIII', 'IMCA D-018', 'ISO 9712'],
    flavor: 'short shutdown windows, MOM authorised-examiner requirements, and 24/7 FPSO conversion campaigns', },
  'mumbai':        { name: 'Mumbai',         country: 'India',        iso: 'IN', lat: 19.0760,  lng: 72.8777,
    market: 'India\'s western refining, offshore production, and petrochemicals hub',
    cluster: 'BPCL Mahul, HPCL Mumbai, ONGC Western Offshore, Reliance Hazira and Jamnagar, Tata Power Trombay',
    operators: ['BPCL Mahul', 'HPCL Mumbai', 'ONGC Western Offshore', 'Reliance Hazira / Patalganga', 'Indian Oil Corporation', 'Tata Power Trombay', 'GAIL western network', 'L&T Hydrocarbon Engineering'],
    regulators: ['PESO', 'OISD', 'DGMS', 'Maharashtra Pollution Control Board', 'BARC', 'AERB'],
    codes: ['OISD-STD-128 / 130 / 137', 'PESO Petroleum Rules 2002', 'IBR', 'IS 2825', 'API 510 / 570 / 653'],
    flavor: 'OISD and PESO statutory inspection in parallel with private-sector ASME/API frameworks at Reliance and Tata', },
  'hyderabad':     { name: 'Hyderabad',      country: 'India',        iso: 'IN', lat: 17.3850,  lng: 78.4867,
    market: 'a fast-growing inspection hub serving BHEL, defence, aerospace, pharma, and HPCL Visakh',
    cluster: 'BHEL Hyderabad, HPCL Visakh refinery, ISRO and BDL suppliers, ECIL, Genome Valley pharma cluster',
    operators: ['BHEL Hyderabad', 'HPCL Visakh refinery', 'Bharat Dynamics Ltd', 'Electronics Corporation of India', 'ISRO supplier ecosystem', 'DRDO suppliers', 'Reddy Labs / Aurobindo', 'NTPC Ramagundam'],
    regulators: ['PESO', 'BARC', 'AERB', 'DGCA', 'Telangana Pollution Control Board', 'CDSCO'],
    codes: ['IBR', 'IS 2825', 'AERB SC/IR-1', 'DGCA CAR Section 2', 'NAS-410 / ASTM E1417 / E1444'],
    flavor: 'an unusually wide industrial mix — heavy engineering, aerospace NDT, pharma equipment qualification, and refinery support', },
  'london':        { name: 'London',         country: 'UK',           iso: 'GB', lat: 51.5074,  lng: -0.1278,
    market: 'the corporate headquarters cluster for global IOCs',
    cluster: 'corporate HQs in the City and Canary Wharf, plus aerospace at Rolls-Royce / BAE and nuclear at Sellafield supply-chain',
    operators: ['BP (corporate)', 'Shell (corporate)', 'TotalEnergies UK', 'EDF Energy', 'National Grid', 'Rolls-Royce', 'BAE Systems', 'Sellafield Ltd supply-chain'],
    regulators: ['HSE', 'ONR', 'BINDT', 'CAA / EASA', 'MCA', 'RSSB'],
    codes: ['PSSR 2000', 'PUWER 1998', 'PCN GEN / IS / ECN', 'EN 13445', 'ONR SAP / TAG', 'EASA Part 145'],
    flavor: 'a single firm may serve UKCS offshore, EDF nuclear, Rolls-Royce aerospace, and Network Rail simultaneously', },
  'aberdeen':      { name: 'Aberdeen',       country: 'UK',           iso: 'GB', lat: 57.1497,  lng: -2.0943,
    market: 'the global capital of offshore decommissioning and life-extension',
    cluster: 'Aberdeen Harbour + Dyce heliport, supply bases for UKCS platforms and FPSOs, and onshore terminals',
    operators: ['Harbour Energy', 'BP North Sea', 'Shell UKCS', 'TotalEnergies E&P UK', 'NEO Energy', 'Ithaca Energy', 'EnQuest', 'Petrofac'],
    regulators: ['HSE (OSD)', 'OEUK', 'NSTA', 'OSPAR'],
    codes: ['SCR 2015', 'PFEER 1995', 'PSSR 2000', 'PCN GEN / IS', 'API 510 / 570 / 653'],
    flavor: 'late-life UKCS infrastructure plus decommissioning campaigns', },
  'calgary':       { name: 'Calgary',        country: 'Canada',       iso: 'CA', lat: 51.0447,  lng: -114.0719,
    market: 'the head-office hub for Canadian oil sands, conventional petroleum, and trans-continental pipelines',
    cluster: 'oil sands near Fort McMurray, conventional gas in Alberta / BC, plus Enbridge / TC Energy long-haul networks',
    operators: ['Suncor Energy', 'Cenovus Energy', 'CNRL', 'Imperial Oil', 'TC Energy / TransCanada', 'Enbridge', 'Pembina Pipeline', 'Husky / Cenovus refining'],
    regulators: ['ABSA', 'AER', 'CER', 'CSA Group', 'Transport Canada', 'CNSC'],
    codes: ['ABSA AB-506 / AB-512', 'CSA Z662', 'CSA B51', 'AER Directive 056 / 077', 'CGSB 48.9712'],
    flavor: 'extreme-cold field work, ABSA registration, and rotational FIFO crews to remote sites', },
  'lagos':         { name: 'Lagos',          country: 'Nigeria',      iso: 'NG', lat: 6.5244,   lng: 3.3792,
    market: 'Nigeria\'s commercial capital and regional hub for upstream / refining / LNG inspection',
    cluster: 'NNPCL refineries plus Dangote (Lekki), offshore deepwater (Bonga, Egina, Akpo), and NLNG Bonny Island',
    operators: ['NNPCL', 'Shell SPDC', 'Chevron Nigeria', 'TotalEnergies E&P Nigeria', 'Seplat-acquired ExxonMobil Nigeria', 'NLNG Bonny Island', 'Dangote Refinery (Lekki)', 'Seplat Energy'],
    regulators: ['NUPRC', 'NMDPRA', 'NAPIMS', 'NIMASA', 'NNRA', 'NCDMB'],
    codes: ['NUPRC Procedure Guidelines', 'NMDPRA Petroleum Industry Act', 'NIMASA Marine Notices', 'API 510 / 570 / 653', 'NCDMB Nigerian Content'],
    flavor: 'Niger Delta logistics, offshore deepwater mobilisations, and Dangote mega-refinery alongside legacy NNPCL turnarounds', },
  'perth':         { name: 'Perth',          country: 'Australia',    iso: 'AU', lat: -31.9505, lng: 115.8605,
    market: 'the LNG and iron-ore inspection capital of Australia',
    cluster: 'Karratha gas plant, Wheatstone & Pluto LNG, Ichthys onshore, Pilbara iron-ore, and Carnarvon FPSOs',
    operators: ['Woodside Energy', 'Chevron Australia (Wheatstone, Gorgon)', 'INPEX Ichthys', 'Santos (Barossa)', 'BHP', 'Rio Tinto Pilbara', 'Origin Energy LNG', 'Woodside Browse / Sunrise'],
    regulators: ['WorkSafe WA', 'NOPSEMA', 'DMIRS', 'ARPANSA', 'AMSA'],
    codes: ['AS/NZS 3788', 'AS/NZS 1554', 'AS 4037', 'NOPSEMA Offshore Safety Case', 'ISO 9712 / AS 3998'],
    flavor: 'FIFO rotations to remote Pilbara and offshore platforms', },

  // Tier 1 expansion cities used by combos.
  'jubail':        { name: 'Jubail',         country: 'Saudi Arabia', iso: 'SA', lat: 27.0046,  lng: 49.6469,
    market: 'the world\'s largest master-planned industrial city',
    cluster: 'Jubail Industrial City I & II, Aramco Jubail Refinery (SASREF / SADAF), SABIC affiliates, and Jubail-2 expansion',
    operators: ['SASREF', 'SADAF', 'Kemya', 'Petrokemya', 'Sharq', 'Saudi Kayan', 'SATORP', 'RC Jubail PMT'],
    regulators: ['Royal Commission for Jubail and Yanbu (RCJY)', 'HRSD', 'SASO', 'Aramco SAEP-1142', 'SABIC vendor approval'],
    codes: ['RCJY engineering standards', 'Aramco SAEP-1112 / 1142', 'SABIC ESS / SES', 'NACE TM0177 / TM0284'],
    flavor: 'the heaviest concentration of sour-gas-rated equipment and Aramco / SABIC shutdowns in the Kingdom', },
  'yanbu':         { name: 'Yanbu',          country: 'Saudi Arabia', iso: 'SA', lat: 24.0890,  lng: 38.0618,
    market: 'KSA\'s western refining and petrochemical hub',
    cluster: 'Yanbu Industrial City, YASREF (Aramco / Sinopec), Yanpet, Yansab, plus Petro Rabigh',
    operators: ['YASREF', 'Aramco Yanbu Refinery', 'Yanpet', 'Yansab', 'Petro Rabigh', 'RC Yanbu PMT', 'Saudi Electricity Yanbu', 'Yanbu Cement'],
    regulators: ['Royal Commission Yanbu (RCJY)', 'HRSD', 'SASO', 'Aramco SAEP-1142', 'Saudi Ports Authority'],
    codes: ['RCJY Yanbu engineering standards', 'Aramco SAEP-1142', 'SABIC ESS / SES', 'NACE TM0177'],
    flavor: 'mirror-site campaigns to Jubail plus East-West pipeline integrity and NEOM mobilisations', },
  'kuwait':        { name: 'Kuwait City',    country: 'Kuwait',       iso: 'KW', lat: 29.3759,  lng: 47.9774,
    market: 'a 4 million bbl/day producer concentrated in KOC upstream and KNPC / KIPIC downstream',
    cluster: 'Mina Al-Ahmadi and Mina Abdullah refineries, Al-Zour refinery and LNG terminal, Greater Burgan field',
    operators: ['Kuwait Oil Company (KOC)', 'KNPC', 'KIPIC (Al-Zour)', 'PIC', 'Equate', 'KAFCO', 'GPCA member firms', 'KGOC'],
    regulators: ['Public Authority for Industry (PAI)', 'Kuwait EPA', 'Kuwait Fire Force', 'KPC vendor approval', 'Ministry of Oil'],
    codes: ['KPC Vendor Quality Requirements (KPC-VQR)', 'KOC standards', 'KNPC SES', 'NACE TM0177'],
    flavor: 'KPC, KOC, KNPC and KIPIC each maintain separate but overlapping vendor lists', },
  'edmonton':      { name: 'Edmonton',       country: 'Canada',       iso: 'CA', lat: 53.5461,  lng: -113.4938,
    market: 'Canada\'s largest single-site refining and upgrading cluster',
    cluster: 'Alberta Industrial Heartland — Strathcona, Scotford, NWR Sturgeon refineries plus Inter Pipeline / Pembina petrochemicals',
    operators: ['Imperial Oil Strathcona', 'Suncor Edmonton refinery', 'Shell Scotford', 'NWR Sturgeon Refinery', 'Inter Pipeline HPC', 'Pembina Pipeline', 'Dow Fort Saskatchewan', 'Nutrien Redwater'],
    regulators: ['ABSA', 'AER', 'CER', 'CSA Group', 'Transport Canada', 'Alberta OHS'],
    codes: ['ABSA AB-506 / AB-512', 'CSA Z662', 'CSA B51', 'AER Directive 056 / 077', 'CGSB 48.9712'],
    flavor: 'Industrial Heartland turnarounds in -30°C cold and Fort McMurray oil sands rotations', },
};

// ─── Module short-form context for triple pages ─────────────────────────────
// Hand-curated module fragments so the triple page does not just bolt on the
// full module intro paragraph.
const MODULE_CTX = {
  'calibration-management': {
    short: 'Calibration management',
    label: 'Calibration Management',
    purpose: 'manages calibration intervals, certificates, traceability chains, and uncertainty budgets for measurement equipment',
    framework: 'ISO/IEC 17025:2017 plus ANSI/NCSL Z540',
    keyFeatures: [
      'Per-asset calibration interval per ISO 17025 §6.4.7',
      'Reference-standard traceability chain to NIST / NPL / PTB / NIM / NMIA',
      'Uncertainty budget builder per JCGM 100:2008 (GUM)',
      'ISO 17025 §7.8 compliant certificate generation with measurement results, environmental conditions, uncertainty, decision rule',
      'Customer asset register with in-house / customer-owned / loaner flags',
      'Out-of-tolerance handling per ISO 17025 §7.10 with customer notification and recall workflow',
      'Decision rule library — ILAC G8, ASME B89.7.3.1, customer-specific risk-of-false-accept',
    ],
  },
  'certification-tracking': {
    short: 'Certification & qualification tracking',
    label: 'Certification & Personnel Qualification',
    purpose: 'tracks every ASNT, ISO 9712, PCN, CSWIP, AWS CWI, NACE, BGAS, API ICP, ASNT Level III, and client-specific qualification across the workforce',
    framework: 'ASNT SNT-TC-1A / CP-189 / ACCP and ISO 9712 simultaneously, plus client-specific schemes',
    keyFeatures: [
      'Per-person credential register with scan and OCR of physical certificates',
      'Expiry-alert engine: dashboard plus email plus SMS at 180 / 90 / 60 / 30 / 7 day windows',
      'Method-specific scope (UT, RT, MT, PT, ET, VT, PAUT, TOFD, LRUT, ECA) per technician',
      'Client-specific written practice and qualification scheme mapping',
      'Vision acuity (Jaeger near vision + Ishihara color) tracking per ASNT requirements',
      'Per-job qualification matching: "find me 3 UT Level IIs with valid BOSIET available next week"',
      'Audit-ready PDF compliance package for any client / auditor in 30 seconds',
    ],
  },
  'asset-management': {
    short: 'Asset integrity register',
    label: 'Asset Integrity & Equipment Register',
    purpose: 'maintains the pressure vessel, piping circuit, storage tank, heat exchanger, pipeline, and rotating equipment register that anchors the integrity program',
    framework: 'API 510 / 570 / 653 / 571 / 580 / 581 plus ASME FFS-1 / API 579-1',
    keyFeatures: [
      'Hierarchical asset structure: site → unit → system → equipment → component → TML',
      'Damage mechanism library per API 571 (172 mechanisms) with screening and susceptibility scoring',
      'Integrity Operating Window (IOW) tracking with information / standard / critical alarm levels',
      'TML database with sketch, photograph, GPS, and historical readings',
      'Fitness-for-service screening per API 579-1 / ASME FFS-1 Level 1',
      'Drawing / P&ID / isometric attachment per equipment with markup overlay',
      'RBI risk score per circuit / equipment per API 581 (POF + COF on risk matrix)',
    ],
  },
  'audit-management': {
    short: 'Audit & compliance management',
    label: 'Audit & Compliance Management',
    purpose: 'runs internal, supplier, customer, and regulator audits against ISO 9001, ISO 17025, AS9100, API Q1 / Q2, customer specifications, and SAEP-1142 schemes',
    framework: 'ISO 19011 audit methodology plus scheme-specific accreditation rules',
    keyFeatures: [
      'Audit plan generation against any scheme (ISO 9001, 17025, 14001, 45001, AS9100, API Q1 / Q2)',
      'Audit checklist library with client-specific question banks',
      'Non-conformance routing with root-cause categorisation (5-why, Ishikawa, A3)',
      'CAPA workflow with effectiveness verification gate',
      'Management review pack auto-assembled from underlying data',
      'Surveillance audit calendar with auditor qualification tracking',
      'Findings trending and recurring-issue heatmap by clause / process / site',
    ],
  },
  'work-order-management': {
    short: 'Work order & job management',
    label: 'Work Order & Job Management',
    purpose: 'orchestrates end-to-end job lifecycle from quote through work order, resource assignment, field execution, report, and invoice',
    framework: 'customer / contract / project / job / work order / line item billing structure aligned to operator portal flow-downs',
    keyFeatures: [
      'Quote → Work Order → Project hierarchy with parent-child relationships',
      'Resource assignment: technicians, equipment, vehicles, sub-contractors, accommodation',
      'Field-app job execution: clock-in, GPS check-in, photo capture, supervisor sign-off',
      'Per-line scope capture: method, asset, code, acceptance criteria, sample size, deliverable',
      'Mobilisation / demobilisation crew planning for FIFO / rotational projects',
      'Customer-specific report template engine with operator-portal upload',
      'Real-time budget vs actual with margin protection by line item',
    ],
  },
  'inspection-scheduling': {
    short: 'Inspection scheduling',
    label: 'Inspection Scheduling',
    purpose: 'computes statutory and code-driven inspection intervals, dispatches qualified crews against equipment / circuits / tanks / piping, and surfaces upcoming work',
    framework: 'API 510 / 570 / 653 interval calculation plus client-specific risk-based intervals per API 581',
    keyFeatures: [
      'Statutory interval calculator per API 510 / 570 / 653 with remaining-life override',
      'Risk-based interval per API 581 with POF-driven advance / extend logic',
      'Crew assignment by qualification matrix (method, level, client-specific scheme)',
      'Equipment-availability and PSV / heat-exchanger inspection-window coordination',
      'Hold-point witness scheduling for client surveillance team',
      'Auto-generated turnaround scope packages with daily ramp-up of inspection hours',
      'Recall workflow when out-of-interval inspection is identified',
    ],
  },
  'corrosion-tracking': {
    short: 'Corrosion tracking and RBI',
    label: 'Corrosion Tracking & RBI',
    purpose: 'computes corrosion rates, projects remaining life, screens damage mechanisms, and produces risk-based inspection plans per API 581',
    framework: 'API 510 / 570 / 653 / 571 / 580 / 581 corrosion and integrity methodology',
    keyFeatures: [
      'Per-TML corrosion rate (short-term and long-term) per API methodology',
      'Wall-thickness projection with t-min, t-required, retirement-date forecasting',
      'Damage mechanism screening per API 571 with susceptibility scoring',
      'RBI per API 581: POF (damage factor) + COF (financial / safety / environmental)',
      'RBI risk-matrix dashboard with equipment ranking by risk score',
      'Integration with ILI / dig-verification data for buried-pipeline corrosion',
      'NACE-aligned corrosion-monitoring (coupons, ER probes, LPR) data integration',
    ],
  },
  'quality-management': {
    short: 'Quality management',
    label: 'Quality Management System',
    purpose: 'orchestrates the QMS — document control, training records, non-conformance, CAPA, internal audit, management review, and customer satisfaction',
    framework: 'ISO 9001:2015 plus AS9100D, ISO/IEC 17025, API Q1 / Q2 layered as applicable',
    keyFeatures: [
      'Process map with cross-references to QMS procedures',
      'Document register with revision control and read-and-understood acknowledgement',
      'Training matrix with competency expiry and refresher scheduling',
      'Non-conformance / CAPA workflow with root-cause categorisation',
      'Customer complaint and feedback log with trend analysis',
      'Internal audit programme with finding closure tracking',
      'Management review template aggregating QMS KPIs in one pack',
    ],
  },
  'project-management':    {
    short: 'Project management',
    label: 'Project Management',
    purpose: 'plans, schedules, and tracks inspection-led projects with WBS, milestones, deliverable register, change control, and earned-value reporting',
    framework: 'PMBOK / PRINCE2 mapped onto inspection-services project rhythms',
    keyFeatures: [
      'WBS with deliverable register and acceptance-criteria mapping',
      'Schedule with critical path and milestone hold-point integration',
      'Risk register with quantitative impact / probability scoring',
      'Change-control workflow with customer-side approval gate',
      'Earned-value reporting (PV, EV, AC, SPI, CPI)',
      'Project resource histogram (technicians, equipment, sub-contractors)',
      'Closeout dossier (PCD) auto-assembly with hand-over checklist',
    ],
  },
  'document-control':      {
    short: 'Document control',
    label: 'Document Control',
    purpose: 'maintains the controlled-document library — procedures, work instructions, forms, customer specifications, codes, and standards — with revision history and distribution tracking',
    framework: 'ISO 9001:2015 §7.5 and ISO 17025:2017 §8.3 controlled-document requirements',
    keyFeatures: [
      'Controlled-document register with version, status, review date, owner',
      'Read-and-understood acknowledgement per document per user',
      'Customer specification linkage to internal procedure cross-reference',
      'Code / standard subscription tracking (API, ASME, ISO, NACE editions)',
      'Distribution list with electronic / paper hard-copy reconciliation',
      'External-document register for customer-provided specifications',
      'Audit-ready document-change history with rationale and approvers',
    ],
  },
};

// ─── Industry context (short for triple pages) ──────────────────────────────
const INDUSTRY_CTX = {
  'calibration-laboratories': {
    short: 'calibration laboratory',
    lens: 'ISO/IEC 17025-accredited calibration laboratories operate as customer-instrument processing factories — sample receipt, environmental conditioning, calibration, technical review, certificate dispatch, and dispute handling all within tight customer SLAs',
    flavour: 'an ISO 17025 finding-of-fact can cost accreditation; a missed customer SLA can cost the contract',
    typicalClient: 'multi-discipline calibration laboratory',
  },
  'ndt-inspection-companies': {
    short: 'NDT inspection company',
    lens: 'NDT inspection contractors manage rotating technician pools across multiple job sites with expiring credentials, client-specific report formats, and code-driven inspection intervals — all simultaneously, often in 12-hour shift patterns',
    flavour: 'a single expired ASNT or ISO 9712 certificate on the wrong job can cost the contract and damage the relationship with a major operator',
    typicalClient: 'mid-size NDT inspection contractor',
  },
  'pipeline-integrity-services': {
    short: 'pipeline integrity service provider',
    lens: 'pipeline integrity service providers aggregate ILI vendor data (MFL, UT, EMAT, caliper), dig verification campaigns, RBI assessments per API 581, and statutory submissions per API 1163 / 1160 across long-haul transmission networks',
    flavour: 'a missed API 1163 vendor-qualification deliverable invalidates the ILI run that paid for the campaign',
    typicalClient: 'pipeline integrity service provider supporting 800+ km of operator network',
  },
  'aerospace-quality-control': {
    short: 'aerospace QA / MRO',
    lens: 'aerospace QC and MRO firms operate under NAS-410 personnel qualification, AS9100D quality systems, FAA / EASA Part 145 oversight, and customer-specific specifications (Boeing, Airbus, Bombardier, Rolls-Royce) with zero tolerance for documentation gaps',
    flavour: 'an audit finding that closes a Part 145 approval costs months of regulator dialogue to recover from',
    typicalClient: 'NAS-410 NDT shop or AS9100D-certified MRO facility',
  },
  'oilfield-services': {
    short: 'oilfield services contractor',
    lens: 'oilfield services and wellsite inspection contractors manage rig and BOP test schedules, OCTG per-joint records, field-ticket capture, and HSE certification renewals (BOSIET / HUET / H2S Alive / IADC RigPass) across rotating crews and remote pads',
    flavour: 'a non-qualified technician mobilised to a sour-gas wellsite is a contract-ending event',
    typicalClient: 'multi-pad oilfield services contractor supporting drilling and completions',
  },
  'welding-fabrication-shops': {
    short: 'welding and fabrication shop',
    lens: 'welding and fabrication shops manage WPS / PQR / WPQ libraries, ASME and AWS stamp compliance, customer flow-down clauses, and welder continuity records — every variable change risks a re-qualification campaign',
    flavour: 'a welder continuity lapse mid-job invalidates production welds back to the last qualification check',
    typicalClient: 'pressure-vessel or structural-steel fabricator',
  },
};

// ─── Combos (top 50 high-intent) ────────────────────────────────────────────
const COMBOS = [
  // calibration-management × calibration-laboratories × 5 cities
  ['calibration-management', 'calibration-laboratories', 'singapore'],
  ['calibration-management', 'calibration-laboratories', 'dubai'],
  ['calibration-management', 'calibration-laboratories', 'mumbai'],
  ['calibration-management', 'calibration-laboratories', 'london'],
  ['calibration-management', 'calibration-laboratories', 'houston'],

  // certification-tracking × ndt-inspection-companies × 6 cities
  ['certification-tracking', 'ndt-inspection-companies', 'houston'],
  ['certification-tracking', 'ndt-inspection-companies', 'dubai'],
  ['certification-tracking', 'ndt-inspection-companies', 'saudi-arabia'],
  ['certification-tracking', 'ndt-inspection-companies', 'mumbai'],
  ['certification-tracking', 'ndt-inspection-companies', 'singapore'],
  ['certification-tracking', 'ndt-inspection-companies', 'hyderabad'],

  // asset-management × pipeline-integrity-services × 5 cities
  ['asset-management', 'pipeline-integrity-services', 'houston'],
  ['asset-management', 'pipeline-integrity-services', 'calgary'],
  ['asset-management', 'pipeline-integrity-services', 'edmonton'],
  ['asset-management', 'pipeline-integrity-services', 'saudi-arabia'],
  ['asset-management', 'pipeline-integrity-services', 'lagos'],

  // audit-management × aerospace-quality-control × 5 cities
  ['audit-management', 'aerospace-quality-control', 'houston'],
  ['audit-management', 'aerospace-quality-control', 'london'],
  ['audit-management', 'aerospace-quality-control', 'hyderabad'],
  ['audit-management', 'aerospace-quality-control', 'perth'],
  ['audit-management', 'aerospace-quality-control', 'singapore'],

  // work-order-management × ndt-inspection-companies × 6 cities
  ['work-order-management', 'ndt-inspection-companies', 'houston'],
  ['work-order-management', 'ndt-inspection-companies', 'dubai'],
  ['work-order-management', 'ndt-inspection-companies', 'saudi-arabia'],
  ['work-order-management', 'ndt-inspection-companies', 'singapore'],
  ['work-order-management', 'ndt-inspection-companies', 'jubail'],
  ['work-order-management', 'ndt-inspection-companies', 'yanbu'],

  // inspection-scheduling × pipeline-integrity-services × 5 cities
  ['inspection-scheduling', 'pipeline-integrity-services', 'houston'],
  ['inspection-scheduling', 'pipeline-integrity-services', 'calgary'],
  ['inspection-scheduling', 'pipeline-integrity-services', 'edmonton'],
  ['inspection-scheduling', 'pipeline-integrity-services', 'lagos'],
  ['inspection-scheduling', 'pipeline-integrity-services', 'port-harcourt'],

  // corrosion-tracking × oilfield-services × 5 cities
  ['corrosion-tracking', 'oilfield-services', 'houston'],
  ['corrosion-tracking', 'oilfield-services', 'calgary'],
  ['corrosion-tracking', 'oilfield-services', 'saudi-arabia'],
  ['corrosion-tracking', 'oilfield-services', 'kuwait'],
  ['corrosion-tracking', 'oilfield-services', 'jubail'],

  // quality-management × welding-fabrication-shops × 5 cities
  ['quality-management', 'welding-fabrication-shops', 'houston'],
  ['quality-management', 'welding-fabrication-shops', 'mumbai'],
  ['quality-management', 'welding-fabrication-shops', 'singapore'],
  ['quality-management', 'welding-fabrication-shops', 'calgary'],
  ['quality-management', 'welding-fabrication-shops', 'jubail'],

  // project-management × pipeline-integrity-services × 5 cities
  ['project-management', 'pipeline-integrity-services', 'houston'],
  ['project-management', 'pipeline-integrity-services', 'calgary'],
  ['project-management', 'pipeline-integrity-services', 'lagos'],
  ['project-management', 'pipeline-integrity-services', 'port-harcourt'],
  ['project-management', 'pipeline-integrity-services', 'edmonton'],

  // document-control × calibration-laboratories × 5 cities
  ['document-control', 'calibration-laboratories', 'singapore'],
  ['document-control', 'calibration-laboratories', 'mumbai'],
  ['document-control', 'calibration-laboratories', 'london'],
  ['document-control', 'calibration-laboratories', 'dubai'],
  ['document-control', 'calibration-laboratories', 'houston'],
];

// Ensure port-harcourt exists (used by some combos) — supply context lazily.
if (!CITY_CTX['port-harcourt']) {
  CITY_CTX['port-harcourt'] = {
    name: 'Port Harcourt', country: 'Nigeria', iso: 'NG', lat: 4.8156, lng: 7.0498,
    market: 'Nigeria\'s upstream-and-refining capital in the Niger Delta',
    cluster: 'NNPCL PHRC, Eleme Petrochemical, Onne Oil & Gas Free Zone, plus Shell SPDC onshore and NLNG Bonny adjacent',
    operators: ['NNPCL PHRC', 'Shell SPDC', 'Eni AGIP', 'TotalEnergies E&P Nigeria onshore', 'Seplat / Aiteo / Heritage indigenous', 'NLNG Bonny Island', 'Eleme Petrochemical (Indorama)', 'Notore Chemical'],
    regulators: ['NUPRC', 'NMDPRA', 'NAPIMS', 'NIMASA', 'NCDMB', 'Rivers State Ministry of Environment'],
    codes: ['NUPRC Procedure Guidelines', 'NMDPRA Petroleum Industry Act', 'NCDMB NOGICD Act', 'API 510 / 570 / 653'],
    flavor: 'extreme onshore-logistics, NOGICD local-content thresholds, and legacy-asset divestment to indigenous operators',
  };
}

// ─── Page builder ────────────────────────────────────────────────────────────
function build(moduleSlug, industrySlug, citySlug) {
  const m = MODULE_BY_SLUG[moduleSlug];
  const i = INDUSTRY_BY_SLUG[industrySlug];
  const c = CITY_CTX[citySlug];
  const mctx = MODULE_CTX[moduleSlug];
  const ictx = INDUSTRY_CTX[industrySlug];
  if (!m || !i || !c || !mctx || !ictx) {
    throw new Error(`Missing data for combo ${moduleSlug} × ${industrySlug} × ${citySlug}`);
  }

  const slug = `${moduleSlug}-${industrySlug}-${citySlug}`;
  const title = `${mctx.label} Software for ${i.name} in ${c.name}`;

  const desc =
    `${mctx.label} ERP module for ${ictx.short}s in ${c.name}, ${c.country}. ` +
    `Aligned to ${mctx.framework}, with operator flow-down for ${c.operators.slice(0, 2).join(' and ')} and ${c.regulators.slice(0, 2).join(' / ')} compliance support. ` +
    `Demo: info@atlantisndt.com.`;

  const introPara1 =
    `${i.name} operating in ${c.name}, ${c.country} face a specific combination of local market structure, ` +
    `regulator framework, and operator quality flow-down that generic ERP systems cannot model — and that combination shapes how ${mctx.short.toLowerCase()} actually has to work on the ground. ` +
    `${c.name} sits at the heart of ${c.market}. ` +
    `The dominant industrial cluster — ${c.cluster} — sets the rhythm: ${c.flavor}.`;

  const introPara2 =
    `${ictx.lens}. ` +
    `For a ${ictx.typicalClient} in ${c.name}, ${mctx.short.toLowerCase()} is not a back-office activity — it is the operational spine that determines audit outcomes, contract eligibility, and project margin. ` +
    `${ictx.flavour}. ` +
    `Atlantis NDT ERP's ${mctx.label.toLowerCase()} module ${mctx.purpose}, aligned to ${mctx.framework}. ` +
    `For ${i.name.toLowerCase()} based in ${c.name}, that means a single live system of record that knows the market, not a generic accounting tool bolted to a spreadsheet of inspection records.`;

  const introPara3 =
    `Configured for ${c.name}, the module pre-loads operator flow-down clauses from ${c.operators.slice(0, 4).join(', ')}, ` +
    `compliance templates against ${c.codes.slice(0, 4).join(', ')}, ` +
    `and the audit frameworks that ${c.regulators.slice(0, 3).join(', ')} actually use. ` +
    `Field-data capture is offline-capable for ${c.name} project sites, multi-language reporting supports ${c.country}-required document formats, ` +
    `and the platform is delivered as multi-tenant SaaS with regional data residency — a 5-person ${c.name} ${ictx.short} and a 200-person multinational both run on the same configuration baseline.`;

  // Features — combine module keyFeatures with city + industry overlays.
  const features = [
    ...mctx.keyFeatures.slice(0, 7),
    `${c.name} operator-specific flow-down pre-loaded for ${c.operators.slice(0, 3).join(', ')}`,
    `${c.name} regulator compliance dashboard for ${c.regulators.slice(0, 3).join(', ')}`,
    `${ictx.short[0].toUpperCase() + ictx.short.slice(1)}-specific report templates and acceptance criteria for ${i.name.toLowerCase()} workflows`,
    `Bilingual (English + ${c.country}-relevant local language) document handling for ${c.name} authority submission`,
  ];

  const operators = c.operators.slice(0, 8);
  const regulators = [...c.regulators, ...c.codes].slice(0, 8);

  // Pain points — unique to (module × industry × city).
  const painPoints = [
    `${mctx.short} for ${ictx.short}s in ${c.name} tracked in spreadsheets — always behind operator-portal updates from ${c.operators[0]} and ${c.operators[1]}`,
    `${c.regulators[0]} audit preparation for ${mctx.short.toLowerCase()} workflows takes 80+ hours per cycle and finds gaps too late to remediate`,
    `Operator flow-down from ${c.operators[0]} updates monthly — internal ${mctx.short.toLowerCase()} procedures lag by weeks, putting ${i.name.toLowerCase()} contracts at risk`,
    `Customer-format ${mctx.short.toLowerCase()} reports for ${c.operators.slice(0, 3).join(', ')} require manual reformatting on every submission — margin-eating rework`,
  ];

  // Use cases — pull module / industry templates and weave in city operators.
  const op1 = c.operators[0];
  const op2 = c.operators[1] || op1;
  const op3 = c.operators[2] || op1;
  const useCases = [
    `A mid-size ${c.name} ${ictx.short} deploys ${mctx.label.toLowerCase()} against ${op1} and ${op2} contracts. Within 90 days the team reports a 60–80% reduction in admin time and zero audit findings on the next ${c.regulators[0]} surveillance visit.`,
    `A ${c.name}-based ${ictx.typicalClient} integrates ${mctx.label.toLowerCase()} with ${op3} operator-portal flow-down. Operator specification revisions automatically flag affected internal procedures for review — eliminating the "we missed a revision" failure mode that previously cost contracts.`,
    `A growing ${ictx.short} in ${c.name} consolidates ${mctx.label.toLowerCase()} across ${i.name.toLowerCase()} project sites in the ${c.country} market. Customer-format reports flow to ${op1} portals automatically and report turnaround drops from 5 days to under 24 hours.`,
    `An audit-driven ${c.name} ${ictx.short} uses ${mctx.label.toLowerCase()} to pass ${c.regulators[0]} and ${c.regulators[1]} cycle audits with zero findings — evidence packages assemble in 30 seconds vs. the 80-hour manual prep that previously dominated audit week.`,
  ];

  // FAQs — combine industry-specific FAQs with triple-cross specific FAQs.
  const baseModuleFaqs = (m.faqs || []).slice(0, 1);
  const tripleFaqs = [
    [
      `Is ${mctx.label} configured for ${i.name.toLowerCase()} operating in ${c.name}?`,
      `Yes. The ${mctx.label.toLowerCase()} module is pre-loaded with the codes and operator flow-downs that ${i.name.toLowerCase()} in ${c.name} work with daily: ${c.codes.slice(0, 4).join(', ')}, plus operator-specific quality clauses from ${c.operators.slice(0, 4).join(', ')}. The module is aligned to ${mctx.framework}. Configuration is done — your ${ictx.short} team is productive on day one, not after six months of customisation.`,
    ],
    [
      `Which ${c.name} regulators does the ${mctx.short.toLowerCase()} workflow align with?`,
      `The compliance dashboard maps to ${c.regulators.join(', ')}. Statutory inspection-interval calculation, document-format generation, and audit-ready evidence-pack assembly are all built around these authorities. For ${ictx.short}s, that means ${c.flavor}.`,
    ],
    [
      `Can ${ictx.short}s in ${c.name} integrate with operator-specific portals such as ${c.operators[0]}?`,
      `Yes. The platform supports vendor-portal flow with major ${c.country} operators including ${c.operators.slice(0, 4).join(', ')}. Operator-specific quality clauses are imported as controlled documents; internal ${mctx.short.toLowerCase()} procedures that implement those clauses are cross-referenced; revision changes flag affected internal documents for review. Where vendor portals expose APIs, bi-directional sync keeps customer and internal records aligned.`,
    ],
    [
      `What languages and currencies does the ${c.name} deployment support?`,
      `English is primary across the platform; ${c.country}-relevant languages (Arabic in the Gulf, Bahasa Indonesia, Hindi / Marathi / Telugu in India, Mandarin in China and Singapore, Portuguese / Spanish in the Americas, French in West Africa and Canada) are supported for customer-facing documents and field-app translations. Invoicing supports USD, EUR, GBP, AED, SAR, INR, SGD, AUD, CAD, IDR, MYR, QAR, NGN, BRL, MXN, KWD, OMR — full multi-currency with VAT / GST as applicable for ${c.country}.`,
    ],
    ...baseModuleFaqs,
  ];

  return {
    moduleSlug, industrySlug, citySlug,
    moduleName: mctx.label,
    industryName: i.name,
    cityName: c.name,
    countryName: c.country,
    isoCountry: c.iso,
    lat: c.lat, lng: c.lng,
    title,
    desc,
    introPara1,
    introPara2,
    introPara3,
    features,
    operators,
    regulators,
    painPoints,
    useCases,
    faqs: tripleFaqs,
    pageSlug: slug,
  };
}

// ─── Emit files ──────────────────────────────────────────────────────────────
const outDir = join(ROOT, 'src/pages/erp');
mkdirSync(outDir, { recursive: true });

const allCombos = [];
let written = 0;
for (const [mSlug, iSlug, cSlug] of COMBOS) {
  const data = build(mSlug, iSlug, cSlug);
  const fname = join(outDir, `${data.pageSlug}.tsx`);
  const idSafe = data.pageSlug.replace(/-/g, '_');
  // Strip helper fields the component does not need.
  const { pageSlug, ...props } = data;
  const content =
    `import ErpTripleCrossPage, { ErpTripleCrossProps } from '@/components/ErpTripleCrossPage';\n` +
    `const data: ErpTripleCrossProps = ${JSON.stringify(props, null, 2)} as ErpTripleCrossProps;\n` +
    `export default function ErpTriple_${idSafe}() { return <ErpTripleCrossPage {...data} />; }\n`;
  writeFileSync(fname, content);
  allCombos.push({
    slug: pageSlug,
    moduleSlug: mSlug, industrySlug: iSlug, citySlug: cSlug,
    title: `${data.title} | Atlantis NDT ERP`,
    desc: data.desc,
    bodyH1: data.title,
    bodyText: data.introPara1.slice(0, 480),
  });
  written++;
}

console.log(`✓ ${written} module × industry × city pages written`);

// ── Patch files ─────────────────────────────────────────────────────────────
const lazy = allCombos
  .map(c => `const ErpTriple_${c.slug.replace(/-/g, '_')} = lazy(() => import("./pages/erp/${c.slug}"));`)
  .join('\n');
const routes = allCombos
  .map(c => `                  <Route path="/erp/${c.slug}" element={<LazyRoute Component={ErpTriple_${c.slug.replace(/-/g, '_')}} />} />`)
  .join('\n');

writeFileSync(join(__dirname, '_tier1-triple-lazy.txt'), lazy + '\n');
writeFileSync(join(__dirname, '_tier1-triple-routes.txt'), routes + '\n');

const prerenderEntries = allCombos.map(c => ({
  path: `/erp/${c.slug}`,
  title: c.title,
  description: c.desc,
  bodyH1: c.bodyH1,
  bodyText: c.bodyText,
}));
writeFileSync(join(__dirname, '_tier1-triple-prerender.json'), JSON.stringify(prerenderEntries, null, 2));

console.log(`✓ Tier 1 triple patch files written:`);
console.log(`  scripts/_tier1-triple-lazy.txt (${allCombos.length} lazy imports)`);
console.log(`  scripts/_tier1-triple-routes.txt (${allCombos.length} routes)`);
console.log(`  scripts/_tier1-triple-prerender.json (${allCombos.length} entries)`);
