import ErpIndustryCityPage, { ErpIndustryCityProps } from '@/components/ErpIndustryCityPage';
const data: ErpIndustryCityProps = {
  "industrySlug": "construction-quality-assurance",
  "industryName": "Construction Quality Assurance",
  "citySlug": "london",
  "cityName": "London",
  "countryName": "UK",
  "isoCountry": "GB",
  "lat": 51.5074,
  "lng": -0.1278,
  "title": "Construction Quality Assurance ERP Software in London",
  "desc": "Purpose-built ERP for construction quality assurance based in London, UK. Pre-loaded with PSSR 2000 (pressure systems safety), PUWER 1998, LOLER 1998 (lifting), operator flow-down for BP (corporate) and Shell (corporate + Stanlow legacy), and HSE /  ONR (nuclear) compliance support. Demo: info@atlantisndt.com.",
  "introPara1": "Construction Quality Assurance operating in London face a specific combination of local market structure, regulator framework, and operator-specific quality requirements that generic ERP systems cannot model. London sits at the heart of the corporate headquarters cluster for global IOCs, EPCs, and inspection multinationals, with strong demand from nuclear, aerospace, rail, and offshore segments. The dominant industrial cluster — corporate HQs in the City and Canary Wharf, plus Thames Estuary refining (Shell Stanlow legacy), aerospace at Rolls-Royce / BAE, nuclear at Sellafield supply-chain — sets the rhythm: continuous operations with summer aerospace overhaul peaks and nuclear-station outage windows in autumn. For construction quality assurance based here, that means London inspection businesses run multi-sector portfolios — a single firm may serve UKCS offshore, EDF nuclear, Rolls-Royce aerospace, and Network Rail simultaneously.",
  "introPara2": "Construction QA/QC firms here run ITP execution, concrete cylinder breaks, FAT / SAT punch lists, and project closeout dossier (PCD) assembly across EPC and infrastructure programs. Atlantis NDT ERP is configured for the construction quality assurance business as it actually operates in London: pre-loaded with PSSR 2000 (pressure systems safety), PUWER 1998, LOLER 1998 (lifting) compliance templates; mapped to operator-specific flow-down clauses from BP (corporate), Shell (corporate + Stanlow legacy), TotalEnergies UK, EDF Energy (nuclear); and aligned with the regulators that audit your work — HSE, ONR (nuclear), BINDT, CAA / EASA, MCA, Rail Safety & Standards Board (RSSB), Environment Agency. The result: a construction quality assurance ERP that knows the London market, not a generic accounting system bolted to a spreadsheet of inspection records.",
  "features": [
    "the United Kingdom and wider European NDT market-aware construction quality assurance workflow with pre-loaded PSSR 2000 (pressure systems safety) and PUWER 1998 compliance templates",
    "Operator-specific quality flow-down clauses from BP (corporate), Shell (corporate + Stanlow legacy), TotalEnergies UK pre-mapped",
    "Personnel qualification matrix supporting HSE and  ONR (nuclear) requirements",
    "Audit-ready evidence-pack generation for construction quality assurance statutory inspections",
    "Mobile field-data capture (offline capable) for London project sites",
    "Multi-language reporting with UK-required document formats",
    "London project closeout dossier (PCD) template aligned to BP (corporate) and Shell (corporate + Stanlow legacy) handover requirements",
    "Multi-discipline NCR routing across HSE and  ONR (nuclear) statutory reporting"
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
    "An EPC QA/QC team in London executes ITP for BP (corporate) project — hold points block downstream work until released, eliminating the 'oh, that wasn't witnessed' rework cycle.",
    "A concrete-testing lab serving London infrastructure projects (Shell (corporate + Stanlow legacy)) tracks pour-to-28-day strength evaluation with ACI 214 statistical processing — outliers trigger investigation workflow.",
    "A multi-discipline construction QA firm in London routes NCRs (concrete, steel, welding, instrumentation) to discipline leads with shared root-cause analysis — invisible patterns become visible.",
    "A megaproject closeout in London delivers the PCD to TotalEnergies UK client one week before handover — historically a 6+ week post-handover firefight."
  ],
  "faqs": [
    [
      "Is Atlantis NDT ERP configured for construction quality assurance operating in London?",
      "Yes. The platform is pre-loaded with the codes and operator flow-downs that construction quality assurance in London actually work with: PSSR 2000 (pressure systems safety), PUWER 1998, LOLER 1998 (lifting), PCN GEN / IS / ECN schemes (BINDT), plus operator-specific quality clauses from BP (corporate), Shell (corporate + Stanlow legacy), TotalEnergies UK, EDF Energy (nuclear). Configuration is done — your team is productive on day one, not after six months of customisation."
    ],
    [
      "Which London regulators and authorities does the system align with?",
      "The compliance dashboard maps to HSE, ONR (nuclear), BINDT, CAA / EASA, MCA, Rail Safety & Standards Board (RSSB), Environment Agency. Statutory inspection-interval calculation, document-format generation, and audit-ready evidence-pack assembly are all built around these authorities. For construction quality assurance, that means London inspection businesses run multi-sector portfolios — a single firm may serve UKCS offshore, EDF nuclear, Rolls-Royce aerospace, and Network Rail simultaneously."
    ],
    [
      "Can construction quality assurance in London integrate with operator-specific portals such as EDF Energy?",
      "Yes. The system supports vendor-portal flow with major UK operators including BP (corporate), Shell (corporate + Stanlow legacy), TotalEnergies UK, EDF Energy (nuclear). Operator-specific quality clauses are imported as controlled documents; internal procedures that implement those clauses are cross-referenced; revision changes flag affected internal documents for review. Where vendor portals expose APIs (EDF Energy approved-vendor systems for example), bi-directional sync keeps customer and internal records aligned."
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
export default function ErpIndCity_construction_quality_assurance_london() { return <ErpIndustryCityPage {...data} />; }
