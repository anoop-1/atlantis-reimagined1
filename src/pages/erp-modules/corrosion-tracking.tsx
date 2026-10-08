import ErpModulePage from '@/components/ErpModulePage';
const data = {
  "slug": "corrosion-tracking",
  "name": "Corrosion Tracking",
  "title": "Corrosion Tracking Software — Thickness Records & Trends (API 510/570/653)",
  "h1": "Corrosion Tracking Module",
  "desc": "Thickness readings and trends per TML, damage mechanism records per API 571, and reminders for the inspection due dates your inspector sets under API 510 / 570 / 653. Native support for piping circuits, pressure vessels, storage tanks, heat exchangers, and pipelines.",
  "intro": "Corrosion is the dominant degradation mechanism for ~85% of refinery and petrochemical equipment. Quantifying corrosion rates, projecting remaining life, screening damage mechanisms, and using all of this to set code-based inspection intervals is the heart of any modern integrity program. Atlantis NDT ERP's corrosion module keeps the thickness readings, trends and records that work rests on; the corrosion-rate, remaining-life and interval calculations stay with your inspector.",
  "features": [
    "Per-TML thickness history, with the short-term and long-term corrosion rates the inspector calculates stored alongside",
    "Wall-thickness trend per TML against the t-min and retirement thickness the inspector sets",
    "Damage mechanism records per API 571, as assigned by the integrity engineer",
    "Corrosion-circuit grouping by material + process service + temperature for efficient inspection coverage",
    "Online corrosion monitoring data import from probes (Permasense, Cosasco, ROXAR, Honeywell Smart Pulse)",
    "Damage-mechanism trending: same DM observed across multiple equipment / units / sites?",
    "Process-data context: thickness trend alongside sour-water concentration, NaOH dosing, sulfur loading",
    "Report generation: API 510 / 570 / 653 inspection reports, with the corrosion-rate and remaining-life figures the inspector supplies"
  ],
  "useCases": [
    "Refinery integrity engineer tracking corrosion rates across 12,000 piping circuits",
    "Petrochemical Level III consultant establishing baseline thickness data for a new operator",
    "Storage tank operator tracking floor-corrosion rates across 600 tanks (API 653)",
    "Heat exchanger inspector evaluating tube-bundle corrosion patterns and retubing decisions",
    "Pipeline operator trending corrosion rates under an API 1160 integrity management programme"
  ],
  "industries": [
    "Oil & gas refining",
    "Petrochemical",
    "Storage terminals",
    "Pipeline operators",
    "Power generation",
    "LNG / cryogenic"
  ],
  "integrations": [
    "Permasense corrosion probes",
    "Cosasco / Roxar / Honeywell Smart Pulse",
    "Plant historians (PI, Honeywell PHD, Aspen IP.21)",
    "Hexagon Meridium APM",
    "AspenTech Mtell",
    "GE Vernova APM"
  ],
  "faqs": [
    [
      "Can corrosion rates be computed automatically from UT thickness data?",
      "No. Atlantis ERP stores each UT thickness reading against its TML with the instrument, calibration record and technician, shows the thickness trend, and flags outlier readings for inspector review. The short-term and long-term corrosion rates under API 570 / API 653 are calculated by the inspector and can be recorded against the TML."
    ],
    [
      "Does it import data from online corrosion-monitoring probes?",
      "Yes. Real-time or daily-average data from Permasense WT, Cosasco galvanic probes, Roxar pipe-clamp probes, Honeywell Smart Pulse, and Emerson Plantweb is supported via REST / OPC UA / MQTT. Probe data is stored on the same TML history as off-line UT readings, so probe vs. UT discrepancies are visible side by side."
    ],
    [
      "How are damage mechanisms recorded against equipment?",
      "The integrity engineer assigns the credible API 571 damage mechanisms to each equipment item, considering material (Cr-Mo, austenitic, duplex, etc.), service environment (sour, caustic, amine, hydrofluoric, etc.), temperature window and operating conditions. The ERP records them with the inspection methods and locations the engineer specifies, so each report and due date shows the mechanism it addresses."
    ],
    [
      "Can we run the corrosion module on-premise for confidential data?",
      "Yes. An on-premise deployment option runs the full corrosion-tracking module inside the customer's network with no external connectivity required. Air-gap deployment is supported for nuclear, defense, and security-sensitive customers. Read-only audit access can be granted via VPN or jump-host without exposing the data layer."
    ]
  ]
};
export default function ErpModule_corrosion_tracking() { return <ErpModulePage {...data} />; }
