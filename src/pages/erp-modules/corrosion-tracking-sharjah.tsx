import ErpModuleCityPage from '@/components/ErpModuleCityPage';
const data = {
  "moduleSlug": "corrosion-tracking",
  "moduleName": "Corrosion Tracking",
  "citySlug": "sharjah",
  "cityName": "Sharjah",
  "country": "UAE",
  "title": "NDT Corrosion Tracking Software — Sharjah, UAE",
  "desc": "NDT-specific corrosion tracking module — not a generic ERP add-on — pre-configured for SNOC, Crescent Petroleum and Hamriyah Free Zone (HFZA) inspection contractors in Sharjah. API 510/570/653 built in. Free demo.",
  "intro": "Corrosion is the dominant degradation mechanism for ~85% of refinery and petrochemical equipment. Quantifying corrosion rates, projecting remaining life, screening damage mechanisms, and using all of this to set code-based inspection intervals is the heart of any modern integrity program.\n\nFor inspection teams operating in Sharjah, UAE, the corrosion tracking module is configured against local realities: Northern emirate industrial / fabrication hub. Hamriyah Free Zone, SAIF Zone, SNOC gas processing. Pre-built templates support operator-specific quality clauses from Sharjah National Oil Corporation (SNOC), Crescent Petroleum, BUTINAH Marine, Sharjah Cement, and regulatory frameworks under Sharjah Economic Development, Hamriyah Free Zone Authority (HFZA), Sharjah Civil Defence are reflected in the workflow defaults. Atlantis NDT ERP is delivered as multi-tenant SaaS with regional data residency — a 5-person Sharjah inspection contractor and a 200-person multinational both run on the same platform.",
  "cityFeatures": [
    "Per-TML thickness history, with the short-term and long-term corrosion rates the inspector calculates stored alongside",
    "Wall-thickness trend per TML against the t-min and retirement thickness the inspector sets",
    "Damage mechanism records per API 571, as assigned by the integrity engineer",
    "Tailored for Sharjah workflow — pre-configured operator templates for Sharjah National Oil Corporation (SNOC), Crescent Petroleum, BUTINAH Marine",
    "Regulatory alignment with Sharjah Economic Development, Hamriyah Free Zone Authority (HFZA), Sharjah Civil Defence — audit-ready evidence packages"
  ],
  "cityUseCases": [
    "A mid-size Sharjah inspection contractor serving Sharjah National Oil Corporation (SNOC) and Crescent Petroleum deploys corrosion tracking as a standalone module — replacing spreadsheets and disconnected SaaS — and reports 60-80% admin-time reduction within 90 days.",
    "A Sharjah EPC quality team standardizes corrosion tracking across 4 simultaneous project sites in the UAE market. Daily reports, audit packages, and customer-format reports flow to BUTINAH Marine portals automatically.",
    "A growing Sharjah-based service provider integrates corrosion tracking with accounting (QuickBooks / Xero / Tally for India / Sage / Reliance ERP) and the CMMS used by Sharjah Cement — eliminating duplicate data entry and reducing customer-facing report turnaround from 5 days to <24 hours.",
    "A regulator-audit-driven Sharjah inspection company uses corrosion tracking to pass Sharjah Economic Development and Hamriyah Free Zone Authority (HFZA) audits with zero findings — evidence packages assembled in 30 seconds vs. 80+ hours of manual prep."
  ],
  "cityOperators": [
    "Sharjah National Oil Corporation (SNOC)",
    "Crescent Petroleum",
    "BUTINAH Marine",
    "Sharjah Cement",
    "Sharjah Aluminium (SHARC)",
    "Hamriyah Free Zone tenants",
    "Air Arabia MRO",
    "Etihad Rail Sharjah"
  ],
  "cityRegulators": [
    "Sharjah Economic Development",
    "Hamriyah Free Zone Authority (HFZA)",
    "Sharjah Civil Defence",
    "MOIAT",
    "UAE FANR radiation"
  ],
  "cityPain": [
    "Corrosion Tracking tracked in spreadsheets — always 2 months behind Sharjah operator-portal requirements",
    "Sharjah Economic Development audit preparation takes 80+ hours per cycle — finds gaps too late to remediate",
    "Operator-portal flow-down from Sharjah National Oil Corporation (SNOC) updates monthly — internal procedures lag by weeks",
    "Customer-format reports for Crescent Petroleum, BUTINAH Marine, Sharjah Cement require manual reformatting per submission"
  ],
  "faqs": [
    [
      "Is the corrosion tracking module configured for Sharjah operators?",
      "Yes. Pre-loaded operator-specific quality clauses, qualification schemes, and report formats for Sharjah National Oil Corporation (SNOC), Crescent Petroleum, BUTINAH Marine, Sharjah Cement, Sharjah Aluminium (SHARC). Atlantis NDT updates the operator-template library on a quarterly cadence so flow-down stays current with operator specification revisions."
    ],
    [
      "Does it comply with Sharjah Economic Development and other UAE regulators?",
      "Yes. Sharjah Economic Development, Hamriyah Free Zone Authority (HFZA), Sharjah Civil Defence, MOIAT requirements drive the audit-readiness defaults. Annual + ad-hoc inspections generate audit-package PDFs with full chain-of-custody, personnel qualification matrix, calibration records, and procedure revision history pre-assembled."
    ],
    [
      "What languages and currencies are supported for Sharjah?",
      "Platform supports English (primary), and where relevant for UAE: Arabic (Gulf), Bahasa Indonesia, Hindi/Marathi/Telugu (India), Mandarin (China/SG), Spanish/Portuguese (Americas), French (West Africa/Canada). Invoicing supports USD, EUR, GBP, AED, SAR, INR, SGD, AUD, CAD, IDR, MYR, QAR, NGN — full multi-currency with VAT/GST as applicable."
    ],
    [
      "Can corrosion rates be computed automatically from UT thickness data?",
      "No. Atlantis ERP stores each UT thickness reading against its TML with the instrument, calibration record and technician, shows the thickness trend, and flags outlier readings for inspector review. The short-term and long-term corrosion rates under API 570 / API 653 are calculated by the inspector and can be recorded against the TML."
    ]
  ],
  "lat": 25.3463,
  "lng": 55.4209
};
export default function ErpMC_corrosion_tracking_sharjah() { return <ErpModuleCityPage {...data} />; }
