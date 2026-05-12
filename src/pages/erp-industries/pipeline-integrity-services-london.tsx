import ErpIndustryCityPage, { ErpIndustryCityProps } from '@/components/ErpIndustryCityPage';
const data: ErpIndustryCityProps = {
  "industrySlug": "pipeline-integrity-services",
  "industryName": "Pipeline Integrity & ILI Services",
  "citySlug": "london",
  "cityName": "London",
  "countryName": "UK",
  "isoCountry": "GB",
  "lat": 51.5074,
  "lng": -0.1278,
  "title": "Pipeline Integrity & ILI Services ERP Software in London",
  "desc": "Purpose-built ERP for pipeline integrity & ili services based in London, UK. Pre-loaded with PSSR 2000 (pressure systems safety), PUWER 1998, LOLER 1998 (lifting), operator flow-down for BP (corporate) and Shell (corporate + Stanlow legacy), and HSE /  ONR (nuclear) compliance support. Demo: info@atlantisndt.com.",
  "introPara1": "Pipeline Integrity & ILI Services operating in London face a specific combination of local market structure, regulator framework, and operator-specific quality requirements that generic ERP systems cannot model. London sits at the heart of the corporate headquarters cluster for global IOCs, EPCs, and inspection multinationals, with strong demand from nuclear, aerospace, rail, and offshore segments. The dominant industrial cluster — corporate HQs in the City and Canary Wharf, plus Thames Estuary refining (Shell Stanlow legacy), aerospace at Rolls-Royce / BAE, nuclear at Sellafield supply-chain — sets the rhythm: continuous operations with summer aerospace overhaul peaks and nuclear-station outage windows in autumn. For pipeline integrity & ili services based here, that means London inspection businesses run multi-sector portfolios — a single firm may serve UKCS offshore, EDF nuclear, Rolls-Royce aerospace, and Network Rail simultaneously.",
  "introPara2": "Pipeline integrity service providers here aggregate ILI vendor data (MFL, UT, EMAT, caliper), dig verification campaigns, and API 1163 / 1160 statutory submissions across long-haul networks. Atlantis NDT ERP is configured for the pipeline integrity & ili services business as it actually operates in London: pre-loaded with PSSR 2000 (pressure systems safety), PUWER 1998, LOLER 1998 (lifting) compliance templates; mapped to operator-specific flow-down clauses from BP (corporate), Shell (corporate + Stanlow legacy), TotalEnergies UK, EDF Energy (nuclear); and aligned with the regulators that audit your work — HSE, ONR (nuclear), BINDT, CAA / EASA, MCA, Rail Safety & Standards Board (RSSB), Environment Agency. The result: a pipeline integrity & ili services ERP that knows the London market, not a generic accounting system bolted to a spreadsheet of inspection records.",
  "features": [
    "the United Kingdom and wider European NDT market-aware pipeline integrity & ili services workflow with pre-loaded PSSR 2000 (pressure systems safety) and PUWER 1998 compliance templates",
    "Operator-specific quality flow-down clauses from BP (corporate), Shell (corporate + Stanlow legacy), TotalEnergies UK pre-mapped",
    "Personnel qualification matrix supporting HSE and  ONR (nuclear) requirements",
    "Audit-ready evidence-pack generation for pipeline integrity & ili services statutory inspections",
    "Mobile field-data capture (offline capable) for London project sites",
    "Multi-language reporting with UK-required document formats",
    "London regulator submission formats pre-built for HSE and  ONR (nuclear)",
    "Long-haul pipeline ILI campaign manager for BP (corporate) and Shell (corporate + Stanlow legacy) network coverage"
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
    "An ILI vendor servicing BP (corporate) runs 800 km of liquids pipeline annually with API 1163 vendor-qualification packs assembled automatically from dig-verification data.",
    "A pipeline integrity firm in London runs API 1160 IMP threat assessment per Shell (corporate + Stanlow legacy) network segment — replacing Excel workbooks that previously generated audit findings.",
    "A dig-verification crew in London captures field measurements per NACE SP0102 on mobile devices and statistically compares vs. ILI prediction in real time.",
    "A regional ILI services company in London submits HSE statutory pipeline reports automatically from underlying inspection data — eliminating manual reporting deadlines as a risk source."
  ],
  "faqs": [
    [
      "Is Atlantis NDT ERP configured for pipeline integrity & ili services operating in London?",
      "Yes. The platform is pre-loaded with the codes and operator flow-downs that pipeline integrity & ili services in London actually work with: PSSR 2000 (pressure systems safety), PUWER 1998, LOLER 1998 (lifting), PCN GEN / IS / ECN schemes (BINDT), plus operator-specific quality clauses from BP (corporate), Shell (corporate + Stanlow legacy), TotalEnergies UK, EDF Energy (nuclear). Configuration is done — your team is productive on day one, not after six months of customisation."
    ],
    [
      "Which London regulators and authorities does the system align with?",
      "The compliance dashboard maps to HSE, ONR (nuclear), BINDT, CAA / EASA, MCA, Rail Safety & Standards Board (RSSB), Environment Agency. Statutory inspection-interval calculation, document-format generation, and audit-ready evidence-pack assembly are all built around these authorities. For pipeline integrity & ili services, that means London inspection businesses run multi-sector portfolios — a single firm may serve UKCS offshore, EDF nuclear, Rolls-Royce aerospace, and Network Rail simultaneously."
    ],
    [
      "Can pipeline integrity & ili services in London integrate with operator-specific portals such as EDF Energy?",
      "Yes. The system supports vendor-portal flow with major UK operators including BP (corporate), Shell (corporate + Stanlow legacy), TotalEnergies UK, EDF Energy (nuclear). Operator-specific quality clauses are imported as controlled documents; internal procedures that implement those clauses are cross-referenced; revision changes flag affected internal documents for review. Where vendor portals expose APIs (EDF Energy approved-vendor systems for example), bi-directional sync keeps customer and internal records aligned."
    ],
    [
      "Does it import ILI vendor data (Rosen / NDT Global / Baker Hughes / TDW)?",
      "Yes. Standard imports for Rosen, NDT Global, Baker Hughes (Process & Pipeline Services), T.D. Williamson, Quest Integrity, and Onstream pipeline data formats. Anomaly records (location, depth, length, width, type) align to the pipeline asset register. ILI vs. dig-verification comparison is automated for API 1163 vendor qualification."
    ],
    [
      "Can it support API 1163 ILI vendor qualification?",
      "Yes. The system maintains the ILI vendor qualification record: tool spec, performance specification, prior-run history, dig-verification results, comparison statistics (POD, POI, sizing accuracy). The qualification report is generated in the API 1163 Appendix B format expected by operator integrity engineering teams."
    ]
  ]
} as ErpIndustryCityProps;
export default function ErpIndCity_pipeline_integrity_services_london() { return <ErpIndustryCityPage {...data} />; }
