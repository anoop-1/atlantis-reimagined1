import ErpTripleCrossPage, { ErpTripleCrossProps } from '@/components/ErpTripleCrossPage';
const data: ErpTripleCrossProps = {
  "moduleSlug": "inventory-management",
  "industrySlug": "ndt-inspection-companies",
  "citySlug": "hyderabad",
  "moduleName": "Inventory & Consumables Management",
  "industryName": "NDT Inspection Companies",
  "cityName": "Hyderabad",
  "countryName": "India",
  "isoCountry": "IN",
  "lat": 17.385,
  "lng": 78.4867,
  "title": "Inventory & Consumables Management Software for NDT Inspection Companies in Hyderabad",
  "desc": "Inventory ERP module for NDT inspection companies in Hyderabad — NDE consumable lifecycle, BHEL/HPCL Visakh/BDL operator flow-down, AERB radiography source register. Demo: info@atlantisndt.com.",
  "introPara1": "NDT inspection companies in Hyderabad manage consumable inventories across multi-sector deployments — UT couplant, PT chemistry (Magnaflux, Met-L-Chek shelf-life), MT wet/dry particles, radiography film (Kodak Industrex, Agfa Structurix), calibration blocks, source-pit consumables. Multi-sector customer mix (BHEL heavy electrical, HPCL Visakh refining, BDL defence, HAL aerospace, ECIL nuclear, Genome Valley pharma) demands different consumable streams.",
  "introPara2": "Hyderabad NDT contractors must track consumable lot traceability per ASME Section V Article 6 / ASTM E165 / ASTM E709, ASNT and ISNT consumable certification, AERB radiography source register per SC/IR-1, and customer-specific approved-consumable lists (BHEL, HPCL, BDL, HAL each maintain their own AVL). Atlantis NDT ERP Inventory is purpose-configured for the multi-customer Hyderabad market.",
  "introPara3": "Configured for Hyderabad, the module pre-loads operator-specific consumable approval lists from BHEL Ramachandrapuram, HPCL Visakh, BDL, HAL, ECIL, compliance templates against IBR / IS 2825 / AERB SC/IR-1 / NACE MR0175 (for refining), bilingual Telugu / English documentation, and the audit frameworks that PESO, BARC, AERB, TSPCB and CDSCO (for pharma) actually use.",
  "features": [
    "Inventory configured for Hyderabad's multi-sector inspection consumable market",
    "NDE consumable lifecycle (UT couplant, PT chemistry, MT particles, RT film)",
    "AERB SC/IR-1 radiography source register",
    "Customer-specific approved-consumable lists (BHEL, HPCL, BDL, HAL, ECIL)",
    "Shelf-life enforcement per ASME Section V Article 6 / ASTM E165 / ASTM E709",
    "Vendor-managed inventory (VMI) integration with major NDE suppliers",
    "Multi-method scope (UT, RT, MT, PT, ET, VT, PAUT, TOFD, LRUT, ECA) consumables",
    "ASNT / ISO 9712 / ISNT consumable certification tracking",
    "Hyderabad regulator compliance dashboard (PESO, BARC, AERB, DGCA, TSPCB, CDSCO)",
    "Bilingual Telugu / English / Hindi document handling",
    "Multi-currency invoicing in INR and USD",
    "Mobile app for India-based technicians (offline capable)"
  ],
  "operators": ["BHEL Ramachandrapuram", "HPCL Visakh refinery", "Bharat Dynamics Ltd (BDL)", "HAL Hyderabad", "Electronics Corporation of India (ECIL)", "ISRO supplier ecosystem", "DRDO suppliers (DRDL)", "Dr Reddy's / Aurobindo / Divi's Laboratories"],
  "regulators": ["PESO", "BARC", "AERB", "DGCA", "Telangana State Pollution Control Board (TSPCB)", "CDSCO", "IBR", "ISNT"],
  "painPoints": [
    "Inventory for Hyderabad NDT inspection companies tracked in spreadsheets — consumable shelf-life expiry missed",
    "Operator-specific approved-consumable lists (BHEL, HPCL, BDL, HAL) maintained in separate Excel files",
    "AERB radiography source register reconciliation done manually — audit findings repeat each cycle",
    "Customer-format consumable certificates require manual reformatting on every submission"
  ],
  "useCases": [
    "A Hyderabad NDT inspection company deploys Inventory against BHEL Ramachandrapuram and HPCL Visakh contracts. Eliminated consumable shelf-life expiry scrap from 18% to under 4%.",
    "A Hyderabad NDT contractor uses Inventory to track AERB radiography source register and ALARA dose records — cleared AERB surveillance with zero findings.",
    "A growing Hyderabad NDT inspection company consolidates Inventory across multi-customer projects. Customer-specific consumable approval verification automated.",
    "An audit-driven Hyderabad NDT inspection company uses Inventory to pass PESO, AERB, BARC, DGCA cycle audits with zero findings."
  ],
  "faqs": [
    ["Is Inventory configured for NDT inspection companies operating in Hyderabad?", "Yes. The Inventory module is pre-loaded with consumable certification requirements per ASNT / ISO 9712 / ISNT, customer-specific approved-consumable lists from BHEL, HPCL, BDL, HAL, and AERB radiography source register requirements."],
    ["Which Hyderabad regulators does Inventory align with?", "The compliance dashboard maps to PESO, BARC, AERB, DGCA, Telangana State Pollution Control Board (TSPCB), CDSCO. The unusually wide industrial mix in Hyderabad is reflected in cross-sector consumable templates."],
    ["Can Hyderabad NDT inspection companies integrate Inventory with vendor-managed inventory (VMI)?", "Yes. The platform supports VMI integration with major NDE distributors (Magnaflux, Met-L-Chek, Olympus, Sonatech), enabling replenishment-before-stockout for field-NDT consumables."],
    ["What does Inventory cost for an NDT inspection company in Hyderabad?", "Inventory is bundled inside the standard $18,000 / year (approximately INR 15 lakh) Atlantis NDT ERP subscription. Invoicing is supported in INR or USD with daily FX update."],
    ["Does Inventory enforce ASME / ASTM shelf-life rules?", "Yes. PT penetrant 24-month, MT wet particles 36-month, RT film batch shelf-life, calibration block reflectivity 36-month — all enforced per ASME Section V Article 6 / ASTM E165 / ASTM E709."]
  ]
} as ErpTripleCrossProps;
export default function ErpTriple_inventory_management_ndt_inspection_companies_hyderabad() { return <ErpTripleCrossPage {...data} />; }
