import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import ContactDetails from "@/components/ContactDetails";
import { Link } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import {
  ChevronDown,
  ChevronUp,
  ArrowRight,
  BookOpen,
  Award,
  GraduationCap,
  Briefcase,
  TrendingUp,
  DollarSign,
  CheckCircle,
  Clock,
  Star,
  Target,
} from "lucide-react";

/* ─── Learning Stages ─── */
const stages = [
  {
    stage: 1,
    title: "Introduction to NDT",
    timeline: "1-2 Weeks",
    icon: BookOpen,
    color: "bg-blue-500",
    summary: "Understand what NDT is, why it matters, and explore career opportunities. No prerequisites required.",
    objectives: [
      "Understand the purpose and importance of NDT",
      "Learn the 6 primary NDT methods at a high level",
      "Explore industry sectors that use NDT (oil & gas, aerospace, power generation)",
      "Understand the certification framework (Level I/II/III)",
      "Research salary ranges and career trajectories",
      "Decide on your target industry and primary method",
    ],
    resources: [
      { name: "What is NDT? Complete Guide", link: "/ndt-complete-guide", type: "Atlantis NDT" },
      { name: "NDT Methods Comparison", link: "/ndt-methods-comparison", type: "Atlantis NDT" },
      { name: "NDT Career Guide", link: "/ndt-career-guide", type: "Atlantis NDT" },
      { name: "ASNT website (asnt.org)", link: "https://www.asnt.org", type: "External" },
    ],
    tips: "Focus on understanding the big picture before diving into technical details. Talk to working NDT technicians if possible. Visit an NDT inspection company or attend an ASNT local section meeting.",
  },
  {
    stage: 2,
    title: "Level I Certification",
    timeline: "3-6 Months",
    icon: GraduationCap,
    color: "bg-green-500",
    summary: "Get your first NDT certification. Start with MT and PT (easiest entry) or UT (highest demand). Complete training, gain experience, pass exams.",
    objectives: [
      "Enroll in a Level I training course for your chosen method(s)",
      "Complete required training hours (40 hrs per method for UT, 16-24 hrs for MT/PT)",
      "Gain employment with an NDT inspection company",
      "Begin accumulating supervised experience hours",
      "Pass Level I written and practical examinations",
      "Achieve Level I certification under employer's written practice",
    ],
    resources: [
      { name: "NDT Certification Guide", link: "/ndt-certification-guide", type: "Atlantis NDT" },
      { name: "NDT Training Courses", link: "/training", type: "Atlantis NDT" },
      { name: "ASNT Certification Overview", link: "/asnt-certification", type: "Atlantis NDT" },
    ],
    tips: "Recommended first methods: MT + PT (fastest to certify, universally in demand) or UT (highest salary potential, most in-demand method). Many employers offer training to new hires — prioritize employers with strong training programs over higher starting salary.",
  },
  {
    stage: 3,
    title: "Level II Certification",
    timeline: "1-2 Years Experience",
    icon: Briefcase,
    color: "bg-amber-500",
    summary: "Advance to Level II — the working certification level. Gain ability to interpret results, select techniques, and work independently.",
    objectives: [
      "Complete additional Level II training hours per method",
      "Accumulate required experience hours (1,200+ total for UT/RT)",
      "Develop ability to interpret examination results against acceptance criteria",
      "Learn to select examination techniques within established procedures",
      "Pass Level II written and practical examinations",
      "Begin supervising Level I technicians",
      "Add a second and third certification method",
    ],
    resources: [
      { name: "Ultrasonic Testing Guide", link: "/ultrasonic-testing", type: "Atlantis NDT" },
      { name: "Radiographic Testing Guide", link: "/radiographic-testing", type: "Atlantis NDT" },
      { name: "NDT Technician Salary", link: "/ndt-technician-salary", type: "Atlantis NDT" },
    ],
    tips: "The optimal multi-method Level II combination for oil & gas: UT + MT + PT + VT. Add RT if your employer requires it. For aerospace: UT + ET + PT. Level II is where your earning potential increases significantly — a multi-method Level II earns $60K-$85K in the USA.",
  },
  {
    stage: 4,
    title: "Advanced Methods & Specialization",
    timeline: "2-5 Years",
    icon: Target,
    color: "bg-purple-500",
    summary: "Develop expertise in advanced techniques like PAUT, TOFD, and AET. Specialize in high-value techniques that command premium day rates.",
    objectives: [
      "Complete PAUT training and qualification (80+ hours)",
      "Complete TOFD training and qualification",
      "Consider additional specialized techniques: GWT, AET, MFL",
      "Develop code expertise (ASME Section V, API 510/570/653)",
      "Consider API inspector certifications (510, 570, 653)",
      "Consider CWI certification for welding inspection roles",
      "Begin writing procedures and developing technical expertise",
    ],
    resources: [
      { name: "Phased Array UT Guide", link: "/phased-array-ut", type: "Atlantis NDT" },
      { name: "TOFD Testing Guide", link: "/tofd-testing", type: "Atlantis NDT" },
      { name: "Guided Wave Testing", link: "/guided-wave-testing", type: "Atlantis NDT" },
      { name: "API Inspector Guide", link: "/api-inspector-guide", type: "Atlantis NDT" },
    ],
    tips: "PAUT is the single most valuable advanced qualification for UT technicians — it commands a $15,000-$25,000 annual salary premium over conventional UT. API certifications (510/570/653) are essential if you want to work in refinery and petrochemical inspection. The combination of ASNT Level II (multi-method) + PAUT + API is the highest-value profile for oil & gas.",
  },
  {
    stage: 5,
    title: "Level III / Management & Consulting",
    timeline: "5+ Years",
    icon: Award,
    color: "bg-red-500",
    summary: "Achieve the highest certification level. Develop procedures, manage programs, train others, or transition to consulting and expert roles.",
    objectives: [
      "Pass ASNT ACCP Level III Basic exam",
      "Pass ASNT ACCP Level III Method exams in primary methods",
      "Develop ability to write NDT procedures and techniques",
      "Interpret codes and standards for NDT applications",
      "Train and examine Level I and Level II candidates",
      "Consider management or consulting career track",
      "Build expertise in RBI, fitness-for-service, digital twin integration",
    ],
    resources: [
      { name: "ASNT Certification Guide", link: "/asnt-certification", type: "Atlantis NDT" },
      { name: "NDT Consulting Services", link: "/consulting", type: "Atlantis NDT" },
      { name: "Digital Twins for NDT", link: "/digital-twins", type: "Atlantis NDT" },
    ],
    tips: "The ASNT ACCP Level III Basic exam has a ~50% first-time pass rate — take a dedicated prep course and allow 3-6 months of study. Level III opens two career paths: (1) technical management and program management within operating companies, or (2) independent consulting, which commands $150-$300/hour. Both paths offer $100K-$180K+ annual compensation in the USA.",
  },
];

/* ─── Salary Progression Data ─── */
const salaryProgression = [
  { stage: "Level I Entry", salary: 48000 },
  { stage: "Level II (1 method)", salary: 60000 },
  { stage: "Level II (multi)", salary: 78000 },
  { stage: "Level II + PAUT", salary: 95000 },
  { stage: "Senior / API", salary: 115000 },
  { stage: "Level III", salary: 140000 },
  { stage: "Consultant", salary: 180000 },
];

/* ─── Recommended Books ─── */
const books = [
  { title: "Introduction to Nondestructive Testing", author: "Paul McIntire / ASNT", desc: "The standard NDT overview textbook. Covers all methods at introductory level." },
  { title: "Ultrasonic Testing of Materials", author: "J. Krautkramer & H. Krautkramer", desc: "The definitive UT reference. Covers physics, equipment, techniques, and applications in depth." },
  { title: "ASNT Level III Study Guide series", author: "ASNT", desc: "Method-specific study guides for ACCP Level III exam preparation. Essential for Level III candidates." },
  { title: "NDT Handbook series (Volumes 1-10)", author: "ASNT", desc: "The comprehensive NDT reference library. One volume per method plus general volumes. Reference, not reading cover-to-cover." },
  { title: "Visual Inspection Technology", author: "ASNT", desc: "Covers VT methods, equipment, and applications. Foundation for all NDT work." },
  { title: "Radiographic Testing", author: "ASNT Classroom Training Handbook", desc: "RT principles, techniques, and interpretation. Used in Level II RT training courses." },
];

/* ─── Professional Associations ─── */
const associations = [
  { name: "ASNT — American Society for Nondestructive Testing", url: "https://www.asnt.org", desc: "Primary NDT professional society. Certifications, conferences, publications, local sections." },
  { name: "BINDT — British Institute of Non-Destructive Testing", url: "https://www.bindt.org", desc: "UK NDT professional body. Administers PCN certification. NDT News journal." },
  { name: "TWI — The Welding Institute", url: "https://www.twi-global.com", desc: "UK research and certification body. CSWIP certification. TWI Journal." },
  { name: "ISNT — Indian Society for Non-Destructive Testing", url: "https://www.isnt.in", desc: "Indian NDT professional society. National certification program." },
];

/* ─── FAQ ─── */
const faqs = [
  {
    q: "How long does it take to become a certified NDT technician?",
    a: "A Level I certification in a single method (MT or PT) can be achieved in as little as 3-6 months with dedicated full-time employment. Level II certification in a single method typically takes 12-24 months from the start of Level I, depending on the method (MT/PT are faster, UT/RT take longer). Multi-method Level II certification (the standard working credential) takes 2-4 years. Level III certification typically requires 5-12 years of progressive experience. The timeline is significantly influenced by your employer — companies with structured training programs and consistent work in multiple methods enable faster progression.",
  },
  {
    q: "What is the best first NDT method to learn?",
    a: "For most career paths, Magnetic Particle Testing (MT) and Liquid Penetrant Testing (PT) are the recommended first methods. They have the shortest training hours (16-24 hours for Level II vs 80 hours for UT), the simplest physics, and the fastest certification timeline. MT and PT are required on virtually every construction and inspection project, making them universally employable. After MT/PT, the next priority depends on your target industry: for oil & gas, add UT; for aerospace, add ET; for general industrial, add VT. Starting with UT directly is also viable if you have a strong technical aptitude — UT pays the highest and is the most in-demand method.",
  },
  {
    q: "Do I need a college degree for NDT?",
    a: "No. NDT is one of the few high-paying technical careers accessible without a four-year degree. Level I and Level II certification under ASNT SNT-TC-1A require only training hours, experience hours, and passing examinations — a high school diploma is sufficient. For Level III, a degree is not mandatory but reduces the required experience years: 4-year degree + 1 year experience, 2-year degree + 2 years, or high school diploma + 4 years of Level II experience. Many successful Level III professionals followed the experience-only path. A degree in engineering or physics provides useful theoretical background but is not a practical prerequisite.",
  },
  {
    q: "How much can I earn in NDT?",
    a: "NDT salaries in the USA range from $40,000-$55,000 for Level I entry positions to $80,000-$160,000+ for Level III and management roles. Multi-method Level II technicians with PAUT qualification earn $70,000-$95,000. Adding API certifications (510/570/653) increases salary by $10,000-$20,000. Travel and offshore assignments add significant premiums — offshore NDT technicians can earn $100,000-$150,000+ at Level II. Independent Level III consultants charge $150-$300/hour. The highest-earning NDT professionals typically hold ASNT Level III + API certifications + PAUT/TOFD qualifications and work in oil & gas consulting.",
  },
  {
    q: "Can I learn NDT online?",
    a: "The theoretical component of NDT training can be effectively completed online. Online courses cover the physics of each method, equipment principles, procedure interpretation, code requirements, and examination technique theory. Atlantis NDT and other providers offer online training that satisfies the classroom training hour requirements of ASNT SNT-TC-1A and CP-189. However, the practical/hands-on component — equipment setup, calibration, specimen examination, and result interpretation on actual test pieces — must be completed in person at a training facility or through supervised on-the-job experience. Hybrid programs (online theory + in-person practical) are an effective and increasingly popular format.",
  },
  {
    q: "What are the best NDT training providers?",
    a: "The best NDT training providers combine experienced instructors (Level III professionals with field experience, not just teaching credentials), hands-on practical exercises with real specimens, alignment with the applicable certification scheme (ASNT, ISO 9712, PCN), and post-course support for exam preparation and career placement. Atlantis NDT offers training across all primary methods and certification levels, with courses available in Houston, Dubai, Hyderabad, and online. Other reputable providers include ASNT (direct), Hellier, Lavender International (UK), and various university-affiliated programs. When evaluating training providers, ask about instructor qualifications, student pass rates, and practical-to-classroom ratios.",
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

export default function NDTLearningPath() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: "NDT Learning Path | From Beginner to Level III Expert",
        description:
          "Structured NDT learning roadmap: 5-stage path from complete beginner to Level III expert. Timeline, objectives, resources, and salary progression at each stage. Free career guide.",
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
          "@id": "https://atlantisndt.com/ndt-learning-path",
        },
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
        title="NDT Learning Path | From Beginner to Level III Expert | Free Guide | Atlantis NDT"
        description="Structured NDT learning roadmap: 5 stages from complete beginner to Level III expert. Timeline, learning objectives, recommended resources, and salary."
        keywords="ndt learning path, how to learn ndt, ndt career roadmap, ndt beginner guide, ndt certification path, ndt level 1 to level 3, ndt training plan, ndt career progression, become ndt technician, ndt study guide"
        structuredData={structuredData}
        canonical="https://atlantisndt.com/ndt-learning-path"
      />
      <Breadcrumbs />

      {/* Hero */}
      <section className="bg-[#004aad] text-white py-16">
        <div className="container mx-auto max-w-6xl px-6">
          <div className="max-w-3xl">
            <p className="text-blue-200 text-sm font-medium mb-3 uppercase tracking-wider">
              NDT Learning Path &middot; Updated February 2026
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mb-5 leading-tight">
              NDT Learning Path: From Beginner to Level III Expert
            </h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              A structured, stage-by-stage learning roadmap for building an NDT career. From your first introduction to non-destructive testing through Level III certification and expert consulting. Includes timelines, learning objectives, recommended resources, and salary progression at each stage.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/training"
                className="bg-white text-[#004aad] font-semibold px-6 py-3 rounded-lg hover:bg-blue-50 transition"
              >
                View NDT Training Courses
              </Link>
              <Link
                to="/ndt-certification-guide"
                className="border border-white text-white font-semibold px-6 py-3 rounded-lg hover:bg-white/10 transition"
              >
                Certification Guide
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
              { label: "Learning Stages", value: "5 Stages" },
              { label: "Entry to Level III", value: "5-12 Years" },
              { label: "Starting Salary", value: "$48,000" },
              { label: "Level III Salary", value: "$140,000+" },
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
          {/* Learning Path Visual */}
          <motion.section
            id="learning-path"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-5" style={{ color: "#004aad" }}>
              Your NDT Learning Roadmap
            </h2>
            <p className="text-lg text-slate-700 leading-relaxed mb-8">
              This 5-stage learning path takes you from complete beginner to Level III expert. Each stage builds on the previous one, with clear objectives, timelines, and recommended resources. Follow this roadmap to build a structured, high-value NDT career.
            </p>

            <div className="space-y-0">
              {stages.map((s, i) => (
                <div key={i} id={`stage-${s.stage}`} className="relative">
                  {/* Connector line */}
                  {i < stages.length - 1 && (
                    <div className="absolute left-7 top-full w-0.5 h-8 bg-[#004aad]/20 z-0" />
                  )}
                  <motion.div
                    className="bg-white rounded-xl p-6 shadow border border-slate-100 mb-8 relative z-10"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                  >
                    {/* Header */}
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`w-14 h-14 ${s.color} text-white rounded-full flex items-center justify-center flex-shrink-0`}>
                        <s.icon className="w-7 h-7" />
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="text-xs font-bold text-white bg-[#004aad] px-2 py-0.5 rounded">STAGE {s.stage}</span>
                          <span className="text-xs bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full">{s.timeline}</span>
                        </div>
                        <h3 className="text-xl font-bold text-[#004aad] mt-1">{s.title}</h3>
                      </div>
                    </div>

                    {/* Summary */}
                    <p className="text-slate-700 leading-relaxed mb-4">{s.summary}</p>

                    {/* Objectives */}
                    <div className="mb-4">
                      <h4 className="text-sm font-bold text-slate-800 mb-2">Learning Objectives</h4>
                      <div className="grid sm:grid-cols-2 gap-2">
                        {s.objectives.map((obj, j) => (
                          <div key={j} className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-slate-700">{obj}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Resources */}
                    <div className="mb-4">
                      <h4 className="text-sm font-bold text-slate-800 mb-2">Recommended Resources</h4>
                      <div className="flex flex-wrap gap-2">
                        {s.resources.map((r, j) =>
                          r.link.startsWith("/") ? (
                            <Link
                              key={j}
                              to={r.link}
                              className="text-xs bg-blue-50 text-[#004aad] px-3 py-1.5 rounded-full border border-blue-200 hover:bg-blue-100 transition"
                            >
                              {r.name}
                            </Link>
                          ) : (
                            <a
                              key={j}
                              href={r.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-xs bg-slate-100 text-slate-700 px-3 py-1.5 rounded-full border border-slate-200 hover:bg-slate-200 transition"
                            >
                              {r.name}
                            </a>
                          )
                        )}
                      </div>
                    </div>

                    {/* Tips */}
                    <div className="bg-amber-50 rounded-lg p-4 border border-amber-200">
                      <div className="flex items-center gap-2 mb-1">
                        <Star className="w-4 h-4 text-amber-600" />
                        <span className="text-xs font-bold text-amber-800">Pro Tip</span>
                      </div>
                      <p className="text-xs text-amber-800 leading-relaxed">{s.tips}</p>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Salary Progression */}
          <motion.section
            id="salary"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h2 className="text-3xl font-bold mb-5" style={{ color: "#004aad" }}>
              Salary Progression at Each Stage
            </h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              NDT offers a clear salary progression tied to certification level, method count, and specialization. The chart below shows median USA annual salaries at each career stage. International salaries vary — Middle East is typically 70-80% of USA rates (often tax-free), Europe 75-90%, India 25-35%.
            </p>
            <div className="bg-white rounded-xl shadow border border-slate-100 p-6">
              <ResponsiveContainer width="100%" height={320}>
                <BarChart data={salaryProgression} layout="vertical">
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                  <XAxis type="number" tick={{ fontSize: 12 }} tickFormatter={(v) => `$${v / 1000}K`} />
                  <YAxis type="category" dataKey="stage" tick={{ fontSize: 11 }} width={120} />
                  <Tooltip formatter={(v: number) => [`$${v.toLocaleString()}`, "Median Salary (USA)"]} />
                  <Bar dataKey="salary" fill="#004aad" radius={[0, 6, 6, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <Link
              to="/blog/ndt-salary-guide-2026-global"
              className="inline-flex items-center gap-1 text-sm font-semibold text-[#004aad] hover:underline mt-4"
            >
              View the full NDT Salary Guide <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.section>

          {/* Recommended Resources */}
          <motion.section
            id="resources"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
          >
            <h2 className="text-3xl font-bold mb-5" style={{ color: "#004aad" }}>
              Recommended Books & Resources
            </h2>
            <div className="space-y-4 mb-6">
              {books.map((b, i) => (
                <div key={i} className="bg-white rounded-xl p-5 shadow border border-slate-100">
                  <h3 className="font-bold text-[#004aad] mb-1">{b.title}</h3>
                  <p className="text-xs text-slate-500 mb-2">by {b.author}</p>
                  <p className="text-sm text-slate-700">{b.desc}</p>
                </div>
              ))}
            </div>

            <h3 className="text-xl font-bold mb-4" style={{ color: "#004aad" }}>
              Professional Associations
            </h3>
            <div className="space-y-3">
              {associations.map((a, i) => (
                <div key={i} className="bg-white rounded-xl p-5 shadow border border-slate-100">
                  <h4 className="font-bold text-[#004aad] mb-1">{a.name}</h4>
                  <p className="text-sm text-slate-700 mb-1">{a.desc}</p>
                  <a href={a.url} target="_blank" rel="noopener noreferrer" className="text-xs text-[#004aad] underline">
                    {a.url}
                  </a>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Related Links */}
          <section>
            <h2 className="text-2xl font-bold mb-5" style={{ color: "#004aad" }}>
              Related Learning Resources
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { href: "/ndt-complete-guide", label: "What is NDT? Complete Guide" },
                { href: "/ndt-certification-guide", label: "NDT Certification Guide" },
                { href: "/ndt-methods-comparison", label: "NDT Methods Comparison" },
                { href: "/ndt-career-guide", label: "NDT Career Guide" },
                { href: "/ndt-technician-salary", label: "NDT Salary Guide 2026" },
                { href: "/ndt-industry-statistics", label: "NDT Industry Statistics" },
                { href: "/training", label: "NDT Training Courses" },
                { href: "/ndt-equipment-guide", label: "NDT Equipment Guide" },
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
              NDT Learning Path — Frequently Asked Questions
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
              Start Your NDT Learning Journey with Atlantis NDT
            </h2>
            <p className="text-blue-100 mb-6 leading-relaxed">
              Whether you are a complete beginner or an experienced technician advancing to Level III, Atlantis NDT provides the training, mentoring, and career guidance to accelerate your progression. Our Level III instructors bring decades of field experience to every course. Training available in Houston, Dubai, Hyderabad, and online.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/training"
                className="bg-white text-[#004aad] font-bold px-6 py-3 rounded-lg hover:bg-blue-50 transition"
              >
                View Training Courses
              </Link>
              <Link
                to="/ndt-training-online"
                className="border border-white text-white px-6 py-3 rounded-lg hover:bg-white/10 transition"
              >
                Online NDT Training
              </Link>
              <Link
                to="/contact"
                className="border border-white text-white px-6 py-3 rounded-lg hover:bg-white/10 transition"
              >
                Contact Our Team
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
                ["#stage-1", "Stage 1: Introduction (1-2 weeks)"],
                ["#stage-2", "Stage 2: Level I (3-6 months)"],
                ["#stage-3", "Stage 3: Level II (1-2 years)"],
                ["#stage-4", "Stage 4: Advanced Methods (2-5 years)"],
                ["#stage-5", "Stage 5: Level III (5+ years)"],
                ["#salary", "Salary Progression"],
                ["#resources", "Books & Resources"],
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
            <h3 className="text-lg font-bold mb-3 text-green-800">Timeline Summary</h3>
            <ul className="space-y-3 text-sm text-green-800">
              {[
                { label: "Stage 1: Intro", value: "1-2 weeks" },
                { label: "Stage 2: Level I", value: "3-6 months" },
                { label: "Stage 3: Level II", value: "1-2 years" },
                { label: "Stage 4: Advanced", value: "2-5 years" },
                { label: "Stage 5: Level III", value: "5+ years" },
                { label: "Total to Level III", value: "5-12 years" },
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
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              {[
                ["/training", "NDT Training Courses"],
                ["/ndt-certification-guide", "Certification Guide"],
                ["/ndt-complete-guide", "Complete NDT Guide"],
                ["/ndt-technician-salary", "NDT Salary Guide"],
                ["/ndt-career-guide", "NDT Career Guide"],
                ["/asnt-certification", "ASNT Certification"],
                ["/ndt-training-online", "Online Training"],
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
            <h3 className="text-lg font-bold mb-3">Start Your NDT Career</h3>
            <p className="text-blue-100 text-sm mb-4">
              From complete beginner to Level III expert, Atlantis NDT provides training for every stage of your NDT career. 50+ ASNT Level III instructors. Houston, Dubai, Hyderabad, and online.
            </p>
            <Link
              to="/contact"
              className="block bg-white text-[#004aad] text-center font-bold px-4 py-3 rounded-lg hover:bg-blue-50 transition text-sm"
            >
              Get Started Today
            </Link>
          </div>
        </aside>
      </div>

      <ContactDetails />
    </div>
  );
}
