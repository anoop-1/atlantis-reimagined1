import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
   ArrowRight,
   Gauge,
   BarChart3,
   Activity,
   Database,
   Workflow,
   FileCheck,
   Server,
   Layers,
   Droplets,
   Zap,
   Plane,
   Ship,
   Atom,
   CheckCircle,
   Sparkles,
} from "lucide-react";
import { Navigation } from "@/components/Navigation";
import ContactDetails from "@/components/ContactDetails";
import { SEOHead } from "@/components/SEOHead";
import { CursorFollower } from "@/components/CursorFollower";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SplineScene } from "@/components/ui/splite";
import { Spotlight } from "@/components/ui/spotlight";

const SPLINE_SCENE = "https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode";

// ── Motion presets (see framer-motion-animations skill) ──────────────────────
const fadeUp = {
   hidden: { opacity: 0, y: 24 },
   show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};
const stagger = {
   hidden: {},
   show: { transition: { staggerChildren: 0.08 } },
};

// ── Content (mirrors /digital-twins) ─────────────────────────────────────────
const capabilities = [
   {
      icon: Layers,
      title: "Corrosion mapping & UT thickness grids",
      blurb:
         "Project conventional UT spot readings, automated UT scan grids, IRIS bundle data, and PAUT corrosion mapping onto the 3D mesh as a live heat map. Corrosion-rate delta and API 581 remaining-life, per component.",
   },
   {
      icon: Gauge,
      title: "API 579-1 Fitness-For-Service",
      blurb:
         "All four FFS levels embedded — Level 1 screening, Level 2 RSF / MAWP re-rate, Level 3 FEA-driven. Outputs route through your ASNT Level III for sign-off, audit-logged to the asset record.",
   },
   {
      icon: BarChart3,
      title: "API 581 Risk-Based Inspection",
      blurb:
         "Damage + consequence factors on a 5×5 matrix per equipment item or TML circuit. Eleven damage mechanisms, financial + area-based COF. Inspection plan feeds your EAM as work orders.",
   },
   {
      icon: Activity,
      title: "AUT, PAUT, TOFD & advanced UT",
      blurb:
         "Native ingestion of phased-array scans from OmniScan X3, Eddyfi Gekko/Mantis, Tecscan, ZETEC Topaz, Sonatest. Geo-tagged to the exact weld, sliceable on the twin, replay-able during turnarounds.",
   },
   {
      icon: Database,
      title: "Fleet & portfolio view",
      blurb:
         "Multi-asset, multi-site rollups. Drill fleet → site → unit → equipment → component → reading in three clicks. Powers the quarterly integrity review packet for the VP HSE.",
   },
   {
      icon: Workflow,
      title: "Defect lifecycle & anomaly management",
      blurb:
         "Every indication is a first-class object — status, assignment, due-date, FFS justification, Level III sign-off chain. Trend defect growth over multi-year history. Searchable by mechanism, method, severity.",
   },
   {
      icon: FileCheck,
      title: "Regulatory reporting (API 510 / 570 / 653)",
      blurb:
         "One-click PDF/A audit packages — API 510/570/653, ASME PCC-2, PED PSSR, PHMSA 49 CFR 192/195. Hash-chained immutable trail behind every export with crypto-backed AI signatures.",
   },
   {
      icon: Server,
      title: "Digital handover from EPC",
      blurb:
         "Ingests IFC models from Bentley OpenPlant, SmartPlant 3D, AVEVA E3D, plus FARO / Leica / Trimble point clouds — reconciled into the operating twin from mechanical completion to year-30 retirement.",
   },
];

const industries = [
   { icon: Droplets, name: "Oil & Gas", blurb: "FPSO hulls, refinery vessels, sour-gas piping, storage tanks — full API 510/570/653/579/581 in one twin.", href: "/ndt-for-oil-gas" },
   { icon: Zap, name: "Power Generation", blurb: "Boiler pressure parts, HRSG tubes, steam piping — ECT and IRIS bundle data overlaid for outage planning.", href: "/ndt-for-power-generation" },
   { icon: Plane, name: "Aerospace", blurb: "Engine borescope records, airframe fatigue tracking, composite delamination — ISO 9712 audit trail.", href: "/ndt-for-aerospace" },
   { icon: Ship, name: "Marine & Offshore", blurb: "Ballast tank coating breakdown, hull thickness, jacket-leg CP — DNV / ABS / Lloyd's / BV alignment.", href: "/marine-offshore-ndt-services" },
   { icon: Atom, name: "Nuclear", blurb: "Steam generator tubes, RPV head penetrations, ASME XI ISI — air-gapped for NRC 10 CFR 50 App. B.", href: "/nuclear-ndt-services" },
];

const metrics = [
   { value: "$200K", label: "per year — full enterprise SaaS license" },
   { value: "4–6 wk", label: "to first asset live on the twin" },
   { value: "20+", label: "NDT data connectors shipped" },
   { value: "SOC 2", label: "Type II audited tenancy" },
];

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

export default function DigitalTwinsExperience() {
   return (
      <>
         <SEOHead
            title="Digital Twin for NDT — Interactive 3D Asset Integrity Platform | Atlantis NDT"
            description="Explore the Atlantis Digital Twin: UT/PAUT overlaid in interactive 3D, API 579 FFS, API 581 RBI, immutable audit packs. ASNT Level III-led. Book a demo."
            keywords="digital twin NDT software, interactive 3D asset integrity, API 579 fitness for service, API 581 RBI, PAUT digital twin, predictive maintenance, ASNT Level III"
            ogImage="/atlantis.jpg"
            canonical="https://atlantisndt.com/digital-twins-experience"
         />
         <CursorFollower />
         <Navigation />

         <main className="w-full bg-white text-neutral-700 overflow-hidden">
            {/* ─────────────── HERO — Interactive 3D ─────────────── */}
            <section className="pt-20 px-4 md:px-8 bg-white">
               <Card className="relative w-full max-w-7xl mx-auto h-[600px] md:h-[560px] bg-white border-neutral-200 shadow-lg overflow-hidden">
                  <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="#60a5fa" />

                  <div className="flex flex-col md:flex-row h-full">
                     {/* Left — copy */}
                     <div className="flex-1 p-8 md:p-12 relative z-10 flex flex-col justify-center">
                        <motion.div initial="hidden" animate="show" variants={stagger}>
                           <motion.div variants={fadeUp}>
                              <Badge className="mb-5 bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-100">
                                 <Sparkles className="w-3.5 h-3.5 mr-1.5" />
                                 Real-time 3D · NDT-native
                              </Badge>
                           </motion.div>
                           <motion.h1
                              variants={fadeUp}
                              className="text-4xl md:text-6xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-b from-neutral-900 to-neutral-500"
                           >
                              Your asset,
                              <br />
                              alive in 3D.
                           </motion.h1>
                           <motion.p variants={fadeUp} className="mt-5 text-neutral-600 max-w-lg text-lg leading-relaxed">
                              Every UT thickness grid, PAUT scan, and corrosion map rendered on a live
                              digital twin. API 579 fitness-for-service and API 581 RBI built in —
                              approved by your ASNT Level III, hash-chained for the regulator.
                           </motion.p>
                           <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-3">
                              <Button
                                 asChild
                                 size="lg"
                                 className="bg-neutral-900 text-white hover:bg-neutral-800 font-semibold"
                              >
                                 <a href="mailto:info@atlantisndt.com?subject=Digital%20Twin%20Demo">
                                    Book a live demo <ArrowRight className="ml-2 w-4 h-4" />
                                 </a>
                              </Button>
                              <Button
                                 asChild
                                 size="lg"
                                 variant="outline"
                                 className="border-neutral-300 bg-transparent text-neutral-800 hover:bg-neutral-100"
                              >
                                 <Link to="/digital-twins">See full platform</Link>
                              </Button>
                           </motion.div>
                        </motion.div>
                     </div>

                     {/* Right — Spline 3D scene */}
                     <div className="flex-1 relative min-h-[280px]">
                        <SplineScene scene={SPLINE_SCENE} className="w-full h-full" />
                     </div>
                  </div>
               </Card>
            </section>

            {/* ─────────────── CAPABILITIES ─────────────── */}
            <section className="max-w-7xl mx-auto px-4 md:px-8 py-24">
               <motion.div
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={fadeUp}
                  className="max-w-2xl"
               >
                  <h2 className="text-3xl md:text-4xl font-bold text-neutral-900">
                     One twin. Every NDT method.
                  </h2>
                  <p className="mt-4 text-neutral-600 text-lg">
                     Eight conventional methods plus PAUT, TOFD, AUT, ILI and IoT corrosion probes —
                     all overlaid on the same 3D asset, all audit-grade.
                  </p>
               </motion.div>

               <motion.div
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.1 }}
                  variants={stagger}
                  className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
               >
                  {capabilities.map((cap) => (
                     <motion.div key={cap.title} variants={fadeUp}>
                        <Card className="group h-full p-6 bg-white border-neutral-200 shadow-sm hover:shadow-md hover:border-neutral-300 transition-all duration-300">
                           <div className="w-11 h-11 rounded-lg bg-gradient-to-br from-blue-100 to-cyan-50 border border-blue-100 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                              <cap.icon className="w-5 h-5 text-cyan-600" />
                           </div>
                           <h3 className="text-lg font-semibold text-neutral-900">{cap.title}</h3>
                           <p className="mt-2 text-sm leading-relaxed text-neutral-600">{cap.blurb}</p>
                        </Card>
                     </motion.div>
                  ))}
               </motion.div>
            </section>

            {/* ─────────────── METRICS BAND ─────────────── */}
            <section className="relative border-y border-neutral-200 bg-gradient-to-r from-blue-50 via-white to-cyan-50">
               <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 grid grid-cols-2 lg:grid-cols-4 gap-8">
                  {metrics.map((m, i) => (
                     <motion.div
                        key={m.label}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                        className="text-center"
                     >
                        <div className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-900 to-neutral-500">
                           {m.value}
                        </div>
                        <div className="mt-2 text-sm text-neutral-600">{m.label}</div>
                     </motion.div>
                  ))}
               </div>
            </section>

            {/* ─────────────── INDUSTRIES ─────────────── */}
            <section className="max-w-7xl mx-auto px-4 md:px-8 py-24">
               <motion.h2
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  className="text-3xl md:text-4xl font-bold text-neutral-900 max-w-2xl"
               >
                  Built for the assets that fail expensively.
               </motion.h2>

               <motion.div
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.1 }}
                  variants={stagger}
                  className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
               >
                  {industries.map((ind) => (
                     <motion.div key={ind.name} variants={fadeUp}>
                        <Link to={ind.href} className="block h-full">
                           <Card className="group h-full p-6 bg-white border-neutral-200 shadow-sm hover:border-cyan-400/60 hover:bg-neutral-50 hover:shadow-md transition-all duration-300">
                              <div className="flex items-center gap-3 mb-3">
                                 <ind.icon className="w-6 h-6 text-cyan-600" />
                                 <h3 className="text-lg font-semibold text-neutral-900">{ind.name}</h3>
                                 <ArrowRight className="w-4 h-4 ml-auto text-neutral-400 group-hover:text-cyan-600 group-hover:translate-x-1 transition-all" />
                              </div>
                              <p className="text-sm leading-relaxed text-neutral-600">{ind.blurb}</p>
                           </Card>
                        </Link>
                     </motion.div>
                  ))}
               </motion.div>
            </section>

            {/* ─────────────── ASSET USE-CASE PILLS ─────────────── */}
            <section className="max-w-7xl mx-auto px-4 md:px-8 pb-24">
               <motion.div
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  className="rounded-2xl border border-neutral-200 bg-neutral-50 p-8 md:p-12"
               >
                  <h2 className="text-2xl md:text-3xl font-bold text-neutral-900">
                     Twelve asset families, twelve playbooks.
                  </h2>
                  <p className="mt-3 text-neutral-600 max-w-2xl">
                     Each asset class carries its own damage mechanisms, dominant NDT methods, and code
                     stack. Jump to the deep-dive.
                  </p>
                  <div className="mt-7 flex flex-wrap gap-3">
                     {assetUseCases.map((a) => (
                        <Link
                           key={a.href}
                           to={a.href}
                           className="px-4 py-2 rounded-full text-sm border border-neutral-300 text-neutral-700 hover:border-cyan-500 hover:text-neutral-900 hover:bg-white transition-colors"
                        >
                           {a.name}
                        </Link>
                     ))}
                  </div>
               </motion.div>
            </section>

            {/* ─────────────── PRICING / CTA ─────────────── */}
            <section className="relative px-4 md:px-8 pb-28">
               <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="relative max-w-5xl mx-auto rounded-3xl overflow-hidden border border-neutral-200 bg-gradient-to-br from-blue-50 via-white to-cyan-50 p-10 md:p-16 text-center"
               >
                  <Spotlight className="-top-40 left-1/2 -translate-x-1/2" fill="#22d3ee" />
                  <div className="relative z-10">
                     <h2 className="text-3xl md:text-5xl font-bold text-neutral-900">
                        $200,000 / year. Everything included.
                     </h2>
                     <p className="mt-5 text-neutral-700 max-w-2xl mx-auto text-lg">
                        Unlimited connectors, the FFS + RBI engines, 40 hours of ASNT Level III
                        consulting, cloud / on-prem / air-gapped — one flat enterprise license.
                     </p>
                     <ul className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm text-neutral-700">
                        {["All NDT methods (UT/RT/MT/PT/ET/VT/PAUT/TOFD/AUT/ILI/IoT)", "SOC 2 Type II", "Source-code escrow", "24×7 support"].map((f) => (
                           <li key={f} className="flex items-center gap-2">
                              <CheckCircle className="w-4 h-4 text-cyan-600 shrink-0" />
                              {f}
                           </li>
                        ))}
                     </ul>
                     <div className="mt-10 flex flex-wrap justify-center gap-3">
                        <Button
                           asChild
                           size="lg"
                           className="bg-neutral-900 text-white hover:bg-neutral-800 font-semibold"
                        >
                           <a href="mailto:info@atlantisndt.com?subject=Digital%20Twin%20Demo">
                              Book a live demo <ArrowRight className="ml-2 w-4 h-4" />
                           </a>
                        </Button>
                        <Button
                           asChild
                           size="lg"
                           variant="outline"
                           className="border-neutral-300 bg-transparent text-neutral-800 hover:bg-neutral-100"
                        >
                           <Link to="/digital-twin-roi-calculator">ROI calculator</Link>
                        </Button>
                     </div>
                  </div>
               </motion.div>
            </section>

            <ContactDetails />
         </main>
      </>
   );
}
