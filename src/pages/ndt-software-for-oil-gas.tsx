import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import ContactDetails from "@/components/ContactDetails";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  CheckCircle,
  Zap,
  Gauge,
  FileText,
  Shield,
  Flame,
  Droplets,
  AlertTriangle,
  ArrowRight,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { buildTechArticleSchema, ATLANTIS_AUTHOR_ANOOP, ATLANTIS_PUBLISHER } from "@/data/author-schema";

const URL = "https://atlantisndt.com/ndt-software-for-oil-gas";

const damageMechanisms = [
  { code: "API 571 §4.2.1", name: "General corrosion", dt: "Wall-thickness heatmap on 3D twin", erp: "Corrosion-rate trending per API 510 Annex D", reporting: "UT thickness grid auto-population" },
  { code: "API 571 §4.5.1", name: "Corrosion Under Insulation (CUI)", dt: "Insulation-zone classification overlay", erp: "CUI inspection interval management", reporting: "CUI finding templates + photo grids" },
  { code: "API 571 §4.5.3", name: "Chloride Stress Corrosion Cracking", dt: "CSCC susceptibility map by temperature band", erp: "Cl-SCC inspection recurrence per API 571", reporting: "PT / ET reporting with crack morphology tags" },
  { code: "API 571 §5.1.1.5", name: "Amine Cracking (alkaline SCC)", dt: "Process-stream metadata linked to vessel", erp: "PWHT status tracker + MTR repository", reporting: "WPS/PQR traceability on weld inspection" },
  { code: "API 571 §5.1.2.3", name: "Sulfide Stress Cracking (SSC)", dt: "H2S service tagging with NACE MR0175 band", erp: "Hardness survey interval management", reporting: "NACE MR0175/ISO 15156 compliance block" },
  { code: "API 571 §4.3.4", name: "Atmospheric corrosion", dt: "External visual inspection checklist per asset", erp: "External inspection intervals per API 570 Table 6.1", reporting: "VT reporting with rust grade per ISO 4628" },
  { code: "API 571 §5.1.3.1", name: "Caustic SCC", dt: "NaOH service temperature-concentration plot", erp: "PWHT requirement check per NACE SP0403", reporting: "Inspection record for caustic-service equipment" },
  { code: "API 571 §4.5.5", name: "Microbiologically-influenced corrosion (MIC)", dt: "Water-bottom tagging with MIC risk scoring", erp: "Biocide injection record integration", reporting: "UT pit-depth mapping + photo evidence" },
];

const codes = [
  "API 510 (Pressure Vessel In-service Inspection, 11th Ed.)",
  "API 570 (Piping Inspection, Repair, Alteration, Rerating)",
  "API 653 (Aboveground Storage Tank Inspection, Repair, Alteration, Reconstruction)",
  "API 571 (Damage Mechanisms Affecting Fixed Equipment)",
  "API 579-1 / ASME FFS-1 (Fitness-for-Service)",
  "API RP 580 / 581 (Risk-Based Inspection)",
  "ASME BPVC Section V (NDE), Section VIII (Pressure Vessels)",
  "ASME B31.3 (Process Piping), B31.4 (Liquid Pipelines), B31.8 (Gas Pipelines)",
  "API 1104 (Welding of Pipelines and Related Facilities)",
  "NACE MR0175 / ISO 15156 (H2S-containing environments)",
  "NORSOK Z-008 (Risk-based Maintenance and Consequence Classification)",
  "OSHA PSM 29 CFR 1910.119 (Process Safety Management)",
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    buildTechArticleSchema({
      url: URL,
      headline: "NDT Software for Oil & Gas 2026: Digital Twin + ERP + Reporting (API 510/570/653)",
      description: "How Atlantis NDT Digital Twin, ERP, and Reporting Software address API 510/570/653 workflows, API 571 damage mechanisms, API RP 580/581 RBI, OSHA PSM, NACE MR0175, and NORSOK Z-008 compliance for upstream, midstream, downstream operators and inspection service providers.",
      datePublished: "2026-04-18",
      dateModified: "2026-04-18",
      section: "NDT Software — Oil & Gas",
      keywords: "NDT software oil gas, API 510 software, API 570 software, API 653 software, RBI software, API 571 damage mechanisms",
      dependencies: "API 510, API 570, API 653, API 571, API 579-1, API RP 580, API RP 581, ASME BPVC Section V/VIII, ASME B31.3, NACE MR0175, NORSOK Z-008, OSHA 29 CFR 1910.119",
    }),
    {
      "@type": "Organization",
      "@id": "https://atlantisndt.com/#organization",
      ...ATLANTIS_PUBLISHER,
    },
    {
      "@type": "Person",
      "@id": "https://atlantisndt.com/#anoop-rayavarapu",
      ...ATLANTIS_AUTHOR_ANOOP,
    },
  ],
};

export default function NDTSoftwareForOilGas() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation />
      <SEOHead
        title="NDT Software for Oil & Gas 2026: Digital Twin + ERP + Reporting (API 510/570/653)"
        description="Integrated NDT software stack for oil & gas operators & contractors: Digital Twin visualisation, ERP inspection management, and reporting software aligned to API 510/570/653, API 571 damage mechanisms, API 580/581 RBI, NACE MR0175, NORSOK Z-008. By ASNT Level III Anoop Rayavarapu."
        keywords="NDT software oil gas, API 510 software, API 570 software, API 653 software, RBI software, oil gas inspection management, API 571 damage mechanisms"
        canonical={URL}
        structuredData={structuredData}
      />
      <Breadcrumbs />

      <section className="bg-gradient-to-br from-slate-900 to-blue-900 text-white pt-24 pb-16">
        <div className="container mx-auto max-w-5xl px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <div className="flex items-center gap-2 text-blue-200 mb-4">
              <Flame className="w-5 h-5" />
              <span>Oil &amp; Gas Sector Software</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              NDT Software for Oil &amp; Gas — Digital Twin, ERP &amp; Reporting
            </h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Unified software stack addressing API 510 pressure vessel, API 570 piping, and API
              653 tank inspection programs. Integrated with API 571 damage mechanism taxonomy,
              API RP 580/581 risk-based inspection, API 579-1 fitness-for-service, and the
              operator-specific documentation standards enforced across Aramco, ADNOC, KOC,
              QatarEnergy, Shell, BP, ExxonMobil, Chevron, Equinor, Petrobras, and PDO assets.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/digital-twins-oil-gas" className="inline-flex items-center gap-2 bg-white text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition">
                Digital Twin for O&amp;G <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/intelligent-reporting-software" className="inline-flex items-center gap-2 border-2 border-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition">
                Reporting Software
              </Link>
              <Link to="/ndt-erp-solution" className="inline-flex items-center gap-2 border-2 border-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition">
                NDT ERP
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <article className="py-16">
        <div className="container mx-auto max-w-5xl px-6">
          <section className="mb-14">
            <h2 className="text-3xl font-bold mb-6">Why generic software fails oil &amp; gas inspection</h2>
            <p className="text-slate-700 text-lg leading-relaxed mb-5">
              SAP Plant Maintenance, IBM Maximo, and Oracle EAM were designed for general asset
              maintenance, not for the specific workflows that API 510/570/653 inspection
              programs demand. Retrofitting these platforms for NDT inspection requires hundreds
              of hours of configuration work — and they still do not ship with API 571 damage
              mechanism taxonomy, DAC/DGS calibration management, ASNT SNT-TC-1A certification
              tracking, or API 579-1 fitness-for-service assessment logic.
            </p>
            <p className="text-slate-700 text-lg leading-relaxed mb-5">
              Atlantis NDT software is purpose-built for inspection service providers and
              operator in-house inspection teams. Each of the three core products — Digital Twin,
              ERP, and Reporting — ships with O&amp;G-specific standards references, damage
              mechanisms, and operator-documentation templates on day one.
            </p>
          </section>

          <section className="mb-14">
            <h2 className="text-3xl font-bold mb-8">API 571 damage mechanisms — mapped to Atlantis modules</h2>
            <p className="text-slate-700 text-lg leading-relaxed mb-6">
              API 571 catalogues 67 damage mechanisms affecting fixed equipment in refining and
              petrochemical service. Each mechanism has distinct susceptibility factors,
              monitoring NDT methods, and inspection intervals. Atlantis NDT software operationalises
              this taxonomy across the Digital Twin, ERP, and Reporting modules:
            </p>
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-lg shadow-sm text-sm">
                <thead className="bg-blue-100">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold">API 571 Ref</th>
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
            <h2 className="text-3xl font-bold mb-6">Risk-based inspection (RBI) — API 580/581 integration</h2>
            <p className="text-slate-700 text-lg leading-relaxed mb-4">
              Atlantis NDT ERP exports inspection history, corrosion rate distributions, and
              damage-mechanism susceptibility into API 580/581 Level II quantitative RBI
              analysis. Atlantis Digital Twin visualises each asset's probability of failure
              (PoF) and consequence of failure (CoF) as colour-coded criticality bands, allowing
              turnaround planners to prioritise high-risk assets within a fixed inspection
              budget. Atlantis Reporting Software auto-schedules inspection work orders based on
              the RBI-recommended interval, not calendar intervals — typically reducing total
              inspection hours 20-40% while improving coverage on genuinely high-risk assets.
            </p>
            <ul className="space-y-2 text-slate-700">
              <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" /><span><strong>POF calculation:</strong> uses thinning, SCC, mechanical fatigue, and brittle-fracture susceptibility tables per API 581 Annex 2.B through 2.H</span></li>
              <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" /><span><strong>COF calculation:</strong> flammable + toxic consequence areas per API 581 Annex 3.A/3.B with fluid inventory data pulled from process flow diagrams</span></li>
              <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" /><span><strong>Export formats:</strong> AspenTech RBI, GE Meridium APM RBI, DNV Synergi Plant, Bentley AssetWise APM</span></li>
              <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" /><span><strong>Visual overlay:</strong> 5×5 PoF × CoF risk matrix painted directly on Digital Twin 3D model</span></li>
            </ul>
          </section>

          <section className="mb-14">
            <h2 className="text-3xl font-bold mb-6">OSHA PSM + operator documentation compliance</h2>
            <p className="text-slate-700 text-lg leading-relaxed mb-4">
              OSHA Process Safety Management (29 CFR 1910.119) requires that Mechanical Integrity
              records — including every inspection report — remain auditable for the life of the
              PSM-covered asset. Operator-specific documentation standards add further
              constraints:
            </p>
            <div className="grid md:grid-cols-2 gap-5 mb-5">
              {[
                { op: "Saudi Aramco", std: "SAEP-1112 (qualification), SAEP-324 (documentation), SIS integration" },
                { op: "ADNOC Group", std: "ACS-01 (documentation retention), ACS-08 (integrity management)" },
                { op: "QatarEnergy", std: "NFPS (North Field Production Standard) inspection packages" },
                { op: "KOC / KNPC", std: "GMR (Ground Mobilisation Report), SPS-H-016 inspection standard" },
                { op: "Shell / SPDC", std: "MESC SP 77 NDT requirements, SmartPlant SPIM integration" },
                { op: "ExxonMobil", std: "GP 19-01 piping inspection, EMIR documentation format" },
                { op: "BP", std: "ETP GP 62-01 NDT, BP MESC-compatible report formats" },
                { op: "TotalEnergies", std: "GS EP INS 103 NDT general requirements" },
                { op: "Equinor", std: "NORSOK Z-008 RBI + STID database integration" },
                { op: "Petrobras", std: "N-2318 (visual inspection), N-2631 (inspection management)" },
                { op: "PDO Oman", std: "CIMS (Corrosion Integrity Management System)" },
                { op: "Sinopec / CNPC", std: "SY/T 4103, SY/T 6597 NDT requirements" },
              ].map((x) => (
                <div key={x.op} className="bg-white border border-slate-200 rounded-lg p-4">
                  <div className="font-semibold text-slate-900">{x.op}</div>
                  <div className="text-sm text-slate-600 mt-1">{x.std}</div>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-14">
            <h2 className="text-3xl font-bold mb-6">Codes and standards referenced</h2>
            <ul className="grid sm:grid-cols-2 gap-2 text-slate-700">
              {codes.map((c) => (
                <li key={c} className="flex items-start gap-2">
                  <FileText className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
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
                  Sour service &amp; H<sub>2</sub>S environments — NACE MR0175 / ISO 15156
                </h3>
                <p className="text-slate-700 leading-relaxed mb-3">
                  For sour service equipment, material selection and hardness limits follow NACE
                  MR0175 / ISO 15156. Atlantis NDT Reporting Software enforces NACE-compliant
                  hardness survey templates (≤ 22 HRC for carbon steel per MR0175 Part 2), and
                  Digital Twin tags every sour-service asset with its NACE SSC region (Region 0,
                  1, 2, or 3) so that inspection plans align with the elevated SSC susceptibility
                  of higher partial-pressure H<sub>2</sub>S service.
                </p>
                <p className="text-slate-700 leading-relaxed">
                  ERP tracks hardness retest intervals, post-weld heat treatment (PWHT) records,
                  and material traceability per MR0175 §6 &amp; §7. Report signing embeds the
                  NACE MR0175 compliance statement required by many operator QA programs.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-14">
            <h2 className="text-3xl font-bold mb-6">Ready-to-deploy across upstream / midstream / downstream</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: Droplets, title: "Upstream", desc: "Offshore platforms, FPSOs, subsea infrastructure, wellhead and manifold inspection. NORSOK Z-008, PSSR 2000 WSE, DNV-OS-C101 offshore structures." },
                { icon: Zap, title: "Midstream", desc: "Pipelines, storage terminals, compressor stations, LNG trains. ASME B31.4/B31.8, DOT PHMSA 49 CFR 192/195, ILI run correlation with ROSEN/TDW/Baker Hughes." },
                { icon: Gauge, title: "Downstream", desc: "Refineries, petrochemical plants, gas processing. API 510 pressure vessels, API 570 piping, API 653 tanks, API 571 damage mechanisms, OSHA PSM." },
              ].map((s) => (
                <Card key={s.title} className="border-0 shadow-md">
                  <CardHeader>
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-2">
                      <s.icon className="w-6 h-6 text-blue-700" />
                    </div>
                    <CardTitle className="text-lg">{s.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-slate-600 leading-relaxed">{s.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section className="mb-14 text-center bg-gradient-to-br from-blue-50 to-slate-100 rounded-2xl p-10 border border-blue-100">
            <Shield className="w-12 h-12 text-blue-700 mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-4">Deploy across your O&amp;G inspection program</h2>
            <p className="text-slate-700 text-lg mb-6 max-w-2xl mx-auto">
              4-6 week implementation with ASNT Level III technical advisor. Legacy data migration,
              pilot parallel run, and full production cutover — with zero inspection-continuity gap.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="inline-flex items-center justify-center gap-2 bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 transition">
                Request demo <ArrowRight className="w-5 h-5" />
              </Link>
              <Link to="/ndt-software-for-aerospace" className="inline-flex items-center justify-center gap-2 border-2 border-blue-700 text-blue-700 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition">
                Aerospace version
              </Link>
              <Link to="/ndt-software-for-power-generation" className="inline-flex items-center justify-center gap-2 border-2 border-blue-700 text-blue-700 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition">
                Power generation version
              </Link>
            </div>
          </section>
        </div>
      </article>

      <ContactDetails />
    </div>
  );
}
