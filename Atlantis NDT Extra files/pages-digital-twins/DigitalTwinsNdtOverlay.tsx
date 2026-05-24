import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";

const CANONICAL = "https://atlantisndt.com/digital-twins/ndt-data-overlay";

const FAQ = [
  {
    q: "What does NDT data overlay on a digital twin actually mean?",
    a: "It means every non-destructive test result — a UT wall-thickness reading, a PAUT A/B/C scan, a radiographic film, a magnetic-particle crack indication, an eddy-current C-scan, an acoustic-emission event, a VT photograph — is attached to the exact 3D coordinate on the asset where it was captured. Click a flange in the twin viewer and you see every inspection ever performed on that flange, colour-coded by age, severity, and method. Click deeper and you see the original raw data, the technician's ASNT certification number, and the calibration certificate of the instrument used. The twin is the spatial index; the NDT data is the payload. Without the overlay, inspection data rots in PDF folders; with it, inspection data becomes the operational memory of the plant.",
  },
  {
    q: "How precisely is a UT thickness reading located on the 3D model?",
    a: "To within 5–10 mm in most cases, 2–3 mm in precision mode. Field technicians mark thickness monitoring locations (TMLs) with durable low-stress stamps and register them against the LIDAR point cloud using a calibrated handheld probe or coded targets. Every reading is stored with (x, y, z, asset_tag, tml_id, date, probe_serial, technician_id, calibration_cert). The twin viewer renders the TML as a 3D pin whose colour encodes remaining wall percentage against the corrosion allowance, and whose size encodes reading age.",
  },
  {
    q: "Can PAUT scans be registered to the 3D weld geometry?",
    a: "Yes. Phased array scans are captured with an encoder along the weld. During registration we map the encoder path onto the 3D weld centreline extracted from the twin mesh, so every A-scan index is a real 3D coordinate on the weld surface. The C-scan projects as a coloured ribbon along the weld; click any defect indication and the corresponding A-scan opens with beam angle, gate position, and amplitude. Supported scanner files include Olympus OmniScan MX2 / X3 native, Eddyfi M2M Gekko, and Sonatest Veo 16:128 exports.",
  },
  {
    q: "What about radiographic testing — how do 2D films project onto a 3D weld?",
    a: "Computed radiography (CR) and digital radiography (DR) images are handled differently from legacy film. For CR / DR we have the pixel-to-millimetre calibration and the exposure geometry (source-to-film distance, source offset, film position). We project the 2D defect map onto the 3D weld using the inverse of the exposure geometry, so a porosity cluster that appears at pixel (x, y) on the film becomes a 3D region on the weld with correct foreshortening. Legacy film scans are handled with best-effort planar projection plus a manual registration check by the reviewing ASNT Level II technician.",
  },
  {
    q: "How are magnetic particle and liquid penetrant indications captured?",
    a: "As point indications with attributes. The technician photographs each indication with a camera that has a scale card and fiducial markers, then pins the indication on the twin via a tablet workflow. Each pin carries coordinates, length, apparent width or depth where known, and a classification (linear, rounded, cluster). For MT specifically we also record technique — dry or wet, AC or DC yoke, continuous or residual — so a reviewer understands the inspection envelope.",
  },
  {
    q: "Can eddy-current array coverage be shown on the twin?",
    a: "Yes, and this is one of the most valuable overlays for heat-exchanger tube-bundle inspection. Eddyfi Reddy and Olympus OmniScan ECA scans produce C-scans per tube and per region. We project those C-scans onto the 3D tube sheet and the 3D tube lengths, so a reliability engineer sees tube-by-tube condition at a glance — pitting in blue, wall loss in yellow, through-wall in red. Coverage gaps show as white, which prevents the classic 'we assumed they scanned everything' mistake.",
  },
  {
    q: "How is acoustic emission data triangulated onto the twin?",
    a: "An AE test uses a sensor array on the vessel or pipe. Event source location comes from time-of-arrival differences across the array. We register every sensor to its 3D coordinate on the twin, and the AE system's computed source locations project into the 3D model as event spheres whose radius encodes amplitude and colour encodes event cluster. Live AE during vessel pressure testing can be streamed into the twin so the test engineer sees emerging leak sources in real time.",
  },
  {
    q: "How does this connect to API 510 / 570 / 580 fitness-for-service decisions?",
    a: "The overlay makes fitness-for-service (FFS) analysis auditable. API 510 for pressure vessels and API 570 for piping both require location-linked inspection records and remaining-life calculations. With the twin, the ASME B31G remaining-strength calculation runs automatically when a new UT grid is uploaded, comparing minimum reading to retirement thickness, and the result lives on the asset. API 580 risk ranking updates accordingly. API 579 Level 1 FFS assessments can be kicked off directly from the twin, with the inspector's starting data pre-populated from the overlay.",
  },
  {
    q: "Do regulators accept digital-twin-hosted inspection records?",
    a: "Yes, with caveats. ADNOC COP, Saudi Aramco SAES-W-010, PETRONAS PTS, KEPIC, and most jurisdictional pressure-equipment regulators accept digital records provided they are tamper-evident, exportable to portable formats (PDF/A for reports, DICONDE for PAUT and RT), and retained for the asset life plus 10 years. Every Atlantis twin meets all three. For regulated assets we always produce a parallel PDF/A inspection report per campaign so the regulator never needs to log into the twin to complete their review.",
  },
  {
    q: "What happens if a technician's certification expires — does the twin flag it?",
    a: "Yes. Every inspection record is tied to the technician identity and that identity carries the ASNT Level (I, II, or III), certification method, issue date, and expiry. If a UT reading was captured by a Level II technician whose certification later expired, the twin surfaces a warning on that reading. It does not invalidate the record — the reading was valid at capture time — but it ensures reviewers see the context. For Level III sign-off on procedures and interpretations the twin enforces that the signatory was Level III at the date of sign-off, not at the date of review.",
  },
];

const HOWTO_STEPS = [
  { name: "Twin readiness check", text: "Confirm LIDAR-based twin is registered, asset-tagged, and linked to P&ID tag graph. Every asset must have a stable tag before NDT overlay begins." },
  { name: "TML and weld mapping", text: "All thickness monitoring locations and critical welds identified on the 3D model with stable IDs. TMLs physically marked on metal with low-stress stamps." },
  { name: "Inspection campaign planning", text: "Inspection plan generated from the twin: methods per asset, coverage map, ASNT Level required per method, personnel rostered." },
  { name: "Field capture", text: "Technicians capture UT, PAUT, RT, MT, PT, ECT, AET, VT per written procedures. Each reading tagged in the field against the twin asset ID via tablet." },
  { name: "Raw data ingest", text: "Raw files (OmniScan, Reddy, DICONDE RT, photos) uploaded to the twin. Atlantis pipeline parses, registers to geometry, and renders overlay." },
  { name: "Level III review", text: "ASNT Level III reviews indications, signs interpretations, promotes the campaign to 'accepted'. The twin locks the record once signed." },
  { name: "FFS and RBI recompute", text: "ASME B31G / API 579 / API 581 calculations re-run against new data. Risk scores update, inspection intervals re-planned." },
  { name: "Export and archive", text: "PDF/A campaign report generated for the regulator. DICONDE export retained for the PAUT and RT datasets. Raw data retained for asset life + 10 years." },
];

const NDT_METHODS = [
  { name: "UT", desc: "Ultrasonic testing — pulse-echo wall thickness and flaw detection via high-frequency sound waves." },
  { name: "PAUT", desc: "Phased array ultrasonic testing — electronically steered and focused ultrasonic beams producing A, B, and C scans of weldments and volumetric flaws." },
  { name: "RT", desc: "Radiographic testing — volumetric flaw imaging using X-ray or gamma sources, delivered via film, computed radiography (CR), or digital radiography (DR)." },
  { name: "MT", desc: "Magnetic particle testing — surface and near-surface crack detection in ferromagnetic materials using magnetic flux and iron particles." },
  { name: "PT", desc: "Liquid penetrant testing — surface crack detection by capillary action of a dye penetrant into discontinuities." },
  { name: "ECT", desc: "Eddy current testing — surface and near-surface flaw detection in conductive materials using induced electrical currents." },
  { name: "AET", desc: "Acoustic emission testing — detection of transient elastic waves emitted by crack growth or leaks during loading." },
  { name: "VT", desc: "Visual testing — direct or remote visual inspection, including borescope and drone-assisted capture, with dimensional and photographic documentation." },
];

export default function DigitalTwinsNdtOverlay() {
  return (
    <main className="bg-slate-50 text-slate-900">
      <SEOHead
        title="NDT Data Overlay on Digital Twin | UT, PAUT, RT, MT, ECT"
        description="Project UT thickness, PAUT, RT, MT, PT, ECT, AET, VT onto a 3D digital twin. API 510/570/580 aligned. ASNT Level III signed. Atlantis NDT."
        canonical={CANONICAL}
        faq={FAQ}
        breadcrumb={[
          { name: "Home", item: "https://atlantisndt.com/" },
          { name: "Digital Twins", item: "https://atlantisndt.com/digital-twins" },
          { name: "NDT Data Overlay", item: CANONICAL },
        ]}
        alternates={[{ hrefLang: "en", href: CANONICAL }]}
      />

      {/* DefinedTermSet schema for NDT methods */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "DefinedTermSet",
            name: "Non-Destructive Testing (NDT) Methods Overlaid on Digital Twin",
            hasDefinedTerm: NDT_METHODS.map((m) => ({
              "@type": "DefinedTerm",
              name: m.name,
              description: m.desc,
              inDefinedTermSet: CANONICAL,
            })),
          }),
        }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-700 text-white py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <nav className="text-sm text-slate-300 mb-4">
            <Link to="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <Link to="/digital-twins" className="hover:text-white">Digital Twins</Link>
            <span className="mx-2">/</span>
            <span>NDT Data Overlay</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            NDT Data Overlay on a Digital Twin — UT, PAUT, RT, MT, PT, ECT, AET, VT
          </h1>
          <p className="text-xl text-slate-200 mb-8 leading-relaxed">
            The deepest treatment of non-destructive test data overlay on the open web. Method-by-method,
            coordinate-accurate, ASNT Level III signed, aligned to API 510 pressure vessel code, API 570 piping
            code, API 580 risk-based inspection, API 579 fitness-for-service, ASME B31G remaining-strength, and
            accepted by ADNOC, Saudi Aramco, PETRONAS, and KEPIC.
          </p>
          <div className="flex flex-wrap gap-3 text-sm">
            <span className="bg-white/10 px-3 py-1 rounded">Coordinate-accurate</span>
            <span className="bg-white/10 px-3 py-1 rounded">ASNT Level III signed</span>
            <span className="bg-white/10 px-3 py-1 rounded">DICONDE export</span>
            <span className="bg-white/10 px-3 py-1 rounded">PDF/A regulator report</span>
            <span className="bg-white/10 px-3 py-1 rounded">Asset life + 10yr retention</span>
          </div>
        </div>
      </section>

      {/* Why NDT needs to live on the twin */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Why NDT data needs to live on the twin</h2>
          <p className="mb-4 leading-relaxed">
            Every refinery, FPSO, LNG terminal, and petrochemical site has a shelf of NDT reports nobody opens.
            Thousands of PDFs, hundreds of radiographic films, boxes of PAUT DICONDE files on external hard
            drives — captured at real expense, signed by qualified technicians, and then filed somewhere the
            reliability engineer cannot find them when they matter. The data exists; it is just not
            decision-useful.
          </p>
          <p className="mb-4 leading-relaxed">
            The digital twin solves this by making the 3D asset the primary index. The plant's physical reality
            is the lookup key. An inspector standing in front of a reboiler can open the twin on a tablet, tap
            the shell, and see every UT reading ever taken, every PAUT weld scan, every RT film, every MT crack
            indication, every ECT tube-sheet C-scan — sorted by date, colour-coded by severity, filterable by
            method and by technician. They know what was inspected, when, by whom, with what equipment, and how
            the result trends over time.
          </p>
          <p className="mb-4 leading-relaxed">
            This does three things that conventional inspection management does not: (1) it prevents duplicate
            inspections, because coverage is visible; (2) it prevents blind spots, because gaps are visible; and
            (3) it makes fitness-for-service analysis immediate, because the remaining-life calculation runs on
            live data instead of on a spreadsheet the corrosion engineer updates quarterly.
          </p>
          <p className="leading-relaxed">
            Atlantis is built around this conviction. We run one of the few pipelines on the market where the
            LIDAR crew, the IoT edge team, the AI modelling group, and the NDT inspection team all sit under a
            single contract. There is no integration seam between the scan vendor and the inspection house
            because it is the same house. That is the difference that lets us guarantee coordinate-accurate
            overlay, which is the only kind of overlay worth building.
          </p>
        </div>
      </section>

      {/* Method deep dive */}
      <section className="bg-white py-16 px-6 border-y border-slate-200">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-10">Method-by-method overlay deep dive</h2>

          {/* UT */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-3">(a) UT thickness — colour heatmap with ASME B31G remaining-life</h3>
            <p className="mb-3 leading-relaxed">
              Ultrasonic wall-thickness inspection is the single most common NDT method in process plants, and
              it is the method that benefits most from 3D overlay. A vessel shell typically has 40–200
              thickness monitoring locations; a long transfer line may have 500+. Keeping thickness trend
              straight across that many points in a spreadsheet is where mistakes are made.
            </p>
            <p className="mb-3 leading-relaxed">
              On the twin, each TML renders as a colour-coded 3D pin. The colour encodes remaining wall as a
              percentage of the corrosion allowance: green above 70%, yellow 40–70%, orange 20–40%, red below
              20%. Hover the pin and the full history opens: every reading since commissioning, the probe
              serial number, the technician's ASNT II certificate, the couplant type, the temperature at the
              time of inspection. The twin aggregates minimum / average / maximum per grid and plots the
              thickness trend with a linear-regression corrosion rate and a projected retirement date.
            </p>
            <p className="leading-relaxed">
              The ASME B31G remaining-strength calculation runs automatically for pipe TMLs, and API 579 Level 1
              for vessel shell TMLs. If the minimum reading is below retirement thickness, the asset colour on
              the twin shifts to red and a Maximo work order opens with the TML ID, last reading, retirement
              thickness, and the recommended next action (re-measure, repair clamp, full PAUT mapping, or
              fitness-for-service assessment).
            </p>
          </div>

          {/* PAUT */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-3">(b) PAUT — A/B/C scans registered to weld geometry</h3>
            <p className="mb-3 leading-relaxed">
              Phased array ultrasonic is the method of choice for weld volumetric inspection and for corrosion
              mapping of complex geometries. A typical PAUT weld scan produces a registered C-scan of the weld
              region plus one A-scan per index step. The overlay challenge is that the encoder path along the
              weld must correspond to real 3D coordinates on the twin.
            </p>
            <p className="mb-3 leading-relaxed">
              We solve this by extracting the weld centreline from the twin mesh and matching the encoder path
              to that centreline during data ingest. The C-scan then renders as a coloured ribbon along the
              weld, with amplitude or depth encoded in colour. Click any indication and the raw A-scan opens
              with beam angle, gate position, amplitude, and the technique used (scan plan identifier, probe
              type, wedge angle, frequency). The original DICONDE file is retained and can be exported for
              regulator audit.
            </p>
            <p className="leading-relaxed">
              Supported scanners: Olympus OmniScan MX2 and X3, Eddyfi M2M Gekko, Sonatest Veo 16:128, Zetec
              TopAZ. Native file formats parsed on ingest, no manual conversion. For corrosion-mapping PAUT
              scans on vessel shells we render the C-scan as a texture on the 3D surface so the remaining-wall
              map overlays exactly where measured.
            </p>
          </div>

          {/* RT */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-3">(c) RT / CR / DR — 2D defect maps projected onto 3D welds</h3>
            <p className="mb-3 leading-relaxed">
              Radiographic testing outputs a 2D image of a volumetric region. Projecting that image onto the 3D
              weld geometry requires the exposure geometry: source-to-film distance (SFD), source offset,
              film-to-weld geometry, and the pixel-to-millimetre calibration of the CR plate or DR detector. We
              capture this metadata at exposure time via a custom field workflow on tablets, so the inverse
              projection onto the 3D weld is deterministic.
            </p>
            <p className="mb-3 leading-relaxed">
              Defects read by the radiographer — porosity clusters, slag inclusions, lack of fusion, cracks —
              are marked on the 2D image and automatically projected onto the 3D weld as 3D regions with
              correct foreshortening and axial position. Legacy film scans lacking geometry metadata are
              handled with best-effort planar projection and a manual registration check by the reviewing
              technician; these are flagged in the twin so the reviewer knows the registration uncertainty.
            </p>
            <p className="leading-relaxed">
              All digital radiography is stored as DICONDE, retaining the full detector geometry and
              acquisition parameters. This matters for regulator acceptance — ADNOC, Saudi Aramco, and PETRONAS
              all require DICONDE-compliant archiving for digital radiographic records.
            </p>
          </div>

          {/* MT/PT */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-3">(d) MT / PT — surface crack indications with depth and length annotation</h3>
            <p className="mb-3 leading-relaxed">
              Magnetic particle and liquid penetrant tests catch surface and near-surface cracks the volumetric
              methods may miss on the surface. Their output is primarily photographic, with dimensional
              annotation by the technician. On the twin we render each indication as a pin with coordinates,
              length, apparent depth where probed, and the technique record: dry / wet particles, AC or DC
              yoke, continuous or residual magnetisation for MT; penetrant type, dwell time, developer type,
              and inspection lighting for PT.
            </p>
            <p className="mb-3 leading-relaxed">
              Each pin links to the original photograph with scale card visible. Photographs are retained at
              original resolution — compression is a mistake here because a reviewer may need to zoom to the
              indication months later. Indications are classified per the relevant acceptance standard (AWS
              D1.1, ASME BPVC Section V, API 650 for tanks) and the classification is visible in the twin.
            </p>
            <p className="leading-relaxed">
              When a crack indication is found, the twin automatically links to the nearest UT TML and the
              nearest PAUT scan of the same weld. This cross-method view — "MT found a 25 mm linear, the PAUT
              scan from 8 months ago in the same region showed nothing, the UT trend is flat" — is exactly the
              kind of situational awareness the inspector needs to make a repair-vs-monitor call.
            </p>
          </div>

          {/* ECT */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-3">(e) ECT — eddy current array coverage maps</h3>
            <p className="mb-3 leading-relaxed">
              Eddy current array inspection is the dominant method for heat-exchanger tube bundle condition
              assessment. An Eddyfi Reddy or Olympus OmniScan ECA scan produces a C-scan per tube. For a
              reboiler with 500 tubes, that is 500 separate scans to review and organise — historically done in
              spreadsheets with cryptic tube IDs.
            </p>
            <p className="mb-3 leading-relaxed">
              On the twin, the 3D tube sheet is a first-class geometry. Each tube is selectable. The ECT scan
              projects onto the tube length and the tube sheet hole shows an aggregate defect score. A
              reliability engineer can view the entire bundle in one colour-coded frame: blue for clean, yellow
              for measurable wall loss, orange for actionable defects, red for through-wall or plugged. White
              cells show uninspected tubes — coverage visibility that catches the "we thought they scanned
              everything" failure mode.
            </p>
            <p className="leading-relaxed">
              The same overlay works for ECA on welds and for surface ECT on non-ferromagnetic assets. All
              supported probes log their calibration state and every scan carries the cal-block reference used
              at the start of the shift.
            </p>
          </div>

          {/* AET */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-3">(f) AET — acoustic emission source location triangulated to asset</h3>
            <p className="mb-3 leading-relaxed">
              Acoustic emission testing detects transient elastic waves emitted by active damage — crack
              growth, leaks, fibre breaks in composite vessels. An AE test uses a sensor array; source location
              is computed from time-of-arrival differences across the array. The accuracy of the source
              location is limited by sensor spacing, wave velocity, and noise, but typically gives source
              position to within 5–10% of sensor spacing.
            </p>
            <p className="mb-3 leading-relaxed">
              We register each AE sensor to its exact 3D coordinate on the twin during test setup. Computed
              source locations then render directly on the 3D asset, as spheres whose radius encodes amplitude
              and colour encodes event cluster. Live AE during vessel pressure testing streams into the twin,
              letting the test engineer watch emerging leak sources develop in real time.
            </p>
            <p className="leading-relaxed">
              Post-test clustering is handled automatically — MISTRAS AEwin and Vallen VisualAE file formats
              parsed directly, event attributes preserved, and cluster summaries rendered on the twin. For
              periodic AE monitoring of fibre-reinforced composite tanks the twin keeps a running history of
              cluster evolution between tests.
            </p>
          </div>

          {/* VT */}
          <div>
            <h3 className="text-2xl font-semibold mb-3">(g) VT — photo evidence pinned to coordinate</h3>
            <p className="mb-3 leading-relaxed">
              Visual testing is the simplest and most ubiquitous method. On the twin it becomes dramatically
              more useful. Every photograph taken by an inspector, a drone, or a borescope is pinned to the 3D
              coordinate where it was captured, with date, camera, operator, and lighting conditions recorded.
              Drone photographs of flare tips, remote visual inspection borescope footage of vessel internals,
              and crawler-robot video from piping all land on the twin as geo-located evidence.
            </p>
            <p className="leading-relaxed">
              A simple but powerful pattern: the twin shows, for any asset, the most recent VT photograph and
              the age of that photograph. "Last seen" becomes visible per asset. The inspection planner fills
              the gaps — no asset goes uninspected because nobody noticed it had not been looked at in seven
              years.
            </p>
          </div>
        </div>
      </section>

      {/* Dashboard interaction */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Dashboard interaction model — one click to the source record</h2>
          <p className="mb-4 leading-relaxed">
            The overlay is only useful if reviewing a reading is as fast as ignoring it. Our interaction model
            is built around that rule. Click any indication — UT pin, PAUT A-scan, RT defect marker, MT pin,
            ECT tube, AE event, VT photo pin — and a side panel opens with the full source record:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li><strong>Raw data:</strong> original DICONDE / OmniScan / Reddy / image file, downloadable.</li>
            <li><strong>Technician identity:</strong> name, ASNT Level, certification method and issue / expiry date at time of capture.</li>
            <li><strong>Instrument:</strong> serial number, probe / wedge / frequency, last calibration certificate with traceability chain.</li>
            <li><strong>Procedure:</strong> the written procedure followed, revision number, and scan plan if applicable.</li>
            <li><strong>Acceptance criteria:</strong> applicable code clause (ASME BPVC Section V, API 570 clause, AWS D1.1) with the interpretation recorded.</li>
            <li><strong>Level III sign-off:</strong> signatory name, Level III certificate, signature date, and any comments.</li>
            <li><strong>Related records:</strong> nearest TML, most recent prior inspection of the same indication, any open fitness-for-service assessment.</li>
          </ul>
          <p className="leading-relaxed">
            The inspector never needs to leave the twin to answer "is this reading defensible?" — every
            traceability link is one click away. For the reliability engineer that means faster decisions. For
            the regulator that means an audit trail they can interrogate without a physical site visit.
          </p>
        </div>
      </section>

      {/* Code alignment */}
      <section className="bg-white py-16 px-6 border-y border-slate-200">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Alignment to API 510 / 570 / 580 fitness-for-service decisions</h2>
          <p className="mb-4 leading-relaxed">
            The overlay is the foundation for disciplined fitness-for-service practice. Each API code becomes
            straightforward to execute when the underlying inspection data is live, location-linked, and
            coverage-complete.
          </p>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-lg mb-1">API 510 — Pressure Vessel Inspection Code</h3>
              <p>UT thickness grids, PAUT weld scans, MT surface indications, and RT volumetric records are all location-linked to the vessel model. Inspection intervals are calculated automatically from corrosion rate and remaining wall. Internal visual inspection records are held alongside UT data. The twin supports both on-stream and internal inspection cycles.</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-1">API 570 — Piping Inspection Code</h3>
              <p>Line-by-line TML management. Corrosion circuit rationalisation is visualised on the twin — the engineer sees which TMLs cover which circuits. Inspection intervals calculated from minimum remaining life across each circuit. Small-bore and dead-leg piping inspection explicitly tracked because the twin shows every line in 3D and dead legs become obvious.</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-1">API 580 / 581 — Risk-Based Inspection</h3>
              <p>Probability of failure is recomputed as new UT, PAUT, ECT data arrives. Inspection effectiveness scoring is auditable from the twin because coverage is visible. Consequence of failure remains the responsibility of the RBI engineer. The twin surfaces the live risk matrix per asset and recommends inspection interval adjustments. All changes are logged with the triggering data.</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-1">API 579-1 / ASME FFS-1 — Fitness-for-Service</h3>
              <p>Level 1 FFS assessments can be launched directly from the twin when an out-of-limits reading is detected. Starting data — geometry, thickness, operating pressure, temperature, material — is pre-populated from the twin. The Level 1 calculation result is stored against the asset; Level 2 and Level 3 assessments are performed by qualified FFS engineers with the twin providing the single source of input data.</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-1">ASME B31G — Remaining Strength of Corroded Pipelines</h3>
              <p>Runs automatically on every pipe UT grid upload. Produces remaining-strength ratio, safe maximum operating pressure, and recommended next inspection. Results render on the twin as a colour band along the pipe.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Export */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Data export to inspection management systems</h2>
          <p className="mb-4 leading-relaxed">
            The twin does not replace a corporate inspection management system; it feeds one. We export to the
            operator's system of record in native format:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>PCMS (AVEVA / Wood) —</strong> TML-level thickness history, corrosion rate, next inspection date.</li>
            <li><strong>Meridium / GE APM —</strong> asset health index updates driven by live twin data.</li>
            <li><strong>IBM Maximo / SAP PM / Oracle eAM —</strong> work orders raised on threshold breach with asset tag, method, and Level required.</li>
            <li><strong>PI AF (OSIsoft / AVEVA) —</strong> structured events for every new inspection campaign so historian dashboards can query inspection context.</li>
            <li><strong>DICONDE archive —</strong> raw PAUT and digital radiography retained in regulator-accepted format.</li>
            <li><strong>PDF/A campaign report —</strong> auto-generated per inspection campaign, Level III signed, regulator-ready.</li>
          </ul>
        </div>
      </section>

      {/* Regulator acceptance */}
      <section className="bg-white py-16 px-6 border-y border-slate-200">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Regulator acceptance</h2>
          <p className="mb-4 leading-relaxed">
            Every major oil and gas regulator accepts digital inspection records provided three conditions are
            met: tamper-evidence, portability, and retention. Atlantis twins meet all three by design.
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li><strong>Tamper-evidence:</strong> append-only storage with hash-chained audit logs. Any modification is a new version; originals are preserved.</li>
            <li><strong>Portability:</strong> PDF/A for reports, DICONDE for PAUT and RT, CSV for TML histories, PCF for piping geometry, ISO 15926 for asset metadata.</li>
            <li><strong>Retention:</strong> asset life plus 10 years minimum. Retention tier automatically enforced in storage.</li>
          </ul>
          <p className="leading-relaxed">
            Named regulator acceptance: <strong>ADNOC COP</strong> (UAE), <strong>Saudi Aramco SAES-W-010 / SAEP-1142</strong> (Saudi Arabia), <strong>PETRONAS PTS</strong> (Malaysia), <strong>KEPIC</strong> (Korea), <strong>API 510 / 570 / 580</strong> (US and international default). European assets align to EN 13445, EN 13480, and PED 2014/68/EU.
          </p>
        </div>
      </section>

      {/* Workflow */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">End-to-end workflow</h2>
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
          <h2 className="text-3xl font-bold mb-6">How the overlay fits the full digital twin stack</h2>
          <p className="mb-8 text-slate-200">
            The NDT overlay is the payload that makes the twin earn its keep. The geometry, sensors, and
            analytics layers exist to serve it.
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            <Link to="/digital-twins/lidar-scan-to-twin" className="block border border-white/20 p-5 rounded hover:bg-white/5">
              <h3 className="font-semibold mb-2">LIDAR Scan to Twin</h3>
              <p className="text-sm text-slate-300">Millimetre geometry that anchors every NDT coordinate.</p>
            </Link>
            <Link to="/digital-twins/iot-sensor-integration" className="block border border-white/20 p-5 rounded hover:bg-white/5">
              <h3 className="font-semibold mb-2">IoT Sensor Integration</h3>
              <p className="text-sm text-slate-300">Live UT, vibration, gas, radiation as continuous NDT.</p>
            </Link>
            <Link to="/digital-twins/ai-predictive-analytics" className="block border border-white/20 p-5 rounded hover:bg-white/5">
              <h3 className="font-semibold mb-2">AI Predictive Analytics</h3>
              <p className="text-sm text-slate-300">Models trained on the NDT overlay as ground truth.</p>
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
