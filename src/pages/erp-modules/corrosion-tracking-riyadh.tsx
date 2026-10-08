import ErpModuleCityPage from '@/components/ErpModuleCityPage';
const data = {
  "moduleSlug": "corrosion-tracking",
  "moduleName": "Corrosion Tracking",
  "citySlug": "riyadh",
  "cityName": "Riyadh",
  "country": "Saudi Arabia",
  "title": "Corrosion Tracking in Riyadh",
  "desc": "Pre-configured for Saudi Aramco (corporate HQ), SABIC HQ and aligned with HRSD labor, GAMI. Demo: info@atlantisndt.com.",
  "intro": "Corrosion is the dominant degradation mechanism for ~85% of refinery and petrochemical equipment. Quantifying corrosion rates, projecting remaining life, screening damage mechanisms, and using all of this to set code-based inspection intervals is the heart of any modern integrity program.\n\nFor inspection teams operating in Riyadh, Saudi Arabia, the corrosion tracking module is configured against local realities: Saudi corporate capital. Aramco / SABIC / Ma'aden HQs. Vision 2030 megaproject PMOs. Pre-built templates support operator-specific quality clauses from Saudi Aramco (corporate HQ), SABIC HQ, Ma'aden (mining HQ), NEOM PMO, and regulatory frameworks under HRSD labor, GAMI, SASO standards are reflected in the workflow defaults. Atlantis NDT ERP is delivered as multi-tenant SaaS with regional data residency — a 5-person Riyadh inspection contractor and a 200-person multinational both run on the same platform.",
  "cityFeatures": [
    "Per-TML thickness history, with the short-term and long-term corrosion rates the inspector calculates stored alongside",
    "Wall-thickness trend per TML against the t-min and retirement thickness the inspector sets",
    "Damage mechanism records per API 571, as assigned by the integrity engineer",
    "Tailored for Riyadh workflow — pre-configured operator templates for Saudi Aramco (corporate HQ), SABIC HQ, Ma'aden (mining HQ)",
    "Regulatory alignment with HRSD labor, GAMI, SASO standards — audit-ready evidence packages"
  ],
  "cityUseCases": [
    "A mid-size Riyadh inspection contractor serving Saudi Aramco (corporate HQ) and SABIC HQ deploys corrosion tracking as a standalone module — replacing spreadsheets and disconnected SaaS — and reports 60-80% admin-time reduction within 90 days.",
    "A Riyadh EPC quality team standardizes corrosion tracking across 4 simultaneous project sites in the Saudi Arabia market. Daily reports, audit packages, and customer-format reports flow to Ma'aden (mining HQ) portals automatically.",
    "A growing Riyadh-based service provider integrates corrosion tracking with accounting (QuickBooks / Xero / Tally for India / Sage / Reliance ERP) and the CMMS used by NEOM PMO — eliminating duplicate data entry and reducing customer-facing report turnaround from 5 days to <24 hours.",
    "A regulator-audit-driven Riyadh inspection company uses corrosion tracking to pass HRSD labor and GAMI audits with zero findings — evidence packages assembled in 30 seconds vs. 80+ hours of manual prep."
  ],
  "cityOperators": [
    "Saudi Aramco (corporate HQ)",
    "SABIC HQ",
    "Ma'aden (mining HQ)",
    "NEOM PMO",
    "Qiddiya / Red Sea Global",
    "Saudi Electricity Company",
    "Royal Commission Riyadh City",
    "Riyadh Refinery (Aramco)"
  ],
  "cityRegulators": [
    "HRSD labor",
    "GAMI",
    "SASO standards",
    "Aramco SAEP-1112 / 1142",
    "MODON industrial cities",
    "RCJY"
  ],
  "cityPain": [
    "Corrosion Tracking tracked in spreadsheets — always 2 months behind Riyadh operator-portal requirements",
    "HRSD labor audit preparation takes 80+ hours per cycle — finds gaps too late to remediate",
    "Operator-portal flow-down from Saudi Aramco (corporate HQ) updates monthly — internal procedures lag by weeks",
    "Customer-format reports for SABIC HQ, Ma'aden (mining HQ), NEOM PMO require manual reformatting per submission"
  ],
  "faqs": [
    [
      "Is the corrosion tracking module configured for Riyadh operators?",
      "Yes. Pre-loaded operator-specific quality clauses, qualification schemes, and report formats for Saudi Aramco (corporate HQ), SABIC HQ, Ma'aden (mining HQ), NEOM PMO, Qiddiya / Red Sea Global. Atlantis NDT updates the operator-template library on a quarterly cadence so flow-down stays current with operator specification revisions."
    ],
    [
      "Does it comply with HRSD labor and other Saudi Arabia regulators?",
      "Yes. HRSD labor, GAMI, SASO standards, Aramco SAEP-1112 / 1142 requirements drive the audit-readiness defaults. Annual + ad-hoc inspections generate audit-package PDFs with full chain-of-custody, personnel qualification matrix, calibration records, and procedure revision history pre-assembled."
    ],
    [
      "What languages and currencies are supported for Riyadh?",
      "Platform supports English (primary), and where relevant for Saudi Arabia: Arabic (Gulf), Bahasa Indonesia, Hindi/Marathi/Telugu (India), Mandarin (China/SG), Spanish/Portuguese (Americas), French (West Africa/Canada). Invoicing supports USD, EUR, GBP, AED, SAR, INR, SGD, AUD, CAD, IDR, MYR, QAR, NGN — full multi-currency with VAT/GST as applicable."
    ],
    [
      "Can corrosion rates be computed automatically from UT thickness data?",
      "No. Atlantis ERP stores each UT thickness reading against its TML with the instrument, calibration record and technician, shows the thickness trend, and flags outlier readings for inspector review. The short-term and long-term corrosion rates under API 570 / API 653 are calculated by the inspector and can be recorded against the TML."
    ]
  ],
  "lat": 24.7136,
  "lng": 46.6753
};
export default function ErpMC_corrosion_tracking_riyadh() { return <ErpModuleCityPage {...data} />; }
