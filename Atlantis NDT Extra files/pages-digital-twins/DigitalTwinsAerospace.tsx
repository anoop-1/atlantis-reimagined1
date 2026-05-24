import React from "react";
import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";

const CANONICAL = "https://atlantisndt.com/digital-twins/aerospace";

const FAQ = [
  {
    q: "Which aerospace regulatory frameworks do your twins align to?",
    a: "FAA 14 CFR Part 145 repair station requirements, EASA Part-145 for European-certificated MRO, AS9100 Rev D aerospace quality management, AS9110 for MRO-specific quality, Nadcap-aligned NDT per AC7114 and AC7114/1 through /5, NAS 410 personnel certification, and OEM-specific technical manuals (CMMs, SRMs, EMs). Civil airworthiness directives and service bulletins are tracked per tail or per component serial on the twin.",
  },
  {
    q: "What engine overhaul scope benefits from a twin?",
    a: "CFM56, LEAP, V2500, CF6, GE90, GEnx, PW1000G, Trent series, and legacy JT8D/PW4000 overhaul shops. The twin holds the engine module breakdown, LLP (life-limited part) cycle counts, borescope findings registered to stage and blade position, FPI and MPI records on disks and shafts, and dimensional inspection at teardown and buildup. Configuration is tail-traceable.",
  },
  {
    q: "How does the twin support structural inspection on airframes?",
    a: "Airframe twins carry the structural repair manual (SRM) zones, the fatigue-critical locations, and the inspection interval from the maintenance review board report. NDT findings from HFEC, LFEC, UT, bond testing, and X-ray radiography register to the exact SRM zone. Repair installations (doublers, stringers) are added to the twin configuration. Corrosion heat maps drive composite and metallic repair planning.",
  },
  {
    q: "What about composite structures and bond inspection?",
    a: "Composite primary structure (wing skins, empennage, fuselage barrels on modern airframes) is inspected per Nadcap-aligned NDT procedures using UT pulse-echo, UT through-transmission, phased array, and bond testing. Findings render on the twin as ply-level or zone-level maps. Lightning strike damage assessment, hail damage mapping, and moisture ingress on honeycomb are treated as dedicated campaigns.",
  },
  {
    q: "How are life-limited parts tracked?",
    a: "LLPs (life-limited parts) such as engine disks and shafts carry serial-specific cycle histories mandated by the OEM and the regulator. The twin binds the LLP serial to its cycle count, remaining cycles, back-to-birth traceability records, and in-service inspection history. On-wing and shop-visit events increment the record. Transfer between aircraft is tracked on the twin, not just in the records system.",
  },
  {
    q: "Does the twin integrate with AMOS, TRAX, or other MRO systems?",
    a: "Yes. Atlantis exports to AMOS, TRAX, Ramco Aviation, IFS Cloud, and OEM portals (Boeing Toolbox, Airbus AirNav) via documented schemas. The MRO system of record stays the system of record; the twin supplies the geometry and NDT history it references. Work order, task card, and non-routine handling remains in the MRO system.",
  },
  {
    q: "How does AI predictive analytics apply to aerospace MRO?",
    a: "Remaining useful life on hot-section components using cycle count, EGT margin trend, and borescope severity scoring. Crack growth prediction on fatigue-critical structure using LEFM inputs and flight cycle data. Anomaly detection on engine performance streams (ACMS/DAR data) feeding shop-visit forecasting. Predictions feed the MRO induction planner and the LLP forecast.",
  },
  {
    q: "What qualifications sit behind NDT on an aerospace twin?",
    a: "NAS 410 Level 3 technical authority, NAS 410 Level 2 execution, ASNT Level III where program scope requires it, and Nadcap-audited procedures per AC7114 and method-specific checklists. Written practice is maintained per repair station quality manual under FAA Part 145 or EASA Part-145. Procedure qualification records are available per audit.",
  },
];

const STANDARDS = [
  { code: "FAA 14 CFR Part 145", scope: "Repair Station Certification (US)" },
  { code: "EASA Part-145", scope: "Approved Maintenance Organization (EU)" },
  { code: "AS9100 Rev D", scope: "Aerospace quality management" },
  { code: "AS9110", scope: "Quality systems for aviation MRO" },
  { code: "Nadcap AC7114", scope: "NDT accreditation baseline and method annexes" },
  { code: "NAS 410", scope: "NDT personnel qualification and certification" },
  { code: "OEM CMM/SRM/EM", scope: "Component, structural repair, engine manuals" },
];

const ASSETS = [
  {
    title: "Engine overhaul",
    body: "CFM56, LEAP, V2500, CF6, GE90, GEnx, PW1000G, Trent. Module-level twin with LLP cycle binding, borescope stage maps, FPI and MPI records on disks and shafts, and teardown/buildup dimensional inspection.",
  },
  {
    title: "Airframe structural MRO",
    body: "Heavy maintenance visits on narrowbody and widebody airframes. SRM zone tagging. Fatigue-critical location tracking. HFEC, LFEC, UT, and radiographic inspection registered to zone. Repair installations added to configuration.",
  },
  {
    title: "Component MRO",
    body: "Landing gear overhaul with magnetic particle and eddy current on forgings. APU overhaul. Flight control surface repair. Wheel and brake NDT. Composite component bond inspection. Nadcap-aligned procedures.",
  },
  {
    title: "Operator fleet integrity",
    body: "Fleet-level twin for operators managing condition across tails. AD and SB compliance tracking. CPCP (Corrosion Prevention and Control Program) mapping. Fleet-wide findings aggregation feeding AI predictive models.",
  },
];

export default function DigitalTwinsAerospace() {
  return (
    <>
      <SEOHead
        title="Digital Twins for Aerospace MRO | Atlantis NDT"
        description="Digital Twin platform for engine overhaul, airframe MRO, and component repair. FAA Part 145, EASA Part-145, AS9100, Nadcap NDT. NAS 410 Level 3."
        canonical={CANONICAL}
        alternates={[
          { hreflang: "en", href: CANONICAL },
          { hreflang: "es", href: "https://atlantisndt.com/es/digital-twins/aerospace" },
          { hreflang: "ar", href: "https://atlantisndt.com/ar/digital-twins/aerospace" },
          { hreflang: "x-default", href: CANONICAL },
        ]}
        faq={FAQ}
        breadcrumb={[
          { name: "Home", item: "https://atlantisndt.com/" },
          { name: "Digital Twins", item: "https://atlantisndt.com/digital-twins" },
          { name: "Aerospace", item: CANONICAL },
        ]}
      />

      <main className="bg-white text-slate-900">
        <section className="border-b border-slate-200 bg-gradient-to-b from-slate-50 to-white">
          <div className="mx-auto max-w-7xl px-6 py-16">
            <nav className="mb-4 text-xs text-slate-500">
              <Link to="/digital-twins" className="underline">
                Digital Twins
              </Link>{" "}
              / Aerospace
            </nav>
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-sky-700">Vertical hub</p>
            <h1 className="text-4xl font-bold leading-tight tracking-tight text-slate-900 md:text-5xl">
              Digital Twins for Aerospace MRO
            </h1>
            <p className="mt-5 max-w-3xl text-lg text-slate-700">
              Engine overhaul, airframe heavy maintenance, and component MRO — built to FAA Part 145 and EASA Part-145
              repair station requirements, AS9100 quality, Nadcap-aligned NDT procedures, and NAS 410 personnel
              certification.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-14">
          <h2 className="text-2xl font-bold text-slate-900">Regulatory and quality framework</h2>
          <p className="mt-3 max-w-3xl text-slate-700">
            An aerospace Digital Twin is only useful if it fits into the regulatory paper trail. Atlantis builds twins
            that are audit-ready under the frameworks your repair station is certificated against.
          </p>
          <div className="mt-8 overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="border-b-2 border-slate-300 text-left">
                  <th className="py-3 pr-4 font-semibold">Standard</th>
                  <th className="py-3 font-semibold">Scope</th>
                </tr>
              </thead>
              <tbody>
                {STANDARDS.map((s) => (
                  <tr key={s.code} className="border-b border-slate-200">
                    <td className="py-3 pr-4 font-semibold text-slate-800">{s.code}</td>
                    <td className="py-3 text-slate-700">{s.scope}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="border-y border-slate-200 bg-slate-50">
          <div className="mx-auto max-w-7xl px-6 py-14">
            <h2 className="text-2xl font-bold text-slate-900">Asset classes</h2>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {ASSETS.map((a) => (
                <div key={a.title} className="rounded-lg border border-slate-200 bg-white p-6">
                  <h3 className="text-lg font-semibold text-slate-900">{a.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-700">{a.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-14">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold text-slate-900">Serial-traceable configuration</h2>
              <p className="mt-4 text-slate-700">
                Aerospace assets are serial-managed to a granularity defense and industrial rarely match. The twin holds
                per-engine, per-tail, and per-component configuration with back-to-birth traceability on LLPs. Every
                shop visit, every AD compliance, every SB embodiment, and every non-routine repair registers on the
                twin against the exact serial and location it applies to.
              </p>
              <p className="mt-4 text-slate-700">
                When a fleet-wide finding emerges (a bleed duct crack, an inlet lip corrosion pattern, a hot-section
                hardware issue), the operator or the MRO can query across the twin fleet population and triage
                inductions accordingly.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-900">NDT on the aerospace twin</h2>
              <p className="mt-4 text-slate-700">
                UT pulse-echo and phased array on structural metallics and composites. High and low frequency eddy
                current on skin and fastener holes. FPI (fluorescent penetrant inspection) per Nadcap AC7114/1 on
                engine hardware. MPI per AC7114/2 on ferromagnetic forgings. Radiographic inspection per AC7114/4 where
                required. Bond testing on composite repair. Borescope inspection registered to engine stage and blade
                position.
              </p>
              <p className="mt-4 text-slate-700">
                Procedures are written under the repair station quality manual and approved by NAS 410 Level 3 technical
                authority. ASNT Level III is layered in where program scope requires it.
              </p>
            </div>
          </div>
        </section>

        <section className="border-y border-slate-200 bg-slate-50">
          <div className="mx-auto max-w-7xl px-6 py-14">
            <h2 className="text-2xl font-bold text-slate-900">ERP cross-link: NDT for Aerospace MRO</h2>
            <p className="mt-3 max-w-3xl text-slate-700">
              Digital Twins pair with MRO production control. Atlantis operates a dedicated NDT-ERP for aerospace MRO
              that sequences NDT operations, assigns qualified personnel per NAS 410, enforces Nadcap-aligned procedure
              selection, and generates the 8130-3 or EASA Form 1 release-to-service documentation trail.
            </p>
            <p className="mt-4">
              <Link to="/ndt-erp-for-aerospace-mro" className="font-semibold text-sky-800 underline">
                See the Atlantis NDT-ERP for aerospace MRO
              </Link>
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-14">
          <h2 className="text-2xl font-bold text-slate-900">Frequently asked questions</h2>
          <div className="mt-6 space-y-5">
            {FAQ.map((f) => (
              <div key={f.q} className="rounded-lg border border-slate-200 bg-white p-5">
                <h3 className="font-semibold text-slate-900">{f.q}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-700">{f.a}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-slate-900">
          <div className="mx-auto max-w-7xl px-6 py-12 text-slate-100">
            <h2 className="text-2xl font-bold">Scope an MRO twin</h2>
            <p className="mt-3 max-w-2xl text-slate-300">
              Send a fleet list, a shop capability list, or an engine program reference. We will return a twin scope, an
              NDT framework aligned to Nadcap and NAS 410, and a deployment plan that fits your repair station quality
              manual.
            </p>
            <Link
              to="/contact"
              className="mt-5 inline-block rounded-md bg-sky-500 px-6 py-3 text-sm font-semibold text-white hover:bg-sky-400"
            >
              Contact Atlantis aerospace desk
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
