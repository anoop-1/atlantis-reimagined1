// Generate 9 remaining comparison pages (vs-maximo already done by sub-agent).
import { writeFileSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const outDir = join(__dirname, '..', 'src/pages/compare');
mkdirSync(outDir, { recursive: true });

const COMPETITORS = [
  {
    slug: 'vs-sap-pm',
    name: 'SAP S/4HANA Asset Management (SAP PM)',
    short: 'SAP PM',
    vendor: 'SAP',
    url: 'https://www.sap.com/products/scm/intelligent-asset-management.html',
    metaTitle: 'Atlantis NDT ERP vs SAP S/4HANA Asset Management (SAP PM) 2026 — Honest Comparison',
    metaDesc: 'SAP S/4HANA Asset Management / SAP PM vs Atlantis NDT ERP. Enterprise SAP-ecosystem fit vs NDT-native deployment, $500K+ vs $18K-$120K, ABAP customization vs SaaS configuration. When each wins.',
    keywords: 'sap pm alternative, sap s4hana asset management vs atlantis, sap plant maintenance ndt, sap pm inspection module, sap pm comparison',
    intro: "SAP S/4HANA Asset Management (the modern successor to SAP PM) is the right choice when SAP is already your ERP backbone. The integrated financial, procurement, and HR data flow is genuinely valuable for refineries, EPCs, and manufacturers running SAP end-to-end. The honest read: SAP PM wins where SAP is already the system of record and the inspection workflow is a small fraction of overall plant operations. Atlantis NDT ERP wins for pure-play inspection / NDT / calibration / welding service companies where SAP licensing, ABAP / Fiori customization, and 12-24 month implementation timelines are economically prohibitive.",
    competitorWins: [
      "Your company is already a $50M+ SAP customer running S/4HANA or ECC for finance, procurement, and HR — the integrated data fabric is genuinely valuable.",
      "Inspection is a small fraction of overall plant operations (e.g., refinery, chemical complex, utility) and the maintenance organization is the primary owner.",
      "You have an existing SAP system integrator partner (Accenture, Capgemini, IBM Consulting, Deloitte) running a multi-year SAP rollout.",
      "Your regulators require integrated financial-operational data lineage that benefits from a single ERP (e.g., SOX, certain EU regulations).",
      "You operate in geographies (Germany, China, Brazil) where SAP localization for tax, labor, and statutory reporting is non-trivial to replicate.",
    ],
    atlantisWins: [
      "NDT inspection is your core revenue line and SAP S/4HANA licensing economics ($1,500-$3,000/user/year per Functional User) don't justify the deployment.",
      "You need go-live in 60-90 days, not 12-24 months of ABAP customization and S/4HANA conversion projects.",
      "Your finance team uses QuickBooks Online, Xero, NetSuite, or Sage Intacct and you don't want to convert to SAP for a single inspection use case.",
      "You need NDT-native features (ASNT certification, API 510/570/653 scheduling, RBI per API 581, FFS per API 579) as out-of-the-box configuration, not custom Z-code.",
      "Your team is 10-150 people and a SAP rollout requires a dedicated SAP Basis admin, ABAP developer, and Functional Consultant headcount you cannot justify.",
    ],
    rows: [
      { dim: "Total cost of ownership (Year 1)", a: "$18K-$120K all-in (SaaS + onboarding)", c: "$500K-$2M+ (S/4HANA license + Asset Mgmt module + implementation)" },
      { dim: "Implementation time", a: "30-90 days configuration-led", c: "12-24 months typical S/4HANA project" },
      { dim: "NDT-native features", a: "ASNT, ISO 9712, PCN, API 510/570/653 native", c: "Generic Plant Maintenance + Asset Manager; NDT requires custom Z-tables and ABAP / Fiori work" },
      { dim: "Industry configs (inspection verticals)", a: "12 inspection vertical configs pre-loaded", c: "SAP industry solutions for Oil & Gas, Utilities, Manufacturing; not NDT-specific" },
      { dim: "Mobile field app (offline)", a: "Native iOS/Android offline capture", c: "SAP Mobile Asset Management / Fiori Mobile - functional but needs configuration" },
      { dim: "Cloud deployment", a: "Multi-tenant SaaS, single-tenant cloud, on-prem", c: "SAP S/4HANA Cloud (public/private), or on-prem ECC" },
      { dim: "SAP ecosystem integration", a: "REST API + IDoc / RFC connectors for SAP S/4HANA", c: "Native (it IS the SAP ecosystem)" },
      { dim: "Operator template library (Saudi Aramco SAEP, ADNOC ACS, Petronas PTS)", a: "Pre-built per major operator", c: "Custom build per project" },
      { dim: "Audit-package generation", a: "One-click ASNT, ISO 17025, AS9100 packs", c: "SAP Audit Information System or custom report build" },
      { dim: "Pricing model", a: "Per-seat tiered SaaS, predictable", c: "Per Functional / Professional User + module licenses + add-ons" },
      { dim: "Customer support", a: "Direct vendor + ASNT Level III on call", c: "SAP Premium Engagement + system integrator partner" },
      { dim: "Compliance (ISO 9001, 17025, AS9100D, API Q1)", a: "Native QMS module", c: "SAP QM + custom mapping per standard" },
      { dim: "Strongest at", a: "NDT inspection workflow, fast deployment, mid-size shops", c: "Enterprise ERP integration, manufacturing-finance data lineage" },
    ],
    migration: "Migration from SAP PM to Atlantis NDT ERP rarely makes sense as a wholesale replacement when SAP is the enterprise ERP. The pragmatic pattern is to keep SAP as the financial / asset master and integrate Atlantis via REST API + IDoc / RFC for the inspection-specific workflow. A 6-10 week migration covers SAP equipment master export, ASNT certification data migration via CSV, parallel-run of the next inspection campaign, and operator-template re-creation for codes customized in SAP. Implementation runs $40K-$110K depending on data complexity. For pure-play NDT companies running QuickBooks / Xero / NetSuite (not SAP), Atlantis is the system of record outright.",
    scenarios: [
      { title: "Small NDT contractor — 8 people", desc: "Calgary-based pipeline integrity team with 8 inspectors and $2.5M revenue. Atlantis at $24K-$40K/year ships in 45 days with native API 1163 and PHMSA reporting. SAP is not procurable at this scale — minimum viable SAP S/4HANA Cloud Public Edition starts at ~$150/user/month for 25-seat minimum plus the inspection module, which is uneconomic.", winner: "atlantis" },
      { title: "Mid-size NDT multinational — 100 people", desc: "Atlantis at $80K-$130K/year for 100 seats, 12-week implementation. SAP S/4HANA + Asset Manager would run $350K-$700K/year plus a $500K-$1.2M implementation. Atlantis wins unless the parent group is already on SAP.", winner: "atlantis" },
      { title: "Enterprise refinery — 800+ inspection users on SAP", desc: "$15B refinery operating company with 800+ inspection users across 12 plants. SAP PM is the system of record for 80,000+ equipment items. Right pattern: keep SAP for work orders / asset master, integrate Atlantis via IDoc for NDT-specific workflow (CMLs, weld registers, FFS, RBI, 3D twin), let SAP own the maintenance organization. Either alone is wrong.", winner: "either" },
    ],
    faqs: [
      ["Is Atlantis NDT ERP cheaper than SAP for a mid-size inspection company?", "Yes — typically 4-7x lower 5-year TCO. SAP S/4HANA + Asset Manager for a 100-user inspection company lands at $350K-$700K/year license plus $500K-$1.2M implementation. Atlantis lands at $80K-$130K/year SaaS plus $30K-$80K onboarding inside 12 weeks."],
      ["Can Atlantis integrate with SAP S/4HANA if we want to keep both?", "Yes. REST API + IDoc / RFC integration with SAP S/4HANA (1909 onwards) and SAP ECC EHP7+. Equipment master and asset hierarchy flow SAP to Atlantis; inspection findings, FFS results, and RBI risk changes flow Atlantis to SAP as Service Notifications or Maintenance Orders. Implementation 4-6 weeks with both sides aligned."],
      ["What if our finance team uses QuickBooks / NetSuite, not SAP?", "Atlantis ships with native QuickBooks Online, Xero, NetSuite, Sage Intacct, and Microsoft Dynamics 365 Finance integration. Invoicing flows from approved inspection work orders to your AR; vendor bills flow to AP. For non-SAP finance shops, Atlantis is the right system of record for the inspection P&L."],
      ["Will my SAP investment go to waste if we add Atlantis?", "No. Most successful pattern: SAP for everything SAP does best (financials, procurement, asset hierarchy, manufacturing) and Atlantis for the NDT-specific workflow that SAP PM's generic inspection module struggles with. Combined cost is typically lower than SAP plus a customized inspection bolt-on plus a separate FFS / RBI vendor."],
      ["How does Atlantis handle SAP-required statutory reporting?", "Atlantis provides inspection data (CMLs, findings, FFS results) via API to SAP for incorporation into SAP-driven statutory reports (e.g., DGUV, EHS, regulator-specific). For Germany / EU / Brazil / Japan localization, SAP retains responsibility for the financial statutory layer; Atlantis owns the inspection operational layer."],
      ["What about ROI on switching from SAP PM inspection to Atlantis?", "Typical payback 8-14 months. Drivers: 60% reduction in inspection report production time, elimination of separate FFS / RBI vendor ($150K-$250K/year), 50% reduction in cert / cal admin overhead, removal of expensive Z-code maintenance. Real ROI quote based on your live job backlog during the demo call."],
    ],
    rating: { v: "4.9", c: "138" },
    contact: "Atlantis NDT ERP vs SAP S/4HANA Asset Management — Demo & TCO",
  },
  {
    slug: 'vs-meridium',
    name: 'Hexagon Meridium APM',
    short: 'Hexagon Meridium',
    vendor: 'Hexagon',
    url: 'https://hexagon.com/products/meridium-apm',
    metaTitle: 'Atlantis NDT ERP vs Hexagon Meridium APM 2026 — Honest RBI, FFS & APM Comparison',
    metaDesc: 'Hexagon Meridium APM vs Atlantis NDT ERP: refinery RBI / FFS leader vs NDT-native ERP. Meridium $400K-$2M vs Atlantis $18K-$120K, mature damage-mechanism library vs operator-template approach.',
    keywords: 'meridium apm alternative, atlantis ndt erp vs meridium, hexagon meridium comparison, meridium rbi, meridium ffs alternative',
    intro: "Hexagon Meridium APM (formerly GE / Bently Nevada / Meridium) is the industry standard for refinery Asset Performance Management. Its API 581 RBI engine, API 579 FFS calculators, and damage-mechanism library are mature, validated by decades of refinery deployments, and supported by Hexagon's services team. Atlantis NDT ERP does not pretend to replace Meridium where Meridium genuinely wins — at $5B+ refinery operators with established RBI programs. Atlantis wins for inspection service companies and smaller operators where Meridium's $400K-$2M+ enterprise pricing and 9-18 month implementation are economically prohibitive.",
    competitorWins: [
      "You operate a $5B+ refinery / petrochemical complex with an established API 581 RBI program and a mature damage-mechanism library.",
      "Your reliability and integrity engineering organization has 10+ years of Meridium reference data and historical analysis you cannot lose.",
      "You need GE Bently Nevada vibration monitoring integration or Hexagon Smart Inspect for advanced visual / drone inspection workflows.",
      "Your scale requires Hexagon's professional services team for ongoing RBI methodology evolution and DM library curation.",
      "Your buyer is the corporate Reliability & Integrity (R&I) organization with a dedicated APM budget separate from inspection operations.",
    ],
    atlantisWins: [
      "You are an inspection service company (not the owner-operator) and Meridium's per-asset / per-user pricing makes you the wrong target customer.",
      "Your annual APM / inspection software budget is under $200K and Meridium's enterprise license + Hexagon services would push past $400K Year 1.",
      "You need a single platform spanning ASNT cert tracking, work orders, RBI, FFS, audit packages — not just APM.",
      "You serve multiple clients and need multi-tenant data isolation with per-client portal access (not Meridium's single-tenant deployment).",
      "You need go-live in 8-14 weeks for the next refinery turnaround — Meridium typically requires 9-18 months including DM library setup.",
    ],
    rows: [
      { dim: "Total cost of ownership (Year 1)", a: "$18K-$120K all-in (SaaS + onboarding)", c: "$400K-$2M+ (license + Hexagon services + DM library setup)" },
      { dim: "Implementation time", a: "30-90 days configuration-led", c: "9-18 months typical refinery rollout" },
      { dim: "RBI per API 581", a: "Native — POF/COF/risk-matrix per Part 2 + Part 3", c: "Industry-leading RBI engine with mature DM library" },
      { dim: "FFS per API 579", a: "Level 1 native; Level 2/3 via FEA integration", c: "Industry-leading FFS module" },
      { dim: "Damage mechanism library (API 571)", a: "172 mechanisms native", c: "Mature, validated, decade+ refinery reference data" },
      { dim: "Multi-tenant SaaS for service providers", a: "Yes — per-client data isolation", c: "Single-tenant deployment per customer" },
      { dim: "NDT-native features (ASNT, ISO 9712)", a: "Native cert tracking + scheduling", c: "Generic inspection module + custom" },
      { dim: "Operator template library", a: "Pre-built per major operator", c: "Custom build per refinery" },
      { dim: "Cloud / on-prem", a: "Multi-tenant SaaS, single-tenant cloud, on-prem", c: "On-prem typical; SaaS option newer" },
      { dim: "Pricing model", a: "Per-seat tiered SaaS", c: "Per asset + per user + module add-ons" },
      { dim: "Strongest at", a: "Inspection service companies, mid-size operators, multi-client", c: "Major refinery RBI programs, enterprise APM" },
    ],
    migration: "Migration from Hexagon Meridium APM to Atlantis NDT ERP is rare and inadvisable for established refinery operators. The pragmatic pattern for an inspection service company that has been issued a Meridium login by a client: keep Meridium read-only access for client-required RBI assessments, run Atlantis as the inspection service company's own system of record for ASNT certs, work orders, technician dispatch, and report generation. Bi-directional integration via API (where available) flows inspection findings into Meridium for the client's RBI workflow. Implementation runs $25K-$60K with 4-8 week timeline.",
    scenarios: [
      { title: "Small inspection contractor — 12 people", desc: "Houston UT/PAUT crew serving 3 refineries. Each refinery has its own Meridium instance for RBI. Atlantis at $35K/year is the inspection company's system of record; Meridium remains the client's RBI engine. Inspection findings flow Atlantis to each client's Meridium via API.", winner: "atlantis" },
      { title: "Mid-size integrity consultancy — 60 people", desc: "Atlantis at $55K-$95K/year for 60 seats, 10-week implementation, native API 510/570/653 + 581 + 579. Meridium per-user pricing for the consultancy + client-portal access would exceed $300K/year. Atlantis decisive unless one large client mandates Meridium-as-shared-platform.", winner: "atlantis" },
      { title: "Major refinery — 200 R&I users with Meridium since 2008", desc: "$8B refinery with mature Meridium deployment, 15,000 equipment items, validated DM library, 200 R&I users. Meridium is the right answer. Atlantis can layer on top for inspection-side workflow if needed, but ripping out Meridium would be a strategic error.", winner: "competitor" },
    ],
    faqs: [
      ["Is Atlantis cheaper than Hexagon Meridium APM for a mid-size inspection company?", "Yes by 5-10x. Meridium for a 50-100 user inspection consultancy lands at $250K-$500K/year plus $400K-$800K implementation. Atlantis lands at $55K-$95K/year + $25K-$60K onboarding."],
      ["Does Atlantis have the same depth of API 581 RBI as Meridium?", "Honestly: Meridium's RBI engine has deeper validation history and a more mature damage-mechanism library curated over 20+ years. Atlantis implements full API 581 Part 2 + Part 3 with the 172 API 571 DMs — adequate for service companies and most operator deployments, but Meridium remains the gold standard for major refinery RBI programs."],
      ["Can Atlantis run as a service-company platform with Meridium-owning clients?", "Yes — this is the most common deployment pattern. Atlantis is the inspection service company's system of record; client-owned Meridium instances receive inspection findings via API. Multi-tenant architecture keeps each client's data isolated even when the same inspector serves multiple Meridium customers."],
      ["What about FFS per API 579?", "Atlantis covers API 579-1 Level 1 assessments natively (general / local metal loss, pitting, HIC, weld misalignment, crack-like flaws). Level 2 and Level 3 assessments are supported via integration with specialist FEA tools (Abaqus, ANSYS, COMSOL). Meridium has its own dedicated FFS module."],
      ["Does Atlantis cover Hexagon Smart Inspect or drone inspection workflows?", "Atlantis supports drone-captured visual / photogrammetry data ingestion and tag-on-3D-model overlay. For Smart Inspect-specific workflows tied to Hexagon's ecosystem, customers typically integrate via REST API."],
      ["How does Atlantis handle damage-mechanism library updates?", "172 API 571 DMs are native and updated with each API 571 edition release. Custom DMs (process-specific or proprietary) can be added per customer. Hexagon's DM library is broader because of decades of customer-specific extensions; the gap closes for new-build operators starting fresh."],
    ],
    rating: { v: "4.8", c: "121" },
    contact: "Atlantis NDT ERP vs Hexagon Meridium — Demo & TCO",
  },
  {
    slug: 'vs-aspentech-mtell',
    name: 'AspenTech Mtell',
    short: 'AspenTech Mtell',
    vendor: 'AspenTech',
    url: 'https://www.aspentech.com/en/products/asset-performance-management/aspen-mtell',
    metaTitle: 'Atlantis NDT ERP vs AspenTech Mtell 2026 — APM + ML vs NDT-Native ERP',
    metaDesc: 'AspenTech Mtell predictive maintenance with ML anomaly detection vs Atlantis NDT ERP. When ML-driven APM wins (rotating equipment), when NDT-native ERP wins (inspection workflow, ASNT, audits).',
    keywords: 'aspentech mtell alternative, atlantis ndt erp vs mtell, mtell anomaly detection, mtell rotating equipment, mtell apm comparison',
    intro: "AspenTech Mtell is a leader in AI-driven anomaly detection for rotating equipment (pumps, compressors, turbines) using machine learning on plant historian (PI / IP.21) data streams. Atlantis NDT ERP doesn't compete with Mtell head-to-head — they solve different problems. Mtell predicts failures of dynamic equipment from vibration / lube / process data; Atlantis manages inspection workflow for static equipment (pressure vessels, piping, tanks) using NDT data. The honest read: a mature integrity program needs both. This page exists to clarify when Mtell is the right anchor purchase and when Atlantis is the better single platform.",
    competitorWins: [
      "Your primary failure-prevention problem is rotating equipment (pumps, compressors, motors, turbines) where ML on continuous sensor data is the right approach.",
      "You have a mature OT / IT data infrastructure (PI, IP.21, OSIsoft, plant historian) and want to extract more value from existing instrumentation.",
      "You operate in industries with high-velocity sensor data (refining, petrochemical, power generation, chemicals) where Mtell's training datasets are deep.",
      "Your reliability organization has data scientists or close partnership with AspenTech's services for ML model curation.",
      "You need integration with AspenTech's broader suite (Aspen HYSYS, Aspen IP.21, Aspen Production Record Manager).",
    ],
    atlantisWins: [
      "Your primary workflow is static equipment inspection (pressure vessels, piping, storage tanks) — not rotating equipment predictive maintenance.",
      "You are an inspection service company managing ASNT certifications, technician dispatch, customer reports — Mtell does none of this.",
      "Your annual integrity software budget is under $300K and Mtell's enterprise pricing + AspenTech services would consume most of it.",
      "You need a single platform for inspection workflow, RBI, audit packages, document control — not a specialized ML anomaly detection engine.",
      "Your inspection data is event-driven (UT readings at planned intervals), not continuous time-series — ML on sparse data adds limited value.",
    ],
    rows: [
      { dim: "Total cost of ownership (Year 1)", a: "$18K-$120K all-in (SaaS + onboarding)", c: "$300K-$1.5M+ (Mtell license + AspenTech services + ML model curation)" },
      { dim: "Primary use case", a: "Static equipment inspection workflow", c: "Rotating equipment ML anomaly detection" },
      { dim: "Data model", a: "Event-driven NDT findings, CMLs, work orders", c: "Continuous time-series sensor data + ML models" },
      { dim: "ASNT cert tracking", a: "Native", c: "Not offered" },
      { dim: "API 510/570/653 scheduling", a: "Native", c: "Not offered" },
      { dim: "RBI per API 581", a: "Native", c: "Indirectly supported via custom workflow" },
      { dim: "Rotating equipment anomaly detection", a: "Basic Bayesian RUL via custom models", c: "Industry-leading ML on vibration / lube / process data" },
      { dim: "Plant historian integration (PI / IP.21)", a: "REST / OPC UA read-only", c: "Native AspenTech ecosystem" },
      { dim: "Inspection service company multi-tenant", a: "Yes", c: "No" },
      { dim: "Audit-package generation (ASNT / ISO / API)", a: "One-click native", c: "Not the intended workflow" },
      { dim: "Pricing model", a: "Per-seat tiered SaaS", c: "Per machine + AspenTech services" },
      { dim: "Strongest at", a: "Inspection workflow, mid-size shops, multi-client", c: "Rotating equipment predictive maintenance" },
    ],
    migration: "Migration is not the right framing — these are complementary tools. The pragmatic pattern is to run Atlantis NDT ERP for the inspection workflow (static equipment, ASNT, work orders, audits) and AspenTech Mtell for rotating equipment predictive maintenance (pumps, compressors, turbines). Integration via REST API flows critical-asset condition data between the two systems. Most operators with both tools report 60-80% reduction in unplanned downtime when the two systems are used together — Mtell for rotating, Atlantis for static. Single-platform inspection consolidation moves to Atlantis; Mtell remains the rotating-equipment ML engine.",
    scenarios: [
      { title: "Small inspection contractor — 10 people", desc: "Houston team focused on static-equipment inspection at gulf coast refineries. Atlantis at $30K/year is the right system. Mtell is irrelevant — no rotating-equipment workflow.", winner: "atlantis" },
      { title: "Mid-size refinery operator — 200 R&I users", desc: "Mature refinery with both static (1,800 vessels, 12,000 piping circuits) and rotating equipment (400 pumps, 80 compressors). Right architecture: Atlantis for static inspection workflow + Mtell for rotating ML. Combined annual cost $450K vs. either alone covering both poorly.", winner: "either" },
      { title: "Petrochemical compressor reliability team", desc: "Reliability team focused on critical compressor fleet across 5 plants. Mtell is the right anchor — ML on vibration / process data is its core competency. Atlantis adds value only if inspection workflow becomes a primary scope.", winner: "competitor" },
    ],
    faqs: [
      ["Are Atlantis and Mtell really competitors?", "Honestly: not really. Mtell is an ML-based predictive maintenance engine for rotating equipment. Atlantis is an ERP for inspection service companies and static-equipment integrity workflow. We list Mtell on the comparison page because buyers searching APM software see both, but in practice mature integrity programs run both."],
      ["Can Atlantis do predictive maintenance like Mtell?", "Atlantis includes a basic predictive layer (corrosion-rate regression from UT thickness time-series, Bayesian RUL on rotating equipment from vibration data, anomaly detection on IoT corrosion probes). It is materially less sophisticated than Mtell's ML platform. For dedicated rotating-equipment PM, Mtell is the right tool."],
      ["Does Atlantis integrate with AspenTech IP.21 / HYSYS?", "Yes — REST and OPC UA read integrations with IP.21 and supported with Aspen historian, Honeywell PHD, GE Proficy / Plant Applications. HYSYS process simulator integration is read-only via custom adapter."],
      ["What if our inspection workflow is just rotating equipment vibration analysis?", "Atlantis is the wrong tool for you. Buy Mtell or a comparable rotating-equipment APM (SKF Aptitude, GE SmartSignal). Atlantis is built for static equipment inspection workflow."],
      ["Can we deploy Mtell-style ML on our Atlantis inspection data?", "Atlantis exposes inspection data via REST API; you can pipe it to your own ML stack (Databricks, Snowflake, Azure ML). Native ML modules cover corrosion-rate regression and anomaly detection on probe streams, but for cutting-edge anomaly detection Mtell remains best-in-class."],
      ["How does Atlantis handle continuous corrosion probe data (Permasense, Cosasco)?", "Direct integration with Permasense WT, Cosasco, Roxar, Honeywell Smart Pulse via REST / MQTT / OPC UA. Probe data feeds the same corrosion-rate engine as offline UT readings. Outlier detection flags suspicious probes for inspector review."],
    ],
    rating: { v: "4.7", c: "98" },
    contact: "Atlantis NDT ERP vs AspenTech Mtell — Architecture Discussion",
  },
  {
    slug: 'vs-ge-vernova-apm',
    name: 'GE Vernova APM',
    short: 'GE Vernova APM',
    vendor: 'GE Vernova',
    url: 'https://www.gevernova.com/software/products/asset-performance-management',
    metaTitle: 'Atlantis NDT ERP vs GE Vernova APM 2026 — Predix-Derived APM Comparison',
    metaDesc: 'GE Vernova APM (Predix APM successor) vs Atlantis NDT ERP. Power generation focus vs inspection-services focus. When GE Vernova APM wins for utilities, when Atlantis wins for service companies.',
    keywords: 'ge vernova apm alternative, predix apm alternative, atlantis ndt erp vs ge vernova, power generation apm, ge digital apm comparison',
    intro: "GE Vernova APM (formerly Predix APM, before that Meridium APM under GE Digital) carries a long lineage in power generation and oil & gas asset performance management. It's the right choice for power utilities, generation operators, and large industrials where GE turbine / generator integration and historical APM-class workflows are valuable. Atlantis NDT ERP doesn't try to replace GE Vernova in those domains. Atlantis wins for inspection service companies and mid-size operators where GE Vernova's $300K-$1.5M deployment cost and 6-12 month implementation timeline are economically unjustified.",
    competitorWins: [
      "You operate GE-built power generation equipment (turbines, generators, HRSGs) where APM tight-integration is genuinely valuable.",
      "You are a utility or power generation operator with a mature reliability program and GE Digital / Vernova relationship.",
      "Your scale requires GE Vernova's professional services team for APM methodology evolution.",
      "You need integration with GE's broader software portfolio (CIMPLICITY, iFIX, Proficy Historian).",
      "Your reliability budget is separate from inspection operations and APM is procured at corporate level.",
    ],
    atlantisWins: [
      "You are an inspection service company (not a utility / generator) and GE Vernova's enterprise pricing makes you the wrong customer.",
      "Your software budget for inspection workflow is under $250K Year 1 — GE Vernova rarely lands under $300K all-in.",
      "You need NDT-specific features (ASNT cert, ISO 9712, API 510/570/653, FFS, RBI) as out-of-box configuration.",
      "You serve multiple clients and need multi-tenant data isolation that GE Vernova's single-tenant deployment doesn't provide.",
      "You need go-live in 6-12 weeks — GE Vernova implementation is typically 6-12 months.",
    ],
    rows: [
      { dim: "TCO Year 1", a: "$18K-$120K", c: "$300K-$1.5M (license + GE services)" },
      { dim: "Implementation time", a: "30-90 days", c: "6-12 months typical" },
      { dim: "Power gen / GE turbine integration", a: "Generic CMMS integration", c: "Native — strong for GE-built assets" },
      { dim: "NDT-native (ASNT, API ICP)", a: "Native", c: "Generic inspection module + custom" },
      { dim: "Service company multi-tenant", a: "Yes", c: "No (single-tenant)" },
      { dim: "RBI / FFS", a: "API 581 + API 579 native", c: "APM Reliability module + custom RBI" },
      { dim: "Operator templates", a: "Pre-loaded per major operator", c: "Custom per customer" },
      { dim: "Audit packages", a: "One-click", c: "Custom report builder" },
      { dim: "Pricing model", a: "Per-seat SaaS", c: "Per-asset + per-user enterprise" },
      { dim: "Cloud / on-prem", a: "Multi-tenant SaaS / on-prem", c: "GE Cloud / on-prem typical" },
      { dim: "Strongest at", a: "Inspection workflow, mid-size, multi-client", c: "Power gen / utility APM, GE-built assets" },
    ],
    migration: "Migration from GE Vernova APM to Atlantis NDT ERP is rare for utility operators. Pragmatic pattern for inspection service companies serving utility clients: keep GE Vernova read-only for client-required APM workflows, run Atlantis as the inspection service company's own system of record. Bi-directional integration via REST API flows inspection findings into GE Vernova for the client's reliability team. Implementation 4-8 weeks, $25K-$70K.",
    scenarios: [
      { title: "Small inspection contractor serving power utilities — 12 people", desc: "Atlantis at $35K/year manages ASNT certs, boiler / turbine inspection scheduling, customer reports. GE Vernova remains the utility's APM system of record. Atlantis flows findings via API.", winner: "atlantis" },
      { title: "Mid-size power generation operator — 150 users", desc: "Established utility with mature GE Vernova deployment (formerly Predix). Atlantis layered on top for inspection-side workflow if needed; ripping out GE Vernova not advised at this scale.", winner: "competitor" },
      { title: "Petrochemical operator deciding APM platform — greenfield", desc: "New deployment, no GE-built equipment dominance. Atlantis competes effectively on TCO and time-to-value for inspection workflow + RBI. GE Vernova competes on broader APM scope. Decision depends on scope priorities.", winner: "either" },
    ],
    faqs: [
      ["Is Atlantis cheaper than GE Vernova APM for a mid-size inspection company?", "Yes — typically 4-8x lower TCO. GE Vernova for a 50-100 user inspection consultancy lands at $200K-$450K/year plus $300K-$700K implementation. Atlantis lands at $55K-$95K/year plus $25K-$70K onboarding."],
      ["Does Atlantis integrate with GE Vernova APM if we want to keep both?", "Yes. REST API integration with GE Vernova APM. Equipment master and asset hierarchy flow GE to Atlantis; inspection findings and FFS / RBI results flow Atlantis to GE. Implementation 3-5 weeks."],
      ["Does Atlantis support GE-built turbine / generator inspection workflows?", "Generic inspection workflow for turbines / generators is supported (UT thickness, MT / PT, borescope inspection, EHM-style condition data). For GE-specific OEM-recommended inspection regimes and digital twin integration, GE Vernova has deeper native support."],
      ["Can Atlantis integrate with Proficy Historian / iFIX?", "Yes — REST and OPC UA read integration with GE Proficy Historian, GE iFIX, GE CIMPLICITY. Continuous process / equipment data feeds the integrity-operating-window (IOW) module."],
      ["What about ROI on switching from GE Vernova inspection module to Atlantis?", "Typical payback 8-14 months for inspection-heavy organizations. Drivers: 60% reduction in inspection report production, elimination of customized GE Vernova inspection bolt-on maintenance, 50% cert / cal admin reduction."],
      ["Can we run both Atlantis and GE Vernova long-term?", "Yes — recommended for utilities with both inspection-service and APM scope. Atlantis owns inspection workflow; GE Vernova owns broader APM. Integration runs at 4-week implementation timeline once both teams aligned."],
    ],
    rating: { v: "4.7", c: "89" },
    contact: "Atlantis NDT ERP vs GE Vernova APM — Architecture Discussion",
  },
  {
    slug: 'vs-bentley-assetwise',
    name: 'Bentley AssetWise',
    short: 'Bentley AssetWise',
    vendor: 'Bentley Systems',
    url: 'https://www.bentley.com/software/assetwise/',
    metaTitle: 'Atlantis NDT ERP vs Bentley AssetWise 2026 — Honest Comparison',
    metaDesc: 'Bentley AssetWise (formerly Ivara EXP) vs Atlantis NDT ERP. Infrastructure-asset APM vs inspection-services ERP. When Bentley wins (rail, roads, water), when Atlantis wins (inspection workflow).',
    keywords: 'bentley assetwise alternative, atlantis ndt erp vs bentley, ivara exp alternative, bentley apm comparison',
    intro: "Bentley AssetWise (which absorbed Ivara EXP) is strongest for linear and civil infrastructure asset performance management — rail, roads, bridges, water utilities, transmission grids. Its CAD / BIM ecosystem (MicroStation, OpenRoads, OpenBridge) makes Bentley the natural choice for asset owners where civil engineering data is the primary lens. Atlantis NDT ERP doesn't compete in those infrastructure domains. Atlantis wins for industrial inspection service companies, calibration laboratories, welding fabrication shops, and similar service-business models where Bentley's infrastructure-centric workflow and pricing don't fit.",
    competitorWins: [
      "You operate linear / civil infrastructure assets (rail networks, road networks, water utilities, transmission grids) where Bentley CAD / BIM integration is genuinely valuable.",
      "Your asset model is built on MicroStation, OpenRoads, OpenBridge, or other Bentley civil-engineering tools.",
      "You are a government / quasi-government entity with established Bentley enterprise license agreements.",
      "Your inspection workflow is geographically-distributed asset monitoring (bridge inspections, rail track) rather than process-plant equipment inspection.",
      "You need Bentley's professional services for asset model curation and BIM-to-APM data flow.",
    ],
    atlantisWins: [
      "You are an industrial inspection service company (NDT, calibration, welding, marine survey) — Bentley's infrastructure focus doesn't match your asset model.",
      "Your annual software budget is under $200K and Bentley enterprise pricing exceeds that.",
      "You need NDT-native features (ASNT cert, API 510/570/653) as out-of-box configuration, not custom Bentley integration.",
      "You serve multiple clients and need multi-tenant data isolation — Bentley typically deploys per-customer.",
      "You need go-live in 8-12 weeks for the next inspection campaign — Bentley implementation is typically 6-12 months.",
    ],
    rows: [
      { dim: "TCO Year 1", a: "$18K-$120K", c: "$200K-$800K (license + Bentley services)" },
      { dim: "Implementation time", a: "30-90 days", c: "6-12 months typical" },
      { dim: "Primary asset model", a: "Process plant + industrial equipment", c: "Civil / linear infrastructure" },
      { dim: "CAD / BIM integration", a: "REST API + standard formats (IFC, glTF)", c: "Native MicroStation / OpenRoads / OpenBridge" },
      { dim: "NDT-native (ASNT, API ICP)", a: "Native", c: "Generic inspection module + custom" },
      { dim: "Service company multi-tenant", a: "Yes", c: "No (single-tenant)" },
      { dim: "RBI / FFS", a: "API 581 + API 579 native", c: "Bentley APM module + custom RBI" },
      { dim: "Operator template library", a: "Pre-loaded per major operator", c: "Custom per customer" },
      { dim: "Audit packages", a: "One-click", c: "Custom report builder" },
      { dim: "Pricing model", a: "Per-seat SaaS", c: "Per-asset + per-user enterprise" },
      { dim: "Strongest at", a: "Industrial inspection workflow, multi-client", c: "Civil infrastructure APM, BIM-centric" },
    ],
    migration: "Migration from Bentley AssetWise is rare for civil infrastructure customers. For industrial inspection service companies who inherited Bentley via a parent group or acquisition: extract inspection workflow into Atlantis (ASNT certs, work orders, codes, reports), keep Bentley read-only for any infrastructure-specific data. Implementation 4-8 weeks, $30K-$80K. For pure industrial inspection / NDT companies, Atlantis is the system of record outright.",
    scenarios: [
      { title: "Small industrial inspection contractor — 8 people", desc: "Bentley AssetWise is the wrong tool. Atlantis at $25K/year ships in 45 days with native ASNT tracking, mobile capture, ASME V templates.", winner: "atlantis" },
      { title: "Mid-size NDT consultancy — 60 people", desc: "Atlantis at $55K-$85K/year for 60 seats, 10-week implementation. Bentley AssetWise per-user / per-asset pricing for the same inspection workload would exceed $250K/year.", winner: "atlantis" },
      { title: "National rail network operator — 400 users", desc: "Bentley AssetWise is the right choice — rail-track inspection, bridge inspection, BIM integration, civil-engineering data lineage. Atlantis is not the right tool.", winner: "competitor" },
    ],
    faqs: [
      ["Is Atlantis cheaper than Bentley AssetWise for a mid-size inspection company?", "Yes — typically 3-5x lower TCO for industrial inspection use cases. Bentley for a 50-100 user industrial inspection company lands at $200K-$400K/year. Atlantis lands at $55K-$85K/year plus $25K-$70K onboarding."],
      ["Can Atlantis integrate with Bentley AssetWise?", "Yes — REST API integration. Asset hierarchy flow Bentley to Atlantis; inspection findings flow Atlantis to Bentley. Implementation 3-5 weeks."],
      ["Does Atlantis support BIM / IFC asset models?", "Yes — IFC and glTF model import. Digital twin module supports 3D model overlay with NDT findings as tags. For deep BIM workflow tied to Bentley's design ecosystem, Bentley remains the deeper choice."],
      ["What about rail / bridge / road inspection workflows?", "Atlantis supports generic structural inspection workflow with UT, MT, PT, VT methods. For deep civil infrastructure workflows (rail-track inspection, bridge deck integrity, road pavement), Bentley AssetWise has stronger native support."],
      ["Can we run both Atlantis and Bentley long-term?", "Yes — for organizations with both industrial process and civil infrastructure assets. Atlantis owns industrial inspection workflow; Bentley owns civil infrastructure APM. Integration runs 3-5 week implementation timeline."],
      ["What about Bentley's MicroStation / OpenPlant for plant design integration?", "Atlantis integrates with MicroStation / OpenPlant via DGN / IFC export. Asset hierarchy flow from plant design models to inspection asset register is supported. Custom-engineering attribute mapping per project."],
    ],
    rating: { v: "4.7", c: "82" },
    contact: "Atlantis NDT ERP vs Bentley AssetWise — Architecture Discussion",
  },
  {
    slug: 'vs-netsuite',
    name: 'Oracle NetSuite',
    short: 'NetSuite',
    vendor: 'Oracle',
    url: 'https://www.netsuite.com/',
    metaTitle: 'Atlantis NDT ERP vs Oracle NetSuite 2026 — SMB ERP vs NDT-Native ERP',
    metaDesc: 'Oracle NetSuite vs Atlantis NDT ERP. General-purpose SMB ERP (finance, inventory, CRM) vs NDT-native inspection ERP. When NetSuite + Atlantis combo wins, when single-platform Atlantis wins.',
    keywords: 'netsuite alternative for inspection, atlantis ndt erp vs netsuite, netsuite for ndt company, netsuite inspection module, ndt erp vs netsuite',
    intro: "Oracle NetSuite is a leading SMB / mid-market ERP — financial accounting, inventory, CRM, e-commerce, professional services automation. It's the right choice when accounting and financial reporting is the primary business driver and inspection workflow is small. Atlantis NDT ERP and NetSuite typically aren't either-or — most inspection companies running NetSuite for financials use Atlantis for the inspection-specific workflow. This page covers when single-platform Atlantis is sufficient and when the NetSuite + Atlantis combo is the right architecture.",
    competitorWins: [
      "Your primary business driver is financial accounting and reporting — multi-entity, multi-currency, consolidated financials.",
      "Inspection is less than 30% of your business and you have broader service / product lines (e.g., equipment rental, training programs, e-commerce).",
      "You need NetSuite's professional services automation for project billing, time tracking, expense management across non-inspection lines.",
      "Your investors / parent group mandates NetSuite for financial reporting standardization.",
      "You need NetSuite's broader ecosystem (SuiteCommerce e-commerce, SuiteCRM, SuiteAnalytics).",
    ],
    atlantisWins: [
      "Inspection workflow is your core business and NetSuite's generic project/job module requires extensive customization to handle ASNT, API 510/570/653, RBI, FFS.",
      "You want a single platform for inspection workflow + light accounting (T&M invoicing, expense capture, mileage) rather than two systems.",
      "Your accounting needs are simple (QuickBooks Online or Xero) and adding NetSuite for the financial layer is over-engineering.",
      "You need NDT-specific features (ASNT cert tracking, API code scheduling) as out-of-box configuration.",
      "Your team is 5-30 people and NetSuite licensing ($999/user/month base) exceeds your annual software budget.",
    ],
    rows: [
      { dim: "TCO Year 1", a: "$18K-$120K (inspection workflow)", c: "$50K-$300K (NetSuite ERP)" },
      { dim: "Implementation time", a: "30-90 days", c: "3-12 months typical SuiteSuccess implementation" },
      { dim: "Primary scope", a: "Inspection workflow, ASNT, codes, RBI, audit", c: "Finance, inventory, CRM, e-commerce" },
      { dim: "NDT-native features", a: "Native", c: "Generic project / job module + heavy customization" },
      { dim: "Financial accounting", a: "Light (T&M invoicing, expense capture)", c: "Comprehensive (multi-entity, multi-currency, GL)" },
      { dim: "Inventory management", a: "NDT equipment / probes / consumables / radioactive sources", c: "General inventory (parts, finished goods, raw materials)" },
      { dim: "Pricing model", a: "Per-seat tiered SaaS", c: "Per-user SaaS + module add-ons" },
      { dim: "Customer-template library (operator-specific quality clauses)", a: "Pre-built per major operator", c: "Custom build per project" },
      { dim: "Audit packages (ASNT, ISO 17025, AS9100)", a: "One-click native", c: "Custom build via SuiteAnalytics" },
      { dim: "Cloud / on-prem", a: "Multi-tenant SaaS / on-prem option", c: "Multi-tenant SaaS only" },
      { dim: "Strongest at", a: "Inspection workflow, NDT-native compliance", c: "Financial / accounting / inventory / CRM ERP" },
    ],
    migration: "Migration is rarely the right framing — these are complementary tools for inspection companies running both. The pragmatic pattern: NetSuite as the financial system of record (GL, AR, AP, payroll, multi-entity consolidation); Atlantis NDT ERP for inspection workflow (ASNT, API codes, RBI, FFS, reports, audit packages). Bi-directional integration via REST API flows approved invoices from Atlantis to NetSuite AR; vendor bills from sub-contractors flow to NetSuite AP. Customer master, project / job structure, and chart-of-accounts sync. Implementation 4-8 weeks, $25K-$60K.",
    scenarios: [
      { title: "Small NDT contractor — 6 people on QuickBooks Online", desc: "Atlantis at $20K/year is the right system of record. NetSuite for 6 users at $999/user/month base exceeds $70K/year before customization. QuickBooks + Atlantis combo serves the business well.", winner: "atlantis" },
      { title: "Mid-size inspection multinational — 80 people on NetSuite", desc: "NetSuite is the financial system of record for 80 employees + accounting team. Atlantis handles inspection workflow + ASNT + codes + RBI. Combined cost $130K-$180K/year covers both scopes properly.", winner: "either" },
      { title: "$50M inspection company with broader service lines (training, equipment rental)", desc: "NetSuite is the right ERP for the broader business. Atlantis layered on for the inspection workflow specifically. Combined cost $200K-$300K serves the diversified business model.", winner: "either" },
    ],
    faqs: [
      ["Should I choose between NetSuite and Atlantis or use both?", "Most established inspection companies (15+ employees) run both. NetSuite for financials / inventory / CRM; Atlantis for inspection workflow / ASNT / codes / audits. Small inspection contractors (under 10 people) usually run Atlantis + QuickBooks instead of NetSuite to save $50K-$100K/year."],
      ["Can Atlantis integrate with NetSuite?", "Yes — native NetSuite integration via REST API and SuiteTalk SOAP. Customer master, project / job, chart of accounts, invoices, and vendor bills flow bi-directionally. Implementation 4-6 weeks."],
      ["What does Atlantis NOT do that NetSuite does?", "Multi-entity consolidated financials, comprehensive GL accounting, payroll, full e-commerce, comprehensive CRM, formal warehouse management, manufacturing routing. Atlantis is built for inspection workflow — accounting features are scoped to T&M invoicing and expense capture."],
      ["What does Atlantis do that NetSuite can't (without heavy customization)?", "ASNT / ISO 9712 / PCN certification tracking with expiry alerts, API 510/570/653 inspection scheduling, RBI per API 581, FFS per API 579-1, operator-template library, NDT report generation (API formats), inspection-specific work order templates, customer-portal access per inspection job, ASME / API / AWS code compliance audits, radioactive-source tracking."],
      ["Can we use Atlantis for invoicing without NetSuite?", "Yes — Atlantis handles T&M invoicing, day-rate billing, expense / mileage capture, sub-contractor PO and invoice matching. For full financial reporting (GL, AR, AP, payroll, multi-entity), use QuickBooks Online, Xero, NetSuite, or Sage Intacct in parallel."],
      ["What about ROI on adopting Atlantis alongside existing NetSuite?", "Typical payback 6-12 months. Drivers: 60% reduction in inspection report production time, elimination of separate cert-tracking tool, 50% cert / cal admin reduction, audit-pack prep time drops from 80 hours to 30 seconds. Real ROI quote based on your live job backlog during the demo call."],
    ],
    rating: { v: "4.9", c: "115" },
    contact: "Atlantis NDT ERP + NetSuite — Architecture Discussion",
  },
  {
    slug: 'vs-quickbooks',
    name: 'QuickBooks Online',
    short: 'QuickBooks Online',
    vendor: 'Intuit',
    url: 'https://quickbooks.intuit.com/',
    metaTitle: 'Atlantis NDT ERP vs QuickBooks Online 2026 — When QuickBooks Alone Isn\'t Enough',
    metaDesc: 'QuickBooks Online vs Atlantis NDT ERP for inspection companies. When QuickBooks + spreadsheets is enough, when inspection workflow needs purpose-built tooling.',
    keywords: 'quickbooks alternative inspection, atlantis ndt erp vs quickbooks, quickbooks for ndt company, inspection management beyond quickbooks',
    intro: "QuickBooks Online (QBO) is the right choice for very small inspection contractors (1-5 people) where accounting is the primary software need and inspection workflow can be managed with spreadsheets and email. Atlantis NDT ERP doesn't replace QuickBooks — most Atlantis customers run QuickBooks + Atlantis side-by-side. This page covers when QuickBooks + spreadsheets is genuinely sufficient and when inspection workflow has outgrown that approach.",
    competitorWins: [
      "You are a 1-3 person inspection contractor with simple billing needs and inspection workflow that fits in 2-3 Excel sheets.",
      "Your annual software budget is under $5K and any specialized tool is premature.",
      "Inspection is a side business or just-starting venture (under 1 year operating).",
      "You have only 1-2 active clients and certification tracking fits on a calendar reminder system.",
      "You don't generate enough inspection reports to justify automation (under 50 reports/year).",
    ],
    atlantisWins: [
      "You have 5+ technicians whose ASNT / ISO 9712 / PCN certifications you can no longer track on a spreadsheet without missing expiries.",
      "You issue more than 100 inspection reports per year and manual Word / Excel formatting is consuming 8-15 hours per week.",
      "You serve multiple clients with different report-format requirements and your office admin re-types reports per client.",
      "Your customers are demanding API 510/570/653 / ASME / AWS-compliant report formats that QuickBooks + Word can't generate.",
      "You've had an audit finding (or close call) due to expired certifications, missed inspection intervals, or missing calibration records.",
    ],
    rows: [
      { dim: "TCO Year 1", a: "$18K-$30K (small shop tier)", c: "$1K-$3K (QuickBooks Online subscription)" },
      { dim: "Scope", a: "Inspection workflow + cert tracking + basic invoicing", c: "Accounting only (GL, AR, AP, payroll)" },
      { dim: "ASNT cert tracking", a: "Native with expiry alerts", c: "Not offered (need spreadsheet)" },
      { dim: "API code scheduling", a: "Native (API 510/570/653)", c: "Not offered" },
      { dim: "Inspection report generation", a: "Native API-format PDFs", c: "Manual Word / Excel" },
      { dim: "Customer reports portal", a: "Native multi-client", c: "Not offered" },
      { dim: "Mobile field capture", a: "Native iOS / Android offline", c: "QuickBooks mobile app — limited" },
      { dim: "Calibration tracking", a: "Native ISO 17025-ready", c: "Not offered (need spreadsheet)" },
      { dim: "Audit-package generation", a: "One-click", c: "Manual document gathering" },
      { dim: "QuickBooks integration", a: "Native — invoices flow to QBO", c: "(it IS QuickBooks)" },
      { dim: "Strongest at", a: "Inspection workflow + cert + reports", c: "Accounting / financial reporting" },
    ],
    migration: "Migration is the wrong framing — QuickBooks and Atlantis are complementary. Most Atlantis customers run QuickBooks Online for accounting (GL, AR, AP, payroll, tax) and Atlantis for inspection workflow (ASNT, codes, reports, audit). Integration via QuickBooks Online API flows approved Atlantis invoices to QBO AR; customer master and chart-of-accounts sync. Implementation 2-3 weeks, $5K-$15K typical for small inspection contractor.",
    scenarios: [
      { title: "Solo inspector — 1 person, 30 reports/year", desc: "QuickBooks + Word + Excel works. Atlantis at $18K/year is premature. Re-evaluate when you grow past 3 technicians.", winner: "competitor" },
      { title: "Small NDT contractor — 6 people, 200 reports/year, 4 clients", desc: "Atlantis at $24K-$35K/year + QuickBooks Online for accounting is the right combo. The 8-15 hour/week saved on report production and cert tracking covers Atlantis cost within 3-4 months.", winner: "atlantis" },
      { title: "Growing inspection company — 15 people, 800 reports/year, 12 clients", desc: "Atlantis at $40K-$60K/year + QuickBooks Online combo. Multi-client compliance dashboards, customer portals, API-format reports — all needed at this scale. QuickBooks alone with spreadsheets is no longer viable.", winner: "atlantis" },
    ],
    faqs: [
      ["Should I keep QuickBooks if I adopt Atlantis?", "Yes. QuickBooks remains the financial system of record (GL, AR, AP, payroll, tax). Atlantis becomes the inspection-workflow system of record. Native integration syncs customers, invoices, and chart-of-accounts."],
      ["When is QuickBooks alone enough?", "Under 5 people, under 100 reports/year, 1-3 clients. Above those thresholds, spreadsheets + Word-formatted reports start consuming more office-admin time than the cost of purpose-built inspection software."],
      ["Can Atlantis replace QuickBooks for accounting?", "No. Atlantis handles T&M invoicing, day-rate billing, expense and mileage capture — operational accounting. For GL, AR, AP, payroll, multi-entity consolidation, sales tax, and financial reporting, QuickBooks (or NetSuite, Xero, Sage Intacct) is the right tool."],
      ["What's the integration like between Atlantis and QuickBooks?", "Native QuickBooks Online integration via QBO REST API. Approved Atlantis invoices flow to QBO AR with proper customer / project / GL-code / tax mapping. Sub-contractor bills flow to AP. Customer master and chart-of-accounts sync bi-directionally."],
      ["What if I use Xero, FreshBooks, or Wave instead?", "Xero is supported via native integration (same pattern as QuickBooks). FreshBooks and Wave are not natively integrated; CSV export from Atlantis to these platforms works for simple AR. Sage Intacct and Microsoft Dynamics 365 Finance are native integrations."],
      ["What's the ROI for a small NDT contractor moving from QuickBooks + spreadsheets to QuickBooks + Atlantis?", "Typical payback 3-6 months. Drivers: 8-15 hours/week saved on report production and cert tracking (translates to $25K-$60K/year of recovered billable time), elimination of audit-finding risk, customer-portal differentiation in proposals."],
    ],
    rating: { v: "4.8", c: "94" },
    contact: "Atlantis NDT ERP + QuickBooks — Small-Shop Setup",
  },
  {
    slug: 'vs-procore',
    name: 'Procore',
    short: 'Procore',
    vendor: 'Procore Technologies',
    url: 'https://www.procore.com/',
    metaTitle: 'Atlantis NDT ERP vs Procore 2026 — Construction QA vs NDT-Native ERP',
    metaDesc: 'Procore construction management vs Atlantis NDT ERP. Construction project management vs inspection-services ERP. When Procore wins (general contracting), when Atlantis wins (specialty inspection).',
    keywords: 'procore alternative inspection, atlantis ndt erp vs procore, procore for ndt, procore construction qa, ndt erp vs procore',
    intro: "Procore is the dominant construction management platform — project management, daily logs, RFIs, submittals, drawings, punch lists for general contractors, owners, and specialty contractors on construction projects. Atlantis NDT ERP overlaps with Procore only at the QA / QC layer for construction projects. The honest read: Procore wins for general construction project management; Atlantis wins for specialty industrial inspection workflow that extends beyond the construction phase into operating-asset integrity management.",
    competitorWins: [
      "You are a general contractor managing construction projects end-to-end (cost, schedule, RFIs, submittals, change orders, financials).",
      "Your scope is construction-phase project management — not operating-asset integrity beyond commissioning.",
      "You need Procore's broader ecosystem (Procore Financials, Procore Estimating, Procore Bid Management).",
      "Your team is already on Procore for non-inspection scope and adding a separate inspection tool creates workflow friction.",
      "Your projects are short-duration construction (under 3 years) with clear handover to owner / operator on completion.",
    ],
    atlantisWins: [
      "Your inspection scope extends beyond construction into operating-asset integrity (turnarounds, plant maintenance, RBI, FFS).",
      "You are an industrial inspection service company (NDT, calibration, welding) serving operators across construction + operations.",
      "You need NDT-native features (ASNT, ISO 9712, API 510/570/653, RBI) that Procore's generic QA / QC module doesn't cover.",
      "Your team is 5-50 people focused on specialty inspection — Procore enterprise pricing is over-scaled for you.",
      "You serve multiple clients with different inspection scopes and need multi-tenant data isolation.",
    ],
    rows: [
      { dim: "TCO Year 1", a: "$18K-$120K", c: "$30K-$200K+ (Procore subscription + modules)" },
      { dim: "Primary scope", a: "Inspection workflow across construction + operations", c: "Construction project management" },
      { dim: "Construction RFIs / submittals / drawings", a: "Light (inspection-relevant only)", c: "Comprehensive construction PM" },
      { dim: "NDT-native features (ASNT, API ICP)", a: "Native", c: "Generic inspection module + custom" },
      { dim: "Operating-asset integrity (RBI, FFS, turnarounds)", a: "Native API 581 / 579", c: "Not the intended scope" },
      { dim: "Multi-tenant for service providers", a: "Yes", c: "Yes — Procore multi-project" },
      { dim: "Customer-format reports (API / ASME / AWS)", a: "Pre-built per code", c: "Custom build per project" },
      { dim: "Calibration tracking", a: "Native ISO 17025-ready", c: "Not offered" },
      { dim: "Audit packages (ASNT, ISO 17025, AS9100)", a: "One-click native", c: "Custom build via Procore Reports" },
      { dim: "Pricing model", a: "Per-seat tiered SaaS", c: "Annual subscription + module add-ons" },
      { dim: "Strongest at", a: "Specialty industrial inspection workflow, operating-asset integrity", c: "Construction project management" },
    ],
    migration: "Migration is rarely the right framing — these tools serve different scopes. Pragmatic pattern for inspection service companies working construction projects: Procore as the project-management system of record (RFIs, submittals, daily logs, drawings) for the construction phase; Atlantis as the inspection-specific system for ASNT cert tracking, API code scheduling, NDT reports, audit packages. Integration via REST API flows inspection findings into Procore as RFIs / observations. For pure-play industrial inspection companies (operating-phase scope), Atlantis is the system of record outright.",
    scenarios: [
      { title: "Small industrial inspection contractor — 8 people", desc: "Atlantis at $25K/year is the right system. Procore is overkill — construction PM scope isn't needed for operating-asset inspection.", winner: "atlantis" },
      { title: "Mid-size NDT consultancy — 50 people serving construction + operations", desc: "Atlantis at $50K-$80K/year for inspection workflow; clients may require Procore access for construction phase. Multi-client data flows from Atlantis to client Procore instances via API.", winner: "atlantis" },
      { title: "General contractor — 200 users, $500M annual revenue", desc: "Procore is the right answer for the broader business. Inspection scope is small fraction. Atlantis adds value if specialty industrial inspection becomes a strategic line.", winner: "competitor" },
    ],
    faqs: [
      ["Is Atlantis cheaper than Procore for a small inspection company?", "Yes typically. Procore for a 10-20 user team lands at $30K-$80K/year + module add-ons. Atlantis lands at $24K-$45K/year with inspection-specific features Procore doesn't have."],
      ["Does Atlantis integrate with Procore?", "Yes — REST API integration. Inspection findings flow Atlantis to Procore as RFIs / observations; project structure / customer master flow Procore to Atlantis. Implementation 3-5 weeks."],
      ["What does Procore do that Atlantis doesn't?", "Construction-phase project management — RFIs, submittals, drawings, daily logs, punch lists, construction financials, change orders, bid management. Atlantis is built for specialty inspection workflow, not full construction PM."],
      ["What does Atlantis do that Procore doesn't?", "ASNT / ISO 9712 / PCN certification tracking with expiry alerts, API 510/570/653 inspection scheduling, RBI per API 581, FFS per API 579, operator-template library (Saudi Aramco, ADNOC, Petronas, etc.), inspection report generation (API formats), multi-client compliance dashboards, calibration tracking, radioactive-source tracking."],
      ["Can we use both Procore (for construction) and Atlantis (for inspection)?", "Yes — recommended for construction QA contractors. Procore owns construction project management; Atlantis owns specialty inspection workflow. Integration runs 3-5 week implementation timeline."],
      ["What about ITP execution — is Procore or Atlantis better?", "Both support ITP execution. Procore's ITP workflow is generic and well-integrated with construction RFIs / submittals. Atlantis ITP workflow is specialized for industrial QA / QC with hold-point / witness-inspection workflow tied to ASNT-qualified inspectors. For NDT-heavy projects, Atlantis is stronger; for general construction, Procore is more complete."],
    ],
    rating: { v: "4.8", c: "108" },
    contact: "Atlantis NDT ERP + Procore — Architecture Discussion",
  },
  {
    slug: 'vs-etq-reliance',
    name: 'ETQ Reliance',
    short: 'ETQ Reliance',
    vendor: 'ETQ (Hexagon)',
    url: 'https://www.etq.com/products/etq-reliance/',
    metaTitle: 'Atlantis NDT ERP vs ETQ Reliance 2026 — QMS Platform vs NDT-Native ERP',
    metaDesc: 'ETQ Reliance QMS vs Atlantis NDT ERP. Dedicated QMS / EHS / compliance platform vs NDT-native ERP. When ETQ wins (regulated manufacturing), when Atlantis wins (inspection services).',
    keywords: 'etq reliance alternative, atlantis ndt erp vs etq, qms software for inspection, etq comparison, qms vs ndt erp',
    intro: "ETQ Reliance is a dedicated QMS / EHS / compliance platform serving regulated manufacturing — life sciences, food & beverage, chemicals, aerospace. Its strength is comprehensive nonconformance, CAPA, supplier quality, audit management, document control, and risk management as a configurable workflow platform. Atlantis NDT ERP includes a QMS module but is fundamentally an inspection-workflow ERP — not a dedicated QMS platform. The honest read: ETQ wins for regulated manufacturers where QMS is a primary investment; Atlantis wins for inspection service companies where QMS is embedded within the inspection workflow.",
    competitorWins: [
      "You are a regulated manufacturer (pharma, biotech, medical device, food, aerospace) where QMS is a primary procurement category.",
      "You need ETQ's depth in 21 CFR Part 11, GxP validation, ISO 13485, AS9100D supplier quality management.",
      "Your compliance scope spans manufacturing + supply chain + customer complaints + regulatory submissions.",
      "You have a dedicated quality organization (Director of Quality, QMS administrator) responsible for ETQ rollout.",
      "Your QMS budget is separate from operational tools — corporate-level QMS investment.",
    ],
    atlantisWins: [
      "You are an inspection service company (NDT, calibration, welding, marine survey) where QMS is operational, not corporate.",
      "Your QMS scope is ISO 9001 / ISO 17025 / AS9100 audit prep — not pharma GxP / 21 CFR Part 11 depth.",
      "You need QMS embedded with inspection workflow (CAPA tied to inspection findings, supplier quality tied to sub-contractors) — not a separate QMS platform.",
      "Your annual QMS / compliance software budget is under $200K — ETQ enterprise tier starts at $100K-$300K/year.",
      "Your team is 10-150 people and ETQ's enterprise approach is over-scaled.",
    ],
    rows: [
      { dim: "TCO Year 1", a: "$18K-$120K (inspection + QMS)", c: "$80K-$400K+ (QMS only)" },
      { dim: "Primary scope", a: "Inspection workflow + embedded QMS", c: "Dedicated QMS / EHS / compliance" },
      { dim: "NCR / CAPA lifecycle", a: "Native — tied to inspection findings", c: "Industry-leading depth, configurable workflows" },
      { dim: "Supplier quality management", a: "Sub-contractor scorecards", c: "Industry-leading depth" },
      { dim: "Audit management (multi-standard)", a: "ISO 9001 / 17025 / AS9100 / API Q1 native", c: "Configurable across many standards" },
      { dim: "Document control", a: "Native — controlled procedures + revision history", c: "Industry-leading depth, validated workflows" },
      { dim: "21 CFR Part 11 / GxP validation", a: "Optional Part 11 mode", c: "Industry-leading depth, IQ/OQ/PQ packages" },
      { dim: "NDT-native features (ASNT, API ICP)", a: "Native", c: "Not offered" },
      { dim: "Inspection scheduling (API codes)", a: "Native API 510/570/653", c: "Not offered" },
      { dim: "Pricing model", a: "Per-seat tiered SaaS", c: "Per-user + module add-ons + validation services" },
      { dim: "Strongest at", a: "Inspection workflow + embedded QMS", c: "Comprehensive QMS / EHS for regulated manufacturers" },
    ],
    migration: "Migration is rarely the right framing — these serve different scopes. For inspection service companies with simple QMS needs (ISO 9001, ISO 17025, AS9100 audit prep): Atlantis embedded QMS is sufficient and avoids the $100K-$300K/year ETQ cost. For regulated manufacturers (pharma, medical device, aerospace) with dedicated quality organizations: ETQ Reliance is the right anchor; Atlantis can integrate for the inspection-specific workflow. Implementation 4-8 weeks for the integration pattern, $30K-$70K typical.",
    scenarios: [
      { title: "Small NDT contractor — 8 people, ISO 9001-certified", desc: "Atlantis embedded QMS is sufficient. ETQ Reliance is overscaled — $100K+/year for a 8-person QMS workflow is uneconomic.", winner: "atlantis" },
      { title: "Mid-size aerospace NDT shop — 60 people, AS9100D", desc: "Atlantis embedded QMS handles AS9100D audit prep, NCR / CAPA, customer-specific quality clauses (Boeing, Airbus, Pratt & Whitney). For deeper supplier quality management (200+ suppliers), ETQ may add value at higher cost.", winner: "atlantis" },
      { title: "Pharma contract manufacturer — 300 employees, FDA / EMA regulated", desc: "ETQ Reliance is the right answer for the dedicated QMS investment. Atlantis adds value only if a specialty industrial inspection scope (e.g., process equipment qualification) becomes a strategic line.", winner: "competitor" },
    ],
    faqs: [
      ["Does Atlantis NDT ERP include a QMS?", "Yes — embedded QMS module covering ISO 9001:2015, ISO/IEC 17025:2017, ISO 45001:2018, AS9100D, IATF 16949, API Q1 / Q2. Features: NCR / CAPA lifecycle, root-cause analysis (5-Why / fishbone / FMEA), supplier scorecards, customer complaint tracking, management review dashboards, audit-package generation. Adequate for inspection service companies; not a dedicated QMS platform like ETQ."],
      ["When is Atlantis embedded QMS sufficient vs needing ETQ?", "Sufficient: inspection service companies (5-150 people), ISO 9001 / 17025 / AS9100 audit prep, embedded with inspection workflow. Needed (ETQ or equivalent): regulated manufacturers (pharma, medical device, aerospace OEM, food / beverage), dedicated quality organization, 21 CFR Part 11 / GxP depth required, $100K+/year QMS investment justified."],
      ["Can Atlantis integrate with ETQ Reliance?", "Yes — REST API integration. Inspection findings flow Atlantis to ETQ as NCRs; supplier scorecards from ETQ flow to Atlantis for sub-contractor management. Implementation 3-5 weeks."],
      ["Does Atlantis support 21 CFR Part 11?", "Yes — optional Part 11 mode with electronic-signature workflow, audit trail (ALCOA+), tamper-evident time-stamping. IQ / OQ / PQ validation package available for FDA / EMA / ANVISA inspection. Less mature than ETQ's pharma-grade depth but sufficient for many regulated environments."],
      ["What about supplier quality management depth?", "Atlantis supplier scorecards track on-time delivery, defect rate (PPM), audit performance, recall history, response-time SLA. ETQ offers deeper supplier-quality workflow (supplier audits at scale, multi-tier supplier visibility, advanced PPAP / production part approval). For inspection service companies with 10-50 sub-contractors, Atlantis is sufficient; for manufacturers with 500+ suppliers, ETQ is better."],
      ["What about ROI on Atlantis QMS vs ETQ for inspection companies?", "Typical 60-80% TCO reduction. Inspection service company QMS workflow doesn't require pharma-grade depth — Atlantis embedded QMS covers ISO 9001 / 17025 / AS9100D audit prep at $0 incremental cost vs the standalone Atlantis inspection ERP. ETQ for the same workflow would add $100K-$300K/year."],
    ],
    rating: { v: "4.8", c: "92" },
    contact: "Atlantis NDT ERP vs ETQ Reliance — QMS Architecture Discussion",
  },
];

function fmt(s) { return JSON.stringify(s); }

for (const c of COMPETITORS) {
  const pageName = 'Vs' + c.slug.replace(/^vs-/, '').split('-').map(w => w[0].toUpperCase() + w.slice(1)).join('');
  const tsx = `import ErpComparisonPage from "@/components/ErpComparisonPage";

export default function ${pageName}() {
    return (
        <ErpComparisonPage
            slug=${fmt(c.slug)}
            competitorName=${fmt(c.name)}
            competitorShortName=${fmt(c.short)}
            competitorVendor=${fmt(c.vendor)}
            competitorUrl=${fmt(c.url)}
            metaTitle=${fmt(c.metaTitle)}
            metaDescription=${fmt(c.metaDesc)}
            keywords=${fmt(c.keywords)}
            intro=${fmt(c.intro)}
            competitorWinsTitle=${fmt(`When ${c.short} is the right choice`)}
            competitorWinsLead=${fmt(`${c.short} is the right answer in these situations. We acknowledge them honestly.`)}
            competitorWins={${JSON.stringify(c.competitorWins, null, 16).replace(/^/gm, '            ').trim()}}
            atlantisWinsTitle="When Atlantis NDT ERP wins"
            atlantisWinsLead="Specifically for inspection / NDT / calibration / welding / marine survey / pipeline integrity / aerospace QC service companies:"
            atlantisWins={${JSON.stringify(c.atlantisWins, null, 16).replace(/^/gm, '            ').trim()}}
            comparisonRows={${JSON.stringify(c.rows.map(r => ({ dim: r.dim, atlantis: r.a, competitor: r.c })), null, 16).replace(/^/gm, '            ').trim()}}
            migrationParagraph=${fmt(c.migration)}
            scenarios={${JSON.stringify(c.scenarios.map(s => ({ title: s.title, description: s.desc, winner: s.winner })), null, 16).replace(/^/gm, '            ').trim()}}
            faqs={${JSON.stringify(c.faqs.map(([q, a]) => ({ question: q, answer: a })), null, 16).replace(/^/gm, '            ').trim()}}
            ratingValue=${fmt(c.rating.v)}
            ratingCount=${fmt(c.rating.c)}
            contactSubject=${fmt(c.contact)}
            related={[
                { href: "/compare", label: "All ERP Comparisons", blurb: "Hub: 10 Atlantis NDT ERP vs X comparison pages." },
                { href: "/compare/vs-maximo", label: "vs IBM Maximo", blurb: "Tier-1 EAM platform comparison." },
                { href: "/compare/vs-sap-pm", label: "vs SAP PM", blurb: "Enterprise SAP-ecosystem platform comparison." },
                { href: "/compare/vs-meridium", label: "vs Hexagon Meridium APM", blurb: "Refinery APM / RBI comparison." },
                { href: "/erp-modules", label: "ERP Modules Catalog", blurb: "11 modules of the Atlantis NDT ERP." },
                { href: "/erp-industries", label: "ERP by Industry", blurb: "Tailored configs for 12 inspection verticals." },
                { href: "/ndt-erp-solution", label: "Atlantis NDT ERP", blurb: "Product overview, pricing, modules, deployment." },
                { href: "/ndt-erp-vs-generic-erp", label: "NDT ERP vs Generic ERP", blurb: "Category-level decision framework." },
            ]}
        />
    );
}
`;
  writeFileSync(join(outDir, `${c.slug}.tsx`), tsx);
  console.log(`✓ wrote ${c.slug}.tsx`);
}

// Emit App.tsx + prerender patch files
const lazy = COMPETITORS.map(c => {
  const pageName = 'Vs' + c.slug.replace(/^vs-/, '').split('-').map(w => w[0].toUpperCase() + w.slice(1)).join('');
  return `const ${pageName} = lazy(() => import("./pages/compare/${c.slug}"));`;
}).join('\n');

const routes = COMPETITORS.map(c => {
  const pageName = 'Vs' + c.slug.replace(/^vs-/, '').split('-').map(w => w[0].toUpperCase() + w.slice(1)).join('');
  return `                  <Route path="/compare/${c.slug}" element={<LazyRoute Component={${pageName}} />} />`;
}).join('\n');

writeFileSync(join(__dirname, '_sprint8-lazy.txt'), lazy + '\n');
writeFileSync(join(__dirname, '_sprint8-routes.txt'), routes + '\n');

const prerender = COMPETITORS.map(c => ({
  path: `/compare/${c.slug}`,
  title: c.metaTitle,
  description: c.metaDesc,
  bodyH1: c.metaTitle,
  bodyText: c.intro.slice(0, 500),
}));
writeFileSync(join(__dirname, '_sprint8-prerender.json'), JSON.stringify(prerender, null, 2));
console.log(`✓ ${COMPETITORS.length} comparison pages generated + patches written`);
