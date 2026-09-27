import ErpModulePage from '@/components/ErpModulePage';
const data = {
  "slug": "quality-management",
  "name": "Quality Management & NCR",
  "title": "Quality Management Software for Inspection & Service Companies",
  "h1": "Quality Management & NCR Module",
  "desc": "Non-conformance reports (NCR), corrective and preventive action (CAPA), supplier quality, customer complaint management, management review — full ISO 9001:2015 / ISO 17025:2017 / AS9100D / IATF 16949 QMS support.",
  "intro": "Every accredited inspection company runs a quality management system. Whether it's ISO 9001, ISO 17025, AS9100, IATF 16949, or all of the above, the QMS needs to be functional — not just paper. Atlantis NDT ERP's QMS module provides the operational machinery: nonconformance logging, root-cause analysis, corrective and preventive action lifecycle, supplier quality scoring, customer-complaint handling, and management-review dashboards.",
  "features": [
    "Nonconformance report (NCR) workflow: identification → containment → investigation → disposition → closure",
    "Root cause analysis tools: 5-Why, fishbone (Ishikawa), fault tree, FMEA",
    "CAPA lifecycle: corrective action → preventive action → effectiveness review",
    "Customer complaint intake and tracking with response-time SLA",
    "Supplier quality scorecard: on-time delivery, defect rate, audit performance, recall history",
    "Internal audit + external audit + accreditation audit integration (links to Audit Management module)",
    "Management review dashboard: KPI trending, finding trends, customer satisfaction, complaint trends",
    "ISO 9001:2015 Clause 9 (performance evaluation) data capture",
    "Quality cost tracking: prevention, appraisal, internal failure, external failure",
    "Customer satisfaction survey workflow with auto-distribution and response capture",
    "Quality objectives + targets tracker per ISO 9001 §6.2",
    "Risk register per ISO 9001 §6.1 with mitigation tracking"
  ],
  "useCases": [
    "ISO 9001 / ISO 17025 / ISO 45001 integrated management system",
    "AS9100D aerospace QMS with customer-specific quality clauses (Boeing, Airbus, Pratt & Whitney)",
    "IATF 16949 automotive supply chain quality system",
    "API Q1 / Q2 oilfield equipment / service quality management",
    "Inspection contractor with multi-client quality requirements"
  ],
  "industries": [
    "NDT inspection",
    "Aerospace QA",
    "Automotive QA",
    "Welding & fabrication",
    "Calibration laboratories",
    "Industrial coatings"
  ],
  "integrations": [
    "MasterControl",
    "ETQ Reliance",
    "Sparta TrackWise",
    "Pilgrim SmartSolve",
    "Veeva QualityOne",
    "iso quality systems"
  ],
  "faqs": [
    [
      "How is the NCR → CAPA workflow structured?",
      "An NCR is opened on discovery (audit finding, customer complaint, internal observation, recurring issue). The workflow forces containment first (stop the bleeding), then investigation (root cause), then corrective action (fix this occurrence), then preventive action (stop it happening elsewhere). Effectiveness review 60–180 days later verifies the fix held. Each stage has a responsible owner, target date, and approval signature."
    ],
    [
      "Does it support AS9100D customer-specific quality clauses?",
      "Yes. AS9100D §4.4 requires that customer-specific quality clauses (e.g., Boeing D6-82479, Airbus PSPs, Pratt & Whitney ASQR-01) are flow-down to internal processes. The system maintains a customer-clause register with cross-reference to internal procedures, training records, and audit evidence."
    ],
    [
      "How is supplier quality scored and monitored?",
      "Each supplier (sub-contractor, material supplier, calibration service) has a quality scorecard tracking on-time delivery %, defect rate (PPM), audit performance, recall history, and response-time SLA. Scorecards auto-update from work order, NCR, and audit data. Suppliers below threshold are flagged for re-evaluation or removal from the approved-supplier list."
    ],
    [
      "Does it generate management review packages per ISO 9001 §9.3?",
      "Yes. The management review pack auto-assembles the inputs required by ISO 9001 §9.3.2: customer satisfaction, audit results, supplier performance, NCR / CAPA trends, KPI achievement, risk register status, opportunities for improvement, and process performance data. Outputs (decisions, actions, resources) are captured in the same record."
    ],
    [
      "How are quality objectives + KPIs tracked over time?",
      "Quality objectives are defined per ISO 9001 §6.2 with measurable target, owner, reporting frequency, and data source. KPIs update automatically from underlying transactional data (work orders, NCRs, customer satisfaction surveys). Trend charts, target-vs-actual gauges, and exception alerts surface on the management dashboard."
    ]
  ]
};
export default function ErpModule_quality_management() { return <ErpModulePage {...data} />; }
