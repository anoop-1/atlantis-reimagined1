import ErpModuleCityPage from '@/components/ErpModuleCityPage';
const data = {
  "moduleSlug": "work-order-management",
  "moduleName": "Work Order & Job Management",
  "citySlug": "kuala-lumpur",
  "cityName": "Kuala Lumpur",
  "country": "Malaysia",
  "title": "Work Order & Job Management in Kuala Lumpur",
  "desc": "Work Order & Job Management ERP module for inspection companies in Kuala Lumpur, Malaysia. Pre-configured for PETRONAS upstream/downstream, PCSB and aligned with DOSH (Department of Occupational Safety & Health), Suruhanjaya Tenaga (Energy Commission). Demo: info@atlantisndt.com.",
  "intro": "An inspection company is a project-based business. Each job has a unique scope, a unique customer specification, a unique team, a unique timeline, and a unique compliance footprint.\n\nFor inspection teams operating in Kuala Lumpur, Malaysia, the work order & job management module is configured against local realities: PETRONAS HQ city. ASEAN energy gateway. Petronas Technical Standards (PTS) compliance. Pre-built templates support operator-specific quality clauses from PETRONAS upstream/downstream, PCSB, Petronas Chemicals (PCG), Sime Darby, and regulatory frameworks under DOSH (Department of Occupational Safety & Health), Suruhanjaya Tenaga (Energy Commission), NIOSH Malaysia are reflected in the workflow defaults. Atlantis NDT ERP is delivered as multi-tenant SaaS with regional data residency — a 5-person Kuala Lumpur inspection contractor and a 200-person multinational both run on the same platform.",
  "cityFeatures": [
    "Quote → Work Order → Project hierarchy with parent-child relationships",
    "Customer / contract / project / job / work order / line item — fully drilled-down billing structure",
    "Resource assignment: technicians, equipment, vehicles, sub-contractors, accommodation",
    "Per-line scope capture: method, asset, code, acceptance criteria, sample size, deliverable",
    "Field-app job execution: clock-in, GPS check-in, photo capture, data entry, supervisor sign-off",
    "Time, mileage, expense, per-diem capture with client billable / internal cost flags",
    "Tailored for Kuala Lumpur workflow — pre-configured operator templates for PETRONAS upstream/downstream, PCSB, Petronas Chemicals (PCG)",
    "Regulatory alignment with DOSH (Department of Occupational Safety & Health), Suruhanjaya Tenaga (Energy Commission), NIOSH Malaysia — audit-ready evidence packages"
  ],
  "cityUseCases": [
    "A mid-size Kuala Lumpur inspection contractor serving PETRONAS upstream/downstream and PCSB deploys work order & job management as a standalone module — replacing spreadsheets and disconnected SaaS — and reports 60-80% admin-time reduction within 90 days.",
    "A Kuala Lumpur EPC quality team standardizes work order & job management across 4 simultaneous project sites in the Malaysia market. Daily reports, audit packages, and customer-format reports flow to Petronas Chemicals (PCG) portals automatically.",
    "A growing Kuala Lumpur-based service provider integrates work order & job management with accounting (QuickBooks / Xero / Tally for India / Sage / Reliance ERP) and the CMMS used by Sime Darby — eliminating duplicate data entry and reducing customer-facing report turnaround from 5 days to <24 hours.",
    "A regulator-audit-driven Kuala Lumpur inspection company uses work order & job management to pass DOSH (Department of Occupational Safety & Health) and Suruhanjaya Tenaga (Energy Commission) audits with zero findings — evidence packages assembled in 30 seconds vs. 80+ hours of manual prep."
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
    "Work Order & Job Management tracked in spreadsheets — always 2 months behind Kuala Lumpur operator-portal requirements",
    "DOSH (Department of Occupational Safety & Health) audit preparation takes 80+ hours per cycle — finds gaps too late to remediate",
    "Operator-portal flow-down from PETRONAS upstream/downstream updates monthly — internal procedures lag by weeks",
    "Customer-format reports for PCSB, Petronas Chemicals (PCG), Sime Darby require manual reformatting per submission"
  ],
  "faqs": [
    [
      "Is the work order & job management module configured for Kuala Lumpur operators?",
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
      "How does the system handle scope creep and variation orders mid-job?",
      "When a technician encounters out-of-scope work in the field they create a variation request from the mobile app — describing scope, estimated hours, and rate. The project manager reviews and forwards to the customer; the customer e-signs in the portal; only then is the work logged as billable. This eliminates the after-the-fact 'we forgot to charge for this' loss."
    ],
    [
      "Can the field app work offline at remote / offshore worksites?",
      "Yes. Field data entry, photo capture, signature collection, and supervisor sign-off all work offline. The app caches up to 30 days of work-order data locally. When connectivity is restored data syncs automatically with conflict detection and resolution. Suitable for offshore platforms, desert sites, remote pipelines, marine vessels."
    ]
  ],
  "lat": 3.139,
  "lng": 101.6869
};
export default function ErpMC_work_order_management_kuala_lumpur() { return <ErpModuleCityPage {...data} />; }
