import ErpModuleCityPage from '@/components/ErpModuleCityPage';
const data = {
  "moduleSlug": "asset-management",
  "moduleName": "Asset Integrity & Equipment Register",
  "citySlug": "london",
  "cityName": "London",
  "country": "UK",
  "title": "Asset Integrity & Equipment Register in London",
  "desc": "Asset Integrity & Equipment Register ERP module for inspection companies in London, UK. Pre-configured for BP HQ, Shell HQ and aligned with HSE, ONR (Office Nuclear Regulation). Demo: info@atlantisndt.com.",
  "intro": "Inspection programs need an authoritative asset register. The asset register is the spine that connects equipment, inspection history, drawings, P&IDs, isometrics, corrosion mechanisms, RBI assessments, fitness-for-service calculations, and integrity operating windows.\n\nFor inspection teams operating in London, UK, the asset integrity & equipment register module is configured against local realities: HQ city for IOCs. Diverse client base — UKCS, nuclear, aerospace, manufacturing. BINDT, TWI based. Pre-built templates support operator-specific quality clauses from BP HQ, Shell HQ, TotalEnergies UK, EDF Energy nuclear, and regulatory frameworks under HSE, ONR (Office Nuclear Regulation), BINDT are reflected in the workflow defaults. Atlantis NDT ERP is delivered as multi-tenant SaaS with regional data residency — a 5-person London inspection contractor and a 200-person multinational both run on the same platform.",
  "cityFeatures": [
    "Hierarchical asset structure: site → unit → system → equipment → component → TML",
    "Equipment types: pressure vessel, piping circuit, storage tank, heat exchanger, fired heater, pump, compressor, exchanger tube bundle, valve, pipeline segment, structural member",
    "Damage mechanism library per API 571 (172 mechanisms): identification, screening, susceptibility scoring",
    "Integrity Operating Window (IOW) tracking with alarm levels (information / standard / critical)",
    "TML (thickness measurement location) database with sketch, photograph, GPS, and historical readings",
    "Corrosion rate computation (short / long term) per API 570 / API 653 methodology",
    "Tailored for London workflow — pre-configured operator templates for BP HQ, Shell HQ, TotalEnergies UK",
    "Regulatory alignment with HSE, ONR (Office Nuclear Regulation), BINDT — audit-ready evidence packages"
  ],
  "cityUseCases": [
    "A mid-size London inspection contractor serving BP HQ and Shell HQ deploys asset integrity & equipment register as a standalone module — replacing spreadsheets and disconnected SaaS — and reports 60-80% admin-time reduction within 90 days.",
    "A London EPC quality team standardizes asset integrity & equipment register across 4 simultaneous project sites in the UK market. Daily reports, audit packages, and customer-format reports flow to TotalEnergies UK portals automatically.",
    "A growing London-based service provider integrates asset integrity & equipment register with accounting (QuickBooks / Xero / Tally for India / Sage / Reliance ERP) and the CMMS used by EDF Energy nuclear — eliminating duplicate data entry and reducing customer-facing report turnaround from 5 days to <24 hours.",
    "A regulator-audit-driven London inspection company uses asset integrity & equipment register to pass HSE and ONR (Office Nuclear Regulation) audits with zero findings — evidence packages assembled in 30 seconds vs. 80+ hours of manual prep."
  ],
  "cityOperators": [
    "BP HQ",
    "Shell HQ",
    "TotalEnergies UK",
    "EDF Energy nuclear",
    "National Grid",
    "Rolls-Royce",
    "BAE Systems"
  ],
  "cityRegulators": [
    "HSE",
    "ONR (Office Nuclear Regulation)",
    "BINDT",
    "EASA via UK CAA",
    "Environment Agency"
  ],
  "cityPain": [
    "Asset Integrity & Equipment Register tracked in spreadsheets — always 2 months behind London operator-portal requirements",
    "HSE audit preparation takes 80+ hours per cycle — finds gaps too late to remediate",
    "Operator-portal flow-down from BP HQ updates monthly — internal procedures lag by weeks",
    "Customer-format reports for Shell HQ, TotalEnergies UK, EDF Energy nuclear require manual reformatting per submission"
  ],
  "faqs": [
    [
      "Is the asset integrity & equipment register module configured for London operators?",
      "Yes. Pre-loaded operator-specific quality clauses, qualification schemes, and report formats for BP HQ, Shell HQ, TotalEnergies UK, EDF Energy nuclear, National Grid. Atlantis NDT updates the operator-template library on a quarterly cadence so flow-down stays current with operator specification revisions."
    ],
    [
      "Does it comply with HSE and other UK regulators?",
      "Yes. HSE, ONR (Office Nuclear Regulation), BINDT, EASA via UK CAA requirements drive the audit-readiness defaults. Annual + ad-hoc inspections generate audit-package PDFs with full chain-of-custody, personnel qualification matrix, calibration records, and procedure revision history pre-assembled."
    ],
    [
      "What languages and currencies are supported for London?",
      "Platform supports English (primary), and where relevant for UK: Arabic (Gulf), Bahasa Indonesia, Hindi/Marathi/Telugu (India), Mandarin (China/SG), Spanish/Portuguese (Americas), French (West Africa/Canada). Invoicing supports USD, EUR, GBP, AED, SAR, INR, SGD, AUD, CAD, IDR, MYR, QAR, NGN — full multi-currency with VAT/GST as applicable."
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
  "lat": 51.5074,
  "lng": -0.1278
};
export default function ErpMC_asset_management_london() { return <ErpModuleCityPage {...data} />; }
