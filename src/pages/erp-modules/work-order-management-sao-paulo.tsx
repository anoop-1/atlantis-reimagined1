import ErpModuleCityPage from '@/components/ErpModuleCityPage';
const data = {
  "moduleSlug": "work-order-management",
  "moduleName": "Work Order & Job Management",
  "citySlug": "sao-paulo",
  "cityName": "Sao Paulo",
  "country": "Brazil",
  "title": "Work Order & Job Management in Sao Paulo",
  "desc": "Work Order & Job Management ERP module for inspection companies in Sao Paulo, Brazil. Pre-configured for Petrobras (Replan Paulinia, Revap, Cubatao RPBC), USIMINAS (Cubatao steel) and aligned with ANP, Ibama environment. Demo: info@atlantisndt.com.",
  "intro": "An inspection company is a project-based business. Each job has a unique scope, a unique customer specification, a unique team, a unique timeline, and a unique compliance footprint.\n\nFor inspection teams operating in Sao Paulo, Brazil, the work order & job management module is configured against local realities: Brazil industrial powerhouse. Petrobras Replan / Revap refineries. EMBRAER aerospace. Cubatao steel. Pre-built templates support operator-specific quality clauses from Petrobras (Replan Paulinia, Revap, Cubatao RPBC), USIMINAS (Cubatao steel), CSN (Volta Redonda), EMBRAER (Sao Jose dos Campos), and regulatory frameworks under ANP, Ibama environment, CNEN radiation are reflected in the workflow defaults. Atlantis NDT ERP is delivered as multi-tenant SaaS with regional data residency — a 5-person Sao Paulo inspection contractor and a 200-person multinational both run on the same platform.",
  "cityFeatures": [
    "Quote → Work Order → Project hierarchy with parent-child relationships",
    "Customer / contract / project / job / work order / line item — fully drilled-down billing structure",
    "Resource assignment: technicians, equipment, vehicles, sub-contractors, accommodation",
    "Per-line scope capture: method, asset, code, acceptance criteria, sample size, deliverable",
    "Field-app job execution: clock-in, GPS check-in, photo capture, data entry, supervisor sign-off",
    "Time, mileage, expense, per-diem capture with client billable / internal cost flags",
    "Tailored for Sao Paulo workflow — pre-configured operator templates for Petrobras (Replan Paulinia, Revap, Cubatao RPBC), USIMINAS (Cubatao steel), CSN (Volta Redonda)",
    "Regulatory alignment with ANP, Ibama environment, CNEN radiation — audit-ready evidence packages"
  ],
  "cityUseCases": [
    "A mid-size Sao Paulo inspection contractor serving Petrobras (Replan Paulinia, Revap, Cubatao RPBC) and USIMINAS (Cubatao steel) deploys work order & job management as a standalone module — replacing spreadsheets and disconnected SaaS — and reports 60-80% admin-time reduction within 90 days.",
    "A Sao Paulo EPC quality team standardizes work order & job management across 4 simultaneous project sites in the Brazil market. Daily reports, audit packages, and customer-format reports flow to CSN (Volta Redonda) portals automatically.",
    "A growing Sao Paulo-based service provider integrates work order & job management with accounting (QuickBooks / Xero / Tally for India / Sage / Reliance ERP) and the CMMS used by EMBRAER (Sao Jose dos Campos) — eliminating duplicate data entry and reducing customer-facing report turnaround from 5 days to <24 hours.",
    "A regulator-audit-driven Sao Paulo inspection company uses work order & job management to pass ANP and Ibama environment audits with zero findings — evidence packages assembled in 30 seconds vs. 80+ hours of manual prep."
  ],
  "cityOperators": [
    "Petrobras (Replan Paulinia, Revap, Cubatao RPBC)",
    "USIMINAS (Cubatao steel)",
    "CSN (Volta Redonda)",
    "EMBRAER (Sao Jose dos Campos)",
    "Braskem petrochemicals",
    "Vale mining HQ",
    "Cosan / Raizen",
    "Volkswagen do Brasil"
  ],
  "cityRegulators": [
    "ANP",
    "Ibama environment",
    "CNEN radiation",
    "INMETRO accreditation",
    "Ministerio do Trabalho (NR-13)"
  ],
  "cityPain": [
    "Work Order & Job Management tracked in spreadsheets — always 2 months behind Sao Paulo operator-portal requirements",
    "ANP audit preparation takes 80+ hours per cycle — finds gaps too late to remediate",
    "Operator-portal flow-down from Petrobras (Replan Paulinia, Revap, Cubatao RPBC) updates monthly — internal procedures lag by weeks",
    "Customer-format reports for USIMINAS (Cubatao steel), CSN (Volta Redonda), EMBRAER (Sao Jose dos Campos) require manual reformatting per submission"
  ],
  "faqs": [
    [
      "Is the work order & job management module configured for Sao Paulo operators?",
      "Yes. Pre-loaded operator-specific quality clauses, qualification schemes, and report formats for Petrobras (Replan Paulinia, Revap, Cubatao RPBC), USIMINAS (Cubatao steel), CSN (Volta Redonda), EMBRAER (Sao Jose dos Campos), Braskem petrochemicals. Atlantis NDT updates the operator-template library on a quarterly cadence so flow-down stays current with operator specification revisions."
    ],
    [
      "Does it comply with ANP and other Brazil regulators?",
      "Yes. ANP, Ibama environment, CNEN radiation, INMETRO accreditation requirements drive the audit-readiness defaults. Annual + ad-hoc inspections generate audit-package PDFs with full chain-of-custody, personnel qualification matrix, calibration records, and procedure revision history pre-assembled."
    ],
    [
      "What languages and currencies are supported for Sao Paulo?",
      "Platform supports English (primary), and where relevant for Brazil: Arabic (Gulf), Bahasa Indonesia, Hindi/Marathi/Telugu (India), Mandarin (China/SG), Spanish/Portuguese (Americas), French (West Africa/Canada). Invoicing supports USD, EUR, GBP, AED, SAR, INR, SGD, AUD, CAD, IDR, MYR, QAR, NGN — full multi-currency with VAT/GST as applicable."
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
  "lat": -23.5505,
  "lng": -46.6333
};
export default function ErpMC_work_order_management_sao_paulo() { return <ErpModuleCityPage {...data} />; }
