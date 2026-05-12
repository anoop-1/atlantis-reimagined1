import ErpModuleCityPage from '@/components/ErpModuleCityPage';
const data = {
  "moduleSlug": "asset-management",
  "moduleName": "Asset Integrity & Equipment Register",
  "citySlug": "hyderabad",
  "cityName": "Hyderabad",
  "country": "India",
  "title": "Asset Integrity & Equipment Register in Hyderabad",
  "desc": "Asset Integrity & Equipment Register ERP module for inspection companies in Hyderabad, India. Pre-configured for BHEL boilers/turbines, HPCL Visakh refinery (adjacent) and aligned with PESO, BARC nuclear. Demo: info@atlantisndt.com.",
  "intro": "Inspection programs need an authoritative asset register. The asset register is the spine that connects equipment, inspection history, drawings, P&IDs, isometrics, corrosion mechanisms, RBI assessments, fitness-for-service calculations, and integrity operating windows.\n\nFor inspection teams operating in Hyderabad, India, the asset integrity & equipment register module is configured against local realities: South India industrial hub. BHEL heavy engineering. ISRO suppliers. Pharma + aerospace manufacturing. Pre-built templates support operator-specific quality clauses from BHEL boilers/turbines, HPCL Visakh refinery (adjacent), ISRO satellite suppliers, BDL defense, and regulatory frameworks under PESO, BARC nuclear, DGCA aerospace are reflected in the workflow defaults. Atlantis NDT ERP is delivered as multi-tenant SaaS with regional data residency — a 5-person Hyderabad inspection contractor and a 200-person multinational both run on the same platform.",
  "cityFeatures": [
    "Hierarchical asset structure: site → unit → system → equipment → component → TML",
    "Equipment types: pressure vessel, piping circuit, storage tank, heat exchanger, fired heater, pump, compressor, exchanger tube bundle, valve, pipeline segment, structural member",
    "Damage mechanism library per API 571 (172 mechanisms): identification, screening, susceptibility scoring",
    "Integrity Operating Window (IOW) tracking with alarm levels (information / standard / critical)",
    "TML (thickness measurement location) database with sketch, photograph, GPS, and historical readings",
    "Corrosion rate computation (short / long term) per API 570 / API 653 methodology",
    "Tailored for Hyderabad workflow — pre-configured operator templates for BHEL boilers/turbines, HPCL Visakh refinery (adjacent), ISRO satellite suppliers",
    "Regulatory alignment with PESO, BARC nuclear, DGCA aerospace — audit-ready evidence packages"
  ],
  "cityUseCases": [
    "A mid-size Hyderabad inspection contractor serving BHEL boilers/turbines and HPCL Visakh refinery (adjacent) deploys asset integrity & equipment register as a standalone module — replacing spreadsheets and disconnected SaaS — and reports 60-80% admin-time reduction within 90 days.",
    "A Hyderabad EPC quality team standardizes asset integrity & equipment register across 4 simultaneous project sites in the India market. Daily reports, audit packages, and customer-format reports flow to ISRO satellite suppliers portals automatically.",
    "A growing Hyderabad-based service provider integrates asset integrity & equipment register with accounting (QuickBooks / Xero / Tally for India / Sage / Reliance ERP) and the CMMS used by BDL defense — eliminating duplicate data entry and reducing customer-facing report turnaround from 5 days to <24 hours.",
    "A regulator-audit-driven Hyderabad inspection company uses asset integrity & equipment register to pass PESO and BARC nuclear audits with zero findings — evidence packages assembled in 30 seconds vs. 80+ hours of manual prep."
  ],
  "cityOperators": [
    "BHEL boilers/turbines",
    "HPCL Visakh refinery (adjacent)",
    "ISRO satellite suppliers",
    "BDL defense",
    "ECIL",
    "Dr Reddy's Labs",
    "Bharat Forge"
  ],
  "cityRegulators": [
    "PESO",
    "BARC nuclear",
    "DGCA aerospace",
    "AERB radiation safety",
    "Telangana Pollution Control Board"
  ],
  "cityPain": [
    "Asset Integrity & Equipment Register tracked in spreadsheets — always 2 months behind Hyderabad operator-portal requirements",
    "PESO audit preparation takes 80+ hours per cycle — finds gaps too late to remediate",
    "Operator-portal flow-down from BHEL boilers/turbines updates monthly — internal procedures lag by weeks",
    "Customer-format reports for HPCL Visakh refinery (adjacent), ISRO satellite suppliers, BDL defense require manual reformatting per submission"
  ],
  "faqs": [
    [
      "Is the asset integrity & equipment register module configured for Hyderabad operators?",
      "Yes. Pre-loaded operator-specific quality clauses, qualification schemes, and report formats for BHEL boilers/turbines, HPCL Visakh refinery (adjacent), ISRO satellite suppliers, BDL defense, ECIL. Atlantis NDT updates the operator-template library on a quarterly cadence so flow-down stays current with operator specification revisions."
    ],
    [
      "Does it comply with PESO and other India regulators?",
      "Yes. PESO, BARC nuclear, DGCA aerospace, AERB radiation safety requirements drive the audit-readiness defaults. Annual + ad-hoc inspections generate audit-package PDFs with full chain-of-custody, personnel qualification matrix, calibration records, and procedure revision history pre-assembled."
    ],
    [
      "What languages and currencies are supported for Hyderabad?",
      "Platform supports English (primary), and where relevant for India: Arabic (Gulf), Bahasa Indonesia, Hindi/Marathi/Telugu (India), Mandarin (China/SG), Spanish/Portuguese (Americas), French (West Africa/Canada). Invoicing supports USD, EUR, GBP, AED, SAR, INR, SGD, AUD, CAD, IDR, MYR, QAR, NGN — full multi-currency with VAT/GST as applicable."
    ],
    [
      "Can it import asset hierarchies from existing CMMS / APM systems?",
      "Yes. Bulk-import templates accept asset, equipment, functional location, and tag hierarchies from Maximo, SAP PM, AspenTech APM, Bentley AssetWise, and Hexagon Meridium. Equipment numbering schemes, parent-child relationships, and equipment-class attribute sets are preserved. Ongoing sync via REST API keeps systems aligned."
    ],
    [
      "Does it cover API 571 damage mechanisms with screening?",
      "Yes. The damage mechanism module includes all 172 mechanisms from API 571 (3rd edition) with material, environment, temperature, and operating-condition screening criteria. The DM screening report identifies which mechanisms apply to each equipment item with severity ranking and recommended inspection methods."
    ]
  ],
  "lat": 17.385,
  "lng": 78.4867
};
export default function ErpMC_asset_management_hyderabad() { return <ErpModuleCityPage {...data} />; }
