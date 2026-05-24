import ErpTripleCrossPage, { ErpTripleCrossProps } from '@/components/ErpTripleCrossPage';
const data: ErpTripleCrossProps = {
  "moduleSlug": "inventory-management",
  "industrySlug": "ndt-inspection-companies",
  "citySlug": "chennai",
  "moduleName": "Inventory & Consumables Management",
  "industryName": "NDT Inspection Companies",
  "cityName": "Chennai",
  "countryName": "India",
  "isoCountry": "IN",
  "lat": 13.0827,
  "lng": 80.2707,
  "title": "Inventory & Consumables Management Software for NDT Inspection Companies in Chennai",
  "desc": "Inventory ERP module for NDT inspection companies in Chennai — NDE consumable lifecycle, automotive Q/A approved-consumable lists, CPCL Manali/Kalpakkam nuclear supply chain consumable management. Demo: info@atlantisndt.com.",
  "introPara1": "NDT inspection companies in Chennai manage consumable inventories across automotive supplier-Q/A (Hyundai, BMW, Renault-Nissan, Daimler), refinery turnaround at CPCL Manali, nuclear-grade supplier work for BARC Kalpakkam, and aerospace component inspection. Each customer segment maintains distinct approved-consumable lists (AVLs) with different shelf-life and lot-certification requirements.",
  "introPara2": "Chennai NDT contractors must track consumable lot traceability per ASME Section V Article 6, automotive-OEM Q/A requirements (PPAP, AS9102 for aerospace, BARC-CONS for nuclear), and AERB radiography source register per SC/IR-1. Atlantis NDT ERP Inventory is purpose-configured for the multi-sector Chennai market.",
  "introPara3": "Configured for Chennai, the module pre-loads operator-specific consumable approval lists from CPCL Manali, Hyundai, BMW, BARC Kalpakkam, compliance templates against API 510/570/653, AWS D1.1 (structural automotive), BARC nuclear consumable requirements, bilingual Tamil / English documentation, and the audit frameworks that PESO, BARC, AERB, DGCA and TNPCB actually use.",
  "features": [
    "Inventory configured for Chennai's auto / refining / nuclear / aerospace consumable market",
    "NDE consumable lifecycle (UT couplant, PT chemistry, MT particles, RT film)",
    "Automotive OEM Q/A approved-consumable lists (Hyundai, BMW, Renault-Nissan, Daimler)",
    "Nuclear-grade BARC consumable certification for Kalpakkam supplier work",
    "AERB SC/IR-1 radiography source register",
    "Shelf-life enforcement per ASME Section V Article 6 / ASTM E165 / ASTM E709",
    "Vendor-managed inventory (VMI) integration with major NDE suppliers",
    "Multi-method scope (UT, RT, MT, PT, ET, VT, PAUT, TOFD) consumables",
    "ASNT / ISO 9712 / ISNT consumable certification tracking",
    "Chennai regulator compliance dashboard (PESO, BARC, AERB, DGCA, TNPCB)",
    "Bilingual Tamil / English document handling",
    "Multi-currency invoicing in INR and USD"
  ],
  "operators": ["CPCL Manali refinery", "ONGC eastern offshore", "Hyundai Sriperumbudur", "BMW Chennai", "Renault-Nissan", "Daimler India CV", "BARC Kalpakkam", "Royal Enfield Chennai"],
  "regulators": ["PESO", "BARC", "AERB", "DGCA", "Tamil Nadu Pollution Control Board (TNPCB)", "ISNT", "IBR", "CSWIP / PCN"],
  "painPoints": [
    "Inventory for Chennai NDT companies tracked in spreadsheets — automotive Q/A approved-consumable lists managed separately",
    "Nuclear-grade BARC consumable certification for Kalpakkam supplier work done manually",
    "AERB radiography source register reconciliation done manually — audit findings repeat each cycle",
    "Customer-format consumable certificates require manual reformatting on every submission"
  ],
  "useCases": [
    "A Chennai NDT inspection company deploys Inventory against CPCL Manali and Hyundai Sriperumbudur contracts. Eliminated consumable shelf-life expiry scrap from 18% to under 4%.",
    "A Chennai NDT contractor uses Inventory to track BARC-CONS approved consumables for Kalpakkam supplier work — eliminated nuclear-grade consumable mismatch incidents.",
    "A growing Chennai NDT inspection company consolidates Inventory across automotive, refining and nuclear projects. Customer-specific consumable approval verification automated.",
    "An audit-driven Chennai NDT inspection company uses Inventory to pass PESO, AERB, BARC, DGCA cycle audits with zero findings."
  ],
  "faqs": [
    ["Is Inventory configured for NDT inspection companies operating in Chennai?", "Yes. The Inventory module is pre-loaded with automotive Q/A approved-consumable lists (Hyundai, BMW, Renault-Nissan, Daimler), BARC nuclear consumable certification for Kalpakkam supplier work, and AERB radiography source register requirements."],
    ["Which Chennai regulators does Inventory align with?", "The compliance dashboard maps to PESO, BARC, AERB, DGCA, Tamil Nadu Pollution Control Board (TNPCB). The AERB Chennai office specifically covers Kalpakkam nuclear consumable authorizations."],
    ["Can Chennai NDT inspection companies integrate Inventory with automotive OEM portals?", "Yes. The platform supports vendor-portal flow with Hyundai, BMW India, Renault-Nissan, Daimler India and the major automotive supplier-Q/A approved-consumable systems."],
    ["What does Inventory cost for an NDT inspection company in Chennai?", "Inventory is bundled inside the standard $18,000 / year (approximately INR 15 lakh) Atlantis NDT ERP subscription. Invoicing is supported in INR or USD with daily FX update."],
    ["Does Inventory support nuclear-grade BARC consumable certification?", "Yes. BARC-CONS approved consumable lists for Kalpakkam supplier work — covering radiography film, calibration blocks, source consumables — are pre-loaded with chain-of-custody traceability."]
  ]
} as ErpTripleCrossProps;
export default function ErpTriple_inventory_management_ndt_inspection_companies_chennai() { return <ErpTripleCrossPage {...data} />; }
