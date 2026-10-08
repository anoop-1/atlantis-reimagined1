import ErpModuleCityPage from '@/components/ErpModuleCityPage';
const data = {
  "moduleSlug": "corrosion-tracking",
  "moduleName": "Corrosion Tracking",
  "citySlug": "ho-chi-minh",
  "cityName": "Ho Chi Minh City",
  "country": "Vietnam",
  "title": "Corrosion Tracking in Ho Chi Minh City",
  "desc": "Pre-configured for PetroVietnam (PVN), Vietsovpetro offshore JV and aligned with PetroVietnam vendor approval, MOIT Ministry of Industry and Trade. Demo: info@atlantisndt.com.",
  "intro": "Corrosion is the dominant degradation mechanism for ~85% of refinery and petrochemical equipment. Quantifying corrosion rates, projecting remaining life, screening damage mechanisms, and using all of this to set code-based inspection intervals is the heart of any modern integrity program.\n\nFor inspection teams operating in Ho Chi Minh City, Vietnam, the corrosion tracking module is configured against local realities: Vietnam upstream / petrochemical hub. PetroVietnam corporate. Long Son Petrochemicals. Dung Quat / Nghi Son refining. Pre-built templates support operator-specific quality clauses from PetroVietnam (PVN), Vietsovpetro offshore JV, Long Son Petrochemicals (SCG), Binh Son Refining (BSR, Dung Quat), and regulatory frameworks under PetroVietnam vendor approval, MOIT Ministry of Industry and Trade, VPI Vietnam Petroleum Institute are reflected in the workflow defaults. Atlantis NDT ERP is delivered as multi-tenant SaaS with regional data residency — a 5-person Ho Chi Minh City inspection contractor and a 200-person multinational both run on the same platform.",
  "cityFeatures": [
    "Per-TML thickness history, with the short-term and long-term corrosion rates the inspector calculates stored alongside",
    "Wall-thickness trend per TML against the t-min and retirement thickness the inspector sets",
    "Damage mechanism records per API 571, as assigned by the integrity engineer",
    "Tailored for Ho Chi Minh City workflow — pre-configured operator templates for PetroVietnam (PVN), Vietsovpetro offshore JV, Long Son Petrochemicals (SCG)",
    "Regulatory alignment with PetroVietnam vendor approval, MOIT Ministry of Industry and Trade, VPI Vietnam Petroleum Institute — audit-ready evidence packages"
  ],
  "cityUseCases": [
    "A mid-size Ho Chi Minh City inspection contractor serving PetroVietnam (PVN) and Vietsovpetro offshore JV deploys corrosion tracking as a standalone module — replacing spreadsheets and disconnected SaaS — and reports 60-80% admin-time reduction within 90 days.",
    "A Ho Chi Minh City EPC quality team standardizes corrosion tracking across 4 simultaneous project sites in the Vietnam market. Daily reports, audit packages, and customer-format reports flow to Long Son Petrochemicals (SCG) portals automatically.",
    "A growing Ho Chi Minh City-based service provider integrates corrosion tracking with accounting (QuickBooks / Xero / Tally for India / Sage / Reliance ERP) and the CMMS used by Binh Son Refining (BSR, Dung Quat) — eliminating duplicate data entry and reducing customer-facing report turnaround from 5 days to <24 hours.",
    "A regulator-audit-driven Ho Chi Minh City inspection company uses corrosion tracking to pass PetroVietnam vendor approval and MOIT Ministry of Industry and Trade audits with zero findings — evidence packages assembled in 30 seconds vs. 80+ hours of manual prep."
  ],
  "cityOperators": [
    "PetroVietnam (PVN)",
    "Vietsovpetro offshore JV",
    "Long Son Petrochemicals (SCG)",
    "Binh Son Refining (BSR, Dung Quat)",
    "Nghi Son Refinery (Idemitsu / Kuwait JV)",
    "PV Gas",
    "PV Drilling (PVD)",
    "Phu My Industrial Park"
  ],
  "cityRegulators": [
    "PetroVietnam vendor approval",
    "MOIT Ministry of Industry and Trade",
    "VPI Vietnam Petroleum Institute",
    "VARANS radiation",
    "VINAMARINE maritime"
  ],
  "cityPain": [
    "Corrosion Tracking tracked in spreadsheets — always 2 months behind Ho Chi Minh City operator-portal requirements",
    "PetroVietnam vendor approval audit preparation takes 80+ hours per cycle — finds gaps too late to remediate",
    "Operator-portal flow-down from PetroVietnam (PVN) updates monthly — internal procedures lag by weeks",
    "Customer-format reports for Vietsovpetro offshore JV, Long Son Petrochemicals (SCG), Binh Son Refining (BSR, Dung Quat) require manual reformatting per submission"
  ],
  "faqs": [
    [
      "Is the corrosion tracking module configured for Ho Chi Minh City operators?",
      "Yes. Pre-loaded operator-specific quality clauses, qualification schemes, and report formats for PetroVietnam (PVN), Vietsovpetro offshore JV, Long Son Petrochemicals (SCG), Binh Son Refining (BSR, Dung Quat), Nghi Son Refinery (Idemitsu / Kuwait JV). Atlantis NDT updates the operator-template library on a quarterly cadence so flow-down stays current with operator specification revisions."
    ],
    [
      "Does it comply with PetroVietnam vendor approval and other Vietnam regulators?",
      "Yes. PetroVietnam vendor approval, MOIT Ministry of Industry and Trade, VPI Vietnam Petroleum Institute, VARANS radiation requirements drive the audit-readiness defaults. Annual + ad-hoc inspections generate audit-package PDFs with full chain-of-custody, personnel qualification matrix, calibration records, and procedure revision history pre-assembled."
    ],
    [
      "What languages and currencies are supported for Ho Chi Minh City?",
      "Platform supports English (primary), and where relevant for Vietnam: Arabic (Gulf), Bahasa Indonesia, Hindi/Marathi/Telugu (India), Mandarin (China/SG), Spanish/Portuguese (Americas), French (West Africa/Canada). Invoicing supports USD, EUR, GBP, AED, SAR, INR, SGD, AUD, CAD, IDR, MYR, QAR, NGN — full multi-currency with VAT/GST as applicable."
    ],
    [
      "Can corrosion rates be computed automatically from UT thickness data?",
      "No. Atlantis ERP stores each UT thickness reading against its TML with the instrument, calibration record and technician, shows the thickness trend, and flags outlier readings for inspector review. The short-term and long-term corrosion rates under API 570 / API 653 are calculated by the inspector and can be recorded against the TML."
    ]
  ],
  "lat": 10.8231,
  "lng": 106.6297
};
export default function ErpMC_corrosion_tracking_ho_chi_minh() { return <ErpModuleCityPage {...data} />; }
