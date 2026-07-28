// Authoritative DT competitor comparisons. Rendered by CompetitorDeepDive. Auto-built 2026-07-24.
export interface CompetitorKnowledge { competitorName: string; positioning: string; whereCompetitorWins: string[]; whereAtlantisWins: string; ndtGaps: string[]; migrationPath: string; comparisonRows: {factor:string;atlantis:string;competitor:string}[]; faqs: [string,string][]; }
export const dtCompetitorKnowledge: Record<string, CompetitorKnowledge> = {
  "ge-predix": {
    "competitorName": "GE Predix (GE Digital Industrial IoT Platform)",
    "positioning": "Predix was GE's industrial IoT PaaS, launched to connect and analyze data from industrial machines at scale, originally pitched as an 'Android for industrial internet.' After broad multi-industry ambitions proved too costly to sustain, GE narrowed Predix to oil & gas, aviation, and power, then spun its digital business into a separate entity. Following GE's 2024 breakup into GE Aerospace, GE Vernova, and GE HealthCare, Predix's surviving capabilities now live mostly inside GE Vernova's asset performance management (APM) suite for power generation assets.",
    "whereCompetitorWins": [
      "Deep OEM telemetry integration for GE-manufactured turbines, generators, and power equipment where sensor data models are pre-built",
      "Established GE Vernova customer relationships and long-standing install base in power generation and grid operations",
      "Mature rotating-equipment failure-prediction analytics built from decades of GE turbine performance data",
      "Useful if a plant is already standardized on GE Vernova APM for its GE-built rotating assets and wants single-vendor continuity"
    ],
    "whereAtlantisWins": "Atlantis is purpose-built for fixed-equipment integrity, not rotating-machinery telemetry. It natively models CML grids, UT/PAUT thickness readings, RT/MT/PT indications, and weld registers on a live 3D asset twin, with API 510/570/653 inspection workflows and API 579 fitness-for-service built in. Because Atlantis isn't tied to any single OEM's equipment or sensor catalog, it works equally well across mixed-vendor plants (Bechtel-built, KBR-built, or legacy assets from any manufacturer). Deployment is measured in weeks, not the multi-year platform buildouts Predix required, and the platform is actively developed and customized per client rather than inherited from a business currently being restructured and absorbed into a larger portfolio.",
    "ndtGaps": [
      "No native corrosion monitoring location (CML) or thickness-trending database",
      "No structured ingestion for UT, RT, MT, PT, or phased array indications",
      "No fitness-for-service (API 579) or risk-based inspection (API 580) calculation engine",
      "Built around rotating-equipment vibration/performance signals, not static vessel, tank, or piping integrity data",
      "No weld register or inspection report/radiographic film management tied to a 3D model"
    ],
    "migrationPath": "Most Predix/GE Vernova APM customers keep their rotating-equipment monitoring in place and layer Atlantis on top for fixed-equipment integrity, since the two data domains barely overlap. Atlantis ingests historical inspection records (CML logs, RT/UT reports, PDFs) via bulk import, then connects to plant historians or GE Vernova APM outputs through standard APIs where operators want a single pane of glass. For sites actively being migrated off Predix as GE Vernova consolidates its APM stack, Atlantis can stand up fixed-equipment integrity management independently within weeks, with no dependency on GE's platform roadmap.",
    "comparisonRows": [
      {
        "factor": "NDT/Inspection Data Depth",
        "atlantis": "Native CML grids, UT/PAUT thickness, RT/MT/PT indications, weld registers on a live 3D twin",
        "competitor": "No NDT data model; focused on rotating-equipment sensor telemetry"
      },
      {
        "factor": "FFS & RBI (API 579/580)",
        "atlantis": "Built-in fitness-for-service and risk-based inspection workflows",
        "competitor": "Not offered; would require separate third-party tools"
      },
      {
        "factor": "Deployment Speed",
        "atlantis": "Weeks, guided onboarding, pre-built inspection templates",
        "competitor": "Historically multi-year enterprise rollouts"
      },
      {
        "factor": "Customization",
        "atlantis": "Fully customizable per client, quote on request",
        "competitor": "Limited; platform now being consolidated into GE Vernova APM roadmap"
      },
      {
        "factor": "System Integration",
        "atlantis": "API-based integration with historians, ERPs, and OEM APM tools",
        "competitor": "Deep GE OEM sensor integration; weaker for non-GE assets"
      },
      {
        "factor": "Target User / Buyer",
        "atlantis": "Asset integrity, inspection, and reliability teams across any industry or OEM mix",
        "competitor": "Power generation operators standardized on GE Vernova equipment"
      },
      {
        "factor": "Pricing Model",
        "atlantis": "Affordable SaaS, fully customizable, quote on request",
        "competitor": "Enterprise platform licensing bundled within GE Vernova APM contracts"
      }
    ],
    "faqs": [
      [
        "Is GE Predix still available as a standalone product?",
        "Predix's original standalone platform has been folded into GE Vernova's asset performance management suite following GE's 2024 corporate breakup, and GE has publicly narrowed its industrial IoT focus to oil & gas, aviation, and power generation rather than a general-purpose platform."
      ],
      [
        "Can Atlantis replace GE Vernova APM entirely?",
        "For rotating-equipment vibration and performance monitoring on GE-built turbines, GE Vernova APM has deep OEM-specific advantages. Atlantis is typically deployed alongside it to own fixed-equipment integrity (vessels, tanks, piping) where Predix-derived tools have no native capability."
      ],
      [
        "Why would a plant already on GE's platform consider Atlantis?",
        "Plants that need FFS, RBI, and NDT-driven inspection management for static equipment find that GE's tools don't cover this domain at all, since they were built for machinery telemetry, not corrosion and weld integrity."
      ]
    ]
  },
  "siemens-mindsphere": {
    "competitorName": "Siemens MindSphere (now Siemens Insights Hub, part of Siemens Xcelerator)",
    "positioning": "MindSphere was Siemens' cloud-based open IoT operating system for connecting industrial machines, collecting operational data, and building analytics applications on top of it. Siemens has since rebranded and folded it into Insights Hub under the broader Siemens Xcelerator software portfolio, tightening integration with Siemens' automation stack (TIA Portal, SIMATIC, Industrial Edge). It remains strongest as a machine- and process-level connectivity and analytics layer for discrete and process manufacturing, not an asset-integrity or inspection platform.",
    "whereCompetitorWins": [
      "Deep, native integration with Siemens automation hardware (SIMATIC PLCs, TIA Portal) and Industrial Edge for real-time machine-level connectivity",
      "Strong fit for discrete manufacturing floor monitoring, OEE, and machine-builder applications where Siemens controls dominate",
      "Broad Siemens Xcelerator ecosystem giving access to PLM, automation, and energy management tools under one commercial umbrella",
      "Global Siemens support infrastructure and enterprise-scale cloud reliability for large multi-site manufacturers"
    ],
    "whereAtlantisWins": "Insights Hub is a general industrial data/analytics layer with no concept of corrosion, welds, or code-driven inspection. Atlantis is built specifically for fixed-equipment integrity: CML/thickness trending, UT/PAUT/RT/MT/PT indication mapping onto a live 3D asset twin, weld registers, and API 510/570/653 workflows with API 579 fitness-for-service and API 580 RBI calculations built in. Where Insights Hub requires custom app development on top of a generic data platform to approximate any of this, Atlantis delivers it out of the box, deploys in weeks rather than requiring a Siemens automation-stack investment, and is fully customizable to a client's own inspection standards and asset hierarchy without vendor lock-in to Siemens hardware.",
    "ndtGaps": [
      "No native data model for CMLs, thickness readings, or corrosion trending",
      "No structured schema for UT, PAUT, RT, MT, or PT indications",
      "No fitness-for-service (API 579) or risk-based inspection (API 580) engine",
      "No weld register or radiographic film/report management",
      "Asset visualization is machine/process-centric, not built for static vessel, tank, or piping geometry with mapped inspection findings"
    ],
    "migrationPath": "Insights Hub and Atlantis address different data domains, so most sites keep Insights Hub for machine-level connectivity (especially on Siemens-controlled production lines) and add Atlantis specifically for fixed-equipment integrity. Historical inspection data can be bulk-imported into Atlantis regardless of source, and where Insights Hub already aggregates process data relevant to corrosion modeling (temperature, flow, pressure), Atlantis connects via API to enrich its RBI risk calculations. No rip-and-replace of the Siemens automation stack is required.",
    "comparisonRows": [
      {
        "factor": "NDT/Inspection Data Depth",
        "atlantis": "Native CML, thickness, and multi-method NDT indication tracking on a 3D twin",
        "competitor": "No inspection data model; general industrial telemetry"
      },
      {
        "factor": "FFS & RBI (API 579/580)",
        "atlantis": "Built-in calculation engines",
        "competitor": "Not offered"
      },
      {
        "factor": "Deployment Speed",
        "atlantis": "Weeks, no dependency on specific automation hardware",
        "competitor": "Faster on existing Siemens-controlled lines; slower where custom apps are needed"
      },
      {
        "factor": "Customization",
        "atlantis": "Fully customizable, vendor-agnostic",
        "competitor": "Customizable within Siemens Xcelerator ecosystem"
      },
      {
        "factor": "System Integration",
        "atlantis": "API-first, works with any historian, ERP, or automation vendor",
        "competitor": "Strongest with Siemens SIMATIC/TIA Portal hardware"
      },
      {
        "factor": "Target User / Buyer",
        "atlantis": "Asset integrity and inspection teams managing fixed equipment",
        "competitor": "Manufacturing engineering and OT teams on Siemens-controlled lines"
      },
      {
        "factor": "Pricing Model",
        "atlantis": "Affordable SaaS, fully customizable, quote on request",
        "competitor": "Enterprise subscription bundled within Siemens Xcelerator licensing"
      }
    ],
    "faqs": [
      [
        "Is MindSphere still the correct name?",
        "Siemens has rebranded MindSphere as Insights Hub under its Siemens Xcelerator portfolio; existing MindSphere customers continue to receive support through the transition."
      ],
      [
        "Can Insights Hub track vessel thickness and corrosion?",
        "Not natively. It has no built-in CML, corrosion-rate, or inspection-finding data model; achieving this would require significant custom application development on the platform."
      ],
      [
        "Does adding Atlantis require removing Siemens automation hardware?",
        "No. Atlantis operates independently as a fixed-equipment integrity layer and integrates via API with existing Siemens or any other automation/historian infrastructure."
      ]
    ]
  },
  "cognite-data-fusion": {
    "competitorName": "Cognite Data Fusion",
    "positioning": "Cognite Data Fusion is an industrial DataOps and contextualization platform that connects and unifies data across OT and IT systems (SCADA, historians, ERP, documents, 3D models) into a knowledge graph, with a digital twin canvas for visualization. Born out of Norwegian oil & gas heritage (Aker/Equinor), it's strongest as a flexible, developer-oriented data integration layer for building custom industrial applications, particularly in upstream and offshore oil & gas.",
    "whereCompetitorWins": [
      "Best-in-class data contextualization and knowledge-graph modeling across highly heterogeneous OT/IT data sources",
      "Strong developer-first, API-driven architecture for teams that want to build fully bespoke industrial applications",
      "Deep heritage and reference customers in Nordic/European offshore oil & gas with complex multi-system data landscapes",
      "Good fit for organizations with in-house data engineering teams who want a general-purpose platform rather than an out-of-the-box vertical solution"
    ],
    "whereAtlantisWins": "Cognite Data Fusion gives you the raw materials to build an inspection application; Atlantis is the finished, purpose-built application itself. Atlantis ships with native CML/thickness trending, UT/PAUT/RT/MT/PT indication mapping onto a 3D twin, weld registers, and API 510/570/653 workflows with API 579/580 calculations already configured, so there's no months-long data-engineering project before an inspector or integrity engineer sees value. Cognite requires dedicated developers to model NDT data in its graph, build UI, and hand-code FFS/RBI logic; Atlantis delivers this in weeks and remains fully customizable to a client's specific standards and asset hierarchy without a data-engineering team on staff.",
    "ndtGaps": [
      "No pre-built NDT data model, industrial context modules exist but nothing purpose-built for CMLs or thickness trending",
      "No out-of-box fitness-for-service (API 579) or risk-based inspection (API 580) calculation engine",
      "No native weld register or radiographic report/film management",
      "Achieving inspection workflows requires custom application development on top of the contextualization layer",
      "3D digital twin canvas is generic, not tuned for mapping inspection findings (indications, CMLs) onto asset geometry"
    ],
    "migrationPath": "Where Cognite Data Fusion is already deployed as a plant's central data contextualization layer, Atlantis integrates via API to pull relevant process data (temperature, pressure, flow) that feeds RBI risk scoring, while owning the inspection-specific data model itself. Historical inspection records can be migrated into Atlantis directly regardless of where they currently live. Organizations that started building custom NDT/inspection apps on Cognite can retire that in-house development effort in favor of Atlantis's ready-made workflows, reducing ongoing engineering overhead.",
    "comparisonRows": [
      {
        "factor": "NDT/Inspection Data Depth",
        "atlantis": "Purpose-built, native CML/thickness/multi-method NDT tracking",
        "competitor": "Generic data model; NDT structure must be custom-built"
      },
      {
        "factor": "FFS & RBI (API 579/580)",
        "atlantis": "Pre-configured calculation engines",
        "competitor": "Not offered; requires custom development"
      },
      {
        "factor": "Deployment Speed",
        "atlantis": "Weeks, ready-made inspection workflows",
        "competitor": "Months, requires data engineering and app-building effort"
      },
      {
        "factor": "Customization",
        "atlantis": "Fully customizable out of the box",
        "competitor": "Maximally flexible but requires developer resources to realize"
      },
      {
        "factor": "System Integration",
        "atlantis": "API-first, integrates with historians, ERPs, and contextualization layers",
        "competitor": "Excellent OT/IT contextualization; strongest as an integration hub"
      },
      {
        "factor": "Target User / Buyer",
        "atlantis": "Asset integrity and inspection teams needing a ready-to-use tool",
        "competitor": "Data engineering teams building custom industrial applications"
      },
      {
        "factor": "Pricing Model",
        "atlantis": "Affordable SaaS, fully customizable, quote on request",
        "competitor": "Enterprise data-platform subscription plus internal development cost"
      }
    ],
    "faqs": [
      [
        "Can Cognite Data Fusion do fitness-for-service calculations?",
        "Not natively. It is a data contextualization and integration platform; FFS/RBI logic per API 579/580 would need to be custom-built by a development team."
      ],
      [
        "Do we need to remove Cognite Data Fusion to use Atlantis?",
        "No. Atlantis can consume relevant process data from Cognite via API while owning the inspection-specific data model and FFS/RBI workflows natively."
      ],
      [
        "Why does Cognite require more engineering effort than Atlantis?",
        "Cognite Data Fusion is intentionally a general-purpose platform for building custom applications; Atlantis is a finished, vertical-specific product for fixed-equipment integrity, so the configuration work is already done."
      ]
    ]
  },
  "aveva-pi-system": {
    "competitorName": "AVEVA PI System (formerly OSIsoft PI, now part of AVEVA's Unified Operations Center portfolio)",
    "positioning": "AVEVA PI System is the current branding of the industry-standard real-time operational data historian following AVEVA's 2021 acquisition of OSIsoft. It captures, stores, and streams high-fidelity time-series process data (temperature, pressure, flow, vibration) at massive scale and is now positioned within AVEVA's broader Unified Operations Center, Connect, and Data Hub cloud portfolio alongside AVEVA's engineering, planning, and operations software suite.",
    "whereCompetitorWins": [
      "Unmatched reliability and performance for real-time, high-frequency process data historization at enterprise scale",
      "Massive existing installed base across oil & gas, power, and utilities, making it the de facto standard for plant historian data",
      "PI Asset Framework (PI AF) provides a strong, mature asset hierarchy model that other applications (including Atlantis) can integrate with",
      "Now bundled within AVEVA's wider engineering and operations software suite, giving access to a broad portfolio under one commercial relationship"
    ],
    "whereAtlantisWins": "AVEVA PI System stores process telemetry; it has no concept of NDT inspection data, weld integrity, or corrosion mechanisms. Atlantis is built to natively model CMLs, UT/PAUT thickness readings, RT/MT/PT indications, and weld registers on a live 3D asset twin, with API 510/570/653 inspection workflows and API 579 fitness-for-service/API 580 RBI calculations included. Atlantis integrates with PI System via PI Web API to pull relevant process variables into its risk models rather than competing with it, deploys in weeks, and remains fully customizable to a client's inspection standards, whereas extending PI System into inspection management would require significant custom development or a separate specialized module.",
    "ndtGaps": [
      "No native CML or thickness-trending data model; PI stores raw time-series tags, not inspection findings",
      "No structured schema for UT, RT, MT, PT, or phased array indications",
      "No fitness-for-service (API 579) or risk-based inspection (API 580) calculation engine",
      "No weld register or radiographic report/film management",
      "No 3D asset visualization mapping inspection findings onto geometry; PI Vision dashboards are time-series-chart oriented"
    ],
    "migrationPath": "PI System coexistence is the norm, not migration. Atlantis connects to PI System via PI Web API or PI AF SDK to ingest relevant process variables (temperature, pressure, corrosion-relevant conditions) that feed its RBI risk scoring, while Atlantis independently owns the NDT/inspection data domain that PI System was never designed to hold. Historical inspection records (CML logs, UT/RT reports) are imported directly into Atlantis regardless of whether they previously lived in spreadsheets, PDFs, or a separate inspection database.",
    "comparisonRows": [
      {
        "factor": "NDT/Inspection Data Depth",
        "atlantis": "Native CML, thickness, and multi-method NDT indication tracking on a 3D twin",
        "competitor": "None; stores raw process time-series tags only"
      },
      {
        "factor": "FFS & RBI (API 579/580)",
        "atlantis": "Built-in calculation engines",
        "competitor": "Not offered"
      },
      {
        "factor": "Deployment Speed",
        "atlantis": "Weeks, ready-made inspection workflows",
        "competitor": "Historian deployment itself can be fast; inspection functionality would need custom build"
      },
      {
        "factor": "Customization",
        "atlantis": "Fully customizable, quote on request",
        "competitor": "Customizable within AVEVA's broader operations portfolio"
      },
      {
        "factor": "System Integration",
        "atlantis": "Integrates with PI System via PI Web API/AF SDK",
        "competitor": "Industry-standard historian with 450+ third-party interfaces"
      },
      {
        "factor": "Target User / Buyer",
        "atlantis": "Asset integrity, inspection, and reliability engineers",
        "competitor": "Process/operations engineers needing real-time telemetry"
      },
      {
        "factor": "Pricing Model",
        "atlantis": "Affordable SaaS, fully customizable, quote on request",
        "competitor": "Enterprise historian licensing within AVEVA's software portfolio"
      }
    ],
    "faqs": [
      [
        "Is AVEVA PI System the same as OSIsoft PI?",
        "Yes, functionally. AVEVA acquired OSIsoft in 2021 and has integrated PI System into its broader Unified Operations Center and Connect portfolio; many plants still refer to it by its legacy OSIsoft PI name."
      ],
      [
        "Can PI System replace an NDT inspection platform?",
        "No. PI System historizes real-time process telemetry; it has no built-in model for CMLs, thickness readings, weld registers, or FFS/RBI calculations, which are core to fixed-equipment integrity management."
      ],
      [
        "Do we need to migrate off PI System to adopt Atlantis?",
        "No. Atlantis is designed to integrate with PI System via its published APIs, pulling relevant process data while owning the inspection-specific data domain natively."
      ]
    ]
  },
  "bentley-itwin": {
    "competitorName": "Bentley iTwin (iTwin Platform / iTwin Experience Cloud)",
    "positioning": "Bentley's iTwin is an infrastructure digital twin platform and developer SDK built around Bentley's engineering software ecosystem (MicroStation, OpenPlant, ProjectWise). It excels at creating high-fidelity, BIM-centric digital twins for civil, construction, and capital-project engineering, combining engineering models, reality meshes, and construction/IoT data for infrastructure and plant design and build phases.",
    "whereCompetitorWins": [
      "Best-in-class BIM/engineering-model fidelity for capital projects still in design, construction, or commissioning phases",
      "Strong integration with Bentley's CAD/engineering ecosystem (MicroStation, OpenPlant, ProjectWise) for organizations already standardized on it",
      "Reality-mesh and point-cloud handling for large infrastructure and construction-phase site visualization",
      "Good fit for EPC firms managing the design-through-construction lifecycle of new plant builds"
    ],
    "whereAtlantisWins": "iTwin is engineering/construction-model centric; it has no native concept of inspection findings, corrosion trending, or code-based fitness-for-service. Atlantis is purpose-built for the operating asset's ongoing integrity: it maps live CML/thickness data, UT/PAUT/RT/MT/PT indications, and weld registers directly onto a 3D twin, with API 510/570/653 inspection workflows and API 579/580 FFS/RBI calculations built in. Where iTwin requires SDK-level custom development to add inspection data structures, Atlantis delivers this out of the box, deploys in weeks, and stays affordable and fully customizable for operations and integrity teams rather than requiring a Bentley engineering-software investment.",
    "ndtGaps": [
      "No native CML, thickness-trending, or corrosion-rate data model",
      "No structured schema for UT, PAUT, RT, MT, or PT indications",
      "No fitness-for-service (API 579) or risk-based inspection (API 580) calculation engine",
      "No weld register or radiographic report/film management",
      "Requires SDK-level custom development to add any operational inspection workflows; not available out of the box"
    ],
    "migrationPath": "Organizations that used iTwin during a plant's design and construction phase can carry the resulting engineering model (piping isometrics, vessel geometry, GIS references) into Atlantis as the geometric foundation for the operating-phase 3D twin. Atlantis then layers ongoing CML, thickness, and NDT inspection data onto that geometry for the operations and integrity lifecycle, which iTwin was never designed to manage. No rip-and-replace is required; iTwin's engineering data becomes a one-time import into Atlantis's operational twin.",
    "comparisonRows": [
      {
        "factor": "NDT/Inspection Data Depth",
        "atlantis": "Native CML, thickness, and multi-method NDT indication tracking",
        "competitor": "None; engineering/construction-model data only"
      },
      {
        "factor": "FFS & RBI (API 579/580)",
        "atlantis": "Built-in calculation engines",
        "competitor": "Not offered"
      },
      {
        "factor": "Deployment Speed",
        "atlantis": "Weeks",
        "competitor": "Fast for design-phase twins; slow to add operational inspection features"
      },
      {
        "factor": "Customization",
        "atlantis": "Fully customizable, quote on request",
        "competitor": "Highly customizable via SDK, requires developer resources"
      },
      {
        "factor": "System Integration",
        "atlantis": "API-first; can import iTwin engineering geometry as a foundation",
        "competitor": "Deep integration with Bentley CAD/engineering ecosystem"
      },
      {
        "factor": "Target User / Buyer",
        "atlantis": "Operations, integrity, and inspection teams managing in-service assets",
        "competitor": "EPC and engineering teams during design/construction phases"
      },
      {
        "factor": "Pricing Model",
        "atlantis": "Affordable SaaS, fully customizable, quote on request",
        "competitor": "Enterprise SDK/platform licensing within Bentley's software portfolio"
      }
    ],
    "faqs": [
      [
        "Can iTwin track vessel thickness readings over time?",
        "Not natively. iTwin is an engineering and construction digital twin platform; adding thickness-trending or CML tracking would require custom development using its SDK."
      ],
      [
        "Is iTwin useful for in-service asset integrity management?",
        "It's strongest during design, construction, and commissioning. For ongoing operational integrity, teams typically pair iTwin's engineering model with a dedicated inspection platform like Atlantis."
      ],
      [
        "Can we reuse our Bentley engineering models in Atlantis?",
        "Yes. Atlantis can import geometry and asset hierarchy from Bentley engineering models as the foundation for the operating-phase 3D twin, then layer live inspection data on top."
      ]
    ]
  },
  "ibm-maximo": {
    "competitorName": "IBM Maximo Application Suite (MAS)",
    "positioning": "IBM Maximo Application Suite is a mature, broad enterprise asset management (EAM) and CMMS platform covering work order management, MRO inventory, and maintenance scheduling across virtually any asset type and industry. IBM has layered AI-driven modules (Maximo Predict, Maximo Health, Maximo Visual Inspection) on top via its watsonx integration, positioning MAS as a broader condition-based maintenance suite, though its core strength remains traditional work management, not code-driven inspection.",
    "whereCompetitorWins": [
      "Mature, battle-tested work order and maintenance management workflows used across virtually every industry",
      "Strong MRO inventory and spare-parts management integrated directly with maintenance scheduling",
      "Established enterprise integrations with SAP and other ERP systems for large multi-site organizations",
      "Maximo Predict/Health modules offer generic condition-based maintenance analytics for sensor-equipped rotating and general equipment"
    ],
    "whereAtlantisWins": "Maximo tracks that an inspection work order exists and was closed; it does not natively understand thickness readings, corrosion mechanisms, or code-based fitness-for-service. Atlantis captures the actual engineering content of an inspection: CML grids, UT/PAUT thickness trends, RT/MT/PT indications, and weld registers mapped onto a live 3D twin, with API 510/570/653 workflows and API 579/580 FFS/RBI calculations built in. Rather than replacing Maximo's work management role, Atlantis feeds structured, code-compliant integrity findings back into Maximo work orders via API, giving integrity engineers the technical depth Maximo was never built for while keeping Maximo as the system of record for maintenance execution.",
    "ndtGaps": [
      "No native CML or thickness-trending database; inspections are tracked as generic work order records",
      "No structured data model for UT, PAUT, RT, MT, or PT indications",
      "No fitness-for-service (API 579) or risk-based inspection (API 580) calculation engine",
      "Maximo Predict/Health modules use generic ML on sensor data, not NDT-method-specific analysis",
      "No weld register or radiographic report/film management tied to a 3D asset model"
    ],
    "migrationPath": "Maximo typically remains the system of record for work orders, MRO inventory, and maintenance scheduling. Atlantis integrates via API to push structured NDT findings, CML trends, and FFS/RBI results into corresponding Maximo work orders, so maintenance planners see integrity-driven priorities without leaving their existing workflow. Historical inspection data scattered across Maximo attachments or separate spreadsheets is consolidated into Atlantis's structured inspection database, giving integrity engineers a purpose-built tool while Maximo continues handling execution and inventory.",
    "comparisonRows": [
      {
        "factor": "NDT/Inspection Data Depth",
        "atlantis": "Native CML, thickness, and multi-method NDT indication tracking on a 3D twin",
        "competitor": "Inspections tracked as generic work order records/attachments"
      },
      {
        "factor": "FFS & RBI (API 579/580)",
        "atlantis": "Built-in calculation engines",
        "competitor": "Not offered natively"
      },
      {
        "factor": "Deployment Speed",
        "atlantis": "Weeks, ready-made inspection workflows",
        "competitor": "Established but often long, complex enterprise EAM rollouts"
      },
      {
        "factor": "Customization",
        "atlantis": "Fully customizable, quote on request",
        "competitor": "Highly configurable, typically requires implementation partners"
      },
      {
        "factor": "System Integration",
        "atlantis": "API-first; pushes structured findings into Maximo work orders",
        "competitor": "Strong ERP integration (especially SAP); broad third-party ecosystem"
      },
      {
        "factor": "Target User / Buyer",
        "atlantis": "Asset integrity and inspection engineers",
        "competitor": "Maintenance planners, MRO, and reliability teams across all asset types"
      },
      {
        "factor": "Pricing Model",
        "atlantis": "Affordable SaaS, fully customizable, quote on request",
        "competitor": "Enterprise per-module licensing within IBM's software portfolio"
      }
    ],
    "faqs": [
      [
        "Does Maximo Predict handle NDT-specific analysis like UT or RT indications?",
        "No. Maximo Predict and Maximo Health apply generic machine-learning models to sensor data for condition-based maintenance; they are not built to interpret NDT method-specific findings or track thickness/corrosion trends."
      ],
      [
        "Can Atlantis and Maximo run together?",
        "Yes, and this is the typical setup. Maximo remains the system of record for work orders and inventory, while Atlantis owns the technical inspection data and pushes structured findings back into Maximo via API."
      ],
      [
        "Does Maximo support fitness-for-service calculations per API 579?",
        "Not out of the box. FFS assessments require engineering-specific calculation logic that Maximo does not include natively."
      ]
    ]
  },
  "aspen-mtell": {
    "competitorName": "Aspen Mtell (AspenTech Asset Performance Management, now part of Emerson)",
    "positioning": "Aspen Mtell is a pattern-recognition-based predictive and prescriptive maintenance product within AspenTech's Asset Performance Management suite, analyzing high-frequency sensor data to detect early failure signatures in rotating and process equipment. Following Emerson's completion of its acquisition of the remaining AspenTech shares in March 2025, Mtell now operates as part of Emerson's broader automation and APM portfolio, deepening integration with Emerson's process control and instrumentation ecosystem.",
    "whereCompetitorWins": [
      "Strong pattern-recognition machine learning tuned specifically for detecting failure signatures in pumps, compressors, and turbines",
      "Deepening integration with Emerson's process control, instrumentation, and automation hardware post-acquisition",
      "Established track record in machinery health and prescriptive maintenance for rotating equipment in refining and petrochemical plants",
      "Backed by the combined AspenTech-Emerson APM portfolio scale and long-term product roadmap"
    ],
    "whereAtlantisWins": "Mtell is built for rotating machinery health, not static equipment integrity; it has no concept of corrosion, wall-thickness loss, or weld defects. Atlantis natively models CML grids, UT/PAUT thickness readings, RT/MT/PT indications, and weld registers on a live 3D twin, with API 510/570/653 inspection workflows and API 579/580 FFS/RBI calculations built in, covering the vessels, tanks, and piping that Mtell's rotating-equipment analytics simply don't address. Atlantis deploys in weeks, is fully customizable, and gives integrity engineers a purpose-built visualization and calculation environment that complements Mtell's machinery-health analytics rather than competing with it.",
    "ndtGaps": [
      "No CML or thickness-trending data model; built for vibration and process-signal pattern recognition",
      "No structured schema for UT, RT, MT, PT, or phased array indications",
      "No fitness-for-service (API 579) or risk-based inspection (API 580) calculation engine",
      "No weld register or radiographic report/film management",
      "Focused on rotating/dynamic equipment failure signatures, not static vessel, tank, or piping wall-loss integrity"
    ],
    "migrationPath": "Mtell and Atlantis address complementary asset classes, so most plants keep Mtell for rotating-equipment predictive maintenance and add Atlantis specifically for fixed-equipment integrity. Where Mtell/Emerson process data is relevant to corrosion mechanisms (temperature, pressure, flow conditions), Atlantis integrates via API to enrich its RBI risk scoring. Historical CML and NDT inspection records are imported directly into Atlantis regardless of prior storage location, with no disruption to existing Mtell deployments on rotating assets.",
    "comparisonRows": [
      {
        "factor": "NDT/Inspection Data Depth",
        "atlantis": "Native CML, thickness, and multi-method NDT indication tracking on a 3D twin",
        "competitor": "None; focused on vibration/process-signal pattern recognition"
      },
      {
        "factor": "FFS & RBI (API 579/580)",
        "atlantis": "Built-in calculation engines",
        "competitor": "Not offered"
      },
      {
        "factor": "Deployment Speed",
        "atlantis": "Weeks, ready-made inspection workflows",
        "competitor": "Established rollout process within Emerson/AspenTech implementations"
      },
      {
        "factor": "Customization",
        "atlantis": "Fully customizable, quote on request",
        "competitor": "Customizable within Emerson's APM/automation ecosystem"
      },
      {
        "factor": "System Integration",
        "atlantis": "API-first; complements rotating-equipment analytics",
        "competitor": "Deep integration with Emerson process control and instrumentation"
      },
      {
        "factor": "Target User / Buyer",
        "atlantis": "Asset integrity and inspection engineers for fixed equipment",
        "competitor": "Reliability engineers focused on rotating/process machinery"
      },
      {
        "factor": "Pricing Model",
        "atlantis": "Affordable SaaS, fully customizable, quote on request",
        "competitor": "Enterprise APM licensing within Emerson's automation portfolio"
      }
    ],
    "faqs": [
      [
        "Is Aspen Mtell now an Emerson product?",
        "Yes. Emerson completed its acquisition of the remaining outstanding shares of AspenTech in March 2025, and Mtell now operates within Emerson's broader automation and APM portfolio."
      ],
      [
        "Can Mtell detect corrosion or wall-thickness loss in a pressure vessel?",
        "No. Mtell's pattern-recognition models are trained on vibration and process signals for rotating and dynamic equipment failure modes, not static wall-thickness or corrosion trending."
      ],
      [
        "Should we replace Mtell with Atlantis?",
        "Not for rotating equipment, where Mtell has real strengths. Atlantis is best deployed alongside Mtell to cover fixed-equipment integrity, which Mtell's analytics were never designed to address."
      ]
    ]
  },
  "hexagon-eam": {
    "competitorName": "Hexagon HxGN EAM (Asset Lifecycle Intelligence division)",
    "positioning": "HxGN EAM is Hexagon's cloud-native enterprise asset management and CMMS platform, covering maintenance work orders, inventory, and reliability-centered maintenance workflows across a broad range of industries including utilities, transportation, and facilities. It sits within Hexagon's Asset Lifecycle Intelligence division, which Hexagon has signaled may be rebranded as part of a broader software spin-off (publicly discussed under the name Octave as of March 2026). It's a general-purpose EAM tool, not a code-driven inspection or NDT platform.",
    "whereCompetitorWins": [
      "Strong, modern mobile EAM/CMMS user experience for field technicians logging maintenance activity",
      "Broad applicability across many asset-heavy industries beyond oil & gas and process plants (utilities, transportation, facilities)",
      "Established reliability-centered maintenance (RCM) workflows and preventive maintenance scheduling",
      "Native GIS/geospatial integration leveraging Hexagon's broader geospatial technology portfolio"
    ],
    "whereAtlantisWins": "HxGN EAM manages the maintenance workflow around an asset; it has no engineering-level model of corrosion, thickness loss, or weld integrity. Atlantis captures the inspection engineering itself: CML grids, UT/PAUT thickness readings, RT/MT/PT indications, and weld registers mapped onto a live 3D twin, with API 510/570/653 workflows and API 579/580 FFS/RBI calculations built in. Atlantis is purpose-built for fixed-equipment integrity in process, refining, and oil & gas environments specifically, deploys in weeks, and is fully customizable, giving integrity engineers the technical depth that a general-purpose EAM tool like HxGN EAM was never designed to provide.",
    "ndtGaps": [
      "No native CML, thickness-trending, or corrosion-rate data model",
      "No structured schema for UT, PAUT, RT, MT, or PT indications",
      "No fitness-for-service (API 579) or risk-based inspection (API 580) calculation engine",
      "No 3D digital twin visualization mapping inspection findings onto asset geometry",
      "No weld register or radiographic report/film management"
    ],
    "migrationPath": "HxGN EAM typically remains the system of record for maintenance work orders, PM scheduling, and inventory across an organization's broader asset base. Atlantis integrates via API to push structured NDT findings, CML trends, and FFS/RBI risk results into corresponding HxGN EAM work orders, so maintenance planners see integrity-driven priorities without changing their existing tool. Historical inspection data is imported directly into Atlantis's structured database, giving integrity engineers a purpose-built environment for fixed equipment while HxGN EAM continues handling broader maintenance execution.",
    "comparisonRows": [
      {
        "factor": "NDT/Inspection Data Depth",
        "atlantis": "Native CML, thickness, and multi-method NDT indication tracking on a 3D twin",
        "competitor": "None; generic maintenance work order records"
      },
      {
        "factor": "FFS & RBI (API 579/580)",
        "atlantis": "Built-in calculation engines",
        "competitor": "Not offered"
      },
      {
        "factor": "Deployment Speed",
        "atlantis": "Weeks, ready-made inspection workflows",
        "competitor": "Established cloud EAM rollout, typically weeks to months"
      },
      {
        "factor": "Customization",
        "atlantis": "Fully customizable, quote on request",
        "competitor": "Configurable within Hexagon's EAM platform"
      },
      {
        "factor": "System Integration",
        "atlantis": "API-first; pushes structured findings into EAM work orders",
        "competitor": "Strong GIS/geospatial integration; broad multi-industry connectors"
      },
      {
        "factor": "Target User / Buyer",
        "atlantis": "Asset integrity and inspection engineers in process/oil & gas environments",
        "competitor": "Maintenance and reliability teams across broad multi-industry asset types"
      },
      {
        "factor": "Pricing Model",
        "atlantis": "Affordable SaaS, fully customizable, quote on request",
        "competitor": "Enterprise EAM subscription within Hexagon's software portfolio"
      }
    ],
    "faqs": [
      [
        "Does HxGN EAM support fitness-for-service assessments?",
        "No. HxGN EAM is a maintenance and work-order management platform; FFS calculations per API 579 require specialized engineering logic it does not include."
      ],
      [
        "Can Atlantis and HxGN EAM be used together?",
        "Yes. HxGN EAM typically remains the system of record for work orders and inventory, while Atlantis owns the NDT/inspection engineering data and feeds findings back via API."
      ],
      [
        "Is Hexagon's Asset Lifecycle Intelligence division changing its name?",
        "Hexagon has publicly discussed a potential software spin-off under the name Octave as of March 2026, which would include the Asset Lifecycle Intelligence division that houses HxGN EAM."
      ]
    ]
  },
  "osisoft-pi": {
    "competitorName": "OSIsoft PI System (legacy branding; now operated as AVEVA PI System)",
    "positioning": "OSIsoft PI is the widely used name for the on-premise/cloud real-time operational data historian technology at the core of most large process plants' data infrastructure — the PI Server, PI Asset Framework, and PI Vision. Though OSIsoft was acquired by AVEVA in 2021 and the product is now formally marketed as AVEVA PI System, most refinery, petrochemical, and power plant engineers still refer to their core plant historian simply as 'PI' or 'OSIsoft PI' in daily operations, and many facilities still run legacy on-premise PI Server deployments predating the AVEVA acquisition.",
    "whereCompetitorWins": [
      "Decades-proven reliability for capturing and storing extremely high-frequency process data (temperature, pressure, flow, vibration) at plant scale",
      "The de facto historian standard already embedded in the vast majority of refineries, petrochemical, and power plants worldwide",
      "PI Asset Framework provides a mature, well-understood asset hierarchy model that other systems, including Atlantis, can integrate against",
      "Large ecosystem of certified integrators, interfaces (450+), and engineers already trained on the legacy PI toolset"
    ],
    "whereAtlantisWins": "Legacy PI Server was built to historize process tags, not to understand inspection findings. Atlantis natively models CMLs, UT/PAUT thickness readings, RT/MT/PT indications, and weld registers on a live 3D asset twin, with API 510/570/653 inspection workflows and API 579/580 FFS/RBI calculations included — none of which exist in a PI historian regardless of on-premise or AVEVA-cloud deployment. Atlantis connects to existing PI Server/PI AF infrastructure via PI Web API to enrich its risk models with real process data, deploys in weeks, and stays fully customizable and affordable, giving integrity teams the inspection-specific tool their legacy historian was never meant to be.",
    "ndtGaps": [
      "No native CML, thickness-trending, or corrosion-rate data model; stores raw time-series tags only",
      "No structured schema for UT, RT, MT, PT, or phased array indications",
      "No fitness-for-service (API 579) or risk-based inspection (API 580) calculation engine",
      "No weld register or radiographic report/film management",
      "PI Vision dashboards are time-series trend charts, not 3D geometry with mapped inspection findings"
    ],
    "migrationPath": "Legacy PI Server installations, whether on-premise or migrated to AVEVA's cloud offerings, remain in place as the plant's process historian; Atlantis does not replace this role. Atlantis integrates via PI Web API or AF SDK to pull relevant process variables into its RBI risk scoring while independently owning the NDT/inspection data domain. Facilities with years of CML logs, UT/RT reports, and inspection PDFs stored outside PI (in spreadsheets or file shares) migrate that historical data directly into Atlantis's structured database, with no disruption to the existing PI historian.",
    "comparisonRows": [
      {
        "factor": "NDT/Inspection Data Depth",
        "atlantis": "Native CML, thickness, and multi-method NDT indication tracking on a 3D twin",
        "competitor": "None; raw process time-series tags only"
      },
      {
        "factor": "FFS & RBI (API 579/580)",
        "atlantis": "Built-in calculation engines",
        "competitor": "Not offered"
      },
      {
        "factor": "Deployment Speed",
        "atlantis": "Weeks, ready-made inspection workflows",
        "competitor": "Historian typically already deployed; adding inspection features not possible natively"
      },
      {
        "factor": "Customization",
        "atlantis": "Fully customizable, quote on request",
        "competitor": "Customizable within legacy PI/AVEVA architecture, often requires specialized PI admins"
      },
      {
        "factor": "System Integration",
        "atlantis": "Integrates with legacy PI Server/PI AF via PI Web API",
        "competitor": "Industry-standard historian with extensive interface library"
      },
      {
        "factor": "Target User / Buyer",
        "atlantis": "Asset integrity, inspection, and reliability engineers",
        "competitor": "Process/operations engineers and PI administrators needing real-time telemetry"
      },
      {
        "factor": "Pricing Model",
        "atlantis": "Affordable SaaS, fully customizable, quote on request",
        "competitor": "Enterprise historian licensing, often legacy on-premise support contracts"
      }
    ],
    "faqs": [
      [
        "Is OSIsoft PI a different product from AVEVA PI System?",
        "No, they are the same underlying technology. AVEVA acquired OSIsoft in 2021; many plants still use the legacy 'OSIsoft PI' name informally for what AVEVA now markets as AVEVA PI System."
      ],
      [
        "Can our legacy on-premise PI Server work with Atlantis?",
        "Yes. Atlantis integrates with PI Server and PI Asset Framework via PI Web API regardless of whether the deployment is on-premise legacy infrastructure or AVEVA's newer cloud offerings."
      ],
      [
        "Does PI track inspection findings like RT indications or CML readings?",
        "No. PI historizes numeric process time-series tags; inspection findings, corrosion mechanisms, and weld defects require a purpose-built inspection data model like Atlantis provides."
      ]
    ]
  },
  "ptc-thingworx": {
    "competitorName": "PTC ThingWorx",
    "positioning": "ThingWorx is PTC's industrial IoT application development platform, providing a low-code environment for building connected-product and smart-factory applications, with strong native integration into PTC's CAD/PLM stack (Creo, Windchill) and its Vuforia augmented-reality tools. It's widely used by OEMs monitoring connected products in the field and manufacturers building custom factory-floor analytics dashboards, functioning as a flexible application-building toolkit rather than a turnkey vertical solution.",
    "whereCompetitorWins": [
      "Strong low-code/no-code mashup builder for creating custom IoT dashboards and applications quickly",
      "Deep native integration with PTC's CAD/PLM ecosystem (Creo, Windchill) for organizations already standardized on it",
      "Vuforia AR integration enables augmented-reality overlays for field service and assembly guidance use cases",
      "Good fit for OEMs building connected-product monitoring apps for equipment they manufacture and sell"
    ],
    "whereAtlantisWins": "ThingWorx is a toolkit for building IoT applications; it has no inherent understanding of corrosion mechanisms, thickness loss, or code-based fitness-for-service. Atlantis is a finished, purpose-built platform with native CML grids, UT/PAUT thickness trending, RT/MT/PT indication mapping onto a 3D twin, weld registers, and API 510/570/653 workflows with API 579/580 FFS/RBI calculations already configured. Where ThingWorx requires development work (even with its low-code tools) to model inspection data and build a UI from scratch, Atlantis delivers this out of the box in weeks, remains fully customizable, and doesn't require a PTC CAD/PLM ecosystem investment to be useful.",
    "ndtGaps": [
      "No pre-built NDT data model; CMLs and thickness readings would need custom entity/property modeling",
      "No fitness-for-service (API 579) or risk-based inspection (API 580) calculation engine",
      "No native weld register or radiographic report/film management",
      "Requires low-code development effort (Mashup Builder, entity modeling) to build any inspection-specific workflow",
      "3D visualization is generic IoT/AR-oriented, not tuned for mapping inspection findings onto static asset geometry"
    ],
    "migrationPath": "Organizations that built connected-product monitoring apps on ThingWorx typically keep those OEM-equipment applications running unchanged, since they serve a different purpose than fixed-equipment integrity. Atlantis is deployed separately to own CML, thickness, and NDT inspection data, and can consume relevant IoT sensor data from ThingWorx via API where it's useful for RBI risk scoring. Historical inspection records are imported directly into Atlantis regardless of prior storage location, with no need to rebuild existing ThingWorx applications.",
    "comparisonRows": [
      {
        "factor": "NDT/Inspection Data Depth",
        "atlantis": "Native CML, thickness, and multi-method NDT indication tracking on a 3D twin",
        "competitor": "None out of the box; would require custom entity modeling"
      },
      {
        "factor": "FFS & RBI (API 579/580)",
        "atlantis": "Built-in calculation engines",
        "competitor": "Not offered; would require custom scripting"
      },
      {
        "factor": "Deployment Speed",
        "atlantis": "Weeks, ready-made inspection workflows",
        "competitor": "Fast for simple dashboards; slower for full inspection workflow builds"
      },
      {
        "factor": "Customization",
        "atlantis": "Fully customizable out of the box",
        "competitor": "Highly flexible low-code platform, requires development effort to realize"
      },
      {
        "factor": "System Integration",
        "atlantis": "API-first; can consume ThingWorx IoT sensor data",
        "competitor": "Deep integration with PTC Creo/Windchill and Vuforia AR"
      },
      {
        "factor": "Target User / Buyer",
        "atlantis": "Asset integrity and inspection engineers",
        "competitor": "OEM product engineers and manufacturing IT building custom IoT apps"
      },
      {
        "factor": "Pricing Model",
        "atlantis": "Affordable SaaS, fully customizable, quote on request",
        "competitor": "Enterprise platform licensing within PTC's software portfolio"
      }
    ],
    "faqs": [
      [
        "Can ThingWorx be configured to track CML and thickness data?",
        "It's possible through custom entity modeling and Mashup Builder development, but there's no pre-built NDT data model; this would require a dedicated development effort to approximate what Atlantis provides natively."
      ],
      [
        "Is ThingWorx better suited for OEM equipment monitoring than fixed-equipment integrity?",
        "Yes. ThingWorx's strengths are connected-product monitoring and low-code app building for OEM use cases, not code-driven inspection management for vessels, tanks, and piping."
      ],
      [
        "Can Atlantis use sensor data already flowing into ThingWorx?",
        "Yes. Atlantis can integrate via API to pull relevant IoT sensor data from ThingWorx into its risk-based inspection calculations."
      ]
    ]
  },
  "microsoft-azure-digital-twins": {
    "competitorName": "Microsoft Azure Digital Twins",
    "positioning": "Azure Digital Twins is a Platform-as-a-Service (PaaS) offering from Microsoft for building IoT-based digital twin graphs using the Digital Twins Definition Language (DTDL). It provides the underlying infrastructure to model relationships between physical assets and their data, integrating with Azure IoT Hub, Time Series Insights, and Power BI, but it is a developer platform and building block, not a turnkey vertical application — every domain-specific capability must be custom-built on top of it.",
    "whereCompetitorWins": [
      "Maximum flexibility for development teams that want to build a fully bespoke digital twin architecture from the ground up",
      "Deep integration with the broader Azure ecosystem (IoT Hub, Synapse Analytics, Power BI, Azure AI/ML) for organizations already standardized on Microsoft cloud",
      "Scales to extremely large, complex twin graphs (buildings, campuses, smart cities) when backed by dedicated engineering teams",
      "Backed by Microsoft's global cloud infrastructure, security certifications, and enterprise compliance posture"
    ],
    "whereAtlantisWins": "Azure Digital Twins is an empty graph database with no domain knowledge; NDT/inspection modeling, 3D visualization, and FFS/RBI logic all have to be built from scratch by an engineering team, often taking many months. Atlantis is a finished, purpose-built application that ships with native CML grids, UT/PAUT thickness trending, RT/MT/PT indication mapping onto a rendered 3D twin, weld registers, and API 510/570/653 workflows with API 579/580 calculations already configured. Atlantis deploys in weeks with no dedicated development team required, remains fully customizable to a client's specific standards, and can still integrate with existing Azure IoT Hub telemetry via API for organizations that want to keep other data flowing through their Microsoft cloud investment.",
    "ndtGaps": [
      "No built-in NDT data model whatsoever; DTDL schemas for CMLs, thickness, and indications must be authored from scratch",
      "No fitness-for-service (API 579) or risk-based inspection (API 580) calculation engine",
      "No out-of-box 3D rendering engine for asset visualization; requires pairing with a separate rendering/visualization tool",
      "No weld register or radiographic report/film management",
      "Reaching NDT/inspection functionality requires months of custom software development and ongoing Azure engineering investment"
    ],
    "migrationPath": "Organizations with an existing Azure Digital Twins graph typically keep it for its original purpose (broader IoT/building/campus twin modeling) and deploy Atlantis specifically for fixed-equipment integrity, which would otherwise require a large custom build to replicate. Atlantis can ingest relevant telemetry from Azure IoT Hub via API to enrich its RBI risk models, and any DTDL-modeled asset relationships can inform Atlantis's asset hierarchy setup during onboarding. This avoids abandoning prior Azure investment while getting inspection-specific functionality live in weeks instead of a multi-month custom development project.",
    "comparisonRows": [
      {
        "factor": "NDT/Inspection Data Depth",
        "atlantis": "Native CML, thickness, and multi-method NDT indication tracking on a rendered 3D twin",
        "competitor": "None; would require custom DTDL schema development from scratch"
      },
      {
        "factor": "FFS & RBI (API 579/580)",
        "atlantis": "Built-in calculation engines",
        "competitor": "Not offered; would require custom application logic"
      },
      {
        "factor": "Deployment Speed",
        "atlantis": "Weeks, ready-made inspection workflows",
        "competitor": "Months to years for a custom-built equivalent"
      },
      {
        "factor": "Customization",
        "atlantis": "Fully customizable out of the box",
        "competitor": "Unlimited flexibility, but entirely dependent on in-house development resources"
      },
      {
        "factor": "System Integration",
        "atlantis": "API-first; can ingest Azure IoT Hub telemetry",
        "competitor": "Deep integration with Azure IoT Hub, Synapse, Power BI, Azure AI"
      },
      {
        "factor": "Target User / Buyer",
        "atlantis": "Asset integrity and inspection engineers wanting a ready-to-use tool",
        "competitor": "Cloud development teams building fully custom twin architectures"
      },
      {
        "factor": "Pricing Model",
        "atlantis": "Affordable SaaS, fully customizable, quote on request",
        "competitor": "Consumption-based Azure PaaS pricing plus significant internal development cost"
      }
    ],
    "faqs": [
      [
        "Does Azure Digital Twins include any inspection or NDT features out of the box?",
        "No. It is a bare graph/database platform for modeling relationships between digital twin entities; every domain-specific feature, including NDT data models and FFS/RBI logic, must be custom-built."
      ],
      [
        "How long would it take to build an Atlantis-equivalent on Azure Digital Twins?",
        "Realistically many months of dedicated software engineering to model the DTDL schemas, build 3D visualization, and implement FFS/RBI calculation logic, compared to Atlantis's weeks-long deployment of an already-finished platform."
      ],
      [
        "Can Atlantis and Azure Digital Twins coexist?",
        "Yes. Azure Digital Twins can continue serving its original broader IoT/twin-graph purpose while Atlantis handles fixed-equipment integrity specifically, with API integration pulling relevant telemetry between the two."
      ]
    ]
  },

  // === Phase 2 vendor expansion 2026-07-27 ===
  // Integrity-specialist and enterprise vendors that show up on real buyer
  // shortlists but had no comparison page. Competitor comparisons are the
  // best-performing DT asset class on the site (atlantis-dt-vs-ge-predix:
  // 663 impr/90d at pos 11.4), so the pattern is extended, not invented.
  "antea-ims": {
    "competitorName": "Antea (Antea IMS)",
    "positioning": "Antea is a European-origin asset-integrity software vendor whose IMS product is built around a 3D-model-centred inspection data management system (IDMS) for process plant. It is positioned at owner-operators in oil, gas, chemicals and power who want inspection history, corrosion monitoring locations and risk-based inspection consolidated against a navigable 3D representation of the plant, and it is usually sold alongside an implementation and data-population service.",
    "whereCompetitorWins": [
      "Established European install base in refining and petrochemicals, with local implementation teams and language coverage",
      "Mature 3D-model-led navigation of inspection data for owner-operators who have already invested in laser-scanned plant models",
      "Bundled data-population services for operators who want a vendor to reconcile a legacy CML register on their behalf",
      "A good fit where the buyer is an asset owner running a single fixed estate rather than a contractor working across many client sites"
    ],
    "whereAtlantisWins": "Atlantis is built for the inspection side of the relationship as well as the ownership side. The same platform runs the inspection company's certification currency, calibration traceability, crew scheduling and job costing, and the operator's CML trending, RBI scoring and API 579 fitness-for-service - which matters because the data quality problem in most integrity programmes starts in the field, not in the model. Deployment is measured in weeks per unit, geometry can come from LiDAR, photogrammetry, drone survey or existing BIM/CAD rather than requiring a specific capture route, and full REST API plus documented bulk export is available from day one rather than negotiated at renewal.",
    "ndtGaps": [
      "No personnel qualification model - SNT-TC-1A / ISO 9712 / NAS 410 currency and dispatch lockout are outside the product's scope",
      "No instrument, probe and reference-block calibration register with ISO 17025 traceability",
      "No multi-client separation for inspection contractors working across several operators",
      "No work-order costing, progress billing or contract margin visibility",
      "Field capture is oriented to the owner's inspectors rather than to a contractor's mobile crews working offline"
    ],
    "migrationPath": "Where an operator already runs Antea IMS, the common pattern is not replacement but division of labour: Antea retains the owner-side integrity record while Atlantis runs the inspection execution layer for the contractors feeding it, pushing validated thickness readings, indications and reports across by API. Where an operator is consolidating, historical CML registers, thickness histories and inspection documents import in bulk, and the CML identity reconciliation - always the longest task - is done once and reused by both systems during the transition.",
    "comparisonRows": [
      {
        "factor": "Primary buyer",
        "atlantis": "Both the inspection contractor and the asset owner, on one platform",
        "competitor": "Asset owner / operator integrity department"
      },
      {
        "factor": "Personnel qualification",
        "atlantis": "Native SNT-TC-1A / ISO 9712 / NAS 410 currency with dispatch lockout on lapse",
        "competitor": "Not in scope"
      },
      {
        "factor": "Calibration traceability",
        "atlantis": "Instruments, probes, wedges and reference blocks with ISO 17025 chains",
        "competitor": "Not in scope"
      },
      {
        "factor": "Geometry source",
        "atlantis": "LiDAR, photogrammetry, drone survey, or imported BIM/CAD and isometrics",
        "competitor": "3D model-led; typically assumes a scanned or supplied plant model"
      },
      {
        "factor": "RBI and FFS",
        "atlantis": "API 580/581 RBI and API 579 Level 1-2 native on measured thickness",
        "competitor": "RBI supported; FFS depth varies by configuration and engagement"
      },
      {
        "factor": "Multi-client operation",
        "atlantis": "Native - separate client asset registers, per-client report templates",
        "competitor": "Single-owner orientation"
      },
      {
        "factor": "Data ownership",
        "atlantis": "Documented schema, full bulk export available at any time",
        "competitor": "Export scope typically defined per contract"
      }
    ],
    "faqs": [
      [
        "Is Atlantis a replacement for Antea IMS?",
        "Not necessarily. If you are an asset owner whose integrity record already lives in Antea and works, the higher-value move is usually to fix the inspection execution layer feeding it - certification currency, calibration traceability, offline field capture and report provenance - and integrate. If you are consolidating platforms, or you are an inspection contractor rather than an owner, Atlantis covers both layers on one system."
      ],
      [
        "Can inspection data move between the two?",
        "Yes. Validated thickness readings, indications, inspection reports and their provenance metadata move by REST API or structured bulk import, and CML identity is preserved so trending stays continuous across the boundary."
      ],
      [
        "Which is faster to deploy?",
        "Atlantis typically has a first process unit live in ten to fourteen weeks, largely because geometry is not on the critical path - you can start from isometrics and P&IDs and add scan-derived geometry later. Model-led deployments are gated by the capture and model-preparation step."
      ]
    ]
  },
  "cenosco-ims": {
    "competitorName": "Cenosco IMS",
    "positioning": "Cenosco is a Netherlands-based software vendor whose IMS suite grew out of an operator environment and is strongly associated with pressure-equipment integrity, risk-based inspection and integrity operating windows. It is positioned at owner-operator integrity departments in oil, gas and chemicals that want a rigorous, engineering-led mechanical integrity system of record, and it is generally regarded as strong on the engineering discipline of integrity management.",
    "whereCompetitorWins": [
      "Deep pressure-equipment integrity and integrity-operating-window discipline, developed in an operator context rather than retro-fitted",
      "Well-regarded RBI methodology support for owner-operators running formal, audited integrity programmes",
      "Strong fit where the customer already has a mature integrity engineering function and wants software that matches its rigour",
      "European operator install base with domain-experienced implementation staff"
    ],
    "whereAtlantisWins": "Atlantis closes the loop between the integrity engineer's model and the inspection that populates it. Certification currency, calibration traceability, offline field capture and report provenance are native, so the data arriving in the RBI engine carries the evidence that it was collected by a qualified inspector using a calibrated instrument under an approved procedure revision - the thing an audit actually tests. It also serves the contractor side of the relationship with multi-client asset registers, per-client reporting and job costing, and it deploys per unit in weeks rather than as an enterprise programme.",
    "ndtGaps": [
      "No personnel certification currency model or dispatch lockout",
      "No calibration register with ISO 17025 traceability for instruments, probes and reference blocks",
      "No contractor-side capabilities - multi-client separation, per-client report templates, job costing",
      "Field data capture assumes owner-side inspectors rather than mobile contractor crews working offline",
      "Inspection-evidence provenance (procedure revision, inspector certification state, instrument calibration state at time of test) is not carried end-to-end"
    ],
    "migrationPath": "Operators running Cenosco IMS most often keep it as the owner-side integrity record and add Atlantis underneath as the inspection execution and evidence layer, with validated results flowing in by API. Where full consolidation is intended, equipment and circuit registers, CML registers, thickness histories and inspection documents are migrated in bulk; the CML reconciliation is the long pole and is scoped explicitly rather than assumed.",
    "comparisonRows": [
      {
        "factor": "Origin",
        "atlantis": "Built from NDT and inspection execution outward",
        "competitor": "Built from operator-side mechanical integrity engineering outward"
      },
      {
        "factor": "Personnel qualification",
        "atlantis": "Native, with dispatch lockout on lapse",
        "competitor": "Not in scope"
      },
      {
        "factor": "Calibration control",
        "atlantis": "Native, with ISO 17025 traceability chains",
        "competitor": "Not in scope"
      },
      {
        "factor": "Inspection evidence provenance",
        "atlantis": "Procedure revision, inspector certification state and instrument calibration state captured at time of test",
        "competitor": "Results captured; upstream provenance generally external"
      },
      {
        "factor": "RBI depth",
        "atlantis": "API 580/581 on measured thickness trends per CML",
        "competitor": "Strong, engineering-led RBI and integrity operating windows"
      },
      {
        "factor": "Contractor use",
        "atlantis": "Native multi-client, per-client reporting, job costing",
        "competitor": "Owner-operator orientation"
      },
      {
        "factor": "Time to first unit live",
        "atlantis": "Typically 10-14 weeks",
        "competitor": "Enterprise programme timescales"
      }
    ],
    "faqs": [
      [
        "Is Cenosco IMS better than Atlantis for RBI?",
        "For a large owner-operator with a mature integrity engineering function and a formal audited RBI programme, Cenosco's engineering depth is a genuine strength and may well be the better fit. Atlantis's advantage is that its RBI runs on measured thickness trends carried with full inspection provenance, and that the same platform manages the inspection execution producing that data. Many sites benefit from both."
      ],
      [
        "Can Atlantis feed an existing Cenosco deployment?",
        "Yes. The common pattern is Atlantis as the inspection execution and evidence layer, pushing validated readings and indications with their provenance into the owner-side integrity record by API."
      ],
      [
        "We are an inspection contractor, not an operator. Which fits?",
        "Contractor requirements - multi-client asset separation, per-client report templates, technician certification currency, calibration control, crew dispatch and job costing - sit outside an owner-operator integrity product's scope. That is the case Atlantis is designed for."
      ]
    ]
  },
  "metegrity-visions": {
    "competitorName": "Metegrity Visions Enterprise",
    "positioning": "Metegrity is a Calgary-based vendor whose Visions Enterprise product is a long-established inspection data management and mechanical integrity system, widely used across North American refining, midstream and petrochemicals. It is positioned at owner-operators managing large fixed-equipment estates who need a defensible, auditable inspection record and inspection planning against API 510, API 570 and API 653.",
    "whereCompetitorWins": [
      "Long track record and deep familiarity among North American refining and midstream integrity teams",
      "Mature inspection data management and planning workflows aligned to API 510/570/653 practice",
      "Established reporting and audit-evidence patterns that many US and Canadian operators already run their programmes around",
      "A sensible default where the buyer wants an incumbent, well-understood IDMS and has an internal integrity team to run it"
    ],
    "whereAtlantisWins": "Atlantis adds the 3D twin and the execution layer around the same integrity discipline: condition rendered spatially rather than only tabularly, damage mechanisms assigned per API RP 571 against actual process service, API 579 Level 1 and Level 2 assessments run against the stored thickness grid, and - critically - the inspection that produced the data managed on the same platform, with certification currency, calibration traceability and offline field capture. It also serves inspection contractors directly, which an owner-side IDMS does not attempt.",
    "ndtGaps": [
      "No native 3D asset twin with spatially rendered condition and remaining-life views",
      "No personnel certification currency with dispatch lockout",
      "No calibration register with ISO 17025 traceability",
      "No contractor-side multi-client operation, per-client reporting or job costing",
      "Damage-mechanism assignment and FFS workflow depth vary by configuration rather than being native to the core model"
    ],
    "migrationPath": "Migration from an established IDMS is mostly a data-quality exercise rather than a technical one. Equipment and circuit registers, CML registers with their identities, thickness histories and inspection documents export cleanly in tabular form and import in bulk; the work is reconciling CML identity and confirming which historical readings are trustworthy enough to drive corrosion rates. That reconciliation is scoped as an explicit workstream, and the two systems are commonly run in parallel for one inspection cycle before cutover.",
    "comparisonRows": [
      {
        "factor": "Core strength",
        "atlantis": "3D twin plus inspection execution and integrity assessment on one platform",
        "competitor": "Established owner-side inspection data management and planning"
      },
      {
        "factor": "Spatial condition view",
        "atlantis": "Native 3D twin with colour-coded remaining life and FFS zones",
        "competitor": "Primarily tabular and drawing-based"
      },
      {
        "factor": "Personnel and calibration control",
        "atlantis": "Native certification currency and ISO 17025 calibration traceability",
        "competitor": "Not in scope"
      },
      {
        "factor": "FFS (API 579)",
        "atlantis": "Level 1 and Level 2 native against the stored thickness grid",
        "competitor": "Typically external or configuration-dependent"
      },
      {
        "factor": "Contractor operation",
        "atlantis": "Native multi-client, per-client templates, job costing",
        "competitor": "Owner-operator orientation"
      },
      {
        "factor": "Migration",
        "atlantis": "Bulk import of registers, CMLs, thickness history and documents",
        "competitor": "n/a - usually the source system"
      },
      {
        "factor": "Data ownership",
        "atlantis": "Documented schema, full export any time",
        "competitor": "Export supported; scope per contract"
      }
    ],
    "faqs": [
      [
        "Should we replace Visions Enterprise with Atlantis?",
        "Only if you want something it does not do - a 3D twin, native API 579 assessment against the stored thickness grid, or management of the inspection execution itself. If your Visions deployment is well-populated and your integrity team is happy with it, the higher-return move is usually to fix the data-collection layer feeding it and integrate."
      ],
      [
        "How hard is the data migration?",
        "Technically straightforward, practically a data-quality exercise. Registers, CMLs, thickness history and documents import in bulk. The real work is reconciling CML identity and deciding which historical readings are trustworthy enough to drive corrosion rates - budget for that explicitly and run both systems in parallel for one cycle."
      ],
      [
        "Does Atlantis support API 510, 570 and 653 planning the same way?",
        "Yes, with the difference that next-inspection dates are computed from measured corrosion rates per CML rather than from fixed intervals, and the resulting plan renders spatially on the twin as well as in the inspection schedule."
      ]
    ]
  },
  "sphera-asset-integrity": {
    "competitorName": "Sphera Asset Integrity & Operational Risk",
    "positioning": "Sphera is a large ESG, operational-risk and process-safety software vendor whose portfolio includes asset integrity and operational risk management, strengthened by its acquisition of PAS Global. It is positioned at enterprise buyers who want process safety, operational risk, control-system integrity and asset integrity governed under one vendor relationship, and it is typically bought by corporate HSE and risk functions as much as by plant integrity teams.",
    "whereCompetitorWins": [
      "Breadth across process safety, operational risk, ESG reporting and control-system integrity under a single vendor",
      "Strong fit where a corporate HSE or risk function is the buyer and enterprise governance is the primary requirement",
      "Established enterprise commercial and support structures for very large multi-site organisations",
      "Control-system and OT asset visibility inherited from the PAS Global side of the portfolio"
    ],
    "whereAtlantisWins": "Atlantis is narrower and deeper. It concentrates on fixed-equipment mechanical integrity driven by measured inspection data - CML-resolution thickness trending, damage mechanisms per API RP 571, RBI under API 580/581 and fitness-for-service under API 579 - and on the inspection execution that produces that data. For a plant integrity team whose problem is that inspection data is scattered, unprovenanced and not driving the inspection plan, that focus delivers faster than an enterprise risk platform, and it deploys per unit in weeks rather than as a corporate programme.",
    "ndtGaps": [
      "Fixed-equipment condition data at CML resolution is not the centre of the product model",
      "No personnel certification currency or dispatch lockout for NDT methods",
      "No calibration register with ISO 17025 traceability for inspection instruments and reference blocks",
      "API 579 fitness-for-service assessment against a stored thickness grid is not a native workflow",
      "No contractor-side operation for inspection service providers"
    ],
    "migrationPath": "These products usually coexist rather than compete directly. Corporate process-safety and operational-risk governance stays where it is; Atlantis provides the fixed-equipment integrity evidence and inspection execution beneath it, and pushes integrity status, overdue inspections and FFS outcomes upward through API so the enterprise risk picture stays current without integrity engineers re-keying it.",
    "comparisonRows": [
      {
        "factor": "Scope",
        "atlantis": "Deep on fixed-equipment integrity and inspection execution",
        "competitor": "Broad across process safety, operational risk, ESG and control-system integrity"
      },
      {
        "factor": "Typical buyer",
        "atlantis": "Plant integrity team or inspection contractor",
        "competitor": "Corporate HSE, risk or governance function"
      },
      {
        "factor": "Condition data resolution",
        "atlantis": "CML and TML level with full thickness time series",
        "competitor": "Generally equipment and risk-register level"
      },
      {
        "factor": "FFS (API 579)",
        "atlantis": "Level 1 and Level 2 native",
        "competitor": "Not a native workflow"
      },
      {
        "factor": "Inspection execution",
        "atlantis": "Certification, calibration, scheduling, offline field capture, reporting",
        "competitor": "Out of scope"
      },
      {
        "factor": "Deployment",
        "atlantis": "Per unit, typically 10-14 weeks to first unit live",
        "competitor": "Enterprise programme"
      },
      {
        "factor": "Coexistence",
        "atlantis": "Designed to feed enterprise risk platforms by API",
        "competitor": "Consumes integrity status from underlying systems"
      }
    ],
    "faqs": [
      [
        "Do Atlantis and Sphera compete?",
        "Rarely head-on. Sphera is usually bought by a corporate risk or HSE function for enterprise governance; Atlantis is bought by a plant integrity team or an inspection contractor for fixed-equipment condition and inspection execution. The common arrangement is Atlantis feeding integrity status and overdue-inspection data upward into the enterprise risk picture."
      ],
      [
        "Which one owns the inspection plan?",
        "In practice, the system holding CML-resolution thickness data should drive the inspection plan, because next-inspection dates under API 510, 570 and 653 depend on measured corrosion rates. Enterprise risk platforms consume that outcome rather than compute it."
      ],
      [
        "Can integrity status be reported upward automatically?",
        "Yes - integrity status, overdue inspections, RBI ranking changes and FFS outcomes are exposed by REST API and can be pushed on a schedule or on change into an enterprise risk or ESG reporting layer."
      ]
    ]
  },
  "sap-apm": {
    "competitorName": "SAP Asset Performance Management (SAP APM)",
    "positioning": "SAP APM is SAP's asset performance management offering, positioned as the analytics and strategy layer above SAP Plant Maintenance and S/4HANA - covering asset health indicators, failure-mode and reliability strategy, and predictive maintenance for organisations already standardised on SAP. Its centre of gravity is maintenance strategy and reliability driven by sensor and maintenance-history data.",
    "whereCompetitorWins": [
      "Native integration with SAP S/4HANA and SAP Plant Maintenance, including master data, notifications, orders and cost objects",
      "Single-vendor governance and existing enterprise support for organisations already committed to SAP group-wide",
      "Reliability strategy tooling - FMEA, criticality and maintenance strategy development sitting close to the work-management system",
      "Sensible default when the primary requirement is maintenance and reliability across a large owned estate rather than inspection-driven integrity"
    ],
    "whereAtlantisWins": "Atlantis models what SAP APM does not: inspection at CML resolution. Thickness time series per corrosion monitoring location, indications tied to specific welds, damage mechanisms per API RP 571, RBI under API 580/581 computed from measured rather than assumed corrosion rates, and API 579 fitness-for-service against the stored thickness grid. It also manages the inspection execution - technician certification currency, instrument calibration traceability, offline field capture, procedure revision control and report provenance - which determines whether the data in any integrity system can be defended in an audit.",
    "ndtGaps": [
      "No CML or TML data model, so thickness trending per location is not native",
      "No structured NDT result model for UT, PAUT, TOFD, RT, MT, PT or ET indications",
      "No API 579 fitness-for-service engine",
      "Damage-mechanism assignment per API RP 571 is not part of the core model",
      "No inspection-personnel qualification or instrument calibration control"
    ],
    "migrationPath": "This is an integration story, not a replacement story. SAP remains the system of record for work management, materials and cost; Atlantis holds inspection and integrity data and pushes findings back as notifications and work orders in SAP PM, with equipment master data flowing the other way so the two registers stay aligned. Operators that have tried to model CMLs in SAP characteristics generally find the maintenance burden unsustainable, and the usual outcome is to move that data to a purpose-built integrity layer while keeping SAP authoritative for work and cost.",
    "comparisonRows": [
      {
        "factor": "Centre of gravity",
        "atlantis": "Inspection-driven fixed-equipment integrity",
        "competitor": "Maintenance strategy and reliability above SAP PM"
      },
      {
        "factor": "CML thickness trending",
        "atlantis": "Native time series per CML with computed corrosion rates",
        "competitor": "Not modelled natively"
      },
      {
        "factor": "NDT result model",
        "atlantis": "UT, PAUT, TOFD, RT, MT, PT, ET results structured and tied to welds and CMLs",
        "competitor": "Not modelled natively"
      },
      {
        "factor": "FFS (API 579)",
        "atlantis": "Level 1 and Level 2 native",
        "competitor": "Not offered"
      },
      {
        "factor": "RBI (API 580/581)",
        "atlantis": "Native, driven by measured corrosion rates",
        "competitor": "Strategy and criticality tooling rather than API 581 RBI on measured thickness"
      },
      {
        "factor": "Work management",
        "atlantis": "Integrates - raises notifications and orders in SAP PM",
        "competitor": "Native, and should stay authoritative"
      },
      {
        "factor": "Best arrangement",
        "atlantis": "Integrity and inspection layer beneath SAP",
        "competitor": "Enterprise work, materials and cost system of record"
      }
    ],
    "faqs": [
      [
        "Can we just model CMLs in SAP instead of buying another system?",
        "It is technically possible using characteristics and measuring points, and some operators have done it. The recurring problem is maintenance burden: CML registers change constantly, thickness readings arrive in bulk from contractors, and corrosion-rate computation and API 579 assessment are not native. Most sites that try it eventually move the inspection data to a purpose-built layer while keeping SAP authoritative for work and cost."
      ],
      [
        "How does Atlantis integrate with SAP PM?",
        "Two-way. Equipment master data and functional locations flow from SAP so the registers stay aligned; inspection findings raise notifications and work orders back in SAP PM with traceability to the inspection report that generated them."
      ],
      [
        "Does this duplicate our SAP APM investment?",
        "No, because they operate on different data. SAP APM works from sensor and maintenance history to drive reliability strategy; Atlantis works from measured inspection data to drive integrity and remaining-life decisions on fixed equipment. Rotating equipment and fixed equipment genuinely need different models."
      ]
    ]
  }
};
