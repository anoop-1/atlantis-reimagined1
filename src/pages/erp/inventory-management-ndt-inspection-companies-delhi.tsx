import ErpTripleCrossPage, { ErpTripleCrossProps } from '@/components/ErpTripleCrossPage';
const data: ErpTripleCrossProps = {
  "moduleSlug": "inventory-management",
  "industrySlug": "ndt-inspection-companies",
  "citySlug": "delhi",
  "moduleName": "Inventory & Consumables Management",
  "industryName": "NDT Inspection Companies",
  "cityName": "Delhi",
  "countryName": "India",
  "isoCountry": "IN",
  "lat": 28.6139,
  "lng": 77.209,
  "title": "Inventory & Consumables Management Software for NDT Inspection Companies in Delhi",
  "desc": "Inventory ERP module for NDT inspection companies in Delhi-NCR — NDE consumable lifecycle, IOCL/EIL approved-consumable lists, AERB radiography source register, multi-state mobilization. Demo: info@atlantisndt.com.",
  "introPara1": "NDT inspection companies in Delhi-NCR manage consumable inventories across IOCL Mathura and Panipat refinery turnarounds, EIL-led EPC projects nationwide, BHEL Haridwar power-equipment manufacturing, and NCR power-generation belt. Multi-state mobilization (UP, Haryana, Uttarakhand, NCR) demands rigorous consumable lot management to avoid mobilization aborts caused by missing or expired consumables.",
  "introPara2": "Delhi NDT contractors must track consumable lot traceability per ASME Section V Article 6, IOCL / EIL / BHEL approved-consumable lists, AERB radiography source register per SC/IR-1, and BIS pressure-vessel code-conformance consumables. Atlantis NDT ERP Inventory is purpose-configured for the multi-customer Delhi-NCR market.",
  "introPara3": "Configured for Delhi, the module pre-loads operator-specific consumable approval lists from IOCL Mathura, IOCL Panipat, GAIL, EIL, BHEL Haridwar, NTPC, compliance templates against API 510/570/653, IBR / IS 2825, OISD-141/129, AERB SC/IR-1, bilingual Hindi / English documentation, and the audit frameworks that PESO, OISD, AERB, BIS, CPCB and DPCC actually use.",
  "features": [
    "Inventory configured for Delhi-NCR's refining / midstream / EPC / power-equipment consumable market",
    "NDE consumable lifecycle (UT couplant, PT chemistry, MT particles, RT film)",
    "Operator-specific approved-consumable lists (IOCL, EIL, BHEL, GAIL, ONGC)",
    "AERB SC/IR-1 radiography source register",
    "Multi-state mobilization roster automation for consumables (UP, Haryana, Uttarakhand, NCR)",
    "Shelf-life enforcement per ASME Section V Article 6 / ASTM E165 / ASTM E709",
    "Vendor-managed inventory (VMI) integration with major NDE suppliers",
    "Multi-method scope (UT, RT, MT, PT, ET, VT, PAUT, TOFD) consumables",
    "ASNT / ISO 9712 / ISNT consumable certification tracking",
    "Delhi regulator compliance dashboard (PESO, OISD, AERB, BIS, CPCB, DPCC)",
    "Bilingual Hindi / English document handling",
    "Multi-currency invoicing in INR and USD"
  ],
  "operators": ["IOCL Mathura Refinery", "IOCL Panipat Refinery", "GAIL India (Vijaipur)", "ONGC Delhi HQ", "Engineers India Limited (EIL)", "BHEL Haridwar", "NTPC Dadri / Badarpur", "Bharat Heavy Electricals (NCR base)"],
  "regulators": ["PESO", "OISD", "AERB", "BIS", "Central Pollution Control Board (CPCB)", "Delhi Pollution Control Committee (DPCC)", "IBR", "Ministry of Petroleum and Natural Gas"],
  "painPoints": [
    "Inventory for Delhi-NCR NDT inspection companies tracked in spreadsheets — IOCL and EIL approved-consumable lists maintained separately",
    "AERB radiography source register reconciliation done manually — audit findings repeat each cycle",
    "Multi-state mobilization paperwork for consumables eats days of pre-deployment time",
    "EIL contractor-portal evidence-pack reformatting eats project margin"
  ],
  "useCases": [
    "A mid-size Delhi NDT inspection company deploys Inventory against IOCL Mathura and Panipat refinery contracts. Eliminated consumable shelf-life expiry scrap from 18% to under 4%.",
    "A Delhi NDT contractor integrates Inventory with EIL contractor-portal flow-down. Specification revisions automatically flag affected consumable procurement procedures.",
    "A growing Delhi-NCR NDT inspection company consolidates Inventory across IOCL, GAIL, EIL, BHEL projects. Customer-specific consumable approval verification automated.",
    "An audit-driven Delhi NDT inspection company uses Inventory to pass PESO, OISD, AERB cycle audits with zero findings."
  ],
  "faqs": [
    ["Is Inventory configured for NDT inspection companies operating in Delhi-NCR?", "Yes. The Inventory module is pre-loaded with IOCL, EIL, BHEL, GAIL approved-consumable lists, AERB radiography source register requirements, and PESO statutory consumable certificate requirements."],
    ["Which Delhi regulators does Inventory align with?", "The compliance dashboard maps to PESO, OISD, AERB, BIS, CPCB, DPCC. Statutory consumable certificate generation, shelf-life enforcement, and audit-ready evidence-pack assembly are built around these authorities."],
    ["Can Delhi NDT inspection companies integrate Inventory with EIL portal?", "Yes. The platform supports vendor-portal flow with IOCL, GAIL, ONGC, Engineers India Limited (EIL), BHEL Haridwar, NTPC. Operator-specific consumable approvals are imported as controlled documents."],
    ["What does Inventory cost for an NDT inspection company in Delhi?", "Inventory is bundled inside the standard affordable, accessible (contact us; approximately INR 15 lakh) Atlantis NDT ERP subscription. Invoicing is supported in INR or USD with daily FX update."],
    ["Does Inventory support multi-state mobilization consumable tracking?", "Yes. Multi-state mobilization paperwork for consumables (UP, Haryana, Uttarakhand, NCR) is automated, including state-specific GST handling, e-way bill generation, and consumable-batch chain-of-custody preservation across state borders."]
  ]
} as ErpTripleCrossProps;
export default function ErpTriple_inventory_management_ndt_inspection_companies_delhi() { return <ErpTripleCrossPage {...data} />; }
