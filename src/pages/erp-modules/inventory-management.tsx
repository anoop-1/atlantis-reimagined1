import ErpModulePage from '@/components/ErpModulePage';
const data = {
  "slug": "inventory-management",
  "name": "Inventory Management",
  "title": "Inventory Management Software for Inspection Companies",
  "h1": "Inventory & Equipment Management Module",
  "desc": "Track NDT equipment, probes, calibration blocks, consumables, and spare parts. Barcode/QR check-in/check-out, location tracking, usage logs, automated low-stock alerts. Built for inspection service providers across NDT, calibration, marine survey, and welding inspection.",
  "intro": "Inspection equipment is expensive, mobile, and tightly regulated. A UT thickness gauge, an Olympus OmniScan, a radiography crawler, or a digital pressure calibrator can each cost $10,000–$80,000. Multiply that across a 20-technician inspection company and you have $500K–$3M of mobile assets that need to be tracked, calibrated, and accounted for on every job. Atlantis NDT ERP's inventory management module replaces the spreadsheet, the lost asset tag, and the equipment-room sign-out clipboard with a single barcode-driven system that knows where every probe, cable, calibration block, and consumable is — at all times.",
  "features": [
    "Asset register with serial numbers, purchase dates, warranty, and depreciation schedule",
    "Barcode / QR code generation and label printing for fast physical tagging",
    "Mobile check-out / check-in with technician + job + project assignment",
    "Geofenced 'asset at site X' status with last-seen GPS coordinate",
    "Calibration certificate attachment per asset with auto-expiry alerts (90/60/30 day)",
    "Consumables tracking: couplant, penetrant, developer, radiography film, magnetic ink",
    "Reorder-point automation with preferred-supplier purchase order generation",
    "Probe library: PA wedges, UT angle beams, ET probes, eddy probes — with frequency, element count, scan pattern, life-cycle hours",
    "Calibration block / reference standard tracking with traceable NIST / ISO 17025 chain",
    "Radioactive source tracking with activity decay, expiry, transport documentation per IAEA TS-R-1",
    "Tool damage & repair workflow with photo evidence and out-of-service flagging",
    "Cost-recovery reporting per client / project for equipment usage chargeback"
  ],
  "useCases": [
    "Multi-site NDT contractor managing 800+ probes across Houston, Dubai, and Mumbai offices",
    "Calibration lab managing 5,000+ customer reference standards under ISO 17025",
    "Marine survey company tracking ROV, dive computer, and gas analyzer fleets across vessels",
    "Welding inspection firm managing CWI portable gauges and macro-etch kits across job sites",
    "Radiography crew tracking Ir-192 / Se-75 source activity, decay, and shipment manifests"
  ],
  "industries": [
    "NDT inspection",
    "Calibration laboratories",
    "Marine survey",
    "Welding inspection",
    "Pipeline integrity",
    "Metrology labs"
  ],
  "integrations": [
    "SAP MM (Materials Management)",
    "Oracle Fusion Inventory",
    "QuickBooks Inventory",
    "Maximo Asset Mgmt",
    "Barcode scanners (Zebra, Honeywell, Datalogic)",
    "ISO 17025 calibration laboratories"
  ],
  "faqs": [
    [
      "How does the system track NDT probe usage and life cycles?",
      "Each probe gets a barcode/QR tag. When a technician scans a probe on check-out the system logs technician, project, asset under test, and start time. On check-in it logs end time + auto-increments scan hours. PAUT wedges and PA probes have manufacturer-recommended life (typically 1,000–3,000 hours); when a probe approaches its limit the system flags it for inspection and the supervisor receives a dashboard alert."
    ],
    [
      "Can it manage radioactive sources for industrial radiography?",
      "Yes — the radioactive source module is built for IAEA TS-R-1 and US NRC 10 CFR 71 compliance. It tracks Ir-192 / Se-75 / Co-60 source serial numbers, current activity (auto-decayed from last measurement), expiry, shipment documentation, daily survey records, and technician dose exposure. Source-handling permits and route plans are stored against the asset with audit-ready PDF export."
    ],
    [
      "Does it integrate with existing CMMS systems like Maximo or SAP PM?",
      "Yes. Two-way integration with IBM Maximo, SAP PM, AspenTech Mtell, Bentley AssetWise, and Hexagon Meridium APM via REST API. Inventory transactions sync as movements; calibration records attach as asset documents; out-of-service flags raise notifications in the parent CMMS."
    ],
    [
      "How are consumables like couplant, penetrant, and film tracked?",
      "Consumables are managed by lot/batch number with quantity-on-hand decremented as technicians log usage on work orders. Reorder points trigger automated purchase requisitions to preferred suppliers. Expiry dates on penetrant fluids, developer, magnetic ink, and radiographic film are tracked and out-of-spec batches are auto-flagged for disposal documentation."
    ],
    [
      "Is the inventory module suitable for ISO 17025 calibration labs?",
      "Yes. The module supports the full traceability chain required by ISO/IEC 17025:2017 §6.4.6 — measurement equipment, reference standards, intermediate checks, environmental conditions, and uncertainty budgets. Customer-owned instruments can be tracked separately from in-house standards with full chain-of-custody from receipt through dispatch."
    ]
  ]
};
export default function ErpModule_inventory_management() { return <ErpModulePage {...data} />; }
