import ErpModuleCityPage from '@/components/ErpModuleCityPage';
const data = {
  "moduleSlug": "inspection-scheduling",
  "moduleName": "Inspection Scheduling & Interval Management",
  "citySlug": "aberdeen",
  "cityName": "Aberdeen",
  "country": "UK",
  "title": "Inspection Scheduling & Interval Management in Aberdeen",
  "desc": "Inspection Scheduling & Interval Management ERP module for inspection companies in Aberdeen, UK. Pre-configured for Harbour Energy, BP North Sea and aligned with HSE OSDR, OEUK (Offshore Energies UK). Demo: info@atlantisndt.com.",
  "intro": "Owner-operators and inspection contractors share one nightmare: discovering that an inspection due date has slipped past — and that nobody noticed. The consequences range from operational risk to regulatory finding to incident liability.\n\nFor inspection teams operating in Aberdeen, UK, the inspection scheduling & interval management module is configured against local realities: UK offshore oil & gas capital. 50 years of North Sea ops. Offshore wind growth. Decommissioning hub. Pre-built templates support operator-specific quality clauses from Harbour Energy, BP North Sea, Shell UKCS, TotalEnergies UK, and regulatory frameworks under HSE OSDR, OEUK (Offshore Energies UK), NSTA (former OGA) are reflected in the workflow defaults. Atlantis NDT ERP is delivered as multi-tenant SaaS with regional data residency — a 5-person Aberdeen inspection contractor and a 200-person multinational both run on the same platform.",
  "cityFeatures": [
    "API 510 pressure vessel intervals: external 5-yr, internal half-remaining-life capped at 10-yr, or per RBI",
    "API 570 piping intervals by class: Class 1 (5/10), Class 2 (10/20), Class 3 (10/20+), or per RBI",
    "API 653 tank intervals: external monthly visual + 5-yr formal, internal 10-yr or per RBI",
    "ASME B31.3 process piping inspection intervals with severe cyclic service adjustments",
    "Risk-based inspection (RBI) per API 581 — import RBI assessment, use computed inspection plan",
    "Inspection due forecast: 30 / 60 / 90 / 180 / 365 day windows with criticality ranking",
    "Tailored for Aberdeen workflow — pre-configured operator templates for Harbour Energy, BP North Sea, Shell UKCS",
    "Regulatory alignment with HSE OSDR, OEUK (Offshore Energies UK), NSTA (former OGA) — audit-ready evidence packages"
  ],
  "cityUseCases": [
    "A mid-size Aberdeen inspection contractor serving Harbour Energy and BP North Sea deploys inspection scheduling & interval management as a standalone module — replacing spreadsheets and disconnected SaaS — and reports 60-80% admin-time reduction within 90 days.",
    "A Aberdeen EPC quality team standardizes inspection scheduling & interval management across 4 simultaneous project sites in the UK market. Daily reports, audit packages, and customer-format reports flow to Shell UKCS portals automatically.",
    "A growing Aberdeen-based service provider integrates inspection scheduling & interval management with accounting (QuickBooks / Xero / Tally for India / Sage / Reliance ERP) and the CMMS used by TotalEnergies UK — eliminating duplicate data entry and reducing customer-facing report turnaround from 5 days to <24 hours.",
    "A regulator-audit-driven Aberdeen inspection company uses inspection scheduling & interval management to pass HSE OSDR and OEUK (Offshore Energies UK) audits with zero findings — evidence packages assembled in 30 seconds vs. 80+ hours of manual prep."
  ],
  "cityOperators": [
    "Harbour Energy",
    "BP North Sea",
    "Shell UKCS",
    "TotalEnergies UK",
    "NEO Energy",
    "Apache North Sea",
    "Repsol Sinopec UK"
  ],
  "cityRegulators": [
    "HSE OSDR",
    "OEUK (Offshore Energies UK)",
    "NSTA (former OGA)",
    "PSSR 2000 written scheme",
    "LOLER"
  ],
  "cityPain": [
    "Inspection Scheduling & Interval Management tracked in spreadsheets — always 2 months behind Aberdeen operator-portal requirements",
    "HSE OSDR audit preparation takes 80+ hours per cycle — finds gaps too late to remediate",
    "Operator-portal flow-down from Harbour Energy updates monthly — internal procedures lag by weeks",
    "Customer-format reports for BP North Sea, Shell UKCS, TotalEnergies UK require manual reformatting per submission"
  ],
  "faqs": [
    [
      "Is the inspection scheduling & interval management module configured for Aberdeen operators?",
      "Yes. Pre-loaded operator-specific quality clauses, qualification schemes, and report formats for Harbour Energy, BP North Sea, Shell UKCS, TotalEnergies UK, NEO Energy. Atlantis NDT updates the operator-template library on a quarterly cadence so flow-down stays current with operator specification revisions."
    ],
    [
      "Does it comply with HSE OSDR and other UK regulators?",
      "Yes. HSE OSDR, OEUK (Offshore Energies UK), NSTA (former OGA), PSSR 2000 written scheme requirements drive the audit-readiness defaults. Annual + ad-hoc inspections generate audit-package PDFs with full chain-of-custody, personnel qualification matrix, calibration records, and procedure revision history pre-assembled."
    ],
    [
      "What languages and currencies are supported for Aberdeen?",
      "Platform supports English (primary), and where relevant for UK: Arabic (Gulf), Bahasa Indonesia, Hindi/Marathi/Telugu (India), Mandarin (China/SG), Spanish/Portuguese (Americas), French (West Africa/Canada). Invoicing supports USD, EUR, GBP, AED, SAR, INR, SGD, AUD, CAD, IDR, MYR, QAR, NGN — full multi-currency with VAT/GST as applicable."
    ],
    [
      "How does the scheduler handle deferrals or extensions to inspection due dates?",
      "The deferral workflow requires engineering justification — corrosion-rate analysis, RBI re-assessment, or operating-conditions change — and a sign-off from a qualified inspector (API 510/570/653 certified) and the integrity manager. Deferrals are audit-logged with full chain of approval and the new due date is automatically set. Regulatory limits (e.g., NB-23 §3.3.1 maximum extension) are enforced."
    ],
    [
      "Does it integrate with our existing CMMS (Maximo, SAP PM, AspenTech)?",
      "Yes. Bi-directional integration with the major CMMS / EAM platforms. Inspection scheduling can be the master and push work orders into the CMMS, or the CMMS can be master and Atlantis ERP acts as the inspection-specific layer with code-aware scheduling logic. Asset hierarchies, equipment classes, and functional locations sync."
    ]
  ],
  "lat": 57.1497,
  "lng": -2.0943
};
export default function ErpMC_inspection_scheduling_aberdeen() { return <ErpModuleCityPage {...data} />; }
