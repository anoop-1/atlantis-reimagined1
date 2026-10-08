import ErpModuleCityPage from '@/components/ErpModuleCityPage';
const data = {
  "moduleSlug": "corrosion-tracking",
  "moduleName": "Corrosion Tracking",
  "citySlug": "abu-dhabi",
  "cityName": "Abu Dhabi",
  "country": "UAE",
  "title": "Corrosion Tracking in Abu Dhabi",
  "desc": "Pre-configured for ADNOC Onshore, ADNOC LNG and aligned with ADNOC HSE, ADQCC. Demo: info@atlantisndt.com.",
  "intro": "Corrosion is the dominant degradation mechanism for ~85% of refinery and petrochemical equipment. Quantifying corrosion rates, projecting remaining life, screening damage mechanisms, and using all of this to set code-based inspection intervals is the heart of any modern integrity program.\n\nFor inspection teams operating in Abu Dhabi, UAE, the corrosion tracking module is configured against local realities: ADNOC controls 94% of UAE reserves. Ruwais industrial complex. Sour gas processing. Pre-built templates support operator-specific quality clauses from ADNOC Onshore, ADNOC LNG, Borouge polyethylene, Fertil ammonia/urea, and regulatory frameworks under ADNOC HSE, ADQCC, Federal NCEMA are reflected in the workflow defaults. Atlantis NDT ERP is delivered as multi-tenant SaaS with regional data residency — a 5-person Abu Dhabi inspection contractor and a 200-person multinational both run on the same platform.",
  "cityFeatures": [
    "Per-TML thickness history, with the short-term and long-term corrosion rates the inspector calculates stored alongside",
    "Wall-thickness trend per TML against the t-min and retirement thickness the inspector sets",
    "Damage mechanism records per API 571, as assigned by the integrity engineer",
    "Tailored for Abu Dhabi workflow — pre-configured operator templates for ADNOC Onshore, ADNOC LNG, Borouge polyethylene",
    "Regulatory alignment with ADNOC HSE, ADQCC, Federal NCEMA — audit-ready evidence packages"
  ],
  "cityUseCases": [
    "A mid-size Abu Dhabi inspection contractor serving ADNOC Onshore and ADNOC LNG deploys corrosion tracking as a standalone module — replacing spreadsheets and disconnected SaaS — and reports 60-80% admin-time reduction within 90 days.",
    "A Abu Dhabi EPC quality team standardizes corrosion tracking across 4 simultaneous project sites in the UAE market. Daily reports, audit packages, and customer-format reports flow to Borouge polyethylene portals automatically.",
    "A growing Abu Dhabi-based service provider integrates corrosion tracking with accounting (QuickBooks / Xero / Tally for India / Sage / Reliance ERP) and the CMMS used by Fertil ammonia/urea — eliminating duplicate data entry and reducing customer-facing report turnaround from 5 days to <24 hours.",
    "A regulator-audit-driven Abu Dhabi inspection company uses corrosion tracking to pass ADNOC HSE and ADQCC audits with zero findings — evidence packages assembled in 30 seconds vs. 80+ hours of manual prep."
  ],
  "cityOperators": [
    "ADNOC Onshore",
    "ADNOC LNG",
    "Borouge polyethylene",
    "Fertil ammonia/urea",
    "TAQA power & water",
    "ADNOC Refining Ruwais",
    "ZADCO offshore",
    "ADMA-OPCO"
  ],
  "cityRegulators": [
    "ADNOC HSE",
    "ADQCC",
    "Federal NCEMA",
    "EAD environment"
  ],
  "cityPain": [
    "Corrosion Tracking tracked in spreadsheets — always 2 months behind Abu Dhabi operator-portal requirements",
    "ADNOC HSE audit preparation takes 80+ hours per cycle — finds gaps too late to remediate",
    "Operator-portal flow-down from ADNOC Onshore updates monthly — internal procedures lag by weeks",
    "Customer-format reports for ADNOC LNG, Borouge polyethylene, Fertil ammonia/urea require manual reformatting per submission"
  ],
  "faqs": [
    [
      "Is the corrosion tracking module configured for Abu Dhabi operators?",
      "Yes. Pre-loaded operator-specific quality clauses, qualification schemes, and report formats for ADNOC Onshore, ADNOC LNG, Borouge polyethylene, Fertil ammonia/urea, TAQA power & water. Atlantis NDT updates the operator-template library on a quarterly cadence so flow-down stays current with operator specification revisions."
    ],
    [
      "Does it comply with ADNOC HSE and other UAE regulators?",
      "Yes. ADNOC HSE, ADQCC, Federal NCEMA, EAD environment requirements drive the audit-readiness defaults. Annual + ad-hoc inspections generate audit-package PDFs with full chain-of-custody, personnel qualification matrix, calibration records, and procedure revision history pre-assembled."
    ],
    [
      "What languages and currencies are supported for Abu Dhabi?",
      "Platform supports English (primary), and where relevant for UAE: Arabic (Gulf), Bahasa Indonesia, Hindi/Marathi/Telugu (India), Mandarin (China/SG), Spanish/Portuguese (Americas), French (West Africa/Canada). Invoicing supports USD, EUR, GBP, AED, SAR, INR, SGD, AUD, CAD, IDR, MYR, QAR, NGN — full multi-currency with VAT/GST as applicable."
    ],
    [
      "Can corrosion rates be computed automatically from UT thickness data?",
      "No. Atlantis ERP stores each UT thickness reading against its TML with the instrument, calibration record and technician, shows the thickness trend, and flags outlier readings for inspector review. The short-term and long-term corrosion rates under API 570 / API 653 are calculated by the inspector and can be recorded against the TML."
    ]
  ],
  "lat": 24.453884,
  "lng": 54.3773438
};
export default function ErpMC_corrosion_tracking_abu_dhabi() { return <ErpModuleCityPage {...data} />; }
