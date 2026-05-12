import ErpModulePage from '@/components/ErpModulePage';
const data = {
  "slug": "project-management",
  "name": "Project Management & Turnaround Support",
  "title": "Project Management Software for Inspection Projects & Turnarounds",
  "h1": "Project Management & Turnaround Support Module",
  "desc": "Multi-discipline project planning, resource leveling, daily reporting, hold-point management, and budget tracking for inspection projects ranging from single-shift jobs to 90-day refinery turnarounds.",
  "intro": "Inspection on a major project is project management at industrial scale: 200 inspectors across 5 work fronts, 24-hour operation, holds at 12 critical inspection points, daily delivery of inspection reports to the EPC contractor, and a 90-day window before commissioning. Spreadsheets and email simply cannot manage this. The project management module is built for the largest turnaround / shutdown / new-build inspection campaigns.",
  "features": [
    "Project / sub-project hierarchy with parent project for major turnaround campaigns",
    "WBS (work breakdown structure) per project with budget, schedule, resource forecast",
    "Resource leveling across simultaneous work fronts (UT crew, RT crew, PT crew, supervision)",
    "Shift scheduling for 24/7 operations with handover documentation",
    "Hold-point management: customer / regulatory / engineering hold definitions and notification workflow",
    "Daily progress report (DPR) with inspection counts, holds, photo summary, blockers, manpower",
    "Earned value management (EVM): planned value, earned value, actual cost, CPI, SPI",
    "Sub-contractor coordination with PO, sub-cert tracking, and payment milestones",
    "Mobilization / demobilization checklists per project",
    "Project-specific document control: customer specifications, procedures, QPs, ITPs",
    "Risk register per project with mitigation tracking",
    "Lessons-learned capture and roll-forward to next project"
  ],
  "useCases": [
    "90-day refinery turnaround with 250 inspectors across 8 process units",
    "Greenfield petrochemical plant commissioning with 18-month inspection campaign",
    "Pipeline construction project with 800 km of new-build inspection per API 1104",
    "LNG terminal hydrotest and pre-commissioning inspection program",
    "FPSO conversion project at shipyard with multi-discipline inspection scope"
  ],
  "industries": [
    "Oil & gas refining",
    "Petrochemical turnarounds",
    "Pipeline construction",
    "LNG construction",
    "FPSO conversion",
    "Shipyard new-build"
  ],
  "integrations": [
    "Primavera P6",
    "Microsoft Project",
    "Procore",
    "Bentley SYNCHRO",
    "Aconex / Oracle CCMP",
    "InEight"
  ],
  "faqs": [
    [
      "How does the system handle hold points and notification of customer / engineer?",
      "Hold points are defined per work order with hold type (W = witness, H = hold, R = review). When the work approaches a hold point the field app prompts the technician to issue a notification 24–48 hours in advance per the project's notification matrix. The customer / engineer confirms attendance; if waived, the witness/hold is automatically released with rationale logged."
    ],
    [
      "Can it integrate with Primavera P6 or Microsoft Project for schedule?",
      "Yes. The project schedule can be authored in Primavera P6 or MS Project and imported via XML / XER. Inspection activities are mapped to schedule activities; progress flows back from inspection completion data to the schedule. Bi-directional integration keeps the inspection plan and the project schedule aligned at all times."
    ],
    [
      "How are daily progress reports (DPRs) generated?",
      "DPRs are auto-assembled from field-app data at end-of-shift: inspections completed (count by method), holds active, blockers reported, photo gallery, manpower count, equipment status, and HSE incidents. The supervisor reviews, adds narrative, and submits. Customer-format templates ensure the DPR matches the EPC contractor's requirements."
    ],
    [
      "Does it support 24-hour shift operations with handover?",
      "Yes. Shift handover at change-of-watch is supported with a formal handover document covering work-in-progress, holds, customer concerns, and HSE notes. The incoming supervisor signs receipt; the outgoing supervisor signs off. The handover document becomes part of the project record."
    ],
    [
      "How is earned value (EV) calculated for inspection campaigns?",
      "Per work-package planned hours and budgeted cost. As inspections are completed against the WBS, earned value accrues at the budgeted rate for completed work. Cost performance index (CPI = EV/AC) and schedule performance index (SPI = EV/PV) update in real time, with forecast at completion (FAC) and estimate to complete (ETC) projected from current trends."
    ]
  ]
};
export default function ErpModule_project_management() { return <ErpModulePage {...data} />; }
