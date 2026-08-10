import ErpModulePage from '@/components/ErpModulePage';
const data = {
  "slug": "asset-management",
  "name": "Asset Integrity & Equipment Register",
  "title": "Asset Integrity Management Software for Inspection Companies",
  "h1": "Asset Integrity & Equipment Register Module",
  "desc": "Pressure vessel, piping circuit, storage tank, heat exchanger, pipeline, and rotating equipment registers with hierarchical asset structure, damage mechanism tracking, and full inspection history.",
  "intro": "Inspection programs need an authoritative asset register. The asset register is the spine that connects equipment, inspection history, drawings, P&IDs, isometrics, corrosion mechanisms, RBI assessments, fitness-for-service calculations, and integrity operating windows. Atlantis NDT ERP's asset integrity module is built to match the model required by API, ASME, and major operator integrity programs — teams searching for \"pressure equipment integrity software\" or a pressure-vessel and piping integrity register land on the same module described below.",
  "features": [
    "Hierarchical asset structure: site → unit → system → equipment → component → TML",
    "Equipment types: pressure vessel, piping circuit, storage tank, heat exchanger, fired heater, pump, compressor, exchanger tube bundle, valve, pipeline segment, structural member",
    "Damage mechanism library per API 571 (172 mechanisms): identification, screening, susceptibility scoring",
    "Integrity Operating Window (IOW) tracking with alarm levels (information / standard / critical)",
    "TML (thickness measurement location) database with sketch, photograph, GPS, and historical readings",
    "Corrosion rate computation (short / long term) per API 570 / API 653 methodology",
    "Remaining-life calculation with t-min, t-required, design margin, and decision rule",
    "Fitness-for-service screening per API 579-1 / ASME FFS-1 Level 1 calculations",
    "Drawing / P&ID / isometric attachment per equipment with markup overlay",
    "RBI risk score per circuit / equipment with POF + COF + risk matrix per API 581",
    "Inspection plan per equipment: method, extent, interval, acceptance criteria, hold points",
    "Historical inspection report archive linked to each TML and equipment"
  ],
  "useCases": [
    "Refinery integrity team managing 12,000 piping circuits + 1,800 pressure vessels + 200 fired heaters",
    "Pipeline operator with 8,000 miles of regulated pipeline under DOT PHMSA",
    "Tank farm operator managing 600 ASTs across 14 terminals under API 653 program",
    "Petrochemical company tracking damage mechanisms across cracker furnaces and reactors",
    "Asset integrity consultant building out new integrity program from scratch for client"
  ],
  "industries": [
    "Oil & gas refining",
    "Petrochemical",
    "Pipeline operators",
    "Power generation",
    "Storage terminals",
    "LNG / cryogenic"
  ],
  "integrations": [
    "AspenTech Mtell",
    "Hexagon Meridium APM",
    "Bentley AssetWise",
    "GE Vernova APM",
    "IBM Maximo Asset Suite",
    "SAP S/4HANA Asset Management"
  ],
  "faqs": [
    [
      "Can it import asset hierarchies from existing CMMS / APM systems?",
      "Yes. Bulk-import templates accept asset, equipment, functional location, and tag hierarchies from Maximo, SAP PM, AspenTech APM, Bentley AssetWise, and Hexagon Meridium. Equipment numbering schemes, parent-child relationships, and equipment-class attribute sets are preserved. Ongoing sync via REST API keeps systems aligned."
    ],
    [
      "Does it cover API 571 damage mechanisms with screening?",
      "Yes. The damage mechanism module includes all 172 mechanisms from API 571 (3rd edition) with material, environment, temperature, and operating-condition screening criteria. The DM screening report identifies which mechanisms apply to each equipment item with severity ranking and recommended inspection methods."
    ],
    [
      "Can it perform API 579-1 fitness-for-service screening?",
      "Yes — Level 1 FFS assessments for general metal loss (Part 4), local metal loss (Part 5), pitting (Part 6), HIC and blister (Part 7), weld misalignment (Part 8), and crack-like flaws (Part 9). Level 2 and Level 3 assessments are supported via integration with specialist FEA tools (Abaqus, ANSYS, COMSOL)."
    ],
    [
      "How are integrity operating windows (IOWs) tracked and alarmed?",
      "IOWs are defined per equipment with up to 3 alarm levels (information, standard, critical) for each operating parameter (temperature, pressure, fluid composition, flow rate). Real-time or daily-average data from plant historians (PI, Honeywell PHD, Aspen IP.21) feeds the IOW engine; exceedance triggers immediate alerts to the integrity engineer and routes to the deviation management workflow."
    ],
    [
      "Is the system used by owner-operators directly, or only inspection contractors?",
      "Both. Owner-operators use it to manage their integrity programs directly. Inspection contractors use it on behalf of clients (multi-client architecture isolates each client's data). The same data model and engine support both deployment patterns — the difference is access control, branding, and billing structure."
    ]
  ]
};
export default function ErpModule_asset_management() { return <ErpModulePage {...data} />; }
