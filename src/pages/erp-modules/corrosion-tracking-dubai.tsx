import ErpModuleCityPage from '@/components/ErpModuleCityPage';
const data = {
  "moduleSlug": "corrosion-tracking",
  "moduleName": "Corrosion Tracking",
  "citySlug": "dubai",
  "cityName": "Dubai",
  "country": "UAE",
  "title": "Corrosion Tracking in Dubai",
  "desc": "Pre-configured for ADNOC Distribution, ENOC and aligned with ADQCC, MOIAT. Demo: info@atlantisndt.com.",
  "intro": "Corrosion is the dominant degradation mechanism for ~85% of refinery and petrochemical equipment. Quantifying corrosion rates, projecting remaining life, screening damage mechanisms, and using all of this to set code-based inspection intervals is the heart of any modern integrity program.\n\nFor inspection teams operating in Dubai, UAE, the corrosion tracking module is configured against local realities: Regional HQ city for GCC oil & gas. EPC contractors, inspection service multinationals. Pre-built templates support operator-specific quality clauses from ADNOC Distribution, ENOC, DUBAL aluminum, DEWA power, and regulatory frameworks under ADQCC, MOIAT, Dubai Municipality are reflected in the workflow defaults. Atlantis NDT ERP is delivered as multi-tenant SaaS with regional data residency — a 5-person Dubai inspection contractor and a 200-person multinational both run on the same platform.",
  "cityFeatures": [
    "Per-TML corrosion rate calculation (short-term and long-term) per API methodology",
    "Wall-thickness projection with t-min, t-required, retirement-date forecasting",
    "Damage mechanism screening per API 571 with susceptibility scoring",
    "Tailored for Dubai workflow — pre-configured operator templates for ADNOC Distribution, ENOC, DUBAL aluminum",
    "Regulatory alignment with ADQCC, MOIAT, Dubai Municipality — audit-ready evidence packages"
  ],
  "cityUseCases": [
    "A mid-size Dubai inspection contractor serving ADNOC Distribution and ENOC deploys corrosion tracking as a standalone module — replacing spreadsheets and disconnected SaaS — and reports 60-80% admin-time reduction within 90 days.",
    "A Dubai EPC quality team standardizes corrosion tracking across 4 simultaneous project sites in the UAE market. Daily reports, audit packages, and customer-format reports flow to DUBAL aluminum portals automatically.",
    "A growing Dubai-based service provider integrates corrosion tracking with accounting (QuickBooks / Xero / Tally for India / Sage / Reliance ERP) and the CMMS used by DEWA power — eliminating duplicate data entry and reducing customer-facing report turnaround from 5 days to <24 hours.",
    "A regulator-audit-driven Dubai inspection company uses corrosion tracking to pass ADQCC and MOIAT audits with zero findings — evidence packages assembled in 30 seconds vs. 80+ hours of manual prep."
  ],
  "cityOperators": [
    "ADNOC Distribution",
    "ENOC",
    "DUBAL aluminum",
    "DEWA power",
    "Dragon Oil",
    "Wood UAE",
    "Petrofac Dubai",
    "Sharjah National Oil Co"
  ],
  "cityRegulators": [
    "ADQCC",
    "MOIAT",
    "Dubai Municipality",
    "DCAS",
    "Dubai Civil Defence"
  ],
  "cityPain": [
    "Corrosion Tracking tracked in spreadsheets — always 2 months behind Dubai operator-portal requirements",
    "ADQCC audit preparation takes 80+ hours per cycle — finds gaps too late to remediate",
    "Operator-portal flow-down from ADNOC Distribution updates monthly — internal procedures lag by weeks",
    "Customer-format reports for ENOC, DUBAL aluminum, DEWA power require manual reformatting per submission"
  ],
  "faqs": [
    [
      "Is the corrosion tracking module configured for Dubai operators?",
      "Yes. Pre-loaded operator-specific quality clauses, qualification schemes, and report formats for ADNOC Distribution, ENOC, DUBAL aluminum, DEWA power, Dragon Oil. Atlantis NDT updates the operator-template library on a quarterly cadence so flow-down stays current with operator specification revisions."
    ],
    [
      "Does it comply with ADQCC and other UAE regulators?",
      "Yes. ADQCC, MOIAT, Dubai Municipality, DCAS requirements drive the audit-readiness defaults. Annual + ad-hoc inspections generate audit-package PDFs with full chain-of-custody, personnel qualification matrix, calibration records, and procedure revision history pre-assembled."
    ],
    [
      "What languages and currencies are supported for Dubai?",
      "Platform supports English (primary), and where relevant for UAE: Arabic (Gulf), Bahasa Indonesia, Hindi/Marathi/Telugu (India), Mandarin (China/SG), Spanish/Portuguese (Americas), French (West Africa/Canada). Invoicing supports USD, EUR, GBP, AED, SAR, INR, SGD, AUD, CAD, IDR, MYR, QAR, NGN — full multi-currency with VAT/GST as applicable."
    ],
    [
      "Can corrosion rates be computed automatically from UT thickness data?",
      "Yes. When UT thickness readings are entered against a TML the system recomputes short-term corrosion rate (most recent inspection vs. previous) and long-term corrosion rate (most recent vs. baseline). Both rates are stored and the larger absolute value is used for projection per API 570 §7.1.1 / API 653 §6.4. Outlier readings are auto-flagged for inspector review."
    ]
  ],
  "lat": 25.276987,
  "lng": 55.296249
};
export default function ErpMC_corrosion_tracking_dubai() { return <ErpModuleCityPage {...data} />; }
