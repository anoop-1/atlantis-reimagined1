import ErpModuleCityPage from '@/components/ErpModuleCityPage';
const data = {
  "moduleSlug": "work-order-management",
  "moduleName": "Work Order & Job Management",
  "citySlug": "mexico-city",
  "cityName": "Mexico City",
  "country": "Mexico",
  "title": "Work Order & Job Management in Mexico City",
  "desc": "Work Order & Job Management ERP module for inspection companies in Mexico City, Mexico. Pre-configured for Pemex (corporate + 6 refineries), Pemex Exploracion y Produccion and aligned with CNH Hydrocarbons Commission, ASEA (SASISOPA). Demo: info@atlantisndt.com.",
  "intro": "An inspection company is a project-based business. Each job has a unique scope, a unique customer specification, a unique team, a unique timeline, and a unique compliance footprint.\n\nFor inspection teams operating in Mexico City, Mexico, the work order & job management module is configured against local realities: Pemex corporate HQ. CNH regulator. 6 Pemex refineries + Dos Bocas Olmeca new refinery. Pre-built templates support operator-specific quality clauses from Pemex (corporate + 6 refineries), Pemex Exploracion y Produccion, CFE electricity, Cemex (cement HQ), and regulatory frameworks under CNH Hydrocarbons Commission, ASEA (SASISOPA), STPS (NOM regulations) are reflected in the workflow defaults. Atlantis NDT ERP is delivered as multi-tenant SaaS with regional data residency — a 5-person Mexico City inspection contractor and a 200-person multinational both run on the same platform.",
  "cityFeatures": [
    "Quote → Work Order → Project hierarchy with parent-child relationships",
    "Customer / contract / project / job / work order / line item — fully drilled-down billing structure",
    "Resource assignment: technicians, equipment, vehicles, sub-contractors, accommodation",
    "Per-line scope capture: method, asset, code, acceptance criteria, sample size, deliverable",
    "Field-app job execution: clock-in, GPS check-in, photo capture, data entry, supervisor sign-off",
    "Time, mileage, expense, per-diem capture with client billable / internal cost flags",
    "Tailored for Mexico City workflow — pre-configured operator templates for Pemex (corporate + 6 refineries), Pemex Exploracion y Produccion, CFE electricity",
    "Regulatory alignment with CNH Hydrocarbons Commission, ASEA (SASISOPA), STPS (NOM regulations) — audit-ready evidence packages"
  ],
  "cityUseCases": [
    "A mid-size Mexico City inspection contractor serving Pemex (corporate + 6 refineries) and Pemex Exploracion y Produccion deploys work order & job management as a standalone module — replacing spreadsheets and disconnected SaaS — and reports 60-80% admin-time reduction within 90 days.",
    "A Mexico City EPC quality team standardizes work order & job management across 4 simultaneous project sites in the Mexico market. Daily reports, audit packages, and customer-format reports flow to CFE electricity portals automatically.",
    "A growing Mexico City-based service provider integrates work order & job management with accounting (QuickBooks / Xero / Tally for India / Sage / Reliance ERP) and the CMMS used by Cemex (cement HQ) — eliminating duplicate data entry and reducing customer-facing report turnaround from 5 days to <24 hours.",
    "A regulator-audit-driven Mexico City inspection company uses work order & job management to pass CNH Hydrocarbons Commission and ASEA (SASISOPA) audits with zero findings — evidence packages assembled in 30 seconds vs. 80+ hours of manual prep."
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
    "Work Order & Job Management tracked in spreadsheets — always 2 months behind Mexico City operator-portal requirements",
    "CNH Hydrocarbons Commission audit preparation takes 80+ hours per cycle — finds gaps too late to remediate",
    "Operator-portal flow-down from Pemex (corporate + 6 refineries) updates monthly — internal procedures lag by weeks",
    "Customer-format reports for Pemex Exploracion y Produccion, CFE electricity, Cemex (cement HQ) require manual reformatting per submission"
  ],
  "faqs": [
    [
      "Is the work order & job management module configured for Mexico City operators?",
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
      "How does the system handle scope creep and variation orders mid-job?",
      "When a technician encounters out-of-scope work in the field they create a variation request from the mobile app — describing scope, estimated hours, and rate. The project manager reviews and forwards to the customer; the customer e-signs in the portal; only then is the work logged as billable. This eliminates the after-the-fact 'we forgot to charge for this' loss."
    ],
    [
      "Can the field app work offline at remote / offshore worksites?",
      "Yes. Field data entry, photo capture, signature collection, and supervisor sign-off all work offline. The app caches up to 30 days of work-order data locally. When connectivity is restored data syncs automatically with conflict detection and resolution. Suitable for offshore platforms, desert sites, remote pipelines, marine vessels."
    ]
  ],
  "lat": 19.4326,
  "lng": -99.1332
};
export default function ErpMC_work_order_management_mexico_city() { return <ErpModuleCityPage {...data} />; }
