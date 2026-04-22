import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import ContactDetails from "@/components/ContactDetails";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { CheckCircle, Plane, FileText, Shield, AlertTriangle, ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { buildTechArticleSchema, ATLANTIS_AUTHOR_ANOOP, ATLANTIS_PUBLISHER } from "@/data/author-schema";

const URL = "https://atlantisndt.com/ndt-software-for-aerospace";

const damageMechanisms = [
  { code: "FAA AC 43-3B", name: "Low-cycle fatigue (LCF) cracks", dt: "Fatigue hotspot overlay on 3D twin", erp: "Cycle-count tracking per S/N", reporting: "ECT fatigue-crack reports with probe trace" },
  { code: "NAS 410 §3", name: "Impact damage on composites", dt: "Impact-event registry per airframe zone", erp: "CMM record link per repair", reporting: "UT C-scan attenuation maps" },
  { code: "NAS 410 §4", name: "Disbond / delamination (composites)", dt: "Bondline integrity layer", erp: "Inspection interval per EASA Part 145", reporting: "UT + IRT thermography fusion view" },
  { code: "AS 5553", name: "Counterfeit-susceptible parts", dt: "Supply-chain provenance chain on twin", erp: "DPAS / traceability docs per lot", reporting: "Material verification report templates" },
  { code: "FAA AC 43.13-1B", name: "Stress-corrosion cracking (SCC)", dt: "Corrosion-susceptibility zones on airframe", erp: "Corrosion prevention program (CPCP) tracker", reporting: "PT / ECT crack-morphology reports" },
  { code: "SAE ARP 4754A", name: "Hidden corrosion (lap joints)", dt: "Hidden-corrosion risk map", erp: "Boroscope inspection intervals", reporting: "RT + UT lap-joint thickness mapping" },
];

const codes = [
  "NAS 410 Rev 5 (NDT personnel certification)",
  "EN 4179 (European NDT personnel qualification, SAE equivalent)",
  "ASTM E1417 (Penetrant testing — aerospace)",
  "ASTM E1444 (Magnetic particle — aerospace)",
  "ASTM E2862 (Computed tomography inspection)",
  "AS 5553 (Counterfeit parts avoidance)",
  "SAE AMS 2644 (Penetrant inspection materials)",
  "MIL-HDBK-6870B (NDT for aerospace systems)",
  "FAA AC 43.13-1B (Aircraft maintenance inspection)",
  "EASA Part 145 (Maintenance organisation approvals)",
  "DGCA CAR Section 2 Part VI (India — aerospace NDT)",
  "Boeing / Airbus SRM (Structural Repair Manuals, per-OEM)",
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    buildTechArticleSchema({
      url: URL,
      headline: "NDT Software for Aerospace 2026: Digital Twin + ERP + Reporting (NAS 410 / EN 4179)",
      description: "Atlantis NDT software for aerospace MRO, OEM, and defense inspection: NAS 410 / EN 4179 personnel tracking, ECT fatigue-crack inspection, composite UT C-scan, PT per ASTM E1417, EASA Part 145 documentation, FAA AC 43.13 compliance. By ASNT Level III Anoop Rayavarapu.",
      datePublished: "2026-04-18",
      dateModified: "2026-04-18",
      section: "NDT Software — Aerospace",
      keywords: "aerospace NDT software, NAS 410 software, EN 4179, ECT fatigue crack, composite UT, EASA Part 145",
      dependencies: "NAS 410, EN 4179, ASTM E1417, ASTM E1444, ASTM E2862, AS 5553, SAE AMS 2644, MIL-HDBK-6870B, FAA AC 43.13-1B, EASA Part 145",
    }),
    { "@type": "Organization", "@id": "https://atlantisndt.com/#organization", ...ATLANTIS_PUBLISHER },
    { "@type": "Person", "@id": "https://atlantisndt.com/#anoop-rayavarapu", ...ATLANTIS_AUTHOR_ANOOP },
  ],
};

export default function NDTSoftwareForAerospace() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation />
      <SEOHead
        title="NDT Software for Aerospace 2026: Digital Twin + ERP + Reporting (NAS 410)"
        description="Integrated NDT software for aerospace MRO, OEM, defense: NAS 410 / EN 4179 personnel tracking, ECT fatigue crack inspection, composite UT C-scan, PT per ASTM."
        keywords="aerospace NDT software, NAS 410 software, EN 4179 tracking, composite NDT, fatigue crack ECT, EASA Part 145, MRO software"
        canonical={URL}
        structuredData={structuredData}
      />
      <Breadcrumbs />

      <section className="bg-gradient-to-br from-slate-900 to-indigo-900 text-white pt-24 pb-16">
        <div className="container mx-auto max-w-5xl px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <div className="flex items-center gap-2 text-indigo-200 mb-4">
              <Plane className="w-5 h-5" />
              <span>Aerospace &amp; Defense Sector</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              NDT Software for Aerospace — Digital Twin, ERP &amp; Reporting
            </h1>
            <p className="text-xl text-indigo-100 mb-8 leading-relaxed">
              Built for aerospace MRO, OEM, and defense inspection programs where NAS 410 / EN
              4179 personnel traceability, ECT fatigue-crack detection, composite UT C-scan
              imaging, and EASA Part 145 / FAA AC 43.13 documentation compliance are non-negotiable.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="inline-flex items-center gap-2 bg-white text-indigo-900 px-6 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition">
                Request aerospace demo <ArrowRight className="w-4 h-4" />
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
            <h2 className="text-3xl font-bold mb-6">Why aerospace NDT demands purpose-built software</h2>
            <p className="text-slate-700 text-lg leading-relaxed mb-5">
              Aerospace inspection operates under safety-critical tolerances invisible to oil &amp; gas
              or manufacturing inspection programs. A 0.5mm fatigue crack in a turbine disk, an
              undetected 3mm disbond in a composite leading edge, or a loose-production counterfeit
              fastener can terminate a flight with loss of life. NAS 410 and EN 4179 enforce
              stricter personnel qualification than general ASNT SNT-TC-1A, including longer
              initial training hours, documented vision acuity (including colour perception for
              PT/MT), and annual recertification cycles.
            </p>
            <p className="text-slate-700 text-lg leading-relaxed">
              Atlantis NDT software addresses these constraints in the core data model — not as
              an afterthought — so EASA Part 145 audits, FAA airworthiness reviews, and DGCA
              surveillance visits clear without documentation gaps.
            </p>
          </section>

          <section className="mb-14">
            <h2 className="text-3xl font-bold mb-8">Aerospace damage mechanisms across the Atlantis stack</h2>
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-lg shadow-sm text-sm">
                <thead className="bg-indigo-100">
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
            <h2 className="text-3xl font-bold mb-6">Composite inspection workflows (UT, IRT, CT)</h2>
            <p className="text-slate-700 text-lg leading-relaxed mb-4">
              Modern aircraft use carbon-fibre reinforced polymer (CFRP) and glass-fibre composites
              extensively in primary structure (Boeing 787 ~50% by weight, Airbus A350 ~52%).
              Composite damage mechanisms differ fundamentally from metallic damage:
            </p>
            <div className="grid md:grid-cols-2 gap-5 mb-5">
              <Card className="border-slate-200">
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-slate-900 mb-2">Ultrasonic C-scan imaging</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Phased-array UT or conventional pulse-echo at 2-5 MHz maps back-wall
                    attenuation across the part surface. Disbonds, delaminations, and porosity
                    create attenuation signatures that render as colour-coded heatmaps. Atlantis
                    Reporting Software auto-generates ASTM E2580-format C-scan reports.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-slate-200">
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-slate-900 mb-2">Infrared thermography (IRT)</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Flash thermography per ASTM E2582 heats the composite surface momentarily;
                    sub-surface defects create cooling anomalies detected by IR camera. Atlantis
                    Digital Twin overlays IRT data onto the 3D airframe model, preserving the
                    spatial context required for repair scheme development.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          <section className="mb-14">
            <h2 className="text-3xl font-bold mb-6">NAS 410 / EN 4179 personnel tracking</h2>
            <p className="text-slate-700 text-lg leading-relaxed mb-4">
              Atlantis NDT ERP enforces NAS 410 / EN 4179 qualification rules automatically — no
              manual spreadsheet cross-check. Each NDT technician profile tracks:
            </p>
            <ul className="space-y-2 text-slate-700 mb-5">
              <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-indigo-600 mt-1 flex-shrink-0" /><span>Initial training hours per method/level per NAS 410 Table 1 (stricter than ASNT SNT-TC-1A)</span></li>
              <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-indigo-600 mt-1 flex-shrink-0" /><span>Annual vision acuity testing with near-vision and colour perception results</span></li>
              <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-indigo-600 mt-1 flex-shrink-0" /><span>Employer written practice compliance (per NAS 410 §4.2) with practice revision links</span></li>
              <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-indigo-600 mt-1 flex-shrink-0" /><span>Annual recertification examinations with automated renewal reminders</span></li>
              <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-indigo-600 mt-1 flex-shrink-0" /><span>EASA Part 66 category B1/B2 licence linkage where applicable</span></li>
              <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-indigo-600 mt-1 flex-shrink-0" /><span>Boeing, Airbus, Embraer, Bombardier OEM-specific endorsements</span></li>
            </ul>
          </section>

          <section className="mb-14">
            <h2 className="text-3xl font-bold mb-6">Codes and standards referenced</h2>
            <ul className="grid sm:grid-cols-2 gap-2 text-slate-700">
              {codes.map((c) => (
                <li key={c} className="flex items-start gap-2">
                  <FileText className="w-4 h-4 text-indigo-600 mt-1 flex-shrink-0" />
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
                  Counterfeit parts (AS 5553) &amp; DPAS traceability
                </h3>
                <p className="text-slate-700 leading-relaxed">
                  Atlantis NDT Reporting Software embeds AS 5553 counterfeit-parts-avoidance
                  documentation in every inspection report for parts under Defense Priorities and
                  Allocations System (DPAS) rating. Material Test Reports (MTR), heat-lot
                  traceability, and supplier accreditation status (per AS6174A for standard
                  electronic parts) attach directly to the part S/N record on the Digital Twin
                  airframe view — providing end-to-end provenance across manufacture, inspection,
                  service life, and disposal.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-14 text-center bg-gradient-to-br from-indigo-50 to-slate-100 rounded-2xl p-10 border border-indigo-100">
            <Shield className="w-12 h-12 text-indigo-700 mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-4">Deploy across your aerospace inspection program</h2>
            <p className="text-slate-700 text-lg mb-6 max-w-2xl mx-auto">
              4-6 week implementation with ASNT Level III + Level III (NAS 410) technical
              advisor. Boeing/Airbus SRM template library. EASA Part 145 audit-ready documentation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="inline-flex items-center justify-center gap-2 bg-indigo-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-800 transition">
                Request aerospace demo <ArrowRight className="w-5 h-5" />
              </Link>
              <Link to="/aerospace-ndt-services" className="inline-flex items-center justify-center gap-2 border-2 border-indigo-700 text-indigo-700 px-8 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition">
                Aerospace NDT Services
              </Link>
            </div>
          </section>
        </div>
      </article>

      <ContactDetails />
    </div>
  );
}
