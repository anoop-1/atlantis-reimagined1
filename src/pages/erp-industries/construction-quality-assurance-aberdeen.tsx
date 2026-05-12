import ErpIndustryCityPage, { ErpIndustryCityProps } from '@/components/ErpIndustryCityPage';
const data: ErpIndustryCityProps = {
  "industrySlug": "construction-quality-assurance",
  "industryName": "Construction Quality Assurance",
  "citySlug": "aberdeen",
  "cityName": "Aberdeen",
  "countryName": "UK",
  "isoCountry": "GB",
  "lat": 57.1497,
  "lng": -2.0943,
  "title": "Construction Quality Assurance ERP Software in Aberdeen",
  "desc": "Purpose-built ERP for construction quality assurance based in Aberdeen, UK. Pre-loaded with HSE Safety Case Regulations (SCR 2015), PFEER 1995 (fire/explosion), PSSR 2000, operator flow-down for Harbour Energy and BP North Sea, and HSE (OSD) /  Offshore Energies UK (OEUK) compliance support. Demo: info@atlantisndt.com.",
  "introPara1": "Construction Quality Assurance operating in Aberdeen face a specific combination of local market structure, regulator framework, and operator-specific quality requirements that generic ERP systems cannot model. Aberdeen sits at the heart of the global capital of offshore decommissioning and life-extension inspection, with five decades of UKCS operational data concentrated in the city. The dominant industrial cluster — Aberdeen Harbour + Dyce heliport, supply bases for UKCS platforms, FPSOs (e.g., Buzzard, Glen Lyon), and onshore terminals (St Fergus, Sullom Voe) — sets the rhythm: North Sea weather windows compress offshore inspection campaigns into April–September; winter focus shifts to onshore terminals and FPSO turnarounds. For construction quality assurance based here, that means Aberdeen inspection firms specialise in life-extension assessments for late-life UKCS infrastructure plus decommissioning campaigns that demand rigorous lay-up condition data.",
  "introPara2": "Construction QA/QC firms here run ITP execution, concrete cylinder breaks, FAT / SAT punch lists, and project closeout dossier (PCD) assembly across EPC and infrastructure programs. Atlantis NDT ERP is configured for the construction quality assurance business as it actually operates in Aberdeen: pre-loaded with HSE Safety Case Regulations (SCR 2015), PFEER 1995 (fire/explosion), PSSR 2000 compliance templates; mapped to operator-specific flow-down clauses from Harbour Energy, BP North Sea, Shell UKCS, TotalEnergies E&P UK; and aligned with the regulators that audit your work — HSE (OSD), Offshore Energies UK (OEUK), Petrofac / Wood vendor frameworks, OSPAR (decommissioning), DECC / BEIS oil & gas authority (now NSTA). The result: a construction quality assurance ERP that knows the Aberdeen market, not a generic accounting system bolted to a spreadsheet of inspection records.",
  "features": [
    "the UK North Sea offshore basin-aware construction quality assurance workflow with pre-loaded HSE Safety Case Regulations (SCR 2015) and PFEER 1995 (fire/explosion) compliance templates",
    "Operator-specific quality flow-down clauses from Harbour Energy, BP North Sea, Shell UKCS pre-mapped",
    "Personnel qualification matrix supporting HSE (OSD) and  Offshore Energies UK (OEUK) requirements",
    "Audit-ready evidence-pack generation for construction quality assurance statutory inspections",
    "Mobile field-data capture (offline capable) for Aberdeen project sites",
    "Multi-language reporting with UK-required document formats",
    "Aberdeen project closeout dossier (PCD) template aligned to Harbour Energy and BP North Sea handover requirements",
    "Multi-discipline NCR routing across HSE (OSD) and  Offshore Energies UK (OEUK) statutory reporting"
  ],
  "operators": [
    "Harbour Energy",
    "BP North Sea",
    "Shell UKCS",
    "TotalEnergies E&P UK",
    "NEO Energy",
    "Ithaca Energy",
    "EnQuest",
    "Petrofac (service provider)"
  ],
  "regulators": [
    "HSE Safety Case Regulations (SCR 2015)",
    "PFEER 1995 (fire/explosion)",
    "PSSR 2000",
    "PCN GEN / IS schemes (BINDT)",
    "API 510 / 570 / 653",
    "ISO 19901-9 (offshore reliability)",
    "ASME / DNV class rules for FPSOs",
    "HSE (OSD), Offshore Energies UK (OEUK), Petrofac / Wood vendor frameworks, OSPAR (decommissioning), DECC / BEIS oil & gas authority (now NSTA)"
  ],
  "useCases": [
    "An EPC QA/QC team in Aberdeen executes ITP for Harbour Energy project — hold points block downstream work until released, eliminating the 'oh, that wasn't witnessed' rework cycle.",
    "A concrete-testing lab serving Aberdeen infrastructure projects (BP North Sea) tracks pour-to-28-day strength evaluation with ACI 214 statistical processing — outliers trigger investigation workflow.",
    "A multi-discipline construction QA firm in Aberdeen routes NCRs (concrete, steel, welding, instrumentation) to discipline leads with shared root-cause analysis — invisible patterns become visible.",
    "A megaproject closeout in Aberdeen delivers the PCD to Shell UKCS client one week before handover — historically a 6+ week post-handover firefight."
  ],
  "faqs": [
    [
      "Is Atlantis NDT ERP configured for construction quality assurance operating in Aberdeen?",
      "Yes. The platform is pre-loaded with the codes and operator flow-downs that construction quality assurance in Aberdeen actually work with: HSE Safety Case Regulations (SCR 2015), PFEER 1995 (fire/explosion), PSSR 2000, PCN GEN / IS schemes (BINDT), plus operator-specific quality clauses from Harbour Energy, BP North Sea, Shell UKCS, TotalEnergies E&P UK. Configuration is done — your team is productive on day one, not after six months of customisation."
    ],
    [
      "Which Aberdeen regulators and authorities does the system align with?",
      "The compliance dashboard maps to HSE (OSD), Offshore Energies UK (OEUK), Petrofac / Wood vendor frameworks, OSPAR (decommissioning), DECC / BEIS oil & gas authority (now NSTA). Statutory inspection-interval calculation, document-format generation, and audit-ready evidence-pack assembly are all built around these authorities. For construction quality assurance, that means Aberdeen inspection firms specialise in life-extension assessments for late-life UKCS infrastructure plus decommissioning campaigns that demand rigorous lay-up condition data."
    ],
    [
      "Can construction quality assurance in Aberdeen integrate with operator-specific portals such as Harbour Energy?",
      "Yes. The system supports vendor-portal flow with major UK operators including Harbour Energy, BP North Sea, Shell UKCS, TotalEnergies E&P UK. Operator-specific quality clauses are imported as controlled documents; internal procedures that implement those clauses are cross-referenced; revision changes flag affected internal documents for review. Where vendor portals expose APIs (Harbour Energy approved-vendor systems for example), bi-directional sync keeps customer and internal records aligned."
    ],
    [
      "Does it manage ITP (Inspection and Test Plan) execution?",
      "Yes. ITPs are imported per project with each activity having hold (H), witness (W), review (R) classification, responsibility (contractor / engineer / client / regulator), and reference document. As construction progresses each ITP line is signed off; hold points block downstream work until released."
    ],
    [
      "How are concrete cylinder breaks managed?",
      "Concrete cylinder receipts from the pour record creation through 7-day / 28-day break test results per ASTM C39. Strength gain curves per pour, statistical evaluation per ACI 214 / EN 1992 with characteristic strength, customer reporting per ACI 318. Outlier cylinders trigger investigation workflow."
    ]
  ]
} as ErpIndustryCityProps;
export default function ErpIndCity_construction_quality_assurance_aberdeen() { return <ErpIndustryCityPage {...data} />; }
