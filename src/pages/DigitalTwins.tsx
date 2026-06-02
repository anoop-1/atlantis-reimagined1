import { useState } from "react";
import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import ContactDetails from "@/components/ContactDetails";
import { ErpDtCrossPromoBlock } from "@/components/ErpDtCrossPromoBlock";
import InteractiveJet from "@/components/InteractiveJet";
import InteractivePlant from "@/components/InteractivePlant";
import InteractivePipe from "@/components/InteractivePipe";
import { SEOHead } from "@/components/SEOHead";
import { Link } from "react-router-dom";
import {
   CheckCircle,
   ArrowRight,
   Cpu,
   Eye,
   BarChart3,
   Shield,
   Database,
   Layers,
   Gauge,
   Activity,
   FileCheck,
   Server,
   Workflow,
   Atom,
   Factory,
   Droplets,
   Plane,
   Ship,
   Zap,
   Building2,
   MapPin,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { buildTechArticleSchema, ATLANTIS_AUTHOR_ANOOP, ATLANTIS_PUBLISHER } from "@/data/author-schema";

const URL = "https://atlantisndt.com/digital-twins";

// ──────────────────────────────────────────────────────────────────────────────
// Twelve real customer FAQs — all schema-eligible
// ──────────────────────────────────────────────────────────────────────────────
const dtFaqs = [
   {
      q: "How much does the Atlantis Digital Twin platform cost?",
      a: "The Atlantis Digital Twin platform is available as a full enterprise SaaS license. That subscription includes unlimited assets up to 500 per tenant, every NDT data connector we ship (UT, RT, MT, PT, ET, PAUT, TOFD, AUT, ILI, drone, IoT corrosion probes), the API 579-1 Fitness-For-Service engine, the API 581 Risk-Based Inspection engine, AI-led predictive maintenance, ASNT Level III consulting hours included annually, choice of cloud or on-prem deployment, 24x7 support, and source-code escrow. Per-asset onboarding for 3D mesh creation, plant historian connectors, and KPI dashboards is scoped per major asset depending on complexity. Enterprises with >500 assets, multi-tenant rollouts, or air-gap defense deployments move to a custom enterprise quote — and remains meaningfully below Hexagon, Bentley, AVEVA, GE, or IBM equivalent programs.",
   },
   {
      q: "Can the Digital Twin run on-prem or air-gapped instead of in the cloud?",
      a: "Yes. Atlantis ships three deployment topologies: (1) Multi-tenant SaaS on AWS us-east-1 / eu-west-2 / me-central-1 / ap-southeast-1 — ISO 27001 controls; (2) Single-tenant dedicated VPC for ADNOC, Aramco, KOC, QatarEnergy clients that need geo-fenced data; (3) Fully air-gapped on-prem Docker / Kubernetes deployment for nuclear (NRC 10 CFR 50 Appendix B), defense (DoD IL5, UK MOD), and offshore platforms with no permanent satellite uplink. On-prem requires a customer-supplied Linux host (RHEL 9, Ubuntu 22.04, Rocky 9) with 32 GB RAM, 8 vCPU, 2 TB SSD per node — Atlantis ships the offline installer, the license daemon, and the upgrade path quarterly via signed tarball. Same feature set across all three topologies; pricing same.",
   },
   {
      q: "How long does an integration take from kickoff to first asset live?",
      a: "Pilot asset live in 4-6 weeks for a single circuit (one storage tank, one piping circuit, one heat exchanger, or one pressure vessel). Plant-wide rollout for a typical 200-asset refinery is 6-9 months. Greenfield mega-projects (LNG terminal, petrochemical complex, FPSO commissioning) sit on a 12-18 month deployment plan that runs alongside the commissioning schedule. The Atlantis deployment team is fronted by an ASNT Level III engineer plus a solution architect; their first job in week 1 is reading your existing IDMS / EAM dump (Meridium, Maximo, AssetWise, Mtell), mapping functional locations, and standing up the data pipeline. By week 3 you have a live mesh, in week 4 the first inspection record renders on the twin, and by week 6 the first FFS calculation is approved by your Level III.",
   },
   {
      q: "Which inspection standards and regulatory codes does the platform support natively?",
      a: "The platform implements API 510 (pressure vessels), API 570 (piping), API 653 (above-ground storage tanks), API 579-1 Fitness-For-Service (all four assessment levels), API 581 Risk-Based Inspection (POF + COF on the 5x5 matrix), API 580 framework, ASME BPVC Section V (NDE methods), ASME BPVC Section VIII (pressure vessel design), ASME B31.3 (process piping), ASME B31.8 (gas transmission), ASME PCC-2 (repair), ISO 9712 (NDT personnel qualification), ISO 17635 (welds NDT), NACE SP0102 (in-line inspection), NACE SP0169 (external corrosion), NORSOK N-005 (Norway), API RP 1160 (pipeline integrity), 49 CFR 192/195 (PHMSA US pipelines), and PED 2014/68/EU. Audit packages exportable for ADNOC PQQ, Aramco SAEP, QatarEnergy QPP, KOC tender, ONGC HVT-INSP, NRC, MOD, HSE PSSR.",
   },
   {
      q: "How is Atlantis Digital Twin different from a 3D CAD model or BIM file?",
      a: "A CAD model is geometry — what was designed. A BIM file is geometry plus design metadata — bills of material, supplier specs, original installation drawings. The Atlantis Digital Twin is geometry plus the live operating record: as-found UT thickness grids, RT shot indexing, PAUT scan archives, MT/PT indication registers, weld-by-weld inspection history, FFS calculation outputs, RBI risk tier, IoT corrosion probe streams, plant historian process conditions, work-order linkage, and Level III approval trail. CAD shows you the design. BIM shows you the design plus the handover documents. Atlantis shows you what your asset actually is, today, including the parts of it that are corroding, the parts that have been repaired, and the parts that have a flagged anomaly waiting for a re-inspection.",
   },
   {
      q: "What NDT data sources and inspection methods does the Digital Twin ingest?",
      a: "Native ingestion from: Atlantis NDT Reporting Software (real-time push); Olympus / Evident Epoch 650, OmniScan X3, MX2 thickness gauges; Eddyfi M2M Gekko / Mantis, Magnifi (ET), Tecscan PAUT systems; Sonatest Veo, RapidScan, Wave; GE / Waygate Krautkramer USM 36 and Mentor UT; ZETEC Topaz PAUT and AUT systems; Pipeline ILI exports from Rosen, NDT Global, Baker Hughes, ROSEN ILI MFL/UT, T.D. Williamson SmartCat; Drone RT and visual surveys from Cyberhawk, Industrial Skyworks, Skyworx; IoT corrosion probes (Permasense, Cosasco, ROXAR FSM, Emerson Pervasive Sensing); Plant historian (OSIsoft PI, Honeywell PHD, Aspen IP.21, AVEVA PI System); CMMS / EAM (SAP PM, Maximo, Meridium APM, AssetWise, Mtell, ABB Ability, GE Vernova APM). All eight conventional NDT methods plus PAUT, TOFD, AUT, ToFD, TFM, FMC, MFL, IRIS, and DSI are supported with method-specific data schemas.",
   },
   {
      q: "How does the platform handle data security for OT and critical infrastructure?",
      a: "We follow IEC 62443 zone-and-conduit guidance for industrial control system integration. Plant historian and OT-network connectors are read-only through a DMZ — no write path from the twin into the control system, ever. SaaS tenancy is secured to enterprise standards and reviewed annually by an independent firm; ISO 27001 controls are mapped one-to-one. Penetration tests run quarterly by an NIST-aligned external firm with publicly reported findings. CVE disclosure has a 90-day window per industry convention. All inspection data writes to the twin are SHA-256 hash-chained with timestamp + authenticated user — an immutable audit log that regulators (ADNOC, NRC, HSE, PSA Norway) can spot-check. Air-gapped on-prem deployment is available for nuclear, defense, and any client whose risk appetite requires zero internet egress.",
   },
   {
      q: "What sample size or asset count do I need before a Digital Twin makes ROI sense?",
      a: "The economics turn positive at roughly 30-40 high-criticality assets — pressure vessels, heat exchangers, atmospheric storage tanks, complex piping circuits — managed by a centralized integrity team. Below that, the Atlantis NDT Reporting Software alone handles inspection workflow without the 3D layer. Above 40 assets the Digital Twin's value compounds rapidly because RBI optimization, FFS automation, and turnaround scope reduction scale linearly with asset count. Our published ROI calculator at /digital-twin-roi-calculator lets you plug in your asset count, average inspection cost per asset, current turnaround duration, and unplanned shutdown frequency to get a payback estimate. Typical refinery payback is 14-22 months.",
   },
   {
      q: "Does the Digital Twin integrate with my existing CMMS / EAM and inspection management systems?",
      a: "Yes — two-way integration with SAP Plant Maintenance, IBM Maximo Application Suite, Hexagon Meridium APM, AspenTech Mtell, GE Vernova APM, Bentley AssetWise, ABB Ability, Microsoft Dynamics 365 Field Service, Salesforce Field Service, and Oracle EAM. Inspection findings on the twin push as work orders or APM events with full functional location preserved. RBI risk tier changes push as integrity events. FFS-driven re-rates push as engineering change requests. Asset hierarchies sync bidirectionally — meaning a re-org of the asset register in your EAM propagates into the twin overnight, and any new asset added to the twin shows up in your EAM. REST APIs are documented at /digital-twin-api-510-570-580-mapping and SDKs ship for Python, .NET, and TypeScript.",
   },
   {
      q: "What hardware do I need at site for inspectors and integrity engineers?",
      a: "Browser-first design — the twin runs on any modern Chromium-class browser via WebGL, no plugin install, no thick client. A standard Dell Latitude 5440, Lenovo ThinkPad T16, or MacBook Air M3 with 16 GB RAM streams a 200-asset refinery scene at >30 FPS. Inspectors at site use the iOS / Android viewer-only app for data capture (offline-capable, syncs when 4G or wifi appears). Integrity engineers and Level III approvers prefer the desktop fat-client on Windows or Mac for very large meshes >500 MB. No VR / AR hardware is required; WebXR support for Meta Quest 3 and Apple Vision Pro is in beta with Q3 2026 GA targeted. No GPU farm, no on-site server, no specialized network — the asset is a SaaS endpoint or an on-prem container, not a hardware appliance.",
   },
   {
      q: "What training does my team need to operate the Digital Twin?",
      a: "Three role-based tracks: (a) Inspector — 4 hours of self-paced video plus a hands-on session, covering data capture in the field app, attaching readings to the right component, and pushing reports back. (b) Integrity engineer — 16 hours over two days, covering FFS workflow on the twin, RBI tier review, anomaly triage, work-order generation. (c) ASNT Level III approver — 8 hours over one day, covering the approval gate, audit log review, FFS Level 1 vs Level 2 vs Level 3 routing, and regulatory export. Initial deployments include 80 hours of Atlantis-led training across the customer team, and ongoing annual refresher access for every named user. Founder Anoop Rayavarapu (ASNT Level III, API 510/570/653 authorized inspector) personally signs off on the integrity-engineer curriculum.",
   },
   {
      q: "How does the platform scale from a pilot to a full enterprise rollout?",
      a: "Scale is engineered in from day one. The data model partitions per-asset, per-tenant; rendering uses level-of-detail mesh decimation so a 5,000-asset refinery scene loads at the same speed as a 50-asset pilot. Tenant sharding lives at the AWS account boundary for large customers (Aramco, ADNOC, Shell, ExxonMobil) so noisy-neighbor risk is structurally eliminated. The deployment pattern we recommend: pilot on one circuit (week 1-6), validate against your Level III's existing workflow, expand to one full unit (month 2-4), expand to a full plant (month 5-9), then horizontal expansion across the operator's portfolio at 1-2 plants per quarter. We've executed this exact pattern across Gulf Coast operators and ADNOC group companies — the playbook is documented and repeatable.",
   },
];

// ──────────────────────────────────────────────────────────────────────────────
// Capabilities — eight rich product bullets
// ──────────────────────────────────────────────────────────────────────────────
const capabilities = [
   {
      icon: Layers,
      title: "Corrosion mapping & UT thickness grids",
      blurb:
         "Project conventional UT spot readings, automated UT scan grids, IRIS bundle data, and PAUT corrosion mapping directly onto the 3D mesh as a heat map. Compare against design thickness, calculate corrosion rate from inspection-to-inspection delta, project remaining life under API 581 generic and operator-specific corrosion-rate models.",
   },
   {
      icon: Gauge,
      title: "API 579-1 Fitness-For-Service",
      blurb:
         "All four FFS assessment levels embedded: Level 1 screening (LTA, general metal loss, local thin areas), Level 2 detailed assessment (RSF, MAWP rerate, blister, gouge), Level 3 advanced (FEA-driven, brittle fracture, creep) via partner FEA integration. Outputs route through your ASNT Level III for final approval, audit-logged to the asset record.",
   },
   {
      icon: BarChart3,
      title: "API 581 Risk-Based Inspection",
      blurb:
         "Damage factor + consequence factor calculations on a 5x5 risk matrix per equipment item or per TML circuit. POF accounts for the eleven damage mechanisms in API 581 Section 4 (thinning, SCC, HTHA, brittle fracture, fatigue, ext. corrosion, CUI, lining). COF runs both financial and area-based models per Section 5. Inspection plan output feeds the EAM as work orders.",
   },
   {
      icon: Activity,
      title: "AUT, PAUT, TOFD & advanced UT integration",
      blurb:
         "Native ingestion of phased-array scan files from Olympus OmniScan X3, Eddyfi Gekko / Mantis, Tecscan, ZETEC Topaz, Sonatest, GE Mentor UT, plus TOFD parabola archives and Total Focusing Method (TFM) frames. Scan data is geo-tagged to the exact weld or component on the mesh, sliceable on the twin, replay-able for arbitration during turnarounds.",
   },
   {
      icon: Database,
      title: "Fleet & portfolio view",
      blurb:
         "Multi-asset, multi-site, multi-region rollups. Integrity managers running 4-12 plants see comparative risk distributions, inspection-due lists, and capex prioritization on a single screen. Drill from fleet → site → unit → equipment → component → reading in three clicks. Powers the quarterly integrity review packet that goes to the VP HSE or the asset committee.",
   },
   {
      icon: Workflow,
      title: "Defect lifecycle & anomaly management",
      blurb:
         "Every indication (whether crack, pit, blister, dent, gouge, lamination, weld discontinuity, HIC) is a first-class object with status (open, monitored, repaired, accepted), assignment, due-date, FFS justification, and Level III sign-off chain. Trend defect growth over multi-year inspection history. Searchable by mechanism, method, severity, location, inspector, vendor.",
   },
   {
      icon: FileCheck,
      title: "Regulatory reporting (API 510 / 570 / 653)",
      blurb:
         "One-click PDF/A audit packages aligned to API 510 inspection records, API 570 piping integrity reports, API 653 tank inspection reports, ASME PCC-2 repair filings, PED PSSR 2000 reports, PESO (India), and 49 CFR 192/195 PHMSA submittals. Hash-chained immutable trail behind every export. Authorized inspector (AI) signature workflow with crypto-backed signatures.",
   },
   {
      icon: Server,
      title: "Digital handover & turnover from EPC",
      blurb:
         "Greenfield EPC and brownfield revamps deliver a complete asset twin at mechanical completion. Atlantis ingests IFC models from Bentley OpenPlant, Hexagon SmartPlant 3D, AVEVA E3D Design, AutoCAD Plant 3D, Intergraph Smart 3D — plus point clouds from FARO, Leica, Trimble — and reconciles them into the operating twin. End-to-end handover from commissioning data through to year-30 retirement.",
   },
];

// ──────────────────────────────────────────────────────────────────────────────
// Industries served — five sectors with a real one-line use case each
// ──────────────────────────────────────────────────────────────────────────────
const industriesServed = [
   {
      icon: Droplets,
      name: "Oil & Gas",
      useCase: "FPSO hulls, refinery pressure vessels, sour-gas piping, atmospheric storage tanks — full API 510 / 570 / 653 / 579 / 581 stack in one twin.",
      href: "/ndt-for-oil-gas",
   },
   {
      icon: Zap,
      name: "Power Generation",
      useCase: "Boiler pressure parts, HRSG superheater tubes, steam piping, condenser tube bundles — ECT and IRIS tube-bundle data overlaid for outage planning.",
      href: "/ndt-for-power-generation",
   },
   {
      icon: Plane,
      name: "Aerospace",
      useCase: "Engine borescope inspection records, airframe fatigue tracking, composite delamination mapping — ISO 9712 personnel qualification audit trail.",
      href: "/ndt-for-aerospace",
   },
   {
      icon: Ship,
      name: "Marine & Offshore",
      useCase: "Ballast tank coating breakdown, hull plate thickness, jacket-leg cathodic protection — class survey alignment (DNV, ABS, Lloyd's, BV).",
      href: "/marine-offshore-ndt-services",
   },
   {
      icon: Atom,
      name: "Nuclear",
      useCase: "Steam generator tubes, RPV head penetrations, ASME Section XI ISI program tracking — air-gapped deployment satisfies NRC 10 CFR 50 Appendix B.",
      href: "/nuclear-ndt-services",
   },
];

// ──────────────────────────────────────────────────────────────────────────────
// Vendor comparison — each row links to a dedicated comparison page
// ──────────────────────────────────────────────────────────────────────────────
const vendorCompare = [
   {
      vendor: "Bentley iTwin",
      href: "/compare/atlantis-dt-vs-bentley-itwin",
      ndtNative: "No — CAD/BIM lineage; NDT requires custom integration",
      level3: "Not embedded — partner integrators only",
      pricing: "On request",
      deploy: "Cloud SaaS; limited on-prem",
   },
   {
      vendor: "Hexagon HxDR / Meridium APM",
      href: "/compare/atlantis-dt-vs-hexagon-eam",
      ndtNative: "Partial — Meridium APM has CML; HxDR is reality capture",
      level3: "External consulting required",
      pricing: "On request",
      deploy: "Cloud or on-prem; complex install",
   },
   {
      vendor: "AVEVA PI System",
      href: "/compare/atlantis-dt-vs-aveva-pi-system",
      ndtNative: "No — process historian first; NDT bolted on",
      level3: "Not part of platform",
      pricing: "On request",
      deploy: "On-prem + cloud hybrid",
   },
   {
      vendor: "GE Predix / Vernova APM",
      href: "/compare/atlantis-dt-vs-ge-predix",
      ndtNative: "Limited — APM Mechanical Integrity module is add-on",
      level3: "External SI engagement",
      pricing: "On request",
      deploy: "Cloud-first; on-prem deprecated",
   },
   {
      vendor: "Siemens MindSphere / Xcelerator",
      href: "/compare/atlantis-dt-vs-siemens-mindsphere",
      ndtNative: "No — IIoT and analytics; NDT is custom build",
      level3: "Customer-supplied",
      pricing: "On request",
      deploy: "Cloud SaaS only",
   },
   {
      vendor: "IBM Maximo Application Suite",
      href: "/compare/atlantis-dt-vs-ibm-maximo",
      ndtNative: "Partial — Maximo Health & APM Predict; CML add-on",
      level3: "Not included",
      pricing: "On request",
      deploy: "Cloud or Red Hat OpenShift on-prem",
   },
   {
      vendor: "AspenTech Mtell",
      href: "/compare/atlantis-dt-vs-aspen-mtell",
      ndtNative: "No — ML-led predictive maintenance; rotating equipment focus",
      level3: "Not embedded",
      pricing: "On request",
      deploy: "Cloud or on-prem",
   },
];

// ──────────────────────────────────────────────────────────────────────────────
// Asset use cases — 12 dedicated pages
// ──────────────────────────────────────────────────────────────────────────────
const assetUseCases = [
   { name: "Refinery", href: "/digital-twins/refinery" },
   { name: "FPSO", href: "/digital-twins/fpso" },
   { name: "Pipeline", href: "/digital-twins/pipeline" },
   { name: "Storage tank", href: "/digital-twins/storage-tank" },
   { name: "Heat exchanger", href: "/digital-twins/heat-exchanger" },
   { name: "Pressure vessel", href: "/digital-twins/pressure-vessel" },
   { name: "Nuclear plant", href: "/digital-twins/nuclear-plant" },
   { name: "Wind farm", href: "/digital-twins/wind-farm" },
   { name: "Offshore platform", href: "/digital-twins/offshore-platform" },
   { name: "Petrochemical complex", href: "/digital-twins/petrochemical-complex" },
   { name: "Subsea systems", href: "/digital-twins/subsea" },
   { name: "Data center", href: "/digital-twins/data-center" },
];

// ──────────────────────────────────────────────────────────────────────────────
// Top 20 city pages
// ──────────────────────────────────────────────────────────────────────────────
const dtCities = [
   { name: "Houston", href: "/digital-twin-houston" },
   { name: "Dubai", href: "/digital-twin-dubai" },
   { name: "Abu Dhabi", href: "/digital-twin-abu-dhabi" },
   { name: "Saudi Arabia", href: "/digital-twin-saudi-arabia" },
   { name: "Calgary", href: "/digital-twin-calgary" },
   { name: "Singapore", href: "/digital-twin-singapore" },
   { name: "Mumbai", href: "/digital-twin-mumbai" },
   { name: "London", href: "/digital-twin-london" },
   { name: "Perth", href: "/digital-twin-perth" },
   { name: "Doha", href: "/digital-twin-doha" },
   { name: "Kuwait", href: "/digital-twin-kuwait" },
   { name: "Aberdeen", href: "/digital-twin-aberdeen" },
   { name: "Oslo", href: "/digital-twin-oslo" },
   { name: "Rotterdam", href: "/digital-twin-rotterdam" },
   { name: "Hyderabad", href: "/digital-twin-hyderabad" },
   { name: "Muscat", href: "/digital-twin-muscat" },
   { name: "Kuala Lumpur", href: "/digital-twin-kuala-lumpur" },
   { name: "Lagos", href: "/digital-twin-lagos" },
   { name: "New Orleans", href: "/digital-twin-new-orleans" },
   { name: "Denver", href: "/digital-twin-denver" },
];

// ──────────────────────────────────────────────────────────────────────────────
// Interactive 3D demo models (existing assets)
// ──────────────────────────────────────────────────────────────────────────────
const models = [
   {
      name: "Jet Engine",
      path: "/jet_engine.glb",
      component: InteractiveJet,
      description:
         "Aerospace engine twin with borescope inspection records and PT/MT indication tagging on rotating components.",
   },
   {
      name: "Industrial Plant",
      path: "/generic_factory_with_smoke_towers.glb",
      component: InteractivePlant,
      description:
         "Refinery / petrochemical plant scene — pressure vessels, exchangers, fired heaters, and piping circuits.",
   },
   {
      name: "Storage Tank",
      path: "/propane_tank.glb",
      component: InteractivePipe,
      description:
         "Atmospheric or pressurized storage tank twin — floor MFL, shell UT grids, API 653 audit trail.",
   },
];

export default function DigitalTwins() {
   const [selectedModel, setSelectedModel] = useState(models[0]);
   const SelectedComponent = selectedModel.component;

   // ──────────────────────────────────────────────────────────────────────────
   // Structured data — Service, Product+Offer, FAQPage, BreadcrumbList, TechArticle
   // ──────────────────────────────────────────────────────────────────────────
   const structuredData = {
      "@context": "https://schema.org",
      "@graph": [
         buildTechArticleSchema({
            url: URL,
            headline: "Digital Twin NDT Software for Oil & Gas, Aerospace & Power Assets",
            description:
               "ASNT Level III-authored product pillar: NDT digital twin platform with API 579 FFS, API 581 RBI, AUT/PAUT integration, fleet portfolio view, and regulatory audit packages. enterprise SaaS.",
            datePublished: "2026-03-15",
            dateModified: "2026-05-16",
            section: "NDT Digital Twins — Product Pillar",
            keywords:
               "digital twin NDT software, NDT digital twin platform, API 579 FFS, API 581 RBI, AUT PAUT digital twin, refinery digital twin, FPSO digital twin, asset integrity software, ASNT Level III, predictive maintenance",
            dependencies:
               "API 510, API 570, API 653, API 579-1, API 581, ASME BPVC Section V, ASME BPVC Section VIII, ISO 9712, ISO 17635, IEC 62443, NORSOK N-005, NRC 10 CFR 50 Appendix B",
         }),
         { "@type": "Organization", "@id": "https://atlantisndt.com/#organization", ...ATLANTIS_PUBLISHER },
         { "@type": "Person", "@id": "https://atlantisndt.com/#anoop-rayavarapu", ...ATLANTIS_AUTHOR_ANOOP },
         {
            "@type": "Service",
            "@id": `${URL}#service`,
            "name": "Atlantis NDT Digital Twin Platform",
            "serviceType": "Digital Twin NDT Software",
            "provider": { "@id": "https://atlantisndt.com/#organization" },
            "description":
               "Enterprise SaaS digital twin for non-destructive testing and asset integrity — 3D asset visualization with UT/RT/PAUT/MT/PT/ET data overlay, API 579-1 FFS, API 581 RBI, predictive maintenance, ASNT Level III consulting.",
            "areaServed": [
               { "@type": "Country", "name": "United States" },
               { "@type": "Country", "name": "United Arab Emirates" },
               { "@type": "Country", "name": "Saudi Arabia" },
               { "@type": "Country", "name": "India" },
               { "@type": "Country", "name": "United Kingdom" },
               { "@type": "Country", "name": "Singapore" },
               { "@type": "Country", "name": "Canada" },
               { "@type": "Country", "name": "Australia" },
               { "@type": "Country", "name": "Norway" },
               { "@type": "Country", "name": "Netherlands" },
               { "@type": "Country", "name": "Qatar" },
               { "@type": "Country", "name": "Kuwait" },
               { "@type": "Country", "name": "Oman" },
            ],
            "hasOfferCatalog": {
               "@type": "OfferCatalog",
               "name": "Digital Twin Platform Tiers",
               "itemListElement": [
                  { "@type": "Offer", "name": "Enterprise SaaS — up to 500 assets", "price": "200000", "priceCurrency": "USD" },
                  { "@type": "Offer", "name": "Per-asset onboarding (3D mesh + connectors)", "price": "15000", "priceCurrency": "USD" },
                  { "@type": "Offer", "name": "Multi-tenant / air-gap enterprise", "price": "400000", "priceCurrency": "USD" },
               ],
            },
         },
         {
            "@type": "Product",
            "@id": `${URL}#product`,
            "name": "Atlantis NDT Digital Twin Platform",
            "description":
               "Browser-first 3D asset twin with native NDT inspection data ingestion, API 579-1 FFS, API 581 RBI, AUT/PAUT scan archives, regulatory reporting, and ASNT Level III approval workflow.",
            "brand": { "@type": "Brand", "name": "Atlantis NDT" },
            "image": "https://atlantisndt.com/atlantis.jpg",
            "url": URL,
            "category": "Industrial Software / Asset Integrity",
            "offers": {
               "@type": "Offer",
               "url": URL,
               "price": "200000",
               "priceCurrency": "USD",
               "priceValidUntil": "2027-12-31",
               "availability": "https://schema.org/InStock",
               "seller": { "@id": "https://atlantisndt.com/#organization" },
               "eligibleRegion": [
                  { "@type": "Country", "name": "United States" },
                  { "@type": "Country", "name": "United Arab Emirates" },
                  { "@type": "Country", "name": "Saudi Arabia" },
                  { "@type": "Country", "name": "India" },
                  { "@type": "Country", "name": "United Kingdom" },
                  { "@type": "Country", "name": "Singapore" },
                  { "@type": "Country", "name": "Canada" },
                  { "@type": "Country", "name": "Australia" },
                  { "@type": "Country", "name": "Norway" },
                  { "@type": "Country", "name": "Qatar" },
                  { "@type": "Country", "name": "Kuwait" },
                  { "@type": "Country", "name": "Oman" },
               ],
            },
            "aggregateRating": {
               "@type": "AggregateRating",
               "ratingValue": "4.8",
               "ratingCount": "125",
               "bestRating": "5",
               "worstRating": "1",
            },
         },
         {
            "@type": "SoftwareApplication",
            "@id": `${URL}#software`,
            "name": "Atlantis NDT Digital Twin Platform",
            "applicationCategory": "BusinessApplication",
            "operatingSystem":
               "Cloud (browser, WebGL); desktop Windows / Mac; iOS / Android viewer; on-premise Docker / Kubernetes for air-gap",
            "softwareVersion": "2026.5",
            "url": URL,
            "publisher": { "@id": "https://atlantisndt.com/#organization" },
            "author": { "@id": "https://atlantisndt.com/#anoop-rayavarapu" },
            "featureList":
               "Browser WebGL 3D • UT thickness heat-map overlay • RT defect localization • MT/PT indication tagging • API 579-1 FFS calculations • API 581 RBI engine • Predictive maintenance (corrosion-rate regression, anomaly detection, Bayesian RUL) • CMMS / EAM integration • Plant historian ingestion • IEC 62443 OT security • SHA-256 hash chain audit log • ASNT Level III approval workflow",
            "offers": {
               "@type": "Offer",
               "url": URL,
               "price": "200000",
               "priceCurrency": "USD",
               "priceValidUntil": "2027-12-31",
            },
         },
         {
            "@type": "FAQPage",
            "@id": `${URL}#faq`,
            "mainEntity": dtFaqs.map(f => ({
               "@type": "Question",
               "name": f.q,
               "acceptedAnswer": { "@type": "Answer", "text": f.a },
            })),
         },
         {
            "@type": "BreadcrumbList",
            "@id": `${URL}#breadcrumb`,
            "itemListElement": [
               { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://atlantisndt.com/" },
               { "@type": "ListItem", "position": 2, "name": "Digital Twins", "item": URL },
            ],
         },
      ],
   };

   return (
      <>
         <SEOHead
            title="Digital Twin Software for NDT 2026 — UT/PAUT in 3D, API 579"
            description="Atlantis Digital Twin for NDT: UT/PAUT overlay in 3D, API 579 FFS, API 581 RBI, audit packs. ASNT Level III-led. Refineries, FPSOs, pipelines, power plants. Book a demo."
            keywords="digital twin NDT software, NDT digital twin, API 579 fitness for service, API 581 RBI, AUT PAUT digital twin, refinery digital twin, FPSO digital twin, asset integrity, predictive maintenance, ASNT Level III"
            ogImage="/atlantis.jpg"
            canonical="https://atlantisndt.com/digital-twins"
            structuredData={structuredData}
         />
         <Navigation />

         <div className="w-full min-h-screen flex flex-col bg-white">
            {/* ─────────────── HERO ─────────────── */}
            <section className="pt-24 pb-16 bg-white text-[#004aad]">
               <div className="max-w-5xl mx-auto px-6 text-center">
                  <motion.div
                     initial={{ opacity: 0, y: 30 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ duration: 0.7 }}
                  >
                     <Badge className="mb-5 bg-[#004aad]/10 text-[#004aad] border-[#004aad]/30 hover:bg-[#004aad]/20">
                        Product pillar · Updated May 2026
                     </Badge>
                     <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-[#004aad]">
                        Digital Twin NDT Software for Oil &amp; Gas, Aerospace &amp; Power Assets
                     </h1>
                     <p className="text-lg md:text-xl text-[#004aad] leading-relaxed mb-3 max-w-3xl mx-auto">
                        A 3D asset twin built from the inspection record — UT thickness, RT, MT/PT, PAUT, TOFD, ILI — with API 579 Fitness-For-Service, API 581 Risk-Based Inspection, and ASNT Level III approval baked into the workflow.
                     </p>
                     <p className="text-lg md:text-xl text-[#004aad] leading-relaxed mb-8 max-w-3xl mx-auto">
                        Browser-first, cloud or air-gap on-prem, all-in for up to 500 assets.
                     </p>
                     <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                           to="/contact?subject=Digital%20Twin%20Demo%20Request"
                           className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#004aad] hover:bg-[#003a85] text-white font-semibold rounded-lg shadow-lg transition"
                        >
                           Book a 60-minute scoping call <ArrowRight className="w-4 h-4" />
                        </Link>
                        <a
                           href="#interactive-demo"
                           className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-[#004aad] hover:bg-[#004aad]/10 text-[#004aad] font-semibold rounded-lg transition"
                        >
                           Try the interactive demo
                        </a>
                     </div>
                     <p className="text-sm text-[#004aad]/80 mt-8">
                        Authored by <strong className="text-[#004aad]">Anoop Rayavarapu</strong> — ASNT NDT Level III (UT, RT, MT, PT, ET, VT), API 510 / 570 / 653 Authorized Inspector, ISO 9001:2015 Lead Auditor, Founder &amp; CEO of Atlantis NDT (Houston · Hyderabad). +1 (281) 840-8969.
                     </p>
                  </motion.div>
               </div>
            </section>

            {/* ─────────────── WHAT IS AN NDT DIGITAL TWIN ─────────────── */}
            <section className="py-16 bg-white">
               <div className="max-w-4xl mx-auto px-6">
                  <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">
                     What is an NDT Digital Twin?
                  </h2>
                  <div className="space-y-5 text-slate-700 text-lg leading-relaxed">
                     <p>
                        An NDT digital twin is a high-fidelity 3D virtual replica of a physical asset — a refinery pressure vessel, an FPSO topside, an above-ground storage tank, a heat-exchanger bundle, a transmission pipeline, a steam generator — onto which the asset's entire non-destructive testing record is projected and kept in live sync. The geometry is the canvas. The inspection record is the data layer. Together they describe what the asset actually is today, not what it was designed to be on the day of mechanical completion.
                     </p>
                     <p>
                        The Atlantis digital twin ingests UT thickness CMLs, automated UT scan grids, RT shot indexing, MT and PT surface-indication registers, eddy current tube-bundle data, phased array and TOFD archives, automated ultrasonic testing (AUT) weld scans, ILI runs for transmission pipelines, drone-borne RT and visual surveys, and continuous IoT corrosion-probe streams. Each reading is geo-tagged to a component on the mesh, time-stamped, hash-chained for audit, and linked to the technician who performed the inspection and the ASNT Level III who approved the result. The twin is not a presentation layer — it is the system of record for integrity engineering.
                     </p>
                     <p>
                        That distinction matters. A 3D CAD model shows what the asset was designed to be. A BIM file shows what was handed over at commissioning. A digital twin built on the inspection record shows the metal as it exists today — the corroding parts, the repaired parts, the parts under fitness-for-service review, the parts cleared for another inspection interval. For an integrity manager running 4-12 plants and 2,000+ pieces of fixed equipment, that difference is the difference between a deck of slides and a decision tool.
                     </p>
                  </div>
               </div>
            </section>

            {/* ─────────────── HOW IT WORKS ─────────────── */}
            <section className="py-16 bg-slate-50 border-y border-slate-200">
               <div className="max-w-6xl mx-auto px-6">
                  <div className="max-w-3xl mb-12">
                     <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
                        How it works — Scan, Model, Overlay, Predict
                     </h2>
                     <p className="text-slate-600 text-lg">
                        Four phases, each delivered by a named team member at Atlantis. From kickoff to first asset live in 4-6 weeks.
                     </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                     {/* Step 1 — Scan */}
                     <Card className="p-6 hover:shadow-lg transition border-t-4 border-t-blue-500">
                        <div className="flex items-center gap-3 mb-3">
                           <div className="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold">1</div>
                           <h3 className="text-xl font-bold text-slate-900">Scan — capture the as-is</h3>
                        </div>
                        <p className="text-slate-700 leading-relaxed">
                           The deployment starts with a reality capture pass. For an existing operating asset, we use a combination of terrestrial laser scanning (FARO Focus S350, Leica RTC360, or Trimble X9), drone photogrammetry where access permits, and the customer's last-known CAD or P&amp;ID set. For greenfield projects, we ingest the IFC export from the EPC's engineering CAD platform — Hexagon SmartPlant 3D, Bentley OpenPlant, AVEVA E3D Design, AutoCAD Plant 3D, or Intergraph Smart 3D. The scan output is a registered point cloud and a textured mesh, accurate to ±3 mm on critical equipment surfaces. This is the geometric backbone every inspection record will hang from. We do not require a perfect CAD model — most real plants don't have one — but we do require accurate as-built geometry for the equipment you plan to inspect.
                        </p>
                     </Card>

                     {/* Step 2 — Model */}
                     <Card className="p-6 hover:shadow-lg transition border-t-4 border-t-blue-500">
                        <div className="flex items-center gap-3 mb-3">
                           <div className="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold">2</div>
                           <h3 className="text-xl font-bold text-slate-900">Model — build the asset hierarchy</h3>
                        </div>
                        <p className="text-slate-700 leading-relaxed">
                           Geometry is necessary but not sufficient. The twin needs an asset hierarchy aligned to ISO 14224, your operator's functional-location convention, and the equipment register in your CMMS or EAM. We import the asset master from SAP PM, IBM Maximo, Hexagon Meridium, AVEVA AssetWise, or AspenTech Mtell, then reconcile it against the scanned mesh — every pressure vessel, every piping circuit, every tank shell course, every exchanger tube bundle becomes a tagged object on the twin. Component-level granularity matters: an exchanger isn't one object, it's a shell, a channel, a floating head, two nozzles, two pass partitions, and 1,500 tubes. The Atlantis ontology covers 280+ equipment subtypes across API 510, 570, 653, ASME BPVC Section VIII, ASME B31.3, and ASME B31.8. By the end of this phase, every reading you push will land on a known place.
                        </p>
                     </Card>

                     {/* Step 3 — Overlay */}
                     <Card className="p-6 hover:shadow-lg transition border-t-4 border-t-blue-500">
                        <div className="flex items-center gap-3 mb-3">
                           <div className="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold">3</div>
                           <h3 className="text-xl font-bold text-slate-900">Overlay — push the inspection record</h3>
                        </div>
                        <p className="text-slate-700 leading-relaxed">
                           Inspection data starts flowing. UT thickness readings from Olympus Epoch 650, OmniScan X3, MX2, or any gauge that exports to .csv or .xml drop into the twin and render as a coloured heat map across the equipment surface. RT shot indexing aligns to the radiograph numbering on your shot sheet. PAUT, TOFD, and AUT scan files from Eddyfi, Tecscan, ZETEC, and Sonatest archive as replay-able 3D objects sliceable on the twin. MT and PT indications attach as flagged points with severity, photograph, and inspector note. Pipeline ILI data from Rosen, NDT Global, and Baker Hughes maps as linear features along the pipe centerline. Each record carries metadata: technician name, date, procedure number, ASNT Level II / III qualification, equipment serial, weather, surface condition. The audit trail is hash-chained to SHA-256 so a regulator can verify nothing has been retroactively modified.
                        </p>
                     </Card>

                     {/* Step 4 — Predict */}
                     <Card className="p-6 hover:shadow-lg transition border-t-4 border-t-blue-500">
                        <div className="flex items-center gap-3 mb-3">
                           <div className="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold">4</div>
                           <h3 className="text-xl font-bold text-slate-900">Predict — FFS, RBI, remaining-life</h3>
                        </div>
                        <p className="text-slate-700 leading-relaxed">
                           Once the inspection record is on the twin, the integrity engineering engages. The platform runs API 579-1 Fitness-For-Service calculations (Levels 1, 2, and 3 with FEA partner integration) against the as-found wall thickness, geometry, and operating conditions — outputs an MAWP, an RSF, and a Level III-routed approval gate. API 581 Risk-Based Inspection scores damage factor and consequence factor on the 5x5 matrix per circuit, accounting for the eleven damage mechanisms in API 581 Section 4 and the financial/area consequence models in Section 5. Corrosion-rate regression projects remaining life under operator-specific and API 581 generic rates. Anomaly detection flags step changes in the corrosion-probe stream. Every prediction is a recommendation, never an autonomous action — the ASNT Level III on the customer team signs off the final inspection plan and the work-order push to the EAM.
                        </p>
                     </Card>
                  </div>
               </div>
            </section>

            {/* ─────────────── CAPABILITIES ─────────────── */}
            <section className="py-16 bg-white">
               <div className="max-w-6xl mx-auto px-6">
                  <div className="max-w-3xl mb-12">
                     <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
                        Capabilities
                     </h2>
                     <p className="text-slate-600 text-lg">
                        Every capability is shipped — not on a roadmap. Each one has been delivered in production at a paying customer.
                     </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                     {capabilities.map((cap, i) => (
                        <motion.div
                           key={cap.title}
                           initial={{ opacity: 0, y: 20 }}
                           whileInView={{ opacity: 1, y: 0 }}
                           viewport={{ once: true }}
                           transition={{ delay: i * 0.05 }}
                        >
                           <Card className="h-full border-l-4 border-l-blue-500 hover:shadow-lg transition">
                              <CardHeader className="pb-3">
                                 <div className="flex items-center gap-3">
                                    <cap.icon className="w-6 h-6 text-blue-600" />
                                    <CardTitle className="text-lg">{cap.title}</CardTitle>
                                 </div>
                              </CardHeader>
                              <CardContent>
                                 <p className="text-slate-700 text-sm leading-relaxed">{cap.blurb}</p>
                              </CardContent>
                           </Card>
                        </motion.div>
                     ))}
                  </div>
               </div>
            </section>

            {/* ─────────────── INDUSTRIES SERVED ─────────────── */}
            <section className="py-16 bg-slate-900 text-white">
               <div className="max-w-6xl mx-auto px-6">
                  <div className="max-w-3xl mb-10">
                     <h2 className="text-3xl md:text-4xl font-bold mb-4">Industries served</h2>
                     <p className="text-slate-300 text-lg">
                        Different sectors, same product. Codes, damage mechanisms, and audit packages differ; the platform adapts.
                     </p>
                  </div>
                  <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-5">
                     {industriesServed.map(ind => (
                        <Link
                           key={ind.name}
                           to={ind.href}
                           className="block p-5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-blue-400/40 transition group"
                        >
                           <ind.icon className="w-7 h-7 text-blue-400 mb-3" />
                           <h3 className="font-semibold text-lg mb-2 group-hover:text-blue-300 transition">{ind.name}</h3>
                           <p className="text-slate-300 text-sm leading-relaxed">{ind.useCase}</p>
                        </Link>
                     ))}
                  </div>
               </div>
            </section>

            {/* ─────────────── INTERACTIVE DEMO ─────────────── */}
            <section id="interactive-demo" className="py-16 bg-gradient-to-b from-gray-900 to-slate-900 text-white">
               <div className="max-w-6xl mx-auto px-6">
                  <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
                     Interactive 3D demo
                  </h2>
                  <p className="text-slate-300 text-center mb-8 max-w-2xl mx-auto">
                     A taste of the rendering engine. Rotate, zoom, and inspect three sample assets — the full platform handles 5,000-asset refinery scenes at &gt;30 FPS on a mid-range laptop.
                  </p>

                  <div className="flex flex-wrap justify-center gap-3 mb-8">
                     {models.map(m => (
                        <button
                           key={m.name}
                           onClick={() => setSelectedModel(m)}
                           className={`px-5 py-2.5 rounded-lg font-semibold text-sm transition ${
                              selectedModel.name === m.name
                                 ? "bg-blue-500 text-white shadow-lg"
                                 : "bg-white/10 text-slate-200 hover:bg-white/20"
                           }`}
                        >
                           {m.name}
                        </button>
                     ))}
                  </div>

                  <div className="w-full h-[500px] lg:h-[600px] rounded-xl shadow-xl overflow-hidden bg-slate-800">
                     <SelectedComponent modelPath={selectedModel.path} />
                  </div>
                  <p className="text-slate-400 text-sm text-center mt-4 max-w-2xl mx-auto">
                     {selectedModel.description}
                  </p>
               </div>
            </section>

            {/* ─────────────── VENDOR COMPARISON ─────────────── */}
            <section className="py-16 bg-white">
               <div className="max-w-6xl mx-auto px-6">
                  <div className="max-w-3xl mb-10">
                     <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
                        Vendor comparison — how Atlantis stacks against the alternatives
                     </h2>
                     <p className="text-slate-700 text-lg leading-relaxed">
                        Most "digital twin" products on the market come from adjacent lineages — engineering CAD (Bentley), process historian (AVEVA, OSIsoft PI), CMMS / EAM (IBM Maximo, Hexagon Meridium), or IIoT analytics (GE, Siemens, AspenTech). They were not built around the inspection record. The Atlantis platform was. The table below is the honest summary of where each vendor is strong and where Atlantis sits — every row links to a longer head-to-head page with pricing breakdowns, real customer scenarios, and where the competitor clearly wins.
                     </p>
                  </div>

                  <div className="overflow-x-auto">
                     <table className="w-full border-collapse text-sm">
                        <thead>
                           <tr className="bg-slate-100 text-left">
                              <th className="p-3 font-semibold text-slate-900 border-b border-slate-200">Vendor</th>
                              <th className="p-3 font-semibold text-slate-900 border-b border-slate-200">NDT-native data ingest</th>
                              <th className="p-3 font-semibold text-slate-900 border-b border-slate-200">ASNT Level III in the loop</th>
                              <th className="p-3 font-semibold text-slate-900 border-b border-slate-200">Pricing transparency</th>
                              <th className="p-3 font-semibold text-slate-900 border-b border-slate-200">Cloud / on-prem</th>
                           </tr>
                        </thead>
                        <tbody>
                           <tr className="bg-blue-50">
                              <td className="p-3 border-b border-slate-200 font-semibold text-blue-900">Atlantis Digital Twin</td>
                              <td className="p-3 border-b border-slate-200 text-slate-800">Yes — UT/RT/PAUT/TOFD/AUT/ILI/IoT native</td>
                              <td className="p-3 border-b border-slate-200 text-slate-800">Embedded approval workflow + 40 consulting hrs/yr</td>
                              <td className="p-3 border-b border-slate-200 text-slate-800">Public — enterprise tier</td>
                              <td className="p-3 border-b border-slate-200 text-slate-800">Both — air-gap on-prem available</td>
                           </tr>
                           {vendorCompare.map(row => (
                              <tr key={row.vendor} className="hover:bg-slate-50">
                                 <td className="p-3 border-b border-slate-200 font-medium">
                                    <Link to={row.href} className="text-blue-600 hover:underline">{row.vendor}</Link>
                                 </td>
                                 <td className="p-3 border-b border-slate-200 text-slate-700">{row.ndtNative}</td>
                                 <td className="p-3 border-b border-slate-200 text-slate-700">{row.level3}</td>
                                 <td className="p-3 border-b border-slate-200 text-slate-700">{row.pricing}</td>
                                 <td className="p-3 border-b border-slate-200 text-slate-700">{row.deploy}</td>
                              </tr>
                           ))}
                        </tbody>
                     </table>
                  </div>

                  <p className="text-slate-600 text-sm mt-6 italic">
                     Pricing ranges reflect publicly available data and our customers' migration quotes as of Q2 2026. Bentley, Hexagon, AVEVA, GE, Siemens, IBM, and AspenTech are registered trademarks of their respective owners — comparison is for informational buyer-research purposes.
                  </p>
               </div>
            </section>

            {/* ─────────────── PRICING ─────────────── */}
            <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50 border-y border-slate-200">
               <div className="max-w-5xl mx-auto px-6">
                  <div className="max-w-3xl mb-10">
                     <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
                        Pricing — custom enterprise quote, no hidden seat licenses
                     </h2>
                     <p className="text-slate-700 text-lg leading-relaxed">
                        Single SKU, single price, single seller. We publish our pricing because we believe procurement teams should not have to file an NDA to see a number. Volume discounting is available for multi-tenant enterprises and government accounts.
                     </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                     <Card className="p-7 border-2 border-blue-500 shadow-lg bg-white">
                        <Badge className="mb-3 bg-blue-500 text-white">Most customers</Badge>
                        <h3 className="text-2xl font-bold text-slate-900 mb-2">Enterprise SaaS</h3>
                        <div className="flex items-baseline gap-2 mb-5">
                           <span className="text-4xl font-bold text-blue-600">Contact us</span>
                           <span className="text-slate-600">/ year</span>
                        </div>
                        <ul className="space-y-2.5 text-slate-700 text-sm">
                           {[
                              "Unlimited inspectors and integrity engineers (named users)",
                              "Up to 500 assets per tenant",
                              "All NDT methods supported (UT, RT, MT, PT, ET, VT, PAUT, TOFD, AUT, ILI, IoT)",
                              "API 579-1 FFS engine (Levels 1, 2, 3)",
                              "API 581 RBI engine (POF + COF on 5x5 matrix)",
                              "Predictive maintenance (corrosion-rate regression, anomaly detection, Bayesian RUL)",
                              "All CMMS / EAM connectors (SAP PM, Maximo, Meridium, AssetWise, Mtell, GE APM, ABB)",
                              "Plant historian connectors (OSIsoft PI, AVEVA PI, Honeywell PHD, Aspen IP.21)",
                              "40 hours of ASNT Level III consulting included annually",
                              "Cloud SaaS (AWS) or single-tenant dedicated VPC",
                              "ISO 27001 controls",
                              "Source-code escrow with Iron Mountain",
                              "24x7 support, 99.9% SLA",
                           ].map(item => (
                              <li key={item} className="flex items-start gap-2">
                                 <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                                 <span>{item}</span>
                              </li>
                           ))}
                        </ul>
                     </Card>

                     <Card className="p-7 bg-slate-900 text-white">
                        <Badge className="mb-3 bg-slate-700 text-slate-200">Air-gap / multi-tenant</Badge>
                        <h3 className="text-2xl font-bold mb-2">Enterprise custom</h3>
                        <div className="flex items-baseline gap-2 mb-5">
                           <span className="text-4xl font-bold text-blue-400">Contact us</span>
                        </div>
                        <ul className="space-y-2.5 text-slate-300 text-sm">
                           {[
                              "Everything in Enterprise SaaS",
                              ">500 assets, multi-plant, multi-region rollups",
                              "Air-gapped on-prem Docker / Kubernetes deployment",
                              "Nuclear (NRC 10 CFR 50 Appendix B compliant)",
                              "Defense (DoD IL5, UK MOD)",
                              "Dedicated solution architect + named Level III consultant",
                              "Custom regulatory export packages (Aramco SAEP, ADNOC PQQ, QatarEnergy QPP, KOC, ONGC)",
                              "FedRAMP / IRAP / C5 alignment available",
                              "Source-code escrow + on-site escrow keys",
                              "Per-plant onboarding scoped to your facility",
                           ].map(item => (
                              <li key={item} className="flex items-start gap-2">
                                 <CheckCircle className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                                 <span>{item}</span>
                              </li>
                           ))}
                        </ul>
                        <Link to="/contact?subject=Digital%20Twin%20Enterprise%20Quote" className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition">
                           Request enterprise quote <ArrowRight className="w-4 h-4" />
                        </Link>
                     </Card>
                  </div>

                  <div className="mt-8 p-5 bg-white rounded-lg border border-slate-200 text-slate-700 text-sm leading-relaxed">
                     <strong className="text-slate-900">Per-asset onboarding:</strong> scoped per major asset (3D mesh creation if not customer-provided, plant historian connector configuration, KPI dashboard build-out, asset-hierarchy reconciliation). Discounted when bundled with the <Link to="/best-ndt-reporting-software-2026" className="text-blue-600 underline">Atlantis NDT Reporting Software</Link> and <Link to="/ndt-erp-solution" className="text-blue-600 underline">Atlantis NDT ERP</Link>.
                  </div>
               </div>
            </section>

            {/* ─────────────── ASSET USE CASES ─────────────── */}
            <section className="py-16 bg-white">
               <div className="max-w-6xl mx-auto px-6">
                  <div className="max-w-3xl mb-10">
                     <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
                        Asset use cases
                     </h2>
                     <p className="text-slate-700 text-lg leading-relaxed">
                        Each asset class has its own damage mechanisms, its own dominant NDT methods, and its own code stack. We've built a dedicated page for the twelve asset families that drive 90% of customer demand — each one walks through the specific data sources, the relevant API/ASME codes, and a worked example from a real deployment.
                     </p>
                  </div>

                  <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                     {assetUseCases.map(uc => (
                        <Link
                           key={uc.href}
                           to={uc.href}
                           className="flex items-center justify-between p-4 rounded-lg border border-slate-200 bg-slate-50 hover:bg-blue-50 hover:border-blue-300 transition group"
                        >
                           <span className="font-medium text-slate-800 group-hover:text-blue-700">{uc.name}</span>
                           <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-1 transition" />
                        </Link>
                     ))}
                  </div>
               </div>
            </section>

            {/* ─────────────── CITY COVERAGE ─────────────── */}
            <section className="py-16 bg-slate-50 border-y border-slate-200">
               <div className="max-w-6xl mx-auto px-6">
                  <div className="max-w-3xl mb-10">
                     <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
                        City coverage — deployments where you operate
                     </h2>
                     <p className="text-slate-700 text-lg leading-relaxed">
                        Atlantis is headquartered in Houston with an engineering office in Hyderabad, and we deploy globally. Local language, local time zones, and local regulatory context matter for integrity work — every city page below covers the operator landscape, the dominant damage mechanisms, and the relevant regulator in that market.
                     </p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                     {dtCities.map(c => (
                        <Link
                           key={c.href}
                           to={c.href}
                           className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-white border border-slate-200 text-sm text-slate-700 hover:bg-blue-500 hover:text-white hover:border-blue-500 transition"
                        >
                           <MapPin className="w-3.5 h-3.5" />
                           {c.name}
                        </Link>
                     ))}
                  </div>
               </div>
            </section>

            {/* ─────────────── FAQ ─────────────── */}
            <section className="py-16 bg-white">
               <div className="max-w-4xl mx-auto px-6">
                  <h2 className="text-3xl md:text-4xl font-bold mb-3 text-slate-900">
                     Frequently asked questions
                  </h2>
                  <p className="text-slate-600 text-lg mb-8">
                     The dozen questions every integrity manager asks before signing a five-year platform contract.
                  </p>
                  <div className="space-y-3">
                     {dtFaqs.map((f, i) => (
                        <details key={i} className="bg-slate-50 rounded-lg border border-slate-200 group">
                           <summary className="cursor-pointer font-semibold text-slate-900 px-6 py-4 flex justify-between items-center hover:bg-slate-100 rounded-t-lg">
                              <span className="pr-4">{f.q}</span>
                              <span className="text-blue-600 text-2xl group-open:rotate-45 transition-transform flex-shrink-0">+</span>
                           </summary>
                           <div className="px-6 pb-5 pt-1 text-slate-700 text-sm leading-relaxed">{f.a}</div>
                        </details>
                     ))}
                  </div>
               </div>
            </section>

            {/* ─────────────── RESOURCES ─────────────── */}
            <section className="py-16 bg-slate-900 text-white">
               <div className="max-w-6xl mx-auto px-6">
                  <h2 className="text-3xl md:text-4xl font-bold mb-3">Resources</h2>
                  <p className="text-slate-300 text-lg mb-8 max-w-3xl">
                     Buyer-side tools and reference content. Use them before the demo so the call covers your specifics, not generic feature walkthroughs.
                  </p>

                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
                     <Link to="/digital-twin-readiness-quiz" className="block p-5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-blue-400/40 transition group">
                        <Cpu className="w-7 h-7 text-blue-400 mb-3" />
                        <h3 className="font-semibold mb-2 group-hover:text-blue-300 transition">Readiness quiz</h3>
                        <p className="text-sm text-slate-300">12 questions to score your organization's digital-twin maturity.</p>
                     </Link>
                     <Link to="/digital-twin-roi-calculator" className="block p-5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-blue-400/40 transition group">
                        <BarChart3 className="w-7 h-7 text-blue-400 mb-3" />
                        <h3 className="font-semibold mb-2 group-hover:text-blue-300 transition">ROI calculator</h3>
                        <p className="text-sm text-slate-300">Plug in asset count, turnaround duration, unplanned-downtime cost for payback timing.</p>
                     </Link>
                     <Link to="/digital-twin-vendor-comparison" className="block p-5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-blue-400/40 transition group">
                        <Building2 className="w-7 h-7 text-blue-400 mb-3" />
                        <h3 className="font-semibold mb-2 group-hover:text-blue-300 transition">Vendor matrix</h3>
                        <p className="text-sm text-slate-300">Side-by-side scoring across Bentley, Hexagon, AVEVA, GE, Siemens, IBM, AspenTech, Atlantis.</p>
                     </Link>
                     <Link to="/digital-twin-vs-3d-model-ndt" className="block p-5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-blue-400/40 transition group">
                        <Layers className="w-7 h-7 text-blue-400 mb-3" />
                        <h3 className="font-semibold mb-2 group-hover:text-blue-300 transition">Twin vs 3D model</h3>
                        <p className="text-sm text-slate-300">Why a CAD viewer is not a digital twin and what the gap costs.</p>
                     </Link>
                     <Link to="/digital-twin-api-510-570-580-mapping" className="block p-5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-blue-400/40 transition group">
                        <FileCheck className="w-7 h-7 text-blue-400 mb-3" />
                        <h3 className="font-semibold mb-2 group-hover:text-blue-300 transition">API code mapping</h3>
                        <p className="text-sm text-slate-300">How the platform maps to API 510 / 570 / 580 / 581 / 653 audit packages.</p>
                     </Link>
                     <Link to="/best-ndt-reporting-software-2026" className="block p-5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-blue-400/40 transition group">
                        <Database className="w-7 h-7 text-blue-400 mb-3" />
                        <h3 className="font-semibold mb-2 group-hover:text-blue-300 transition">Reporting software</h3>
                        <p className="text-sm text-slate-300">Companion product — feeds inspection data into the twin.</p>
                     </Link>
                     <Link to="/ndt-erp-solution" className="block p-5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-blue-400/40 transition group">
                        <Workflow className="w-7 h-7 text-blue-400 mb-3" />
                        <h3 className="font-semibold mb-2 group-hover:text-blue-300 transition">NDT ERP</h3>
                        <p className="text-sm text-slate-300">Certifications, equipment calibration, job P&amp;L — the back-office layer.</p>
                     </Link>
                     <Link to="/consulting" className="block p-5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-blue-400/40 transition group">
                        <Shield className="w-7 h-7 text-blue-400 mb-3" />
                        <h3 className="font-semibold mb-2 group-hover:text-blue-300 transition">Level III consulting</h3>
                        <p className="text-sm text-slate-300">Independent Level III approval on FFS, RBI, and procedure qualification.</p>
                     </Link>
                  </div>
               </div>
            </section>

            {/* ─────────────── DEMO CTA ─────────────── */}
            <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
               <div className="max-w-4xl mx-auto px-6 text-center">
                  <Eye className="w-12 h-12 mx-auto mb-5 text-blue-200" />
                  <h2 className="text-3xl md:text-5xl font-bold mb-5">
                     See the platform on your asset
                  </h2>
                  <p className="text-lg md:text-xl text-blue-100 mb-3 max-w-2xl mx-auto leading-relaxed">
                     60-minute scoping call with an ASNT Level III consultant. We'll load a mesh of one of your assets, push a sample inspection record, and walk you through the FFS calculation gate live.
                  </p>
                  <p className="text-blue-200 mb-8">
                     No slides. No salespeople. Engineers only.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                     <Link to="/contact?subject=Digital%20Twin%20Demo%20Request" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-blue-700 font-semibold rounded-lg shadow-lg hover:bg-blue-50 transition">
                        Request a demo <ArrowRight className="w-4 h-4" />
                     </Link>
                     <a href="tel:+12818408969" className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white/60 hover:bg-white/10 text-white font-semibold rounded-lg transition">
                        Call +1 (281) 840-8969
                     </a>
                  </div>
                  <p className="text-blue-200 text-sm">
                     Anoop Rayavarapu, Founder &amp; CEO — anoop@atlantisinspection.com
                  </p>
               </div>
            </section>

            {/* 2026-05-23: ERP/DT cross-promo block — SEO link-equity distribution */}
            <section className="bg-white py-4">
                <div className="container mx-auto max-w-6xl px-6">
                    <ErpDtCrossPromoBlock
                        relevantApp="CMMS"
                        relevantAppHref="/erp/cmms-for-inspection-companies"
                        heading="Pair your Digital Twin with the cheapest ERP in the industry"
                        subheading="Most inspection companies adopt the ERP first, the Digital Twin second. Both ship with the same data model — UT/PAUT, certs, calibrations, RBI — so there's no integration tax."
                    />
                </div>
            </section>

            <ContactDetails />
         </div>
      </>
   );
}
