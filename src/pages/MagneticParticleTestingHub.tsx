import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import ContactDetails from "@/components/ContactDetails";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import TableOfContents from "@/components/TableOfContents";
import { CheckCircle, Magnet, MapPin, ShieldCheck, Zap } from "lucide-react";

const faqs = [
  {
    question: "What is magnetic particle testing (MT)?",
    answer:
      "Magnetic particle testing is a surface and near-surface flaw detection method for ferromagnetic materials (carbon steel, low-alloy steel, ferritic stainless, iron castings). A magnetic field is induced in the part; discontinuities that interrupt the flux create a local leakage field that attracts iron oxide particles sprinkled or sprayed onto the surface. Those particles form a visible line directly over the flaw — the 'indication.' MT catches cracks invisible to the eye, including sub-surface defects up to about 3 mm deep, and is widely used on weld toes, castings, forgings, and in-service shafts.",
  },
  {
    question: "What is the difference between MT and PT (penetrant testing)?",
    answer:
      "Both are surface methods, but they work only on the materials and defects each is suited to. MT is for ferromagnetic materials only and detects both open surface and near-subsurface discontinuities because magnetic flux penetrates a few millimeters below the surface. PT works on any non-porous material (including austenitic stainless, aluminium, titanium, polymers) but detects only open-to-surface defects — if the crack doesn't break the surface, the dye can't enter it. On carbon-steel weldments, MT is almost always preferred because it is faster, cheaper, and catches subsurface flaws PT cannot see.",
  },
  {
    question: "What are the methods of magnetizing for MT?",
    answer:
      "Two principal categories: (1) Direct contact (head-shot or prod technique) where current flows through the part itself, producing a circumferential field ideal for longitudinal flaws; and (2) Indirect magnetization using a yoke (AC or DC electromagnet), coil, or central conductor — the part isn't electrically connected to the source. Yokes are the workhorse of field MT because they are portable, fast, and leave no arc marks. Techniques are further split into continuous (field on while particles applied) and residual (field turned off, relying on retained magnetism — rarely used now).",
  },
  {
    question: "Wet fluorescent vs dry visible particles — which should I use?",
    answer:
      "Wet fluorescent MT (WFMT) gives the highest sensitivity. Particles are suspended in an oil or water carrier, fluoresce under UV-A at 365 nm, and can resolve tight fatigue cracks under 0.1 mm long. It is required for aerospace bearing races, turbine blade roots, and critical fatigue-loaded components. Dry visible MT uses colored powders (red, grey, yellow) applied with a bulb duster; sensitivity is lower but throughput on rough weld surfaces is higher and no UV booth is needed. ASTM E709 covers both; ASTM E3024 for WFMT specifically.",
  },
  {
    question: "What codes and standards govern magnetic particle testing?",
    answer:
      "ASME BPVC Section V Article 7 for general MT; ASME Section VIII UW-51 for vessel welds; AWS D1.1 Clause 8 for structural welds; API 1104 for pipelines; ASTM E709 and E3024 for general technique; ASTM E1444 for aerospace; ISO 17638 for European weld testing with ISO 23278 for acceptance criteria. Aerospace adds NAS 410 and AMS 2641 for vehicle carriers. MT of ferromagnetic castings is typically governed by ASTM A275 or the relevant MSS-SP.",
  },
  {
    question: "How much does MT cost and when is it faster than UT?",
    answer:
      "MT per-joint cost on weld toes averages $3–$6 per linear inch for visible dry; $5–$9 for WFMT with UV booth. On a typical shop weld, MT is 3–5x faster than UT Level II examination and an order of magnitude faster than RT. It beats UT whenever the concern is surface-breaking defects: weld toe cracks, heat-affected-zone cracks, crankshaft surface indications, casting surface porosity. UT wins the moment volumetric inspection or depth sizing is required.",
  },
    { question: 'How does magnetic particle testing detect surface cracks?', answer: 'Magnetic particle testing magnetises a ferromagnetic part and applies iron particles; surface and near-surface cracks distort the magnetic field and create a leakage field that holds the particles, forming a visible indication. It is one of the fastest methods for surface crack detection on welds and castings, following ASME Section V Article 7.' }, /*kw-embed*/
    { question: 'What is surface crack detection with magnetic particle inspection?', answer: 'Surface crack detection by magnetic particle inspection (MT or MPI) reveals cracks, laps, seams, and other surface-breaking discontinuities in ferromagnetic materials using wet fluorescent or dry powder techniques. For non-ferromagnetic materials, liquid penetrant testing is used instead.' }, /*kw-embed*/
];

const cities = [
  { label: "Houston", slug: "/magnetic-particle-testing-houston" },
  { label: "Dubai", slug: "/magnetic-particle-testing-dubai" },
  { label: "Saudi Arabia", slug: "/magnetic-particle-testing-saudi-arabia" },
  { label: "Mumbai", slug: "/magnetic-particle-testing-mumbai" },
  { label: "Singapore", slug: "/magnetic-particle-testing-singapore" },
  { label: "Abu Dhabi", slug: "/magnetic-particle-testing-abu-dhabi" },
  { label: "Chennai", slug: "/magnetic-particle-testing-chennai" },
  { label: "Los Angeles", slug: "/magnetic-particle-testing-los-angeles" },
  { label: "Denver", slug: "/magnetic-particle-testing-denver" },
  { label: "Chicago", slug: "/magnetic-particle-testing-chicago" },
  { label: "New Orleans", slug: "/magnetic-particle-testing-new-orleans" },
  { label: "Calgary", slug: "/magnetic-particle-testing-calgary" },
  { label: "Aberdeen", slug: "/magnetic-particle-testing-aberdeen" },
  { label: "Bangalore", slug: "/magnetic-particle-testing-bangalore" },
  { label: "Qatar", slug: "/magnetic-particle-testing-qatar" },
];

export default function MagneticParticleTestingHub() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: "Magnetic Particle Testing Services",
        serviceType: "Magnetic Particle Testing (MT, WFMT)",
        provider: { "@id": "https://atlantisndt.com/#organization" },
      },
      {
        "@type": "WebPage",
        "@id": "https://atlantisndt.com/magnetic-particle-testing",
        name: "Magnetic Particle Testing (MT) 2026 Hub",
      },
    ],
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation />
      <SEOHead
        title="Magnetic Particle Testing (MT) 2026: Services, Training, Yokes & WFMT"
        description="Magnetic particle inspection of welds, castings & forgings. Wet fluorescent & dry visible. ASME V Article 7, ASTM E709, AWS D1.1. ASNT Level II crews."
        keywords="magnetic particle testing, magnetic particle inspection, MT inspection, wet fluorescent magnetic particle, WFMT, MPI, ASTM E709, ASME V Article 7, yoke technique, prod technique, MT training"
        canonical="https://atlantisndt.com/magnetic-particle-testing"
        structuredData={structuredData}
        faq={faqs}
      />
            <TableOfContents items={[{ id: "overview", label: "Magnetic Particle Testing Overview" }, { id: "applications", label: "Applications" }, { id: "certification", label: "Certification" }, { id: "faq", label: "FAQ" }]} />
      <Breadcrumbs />

      {/* HERO */}
      <section className="bg-gradient-to-br from-[#004aad] to-blue-800 text-white pt-24 pb-16">
        <div className="container mx-auto max-w-6xl px-6">
          <div className="flex items-center gap-2 text-blue-200 mb-4"><Magnet className="w-5 h-5" /><span>MT Pillar Hub</span></div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Magnetic Particle Testing (MT) 2026: Services, Training & Technique</h1>
          <p className="text-xl text-blue-100 max-w-3xl mb-8">
            Surface and near-surface crack detection on ferrous materials. Wet fluorescent and dry visible techniques for weld toes, castings, forgings, and in-service shafts. ASME V Article 7 and ASTM E709 compliant.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/contact" className="inline-block bg-white text-[#004aad] px-8 py-3 rounded-lg font-semibold hover:bg-slate-100 transition text-center">Request an MT Quote</Link>
            <Link to="/training" className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition justify-center">MT Training →</Link>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-16 bg-white">
        <div className="container mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">How MT Finds Cracks in Ferrous Parts</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              When you magnetize a steel component, flux lines run through it like current through a conductor. A surface-breaking or near-surface crack disrupts the flux path, and the field 'leaks' out of the surface at the edges of the discontinuity. Finely divided iron oxide particles introduced onto the surface are drawn toward those leakage poles and pile up directly over the flaw — forming a visible indication that corresponds very closely to the defect's actual length.
            </p>
            <p className="text-slate-700 leading-relaxed mb-4">
              This is why MT is called a <em>direct</em> surface method: the indication sits literally on top of the flaw, unlike radiography where defect location is inferred from a shadow image, or UT where depth is deduced from time-of-flight.
            </p>
            <p className="text-slate-700 leading-relaxed">
              The magnetizing field must be <strong>perpendicular</strong> to the expected flaw orientation — a field parallel to a crack will not produce a leakage pole. That is why every MT procedure requires two orthogonal magnetizations (e.g., longitudinal plus circular) to catch flaws in any orientation.
            </p>
          </div>
          <Card className="bg-slate-50 border-l-4 border-[#004aad]">
            <CardHeader><CardTitle>Where MT Beats PT</CardTitle></CardHeader>
            <CardContent className="text-sm text-slate-700 space-y-3 leading-relaxed">
              <div className="flex gap-2"><CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" /><span><strong>Near-surface defects:</strong> MT finds flaws up to ~3 mm deep; PT only detects open-to-surface cracks.</span></div>
              <div className="flex gap-2"><CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" /><span><strong>Speed:</strong> A weld toe scan takes 30–60 seconds vs 20+ minutes for the full penetrant dwell/develop cycle.</span></div>
              <div className="flex gap-2"><CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" /><span><strong>Rough surfaces:</strong> MT tolerates mill scale and as-welded profiles; PT needs cleaner, tighter finishes.</span></div>
              <div className="flex gap-2"><CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" /><span><strong>No consumable residue:</strong> easier cleanup on food-grade or coated equipment.</span></div>
              <div className="flex gap-2"><CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" /><span><strong>PT-wins exception:</strong> PT is the only option on austenitic stainless, aluminium, brass, or any non-ferromagnetic alloy.</span></div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* TECHNIQUES */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">MT Techniques We Use</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader><CardTitle className="text-lg flex items-center gap-2"><Zap className="w-5 h-5 text-[#004aad]" /> AC Yoke (Dry Visible)</CardTitle></CardHeader>
              <CardContent className="text-sm text-slate-700 leading-relaxed">
                Portable Parker B310 or Magnaflux Y-7 yokes. Ideal for field weld examination — mill scale and as-welded profiles do not interfere. 10-lb lifting test on each shift per ASME V T-762.
              </CardContent>
            </Card>
            <Card>
              <CardHeader><CardTitle className="text-lg">DC Yoke / Permanent Magnet</CardTitle></CardHeader>
              <CardContent className="text-sm text-slate-700 leading-relaxed">
                Deeper subsurface penetration than AC (up to ~6 mm in specific steels). Used where near-surface casting defects are suspected. 40-lb lifting requirement on DC yokes.
              </CardContent>
            </Card>
            <Card>
              <CardHeader><CardTitle className="text-lg">Wet Fluorescent (WFMT)</CardTitle></CardHeader>
              <CardContent className="text-sm text-slate-700 leading-relaxed">
                Bath-applied fluorescent particles viewed under UV-A at 365 nm. Sensitivity below 0.1 mm. Mandatory for aerospace rotating components and turbine blade roots per ASTM E1444.
              </CardContent>
            </Card>
            <Card>
              <CardHeader><CardTitle className="text-lg">Central Conductor</CardTitle></CardHeader>
              <CardContent className="text-sm text-slate-700 leading-relaxed">
                Threaded rod through a pipe or tube — circumferential field reveals longitudinal cracks on the ID and OD simultaneously. Preferred method for tubular inspection.
              </CardContent>
            </Card>
            <Card>
              <CardHeader><CardTitle className="text-lg">Prod Technique</CardTitle></CardHeader>
              <CardContent className="text-sm text-slate-700 leading-relaxed">
                Direct current through two prods pressed against the part. High sensitivity for localized zones but risks arc burn — forbidden on many vessel welds. Used selectively on heavy structural castings.
              </CardContent>
            </Card>
            <Card>
              <CardHeader><CardTitle className="text-lg">Bench Unit (Horizontal Wet)</CardTitle></CardHeader>
              <CardContent className="text-sm text-slate-700 leading-relaxed">
                Shop inspection of forgings, crankshafts, connecting rods on a stationary wet bench (head-shot plus coil shot). Throughput: 40–60 parts per shift.
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CODES */}
      <section className="py-16 bg-white">
        <div className="container mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Codes & Standards</h2>
          <div className="overflow-x-auto bg-white rounded-xl shadow-sm border border-slate-200">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-100 text-slate-800 uppercase text-xs tracking-wide">
                <tr>
                  <th className="px-4 py-3">Standard</th>
                  <th className="px-4 py-3">Scope</th>
                  <th className="px-4 py-3">Typical Use</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                <tr><td className="px-4 py-3 font-medium">ASME BPVC V Article 7</td><td className="px-4 py-3">General MT technique</td><td className="px-4 py-3">ASME vessel and piping welds</td></tr>
                <tr><td className="px-4 py-3 font-medium">ASME VIII UW-51</td><td className="px-4 py-3">Acceptance criteria</td><td className="px-4 py-3">Pressure vessel welds</td></tr>
                <tr><td className="px-4 py-3 font-medium">ASTM E709</td><td className="px-4 py-3">Standard practice</td><td className="px-4 py-3">General industrial MT</td></tr>
                <tr><td className="px-4 py-3 font-medium">ASTM E3024</td><td className="px-4 py-3">WFMT specifically</td><td className="px-4 py-3">Critical fatigue components</td></tr>
                <tr><td className="px-4 py-3 font-medium">ASTM E1444</td><td className="px-4 py-3">Aerospace practice</td><td className="px-4 py-3">NAS 410 rotating parts</td></tr>
                <tr><td className="px-4 py-3 font-medium">AWS D1.1 Clause 8</td><td className="px-4 py-3">Structural steel welds</td><td className="px-4 py-3">Bridges, buildings, crane booms</td></tr>
                <tr><td className="px-4 py-3 font-medium">API 1104</td><td className="px-4 py-3">Pipeline girth welds</td><td className="px-4 py-3">Cross-country pipeline MT</td></tr>
                <tr><td className="px-4 py-3 font-medium">ISO 17638 / 23278</td><td className="px-4 py-3">European weld MT</td><td className="px-4 py-3">EU pressure directive scope</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* APPLICATIONS */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">MT Applications by Industry</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card><CardHeader><CardTitle className="text-base">Oil & Gas</CardTitle></CardHeader>
              <CardContent className="text-sm text-slate-700 leading-relaxed">
                Weld toe MT after PWHT, valve body castings, drill collar fatigue inspection, wellhead forgings. API 1104 girth weld acceptance.
              </CardContent></Card>
            <Card><CardHeader><CardTitle className="text-base">Aerospace</CardTitle></CardHeader>
              <CardContent className="text-sm text-slate-700 leading-relaxed">
                Landing-gear steels, turbine disks, engine mounts. Mandatory WFMT under ASTM E1444 and NAS 410 Level II inspectors.
              </CardContent></Card>
            <Card><CardHeader><CardTitle className="text-base">Power Generation</CardTitle></CardHeader>
              <CardContent className="text-sm text-slate-700 leading-relaxed">
                Turbine shaft journals, generator rotors, boiler drum circumferential welds. Periodic MT on steam piping hanger supports.
              </CardContent></Card>
            <Card><CardHeader><CardTitle className="text-base">Rail, Heavy Equipment, Wind</CardTitle></CardHeader>
              <CardContent className="text-sm text-slate-700 leading-relaxed">
                Railway axles, crane hooks, wind turbine tower flange bolts. Time-based MT per asset class fatigue schedule.
              </CardContent></Card>
          </div>
        </div>
      </section>

      {/* CITIES */}
      <section className="py-16 bg-white">
        <div className="container mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">MT Inspection — Cities Served</h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-3">
            {cities.map((c) => (
              <Link key={c.slug} to={c.slug} className="group rounded-lg border border-slate-200 bg-white p-4 hover:border-[#004aad] hover:shadow-sm transition">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#004aad] shrink-0" />
                  <span className="text-slate-900 font-medium group-hover:text-[#004aad]">{c.label}</span>
                </div>
                <div className="text-xs text-slate-500 mt-1">MT · WFMT · Yoke</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto max-w-4xl px-6">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">MT — Frequently Asked</h2>
          <div className="space-y-4">
            {faqs.map((f, i) => (
              <details key={i} className="bg-white rounded-lg border border-slate-200 p-5">
                <summary className="cursor-pointer font-semibold text-slate-900 flex items-start gap-2">
                  <Magnet className="w-5 h-5 text-[#004aad] shrink-0 mt-0.5" />
                  <span>{f.question}</span>
                </summary>
                <p className="mt-3 text-slate-700 text-sm leading-relaxed pl-7">{f.answer}</p>
              </details>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link to="/blog/magnetic-particle-testing" className="text-[#004aad] hover:underline font-medium">
              Read the full MT blog deep dive →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-[#004aad] to-blue-800 text-white">
        <div className="container mx-auto max-w-4xl px-6 text-center">
          <ShieldCheck className="w-12 h-12 mx-auto mb-4 text-blue-200" />
          <h2 className="text-3xl font-bold mb-4">Need MT Coverage for a Turnaround or Fabrication?</h2>
          <p className="text-blue-100 max-w-2xl mx-auto mb-6">
            Yoke crews and WFMT benches mobilize in 24–48h across our hub cities. Level III procedure support for your Written Practice is included on every contract over 500 linear feet of weld.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="inline-block bg-white text-[#004aad] px-8 py-3 rounded-lg font-semibold hover:bg-slate-100 transition">Request a Quote</Link>
            <Link to="/penetrant-testing" className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition justify-center">Compare to PT →</Link>
          </div>
        </div>
      </section>

      <ContactDetails />
    </div>
  );
}
