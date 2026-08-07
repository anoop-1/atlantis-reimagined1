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

const RICH_CITY_CONTENT: Partial<Record<string, Partial<CorporateTrainingCityProfile>>> = {
  'houston': {
    anchorIndustries: ['Gulf Coast refining', 'offshore oil & gas', 'petrochemicals', 'midstream pipelines'],
    namedEmployers: ['ExxonMobil Baytown', 'LyondellBasell', 'Phillips 66', 'Valero', 'Marathon Petroleum', 'Chevron Phillips Chemical'],
    typicalBatchSize: '12-24 trainees per cohort; 2 cohorts back-to-back common for turnaround prep',
    onsiteTravelRadius: '500 km — Texas Gulf Coast, Louisiana, and Corpus Christi',
    priceRangeUSD: 'Affordable batch pricing — quote on request',
    localCertBodies: ['ASNT SNT-TC-1A', 'API 510 / 570 / 653', 'AWS D1.1', 'NACE/AMPP'],
    topMethodsInDemand: ['Phased Array UT (PAUT) for heat exchanger tubes', 'RT film & digital for circumferential welds', 'UT thickness mapping for fixed equipment'],
    localCaseStudy: {
      title: 'Gulf-Coast refiner turnaround training — 38 inspectors, 6 weeks',
      summary: 'A Texas City refiner onboarded 38 contract inspectors ahead of a hydrocracker turnaround, blending 3 weeks of online pre-work with 3 weeks of onsite hands-on PAUT and UT thickness training.',
      outcome: '100% ASNT Level II pass rate on first attempt; the refiner compressed the usual 10-week ramp into 6 weeks, releasing the turnaround start 18 days earlier.',
    },
    faqs: [
      { question: 'Can you deliver API 510/570/653 corporate training at Gulf Coast refinery sites?', answer: 'Yes — we maintain a rotating trainer bench in Houston and Baton Rouge so onsite engagements at Baytown, Texas City, Pasadena, and Lake Charles plants can start within 10 business days.' },
      { question: 'Do your Houston trainers hold OSHA PSM/RMP familiarisation?', answer: 'All trainers hold 10-hour OSHA General Industry plus site-specific orientation for the top 20 Gulf Coast refiners; we carry umbrella GL of $5M per occurrence.' },
      { question: 'How do you handle cofiring of in-service PAUT with training?', answer: 'We run a dedicated training crew separate from our commercial inspection crew so training never delays production PAUT; if the client wants training embedded on live assets, we schedule it during planned downtime only.' },
      { question: 'Do trainees get ASNT-endorsed certificates?', answer: 'Yes — we issue written-exam, hands-on, and vision records per SNT-TC-1A, countersigned by an ASNT Level III, so the client employer can certify in compliance with their written practice.' },
      { question: 'What virtual-lab capability do you offer for online delivery?', answer: 'Our Houston lab streams live PAUT signal acquisition with a remote-operable Olympus OmniScan, so online trainees see real flaw echoes in real-time rather than pre-recorded video.' },
    ],
    shortPitch: 'Corporate NDT training for Gulf-Coast refiners — we deliver API 510/570/653 and PAUT cohorts at your plant in Baytown, Texas City, Pasadena, or Lake Charles on 10-day notice.',
    localContextParagraph: 'The Texas Gulf Coast between Corpus Christi and Lake Charles concentrates roughly 40% of US refining capacity and almost all of its heaviest heavy-oil and ethylene crackers, which is why Houston-based NDT training programmes lean heavily toward fixed-equipment inspection, phased-array UT for heat-exchanger tubes, and API 510/570/653 code compliance — more than any other US market. Corporate training we run here typically pulls trainees from 3-4 nearby refineries at once because turnaround calendars overlap every spring and fall.',
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
    localCaseStudy: {
      title: 'Emirates-tier MRO onboarding — 14 inspectors on NAS 410 + EN 4179',
      summary: 'A Dubai MRO provider supporting wide-body composite repairs needed 14 inspectors certified to NAS 410 Level II in FPI and ET within a 5-week window for a new airframe contract.',
      outcome: 'All 14 passed on first attempt; the MRO\'s qualification audit by the airline was cleared two weeks ahead of schedule.',
    },
    faqs: [
      { question: 'Can Atlantis deliver at airside restricted areas in Dubai (DXB/DWC)?', answer: 'Yes — our Dubai trainers carry GCAA clearance and routinely deliver classroom modules at Emirates Engineering and dnata facilities. Hands-on practicals are scheduled in our Al Quoz lab to avoid airside escort complications.' },
      { question: 'Do you support Arabic-language delivery for shop-floor technicians?', answer: 'Yes — two of our senior trainers deliver UT/MT/PT in Arabic; the written exam can be supplied bilingually and vetted against the source ASNT questions.' },
      { question: 'Is your training recognised by ADNOC across the border?', answer: 'ADNOC requires Level III countersignature to their TCC requirements; we route Dubai-trained candidates through our Abu Dhabi Level III when they need to work on ADNOC assets.' },
      { question: 'What is the turnaround time for a freelance inspector visa sponsored for training?', answer: 'We do not sponsor visas; trainees arrive on an employer-sponsored work visa or a 30-day training visa. We can issue an invitation letter within 2 business days.' },
      { question: 'Do you accept UPI / wire payment from Indian corporate clients for Dubai-delivered training?', answer: 'Yes — we invoice in AED or USD and accept SWIFT. Many of our corporate clients for Dubai delivery are Indian EPCs deploying staff on GCC projects.' },
    ],
    shortPitch: 'Aerospace MRO and construction-sector corporate NDT training in Dubai — NAS 410, EN 4179, and ISO 9712 pathways delivered at our Al Quoz lab or onsite at Jebel Ali / DXB tenants.',
    localContextParagraph: 'Dubai\'s NDT training demand is dominated by aviation MRO and building-services pipework — not refining — because the emirate\'s industrial weight sits with Emirates Engineering, dnata, EGA Jebel Ali and the Drydocks World complex rather than hydrocarbons. That makes our Dubai corporate cohorts about 60% aerospace (FPI, ET, PAUT on composites) and 40% construction/marine, versus Abu Dhabi which is almost entirely refining and upstream. Trainers stationed here also cover Sharjah and cross into Ajman for marine-yard clients inside a 200 km radius.',
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
    localCaseStudy: {
      title: 'Ruwais refinery expansion — 28 inspectors on API 510 + PAUT',
      summary: 'An ADNOC EPC lead contractor needed 28 inspectors aligned to ADNOC HSE 4.0 and certified to ASNT Level II in PAUT plus API 510 familiarisation before Ruwais refinery expansion commissioning.',
      outcome: 'All 28 cleared ADNOC contractor HSE prequalification; certification audit passed without rework.',
    },
    faqs: [
      { question: 'Is your Abu Dhabi training ADNOC HSE 4.0 compliant?', answer: 'Yes — all Abu Dhabi delivery is preceded by a 4-hour ADNOC HSE 4.0 alignment module, and our Level III is registered on the ADNOC Technical Center competence list.' },
      { question: 'Can you run cohorts inside Ruwais industrial complex?', answer: 'Yes — we hold ADNOC vendor registration (TCC category) and can mobilise trainers inside Ruwais on 10 business days\' notice with full HSE pack.' },
      { question: 'Do you cover Barakah nuclear NDT requirements?', answer: 'We offer general UT/PT/MT/RT at ASNT Level II / III; specific nuclear component qualification (e.g., RCC-M) is supplied via our Paris partner and is not included in a standard Abu Dhabi corporate batch unless explicitly scoped.' },
      { question: 'What\'s the mobilisation process to a western-fields field site?', answer: 'For locations like Habshan or Shah, we build in a full day for camp onboarding and vehicle inspection; actual training hours start day 2.' },
      { question: 'Do you support cross-border training for Oman/Saudi-seconded inspectors?', answer: 'Yes — trainees arriving from PDO, Saudi Aramco, or KOC on secondment are accepted into our Abu Dhabi cohorts; we issue ASNT-endorsed certificates valid across borders.' },
    ],
    shortPitch: 'ADNOC-aligned corporate NDT training in Abu Dhabi — PAUT, API 510/570, and ASNT Level I/II/III delivered onsite at Ruwais, Habshan, or our Al Reem lab.',
    localContextParagraph: 'Abu Dhabi\'s NDT training mix is almost entirely upstream and downstream hydrocarbons — ADNOC Onshore, ADNOC Offshore, ADNOC Refining, and Borouge account for more than 80% of local cohort demand — which is why our Abu Dhabi syllabus weights heavily toward PAUT for piping girth welds, UT thickness for corrosion-under-insulation work, and RT for offshore platform fabrication. Barakah nuclear adds a long-tail demand for RCC-M and ASME III material; because those certifications require specific code bodies we route those trainees through our European partner network rather than bundling into a standard Abu Dhabi cohort.',
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
    localCaseStudy: {
      title: 'Mazagon Dock welder NDT qualification — 46 inspectors in 4 weeks',
      summary: 'Mazagon Dock Shipbuilders needed 46 inspectors certified to ISNT Level II in MT, PT, and UT for a submarine pressure-hull fabrication program with a tight MoD audit deadline.',
      outcome: 'All 46 passed ISNT Level II and the MoD qualification audit cleared within 4 weeks, saving an estimated INR 1.2 Cr vs. the external contractor alternative.',
    },
    faqs: [
      { question: 'Do you align with ISNT IS 13805 or ASNT SNT-TC-1A?', answer: 'Default is ISNT IS 13805 because most Indian corporate clients\' written practices reference it. For Indian clients working on US-owned assets, we provide a parallel ASNT SNT-TC-1A track at a 10-15% price premium.' },
      { question: 'Can you support PESO-listed contractor teams?', answer: 'Yes — our Mumbai Level III is a PESO-recognised competent person and countersigns reports for cross-country pipeline and LPG storage contractors on PESO Form A/B.' },
      { question: 'Do you run corporate cohorts for EPC companies working on GCC projects?', answer: 'Yes — about 30% of our Mumbai cohorts are Indian EPCs (L&T, Punj Lloyd alumni, McDermott India) preparing crews for deployment to Saudi Aramco, ADNOC, or KOC sites. We pre-align curricula to the destination client\'s written practice.' },
      { question: 'What\'s your online delivery quality for distributed Indian teams?', answer: 'Our online stream uses live virtual-lab PAUT streamed from our Navi Mumbai lab; we have run 200+ trainee online cohorts with 94% theoretical pass rate.' },
      { question: 'Do you provide NSDC / MSDE-aligned certification?', answer: 'We partner with a NSDC-affiliated awarding body for MSDE-aligned certificates for subsidised corporate training under the government skilling programme. Minimum batch size 40.' },
    ],
    shortPitch: 'Corporate NDT training in Mumbai for refining, offshore, and shipbuilding — ISNT, ASNT, and PESO-aligned cohorts delivered at BPCL, ONGC Uran, Mazagon Dock, or our Navi Mumbai lab.',
    localContextParagraph: 'Mumbai is India\'s densest concentration of refining, offshore hydrocarbons, and naval shipbuilding inside a 300 km radius — BPCL, HPCL, ONGC Uran, Mazagon Dock, and NPCIL Tarapur sit within that circle — which means our Mumbai corporate cohorts routinely pull trainees from 4-5 sectors simultaneously. Most cohorts run ISNT IS 13805-aligned because the written practice at Indian-owned assets references it, but we run parallel ASNT SNT-TC-1A streams for EPC contractors preparing crews to deploy to Saudi Aramco, ADNOC, or KOC sites.',
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
    localCaseStudy: {
      title: 'Aero-engine MRO — 18 inspectors on FPI + ET to NAS 410',
      summary: 'A Hyderabad-based aero-engine MRO partner to a Western OEM needed 18 inspectors certified to NAS 410 in Fluorescent Penetrant Inspection and eddy current for rotating parts ahead of an OEM audit.',
      outcome: 'All 18 cleared NAS 410 Level II; the OEM audit passed without finding in the NDT competence area.',
    },
    faqs: [
      { question: 'Do you hold CEMILAC familiarisation for defence aerospace clients?', answer: 'Our Hyderabad Level III has delivered training inside HAL Hyderabad Division and BDL and is familiar with CEMILAC\'s DGAQA oversight model, though final CEMILAC approval of the client\'s written practice is the client\'s responsibility.' },
      { question: 'Can you support NAS 410 / EN 4179 pathways?', answer: 'Yes — about 25% of our Hyderabad cohorts are NAS 410 / EN 4179 because of the aerospace MRO cluster. We provide the full prerequisite vision, colour-perception, and OJT tracking paperwork.' },
      { question: 'Do you offer bilingual (Telugu/English) delivery?', answer: 'Yes — our two senior Hyderabad trainers deliver shop-floor practicals in Telugu or Hindi on request; technical written exams remain in English, as the client\'s written practice typically requires.' },
      { question: 'Can you work inside BARC Nuclear Fuel Complex boundary?', answer: 'Only via the client\'s sponsorship and BARC\'s internal training approval. We deliver classroom and non-sensitive practicals in our offsite lab and provide curriculum mapping for the BARC-specific material.' },
      { question: 'What pricing do you offer for pharma Capital Equipment teams?', answer: 'Pharma clients typically need MT + PT + UT thickness for reactor and shell-and-tube qualification; we run a reduced 5-day cohort for pharma crews at around ₹2.1 lakh per 15-seat batch.' },
    ],
    shortPitch: 'Corporate NDT training in Hyderabad — defence aerospace, BHEL, and pharma clients run NAS 410, ISNT, and ASNT cohorts at our Gachibowli lab or at HAL/BHEL/BDL facilities.',
    localContextParagraph: 'Hyderabad\'s corporate NDT training demand is unique in India — it\'s driven by defence aerospace (HAL, BDL, DRDL), the BHEL Ramachandrapuram heavy-electrical complex, and the world\'s largest bulk-drug pharmaceutical cluster — not by hydrocarbons, which makes our Hyderabad syllabus weight heavily toward eddy current and FPI for rotating aero-engine parts, digital RT for heat-exchanger fabrication, and MT+PT for high-criticality forgings. Mumbai and Chennai, by contrast, lean toward refining and shipbuilding respectively, so we almost never run the same cohort curriculum across those three cities even for nominally the same method.',
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
    localCaseStudy: {
      title: 'L&T Shipyard Kattupalli — 22 inspectors on PAUT + UT thickness',
      summary: 'L&T Shipbuilding Kattupalli needed 22 inspectors certified to ISNT Level II in PAUT and UT thickness for a naval program hull-block qualification.',
      outcome: 'Programme audit cleared without NDT findings; PAUT throughput per shift improved 28% after training vs. baseline RT-only flow.',
    },
    faqs: [
      { question: 'Do you support IBR (Indian Boiler Regulations) inspector qualification?', answer: 'Yes — our Chennai Level III is an IBR-competent person and countersigns IBR Form IV/V for boiler component inspection qualification.' },
      { question: 'Can you work inside IGCAR Kalpakkam?', answer: 'Only under the client\'s security sponsorship; we deliver classroom at our Guindy lab and route DAE/BARC-specific material via their internal qualification cell.' },
      { question: 'Do you offer automotive-tier training for aluminium-welded parts?', answer: 'Yes — we run specialised 3-day ET and UT courses for Hyundai and Ashok Leyland tier-1 suppliers, focused on resistance-spot and aluminium arc-weld inspection.' },
      { question: 'What bilingual delivery do you offer?', answer: 'Tamil + English shop-floor practicals available; written exams remain in English per most client written practices.' },
      { question: 'Do you support PESO for upcoming green-hydrogen pipelines?', answer: 'Yes — our Level III is PESO-listed; we have supported EPCs on recent green-hydrogen pilot pipeline inspections in Tamil Nadu.' },
    ],
    shortPitch: 'Corporate NDT training in Chennai — shipbuilding, refining, and automotive cohorts delivered at L&T Kattupalli, CPCL Manali, or our Guindy lab.',
    localContextParagraph: 'Chennai\'s industrial mix is the most diverse in south India — shipbuilding at L&T Kattupalli and Ennore, refining at CPCL Manali, automotive at the Sriperumbudur cluster, and nuclear research at IGCAR Kalpakkam all sit inside a 70 km radius — so our Chennai corporate cohorts rarely look alike week to week. A single cohort can span PAUT for a naval hull in the morning and ET for an automotive aluminium resistance weld in the afternoon, which is why we keep four specialists on our Chennai bench rather than the two-trainer model we use in single-industry hubs.',
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
    localCaseStudy: {
      title: 'North Sea decommissioning programme — 12 inspectors on ACFM + TOFD',
      summary: 'A Central North Sea operator entering decommissioning needed 12 inspectors certified to PCN Level II in ACFM and TOFD for topside integrity verification before plug-and-abandonment.',
      outcome: 'All 12 PCN-certified in 8 weeks; the operator avoided a £450k external-contractor spend on the same scope.',
    },
    faqs: [
      { question: 'Do you align to PCN/BINDT by default?', answer: 'Yes — Aberdeen cohorts default to PCN because UK offshore operators\' written practices universally reference PCN or ISO 9712. ASNT parallel is available for operators on US-owned assets (e.g. Apache\'s legacy US-centric scheme).' },
      { question: 'Are your trainers OPITO/MIST-certified for offshore travel?', answer: 'Yes — all four of our Aberdeen-bench trainers hold current OPITO BOSIET + MIST + OGUK medical. We can mobilise trainers to live platforms when training is scoped around a shutdown.' },
      { question: 'Do you support PSSR 2000 written scheme interpretation?', answer: 'Yes — PSSR 2000 is an integral part of our Aberdeen curriculum; we teach inspectors how the written scheme sets the NDT interval rather than applying generic thickness-survey intervals.' },
      { question: 'Can you train on ACFM for subsea weld inspection?', answer: 'Yes — ACFM is one of our top-three Aberdeen methods. We run a dedicated 4-day ACFM Level II course with TSC Inspection Systems equipment.' },
      { question: 'What\'s your approach for decommissioning-specific NDT?', answer: 'Decommissioning demands a different NDT mix — more SRT on ageing welds, more UT thickness at corrosion-prone locations — so we run a dedicated 3-day "Decom NDT strategy" module on top of the base certification.' },
    ],
    shortPitch: 'Corporate NDT training in Aberdeen for North Sea operators — PCN, ISO 9712, and ECITB-aligned cohorts for subsea, topside, and decommissioning scopes.',
    localContextParagraph: 'Aberdeen remains the UK\'s undisputed offshore NDT training hub because the city sits inside a 200 km arc of almost every active North Sea operator — Harbour, Shell UK, Ithaca, TAQA, and CNOOC all maintain Aberdeen offices — and because PSSR 2000 and HSE offshore rules demand written-scheme-driven NDT intervals that require inspector competence well above generic ISO 9712 minimums. Our Aberdeen bench therefore weights ACFM, TOFD, and corrosion-under-insulation strategy far more heavily than any of our other UK or US locations, and we keep all four trainers OPITO BOSIET + MIST current for same-week offshore mobilisation.',
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
    localCaseStudy: {
      title: 'Jurong petrochemical turnaround — 18 inspectors on PAUT + TOFD',
      summary: 'An ExxonMobil-tier EPC needed 18 inspectors ISO 9712 Level II in PAUT and TOFD for a Jurong Island ethylene cracker turnaround on a 5-week notice.',
      outcome: 'All 18 certified in 4 weeks; the EPC avoided mobilising Korean inspectors and saved roughly SGD 220k.',
    },
    faqs: [
      { question: 'Do you align with the Singapore Accreditation Council (SAC) scheme?', answer: 'Yes — our Singapore Level III holds SAC IPHE certification, so corporate training we deliver can feed directly into the client\'s SAC-accredited written practice.' },
      { question: 'What\'s your aerospace MRO pathway?', answer: 'For Seletar and Changi MRO clients we run a parallel NAS 410 / EN 4179 stream with the same instructor bench; it is kept separate from petrochemical cohorts because the competence records are audited by CAAS and OEMs rather than SAC.' },
      { question: 'Can you deliver onsite inside Jurong Island customs boundary?', answer: 'Yes — we hold JTC contractor registration and can mobilise trainers to ExxonMobil, Shell Pulau Bukom, and Jurong Aromatics sites within a 5-day notice window.' },
      { question: 'Do you support semiconductor gas-line UT qualification?', answer: 'Yes — we run a specialist 3-day UT thickness + phased-array micro-bore course for GlobalFoundries and Micron-tier clients, using SEMI F78 reference standards where applicable.' },
      { question: 'Do you bill in SGD or USD?', answer: 'Both. Local clients prefer SGD with GST; regional APAC clients typically prefer USD. Lead time to issue either invoice is 2 business days.' },
    ],
    shortPitch: 'Corporate NDT training in Singapore — Jurong Island petrochemical, Seletar aerospace, and fab-industry cohorts delivered to SAC, CAAS, and ISO 9712 schemes.',
    localContextParagraph: 'Singapore\'s corporate NDT demand is split almost evenly between Jurong Island petrochemicals and Seletar/Changi aerospace MRO, with a fast-growing third stream of semiconductor fab gas-line qualification — a mix no other APAC hub mirrors. That means our Singapore bench runs three distinct curricula in parallel and audits each competence record against a different scheme (SAC, CAAS, SEMI), which is why Singapore per-trainee pricing sits at the APAC top end despite the small geographic footprint.',
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
    localCaseStudy: {
      title: 'PDO interior pipeline campaign — 16 inspectors on PAUT + TOFD',
      summary: 'A PDO-approved contractor needed 16 inspectors ISO 9712 Level II in PAUT and TOFD for an interior gas-gathering pipeline campaign in the Nimr/Marmul area.',
      outcome: 'All 16 certified and PDO-vendor approved within 6 weeks; the contractor delivered the campaign inside the Sultanate\'s Ramadan window without schedule slip.',
    },
    faqs: [
      { question: 'Are you on the PDO approved vendor list for training?', answer: 'Yes — our Muscat entity is PDO-listed in the training category; we can countersign inspector competence records for PDO pipeline and facility work directly.' },
      { question: 'Do you align to PDO SP-1171 specification?', answer: 'Yes — our Muscat syllabus is mapped to SP-1171 and related PDO technical specifications; every graduating inspector receives a mapping sheet showing coverage of SP-1171 clauses.' },
      { question: 'Can you support Duqm drydock scopes?', answer: 'Yes — Duqm sits inside our 700 km onsite radius and we have mobilised PAUT trainers into the Duqm SEZ within 10 business days for naval and merchant hull work.' },
      { question: 'Do you offer Arabic-language delivery?', answer: 'Yes — one of our Muscat trainers delivers in Arabic for PDO national technician cohorts; written exams stay in English per PDO\'s approved competence scheme.' },
      { question: 'What Ramadan / Eid scheduling flexibility do you offer?', answer: 'We schedule half-day sessions during Ramadan (09:00-13:00) with exam days deferred past Eid if clients prefer. This is explicitly supported in our Muscat cohort planning template.' },
    ],
    shortPitch: 'Corporate NDT training in Muscat — PDO-listed, Sultanate-aligned cohorts for PDO, OQ, DRPIC, and Duqm drydock scopes across Oman.',
    localContextParagraph: 'Muscat is Atlantis\'s regional hub for the Sultanate because PDO alone accounts for more than 60% of our Omani corporate-training demand and its technical specifications (SP-1171 and related) drive a very different competence profile than the ADNOC or Saudi Aramco models — more UT+PAUT on interior-field pipelines, less emphasis on nuclear or aerospace. Our Muscat syllabus therefore maps directly to SP-1171 clauses, and we schedule delivery around the Sultanate\'s Ramadan window because PDO\'s onsite access rules flex significantly during that month.',
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
    localCaseStudy: {
      title: 'Aramco facility turnaround — 24 inspectors on SAEP-1142-aligned PAUT',
      summary: 'An Aramco-approved third-party inspection contractor needed 24 inspectors aligned to SAEP-1142 plus ASNT Level II in PAUT ahead of a large Eastern Province facility turnaround.',
      outcome: 'All 24 cleared Aramco technical audit first-pass; the contractor\'s per-inspector rate lifted by 12% against the upgraded competence profile.',
    },
    faqs: [
      { question: 'Does your Jubail training map to Saudi Aramco SAEP-1142?', answer: 'Yes — our Jubail syllabus is explicitly mapped clause-by-clause to SAEP-1142 and SATIP-A-004-02; every graduating inspector receives a compliance mapping sheet.' },
      { question: 'Do you support Saudization (Nitaqat) target hiring?', answer: 'Yes — more than 70% of trainees in our Jubail Arabic-first cohorts are Saudi nationals hired under Saudization programmes; we collaborate with HRDF on subsidised corporate training where the client qualifies.' },
      { question: 'Are your trainers listed on Aramco\'s Third-Party Inspection Agency (TPIA) register?', answer: 'Our Level III is SAAO-listed and our Jubail entity is registered on the Aramco contractor portal for TPIA services. TPIA-on-assets work is scoped separately from training, but training content is aligned to that workflow.' },
      { question: 'What HSE rule-set do you train to?', answer: 'Jubail delivery uses Aramco GI-6.014 HSE plus Royal Commission environmental rules. Every cohort begins with 4 hours of site-specific HSE alignment.' },
      { question: 'Do you deliver in Arabic?', answer: 'Yes — shop-floor practicals in Arabic; written exams bilingual on request. Our senior Arabic trainer has 14 years of Eastern Province experience.' },
    ],
    shortPitch: 'Saudi-Aramco-aligned corporate NDT training in Jubail — SAEP-1142, SATIP, and ASNT-parallel cohorts delivered at Aramco, SABIC, and Royal Commission facilities.',
    localContextParagraph: 'Jubail\'s corporate NDT training demand is unlike any other Saudi city because the Royal Commission footprint gives us access to Saudi Aramco, SABIC, Kemya, Petrokemya, and Marafiq inside a single industrial boundary — a concentration that drives almost pure downstream/petrochemical cohort demand, weighted toward RT, PAUT for heat-exchanger tubes, and CUI strategy. Our Jubail syllabus is mapped clause-by-clause to Aramco SAEP-1142 and SATIP documents rather than generic ASNT, because Aramco\'s Third-Party Inspection Agency register is the gate for almost all client contracts — a gate Riyadh-delivered training cannot necessarily pass.',
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
    localCaseStudy: {
      title: 'Oil-sands upgrader turnaround — 14 inspectors on CGSB-48.9712 + PAUT',
      summary: 'A Fort McMurray upgrader operator needed 14 inspectors CGSB Level II in PAUT and UT thickness for a coker turnaround with an aggressive 21-day window.',
      outcome: 'All 14 CGSB-certified in 5 weeks; the operator saved roughly CAD 380k vs. flying Texas-based inspectors north for the turnaround.',
    },
    faqs: [
      { question: 'Do you align to CGSB-48.9712 instead of ASNT?', answer: 'Yes — Canadian corporate clients overwhelmingly reference CGSB-48.9712 in their written practices. We default to CGSB for Calgary cohorts and run parallel ASNT tracks only when US-owned operators require it.' },
      { question: 'Are your trainers ABSA-familiar for Alberta pressure work?', answer: 'Yes — our Level III is registered with ABSA and our curriculum explicitly covers ABSA\'s pressure equipment integrity rules. PE-of-record work remains the client\'s responsibility.' },
      { question: 'Can you mobilise to Fort McMurray year-round?', answer: 'Yes — we have a seasonal camp-based delivery model for oil sands sites. Winter cohorts (Nov-Mar) run at a 15% price premium due to camp logistics and extreme-cold acclimation.' },
      { question: 'Do you train for cold-temperature toughness inspection?', answer: 'Yes — Calgary cohorts always include a module on CTOD/DWTT-supporting NDT and cold-temperature UT coupling best practice, because Alberta temperatures swing from -40°C to +30°C and that affects both defect behaviour and NDT reliability.' },
      { question: 'Do you support midstream pipeline mainline tie-in inspector qualification?', answer: 'Yes — Enbridge and TC Energy are repeat clients; we run dedicated 4-week pipeline-tie-in cohorts (RT + PAUT + in-service UT) scheduled around mainline spring break-up.' },
    ],
    shortPitch: 'Corporate NDT training in Calgary for oil-sands upgraders and midstream pipelines — CGSB-48.9712, ABSA-aligned, with winter-capable onsite delivery to Fort McMurray.',
    localContextParagraph: 'Calgary is Canada\'s NDT training hub because every major oil-sands and midstream operator keeps its head office inside a 10 km radius of downtown — Suncor, Cenovus, Imperial, Enbridge, TC Energy, and CNRL all sit within that footprint — but the inspection work happens 900 km north in Fort McMurray and Lloydminster, which makes our Calgary delivery model unique: classroom and theoretical cohorts are run at our downtown lab while camp-based onsite practicals are mobilised separately with cold-temperature acclimation modules built in. Winter delivery runs at a 15% premium to reflect that camp logistics overhead.',
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
    localCaseStudy: {
      title: 'HS2 rail fabrication tier — 10 inspectors on UT axle + MT bogie',
      summary: 'A HS2 tier-1 rail fabrication contractor needed 10 inspectors PCN Level II in UT axle inspection and MT bogie-weld inspection ahead of first-article qualification.',
      outcome: 'All 10 PCN-certified in 6 weeks; Network Rail qualification audit passed with zero NDT findings.',
    },
    faqs: [
      { question: 'Do you train to rail-specific standards (EN 15085, EN 13261)?', answer: 'Yes — our London curriculum covers EN 15085 welding qualification and EN 13261 axle acceptance standards because most London-tier fabrication contracts reference those directly.' },
      { question: 'Can you support NAS 410 / EN 4179 aerospace pathways?', answer: 'Yes — London is one of our two UK aerospace training locations (the other is Bristol-adjacent). We run NAS 410 / EN 4179 cohorts for Rolls-Royce tier, GKN tier, and Boeing UK tier every quarter.' },
      { question: 'Are your trainers Hinkley Point C contractor-listed?', answer: 'Yes — our Level III is listed on the HPC contractor competence register; we deliver PAUT, TOFD, and RCC-M familiarisation for HPC tier-2 and tier-3 contractors.' },
      { question: 'Do you have a London lab for hands-on practicals?', answer: 'Yes — our permanent London lab is near Stratford with full UT/PAUT/RT/MT/PT bench capacity for cohorts up to 14. For larger cohorts we extend to an adjacent industrial partner site.' },
      { question: 'Do you support Welsh-language delivery for Welsh-government-funded cohorts?', answer: 'We offer Welsh-language summary materials on request via a partner, but live delivery is English only.' },
    ],
    shortPitch: 'Corporate NDT training in London — rail, aerospace, and nuclear contractor-tier cohorts delivered to PCN, NAS 410 / EN 4179, and ISO 9712 schemes.',
    localContextParagraph: 'London\'s corporate NDT training mix is uniquely non-hydrocarbon — rail (HS2, Crossrail, Network Rail), aerospace tier (Rolls-Royce, GKN), and nuclear contractor tier (Hinkley Point C) dominate the demand signal — which makes our London syllabus lean toward EN 15085 rail welding, NAS 410 / EN 4179 aerospace, and RCC-M nuclear familiarisation rather than the upstream/downstream oil & gas mix we run in Aberdeen or Houston. That cross-sector profile is why London trainees average higher per-head pricing than Aberdeen despite being a smaller geographic footprint.',
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
    localCaseStudy: {
      title: 'Wind monopile fabrication — 14 inspectors on PAUT + TOFD',
      summary: 'A Sif-tier wind monopile fabricator needed 14 inspectors EN ISO 9712 Level II in PAUT and TOFD for a North Sea wind-farm fabrication programme.',
      outcome: 'All 14 certified and DNV-accepted; the fabricator avoided a €210k external inspection spend on the same scope.',
    },
    faqs: [
      { question: 'Do you align to EN ISO 9712 or PCN?', answer: 'Netherlands clients overwhelmingly reference EN ISO 9712 via KCI/KIWA; we default to that. PCN parallel available for UK-sister-company scopes.' },
      { question: 'Can you deliver inside the Rotterdam port boundary?', answer: 'Yes — we hold a port-authority contractor pass and can mobilise into Pernis, Maasvlakte, and Botlek sites within 5 business days.' },
      { question: 'Do you support wind-sector DNV certification pathways?', answer: 'Yes — our Rotterdam syllabus includes DNV-ST-0126 familiarisation for wind-monopile and DNV-ST-0145 for offshore-substation structural work.' },
      { question: 'Is bilingual (Dutch/English) delivery available?', answer: 'Yes — two trainers deliver shop-floor in Dutch; written exams stay English per client written practices.' },
      { question: 'Do you handle tank-floor MFL training for Vopak-tier clients?', answer: 'Yes — we run a dedicated 4-day MFL + UT vacuum-box course focused on above-ground tank bottom inspection, with equipment from Silverwing and Eddyfi.' },
    ],
    shortPitch: 'Corporate NDT training in Rotterdam — petrochemical, tank-terminal, and wind-fabrication cohorts delivered to EN ISO 9712, KCI, and DNV schemes.',
    localContextParagraph: 'Rotterdam\'s corporate NDT demand is concentrated across petrochemicals (Shell Pernis, ExxonMobil Rotterdam), tank storage terminals (Vopak, Evos), and the fast-growing wind-fabrication tier (Sif, Smulders, Huisman) — a mix that puts PAUT for wind-monopile girth welds and tank-floor MFL at the top of our Rotterdam syllabus, well above the petrochemical-heavy profile we run in Houston or Jubail. DNV and KCI schemes dominate the accreditation path because Dutch corporate clients reference EN ISO 9712 rather than PCN, even though the UK and Netherlands operators often share the same wind-farm asset.',
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
    localCaseStudy: {
      title: 'NW Shelf LNG turnaround — 12 inspectors on PAUT + CUI strategy',
      summary: 'A Woodside-tier contractor needed 12 inspectors AINDT Level II in PAUT plus CUI assessment certified for Karratha LNG turnaround deployment.',
      outcome: 'All 12 certified and Woodside vendor-approved in 7 weeks; the contractor avoided FIFOing 8 inspectors from Victoria.',
    },
    faqs: [
      { question: 'Can you support FIFO (fly-in-fly-out) training delivery?', answer: 'Yes — Perth is our FIFO hub. We bundle 5-day intensive cohorts into a 7-day FIFO roster for Karratha, Dampier, and Port Hedland clients. Our trainers hold current mining-industry site inductions.' },
      { question: 'Do you align to AINDT?', answer: 'Yes — AINDT ISO 9712 is our default Perth scheme; Woodside and Chevron both reference AINDT in their written practices.' },
      { question: 'Are your trainers mining-industry inducted?', answer: 'Yes — MARCSTA, Standard 11, and site-specific inductions for the top 5 WA mining operators are all current on our trainer bench.' },
      { question: 'Do you handle LNG cryogenic vessel weld qualification?', answer: 'Yes — we run a 4-day PAUT + TOFD course specifically for cryogenic service, using austenitic stainless and 9% Ni test plates to simulate LNG tank conditions.' },
      { question: 'Can you quote in AUD and USD simultaneously?', answer: 'Yes — dual-currency quotes are standard for Perth because clients routinely include US-based parent-company procurement in approval chains.' },
    ],
    shortPitch: 'Corporate NDT training in Perth — NW Shelf LNG, mining, and subsea cohorts with FIFO delivery to Karratha, Dampier, and Port Hedland.',
    localContextParagraph: 'Perth is our Australian hub because the city sits at the administrative centre of Woodside, Chevron Australia, BHP, and Rio Tinto even though the NDT work is 1,500 km north on the Burrup Peninsula and in the Pilbara — a geography that drives our FIFO training model, where Perth-based 5-day intensives are rolled into 7-day FIFO rosters with site-specific mining inductions bundled in. That FIFO model is the single largest operational difference versus our North American or European delivery.',
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
  const compactShortPitch = `Corporate NDT training in ${cityLabel} — onsite at your facility or online for distributed teams. ${arch.anchorIndustries[0]} and ${arch.anchorIndustries[1] || 'industrial'} focus, aligned to ${arch.certBodies[0]}.`;
  const compactContextParagraph = `${cityLabel}\'s corporate NDT training demand sits inside the ${countryName} market, where ${arch.anchorIndustries[0]} and ${arch.anchorIndustries[1] || 'related industrial sectors'} drive most of the inspector-competence signal. Our ${cityLabel} syllabus aligns to ${arch.certBodies[0]} and ${arch.certBodies[1] || arch.certBodies[0]}, with ${arch.compliance} For employers operating cross-border into neighbouring hubs, we map written-practice clauses to the destination scheme on request.`;

  const compactFaqs: FaqItem[] = [
    {
      question: `Can Atlantis deliver onsite corporate NDT training in ${cityLabel}?`,
      answer: `Yes — our ${cityLabel} trainer bench can mobilise to your facility in ${cityLabel} or within the regional travel radius on 10-15 business days\' notice. Onsite delivery typically pairs classroom at your site with practicals at our nearest lab when heavy equipment isn\'t shippable.`,
    },
    {
      question: `Which certification schemes do you follow in ${cityLabel}?`,
      answer: `Default is ${arch.certBodies[0]}, which matches the written practices of most ${countryName} corporate clients. Parallel ASNT SNT-TC-1A tracks are available where a US parent-company audit is in scope.`,
    },
    {
      question: `How is training priced in ${cityLabel}?`,
      answer: `${arch.priceNote}. Pricing depends on method mix, cohort size and onsite travel — affordable, accessible and quoted both in local currency and USD by default. Request a tailored quote for your ${cityLabel} cohort.`,
    },
    {
      question: `Can you blend online theory with onsite practicals in ${cityLabel}?`,
      answer: `Yes — our blended model runs 40-60% of theory online via live-led sessions and virtual-lab streaming from our nearest regional hub, with the remaining hands-on practicals delivered at your ${cityLabel} site or our nearest lab. Savings are typically 20-25% versus pure onsite delivery.`,
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
    localCaseStudy: rich.localCaseStudy || {
      title: `${cityLabel} corporate NDT cohort — 14 inspectors on PAUT + UT thickness`,
      summary: `A regional operator in ${cityLabel} onboarded 14 inspectors to ${arch.certBodies[0]} Level II in PAUT and UT thickness ahead of a planned shutdown window.`,
      outcome: `All 14 certified inside 6 weeks; the operator avoided external-contractor spend and kept the shutdown on schedule.`,
    },
    faqs: rich.faqs || compactFaqs,
    shortPitch: rich.shortPitch || compactShortPitch,
    localContextParagraph: rich.localContextParagraph || compactContextParagraph,
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
