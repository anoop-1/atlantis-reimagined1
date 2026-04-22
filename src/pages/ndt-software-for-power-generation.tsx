import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import ContactDetails from "@/components/ContactDetails";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { CheckCircle, Zap, FileText, Shield, AlertTriangle, ArrowRight, Atom } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { buildTechArticleSchema, ATLANTIS_AUTHOR_ANOOP, ATLANTIS_PUBLISHER } from "@/data/author-schema";

const URL = "https://atlantisndt.com/ndt-software-for-power-generation";

const damageMechanisms = [
  { code: "ASME B&PV XI IWB", name: "Stress corrosion cracking in Class 1 welds", dt: "RPV weld map with ISI interval bands", erp: "In-service inspection (ISI) interval tracker per Section XI", reporting: "UT + RT weld inspection reports with code compliance block" },
  { code: "EPRI TR-106971", name: "Flow-accelerated corrosion (FAC)", dt: "FAC hotspot heatmap on feedwater piping", erp: "UT thickness circuit management with Keller-model rate", reporting: "UT thickness grid with wall-loss trend" },
  { code: "ASME B31.1 §136", name: "Creep fatigue (high-temperature piping)", dt: "Creep-life expenditure visualisation on main steam lines", erp: "Operating hours + temperature cycle tracker", reporting: "RT + UT inspection with remaining-creep-life calculation" },
  { code: "NEI 03-08", name: "Tube rupture risk (nuclear steam gen)", dt: "Tube bundle health map with ECT signals", erp: "ECT bobbin/array inspection interval per EPRI SGMP-2008", reporting: "ECT signal analysis report per EPRI PWSCC protocol" },
  { code: "ASME B&PV XI IWA", name: "Flaw evaluation (Class 1/2 components)", dt: "Indication-flaw map with API 579-style evaluation", erp: "Flaw history tracker with disposition records", reporting: "Section XI IWB-3500 acceptance criteria reports" },
  { code: "NACE SP0472", name: "Caustic cracking in boiler water systems", dt: "Caustic attack risk zones on tubing", erp: "Water chemistry log integration", reporting: "MT / PT / VT caustic attack inspection reports" },
];

const codes = [
  "ASME BPVC Section III (Nuclear components)",
  "ASME BPVC Section V (NDE)",
  "ASME BPVC Section XI (In-service inspection of nuclear power plant components)",
  "ASME B31.1 (Power Piping)",
  "ASNT CP-189 (NDT personnel qualification — for non-nuclear)",
  "ASNT CP-105 (Topical outlines for Level III)",
  "NRC 10 CFR Part 50 Appendix B (Quality assurance criteria)",
  "NRC RG 1.147 (Inservice inspection code case acceptability)",
  "NEI 03-08 (Steam generator integrity management program)",
  "EPRI TR-106971 (FAC monitoring and evaluation)",
  "EPRI NDE Topical Report (EPRI NDE Center — various)",
  "IAEA Safety Standards Series (nuclear NDT)",
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    buildTechArticleSchema({
      url: URL,
      headline: "NDT Software for Power Generation 2026: Digital Twin + ERP + Reporting (ASME XI / NEI 03-08)",
      description: "Atlantis NDT software for power generation — nuclear, combined-cycle, coal, hydro: ASME Section XI in-service inspection tracking, ECT steam generator bobbin/array per EPRI, FAC per TR-106971, creep fatigue per ASME B31.1, NRC-grade QA records. By ASNT Level III Anoop Rayavarapu.",
      datePublished: "2026-04-18",
      dateModified: "2026-04-18",
      section: "NDT Software — Power Generation",
      keywords: "nuclear NDT software, ASME Section XI, ECT steam generator, FAC monitoring, power plant inspection, NEI 03-08",
      dependencies: "ASME BPVC Section III, Section V, Section XI, ASME B31.1, ASNT CP-189, ASNT CP-105, NRC 10 CFR Part 50 App B, NRC RG 1.147, NEI 03-08, EPRI TR-106971",
    }),
    { "@type": "Organization", "@id": "https://atlantisndt.com/#organization", ...ATLANTIS_PUBLISHER },
    { "@type": "Person", "@id": "https://atlantisndt.com/#anoop-rayavarapu", ...ATLANTIS_AUTHOR_ANOOP },
  ],
};

export default function NDTSoftwareForPowerGeneration() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation />
      <SEOHead
        title="NDT Software for Power Generation 2026: Nuclear ISI, ECT, FAC — ASME XI, NEI 03-08"
        description="NDT software for power generation — nuclear, combined-cycle, coal: ASME Section XI in-service inspection, ECT steam generator bobbin/array per NEI 03-08, FAC."
        keywords="nuclear NDT software, ASME Section XI software, ECT steam generator, FAC monitoring, power plant inspection software, EPRI NDE, NEI 03-08"
        canonical={URL}
        structuredData={structuredData}
      />
      <Breadcrumbs />

      <section className="bg-gradient-to-br from-slate-900 to-green-900 text-white pt-24 pb-16">
        <div className="container mx-auto max-w-5xl px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <div className="flex items-center gap-2 text-green-200 mb-4">
              <Atom className="w-5 h-5" />
              <span>Power Generation Sector</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              NDT Software for Power Generation — Digital Twin, ERP &amp; Reporting
            </h1>
            <p className="text-xl text-green-100 mb-8 leading-relaxed">
              Built for nuclear, combined-cycle, coal-fired, and hydroelectric generating stations
              where ASME Section XI in-service inspection intervals, NEI 03-08 steam generator
              integrity, EPRI-grade ECT signal analysis, and NRC 10 CFR Part 50 Appendix B
              quality assurance determine operating licence continuity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="inline-flex items-center gap-2 bg-white text-green-900 px-6 py-3 rounded-lg font-semibold hover:bg-green-50 transition">
                Request power-gen demo <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/ndt-software-for-oil-gas" className="inline-flex items-center gap-2 border-2 border-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition">
                Oil &amp; Gas version
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <article className="py-16">
        <div className="container mx-auto max-w-5xl px-6">
          <section className="mb-14">
            <h2 className="text-3xl font-bold mb-6">Why power-gen inspection programs need dedicated NDT software</h2>
            <p className="text-slate-700 text-lg leading-relaxed mb-5">
              Nuclear power plant inspection operates under the most rigorous documentation
              controls of any industrial inspection domain. ASME Section XI specifies inspection
              intervals, examination categories (Class 1, 2, 3), and acceptance criteria for
              every Class 1 pressure-retaining weld. NRC 10 CFR Part 50 Appendix B imposes 18
              quality assurance criteria spanning design, procurement, manufacturing, inspection,
              testing, and records — with full traceability required across a 40-80 year plant
              operating licence period.
            </p>
            <p className="text-slate-700 text-lg leading-relaxed">
              Combined-cycle and coal generating stations face their own constraints — ASME B31.1
              power piping creep fatigue, feedwater flow-accelerated corrosion per EPRI TR-106971,
              and reheater/superheater tube erosion — that generic CMMS platforms cannot
              operationalise without extensive customisation.
            </p>
          </section>

          <section className="mb-14">
            <h2 className="text-3xl font-bold mb-8">Power-gen damage mechanisms across the Atlantis stack</h2>
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-lg shadow-sm text-sm">
                <thead className="bg-green-100">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold">Code Ref</th>
                    <th className="px-4 py-3 text-left font-semibold">Damage Mechanism</th>
                    <th className="px-4 py-3 text-left font-semibold">Digital Twin</th>
                    <th className="px-4 py-3 text-left font-semibold">ERP</th>
                    <th className="px-4 py-3 text-left font-semibold">Reporting</th>
                  </tr>
                </thead>
                <tbody>
                  {damageMechanisms.map((d) => (
                    <tr key={d.code} className="border-t">
                      <td className="px-4 py-3 font-mono text-xs text-slate-600 whitespace-nowrap">{d.code}</td>
                      <td className="px-4 py-3 font-semibold text-slate-900">{d.name}</td>
                      <td className="px-4 py-3 text-slate-700">{d.dt}</td>
                      <td className="px-4 py-3 text-slate-700">{d.erp}</td>
                      <td className="px-4 py-3 text-slate-700">{d.reporting}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-14">
            <h2 className="text-3xl font-bold mb-6">ASME Section XI in-service inspection — operationalised</h2>
            <p className="text-slate-700 text-lg leading-relaxed mb-4">
              Atlantis NDT ERP implements ASME Section XI IWA/IWB/IWC/IWD examination categories
              as a first-class data model. Each Class 1 pressure-retaining weld in the Reactor
              Coolant System is recorded with its Section XI examination category (B-A through
              B-O), examination method (UT, RT, PT, MT, VT), and 10-year inspection interval
              counting (inspection cycles 1-4). Ten-year deferrals and relief requests are tracked
              with NRC-submission documentation linked to the affected weld ID.
            </p>
            <ul className="space-y-2 text-slate-700 mb-5">
              <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" /><span><strong>Flaw evaluation per IWB-3500:</strong> detected indications auto-evaluated against acceptance standards with KI calculations per Appendix A</span></li>
              <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" /><span><strong>PDI / ASME SII qualification:</strong> procedure qualification records linked to every UT/RT procedure used on Class 1 components</span></li>
              <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" /><span><strong>Augmented exams:</strong> tracked separately from Code-required exams, with justification and NRC code-case reference</span></li>
              <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" /><span><strong>Owner's inspection report:</strong> auto-generated per NB-23 and ANSI N626 with Authorized Nuclear Inspector (ANI) review workflow</span></li>
            </ul>
          </section>

          <section className="mb-14">
            <h2 className="text-3xl font-bold mb-6">Steam generator integrity — NEI 03-08 &amp; EPRI ECT</h2>
            <p className="text-slate-700 text-lg leading-relaxed mb-4">
              PWR steam generator tubing inspection is the single most significant ECT workload
              in the nuclear industry. NEI 03-08 mandates the steam generator integrity program
              (SGIP) framework, with EPRI SGMP-2008 defining the technical basis. Atlantis NDT
              Reporting Software implements:
            </p>
            <div className="grid md:grid-cols-2 gap-5 mb-5">
              <Card className="border-slate-200">
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-slate-900 mb-2">Bobbin + array ECT signal management</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Bobbin coil ECT data for all tubes + array probe (X-Probe, Plus-Point)
                    supplementary exam of indications per EPRI PWSCC protocols. Atlantis stores
                    C-scan images, phase plots, and voltage amplitude trends per tube S/N across
                    successive outages — enabling trend analysis beyond single-outage comparison.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-slate-200">
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-slate-900 mb-2">Plugging &amp; sleeving traceability</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Plugged tubes (explosive, mechanical) and sleeved tubes (Westinghouse TIG,
                    Combustion Engineering laser-welded) are tracked per Technical Specifications
                    operability limits. Atlantis Digital Twin visualises the tube bundle with
                    real-time plug/sleeve overlay for operator engineering review.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          <section className="mb-14">
            <h2 className="text-3xl font-bold mb-6">Codes and standards referenced</h2>
            <ul className="grid sm:grid-cols-2 gap-2 text-slate-700">
              {codes.map((c) => (
                <li key={c} className="flex items-start gap-2">
                  <FileText className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="mb-14 bg-amber-50 border border-amber-200 rounded-xl p-8">
            <div className="flex items-start gap-4">
              <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  10 CFR Part 50 Appendix B QA records retention
                </h3>
                <p className="text-slate-700 leading-relaxed">
                  NRC 10 CFR Part 50 Appendix B Criterion XVII (Quality Assurance Records) requires
                  records furnishing evidence of activities affecting quality be maintained for
                  the life of the facility. Atlantis NDT Reporting Software stores every
                  inspection record in PDF/A-3 long-term archival format with SHA-256 hash
                  chaining, eIDAS/Adobe CDS qualified signatures, and WORM-compatible storage
                  export (suitable for tape or object-lock archives). The cryptographic chain
                  survives any vendor failure — independent auditors can verify record integrity
                  decades later without Atlantis infrastructure.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-14 text-center bg-gradient-to-br from-green-50 to-slate-100 rounded-2xl p-10 border border-green-100">
            <Shield className="w-12 h-12 text-green-700 mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-4">Deploy across your power-gen inspection program</h2>
            <p className="text-slate-700 text-lg mb-6 max-w-2xl mx-auto">
              4-8 week implementation for non-nuclear. Nuclear deployments include 10 CFR 50
              Appendix B QA program alignment and ANI coordination — typical cutover 12-16 weeks.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="inline-flex items-center justify-center gap-2 bg-green-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-800 transition">
                Request power-gen demo <ArrowRight className="w-5 h-5" />
              </Link>
              <Link to="/ndt-for-power-generation" className="inline-flex items-center justify-center gap-2 border-2 border-green-700 text-green-700 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition">
                Power Generation NDT Services
              </Link>
            </div>
          </section>
        </div>
      </article>

      <ContactDetails />
    </div>
  );
}
