import { useState } from "react";
import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import ContactDetails from "@/components/ContactDetails";
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
   Clock,
   TrendingUp,
   Factory,
   Droplets,
   Plane,
   Ship
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { buildTechArticleSchema, ATLANTIS_AUTHOR_ANOOP, ATLANTIS_PUBLISHER } from "@/data/author-schema";

const URL = "https://atlantisndt.com/digital-twins";

const dtFaqs = [
  {
    q: "What is an NDT Digital Twin?",
    a: "An NDT Digital Twin is a high-fidelity 3D virtual replica of a physical asset (storage tank, pressure vessel, piping circuit, heat exchanger, offshore platform) onto which non-destructive testing data — UT thickness grids, RT defect maps, MT/PT indications, ET tube-bundle results — is projected in real time. Inspectors, integrity engineers, and Level III approvers can rotate, slice, and query the model to localize defects, track degradation between inspections, and plan repairs without flying back to the site."
  },
  {
    q: "How is a Digital Twin different from a 3D CAD model?",
    a: "A CAD model is geometry. A Digital Twin is geometry + live operational data + inspection history + degradation models. The Atlantis Digital Twin reads UT thickness data from your reporting software, overlays it on the 3D mesh as a heat map, runs API 579-1 Fitness-For-Service calculations against the as-found wall thickness, and predicts time-to-retirement using API 581 corrosion-rate models. CAD does none of that — CAD shows what was designed; the Digital Twin shows what is actually there."
  },
  {
    q: "What data sources can plug into the Digital Twin?",
    a: "Atlantis Digital Twin ingests from: (1) Atlantis Reporting Software (native, real-time); (2) Hexagon Meridium APM, IBM Maximo, AspenTech Mtell, GE Vernova APM, Bentley AssetWise via REST; (3) UT crawler / scanner exports (Olympus / Eddyfi / Sonatest TFM, PAUT, TOFD); (4) ILI pipeline tools (Rosen, NDT Global, Baker Hughes); (5) drone-borne RT and visual surveys; (6) IoT corrosion probes (Permasense, Cosasco, ROXAR); (7) plant historian (PI, Honeywell PHD, Aspen IP.21)."
  },
  {
    q: "How much does an NDT Digital Twin deployment cost?",
    a: "Atlantis NDT Digital Twins platform is $200,000 / year for the full enterprise license — that includes unlimited assets, all data connectors, AI-powered predictive maintenance, Level III review workflows, and 24x7 support. Per-asset onboarding (3D mesh creation if not provided, data ingestion configuration, KPI dashboard) is $15,000-$50,000 per major asset depending on complexity. Comparable Hexagon SmartPlant / Bentley AssetWise / GE APM digital twin programs typically run $500K-$5M for similar coverage."
  },
  {
    q: "Will the Digital Twin work with my existing CMMS / EAM?",
    a: "Yes. Native two-way integration with SAP Plant Maintenance, IBM Maximo Application Suite, Hexagon Meridium APM, AspenTech Mtell, GE Vernova APM, Bentley AssetWise, ABB Ability, Microsoft Dynamics 365 Field Service, and Salesforce Field Service. Inspection findings on the twin push as work orders or APM events. Asset hierarchies sync. Functional location mapping is preserved."
  },
  {
    q: "Does it run in browser, desktop, or VR?",
    a: "Browser-first — WebGL-based, runs on any modern browser without plugin install. Optimized for laptops on 4G connections at refinery sites. Desktop fat-client (Windows + Mac) for very large meshes (>500 MB). VR / AR via WebXR is in beta for Meta Quest 3 / Apple Vision Pro — Q3 2026 GA. Mobile (iOS / Android) is a thinner viewer-only app."
  },
  {
    q: "How does the Digital Twin support API 581 RBI?",
    a: "The platform implements API 581 §Section 4 (POF damage factor calculations) and §Section 5 (COF consequence modelling) natively. As-found wall thickness from UT inspections feeds the corrosion-rate model. The damage factor and consequence factor compute risk on a 5x5 matrix per circuit / TML. Inspection planning (next-due-date, method, extent) flows back into Atlantis NDT Reporting and the EAM. Level III approval gates every risk-tier change."
  },
  {
    q: "Is the Digital Twin auditable for ADNOC, Aramco, NRC?",
    a: "Yes. Every data write is hash-chained (SHA-256) with timestamp and authenticated user. The platform produces audit packages on demand for ADNOC PQQ, Aramco SAEP, QatarEnergy QPP, KOC, ONGC HVT-INSP, and US NRC 10 CFR 50 Appendix B. Data export is in standard formats (IFC, glTF, JSON, PDF/A) — no vendor lock-in."
  },
  {
    q: "What about cybersecurity for OT / critical infrastructure?",
    a: "We follow IEC 62443 zone-and-conduit guidance for industrial control system integration. Read-only data ingestion from plant historians via DMZ. SOC 2 Type II audit for the SaaS tenant. Air-gap on-premise option for nuclear / defense (NRC, Department of Defense, MOD). Penetration tests quarterly by independent NIST-aligned firm. CVE disclosure policy with 90-day window."
  },
  {
    q: "Can the Digital Twin do predictive maintenance / AI?",
    a: "Yes. The platform's predictive layer runs three model classes: (a) corrosion-rate regression from historical UT thickness time-series; (b) anomaly detection on continuous IoT corrosion probe streams; (c) Bayesian remaining-useful-life on rotating equipment from vibration + lubrication-oil analysis. Outputs are recommendations for Level III review, never autonomous decisions. Audit log records every model output and human action."
  },
  {
    q: "How long does Digital Twin deployment take?",
    a: "Pilot asset live in 4-6 weeks (one storage tank, one piping circuit, or one heat exchanger). Plant-wide rollout 6-9 months for a typical refinery. Greenfield mega-project deployments (LNG terminal, petrochemical complex) take 12-18 months and run alongside commissioning. Atlantis NDT certified Level III engineers lead each deployment."
  },
  {
    q: "What if Atlantis is acquired or shuts down?",
    a: "Customer contracts include source-code escrow (Iron Mountain) and a documented data export path. Your meshes, inspection data, KPI configurations, and integration specs are exportable in standard open formats. The platform can run in read-only / archive mode against exported data. Atlantis carries $5M professional indemnity insurance and has a documented succession plan with Houston legal counsel."
  },
];

const models = [
   {
      name: "Jet Engine",
      path: "/jet_engine.glb",
      component: InteractiveJet,
      description:
         "Experience a high-fidelity 3D model of a jet engine. Explore the internal components and understand the working principles of modern aviation engines.",
   },
   {
      name: "Industry",
      path: "/generic_factory_with_smoke_towers.glb",
      component: InteractivePlant,
      description:
         "Dive into a detailed factory model with moving parts. Understand mechanics, performance optimization, and maintenance procedures interactively.",
   },
   {
      name: "Tank",
      path: "/propane_tank.glb",
      component: InteractivePipe,
      description:
         "An industrial tank model designed for training and simulation. Examine structural details and operational dynamics for real-world applications.",
   },
];

const benefits = [
   {
      icon: Eye,
      title: "Real-Time Visualization",
      description: "View NDT inspection data overlaid on 3D models in real-time. Instantly identify defect locations and severity."
   },
   {
      icon: BarChart3,
      title: "Predictive Maintenance",
      description: "Use historical data and AI to predict equipment failures before they occur, reducing unplanned downtime by up to 50%."
   },
   {
      icon: Shield,
      title: "Risk-Based Inspection",
      description: "Prioritize inspections based on criticality and failure probability. Optimize inspection schedules and resources."
   },
   {
      icon: Clock,
      title: "Faster Decision Making",
      description: "Reduce report analysis time from days to minutes. Stakeholders can view and understand inspection results instantly."
   },
   {
      icon: TrendingUp,
      title: "Cost Reduction",
      description: "Reduce inspection costs by 30-40% through optimized scheduling and remote collaboration capabilities."
   },
   {
      icon: Cpu,
      title: "Integration Ready",
      description: "Seamless integration with existing CMMS, ERP, and inspection management systems via REST APIs."
   }
];

const industries = [
   { icon: Droplets, name: "Oil & Gas", description: "Refineries, pipelines, storage tanks, offshore platforms", href: "/ndt-for-oil-gas" },
   { icon: Factory, name: "Petrochemical", description: "Heat exchangers, pressure vessels, reactors, columns", href: "/ndt-for-oil-gas" },
   { icon: Ship, name: "Marine", description: "Ship hulls, ballast tanks, cargo holds, offshore structures", href: "/consulting" },
   { icon: Plane, name: "Aerospace", description: "Aircraft structures, engine components, landing gear", href: "/ndt-for-aerospace" }
];

const useCases = [
   {
      title: "Storage Tank Integrity Management",
      description: "Map corrosion data, weld defects, and thickness readings directly onto 3D tank models. Track degradation over time and plan maintenance effectively.",
      stats: "40% reduction in inspection time"
   },
   {
      title: "Pipeline Defect Mapping",
      description: "Visualize ILI (In-Line Inspection) data on pipeline digital twins. Identify high-risk areas and prioritize dig sites for repair.",
      stats: "60% improvement in defect localization"
   },
   {
      title: "Heat Exchanger Tube Analysis",
      description: "Display eddy current testing results on tube bundle models. Quickly identify which tubes need plugging or replacement.",
      stats: "50% faster turnaround decisions"
   },
   {
      title: "Pressure Vessel Inspection",
      description: "Combine UT thickness data, MT/PT surface findings, and RT weld inspection results in a unified 3D view.",
      stats: "35% reduction in reporting time"
   }
];

export default function DigitalTwins() {
   const [selectedModel, setSelectedModel] = useState(models[0]);
   const SelectedComponent = selectedModel.component;

   const structuredData = {
      "@context": "https://schema.org",
      "@graph": [
         buildTechArticleSchema({
            url: URL,
            headline: "NDT Digital Twins 2026 — 3D Asset Integrity Visualization for Oil & Gas, Aerospace, Marine",
            description:
               "ASNT Level III-authored guide to NDT digital twins: 3D asset visualization with live UT/RT/MT/PT/ET inspection data overlay, API 579-1 FFS calculations, API 581 RBI, predictive maintenance. Pricing, integrations, FAQs.",
            datePublished: "2026-03-15",
            dateModified: "2026-05-07",
            section: "NDT Digital Twins — Product Page",
            keywords:
               "NDT digital twins, digital twin technology, 3D asset visualization, oil gas digital twin, refinery digital twin, API 579 fitness for service, API 581 RBI, predictive maintenance, asset integrity software",
            dependencies: "API 510, API 570, API 653, API 579-1, API 581, ASME BPVC Section V, ISO 17635, IEC 62443",
         }),
         { "@type": "Organization", "@id": "https://atlantisndt.com/#organization", ...ATLANTIS_PUBLISHER },
         { "@type": "Person", "@id": "https://atlantisndt.com/#anoop-rayavarapu", ...ATLANTIS_AUTHOR_ANOOP },
         {
            "@type": "SoftwareApplication",
            "@id": `${URL}#software`,
            "name": "Atlantis NDT Digital Twins Platform",
            "applicationCategory": "BusinessApplication",
            "operatingSystem": "Cloud (browser, WebGL); desktop Windows / Mac; iOS / Android viewer; on-premise Docker for air-gap",
            "softwareVersion": "2026.5",
            "description":
               "Real-time 3D asset visualization with NDT inspection data overlay. UT thickness heat maps, API 579-1 FFS, API 581 RBI, predictive maintenance, IEC 62443 OT cybersecurity. Native CMMS / EAM integrations.",
            "url": URL,
            "publisher": { "@id": "https://atlantisndt.com/#organization" },
            "author": { "@id": "https://atlantisndt.com/#anoop-rayavarapu" },
            "offers": {
               "@type": "Offer",
               "url": URL,
               "price": "200000",
               "priceCurrency": "USD",
               "priceValidUntil": "2027-12-31",
               "availability": "https://schema.org/InStock",
               "category": "subscription",
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
                  { "@type": "Country", "name": "Netherlands" },
               ],
            },
            "featureList":
               "Browser WebGL 3D • UT thickness heat-map overlay • RT defect localization • MT/PT indication tagging • API 579-1 FFS calculations • API 581 RBI engine • Predictive maintenance (corrosion-rate regression, anomaly detection, Bayesian RUL) • CMMS / EAM integration • Plant historian ingestion • IEC 62443 OT security • SHA-256 hash chain audit log",
            "aggregateRating": {
               "@type": "AggregateRating",
               "ratingValue": "4.8",
               "ratingCount": "125",
               "bestRating": "5",
               "worstRating": "1",
            },
            "areaServed": ["US", "AE", "SA", "IN", "GB", "SG", "CA", "AU", "NO", "NL"],
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
      ],
   };

   return (
      <>
         <SEOHead
            title="NDT Digital Twins | 3D Asset Integrity Visualization | Oil & Gas Solutions | Atlantis NDT"
            description="Transform NDT reporting with Digital Twin technology. Real-time 3D visualization for refineries, storage tanks & pipelines. Reduce inspection. Request a demo."
            keywords="NDT digital twins, digital twin technology, 3D asset visualization, oil gas digital twin, refinery digital twin, industrial simulation, asset integrity, NDT reporting software, pipeline visualization, storage tank inspection, predictive maintenance"
            ogImage="/atlantis.jpg"
            canonical="https://atlantisndt.com/digital-twins"
            structuredData={structuredData}
         />
         <Navigation />

         <div className="w-full min-h-screen flex flex-col bg-gray-100">
            {/* Hero Section */}
            <section className="pt-24 pb-16 bg-gradient-to-br from-slate-800 to-slate-900 text-white text-center">
               <div className="max-w-4xl mx-auto px-6">
                  <motion.div
                     initial={{ opacity: 0, y: 30 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ duration: 0.8 }}
                  >
                     <h1 className="text-4xl md:text-6xl font-bold mb-6">
                        NDT Digital Twins
                     </h1>
                     <p className="text-xl md:text-2xl text-slate-300 leading-relaxed mb-4">
                        Transform inspection data into interactive 3D visualizations.
                        Make faster decisions, reduce costs, and prevent failures.
                     </p>
                     <p className="text-sm text-slate-400 mb-8">
                        Author: <strong className="text-slate-200">Anoop Rayavarapu</strong> — ASNT NDT Level III, API 653 Authorized Inspector, ISO 9001:2015 Lead Auditor. Founder &amp; CEO Atlantis NDT. Updated May 2026.
                     </p>
                     <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                           to="/contact"
                           className="inline-block px-8 py-4 bg-primary text-white font-semibold rounded-lg shadow-lg hover:bg-primary/90 transition"
                        >
                           Request a Demo
                        </Link>
                        <a
                           href="#interactive-demo"
                           className="inline-block px-8 py-4 border-2 border-slate-400 text-white font-semibold rounded-lg hover:bg-white/10 transition"
                        >
                           Try Interactive Demo
                        </a>
                     </div>
                  </motion.div>
               </div>
            </section>

            {/* What is Digital Twin Section */}
            <section className="py-16 bg-white">
               <div className="max-w-6xl mx-auto px-6">
                  <motion.div
                     className="text-center mb-12"
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                  >
                     <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        What is an NDT Digital Twin?
                     </h2>
                     <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                        An NDT Digital Twin is a virtual 3D replica of a physical asset that displays
                        real-time inspection data, defect locations, and integrity status. It enables
                        engineers and inspectors to visualize, analyze, and make decisions faster than
                        traditional 2D reports.
                     </p>
                  </motion.div>

                  <div className="grid md:grid-cols-3 gap-8">
                     <Card className="text-center hover:shadow-lg transition">
                        <CardHeader>
                           <div className="mx-auto bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                              <Eye className="w-8 h-8 text-[#004aad]" />
                           </div>
                           <CardTitle>Visualize</CardTitle>
                        </CardHeader>
                        <CardContent>
                           <p className="text-slate-600">
                              Map NDT data (UT thickness, RT defects, ET results) directly onto 3D models
                           </p>
                        </CardContent>
                     </Card>
                     <Card className="text-center hover:shadow-lg transition">
                        <CardHeader>
                           <div className="mx-auto bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                              <BarChart3 className="w-8 h-8 text-[#004aad]" />
                           </div>
                           <CardTitle>Analyze</CardTitle>
                        </CardHeader>
                        <CardContent>
                           <p className="text-slate-600">
                              Compare historical data, track degradation trends, and predict failures
                           </p>
                        </CardContent>
                     </Card>
                     <Card className="text-center hover:shadow-lg transition">
                        <CardHeader>
                           <div className="mx-auto bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                              <TrendingUp className="w-8 h-8 text-[#004aad]" />
                           </div>
                           <CardTitle>Decide</CardTitle>
                        </CardHeader>
                        <CardContent>
                           <p className="text-slate-600">
                              Make data-driven decisions for repairs, maintenance, and asset lifecycle
                           </p>
                        </CardContent>
                     </Card>
                  </div>
               </div>
            </section>

            {/* Benefits Section */}
            <section className="py-16 bg-slate-50">
               <div className="max-w-6xl mx-auto px-6">
                  <motion.div
                     className="text-center mb-12"
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                  >
                     <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Benefits of NDT Digital Twins
                     </h2>
                     <p className="text-lg text-slate-600">
                        Transform how you manage asset integrity with cutting-edge visualization technology
                     </p>
                  </motion.div>

                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                     {benefits.map((benefit, index) => (
                        <motion.div
                           key={benefit.title}
                           initial={{ opacity: 0, y: 20 }}
                           whileInView={{ opacity: 1, y: 0 }}
                           viewport={{ once: true }}
                           transition={{ delay: index * 0.1 }}
                        >
                           <Card className="h-full hover:shadow-lg transition border-l-4 border-l-[#004aad]">
                              <CardHeader className="pb-2">
                                 <div className="flex items-center gap-3">
                                    <benefit.icon className="w-6 h-6 text-[#004aad]" />
                                    <CardTitle className="text-lg">{benefit.title}</CardTitle>
                                 </div>
                              </CardHeader>
                              <CardContent>
                                 <p className="text-slate-600 text-sm">{benefit.description}</p>
                              </CardContent>
                           </Card>
                        </motion.div>
                     ))}
                  </div>

                  {/* Cross-link to Industry-Specific Page */}
                  <motion.div
                     className="mt-12 text-center"
                     initial={{ opacity: 0 }}
                     whileInView={{ opacity: 1 }}
                     viewport={{ once: true }}
                  >
                     <p className="text-slate-600 mb-4">Explore industry-specific solutions:</p>
                     <Link to="/digital-twins-oil-gas-assets" className="inline-flex items-center gap-2 px-6 py-3 bg-[#004aad] text-white font-semibold rounded-lg hover:bg-[#003380] transition">
                        Digital Twins for Oil & Gas Assets
                        <ArrowRight className="w-4 h-4" />
                     </Link>
                  </motion.div>
               </div>
            </section>

            {/* Interactive Demo Section */}
            <section id="interactive-demo" className="py-16 bg-gray-900">
               <div className="max-w-6xl mx-auto px-6">
                  <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-8">
                     Interactive 3D Demo
                  </h2>

                  {/* Model Selection */}
                  <div className="flex flex-wrap justify-center gap-4 mb-8">
                     {models.map((model) => (
                        <motion.button
                           key={model.name}
                           onClick={() => setSelectedModel(model)}
                           whileHover={{ scale: 1.05 }}
                           whileTap={{ scale: 0.95 }}
                           className={`px-6 py-3 rounded-lg font-semibold transition-colors ${selectedModel.name === model.name
                              ? "bg-[#004aad] text-white shadow-lg"
                              : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                              }`}
                        >
                           {model.name}
                        </motion.button>
                     ))}
                  </div>

                  {/* 3D Model Display */}
                  <motion.div
                     className="w-full h-[500px] lg:h-[600px] rounded-xl shadow-xl overflow-hidden bg-gray-800"
                     initial={{ opacity: 0 }}
                     animate={{ opacity: 1 }}
                     transition={{ duration: 0.8 }}
                  >
                     <SelectedComponent modelPath={selectedModel.path} />
                  </motion.div>

                  {/* Model Description */}
                  <motion.div
                     className="bg-white p-6 rounded-xl shadow-xl mt-6 text-center"
                     initial={{ opacity: 0, y: 20 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ duration: 0.6 }}
                  >
                     <h3 className="text-2xl font-bold mb-2">{selectedModel.name}</h3>
                     <p className="text-slate-600">{selectedModel.description}</p>
                  </motion.div>
               </div>
            </section>

            {/* Use Cases Section */}
            <section className="py-16 bg-white">
               <div className="max-w-6xl mx-auto px-6">
                  <motion.div
                     className="text-center mb-12"
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                  >
                     <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Real-World Use Cases
                     </h2>
                     <p className="text-lg text-slate-600">
                        See how leading companies use NDT Digital Twins to improve operations
                     </p>
                  </motion.div>

                  <div className="grid md:grid-cols-2 gap-6">
                     {useCases.map((useCase, index) => (
                        <motion.div
                           key={useCase.title}
                           initial={{ opacity: 0, y: 20 }}
                           whileInView={{ opacity: 1, y: 0 }}
                           viewport={{ once: true }}
                           transition={{ delay: index * 0.1 }}
                           className="bg-slate-50 p-6 rounded-xl"
                        >
                           <h3 className="text-xl font-bold mb-2">{useCase.title}</h3>
                           <p className="text-slate-600 mb-4">{useCase.description}</p>
                           <div className="flex items-center gap-2 text-[#004aad] font-semibold">
                              <CheckCircle className="w-5 h-5" />
                              {useCase.stats}
                           </div>
                        </motion.div>
                     ))}
                  </div>
               </div>
            </section>

            {/* Industries Section */}
            <section className="py-16 bg-slate-900 text-white">
               <div className="max-w-6xl mx-auto px-6">
                  <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                     Industries We Serve
                  </h2>
                  <div className="grid md:grid-cols-4 gap-6">
                     {industries.map((industry) => (
                        <Link key={industry.name} to={industry.href} className="text-center group hover:scale-105 transition-all duration-200">
                           <div className="mx-auto bg-white/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4 group-hover:bg-white/20 transition">
                              <industry.icon className="w-8 h-8 text-blue-400" />
                           </div>
                           <h3 className="font-semibold text-lg mb-2 group-hover:text-blue-400 transition">{industry.name}</h3>
                           <p className="text-slate-400 text-sm">{industry.description}</p>
                        </Link>
                     ))}
                  </div>
               </div>
            </section>

            {/* Related Articles */}
            <section className="py-16 bg-white">
               <div className="max-w-6xl mx-auto px-6">
                  <h2 className="text-3xl font-bold text-center mb-8">
                     Learn More About Digital Twins
                  </h2>
                  <div className="grid md:grid-cols-2 gap-6">
                     <Link
                        to="/blog/digital-twins-ndt-guide"
                        className="block p-6 bg-slate-50 rounded-xl hover:shadow-lg transition group"
                     >
                        <h3 className="text-xl font-bold mb-2 group-hover:text-[#004aad] transition">
                           Complete Guide to Digital Twins in NDT
                        </h3>
                        <p className="text-slate-600 mb-4">
                           Learn how digital twin technology is revolutionizing non-destructive testing
                           and asset integrity management.
                        </p>
                        <span className="text-[#004aad] font-medium flex items-center gap-2">
                           Read Article <ArrowRight className="w-4 h-4" />
                        </span>
                     </Link>
                     <Link
                        to="/blog/digital-twins-oil-gas"
                        className="block p-6 bg-slate-50 rounded-xl hover:shadow-lg transition group"
                     >
                        <h3 className="text-xl font-bold mb-2 group-hover:text-[#004aad] transition">
                           Digital Twins for Oil & Gas Industry
                        </h3>
                        <p className="text-slate-600 mb-4">
                           How refineries and petrochemical plants are using digital twins for
                           predictive maintenance and turnaround planning.
                        </p>
                        <span className="text-[#004aad] font-medium flex items-center gap-2">
                           Read Article <ArrowRight className="w-4 h-4" />
                        </span>
                     </Link>
                  </div>
               </div>
            </section>

            {/* FAQ Section */}
            <section className="py-16 bg-slate-50">
               <div className="max-w-4xl mx-auto px-6">
                  <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
                     Frequently Asked Questions
                  </h2>
                  <div className="space-y-3">
                     {dtFaqs.map((f, i) => (
                        <details key={i} className="bg-white rounded-lg shadow-sm border border-slate-200 group">
                           <summary className="cursor-pointer font-semibold text-slate-900 px-6 py-4 flex justify-between items-center">
                              <span className="pr-4">{f.q}</span>
                              <span className="text-[#004aad] text-2xl group-open:rotate-45 transition-transform">+</span>
                           </summary>
                           <div className="px-6 pb-5 text-slate-700 text-sm leading-relaxed">{f.a}</div>
                        </details>
                     ))}
                  </div>
               </div>
            </section>

            {/* Related Atlantis Platforms */}
            <section className="py-16 bg-white">
               <div className="max-w-6xl mx-auto px-6">
                  <h2 className="text-3xl font-bold text-center mb-8">Related Atlantis platforms</h2>
                  <div className="grid md:grid-cols-3 gap-5">
                     <Link to="/best-ndt-reporting-software-2026" className="block bg-slate-50 p-6 rounded-xl border hover:shadow-md transition group">
                        <h3 className="font-bold text-lg mb-2 group-hover:text-[#004aad] transition">NDT Reporting Software</h3>
                        <p className="text-sm text-slate-600">Code-aligned inspection report generation — feeds inspection data directly into the Digital Twin.</p>
                     </Link>
                     <Link to="/ndt-erp-solution" className="block bg-slate-50 p-6 rounded-xl border hover:shadow-md transition group">
                        <h3 className="font-bold text-lg mb-2 group-hover:text-[#004aad] transition">NDT ERP Software</h3>
                        <p className="text-sm text-slate-600">Personnel certifications, equipment calibration, project P&amp;L — the back-office layer beneath the twin.</p>
                     </Link>
                     <Link to="/consulting" className="block bg-slate-50 p-6 rounded-xl border hover:shadow-md transition group">
                        <h3 className="font-bold text-lg mb-2 group-hover:text-[#004aad] transition">ASNT Level III Consulting</h3>
                        <p className="text-sm text-slate-600">Independent Level III approval of API 579 FFS, API 581 RBI outputs from the Digital Twin.</p>
                     </Link>
                  </div>
               </div>
            </section>

            {/* Footer CTA */}
            <section className="py-16 bg-gradient-to-r from-[#004aad] to-[#0066cc] text-white text-center">
               <div className="max-w-3xl mx-auto px-6">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                     Ready to Transform Your NDT Operations?
                  </h2>
                  <p className="text-xl text-blue-100 mb-8">
                     Schedule a personalized demo to see how Digital Twins can work for your assets.
                  </p>
                  <Link
                     to="/contact"
                     className="inline-block px-8 py-4 bg-white text-[#004aad] font-semibold rounded-lg shadow-lg hover:bg-gray-100 transition"
                  >
                     Request a Demo
                  </Link>
               </div>
            </section>

            <ContactDetails />
         </div>
      </>
   );
}
