import ErpModulePage from '@/components/ErpModulePage';
const data = {
  "slug": "inspection-scheduling",
  "name": "Inspection Scheduling & Interval Management",
  "title": "Inspection Scheduling Software — API 510/570/653 Interval Manager",
  "h1": "Inspection Scheduling & Interval Management Module",
  "desc": "Automate next-inspection-due calculations per API 510 (pressure vessels), API 570 (piping), API 653 (storage tanks), API 580 RBI, NB-23 NBIC, and client-specific intervals. Never miss an inspection due date again.",
  "intro": "Owner-operators and inspection contractors share one nightmare: discovering that an inspection due date has slipped past — and that nobody noticed. The consequences range from operational risk to regulatory finding to incident liability. The inspection scheduling module replaces the Excel tickler file with a code-aware interval engine that knows API 510, API 570, API 653, ASME B31.1, NB-23 NBIC, and dozens of client-specific written practices natively.",
  "features": [
    "API 510 pressure vessel intervals: external 5-yr, internal half-remaining-life capped at 10-yr, or per RBI",
    "API 570 piping intervals by class: Class 1 (5/10), Class 2 (10/20), Class 3 (10/20+), or per RBI",
    "API 653 tank intervals: external monthly visual + 5-yr formal, internal 10-yr or per RBI",
    "ASME B31.3 process piping inspection intervals with severe cyclic service adjustments",
    "Risk-based inspection (RBI) per API 581 — import RBI assessment, use computed inspection plan",
    "Inspection due forecast: 30 / 60 / 90 / 180 / 365 day windows with criticality ranking",
    "Per-circuit / per-TML scheduling with corrosion-rate based wall-thickness projection",
    "Multi-method scheduling: same asset, different methods (UT, RT, MT, PT, VT) at different intervals",
    "Shutdown / turnaround planning with resource leveling across simultaneous work fronts",
    "Inspection result feedback loop: as-found wall thickness updates corrosion rate updates next due date",
    "Regulatory deadline tracker: PSSR, OSHA PSM, EPA RMP, NRC, state boiler authority",
    "Mobile field deferral workflow with engineering rationale + approval chain"
  ],
  "useCases": [
    "Refinery integrity team scheduling 12,000 piping circuits with API 570 + API 581 RBI",
    "Tank farm operator managing 600 ASTs across 14 terminals with API 653 schedules",
    "Pressure-vessel inspector running an annual external inspection schedule for 1,200 vessels",
    "Pipeline operator with 8,000 miles of regulated pipeline under DOT PHMSA / API 1160",
    "Inspection contractor running multi-client interval-management on behalf of small operators"
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
      "The deferral workflow requires engineering justification — corrosion-rate analysis, RBI re-assessment, or operating-conditions change — and a sign-off from a qualified inspector (API 510/570/653 certified) and the integrity manager. Deferrals are audit-logged with full chain of approval and the new due date is automatically set. Regulatory limits (e.g., NB-23 §3.3.1 maximum extension) are enforced."
    ],
    [
      "Does it integrate with our existing CMMS (Maximo, SAP PM, AspenTech)?",
      "Yes. Bi-directional integration with the major CMMS / EAM platforms. Inspection scheduling can be the master and push work orders into the CMMS, or the CMMS can be master and Atlantis ERP acts as the inspection-specific layer with code-aware scheduling logic. Asset hierarchies, equipment classes, and functional locations sync."
    ],
    [
      "Can it handle API 581 risk-based inspection (RBI) workflows?",
      "Yes. The system imports RBI assessments (POF/COF/risk matrix per API 581 §4 / §5), uses the resulting risk score to drive inspection plan (method, extent, interval), and tracks RBI revalidation triggers (operating condition change, NDE result change, time-since-last-RBI). The RBI dashboard shows risk trend per circuit / equipment."
    ],
    [
      "How are inspection results fed back to update corrosion rates and next-due dates?",
      "When a UT thickness reading is entered on a TML the system retrieves all prior readings on that TML, computes short-term and long-term corrosion rates per API 570 / API 653 methodology, calculates remaining life and remaining strength, and either confirms or shortens the next inspection interval. The new interval is recalculated on every measurement event."
    ],
    [
      "Does it cover non-API codes like ASME B31.3 or NB-23?",
      "Yes. The interval engine includes ASME B31.1 power piping, ASME B31.3 process piping, ASME B31.4 / B31.8 pipelines, NB-23 National Board Inspection Code, EN 13445 European pressure vessel inspection, AS/NZS 3788 Australian standards, and CSA B51 Canadian boiler & pressure vessel code. Client-specific written-practice intervals can override standards-derived defaults."
    ]
  ]
};
export default function ErpModule_inspection_scheduling() { return <ErpModulePage {...data} />; }
