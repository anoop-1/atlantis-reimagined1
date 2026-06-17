import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import ContactDetails from "@/components/ContactDetails";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import TableOfContents from "@/components/TableOfContents";
import { Activity, CheckCircle, MapPin, Settings, ShieldCheck, Waves } from "lucide-react";

const faqs = [
  {
    question: "What is ultrasonic testing (UT) and how does it work?",
    answer:
      "Ultrasonic testing sends high-frequency sound waves (typically 0.5–25 MHz) into a material through a couplant and measures the echoes returned from the back wall or from internal discontinuities. The time-of-flight of each echo, converted using the material sound velocity, gives you thickness or defect depth. Amplitude of the echo against a calibrated DAC or DGS curve tells you how significant the reflector is. UT is used for weld flaw detection, corrosion mapping, thickness gauging, and bond evaluation across oil & gas, aerospace, power generation, and structural steel.",
  },
  {
    question: "What is the difference between conventional UT, PAUT, and TOFD?",
    answer:
      "Conventional UT uses a single-element probe producing one fixed beam — you sweep it manually and judge indications against a reference block. Phased Array UT (PAUT) uses an array of 16–128 elements that can be electronically focused and steered, producing image-based scans (S-scan, E-scan) with a full volumetric record. Time-of-Flight Diffraction (TOFD) uses two angled probes, one transmitter and one receiver, and measures the diffracted signal from defect tips — it is the gold standard for sizing weld flaws accurately and is explicitly referenced in ASME Section V Article 4 Mandatory Appendix III.",
  },
  {
    question: "What codes and standards govern ultrasonic testing?",
    answer:
      "Primary codes: ASME BPVC Section V Article 4 (UT general), Article 5 (in-service), Article 23 (SE-797 for thickness); ASME Section VIII UW-53; AWS D1.1 Clause 8 for structural welds; API 1104 for pipelines; EN/ISO 17640 for European weld testing; EN/ISO 16811 for sensitivity; EN/ISO 22232 for equipment. PAUT specifically is governed by ASME V Article 4 Mandatory Appendix IV and ASTM E2700. Aerospace UT follows SAE AMS 2154 and NAS 410.",
  },
  {
    question: "What UT training and certification do I need?",
    answer:
      "For conventional UT: SNT-TC-1A requires 40 hours classroom + 210 hours OJT for Level I, plus another 40 + 630 hours for Level II. ACCP Level II UT exam costs $420 at ASNT. For PAUT you need conventional UT Level II as a prerequisite, then 40 hours of PAUT-specific training (AWS CWI-SCWI adds another layer for structural work). TOFD usually adds 32 hours of training on top of PAUT. ISO 9712 has similar hour requirements but is third-party issued by bodies like PCN, CSWIP, or DNV.",
  },
  {
    question: "What can UT detect that radiography cannot?",
    answer:
      "UT shines where RT struggles: planar defects oriented parallel to the radiation beam (lack of fusion on bevel faces, fatigue cracks), material thickness above ~100 mm where RT exposures become impractical, and in-service inspection where radiation safety lockouts would shut the plant down. UT also gives depth information natively, which RT does not — crucial for fitness-for-service calcs. RT still wins for porosity clusters, slag inclusions, and geometry where access allows film/detector placement on both sides.",
  },
    { question: 'What is involved in ultrasonic testing Level 1 training?', answer: 'UT Level 1 training combines classroom theory with supervised on-the-job hours under SNT-TC-1A. You learn equipment setup, calibration, couplants, and basic flaw and thickness measurement, qualifying you to test under Level II supervision. The exact hour requirements follow your employer Written Practice.' }, /*kw-embed*/
    { question: 'How does ultrasonic testing detect corrosion?', answer: 'Ultrasonic corrosion mapping measures remaining wall thickness from the back-wall echo time-of-flight. Scanning across a grid produces a corrosion map that reveals pitting, corrosion under insulation, and erosion, giving a quantified record for fitness-for-service and remaining-life decisions.' }, /*kw-embed*/
    { question: 'What is a typical PAUT technician salary?', answer: 'Phased array UT technicians generally earn more than conventional UT Level II inspectors because PAUT adds image-based scanning, data archiving, and code-qualified procedures. Rates vary widely by region and sector, with the highest packages in oil and gas, offshore, and the Gulf. Contact us for current ranges and openings rather than relying on a single fixed figure.' }, /*kw-embed*/
];

const cities = [
  { label: "Houston", slug: "/ultrasonic-testing-houston" },
  { label: "Dubai", slug: "/ultrasonic-testing-dubai" },
  { label: "Saudi Arabia", slug: "/ultrasonic-testing-saudi-arabia" },
  { label: "Abu Dhabi", slug: "/ultrasonic-testing-abu-dhabi" },
  { label: "Qatar", slug: "/ultrasonic-testing-qatar" },
  { label: "Kuwait", slug: "/ultrasonic-testing-kuwait" },
  { label: "Mumbai", slug: "/ultrasonic-testing-mumbai" },
  { label: "Delhi", slug: "/ultrasonic-testing-delhi" },
  { label: "Bangalore", slug: "/ultrasonic-testing-bangalore" },
  { label: "Chennai", slug: "/ultrasonic-testing-chennai" },
  { label: "Singapore", slug: "/ultrasonic-testing-singapore" },
  { label: "Norway", slug: "/ultrasonic-testing-norway" },
  { label: "UK", slug: "/ultrasonic-testing-uk" },
  { label: "Calgary", slug: "/ultrasonic-testing-calgary" },
  { label: "Los Angeles", slug: "/ultrasonic-testing-los-angeles" },
];

export default function UltrasonicTestingHub() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://atlantisndt.com/ultrasonic-testing#service",
        name: "Ultrasonic Testing Services",
        serviceType: "Ultrasonic Testing (UT, PAUT, TOFD)",
        provider: { "@id": "https://atlantisndt.com/#organization" },
        areaServed: [
          { "@type": "Country", name: "United States" },
          { "@type": "Country", name: "United Arab Emirates" },
          { "@type": "Country", name: "Saudi Arabia" },
          { "@type": "Country", name: "India" },
        ],
      },
      {
        "@type": "WebPage",
        "@id": "https://atlantisndt.com/ultrasonic-testing",
        name: "Ultrasonic Testing (UT) Services, Training & Equipment 2026",
      },
    ],
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation />
      <SEOHead
        title="Ultrasonic Testing (UT) 2026: Services, Training, Equipment Guide"
        description="Ultrasonic testing services & training in 20+ countries. PAUT, TOFD, thickness gauging. ASNT Level II/III inspectors. Reports 24-48h turnaround."
        keywords="ultrasonic testing, UT inspection, PAUT, phased array ultrasonic testing, TOFD, time of flight diffraction, ultrasonic thickness gauging, corrosion mapping, ASME Section V UT, UT services, UT training, UT equipment"
        canonical="https://atlantisndt.com/ultrasonic-testing"
        structuredData={structuredData}
        faq={faqs}
      />
            <TableOfContents items={[{ id: "overview", label: "Ultrasonic Testing Overview" }, { id: "applications", label: "Applications" }, { id: "certification", label: "Certification" }, { id: "faq", label: "FAQ" }]} />
      <Breadcrumbs />

      {/* HERO */}
      <section className="bg-gradient-to-br from-[#004aad] to-blue-800 text-white pt-24 pb-16">
        <div className="container mx-auto max-w-6xl px-6">
          <div className="flex items-center gap-2 text-blue-200 mb-4"><Waves className="w-5 h-5" /><span>UT Pillar Hub</span></div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Ultrasonic Testing (UT) Services, Training & Equipment 2026</h1>
          <p className="text-xl text-blue-100 max-w-3xl mb-8">
            High-frequency sound wave inspection for weld flaws, thickness, and corrosion. ASNT Level II and III certified UT, PAUT, and TOFD crews in 20+ countries. 24–48h written reports, full digital data archiving for PAUT and TOFD.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/contact" className="inline-block bg-white text-[#004aad] px-8 py-3 rounded-lg font-semibold hover:bg-slate-100 transition text-center">Request a Quote</Link>
            <Link to="/phased-array-ut" className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition justify-center">PAUT Deep Dive</Link>
          </div>
        </div>
      </section>

      {/* WHAT IS UT */}
      <section className="py-16 bg-white">
        <div className="container mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">What Is Ultrasonic Testing?</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              UT uses sound waves above human hearing — typically between 0.5 and 25 MHz — to probe a material's interior. A piezoelectric transducer pulses through a couplant (water, gel, glycerin) into the component; reflected echoes from the back wall, internal defects, or metallurgical interfaces return to the transducer and are displayed as an A-scan on the flaw detector.
            </p>
            <p className="text-slate-700 leading-relaxed mb-4">
              Time-of-flight between pulse and echo, divided by twice the material sound velocity, gives thickness or defect depth. Amplitude of the echo, referenced to a calibration block with known reflectors (side-drilled holes, flat-bottom holes, notches), classifies whether the indication is reportable under the governing code.
            </p>
            <p className="text-slate-700 leading-relaxed">
              The method is unique in NDT for giving simultaneous access to <strong>thickness</strong> and <strong>depth</strong> — something radiography cannot do natively. That is why UT is the backbone of in-service refinery inspection, pipeline integrity, and structural weld QA.
            </p>
          </div>
          <Card className="bg-slate-50 border-l-4 border-[#004aad]">
            <CardHeader>
              <CardTitle className="text-xl">Where UT Beats RT</CardTitle>
            </CardHeader>
            <CardContent className="text-slate-700 text-sm space-y-3 leading-relaxed">
              <div className="flex gap-2"><CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" /><span>Planar defects parallel to the RT beam (lack of fusion on bevels, fatigue cracks).</span></div>
              <div className="flex gap-2"><CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" /><span>Thick-section welds above 100 mm where RT exposures stretch into hours.</span></div>
              <div className="flex gap-2"><CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" /><span>In-service inspection — no radiation boundary, no production shutdown.</span></div>
              <div className="flex gap-2"><CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" /><span>Depth-from-surface data used directly in API 579 fitness-for-service.</span></div>
              <div className="flex gap-2"><CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" /><span>Single-side access (no backside film placement needed).</span></div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">UT Services We Deliver</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader><CardTitle className="text-lg">Ultrasonic Thickness Gauging (UTG)</CardTitle></CardHeader>
              <CardContent className="text-sm text-slate-700 leading-relaxed">
                Single-point thickness readings against API 570/653 CML grids. Data logged digitally, long-term trending against MAWP calcs. Typical field rate: 300–500 points per technician per day.
              </CardContent>
            </Card>
            <Card>
              <CardHeader><CardTitle className="text-lg">Corrosion Mapping</CardTitle></CardHeader>
              <CardContent className="text-sm text-slate-700 leading-relaxed">
                Automated raster or wheel-probe scans producing C-scan maps of remaining wall thickness. Used for CUI surveys, tank floors with MFL follow-up, and refinery pressure vessel SBS assessments.
                <Link to="/corrosion-mapping" className="block mt-2 text-[#004aad] hover:underline font-medium">Corrosion Mapping Services →</Link>
              </CardContent>
            </Card>
            <Card>
              <CardHeader><CardTitle className="text-lg">Weld Inspection (Shear-Wave UT)</CardTitle></CardHeader>
              <CardContent className="text-sm text-slate-700 leading-relaxed">
                AWS D1.1 Clause 8, ASME V Article 4, API 1104 shear-wave UT on butt and fillet welds. Covers process piping, structural, pressure vessels, and storage tank shell welds.
                <Link to="/weld-inspection" className="block mt-2 text-[#004aad] hover:underline font-medium">Weld Inspection Services →</Link>
              </CardContent>
            </Card>
            <Card>
              <CardHeader><CardTitle className="text-lg">Phased Array UT (PAUT)</CardTitle></CardHeader>
              <CardContent className="text-sm text-slate-700 leading-relaxed">
                Image-based volumetric inspection with electronic beam steering. Replaces RT on thick welds, nozzle inspections, and composite structures. Archived data supports re-review years later.
                <Link to="/phased-array-ut" className="block mt-2 text-[#004aad] hover:underline font-medium">PAUT Services →</Link>
              </CardContent>
            </Card>
            <Card>
              <CardHeader><CardTitle className="text-lg">Time-of-Flight Diffraction (TOFD)</CardTitle></CardHeader>
              <CardContent className="text-sm text-slate-700 leading-relaxed">
                ASME V Article 4 Appendix III weld sizing. Accurate depth and through-wall sizing for fitness-for-service. Often paired with PAUT on critical welds.
                <Link to="/tofd-testing" className="block mt-2 text-[#004aad] hover:underline font-medium">TOFD Services →</Link>
              </CardContent>
            </Card>
            <Card>
              <CardHeader><CardTitle className="text-lg">Guided Wave UT</CardTitle></CardHeader>
              <CardContent className="text-sm text-slate-700 leading-relaxed">
                Long-range screening from a single test point — ideal for pipelines at road crossings, CUI lines, and insulated risers where direct access is impractical.
                <Link to="/guided-wave-testing" className="block mt-2 text-[#004aad] hover:underline font-medium">Guided Wave Testing →</Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* EQUIPMENT */}
      <section className="py-16 bg-white">
        <div className="container mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">UT Equipment & Probe Selection</h2>
          <p className="text-slate-600 mb-8 max-w-3xl">
            Instrument and probe selection drives sensitivity, resolution, and coverage. We calibrate against IIW V1/V2 blocks for thickness/angle beam and ASME Section V specific blocks for weld examination.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader><CardTitle className="text-lg flex items-center gap-2"><Settings className="w-5 h-5 text-[#004aad]" /> Flaw Detectors</CardTitle></CardHeader>
              <CardContent className="text-sm text-slate-700 leading-relaxed space-y-2">
                <p>Field fleet: Olympus EPOCH 650/1000, GE USM Go+, Sonatest Masterscan 380. Data-logging UT gauges (38DL Plus) for CML work. All devices stay in a 12-month calibration cycle traceable to NIST or UKAS.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader><CardTitle className="text-lg">Probes</CardTitle></CardHeader>
              <CardContent className="text-sm text-slate-700 leading-relaxed space-y-2">
                <p><strong>Straight beam:</strong> 2.25–10 MHz single-element for thickness and lamination scanning.</p>
                <p><strong>Angle beam:</strong> 45°, 60°, 70° shear-wave (Panametrics, Sonatest) for weld examination.</p>
                <p><strong>Dual-element:</strong> DA312 and D798 for corrosion thickness through paint.</p>
                <p><strong>PAUT arrays:</strong> 5L16, 7.5L32, 10L64 on appropriate wedges.</p>
                <p><strong>TOFD pairs:</strong> 5 MHz 6-element arrays with 60° or 70° wedges depending on thickness.</p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8">
            <Link to="/ndt-equipment-guide" className="text-[#004aad] font-medium hover:underline">Full NDT Equipment Guide →</Link>
          </div>
        </div>
      </section>

      {/* APPLICATIONS */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">UT Applications by Industry</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardHeader><CardTitle className="text-base">Oil & Gas</CardTitle></CardHeader>
              <CardContent className="text-sm text-slate-700 leading-relaxed">
                Pipeline girth weld PAUT, refinery CUI corrosion mapping, pressure vessel nozzle exams, FPSO hull inspections. API 510/570/653 compliance.
                <Link to="/ndt-for-oil-gas" className="block mt-2 text-[#004aad] hover:underline">Oil & Gas NDT →</Link>
              </CardContent>
            </Card>
            <Card>
              <CardHeader><CardTitle className="text-base">Aerospace</CardTitle></CardHeader>
              <CardContent className="text-sm text-slate-700 leading-relaxed">
                Composite laminate bond inspection, turbine disk exams, landing gear strut UT. NAS 410 Level II crews; AMS 2154 compliance.
                <Link to="/ndt-for-aerospace" className="block mt-2 text-[#004aad] hover:underline">Aerospace NDT →</Link>
              </CardContent>
            </Card>
            <Card>
              <CardHeader><CardTitle className="text-base">Power Generation</CardTitle></CardHeader>
              <CardContent className="text-sm text-slate-700 leading-relaxed">
                Boiler tube remaining wall surveys, steam header PAUT, turbine blade root inspections. ASME BPVC V and ASME I compliance.
                <Link to="/ndt-for-power-generation" className="block mt-2 text-[#004aad] hover:underline">Power Gen NDT →</Link>
              </CardContent>
            </Card>
            <Card>
              <CardHeader><CardTitle className="text-base">Structural & Construction</CardTitle></CardHeader>
              <CardContent className="text-sm text-slate-700 leading-relaxed">
                AWS D1.1 Clause 8 shear-wave weld inspection on bridges, tall structures, and crane booms. CWI + UT Level II crews.
                <Link to="/construction-ndt-services" className="block mt-2 text-[#004aad] hover:underline">Construction NDT →</Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CITIES */}
      <section className="py-16 bg-white">
        <div className="container mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Ultrasonic Testing — Cities We Serve</h2>
          <p className="text-slate-600 mb-8 max-w-3xl">
            Local crews mobilize within 24–48h in these hubs. Each city page lists equipment availability, typical rates, and nearby industrial clusters.
          </p>
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-3">
            {cities.map((c) => (
              <Link key={c.slug} to={c.slug} className="group rounded-lg border border-slate-200 bg-white p-4 hover:border-[#004aad] hover:shadow-sm transition">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#004aad] shrink-0" />
                  <span className="text-slate-900 font-medium group-hover:text-[#004aad]">{c.label}</span>
                </div>
                <div className="text-xs text-slate-500 mt-1">UT · PAUT · TOFD</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* TRAINING */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">UT Training Pathways</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-l-4 border-emerald-500">
              <CardHeader><CardTitle className="text-lg">Conventional UT Level I → II</CardTitle></CardHeader>
              <CardContent className="text-sm text-slate-700 leading-relaxed space-y-2">
                <p>40 hrs classroom + 210 hrs OJT for Level I. Another 40 + 630 hrs for Level II. Covers thickness, straight-beam, angle-beam weld exam, calibration blocks, ASME/AWS acceptance criteria.</p>
                <Link to="/ndt-training" className="text-[#004aad] hover:underline">NDT Training Hub →</Link>
              </CardContent>
            </Card>
            <Card className="border-l-4 border-blue-500">
              <CardHeader><CardTitle className="text-lg">PAUT Specialty</CardTitle></CardHeader>
              <CardContent className="text-sm text-slate-700 leading-relaxed space-y-2">
                <p>Prerequisite: conventional UT Level II. 40 hrs PAUT-specific training on array setup, wedge selection, focal laws, S-scan/E-scan interpretation. ASME V Article 4 Appendix IV and ASTM E2700 coverage.</p>
                <Link to="/phased-array-training" className="text-[#004aad] hover:underline">PAUT Training →</Link>
              </CardContent>
            </Card>
            <Card className="border-l-4 border-amber-500">
              <CardHeader><CardTitle className="text-lg">Level III UT</CardTitle></CardHeader>
              <CardContent className="text-sm text-slate-700 leading-relaxed space-y-2">
                <p>ASNT Level III Basic + UT Method exams. Covers procedure development, qualification of Level I/II, and code-interpretation authority. Typical path after 4+ years of Level II field time.</p>
                <Link to="/asnt-level-iii-training" className="text-[#004aad] hover:underline">Level III Training →</Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="container mx-auto max-w-4xl px-6">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">UT — Frequently Asked</h2>
          <div className="space-y-4">
            {faqs.map((f, i) => (
              <details key={i} className="bg-slate-50 rounded-lg border border-slate-200 p-5">
                <summary className="cursor-pointer font-semibold text-slate-900 flex items-start gap-2">
                  <Activity className="w-5 h-5 text-[#004aad] shrink-0 mt-0.5" />
                  <span>{f.question}</span>
                </summary>
                <p className="mt-3 text-slate-700 text-sm leading-relaxed pl-7">{f.answer}</p>
              </details>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link to="/blog/ultrasonic-testing-ultimate-guide" className="text-[#004aad] hover:underline font-medium">
              Read the full UT Ultimate Guide on the blog →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-[#004aad] to-blue-800 text-white">
        <div className="container mx-auto max-w-4xl px-6 text-center">
          <ShieldCheck className="w-12 h-12 mx-auto mb-4 text-blue-200" />
          <h2 className="text-3xl font-bold mb-4">Need a UT Quote or Training Seat?</h2>
          <p className="text-blue-100 max-w-2xl mx-auto mb-6">
            Inspection crews mobilize within 24–48h in Houston, the GCC, and India. Training cohorts start every 4–6 weeks. Talk to an ASNT Level III before you commit.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="inline-block bg-white text-[#004aad] px-8 py-3 rounded-lg font-semibold hover:bg-slate-100 transition">Request a Quote</Link>
            <Link to="/ndt-training" className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition justify-center">UT Training →</Link>
          </div>
        </div>
      </section>

      <ContactDetails />
    </div>
  );
}
