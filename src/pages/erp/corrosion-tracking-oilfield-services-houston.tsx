import ErpTripleCrossPage, { ErpTripleCrossProps } from '@/components/ErpTripleCrossPage';
const data: ErpTripleCrossProps = {
  "moduleSlug": "corrosion-tracking",
  "industrySlug": "oilfield-services",
  "citySlug": "houston",
  "moduleName": "Corrosion Tracking & RBI",
  "industryName": "Oilfield Services & Wellsite Inspection",
  "cityName": "Houston",
  "countryName": "USA",
  "isoCountry": "US",
  "lat": 29.7604,
  "lng": -95.3698,
  "title": "Corrosion Tracking & RBI Software for Oilfield Services & Wellsite Inspection in Houston",
  "desc": "Aligned to API 510 / 570 / 653 / 571 / 580 / 581 corrosion and integrity methodology, with operator flow-down for ExxonMobil Baytown and Marathon Galveston Bay and TCEQ / OSHA Region 6 PSM compliance support. Demo: info@atlantisndt.com.",
  "introPara1": "Houston sits at the heart of the energy capital of the world with 4,600+ oil & gas firms. The dominant industrial cluster — the 400-mile Gulf Coast refining and petrochemical complex — sets the rhythm: Houston turnarounds compress 9 months of work into 30 days.",
  "introPara2": "oilfield services and wellsite inspection contractors manage rig and BOP test schedules, OCTG per-joint records, field-ticket capture, and HSE certification renewals (BOSIET / HUET / H2S Alive / IADC RigPass) across rotating crews and remote pads. For oilfield services & wellsite inspection based in Houston, that means a single live system of record that knows the market, not a generic accounting tool bolted to a spreadsheet of inspection records.",
  "introPara3": "Configured for Houston — with a procedure-library module able to hold whichever operator-specific flow-down clauses you need, such as those from ExxonMobil Baytown, Marathon Galveston Bay, LyondellBasell Channelview, Valero Houston / Texas City, once uploaded — compliance templates against API 510 / 570 / 653, ASME B31.3 / B31.4 / B31.8, OSHA 29 CFR 1910.119 PSM, TCEQ 30 TAC Chapter 116, and the audit frameworks that TCEQ, OSHA Region 6 PSM, USCG District 8 actually use. Field-data capture is offline-capable for Houston project sites, multi-language reporting supports USA-required document formats, and the platform is delivered as multi-tenant SaaS with regional data residency — a 5-person Houston oilfield services contractor and a 200-person multinational both run on the same configuration baseline.",
  "features": [
    "Wall-thickness projection with t-min, t-required, retirement-date forecasting",
    "Integration with ILI / dig-verification data for buried-pipeline corrosion",
    "NACE-aligned corrosion-monitoring (coupons, ER probes, LPR) data integration",
    "Houston operator-specific flow-down pre-loaded for ExxonMobil Baytown, Marathon Galveston Bay, LyondellBasell Channelview",
    "Houston regulator compliance dashboard for TCEQ, OSHA Region 6 PSM, USCG District 8",
    "Oilfield services contractor-specific report templates and acceptance criteria for oilfield services & wellsite inspection workflows",
    "Bilingual (English + USA-relevant local language) document handling for Houston authority submission"
  ],
  "operators": [
    "ExxonMobil Baytown",
    "Marathon Galveston Bay",
    "LyondellBasell Channelview",
    "Valero Houston / Texas City",
    "Phillips 66 Sweeny",
    "Shell Deer Park",
    "Chevron Phillips Cedar Bayou",
    "INEOS Chocolate Bayou"
  ],
  "regulators": [
    "TCEQ",
    "OSHA Region 6 PSM",
    "USCG District 8",
    "Texas Railroad Commission",
    "EPA Region 6",
    "DOT PHMSA 49 CFR 192 / 195",
    "Texas DSHS Radiation Control",
    "API 510 / 570 / 653"
  ],
  "painPoints": [
  ],
  "useCases": [
  ],
  "faqs": [
    [
      "Yes. The procedure-library module also holds whichever operator-specific quality clauses your contracts require — such as those from ExxonMobil Baytown, Marathon Galveston Bay, LyondellBasell Channelview, Valero Houston / Texas City — once your team uploads them. The module is aligned to API 510 / 570 / 653 / 571 / 580 / 581 corrosion and integrity methodology. Configuration is done — your oilfield services contractor team is productive on day one, not after six months of customisation."
    ],
    [
      "The compliance dashboard maps to TCEQ, OSHA Region 6 PSM, USCG District 8, Texas Railroad Commission, EPA Region 6, DOT PHMSA 49 CFR 192 / 195, Texas DSHS Radiation Control. Statutory inspection-interval calculation, document-format generation, and audit-ready evidence-pack assembly are all built around these authorities. For oilfield services contractors, that means Houston turnarounds compress 9 months of work into 30 days."
    ],
    [
      "Can oilfield services contractors in Houston integrate with operator-specific portals such as ExxonMobil Baytown?",
      "We don't claim a live system integration with any specific operator's vendor portal — check with your client for their current submission process."
    ],
    [
      "What languages and currencies does the Houston deployment support?",
      "English is primary across the platform; USA-relevant languages (Arabic in the Gulf, Bahasa Indonesia, Hindi / Marathi / Telugu in India, Mandarin in China and Singapore, Portuguese / Spanish in the Americas, French in West Africa and Canada) are supported for customer-facing documents and field-app translations. Invoicing supports USD, EUR, GBP, AED, SAR, INR, SGD, AUD, CAD, IDR, MYR, QAR, NGN, BRL, MXN, KWD, OMR — full multi-currency with VAT / GST as applicable for USA."
    ],
    [
    ]
  ]
} as ErpTripleCrossProps;
export default function ErpTriple_corrosion_tracking_oilfield_services_houston() { return <ErpTripleCrossPage {...data} />; }
