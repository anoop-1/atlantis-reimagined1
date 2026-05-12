import ErpModuleCityPage from '@/components/ErpModuleCityPage';
const data = {
  "moduleSlug": "asset-management",
  "moduleName": "Asset Integrity & Equipment Register",
  "citySlug": "saudi-arabia",
  "cityName": "Saudi Arabia",
  "country": "Saudi Arabia",
  "title": "Asset Integrity & Equipment Register in Saudi Arabia",
  "desc": "Asset Integrity & Equipment Register ERP module for inspection companies in Saudi Arabia, Saudi Arabia. Pre-configured for Saudi Aramco upstream/downstream, SABIC petrochemicals and aligned with HRSD, GAMI. Demo: info@atlantisndt.com.",
  "intro": "Inspection programs need an authoritative asset register. The asset register is the spine that connects equipment, inspection history, drawings, P&IDs, isometrics, corrosion mechanisms, RBI assessments, fitness-for-service calculations, and integrity operating windows.\n\nFor inspection teams operating in Saudi Arabia, Saudi Arabia, the asset integrity & equipment register module is configured against local realities: World's largest integrated oil & gas. SAEP-1112 / SAEP-1142. Vision 2030 mega-projects. Pre-built templates support operator-specific quality clauses from Saudi Aramco upstream/downstream, SABIC petrochemicals, Ma'aden mining, SADAF, and regulatory frameworks under HRSD, GAMI, SASO are reflected in the workflow defaults. Atlantis NDT ERP is delivered as multi-tenant SaaS with regional data residency — a 5-person Saudi Arabia inspection contractor and a 200-person multinational both run on the same platform.",
  "cityFeatures": [
    "Hierarchical asset structure: site → unit → system → equipment → component → TML",
    "Equipment types: pressure vessel, piping circuit, storage tank, heat exchanger, fired heater, pump, compressor, exchanger tube bundle, valve, pipeline segment, structural member",
    "Damage mechanism library per API 571 (172 mechanisms): identification, screening, susceptibility scoring",
    "Integrity Operating Window (IOW) tracking with alarm levels (information / standard / critical)",
    "TML (thickness measurement location) database with sketch, photograph, GPS, and historical readings",
    "Corrosion rate computation (short / long term) per API 570 / API 653 methodology",
    "Tailored for Saudi Arabia workflow — pre-configured operator templates for Saudi Aramco upstream/downstream, SABIC petrochemicals, Ma'aden mining",
    "Regulatory alignment with HRSD, GAMI, SASO — audit-ready evidence packages"
  ],
  "cityUseCases": [
    "A mid-size Saudi Arabia inspection contractor serving Saudi Aramco upstream/downstream and SABIC petrochemicals deploys asset integrity & equipment register as a standalone module — replacing spreadsheets and disconnected SaaS — and reports 60-80% admin-time reduction within 90 days.",
    "A Saudi Arabia EPC quality team standardizes asset integrity & equipment register across 4 simultaneous project sites in the Saudi Arabia market. Daily reports, audit packages, and customer-format reports flow to Ma'aden mining portals automatically.",
    "A growing Saudi Arabia-based service provider integrates asset integrity & equipment register with accounting (QuickBooks / Xero / Tally for India / Sage / Reliance ERP) and the CMMS used by SADAF — eliminating duplicate data entry and reducing customer-facing report turnaround from 5 days to <24 hours.",
    "A regulator-audit-driven Saudi Arabia inspection company uses asset integrity & equipment register to pass HRSD and GAMI audits with zero findings — evidence packages assembled in 30 seconds vs. 80+ hours of manual prep."
  ],
  "cityOperators": [
    "Saudi Aramco upstream/downstream",
    "SABIC petrochemicals",
    "Ma'aden mining",
    "SADAF",
    "KEMYA",
    "Yanpet",
    "PetroRabigh",
    "YASREF"
  ],
  "cityRegulators": [
    "HRSD",
    "GAMI",
    "SASO",
    "Aramco SAEP",
    "MODON",
    "RCJY (Royal Commission Jubail/Yanbu)"
  ],
  "cityPain": [
    "Asset Integrity & Equipment Register tracked in spreadsheets — always 2 months behind Saudi Arabia operator-portal requirements",
    "HRSD audit preparation takes 80+ hours per cycle — finds gaps too late to remediate",
    "Operator-portal flow-down from Saudi Aramco upstream/downstream updates monthly — internal procedures lag by weeks",
    "Customer-format reports for SABIC petrochemicals, Ma'aden mining, SADAF require manual reformatting per submission"
  ],
  "faqs": [
    [
      "Is the asset integrity & equipment register module configured for Saudi Arabia operators?",
      "Yes. Pre-loaded operator-specific quality clauses, qualification schemes, and report formats for Saudi Aramco upstream/downstream, SABIC petrochemicals, Ma'aden mining, SADAF, KEMYA. Atlantis NDT updates the operator-template library on a quarterly cadence so flow-down stays current with operator specification revisions."
    ],
    [
      "Does it comply with HRSD and other Saudi Arabia regulators?",
      "Yes. HRSD, GAMI, SASO, Aramco SAEP requirements drive the audit-readiness defaults. Annual + ad-hoc inspections generate audit-package PDFs with full chain-of-custody, personnel qualification matrix, calibration records, and procedure revision history pre-assembled."
    ],
    [
      "What languages and currencies are supported for Saudi Arabia?",
      "Platform supports English (primary), and where relevant for Saudi Arabia: Arabic (Gulf), Bahasa Indonesia, Hindi/Marathi/Telugu (India), Mandarin (China/SG), Spanish/Portuguese (Americas), French (West Africa/Canada). Invoicing supports USD, EUR, GBP, AED, SAR, INR, SGD, AUD, CAD, IDR, MYR, QAR, NGN — full multi-currency with VAT/GST as applicable."
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
  "lat": 24.7136,
  "lng": 46.6753
};
export default function ErpMC_asset_management_saudi_arabia() { return <ErpModuleCityPage {...data} />; }
