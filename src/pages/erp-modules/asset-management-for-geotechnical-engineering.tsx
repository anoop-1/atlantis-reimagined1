import ErpModuleIndustryPage from '@/components/ErpModuleIndustryPage';
const data = {
  "moduleSlug": "asset-management",
  "moduleName": "Asset Integrity & Equipment Register",
  "industrySlug": "geotechnical-engineering",
  "industryName": "Geotechnical Engineering Firms",
  "title": "Asset Integrity & Equipment Register for Geotechnical Engineering Firms",
  "desc": "Asset Integrity & Equipment Register for Geotechnical Engineering Firms — purpose-configured module from Atlantis NDT ERP. ASTM D420 series (soil sampling), ASTM D2487 (USCS classification), ASTM D2216 (moisture). Demo: info@atlantisndt.com.",
  "intro": "Inspection programs need an authoritative asset register. The asset register is the spine that connects equipment, inspection history, drawings, P&IDs, isometrics, corrosion mechanisms, RBI assessments, fitness-for-service calculations, and integrity operating windows.\n\nFor geotechnical engineering firms, the asset integrity & equipment register module is configured around the codes, regulators, and operator-specific requirements you face every day: ASTM D420 series (soil sampling), ASTM D2487 (USCS classification), ASTM D2216 (moisture), ASTM D4318 (Atterberg limits), ASTM D2435 (consolidation). Pre-built workflows, report templates, and qualification matrices match the operator-specific quality clauses from Arup — engineering, Mott MacDonald — engineering, WSP — engineering, Atkins — engineering so your team is productive on day one — not after six months of configuration.",
  "industryFeatures": [
    "Hierarchical asset structure: site → unit → system → equipment → component → TML",
    "Equipment types: pressure vessel, piping circuit, storage tank, heat exchanger, fired heater, pump, compressor, exchanger tube bundle, valve, pipeline segment, structural member",
    "Damage mechanism library per API 571 (172 mechanisms): identification, screening, susceptibility scoring",
    "Integrity Operating Window (IOW) tracking with alarm levels (information / standard / critical)",
    "TML (thickness measurement location) database with sketch, photograph, GPS, and historical readings",
    "Corrosion rate computation (short / long term) per API 570 / API 653 methodology",
    "Tailored for geotechnical engineering firms — pre-configured templates, terminology, and reports",
    "Integrates with Arup — engineering, Mott MacDonald — engineering, WSP — engineering vendor-portal flow-down requirements"
  ],
  "industryUseCases": [
    "A 25-person geotechnical engineering firm runs asset integrity & equipment register as a standalone module — replacing 3 spreadsheets and 2 disconnected SaaS tools — and reports a 60–80% reduction in administrative time within 90 days.",
    "A multinational geotechnical engineering firms deploys asset integrity & equipment register across 12 sites under a global rollout. Region-specific data residency and language localization support GDPR, India DPDP Act, and Saudi NDMO requirements.",
    "A growing geotechnical engineering firm integrates asset integrity & equipment register with their existing ERP (NetSuite, QuickBooks, or SAP) and CMMS — eliminating duplicate data entry and reducing customer-facing report turnaround from 5 days to <24 hours.",
    "An audit-driven geotechnical engineering firms uses asset integrity & equipment register to pass ISO 9001 / ISO 17025 / AS9100 / customer-specific quality audits with zero findings — evidence packages assembled in 30 seconds vs. 80+ hours of manual prep."
  ],
  "industryCodes": [
    "ASTM D420 series (soil sampling)",
    "ASTM D2487 (USCS classification)",
    "ASTM D2216 (moisture)",
    "ASTM D4318 (Atterberg limits)",
    "ASTM D2435 (consolidation)",
    "ASTM D3080 (direct shear)",
    "EN ISO 14688 / 14689 (soil / rock classification)",
    "EN ISO 22282 (geotechnical investigation)"
  ],
  "industryOperators": [
    "Arup — engineering",
    "Mott MacDonald — engineering",
    "WSP — engineering",
    "Atkins — engineering",
    "AECOM — civil",
    "Fugro — geotechnical",
    "Geosyntec — geotechnical",
    "Stantec — engineering"
  ],
  "industryPain": [
    "Borehole logs in Word / Excel — re-typed multiple times across project",
    "CPT raw data files in vendor formats — manual conversion to AGS format",
    "Lab test results in paper notebooks — re-entered into project database",
    "Site investigation campaign coordination across drillers, lab, engineers — informal"
  ],
  "faqs": [
    [
      "Does asset integrity & equipment register work specifically for geotechnical engineering firms?",
      "Yes. The module is configured for geotechnical engineering firms workflow with pre-built templates aligned to ASTM D420 series (soil sampling), ASTM D2487 (USCS classification), ASTM D2216 (moisture), ASTM D4318 (Atterberg limits). Operator-specific quality clauses for Arup — engineering, Mott MacDonald — engineering, WSP — engineering are pre-loaded so the system is productive on day one without months of custom configuration."
    ],
    [
      "How does the system integrate with our existing geotechnical engineering firms tools?",
      "Standard integration via REST API with major geotechnical engineering firms systems. Atlantis NDT ERP can run as the system of record for asset integrity & equipment register while flowing relevant data to your accounting (QuickBooks / Xero / NetSuite / SAP / Dynamics), CMMS (Maximo / SAP PM / Meridium / AspenTech APM), and customer-portal systems. Bi-directional sync keeps everything aligned."
    ],
    [
      "Can it scale from a small geotechnical engineering firms to a global multinational?",
      "Yes. Atlantis NDT ERP is delivered as multi-tenant SaaS — a 5-person geotechnical engineering firm pays a small monthly subscription with the same feature set as a 500-person global operation. Modules can be turned on individually or as a bundle; only pay for what you use."
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
export default function ErpCross_asset_management_for_geotechnical_engineering() { return <ErpModuleIndustryPage {...data} />; }
