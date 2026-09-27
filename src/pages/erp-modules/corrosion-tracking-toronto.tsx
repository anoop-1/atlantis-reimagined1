import ErpModuleCityPage from '@/components/ErpModuleCityPage';
const data = {
  "moduleSlug": "corrosion-tracking",
  "moduleName": "Corrosion Tracking",
  "citySlug": "toronto",
  "cityName": "Toronto",
  "country": "Canada",
  "title": "Corrosion Tracking in Toronto",
  "desc": "Pre-configured for Bruce Power (8-unit CANDU), Ontario Power Generation (Darlington, Pickering) and aligned with CNSC Canadian Nuclear Safety Commission, TSSA Ontario. Demo: info@atlantisndt.com.",
  "intro": "Corrosion is the dominant degradation mechanism for ~85% of refinery and petrochemical equipment. Quantifying corrosion rates, projecting remaining life, screening damage mechanisms, and using all of this to set code-based inspection intervals is the heart of any modern integrity program.\n\nFor inspection teams operating in Toronto, Canada, the corrosion tracking module is configured against local realities: Ontario nuclear + steel + mining corporate hub. Bruce, Darlington, Pickering CANDU stations. Pre-built templates support operator-specific quality clauses from Bruce Power (8-unit CANDU), Ontario Power Generation (Darlington, Pickering), ArcelorMittal Dofasco (Hamilton), Stelco (Hamilton), and regulatory frameworks under CNSC Canadian Nuclear Safety Commission, TSSA Ontario, CSA Group are reflected in the workflow defaults. Atlantis NDT ERP is delivered as multi-tenant SaaS with regional data residency — a 5-person Toronto inspection contractor and a 200-person multinational both run on the same platform.",
  "cityFeatures": [
    "Per-TML corrosion rate calculation (short-term and long-term) per API methodology",
    "Wall-thickness projection with t-min, t-required, retirement-date forecasting",
    "Damage mechanism screening per API 571 with susceptibility scoring",
    "Tailored for Toronto workflow — pre-configured operator templates for Bruce Power (8-unit CANDU), Ontario Power Generation (Darlington, Pickering), ArcelorMittal Dofasco (Hamilton)",
    "Regulatory alignment with CNSC Canadian Nuclear Safety Commission, TSSA Ontario, CSA Group — audit-ready evidence packages"
  ],
  "cityUseCases": [
    "A mid-size Toronto inspection contractor serving Bruce Power (8-unit CANDU) and Ontario Power Generation (Darlington, Pickering) deploys corrosion tracking as a standalone module — replacing spreadsheets and disconnected SaaS — and reports 60-80% admin-time reduction within 90 days.",
    "A Toronto EPC quality team standardizes corrosion tracking across 4 simultaneous project sites in the Canada market. Daily reports, audit packages, and customer-format reports flow to ArcelorMittal Dofasco (Hamilton) portals automatically.",
    "A growing Toronto-based service provider integrates corrosion tracking with accounting (QuickBooks / Xero / Tally for India / Sage / Reliance ERP) and the CMMS used by Stelco (Hamilton) — eliminating duplicate data entry and reducing customer-facing report turnaround from 5 days to <24 hours.",
    "A regulator-audit-driven Toronto inspection company uses corrosion tracking to pass CNSC Canadian Nuclear Safety Commission and TSSA Ontario audits with zero findings — evidence packages assembled in 30 seconds vs. 80+ hours of manual prep."
  ],
  "cityOperators": [
    "Bruce Power (8-unit CANDU)",
    "Ontario Power Generation (Darlington, Pickering)",
    "ArcelorMittal Dofasco (Hamilton)",
    "Stelco (Hamilton)",
    "Suncor Sarnia refinery",
    "Imperial Oil Sarnia",
    "Nova Chemicals Corunna",
    "Toronto Pearson MRO"
  ],
  "cityRegulators": [
    "CNSC Canadian Nuclear Safety Commission",
    "TSSA Ontario",
    "CSA Group",
    "ESA Ontario",
    "Health Canada radiation"
  ],
  "cityPain": [
    "Corrosion Tracking tracked in spreadsheets — always 2 months behind Toronto operator-portal requirements",
    "CNSC Canadian Nuclear Safety Commission audit preparation takes 80+ hours per cycle — finds gaps too late to remediate",
    "Operator-portal flow-down from Bruce Power (8-unit CANDU) updates monthly — internal procedures lag by weeks",
    "Customer-format reports for Ontario Power Generation (Darlington, Pickering), ArcelorMittal Dofasco (Hamilton), Stelco (Hamilton) require manual reformatting per submission"
  ],
  "faqs": [
    [
      "Is the corrosion tracking module configured for Toronto operators?",
      "Yes. Pre-loaded operator-specific quality clauses, qualification schemes, and report formats for Bruce Power (8-unit CANDU), Ontario Power Generation (Darlington, Pickering), ArcelorMittal Dofasco (Hamilton), Stelco (Hamilton), Suncor Sarnia refinery. Atlantis NDT updates the operator-template library on a quarterly cadence so flow-down stays current with operator specification revisions."
    ],
    [
      "Does it comply with CNSC Canadian Nuclear Safety Commission and other Canada regulators?",
      "Yes. CNSC Canadian Nuclear Safety Commission, TSSA Ontario, CSA Group, ESA Ontario requirements drive the audit-readiness defaults. Annual + ad-hoc inspections generate audit-package PDFs with full chain-of-custody, personnel qualification matrix, calibration records, and procedure revision history pre-assembled."
    ],
    [
      "What languages and currencies are supported for Toronto?",
      "Platform supports English (primary), and where relevant for Canada: Arabic (Gulf), Bahasa Indonesia, Hindi/Marathi/Telugu (India), Mandarin (China/SG), Spanish/Portuguese (Americas), French (West Africa/Canada). Invoicing supports USD, EUR, GBP, AED, SAR, INR, SGD, AUD, CAD, IDR, MYR, QAR, NGN — full multi-currency with VAT/GST as applicable."
    ],
    [
      "Can corrosion rates be computed automatically from UT thickness data?",
      "Yes. When UT thickness readings are entered against a TML the system recomputes short-term corrosion rate (most recent inspection vs. previous) and long-term corrosion rate (most recent vs. baseline). Both rates are stored and the larger absolute value is used for projection per API 570 §7.1.1 / API 653 §6.4. Outlier readings are auto-flagged for inspector review."
    ]
  ],
  "lat": 43.6532,
  "lng": -79.3832
};
export default function ErpMC_corrosion_tracking_toronto() { return <ErpModuleCityPage {...data} />; }
