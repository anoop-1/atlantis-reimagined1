import { assertPermutationGenAllowed } from './_permutation-freeze.mjs';
assertPermutationGenAllowed('gen-erp-module-city-pages.mjs');

// Sprint 6: Module × City top combos.
// 5 highest-demand modules × 15 top cities = 75 cross-pages.
// URL pattern: /erp-modules/{module-slug}-{city-slug}
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const DATA = JSON.parse(readFileSync(join(__dirname, 'gen-erp-data.json'), 'utf-8'));

const MODULE_BY_SLUG = Object.fromEntries(DATA.modules.map(m => [m.slug, m]));

// Modules for module × city expansion.
// Sprint 6 covered: certification-tracking, work-order-management, inspection-scheduling, calibration-management, corrosion-tracking
// Sprint 7 adds: inventory-management, audit-management, document-control, asset-management, quality-management, project-management
const TOP_MODULES_FULL = [
  'certification-tracking', 'work-order-management', 'inspection-scheduling',
  'calibration-management', 'corrosion-tracking',
  'inventory-management', 'audit-management', 'document-control',
  'asset-management', 'quality-management', 'project-management',
];

// Tier 1 (this sprint) — only the top 5 module slugs × 15 new cities.
const TOP_MODULES_TIER1 = [
  'certification-tracking', 'work-order-management', 'inspection-scheduling',
  'calibration-management', 'corrosion-tracking',
];

const TIER1_ONLY = process.env.TIER1_ONLY === '1';
const TOP_MODULES = TIER1_ONLY ? TOP_MODULES_TIER1 : TOP_MODULES_FULL;

// Top 15 cities (matches Sprint 5 city list)
const CITIES_ORIGINAL = [
  { slug: 'houston', name: 'Houston', country: 'USA', lat: 29.7604, lng: -95.3698,
    market: "Energy capital of the world. 4,600+ oil & gas firms. Continuous turnaround demand.",
    operators: ["ExxonMobil Baytown refinery", "Marathon Galveston Bay", "LyondellBasell Channelview", "Valero Houston", "Phillips 66 Sweeny", "Shell Deer Park", "Pemex Deer Park", "INEOS Battleground"],
    regulators: ["OSHA Region 6 PSM", "TCEQ air permits", "USCG District 8 marine", "Texas Railroad Commission", "EPA Region 6", "DOT PHMSA pipeline"],
    industries: "oil & gas refining, petrochemical, midstream, marine, aerospace (NASA Johnson)" },
  { slug: 'dubai', name: 'Dubai', country: 'UAE', lat: 25.276987, lng: 55.296249,
    market: "Regional HQ city for GCC oil & gas. EPC contractors, inspection service multinationals.",
    operators: ["ADNOC Distribution", "ENOC", "DUBAL aluminum", "DEWA power", "Dragon Oil", "Wood UAE", "Petrofac Dubai", "Sharjah National Oil Co"],
    regulators: ["ADQCC", "MOIAT", "Dubai Municipality", "DCAS", "Dubai Civil Defence"],
    industries: "oil & gas, aluminum, power, EPC, marine" },
  { slug: 'abu-dhabi', name: 'Abu Dhabi', country: 'UAE', lat: 24.453884, lng: 54.3773438,
    market: "ADNOC controls 94% of UAE reserves. Ruwais industrial complex. Sour gas processing.",
    operators: ["ADNOC Onshore", "ADNOC LNG", "Borouge polyethylene", "Fertil ammonia/urea", "TAQA power & water", "ADNOC Refining Ruwais", "ZADCO offshore", "ADMA-OPCO"],
    regulators: ["ADNOC HSE", "ADQCC", "Federal NCEMA", "EAD environment"],
    industries: "oil & gas upstream/downstream, petrochemical, fertilizer, power" },
  { slug: 'saudi-arabia', name: 'Saudi Arabia', country: 'Saudi Arabia', lat: 24.7136, lng: 46.6753,
    market: "World's largest integrated oil & gas. SAEP-1112 / SAEP-1142. Vision 2030 mega-projects.",
    operators: ["Saudi Aramco upstream/downstream", "SABIC petrochemicals", "Ma'aden mining", "SADAF", "KEMYA", "Yanpet", "PetroRabigh", "YASREF"],
    regulators: ["HRSD", "GAMI", "SASO", "Aramco SAEP", "MODON", "RCJY (Royal Commission Jubail/Yanbu)"],
    industries: "oil & gas (Ghawar, Empty Quarter), refining (Yanbu, Jubail, Ras Tanura), petrochem, mining" },
  { slug: 'singapore', name: 'Singapore', country: 'Singapore', lat: 1.3521, lng: 103.8198,
    market: "Jurong Island petrochem hub. FPSO conversion (Keppel, Sembcorp). MOM CERT compliance.",
    operators: ["ExxonMobil Jurong refinery", "Shell Bukom", "Vopak storage", "Sembcorp Marine FPSO", "Keppel FPSO yards", "MODEC Singapore HQ", "BASF Jurong", "Lanxess Jurong"],
    regulators: ["MOM (Ministry of Manpower)", "NEA environment", "MPA marine", "EDB Singapore", "BCA Building Authority"],
    industries: "petrochemical, marine (FPSO), bunkering, biopharma manufacturing" },
  { slug: 'mumbai', name: 'Mumbai', country: 'India', lat: 19.0760, lng: 72.8777,
    market: "India's western corridor. Trombay/Mahul refineries. ONGC offshore Western Region. Reliance Hazira pipeline.",
    operators: ["BPCL Mahul refinery", "HPCL Mumbai refinery", "ONGC Western Offshore", "Reliance Hazira/Patalganga", "Indian Oil Mumbai", "L&T Hydrocarbon", "Tata Power"],
    regulators: ["PESO", "OISD", "DGMS mining", "DGFASLI", "Maharashtra Pollution Control Board"],
    industries: "refining, petrochemical, offshore upstream (Bombay High), power generation" },
  { slug: 'hyderabad', name: 'Hyderabad', country: 'India', lat: 17.3850, lng: 78.4867,
    market: "South India industrial hub. BHEL heavy engineering. ISRO suppliers. Pharma + aerospace manufacturing.",
    operators: ["BHEL boilers/turbines", "HPCL Visakh refinery (adjacent)", "ISRO satellite suppliers", "BDL defense", "ECIL", "Dr Reddy's Labs", "Bharat Forge"],
    regulators: ["PESO", "BARC nuclear", "DGCA aerospace", "AERB radiation safety", "Telangana Pollution Control Board"],
    industries: "heavy engineering, defense, aerospace, pharma, power equipment" },
  { slug: 'london', name: 'London', country: 'UK', lat: 51.5074, lng: -0.1278,
    market: "HQ city for IOCs. Diverse client base — UKCS, nuclear, aerospace, manufacturing. BINDT, TWI based.",
    operators: ["BP HQ", "Shell HQ", "TotalEnergies UK", "EDF Energy nuclear", "National Grid", "Rolls-Royce", "BAE Systems"],
    regulators: ["HSE", "ONR (Office Nuclear Regulation)", "BINDT", "EASA via UK CAA", "Environment Agency"],
    industries: "energy IOC HQs, nuclear, aerospace, defense, finance & technical services" },
  { slug: 'aberdeen', name: 'Aberdeen', country: 'UK', lat: 57.1497, lng: -2.0943,
    market: "UK offshore oil & gas capital. 50 years of North Sea ops. Offshore wind growth. Decommissioning hub.",
    operators: ["Harbour Energy", "BP North Sea", "Shell UKCS", "TotalEnergies UK", "NEO Energy", "Apache North Sea", "Repsol Sinopec UK"],
    regulators: ["HSE OSDR", "OEUK (Offshore Energies UK)", "NSTA (former OGA)", "PSSR 2000 written scheme", "LOLER"],
    industries: "offshore oil & gas, offshore wind, subsea engineering, decommissioning" },
  { slug: 'calgary', name: 'Calgary', country: 'Canada', lat: 51.0447, lng: -114.0719,
    market: "Canadian oil & gas administrative center. Oil sands operations, pipeline midstream HQ.",
    operators: ["Suncor", "Cenovus", "CNRL", "Imperial Oil", "TC Energy", "Enbridge", "Pembina Pipeline", "Husky Energy"],
    regulators: ["ABSA (Alberta Boilers Safety)", "AER (Alberta Energy Regulator)", "CER (Canada Energy Regulator)", "CSA Group", "CGSB"],
    industries: "oil sands, conventional petroleum, midstream pipelines, petrochemical" },
  { slug: 'perth', name: 'Perth', country: 'Australia', lat: -31.9505, lng: 115.8605,
    market: "Western Australia LNG and iron ore gateway. Pilbara FIFO support. Carnarvon Basin offshore.",
    operators: ["Woodside Energy", "Chevron Australia (Gorgon, Wheatstone)", "INPEX Ichthys", "Santos GLNG", "BHP iron ore", "Rio Tinto Pilbara", "FMG mining"],
    regulators: ["WorkSafe WA", "NOPSEMA offshore", "DMIRS mines & safety", "Australian Petroleum Safety Authority"],
    industries: "LNG, iron ore, alumina refining, offshore upstream" },
  { slug: 'doha', name: 'Doha', country: 'Qatar', lat: 25.2854, lng: 51.5310,
    market: "QatarEnergy LNG capital. North Field expansion. Cryogenic LNG infrastructure.",
    operators: ["QatarEnergy", "RasGas", "Qatargas (now QatarEnergy LNG)", "Industries Qatar (IQ)", "QChem", "Ras Laffan Industrial City"],
    regulators: ["QCDD (Qatar Civil Defence)", "QGOSM (Qatar General Org Standards & Metrology)", "Ministry of Energy Affairs"],
    industries: "LNG, gas-to-liquid (GTL), petrochemical, fertilizer" },
  { slug: 'kuala-lumpur', name: 'Kuala Lumpur', country: 'Malaysia', lat: 3.1390, lng: 101.6869,
    market: "PETRONAS HQ city. ASEAN energy gateway. Petronas Technical Standards (PTS) compliance.",
    operators: ["PETRONAS upstream/downstream", "PCSB", "Petronas Chemicals (PCG)", "Sime Darby", "MISC", "Tenaga Nasional Berhad", "MLNG Bintulu"],
    regulators: ["DOSH (Department of Occupational Safety & Health)", "Suruhanjaya Tenaga (Energy Commission)", "NIOSH Malaysia", "SIRIM QAS"],
    industries: "oil & gas upstream/downstream, LNG, palm oil refining, power generation" },
  { slug: 'jakarta', name: 'Jakarta', country: 'Indonesia', lat: -6.2088, lng: 106.8456,
    market: "Pertamina HQ. Indonesian state energy. LNG Bontang/Tangguh. Petrochemical Tuban/Cilegon.",
    operators: ["Pertamina (Cilacap, Balikpapan, Dumai refineries)", "Pupuk Indonesia", "Bontang LNG", "Tangguh LNG", "Krakatau Steel", "Petrokimia Gresik", "Tripatra EPC"],
    regulators: ["SKK Migas", "K3 Migas (HSE)", "BKPM investment board", "BPOM (drug/food regulator for QC labs)"],
    industries: "refining, LNG, petrochemical, fertilizer, mining (Freeport, Vale)" },
  { slug: 'lagos', name: 'Lagos', country: 'Nigeria', lat: 6.5244, lng: 3.3792,
    market: "Nigeria oil & gas hub. NNPCL refineries. Shell SPDC onshore. Deepwater offshore.",
    operators: ["NNPCL refineries (Port Harcourt, Warri, Kaduna)", "Shell SPDC", "Chevron Nigeria", "TotalEnergies E&P Nigeria", "ExxonMobil Nigeria", "NLNG Bonny", "Dangote Refinery"],
    regulators: ["NUPRC (Nigerian Upstream Petroleum Regulatory)", "NMDPRA (downstream)", "NAPIMS", "NIMASA", "Federal Ministry of Environment"],
    industries: "oil & gas upstream onshore + deepwater offshore, LNG, refining" },
];

// Tier 1 expansion — next 15 cities (this sprint).
const CITIES_TIER1 = [
  { slug: 'riyadh', name: 'Riyadh', country: 'Saudi Arabia', lat: 24.7136, lng: 46.6753,
    market: "Saudi corporate capital. Aramco / SABIC / Ma'aden HQs. Vision 2030 megaproject PMOs.",
    operators: ["Saudi Aramco (corporate HQ)", "SABIC HQ", "Ma'aden (mining HQ)", "NEOM PMO", "Qiddiya / Red Sea Global", "Saudi Electricity Company", "Royal Commission Riyadh City", "Riyadh Refinery (Aramco)"],
    regulators: ["HRSD labor", "GAMI", "SASO standards", "Aramco SAEP-1112 / 1142", "MODON industrial cities", "RCJY"],
    industries: "oil & gas corporate, Vision 2030 megaprojects, power, mining HQs" },
  { slug: 'jubail', name: 'Jubail', country: 'Saudi Arabia', lat: 27.0046, lng: 49.6469,
    market: "World's largest industrial city by master-planned area. Aramco + SABIC dense petrochemical / refining cluster.",
    operators: ["SASREF (Aramco / Shell)", "SADAF (SABIC / Dow)", "Kemya (SABIC / ExxonMobil)", "Petrokemya (SABIC)", "Sharq (SABIC / Mitsubishi)", "Saudi Kayan", "SATORP (Aramco / Total)", "RC Jubail PMT"],
    regulators: ["Royal Commission Jubail and Yanbu (RCJY)", "HRSD labor", "SASO standards", "Aramco SAEP-1142", "SABIC vendor approval"],
    industries: "refining, sour-gas petrochemicals, ethylene cracking, fertilizer" },
  { slug: 'yanbu', name: 'Yanbu', country: 'Saudi Arabia', lat: 24.0890, lng: 38.0618,
    market: "KSA western refining/petrochem hub. East-West pipeline terminus. Gateway to NEOM and Red Sea megaprojects.",
    operators: ["YASREF (Aramco / Sinopec)", "Aramco Yanbu Refinery", "Yanpet (SABIC / ExxonMobil)", "Yansab (SABIC)", "Petro Rabigh (Aramco / Sumitomo)", "RC Yanbu PMT", "Saudi Electricity Yanbu", "Yanbu Cement"],
    regulators: ["Royal Commission Yanbu (RCJY)", "HRSD labor", "SASO standards", "Aramco SAEP-1142", "Saudi Ports Authority"],
    industries: "refining, petrochemicals, marine inspection, East-West pipeline integrity" },
  { slug: 'kuwait', name: 'Kuwait City', country: 'Kuwait', lat: 29.3759, lng: 47.9774,
    market: "KPC group corporate capital. Mina Al-Ahmadi, Mina Abdullah, Al-Zour refineries. KOC upstream.",
    operators: ["KOC (Kuwait Oil Company)", "KNPC refineries (Mina Al-Ahmadi, Mina Abdullah)", "KIPIC (Al-Zour refinery + LNG)", "PIC Petrochemical", "Equate", "KAFCO", "KGOC (partitioned zone)", "Kuwait Ports Authority"],
    regulators: ["PAI (Public Authority for Industry)", "EPA Kuwait environment", "Kuwait Fire Force", "KPC vendor approval", "Ministry of Oil"],
    industries: "upstream oil & gas, integrated refining, petrochemicals, LNG import" },
  { slug: 'muscat', name: 'Muscat', country: 'Oman', lat: 23.5859, lng: 58.4059,
    market: "Oman corporate base. PDO upstream + OQ refining/petrochem at Sohar + Duqm SEZ megaproject.",
    operators: ["Petroleum Development Oman (PDO)", "OQ Refineries (Sohar, Muscat)", "OQ Petrochemicals", "Oman LNG (Qalhat)", "Duqm Refinery (OQ / Kuwait JV)", "Sohar Aluminium", "Vale Oman (Sohar pellet)", "Oman Cement"],
    regulators: ["MEM Ministry of Energy and Minerals", "Ministry of Labour", "OPAZ (free zones)", "DGSM Omani Standards", "Ministry of Environment"],
    industries: "upstream oil & gas, refining, petrochemicals, aluminium, mining, LNG" },
  { slug: 'sharjah', name: 'Sharjah', country: 'UAE', lat: 25.3463, lng: 55.4209,
    market: "Northern emirate industrial / fabrication hub. Hamriyah Free Zone, SAIF Zone, SNOC gas processing.",
    operators: ["Sharjah National Oil Corporation (SNOC)", "Crescent Petroleum", "BUTINAH Marine", "Sharjah Cement", "Sharjah Aluminium (SHARC)", "Hamriyah Free Zone tenants", "Air Arabia MRO", "Etihad Rail Sharjah"],
    regulators: ["Sharjah Economic Development", "Hamriyah Free Zone Authority (HFZA)", "Sharjah Civil Defence", "MOIAT", "UAE FANR radiation"],
    industries: "fabrication, gas processing, aluminium, cement, marine, aerospace MRO" },
  { slug: 'port-harcourt', name: 'Port Harcourt', country: 'Nigeria', lat: 4.8156, lng: 7.0498,
    market: "Niger Delta upstream / refining capital. NNPCL PHRC. Shell SPDC onshore. NLNG Bonny adjacent.",
    operators: ["NNPCL Port Harcourt Refining Company (PHRC)", "Shell SPDC", "Eni AGIP", "TotalEnergies E&P Nigeria onshore", "Indigenous E&Ps (Seplat, Aiteo, Heritage)", "NLNG Bonny Island", "Eleme Petrochemical (Indorama)", "Notore Chemical"],
    regulators: ["NUPRC upstream", "NMDPRA downstream", "NAPIMS", "NIMASA", "NCDMB Nigerian Content", "Rivers State Environment"],
    industries: "onshore oil & gas, refining, petrochemicals, LNG, marine, swamp / shallow-water" },
  { slug: 'edmonton', name: 'Edmonton', country: 'Canada', lat: 53.5461, lng: -113.4938,
    market: "Alberta Industrial Heartland. Imperial Strathcona, Suncor Edmonton, Shell Scotford, NWR Sturgeon refineries.",
    operators: ["Imperial Oil Strathcona refinery", "Suncor Edmonton refinery", "Shell Scotford (refinery + upgrader)", "NWR Sturgeon Refinery", "Inter Pipeline HPC", "Pembina Pipeline", "Dow Fort Saskatchewan", "Nutrien Redwater"],
    regulators: ["ABSA pressure equipment", "AER Alberta Energy Regulator", "CER pipelines", "CSA Group", "Transport Canada radiation", "Alberta OHS"],
    industries: "refining, upgrading, petrochemicals, pipeline midstream, fertilizer" },
  { slug: 'toronto', name: 'Toronto', country: 'Canada', lat: 43.6532, lng: -79.3832,
    market: "Ontario nuclear + steel + mining corporate hub. Bruce, Darlington, Pickering CANDU stations.",
    operators: ["Bruce Power (8-unit CANDU)", "Ontario Power Generation (Darlington, Pickering)", "ArcelorMittal Dofasco (Hamilton)", "Stelco (Hamilton)", "Suncor Sarnia refinery", "Imperial Oil Sarnia", "Nova Chemicals Corunna", "Toronto Pearson MRO"],
    regulators: ["CNSC Canadian Nuclear Safety Commission", "TSSA Ontario", "CSA Group", "ESA Ontario", "Health Canada radiation"],
    industries: "nuclear power, steel, refining (Sarnia), aerospace MRO, mining corporate" },
  { slug: 'vancouver', name: 'Vancouver', country: 'Canada', lat: 49.2827, lng: -123.1207,
    market: "BC Pacific gateway. TMX pipeline + Westridge terminal, Parkland Burnaby refinery, LNG Canada Kitimat upstream.",
    operators: ["Trans Mountain (TMX pipeline)", "Parkland Burnaby refinery", "LNG Canada (Shell-led JV)", "Coastal GasLink (TC Energy)", "Seaspan Shipyards", "BC Ferries", "Teck Resources", "Methanex"],
    regulators: ["Technical Safety BC (TSBC)", "BC Energy Regulator (BCER)", "Transport Canada", "CER Canada Energy Regulator", "WorkSafeBC"],
    industries: "pipeline integrity, LNG construction, marine survey, mining, refining" },
  { slug: 'sao-paulo', name: 'Sao Paulo', country: 'Brazil', lat: -23.5505, lng: -46.6333,
    market: "Brazil industrial powerhouse. Petrobras Replan / Revap refineries. EMBRAER aerospace. Cubatao steel.",
    operators: ["Petrobras (Replan Paulinia, Revap, Cubatao RPBC)", "USIMINAS (Cubatao steel)", "CSN (Volta Redonda)", "EMBRAER (Sao Jose dos Campos)", "Braskem petrochemicals", "Vale mining HQ", "Cosan / Raizen", "Volkswagen do Brasil"],
    regulators: ["ANP", "Ibama environment", "CNEN radiation", "INMETRO accreditation", "Ministerio do Trabalho (NR-13)"],
    industries: "refining, steel, aerospace, petrochemicals, automotive, mining" },
  { slug: 'rio-de-janeiro', name: 'Rio de Janeiro', country: 'Brazil', lat: -22.9068, lng: -43.1729,
    market: "Petrobras upstream offshore capital. Campos / Santos pre-salt FPSOs. REDUC refinery. Acu port.",
    operators: ["Petrobras (Campos / Santos basins, HQ)", "TotalEnergies E&P Brazil", "Equinor Brazil", "Shell Brazil (Mero, Libra)", "PetroRio", "Modec do Brasil FPSO", "SBM Offshore Brazil", "REDUC refinery"],
    regulators: ["ANP", "Ibama", "Marinha do Brasil", "CNEN radiation", "INMETRO", "NR-13 / NR-37"],
    industries: "offshore upstream pre-salt, FPSO life-extension, refining, deepwater" },
  { slug: 'mexico-city', name: 'Mexico City', country: 'Mexico', lat: 19.4326, lng: -99.1332,
    market: "Pemex corporate HQ. CNH regulator. 6 Pemex refineries + Dos Bocas Olmeca new refinery.",
    operators: ["Pemex (corporate + 6 refineries)", "Pemex Exploracion y Produccion", "CFE electricity", "Cemex (cement HQ)", "Grupo BAL", "Grupo Mexico (mining)", "Iberdrola Mexico", "Sempra Energia Costa Azul"],
    regulators: ["CNH Hydrocarbons Commission", "ASEA (SASISOPA)", "STPS (NOM regulations)", "CRE", "EMA accreditation"],
    industries: "refining, upstream, fertilizer / petrochem, electricity, mining, cement" },
  { slug: 'bangkok', name: 'Bangkok', country: 'Thailand', lat: 13.7563, lng: 100.5018,
    market: "PTT Group corporate base. EEC corridor: Map Ta Phut, Rayong refining & petrochemicals.",
    operators: ["PTT Public Company", "Thai Oil (TOP, Sriracha refinery)", "IRPC Rayong refining + petrochemicals", "PTT Global Chemical (Map Ta Phut)", "Bangchak Corporation", "Star Petroleum Refining", "SCG Chemicals", "PTTEP"],
    regulators: ["DOEB Department of Energy Business", "DIW Department of Industrial Works", "TISI Thai Industrial Standards", "OAP Office of Atoms for Peace", "Ministry of Labour"],
    industries: "refining, petrochemicals, EV / electronics supply, gas processing" },
  { slug: 'ho-chi-minh', name: 'Ho Chi Minh City', country: 'Vietnam', lat: 10.8231, lng: 106.6297,
    market: "Vietnam upstream / petrochemical hub. PetroVietnam corporate. Long Son Petrochemicals. Dung Quat / Nghi Son refining.",
    operators: ["PetroVietnam (PVN)", "Vietsovpetro offshore JV", "Long Son Petrochemicals (SCG)", "Binh Son Refining (BSR, Dung Quat)", "Nghi Son Refinery (Idemitsu / Kuwait JV)", "PV Gas", "PV Drilling (PVD)", "Phu My Industrial Park"],
    regulators: ["PetroVietnam vendor approval", "MOIT Ministry of Industry and Trade", "VPI Vietnam Petroleum Institute", "VARANS radiation", "VINAMARINE maritime"],
    industries: "offshore upstream, refining, petrochemicals, LNG import, fabrication" },
];

const CITIES = TIER1_ONLY ? CITIES_TIER1 : [...CITIES_ORIGINAL, ...CITIES_TIER1];

// Per-module x city content builder
function buildContent(module, city) {
  const cityFeatures = [
    ...module.features.slice(0, 6),
    `Tailored for ${city.name} workflow — pre-configured operator templates for ${city.operators.slice(0, 3).join(', ')}`,
    `Regulatory alignment with ${city.regulators.slice(0, 3).join(', ')} — audit-ready evidence packages`,
  ];

  const intro = `${module.intro.split('. ').slice(0, 2).join('. ')}.

For inspection teams operating in ${city.name}, ${city.country}, the ${module.name.toLowerCase()} module is configured against local realities: ${city.market} Pre-built templates support operator-specific quality clauses from ${city.operators.slice(0, 4).join(', ')}, and regulatory frameworks under ${city.regulators.slice(0, 3).join(', ')} are reflected in the workflow defaults. Atlantis NDT ERP is delivered as multi-tenant SaaS with regional data residency — a 5-person ${city.name} inspection contractor and a 200-person multinational both run on the same platform.`;

  const useCases = [
    `A mid-size ${city.name} inspection contractor serving ${city.operators[0]} and ${city.operators[1]} deploys ${module.name.toLowerCase()} as a standalone module — replacing spreadsheets and disconnected SaaS — and reports 60-80% admin-time reduction within 90 days.`,
    `A ${city.name} EPC quality team standardizes ${module.name.toLowerCase()} across 4 simultaneous project sites in the ${city.country} market. Daily reports, audit packages, and customer-format reports flow to ${city.operators[2]} portals automatically.`,
    `A growing ${city.name}-based service provider integrates ${module.name.toLowerCase()} with accounting (QuickBooks / Xero / Tally for India / Sage / Reliance ERP) and the CMMS used by ${city.operators[3]} — eliminating duplicate data entry and reducing customer-facing report turnaround from 5 days to <24 hours.`,
    `A regulator-audit-driven ${city.name} inspection company uses ${module.name.toLowerCase()} to pass ${city.regulators[0]} and ${city.regulators[1]} audits with zero findings — evidence packages assembled in 30 seconds vs. 80+ hours of manual prep.`,
  ];

  const pain = [
    `${module.name} tracked in spreadsheets — always 2 months behind ${city.name} operator-portal requirements`,
    `${city.regulators[0]} audit preparation takes 80+ hours per cycle — finds gaps too late to remediate`,
    `Operator-portal flow-down from ${city.operators[0]} updates monthly — internal procedures lag by weeks`,
    `Customer-format reports for ${city.operators[1]}, ${city.operators[2]}, ${city.operators[3]} require manual reformatting per submission`,
  ];

  const desc = `${module.name} ERP module for inspection companies in ${city.name}, ${city.country}. Pre-configured for ${city.operators.slice(0, 2).join(', ')} and aligned with ${city.regulators.slice(0, 2).join(', ')}. Demo: info@atlantisndt.com.`;

  const faqs = [
    [
      `Is the ${module.name.toLowerCase()} module configured for ${city.name} operators?`,
      `Yes. Pre-loaded operator-specific quality clauses, qualification schemes, and report formats for ${city.operators.slice(0, 5).join(', ')}. Atlantis NDT updates the operator-template library on a quarterly cadence so flow-down stays current with operator specification revisions.`
    ],
    [
      `Does it comply with ${city.regulators[0]} and other ${city.country} regulators?`,
      `Yes. ${city.regulators.slice(0, 4).join(', ')} requirements drive the audit-readiness defaults. Annual + ad-hoc inspections generate audit-package PDFs with full chain-of-custody, personnel qualification matrix, calibration records, and procedure revision history pre-assembled.`
    ],
    [
      `What languages and currencies are supported for ${city.name}?`,
      `Platform supports English (primary), and where relevant for ${city.country}: Arabic (Gulf), Bahasa Indonesia, Hindi/Marathi/Telugu (India), Mandarin (China/SG), Spanish/Portuguese (Americas), French (West Africa/Canada). Invoicing supports USD, EUR, GBP, AED, SAR, INR, SGD, AUD, CAD, IDR, MYR, QAR, NGN — full multi-currency with VAT/GST as applicable.`
    ],
    module.faqs[0],
    module.faqs[1],
  ];

  return { features: cityFeatures, useCases, operators: city.operators, regulators: city.regulators, pain, desc, intro, faqs };
}

const outDir = join(ROOT, 'src/pages/erp-modules');
mkdirSync(outDir, { recursive: true });

let written = 0;
const allCombos = [];
for (const moduleSlug of TOP_MODULES) {
  const module = MODULE_BY_SLUG[moduleSlug];
  if (!module) continue;
  for (const city of CITIES) {
    const c = buildContent(module, city);
    const data = {
      moduleSlug: module.slug,
      moduleName: module.name,
      citySlug: city.slug,
      cityName: city.name,
      country: city.country,
      title: `${module.name} in ${city.name}`,
      desc: c.desc,
      intro: c.intro,
      cityFeatures: c.features,
      cityUseCases: c.useCases,
      cityOperators: c.operators,
      cityRegulators: c.regulators,
      cityPain: c.pain,
      faqs: c.faqs,
      lat: city.lat,
      lng: city.lng,
    };
    const slug = `${module.slug}-${city.slug}`;
    const fname = join(outDir, `${slug}.tsx`);
    const idSafe = slug.replace(/-/g, '_');
    const content = `import ErpModuleCityPage from '@/components/ErpModuleCityPage';
const data = ${JSON.stringify(data, null, 2)};
export default function ErpMC_${idSafe}() { return <ErpModuleCityPage {...data} />; }
`;
    writeFileSync(fname, content);
    allCombos.push({ slug, moduleSlug: module.slug, citySlug: city.slug, title: `${module.name} in ${city.name} | Atlantis NDT ERP`, desc: c.desc });
    written++;
  }
}

console.log(`✓ ${written} module × city pages written`);

// Emit App.tsx patch files
const lazy = allCombos.map(c => `const ErpMC_${c.slug.replace(/-/g, '_')} = lazy(() => import("./pages/erp-modules/${c.slug}"));`).join('\n');
const routes = allCombos.map(c => `                  <Route path="/erp-modules/${c.slug}" element={<LazyRoute Component={ErpMC_${c.slug.replace(/-/g, '_')}} />} />`).join('\n');
const lazyOut = TIER1_ONLY ? '_tier1-modules-lazy.txt' : '_sprint6-lazy.txt';
const routesOut = TIER1_ONLY ? '_tier1-modules-routes.txt' : '_sprint6-routes.txt';
const prerenderOut = TIER1_ONLY ? '_tier1-modules-prerender.json' : '_sprint6-prerender.json';

writeFileSync(join(__dirname, lazyOut), lazy + '\n');
writeFileSync(join(__dirname, routesOut), routes + '\n');

const prerenderEntries = allCombos.map(c => ({
  path: `/erp-modules/${c.slug}`,
  title: c.title,
  description: c.desc,
  bodyH1: c.title,
  bodyText: c.desc,
}));
writeFileSync(join(__dirname, prerenderOut), JSON.stringify(prerenderEntries, null, 2));
console.log(`✓ Patch files written: ${lazyOut}, ${routesOut}, ${prerenderOut}`);
