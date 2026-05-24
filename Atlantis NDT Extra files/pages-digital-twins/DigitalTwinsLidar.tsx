import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";

const CANONICAL = "https://atlantisndt.com/digital-twins/lidar-scan-to-twin";

const FAQ = [
  {
    q: "What scan resolution is required to produce a refinery-grade digital twin?",
    a: "For piping and vessel as-built capture we target a point spacing of 3–6 mm at a 10 m standoff, which maps to high-density scan mode on a Leica RTC360 or Z+F Imager 5016. At that density we can resolve DN 50 (2\") nozzles, flange bolt circles, and insulation thickness steps. For structural steel-only scans (racks, pipe bridges, process stacks) 12–20 mm at 30 m is sufficient and cuts scan time by 60%.",
  },
  {
    q: "How accurate is the final registered point cloud?",
    a: "Typical whole-plant accuracy after cloud-to-cloud registration and control-point constraint is 5 mm RMS at 30 m range. In precision mode — dense targetry, short standoffs, tripod re-levelling — we achieve 2 mm at 10 m, which is adequate for weld-joint fit-up and flange face planarity audits. All registration reports are delivered with a Leica Cyclone REGISTER 360 or Trimble RealWorks QA summary.",
  },
  {
    q: "Which laser scanners does Atlantis deploy?",
    a: "Our standard field kit is the Leica RTC360 (2 mm accuracy, 2 million points/second) for most refinery and FPSO topside work, the FARO Focus Premium for confined-space and ATEX-zoned areas, the Z+F Imager 5016 for vessel internals where HDR imaging is critical, and the Trimble X12 for long-range infrastructure such as LNG jetties and flare stacks. All crews are ASNT Level III supervised on the NDT side and factory-certified on the scanner side.",
  },
  {
    q: "Can the twin be exported to PI System, Maximo, or SAP PM?",
    a: "Yes. We export asset hierarchy in ISO 15926 RDL-compatible CSV, piping line lists in PCF for integration with AVEVA E3D, and tag-level metadata via REST to OSIsoft PI AF, IBM Maximo, and SAP PM. The twin becomes the visual layer over your existing CMMS — click an asset in 3D, drill into its work-order history in Maximo.",
  },
  {
    q: "How do you handle insulated and jacketed piping?",
    a: "Insulation reads as the geometric outer surface. Where dimensional accuracy matters — for example, computing remaining wall from a UT thickness grid — we capture insulation-stripped sections during the next turnaround window and overlay bare-metal scans onto the insulated model. The asset tag in the twin records both geometries plus the stripping date.",
  },
  {
    q: "What is your typical scan-to-twin delivery timeline?",
    a: "For a 50,000 m² refinery unit: 6–9 scan days on site, 10–14 days for registration and QA, 15–25 days for mesh generation, asset tagging, and metadata enrichment. First navigable twin typically ready 5–6 weeks after scan completion. Incremental re-scans of changed areas during turnarounds are delivered inside 10 days.",
  },
  {
    q: "Do you support FPSO and offshore topside scanning?",
    a: "Yes. Offshore crews carry ATEX Zone 1 certified FARO Focus units, compact mast-mounted scan rigs for deck congestion, and splash-zone protection. We have scanned FPSO topsides, gas compression modules, and turret mooring systems across West Africa, Brazil, and the Gulf. All data handling complies with operator IT-OT segregation policies.",
  },
  {
    q: "How is the twin kept current after commissioning?",
    a: "We offer three update cadences: event-triggered (re-scan after any MOC-classified change), turnaround-scheduled (full unit re-scan every 4–6 years), and drone-photogrammetry delta scans (monthly for outdoor racks). Delta scans are differenced against the master cloud and any geometry deviation greater than 25 mm triggers an engineering review ticket.",
  },
];

const HOWTO_STEPS = [
  {
    name: "Site survey and scan plan",
    text: "Walk the unit with process engineers, mark ATEX zones, confirm permit-to-work routes, and generate a scan-position plan. Typical refinery unit needs 180–260 scan positions.",
  },
  {
    name: "Field scanning",
    text: "Deploy Leica RTC360 or Z+F Imager 5016 with HDR imaging. Each position captures 30–90 seconds of geometry plus spherical colour. Control targets placed on long-lived structural members.",
  },
  {
    name: "Cloud registration",
    text: "Import into Cyclone REGISTER 360 or RealWorks. Cloud-to-cloud registration refined with surveyed control points. Publish QA report with per-bundle RMS.",
  },
  {
    name: "Mesh and segmentation",
    text: "Auto-extract piping centrelines, vessels, structural steel. Manual clean-up for cable trays, instruments, minor fittings. Mesh decimated for web delivery without losing asset-level fidelity.",
  },
  {
    name: "Asset tag enrichment",
    text: "Link each 3D asset to its P&ID tag, line number, ISO drawing reference, material spec, and inspection history. Tag graph exported to PI AF, Maximo, or SAP.",
  },
  {
    name: "NDT and IoT overlay",
    text: "Integrate UT thickness grids, PAUT scans, RT defect maps, and live IoT sensor feeds. Twin becomes the single pane for inspection and condition data.",
  },
];

export default function DigitalTwinsLidar() {
  return (
    <main className="bg-slate-50 text-slate-900">
      <SEOHead
        title="LIDAR Scan to Digital Twin | Refinery & FPSO | Atlantis NDT"
        description="Engineer-grade LIDAR scan-to-twin for refineries, FPSOs and LNG. Leica RTC360, FARO, Z+F, Trimble. 5mm @ 30m. Export to PI, Maximo, SAP."
        canonical={CANONICAL}
        faq={FAQ}
        breadcrumb={[
          { name: "Home", item: "https://atlantisndt.com/" },
          { name: "Digital Twins", item: "https://atlantisndt.com/digital-twins" },
          { name: "LIDAR Scan to Twin", item: CANONICAL },
        ]}
        alternates={[{ hrefLang: "en", href: CANONICAL }]}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-700 text-white py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <nav className="text-sm text-slate-300 mb-4">
            <Link to="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <Link to="/digital-twins" className="hover:text-white">Digital Twins</Link>
            <span className="mx-2">/</span>
            <span>LIDAR Scan to Twin</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            LIDAR Scan to Digital Twin for Refineries, FPSOs and LNG Terminals
          </h1>
          <p className="text-xl text-slate-200 mb-8 leading-relaxed">
            Millimetre-accurate point clouds converted into a navigable, asset-tagged digital twin that integrates
            directly with OSIsoft PI System, IBM Maximo, SAP PM and AVEVA E3D. Captured by ASNT Level III
            supervised crews using Leica RTC360, FARO Focus Premium, Z+F Imager 5016 and Trimble X12.
          </p>
          <div className="flex flex-wrap gap-3 text-sm">
            <span className="bg-white/10 px-3 py-1 rounded">5 mm RMS @ 30 m</span>
            <span className="bg-white/10 px-3 py-1 rounded">2 mm precision mode</span>
            <span className="bg-white/10 px-3 py-1 rounded">ATEX Zone 1 crews</span>
            <span className="bg-white/10 px-3 py-1 rounded">ISO 15926 export</span>
          </div>
        </div>
      </section>

      {/* What is scan-to-twin */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">What is scan-to-twin?</h2>
          <p className="mb-4 leading-relaxed">
            Scan-to-twin is the process of converting raw terrestrial LIDAR (light detection and ranging) point
            clouds into a semantically rich, geometrically accurate 3D digital twin. Unlike a dumb mesh, a true
            digital twin is segmented into named assets — each vessel, each pipe spool, each valve — and every
            asset is linked to its engineering metadata: P&ID tag, line number, material specification, design
            pressure, design temperature, and inspection history.
          </p>
          <p className="mb-4 leading-relaxed">
            The end deliverable is not a file; it is a live, queryable model. An inspector in Abu Dhabi can click
            a flange in the browser-based twin and pull up the last UT thickness reading, the original
            radiographic film, the technician's ASNT Level II certification number, and the remaining life
            calculated to ASME B31G. A reliability engineer in Houston can overlay live OSIsoft PI pressure and
            temperature data on the same asset and watch corrosion rate projections move in real time.
          </p>
          <p className="leading-relaxed">
            Atlantis builds the pipeline end-to-end: scan capture, registration, mesh, segmentation, asset
            tagging, NDT overlay, IoT integration, AI analytics. Single vendor, single contract, single point of
            accountability — which is why operators choose us over stitching together a surveyor, a software
            vendor, and an inspection house.
          </p>
        </div>
      </section>

      {/* Supported scanners */}
      <section className="bg-white py-16 px-6 border-y border-slate-200">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Supported scanner fleet</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border border-slate-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">Leica RTC360</h3>
              <ul className="text-sm space-y-1 text-slate-700">
                <li><strong>Range:</strong> 0.5 – 130 m</li>
                <li><strong>Speed:</strong> 2,000,000 points/second</li>
                <li><strong>Range accuracy:</strong> 1.9 mm @ 10 m, 2.9 mm @ 20 m, 5.3 mm @ 40 m</li>
                <li><strong>Use case:</strong> Primary refinery and onshore gas plant capture</li>
              </ul>
            </div>
            <div className="border border-slate-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">FARO Focus Premium</h3>
              <ul className="text-sm space-y-1 text-slate-700">
                <li><strong>Range:</strong> 0.6 – 350 m</li>
                <li><strong>Speed:</strong> 2,000,000 points/second</li>
                <li><strong>IP rating:</strong> IP54 (operates in light rain)</li>
                <li><strong>Use case:</strong> Confined space entries, FPSO topsides, ATEX Zone 1</li>
              </ul>
            </div>
            <div className="border border-slate-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">Z+F Imager 5016</h3>
              <ul className="text-sm space-y-1 text-slate-700">
                <li><strong>Range:</strong> 0.3 – 360 m</li>
                <li><strong>Speed:</strong> 1,100,000 points/second</li>
                <li><strong>HDR:</strong> True HDR imaging for vessel internals</li>
                <li><strong>Use case:</strong> Pressure vessel internals, columns, reactors</li>
              </ul>
            </div>
            <div className="border border-slate-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">Trimble X12</h3>
              <ul className="text-sm space-y-1 text-slate-700">
                <li><strong>Range:</strong> 0.4 – 365 m</li>
                <li><strong>Speed:</strong> 2,180,000 points/second</li>
                <li><strong>Range accuracy:</strong> 1.5 mm @ any range</li>
                <li><strong>Use case:</strong> LNG jetties, flare stacks, long-range infrastructure</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Accuracy specs */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Accuracy specifications</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-slate-100">
                  <th className="border border-slate-300 p-3 text-left">Mode</th>
                  <th className="border border-slate-300 p-3 text-left">Point spacing</th>
                  <th className="border border-slate-300 p-3 text-left">Registered RMS</th>
                  <th className="border border-slate-300 p-3 text-left">Typical use</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-slate-300 p-3">Standard</td>
                  <td className="border border-slate-300 p-3">6 mm @ 10 m</td>
                  <td className="border border-slate-300 p-3">5 mm @ 30 m</td>
                  <td className="border border-slate-300 p-3">General refinery, structural, piping &gt; DN 50</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="border border-slate-300 p-3">Precision</td>
                  <td className="border border-slate-300 p-3">3 mm @ 10 m</td>
                  <td className="border border-slate-300 p-3">2 mm @ 10 m</td>
                  <td className="border border-slate-300 p-3">Weld fit-up, flange planarity, small-bore tubing</td>
                </tr>
                <tr>
                  <td className="border border-slate-300 p-3">Survey</td>
                  <td className="border border-slate-300 p-3">12 mm @ 30 m</td>
                  <td className="border border-slate-300 p-3">8 mm @ 40 m</td>
                  <td className="border border-slate-300 p-3">Racks, pipe bridges, large outdoor areas</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="border border-slate-300 p-3">Long-range</td>
                  <td className="border border-slate-300 p-3">25 mm @ 80 m</td>
                  <td className="border border-slate-300 p-3">15 mm @ 100 m</td>
                  <td className="border border-slate-300 p-3">Flare stacks, jetties, LNG storage tanks</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-slate-600 mt-4">
            All accuracy figures are RMS values from bundle-adjusted registration with at least 5 control points
            per scan loop, reported in the Cyclone REGISTER 360 QA export delivered with every project.
          </p>
        </div>
      </section>

      {/* Workflow */}
      <section className="bg-white py-16 px-6 border-y border-slate-200">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Workflow: scan to operational twin</h2>
          <ol className="space-y-6">
            {HOWTO_STEPS.map((s, i) => (
              <li key={i} className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold">{i + 1}</div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">{s.name}</h3>
                  <p className="text-slate-700">{s.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Refinery use cases */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Refinery use cases</h2>
          <p className="mb-4 leading-relaxed">
            Refinery operations deal with thousands of kilometres of piping, hundreds of pressure vessels, and
            decades of MOC drift between the as-designed isometrics and the as-built plant. A LIDAR-sourced
            digital twin resolves that drift in one pass.
          </p>
          <ul className="list-disc pl-6 space-y-3 mb-4">
            <li>
              <strong>CDU and VDU piping refurbishment</strong> — scanning the column, reboiler circuit, and
              overhead condensers gives isometric-quality PCF output ready for stress analysis in Caesar II
              without hand field-verification.
            </li>
            <li>
              <strong>Cat cracker turnaround planning</strong> — pre-TA scan captures reactor and regenerator
              geometry, refractory profiles, and slide valve clearances. Post-TA scan quantifies installed change.
            </li>
            <li>
              <strong>Hydrocracker reactor re-rating</strong> — vessel internal geometry captured via Z+F HDR
              imaging feeds into fitness-for-service calculations aligned to API 510 and API 579.
            </li>
            <li>
              <strong>Fired heater inspection planning</strong> — tube geometry, burner positions, and header
              boxes captured before shutdown so UT scanning crews arrive with a heat-map plan already rendered.
            </li>
            <li>
              <strong>Flare network audit</strong> — relief header sizing, slope, and drainage verified against
              API 521 once real geometry replaces decades-old drawings.
            </li>
          </ul>
          <p className="leading-relaxed">
            All refinery deliveries are cross-referenced to API 510 (pressure vessels), API 570 (piping), API 580
            (risk-based inspection) and — where the client operates in the Middle East — ADNOC COP and Saudi
            Aramco SAES-W-010. In Korea we align to KEPIC; in Malaysia to PETRONAS PTS.
          </p>
        </div>
      </section>

      {/* FPSO use cases */}
      <section className="bg-white py-16 px-6 border-y border-slate-200">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">FPSO and offshore topside use cases</h2>
          <p className="mb-4 leading-relaxed">
            FPSOs present three scanning challenges the onshore world does not: congested topside decks, ATEX
            Zone 1 requirements across most process modules, and vessel motion during scan capture. Atlantis
            offshore crews carry FARO Focus Premium units with certified ATEX enclosures, mast-mounted rigs for
            pipe-rack capture, and we account for sea state in our registration QA.
          </p>
          <ul className="list-disc pl-6 space-y-3">
            <li>
              <strong>Turret swivel inspection planning</strong> — swivel stack geometry captured so NDT crews
              can plan PAUT scans of the critical rotating joints without disassembly.
            </li>
            <li>
              <strong>Gas compression module re-rating</strong> — compressor skid, scrubbers, and after-coolers
              scanned into a twin that supports vibration analysis overlay.
            </li>
            <li>
              <strong>Process module change management</strong> — every MOC package updates the twin, removing
              the drift between paper isometrics and reality.
            </li>
            <li>
              <strong>Riser balcony and turret structural integrity</strong> — structural twin supports fatigue
              life tracking based on hull monitoring IMU data overlaid on the geometry.
            </li>
          </ul>
        </div>
      </section>

      {/* Cross-links */}
      <section className="py-16 px-6 bg-slate-900 text-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Complete the digital twin stack</h2>
          <p className="mb-8 text-slate-200">
            The LIDAR geometry is step one. Atlantis delivers the full integrated stack — LIDAR, IoT, AI, NDT
            overlay — under a single-vendor pipeline. Explore the other layers:
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            <Link to="/digital-twins/iot-sensor-integration" className="block border border-white/20 p-5 rounded hover:bg-white/5">
              <h3 className="font-semibold mb-2">IoT Sensor Integration</h3>
              <p className="text-sm text-slate-300">Live UT, pressure, temperature, gas, radiation, vibration feeds.</p>
            </Link>
            <Link to="/digital-twins/ai-predictive-analytics" className="block border border-white/20 p-5 rounded hover:bg-white/5">
              <h3 className="font-semibold mb-2">AI Predictive Analytics</h3>
              <p className="text-sm text-slate-300">RUL forecasting, anomaly detection, API 580/581 RBI scoring.</p>
            </Link>
            <Link to="/digital-twins/ndt-data-overlay" className="block border border-white/20 p-5 rounded hover:bg-white/5">
              <h3 className="font-semibold mb-2">NDT Data Overlay</h3>
              <p className="text-sm text-slate-300">UT, PAUT, RT, MT, PT, ECT, AET projected onto the 3D twin.</p>
            </Link>
          </div>
          <div className="mt-8">
            <Link to="/digital-twins" className="inline-block bg-white text-slate-900 px-6 py-3 rounded font-semibold hover:bg-slate-100">
              Back to Digital Twins Pillar
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Frequently asked questions</h2>
          <div className="space-y-6">
            {FAQ.map((f, i) => (
              <div key={i} className="border-b border-slate-200 pb-6">
                <h3 className="font-semibold text-lg mb-2">{f.q}</h3>
                <p className="text-slate-700 leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
