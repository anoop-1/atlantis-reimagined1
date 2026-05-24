import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";

const CANONICAL = "https://atlantisndt.com/digital-twins/ai-predictive-analytics";

const FAQ = [
  {
    q: "Which model families does Atlantis deploy for predictive maintenance?",
    a: "Four families, chosen per problem class. Long short-term memory (LSTM) and temporal convolutional networks for time-series forecasting — typical targets are skin temperature drift on fired heater tubes or vibration trend on rotating equipment. Gradient-boosted trees (XGBoost, LightGBM) for tabular classification — for example classifying corrosion rate regime from process composition plus temperature plus flow. Transformer-based anomaly detection (a bespoke variant of the Anomaly Transformer architecture) for unsupervised novelty detection on historian traces. Physics-informed neural networks (PINN) for remaining useful life where the underlying degradation mechanism — high-temperature creep, hydrogen-induced cracking, sulphidation — has a defensible physics model we bake into the loss function.",
  },
  {
    q: "What accuracy do your RUL models achieve?",
    a: "On fired heater tubes with 3+ years of skin temperature and composition history, our PINN-based creep RUL models achieve a mean absolute percentage error of 9–14% on the validation fold, measured at the point of first observable dimensional creep. On rotating equipment bearing failure, LSTM models reach recall of 0.92 at a 14-day warning horizon with false positive rate below one per machine per year. We publish confusion matrices and reliability plots for every model as part of commissioning handover.",
  },
  {
    q: "Is the RBI scoring aligned to API 580 / 581?",
    a: "Yes. Risk-based inspection scoring follows the API 581 quantitative methodology: probability of failure from damage mechanism susceptibility and inspection effectiveness, consequence of failure from flammable / toxic / environmental / business impact. AI adjusts the damage factor dynamically as new UT, PAUT, or sensor readings arrive — but the scoring logic itself remains auditable against the API 581 clause reference. Every score change is logged with the underlying data delta so an inspector can defend the ranking to a third-party auditor.",
  },
  {
    q: "How do your models integrate with SAP PM, Maximo, and Oracle eAM?",
    a: "Two-way. We pull asset master data, functional location hierarchy, and work-order history out of the CMMS so the model trains on real failure labels. Predictions flow back as prioritised work-order recommendations with the predicted failure mode, recommended NDT method, and ASNT Level required. The inspection engineer reviews in the CMMS UI they already use; the twin provides the 3D context on request.",
  },
  {
    q: "How much historian data is needed to train a useful model?",
    a: "For supervised failure prediction, a minimum of two confirmed failure events per target asset class, plus 18–36 months of process data. For unsupervised anomaly detection, 6 months of process data is enough to establish the normal operating envelope. For PINN-based RUL, we can produce useful models with as little as 6 months of data because the physics model carries most of the inductive bias — the network just learns the residual.",
  },
  {
    q: "What about data quality and sensor drift?",
    a: "Every training pipeline begins with a data-quality pass: Hampel filter for transient spikes, constant-value detection for stuck transmitters, cross-correlation checks for swapped tags, and HART transmitter diagnostic integration where available. Models carry an uncertainty estimate — MC dropout or deep ensembles depending on family — so that when sensor drift increases, predictions widen their confidence band rather than silently misfiring.",
  },
  {
    q: "Do the models run on the operator's infrastructure or in your cloud?",
    a: "Operator's choice. Most oil and gas clients require on-premise inference, and we deploy containerised models onto Kubernetes inside the plant DMZ or in the operator's Azure / AWS tenant. Training can run in the operator's environment or in a segregated Atlantis environment with signed data transfer under NDA. We never retain operator operational data beyond the contracted engagement.",
  },
  {
    q: "How do you handle model governance and regulator acceptance?",
    a: "Every model has a model card documenting training data, feature list, performance, known failure modes, and responsible engineer. Model updates are version-controlled and require sign-off from an ASNT Level III inspection specialist plus a chartered engineer. For regulated assets — ADNOC, Saudi Aramco, KEPIC, PETRONAS — the model output is always advisory; final fitness-for-service decisions remain with the qualified inspector. This is a non-negotiable governance rule across every deployment.",
  },
];

const HOWTO_STEPS = [
  { name: "Define the decision", text: "Start from the inspection or maintenance decision the model must improve — not from the available data. Typical: 'Can we extend this vessel's next internal inspection from 4 to 6 years?'" },
  { name: "Data assembly", text: "Pull historian tags, CMMS failure history, NDT inspection results, lab corrosion coupons. Label failure events and near-misses." },
  { name: "Feature engineering", text: "Derive corrosion drivers (temperature, composition, velocity), thermal cycling counts, operating hours, inspection-to-inspection thickness delta. Domain-led not blind." },
  { name: "Model train and validate", text: "Time-based cross-validation (never random splits on time series). Hold out the most recent 6 months. Calibrate uncertainty." },
  { name: "Shadow deployment", text: "Run live for 3–6 months alongside the current decision process. Measure calibration drift, false-alarm rate, missed events." },
  { name: "RBI score integration", text: "Couple model output to API 581 damage factor, producing adjusted inspection intervals and risk ranks." },
  { name: "Governance and handover", text: "Model card signed off. Monitoring dashboard live. Retrain triggers defined on data drift and new failure events." },
];

export default function DigitalTwinsAi() {
  return (
    <main className="bg-slate-50 text-slate-900">
      <SEOHead
        title="AI Predictive Analytics for Digital Twins | Atlantis NDT"
        description="LSTM, XGBoost, PINN for RUL and anomaly detection on refinery digital twins. API 580/581 RBI scoring. SAP PM, Maximo, Oracle eAM integrated."
        canonical={CANONICAL}
        faq={FAQ}
        breadcrumb={[
          { name: "Home", item: "https://atlantisndt.com/" },
          { name: "Digital Twins", item: "https://atlantisndt.com/digital-twins" },
          { name: "AI Predictive Analytics", item: CANONICAL },
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
            <span>AI Predictive Analytics</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            AI Predictive Analytics on Industrial Digital Twins
          </h1>
          <p className="text-xl text-slate-200 mb-8 leading-relaxed">
            Remaining useful life forecasting, anomaly detection, corrosion rate projection, and API 580 / 581
            risk-based inspection scoring — powered by LSTM, XGBoost, physics-informed neural networks, and
            transformer anomaly detection trained on your historian, CMMS, and NDT records. Always advisory,
            always auditable, always ASNT Level III sign-off.
          </p>
          <div className="flex flex-wrap gap-3 text-sm">
            <span className="bg-white/10 px-3 py-1 rounded">API 581 aligned</span>
            <span className="bg-white/10 px-3 py-1 rounded">On-prem inference</span>
            <span className="bg-white/10 px-3 py-1 rounded">Model cards per asset</span>
            <span className="bg-white/10 px-3 py-1 rounded">9-14% MAPE on RUL</span>
          </div>
        </div>
      </section>

      {/* Model architectures */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Model architectures</h2>
          <p className="mb-6 leading-relaxed">
            We pick the smallest model family that can do the job honestly. Most industrial degradation problems
            do not need a billion-parameter model; they need a well-engineered feature set, a defensible physics
            prior, and a calibrated uncertainty estimate. That discipline is why our models survive production.
          </p>
          <div className="space-y-6">
            <div className="border-l-4 border-slate-900 pl-5">
              <h3 className="text-xl font-semibold mb-1">LSTM for time-series</h3>
              <p className="leading-relaxed">Long short-term memory networks and their temporal convolutional cousins forecast continuous signals — skin temperature drift, vibration trend, wall-thickness depletion. Trained on 18–36 months of historian data, validated on forward-holdout windows. Deployed at 15-minute inference cadence for most assets.</p>
            </div>
            <div className="border-l-4 border-slate-900 pl-5">
              <h3 className="text-xl font-semibold mb-1">XGBoost for tabular classification</h3>
              <p className="leading-relaxed">Gradient-boosted trees remain the workhorse for structured classification — "is this corrosion regime sulphidic or naphthenic given T, composition, flow?", "will this weld pass PAUT on next inspection given time since last, operating cycles, and mechanism susceptibility?". Cheap to retrain, explainable via SHAP, regulator-friendly.</p>
            </div>
            <div className="border-l-4 border-slate-900 pl-5">
              <h3 className="text-xl font-semibold mb-1">Transformer anomaly detection</h3>
              <p className="leading-relaxed">Unsupervised novelty detection on multivariate historian traces. Learns the joint distribution of normal operation and flags excursions that univariate alarm limits miss. Used to catch the weird-but-not-alarming signatures that precede real failures by weeks.</p>
            </div>
            <div className="border-l-4 border-slate-900 pl-5">
              <h3 className="text-xl font-semibold mb-1">Physics-informed neural networks (PINN) for RUL</h3>
              <p className="leading-relaxed">Where the degradation mechanism has a known physics model — Larson-Miller for creep, API RP 571 for HIC, Monkman-Grant for rupture — we embed the physics into the loss function. The network learns only the residual the physics cannot explain. Generalises far better on small data and its predictions are defensible to a fitness-for-service reviewer.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Training data */}
      <section className="bg-white py-16 px-6 border-y border-slate-200">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Training data sources</h2>
          <ul className="list-disc pl-6 space-y-3">
            <li><strong>Process historian</strong> — OSIsoft PI System, AVEVA PI, Honeywell Uniformance PHD, Yokogawa Exaquantum. Pulled via PI AF SDK or OPC-HDA. Typical 200–800 tags per asset.</li>
            <li><strong>CMMS failure records</strong> — SAP PM, IBM Maximo, Oracle eAM. Work-order notifications, failure codes, root-cause findings, cost data.</li>
            <li><strong>NDT inspection history</strong> — UT thickness grids, PAUT reports, RT defect catalogues, MT/PT indications, all tied to the same asset tag as the historian data.</li>
            <li><strong>Lab corrosion coupons</strong> — monthly coupon weight-loss data gives ground-truth corrosion rate for the same system the UT sensors monitor.</li>
            <li><strong>Operating profile</strong> — feedstock composition, crude slate, throughput, unit line-up. Critical for damage-mechanism-aware models.</li>
            <li><strong>Maintenance history</strong> — last inspection date, last turnaround date, coating age, cathodic protection records.</li>
          </ul>
        </div>
      </section>

      {/* Accuracy benchmarks */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Accuracy benchmarks</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-slate-100">
                  <th className="border border-slate-300 p-3 text-left">Problem</th>
                  <th className="border border-slate-300 p-3 text-left">Model</th>
                  <th className="border border-slate-300 p-3 text-left">Metric</th>
                  <th className="border border-slate-300 p-3 text-left">Typical result</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="border border-slate-300 p-3">Fired-heater tube RUL</td><td className="border border-slate-300 p-3">PINN (Larson-Miller residual)</td><td className="border border-slate-300 p-3">MAPE</td><td className="border border-slate-300 p-3">9–14%</td></tr>
                <tr className="bg-slate-50"><td className="border border-slate-300 p-3">Vessel corrosion rate 12-mo ahead</td><td className="border border-slate-300 p-3">XGBoost</td><td className="border border-slate-300 p-3">R²</td><td className="border border-slate-300 p-3">0.71–0.83</td></tr>
                <tr><td className="border border-slate-300 p-3">Rotating equipment bearing failure 14-day lead</td><td className="border border-slate-300 p-3">LSTM</td><td className="border border-slate-300 p-3">Recall @ FPR 0.01</td><td className="border border-slate-300 p-3">0.90–0.93</td></tr>
                <tr className="bg-slate-50"><td className="border border-slate-300 p-3">Multivariate anomaly on CDU overhead</td><td className="border border-slate-300 p-3">Transformer AD</td><td className="border border-slate-300 p-3">Precision @ top-10 events/mo</td><td className="border border-slate-300 p-3">0.65–0.78</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-slate-600 mt-4">Ranges reflect variation across actual deployed assets. All models in production include MC-dropout or deep-ensemble uncertainty estimates and degrade safely on sensor drift.</p>
        </div>
      </section>

      {/* RBI scoring */}
      <section className="bg-white py-16 px-6 border-y border-slate-200">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">API 580 / 581 risk-based inspection scoring</h2>
          <p className="mb-4 leading-relaxed">
            The AI layer does not replace the RBI engineer. It adjusts the damage factor dynamically using
            incoming sensor and NDT data, then feeds that damage factor into the standard API 581 risk matrix.
            The consequence of failure side — flammable, toxic, environmental, business — remains the engineer's
            judgement, reviewed per the operator's own risk policy.
          </p>
          <p className="mb-4 leading-relaxed">
            Each asset gets a risk trace over time visible on the 3D twin. When a UT sensor reading pushes the
            computed corrosion rate into a new band, the damage factor recomputes, the risk score shifts, and
            the recommended inspection interval updates. All changes are audit-logged with the triggering data.
          </p>
          <p className="leading-relaxed">
            For operators in regions with prescriptive inspection codes — ADNOC COP, Saudi Aramco SAES-W-010,
            KEPIC, PETRONAS PTS — we run the AI-adjusted RBI alongside the code-prescribed minimum interval. The
            tighter of the two governs. This is the conservative defensible position and it keeps the regulator
            comfortable.
          </p>
        </div>
      </section>

      {/* Integration */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Integration with SAP PM, IBM Maximo, Oracle eAM</h2>
          <p className="mb-4 leading-relaxed">
            Predictions must land in the system the maintenance planner already uses. We write ranked work-order
            recommendations with predicted failure mode, recommended NDT method, ASNT Level required for the
            inspection, and the twin-viewer deep link so the inspector can jump to 3D context on click.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>SAP PM:</strong> MM/PM BAPI writes, IW28 priority lists updated on the operator's own calendar.</li>
            <li><strong>IBM Maximo:</strong> MIF XML inbound, work-order priority flagged via asset attribute.</li>
            <li><strong>Oracle eAM:</strong> SOA Gateway writes, work requests opened with engineering justification text.</li>
          </ul>
        </div>
      </section>

      {/* Case patterns */}
      <section className="bg-white py-16 px-6 border-y border-slate-200">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Case patterns</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">Fired heater tube failure prediction</h3>
              <p className="leading-relaxed">Skin temperature RTDs plus firebox temperature plus fuel composition feed a PINN with a Larson-Miller creep core. Output is tube-by-tube RUL with uncertainty band. Inspectors schedule visual and UT to the hottest-RUL tubes on the next planned outage, not the tubes the walk-down happened to see.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Vessel corrosion rate forecasting</h3>
              <p className="leading-relaxed">Historian temperature, flow, and composition plus UT thickness deltas from the last 5 years feed XGBoost. Output is a 12-month-ahead corrosion-rate forecast per thickness monitoring location. Drives the API 510 next-inspection-date recalculation on the twin.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Vibration drift on rotating equipment</h3>
              <p className="leading-relaxed">Bently Nevada or SKF IMx vibration spectra streamed through an LSTM. Model detects drift patterns (harmonics shifts, bearing fault frequencies appearing) 10–21 days before API 670 alarm thresholds. Opens a Maximo work order with recommended inspection type — often an Eddyfi ECT bearing inspection before any catastrophic failure.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How-to */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Deployment workflow</h2>
          <ol className="space-y-5">
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
          <h2 className="text-3xl font-bold mb-6">The rest of the digital twin</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Link to="/digital-twins/lidar-scan-to-twin" className="block border border-white/20 p-5 rounded hover:bg-white/5">
              <h3 className="font-semibold mb-2">LIDAR Scan to Twin</h3>
              <p className="text-sm text-slate-300">Geometry foundation for every model.</p>
            </Link>
            <Link to="/digital-twins/iot-sensor-integration" className="block border border-white/20 p-5 rounded hover:bg-white/5">
              <h3 className="font-semibold mb-2">IoT Sensor Integration</h3>
              <p className="text-sm text-slate-300">Live data streams feeding the AI layer.</p>
            </Link>
            <Link to="/digital-twins/ndt-data-overlay" className="block border border-white/20 p-5 rounded hover:bg-white/5">
              <h3 className="font-semibold mb-2">NDT Data Overlay</h3>
              <p className="text-sm text-slate-300">Ground truth from inspection records.</p>
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
