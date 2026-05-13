import ErpModuleCityPage from '@/components/ErpModuleCityPage';
const data = {
  "moduleSlug": "work-order-management",
  "moduleName": "Work Order & Job Management",
  "citySlug": "riyadh",
  "cityName": "Riyadh",
  "country": "Saudi Arabia",
  "title": "Work Order & Job Management in Riyadh",
  "desc": "Work Order & Job Management ERP module for inspection companies in Riyadh, Saudi Arabia. Pre-configured for Saudi Aramco (corporate HQ), SABIC HQ and aligned with HRSD labor, GAMI. Demo: info@atlantisndt.com.",
  "intro": "An inspection company is a project-based business. Each job has a unique scope, a unique customer specification, a unique team, a unique timeline, and a unique compliance footprint.\n\nFor inspection teams operating in Riyadh, Saudi Arabia, the work order & job management module is configured against local realities: Saudi corporate capital. Aramco / SABIC / Ma'aden HQs. Vision 2030 megaproject PMOs. Pre-built templates support operator-specific quality clauses from Saudi Aramco (corporate HQ), SABIC HQ, Ma'aden (mining HQ), NEOM PMO, and regulatory frameworks under HRSD labor, GAMI, SASO standards are reflected in the workflow defaults. Atlantis NDT ERP is delivered as multi-tenant SaaS with regional data residency — a 5-person Riyadh inspection contractor and a 200-person multinational both run on the same platform.",
  "cityFeatures": [
    "Quote → Work Order → Project hierarchy with parent-child relationships",
    "Customer / contract / project / job / work order / line item — fully drilled-down billing structure",
    "Resource assignment: technicians, equipment, vehicles, sub-contractors, accommodation",
    "Per-line scope capture: method, asset, code, acceptance criteria, sample size, deliverable",
    "Field-app job execution: clock-in, GPS check-in, photo capture, data entry, supervisor sign-off",
    "Time, mileage, expense, per-diem capture with client billable / internal cost flags",
    "Tailored for Riyadh workflow — pre-configured operator templates for Saudi Aramco (corporate HQ), SABIC HQ, Ma'aden (mining HQ)",
    "Regulatory alignment with HRSD labor, GAMI, SASO standards — audit-ready evidence packages"
  ],
  "cityUseCases": [
    "A mid-size Riyadh inspection contractor serving Saudi Aramco (corporate HQ) and SABIC HQ deploys work order & job management as a standalone module — replacing spreadsheets and disconnected SaaS — and reports 60-80% admin-time reduction within 90 days.",
    "A Riyadh EPC quality team standardizes work order & job management across 4 simultaneous project sites in the Saudi Arabia market. Daily reports, audit packages, and customer-format reports flow to Ma'aden (mining HQ) portals automatically.",
    "A growing Riyadh-based service provider integrates work order & job management with accounting (QuickBooks / Xero / Tally for India / Sage / Reliance ERP) and the CMMS used by NEOM PMO — eliminating duplicate data entry and reducing customer-facing report turnaround from 5 days to <24 hours.",
    "A regulator-audit-driven Riyadh inspection company uses work order & job management to pass HRSD labor and GAMI audits with zero findings — evidence packages assembled in 30 seconds vs. 80+ hours of manual prep."
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
    "Work Order & Job Management tracked in spreadsheets — always 2 months behind Riyadh operator-portal requirements",
    "HRSD labor audit preparation takes 80+ hours per cycle — finds gaps too late to remediate",
    "Operator-portal flow-down from Saudi Aramco (corporate HQ) updates monthly — internal procedures lag by weeks",
    "Customer-format reports for SABIC HQ, Ma'aden (mining HQ), NEOM PMO require manual reformatting per submission"
  ],
  "faqs": [
    [
      "Is the work order & job management module configured for Riyadh operators?",
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
      "How does the system handle scope creep and variation orders mid-job?",
      "When a technician encounters out-of-scope work in the field they create a variation request from the mobile app — describing scope, estimated hours, and rate. The project manager reviews and forwards to the customer; the customer e-signs in the portal; only then is the work logged as billable. This eliminates the after-the-fact 'we forgot to charge for this' loss."
    ],
    [
      "Can the field app work offline at remote / offshore worksites?",
      "Yes. Field data entry, photo capture, signature collection, and supervisor sign-off all work offline. The app caches up to 30 days of work-order data locally. When connectivity is restored data syncs automatically with conflict detection and resolution. Suitable for offshore platforms, desert sites, remote pipelines, marine vessels."
    ]
  ],
  "lat": 24.7136,
  "lng": 46.6753
};
export default function ErpMC_work_order_management_riyadh() { return <ErpModuleCityPage {...data} />; }
