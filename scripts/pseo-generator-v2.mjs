/**
 * Atlantis NDT - Programmatic SEO Generator v2
 * --------------------------------------------------------------
 * Generates Method × Industry × City landing pages directly as
 * static HTML (one /<slug>/index.html per page) on top of the
 * existing pre-rendered React shell.
 *
 * - Reads dist/index.html as the base shell so Vite assets,
 *   Org/WebSite JSON-LD, and analytics already exist.
 * - Pulls city-specific copy + named facilities + codes from the
 *   ERP city datasets ("Atlantis NDT Extra files/erp-cities*.json").
 * - Selects Top-30 cities × Top-6 methods × Top-6 industries with
 *   industry/city compatibility filtering, capped at 800 pages.
 * - Adds JSON-LD Service schema (areaServed: City, serviceType: Method).
 * - Appends every generated route to public/sitemap-other.xml with
 *   <lastmod>2026-05-09</lastmod>.
 * - Writes the route list to scripts/pseo-v2-routes-2026-05-09.json
 *   for downstream Google Indexing API submission.
 *
 * IMPORTANT: This script is ADDITIVE. It does NOT modify the
 * existing prerender.mjs pSEO loops. Run independently:
 *
 *   node scripts/pseo-generator-v2.mjs
 */

import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const DIST = join(ROOT, 'dist');
const SITE_URL = 'https://atlantisndt.com';
const TODAY = '2026-05-09';
const MAX_PAGES = 800;

// ─── Inputs ────────────────────────────────────────────────────────────────

const CITY_FILES = [
  join(ROOT, 'Atlantis NDT Extra files', 'erp-cities-all-tiers.json'),
  join(ROOT, 'Atlantis NDT Extra files', 'erp-cities.json'),
];

const cityIndex = new Map(); // slug -> city object
for (const path of CITY_FILES) {
  if (!existsSync(path)) continue;
  const raw = JSON.parse(readFileSync(path, 'utf-8'));
  for (const c of raw) {
    if (!cityIndex.has(c.slug)) cityIndex.set(c.slug, c);
  }
}

// Top-30 priority cities (ordered by industry density + global NDT spend).
// Where the ERP dataset doesn't carry the slug we substitute the closest
// covered industrial centre so we still hit a live data row.
const TOP_CITIES = [
  'houston',
  'dubai',
  'singapore',
  'aberdeen',
  'calgary',
  'jubail',         // Saudi East Province petrochem hub
  'doha',
  'riyadh',
  'dhahran',        // Aramco HQ — substitute for Dammam
  'kuwait-city',
  'abu-dhabi',
  'muscat',
  'london',
  'rotterdam',
  'stavanger',
  'bergen',
  'milan',          // substitute for Genoa / Naples
  'antwerp',
  'hamburg',
  'sao-paulo',
  'buenos-aires',
  'coatzacoalcos',  // Mexican Gulf petchem
  'mexico-city',
  'perth',
  'jakarta',
  'kuala-lumpur',
  'ulsan',
  'ras-laffan',
  'yanbu',
  'baytown-substitute', // placeholder filtered below
];

// Replace the placeholder with a real city from the dataset.
const cleanedTopCities = TOP_CITIES.filter(s => cityIndex.has(s));
// Make sure we have 30. If not, top up with the next best industrial centres.
const FALLBACK_CITIES = [
  'baton-rouge', 'beaumont', 'corpus-christi', 'lake-charles',
  'pasadena-tx', 'galveston', 'sarnia', 'pasir-gudang',
  'jurong-island', 'sohar', 'ruwais', 'port-arthur',
];
for (const s of FALLBACK_CITIES) {
  if (cleanedTopCities.length >= 30) break;
  if (cityIndex.has(s) && !cleanedTopCities.includes(s)) cleanedTopCities.push(s);
}
const FINAL_CITIES = cleanedTopCities.slice(0, 30);

// ─── Methods ───────────────────────────────────────────────────────────────

const METHODS = {
  'ut': {
    name: 'Ultrasonic Testing',
    abbr: 'UT',
    codes: ['ASME V Article 4', 'ASME V Article 5', 'ASTM E114', 'ASTM E797', 'ISO 16810'],
    equipment: 'Olympus EPOCH 650, Sonatest Veo+, Krautkramer USM 36',
    detects: 'wall-loss corrosion, mid-wall planar flaws, lamination, hydrogen blisters',
    typicalCmlRate: '160–220 CMLs per technician per day',
  },
  'paut': {
    name: 'Phased Array Ultrasonic Testing',
    abbr: 'PAUT',
    codes: ['ASME V Article 4 Mandatory Appendix VII', 'ISO 13588', 'ASME B31.3 Chapter VI', 'API 1104 Annex C'],
    equipment: 'Olympus OmniScan X3, Eddyfi Gekko, Sonatest WaveMaker',
    detects: 'crack-like planar flaws, lack of fusion, root concavity, complex weld geometry indications',
    typicalCmlRate: '40–80 weld inches per hour with encoded scans',
  },
  'rt': {
    name: 'Radiographic Testing',
    abbr: 'RT',
    codes: ['ASME V Article 2', 'ISO 17636-1 (film)', 'ISO 17636-2 (digital)', 'API 1104 Section 11', 'ASTM E1742'],
    equipment: 'GE Eresco 200 MF / Yxlon SMART 225 X-ray, Ir-192 sources, Carestream HPX-1 CR',
    detects: 'porosity clusters, slag inclusions, lack of penetration, transverse cracks',
    typicalCmlRate: '25–40 girth welds per shift on 6"–12" pipe',
  },
  'mt': {
    name: 'Magnetic Particle Testing',
    abbr: 'MT',
    codes: ['ASME V Article 7', 'ASTM E709', 'ISO 9934-1', 'AWS D1.1 Clause 8.14'],
    equipment: 'Magnaflux Y-7 yokes, Parker DA-400 prods, fluorescent wet-bath benches',
    detects: 'surface and near-surface cracks in ferromagnetic materials, weld toe cracking, casting porosity',
    typicalCmlRate: '120–180 linear feet of weld per hour',
  },
  'pt': {
    name: 'Penetrant Testing',
    abbr: 'PT',
    codes: ['ASME V Article 6', 'ASTM E165', 'ISO 3452-1', 'AWS D1.1 Clause 8.13'],
    equipment: 'Magnaflux Spotcheck SKL/SKD/SKC, Sherwin DP-55, Met-L-Chek VP-30',
    detects: 'surface-breaking cracks in non-ferrous and austenitic materials, weld toe defects, casting porosity',
    typicalCmlRate: '80–140 sq ft per hour with Method C visible dye',
  },
  'et': {
    name: 'Eddy Current Testing',
    abbr: 'ET',
    codes: ['ASME V Article 8', 'ASTM E309', 'ASTM E1571', 'ISO 15549'],
    equipment: 'Olympus MS-5800 / TubePro, Eddyfi Ectane, Zetec MIZ-200',
    detects: 'tube wall pitting in heat exchangers, condenser tube wear, coating thickness, conductive material sorting',
    typicalCmlRate: '300–600 tubes inspected per shift on absolute coil',
  },
};

// ─── Industries ────────────────────────────────────────────────────────────

const INDUSTRIES = {
  'oil-gas': {
    name: 'Oil & Gas',
    nameLong: 'Oil and Gas',
    keyAssets: 'pressure vessels, separators, storage tanks, transmission piping, subsea risers',
    primaryCodes: ['API 510', 'API 570', 'API 653', 'API 580/581 RBI', 'API 579 FFS'],
    typicalScopeNote: 'turnaround inspection campaigns of 4–6 weeks with 24/7 shift coverage',
    aliases: ['oil-gas', 'oilgas', 'refining', 'petchem', 'pipelines', 'offshore-oil-gas'],
  },
  'aerospace': {
    name: 'Aerospace',
    nameLong: 'Aerospace and Aviation',
    keyAssets: 'engine fan blades, composite wing skins, landing gear forgings, titanium fittings',
    primaryCodes: ['NAS 410', 'AS9100', 'AS9110', 'EN 4179', 'FAA AC 43.13', 'Boeing BAC 5980', 'Airbus AITM 6-0008'],
    typicalScopeNote: 'AOG (Aircraft on Ground) call-outs respond inside 4 hours and clear under Part 145 release',
    aliases: ['aerospace', 'aerospace-mro', 'defense', 'aviation'],
  },
  'nuclear': {
    name: 'Nuclear',
    nameLong: 'Nuclear Power',
    keyAssets: 'reactor pressure vessels, steam generator tubing, primary coolant piping, containment liners',
    primaryCodes: ['ASME Section XI', 'ASME III', '10 CFR 50 Appendix B', 'EPRI MRP-227', 'NEI 03-08'],
    typicalScopeNote: 'outage inspection windows of 18–24 days with PDI-qualified procedures and Level III oversight',
    aliases: ['nuclear', 'nuclear-power'],
  },
  'petrochemical': {
    name: 'Petrochemical',
    nameLong: 'Petrochemical and Refining',
    keyAssets: 'fired heaters, FCC reactors, ethylene cracker furnace tubes, alkylation towers, sulphur recovery units',
    primaryCodes: ['API 510', 'API 570', 'API 580/581', 'API 941 Nelson curves', 'ASME B31.3', 'NACE MR0103'],
    typicalScopeNote: 'major turnaround critical-path inspection with tight HAZ creep, HTHA and CUI scopes',
    aliases: ['petrochemical', 'petchem', 'refining', 'chemicals'],
  },
  'power-generation': {
    name: 'Power Generation',
    nameLong: 'Power Generation',
    keyAssets: 'HRSG superheater bundles, boiler waterwalls, turbine rotors, condenser tubing, gas turbine blades',
    primaryCodes: ['ASME Section I', 'ASME B31.1', 'EPRI Boiler Tube Failure', 'EN 12952 (water-tube)', 'NBIC NB-23'],
    typicalScopeNote: 'CT/ST major outage inspection on 8–12 year intervals plus borescope and RVI between outages',
    aliases: ['power-generation', 'power', 'gas-power', 'utilities'],
  },
  'marine': {
    name: 'Marine',
    nameLong: 'Marine and Offshore',
    keyAssets: 'ship hull plating, propeller shafts, ballast tanks, FPSO turret bearings, jack-up legs',
    primaryCodes: ['ABS Rules', 'DNV-OS-C401', 'IACS Rec 47', 'IMO MEPC.1/Circ.673', 'ASNT ANSI/ASNT CP-189'],
    typicalScopeNote: 'class-society renewal surveys on 5-year cycles with continuous machinery and underwater UT thickness',
    aliases: ['marine', 'maritime', 'offshore', 'port-ops'],
  },
};

// ─── Regulator/context lookups by country ──────────────────────────────────

const COUNTRY_CONTEXT = {
  'USA': {
    regulator: 'OSHA, BSEE (offshore) and state PHMSA programs',
    currency: 'USD',
    rateRangeUT: '$1,400–$2,200 per shift per technician',
    rateRangePAUT: '$2,400–$3,800 per encoded weld day',
    rateRangeRT: '$1,800–$3,200 per shot crew day',
    rateRangeMT: '$1,100–$1,800 per shift',
    rateRangePT: '$950–$1,600 per shift',
    rateRangeET: '$2,200–$3,400 per heat-exchanger day',
  },
  'United Arab Emirates': {
    regulator: 'ADNOC HSEIA, EAD and Federal Authority for Nuclear Regulation',
    currency: 'AED',
    rateRangeUT: 'AED 4,500–7,200 per technician day',
    rateRangePAUT: 'AED 9,500–14,500 per encoded weld day',
    rateRangeRT: 'AED 7,500–12,500 per shot crew day',
    rateRangeMT: 'AED 3,800–6,200 per shift',
    rateRangePT: 'AED 3,400–5,600 per shift',
    rateRangeET: 'AED 8,400–12,800 per exchanger day',
  },
  'Saudi Arabia': {
    regulator: 'Saudi Aramco SAEP-1142 / SAES-A-007 and the Ministry of Energy',
    currency: 'SAR',
    rateRangeUT: 'SAR 4,200–6,800 per technician day',
    rateRangePAUT: 'SAR 9,000–13,500 per encoded weld day',
    rateRangeRT: 'SAR 7,500–11,500 per shot crew day',
    rateRangeMT: 'SAR 3,500–5,800 per shift',
    rateRangePT: 'SAR 3,200–5,200 per shift',
    rateRangeET: 'SAR 8,000–12,000 per exchanger day',
  },
  'Qatar': {
    regulator: 'QatarEnergy QP-STD and the Qatar Civil Defence Department',
    currency: 'QAR',
    rateRangeUT: 'QAR 4,500–6,800 per technician day',
    rateRangePAUT: 'QAR 9,500–13,800 per encoded weld day',
    rateRangeRT: 'QAR 7,800–11,800 per shot crew day',
    rateRangeMT: 'QAR 3,800–6,000 per shift',
    rateRangePT: 'QAR 3,400–5,400 per shift',
    rateRangeET: 'QAR 8,400–12,400 per exchanger day',
  },
  'Kuwait': {
    regulator: 'KOC, KIPIC and KNPC inspection standards plus Kuwait EPA',
    currency: 'KWD',
    rateRangeUT: 'KWD 360–560 per technician day',
    rateRangePAUT: 'KWD 780–1,120 per encoded weld day',
    rateRangeRT: 'KWD 620–950 per shot crew day',
    rateRangeMT: 'KWD 290–460 per shift',
    rateRangePT: 'KWD 260–420 per shift',
    rateRangeET: 'KWD 680–1,000 per exchanger day',
  },
  'Oman': {
    regulator: 'Petroleum Development Oman (PDO) SP-1175 and OPAL inspector recognition',
    currency: 'OMR',
    rateRangeUT: 'OMR 450–720 per technician day',
    rateRangePAUT: 'OMR 950–1,400 per encoded weld day',
    rateRangeRT: 'OMR 780–1,180 per shot crew day',
    rateRangeMT: 'OMR 360–580 per shift',
    rateRangePT: 'OMR 320–520 per shift',
    rateRangeET: 'OMR 850–1,250 per exchanger day',
  },
  'United Kingdom': {
    regulator: 'HSE OSDR (offshore), HSE PSR, ONR (nuclear) and Lloyd\'s Register / DNV class',
    currency: 'GBP',
    rateRangeUT: '£1,100–1,750 per technician day',
    rateRangePAUT: '£1,950–2,950 per encoded weld day',
    rateRangeRT: '£1,500–2,400 per shot crew day',
    rateRangeMT: '£900–1,400 per shift',
    rateRangePT: '£800–1,250 per shift',
    rateRangeET: '£1,800–2,750 per exchanger day',
  },
  'Netherlands': {
    regulator: 'SodM (State Supervision of Mines), Lloyd\'s/DNV/Bureau Veritas for marine',
    currency: 'EUR',
    rateRangeUT: '€1,250–1,950 per technician day',
    rateRangePAUT: '€2,200–3,300 per encoded weld day',
    rateRangeRT: '€1,650–2,650 per shot crew day',
    rateRangeMT: '€980–1,550 per shift',
    rateRangePT: '€880–1,400 per shift',
    rateRangeET: '€2,000–3,050 per exchanger day',
  },
  'Norway': {
    regulator: 'Petroleumstilsynet (PSA Norway), Ptil and DNV class',
    currency: 'NOK',
    rateRangeUT: 'NOK 14,500–22,000 per technician day',
    rateRangePAUT: 'NOK 24,500–36,500 per encoded weld day',
    rateRangeRT: 'NOK 19,500–30,500 per shot crew day',
    rateRangeMT: 'NOK 11,500–18,500 per shift',
    rateRangePT: 'NOK 10,500–16,500 per shift',
    rateRangeET: 'NOK 22,500–34,500 per exchanger day',
  },
  'Germany': {
    regulator: 'TÜV (Süd, Nord, Rheinland) and BetrSichV pressure-equipment surveillance',
    currency: 'EUR',
    rateRangeUT: '€1,300–2,000 per technician day',
    rateRangePAUT: '€2,300–3,400 per encoded weld day',
    rateRangeRT: '€1,750–2,750 per shot crew day',
    rateRangeMT: '€1,000–1,580 per shift',
    rateRangePT: '€900–1,420 per shift',
    rateRangeET: '€2,100–3,150 per exchanger day',
  },
  'Italy': {
    regulator: 'INAIL (former ISPESL), MISE and RINA class for marine',
    currency: 'EUR',
    rateRangeUT: '€1,150–1,800 per technician day',
    rateRangePAUT: '€2,050–3,100 per encoded weld day',
    rateRangeRT: '€1,500–2,500 per shot crew day',
    rateRangeMT: '€900–1,440 per shift',
    rateRangePT: '€820–1,310 per shift',
    rateRangeET: '€1,850–2,850 per exchanger day',
  },
  'Belgium': {
    regulator: 'AIB-Vinçotte, Apragaz and FANC (nuclear)',
    currency: 'EUR',
    rateRangeUT: '€1,200–1,900 per technician day',
    rateRangePAUT: '€2,150–3,250 per encoded weld day',
    rateRangeRT: '€1,600–2,600 per shot crew day',
    rateRangeMT: '€950–1,500 per shift',
    rateRangePT: '€860–1,370 per shift',
    rateRangeET: '€1,950–2,950 per exchanger day',
  },
  'Brazil': {
    regulator: 'ANP (oil & gas) and NR-13 pressure-equipment safety norm',
    currency: 'BRL',
    rateRangeUT: 'R$ 5,800–9,200 per technician day',
    rateRangePAUT: 'R$ 11,500–17,500 per encoded weld day',
    rateRangeRT: 'R$ 8,800–14,500 per shot crew day',
    rateRangeMT: 'R$ 4,800–7,800 per shift',
    rateRangePT: 'R$ 4,200–6,800 per shift',
    rateRangeET: 'R$ 10,500–15,800 per exchanger day',
  },
  'Argentina': {
    regulator: 'Secretaría de Energía and IRAM ISO 9712 inspector qualification',
    currency: 'ARS',
    rateRangeUT: 'USD 1,300–2,050 equivalent per technician day',
    rateRangePAUT: 'USD 2,300–3,500 equivalent per encoded weld day',
    rateRangeRT: 'USD 1,750–2,900 equivalent per shot crew day',
    rateRangeMT: 'USD 1,050–1,650 equivalent per shift',
    rateRangePT: 'USD 950–1,500 equivalent per shift',
    rateRangeET: 'USD 2,100–3,200 equivalent per exchanger day',
  },
  'Mexico': {
    regulator: 'ASEA, CNH and NMX-B-468 / NOM pressure-vessel norms',
    currency: 'MXN',
    rateRangeUT: 'MXN 24,000–38,000 per technician day',
    rateRangePAUT: 'MXN 44,000–66,000 per encoded weld day',
    rateRangeRT: 'MXN 34,000–55,000 per shot crew day',
    rateRangeMT: 'MXN 18,000–29,000 per shift',
    rateRangePT: 'MXN 16,000–26,000 per shift',
    rateRangeET: 'MXN 40,000–60,000 per exchanger day',
  },
  'Australia': {
    regulator: 'NOPSEMA (offshore) and AS/NZS 3788 pressure equipment in-service inspection',
    currency: 'AUD',
    rateRangeUT: 'A$ 1,950–3,100 per technician day',
    rateRangePAUT: 'A$ 3,500–5,250 per encoded weld day',
    rateRangeRT: 'A$ 2,750–4,400 per shot crew day',
    rateRangeMT: 'A$ 1,650–2,650 per shift',
    rateRangePT: 'A$ 1,500–2,400 per shift',
    rateRangeET: 'A$ 3,250–4,950 per exchanger day',
  },
  'Indonesia': {
    regulator: 'Migas (Direktorat Jenderal Minyak dan Gas Bumi) and SKK Migas',
    currency: 'IDR',
    rateRangeUT: 'IDR 17–28 juta per technician day',
    rateRangePAUT: 'IDR 32–48 juta per encoded weld day',
    rateRangeRT: 'IDR 25–40 juta per shot crew day',
    rateRangeMT: 'IDR 13–21 juta per shift',
    rateRangePT: 'IDR 12–19 juta per shift',
    rateRangeET: 'IDR 28–43 juta per exchanger day',
  },
  'Malaysia': {
    regulator: 'DOSH Malaysia (Department of Occupational Safety and Health) and PETRONAS PTS',
    currency: 'MYR',
    rateRangeUT: 'RM 5,800–9,200 per technician day',
    rateRangePAUT: 'RM 10,500–15,800 per encoded weld day',
    rateRangeRT: 'RM 8,500–13,800 per shot crew day',
    rateRangeMT: 'RM 4,800–7,800 per shift',
    rateRangePT: 'RM 4,400–7,000 per shift',
    rateRangeET: 'RM 10,000–15,200 per exchanger day',
  },
  'Singapore': {
    regulator: 'Singapore MOM Pressure Vessel Inspection Authority and Maritime and Port Authority',
    currency: 'SGD',
    rateRangeUT: 'S$ 1,750–2,750 per technician day',
    rateRangePAUT: 'S$ 3,150–4,750 per encoded weld day',
    rateRangeRT: 'S$ 2,500–4,000 per shot crew day',
    rateRangeMT: 'S$ 1,450–2,300 per shift',
    rateRangePT: 'S$ 1,300–2,100 per shift',
    rateRangeET: 'S$ 2,900–4,400 per exchanger day',
  },
  'Canada': {
    regulator: 'CNSC (nuclear), Canadian Energy Regulator (pipelines) and ABSA / TSSA pressure vessels',
    currency: 'CAD',
    rateRangeUT: 'C$ 1,650–2,600 per technician day',
    rateRangePAUT: 'C$ 2,950–4,450 per encoded weld day',
    rateRangeRT: 'C$ 2,300–3,700 per shot crew day',
    rateRangeMT: 'C$ 1,400–2,200 per shift',
    rateRangePT: 'C$ 1,250–2,000 per shift',
    rateRangeET: 'C$ 2,750–4,150 per exchanger day',
  },
  'South Korea': {
    regulator: 'KGS (Korea Gas Safety Corporation), KOSHA and KEPIC for nuclear',
    currency: 'KRW',
    rateRangeUT: '₩ 1.6M–2.5M per technician day',
    rateRangePAUT: '₩ 2.8M–4.3M per encoded weld day',
    rateRangeRT: '₩ 2.2M–3.6M per shot crew day',
    rateRangeMT: '₩ 1.3M–2.1M per shift',
    rateRangePT: '₩ 1.2M–1.9M per shift',
    rateRangeET: '₩ 2.6M–3.95M per exchanger day',
  },
};

// Fallback context for any country not enumerated above.
const DEFAULT_COUNTRY_CONTEXT = {
  regulator: 'the local petroleum-, pressure-equipment- or aviation-safety authority',
  currency: 'USD',
  rateRangeUT: '$1,400–$2,200 per technician day',
  rateRangePAUT: '$2,400–$3,800 per encoded weld day',
  rateRangeRT: '$1,800–$3,200 per shot crew day',
  rateRangeMT: '$1,100–$1,800 per shift',
  rateRangePT: '$950–$1,600 per shift',
  rateRangeET: '$2,200–$3,400 per exchanger day',
};

function getCountryContext(country) {
  return COUNTRY_CONTEXT[country] || DEFAULT_COUNTRY_CONTEXT;
}

// ─── Industry/city compatibility ───────────────────────────────────────────
//
// Skip combinations that don't make industrial sense. The city's listed
// industries plus an explicit allow-list per city decide eligibility.
//
// A few cities are obvious anchors for an industry even when not in the
// raw `industries` array (e.g. Houston has aerospace via NASA + Bell + L3),
// so we add a small overlay of explicit additions.

const CITY_INDUSTRY_OVERLAY = {
  'houston': ['oil-gas', 'aerospace', 'petrochemical', 'power-generation', 'marine'],
  'dubai': ['oil-gas', 'aerospace', 'petrochemical', 'power-generation', 'marine'],
  'singapore': ['oil-gas', 'petrochemical', 'marine', 'power-generation', 'aerospace'],
  'aberdeen': ['oil-gas', 'marine', 'power-generation'],
  'calgary': ['oil-gas', 'petrochemical', 'power-generation'],
  'jubail': ['oil-gas', 'petrochemical', 'power-generation', 'marine'],
  'doha': ['oil-gas', 'petrochemical', 'power-generation', 'marine'],
  'riyadh': ['oil-gas', 'petrochemical', 'power-generation', 'aerospace'],
  'dhahran': ['oil-gas', 'petrochemical', 'power-generation', 'aerospace'],
  'kuwait-city': ['oil-gas', 'petrochemical', 'power-generation', 'marine'],
  'abu-dhabi': ['oil-gas', 'petrochemical', 'power-generation', 'marine', 'nuclear', 'aerospace'],
  'muscat': ['oil-gas', 'petrochemical', 'marine', 'power-generation'],
  'london': ['aerospace', 'nuclear', 'power-generation', 'marine'],
  'rotterdam': ['oil-gas', 'petrochemical', 'marine', 'power-generation'],
  'stavanger': ['oil-gas', 'marine', 'power-generation'],
  'bergen': ['oil-gas', 'marine', 'power-generation'],
  'milan': ['aerospace', 'power-generation', 'petrochemical', 'nuclear'],
  'antwerp': ['oil-gas', 'petrochemical', 'marine', 'power-generation'],
  'hamburg': ['marine', 'aerospace', 'power-generation', 'petrochemical'],
  'sao-paulo': ['oil-gas', 'aerospace', 'petrochemical', 'power-generation'],
  'buenos-aires': ['oil-gas', 'petrochemical', 'power-generation', 'aerospace'],
  'coatzacoalcos': ['oil-gas', 'petrochemical', 'marine', 'power-generation'],
  'mexico-city': ['oil-gas', 'aerospace', 'power-generation'],
  'perth': ['oil-gas', 'marine', 'power-generation'],
  'jakarta': ['oil-gas', 'petrochemical', 'marine', 'power-generation'],
  'kuala-lumpur': ['oil-gas', 'petrochemical', 'aerospace', 'power-generation'],
  'ulsan': ['petrochemical', 'marine', 'oil-gas', 'power-generation'],
  'ras-laffan': ['oil-gas', 'petrochemical', 'marine', 'power-generation'],
  'yanbu': ['oil-gas', 'petrochemical', 'marine', 'power-generation'],
};

function isCompatible(citySlug, city, industryKey) {
  const overlay = CITY_INDUSTRY_OVERLAY[citySlug] || [];
  if (overlay.includes(industryKey)) return true;
  const aliases = INDUSTRIES[industryKey].aliases;
  for (const alias of aliases) {
    if ((city.industries || []).includes(alias)) return true;
  }
  return false;
}

// ─── Copy templates ────────────────────────────────────────────────────────
//
// We rotate intro/closing templates by a hash of the slug so two adjacent
// pages don't read identically. Each template uses the same anchor variables
// so substance varies but structure stays consistent (~70% template / 30%
// unique data — within Google's tolerance for programmatic landing pages).

function hashSlug(s) {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = ((h << 5) - h) + s.charCodeAt(i);
  return Math.abs(h);
}

const INTRO_TEMPLATES = [
  ({ method, industry, city }) =>
    `${city.city}'s ${industry.nameLong.toLowerCase()} sector relies on ${method.name.toLowerCase()} (${method.abbr}) inspection to keep ${industry.keyAssets} compliant with ${industry.primaryCodes[0]} and the wider code stack required by operators in ${city.country}.`,
  ({ method, industry, city }) =>
    `Inside ${city.city}'s ${industry.nameLong.toLowerCase()} corridor, ${method.abbr} (${method.name.toLowerCase()}) is the workhorse method on ${industry.keyAssets}. Atlantis NDT delivers ${method.abbr} crews qualified to ${industry.primaryCodes[0]} and ${industry.primaryCodes[1] || industry.primaryCodes[0]}.`,
  ({ method, industry, city }) =>
    `Operators in ${city.city}, ${city.country} face a steady ${industry.nameLong.toLowerCase()} inspection backlog covering ${industry.keyAssets}. Our ${method.name.toLowerCase()} (${method.abbr}) teams plug straight into ${industry.typicalScopeNote} without contractor mobilisation lag.`,
  ({ method, industry, city }) =>
    `${method.name} in ${city.city} is shaped by the city's role as a ${industry.nameLong.toLowerCase()} hub. Atlantis NDT runs ${method.abbr} programs from initial baseline scans through repeat-condition monitoring on ${industry.keyAssets}, all aligned to ${industry.primaryCodes.slice(0, 2).join(' and ')}.`,
  ({ method, industry, city }) =>
    `${city.city}-based ${industry.nameLong.toLowerCase()} owners use ${method.abbr} (${method.name.toLowerCase()}) to extract evidence on ${industry.keyAssets} that survives audit by ${getCountryContext(city.country).regulator}. Atlantis brings ASNT Level III oversight to every campaign.`,
];

const CLOSING_TEMPLATES = [
  ({ city, method, industry }) =>
    `Whether you need a one-shift ${method.abbr} call-out on a single ${industry.keyAssets.split(',')[0].trim()} or a multi-week turnaround inspection across an entire ${industry.nameLong.toLowerCase()} site in ${city.city}, Atlantis NDT mobilises crews and Level III oversight in days, not weeks.`,
  ({ city, method, industry }) =>
    `${city.city} ${industry.nameLong} owners typically engage Atlantis on a 90-day pilot covering one ${method.abbr} scope, then expand to fleet-wide coverage. Reach out to scope your campaign and lock in mobilisation dates.`,
  ({ city, method, industry }) =>
    `Most ${city.city}-based ${industry.nameLong.toLowerCase()} clients start with a single ${method.abbr} workpack — a heat exchanger, a critical weld set, or a turnaround scope — and scale across the rest of their integrity program once they see how the data drops into their CMMS.`,
  ({ city, method, industry }) =>
    `From a single ${method.abbr} workpack in ${city.city} to a regional contract spanning ${city.country}, Atlantis NDT scales the same Level III-led delivery model. Talk to us about your current ${industry.nameLong.toLowerCase()} backlog.`,
  ({ city, method, industry }) =>
    `Get a fixed-price ${method.abbr} scope tailored to your ${city.city} ${industry.nameLong.toLowerCase()} asset list — typically returned within 48 hours of intake.`,
];

function pickTemplate(arr, slug) {
  return arr[hashSlug(slug) % arr.length];
}

// ─── HTML body builder ────────────────────────────────────────────────────

function escapeHtml(s) {
  return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function buildBodyContent({ slug, method, industry, city, ctx }) {
  const intro = pickTemplate(INTRO_TEMPLATES, slug)({ method, industry, city });
  const closing = pickTemplate(CLOSING_TEMPLATES, slug)({ city, method, industry });
  const facilities = (city.namedFacilities || []).slice(0, 5);
  const cityCodes = (city.codes || []).slice(0, 6);
  const rateKey = `rateRange${method.abbr}`;
  const rate = ctx[rateKey] || ctx.rateRangeUT;

  // City fact paragraph — pulls from the dataset's localHook so each page
  // has a unique paragraph without us having to write 700 of them.
  const cityFact = city.localHook
    ? city.localHook.split('. ').slice(0, 3).join('. ') + '.'
    : `${city.city} is a ${city.region || city.country} industrial centre with a substantial ${industry.nameLong.toLowerCase()} footprint.`;

  // Pull the integration / remote-delivery paragraphs straight from the
  // dataset to add more unique text per city without templated boilerplate.
  const integrationFact = city.integrationPainParagraph
    ? city.integrationPainParagraph.split('. ').slice(0, 2).join('. ') + '.'
    : `Inspection findings in ${city.city} typically need to land in operator CMMS such as SAP PM, IBM Maximo, IFS Cloud or Oracle EAM, with structured ${method.abbr} data tied back to asset and circuit IDs.`;

  // Sourced city-specific PAA or feature bullet to round out 800 words
  // without inventing new claims.
  let cityFeatureBullet = '';
  if (Array.isArray(city.featureBullets) && city.featureBullets.length) {
    const idx = hashSlug(slug) % city.featureBullets.length;
    cityFeatureBullet = city.featureBullets[idx];
  }
  let cityPaa = null;
  if (Array.isArray(city.paaQuestions) && city.paaQuestions.length) {
    const idx = hashSlug(slug + 'paa') % city.paaQuestions.length;
    cityPaa = city.paaQuestions[idx];
  }

  const facilitiesList = facilities.length
    ? `<ul>${facilities.map(f => `<li>${escapeHtml(f)}</li>`).join('')}</ul>`
    : `<p>Major ${industry.nameLong.toLowerCase()} operators in ${escapeHtml(city.city)} run multi-site asset bases that benefit from coordinated ${method.abbr} programs.</p>`;

  const codeList = cityCodes.length
    ? `<ul>${cityCodes.map(c => `<li>${escapeHtml(c)}</li>`).join('')}</ul>`
    : `<ul>${industry.primaryCodes.slice(0, 4).map(c => `<li>${escapeHtml(c)}</li>`).join('')}</ul>`;

  const methodCodeList = `<ul>${method.codes.map(c => `<li>${escapeHtml(c)}</li>`).join('')}</ul>`;

  return `
  <main class="pseo-v2-main" style="max-width:960px;margin:0 auto;padding:24px 18px;font-family:system-ui,-apple-system,Segoe UI,Roboto,sans-serif;line-height:1.6;">
    <article>
      <h1>${escapeHtml(method.name)} ${escapeHtml(industry.name)} Inspection in ${escapeHtml(city.city)}, ${escapeHtml(city.country)} 2026</h1>
      <p><strong>${escapeHtml(intro)}</strong></p>

      <section>
        <h2>Why ${escapeHtml(method.abbr)} Matters for ${escapeHtml(industry.name)} Assets in ${escapeHtml(city.city)}</h2>
        <p>${escapeHtml(cityFact)}</p>
        <p>For ${industry.nameLong.toLowerCase()} owners in ${escapeHtml(city.city)}, ${method.abbr} delivers reliable detection of ${escapeHtml(method.detects)}. Productivity on a typical campaign runs ${escapeHtml(method.typicalCmlRate)}, with Atlantis ASNT Level III oversight on every workpack.</p>
      </section>

      <section>
        <h2>Codes &amp; Standards Applied</h2>
        <p>${escapeHtml(method.name)} procedures we run in ${escapeHtml(city.city)} are written and qualified to:</p>
        ${methodCodeList}
        <p>The ${industry.nameLong.toLowerCase()} code stack our inspectors carry on a typical ${escapeHtml(city.city)} campaign includes ${industry.primaryCodes.join(', ')}, plus the city-specific framework documented across ${escapeHtml(city.city)} owner specs:</p>
        ${codeList}
      </section>

      <section>
        <h2>${escapeHtml(industry.name)} Applications We Cover</h2>
        <p>Within ${escapeHtml(city.city)}'s ${industry.nameLong.toLowerCase()} base, ${method.abbr} is applied to ${escapeHtml(industry.keyAssets)}. The dominant scope shape is ${escapeHtml(industry.typicalScopeNote)}.</p>
        <p>Representative ${escapeHtml(city.city)} ${industry.nameLong.toLowerCase()} sites and operators we are configured for:</p>
        ${facilitiesList}
      </section>

      <section>
        <h2>Local Regulatory Context — ${escapeHtml(city.country)}</h2>
        <p>Inspection evidence in ${escapeHtml(city.city)} ultimately satisfies ${escapeHtml(ctx.regulator)}. Reports issued by Atlantis NDT carry the dual-stamp combination of ASNT Level III sign-off and the operator-specific procedure reference required for clean audit closure.</p>
        <p>Our ${escapeHtml(city.city)} crews carry the bilingual procedure binders and digital report packs needed by the regulator, and we maintain pre-qualified mobilisation routes from our regional hubs into ${escapeHtml(city.city)}.</p>
        <p>${escapeHtml(integrationFact)}</p>
        ${cityFeatureBullet ? `<p><em>City-specific scope highlight:</em> ${escapeHtml(cityFeatureBullet)}</p>` : ''}
      </section>

      <section>
        <h2>Atlantis NDT Service Offer in ${escapeHtml(city.city)}</h2>
        <ul>
          <li><strong>Crew composition:</strong> ASNT Level II ${escapeHtml(method.abbr)} technicians backed by Level III remote review on every report.</li>
          <li><strong>Equipment:</strong> ${escapeHtml(method.equipment)}, calibrated to ISO 17025 with traceability records included in deliverables.</li>
          <li><strong>Mobilisation:</strong> 48–72 hours for an ${escapeHtml(city.city)}-based scope; 5–7 days for a fly-in crew on dedicated assets.</li>
          <li><strong>Indicative pricing:</strong> ${escapeHtml(rate)}, all-in including consumables, calibration blocks, and Level III review time.</li>
          <li><strong>Reporting:</strong> Digital report pack within 72 hours of demob, plus structured findings push to the operator's CMMS (SAP PM, IBM Maximo, IFS Cloud, Oracle EAM).</li>
        </ul>
      </section>

      <section>
        <h2>Typical Project Specs for ${escapeHtml(city.city)} ${escapeHtml(industry.name)} Owners</h2>
        <p>${escapeHtml(closing)}</p>
        <p>Most ${escapeHtml(city.city)} engagements include a fixed-price proposal, a clear hold-point matrix, and a Level III-signed procedure pack delivered before mobilisation. We hand the operator a pre-job package with WPS/PQR mapping (where applicable), the calibration block list referenced to the day's scans, the auditable technician credential binder, and a sample of the structured-data export format the CMMS will receive.</p>
        <p>For ${industry.nameLong.toLowerCase()} owners weighing ${method.abbr} against alternative methods on a specific ${escapeHtml(city.city)} asset, our Level III consultants will scope the trade-off in writing — for example, ${method.abbr === 'PAUT' ? 'when encoded PAUT replaces RT to remove the radiation exclusion zone on a live unit' : method.abbr === 'RT' ? 'when RT remains the contractually required method on new construction even where AUT/PAUT is faster' : method.abbr === 'ET' ? 'when ECT/RFEC tube inspection should be paired with IRIS for absolute wall thickness on critical bundles' : `when ${method.abbr} is the right primary method versus a complementary technique on a given ${industry.nameLong.toLowerCase()} asset`}. The output is a defendable method-selection memo carrying ASNT Level III certification.</p>
      </section>

      ${cityPaa ? `<section>
        <h2>Frequently Asked: ${escapeHtml(city.city)} ${escapeHtml(industry.name)} ${escapeHtml(method.abbr)}</h2>
        <h3>${escapeHtml(cityPaa.q)}</h3>
        <p>${escapeHtml(cityPaa.a)}</p>
      </section>` : ''}

      <section>
        <h2>Talk to an ${escapeHtml(city.city)} ${escapeHtml(method.abbr)} Lead</h2>
        <p>For ${escapeHtml(method.abbr)} (${escapeHtml(method.name)}) on ${industry.nameLong.toLowerCase()} assets in ${escapeHtml(city.city)}, ${escapeHtml(city.country)}:</p>
        <p><a href="/contact"><strong>Request a fixed-price ${escapeHtml(method.abbr)} proposal &rarr;</strong></a></p>
        <p>Or call our 24/7 inspection desk: <a href="tel:+12818408969"><strong>+1 (281) 840-8969</strong></a></p>
      </section>

      <section>
        <h2>Related Resources</h2>
        <ul>
          <li><a href="/${escapeHtml(city.slug)}">${escapeHtml(city.city)} NDT services hub</a></li>
          <li><a href="/services/${escapeHtml(method.abbr.toLowerCase())}-inspection">${escapeHtml(method.name)} (${escapeHtml(method.abbr)}) service overview</a></li>
          <li><a href="/industries/${escapeHtml(industry.name.toLowerCase().replace(/[^a-z0-9]+/g, '-'))}">${escapeHtml(industry.name)} NDT industry page</a></li>
          <li><a href="/consulting">NDT consulting (ASNT Level III)</a></li>
          <li><a href="/digital-twins">Digital Twin asset inspection</a></li>
        </ul>
      </section>
    </article>
  </main>`;
}

// ─── HTML shell injection ──────────────────────────────────────────────────

const baseTemplate = readFileSync(join(DIST, 'index.html'), 'utf-8');

function buildJsonLd({ slug, method, industry, city, ctx, canonical }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${canonical}#service`,
    name: `${method.name} ${industry.name} Inspection in ${city.city}`,
    serviceType: `${method.name} (${method.abbr})`,
    description: `Atlantis NDT delivers ${method.name} (${method.abbr}) inspection for ${industry.nameLong.toLowerCase()} assets in ${city.city}, ${city.country}. ASNT Level III oversight, ${method.equipment.split(',')[0]} grade equipment, and ${industry.primaryCodes[0]} compliant deliverables.`,
    provider: {
      '@type': 'Organization',
      '@id': 'https://atlantisndt.com/#organization',
      name: 'Atlantis NDT',
      url: 'https://atlantisndt.com',
      telephone: '+1-281-840-8969',
    },
    areaServed: {
      '@type': 'City',
      name: city.city,
      containedInPlace: {
        '@type': 'Country',
        name: city.country,
      },
    },
    audience: {
      '@type': 'BusinessAudience',
      audienceType: industry.nameLong,
    },
    offers: {
      '@type': 'Offer',
      priceCurrency: ctx.currency,
      description: ctx[`rateRange${method.abbr}`] || ctx.rateRangeUT,
      availability: 'https://schema.org/InStock',
    },
    url: canonical,
  };
}

function injectMeta(html, { title, description, canonical, bodyContent, structuredData }) {
  let out = html;
  const safeTitle = title;
  const safeDesc = description.replace(/"/g, '&quot;');

  out = out.replace(/<title>[^<]*<\/title>/, () => `<title>${safeTitle}</title>`);
  out = out.replace(/<meta name="description"\s+content="[^"]*"\s*\/>/, () => `<meta name="description" content="${safeDesc}" />`);
  // Strip global keywords meta to match prerender.mjs behaviour
  out = out.replace(/\s*<meta\s+name="keywords"[\s\S]*?\/>\s*/, () => '\n  ');

  if (canonical) {
    out = out.replace(/<link rel="canonical" href="[^"]*"\s*\/>/, () => `<link rel="canonical" href="${canonical}" />`);
  }
  out = out.replace(/<meta property="og:title" content="[^"]*"\s*\/>/, () => `<meta property="og:title" content="${safeTitle.replace(/"/g, '&quot;')}" />`);
  out = out.replace(/<meta property="og:description"\s*\n?\s*content="[^"]*"\s*\/>/, () => `<meta property="og:description" content="${safeDesc}" />`);
  out = out.replace(/<meta property="og:url" content="[^"]*"\s*\/>/, () => `<meta property="og:url" content="${canonical}" />`);

  if (structuredData) {
    const sdTag = `  <script type="application/ld+json">${JSON.stringify(structuredData)}</script>`;
    out = out.replace('</head>', `${sdTag}\n</head>`);
  }

  if (bodyContent) {
    // Two shell shapes are possible:
    //  (a) Production build: <div id="root">...</div>\n<script type="module" src="/assets/...">
    //  (b) Pre-build or static-only build: <div id="root">...</div>\n</body>
    // Try (a) first, fall back to (b).
    const before = out;
    out = out.replace(
      /(<div id="root">)[\s\S]*?(<\/div>\s*<script)/,
      (_m, open, close) => `${open}\n${bodyContent}\n${close}`
    );
    if (out === before) {
      out = out.replace(
        /(<div id="root">)[\s\S]*?(<\/div>\s*<\/body>)/,
        (_m, open, close) => `${open}\n${bodyContent}\n${close}`
      );
    }
  }
  return out;
}

function writeRoute(routePath, html) {
  const segments = routePath.replace(/^\//, '').split('/');
  const dir = join(DIST, ...segments);
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, 'index.html'), html, 'utf-8');
}

// ─── Build the matrix and emit pages ───────────────────────────────────────

const methodKeys = ['ut', 'paut', 'rt', 'mt', 'pt', 'et'];
const industryKeys = ['oil-gas', 'aerospace', 'nuclear', 'petrochemical', 'power-generation', 'marine'];

const generated = [];
const skipped = [];
const seenSlugs = new Set();

for (const citySlug of FINAL_CITIES) {
  const city = cityIndex.get(citySlug);
  if (!city) { skipped.push({ citySlug, reason: 'city-not-found' }); continue; }
  const ctx = getCountryContext(city.country);

  for (const industryKey of industryKeys) {
    if (!isCompatible(citySlug, city, industryKey)) {
      skipped.push({ citySlug, industryKey, reason: 'industry-incompatible' });
      continue;
    }
    const industry = INDUSTRIES[industryKey];

    for (const methodKey of methodKeys) {
      const method = METHODS[methodKey];
      const slug = `${methodKey}-${industryKey}-${citySlug}`;
      if (seenSlugs.has(slug)) continue;
      if (generated.length >= MAX_PAGES) break;

      const routePath = `/${slug}`;
      const canonical = `${SITE_URL}${routePath}`;

      // Title (≤ 65 chars target — tolerable up to ~70)
      const title = `${method.abbr} ${industry.name} Inspection ${city.city} 2026 — ASNT Level III`;
      const description = `${method.name} (${method.abbr}) on ${industry.nameLong.toLowerCase()} assets in ${city.city}, ${city.country}. ASNT Level III, ${industry.primaryCodes[0]} compliant, mobilise in 48–72 hrs. Get a fixed-price proposal.`.slice(0, 158);

      const bodyContent = buildBodyContent({ slug, method, industry, city, ctx });
      const structuredData = buildJsonLd({ slug, method, industry, city, ctx, canonical });
      const html = injectMeta(baseTemplate, { title, description, canonical, bodyContent, structuredData });
      writeRoute(routePath, html);

      seenSlugs.add(slug);
      generated.push({ slug, routePath, canonical, city: city.city, country: city.country, method: method.abbr, industry: industry.name });
    }
    if (generated.length >= MAX_PAGES) break;
  }
  if (generated.length >= MAX_PAGES) break;
}

// ─── Save route list ───────────────────────────────────────────────────────

const routesPath = join(__dirname, 'pseo-v2-routes-2026-05-09.json');
writeFileSync(routesPath, JSON.stringify({
  generatedAt: TODAY,
  count: generated.length,
  citiesUsed: FINAL_CITIES,
  methodsUsed: methodKeys.map(k => METHODS[k].abbr),
  industriesUsed: industryKeys.map(k => INDUSTRIES[k].name),
  routes: generated,
  skippedCount: skipped.length,
}, null, 2), 'utf-8');

// ─── Append to sitemap-other.xml ───────────────────────────────────────────

const sitemapPath = join(ROOT, 'public', 'sitemap-other.xml');
const distSitemapPath = join(DIST, 'sitemap-other.xml');
let sitemap = readFileSync(sitemapPath, 'utf-8');

// Strip any prior pSEO-v2 block first so re-runs are idempotent
const BEGIN = '<!-- pSEO v2 block — auto-generated by pseo-generator-v2.mjs — DO NOT HAND-EDIT -->';
const END = '<!-- end pSEO v2 block -->';
const blockRe = new RegExp(`\\s*${BEGIN.replace(/[.*+?^${}()|[\\]\\\\]/g, '\\$&')}[\\s\\S]*?${END.replace(/[.*+?^${}()|[\\]\\\\]/g, '\\$&')}`, 'g');
sitemap = sitemap.replace(blockRe, '');

const sitemapEntries = generated.map(g =>
  `  <url>\n    <loc>${g.canonical}</loc>\n    <lastmod>${TODAY}</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>0.65</priority>\n  </url>`
).join('\n');

const block = `\n  ${BEGIN}\n${sitemapEntries}\n  ${END}\n`;
// Insert before closing </urlset>
sitemap = sitemap.replace(/<\/urlset>\s*$/, `${block}</urlset>\n`);

writeFileSync(sitemapPath, sitemap, 'utf-8');
writeFileSync(distSitemapPath, sitemap, 'utf-8');

// ─── Report ───────────────────────────────────────────────────────────────

console.log('========================================');
console.log('pSEO Generator v2 — completed');
console.log('========================================');
console.log(`Cities used:        ${FINAL_CITIES.length}`);
console.log(`Methods used:       ${methodKeys.length} (${methodKeys.map(k => METHODS[k].abbr).join(', ')})`);
console.log(`Industries used:    ${industryKeys.length} (${industryKeys.map(k => INDUSTRIES[k].name).join(', ')})`);
console.log(`Pages generated:    ${generated.length}`);
console.log(`Combos skipped:     ${skipped.length}`);
console.log(`Routes JSON:        ${routesPath}`);
console.log(`Sitemap updated:    ${sitemapPath}`);
console.log(`Sitemap (dist):     ${distSitemapPath}`);
console.log('Sample routes:');
for (const g of generated.slice(0, 5)) console.log(`  ${g.routePath}`);
