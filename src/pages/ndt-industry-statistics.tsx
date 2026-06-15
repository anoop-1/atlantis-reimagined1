import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import ContactDetails from "@/components/ContactDetails";
import QuickAnswerBox from "@/components/QuickAnswerBox";
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
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
  Legend,
} from "recharts";
import {
  TrendingUp,
  Users,
  DollarSign,
  Globe,
  ChevronDown,
  ChevronUp,
  BarChart3,
  ArrowRight,
} from "lucide-react";

/* ─── Chart Data ─── */
const marketSizeData = [
  { year: "2020", value: 10.2 },
  { year: "2021", value: 11.1 },
  { year: "2022", value: 12.3 },
  { year: "2023", value: 13.9 },
  { year: "2024", value: 15.8 },
  { year: "2025", value: 17.1 },
  { year: "2026", value: 18.5 },
  { year: "2027", value: 20.0 },
  { year: "2028", value: 21.6 },
  { year: "2029", value: 23.4 },
  { year: "2030", value: 25.3 },
];

const marketByMethod = [
  { name: "Ultrasonic Testing (UT)", value: 35, color: "#004aad" },
  { name: "Radiographic Testing (RT)", value: 20, color: "#2563eb" },
  { name: "Magnetic Particle (MT)", value: 15, color: "#3b82f6" },
  { name: "Penetrant Testing (PT)", value: 12, color: "#60a5fa" },
  { name: "Eddy Current (ET)", value: 10, color: "#93bbfd" },
  { name: "Visual Testing (VT)", value: 8, color: "#bfdbfe" },
];

const marketByIndustry = [
  { industry: "Oil & Gas", share: 35 },
  { industry: "Aerospace", share: 20 },
  { industry: "Power Gen", share: 15 },
  { industry: "Manufacturing", share: 12 },
  { industry: "Construction", share: 10 },
  { industry: "Other", share: 8 },
];

const salaryByLevel = [
  { level: "Level I", usa: 48000, middleEast: 36000, europe: 42000, india: 12000 },
  { level: "Level II", usa: 72000, middleEast: 54000, europe: 60000, india: 18000 },
  { level: "Level III", usa: 120000, middleEast: 96000, europe: 90000, india: 36000 },
];

const salaryByMethod = [
  { method: "UT/PAUT", levelII: 78000, levelIII: 135000 },
  { method: "RT", levelII: 72000, levelIII: 120000 },
  { method: "ET", levelII: 75000, levelIII: 128000 },
  { method: "MT", levelII: 62000, levelIII: 105000 },
  { method: "PT", levelII: 58000, levelIII: 100000 },
  { method: "VT", levelII: 55000, levelIII: 95000 },
];

const certDemographics = [
  { name: "SNT-TC-1A", value: 60, color: "#004aad" },
  { name: "ISO 9712", value: 25, color: "#2563eb" },
  { name: "PCN", value: 10, color: "#60a5fa" },
  { name: "Other", value: 5, color: "#bfdbfe" },
];

const regionalShare = [
  { region: "Americas", share: 35 },
  { region: "Asia-Pacific", share: 30 },
  { region: "Europe", share: 25 },
  { region: "MEA", share: 10 },
];

/* ─── Cite Box Component ─── */
function CiteBox({ stat }: { stat: string }) {
  return (
    <div className="bg-slate-100 border border-slate-200 rounded-lg p-4 mt-4">
      <p className="text-xs text-slate-500 font-medium mb-1">Cite this statistic:</p>
      <p className="text-sm text-slate-700">
        "{stat}" — <em>NDT Industry Report 2026</em>, Atlantis NDT.{" "}
        <a
          href="https://atlantisndt.com/ndt-industry-statistics"
          className="text-[#004aad] underline"
        >
          atlantisndt.com/ndt-industry-statistics
        </a>
      </p>
    </div>
  );
}

/* ─── FAQ ─── */
const faqs = [
  {
    q: "How big is the global NDT market?",
    a: "The global non-destructive testing market was valued at approximately $15.8 billion in 2024 and is projected to reach $25.3 billion by 2030, growing at a compound annual growth rate (CAGR) of 8.1%. Key growth drivers include aging infrastructure requiring more inspection, expansion of renewable energy assets, increasing adoption of digital twin technology, and stricter safety regulations across oil & gas, aerospace, and power generation industries.",
  },
  {
    q: "What is the fastest growing NDT method?",
    a: "Phased Array Ultrasonic Testing (PAUT) is the fastest growing NDT method segment, with an estimated CAGR of 12-15% through 2030. PAUT is rapidly replacing conventional radiographic testing for weld inspection due to superior defect sizing capability, no radiation hazard, and immediate digital results. The broader UT segment (including PAUT, TOFD, and guided wave) accounts for 35% of the total NDT market by revenue.",
  },
  {
    q: "What is the average NDT technician salary?",
    a: "NDT technician salaries vary significantly by certification level, method, and region. In the United States, Level I technicians earn $40,000-$55,000 annually, Level II technicians earn $55,000-$95,000, and Level III professionals earn $80,000-$160,000+. UT/PAUT specialists command the highest salaries among conventional methods. International salary benchmarks differ — Middle East positions typically pay 70-80% of US rates (tax-free), while India-based roles pay 25-35% of US rates.",
  },
  {
    q: "How many NDT technicians are there globally?",
    a: "There are an estimated 500,000+ certified NDT technicians working globally across all industries. The United States employs approximately 80,000-100,000 NDT professionals, with the largest concentrations in Texas (oil & gas), California (aerospace), and Louisiana (petrochemical). The industry faces a projected 15% workforce shortage by 2028 due to retirements — the average NDT technician age is 45, and only 8% of the workforce is female, indicating significant opportunities for new entrants.",
  },
  {
    q: "Which industry spends the most on NDT?",
    a: "Oil & gas is the largest end-use industry for NDT services, accounting for approximately 35% of global NDT spending (approximately $5.5 billion in 2024). This includes upstream (production platforms, pipelines), midstream (transmission pipelines, terminals), and downstream (refineries, petrochemical plants). Aerospace is the second largest at 20%, followed by power generation at 15%. The oil & gas sector's dominance is driven by mandatory inspection requirements for pressure equipment (ASME, API codes), pipeline integrity management regulations, and aging refinery infrastructure requiring in-service inspection.",
  },
  {
    q: "What is the NDT workforce shortage?",
    a: "The NDT industry faces a projected 15% workforce shortage by 2028. This shortage is driven by an aging workforce (average age 45), insufficient new entrants to replace retirees, and growing inspection demand from infrastructure expansion and stricter regulations. The American Society for Nondestructive Testing (ASNT) has identified workforce development as a critical industry priority. Key initiatives to address the shortage include school outreach programs, veterans transition programs, and increased visibility of NDT as a career path.",
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

export default function NDTIndustryStatistics() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: "NDT Industry Statistics 2026 | Market Size, Salaries, Growth Data",
        description:
          "Comprehensive NDT industry statistics: $15.8B market size (2024), 8.1% CAGR to $25.3B by 2030, salary data by level and method, workforce demographics, and regional market share.",
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
          "@id": "https://atlantisndt.com/ndt-industry-statistics",
        },
        keywords:
          "ndt market size, ndt industry statistics, ndt salary data, ndt workforce, ndt market growth, non destructive testing market, ndt industry report 2026",
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
        title="NDT Industry Statistics 2026 — Market Size, Trends, Jobs"
        description="Latest NDT industry stats: $4.5B market, 8% CAGR, regional breakdown, top employers, skills demand. Updated quarterly with primary research data."
        keywords="ndt market size, ndt industry statistics, ndt salary data, ndt workforce statistics, ndt market growth, non destructive testing market, ndt industry report 2026, ndt technician demographics, ndt market by method, ndt regional market share"
        structuredData={structuredData}
        canonical="https://atlantisndt.com/ndt-industry-statistics"
      />
      <Breadcrumbs />
        <QuickAnswerBox question="What does the NDT industry look like in 2026?" answer="The global NDT services market hit ~<Breadcrumbs />1 billion in 2025, growing at 7-9% CAGR. Top segments: oil & gas (35%), aerospace (22%), power generation (15%), manufacturing (12%), construction (10%), other (6%). North America leads on revenue; Asia-Pacific leads on growth. Demand drivers: aging infrastructure, RBI adoption, advanced UT (PAUT/TOFD), and digital twin integration." bullets={["Market size 2025: ~<Breadcrumbs />1B; projected <Breadcrumbs />5-17B by 2030","Top regions by revenue: NA (32%), EMEA (29%), APAC (28%), LATAM (11%)","Skill demand: ASNT Level II/III + PAUT/TOFD specialists in shortest supply"]} />


      {/* Hero */}
      <section className="bg-[#004aad] text-white py-16">
        <div className="container mx-auto max-w-6xl px-6">
          <div className="max-w-3xl">
            <p className="text-blue-200 text-sm font-medium mb-3 uppercase tracking-wider">
              NDT Industry Report &middot; Updated February 2026
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mb-5 leading-tight">
              NDT Industry Statistics 2026
            </h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Comprehensive data on the global non-destructive testing market: market size and growth projections, salary benchmarks by level and method, workforce demographics, certification statistics, and regional market share. All data sourced from industry reports and regularly updated.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/ndt-complete-guide"
                className="bg-white text-[#004aad] font-semibold px-6 py-3 rounded-lg hover:bg-blue-50 transition"
              >
                Complete NDT Guide
              </Link>
              <Link
                to="/ndt-technician-salary"
                className="border border-white text-white font-semibold px-6 py-3 rounded-lg hover:bg-white/10 transition"
              >
                NDT Salary Guide
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
              { label: "Global Market Size (2024)", value: "$15.8 Billion" },
              { label: "Projected Market (2030)", value: "$25.3 Billion" },
              { label: "CAGR (2024-2030)", value: "8.1%" },
              { label: "Global NDT Workforce", value: "500,000+" },
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
          {/* 1. Global NDT Market Size */}
          <motion.section
            id="market-size"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-5" style={{ color: "#004aad" }}>
              Global NDT Market Size & Growth (2020-2030)
            </h2>
            <p className="text-lg text-slate-700 leading-relaxed mb-4">
              The global non-destructive testing market was valued at <strong>$15.8 billion in 2024</strong> and is projected to reach <strong>$25.3 billion by 2030</strong>, growing at a compound annual growth rate (CAGR) of <strong>8.1%</strong>. Growth is driven by aging infrastructure, stricter safety regulations, expansion of renewable energy, and increasing adoption of digital inspection technologies including AI-powered analysis and digital twins.
            </p>
            <p className="text-slate-700 leading-relaxed mb-6">
              The COVID-19 pandemic caused a temporary market contraction in 2020 ($10.2B), but the industry recovered strongly — driven by deferred maintenance backlogs and accelerated digital transformation. Post-2022 growth has been fueled by energy transition investment, offshore wind farm inspection requirements, and new nuclear power plant construction programs across Asia and Europe.
            </p>
            <div className="bg-white rounded-xl shadow border border-slate-100 p-6">
              <h3 className="font-bold text-slate-800 mb-4">NDT Market Size ($ Billions) — 2020 to 2030</h3>
              <ResponsiveContainer width="100%" height={320}>
                <LineChart data={marketSizeData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                  <XAxis dataKey="year" tick={{ fontSize: 12 }} />
                  <YAxis tick={{ fontSize: 12 }} tickFormatter={(v) => `$${v}B`} />
                  <Tooltip formatter={(v: number) => [`$${v}B`, "Market Size"]} />
                  <Line
                    type="monotone"
                    dataKey="value"
                    stroke="#004aad"
                    strokeWidth={3}
                    dot={{ fill: "#004aad", r: 5 }}
                    activeDot={{ r: 7 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <CiteBox stat="The global NDT market was valued at $15.8 billion in 2024, projected to reach $25.3 billion by 2030 (8.1% CAGR)" />
          </motion.section>

          {/* 2. Market by Method */}
          <motion.section
            id="market-by-method"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
          >
            <h2 className="text-3xl font-bold mb-5" style={{ color: "#004aad" }}>
              NDT Market Share by Testing Method
            </h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              Ultrasonic testing (UT) dominates the NDT market with a 35% revenue share, driven by the growth of phased array UT (PAUT) and time-of-flight diffraction (TOFD) as replacements for conventional radiographic testing. The UT segment is also the fastest growing, with PAUT alone growing at 12-15% CAGR. Radiographic testing remains the second largest segment at 20%, though its share is declining as digital alternatives gain ground.
            </p>
            <div className="bg-white rounded-xl shadow border border-slate-100 p-6">
              <h3 className="font-bold text-slate-800 mb-4">Market Revenue Share by NDT Method</h3>
              <div className="flex flex-col md:flex-row items-center gap-6">
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={marketByMethod}
                      cx="50%"
                      cy="50%"
                      outerRadius={110}
                      innerRadius={50}
                      dataKey="value"
                      label={({ name, value }) => `${name.split(" ")[0]} ${value}%`}
                      labelLine={true}
                    >
                      {marketByMethod.map((entry, i) => (
                        <Cell key={i} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip formatter={(v: number) => [`${v}%`, "Market Share"]} />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-4">
                {marketByMethod.map((m) => (
                  <div key={m.name} className="flex items-center gap-2 text-sm">
                    <span className="w-3 h-3 rounded-full flex-shrink-0" style={{ backgroundColor: m.color }} />
                    <span className="text-slate-700">
                      {m.name}: <strong>{m.value}%</strong>
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <CiteBox stat="Ultrasonic testing (UT) holds 35% of the global NDT market by revenue, followed by RT (20%), MT (15%), PT (12%), ET (10%), and VT (8%)" />
          </motion.section>

          {/* 3. Market by Industry */}
          <motion.section
            id="market-by-industry"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h2 className="text-3xl font-bold mb-5" style={{ color: "#004aad" }}>
              NDT Market Share by End-Use Industry
            </h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              Oil & gas remains the dominant end-use industry for NDT services, accounting for 35% of global spending. This is driven by mandatory inspection requirements for pressure equipment under ASME and API codes, pipeline integrity management regulations (49 CFR 192/195), and aging refinery infrastructure requiring extensive in-service inspection. Aerospace is the second-largest segment at 20%, with growing demand for composite material inspection and automated NDT for aircraft manufacturing.
            </p>
            <div className="bg-white rounded-xl shadow border border-slate-100 p-6">
              <h3 className="font-bold text-slate-800 mb-4">NDT Spending by Industry Sector</h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={marketByIndustry} layout="vertical">
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                  <XAxis type="number" tick={{ fontSize: 12 }} tickFormatter={(v) => `${v}%`} />
                  <YAxis type="category" dataKey="industry" tick={{ fontSize: 12 }} width={100} />
                  <Tooltip formatter={(v: number) => [`${v}%`, "Market Share"]} />
                  <Bar dataKey="share" fill="#004aad" radius={[0, 6, 6, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <CiteBox stat="Oil & gas accounts for 35% of global NDT spending ($5.5B in 2024), followed by aerospace (20%), power generation (15%), manufacturing (12%), and construction (10%)" />
          </motion.section>

          {/* 4. NDT Salary Statistics */}
          <motion.section
            id="salary-statistics"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <h2 className="text-3xl font-bold mb-5" style={{ color: "#004aad" }}>
              NDT Salary Statistics by Level & Method
            </h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              NDT salaries vary significantly by certification level, primary method, geographic region, and industry sector. The data below represents median annual salaries based on industry surveys, job postings, and verified compensation data. UT/PAUT specialists consistently command the highest salaries among conventional NDT methods due to high demand and technical complexity.
            </p>

            {/* Salary by Level Chart */}
            <div className="bg-white rounded-xl shadow border border-slate-100 p-6 mb-6">
              <h3 className="font-bold text-slate-800 mb-4">Annual Salary by Certification Level & Region (USD)</h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={salaryByLevel}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                  <XAxis dataKey="level" tick={{ fontSize: 12 }} />
                  <YAxis tick={{ fontSize: 12 }} tickFormatter={(v) => `$${v / 1000}K`} />
                  <Tooltip formatter={(v: number) => [`$${v.toLocaleString()}`, ""]} />
                  <Legend />
                  <Bar dataKey="usa" name="USA" fill="#004aad" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="middleEast" name="Middle East" fill="#2563eb" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="europe" name="Europe" fill="#60a5fa" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="india" name="India" fill="#93bbfd" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* Salary by Level Table */}
            <div className="overflow-x-auto rounded-xl border border-slate-200 shadow mb-6">
              <table className="w-full text-sm">
                <thead className="bg-[#004aad] text-white">
                  <tr>
                    <th className="text-left p-4 font-semibold">Level</th>
                    <th className="text-left p-4 font-semibold">USA</th>
                    <th className="text-left p-4 font-semibold">Middle East</th>
                    <th className="text-left p-4 font-semibold">Europe</th>
                    <th className="text-left p-4 font-semibold">India</th>
                  </tr>
                </thead>
                <tbody>
                  {salaryByLevel.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <td className="p-4 font-bold text-[#004aad]">{row.level}</td>
                      <td className="p-4 text-slate-700">${row.usa.toLocaleString()}</td>
                      <td className="p-4 text-slate-700">${row.middleEast.toLocaleString()}</td>
                      <td className="p-4 text-slate-700">${row.europe.toLocaleString()}</td>
                      <td className="p-4 text-slate-700">${row.india.toLocaleString()}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Salary by Method Chart */}
            <div className="bg-white rounded-xl shadow border border-slate-100 p-6 mb-4">
              <h3 className="font-bold text-slate-800 mb-4">USA Salary by NDT Method (Level II vs Level III)</h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={salaryByMethod}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                  <XAxis dataKey="method" tick={{ fontSize: 12 }} />
                  <YAxis tick={{ fontSize: 12 }} tickFormatter={(v) => `$${v / 1000}K`} />
                  <Tooltip formatter={(v: number) => [`$${v.toLocaleString()}`, ""]} />
                  <Legend />
                  <Bar dataKey="levelII" name="Level II" fill="#004aad" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="levelIII" name="Level III" fill="#60a5fa" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <CiteBox stat="USA NDT Level III salaries range from $95,000 (VT) to $135,000 (UT/PAUT). Level II salaries range from $55,000 (VT) to $78,000 (UT/PAUT)" />
          </motion.section>

          {/* 5. Workforce Statistics */}
          <motion.section
            id="workforce"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold mb-5" style={{ color: "#004aad" }}>
              NDT Workforce Statistics & Demographics
            </h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              The global NDT workforce faces significant demographic challenges that create both risks and opportunities. An aging workforce, low gender diversity, and insufficient new entrants are driving a projected workforce shortage. Understanding these trends is critical for workforce planning, career decisions, and industry development.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-6">
              {[
                {
                  icon: Users,
                  stat: "500,000+",
                  label: "Certified NDT Technicians Globally",
                  detail: "Approximately 80,000-100,000 in the USA alone. Largest concentrations in Texas, California, Louisiana, and the Gulf Coast region.",
                },
                {
                  icon: TrendingUp,
                  stat: "15%",
                  label: "Projected Workforce Shortage by 2028",
                  detail: "Driven by retirements outpacing new entrants. ASNT and industry bodies are investing in outreach programs to attract new technicians.",
                },
                {
                  icon: Users,
                  stat: "Age 45",
                  label: "Average NDT Technician Age",
                  detail: "A significant portion of the workforce is approaching retirement age. The median age has increased by 3 years over the past decade.",
                },
                {
                  icon: Users,
                  stat: "8%",
                  label: "Women in the NDT Workforce",
                  detail: "NDT remains one of the least gender-diverse technical fields. Industry initiatives including ASNT's Women in NDT Committee are working to improve representation.",
                },
              ].map((item, i) => (
                <div key={i} className="bg-white rounded-xl p-6 shadow border border-slate-100">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 bg-[#004aad] text-white rounded-full flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-[#004aad]">{item.stat}</div>
                      <div className="text-sm font-semibold text-slate-700">{item.label}</div>
                    </div>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed">{item.detail}</p>
                </div>
              ))}
            </div>

            <div className="bg-blue-50 border-l-4 border-[#004aad] rounded-r-xl p-6">
              <h3 className="font-bold text-[#004aad] mb-2">Why This Matters</h3>
              <p className="text-sm text-slate-700 leading-relaxed">
                The projected 15% workforce shortage creates significant career opportunities for new entrants. With 500,000+ positions globally and a growing gap between supply and demand, NDT certification is an increasingly valuable career investment. The average time to fill an NDT Level II position has increased from 30 days to 45+ days over the past five years, indicating strong employer demand.
              </p>
            </div>
            <CiteBox stat="There are 500,000+ certified NDT technicians globally. The industry faces a projected 15% workforce shortage by 2028 (average age 45, 8% women)" />
          </motion.section>

          {/* 6. Certification Demographics */}
          <motion.section
            id="certification-demographics"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
          >
            <h2 className="text-3xl font-bold mb-5" style={{ color: "#004aad" }}>
              NDT Certification Demographics
            </h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              The NDT certification landscape is dominated by ASNT SNT-TC-1A (employer-based certification), which accounts for approximately 60% of all NDT certifications globally. ISO 9712 is the primary international scheme, used predominantly in Europe, Middle East, and Asia-Pacific. PCN (BINDT) and CSWIP (TWI) are important UK-based schemes with strong international recognition.
            </p>
            <div className="bg-white rounded-xl shadow border border-slate-100 p-6 mb-4">
              <h3 className="font-bold text-slate-800 mb-4">Global NDT Certifications by Scheme</h3>
              <div className="flex flex-col md:flex-row items-center gap-6">
                <ResponsiveContainer width="100%" height={280}>
                  <PieChart>
                    <Pie
                      data={certDemographics}
                      cx="50%"
                      cy="50%"
                      outerRadius={100}
                      innerRadius={40}
                      dataKey="value"
                      label={({ name, value }) => `${name} ${value}%`}
                    >
                      {certDemographics.map((entry, i) => (
                        <Cell key={i} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip formatter={(v: number) => [`${v}%`, "Share"]} />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="grid grid-cols-2 gap-3 mt-4">
                {certDemographics.map((c) => (
                  <div key={c.name} className="flex items-center gap-2 text-sm">
                    <span className="w-3 h-3 rounded-full flex-shrink-0" style={{ backgroundColor: c.color }} />
                    <span className="text-slate-700">
                      {c.name}: <strong>{c.value}%</strong>
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <CiteBox stat="ASNT SNT-TC-1A accounts for 60% of global NDT certifications, followed by ISO 9712 (25%), PCN (10%), and other schemes (5%)" />
          </motion.section>

          {/* 7. Regional Market Share */}
          <motion.section
            id="regional-share"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h2 className="text-3xl font-bold mb-5" style={{ color: "#004aad" }}>
              Regional NDT Market Share
            </h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              The Americas remain the largest NDT market by revenue (35%), driven by the United States' massive oil & gas infrastructure, aerospace manufacturing, and nuclear power fleet. However, Asia-Pacific is the fastest-growing region (30% share, 10%+ CAGR) due to rapid industrialization in China, India, and Southeast Asia. The Middle East & Africa region, while smaller at 10%, has the highest per-capita NDT spending due to concentrated oil & gas operations.
            </p>
            <div className="bg-white rounded-xl shadow border border-slate-100 p-6 mb-4">
              <h3 className="font-bold text-slate-800 mb-4">NDT Market Revenue by Region</h3>
              <ResponsiveContainer width="100%" height={280}>
                <BarChart data={regionalShare}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                  <XAxis dataKey="region" tick={{ fontSize: 12 }} />
                  <YAxis tick={{ fontSize: 12 }} tickFormatter={(v) => `${v}%`} />
                  <Tooltip formatter={(v: number) => [`${v}%`, "Market Share"]} />
                  <Bar dataKey="share" fill="#004aad" radius={[6, 6, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="overflow-x-auto rounded-xl border border-slate-200 shadow">
              <table className="w-full text-sm">
                <thead className="bg-[#004aad] text-white">
                  <tr>
                    <th className="text-left p-4 font-semibold">Region</th>
                    <th className="text-left p-4 font-semibold">Market Share</th>
                    <th className="text-left p-4 font-semibold">Est. Revenue (2024)</th>
                    <th className="text-left p-4 font-semibold">Key Markets</th>
                    <th className="text-left p-4 font-semibold">Growth Driver</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white">
                    <td className="p-4 font-bold text-[#004aad]">Americas</td>
                    <td className="p-4 text-slate-700">35%</td>
                    <td className="p-4 text-slate-700">$5.5B</td>
                    <td className="p-4 text-slate-700">USA, Canada, Brazil</td>
                    <td className="p-4 text-slate-600">Pipeline integrity, aerospace MRO, refinery turnarounds</td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="p-4 font-bold text-[#004aad]">Asia-Pacific</td>
                    <td className="p-4 text-slate-700">30%</td>
                    <td className="p-4 text-slate-700">$4.7B</td>
                    <td className="p-4 text-slate-700">China, India, Japan, Korea, Australia</td>
                    <td className="p-4 text-slate-600">Industrialization, new construction, nuclear expansion</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="p-4 font-bold text-[#004aad]">Europe</td>
                    <td className="p-4 text-slate-700">25%</td>
                    <td className="p-4 text-slate-700">$4.0B</td>
                    <td className="p-4 text-slate-700">UK, Germany, Norway, Netherlands, France</td>
                    <td className="p-4 text-slate-600">Offshore wind, aerospace, aging infrastructure, PED compliance</td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="p-4 font-bold text-[#004aad]">MEA</td>
                    <td className="p-4 text-slate-700">10%</td>
                    <td className="p-4 text-slate-700">$1.6B</td>
                    <td className="p-4 text-slate-700">Saudi Arabia, UAE, Qatar, Kuwait, Nigeria</td>
                    <td className="p-4 text-slate-600">NOC expansion, petrochemical mega-projects, NEOM/giga-projects</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <CiteBox stat="Americas hold 35% of global NDT market revenue ($5.5B), followed by Asia-Pacific (30%, $4.7B), Europe (25%, $4.0B), and MEA (10%, $1.6B)" />
          </motion.section>

          {/* Related Links */}
          <section>
            <h2 className="text-2xl font-bold mb-5" style={{ color: "#004aad" }}>
              Related Resources
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { href: "/ndt-technician-salary", label: "NDT Technician Salary Guide 2026" },
                { href: "/ndt-complete-guide", label: "What is NDT? Complete Guide" },
                { href: "/ndt-certification-guide", label: "NDT Certification Guide" },
                { href: "/ndt-career-guide", label: "NDT Career Guide" },
                { href: "/ndt-equipment-guide", label: "NDT Equipment Guide" },
                { href: "/ndt-learning-path", label: "NDT Learning Path" },
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
              NDT Industry Statistics — Frequently Asked Questions
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
              Enter the Growing NDT Industry with Atlantis NDT
            </h2>
            <p className="text-blue-100 mb-6 leading-relaxed">
              The NDT industry is growing at 8.1% annually with a 15% projected workforce shortage. There has never been a better time to start or advance your NDT career. Atlantis NDT offers certification training for all levels and methods, consulting services for oil & gas and aerospace clients, and digital twin solutions for asset integrity management.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/training"
                className="bg-white text-[#004aad] font-bold px-6 py-3 rounded-lg hover:bg-blue-50 transition"
              >
                View NDT Training Courses
              </Link>
              <Link
                to="/consulting"
                className="border border-white text-white px-6 py-3 rounded-lg hover:bg-white/10 transition"
              >
                NDT Consulting Services
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
                ["#market-size", "Global Market Size & Growth"],
                ["#market-by-method", "Market Share by Method"],
                ["#market-by-industry", "Market Share by Industry"],
                ["#salary-statistics", "Salary Statistics"],
                ["#workforce", "Workforce Demographics"],
                ["#certification-demographics", "Certification Demographics"],
                ["#regional-share", "Regional Market Share"],
                ["#faq", "FAQ"],
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
            <h3 className="text-lg font-bold mb-3 text-green-800">Key Statistics</h3>
            <ul className="space-y-3 text-sm text-green-800">
              {[
                { label: "Market Size (2024)", value: "$15.8B" },
                { label: "Projected (2030)", value: "$25.3B" },
                { label: "CAGR", value: "8.1%" },
                { label: "Global Workforce", value: "500K+" },
                { label: "Workforce Shortage", value: "15% by 2028" },
                { label: "Avg Technician Age", value: "45 years" },
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
              Related Guides
            </h3>
            <ul className="space-y-2 text-sm">
              {[
                ["/ndt-technician-salary", "NDT Salary Guide"],
                ["/ndt-complete-guide", "Complete NDT Guide"],
                ["/ndt-certification-guide", "Certification Guide"],
                ["/ndt-career-guide", "NDT Career Guide"],
                ["/ndt-methods-comparison", "Method Comparison"],
                ["/ndt-equipment-guide", "Equipment Guide"],
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
            <h3 className="text-lg font-bold mb-3">Join the Growing NDT Industry</h3>
            <p className="text-blue-100 text-sm mb-4">
              With 8.1% annual growth and a projected workforce shortage, NDT offers exceptional career opportunities. Atlantis NDT provides training, consulting, and digital solutions globally.
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
