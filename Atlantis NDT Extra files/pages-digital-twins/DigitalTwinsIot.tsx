import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";

const CANONICAL = "https://atlantisndt.com/digital-twins/iot-sensor-integration";

const FAQ = [
  {
    q: "Which industrial protocols does the Atlantis twin ingest?",
    a: "We ingest Modbus RTU and Modbus TCP natively, OPC-UA for modern DCS and gateway integrations, MQTT for cellular-connected edge devices, HART over 4–20 mA for legacy field transmitters, Profibus DP/PA, and Foundation Fieldbus H1. Where the plant DCS is Honeywell Experion, Yokogawa CENTUM, ABB 800xA, or Emerson DeltaV, we typically tap OPC-UA at the plant historian rather than injecting into the control layer.",
  },
  {
    q: "Do you write into the DCS or only read from it?",
    a: "Read-only. Every Atlantis integration sits strictly downstream of the process control layer. We never close a control loop, never write set-points, and our edge gateways are one-way by design. This passes operator cybersecurity reviews (IEC 62443 Zone and Conduit) without exception and means the twin cannot cause a process upset.",
  },
  {
    q: "How do UT thickness probes feed the twin continuously?",
    a: "Permanently installed ultrasonic thickness sensors — typically Sensor Networks Smartpim, Ionix HotSense, or Permasense WT210 — are read either directly via their wireless mesh or through the plant wireless gateway (WirelessHART or ISA100.11a). Each sensor is geo-tagged to its exact coordinate on the 3D twin during commissioning, and every reading becomes a time-series trace against the asset's wall-thickness history with ASME B31G remaining-life projection.",
  },
  {
    q: "What gas detector signals does the twin surface?",
    a: "We integrate H2S, CH4, CO, SO2, O2, and VOC detectors from Dräger Polytron, Honeywell Searchpoint Optima, MSA Ultima, and Teledyne Simtronics. Each detector appears as a coloured pin on the twin with live ppm reading and alarm state. On LNG terminals we also pull methane plume detection from open-path IR detectors and render the plume envelope as a 3D volume in the twin.",
  },
  {
    q: "How do you handle radiation monitoring data?",
    a: "Gamma probes, neutron detectors, and area radiation monitors from Mirion, Thermo Fisher RadEye, and Ludlum feed into the twin as spatial dose-rate maps. In nuclear support work we map ALARA zones onto the 3D model so planners can visualise dose accumulation against the work route. All data retention meets IAEA and local nuclear regulator traceability rules.",
  },
  {
    q: "What is the data retention and audit trail policy?",
    a: "Hot storage — one second resolution — kept 90 days on the operator's tenant. Warm storage at one minute resolution kept two years. Cold storage at fifteen minute resolution retained for the asset life plus 10 years, which satisfies API 570 piping inspection records and API 510 pressure vessel records. All writes are append-only with hash-chained audit logs; any export carries a tamper-evident SHA-256 manifest.",
  },
  {
    q: "Which edge gateways do you certify?",
    a: "We have standardised deployments on Siemens SIMATIC IOT2050, Moxa ioThinx 4510, HMS Anybus Edge, Advantech ECU-4784, and Red Lion FlexEdge. All run Atlantis-signed container images, communicate outbound-only over TLS 1.3 with certificate pinning, and support air-gapped store-and-forward when plant WAN drops.",
  },
  {
    q: "Can the IoT layer trigger work orders in Maximo or SAP PM?",
    a: "Yes. Threshold breach events — for example UT wall thickness crossing the retirement limit computed from ASME B31G, or vibration exceeding API 670 alarm — open a work order in IBM Maximo, SAP PM, or Oracle eAM with the asset tag, sensor trace, and recommended inspection method pre-populated. The inspection engineer opens the job from inside the twin and sees the bad sensor pin flashing in 3D.",
  },
];

const HOWTO_STEPS = [
  { name: "Sensor and protocol audit", text: "Walk-down of DCS, historian, wireless gateways, and field transmitters. Document every tag, protocol, and polling rate we will consume." },
  { name: "Edge gateway install", text: "Certified edge gateway racked in an existing IT cabinet, one-way feed from the historian. No control-layer touch." },
  { name: "Tag-to-twin geo-binding", text: "Each sensor bound to its exact 3D coordinate on the LIDAR-sourced twin so readings appear at the correct asset." },
  { name: "Threshold and alarm rules", text: "Configure alarm bands: ASME B31G for UT, API 670 for vibration, LEL for gas, site-defined for temperature and pressure." },
  { name: "Dashboard and CMMS wiring", text: "Publish to web dashboard, wire alarm events into Maximo / SAP PM / Oracle eAM work-order creation." },
];

export default function DigitalTwinsIot() {
  return (
    <main className="bg-slate-50 text-slate-900">
      <SEOHead
        title="IoT Sensor Integration for Digital Twin | Atlantis NDT"
        description="Live UT, pressure, temperature, gas, radiation, vibration sensors on a 3D digital twin. Modbus, OPC-UA, MQTT, HART. Refinery, FPSO, LNG ready."
        canonical={CANONICAL}
        faq={FAQ}
        breadcrumb={[
          { name: "Home", item: "https://atlantisndt.com/" },
          { name: "Digital Twins", item: "https://atlantisndt.com/digital-twins" },
          { name: "IoT Sensor Integration", item: CANONICAL },
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
            <span>IoT Sensor Integration</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            IoT Sensor Integration for Industrial Digital Twins
          </h1>
          <p className="text-xl text-slate-200 mb-8 leading-relaxed">
            Permanently installed UT thickness sensors, pressure and temperature transmitters, H2S / CH4 / CO /
            SO2 gas detectors, gamma radiation probes, and vibration accelerometers — all read into a single
            geo-bound 3D twin over Modbus, OPC-UA, MQTT, HART, Profibus, and Foundation Fieldbus. Read-only,
            IEC 62443 compliant, never writes to the DCS.
          </p>
          <div className="flex flex-wrap gap-3 text-sm">
            <span className="bg-white/10 px-3 py-1 rounded">IEC 62443 zoned</span>
            <span className="bg-white/10 px-3 py-1 rounded">Read-only from DCS</span>
            <span className="bg-white/10 px-3 py-1 rounded">1s hot, 10y cold retention</span>
            <span className="bg-white/10 px-3 py-1 rounded">Maximo / SAP PM wired</span>
          </div>
        </div>
      </section>

      {/* Why IoT on twin */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Why IoT data belongs on the twin</h2>
          <p className="mb-4 leading-relaxed">
            Plant historians already store millions of tag traces per day. The problem is not data availability;
            the problem is spatial context. A reliability engineer looking at "PT-2041-rising" on a PI trend has
            no visual anchor for where that transmitter sits, which vessel it serves, or which upstream inlet
            might be fouling. A 3D twin with live IoT overlay fixes that: PT-2041 becomes a pulsing pin on the
            exchanger shell, its trace opens on click, and the correlated TT on the opposite nozzle is visually
            one metre away.
          </p>
          <p className="leading-relaxed">
            The Atlantis IoT layer is engineered around three non-negotiables: (1) read-only from the control
            system, (2) geo-bound to the LIDAR-sourced twin at millimetre accuracy, (3) retention aligned to
            regulator requirements — API 570, API 510, ADNOC COP, Saudi Aramco SAES-W-010, KEPIC, and PETRONAS
            PTS. No shortcuts on any of the three.
          </p>
        </div>
      </section>

      {/* Sensor matrix */}
      <section className="bg-white py-16 px-6 border-y border-slate-200">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Supported sensor types</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-slate-100">
                  <th className="border border-slate-300 p-3 text-left">Sensor</th>
                  <th className="border border-slate-300 p-3 text-left">Typical device</th>
                  <th className="border border-slate-300 p-3 text-left">Protocol</th>
                  <th className="border border-slate-300 p-3 text-left">Twin role</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="border border-slate-300 p-3">UT wall thickness</td><td className="border border-slate-300 p-3">Permasense WT210, Ionix HotSense, Sensor Networks Smartpim</td><td className="border border-slate-300 p-3">WirelessHART / ISA100</td><td className="border border-slate-300 p-3">Corrosion rate, RUL via ASME B31G</td></tr>
                <tr className="bg-slate-50"><td className="border border-slate-300 p-3">Acoustic emission</td><td className="border border-slate-300 p-3">MISTRAS Sensor Highway III</td><td className="border border-slate-300 p-3">TCP / proprietary</td><td className="border border-slate-300 p-3">Crack initiation, leak source location</td></tr>
                <tr><td className="border border-slate-300 p-3">Eddy current array</td><td className="border border-slate-300 p-3">Eddyfi Reddy, Olympus OmniScan ECA</td><td className="border border-slate-300 p-3">Ethernet file drop</td><td className="border border-slate-300 p-3">Tube bundle condition map</td></tr>
                <tr className="bg-slate-50"><td className="border border-slate-300 p-3">RTD temperature</td><td className="border border-slate-300 p-3">Rosemount 644, Yokogawa YTA610</td><td className="border border-slate-300 p-3">HART / Foundation Fieldbus</td><td className="border border-slate-300 p-3">Process temperature, skin temperature</td></tr>
                <tr><td className="border border-slate-300 p-3">Pressure transmitter</td><td className="border border-slate-300 p-3">Rosemount 3051, Yokogawa EJX, Endress PMP71</td><td className="border border-slate-300 p-3">HART / Profibus PA</td><td className="border border-slate-300 p-3">Line pressure, differential, level</td></tr>
                <tr className="bg-slate-50"><td className="border border-slate-300 p-3">Gas detector H2S / CH4 / CO / SO2</td><td className="border border-slate-300 p-3">Dräger Polytron 8000, Honeywell Searchpoint Optima, MSA Ultima X</td><td className="border border-slate-300 p-3">Modbus RTU / 4–20 mA</td><td className="border border-slate-300 p-3">Leak localisation, LEL plume rendering</td></tr>
                <tr><td className="border border-slate-300 p-3">Radiation gamma probe</td><td className="border border-slate-300 p-3">Mirion SPIR-Ident, Thermo RadEye GF-10, Ludlum 375</td><td className="border border-slate-300 p-3">Modbus TCP / proprietary</td><td className="border border-slate-300 p-3">Dose-rate zones, ALARA planning</td></tr>
                <tr className="bg-slate-50"><td className="border border-slate-300 p-3">Vibration accelerometer</td><td className="border border-slate-300 p-3">Emerson AMS 9420, SKF IMx, Bently Nevada 3500</td><td className="border border-slate-300 p-3">OPC-UA / Modbus TCP</td><td className="border border-slate-300 p-3">API 670 bearing health, shaft dynamics</td></tr>
                <tr><td className="border border-slate-300 p-3">Corrosion ER / LPR probe</td><td className="border border-slate-300 p-3">Cosasco Microcor, Metal Samples MS3500E</td><td className="border border-slate-300 p-3">Modbus RTU / wireless</td><td className="border border-slate-300 p-3">Corrosion rate in process fluid</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Protocols */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Protocol coverage</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="border border-slate-200 rounded p-5 bg-white">
              <h3 className="font-semibold mb-1">Modbus RTU / TCP</h3>
              <p className="text-sm text-slate-700">Universal legacy protocol. Polled at 1–5 second intervals through edge gateway. Used for most brownfield integrations.</p>
            </div>
            <div className="border border-slate-200 rounded p-5 bg-white">
              <h3 className="font-semibold mb-1">OPC-UA</h3>
              <p className="text-sm text-slate-700">Preferred path for modern DCS historian taps. Subscription model with change-of-value delivery; signed and encrypted at the session layer.</p>
            </div>
            <div className="border border-slate-200 rounded p-5 bg-white">
              <h3 className="font-semibold mb-1">MQTT</h3>
              <p className="text-sm text-slate-700">Used for cellular-connected remote well-pads, solar-powered wireless UT nodes, and ATEX wireless gas detectors. TLS 1.3 with client certificates.</p>
            </div>
            <div className="border border-slate-200 rounded p-5 bg-white">
              <h3 className="font-semibold mb-1">HART over 4–20 mA</h3>
              <p className="text-sm text-slate-700">Legacy transmitter digital overlay. Read through HART multiplexer (MTL, Pepperl+Fuchs) without interrupting the control signal.</p>
            </div>
            <div className="border border-slate-200 rounded p-5 bg-white">
              <h3 className="font-semibold mb-1">Profibus DP / PA</h3>
              <p className="text-sm text-slate-700">Class 2 master tap for read-only diagnostic and process values. Common in European refineries and older petrochemical units.</p>
            </div>
            <div className="border border-slate-200 rounded p-5 bg-white">
              <h3 className="font-semibold mb-1">Foundation Fieldbus H1</h3>
              <p className="text-sm text-slate-700">Read via H1 linking device or DCS historian tap. Supports instrument diagnostic blocks for transmitter health.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard architecture */}
      <section className="bg-white py-16 px-6 border-y border-slate-200">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Live dashboard architecture</h2>
          <p className="mb-4 leading-relaxed">
            The Atlantis twin presents sensor data through a browser-based 3D viewer. The architecture is
            three-tier and fully inside the operator's tenant boundary — no Atlantis-hosted cloud in the live
            path once commissioned.
          </p>
          <ol className="list-decimal pl-6 space-y-3 mb-4">
            <li><strong>Edge tier:</strong> Siemens SIMATIC IOT2050 or Moxa ioThinx 4510 reads protocols, buffers locally, and forwards over TLS 1.3 to the plant DMZ.</li>
            <li><strong>Plant tier:</strong> Time-series store (InfluxDB, TimescaleDB, or PI AF) plus a twin metadata graph (Neo4j or ArangoDB) link every trace to its 3D coordinate.</li>
            <li><strong>Presentation tier:</strong> WebGL twin viewer with live WebSocket push from the plant tier. Runs inside the operator's corporate browser, works on any engineer's laptop without a client install.</li>
          </ol>
          <p className="leading-relaxed">
            Latency from tag update to visible change on screen is typically under 1.5 seconds across a well-sized
            plant WAN. For offshore assets with intermittent satellite connectivity the edge tier caches and
            replays in order, so onshore operations centres see a delayed but complete trace.
          </p>
        </div>
      </section>

      {/* Retention */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Data retention</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-slate-100">
                  <th className="border border-slate-300 p-3 text-left">Tier</th>
                  <th className="border border-slate-300 p-3 text-left">Resolution</th>
                  <th className="border border-slate-300 p-3 text-left">Retention</th>
                  <th className="border border-slate-300 p-3 text-left">Aligned to</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="border border-slate-300 p-3">Hot</td><td className="border border-slate-300 p-3">1 second</td><td className="border border-slate-300 p-3">90 days</td><td className="border border-slate-300 p-3">Operational dashboards</td></tr>
                <tr className="bg-slate-50"><td className="border border-slate-300 p-3">Warm</td><td className="border border-slate-300 p-3">1 minute</td><td className="border border-slate-300 p-3">24 months</td><td className="border border-slate-300 p-3">Trend analysis, AI training</td></tr>
                <tr><td className="border border-slate-300 p-3">Cold</td><td className="border border-slate-300 p-3">15 minutes</td><td className="border border-slate-300 p-3">Asset life + 10 years</td><td className="border border-slate-300 p-3">API 510 / 570 records, regulator audit</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Use cases */}
      <section className="bg-white py-16 px-6 border-y border-slate-200">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Use cases</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">FPSO topside</h3>
              <p className="leading-relaxed">Permanently installed UT thickness sensors on riser inboard piping feed the twin continuously. Compressor vibration streams through OPC-UA from the Bently Nevada rack. Gas detectors on gas compression modules surface as live plume volumes inside the 3D module. Onshore operations centre sees the same view as the CCR, enabling remote reliability engineering.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Refinery CDU and hydrocracker</h3>
              <p className="leading-relaxed">Skin temperature RTDs on fired heater tubes, wireless UT at known high-corrosion locations, and AE sensors on the hydrocracker reactor dome. Every reading tied to its tag in the twin, every breach triggers a Maximo work order with the asset already tagged. The inspection engineer opens the work order inside the twin viewer.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">LNG terminal</h3>
              <p className="leading-relaxed">Open-path IR methane detectors render leak plume envelopes in 3D. Cryogenic temperature probes on tank inner shells feed roll-over risk models. BOG compressor vibration monitored to API 670 with the twin showing trend and spectrum against the machine geometry. All data retention meets the methane emissions reporting regimes in EU MRV, US EPA Subpart W, and OGMP 2.0.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How-to */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Integration workflow</h2>
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

      {/* Cross-links */}
      <section className="py-16 px-6 bg-slate-900 text-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Integrate with the rest of the twin</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Link to="/digital-twins/lidar-scan-to-twin" className="block border border-white/20 p-5 rounded hover:bg-white/5">
              <h3 className="font-semibold mb-2">LIDAR Scan to Twin</h3>
              <p className="text-sm text-slate-300">Leica / FARO / Z+F / Trimble capture at 5 mm RMS.</p>
            </Link>
            <Link to="/digital-twins/ai-predictive-analytics" className="block border border-white/20 p-5 rounded hover:bg-white/5">
              <h3 className="font-semibold mb-2">AI Predictive Analytics</h3>
              <p className="text-sm text-slate-300">LSTM, XGBoost, PINN for RUL and anomaly.</p>
            </Link>
            <Link to="/digital-twins/ndt-data-overlay" className="block border border-white/20 p-5 rounded hover:bg-white/5">
              <h3 className="font-semibold mb-2">NDT Data Overlay</h3>
              <p className="text-sm text-slate-300">UT, PAUT, RT, MT, PT, ECT, AET on the 3D twin.</p>
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
