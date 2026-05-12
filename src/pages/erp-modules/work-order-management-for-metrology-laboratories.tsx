import ErpModuleIndustryPage from '@/components/ErpModuleIndustryPage';
const data = {
  "moduleSlug": "work-order-management",
  "moduleName": "Work Order & Job Management",
  "industrySlug": "metrology-laboratories",
  "industryName": "Metrology Laboratories",
  "title": "Work Order & Job Management for Metrology Laboratories",
  "desc": "Work Order & Job Management for Metrology Laboratories — purpose-configured module from Atlantis NDT ERP. ISO/IEC 17025:2017, ISO 10012:2003 (measurement management), ANSI/NCSL Z540.1 / Z540.3. Demo: info@atlantisndt.com.",
  "intro": "An inspection company is a project-based business. Each job has a unique scope, a unique customer specification, a unique team, a unique timeline, and a unique compliance footprint.\n\nFor metrology laboratories, the work order & job management module is configured around the codes, regulators, and operator-specific requirements you face every day: ISO/IEC 17025:2017, ISO 10012:2003 (measurement management), ANSI/NCSL Z540.1 / Z540.3, ILAC P14 (uncertainty), JCGM 100:2008 (GUM). Pre-built workflows, report templates, and qualification matrices match the operator-specific quality clauses from Mitutoyo (instrument OEM), Fluke Calibration (instrument OEM), Beamex (instrument OEM), Heise (pressure) so your team is productive on day one — not after six months of configuration.",
  "industryFeatures": [
    "Quote → Work Order → Project hierarchy with parent-child relationships",
    "Customer / contract / project / job / work order / line item — fully drilled-down billing structure",
    "Resource assignment: technicians, equipment, vehicles, sub-contractors, accommodation",
    "Per-line scope capture: method, asset, code, acceptance criteria, sample size, deliverable",
    "Field-app job execution: clock-in, GPS check-in, photo capture, data entry, supervisor sign-off",
    "Time, mileage, expense, per-diem capture with client billable / internal cost flags",
    "Tailored for metrology laboratories — pre-configured templates, terminology, and reports",
    "Integrates with Mitutoyo (instrument OEM), Fluke Calibration (instrument OEM), Beamex (instrument OEM) vendor-portal flow-down requirements"
  ],
  "industryUseCases": [
    "A 25-person metrology laboratory runs work order & job management as a standalone module — replacing 3 spreadsheets and 2 disconnected SaaS tools — and reports a 60–80% reduction in administrative time within 90 days.",
    "A multinational metrology laboratories deploys work order & job management across 12 sites under a global rollout. Region-specific data residency and language localization support GDPR, India DPDP Act, and Saudi NDMO requirements.",
    "A growing metrology laboratory integrates work order & job management with their existing ERP (NetSuite, QuickBooks, or SAP) and CMMS — eliminating duplicate data entry and reducing customer-facing report turnaround from 5 days to <24 hours.",
    "An audit-driven metrology laboratories uses work order & job management to pass ISO 9001 / ISO 17025 / AS9100 / customer-specific quality audits with zero findings — evidence packages assembled in 30 seconds vs. 80+ hours of manual prep."
  ],
  "industryCodes": [
    "ISO/IEC 17025:2017",
    "ISO 10012:2003 (measurement management)",
    "ANSI/NCSL Z540.1 / Z540.3",
    "ILAC P14 (uncertainty)",
    "JCGM 100:2008 (GUM)",
    "ASME B89.7.3.1 (decision rules)",
    "ASTM E2935 (proficiency testing)",
    "OIML R 76 (mass)"
  ],
  "industryOperators": [
    "Mitutoyo (instrument OEM)",
    "Fluke Calibration (instrument OEM)",
    "Beamex (instrument OEM)",
    "Heise (pressure)",
    "WIKA (pressure)",
    "Mettler-Toledo (mass)",
    "Sartorius (mass)",
    "Keysight Technologies (electrical)"
  ],
  "industryPain": [
    "Multi-discipline measurement uncertainty in spreadsheets — error-prone, inconsistent",
    "Customer-asset receipt / dispatch — instruments lost in lab, repeat customer calls",
    "Manual cert numbering and re-issue management — audit findings",
    "Proficiency testing / interlab-comparison records scattered — accreditation finding"
  ],
  "faqs": [
    [
      "Does work order & job management work specifically for metrology laboratories?",
      "Yes. The module is configured for metrology laboratories workflow with pre-built templates aligned to ISO/IEC 17025:2017, ISO 10012:2003 (measurement management), ANSI/NCSL Z540.1 / Z540.3, ILAC P14 (uncertainty). Operator-specific quality clauses for Mitutoyo (instrument OEM), Fluke Calibration (instrument OEM), Beamex (instrument OEM) are pre-loaded so the system is productive on day one without months of custom configuration."
    ],
    [
      "How does the system integrate with our existing metrology laboratories tools?",
      "Standard integration via REST API with major metrology laboratories systems. Atlantis NDT ERP can run as the system of record for work order & job management while flowing relevant data to your accounting (QuickBooks / Xero / NetSuite / SAP / Dynamics), CMMS (Maximo / SAP PM / Meridium / AspenTech APM), and customer-portal systems. Bi-directional sync keeps everything aligned."
    ],
    [
      "Can it scale from a small metrology laboratories to a global multinational?",
      "Yes. Atlantis NDT ERP is delivered as multi-tenant SaaS — a 5-person metrology laboratory pays a small monthly subscription with the same feature set as a 500-person global operation. Modules can be turned on individually or as a bundle; only pay for what you use."
    ],
    [
      "How does the system handle scope creep and variation orders mid-job?",
      "When a technician encounters out-of-scope work in the field they create a variation request from the mobile app — describing scope, estimated hours, and rate. The project manager reviews and forwards to the customer; the customer e-signs in the portal; only then is the work logged as billable. This eliminates the after-the-fact 'we forgot to charge for this' loss."
    ],
    [
      "Can the field app work offline at remote / offshore worksites?",
      "Yes. Field data entry, photo capture, signature collection, and supervisor sign-off all work offline. The app caches up to 30 days of work-order data locally. When connectivity is restored data syncs automatically with conflict detection and resolution. Suitable for offshore platforms, desert sites, remote pipelines, marine vessels."
    ]
  ]
};
export default function ErpCross_work_order_management_for_metrology_laboratories() { return <ErpModuleIndustryPage {...data} />; }
