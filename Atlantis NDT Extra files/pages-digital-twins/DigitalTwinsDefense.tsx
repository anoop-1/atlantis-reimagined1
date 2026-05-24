import React from "react";
import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";

const CANONICAL = "https://atlantisndt.com/digital-twins/defense";

const FAQ = [
  {
    q: "Which defense standards do your Digital Twins align to?",
    a: "MIL-STD-1530D (Aircraft Structural Integrity Program), MIL-STD-2219 (Fusion welding for aerospace applications), MIL-STD-410 (NDT personnel qualification), MIL-STD-6866 (Liquid penetrant inspection), MIL-STD-1949 (Magnetic particle inspection), NAVSEA T9074-AS-GIB-010/271 (Requirements for NDT), NAVSEA 0900-LP-001-7000, AS9100 Rev D quality systems, and applicable service-branch technical manuals. ITAR-aware deployment is standard.",
  },
  {
    q: "What depot MRO work benefits from a twin?",
    a: "Armored vehicle hulls (welded ballistic steel per MIL-DTL-12560 and MIL-DTL-46100), artillery tubes and breech assemblies, missile canisters and launcher structures, submarine pressure hull sections, aircraft structural components, and naval auxiliary machinery. The twin holds the as-maintained configuration, the NDT history of critical welds and fasteners, and the remaining fatigue life against the service damage model.",
  },
  {
    q: "How do you handle classified or controlled unclassified information on the twin?",
    a: "Atlantis operates defense engagements under customer-controlled environments. Data residency is the customer's, not ours. Deployments into SIPR-adjacent or air-gapped networks are supported. For CUI programs we operate per DFARS 252.204-7012 and NIST SP 800-171 controls. ITAR handling is standard on restricted technical data. Classification handling follows customer SCI and program SOPs.",
  },
  {
    q: "What weapons sustainment scope does the twin cover?",
    a: "Tube life tracking on artillery and tank main guns (wear, bore erosion, fatigue cycles). Missile canister structural integrity and propellant age. Launcher structural NDT. Small arms production QA is outside scope; large-caliber and crew-served sustainment is in scope. Ammunition handling and storage structure inspection per applicable service-branch safety standards.",
  },
  {
    q: "How does AI predictive analytics apply in defense sustainment?",
    a: "Remaining useful life regressors per critical component class. Fatigue crack growth prediction on airframe and hull weldments using LEFM inputs and service cycle counts. Anomaly detection on platform health streams where sensor data exists. Model outputs feed the sustainment backlog and the depot induction decision. All models are auditable, versioned, and retrainable on customer data.",
  },
  {
    q: "Can the twin support naval surface and submarine assets?",
    a: "Yes. Surface combatants under NAVSEA technical publications, submarines under the relevant SUBSAFE and controlled-work scopes. Pressure hull NDT is procedure-qualified work under ASNT Level III oversight. The twin registers every hull-boundary weld inspection, coating survey, and cathodic protection reading. Classification, compartmentalization, and ITAR handling per program SOPs.",
  },
  {
    q: "What about ground vehicles and armored platforms?",
    a: "Hull integrity on welded ballistic steel assemblies per MIL-DTL-12560 (rolled homogeneous armor) and MIL-DTL-46100 (high-hardness armor) is NDT-intensive. Weld inspection under MIL-STD-2219 with PAUT and RT coverage on critical joints. The twin binds weld qualification records, repair history, and post-repair NDT to the exact weld location on the hull geometry.",
  },
  {
    q: "How does the twin fit with existing depot systems (LMP, GCSS, DMLSS)?",
    a: "The twin is a geometry and inspection layer, not a replacement for the logistics system of record. Atlantis exports to LMP, GCSS-Army, GCSS-MC, DMLSS, and service-branch MRO platforms via documented schemas. Work order linkage, parts catalogs, and labor tracking stay in the logistics system. The twin supplies the configuration-controlled geometry and NDT history the logistics system references.",
  },
];

const STANDARDS = [
  { code: "MIL-STD-1530D", scope: "Aircraft Structural Integrity Program (ASIP)" },
  { code: "MIL-STD-2219", scope: "Fusion welding for aerospace applications" },
  { code: "MIL-STD-410", scope: "NDT personnel qualification and certification" },
  { code: "MIL-STD-6866", scope: "Liquid penetrant inspection" },
  { code: "MIL-STD-1949", scope: "Magnetic particle inspection" },
  { code: "NAVSEA T9074-AS-GIB-010/271", scope: "Requirements for NDT" },
  { code: "AS9100 Rev D", scope: "Aerospace and defense quality management" },
  { code: "DFARS 252.204-7012 / NIST SP 800-171", scope: "Controlled Unclassified Information handling" },
];

const ASSETS = [
  {
    title: "Depot MRO",
    body: "Heavy overhaul of airframes, ground combat vehicles, naval machinery, and support equipment. Configuration-controlled twin per platform serial. Induction scan, in-work NDT ingestion, redelivery as-maintained baseline.",
  },
  {
    title: "Weapons sustainment",
    body: "Artillery and tank main gun tube life. Missile canister structural integrity. Launcher NDT. Ammunition storage structure inspection. Crew-served mount integrity. Procedure-qualified under ASNT Level III.",
  },
  {
    title: "Military logistics structures",
    body: "POL tank farms on base, pressure vessels on installations, steam plant piping, fire suppression headers, and fuel distribution. API 510/570/653 overlaid with service-branch facility standards.",
  },
  {
    title: "Naval sustainment",
    body: "Surface combatant and auxiliary vessel hull NDT under NAVSEA technical publications. Submarine pressure boundary work under SUBSAFE-adjacent controls. Shipyard and tender depot integration.",
  },
];

export default function DigitalTwinsDefense() {
  return (
    <>
      <SEOHead
        title="Digital Twins for Defense | Atlantis NDT"
        description="Digital Twin platform for depot MRO, weapons sustainment, naval and ground systems. MIL-STD-1530D, NAVSEA, AS9100. ITAR-aware. ASNT Level III."
        canonical={CANONICAL}
        alternates={[
          { hreflang: "en", href: CANONICAL },
          { hreflang: "es", href: "https://atlantisndt.com/es/digital-twins/defense" },
          { hreflang: "ar", href: "https://atlantisndt.com/ar/digital-twins/defense" },
          { hreflang: "x-default", href: CANONICAL },
        ]}
        faq={FAQ}
        breadcrumb={[
          { name: "Home", item: "https://atlantisndt.com/" },
          { name: "Digital Twins", item: "https://atlantisndt.com/digital-twins" },
          { name: "Defense", item: CANONICAL },
        ]}
      />

      <main className="bg-white text-slate-900">
        <section className="border-b border-slate-200 bg-gradient-to-b from-slate-50 to-white">
          <div className="mx-auto max-w-7xl px-6 py-16">
            <nav className="mb-4 text-xs text-slate-500">
              <Link to="/digital-twins" className="underline">
                Digital Twins
              </Link>{" "}
              / Defense
            </nav>
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-sky-700">Vertical hub</p>
            <h1 className="text-4xl font-bold leading-tight tracking-tight text-slate-900 md:text-5xl">
              Digital Twins for Defense
            </h1>
            <p className="mt-5 max-w-3xl text-lg text-slate-700">
              Depot MRO, weapons sustainment, naval and ground platforms, and military logistics — built to MIL-STD,
              NAVSEA technical publications, and AS9100, with ITAR-aware deployment and ASNT Level III technical
              authority.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-14">
          <h2 className="text-2xl font-bold text-slate-900">Standards framework</h2>
          <p className="mt-3 max-w-3xl text-slate-700">
            Every defense twin is built to the program's applicable standards. The working list below is representative
            of the Atlantis reference stack.
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
              <h2 className="text-2xl font-bold text-slate-900">Configuration control</h2>
              <p className="mt-4 text-slate-700">
                Defense platforms are serial-managed. The Digital Twin carries the as-maintained configuration per
                serial, not a generic type drawing. Every induction scan establishes an observed baseline against the
                engineering drawing. Deviations are flagged. Modifications under Engineering Change Proposal are
                registered on the twin when installed. The twin is an auditable chain of custody for the platform's
                physical state.
              </p>
              <p className="mt-4 text-slate-700">
                This matters on fatigue-critical airframes and hulls where service life is computed against a service
                damage model that assumes a configuration. When the configuration drifts, the model drifts. The twin
                prevents that.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-900">Data handling and ITAR</h2>
              <p className="mt-4 text-slate-700">
                Customer-controlled data residency is standard. Atlantis deploys into SIPR-adjacent and air-gapped
                customer environments where the program requires it. CUI handling follows DFARS 252.204-7012 and NIST SP
                800-171. ITAR-governed technical data is handled per program SOP with a named empowered official on the
                customer side. No technical data leaves customer jurisdiction without a written license.
              </p>
              <p className="mt-4 text-slate-700">
                AS9100 Rev D quality management is the backbone of the delivery organization. Record retention and
                first-article inspection artifacts are built into the twin.
              </p>
            </div>
          </div>
        </section>

        <section className="border-y border-slate-200 bg-slate-50">
          <div className="mx-auto max-w-7xl px-6 py-14">
            <h2 className="text-2xl font-bold text-slate-900">ASNT Level III and NAS 410</h2>
            <p className="mt-4 max-w-4xl text-slate-700">
              Defense NDT is qualified work. Atlantis' Level III authority aligns with ASNT CP-189, SNT-TC-1A, and NAS
              410 where the program requires it. Written procedures for PAUT, TOFD, RT, MT, PT, ET, and VT are issued
              under the Level III's approval and executed by qualified Level IIs. Nadcap-aligned procedures are
              available for aerospace-adjacent defense work. See the{" "}
              <Link to="/digital-twins/aerospace" className="underline">
                aerospace hub
              </Link>{" "}
              for AS9100 and Nadcap scope.
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
            <h2 className="text-2xl font-bold">Scope a depot or platform twin</h2>
            <p className="mt-3 max-w-2xl text-slate-300">
              Send a platform list, depot layout, or program technical order reference. We will return a scan plan, an
              NDT scope, and a deployment model aligned to your data handling requirements.
            </p>
            <Link
              to="/contact"
              className="mt-5 inline-block rounded-md bg-sky-500 px-6 py-3 text-sm font-semibold text-white hover:bg-sky-400"
            >
              Contact Atlantis defense desk
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
