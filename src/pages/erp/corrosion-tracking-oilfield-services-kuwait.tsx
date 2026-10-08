import ErpTripleCrossPage, { ErpTripleCrossProps } from '@/components/ErpTripleCrossPage';
const data: ErpTripleCrossProps = {
  "moduleSlug": "corrosion-tracking",
  "industrySlug": "oilfield-services",
  "citySlug": "kuwait",
  "moduleName": "Corrosion Tracking",
  "industryName": "Oilfield Services & Wellsite Inspection",
  "cityName": "Kuwait City",
  "countryName": "Kuwait",
  "isoCountry": "KW",
  "lat": 29.3759,
  "lng": 47.9774,
  "title": "Corrosion Tracking Software for Oilfield Services & Wellsite Inspection in Kuwait City",
  "desc": "Aligned to API 510 / 570 / 653 / 571 corrosion and integrity methodology, with operator flow-down for Kuwait Oil Company (KOC) and KNPC and Public Authority for Industry (PAI) / Kuwait EPA compliance support. Demo: info@atlantisndt.com.",
  "introPara1": "Kuwait City sits at the heart of a 4 million bbl/day producer concentrated in KOC upstream and KNPC / KIPIC downstream. The dominant industrial cluster — Mina Al-Ahmadi and Mina Abdullah refineries, Al-Zour refinery and LNG terminal, Greater Burgan field — sets the rhythm: KPC, KOC, KNPC and KIPIC each maintain separate but overlapping vendor lists.",
  "introPara2": "oilfield services and wellsite inspection contractors manage rig and BOP test schedules, OCTG per-joint records, field-ticket capture, and HSE certification renewals (BOSIET / HUET / H2S Alive / IADC RigPass) across rotating crews and remote pads. For oilfield services & wellsite inspection based in Kuwait City, that means a single live system of record that knows the market, not a generic accounting tool bolted to a spreadsheet of inspection records.",
  "introPara3": "Configured for Kuwait City — with a procedure-library module able to hold whichever operator-specific flow-down clauses you need, such as those from Kuwait Oil Company (KOC), KNPC, KIPIC (Al-Zour), PIC, once uploaded — compliance templates against KPC Vendor Quality Requirements (KPC-VQR), KOC standards, KNPC SES, NACE TM0177, and the audit frameworks that Public Authority for Industry (PAI), Kuwait EPA, Kuwait Fire Force actually use. Field-data capture is offline-capable for Kuwait City project sites, multi-language reporting supports Kuwait-required document formats, and the platform is delivered as multi-tenant SaaS with regional data residency — a 5-person Kuwait City oilfield services contractor and a 200-person multinational both run on the same configuration baseline.",
  "features": [
    "Wall-thickness trend per TML against the t-min and retirement thickness the inspector sets",
    "Integration with ILI / dig-verification data for buried-pipeline corrosion",
    "NACE-aligned corrosion-monitoring (coupons, ER probes, LPR) data integration",
    "Kuwait City operator-specific flow-down pre-loaded for Kuwait Oil Company (KOC), KNPC, KIPIC (Al-Zour)",
    "Kuwait City regulator compliance dashboard for Public Authority for Industry (PAI), Kuwait EPA, Kuwait Fire Force",
    "Oilfield services contractor-specific report templates and acceptance criteria for oilfield services & wellsite inspection workflows",
    "Bilingual (English + Kuwait-relevant local language) document handling for Kuwait City authority submission"
  ],
  "operators": [
    "Kuwait Oil Company (KOC)",
    "KNPC",
    "KIPIC (Al-Zour)",
    "PIC",
    "Equate",
    "KAFCO",
    "GPCA member firms",
    "KGOC"
  ],
  "regulators": [
    "Public Authority for Industry (PAI)",
    "Kuwait EPA",
    "Kuwait Fire Force",
    "KPC vendor approval",
    "Ministry of Oil",
    "KPC Vendor Quality Requirements (KPC-VQR)",
    "KOC standards",
    "KNPC SES"
  ],
  "painPoints": [
  ],
  "useCases": [
  ],
  "faqs": [
    [
      "Yes. The procedure-library module also holds whichever operator-specific quality clauses your contracts require — such as those from Kuwait Oil Company (KOC), KNPC, KIPIC (Al-Zour), PIC — once your team uploads them. The module is aligned to API 510 / 570 / 653 / 571 corrosion and integrity methodology. Configuration is done — your oilfield services contractor team is productive on day one, not after six months of customisation."
    ],
    [
      "The compliance dashboard maps to Public Authority for Industry (PAI), Kuwait EPA, Kuwait Fire Force, KPC vendor approval, Ministry of Oil. Statutory inspection due-date reminders, document-format generation, and audit-ready evidence-pack assembly are all built around these authorities. For oilfield services contractors, that means KPC, KOC, KNPC and KIPIC each maintain separate but overlapping vendor lists."
    ],
    [
      "Can oilfield services contractors in Kuwait City integrate with operator-specific portals such as Kuwait Oil Company (KOC)?",
    ],
    [
      "What languages and currencies does the Kuwait City deployment support?",
      "English is primary across the platform; Kuwait-relevant languages (Arabic in the Gulf, Bahasa Indonesia, Hindi / Marathi / Telugu in India, Mandarin in China and Singapore, Portuguese / Spanish in the Americas, French in West Africa and Canada) are supported for customer-facing documents and field-app translations. Invoicing supports USD, EUR, GBP, AED, SAR, INR, SGD, AUD, CAD, IDR, MYR, QAR, NGN, BRL, MXN, KWD, OMR — full multi-currency with VAT / GST as applicable for Kuwait."
    ],
    [
    ]
  ]
} as ErpTripleCrossProps;
export default function ErpTriple_corrosion_tracking_oilfield_services_kuwait() { return <ErpTripleCrossPage {...data} />; }
