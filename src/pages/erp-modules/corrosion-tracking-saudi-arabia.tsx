import ErpModuleCityPage from '@/components/ErpModuleCityPage';
const data = {
  "moduleSlug": "corrosion-tracking",
  "moduleName": "Corrosion Tracking",
  "citySlug": "saudi-arabia",
  "cityName": "Saudi Arabia",
  "country": "Saudi Arabia",
  "title": "Corrosion Tracking in Saudi Arabia",
  "desc": "Pre-configured for Saudi Aramco upstream/downstream, SABIC petrochemicals and aligned with HRSD, GAMI. Demo: info@atlantisndt.com.",
  "intro": "Corrosion is the dominant degradation mechanism for ~85% of refinery and petrochemical equipment. Quantifying corrosion rates, projecting remaining life, screening damage mechanisms, and using all of this to set code-based inspection intervals is the heart of any modern integrity program.\n\nFor inspection teams operating in Saudi Arabia, Saudi Arabia, the corrosion tracking module is configured against local realities: World's largest integrated oil & gas. SAEP-1112 / SAEP-1142. Vision 2030 mega-projects. Pre-built templates support operator-specific quality clauses from Saudi Aramco upstream/downstream, SABIC petrochemicals, Ma'aden mining, SADAF, and regulatory frameworks under HRSD, GAMI, SASO are reflected in the workflow defaults. Atlantis NDT ERP is delivered as multi-tenant SaaS with regional data residency — a 5-person Saudi Arabia inspection contractor and a 200-person multinational both run on the same platform.",
  "cityFeatures": [
    "Per-TML thickness history, with the short-term and long-term corrosion rates the inspector calculates stored alongside",
    "Wall-thickness trend per TML against the t-min and retirement thickness the inspector sets",
    "Damage mechanism records per API 571, as assigned by the integrity engineer",
    "Tailored for Saudi Arabia workflow — pre-configured operator templates for Saudi Aramco upstream/downstream, SABIC petrochemicals, Ma'aden mining",
    "Regulatory alignment with HRSD, GAMI, SASO — audit-ready evidence packages"
  ],
  "cityUseCases": [
    "A mid-size Saudi Arabia inspection contractor serving Saudi Aramco upstream/downstream and SABIC petrochemicals deploys corrosion tracking as a standalone module — replacing spreadsheets and disconnected SaaS — and reports 60-80% admin-time reduction within 90 days.",
    "A Saudi Arabia EPC quality team standardizes corrosion tracking across 4 simultaneous project sites in the Saudi Arabia market. Daily reports, audit packages, and customer-format reports flow to Ma'aden mining portals automatically.",
    "A growing Saudi Arabia-based service provider integrates corrosion tracking with accounting (QuickBooks / Xero / Tally for India / Sage / Reliance ERP) and the CMMS used by SADAF — eliminating duplicate data entry and reducing customer-facing report turnaround from 5 days to <24 hours.",
    "A regulator-audit-driven Saudi Arabia inspection company uses corrosion tracking to pass HRSD and GAMI audits with zero findings — evidence packages assembled in 30 seconds vs. 80+ hours of manual prep."
  ],
  "cityOperators": [
    "Saudi Aramco upstream/downstream",
    "SABIC petrochemicals",
    "Ma'aden mining",
    "SADAF",
    "KEMYA",
    "Yanpet",
    "PetroRabigh",
    "YASREF"
  ],
  "cityRegulators": [
    "HRSD",
    "GAMI",
    "SASO",
    "Aramco SAEP",
    "MODON",
    "RCJY (Royal Commission Jubail/Yanbu)"
  ],
  "cityPain": [
    "Corrosion Tracking tracked in spreadsheets — always 2 months behind Saudi Arabia operator-portal requirements",
    "HRSD audit preparation takes 80+ hours per cycle — finds gaps too late to remediate",
    "Operator-portal flow-down from Saudi Aramco upstream/downstream updates monthly — internal procedures lag by weeks",
    "Customer-format reports for SABIC petrochemicals, Ma'aden mining, SADAF require manual reformatting per submission"
  ],
  "faqs": [
    [
      "Is the corrosion tracking module configured for Saudi Arabia operators?",
      "Yes. Pre-loaded operator-specific quality clauses, qualification schemes, and report formats for Saudi Aramco upstream/downstream, SABIC petrochemicals, Ma'aden mining, SADAF, KEMYA. Atlantis NDT updates the operator-template library on a quarterly cadence so flow-down stays current with operator specification revisions."
    ],
    [
      "Does it comply with HRSD and other Saudi Arabia regulators?",
      "Yes. HRSD, GAMI, SASO, Aramco SAEP requirements drive the audit-readiness defaults. Annual + ad-hoc inspections generate audit-package PDFs with full chain-of-custody, personnel qualification matrix, calibration records, and procedure revision history pre-assembled."
    ],
    [
      "What languages and currencies are supported for Saudi Arabia?",
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
export default function ErpMC_corrosion_tracking_saudi_arabia() { return <ErpModuleCityPage {...data} />; }
