import React from "react";
import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";

const CANONICAL = "https://atlantisndt.com/digital-twins/maritime";

const FAQ = [
  {
    q: "Which class societies do your maritime Digital Twins align to?",
    a: "ABS Rules for Building and Classing Marine Vessels (Part 7, Survey After Construction), DNV-CG-0051 and related class notes, Lloyd's Register ShipRight procedures, Bureau Veritas, ClassNK, and KR. Thickness gauging records follow IACS UR Z10.1, Z10.2, Z10.3, Z10.4, and Z10.5 as applicable to vessel type. Condition Assessment Program (CAP) survey data lands directly on the twin.",
  },
  {
    q: "How does a shipyard use a Digital Twin during a drydocking?",
    a: "Pre-docking LIDAR scans establish baseline hull geometry. During docking, thickness gauging, coating survey, and weld repair records are recorded directly on the twin. Class society surveyors witness against the twin, reducing paper survey time. Post-docking, the twin is the handover record to the owner and the next yard. Repair scope and steel renewal are quantified against the twin geometry.",
  },
  {
    q: "Is the twin viable for FPSO and FSO assets?",
    a: "Yes, and it is the sweet spot. FPSO/FSO assets combine a class-surveyed hull with topsides process plant under API 510/570 regimes. The twin fuses both in one navigable model. Hull thickness grids follow class society schedules, topsides CMLs follow API, and WEDGE renders both on the same geometry. Mooring, turret, swivel, and riser inspection records bind to the twin.",
  },
  {
    q: "What about naval vessels and submarines?",
    a: "Naval twin engagements follow NAVSEA technical publications, MIL-STD quality systems, and applicable national classification. For submarines, hull pressure boundary NDT is governed by highly controlled written procedures and ASNT Level III oversight is non-negotiable. Atlantis supports allied navies under appropriate export control and ITAR-aware deployments. See the defense hub for sustainment scope.",
  },
  {
    q: "Can offshore platforms be twinned?",
    a: "Yes. Fixed platforms (jackets), semi-submersibles, jack-ups, tension leg platforms, and spars. The twin captures topside process, structural jacket members, splash zone, and subsea where class surveys reach. Fatigue hot spots on jacket nodes are tracked per DNV-RP-C203. Flare boom, crane, and helideck geometry included. Mooring chain inspection bound to the twin for floating units.",
  },
  {
    q: "How does the twin handle coating and cathodic protection records?",
    a: "Coating condition is recorded per IMO PSPC ballast tank standards and owner specifications, mapped as a layer on the twin geometry. Dry film thickness readings, holiday test results, and coating breakdown percentages render as heat maps. Sacrificial anode and ICCP system readings bind to survey points. Anode depletion curves feed into the renewal planner.",
  },
  {
    q: "Do you integrate with shipyard production and ERP systems?",
    a: "Yes. Atlantis integrates with yard production control systems and with our own NDT-ERP for shipyard workflows. Class society electronic reporting (ABS Eagle, DNV Veracity, LR Class Direct) receives export bundles per agreed data contracts. We do not force a proprietary datastore on the yard or the owner.",
  },
  {
    q: "What is the typical delivery time for a VLCC or FPSO twin?",
    a: "A VLCC hull twin including internal ballast and cargo tank geometry typically delivers in 4 to 6 weeks including thickness gauging ingestion. An FPSO combining hull and topsides typically takes 8 to 12 weeks. Scope scales with compartment count, topsides unit count, and historical record depth. First usable twin is available mid-delivery, not at end of project.",
  },
];

const CLASS_BODIES = [
  { name: "ABS", doc: "Rules Part 7 Survey After Construction; IACS UR Z10 series" },
  { name: "DNV", doc: "DNV-CG-0051 thickness measurement; DNV-RP-C203 fatigue" },
  { name: "Lloyd's Register", doc: "ShipRight Procedures; Hull Condition Monitoring" },
  { name: "Bureau Veritas", doc: "NR 467 Rules for Steel Ships" },
  { name: "ClassNK", doc: "Rules for Survey and Construction of Steel Ships" },
  { name: "KR", doc: "Rules for Classification of Steel Ships" },
];

const ASSETS = [
  {
    title: "Commercial shipyards",
    body: "New-build and repair yards. Pre-docking baseline scans, in-dock NDT ingestion, class survey support, and post-docking owner handover twin. Steel renewal quantity take-off from the twin. Cross-link with our NDT-ERP for shipyard production workflow.",
  },
  {
    title: "FPSO / FSO",
    body: "Hull and topsides in one twin. Class society schedule on the hull, API 510/570 on topsides. Mooring, turret, swivel, riser, and flare boom inspection integrated. Useful through full field life and at decommissioning.",
  },
  {
    title: "Naval and coast guard",
    body: "Hull NDT under NAVSEA technical publications and MIL-STD quality systems. ASNT Level III oversight. Controlled deployment for classified programs. Depot MRO scope on the defense hub.",
  },
  {
    title: "Offshore platforms",
    body: "Jackets, semi-subs, jack-ups, TLPs, spars. Structural nodes with DNV-RP-C203 fatigue tracking. Splash zone inspection. Riser and caisson integrity. Helideck and crane geometry included.",
  },
];

export default function DigitalTwinsMaritime() {
  return (
    <>
      <SEOHead
        title="Digital Twins for Maritime | Atlantis NDT"
        description="Digital Twin platform for shipyards, FPSOs, naval, and offshore platforms. ABS, DNV, Lloyd's Register. IACS UR Z10 thickness gauging. ASNT Level III."
        canonical={CANONICAL}
        alternates={[
          { hreflang: "en", href: CANONICAL },
          { hreflang: "es", href: "https://atlantisndt.com/es/digital-twins/maritime" },
          { hreflang: "ar", href: "https://atlantisndt.com/ar/digital-twins/maritime" },
          { hreflang: "x-default", href: CANONICAL },
        ]}
        faq={FAQ}
        breadcrumb={[
          { name: "Home", item: "https://atlantisndt.com/" },
          { name: "Digital Twins", item: "https://atlantisndt.com/digital-twins" },
          { name: "Maritime", item: CANONICAL },
        ]}
      />

      <main className="bg-white text-slate-900">
        <section className="border-b border-slate-200 bg-gradient-to-b from-slate-50 to-white">
          <div className="mx-auto max-w-7xl px-6 py-16">
            <nav className="mb-4 text-xs text-slate-500">
              <Link to="/digital-twins" className="underline">
                Digital Twins
              </Link>{" "}
              / Maritime
            </nav>
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-sky-700">Vertical hub</p>
            <h1 className="text-4xl font-bold leading-tight tracking-tight text-slate-900 md:text-5xl">
              Digital Twins for Maritime
            </h1>
            <p className="mt-5 max-w-3xl text-lg text-slate-700">
              Shipyards, FPSOs and FSOs, naval assets, and offshore platforms — built to ABS, DNV, and Lloyd's Register
              class rules, with IACS UR Z10 thickness gauging and WEDGE NDT overlay on hull and topsides geometry.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-14">
          <h2 className="text-2xl font-bold text-slate-900">Class society alignment</h2>
          <p className="mt-3 max-w-3xl text-slate-700">
            Twins are surveyor-ready. Thickness gauging, coating survey, and structural inspection data are structured
            to the class society's reporting schema, exported electronically where the class supports it.
          </p>
          <div className="mt-8 overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="border-b-2 border-slate-300 text-left">
                  <th className="py-3 pr-4 font-semibold">Class society</th>
                  <th className="py-3 font-semibold">Reference rules</th>
                </tr>
              </thead>
              <tbody>
                {CLASS_BODIES.map((c) => (
                  <tr key={c.name} className="border-b border-slate-200">
                    <td className="py-3 pr-4 font-semibold text-slate-800">{c.name}</td>
                    <td className="py-3 text-slate-700">{c.doc}</td>
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
              <h2 className="text-2xl font-bold text-slate-900">Hull thickness on the twin</h2>
              <p className="mt-4 text-slate-700">
                Thickness gauging per IACS UR Z10 series is the spine of hull condition monitoring. Atlantis captures
                readings on the physical grid the class rules define — deck, bottom, side shell, longitudinals,
                transverses, bulkheads — and renders them on the 3D twin as color-coded heat maps. Gauger, transducer,
                couplant, and calibration metadata travel with each reading.
              </p>
              <p className="mt-4 text-slate-700">
                Surveyor witnessing is faster because the twin surfaces diminution gradients across a tank at a glance.
                Steel renewal scope is quantified directly from the twin, not rebuilt in a spreadsheet. Post-renewal
                re-gauging is registered to the exact same coordinates.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-900">Coating and CP integration</h2>
              <p className="mt-4 text-slate-700">
                Coating condition under IMO PSPC for ballast tanks and owner specifications for cargo tanks is recorded
                as a surface layer on the twin. Dry film thickness, holiday testing, and breakdown percentages render
                per compartment. Sacrificial anode and ICCP readings bind to survey points. Anode depletion curves drive
                the CP renewal planner.
              </p>
              <p className="mt-4 text-slate-700">
                For corrosion-under-insulation on deck piping and cryogenic lines (LNG carriers), WEDGE CUI overlay per
                the oil-and-gas methodology applies directly.
              </p>
            </div>
          </div>
        </section>

        <section className="border-y border-slate-200 bg-slate-50">
          <div className="mx-auto max-w-7xl px-6 py-14">
            <h2 className="text-2xl font-bold text-slate-900">Shipyard ERP cross-link</h2>
            <p className="mt-3 max-w-3xl text-slate-700">
              Digital Twins pair with production control. Atlantis operates a dedicated NDT-ERP for shipyard workflows
              that sequences gauging rounds, assigns technicians, captures class witness events, and exports to class
              society portals.
            </p>
            <p className="mt-4">
              <Link to="/ndt-erp-for-shipyards" className="font-semibold text-sky-800 underline">
                See the Atlantis NDT-ERP for shipyards
              </Link>
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-14">
          <h2 className="text-2xl font-bold text-slate-900">ASNT Level III in maritime NDT</h2>
          <p className="mt-4 max-w-4xl text-slate-700">
            Hull and structural NDT on a classed vessel or an offshore platform is procedure-qualified work. Atlantis'
            ASNT Level III writes and approves the written practice, the method-specific procedures, and the
            qualification records that the class surveyor and the flag state accept. PCN Level 3 is available where
            European recognition is contractually required. CSWIP 3.1/3.2 welding inspection is carried in parallel on
            new-build and repair engagements.
          </p>
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
            <h2 className="text-2xl font-bold">Scope a shipyard or FPSO twin</h2>
            <p className="mt-3 max-w-2xl text-slate-300">
              Send a GA drawing or a class society survey schedule. We will return a scan plan, thickness gauging scope
              per IACS UR Z10, and a twin delivery timeline inside one week.
            </p>
            <Link
              to="/contact"
              className="mt-5 inline-block rounded-md bg-sky-500 px-6 py-3 text-sm font-semibold text-white hover:bg-sky-400"
            >
              Contact Atlantis maritime desk
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
