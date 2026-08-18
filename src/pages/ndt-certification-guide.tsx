import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import ContactDetails from "@/components/ContactDetails";
import { Link } from "react-router-dom";
import {
  CheckCircle,
  ChevronDown,
  ChevronUp,
  Award,
  BookOpen,
  GraduationCap,
  Globe,
  DollarSign,
  ArrowRight,
  Clock,
  Shield,
  TrendingUp,
  Briefcase,
} from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

/* ─── FAQ Data ─── */
const faqs = [
  {
    q: "What is the difference between ASNT SNT-TC-1A and ASNT CP-189?",
    a: "ASNT SNT-TC-1A is a recommended practice — it provides guidelines for employer-based certification programs, but the employer has final authority over training hours, examination, and certification. ASNT CP-189 is a standard (not a recommendation) that prescribes minimum mandatory requirements for training, experience, examination, and documentation. CP-189 is more prescriptive: it requires specific minimum training hours that cannot be reduced, mandates a written practice, and requires annual visual acuity exams. In practice, most oil & gas and industrial employers base their written practices on SNT-TC-1A with modifications. Aerospace employers (NAS-410/EN 4179) and nuclear facilities often exceed both SNT-TC-1A and CP-189 requirements. If your employer's written practice references CP-189, the training hour requirements are mandatory minimums and cannot be waived.",
  },
  {
    q: "How long does it take to get NDT Level II certified?",
    a: "The timeline to achieve NDT Level II certification typically ranges from 9 months to 3 years depending on the certification scheme and your employment situation. Under ASNT SNT-TC-1A (employer-based), you need to complete Level I training (40 hours minimum per method), accumulate Level I experience hours (typically 400-800 hours per method), complete Level II training (additional 40 hours per method), and then accumulate Level II experience hours (an additional 400-1,200 hours). If working full-time in NDT, most technicians achieve Level II in a single method within 12-18 months. Under ISO 9712 or PCN, you must complete formal training at an authorized center, pass the certification exam administered by a certification body, and have the required industrial experience — which typically takes 12-24 months per method. The fastest path is through an employer who actively supports certification: dedicated training weeks, supervised on-the-job experience, and a structured qualification timeline.",
  },
  {
    q: "What are the vision requirements for NDT certification?",
    a: "All major NDT certification schemes require near-vision acuity and colour perception testing. Under ASNT SNT-TC-1A and CP-189, candidates must demonstrate near-vision acuity of at least Jaeger J2 (equivalent to Times New Roman 6-point font) at a distance of not less than 12 inches (30 cm) in at least one eye, either naturally or with corrective lenses. Colour contrast perception must be sufficient to distinguish and differentiate colours used in the applicable NDT method — this is critical for liquid penetrant testing (PT), magnetic particle testing (MT), and colour-coded displays. ISO 9712 requires the same Jaeger J2 near-vision standard and adds that testing must be performed annually. The vision exam must be administered by an ophthalmologist, optometrist, or a trained medical professional. Colour blindness does not automatically disqualify you from all NDT methods — it may only restrict you from methods requiring colour differentiation (PT, MT). UT and RT certifications are generally unaffected by colour vision deficiencies.",
  },
  {
    q: "Can I get NDT certified without a degree?",
    a: "Yes — a college degree is not required for NDT Level I or Level II certification under any major certification scheme. NDT is one of the few high-paying technical careers accessible without a four-year degree. Under ASNT SNT-TC-1A, the requirements are training hours (classroom instruction in the specific NDT method), experience hours (documented on-the-job experience under supervision), passing written and practical examinations, and meeting vision requirements. A high school diploma or GED is typically sufficient. For NDT Level III certification, the requirements are higher: the ASNT Level III Basic exam typically requires either a bachelor's degree in engineering/science plus 1 year Level II experience, OR an associate degree plus 2 years, OR a high school diploma plus 4 years of Level II experience. Many successful Level III professionals followed the experience-only path. ISO 9712 has similar education flexibility — additional experience hours substitute for formal education.",
  },
  {
    q: "How much does NDT certification cost in total?",
    a: "The total cost of NDT certification varies significantly by scheme and method, but a realistic all-in budget is: Level I single method (SNT-TC-1A employer-based): set by the certifying body including training course, study materials, and employer examination (usually no separate fee). Level II single method (SNT-TC-1A): set by the certifying body for incremental training and examination. ISO 9712 or PCN Level II single method: set by the certifying body including authorized training center course and certification body exam fee. ASNT ACCP Level III (per method): set by the certifying body including prep course and ASNT exam fee (set by the certifying body per method attempt). Multi-method Level II (e.g., UT+RT+MT+PT): set by the certifying body. Affordable, accessible total over 2-3 years. These figures do not include lost wages during training or travel expenses. Many employers cover certification costs entirely — this is a significant factor when choosing an employer.",
  },
  {
    q: "What is the ASNT ACCP Level III exam?",
    a: "The ASNT Central Certification Program (ACCP) is ASNT's third-party Level III certification exam. Unlike employer-based SNT-TC-1A certification (where the employer administers the exam and issues the certificate), ACCP is administered directly by ASNT and is portable between employers. The ACCP Level III exam consists of two parts: (1) the Basic exam covering general NDT knowledge, materials science, and NDT applications — this is a prerequisite for all methods; and (2) one or more Method exams, each covering the specific NDT method in depth including equipment, technique, interpretation, procedures, and applicable codes. The Basic exam is approximately 135 multiple-choice questions. Each Method exam is approximately 70-100 questions. Pass rate for first-time Basic exam takers is approximately 50-60%. ACCP certification is valid for 5 years and requires renewal by re-examination or by accumulating continuing education points. The ACCP is increasingly required by major oil & gas operators (Aramco, ADNOC, major IOCs) as proof of Level III competence.",
  },
  {
    q: "Which NDT certification is best for working internationally?",
    a: "For maximum international portability, ISO 9712 certification is the best choice. ISO 9712 is the international standard for NDT personnel qualification and is recognised in Europe, the Middle East, Asia-Pacific, Africa, and South America. PCN (Personnel Certification in Non-Destructive Testing, issued by BINDT in the UK) is based on ISO 9712 and is widely accepted in the UK, Middle East (especially for Shell, BP, and other European IOC contracts), Australia, and Southeast Asia. ASNT certifications (SNT-TC-1A employer-based and ACCP) are primarily recognised in the USA and in international projects managed by American companies or governed by ASME/API codes. For the Middle East specifically, both ASNT and ISO 9712/PCN are accepted — the choice depends on the end client. CSWIP (Certification Scheme for Welding and Inspection Personnel) is particularly strong in the UK, offshore, and Middle East for welding inspection roles. If you plan to work globally, the optimal combination is ISO 9712 or PCN certification plus ASNT Level III — this covers virtually all markets.",
  },
  {
    q: "What is the difference between NDT Level I, Level II, and Level III?",
    a: "The three NDT certification levels represent progressively greater responsibility and technical authority. Level I: a certified NDT Level I technician can perform specific NDT operations according to written instructions, under the supervision of a Level II or Level III. Level I personnel set up equipment, perform calibrations as instructed, conduct examinations following specific procedures, and record results — but they do not interpret or evaluate results against acceptance criteria. Level II: a certified Level II technician can set up and calibrate equipment, conduct examinations, interpret and evaluate results according to applicable codes and standards, organize and report examination results, and supervise Level I personnel. Level II is the most common working certification level and represents the bulk of the NDT workforce. Level III: a certified Level III is responsible for the overall NDT program including developing examination techniques and procedures, interpreting codes and standards, designating the particular NDT methods and techniques to be used, and verifying the adequacy of procedures. Level III personnel can train and examine Level I and Level II candidates. Level III is typically a senior technical or management role.",
  },
  {
    q: "How do I maintain my NDT certification?",
    a: "Certification maintenance requirements vary by scheme. ASNT SNT-TC-1A (employer-based): certification is valid per the employer's written practice — typically recertification is required every 3-5 years by re-examination, and documented evidence of continued satisfactory performance must be maintained. If you change employers, your SNT-TC-1A certification does not transfer — the new employer must re-certify you under their own written practice (though training and experience records transfer). ASNT ACCP Level III: valid for 5 years, renewable by re-examination or by accumulating continuing education credits (50 renewal points over the 5-year period). ISO 9712: certification is valid for 5 years, with a mandatory renewal requiring documented evidence of continued work in the method, employer confirmation of satisfactory performance, and satisfactory visual acuity. At the 10-year mark, recertification by re-examination is required. PCN: similar to ISO 9712 — 5-year renewal with confirmation of continued activity, 10-year recertification by examination.",
  },
  {
    q: "Can I study for NDT certification online?",
    a: "Yes, several aspects of NDT certification preparation can be completed online, though hands-on practical training and examination typically require in-person attendance. ASNT offers online preparatory courses for Level I, Level II, and Level III exams covering the theoretical knowledge component. Many training providers (including Atlantis NDT) offer online or hybrid programs that cover the classroom/theory component of NDT training — covering physics of each method, equipment principles, procedure interpretation, code requirements, and examination technique theory. However, the practical/hands-on component — equipment setup, calibration, specimen examination, and result interpretation on actual test pieces — must be completed in person at a training facility or on the job. For Level III exam preparation, online study is very effective because the exam is entirely written (no practical component at the ASNT ACCP level). Atlantis NDT offers online NDT training courses that satisfy the classroom training hour requirements of SNT-TC-1A and CP-189 for all six primary methods.",
  },
  {
    q: "What NDT methods should I certify in first?",
    a: "For most career paths, the recommended first certifications are Magnetic Particle Testing (MT) and Liquid Penetrant Testing (PT) — these are the most accessible entry-point methods with shorter training periods (40 hours each for Level II) and are required on virtually every construction and fabrication project. After MT and PT, the next priority depends on your target industry: for oil & gas, add Ultrasonic Testing (UT) — this is the highest-demand, highest-paying conventional method in the energy sector. For general industrial or construction, add Visual Testing (VT) or pursue a CWI (Certified Welding Inspector) credential. For aerospace, prioritize ET (eddy current) and UT. Radiographic Testing (RT) remains valuable but is declining in some sectors as PAUT replaces film radiography. The optimal multi-method combination for maximum employability in oil & gas is: MT + PT + UT + VT at Level II, then add PAUT as an advanced qualification. This combination qualifies you for 90%+ of oil & gas NDT positions globally.",
  },
  {
    q: "Is ASNT certification valid in the Middle East?",
    a: "Yes — ASNT certification is widely accepted in the Middle East, particularly for projects governed by American codes (ASME, API, AWS). Saudi Aramco, ADNOC, QatarEnergy, Kuwait Oil Company, and other national oil companies all accept ASNT-qualified personnel for inspection work on their facilities. However, the specific acceptance depends on the project specification: some Middle East clients require ASNT ACCP Level III (third-party certified) rather than employer-based SNT-TC-1A Level III. For Level I and Level II, employer-based SNT-TC-1A certification is standard — but the employing inspection company must have an approved written practice and quality management system. PCN and ISO 9712 certifications are also widely accepted in the Middle East, particularly on European IOC contracts (Shell, BP, TotalEnergies). CSWIP is preferred for welding inspection roles. For maximum flexibility in the Middle East market, hold both ASNT (for ASME/API code work) and PCN or ISO 9712 (for European-specified contracts).",
  },
];

/* ─── Certification Scheme Comparison Data ─── */
const certSchemes = [
  {
    scheme: "ASNT SNT-TC-1A",
    scope: "Employer-based",
    recognition: "USA, Americas, Middle East (ASME/API work)",
    examFormat: "Written + practical (employer-administered)",
    costRange: "set by the certifying body per method",
    validity: "Per employer written practice (3–5 yr typical)",
    portability: "Not portable between employers",
  },
  {
    scheme: "ASNT ACCP (Level III)",
    scope: "Third-party, ASNT-administered",
    recognition: "USA, global (major IOCs)",
    examFormat: "Basic exam + method exams (written only)",
    costRange: "set by the certifying body per exam + prep course set by the certifying body",
    validity: "5 years (renewal by exam or CE points)",
    portability: "Fully portable",
  },
  {
    scheme: "ISO 9712",
    scope: "International standard, third-party body",
    recognition: "Europe, Middle East, Asia, Africa, South America",
    examFormat: "General + specific + practical (certification body)",
    costRange: "set by the certifying body per method (Level II)",
    validity: "5 years (10-year recertification by exam)",
    portability: "Fully portable internationally",
  },
  {
    scheme: "PCN (BINDT)",
    scope: "UK-based, ISO 9712 compliant",
    recognition: "UK, Middle East, Australia, Southeast Asia",
    examFormat: "General + specific + practical at BINDT centres",
    costRange: "set by the certifying body per exam + training set by the certifying body",
    validity: "5 years (10-year recertification by exam)",
    portability: "Fully portable (ISO 9712 aligned)",
  },
  {
    scheme: "CSWIP (TWI)",
    scope: "Welding & inspection personnel",
    recognition: "UK, Middle East, offshore, global",
    examFormat: "Written + practical at TWI centres",
    costRange: "set by the certifying body exam + training set by the certifying body",
    validity: "5 years (renewal by CPD evidence)",
    portability: "Fully portable",
  },
];

/* ─── Level Requirements Data ─── */
const levelRequirements = [
  {
    level: "Level I",
    icon: GraduationCap,
    training: "40 hrs minimum per method (SNT-TC-1A)",
    experience: "400–800 hrs per method (varies by method)",
    exam: "General + specific written exam, practical exam",
    vision: "Jaeger J2 near vision, colour perception",
    responsibilities: "Perform tests per written instructions under Level II/III supervision. Set up equipment, record results. Cannot interpret or evaluate.",
    salary: "$40,000–$55,000 (USA)",
    timeline: "3–12 months from start of training",
  },
  {
    level: "Level II",
    icon: Briefcase,
    training: "40 hrs additional per method (80 hrs total, SNT-TC-1A)",
    experience: "1,200–1,600 hrs total per method (including Level I)",
    exam: "General + specific written exam, practical exam",
    vision: "Jaeger J2 near vision, colour perception (annual)",
    responsibilities: "Set up, calibrate, examine, interpret, evaluate, report, and supervise Level I. Select techniques within established procedures.",
    salary: "$55,000–$95,000 (USA, method-dependent)",
    timeline: "12–24 months after Level I (method-dependent)",
  },
  {
    level: "Level III",
    icon: Award,
    training: "No specific hours — demonstrated competence required",
    experience: "4,000+ hrs or degree + experience combination",
    exam: "ASNT ACCP Basic + Method exams (or employer-based)",
    vision: "Jaeger J2 near vision, colour perception (annual)",
    responsibilities: "Develop procedures, interpret codes/standards, train and examine Level I/II, manage NDT programs, approve techniques.",
    salary: "$80,000–$160,000+ (USA, role-dependent)",
    timeline: "5–12 years typical career progression",
  },
];

/* ─── Method-Specific Data ─── */
const methodCertDetails = [
  {
    method: "Ultrasonic Testing (UT)",
    trainingHrs: "40 hrs (Level I) + 40 hrs (Level II)",
    experienceHrs: "400 hrs (L-I) + 800 hrs (L-II) = 1,200 total",
    examTopics: "Sound wave physics, transducer selection, calibration, DAC/TCG curves, flaw sizing, A-scan interpretation, thickness measurement",
    demandLevel: "Very High",
    notes: "UT is the most in-demand NDT method. Add PAUT qualification for highest market value.",
  },
  {
    method: "Radiographic Testing (RT)",
    trainingHrs: "40 hrs (Level I) + 40 hrs (Level II)",
    experienceHrs: "400 hrs (L-I) + 800 hrs (L-II) = 1,200 total",
    examTopics: "Radiation physics, film/digital imaging, exposure calculations, IQI selection, darkroom technique, radiation safety, geometric unsharpness",
    demandLevel: "High",
    notes: "RT requires radiation safety training and often a state licence. Declining in some sectors as PAUT replaces film.",
  },
  {
    method: "Magnetic Particle Testing (MT)",
    trainingHrs: "12 hrs (Level I) + 28 hrs (Level II) per CP-189",
    experienceHrs: "130 hrs (L-I) + 270 hrs (L-II) = 400 total",
    examTopics: "Magnetic field theory, magnetisation techniques (yoke, prods, coil), fluorescent vs visible particles, demagnetisation, surface preparation",
    demandLevel: "High",
    notes: "MT is an excellent entry-point method. Short training time and universal demand. Often paired with PT.",
  },
  {
    method: "Liquid Penetrant Testing (PT)",
    trainingHrs: "8 hrs (Level I) + 24 hrs (Level II) per CP-189",
    experienceHrs: "130 hrs (L-I) + 270 hrs (L-II) = 400 total",
    examTopics: "Capillary action principles, penetrant types (visible/fluorescent), developer application, dwell time, cleaning, process control",
    demandLevel: "High",
    notes: "PT is the easiest method to learn and the fastest to certify. Commonly paired with MT as entry-level dual certification.",
  },
  {
    method: "Eddy Current Testing (ET)",
    trainingHrs: "40 hrs (Level I) + 40 hrs (Level II)",
    experienceHrs: "400 hrs (L-I) + 800 hrs (L-II) = 1,200 total",
    examTopics: "Electromagnetic theory, impedance plane analysis, probe selection, frequency selection, conductivity measurement, tube inspection techniques",
    demandLevel: "Moderate-High",
    notes: "ET is essential for aerospace and heat exchanger/tube inspection. Growing demand in power generation and petrochemical sectors.",
  },
  {
    method: "Visual Testing (VT)",
    trainingHrs: "8 hrs (Level I) + 24 hrs (Level II) per CP-189",
    experienceHrs: "70 hrs (L-I) + 130 hrs (L-II) = 200 total",
    examTopics: "Illumination requirements, direct/remote VT tools (borescopes, cameras), weld profile assessment, corrosion documentation, dimensional measurement",
    demandLevel: "High",
    notes: "VT is a prerequisite for all other NDT methods and is required by every inspection code. Often combined with CWI qualification.",
  },
];

/* ─── Cost Breakdown Data ─── */
const costBreakdown = [
  { item: "Level I training course (single method)", cost: "set by the certifying body", notes: "40-hour classroom + practical, includes materials" },
  { item: "Level II training course (single method)", cost: "set by the certifying body", notes: "Additional 40 hours, more advanced practical exercises" },
  { item: "ASNT Level I/II exam materials (ASNT Questions & Answers book)", cost: "set by the certifying body", notes: "Per method; recommended for exam preparation" },
  { item: "Employer-administered exam (SNT-TC-1A)", cost: "set by the certifying body", notes: "Many employers administer at no cost to the candidate" },
  { item: "ISO 9712 / PCN certification exam fee", cost: "set by the certifying body", notes: "Per method, per level; paid to certification body" },
  { item: "ASNT ACCP Level III Basic exam", cost: "set by the certifying body", notes: "Prerequisite for all ACCP method exams" },
  { item: "ASNT ACCP Level III Method exam", cost: "set by the certifying body", notes: "Per method; separate from Basic exam" },
  { item: "Level III prep course", cost: "set by the certifying body", notes: "5-day intensive review course; highly recommended" },
  { item: "Certification renewal (5-year, ISO 9712/ACCP)", cost: "set by the certifying body", notes: "Plus continuing education costs" },
  { item: "Vision acuity test (annual)", cost: "set by the certifying body", notes: "Required annually by most schemes" },
];

/* ─── Global Recognition Data ─── */
const globalRecognition = [
  {
    region: "United States & Canada",
    primaryCerts: "ASNT SNT-TC-1A, ASNT ACCP, CGSB (Canada)",
    codes: "ASME, API, AWS D1.1",
    notes: "Employer-based SNT-TC-1A dominates. CGSB is the Canadian equivalent — mutually recognised with ASNT for many projects. API certifications (510, 570, 653) are essential for refinery work.",
  },
  {
    region: "Middle East (UAE, Saudi, Qatar, Kuwait, Oman)",
    primaryCerts: "ASNT, ISO 9712, PCN, CSWIP",
    codes: "ASME, API, BS EN codes",
    notes: "All major schemes accepted. Aramco and ADNOC accept ASNT-qualified personnel. European IOC contracts often specify PCN or ISO 9712. CSWIP preferred for welding inspection roles.",
  },
  {
    region: "Europe (UK, Norway, Netherlands, Germany)",
    primaryCerts: "PCN (BINDT), ISO 9712 (national bodies), CSWIP",
    codes: "BS EN, PED, ASME (some projects)",
    notes: "ISO 9712 via national certification bodies is standard. PCN is dominant in the UK and North Sea. ASNT certification is not directly recognised but experience and training records transfer.",
  },
  {
    region: "India",
    primaryCerts: "ISNT (Indian Society for NDT), ISO 9712 (via NABL bodies), ASNT",
    codes: "IBR, ASME, IS codes",
    notes: "ISNT Level II/III widely recognised domestically. ASNT certification valued for export fabrication and international projects. ISO 9712 gaining traction.",
  },
  {
    region: "Asia-Pacific (Singapore, Malaysia, Australia, Korea, Japan)",
    primaryCerts: "ISO 9712, PCN, AINDT (Australia), JSNDI (Japan), KAS (Korea)",
    codes: "AS/NZS, JIS, ASME (projects)",
    notes: "ISO 9712 provides the best portability. Australia (AINDT) and Japan (JSNDI) have strong national schemes. Singapore accepts both ASNT and ISO 9712 depending on client.",
  },
];

/* ─── Career Progression Data ─── */
const careerStages = [
  {
    stage: "Level I Entry",
    years: "Year 0–1",
    icon: GraduationCap,
    salary: "$40K–$55K",
    milestone: "First NDT method certification (MT or PT recommended)",
    actions: "Complete 40-hour training course, begin accumulating experience hours under Level II supervision, pass Level I exam",
  },
  {
    stage: "Level II — First Method",
    years: "Year 1–2",
    icon: CheckCircle,
    salary: "$50K–$65K",
    milestone: "Level II in MT+PT or UT",
    actions: "Complete additional training hours, demonstrate competence in interpretation and reporting, pass Level II practical and written exams",
  },
  {
    stage: "Level II — Multi-Method",
    years: "Year 2–5",
    icon: Briefcase,
    salary: "$60K–$85K",
    milestone: "Level II in UT+RT+MT+PT, add PAUT",
    actions: "Build multi-method capability, consider API certifications (510/570/653), pursue PAUT qualification for salary premium",
  },
  {
    stage: "Senior Level II / Level III Candidate",
    years: "Year 5–8",
    icon: TrendingUp,
    salary: "$80K–$120K",
    milestone: "ASNT Level III Basic exam, senior technician roles",
    actions: "Begin Level III exam preparation, accumulate consulting and procedure writing experience, develop code expertise (ASME V, API)",
  },
  {
    stage: "Level III / NDE Manager",
    years: "Year 8–15+",
    icon: Award,
    salary: "$100K–$180K+",
    milestone: "Full Level III certification, management or consulting career",
    actions: "ASNT ACCP Level III in multiple methods, transition to management/consulting, develop training capability, expert witness potential",
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

export default function NDTCertificationGuide() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: "NDT Certification Guide 2026 | Complete Pathway from Level I to III",
        description:
          "Complete NDT certification guide: ASNT SNT-TC-1A vs ISO 9712 vs PCN comparison, Level I/II/III requirements, exam costs, training hours, and career salary progression.",
        author: { "@type": "Organization", name: "Atlantis NDT", url: "https://atlantisndt.com" },
        publisher: {
          "@type": "Organization",
          name: "Atlantis NDT",
          logo: { "@type": "ImageObject", url: "https://atlantisndt.com/favicon-96x96.jpg" },
        },
        datePublished: "2026-02-28",
        dateModified: "2026-02-28",
        mainEntityOfPage: { "@type": "WebPage", "@id": "https://atlantisndt.com/ndt-certification-guide" },
        keywords:
          "ndt certification requirements, asnt certification levels, how to get ndt certified, ndt certification pathway, ndt certification cost, ndt level II certification, ndt level III certification, ISO 9712 vs ASNT, PCN certification, CSWIP certification",
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
        title="NDT Certification Guide 2026 | Requirements, Costs & Career Path [Complete]"
        description="Complete NDT certification guide: ASNT SNT-TC-1A vs ISO 9712 vs PCN comparison, Level I/II/III requirements, exam costs. Start your NDT career today."
        keywords="ndt certification requirements, asnt certification levels, how to get ndt certified, ndt certification pathway, ndt certification cost, NDT Level II certification, NDT Level III requirements, ISO 9712 certification, PCN certification, CSWIP certification, ASNT SNT-TC-1A, ndt training hours, ndt experience hours, ndt exam cost, ndt career path"
        structuredData={structuredData}
        canonical="https://atlantisndt.com/ndt-certification-guide"
      />
      <Breadcrumbs />

      {/* Hero */}
      <section className="bg-[#004aad] text-white py-16">
        <div className="container mx-auto max-w-6xl px-6">
          <div className="max-w-3xl">
            <p className="text-blue-200 text-sm font-medium mb-3 uppercase tracking-wider">
              NDT Certification Guide · Updated February 2026
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mb-5 leading-tight">
              NDT Certification Guide 2026 | Complete Pathway from Level I to III
            </h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Everything you need to know about NDT certification: ASNT vs ISO 9712 vs PCN vs CSWIP comparison, Level I/II/III requirements, training hours, exam costs, and the career pathway from entry-level technician to Level III expert. Based on real industry data and current 2026 requirements.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/training"
                className="bg-white text-[#004aad] font-semibold px-6 py-3 rounded-lg hover:bg-blue-50 transition"
              >
                Browse NDT Training Courses
              </Link>
              <Link
                to="/asnt-certification"
                className="border border-white text-white font-semibold px-6 py-3 rounded-lg hover:bg-white/10 transition"
              >
                ASNT Certification Details
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
              { label: "Certification Schemes Compared", value: "5 Major" },
              { label: "Exam Cost Range", value: "set by the certifying body" },
              { label: "Level II Timeline", value: "12–24 Months" },
              { label: "Level III USA Salary", value: "$80K–$160K+" },
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

          {/* Certification Pathway Visual */}
          <motion.section
            id="certification-pathway"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-5" style={{ color: "#004aad" }}>
              NDT Certification Pathway: Level I to Level III
            </h2>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              NDT certification follows a structured three-level progression defined by ASNT SNT-TC-1A, ISO 9712, and other international standards. Each level builds on the previous one, with increasing technical authority, responsibility, and compensation. Understanding this pathway is the first step in planning your NDT career.
            </p>

            <div className="space-y-0">
              {levelRequirements.map((lvl, i) => (
                <div key={lvl.level} className="relative">
                  {/* Connector line */}
                  {i < levelRequirements.length - 1 && (
                    <div className="absolute left-7 top-full w-0.5 h-8 bg-[#004aad]/30 z-0" />
                  )}
                  <div className="bg-white rounded-xl p-6 shadow border border-slate-100 mb-8 relative z-10">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-14 h-14 bg-[#004aad] text-white rounded-full flex items-center justify-center flex-shrink-0">
                        <lvl.icon className="w-7 h-7" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-[#004aad]">{lvl.level}</h3>
                        <div className="flex gap-2 mt-1">
                          <span className="text-xs bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full">{lvl.timeline}</span>
                          <span className="text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded-full font-semibold">{lvl.salary}</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-slate-700 text-sm mb-4 leading-relaxed">{lvl.responsibilities}</p>
                    <div className="grid sm:grid-cols-2 gap-3">
                      <div className="flex items-start gap-2">
                        <BookOpen className="w-4 h-4 text-[#004aad] flex-shrink-0 mt-0.5" />
                        <div><span className="text-xs font-semibold text-slate-500 block">Training</span><span className="text-sm text-slate-700">{lvl.training}</span></div>
                      </div>
                      <div className="flex items-start gap-2">
                        <Clock className="w-4 h-4 text-[#004aad] flex-shrink-0 mt-0.5" />
                        <div><span className="text-xs font-semibold text-slate-500 block">Experience</span><span className="text-sm text-slate-700">{lvl.experience}</span></div>
                      </div>
                      <div className="flex items-start gap-2">
                        <Shield className="w-4 h-4 text-[#004aad] flex-shrink-0 mt-0.5" />
                        <div><span className="text-xs font-semibold text-slate-500 block">Examination</span><span className="text-sm text-slate-700">{lvl.exam}</span></div>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-[#004aad] flex-shrink-0 mt-0.5" />
                        <div><span className="text-xs font-semibold text-slate-500 block">Vision</span><span className="text-sm text-slate-700">{lvl.vision}</span></div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Certification Scheme Comparison */}
          <motion.section
            id="scheme-comparison"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h2 className="text-3xl font-bold mb-5" style={{ color: "#004aad" }}>
              ASNT vs ISO 9712 vs PCN vs CSWIP — Certification Scheme Comparison
            </h2>
            <p className="text-slate-700 leading-relaxed mb-5">
              Choosing the right certification scheme depends on your target market, industry, and career goals. The following comparison covers the five major NDT certification schemes recognised globally. Each has different examination formats, cost structures, and geographic recognition.
            </p>
            <div className="overflow-x-auto rounded-xl border border-slate-200 shadow">
              <table className="w-full text-sm">
                <thead className="bg-[#004aad] text-white">
                  <tr>
                    <th className="text-left p-4 font-semibold">Scheme</th>
                    <th className="text-left p-4 font-semibold">Scope</th>
                    <th className="text-left p-4 font-semibold">Recognition</th>
                    <th className="text-left p-4 font-semibold">Exam Format</th>
                    <th className="text-left p-4 font-semibold">Cost</th>
                    <th className="text-left p-4 font-semibold">Validity</th>
                  </tr>
                </thead>
                <tbody>
                  {certSchemes.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <td className="p-4 font-bold text-[#004aad] whitespace-nowrap">{row.scheme}</td>
                      <td className="p-4 text-slate-600">{row.scope}</td>
                      <td className="p-4 text-slate-700">{row.recognition}</td>
                      <td className="p-4 text-slate-700">{row.examFormat}</td>
                      <td className="p-4 text-slate-700 whitespace-nowrap">{row.costRange}</td>
                      <td className="p-4 text-slate-600">{row.validity}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-5 bg-blue-50 border-l-4 border-[#004aad] rounded-r-xl p-5">
              <h3 className="font-bold text-[#004aad] mb-2">Which scheme should you choose?</h3>
              <ul className="space-y-1 text-sm text-slate-700">
                <li className="flex gap-2"><ArrowRight className="w-4 h-4 text-[#004aad] flex-shrink-0 mt-0.5" /><span><strong>Working in the USA:</strong> ASNT SNT-TC-1A (employer-based) is standard for Level I/II. ASNT ACCP for portable Level III.</span></li>
                <li className="flex gap-2"><ArrowRight className="w-4 h-4 text-[#004aad] flex-shrink-0 mt-0.5" /><span><strong>Working internationally:</strong> ISO 9712 or PCN provides the broadest recognition across Europe, Middle East, and Asia-Pacific.</span></li>
                <li className="flex gap-2"><ArrowRight className="w-4 h-4 text-[#004aad] flex-shrink-0 mt-0.5" /><span><strong>Welding inspection focus:</strong> CSWIP (TWI) is the strongest credential for weld inspection roles globally, especially in the UK and offshore.</span></li>
                <li className="flex gap-2"><ArrowRight className="w-4 h-4 text-[#004aad] flex-shrink-0 mt-0.5" /><span><strong>Maximum flexibility:</strong> Hold ASNT (for ASME/API work) plus ISO 9712 or PCN (for European client work) — this covers 95%+ of global markets.</span></li>
              </ul>
            </div>
          </motion.section>

          {/* Cost Breakdown */}
          <motion.section
            id="certification-costs"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <h2 className="text-3xl font-bold mb-5" style={{ color: "#004aad" }}>
              NDT Certification Cost Breakdown
            </h2>
            <p className="text-slate-700 leading-relaxed mb-5">
              NDT certification is an investment that pays for itself within 1-3 years through increased earning potential. The costs below cover the major expense categories. Many employers cover training and certification costs entirely — choosing an employer with a strong training program can save a substantial share of out-of-pocket certification expenses.
            </p>
            <div className="overflow-x-auto rounded-xl border border-slate-200 shadow">
              <table className="w-full text-sm">
                <thead className="bg-[#004aad] text-white">
                  <tr>
                    <th className="text-left p-4 font-semibold">Item</th>
                    <th className="text-left p-4 font-semibold">Cost</th>
                    <th className="text-left p-4 font-semibold">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {costBreakdown.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <td className="p-4 font-semibold text-slate-800">{row.item}</td>
                      <td className="p-4 text-[#004aad] font-bold whitespace-nowrap">{row.cost}</td>
                      <td className="p-4 text-slate-600">{row.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-5 grid sm:grid-cols-3 gap-4">
              <div className="bg-green-50 rounded-xl p-5 border border-green-200 text-center">
                <DollarSign className="w-6 h-6 text-green-700 mx-auto mb-2" />
                <p className="text-2xl font-bold text-green-800">set by the certifying body</p>
                <p className="text-xs text-green-700 mt-1">Single method, Level I to Level II</p>
              </div>
              <div className="bg-blue-50 rounded-xl p-5 border border-blue-200 text-center">
                <DollarSign className="w-6 h-6 text-[#004aad] mx-auto mb-2" />
                <p className="text-2xl font-bold text-[#004aad]">set by the certifying body. Affordable, accessible</p>
                <p className="text-xs text-blue-700 mt-1">Multi-method Level II (UT+RT+MT+PT)</p>
              </div>
              <div className="bg-amber-50 rounded-xl p-5 border border-amber-200 text-center">
                <DollarSign className="w-6 h-6 text-amber-700 mx-auto mb-2" />
                <p className="text-2xl font-bold text-amber-800">set by the certifying body</p>
                <p className="text-xs text-amber-700 mt-1">ASNT ACCP Level III (per method)</p>
              </div>
            </div>
          </motion.section>

          {/* Career Progression */}
          <motion.section
            id="career-progression"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold mb-5" style={{ color: "#004aad" }}>
              NDT Career Progression & Salary by Stage
            </h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              NDT offers a clear, structured career path from entry-level Level I to senior Level III / NDE Manager. Each stage brings increased technical responsibility, authority, and compensation. The timeline below represents a typical career trajectory for a committed NDT professional.
            </p>
            <div className="space-y-4">
              {careerStages.map((stage, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <div className="w-12 h-12 bg-[#004aad] text-white rounded-full flex items-center justify-center flex-shrink-0">
                    <stage.icon className="w-6 h-6" />
                  </div>
                  <Card className="flex-1 shadow border-slate-100">
                    <CardHeader className="pb-2">
                      <div className="flex flex-wrap items-center gap-3">
                        <CardTitle className="text-lg text-[#004aad]">{stage.stage}</CardTitle>
                        <span className="text-xs bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full">{stage.years}</span>
                        <span className="text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded-full font-semibold">{stage.salary}</span>
                      </div>
                      <p className="text-sm font-semibold text-slate-500 mt-1">Milestone: {stage.milestone}</p>
                    </CardHeader>
                    <CardContent>
                      <p className="text-slate-600 text-sm leading-relaxed">{stage.actions}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Method-Specific Certification */}
          <motion.section
            id="method-certification"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
          >
            <h2 className="text-3xl font-bold mb-5" style={{ color: "#004aad" }}>
              Certification Requirements by NDT Method
            </h2>
            <p className="text-slate-700 leading-relaxed mb-5">
              Each NDT method has different training hour requirements, experience hour requirements, and exam content. The training hours below reflect ASNT SNT-TC-1A recommended minimums and CP-189 mandatory minimums. ISO 9712 training hours are generally comparable but vary by national certification body.
            </p>
            <div className="space-y-4">
              {methodCertDetails.map((method, i) => (
                <div key={i} className="bg-white rounded-xl p-6 shadow border border-slate-100">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-lg font-bold text-[#004aad]">{method.method}</h3>
                    <span className={`text-xs px-3 py-1 rounded-full font-semibold ${
                      method.demandLevel === "Very High" ? "bg-green-100 text-green-800" :
                      method.demandLevel === "High" ? "bg-blue-100 text-blue-800" :
                      "bg-amber-100 text-amber-800"
                    }`}>
                      Demand: {method.demandLevel}
                    </span>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4 mb-3">
                    <div>
                      <p className="text-xs font-semibold text-slate-500 mb-1">Training Hours</p>
                      <p className="text-sm text-slate-700">{method.trainingHrs}</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-slate-500 mb-1">Experience Hours</p>
                      <p className="text-sm text-slate-700">{method.experienceHrs}</p>
                    </div>
                  </div>
                  <div className="mb-3">
                    <p className="text-xs font-semibold text-slate-500 mb-1">Key Exam Topics</p>
                    <p className="text-sm text-slate-600">{method.examTopics}</p>
                  </div>
                  <div className="bg-slate-50 rounded-lg p-3 border border-slate-100">
                    <p className="text-sm text-slate-700"><strong>Note:</strong> {method.notes}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Global Recognition */}
          <motion.section
            id="global-recognition"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h2 className="text-3xl font-bold mb-5" style={{ color: "#004aad" }}>
              Global Recognition — Which Certifications Are Accepted Where
            </h2>
            <p className="text-slate-700 leading-relaxed mb-5">
              NDT is a globally portable career, but the specific certification scheme recognised depends on the region, the client, and the governing code. The following guide covers the primary markets for NDT professionals and the certifications accepted in each.
            </p>
            <div className="space-y-4">
              {globalRecognition.map((region, i) => (
                <div key={i} className="bg-white rounded-xl p-6 shadow border border-slate-100">
                  <div className="flex items-center gap-2 mb-3">
                    <Globe className="w-5 h-5 text-[#004aad]" />
                    <h3 className="text-lg font-bold text-[#004aad]">{region.region}</h3>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-3 mb-3">
                    <div>
                      <p className="text-xs font-semibold text-slate-500 mb-1">Primary Certifications</p>
                      <p className="text-sm font-semibold text-slate-800">{region.primaryCerts}</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-slate-500 mb-1">Governing Codes</p>
                      <p className="text-sm text-slate-700">{region.codes}</p>
                    </div>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed">{region.notes}</p>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Related Links */}
          <section>
            <h2 className="text-2xl font-bold mb-5" style={{ color: "#004aad" }}>
              Related Certification & Training Resources
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { href: "/asnt-certification", label: "ASNT Certification — Complete Guide" },
                { href: "/training", label: "NDT Training Courses — All Methods" },
                { href: "/api-510-certification", label: "API 510 Certification Training" },
                { href: "/api-570-certification", label: "API 570 Certification Training" },
                { href: "/api-653-certification", label: "API 653 Certification Training" },
                { href: "/ndt-technician-salary", label: "NDT Technician Salary Guide 2026" },
                { href: "/ndt-training-online", label: "Online NDT Training Courses" },
                { href: "/phased-array-ut", label: "PAUT Training — Phased Array UT" },
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
              NDT Certification — Frequently Asked Questions
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
              Start Your NDT Certification Journey with Atlantis NDT
            </h2>
            <p className="text-blue-100 mb-6 leading-relaxed">
              Atlantis NDT offers ASNT-aligned certification training for all NDT levels and methods — from entry-level MT/PT courses to advanced PAUT, TOFD, and Level III exam preparation. Our Level III instructors bring decades of field experience to every classroom. Training available in Houston, Dubai, Hyderabad, and online.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/training"
                className="bg-white text-[#004aad] font-bold px-6 py-3 rounded-lg hover:bg-blue-50 transition"
              >
                View NDT Training Courses
              </Link>
              <Link
                to="/asnt-certification"
                className="border border-white text-white px-6 py-3 rounded-lg hover:bg-white/10 transition"
              >
                ASNT Certification Details
              </Link>
              <Link
                to="/contact"
                className="border border-white text-white px-6 py-3 rounded-lg hover:bg-white/10 transition"
              >
                Talk to Our Training Team
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
                ["#certification-pathway", "Certification Pathway (L-I/II/III)"],
                ["#scheme-comparison", "ASNT vs ISO 9712 vs PCN vs CSWIP"],
                ["#certification-costs", "Cost Breakdown"],
                ["#career-progression", "Career Progression & Salary"],
                ["#method-certification", "Requirements by NDT Method"],
                ["#global-recognition", "Global Recognition"],
                ["#faq", "FAQ (12 questions)"],
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
                { label: "Level II Training", value: "80 hrs/method" },
                { label: "Level II Experience", value: "1,200+ hrs" },
                { label: "Exam Fee (ISO 9712)", value: "set by the certifying body" },
                { label: "ACCP Level III Fee", value: "set by the certifying body" },
                { label: "Certification Validity", value: "5 years" },
                { label: "Vision Requirement", value: "Jaeger J2" },
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
              Certification Training
            </h3>
            <ul className="space-y-2 text-sm">
              {[
                ["/asnt-certification", "ASNT Certification"],
                ["/training", "NDT Training Courses"],
                ["/api-510-certification", "API 510 Certification"],
                ["/api-570-certification", "API 570 Certification"],
                ["/api-653-certification", "API 653 Certification"],
                ["/ndt-technician-salary", "NDT Salary Guide"],
                ["/ndt-training-online", "Online NDT Training"],
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
            <h3 className="text-lg font-bold mb-3">Get Certified with Atlantis NDT</h3>
            <p className="text-blue-100 text-sm mb-4">
              From Level I entry to Level III expert — our training programs cover all certification levels, all primary methods, and align with ASNT SNT-TC-1A and ISO 9712 requirements. Available in Houston, Dubai, Hyderabad, and online.
            </p>
            <Link
              to="/contact"
              className="block bg-white text-[#004aad] text-center font-bold px-4 py-3 rounded-lg hover:bg-blue-50 transition text-sm"
            >
              Start Your Certification Journey
            </Link>
          </div>
        </aside>
      </div>

      <ContactDetails />
    </div>
  );
}
