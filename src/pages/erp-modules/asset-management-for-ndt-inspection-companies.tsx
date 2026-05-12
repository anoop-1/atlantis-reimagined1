import ErpModuleIndustryPage from '@/components/ErpModuleIndustryPage';
const data = {
  "moduleSlug": "asset-management",
  "moduleName": "Asset Integrity & Equipment Register",
  "industrySlug": "ndt-inspection-companies",
  "industryName": "NDT Inspection Companies",
  "title": "Asset Integrity & Equipment Register for NDT Inspection Companies",
  "desc": "Asset Integrity & Equipment Register for NDT Inspection Companies — purpose-configured module from Atlantis NDT ERP. ASNT SNT-TC-1A / CP-189 / ACCP, ISO 9712:2021, PCN GEN. Demo: info@atlantisndt.com.",
  "intro": "Inspection programs need an authoritative asset register. The asset register is the spine that connects equipment, inspection history, drawings, P&IDs, isometrics, corrosion mechanisms, RBI assessments, fitness-for-service calculations, and integrity operating windows.\n\nFor ndt inspection companies, the asset integrity & equipment register module is configured around the codes, regulators, and operator-specific requirements you face every day: ASNT SNT-TC-1A / CP-189 / ACCP, ISO 9712:2021, PCN GEN, CSWIP 3.1 / 3.2 / 3.3, AWS QC1. Pre-built workflows, report templates, and qualification matrices match the operator-specific quality clauses from Saudi Aramco — SAEP-1142, ADNOC — ACS-01, QatarEnergy — NFPS, Shell — DEP so your team is productive on day one — not after six months of configuration.",
  "industryFeatures": [
    "Hierarchical asset structure: site → unit → system → equipment → component → TML",
    "Equipment types: pressure vessel, piping circuit, storage tank, heat exchanger, fired heater, pump, compressor, exchanger tube bundle, valve, pipeline segment, structural member",
    "Damage mechanism library per API 571 (172 mechanisms): identification, screening, susceptibility scoring",
    "Integrity Operating Window (IOW) tracking with alarm levels (information / standard / critical)",
    "TML (thickness measurement location) database with sketch, photograph, GPS, and historical readings",
    "Corrosion rate computation (short / long term) per API 570 / API 653 methodology",
    "Tailored for ndt inspection companies — pre-configured templates, terminology, and reports",
    "Integrates with Saudi Aramco — SAEP-1142, ADNOC — ACS-01, QatarEnergy — NFPS vendor-portal flow-down requirements"
  ],
  "industryUseCases": [
    "A 25-person ndt inspection company runs asset integrity & equipment register as a standalone module — replacing 3 spreadsheets and 2 disconnected SaaS tools — and reports a 60–80% reduction in administrative time within 90 days.",
    "A multinational ndt inspection companies deploys asset integrity & equipment register across 12 sites under a global rollout. Region-specific data residency and language localization support GDPR, India DPDP Act, and Saudi NDMO requirements.",
    "A growing ndt inspection company integrates asset integrity & equipment register with their existing ERP (NetSuite, QuickBooks, or SAP) and CMMS — eliminating duplicate data entry and reducing customer-facing report turnaround from 5 days to <24 hours.",
    "An audit-driven ndt inspection companies uses asset integrity & equipment register to pass ISO 9001 / ISO 17025 / AS9100 / customer-specific quality audits with zero findings — evidence packages assembled in 30 seconds vs. 80+ hours of manual prep."
  ],
  "industryCodes": [
    "ASNT SNT-TC-1A / CP-189 / ACCP",
    "ISO 9712:2021",
    "PCN GEN",
    "CSWIP 3.1 / 3.2 / 3.3",
    "AWS QC1",
    "NAS-410 Rev 5",
    "API ICP — 510 / 570 / 580 / 653",
    "ASME Section V"
  ],
  "industryOperators": [
    "Saudi Aramco — SAEP-1142",
    "ADNOC — ACS-01",
    "QatarEnergy — NFPS",
    "Shell — DEP",
    "BP — ETP / GIS",
    "ExxonMobil — GP",
    "Chevron — CC-CHV",
    "TotalEnergies — TGS / GS-PVV"
  ],
  "industryPain": [
    "Spreadsheets tracking 50+ technician certifications across multiple schemes — always 2 months behind reality",
    "Manual API 510 / 570 / 653 inspection interval tracking — frequent missed due dates",
    "Word / Excel report templates per client — hours wasted on formatting",
    "No corrosion-rate trending — engineers re-calculate from scratch each inspection"
  ],
  "faqs": [
    [
      "Does asset integrity & equipment register work specifically for ndt inspection companies?",
      "Yes. The module is configured for ndt inspection companies workflow with pre-built templates aligned to ASNT SNT-TC-1A / CP-189 / ACCP, ISO 9712:2021, PCN GEN, CSWIP 3.1 / 3.2 / 3.3. Operator-specific quality clauses for Saudi Aramco — SAEP-1142, ADNOC — ACS-01, QatarEnergy — NFPS are pre-loaded so the system is productive on day one without months of custom configuration."
    ],
    [
      "How does the system integrate with our existing ndt inspection companies tools?",
      "Standard integration via REST API with major ndt inspection companies systems. Atlantis NDT ERP can run as the system of record for asset integrity & equipment register while flowing relevant data to your accounting (QuickBooks / Xero / NetSuite / SAP / Dynamics), CMMS (Maximo / SAP PM / Meridium / AspenTech APM), and customer-portal systems. Bi-directional sync keeps everything aligned."
    ],
    [
      "Can it scale from a small ndt inspection companies to a global multinational?",
      "Yes. Atlantis NDT ERP is delivered as multi-tenant SaaS — a 5-person ndt inspection company pays a small monthly subscription with the same feature set as a 500-person global operation. Modules can be turned on individually or as a bundle; only pay for what you use."
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
export default function ErpCross_asset_management_for_ndt_inspection_companies() { return <ErpModuleIndustryPage {...data} />; }
