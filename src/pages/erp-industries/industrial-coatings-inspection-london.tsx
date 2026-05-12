import ErpIndustryCityPage, { ErpIndustryCityProps } from '@/components/ErpIndustryCityPage';
const data: ErpIndustryCityProps = {
  "industrySlug": "industrial-coatings-inspection",
  "industryName": "Industrial Coatings Inspection",
  "citySlug": "london",
  "cityName": "London",
  "countryName": "UK",
  "isoCountry": "GB",
  "lat": 51.5074,
  "lng": -0.1278,
  "title": "Industrial Coatings Inspection ERP Software in London",
  "desc": "Purpose-built ERP for industrial coatings inspection based in London, UK. Pre-loaded with PSSR 2000 (pressure systems safety), PUWER 1998, LOLER 1998 (lifting), operator flow-down for BP (corporate) and Shell (corporate + Stanlow legacy), and HSE /  ONR (nuclear) compliance support. Demo: info@atlantisndt.com.",
  "introPara1": "Industrial Coatings Inspection operating in London face a specific combination of local market structure, regulator framework, and operator-specific quality requirements that generic ERP systems cannot model. London sits at the heart of the corporate headquarters cluster for global IOCs, EPCs, and inspection multinationals, with strong demand from nuclear, aerospace, rail, and offshore segments. The dominant industrial cluster — corporate HQs in the City and Canary Wharf, plus Thames Estuary refining (Shell Stanlow legacy), aerospace at Rolls-Royce / BAE, nuclear at Sellafield supply-chain — sets the rhythm: continuous operations with summer aerospace overhaul peaks and nuclear-station outage windows in autumn. For industrial coatings inspection based here, that means London inspection businesses run multi-sector portfolios — a single firm may serve UKCS offshore, EDF nuclear, Rolls-Royce aerospace, and Network Rail simultaneously.",
  "introPara2": "Industrial coatings inspection businesses here capture NACE / AMPP DFT readings, hold-point witness records, ISO 12944 coating-system data, and pull-off adhesion test results across multi-month campaigns. Atlantis NDT ERP is configured for the industrial coatings inspection business as it actually operates in London: pre-loaded with PSSR 2000 (pressure systems safety), PUWER 1998, LOLER 1998 (lifting) compliance templates; mapped to operator-specific flow-down clauses from BP (corporate), Shell (corporate + Stanlow legacy), TotalEnergies UK, EDF Energy (nuclear); and aligned with the regulators that audit your work — HSE, ONR (nuclear), BINDT, CAA / EASA, MCA, Rail Safety & Standards Board (RSSB), Environment Agency. The result: a industrial coatings inspection ERP that knows the London market, not a generic accounting system bolted to a spreadsheet of inspection records.",
  "features": [
    "the United Kingdom and wider European NDT market-aware industrial coatings inspection workflow with pre-loaded PSSR 2000 (pressure systems safety) and PUWER 1998 compliance templates",
    "Operator-specific quality flow-down clauses from BP (corporate), Shell (corporate + Stanlow legacy), TotalEnergies UK pre-mapped",
    "Personnel qualification matrix supporting HSE and  ONR (nuclear) requirements",
    "Audit-ready evidence-pack generation for industrial coatings inspection statutory inspections",
    "Mobile field-data capture (offline capable) for London project sites",
    "Multi-language reporting with UK-required document formats",
    "London project hold-point manager with BP (corporate) and Shell (corporate + Stanlow legacy) witness-list defaults",
    "Climate-aware coating-application window planner tuned to continuous operations with summer aerospace overhaul peaks and nuclear-station outage windows in autumn"
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
    "A coatings inspection firm in London captures DFT readings per SSPC PA 2 on mobile DFT gauges for BP (corporate) project — 80/80 rule statistics auto-calculated, remediation work orders raised automatically.",
    "A London coatings inspection team manages ISO 12944 corrosion-protection systems across Shell (corporate + Stanlow legacy) project hold-point witness records — clients receive 48-hour hold-point notifications automatically.",
    "A multi-project coatings contractor in London consolidates NACE / AMPP CIP inspector qualifications across rotating crews — preventing mid-project expiry that previously rejected work.",
    "An offshore coatings inspection mobilisation in London closes out a TotalEnergies UK platform topside campaign with full ASTM D4541 pull-off adhesion statistical evidence in 24 hours."
  ],
  "faqs": [
    [
      "Is Atlantis NDT ERP configured for industrial coatings inspection operating in London?",
      "Yes. The platform is pre-loaded with the codes and operator flow-downs that industrial coatings inspection in London actually work with: PSSR 2000 (pressure systems safety), PUWER 1998, LOLER 1998 (lifting), PCN GEN / IS / ECN schemes (BINDT), plus operator-specific quality clauses from BP (corporate), Shell (corporate + Stanlow legacy), TotalEnergies UK, EDF Energy (nuclear). Configuration is done — your team is productive on day one, not after six months of customisation."
    ],
    [
      "Which London regulators and authorities does the system align with?",
      "The compliance dashboard maps to HSE, ONR (nuclear), BINDT, CAA / EASA, MCA, Rail Safety & Standards Board (RSSB), Environment Agency. Statutory inspection-interval calculation, document-format generation, and audit-ready evidence-pack assembly are all built around these authorities. For industrial coatings inspection, that means London inspection businesses run multi-sector portfolios — a single firm may serve UKCS offshore, EDF nuclear, Rolls-Royce aerospace, and Network Rail simultaneously."
    ],
    [
      "Can industrial coatings inspection in London integrate with operator-specific portals such as EDF Energy?",
      "Yes. The system supports vendor-portal flow with major UK operators including BP (corporate), Shell (corporate + Stanlow legacy), TotalEnergies UK, EDF Energy (nuclear). Operator-specific quality clauses are imported as controlled documents; internal procedures that implement those clauses are cross-referenced; revision changes flag affected internal documents for review. Where vendor portals expose APIs (EDF Energy approved-vendor systems for example), bi-directional sync keeps customer and internal records aligned."
    ],
    [
      "Does it manage NACE / AMPP Coating Inspector qualifications?",
      "Yes. NACE / AMPP CIP Level I / II / III qualifications, BGAS-CSWIP coating inspector, ICorr coating inspector, FROSIO coating inspector are tracked with expiry, scope, and renewal workflow. Inspector assignments to jobs are gated against required qualification."
    ],
    [
      "How are DFT (dry-film thickness) campaigns managed?",
      "DFT readings per SSPC PA 2 are captured in the field app on a mobile DFT gauge. The grid pattern, spot-measurements, and 80-80 rule statistics are calculated automatically. Out-of-spec spots trigger remediation work order. Final coating system pull-down per SSPC PA 2 §9 generates the customer-facing DFT report."
    ]
  ]
} as ErpIndustryCityProps;
export default function ErpIndCity_industrial_coatings_inspection_london() { return <ErpIndustryCityPage {...data} />; }
