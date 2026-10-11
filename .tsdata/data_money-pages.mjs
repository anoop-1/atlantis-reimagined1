// src/data/money-pages.ts
var NDT_INSPECTION_SOFTWARE = {
  slug: "ndt-inspection-software",
  title: "NDT Inspection Software 2026 \u2014 What Inspection Companies Actually Need | Atlantis NDT",
  description: "A buyer's guide to NDT inspection software in 2026: the four categories on the market, what each does badly, the eleven capabilities that decide the purchase, and an honest vendor comparison. Written by an ASNT Level III.",
  keywords: "ndt software, ndt inspection software, ndt inspection management software, non destructive testing software, inspection software for ndt companies, ndt data management software",
  h1: "NDT Inspection Software \u2014 A Buyer's Guide for Inspection Companies",
  eyebrow: "Buyer's guide \xB7 Updated 2026",
  subhead: 'Four product categories get called "NDT software". Only one of them runs an inspection business. Here is how to tell them apart before you buy.',
  intro: 'Search "NDT software" and you get instrument acquisition suites, simulation packages, generic CMMS platforms and inspection-business management systems returned as if they were the same product. They are not, and buying the wrong category is the single most common and most expensive mistake inspection companies make. This guide separates the four categories, sets out the capabilities that actually decide the purchase for an inspection service provider, and compares the real options \u2014 including where Atlantis is the wrong answer.',
  softwareCategory: "BusinessApplication",
  enquiryVariant: "erp",
  sections: [
    {
      h2: 'The four things called "NDT software"',
      paragraphs: [
        "Almost every shortlist we see mixes categories that solve completely different problems. Get the category right first; the vendor question is much easier afterwards."
      ],
      table: {
        caption: "What each category of NDT software actually does",
        headers: ["Category", "What it does", "Typical products", "What it will not do"],
        rows: [
          [
            "Instrument acquisition & analysis",
            "Captures and analyses raw data from a specific flaw detector or scanner \u2014 A/B/C/D-scans, TFM, corrosion maps.",
            "Waygate Capture & Mentor, Olympus/Evident WeldSight & OmniPC, Eddyfi Magnifi, Sonatest UTstudio, Zetec UltraVision",
            "Manage technicians, certifications, calibration due dates, client contracts or invoicing. It is per-instrument, not per-business."
          ],
          [
            "Simulation & technique design",
            "Models beam behaviour and probability of detection before you mobilise a crew.",
            "CIVA NDE, BeamTool, ESBeamTool",
            "Hold your inspection records or run your operation. It is an engineering tool used by Level IIIs."
          ],
          [
            "Generic CMMS / EAM",
            "Maintains an asset register and work orders for an owner-operator maintaining its own plant.",
            "IBM Maximo, Hexagon EAM, Fiix, UpKeep, Limble",
            'Understand SNT-TC-1A certification currency, method-level qualification, technique sheets, or the fact that your "assets" belong to clients, not to you.'
          ],
          [
            "Inspection business management (ERP)",
            "Runs the company: personnel qualification, equipment calibration, scheduling, multi-crew work orders, field capture, reporting, client contracts, job costing, document control.",
            "Atlantis NDT ERP, Metegrity Visions, Antea, Cenosco IMS, plus heavily customised SAP/NetSuite builds",
            "Replace your instrument software. It ingests the output; it does not do the acquisition."
          ]
        ]
      }
    },
    {
      h2: "The eleven capabilities that decide the purchase",
      paragraphs: [
        "Every inspection company that has switched systems in the last five years bought for some subset of these. Score candidates against the list rather than against a feature-count."
      ],
      bullets: [
        "Method-level personnel qualification \u2014 Level I/II/III per method, tied to a written practice, with vision-exam dates, general/specific/practical exam records and documented on-the-job hours.",
        "Hard lockout on lapse \u2014 an expired certification or an out-of-calibration instrument must make dispatch impossible, not just raise a warning nobody reads.",
        "Equipment calibration control with traceability chains \u2014 instruments, probes, wedges, reference blocks and step wedges, each with interval, certificate and ISO 17025 traceability to a national standard.",
        "Client-owned asset registers \u2014 plant / unit / line / component hierarchy with CML and TML identity that survives across years of inspection campaigns.",
        "Condition-driven scheduling \u2014 next inspection date computed from measured corrosion rate under API 510/570/653, not a fixed calendar interval.",
        "Offline mobile field capture \u2014 refineries, vessels and remote sites have no signal; data entered in a confined space must sync later without loss.",
        "Report generation against client templates \u2014 the same UT dataset formatted three different ways for three different clients, without re-keying.",
        "Document and revision control \u2014 procedures, written practices and technique sheets under ISO 9001 control, with the revision in force on the date of the inspection recoverable.",
        "Audit evidence assembly \u2014 a client or accreditation body asks for the qualification record of the technician who signed a report 18 months ago; that has to be a two-minute task.",
        "Job costing at work-order level \u2014 technician hours, per-diem, equipment, consumables and subcontracted NDT rolled up against invoiced revenue per contract and per client.",
        "Open API and full data export \u2014 you must be able to leave with your data in a usable format. Treat any vendor that resists this as a lock-in risk."
      ]
    },
    {
      h2: "Where each option genuinely wins",
      paragraphs: [
        'No honest comparison ends with "we win everything". Here is the version we give in sales calls.'
      ],
      table: {
        caption: "Honest positioning against the realistic alternatives",
        headers: ["Option", "Best fit", "Where it beats Atlantis", "Where it hurts"],
        rows: [
          [
            "Spreadsheets + shared drive",
            "Under about 8 technicians, single method, one or two clients.",
            "Zero cost, zero change management, infinitely flexible.",
            "Breaks at the first multi-client audit. Certification lapses and calibration misses are found by the client, not by you."
          ],
          [
            "Generic CMMS (Maximo, Fiix, UpKeep)",
            "Owner-operators maintaining their own plant.",
            "Mature maintenance planning, spares and reliability modules; huge integrator ecosystem.",
            "No concept of personnel method qualification or written practice. Inspection contractors end up building it in custom fields and maintaining it forever."
          ],
          [
            "SAP / Oracle / NetSuite with custom NDT build",
            "Large multinationals already standardised on that ERP group-wide.",
            "One financial system of record; existing group IT support and governance.",
            "The NDT layer is bespoke, so every upgrade re-tests it. Implementation timelines run in quarters, not weeks."
          ],
          [
            "Integrity-management specialists (Metegrity, Antea, Cenosco)",
            "Owner-operator integrity departments with deep RBI programmes.",
            "Very strong RBI and mechanical-integrity depth for a fixed asset base.",
            "Built around the owner's assets. Weak on running an inspection *business* \u2014 crews, contracts, certifications, invoicing."
          ],
          [
            "Atlantis NDT ERP",
            "NDT service providers, inspection contractors and QA departments from roughly 10 to 500 people.",
            "Certification, calibration, scheduling, field capture and job costing are native, not custom fields. Atlantis ERP foundation means 30+ business apps and full source-level customisation.",
            "If you need turbine-specific OEM telemetry models or a global group-wide financial consolidation, an OEM APM suite or tier-1 ERP is the better fit."
          ]
        ]
      }
    },
    {
      h2: "How to run the evaluation",
      bullets: [
        "Bring your own data. Ask each vendor to configure one real client contract, one real certification matrix and one real report template before you sign anything.",
        "Test the lapse path explicitly. Expire a certification in the demo tenant and try to dispatch that technician. If it lets you, the compliance story is decoration.",
        "Test the offline path. Put the mobile app in airplane mode, complete a full inspection, restore signal and confirm nothing is lost or duplicated.",
        "Ask for the export. Request a full data export in the demo. Note how hard it is; that is how hard leaving will be.",
        "Time-box the pilot. One crew, one client, six weeks. If the pilot cannot show a measurable reduction in report turnaround or audit-prep time, the rollout will not either."
      ]
    }
  ],
  faqs: [
    {
      question: "What is NDT inspection software?",
      answer: "The term covers four distinct product categories: instrument acquisition and analysis software that reads raw data from a specific flaw detector; simulation software used to design and validate techniques; generic CMMS/EAM used by asset owners to maintain their own plant; and inspection business management systems (ERP) that run an inspection company's personnel, equipment, scheduling, reporting and contracts. Buyers get into trouble when a shortlist mixes categories, because a demo of an acquisition suite and a demo of a business management system look nothing alike and solve different problems."
    },
    {
      question: "Do I need NDT-specific software, or will a generic CMMS do?",
      answer: "It depends on whether you own the assets or inspect someone else's. If you are an owner-operator maintaining your own plant, a mature CMMS such as Maximo or Fiix is a reasonable foundation. If you are an inspection service provider, generic CMMS lacks the two things that determine whether you keep your client approvals: method-level personnel qualification tied to a written practice, and calibration traceability on instruments, probes and reference blocks. Firms that try to bolt those onto a generic CMMS with custom fields typically end up maintaining that customisation indefinitely."
    },
    {
      question: "Can NDT inspection software import data from my flaw detectors?",
      answer: "Business management systems ingest the *output* of instrument software rather than replacing it. Atlantis NDT ERP accepts UT thickness datasets, PAUT and TOFD scan files, corrosion-mapping exports and instrument-generated reports through file import or REST API, and attaches each to the work order, the asset and the CML it belongs to. The acquisition and analysis still happens in the instrument's own software \u2014 Capture, Magnifi, WeldSight, UltraVision \u2014 which is where it should happen."
    },
    {
      question: "How long does implementation take?",
      answer: "For a 20\u201360 technician inspection business, six to ten weeks is realistic: one to two weeks of discovery and migration mapping, three weeks configuring certification, calibration and work-order modules against your written practice, two weeks piloting with a single crew on a single client contract, then rollout and training. Anything a vendor promises in under three weeks usually means your historical certification and calibration records are not being migrated."
    },
    {
      question: "What happens to our historical inspection records?",
      answer: "They migrate. Certification records, calibration certificates, client and asset registers, and historical inspection reports are mapped and imported as part of implementation \u2014 that migration is the main reason the timeline is weeks rather than days. Retaining that history matters: when an accreditation body or client asks which revision of a procedure was in force on the date of a 2023 inspection, the answer has to be recoverable."
    },
    {
      question: "Is Atlantis NDT ERP affordable for a small inspection company?",
      answer: "Yes \u2014 the platform is positioned as affordable, accessible and fully customizable, and is deployed by companies from roughly ten technicians upward. Because it is fully customized, you start with the modules that solve your immediate pain (usually certification tracking and calibration control) and add scheduling, field capture, job costing or CRM later without replatforming. Scope, region and team size drive the commercial terms, so request a tailored quote rather than working from a list price."
    },
    {
      question: "Which standards does the certification module support?",
      answer: "ASNT SNT-TC-1A and ANSI/ASNT CP-189 for employer-based certification, ISO 9712 for third-party certification, and NAS 410 / EN 4179 for aerospace. Each technician record carries method, level, examination dates, vision-exam currency, on-the-job training hours and the written practice revision they were certified against. API 510, API 570, API 653 and AWS CWI credentials are tracked alongside, since client pre-mobilisation checks almost always ask for both."
    },
    {
      question: "Does it work offline in the field?",
      answer: "Yes. Field capture is designed for refineries, vessels, confined spaces and remote sites with no connectivity: inspections are completed offline on a phone or tablet and synchronised when signal returns, with conflict handling so a record completed offline is never silently overwritten. This is worth testing in your own evaluation \u2014 put the app in airplane mode, complete a full inspection with photos, then restore signal and confirm nothing is lost."
    }
  ],
  related: [
    { href: "/inspection-management-software", label: "Inspection management software" },
    { href: "/best-ndt-reporting-software-2026", label: "NDT reporting software compared" },
    { href: "/erp", label: "Atlantis NDT ERP" },
    { href: "/erp-modules/certification-tracking", label: "Certification tracking module" },
    { href: "/erp-modules/calibration-management", label: "Calibration management module" },
    { href: "/asset-integrity-management-software", label: "Asset integrity management software" }
  ]
};
var INSPECTION_MANAGEMENT_SOFTWARE = {
  slug: "inspection-management-software",
  title: "Inspection Management Software 2026 \u2014 For Companies That Inspect Other People's Assets",
  description: "Inspection management software built for service providers, not asset owners: personnel qualification, calibration control, multi-crew scheduling, offline field capture, client reporting and job costing. Free 30-minute demo.",
  keywords: "inspection management software, ndt inspection management software, inspection management system, inspection company software, field inspection management software, quality inspection management software",
  h1: "Inspection Management Software for Service Providers",
  eyebrow: "Platform \xB7 Atlantis NDT ERP",
  subhead: "Most inspection management software is built for the company that owns the asset. This one is built for the company that gets called in to inspect it.",
  intro: "There is a structural difference between managing inspections on plant you own and running a business that inspects other people's plant. Owner-operator tools assume a fixed asset register, an internal workforce and no invoicing. Service providers have the opposite problem: the assets belong to clients and change every contract, the workforce is mobile and certified per method, and every job has to be costed, reported to a client-specific template and defended in a client audit. Atlantis NDT ERP is built for the second case.",
  softwareCategory: "BusinessApplication",
  enquiryVariant: "erp",
  sections: [
    {
      h2: "What breaks when you use owner-operator tools as a service provider",
      bullets: [
        "The asset register assumes you own the assets. Client confidentiality, per-contract access control and asset handover between contracts have no natural home.",
        "Personnel records track job titles, not method-level NDT qualification against a written practice \u2014 so the record a client audit asks for does not exist in the system.",
        "Calibration is modelled for production equipment, not for flaw detectors, probes, wedges and reference blocks with ISO 17025 traceability chains.",
        "There is no concept of a technician being dispatchable or not dispatchable based on certification currency.",
        "Work orders are internal maintenance tasks, so job costing against an invoiced contract and client-specific reporting formats have to be built from scratch."
      ]
    },
    {
      h2: "The system of record for an inspection business",
      paragraphs: [
        "Atlantis NDT ERP puts the six things that actually run an inspection company on one platform, so that a change in one is visible in the others: a certification that lapses on Friday removes that technician from Monday's dispatch automatically."
      ],
      bullets: [
        "People \u2014 method-level qualification per SNT-TC-1A, CP-189, ISO 9712 or NAS 410, with vision exams, examination records, on-the-job hours and the governing written-practice revision.",
        "Equipment \u2014 instruments, probes, wedges, reference blocks and step wedges with calibration intervals, certificates and traceability to a national standard.",
        "Work \u2014 multi-crew, multi-site scheduling and dispatch, with mobilisation, standby and travel captured as costed time.",
        "Assets \u2014 client plant/unit/line/component hierarchies with persistent CML and TML identity across campaigns.",
        "Evidence \u2014 procedures, written practices and technique sheets under ISO 9001 revision control, with point-in-time recovery.",
        "Money \u2014 job costing at work-order level, progress and milestone billing, retention handling and per-contract margin visibility."
      ]
    },
    {
      h2: "Field capture that survives a refinery",
      paragraphs: [
        "Field data entry is where most inspection software fails in practice. Inspectors work in confined spaces, on scaffold, inside vessels and offshore, wearing gloves, with no signal and often against a permit clock. The mobile capture layer is built for that: full offline operation with deferred sync and conflict handling, method-specific forms that mirror the technique sheet, photo and sketch attachment with automatic location tagging to the CML, and digital sign-off that carries the inspector's certification state at the moment of inspection \u2014 not at the moment of upload."
      ]
    },
    {
      h2: "Reporting to the client's template, not yours",
      paragraphs: [
        "Every major client wants the same inspection presented its own way. The reporting layer separates the dataset from the presentation, so one UT thickness survey can be issued as an API 510 vessel report to one client, an internal corrosion-trending summary to another, and a raw data export to a third \u2014 without re-keying and without three versions of the truth. Reports carry the procedure revision, the technician's certification state and the instrument's calibration status at the time of inspection, which is precisely the bundle an audit asks for."
      ]
    },
    {
      h2: "Where it fits alongside what you already run",
      paragraphs: [
        "The platform is not an attempt to replace your instrument software or your accounting system on day one. It ingests instrument output through file import or REST API and runs alongside SAP, Oracle, NetSuite, Dynamics 365, QuickBooks and Xero. Where clients run their own integrity platforms, inspection results can be pushed back into SAP PM, Oracle eAM, IBM Maximo or ServiceNow so your data lands where the client expects it. When you also run the Atlantis Digital Twin, inspection results flow onto the 3D asset model without a second data entry step."
      ]
    },
    {
      h2: "A realistic implementation",
      table: {
        caption: "Typical rollout for a 20\u201360 technician inspection business",
        headers: ["Stage", "Duration", "What happens"],
        rows: [
          ["Discovery & mapping", "Weeks 1\u20132", "Written practice, certification matrix, calibration register, client and asset lists reviewed and mapped for migration."],
          ["Core configuration", "Weeks 3\u20135", "Certification, calibration and work-order modules configured; report templates built for your two or three largest clients."],
          ["Pilot", "Weeks 6\u20137", "One crew, one client contract, live. Field capture tested offline. Audit-evidence path rehearsed end to end."],
          ["Rollout & training", "Weeks 8\u201310", "Remaining crews onboarded, historical records migrated, dashboards handed to operations and QA."]
        ]
      }
    }
  ],
  faqs: [
    {
      question: "What is inspection management software?",
      answer: "It is the system of record for an inspection operation: who is qualified to perform which method, whether their certification and vision exams are current, whether the instruments are in calibration, which inspections are due on which client assets, what was found, how it was reported and what it cost. For service providers it also has to handle client contracts, multi-crew dispatch and job costing, which is what separates it from an owner-operator CMMS."
    },
    {
      question: "How is this different from a CMMS?",
      answer: "A CMMS is designed for an organisation maintaining assets it owns, so it optimises maintenance planning, spares and reliability. Inspection management software for a service provider optimises a different set of constraints: mobile certified personnel, calibrated instruments, client-owned assets that change every contract, client-specific reporting and per-job profitability. Companies that force a CMMS into the service-provider role usually end up maintaining a large custom-field layer to hold certification and calibration data the product was never designed for."
    },
    {
      question: "Can it handle multiple clients with different reporting formats?",
      answer: "Yes, and this is one of the main reasons companies switch. The inspection dataset is stored once and rendered through client-specific templates, so the same UT survey can be issued in three different formats to three clients without duplicate data entry. Each issued report records the procedure revision, technician certification state and instrument calibration status applicable at the time of inspection."
    },
    {
      question: "Does it work for inspection disciplines beyond NDT?",
      answer: "Yes. The same model \u2014 qualified people, calibrated equipment, scheduled inspections on client assets, evidence-backed reporting \u2014 applies to coatings inspection, marine survey, geotechnical and materials testing, environmental testing, calibration laboratories and welding/fabrication QA. Those industry configurations ship as pre-built templates, and the platform is used across all of them."
    },
    {
      question: "Can we start with one module?",
      answer: "Yes, and most companies should. The usual entry point is certification tracking or calibration management, because those are where audit risk concentrates and where the value shows up fastest. Scheduling, field capture, job costing, CRM and document control are added afterwards without replatforming, since they are apps on the same Atlantis ERP foundation rather than separate products."
    },
    {
      question: "What integrations are available?",
      answer: "REST API and webhooks for anything custom, plus supported connectors for SAP PM, Oracle eAM, IBM Maximo, ServiceNow, NetSuite, Dynamics 365, QuickBooks and Xero. Instrument data enters by file import or API. Full bulk export is available at any time \u2014 you should be able to leave a platform with your data, and we make that explicit rather than awkward."
    },
    {
      question: "Is the platform accessible for a small company?",
      answer: "Yes. It is positioned as affordable, accessible and fully customizable, and is in use by companies from roughly ten technicians upward as well as by multi-country contractors. Commercial terms depend on scope, region and team size \u2014 request a tailored quote and a 30-minute demo run against your own workflow."
    }
  ],
  related: [
    { href: "/ndt-inspection-software", label: "NDT inspection software buyer's guide" },
    { href: "/erp", label: "Atlantis NDT ERP" },
    { href: "/erp-modules/work-order-management", label: "Work order management" },
    { href: "/erp-modules/inspection-scheduling", label: "Inspection scheduling" },
    { href: "/best-ndt-reporting-software-2026", label: "NDT reporting software" },
    { href: "/digital-twins", label: "Digital twin for asset integrity" }
  ]
};
var ASSET_INTEGRITY_MANAGEMENT_SOFTWARE = {
  slug: "asset-integrity-management-software",
  title: "Asset Integrity Management Software 2026 \u2014 NDT Data, Thickness Trends and Damage Maps on One Model",
  description: "Asset integrity management software that puts measured NDT data, CML thickness trends and damage mapping on a single 3D model. Compared against AVEVA, Bentley, Cognite, Maximo APM and GE Vernova. Free technical demo.",
  keywords: "asset integrity management software, asset integrity digital twin, inspection data management software, cml thickness trending software, corrosion management software, mechanical integrity software",
  h1: "Asset Integrity Management Software \u2014 Built Around the Inspection Data",
  eyebrow: "Platform \xB7 Atlantis Digital Twin",
  subhead: "Most AIM platforms started as historians, EAM suites or IoT platforms and had integrity bolted on. This one started with the UT reading.",
  intro: "Asset integrity management software exists to answer three questions: what condition is this equipment in, how fast is it changing, and where exactly is the damage. Answering them honestly requires measured inspection data at the component level \u2014 thickness readings tied to specific CMLs, indications tied to specific welds, damage mechanisms tied to specific process conditions. Platforms built outward from process historians or maintenance systems tend to model everything except that. Atlantis starts there.",
  softwareCategory: "BusinessApplication",
  enquiryVariant: "dt",
  sections: [
    {
      h2: "The three questions the software has to answer",
      bullets: [
        "Condition \u2014 what does measured wall thickness, indication history and damage-mechanism susceptibility say about this component today, at CML resolution rather than equipment-tag resolution.",
        "Trend \u2014 what corrosion rate does the measured thickness time series show per CML, rather than a generic default corrosion rate.",
        "Location \u2014 where on the physical asset the damage sits, and when the next inspection is due under API 510, API 570 or API 653."
      ]
    },
    {
      h2: "How the data gets in and stays trustworthy",
      paragraphs: [
        "Inspection data arrives from UT thickness surveys, PAUT and TOFD scans, radiography, MFL and inline inspection runs, corrosion mapping, and visual inspection reports \u2014 in whatever format the instrument produced. Each reading is bound to a CML or TML with a persistent identity, so a 2019 reading and a 2026 reading on the same location are genuinely comparable and corrosion rates are computed from a real time series rather than from an assumed default.",
        "Damage mechanisms are assigned per API RP 571 against the actual process service \u2014 sulfidation, naphthenic acid corrosion, HTHA per API 941, wet H2S cracking, chloride stress-corrosion cracking, corrosion under insulation, MIC, erosion-corrosion \u2014 so the inspection plan targets the mechanism that is actually credible for that circuit instead of applying a uniform scan coverage everywhere.",
        "Every record carries provenance: which procedure revision was in force, which technician performed the work and what their certification state was at that moment, and whether the instrument was in calibration. That is the bundle a regulator, insurer or client audit asks for, and assembling it after the fact is the single most expensive routine task integrity teams face."
      ]
    },
    {
      h2: "Thickness trends and damage mapping on measured data",
      paragraphs: [
        "An integrity decision is only as good as its condition input. When a corrosion rate is a default rather than a measurement, the inspection plan is a re-labelled calendar. Measured thickness trends per CML show which circuits are genuinely degrading and which have been proven stable for a decade.",
        "Thickness grids, corrosion maps and indications are rendered on the 3D model against the component they belong to, colour-coded by condition. The inspection records behind each reading are retained, so the basis for any decision can be reconstructed years later."
      ]
    },
    {
      h2: "Honest comparison with the platforms you are also evaluating",
      table: {
        caption: "Where each platform is genuinely the better choice",
        headers: ["Platform", "Origin", "Choose it when", "What integrity teams find missing"],
        rows: [
          ["AVEVA PI System / OSIsoft", "Process historian", "Time-series process data is the primary problem and you already run PI across the estate.", "Inspection data at CML resolution, damage mapping and inspection-evidence provenance are not native."],
          ["Bentley iTwin", "Engineering / BIM", "Capital projects and as-built engineering models dominate the use case.", "Damage mapping and thickness trending from measured NDT data."],
          ["Cognite Data Fusion", "Industrial data platform", "You have a large data-engineering team and want to contextualise many source systems.", "Out-of-the-box integrity workflow \u2014 it is a platform to build on, not an integrity application."],
          ["IBM Maximo APM / Hexagon EAM", "Maintenance & EAM", "Work management and reliability across a large owned estate is the priority.", "Thickness trending per CML, 3D damage mapping and inspection-technique provenance."],
          ["GE Vernova APM (Predix/Meridium lineage)", "OEM asset performance", "Rotating equipment and power-generation assets, especially GE-manufactured fleets.", "Fixed-equipment corrosion management driven by inspection data rather than sensor telemetry."],
          ["Atlantis Digital Twin", "NDT and inspection", "Fixed equipment \u2014 vessels, piping, tanks, exchangers, structures \u2014 where the integrity case rests on inspection data.", "Not the right tool for OEM rotating-machine telemetry models or enterprise-wide maintenance work management; integrate rather than replace."]
        ]
      }
    },
    {
      h2: "Deployment and data ownership",
      paragraphs: [
        "A first unit typically goes live in ten to fourteen weeks: geometry capture or import, CML register reconciliation, historical thickness import, damage-mechanism assignment, then dashboard and report configuration. Geometry can come from LiDAR or photogrammetry capture, from drone survey, or from existing BIM, CAD and isometrics \u2014 there is no requirement to re-scan a plant that already has good as-builts.",
        "Data ownership is explicit. Full REST API, documented schema and bulk export are available throughout, and the export includes the inspection history and assessment records, not just a rendering. Integrity data has a multi-decade life; it should never be hostage to a platform decision made in one budget cycle."
      ]
    }
  ],
  faqs: [
    {
      question: "What is asset integrity management software?",
      answer: "It is the system that holds the technical case for continued safe operation of fixed equipment: condition data from inspection, the damage mechanisms credible for each circuit, and the resulting inspection plan and due dates under API 510, API 570 and API 653. Done properly it is the evidence base an inspector, regulator, insurer or client audit examines."
    },
    {
      question: "How is an asset integrity digital twin different from a 3D model?",
      answer: "A 3D model is geometry. A digital twin binds live condition data to that geometry: each CML carries its thickness history, each weld its indication history, each circuit its governing damage mechanisms. The distinction that matters in practice is that a twin changes when new inspection data arrives \u2014 corrosion rates recompute and the condition map updates \u2014 whereas a model does not."
    },
    {
      question: "How does it integrate with SAP, Maximo or our historian?",
      answer: "Through documented connectors and a full REST API. Typical patterns: inspection findings raise notifications and work orders in SAP PM, Oracle eAM, IBM Maximo or ServiceNow; process conditions are read from AVEVA PI or OSIsoft historians to inform damage-mechanism susceptibility; and engineering geometry is imported from Bentley iTwin, AVEVA or plain CAD and isometrics. The intent is to sit alongside those systems rather than displace them."
    },
    {
      question: "What data do we need before starting?",
      answer: "At minimum: an equipment and circuit list, a CML register (even an imperfect one), historical thickness readings in any tabular format, process service conditions per circuit, and current inspection procedures. Geometry is helpful but not blocking \u2014 many first deployments start from isometrics and P&IDs and add scan-derived geometry later. Reconciling the CML register is usually the longest single task and is worth starting before the platform decision is made."
    },
    {
      question: "How long until the first unit is live?",
      answer: "Ten to fourteen weeks for a first process unit is typical: two to three weeks of geometry capture or import, three to four weeks reconciling the CML register and importing historical thickness data, two to three weeks assigning damage mechanisms per API RP 571, then dashboard configuration and integrity-team training. Subsequent units are substantially faster because the data model and conventions are already established."
    },
    {
      question: "Is Atlantis affordable compared with the enterprise APM suites?",
      answer: "The platform is positioned as affordable, accessible and fully customizable, and the commercial model is deliberately simpler than enterprise APM licensing \u2014 which typically combines platform fees, per-asset or per-tag fees and a substantial systems-integrator engagement. Scope, asset count and integration depth drive the terms, so request a tailored quote. What we will commit to publicly is the data-ownership position: full export, documented schema, no lock-in."
    }
  ],
  related: [
    { href: "/digital-twins", label: "Atlantis Digital Twin platform" },
    { href: "/digital-twin-vendor-comparison", label: "Digital twin vendor comparison" },
    { href: "/compare/atlantis-dt-vs-aveva-pi-system", label: "vs AVEVA PI System" },
    { href: "/compare/atlantis-dt-vs-ge-predix", label: "vs GE Predix / Vernova APM" },
    { href: "/compare/atlantis-dt-vs-bentley-itwin", label: "vs Bentley iTwin" },
    { href: "/digital-twin-roi-calculator", label: "Digital twin ROI calculator" }
  ]
};
var ERP_OIL_GAS_MALAYSIA = {
  slug: "erp-oil-gas-malaysia",
  title: "ERP Software for Oil & Gas in Malaysia 2026 \u2014 PETRONAS-Aligned Inspection & Contractor ERP",
  description: "ERP for oil and gas companies in Malaysia: PETRONAS vendor compliance, SWEC/CIDB documentation, DOSH requirements, multi-currency MYR job costing, certification and calibration control. Free demo for Kuala Lumpur, Kerteh, Miri, Bintulu and Labuan operators.",
  keywords: "erp oil and gas malaysia, erp system oil and gas malaysia, erp software for oil and gas malaysia, erp solution for oil and gas malaysia, erp software provider for oil and gas malaysia, petronas vendor erp, oil and gas erp kuala lumpur",
  h1: "ERP for Oil & Gas Companies in Malaysia",
  eyebrow: "Regional guide \xB7 Malaysia",
  subhead: "Built around the two things that decide whether a Malaysian oil & gas contractor keeps working: PETRONAS vendor compliance and documented technician competency.",
  intro: "For inspection contractors, fabricators and service companies working the Malaysian upstream and downstream chain, the ERP question is not really about accounting. It is about whether you can demonstrate, on demand, that every technician on a PETRONAS site is currently certified, every instrument is in calibration, every procedure is the approved revision, and every job is costed accurately enough to survive a rate review. This page covers what that requires in the Malaysian context.",
  softwareCategory: "BusinessApplication",
  enquiryVariant: "erp",
  sections: [
    {
      h2: "What is specific about the Malaysian market",
      bullets: [
        "PETRONAS licensing and vendor registration governs access to most upstream and downstream work; maintaining the documentary evidence behind that registration is an ongoing operational task, not a one-off submission.",
        "Contractor safety and competency expectations on PETRONAS facilities require technician-level records to be produced quickly during pre-mobilisation checks \u2014 an expired certificate found at the gate costs a mobilisation.",
        "DOSH (Department of Occupational Safety and Health) requirements under the Occupational Safety and Health Act and the Factories and Machinery Act shape pressure-equipment and lifting inspection regimes.",
        "Work concentrates in distinct clusters \u2014 Kuala Lumpur head offices, Kerteh and Paka in Terengganu, Miri and Bintulu in Sarawak, Labuan offshore support, Pengerang and Johor downstream \u2014 so multi-site scheduling and mobilisation costing matter more than in a single-hub market.",
        "Multi-currency reality: contracts denominated in MYR, equipment and consumables purchased in USD, and regional work billed in SGD or IDR, all needing to reconcile in one job-costing view."
      ]
    },
    {
      h2: "The capabilities that matter here",
      bullets: [
        "Certification currency with hard lockout \u2014 ASNT SNT-TC-1A, ISO 9712, CIDB and client-specific approvals tracked per technician with automatic removal from dispatch on lapse.",
        "Calibration control with ISO 17025 traceability for flaw detectors, thickness gauges, probes, wedges and reference blocks, exportable as an evidence pack for a client audit.",
        "Mobilisation and offshore rotation costing \u2014 travel, standby, boat and helicopter transfer, offshore allowances and rotation schedules costed against the contract, not absorbed as overhead.",
        "Multi-site work-order routing across Peninsular Malaysia, Sarawak and Sabah with crew competency matching built into dispatch.",
        "Offline field capture for offshore platforms, FPSOs and remote Sarawak sites where connectivity is unreliable.",
        "Document control on procedures and written practices under ISO 9001, with the applicable revision recoverable for any historical inspection date.",
        "MYR-primary multi-currency accounting with SST handling and per-contract margin visibility."
      ]
    },
    {
      h2: "Who this is built for",
      paragraphs: [
        "NDT and inspection contractors serving PETRONAS, PETRONAS Carigali, PETRONAS Chemicals, Shell Malaysia, ExxonMobil, Hess, Murphy Oil, Sarawak Shell and the Pengerang integrated complex; fabrication yards and welding contractors working to ASME and API codes; calibration and materials-testing laboratories operating under ISO 17025; and integrity and turnaround service providers supporting refinery, LNG and petrochemical shutdowns."
      ]
    },
    {
      h2: "Why an Atlantis ERP foundation suits Malaysian contractors",
      paragraphs: [
        "Tier-1 ERP implementations in this market routinely stall on cost and timeline, and the NDT-specific layer ends up as bespoke development that has to be re-tested at every upgrade. Atlantis NDT ERP is, which means the inspection-specific modules \u2014 certification, calibration, technique control, inspection scheduling \u2014 are product features rather than custom code, while the surrounding business apps (accounting, HR, procurement, CRM, project management, inventory, field service) are standard and well supported.",
        "Practically, that means a Malaysian contractor can start with certification tracking and calibration control, prove the audit-evidence path against one PETRONAS contract, and extend into scheduling, job costing and field capture without a second implementation project. Affordable, accessible and fully customizable is the positioning; the commercial terms depend on scope and team size, so request a tailored quote."
      ]
    }
  ],
  faqs: [
    {
      question: "Which ERP is best for an oil and gas company in Malaysia?",
      answer: "It depends on which side of the contract you sit. Operators and large EPCs generally standardise on SAP or Oracle for group financial consolidation. Inspection contractors, fabricators and service companies usually get better value from a platform where certification currency, calibration traceability, inspection scheduling and job costing are native, because those are the capabilities that determine whether they retain vendor registration and win rate reviews. Atlantis NDT ERP is built for that second group and integrates with the operator's SAP or Maximo where required."
    },
    {
      question: "Does it support PETRONAS vendor compliance requirements?",
      answer: "It maintains the evidence base those requirements rest on: current technician certification per method with automatic lockout on lapse, instrument and reference-block calibration with traceability certificates, approved procedure revisions under document control, and audit-ready assembly of all three for any given job or date. Formal registration and licensing remain your submission to make; the platform makes producing the supporting evidence a routine export rather than a scramble."
    },
    {
      question: "Can it handle multi-currency contracts in MYR, USD and SGD?",
      answer: "Yes. Contracts, purchases and billing can each run in their own currency with MYR as the reporting base, and job costing rolls up across currencies so per-contract margin is visible without manual reconciliation. SST treatment is configured during implementation, and regional work billed into Singapore, Brunei or Indonesia is handled in the same ledger."
    },
    {
      question: "Does it work offshore and at remote Sarawak sites?",
      answer: "Yes \u2014 field capture is fully offline-capable. Inspections are completed on a phone or tablet without connectivity, including photos and sketches, and synchronise when signal returns with conflict handling so nothing is silently overwritten. This matters on FPSOs, offshore platforms and remote Miri and Bintulu locations where assuming connectivity is not realistic."
    },
    {
      question: "How long does implementation take for a Malaysian contractor?",
      answer: "Six to ten weeks for a typical 20\u201360 technician business: discovery and migration mapping, configuration of certification, calibration and work-order modules against your written practice, a pilot on one client contract, then rollout. Migration of historical certification records and calibration certificates is included and is usually the reason the timeline is measured in weeks."
    },
    {
      question: "Is there local support?",
      answer: "Implementation and support are delivered remotely with on-site engagement arranged as required, and the team works across Asia-Pacific and Middle East time zones. Because the platform is fully customized, there is also a substantial independent Atlantis ERP partner ecosystem in Malaysia and Singapore, which means you are not dependent on a single supplier for future changes \u2014 a genuine consideration when choosing a long-lived business system."
    }
  ],
  related: [
    { href: "/ndt-erp-kuala-lumpur", label: "NDT ERP in Kuala Lumpur" },
    { href: "/ndt-erp-bintulu", label: "NDT ERP in Bintulu" },
    { href: "/ndt-erp-miri", label: "NDT ERP in Miri" },
    { href: "/erp-industries/oilfield-services-kuala-lumpur", label: "Oilfield services ERP \u2014 Kuala Lumpur" },
    { href: "/inspection-management-software", label: "Inspection management software" },
    { href: "/erp", label: "Atlantis NDT ERP" }
  ]
};
var ERP_CONSTRUCTION_SINGAPORE = {
  slug: "erp-construction-singapore",
  title: "Construction ERP Software Singapore 2026 \u2014 QA/QC, BCA & WSH Compliance Built In",
  description: "Construction ERP for Singapore contractors and QA/QC teams: BCA and WSH documentation, ISO 17020/17025 inspection evidence, multi-project cost control, welding and NDT records for Jurong Island and Tuas projects. Free demo.",
  keywords: "construction erp singapore, construction erp software singapore, erp construction singapore, qa qc software singapore, construction quality management software singapore, bca compliance software",
  h1: "Construction ERP for Singapore Contractors and QA/QC Teams",
  eyebrow: "Regional guide \xB7 Singapore",
  subhead: "Where a Singapore construction project actually gets audited is the quality record \u2014 welder qualifications, NDT results, material traceability and inspection sign-offs. That is what this system is built around.",
  intro: "Singapore construction and fabrication work carries an unusually documentation-heavy compliance load: BCA requirements, Workplace Safety and Health obligations, client and consultant inspection regimes, and \u2014 on Jurong Island, Tuas and marine projects \u2014 full welding and NDT traceability to ASME and API codes. Generic construction ERP handles the money and the schedule well and the quality record badly. This platform is built the other way round, then joined up.",
  softwareCategory: "BusinessApplication",
  enquiryVariant: "erp",
  sections: [
    {
      h2: "What Singapore projects get audited on",
      bullets: [
        "Welder and operator qualification \u2014 WPS/PQR/WPQ records current and matched to the joint actually welded, with continuity maintained.",
        "NDT coverage and results \u2014 RT, UT, PAUT, MT and PT records tied to specific joints and drawings, with technician certification and instrument calibration state captured at the time of test.",
        "Material traceability \u2014 mill certificates carried through from receipt to the installed component, recoverable by heat number.",
        "Inspection and test plan execution \u2014 ITP hold and witness points signed by the right party at the right time, with evidence attached.",
        "Non-conformance and corrective action \u2014 NCRs raised, dispositioned and closed with a defensible audit trail.",
        "Safety documentation under WSH \u2014 permits, risk assessments and toolbox records linked to the work they cover."
      ]
    },
    {
      h2: "Multi-project cost control that stays honest",
      paragraphs: [
        "Singapore contractors typically run several projects across distinct sites \u2014 Jurong Island petrochemical, Tuas port and industrial, Changi and city-centre construction, Sembcorp and Keppel marine yards \u2014 with shared crews and shared equipment. Job costing at work-order level, with labour, subcontracted NDT, equipment and consumables allocated to the project that consumed them, is what makes per-project margin visible while the project is still running rather than at final account.",
        "Progress and milestone billing, retention handling and variation tracking are handled in the same ledger, and multi-currency purchasing (SGD contracts, USD equipment, MYR subcontract labour) reconciles without a parallel spreadsheet."
      ]
    },
    {
      h2: "Where the QA/QC layer differs from generic construction ERP",
      table: {
        caption: "Generic construction ERP vs an inspection-native platform",
        headers: ["Capability", "Generic construction ERP", "Atlantis NDT ERP"],
        rows: [
          ["Welder qualification currency", "Usually a document attachment", "Structured record with continuity tracking and assignment lockout on lapse"],
          ["NDT results per joint", "Attached PDFs", "Structured results tied to joint, drawing, technician certification and instrument calibration"],
          ["Instrument calibration", "Rarely modelled", "Full register with intervals, certificates and ISO 17025 traceability"],
          ["ITP execution", "Schedule task", "Hold/witness points with signatory identity and evidence attached"],
          ["Audit evidence assembly", "Manual document hunt", "Single export bundling qualification, calibration, procedure revision and results"],
          ["Material traceability", "Procurement record", "Heat-number traceability from receipt to installed component"]
        ]
      }
    },
    {
      h2: "Who this suits in Singapore",
      paragraphs: [
        "Construction and fabrication contractors working Jurong Island process plants, Tuas industrial and port projects, marine and offshore yards, and building projects with significant structural steel content; QA/QC departments needing to defend a quality record to a consultant or client; and third-party inspection and testing companies operating under ISO 17020 or ISO 17025 accreditation whose entire commercial position depends on the integrity of that record."
      ]
    },
    {
      h2: "Practical rollout",
      paragraphs: [
        "Most Singapore contractors start with the quality layer \u2014 welder qualification, NDT records, ITP execution and NCR management \u2014 because that is where audit exposure is highest and the value is provable within one project. Cost control, procurement, HR and CRM are added afterwards on the same Atlantis ERP foundation, without a second implementation. Affordable, accessible and fully customizable; scope and team size drive the commercial terms, so request a tailored quote alongside a demo run against one of your live projects."
      ]
    }
  ],
  faqs: [
    {
      question: "What is the best construction ERP for a Singapore contractor?",
      answer: "If your main risk is programme and cost across many concurrent projects, a mainstream construction ERP is a sound choice. If your main risk is the quality record \u2014 welder qualifications, NDT results, material traceability and ITP evidence in front of a consultant, client or accreditation body \u2014 then an inspection-native platform is a better fit, because those records are structured data rather than attached documents. Atlantis NDT ERP is built for the second case and covers project cost control on the same platform."
    },
    {
      question: "Does it help with BCA and WSH documentation?",
      answer: "It maintains the underlying evidence in structured, exportable form: personnel qualification and currency, equipment calibration, procedure revisions under document control, inspection and test results tied to the work they cover, permits and risk assessments linked to their activities, and NCR disposition trails. Submissions remain yours to make; the platform turns producing the supporting evidence into an export rather than a document hunt across shared drives."
    },
    {
      question: "Can it handle welding and NDT records to ASME and API codes?",
      answer: "Yes. WPS, PQR and WPQ records with continuity tracking; NDT results by method tied to joint and drawing; acceptance criteria per the governing code \u2014 ASME Section VIII and Section IX, ASME B31.1 and B31.3, AWS D1.1, API 1104 and API 650 as applicable; and technician certification plus instrument calibration state captured at the moment of test rather than at upload."
    },
    {
      question: "Does it work for both the main contractor and third-party inspection companies?",
      answer: "Yes, with different configurations. Main contractors and fabricators use the project, cost-control and QA/QC modules together. Third-party inspection and testing companies use the service-provider configuration \u2014 multi-client asset registers, per-client reporting templates, mobile field capture and job costing \u2014 while sharing the same certification and calibration core."
    },
    {
      question: "How does it handle multi-project resource sharing?",
      answer: "Crews, individual technicians and equipment are scheduled against projects with competency and calibration matching applied at dispatch, and their time and usage cost to the project that consumed them. That gives live per-project margin instead of a final-account surprise, and it prevents the common failure of dispatching a technician whose certification lapsed while they were assigned elsewhere."
    },
    {
      question: "What is the implementation timeline?",
      answer: "Six to ten weeks for a typical mid-size contractor: discovery and mapping of your quality system and cost structure, configuration of the QA/QC and project modules, a pilot on one live project, then rollout. Starting with the quality layer on a single project is the fastest route to a provable result, and the rest is added without replatforming."
    }
  ],
  related: [
    { href: "/erp-industries/construction-quality-assurance-singapore", label: "Construction QA ERP \u2014 Singapore" },
    { href: "/ndt-erp-singapore", label: "NDT ERP in Singapore" },
    { href: "/erp-industries/welding-fabrication-shops-singapore", label: "Welding & fabrication ERP \u2014 Singapore" },
    { href: "/inspection-management-software", label: "Inspection management software" },
    { href: "/ndt-inspection-software", label: "NDT inspection software guide" },
    { href: "/erp", label: "Atlantis NDT ERP" }
  ]
};
var MONEY_PAGES = [
  NDT_INSPECTION_SOFTWARE,
  INSPECTION_MANAGEMENT_SOFTWARE,
  ASSET_INTEGRITY_MANAGEMENT_SOFTWARE,
  ERP_OIL_GAS_MALAYSIA,
  ERP_CONSTRUCTION_SINGAPORE
];
var MONEY_PAGES_BY_SLUG = Object.fromEntries(
  MONEY_PAGES.map((p) => [p.slug, p])
);
function getMoneyPage(slug) {
  return MONEY_PAGES_BY_SLUG[slug];
}
export {
  MONEY_PAGES,
  MONEY_PAGES_BY_SLUG,
  getMoneyPage
};
