import ErpModuleCityPage from '@/components/ErpModuleCityPage';
const data = {
  "moduleSlug": "inspection-scheduling",
  "moduleName": "Inspection Scheduling & Interval Management",
  "citySlug": "mexico-city",
  "cityName": "Mexico City",
  "country": "Mexico",
  "title": "Inspection Scheduling & Interval Management in Mexico City",
  "desc": "Inspection Scheduling & Interval Management ERP module for inspection companies in Mexico City, Mexico. Pre-configured for Pemex (corporate + 6 refineries), Pemex Exploracion y Produccion and aligned with CNH Hydrocarbons Commission, ASEA (SASISOPA). Demo: info@atlantisndt.com.",
  "intro": "Owner-operators and inspection contractors share one nightmare: discovering that an inspection due date has slipped past — and that nobody noticed. The consequences range from operational risk to regulatory finding to incident liability.\n\nFor inspection teams operating in Mexico City, Mexico, the inspection scheduling & interval management module is configured against local realities: Pemex corporate HQ. CNH regulator. 6 Pemex refineries + Dos Bocas Olmeca new refinery. Pre-built templates support operator-specific quality clauses from Pemex (corporate + 6 refineries), Pemex Exploracion y Produccion, CFE electricity, Cemex (cement HQ), and regulatory frameworks under CNH Hydrocarbons Commission, ASEA (SASISOPA), STPS (NOM regulations) are reflected in the workflow defaults. Atlantis NDT ERP is delivered as multi-tenant SaaS with regional data residency — a 5-person Mexico City inspection contractor and a 200-person multinational both run on the same platform.",
  "cityFeatures": [
    "API 510 pressure vessel intervals: external 5-yr, internal half-remaining-life capped at 10-yr, or per RBI",
    "API 570 piping intervals by class: Class 1 (5/10), Class 2 (10/20), Class 3 (10/20+), or per RBI",
    "API 653 tank intervals: external monthly visual + 5-yr formal, internal 10-yr or per RBI",
    "ASME B31.3 process piping inspection intervals with severe cyclic service adjustments",
    "Risk-based inspection (RBI) per API 581 — import RBI assessment, use computed inspection plan",
    "Inspection due forecast: 30 / 60 / 90 / 180 / 365 day windows with criticality ranking",
    "Tailored for Mexico City workflow — pre-configured operator templates for Pemex (corporate + 6 refineries), Pemex Exploracion y Produccion, CFE electricity",
    "Regulatory alignment with CNH Hydrocarbons Commission, ASEA (SASISOPA), STPS (NOM regulations) — audit-ready evidence packages"
  ],
  "cityUseCases": [
    "A mid-size Mexico City inspection contractor serving Pemex (corporate + 6 refineries) and Pemex Exploracion y Produccion deploys inspection scheduling & interval management as a standalone module — replacing spreadsheets and disconnected SaaS — and reports 60-80% admin-time reduction within 90 days.",
    "A Mexico City EPC quality team standardizes inspection scheduling & interval management across 4 simultaneous project sites in the Mexico market. Daily reports, audit packages, and customer-format reports flow to CFE electricity portals automatically.",
    "A growing Mexico City-based service provider integrates inspection scheduling & interval management with accounting (QuickBooks / Xero / Tally for India / Sage / Reliance ERP) and the CMMS used by Cemex (cement HQ) — eliminating duplicate data entry and reducing customer-facing report turnaround from 5 days to <24 hours.",
    "A regulator-audit-driven Mexico City inspection company uses inspection scheduling & interval management to pass CNH Hydrocarbons Commission and ASEA (SASISOPA) audits with zero findings — evidence packages assembled in 30 seconds vs. 80+ hours of manual prep."
  ],
  "cityOperators": [
    "Pemex (corporate + 6 refineries)",
    "Pemex Exploracion y Produccion",
    "CFE electricity",
    "Cemex (cement HQ)",
    "Grupo BAL",
    "Grupo Mexico (mining)",
    "Iberdrola Mexico",
    "Sempra Energia Costa Azul"
  ],
  "cityRegulators": [
    "CNH Hydrocarbons Commission",
    "ASEA (SASISOPA)",
    "STPS (NOM regulations)",
    "CRE",
    "EMA accreditation"
  ],
  "cityPain": [
    "Inspection Scheduling & Interval Management tracked in spreadsheets — always 2 months behind Mexico City operator-portal requirements",
    "CNH Hydrocarbons Commission audit preparation takes 80+ hours per cycle — finds gaps too late to remediate",
    "Operator-portal flow-down from Pemex (corporate + 6 refineries) updates monthly — internal procedures lag by weeks",
    "Customer-format reports for Pemex Exploracion y Produccion, CFE electricity, Cemex (cement HQ) require manual reformatting per submission"
  ],
  "faqs": [
    [
      "Is the inspection scheduling & interval management module configured for Mexico City operators?",
      "Yes. Pre-loaded operator-specific quality clauses, qualification schemes, and report formats for Pemex (corporate + 6 refineries), Pemex Exploracion y Produccion, CFE electricity, Cemex (cement HQ), Grupo BAL. Atlantis NDT updates the operator-template library on a quarterly cadence so flow-down stays current with operator specification revisions."
    ],
    [
      "Does it comply with CNH Hydrocarbons Commission and other Mexico regulators?",
      "Yes. CNH Hydrocarbons Commission, ASEA (SASISOPA), STPS (NOM regulations), CRE requirements drive the audit-readiness defaults. Annual + ad-hoc inspections generate audit-package PDFs with full chain-of-custody, personnel qualification matrix, calibration records, and procedure revision history pre-assembled."
    ],
    [
      "What languages and currencies are supported for Mexico City?",
      "Platform supports English (primary), and where relevant for Mexico: Arabic (Gulf), Bahasa Indonesia, Hindi/Marathi/Telugu (India), Mandarin (China/SG), Spanish/Portuguese (Americas), French (West Africa/Canada). Invoicing supports USD, EUR, GBP, AED, SAR, INR, SGD, AUD, CAD, IDR, MYR, QAR, NGN — full multi-currency with VAT/GST as applicable."
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
  "lat": 19.4326,
  "lng": -99.1332
};
export default function ErpMC_inspection_scheduling_mexico_city() { return <ErpModuleCityPage {...data} />; }
