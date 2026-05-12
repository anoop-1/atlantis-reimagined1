import ErpIndustryCityPage, { ErpIndustryCityProps } from '@/components/ErpIndustryCityPage';
const data: ErpIndustryCityProps = {
  "industrySlug": "metrology-laboratories",
  "industryName": "Metrology Laboratories",
  "citySlug": "london",
  "cityName": "London",
  "countryName": "UK",
  "isoCountry": "GB",
  "lat": 51.5074,
  "lng": -0.1278,
  "title": "Metrology Laboratories ERP Software in London",
  "desc": "Purpose-built ERP for metrology laboratories based in London, UK. Pre-loaded with PSSR 2000 (pressure systems safety), PUWER 1998, LOLER 1998 (lifting), operator flow-down for BP (corporate) and Shell (corporate + Stanlow legacy), and HSE /  ONR (nuclear) compliance support. Demo: info@atlantisndt.com.",
  "introPara1": "Metrology Laboratories operating in London face a specific combination of local market structure, regulator framework, and operator-specific quality requirements that generic ERP systems cannot model. London sits at the heart of the corporate headquarters cluster for global IOCs, EPCs, and inspection multinationals, with strong demand from nuclear, aerospace, rail, and offshore segments. The dominant industrial cluster — corporate HQs in the City and Canary Wharf, plus Thames Estuary refining (Shell Stanlow legacy), aerospace at Rolls-Royce / BAE, nuclear at Sellafield supply-chain — sets the rhythm: continuous operations with summer aerospace overhaul peaks and nuclear-station outage windows in autumn. For metrology laboratories based here, that means London inspection businesses run multi-sector portfolios — a single firm may serve UKCS offshore, EDF nuclear, Rolls-Royce aerospace, and Network Rail simultaneously.",
  "introPara2": "Metrology laboratories here manage multi-discipline uncertainty budgets, proficiency testing, customer-asset chain-of-custody, and ISO 17025 accreditation-audit readiness across dimensional, electrical, pressure, mass, and thermal disciplines. Atlantis NDT ERP is configured for the metrology laboratories business as it actually operates in London: pre-loaded with PSSR 2000 (pressure systems safety), PUWER 1998, LOLER 1998 (lifting) compliance templates; mapped to operator-specific flow-down clauses from BP (corporate), Shell (corporate + Stanlow legacy), TotalEnergies UK, EDF Energy (nuclear); and aligned with the regulators that audit your work — HSE, ONR (nuclear), BINDT, CAA / EASA, MCA, Rail Safety & Standards Board (RSSB), Environment Agency. The result: a metrology laboratories ERP that knows the London market, not a generic accounting system bolted to a spreadsheet of inspection records.",
  "features": [
    "the United Kingdom and wider European NDT market-aware metrology laboratories workflow with pre-loaded PSSR 2000 (pressure systems safety) and PUWER 1998 compliance templates",
    "Operator-specific quality flow-down clauses from BP (corporate), Shell (corporate + Stanlow legacy), TotalEnergies UK pre-mapped",
    "Personnel qualification matrix supporting HSE and  ONR (nuclear) requirements",
    "Audit-ready evidence-pack generation for metrology laboratories statutory inspections",
    "Mobile field-data capture (offline capable) for London project sites",
    "Multi-language reporting with UK-required document formats",
    "London customer dispatch SLA tracking with local courier and customs-clearance handling",
    "Discipline-specific uncertainty templates aligned to HSE accreditation scope"
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
    "A multi-discipline metrology lab in London accredited to ISO 17025 manages uncertainty budgets across dimensional, electrical, pressure, mass, and thermal disciplines on one platform.",
    "A London metrology lab supports BP (corporate) and Shell (corporate + Stanlow legacy) customer-specific decision rules (k=2, k=3, customer-defined) with consistent application across all certificates.",
    "An London metrology business runs proficiency-testing programs (z-score / En-number) and tracks corrective action when results are unsatisfactory — feeding the management review.",
    "A growing London calibration / metrology service expands into a new discipline by enabling the relevant module rather than buying separate software — pay-only-for-used model."
  ],
  "faqs": [
    [
      "Is Atlantis NDT ERP configured for metrology laboratories operating in London?",
      "Yes. The platform is pre-loaded with the codes and operator flow-downs that metrology laboratories in London actually work with: PSSR 2000 (pressure systems safety), PUWER 1998, LOLER 1998 (lifting), PCN GEN / IS / ECN schemes (BINDT), plus operator-specific quality clauses from BP (corporate), Shell (corporate + Stanlow legacy), TotalEnergies UK, EDF Energy (nuclear). Configuration is done — your team is productive on day one, not after six months of customisation."
    ],
    [
      "Which London regulators and authorities does the system align with?",
      "The compliance dashboard maps to HSE, ONR (nuclear), BINDT, CAA / EASA, MCA, Rail Safety & Standards Board (RSSB), Environment Agency. Statutory inspection-interval calculation, document-format generation, and audit-ready evidence-pack assembly are all built around these authorities. For metrology laboratories, that means London inspection businesses run multi-sector portfolios — a single firm may serve UKCS offshore, EDF nuclear, Rolls-Royce aerospace, and Network Rail simultaneously."
    ],
    [
      "Can metrology laboratories in London integrate with operator-specific portals such as EDF Energy?",
      "Yes. The system supports vendor-portal flow with major UK operators including BP (corporate), Shell (corporate + Stanlow legacy), TotalEnergies UK, EDF Energy (nuclear). Operator-specific quality clauses are imported as controlled documents; internal procedures that implement those clauses are cross-referenced; revision changes flag affected internal documents for review. Where vendor portals expose APIs (EDF Energy approved-vendor systems for example), bi-directional sync keeps customer and internal records aligned."
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
export default function ErpIndCity_metrology_laboratories_london() { return <ErpIndustryCityPage {...data} />; }
