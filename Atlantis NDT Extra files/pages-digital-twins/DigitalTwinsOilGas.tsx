import React from "react";
import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";

const CANONICAL = "https://atlantisndt.com/digital-twins/oil-and-gas";

const FAQ = [
  {
    q: "Which oil and gas operator standards do your Digital Twins align to?",
    a: "ADNOC COP V2-01 for upstream and downstream UAE assets; Saudi Aramco SAES-W-010, SAES-W-011, SAEP-1135, and SAIP-30 for kingdom operations; KOC-MS-009 and KOC-G-007 for Kuwait; PETRONAS PTS 70.10.90 for Malaysian assets; Petrobras N-2318 and N-1738 for Brazilian operations; Reliance Jamnagar site standards; Pertamina TKO for Indonesian refineries. International backbone is always API 510/570/580/581, API 653 for tanks, and ASME Section V and VIII.",
  },
  {
    q: "Can a Digital Twin be built on an operating refinery without a turnaround?",
    a: "Yes. Atlantis runs LIDAR acquisition under live plant conditions with permit-to-work compliance, hot work avoidance, and H2S monitoring. Scanner placement is planned around live process hazards. Geometry at 3-6 mm accuracy is achievable on an operating unit. NDT data that requires confined space or scaffolding access is captured during the next scheduled turnaround and registered to the existing twin geometry.",
  },
  {
    q: "How does the twin handle FPSO and floating production assets?",
    a: "FPSO twins combine the hull (typically classed by ABS or DNV) with the topsides process plant. LIDAR is captured in dry dock where possible, supplemented by in-service scans. Hull thickness grids follow class society survey schedules. Topsides CMLs follow API 510/570. Mooring, swivel, and turret inspection records are bound to twin nodes. See our maritime hub for hull-specific treatment.",
  },
  {
    q: "What LNG-specific inspection regimes are supported?",
    a: "Cryogenic 9% Ni steel and austenitic stainless weld inspection per ASME IX and API 620. Cold-box internal piping with low-temperature toughness requirements. BOG compressor and expander vibration monitoring per API 617/684. Loading arm and jetty piping integrity. Fire and gas detection binding to the twin. LNG storage tank floor MFL per API 653 with WEDGE overlay.",
  },
  {
    q: "How are pipeline assets represented in a twin?",
    a: "Aboveground piping is scanned as 3D geometry with CML and weld maps. Buried pipelines are represented as routed centerlines with inline inspection (ILI) data registered to pipe tally. MFL, UT crack detection, and geometry pig runs render as overlays on the pipeline schematic. Cathodic protection readings bind to test stations. River crossings and HDDs carry their own survey records.",
  },
  {
    q: "Which city-level operations does Atlantis support?",
    a: "Principal delivery hubs include Dubai and Ruwais (UAE), Jubail and Yanbu (Saudi Arabia), Houston (US Gulf Coast), Rotterdam (Europe refining and chemical), Singapore (Jurong Island), Mumbai and Jamnagar (India), Kuala Lumpur (Malaysia), and Jakarta (Indonesia). City-specific landing pages list local qualifications, partner shops, and on-call teams.",
  },
  {
    q: "How is corrosion-under-insulation (CUI) addressed in refinery twins?",
    a: "CUI is the dominant silent failure mode in refineries. The twin carries an insulation layer attribute per piping segment, flags CUI-susceptible temperature bands (API RP 583 guidance), and schedules pulsed eddy current and real-time radiography campaigns against those segments. Findings overlay on the twin as heat maps so integrity teams see CUI distribution across a unit at a glance.",
  },
  {
    q: "Can the twin feed existing integrity management systems?",
    a: "Yes. Atlantis exports to Meridium APM, Bentley AssetWise, IBM Maximo APM, Intelex, and SAP PM via documented schemas. The twin can serve as the system of record or as a geometry layer over an existing IMS. Data contracts are defined per project to prevent drift. We do not lock clients into a proprietary datastore.",
  },
];

const OPERATORS = [
  { name: "ADNOC", codes: "COP V2-01, HSE SGS&EPs", region: "UAE" },
  { name: "Saudi Aramco", codes: "SAES-W-010, SAIP-30, SAEP-1135", region: "Saudi Arabia" },
  { name: "KOC", codes: "KOC-MS-009, KOC-G-007", region: "Kuwait" },
  { name: "PETRONAS", codes: "PTS 70.10.90", region: "Malaysia" },
  { name: "Petrobras", codes: "N-2318, N-1738", region: "Brazil" },
  { name: "Reliance", codes: "Jamnagar site standards", region: "India" },
  { name: "Pertamina", codes: "TKO refining standards", region: "Indonesia" },
];

const ASSET_CLASSES = [
  {
    title: "Refineries and petrochemical",
    body: "Atmospheric and vacuum distillation, FCC, hydrocracker, reformer, coker, alkylation, polyethylene and polypropylene trains, aromatics complexes. Full CML grid on static equipment and piping. RBI intervals per API 580/581. Turnaround scope generated from the twin.",
  },
  {
    title: "FPSO / FSO / offshore",
    body: "Hull and topsides integrated. Class society survey coordination (ABS, DNV, LR). Swivel, turret, and riser inspection bound to the model. Fatigue life tracking on critical welds. Helideck and flare boom geometry captured.",
  },
  {
    title: "LNG and gas processing",
    body: "Cryogenic cold boxes, spiral-wound heat exchangers, BOG compressors, loading arms, spherical and full-containment storage tanks. API 620 and ASME VIII Div 2 scope. BOG and jetty piping CUI campaigns.",
  },
  {
    title: "Pipelines and tank farms",
    body: "Aboveground piping as 3D, buried pipelines as intelligent centerlines with ILI overlay. API 653 tank floor MFL with WEDGE rendering. Secondary containment and bund integrity. Cathodic protection test stations bound.",
  },
];

const CITY_LINKS = [
  { href: "/locations/dubai", label: "Dubai" },
  { href: "/locations/ruwais", label: "Ruwais" },
  { href: "/locations/jubail", label: "Jubail" },
  { href: "/locations/houston", label: "Houston" },
  { href: "/locations/rotterdam", label: "Rotterdam" },
  { href: "/locations/singapore", label: "Singapore" },
];

export default function DigitalTwinsOilGas() {
  return (
    <>
      <SEOHead
        title="Digital Twins for Oil and Gas | Atlantis NDT"
        description="Digital Twin platform for refineries, FPSOs, LNG, pipelines. ADNOC, Saudi Aramco, PETRONAS, Petrobras standards. API 510/570/580 and ASNT Level III."
        canonical={CANONICAL}
        alternates={[
          { hreflang: "en", href: CANONICAL },
          { hreflang: "es", href: "https://atlantisndt.com/es/digital-twins/oil-and-gas" },
          { hreflang: "ar", href: "https://atlantisndt.com/ar/digital-twins/oil-and-gas" },
          { hreflang: "x-default", href: CANONICAL },
        ]}
        faq={FAQ}
        breadcrumb={[
          { name: "Home", item: "https://atlantisndt.com/" },
          { name: "Digital Twins", item: "https://atlantisndt.com/digital-twins" },
          { name: "Oil and Gas", item: CANONICAL },
        ]}
      />

      <main className="bg-white text-slate-900">
        <section className="border-b border-slate-200 bg-gradient-to-b from-slate-50 to-white">
          <div className="mx-auto max-w-7xl px-6 py-16">
            <nav className="mb-4 text-xs text-slate-500">
              <Link to="/digital-twins" className="underline">
                Digital Twins
              </Link>{" "}
              / Oil and Gas
            </nav>
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-sky-700">Vertical hub</p>
            <h1 className="text-4xl font-bold leading-tight tracking-tight text-slate-900 md:text-5xl">
              Digital Twins for Oil and Gas
            </h1>
            <p className="mt-5 max-w-3xl text-lg text-slate-700">
              Refineries, FPSOs, LNG trains, pipelines, tank farms, and petrochemical complexes — delivered to ADNOC,
              Saudi Aramco, KOC, PETRONAS, Petrobras, Reliance, and Pertamina operator standards, governed by API
              510/570/580/581 and ASME Section V and VIII.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-14">
          <h2 className="text-2xl font-bold text-slate-900">Operator standards we deliver against</h2>
          <p className="mt-3 max-w-3xl text-slate-700">
            Every twin is built to the operator's written standard, not a generic template. The working list below is
            representative, not exhaustive.
          </p>
          <div className="mt-8 overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="border-b-2 border-slate-300 text-left">
                  <th className="py-3 pr-4 font-semibold">Operator</th>
                  <th className="py-3 pr-4 font-semibold">Region</th>
                  <th className="py-3 font-semibold">Primary standards</th>
                </tr>
              </thead>
              <tbody>
                {OPERATORS.map((o) => (
                  <tr key={o.name} className="border-b border-slate-200">
                    <td className="py-3 pr-4 font-semibold text-slate-800">{o.name}</td>
                    <td className="py-3 pr-4 text-slate-700">{o.region}</td>
                    <td className="py-3 text-slate-700">{o.codes}</td>
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
              {ASSET_CLASSES.map((a) => (
                <div key={a.title} className="rounded-lg border border-slate-200 bg-white p-6">
                  <h3 className="text-lg font-semibold text-slate-900">{a.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-700">{a.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-14">
          <h2 className="text-2xl font-bold text-slate-900">What lives on an oil and gas twin</h2>
          <div className="mt-6 grid gap-8 lg:grid-cols-3">
            <div>
              <h3 className="font-semibold text-slate-900">Geometry layer</h3>
              <p className="mt-2 text-sm text-slate-700">
                LIDAR-derived 3D model at 3-6 mm accuracy. Equipment, piping, structural steel, and instrumentation are
                classified as discrete intelligent objects, tagged against P&IDs and isometrics. Elevation and plot
                coordinates are surveyed into plant grid.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900">Inspection layer (WEDGE)</h3>
              <p className="mt-2 text-sm text-slate-700">
                Every UT thickness, PAUT scan, TOFD indication, RT film, MT/PT finding, and CUI survey result rendered
                on the exact geometry it came from. API 510 and API 570 intervals tracked per CML. API 653 tank floor
                MFL heat-mapped.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900">Live data layer</h3>
              <p className="mt-2 text-sm text-slate-700">
                Process temperature and pressure, vibration on rotating equipment per API 617/684, gas detection (H2S,
                methane, VOC), permanent UT pucks, corrosion coupons, cathodic protection readings. Each stream bound to
                the twin node it monitors.
              </p>
            </div>
          </div>
        </section>

        <section className="border-y border-slate-200 bg-slate-50">
          <div className="mx-auto max-w-7xl px-6 py-14">
            <h2 className="text-2xl font-bold text-slate-900">City delivery pages</h2>
            <p className="mt-3 max-w-3xl text-slate-700">
              Atlantis operates with local teams, local qualifications, and local partner shops. Use the city hubs for
              contact, quals, and site-specific operator alignment.
            </p>
            <ul className="mt-6 grid gap-3 text-sm text-sky-800 md:grid-cols-3">
              {CITY_LINKS.map((c) => (
                <li key={c.href}>
                  <Link to={c.href} className="underline hover:text-sky-900">
                    Digital Twin services in {c.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-14">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold text-slate-900">ASNT Level III authority</h2>
              <p className="mt-4 text-slate-700">
                Technical authority on every oil and gas Digital Twin engagement is an ASNT Level III, certified per
                ASNT CP-189 or SNT-TC-1A, with method certifications across UT, PAUT, TOFD, RT, MT, PT, ET, and VT. The
                Level III approves written procedures, qualifies techniques per ASME V Article 4/5/7, and carries
                accountability for data landing on the twin.
              </p>
              <p className="mt-4 text-slate-700">
                API authorized inspector credentials (510, 570, 653, 580) sit alongside the Level III stack so the twin
                can generate regulator-acceptable inspection reports without an external sign-off loop.
              </p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-6">
              <h3 className="font-semibold text-slate-900">Related Atlantis services</h3>
              <ul className="mt-3 space-y-2 text-sm text-sky-800">
                <li>
                  <Link to="/services/ut-phased-array" className="underline">
                    Phased Array UT (PAUT) inspection
                  </Link>
                </li>
                <li>
                  <Link to="/services/tofd" className="underline">
                    Time of Flight Diffraction (TOFD)
                  </Link>
                </li>
                <li>
                  <Link to="/services/api-653-tank-inspection" className="underline">
                    API 653 tank inspection
                  </Link>
                </li>
                <li>
                  <Link to="/services/cui-inspection" className="underline">
                    CUI pulsed eddy current and RTR
                  </Link>
                </li>
                <li>
                  <Link to="/digital-twins/ndt-overlay-wedge" className="underline">
                    WEDGE NDT-on-Twin overlay
                  </Link>
                </li>
                <li>
                  <Link to="/digital-twins/ai-predictive-analytics" className="underline">
                    AI predictive analytics (RUL, RBI)
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="border-y border-slate-200 bg-slate-50">
          <div className="mx-auto max-w-7xl px-6 py-14">
            <h2 className="text-2xl font-bold text-slate-900">Frequently asked questions</h2>
            <div className="mt-6 space-y-5">
              {FAQ.map((f) => (
                <div key={f.q} className="rounded-lg border border-slate-200 bg-white p-5">
                  <h3 className="font-semibold text-slate-900">{f.q}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-700">{f.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-slate-900">
          <div className="mx-auto max-w-7xl px-6 py-12 text-slate-100">
            <h2 className="text-2xl font-bold">Scope a refinery or FPSO twin</h2>
            <p className="mt-3 max-w-2xl text-slate-300">
              Send a plot plan, a unit list, or an asset register. We will return a LIDAR plan, an NDT scope aligned to
              your operator standard, and a delivery timeline within one week.
            </p>
            <Link
              to="/contact"
              className="mt-5 inline-block rounded-md bg-sky-500 px-6 py-3 text-sm font-semibold text-white hover:bg-sky-400"
            >
              Contact Atlantis engineering
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
