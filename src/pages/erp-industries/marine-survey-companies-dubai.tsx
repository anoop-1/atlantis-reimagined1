import ErpIndustryCityPage, { ErpIndustryCityProps } from '@/components/ErpIndustryCityPage';
const data: ErpIndustryCityProps = {
  "industrySlug": "marine-survey-companies",
  "industryName": "Marine Survey & Offshore Inspection",
  "citySlug": "dubai",
  "cityName": "Dubai",
  "countryName": "UAE",
  "isoCountry": "AE",
  "lat": 25.2048,
  "lng": 55.2708,
  "title": "Marine Survey & Offshore Inspection ERP Software in Dubai",
  "desc": "Purpose-built ERP for marine survey & offshore inspection based in Dubai, UAE. Pre-loaded with ADQCC inspection schemes, ADNOC ACS-01 (vendor), ASME Section V / VIII, operator flow-down for ADNOC Distribution and ENOC Group, and ADQCC /  MOIAT compliance support. Demo: info@atlantisndt.com.",
  "introPara1": "Marine Survey & Offshore Inspection operating in Dubai face a specific combination of local market structure, regulator framework, and operator-specific quality requirements that generic ERP systems cannot model. Dubai sits at the heart of the regional commercial and logistics hub for GCC oil and gas, hosting regional HQs for IOCs, EPCs, and inspection multinationals. The dominant industrial cluster — a Jebel Ali free zone industrial hub connected to ADNOC Distribution, ENOC, DUBAL, and northern emirate fabricators — sets the rhythm: winter project peak (Oct–Apr) with major shutdowns scheduled before Ramadan. For marine survey & offshore inspection based here, that means Dubai inspection businesses serve both downstream and northern-emirate fabrication while staffing project mobilisations into KSA, Oman, and Iraq from Dubai HQ.",
  "introPara2": "Marine survey and offshore inspection companies here juggle class-society reporting cycles, IMCA D-018 record formats, and FPSO life-extension data spanning decades of legacy surveys. Atlantis NDT ERP is configured for the marine survey & offshore inspection business as it actually operates in Dubai: pre-loaded with ADQCC inspection schemes, ADNOC ACS-01 (vendor), ASME Section V / VIII compliance templates; mapped to operator-specific flow-down clauses from ADNOC Distribution, ENOC Group, DUBAL / Emirates Global Aluminium, DEWA (Dubai Electricity & Water); and aligned with the regulators that audit your work — ADQCC, MOIAT, ADM, UAE FANR (radiation), Dubai Civil Defence, DEWA HSE. The result: a marine survey & offshore inspection ERP that knows the Dubai market, not a generic accounting system bolted to a spreadsheet of inspection records.",
  "features": [
    "the lower Gulf and northern emirates-aware marine survey & offshore inspection workflow with pre-loaded ADQCC inspection schemes and ADNOC ACS-01 (vendor) compliance templates",
    "Operator-specific quality flow-down clauses from ADNOC Distribution, ENOC Group, DUBAL / Emirates Global Aluminium pre-mapped",
    "Personnel qualification matrix supporting ADQCC and  MOIAT requirements",
    "Audit-ready evidence-pack generation for marine survey & offshore inspection statutory inspections",
    "Mobile field-data capture (offline capable) for Dubai project sites",
    "Multi-language reporting with UAE-required document formats",
    "Dubai port-state inspection format with class society reporting (DNV, ABS, LR, BV) defaults",
    "Offshore campaign manager for ADNOC Distribution, ENOC Group, DUBAL / Emirates Global Aluminium FPSO and platform programs"
  ],
  "operators": [
    "ADNOC Distribution",
    "ENOC Group",
    "DUBAL / Emirates Global Aluminium",
    "DEWA (Dubai Electricity & Water)",
    "Dragon Oil",
    "Emirates Steel",
    "Borouge marketing arm",
    "Dubai Petroleum"
  ],
  "regulators": [
    "ADQCC inspection schemes",
    "ADNOC ACS-01 (vendor)",
    "ASME Section V / VIII",
    "API 510 / 570 / 653",
    "ISO 9712 (NDT certification)",
    "IMO MARPOL (Jebel Ali port)",
    "UAE FANR ionising-radiation regulations",
    "ADQCC, MOIAT, ADM, UAE FANR (radiation), Dubai Civil Defence, DEWA HSE"
  ],
  "useCases": [
    "A Dubai-based survey firm completes IMCA D-018 inspection records on tablet in the field, with photo-indexed findings synced to class-society submission formats for ADNOC Distribution.",
    "A FPSO life-extension assessment for an ENOC Group asset aggregates 25 years of hull, mooring, and topside inspection history on a single platform — supporting a 10-year recertification.",
    "An offshore inspection contractor in Dubai manages STCW + IMCA + class-society qualification expiry across 70 surveyors with FIFO/sea-going rotations.",
    "A subsea inspection team in Dubai indexes ROV footage at timecode against findings — class-society reviewers click to relevant footage instead of scrubbing terabytes of video."
  ],
  "faqs": [
    [
      "Is Atlantis NDT ERP configured for marine survey & offshore inspection operating in Dubai?",
      "Yes. The platform is pre-loaded with the codes and operator flow-downs that marine survey & offshore inspection in Dubai actually work with: ADQCC inspection schemes, ADNOC ACS-01 (vendor), ASME Section V / VIII, API 510 / 570 / 653, plus operator-specific quality clauses from ADNOC Distribution, ENOC Group, DUBAL / Emirates Global Aluminium, DEWA (Dubai Electricity & Water). Configuration is done — your team is productive on day one, not after six months of customisation."
    ],
    [
      "Which Dubai regulators and authorities does the system align with?",
      "The compliance dashboard maps to ADQCC, MOIAT, ADM, UAE FANR (radiation), Dubai Civil Defence, DEWA HSE. Statutory inspection-interval calculation, document-format generation, and audit-ready evidence-pack assembly are all built around these authorities. For marine survey & offshore inspection, that means Dubai inspection businesses serve both downstream and northern-emirate fabrication while staffing project mobilisations into KSA, Oman, and Iraq from Dubai HQ."
    ],
    [
      "Can marine survey & offshore inspection in Dubai integrate with operator-specific portals such as ENOC?",
      "Yes. The system supports vendor-portal flow with major UAE operators including ADNOC Distribution, ENOC Group, DUBAL / Emirates Global Aluminium, DEWA (Dubai Electricity & Water). Operator-specific quality clauses are imported as controlled documents; internal procedures that implement those clauses are cross-referenced; revision changes flag affected internal documents for review. Where vendor portals expose APIs (ENOC approved-vendor systems for example), bi-directional sync keeps customer and internal records aligned."
    ],
    [
      "Does it support IMCA D-018 inspection record formats?",
      "Yes. IMCA D-018 Inspection, Repair and Maintenance (IRM) record formats are native. Inspection findings with type, location (member ID + coordinate), severity, and recommendation are captured per IMCA template. Photo / video evidence attaches per finding. ROV inspection runs link to subsea inspection record. Output PDF matches the IMCA standard format expected by class and operator."
    ],
    [
      "How are class-society survey records organized?",
      "Each vessel has a survey schedule per class (DNV / ABS / LR / BV / ClassNK / RINA / KR) covering annual, intermediate, renewal, dry-dock, in-water, and continuous machinery survey cycles. Each survey item has its scope, methodology, surveyor, and result. Class society reporting formats (PDF and class-society electronic submission) are generated from the underlying records."
    ]
  ]
} as ErpIndustryCityProps;
export default function ErpIndCity_marine_survey_companies_dubai() { return <ErpIndustryCityPage {...data} />; }
