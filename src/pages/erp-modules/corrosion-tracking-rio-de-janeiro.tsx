import ErpModuleCityPage from '@/components/ErpModuleCityPage';
const data = {
  "moduleSlug": "corrosion-tracking",
  "moduleName": "Corrosion Tracking",
  "citySlug": "rio-de-janeiro",
  "cityName": "Rio de Janeiro",
  "country": "Brazil",
  "title": "Corrosion Tracking in Rio de Janeiro",
  "desc": "Pre-configured for Petrobras (Campos / Santos basins, HQ), TotalEnergies E&P Brazil and aligned with ANP, Ibama. Demo: info@atlantisndt.com.",
  "intro": "Corrosion is the dominant degradation mechanism for ~85% of refinery and petrochemical equipment. Quantifying corrosion rates, projecting remaining life, screening damage mechanisms, and using all of this to set code-based inspection intervals is the heart of any modern integrity program.\n\nFor inspection teams operating in Rio de Janeiro, Brazil, the corrosion tracking module is configured against local realities: Petrobras upstream offshore capital. Campos / Santos pre-salt FPSOs. REDUC refinery. Acu port. Pre-built templates support operator-specific quality clauses from Petrobras (Campos / Santos basins, HQ), TotalEnergies E&P Brazil, Equinor Brazil, Shell Brazil (Mero, Libra), and regulatory frameworks under ANP, Ibama, Marinha do Brasil are reflected in the workflow defaults. Atlantis NDT ERP is delivered as multi-tenant SaaS with regional data residency — a 5-person Rio de Janeiro inspection contractor and a 200-person multinational both run on the same platform.",
  "cityFeatures": [
    "Per-TML thickness history, with the short-term and long-term corrosion rates the inspector calculates stored alongside",
    "Wall-thickness trend per TML against the t-min and retirement thickness the inspector sets",
    "Damage mechanism records per API 571, as assigned by the integrity engineer",
    "Tailored for Rio de Janeiro workflow — pre-configured operator templates for Petrobras (Campos / Santos basins, HQ), TotalEnergies E&P Brazil, Equinor Brazil",
    "Regulatory alignment with ANP, Ibama, Marinha do Brasil — audit-ready evidence packages"
  ],
  "cityUseCases": [
    "A mid-size Rio de Janeiro inspection contractor serving Petrobras (Campos / Santos basins, HQ) and TotalEnergies E&P Brazil deploys corrosion tracking as a standalone module — replacing spreadsheets and disconnected SaaS — and reports 60-80% admin-time reduction within 90 days.",
    "A Rio de Janeiro EPC quality team standardizes corrosion tracking across 4 simultaneous project sites in the Brazil market. Daily reports, audit packages, and customer-format reports flow to Equinor Brazil portals automatically.",
    "A growing Rio de Janeiro-based service provider integrates corrosion tracking with accounting (QuickBooks / Xero / Tally for India / Sage / Reliance ERP) and the CMMS used by Shell Brazil (Mero, Libra) — eliminating duplicate data entry and reducing customer-facing report turnaround from 5 days to <24 hours.",
    "A regulator-audit-driven Rio de Janeiro inspection company uses corrosion tracking to pass ANP and Ibama audits with zero findings — evidence packages assembled in 30 seconds vs. 80+ hours of manual prep."
  ],
  "cityOperators": [
    "Petrobras (Campos / Santos basins, HQ)",
    "TotalEnergies E&P Brazil",
    "Equinor Brazil",
    "Shell Brazil (Mero, Libra)",
    "PetroRio",
    "Modec do Brasil FPSO",
    "SBM Offshore Brazil",
    "REDUC refinery"
  ],
  "cityRegulators": [
    "ANP",
    "Ibama",
    "Marinha do Brasil",
    "CNEN radiation",
    "INMETRO",
    "NR-13 / NR-37"
  ],
  "cityPain": [
    "Corrosion Tracking tracked in spreadsheets — always 2 months behind Rio de Janeiro operator-portal requirements",
    "ANP audit preparation takes 80+ hours per cycle — finds gaps too late to remediate",
    "Operator-portal flow-down from Petrobras (Campos / Santos basins, HQ) updates monthly — internal procedures lag by weeks",
    "Customer-format reports for TotalEnergies E&P Brazil, Equinor Brazil, Shell Brazil (Mero, Libra) require manual reformatting per submission"
  ],
  "faqs": [
    [
      "Is the corrosion tracking module configured for Rio de Janeiro operators?",
      "Yes. Pre-loaded operator-specific quality clauses, qualification schemes, and report formats for Petrobras (Campos / Santos basins, HQ), TotalEnergies E&P Brazil, Equinor Brazil, Shell Brazil (Mero, Libra), PetroRio. Atlantis NDT updates the operator-template library on a quarterly cadence so flow-down stays current with operator specification revisions."
    ],
    [
      "Does it comply with ANP and other Brazil regulators?",
      "Yes. ANP, Ibama, Marinha do Brasil, CNEN radiation requirements drive the audit-readiness defaults. Annual + ad-hoc inspections generate audit-package PDFs with full chain-of-custody, personnel qualification matrix, calibration records, and procedure revision history pre-assembled."
    ],
    [
      "What languages and currencies are supported for Rio de Janeiro?",
      "Platform supports English (primary), and where relevant for Brazil: Arabic (Gulf), Bahasa Indonesia, Hindi/Marathi/Telugu (India), Mandarin (China/SG), Spanish/Portuguese (Americas), French (West Africa/Canada). Invoicing supports USD, EUR, GBP, AED, SAR, INR, SGD, AUD, CAD, IDR, MYR, QAR, NGN — full multi-currency with VAT/GST as applicable."
    ],
    [
      "Can corrosion rates be computed automatically from UT thickness data?",
      "No. Atlantis ERP stores each UT thickness reading against its TML with the instrument, calibration record and technician, shows the thickness trend, and flags outlier readings for inspector review. The short-term and long-term corrosion rates under API 570 / API 653 are calculated by the inspector and can be recorded against the TML."
    ]
  ],
  "lat": -22.9068,
  "lng": -43.1729
};
export default function ErpMC_corrosion_tracking_rio_de_janeiro() { return <ErpModuleCityPage {...data} />; }
