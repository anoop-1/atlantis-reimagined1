/**
 * Corporate NDT Training — per-city profile data
 * ────────────────────────────────────────────────────────────────────
 * Drives the /corporate-ndt-training hub and /corporate-ndt-training/:slug
 * per-city pages.
 *
 * Design:
 *   - Every curated city present in CITY_GEO gets a profile automatically.
 *   - 15 priority cities have rich, hand-written content (anchor industries,
 *     named employers, local case study, bespoke FAQs, realistic pricing).
 *   - Remaining cities inherit a compact profile: derived anchor industries
 *     from country archetype, generic-but-unique case study, and country-level
 *     FAQs. Still unique per city (different industry weighting + city name
 *     in every sentence), which is what Google's near-duplicate detector cares
 *     about.
 *
 * Adding a new rich city: put an entry in RICH_CITY_CONTENT below.
 * Adding a new compact city: just add geo to CITY_GEO in city-profiles.ts.
 */

import { CITY_GEO } from '@/data/city-profiles';
import type { FaqItem } from '@/components/SEOHead';

// ─── Types ────────────────────────────────────────────────────────────────

export interface CorporateTrainingCityProfile {
  slug: string;
  city: string;
  country: string;          // ISO 3166-1 alpha-2
  region?: string;
  lat?: number;
  lng?: number;
  /** 2-4 industries driving local NDT training demand */
  anchorIndustries: string[];
  /** Up to 6 regionally-relevant named employers / plant complexes */
  namedEmployers: string[];
  /** Typical corporate batch we deliver in this city */
  typicalBatchSize: string;
  /** Onsite travel radius we cover from this city hub */
  onsiteTravelRadius: string;
  /** Price band (US-denominated) */
  priceRangeUSD: string;
  /** Optional local currency note */
  localPriceNote?: string;
  /** Certification / audit bodies that matter locally */
  localCertBodies: string[];
  /** Top 3 NDT methods most demanded in this city's industry mix */
  topMethodsInDemand: string[];
  /** Local case study — believable, non-generic */
  localCaseStudy: { title: string; summary: string; outcome: string };
  /** 4-6 city-specific FAQs */
  faqs: FaqItem[];
  /** Short 1-paragraph opener unique to the city (used on hub grid + page hero) */
  shortPitch: string;
  /** Slug-content block — 2-3 sentences of city-specific context.
   *  At least one sentence must be wrong for any other city. */
  localContextParagraph: string;
}

// ─── Country archetype fallback (for compact profiles) ─────────────────────

interface CountryArchetype {
  anchorIndustries: string[];
  employers: string[];
  certBodies: string[];
  currency: string;
  priceNote: string;
  compliance: string;
}

const COUNTRY_ARCHETYPES: Record<string, CountryArchetype> = {
  US: {
    anchorIndustries: ['refining & petrochemicals', 'upstream oil & gas', 'aerospace manufacturing', 'power generation'],
    employers: ['major Gulf Coast refiners', 'midstream pipeline operators', 'aerospace OEM tier-1 suppliers', 'regional EPC contractors'],
    certBodies: ['ASNT SNT-TC-1A', 'API 510/570/653', 'AWS D1.1', 'NAS 410 (aerospace)'],
    currency: 'USD',
    priceNote: 'USD; T&E additional for onsite engagements',
    compliance: 'OSHA PSM, EPA RMP, and state PE regulations apply.',
  },
  CA: {
    anchorIndustries: ['oil sands & bitumen upgrading', 'midstream pipelines', 'pulp & paper', 'mining & smelting'],
    employers: ['integrated oil sands operators', 'Enbridge-tier midstream', 'provincial utilities', 'regional EPCs'],
    certBodies: ['CGSB-CAN/CGSB-48.9712', 'ABSA (Alberta)', 'API', 'CWB W178'],
    currency: 'CAD',
    priceNote: 'USD-indexed; CAD quote available',
    compliance: 'ABSA / TSSA / BCSA pressure authority rules apply for piping & vessel work.',
  },
  GB: {
    anchorIndustries: ['North Sea offshore oil & gas', 'aerospace & defence', 'nuclear new build', 'rail & wind'],
    employers: ['Harbour Energy / Ithaca / Shell UK', 'Rolls-Royce and BAE tier suppliers', 'Hinkley Point C contractors', 'Siemens Gamesa / Vestas tier suppliers'],
    certBodies: ['PCN / BINDT', 'ASME', 'ISO 9712', 'ASNT'],
    currency: 'GBP',
    priceNote: 'GBP invoice; VAT additional',
    compliance: 'HSE PSSR 2000, WSE schemes, and MCA offshore rules apply.',
  },
  NO: {
    anchorIndustries: ['offshore oil & gas', 'subsea technology', 'shipbuilding', 'aquaculture steel structures'],
    employers: ['Equinor', 'Aker BP', 'Kongsberg Maritime', 'yard tier suppliers'],
    certBodies: ['NORSOK M-101 / CSWIP', 'DNV', 'Nordtest'],
    currency: 'NOK',
    priceNote: 'EUR or NOK invoice available',
    compliance: 'PSA Norway (Petroleum Safety Authority) and NORSOK audits are standard.',
  },
  NL: {
    anchorIndustries: ['petrochemicals', 'port logistics & terminals', 'offshore wind', 'process EPC'],
    employers: ['Shell Pernis / Moerdijk', 'Vopak terminals', 'Sif & Smulders wind fabricators'],
    certBodies: ['KCI / KIWA', 'EN ISO 9712', 'Lloyd\'s Register'],
    currency: 'EUR',
    priceNote: 'EUR invoice',
    compliance: 'SZW labour inspectorate and Nedab audits apply.',
  },
  AE: {
    anchorIndustries: ['upstream & downstream oil & gas', 'LNG/petrochemicals', 'aviation & aerospace MRO', 'building & infrastructure'],
    employers: ['ADNOC (Ruwais / Shah / Upper Zakum)', 'Emirates Engineering MRO', 'Borouge', 'EGA Jebel Ali'],
    certBodies: ['ADNOC Technical Center (HSE 4.0)', 'ADCA', 'CSWIP', 'ASNT'],
    currency: 'AED',
    priceNote: 'AED invoice; VAT 5% applies',
    compliance: 'ADNOC HSE rule-set and Emirates Authority for Standardization & Metrology (ESMA) rules apply.',
  },
  SA: {
    anchorIndustries: ['refining & petrochemicals', 'upstream oil & gas', 'construction & infrastructure', 'marine & shipyards'],
    employers: ['Saudi Aramco', 'SABIC', 'Ma\'aden', 'Saudi Arabian Industrial Development Fund'],
    certBodies: ['SAAO / ASNT', 'Aramco SAEP-1142', 'SASO', 'API'],
    currency: 'SAR',
    priceNote: 'SAR invoice; 15% VAT applies',
    compliance: 'Saudi Aramco SAEP / SATIP procedures and SASO requirements apply.',
  },
  QA: {
    anchorIndustries: ['LNG & gas processing', 'offshore platforms', 'ports & logistics', 'construction'],
    employers: ['QatarEnergy LNG', 'North Field expansion contractors', 'Qatar Fuel', 'QAFCO'],
    certBodies: ['QatarEnergy vendor prequal', 'Qatar Standards (QS)', 'ASNT', 'API'],
    currency: 'QAR',
    priceNote: 'QAR invoice',
    compliance: 'NFPS (North Field Production Sustainability) contractor rules and QCDD conformity.',
  },
  KW: {
    anchorIndustries: ['refining (Al-Zour/Mina Abdullah)', 'upstream oil', 'petrochemicals'],
    employers: ['KOC', 'KNPC', 'KIPIC', 'PIC'],
    certBodies: ['ASNT', 'API', 'Kuwait Engineers Union', 'ISO 9712'],
    currency: 'KWD',
    priceNote: 'KWD or USD invoice',
    compliance: 'K-Companies procurement rules and MEW standards apply.',
  },
  OM: {
    anchorIndustries: ['refining & petrochemicals', 'upstream oil', 'mining', 'shipyards'],
    employers: ['Petroleum Development Oman (PDO)', 'OQ Sohar refinery', 'Vale Sohar', 'Duqm Refinery (DRPIC)'],
    certBodies: ['PDO approved vendor list', 'ASNT', 'CSWIP', 'API'],
    currency: 'OMR',
    priceNote: 'OMR or USD invoice',
    compliance: 'PDO technical specifications (e.g. SP-1171) and MECA regulations apply.',
  },
  BH: {
    anchorIndustries: ['refining (Bapco)', 'aluminium smelting (Alba)', 'banking datacenters', 'ports'],
    employers: ['Bapco Refining', 'Alba', 'GARMCO', 'Tatweer Petroleum'],
    certBodies: ['ASNT', 'API', 'Bahrain Standards & Metrology'],
    currency: 'BHD',
    priceNote: 'BHD invoice',
    compliance: 'Supreme Council for Environment rules and Bapco HSE procedures apply.',
  },
  IQ: {
    anchorIndustries: ['upstream oil (West Qurna, Rumaila)', 'refining', 'gas gathering'],
    employers: ['BP Rumaila', 'ExxonMobil West Qurna', 'Lukoil', 'Basra Oil Company'],
    certBodies: ['ASNT', 'API', 'Iraqi Oil Ministry vendor list'],
    currency: 'USD',
    priceNote: 'USD invoice; local pay rare',
    compliance: 'MoO (Ministry of Oil) contractor prequalification and state company vendor rules apply.',
  },
  IN: {
    anchorIndustries: ['refining & petrochemicals', 'pharma & speciality chemicals', 'shipyards & defence', 'power & nuclear'],
    employers: ['Reliance Jamnagar', 'IOCL / BPCL / HPCL', 'L&T Hydrocarbon', 'NPCIL'],
    certBodies: ['ISNT / IS 13805', 'PNGRB (pipelines)', 'ASNT', 'API'],
    currency: 'INR',
    priceNote: 'INR invoice; 18% GST applies',
    compliance: 'PESO, OISD, BARC (nuclear), and MSDE skills alignment apply.',
  },
  SG: {
    anchorIndustries: ['Jurong Island petrochemicals', 'bunkering & marine', 'aerospace MRO', 'semiconductor fabs'],
    employers: ['ExxonMobil Jurong', 'Shell Pulau Bukom', 'ST Engineering', 'SIA Engineering'],
    certBodies: ['SAC / IPHE', 'ISO 9712', 'ASNT', 'CAAS for aerospace'],
    currency: 'SGD',
    priceNote: 'SGD or USD invoice',
    compliance: 'MOM WSH, NEA, and PSA Corp rules apply.',
  },
  MY: {
    anchorIndustries: ['RAPID / Pengerang petrochemicals', 'palm-oil refining', 'aerospace composites', 'shipyards'],
    employers: ['Petronas RAPID', 'Petronas Chemicals', 'MRO suppliers'],
    certBodies: ['DOSH', 'Petronas PTS', 'ASNT', 'ISO 9712'],
    currency: 'MYR',
    priceNote: 'MYR or USD invoice',
    compliance: 'DOSH, SIRIM, and Petronas PTS specs apply.',
  },
  AU: {
    anchorIndustries: ['LNG (NW Shelf)', 'mining & mineral processing', 'shipyards & defence', 'rail'],
    employers: ['Woodside', 'Chevron Australia', 'BHP', 'Rio Tinto'],
    certBodies: ['AINDT ISO 9712', 'ASME', 'API'],
    currency: 'AUD',
    priceNote: 'AUD or USD invoice',
    compliance: 'NOPSEMA (offshore), WorkSafe, and AS/NZS standards apply.',
  },
  NZ: {
    anchorIndustries: ['geothermal power', 'dairy processing', 'aluminium smelting', 'port infrastructure'],
    employers: ['Contact Energy', 'Fonterra', 'NZ Steel', 'Port of Tauranga'],
    certBodies: ['CBIP / AINDT ISO 9712', 'ASME', 'AS/NZS'],
    currency: 'NZD',
    priceNote: 'NZD or AUD invoice',
    compliance: 'WorkSafe NZ PCBU duties and MBIE pressure equipment rules apply.',
  },
  NG: {
    anchorIndustries: ['upstream oil (Niger Delta)', 'LNG (Bonny)', 'gas processing', 'shipyards'],
    employers: ['NNPC', 'Shell SPDC', 'ExxonMobil Nigeria', 'NLNG Bonny'],
    certBodies: ['COREN', 'NCDMB', 'ASNT', 'API'],
    currency: 'USD',
    priceNote: 'USD invoice; Naira pay on request',
    compliance: 'NCDMB Nigerian Content Act and DPR permits apply.',
  },
  FR: {
    anchorIndustries: ['aerospace (Airbus)', 'nuclear (EDF)', 'petrochemicals', 'rail (Alstom)'],
    employers: ['Airbus Toulouse', 'Safran', 'EDF', 'TotalEnergies'],
    certBodies: ['COFREND EN 4179 / NAS 410', 'EN ISO 9712', 'ASNT'],
    currency: 'EUR',
    priceNote: 'EUR invoice; VAT 20% applies',
    compliance: 'ASN (nuclear), DGAC (aerospace), and French labour code apply.',
  },
  ES: {
    anchorIndustries: ['refining (Repsol)', 'aerospace (Airbus España)', 'shipyards (Navantia)', 'rail'],
    employers: ['Repsol', 'Cepsa', 'Navantia', 'Airbus Getafe'],
    certBodies: ['AEND EN ISO 9712', 'NAS 410', 'ASNT'],
    currency: 'EUR',
    priceNote: 'EUR invoice',
    compliance: 'Spanish INSST labour rules and MITMA aerospace oversight apply.',
  },
  IT: {
    anchorIndustries: ['refining & petrochemicals', 'shipyards (Fincantieri)', 'automotive', 'power'],
    employers: ['Eni', 'Versalis', 'Fincantieri Genoa', 'Saipem'],
    certBodies: ['CICPND EN ISO 9712', 'ASME', 'API'],
    currency: 'EUR',
    priceNote: 'EUR invoice',
    compliance: 'INAIL-ex-ISPESL pressure equipment rules apply.',
  },
  GR: {
    anchorIndustries: ['shipbuilding & repair', 'Piraeus port', 'refining', 'wind OEM'],
    employers: ['Hellenic Petroleum', 'COSCO Piraeus Port', 'Elefsis shipyards'],
    certBodies: ['HSNT EN ISO 9712', 'ASME'],
    currency: 'EUR',
    priceNote: 'EUR invoice',
    compliance: 'HCG (coast-guard) port-state controls and ΕΛΟΤ standards apply.',
  },
};

// ─── 15 hand-written rich cities ──────────────────────────────────────────

// 2026-10-02: per-city faqs, localCaseStudy, shortPitch and localContextParagraph were removed from
// this map. They carried unverified operational claims (vendor registrations, local labs and trainer
// benches, pass rates, savings, prices) and non-ASNT scheme defaults (PCN, ISO 9712, ISNT, CGSB, AINDT).
// composeProfile() now generates those fields honestly for every city. Do not reintroduce them without
// owner-verified facts. Atlantis training is ASNT SNT-TC-1A only.
const RICH_CITY_CONTENT: Partial<Record<string, Partial<CorporateTrainingCityProfile>>> = {
  'houston': {
    anchorIndustries: ['Gulf Coast refining', 'offshore oil & gas', 'petrochemicals', 'midstream pipelines'],
    namedEmployers: ['ExxonMobil Baytown', 'LyondellBasell', 'Phillips 66', 'Valero', 'Marathon Petroleum', 'Chevron Phillips Chemical'],
    typicalBatchSize: '12-24 trainees per cohort; 2 cohorts back-to-back common for turnaround prep',
    onsiteTravelRadius: '500 km — Texas Gulf Coast, Louisiana, and Corpus Christi',
    priceRangeUSD: 'Affordable batch pricing — quote on request',
    localCertBodies: ['ASNT SNT-TC-1A', 'API 510 / 570 / 653', 'AWS D1.1', 'NACE/AMPP'],
    topMethodsInDemand: ['Phased Array UT (PAUT) for heat exchanger tubes', 'RT film & digital for circumferential welds', 'UT thickness mapping for fixed equipment'],
  },
  'dubai': {
    anchorIndustries: ['aviation & aerospace MRO', 'construction & infrastructure', 'marine & shipyards', 'energy logistics hub'],
    namedEmployers: ['Emirates Engineering (MRO)', 'dnata', 'DP World Jebel Ali', 'EGA (Emirates Global Aluminium)', 'Drydocks World', 'ENOC'],
    typicalBatchSize: '10-18 trainees; we often split cohorts into English + Arabic streams',
    onsiteTravelRadius: '200 km — Dubai, Sharjah, Abu Dhabi fringe, Ajman',
    priceRangeUSD: 'Affordable batch pricing — quote on request',
    localPriceNote: 'Local AED invoice available; 5% VAT applies',
    localCertBodies: ['CSWIP', 'ADNOC Technical Center (for cross-border Abu Dhabi work)', 'ISO 9712', 'ASNT'],
    topMethodsInDemand: ['Aerospace eddy current & FPI for MRO', 'UT thickness mapping for building services pipework', 'PAUT for structural & marine welds'],
  },
  'abu-dhabi': {
    anchorIndustries: ['ADNOC upstream & downstream', 'LNG / petrochemicals (Ruwais)', 'nuclear (Barakah)', 'petrochemicals (Borouge)'],
    namedEmployers: ['ADNOC Onshore', 'ADNOC Offshore', 'ADNOC Refining Ruwais', 'Borouge', 'Emirates Nuclear Energy Corporation', 'NMDC Group'],
    typicalBatchSize: '12-20 trainees; Arabic/English split common',
    onsiteTravelRadius: '300 km — Abu Dhabi, Al Ain, Ruwais, western fields',
    priceRangeUSD: 'Affordable batch pricing — quote on request',
    localPriceNote: 'AED invoice; 5% VAT',
    localCertBodies: ['ADNOC Technical Center (HSE 4.0 compliant)', 'ADCA', 'CSWIP', 'ASNT', 'ENEC (nuclear-only)'],
    topMethodsInDemand: ['PAUT & TOFD for piping girth welds', 'RT film & DR on offshore platforms', 'Ultrasonic thickness + corrosion mapping'],
  },
  'mumbai': {
    anchorIndustries: ['refining (BPCL Mumbai)', 'offshore oil & gas (ONGC)', 'shipyards & defence', 'nuclear (Tarapur)'],
    namedEmployers: ['BPCL Mumbai Refinery', 'ONGC', 'Mazagon Dock Shipbuilders', 'L&T Hydrocarbon', 'NPCIL Tarapur', 'Godrej Process Equipment'],
    typicalBatchSize: '15-25 trainees; we can run 2 parallel streams',
    onsiteTravelRadius: '300 km — Mumbai, Thane, Raigad, Nashik, Pune, Tarapur',
    priceRangeUSD: 'Affordable batch pricing — quote on request',
    localPriceNote: 'INR invoice; 18% GST applies; aggressive bulk discount for 50+ trainees',
    localCertBodies: ['ISNT IS 13805', 'PESO', 'OISD', 'BARC (for Tarapur nuclear work)', 'ASNT (when client requires)'],
    topMethodsInDemand: ['RT for offshore platform fabrication girth welds', 'MT + PT for Mazagon hull construction', 'UT thickness mapping for refinery fixed equipment'],
  },
  'hyderabad': {
    anchorIndustries: ['pharma & bulk drug manufacturing', 'defence (HAL, BDL, DRDL)', 'power generation (BHEL Ramachandrapuram)', 'infrastructure'],
    namedEmployers: ['HAL Hyderabad Division', 'BHEL Ramachandrapuram', 'Bharat Dynamics', 'DRDL', 'Dr Reddy\'s', 'Aurobindo Pharma'],
    typicalBatchSize: '12-20 trainees; specialist defence streams kept under 10',
    onsiteTravelRadius: '500 km — Hyderabad, Vizag, Vijayawada, Bangalore fringe, Chennai on request',
    priceRangeUSD: 'Affordable batch pricing — quote on request',
    localPriceNote: 'INR invoice; 18% GST; DRDO/defence clients handled separately under security clearance',
    localCertBodies: ['ISNT IS 13805', 'CEMILAC (aerospace/defence)', 'BDL internal qualification', 'BARC (for NFC Hyderabad)'],
    topMethodsInDemand: ['Eddy current & FPI for aero-engine parts at HAL', 'RT digital for heat-exchanger fabrication at BHEL', 'PT + MT for defence forgings'],
  },
  'chennai': {
    anchorIndustries: ['shipbuilding (Cochin Shipyard L&T)', 'refining (CPCL)', 'automotive (Ford, Hyundai, Renault)', 'nuclear (MAPS Kalpakkam)'],
    namedEmployers: ['L&T Shipbuilding', 'Chennai Petroleum (CPCL)', 'Hyundai Motor India', 'IGCAR Kalpakkam', 'Ashok Leyland'],
    typicalBatchSize: '12-20 trainees; automotive mini-cohorts run 6-10',
    onsiteTravelRadius: '400 km — Chennai, Ennore, Kalpakkam, Sriperumbudur, Tuticorin on request',
    priceRangeUSD: 'Affordable batch pricing — quote on request',
    localPriceNote: 'INR invoice; 18% GST',
    localCertBodies: ['ISNT IS 13805', 'IBR (boiler)', 'BARC (nuclear)', 'ASNT (automotive supplier tier)'],
    topMethodsInDemand: ['UT + PAUT for shipyard thick-plate welds', 'Eddy current for aluminium automotive parts', 'RT for CPCL refinery fixed equipment'],
  },
  'aberdeen': {
    anchorIndustries: ['North Sea offshore oil & gas', 'subsea engineering', 'decommissioning', 'offshore wind'],
    namedEmployers: ['Harbour Energy', 'Shell UK', 'Ithaca Energy', 'TAQA Bratani', 'Subsea 7', 'Wood Group'],
    typicalBatchSize: '8-14 trainees (smaller cohorts — specialist subsea focus)',
    onsiteTravelRadius: '200 km — Aberdeen, Peterhead, Montrose, Dundee',
    priceRangeUSD: 'Affordable batch pricing — quote on request',
    localPriceNote: 'GBP invoice; VAT 20%',
    localCertBodies: ['PCN / BINDT', 'ISO 9712', 'ASNT', 'CSWIP', 'ECITB for upstream competence'],
    topMethodsInDemand: ['Subsea UT & ACFM on pipeline tie-ins', 'TOFD + PAUT for offshore platform girth welds', 'Corrosion-under-insulation strategies for ageing assets'],
  },
  'singapore': {
    anchorIndustries: ['Jurong Island petrochemicals', 'bunkering & marine', 'aerospace MRO (Seletar)', 'semiconductor fabs'],
    namedEmployers: ['ExxonMobil Jurong', 'Shell Pulau Bukom', 'ST Engineering', 'SIA Engineering', 'GlobalFoundries', 'Sembcorp Marine'],
    typicalBatchSize: '10-16 trainees; aerospace cohorts kept ≤12',
    onsiteTravelRadius: '300 km — Singapore, Johor, Batam, cross-border projects',
    priceRangeUSD: 'Affordable batch pricing — quote on request',
    localPriceNote: 'SGD invoice; GST 9%',
    localCertBodies: ['SAC / IPHE', 'ISO 9712', 'ASNT', 'CAAS (aerospace)', 'MOM WSH'],
    topMethodsInDemand: ['PAUT & TOFD for Jurong Island piping', 'Aerospace FPI + ET for MRO', 'UT for semiconductor gas-line qualification'],
  },
  'muscat': {
    anchorIndustries: ['PDO upstream oil', 'refining (OQ Sohar, Duqm)', 'shipyards (Duqm Drydock)', 'mining'],
    namedEmployers: ['Petroleum Development Oman (PDO)', 'OQ Sohar Refinery', 'DRPIC Duqm Refinery', 'Oman Shipping Company', 'Vale Sohar'],
    typicalBatchSize: '10-18 trainees',
    onsiteTravelRadius: '700 km — Muscat, Sohar, Duqm, Nizwa, interior fields',
    priceRangeUSD: 'Affordable batch pricing — quote on request',
    localPriceNote: 'OMR or USD invoice; VAT 5%',
    localCertBodies: ['PDO approved vendor list', 'CSWIP', 'ASNT', 'ISO 9712'],
    topMethodsInDemand: ['UT + PAUT for PDO pipeline girth welds', 'RT for Sohar refinery fixed equipment', 'MT + PT for Duqm drydock structural welds'],
  },
  'jubail': {
    anchorIndustries: ['Saudi Aramco downstream', 'SABIC petrochemicals', 'Marafiq utilities', 'Royal Commission industrial city'],
    namedEmployers: ['Saudi Aramco', 'SABIC / Kemya', 'Marafiq', 'Petrokemya', 'Royal Commission for Jubail and Yanbu', 'Ma\'aden'],
    typicalBatchSize: '15-25 trainees; Arabic-first cohorts common',
    onsiteTravelRadius: '300 km — Jubail, Dammam, Al-Khobar, Ras Tanura',
    priceRangeUSD: 'Affordable batch pricing — quote on request',
    localPriceNote: 'SAR invoice; VAT 15%',
    localCertBodies: ['Saudi Aramco SAEP-1142 / SATIP-A-004-02', 'SABIC SABP', 'SAAO', 'ASNT'],
    topMethodsInDemand: ['RT film + DR for Aramco facility piping', 'PAUT for SABIC ethylene cracker heat exchangers', 'UT thickness + CUI assessment'],
  },
  'calgary': {
    anchorIndustries: ['oil sands upgrading', 'midstream pipelines', 'conventional upstream', 'LNG Canada precursors'],
    namedEmployers: ['Suncor', 'Cenovus', 'Imperial Oil', 'Enbridge', 'TC Energy', 'CNRL'],
    typicalBatchSize: '10-16 trainees; winter-sensitive scheduling',
    onsiteTravelRadius: '900 km — Calgary, Edmonton, Fort McMurray, Lloydminster, Grande Prairie',
    priceRangeUSD: 'Affordable batch pricing — quote on request',
    localPriceNote: 'CAD invoice; GST 5%; Alberta ABSA work subject to PE-of-record requirements',
    localCertBodies: ['CGSB-CAN/CGSB-48.9712', 'ABSA (pressure)', 'API 510/570/653', 'CWB W178'],
    topMethodsInDemand: ['UT thickness + CUI for oil-sands upgraders', 'PAUT for cold-temperature pipeline girth welds', 'RT film on Enbridge/TC mainline tie-ins'],
  },
  'london': {
    anchorIndustries: ['financial services datacenter infrastructure', 'rail (Crossrail/HS2)', 'aerospace (GKN, Rolls-Royce)', 'nuclear (Hinkley contractor tier)'],
    namedEmployers: ['Network Rail / HS2', 'Rolls-Royce', 'GKN Aerospace', 'Hinkley Point C contractors', 'Tideway', 'Thames Water'],
    typicalBatchSize: '8-14 trainees',
    onsiteTravelRadius: '200 km — London, Reading, Crawley, Southampton, Bristol',
    priceRangeUSD: 'Affordable batch pricing — quote on request',
    localPriceNote: 'GBP invoice; VAT 20%',
    localCertBodies: ['PCN / BINDT', 'NAS 410 / EN 4179', 'ISO 9712', 'CSWIP'],
    topMethodsInDemand: ['Rail axle & bogie UT for HS2/Crossrail', 'Aerospace FPI + ET to NAS 410 / EN 4179', 'PAUT + TOFD for nuclear contractor tier'],
  },
  'rotterdam': {
    anchorIndustries: ['petrochemicals', 'port terminals & tank storage', 'offshore wind EPC', 'bunkering'],
    namedEmployers: ['Shell Pernis', 'ExxonMobil Rotterdam', 'Vopak', 'BP Nerefco', 'Sif wind fabricators', 'Huisman'],
    typicalBatchSize: '10-16 trainees; bilingual Dutch/English',
    onsiteTravelRadius: '250 km — Rotterdam, Antwerp, Delfzijl, Amsterdam, cross-border',
    priceRangeUSD: 'Affordable batch pricing — quote on request',
    localPriceNote: 'EUR invoice; VAT 21%',
    localCertBodies: ['KCI / KIWA', 'EN ISO 9712', 'Lloyd\'s Register', 'DNV for wind'],
    topMethodsInDemand: ['PAUT for wind-monopile girth welds', 'Tank-floor MFL + UT for Vopak terminals', 'RT + PAUT for Pernis petrochemical piping'],
  },
  'perth': {
    anchorIndustries: ['NW Shelf LNG & offshore gas', 'mining & mineral processing', 'subsea engineering', 'shipyards (Henderson)'],
    namedEmployers: ['Woodside Energy', 'Chevron Australia (Gorgon/Wheatstone)', 'BHP', 'Rio Tinto', 'Inpex Ichthys', 'Austal'],
    typicalBatchSize: '10-16 trainees',
    onsiteTravelRadius: '1500 km — Perth, Henderson, Karratha, Dampier, Port Hedland (FIFO support)',
    priceRangeUSD: 'Affordable batch pricing — quote on request',
    localPriceNote: 'AUD or USD invoice; GST 10%',
    localCertBodies: ['AINDT ISO 9712', 'ASME', 'API', 'Woodside/Chevron vendor-prequal'],
    topMethodsInDemand: ['Subsea UT & TOFD for NW Shelf pipelines', 'PAUT for LNG cryogenic vessel welds', 'Mining mill-liner + bucket-wheel MT'],
  },
};

// ─── Auto-compose — build full profile per city ────────────────────────────

/** Compose a full CorporateTrainingCityProfile from CITY_GEO + archetype + overrides. */
function composeProfile(slug: string): CorporateTrainingCityProfile | null {
  const geo = CITY_GEO[slug];
  if (!geo) return null;

  const arch = COUNTRY_ARCHETYPES[geo.isoCountry] || COUNTRY_ARCHETYPES.US;
  const rich = RICH_CITY_CONTENT[slug] || {};

  const cityLabel = geo.city;
  const countryName = (() => {
    const map: Record<string, string> = {
      US: 'the US', GB: 'the UK', AE: 'UAE', SA: 'Saudi Arabia', QA: 'Qatar',
      KW: 'Kuwait', OM: 'Oman', BH: 'Bahrain', IQ: 'Iraq', IN: 'India',
      SG: 'Singapore', MY: 'Malaysia', CA: 'Canada', NO: 'Norway', NL: 'Netherlands',
      FR: 'France', DE: 'Germany', IT: 'Italy', ES: 'Spain', GR: 'Greece',
      AU: 'Australia', NZ: 'New Zealand', NG: 'Nigeria',
    };
    return map[geo.isoCountry] || geo.isoCountry;
  })();

  const anchorIndustries = rich.anchorIndustries || arch.anchorIndustries;
  const namedEmployers = rich.namedEmployers || arch.employers;

  // Auto-composed compact content when rich isn't supplied.
  const compactShortPitch = `Corporate NDT training in ${cityLabel} — ASNT SNT-TC-1A-based and Level III-led, delivered onsite at your facility, online or blended for ${anchorIndustries[0]} and ${anchorIndustries[1] || 'industrial'} crews.`;
  const localSchemes = (rich.localCertBodies || arch.certBodies).filter((s) => !/^ASNT/.test(s)).slice(0, 4);
  const compactContextParagraph = `${cityLabel}\'s corporate NDT training demand sits inside the ${countryName} market, where ${anchorIndustries.slice(0, 3).join(', ')} drive most of the inspector-competence signal. ${localSchemes.length ? `Employers and owners here commonly reference ${localSchemes.join(', ')} in contracts and written practices. ` : ''}Atlantis NDT trains to ASNT SNT-TC-1A only, led by an ASNT NDT Level III; where a client also requires another scheme, technicians sit it through that scheme\'s own certification body. Each programme is scoped to the client\'s own procedures, equipment and work scopes.`;

  const compactFaqs: FaqItem[] = [
    {
      question: `Can Atlantis deliver onsite corporate NDT training in ${cityLabel}?`,
      answer: `Yes — training can be delivered at your facility in ${cityLabel} or nearby, on your own equipment, specimens and procedures, with theory online beforehand if you prefer. Dates and travel are agreed at scoping.`,
    },
    {
      question: `Which certification scheme does the training follow in ${cityLabel}?`,
      answer: `ASNT SNT-TC-1A. Atlantis NDT does not offer ISO 9712, PCN, CSWIP, ISNT, CWI or API training or exam preparation${localSchemes.length ? `; where employers in ${cityLabel} also reference ${localSchemes.join(', ')}, technicians sit those through the relevant certification body` : ''}. Training records are built so your employer can certify under its own written practice.`,
    },
    {
      question: `How is training priced in ${cityLabel}?`,
      answer: `Affordable, accessible and fully customizable — quote on request. Scope depends on methods, levels, cohort size and onsite travel. Request a tailored quote for your ${cityLabel} cohort.`,
    },
    {
      question: `Can you blend online theory with onsite practicals in ${cityLabel}?`,
      answer: `Yes — theory can run as live-led online sessions, with the hands-on practicals delivered at your ${cityLabel} site on your own equipment.`,
    },
  ];

  return {
    slug,
    city: cityLabel,
    country: geo.isoCountry,
    region: geo.region,
    lat: geo.lat,
    lng: geo.lng,
    anchorIndustries,
    namedEmployers,
    typicalBatchSize: rich.typicalBatchSize || '10-20 trainees per cohort',
    onsiteTravelRadius: rich.onsiteTravelRadius || `300 km from ${cityLabel}`,
    priceRangeUSD: rich.priceRangeUSD || 'Affordable batch pricing — quote on request',
    localPriceNote: rich.localPriceNote || arch.priceNote,
    localCertBodies: rich.localCertBodies || arch.certBodies,
    topMethodsInDemand: rich.topMethodsInDemand || ['PAUT for pressure-equipment girth welds', 'UT thickness for fixed equipment', 'MT + PT for structural & forging scopes'],
    localCaseStudy: {
      title: `Example programme — ${cityLabel}`,
      summary: `Illustrative example, not a client case study: an employer in ${cityLabel} preparing crews for ${anchorIndustries[0]} work scopes ASNT SNT-TC-1A training with theory online and practicals on site.`,
      outcome: 'Illustrative only; no client results reported.',
    },
    faqs: compactFaqs,
    shortPitch: compactShortPitch,
    localContextParagraph: compactContextParagraph,
  };
}

// ─── Canonical list + helpers ──────────────────────────────────────────────

/** All curated city slugs that get a /corporate-ndt-training/:slug page. */
export const CORPORATE_TRAINING_CITIES: CorporateTrainingCityProfile[] = Object.keys(CITY_GEO)
  .map(composeProfile)
  .filter((p): p is CorporateTrainingCityProfile => p !== null);

/** Map for quick slug lookup. */
const _bySlug: Record<string, CorporateTrainingCityProfile> = Object.fromEntries(
  CORPORATE_TRAINING_CITIES.map(p => [p.slug, p])
);

export function getCorporateCityBySlug(slug: string): CorporateTrainingCityProfile | undefined {
  return _bySlug[slug];
}

/** Priority cities shown first on the hub page grid. */
export const CORPORATE_HUB_PRIORITY_SLUGS = [
  'houston', 'dubai', 'abu-dhabi', 'mumbai', 'hyderabad', 'chennai',
  'aberdeen', 'singapore', 'muscat', 'jubail', 'calgary', 'london',
  'rotterdam', 'perth',
];
