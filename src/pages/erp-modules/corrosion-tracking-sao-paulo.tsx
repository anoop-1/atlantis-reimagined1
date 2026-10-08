import ErpModuleCityPage from '@/components/ErpModuleCityPage';
const data = {
  "moduleSlug": "corrosion-tracking",
  "moduleName": "Corrosion Tracking",
  "citySlug": "sao-paulo",
  "cityName": "Sao Paulo",
  "country": "Brazil",
  "title": "Corrosion Tracking in Sao Paulo",
  "desc": "Pre-configured for Petrobras (Replan Paulinia, Revap, Cubatao RPBC), USIMINAS (Cubatao steel) and aligned with ANP, Ibama environment. Demo: info@atlantisndt.com.",
  "intro": "Corrosion is the dominant degradation mechanism for ~85% of refinery and petrochemical equipment. Quantifying corrosion rates, projecting remaining life, screening damage mechanisms, and using all of this to set code-based inspection intervals is the heart of any modern integrity program.\n\nFor inspection teams operating in Sao Paulo, Brazil, the corrosion tracking module is configured against local realities: Brazil industrial powerhouse. Petrobras Replan / Revap refineries. EMBRAER aerospace. Cubatao steel. Pre-built templates support operator-specific quality clauses from Petrobras (Replan Paulinia, Revap, Cubatao RPBC), USIMINAS (Cubatao steel), CSN (Volta Redonda), EMBRAER (Sao Jose dos Campos), and regulatory frameworks under ANP, Ibama environment, CNEN radiation are reflected in the workflow defaults. Atlantis NDT ERP is delivered as multi-tenant SaaS with regional data residency — a 5-person Sao Paulo inspection contractor and a 200-person multinational both run on the same platform.",
  "cityFeatures": [
    "Per-TML thickness history, with the short-term and long-term corrosion rates the inspector calculates stored alongside",
    "Wall-thickness trend per TML against the t-min and retirement thickness the inspector sets",
    "Damage mechanism records per API 571, as assigned by the integrity engineer",
    "Tailored for Sao Paulo workflow — pre-configured operator templates for Petrobras (Replan Paulinia, Revap, Cubatao RPBC), USIMINAS (Cubatao steel), CSN (Volta Redonda)",
    "Regulatory alignment with ANP, Ibama environment, CNEN radiation — audit-ready evidence packages"
  ],
  "cityUseCases": [
    "A mid-size Sao Paulo inspection contractor serving Petrobras (Replan Paulinia, Revap, Cubatao RPBC) and USIMINAS (Cubatao steel) deploys corrosion tracking as a standalone module — replacing spreadsheets and disconnected SaaS — and reports 60-80% admin-time reduction within 90 days.",
    "A Sao Paulo EPC quality team standardizes corrosion tracking across 4 simultaneous project sites in the Brazil market. Daily reports, audit packages, and customer-format reports flow to CSN (Volta Redonda) portals automatically.",
    "A growing Sao Paulo-based service provider integrates corrosion tracking with accounting (QuickBooks / Xero / Tally for India / Sage / Reliance ERP) and the CMMS used by EMBRAER (Sao Jose dos Campos) — eliminating duplicate data entry and reducing customer-facing report turnaround from 5 days to <24 hours.",
    "A regulator-audit-driven Sao Paulo inspection company uses corrosion tracking to pass ANP and Ibama environment audits with zero findings — evidence packages assembled in 30 seconds vs. 80+ hours of manual prep."
  ],
  "cityOperators": [
    "Petrobras (Replan Paulinia, Revap, Cubatao RPBC)",
    "USIMINAS (Cubatao steel)",
    "CSN (Volta Redonda)",
    "EMBRAER (Sao Jose dos Campos)",
    "Braskem petrochemicals",
    "Vale mining HQ",
    "Cosan / Raizen",
    "Volkswagen do Brasil"
  ],
  "cityRegulators": [
    "ANP",
    "Ibama environment",
    "CNEN radiation",
    "INMETRO accreditation",
    "Ministerio do Trabalho (NR-13)"
  ],
  "cityPain": [
    "Corrosion Tracking tracked in spreadsheets — always 2 months behind Sao Paulo operator-portal requirements",
    "ANP audit preparation takes 80+ hours per cycle — finds gaps too late to remediate",
    "Operator-portal flow-down from Petrobras (Replan Paulinia, Revap, Cubatao RPBC) updates monthly — internal procedures lag by weeks",
    "Customer-format reports for USIMINAS (Cubatao steel), CSN (Volta Redonda), EMBRAER (Sao Jose dos Campos) require manual reformatting per submission"
  ],
  "faqs": [
    [
      "Is the corrosion tracking module configured for Sao Paulo operators?",
      "Yes. Pre-loaded operator-specific quality clauses, qualification schemes, and report formats for Petrobras (Replan Paulinia, Revap, Cubatao RPBC), USIMINAS (Cubatao steel), CSN (Volta Redonda), EMBRAER (Sao Jose dos Campos), Braskem petrochemicals. Atlantis NDT updates the operator-template library on a quarterly cadence so flow-down stays current with operator specification revisions."
    ],
    [
      "Does it comply with ANP and other Brazil regulators?",
      "Yes. ANP, Ibama environment, CNEN radiation, INMETRO accreditation requirements drive the audit-readiness defaults. Annual + ad-hoc inspections generate audit-package PDFs with full chain-of-custody, personnel qualification matrix, calibration records, and procedure revision history pre-assembled."
    ],
    [
      "What languages and currencies are supported for Sao Paulo?",
      "Platform supports English (primary), and where relevant for Brazil: Arabic (Gulf), Bahasa Indonesia, Hindi/Marathi/Telugu (India), Mandarin (China/SG), Spanish/Portuguese (Americas), French (West Africa/Canada). Invoicing supports USD, EUR, GBP, AED, SAR, INR, SGD, AUD, CAD, IDR, MYR, QAR, NGN — full multi-currency with VAT/GST as applicable."
    ],
    [
      "Can corrosion rates be computed automatically from UT thickness data?",
      "No. Atlantis ERP stores each UT thickness reading against its TML with the instrument, calibration record and technician, shows the thickness trend, and flags outlier readings for inspector review. The short-term and long-term corrosion rates under API 570 / API 653 are calculated by the inspector and can be recorded against the TML."
    ]
  ],
  "lat": -23.5505,
  "lng": -46.6333
};
export default function ErpMC_corrosion_tracking_sao_paulo() { return <ErpModuleCityPage {...data} />; }
