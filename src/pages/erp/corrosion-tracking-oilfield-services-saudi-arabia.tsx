import ErpTripleCrossPage, { ErpTripleCrossProps } from '@/components/ErpTripleCrossPage';
const data: ErpTripleCrossProps = {
  "moduleSlug": "corrosion-tracking",
  "industrySlug": "oilfield-services",
  "citySlug": "saudi-arabia",
  "moduleName": "Corrosion Tracking",
  "industryName": "Oilfield Services & Wellsite Inspection",
  "cityName": "Saudi Arabia",
  "countryName": "Saudi Arabia",
  "isoCountry": "SA",
  "lat": 23.8859,
  "lng": 45.0792,
  "title": "Corrosion Tracking Software for Oilfield Services & Wellsite Inspection in Saudi Arabia",
  "desc": "Aligned to API 510 / 570 / 653 / 571 corrosion and integrity methodology, with operator flow-down for Saudi Aramco and SABIC and HRSD / GAMI compliance support. Demo: info@atlantisndt.com.",
  "introPara1": "Saudi Arabia sits at the heart of the largest integrated oil and gas operating environment in the world. The dominant industrial cluster — the Eastern Province upstream-and-downstream complex (Abqaiq, Khurais, Ras Tanura, Jubail) plus Yanbu — sets the rhythm: SAEP-1112 / 1142 currency is non-negotiable for vendor eligibility.",
  "introPara2": "oilfield services and wellsite inspection contractors manage rig and BOP test schedules, OCTG per-joint records, field-ticket capture, and HSE certification renewals (BOSIET / HUET / H2S Alive / IADC RigPass) across rotating crews and remote pads. For oilfield services & wellsite inspection based in Saudi Arabia, that means a single live system of record that knows the market, not a generic accounting tool bolted to a spreadsheet of inspection records.",
  "introPara3": "Configured for Saudi Arabia — with a procedure-library module able to hold whichever operator-specific flow-down clauses you need, such as those from Saudi Aramco, SABIC, Ma'aden, SADAF / KEMYA / Yanpet, once uploaded — compliance templates against Saudi Aramco SAEP-1112 / 1142, SAES-H / SAES-W / SAES-L, API 510 / 570 / 653, ASME Section V / VIII / IX, and the audit frameworks that HRSD, GAMI, SASO actually use. Field-data capture is offline-capable for Saudi Arabia project sites, multi-language reporting supports Saudi Arabia-required document formats, and the platform is delivered as multi-tenant SaaS with regional data residency — a 5-person Saudi Arabia oilfield services contractor and a 200-person multinational both run on the same configuration baseline.",
  "features": [
    "Wall-thickness projection with t-min, t-required, retirement-date forecasting",
    "Integration with ILI / dig-verification data for buried-pipeline corrosion",
    "NACE-aligned corrosion-monitoring (coupons, ER probes, LPR) data integration",
    "Saudi Arabia operator-specific flow-down pre-loaded for Saudi Aramco, SABIC, Ma'aden",
    "Saudi Arabia regulator compliance dashboard for HRSD, GAMI, SASO",
    "Oilfield services contractor-specific report templates and acceptance criteria for oilfield services & wellsite inspection workflows",
    "Bilingual (English + Saudi Arabia-relevant local language) document handling for Saudi Arabia authority submission"
  ],
  "operators": [
    "Saudi Aramco",
    "SABIC",
    "Ma'aden",
    "SADAF / KEMYA / Yanpet",
    "Petro Rabigh",
    "Saudi Kayan",
    "Yansab",
    "Jubail Industrial City operators"
  ],
  "regulators": [
    "HRSD",
    "GAMI",
    "SASO",
    "Saudi Aramco SAEP-1112 / 1142",
    "SABIC vendor approval",
    "Saudi Aramco SAEP-1112 / 1142",
    "SAES-H / SAES-W / SAES-L",
    "API 510 / 570 / 653"
  ],
  "painPoints": [
  ],
  "useCases": [
  ],
  "faqs": [
    [
      "Yes. The procedure-library module also holds whichever operator-specific quality clauses your contracts require — such as those from Saudi Aramco, SABIC, Ma'aden, SADAF / KEMYA / Yanpet — once your team uploads them. The module is aligned to API 510 / 570 / 653 / 571 corrosion and integrity methodology. Configuration is done — your oilfield services contractor team is productive on day one, not after six months of customisation."
    ],
    [
      "The compliance dashboard maps to HRSD, GAMI, SASO, Saudi Aramco SAEP-1112 / 1142, SABIC vendor approval. Statutory inspection-interval calculation, document-format generation, and audit-ready evidence-pack assembly are all built around these authorities. For oilfield services contractors, that means SAEP-1112 / 1142 currency is non-negotiable for vendor eligibility."
    ],
    [
      "Can oilfield services contractors in Saudi Arabia integrate with operator-specific portals such as Saudi Aramco?",
    ],
    [
      "What languages and currencies does the Saudi Arabia deployment support?",
      "English is primary across the platform; Saudi Arabia-relevant languages (Arabic in the Gulf, Bahasa Indonesia, Hindi / Marathi / Telugu in India, Mandarin in China and Singapore, Portuguese / Spanish in the Americas, French in West Africa and Canada) are supported for customer-facing documents and field-app translations. Invoicing supports USD, EUR, GBP, AED, SAR, INR, SGD, AUD, CAD, IDR, MYR, QAR, NGN, BRL, MXN, KWD, OMR — full multi-currency with VAT / GST as applicable for Saudi Arabia."
    ],
    [
    ]
  ]
} as ErpTripleCrossProps;
export default function ErpTriple_corrosion_tracking_oilfield_services_saudi_arabia() { return <ErpTripleCrossPage {...data} />; }
