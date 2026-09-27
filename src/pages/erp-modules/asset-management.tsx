import ErpModulePage from '@/components/ErpModulePage';
const data = {
  "slug": "asset-management",
  "name": "Asset Integrity & Equipment Register",
  "title": "Asset Integrity Management Software for Inspection Companies",
  "h1": "Asset Integrity & Equipment Register Module",
  "desc": "Pressure vessel, piping circuit, storage tank, heat exchanger, pipeline, and rotating equipment registers with hierarchical asset structure, damage mechanism tracking, and full inspection history.",
  "intro": "Inspection programs need an authoritative asset register. Atlantis NDT ERP's asset integrity module is built to match the model required by API, ASME, and major operator integrity programs.",
  "features": [
    "Drawing / P&ID / isometric attachment per equipment with markup overlay",
    "Inspection plan per equipment: method, extent, interval, acceptance criteria, hold points",
  ],
  "useCases": [
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
    "Bentley AssetWise",
    "GE Vernova APM",
  ],
  "faqs": [
    [
      "Can it import asset hierarchies from existing CMMS / APM systems?",
    ],
    [
    ],
    [
    ],
    [
    ],
    [
      "Is the system used by owner-operators directly, or only inspection contractors?",
      "Both. Owner-operators use it to manage their integrity programs directly. Inspection contractors use it on behalf of clients (multi-client architecture isolates each client's data). The same data model and engine support both deployment patterns — the difference is access control, branding, and billing structure."
    ]
  ]
};
export default function ErpModule_asset_management() { return <ErpModulePage {...data} />; }
