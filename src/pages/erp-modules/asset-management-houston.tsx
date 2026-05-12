import ErpModuleCityPage from '@/components/ErpModuleCityPage';
const data = {
  "moduleSlug": "asset-management",
  "moduleName": "Asset Integrity & Equipment Register",
  "citySlug": "houston",
  "cityName": "Houston",
  "country": "USA",
  "title": "Asset Integrity & Equipment Register in Houston",
  "desc": "Asset Integrity & Equipment Register ERP module for inspection companies in Houston, USA. Pre-configured for ExxonMobil Baytown refinery, Marathon Galveston Bay and aligned with OSHA Region 6 PSM, TCEQ air permits. Demo: info@atlantisndt.com.",
  "intro": "Inspection programs need an authoritative asset register. The asset register is the spine that connects equipment, inspection history, drawings, P&IDs, isometrics, corrosion mechanisms, RBI assessments, fitness-for-service calculations, and integrity operating windows.\n\nFor inspection teams operating in Houston, USA, the asset integrity & equipment register module is configured against local realities: Energy capital of the world. 4,600+ oil & gas firms. Continuous turnaround demand. Pre-built templates support operator-specific quality clauses from ExxonMobil Baytown refinery, Marathon Galveston Bay, LyondellBasell Channelview, Valero Houston, and regulatory frameworks under OSHA Region 6 PSM, TCEQ air permits, USCG District 8 marine are reflected in the workflow defaults. Atlantis NDT ERP is delivered as multi-tenant SaaS with regional data residency — a 5-person Houston inspection contractor and a 200-person multinational both run on the same platform.",
  "cityFeatures": [
    "Hierarchical asset structure: site → unit → system → equipment → component → TML",
    "Equipment types: pressure vessel, piping circuit, storage tank, heat exchanger, fired heater, pump, compressor, exchanger tube bundle, valve, pipeline segment, structural member",
    "Damage mechanism library per API 571 (172 mechanisms): identification, screening, susceptibility scoring",
    "Integrity Operating Window (IOW) tracking with alarm levels (information / standard / critical)",
    "TML (thickness measurement location) database with sketch, photograph, GPS, and historical readings",
    "Corrosion rate computation (short / long term) per API 570 / API 653 methodology",
    "Tailored for Houston workflow — pre-configured operator templates for ExxonMobil Baytown refinery, Marathon Galveston Bay, LyondellBasell Channelview",
    "Regulatory alignment with OSHA Region 6 PSM, TCEQ air permits, USCG District 8 marine — audit-ready evidence packages"
  ],
  "cityUseCases": [
    "A mid-size Houston inspection contractor serving ExxonMobil Baytown refinery and Marathon Galveston Bay deploys asset integrity & equipment register as a standalone module — replacing spreadsheets and disconnected SaaS — and reports 60-80% admin-time reduction within 90 days.",
    "A Houston EPC quality team standardizes asset integrity & equipment register across 4 simultaneous project sites in the USA market. Daily reports, audit packages, and customer-format reports flow to LyondellBasell Channelview portals automatically.",
    "A growing Houston-based service provider integrates asset integrity & equipment register with accounting (QuickBooks / Xero / Tally for India / Sage / Reliance ERP) and the CMMS used by Valero Houston — eliminating duplicate data entry and reducing customer-facing report turnaround from 5 days to <24 hours.",
    "A regulator-audit-driven Houston inspection company uses asset integrity & equipment register to pass OSHA Region 6 PSM and TCEQ air permits audits with zero findings — evidence packages assembled in 30 seconds vs. 80+ hours of manual prep."
  ],
  "cityOperators": [
    "ExxonMobil Baytown refinery",
    "Marathon Galveston Bay",
    "LyondellBasell Channelview",
    "Valero Houston",
    "Phillips 66 Sweeny",
    "Shell Deer Park",
    "Pemex Deer Park",
    "INEOS Battleground"
  ],
  "cityRegulators": [
    "OSHA Region 6 PSM",
    "TCEQ air permits",
    "USCG District 8 marine",
    "Texas Railroad Commission",
    "EPA Region 6",
    "DOT PHMSA pipeline"
  ],
  "cityPain": [
    "Asset Integrity & Equipment Register tracked in spreadsheets — always 2 months behind Houston operator-portal requirements",
    "OSHA Region 6 PSM audit preparation takes 80+ hours per cycle — finds gaps too late to remediate",
    "Operator-portal flow-down from ExxonMobil Baytown refinery updates monthly — internal procedures lag by weeks",
    "Customer-format reports for Marathon Galveston Bay, LyondellBasell Channelview, Valero Houston require manual reformatting per submission"
  ],
  "faqs": [
    [
      "Is the asset integrity & equipment register module configured for Houston operators?",
      "Yes. Pre-loaded operator-specific quality clauses, qualification schemes, and report formats for ExxonMobil Baytown refinery, Marathon Galveston Bay, LyondellBasell Channelview, Valero Houston, Phillips 66 Sweeny. Atlantis NDT updates the operator-template library on a quarterly cadence so flow-down stays current with operator specification revisions."
    ],
    [
      "Does it comply with OSHA Region 6 PSM and other USA regulators?",
      "Yes. OSHA Region 6 PSM, TCEQ air permits, USCG District 8 marine, Texas Railroad Commission requirements drive the audit-readiness defaults. Annual + ad-hoc inspections generate audit-package PDFs with full chain-of-custody, personnel qualification matrix, calibration records, and procedure revision history pre-assembled."
    ],
    [
      "What languages and currencies are supported for Houston?",
      "Platform supports English (primary), and where relevant for USA: Arabic (Gulf), Bahasa Indonesia, Hindi/Marathi/Telugu (India), Mandarin (China/SG), Spanish/Portuguese (Americas), French (West Africa/Canada). Invoicing supports USD, EUR, GBP, AED, SAR, INR, SGD, AUD, CAD, IDR, MYR, QAR, NGN — full multi-currency with VAT/GST as applicable."
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
  "lat": 29.7604,
  "lng": -95.3698
};
export default function ErpMC_asset_management_houston() { return <ErpModuleCityPage {...data} />; }
