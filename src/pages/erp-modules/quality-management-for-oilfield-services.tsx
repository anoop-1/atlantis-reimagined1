import ErpModuleIndustryPage from '@/components/ErpModuleIndustryPage';
const data = {
  "moduleSlug": "quality-management",
  "moduleName": "Quality Management & NCR",
  "industrySlug": "oilfield-services",
  "industryName": "Oilfield Services & Wellsite Inspection",
  "title": "Quality Management & NCR for Oilfield Services & Wellsite Inspection",
  "desc": "Quality Management & NCR for Oilfield Services & Wellsite Inspection — purpose-configured module from Atlantis NDT ERP. API Spec 4F (drilling derricks), API Spec 6A (wellhead), API Spec 16A (drill-through equipment). Demo: info@atlantisndt.com.",
  "intro": "Every accredited inspection company runs a quality management system. Whether it's ISO 9001, ISO 17025, AS9100, IATF 16949, or all of the above, the QMS needs to be functional — not just paper.\n\nFor oilfield services & wellsite inspection, the quality management & ncr module is configured around the codes, regulators, and operator-specific requirements you face every day: API Spec 4F (drilling derricks), API Spec 6A (wellhead), API Spec 16A (drill-through equipment), API Spec 16D (BOP control), API RP 53 (BOP). Pre-built workflows, report templates, and qualification matrices match the operator-specific quality clauses from ExxonMobil — upstream, Chevron — upstream, Shell — upstream, BP — upstream so your team is productive on day one — not after six months of configuration.",
  "industryFeatures": [
    "Nonconformance report (NCR) workflow: identification → containment → investigation → disposition → closure",
    "Root cause analysis tools: 5-Why, fishbone (Ishikawa), fault tree, FMEA",
    "CAPA lifecycle: corrective action → preventive action → effectiveness review",
    "Customer complaint intake and tracking with response-time SLA",
    "Supplier quality scorecard: on-time delivery, defect rate, audit performance, recall history",
    "Internal audit + external audit + accreditation audit integration (links to Audit Management module)",
    "Tailored for oilfield services & wellsite inspection — pre-configured templates, terminology, and reports",
    "Integrates with ExxonMobil — upstream, Chevron — upstream, Shell — upstream vendor-portal flow-down requirements"
  ],
  "industryUseCases": [
    "A 25-person oilfield services & wellsite inspection runs quality management & ncr as a standalone module — replacing 3 spreadsheets and 2 disconnected SaaS tools — and reports a 60–80% reduction in administrative time within 90 days.",
    "A multinational oilfield services & wellsite inspection deploys quality management & ncr across 12 sites under a global rollout. Region-specific data residency and language localization support GDPR, India DPDP Act, and Saudi NDMO requirements.",
    "A growing oilfield services & wellsite inspection integrates quality management & ncr with their existing ERP (NetSuite, QuickBooks, or SAP) and CMMS — eliminating duplicate data entry and reducing customer-facing report turnaround from 5 days to <24 hours.",
    "An audit-driven oilfield services & wellsite inspection uses quality management & ncr to pass ISO 9001 / ISO 17025 / AS9100 / customer-specific quality audits with zero findings — evidence packages assembled in 30 seconds vs. 80+ hours of manual prep."
  ],
  "industryCodes": [
    "API Spec 4F (drilling derricks)",
    "API Spec 6A (wellhead)",
    "API Spec 16A (drill-through equipment)",
    "API Spec 16D (BOP control)",
    "API RP 53 (BOP)",
    "API RP 5A5 (OCTG inspection)",
    "API RP 5C5 / 5C6 / 5C7 (casing / tubing)",
    "ISO 13501 / 13628 (subsea)"
  ],
  "industryOperators": [
    "ExxonMobil — upstream",
    "Chevron — upstream",
    "Shell — upstream",
    "BP — upstream",
    "ConocoPhillips — upstream",
    "Saudi Aramco upstream",
    "ADNOC Onshore",
    "PEMEX upstream"
  ],
  "industryPain": [
    "Field-ticket capture on paper — billing disputes, days lost in invoicing",
    "Rig / BOP test scheduling on Excel — compliance findings from regulator",
    "Casing / tubing inspection records scattered — no aggregated wellbore data",
    "OCTG inventory (drill collars, casing, tubing) — no real-time location tracking"
  ],
  "faqs": [
    [
      "Does quality management & ncr work specifically for oilfield services & wellsite inspection?",
      "Yes. The module is configured for oilfield services & wellsite inspection workflow with pre-built templates aligned to API Spec 4F (drilling derricks), API Spec 6A (wellhead), API Spec 16A (drill-through equipment), API Spec 16D (BOP control). Operator-specific quality clauses for ExxonMobil — upstream, Chevron — upstream, Shell — upstream are pre-loaded so the system is productive on day one without months of custom configuration."
    ],
    [
      "How does the system integrate with our existing oilfield services & wellsite inspection tools?",
      "Standard integration via REST API with major oilfield services & wellsite inspection systems. Atlantis NDT ERP can run as the system of record for quality management & ncr while flowing relevant data to your accounting (QuickBooks / Xero / NetSuite / SAP / Dynamics), CMMS (Maximo / SAP PM / Meridium / AspenTech APM), and customer-portal systems. Bi-directional sync keeps everything aligned."
    ],
    [
      "Can it scale from a small oilfield services & wellsite inspection to a global multinational?",
      "Yes. Atlantis NDT ERP is delivered as multi-tenant SaaS — a 5-person oilfield services & wellsite inspection pays a small monthly subscription with the same feature set as a 500-person global operation. Modules can be turned on individually or as a bundle; only pay for what you use."
    ],
    [
      "How is the NCR → CAPA workflow structured?",
      "An NCR is opened on discovery (audit finding, customer complaint, internal observation, recurring issue). The workflow forces containment first (stop the bleeding), then investigation (root cause), then corrective action (fix this occurrence), then preventive action (stop it happening elsewhere). Effectiveness review 60–180 days later verifies the fix held. Each stage has a responsible owner, target date, and approval signature."
    ],
    [
      "Does it support AS9100D customer-specific quality clauses?",
      "Yes. AS9100D §4.4 requires that customer-specific quality clauses (e.g., Boeing D6-82479, Airbus PSPs, Pratt & Whitney ASQR-01) are flow-down to internal processes. The system maintains a customer-clause register with cross-reference to internal procedures, training records, and audit evidence."
    ]
  ]
};
export default function ErpCross_quality_management_for_oilfield_services() { return <ErpModuleIndustryPage {...data} />; }
