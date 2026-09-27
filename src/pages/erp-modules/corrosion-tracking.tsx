import ErpModulePage from '@/components/ErpModulePage';
const data = {
  "slug": "corrosion-tracking",
  "name": "Corrosion Tracking",
  "title": "Corrosion Tracking Software — Corrosion Rate & Remaining Life (API 510/570/653)",
  "h1": "Corrosion Tracking Module",
  "desc": "Corrosion rate trending, remaining-life calculation, damage mechanism screening per API 571, and code-based inspection interval support per API 510 / 570 / 653. Native support for piping circuits, pressure vessels, storage tanks, heat exchangers, and pipelines.",
  "intro": "Corrosion is the dominant degradation mechanism for ~85% of refinery and petrochemical equipment. Quantifying corrosion rates, projecting remaining life, screening damage mechanisms, and using all of this to set code-based inspection intervals is the heart of any modern integrity program. Atlantis NDT ERP's corrosion module is built around the API 510 / 570 / 653 / 571 framework that the inspection community uses every day.",
  "features": [
    "Per-TML corrosion rate calculation (short-term and long-term) per API methodology",
    "Wall-thickness projection with t-min, t-required, retirement-date forecasting",
    "Damage mechanism screening per API 571 with susceptibility scoring",
    "Corrosion-circuit grouping by material + process service + temperature for efficient inspection coverage",
    "Online corrosion monitoring data import from probes (Permasense, Cosasco, ROXAR, Honeywell Smart Pulse)",
    "Damage-mechanism trending: same DM observed across multiple equipment / units / sites?",
    "Process-data correlation: corrosion rate vs. sour-water concentration, NaOH dosing, sulfur loading",
    "Engineering deliverable generation: API 510 / 570 / 653 inspection reports, corrosion-rate and remaining-life summaries"
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
      "Yes. When UT thickness readings are entered against a TML the system recomputes short-term corrosion rate (most recent inspection vs. previous) and long-term corrosion rate (most recent vs. baseline). Both rates are stored and the larger absolute value is used for projection per API 570 §7.1.1 / API 653 §6.4. Outlier readings are auto-flagged for inspector review."
    ],
    [
      "Does it import data from online corrosion-monitoring probes?",
      "Yes. Real-time or daily-average data from Permasense WT, Cosasco galvanic probes, Roxar pipe-clamp probes, Honeywell Smart Pulse, and Emerson Plantweb is supported via REST / OPC UA / MQTT. Probe data feeds the same corrosion rate engine as off-line UT readings. Correlation analysis tools identify probe vs. UT discrepancies."
    ],
    [
      "How are damage mechanisms screened against equipment?",
      "API 571 DM screening logic uses material (Cr-Mo, austenitic, duplex, etc.), service environment (sour, caustic, amine, hydrofluoric, etc.), temperature window, and operating conditions to identify which of the 172 DMs apply to each equipment item. The output is a DM susceptibility report with recommended inspection methods, locations, and intervals."
    ],
    [
      "Can we run the corrosion module on-premise for confidential data?",
      "Yes. An on-premise deployment option runs the full corrosion-tracking module inside the customer's network with no external connectivity required. Air-gap deployment is supported for nuclear, defense, and security-sensitive customers. Read-only audit access can be granted via VPN or jump-host without exposing the data layer."
    ]
  ]
};
export default function ErpModule_corrosion_tracking() { return <ErpModulePage {...data} />; }
