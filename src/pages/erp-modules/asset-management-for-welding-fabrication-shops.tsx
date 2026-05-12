import ErpModuleIndustryPage from '@/components/ErpModuleIndustryPage';
const data = {
  "moduleSlug": "asset-management",
  "moduleName": "Asset Integrity & Equipment Register",
  "industrySlug": "welding-fabrication-shops",
  "industryName": "Welding & Fabrication Shops",
  "title": "Asset Integrity & Equipment Register for Welding & Fabrication Shops",
  "desc": "Asset Integrity & Equipment Register for Welding & Fabrication Shops — purpose-configured module from Atlantis NDT ERP. AWS D1.1 / D1.5 / D1.6 / D14, ASME Section IX, ASME Section VIII Division 1. Demo: info@atlantisndt.com.",
  "intro": "Inspection programs need an authoritative asset register. The asset register is the spine that connects equipment, inspection history, drawings, P&IDs, isometrics, corrosion mechanisms, RBI assessments, fitness-for-service calculations, and integrity operating windows.\n\nFor welding & fabrication shops, the asset integrity & equipment register module is configured around the codes, regulators, and operator-specific requirements you face every day: AWS D1.1 / D1.5 / D1.6 / D14, ASME Section IX, ASME Section VIII Division 1, ASME B31.1 / B31.3, API 1104. Pre-built workflows, report templates, and qualification matrices match the operator-specific quality clauses from Bechtel — civil / structural, Fluor — EPC, TechnipFMC — subsea, McDermott — offshore so your team is productive on day one — not after six months of configuration.",
  "industryFeatures": [
    "Hierarchical asset structure: site → unit → system → equipment → component → TML",
    "Equipment types: pressure vessel, piping circuit, storage tank, heat exchanger, fired heater, pump, compressor, exchanger tube bundle, valve, pipeline segment, structural member",
    "Damage mechanism library per API 571 (172 mechanisms): identification, screening, susceptibility scoring",
    "Integrity Operating Window (IOW) tracking with alarm levels (information / standard / critical)",
    "TML (thickness measurement location) database with sketch, photograph, GPS, and historical readings",
    "Corrosion rate computation (short / long term) per API 570 / API 653 methodology",
    "Tailored for welding & fabrication shops — pre-configured templates, terminology, and reports",
    "Integrates with Bechtel — civil / structural, Fluor — EPC, TechnipFMC — subsea vendor-portal flow-down requirements"
  ],
  "industryUseCases": [
    "A 25-person welding & fabrication shop runs asset integrity & equipment register as a standalone module — replacing 3 spreadsheets and 2 disconnected SaaS tools — and reports a 60–80% reduction in administrative time within 90 days.",
    "A multinational welding & fabrication shops deploys asset integrity & equipment register across 12 sites under a global rollout. Region-specific data residency and language localization support GDPR, India DPDP Act, and Saudi NDMO requirements.",
    "A growing welding & fabrication shop integrates asset integrity & equipment register with their existing ERP (NetSuite, QuickBooks, or SAP) and CMMS — eliminating duplicate data entry and reducing customer-facing report turnaround from 5 days to <24 hours.",
    "An audit-driven welding & fabrication shops uses asset integrity & equipment register to pass ISO 9001 / ISO 17025 / AS9100 / customer-specific quality audits with zero findings — evidence packages assembled in 30 seconds vs. 80+ hours of manual prep."
  ],
  "industryCodes": [
    "AWS D1.1 / D1.5 / D1.6 / D14",
    "ASME Section IX",
    "ASME Section VIII Division 1",
    "ASME B31.1 / B31.3",
    "API 1104",
    "EN ISO 15614 / 9606 / 14732",
    "AS/NZS 3992",
    "ASME 'U' / 'S' / 'PP' / 'R' / 'NR' stamps"
  ],
  "industryOperators": [
    "Bechtel — civil / structural",
    "Fluor — EPC",
    "TechnipFMC — subsea",
    "McDermott — offshore",
    "Saipem — offshore / pipeline",
    "MMR Group — power generation",
    "Wood / Worley — refinery",
    "AECOM — defense / civil"
  ],
  "industryPain": [
    "WPS / PQR library in shared drive — outdated revisions used in field",
    "Welder continuity logged on paper — qualification expires mid-job, work rejected",
    "Weld map maintained in CAD — not linked to inspection or NDE results",
    "ASME 'U' stamp joint-review evidence assembled manually before each audit — 80 hours of work"
  ],
  "faqs": [
    [
      "Does asset integrity & equipment register work specifically for welding & fabrication shops?",
      "Yes. The module is configured for welding & fabrication shops workflow with pre-built templates aligned to AWS D1.1 / D1.5 / D1.6 / D14, ASME Section IX, ASME Section VIII Division 1, ASME B31.1 / B31.3. Operator-specific quality clauses for Bechtel — civil / structural, Fluor — EPC, TechnipFMC — subsea are pre-loaded so the system is productive on day one without months of custom configuration."
    ],
    [
      "How does the system integrate with our existing welding & fabrication shops tools?",
      "Standard integration via REST API with major welding & fabrication shops systems. Atlantis NDT ERP can run as the system of record for asset integrity & equipment register while flowing relevant data to your accounting (QuickBooks / Xero / NetSuite / SAP / Dynamics), CMMS (Maximo / SAP PM / Meridium / AspenTech APM), and customer-portal systems. Bi-directional sync keeps everything aligned."
    ],
    [
      "Can it scale from a small welding & fabrication shops to a global multinational?",
      "Yes. Atlantis NDT ERP is delivered as multi-tenant SaaS — a 5-person welding & fabrication shop pays a small monthly subscription with the same feature set as a 500-person global operation. Modules can be turned on individually or as a bundle; only pay for what you use."
    ],
    [
      "Can it import asset hierarchies from existing CMMS / APM systems?",
      "Yes. Bulk-import templates accept asset, equipment, functional location, and tag hierarchies from Maximo, SAP PM, AspenTech APM, Bentley AssetWise, and Hexagon Meridium. Equipment numbering schemes, parent-child relationships, and equipment-class attribute sets are preserved. Ongoing sync via REST API keeps systems aligned."
    ],
    [
      "Does it cover API 571 damage mechanisms with screening?",
      "Yes. The damage mechanism module includes all 172 mechanisms from API 571 (3rd edition) with material, environment, temperature, and operating-condition screening criteria. The DM screening report identifies which mechanisms apply to each equipment item with severity ranking and recommended inspection methods."
    ]
  ]
};
export default function ErpCross_asset_management_for_welding_fabrication_shops() { return <ErpModuleIndustryPage {...data} />; }
