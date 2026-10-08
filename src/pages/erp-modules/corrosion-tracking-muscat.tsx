import ErpModuleCityPage from '@/components/ErpModuleCityPage';
const data = {
  "moduleSlug": "corrosion-tracking",
  "moduleName": "Corrosion Tracking",
  "citySlug": "muscat",
  "cityName": "Muscat",
  "country": "Oman",
  "title": "Corrosion Tracking in Muscat",
  "desc": "Pre-configured for Petroleum Development Oman (PDO), OQ Refineries (Sohar, Muscat) and aligned with MEM Ministry of Energy and Minerals, Ministry of Labour. Demo: info@atlantisndt.com.",
  "intro": "Corrosion is the dominant degradation mechanism for ~85% of refinery and petrochemical equipment. Quantifying corrosion rates, projecting remaining life, screening damage mechanisms, and using all of this to set code-based inspection intervals is the heart of any modern integrity program.\n\nFor inspection teams operating in Muscat, Oman, the corrosion tracking module is configured against local realities: Oman corporate base. PDO upstream + OQ refining/petrochem at Sohar + Duqm SEZ megaproject. Pre-built templates support operator-specific quality clauses from Petroleum Development Oman (PDO), OQ Refineries (Sohar, Muscat), OQ Petrochemicals, Oman LNG (Qalhat), and regulatory frameworks under MEM Ministry of Energy and Minerals, Ministry of Labour, OPAZ (free zones) are reflected in the workflow defaults. Atlantis NDT ERP is delivered as multi-tenant SaaS with regional data residency — a 5-person Muscat inspection contractor and a 200-person multinational both run on the same platform.",
  "cityFeatures": [
    "Per-TML thickness history, with the short-term and long-term corrosion rates the inspector calculates stored alongside",
    "Wall-thickness trend per TML against the t-min and retirement thickness the inspector sets",
    "Damage mechanism records per API 571, as assigned by the integrity engineer",
    "Tailored for Muscat workflow — pre-configured operator templates for Petroleum Development Oman (PDO), OQ Refineries (Sohar, Muscat), OQ Petrochemicals",
    "Regulatory alignment with MEM Ministry of Energy and Minerals, Ministry of Labour, OPAZ (free zones) — audit-ready evidence packages"
  ],
  "cityUseCases": [
    "A mid-size Muscat inspection contractor serving Petroleum Development Oman (PDO) and OQ Refineries (Sohar, Muscat) deploys corrosion tracking as a standalone module — replacing spreadsheets and disconnected SaaS — and reports 60-80% admin-time reduction within 90 days.",
    "A Muscat EPC quality team standardizes corrosion tracking across 4 simultaneous project sites in the Oman market. Daily reports, audit packages, and customer-format reports flow to OQ Petrochemicals portals automatically.",
    "A growing Muscat-based service provider integrates corrosion tracking with accounting (QuickBooks / Xero / Tally for India / Sage / Reliance ERP) and the CMMS used by Oman LNG (Qalhat) — eliminating duplicate data entry and reducing customer-facing report turnaround from 5 days to <24 hours.",
    "A regulator-audit-driven Muscat inspection company uses corrosion tracking to pass MEM Ministry of Energy and Minerals and Ministry of Labour audits with zero findings — evidence packages assembled in 30 seconds vs. 80+ hours of manual prep."
  ],
  "cityOperators": [
    "Petroleum Development Oman (PDO)",
    "OQ Refineries (Sohar, Muscat)",
    "OQ Petrochemicals",
    "Oman LNG (Qalhat)",
    "Duqm Refinery (OQ / Kuwait JV)",
    "Sohar Aluminium",
    "Vale Oman (Sohar pellet)",
    "Oman Cement"
  ],
  "cityRegulators": [
    "MEM Ministry of Energy and Minerals",
    "Ministry of Labour",
    "OPAZ (free zones)",
    "DGSM Omani Standards",
    "Ministry of Environment"
  ],
  "cityPain": [
    "Corrosion Tracking tracked in spreadsheets — always 2 months behind Muscat operator-portal requirements",
    "MEM Ministry of Energy and Minerals audit preparation takes 80+ hours per cycle — finds gaps too late to remediate",
    "Operator-portal flow-down from Petroleum Development Oman (PDO) updates monthly — internal procedures lag by weeks",
    "Customer-format reports for OQ Refineries (Sohar, Muscat), OQ Petrochemicals, Oman LNG (Qalhat) require manual reformatting per submission"
  ],
  "faqs": [
    [
      "Is the corrosion tracking module configured for Muscat operators?",
      "Yes. Pre-loaded operator-specific quality clauses, qualification schemes, and report formats for Petroleum Development Oman (PDO), OQ Refineries (Sohar, Muscat), OQ Petrochemicals, Oman LNG (Qalhat), Duqm Refinery (OQ / Kuwait JV). Atlantis NDT updates the operator-template library on a quarterly cadence so flow-down stays current with operator specification revisions."
    ],
    [
      "Does it comply with MEM Ministry of Energy and Minerals and other Oman regulators?",
      "Yes. MEM Ministry of Energy and Minerals, Ministry of Labour, OPAZ (free zones), DGSM Omani Standards requirements drive the audit-readiness defaults. Annual + ad-hoc inspections generate audit-package PDFs with full chain-of-custody, personnel qualification matrix, calibration records, and procedure revision history pre-assembled."
    ],
    [
      "What languages and currencies are supported for Muscat?",
      "Platform supports English (primary), and where relevant for Oman: Arabic (Gulf), Bahasa Indonesia, Hindi/Marathi/Telugu (India), Mandarin (China/SG), Spanish/Portuguese (Americas), French (West Africa/Canada). Invoicing supports USD, EUR, GBP, AED, SAR, INR, SGD, AUD, CAD, IDR, MYR, QAR, NGN — full multi-currency with VAT/GST as applicable."
    ],
    [
      "Can corrosion rates be computed automatically from UT thickness data?",
      "No. Atlantis ERP stores each UT thickness reading against its TML with the instrument, calibration record and technician, shows the thickness trend, and flags outlier readings for inspector review. The short-term and long-term corrosion rates under API 570 / API 653 are calculated by the inspector and can be recorded against the TML."
    ]
  ],
  "lat": 23.5859,
  "lng": 58.4059
};
export default function ErpMC_corrosion_tracking_muscat() { return <ErpModuleCityPage {...data} />; }
