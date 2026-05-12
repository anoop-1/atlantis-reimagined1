import ErpModuleIndustryPage from '@/components/ErpModuleIndustryPage';
const data = {
  "moduleSlug": "asset-management",
  "moduleName": "Asset Integrity & Equipment Register",
  "industrySlug": "oilfield-services",
  "industryName": "Oilfield Services & Wellsite Inspection",
  "title": "Asset Integrity & Equipment Register for Oilfield Services & Wellsite Inspection",
  "desc": "Asset Integrity & Equipment Register for Oilfield Services & Wellsite Inspection — purpose-configured module from Atlantis NDT ERP. API Spec 4F (drilling derricks), API Spec 6A (wellhead), API Spec 16A (drill-through equipment). Demo: info@atlantisndt.com.",
  "intro": "Inspection programs need an authoritative asset register. The asset register is the spine that connects equipment, inspection history, drawings, P&IDs, isometrics, corrosion mechanisms, RBI assessments, fitness-for-service calculations, and integrity operating windows.\n\nFor oilfield services & wellsite inspection, the asset integrity & equipment register module is configured around the codes, regulators, and operator-specific requirements you face every day: API Spec 4F (drilling derricks), API Spec 6A (wellhead), API Spec 16A (drill-through equipment), API Spec 16D (BOP control), API RP 53 (BOP). Pre-built workflows, report templates, and qualification matrices match the operator-specific quality clauses from ExxonMobil — upstream, Chevron — upstream, Shell — upstream, BP — upstream so your team is productive on day one — not after six months of configuration.",
  "industryFeatures": [
    "Hierarchical asset structure: site → unit → system → equipment → component → TML",
    "Equipment types: pressure vessel, piping circuit, storage tank, heat exchanger, fired heater, pump, compressor, exchanger tube bundle, valve, pipeline segment, structural member",
    "Damage mechanism library per API 571 (172 mechanisms): identification, screening, susceptibility scoring",
    "Integrity Operating Window (IOW) tracking with alarm levels (information / standard / critical)",
    "TML (thickness measurement location) database with sketch, photograph, GPS, and historical readings",
    "Corrosion rate computation (short / long term) per API 570 / API 653 methodology",
    "Tailored for oilfield services & wellsite inspection — pre-configured templates, terminology, and reports",
    "Integrates with ExxonMobil — upstream, Chevron — upstream, Shell — upstream vendor-portal flow-down requirements"
  ],
  "industryUseCases": [
    "A 25-person oilfield services & wellsite inspection runs asset integrity & equipment register as a standalone module — replacing 3 spreadsheets and 2 disconnected SaaS tools — and reports a 60–80% reduction in administrative time within 90 days.",
    "A multinational oilfield services & wellsite inspection deploys asset integrity & equipment register across 12 sites under a global rollout. Region-specific data residency and language localization support GDPR, India DPDP Act, and Saudi NDMO requirements.",
    "A growing oilfield services & wellsite inspection integrates asset integrity & equipment register with their existing ERP (NetSuite, QuickBooks, or SAP) and CMMS — eliminating duplicate data entry and reducing customer-facing report turnaround from 5 days to <24 hours.",
    "An audit-driven oilfield services & wellsite inspection uses asset integrity & equipment register to pass ISO 9001 / ISO 17025 / AS9100 / customer-specific quality audits with zero findings — evidence packages assembled in 30 seconds vs. 80+ hours of manual prep."
  ],
  "industryCodes": [
    "API Spec 4F (drilling derricks)",
    "API Spec 6A (wellhead)",
    "API Spec 16A (drill-through equipment)",
    "API Spec 16D (BOP control)",
    "API RP 53 (BOP)",
    "API RP 5A5 (OCTG inspection)",
    "API RP 5C5 / 5C6 / 5C7 (casing / tubing)",
    "ISO 13501 / 13628 (subsea)"
  ],
  "industryOperators": [
    "ExxonMobil — upstream",
    "Chevron — upstream",
    "Shell — upstream",
    "BP — upstream",
    "ConocoPhillips — upstream",
    "Saudi Aramco upstream",
    "ADNOC Onshore",
    "PEMEX upstream"
  ],
  "industryPain": [
    "Field-ticket capture on paper — billing disputes, days lost in invoicing",
    "Rig / BOP test scheduling on Excel — compliance findings from regulator",
    "Casing / tubing inspection records scattered — no aggregated wellbore data",
    "OCTG inventory (drill collars, casing, tubing) — no real-time location tracking"
  ],
  "faqs": [
    [
      "Does asset integrity & equipment register work specifically for oilfield services & wellsite inspection?",
      "Yes. The module is configured for oilfield services & wellsite inspection workflow with pre-built templates aligned to API Spec 4F (drilling derricks), API Spec 6A (wellhead), API Spec 16A (drill-through equipment), API Spec 16D (BOP control). Operator-specific quality clauses for ExxonMobil — upstream, Chevron — upstream, Shell — upstream are pre-loaded so the system is productive on day one without months of custom configuration."
    ],
    [
      "How does the system integrate with our existing oilfield services & wellsite inspection tools?",
      "Standard integration via REST API with major oilfield services & wellsite inspection systems. Atlantis NDT ERP can run as the system of record for asset integrity & equipment register while flowing relevant data to your accounting (QuickBooks / Xero / NetSuite / SAP / Dynamics), CMMS (Maximo / SAP PM / Meridium / AspenTech APM), and customer-portal systems. Bi-directional sync keeps everything aligned."
    ],
    [
      "Can it scale from a small oilfield services & wellsite inspection to a global multinational?",
      "Yes. Atlantis NDT ERP is delivered as multi-tenant SaaS — a 5-person oilfield services & wellsite inspection pays a small monthly subscription with the same feature set as a 500-person global operation. Modules can be turned on individually or as a bundle; only pay for what you use."
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
export default function ErpCross_asset_management_for_oilfield_services() { return <ErpModuleIndustryPage {...data} />; }
