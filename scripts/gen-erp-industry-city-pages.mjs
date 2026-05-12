// Generate Industry × City ERP cross-product pages.
// For each (industry, city) in the top 15 city list, emit a TSX stub at
// src/pages/erp-industries/{industry}-{city}.tsx using ErpIndustryCityPage.
// 12 industries × 15 cities = 180 pages.
// Patch files only — DO NOT touch App.tsx or scripts/prerender.mjs directly.

import { readFileSync, writeFileSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const DATA = JSON.parse(readFileSync(join(__dirname, 'gen-erp-data.json'), 'utf-8'));

// ─── Top 15 cities (Sprint 5 scope) ──────────────────────────────────────────
const CITIES = [
  { slug: 'houston',       name: 'Houston',       country: 'USA',          iso: 'US', lat: 29.7604,  lng: -95.3698  },
  { slug: 'dubai',         name: 'Dubai',         country: 'UAE',          iso: 'AE', lat: 25.2048,  lng: 55.2708   },
  { slug: 'abu-dhabi',     name: 'Abu Dhabi',     country: 'UAE',          iso: 'AE', lat: 24.4539,  lng: 54.3773   },
  { slug: 'saudi-arabia',  name: 'Saudi Arabia',  country: 'Saudi Arabia', iso: 'SA', lat: 23.8859,  lng: 45.0792   },
  { slug: 'singapore',     name: 'Singapore',     country: 'Singapore',    iso: 'SG', lat: 1.3521,   lng: 103.8198  },
  { slug: 'mumbai',        name: 'Mumbai',        country: 'India',        iso: 'IN', lat: 19.0760,  lng: 72.8777   },
  { slug: 'hyderabad',     name: 'Hyderabad',     country: 'India',        iso: 'IN', lat: 17.3850,  lng: 78.4867   },
  { slug: 'london',        name: 'London',        country: 'UK',           iso: 'GB', lat: 51.5074,  lng: -0.1278   },
  { slug: 'aberdeen',      name: 'Aberdeen',      country: 'UK',           iso: 'GB', lat: 57.1497,  lng: -2.0943   },
  { slug: 'calgary',       name: 'Calgary',       country: 'Canada',       iso: 'CA', lat: 51.0447,  lng: -114.0719 },
  { slug: 'perth',         name: 'Perth',         country: 'Australia',    iso: 'AU', lat: -31.9505, lng: 115.8605  },
  { slug: 'doha',          name: 'Doha',          country: 'Qatar',        iso: 'QA', lat: 25.2854,  lng: 51.5310   },
  { slug: 'kuala-lumpur',  name: 'Kuala Lumpur',  country: 'Malaysia',     iso: 'MY', lat: 3.1390,   lng: 101.6869  },
  { slug: 'jakarta',       name: 'Jakarta',       country: 'Indonesia',    iso: 'ID', lat: -6.2088,  lng: 106.8456  },
  { slug: 'lagos',         name: 'Lagos',         country: 'Nigeria',      iso: 'NG', lat: 6.5244,   lng: 3.3792    },
];

// ─── City local-context lookup tables ───────────────────────────────────────
// Used to assemble unique intro paragraphs, operator lists, regulators, and
// use-case bullets per (industry, city). Each city has multiple slots so the
// generated content is genuinely different between pages.

const CITY_CTX = {
  'houston': {
    region: 'the Texas Gulf Coast energy corridor',
    market: 'the energy capital of the world with 4,600+ energy-related firms and the densest concentration of refining and petrochemical capacity in the western hemisphere',
    cluster: 'a 400-mile Gulf Coast refining and petrochemical complex stretching from Corpus Christi through Beaumont and Lake Charles',
    bodies: 'TCEQ, OSHA Region 6, USCG District 8, Texas Railroad Commission, EPA Region 6, Texas DSHS Radiation Control',
    operators: ['ExxonMobil Baytown', 'Marathon Galveston Bay', 'LyondellBasell Channelview', 'Valero Houston / Texas City', 'Phillips 66 Sweeny', 'Shell Deer Park', 'Chevron Phillips Cedar Bayou', 'INEOS Chocolate Bayou'],
    codes: ['API 510 / 570 / 653', 'ASME B31.3 / B31.4 / B31.8', 'ASME Section VIII Div 1', 'OSHA 29 CFR 1910.119 (PSM)', 'TCEQ 30 TAC Chapter 116', 'DOT PHMSA 49 CFR 192 / 195', 'USCG NVIC 03-07'],
    flavor: 'Houston turnarounds compress 9 months of work into 30 days — inspection backlogs eat margin and FRA findings stop production',
    seasonality: 'spring and fall turnaround seasons with overlapping refinery shutdowns and hurricane-season readiness audits',
    keyClient: 'ExxonMobil Baytown',
    keyCode: 'OSHA PSM',
  },
  'dubai': {
    region: 'the lower Gulf and northern emirates',
    market: 'the regional commercial and logistics hub for GCC oil and gas, hosting regional HQs for IOCs, EPCs, and inspection multinationals',
    cluster: 'a Jebel Ali free zone industrial hub connected to ADNOC Distribution, ENOC, DUBAL, and northern emirate fabricators',
    bodies: 'ADQCC, MOIAT, ADM, UAE FANR (radiation), Dubai Civil Defence, DEWA HSE',
    operators: ['ADNOC Distribution', 'ENOC Group', 'DUBAL / Emirates Global Aluminium', 'DEWA (Dubai Electricity & Water)', 'Dragon Oil', 'Emirates Steel', 'Borouge marketing arm', 'Dubai Petroleum'],
    codes: ['ADQCC inspection schemes', 'ADNOC ACS-01 (vendor)', 'ASME Section V / VIII', 'API 510 / 570 / 653', 'ISO 9712 (NDT certification)', 'IMO MARPOL (Jebel Ali port)', 'UAE FANR ionising-radiation regulations'],
    flavor: 'Dubai inspection businesses serve both downstream and northern-emirate fabrication while staffing project mobilisations into KSA, Oman, and Iraq from Dubai HQ',
    seasonality: 'winter project peak (Oct–Apr) with major shutdowns scheduled before Ramadan',
    keyClient: 'ENOC',
    keyCode: 'ADNOC ACS-01',
  },
  'abu-dhabi': {
    region: 'the western region of the United Arab Emirates',
    market: 'the operational heart of UAE upstream and downstream, controlling 94% of UAE oil reserves through ADNOC and the Ruwais integrated complex',
    cluster: 'the Ruwais industrial corridor (refining, LNG, petrochemicals, fertilizers) plus Habshan / Asab / Bab onshore and Das / Zirku offshore',
    bodies: 'ADNOC HSE & Asset Integrity, ADQCC, Federal NCEMA, UAE FANR, Abu Dhabi Department of Energy',
    operators: ['ADNOC Onshore', 'ADNOC LNG', 'Borouge', 'Fertil (ADNOC fertilizers)', 'TAQA (Abu Dhabi National Energy Co.)', 'ADNOC Refining', 'ADNOC Gas Processing', 'ADNOC Sour Gas'],
    codes: ['ADNOC ACS-01 (vendor qualification)', 'ADNOC HSE-IM-RP', 'API 510 / 570 / 653', 'ASME Section VIII Div 1 / 2', 'ISO 9712 (NDT)', 'NACE / AMPP corrosion standards', 'ASME B31.3 / B31.8 (piping & pipeline)'],
    flavor: 'Abu Dhabi inspection firms operate under one of the most demanding vendor-qualification regimes in the world — ACS-01 compliance is binary for ADNOC contract eligibility',
    seasonality: 'continuous Ruwais turnaround cycles plus offshore brownfield modifications scheduled around summer-temperature avoidance',
    keyClient: 'ADNOC Onshore',
    keyCode: 'ACS-01',
  },
  'saudi-arabia': {
    region: 'the Kingdom of Saudi Arabia, including the Eastern Province, Jubail, Yanbu, and Red Sea corridors',
    market: 'the largest integrated oil and gas operating environment in the world, anchored by Saudi Aramco and SABIC',
    cluster: 'the Eastern Province upstream-and-downstream complex (Abqaiq, Khurais, Ras Tanura, Jubail) plus Yanbu on the Red Sea',
    bodies: 'HRSD (labor), GAMI (defense / industries), SASO (standards), Saudi Aramco SAEP-1112 / SAEP-1142 vendor qualification, SABIC vendor approval, NSC (cybersecurity)',
    operators: ['Saudi Aramco (Abqaiq, Khurais, Ras Tanura)', 'SABIC', 'Ma\'aden (mining & metals)', 'SADAF / KEMYA / Yanpet (JVs)', 'Petro Rabigh', 'Saudi Kayan', 'Yansab', 'Jubail Industrial City operators'],
    codes: ['Saudi Aramco SAEP-1112 (NDT personnel)', 'Saudi Aramco SAEP-1142 (NDT qualification)', 'Saudi Aramco SAEC-1142 (procedures)', 'SAES-H / SAES-W / SAES-L (engineering)', 'API 510 / 570 / 653', 'ASME Section V / VIII / IX', 'SASO QM 31 (quality)'],
    flavor: 'KSA inspection contractors live and die by Aramco vendor qualification — SAEP-1112 / 1142 currency, multi-language documentation, and on-site Iqama / Saudization compliance are non-negotiable',
    seasonality: 'continuous mega-project execution with Hajj season planning and summer 50°C heat advisories',
    keyClient: 'Saudi Aramco',
    keyCode: 'SAEP-1142',
  },
  'singapore': {
    region: 'the Singapore Strait and Jurong Island industrial corridor',
    market: 'one of the world\'s top three refining and petrochemical hubs, the marine-survey gateway for South-East Asia, and a major FPSO conversion centre',
    cluster: 'Jurong Island (refining, petrochemicals, gas), Tuas (shipyards), Pulau Bukom (Shell refinery), and the FPSO conversion yards at Sembcorp / Keppel',
    bodies: 'Ministry of Manpower (MOM), National Environment Agency (NEA), Maritime & Port Authority (MPA), Singapore Civil Defence Force, EDB, SCDF radiation licensing',
    operators: ['ExxonMobil Jurong', 'Shell Pulau Bukom', 'Vopak Sebarok / Banyan / Penjuru', 'Sembcorp (refining + marine)', 'Keppel FPSO / Offshore & Marine', 'MODEC Asia', 'PetroChina International Singapore', 'Chevron Singapore'],
    codes: ['MOM Workplace Safety & Health Act', 'MOM WSH Regulations (Pressure Vessels)', 'API 510 / 570 / 653', 'ASME Section V / VIII', 'IMO MARPOL / SOLAS (port state control)', 'IMCA D-018 (subsea inspection)', 'ISO 9712 (NDT certification)'],
    flavor: 'Singapore inspection companies juggle short shutdown windows, MOM authorised-examiner requirements, and FPSO conversion campaigns running 24/7',
    seasonality: 'tropical year-round operations with monsoon-period offshore mobilisation constraints',
    keyClient: 'ExxonMobil Jurong',
    keyCode: 'MOM WSH',
  },
  'mumbai': {
    region: 'the western Indian industrial corridor (Maharashtra and Gujarat)',
    market: 'India\'s western refining, offshore production, and petrochemicals hub with the country\'s largest concentration of inspection demand',
    cluster: 'BPCL Mahul, HPCL Mumbai, ONGC Western Offshore (Bombay High), Reliance Hazira and Jamnagar, Tata Power Trombay',
    bodies: 'PESO (petroleum & explosives safety), OISD (oil industry safety), DGMS (mines safety), Maharashtra Pollution Control Board, BARC (radiation), AERB',
    operators: ['BPCL Mahul refinery', 'HPCL Mumbai refinery', 'ONGC Western Offshore (Bombay High)', 'Reliance Industries (Hazira / Patalganga)', 'Indian Oil Corporation', 'Tata Power Trombay', 'GAIL western network', 'L&T Hydrocarbon Engineering'],
    codes: ['OISD-STD-128 / 130 / 137 (corrosion & inspection)', 'PESO Petroleum Rules 2002', 'IBR (Indian Boiler Regulations)', 'IS 2825 (pressure vessels)', 'API 510 / 570 / 653', 'AERB SC/IR-1 (radiation safety)', 'ASNT SNT-TC-1A + ISNT certification'],
    flavor: 'Mumbai inspection businesses navigate OISD and PESO statutory inspections in parallel with private-sector ASME/API frameworks at Reliance and Tata',
    seasonality: 'monsoon (June–September) drives major shutdowns to Oct–May; offshore Bombay High windows are weather-driven',
    keyClient: 'BPCL Mahul',
    keyCode: 'OISD-STD-130',
  },
  'hyderabad': {
    region: 'the southern Indian industrial and defence corridor',
    market: 'a fast-growing inspection hub serving BHEL heavy engineering, defence manufacturing (BDL, ECIL), aerospace, pharma, and HPCL Visakh refining',
    cluster: 'BHEL Hyderabad and Visakhapatnam, HPCL Visakh refinery, ISRO and BDL suppliers, ECIL, and the Genome Valley pharma cluster',
    bodies: 'PESO, BARC, AERB, DGCA (aerospace), Telangana State Pollution Control Board, CDSCO (pharma), DRDO QA',
    operators: ['BHEL Hyderabad', 'HPCL Visakh refinery', 'Bharat Dynamics Ltd (BDL)', 'Electronics Corporation of India (ECIL)', 'ISRO supplier ecosystem', 'Defence Research & Development Organisation (DRDO) suppliers', 'Reddy Labs / Aurobindo (pharma equipment)', 'NTPC Ramagundam'],
    codes: ['IBR (Indian Boiler Regulations)', 'IS 2825 / IS 7822 (pressure vessels)', 'AERB SC/IR-1 (radiation safety)', 'DGCA CAR Section 2 (aerospace)', 'NAS-410 / ASTM E1417 / E1444 (aerospace NDT)', 'API 510 / 570', 'ASNT SNT-TC-1A + ISNT'],
    flavor: 'Hyderabad inspection demand spans an unusually wide industrial mix — heavy engineering at BHEL, aerospace NDT for ISRO and BDL, pharma equipment qualification, plus HPCL refinery support',
    seasonality: 'milder climate enables year-round operations; pharma annual qualification cycles dominate Q4',
    keyClient: 'BHEL',
    keyCode: 'NAS-410',
  },
  'london': {
    region: 'the United Kingdom and wider European NDT market',
    market: 'the corporate headquarters cluster for global IOCs, EPCs, and inspection multinationals, with strong demand from nuclear, aerospace, rail, and offshore segments',
    cluster: 'corporate HQs in the City and Canary Wharf, plus Thames Estuary refining (Shell Stanlow legacy), aerospace at Rolls-Royce / BAE, nuclear at Sellafield supply-chain',
    bodies: 'HSE, ONR (nuclear), BINDT, CAA / EASA, MCA, Rail Safety & Standards Board (RSSB), Environment Agency',
    operators: ['BP (corporate)', 'Shell (corporate + Stanlow legacy)', 'TotalEnergies UK', 'EDF Energy (nuclear)', 'National Grid', 'Rolls-Royce (aerospace + SMR)', 'BAE Systems', 'Sellafield Ltd supply-chain'],
    codes: ['PSSR 2000 (pressure systems safety)', 'PUWER 1998', 'LOLER 1998 (lifting)', 'PCN GEN / IS / ECN schemes (BINDT)', 'EN 13445 (pressure vessels)', 'EN 12952 / 12953 (boilers)', 'ONR SAP / TAG (nuclear)', 'EASA Part 145'],
    flavor: 'London inspection businesses run multi-sector portfolios — a single firm may serve UKCS offshore, EDF nuclear, Rolls-Royce aerospace, and Network Rail simultaneously',
    seasonality: 'continuous operations with summer aerospace overhaul peaks and nuclear-station outage windows in autumn',
    keyClient: 'EDF Energy',
    keyCode: 'PCN GEN',
  },
  'aberdeen': {
    region: 'the UK North Sea offshore basin',
    market: 'the global capital of offshore decommissioning and life-extension inspection, with five decades of UKCS operational data concentrated in the city',
    cluster: 'Aberdeen Harbour + Dyce heliport, supply bases for UKCS platforms, FPSOs (e.g., Buzzard, Glen Lyon), and onshore terminals (St Fergus, Sullom Voe)',
    bodies: 'HSE (OSD), Offshore Energies UK (OEUK), Petrofac / Wood vendor frameworks, OSPAR (decommissioning), DECC / BEIS oil & gas authority (now NSTA)',
    operators: ['Harbour Energy', 'BP North Sea', 'Shell UKCS', 'TotalEnergies E&P UK', 'NEO Energy', 'Ithaca Energy', 'EnQuest', 'Petrofac (service provider)'],
    codes: ['HSE Safety Case Regulations (SCR 2015)', 'PFEER 1995 (fire/explosion)', 'PSSR 2000', 'PCN GEN / IS schemes (BINDT)', 'API 510 / 570 / 653', 'ISO 19901-9 (offshore reliability)', 'ASME / DNV class rules for FPSOs'],
    flavor: 'Aberdeen inspection firms specialise in life-extension assessments for late-life UKCS infrastructure plus decommissioning campaigns that demand rigorous lay-up condition data',
    seasonality: 'North Sea weather windows compress offshore inspection campaigns into April–September; winter focus shifts to onshore terminals and FPSO turnarounds',
    keyClient: 'Harbour Energy',
    keyCode: 'PSSR 2000',
  },
  'calgary': {
    region: 'Western Canada (Alberta and BC oil & gas corridor)',
    market: 'the head-office hub for Canadian oil sands, conventional petroleum, and the trans-continental pipeline operators',
    cluster: 'oil sands operations near Fort McMurray, conventional gas in Alberta and BC, plus the Enbridge / TC Energy long-haul pipeline networks',
    bodies: 'ABSA (Alberta Boilers Safety Association), AER (Alberta Energy Regulator), CER (Canada Energy Regulator), CSA Group, Transport Canada (radiation), CNSC',
    operators: ['Suncor Energy', 'Cenovus Energy', 'Canadian Natural Resources (CNRL)', 'Imperial Oil (ExxonMobil affiliate)', 'TC Energy / TransCanada', 'Enbridge', 'Pembina Pipeline', 'Husky / Cenovus refining'],
    codes: ['ABSA AB-506 / AB-512 (pressure equipment)', 'CSA Z662 (oil & gas pipelines)', 'CSA B51 (pressure vessels & piping)', 'AER Directive 056 / 077 (well & facility)', 'CER OPR / NEB Act regulations', 'API 510 / 570 / 653', 'CGSB 48.9712 (NDT certification)'],
    flavor: 'Calgary inspection firms manage extreme-cold field work, ABSA pressure-equipment registration, and rotational FIFO crews servicing remote Alberta and BC sites',
    seasonality: 'winter access on ice roads to remote sites, summer turnaround peak (May–September), and continuous oil-sands SAGD inspection cycles',
    keyClient: 'Suncor',
    keyCode: 'CSA Z662',
  },
  'perth': {
    region: 'Western Australia (Pilbara and Carnarvon basin)',
    market: 'the LNG and iron-ore inspection capital of Australia, supporting Woodside, Chevron, INPEX, and BHP iron ore through FIFO operations',
    cluster: 'Karratha gas plant, Wheatstone & Pluto LNG, Ichthys onshore, Pilbara iron-ore operations, and FPSO assets in the Carnarvon basin',
    bodies: 'WorkSafe WA, NOPSEMA (offshore), DMIRS (Department of Mines, Industry Regulation & Safety), ARPANSA (radiation), AMSA',
    operators: ['Woodside Energy (Karratha, Pluto, Scarborough, NWS)', 'Chevron Australia (Wheatstone, Gorgon)', 'INPEX Ichthys', 'Santos (Barossa)', 'BHP (iron ore + petroleum)', 'Rio Tinto iron ore', 'Origin Energy LNG', 'Woodside Browse / Sunrise'],
    codes: ['AS/NZS 3788 (pressure equipment)', 'AS/NZS 1554 (welding)', 'AS 4037 (pressure equipment examination)', 'NOPSEMA Offshore Safety Case', 'WorkSafe WA Mines Safety & Inspection Act', 'API 510 / 570 / 653', 'ISO 9712 / AS 3998 (NDT certification)'],
    flavor: 'Perth-based inspection businesses operate predominantly through FIFO rotations to remote Pilbara and offshore platforms, with strict WA pre-mobilisation medical and induction regimes',
    seasonality: 'cyclone season (Nov–April) drives offshore demobilisation; turnaround peaks in dry season (May–October)',
    keyClient: 'Woodside Energy',
    keyCode: 'AS 4037',
  },
  'doha': {
    region: 'the State of Qatar and the North Field expansion',
    market: 'the world\'s largest LNG operating environment, with QatarEnergy\'s North Field expansion creating unprecedented demand for inspection support',
    cluster: 'Ras Laffan Industrial City (LNG + GTL + condensate), Mesaieed Industrial City (refining + petrochemicals), and offshore production north of Halul Island',
    bodies: 'Qatar Civil Defence Department (QCDD), Qatar General Organisation for Standards & Metrology (QGOSM), Ministry of Labour, Qatar Petroleum HSE (now QatarEnergy)',
    operators: ['QatarEnergy (LNG + upstream)', 'Qatargas (now within QatarEnergy LNG)', 'RasGas legacy operations', 'Industries Qatar (IQ)', 'QChem (Q-Chem I & II)', 'QAPCO', 'QAFCO (fertilizer)', 'Mesaieed Petrochemical Holding'],
    codes: ['QatarEnergy NFPS (North Field Production Standards)', 'QGOSM standards', 'API 510 / 570 / 653', 'ASME Section V / VIII / IX', 'NACE TM0177 / TM0284 (sour service)', 'ISO 9712 (NDT certification)', 'NORSOK M-series (selective adoption)'],
    flavor: 'Doha inspection businesses live on QatarEnergy mega-project execution windows — cryogenic LNG service inspection, sour gas integrity, and North Field expansion mobilisations',
    seasonality: 'summer heat (45°C+) drives field-work limitations May–September; mega-project turnarounds concentrate Oct–April',
    keyClient: 'QatarEnergy',
    keyCode: 'NFPS',
  },
  'kuala-lumpur': {
    region: 'Peninsular Malaysia and East Malaysia (Sarawak, Sabah)',
    market: 'PETRONAS headquarters and the Malaysian oil and gas hub, supporting upstream, midstream LNG (Bintulu), and downstream refining (Melaka)',
    cluster: 'PETRONAS Twin Towers HQ, Melaka refining complex, PETRONAS Penapisan (Kerteh), MLNG Bintulu, and FPSO operators based in KL',
    bodies: 'DOSH (Department of Occupational Safety & Health), Suruhanjaya Tenaga (Energy Commission), NIOSH Malaysia, Atomic Energy Licensing Board (AELB), Petronas vendor approval',
    operators: ['PETRONAS (upstream + downstream)', 'PETRONAS Chemicals Group (PCG)', 'MISC Berhad (shipping + FPSO)', 'Sime Darby (industrial + plantations)', 'Tenaga Nasional (power)', 'PETRONAS Penapisan Melaka', 'MLNG Bintulu', 'Hess Malaysia'],
    codes: ['DOSH Factories & Machinery Act (FMA 1967)', 'Petronas Technical Standards (PTS)', 'Petronas PTS 60.0107 (NDT)', 'Suruhanjaya Tenaga Electricity Supply Act', 'API 510 / 570 / 653', 'ASME Section V / VIII', 'ISO 9712 (NDT certification)'],
    flavor: 'KL-based inspection businesses serve PETRONAS across upstream Sarawak / Sabah, midstream MLNG Bintulu, and downstream Melaka — with vendor-list compliance gating contract eligibility',
    seasonality: 'tropical year-round operations; monsoon (Nov–Mar) constrains East Malaysia offshore work',
    keyClient: 'PETRONAS',
    keyCode: 'PTS 60.0107',
  },
  'jakarta': {
    region: 'Indonesia (Java, Sumatra, Kalimantan, Papua)',
    market: 'Indonesia\'s oil, gas, petrochemicals, and steel inspection hub centred on Pertamina, Pupuk Indonesia, and Bontang / Tangguh LNG',
    cluster: 'Pertamina refineries (Cilacap, Balikpapan, Dumai), Bontang LNG (Kalimantan), Tangguh LNG (Papua), Krakatau Steel (Cilegon), and Java petrochemical belt',
    bodies: 'SKK Migas (upstream regulator), K3 Migas (oil & gas HSE), BKPM (investment coordination), BAPETEN (nuclear regulator), Kemnaker (labour)',
    operators: ['Pertamina (refining + upstream)', 'Pupuk Indonesia (fertilizers)', 'Bontang LNG (PT Badak NGL)', 'Tangguh LNG (BP-operated)', 'Krakatau Steel', 'Chandra Asri Petrochemical', 'Medco Energi', 'PHE / PEP upstream subsidiaries'],
    codes: ['K3 Migas oil & gas safety regulations', 'SNI (Standar Nasional Indonesia) for pressure equipment', 'Kepmen ESDM 18/2018 (NDT)', 'API 510 / 570 / 653', 'ASME Section V / VIII', 'BAPETEN Perka 4/2013 (radiation safety)', 'ISO 9712 (NDT certification)'],
    flavor: 'Jakarta inspection firms manage a uniquely dispersed asset base — Pertamina refineries across the archipelago, LNG trains in Kalimantan and Papua, and steel/petrochemicals on Java',
    seasonality: 'monsoon and dry season cycles vary by island; remote LNG sites in Papua require multi-week mobilisations year-round',
    keyClient: 'Pertamina',
    keyCode: 'K3 Migas',
  },
  'lagos': {
    region: 'Nigeria and the wider Gulf of Guinea',
    market: 'Nigeria\'s commercial capital and the regional hub for upstream oil & gas, refining, and LNG inspection supporting NNPCL, IOCs, and indigenous E&Ps',
    cluster: 'NNPCL refineries (Port Harcourt, Warri, Kaduna) plus the new Dangote Refinery (Lekki), offshore deepwater (Bonga, Egina, Akpo), and NLNG Bonny Island',
    bodies: 'DPR / NUPRC (upstream regulator), NMDPRA (midstream/downstream), NAPIMS (NNPC asset management), NIMASA (maritime), NNRA (radiation), Federal Ministry of Environment',
    operators: ['NNPCL (refineries + upstream)', 'Shell SPDC (onshore + shallow water)', 'Chevron Nigeria', 'TotalEnergies E&P Nigeria (Egina, Akpo)', 'ExxonMobil Nigeria (now Seplat-acquired)', 'NLNG (Bonny Island)', 'Dangote Refinery (Lekki)', 'Seplat Energy'],
    codes: ['NUPRC / DPR Procedure Guidelines (upstream)', 'NMDPRA Petroleum Industry Act regulations', 'NIMASA Marine Notices', 'API 510 / 570 / 653', 'ASME Section V / VIII / IX', 'ISO 9712 + ASNT SNT-TC-1A (NDT)', 'NORSOK M-series (selective adoption on FPSOs)'],
    flavor: 'Lagos inspection firms balance Niger Delta logistics, offshore deepwater mobilisations, and the new mega-scale Dangote Refinery against legacy NNPCL refinery turnarounds',
    seasonality: 'rainy season (Apr–Oct) constrains Niger Delta access; offshore deepwater is year-round subject to swell windows',
    keyClient: 'NLNG Bonny Island',
    keyCode: 'NUPRC',
  },
};

// ─── Industry-specific city-treatment fragments ─────────────────────────────
// One fragment per industry — used in the 2nd intro paragraph to give each
// (industry, city) combination a distinct narrative.

const INDUSTRY_CITY_LENS = {
  'ndt-inspection-companies':
    'NDT inspection contractors here manage rotating technician pools, expiring ASNT / ISO 9712 certifications, API code-based inspection intervals, and client-specific report formats — all simultaneously, often in 12-hour shift patterns',
  'calibration-laboratories':
    'Calibration laboratories here handle thousands of customer-instrument receipts under ISO/IEC 17025, with traceability chains spanning national metrology institutes and tight customer SLAs',
  'welding-fabrication-shops':
    'Welding and fabrication shops here manage WPS / PQR / WPQ libraries, ASME and AWS stamp compliance, and customer flow-down clauses that change with every project award',
  'marine-survey-companies':
    'Marine survey and offshore inspection companies here juggle class-society reporting cycles, IMCA D-018 record formats, and FPSO life-extension data spanning decades of legacy surveys',
  'pipeline-integrity-services':
    'Pipeline integrity service providers here aggregate ILI vendor data (MFL, UT, EMAT, caliper), dig verification campaigns, and API 1163 / 1160 statutory submissions across long-haul networks',
  'aerospace-quality-control':
    'Aerospace QC and MRO firms here track NAS-410 personnel qualification, AS9100D quality systems, and customer-specific specifications (Boeing, Airbus, OEM) with zero tolerance for documentation gaps',
  'metrology-laboratories':
    'Metrology laboratories here manage multi-discipline uncertainty budgets, proficiency testing, customer-asset chain-of-custody, and ISO 17025 accreditation-audit readiness across dimensional, electrical, pressure, mass, and thermal disciplines',
  'industrial-coatings-inspection':
    'Industrial coatings inspection businesses here capture NACE / AMPP DFT readings, hold-point witness records, ISO 12944 coating-system data, and pull-off adhesion test results across multi-month campaigns',
  'construction-quality-assurance':
    'Construction QA/QC firms here run ITP execution, concrete cylinder breaks, FAT / SAT punch lists, and project closeout dossier (PCD) assembly across EPC and infrastructure programs',
  'geotechnical-engineering':
    'Geotechnical engineering firms here run site-investigation campaigns, borehole logs, CPT data acquisition, laboratory test workflow, and AGS-format reporting for civil and infrastructure projects',
  'environmental-testing-labs':
    'Environmental testing laboratories here manage chain-of-custody, instrument data integration (GC, GC-MS, ICP, IC), and ISO 17025 method validation for regulator-submission-grade results',
  'oilfield-services':
    'Oilfield services and wellsite inspection contractors here manage rig and BOP test schedules, OCTG per-joint records, field-ticket capture, and HSE certification (BOSIET / HUET / H2S Alive) renewals',
};

// ─── Industry-specific feature framing for city section ────────────────────
// Two city-flavored overrides are appended to 6 industry features.

const INDUSTRY_CITY_FEATURE_OVERRIDES = {
  'ndt-inspection-companies': (city, ctx) => [
    `${city} operator-specific report templates pre-loaded for ${ctx.operators.slice(0, 3).join(', ')}`,
    `Automated compliance dashboard for ${ctx.bodies.split(',').slice(0, 2).join(' and ').trim()} statutory inspection requirements`,
  ],
  'calibration-laboratories': (city, ctx) => [
    `${city} customer-instrument receipt and dispatch workflow with local courier integration`,
    `Traceability chain via ${ctx.bodies.split(',')[0].trim()} national-standards laboratory recognition`,
  ],
  'welding-fabrication-shops': (city, ctx) => [
    `${city} customer flow-down library pre-loaded with ${ctx.operators.slice(0, 2).join(' and ')} weld-procedure requirements`,
    `Stamp-compliance dashboard aligned to ${ctx.bodies.split(',').slice(0, 2).join(' and ').trim()} authorised-inspector frameworks`,
  ],
  'marine-survey-companies': (city, ctx) => [
    `${city} port-state inspection format with class society reporting (DNV, ABS, LR, BV) defaults`,
    `Offshore campaign manager for ${ctx.operators.slice(0, 3).join(', ')} FPSO and platform programs`,
  ],
  'pipeline-integrity-services': (city, ctx) => [
    `${city} regulator submission formats pre-built for ${ctx.bodies.split(',').slice(0, 2).join(' and ').trim()}`,
    `Long-haul pipeline ILI campaign manager for ${ctx.operators.slice(0, 2).join(' and ')} network coverage`,
  ],
  'aerospace-quality-control': (city, ctx) => [
    `${city} aerospace customer specification library — pre-loaded clauses from local primes and tier-1s`,
    `Regulatory work-pack assembly for ${ctx.bodies.split(',').slice(0, 2).join(' and ').trim()} certification authorities`,
  ],
  'metrology-laboratories': (city, ctx) => [
    `${city} customer dispatch SLA tracking with local courier and customs-clearance handling`,
    `Discipline-specific uncertainty templates aligned to ${ctx.bodies.split(',')[0].trim()} accreditation scope`,
  ],
  'industrial-coatings-inspection': (city, ctx) => [
    `${city} project hold-point manager with ${ctx.operators.slice(0, 2).join(' and ')} witness-list defaults`,
    `Climate-aware coating-application window planner tuned to ${ctx.seasonality}`,
  ],
  'construction-quality-assurance': (city, ctx) => [
    `${city} project closeout dossier (PCD) template aligned to ${ctx.operators.slice(0, 2).join(' and ')} handover requirements`,
    `Multi-discipline NCR routing across ${ctx.bodies.split(',').slice(0, 2).join(' and ').trim()} statutory reporting`,
  ],
  'geotechnical-engineering': (city, ctx) => [
    `${city} site-investigation campaign coordinator with local driller and lab subcontract management`,
    `Regulator-format geotechnical report templates aligned to ${ctx.bodies.split(',').slice(0, 2).join(' and ').trim()} requirements`,
  ],
  'environmental-testing-labs': (city, ctx) => [
    `${city} regulator EDD format for ${ctx.bodies.split(',').slice(0, 2).join(' and ').trim()}`,
    `Chain-of-custody mobile capture with field sampler ID and GPS pin per ${city} project`,
  ],
  'oilfield-services': (city, ctx) => [
    `${city} field-ticket capture and invoice flow tuned for ${ctx.operators.slice(0, 2).join(' and ')} customer billing`,
    `HSE certification tracker (BOSIET / HUET / H2S Alive / IADC RigPass) with ${ctx.bodies.split(',')[0].trim()} alignment`,
  ],
};

// ─── Industry-specific use-case framing per city ────────────────────────────

function buildUseCases(industry, city, ctx) {
  const ind = industry.name.toLowerCase();
  const c = city.name;
  const op = ctx.operators[0];
  const op2 = ctx.operators[1] || ctx.operators[0];
  const op3 = ctx.operators[2] || ctx.operators[0];
  const code = ctx.codes[0];

  // Industry-specific use case templates
  const templates = {
    'ndt-inspection-companies': [
      `A 40-technician ${c}-based NDT contractor manages ASNT and ISO 9712 expiries across rotating crews servicing ${op} and ${op2}, replacing six spreadsheets with a single live dashboard.`,
      `An inspection startup in ${c} wins ${op3} approved-vendor status after demonstrating audit-ready ${code} compliance in 30 days — historically a 9-month onboarding cycle.`,
      `A multi-site inspection firm consolidates ${c} branch data with regional offices and produces a unified corrosion-rate dashboard across all ${ctx.region} assets.`,
      `A growing ${c} inspection company integrates Atlantis NDT ERP with their accounting and CMMS — eliminating duplicate data entry and accelerating customer-report turnaround from 5 days to under 24 hours.`,
    ],
    'calibration-laboratories': [
      `A ${c} ISO 17025 calibration laboratory handles 4,000+ customer instruments per month with full traceability to ${ctx.bodies.split(',')[0].trim()} reference standards — passing accreditation audit with zero findings.`,
      `A pharma-focused calibration lab in ${c} runs 21 CFR Part 11 mode for instrument certification destined for ${op} and ${op2} regulated facilities.`,
      `A multi-discipline lab in ${c} consolidates dimensional, electrical, and pressure calibration workflows on one platform — replacing three vendor LIMS systems and cutting dispatch SLAs by 35%.`,
      `A growing ${c} calibration business uses the platform to expand into mass and thermal disciplines without buying additional software seats — pay-as-you-grow scaling.`,
    ],
    'welding-fabrication-shops': [
      `A pressure-vessel fab shop in ${c} prepares an ASME 'U' joint review for ${op} in under 4 hours — historically an 80-hour evidence-assembly exercise.`,
      `A structural-steel fabricator in ${c} maintains live welder continuity across 120 AWS-qualified welders, preventing mid-job qualification lapses that previously caused weld rejections.`,
      `A pipeline fab yard in ${c} flows ${op2} customer clauses (revision-controlled) into internal procedures automatically — zero outdated WPS revisions reaching the field.`,
      `A small ${c} fab shop wins ${op3} approved-vendor status using audit-ready evidence packs assembled by the system rather than the quality manager.`,
    ],
    'marine-survey-companies': [
      `A ${c}-based survey firm completes IMCA D-018 inspection records on tablet in the field, with photo-indexed findings synced to class-society submission formats for ${op}.`,
      `A FPSO life-extension assessment for an ${op2} asset aggregates 25 years of hull, mooring, and topside inspection history on a single platform — supporting a 10-year recertification.`,
      `An offshore inspection contractor in ${c} manages STCW + IMCA + class-society qualification expiry across 70 surveyors with FIFO/sea-going rotations.`,
      `A subsea inspection team in ${c} indexes ROV footage at timecode against findings — class-society reviewers click to relevant footage instead of scrubbing terabytes of video.`,
    ],
    'pipeline-integrity-services': [
      `An ILI vendor servicing ${op} runs 800 km of liquids pipeline annually with API 1163 vendor-qualification packs assembled automatically from dig-verification data.`,
      `A pipeline integrity firm in ${c} runs API 1160 IMP threat assessment per ${op2} network segment — replacing Excel workbooks that previously generated audit findings.`,
      `A dig-verification crew in ${c} captures field measurements per NACE SP0102 on mobile devices and statistically compares vs. ILI prediction in real time.`,
      `A regional ILI services company in ${c} submits ${ctx.bodies.split(',')[0].trim()} statutory pipeline reports automatically from underlying inspection data — eliminating manual reporting deadlines as a risk source.`,
    ],
    'aerospace-quality-control': [
      `A NAS-410 NDT shop in ${c} manages 35 ${op}-approved aerospace NDT technicians with method-and-customer-specific qualification matrices — including periodic vision and proficiency tests.`,
      `An MRO facility in ${c} runs AS9100D + FAA/EASA Part 145 + customer ${op2} flow-down clauses on a single platform — IMS audits unify across all schemes.`,
      `A composite-component inspection shop in ${c} integrates phased-array UT and shearography results with ${op3} customer specification compliance evidence per part number.`,
      `A defence aerospace supplier in ${c} maintains AS9100D quality records and customer-specific FOD prevention compliance per AS9146 — daily dashboard visible across production areas.`,
    ],
    'metrology-laboratories': [
      `A multi-discipline metrology lab in ${c} accredited to ISO 17025 manages uncertainty budgets across dimensional, electrical, pressure, mass, and thermal disciplines on one platform.`,
      `A ${c} metrology lab supports ${op} and ${op2} customer-specific decision rules (k=2, k=3, customer-defined) with consistent application across all certificates.`,
      `An ${c} metrology business runs proficiency-testing programs (z-score / En-number) and tracks corrective action when results are unsatisfactory — feeding the management review.`,
      `A growing ${c} calibration / metrology service expands into a new discipline by enabling the relevant module rather than buying separate software — pay-only-for-used model.`,
    ],
    'industrial-coatings-inspection': [
      `A coatings inspection firm in ${c} captures DFT readings per SSPC PA 2 on mobile DFT gauges for ${op} project — 80/80 rule statistics auto-calculated, remediation work orders raised automatically.`,
      `A ${c} coatings inspection team manages ISO 12944 corrosion-protection systems across ${op2} project hold-point witness records — clients receive 48-hour hold-point notifications automatically.`,
      `A multi-project coatings contractor in ${c} consolidates NACE / AMPP CIP inspector qualifications across rotating crews — preventing mid-project expiry that previously rejected work.`,
      `An offshore coatings inspection mobilisation in ${c} closes out a ${op3} platform topside campaign with full ASTM D4541 pull-off adhesion statistical evidence in 24 hours.`,
    ],
    'construction-quality-assurance': [
      `An EPC QA/QC team in ${c} executes ITP for ${op} project — hold points block downstream work until released, eliminating the 'oh, that wasn't witnessed' rework cycle.`,
      `A concrete-testing lab serving ${c} infrastructure projects (${op2}) tracks pour-to-28-day strength evaluation with ACI 214 statistical processing — outliers trigger investigation workflow.`,
              `A multi-discipline construction QA firm in ${c} routes NCRs (concrete, steel, welding, instrumentation) to discipline leads with shared root-cause analysis — invisible patterns become visible.`,
      `A megaproject closeout in ${c} delivers the PCD to ${op3} client one week before handover — historically a 6+ week post-handover firefight.`,
    ],
    'geotechnical-engineering': [
      `A site-investigation campaign in ${c} for ${op} produces AGS 4.1 borehole logs and CPT plots integrated with lab test results — client deliverable assembled in 1 week, not 6.`,
      `A geotechnical consultancy in ${c} runs ${op2} mega-project ground-investigation campaign with drill-rig schedule, lab subcontractor coordination, and field engineer assignment on one platform.`,
      `A ${c} geotechnical firm produces design-parameter recommendation reports for ${op3} infrastructure programs with full traceability from borehole log to laboratory test certificate.`,
      `An ${c}-based geotechnical / environmental services company runs CPT + lab test + report-assembly on a single project — eliminating cross-platform data transcription errors.`,
    ],
    'environmental-testing-labs': [
      `An ISO 17025 environmental laboratory in ${c} handles water, soil, and air samples for ${op} compliance monitoring — chain-of-custody captured at sample collection through to final report.`,
      `A ${c} environmental lab integrates instrument data (GC, GC-MS, ICP, IC) for ${op2} project — manual transcription eliminated, regulator-submission EDD generated automatically.`,
      `A multi-matrix lab in ${c} runs water + soil + air on a single project for ${op3} mining / industrial client — common project metadata shared, matrix-specific receipt and method tracked per sample.`,
      `An ${c} environmental testing business maintains ISO 17025 method validation records (selectivity, linearity, accuracy, precision, MDL/MRL, uncertainty) per analyte / matrix — accreditation findings drop to zero.`,
    ],
    'oilfield-services': [
      `An oilfield services contractor in ${c} captures field tickets on tablet at ${op} wellsite — service hours and consumables flow direct to invoicing with customer-rep signature.`,
      `A ${c}-based BOP inspection team runs API RP 53 weekly / function tests on ${op2} rigs with pressure-trace evidence and regulator-submission packs auto-assembled.`,
      `An OCTG inspection campaign in ${c} for ${op3} tracks per-joint inspection history (drill collars, casing, tubing) — wellbore integrity decisions made on data, not paper records.`,
      `A wireline / coiled-tubing service company in ${c} maintains technician HSE certification (BOSIET / HUET / H2S Alive / IADC RigPass) with auto-block-on-expiry — no unqualified personnel mobilise to site.`,
    ],
  };

  return templates[industry.slug] || [];
}

// ─── Build full per-(industry, city) content ────────────────────────────────

function buildContent(industry, city) {
  const ctx = CITY_CTX[city.slug];
  const baseFeatures = industry.modules
    .slice(0, 6)
    .map(m => `${m.replace(/-/g, ' ').replace(/\b(\w)/g, w => w.toUpperCase())} configured for ${industry.name.toLowerCase()} workflow`);

  const cityOverrides = INDUSTRY_CITY_FEATURE_OVERRIDES[industry.slug](city.name, ctx);
  const features = [
    `${ctx.region}-aware ${industry.name.toLowerCase()} workflow with pre-loaded ${ctx.codes.slice(0, 2).join(' and ')} compliance templates`,
    `Operator-specific quality flow-down clauses from ${ctx.operators.slice(0, 3).join(', ')} pre-mapped`,
    `Personnel qualification matrix supporting ${ctx.bodies.split(',').slice(0, 2).join(' and ').trim()} requirements`,
    `Audit-ready evidence-pack generation for ${industry.name.toLowerCase()} statutory inspections`,
    `Mobile field-data capture (offline capable) for ${city.name} project sites`,
    `Multi-language reporting with ${city.country}-required document formats`,
    ...cityOverrides,
  ];

  const operators = ctx.operators.slice(0, 8);
  const regulators = ctx.codes.slice(0, 7).concat([ctx.bodies]);
  const lens = INDUSTRY_CITY_LENS[industry.slug];

  const introPara1 =
    `${industry.name} operating in ${city.name} face a specific combination of local market structure, regulator framework, and operator-specific quality requirements that generic ERP systems cannot model. ` +
    `${city.name} sits at the heart of ${ctx.market}. ` +
    `The dominant industrial cluster — ${ctx.cluster} — sets the rhythm: ${ctx.seasonality}. ` +
    `For ${industry.name.toLowerCase()} based here, that means ${ctx.flavor}.`;

  const introPara2 =
    `${lens}. ` +
    `Atlantis NDT ERP is configured for the ${industry.name.toLowerCase()} business as it actually operates in ${city.name}: ` +
    `pre-loaded with ${ctx.codes.slice(0, 3).join(', ')} compliance templates; ` +
    `mapped to operator-specific flow-down clauses from ${ctx.operators.slice(0, 4).join(', ')}; ` +
    `and aligned with the regulators that audit your work — ${ctx.bodies}. ` +
    `The result: a ${industry.name.toLowerCase()} ERP that knows the ${city.name} market, not a generic accounting system bolted to a spreadsheet of inspection records.`;

  const useCases = buildUseCases(industry, city, ctx);

  const desc =
    `Purpose-built ERP for ${industry.name.toLowerCase()} based in ${city.name}, ${city.country}. ` +
    `Pre-loaded with ${ctx.codes.slice(0, 3).join(', ')}, operator flow-down for ${ctx.operators.slice(0, 2).join(' and ')}, and ${ctx.bodies.split(',').slice(0, 2).join(' / ').trim()} compliance support. ` +
    `Demo: info@atlantisndt.com.`;

  // FAQs — combine industry FAQs with city-specific
  const baseIndustryFaqs = industry.faqs.slice(0, 2);
  const cityFaqs = [
    [
      `Is Atlantis NDT ERP configured for ${industry.name.toLowerCase()} operating in ${city.name}?`,
      `Yes. The platform is pre-loaded with the codes and operator flow-downs that ${industry.name.toLowerCase()} in ${city.name} actually work with: ${ctx.codes.slice(0, 4).join(', ')}, plus operator-specific quality clauses from ${ctx.operators.slice(0, 4).join(', ')}. Configuration is done — your team is productive on day one, not after six months of customisation.`,
    ],
    [
      `Which ${city.name} regulators and authorities does the system align with?`,
      `The compliance dashboard maps to ${ctx.bodies}. Statutory inspection-interval calculation, document-format generation, and audit-ready evidence-pack assembly are all built around these authorities. For ${industry.name.toLowerCase()}, that means ${ctx.flavor}.`,
    ],
    [
      `Can ${industry.name.toLowerCase()} in ${city.name} integrate with operator-specific portals such as ${ctx.keyClient}?`,
      `Yes. The system supports vendor-portal flow with major ${city.country} operators including ${ctx.operators.slice(0, 4).join(', ')}. Operator-specific quality clauses are imported as controlled documents; internal procedures that implement those clauses are cross-referenced; revision changes flag affected internal documents for review. Where vendor portals expose APIs (${ctx.keyClient} approved-vendor systems for example), bi-directional sync keeps customer and internal records aligned.`,
    ],
  ];
  const faqs = [...cityFaqs, ...baseIndustryFaqs];

  // Title — favor the city-search pattern
  const title = `${industry.name} ERP Software in ${city.name}`;

  return {
    industrySlug: industry.slug,
    industryName: industry.name,
    citySlug: city.slug,
    cityName: city.name,
    countryName: city.country,
    isoCountry: city.iso,
    lat: city.lat,
    lng: city.lng,
    title,
    desc,
    introPara1,
    introPara2,
    features,
    operators,
    regulators,
    useCases,
    faqs,
  };
}

// ─── Emit files ──────────────────────────────────────────────────────────────

const outDir = join(ROOT, 'src/pages/erp-industries');
mkdirSync(outDir, { recursive: true });

const allCombos = [];
let written = 0;
for (const industry of DATA.industries) {
  for (const city of CITIES) {
    if (!CITY_CTX[city.slug]) {
      console.warn(`Missing CITY_CTX for ${city.slug}`);
      continue;
    }
    const c = buildContent(industry, city);
    const data = c;
    const slug = `${industry.slug}-${city.slug}`;
    const fname = join(outDir, `${slug}.tsx`);
    const idSafe = slug.replace(/-/g, '_');
    const content =
      `import ErpIndustryCityPage, { ErpIndustryCityProps } from '@/components/ErpIndustryCityPage';\n` +
      `const data: ErpIndustryCityProps = ${JSON.stringify(data, null, 2)} as ErpIndustryCityProps;\n` +
      `export default function ErpIndCity_${idSafe}() { return <ErpIndustryCityPage {...data} />; }\n`;
    writeFileSync(fname, content);
    allCombos.push({
      slug,
      industrySlug: industry.slug,
      citySlug: city.slug,
      title: `${c.title} | Atlantis NDT ERP`,
      desc: c.desc,
      bodyH1: c.title,
      bodyText: c.introPara1.slice(0, 480),
    });
    written++;
  }
}

console.log(`✓ ${written} industry × city pages written`);

// ── Patch files (DO NOT modify App.tsx or prerender.mjs directly) ──────────
const lazy = allCombos
  .map(c => `const ErpIndCity_${c.slug.replace(/-/g, '_')} = lazy(() => import("./pages/erp-industries/${c.slug}"));`)
  .join('\n');
const routes = allCombos
  .map(c => `                  <Route path="/erp-industries/${c.slug}" element={<LazyRoute Component={ErpIndCity_${c.slug.replace(/-/g, '_')}} />} />`)
  .join('\n');

writeFileSync(join(__dirname, '_sprint5-lazy.txt'), lazy + '\n');
writeFileSync(join(__dirname, '_sprint5-routes.txt'), routes + '\n');

const prerenderEntries = allCombos.map(c => ({
  path: `/erp-industries/${c.slug}`,
  title: c.title,
  description: c.desc,
  bodyH1: c.bodyH1,
  bodyText: c.bodyText,
}));
writeFileSync(join(__dirname, '_sprint5-prerender.json'), JSON.stringify(prerenderEntries, null, 2));

console.log(`✓ Sprint 5 patch files written:`);
console.log(`  scripts/_sprint5-lazy.txt (${allCombos.length} lazy imports)`);
console.log(`  scripts/_sprint5-routes.txt (${allCombos.length} routes)`);
console.log(`  scripts/_sprint5-prerender.json (${allCombos.length} entries)`);
console.log(`\nSummary:`);
console.log(`  Industries: ${DATA.industries.length}`);
console.log(`  Cities: ${CITIES.length}`);
console.log(`  Total pages: ${written}`);
