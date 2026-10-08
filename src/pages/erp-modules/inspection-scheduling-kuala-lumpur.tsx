import ErpModuleCityPage from '@/components/ErpModuleCityPage';
const data = {
  "moduleSlug": "inspection-scheduling",
  "moduleName": "Inspection Scheduling & Interval Management",
  "citySlug": "kuala-lumpur",
  "cityName": "Kuala Lumpur",
  "country": "Malaysia",
  "title": "Inspection Scheduling & Interval Management in Kuala Lumpur",
  "desc": "Pre-configured for PETRONAS upstream/downstream, PCSB and aligned with DOSH (Department of Occupational Safety & Health), Suruhanjaya Tenaga (Energy Commission). Demo: info@atlantisndt.com.",
  "intro": "Owner-operators and inspection contractors share one nightmare: discovering that an inspection due date has slipped past — and that nobody noticed. The consequences range from operational risk to regulatory finding to incident liability.\n\nFor inspection teams operating in Kuala Lumpur, Malaysia, the inspection scheduling & interval management module is configured against local realities: PETRONAS HQ city. ASEAN energy gateway. Petronas Technical Standards (PTS) compliance. Pre-built templates support operator-specific quality clauses from PETRONAS upstream/downstream, PCSB, Petronas Chemicals (PCG), Sime Darby, and regulatory frameworks under DOSH (Department of Occupational Safety & Health), Suruhanjaya Tenaga (Energy Commission), NIOSH Malaysia are reflected in the workflow defaults. Atlantis NDT ERP is delivered as multi-tenant SaaS with regional data residency — a 5-person Kuala Lumpur inspection contractor and a 200-person multinational both run on the same platform.",
  "cityFeatures": [
    "API 510 pressure vessel due dates (external, internal, on-stream) entered by the inspector, with reminders before each falls due",
    "API 570 piping due dates by circuit and class, entered by the inspector, with reminders before each falls due",
    "API 653 tank due dates (routine, external, internal) entered by the inspector, with reminders before each falls due",
    "ASME B31.3 process piping due dates, including the severe cyclic service items the inspector flags",
    "Inspection due forecast: 30 / 60 / 90 / 180 / 365 day windows with criticality ranking",
    "Tailored for Kuala Lumpur workflow — pre-configured operator templates for PETRONAS upstream/downstream, PCSB, Petronas Chemicals (PCG)",
    "Regulatory alignment with DOSH (Department of Occupational Safety & Health), Suruhanjaya Tenaga (Energy Commission), NIOSH Malaysia — audit-ready evidence packages"
  ],
  "cityUseCases": [
    "A mid-size Kuala Lumpur inspection contractor serving PETRONAS upstream/downstream and PCSB deploys inspection scheduling & interval management as a standalone module — replacing spreadsheets and disconnected SaaS — and reports 60-80% admin-time reduction within 90 days.",
    "A Kuala Lumpur EPC quality team standardizes inspection scheduling & interval management across 4 simultaneous project sites in the Malaysia market. Daily reports, audit packages, and customer-format reports flow to Petronas Chemicals (PCG) portals automatically.",
    "A growing Kuala Lumpur-based service provider integrates inspection scheduling & interval management with accounting (QuickBooks / Xero / Tally for India / Sage / Reliance ERP) and the CMMS used by Sime Darby — eliminating duplicate data entry and reducing customer-facing report turnaround from 5 days to <24 hours.",
    "A regulator-audit-driven Kuala Lumpur inspection company uses inspection scheduling & interval management to pass DOSH (Department of Occupational Safety & Health) and Suruhanjaya Tenaga (Energy Commission) audits with zero findings — evidence packages assembled in 30 seconds vs. 80+ hours of manual prep."
  ],
  "cityOperators": [
    "PETRONAS upstream/downstream",
    "PCSB",
    "Petronas Chemicals (PCG)",
    "Sime Darby",
    "MISC",
    "Tenaga Nasional Berhad",
    "MLNG Bintulu"
  ],
  "cityRegulators": [
    "DOSH (Department of Occupational Safety & Health)",
    "Suruhanjaya Tenaga (Energy Commission)",
    "NIOSH Malaysia",
    "SIRIM QAS"
  ],
  "cityPain": [
    "Inspection Scheduling & Interval Management tracked in spreadsheets — always 2 months behind Kuala Lumpur operator-portal requirements",
    "DOSH (Department of Occupational Safety & Health) audit preparation takes 80+ hours per cycle — finds gaps too late to remediate",
    "Operator-portal flow-down from PETRONAS upstream/downstream updates monthly — internal procedures lag by weeks",
    "Customer-format reports for PCSB, Petronas Chemicals (PCG), Sime Darby require manual reformatting per submission"
  ],
  "faqs": [
    [
      "Is the inspection scheduling & interval management module configured for Kuala Lumpur operators?",
      "Yes. Pre-loaded operator-specific quality clauses, qualification schemes, and report formats for PETRONAS upstream/downstream, PCSB, Petronas Chemicals (PCG), Sime Darby, MISC. Atlantis NDT updates the operator-template library on a quarterly cadence so flow-down stays current with operator specification revisions."
    ],
    [
      "Does it comply with DOSH (Department of Occupational Safety & Health) and other Malaysia regulators?",
      "Yes. DOSH (Department of Occupational Safety & Health), Suruhanjaya Tenaga (Energy Commission), NIOSH Malaysia, SIRIM QAS requirements drive the audit-readiness defaults. Annual + ad-hoc inspections generate audit-package PDFs with full chain-of-custody, personnel qualification matrix, calibration records, and procedure revision history pre-assembled."
    ],
    [
      "What languages and currencies are supported for Kuala Lumpur?",
      "Platform supports English (primary), and where relevant for Malaysia: Arabic (Gulf), Bahasa Indonesia, Hindi/Marathi/Telugu (India), Mandarin (China/SG), Spanish/Portuguese (Americas), French (West Africa/Canada). Invoicing supports USD, EUR, GBP, AED, SAR, INR, SGD, AUD, CAD, IDR, MYR, QAR, NGN — full multi-currency with VAT/GST as applicable."
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
  "lat": 3.139,
  "lng": 101.6869
};
export default function ErpMC_inspection_scheduling_kuala_lumpur() { return <ErpModuleCityPage {...data} />; }
