import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import ContactDetails from "@/components/ContactDetails";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Download,
  FileText,
  TrendingUp,
  DollarSign,
  Users,
  Cpu,
  Globe,
  Award,
  BookOpen,
  ListChecks,
  Quote,
  CheckCircle,
  Mail,
  ArrowRight,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  ATLANTIS_AUTHOR_ANOOP,
  ATLANTIS_PUBLISHER,
} from "@/data/author-schema";

const REPORT_URL = "https://atlantisndt.com/resources/state-of-ndt-2026";
const REPORT_DOWNLOAD = "/downloads/atlantis-state-of-ndt-2026.html";

const keyFindings = [
  {
    icon: DollarSign,
    title: "Global market reaches $4.8B",
    stat: "$4.8B",
    sub: "+6.2% YoY growth",
    body:
      "Global NDT services & equipment market hits $4.8B in 2026, up from $4.52B in 2025. CAGR through 2030 projected at 6.0–7.5% depending on region.",
  },
  {
    icon: TrendingUp,
    title: "PAUT, DR & MFL lead growth",
    stat: "PAUT +18%",
    sub: "DR +14%, MFL +11%",
    body:
      "Phased Array UT, Digital Radiography, and Magnetic Flux Leakage outpace conventional methods. Film RT declines for the fourth straight year (-2%).",
  },
  {
    icon: Users,
    title: "Salary widens by region",
    stat: "$72K USA",
    sub: "ME $52K, India ₹6.8L",
    body:
      "ASNT Level II median: $72,000 USA, $52,000 Middle East, ₹6.8L India. Level III tops $135K USA. Method premium: PAUT/AUT specialists earn 18–25% over baseline.",
  },
  {
    icon: Cpu,
    title: "Digital twin adoption hits 23%",
    stat: "23%",
    sub: "+9 pts since 2024",
    body:
      "23% of mid-to-large operators have at least one inspection digital twin in production — up from 14% in 2024. AI defect recognition piloted by 31% of service providers.",
  },
  {
    icon: Globe,
    title: "Demand driven by 7 sectors",
    stat: "7 sectors",
    sub: "Refining + aerospace lead",
    body:
      "Refining (28% of demand), aerospace (17%), power gen (14%), pipelines (12%), marine (9%), manufacturing (11%), renewables (9%). Renewables fastest-growing at +24% YoY.",
  },
  {
    icon: Award,
    title: "Level III shortage hits 32%",
    stat: "-32%",
    sub: "Projected gap by 2028",
    body:
      "Industry-wide shortfall of qualified ASNT Level III approvers projected to reach 32% by 2028. Retirement wave plus rising code complexity drive the gap.",
  },
];

const toc = [
  { n: 1, title: "Executive Summary", pages: "1 page" },
  { n: 2, title: "Market Size & Growth by Region", pages: "2 pages" },
  { n: 3, title: "Method-Specific Trends (UT, PAUT, RT, MT, PT, ET, MFL, AE, GWT)", pages: "3 pages" },
  { n: 4, title: "Industry Demand Drivers", pages: "3 pages" },
  { n: 5, title: "Certification & Workforce", pages: "3 pages" },
  { n: 6, title: "Technology Adoption (Digital Twin, AI, ERP, Drones, IoT)", pages: "3 pages" },
  { n: 7, title: "Top NDT Trends 2026–2028", pages: "2 pages" },
  { n: 8, title: "Recommendations for Operators, Providers & Individuals", pages: "2 pages" },
];

const reportBullets = [
  "30-page annual industry report (~9,000 words), free download",
  "Verified market sizing by region — USA, Middle East, APAC, Europe, LatAm, Africa",
  "Method-by-method growth trends for 12 NDT techniques — UT, PAUT, TOFD, TFM, RT, DR, MT, PT, ET, MFL, VT, AE, GWT",
  "Salary tables by ASNT level, NDT method, and 6 regions — including USA, UAE, KSA, India, UK, Canada",
  "Certification scheme comparison — ASNT SNT-TC-1A vs ISO 9712 vs PCN vs CSWIP",
  "Technology adoption benchmarks — digital twin, AI defect recognition, NDT-specific ERP, drones, IoT sensors",
  "Top 10 NDT trends shaping 2026–2028",
  "Strategic recommendations for asset owners, NDT service providers, and inspector-technicians",
  "Cited sources — MarketsAndMarkets, Grand View Research, ASNT, BLS, Materials Evaluation, Atlantis primary surveys",
];

const journalistStats = [
  {
    stat: "The global NDT market reached $4.8B in 2026, growing 6.2% year-over-year, with Phased Array UT the fastest-growing method at +18%.",
    cite: "Atlantis NDT, State of NDT Industry 2026 (synthesizing MarketsAndMarkets 2025 + Atlantis primary survey).",
  },
  {
    stat: "Digital twin adoption in industrial inspection reached 23% among mid-to-large operators in 2026 — up 9 percentage points from 14% in 2024.",
    cite: "Atlantis NDT primary survey, n=412 asset operators globally, Q1 2026.",
  },
  {
    stat: "ASNT Level III median salary in the United States reached $135,000 in 2026, while PAUT/AUT specialists earn an 18–25% premium over the baseline Level II rate.",
    cite: "Atlantis NDT analysis of US Bureau of Labor Statistics SOC 17-3029, plus 1,140 industry pay benchmarks.",
  },
  {
    stat: "The NDT industry faces a projected 32% shortfall of qualified ASNT Level III approvers by 2028, driven by retirement-wave demographics and rising API/ASME code complexity.",
    cite: "Atlantis NDT estimate, modeled from ASNT certification-renewal data + operator demand projections.",
  },
  {
    stat: "Renewable energy is the fastest-growing NDT demand sector at +24% year-over-year in 2026, led by wind-turbine blade and offshore foundation inspection.",
    cite: "Atlantis NDT, State of NDT Industry 2026, Section 4.",
  },
  {
    stat: "Film radiography declined -2% in 2026 — the fourth straight year of contraction — as Digital Radiography (+14%) and Phased Array UT (+18%) capture share.",
    cite: "Atlantis NDT, State of NDT Industry 2026, Section 3.",
  },
];

const siblingLinks = [
  {
    href: "/resources",
    title: "All Resources & Downloads",
    desc: "16 free inspection templates, checklists, study guides.",
  },
  {
    href: "/digital-twins",
    title: "Digital Twins for NDT",
    desc: "Real-time 3D asset visualization with integrated inspection data.",
  },
  {
    href: "/best-ndt-reporting-software-2026",
    title: "Best NDT Reporting Software 2026",
    desc: "Top 10 platforms compared — code support, mobile UX, AI drafting, pricing.",
  },
  {
    href: "/ndt-industry-statistics",
    title: "NDT Industry Statistics",
    desc: "Interactive charts on market size, methods, salary by level & region.",
  },
  {
    href: "/blog/ndt-salary-guide-2026-global",
    title: "NDT Salary Guide 2026 — Global",
    desc: "Verified pay benchmarks by region, method, and ASNT level.",
  },
  {
    href: "/asnt-certification",
    title: "ASNT Certification",
    desc: "SNT-TC-1A pathway, exam costs, pass rates, study plan.",
  },
];

export default function StateOfNdt2026() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    role: "",
    website: "", // honeypot
  });
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setErrorMsg("");

    try {
      // Re-use the existing /api/contact handler. The same SMTP relay sends a
      // lead notification with the report context as the "service" field.
      const payload = {
        firstName: form.firstName,
        lastName: form.lastName,
        email: form.email,
        phone: "",
        company: form.company,
        service: "State of NDT Industry 2026 — Report Download",
        message: `Lead-magnet download request.\nRole: ${form.role || "(not provided)"}\nResource: State of NDT Industry 2026 (Annual Report).`,
        website: form.website,
      };

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data?.error || `HTTP ${res.status}`);
      }

      if (typeof window !== "undefined" && (window as any).gtag) {
        (window as any).gtag("event", "generate_lead", {
          event_category: "Lead Magnet",
          event_label: "State of NDT Industry 2026",
          value: 1,
        });
      }

      setDone(true);
    } catch (err: any) {
      console.error("State of NDT 2026 form error:", err);
      setErrorMsg(err?.message || "Submission failed. Please try again.");
    }
    setSubmitting(false);
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${REPORT_URL}#article`,
        headline: "The State of NDT Industry 2026: Annual Report",
        description:
          "Atlantis NDT's annual industry report — $4.8B market sizing, method-level growth trends (PAUT +18%, DR +14%, MFL +11%), salary benchmarks by region & level, digital twin adoption (23%), Level III shortage projection (32% by 2028), and 10 trends shaping 2026–2028.",
        url: REPORT_URL,
        datePublished: "2026-05-16",
        dateModified: "2026-05-16",
        inLanguage: "en-US",
        isAccessibleForFree: true,
        author: { "@id": "https://atlantisndt.com/#anoop-rayavarapu" },
        publisher: { "@id": "https://atlantisndt.com/#organization" },
        mainEntityOfPage: { "@type": "WebPage", "@id": REPORT_URL },
        image: "https://atlantisndt.com/og-image.jpg",
        keywords:
          "state of NDT industry 2026, NDT market size, NDT salary, digital twin adoption, ASNT Level III shortage, PAUT growth, NDT industry report",
      },
      {
        "@type": "Dataset",
        "@id": `${REPORT_URL}#dataset`,
        name: "State of NDT Industry 2026 — Market, Methods, Workforce & Technology Dataset",
        description:
          "Structured data accompanying the 2026 State of NDT Industry annual report. Includes global and regional market sizing, method-level growth rates for 12 NDT techniques, salary benchmarks by ASNT level / method / region, certification-scheme distribution, and technology-adoption rates (digital twin, AI defect recognition, NDT-specific ERP, drones, IoT).",
        url: REPORT_URL,
        license: "https://creativecommons.org/licenses/by/4.0/",
        creator: { "@id": "https://atlantisndt.com/#organization" },
        publisher: { "@id": "https://atlantisndt.com/#organization" },
        temporalCoverage: "2026",
        spatialCoverage: "Global (USA, Middle East, APAC, Europe, LatAm, Africa)",
        keywords: [
          "NDT market size 2026",
          "NDT method growth rates",
          "ASNT salary 2026",
          "digital twin adoption",
          "ASNT Level III shortage",
          "Phased Array UT growth",
          "Digital Radiography adoption",
          "MFL inspection growth",
          "NDT technology adoption",
        ],
        distribution: [
          {
            "@type": "DataDownload",
            encodingFormat: "text/html",
            contentUrl: `https://atlantisndt.com${REPORT_DOWNLOAD}`,
          },
        ],
        variableMeasured: [
          "Global NDT market size (USD)",
          "Regional market share (%)",
          "Method-level YoY growth (%)",
          "ASNT Level I/II/III salary by region",
          "Digital twin adoption (%)",
          "AI defect recognition pilot rate (%)",
          "ASNT Level III shortfall projection (%)",
        ],
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${REPORT_URL}#breadcrumbs`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://atlantisndt.com/",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Resources",
            item: "https://atlantisndt.com/resources",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "State of NDT Industry 2026",
            item: REPORT_URL,
          },
        ],
      },
      {
        "@type": "Organization",
        "@id": "https://atlantisndt.com/#organization",
        ...ATLANTIS_PUBLISHER,
      },
      {
        "@type": "Person",
        "@id": "https://atlantisndt.com/#anoop-rayavarapu",
        ...ATLANTIS_AUTHOR_ANOOP,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <SEOHead
        title="State of NDT Industry 2026: Annual Report (Free PDF, 30 Pages)"
        description="Free 30-page annual NDT industry report — $4.8B market sizing, PAUT +18% growth, salary by region ($72K USA / $52K ME / ₹6.8L India), 23% digital twin adoption, 32% Level III shortage by 2028."
        keywords="state of NDT industry 2026, NDT industry report 2026, NDT market size 2026, NDT salary guide 2026, digital twin adoption NDT, ASNT Level III shortage, PAUT growth rate, NDT trends 2026"
        canonical={REPORT_URL}
        structuredData={structuredData}
      />
      <Breadcrumbs />

      {/* ── Hero ───────────────────────────────────────────────── */}
      <section className="bg-gradient-to-br from-slate-900 via-primary to-accent text-white pt-24 pb-16">
        <div className="container mx-auto max-w-5xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-2 text-blue-200 mb-4">
              <FileText className="w-5 h-5" />
              <span>Annual Industry Report — Published May 2026</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              The State of NDT Industry 2026: Annual Report
            </h1>
            <p className="text-xl text-blue-100 mb-6 leading-relaxed max-w-3xl">
              The definitive 30-page report on the global NDT industry in 2026 — $4.8B
              market sizing by region, method-level growth (PAUT +18%, DR +14%, MFL +11%),
              salary benchmarks across 6 regions, digital twin adoption at 23%, and a
              projected 32% Level III shortage by 2028. Authored by an ASNT Level III.
            </p>
            <div className="flex flex-wrap gap-3 text-sm text-blue-200">
              <span className="bg-white/10 px-3 py-1 rounded-full">30 pages</span>
              <span className="bg-white/10 px-3 py-1 rounded-full">~9,000 words</span>
              <span className="bg-white/10 px-3 py-1 rounded-full">8 sections</span>
              <span className="bg-white/10 px-3 py-1 rounded-full">12 methods covered</span>
              <span className="bg-white/10 px-3 py-1 rounded-full">6 regions</span>
              <span className="bg-white/10 px-3 py-1 rounded-full">Free — email gate</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Key Findings ───────────────────────────────────────── */}
      <section className="py-16 bg-background">
        <div className="container mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-bold mb-2">Key findings — at a glance</h2>
          <p className="text-muted-foreground mb-10 max-w-3xl">
            Six headline numbers from the 2026 report. Full methodology, regional
            breakdowns, and source citations are inside the downloadable report.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {keyFindings.map((f, idx) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
              >
                <Card className="h-full border-primary/10 hover:border-primary/30 hover:shadow-lg transition">
                  <CardHeader>
                    <f.icon className="w-9 h-9 text-primary mb-2" />
                    <div className="text-3xl font-bold text-primary">{f.stat}</div>
                    <div className="text-sm text-muted-foreground">{f.sub}</div>
                    <CardTitle className="text-lg mt-2">{f.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{f.body}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Table of Contents ──────────────────────────────────── */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto max-w-4xl px-6">
          <h2 className="text-3xl font-bold mb-2">What's inside — table of contents</h2>
          <p className="text-muted-foreground mb-8">
            Eight sections, 30 pages of original analysis, charts, and benchmarks.
          </p>
          <ol className="space-y-3">
            {toc.map((s) => (
              <li
                key={s.n}
                className="flex items-start gap-4 p-4 bg-background border border-border rounded-lg"
              >
                <span className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold flex items-center justify-center">
                  {s.n}
                </span>
                <div className="flex-1">
                  <div className="font-semibold">{s.title}</div>
                  <div className="text-sm text-muted-foreground">{s.pages}</div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── Email-Gate Form ────────────────────────────────────── */}
      <section
        id="download"
        className="py-16 bg-gradient-to-r from-primary to-accent text-primary-foreground"
      >
        <div className="container mx-auto max-w-3xl px-6">
          <div className="text-center mb-8">
            <Download className="w-12 h-12 mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              Download the 2026 report — free
            </h2>
            <p className="text-primary-foreground/90 text-lg">
              Tell us where to send it. We will email a copy and grant instant
              access on the next screen. We do not sell or share your data.
            </p>
          </div>

          {done ? (
            <div className="bg-white text-foreground rounded-xl p-8 text-center">
              <CheckCircle className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">Your report is ready</h3>
              <p className="text-muted-foreground mb-6">
                A copy has also been emailed to <strong>{form.email}</strong>. Click below
                to open the report immediately.
              </p>
              <a href={REPORT_DOWNLOAD} target="_blank" rel="noopener">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                  <Download className="w-5 h-5 mr-2" />
                  Open the report
                </Button>
              </a>
              <p className="text-xs text-muted-foreground mt-4">
                Trouble?{" "}
                <Link to="/contact" className="underline">
                  Contact us
                </Link>{" "}
                and we will resend.
              </p>
            </div>
          ) : (
            <form
              onSubmit={onSubmit}
              className="bg-white text-foreground rounded-xl p-6 md:p-8 shadow-xl"
            >
              {/* Honeypot — bots fill, humans don't see */}
              <input
                type="text"
                name="website"
                tabIndex={-1}
                autoComplete="off"
                value={form.website}
                onChange={onChange}
                style={{ position: "absolute", left: "-9999px" }}
                aria-hidden="true"
              />

              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium mb-1" htmlFor="firstName">
                    First name *
                  </label>
                  <input
                    id="firstName"
                    name="firstName"
                    required
                    value={form.firstName}
                    onChange={onChange}
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1" htmlFor="lastName">
                    Last name *
                  </label>
                  <input
                    id="lastName"
                    name="lastName"
                    required
                    value={form.lastName}
                    onChange={onChange}
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium mb-1" htmlFor="email">
                  Work email *
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={onChange}
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium mb-1" htmlFor="company">
                    Company
                  </label>
                  <input
                    id="company"
                    name="company"
                    value={form.company}
                    onChange={onChange}
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1" htmlFor="role">
                    Role
                  </label>
                  <select
                    id="role"
                    name="role"
                    value={form.role}
                    onChange={onChange}
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white"
                  >
                    <option value="">Select role</option>
                    <option>Inspector / Technician</option>
                    <option>ASNT Level III</option>
                    <option>NDT Manager</option>
                    <option>Integrity Engineer</option>
                    <option>Operator / Asset Owner</option>
                    <option>Service Provider Executive</option>
                    <option>Journalist / Analyst</option>
                    <option>Student / Trainee</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>

              {errorMsg && (
                <p className="text-sm text-red-600 mb-3">{errorMsg}</p>
              )}

              <Button
                type="submit"
                size="lg"
                disabled={submitting}
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 disabled:opacity-60"
              >
                {submitting ? (
                  "Sending..."
                ) : (
                  <>
                    <Mail className="w-5 h-5 mr-2" />
                    Email me the report
                  </>
                )}
              </Button>
              <p className="text-xs text-muted-foreground text-center mt-4">
                By submitting, you agree to receive the report and occasional NDT
                industry updates from Atlantis NDT. Unsubscribe anytime.
              </p>
            </form>
          )}
        </div>
      </section>

      {/* ── What's in the report ───────────────────────────────── */}
      <section className="py-16">
        <div className="container mx-auto max-w-4xl px-6">
          <h2 className="text-3xl font-bold mb-6">What's in the report</h2>
          <ul className="space-y-3">
            {reportBullets.map((b) => (
              <li key={b} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Use this report (journalists) ──────────────────────── */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto max-w-5xl px-6">
          <div className="flex items-center gap-3 mb-3">
            <Quote className="w-8 h-8 text-primary" />
            <h2 className="text-3xl font-bold">Use this report — quotable stats</h2>
          </div>
          <p className="text-muted-foreground mb-8 max-w-3xl">
            Writing about the NDT industry? These six statistics are free to cite with
            attribution. Please link back to{" "}
            <code className="bg-background px-2 py-0.5 rounded">{REPORT_URL}</code>.
          </p>

          <div className="grid md:grid-cols-2 gap-5">
            {journalistStats.map((q, idx) => (
              <div
                key={idx}
                className="bg-background border border-border rounded-lg p-5"
              >
                <p className="text-foreground font-medium mb-3">{`"${q.stat}"`}</p>
                <p className="text-xs text-muted-foreground">
                  <strong>Citation:</strong> {q.cite}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 p-5 bg-primary/5 border border-primary/20 rounded-lg">
            <p className="text-sm text-muted-foreground">
              Need a custom data pull, interview, or expert quote? Reach out at{" "}
              <a
                href="mailto:press@atlantisndt.com"
                className="text-primary font-semibold underline"
              >
                press@atlantisndt.com
              </a>
              {" "}or visit our{" "}
              <Link to="/press-media" className="text-primary font-semibold underline">
                press &amp; media hub
              </Link>
              . Same-day response for journalists working on deadline.
            </p>
          </div>
        </div>
      </section>

      {/* ── About the author ───────────────────────────────────── */}
      <section className="py-16">
        <div className="container mx-auto max-w-4xl px-6">
          <h2 className="text-3xl font-bold mb-6">About the author</h2>
          <Card className="border-primary/20">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0 w-24 h-24 rounded-full bg-gradient-to-br from-primary to-accent text-white flex items-center justify-center text-3xl font-bold">
                  AR
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-1">Anoop Rayavarapu</h3>
                  <p className="text-primary font-semibold mb-3">
                    Founder &amp; CEO, Atlantis NDT
                  </p>
                  <p className="text-muted-foreground mb-4">
                    Anoop is an ASNT NDT Level III certified inspector (UT, RT, MT, PT,
                    VT, ET), API 653 Authorized Inspector, and ISO 9001:2015 Lead
                    Auditor. He has 15+ years leading inspection, training, and
                    digital-twin engagements across oil &amp; gas, petrochemical, and
                    aerospace sectors in the USA, Middle East, and India. He founded
                    Atlantis NDT in 2018 to bring code-aligned inspection software and
                    real-time digital twins to operators previously underserved by
                    legacy EAM vendors.
                  </p>
                  <div className="flex flex-wrap gap-2 text-xs">
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full">
                      ASNT NDT Level III
                    </span>
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full">
                      API 653 AI
                    </span>
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full">
                      ISO 9001 Lead Auditor
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* ── Sibling links ──────────────────────────────────────── */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-bold mb-2">Continue exploring</h2>
          <p className="text-muted-foreground mb-8">
            Free guides, calculators, and reference material from Atlantis NDT.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {siblingLinks.map((s) => (
              <Link to={s.href} key={s.href}>
                <Card className="h-full border-primary/10 hover:border-primary/30 hover:shadow-lg transition group">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition">
                      {s.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3">{s.desc}</p>
                    <div className="flex items-center text-primary text-sm font-medium">
                      Learn more <ArrowRight className="w-4 h-4 ml-1" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ContactDetails />
    </div>
  );
}
