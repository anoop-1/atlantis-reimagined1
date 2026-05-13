import ErpModuleCityPage from '@/components/ErpModuleCityPage';
const data = {
  "moduleSlug": "work-order-management",
  "moduleName": "Work Order & Job Management",
  "citySlug": "bangkok",
  "cityName": "Bangkok",
  "country": "Thailand",
  "title": "Work Order & Job Management in Bangkok",
  "desc": "Work Order & Job Management ERP module for inspection companies in Bangkok, Thailand. Pre-configured for PTT Public Company, Thai Oil (TOP, Sriracha refinery) and aligned with DOEB Department of Energy Business, DIW Department of Industrial Works. Demo: info@atlantisndt.com.",
  "intro": "An inspection company is a project-based business. Each job has a unique scope, a unique customer specification, a unique team, a unique timeline, and a unique compliance footprint.\n\nFor inspection teams operating in Bangkok, Thailand, the work order & job management module is configured against local realities: PTT Group corporate base. EEC corridor: Map Ta Phut, Rayong refining & petrochemicals. Pre-built templates support operator-specific quality clauses from PTT Public Company, Thai Oil (TOP, Sriracha refinery), IRPC Rayong refining + petrochemicals, PTT Global Chemical (Map Ta Phut), and regulatory frameworks under DOEB Department of Energy Business, DIW Department of Industrial Works, TISI Thai Industrial Standards are reflected in the workflow defaults. Atlantis NDT ERP is delivered as multi-tenant SaaS with regional data residency — a 5-person Bangkok inspection contractor and a 200-person multinational both run on the same platform.",
  "cityFeatures": [
    "Quote → Work Order → Project hierarchy with parent-child relationships",
    "Customer / contract / project / job / work order / line item — fully drilled-down billing structure",
    "Resource assignment: technicians, equipment, vehicles, sub-contractors, accommodation",
    "Per-line scope capture: method, asset, code, acceptance criteria, sample size, deliverable",
    "Field-app job execution: clock-in, GPS check-in, photo capture, data entry, supervisor sign-off",
    "Time, mileage, expense, per-diem capture with client billable / internal cost flags",
    "Tailored for Bangkok workflow — pre-configured operator templates for PTT Public Company, Thai Oil (TOP, Sriracha refinery), IRPC Rayong refining + petrochemicals",
    "Regulatory alignment with DOEB Department of Energy Business, DIW Department of Industrial Works, TISI Thai Industrial Standards — audit-ready evidence packages"
  ],
  "cityUseCases": [
    "A mid-size Bangkok inspection contractor serving PTT Public Company and Thai Oil (TOP, Sriracha refinery) deploys work order & job management as a standalone module — replacing spreadsheets and disconnected SaaS — and reports 60-80% admin-time reduction within 90 days.",
    "A Bangkok EPC quality team standardizes work order & job management across 4 simultaneous project sites in the Thailand market. Daily reports, audit packages, and customer-format reports flow to IRPC Rayong refining + petrochemicals portals automatically.",
    "A growing Bangkok-based service provider integrates work order & job management with accounting (QuickBooks / Xero / Tally for India / Sage / Reliance ERP) and the CMMS used by PTT Global Chemical (Map Ta Phut) — eliminating duplicate data entry and reducing customer-facing report turnaround from 5 days to <24 hours.",
    "A regulator-audit-driven Bangkok inspection company uses work order & job management to pass DOEB Department of Energy Business and DIW Department of Industrial Works audits with zero findings — evidence packages assembled in 30 seconds vs. 80+ hours of manual prep."
  ],
  "cityOperators": [
    "PTT Public Company",
    "Thai Oil (TOP, Sriracha refinery)",
    "IRPC Rayong refining + petrochemicals",
    "PTT Global Chemical (Map Ta Phut)",
    "Bangchak Corporation",
    "Star Petroleum Refining",
    "SCG Chemicals",
    "PTTEP"
  ],
  "cityRegulators": [
    "DOEB Department of Energy Business",
    "DIW Department of Industrial Works",
    "TISI Thai Industrial Standards",
    "OAP Office of Atoms for Peace",
    "Ministry of Labour"
  ],
  "cityPain": [
    "Work Order & Job Management tracked in spreadsheets — always 2 months behind Bangkok operator-portal requirements",
    "DOEB Department of Energy Business audit preparation takes 80+ hours per cycle — finds gaps too late to remediate",
    "Operator-portal flow-down from PTT Public Company updates monthly — internal procedures lag by weeks",
    "Customer-format reports for Thai Oil (TOP, Sriracha refinery), IRPC Rayong refining + petrochemicals, PTT Global Chemical (Map Ta Phut) require manual reformatting per submission"
  ],
  "faqs": [
    [
      "Is the work order & job management module configured for Bangkok operators?",
      "Yes. Pre-loaded operator-specific quality clauses, qualification schemes, and report formats for PTT Public Company, Thai Oil (TOP, Sriracha refinery), IRPC Rayong refining + petrochemicals, PTT Global Chemical (Map Ta Phut), Bangchak Corporation. Atlantis NDT updates the operator-template library on a quarterly cadence so flow-down stays current with operator specification revisions."
    ],
    [
      "Does it comply with DOEB Department of Energy Business and other Thailand regulators?",
      "Yes. DOEB Department of Energy Business, DIW Department of Industrial Works, TISI Thai Industrial Standards, OAP Office of Atoms for Peace requirements drive the audit-readiness defaults. Annual + ad-hoc inspections generate audit-package PDFs with full chain-of-custody, personnel qualification matrix, calibration records, and procedure revision history pre-assembled."
    ],
    [
      "What languages and currencies are supported for Bangkok?",
      "Platform supports English (primary), and where relevant for Thailand: Arabic (Gulf), Bahasa Indonesia, Hindi/Marathi/Telugu (India), Mandarin (China/SG), Spanish/Portuguese (Americas), French (West Africa/Canada). Invoicing supports USD, EUR, GBP, AED, SAR, INR, SGD, AUD, CAD, IDR, MYR, QAR, NGN — full multi-currency with VAT/GST as applicable."
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
  "lat": 13.7563,
  "lng": 100.5018
};
export default function ErpMC_work_order_management_bangkok() { return <ErpModuleCityPage {...data} />; }
