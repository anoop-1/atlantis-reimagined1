import ErpIndustryPage from '@/components/ErpIndustryPage';
const data = {
  "slug": "environmental-testing-labs",
  "name": "Environmental Testing Laboratories",
  "title": "ERP for Environmental Testing Laboratories (ISO 17025)",
  "h1": "ERP for Environmental Testing Laboratories",
  "desc": "Environmental sample receipt, chain-of-custody, multi-analyte testing workflow (water, air, soil, waste), regulatory reporting (EPA / EA / DEC / DEFRA), and ISO 17025 accreditation support for environmental laboratories.",
  "intro": "Environmental testing laboratories analyze drinking water, wastewater, ambient air, soil, hazardous waste, and industrial emissions samples for regulatory compliance. ISO/IEC 17025 accreditation under the relevant national scheme (NELAP in US, UKAS in UK, NATA in Australia) is required for regulatory submission. Atlantis ERP's environmental-lab configuration manages the full receipt-to-report lifecycle with regulatory-grade traceability.",
  "modules": [
    "work-order-management",
    "document-control",
    "quality-management",
    "audit-management",
    "calibration-management",
    "certification-tracking",
    "asset-management",
    "inventory-management"
  ],
  "regs": [
    "ISO/IEC 17025:2017",
    "NELAP / TNI standard (US)",
    "US EPA methods (SW-846, 600 series, 500 series)",
    "ASTM water / soil methods",
    "EN ISO water-method series",
    "BS / EN environmental methods",
    "UK Environment Agency MCERTS",
    "Australian NATA + ISO 17025",
    "EU Water Framework Directive"
  ],
  "operators": [
    "SGS — global testing",
    "Eurofins — environmental",
    "ALS Limited — environmental",
    "Bureau Veritas — environmental",
    "Intertek — environmental",
    "TestAmerica / Eurofins TestAmerica",
    "Pace Analytical",
    "GBA Forschungsinstitut",
    "EU drinking water labs",
    "EPA-approved labs"
  ],
  "pain": [
    "Sample chain-of-custody on paper — regulator findings",
    "Lab data integration from instruments (GC, GC-MS, ICP, IC) — manual transcription errors",
    "EPA / EA reporting formats — manual reformatting per submission",
    "ISO 17025 method validation records scattered — accreditation findings",
    "Customer-specific report format requirements — every report customized"
  ],
  "faqs": [
    [
      "Does it support chain-of-custody per EPA / TNI / EA requirements?",
      "Yes. Chain-of-custody (CoC) is initiated at sample collection with sampler ID, date, time, location (GPS), sample matrix, preservatives, and field measurements. CoC is signed at each transfer (sampler → courier → lab receipt → analyst → return to client). Each signature is captured with date / time / person and tamper-evident audit trail. The CoC PDF is available for regulatory submission."
    ],
    [
      "Can lab data integrate from instruments (GC, GC-MS, ICP, IC, IRMS)?",
      "Yes. Instrument integration via LIMS-style data import. Agilent ChemStation / MassHunter, Thermo Xcalibur, PerkinElmer Empower, Waters Empower, Shimadzu LabSolutions data can be imported with calibration curves, internal standards, and sample results. Manual re-entry is eliminated."
    ],
    [
      "Does it generate EPA / EA / regulator-format reports?",
      "Yes. Regulator-format templates per EPA region, UK Environment Agency MCERTS, US state DEC / DEP, Canadian provincial environment ministries, Australian state EPA, EU member-state water reports are provided. Custom regulator formats can be authored. Submission via electronic data deliverable (EDD) — XML / CSV — to regulator portals is supported."
    ],
    [
      "How is method validation per ISO 17025 §7.2 managed?",
      "Method validation records include selectivity / specificity, linearity, accuracy / recovery, precision (repeatability + intermediate precision), MDL / MRL determination, uncertainty estimate, and matrix-effect evaluation. Validation status is tracked per analyte per matrix. Re-validation triggers (procedure revision, instrument change, personnel change) prompt fresh validation work."
    ],
    [
      "Can it manage multi-matrix / multi-analyte workflow (water + soil + air on same project)?",
      "Yes. A project can contain multiple sample matrices and analyte suites. Common project metadata (client, site, date range, regulatory scope) is shared; matrix-specific receipt, preservation, holding-time, and method requirements are tracked per sample. Project-level dashboards show progress across all matrices."
    ]
  ]
};
export default function ErpIndustry_environmental_testing_labs() { return <ErpIndustryPage {...data} />; }
