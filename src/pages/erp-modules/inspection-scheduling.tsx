import ErpModulePage from '@/components/ErpModulePage';
const data = {
  "slug": "inspection-scheduling",
  "name": "Inspection Scheduling & Interval Management",
  "title": "Inspection Scheduling Software — API 510/570/653 Due-Date Reminders",
  "h1": "Inspection Scheduling & Interval Management Module",
  "desc": "Track the inspection due dates your inspector sets under API 510 (pressure vessels), API 570 (piping), API 653 (storage tanks), NB-23 NBIC and client-specific programs, with reminders before each falls due. Never miss an inspection due date again.",
  "intro": "Owner-operators and inspection contractors share one nightmare: discovering that an inspection due date has slipped past — and that nobody noticed. The consequences range from operational risk to regulatory finding to incident liability. The inspection scheduling module replaces the Excel tickler file with one register of inspection due dates, set by your inspector under API 510, API 570, API 653, ASME B31.1, NB-23 NBIC or a client-specific written practice, with reminders before each falls due.",
  "features": [
    "API 510 pressure vessel due dates (external, internal, on-stream) entered by the inspector, with reminders before each falls due",
    "API 570 piping due dates by circuit and class, entered by the inspector, with reminders before each falls due",
    "API 653 tank due dates (routine, external, internal) entered by the inspector, with reminders before each falls due",
    "ASME B31.3 process piping due dates, including the severe cyclic service items the inspector flags",
    "Inspection due forecast: 30 / 60 / 90 / 180 / 365 day windows with criticality ranking",
    "Per-circuit / per-TML scheduling with the thickness history beside each due date",
    "Multi-method scheduling: same asset, different methods (UT, RT, MT, PT, VT) at different intervals",
    "Shutdown / turnaround planning with resource leveling across simultaneous work fronts",
    "Inspection result feedback: as-found wall thickness recorded so the inspector can confirm or revise the next due date",
    "Regulatory deadline tracker: PSSR, OSHA PSM, EPA RMP, NRC, state boiler authority",
    "Mobile field deferral workflow with engineering rationale + approval chain"
  ],
  "useCases": [
    "Refinery integrity team scheduling 12,000 piping circuits against the API 570 due dates its inspectors set",
    "Tank farm operator managing 600 ASTs across 14 terminals with API 653 schedules",
    "Pressure-vessel inspector running an annual external inspection schedule for 1,200 vessels",
    "Pipeline operator with 8,000 miles of regulated pipeline under DOT PHMSA / API 1160",
    "Inspection contractor tracking multi-client inspection due dates on behalf of small operators"
  ],
  "industries": [
    "Oil & gas refining",
    "Petrochemical",
    "Pipeline operators",
    "Power generation",
    "Pharmaceutical / chemical plants",
    "Storage terminals"
  ],
  "integrations": [
    "IBM Maximo",
    "SAP PM",
    "Bentley AssetWise",
    "Hexagon Meridium APM",
    "AspenTech Mtell",
    "GE Vernova APM"
  ],
  "faqs": [
    [
      "How does the scheduler handle deferrals or extensions to inspection due dates?",
      "The deferral workflow requires an engineering justification — a corrosion-rate or remaining-life re-assessment by the inspector, or an operating-conditions change — and a sign-off from a qualified inspector (API 510/570/653 certified) and the integrity manager. Deferrals are audit-logged with the full chain of approval, and the new due date the inspector sets is recorded with reminders. Regulatory limits (e.g., NB-23 maximum extensions) are shown to the approvers to check."
    ],
    [
      "Does it integrate with our existing CMMS (Maximo, SAP PM, AspenTech)?",
      "Yes. Bi-directional integration with the major CMMS / EAM platforms. Inspection scheduling can be the master and push work orders into the CMMS, or the CMMS can be master and Atlantis ERP acts as the inspection-specific layer holding due dates, readings and records. Asset hierarchies, equipment classes, and functional locations sync."
    ],
    [
      "How do inspection results feed into the next due date?",
      "When a UT thickness reading is entered on a TML the system shows it beside all prior readings on that TML, so the inspector can calculate the short-term and long-term corrosion rates and remaining life per API 570 / API 653 and confirm or shorten the next inspection date. The ERP records the date the inspector sets and sends reminders before it falls due; it does not calculate intervals itself."
    ],
    [
      "Does it cover non-API codes like ASME B31.3 or NB-23?",
      "Yes. Due dates can be recorded under ASME B31.1 power piping, ASME B31.3 process piping, ASME B31.4 / B31.8 pipelines, NB-23 National Board Inspection Code, EN 13445 European pressure vessel inspection, AS/NZS 3788 Australian standards, CSA B51 Canadian boiler & pressure vessel code, or a client-specific written practice. Each date carries the code or practice it was set under; the dates themselves are set by the inspector."
    ]
  ]
};
export default function ErpModule_inspection_scheduling() { return <ErpModulePage {...data} />; }
