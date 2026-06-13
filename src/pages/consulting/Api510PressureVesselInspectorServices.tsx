import { Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import ContactDetails from "@/components/ContactDetails";
import { CheckCircle, ArrowRight, ChevronDown } from "lucide-react";
import { useState } from "react";

const FAQS = [
  { q: "What is API 510 inspector services?", a: "API 510 inspector services help owner-operators manage in-service pressure vessels under the API 510 Pressure Vessel Inspection Code (11th Edition 2022). Scope covers external + internal inspection, on-stream inspection planning, RBI per API 581, fitness-for-service per API 579, repair / alteration / rerating per the National Board Inspection Code (NBIC) and ASME PCC-2, and code-defensible inspection-interval setting." },
  { q: "Which vessels do you cover?", a: "All standard pressure vessels: reactors, separators, knock-out drums, towers, columns, heat exchangers (shell side), spheres, bullet tanks, accumulators, surge drums, atmospheric storage tanks (API 653 scope), high-pressure hydrocrackers, hydrotreaters, FCC overhead drums. Special expertise in hot vacuum towers (creep), cyclic-service vessels, sour-service vessels per NACE MR0175." },
  { q: "What codes do you work to?", a: "API 510 11th Edition 2022, ASME Section VIII Division 1 + 2, ASME Section V (NDE), API 571 (damage mechanisms), API 572 (inspection practices for pressure vessels), API 580 / 581 (RBI), API 579-1/ASME FFS-1 2021 (FFS), ASME PCC-2 (repair), NBIC (repair / alteration). NACE MR0175 / ISO 15156 (sour service), API 945 (amine units), API 939-C (cracking in caustic), API 938-A (carbamate corrosion)." },
  { q: "How fast can an engagement start?", a: "Standard scope-of-work to first site visit is 5-10 business days. Emergency engagements (RBI workshop for upcoming turnaround, FFS argument on found defect, audit defence) closed inside 48 hours. We field API 510 Authorized Inspectors with current API ICP credentials and ASNT Level III NDT support." },
  { q: "Can you serve as our owner-operator API 510 inspector of record?", a: "Yes. For owner-operators without a full-time API 510 Authorized Inspector, we provide an outsourced inspector-of-record model — named API 510 Authorized Inspector signs the inspection records, attends turnaround inspections, defends the program at insurer / regulator / Jurisdiction audit. Engagement documented in your written inspection program per API 510 §4." },
  { q: "What is fitness-for-service (FFS) work?", a: "When a vessel defect is found that exceeds simple acceptance criteria (e.g. general thinning, localised metal loss, blisters, crack-like flaws, brittle fracture concerns, creep damage, dent / gouge, weld misalignment), FFS per API 579-1/ASME FFS-1 evaluates whether the equipment is still safe for continued service. Levels 1, 2, 3. Outcome: signed FFS report defending continued service, rerate, repair, or replace." },
  { q: "Do you support the insurer / Jurisdiction R-Stamp audit?", a: "Yes. We attend insurer audits (Aon, Marsh, AXA XL), state Jurisdictional inspector visits, NB-related audits, OSHA PSM RCA support. R-Stamp organisations supported during pressure-vessel repair work per the NBIC. Pre-audit gap closure, on-site audit attendance, NCR response, corrective-action close-out." },
  { q: "What about high-temperature and sour-service vessels?", a: "Creep regime work (API 579 Part 10) for hot vacuum towers, hydrotreaters, hydrocrackers — remaining-life calc via Larson-Miller, omega method, creep-fatigue interaction. Sour-service vessels per NACE MR0175 — SSC / HIC / SOHIC susceptibility, in-service inspection technique selection (WFMT for HIC, TOFD / PAUT for through-wall cracks), repair welding metallurgy (low-Si carbon steel, hardness control)." }
];

export default function Api510PressureVesselInspectorServices() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white">
      <SEOHead
        title="API 510 Pressure Vessel Inspector Services — In-Service Inspection"
        description="Atlantis API 510 inspectors — pressure vessel programs, in-service inspection, RBI per API 581, FFS per API 579. Affordable, accessible expert engagements."
        canonical="/consulting/api-510-pressure-vessel-inspector-services"
        faq={FAQS.map(f => ({ question: f.q, answer: f.a }))}
      />
      <Navigation />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 max-w-6xl">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Consulting", href: "/consulting" }, { label: "API 510 Pressure Vessel Inspector Services" }]} />

        <section className="mt-6 mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">API 510 Pressure Vessel Inspector Services</h1>
          <p className="text-xl text-slate-300 mb-6 max-w-3xl leading-relaxed">
            Atlantis NDT — <span className="text-emerald-400 font-semibold">API 510 Authorized Inspectors</span> with current API ICP credentials. In-service pressure vessel inspection programs, RBI per API 581, FFS per API 579, repair / alteration / rerating per ASME PCC-2 + NBIC. Refineries, petrochem, sour service. <span className="text-emerald-400 font-semibold">Affordable. Accessible. Fully Customizable engagements.</span>
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="mailto:info@atlantisndt.com?subject=API%20510%20engagement" className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors">Request a consultation <ArrowRight className="w-4 h-4" /></a>
            <Link to="/consulting" className="inline-flex items-center gap-2 bg-slate-700 hover:bg-slate-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors">All consulting services</Link>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-5">What we deliver</h2>
          <ul className="grid md:grid-cols-2 gap-x-8 gap-y-3 text-slate-200">
            <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" /><span>Owner-operator inspector-of-record (API 510 Authorized)</span></li>
            <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" /><span>Written inspection program authoring per API 510 §4</span></li>
            <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" /><span>RBI program design per API 581 (qualitative + semi-quant)</span></li>
            <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" /><span>FFS per API 579-1/ASME FFS-1 Levels 1, 2, 3</span></li>
            <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" /><span>Repair, alteration, rerating per ASME PCC-2 + NBIC</span></li>
            <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" /><span>Damage-mechanism reviews per API 571</span></li>
            <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" /><span>Creep regime work per API 579 Part 10</span></li>
            <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" /><span>Sour-service vessels per NACE MR0175</span></li>
            <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" /><span>Insurer / Jurisdictional audit support</span></li>
            <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" /><span>Expert witness opinions on disputed vessel decisions</span></li>
          </ul>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-5">Methodology</h2>
          <ol className="space-y-3 text-slate-200 list-decimal list-inside">
            <li>Damage-mechanism review per API 571 + 572</li>
            <li>RBI workshop + inspection-interval setting</li>
            <li>External / on-stream / internal inspection planning</li>
            <li>Field inspection (UT, RT, PT, MT, PAUT, TOFD, WFMT)</li>
            <li>Findings analysis + FFS where required</li>
            <li>Repair / alteration / rerating scope per ASME PCC-2</li>
            <li>Inspector-of-record sign-off + audit defence</li>
          </ol>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-5">FAQ</h2>
          <div className="space-y-3">
            {FAQS.map((f, i) => (
              <button key={i} onClick={() => setOpenIdx(openIdx === i ? null : i)} className="w-full text-left bg-slate-800/50 hover:bg-slate-800 border border-slate-700 rounded-lg p-4 transition-colors">
                <div className="flex items-start justify-between gap-3">
                  <span className="font-semibold text-white">{f.q}</span>
                  <ChevronDown className={`w-5 h-5 flex-shrink-0 transition-transform ${openIdx === i ? "rotate-180" : ""}`} />
                </div>
                {openIdx === i && <p className="mt-3 text-slate-300 leading-relaxed">{f.a}</p>}
              </button>
            ))}
          </div>
        </section>

        <ContactDetails />
      </main>
    </div>
  );
}
