/**
 * NDT Training City Profiles
 * ────────────────────────────────────────────
 * Per-city data powering /ndt-training-{slug} pages built on TrainingLocationPage.
 * Every entry MUST have:
 *  - At least 2 real local employers (refineries, fabricators, inspection contractors)
 *  - A realistic salary band in local currency + USD reference
 *  - Cert body appropriate for the region (ASNT, PCN, CSWIP, ISO 9712, ABENDI, etc.)
 *  - At least 1 real exam center (PCN/ASNT/CSWIP/local body authorised)
 *  - Geo coords for LocalBusiness schema
 *
 * Adding a new city is a 4-step change:
 *   1. Add an entry to TRAINING_CITY_PROFILES
 *   2. Create src/pages/ndt-training-{slug}.tsx exporting <TrainingLocationPage {...profile} />
 *   3. Register the route in src/App.tsx
 *   4. Add the slug to scripts/prerender.mjs trainingExpansionCities
 */

export type CertBody =
  | "ASNT"
  | "PCN"
  | "CSWIP"
  | "ISO 9712"
  | "ABENDI"
  | "SNQC"
  | "CONOCER"
  | "CGSB"
  | "AINDT"
  | "ISNT"
  | "SAEP"
  | "BNSP"
  | "COFREND"
  | "SAIW";

export interface SalaryBand {
  currency: string;        // local currency symbol/code e.g. "AED", "USD", "INR"
  levelI: string;          // e.g. "AED 5,000–8,000/month"
  levelII: string;
  levelIII: string;
  usdReference: string;    // approximate USD reference range for Level II
}

export interface ExamCenter {
  name: string;            // e.g. "Bureau Veritas Dubai"
  bodies: CertBody[];      // which authorities they administer
}

export interface InstructorBio {
  name: string;
  cert: string;           // e.g. "ASNT Level III (UT/RT/MT/PT)"
  experience: string;     // e.g. "22 years"
}

export interface UpcomingCohort {
  /** ISO offset from "today" in days — page renders date = today + offsetDays */
  offsetDays: number;
  /** Course name e.g. "UT Level II — 5-day intensive" */
  courseLabel: string;
  format: "Classroom" | "Hybrid" | "Online" | "Onsite";
}

export interface SiblingTrainingCity {
  /** Slug only — link rendered as /ndt-training-{slug} */
  slug: string;
  label: string;          // display label
}

export interface TrainingCityProfile {
  /** URL slug — e.g. "abu-dhabi", "stavanger" */
  slug: string;
  /** Display city name — e.g. "Abu Dhabi", "Stavanger" */
  city: string;
  /** ISO country code or region label — e.g. "UAE", "Norway", "USA" */
  country: string;
  /** Latitude for LocalBusiness schema */
  lat: number;
  /** Longitude for LocalBusiness schema */
  lng: number;
  /** 3-4 sentence local context paragraph naming real local employers + industry */
  localContext: string;
  /** Primary certification body for the region */
  primaryCert: CertBody;
  /** Secondary certification body */
  secondaryCert?: CertBody;
  /** Other commonly-accepted certifications in this market */
  otherCerts: CertBody[];
  /** 1-2 sentence explanation of WHY this cert mix is most common locally */
  certPathwayNote: string;
  /** Salary band specific to this city */
  salary: SalaryBand;
  /** Real local exam / test centers */
  examCenters: ExamCenter[];
  /** 4-5 closest sibling training cities for internal linking */
  siblings: SiblingTrainingCity[];
  /** Indicator: is this a country/region page rather than city */
  isCountry?: boolean;
}

// ─── Atlantis instructor roster (shared across all city pages) ───────────────
export const ATLANTIS_INSTRUCTORS: InstructorBio[] = [
  {
    name: "Anoop Rayavarapu",
    cert: "ASNT Level III (UT/RT/MT/PT/ET/VT) — Founder",
    experience: "20+ years",
  },
  {
    name: "Senior Level III Faculty",
    cert: "ASNT Level III — UT, PAUT, TOFD specialist",
    experience: "25+ years offshore & refining",
  },
  {
    name: "Welding Inspection Lead",
    cert: "CSWIP 3.2 Senior Welding Inspector + ASNT Level III",
    experience: "18 years EPC / fabrication",
  },
  {
    name: "Radiography Faculty",
    cert: "ASNT Level III RT + RSO (Radiation Safety Officer)",
    experience: "15 years pipeline & vessel RT",
  },
];

// ─── COUNTRY-LEVEL ARCHETYPES (used by both city + country pages) ────────────
const USA_OG_SIBLINGS: SiblingTrainingCity[] = [
  { slug: "houston", label: "Houston" },
  { slug: "new-orleans", label: "New Orleans" },
  { slug: "dallas", label: "Dallas" },
  { slug: "beaumont", label: "Beaumont" },
  { slug: "baton-rouge", label: "Baton Rouge" },
];

const GCC_SIBLINGS: SiblingTrainingCity[] = [
  { slug: "dubai", label: "Dubai" },
  { slug: "abu-dhabi", label: "Abu Dhabi" },
  { slug: "saudi-arabia", label: "Saudi Arabia" },
  { slug: "doha", label: "Doha" },
  { slug: "muscat", label: "Muscat" },
];

const INDIA_SIBLINGS: SiblingTrainingCity[] = [
  { slug: "mumbai", label: "Mumbai" },
  { slug: "chennai", label: "Chennai" },
  { slug: "bangalore", label: "Bangalore" },
  { slug: "delhi", label: "Delhi" },
  { slug: "kochi", label: "Kochi" },
];

const UK_NORTH_EU_SIBLINGS: SiblingTrainingCity[] = [
  { slug: "london", label: "London" },
  { slug: "glasgow", label: "Glasgow" },
  { slug: "edinburgh", label: "Edinburgh" },
  { slug: "stavanger", label: "Stavanger" },
  { slug: "rotterdam", label: "Rotterdam" },
];

const CANADA_SIBLINGS: SiblingTrainingCity[] = [
  { slug: "calgary", label: "Calgary" },
  { slug: "edmonton", label: "Edmonton" },
  { slug: "fort-mcmurray", label: "Fort McMurray" },
  { slug: "montreal", label: "Montreal" },
  { slug: "halifax", label: "Halifax" },
];

const AUSTRALIA_SIBLINGS: SiblingTrainingCity[] = [
  { slug: "perth", label: "Perth" },
  { slug: "brisbane", label: "Brisbane" },
  { slug: "melbourne", label: "Melbourne" },
  { slug: "sydney", label: "Sydney" },
];

const SE_ASIA_SIBLINGS: SiblingTrainingCity[] = [
  { slug: "singapore", label: "Singapore" },
  { slug: "kuala-lumpur", label: "Kuala Lumpur" },
  { slug: "jakarta", label: "Jakarta" },
  { slug: "ho-chi-minh", label: "Ho Chi Minh City" },
];

// ─── CITY PROFILES (~80 cities + ~10 country pages) ──────────────────────────
export const TRAINING_CITY_PROFILES: TrainingCityProfile[] = [
  // ──────── UAE & GCC (City-level) ────────────────────────────────
  {
    slug: "abu-dhabi",
    city: "Abu Dhabi",
    country: "UAE",
    lat: 24.4539, lng: 54.3773,
    localContext:
      "Abu Dhabi is the upstream and downstream nerve centre of the UAE, home to ADNOC Onshore, ADNOC Offshore, ADNOC Refining (Ruwais) and ADNOC Gas. Petrofac, Tecnimont, Bureau Veritas, TUV Rheinland and SGS run continuous NDT crews across Habshan, Bab and Ruwais, while Borouge runs Asia-Pacific's largest polyolefins complex at Ruwais West.",
    primaryCert: "ASNT",
    secondaryCert: "ISO 9712",
    otherCerts: ["PCN", "CSWIP", "SAEP"],
    certPathwayNote:
      "ADNOC and its tier-1 contractors accept ASNT SNT-TC-1A as default. European EPCs (Saipem, Tecnimont) prefer PCN or ISO 9712. CSWIP 3.1 is mandatory for welding inspector roles on most ADNOC LSTK packages.",
    salary: {
      currency: "AED",
      levelI: "AED 5,000–8,000/month (tax-free)",
      levelII: "AED 9,000–16,000/month (tax-free)",
      levelIII: "AED 18,000–32,000/month (tax-free)",
      usdReference: "USD 2,450–4,350 (Level II take-home)",
    },
    examCenters: [
      { name: "Bureau Veritas Abu Dhabi (Mussafah)", bodies: ["ASNT", "ISO 9712", "PCN"] },
      { name: "TUV Rheinland Abu Dhabi", bodies: ["ASNT", "ISO 9712"] },
      { name: "Applus+ Velosi Abu Dhabi", bodies: ["ASNT", "PCN", "ISO 9712"] },
    ],
    siblings: GCC_SIBLINGS,
  },
  {
    slug: "dammam",
    city: "Dammam",
    country: "Saudi Arabia",
    lat: 26.4207, lng: 50.0888,
    localContext:
      "Dammam is the heart of Saudi Arabia's Eastern Province oil & gas economy, just north of Saudi Aramco's headquarters in Dhahran. Major employers include Saudi Aramco, SABIC (Petrokemya, Saudi Kayan), Schlumberger, Halliburton, Baker Hughes and a deep bench of national NDT contractors (NESMA, Al-Tuwairqi, Zamil Steel). Dammam port also feeds offshore work in the Arabian Gulf.",
    primaryCert: "ASNT",
    secondaryCert: "SAEP",
    otherCerts: ["ISO 9712", "CSWIP", "PCN"],
    certPathwayNote:
      "Saudi Aramco contractor work requires SAEP-1112 compliance which references ASNT SNT-TC-1A as the basis for personnel qualification. ISO 9712 is increasingly accepted on SABIC and Sadara projects.",
    salary: {
      currency: "SAR",
      levelI: "SAR 5,000–7,500/month (tax-free)",
      levelII: "SAR 8,500–15,000/month (tax-free)",
      levelIII: "SAR 18,000–32,000/month (tax-free)",
      usdReference: "USD 2,250–4,000 (Level II take-home)",
    },
    examCenters: [
      { name: "Saudi Aramco Industrial Training Centre, Dhahran", bodies: ["ASNT", "SAEP"] },
      { name: "TUV Middle East Al-Khobar", bodies: ["ASNT", "ISO 9712", "PCN"] },
      { name: "Bureau Veritas Al-Khobar", bodies: ["ASNT", "ISO 9712"] },
    ],
    siblings: [
      { slug: "saudi-arabia", label: "Saudi Arabia" },
      { slug: "jubail", label: "Jubail" },
      { slug: "yanbu", label: "Yanbu" },
      { slug: "manama", label: "Manama" },
      { slug: "dubai", label: "Dubai" },
    ],
  },
  {
    slug: "jubail",
    city: "Jubail",
    country: "Saudi Arabia",
    lat: 27.0046, lng: 49.6580,
    localContext:
      "Jubail Industrial City is one of the world's largest petrochemical complexes. Major operators include SABIC affiliates (PetroKemya, SAFCO, Saudi Kayan, Yansab), Sadara (Aramco/Dow JV), SATORP refinery and dozens of EPC contractors during turnarounds — Petrofac, Tecnimont, Sinopec Engineering, and L&T. Every shutdown cycle absorbs hundreds of mobile NDT technicians.",
    primaryCert: "ASNT",
    secondaryCert: "SAEP",
    otherCerts: ["ISO 9712", "CSWIP"],
    certPathwayNote:
      "Jubail contractor packages cite SAEP-1112 + SAES-W-012 + Saudi Aramco 175 series specifications. ASNT Level II is the practical entry ticket; CSWIP 3.1 is required for any welding inspection role.",
    salary: {
      currency: "SAR",
      levelI: "SAR 5,500–8,000/month (plus camp + transport)",
      levelII: "SAR 9,000–16,000/month (plus benefits)",
      levelIII: "SAR 20,000–35,000/month (plus benefits)",
      usdReference: "USD 2,400–4,250 (Level II take-home)",
    },
    examCenters: [
      { name: "Saudi Aramco Jubail Training Center", bodies: ["ASNT", "SAEP"] },
      { name: "TUV NORD Saudi Arabia (Jubail branch)", bodies: ["ASNT", "ISO 9712"] },
      { name: "Velosi Jubail", bodies: ["ASNT", "PCN", "ISO 9712"] },
    ],
    siblings: [
      { slug: "saudi-arabia", label: "Saudi Arabia" },
      { slug: "dammam", label: "Dammam" },
      { slug: "yanbu", label: "Yanbu" },
      { slug: "manama", label: "Manama" },
      { slug: "kuwait", label: "Kuwait" },
    ],
  },
  {
    slug: "yanbu",
    city: "Yanbu",
    country: "Saudi Arabia",
    lat: 24.0233, lng: 38.1880,
    localContext:
      "Yanbu Industrial City on the Red Sea is Saudi Arabia's western oil & gas hub — home to Saudi Aramco's Yanbu Refinery, YASREF (Aramco/Sinopec JV), Petro Rabigh, and the SABIC Yanbu petrochemical complex (Yanpet, Yansab west of Jeddah). Continuous turnarounds drive demand for ASNT-certified UT, RT, PAUT and AUT technicians.",
    primaryCert: "ASNT",
    secondaryCert: "SAEP",
    otherCerts: ["ISO 9712", "CSWIP"],
    certPathwayNote:
      "All Saudi Aramco facilities in Yanbu apply SAEP-1112 personnel qualification — ASNT SNT-TC-1A is the recognised compliance basis. Yanbu also has growing renewables and NEOM-region adjacent project work that increasingly accepts ISO 9712.",
    salary: {
      currency: "SAR",
      levelI: "SAR 5,500–8,000/month",
      levelII: "SAR 9,000–16,000/month",
      levelIII: "SAR 19,000–34,000/month",
      usdReference: "USD 2,400–4,250 (Level II take-home)",
    },
    examCenters: [
      { name: "Saudi Aramco Yanbu Training Center", bodies: ["ASNT", "SAEP"] },
      { name: "Velosi Yanbu", bodies: ["ASNT", "PCN", "ISO 9712"] },
    ],
    siblings: [
      { slug: "saudi-arabia", label: "Saudi Arabia" },
      { slug: "jubail", label: "Jubail" },
      { slug: "dammam", label: "Dammam" },
      { slug: "dubai", label: "Dubai" },
      { slug: "kuwait", label: "Kuwait" },
    ],
  },
  {
    slug: "sharjah",
    city: "Sharjah",
    country: "UAE",
    lat: 25.3463, lng: 55.4209,
    localContext:
      "Sharjah hosts a dense cluster of fabrication yards, valve manufacturers and oilfield service shops along the Hamriyah Free Zone — Lamprell (jack-up rigs), Petrofac fabrication, Drydocks-related contractors, and dozens of stockyards supplying ADNOC. Hamriyah is also home to large pressure-vessel and skid fabricators serving GCC EPCs.",
    primaryCert: "ASNT",
    secondaryCert: "ISO 9712",
    otherCerts: ["PCN", "CSWIP"],
    certPathwayNote:
      "Fabrication yards in Sharjah follow client specs — usually ASNT for US-affiliated owners and PCN/CSWIP for UK and Norwegian operators. CSWIP 3.1 dominates welding inspector hiring.",
    salary: {
      currency: "AED",
      levelI: "AED 4,800–7,500/month (tax-free)",
      levelII: "AED 8,500–15,000/month (tax-free)",
      levelIII: "AED 17,000–30,000/month (tax-free)",
      usdReference: "USD 2,300–4,100 (Level II take-home)",
    },
    examCenters: [
      { name: "Bureau Veritas Sharjah", bodies: ["ASNT", "ISO 9712"] },
      { name: "Lloyd's Register Sharjah", bodies: ["PCN", "CSWIP"] },
      { name: "TUV Rheinland Sharjah", bodies: ["ASNT", "ISO 9712"] },
    ],
    siblings: GCC_SIBLINGS,
  },
  {
    slug: "ras-al-khaimah",
    city: "Ras Al Khaimah",
    country: "UAE",
    lat: 25.7895, lng: 55.9432,
    localContext:
      "Ras Al Khaimah (RAK) is the UAE's industrial cement and ceramics hub, also hosting RAK Gas operations, Stevin Rock quarries, Julphar Pharmaceuticals and an expanding fabrication base supplying ADNOC and DEWA projects. NDT demand mixes plant-side weld inspection with imported pipe and pressure-vessel acceptance.",
    primaryCert: "ASNT",
    secondaryCert: "ISO 9712",
    otherCerts: ["PCN", "CSWIP"],
    certPathwayNote:
      "RAK fabrication and gas operations align with ADNOC standards — ASNT primary, ISO 9712 secondary, with CSWIP for European-spec packages.",
    salary: {
      currency: "AED",
      levelI: "AED 4,500–7,000/month (tax-free)",
      levelII: "AED 8,000–14,000/month (tax-free)",
      levelIII: "AED 16,000–28,000/month (tax-free)",
      usdReference: "USD 2,180–3,800 (Level II take-home)",
    },
    examCenters: [
      { name: "Bureau Veritas Northern Emirates (RAK)", bodies: ["ASNT", "ISO 9712"] },
      { name: "Applus+ Velosi RAK", bodies: ["ASNT", "PCN"] },
    ],
    siblings: GCC_SIBLINGS,
  },
  {
    slug: "manama",
    city: "Manama",
    country: "Bahrain",
    lat: 26.2285, lng: 50.5860,
    localContext:
      "Manama hosts Bapco's Sitra refinery (now post-modernisation), GPIC fertilisers, Alba aluminium smelter (one of the world's largest) and the Tatweer Petroleum joint venture operating the onshore Bahrain Field. Eastern province contractors crew freely between Bahrain and Saudi Arabia via the King Fahd Causeway.",
    primaryCert: "ASNT",
    secondaryCert: "ISO 9712",
    otherCerts: ["PCN", "CSWIP", "SAEP"],
    certPathwayNote:
      "Bapco, GPIC and Alba accept ASNT SNT-TC-1A as the baseline standard. Saudi Aramco SAEP-1112 is honoured for cross-border crews. CSWIP for welding inspection on Bapco modernisation packages is common.",
    salary: {
      currency: "BHD",
      levelI: "BHD 500–800/month (tax-free)",
      levelII: "BHD 900–1,600/month (tax-free)",
      levelIII: "BHD 1,800–3,200/month (tax-free)",
      usdReference: "USD 2,400–4,250 (Level II take-home)",
    },
    examCenters: [
      { name: "Bureau Veritas Bahrain", bodies: ["ASNT", "ISO 9712"] },
      { name: "TUV Middle East Bahrain", bodies: ["ASNT", "ISO 9712"] },
    ],
    siblings: GCC_SIBLINGS,
  },
  {
    slug: "muscat",
    city: "Muscat",
    country: "Oman",
    lat: 23.5859, lng: 58.4059,
    localContext:
      "Muscat anchors Oman's hydrocarbon economy — PDO (Petroleum Development Oman), OQ, Oman LNG (Qalhat), Daleel Petroleum and BP Oman Khazzan tight gas. The Sohar–Duqm corridor adds refining, steel (Jindal Shadeed) and orient-port fabrication work feeding NDT demand year-round.",
    primaryCert: "ASNT",
    secondaryCert: "ISO 9712",
    otherCerts: ["PCN", "CSWIP"],
    certPathwayNote:
      "PDO contractor specifications (SP-1191 series) align with ASNT SNT-TC-1A. ISO 9712 is broadly accepted on Oman LNG and OQ projects, while PCN appears on UK/EU-led EPC packages.",
    salary: {
      currency: "OMR",
      levelI: "OMR 400–650/month (tax-free)",
      levelII: "OMR 750–1,400/month (tax-free)",
      levelIII: "OMR 1,500–2,800/month (tax-free)",
      usdReference: "USD 1,950–3,650 (Level II take-home)",
    },
    examCenters: [
      { name: "Bureau Veritas Muscat", bodies: ["ASNT", "ISO 9712"] },
      { name: "TUV Middle East Muscat", bodies: ["ASNT", "ISO 9712"] },
    ],
    siblings: GCC_SIBLINGS,
  },
  {
    slug: "sohar",
    city: "Sohar",
    country: "Oman",
    lat: 24.3433, lng: 56.7459,
    localContext:
      "Sohar Industrial Port is Oman's heavy-industry cluster — OQ Sohar refinery, Vale pelletising plant, Jindal Shadeed steel and the Liwa Plastics complex. The port is also one of the Middle East's largest aluminium and steel reception terminals, generating continuous weld inspection and pressure-vessel NDT demand.",
    primaryCert: "ASNT",
    secondaryCert: "ISO 9712",
    otherCerts: ["PCN", "CSWIP"],
    certPathwayNote:
      "OQ and Sohar Port operators follow the same SP-1191 / ASNT-aligned framework as PDO. CSWIP is mandatory for welding inspector roles at Jindal Shadeed and OQ fabrication.",
    salary: {
      currency: "OMR",
      levelI: "OMR 380–620/month",
      levelII: "OMR 720–1,350/month",
      levelIII: "OMR 1,450–2,700/month",
      usdReference: "USD 1,870–3,500 (Level II take-home)",
    },
    examCenters: [
      { name: "Bureau Veritas Sohar", bodies: ["ASNT", "ISO 9712"] },
      { name: "Lloyd's Register Sohar", bodies: ["PCN", "CSWIP"] },
    ],
    siblings: GCC_SIBLINGS,
  },
  {
    slug: "kuwait",
    city: "Kuwait City",
    country: "Kuwait",
    lat: 29.3759, lng: 47.9774,
    localContext:
      "Kuwait City sits at the centre of KOC's upstream operations, KNPC's three refineries (Mina Abdullah, Mina Al-Ahmadi, Shuaiba post-Clean Fuels), and PIC petrochemicals. The Al-Zour Refinery — one of the world's largest greenfield refineries — continues to expand turnaround and inspection scopes.",
    primaryCert: "ASNT",
    secondaryCert: "ISO 9712",
    otherCerts: ["PCN", "CSWIP"],
    certPathwayNote:
      "KOC and KNPC accept ASNT SNT-TC-1A as the basis for personnel qualification. PCN dominates on UK-led EPC contracts (Petrofac, Wood). CSWIP 3.1 is the welding inspector standard.",
    salary: {
      currency: "KWD",
      levelI: "KWD 380–600/month (tax-free)",
      levelII: "KWD 700–1,300/month (tax-free)",
      levelIII: "KWD 1,400–2,600/month (tax-free)",
      usdReference: "USD 2,280–4,250 (Level II take-home)",
    },
    examCenters: [
      { name: "Bureau Veritas Kuwait", bodies: ["ASNT", "ISO 9712"] },
      { name: "TUV NORD Kuwait", bodies: ["ASNT", "ISO 9712"] },
      { name: "Velosi Kuwait", bodies: ["ASNT", "PCN", "ISO 9712"] },
    ],
    siblings: GCC_SIBLINGS,
  },
  {
    slug: "qatar",
    city: "Doha",
    country: "Qatar",
    lat: 25.2854, lng: 51.5310,
    localContext:
      "Doha is the QatarEnergy capital. The North Field expansion (NFE + NFS) will lift LNG output from 77 to 142 MTPA by 2030, creating one of the world's largest single-country inspection demand surges. QatarEnergy LNG (formerly Qatargas), Qapco, QAFAC, and major contractors (McDermott, Chiyoda, Hyundai E&C, Tecnicas Reunidas) all run continuous NDT crews.",
    primaryCert: "ASNT",
    secondaryCert: "ISO 9712",
    otherCerts: ["PCN", "CSWIP"],
    certPathwayNote:
      "QatarEnergy contractor specifications cite ASNT SNT-TC-1A and ISO 9712 interchangeably. CSWIP 3.1 is the de-facto welding inspection standard on NFE EPC packages.",
    salary: {
      currency: "QAR",
      levelI: "QAR 5,500–9,000/month (tax-free)",
      levelII: "QAR 10,000–18,000/month (tax-free)",
      levelIII: "QAR 20,000–35,000/month (tax-free)",
      usdReference: "USD 2,750–4,950 (Level II take-home)",
    },
    examCenters: [
      { name: "Bureau Veritas Doha", bodies: ["ASNT", "ISO 9712"] },
      { name: "TUV NORD Qatar", bodies: ["ASNT", "ISO 9712"] },
      { name: "QatarEnergy CP Examination Centre", bodies: ["ASNT", "ISO 9712"] },
    ],
    siblings: GCC_SIBLINGS,
  },

  // ──────── USA Cities ────────────────────────────────────────────
  {
    slug: "anchorage",
    city: "Anchorage",
    country: "USA",
    lat: 61.2181, lng: -149.9003,
    localContext:
      "Anchorage is the inspection hub for Alaska's oil & gas industry — ConocoPhillips Alaska (Kuparuk, Willow), Hilcorp Alaska, BP Alaska legacy assets, and the Trans-Alaska Pipeline System operated by Alyeska Pipeline. Cold-environment UT, AUT and pipeline integrity work dominate, with significant API 570/653 demand on North Slope facilities.",
    primaryCert: "ASNT",
    secondaryCert: "CSWIP",
    otherCerts: ["ISO 9712"],
    certPathwayNote:
      "Alaska oil & gas operators follow ASNT SNT-TC-1A as the personnel qualification basis. API 570 / 653 inspector certifications are mandatory for in-service piping and tank inspection on the North Slope.",
    salary: {
      currency: "USD",
      levelI: "USD 55,000–72,000/year",
      levelII: "USD 75,000–115,000/year (rotational North Slope premium)",
      levelIII: "USD 130,000–185,000/year",
      usdReference: "USD 75,000–115,000",
    },
    examCenters: [
      { name: "Acuren Anchorage (Mistras affiliate region)", bodies: ["ASNT"] },
      { name: "MISTRAS Group Anchorage Office", bodies: ["ASNT"] },
    ],
    siblings: [
      { slug: "houston", label: "Houston" },
      { slug: "denver", label: "Denver" },
      { slug: "seattle", label: "Seattle" },
      { slug: "calgary", label: "Calgary" },
      { slug: "fort-mcmurray", label: "Fort McMurray" },
    ],
  },
  {
    slug: "austin",
    city: "Austin",
    country: "USA",
    lat: 30.2672, lng: -97.7431,
    localContext:
      "Austin is increasingly a high-tech and semiconductor manufacturing hub — Samsung Austin Semiconductor, Tesla Gigafactory Texas, NXP, and a growing additive-manufacturing cluster. While not a refining city, Austin-based NDT work focuses on aerospace (Bell, Lockheed Skunk Works), semiconductor process piping, and structural inspection for major construction.",
    primaryCert: "ASNT",
    secondaryCert: "CSWIP",
    otherCerts: ["ISO 9712"],
    certPathwayNote:
      "ASNT SNT-TC-1A is the dominant cert for Austin's aerospace and high-tech manufacturing. Texas-based oil & gas contractors crossing into Austin also require API 510/570/653 for in-service work.",
    salary: {
      currency: "USD",
      levelI: "USD 48,000–62,000/year",
      levelII: "USD 65,000–90,000/year",
      levelIII: "USD 105,000–155,000/year",
      usdReference: "USD 65,000–90,000",
    },
    examCenters: [
      { name: "Acuren Austin", bodies: ["ASNT"] },
      { name: "Applus+ RTD Austin", bodies: ["ASNT"] },
    ],
    siblings: [
      { slug: "houston", label: "Houston" },
      { slug: "dallas", label: "Dallas" },
      { slug: "fort-worth", label: "Fort Worth" },
      { slug: "san-diego", label: "San Diego" },
      { slug: "corpus-christi", label: "Corpus Christi" },
    ],
  },
  {
    slug: "baton-rouge",
    city: "Baton Rouge",
    country: "USA",
    lat: 30.4515, lng: -91.1871,
    localContext:
      "Baton Rouge is the largest refining centre on the Mississippi River — ExxonMobil Baton Rouge Refinery (one of the largest in the US), ExxonMobil Chemical Plant, Shell Geismar, BASF, Dow Plaquemine. The Louisiana petrochemical corridor employs thousands of API-certified inspectors and NDT technicians.",
    primaryCert: "ASNT",
    secondaryCert: "CSWIP",
    otherCerts: ["ISO 9712"],
    certPathwayNote:
      "Louisiana refining operators use ASNT SNT-TC-1A across personnel qualification, with API 510 / 570 / 653 as the in-service inspector pathway. Mistras, Acuren, Team Industrial Services and IEM all maintain large NDT crews in Baton Rouge.",
    salary: {
      currency: "USD",
      levelI: "USD 45,000–58,000/year",
      levelII: "USD 62,000–88,000/year (turnaround premium)",
      levelIII: "USD 105,000–155,000/year",
      usdReference: "USD 62,000–88,000",
    },
    examCenters: [
      { name: "Acuren Baton Rouge", bodies: ["ASNT"] },
      { name: "MISTRAS Group Baton Rouge", bodies: ["ASNT"] },
      { name: "Team Industrial Services Baton Rouge", bodies: ["ASNT"] },
    ],
    siblings: [
      { slug: "new-orleans", label: "New Orleans" },
      { slug: "lake-charles", label: "Lake Charles" },
      { slug: "houston", label: "Houston" },
      { slug: "beaumont", label: "Beaumont" },
      { slug: "mobile", label: "Mobile" },
    ],
  },
  {
    slug: "beaumont",
    city: "Beaumont",
    country: "USA",
    lat: 30.0860, lng: -94.1018,
    localContext:
      "Beaumont and the wider Sabine-Neches industrial corridor host ExxonMobil Beaumont Refinery (the largest in the US after the Beaumont expansion), Motiva Port Arthur (the single largest US refinery by capacity), TotalEnergies Port Arthur, and Valero. Every turnaround at one of these plants pulls hundreds of mobile NDT technicians from across Texas and Louisiana.",
    primaryCert: "ASNT",
    secondaryCert: "CSWIP",
    otherCerts: ["ISO 9712"],
    certPathwayNote:
      "The Sabine-Neches refining corridor runs on ASNT SNT-TC-1A. API 510/570/653 inspector certifications are essential for in-service piping, vessel and tank work. CSWIP 3.1 is widely accepted for fabrication-side welding inspection.",
    salary: {
      currency: "USD",
      levelI: "USD 44,000–58,000/year",
      levelII: "USD 62,000–92,000/year (turnaround OT can push past $130K)",
      levelIII: "USD 105,000–160,000/year",
      usdReference: "USD 62,000–92,000",
    },
    examCenters: [
      { name: "Acuren Beaumont", bodies: ["ASNT"] },
      { name: "MISTRAS Group Beaumont/Port Arthur", bodies: ["ASNT"] },
      { name: "Applus+ Beaumont", bodies: ["ASNT"] },
    ],
    siblings: [
      { slug: "houston", label: "Houston" },
      { slug: "baton-rouge", label: "Baton Rouge" },
      { slug: "lake-charles", label: "Lake Charles" },
      { slug: "new-orleans", label: "New Orleans" },
      { slug: "corpus-christi", label: "Corpus Christi" },
    ],
  },
  {
    slug: "cincinnati",
    city: "Cincinnati",
    country: "USA",
    lat: 39.1031, lng: -84.5120,
    localContext:
      "Cincinnati anchors the Ohio Valley manufacturing belt — GE Aviation (the world's largest commercial-engine maker, HQ in Evendale), Procter & Gamble, Cincinnati Milacron tool & die, AK Steel. Aerospace NDT (NAS-410, Nadcap AC7114) drives Level II/III demand, supplemented by petrochemical work along the Ohio River.",
    primaryCert: "ASNT",
    secondaryCert: "CSWIP",
    otherCerts: ["ISO 9712"],
    certPathwayNote:
      "GE Aviation and its supply chain use ASNT SNT-TC-1A with NAS-410 aerospace overlay. ASNT certification is essential; NAS-410 employer letters add a layer specific to aerospace primes.",
    salary: {
      currency: "USD",
      levelI: "USD 46,000–60,000/year",
      levelII: "USD 64,000–88,000/year",
      levelIII: "USD 105,000–150,000/year",
      usdReference: "USD 64,000–88,000",
    },
    examCenters: [
      { name: "Acuren Cincinnati", bodies: ["ASNT"] },
      { name: "MISTRAS Group Cincinnati", bodies: ["ASNT"] },
    ],
    siblings: [
      { slug: "cleveland", label: "Cleveland" },
      { slug: "detroit", label: "Detroit" },
      { slug: "indianapolis", label: "Indianapolis" },
      { slug: "pittsburgh", label: "Pittsburgh" },
      { slug: "kansas-city", label: "Kansas City" },
    ],
  },
  {
    slug: "cleveland",
    city: "Cleveland",
    country: "USA",
    lat: 41.4993, lng: -81.6944,
    localContext:
      "Cleveland is the manufacturing core of northeast Ohio — Cleveland-Cliffs (steel), Sherwin-Williams, Eaton Corporation, NASA Glenn Research Center, and Lincoln Electric (one of the world's largest welding equipment makers). Steel mills and fabrication shops generate dense Level II UT/MT/PT and PAUT demand.",
    primaryCert: "ASNT",
    secondaryCert: "CSWIP",
    otherCerts: ["ISO 9712"],
    certPathwayNote:
      "Steel and heavy-equipment manufacturing in Cleveland defaults to ASNT SNT-TC-1A. AWS CWI (Certified Welding Inspector) is the dominant welding inspection credential, complementing ASNT for fabrication.",
    salary: {
      currency: "USD",
      levelI: "USD 44,000–58,000/year",
      levelII: "USD 60,000–84,000/year",
      levelIII: "USD 100,000–142,000/year",
      usdReference: "USD 60,000–84,000",
    },
    examCenters: [
      { name: "Acuren Cleveland", bodies: ["ASNT"] },
      { name: "MISTRAS Group Cleveland", bodies: ["ASNT"] },
    ],
    siblings: [
      { slug: "cincinnati", label: "Cincinnati" },
      { slug: "detroit", label: "Detroit" },
      { slug: "pittsburgh", label: "Pittsburgh" },
      { slug: "indianapolis", label: "Indianapolis" },
      { slug: "milwaukee", label: "Milwaukee" },
    ],
  },
  {
    slug: "corpus-christi",
    city: "Corpus Christi",
    country: "USA",
    lat: 27.8006, lng: -97.3964,
    localContext:
      "Corpus Christi is the largest US crude oil export port and a major refining centre — Citgo, Flint Hills Resources, Valero Refining (Bill Greehey + Three Rivers), Cheniere Energy Corpus Christi LNG, and ExxonMobil's Gulf Coast Growth Ventures (with Saudi Basic Industries) at Gregory. Continuous LNG construction and refinery turnarounds drive enormous NDT demand.",
    primaryCert: "ASNT",
    secondaryCert: "CSWIP",
    otherCerts: ["ISO 9712"],
    certPathwayNote:
      "Texas Gulf Coast refining and LNG construction runs on ASNT SNT-TC-1A and API 510 / 570 / 653. CSWIP 3.1 is widely accepted at LNG EPC sites led by Bechtel and McDermott.",
    salary: {
      currency: "USD",
      levelI: "USD 45,000–60,000/year",
      levelII: "USD 64,000–92,000/year",
      levelIII: "USD 108,000–155,000/year",
      usdReference: "USD 64,000–92,000",
    },
    examCenters: [
      { name: "Acuren Corpus Christi", bodies: ["ASNT"] },
      { name: "MISTRAS Group Corpus Christi", bodies: ["ASNT"] },
      { name: "Applus+ RTD Corpus Christi", bodies: ["ASNT"] },
    ],
    siblings: [
      { slug: "houston", label: "Houston" },
      { slug: "beaumont", label: "Beaumont" },
      { slug: "baton-rouge", label: "Baton Rouge" },
      { slug: "new-orleans", label: "New Orleans" },
      { slug: "lake-charles", label: "Lake Charles" },
    ],
  },
  {
    slug: "detroit",
    city: "Detroit",
    country: "USA",
    lat: 42.3314, lng: -83.0458,
    localContext:
      "Detroit anchors US automotive and heavy-equipment manufacturing — Ford, GM and Stellantis world headquarters, plus their major stamping, engine and powertrain plants. Aerospace and defense (Williams International turbines, BAE Land Systems) add structural and pressure-vessel NDT demand.",
    primaryCert: "ASNT",
    secondaryCert: "CSWIP",
    otherCerts: ["ISO 9712"],
    certPathwayNote:
      "Automotive Tier 1 suppliers use ASNT SNT-TC-1A with IATF 16949 quality framework. Aerospace primes layer on NAS-410. AWS CWI is the welding inspection credential of choice.",
    salary: {
      currency: "USD",
      levelI: "USD 44,000–58,000/year",
      levelII: "USD 60,000–84,000/year",
      levelIII: "USD 102,000–142,000/year",
      usdReference: "USD 60,000–84,000",
    },
    examCenters: [
      { name: "Acuren Detroit", bodies: ["ASNT"] },
      { name: "MISTRAS Group Detroit", bodies: ["ASNT"] },
    ],
    siblings: [
      { slug: "cleveland", label: "Cleveland" },
      { slug: "cincinnati", label: "Cincinnati" },
      { slug: "milwaukee", label: "Milwaukee" },
      { slug: "indianapolis", label: "Indianapolis" },
      { slug: "minneapolis", label: "Minneapolis" },
    ],
  },
  {
    slug: "fort-worth",
    city: "Fort Worth",
    country: "USA",
    lat: 32.7555, lng: -97.3308,
    localContext:
      "Fort Worth is one of the largest aerospace manufacturing centres in the world — Lockheed Martin Aeronautics (F-35, F-16 production), Bell Textron (rotorcraft), Bombardier, and L3Harris. Energy-side, the Barnett Shale midstream and West Texas pipeline operators run continuous NDT work too.",
    primaryCert: "ASNT",
    secondaryCert: "CSWIP",
    otherCerts: ["ISO 9712"],
    certPathwayNote:
      "Fort Worth aerospace primes operate under ASNT SNT-TC-1A and NAS-410 / EN 4179, with Nadcap AC7114 accreditation for NDT suppliers. ASNT Level II in PT, MT, UT and ET is the minimum hire.",
    salary: {
      currency: "USD",
      levelI: "USD 48,000–62,000/year",
      levelII: "USD 65,000–92,000/year",
      levelIII: "USD 108,000–155,000/year",
      usdReference: "USD 65,000–92,000",
    },
    examCenters: [
      { name: "Acuren Fort Worth", bodies: ["ASNT"] },
      { name: "MISTRAS Group Fort Worth", bodies: ["ASNT"] },
    ],
    siblings: [
      { slug: "dallas", label: "Dallas" },
      { slug: "houston", label: "Houston" },
      { slug: "oklahoma-city", label: "Oklahoma City" },
      { slug: "tulsa", label: "Tulsa" },
      { slug: "austin", label: "Austin" },
    ],
  },
  {
    slug: "kansas-city",
    city: "Kansas City",
    country: "USA",
    lat: 39.0997, lng: -94.5786,
    localContext:
      "Kansas City hosts NNSA's Kansas City National Security Campus (Honeywell), Ford Kansas City Assembly, General Motors Fairfax Assembly, Hallmark Cards, and the world's second-largest rail hub. Aerospace, defense and rail inspection drive the NDT mix here, plus pipeline crossings of the Mississippi/Missouri network.",
    primaryCert: "ASNT",
    secondaryCert: "CSWIP",
    otherCerts: ["ISO 9712"],
    certPathwayNote:
      "Kansas City defense and aerospace work follows ASNT SNT-TC-1A with NAS-410 for aerospace. Rail inspection follows AAR/FRA-recognised programs that still rely on ASNT for personnel qualification.",
    salary: {
      currency: "USD",
      levelI: "USD 44,000–58,000/year",
      levelII: "USD 60,000–84,000/year",
      levelIII: "USD 100,000–142,000/year",
      usdReference: "USD 60,000–84,000",
    },
    examCenters: [
      { name: "Acuren Kansas City", bodies: ["ASNT"] },
      { name: "MISTRAS Group Kansas City", bodies: ["ASNT"] },
    ],
    siblings: [
      { slug: "st-louis", label: "St. Louis" },
      { slug: "tulsa", label: "Tulsa" },
      { slug: "oklahoma-city", label: "Oklahoma City" },
      { slug: "minneapolis", label: "Minneapolis" },
      { slug: "indianapolis", label: "Indianapolis" },
    ],
  },
  {
    slug: "lake-charles",
    city: "Lake Charles",
    country: "USA",
    lat: 30.2266, lng: -93.2174,
    localContext:
      "Lake Charles is one of the densest LNG and petrochemical construction zones in North America — Sasol Lake Charles Chemical Project, Cheniere Sabine Pass LNG, Cameron LNG, Venture Global, Phillips 66 Lake Charles Refinery, and Citgo Lake Charles. EPC contractors Bechtel and McDermott run continuous LNG construction NDT crews here.",
    primaryCert: "ASNT",
    secondaryCert: "CSWIP",
    otherCerts: ["ISO 9712"],
    certPathwayNote:
      "Gulf Coast LNG and refining work uses ASNT SNT-TC-1A as the personnel basis with API 510 / 570 / 653 for in-service inspection. CSWIP 3.1 is heavily used on Bechtel and McDermott LNG packages.",
    salary: {
      currency: "USD",
      levelI: "USD 46,000–60,000/year",
      levelII: "USD 64,000–94,000/year (LNG project premium + OT)",
      levelIII: "USD 108,000–160,000/year",
      usdReference: "USD 64,000–94,000",
    },
    examCenters: [
      { name: "Acuren Lake Charles", bodies: ["ASNT"] },
      { name: "MISTRAS Group Lake Charles", bodies: ["ASNT"] },
      { name: "Applus+ RTD Lake Charles", bodies: ["ASNT"] },
    ],
    siblings: [
      { slug: "houston", label: "Houston" },
      { slug: "beaumont", label: "Beaumont" },
      { slug: "baton-rouge", label: "Baton Rouge" },
      { slug: "new-orleans", label: "New Orleans" },
      { slug: "mobile", label: "Mobile" },
    ],
  },
  {
    slug: "midland",
    city: "Midland",
    country: "USA",
    lat: 31.9974, lng: -102.0779,
    localContext:
      "Midland is the heart of the Permian Basin — the most prolific oil-producing region in the United States. Pioneer Natural Resources (now ExxonMobil), Diamondback Energy, Occidental Petroleum, ConocoPhillips, Endeavor Energy, Chevron and Halliburton all run massive operations here. NDT work focuses on midstream pipelines, frac iron, and processing facilities.",
    primaryCert: "ASNT",
    secondaryCert: "CSWIP",
    otherCerts: ["ISO 9712"],
    certPathwayNote:
      "Permian Basin operators use ASNT SNT-TC-1A. API 1104 weld inspection on cross-country pipelines is mandatory. AWS CWI is the common welding inspection credential.",
    salary: {
      currency: "USD",
      levelI: "USD 48,000–64,000/year",
      levelII: "USD 70,000–105,000/year (Permian premium + per diem)",
      levelIII: "USD 115,000–170,000/year",
      usdReference: "USD 70,000–105,000",
    },
    examCenters: [
      { name: "Acuren Midland", bodies: ["ASNT"] },
      { name: "MISTRAS Group Midland-Odessa", bodies: ["ASNT"] },
    ],
    siblings: [
      { slug: "houston", label: "Houston" },
      { slug: "fort-worth", label: "Fort Worth" },
      { slug: "dallas", label: "Dallas" },
      { slug: "oklahoma-city", label: "Oklahoma City" },
      { slug: "tulsa", label: "Tulsa" },
    ],
  },
  {
    slug: "milwaukee",
    city: "Milwaukee",
    country: "USA",
    lat: 43.0389, lng: -87.9065,
    localContext:
      "Milwaukee is a major manufacturing hub — Harley-Davidson, Rockwell Automation, Johnson Controls, Briggs & Stratton, Joy Global (mining equipment), and Generac power generation. Heavy fabrication, pressure-vessel and pipeline manufacturing across southeast Wisconsin drives Level II UT, RT, MT and PT demand.",
    primaryCert: "ASNT",
    secondaryCert: "CSWIP",
    otherCerts: ["ISO 9712"],
    certPathwayNote:
      "Wisconsin manufacturing follows ASNT SNT-TC-1A. AWS CWI is the dominant welding inspection credential for fabrication shops supplying power-gen and infrastructure markets.",
    salary: {
      currency: "USD",
      levelI: "USD 44,000–58,000/year",
      levelII: "USD 60,000–82,000/year",
      levelIII: "USD 100,000–140,000/year",
      usdReference: "USD 60,000–82,000",
    },
    examCenters: [
      { name: "Acuren Milwaukee", bodies: ["ASNT"] },
      { name: "MISTRAS Group Milwaukee", bodies: ["ASNT"] },
    ],
    siblings: [
      { slug: "minneapolis", label: "Minneapolis" },
      { slug: "chicago", label: "Chicago" },
      { slug: "detroit", label: "Detroit" },
      { slug: "indianapolis", label: "Indianapolis" },
      { slug: "cleveland", label: "Cleveland" },
    ],
  },
  {
    slug: "minneapolis",
    city: "Minneapolis",
    country: "USA",
    lat: 44.9778, lng: -93.2650,
    localContext:
      "Minneapolis-St. Paul anchors a diversified industrial economy — 3M, Honeywell Aerospace (Minneapolis), Cargill, Polaris Industries, and Flint Hills Resources Pine Bend Refinery (the largest in the upper Midwest). Aerospace, refining, and food-grade pressure-vessel NDT are the dominant niches.",
    primaryCert: "ASNT",
    secondaryCert: "CSWIP",
    otherCerts: ["ISO 9712"],
    certPathwayNote:
      "Twin Cities aerospace and refining work uses ASNT SNT-TC-1A. Pine Bend refinery follows API 510/570/653 for in-service inspection. Honeywell uses NAS-410 overlay on aerospace NDT roles.",
    salary: {
      currency: "USD",
      levelI: "USD 44,000–58,000/year",
      levelII: "USD 60,000–84,000/year",
      levelIII: "USD 102,000–144,000/year",
      usdReference: "USD 60,000–84,000",
    },
    examCenters: [
      { name: "Acuren Minneapolis", bodies: ["ASNT"] },
      { name: "MISTRAS Group Minneapolis-St. Paul", bodies: ["ASNT"] },
    ],
    siblings: [
      { slug: "milwaukee", label: "Milwaukee" },
      { slug: "chicago", label: "Chicago" },
      { slug: "kansas-city", label: "Kansas City" },
      { slug: "detroit", label: "Detroit" },
      { slug: "indianapolis", label: "Indianapolis" },
    ],
  },
  {
    slug: "mobile",
    city: "Mobile",
    country: "USA",
    lat: 30.6954, lng: -88.0399,
    localContext:
      "Mobile is the Gulf Coast's largest shipbuilding centre — Austal USA (US Navy combat ships), Ingalls Shipbuilding (just east in Pascagoula), Airbus Mobile A320/A220 final assembly, and ThyssenKrupp Steel USA. Port operations, pipeline integrity along the Gulf shore, and Hyundai Steel feed continuous NDT demand.",
    primaryCert: "ASNT",
    secondaryCert: "CSWIP",
    otherCerts: ["ISO 9712"],
    certPathwayNote:
      "Mobile shipbuilding and aerospace work uses ASNT SNT-TC-1A. Austal USA and Ingalls follow MIL-STD-2154 / NAVSEA naval inspection standards layered on ASNT certification.",
    salary: {
      currency: "USD",
      levelI: "USD 43,000–56,000/year",
      levelII: "USD 58,000–82,000/year",
      levelIII: "USD 98,000–140,000/year",
      usdReference: "USD 58,000–82,000",
    },
    examCenters: [
      { name: "Acuren Mobile", bodies: ["ASNT"] },
      { name: "MISTRAS Group Mobile", bodies: ["ASNT"] },
    ],
    siblings: [
      { slug: "baton-rouge", label: "Baton Rouge" },
      { slug: "new-orleans", label: "New Orleans" },
      { slug: "houston", label: "Houston" },
      { slug: "jacksonville", label: "Jacksonville" },
      { slug: "tampa", label: "Tampa" },
    ],
  },
  {
    slug: "nashville",
    city: "Nashville",
    country: "USA",
    lat: 36.1627, lng: -86.7816,
    localContext:
      "Nashville is one of the fastest-growing US industrial regions — Nissan North America, Bridgestone Americas HQ, General Motors Spring Hill, and a major Amazon and Oracle technology presence. Industrial NDT centres on automotive Tier 1 supply, pressure vessels for biopharma and energy, and TVA power generation across Tennessee.",
    primaryCert: "ASNT",
    secondaryCert: "CSWIP",
    otherCerts: ["ISO 9712"],
    certPathwayNote:
      "TVA (Tennessee Valley Authority) power generation and Nashville-area manufacturing default to ASNT SNT-TC-1A. AWS CWI dominates welding inspection on fabrication and infrastructure work.",
    salary: {
      currency: "USD",
      levelI: "USD 43,000–56,000/year",
      levelII: "USD 58,000–82,000/year",
      levelIII: "USD 98,000–140,000/year",
      usdReference: "USD 58,000–82,000",
    },
    examCenters: [
      { name: "Acuren Nashville", bodies: ["ASNT"] },
      { name: "MISTRAS Group Nashville", bodies: ["ASNT"] },
    ],
    siblings: [
      { slug: "indianapolis", label: "Indianapolis" },
      { slug: "atlanta", label: "Atlanta" },
      { slug: "cincinnati", label: "Cincinnati" },
      { slug: "kansas-city", label: "Kansas City" },
      { slug: "st-louis", label: "St. Louis" },
    ],
  },
  {
    slug: "oklahoma-city",
    city: "Oklahoma City",
    country: "USA",
    lat: 35.4676, lng: -97.5164,
    localContext:
      "Oklahoma City sits on top of the SCOOP / STACK / Anadarko Basin oil & gas plays — Devon Energy, Continental Resources, Chesapeake Energy, OGE Energy, and ONEOK Inc. midstream all run massive operations. The Tinker Air Force Base depot is one of the largest USAF aircraft repair facilities and a major NDT employer.",
    primaryCert: "ASNT",
    secondaryCert: "CSWIP",
    otherCerts: ["ISO 9712"],
    certPathwayNote:
      "Oklahoma oil & gas and Tinker AFB aerospace both default to ASNT SNT-TC-1A. NAS-410 layered for aerospace; API 1104 weld inspection mandatory for pipeline work.",
    salary: {
      currency: "USD",
      levelI: "USD 44,000–58,000/year",
      levelII: "USD 60,000–88,000/year",
      levelIII: "USD 100,000–148,000/year",
      usdReference: "USD 60,000–88,000",
    },
    examCenters: [
      { name: "Acuren Oklahoma City", bodies: ["ASNT"] },
      { name: "MISTRAS Group Oklahoma City", bodies: ["ASNT"] },
    ],
    siblings: [
      { slug: "tulsa", label: "Tulsa" },
      { slug: "midland", label: "Midland" },
      { slug: "fort-worth", label: "Fort Worth" },
      { slug: "dallas", label: "Dallas" },
      { slug: "kansas-city", label: "Kansas City" },
    ],
  },
  {
    slug: "st-louis",
    city: "St. Louis",
    country: "USA",
    lat: 38.6270, lng: -90.1994,
    localContext:
      "St. Louis is one of the largest aerospace and defense manufacturing centres in the US Midwest — Boeing Defense, Space & Security (F/A-18, F-15, MQ-25 production), Emerson, Anheuser-Busch, and Phillips 66 Wood River Refinery (Roxana, IL just across the river). Heavy rail, river barge and pipeline industries add continuous NDT scope.",
    primaryCert: "ASNT",
    secondaryCert: "CSWIP",
    otherCerts: ["ISO 9712"],
    certPathwayNote:
      "Boeing Defense work in St. Louis follows ASNT SNT-TC-1A + NAS-410. Wood River Refinery and adjacent petrochemical operations use ASNT + API 510/570/653. AWS CWI is widely held.",
    salary: {
      currency: "USD",
      levelI: "USD 44,000–58,000/year",
      levelII: "USD 60,000–84,000/year",
      levelIII: "USD 100,000–144,000/year",
      usdReference: "USD 60,000–84,000",
    },
    examCenters: [
      { name: "Acuren St. Louis", bodies: ["ASNT"] },
      { name: "MISTRAS Group St. Louis", bodies: ["ASNT"] },
    ],
    siblings: [
      { slug: "kansas-city", label: "Kansas City" },
      { slug: "indianapolis", label: "Indianapolis" },
      { slug: "nashville", label: "Nashville" },
      { slug: "cincinnati", label: "Cincinnati" },
      { slug: "minneapolis", label: "Minneapolis" },
    ],
  },
  {
    slug: "tulsa",
    city: "Tulsa",
    country: "USA",
    lat: 36.1540, lng: -95.9928,
    localContext:
      "Tulsa is historically the 'Oil Capital of the World' and remains a midstream and downstream hub — Williams Companies (midstream gas), HF Sinclair (refining), Magellan Midstream (now ONEOK), ONEOK Inc., and American Airlines Tulsa Maintenance Base (the world's largest commercial airline MRO). Pipeline and refinery NDT plus aerospace MRO dominate.",
    primaryCert: "ASNT",
    secondaryCert: "CSWIP",
    otherCerts: ["ISO 9712"],
    certPathwayNote:
      "Tulsa oil & gas and refining work runs on ASNT SNT-TC-1A + API 510/570/653. American Airlines MRO uses ASNT + NAS-410 / FAA Part 145 framework.",
    salary: {
      currency: "USD",
      levelI: "USD 44,000–58,000/year",
      levelII: "USD 60,000–86,000/year",
      levelIII: "USD 100,000–148,000/year",
      usdReference: "USD 60,000–86,000",
    },
    examCenters: [
      { name: "Acuren Tulsa", bodies: ["ASNT"] },
      { name: "MISTRAS Group Tulsa", bodies: ["ASNT"] },
    ],
    siblings: [
      { slug: "oklahoma-city", label: "Oklahoma City" },
      { slug: "fort-worth", label: "Fort Worth" },
      { slug: "dallas", label: "Dallas" },
      { slug: "midland", label: "Midland" },
      { slug: "kansas-city", label: "Kansas City" },
    ],
  },
  {
    slug: "jacksonville",
    city: "Jacksonville",
    country: "USA",
    lat: 30.3322, lng: -81.6557,
    localContext:
      "Jacksonville hosts the largest US Navy concentration on the East Coast — NAS Jacksonville, Naval Station Mayport, plus BAE Systems Jacksonville Ship Repair. Civilian side, JAXPORT, CSX Transportation HQ, and Anheuser-Busch brewing operations add port, rail and pressure-vessel NDT demand.",
    primaryCert: "ASNT",
    secondaryCert: "CSWIP",
    otherCerts: ["ISO 9712"],
    certPathwayNote:
      "Navy ship repair work in Jacksonville follows ASNT SNT-TC-1A with MIL-STD-2154 and NAVSEA TP248/271. Commercial port work uses ASNT + AWS CWI.",
    salary: {
      currency: "USD",
      levelI: "USD 43,000–56,000/year",
      levelII: "USD 58,000–82,000/year",
      levelIII: "USD 98,000–140,000/year",
      usdReference: "USD 58,000–82,000",
    },
    examCenters: [
      { name: "Acuren Jacksonville", bodies: ["ASNT"] },
      { name: "MISTRAS Group Jacksonville", bodies: ["ASNT"] },
    ],
    siblings: [
      { slug: "tampa", label: "Tampa" },
      { slug: "miami", label: "Miami" },
      { slug: "mobile", label: "Mobile" },
      { slug: "atlanta", label: "Atlanta" },
      { slug: "new-orleans", label: "New Orleans" },
    ],
  },
  {
    slug: "miami",
    city: "Miami",
    country: "USA",
    lat: 25.7617, lng: -80.1918,
    localContext:
      "Miami is one of the world's largest cruise and yacht hubs — PortMiami serves Royal Caribbean, Carnival and Norwegian, while Miami International Airport is the largest Latin-America freight gateway and home to LATAM Cargo MRO. Marine inspection, aerospace MRO and port infrastructure NDT dominate the local market.",
    primaryCert: "ASNT",
    secondaryCert: "CSWIP",
    otherCerts: ["ISO 9712"],
    certPathwayNote:
      "Miami marine and aerospace work uses ASNT SNT-TC-1A. Cruise-ship inspection often follows ABS / Lloyd's Register / DNV class society protocols with CSWIP welding inspection.",
    salary: {
      currency: "USD",
      levelI: "USD 44,000–58,000/year",
      levelII: "USD 60,000–82,000/year",
      levelIII: "USD 98,000–140,000/year",
      usdReference: "USD 60,000–82,000",
    },
    examCenters: [
      { name: "Acuren Miami / South Florida", bodies: ["ASNT"] },
      { name: "MISTRAS Group Miami", bodies: ["ASNT"] },
    ],
    siblings: [
      { slug: "tampa", label: "Tampa" },
      { slug: "jacksonville", label: "Jacksonville" },
      { slug: "atlanta", label: "Atlanta" },
      { slug: "new-orleans", label: "New Orleans" },
      { slug: "mobile", label: "Mobile" },
    ],
  },
  {
    slug: "portland",
    city: "Portland",
    country: "USA",
    lat: 45.5152, lng: -122.6784,
    localContext:
      "Portland anchors a Pacific Northwest manufacturing and steel cluster — Vigor Industrial (shipbuilding & repair), Daimler Trucks North America, Boeing Portland, Intel Hillsboro semiconductor fabs, Precision Castparts (a Berkshire Hathaway aerospace forgings company), and ESCO Group mining. Refining via Zenith Energy Terminal and pipeline crossings add scope.",
    primaryCert: "ASNT",
    secondaryCert: "CSWIP",
    otherCerts: ["ISO 9712"],
    certPathwayNote:
      "Pacific Northwest aerospace and shipbuilding use ASNT SNT-TC-1A with NAS-410 / Nadcap AC7114 for aerospace primes. Vigor follows ABS / NAVSEA for ship-side work.",
    salary: {
      currency: "USD",
      levelI: "USD 48,000–62,000/year",
      levelII: "USD 64,000–88,000/year",
      levelIII: "USD 105,000–148,000/year",
      usdReference: "USD 64,000–88,000",
    },
    examCenters: [
      { name: "Acuren Portland", bodies: ["ASNT"] },
      { name: "MISTRAS Group Portland", bodies: ["ASNT"] },
    ],
    siblings: [
      { slug: "seattle", label: "Seattle" },
      { slug: "san-diego", label: "San Diego" },
      { slug: "anchorage", label: "Anchorage" },
      { slug: "salt-lake-city", label: "Salt Lake City" },
      { slug: "vancouver", label: "Vancouver" },
    ],
  },
  {
    slug: "salt-lake-city",
    city: "Salt Lake City",
    country: "USA",
    lat: 40.7608, lng: -111.8910,
    localContext:
      "Salt Lake City hosts the largest aerospace propulsion cluster in the US Mountain West — Northrop Grumman Promontory (rocket motors), Hill Air Force Base (Ogden Air Logistics Complex, F-35 sustainment), L3Harris, Boeing SLC. Refining adds Marathon, Chevron and HF Sinclair (Woods Cross) operations.",
    primaryCert: "ASNT",
    secondaryCert: "CSWIP",
    otherCerts: ["ISO 9712"],
    certPathwayNote:
      "Hill AFB and Northrop Grumman defense work follows ASNT SNT-TC-1A + NAS-410 + MIL-STD-2154. SLC refining work follows ASNT + API 510/570/653.",
    salary: {
      currency: "USD",
      levelI: "USD 46,000–60,000/year",
      levelII: "USD 62,000–86,000/year",
      levelIII: "USD 102,000–144,000/year",
      usdReference: "USD 62,000–86,000",
    },
    examCenters: [
      { name: "Acuren Salt Lake City", bodies: ["ASNT"] },
      { name: "MISTRAS Group Salt Lake City", bodies: ["ASNT"] },
    ],
    siblings: [
      { slug: "denver", label: "Denver" },
      { slug: "portland", label: "Portland" },
      { slug: "seattle", label: "Seattle" },
      { slug: "anchorage", label: "Anchorage" },
      { slug: "midland", label: "Midland" },
    ],
  },
  {
    slug: "san-diego",
    city: "San Diego",
    country: "USA",
    lat: 32.7157, lng: -117.1611,
    localContext:
      "San Diego is the largest naval base on the US west coast — Naval Base San Diego, BAE Systems San Diego Ship Repair, General Dynamics NASSCO (the largest west-coast new-build naval yard), and General Atomics Aeronautical (MQ-9 Reaper). Aerospace, naval ship repair and biotech process equipment NDT all run here.",
    primaryCert: "ASNT",
    secondaryCert: "CSWIP",
    otherCerts: ["ISO 9712"],
    certPathwayNote:
      "San Diego naval ship repair follows ASNT SNT-TC-1A + MIL-STD-2154 + NAVSEA TP248/271. Aerospace primes layer NAS-410 / Nadcap on top of ASNT.",
    salary: {
      currency: "USD",
      levelI: "USD 50,000–64,000/year",
      levelII: "USD 66,000–92,000/year",
      levelIII: "USD 108,000–155,000/year",
      usdReference: "USD 66,000–92,000",
    },
    examCenters: [
      { name: "Acuren San Diego", bodies: ["ASNT"] },
      { name: "MISTRAS Group San Diego", bodies: ["ASNT"] },
    ],
    siblings: [
      { slug: "los-angeles", label: "Los Angeles" },
      { slug: "portland", label: "Portland" },
      { slug: "seattle", label: "Seattle" },
      { slug: "salt-lake-city", label: "Salt Lake City" },
      { slug: "austin", label: "Austin" },
    ],
  },
  {
    slug: "tampa",
    city: "Tampa",
    country: "USA",
    lat: 27.9506, lng: -82.4572,
    localContext:
      "Tampa Bay is a diversified industrial centre — Mosaic Company (the world's largest phosphate producer), TECO Energy, Port Tampa Bay (the largest cargo tonnage port in Florida), Honeywell Aerospace Pinellas, and major Citrus Park / cement industry. Power generation, fertiliser plants and ship repair drive NDT demand.",
    primaryCert: "ASNT",
    secondaryCert: "CSWIP",
    otherCerts: ["ISO 9712"],
    certPathwayNote:
      "Tampa fertiliser, power-gen and ship-repair work runs on ASNT SNT-TC-1A. Honeywell aerospace adds NAS-410 / Nadcap AC7114. AWS CWI is widely held by fabrication-side staff.",
    salary: {
      currency: "USD",
      levelI: "USD 42,000–56,000/year",
      levelII: "USD 58,000–80,000/year",
      levelIII: "USD 96,000–138,000/year",
      usdReference: "USD 58,000–80,000",
    },
    examCenters: [
      { name: "Acuren Tampa", bodies: ["ASNT"] },
      { name: "MISTRAS Group Tampa", bodies: ["ASNT"] },
    ],
    siblings: [
      { slug: "jacksonville", label: "Jacksonville" },
      { slug: "miami", label: "Miami" },
      { slug: "atlanta", label: "Atlanta" },
      { slug: "mobile", label: "Mobile" },
      { slug: "new-orleans", label: "New Orleans" },
    ],
  },
  {
    slug: "washington-dc",
    city: "Washington DC",
    country: "USA",
    lat: 38.9072, lng: -77.0369,
    localContext:
      "The Washington-Baltimore corridor hosts major defense and federal-government NDT activity — NAVAIR Patuxent River, Northrop Grumman, Lockheed Martin Bethesda, NASA Goddard Space Flight Center, and the Naval District Washington. Power generation along the Potomac and infrastructure inspection (rail, bridges) add commercial scope.",
    primaryCert: "ASNT",
    secondaryCert: "CSWIP",
    otherCerts: ["ISO 9712"],
    certPathwayNote:
      "DC-area defense work follows ASNT SNT-TC-1A + NAS-410 / MIL-STD-2154 frameworks. Infrastructure and rail NDT relies on ASNT + AWS CWI, with API 570 for utility piping.",
    salary: {
      currency: "USD",
      levelI: "USD 48,000–62,000/year",
      levelII: "USD 64,000–90,000/year",
      levelIII: "USD 105,000–155,000/year",
      usdReference: "USD 64,000–90,000",
    },
    examCenters: [
      { name: "Acuren Washington DC / Baltimore", bodies: ["ASNT"] },
      { name: "MISTRAS Group DC / Baltimore", bodies: ["ASNT"] },
    ],
    siblings: [
      { slug: "baltimore", label: "Baltimore" },
      { slug: "philadelphia", label: "Philadelphia" },
      { slug: "boston", label: "Boston" },
      { slug: "new-york", label: "New York" },
      { slug: "pittsburgh", label: "Pittsburgh" },
    ],
  },
  {
    slug: "baltimore",
    city: "Baltimore",
    country: "USA",
    lat: 39.2904, lng: -76.6122,
    localContext:
      "Baltimore is a major US east-coast port and industrial centre — Port of Baltimore (the largest US car-import port), Sparrows Point steel legacy operations, Northrop Grumman Baltimore, Lockheed Martin Middle River, and Constellation Energy Crane Generating Station (formerly Brandon Shores). Power generation, port and rail NDT lead demand.",
    primaryCert: "ASNT",
    secondaryCert: "CSWIP",
    otherCerts: ["ISO 9712"],
    certPathwayNote:
      "Baltimore defense, port and power-gen work follows ASNT SNT-TC-1A. NAS-410 for aerospace primes; API 510/570/653 for utility piping/vessel work.",
    salary: {
      currency: "USD",
      levelI: "USD 46,000–60,000/year",
      levelII: "USD 62,000–86,000/year",
      levelIII: "USD 102,000–148,000/year",
      usdReference: "USD 62,000–86,000",
    },
    examCenters: [
      { name: "Acuren Baltimore", bodies: ["ASNT"] },
      { name: "MISTRAS Group Baltimore", bodies: ["ASNT"] },
    ],
    siblings: [
      { slug: "washington-dc", label: "Washington DC" },
      { slug: "philadelphia", label: "Philadelphia" },
      { slug: "new-york", label: "New York" },
      { slug: "boston", label: "Boston" },
      { slug: "pittsburgh", label: "Pittsburgh" },
    ],
  },
  {
    slug: "indianapolis",
    city: "Indianapolis",
    country: "USA",
    lat: 39.7684, lng: -86.1581,
    localContext:
      "Indianapolis hosts Rolls-Royce North America Headquarters (aircraft engines), Allison Transmission (a global commercial-vehicle transmission maker), Eli Lilly biopharma, and Cummins Engine Company Columbus (just south). Aerospace, automotive and pressure-vessel inspection across central Indiana drive NDT demand.",
    primaryCert: "ASNT",
    secondaryCert: "CSWIP",
    otherCerts: ["ISO 9712"],
    certPathwayNote:
      "Rolls-Royce and Allison Indianapolis work follows ASNT SNT-TC-1A + NAS-410 + Nadcap AC7114. Pharma pressure-vessel inspection uses ASME BPE + ASNT.",
    salary: {
      currency: "USD",
      levelI: "USD 44,000–58,000/year",
      levelII: "USD 60,000–84,000/year",
      levelIII: "USD 100,000–142,000/year",
      usdReference: "USD 60,000–84,000",
    },
    examCenters: [
      { name: "Acuren Indianapolis", bodies: ["ASNT"] },
      { name: "MISTRAS Group Indianapolis", bodies: ["ASNT"] },
    ],
    siblings: [
      { slug: "cincinnati", label: "Cincinnati" },
      { slug: "cleveland", label: "Cleveland" },
      { slug: "nashville", label: "Nashville" },
      { slug: "st-louis", label: "St. Louis" },
      { slug: "kansas-city", label: "Kansas City" },
    ],
  },
  {
    slug: "boston",
    city: "Boston",
    country: "USA",
    lat: 42.3601, lng: -71.0589,
    localContext:
      "Boston anchors New England's manufacturing and energy economy — General Electric (Boston HQ), Raytheon Technologies, Bose, Pratt & Whitney (East Hartford, CT just south), General Dynamics Electric Boat (submarines, Groton, CT), and the Pilgrim/Seabrook decommissioning ecosystem. Defense, submarine and pharma vessel inspection dominate NDT demand.",
    primaryCert: "ASNT",
    secondaryCert: "CSWIP",
    otherCerts: ["ISO 9712"],
    certPathwayNote:
      "New England defense and aerospace work follows ASNT SNT-TC-1A + NAS-410 + MIL-STD-2154. Submarine inspection at Electric Boat uses NAVSEA TP248/271 with ASNT certification basis.",
    salary: {
      currency: "USD",
      levelI: "USD 50,000–64,000/year",
      levelII: "USD 66,000–92,000/year",
      levelIII: "USD 108,000–155,000/year",
      usdReference: "USD 66,000–92,000",
    },
    examCenters: [
      { name: "Acuren Boston / New England", bodies: ["ASNT"] },
      { name: "MISTRAS Group Boston", bodies: ["ASNT"] },
    ],
    siblings: [
      { slug: "new-york", label: "New York" },
      { slug: "philadelphia", label: "Philadelphia" },
      { slug: "washington-dc", label: "Washington DC" },
      { slug: "baltimore", label: "Baltimore" },
      { slug: "pittsburgh", label: "Pittsburgh" },
    ],
  },
  {
    slug: "seattle",
    city: "Seattle",
    country: "USA",
    lat: 47.6062, lng: -122.3321,
    localContext:
      "Seattle is the largest commercial aerospace manufacturing centre in North America — Boeing Commercial Airplanes (Everett & Renton), Boeing Defense (P-8, KC-46 production), and a deep aerospace supply chain (Senior Aerospace, Pacific Coast Avionics). The Port of Seattle, BNSF rail and Tesoro/Marathon Anacortes refineries add scope.",
    primaryCert: "ASNT",
    secondaryCert: "CSWIP",
    otherCerts: ["ISO 9712"],
    certPathwayNote:
      "Boeing Commercial uses ASNT SNT-TC-1A + EN 4179 / NAS-410 + Nadcap AC7114. Suppliers must hold Nadcap; ASNT Level II in PT/MT/UT/ET is the entry hire. Refining work uses API 510/570/653 + ASNT.",
    salary: {
      currency: "USD",
      levelI: "USD 50,000–66,000/year",
      levelII: "USD 68,000–95,000/year",
      levelIII: "USD 110,000–160,000/year",
      usdReference: "USD 68,000–95,000",
    },
    examCenters: [
      { name: "Acuren Seattle", bodies: ["ASNT"] },
      { name: "MISTRAS Group Seattle / Everett", bodies: ["ASNT"] },
    ],
    siblings: [
      { slug: "portland", label: "Portland" },
      { slug: "vancouver", label: "Vancouver" },
      { slug: "san-diego", label: "San Diego" },
      { slug: "anchorage", label: "Anchorage" },
      { slug: "salt-lake-city", label: "Salt Lake City" },
    ],
  },

  // ──────── Canada ────────────────────────────────────────────────
  {
    slug: "calgary",
    city: "Calgary",
    country: "Canada",
    lat: 51.0447, lng: -114.0719,
    localContext:
      "Calgary is the headquarters city of Canada's oil patch — Suncor Energy, Cenovus, Canadian Natural Resources (CNRL), Imperial Oil, Enbridge, TC Energy, Pembina Pipeline. The corridor north into Edmonton and Fort McMurray runs continuous pipeline integrity and oil-sands NDT work that draws crews from across Western Canada.",
    primaryCert: "CGSB",
    secondaryCert: "ASNT",
    otherCerts: ["CSWIP", "ISO 9712"],
    certPathwayNote:
      "Canada's federal NDT certification is Natural Resources Canada / CGSB (CAN/CGSB-48.9712 — the ISO 9712 implementation). ASNT SNT-TC-1A is the standard for US-headquartered operators (Imperial Oil, Suncor) and for cross-border crews.",
    salary: {
      currency: "CAD",
      levelI: "CAD 58,000–75,000/year",
      levelII: "CAD 80,000–115,000/year",
      levelIII: "CAD 125,000–180,000/year",
      usdReference: "USD 60,000–86,000 (Level II)",
    },
    examCenters: [
      { name: "CINDE Calgary Examination Centre", bodies: ["CGSB"] },
      { name: "Acuren Calgary", bodies: ["ASNT", "CGSB"] },
      { name: "MISTRAS Group Calgary", bodies: ["ASNT", "CGSB"] },
    ],
    siblings: CANADA_SIBLINGS,
  },
  {
    slug: "edmonton",
    city: "Edmonton",
    country: "Canada",
    lat: 53.5461, lng: -113.4938,
    localContext:
      "Edmonton anchors Alberta's downstream and petrochemical economy — Suncor Edmonton Refinery, Imperial Oil Strathcona Refinery, North West Redwater Partnership (Sturgeon Refinery), Dow Chemical Fort Saskatchewan, Nutrien (Redwater), and Shell Scotford. The Industrial Heartland east of Edmonton is one of the largest refining-petrochem clusters in North America.",
    primaryCert: "CGSB",
    secondaryCert: "ASNT",
    otherCerts: ["CSWIP", "ISO 9712"],
    certPathwayNote:
      "Alberta refining operators (Suncor, Imperial, NWR) use CGSB-48.9712 as the Canadian default with ASNT SNT-TC-1A widely accepted. API 510/570/653 inspector certifications are essential for in-service work.",
    salary: {
      currency: "CAD",
      levelI: "CAD 56,000–72,000/year",
      levelII: "CAD 78,000–112,000/year (turnaround OT can push past 150K)",
      levelIII: "CAD 122,000–175,000/year",
      usdReference: "USD 58,000–83,000 (Level II)",
    },
    examCenters: [
      { name: "CINDE Edmonton Examination Centre", bodies: ["CGSB"] },
      { name: "Acuren Edmonton", bodies: ["ASNT", "CGSB"] },
      { name: "MISTRAS Group Edmonton", bodies: ["ASNT", "CGSB"] },
    ],
    siblings: CANADA_SIBLINGS,
  },
  {
    slug: "fort-mcmurray",
    city: "Fort McMurray",
    country: "Canada",
    lat: 56.7264, lng: -111.3803,
    localContext:
      "Fort McMurray is the centre of the Athabasca oil sands — Suncor Base / Millennium / Firebag, Syncrude Mildred Lake / Aurora, Canadian Natural Resources (CNRL) Horizon, Imperial Oil Kearl, and MEG Energy Christina Lake. Continuous inspection of bitumen upgraders, SAGD steam generators and tailings infrastructure makes Fort Mac one of the highest-demand NDT zones in Canada.",
    primaryCert: "CGSB",
    secondaryCert: "ASNT",
    otherCerts: ["CSWIP", "ISO 9712"],
    certPathwayNote:
      "Oil sands operators apply CGSB-48.9712 with ASNT SNT-TC-1A acceptable for US-affiliated crews. CSA Z662 pipeline code drives weld inspection. API 510 / 570 / 653 mandatory for in-service work.",
    salary: {
      currency: "CAD",
      levelI: "CAD 64,000–85,000/year (with camp / rotation premium)",
      levelII: "CAD 95,000–145,000/year (rotational + OT)",
      levelIII: "CAD 145,000–210,000/year",
      usdReference: "USD 70,000–108,000 (Level II)",
    },
    examCenters: [
      { name: "Acuren Fort McMurray", bodies: ["ASNT", "CGSB"] },
      { name: "MISTRAS Group Fort McMurray", bodies: ["ASNT", "CGSB"] },
    ],
    siblings: CANADA_SIBLINGS,
  },
  {
    slug: "halifax",
    city: "Halifax",
    country: "Canada",
    lat: 44.6488, lng: -63.5752,
    localContext:
      "Halifax is the headquarters of Irving Shipbuilding (Canadian National Shipbuilding Strategy — frigates, AOPS), the Imperial Oil Dartmouth Refinery, and CFB Halifax (the largest Royal Canadian Navy base). Ship-building, ship-repair, and East Coast offshore (Hibernia, White Rose tie-back work) drive Atlantic Canada NDT demand.",
    primaryCert: "CGSB",
    secondaryCert: "ASNT",
    otherCerts: ["CSWIP", "ISO 9712"],
    certPathwayNote:
      "Irving Shipbuilding follows CGSB-48.9712 + AWS D1.1/D1.6 + ABS class society protocols. CSWIP 3.1 is heavily used for welding inspection on shipbuilding contracts.",
    salary: {
      currency: "CAD",
      levelI: "CAD 52,000–68,000/year",
      levelII: "CAD 72,000–102,000/year",
      levelIII: "CAD 115,000–165,000/year",
      usdReference: "USD 54,000–76,000 (Level II)",
    },
    examCenters: [
      { name: "CINDE Halifax Examination Centre", bodies: ["CGSB"] },
      { name: "Acuren Halifax", bodies: ["ASNT", "CGSB"] },
    ],
    siblings: CANADA_SIBLINGS,
  },
  {
    slug: "montreal",
    city: "Montreal",
    country: "Canada",
    lat: 45.5017, lng: -73.5673,
    localContext:
      "Montreal anchors Quebec's aerospace and refining economy — Bombardier Aerospace, Pratt & Whitney Canada (Longueuil), Bell Textron Canada (Mirabel), CAE flight simulators, and the Suncor Montreal Refinery. Aerospace assembly, regional aviation MRO, and dense rail infrastructure drive NDT demand across Greater Montreal.",
    primaryCert: "CGSB",
    secondaryCert: "ASNT",
    otherCerts: ["CSWIP", "ISO 9712"],
    certPathwayNote:
      "Quebec aerospace primes follow CGSB-48.9712 with ASNT SNT-TC-1A widely accepted. NAS-410 / EN 4179 + Nadcap AC7114 layer on top of CGSB for aerospace suppliers.",
    salary: {
      currency: "CAD",
      levelI: "CAD 52,000–68,000/year",
      levelII: "CAD 72,000–100,000/year",
      levelIII: "CAD 115,000–160,000/year",
      usdReference: "USD 54,000–75,000 (Level II)",
    },
    examCenters: [
      { name: "CINDE Montreal Examination Centre", bodies: ["CGSB"] },
      { name: "Acuren Montreal", bodies: ["ASNT", "CGSB"] },
    ],
    siblings: CANADA_SIBLINGS,
  },
  {
    slug: "vancouver",
    city: "Vancouver",
    country: "Canada",
    lat: 49.2827, lng: -123.1207,
    localContext:
      "Vancouver hosts the LNG Canada export terminal supply chain (Kitimat), Seaspan Shipyards (the National Shipbuilding Strategy non-combatant builder), Trans Mountain Pipeline expansion terminals, the Parkland Burnaby Refinery, and a deep mining-services cluster headquartered in BC. Port-of-Vancouver activity drives marine NDT demand.",
    primaryCert: "CGSB",
    secondaryCert: "ASNT",
    otherCerts: ["CSWIP", "ISO 9712"],
    certPathwayNote:
      "BC pipeline and LNG construction work follows CGSB-48.9712 + ASNT SNT-TC-1A. CSA Z662 pipeline code is mandatory for welding inspection. Seaspan ship work follows ABS / Lloyd's Register protocols.",
    salary: {
      currency: "CAD",
      levelI: "CAD 56,000–72,000/year",
      levelII: "CAD 78,000–108,000/year",
      levelIII: "CAD 120,000–170,000/year",
      usdReference: "USD 58,000–80,000 (Level II)",
    },
    examCenters: [
      { name: "CINDE Vancouver Examination Centre", bodies: ["CGSB"] },
      { name: "Acuren Vancouver", bodies: ["ASNT", "CGSB"] },
      { name: "MISTRAS Group Vancouver / Burnaby", bodies: ["ASNT", "CGSB"] },
    ],
    siblings: CANADA_SIBLINGS,
  },

  // ──────── India (City-level) ───────────────────────────────────────
  {
    slug: "bangalore",
    city: "Bangalore",
    country: "India",
    lat: 12.9716, lng: 77.5946,
    localContext:
      "Bangalore (Bengaluru) is India's aerospace and defense capital — Hindustan Aeronautics Limited (HAL), Indian Space Research Organisation (ISRO), Bharat Earth Movers, Boeing India, Airbus India, Collins Aerospace and a deep IT-services overlay (Wipro, Infosys, TCS). Aerospace NDT (NAS-410, Nadcap AC7114) drives the local market.",
    primaryCert: "ASNT",
    secondaryCert: "ISNT",
    otherCerts: ["ISO 9712", "PCN"],
    certPathwayNote:
      "HAL, ISRO and aerospace primes (Boeing/Airbus India suppliers) use ASNT SNT-TC-1A with NAS-410 overlay. ISNT is the Indian National Society for NDT — its certification is widely respected for domestic work.",
    salary: {
      currency: "INR",
      levelI: "INR 25,000–45,000/month",
      levelII: "INR 50,000–90,000/month",
      levelIII: "INR 110,000–200,000/month",
      usdReference: "USD 600–1,100 (Level II)",
    },
    examCenters: [
      { name: "ISNT Bangalore Chapter Examination Centre", bodies: ["ISNT"] },
      { name: "TUV India Bangalore (ASNT exam venue)", bodies: ["ASNT", "ISO 9712"] },
      { name: "Bureau Veritas Bangalore", bodies: ["ASNT", "ISO 9712"] },
    ],
    siblings: INDIA_SIBLINGS,
  },
  {
    slug: "chennai",
    city: "Chennai",
    country: "India",
    lat: 13.0827, lng: 80.2707,
    localContext:
      "Chennai is the automotive and refining hub of South India — Chennai Petroleum Corporation (CPCL/Manali), Hyundai Motor India, BMW Plant, Renault-Nissan, Ashok Leyland, TVS, and Larsen & Toubro's Manapakkam complex. Automotive Tier-1, refining and an expanding aerospace cluster (HAL Chennai, GE Aerospace India) feed NDT demand.",
    primaryCert: "ASNT",
    secondaryCert: "ISNT",
    otherCerts: ["ISO 9712", "PCN"],
    certPathwayNote:
      "Chennai refining (CPCL) and L&T fabrication follow ASNT SNT-TC-1A. Automotive supply chain uses IATF 16949 quality + ASNT. Aerospace work layers NAS-410 / Nadcap.",
    salary: {
      currency: "INR",
      levelI: "INR 22,000–42,000/month",
      levelII: "INR 45,000–85,000/month",
      levelIII: "INR 100,000–190,000/month",
      usdReference: "USD 540–1,020 (Level II)",
    },
    examCenters: [
      { name: "ISNT Chennai Chapter Examination Centre", bodies: ["ISNT"] },
      { name: "TUV India Chennai", bodies: ["ASNT", "ISO 9712"] },
      { name: "Bureau Veritas Chennai", bodies: ["ASNT", "ISO 9712"] },
    ],
    siblings: INDIA_SIBLINGS,
  },
  {
    slug: "delhi",
    city: "Delhi",
    country: "India",
    lat: 28.7041, lng: 77.1025,
    localContext:
      "Delhi-NCR hosts Indian Oil R&D Faridabad, BHEL Haridwar (just north — heavy-electrical fabrication), Maruti Suzuki Manesar, Hero MotoCorp, plus the headquarters of all major Indian PSUs (ONGC, GAIL, IOCL, BPCL). Power generation, automotive manufacturing and oil & gas head office contracting drive NDT demand.",
    primaryCert: "ASNT",
    secondaryCert: "ISNT",
    otherCerts: ["ISO 9712", "PCN"],
    certPathwayNote:
      "Indian PSU (ONGC, IOCL, BHEL) work uses ASNT SNT-TC-1A and ISNT interchangeably. ISO 9712 is increasingly preferred for export fabrication work. API 510/570/653 for downstream in-service inspection.",
    salary: {
      currency: "INR",
      levelI: "INR 25,000–48,000/month",
      levelII: "INR 50,000–95,000/month",
      levelIII: "INR 110,000–210,000/month",
      usdReference: "USD 600–1,140 (Level II)",
    },
    examCenters: [
      { name: "ISNT Delhi Chapter Examination Centre", bodies: ["ISNT"] },
      { name: "TUV India Delhi / Gurgaon", bodies: ["ASNT", "ISO 9712"] },
      { name: "Bureau Veritas Delhi", bodies: ["ASNT", "ISO 9712"] },
    ],
    siblings: INDIA_SIBLINGS,
  },
  {
    slug: "kochi",
    city: "Kochi",
    country: "India",
    lat: 9.9312, lng: 76.2673,
    localContext:
      "Kochi (Cochin) hosts the BPCL Kochi Refinery (one of India's largest), Cochin Shipyard (India's largest public-sector shipyard — building the indigenous aircraft carrier INS Vikrant and commercial vessels), and the FACT (Fertilisers & Chemicals Travancore) complex. Shipbuilding, refining and offshore-tie-back inspection feed NDT demand.",
    primaryCert: "ASNT",
    secondaryCert: "ISNT",
    otherCerts: ["ISO 9712", "PCN"],
    certPathwayNote:
      "BPCL Kochi follows ASNT SNT-TC-1A + API 510/570/653 in-service framework. Cochin Shipyard uses ASNT + Indian Register of Shipping (IRS) class society protocols.",
    salary: {
      currency: "INR",
      levelI: "INR 22,000–40,000/month",
      levelII: "INR 45,000–82,000/month",
      levelIII: "INR 100,000–180,000/month",
      usdReference: "USD 540–985 (Level II)",
    },
    examCenters: [
      { name: "ISNT Cochin Chapter Examination Centre", bodies: ["ISNT"] },
      { name: "TUV India Kochi", bodies: ["ASNT", "ISO 9712"] },
    ],
    siblings: INDIA_SIBLINGS,
  },
  {
    slug: "kolkata",
    city: "Kolkata",
    country: "India",
    lat: 22.5726, lng: 88.3639,
    localContext:
      "Kolkata is the eastern Indian heavy-industry hub — Garden Reach Shipbuilders, IOCL Haldia Refinery, Indian Oil Corporation Haldia Petrochemicals (IOC-HPL), Tata Steel Jamshedpur (just south), and Coal India Limited (HQ). Shipbuilding, refining, steel and mining drive NDT demand.",
    primaryCert: "ASNT",
    secondaryCert: "ISNT",
    otherCerts: ["ISO 9712", "PCN"],
    certPathwayNote:
      "Kolkata heavy industry uses ASNT SNT-TC-1A and ISNT interchangeably. Tata Steel and Coal India accept ISO 9712. Garden Reach Shipbuilders applies IRS class protocols.",
    salary: {
      currency: "INR",
      levelI: "INR 22,000–40,000/month",
      levelII: "INR 45,000–82,000/month",
      levelIII: "INR 100,000–180,000/month",
      usdReference: "USD 540–985 (Level II)",
    },
    examCenters: [
      { name: "ISNT Kolkata Chapter Examination Centre", bodies: ["ISNT"] },
      { name: "TUV India Kolkata", bodies: ["ASNT", "ISO 9712"] },
    ],
    siblings: INDIA_SIBLINGS,
  },
  {
    slug: "mumbai",
    city: "Mumbai",
    country: "India",
    lat: 19.0760, lng: 72.8777,
    localContext:
      "Mumbai is India's commercial capital and the centre of Western India's oil & gas — ONGC's Mumbai High offshore complex (offshore Bombay), BPCL Mumbai Refinery, HPCL Mumbai Refinery (Mahul), Reliance Industries HQ (with Jamnagar 70 MMTPA capacity), L&T Hazira-Mumbai HQ, and Mazagon Dock Shipbuilders. Offshore and refining drive NDT demand.",
    primaryCert: "ASNT",
    secondaryCert: "ISNT",
    otherCerts: ["ISO 9712", "PCN"],
    certPathwayNote:
      "ONGC offshore work uses ASNT SNT-TC-1A and ISNT with API 1104 pipeline weld inspection. Reliance and L&T export fabrication accept ISO 9712 for global customers. Mazagon Dock uses ASNT + IRS class.",
    salary: {
      currency: "INR",
      levelI: "INR 28,000–50,000/month",
      levelII: "INR 55,000–105,000/month",
      levelIII: "INR 120,000–230,000/month",
      usdReference: "USD 660–1,260 (Level II)",
    },
    examCenters: [
      { name: "ISNT Mumbai Chapter Examination Centre", bodies: ["ISNT"] },
      { name: "TUV India Mumbai", bodies: ["ASNT", "ISO 9712"] },
      { name: "Bureau Veritas Mumbai", bodies: ["ASNT", "ISO 9712"] },
    ],
    siblings: INDIA_SIBLINGS,
  },

  // ──────── Asia-Pacific ─────────────────────────────────────────────
  {
    slug: "ho-chi-minh",
    city: "Ho Chi Minh City",
    country: "Vietnam",
    lat: 10.8231, lng: 106.6297,
    localContext:
      "Ho Chi Minh City anchors Vietnam's expanding oil & gas, fabrication and shipbuilding economy — PetroVietnam (PVN), PV Drilling, Vietsovpetro, Long Son Petrochemicals (Siam Cement Group), and the Vung Tau offshore base. Shipbuilding and oilfield-services fabrication at PTSC Vung Tau drives NDT demand.",
    primaryCert: "ASNT",
    secondaryCert: "ISO 9712",
    otherCerts: ["PCN", "CSWIP"],
    certPathwayNote:
      "PetroVietnam contractor specifications align with ASNT SNT-TC-1A. PCN and CSWIP are common on offshore packages led by Subsea 7 and McDermott. ISO 9712 increasingly accepted on export fabrication.",
    salary: {
      currency: "VND",
      levelI: "VND 18M–32M/month",
      levelII: "VND 35M–70M/month",
      levelIII: "VND 80M–150M/month",
      usdReference: "USD 1,400–2,800 (Level II)",
    },
    examCenters: [
      { name: "Vinacontrol Quality Certification Ho Chi Minh", bodies: ["ASNT", "ISO 9712"] },
      { name: "Bureau Veritas Ho Chi Minh", bodies: ["ASNT", "ISO 9712"] },
    ],
    siblings: SE_ASIA_SIBLINGS,
  },
  {
    slug: "kuala-lumpur",
    city: "Kuala Lumpur",
    country: "Malaysia",
    lat: 3.1390, lng: 101.6869,
    localContext:
      "Kuala Lumpur is the headquarters city of Petronas — Malaysia's national oil company — plus MISC (LNG shipping), Malaysia Marine and Heavy Engineering (MMHE) at Pasir Gudang, Sapura Energy and Dialog Group. Petronas-led FPSO conversions, deepwater developments and the Pengerang Integrated Petroleum Complex drive Malaysian NDT demand.",
    primaryCert: "ASNT",
    secondaryCert: "ISO 9712",
    otherCerts: ["PCN", "CSWIP"],
    certPathwayNote:
      "Petronas contractor specifications (PTS series) reference ASNT SNT-TC-1A and ISO 9712 interchangeably. PCN/CSWIP common on UK and European EPC packages. MMHE follows ABS / Lloyd's Register class protocols.",
    salary: {
      currency: "MYR",
      levelI: "MYR 3,500–5,500/month",
      levelII: "MYR 6,500–12,000/month",
      levelIII: "MYR 14,000–25,000/month",
      usdReference: "USD 1,400–2,600 (Level II)",
    },
    examCenters: [
      { name: "PETRONAS Leadership Centre (PLC) Bangi", bodies: ["ASNT", "ISO 9712"] },
      { name: "TUV NORD Malaysia KL", bodies: ["ASNT", "ISO 9712"] },
      { name: "Bureau Veritas Kuala Lumpur", bodies: ["ASNT", "ISO 9712"] },
    ],
    siblings: SE_ASIA_SIBLINGS,
  },
  {
    slug: "shanghai",
    city: "Shanghai",
    country: "China",
    lat: 31.2304, lng: 121.4737,
    localContext:
      "Shanghai is the centre of China's offshore and shipbuilding industry — Hudong-Zhonghua Shipbuilding (CSSC, the largest LNG-carrier builder in China), Jiangnan Shipyard, Shanghai Waigaoqiao Shipbuilding, COMAC C919 aircraft assembly, and Sinopec Shanghai Petrochemical. Aerospace, shipbuilding and petrochem drive NDT scope.",
    primaryCert: "ASNT",
    secondaryCert: "ISO 9712",
    otherCerts: ["PCN", "CSWIP"],
    certPathwayNote:
      "Chinese shipyards run dual-track CCS (China Classification Society) personnel + ASNT SNT-TC-1A for export work. ISO 9712 increasingly required for foreign owners. Sinopec uses ASNT + Chinese GB/SY codes.",
    salary: {
      currency: "CNY",
      levelI: "CNY 8,000–14,000/month",
      levelII: "CNY 16,000–28,000/month",
      levelIII: "CNY 32,000–60,000/month",
      usdReference: "USD 2,200–3,900 (Level II)",
    },
    examCenters: [
      { name: "China Special Equipment Inspection (CSEI) Shanghai", bodies: ["ASNT", "ISO 9712"] },
      { name: "TUV SUD Shanghai", bodies: ["ASNT", "ISO 9712"] },
      { name: "Bureau Veritas Shanghai", bodies: ["ASNT", "ISO 9712"] },
    ],
    siblings: SE_ASIA_SIBLINGS,
  },

  // ──────── Australia & NZ ───────────────────────────────────────────
  {
    slug: "brisbane",
    city: "Brisbane",
    country: "Australia",
    lat: -27.4698, lng: 153.0251,
    localContext:
      "Brisbane anchors Queensland's CSG-LNG cluster — Santos GLNG, Origin Energy APLNG, Shell QGC, and the Curtis Island LNG export terminals near Gladstone. Brisbane city itself hosts engineering offices, the BHP Mitsubishi Alliance coal HQ, and major fabrication shops supplying Queensland gas and mining.",
    primaryCert: "AINDT",
    secondaryCert: "ASNT",
    otherCerts: ["ISO 9712", "PCN"],
    certPathwayNote:
      "Australian Institute for NDT (AINDT) administers ISO 9712 in Australia. ASNT SNT-TC-1A is widely accepted in CSG-LNG and mining work led by US-owned operators (Santos JV partners, Glencore).",
    salary: {
      currency: "AUD",
      levelI: "AUD 70,000–95,000/year",
      levelII: "AUD 105,000–155,000/year",
      levelIII: "AUD 165,000–245,000/year",
      usdReference: "USD 68,000–100,000 (Level II)",
    },
    examCenters: [
      { name: "AINDT Brisbane Examination Centre", bodies: ["AINDT", "ISO 9712"] },
      { name: "Bureau Veritas Brisbane", bodies: ["ASNT", "ISO 9712"] },
    ],
    siblings: AUSTRALIA_SIBLINGS,
  },
  {
    slug: "melbourne",
    city: "Melbourne",
    country: "Australia",
    lat: -37.8136, lng: 144.9631,
    localContext:
      "Melbourne hosts Boeing Aerostructures Australia, BAE Systems Australia, ExxonMobil Altona (now demolished — Viva Energy Geelong remains as the only Victorian refinery), Pacific Aluminium, and a deep advanced manufacturing supply chain. Aerospace, refining and rail (V/Line, Metro Trains) drive NDT demand.",
    primaryCert: "AINDT",
    secondaryCert: "ASNT",
    otherCerts: ["ISO 9712", "PCN"],
    certPathwayNote:
      "Boeing Aerostructures and BAE Australia follow AINDT (ISO 9712) certification with NAS-410 / EN 4179 + Nadcap AC7114 overlay. Viva Geelong uses AINDT + API 510/570/653 for in-service inspection.",
    salary: {
      currency: "AUD",
      levelI: "AUD 68,000–92,000/year",
      levelII: "AUD 100,000–145,000/year",
      levelIII: "AUD 160,000–235,000/year",
      usdReference: "USD 65,000–94,000 (Level II)",
    },
    examCenters: [
      { name: "AINDT Melbourne Examination Centre", bodies: ["AINDT", "ISO 9712"] },
      { name: "Bureau Veritas Melbourne", bodies: ["ASNT", "ISO 9712"] },
    ],
    siblings: AUSTRALIA_SIBLINGS,
  },
  {
    slug: "perth",
    city: "Perth",
    country: "Australia",
    lat: -31.9505, lng: 115.8605,
    localContext:
      "Perth anchors Western Australia's LNG and iron-ore economy — Woodside Energy (HQ; North West Shelf, Pluto, Scarborough), Chevron Australia (Gorgon, Wheatstone), Inpex Ichthys, BHP iron ore, Rio Tinto iron ore. The Karratha Gas Plant and offshore platforms in the Carnarvon Basin drive continuous NDT scope.",
    primaryCert: "AINDT",
    secondaryCert: "ASNT",
    otherCerts: ["ISO 9712", "PCN", "CSWIP"],
    certPathwayNote:
      "Woodside, Chevron and Inpex contractor specifications accept AINDT / ASNT / ISO 9712 interchangeably. PCN and CSWIP common on UK-led EPC packages (Subsea 7, Saipem, McDermott).",
    salary: {
      currency: "AUD",
      levelI: "AUD 75,000–105,000/year",
      levelII: "AUD 115,000–175,000/year (offshore rotation premium)",
      levelIII: "AUD 175,000–265,000/year",
      usdReference: "USD 75,000–115,000 (Level II)",
    },
    examCenters: [
      { name: "AINDT Perth Examination Centre", bodies: ["AINDT", "ISO 9712"] },
      { name: "Bureau Veritas Perth", bodies: ["ASNT", "ISO 9712"] },
      { name: "Applus+ RTD Perth", bodies: ["ASNT", "PCN", "ISO 9712"] },
    ],
    siblings: AUSTRALIA_SIBLINGS,
  },
  {
    slug: "sydney",
    city: "Sydney",
    country: "Australia",
    lat: -33.8688, lng: 151.2093,
    localContext:
      "Sydney hosts BAE Systems Australia (Garden Island shipyards), Thales Australia (defence electronics), Boeing Defence Australia, plus Cobham Aviation Services and a major rail (Sydney Trains) infrastructure base. Defence shipbuilding, infrastructure inspection and pressure-vessel work feed NDT demand.",
    primaryCert: "AINDT",
    secondaryCert: "ASNT",
    otherCerts: ["ISO 9712", "PCN"],
    certPathwayNote:
      "BAE Australia and Thales follow AINDT (ISO 9712) with NAS-410 / EN 4179 / MIL-STD-2154 overlays for defence work. AS 3669 / AS 4037 codes for pressure vessels.",
    salary: {
      currency: "AUD",
      levelI: "AUD 72,000–98,000/year",
      levelII: "AUD 105,000–155,000/year",
      levelIII: "AUD 165,000–245,000/year",
      usdReference: "USD 68,000–100,000 (Level II)",
    },
    examCenters: [
      { name: "AINDT Sydney Examination Centre", bodies: ["AINDT", "ISO 9712"] },
      { name: "Bureau Veritas Sydney", bodies: ["ASNT", "ISO 9712"] },
    ],
    siblings: AUSTRALIA_SIBLINGS,
  },

  // ──────── Europe & UK ──────────────────────────────────────────────
  {
    slug: "london",
    city: "London",
    country: "UK",
    lat: 51.5074, lng: -0.1278,
    localContext:
      "Greater London is the engineering and finance hub of UK industry — BP HQ, Shell UK HQ, Rolls-Royce London office, Babcock International, Crossrail / Elizabeth Line tunnel inspection, and ongoing HS2 high-speed rail construction. Most NDT field crews work from London satellite bases serving rail, nuclear (Hinkley Point C) and pressure-vessel sites.",
    primaryCert: "PCN",
    secondaryCert: "CSWIP",
    otherCerts: ["ISO 9712", "ASNT"],
    certPathwayNote:
      "PCN (BINDT — British Institute of Non-Destructive Testing) is the UK national scheme, ISO 9712 aligned. CSWIP 3.1 / 3.2 dominates welding inspection. ASNT SNT-TC-1A is accepted by US-owned operators and aerospace primes.",
    salary: {
      currency: "GBP",
      levelI: "GBP 28,000–38,000/year",
      levelII: "GBP 42,000–62,000/year",
      levelIII: "GBP 68,000–95,000/year",
      usdReference: "USD 52,000–77,000 (Level II)",
    },
    examCenters: [
      { name: "TWI Granta Park (Cambridge) — PCN exam venue", bodies: ["PCN", "CSWIP"] },
      { name: "Lavender International London", bodies: ["PCN", "CSWIP"] },
      { name: "Bureau Veritas London", bodies: ["PCN", "ISO 9712"] },
    ],
    siblings: UK_NORTH_EU_SIBLINGS,
  },
  {
    slug: "glasgow",
    city: "Glasgow",
    country: "UK",
    lat: 55.8642, lng: -4.2518,
    localContext:
      "Glasgow anchors Scottish industry — BAE Systems Govan & Scotstoun (Type 26 frigates for Royal Navy and Australia), Babcock Rosyth (HMS Queen Elizabeth-class), Doosan Babcock (power), and the EnQuest / Repsol Sinopec North Sea contractor bases. The wider Clyde corridor drives shipbuilding and pressure-vessel NDT demand.",
    primaryCert: "PCN",
    secondaryCert: "CSWIP",
    otherCerts: ["ISO 9712", "ASNT"],
    certPathwayNote:
      "BAE Glasgow shipbuilding follows PCN + CSWIP + Royal Navy class society protocols. Doosan Babcock power work follows ASME III/V/IX + PCN. ASNT accepted for US-affiliated owners.",
    salary: {
      currency: "GBP",
      levelI: "GBP 26,000–35,000/year",
      levelII: "GBP 38,000–58,000/year",
      levelIII: "GBP 62,000–88,000/year",
      usdReference: "USD 47,000–72,000 (Level II)",
    },
    examCenters: [
      { name: "TWI Aberdeen — PCN exam venue (Scottish region)", bodies: ["PCN", "CSWIP"] },
      { name: "Lavender International Sheffield (UK national exam centre)", bodies: ["PCN", "CSWIP"] },
    ],
    siblings: UK_NORTH_EU_SIBLINGS,
  },
  {
    slug: "edinburgh",
    city: "Edinburgh",
    country: "UK",
    lat: 55.9533, lng: -3.1883,
    localContext:
      "Edinburgh and Fife host major UK industrial assets — Babcock Rosyth (Royal Navy carrier construction), ExxonMobil Mossmorran ethylene cracker, Ineos Grangemouth (UK's largest petrochemical complex, just west of Edinburgh), and a strong offshore-engineering consulting base serving the North Sea.",
    primaryCert: "PCN",
    secondaryCert: "CSWIP",
    otherCerts: ["ISO 9712", "ASNT"],
    certPathwayNote:
      "Grangemouth and Mossmorran petrochem work follows PCN + ISO 9712 + ASNT. Babcock Rosyth uses Royal Navy / Lloyd's Register class protocols on top of PCN + CSWIP.",
    salary: {
      currency: "GBP",
      levelI: "GBP 26,000–35,000/year",
      levelII: "GBP 40,000–60,000/year",
      levelIII: "GBP 64,000–90,000/year",
      usdReference: "USD 50,000–74,000 (Level II)",
    },
    examCenters: [
      { name: "TWI Aberdeen — PCN exam venue", bodies: ["PCN", "CSWIP"] },
      { name: "Lavender International Sheffield", bodies: ["PCN", "CSWIP"] },
    ],
    siblings: UK_NORTH_EU_SIBLINGS,
  },
  {
    slug: "oslo",
    city: "Oslo",
    country: "Norway",
    lat: 59.9139, lng: 10.7522,
    localContext:
      "Oslo is the corporate headquarters of Norway's energy economy — Equinor HQ (the world's largest offshore operator), Aker Solutions, Subsea 7, DNV (the world's largest classification society), and Kvaerner. NDT crews typically deploy from Oslo to Stavanger, Bergen and offshore platforms across the Norwegian Continental Shelf.",
    primaryCert: "PCN",
    secondaryCert: "ISO 9712",
    otherCerts: ["CSWIP", "ASNT"],
    certPathwayNote:
      "Norwegian NDT is governed by NS-EN ISO 9712. NORSOK M-501 and CR-04 personnel qualification standards govern offshore work. PCN widely accepted; CSWIP dominates welding inspection on Subsea 7 / TechnipFMC packages.",
    salary: {
      currency: "NOK",
      levelI: "NOK 480,000–620,000/year",
      levelII: "NOK 700,000–950,000/year",
      levelIII: "NOK 1,000,000–1,500,000/year",
      usdReference: "USD 66,000–90,000 (Level II)",
    },
    examCenters: [
      { name: "DNV Oslo Examination Centre", bodies: ["ISO 9712"] },
      { name: "Sentralforbund for Sertifisering (Norway)", bodies: ["ISO 9712"] },
      { name: "TWI Aberdeen (cross-border PCN)", bodies: ["PCN"] },
    ],
    siblings: UK_NORTH_EU_SIBLINGS,
  },
  {
    slug: "stavanger",
    city: "Stavanger",
    country: "Norway",
    lat: 58.9700, lng: 5.7331,
    localContext:
      "Stavanger is Norway's offshore oil & gas capital — Equinor's main operational base (Forus), Aker BP HQ, Apply Sørco, Aibel, Subsea 7 Stavanger and Halliburton Stavanger. Almost every Norwegian Continental Shelf operator runs an inspection base here for Sleipner, Statfjord, Johan Sverdrup and Ekofisk fields.",
    primaryCert: "PCN",
    secondaryCert: "ISO 9712",
    otherCerts: ["CSWIP", "ASNT"],
    certPathwayNote:
      "Norwegian Continental Shelf operators apply NS-EN ISO 9712 + NORSOK M-501/CR-04. PCN widely accepted for UK-affiliated contractors. CSWIP 3.1 mandatory for offshore welding inspection.",
    salary: {
      currency: "NOK",
      levelI: "NOK 490,000–640,000/year",
      levelII: "NOK 720,000–1,000,000/year (offshore rotation premium)",
      levelIII: "NOK 1,050,000–1,600,000/year",
      usdReference: "USD 68,000–95,000 (Level II)",
    },
    examCenters: [
      { name: "DNV Stavanger Examination Centre", bodies: ["ISO 9712"] },
      { name: "Force Technology Stavanger", bodies: ["ISO 9712", "PCN"] },
    ],
    siblings: UK_NORTH_EU_SIBLINGS,
  },
  {
    slug: "rotterdam",
    city: "Rotterdam",
    country: "Netherlands",
    lat: 51.9244, lng: 4.4777,
    localContext:
      "Rotterdam Europoort is Europe's largest refining and petrochemical cluster — Shell Pernis (Europe's largest refinery), BP Rotterdam, Exxon Rotterdam, Huntsman, Dow Terneuzen (just south), and the Maasvlakte container/LNG complex. Continuous turnaround and shutdown work pulls hundreds of mobile NDT crews from across Europe.",
    primaryCert: "PCN",
    secondaryCert: "ISO 9712",
    otherCerts: ["CSWIP", "ASNT"],
    certPathwayNote:
      "Dutch refining operators apply NEN-EN-ISO 9712 (Stichting Hobéon administered). PCN and CSWIP widely accepted on UK-led EPC packages. ASNT for US-owned operators (ExxonMobil, BP).",
    salary: {
      currency: "EUR",
      levelI: "EUR 36,000–48,000/year",
      levelII: "EUR 52,000–75,000/year",
      levelIII: "EUR 85,000–125,000/year",
      usdReference: "USD 56,000–81,000 (Level II)",
    },
    examCenters: [
      { name: "Stichting Hobéon (Netherlands national NDT scheme)", bodies: ["ISO 9712"] },
      { name: "Applus+ RTD Rotterdam", bodies: ["ASNT", "PCN", "ISO 9712"] },
      { name: "Bureau Veritas Rotterdam", bodies: ["ASNT", "ISO 9712"] },
    ],
    siblings: UK_NORTH_EU_SIBLINGS,
  },
  {
    slug: "antwerp",
    city: "Antwerp",
    country: "Belgium",
    lat: 51.2194, lng: 4.4025,
    localContext:
      "Antwerp is Europe's second-largest port and petrochemical centre — ExxonMobil Antwerp Refinery, Total Antwerp, Borealis Kallo, BASF Antwerpen, INEOS Antwerp Olefins, and Air Liquide. Continuous turnaround, fabrication and offshore-pipeline supply work make Antwerp one of the highest-density NDT zones in Europe.",
    primaryCert: "PCN",
    secondaryCert: "ISO 9712",
    otherCerts: ["CSWIP", "ASNT"],
    certPathwayNote:
      "Belgian NDT certification is administered via BeNeLux ISO 9712 schemes. PCN and CSWIP widely accepted. Major refining operators (ExxonMobil, Total) accept ASNT SNT-TC-1A for US-affiliated contractors.",
    salary: {
      currency: "EUR",
      levelI: "EUR 34,000–46,000/year",
      levelII: "EUR 50,000–72,000/year",
      levelIII: "EUR 80,000–118,000/year",
      usdReference: "USD 54,000–78,000 (Level II)",
    },
    examCenters: [
      { name: "Bureau Veritas Antwerp", bodies: ["ASNT", "ISO 9712"] },
      { name: "Applus+ RTD Antwerp", bodies: ["ASNT", "PCN", "ISO 9712"] },
    ],
    siblings: UK_NORTH_EU_SIBLINGS,
  },
  {
    slug: "barcelona",
    city: "Barcelona",
    country: "Spain",
    lat: 41.3851, lng: 2.1734,
    localContext:
      "Barcelona is Spain's second-largest industrial centre — Repsol Tarragona Refinery (just south), Cepsa Tarragona, Volkswagen Group (SEAT), Nissan Iberica, and a deep automotive and pharma-vessel supply chain. The Port of Barcelona drives marine inspection scope as well.",
    primaryCert: "PCN",
    secondaryCert: "ISO 9712",
    otherCerts: ["CSWIP", "ASNT"],
    certPathwayNote:
      "Spanish NDT operates under UNE-EN-ISO 9712 (CERTIAEND administered). PCN widely accepted on offshore work. ASNT used by US-owned operators.",
    salary: {
      currency: "EUR",
      levelI: "EUR 30,000–42,000/year",
      levelII: "EUR 45,000–65,000/year",
      levelIII: "EUR 72,000–105,000/year",
      usdReference: "USD 49,000–70,000 (Level II)",
    },
    examCenters: [
      { name: "CERTIAEND Barcelona Examination Centre", bodies: ["ISO 9712"] },
      { name: "Bureau Veritas Barcelona", bodies: ["ASNT", "ISO 9712"] },
    ],
    siblings: UK_NORTH_EU_SIBLINGS,
  },
  {
    slug: "hamburg",
    city: "Hamburg",
    country: "Germany",
    lat: 53.5511, lng: 9.9937,
    localContext:
      "Hamburg is Germany's largest port and a major aerospace and refining hub — Airbus Hamburg Finkenwerder (A320 / A350 / A380 final assembly), Lufthansa Technik (one of the world's largest MROs), Shell Hamburg Refinery, Holborn European Marketing, and a deep shipbuilding/repair industry at Blohm+Voss.",
    primaryCert: "PCN",
    secondaryCert: "ISO 9712",
    otherCerts: ["CSWIP", "ASNT"],
    certPathwayNote:
      "German NDT operates under DIN-EN-ISO 9712 (DGZfP administered — Deutsche Gesellschaft für Zerstörungsfreie Prüfung). Airbus and Lufthansa Technik use EN 4179 / NAS-410 + Nadcap AC7114 overlay.",
    salary: {
      currency: "EUR",
      levelI: "EUR 38,000–52,000/year",
      levelII: "EUR 55,000–78,000/year",
      levelIII: "EUR 88,000–130,000/year",
      usdReference: "USD 59,000–84,000 (Level II)",
    },
    examCenters: [
      { name: "DGZfP Hamburg Examination Centre", bodies: ["ISO 9712"] },
      { name: "TUV NORD Hamburg", bodies: ["ASNT", "ISO 9712"] },
      { name: "Bureau Veritas Hamburg", bodies: ["ASNT", "ISO 9712"] },
    ],
    siblings: UK_NORTH_EU_SIBLINGS,
  },
  {
    slug: "marseille",
    city: "Marseille",
    country: "France",
    lat: 43.2965, lng: 5.3698,
    localContext:
      "Marseille and the Fos-Étang de Berre industrial zone host TotalEnergies La Mède (now a biorefinery), ExxonMobil Fos-sur-Mer, Esso Raffinage, ArcelorMittal Fos-sur-Mer steel works, and the major Marseille-Fos port. Refining, steel and ship-side NDT demand is high.",
    primaryCert: "COFREND",
    secondaryCert: "ISO 9712",
    otherCerts: ["PCN", "ASNT", "CSWIP"],
    certPathwayNote:
      "French NDT operates under COFREND (Confédération Française pour les Essais Non Destructifs), the national ISO 9712 scheme. ASNT and PCN accepted for international operators.",
    salary: {
      currency: "EUR",
      levelI: "EUR 32,000–44,000/year",
      levelII: "EUR 48,000–68,000/year",
      levelIII: "EUR 76,000–110,000/year",
      usdReference: "USD 52,000–73,000 (Level II)",
    },
    examCenters: [
      { name: "COFREND Marseille Examination Centre", bodies: ["COFREND", "ISO 9712"] },
      { name: "Bureau Veritas Marseille", bodies: ["ASNT", "ISO 9712"] },
    ],
    siblings: UK_NORTH_EU_SIBLINGS,
  },
  {
    slug: "paris",
    city: "Paris",
    country: "France",
    lat: 48.8566, lng: 2.3522,
    localContext:
      "Paris hosts the headquarters of France's industrial giants — TotalEnergies HQ, EDF, Framatome (formerly Areva NP — nuclear reactor builder), Airbus, Safran, Naval Group, and Vinci. Most NDT field crews deploy from Paris satellite bases serving nuclear (EDF Civaux, Flamanville, Penly), rail (SNCF), and aerospace.",
    primaryCert: "COFREND",
    secondaryCert: "ISO 9712",
    otherCerts: ["PCN", "ASNT"],
    certPathwayNote:
      "Framatome and EDF nuclear work follows COFREND COSAC (nuclear-specific) + ISO 9712. Airbus/Safran aerospace uses EN 4179 / NAS-410 + Nadcap AC7114. PCN accepted for cross-channel work.",
    salary: {
      currency: "EUR",
      levelI: "EUR 36,000–48,000/year",
      levelII: "EUR 52,000–75,000/year",
      levelIII: "EUR 82,000–120,000/year",
      usdReference: "USD 56,000–81,000 (Level II)",
    },
    examCenters: [
      { name: "COFREND Paris Examination Centre", bodies: ["COFREND", "ISO 9712"] },
      { name: "Bureau Veritas Paris", bodies: ["ASNT", "ISO 9712"] },
    ],
    siblings: UK_NORTH_EU_SIBLINGS,
  },
  {
    slug: "milan",
    city: "Milan",
    country: "Italy",
    lat: 45.4642, lng: 9.1900,
    localContext:
      "Milan is the financial and engineering capital of northern Italy — Eni HQ (San Donato Milanese), Saipem HQ, Tenaris (Dalmine pipe mill, just east), Pirelli HQ, and the deep automotive supply chain (Stellantis, Ferrari, Maserati). Saipem-led offshore and pipeline work generates major NDT demand globally.",
    primaryCert: "ISO 9712",
    secondaryCert: "PCN",
    otherCerts: ["ASNT", "CSWIP"],
    certPathwayNote:
      "Italian NDT operates under UNI-EN-ISO 9712 (administered by AIPnD — Associazione Italiana Prove non Distruttive). Saipem and Tenaris widely accept ASNT and PCN for international project work.",
    salary: {
      currency: "EUR",
      levelI: "EUR 30,000–42,000/year",
      levelII: "EUR 46,000–66,000/year",
      levelIII: "EUR 74,000–108,000/year",
      usdReference: "USD 50,000–72,000 (Level II)",
    },
    examCenters: [
      { name: "AIPnD Milan Examination Centre", bodies: ["ISO 9712"] },
      { name: "Bureau Veritas Milan", bodies: ["ASNT", "ISO 9712"] },
    ],
    siblings: UK_NORTH_EU_SIBLINGS,
  },
  {
    slug: "gdansk",
    city: "Gdansk",
    country: "Poland",
    lat: 54.3520, lng: 18.6466,
    localContext:
      "Gdansk hosts Poland's largest shipyards — Remontowa Shiprepair Yard, Gdansk Shipyard, Stocznia Gdansk, plus the Lotos Group Gdansk Refinery (now part of PKN Orlen, one of the largest in Central Europe). The Baltic offshore wind boom is creating massive new fabrication and inspection demand.",
    primaryCert: "PCN",
    secondaryCert: "ISO 9712",
    otherCerts: ["CSWIP", "ASNT"],
    certPathwayNote:
      "Polish NDT operates under PN-EN-ISO 9712 (administered by UDT — Urząd Dozoru Technicznego). PCN and CSWIP widely accepted on offshore-wind and shipbuilding work led by Northern European EPCs.",
    salary: {
      currency: "PLN",
      levelI: "PLN 70,000–95,000/year",
      levelII: "PLN 110,000–165,000/year",
      levelIII: "PLN 180,000–270,000/year",
      usdReference: "USD 27,000–41,000 (Level II)",
    },
    examCenters: [
      { name: "UDT Gdansk Examination Centre", bodies: ["ISO 9712"] },
      { name: "Bureau Veritas Gdansk", bodies: ["ASNT", "ISO 9712"] },
    ],
    siblings: UK_NORTH_EU_SIBLINGS,
  },

  // ──────── Africa & LatAm ───────────────────────────────────────────
  {
    slug: "lagos",
    city: "Lagos",
    country: "Nigeria",
    lat: 6.5244, lng: 3.3792,
    localContext:
      "Lagos anchors Nigeria's oil & gas economy — NNPC headquarters, Shell Nigeria (SPDC), Chevron Nigeria, ExxonMobil Nigeria (offshore), and the new Dangote Refinery (650,000 bpd — Africa's largest) on the Lekki peninsula. Offshore Niger Delta operations and Dangote turnaround work drive massive NDT demand.",
    primaryCert: "ASNT",
    secondaryCert: "ISO 9712",
    otherCerts: ["PCN", "CSWIP"],
    certPathwayNote:
      "Nigerian operators (NNPC, Shell, Chevron, ExxonMobil) use ASNT SNT-TC-1A as the personnel basis. PCN and CSWIP widely accepted on UK-led contracting. Dangote Refinery accepts ASNT and ISO 9712.",
    salary: {
      currency: "NGN",
      levelI: "NGN 350,000–600,000/month (plus expat allowances)",
      levelII: "NGN 700,000–1,400,000/month",
      levelIII: "NGN 1,800,000–3,500,000/month",
      usdReference: "USD 950–1,900 (Level II — local-hire)",
    },
    examCenters: [
      { name: "Lloyd's Register Lagos", bodies: ["PCN", "CSWIP"] },
      { name: "Bureau Veritas Lagos", bodies: ["ASNT", "ISO 9712"] },
      { name: "DNV Lagos", bodies: ["ISO 9712"] },
    ],
    siblings: [
      { slug: "port-harcourt", label: "Port Harcourt" },
      { slug: "dubai", label: "Dubai" },
      { slug: "abu-dhabi", label: "Abu Dhabi" },
      { slug: "houston", label: "Houston" },
      { slug: "london", label: "London" },
    ],
  },
  {
    slug: "port-harcourt",
    city: "Port Harcourt",
    country: "Nigeria",
    lat: 4.8156, lng: 7.0498,
    localContext:
      "Port Harcourt is the centre of Nigeria's Niger Delta oil & gas economy — Shell Nigeria (SPDC, EA fields), Eni Nigeria (Agip), TotalEnergies Nigeria, Aiteo Eastern E&P, Indorama Eleme petrochemicals, and the Port Harcourt Refining Company. Onshore and shallow-water offshore work drives continuous NDT demand.",
    primaryCert: "ASNT",
    secondaryCert: "ISO 9712",
    otherCerts: ["PCN", "CSWIP"],
    certPathwayNote:
      "Niger Delta operators apply ASNT SNT-TC-1A as the baseline. CSWIP 3.1 widely used on Shell SPDC fabrication packages. PCN accepted on European EPC work.",
    salary: {
      currency: "NGN",
      levelI: "NGN 320,000–550,000/month",
      levelII: "NGN 650,000–1,300,000/month",
      levelIII: "NGN 1,700,000–3,200,000/month",
      usdReference: "USD 880–1,750 (Level II — local-hire)",
    },
    examCenters: [
      { name: "Lloyd's Register Port Harcourt", bodies: ["PCN", "CSWIP"] },
      { name: "Bureau Veritas Port Harcourt", bodies: ["ASNT", "ISO 9712"] },
    ],
    siblings: [
      { slug: "lagos", label: "Lagos" },
      { slug: "dubai", label: "Dubai" },
      { slug: "houston", label: "Houston" },
      { slug: "london", label: "London" },
      { slug: "abu-dhabi", label: "Abu Dhabi" },
    ],
  },
  {
    slug: "sao-paulo",
    city: "São Paulo",
    country: "Brazil",
    lat: -23.5505, lng: -46.6333,
    localContext:
      "São Paulo is Brazil's industrial capital — Petrobras HQ (Rio), with the Cubatão refinery and Petrobras São Paulo offices, plus Embraer (the world's third-largest commercial aircraft maker, São José dos Campos), Volkswagen do Brasil, and a deep automotive and offshore-supplier base. Pre-salt deepwater work drives huge NDT demand.",
    primaryCert: "ABENDI",
    secondaryCert: "ISO 9712",
    otherCerts: ["SNQC", "ASNT", "PCN"],
    certPathwayNote:
      "Brazilian NDT is governed by ABENDI (Associação Brasileira de Ensaios Não Destrutivos) and SNQC/SNQ (Sistema Nacional de Qualificação e Certificação). Petrobras N-1593 standard sets personnel requirements. ASNT and PCN accepted on international packages.",
    salary: {
      currency: "BRL",
      levelI: "BRL 4,500–7,000/month",
      levelII: "BRL 8,500–15,000/month",
      levelIII: "BRL 18,000–32,000/month",
      usdReference: "USD 1,650–2,900 (Level II)",
    },
    examCenters: [
      { name: "ABENDI São Paulo Examination Centre", bodies: ["ABENDI", "SNQC", "ISO 9712"] },
      { name: "Bureau Veritas São Paulo", bodies: ["ASNT", "ISO 9712"] },
    ],
    siblings: [
      { slug: "mexico-city", label: "Mexico City" },
      { slug: "houston", label: "Houston" },
      { slug: "calgary", label: "Calgary" },
      { slug: "dubai", label: "Dubai" },
      { slug: "london", label: "London" },
    ],
  },
  {
    slug: "mexico-city",
    city: "Mexico City",
    country: "Mexico",
    lat: 19.4326, lng: -99.1332,
    localContext:
      "Mexico City is the headquarters city of PEMEX (Petróleos Mexicanos — Mexico's state oil company), with operations spanning Salina Cruz, Cadereyta, Tula, Salamanca and Madero refineries, plus PEMEX E&P offshore in the Bay of Campeche. Automotive (Nissan, GM, FCA Mexico) and aerospace MRO (Bombardier Querétaro) add scope.",
    primaryCert: "ASNT",
    secondaryCert: "CONOCER",
    otherCerts: ["ISO 9712", "PCN"],
    certPathwayNote:
      "PEMEX standards (NRF-031, NRF-032) recognise ASNT SNT-TC-1A as the personnel qualification basis. CONOCER is the national Mexican competency-certification body, increasingly required for local-hire NDT roles. ISO 9712 accepted on export work.",
    salary: {
      currency: "MXN",
      levelI: "MXN 22,000–38,000/month",
      levelII: "MXN 42,000–78,000/month",
      levelIII: "MXN 90,000–170,000/month",
      usdReference: "USD 2,200–4,100 (Level II)",
    },
    examCenters: [
      { name: "IMP — Instituto Mexicano del Petróleo (Mexico City)", bodies: ["ASNT", "CONOCER"] },
      { name: "Bureau Veritas Mexico City", bodies: ["ASNT", "ISO 9712"] },
    ],
    siblings: [
      { slug: "houston", label: "Houston" },
      { slug: "corpus-christi", label: "Corpus Christi" },
      { slug: "sao-paulo", label: "São Paulo" },
      { slug: "los-angeles", label: "Los Angeles" },
      { slug: "san-diego", label: "San Diego" },
    ],
  },

  // ──────── COUNTRY / REGION TRAINING PAGES ──────────────────────────
  {
    slug: "australia",
    city: "Australia",
    country: "Australia",
    lat: -25.2744, lng: 133.7751,
    isCountry: true,
    localContext:
      "Australia's NDT market is dominated by LNG (Woodside North West Shelf + Pluto + Scarborough, Chevron Gorgon + Wheatstone, Inpex Ichthys), iron ore (BHP, Rio Tinto, FMG in the Pilbara), and Eastern Seaboard CSG-LNG (Santos, Origin, Shell QGC). National training centres in Perth, Brisbane, Melbourne, Sydney and Adelaide serve a high-paying market with AINDT as the home certification body.",
    primaryCert: "AINDT",
    secondaryCert: "ASNT",
    otherCerts: ["ISO 9712", "PCN", "CSWIP"],
    certPathwayNote:
      "AINDT administers the Australian ISO 9712 scheme. ASNT SNT-TC-1A is widely accepted for US-affiliated owners (Chevron, ExxonMobil). PCN/CSWIP common on UK-led offshore packages (Subsea 7, Saipem).",
    salary: {
      currency: "AUD",
      levelI: "AUD 70,000–100,000/year",
      levelII: "AUD 105,000–165,000/year (offshore rotation premium)",
      levelIII: "AUD 165,000–250,000/year",
      usdReference: "USD 68,000–108,000 (Level II)",
    },
    examCenters: [
      { name: "AINDT Perth", bodies: ["AINDT", "ISO 9712"] },
      { name: "AINDT Brisbane", bodies: ["AINDT", "ISO 9712"] },
      { name: "AINDT Melbourne", bodies: ["AINDT", "ISO 9712"] },
      { name: "AINDT Sydney", bodies: ["AINDT", "ISO 9712"] },
    ],
    siblings: AUSTRALIA_SIBLINGS,
  },
  {
    slug: "brazil",
    city: "Brazil",
    country: "Brazil",
    lat: -14.2350, lng: -51.9253,
    isCountry: true,
    localContext:
      "Brazil's NDT market is anchored by Petrobras pre-salt deepwater developments (Búzios, Mero, Tupi, Atapu fields) and the world-class Embraer aerospace cluster in São José dos Campos. ABENDI is the national certification body; SNQC governs personnel qualification under Petrobras standards. Major shipyards in Rio and Niterói add scope.",
    primaryCert: "ABENDI",
    secondaryCert: "SNQC",
    otherCerts: ["ISO 9712", "ASNT", "PCN"],
    certPathwayNote:
      "Petrobras N-1593 is the master personnel-qualification standard. ABENDI administers domestic certification; SNQC certifies under the national scheme. ASNT and PCN accepted on international EPC packages.",
    salary: {
      currency: "BRL",
      levelI: "BRL 4,000–6,500/month",
      levelII: "BRL 8,000–14,500/month",
      levelIII: "BRL 17,000–30,000/month",
      usdReference: "USD 1,550–2,800 (Level II)",
    },
    examCenters: [
      { name: "ABENDI São Paulo", bodies: ["ABENDI", "SNQC", "ISO 9712"] },
      { name: "ABENDI Rio de Janeiro", bodies: ["ABENDI", "SNQC", "ISO 9712"] },
      { name: "ABENDI Macaé", bodies: ["ABENDI", "SNQC"] },
    ],
    siblings: [
      { slug: "sao-paulo", label: "São Paulo" },
      { slug: "mexico-city", label: "Mexico City" },
      { slug: "houston", label: "Houston" },
      { slug: "london", label: "London" },
      { slug: "dubai", label: "Dubai" },
    ],
  },
  {
    slug: "canada",
    city: "Canada",
    country: "Canada",
    lat: 56.1304, lng: -106.3468,
    isCountry: true,
    localContext:
      "Canada's NDT market is dominated by Alberta oil sands (Suncor, Cenovus, Imperial Oil, CNRL), pipelines (Enbridge, TC Energy), East Coast offshore (Hibernia, White Rose, Hebron), and West Coast LNG (LNG Canada Kitimat). CGSB (Canadian General Standards Board) administers ISO 9712 nationally; ASNT widely accepted for US-affiliated operators.",
    primaryCert: "CGSB",
    secondaryCert: "ASNT",
    otherCerts: ["CSWIP", "ISO 9712"],
    certPathwayNote:
      "CAN/CGSB-48.9712 is the Canadian implementation of ISO 9712. ASNT SNT-TC-1A is widely accepted for US-affiliated operators. CSA Z662 pipeline code drives weld inspection nationally.",
    salary: {
      currency: "CAD",
      levelI: "CAD 56,000–78,000/year",
      levelII: "CAD 78,000–125,000/year (oil sands premium)",
      levelIII: "CAD 120,000–185,000/year",
      usdReference: "USD 58,000–93,000 (Level II)",
    },
    examCenters: [
      { name: "CINDE Calgary", bodies: ["CGSB"] },
      { name: "CINDE Edmonton", bodies: ["CGSB"] },
      { name: "CINDE Toronto", bodies: ["CGSB"] },
      { name: "CINDE Montreal", bodies: ["CGSB"] },
      { name: "CINDE Halifax", bodies: ["CGSB"] },
    ],
    siblings: CANADA_SIBLINGS,
  },
  {
    slug: "malaysia",
    city: "Malaysia",
    country: "Malaysia",
    lat: 4.2105, lng: 101.9758,
    isCountry: true,
    localContext:
      "Malaysia's NDT market is anchored by Petronas — the national oil company — and its subsidiaries (MISC, Petronas Carigali, Petronas Chemicals). Major industrial assets include the Pengerang Integrated Petroleum Complex (RAPID), MMHE Pasir Gudang yard, Sapura Energy and Dialog Group facilities. Petronas Technical Specifications (PTS) govern most NDT work.",
    primaryCert: "ASNT",
    secondaryCert: "ISO 9712",
    otherCerts: ["PCN", "CSWIP"],
    certPathwayNote:
      "Petronas PTS specifications accept ASNT SNT-TC-1A and ISO 9712 interchangeably. PCN and CSWIP widely accepted on UK-led FPSO and offshore packages. MMHE shipyard follows ABS / Lloyd's Register protocols.",
    salary: {
      currency: "MYR",
      levelI: "MYR 3,200–5,200/month",
      levelII: "MYR 6,000–11,500/month",
      levelIII: "MYR 13,000–24,000/month",
      usdReference: "USD 1,300–2,500 (Level II)",
    },
    examCenters: [
      { name: "PETRONAS Leadership Centre Bangi", bodies: ["ASNT", "ISO 9712"] },
      { name: "TUV NORD Malaysia Kuala Lumpur", bodies: ["ASNT", "ISO 9712"] },
      { name: "Bureau Veritas Kuala Lumpur", bodies: ["ASNT", "ISO 9712"] },
    ],
    siblings: SE_ASIA_SIBLINGS,
  },
  {
    slug: "norway",
    city: "Norway",
    country: "Norway",
    lat: 60.4720, lng: 8.4689,
    isCountry: true,
    localContext:
      "Norway's NDT market is anchored by Equinor and the Norwegian Continental Shelf — Johan Sverdrup, Snorre, Ekofisk, Statfjord, Sleipner, plus pre-development fields like Castberg. Major contractors include Aker BP, Aker Solutions, TechnipFMC, Subsea 7 and Apply Sørco. NORSOK M-501 and CR-04 govern personnel qualification.",
    primaryCert: "ISO 9712",
    secondaryCert: "PCN",
    otherCerts: ["CSWIP", "ASNT"],
    certPathwayNote:
      "Norwegian Continental Shelf operates under NS-EN-ISO 9712 + NORSOK M-501/CR-04. PCN widely accepted for UK-affiliated contractors. CSWIP 3.1 mandatory for offshore welding inspection.",
    salary: {
      currency: "NOK",
      levelI: "NOK 480,000–640,000/year",
      levelII: "NOK 720,000–1,050,000/year (offshore rotation premium)",
      levelIII: "NOK 1,050,000–1,650,000/year",
      usdReference: "USD 68,000–99,000 (Level II)",
    },
    examCenters: [
      { name: "DNV Stavanger", bodies: ["ISO 9712"] },
      { name: "DNV Oslo", bodies: ["ISO 9712"] },
      { name: "DNV Bergen", bodies: ["ISO 9712"] },
      { name: "Force Technology Stavanger", bodies: ["ISO 9712", "PCN"] },
    ],
    siblings: UK_NORTH_EU_SIBLINGS,
  },
  {
    slug: "philippines",
    city: "Philippines",
    country: "Philippines",
    lat: 12.8797, lng: 121.7740,
    isCountry: true,
    localContext:
      "The Philippines' NDT market is centred on Petron Bataan Refinery, the Pilipinas Shell Tabangao depot, Hanjin Subic shipyard legacy ops (now Cerberus / Agile), Petron Limay, Aboitiz Power generation fleet, and an expanding semiconductor manufacturing base. Maritime, refining and power-gen drive NDT demand.",
    primaryCert: "ASNT",
    secondaryCert: "ISO 9712",
    otherCerts: ["PCN", "CSWIP"],
    certPathwayNote:
      "Petron and Pilipinas Shell follow ASNT SNT-TC-1A. Shipyard work uses ABS / Lloyd's Register class protocols. PCN/CSWIP widely accepted on international fabrication contracts.",
    salary: {
      currency: "PHP",
      levelI: "PHP 30,000–55,000/month",
      levelII: "PHP 60,000–115,000/month",
      levelIII: "PHP 130,000–240,000/month",
      usdReference: "USD 1,050–2,000 (Level II)",
    },
    examCenters: [
      { name: "TUV Rheinland Philippines Manila", bodies: ["ASNT", "ISO 9712"] },
      { name: "Bureau Veritas Manila", bodies: ["ASNT", "ISO 9712"] },
    ],
    siblings: SE_ASIA_SIBLINGS,
  },
  {
    slug: "south-korea",
    city: "South Korea",
    country: "South Korea",
    lat: 35.9078, lng: 127.7669,
    isCountry: true,
    localContext:
      "South Korea is the world's largest shipbuilding centre — HD Hyundai Heavy Industries (Ulsan), Samsung Heavy Industries (Geoje), Hanwha Ocean (formerly DSME, Geoje). Refining is dominated by SK Energy, S-Oil, GS Caltex and Hyundai Oilbank. Nuclear power (KEPCO, KHNP) adds a major specialised NDT segment.",
    primaryCert: "ASNT",
    secondaryCert: "ISO 9712",
    otherCerts: ["PCN", "CSWIP"],
    certPathwayNote:
      "Korean shipyards run dual-track KS (Korean Standards) + ASNT SNT-TC-1A for export work. Major refining operators use ASNT + API 510/570/653. KEPCO/KHNP nuclear work uses ASME III/V/IX + ASNT.",
    salary: {
      currency: "KRW",
      levelI: "KRW 38M–55M/year",
      levelII: "KRW 62M–92M/year",
      levelIII: "KRW 105M–165M/year",
      usdReference: "USD 47,000–70,000 (Level II)",
    },
    examCenters: [
      { name: "KSNT (Korean Society for NDT) Seoul Examination Centre", bodies: ["ASNT", "ISO 9712"] },
      { name: "TUV NORD Korea Ulsan", bodies: ["ASNT", "ISO 9712"] },
      { name: "Bureau Veritas Busan", bodies: ["ASNT", "ISO 9712"] },
    ],
    siblings: SE_ASIA_SIBLINGS,
  },
  {
    slug: "uae",
    city: "UAE",
    country: "UAE",
    lat: 23.4241, lng: 53.8478,
    isCountry: true,
    localContext:
      "The UAE NDT market is dominated by ADNOC Group (ADNOC Onshore, Offshore, Refining, Gas, Borouge), DEWA, and the UAE Barakah Nuclear Power Plant operated by ENEC. Major fabrication and EPC contractors include Petrofac, Tecnimont, NPCC, Lamprell, and dozens of mid-tier yards across Hamriyah and Mussafah.",
    primaryCert: "ASNT",
    secondaryCert: "ISO 9712",
    otherCerts: ["PCN", "CSWIP", "SAEP"],
    certPathwayNote:
      "ADNOC contractor specifications accept ASNT SNT-TC-1A and ISO 9712 interchangeably. CSWIP 3.1 mandatory for welding inspector roles. PCN accepted on UK / European EPC packages. Aramco SAEP-1112 honoured for cross-border crews.",
    salary: {
      currency: "AED",
      levelI: "AED 5,000–8,000/month (tax-free)",
      levelII: "AED 9,000–16,000/month (tax-free)",
      levelIII: "AED 18,000–32,000/month (tax-free)",
      usdReference: "USD 2,450–4,350 (Level II take-home)",
    },
    examCenters: [
      { name: "Bureau Veritas Abu Dhabi", bodies: ["ASNT", "ISO 9712"] },
      { name: "TUV Rheinland Dubai", bodies: ["ASNT", "ISO 9712"] },
      { name: "Applus+ Velosi Abu Dhabi", bodies: ["ASNT", "PCN", "ISO 9712"] },
      { name: "Lloyd's Register Sharjah", bodies: ["PCN", "CSWIP"] },
    ],
    siblings: GCC_SIBLINGS,
  },
  {
    slug: "oman",
    city: "Oman",
    country: "Oman",
    lat: 21.4735, lng: 55.9754,
    isCountry: true,
    localContext:
      "Oman's NDT market is anchored by PDO (Petroleum Development Oman — Shell-operated, 60% state-owned), OQ (state oil/petrochem), Oman LNG (Qalhat), Daleel Petroleum, BP Oman (Khazzan tight gas), and the Sohar/Duqm industrial corridors. Continuous turnarounds and major capex projects keep NDT demand high.",
    primaryCert: "ASNT",
    secondaryCert: "ISO 9712",
    otherCerts: ["PCN", "CSWIP"],
    certPathwayNote:
      "PDO SP-1191 specifications align with ASNT SNT-TC-1A. ISO 9712 broadly accepted on OQ and Oman LNG projects. PCN appears on UK/EU-led EPC packages.",
    salary: {
      currency: "OMR",
      levelI: "OMR 400–650/month (tax-free)",
      levelII: "OMR 750–1,400/month (tax-free)",
      levelIII: "OMR 1,500–2,800/month (tax-free)",
      usdReference: "USD 1,950–3,650 (Level II take-home)",
    },
    examCenters: [
      { name: "Bureau Veritas Muscat", bodies: ["ASNT", "ISO 9712"] },
      { name: "TUV Middle East Muscat", bodies: ["ASNT", "ISO 9712"] },
      { name: "Bureau Veritas Sohar", bodies: ["ASNT", "ISO 9712"] },
    ],
    siblings: GCC_SIBLINGS,
  },
  {
    slug: "nigeria",
    city: "Nigeria",
    country: "Nigeria",
    lat: 9.0820, lng: 8.6753,
    isCountry: true,
    localContext:
      "Nigeria's NDT market is one of Africa's largest — NNPC, Shell SPDC, Chevron Nigeria, ExxonMobil Nigeria (offshore), TotalEnergies Nigeria, Eni / Agip Nigeria, the new Dangote Refinery (650,000 bpd Lekki — Africa's largest), and the long-troubled Port Harcourt, Warri and Kaduna NNPC refineries currently undergoing rehabilitation.",
    primaryCert: "ASNT",
    secondaryCert: "ISO 9712",
    otherCerts: ["PCN", "CSWIP"],
    certPathwayNote:
      "Nigerian operators (NNPC, Shell, Chevron, ExxonMobil) use ASNT SNT-TC-1A. PCN and CSWIP widely accepted on UK-led contracting. Dangote Refinery accepts ASNT and ISO 9712.",
    salary: {
      currency: "NGN",
      levelI: "NGN 330,000–570,000/month",
      levelII: "NGN 670,000–1,350,000/month",
      levelIII: "NGN 1,750,000–3,300,000/month",
      usdReference: "USD 900–1,850 (Level II — local-hire)",
    },
    examCenters: [
      { name: "Lloyd's Register Lagos", bodies: ["PCN", "CSWIP"] },
      { name: "Lloyd's Register Port Harcourt", bodies: ["PCN", "CSWIP"] },
      { name: "Bureau Veritas Lagos", bodies: ["ASNT", "ISO 9712"] },
      { name: "DNV Lagos", bodies: ["ISO 9712"] },
    ],
    siblings: [
      { slug: "lagos", label: "Lagos" },
      { slug: "port-harcourt", label: "Port Harcourt" },
      { slug: "dubai", label: "Dubai" },
      { slug: "houston", label: "Houston" },
      { slug: "london", label: "London" },
    ],
  },
  {
    slug: "mexico",
    city: "Mexico",
    country: "Mexico",
    lat: 23.6345, lng: -102.5528,
    isCountry: true,
    localContext:
      "Mexico's NDT market is anchored by PEMEX — the national oil company — operating Salina Cruz, Cadereyta, Tula, Salamanca, Madero refineries plus offshore Cantarell, Ku-Maloob-Zaap, and the new Dos Bocas refinery. Automotive manufacturing (Nissan Aguascalientes, GM Ramos Arizpe, FCA Saltillo) and aerospace (Bombardier Querétaro, Safran Querétaro) add scope.",
    primaryCert: "ASNT",
    secondaryCert: "CONOCER",
    otherCerts: ["ISO 9712", "PCN"],
    certPathwayNote:
      "PEMEX NRF-031 / NRF-032 standards accept ASNT SNT-TC-1A. CONOCER is the national Mexican competency-certification body for local-hire NDT roles. ISO 9712 accepted on export work.",
    salary: {
      currency: "MXN",
      levelI: "MXN 21,000–36,000/month",
      levelII: "MXN 40,000–75,000/month",
      levelIII: "MXN 88,000–165,000/month",
      usdReference: "USD 2,100–3,950 (Level II)",
    },
    examCenters: [
      { name: "IMP — Instituto Mexicano del Petróleo (Mexico City)", bodies: ["ASNT", "CONOCER"] },
      { name: "Bureau Veritas Mexico City", bodies: ["ASNT", "ISO 9712"] },
      { name: "Bureau Veritas Monterrey", bodies: ["ASNT", "ISO 9712"] },
    ],
    siblings: [
      { slug: "mexico-city", label: "Mexico City" },
      { slug: "houston", label: "Houston" },
      { slug: "corpus-christi", label: "Corpus Christi" },
      { slug: "sao-paulo", label: "São Paulo" },
      { slug: "los-angeles", label: "Los Angeles" },
    ],
  },
];

// ─── Lookup helpers ───────────────────────────────────────────────────────
export function getTrainingCityProfile(slug: string): TrainingCityProfile | undefined {
  return TRAINING_CITY_PROFILES.find((p) => p.slug === slug);
}

export const TRAINING_EXPANSION_SLUGS: string[] = TRAINING_CITY_PROFILES.map(
  (p) => p.slug,
);
