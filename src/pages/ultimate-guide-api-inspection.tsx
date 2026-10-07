import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import ContactDetails from "@/components/ContactDetails";
import { Link } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  ChevronDown,
  ChevronUp,
  ArrowRight,
  Award,
  BookOpen,
  Shield,
  DollarSign,
  Clock,
  CheckCircle,
  Target,
  TrendingUp,
  Briefcase,
  FileText,
} from "lucide-react";

/* ─── Comparison Data ─── */
const apiComparison = [
  {
    factor: "Full Name",
    api510: "Pressure Vessel Inspection Code",
    api570: "Piping Inspection Code",
    api653: "Tank Inspection, Repair, Alteration, and Reconstruction",
  },
  {
    factor: "Equipment Scope",
    api510: "Pressure vessels, heat exchangers, reactors",
    api570: "Process piping, tubing, valves, fittings, flanges",
    api653: "Aboveground storage tanks (ASTs)",
  },
  {
    factor: "Governing Codes",
    api510: "ASME Section VIII Div 1, ASME V, IX, PCC-2",
    api570: "ASME B31.3, B16.5, ASME V, IX, PCC-2",
    api653: "API 650 (design), ASME V, IX, API RP 575/651/652",
  },
  {
    factor: "RBI (not on the exam BOK)",
    api510: "Code allows RBI per API RP 580 to set intervals",
    api570: "Code allows RBI per API RP 580 to set intervals",
    api653: "Code allows RBI for internal intervals",
  },
  {
    factor: "Prerequisites",
    api510: "BS + 1 yr; 2-yr degree + 2 yrs; HS + 3 yrs; none + 5 yrs (vessel experience)",
    api570: "BS + 1 yr; 2-yr degree + 2 yrs; HS + 3 yrs; none + 5 yrs (piping experience)",
    api653: "BS + 1 yr; 2-yr degree + 2 yrs; HS + 3 yrs; none + 5 yrs (tank experience)",
  },
  {
    factor: "Exam Format",
    api510: "170 Q (110 closed-book + 60 open-book), ~7.5 h, Prometric",
    api570: "170 Q (110 closed-book + 60 open-book), ~7.5 h, Prometric",
    api653: "170 Q (110 closed-book + 60 open-book), ~7.5 h, Prometric",
  },
  {
    factor: "Key Body of Knowledge Topics",
    api510: "Vessel design, NDE methods, repair procedures, corrosion mechanisms, thickness calculations, MAWP",
    api570: "Piping design, NDE methods, repair procedures, CML selection, minimum thickness, piping classes",
    api653: "Tank design, bottom inspection, settlement, shell evaluation, repair methods, cathodic protection",
  },
  {
    factor: "Salary data",
    api510: "Varies by region and employer; see BLS / ASNT salary survey",
    api570: "Varies by region and employer; see BLS / ASNT salary survey",
    api653: "Varies by region and employer; see BLS / ASNT salary survey",
  },
  {
    factor: "Pass Rate (API ICP status update, 2020-2025 windows)",
    api510: "~54-69% per window",
    api570: "~45-70% per window",
    api653: "~62-76% per window",
  },
  {
    factor: "Certification Validity",
    api510: "3 years (20% inspection work + 24 CPD hours; web quiz every 6 yrs)",
    api570: "3 years (20% inspection work + 24 CPD hours; web quiz every 6 yrs)",
    api653: "3 years (20% inspection work + 24 CPD hours; web quiz every 6 yrs)",
  },
];

/* ─── Experience Requirements ─── */
const experienceReqs = [
  {
    education: "Bachelor's degree or higher in Engineering or Technology",
    api510exp: "1 year (supervision or performance of inspection) within the last 10 years",
    api570exp: "1 year (supervision or performance of inspection) within the last 10 years",
    api653exp: "1 year (supervision or performance of inspection) within the last 10 years",
  },
  {
    education: "2-year degree or certificate in Engineering or Technology",
    api510exp: "2 years (incl. 1 year in inspection) within the last 10 years",
    api570exp: "2 years (incl. 1 year in inspection) within the last 10 years",
    api653exp: "2 years (incl. 1 year in inspection) within the last 10 years",
  },
  {
    education: "High school diploma or equivalent",
    api510exp: "3 years (incl. 1 year in inspection) within the last 10 years",
    api570exp: "3 years (incl. 1 year in inspection) within the last 10 years",
    api653exp: "3 years (incl. 1 year in inspection) within the last 10 years",
  },
  {
    education: "No formal education",
    api510exp: "5+ years (incl. 1 year in inspection) within the last 10 years",
    api570exp: "5+ years (incl. 1 year in inspection) within the last 10 years",
    api653exp: "5+ years (incl. 1 year in inspection) within the last 10 years",
  },
];

/* ─── Exam Prep Timeline ─── */
const prepTimeline = [
  {
    phase: "Phase 1: Code Acquisition",
    weeks: "Weeks 1-2",
    desc: "Download the Body of Knowledge and Publications Effectivity Sheet for your exam window and obtain study copies of the listed editions. At the exam the open-book references are provided electronically on screen — you cannot bring books — so practise searching electronic copies.",
    items: ["API 510/570/653 code (exam edition)", "ASME Section V and IX (listed articles)", "ASME Section VIII/B31.3/API 650 (per exam)", "API RP 571 mechanisms listed on the effectivity sheet", "Other RPs listed in the BOK"],
  },
  {
    phase: "Phase 2: Content Study",
    weeks: "Weeks 2-8",
    desc: "Systematic study of each Body of Knowledge (BoK) topic. Read the applicable code cover-to-cover at least once. The exam has a 110-question closed-book part and a 60-question open-book part, so key formulas and concepts must be known without references.",
    items: ["Design fundamentals and terminology", "NDE method requirements", "Inspection planning and intervals", "Repair, alteration, and rerating procedures", "Corrosion mechanisms and mitigation"],
  },
  {
    phase: "Phase 3: Practice Exams",
    weeks: "Weeks 8-11",
    desc: "Work through practice exam questions and past exam papers. Time yourself — about 1.5 minutes per closed-book question and 3.75 minutes per open-book question. Focus on finding information quickly in electronic copies.",
    items: ["API official practice questions (ICP portal)", "Third-party practice exams", "Timed full-length practice tests", "Review wrong answers and identify knowledge gaps"],
  },
  {
    phase: "Phase 4: Review & Exam",
    weeks: "Weeks 11-12",
    desc: "Final review of weak areas. Get adequate rest before exam day. Arrive early at the Prometric center with the required ID.",
    items: ["Review flagged topics", "Re-run the BOK calculation list", "Check exam logistics (Prometric location, ID)", "Exam day preparation"],
  },
];

/* ─── Career Path ─── */
const careerPath = [
  {
    stage: "Entry: NDT Inspector / Technician",
    years: "Years 0-3",
    salary: "Pay varies",
    desc: "Begin building inspection experience. Obtain NDT Level II certifications (UT, MT, PT). Work under API-certified inspectors. Accumulate the required experience hours for API exam eligibility.",
  },
  {
    stage: "API Certified Inspector",
    years: "Years 3-7",
    salary: "Pay varies",
    desc: "Pass API 510 and/or API 570 exam. Work as authorized inspector for owner-operator or third-party inspection company. Develop expertise in specific equipment types and corrosion mechanisms.",
  },
  {
    stage: "Senior API Inspector / Lead",
    years: "Years 7-12",
    salary: "Pay varies",
    desc: "Hold multiple API certifications (510 + 570 + 653). Lead inspection teams. Support RBI and fitness-for-service work led by integrity engineers. May obtain API 571/580, CWI or ASNT Level III.",
  },
  {
    stage: "Integrity Engineer / Consultant",
    years: "Years 12+",
    salary: "Pay varies",
    desc: "Transition to engineering or consulting role. Develop integrity management strategies. Expert witness work. Training and mentoring.",
  },
];

/* ─── FAQ ─── */
const faqs = [
  {
    q: "Which API certification should I get first?",
    a: "For most inspection careers in oil & gas, API 510 (Pressure Vessels) or API 570 (Piping) should be your first API certification. If you work primarily in refineries or petrochemical plants, API 510 is slightly more common and covers vessels, heat exchangers, and reactors. If you work in piping-intensive facilities, API 570 is the better starting point. API 653 (Tanks) is typically obtained later unless you work specifically in tank farm operations. Many employers prefer candidates who hold all three certifications — the optimal progression is API 510 first, then API 570, then API 653.",
  },
  {
    q: "How hard is the API 510 exam?",
    a: "API's own ICP statistics show per-window API 510 pass rates of roughly 54-69% between 2020 and early 2025. The exam has 170 questions over about 7.5 hours: 110 closed-book and 60 open-book with references provided on screen, so both recall and fast navigation matter. The most common reasons for failure are: insufficient familiarity with code book organization (spending too much time searching), inadequate understanding of ASME Section VIII Division 1 pressure vessel design principles, and poor time management. A 12-week structured study plan with timed practice is a sensible approach.",
  },
  {
    q: "Can I take API exams without a degree?",
    a: "Yes. API certifications do not require a college degree. With a high school diploma you need 3 years of relevant experience, and with no formal education 5 or more years, each including 1 year in supervision or performance of inspection. A 2-year degree needs 2 years and a bachelor's degree 1 year. The experience must be in inspection of the equipment type relevant to the certification (pressure vessels for API 510, piping for API 570, storage tanks for API 653). Experience documentation typically requires employer verification letters.",
  },
  {
    q: "How much does API certification cost?",
    a: "API sets the application, exam and recertification fees and publishes them on api.org; budget separately for study copies of the referenced codes and any optional prep course from a third party. Many employers cover all certification costs. API certification is valid for 3 years; recertification requires at least 20% of working time on inspection activities and 24 CPD hours per cycle, plus a web quiz every 6 years. Atlantis NDT does not offer API exam preparation.",
  },
  {
    q: "What is the difference between API Inspector and CWI?",
    a: "API Inspectors (510/570/653) are certified to perform in-service inspection of pressure equipment, piping, and tanks in operating facilities — primarily in the oil & gas and petrochemical industries. CWI (Certified Welding Inspector, per AWS) is focused on welding inspection during fabrication and construction. They are complementary certifications: a CWI inspects welds being made, while an API Inspector evaluates equipment in service. Many senior inspectors hold both certifications.",
  },
  {
    q: "Are API certifications recognized internationally?",
    a: "Yes. API certifications are recognized globally, particularly in countries with significant oil & gas operations governed by ASME and API codes. The Middle East (Saudi Arabia, UAE, Qatar, Kuwait, Oman) extensively uses API-certified inspectors — Saudi Aramco, ADNOC, QatarEnergy, and other national oil companies require API certification for inspection personnel. Asia-Pacific countries (Singapore, Malaysia, Indonesia, India) accept API certifications for international projects. Europe recognizes API certifications for ASME-coded equipment but prefers EN/PED-based qualifications for European-coded equipment. For maximum international portability, combine API certifications with ISO 9712 or PCN NDT certifications.",
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-slate-200 rounded-xl overflow-hidden">
      <button
        className="w-full flex items-center justify-between p-5 text-left font-semibold text-slate-800 bg-white hover:bg-slate-50 transition"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span>{q}</span>
        {open ? (
          <ChevronUp className="w-5 h-5 text-[#004aad] flex-shrink-0" />
        ) : (
          <ChevronDown className="w-5 h-5 text-[#004aad] flex-shrink-0" />
        )}
      </button>
      {open && (
        <div className="px-5 pb-5 text-slate-600 leading-relaxed bg-white border-t border-slate-100">
          {a}
        </div>
      )}
    </div>
  );
}

export default function UltimateGuideAPIInspection() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: "API Inspector Guide 2026 | API 510 vs 570 vs 653 Comparison",
        description:
          "Complete API inspector guide: API 510 vs 570 vs 653 side-by-side comparison, prerequisites, exam prep strategy, career path, recertification and certification costs.",
        author: { "@type": "Organization", name: "Atlantis NDT", url: "https://atlantisndt.com" },
        publisher: {
          "@type": "Organization",
          name: "Atlantis NDT",
          logo: { "@type": "ImageObject", url: "https://atlantisndt.com/favicon-96x96.jpg" },
        },
        datePublished: "2026-02-28",
        dateModified: "2026-02-28",
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": "https://atlantisndt.com/api-inspector-guide",
        },
        keywords:
          "api inspector guide, api 510 vs 570, api 510 vs 653, api certification comparison, api inspector salary, api 510 exam, api 570 exam, api 653 exam, pressure vessel inspector, piping inspector, tank inspector",
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    ],
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation />
      <SEOHead
        title="API Inspector Guide — Become a Certified 510/570/653 Inspector"
        description="Complete API inspector roadmap — 510/570/653 + ICP exams, prep time, cost, salary uplift. Step-by-step from beginner to certified. Updated 2026."
        keywords="api inspector guide, api 510 vs 570 vs 653, api certification comparison, api inspector salary, api 510 exam format, api 570 exam format, api 653 exam format, pressure vessel inspector, piping inspector, tank inspector, api inspector career"
        structuredData={structuredData}
        canonical="https://atlantisndt.com/api-inspector-guide"
      />
      <Breadcrumbs />

      {/* Hero */}
      <section className="bg-[#004aad] text-white py-16">
        <div className="container mx-auto max-w-6xl px-6">
          <div className="max-w-3xl">
            <p className="text-blue-200 text-sm font-medium mb-3 uppercase tracking-wider">
              API Inspector Guide &middot; Updated February 2026
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mb-5 leading-tight">
              API Inspector Guide 2026: API 510 vs 570 vs 653
            </h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              The definitive guide to API Inspector certifications: understand the differences between API 510 (Pressure Vessels), API 570 (Piping), and API 653 (Tanks). Side-by-side comparison, prerequisites, exam prep strategy, career progression, and salary benchmarks.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/api-510-certification"
                className="bg-white text-[#004aad] font-semibold px-6 py-3 rounded-lg hover:bg-blue-50 transition"
              >
                API 510 Details
              </Link>
              <Link
                to="/api-570-certification"
                className="border border-white text-white font-semibold px-6 py-3 rounded-lg hover:bg-white/10 transition"
              >
                API 570 Details
              </Link>
              <Link
                to="/api-653-certification"
                className="border border-white text-white font-semibold px-6 py-3 rounded-lg hover:bg-white/10 transition"
              >
                API 653 Details
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <div className="bg-white border-b border-slate-200 py-6">
        <div className="container mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { label: "API Certifications Compared", value: "3 (510/570/653)" },
              { label: "API-published pass rates", value: "~45-76%" },
              { label: "Exam questions", value: "170 (110 closed + 60 open)" },
              { label: "Certification Validity", value: "3 Years" },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-2xl font-bold text-[#004aad]">{s.value}</div>
                <div className="text-sm text-slate-500 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto max-w-6xl px-6 py-12 grid md:grid-cols-3 gap-12">
        <article className="md:col-span-2 space-y-14">
          {/* What is an API Inspector */}
          <motion.section
            id="what-is-api"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-5" style={{ color: "#004aad" }}>
              What is an API Inspector?
            </h2>
            <p className="text-lg text-slate-700 leading-relaxed mb-4">
              An <strong>API Inspector</strong> is a professional certified by the American Petroleum Institute (API) to perform in-service inspection of pressure equipment, piping systems, and storage tanks in the oil & gas, petrochemical, and chemical processing industries. API Inspectors ensure that equipment operates safely within its design limits and complies with applicable codes and regulations.
            </p>
            <p className="text-slate-700 leading-relaxed mb-4">
              API offers three primary inspector certifications, each covering a different equipment type: <strong>API 510</strong> for pressure vessels, <strong>API 570</strong> for piping, and <strong>API 653</strong> for aboveground storage tanks. These certifications are globally recognized and are typically required by owner-operators, insurance companies, and regulatory authorities for personnel performing integrity assessments on operating equipment.
            </p>
            <div className="bg-blue-50 border-l-4 border-[#004aad] rounded-r-xl p-6">
              <h3 className="font-bold text-[#004aad] mb-2">Key Responsibilities of an API Inspector</h3>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-[#004aad] flex-shrink-0 mt-0.5" /><span>Plan and execute inspection programs for in-service equipment</span></li>
                <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-[#004aad] flex-shrink-0 mt-0.5" /><span>Evaluate equipment condition using NDT methods, visual examination, and thickness data</span></li>
                <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-[#004aad] flex-shrink-0 mt-0.5" /><span>Calculate remaining life and determine safe operating intervals</span></li>
                <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-[#004aad] flex-shrink-0 mt-0.5" /><span>Refer damage beyond code limits for engineering fitness-for-service evaluation (API 579-1/ASME FFS-1)</span></li>
                <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-[#004aad] flex-shrink-0 mt-0.5" /><span>Review and approve repair, alteration, and rerating procedures</span></li>
                <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-[#004aad] flex-shrink-0 mt-0.5" /><span>Apply RBI-based intervals where the owner uses an API RP 580 assessment</span></li>
              </ul>
            </div>
          </motion.section>

          {/* API 510 */}
          <motion.section
            id="api-510"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
          >
            <h2 className="text-3xl font-bold mb-5" style={{ color: "#004aad" }}>
              API 510 — Pressure Vessel Inspector
            </h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              API 510 covers the in-service inspection, repair, alteration, and rerating of pressure vessels and pressure-relieving devices. The code applies to vessels constructed in accordance with ASME Section VIII Division 1 or Division 2, as well as equivalent codes. API 510 is the most widely held API inspector certification.
            </p>
            <div className="bg-white rounded-xl p-6 shadow border border-slate-100 mb-4">
              <h3 className="font-bold text-[#004aad] mb-3">API 510 Exam Body of Knowledge</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  "ASME Section VIII Division 1 design requirements",
                  "ASME Section V NDE requirements",
                  "Pressure vessel inspection planning",
                  "Corrosion rate calculation and remaining life",
                  "MAWP recalculation for corroded conditions",
                  "Repair and alteration procedures",
                  "Pressure testing requirements",
                  "Pressure-relieving devices (API RP 576) and PMI (RP 578)",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-[#004aad] flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <Link
              to="/api-510-certification"
              className="inline-flex items-center gap-1 text-sm font-semibold text-[#004aad] hover:underline"
            >
              Read the full API 510 Certification Guide <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.section>

          {/* API 570 */}
          <motion.section
            id="api-570"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h2 className="text-3xl font-bold mb-5" style={{ color: "#004aad" }}>
              API 570 — Piping Inspector
            </h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              API 570 covers the in-service inspection, repair, alteration, and rerating of metallic and fiberglass-reinforced plastic piping systems. The code applies to piping systems constructed in accordance with ASME B31.3 (Process Piping) and similar codes. Piping is the most common equipment type in refineries and chemical plants by quantity, making API 570 highly demanded.
            </p>
            <div className="bg-white rounded-xl p-6 shadow border border-slate-100 mb-4">
              <h3 className="font-bold text-[#004aad] mb-3">API 570 Exam Body of Knowledge</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  "ASME B31.3 Process Piping code requirements",
                  "ASME Section V NDE requirements",
                  "Piping inspection planning and CML selection",
                  "Minimum required thickness calculations",
                  "Corrosion mechanisms specific to piping",
                  "Deadleg identification and management",
                  "Injection point inspection requirements",
                  "Small-bore piping and socket weld inspection",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-[#004aad] flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <Link
              to="/api-570-certification"
              className="inline-flex items-center gap-1 text-sm font-semibold text-[#004aad] hover:underline"
            >
              Read the full API 570 Certification Guide <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.section>

          {/* API 653 */}
          <motion.section
            id="api-653"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <h2 className="text-3xl font-bold mb-5" style={{ color: "#004aad" }}>
              API 653 — Tank Inspector
            </h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              API 653 covers the inspection, repair, alteration, and reconstruction of aboveground storage tanks (ASTs) built to API 650 or its predecessor API 12C. Tank inspection involves unique challenges including bottom plate corrosion, settlement evaluation, shell assessment, and environmental compliance. API 653 is considered the most technically challenging of the three API inspector certifications.
            </p>
            <div className="bg-white rounded-xl p-6 shadow border border-slate-100 mb-4">
              <h3 className="font-bold text-[#004aad] mb-3">API 653 Exam Body of Knowledge</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  "API 650 tank design requirements",
                  "Tank bottom inspection and floor scanning",
                  "Shell evaluation and minimum thickness",
                  "Settlement assessment and foundation integrity",
                  "Roof inspection (fixed and floating)",
                  "Cathodic protection and corrosion prevention",
                  "Hot tap and repair procedures",
                  "Reconstruction requirements and documentation",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-[#004aad] flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <Link
              to="/api-653-certification"
              className="inline-flex items-center gap-1 text-sm font-semibold text-[#004aad] hover:underline"
            >
              Read the full API 653 Certification Guide <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.section>

          {/* Comparison Table */}
          <motion.section
            id="comparison"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold mb-5" style={{ color: "#004aad" }}>
              API 510 vs 570 vs 653 — Side-by-Side Comparison
            </h2>
            <p className="text-slate-700 leading-relaxed mb-5">
              The following table provides a comprehensive side-by-side comparison of the three API inspector certifications. All three follow a similar exam format and prerequisite structure, but differ in scope, governing codes, and technical content.
            </p>
            <div className="overflow-x-auto rounded-xl border border-slate-200 shadow">
              <table className="w-full text-sm">
                <thead className="bg-[#004aad] text-white">
                  <tr>
                    <th className="text-left p-4 font-semibold">Factor</th>
                    <th className="text-left p-4 font-semibold">API 510</th>
                    <th className="text-left p-4 font-semibold">API 570</th>
                    <th className="text-left p-4 font-semibold">API 653</th>
                  </tr>
                </thead>
                <tbody>
                  {apiComparison.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <td className="p-4 font-bold text-[#004aad] whitespace-nowrap">{row.factor}</td>
                      <td className="p-4 text-slate-700">{row.api510}</td>
                      <td className="p-4 text-slate-700">{row.api570}</td>
                      <td className="p-4 text-slate-700">{row.api653}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.section>

          {/* Prerequisites */}
          <motion.section
            id="prerequisites"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
          >
            <h2 className="text-3xl font-bold mb-5" style={{ color: "#004aad" }}>
              Prerequisites & Experience Requirements
            </h2>
            <p className="text-slate-700 leading-relaxed mb-5">
              All three API inspector certifications have the same prerequisite structure: the experience requirement decreases with higher levels of education. Experience must be full-time, directly related to inspection of the applicable equipment type, and within the last 10 years.
            </p>
            <div className="overflow-x-auto rounded-xl border border-slate-200 shadow">
              <table className="w-full text-sm">
                <thead className="bg-[#004aad] text-white">
                  <tr>
                    <th className="text-left p-4 font-semibold">Education Level</th>
                    <th className="text-left p-4 font-semibold">API 510 Experience</th>
                    <th className="text-left p-4 font-semibold">API 570 Experience</th>
                    <th className="text-left p-4 font-semibold">API 653 Experience</th>
                  </tr>
                </thead>
                <tbody>
                  {experienceReqs.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <td className="p-4 font-semibold text-slate-800">{row.education}</td>
                      <td className="p-4 text-slate-700">{row.api510exp}</td>
                      <td className="p-4 text-slate-700">{row.api570exp}</td>
                      <td className="p-4 text-slate-700">{row.api653exp}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.section>

          {/* Exam Prep Strategy */}
          <motion.section
            id="exam-prep"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h2 className="text-3xl font-bold mb-5" style={{ color: "#004aad" }}>
              Exam Preparation Strategy — 12-Week Plan
            </h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              A structured 12-week study plan is the most effective approach for API exam preparation. The exam combines a 110-question closed-book part with a 60-question open-book part (references provided on screen), so you need both recall of key rules and formulas and fast navigation of electronic copies.
            </p>
            <div className="space-y-4">
              {prepTimeline.map((phase, i) => (
                <div key={i} className="bg-white rounded-xl p-6 shadow border border-slate-100">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-[#004aad] text-white rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold">
                      {i + 1}
                    </div>
                    <div>
                      <h3 className="font-bold text-[#004aad]">{phase.phase}</h3>
                      <span className="text-xs text-slate-500">{phase.weeks}</span>
                    </div>
                  </div>
                  <p className="text-sm text-slate-700 leading-relaxed mb-3">{phase.desc}</p>
                  <div className="grid sm:grid-cols-2 gap-2">
                    {phase.items.map((item, j) => (
                      <div key={j} className="flex items-start gap-2">
                        <CheckCircle className="w-3.5 h-3.5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-xs text-slate-600">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Career Path & Salary */}
          <motion.section
            id="career"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
          >
            <h2 className="text-3xl font-bold mb-5" style={{ color: "#004aad" }}>
              API Inspector Career Path & Salary
            </h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              API certification opens a clear career progression from field inspector to senior consultant or integrity engineer. The combination of API certifications with NDT Level III and/or CWI credentials creates the highest-value inspection professional profile in the oil & gas industry.
            </p>
            <div className="space-y-4">
              {careerPath.map((stage, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <div className="w-10 h-10 bg-[#004aad] text-white rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold">
                    {i + 1}
                  </div>
                  <div className="flex-1 bg-white rounded-xl p-5 shadow border border-slate-100">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <h3 className="font-bold text-[#004aad]">{stage.stage}</h3>
                      <span className="text-xs bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full">{stage.years}</span>
                      <span className="text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded-full font-semibold">{stage.salary}</span>
                    </div>
                    <p className="text-sm text-slate-700 leading-relaxed">{stage.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Continuing Education */}
          <motion.section
            id="continuing-education"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="text-3xl font-bold mb-5" style={{ color: "#004aad" }}>
              Continuing Education & Recertification
            </h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              API certifications are valid for <strong>3 years</strong>. Recertification requires at least 20% of working time on inspection activities during the cycle and 24 continuing professional development (CPD) hours, plus an online web quiz every 6 years. Check API's CPD rules for which activities qualify.
            </p>
            <div className="bg-white rounded-xl p-6 shadow border border-slate-100 mb-4">
              <h3 className="font-bold text-[#004aad] mb-3">Typical CPD Activities (check API's CPD rules for credit values)</h3>
              <div className="space-y-3">
                {[
                  { activity: "Attending industry conferences (API, ASME, AMPP)", pdh: "Per API CPD rules" },
                  { activity: "Completing technical training courses", pdh: "Per API CPD rules" },
                  { activity: "Teaching or presenting at industry events", pdh: "Per API CPD rules" },
                  { activity: "Publishing technical papers", pdh: "Per API CPD rules" },
                  { activity: "Self-study of code updates and technical publications", pdh: "Per API CPD rules" },
                ].map((item, i) => (
                  <div key={i} className="flex justify-between items-start border-b border-slate-100 pb-2">
                    <span className="text-sm text-slate-700">{item.activity}</span>
                    <span className="text-sm font-semibold text-[#004aad] whitespace-nowrap ml-4">{item.pdh}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.section>

          {/* Related Links */}
          <section>
            <h2 className="text-2xl font-bold mb-5" style={{ color: "#004aad" }}>
              Related API & Inspection Resources
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { href: "/api-510-certification", label: "API 510 Certification Guide" },
                { href: "/api-570-certification", label: "API 570 Certification Guide" },
                { href: "/api-653-certification", label: "API 653 Certification Guide" },
                { href: "/inspection-services", label: "API 510/570/653 Inspection Services" },
                { href: "/ndt-certification-guide", label: "NDT Certification Guide" },
                { href: "/ndt-technician-salary", label: "NDT & API Inspector Salary Guide" },
              ].map(({ href, label }) => (
                <Link
                  key={href}
                  to={href}
                  className="flex items-center gap-2 bg-white rounded-lg p-4 shadow border border-slate-100 hover:border-[#004aad] text-[#004aad] text-sm font-medium transition"
                >
                  <span className="w-1.5 h-1.5 bg-[#004aad] rounded-full flex-shrink-0" />
                  {label}
                </Link>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section>
            <h2 id="faq" className="text-3xl font-bold mb-6" style={{ color: "#004aad" }}>
              API Inspector — Frequently Asked Questions
            </h2>
            <div className="space-y-3">
              {faqs.map((f, i) => (
                <FAQItem key={i} q={f.q} a={f.a} />
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="bg-[#004aad] rounded-2xl p-8 text-white">
            <h2 className="text-2xl font-bold mb-3">
              Where Atlantis NDT Fits in an API Inspection Programme
            </h2>
            <p className="text-blue-100 mb-6 leading-relaxed">
              Atlantis NDT does not deliver API 510, 570 or 653 exam preparation.</p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/training"
                className="bg-white text-[#004aad] font-bold px-6 py-3 rounded-lg hover:bg-blue-50 transition"
              >
                View Training Courses
              </Link>
              <Link
                to="/consulting"
                className="border border-white text-white px-6 py-3 rounded-lg hover:bg-white/10 transition"
              >
                API Consulting Services
              </Link>
              <Link
                to="/contact"
                className="border border-white text-white px-6 py-3 rounded-lg hover:bg-white/10 transition"
              >
                Contact Us
              </Link>
            </div>
          </section>
        </article>

        {/* Sidebar */}
        <aside className="hidden md:block md:col-span-1 space-y-6 mt-2">
          <div className="bg-white p-6 rounded-xl shadow border border-slate-100 sticky top-16">
            <h3 className="text-lg font-bold mb-4" style={{ color: "#004aad" }}>
              On This Page
            </h3>
            <ul className="space-y-2 text-sm text-slate-600">
              {[
                ["#what-is-api", "What is an API Inspector?"],
                ["#api-510", "API 510 (Pressure Vessels)"],
                ["#api-570", "API 570 (Piping)"],
                ["#api-653", "API 653 (Tanks)"],
                ["#comparison", "510 vs 570 vs 653 Comparison"],
                ["#prerequisites", "Prerequisites"],
                ["#exam-prep", "Exam Prep Strategy"],
                ["#career", "Career Path & Salary"],
                ["#continuing-education", "Continuing Education"],
                ["#faq", "FAQ (6 questions)"],
              ].map(([href, label]) => (
                <li key={href}>
                  <a href={href} className="hover:text-[#004aad] transition flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[#004aad] rounded-full flex-shrink-0" />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-green-50 p-6 rounded-xl shadow border border-green-200">
            <h3 className="text-lg font-bold mb-3 text-green-800">Quick Reference</h3>
            <ul className="space-y-3 text-sm text-green-800">
              {[
                { label: "Exam Questions", value: "170" },
                { label: "Exam Duration", value: "~7.5 hours" },
                { label: "Exam Type", value: "110 closed + 60 open-book" },
                { label: "Pass Rate (API data)", value: "~45-76%" },
                { label: "Certification Valid", value: "3 years" },
                { label: "Min Experience (HS)", value: "3 years" },
              ].map((item) => (
                <li key={item.label} className="flex justify-between items-center border-b border-green-200 pb-2">
                  <span>{item.label}</span>
                  <span className="font-bold">{item.value}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white p-6 rounded-xl shadow border border-slate-100">
            <h3 className="text-lg font-bold mb-3" style={{ color: "#004aad" }}>
              API Certification Pages
            </h3>
            <ul className="space-y-2 text-sm">
              {[
                ["/api-510-certification", "API 510 Certification"],
                ["/api-570-certification", "API 570 Certification"],
                ["/api-653-certification", "API 653 Certification"],
                ["/inspection-services", "API 510/570/653 Inspection Services"],
                ["/ndt-certification-guide", "NDT Certification Guide"],
                ["/asnt-certification", "ASNT Certification"],
                ["/ndt-technician-salary", "Salary Guide"],
              ].map(([href, label]) => (
                <li key={href}>
                  <Link to={href} className="text-[#004aad] hover:underline">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-[#004aad] p-6 rounded-xl shadow text-white">
            <h3 className="text-lg font-bold mb-3">API Inspection Support</h3>
            <p className="text-blue-100 text-sm mb-4">
              Atlantis NDT does not run API 510, 570 or 653 exam preparation.</p>
            <Link
              to="/contact"
              className="block bg-white text-[#004aad] text-center font-bold px-4 py-3 rounded-lg hover:bg-blue-50 transition text-sm"
            >
              Talk to an ASNT Level III
            </Link>
          </div>
        </aside>
      </div>

      <ContactDetails />
    </div>
  );
}
