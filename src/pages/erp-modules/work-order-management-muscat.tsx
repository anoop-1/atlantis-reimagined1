import ErpModuleCityPage from '@/components/ErpModuleCityPage';
const data = {
  "moduleSlug": "work-order-management",
  "moduleName": "Work Order & Job Management",
  "citySlug": "muscat",
  "cityName": "Muscat",
  "country": "Oman",
  "title": "Work Order & Job Management in Muscat",
  "desc": "Work Order & Job Management ERP module for inspection companies in Muscat, Oman. Pre-configured for Petroleum Development Oman (PDO), OQ Refineries (Sohar, Muscat) and aligned with MEM Ministry of Energy and Minerals, Ministry of Labour. Demo: info@atlantisndt.com.",
  "intro": "An inspection company is a project-based business. Each job has a unique scope, a unique customer specification, a unique team, a unique timeline, and a unique compliance footprint.\n\nFor inspection teams operating in Muscat, Oman, the work order & job management module is configured against local realities: Oman corporate base. PDO upstream + OQ refining/petrochem at Sohar + Duqm SEZ megaproject. Pre-built templates support operator-specific quality clauses from Petroleum Development Oman (PDO), OQ Refineries (Sohar, Muscat), OQ Petrochemicals, Oman LNG (Qalhat), and regulatory frameworks under MEM Ministry of Energy and Minerals, Ministry of Labour, OPAZ (free zones) are reflected in the workflow defaults. Atlantis NDT ERP is delivered as multi-tenant SaaS with regional data residency — a 5-person Muscat inspection contractor and a 200-person multinational both run on the same platform.",
  "cityFeatures": [
    "Quote → Work Order → Project hierarchy with parent-child relationships",
    "Customer / contract / project / job / work order / line item — fully drilled-down billing structure",
    "Resource assignment: technicians, equipment, vehicles, sub-contractors, accommodation",
    "Per-line scope capture: method, asset, code, acceptance criteria, sample size, deliverable",
    "Field-app job execution: clock-in, GPS check-in, photo capture, data entry, supervisor sign-off",
    "Time, mileage, expense, per-diem capture with client billable / internal cost flags",
    "Tailored for Muscat workflow — pre-configured operator templates for Petroleum Development Oman (PDO), OQ Refineries (Sohar, Muscat), OQ Petrochemicals",
    "Regulatory alignment with MEM Ministry of Energy and Minerals, Ministry of Labour, OPAZ (free zones) — audit-ready evidence packages"
  ],
  "cityUseCases": [
    "A mid-size Muscat inspection contractor serving Petroleum Development Oman (PDO) and OQ Refineries (Sohar, Muscat) deploys work order & job management as a standalone module — replacing spreadsheets and disconnected SaaS — and reports 60-80% admin-time reduction within 90 days.",
    "A Muscat EPC quality team standardizes work order & job management across 4 simultaneous project sites in the Oman market. Daily reports, audit packages, and customer-format reports flow to OQ Petrochemicals portals automatically.",
    "A growing Muscat-based service provider integrates work order & job management with accounting (QuickBooks / Xero / Tally for India / Sage / Reliance ERP) and the CMMS used by Oman LNG (Qalhat) — eliminating duplicate data entry and reducing customer-facing report turnaround from 5 days to <24 hours.",
    "A regulator-audit-driven Muscat inspection company uses work order & job management to pass MEM Ministry of Energy and Minerals and Ministry of Labour audits with zero findings — evidence packages assembled in 30 seconds vs. 80+ hours of manual prep."
  ],
  "cityOperators": [
    "Petroleum Development Oman (PDO)",
    "OQ Refineries (Sohar, Muscat)",
    "OQ Petrochemicals",
    "Oman LNG (Qalhat)",
    "Duqm Refinery (OQ / Kuwait JV)",
    "Sohar Aluminium",
    "Vale Oman (Sohar pellet)",
    "Oman Cement"
  ],
  "cityRegulators": [
    "MEM Ministry of Energy and Minerals",
    "Ministry of Labour",
    "OPAZ (free zones)",
    "DGSM Omani Standards",
    "Ministry of Environment"
  ],
  "cityPain": [
    "Work Order & Job Management tracked in spreadsheets — always 2 months behind Muscat operator-portal requirements",
    "MEM Ministry of Energy and Minerals audit preparation takes 80+ hours per cycle — finds gaps too late to remediate",
    "Operator-portal flow-down from Petroleum Development Oman (PDO) updates monthly — internal procedures lag by weeks",
    "Customer-format reports for OQ Refineries (Sohar, Muscat), OQ Petrochemicals, Oman LNG (Qalhat) require manual reformatting per submission"
  ],
  "faqs": [
    [
      "Is the work order & job management module configured for Muscat operators?",
      "Yes. Pre-loaded operator-specific quality clauses, qualification schemes, and report formats for Petroleum Development Oman (PDO), OQ Refineries (Sohar, Muscat), OQ Petrochemicals, Oman LNG (Qalhat), Duqm Refinery (OQ / Kuwait JV). Atlantis NDT updates the operator-template library on a quarterly cadence so flow-down stays current with operator specification revisions."
    ],
    [
      "Does it comply with MEM Ministry of Energy and Minerals and other Oman regulators?",
      "Yes. MEM Ministry of Energy and Minerals, Ministry of Labour, OPAZ (free zones), DGSM Omani Standards requirements drive the audit-readiness defaults. Annual + ad-hoc inspections generate audit-package PDFs with full chain-of-custody, personnel qualification matrix, calibration records, and procedure revision history pre-assembled."
    ],
    [
      "What languages and currencies are supported for Muscat?",
      "Platform supports English (primary), and where relevant for Oman: Arabic (Gulf), Bahasa Indonesia, Hindi/Marathi/Telugu (India), Mandarin (China/SG), Spanish/Portuguese (Americas), French (West Africa/Canada). Invoicing supports USD, EUR, GBP, AED, SAR, INR, SGD, AUD, CAD, IDR, MYR, QAR, NGN — full multi-currency with VAT/GST as applicable."
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
  "lat": 23.5859,
  "lng": 58.4059
};
export default function ErpMC_work_order_management_muscat() { return <ErpModuleCityPage {...data} />; }
