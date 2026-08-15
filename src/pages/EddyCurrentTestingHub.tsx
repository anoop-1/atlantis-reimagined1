import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import ContactDetails from "@/components/ContactDetails";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Activity, CheckCircle, MapPin, Radio, Settings, ShieldCheck } from "lucide-react";

const faqs = [
  {
    question: "What is eddy current testing (ECT)?",
    answer:
      "Eddy current testing is an electromagnetic NDT method that detects surface and near-surface flaws in electrically conductive materials. A coil carrying alternating current is brought close to the part; the primary field induces circulating eddy currents in the material. Any discontinuity — crack, corrosion, thickness change, or coating variation — disturbs the eddy current pattern, which in turn alters the coil's impedance. That impedance change is displayed as an impedance plane signal (vertical = reactance, horizontal = resistance) that the technician interprets against calibration standards. ECT works without couplant, without contact for some configurations, and responds instantaneously — making it the fastest high-volume surface inspection method in NDT.",
  },
  {
    question: "When should I use ECT instead of MT or PT?",
    answer:
      "ECT is the right choice in four situations: (1) non-ferromagnetic materials where MT is physically impossible — austenitic stainless, aluminium, brass, titanium, copper alloys; (2) through-coating inspection where PT cannot reach the surface, such as painted aircraft fuselages; (3) tube-and-pipe inspection of heat exchangers, condensers, and air coolers where internal bobbin probes inspect thousands of tubes per shift; (4) conductivity or thickness measurement on non-ferrous materials. ECT also detects subsurface defects down to 3–6 mm depending on frequency, which PT cannot. MT still wins on ferromagnetic weld toes because MT is cheaper per linear inch.",
  },
  {
    question: "What can ECT inspect — tubes, welds, coatings?",
    answer:
      "Heat exchanger tube inspection is the largest commercial ECT application. Conventional ECT (for non-ferrous tubing), Remote Field ECT (RFT) for carbon-steel tubing, Near-Field Array (NFA) for fin-fan tubes, and MFL for carbon-steel tube walls all live under the broader ECT umbrella. Other applications: aerospace fastener-hole crack detection, aluminium wing skin inspection, weld inspection on non-ferromagnetic alloys, conductivity sorting, coating thickness measurement (0.5–500 microns), and heat-treat verification through conductivity correlation.",
  },
  {
    question: "What is array eddy current (ECA) and when does it beat single-probe ECT?",
    answer:
      "Eddy Current Array (ECA) uses a matrix of small coils electronically multiplexed to produce a C-scan image in one pass — much like PAUT for UT. Instead of raster-scanning a single probe across a weld or fastener hole, an ECA pad covers 30–150 mm in a single swipe. Advantages: 5–10x faster coverage, full data archive, detection reliability less dependent on technician scan speed. ECA is now standard for aerospace fastener-row inspections, pipeline weld inspection in lieu of MT on non-ferromagnetic steels, and fatigue-prone weldments on offshore wind towers. ASME V Article 8 Appendix I covers ECA; ASTM E3052 for the array technique.",
  },
  {
    question: "What codes govern eddy current testing?",
    answer:
      "Primary standards: ASME BPVC V Article 8 (general ECT), Article 26 for tubing; ASTM E309 (ECT of welded tubing), E571 (aerospace bolt holes), E3052 (ECA); ISO 15549 (general ECT) and ISO 17643 (weld ECT). Aerospace adds NAS 410, AMS 2644, and OEM-specific procedures like Boeing BAC 5682. Heat exchanger tubing work follows the EPRI tube examination guidelines on top of ASME V Article 26. Conductivity measurement follows ASTM E1004.",
  },
  {
    question: "How much does eddy current testing cost?",
    answer:
      "Heat exchanger tube inspection: $0.50–$1.50 per tube for conventional ECT, $1–$2.50 for RFT, $2–$5 for ECA or NFA — a 2,000-tube bundle runs $3K–$8K plus mobilization. Weld ECT on non-ferrous: $4–$8 per inch. Aircraft fastener-hole ECT: $2–$6 per hole. Coating thickness surveys: $150–$300 per hour. Field day rate for ECT Level II crew with calibrated equipment: $900–$1,500.",
  },
    { question: 'What is eddy current testing used for?', answer: 'Eddy current testing detects surface and near-surface flaws in conductive materials. It is widely used for heat-exchanger and condenser tube inspection, weld inspection, conductivity and coating-thickness measurement, and aircraft fastener-hole inspection. It needs no couplant and is fast for in-service screening.' }, /*kw-embed*/
    { question: 'How does eddy current testing work?', answer: 'Eddy current testing induces circulating currents in a conductive part with an alternating-current coil. Flaws, conductivity changes, or geometry changes disturb those currents and the coil impedance, which the instrument displays. ET follows codes such as ASME Section V Article 8.' }, /*kw-embed*/
];

const cities = [
  { label: "Houston", slug: "/eddy-current-testing-houston" },
  { label: "Dubai", slug: "/eddy-current-testing-dubai" },
  { label: "Singapore", slug: "/eddy-current-testing-singapore" },
  { label: "Mumbai", slug: "/eddy-current-testing-mumbai" },
  { label: "Chennai", slug: "/eddy-current-testing-chennai" },
  { label: "Bangalore", slug: "/eddy-current-testing-bangalore" },
  { label: "Abu Dhabi", slug: "/eddy-current-testing-abu-dhabi" },
  { label: "Saudi Arabia", slug: "/eddy-current-testing-saudi-arabia" },
  { label: "Qatar", slug: "/eddy-current-testing-qatar" },
  { label: "Kuwait", slug: "/eddy-current-testing-kuwait" },
  { label: "Calgary", slug: "/eddy-current-testing-calgary" },
  { label: "London", slug: "/eddy-current-testing-london" },
  { label: "Aberdeen", slug: "/eddy-current-testing-aberdeen" },
  { label: "Stavanger", slug: "/eddy-current-testing-stavanger" },
  { label: "Rotterdam", slug: "/eddy-current-testing-rotterdam" },
];

export default function EddyCurrentTestingHub() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: "Eddy Current Testing Services",
        serviceType: "Eddy Current Testing (ECT, ECA, RFT, NFA)",
        provider: { "@id": "https://atlantisndt.com/#organization" },
      },
      {
        "@type": "WebPage",
        "@id": "https://atlantisndt.com/eddy-current-testing",
        name: "Eddy Current Testing (ECT) 2026 Hub",
      },
    ],
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation />
      <SEOHead
        title="Eddy Current Testing (ECT) 2026: Tube Inspection, ECA, RFT Services"
        description="Eddy current testing for heat exchangers, welds, coatings & aerospace. Conventional ECT, ECA, RFT, NFA. ASME V Article 8, ASTM E309. ASNT Level II/III."
        keywords="eddy current testing, ECT inspection, eddy current array, ECA, remote field testing, RFT, near field array, NFA, heat exchanger tube inspection, ASME V Article 8, ECT training, aerospace ECT"
        canonical="https://atlantisndt.com/eddy-current-testing"
        structuredData={structuredData}
        faq={faqs}
      />
      <Breadcrumbs />

      {/* HERO */}
      <section className="bg-gradient-to-br from-[#004aad] to-blue-800 text-white pt-24 pb-16">
        <div className="container mx-auto max-w-6xl px-6">
          <div className="flex items-center gap-2 text-blue-200 mb-4"><Radio className="w-5 h-5" /><span>ECT Pillar Hub</span></div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Eddy Current Testing (ECT) 2026: Tubes, Welds, Aerospace & Coatings</h1>
          <p className="text-xl text-blue-100 max-w-3xl mb-8">
            Electromagnetic NDT for conductive materials — non-ferrous tubing, aerospace fastener holes, painted aircraft fuselage, weld crack detection on austenitic stainless. Conventional ECT, Eddy Current Array (ECA), Remote Field Testing (RFT), and Near-Field Array (NFA) crews worldwide.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/contact" className="inline-block bg-white text-[#004aad] px-8 py-3 rounded-lg font-semibold hover:bg-slate-100 transition text-center">Request an ECT Quote</Link>
            <Link to="/eddy-current-tube-inspection" className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition justify-center">Tube Inspection →</Link>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-16 bg-white">
        <div className="container mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">The Physics of Eddy Currents</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              Pass alternating current through a coil, and you generate a primary magnetic field. Bring that coil close to a conductive material and the primary field induces closed loops of current — 'eddy currents' — flowing in the material parallel to the coil plane. Those eddy currents, in turn, generate their own secondary field opposing the primary, slightly altering the coil's impedance.
            </p>
            <p className="text-slate-700 leading-relaxed mb-4">
              Any change in the material — a crack interrupting current flow, a thickness reduction, a conductivity shift from heat treat, or a lift-off change from corrosion under coating — modifies the eddy current pattern and therefore the impedance seen at the coil. The inspector reads this as a locus on the impedance plane, where defects, liftoff, and conductivity each produce characteristic signal phases.
            </p>
            <p className="text-slate-700 leading-relaxed">
              Frequency is your main tuning knob. Higher frequencies (500 kHz–4 MHz) crowd current near the surface — best for tight surface cracks. Lower frequencies (10–100 kHz) push current deeper into the wall — best for subsurface corrosion or far-side defects. The skin depth formula (δ = 1/√(π·f·μ·σ)) tells you how deep currents actually penetrate for a given material and frequency.
            </p>
          </div>
          <Card className="bg-slate-50 border-l-4 border-[#004aad]">
            <CardHeader><CardTitle>ECT's Unique Strengths</CardTitle></CardHeader>
            <CardContent className="text-sm text-slate-700 space-y-3 leading-relaxed">
              <div className="flex gap-2"><CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" /><span><strong>No couplant:</strong> works at elevated temperature and through non-conductive coatings up to about 2 mm.</span></div>
              <div className="flex gap-2"><CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" /><span><strong>Non-ferromagnetic materials:</strong> the only practical volumetric option for austenitic stainless welds, titanium, aluminium.</span></div>
              <div className="flex gap-2"><CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" /><span><strong>Speed:</strong> internal bobbin scans 500+ tubes per day; ECA pads cover fastener rows 10x faster than single-probe ECT.</span></div>
              <div className="flex gap-2"><CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" /><span><strong>Multi-parameter:</strong> the same scan captures cracks, conductivity, thickness, and coating — post-processed separately.</span></div>
              <div className="flex gap-2"><CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" /><span><strong>Fully digital data:</strong> archived for decade-long fitness-for-service tracking.</span></div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* TECHNIQUES */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">ECT Techniques We Deploy</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader><CardTitle className="text-lg flex items-center gap-2"><Settings className="w-5 h-5 text-[#004aad]" /> Conventional ECT</CardTitle></CardHeader>
              <CardContent className="text-sm text-slate-700 leading-relaxed">
                Single-element pencil or pancake probes for surface crack detection on non-ferrous welds, aircraft skin, generator retaining rings. Impedance-plane interpretation.
              </CardContent>
            </Card>
            <Card>
              <CardHeader><CardTitle className="text-lg">Eddy Current Array (ECA)</CardTitle></CardHeader>
              <CardContent className="text-sm text-slate-700 leading-relaxed">
                Multi-coil arrays producing C-scan images in one pass. 5–10x faster than single-probe scans. Standard on aerospace fastener rows and offshore wind turbine weldments.
              </CardContent>
            </Card>
            <Card>
              <CardHeader><CardTitle className="text-lg">Remote Field Testing (RFT)</CardTitle></CardHeader>
              <CardContent className="text-sm text-slate-700 leading-relaxed">
                Through-wall measurement on carbon-steel tubing — the ferromagnetic shield that blocks conventional ECT is exactly why RFT works. Primary method for carbon-steel heat exchanger tubes.
              </CardContent>
            </Card>
            <Card>
              <CardHeader><CardTitle className="text-lg">Near-Field Array (NFA)</CardTitle></CardHeader>
              <CardContent className="text-sm text-slate-700 leading-relaxed">
                Purpose-built for finned carbon-steel tubing (air coolers, fin-fan exchangers) where RFT struggles. Detects pitting and thinning with fin interference filtered out.
              </CardContent>
            </Card>
            <Card>
              <CardHeader><CardTitle className="text-lg">Magnetic Flux Leakage (MFL)</CardTitle></CardHeader>
              <CardContent className="text-sm text-slate-700 leading-relaxed">
                Saturation-based wall loss measurement on carbon-steel tubing. Fast screening across large bundles; typically paired with a follow-up UT confirmation on flagged tubes.
                <Link to="/magnetic-flux-leakage-testing" className="block mt-2 text-[#004aad] hover:underline font-medium">MFL Services →</Link>
              </CardContent>
            </Card>
            <Card>
              <CardHeader><CardTitle className="text-lg">Pulsed ECT (PECT)</CardTitle></CardHeader>
              <CardContent className="text-sm text-slate-700 leading-relaxed">
                Time-domain ECT for thicker walls and corrosion under insulation (CUI) through intact insulation and weather jacket. No scaffolding, no insulation stripping.
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* APPLICATIONS */}
      <section className="py-16 bg-white">
        <div className="container mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Real-World ECT Applications</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader><CardTitle className="text-lg">Heat Exchanger Tube Inspection</CardTitle></CardHeader>
              <CardContent className="text-sm text-slate-700 leading-relaxed space-y-2">
                <p>The single largest ECT market. Refinery condensers, air coolers, feedwater heaters, nuclear steam generators. We inspect 2,000–20,000 tubes per shutdown, reporting pitting, wall loss, vibration damage, and tube-to-tubesheet joint integrity.</p>
                <p><strong>Probe selection:</strong> conventional ECT for copper/admiralty/Cu-Ni, RFT for carbon steel, NFA for finned carbon steel, array probes for titanium and stainless.</p>
                <Link to="/eddy-current-tube-inspection" className="text-[#004aad] hover:underline font-medium">Tube Inspection Service →</Link>
              </CardContent>
            </Card>

            <Card>
              <CardHeader><CardTitle className="text-lg">Aerospace Fastener & Skin Inspection</CardTitle></CardHeader>
              <CardContent className="text-sm text-slate-700 leading-relaxed space-y-2">
                <p>Rotating pencil probes in fastener holes per ASTM E571. ECA pads scanning rivet rows on fuselage and wing skins through paint. NAS 410 Level II crews. Boeing and Airbus approved procedures on file.</p>
                <p><strong>Defects targeted:</strong> fatigue cracks radiating from fastener holes, corrosion under countersinks, skin-to-stringer bond integrity.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader><CardTitle className="text-lg">Weld Inspection — Stainless & Non-Ferrous</CardTitle></CardHeader>
              <CardContent className="text-sm text-slate-700 leading-relaxed space-y-2">
                <p>Austenitic stainless welds are notoriously hard for UT (coarse-grained weldment scatters sound). ECA glides over the cap and catches surface-breaking indications where MT is physically impossible. Essential for chemical, cryogenic, and offshore topside stainless piping.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader><CardTitle className="text-lg">Conductivity & Thickness</CardTitle></CardHeader>
              <CardContent className="text-sm text-slate-700 leading-relaxed space-y-2">
                <p>Conductivity sorting of aluminium heat-treat temper (T4 vs T6 vs T73) per ASTM E1004. Non-ferrous thickness gauging on aircraft skins. Coating thickness from 0.5 to 500 microns per ISO 2360.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CODES */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Codes & Standards</h2>
          <div className="overflow-x-auto bg-white rounded-xl shadow-sm border border-slate-200">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-100 uppercase text-xs tracking-wide text-slate-800">
                <tr><th className="px-4 py-3">Standard</th><th className="px-4 py-3">Scope</th><th className="px-4 py-3">Typical Use</th></tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                <tr><td className="px-4 py-3 font-medium">ASME V Article 8</td><td className="px-4 py-3">General ECT</td><td className="px-4 py-3">Pressure equipment ECT scope</td></tr>
                <tr><td className="px-4 py-3 font-medium">ASME V Article 26</td><td className="px-4 py-3">Tube ECT</td><td className="px-4 py-3">Heat exchanger tube bundles</td></tr>
                <tr><td className="px-4 py-3 font-medium">ASTM E309</td><td className="px-4 py-3">Welded tubing</td><td className="px-4 py-3">Production ECT of welded tube</td></tr>
                <tr><td className="px-4 py-3 font-medium">ASTM E571</td><td className="px-4 py-3">Fastener hole ECT</td><td className="px-4 py-3">Aerospace fastener-row inspection</td></tr>
                <tr><td className="px-4 py-3 font-medium">ASTM E3052</td><td className="px-4 py-3">Array ECT</td><td className="px-4 py-3">ECA procedures</td></tr>
                <tr><td className="px-4 py-3 font-medium">ASTM E1004</td><td className="px-4 py-3">Conductivity</td><td className="px-4 py-3">Aluminium heat-treat sorting</td></tr>
                <tr><td className="px-4 py-3 font-medium">ISO 15549</td><td className="px-4 py-3">General principles</td><td className="px-4 py-3">European ECT scope</td></tr>
                <tr><td className="px-4 py-3 font-medium">ISO 17643</td><td className="px-4 py-3">Weld ECT</td><td className="px-4 py-3">EU structural weld examination</td></tr>
                <tr><td className="px-4 py-3 font-medium">NAS 410 / AMS 2644</td><td className="px-4 py-3">Aerospace</td><td className="px-4 py-3">NAS 410 Level II ECT</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CITIES */}
      <section className="py-16 bg-white">
        <div className="container mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Eddy Current Testing — Cities Served</h2>
          <p className="text-slate-600 mb-8 max-w-3xl">
            Our ECT crews carry the full suite: Olympus OmniScan MX/ECA, Eddyfi Ectane 2, Zetec MIZ-200, GE Phasec, plus bobbin/RFT/NFA probe inventory for 17–50 mm tube diameters.
          </p>
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-3">
            {cities.map((c) => (
              <Link key={c.slug} to={c.slug} className="group rounded-lg border border-slate-200 bg-white p-4 hover:border-[#004aad] hover:shadow-sm transition">
                <div className="flex items-center gap-2"><MapPin className="w-4 h-4 text-[#004aad] shrink-0" /><span className="text-slate-900 font-medium group-hover:text-[#004aad]">{c.label}</span></div>
                <div className="text-xs text-slate-500 mt-1">ECT · ECA · RFT</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto max-w-4xl px-6">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">ECT — Frequently Asked</h2>
          <div className="space-y-4">
            {faqs.map((f, i) => (
              <details key={i} className="bg-white rounded-lg border border-slate-200 p-5">
                <summary className="cursor-pointer font-semibold text-slate-900 flex items-start gap-2">
                  <Activity className="w-5 h-5 text-[#004aad] shrink-0 mt-0.5" />
                  <span>{f.question}</span>
                </summary>
                <p className="mt-3 text-slate-700 text-sm leading-relaxed pl-7">{f.answer}</p>
              </details>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link to="/blog/eddy-current-testing-complete-guide" className="text-[#004aad] hover:underline font-medium">Read the full ECT Complete Guide →</Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-[#004aad] to-blue-800 text-white">
        <div className="container mx-auto max-w-4xl px-6 text-center">
          <ShieldCheck className="w-12 h-12 mx-auto mb-4 text-blue-200" />
          <h2 className="text-3xl font-bold mb-4">Need Tube Bundle ECT or Aerospace ECA?</h2>
          <p className="text-blue-100 max-w-2xl mx-auto mb-6">
            Whether it is a 6,000-tube refinery condenser in a 72-hour turnaround window or a fleet of aircraft fuselage fastener inspections, our Level II/III ECT crews mobilize globally. Tube-by-tube digital archives delivered within 5 business days of field completion.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="inline-block bg-white text-[#004aad] px-8 py-3 rounded-lg font-semibold hover:bg-slate-100 transition">Request a Quote</Link>
            <Link to="/training" className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition justify-center">ECT Training →</Link>
          </div>
        </div>
      </section>

      <ContactDetails />
    </div>
  );
}
