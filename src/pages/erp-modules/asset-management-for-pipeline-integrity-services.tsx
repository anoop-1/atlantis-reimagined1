import ErpModuleIndustryPage from '@/components/ErpModuleIndustryPage';
const data = {
  "moduleSlug": "asset-management",
  "moduleName": "Asset Integrity & Equipment Register",
  "industrySlug": "pipeline-integrity-services",
  "industryName": "Pipeline Integrity & ILI Services",
  "title": "Asset Integrity & Equipment Register for Pipeline Integrity & ILI Services",
  "desc": "Asset Integrity & Equipment Register for Pipeline Integrity & ILI Services — purpose-configured module from Atlantis NDT ERP. API 1163 (ILI qualification), API 1160 (pipeline IMP), ASME B31.4 / B31.8 / B31.8S (pipeline). Demo: info@atlantisndt.com.",
  "intro": "Inspection programs need an authoritative asset register. The asset register is the spine that connects equipment, inspection history, drawings, P&IDs, isometrics, corrosion mechanisms, RBI assessments, fitness-for-service calculations, and integrity operating windows.\n\nFor pipeline integrity & ili services, the asset integrity & equipment register module is configured around the codes, regulators, and operator-specific requirements you face every day: API 1163 (ILI qualification), API 1160 (pipeline IMP), ASME B31.4 / B31.8 / B31.8S (pipeline), API 1104 (welding), DOT PHMSA 49 CFR 192 / 195. Pre-built workflows, report templates, and qualification matrices match the operator-specific quality clauses from Enbridge — North American pipelines, TC Energy / TransCanada, Kinder Morgan — products, Energy Transfer — gathering / transmission so your team is productive on day one — not after six months of configuration.",
  "industryFeatures": [
    "Hierarchical asset structure: site → unit → system → equipment → component → TML",
    "Equipment types: pressure vessel, piping circuit, storage tank, heat exchanger, fired heater, pump, compressor, exchanger tube bundle, valve, pipeline segment, structural member",
    "Damage mechanism library per API 571 (172 mechanisms): identification, screening, susceptibility scoring",
    "Integrity Operating Window (IOW) tracking with alarm levels (information / standard / critical)",
    "TML (thickness measurement location) database with sketch, photograph, GPS, and historical readings",
    "Corrosion rate computation (short / long term) per API 570 / API 653 methodology",
    "Tailored for pipeline integrity & ili services — pre-configured templates, terminology, and reports",
    "Integrates with Enbridge — North American pipelines, TC Energy / TransCanada, Kinder Morgan — products vendor-portal flow-down requirements"
  ],
  "industryUseCases": [
    "A 25-person pipeline integrity & ili service runs asset integrity & equipment register as a standalone module — replacing 3 spreadsheets and 2 disconnected SaaS tools — and reports a 60–80% reduction in administrative time within 90 days.",
    "A multinational pipeline integrity & ili services deploys asset integrity & equipment register across 12 sites under a global rollout. Region-specific data residency and language localization support GDPR, India DPDP Act, and Saudi NDMO requirements.",
    "A growing pipeline integrity & ili service integrates asset integrity & equipment register with their existing ERP (NetSuite, QuickBooks, or SAP) and CMMS — eliminating duplicate data entry and reducing customer-facing report turnaround from 5 days to <24 hours.",
    "An audit-driven pipeline integrity & ili services uses asset integrity & equipment register to pass ISO 9001 / ISO 17025 / AS9100 / customer-specific quality audits with zero findings — evidence packages assembled in 30 seconds vs. 80+ hours of manual prep."
  ],
  "industryCodes": [
    "API 1163 (ILI qualification)",
    "API 1160 (pipeline IMP)",
    "ASME B31.4 / B31.8 / B31.8S (pipeline)",
    "API 1104 (welding)",
    "DOT PHMSA 49 CFR 192 / 195",
    "CSA Z662 (Canadian pipeline)",
    "EN ISO 15589-1 (CP)",
    "NACE SP0102 (ILI)"
  ],
  "industryOperators": [
    "Enbridge — North American pipelines",
    "TC Energy / TransCanada",
    "Kinder Morgan — products",
    "Energy Transfer — gathering / transmission",
    "Williams — gas transmission",
    "Shell Midstream",
    "DCP Midstream",
    "Plains All American"
  ],
  "industryPain": [
    "ILI vendor data delivered as proprietary formats — months to integrate with GIS / asset register",
    "API 1163 vendor qualification audit prep — 80+ hours of evidence assembly",
    "Dig verification data captured on paper in field — re-entered into spreadsheets",
    "API 1160 IMP threat assessment in Excel — versioning chaos, audit findings"
  ],
  "faqs": [
    [
      "Does asset integrity & equipment register work specifically for pipeline integrity & ili services?",
      "Yes. The module is configured for pipeline integrity & ili services workflow with pre-built templates aligned to API 1163 (ILI qualification), API 1160 (pipeline IMP), ASME B31.4 / B31.8 / B31.8S (pipeline), API 1104 (welding). Operator-specific quality clauses for Enbridge — North American pipelines, TC Energy / TransCanada, Kinder Morgan — products are pre-loaded so the system is productive on day one without months of custom configuration."
    ],
    [
      "How does the system integrate with our existing pipeline integrity & ili services tools?",
      "Standard integration via REST API with major pipeline integrity & ili services systems. Atlantis NDT ERP can run as the system of record for asset integrity & equipment register while flowing relevant data to your accounting (QuickBooks / Xero / NetSuite / SAP / Dynamics), CMMS (Maximo / SAP PM / Meridium / AspenTech APM), and customer-portal systems. Bi-directional sync keeps everything aligned."
    ],
    [
      "Can it scale from a small pipeline integrity & ili services to a global multinational?",
      "Yes. Atlantis NDT ERP is delivered as multi-tenant SaaS — a 5-person pipeline integrity & ili service pays a small monthly subscription with the same feature set as a 500-person global operation. Modules can be turned on individually or as a bundle; only pay for what you use."
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
export default function ErpCross_asset_management_for_pipeline_integrity_services() { return <ErpModuleIndustryPage {...data} />; }
