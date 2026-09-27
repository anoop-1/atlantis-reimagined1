import ErpTripleCrossPage, { ErpTripleCrossProps } from '@/components/ErpTripleCrossPage';
const data: ErpTripleCrossProps = {
  "moduleSlug": "corrosion-tracking",
  "industrySlug": "oilfield-services",
  "citySlug": "calgary",
  "moduleName": "Corrosion Tracking & RBI",
  "industryName": "Oilfield Services & Wellsite Inspection",
  "cityName": "Calgary",
  "countryName": "Canada",
  "isoCountry": "CA",
  "lat": 51.0447,
  "lng": -114.0719,
  "title": "Corrosion Tracking & RBI Software for Oilfield Services & Wellsite Inspection in Calgary",
  "desc": "Aligned to API 510 / 570 / 653 / 571 / 580 / 581 corrosion and integrity methodology, with operator flow-down for Suncor Energy and Cenovus Energy and ABSA / AER compliance support. Demo: info@atlantisndt.com.",
  "introPara1": "Calgary sits at the heart of the head-office hub for Canadian oil sands, conventional petroleum, and trans-continental pipelines. The dominant industrial cluster — oil sands near Fort McMurray, conventional gas in Alberta / BC, plus Enbridge / TC Energy long-haul networks — sets the rhythm: extreme-cold field work, ABSA registration, and rotational FIFO crews to remote sites.",
  "introPara2": "oilfield services and wellsite inspection contractors manage rig and BOP test schedules, OCTG per-joint records, field-ticket capture, and HSE certification renewals (BOSIET / HUET / H2S Alive / IADC RigPass) across rotating crews and remote pads. For oilfield services & wellsite inspection based in Calgary, that means a single live system of record that knows the market, not a generic accounting tool bolted to a spreadsheet of inspection records.",
  "introPara3": "Configured for Calgary — with a procedure-library module able to hold whichever operator-specific flow-down clauses you need, such as those from Suncor Energy, Cenovus Energy, CNRL, Imperial Oil, once uploaded — compliance templates against ABSA AB-506 / AB-512, CSA Z662, CSA B51, AER Directive 056 / 077, and the audit frameworks that ABSA, AER, CER actually use. Field-data capture is offline-capable for Calgary project sites, multi-language reporting supports Canada-required document formats, and the platform is delivered as multi-tenant SaaS with regional data residency — a 5-person Calgary oilfield services contractor and a 200-person multinational both run on the same configuration baseline.",
  "features": [
    "Wall-thickness projection with t-min, t-required, retirement-date forecasting",
    "Integration with ILI / dig-verification data for buried-pipeline corrosion",
    "NACE-aligned corrosion-monitoring (coupons, ER probes, LPR) data integration",
    "Calgary operator-specific flow-down pre-loaded for Suncor Energy, Cenovus Energy, CNRL",
    "Calgary regulator compliance dashboard for ABSA, AER, CER",
    "Oilfield services contractor-specific report templates and acceptance criteria for oilfield services & wellsite inspection workflows",
    "Bilingual (English + Canada-relevant local language) document handling for Calgary authority submission"
  ],
  "operators": [
    "Suncor Energy",
    "Cenovus Energy",
    "CNRL",
    "Imperial Oil",
    "TC Energy / TransCanada",
    "Enbridge",
    "Pembina Pipeline",
    "Husky / Cenovus refining"
  ],
  "regulators": [
    "ABSA",
    "AER",
    "CER",
    "CSA Group",
    "Transport Canada",
    "CNSC",
    "ABSA AB-506 / AB-512",
    "CSA Z662"
  ],
  "painPoints": [
  ],
  "useCases": [
  ],
  "faqs": [
    [
      "Yes. The procedure-library module also holds whichever operator-specific quality clauses your contracts require — such as those from Suncor Energy, Cenovus Energy, CNRL, Imperial Oil — once your team uploads them. The module is aligned to API 510 / 570 / 653 / 571 / 580 / 581 corrosion and integrity methodology. Configuration is done — your oilfield services contractor team is productive on day one, not after six months of customisation."
    ],
    [
      "The compliance dashboard maps to ABSA, AER, CER, CSA Group, Transport Canada, CNSC. Statutory inspection-interval calculation, document-format generation, and audit-ready evidence-pack assembly are all built around these authorities. For oilfield services contractors, that means extreme-cold field work, ABSA registration, and rotational FIFO crews to remote sites."
    ],
    [
      "Can oilfield services contractors in Calgary integrate with operator-specific portals such as Suncor Energy?",
    ],
    [
      "What languages and currencies does the Calgary deployment support?",
      "English is primary across the platform; Canada-relevant languages (Arabic in the Gulf, Bahasa Indonesia, Hindi / Marathi / Telugu in India, Mandarin in China and Singapore, Portuguese / Spanish in the Americas, French in West Africa and Canada) are supported for customer-facing documents and field-app translations. Invoicing supports USD, EUR, GBP, AED, SAR, INR, SGD, AUD, CAD, IDR, MYR, QAR, NGN, BRL, MXN, KWD, OMR — full multi-currency with VAT / GST as applicable for Canada."
    ],
    [
    ]
  ]
} as ErpTripleCrossProps;
export default function ErpTriple_corrosion_tracking_oilfield_services_calgary() { return <ErpTripleCrossPage {...data} />; }
