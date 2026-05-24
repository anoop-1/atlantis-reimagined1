import React from "react";
import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";

const CANONICAL = "https://atlantisndt.com/digital-twins";

const FAQ = [
  {
    q: "What is an industrial Digital Twin in the Atlantis context?",
    a: "An industrial Digital Twin is a geometry-accurate 3D replica of a plant, vessel, platform, or asset, continuously updated by sensor data and inspection records. Atlantis builds twins from LIDAR scans, registers IoT streams (temperature, pressure, vibration, gas, radiation, NDT thickness), overlays historical and live non-destructive testing indications on the geometry, and runs AI models for remaining useful life, risk-based inspection, and anomaly detection. It is not a marketing visualization. It is an engineering system of record that inspectors, integrity engineers, and operators use to make shutdown, repair, and re-rate decisions.",
  },
  {
    q: "How is a Digital Twin different from a 3D CAD model or a point cloud?",
    a: "A CAD model is design intent. A point cloud is as-built geometry at one moment. A Digital Twin binds the as-built geometry to live operational data, inspection history, and predictive models, and keeps that binding current. Atlantis twins carry thickness grids per CML, corrosion-rate trends, RBI interval calculations, API 510/570/580 inspection plans, and anomaly flags from AI. You can click a nozzle and see the last five UT readings, the weld map, the PQR/WPS, and the projected RUL.",
  },
  {
    q: "What is the WEDGE NDT-on-Twin overlay and why does it matter?",
    a: "WEDGE is Atlantis' method for color-coding NDT data directly onto the 3D twin geometry. UT thickness, MFL pit depth, PAUT C-scans, radiography indications, and corrosion-under-insulation findings are rendered as heat maps on the exact shell plates, welds, or piping segments they were recorded on. Inspectors stop transcribing coordinates from spreadsheets. Integrity engineers see the plant the way the plant actually is. This is what separates a Digital Twin from a glorified viewer.",
  },
  {
    q: "Which regulator codes do your Digital Twins support?",
    a: "API 510 (pressure vessel inspection), API 570 (piping), API 580/581 (risk-based inspection), ASME Section V and VIII, ADNOC COP V2-01, Saudi Aramco SAES-W-010 and SAIP standards, KEPIC (Korea Electric Power Industry Code), PETRONAS PTS, KOC Standards, ABS and DNV rules for maritime assets, and MIL-STD series for defense. Inspection data schemas are built to export into the operator's integrity management system of choice.",
  },
  {
    q: "Who performs the NDT feeding into the twin? What are their credentials?",
    a: "Atlantis NDT services are supervised by ASNT Level III certified personnel across UT, PAUT, TOFD, RT, MT, PT, ET, and VT. Level II technicians execute field work under written procedures approved by a Level III. For advanced techniques we operate with PCN and CSWIP credentials in parallel where clients require them. Personnel qualification records are available per job.",
  },
  {
    q: "What IoT sensors do you integrate into a twin?",
    a: "Temperature (thermocouples, RTDs, fiber-optic DTS), pressure transmitters, vibration (accelerometers for rotating equipment), gas (H2S, methane, VOC), radiation (for nuclear and source-handling environments), permanently installed UT thickness pucks and wall-loss monitors, corrosion coupons and ER probes, acoustic emission, and strain gauges. Streams land on our time-series store and are bound to the twin node they describe.",
  },
  {
    q: "How does AI predictive analytics work on the twin?",
    a: "Three model families. First, remaining useful life (RUL) regressors trained per component class (shell, nozzle, elbow, weld) using thickness trend, operating temperature, and fluid service. Second, risk-based inspection (RBI) scoring per API 581 with AI-assisted consequence and probability refinement. Third, anomaly detection on sensor streams using isolation forests and LSTM autoencoders for rotating equipment and pressure systems. Outputs are always traceable to inputs.",
  },
  {
    q: "How long does it take to stand up a Digital Twin for an existing plant?",
    a: "A 50,000 m2 refinery unit typically takes 6 to 10 weeks from mobilization to first usable twin. Phase one is LIDAR acquisition and registration (1 to 2 weeks on site). Phase two is geometry reconstruction and CML/weld tagging (2 to 4 weeks). Phase three is historical inspection data ingestion and IoT binding (2 to 3 weeks). Phase four is AI model baseline and handover (1 week). Scope scales roughly linearly with asset count.",
  },
];

const CAPABILITIES = [
  {
    title: "LIDAR scan-to-twin",
    body: "Terrestrial and mobile LIDAR acquisition at 3 to 6 mm accuracy, registered into a single coordinate system, reconstructed into intelligent geometry with equipment, piping, structural steel, and instrumentation classified as discrete objects. Not a decorative point cloud.",
  },
  {
    title: "IoT live monitoring",
    body: "Continuous ingestion from temperature, pressure, vibration, gas, radiation, and permanent UT thickness sensors. Each stream is bound to the twin node it monitors. Alarms trigger at the geometry, not in an anonymous tag list.",
  },
  {
    title: "AI predictive analytics",
    body: "RUL regression per component class, API 581 RBI scoring with AI-assisted P-of-F and C-of-F refinement, and anomaly detection on sensor streams. Models are versioned, auditable, and retrainable per asset.",
  },
  {
    title: "NDT overlay (WEDGE)",
    body: "UT, PAUT, TOFD, RT, MT, PT, ET, and CUI inspection results color-coded directly on the 3D twin geometry. The inspector sees the plant as it is. The integrity engineer sees the plant as it is trending.",
  },
];

const VERTICALS = [
  {
    href: "/digital-twins/oil-and-gas",
    title: "Oil and Gas",
    body: "Refineries, FPSOs, LNG trains, pipelines, tank farms, petrochemical complexes. ADNOC, Saudi Aramco, KOC, PETRONAS, Petrobras, Reliance operator standards.",
  },
  {
    href: "/digital-twins/maritime",
    title: "Maritime",
    body: "Shipyards, naval assets, FPSO/FSO hulls, offshore platforms. ABS, DNV, Lloyd's Register class rules. Survey planning and thickness gauging on the twin.",
  },
  {
    href: "/digital-twins/defense",
    title: "Defense",
    body: "Depot MRO, weapons sustainment, military logistics. MIL-STD-2219, NAVSEA technical publications, AS9100 quality systems, ITAR-aware deployments.",
  },
  {
    href: "/digital-twins/aerospace",
    title: "Aerospace",
    body: "Engine overhaul, structural inspection, component MRO. FAA Part 145 repair station workflows, EASA Part-145, AS9100, Nadcap-aligned NDT.",
  },
];

const CODE_MATRIX: { region: string; codes: string[] }[] = [
  { region: "International", codes: ["API 510", "API 570", "API 580", "API 581", "ASME V", "ASME VIII Div 1/2", "ISO 9712"] },
  { region: "UAE", codes: ["ADNOC COP V2-01", "ADNOC HSE SGS&EPs", "ESMA"] },
  { region: "Saudi Arabia", codes: ["SAES-W-010", "SAES-W-011", "SAEP-1135", "SAIP-30"] },
  { region: "Malaysia", codes: ["PETRONAS PTS 70.10.90", "DOSH Malaysia"] },
  { region: "Kuwait", codes: ["KOC-MS-009", "KOC-G-007"] },
  { region: "Korea", codes: ["KEPIC MI", "KEPIC MN"] },
  { region: "Maritime", codes: ["ABS Rules Part 7", "DNV-CG-0051", "Lloyd's Register ShipRight"] },
  { region: "Defense", codes: ["MIL-STD-1530D", "MIL-STD-2219", "NAVSEA T9074"] },
];

const CLUSTER_LINKS = [
  { href: "/digital-twins/lidar-scan-to-twin", label: "LIDAR scan-to-twin methodology" },
  { href: "/digital-twins/iot-live-monitoring", label: "IoT live monitoring architecture" },
  { href: "/digital-twins/ai-predictive-analytics", label: "AI predictive analytics (RUL, RBI)" },
  { href: "/digital-twins/ndt-overlay-wedge", label: "WEDGE NDT-on-Twin overlay" },
];

export default function DigitalTwinsPillar() {
  return (
    <>
      <SEOHead
        title="Industrial Digital Twin Solutions | Atlantis NDT"
        description="Digital Twin platform with LIDAR scan-to-twin, IoT live monitoring, AI predictive analytics, and WEDGE NDT overlay. ASNT Level III. Oil and gas, maritime, defense, aerospace."
        canonical={CANONICAL}
        alternates={[
          { hreflang: "en", href: CANONICAL },
          { hreflang: "es", href: "https://atlantisndt.com/es/digital-twins" },
          { hreflang: "ar", href: "https://atlantisndt.com/ar/digital-twins" },
          { hreflang: "x-default", href: CANONICAL },
        ]}
        faq={FAQ}
        software={{
          name: "Atlantis Digital Twin Platform",
          applicationCategory: "EngineeringApplication",
          operatingSystem: "Web, Windows, Linux",
          offers: { price: "0", priceCurrency: "USD" },
        }}
        breadcrumb={[
          { name: "Home", item: "https://atlantisndt.com/" },
          { name: "Digital Twins", item: CANONICAL },
        ]}
      />

      <main className="bg-white text-slate-900">
        <section className="border-b border-slate-200 bg-gradient-to-b from-slate-50 to-white">
          <div className="mx-auto max-w-7xl px-6 py-20">
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-sky-700">
              Industrial Digital Twin Authority
            </p>
            <h1 className="text-4xl font-bold leading-tight tracking-tight text-slate-900 md:text-6xl">
              Digital Twin solutions, Non-destructive testing and software.
            </h1>
            <p className="mt-6 max-w-3xl text-lg text-slate-700 md:text-xl">
              Atlantis builds geometry-accurate Digital Twins of refineries, platforms, shipyards, and depots, binds them
              to live IoT and inspection data, and overlays NDT findings directly on the 3D model. The twin is the
              engineering system of record — not a visualization.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="rounded-md bg-sky-700 px-6 py-3 text-sm font-semibold text-white hover:bg-sky-800"
              >
                Request a twin scoping call
              </Link>
              <Link
                to="/digital-twins/ndt-overlay-wedge"
                className="rounded-md border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-800 hover:bg-slate-50"
              >
                See the WEDGE overlay
              </Link>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-16">
          <h2 className="text-3xl font-bold text-slate-900">Four capabilities, one twin</h2>
          <p className="mt-3 max-w-3xl text-slate-700">
            A Digital Twin is only useful when it fuses accurate geometry, live operational data, inspection history, and
            predictive models in one navigable model. Atlantis delivers all four.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {CAPABILITIES.map((c) => (
              <div key={c.title} className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-900">{c.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-700">{c.body}</p>
              </div>
            ))}
          </div>
          <ul className="mt-8 grid gap-2 text-sm text-sky-800 md:grid-cols-2">
            {CLUSTER_LINKS.map((l) => (
              <li key={l.href}>
                <Link to={l.href} className="underline hover:text-sky-900">
                  Deep dive: {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section className="border-y border-slate-200 bg-slate-50">
          <div className="mx-auto max-w-7xl px-6 py-20">
            <p className="text-sm font-semibold uppercase tracking-widest text-sky-700">The differentiator</p>
            <h2 className="mt-2 text-3xl font-bold text-slate-900 md:text-4xl">
              WEDGE: NDT data color-coded onto the 3D twin
            </h2>
            <p className="mt-5 max-w-4xl text-slate-700">
              Most Digital Twin platforms treat inspection data as an attachment — a PDF or a spreadsheet bound to an
              asset tag. WEDGE does something different. Every UT thickness reading, every PAUT C-scan, every TOFD
              indication, every radiographic film, every MT/PT surface finding, and every CUI inspection result is
              registered to its exact location on the 3D geometry and rendered as a color heat map on the shell plate,
              the weld seam, the pipe spool, or the nozzle it was actually recorded on.
            </p>
            <div className="mt-10 grid gap-8 lg:grid-cols-3">
              <div>
                <h3 className="text-lg font-semibold text-slate-900">For the inspector</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-700">
                  No more coordinate transcription from paper sketches. A Level II technician scans a tag, the twin
                  opens at the right component, the thickness grid is pre-populated, and historical readings render as
                  overlays. Procedural conformance to API 510 and API 570 inspection intervals is tracked automatically.
                  Out-of-tolerance readings flag in-field, not days later in the office.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900">For the integrity engineer</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-700">
                  The twin surfaces corrosion-rate gradients across an entire unit at once. Wall loss that would be
                  invisible in a tabular CML report becomes obvious as a red band across three adjacent shell courses.
                  API 581 RBI scoring updates as readings arrive. Re-rate calculations under ASME VIII Div 1 and Div 2
                  are one click away, with the thickness inputs traceable to the exact UT shot.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900">For the plant manager</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-700">
                  A single view of plant health. Turnaround scope is built on the twin, not in a spreadsheet. Repair
                  packages carry the NDT evidence that justified them. Regulator and insurer audits walk through the
                  twin. Deferred inspections and overdue CMLs are visible, not buried.
                </p>
              </div>
            </div>
            <div className="mt-10 rounded-lg border border-slate-300 bg-white p-6">
              <h3 className="text-lg font-semibold text-slate-900">Supported NDT methods in the overlay</h3>
              <p className="mt-2 text-sm text-slate-700">
                Conventional UT thickness gauging, Phased Array UT (PAUT) with C-scan and S-scan rendering, Time of
                Flight Diffraction (TOFD), computed and digital radiography (CR/DR), magnetic particle (MT) and liquid
                penetrant (PT) surface examinations, eddy current (ET) including ECA arrays, visual (VT) inspection
                records with photo binding, corrosion-under-insulation (CUI) via pulsed eddy current and real-time
                radiography, magnetic flux leakage (MFL) for tank floors per API 653, and guided wave long-range UT for
                buried or inaccessible piping. Each method carries its qualification record per ASNT SNT-TC-1A or CP-189.
              </p>
            </div>
            <p className="mt-6 text-sm text-slate-700">
              <Link to="/digital-twins/ndt-overlay-wedge" className="font-semibold text-sky-800 underline">
                Read the WEDGE methodology in full
              </Link>{" "}
              — procedure qualification, data formats, and regulator acceptance.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-16">
          <h2 className="text-3xl font-bold text-slate-900">Industry verticals</h2>
          <p className="mt-3 max-w-3xl text-slate-700">
            Atlantis deploys into four regulated heavy industries. Each vertical carries its own code framework,
            inspection cadence, and operator expectations.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {VERTICALS.map((v) => (
              <Link
                key={v.href}
                to={v.href}
                className="block rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition hover:border-sky-400 hover:shadow"
              >
                <h3 className="text-xl font-semibold text-slate-900">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-700">{v.body}</p>
                <span className="mt-3 inline-block text-sm font-semibold text-sky-700">Open vertical hub →</span>
              </Link>
            ))}
          </div>
        </section>

        <section className="border-y border-slate-200 bg-slate-50">
          <div className="mx-auto max-w-7xl px-6 py-16">
            <h2 className="text-3xl font-bold text-slate-900">Regulator code matrix</h2>
            <p className="mt-3 max-w-3xl text-slate-700">
              Twins are built to the code framework the asset is actually governed by. Below is the working matrix we
              deliver against. Additional jurisdictional codes are added per project.
            </p>
            <div className="mt-8 overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="border-b-2 border-slate-300 text-left">
                    <th className="py-3 pr-4 font-semibold text-slate-900">Jurisdiction</th>
                    <th className="py-3 font-semibold text-slate-900">Codes and standards</th>
                  </tr>
                </thead>
                <tbody>
                  {CODE_MATRIX.map((row) => (
                    <tr key={row.region} className="border-b border-slate-200">
                      <td className="py-3 pr-4 font-semibold text-slate-800">{row.region}</td>
                      <td className="py-3 text-slate-700">{row.codes.join(" · ")}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-16">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-sky-700">Authority</p>
              <h2 className="mt-2 text-3xl font-bold text-slate-900">ASNT Level III credentialing</h2>
              <p className="mt-4 text-slate-700">
                The American Society for Nondestructive Testing Level III certification is the highest competency tier
                in industrial NDT. Atlantis' technical authority on every Digital Twin project is an ASNT Level III,
                qualified per ASNT CP-189 or SNT-TC-1A, with method-specific certifications in UT, PAUT, TOFD, RT, MT,
                PT, ET, and VT as applicable.
              </p>
              <p className="mt-4 text-slate-700">
                The Level III writes and approves the written practice and inspection procedures the Level II
                technicians execute. They sign off on procedure qualification records, interpret indications at the
                limit of method capability, and carry the professional responsibility for the data that lands on the
                twin. When the twin flags an anomaly that triggers a shutdown, the chain of custody starts with a
                Level III signature.
              </p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-6">
              <h3 className="text-lg font-semibold text-slate-900">Credential stack</h3>
              <ul className="mt-4 space-y-2 text-sm text-slate-700">
                <li>- ASNT Level III (CP-189 and SNT-TC-1A compliant)</li>
                <li>- PCN Level 3 for clients requiring European recognition</li>
                <li>- CSWIP 3.1 / 3.2 welding inspection</li>
                <li>- API 510, 570, 653, 580 authorized inspectors</li>
                <li>- AWS CWI for weld inspection programs</li>
                <li>- IRATA rope access for confined and elevated work</li>
                <li>- Nadcap-aligned procedures for aerospace MRO</li>
                <li>- ISO 9712 certifications where contractually required</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="border-y border-slate-200 bg-slate-50">
          <div className="mx-auto max-w-7xl px-6 py-16">
            <h2 className="text-3xl font-bold text-slate-900">How a twin is delivered</h2>
            <p className="mt-3 max-w-3xl text-slate-700">
              Every twin follows the same four-phase delivery, adapted to asset class. Durations shown are typical for a
              50,000 m2 refinery unit or equivalent.
            </p>
            <ol className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <li className="rounded-lg border border-slate-200 bg-white p-5">
                <p className="text-xs font-semibold uppercase text-sky-700">Phase 1 · 1-2 weeks</p>
                <h3 className="mt-1 font-semibold text-slate-900">LIDAR acquisition</h3>
                <p className="mt-2 text-sm text-slate-700">
                  Terrestrial and mobile scanning at 3-6 mm accuracy. Control network surveyed. Registration to plant
                  coordinate system. HSE plan aligned to client permit-to-work.
                </p>
              </li>
              <li className="rounded-lg border border-slate-200 bg-white p-5">
                <p className="text-xs font-semibold uppercase text-sky-700">Phase 2 · 2-4 weeks</p>
                <h3 className="mt-1 font-semibold text-slate-900">Geometry reconstruction</h3>
                <p className="mt-2 text-sm text-slate-700">
                  Classification into equipment, piping, structural steel, and instrumentation. CML and weld tagging
                  against P&IDs and isometrics. QA against as-built documentation.
                </p>
              </li>
              <li className="rounded-lg border border-slate-200 bg-white p-5">
                <p className="text-xs font-semibold uppercase text-sky-700">Phase 3 · 2-3 weeks</p>
                <h3 className="mt-1 font-semibold text-slate-900">Data binding</h3>
                <p className="mt-2 text-sm text-slate-700">
                  Historical inspection records imported. IoT streams bound to twin nodes. Baseline thickness grids and
                  RBI scoring populated. WEDGE overlay rendered.
                </p>
              </li>
              <li className="rounded-lg border border-slate-200 bg-white p-5">
                <p className="text-xs font-semibold uppercase text-sky-700">Phase 4 · 1 week</p>
                <h3 className="mt-1 font-semibold text-slate-900">AI baseline and handover</h3>
                <p className="mt-2 text-sm text-slate-700">
                  RUL regressors trained. Anomaly detection armed on sensor streams. Operator training. Handover to
                  client integrity team with procedure documentation.
                </p>
              </li>
            </ol>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-16">
          <h2 className="text-3xl font-bold text-slate-900">Frequently asked questions</h2>
          <div className="mt-8 space-y-6">
            {FAQ.map((f) => (
              <div key={f.q} className="rounded-lg border border-slate-200 bg-white p-6">
                <h3 className="text-lg font-semibold text-slate-900">{f.q}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-700">{f.a}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="border-t border-slate-200 bg-slate-900">
          <div className="mx-auto max-w-7xl px-6 py-14 text-slate-100">
            <h2 className="text-2xl font-bold">Start with a scoping call</h2>
            <p className="mt-3 max-w-2xl text-slate-300">
              Bring a plot plan, a unit list, or an asset register. We will come back with a twin scope, a LIDAR plan,
              and a delivery timeline inside one week.
            </p>
            <Link
              to="/contact"
              className="mt-6 inline-block rounded-md bg-sky-500 px-6 py-3 text-sm font-semibold text-white hover:bg-sky-400"
            >
              Contact Atlantis engineering
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
