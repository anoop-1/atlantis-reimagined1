import ErpIndustryPage from '@/components/ErpIndustryPage';
const data = {
  "slug": "construction-quality-assurance",
  "name": "Construction Quality Assurance",
  "title": "ERP for Construction QA / QC Companies (EPC, Civil, Infrastructure)",
  "h1": "ERP for Construction QA / QC Companies",
  "desc": "QA / QC inspection management for EPC, civil, and infrastructure projects. Concrete testing, structural-steel inspection, welding QC per AWS D1.1, soil compaction per ASTM D698 / D1557, ITP / WPS execution, and project closeout dossier assembly.",
  "intro": "Construction QA / QC companies sit on the critical path of EPC, civil, and infrastructure projects. Concrete cylinder breaks, structural-steel inspection, welding QC, soil compaction tests, FAT / SAT execution, hydrotest witnessing, and project closeout dossier (PCD) assembly all flow through the QA / QC team. Atlantis ERP's construction QA configuration manages the full lifecycle.",
  "modules": [
    "work-order-management",
    "project-management",
    "document-control",
    "quality-management",
    "audit-management",
    "asset-management",
    "certification-tracking",
    "inventory-management"
  ],
  "regs": [
    "AWS D1.1 / D1.5 (welding)",
    "ACI 318 / 301 (concrete)",
    "ASTM D698 / D1557 (soil compaction)",
    "ASTM C39 / C31 (concrete cylinder)",
    "ASTM E329 / E1155 (concrete floor flatness)",
    "AS 3600 (concrete — Australia)",
    "EN 1090 (steel — EU)",
    "ISO 17636 (RT for welds)",
    "AISC 360 (steel design)",
    "IBC / IRC (US building codes)"
  ],
  "operators": [
    "Bechtel — EPC",
    "Fluor — EPC",
    "Jacobs — engineering",
    "WSP — engineering",
    "AECOM — civil / defense",
    "Skanska — construction",
    "Lendlease — construction",
    "VINCI — construction",
    "Hyundai E&C — EPC",
    "Samsung E&A — EPC"
  ],
  "pain": [
    "ITP execution tracked on paper — mid-project audit findings of missed hold points",
    "Concrete cylinder break data in lab notebooks — month-end reconciliation chaos",
    "FAT / SAT execution scattered across email — handover punch list missed",
    "Multi-discipline NCRs tracked separately — root cause patterns invisible",
    "Project closeout dossier (PCD) assembly takes 6+ weeks at project end"
  ],
  "faqs": [
    [
      "Does it manage ITP (Inspection and Test Plan) execution?",
      "Yes. ITPs are imported per project with each activity having hold (H), witness (W), review (R) classification, responsibility (contractor / engineer / client / regulator), and reference document. As construction progresses each ITP line is signed off; hold points block downstream work until released."
    ],
    [
      "How are concrete cylinder breaks managed?",
      "Concrete cylinder receipts from the pour record creation through 7-day / 28-day break test results per ASTM C39. Strength gain curves per pour, statistical evaluation per ACI 214 / EN 1992 with characteristic strength, customer reporting per ACI 318. Outlier cylinders trigger investigation workflow."
    ],
    [
      "Can it integrate with FAT / SAT execution for equipment?",
      "Yes. FAT (factory acceptance test) and SAT (site acceptance test) plans per discipline (mechanical, instrumentation, electrical, piping) are tracked with results, witnesses, and punch-list items. Punch-list closure is monitored to project handover."
    ],
    [
      "How does the project closeout dossier (PCD) get assembled?",
      "The PCD assembly engine collects all controlled documents (drawings, specifications, ITPs, test certificates, inspection reports, NCRs, RFIs, material certs) and arranges them per customer-required structure (typical: per equipment tag, per discipline, per system). Final document index, signature, and approval are managed in-system. PCDs that used to take 6+ weeks are now ready 1 week before project closeout."
    ],
    [
      "Does it support multi-discipline NCRs (concrete, steel, welding, instrumentation)?",
      "Yes. NCRs span disciplines and are routed to the responsible discipline lead. Multi-discipline NCRs (e.g., concrete strength + reinforcement placement) are linked with shared root-cause analysis. The NCR dashboard shows finding trends across disciplines and projects."
    ]
  ]
};
export default function ErpIndustry_construction_quality_assurance() { return <ErpIndustryPage {...data} />; }
