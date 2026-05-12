import ErpIndustryCityPage, { ErpIndustryCityProps } from '@/components/ErpIndustryCityPage';
const data: ErpIndustryCityProps = {
  "industrySlug": "marine-survey-companies",
  "industryName": "Marine Survey & Offshore Inspection",
  "citySlug": "london",
  "cityName": "London",
  "countryName": "UK",
  "isoCountry": "GB",
  "lat": 51.5074,
  "lng": -0.1278,
  "title": "Marine Survey & Offshore Inspection ERP Software in London",
  "desc": "Purpose-built ERP for marine survey & offshore inspection based in London, UK. Pre-loaded with PSSR 2000 (pressure systems safety), PUWER 1998, LOLER 1998 (lifting), operator flow-down for BP (corporate) and Shell (corporate + Stanlow legacy), and HSE /  ONR (nuclear) compliance support. Demo: info@atlantisndt.com.",
  "introPara1": "Marine Survey & Offshore Inspection operating in London face a specific combination of local market structure, regulator framework, and operator-specific quality requirements that generic ERP systems cannot model. London sits at the heart of the corporate headquarters cluster for global IOCs, EPCs, and inspection multinationals, with strong demand from nuclear, aerospace, rail, and offshore segments. The dominant industrial cluster — corporate HQs in the City and Canary Wharf, plus Thames Estuary refining (Shell Stanlow legacy), aerospace at Rolls-Royce / BAE, nuclear at Sellafield supply-chain — sets the rhythm: continuous operations with summer aerospace overhaul peaks and nuclear-station outage windows in autumn. For marine survey & offshore inspection based here, that means London inspection businesses run multi-sector portfolios — a single firm may serve UKCS offshore, EDF nuclear, Rolls-Royce aerospace, and Network Rail simultaneously.",
  "introPara2": "Marine survey and offshore inspection companies here juggle class-society reporting cycles, IMCA D-018 record formats, and FPSO life-extension data spanning decades of legacy surveys. Atlantis NDT ERP is configured for the marine survey & offshore inspection business as it actually operates in London: pre-loaded with PSSR 2000 (pressure systems safety), PUWER 1998, LOLER 1998 (lifting) compliance templates; mapped to operator-specific flow-down clauses from BP (corporate), Shell (corporate + Stanlow legacy), TotalEnergies UK, EDF Energy (nuclear); and aligned with the regulators that audit your work — HSE, ONR (nuclear), BINDT, CAA / EASA, MCA, Rail Safety & Standards Board (RSSB), Environment Agency. The result: a marine survey & offshore inspection ERP that knows the London market, not a generic accounting system bolted to a spreadsheet of inspection records.",
  "features": [
    "the United Kingdom and wider European NDT market-aware marine survey & offshore inspection workflow with pre-loaded PSSR 2000 (pressure systems safety) and PUWER 1998 compliance templates",
    "Operator-specific quality flow-down clauses from BP (corporate), Shell (corporate + Stanlow legacy), TotalEnergies UK pre-mapped",
    "Personnel qualification matrix supporting HSE and  ONR (nuclear) requirements",
    "Audit-ready evidence-pack generation for marine survey & offshore inspection statutory inspections",
    "Mobile field-data capture (offline capable) for London project sites",
    "Multi-language reporting with UK-required document formats",
    "London port-state inspection format with class society reporting (DNV, ABS, LR, BV) defaults",
    "Offshore campaign manager for BP (corporate), Shell (corporate + Stanlow legacy), TotalEnergies UK FPSO and platform programs"
  ],
  "operators": [
    "BP (corporate)",
    "Shell (corporate + Stanlow legacy)",
    "TotalEnergies UK",
    "EDF Energy (nuclear)",
    "National Grid",
    "Rolls-Royce (aerospace + SMR)",
    "BAE Systems",
    "Sellafield Ltd supply-chain"
  ],
  "regulators": [
    "PSSR 2000 (pressure systems safety)",
    "PUWER 1998",
    "LOLER 1998 (lifting)",
    "PCN GEN / IS / ECN schemes (BINDT)",
    "EN 13445 (pressure vessels)",
    "EN 12952 / 12953 (boilers)",
    "ONR SAP / TAG (nuclear)",
    "HSE, ONR (nuclear), BINDT, CAA / EASA, MCA, Rail Safety & Standards Board (RSSB), Environment Agency"
  ],
  "useCases": [
    "A London-based survey firm completes IMCA D-018 inspection records on tablet in the field, with photo-indexed findings synced to class-society submission formats for BP (corporate).",
    "A FPSO life-extension assessment for an Shell (corporate + Stanlow legacy) asset aggregates 25 years of hull, mooring, and topside inspection history on a single platform — supporting a 10-year recertification.",
    "An offshore inspection contractor in London manages STCW + IMCA + class-society qualification expiry across 70 surveyors with FIFO/sea-going rotations.",
    "A subsea inspection team in London indexes ROV footage at timecode against findings — class-society reviewers click to relevant footage instead of scrubbing terabytes of video."
  ],
  "faqs": [
    [
      "Is Atlantis NDT ERP configured for marine survey & offshore inspection operating in London?",
      "Yes. The platform is pre-loaded with the codes and operator flow-downs that marine survey & offshore inspection in London actually work with: PSSR 2000 (pressure systems safety), PUWER 1998, LOLER 1998 (lifting), PCN GEN / IS / ECN schemes (BINDT), plus operator-specific quality clauses from BP (corporate), Shell (corporate + Stanlow legacy), TotalEnergies UK, EDF Energy (nuclear). Configuration is done — your team is productive on day one, not after six months of customisation."
    ],
    [
      "Which London regulators and authorities does the system align with?",
      "The compliance dashboard maps to HSE, ONR (nuclear), BINDT, CAA / EASA, MCA, Rail Safety & Standards Board (RSSB), Environment Agency. Statutory inspection-interval calculation, document-format generation, and audit-ready evidence-pack assembly are all built around these authorities. For marine survey & offshore inspection, that means London inspection businesses run multi-sector portfolios — a single firm may serve UKCS offshore, EDF nuclear, Rolls-Royce aerospace, and Network Rail simultaneously."
    ],
    [
      "Can marine survey & offshore inspection in London integrate with operator-specific portals such as EDF Energy?",
      "Yes. The system supports vendor-portal flow with major UK operators including BP (corporate), Shell (corporate + Stanlow legacy), TotalEnergies UK, EDF Energy (nuclear). Operator-specific quality clauses are imported as controlled documents; internal procedures that implement those clauses are cross-referenced; revision changes flag affected internal documents for review. Where vendor portals expose APIs (EDF Energy approved-vendor systems for example), bi-directional sync keeps customer and internal records aligned."
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
export default function ErpIndCity_marine_survey_companies_london() { return <ErpIndustryCityPage {...data} />; }
