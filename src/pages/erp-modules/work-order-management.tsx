import ErpModulePage from '@/components/ErpModulePage';
const data = {
  "slug": "work-order-management",
  "name": "Work Order & Job Management",
  "title": "Inspection Work Order & Job Management Software",
  "h1": "Work Order & Job Management Module",
  "desc": "End-to-end job lifecycle: quote → work order → resource assignment → field execution → report → invoice. Built for service inspection companies juggling 30–300 concurrent jobs across multiple clients and geographies.",
  "intro": "An inspection company is a project-based business. Each job has a unique scope, a unique customer specification, a unique team, a unique timeline, and a unique compliance footprint. Managing 30–300 concurrent jobs in Excel and email destroys margin: missed billing, lost reports, double-booked technicians, and the silent killer — work scope creep that nobody captures or charges for. The work order module is the operational backbone of the platform.",
  "features": [
    "Quote → Work Order → Project hierarchy with parent-child relationships",
    "Customer / contract / project / job / work order / line item — fully drilled-down billing structure",
    "Resource assignment: technicians, equipment, vehicles, sub-contractors, accommodation",
    "Per-line scope capture: method, asset, code, acceptance criteria, sample size, deliverable",
    "Field-app job execution: clock-in, GPS check-in, photo capture, data entry, supervisor sign-off",
    "Time, mileage, expense, per-diem capture with client billable / internal cost flags",
    "Variation order workflow with customer e-signature for scope changes mid-job",
    "Daily report (DPR) auto-generation: technicians worked, work completed, holds, photo summary",
    "Job profitability dashboard: budgeted hrs vs. actual hrs, scope variation revenue, gross margin",
    "Automated invoicing with line-item rates, day-rates, mileage, equipment usage chargeback",
    "Customer portal: live job status, daily reports, draft / final reports, invoice copies",
    "Sub-contractor and vendor management with PO, sub-cert tracking, payment status"
  ],
  "useCases": [
    "NDT contractor running 80 concurrent jobs across 4 refinery turnarounds",
    "Pipeline integrity company executing 250 IMP work orders against a 5-year MSA",
    "Calibration lab managing 1,500 monthly customer work orders with 5-day turnaround SLA",
    "Welding inspection company supporting 12 active EPC projects with daily reporting requirement",
    "Marine survey firm dispatching 6 surveyors across Mediterranean ports on a rolling basis"
  ],
  "industries": [
    "NDT inspection",
    "Pipeline integrity",
    "Marine survey",
    "Welding inspection",
    "Calibration laboratories",
    "Industrial coatings",
    "Geotechnical engineering"
  ],
  "integrations": [
    "QuickBooks Online",
    "Xero",
    "SAP S/4HANA",
    "Oracle NetSuite",
    "Microsoft Dynamics 365 Finance",
    "Sage Intacct"
  ],
  "faqs": [
    [
      "How does the system handle scope creep and variation orders mid-job?",
      "When a technician encounters out-of-scope work in the field they create a variation request from the mobile app — describing scope, estimated hours, and rate. The project manager reviews and forwards to the customer; the customer e-signs in the portal; only then is the work logged as billable. This eliminates the after-the-fact 'we forgot to charge for this' loss."
    ],
    [
      "Can the field app work offline at remote / offshore worksites?",
      "Yes. Field data entry, photo capture, signature collection, and supervisor sign-off all work offline. The app caches up to 30 days of work-order data locally. When connectivity is restored data syncs automatically with conflict detection and resolution. Suitable for offshore platforms, desert sites, remote pipelines, marine vessels."
    ],
    [
      "How are sub-contractor hours and invoices managed?",
      "Sub-contractor work orders mirror your internal work order structure with cost rates instead of bill rates. Sub-contractors enter their own time / mileage / expenses via a limited portal; you review and approve; the sub-contractor invoice is matched against the approved time and any variances flagged. Payment workflow integrates with your AP system."
    ],
    [
      "Does the customer portal show live job progress?",
      "Yes. The customer portal shows live job status per asset, work order, and project. Customers can view daily reports, photos, draft inspection reports, and project-level dashboards. Access can be restricted per user — a senior inspector might see all reports while a buyer sees only invoices and high-level status."
    ],
    [
      "Can it integrate with our existing accounting software for invoicing?",
      "Yes. Standard integrations with QuickBooks, Xero, NetSuite, Sage Intacct, SAP S/4HANA, and Microsoft Dynamics 365 push approved invoices to your AR ledger with proper customer, project, GL-code, and tax mapping. Sub-contractor bills flow to AP. Time-and-material work orders, fixed-price contracts, and milestone billing are all supported."
    ]
  ]
};
export default function ErpModule_work_order_management() { return <ErpModulePage {...data} />; }
