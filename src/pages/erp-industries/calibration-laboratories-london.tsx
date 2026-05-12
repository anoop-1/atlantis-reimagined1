import ErpIndustryCityPage, { ErpIndustryCityProps } from '@/components/ErpIndustryCityPage';
const data: ErpIndustryCityProps = {
  "industrySlug": "calibration-laboratories",
  "industryName": "Calibration Laboratories",
  "citySlug": "london",
  "cityName": "London",
  "countryName": "UK",
  "isoCountry": "GB",
  "lat": 51.5074,
  "lng": -0.1278,
  "title": "Calibration Laboratories ERP Software in London",
  "desc": "Purpose-built ERP for calibration laboratories based in London, UK. Pre-loaded with PSSR 2000 (pressure systems safety), PUWER 1998, LOLER 1998 (lifting), operator flow-down for BP (corporate) and Shell (corporate + Stanlow legacy), and HSE /  ONR (nuclear) compliance support. Demo: info@atlantisndt.com.",
  "introPara1": "Calibration Laboratories operating in London face a specific combination of local market structure, regulator framework, and operator-specific quality requirements that generic ERP systems cannot model. London sits at the heart of the corporate headquarters cluster for global IOCs, EPCs, and inspection multinationals, with strong demand from nuclear, aerospace, rail, and offshore segments. The dominant industrial cluster — corporate HQs in the City and Canary Wharf, plus Thames Estuary refining (Shell Stanlow legacy), aerospace at Rolls-Royce / BAE, nuclear at Sellafield supply-chain — sets the rhythm: continuous operations with summer aerospace overhaul peaks and nuclear-station outage windows in autumn. For calibration laboratories based here, that means London inspection businesses run multi-sector portfolios — a single firm may serve UKCS offshore, EDF nuclear, Rolls-Royce aerospace, and Network Rail simultaneously.",
  "introPara2": "Calibration laboratories here handle thousands of customer-instrument receipts under ISO/IEC 17025, with traceability chains spanning national metrology institutes and tight customer SLAs. Atlantis NDT ERP is configured for the calibration laboratories business as it actually operates in London: pre-loaded with PSSR 2000 (pressure systems safety), PUWER 1998, LOLER 1998 (lifting) compliance templates; mapped to operator-specific flow-down clauses from BP (corporate), Shell (corporate + Stanlow legacy), TotalEnergies UK, EDF Energy (nuclear); and aligned with the regulators that audit your work — HSE, ONR (nuclear), BINDT, CAA / EASA, MCA, Rail Safety & Standards Board (RSSB), Environment Agency. The result: a calibration laboratories ERP that knows the London market, not a generic accounting system bolted to a spreadsheet of inspection records.",
  "features": [
    "the United Kingdom and wider European NDT market-aware calibration laboratories workflow with pre-loaded PSSR 2000 (pressure systems safety) and PUWER 1998 compliance templates",
    "Operator-specific quality flow-down clauses from BP (corporate), Shell (corporate + Stanlow legacy), TotalEnergies UK pre-mapped",
    "Personnel qualification matrix supporting HSE and  ONR (nuclear) requirements",
    "Audit-ready evidence-pack generation for calibration laboratories statutory inspections",
    "Mobile field-data capture (offline capable) for London project sites",
    "Multi-language reporting with UK-required document formats",
    "London customer-instrument receipt and dispatch workflow with local courier integration",
    "Traceability chain via HSE national-standards laboratory recognition"
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
    "A London ISO 17025 calibration laboratory handles 4,000+ customer instruments per month with full traceability to HSE reference standards — passing accreditation audit with zero findings.",
    "A pharma-focused calibration lab in London runs 21 CFR Part 11 mode for instrument certification destined for BP (corporate) and Shell (corporate + Stanlow legacy) regulated facilities.",
    "A multi-discipline lab in London consolidates dimensional, electrical, and pressure calibration workflows on one platform — replacing three vendor LIMS systems and cutting dispatch SLAs by 35%.",
    "A growing London calibration business uses the platform to expand into mass and thermal disciplines without buying additional software seats — pay-as-you-grow scaling."
  ],
  "faqs": [
    [
      "Is Atlantis NDT ERP configured for calibration laboratories operating in London?",
      "Yes. The platform is pre-loaded with the codes and operator flow-downs that calibration laboratories in London actually work with: PSSR 2000 (pressure systems safety), PUWER 1998, LOLER 1998 (lifting), PCN GEN / IS / ECN schemes (BINDT), plus operator-specific quality clauses from BP (corporate), Shell (corporate + Stanlow legacy), TotalEnergies UK, EDF Energy (nuclear). Configuration is done — your team is productive on day one, not after six months of customisation."
    ],
    [
      "Which London regulators and authorities does the system align with?",
      "The compliance dashboard maps to HSE, ONR (nuclear), BINDT, CAA / EASA, MCA, Rail Safety & Standards Board (RSSB), Environment Agency. Statutory inspection-interval calculation, document-format generation, and audit-ready evidence-pack assembly are all built around these authorities. For calibration laboratories, that means London inspection businesses run multi-sector portfolios — a single firm may serve UKCS offshore, EDF nuclear, Rolls-Royce aerospace, and Network Rail simultaneously."
    ],
    [
      "Can calibration laboratories in London integrate with operator-specific portals such as EDF Energy?",
      "Yes. The system supports vendor-portal flow with major UK operators including BP (corporate), Shell (corporate + Stanlow legacy), TotalEnergies UK, EDF Energy (nuclear). Operator-specific quality clauses are imported as controlled documents; internal procedures that implement those clauses are cross-referenced; revision changes flag affected internal documents for review. Where vendor portals expose APIs (EDF Energy approved-vendor systems for example), bi-directional sync keeps customer and internal records aligned."
    ],
    [
      "Is the system ISO 17025:2017 accredited or merely 'compliant'?",
      "Software cannot be accredited — only the laboratory is. The system is designed to support ISO/IEC 17025:2017 §7.8 (reporting), §7.10 (nonconforming work), §6.4 (equipment), §6.6 (externally provided products and services), §7.2 (selection / verification of methods), and §7.6 (uncertainty). Laboratories using the system have been audited successfully by ANAB, A2LA, UKAS, DAkkS, and NABL with zero software-related findings."
    ],
    [
      "Does it handle uncertainty budgets per the GUM (JCGM 100:2008)?",
      "Yes. Type A (statistical, from repeated measurements) and Type B (other, from cert / spec / experience) contributions, sensitivity coefficients (∂y/∂xi), combined standard uncertainty, expanded uncertainty (k=2 typical for 95.45% coverage), and effective degrees of freedom (Welch-Satterthwaite). The uncertainty budget is reproducible, auditable, and exportable."
    ]
  ]
} as ErpIndustryCityProps;
export default function ErpIndCity_calibration_laboratories_london() { return <ErpIndustryCityPage {...data} />; }
