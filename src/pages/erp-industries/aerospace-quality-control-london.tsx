import ErpIndustryCityPage, { ErpIndustryCityProps } from '@/components/ErpIndustryCityPage';
const data: ErpIndustryCityProps = {
  "industrySlug": "aerospace-quality-control",
  "industryName": "Aerospace Quality Control",
  "citySlug": "london",
  "cityName": "London",
  "countryName": "UK",
  "isoCountry": "GB",
  "lat": 51.5074,
  "lng": -0.1278,
  "title": "Aerospace Quality Control ERP Software in London",
  "desc": "Purpose-built ERP for aerospace quality control based in London, UK. Pre-loaded with PSSR 2000 (pressure systems safety), PUWER 1998, LOLER 1998 (lifting), operator flow-down for BP (corporate) and Shell (corporate + Stanlow legacy), and HSE /  ONR (nuclear) compliance support. Demo: info@atlantisndt.com.",
  "introPara1": "Aerospace Quality Control operating in London face a specific combination of local market structure, regulator framework, and operator-specific quality requirements that generic ERP systems cannot model. London sits at the heart of the corporate headquarters cluster for global IOCs, EPCs, and inspection multinationals, with strong demand from nuclear, aerospace, rail, and offshore segments. The dominant industrial cluster — corporate HQs in the City and Canary Wharf, plus Thames Estuary refining (Shell Stanlow legacy), aerospace at Rolls-Royce / BAE, nuclear at Sellafield supply-chain — sets the rhythm: continuous operations with summer aerospace overhaul peaks and nuclear-station outage windows in autumn. For aerospace quality control based here, that means London inspection businesses run multi-sector portfolios — a single firm may serve UKCS offshore, EDF nuclear, Rolls-Royce aerospace, and Network Rail simultaneously.",
  "introPara2": "Aerospace QC and MRO firms here track NAS-410 personnel qualification, AS9100D quality systems, and customer-specific specifications (Boeing, Airbus, OEM) with zero tolerance for documentation gaps. Atlantis NDT ERP is configured for the aerospace quality control business as it actually operates in London: pre-loaded with PSSR 2000 (pressure systems safety), PUWER 1998, LOLER 1998 (lifting) compliance templates; mapped to operator-specific flow-down clauses from BP (corporate), Shell (corporate + Stanlow legacy), TotalEnergies UK, EDF Energy (nuclear); and aligned with the regulators that audit your work — HSE, ONR (nuclear), BINDT, CAA / EASA, MCA, Rail Safety & Standards Board (RSSB), Environment Agency. The result: a aerospace quality control ERP that knows the London market, not a generic accounting system bolted to a spreadsheet of inspection records.",
  "features": [
    "the United Kingdom and wider European NDT market-aware aerospace quality control workflow with pre-loaded PSSR 2000 (pressure systems safety) and PUWER 1998 compliance templates",
    "Operator-specific quality flow-down clauses from BP (corporate), Shell (corporate + Stanlow legacy), TotalEnergies UK pre-mapped",
    "Personnel qualification matrix supporting HSE and  ONR (nuclear) requirements",
    "Audit-ready evidence-pack generation for aerospace quality control statutory inspections",
    "Mobile field-data capture (offline capable) for London project sites",
    "Multi-language reporting with UK-required document formats",
    "London aerospace customer specification library — pre-loaded clauses from local primes and tier-1s",
    "Regulatory work-pack assembly for HSE and  ONR (nuclear) certification authorities"
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
    "A NAS-410 NDT shop in London manages 35 BP (corporate)-approved aerospace NDT technicians with method-and-customer-specific qualification matrices — including periodic vision and proficiency tests.",
    "An MRO facility in London runs AS9100D + FAA/EASA Part 145 + customer Shell (corporate + Stanlow legacy) flow-down clauses on a single platform — IMS audits unify across all schemes.",
    "A composite-component inspection shop in London integrates phased-array UT and shearography results with TotalEnergies UK customer specification compliance evidence per part number.",
    "A defence aerospace supplier in London maintains AS9100D quality records and customer-specific FOD prevention compliance per AS9146 — daily dashboard visible across production areas."
  ],
  "faqs": [
    [
      "Is Atlantis NDT ERP configured for aerospace quality control operating in London?",
      "Yes. The platform is pre-loaded with the codes and operator flow-downs that aerospace quality control in London actually work with: PSSR 2000 (pressure systems safety), PUWER 1998, LOLER 1998 (lifting), PCN GEN / IS / ECN schemes (BINDT), plus operator-specific quality clauses from BP (corporate), Shell (corporate + Stanlow legacy), TotalEnergies UK, EDF Energy (nuclear). Configuration is done — your team is productive on day one, not after six months of customisation."
    ],
    [
      "Which London regulators and authorities does the system align with?",
      "The compliance dashboard maps to HSE, ONR (nuclear), BINDT, CAA / EASA, MCA, Rail Safety & Standards Board (RSSB), Environment Agency. Statutory inspection-interval calculation, document-format generation, and audit-ready evidence-pack assembly are all built around these authorities. For aerospace quality control, that means London inspection businesses run multi-sector portfolios — a single firm may serve UKCS offshore, EDF nuclear, Rolls-Royce aerospace, and Network Rail simultaneously."
    ],
    [
      "Can aerospace quality control in London integrate with operator-specific portals such as EDF Energy?",
      "Yes. The system supports vendor-portal flow with major UK operators including BP (corporate), Shell (corporate + Stanlow legacy), TotalEnergies UK, EDF Energy (nuclear). Operator-specific quality clauses are imported as controlled documents; internal procedures that implement those clauses are cross-referenced; revision changes flag affected internal documents for review. Where vendor portals expose APIs (EDF Energy approved-vendor systems for example), bi-directional sync keeps customer and internal records aligned."
    ],
    [
      "Does it support NAS-410 personnel qualification?",
      "Yes. NAS-410 Rev 5 personnel qualification is native — training hours, experience, vision, examination, practical demonstration, periodic requalification are all tracked. The qualification matrix supports method, technique, and customer-specific qualifications (e.g., Boeing FPI Level II per D-590)."
    ],
    [
      "How are Boeing / Airbus / OEM customer quality clauses managed?",
      "Customer-specific quality flow-down per AS9100D §4.4. Boeing D6-82479, Airbus AITM, Bombardier ASTM, Embraer NE, Pratt & Whitney ASQR-01, GE S-1000 are imported as controlled customer documents. Internal procedures that implement customer requirements are cross-referenced; revision changes flag affected internal documents for review."
    ]
  ]
} as ErpIndustryCityProps;
export default function ErpIndCity_aerospace_quality_control_london() { return <ErpIndustryCityPage {...data} />; }
