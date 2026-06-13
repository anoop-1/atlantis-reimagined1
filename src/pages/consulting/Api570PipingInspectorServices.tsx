import { Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import ContactDetails from "@/components/ContactDetails";
import { CheckCircle, ArrowRight, Shield, Globe, ChevronDown } from "lucide-react";
import { useState } from "react";

const FAQS = [
  { q: "What is an API 570 piping inspector service?", a: "API 570 inspector services support owner-operators in maintaining safe, code-compliant in-service piping under the API 570 Piping Inspection Code (3rd Edition 2022). Scope covers visual + NDT inspection of process piping, corrosion monitoring location (CML) tracking, RBI program design per API 581, fitness-for-service evaluation per API 579-1/ASME FFS-1, repair / re-rating recommendations and code-defensible inspection-interval setting." },
  { q: "Which industries do you serve?", a: "Refineries, petrochemical complexes, gas processing plants, chemical manufacturing, LNG terminals, midstream gathering systems. Real client list spans US Gulf Coast, GCC (Aramco, ADNOC, QatarEnergy contractor sites), India (IOCL, BPCL, HPCL, Reliance Jamnagar) and Southeast Asia (PETRONAS, Pertamina, PTT)." },
  { q: "What inspection codes do you work to?", a: "API 570 3rd Edition 2022 (with all addenda), API 574 (inspection practices for piping system components), API 578 (material verification), API 580 / 581 (RBI), API 579-1/ASME FFS-1 2021 (FFS), ASME B31.3 Process Piping, ASME B31.4 Liquid Pipelines, ASME B31.8 Gas Pipelines, ASME Section V (NDE), NACE MR0175 / ISO 15156 (sour service), NACE SP0102 (CUI)." },
  { q: "How fast can an engagement start?", a: "Standard scope-of-work to first site visit is 5-10 business days. Emergency engagements (urgent FFS argument, unplanned leak investigation, audit defence) we have closed inside 48 hours. We field API 570 Authorized Inspectors with current API ICP credentials and ASNT Level III NDT support." },
  { q: "Do you cover CUI (corrosion under insulation) programs?", a: "Yes. CUI program design is a core service line. Approach: damage-mechanism review per API 571, susceptibility mapping per API 583 / NACE SP0198, inspection technique selection (RT pulsed eddy current, neutron backscatter, profile RT, on-stream insulation removal), CML placement and interval setting. Real outcomes include 40-60% reduction in unplanned-shutdown piping failures within 24 months." },
  { q: "Can you serve as our owner-operator API 570 inspector of record?", a: "Yes. For owner-operators without a full-time API 570 Authorized Inspector, we provide an outsourced inspector-of-record model — named API 570 Authorized Inspector signs the inspection records, attends turnaround inspections, defends the program at insurer / regulator audit. Engagement is documented in your written inspection program per API 570 §6." },
  { q: "What is fitness-for-service work?", a: "When a piping defect is found that exceeds simple acceptance criteria, FFS per API 579-1/ASME FFS-1 evaluates whether the equipment is still safe for continued service. Levels: Level 1 (screening, conservative), Level 2 (detailed engineering analysis), Level 3 (advanced — FEA / fracture mechanics). Outcome: signed FFS report defending continued service for X more years, rerate, repair, or replace decision." },
  { q: "Do you support insurer and regulator audits?", a: "Yes. We attend insurer audits (Aon, Marsh McLennan, AXA XL inspections), state boiler-and-pressure-vessel inspector visits, EPA / TCEQ / DEQ audits, OSHA PSM RCA support. Pre-audit gap closure, on-site audit attendance, NCR response and corrective-action close-out." }
];

export default function Api570PipingInspectorServices() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white">
      <SEOHead
        title="API 570 Piping Inspector Services — Process Piping Audits"
        description="Atlantis API 570 certified piping inspectors — process piping audits, CUI inspection programs, RBI per API 581. Refineries, petrochem, gas processing. Affordable, accessible."
        canonical="/consulting/api-570-piping-inspector-services"
        faq={FAQS.map(f => ({ question: f.q, answer: f.a }))}
      />
      <Navigation />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 max-w-6xl">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Consulting", href: "/consulting" }, { label: "API 570 Piping Inspector Services" }]} />

        <section className="mt-6 mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">API 570 Piping Inspector Services</h1>
          <p className="text-xl text-slate-300 mb-6 max-w-3xl leading-relaxed">
            Atlantis NDT — <span className="text-emerald-400 font-semibold">API 570 Authorized Inspectors</span> with current API ICP credentials. Process piping audits, CUI program design, RBI per API 581, FFS per API 579, owner-operator inspector-of-record. Refineries, petrochem, gas processing. <span className="text-emerald-400 font-semibold">Affordable. Accessible. Fully Customizable engagements.</span>
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="mailto:info@atlantisndt.com?subject=API%20570%20engagement" className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors">Request a consultation <ArrowRight className="w-4 h-4" /></a>
            <Link to="/consulting" className="inline-flex items-center gap-2 bg-slate-700 hover:bg-slate-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors">All consulting services</Link>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-5">What we deliver</h2>
          <ul className="grid md:grid-cols-2 gap-x-8 gap-y-3 text-slate-200">
            <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" /><span>Owner-operator inspector-of-record (API 570 Authorized)</span></li>
            <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" /><span>Written inspection program authoring (per API 570 §6)</span></li>
            <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" /><span>CML (Corrosion Monitoring Location) selection &amp; tracking</span></li>
            <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" /><span>RBI program per API 581 (qualitative + semi-quant)</span></li>
            <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" /><span>FFS per API 579-1/ASME FFS-1 (Level 1 / 2 / 3)</span></li>
            <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" /><span>CUI program design per API 583 / NACE SP0198</span></li>
            <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" /><span>Sour-service piping per NACE MR0175 / ISO 15156</span></li>
            <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" /><span>Insurer / regulator audit support</span></li>
          </ul>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-5">Methodology</h2>
          <ol className="space-y-3 text-slate-200 list-decimal list-inside">
            <li>Scope intake + damage-mechanism review per API 571</li>
            <li>Susceptibility ranking + CML map</li>
            <li>RBI workshop + inspection-interval setting</li>
            <li>Field inspection (UT, RT, PT, VT, PEC for CUI)</li>
            <li>Findings analysis + FFS where required</li>
            <li>Inspection report, recommendations, repair scope</li>
            <li>Audit defence at insurer / regulator visit</li>
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
