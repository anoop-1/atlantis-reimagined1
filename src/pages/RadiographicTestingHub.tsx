import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import ContactDetails from "@/components/ContactDetails";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import TableOfContents from "@/components/TableOfContents";
import { AlertTriangle, CheckCircle, FileSearch, MapPin, ShieldAlert, Zap } from "lucide-react";

const faqs = [
  {
    question: "What is radiographic testing (RT) in NDT?",
    answer:
      "Radiographic testing exposes a weld or component to ionizing radiation — gamma rays from an isotope source (Iridium-192, Selenium-75, Cobalt-60) or X-rays from a generator. Radiation passes through the part; differences in density or path length caused by defects attenuate the beam differently and register on a film, imaging plate, or digital detector on the far side. A developed film shows porosity, slag inclusions, lack of fusion, lack of penetration, and cracks as density changes. RT is the reference volumetric NDT method for pressure-welded construction and is explicitly invoked in ASME BPVC Section V Article 2.",
  },
  {
    question: "What is the difference between film RT, CR, and DR?",
    answer:
      "Film RT uses silver-halide film cassettes that are chemically processed after exposure — still the legal reference for many pipeline and code-stamped vessel jobs. Computed Radiography (CR) uses a reusable phosphor imaging plate that is scanned by a laser to produce a digital image; exposure latitude is wider than film and logistics are simpler, but image resolution can be lower on thick sections. Digital Radiography (DR) uses flat-panel detectors or line-scan arrays that produce images in real time; DR is faster (one shot per minute vs 20+ for film development), has the best dose efficiency, and is becoming the default for in-service piping and fabrication QA. ASME V Article 2 and T-276.1 cover all three.",
  },
  {
    question: "What are the radiation safety requirements for RT?",
    answer:
      "Field industrial radiography is tightly regulated. In the US, 10 CFR 34 (NRC) and state agreement programs govern source use, surveys, and worker monitoring. Dose limits: 5 rem/year total effective dose equivalent. Site requirements: two certified radiographers (one may be assistant), survey meter, alarming dosimeter, collimator where practical, 2 mR/hr controlled boundary, 100 mR/hr restricted boundary. Operators carry NRC Radiographer cards (RT I, RT II or state equivalent) separate from ASNT Level II — both are required. In the UAE FANR Part 8 applies; in KSA the Nuclear and Radiological Regulatory Commission (NRRC) issues site-specific permits.",
  },
  {
    question: "What defects does radiography find best (and miss)?",
    answer:
      "RT excels at detecting volumetric defects: porosity (isolated or cluster), slag inclusions, tungsten inclusions, lack of penetration at weld root, burn-through, excess penetration. It also finds lack of fusion when the orientation is favorable — roughly normal to the beam. RT's classic blind spot is planar defects parallel to the radiation beam: an LOF crack on a 35° bevel face may produce almost no density change and be missed entirely. This is why weld UT (especially PAUT or TOFD) is often mandated alongside RT on critical welds, and why ASME is increasingly allowing UT as a direct RT alternative.",
  },
  {
    question: "What certification is needed to perform RT in the field?",
    answer:
      "In the US, a field radiographer needs both (1) ASNT RT Level II (SNT-TC-1A, ACCP, or NAS 410 depending on industry) and (2) an NRC or Agreement State Radiographer certification or radiation safety officer (RSO) supervision. Training is typically 80 hours classroom RT plus 40 hours radiation safety plus 400+ hours supervised field experience. International projects add country-specific regulator cards: FANR in UAE, NRRC in KSA, AERB in India. Outside the Gulf, CSWIP and PCN add RT-specific Level II schemes.",
  },
];

const cities = [
  { label: "Houston", slug: "/radiographic-testing-houston" },
  { label: "Dubai", slug: "/radiographic-testing-dubai" },
  { label: "Saudi Arabia", slug: "/radiographic-testing-saudi-arabia" },
  { label: "Abu Dhabi", slug: "/radiographic-testing-abu-dhabi" },
  { label: "Qatar", slug: "/radiographic-testing-qatar" },
  { label: "Kuwait", slug: "/radiographic-testing-kuwait" },
  { label: "Mumbai", slug: "/radiographic-testing-mumbai" },
  { label: "Delhi", slug: "/radiographic-testing-delhi" },
  { label: "Chennai", slug: "/radiographic-testing-chennai" },
  { label: "Bangalore", slug: "/radiographic-testing-bangalore" },
  { label: "Singapore", slug: "/radiographic-testing-singapore" },
  { label: "Los Angeles", slug: "/radiographic-testing-los-angeles" },
  { label: "New Orleans", slug: "/radiographic-testing-new-orleans" },
  { label: "UK", slug: "/radiographic-testing-uk" },
  { label: "Calgary", slug: "/radiographic-testing-calgary" },
];

export default function RadiographicTestingHub() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: "Radiographic Testing Services",
        serviceType: "Radiographic Testing (RT, DR, CR)",
        provider: { "@id": "https://atlantisndt.com/#organization" },
      },
      {
        "@type": "WebPage",
        "@id": "https://atlantisndt.com/radiographic-testing",
        name: "Radiographic Testing (RT) 2026 Hub",
      },
    ],
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation />
      <SEOHead
        title="Radiographic Testing (RT) 2026: Film, CR, DR Services & Safety Codes"
        description="Industrial radiography: Ir-192, Se-75, Co-60, X-ray. Film, CR, DR on welds & castings. ASME V Article 2, API 1104, 10 CFR 34. Licensed radiographers."
        keywords="radiographic testing, industrial radiography, RT inspection, Ir-192, iridium 192, Se-75, Co-60, digital radiography, computed radiography, ASME V Article 2, API 1104 RT, RT Level II"
        canonical="https://atlantisndt.com/radiographic-testing"
        structuredData={structuredData}
        faq={faqs}
      />
            <TableOfContents items={[{ id: "overview", label: "Radiographic Testing Overview" }, { id: "applications", label: "Applications" }, { id: "certification", label: "Certification" }, { id: "faq", label: "FAQ" }]} />
      <Breadcrumbs />

      {/* HERO */}
      <section className="bg-gradient-to-br from-[#004aad] to-blue-800 text-white pt-24 pb-16">
        <div className="container mx-auto max-w-6xl px-6">
          <div className="flex items-center gap-2 text-blue-200 mb-4"><FileSearch className="w-5 h-5" /><span>RT Pillar Hub</span></div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Radiographic Testing (RT) 2026: Services, Safety & Code Compliance</h1>
          <p className="text-xl text-blue-100 max-w-3xl mb-8">
            Volumetric weld inspection using Ir-192, Se-75, Co-60, and X-ray sources. Film, CR, and DR workflows. Licensed radiographers in 20+ countries. ASME V Article 2, API 1104, and NRC/FANR/AERB compliant.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/contact" className="inline-block bg-white text-[#004aad] px-8 py-3 rounded-lg font-semibold hover:bg-slate-100 transition text-center">Request an RT Quote</Link>
            <Link to="/ndt-training" className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition justify-center">RT Training →</Link>
          </div>
        </div>
      </section>

      {/* SAFETY CALLOUT */}
      <section className="py-10 bg-amber-50 border-y border-amber-200">
        <div className="container mx-auto max-w-6xl px-6 flex items-start gap-4">
          <AlertTriangle className="w-8 h-8 text-amber-600 shrink-0" />
          <div>
            <h3 className="font-semibold text-amber-900 mb-1">Radiation Safety Is Non-Negotiable</h3>
            <p className="text-sm text-amber-800 leading-relaxed">
              Industrial radiography uses sealed radioactive sources capable of delivering a lethal dose in seconds at the source position. Every job we mobilize operates under a documented Radiation Protection Program with site surveys, dual-dosimetry, alarming ratemeter, and a 2 mR/hr controlled area boundary per 10 CFR 34. If a vendor is not showing you their current RSO license and radiographer certification cards, walk away.
            </p>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-16 bg-white">
        <div className="container mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">How Radiography Reveals Weld Defects</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              Radiation sent through a weld attenuates based on path length and density. Where a defect exists — porosity, slag, or an open lack-of-fusion plane — less material lies in the beam path, so more radiation reaches the detector on the far side. Film or digital detector records this as a darker area (on film) or higher pixel value (on DR).
            </p>
            <p className="text-slate-700 leading-relaxed mb-4">
              Image quality is governed by three fundamentals: geometric unsharpness (source size + distance), film sensitivity (density, contrast, IQI visibility), and penetrameter (IQI) placement. An image that does not resolve the required penetrameter wire or hole is rejected — regardless of what it shows about the weld.
            </p>
            <p className="text-slate-700 leading-relaxed">
              Reading radiographs is a craft. A certified Level II reader works in a darkened viewing room with a calibrated high-intensity viewer, interpreting indication shape, density, and sharpness to classify porosity clusters, elongated slag, cold lap, or fatigue cracks — each with its own acceptance rule in ASME VIII UW-51 or API 1104 Section 9.
            </p>
          </div>
          <Card className="bg-slate-50 border-l-4 border-[#004aad]">
            <CardHeader><CardTitle>Radiation Sources We Use</CardTitle></CardHeader>
            <CardContent className="text-sm text-slate-700 leading-relaxed space-y-3">
              <div><strong>Iridium-192 (Ir-192):</strong> 74-day half-life, 380 keV average energy. Workhorse for 6–80 mm steel. Typical source strength: 30–100 Ci.</div>
              <div><strong>Selenium-75 (Se-75):</strong> 120-day half-life, lower energy. Sharper images on thin-wall (3–25 mm) pipe — preferred for chemical and refinery piping fabrication.</div>
              <div><strong>Cobalt-60 (Co-60):</strong> 5.27-year half-life, 1.25 MeV. Used on thick welds above 50 mm carbon steel where Ir-192 penetration is marginal.</div>
              <div><strong>X-ray generators:</strong> 160–450 kV portable constant-potential tubes. No radioactive source, smaller controlled area, ideal for shop fabrication halls.</div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* WORKFLOWS */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Film, CR, and DR — When to Use Each</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-t-4 border-t-slate-500">
              <CardHeader><CardTitle className="text-lg">Conventional Film RT</CardTitle></CardHeader>
              <CardContent className="text-sm text-slate-700 leading-relaxed space-y-2">
                <p>Silver-halide film developed in a portable darkroom on site. Still the default reference for pipeline and ASME code-stamped welds where authorities require film archives.</p>
                <p><strong>Pros:</strong> highest resolution, legally defensible, universally accepted.</p>
                <p><strong>Cons:</strong> chemical disposal, ~25-minute cycle per shot, film archive storage.</p>
              </CardContent>
            </Card>
            <Card className="border-t-4 border-t-blue-500">
              <CardHeader><CardTitle className="text-lg">Computed Radiography (CR)</CardTitle></CardHeader>
              <CardContent className="text-sm text-slate-700 leading-relaxed space-y-2">
                <p>Reusable phosphor imaging plates scanned by a laser reader. Digital image quality comparable to film when operated correctly; exposure latitude much wider.</p>
                <p><strong>Pros:</strong> no chemicals, digital archive, 5–8 minute cycle per shot.</p>
                <p><strong>Cons:</strong> plate wear, scanner maintenance, ASME V T-276.1 qualification required.</p>
              </CardContent>
            </Card>
            <Card className="border-t-4 border-t-emerald-500">
              <CardHeader><CardTitle className="text-lg">Digital Radiography (DR)</CardTitle></CardHeader>
              <CardContent className="text-sm text-slate-700 leading-relaxed space-y-2">
                <p>Flat-panel detectors producing images in seconds. Highest dose efficiency — shorter exposures reduce controlled-area footprint.</p>
                <p><strong>Pros:</strong> real-time review, lowest dose, best for in-service piping and turnaround work.</p>
                <p><strong>Cons:</strong> panel cost ($40K–$120K), thickness range limits at extreme ends.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CODES */}
      <section className="py-16 bg-white">
        <div className="container mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Codes & Acceptance Standards</h2>
          <div className="overflow-x-auto bg-white rounded-xl shadow-sm border border-slate-200">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-100 uppercase text-xs tracking-wide text-slate-800">
                <tr><th className="px-4 py-3">Code</th><th className="px-4 py-3">Scope</th><th className="px-4 py-3">Acceptance</th></tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                <tr><td className="px-4 py-3 font-medium">ASME BPVC V Art 2</td><td className="px-4 py-3">Technique</td><td className="px-4 py-3">IQI, density 1.8–4.0, geometric unsharpness limits</td></tr>
                <tr><td className="px-4 py-3 font-medium">ASME VIII UW-51</td><td className="px-4 py-3">Vessel welds</td><td className="px-4 py-3">Full radiography acceptance rules</td></tr>
                <tr><td className="px-4 py-3 font-medium">API 1104 §9</td><td className="px-4 py-3">Pipeline welds</td><td className="px-4 py-3">Porosity, slag, LOF, undercut per joint design factor</td></tr>
                <tr><td className="px-4 py-3 font-medium">AWS D1.1 Clause 8</td><td className="px-4 py-3">Structural steel</td><td className="px-4 py-3">Cyclic vs static load acceptance tables</td></tr>
                <tr><td className="px-4 py-3 font-medium">ASTM E94, E1032</td><td className="px-4 py-3">Standard practice</td><td className="px-4 py-3">General industrial RT and in-motion RT</td></tr>
                <tr><td className="px-4 py-3 font-medium">10 CFR 34</td><td className="px-4 py-3">US safety</td><td className="px-4 py-3">Radiographer licensing, surveys, boundaries</td></tr>
                <tr><td className="px-4 py-3 font-medium">ISO 17636-1/2</td><td className="px-4 py-3">European weld RT</td><td className="px-4 py-3">Film and digital detector procedures</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* APPLICATIONS */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Where RT Delivers Value</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card><CardHeader><CardTitle className="text-base">Pipeline Construction</CardTitle></CardHeader>
              <CardContent className="text-sm text-slate-700 leading-relaxed">
                Single wall single image (SWSI) or double-wall panoramic on cross-country pipelines. API 1104 acceptance. Typical: 80–120 welds/day per two-crew team.
              </CardContent></Card>
            <Card><CardHeader><CardTitle className="text-base">Pressure Vessel Fabrication</CardTitle></CardHeader>
              <CardContent className="text-sm text-slate-700 leading-relaxed">
                ASME Section VIII Div 1/2 full radiography on butt welds. X-ray in the fabrication hall, Ir-192 on heavy walls. CR becoming the shop default.
              </CardContent></Card>
            <Card><CardHeader><CardTitle className="text-base">Refinery Piping</CardTitle></CardHeader>
              <CardContent className="text-sm text-slate-700 leading-relaxed">
                Se-75 on sour-service alloy piping for sharper image on thin wall. API 570 repair welds and turnaround RT campaigns.
              </CardContent></Card>
            <Card><CardHeader><CardTitle className="text-base">Castings & Forgings</CardTitle></CardHeader>
              <CardContent className="text-sm text-slate-700 leading-relaxed">
                Valve body shrinkage, turbine casing porosity, engine block sand inclusions. Typically shop X-ray to ASTM E446/E186 reference radiographs.
              </CardContent></Card>
          </div>
        </div>
      </section>

      {/* CITIES */}
      <section className="py-16 bg-white">
        <div className="container mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Radiographic Testing — Cities Served</h2>
          <p className="text-slate-600 mb-8 max-w-3xl">
            Source-licensed teams in each hub. Every mobilization includes RSO oversight, documented radiation protection program, and insurance certificates sized to client requirements.
          </p>
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-3">
            {cities.map((c) => (
              <Link key={c.slug} to={c.slug} className="group rounded-lg border border-slate-200 bg-white p-4 hover:border-[#004aad] hover:shadow-sm transition">
                <div className="flex items-center gap-2"><MapPin className="w-4 h-4 text-[#004aad] shrink-0" /><span className="text-slate-900 font-medium group-hover:text-[#004aad]">{c.label}</span></div>
                <div className="text-xs text-slate-500 mt-1">RT · CR · DR</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto max-w-4xl px-6">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">RT — Frequently Asked</h2>
          <div className="space-y-4">
            {faqs.map((f, i) => (
              <details key={i} className="bg-white rounded-lg border border-slate-200 p-5">
                <summary className="cursor-pointer font-semibold text-slate-900 flex items-start gap-2">
                  <Zap className="w-5 h-5 text-[#004aad] shrink-0 mt-0.5" />
                  <span>{f.question}</span>
                </summary>
                <p className="mt-3 text-slate-700 text-sm leading-relaxed pl-7">{f.answer}</p>
              </details>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link to="/blog/radiographic-testing" className="text-[#004aad] hover:underline font-medium">Read the full RT blog deep dive →</Link>
            <span className="mx-2 text-slate-400">|</span>
            <Link to="/ut-vs-rt-comparison" className="text-[#004aad] hover:underline font-medium">UT vs RT Comparison →</Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-[#004aad] to-blue-800 text-white">
        <div className="container mx-auto max-w-4xl px-6 text-center">
          <ShieldAlert className="w-12 h-12 mx-auto mb-4 text-blue-200" />
          <h2 className="text-3xl font-bold mb-4">Need Licensed RT on a Project?</h2>
          <p className="text-blue-100 max-w-2xl mx-auto mb-6">
            Pipeline construction, pressure vessel shop fabrication, and turnaround piping — our RT teams carry current radiographer cards for NRC, FANR, NRRC, and AERB. Quote turnaround under 24 hours on projects over $25K.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="inline-block bg-white text-[#004aad] px-8 py-3 rounded-lg font-semibold hover:bg-slate-100 transition">Request a Quote</Link>
            <Link to="/ultrasonic-testing" className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition justify-center">Compare to UT →</Link>
          </div>
        </div>
      </section>

      <ContactDetails />
    </div>
  );
}
