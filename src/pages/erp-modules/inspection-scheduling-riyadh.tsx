import ErpModuleCityPage from '@/components/ErpModuleCityPage';
const data = {
  "moduleSlug": "inspection-scheduling",
  "moduleName": "Inspection Scheduling & Interval Management",
  "citySlug": "riyadh",
  "cityName": "Riyadh",
  "country": "Saudi Arabia",
  "title": "Inspection Scheduling & Interval Management in Riyadh",
  "desc": "Inspection Scheduling & Interval Management ERP module for inspection companies in Riyadh, Saudi Arabia. Pre-configured for Saudi Aramco (corporate HQ), SABIC HQ and aligned with HRSD labor, GAMI. Demo: info@atlantisndt.com.",
  "intro": "Owner-operators and inspection contractors share one nightmare: discovering that an inspection due date has slipped past — and that nobody noticed. The consequences range from operational risk to regulatory finding to incident liability.\n\nFor inspection teams operating in Riyadh, Saudi Arabia, the inspection scheduling & interval management module is configured against local realities: Saudi corporate capital. Aramco / SABIC / Ma'aden HQs. Vision 2030 megaproject PMOs. Pre-built templates support operator-specific quality clauses from Saudi Aramco (corporate HQ), SABIC HQ, Ma'aden (mining HQ), NEOM PMO, and regulatory frameworks under HRSD labor, GAMI, SASO standards are reflected in the workflow defaults. Atlantis NDT ERP is delivered as multi-tenant SaaS with regional data residency — a 5-person Riyadh inspection contractor and a 200-person multinational both run on the same platform.",
  "cityFeatures": [
    "API 510 pressure vessel intervals: external 5-yr, internal half-remaining-life capped at 10-yr, or per RBI",
    "API 570 piping intervals by class: Class 1 (5/10), Class 2 (10/20), Class 3 (10/20+), or per RBI",
    "API 653 tank intervals: external monthly visual + 5-yr formal, internal 10-yr or per RBI",
    "ASME B31.3 process piping inspection intervals with severe cyclic service adjustments",
    "Risk-based inspection (RBI) per API 581 — import RBI assessment, use computed inspection plan",
    "Inspection due forecast: 30 / 60 / 90 / 180 / 365 day windows with criticality ranking",
    "Tailored for Riyadh workflow — pre-configured operator templates for Saudi Aramco (corporate HQ), SABIC HQ, Ma'aden (mining HQ)",
    "Regulatory alignment with HRSD labor, GAMI, SASO standards — audit-ready evidence packages"
  ],
  "cityUseCases": [
    "A mid-size Riyadh inspection contractor serving Saudi Aramco (corporate HQ) and SABIC HQ deploys inspection scheduling & interval management as a standalone module — replacing spreadsheets and disconnected SaaS — and reports 60-80% admin-time reduction within 90 days.",
    "A Riyadh EPC quality team standardizes inspection scheduling & interval management across 4 simultaneous project sites in the Saudi Arabia market. Daily reports, audit packages, and customer-format reports flow to Ma'aden (mining HQ) portals automatically.",
    "A growing Riyadh-based service provider integrates inspection scheduling & interval management with accounting (QuickBooks / Xero / Tally for India / Sage / Reliance ERP) and the CMMS used by NEOM PMO — eliminating duplicate data entry and reducing customer-facing report turnaround from 5 days to <24 hours.",
    "A regulator-audit-driven Riyadh inspection company uses inspection scheduling & interval management to pass HRSD labor and GAMI audits with zero findings — evidence packages assembled in 30 seconds vs. 80+ hours of manual prep."
  ],
  "cityOperators": [
    "Saudi Aramco (corporate HQ)",
    "SABIC HQ",
    "Ma'aden (mining HQ)",
    "NEOM PMO",
    "Qiddiya / Red Sea Global",
    "Saudi Electricity Company",
    "Royal Commission Riyadh City",
    "Riyadh Refinery (Aramco)"
  ],
  "cityRegulators": [
    "HRSD labor",
    "GAMI",
    "SASO standards",
    "Aramco SAEP-1112 / 1142",
    "MODON industrial cities",
    "RCJY"
  ],
  "cityPain": [
    "Inspection Scheduling & Interval Management tracked in spreadsheets — always 2 months behind Riyadh operator-portal requirements",
    "HRSD labor audit preparation takes 80+ hours per cycle — finds gaps too late to remediate",
    "Operator-portal flow-down from Saudi Aramco (corporate HQ) updates monthly — internal procedures lag by weeks",
    "Customer-format reports for SABIC HQ, Ma'aden (mining HQ), NEOM PMO require manual reformatting per submission"
  ],
  "faqs": [
    [
      "Is the inspection scheduling & interval management module configured for Riyadh operators?",
      "Yes. Pre-loaded operator-specific quality clauses, qualification schemes, and report formats for Saudi Aramco (corporate HQ), SABIC HQ, Ma'aden (mining HQ), NEOM PMO, Qiddiya / Red Sea Global. Atlantis NDT updates the operator-template library on a quarterly cadence so flow-down stays current with operator specification revisions."
    ],
    [
      "Does it comply with HRSD labor and other Saudi Arabia regulators?",
      "Yes. HRSD labor, GAMI, SASO standards, Aramco SAEP-1112 / 1142 requirements drive the audit-readiness defaults. Annual + ad-hoc inspections generate audit-package PDFs with full chain-of-custody, personnel qualification matrix, calibration records, and procedure revision history pre-assembled."
    ],
    [
      "What languages and currencies are supported for Riyadh?",
      "Platform supports English (primary), and where relevant for Saudi Arabia: Arabic (Gulf), Bahasa Indonesia, Hindi/Marathi/Telugu (India), Mandarin (China/SG), Spanish/Portuguese (Americas), French (West Africa/Canada). Invoicing supports USD, EUR, GBP, AED, SAR, INR, SGD, AUD, CAD, IDR, MYR, QAR, NGN — full multi-currency with VAT/GST as applicable."
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
  "lat": 24.7136,
  "lng": 46.6753
};
export default function ErpMC_inspection_scheduling_riyadh() { return <ErpModuleCityPage {...data} />; }
