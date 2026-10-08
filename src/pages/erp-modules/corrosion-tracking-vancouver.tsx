import ErpModuleCityPage from '@/components/ErpModuleCityPage';
const data = {
  "moduleSlug": "corrosion-tracking",
  "moduleName": "Corrosion Tracking",
  "citySlug": "vancouver",
  "cityName": "Vancouver",
  "country": "Canada",
  "title": "Corrosion Tracking in Vancouver",
  "desc": "Pre-configured for Trans Mountain (TMX pipeline), Parkland Burnaby refinery and aligned with Technical Safety BC (TSBC), BC Energy Regulator (BCER). Demo: info@atlantisndt.com.",
  "intro": "Corrosion is the dominant degradation mechanism for ~85% of refinery and petrochemical equipment. Quantifying corrosion rates, projecting remaining life, screening damage mechanisms, and using all of this to set code-based inspection intervals is the heart of any modern integrity program.\n\nFor inspection teams operating in Vancouver, Canada, the corrosion tracking module is configured against local realities: BC Pacific gateway. TMX pipeline + Westridge terminal, Parkland Burnaby refinery, LNG Canada Kitimat upstream. Pre-built templates support operator-specific quality clauses from Trans Mountain (TMX pipeline), Parkland Burnaby refinery, LNG Canada (Shell-led JV), Coastal GasLink (TC Energy), and regulatory frameworks under Technical Safety BC (TSBC), BC Energy Regulator (BCER), Transport Canada are reflected in the workflow defaults. Atlantis NDT ERP is delivered as multi-tenant SaaS with regional data residency — a 5-person Vancouver inspection contractor and a 200-person multinational both run on the same platform.",
  "cityFeatures": [
    "Per-TML thickness history, with the short-term and long-term corrosion rates the inspector calculates stored alongside",
    "Wall-thickness trend per TML against the t-min and retirement thickness the inspector sets",
    "Damage mechanism records per API 571, as assigned by the integrity engineer",
    "Tailored for Vancouver workflow — pre-configured operator templates for Trans Mountain (TMX pipeline), Parkland Burnaby refinery, LNG Canada (Shell-led JV)",
    "Regulatory alignment with Technical Safety BC (TSBC), BC Energy Regulator (BCER), Transport Canada — audit-ready evidence packages"
  ],
  "cityUseCases": [
    "A mid-size Vancouver inspection contractor serving Trans Mountain (TMX pipeline) and Parkland Burnaby refinery deploys corrosion tracking as a standalone module — replacing spreadsheets and disconnected SaaS — and reports 60-80% admin-time reduction within 90 days.",
    "A Vancouver EPC quality team standardizes corrosion tracking across 4 simultaneous project sites in the Canada market. Daily reports, audit packages, and customer-format reports flow to LNG Canada (Shell-led JV) portals automatically.",
    "A growing Vancouver-based service provider integrates corrosion tracking with accounting (QuickBooks / Xero / Tally for India / Sage / Reliance ERP) and the CMMS used by Coastal GasLink (TC Energy) — eliminating duplicate data entry and reducing customer-facing report turnaround from 5 days to <24 hours.",
    "A regulator-audit-driven Vancouver inspection company uses corrosion tracking to pass Technical Safety BC (TSBC) and BC Energy Regulator (BCER) audits with zero findings — evidence packages assembled in 30 seconds vs. 80+ hours of manual prep."
  ],
  "cityOperators": [
    "Trans Mountain (TMX pipeline)",
    "Parkland Burnaby refinery",
    "LNG Canada (Shell-led JV)",
    "Coastal GasLink (TC Energy)",
    "Seaspan Shipyards",
    "BC Ferries",
    "Teck Resources",
    "Methanex"
  ],
  "cityRegulators": [
    "Technical Safety BC (TSBC)",
    "BC Energy Regulator (BCER)",
    "Transport Canada",
    "CER Canada Energy Regulator",
    "WorkSafeBC"
  ],
  "cityPain": [
    "Corrosion Tracking tracked in spreadsheets — always 2 months behind Vancouver operator-portal requirements",
    "Technical Safety BC (TSBC) audit preparation takes 80+ hours per cycle — finds gaps too late to remediate",
    "Operator-portal flow-down from Trans Mountain (TMX pipeline) updates monthly — internal procedures lag by weeks",
    "Customer-format reports for Parkland Burnaby refinery, LNG Canada (Shell-led JV), Coastal GasLink (TC Energy) require manual reformatting per submission"
  ],
  "faqs": [
    [
      "Is the corrosion tracking module configured for Vancouver operators?",
      "Yes. Pre-loaded operator-specific quality clauses, qualification schemes, and report formats for Trans Mountain (TMX pipeline), Parkland Burnaby refinery, LNG Canada (Shell-led JV), Coastal GasLink (TC Energy), Seaspan Shipyards. Atlantis NDT updates the operator-template library on a quarterly cadence so flow-down stays current with operator specification revisions."
    ],
    [
      "Does it comply with Technical Safety BC (TSBC) and other Canada regulators?",
      "Yes. Technical Safety BC (TSBC), BC Energy Regulator (BCER), Transport Canada, CER Canada Energy Regulator requirements drive the audit-readiness defaults. Annual + ad-hoc inspections generate audit-package PDFs with full chain-of-custody, personnel qualification matrix, calibration records, and procedure revision history pre-assembled."
    ],
    [
      "What languages and currencies are supported for Vancouver?",
      "Platform supports English (primary), and where relevant for Canada: Arabic (Gulf), Bahasa Indonesia, Hindi/Marathi/Telugu (India), Mandarin (China/SG), Spanish/Portuguese (Americas), French (West Africa/Canada). Invoicing supports USD, EUR, GBP, AED, SAR, INR, SGD, AUD, CAD, IDR, MYR, QAR, NGN — full multi-currency with VAT/GST as applicable."
    ],
    [
      "Can corrosion rates be computed automatically from UT thickness data?",
      "No. Atlantis ERP stores each UT thickness reading against its TML with the instrument, calibration record and technician, shows the thickness trend, and flags outlier readings for inspector review. The short-term and long-term corrosion rates under API 570 / API 653 are calculated by the inspector and can be recorded against the TML."
    ]
  ],
  "lat": 49.2827,
  "lng": -123.1207
};
export default function ErpMC_corrosion_tracking_vancouver() { return <ErpModuleCityPage {...data} />; }
