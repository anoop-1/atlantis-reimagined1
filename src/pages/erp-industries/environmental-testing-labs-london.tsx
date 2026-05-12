import ErpIndustryCityPage, { ErpIndustryCityProps } from '@/components/ErpIndustryCityPage';
const data: ErpIndustryCityProps = {
  "industrySlug": "environmental-testing-labs",
  "industryName": "Environmental Testing Laboratories",
  "citySlug": "london",
  "cityName": "London",
  "countryName": "UK",
  "isoCountry": "GB",
  "lat": 51.5074,
  "lng": -0.1278,
  "title": "Environmental Testing Laboratories ERP Software in London",
  "desc": "Purpose-built ERP for environmental testing laboratories based in London, UK. Pre-loaded with PSSR 2000 (pressure systems safety), PUWER 1998, LOLER 1998 (lifting), operator flow-down for BP (corporate) and Shell (corporate + Stanlow legacy), and HSE /  ONR (nuclear) compliance support. Demo: info@atlantisndt.com.",
  "introPara1": "Environmental Testing Laboratories operating in London face a specific combination of local market structure, regulator framework, and operator-specific quality requirements that generic ERP systems cannot model. London sits at the heart of the corporate headquarters cluster for global IOCs, EPCs, and inspection multinationals, with strong demand from nuclear, aerospace, rail, and offshore segments. The dominant industrial cluster — corporate HQs in the City and Canary Wharf, plus Thames Estuary refining (Shell Stanlow legacy), aerospace at Rolls-Royce / BAE, nuclear at Sellafield supply-chain — sets the rhythm: continuous operations with summer aerospace overhaul peaks and nuclear-station outage windows in autumn. For environmental testing laboratories based here, that means London inspection businesses run multi-sector portfolios — a single firm may serve UKCS offshore, EDF nuclear, Rolls-Royce aerospace, and Network Rail simultaneously.",
  "introPara2": "Environmental testing laboratories here manage chain-of-custody, instrument data integration (GC, GC-MS, ICP, IC), and ISO 17025 method validation for regulator-submission-grade results. Atlantis NDT ERP is configured for the environmental testing laboratories business as it actually operates in London: pre-loaded with PSSR 2000 (pressure systems safety), PUWER 1998, LOLER 1998 (lifting) compliance templates; mapped to operator-specific flow-down clauses from BP (corporate), Shell (corporate + Stanlow legacy), TotalEnergies UK, EDF Energy (nuclear); and aligned with the regulators that audit your work — HSE, ONR (nuclear), BINDT, CAA / EASA, MCA, Rail Safety & Standards Board (RSSB), Environment Agency. The result: a environmental testing laboratories ERP that knows the London market, not a generic accounting system bolted to a spreadsheet of inspection records.",
  "features": [
    "the United Kingdom and wider European NDT market-aware environmental testing laboratories workflow with pre-loaded PSSR 2000 (pressure systems safety) and PUWER 1998 compliance templates",
    "Operator-specific quality flow-down clauses from BP (corporate), Shell (corporate + Stanlow legacy), TotalEnergies UK pre-mapped",
    "Personnel qualification matrix supporting HSE and  ONR (nuclear) requirements",
    "Audit-ready evidence-pack generation for environmental testing laboratories statutory inspections",
    "Mobile field-data capture (offline capable) for London project sites",
    "Multi-language reporting with UK-required document formats",
    "London regulator EDD format for HSE and  ONR (nuclear)",
    "Chain-of-custody mobile capture with field sampler ID and GPS pin per London project"
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
    "An ISO 17025 environmental laboratory in London handles water, soil, and air samples for BP (corporate) compliance monitoring — chain-of-custody captured at sample collection through to final report.",
    "A London environmental lab integrates instrument data (GC, GC-MS, ICP, IC) for Shell (corporate + Stanlow legacy) project — manual transcription eliminated, regulator-submission EDD generated automatically.",
    "A multi-matrix lab in London runs water + soil + air on a single project for TotalEnergies UK mining / industrial client — common project metadata shared, matrix-specific receipt and method tracked per sample.",
    "An London environmental testing business maintains ISO 17025 method validation records (selectivity, linearity, accuracy, precision, MDL/MRL, uncertainty) per analyte / matrix — accreditation findings drop to zero."
  ],
  "faqs": [
    [
      "Is Atlantis NDT ERP configured for environmental testing laboratories operating in London?",
      "Yes. The platform is pre-loaded with the codes and operator flow-downs that environmental testing laboratories in London actually work with: PSSR 2000 (pressure systems safety), PUWER 1998, LOLER 1998 (lifting), PCN GEN / IS / ECN schemes (BINDT), plus operator-specific quality clauses from BP (corporate), Shell (corporate + Stanlow legacy), TotalEnergies UK, EDF Energy (nuclear). Configuration is done — your team is productive on day one, not after six months of customisation."
    ],
    [
      "Which London regulators and authorities does the system align with?",
      "The compliance dashboard maps to HSE, ONR (nuclear), BINDT, CAA / EASA, MCA, Rail Safety & Standards Board (RSSB), Environment Agency. Statutory inspection-interval calculation, document-format generation, and audit-ready evidence-pack assembly are all built around these authorities. For environmental testing laboratories, that means London inspection businesses run multi-sector portfolios — a single firm may serve UKCS offshore, EDF nuclear, Rolls-Royce aerospace, and Network Rail simultaneously."
    ],
    [
      "Can environmental testing laboratories in London integrate with operator-specific portals such as EDF Energy?",
      "Yes. The system supports vendor-portal flow with major UK operators including BP (corporate), Shell (corporate + Stanlow legacy), TotalEnergies UK, EDF Energy (nuclear). Operator-specific quality clauses are imported as controlled documents; internal procedures that implement those clauses are cross-referenced; revision changes flag affected internal documents for review. Where vendor portals expose APIs (EDF Energy approved-vendor systems for example), bi-directional sync keeps customer and internal records aligned."
    ],
    [
      "Does it support chain-of-custody per EPA / TNI / EA requirements?",
      "Yes. Chain-of-custody (CoC) is initiated at sample collection with sampler ID, date, time, location (GPS), sample matrix, preservatives, and field measurements. CoC is signed at each transfer (sampler → courier → lab receipt → analyst → return to client). Each signature is captured with date / time / person and tamper-evident audit trail. The CoC PDF is available for regulatory submission."
    ],
    [
      "Can lab data integrate from instruments (GC, GC-MS, ICP, IC, IRMS)?",
      "Yes. Instrument integration via LIMS-style data import. Agilent ChemStation / MassHunter, Thermo Xcalibur, PerkinElmer Empower, Waters Empower, Shimadzu LabSolutions data can be imported with calibration curves, internal standards, and sample results. Manual re-entry is eliminated."
    ]
  ]
} as ErpIndustryCityProps;
export default function ErpIndCity_environmental_testing_labs_london() { return <ErpIndustryCityPage {...data} />; }
