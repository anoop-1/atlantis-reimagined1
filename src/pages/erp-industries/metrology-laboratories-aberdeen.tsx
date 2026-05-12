import ErpIndustryCityPage, { ErpIndustryCityProps } from '@/components/ErpIndustryCityPage';
const data: ErpIndustryCityProps = {
  "industrySlug": "metrology-laboratories",
  "industryName": "Metrology Laboratories",
  "citySlug": "aberdeen",
  "cityName": "Aberdeen",
  "countryName": "UK",
  "isoCountry": "GB",
  "lat": 57.1497,
  "lng": -2.0943,
  "title": "Metrology Laboratories ERP Software in Aberdeen",
  "desc": "Purpose-built ERP for metrology laboratories based in Aberdeen, UK. Pre-loaded with HSE Safety Case Regulations (SCR 2015), PFEER 1995 (fire/explosion), PSSR 2000, operator flow-down for Harbour Energy and BP North Sea, and HSE (OSD) /  Offshore Energies UK (OEUK) compliance support. Demo: info@atlantisndt.com.",
  "introPara1": "Metrology Laboratories operating in Aberdeen face a specific combination of local market structure, regulator framework, and operator-specific quality requirements that generic ERP systems cannot model. Aberdeen sits at the heart of the global capital of offshore decommissioning and life-extension inspection, with five decades of UKCS operational data concentrated in the city. The dominant industrial cluster — Aberdeen Harbour + Dyce heliport, supply bases for UKCS platforms, FPSOs (e.g., Buzzard, Glen Lyon), and onshore terminals (St Fergus, Sullom Voe) — sets the rhythm: North Sea weather windows compress offshore inspection campaigns into April–September; winter focus shifts to onshore terminals and FPSO turnarounds. For metrology laboratories based here, that means Aberdeen inspection firms specialise in life-extension assessments for late-life UKCS infrastructure plus decommissioning campaigns that demand rigorous lay-up condition data.",
  "introPara2": "Metrology laboratories here manage multi-discipline uncertainty budgets, proficiency testing, customer-asset chain-of-custody, and ISO 17025 accreditation-audit readiness across dimensional, electrical, pressure, mass, and thermal disciplines. Atlantis NDT ERP is configured for the metrology laboratories business as it actually operates in Aberdeen: pre-loaded with HSE Safety Case Regulations (SCR 2015), PFEER 1995 (fire/explosion), PSSR 2000 compliance templates; mapped to operator-specific flow-down clauses from Harbour Energy, BP North Sea, Shell UKCS, TotalEnergies E&P UK; and aligned with the regulators that audit your work — HSE (OSD), Offshore Energies UK (OEUK), Petrofac / Wood vendor frameworks, OSPAR (decommissioning), DECC / BEIS oil & gas authority (now NSTA). The result: a metrology laboratories ERP that knows the Aberdeen market, not a generic accounting system bolted to a spreadsheet of inspection records.",
  "features": [
    "the UK North Sea offshore basin-aware metrology laboratories workflow with pre-loaded HSE Safety Case Regulations (SCR 2015) and PFEER 1995 (fire/explosion) compliance templates",
    "Operator-specific quality flow-down clauses from Harbour Energy, BP North Sea, Shell UKCS pre-mapped",
    "Personnel qualification matrix supporting HSE (OSD) and  Offshore Energies UK (OEUK) requirements",
    "Audit-ready evidence-pack generation for metrology laboratories statutory inspections",
    "Mobile field-data capture (offline capable) for Aberdeen project sites",
    "Multi-language reporting with UK-required document formats",
    "Aberdeen customer dispatch SLA tracking with local courier and customs-clearance handling",
    "Discipline-specific uncertainty templates aligned to HSE (OSD) accreditation scope"
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
    "A multi-discipline metrology lab in Aberdeen accredited to ISO 17025 manages uncertainty budgets across dimensional, electrical, pressure, mass, and thermal disciplines on one platform.",
    "A Aberdeen metrology lab supports Harbour Energy and BP North Sea customer-specific decision rules (k=2, k=3, customer-defined) with consistent application across all certificates.",
    "An Aberdeen metrology business runs proficiency-testing programs (z-score / En-number) and tracks corrective action when results are unsatisfactory — feeding the management review.",
    "A growing Aberdeen calibration / metrology service expands into a new discipline by enabling the relevant module rather than buying separate software — pay-only-for-used model."
  ],
  "faqs": [
    [
      "Is Atlantis NDT ERP configured for metrology laboratories operating in Aberdeen?",
      "Yes. The platform is pre-loaded with the codes and operator flow-downs that metrology laboratories in Aberdeen actually work with: HSE Safety Case Regulations (SCR 2015), PFEER 1995 (fire/explosion), PSSR 2000, PCN GEN / IS schemes (BINDT), plus operator-specific quality clauses from Harbour Energy, BP North Sea, Shell UKCS, TotalEnergies E&P UK. Configuration is done — your team is productive on day one, not after six months of customisation."
    ],
    [
      "Which Aberdeen regulators and authorities does the system align with?",
      "The compliance dashboard maps to HSE (OSD), Offshore Energies UK (OEUK), Petrofac / Wood vendor frameworks, OSPAR (decommissioning), DECC / BEIS oil & gas authority (now NSTA). Statutory inspection-interval calculation, document-format generation, and audit-ready evidence-pack assembly are all built around these authorities. For metrology laboratories, that means Aberdeen inspection firms specialise in life-extension assessments for late-life UKCS infrastructure plus decommissioning campaigns that demand rigorous lay-up condition data."
    ],
    [
      "Can metrology laboratories in Aberdeen integrate with operator-specific portals such as Harbour Energy?",
      "Yes. The system supports vendor-portal flow with major UK operators including Harbour Energy, BP North Sea, Shell UKCS, TotalEnergies E&P UK. Operator-specific quality clauses are imported as controlled documents; internal procedures that implement those clauses are cross-referenced; revision changes flag affected internal documents for review. Where vendor portals expose APIs (Harbour Energy approved-vendor systems for example), bi-directional sync keeps customer and internal records aligned."
    ],
    [
      "Does it support uncertainty budgets across all disciplines?",
      "Yes. Uncertainty templates exist for dimensional (gauge blocks, CMM, micrometers), electrical (DMM, calibrator, oscilloscope), pressure (digital indicator, deadweight tester, hydraulic / pneumatic), mass (analytical balance, weights), thermal (RTD, thermocouple, IR thermometer), force (load cell, force standard), flow (gas / liquid flow rig), and optical (luminance meter, photometer). Custom uncertainty models can be authored."
    ],
    [
      "Can decision rules be customer-specific (e.g., k=2, k=3, or customer-defined)?",
      "Yes. Decision rules per ISO 17025 §7.8.6 and ILAC G8 are configured per customer / customer-asset-class. Customers can specify simple acceptance (no guard band), shared-risk, guarded acceptance / rejection at chosen probability of false accept / reject, or customer-specific risk-of-false-accept value."
    ]
  ]
} as ErpIndustryCityProps;
export default function ErpIndCity_metrology_laboratories_aberdeen() { return <ErpIndustryCityPage {...data} />; }
