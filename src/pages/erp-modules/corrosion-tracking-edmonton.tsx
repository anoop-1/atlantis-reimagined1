import ErpModuleCityPage from '@/components/ErpModuleCityPage';
const data = {
  "moduleSlug": "corrosion-tracking",
  "moduleName": "Corrosion Tracking",
  "citySlug": "edmonton",
  "cityName": "Edmonton",
  "country": "Canada",
  "title": "Corrosion Tracking in Edmonton",
  "desc": "Pre-configured for Imperial Oil Strathcona refinery, Suncor Edmonton refinery and aligned with ABSA pressure equipment, AER Alberta Energy Regulator. Demo: info@atlantisndt.com.",
  "intro": "Corrosion is the dominant degradation mechanism for ~85% of refinery and petrochemical equipment. Quantifying corrosion rates, projecting remaining life, screening damage mechanisms, and using all of this to set code-based inspection intervals is the heart of any modern integrity program.\n\nFor inspection teams operating in Edmonton, Canada, the corrosion tracking module is configured against local realities: Alberta Industrial Heartland. Imperial Strathcona, Suncor Edmonton, Shell Scotford, NWR Sturgeon refineries. Pre-built templates support operator-specific quality clauses from Imperial Oil Strathcona refinery, Suncor Edmonton refinery, Shell Scotford (refinery + upgrader), NWR Sturgeon Refinery, and regulatory frameworks under ABSA pressure equipment, AER Alberta Energy Regulator, CER pipelines are reflected in the workflow defaults. Atlantis NDT ERP is delivered as multi-tenant SaaS with regional data residency — a 5-person Edmonton inspection contractor and a 200-person multinational both run on the same platform.",
  "cityFeatures": [
    "Per-TML thickness history, with the short-term and long-term corrosion rates the inspector calculates stored alongside",
    "Wall-thickness trend per TML against the t-min and retirement thickness the inspector sets",
    "Damage mechanism records per API 571, as assigned by the integrity engineer",
    "Tailored for Edmonton workflow — pre-configured operator templates for Imperial Oil Strathcona refinery, Suncor Edmonton refinery, Shell Scotford (refinery + upgrader)",
    "Regulatory alignment with ABSA pressure equipment, AER Alberta Energy Regulator, CER pipelines — audit-ready evidence packages"
  ],
  "cityUseCases": [
    "A mid-size Edmonton inspection contractor serving Imperial Oil Strathcona refinery and Suncor Edmonton refinery deploys corrosion tracking as a standalone module — replacing spreadsheets and disconnected SaaS — and reports 60-80% admin-time reduction within 90 days.",
    "A Edmonton EPC quality team standardizes corrosion tracking across 4 simultaneous project sites in the Canada market. Daily reports, audit packages, and customer-format reports flow to Shell Scotford (refinery + upgrader) portals automatically.",
    "A growing Edmonton-based service provider integrates corrosion tracking with accounting (QuickBooks / Xero / Tally for India / Sage / Reliance ERP) and the CMMS used by NWR Sturgeon Refinery — eliminating duplicate data entry and reducing customer-facing report turnaround from 5 days to <24 hours.",
    "A regulator-audit-driven Edmonton inspection company uses corrosion tracking to pass ABSA pressure equipment and AER Alberta Energy Regulator audits with zero findings — evidence packages assembled in 30 seconds vs. 80+ hours of manual prep."
  ],
  "cityOperators": [
    "Imperial Oil Strathcona refinery",
    "Suncor Edmonton refinery",
    "Shell Scotford (refinery + upgrader)",
    "NWR Sturgeon Refinery",
    "Inter Pipeline HPC",
    "Pembina Pipeline",
    "Dow Fort Saskatchewan",
    "Nutrien Redwater"
  ],
  "cityRegulators": [
    "ABSA pressure equipment",
    "AER Alberta Energy Regulator",
    "CER pipelines",
    "CSA Group",
    "Transport Canada radiation",
    "Alberta OHS"
  ],
  "cityPain": [
    "Corrosion Tracking tracked in spreadsheets — always 2 months behind Edmonton operator-portal requirements",
    "ABSA pressure equipment audit preparation takes 80+ hours per cycle — finds gaps too late to remediate",
    "Operator-portal flow-down from Imperial Oil Strathcona refinery updates monthly — internal procedures lag by weeks",
    "Customer-format reports for Suncor Edmonton refinery, Shell Scotford (refinery + upgrader), NWR Sturgeon Refinery require manual reformatting per submission"
  ],
  "faqs": [
    [
      "Is the corrosion tracking module configured for Edmonton operators?",
      "Yes. Pre-loaded operator-specific quality clauses, qualification schemes, and report formats for Imperial Oil Strathcona refinery, Suncor Edmonton refinery, Shell Scotford (refinery + upgrader), NWR Sturgeon Refinery, Inter Pipeline HPC. Atlantis NDT updates the operator-template library on a quarterly cadence so flow-down stays current with operator specification revisions."
    ],
    [
      "Does it comply with ABSA pressure equipment and other Canada regulators?",
      "Yes. ABSA pressure equipment, AER Alberta Energy Regulator, CER pipelines, CSA Group requirements drive the audit-readiness defaults. Annual + ad-hoc inspections generate audit-package PDFs with full chain-of-custody, personnel qualification matrix, calibration records, and procedure revision history pre-assembled."
    ],
    [
      "What languages and currencies are supported for Edmonton?",
      "Platform supports English (primary), and where relevant for Canada: Arabic (Gulf), Bahasa Indonesia, Hindi/Marathi/Telugu (India), Mandarin (China/SG), Spanish/Portuguese (Americas), French (West Africa/Canada). Invoicing supports USD, EUR, GBP, AED, SAR, INR, SGD, AUD, CAD, IDR, MYR, QAR, NGN — full multi-currency with VAT/GST as applicable."
    ],
    [
      "Can corrosion rates be computed automatically from UT thickness data?",
      "No. Atlantis ERP stores each UT thickness reading against its TML with the instrument, calibration record and technician, shows the thickness trend, and flags outlier readings for inspector review. The short-term and long-term corrosion rates under API 570 / API 653 are calculated by the inspector and can be recorded against the TML."
    ]
  ],
  "lat": 53.5461,
  "lng": -113.4938
};
export default function ErpMC_corrosion_tracking_edmonton() { return <ErpModuleCityPage {...data} />; }
