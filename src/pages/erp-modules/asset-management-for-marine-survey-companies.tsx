import ErpModuleIndustryPage from '@/components/ErpModuleIndustryPage';
const data = {
  "moduleSlug": "asset-management",
  "moduleName": "Asset Integrity & Equipment Register",
  "industrySlug": "marine-survey-companies",
  "industryName": "Marine Survey & Offshore Inspection",
  "title": "Asset Integrity & Equipment Register for Marine Survey & Offshore Inspection",
  "desc": "Asset Integrity & Equipment Register for Marine Survey & Offshore Inspection — purpose-configured module from Atlantis NDT ERP. IMO MARPOL / SOLAS / STCW, IACS UR / common rules, DNV / ABS / LR / BV / ClassNK / RINA / KR class rules. Demo: info@atlantisndt.com.",
  "intro": "Inspection programs need an authoritative asset register. The asset register is the spine that connects equipment, inspection history, drawings, P&IDs, isometrics, corrosion mechanisms, RBI assessments, fitness-for-service calculations, and integrity operating windows.\n\nFor marine survey & offshore inspection, the asset integrity & equipment register module is configured around the codes, regulators, and operator-specific requirements you face every day: IMO MARPOL / SOLAS / STCW, IACS UR / common rules, DNV / ABS / LR / BV / ClassNK / RINA / KR class rules, IMCA D-018 IRM (offshore IRM), IMCA C-002 (diving inspection). Pre-built workflows, report templates, and qualification matrices match the operator-specific quality clauses from Shell — upstream / marine, BP — marine, TotalEnergies — FPSO operations, Equinor — Norwegian shelf so your team is productive on day one — not after six months of configuration.",
  "industryFeatures": [
    "Hierarchical asset structure: site → unit → system → equipment → component → TML",
    "Equipment types: pressure vessel, piping circuit, storage tank, heat exchanger, fired heater, pump, compressor, exchanger tube bundle, valve, pipeline segment, structural member",
    "Damage mechanism library per API 571 (172 mechanisms): identification, screening, susceptibility scoring",
    "Integrity Operating Window (IOW) tracking with alarm levels (information / standard / critical)",
    "TML (thickness measurement location) database with sketch, photograph, GPS, and historical readings",
    "Corrosion rate computation (short / long term) per API 570 / API 653 methodology",
    "Tailored for marine survey & offshore inspection — pre-configured templates, terminology, and reports",
    "Integrates with Shell — upstream / marine, BP — marine, TotalEnergies — FPSO operations vendor-portal flow-down requirements"
  ],
  "industryUseCases": [
    "A 25-person marine survey & offshore inspection runs asset integrity & equipment register as a standalone module — replacing 3 spreadsheets and 2 disconnected SaaS tools — and reports a 60–80% reduction in administrative time within 90 days.",
    "A multinational marine survey & offshore inspection deploys asset integrity & equipment register across 12 sites under a global rollout. Region-specific data residency and language localization support GDPR, India DPDP Act, and Saudi NDMO requirements.",
    "A growing marine survey & offshore inspection integrates asset integrity & equipment register with their existing ERP (NetSuite, QuickBooks, or SAP) and CMMS — eliminating duplicate data entry and reducing customer-facing report turnaround from 5 days to <24 hours.",
    "An audit-driven marine survey & offshore inspection uses asset integrity & equipment register to pass ISO 9001 / ISO 17025 / AS9100 / customer-specific quality audits with zero findings — evidence packages assembled in 30 seconds vs. 80+ hours of manual prep."
  ],
  "industryCodes": [
    "IMO MARPOL / SOLAS / STCW",
    "IACS UR / common rules",
    "DNV / ABS / LR / BV / ClassNK / RINA / KR class rules",
    "IMCA D-018 IRM (offshore IRM)",
    "IMCA C-002 (diving inspection)",
    "API RP 2A (offshore platforms)",
    "API RP 17B (subsea)",
    "ISO 19901-9 (offshore reliability)"
  ],
  "industryOperators": [
    "Shell — upstream / marine",
    "BP — marine",
    "TotalEnergies — FPSO operations",
    "Equinor — Norwegian shelf",
    "MODEC — FPSO operator",
    "SBM Offshore — FPSO",
    "Yinson — FPSO",
    "Bumi Armada — FPSO"
  ],
  "industryPain": [
    "IACS class-society reporting in Word / Excel — manual reformatting per society",
    "ROV inspection footage management — terabytes of video without indexing",
    "IMCA D-018 inspection-record format compliance — paper records in field",
    "FPSO surveyor team rotation — qualifications expire mid-tour"
  ],
  "faqs": [
    [
      "Does asset integrity & equipment register work specifically for marine survey & offshore inspection?",
      "Yes. The module is configured for marine survey & offshore inspection workflow with pre-built templates aligned to IMO MARPOL / SOLAS / STCW, IACS UR / common rules, DNV / ABS / LR / BV / ClassNK / RINA / KR class rules, IMCA D-018 IRM (offshore IRM). Operator-specific quality clauses for Shell — upstream / marine, BP — marine, TotalEnergies — FPSO operations are pre-loaded so the system is productive on day one without months of custom configuration."
    ],
    [
      "How does the system integrate with our existing marine survey & offshore inspection tools?",
      "Standard integration via REST API with major marine survey & offshore inspection systems. Atlantis NDT ERP can run as the system of record for asset integrity & equipment register while flowing relevant data to your accounting (QuickBooks / Xero / NetSuite / SAP / Dynamics), CMMS (Maximo / SAP PM / Meridium / AspenTech APM), and customer-portal systems. Bi-directional sync keeps everything aligned."
    ],
    [
      "Can it scale from a small marine survey & offshore inspection to a global multinational?",
      "Yes. Atlantis NDT ERP is delivered as multi-tenant SaaS — a 5-person marine survey & offshore inspection pays a small monthly subscription with the same feature set as a 500-person global operation. Modules can be turned on individually or as a bundle; only pay for what you use."
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
export default function ErpCross_asset_management_for_marine_survey_companies() { return <ErpModuleIndustryPage {...data} />; }
