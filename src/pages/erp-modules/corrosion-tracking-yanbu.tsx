import ErpModuleCityPage from '@/components/ErpModuleCityPage';
const data = {
  "moduleSlug": "corrosion-tracking",
  "moduleName": "Corrosion Tracking & RBI",
  "citySlug": "yanbu",
  "cityName": "Yanbu",
  "country": "Saudi Arabia",
  "title": "Corrosion Tracking & RBI in Yanbu",
  "desc": "Corrosion Tracking & RBI ERP module for inspection companies in Yanbu, Saudi Arabia. Pre-configured for YASREF (Aramco / Sinopec), Aramco Yanbu Refinery and aligned with Royal Commission Yanbu (RCJY), HRSD labor. Demo: info@atlantisndt.com.",
  "intro": "Corrosion is the dominant degradation mechanism for ~85% of refinery and petrochemical equipment. Quantifying corrosion rates, projecting remaining life, screening damage mechanisms, and using all of this to drive risk-based inspection (RBI) plans is the heart of any modern integrity program.\n\nFor inspection teams operating in Yanbu, Saudi Arabia, the corrosion tracking & rbi module is configured against local realities: KSA western refining/petrochem hub. East-West pipeline terminus. Gateway to NEOM and Red Sea megaprojects. Pre-built templates support operator-specific quality clauses from YASREF (Aramco / Sinopec), Aramco Yanbu Refinery, Yanpet (SABIC / ExxonMobil), Yansab (SABIC), and regulatory frameworks under Royal Commission Yanbu (RCJY), HRSD labor, SASO standards are reflected in the workflow defaults. Atlantis NDT ERP is delivered as multi-tenant SaaS with regional data residency — a 5-person Yanbu inspection contractor and a 200-person multinational both run on the same platform.",
  "cityFeatures": [
    "Per-TML corrosion rate calculation (short-term and long-term) per API methodology",
    "Wall-thickness projection with t-min, t-required, retirement-date forecasting",
    "Damage mechanism screening per API 571 with susceptibility scoring",
    "Risk-based inspection (RBI) per API 581: POF (damage factor) + COF (financial / safety / environmental)",
    "RBI risk-matrix dashboard (5x5 typical) with equipment ranking by risk score",
    "Inspection effectiveness scoring per API 581 Annex 2.C (highly effective / fairly effective / poorly effective)",
    "Tailored for Yanbu workflow — pre-configured operator templates for YASREF (Aramco / Sinopec), Aramco Yanbu Refinery, Yanpet (SABIC / ExxonMobil)",
    "Regulatory alignment with Royal Commission Yanbu (RCJY), HRSD labor, SASO standards — audit-ready evidence packages"
  ],
  "cityUseCases": [
    "A mid-size Yanbu inspection contractor serving YASREF (Aramco / Sinopec) and Aramco Yanbu Refinery deploys corrosion tracking & rbi as a standalone module — replacing spreadsheets and disconnected SaaS — and reports 60-80% admin-time reduction within 90 days.",
    "A Yanbu EPC quality team standardizes corrosion tracking & rbi across 4 simultaneous project sites in the Saudi Arabia market. Daily reports, audit packages, and customer-format reports flow to Yanpet (SABIC / ExxonMobil) portals automatically.",
    "A growing Yanbu-based service provider integrates corrosion tracking & rbi with accounting (QuickBooks / Xero / Tally for India / Sage / Reliance ERP) and the CMMS used by Yansab (SABIC) — eliminating duplicate data entry and reducing customer-facing report turnaround from 5 days to <24 hours.",
    "A regulator-audit-driven Yanbu inspection company uses corrosion tracking & rbi to pass Royal Commission Yanbu (RCJY) and HRSD labor audits with zero findings — evidence packages assembled in 30 seconds vs. 80+ hours of manual prep."
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
    "Corrosion Tracking & RBI tracked in spreadsheets — always 2 months behind Yanbu operator-portal requirements",
    "Royal Commission Yanbu (RCJY) audit preparation takes 80+ hours per cycle — finds gaps too late to remediate",
    "Operator-portal flow-down from YASREF (Aramco / Sinopec) updates monthly — internal procedures lag by weeks",
    "Customer-format reports for Aramco Yanbu Refinery, Yanpet (SABIC / ExxonMobil), Yansab (SABIC) require manual reformatting per submission"
  ],
  "faqs": [
    [
      "Is the corrosion tracking & rbi module configured for Yanbu operators?",
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
      "Does it implement the full API 581 RBI methodology?",
      "Yes. Both Part 2 (qualitative) and Part 3 (quantitative) workflows are supported. The damage-factor calculation engine implements all DMs in API 581 Annex 2 — thinning, SCC, HTHA, brittle fracture, external corrosion, mechanical fatigue, etc. The COF engine implements both financial-consequence (modified Part 5) and safety / environmental consequence models. Risk = POF × COF per Part 3 §5."
    ],
    [
      "Can corrosion rates be computed automatically from UT thickness data?",
      "Yes. When UT thickness readings are entered against a TML the system recomputes short-term corrosion rate (most recent inspection vs. previous) and long-term corrosion rate (most recent vs. baseline). Both rates are stored and the larger absolute value is used for projection per API 570 §7.1.1 / API 653 §6.4. Outlier readings are auto-flagged for inspector review."
    ]
  ],
  "lat": 24.089,
  "lng": 38.0618
};
export default function ErpMC_corrosion_tracking_yanbu() { return <ErpModuleCityPage {...data} />; }
