import ErpModuleCityPage from '@/components/ErpModuleCityPage';
const data = {
  "moduleSlug": "asset-management",
  "moduleName": "Asset Integrity & Equipment Register",
  "citySlug": "mumbai",
  "cityName": "Mumbai",
  "country": "India",
  "title": "Asset Integrity & Equipment Register in Mumbai",
  "desc": "Asset Integrity & Equipment Register ERP module for inspection companies in Mumbai, India. Pre-configured for BPCL Mahul refinery, HPCL Mumbai refinery and aligned with PESO, OISD. Demo: info@atlantisndt.com.",
  "intro": "Inspection programs need an authoritative asset register. The asset register is the spine that connects equipment, inspection history, drawings, P&IDs, isometrics, corrosion mechanisms, RBI assessments, fitness-for-service calculations, and integrity operating windows.\n\nFor inspection teams operating in Mumbai, India, the asset integrity & equipment register module is configured against local realities: India's western corridor. Trombay/Mahul refineries. ONGC offshore Western Region. Reliance Hazira pipeline. Pre-built templates support operator-specific quality clauses from BPCL Mahul refinery, HPCL Mumbai refinery, ONGC Western Offshore, Reliance Hazira/Patalganga, and regulatory frameworks under PESO, OISD, DGMS mining are reflected in the workflow defaults. Atlantis NDT ERP is delivered as multi-tenant SaaS with regional data residency — a 5-person Mumbai inspection contractor and a 200-person multinational both run on the same platform.",
  "cityFeatures": [
    "Hierarchical asset structure: site → unit → system → equipment → component → TML",
    "Equipment types: pressure vessel, piping circuit, storage tank, heat exchanger, fired heater, pump, compressor, exchanger tube bundle, valve, pipeline segment, structural member",
    "Damage mechanism library per API 571 (172 mechanisms): identification, screening, susceptibility scoring",
    "Integrity Operating Window (IOW) tracking with alarm levels (information / standard / critical)",
    "TML (thickness measurement location) database with sketch, photograph, GPS, and historical readings",
    "Corrosion rate computation (short / long term) per API 570 / API 653 methodology",
    "Tailored for Mumbai workflow — pre-configured operator templates for BPCL Mahul refinery, HPCL Mumbai refinery, ONGC Western Offshore",
    "Regulatory alignment with PESO, OISD, DGMS mining — audit-ready evidence packages"
  ],
  "cityUseCases": [
    "A mid-size Mumbai inspection contractor serving BPCL Mahul refinery and HPCL Mumbai refinery deploys asset integrity & equipment register as a standalone module — replacing spreadsheets and disconnected SaaS — and reports 60-80% admin-time reduction within 90 days.",
    "A Mumbai EPC quality team standardizes asset integrity & equipment register across 4 simultaneous project sites in the India market. Daily reports, audit packages, and customer-format reports flow to ONGC Western Offshore portals automatically.",
    "A growing Mumbai-based service provider integrates asset integrity & equipment register with accounting (QuickBooks / Xero / Tally for India / Sage / Reliance ERP) and the CMMS used by Reliance Hazira/Patalganga — eliminating duplicate data entry and reducing customer-facing report turnaround from 5 days to <24 hours.",
    "A regulator-audit-driven Mumbai inspection company uses asset integrity & equipment register to pass PESO and OISD audits with zero findings — evidence packages assembled in 30 seconds vs. 80+ hours of manual prep."
  ],
  "cityOperators": [
    "BPCL Mahul refinery",
    "HPCL Mumbai refinery",
    "ONGC Western Offshore",
    "Reliance Hazira/Patalganga",
    "Indian Oil Mumbai",
    "L&T Hydrocarbon",
    "Tata Power"
  ],
  "cityRegulators": [
    "PESO",
    "OISD",
    "DGMS mining",
    "DGFASLI",
    "Maharashtra Pollution Control Board"
  ],
  "cityPain": [
    "Asset Integrity & Equipment Register tracked in spreadsheets — always 2 months behind Mumbai operator-portal requirements",
    "PESO audit preparation takes 80+ hours per cycle — finds gaps too late to remediate",
    "Operator-portal flow-down from BPCL Mahul refinery updates monthly — internal procedures lag by weeks",
    "Customer-format reports for HPCL Mumbai refinery, ONGC Western Offshore, Reliance Hazira/Patalganga require manual reformatting per submission"
  ],
  "faqs": [
    [
      "Is the asset integrity & equipment register module configured for Mumbai operators?",
      "Yes. Pre-loaded operator-specific quality clauses, qualification schemes, and report formats for BPCL Mahul refinery, HPCL Mumbai refinery, ONGC Western Offshore, Reliance Hazira/Patalganga, Indian Oil Mumbai. Atlantis NDT updates the operator-template library on a quarterly cadence so flow-down stays current with operator specification revisions."
    ],
    [
      "Does it comply with PESO and other India regulators?",
      "Yes. PESO, OISD, DGMS mining, DGFASLI requirements drive the audit-readiness defaults. Annual + ad-hoc inspections generate audit-package PDFs with full chain-of-custody, personnel qualification matrix, calibration records, and procedure revision history pre-assembled."
    ],
    [
      "What languages and currencies are supported for Mumbai?",
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
  "lat": 19.076,
  "lng": 72.8777
};
export default function ErpMC_asset_management_mumbai() { return <ErpModuleCityPage {...data} />; }
