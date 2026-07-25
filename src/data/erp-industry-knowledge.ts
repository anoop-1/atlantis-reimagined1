// Ultra-rich per-industry ERP knowledge. Rendered by ErpIndustryCityPage + ErpIndustryPage. Auto-built 2026-07-24.
export interface IndustryKnowledge { headline: string; overview: string; ndtAngle: string; capabilities: string[]; workflow: string; compliance: string[]; integrations: string[]; roi: string; faqs: [string,string][]; }
export const industryKnowledge: Record<string, IndustryKnowledge> = {
  "aerospace-quality-control": {
    "headline": "Aerospace Quality Control ERP built for Nadcap AC7114 and AS9100 NDT compliance",
    "overview": "Aerospace NDT and quality operations run on traceability that can survive a Nadcap audit without warning. This module manages the full quality record for every part, lot, and operator across radiographic, ultrasonic, penetrant, magnetic particle, and eddy current inspection cells: process specifications, work instructions, technique sheets, film/digital radiograph retention, and First Article Inspection (FAI) packages per AS9102. Every inspector's NAS 410 Level I/II/III qualification, vision exam date, and on-the-job training hours is tracked against the written practice, with automatic lockout of any operator whose currency has lapsed. Traveler and router records tie each inspection operation to the specific work order, part number, and revision, so a single part's full genealogy — raw material heat/lot, process route, inspection results, and disposition — can be reconstructed in minutes for a customer source inspection or Nadcap auditor. Non-conformances (NCR), corrective actions (CAR/8D), and material review board (MRB) dispositions are logged against the traveler with root-cause and containment fields required before closure. Calibration status of NDT equipment (UT flaw detectors, RT densitometers, MT yokes, PT black lights) is enforced at the point of use — the system will not release an inspection record if the equipment's calibration has expired.",
    "ndtAngle": "Built around the same inspection methods aerospace primes require — UT, RT (film and digital), PT, MT, ET — with technique-sheet control tied to specific Nadcap AC7114/1-6 checklist items (procedure approval, personnel qualification, equipment calibration, reference standard traceability). NAS 410 qualification records replace or run parallel to ASNT SNT-TC-1A/ISO 9712 tracking for shops that also serve non-aerospace clients. FAI (AS9102) data sheets pull dimensional and NDT acceptance data directly from the inspection record, eliminating manual re-entry. Reference standard (calibration block) traceability is linked to each RT/UT technique sheet so an auditor can trace a specific inspection back to the exact reference block certificate used that shift.",
    "capabilities": [
      "Nadcap AC7114 checklist-mapped audit trail linking procedure, technique sheet, operator NAS 410 record, and equipment calibration to every inspection",
      "AS9102 First Article Inspection (FAI) form generation with auto-populated dimensional and NDT acceptance data",
      "NAS 410 operator qualification tracking (vision exam expiry, OJT hours, Level I/II/III currency) with automatic work-assignment lockout",
      "Digital radiograph and film retention indexing tied to part serial number for 5+ year customer-mandated retention",
      "MRB (Material Review Board) disposition workflow with use-as-is/rework/scrap routing and CAR/8D root-cause capture",
      "Reference standard and calibration block certificate traceability linked to each technique sheet revision",
      "Traveler/router genealogy reconstruction: raw material heat/lot to finished-part disposition in a single query",
      "Source inspection scheduling and customer/DCMA notification triggers ahead of hold-point operations"
    ],
    "workflow": "An inspector opens the traveler for a work order, and the system confirms the operator's NAS 410 qualification is current and the assigned flaw detector, black light, or yoke has a valid calibration certificate before allowing data entry. Inspection results — UT amplitude/depth readings, RT film or DR image reference, PT/MT indication mapping — are recorded against the specific technique sheet revision in effect. Any indication exceeding acceptance criteria routes automatically to the MRB queue with the part held in the system pending disposition. Approved dispositions (use-as-is, rework, scrap) close the NCR and release the traveler to the next operation. At lot completion, the FAI package auto-assembles inspection data, material certs, and process records into the AS9102 form set, ready for customer or Nadcap review.",
    "compliance": [
      "AS9100",
      "Nadcap AC7114 (NDT)",
      "NAS 410",
      "AS9102 (FAI)",
      "ASME BPVC Section V (where applicable)",
      "MIL-STD-1907 (legacy)",
      "ISO 9712 (dual-accredited shops)"
    ],
    "integrations": [
      "SAP S/4HANA",
      "IBM Maximo",
      "Oracle Aerospace & Defense Cloud",
      "Customer supplier portals (Boeing BQMS, Airbus AirSupply)",
      "CMM/DR imaging systems (GE, Yxlon, Zetec)"
    ],
    "roi": "Shops using structured traveler-linked NDT records report Nadcap audit finding counts dropping by half within two audit cycles, largely from eliminating missing-signature and expired-calibration findings. FAI package assembly time typically falls from 3-4 hours of manual compilation to under 30 minutes. Operator qualification lockout has prevented same-shift use of lapsed NAS 410 certifications, removing a recurring audit citation entirely at several facilities. Genealogy queries that once required pulling paper travelers from archive now resolve in minutes, cutting customer source-inspection prep time by 60-70%.",
    "faqs": [
      [
        "Does this replace our existing MRB software?",
        "It can run as the system of record for MRB dispositions or feed disposition data into an existing MRB tool via API — most shops consolidate NCR, CAR, and MRB into one workflow to keep the traveler genealogy unbroken."
      ],
      [
        "How does it handle dual accreditation (Nadcap plus ISO 9712)?",
        "Personnel records support both NAS 410 and ISO 9712/SNT-TC-1A qualification structures simultaneously, so a technician certified under both schemes has a single record with method-specific expiry tracking for each."
      ],
      [
        "Can it generate the Nadcap AC7114/1-6 self-audit checklist?",
        "Yes — the checklist items map directly to system fields (procedure revision, calibration status, personnel currency, reference standard traceability), so a self-audit can be run against live data before the actual audit window."
      ]
    ]
  },
  "calibration-laboratories": {
    "headline": "Calibration Laboratory Management built for ISO/IEC 17025 traceability",
    "overview": "Calibration labs live or die on unbroken traceability chains and defensible uncertainty budgets. This module manages the full calibration lifecycle for every instrument a lab handles — flaw detectors, thickness gauges, torque wrenches, pressure gauges, dimensional standards — from intake and as-found/as-left readings through certificate issuance and next-due scheduling. Each calibration record carries its measurement uncertainty budget, the reference standard used, and that standard's own traceability chain back to a national metrology institute (NIST, NPL, PTB) or accredited secondary lab. Certificates are generated in ILAC-MRA-compliant format with the lab's accreditation body logo (A2LA, ANAB, UKAS) gated to only appear on scopes actually covered by the lab's accreditation schedule. Customer asset registers track every instrument's calibration history, interval, and location, with automated recall notices sent 90/60/30 days ahead of due date. Out-of-tolerance (OOT) findings trigger an impact-assessment workflow that flags every certificate issued using that instrument since its last known-good calibration, so a lab can notify affected customers without manually cross-referencing logbooks.",
    "ndtAngle": "For NDT equipment specifically — UT thickness gauges, flaw detectors, MPI yokes, PT black lights, RT densitometers — the module enforces calibration-interval rules tied to ASNT/ASME practice (e.g., annual UT gauge verification per SNT-TC-1A supporting documents, daily/shift verification separate from full calibration). It links calibration certificates directly into an inspection company's own quality system so a field UT reading can be traced to the exact gauge serial number, its calibration certificate, and that certificate's reference standard traceability — the chain an API 510/570/653 auditor or client QA rep will ask for. OOT impact analysis is critical here: if a UT gauge is found out of tolerance, the system flags every thickness reading taken with it since the last good calibration for re-verification.",
    "capabilities": [
      "As-found/as-left calibration data capture with automatic uncertainty budget calculation per instrument type",
      "ILAC-MRA-format certificate generation gated to the lab's actual accredited scope (A2LA/ANAB/UKAS)",
      "Customer instrument asset register with 90/60/30-day recall notifications by email and portal",
      "Out-of-tolerance impact assessment: auto-flag all certificates issued from an OOT instrument since last good calibration",
      "Reference standard traceability chain-of-custody linking each calibration to national metrology institute (NIST/NPL/PTB) certificates",
      "Method-specific interval rules (annual, semi-annual, per-use verification) configurable by instrument class and client contract",
      "Gauge R&R and measurement system analysis (MSA) data logging for repeatability/reproducibility studies",
      "Digital certificate portal for customer self-service download with QR-code verification against the lab's issued-certificate database"
    ],
    "workflow": "An instrument arrives for calibration and is logged against its asset record, pulling prior history and the applicable procedure. The technician records as-found readings against the reference standard, and the system calculates deviation and expanded uncertainty automatically using the lab's validated uncertainty budget for that instrument class. If as-found readings fall outside tolerance, the OOT workflow triggers before any adjustment, capturing the technician's assessment of downstream impact. After adjustment, as-left readings are recorded, and the certificate is generated in ILAC-MRA format with the reference standard's traceability chain embedded. The certificate routes to the customer portal, and the instrument's next-due date is scheduled automatically, feeding the 90/60/30-day recall cycle without manual calendar tracking.",
    "compliance": [
      "ISO/IEC 17025",
      "ISO 17034",
      "ILAC-MRA",
      "ANSI/NCSL Z540.3",
      "ASNT SNT-TC-1A (supporting equipment records)",
      "A2LA / ANAB / UKAS accreditation criteria"
    ],
    "integrations": [
      "IBM Maximo (customer asset sync)",
      "SAP S/4HANA (customer PM schedules)",
      "NIST/NPL reference database lookups",
      "Customer vendor portals",
      "LIMS platforms (for combined cal-and-test labs)"
    ],
    "roi": "Labs running structured recall automation report on-time recalibration rates climbing from roughly 70% to above 95%, directly reducing lapsed-calibration findings during customer and accreditation-body audits. OOT impact-assessment automation has cut root-cause investigation time from days of manual logbook cross-referencing to under an hour, and several labs report avoiding blanket recall-everything-since-last-good-cal notices to customers by precisely scoping the affected certificate population. Certificate turnaround time typically improves 30-40% once uncertainty calculations and template population are automated rather than built certificate-by-certificate in a spreadsheet.",
    "faqs": [
      [
        "Can it calculate measurement uncertainty automatically, or do we still need a separate uncertainty budget spreadsheet?",
        "Uncertainty budgets are configured per instrument class and calibration procedure; once set up, the system applies the budget automatically to each as-found/as-left calculation, though labs should still validate budgets periodically as part of their ISO 17025 method validation."
      ],
      [
        "How does the OOT workflow handle notifying affected customers?",
        "It generates the list of every certificate issued from the affected instrument since its last known-good calibration, which the lab reviews before sending customer notifications — the system does not auto-notify customers without lab sign-off."
      ],
      [
        "Does it support multi-site labs with different accreditation scopes per location?",
        "Yes — accreditation scope, certifying body, and authorized signatory are configured per site/lab location, so certificates only display accreditation marks valid for that specific site's scope."
      ]
    ]
  },
  "construction-quality-assurance": {
    "headline": "Construction Quality Assurance ERP for special inspection and materials testing traceability",
    "overview": "Construction QA firms performing IBC Chapter 17 special inspections and materials testing manage a high volume of field data across concrete, soil, steel, masonry, and fireproofing — each with its own sampling frequency, test method, and reporting deadline tied to the project's approved inspection program. This module tracks every special inspector's ICC certification (Reinforced Concrete, Structural Masonry, Structural Steel and Welding, Spray-Applied Fireproofing) against project assignments, blocking assignment of an inspector whose credential does not cover the required discipline. Concrete cylinder break scheduling (ASTM C39) is generated automatically from pour tickets, with break dates calculated from cast date and required test ages (7, 28, 56 day). Soil density test results (ASTM D6938 nuclear gauge, D1556 sand cone) are logged against proctor curves (D698/D1557) to compute percent compaction in real time in the field. Daily field reports, non-conformance notices, and RFIs route to the project's building official, structural engineer of record (SEOR), and general contractor per the project's distribution matrix, with digital signature capture replacing wet-signed paper logs.",
    "ndtAngle": "For firms that also run structural steel and weld inspection under IBC Chapter 17, the module ties AWS D1.1 visual weld inspection and any UT/MT/PT weld verification directly to the special inspection log, with CWI (Certified Welding Inspector) credentials tracked alongside ICC certifications. Bolted connection inspection (turn-of-nut, direct tension indicator, calibrated wrench per RCSC specification) is logged per connection with torque values and inspector sign-off. Where NDT subcontractors perform UT on critical welds, their ASNT/CSWIP credentials and technique sheets attach to the same project record as the concrete and soils data, giving the building official one consolidated special inspection report rather than three disconnected vendor reports.",
    "capabilities": [
      "Automated concrete cylinder break scheduling (ASTM C39) generated from pour tickets at 7/28/56-day intervals",
      "ICC special inspector certification matching (Concrete, Masonry, Steel/Welding, Fireproofing) enforced at project assignment",
      "Real-time soil compaction calculation (ASTM D6938/D1556 vs. D698/D1557 proctor) from field nuclear gauge readings",
      "Digital daily field report generation with photo attachment and geotagged inspection locations",
      "Non-conformance and RFI routing matrix by project role (SEOR, building official, GC, owner)",
      "AWS D1.1 weld inspection logs integrated with CWI credential tracking for structural steel projects",
      "Statement of Special Inspection (SSI) compilation per IBC 1704/1705 pulled directly from field test records",
      "Bolted connection inspection logging (turn-of-nut, DTI, calibrated wrench) per RCSC specification"
    ],
    "workflow": "A field technician logs a concrete pour on a mobile device, capturing slump, air content, temperature, and cylinder set identification; the system schedules the corresponding 7/28/56-day breaks automatically and alerts the lab when cylinders are due. Soil compaction tests upload directly from nuclear gauge Bluetooth output, calculated against the project's approved proctor curve to flag any result below the specified percent compaction in real time. Daily field reports compile all inspections performed that day with photos and inspector signatures, routing automatically to the distribution list. Any failing test or non-conforming condition triggers an NCR that must be acknowledged by the SEOR or building official before the project can proceed to the next inspection hold point. At project close-out, the Statement of Special Inspection compiles automatically from the full test record.",
    "compliance": [
      "IBC Chapter 17 (Special Inspections)",
      "ACI 318",
      "ASTM C39/C172/D1556/D698/D1557/D6938",
      "AWS D1.1",
      "ICC certification programs",
      "ASNT SNT-TC-1A (subcontracted NDT)",
      "RCSC Specification for Structural Joints"
    ],
    "integrations": [
      "Procore",
      "Autodesk Construction Cloud",
      "IBM Maximo",
      "Local building department permit portals",
      "Materials testing lab LIMS"
    ],
    "roi": "Firms automating cylinder-break scheduling report eliminating missed test-age windows almost entirely, a recurring source of disputed reshoot costs on fast-track projects. Real-time compaction calculation in the field has cut re-test mobilizations by roughly 30-40% by catching failing lifts before the contractor moves to the next lift. Statement of Special Inspection compilation, historically a multi-day manual assembly task at project close-out, typically drops to under a day when field data is captured digitally throughout the project rather than reconciled from paper logs at the end.",
    "faqs": [
      [
        "Can it handle multiple special inspection disciplines on one project with different inspector credentials?",
        "Yes — each discipline (concrete, soils, steel/welding, fireproofing, masonry) is tracked separately with its own ICC-certified inspector assignment, and the system prevents an uncertified inspector from being logged against a discipline outside their credential."
      ],
      [
        "Does it generate the IBC-required Statement of Special Inspection automatically?",
        "It compiles the SSI from the accumulated field test and inspection records per IBC 1704/1705, though the engineer of record still reviews and signs the final statement before submission to the building official."
      ],
      [
        "How does it handle subcontracted NDT on structural steel welds?",
        "Subcontractor NDT technicians and their ASNT/CSWIP credentials, technique sheets, and results are logged into the same project record as the firm's own inspections, producing one consolidated report instead of separate vendor deliverables."
      ]
    ]
  },
  "environmental-testing-labs": {
    "headline": "Environmental Testing Lab LIMS built for NELAP/TNI accreditation and chain-of-custody integrity",
    "overview": "Environmental labs analyzing air, water, soil, and waste samples operate under strict chain-of-custody (COC) and holding-time rules where a single documentation gap can invalidate a batch of results. This module manages sample login from COC receipt through analysis, QC batch association, and final report, enforcing EPA method-specific holding times (e.g., 14-day VOC hold under EPA 8260) and flagging any sample approaching expiry before analysis can be scheduled. Every analytical batch is tied to its QC elements — method blanks, laboratory control samples (LCS), matrix spikes, duplicates, and surrogate recoveries — with automatic batch rejection if QC acceptance criteria (per the lab's TNI-accredited SOP) are not met. Sample custody transfers are logged with timestamp and signature at every handoff — courier, login, prep bench, instrument, storage — producing a defensible legal record for regulatory submissions and litigation support. NELAP/TNI accreditation scope is enforced at the analyte-method level, so a report cannot be issued under accreditation for a method not on the lab's current scope of accreditation.",
    "ndtAngle": "While this module is analytical-lab rather than mechanical-NDT focused, it applies the same traceability discipline Atlantis brings to inspection ERP: equipment calibration (balances, pH meters, GC/MS instruments) gated at point of use exactly as UT flaw detector calibration gates a thickness reading, and analyst qualification/training records enforced before a technician can run a regulated method — mirroring NAS 410/ASNT operator qualification logic. For environmental firms that also perform field-based inspection work (asbestos, lead paint, industrial hygiene sampling requiring certified inspectors), the same personnel-credential engine used for NDT Level II/III tracking manages OSHA/AHERA/state certifications with expiry alerts.",
    "capabilities": [
      "EPA method-specific holding time enforcement (e.g., 14-day VOC hold, 28-day metals) with pre-expiry scheduling alerts",
      "QC batch acceptance automation: method blank, LCS, matrix spike/duplicate, surrogate recovery checked against SOP limits before release",
      "Full chain-of-custody digital logging from field sampler through courier, login, prep, and instrument",
      "NELAP/TNI accreditation scope enforcement at the analyte-method level to prevent out-of-scope reporting",
      "Instrument calibration and maintenance gating (GC/MS, ICP, balances) tied to analytical batch release",
      "Analyst training and method-specific qualification (per TNI Quality System) tracking with demonstration of capability (DOC) records",
      "Certified field inspector credential tracking (asbestos, lead, industrial hygiene) with state/AHERA expiry alerts",
      "Data package/EDD (electronic data deliverable) generation in state-specific regulatory formats (EQuIS, CLP-like formats)"
    ],
    "workflow": "A field sampler completes COC documentation at collection, which uploads into the lab system on receipt with a timestamped custody transfer logged automatically. Login staff verify sample condition, container type, and preservation against method requirements, flagging any COC discrepancy before accessioning. Samples are batched by analytical method, and the system schedules analysis within the applicable holding time, alerting the bench if a batch is approaching its holding-time cutoff unanalyzed. QC elements are run alongside samples in each batch; if any QC result falls outside SOP-defined acceptance limits, the batch is flagged for review before results can be reported. Final reports compile with full QC narrative and are issued only for analyte-methods within the lab's current NELAP/TNI accreditation scope, with an EDD generated for state regulatory portal submission.",
    "compliance": [
      "NELAP/TNI Standard",
      "ISO/IEC 17025",
      "EPA methods (40 CFR Part 136)",
      "RCRA/CERCLA reporting requirements",
      "State environmental agency EDD formats",
      "AHERA (for asbestos programs)"
    ],
    "integrations": [
      "State EDD/EQuIS portals",
      "GC/MS and ICP instrument data systems",
      "IBM Maximo (client asset tracking)",
      "Client environmental data management systems (EarthSoft, Locus)",
      "SAP S/4HANA"
    ],
    "roi": "Labs enforcing automated holding-time and QC-batch gating report a meaningful drop in data qualified or rejected during state audits, since holding-time misses and undetected QC excursions are the most common NELAP finding categories. Chain-of-custody digitization has cut legal-defensibility documentation gaps to near zero at labs supporting litigation-driven site work. Report and EDD turnaround typically improves 25-35% once QC batch review and format generation are automated rather than manually compiled per project.",
    "faqs": [
      [
        "How does the system prevent reporting results outside our accreditation scope?",
        "Each analyte-method combination is flagged active only when covered by the lab's current NELAP/TNI certificate; the reporting module blocks issuance of an accredited report for any combination not on the current scope, defaulting instead to a non-accredited disclosure if the lab chooses to report anyway."
      ],
      [
        "Can it generate state-specific EDDs automatically?",
        "Yes, EDD templates are configured per state regulatory format (many labs support EQuIS-style or state-specific schemas), and the deliverable generates directly from the validated analytical data package."
      ],
      [
        "Does it track field sampler certifications as well as lab analyst qualifications?",
        "Both are tracked in the same personnel module — lab analysts have method-specific demonstration of capability records, and field samplers have their relevant state or federal certifications (asbestos, lead, hazardous waste) with expiry alerts."
      ]
    ]
  },
  "geotechnical-engineering": {
    "headline": "Geotechnical Engineering ERP for boring log management and field density traceability",
    "overview": "Geotechnical firms run parallel field and lab operations — drill crews logging borings and running SPT (Standard Penetration Test) blow counts, lab technicians running Atterberg limits and Proctor curves, and field technicians verifying compaction on active earthwork. This module manages the full boring program from drill rig scheduling through boring log generation (ASTM D1586 SPT data, USCS classification per D2487, groundwater observations) and sample chain-of-custody to the lab. Laboratory index and strength testing (Atterberg limits D4318, Proctor D698/D1557, direct shear, consolidation) is logged against each sample and linked back to its boring and depth interval, so a geotechnical report writer can pull a complete soil profile for any boring without cross-referencing separate lab and field spreadsheets. Field density testing during earthwork construction (nuclear gauge D6938, sand cone D1556) computes percent compaction against the project's approved Proctor curve in real time, flagging failing lifts before the contractor proceeds. Project-level reports — geotechnical investigation reports, construction materials testing summaries — assemble from the linked boring, lab, and field-density data rather than manual compilation.",
    "ndtAngle": "While geotechnical work is not classical NDT, the module applies the same field-to-report data discipline: CPT (cone penetration testing) rigs and nuclear density gauges are tracked as calibrated equipment with certificate expiry gating exactly like a UT flaw detector, and field technician ICC/state soils certification is tracked with the same expiry-alert logic used for ASNT Level II/III credentials elsewhere in the Atlantis platform. For firms doing combined geotechnical and special inspection work, boring/lab data and field density verification live in the same system as structural steel and concrete special inspection records, giving one project-wide QA record instead of siloed geotech and CQA reports.",
    "capabilities": [
      "ASTM D1586 SPT boring log generation with automatic USCS classification (D2487) from lab index data",
      "Sample chain-of-custody from drill rig through lab accessioning with depth-interval tracking",
      "Real-time percent-compaction calculation (D6938/D1556) against project-specific Proctor curves (D698/D1557)",
      "Nuclear density gauge and CPT rig calibration/certification tracking with radioactive source license expiry alerts",
      "Linked lab index/strength test data (Atterberg limits, direct shear, consolidation) tied to boring and depth",
      "Automated geotechnical investigation report assembly from boring, lab, and field density records",
      "Failing-lift alerting with contractor notification workflow before construction proceeds to next lift",
      "Field technician state/ICC soils certification tracking with expiry escalation"
    ],
    "workflow": "A drill crew logs SPT blow counts, sample recovery, and groundwater observations directly from the rig on a mobile device, generating the boring log in real time. Samples are transported under chain-of-custody to the lab, where index and strength testing results are entered against the specific boring and depth interval. Once sufficient borings and lab data exist, the report engine assembles a draft geotechnical investigation report with soil profiles, boring logs, and lab summary tables pre-populated for the engineer's review and recommendations. During construction, field technicians run compaction tests with results calculated instantly against the approved Proctor curve; failing results generate an immediate contractor notification and hold the lift from sign-off until a passing retest is logged.",
    "compliance": [
      "ASTM D1586/D2487/D4318/D698/D1557/D6938/D1556",
      "IBC Chapter 17 (soils special inspection)",
      "AASHTO testing standards",
      "State DOT geotechnical specifications",
      "ICC Soils Special Inspector certification",
      "NRC/state radioactive material licensing (nuclear gauges)"
    ],
    "integrations": [
      "Procore",
      "Bentley gINT (boring log software)",
      "IBM Maximo",
      "State DOT project portals",
      "CAD/GIS platforms for site plans"
    ],
    "roi": "Firms linking field and lab data report cutting geotechnical report drafting time by 40-50%, since soil profiles and boring logs no longer require manual reconciliation between drill crew notes and lab spreadsheets. Real-time compaction failure alerts have reduced re-mobilization for failed lift retests by roughly a third at active earthwork sites. Radioactive source license and gauge calibration tracking has eliminated same-day use of an expired-license nuclear gauge, a citation risk under NRC/state licensing rules.",
    "faqs": [
      [
        "Can it generate USCS soil classification automatically from lab data?",
        "Yes — once Atterberg limits and gradation data are entered for a sample, the system applies ASTM D2487 classification rules automatically and attaches the classification to the corresponding boring log interval."
      ],
      [
        "How does it track nuclear gauge radioactive source licensing separately from calibration?",
        "Both are tracked as distinct expiry dates on the equipment record — calibration certificate and NRC/state source license — with independent alert schedules, since a gauge can be in calibration but operating on an expired source license."
      ],
      [
        "Does the report engine replace the engineer's judgment on recommendations?",
        "No — it assembles factual boring logs, lab data tables, and soil profiles automatically, but geotechnical recommendations (bearing capacity, settlement, foundation type) remain the engineer of record's professional judgment and sign-off."
      ]
    ]
  },
  "industrial-coatings-inspection": {
    "headline": "Industrial Coatings Inspection ERP built for AMPP/NACE certified inspector workflows",
    "overview": "Coatings inspection firms verify surface preparation and coating application against project specifications spanning SSPC/NACE (now AMPP) surface prep standards, dry film thickness requirements, and holiday testing — often across large structures like tanks, pipelines, and offshore platforms where a single missed hold point can force a costly recoat. This module manages inspector CIP (Certified Coating Inspector) credential tracking, project specification assignment, and the full data trail from surface prep verification through final coating acceptance. Environmental readings (surface temperature, ambient temperature, relative humidity, dew point) are logged at defined intervals per ASTM D4414/SSPC-PA2 requirements, with automatic flagging when conditions fall outside the coating manufacturer's application window. Surface profile (anchor pattern) measurements, visual cleanliness comparisons against SSPC-VIS standards, dry film thickness readings (SSPC-PA2 statistical sampling), holiday detection (NACE RP0188/SSPC-SP), and adhesion pull-off tests (ASTM D4541) are each logged against the specific coat, area, and inspector, building a defensible hold-point record for the owner/engineer before the next coat or system closes out an area.",
    "ndtAngle": "Coatings inspection sits adjacent to classical NDT within asset integrity programs — many firms performing coatings inspection also run UT thickness gauging on the same tanks and pipelines for corrosion monitoring under API 653/570. The module links coating condition assessment (used in RBI scoring under API 580/581) to the same asset record as UT CML (condition monitoring location) thickness history, giving integrity engineers a combined corrosion-under-insulation and external coating risk picture. Holiday detection and DFT data feed directly into coating system warranty documentation and RBI external damage mechanism scoring, closing the loop between coatings QA and mechanical integrity data that typically live in separate systems.",
    "capabilities": [
      "CIP (Certified Coating Inspector) credential tracking with AMPP recertification expiry alerts",
      "Environmental condition logging (surface/ambient temp, RH, dew point) against manufacturer application windows per SSPC-PA2",
      "Statistical DFT sampling and gauge readings mapped to SSPC-PA2 acceptance criteria by area",
      "Holiday/pinhole detection logging (NACE RP0188/SSPC-SP high/low voltage) tied to coat and hold point",
      "Adhesion pull-off test recording (ASTM D4541) with failure-mode classification",
      "Surface profile (anchor pattern) and SSPC-VIS visual cleanliness comparison logging per blast area",
      "Hold-point sign-off workflow blocking next coat application until prior coat inspection is accepted",
      "Coating condition data linkage to UT CML thickness history for RBI external damage scoring (API 580/581)"
    ],
    "workflow": "Before blasting begins, the inspector confirms environmental conditions are within the coating manufacturer's application window, logging surface and ambient temperature, relative humidity, and dew point. After blast, surface profile and visual cleanliness (SSPC-VIS comparison) are recorded per defined area before prep is accepted for coating. Each coat application is followed by wet-film and dry-film thickness readings taken per SSPC-PA2 statistical sampling plan, with holiday detection performed on the completed system. Any reading outside specification generates a non-conformance that must be resolved (rework, additional coat, or engineering disposition) before the hold point releases to the next coat or the area is turned over. Final acceptance compiles all environmental, DFT, holiday, and adhesion data into the closeout package delivered to the owner/EPC.",
    "compliance": [
      "SSPC-PA2 / SSPC-SP surface preparation standards",
      "NACE RP0188 (holiday detection)",
      "ASTM D4541 (adhesion)",
      "ASTM D4414/D4417 (dry film thickness/surface profile)",
      "ISO 12944",
      "AMPP/NACE CIP certification program",
      "API 653/570 (linked tank/pipeline integrity)"
    ],
    "integrations": [
      "IBM Maximo",
      "Meridium/GE APM (RBI data)",
      "SAP S/4HANA",
      "Client EPC document control systems",
      "UT thickness gauge Bluetooth/data-logging output"
    ],
    "roi": "Firms using structured hold-point enforcement report recoat/rework rates falling by 20-30%, largely from catching environmental and DFT excursions before the next coat is applied rather than during final inspection. Closeout package assembly, historically a multi-day compilation of environmental logs, DFT readings, and holiday reports, typically compresses to under a day. Linking coating condition to UT CML data has helped several integrity teams identify external corrosion risk areas earlier in the RBI cycle, avoiding unplanned inspection scope additions during turnarounds.",
    "faqs": [
      [
        "Does it support multiple coating specifications on the same project?",
        "Yes — each coating system and its specific surface prep, environmental, and DFT acceptance criteria are configured per project or even per area, so a tank floor and shell coated to different specifications are tracked independently within the same job."
      ],
      [
        "Can inspectors log data offline in the field?",
        "Yes, field data capture works offline on tanks, pipelines, and platforms with intermittent connectivity, syncing to the central record once a connection is available."
      ],
      [
        "How does it link to our asset integrity/RBI program?",
        "Coating condition and DFT trend data can be exported or API-linked to RBI platforms like Meridium/GE APM, feeding external damage mechanism scoring alongside UT thickness data from the same assets."
      ]
    ]
  },
  "marine-survey-companies": {
    "headline": "Marine Survey ERP built for classification society and UWILD compliance",
    "overview": "Marine survey firms conduct hull condition surveys, thickness gauging, and machinery surveys against classification society rules (DNV, ABS, Lloyd's Register, and others under the IACS umbrella) on tight port-call and drydock windows where a missed survey deadline can strand a vessel out of class. This module manages the survey program per vessel — class renewal, intermediate, annual, and continuous machinery survey (CMS) schedules — with due-date tracking synced to each vessel's class certificate expiry. UT thickness gauging surveys (hull plating, tank boundaries, piping) are logged against the vessel's structural drawing zones, with readings compared automatically to the class society's minimum allowable thickness (diminution limits) for that structural member and vessel age. UWILD (Underwater Inspection in Lieu of Drydocking) surveys, when approved by the flag state and class society, are logged with ROV/diver video timestamps mapped to hull zones, replacing physical drydock inspection for eligible vessels. Survey reports are generated in the format each classification society requires, with surveyor credentials and society-specific certification tracked per assignment.",
    "ndtAngle": "UT thickness gauging is the core NDT method in marine survey work, and the module treats it exactly as it does for API 653 tank floor UT: readings are logged against a structural grid (frame/zone), compared to class-society diminution limits rather than a generic wall-loss percentage, and trended survey-to-survey to project remaining structural life ahead of the next drydock. Surveyor NDT qualifications (many hold ASNT or CSWIP alongside class-society-recognized surveyor status) are tracked with expiry alerts. For firms also doing weld inspection on hull repairs, MT/PT/UT results on repair welds link to the same vessel record as the thickness survey, giving a class surveyor one consolidated structural integrity file per vessel.",
    "capabilities": [
      "Class renewal/intermediate/annual/CMS survey schedule tracking synced to each vessel's class certificate expiry",
      "UT thickness gauging logged by structural zone/frame with automatic comparison to class-society diminution limits",
      "UWILD survey logging with ROV/diver video timestamp mapping to hull zones for flag-state/class approval",
      "Survey report generation in classification-society-specific formats (DNV, ABS, LR, and other IACS members)",
      "Surveyor credential tracking (class-society recognized surveyor status, ASNT/CSWIP) with expiry escalation",
      "Thickness trend analysis across survey cycles to project remaining structural life before next drydock",
      "Repair weld NDT (MT/PT/UT) results linked to vessel structural integrity record",
      "Fleet-level dashboard for owners/operators tracking survey due dates and outstanding condition of class recommendations"
    ],
    "workflow": "A survey is scheduled against the vessel's class certificate expiry, and the surveyor receives the vessel's structural drawings and prior survey thickness data ahead of the port call or drydock. UT gauging readings are captured by structural zone during the survey, compared instantly to the class society's minimum allowable thickness for that member and vessel age; readings below limit generate a condition of class or recommendation requiring owner action within a set timeframe. For UWILD surveys, ROV or diver footage is logged with timestamps mapped to hull zones for class and flag-state review. The completed survey report generates in the required classification-society format, and the vessel's next survey due date updates automatically based on the survey type just completed and the society's cycle rules.",
    "compliance": [
      "IACS Unified Requirements",
      "SOLAS",
      "MARPOL",
      "Classification society rules (DNV, ABS, LR, ClassNK, BV)",
      "Flag state requirements",
      "ASNT/CSWIP (surveyor NDT credentials)"
    ],
    "integrations": [
      "Class society digital survey portals (DNV Veracity, ABS My Digital Fleet)",
      "IBM Maximo (fleet asset management)",
      "SAP S/4HANA",
      "Vessel PMS (planned maintenance system) platforms",
      "ROV/diver video management systems"
    ],
    "roi": "Operators using synced class-expiry scheduling report near-elimination of missed survey windows that previously risked a vessel being deemed out of class. Automated diminution-limit comparison has cut survey report drafting time by roughly a third, since thickness readings no longer require manual lookup against class-society tables per structural member. Fleet-level dashboards have helped owners consolidate outstanding conditions of class across a fleet, reducing the administrative burden of tracking recommendation close-out deadlines vessel by vessel.",
    "faqs": [
      [
        "Does the system support multiple classification societies for a mixed fleet?",
        "Yes — diminution limits, report formats, and survey cycle rules are configured per classification society, so a fleet split between DNV and ABS vessels, for example, is managed correctly within one system."
      ],
      [
        "Can UWILD survey data satisfy flag state and class requirements simultaneously?",
        "The survey record captures the data both typically require — zone-mapped video timestamps, thickness readings, and surveyor sign-off — though final UWILD approval remains subject to the specific flag state and class society's own acceptance process for that vessel."
      ],
      [
        "How does thickness trending help with drydock planning?",
        "Survey-to-survey thickness trends by structural zone project when a member is likely to approach its diminution limit, letting owners plan steel renewal work for the next scheduled drydock rather than discovering it as an unplanned finding."
      ]
    ]
  },
  "metrology-laboratories": {
    "headline": "Metrology Laboratory ERP for ISO/IEC 17025 measurement traceability and uncertainty management",
    "overview": "Metrology labs providing dimensional, mechanical, and physical measurement services — CMM inspection, gauge calibration, mass and force standards — operate under the same traceability discipline as calibration labs but with a heavier dimensional/CMM inspection workload supporting aerospace and precision manufacturing customers. This module manages measurement job intake, equipment/standard assignment, uncertainty budget application (per GUM — Guide to the Expression of Uncertainty in Measurement), and certificate issuance, with every measurement traced through its reference standard chain back to a national metrology institute. CMM inspection programs are stored and version-controlled per part number, so repeat inspection jobs reuse validated programs rather than being reprogrammed each time. Gauge R&R and measurement system analysis (MSA) studies are logged per gauge/method combination to support customer PPAP (Production Part Approval Process) submissions. For labs supporting aerospace customers, dimensional inspection data feeds directly into AS9102 First Article Inspection reports, aligning metrology output with the customer's own quality system requirements without manual re-entry of dimensional results into a separate FAI form.",
    "ndtAngle": "Metrology and NDT overlap heavily in precision manufacturing quality programs: a part requiring CMM dimensional verification often also requires UT or eddy current inspection for internal defects, and both result sets need to land in the same FAI or quality record. The module lets metrology labs that are part of a broader inspection company share the personnel-qualification and equipment-calibration engine used for ASNT/NAS 410 NDT credentialing, so a technician dual-qualified in CMM operation and UT can have both competencies tracked in one record. Reference standard traceability logic mirrors exactly what an ISO 17025 calibration lab uses for UT reference blocks, keeping the uncertainty and traceability model consistent across a company's metrology and NDT service lines.",
    "capabilities": [
      "GUM-compliant uncertainty budget calculation applied automatically per measurement type and equipment class",
      "CMM inspection program version control, reused per part number to eliminate reprogramming on repeat jobs",
      "Reference standard traceability chain-of-custody to national metrology institutes (NIST, NPL, PTB)",
      "Gauge R&R / MSA study logging to support customer PPAP submissions",
      "AS9102 FAI dimensional data auto-population from CMM inspection results for aerospace customers",
      "ILAC-MRA-format certificate generation gated to accredited scope (A2LA/ANAB/UKAS)",
      "Combined dimensional + NDT personnel qualification tracking for firms offering both service lines",
      "Customer measurement data portal with statistical trend charts across repeat production lots"
    ],
    "workflow": "A measurement job is logged against the customer part number, pulling the validated CMM program or manual measurement procedure on file. The technician runs the inspection, and results are captured with the applicable uncertainty budget applied automatically based on the equipment and method used. Results are compared to the part's engineering drawing tolerances, with any out-of-tolerance dimension flagged for review before the report issues. For aerospace customers, dimensional results route directly into the AS9102 FAI form alongside any NDT acceptance data from the same part. The certificate or inspection report generates in ILAC-MRA format where the lab's accreditation covers that measurement, and results are logged to the part's production-lot history for trend analysis across repeat orders.",
    "compliance": [
      "ISO/IEC 17025",
      "ISO 10012",
      "AS9102",
      "ANSI/NCSL Z540.3",
      "ILAC-MRA",
      "A2LA/ANAB/UKAS accreditation criteria"
    ],
    "integrations": [
      "CMM software (PC-DMIS, Calypso)",
      "SAP S/4HANA",
      "Customer supplier portals (Boeing BQMS, Airbus AirSupply)",
      "IBM Maximo",
      "AS9102 FAI generation platforms"
    ],
    "roi": "Labs reusing version-controlled CMM programs report cutting repeat-job setup time by 40-60% compared to reprogramming each inspection from scratch. Automated AS9102 dimensional population has reduced FAI report compilation from several hours of manual transcription to a near-automatic export, and has cut FAI-related customer rejections tied to transcription errors. Uncertainty budget automation has shortened certificate turnaround while maintaining the audit trail accreditation bodies require during ISO 17025 assessment.",
    "faqs": [
      [
        "Can it manage both CMM dimensional work and traditional gauge calibration in one system?",
        "Yes — dimensional inspection jobs and gauge/instrument calibration share the same underlying traceability and uncertainty engine, so a lab offering both service lines runs them from a single platform rather than separate systems."
      ],
      [
        "How are CMM programs version-controlled?",
        "Each program is tied to a specific part number and revision; if the drawing revision changes, the system flags the existing program as outdated and requires validation of an updated program before it can be used for production inspection."
      ],
      [
        "Does it support PPAP/MSA study documentation?",
        "Gauge R&R and MSA studies are logged per gauge-method combination and can be exported in the format needed for customer PPAP submission packages."
      ]
    ]
  },
  "ndt-inspection-companies": {
    "headline": "NDT Inspection Company ERP built for API 510/570/653 and ASNT/ISO 9712 compliance",
    "overview": "NDT inspection companies run a fundamentally different operation from a manufacturing QA department — technicians mobilize to client sites (refineries, pipelines, fabrication yards, offshore platforms) to perform UT, RT, MT, PT, ET, PAUT, and TOFD inspections against API and ASME codes, then turn field data into client-ready reports within contractual turnaround windows. This module is the operational backbone: technician certification records (ASNT SNT-TC-1A written practice level, ISO 9712, PCN, CSWIP) with method-specific expiry tracking, job/work order management from client PO through mobilization and crew assignment, equipment calibration status enforced at job release, and report generation that pulls thickness readings, indication logs, and technique sheets directly into the client's required format. Asset integrity data — API 510 pressure vessel, API 570 piping, and API 653 tank inspection results — feeds condition monitoring location (CML) history for corrosion rate trending and remaining life calculation, and supports risk-based inspection (RBI per API 580/581) interval recommendations. Fitness-for-service (FFS per API 579) assessment data links to the same asset record, giving a client's integrity engineer one continuous history per asset rather than a stack of disconnected PDF reports.",
    "ndtAngle": "This is the core inspection-company use case: every method (UT thickness/flaw detection, RT film and digital, MT, PT, ET, PAUT, TOFD) has its own technique sheet, acceptance criteria, and reporting template built to API 510/570/653 and ASME BPVC Section V requirements. Technician qualification enforcement (SNT-TC-1A written practice levels, ISO 9712, PCN, CSWIP) blocks assignment to a job if the required method/level certification has lapsed. CML thickness history trends corrosion rate against API 570/653 minimum thickness and next-inspection-interval calculations automatically. RBI scoring (API 580/581) and FFS (API 579) data attach to the same asset, so integrity engineers see UT trend, RBI interval, and FFS disposition together rather than reconciling separate systems.",
    "capabilities": [
      "Technician certification tracking (SNT-TC-1A, ISO 9712, PCN, CSWIP) by method and level with 90/60/30-day expiry escalation",
      "Job/work order lifecycle from client PO through mobilization, crew assignment, and equipment allocation",
      "Equipment calibration enforcement at job release (UT flaw detectors, thickness gauges, RT densitometers, MT yokes)",
      "CML-based thickness history with automated corrosion rate and remaining life calculation per API 570/653",
      "RBI interval recommendation support (API 580/581) linked to live CML trend data",
      "FFS (API 579) assessment data attached to asset record alongside inspection history",
      "Client-branded report generation pulling technique sheets, indication logs, and CML data into required format",
      "Mobile field data capture (offline-capable) for remote/turnaround site work with sync-on-connect"
    ],
    "workflow": "A client PO triggers job creation, and the scheduler assigns technicians whose certifications match the required method and level, with equipment allocated only if its calibration is current. Field technicians capture UT thickness, RT exposure, MT/PT indication, or PAUT scan data on mobile devices, often offline during turnaround work with intermittent connectivity, syncing once back online. Each reading logs against the specific CML or weld ID on the asset's inspection map. Any reading below the calculated minimum thickness or acceptance criteria generates a finding routed to the QA reviewer before the report releases. Approved reports auto-populate the client's required template and update the asset's CML history, feeding corrosion rate trending and the next RBI interval calculation without manual data re-entry.",
    "compliance": [
      "API 510/570/653",
      "API 580/581 (RBI)",
      "API 579 (FFS)",
      "ASME BPVC Section V",
      "ASNT SNT-TC-1A",
      "ISO 9712",
      "ISO 9001"
    ],
    "integrations": [
      "IBM Maximo",
      "Meridium/GE APM",
      "SAP S/4HANA",
      "Client vendor management portals (ISNetworld, Avetta)",
      "PAUT/TOFD data acquisition systems (Olympus, Zetec)"
    ],
    "roi": "Inspection firms using CML-linked reporting cut report turnaround from days to hours by eliminating manual transcription from field notes into client templates. Certification-expiry lockout has prevented technicians from being assigned to jobs requiring lapsed credentials, removing a recurring finding in client and third-party audits. Firms tracking corrosion rate trends automatically report catching approaching minimum-thickness conditions earlier, giving clients more lead time to plan repairs during scheduled turnarounds rather than reacting to an unplanned finding. Billable technician utilization typically improves 10-15% once scheduling accounts for real-time certification and equipment availability.",
    "faqs": [
      [
        "How does certification tracking prevent compliance issues on client sites?",
        "Technician records store method- and level-specific certification dates (SNT-TC-1A, ISO 9712, PCN, CSWIP); the scheduling module blocks assignment to a job requiring a certification the technician does not currently hold, and sends 90/60/30-day expiry alerts so recertification is planned ahead of a job, not discovered on-site."
      ],
      [
        "Can it support both API 510/570/653 fixed-asset inspection and pipeline or offshore work in one system?",
        "Yes — asset types, CML structures, and report templates are configurable per inspection scope, so a company running refinery turnaround work alongside pipeline or offshore inspection manages both from the same platform with scope-appropriate templates."
      ],
      [
        "How does RBI/FFS data integration work if we do not run our own RBI software?",
        "CML thickness trend and corrosion rate data can feed API 580/581 interval logic natively in the platform, or export to a client's RBI system such as Meridium/GE APM if the client owns and maintains their own RBI program."
      ]
    ]
  },
  "oilfield-services": {
    "headline": "Oilfield Services ERP for API Spec Q1/Q2 quality management and tubular inspection traceability",
    "overview": "Oilfield service companies — wireline, tubular inspection, wellhead, and third-party inspection providers — operate under API Spec Q1 (manufacturing) or Q2 (service supply) quality management requirements while mobilizing crews to well sites on short notice, often through client contractor management portals like ISNetworld or Avetta that gate site access on safety and quality documentation. This module manages job dispatch from client work order through crew mobilization, tracking each technician's certifications, HSE training, and site-specific client requirements before dispatch is confirmed. Tubular inspection (drill pipe, casing, tubing) results — UT wall thickness, MPI for surface defects, dimensional/thread inspection per API RP 7G-2 or DS-1 standards — are logged per joint with unique tally tracking, so a string's full inspection history travels with it between wells. Wellhead and pressure-control equipment inspection data ties to the specific asset serial number for API 6A-referenced components. Job costing captures mobilization, standby, and job-execution time separately, supporting the day-rate and call-out billing structures common in oilfield service contracts.",
    "ndtAngle": "Tubular inspection is UT- and MPI-heavy: full-body UT wall thickness scanning, MPI for surface-breaking defects on connections and pin/box threads, and dimensional checks against API RP 7G-2 (drill stem) or DS-1 (tubular inspection standard) acceptance criteria. Each joint's inspection record (accept/reject/repair classification) travels with its tally number, so a string pulled from one well and redeployed to another carries its full inspection history rather than starting a new paper trail. Technician certification tracking covers both ASNT/API-specific tubular inspector qualifications and required HSE credentials, both gating dispatch. Equipment calibration (UT units, MPI benches) is enforced at job release exactly as it is for fixed-plant NDT work.",
    "capabilities": [
      "API Spec Q1/Q2 quality management workflow with document control and internal audit tracking",
      "Tubular joint-level inspection logging (UT wall thickness, MPI, dimensional/thread) with tally number traceability",
      "Client contractor-management portal document sync (ISNetworld, Avetta) for site access qualification",
      "Crew mobilization workflow: certification, HSE training, and client-specific requirement verification before dispatch",
      "API 6A wellhead/pressure-control equipment inspection tied to component serial number history",
      "Job costing separating mobilization, standby, and execution time for day-rate/call-out billing",
      "Reject/repair disposition tracking per tubular joint with re-inspection scheduling",
      "Equipment calibration enforcement (UT units, MPI benches) at job release"
    ],
    "workflow": "A client work order triggers crew dispatch, with the system checking each assigned technician's certifications, HSE training currency, and any client-specific site requirements pulled from the ISNetworld/Avetta portal record before confirming mobilization. At the tubular inspection yard or well site, each joint is scanned (UT wall thickness, MPI surface inspection, thread dimensional check) and logged against its tally number, with reject/repair/accept disposition recorded per API RP 7G-2 or DS-1 criteria. Rejected joints route to repair or scrap disposition with the reason code retained in the joint's permanent history. Job costing captures mobilization travel, standby time, and execution hours separately as the job proceeds, and the final invoice compiles against the contracted day-rate or per-joint pricing structure once the job closes.",
    "compliance": [
      "API Spec Q1/Q2",
      "API RP 7G-2",
      "API DS-1",
      "API 6A",
      "ASNT SNT-TC-1A",
      "ISO 9001"
    ],
    "integrations": [
      "ISNetworld / Avetta contractor management portals",
      "SAP S/4HANA",
      "IBM Maximo",
      "Client well/asset management systems",
      "UT/MPI field data acquisition units"
    ],
    "roi": "Companies automating client portal document sync report cutting site-access qualification delays that previously stalled crew mobilization by a day or more. Joint-level tally traceability has reduced disputes over tubular inspection history when strings move between operators, since the full accept/reject/repair record travels with the joint rather than relying on paper tags that can be lost. Separating mobilization, standby, and execution time in job costing has improved billing accuracy on day-rate contracts, with several firms reporting fewer client billing disputes after adopting itemized time tracking.",
    "faqs": [
      [
        "How does it handle ISNetworld/Avetta compliance requirements for crew dispatch?",
        "Technician and company-level documents required by the client's contractor management portal (insurance, safety training, certifications) are tracked in the system and flagged if expired, so dispatch is blocked or flagged before a crew arrives at a site without current portal compliance."
      ],
      [
        "Can tubular inspection history follow a joint across multiple operators or wells?",
        "Yes — each joint's inspection record is tied to its permanent tally number rather than to a single job or client, so its accept/reject/repair history is available whenever it is redeployed, provided the joint stays within the same inspection company's tracking system."
      ],
      [
        "Does it support both day-rate and per-joint billing models?",
        "Job costing supports both structures — time-based costing for day-rate/standby billing and unit-based costing for per-joint tubular inspection billing — configurable per client contract."
      ]
    ]
  },
  "pipeline-integrity-services": {
    "headline": "Pipeline Integrity ERP built for API 1163 ILI validation and PHMSA compliance",
    "overview": "Pipeline integrity firms manage a continuous cycle of in-line inspection (ILI/smart pigging), direct assessment, and dig verification programs against operator integrity management plans required under 49 CFR Part 192 (gas) and Part 195 (hazardous liquid). This module tracks each pipeline segment's inspection history — ILI run dates, tool type (MFL, UT, caliper), and vendor — alongside the API 1163 validation process comparing ILI-reported anomalies against field dig verification measurements to establish tool tolerance and unity chart accuracy for that run. Dig verification data (UT wall thickness at the anomaly, coating condition, soil/environment observations) is logged against the specific ILI-reported feature, closing the loop between predicted and actual anomaly severity. Corrosion growth rate analysis compares consecutive ILI runs on the same segment to project remaining life and next-inspection-interval per API 1160 and ASME B31.8S integrity management requirements. High consequence area (HCA) mapping ties each pipeline segment's inspection schedule to its consequence classification, ensuring higher-risk segments receive the inspection frequency PHMSA regulations require.",
    "ndtAngle": "Dig verification is where classical NDT meets pipeline integrity: UT wall thickness readings, and sometimes MT/PT for surface-breaking crack features, are taken at the exact GPS/chainage location of an ILI-reported anomaly and compared against the tool's predicted depth and length. This module ties dig-site UT readings to the ILI anomaly record automatically, computing the tool's measurement error for that specific feature and feeding the API 1163 unity chart used to validate the ILI vendor's tool performance for the entire run. Direct assessment methodologies (ECDA, ICDA, SCCDA per NACE SP0502) are supported as parallel integrity assessment tracks for segments not run with ILI tools, each with its own indirect-inspection and direct-examination data logging.",
    "capabilities": [
      "ILI run history tracking by segment (tool type MFL/UT/caliper, vendor, run date) with anomaly list import",
      "API 1163-aligned dig verification workflow comparing field UT measurements to ILI-predicted anomaly depth/length",
      "Unity chart / tool tolerance calculation per ILI run based on accumulated dig verification data",
      "Corrosion growth rate analysis across consecutive ILI runs to project remaining life and next interval",
      "HCA (high consequence area) mapping tied to segment-level inspection frequency requirements",
      "Direct assessment methodology support (ECDA/ICDA/SCCDA per NACE SP0502) as parallel integrity track",
      "PHMSA 49 CFR Part 192/195 integrity management plan documentation and audit trail",
      "GPS/chainage-referenced anomaly and repair record for full segment traceability"
    ],
    "workflow": "An ILI run's anomaly list imports into the system, with each reported feature located by GPS/chainage against the pipeline's segment map. Dig crews are scheduled to verify the highest-priority anomalies (by predicted severity and consequence classification) first, and field UT wall thickness readings taken at each dig site log directly against the corresponding ILI anomaly record. The system computes the difference between ILI-predicted and field-measured depth/length, feeding the unity chart used to validate that ILI vendor's tool tolerance for the run per API 1163. Corrosion growth is calculated automatically once a second ILI run's data exists for the same segment, projecting remaining life and recommending the next inspection interval per API 1160/ASME B31.8S, with HCA classification determining whether that interval meets PHMSA-required frequency.",
    "compliance": [
      "API 1160",
      "API 1163",
      "ASME B31.8S",
      "ASME B31.4",
      "49 CFR Part 192/195 (PHMSA)",
      "NACE SP0502 (ECDA)",
      "ASNT SNT-TC-1A (dig-crew NDT technicians)"
    ],
    "integrations": [
      "ILI vendor data platforms (Rosen, Baker Hughes PII, TDW)",
      "IBM Maximo",
      "GIS/pipeline mapping systems",
      "Meridium/GE APM",
      "PHMSA reporting portals"
    ],
    "roi": "Operators using automated dig-verification-to-ILI-anomaly matching report cutting unity chart preparation time from weeks of manual spreadsheet reconciliation to days, directly supporting timely API 1163 tool validation sign-off. Corrosion growth rate automation across ILI runs has helped integrity teams identify accelerating corrosion segments earlier, avoiding unplanned excavations by adjusting the next-inspection interval proactively. GPS/chainage-referenced anomaly tracking has reduced dig-crew mobilization to wrong or imprecisely located anomalies, a recurring source of wasted field time on large-diameter transmission lines.",
    "faqs": [
      [
        "How does the system handle data from different ILI vendors' tools?",
        "Anomaly list formats vary by vendor (Rosen, Baker Hughes PII, TDW, and others); the platform normalizes each vendor's export into a common segment/GPS-referenced anomaly record so dig verification and unity chart analysis work consistently regardless of which vendor ran the tool."
      ],
      [
        "Can it support segments assessed by direct assessment instead of ILI?",
        "Yes — ECDA, ICDA, and SCCDA methodologies per NACE SP0502 are tracked as their own assessment workflow with indirect inspection (e.g., ACVG, CIS) and direct examination data logged the same way ILI dig verification is, keeping both integrity approaches in one system."
      ],
      [
        "Does it calculate the next required inspection interval automatically?",
        "It calculates a recommended interval based on corrosion growth rate and applicable code requirements (API 1160/ASME B31.8S) relative to HCA classification, but the integrity engineer reviews and approves the final interval before it becomes the operator's committed inspection schedule."
      ]
    ]
  },
  "welding-fabrication-shops": {
    "headline": "Welding & Fabrication ERP built for ASME Section IX and AWS D1.1 traceability",
    "overview": "Fabrication shops producing pressure vessels, piping, and structural steel manage a dense web of welding qualification and material traceability requirements that must survive both routine CWI (Certified Welding Inspector) review and code-body/client audit. This module manages the WPS (Welding Procedure Specification) and PQR (Procedure Qualification Record) library, tying every production weld to the specific WPS revision that qualifies it, and tracks each welder's WPQ (Welder Performance Qualification) including process, position, and material-thickness range, with automatic disqualification if the welder has not welded in that process within the code-required continuity period (six months under ASME IX). Material traceability follows heat/lot numbers from mill certificate receipt through cutting, fit-up, and welding, so any weld can be traced back to its exact material heat. Weld maps assign a unique weld ID per joint, with NDT results (RT, UT, MT, PT) logged against each weld ID and compared to the applicable acceptance criteria (ASME Section VIII, AWS D1.1, or API 1104 depending on product type). Filler metal certification and consumable lot control round out the traceability chain from raw material to finished, inspected weld.",
    "ndtAngle": "NDT of welds is where this module does its heaviest lifting: RT (film or digital), UT (including phased array for thick-section vessel welds), MT, and PT results log against the specific weld ID, with acceptance criteria applied automatically based on the governing code (ASME Section VIII Div 1/2, AWS D1.1, API 1104 for pipeline girth welds). NDT technician credentials (ASNT SNT-TC-1A, CSWIP, PCN) are tracked alongside welder WPQ records, and equipment calibration (UT flaw detectors, RT densitometers) gates use exactly as it does for field inspection companies. A rejectable indication routes to repair, with repair-weld NDT re-verification required before the weld ID can close, preserving a complete accept/repair/re-inspect history per joint.",
    "capabilities": [
      "WPS/PQR library with production welds locked to a specific qualified procedure revision",
      "Welder WPQ tracking (process/position/thickness range) with automatic continuity-period disqualification (6-month ASME IX rule)",
      "Heat/lot material traceability from mill certificate through cutting, fit-up, and finished weld",
      "Weld map with unique weld ID per joint linking NDT results to specific weld location",
      "Code-specific NDT acceptance criteria applied automatically (ASME VIII, AWS D1.1, API 1104)",
      "Rejectable-indication repair workflow requiring re-inspection before weld ID closes",
      "Filler metal/consumable lot control tied to WPS-specified consumables",
      "CWI and NDT technician (ASNT/CSWIP/PCN) credential tracking with expiry alerts"
    ],
    "workflow": "A production drawing generates a weld map, assigning a unique ID to each joint and identifying the governing WPS for its material, thickness, and process. Before welding, the system confirms the assigned welder's WPQ covers that process/position/thickness combination and that their continuity period has not lapsed. Material heat numbers are logged at fit-up, tying the joint's traceability to its mill certificate. After welding, required NDT (visual by CWI, plus RT/UT/MT/PT per the code and client specification) is performed and logged against the weld ID, with acceptance criteria applied automatically. A rejectable indication routes the weld to repair, and the repair is re-inspected before the weld ID is marked closed. At project completion, the full weld map with traceability data compiles into the client's data book.",
    "compliance": [
      "ASME BPVC Section IX",
      "AWS D1.1",
      "API 1104",
      "ASME Section VIII Div 1/2",
      "ASNT SNT-TC-1A",
      "CSWIP",
      "ISO 9001 / ISO 3834"
    ],
    "integrations": [
      "SAP S/4HANA",
      "IBM Maximo",
      "Client data book/document control portals",
      "RT/UT/MT/PT field data acquisition systems",
      "Material mill certificate databases"
    ],
    "roi": "Shops enforcing WPQ continuity checks report eliminating a recurring audit finding — welders working outside their qualified continuity period — almost entirely. Weld-ID-linked NDT traceability has cut data book compilation time at project close-out from days of manual document assembly to a same-day export. Material heat traceability queries that once required searching paper mill certificates now resolve in minutes, and several shops report faster client RFI response times on traceability questions during active fabrication, reducing schedule impact from documentation delays.",
    "faqs": [
      [
        "How does the system enforce the ASME IX six-month continuity rule?",
        "Each welder's WPQ record tracks the last date welded in a given process/position; if that gap exceeds six months (or the applicable code-specified continuity period), the welder is automatically flagged as requiring re-qualification before being assigned to that process again."
      ],
      [
        "Can it manage NDT acceptance criteria that differ by client specification on the same job?",
        "Yes — acceptance criteria are configured per project/client specification layered on top of the base code (ASME VIII, AWS D1.1, API 1104), so a client requiring tighter-than-code acceptance limits is applied correctly without manual cross-checking."
      ],
      [
        "Does it produce the final client data book automatically?",
        "It compiles the weld map, WPS/PQR references, welder qualifications, material certificates, and NDT reports into a structured data book export; most shops still have a document control review pass before final submission to the client."
      ]
    ]
  }
};
