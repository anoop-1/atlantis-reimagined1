import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import ContactDetails from "@/components/ContactDetails";
import { Link } from "react-router-dom";
import { CheckCircle, Award, BookOpen, Clock, FileText, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

const examTopics = [
  "Piping design and construction (ASME B31.3, B31.4, B31.8)",
  "Inspection planning and frequencies under API 570",
  "Corrosion mechanisms and corrosion rate determination",
  "Remaining life calculations and retirement thickness",
  "Risk-Based Inspection (RBI) methodology per API 580/581",
  "Injection point inspection and small bore piping",
  "NDE methods: UT, RT, MT, PT, VT, PAUT",
  "Repairs, alterations, rerating — API 570 requirements",
  "Pressure testing and leak testing criteria",
  "Fitness-for-service assessment (API 579)",
];

const openCodes = [
  { code: "API 570", title: "Piping Inspection Code — In-service Inspection, Rating, Repair, and Alteration of Process Piping" },
  { code: "ASME B31.3", title: "Process Piping" },
  { code: "ASME B31.4", title: "Pipeline Transportation Systems for Liquids and Slurries" },
  { code: "ASME B31.8", title: "Gas Transmission and Distribution Piping Systems" },
  { code: "ASME Section V", title: "Nondestructive Examination" },
  { code: "ASME Section IX", title: "Welding and Brazing Qualifications" },
  { code: "API 571", title: "Damage Mechanisms Affecting Fixed Equipment in the Refining Industry" },
  { code: "API 574", title: "Inspection Practices for Piping System Components" },
  { code: "API 578", title: "Material Verification Program for New and Existing Alloy Piping Systems" },
  { code: "API 580/581", title: "Risk-Based Inspection" },
];

const faqs = [
  {
    q: "What is API 570 certification?",
    a: "API 570 is the American Petroleum Institute's certification for Piping Inspectors. It qualifies professionals to inspect, repair, alter, and rerate in-service process piping systems in refineries, chemical plants, and similar facilities. The API 570 Piping Inspector certification is internationally recognized and required by many oil & gas operators for inspectors working on process piping.",
  },
  {
    q: "What are the eligibility requirements for the API 570 exam?",
    a: "Candidates need: (1) an engineering degree plus 1 year of relevant piping inspection experience, OR (2) a 2-year technical degree plus 2 years of experience, OR (3) a high school diploma plus 5 years of experience. All experience must be in piping inspection, design, construction, or maintenance within the petrochemical or refining industry.",
  },
  {
    q: "What is the API 570 exam format?",
    a: "The API 570 exam is an open-book examination with 150 questions completed in 6 hours. Questions are drawn from API 570, ASME B31.3, ASME Section V and IX, API 574, and API 578. A minimum score of 70% is required to pass. The exam is offered at Pearson VUE testing centers worldwide.",
  },
  {
    q: "How long is API 570 certification valid?",
    a: "API 570 certification is valid for 3 years from the date of certification. Renewal requires either passing the recertification exam or earning 30 Professional Development Hours (PDHs) distributed across relevant technical categories. Many inspectors find the PDH route more convenient for renewal.",
  },
  {
    q: "What piping systems does API 570 cover?",
    a: "API 570 covers in-service process piping systems including: high-pressure piping, high-temperature piping, piping handling hydrocarbons and chemicals, injection points, small-bore piping, and piping at risk of corrosion under insulation (CUI). It does not cover pipelines, gas distribution systems, or fired boiler tubing (which have separate standards).",
  },
  {
    q: "What is the inspection frequency under API 570?",
    a: "API 570 inspection intervals depend on corrosion rate and risk classification. For thickness measurement (TML) inspections: High risk — half the remaining life or 5 years maximum; Medium risk — up to 10 years; Low risk — up to 10 years. Risk-Based Inspection (RBI) per API 580 can extend or reduce these intervals based on consequence and likelihood of failure analysis.",
  },
  {
    q: "What NDT methods are most important for API 570 inspectors?",
    a: "Key NDT methods under API 570: Ultrasonic Testing (UT) for wall thickness measurement and corrosion mapping, Radiographic Testing (RT) for weld and corrosion assessment, Phased Array UT (PAUT) for complex geometries, Pulsed Eddy Current (PEC) for inspection through insulation (CUI), Magnetic Particle Testing (MT) and Liquid Penetrant Testing (PT) for surface cracks. API 570 inspectors must understand each method's capabilities and limitations.",
  },
  {
    q: "What is the difference between API 570 and API 653?",
    a: "API 570 covers in-service inspection of process piping systems (pipes, valves, fittings). API 653 covers above-ground storage tanks (atmospheric storage tanks built to API 650). Both are API certifications for fixed equipment inspectors, but they apply to different equipment types. Many inspectors hold both certifications, as refineries and chemical plants have both piping systems and storage tanks.",
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-slate-200 rounded-xl overflow-hidden">
      <button
        className="w-full flex items-center justify-between p-5 text-left font-semibold text-slate-800 bg-white hover:bg-slate-50 transition"
        onClick={() => setOpen(!open)}
      >
        <span>{q}</span>
        {open ? <ChevronUp className="w-5 h-5 text-[#004aad] flex-shrink-0" /> : <ChevronDown className="w-5 h-5 text-[#004aad] flex-shrink-0" />}
      </button>
      {open && (
        <div className="px-5 pb-5 text-slate-600 leading-relaxed bg-white border-t border-slate-100">{a}</div>
      )}
    </div>
  );
}

export default function API570Training() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Course",
        "name": "API 570 Piping Inspector Certification Training",
        "description": "Comprehensive training for the API 570 Piping Inspector exam. Open-book exam preparation covering all required codes and standards.",
        "provider": { "@type": "Organization", "name": "Atlantis NDT", "url": "https://atlantisndt.com" },
        "courseMode": ["onsite", "online"],
        "educationalCredentialAwarded": "API 570 Piping Inspector Certification",
        "hasCourseInstance": [
          { "@type": "CourseInstance", "name": "API 570 Training — Dubai", "location": "Dubai, UAE", "courseMode": "onsite" },
          { "@type": "CourseInstance", "name": "API 570 Training — Houston", "location": "Houston, TX", "courseMode": "onsite" },
          { "@type": "CourseInstance", "name": "API 570 Training — Online", "courseMode": "online" },
        ],
      },
      {
        "@type": "FAQPage",
        "mainEntity": faqs.map((f) => ({
          "@type": "Question",
          "name": f.q,
          "acceptedAnswer": { "@type": "Answer", "text": f.a },
        })),
      },
    ],
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation />
      <SEOHead
        title="API 570 Training & Certification | Piping Inspector Exam Prep | Atlantis NDT"
        description="API 570 Piping Inspector certification training: exam prep for open-book format, all required codes (ASME B31.3, API 571, 574, 578). Dubai, Houston & online. 95% pass rate. Enrol now."
        keywords="API 570 training, API 570 certification, API 570 piping inspector, API 570 exam prep, API 570 course, piping inspector certification, API 570 inspection, API 570 study guide, API 570 exam format, ASME B31.3 training, API 571 training, API 570 renewal, piping inspection course, API 570 Dubai, API 570 Houston, API 570 online"
        canonical="https://atlantisndt.com/api-570-training"
        structuredData={structuredData}
      />
      <Breadcrumbs />

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#004aad] to-blue-900 text-white pt-20 pb-16">
        <div className="container mx-auto max-w-5xl px-6">
          <div className="flex items-center gap-2 text-blue-200 mb-4 text-sm">
            <Award className="w-4 h-4" />
            <span>API Certification Training</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-5">
            API 570 Piping Inspector Training & Certification
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mb-8 leading-relaxed">
            Comprehensive exam preparation for the API 570 open-book certification. All required codes covered — ASME B31.3, API 570, API 571, 574, 578, 580. Available in Dubai, Houston, India, and online.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/contact" className="bg-white text-[#004aad] font-bold px-6 py-3 rounded-lg hover:bg-blue-50 transition">
              Enrol Now / Get Dates
            </Link>
            <Link to="/api-653-certification" className="border border-white text-white px-6 py-3 rounded-lg hover:bg-white/10 transition">
              Also: API 653 Tank Inspector
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <div className="bg-white border-b border-slate-200">
        <div className="container mx-auto max-w-5xl px-6 py-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { val: "95%", label: "First-attempt pass rate" },
            { val: "150", label: "Exam questions (open-book)" },
            { val: "6 hrs", label: "Exam duration" },
            { val: "3 yrs", label: "Certification validity" },
          ].map((s, i) => (
            <div key={i}>
              <div className="text-3xl font-bold text-[#004aad]">{s.val}</div>
              <div className="text-slate-500 text-sm mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="container mx-auto max-w-5xl px-6 py-12 grid md:grid-cols-3 gap-10">
        <div className="md:col-span-2 space-y-12">

          {/* What is API 570 */}
          <section>
            <h2 className="text-3xl font-bold mb-5" style={{ color: "#004aad" }}>What Is API 570 and Why Is It Important?</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              <strong>API 570</strong> (Piping Inspection Code: In-service Inspection, Rating, Repair, and Alteration of Process Piping) is the American Petroleum Institute's standard governing the inspection of in-service process piping at refineries, petrochemical plants, chemical processing facilities, and related industrial sites.
            </p>
            <p className="text-slate-700 leading-relaxed mb-4">
              The <strong>API 570 Piping Inspector certification</strong> is the industry benchmark for professionals responsible for assessing the integrity of process piping systems. Certified inspectors determine inspection intervals, approve repair methods, interpret NDE results, and ensure compliance with ASME and API codes — protecting worker safety and preventing costly unplanned shutdowns.
            </p>
            <p className="text-slate-700 leading-relaxed">
              The certification is widely required by asset owners in the oil & gas, refining, chemical, and petrochemical industries — and is recognised globally including in the USA, Middle East, UK, and Asia-Pacific.
            </p>
          </section>

          {/* Exam Topics */}
          <section>
            <h2 className="text-3xl font-bold mb-5" style={{ color: "#004aad" }}>API 570 Exam Topics Covered</h2>
            <div className="bg-white rounded-xl p-6 shadow border border-slate-100">
              <ul className="space-y-3">
                {examTopics.map((topic, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700">{topic}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Open Codes */}
          <section>
            <h2 className="text-3xl font-bold mb-5" style={{ color: "#004aad" }}>API 570 Open Reference Codes</h2>
            <p className="text-slate-700 mb-5">The exam is open-book. Knowing which code to reference for each question type is a core exam skill. Atlantis NDT training includes tab-marking and navigation practice for all permitted references.</p>
            <div className="overflow-x-auto rounded-xl border border-slate-200">
              <table className="w-full text-sm">
                <thead className="bg-[#004aad] text-white">
                  <tr>
                    <th className="text-left p-4 font-semibold w-32">Code</th>
                    <th className="text-left p-4 font-semibold">Title</th>
                  </tr>
                </thead>
                <tbody>
                  {openCodes.map((c, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <td className="p-4 font-semibold text-[#004aad]">{c.code}</td>
                      <td className="p-4 text-slate-700">{c.title}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Training Format */}
          <section>
            <h2 className="text-3xl font-bold mb-5" style={{ color: "#004aad" }}>Atlantis NDT API 570 Training Format</h2>
            <div className="grid md:grid-cols-3 gap-5">
              {[
                { icon: BookOpen, title: "Classroom (5 days)", detail: "Instructor-led in Dubai, Houston, and India. Small class sizes (max 12). Intensive code navigation, practice questions, and mock exam on Day 5." },
                { icon: FileText, title: "Online (Self-paced)", detail: "Video lectures, digital code materials, 500+ practice questions. Access for 6 months. Instructor Q&A sessions via Zoom weekly." },
                { icon: Clock, title: "Blended / In-company", detail: "Custom schedule for corporate groups. Minimum 5 candidates. Delivered at your facility or our training centres globally." },
              ].map((f, i) => {
                const Icon = f.icon;
                return (
                  <div key={i} className="bg-white rounded-xl p-6 shadow border border-slate-100">
                    <div className="w-10 h-10 bg-[#004aad] rounded-lg flex items-center justify-center mb-3">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="font-bold text-[#004aad] mb-2">{f.title}</h3>
                    <p className="text-slate-600 text-sm">{f.detail}</p>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Related Certifications */}
          <section className="bg-slate-100 rounded-2xl p-8 border border-slate-200">
            <h2 className="text-2xl font-bold mb-4" style={{ color: "#004aad" }}>Related API Certifications</h2>
            <p className="text-slate-600 mb-5">Many piping inspectors hold multiple API certifications to broaden their scope of work.</p>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { cert: "API 510", desc: "Pressure Vessel Inspector", link: "/api-510-certification" },
                { cert: "API 653", desc: "Above Ground Storage Tank Inspector", link: "/api-653-certification" },
                { cert: "ASNT Level III", desc: "NDT Personnel Certification", link: "/asnt-certification" },
              ].map((r, i) => (
                <Link key={i} to={r.link} className="bg-white rounded-xl p-5 shadow border border-slate-200 hover:border-[#004aad] transition block">
                  <div className="font-bold text-[#004aad] text-lg mb-1">{r.cert}</div>
                  <div className="text-slate-600 text-sm">{r.desc}</div>
                  <div className="text-[#004aad] text-sm mt-2 font-medium">Learn more →</div>
                </Link>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section>
            <h2 className="text-3xl font-bold mb-6" style={{ color: "#004aad" }}>API 570 Certification — FAQ</h2>
            <div className="space-y-3">
              {faqs.map((f, i) => <FAQItem key={i} q={f.q} a={f.a} />)}
            </div>
          </section>

          {/* CTA */}
          <section className="bg-[#004aad] rounded-2xl p-8 text-white">
            <h2 className="text-2xl font-bold mb-3">Book Your API 570 Training</h2>
            <p className="text-blue-100 mb-6">
              Classes available in Dubai, Houston, India, and online. Corporate group bookings available worldwide. Contact us to confirm the next available dates.
            </p>
            <Link to="/contact" className="inline-block bg-white text-[#004aad] font-bold px-6 py-3 rounded-lg hover:bg-blue-50 transition">
              Enquire About API 570 Training
            </Link>
          </section>

        </div>

        {/* Sidebar */}
        <aside className="space-y-6">
          <div className="bg-white p-6 rounded-xl shadow border border-slate-100 sticky top-4">
            <h3 className="font-bold text-[#004aad] mb-4">API 570 Quick Facts</h3>
            <ul className="space-y-3 text-sm text-slate-700">
              <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" /><span>Open-book examination</span></li>
              <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" /><span>150 questions / 6 hours</span></li>
              <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" /><span>70% passing score</span></li>
              <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" /><span>3-year certification validity</span></li>
              <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" /><span>Pearson VUE testing centres</span></li>
              <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" /><span>Globally recognised</span></li>
            </ul>
            <Link to="/contact" className="block mt-5 bg-[#004aad] text-white text-center font-bold py-3 rounded-lg hover:bg-[#003580] transition text-sm">
              Enrol Now
            </Link>
          </div>

          <div className="bg-amber-50 p-6 rounded-xl border border-amber-200">
            <h3 className="font-bold text-amber-800 mb-3">Related Pages</h3>
            <ul className="space-y-2 text-sm">
              {[
                ["/api-653-certification", "API 653 Tank Inspector"],
                ["/api-510-certification", "API 510 Pressure Vessel"],
                ["/asnt-certification", "ASNT Level I II III"],
                ["/ndt-training-dubai", "NDT Training Dubai"],
                ["/consulting", "Level III Consulting"],
              ].map(([href, label]) => (
                <li key={href}><Link to={href} className="text-amber-800 hover:underline font-medium">→ {label}</Link></li>
              ))}
            </ul>
          </div>
        </aside>
      </div>

      <ContactDetails />
    </div>
  );
}
