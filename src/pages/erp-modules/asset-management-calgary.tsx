import ErpModuleCityPage from '@/components/ErpModuleCityPage';
const data = {
  "moduleSlug": "asset-management",
  "moduleName": "Asset Integrity & Equipment Register",
  "citySlug": "calgary",
  "cityName": "Calgary",
  "country": "Canada",
  "title": "Asset Integrity & Equipment Register in Calgary",
  "desc": "Asset Integrity & Equipment Register ERP module for inspection companies in Calgary, Canada. Pre-configured for Suncor, Cenovus and aligned with ABSA (Alberta Boilers Safety), AER (Alberta Energy Regulator). Demo: info@atlantisndt.com.",
  "intro": "Inspection programs need an authoritative asset register. The asset register is the spine that connects equipment, inspection history, drawings, P&IDs, isometrics, corrosion mechanisms, RBI assessments, fitness-for-service calculations, and integrity operating windows.\n\nFor inspection teams operating in Calgary, Canada, the asset integrity & equipment register module is configured against local realities: Canadian oil & gas administrative center. Oil sands operations, pipeline midstream HQ. Pre-built templates support operator-specific quality clauses from Suncor, Cenovus, CNRL, Imperial Oil, and regulatory frameworks under ABSA (Alberta Boilers Safety), AER (Alberta Energy Regulator), CER (Canada Energy Regulator) are reflected in the workflow defaults. Atlantis NDT ERP is delivered as multi-tenant SaaS with regional data residency — a 5-person Calgary inspection contractor and a 200-person multinational both run on the same platform.",
  "cityFeatures": [
    "Hierarchical asset structure: site → unit → system → equipment → component → TML",
    "Equipment types: pressure vessel, piping circuit, storage tank, heat exchanger, fired heater, pump, compressor, exchanger tube bundle, valve, pipeline segment, structural member",
    "Damage mechanism library per API 571 (172 mechanisms): identification, screening, susceptibility scoring",
    "Integrity Operating Window (IOW) tracking with alarm levels (information / standard / critical)",
    "TML (thickness measurement location) database with sketch, photograph, GPS, and historical readings",
    "Corrosion rate computation (short / long term) per API 570 / API 653 methodology",
    "Tailored for Calgary workflow — pre-configured operator templates for Suncor, Cenovus, CNRL",
    "Regulatory alignment with ABSA (Alberta Boilers Safety), AER (Alberta Energy Regulator), CER (Canada Energy Regulator) — audit-ready evidence packages"
  ],
  "cityUseCases": [
    "A mid-size Calgary inspection contractor serving Suncor and Cenovus deploys asset integrity & equipment register as a standalone module — replacing spreadsheets and disconnected SaaS — and reports 60-80% admin-time reduction within 90 days.",
    "A Calgary EPC quality team standardizes asset integrity & equipment register across 4 simultaneous project sites in the Canada market. Daily reports, audit packages, and customer-format reports flow to CNRL portals automatically.",
    "A growing Calgary-based service provider integrates asset integrity & equipment register with accounting (QuickBooks / Xero / Tally for India / Sage / Reliance ERP) and the CMMS used by Imperial Oil — eliminating duplicate data entry and reducing customer-facing report turnaround from 5 days to <24 hours.",
    "A regulator-audit-driven Calgary inspection company uses asset integrity & equipment register to pass ABSA (Alberta Boilers Safety) and AER (Alberta Energy Regulator) audits with zero findings — evidence packages assembled in 30 seconds vs. 80+ hours of manual prep."
  ],
  "cityOperators": [
    "Suncor",
    "Cenovus",
    "CNRL",
    "Imperial Oil",
    "TC Energy",
    "Enbridge",
    "Pembina Pipeline",
    "Husky Energy"
  ],
  "cityRegulators": [
    "ABSA (Alberta Boilers Safety)",
    "AER (Alberta Energy Regulator)",
    "CER (Canada Energy Regulator)",
    "CSA Group",
    "CGSB"
  ],
  "cityPain": [
    "Asset Integrity & Equipment Register tracked in spreadsheets — always 2 months behind Calgary operator-portal requirements",
    "ABSA (Alberta Boilers Safety) audit preparation takes 80+ hours per cycle — finds gaps too late to remediate",
    "Operator-portal flow-down from Suncor updates monthly — internal procedures lag by weeks",
    "Customer-format reports for Cenovus, CNRL, Imperial Oil require manual reformatting per submission"
  ],
  "faqs": [
    [
      "Is the asset integrity & equipment register module configured for Calgary operators?",
      "Yes. Pre-loaded operator-specific quality clauses, qualification schemes, and report formats for Suncor, Cenovus, CNRL, Imperial Oil, TC Energy. Atlantis NDT updates the operator-template library on a quarterly cadence so flow-down stays current with operator specification revisions."
    ],
    [
      "Does it comply with ABSA (Alberta Boilers Safety) and other Canada regulators?",
      "Yes. ABSA (Alberta Boilers Safety), AER (Alberta Energy Regulator), CER (Canada Energy Regulator), CSA Group requirements drive the audit-readiness defaults. Annual + ad-hoc inspections generate audit-package PDFs with full chain-of-custody, personnel qualification matrix, calibration records, and procedure revision history pre-assembled."
    ],
    [
      "What languages and currencies are supported for Calgary?",
      "Platform supports English (primary), and where relevant for Canada: Arabic (Gulf), Bahasa Indonesia, Hindi/Marathi/Telugu (India), Mandarin (China/SG), Spanish/Portuguese (Americas), French (West Africa/Canada). Invoicing supports USD, EUR, GBP, AED, SAR, INR, SGD, AUD, CAD, IDR, MYR, QAR, NGN — full multi-currency with VAT/GST as applicable."
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
  "lat": 51.0447,
  "lng": -114.0719
};
export default function ErpMC_asset_management_calgary() { return <ErpModuleCityPage {...data} />; }
