import ErpModuleCityPage from '@/components/ErpModuleCityPage';
const data = {
  "moduleSlug": "corrosion-tracking",
  "moduleName": "Corrosion Tracking",
  "citySlug": "yanbu",
  "cityName": "Yanbu",
  "country": "Saudi Arabia",
  "title": "Corrosion Tracking in Yanbu",
  "desc": "Pre-configured for YASREF (Aramco / Sinopec), Aramco Yanbu Refinery and aligned with Royal Commission Yanbu (RCJY), HRSD labor. Demo: info@atlantisndt.com.",
  "intro": "Corrosion is the dominant degradation mechanism for ~85% of refinery and petrochemical equipment. Quantifying corrosion rates, projecting remaining life, screening damage mechanisms, and using all of this to set code-based inspection intervals is the heart of any modern integrity program.\n\nFor inspection teams operating in Yanbu, Saudi Arabia, the corrosion tracking module is configured against local realities: KSA western refining/petrochem hub. East-West pipeline terminus. Gateway to NEOM and Red Sea megaprojects. Pre-built templates support operator-specific quality clauses from YASREF (Aramco / Sinopec), Aramco Yanbu Refinery, Yanpet (SABIC / ExxonMobil), Yansab (SABIC), and regulatory frameworks under Royal Commission Yanbu (RCJY), HRSD labor, SASO standards are reflected in the workflow defaults. Atlantis NDT ERP is delivered as multi-tenant SaaS with regional data residency — a 5-person Yanbu inspection contractor and a 200-person multinational both run on the same platform.",
  "cityFeatures": [
    "Per-TML thickness history, with the short-term and long-term corrosion rates the inspector calculates stored alongside",
    "Wall-thickness trend per TML against the t-min and retirement thickness the inspector sets",
    "Damage mechanism records per API 571, as assigned by the integrity engineer",
    "Tailored for Yanbu workflow — pre-configured operator templates for YASREF (Aramco / Sinopec), Aramco Yanbu Refinery, Yanpet (SABIC / ExxonMobil)",
    "Regulatory alignment with Royal Commission Yanbu (RCJY), HRSD labor, SASO standards — audit-ready evidence packages"
  ],
  "cityUseCases": [
    "A mid-size Yanbu inspection contractor serving YASREF (Aramco / Sinopec) and Aramco Yanbu Refinery deploys corrosion tracking as a standalone module — replacing spreadsheets and disconnected SaaS — and reports 60-80% admin-time reduction within 90 days.",
    "A Yanbu EPC quality team standardizes corrosion tracking across 4 simultaneous project sites in the Saudi Arabia market. Daily reports, audit packages, and customer-format reports flow to Yanpet (SABIC / ExxonMobil) portals automatically.",
    "A growing Yanbu-based service provider integrates corrosion tracking with accounting (QuickBooks / Xero / Tally for India / Sage / Reliance ERP) and the CMMS used by Yansab (SABIC) — eliminating duplicate data entry and reducing customer-facing report turnaround from 5 days to <24 hours.",
    "A regulator-audit-driven Yanbu inspection company uses corrosion tracking to pass Royal Commission Yanbu (RCJY) and HRSD labor audits with zero findings — evidence packages assembled in 30 seconds vs. 80+ hours of manual prep."
  ],
  "cityOperators": [
    "YASREF (Aramco / Sinopec)",
    "Aramco Yanbu Refinery",
    "Yanpet (SABIC / ExxonMobil)",
    "Yansab (SABIC)",
    "Petro Rabigh (Aramco / Sumitomo)",
    "RC Yanbu PMT",
    "Saudi Electricity Yanbu",
    "Yanbu Cement"
  ],
  "cityRegulators": [
    "Royal Commission Yanbu (RCJY)",
    "HRSD labor",
    "SASO standards",
    "Aramco SAEP-1142",
    "Saudi Ports Authority"
  ],
  "cityPain": [
    "Corrosion Tracking tracked in spreadsheets — always 2 months behind Yanbu operator-portal requirements",
    "Royal Commission Yanbu (RCJY) audit preparation takes 80+ hours per cycle — finds gaps too late to remediate",
    "Operator-portal flow-down from YASREF (Aramco / Sinopec) updates monthly — internal procedures lag by weeks",
    "Customer-format reports for Aramco Yanbu Refinery, Yanpet (SABIC / ExxonMobil), Yansab (SABIC) require manual reformatting per submission"
  ],
  "faqs": [
    [
      "Is the corrosion tracking module configured for Yanbu operators?",
      "Yes. Pre-loaded operator-specific quality clauses, qualification schemes, and report formats for YASREF (Aramco / Sinopec), Aramco Yanbu Refinery, Yanpet (SABIC / ExxonMobil), Yansab (SABIC), Petro Rabigh (Aramco / Sumitomo). Atlantis NDT updates the operator-template library on a quarterly cadence so flow-down stays current with operator specification revisions."
    ],
    [
      "Does it comply with Royal Commission Yanbu (RCJY) and other Saudi Arabia regulators?",
      "Yes. Royal Commission Yanbu (RCJY), HRSD labor, SASO standards, Aramco SAEP-1142 requirements drive the audit-readiness defaults. Annual + ad-hoc inspections generate audit-package PDFs with full chain-of-custody, personnel qualification matrix, calibration records, and procedure revision history pre-assembled."
    ],
    [
      "What languages and currencies are supported for Yanbu?",
      "Platform supports English (primary), and where relevant for Saudi Arabia: Arabic (Gulf), Bahasa Indonesia, Hindi/Marathi/Telugu (India), Mandarin (China/SG), Spanish/Portuguese (Americas), French (West Africa/Canada). Invoicing supports USD, EUR, GBP, AED, SAR, INR, SGD, AUD, CAD, IDR, MYR, QAR, NGN — full multi-currency with VAT/GST as applicable."
    ],
    [
      "Can corrosion rates be computed automatically from UT thickness data?",
      "No. Atlantis ERP stores each UT thickness reading against its TML with the instrument, calibration record and technician, shows the thickness trend, and flags outlier readings for inspector review. The short-term and long-term corrosion rates under API 570 / API 653 are calculated by the inspector and can be recorded against the TML."
    ]
  ],
  "lat": 24.089,
  "lng": 38.0618
};
export default function ErpMC_corrosion_tracking_yanbu() { return <ErpModuleCityPage {...data} />; }
