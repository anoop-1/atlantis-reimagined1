/**
 * ERP module x industry x job matrix. 2026-09-02.
 * ─────────────────────────────────────────────────────────────────────────────
 * WHY THIS AXIS AND NOT module x city
 *
 * The site already ran the city experiment and the result is unambiguous: 122
 * ERP city pages, 64 of them ranking top-10, producing ONE click in 90 days.
 * Ranking was never the problem — nobody searches "NDT ERP Houston". Across all
 * 1,020 ERP pages the family returns 0.079 clicks per page per quarter.
 *
 * What the 90-day US data does show demand for is the software's JOB:
 *   ndt inspection software        217 impressions  position 23
 *   ndt reporting software         156 impressions  position 14
 *   buy-side shortlist queries     742 US impressions, zero clicks
 *
 * So the axis here is module x industry x job-to-be-done. Each page answers a
 * procurement question a named buyer actually asks, in the vocabulary they ask
 * it in, for an industry whose constraints make the answer different.
 *
 * The city axis is deliberately absent. Owner decision, 2026-09-02, taken
 * against the numbers above.
 *
 * MODULES are the real capability boundaries of an inspection management
 * system, not marketing feature names. INDUSTRIES are North American verticals
 * with genuine fixed-equipment inspection spend. JOBS are the situations that
 * make a buyer go looking in the first place — each one gives the same
 * module/industry pair a materially different page rather than a reworded one.
 */

/** Capability boundaries. Each is a thing a buyer can evaluate separately. */
export const MODULES = [
  { key: 'cml-tml-registry', name: 'CML and TML registry', gist: 'condition and thickness monitoring locations, identified, located and re-findable across campaigns' },
  { key: 'thickness-history', name: 'Thickness reading history', gist: 'every reading retained with date, technician, instrument and method, including exclusions and why' },
  { key: 'corrosion-rate-calculation', name: 'Corrosion rate calculation', gist: 'short-term and long-term rates computed separately, the more conservative governing' },
  { key: 'remaining-life-intervals', name: 'Remaining life and interval engine', gist: 'next inspection date derived per API 510, 570 or 653 rather than typed in by a planner' },
  { key: 'inspection-scheduling', name: 'Inspection scheduling', gist: 'due dates, crews, access windows and outage dependencies on one calendar' },
  { key: 'deficiency-tracking', name: 'Deficiency and recommendation tracking', gist: 'findings raised, assigned, aged and closed with evidence' },
  { key: 'inspection-backlog-deferral', name: 'Backlog and deferral control', gist: 'overdue work aged by criticality, with the engineering basis for each deferral recorded' },
  { key: 'technician-certification', name: 'Technician certification tracking', gist: 'method, level, expiry, vision test and practical currency per the written practice' },
  { key: 'written-practice-control', name: 'Written practice control', gist: 'the SNT-TC-1A or CP-189 practice under version control with approval history' },
  { key: 'procedure-document-control', name: 'Procedure and document control', gist: 'approved NDT procedures, revisions and the Level III approval record' },
  { key: 'equipment-calibration', name: 'Equipment calibration management', gist: 'instrument, block and probe calibration status, due dates and traceability' },
  { key: 'report-generation', name: 'Report generation', gist: 'field data to a client-acceptable, code-referenced report without re-typing' },
  { key: 'mobile-offline-capture', name: 'Mobile and offline data capture', gist: 'readings taken in the field with no signal and reconciled without loss' },
  { key: 'weld-map-and-log', name: 'Weld map and weld log', gist: 'joints, welders, procedures, examinations and repair history tied to the drawing' },
  { key: 'ncr-management', name: 'NCR and nonconformance management', gist: 'nonconformances raised, dispositioned and closed against the governing code' },
  { key: 'audit-trail-esignature', name: 'Audit trail and e-signature', gist: 'who changed what and when, and who approved it, reproducible years later' },
  { key: 'rbi-data-feed', name: 'RBI data feed', gist: 'damage mechanisms and rates reaching an API 580/581 assessment without re-keying' },
  { key: 'damage-mechanism-register', name: 'Damage mechanism register', gist: 'credible mechanisms per circuit from API RP 571, driving technique selection' },
  { key: 'turnaround-planning', name: 'Turnaround scope planning', gist: 'inspection scope, access, scaffolding and crew loading built before the window opens' },
  { key: 'crew-dispatch', name: 'Crew scheduling and dispatch', gist: 'certified people matched to scope, site and access requirement' },
  { key: 'job-costing', name: 'Job costing and profitability', gist: 'cost and margin per job, per crew and per client, visible while the work is live' },
  { key: 'quoting-estimating', name: 'Quoting and estimating', gist: 'scope to priced proposal using historic productivity rather than guesswork' },
  { key: 'client-portal', name: 'Client portal', gist: 'the customer sees status and reports without an email chain' },
  { key: 'asset-register', name: 'Asset register and hierarchy', gist: 'equipment, circuits and components in the relationship the codes assume' },
  { key: 'drawing-isometric-control', name: 'Drawing and isometric control', gist: 'the current revision of the drawing the inspection was actually performed against' },
  { key: 'cmms-integration', name: 'CMMS and ERP integration', gist: 'inspection findings raising work orders in SAP PM, Maximo or equivalent' },
  { key: 'digital-twin-overlay', name: 'Digital twin overlay', gist: 'thickness and findings shown on the asset geometry rather than in a table' },
  { key: 'ffs-data-preparation', name: 'Fitness-for-service data preparation', gist: 'the profile and extent an API 579 assessment needs, captured at inspection time' },
  { key: 'tank-inspection-api-653', name: 'Tank inspection module', gist: 'API 653 external, internal, floor scan and settlement history per tank' },
  { key: 'vessel-inspection-api-510', name: 'Pressure vessel module', gist: 'API 510 internal, on-stream and external inspection with MAWP basis retained' },
  { key: 'piping-circuit-api-570', name: 'Piping circuit module', gist: 'API 570 circuits, classes, injection points and dead legs tracked separately' },
  { key: 'coating-cp-inspection', name: 'Coating and cathodic protection', gist: 'coating condition and CP survey results alongside metal loss' },
  { key: 'radiography-source-control', name: 'Radiography source and RSO control', gist: 'source inventory, leak tests, surveys and dosimetry records' },
  { key: 'consumables-inventory', name: 'Consumables and inventory', gist: 'film, couplant, penetrant and media with batch traceability where the code requires it' },
  { key: 'subcontractor-management', name: 'Subcontractor management', gist: 'contractor qualification, insurance, certification currency and data acceptance' },
  { key: 'competency-matrix', name: 'Training and competency matrix', gist: 'who is qualified for what, and what expires when' },
  { key: 'kpi-dashboards', name: 'KPI and management reporting', gist: 'backlog, schedule compliance, first-time-right and utilisation in one view' },
  { key: 'multi-site-rollout', name: 'Multi-site and enterprise rollout', gist: 'one data model across sites that each do things slightly differently' },
];

/** North American verticals with genuine fixed-equipment inspection spend. */
export const INDUSTRIES = [
  { key: 'refining', name: 'refining', context: 'US and Canadian refineries; PSM-covered processes, turnaround-driven, API 510/570/653 throughout' },
  { key: 'petrochemical', name: 'petrochemical', context: 'olefins, polyethylene and derivatives on the Gulf Coast and in Alberta' },
  { key: 'chemical-manufacturing', name: 'chemical manufacturing', context: 'batch and continuous chemical plants, often smaller equipment counts but tighter product purity constraints' },
  { key: 'midstream-pipeline', name: 'midstream and pipeline', context: 'gathering, transmission and terminals under 49 CFR 192/195 and state regulators' },
  { key: 'lng', name: 'LNG', context: 'liquefaction and regasification; cryogenic service, PHMSA facility integrity' },
  { key: 'upstream-offshore', name: 'upstream and offshore', context: 'platforms and subsea-tied facilities in the Gulf of Mexico; BSEE oversight' },
  { key: 'oil-sands', name: 'oil sands and heavy oil', context: 'Alberta upgraders and SAGD facilities; erosion and high-temperature service' },
  { key: 'power-generation', name: 'gas and combined-cycle power', context: 'HRSGs, steam headers and balance of plant on outage cycles' },
  { key: 'nuclear-power', name: 'nuclear power', context: 'ASME Section XI in-service inspection under NRC 10 CFR 50 with heavy documentation burden' },
  { key: 'pulp-paper', name: 'pulp and paper', context: 'recovery boilers, digesters and black liquor service; aggressive corrosion regimes' },
  { key: 'mining-minerals', name: 'mining and minerals', context: 'fixed plant, conveyors, crushers and process vessels in remote locations' },
  { key: 'steel-metals', name: 'steel and primary metals', context: 'furnaces, ducting and heavy structural steel; high-temperature and abrasion' },
  { key: 'aerospace', name: 'aerospace manufacturing and MRO', context: 'NAS 410 personnel qualification, tight traceability, small critical parts' },
  { key: 'marine-shipyard', name: 'marine and shipyard', context: 'class society survey cycles with IACS members; hull and machinery scope' },
  { key: 'fabrication-shops', name: 'fabrication shops', context: 'ASME Section VIII and IX new construction, weld-driven, per-project rather than per-asset' },
  { key: 'pressure-vessel-manufacturers', name: 'pressure vessel manufacturers', context: 'ASME U-stamp production with Authorized Inspector involvement' },
  { key: 'tank-terminals', name: 'tank farms and terminals', context: 'API 653 populations, SPCC obligations, barge and pipeline transfer' },
  { key: 'water-wastewater', name: 'water and wastewater', context: 'municipal treatment assets, digesters and buried infrastructure' },
  { key: 'food-beverage', name: 'food and beverage processing', context: 'sanitary process equipment, hygienic weld acceptance, frequent shutdowns' },
  { key: 'pharmaceutical', name: 'pharmaceutical manufacturing', context: 'validated systems, change control and documentation discipline above the norm' },
  { key: 'fertilizer-ammonia', name: 'fertiliser and ammonia', context: 'ammonia converters, urea reactors, nitric acid service; severe damage mechanisms' },
  { key: 'cement-lime', name: 'cement and lime', context: 'kilns, preheaters and ducting; abrasion and thermal cycling' },
  { key: 'rail-transport', name: 'rail and transport', context: 'rolling stock, tank cars and structural inspection on regulated cycles' },
  { key: 'infrastructure-bridges', name: 'bridges and infrastructure', context: 'fracture-critical members, AWS D1.5, owner agencies with their own manuals' },
  { key: 'ndt-service-providers', name: 'NDT service providers', context: 'the inspection contractors themselves — multi-client, multi-site, certification-heavy, margin-sensitive' },
];

/**
 * The situation that sends a buyer looking. This is what makes two pages about
 * the same module genuinely different rather than reworded — the constraint,
 * the failure being fixed and the evaluation criteria all change.
 */
export const JOBS = [
  { key: 'outgrowing-spreadsheets', name: 'outgrowing spreadsheets', gist: 'the workbook is now edited by more than one person and nobody can reproduce a calculation' },
  { key: 'audit-preparation', name: 'preparing for an audit', gist: 'a client, certifying body or regulator is coming and the record has to hold together' },
  { key: 'contractor-data-quality', name: 'contractor data quality', gist: 'results arrive from third parties in inconsistent form and have to be trusted' },
  { key: 'turnaround-readiness', name: 'turnaround readiness', gist: 'scope, access and crews must be settled before a fixed window opens' },
  { key: 'multi-site-standardisation', name: 'standardising across sites', gist: 'each location does the same thing differently and the numbers do not roll up' },
  { key: 'legacy-migration', name: 'migrating off a legacy system', gist: 'years of history in a format the new system was not designed for' },
];
