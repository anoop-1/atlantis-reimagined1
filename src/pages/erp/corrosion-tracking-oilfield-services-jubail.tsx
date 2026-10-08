import ErpTripleCrossPage, { ErpTripleCrossProps } from '@/components/ErpTripleCrossPage';
const data: ErpTripleCrossProps = {
  "moduleSlug": "corrosion-tracking",
  "industrySlug": "oilfield-services",
  "citySlug": "jubail",
  "moduleName": "Corrosion Tracking",
  "industryName": "Oilfield Services & Wellsite Inspection",
  "cityName": "Jubail",
  "countryName": "Saudi Arabia",
  "isoCountry": "SA",
  "lat": 27.0046,
  "lng": 49.6469,
  "title": "Corrosion Tracking Software for Oilfield Services & Wellsite Inspection in Jubail",
  "desc": "Aligned to API 510 / 570 / 653 / 571 corrosion and integrity methodology, with operator flow-down for SASREF and SADAF and Royal Commission for Jubail and Yanbu (RCJY) / HRSD compliance support. Demo: info@atlantisndt.com.",
  "introPara1": "Jubail sits at the heart of the world's largest master-planned industrial city. The dominant industrial cluster — Jubail Industrial City I & II, Aramco Jubail Refinery (SASREF / SADAF), SABIC affiliates, and Jubail-2 expansion — sets the rhythm: the heaviest concentration of sour-gas-rated equipment and Aramco / SABIC shutdowns in the Kingdom.",
  "introPara2": "oilfield services and wellsite inspection contractors manage rig and BOP test schedules, OCTG per-joint records, field-ticket capture, and HSE certification renewals (BOSIET / HUET / H2S Alive / IADC RigPass) across rotating crews and remote pads. For oilfield services & wellsite inspection based in Jubail, that means a single live system of record that knows the market, not a generic accounting tool bolted to a spreadsheet of inspection records.",
  "introPara3": "Configured for Jubail — with a procedure-library module able to hold whichever operator-specific flow-down clauses you need, such as those from SASREF, SADAF, Kemya, Petrokemya, once uploaded — compliance templates against RCJY engineering standards, Aramco SAEP-1112 / 1142, SABIC ESS / SES, NACE TM0177 / TM0284, and the audit frameworks that Royal Commission for Jubail and Yanbu (RCJY), HRSD, SASO actually use. Field-data capture is offline-capable for Jubail project sites, multi-language reporting supports Saudi Arabia-required document formats, and the platform is delivered as multi-tenant SaaS with regional data residency — a 5-person Jubail oilfield services contractor and a 200-person multinational both run on the same configuration baseline.",
  "features": [
    "Wall-thickness trend per TML against the t-min and retirement thickness the inspector sets",
    "Integration with ILI / dig-verification data for buried-pipeline corrosion",
    "NACE-aligned corrosion-monitoring (coupons, ER probes, LPR) data integration",
    "Jubail operator-specific flow-down pre-loaded for SASREF, SADAF, Kemya",
    "Jubail regulator compliance dashboard for Royal Commission for Jubail and Yanbu (RCJY), HRSD, SASO",
    "Oilfield services contractor-specific report templates and acceptance criteria for oilfield services & wellsite inspection workflows",
    "Bilingual (English + Saudi Arabia-relevant local language) document handling for Jubail authority submission"
  ],
  "operators": [
    "SASREF",
    "SADAF",
    "Kemya",
    "Petrokemya",
    "Sharq",
    "Saudi Kayan",
    "SATORP",
    "RC Jubail PMT"
  ],
  "regulators": [
    "Royal Commission for Jubail and Yanbu (RCJY)",
    "HRSD",
    "SASO",
    "Aramco SAEP-1142",
    "SABIC vendor approval",
    "RCJY engineering standards",
    "Aramco SAEP-1112 / 1142",
    "SABIC ESS / SES"
  ],
  "painPoints": [
  ],
  "useCases": [
  ],
  "faqs": [
    [
      "Yes. The procedure-library module also holds whichever operator-specific quality clauses your contracts require — such as those from SASREF, SADAF, Kemya, Petrokemya — once your team uploads them. The module is aligned to API 510 / 570 / 653 / 571 corrosion and integrity methodology. Configuration is done — your oilfield services contractor team is productive on day one, not after six months of customisation."
    ],
    [
      "The compliance dashboard maps to Royal Commission for Jubail and Yanbu (RCJY), HRSD, SASO, Aramco SAEP-1142, SABIC vendor approval. Statutory inspection due-date reminders, document-format generation, and audit-ready evidence-pack assembly are all built around these authorities. For oilfield services contractors, that means the heaviest concentration of sour-gas-rated equipment and Aramco / SABIC shutdowns in the Kingdom."
    ],
    [
      "Can oilfield services contractors in Jubail integrate with operator-specific portals such as SASREF?",
    ],
    [
      "What languages and currencies does the Jubail deployment support?",
      "English is primary across the platform; Saudi Arabia-relevant languages (Arabic in the Gulf, Bahasa Indonesia, Hindi / Marathi / Telugu in India, Mandarin in China and Singapore, Portuguese / Spanish in the Americas, French in West Africa and Canada) are supported for customer-facing documents and field-app translations. Invoicing supports USD, EUR, GBP, AED, SAR, INR, SGD, AUD, CAD, IDR, MYR, QAR, NGN, BRL, MXN, KWD, OMR — full multi-currency with VAT / GST as applicable for Saudi Arabia."
    ],
    [
    ]
  ]
} as ErpTripleCrossProps;
export default function ErpTriple_corrosion_tracking_oilfield_services_jubail() { return <ErpTripleCrossPage {...data} />; }
