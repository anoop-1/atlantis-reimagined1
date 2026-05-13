import ErpModuleCityPage from '@/components/ErpModuleCityPage';
const data = {
  "moduleSlug": "work-order-management",
  "moduleName": "Work Order & Job Management",
  "citySlug": "ho-chi-minh",
  "cityName": "Ho Chi Minh City",
  "country": "Vietnam",
  "title": "Work Order & Job Management in Ho Chi Minh City",
  "desc": "Work Order & Job Management ERP module for inspection companies in Ho Chi Minh City, Vietnam. Pre-configured for PetroVietnam (PVN), Vietsovpetro offshore JV and aligned with PetroVietnam vendor approval, MOIT Ministry of Industry and Trade. Demo: info@atlantisndt.com.",
  "intro": "An inspection company is a project-based business. Each job has a unique scope, a unique customer specification, a unique team, a unique timeline, and a unique compliance footprint.\n\nFor inspection teams operating in Ho Chi Minh City, Vietnam, the work order & job management module is configured against local realities: Vietnam upstream / petrochemical hub. PetroVietnam corporate. Long Son Petrochemicals. Dung Quat / Nghi Son refining. Pre-built templates support operator-specific quality clauses from PetroVietnam (PVN), Vietsovpetro offshore JV, Long Son Petrochemicals (SCG), Binh Son Refining (BSR, Dung Quat), and regulatory frameworks under PetroVietnam vendor approval, MOIT Ministry of Industry and Trade, VPI Vietnam Petroleum Institute are reflected in the workflow defaults. Atlantis NDT ERP is delivered as multi-tenant SaaS with regional data residency — a 5-person Ho Chi Minh City inspection contractor and a 200-person multinational both run on the same platform.",
  "cityFeatures": [
    "Quote → Work Order → Project hierarchy with parent-child relationships",
    "Customer / contract / project / job / work order / line item — fully drilled-down billing structure",
    "Resource assignment: technicians, equipment, vehicles, sub-contractors, accommodation",
    "Per-line scope capture: method, asset, code, acceptance criteria, sample size, deliverable",
    "Field-app job execution: clock-in, GPS check-in, photo capture, data entry, supervisor sign-off",
    "Time, mileage, expense, per-diem capture with client billable / internal cost flags",
    "Tailored for Ho Chi Minh City workflow — pre-configured operator templates for PetroVietnam (PVN), Vietsovpetro offshore JV, Long Son Petrochemicals (SCG)",
    "Regulatory alignment with PetroVietnam vendor approval, MOIT Ministry of Industry and Trade, VPI Vietnam Petroleum Institute — audit-ready evidence packages"
  ],
  "cityUseCases": [
    "A mid-size Ho Chi Minh City inspection contractor serving PetroVietnam (PVN) and Vietsovpetro offshore JV deploys work order & job management as a standalone module — replacing spreadsheets and disconnected SaaS — and reports 60-80% admin-time reduction within 90 days.",
    "A Ho Chi Minh City EPC quality team standardizes work order & job management across 4 simultaneous project sites in the Vietnam market. Daily reports, audit packages, and customer-format reports flow to Long Son Petrochemicals (SCG) portals automatically.",
    "A growing Ho Chi Minh City-based service provider integrates work order & job management with accounting (QuickBooks / Xero / Tally for India / Sage / Reliance ERP) and the CMMS used by Binh Son Refining (BSR, Dung Quat) — eliminating duplicate data entry and reducing customer-facing report turnaround from 5 days to <24 hours.",
    "A regulator-audit-driven Ho Chi Minh City inspection company uses work order & job management to pass PetroVietnam vendor approval and MOIT Ministry of Industry and Trade audits with zero findings — evidence packages assembled in 30 seconds vs. 80+ hours of manual prep."
  ],
  "cityOperators": [
    "PetroVietnam (PVN)",
    "Vietsovpetro offshore JV",
    "Long Son Petrochemicals (SCG)",
    "Binh Son Refining (BSR, Dung Quat)",
    "Nghi Son Refinery (Idemitsu / Kuwait JV)",
    "PV Gas",
    "PV Drilling (PVD)",
    "Phu My Industrial Park"
  ],
  "cityRegulators": [
    "PetroVietnam vendor approval",
    "MOIT Ministry of Industry and Trade",
    "VPI Vietnam Petroleum Institute",
    "VARANS radiation",
    "VINAMARINE maritime"
  ],
  "cityPain": [
    "Work Order & Job Management tracked in spreadsheets — always 2 months behind Ho Chi Minh City operator-portal requirements",
    "PetroVietnam vendor approval audit preparation takes 80+ hours per cycle — finds gaps too late to remediate",
    "Operator-portal flow-down from PetroVietnam (PVN) updates monthly — internal procedures lag by weeks",
    "Customer-format reports for Vietsovpetro offshore JV, Long Son Petrochemicals (SCG), Binh Son Refining (BSR, Dung Quat) require manual reformatting per submission"
  ],
  "faqs": [
    [
      "Is the work order & job management module configured for Ho Chi Minh City operators?",
      "Yes. Pre-loaded operator-specific quality clauses, qualification schemes, and report formats for PetroVietnam (PVN), Vietsovpetro offshore JV, Long Son Petrochemicals (SCG), Binh Son Refining (BSR, Dung Quat), Nghi Son Refinery (Idemitsu / Kuwait JV). Atlantis NDT updates the operator-template library on a quarterly cadence so flow-down stays current with operator specification revisions."
    ],
    [
      "Does it comply with PetroVietnam vendor approval and other Vietnam regulators?",
      "Yes. PetroVietnam vendor approval, MOIT Ministry of Industry and Trade, VPI Vietnam Petroleum Institute, VARANS radiation requirements drive the audit-readiness defaults. Annual + ad-hoc inspections generate audit-package PDFs with full chain-of-custody, personnel qualification matrix, calibration records, and procedure revision history pre-assembled."
    ],
    [
      "What languages and currencies are supported for Ho Chi Minh City?",
      "Platform supports English (primary), and where relevant for Vietnam: Arabic (Gulf), Bahasa Indonesia, Hindi/Marathi/Telugu (India), Mandarin (China/SG), Spanish/Portuguese (Americas), French (West Africa/Canada). Invoicing supports USD, EUR, GBP, AED, SAR, INR, SGD, AUD, CAD, IDR, MYR, QAR, NGN — full multi-currency with VAT/GST as applicable."
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
  "lat": 10.8231,
  "lng": 106.6297
};
export default function ErpMC_work_order_management_ho_chi_minh() { return <ErpModuleCityPage {...data} />; }
