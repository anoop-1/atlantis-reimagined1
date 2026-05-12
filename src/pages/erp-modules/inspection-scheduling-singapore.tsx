import ErpModuleCityPage from '@/components/ErpModuleCityPage';
const data = {
  "moduleSlug": "inspection-scheduling",
  "moduleName": "Inspection Scheduling & Interval Management",
  "citySlug": "singapore",
  "cityName": "Singapore",
  "country": "Singapore",
  "title": "Inspection Scheduling & Interval Management in Singapore",
  "desc": "Inspection Scheduling & Interval Management ERP module for inspection companies in Singapore, Singapore. Pre-configured for ExxonMobil Jurong refinery, Shell Bukom and aligned with MOM (Ministry of Manpower), NEA environment. Demo: info@atlantisndt.com.",
  "intro": "Owner-operators and inspection contractors share one nightmare: discovering that an inspection due date has slipped past — and that nobody noticed. The consequences range from operational risk to regulatory finding to incident liability.\n\nFor inspection teams operating in Singapore, Singapore, the inspection scheduling & interval management module is configured against local realities: Jurong Island petrochem hub. FPSO conversion (Keppel, Sembcorp). MOM CERT compliance. Pre-built templates support operator-specific quality clauses from ExxonMobil Jurong refinery, Shell Bukom, Vopak storage, Sembcorp Marine FPSO, and regulatory frameworks under MOM (Ministry of Manpower), NEA environment, MPA marine are reflected in the workflow defaults. Atlantis NDT ERP is delivered as multi-tenant SaaS with regional data residency — a 5-person Singapore inspection contractor and a 200-person multinational both run on the same platform.",
  "cityFeatures": [
    "API 510 pressure vessel intervals: external 5-yr, internal half-remaining-life capped at 10-yr, or per RBI",
    "API 570 piping intervals by class: Class 1 (5/10), Class 2 (10/20), Class 3 (10/20+), or per RBI",
    "API 653 tank intervals: external monthly visual + 5-yr formal, internal 10-yr or per RBI",
    "ASME B31.3 process piping inspection intervals with severe cyclic service adjustments",
    "Risk-based inspection (RBI) per API 581 — import RBI assessment, use computed inspection plan",
    "Inspection due forecast: 30 / 60 / 90 / 180 / 365 day windows with criticality ranking",
    "Tailored for Singapore workflow — pre-configured operator templates for ExxonMobil Jurong refinery, Shell Bukom, Vopak storage",
    "Regulatory alignment with MOM (Ministry of Manpower), NEA environment, MPA marine — audit-ready evidence packages"
  ],
  "cityUseCases": [
    "A mid-size Singapore inspection contractor serving ExxonMobil Jurong refinery and Shell Bukom deploys inspection scheduling & interval management as a standalone module — replacing spreadsheets and disconnected SaaS — and reports 60-80% admin-time reduction within 90 days.",
    "A Singapore EPC quality team standardizes inspection scheduling & interval management across 4 simultaneous project sites in the Singapore market. Daily reports, audit packages, and customer-format reports flow to Vopak storage portals automatically.",
    "A growing Singapore-based service provider integrates inspection scheduling & interval management with accounting (QuickBooks / Xero / Tally for India / Sage / Reliance ERP) and the CMMS used by Sembcorp Marine FPSO — eliminating duplicate data entry and reducing customer-facing report turnaround from 5 days to <24 hours.",
    "A regulator-audit-driven Singapore inspection company uses inspection scheduling & interval management to pass MOM (Ministry of Manpower) and NEA environment audits with zero findings — evidence packages assembled in 30 seconds vs. 80+ hours of manual prep."
  ],
  "cityOperators": [
    "ExxonMobil Jurong refinery",
    "Shell Bukom",
    "Vopak storage",
    "Sembcorp Marine FPSO",
    "Keppel FPSO yards",
    "MODEC Singapore HQ",
    "BASF Jurong",
    "Lanxess Jurong"
  ],
  "cityRegulators": [
    "MOM (Ministry of Manpower)",
    "NEA environment",
    "MPA marine",
    "EDB Singapore",
    "BCA Building Authority"
  ],
  "cityPain": [
    "Inspection Scheduling & Interval Management tracked in spreadsheets — always 2 months behind Singapore operator-portal requirements",
    "MOM (Ministry of Manpower) audit preparation takes 80+ hours per cycle — finds gaps too late to remediate",
    "Operator-portal flow-down from ExxonMobil Jurong refinery updates monthly — internal procedures lag by weeks",
    "Customer-format reports for Shell Bukom, Vopak storage, Sembcorp Marine FPSO require manual reformatting per submission"
  ],
  "faqs": [
    [
      "Is the inspection scheduling & interval management module configured for Singapore operators?",
      "Yes. Pre-loaded operator-specific quality clauses, qualification schemes, and report formats for ExxonMobil Jurong refinery, Shell Bukom, Vopak storage, Sembcorp Marine FPSO, Keppel FPSO yards. Atlantis NDT updates the operator-template library on a quarterly cadence so flow-down stays current with operator specification revisions."
    ],
    [
      "Does it comply with MOM (Ministry of Manpower) and other Singapore regulators?",
      "Yes. MOM (Ministry of Manpower), NEA environment, MPA marine, EDB Singapore requirements drive the audit-readiness defaults. Annual + ad-hoc inspections generate audit-package PDFs with full chain-of-custody, personnel qualification matrix, calibration records, and procedure revision history pre-assembled."
    ],
    [
      "What languages and currencies are supported for Singapore?",
      "Platform supports English (primary), and where relevant for Singapore: Arabic (Gulf), Bahasa Indonesia, Hindi/Marathi/Telugu (India), Mandarin (China/SG), Spanish/Portuguese (Americas), French (West Africa/Canada). Invoicing supports USD, EUR, GBP, AED, SAR, INR, SGD, AUD, CAD, IDR, MYR, QAR, NGN — full multi-currency with VAT/GST as applicable."
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
  "lat": 1.3521,
  "lng": 103.8198
};
export default function ErpMC_inspection_scheduling_singapore() { return <ErpModuleCityPage {...data} />; }
