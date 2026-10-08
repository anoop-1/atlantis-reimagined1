import ErpModuleCityPage from '@/components/ErpModuleCityPage';
const data = {
  "moduleSlug": "corrosion-tracking",
  "moduleName": "Corrosion Tracking",
  "citySlug": "bangkok",
  "cityName": "Bangkok",
  "country": "Thailand",
  "title": "Corrosion Tracking in Bangkok",
  "desc": "Pre-configured for PTT Public Company, Thai Oil (TOP, Sriracha refinery) and aligned with DOEB Department of Energy Business, DIW Department of Industrial Works. Demo: info@atlantisndt.com.",
  "intro": "Corrosion is the dominant degradation mechanism for ~85% of refinery and petrochemical equipment. Quantifying corrosion rates, projecting remaining life, screening damage mechanisms, and using all of this to set code-based inspection intervals is the heart of any modern integrity program.\n\nFor inspection teams operating in Bangkok, Thailand, the corrosion tracking module is configured against local realities: PTT Group corporate base. EEC corridor: Map Ta Phut, Rayong refining & petrochemicals. Pre-built templates support operator-specific quality clauses from PTT Public Company, Thai Oil (TOP, Sriracha refinery), IRPC Rayong refining + petrochemicals, PTT Global Chemical (Map Ta Phut), and regulatory frameworks under DOEB Department of Energy Business, DIW Department of Industrial Works, TISI Thai Industrial Standards are reflected in the workflow defaults. Atlantis NDT ERP is delivered as multi-tenant SaaS with regional data residency — a 5-person Bangkok inspection contractor and a 200-person multinational both run on the same platform.",
  "cityFeatures": [
    "Per-TML thickness history, with the short-term and long-term corrosion rates the inspector calculates stored alongside",
    "Wall-thickness trend per TML against the t-min and retirement thickness the inspector sets",
    "Damage mechanism records per API 571, as assigned by the integrity engineer",
    "Tailored for Bangkok workflow — pre-configured operator templates for PTT Public Company, Thai Oil (TOP, Sriracha refinery), IRPC Rayong refining + petrochemicals",
    "Regulatory alignment with DOEB Department of Energy Business, DIW Department of Industrial Works, TISI Thai Industrial Standards — audit-ready evidence packages"
  ],
  "cityUseCases": [
    "A mid-size Bangkok inspection contractor serving PTT Public Company and Thai Oil (TOP, Sriracha refinery) deploys corrosion tracking as a standalone module — replacing spreadsheets and disconnected SaaS — and reports 60-80% admin-time reduction within 90 days.",
    "A Bangkok EPC quality team standardizes corrosion tracking across 4 simultaneous project sites in the Thailand market. Daily reports, audit packages, and customer-format reports flow to IRPC Rayong refining + petrochemicals portals automatically.",
    "A growing Bangkok-based service provider integrates corrosion tracking with accounting (QuickBooks / Xero / Tally for India / Sage / Reliance ERP) and the CMMS used by PTT Global Chemical (Map Ta Phut) — eliminating duplicate data entry and reducing customer-facing report turnaround from 5 days to <24 hours.",
    "A regulator-audit-driven Bangkok inspection company uses corrosion tracking to pass DOEB Department of Energy Business and DIW Department of Industrial Works audits with zero findings — evidence packages assembled in 30 seconds vs. 80+ hours of manual prep."
  ],
  "cityOperators": [
    "PTT Public Company",
    "Thai Oil (TOP, Sriracha refinery)",
    "IRPC Rayong refining + petrochemicals",
    "PTT Global Chemical (Map Ta Phut)",
    "Bangchak Corporation",
    "Star Petroleum Refining",
    "SCG Chemicals",
    "PTTEP"
  ],
  "cityRegulators": [
    "DOEB Department of Energy Business",
    "DIW Department of Industrial Works",
    "TISI Thai Industrial Standards",
    "OAP Office of Atoms for Peace",
    "Ministry of Labour"
  ],
  "cityPain": [
    "Corrosion Tracking tracked in spreadsheets — always 2 months behind Bangkok operator-portal requirements",
    "DOEB Department of Energy Business audit preparation takes 80+ hours per cycle — finds gaps too late to remediate",
    "Operator-portal flow-down from PTT Public Company updates monthly — internal procedures lag by weeks",
    "Customer-format reports for Thai Oil (TOP, Sriracha refinery), IRPC Rayong refining + petrochemicals, PTT Global Chemical (Map Ta Phut) require manual reformatting per submission"
  ],
  "faqs": [
    [
      "Is the corrosion tracking module configured for Bangkok operators?",
      "Yes. Pre-loaded operator-specific quality clauses, qualification schemes, and report formats for PTT Public Company, Thai Oil (TOP, Sriracha refinery), IRPC Rayong refining + petrochemicals, PTT Global Chemical (Map Ta Phut), Bangchak Corporation. Atlantis NDT updates the operator-template library on a quarterly cadence so flow-down stays current with operator specification revisions."
    ],
    [
      "Does it comply with DOEB Department of Energy Business and other Thailand regulators?",
      "Yes. DOEB Department of Energy Business, DIW Department of Industrial Works, TISI Thai Industrial Standards, OAP Office of Atoms for Peace requirements drive the audit-readiness defaults. Annual + ad-hoc inspections generate audit-package PDFs with full chain-of-custody, personnel qualification matrix, calibration records, and procedure revision history pre-assembled."
    ],
    [
      "What languages and currencies are supported for Bangkok?",
      "Platform supports English (primary), and where relevant for Thailand: Arabic (Gulf), Bahasa Indonesia, Hindi/Marathi/Telugu (India), Mandarin (China/SG), Spanish/Portuguese (Americas), French (West Africa/Canada). Invoicing supports USD, EUR, GBP, AED, SAR, INR, SGD, AUD, CAD, IDR, MYR, QAR, NGN — full multi-currency with VAT/GST as applicable."
    ],
    [
      "Can corrosion rates be computed automatically from UT thickness data?",
      "No. Atlantis ERP stores each UT thickness reading against its TML with the instrument, calibration record and technician, shows the thickness trend, and flags outlier readings for inspector review. The short-term and long-term corrosion rates under API 570 / API 653 are calculated by the inspector and can be recorded against the TML."
    ]
  ],
  "lat": 13.7563,
  "lng": 100.5018
};
export default function ErpMC_corrosion_tracking_bangkok() { return <ErpModuleCityPage {...data} />; }
