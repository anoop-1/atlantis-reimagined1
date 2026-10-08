import ErpModuleCityPage from '@/components/ErpModuleCityPage';
const data = {
  "moduleSlug": "corrosion-tracking",
  "moduleName": "Corrosion Tracking",
  "citySlug": "perth",
  "cityName": "Perth",
  "country": "Australia",
  "title": "Corrosion Tracking in Perth",
  "desc": "Pre-configured for Woodside Energy, Chevron Australia (Gorgon, Wheatstone) and aligned with WorkSafe WA, NOPSEMA offshore. Demo: info@atlantisndt.com.",
  "intro": "Corrosion is the dominant degradation mechanism for ~85% of refinery and petrochemical equipment. Quantifying corrosion rates, projecting remaining life, screening damage mechanisms, and using all of this to set code-based inspection intervals is the heart of any modern integrity program.\n\nFor inspection teams operating in Perth, Australia, the corrosion tracking module is configured against local realities: Western Australia LNG and iron ore gateway. Pilbara FIFO support. Carnarvon Basin offshore. Pre-built templates support operator-specific quality clauses from Woodside Energy, Chevron Australia (Gorgon, Wheatstone), INPEX Ichthys, Santos GLNG, and regulatory frameworks under WorkSafe WA, NOPSEMA offshore, DMIRS mines & safety are reflected in the workflow defaults. Atlantis NDT ERP is delivered as multi-tenant SaaS with regional data residency — a 5-person Perth inspection contractor and a 200-person multinational both run on the same platform.",
  "cityFeatures": [
    "Per-TML thickness history, with the short-term and long-term corrosion rates the inspector calculates stored alongside",
    "Wall-thickness trend per TML against the t-min and retirement thickness the inspector sets",
    "Damage mechanism records per API 571, as assigned by the integrity engineer",
    "Tailored for Perth workflow — pre-configured operator templates for Woodside Energy, Chevron Australia (Gorgon, Wheatstone), INPEX Ichthys",
    "Regulatory alignment with WorkSafe WA, NOPSEMA offshore, DMIRS mines & safety — audit-ready evidence packages"
  ],
  "cityUseCases": [
    "A mid-size Perth inspection contractor serving Woodside Energy and Chevron Australia (Gorgon, Wheatstone) deploys corrosion tracking as a standalone module — replacing spreadsheets and disconnected SaaS — and reports 60-80% admin-time reduction within 90 days.",
    "A Perth EPC quality team standardizes corrosion tracking across 4 simultaneous project sites in the Australia market. Daily reports, audit packages, and customer-format reports flow to INPEX Ichthys portals automatically.",
    "A growing Perth-based service provider integrates corrosion tracking with accounting (QuickBooks / Xero / Tally for India / Sage / Reliance ERP) and the CMMS used by Santos GLNG — eliminating duplicate data entry and reducing customer-facing report turnaround from 5 days to <24 hours.",
    "A regulator-audit-driven Perth inspection company uses corrosion tracking to pass WorkSafe WA and NOPSEMA offshore audits with zero findings — evidence packages assembled in 30 seconds vs. 80+ hours of manual prep."
  ],
  "cityOperators": [
    "Woodside Energy",
    "Chevron Australia (Gorgon, Wheatstone)",
    "INPEX Ichthys",
    "Santos GLNG",
    "BHP iron ore",
    "Rio Tinto Pilbara",
    "FMG mining"
  ],
  "cityRegulators": [
    "WorkSafe WA",
    "NOPSEMA offshore",
    "DMIRS mines & safety",
    "Australian Petroleum Safety Authority"
  ],
  "cityPain": [
    "Corrosion Tracking tracked in spreadsheets — always 2 months behind Perth operator-portal requirements",
    "WorkSafe WA audit preparation takes 80+ hours per cycle — finds gaps too late to remediate",
    "Operator-portal flow-down from Woodside Energy updates monthly — internal procedures lag by weeks",
    "Customer-format reports for Chevron Australia (Gorgon, Wheatstone), INPEX Ichthys, Santos GLNG require manual reformatting per submission"
  ],
  "faqs": [
    [
      "Is the corrosion tracking module configured for Perth operators?",
      "Yes. Pre-loaded operator-specific quality clauses, qualification schemes, and report formats for Woodside Energy, Chevron Australia (Gorgon, Wheatstone), INPEX Ichthys, Santos GLNG, BHP iron ore. Atlantis NDT updates the operator-template library on a quarterly cadence so flow-down stays current with operator specification revisions."
    ],
    [
      "Does it comply with WorkSafe WA and other Australia regulators?",
      "Yes. WorkSafe WA, NOPSEMA offshore, DMIRS mines & safety, Australian Petroleum Safety Authority requirements drive the audit-readiness defaults. Annual + ad-hoc inspections generate audit-package PDFs with full chain-of-custody, personnel qualification matrix, calibration records, and procedure revision history pre-assembled."
    ],
    [
      "What languages and currencies are supported for Perth?",
      "Platform supports English (primary), and where relevant for Australia: Arabic (Gulf), Bahasa Indonesia, Hindi/Marathi/Telugu (India), Mandarin (China/SG), Spanish/Portuguese (Americas), French (West Africa/Canada). Invoicing supports USD, EUR, GBP, AED, SAR, INR, SGD, AUD, CAD, IDR, MYR, QAR, NGN — full multi-currency with VAT/GST as applicable."
    ],
    [
      "Can corrosion rates be computed automatically from UT thickness data?",
      "No. Atlantis ERP stores each UT thickness reading against its TML with the instrument, calibration record and technician, shows the thickness trend, and flags outlier readings for inspector review. The short-term and long-term corrosion rates under API 570 / API 653 are calculated by the inspector and can be recorded against the TML."
    ]
  ],
  "lat": -31.9505,
  "lng": 115.8605
};
export default function ErpMC_corrosion_tracking_perth() { return <ErpModuleCityPage {...data} />; }
