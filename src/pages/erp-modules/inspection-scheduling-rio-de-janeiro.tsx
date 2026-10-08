import ErpModuleCityPage from '@/components/ErpModuleCityPage';
const data = {
  "moduleSlug": "inspection-scheduling",
  "moduleName": "Inspection Scheduling & Interval Management",
  "citySlug": "rio-de-janeiro",
  "cityName": "Rio de Janeiro",
  "country": "Brazil",
  "title": "Inspection Scheduling & Interval Management in Rio de Janeiro",
  "desc": "Pre-configured for Petrobras (Campos / Santos basins, HQ), TotalEnergies E&P Brazil and aligned with ANP, Ibama. Demo: info@atlantisndt.com.",
  "intro": "Owner-operators and inspection contractors share one nightmare: discovering that an inspection due date has slipped past — and that nobody noticed. The consequences range from operational risk to regulatory finding to incident liability.\n\nFor inspection teams operating in Rio de Janeiro, Brazil, the inspection scheduling & interval management module is configured against local realities: Petrobras upstream offshore capital. Campos / Santos pre-salt FPSOs. REDUC refinery. Acu port. Pre-built templates support operator-specific quality clauses from Petrobras (Campos / Santos basins, HQ), TotalEnergies E&P Brazil, Equinor Brazil, Shell Brazil (Mero, Libra), and regulatory frameworks under ANP, Ibama, Marinha do Brasil are reflected in the workflow defaults. Atlantis NDT ERP is delivered as multi-tenant SaaS with regional data residency — a 5-person Rio de Janeiro inspection contractor and a 200-person multinational both run on the same platform.",
  "cityFeatures": [
    "API 510 pressure vessel due dates (external, internal, on-stream) entered by the inspector, with reminders before each falls due",
    "API 570 piping due dates by circuit and class, entered by the inspector, with reminders before each falls due",
    "API 653 tank due dates (routine, external, internal) entered by the inspector, with reminders before each falls due",
    "ASME B31.3 process piping due dates, including the severe cyclic service items the inspector flags",
    "Inspection due forecast: 30 / 60 / 90 / 180 / 365 day windows with criticality ranking",
    "Tailored for Rio de Janeiro workflow — pre-configured operator templates for Petrobras (Campos / Santos basins, HQ), TotalEnergies E&P Brazil, Equinor Brazil",
    "Regulatory alignment with ANP, Ibama, Marinha do Brasil — audit-ready evidence packages"
  ],
  "cityUseCases": [
    "A mid-size Rio de Janeiro inspection contractor serving Petrobras (Campos / Santos basins, HQ) and TotalEnergies E&P Brazil deploys inspection scheduling & interval management as a standalone module — replacing spreadsheets and disconnected SaaS — and reports 60-80% admin-time reduction within 90 days.",
    "A Rio de Janeiro EPC quality team standardizes inspection scheduling & interval management across 4 simultaneous project sites in the Brazil market. Daily reports, audit packages, and customer-format reports flow to Equinor Brazil portals automatically.",
    "A growing Rio de Janeiro-based service provider integrates inspection scheduling & interval management with accounting (QuickBooks / Xero / Tally for India / Sage / Reliance ERP) and the CMMS used by Shell Brazil (Mero, Libra) — eliminating duplicate data entry and reducing customer-facing report turnaround from 5 days to <24 hours.",
    "A regulator-audit-driven Rio de Janeiro inspection company uses inspection scheduling & interval management to pass ANP and Ibama audits with zero findings — evidence packages assembled in 30 seconds vs. 80+ hours of manual prep."
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
    "Inspection Scheduling & Interval Management tracked in spreadsheets — always 2 months behind Rio de Janeiro operator-portal requirements",
    "ANP audit preparation takes 80+ hours per cycle — finds gaps too late to remediate",
    "Operator-portal flow-down from Petrobras (Campos / Santos basins, HQ) updates monthly — internal procedures lag by weeks",
    "Customer-format reports for TotalEnergies E&P Brazil, Equinor Brazil, Shell Brazil (Mero, Libra) require manual reformatting per submission"
  ],
  "faqs": [
    [
      "Is the inspection scheduling & interval management module configured for Rio de Janeiro operators?",
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
      "How does the scheduler handle deferrals or extensions to inspection due dates?",
      "The deferral workflow requires an engineering justification — a corrosion-rate or remaining-life re-assessment by the inspector, or an operating-conditions change — and a sign-off from a qualified inspector (API 510/570/653 certified) and the integrity manager. Deferrals are audit-logged with the full chain of approval, and the new due date the inspector sets is recorded with reminders. Regulatory limits (e.g., NB-23 maximum extensions) are shown to the approvers to check."
    ],
    [
      "Does it integrate with our existing CMMS (Maximo, SAP PM, AspenTech)?",
      "Yes. Bi-directional integration with the major CMMS / EAM platforms. Inspection scheduling can be the master and push work orders into the CMMS, or the CMMS can be master and Atlantis ERP acts as the inspection-specific layer holding due dates, readings and records. Asset hierarchies, equipment classes, and functional locations sync."
    ]
  ],
  "lat": -22.9068,
  "lng": -43.1729
};
export default function ErpMC_inspection_scheduling_rio_de_janeiro() { return <ErpModuleCityPage {...data} />; }
