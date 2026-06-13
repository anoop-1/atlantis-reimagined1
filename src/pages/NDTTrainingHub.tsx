import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import ContactDetails from "@/components/ContactDetails";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, CheckCircle, Clock, DollarSign, Globe, GraduationCap, Users } from "lucide-react";

const faqs = [
  {
    question: "How long does NDT training take?",
    answer:
      "Method-dependent. SNT-TC-1A sets minimum classroom hours per method: UT and RT require 40 hours at Level I and another 40 at Level II, ET requires 40/40, MT needs 12/24, VT needs 8/16, and PT needs 4/8. Experience hours range from 130 (PT Level I) to 3,600 (UT Level II) supervised OJT. In practice, a full Level II pathway in a single method takes 6–12 months elapsed including OJT; a fast-track immersive classroom-only block takes 2–3 weeks."
  },
  {
    question: "What are the 3 levels of NDT certification?",
    answer:
      "Level I technicians perform calibrated tests and record results under Level II or III supervision. Level II technicians set up equipment, interpret indications against acceptance criteria, write reports, and supervise Level I personnel. Level III professionals develop written practices and procedures, qualify Level I/II staff, select methods, and sign off on NDT programs — they hold either ASNT NDT Level III or ACCP Level III credentials and typically need a decade of field experience plus passing Basic and Method exams."
  },
  {
    question: "Is NDT a good career in 2026?",
    answer:
      "Yes. US BLS projects 8% growth for non-destructive testing specialists through 2032, faster than average. Aging infrastructure (pipelines, nuclear, refineries), offshore wind buildout, and semiconductor fabs all require certified NDT inspectors. Level II technicians earn $60K–$85K in the US; Level III consultants earn $120K–$180K. Overseas hardship rotations (Middle East, North Sea) can push Level II income past $150K annually."
  },
  {
    question: "What is the highest-paying NDT certification?",
    answer:
      "ASNT NDT Level III is the highest-compensated credential — independent Level IIIs charge $150–$300/hr for procedure development and program audits. Among methods, Phased Array UT (PAUT) and TOFD command the highest field-tech premiums, adding $10–$25/hr over conventional UT. API 510/570/653 pressure-equipment inspector certifications, while not strictly NDT, pay $100K–$150K+ and stack on top of existing Level II credentials."
  },
  {
    question: "Online vs onsite: which NDT training is better?",
    answer:
      "Online works well for theory and code study — SNT-TC-1A permits remote classroom instruction if it is documented. Hands-on calibration, instrument setup, and scanning practice must be done in person; you cannot substitute video for standing in front of a UT scope. Our blended model delivers 60% of theory online (self-paced plus live tutor sessions), then 1–2 weeks onsite for practical work in Houston, Dubai, or Hyderabad. Blended shortens travel by roughly 50% and cuts total cost by 20–30%."
  },
  {
    question: "Can my employer sponsor my NDT training?",
    answer:
      "Almost always yes. Operators, EPCs, and inspection companies routinely sponsor Level I through III training as a retention and compliance investment. Typical arrangements include full tuition coverage in exchange for a 12–24 month service agreement. Employer-sponsored trainees also get SNT-TC-1A certification automatically (the employer is the certifying body), and experience hours accumulate on company time. We offer group pricing for sponsored cohorts of 4+ trainees."
  }
];

const methods = [
  {
    name: "Ultrasonic Testing (UT)",
    code: "UT",
    pitch: "Thickness gauging, weld flaw detection, and depth measurement — the workhorse of refinery and pipeline inspection.",
    hrs: "40 / 40",
    levelLinks: {
      L1: "/ultrasonic-testing",
      L2: "/ultrasonic-testing",
      L3: "/asnt-level-iii-training"
    }
  },
  {
    name: "Radiographic Testing (RT)",
    code: "RT",
    pitch: "Volumetric film and digital radiography for weld quality — demands radiation safety, exposure math, and IQI reading skills.",
    hrs: "40 / 40",
    levelLinks: {
      L1: "/radiographic-testing",
      L2: "/radiographic-testing",
      L3: "/asnt-level-iii-training"
    }
  },
  {
    name: "Magnetic Particle Testing (MT)",
    code: "MT",
    pitch: "Surface and near-surface flaw detection in ferromagnetic materials. Fast, cheap, code-friendly for castings and forgings.",
    hrs: "12 / 24",
    levelLinks: {
      L1: "/magnetic-particle-testing",
      L2: "/magnetic-particle-testing",
      L3: "/asnt-level-iii-training"
    }
  },
  {
    name: "Liquid Penetrant Testing (PT)",
    code: "PT",
    pitch: "Open-to-surface defect detection on any non-porous material. Entry-level but required everywhere weldments are made.",
    hrs: "4 / 8",
    levelLinks: {
      L1: "/penetrant-testing",
      L2: "/penetrant-testing",
      L3: "/asnt-level-iii-training"
    }
  },
  {
    name: "Visual Testing (VT)",
    code: "VT",
    pitch: "Direct and remote visual inspection. Often a prerequisite to every other method — think lighting, IQI, camera systems.",
    hrs: "8 / 16",
    levelLinks: {
      L1: "/visual-testing",
      L2: "/visual-testing",
      L3: "/asnt-level-iii-training"
    }
  },
  {
    name: "Eddy Current Testing (ET)",
    code: "ET",
    pitch: "Surface and subsurface crack detection in conductive materials — tube inspection, aerospace bolt holes, coating thickness.",
    hrs: "40 / 40",
    levelLinks: {
      L1: "/eddy-current-testing",
      L2: "/eddy-current-testing",
      L3: "/asnt-level-iii-training"
    }
  }
];

const specialties = [
  { name: "Phased Array UT (PAUT)", slug: "/phased-array-training", pitch: "Electronic beam steering for faster, image-based UT." },
  { name: "TOFD", slug: "/tofd-testing", pitch: "Time-of-Flight Diffraction — the gold standard for weld sizing." },
  { name: "Digital/Computed Radiography", slug: "/radiographic-testing", pitch: "DR/CR replaces film for faster turnaround." }
];

const cities = [
  { label: "Houston", slug: "/ndt-training-houston" },
  { label: "Dubai", slug: "/ndt-training-dubai" },
  { label: "India", slug: "/ndt-training-india" },
  { label: "Saudi Arabia", slug: "/ndt-training-saudi-arabia" },
  { label: "Online", slug: "/ndt-training-online" }
];

export default function NDTTrainingHub() {
  const faqSchemaData = faqs.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: { "@type": "Answer", text: f.answer }
  }));

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://atlantisndt.com/ndt-training",
        name: "NDT Training & Certification 2026",
        description:
          "Comprehensive NDT training hub covering UT, RT, MT, PT, VT, ET plus PAUT/TOFD specialties. Level I/II/III pathways, SNT-TC-1A vs ISO 9712 vs ACCP, online/onsite/blended delivery.",
        inLanguage: "en-US",
        isPartOf: { "@id": "https://atlantisndt.com/#website" }
      },
      {
        "@type": "ItemList",
        name: "NDT Methods Covered",
        itemListElement: methods.map((m, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: m.name
        }))
      }
    ]
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation />
      <SEOHead
        title="NDT Training & Certification 2026 — 95% Pass Rate, ASNT SNT-TC-1A Approved, All 6 Methods | Atlantis NDT"
        description="ASNT Level III-led NDT training — UT/RT/MT/PT/VT/ET + PAUT/TOFD. Online, onsite, blended. From $800 per course. 95% pass rate. 5,400+ technicians trained worldwide. Enroll: enroll@atlantisndt.com"
        keywords="NDT training, ASNT Level I training, ASNT Level II training, ASNT Level III training, UT training, RT training, MT training, PT training, VT training, ET training, PAUT training, TOFD training, NDT certification courses, SNT-TC-1A, ACCP, ISO 9712"
        canonical="https://atlantisndt.com/ndt-training"
        structuredData={structuredData}
        faq={faqs}
        course={{
          name: "NDT Training Program",
          description:
            "Comprehensive non-destructive testing training program covering all six ASNT methods (UT, RT, MT, PT, VT, ET) plus advanced specialties (PAUT, TOFD, DR/CR) at Level I, II, and III. Delivered online, onsite, or blended with a 91% first-attempt exam pass rate.",
          deliveryMode: ["online", "onsite", "blended"],
          educationalLevel: "Beginner to Advanced",
          price: "800",
          priceCurrency: "USD",
          educationalCredentialAwarded: "ASNT SNT-TC-1A / ACCP / ISO 9712 (method- and level-specific)"
        }}
      />
      <Breadcrumbs />

      {/* HERO */}
      <section className="bg-gradient-to-br from-[#004aad] to-blue-800 text-white pt-24 pb-16">
        <div className="container mx-auto max-w-6xl px-6">
          <div className="flex items-center gap-2 text-blue-200 mb-4">
            <GraduationCap className="w-5 h-5" />
            <span>NDT Training Hub</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">NDT Training & Certification 2026</h1>
          <p className="text-xl text-blue-100 max-w-3xl mb-8">
            Six ASNT methods. Three certification levels. Online, onsite, and blended delivery across Houston, Dubai, India, and Saudi Arabia. 91% first-attempt pass rate across 1,200+ graduates since 2018.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/contact" className="inline-block bg-white text-[#004aad] px-8 py-3 rounded-lg font-semibold hover:bg-slate-100 transition text-center">
              Enroll in 2026 Batch
            </Link>
            <Link to="/tools/ndt-certification-cost-calculator" className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition justify-center">
              Cost Calculator
            </Link>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-12 bg-white border-b border-slate-200">
        <div className="container mx-auto max-w-6xl px-6">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div><div className="text-4xl font-bold text-[#004aad] mb-2">91%</div><div className="text-slate-600">First-Attempt Pass Rate</div></div>
            <div><div className="text-4xl font-bold text-[#004aad] mb-2">6</div><div className="text-slate-600">Core NDT Methods</div></div>
            <div><div className="text-4xl font-bold text-[#004aad] mb-2">3</div><div className="text-slate-600">Certification Levels</div></div>
            <div><div className="text-4xl font-bold text-[#004aad] mb-2">1,200+</div><div className="text-slate-600">Graduates Since 2018</div></div>
          </div>
        </div>
      </section>

      {/* METHOD × LEVEL MATRIX */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Method × Level Training Matrix</h2>
          <p className="text-slate-600 mb-8 max-w-3xl">
            Six core ASNT methods across three certification levels. Click any cell to open the method pillar page; we deliver every combination below under SNT-TC-1A, ACCP, and ISO 9712 schemes.
          </p>

          <div className="overflow-x-auto bg-white rounded-xl shadow-sm border border-slate-200">
            <table className="w-full text-left">
              <thead className="bg-slate-100 text-slate-800 text-sm uppercase tracking-wide">
                <tr>
                  <th className="px-4 py-3">Method</th>
                  <th className="px-4 py-3">Classroom Hrs (L1/L2)</th>
                  <th className="px-4 py-3">Level I</th>
                  <th className="px-4 py-3">Level II</th>
                  <th className="px-4 py-3">Level III</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-sm">
                {methods.map((m) => (
                  <tr key={m.code} className="hover:bg-slate-50">
                    <td className="px-4 py-3">
                      <div className="font-semibold text-slate-900">{m.name}</div>
                      <div className="text-slate-500 text-xs mt-1 max-w-md">{m.pitch}</div>
                    </td>
                    <td className="px-4 py-3 text-slate-700 whitespace-nowrap">{m.hrs}</td>
                    <td className="px-4 py-3"><Link className="text-[#004aad] hover:underline font-medium" to={m.levelLinks.L1}>{m.code} Level I →</Link></td>
                    <td className="px-4 py-3"><Link className="text-[#004aad] hover:underline font-medium" to={m.levelLinks.L2}>{m.code} Level II →</Link></td>
                    <td className="px-4 py-3"><Link className="text-[#004aad] hover:underline font-medium" to={m.levelLinks.L3}>Level III Path →</Link></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-10">
            <h3 className="text-xl font-semibold text-slate-900 mb-4">Advanced & Specialty Courses</h3>
            <div className="grid md:grid-cols-3 gap-4">
              {specialties.map((s) => (
                <Card key={s.slug} className="border-l-4 border-[#004aad]">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">
                      <Link to={s.slug} className="text-slate-900 hover:text-[#004aad]">{s.name} →</Link>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-slate-600">{s.pitch}</CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHICH LEVEL DO I NEED */}
      <section className="py-16 bg-white">
        <div className="container mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Which Level Do I Need?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-t-4 border-t-emerald-500">
              <CardHeader>
                <CardTitle>Level I — Perform</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-700 space-y-3 text-sm leading-relaxed">
                <p>You want to run the scanner, take readings, and record data. You are not interpreting against acceptance criteria yet — that is a Level II call.</p>
                <p><strong>Pick Level I if:</strong> you are entering the field, your employer has a written procedure you will follow, and you need to earn OJT hours toward Level II.</p>
                <p><strong>Typical pay band:</strong> $45,000–$60,000 US base; offshore rotations +30%.</p>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-t-blue-500">
              <CardHeader>
                <CardTitle>Level II — Interpret</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-700 space-y-3 text-sm leading-relaxed">
                <p>You set up the instrument, calibrate, interpret indications, apply accept/reject criteria per code, and write the final inspection report.</p>
                <p><strong>Pick Level II if:</strong> you are billing for inspections, signing reports, or moving into refinery/pipeline contract work where the client requires Level II on the crew.</p>
                <p><strong>Typical pay band:</strong> $60,000–$95,000 US base; Middle East LOA projects $120K+.</p>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-t-amber-500">
              <CardHeader>
                <CardTitle>Level III — Own the Program</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-700 space-y-3 text-sm leading-relaxed">
                <p>You write procedures, qualify Level I/II technicians, sign off on the company's Written Practice, and defend NDT programs during audits.</p>
                <p><strong>Pick Level III if:</strong> you manage an inspection company, are building an in-house NDT department, or intend to consult independently.</p>
                <p><strong>Typical pay band:</strong> $120,000–$180,000 salaried; independent Level III consulting $150–$300/hr.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* SCHEMES */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">SNT-TC-1A vs ISO 9712 vs ACCP: Which Path?</h2>
          <p className="text-slate-600 mb-8 max-w-3xl">
            The three certification schemes differ in who owns the certification, how portable it is, and which regions accept it. Pick the scheme that matches your target employer.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">SNT-TC-1A (ASNT)</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-700 space-y-2 text-sm leading-relaxed">
                <p><strong>Scheme type:</strong> Employer-based. The company holds a Written Practice and certifies you against it.</p>
                <p><strong>Where it wins:</strong> Americas, Middle East oil & gas, petrochemical, power gen. Nearly universal in North America.</p>
                <p><strong>Portability:</strong> Limited — when you change employers, the new company must re-certify you (usually a streamlined audit of your prior exams).</p>
                <p><strong>Best for:</strong> Staff technicians at operators, EPCs, or large inspection companies.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">ISO 9712</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-700 space-y-2 text-sm leading-relaxed">
                <p><strong>Scheme type:</strong> Third-party certification by an accredited body (e.g., PCN, CSWIP, DNV).</p>
                <p><strong>Where it wins:</strong> Europe, UK North Sea, Australia, much of Asia, increasingly required for offshore wind projects.</p>
                <p><strong>Portability:</strong> Fully portable between employers and across borders within the ISO 9712 network.</p>
                <p><strong>Best for:</strong> Contractors working across multiple clients or planning international rotations.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">ASNT ACCP</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-700 space-y-2 text-sm leading-relaxed">
                <p><strong>Scheme type:</strong> ASNT-issued third-party certification — the portable sibling of SNT-TC-1A.</p>
                <p><strong>Where it wins:</strong> Aerospace, multi-site operators, government contractors. Recognized alongside SNT-TC-1A in North America.</p>
                <p><strong>Portability:</strong> Fully portable — the certification stays with you, not the employer.</p>
                <p><strong>Best for:</strong> Aerospace NAS 410 work, independent consultants, and technicians expecting multiple employer moves.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* DELIVERY FORMATS */}
      <section className="py-16 bg-white">
        <div className="container mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Training Formats: Online, Onsite, Blended</h2>
          <p className="text-slate-600 mb-8 max-w-3xl">
            SNT-TC-1A permits remote classroom instruction provided it is documented in the Written Practice. Hands-on calibration and scanning must be performed in person — our blended model minimizes travel while protecting practical competency.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader><CardTitle className="text-lg flex items-center gap-2"><Clock className="w-5 h-5 text-[#004aad]" /> Online Self-Paced</CardTitle></CardHeader>
              <CardContent className="text-sm text-slate-700 leading-relaxed space-y-2">
                <p>Recorded theory modules, code-review walkthroughs, practice exams. You progress at your own pace — typical Level II theory completes in 4–6 weeks of evening study.</p>
                <p><strong>Good for:</strong> Level I theory, Level II code review, Level III Basic exam prep.</p>
                <p><strong>Not suitable for:</strong> first-time practical hands-on training.</p>
                <p><strong>Price band:</strong> $400–$1,200 per method.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader><CardTitle className="text-lg flex items-center gap-2"><Users className="w-5 h-5 text-[#004aad]" /> Onsite Immersive</CardTitle></CardHeader>
              <CardContent className="text-sm text-slate-700 leading-relaxed space-y-2">
                <p>Full-day classroom plus lab work — UT scopes, RT shots, MT yokes, PAUT scanners on real weld samples. Typical runs: 5-day Level I, 10-day Level II, 15-day PAUT.</p>
                <p><strong>Good for:</strong> UT, RT, PAUT, TOFD — any method with significant calibration skill.</p>
                <p><strong>Locations:</strong> Houston, Dubai, Hyderabad, Riyadh.</p>
                <p><strong>Price band:</strong> $1,800–$3,500 per method.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader><CardTitle className="text-lg flex items-center gap-2"><Globe className="w-5 h-5 text-[#004aad]" /> Blended</CardTitle></CardHeader>
              <CardContent className="text-sm text-slate-700 leading-relaxed space-y-2">
                <p>60% theory delivered online (self-paced plus live tutor sessions), 40% onsite practical — typically 1 week in-person for Level II. Cuts travel by 50% and cost by 20–30%.</p>
                <p><strong>Good for:</strong> working technicians who cannot take 2+ weeks off the job.</p>
                <p><strong>Most popular format:</strong> about 55% of 2025 enrollments.</p>
                <p><strong>Price band:</strong> $1,400–$2,500 per method.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CITIES */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Training Locations & Countries</h2>
          <p className="text-slate-600 mb-8 max-w-3xl">
            We deliver NDT training in four regional hubs plus a fully online cohort. Pick the delivery city closest to your team — every regional classroom uses the same syllabus, instructors, and equipment calibration standards.
          </p>

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">
            {cities.map((c) => (
              <Link
                key={c.slug}
                to={c.slug}
                className="group rounded-xl border border-slate-200 bg-white p-5 hover:border-[#004aad] hover:shadow-md transition"
              >
                <div className="text-slate-900 font-semibold group-hover:text-[#004aad]">{c.label}</div>
                <div className="text-xs text-slate-500 mt-1">Batches every 4–6 weeks</div>
              </Link>
            ))}
          </div>

          <div className="mt-10 grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader><CardTitle className="text-lg">Corporate & In-House Training</CardTitle></CardHeader>
              <CardContent className="text-sm text-slate-700 leading-relaxed">
                <p className="mb-3">Running a team of 8 or more? Onsite delivery at your facility is typically cheaper per seat than public batches and lets you run dedicated exams against your company Written Practice. We mobilize to client sites in the US, GCC, and India within 2–3 weeks of signing.</p>
                <Link to="/corporate-ndt-training" className="text-[#004aad] font-medium hover:underline">Corporate NDT Training →</Link>
              </CardContent>
            </Card>

            <Card>
              <CardHeader><CardTitle className="text-lg">Certification-Specific Tracks</CardTitle></CardHeader>
              <CardContent className="text-sm text-slate-700 leading-relaxed space-y-2">
                <p>Pressure-equipment inspectors often pair Level II NDT with an API credential. We run focused tracks:</p>
                <ul className="list-disc ml-5 space-y-1">
                  <li><Link className="text-[#004aad] hover:underline" to="/api-510-certification">API 510 Pressure Vessel Inspector</Link></li>
                  <li><Link className="text-[#004aad] hover:underline" to="/api-570-certification">API 570 Piping Inspector</Link></li>
                  <li><Link className="text-[#004aad] hover:underline" to="/api-653-certification">API 653 Tank Inspector</Link></li>
                  <li><Link className="text-[#004aad] hover:underline" to="/asnt-certification">ASNT Level III consolidated path</Link></li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="container mx-auto max-w-4xl px-6">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">NDT Training — Frequently Asked</h2>
          <div className="space-y-4">
            {faqs.map((f, i) => (
              <details key={i} className="bg-slate-50 rounded-lg border border-slate-200 p-5 group">
                <summary className="cursor-pointer font-semibold text-slate-900 flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-[#004aad] shrink-0 mt-0.5" />
                  <span>{f.question}</span>
                </summary>
                <p className="mt-3 text-slate-700 text-sm leading-relaxed pl-7">{f.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-[#004aad] to-blue-800 text-white">
        <div className="container mx-auto max-w-4xl px-6 text-center">
          <Award className="w-12 h-12 mx-auto mb-4 text-blue-200" />
          <h2 className="text-3xl font-bold mb-4">Ready to Enroll?</h2>
          <p className="text-blue-100 max-w-2xl mx-auto mb-6">
            Monthly batches in Houston, Dubai, and Hyderabad. Blended and online cohorts open year-round. Talk to an ASNT Level III advisor before you commit — we will tell you honestly whether a given method and level fits your career trajectory.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="inline-block bg-white text-[#004aad] px-8 py-3 rounded-lg font-semibold hover:bg-slate-100 transition">
              Request a Syllabus
            </Link>
            <Link to="/tools/ndt-certification-cost-calculator" className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition justify-center">
              <DollarSign className="w-5 h-5" /> Cost Calculator
            </Link>
          </div>
        </div>
      </section>

      <ContactDetails />
    </div>
  );
}
