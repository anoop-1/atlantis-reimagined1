// Generated planning references; edit scripts/satellite-upgrade/planning.mjs.
export const regions = [
  {
    "name": "United States",
    "priority": "Priority 1",
    "countries": [
      "United States"
    ],
    "cities": "For example: Houston, Dallas, Los Angeles, Seattle, Chicago, Detroit, Pittsburgh and New York.",
    "brief": "Identify the state and actual worksite, not only the purchasing office. For a multi-state programme, separate each site’s access window, responsible contact and customer requirements. Specify US customary or SI units for reports; do not assume a training certificate or procedure accepted on one contract transfers to another.",
    "prepare": [
      "Name the employer qualification scheme and customer approval route.",
      "Separate remote document review or software demonstrations from work requiring mobilisation.",
      "For training, provide the method, level, cohort size and documented experience; for field work, provide the component register and work window."
    ]
  },
  {
    "name": "Canada",
    "priority": "Priority 2",
    "countries": [
      "Canada"
    ],
    "cities": "For example: Calgary, Edmonton, Toronto, Montreal, Vancouver and Halifax.",
    "brief": "Include the province, site location and working language. A purchasing team, training cohort and asset may be in different provinces; identify which location determines access and scheduling. Ask the responsible employer or customer which personnel credentials are accepted rather than assuming US requirements apply unchanged.",
    "prepare": [
      "Confirm the required qualification scheme and evidence with the customer.",
      "Identify report and instruction languages before agreeing deliverables.",
      "Distinguish remote support from travel, equipment movement and site-specific mobilisation."
    ]
  },
  {
    "name": "Europe",
    "priority": "Priority 2",
    "countries": [
      "United Kingdom",
      "Germany",
      "France",
      "Netherlands",
      "Norway",
      "Sweden",
      "Denmark",
      "Finland",
      "Ireland",
      "Italy",
      "Spain",
      "Poland",
      "Switzerland",
      "Belgium",
      "Other European country"
    ],
    "cities": "For example: Aberdeen, Manchester, Hamburg, Rotterdam, Stavanger, Gothenburg, Paris and Milan.",
    "brief": "Specify the country and customer requirements rather than treating Europe as one qualification or procurement market. Record the requested document language, measurement units and approval owner. For software, take hosting, data residency and access questions to your own IT and procurement reviewers before a pilot.",
    "prepare": [
      "Provide the applicable contract documents and accepted personnel scheme.",
      "Agree working-hour overlap, language and document review turnaround.",
      "Ask for an explicit onsite or remote scope; a regional guide does not establish local authorization."
    ]
  },
  {
    "name": "Australia and New Zealand",
    "priority": "Priority 2",
    "countries": [
      "Australia",
      "New Zealand"
    ],
    "cities": "For example: Perth, Brisbane, Melbourne, Sydney, Adelaide, Auckland, Wellington and Christchurch.",
    "brief": "Separate the office location from the mine, plant, port or remote asset where work occurs. Confirm the local work window and access arrangements before requesting an inspection date. For remote learning or demonstrations, give the city and local time rather than a time-zone abbreviation that may be ambiguous.",
    "prepare": [
      "Identify remote-site access, inductions and any travel constraints.",
      "Confirm customer-accepted qualifications and the applicable procedure.",
      "For software or training, specify devices, connectivity and available instructor contact time."
    ]
  },
  {
    "name": "Singapore and Japan",
    "priority": "Priority 2",
    "countries": [
      "Singapore",
      "Japan"
    ],
    "cities": "For example: Singapore, Tokyo, Yokohama, Nagoya, Osaka and Kobe.",
    "brief": "Agree the working language, customer documentation and review sequence at the outset. For port, shipyard or manufacturing work, specify the actual facility and access owner. For digital products, demonstrate a representative report and approval workflow, including language and export requirements, before procurement.",
    "prepare": [
      "Identify whether bilingual reports, training materials or customer review are required.",
      "Confirm site access, equipment requirements and the work window.",
      "Separate a product demo from promised integrations or local field delivery."
    ]
  },
  {
    "name": "Middle East, India and Africa",
    "priority": "Priority 3",
    "countries": [
      "United Arab Emirates",
      "Saudi Arabia",
      "Qatar",
      "Oman",
      "Bahrain",
      "Kuwait",
      "Other Middle Eastern country",
      "India",
      "South Africa",
      "Egypt",
      "Nigeria",
      "Kenya",
      "Ghana",
      "Other African country"
    ],
    "cities": "For example: Abu Dhabi, Dubai, Dammam, Doha, Muscat, Mumbai, Chennai, Bengaluru, Johannesburg, Cairo, Lagos and Nairobi.",
    "brief": "Specify the country, asset location and end customer. Requirements differ between countries and facilities; do not infer approvals or mobilisation capability from a regional listing. Establish who provides site access, personnel acceptance and the approved technical scope before scheduling.",
    "prepare": [
      "State the end-customer approval requirements and target work dates.",
      "Clarify local-language support, document format and onsite versus remote delivery.",
      "For a training cohort, identify the employer requirement and practical experience pathway; no API training is offered through these guides."
    ]
  }
];
export const industries = [
  {
    "id": "energy",
    "name": "Oil, gas, LNG and petrochemical",
    "brief": "Separate the asset register, planned outage and examination scope. A plant-level enquiry is too broad to price without component identity, access and deliverables.",
    "evidence": "Equipment register, relevant drawings, inspection history and work window.",
    "decision": "inspection",
    "workflow": "twin"
  },
  {
    "id": "fabrication",
    "name": "Welding, fabrication and construction",
    "brief": "Organise the enquiry around weld or component identification, examination extent, repairs and release status. Agree how re-examinations remain connected to the original record.",
    "evidence": "Weld register, drawing revision, materials, access and acceptance documents.",
    "decision": "inspection",
    "workflow": "reporting"
  },
  {
    "id": "aerospace",
    "name": "Aerospace and composites",
    "brief": "Identify the customer approval route, material system and required personnel scheme before discussing a technique or learning programme. A general NDT offer does not establish aerospace accreditation.",
    "evidence": "Customer specifications, component geometry, reference samples and approval owner.",
    "decision": "consulting",
    "workflow": "simulation"
  },
  {
    "id": "manufacturing",
    "name": "Manufacturing and production quality",
    "brief": "Define the product family and the decision the examination supports. Connect component identity, examination records and disposition without assuming that a software workflow authorises product release.",
    "evidence": "Product drawings, sampling or examination extent, cycle requirements and report examples.",
    "decision": "consulting",
    "workflow": "erp"
  },
  {
    "id": "marine",
    "name": "Marine, offshore and subsea",
    "brief": "Distinguish document review from specialist access or field deployment. For underwater work, define who supplies the delivery system and how observations are tied to asset locations.",
    "evidence": "Asset map, access arrangements, campaign objectives and customer requirements.",
    "decision": "consulting",
    "workflow": "twin"
  },
  {
    "id": "power",
    "name": "Power generation and nuclear",
    "brief": "Identify the plant’s approval and quality requirements before procurement. Nuclear work requires explicit scope and authorisation review; no nuclear qualification or approved-vendor status is implied.",
    "evidence": "Component list, outage dates, governing documents and responsible technical authority.",
    "decision": "consulting",
    "workflow": "reporting"
  },
  {
    "id": "renewables",
    "name": "Renewable energy",
    "brief": "Separate welded steel, composite and other components. Their examination objectives and access requirements differ; one technique or training programme should not be assumed suitable for the whole asset.",
    "evidence": "Component materials, damage question, access constraints and location reference system.",
    "decision": "inspection",
    "workflow": "twin"
  },
  {
    "id": "mining",
    "name": "Mining and heavy equipment",
    "brief": "Specify the machine or structure, material, suspected condition and safe access window. Keep repair history linked to component identity so a later inspection can compare like-for-like.",
    "evidence": "Equipment identifiers, repair records, drawings and available shutdown time.",
    "decision": "inspection",
    "workflow": "erp"
  },
  {
    "id": "rail",
    "name": "Rail and transport",
    "brief": "Start with the operator’s requirements, component identity and release authority. Training or a generic procedure does not establish operator approval for safety-critical work.",
    "evidence": "Component family, operator procedure, required personnel authorisations and traceability records.",
    "decision": "consulting",
    "workflow": "reporting"
  },
  {
    "id": "pipelines",
    "name": "Pipelines, tanks and pressure equipment",
    "brief": "Define the segment or equipment item, locations of interest and prior findings. Distinguish collecting examination evidence from engineering assessment or deciding inspection intervals.",
    "evidence": "Asset or segment register, location references, historic results and applicable inspection scope.",
    "decision": "inspection",
    "workflow": "twin"
  },
  {
    "id": "training",
    "name": "Training providers and employer learning teams",
    "brief": "Choose a method and learning objective before selecting a course or simulation. Separate knowledge practice from required supervised experience, examinations and employer certification responsibilities.",
    "evidence": "Learner records, target method and level, cohort size, devices and intended work applications.",
    "decision": "training",
    "workflow": "simulation"
  },
  {
    "id": "contractors",
    "name": "Inspection contractors and multi-site service teams",
    "brief": "Map one job from enquiry through crew readiness, report approval and invoicing. Use exceptions and rework cases in a software evaluation, not only an ideal demonstration.",
    "evidence": "An anonymised job pack, approval roles, current systems and required exports.",
    "decision": "erp",
    "workflow": "reporting"
  }
];
export const offerPlanning: Record<string, string[]> = {
  "training": [
    "Who needs learning?",
    "Method, target level, learner experience, cohort size, preferred format and employer requirements. NDT training only; no API courses."
  ],
  "inspection": [
    "What needs examination?",
    "Asset, material, geometry, method if specified, access, location, extent and acceptance documents. Confirm field delivery separately."
  ],
  "consulting": [
    "Which technical decision needs support?",
    "Procedure or written-practice question, code edition, method, deadline and responsible approval authority."
  ],
  "erp": [
    "Which operational handoff needs improvement?",
    "Users, sites, personnel and equipment records, existing systems, approval flow and implementation priorities."
  ],
  "reporting": [
    "What must the issued report contain?",
    "An anonymised template, units, location identifiers, review roles, signatures and export requirements."
  ],
  "twin": [
    "How will findings relate to the asset?",
    "Model or drawings, inspection locations, historic records and the review task. Discuss standalone or ERP-module scope."
  ],
  "simulation": [
    "What should the learner practise?",
    "Target methods, learning objectives, instructor workflow, devices and cohort size. Discuss standalone or ERP-module scope; confirm supported scenarios."
  ]
};
