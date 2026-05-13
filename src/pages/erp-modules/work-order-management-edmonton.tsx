import ErpModuleCityPage from '@/components/ErpModuleCityPage';
const data = {
  "moduleSlug": "work-order-management",
  "moduleName": "Work Order & Job Management",
  "citySlug": "edmonton",
  "cityName": "Edmonton",
  "country": "Canada",
  "title": "Work Order & Job Management in Edmonton",
  "desc": "Work Order & Job Management ERP module for inspection companies in Edmonton, Canada. Pre-configured for Imperial Oil Strathcona refinery, Suncor Edmonton refinery and aligned with ABSA pressure equipment, AER Alberta Energy Regulator. Demo: info@atlantisndt.com.",
  "intro": "An inspection company is a project-based business. Each job has a unique scope, a unique customer specification, a unique team, a unique timeline, and a unique compliance footprint.\n\nFor inspection teams operating in Edmonton, Canada, the work order & job management module is configured against local realities: Alberta Industrial Heartland. Imperial Strathcona, Suncor Edmonton, Shell Scotford, NWR Sturgeon refineries. Pre-built templates support operator-specific quality clauses from Imperial Oil Strathcona refinery, Suncor Edmonton refinery, Shell Scotford (refinery + upgrader), NWR Sturgeon Refinery, and regulatory frameworks under ABSA pressure equipment, AER Alberta Energy Regulator, CER pipelines are reflected in the workflow defaults. Atlantis NDT ERP is delivered as multi-tenant SaaS with regional data residency — a 5-person Edmonton inspection contractor and a 200-person multinational both run on the same platform.",
  "cityFeatures": [
    "Quote → Work Order → Project hierarchy with parent-child relationships",
    "Customer / contract / project / job / work order / line item — fully drilled-down billing structure",
    "Resource assignment: technicians, equipment, vehicles, sub-contractors, accommodation",
    "Per-line scope capture: method, asset, code, acceptance criteria, sample size, deliverable",
    "Field-app job execution: clock-in, GPS check-in, photo capture, data entry, supervisor sign-off",
    "Time, mileage, expense, per-diem capture with client billable / internal cost flags",
    "Tailored for Edmonton workflow — pre-configured operator templates for Imperial Oil Strathcona refinery, Suncor Edmonton refinery, Shell Scotford (refinery + upgrader)",
    "Regulatory alignment with ABSA pressure equipment, AER Alberta Energy Regulator, CER pipelines — audit-ready evidence packages"
  ],
  "cityUseCases": [
    "A mid-size Edmonton inspection contractor serving Imperial Oil Strathcona refinery and Suncor Edmonton refinery deploys work order & job management as a standalone module — replacing spreadsheets and disconnected SaaS — and reports 60-80% admin-time reduction within 90 days.",
    "A Edmonton EPC quality team standardizes work order & job management across 4 simultaneous project sites in the Canada market. Daily reports, audit packages, and customer-format reports flow to Shell Scotford (refinery + upgrader) portals automatically.",
    "A growing Edmonton-based service provider integrates work order & job management with accounting (QuickBooks / Xero / Tally for India / Sage / Reliance ERP) and the CMMS used by NWR Sturgeon Refinery — eliminating duplicate data entry and reducing customer-facing report turnaround from 5 days to <24 hours.",
    "A regulator-audit-driven Edmonton inspection company uses work order & job management to pass ABSA pressure equipment and AER Alberta Energy Regulator audits with zero findings — evidence packages assembled in 30 seconds vs. 80+ hours of manual prep."
  ],
  "cityOperators": [
    "Imperial Oil Strathcona refinery",
    "Suncor Edmonton refinery",
    "Shell Scotford (refinery + upgrader)",
    "NWR Sturgeon Refinery",
    "Inter Pipeline HPC",
    "Pembina Pipeline",
    "Dow Fort Saskatchewan",
    "Nutrien Redwater"
  ],
  "cityRegulators": [
    "ABSA pressure equipment",
    "AER Alberta Energy Regulator",
    "CER pipelines",
    "CSA Group",
    "Transport Canada radiation",
    "Alberta OHS"
  ],
  "cityPain": [
    "Work Order & Job Management tracked in spreadsheets — always 2 months behind Edmonton operator-portal requirements",
    "ABSA pressure equipment audit preparation takes 80+ hours per cycle — finds gaps too late to remediate",
    "Operator-portal flow-down from Imperial Oil Strathcona refinery updates monthly — internal procedures lag by weeks",
    "Customer-format reports for Suncor Edmonton refinery, Shell Scotford (refinery + upgrader), NWR Sturgeon Refinery require manual reformatting per submission"
  ],
  "faqs": [
    [
      "Is the work order & job management module configured for Edmonton operators?",
      "Yes. Pre-loaded operator-specific quality clauses, qualification schemes, and report formats for Imperial Oil Strathcona refinery, Suncor Edmonton refinery, Shell Scotford (refinery + upgrader), NWR Sturgeon Refinery, Inter Pipeline HPC. Atlantis NDT updates the operator-template library on a quarterly cadence so flow-down stays current with operator specification revisions."
    ],
    [
      "Does it comply with ABSA pressure equipment and other Canada regulators?",
      "Yes. ABSA pressure equipment, AER Alberta Energy Regulator, CER pipelines, CSA Group requirements drive the audit-readiness defaults. Annual + ad-hoc inspections generate audit-package PDFs with full chain-of-custody, personnel qualification matrix, calibration records, and procedure revision history pre-assembled."
    ],
    [
      "What languages and currencies are supported for Edmonton?",
      "Platform supports English (primary), and where relevant for Canada: Arabic (Gulf), Bahasa Indonesia, Hindi/Marathi/Telugu (India), Mandarin (China/SG), Spanish/Portuguese (Americas), French (West Africa/Canada). Invoicing supports USD, EUR, GBP, AED, SAR, INR, SGD, AUD, CAD, IDR, MYR, QAR, NGN — full multi-currency with VAT/GST as applicable."
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
  "lat": 53.5461,
  "lng": -113.4938
};
export default function ErpMC_work_order_management_edmonton() { return <ErpModuleCityPage {...data} />; }
