import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import ContactDetails from "@/components/ContactDetails";
import { Link } from "react-router-dom";
import {
  CheckCircle,
  ChevronDown,
  ChevronUp,
  TrendingUp,
  DollarSign,
  Award,
  Briefcase,
  GraduationCap,
  ArrowRight,
  MapPin,
} from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const faqs = [
  {
    q: "What is the average NDT technician salary in the USA?",
    a: "The median NDT technician salary in the USA for a Level II technician across all methods is approximately $62,000–$75,000 per year based on 2025–2026 industry data. However, this average masks significant variation by method, industry, and location. A Level II MT/PT technician may earn $50,000–$65,000/year in manufacturing, while a Level II PAUT technician in offshore oil & gas in Houston can earn $95,000–$130,000/year (including offshore premiums). The Bureau of Labor Statistics category 'Quality Control Inspectors' (which includes NDT) reported a median wage of approximately $44,000/year, but this understates specialist NDT roles significantly — particularly advanced method technicians in oil & gas and aerospace. The $55,000–$95,000 range is a realistic median for career NDT technicians with 3–10 years of experience.",
  },
  {
    q: "What is the highest-paying NDT method?",
    a: "Automated Ultrasonic Testing (AUT) and corrosion mapping are consistently the highest-paying NDT specialisations, with experienced AUT Level II operators earning $85,000–$115,000/year in the USA and $90,000–$130,000 in offshore roles. Phased Array UT (PAUT) and TOFD are the next highest-paying methods — PAUT Level II technicians with offshore experience commonly earn $80,000–$110,000/year. The premium for advanced UT methods (PAUT, TOFD, AUT) over conventional MT/PT is approximately 40–80%. Radiographic Testing (RT) commands a moderate premium over MT/PT ($65,000–$85,000 Level II USA average) due to radiation safety responsibilities and licensing requirements. The lowest-earning conventional NDT methods are MT and PT, which serve as entry points into the field.",
  },
  {
    q: "How much does a PAUT technician earn?",
    a: "Phased Array UT (PAUT) technicians are among the most sought-after and highest-paid NDT specialists. A PAUT Level II technician in the USA typically earns $80,000–$110,000/year in onshore oil & gas, construction, and power generation roles. In offshore oil & gas (Gulf of Mexico, North Sea) the same technician earns $100,000–$140,000/year including offshore premiums and rotation allowances. In the Middle East (UAE, Saudi Arabia, Qatar), PAUT Level II roles typically pay $50,000–$80,000/year USD-equivalent, with lower costs of living and often tax-free earnings. PAUT technicians who also hold TOFD qualification, API certifications (API 570/510), and Level III status in UT or PAUT can command $120,000–$160,000/year in senior roles or consulting positions.",
  },
  {
    q: "What is an NDT Level III salary?",
    a: "NDT Level III salary in the USA ranges from $80,000 to $130,000 per year for staff Level III positions, with senior Level III consultants and NDT managers earning $130,000–$180,000+ per year. The exact salary depends heavily on method scope (Level III in one method vs multi-method), industry (nuclear and aerospace pay highest), and role (employed vs consulting). ASNT Level III certification in UT, RT, MT, and PT combined with API inspector qualifications (API 510, 570, 653) is a premium combination. Level III consultants who work independently or through consulting firms in oil & gas refinery turnarounds and pipeline construction projects can earn $150–$250/hour (equivalent to $200,000–$400,000/year annualised at full utilisation). In the Middle East and offshore sectors, Level III NDT managers typically earn $80,000–$120,000/year USD-equivalent.",
  },
  {
    q: "How much do NDT technicians earn in Dubai / UAE?",
    a: "NDT technicians in Dubai and the UAE earn salaries that are competitive on a purchasing-power basis, with the significant advantage that UAE personal income is tax-free. A Level II NDT technician in Dubai typically earns AED 8,000–15,000 per month (approximately $27,000–$49,000/year USD) depending on method and experience. Senior Level II technicians with PAUT/TOFD qualifications earn AED 15,000–22,000/month ($49,000–$72,000/year). Level III NDT engineers and consultants earn AED 25,000–45,000/month ($82,000–$148,000/year). Most packages include accommodation allowance, annual flights, and medical insurance — effectively increasing total compensation by 20–30% above base salary. With no income tax, the purchasing power of UAE NDT salaries is generally comparable to USA salaries that are 20–30% higher nominally.",
  },
  {
    q: "How can I increase my NDT salary?",
    a: "The most effective ways to increase your NDT salary are: (1) Add advanced method qualifications — PAUT and TOFD certification typically adds 40–70% premium over MT/PT baseline. (2) Pursue API certifications (API 510, 570, 653) — these qualify you for Authorized Inspector roles or make you valuable in oil & gas refinery and tank inspection, where salaries are 20–40% higher. (3) Achieve Level III status — the salary jump from Level II to Level III is typically 30–60%. (4) Move to higher-paying industries — offshore oil & gas typically pays 20–40% premium over onshore; nuclear pays premium for qualified personnel. (5) Geographic mobility — willingness to work offshore (Gulf of Mexico, North Sea) or in Middle East on rotational assignments significantly increases earning potential. (6) Add AUT/corrosion mapping skills — automated scanning specialists are in highest demand. (7) Consider independent consulting once you have Level III with significant industry experience.",
  },
  {
    q: "What is the NDT job outlook for 2026?",
    a: "The NDT job outlook for 2026 is strong, driven by several macro trends. Infrastructure investment: aging infrastructure in North America, Europe, and the Middle East requires ongoing inspection of bridges, pipelines, refineries, and power plants. Energy transition: hydrogen infrastructure, wind turbine inspection, and LNG facility expansion are creating new NDT demand. Digital NDT: phased array, automated UT, and AI-assisted interpretation are increasing productivity requirements — technicians who master digital NDT tools are in higher demand. Workforce demographics: a significant portion of senior NDT Level II and III professionals are approaching retirement, creating a skills gap at the experienced technician level. The ASNT 2025 Salary Survey showed average salary increases of 4–7% year-over-year for NDT technicians, outpacing general inflation. NDT technicians with advanced method qualifications (PAUT, AUT) and multi-method capability (MT+PT+UT, or RT+PAUT) consistently report strong demand and rapid career advancement.",
  },
  {
    q: "Is NDT a good career in 2026?",
    a: "Yes — NDT remains an excellent career choice in 2026 for several reasons. Salary: experienced NDT technicians with advanced methods earn $65,000–$120,000+ per year in the USA, well above the national median wage. Job security: NDT is non-discretionary in regulated industries (oil & gas, aerospace, nuclear, power generation) — inspection cannot be eliminated during downturns the way some construction or manufacturing jobs can. Global portability: ISO 9712 and ASNT certifications are recognised globally, making NDT a career that can be practiced in the USA, Middle East, Australia, UK, and Southeast Asia. Variety: NDT offers diverse work environments, industries, and technical challenges — rarely repetitive. Career path: a clear progression from Level I to Level II to Level III to NDE Manager or consultant provides long-term career development. The main challenge is the certification investment required (training costs, experience hours) at entry, but the return on that investment is strong within 3–5 years of starting.",
  },
];

const salaryByLevel = [
  {
    level: "NDT Level I",
    role: "Entry-Level Technician",
    usa: "$40,000–$55,000",
    uae: "$25,000–$40,000",
    india: "₹3–5 lakh",
    uk: "£28,000–£38,000",
  },
  {
    level: "NDT Level II",
    role: "Senior Technician",
    usa: "$55,000–$80,000",
    uae: "$40,000–$65,000",
    india: "₹5–9 lakh",
    uk: "£38,000–£52,000",
  },
  {
    level: "NDT Level III",
    role: "Expert / Manager",
    usa: "$80,000–$130,000",
    uae: "$65,000–$100,000",
    india: "₹10–18 lakh",
    uk: "£55,000–£80,000",
  },
];

const salaryByMethod = [
  { method: "MT / PT (Magnetic Particle / Penetrant)", avg: "$50,000–$65,000", premium: "Baseline" },
  { method: "Visual Testing (VT / CWI)", avg: "$52,000–$70,000", premium: "+5–10%" },
  { method: "Radiographic Testing (RT)", avg: "$65,000–$85,000", premium: "+20–30%" },
  { method: "Ultrasonic Testing (UT)", avg: "$60,000–$80,000", premium: "+15–25%" },
  { method: "Phased Array UT (PAUT)", avg: "$80,000–$110,000", premium: "+40–70%" },
  { method: "TOFD Testing", avg: "$75,000–$100,000", premium: "+35–55%" },
  { method: "AUT / Corrosion Mapping", avg: "$85,000–$115,000", premium: "+50–80%" },
  { method: "Guided Wave Testing (GWT)", avg: "$70,000–$95,000", premium: "+30–50%" },
];

const locationSalaries = [
  { city: "Houston, TX (USA)", level2: "$65,000–$90,000", notes: "Oil & gas hub, offshore access. Highest NDT density in the world." },
  { city: "Dubai / Abu Dhabi (UAE)", level2: "$45,000–$72,000 tax-free", notes: "ADNOC/Aramco contractors. Tax-free with accommodation allowance." },
  { city: "Calgary, Canada", level2: "CAD $70,000–$95,000", notes: "Oil sands, pipeline inspection. Cold-weather premium. CGSB certification preferred." },
  { city: "Singapore", level2: "$50,000–$75,000 SGD", notes: "Marine, shipbuilding, and petrochemical hub for Southeast Asia." },
  { city: "Aberdeen, UK (Offshore)", level2: "£50,000–£75,000", notes: "North Sea offshore. Day rates for contract PAUT/RT: £350–£600/day." },
  { city: "Perth, Australia", level2: "AUD $90,000–$130,000", notes: "Mining and LNG. High cost of living but strong NDT demand." },
  { city: "Mumbai / Hyderabad, India", level2: "₹6–12 lakh/year", notes: "Growing market; international experience commands premium." },
  { city: "Saudi Arabia (Jubail/Dammam)", level2: "$35,000–$55,000 tax-free", notes: "ARAMCO contractors, Saudi Vision 2030 projects." },
];

const careerPath = [
  {
    stage: "NDT Level I",
    years: "0–2 years",
    icon: GraduationCap,
    salary: "$40K–$55K (USA)",
    description: "Entry into the field. Works under Level II/III supervision. Follows written procedures, records data, marks indications. Minimum 40–80 hours training per method per SNT-TC-1A.",
  },
  {
    stage: "NDT Level II",
    years: "2–5 years",
    icon: Briefcase,
    salary: "$55K–$80K (USA)",
    description: "Sets up equipment, calibrates, performs examination, interprets and evaluates results, writes reports. Can supervise Level I. Typically 160–240 hours training and 800–1,200 hours field experience per method.",
  },
  {
    stage: "Level III + Specialist Methods",
    years: "5–12 years",
    icon: Award,
    salary: "$80K–$130K (USA)",
    description: "Develops procedures, establishes and approves techniques, interprets codes and standards, approves NDT instructions. ASNT ACCP exam or employer-based Level III per SNT-TC-1A. Add PAUT, AUT, API certifications for maximum market value.",
  },
  {
    stage: "NDE Manager / Senior Consultant",
    years: "10+ years",
    icon: TrendingUp,
    salary: "$120K–$180K+ (USA)",
    description: "Manages entire NDT department or consulting practice. Provides expert witness testimony, RBI input, fitness-for-service consulting. Independent contractors can earn $150–$300/hour in refinery turnaround work.",
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

export default function NDTTechnicianSalary() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "headline": "NDT Technician Salary Guide 2026: By Method, Level & Location",
        "description": "Comprehensive NDT technician salary guide for 2026. Salary ranges by ASNT certification level, NDT method, and location (USA, UAE, UK, India, Canada). How to increase your NDT earnings.",
        "author": { "@type": "Organization", "name": "Atlantis NDT", "url": "https://atlantisndt.com" },
        "publisher": {
          "@type": "Organization",
          "name": "Atlantis NDT",
          "logo": { "@type": "ImageObject", "url": "https://atlantisndt.com/favicon-96x96.jpg" },
        },
        "datePublished": "2026-02-25",
        "dateModified": "2026-02-25",
        "mainEntityOfPage": { "@type": "WebPage", "@id": "https://atlantisndt.com/ndt-technician-salary" },
        "keywords": "NDT technician salary, NDT salary 2026, PAUT technician salary, NDT Level II salary, NDT Level III salary, NDT salary USA, NDT salary Dubai, NDT engineer salary, ASNT certification salary, phased array technician salary",
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
        title="NDT Technician Salary 2026 — Country & Method Breakdown"
        description="NDT technician salary 2026 — pay by country, method, certification level, offshore vs onshore. Live BLS + Indeed data. Find the highest-paying region."
        keywords="NDT technician salary, NDT salary 2026, PAUT technician salary, NDT Level II salary, NDT Level III salary, NDT salary USA, NDT salary Dubai, NDT engineer salary, ASNT certification salary, phased array technician salary, NDT salary guide, how much do NDT technicians make, NDT Level III salary, RT technician salary, UT technician salary, NDT career salary"
        structuredData={structuredData}
        canonical="https://atlantisndt.com/ndt-technician-salary"
      />
      <Breadcrumbs />

      {/* Hero */}
      <section className="bg-[#004aad] text-white py-16">
        <div className="container mx-auto max-w-6xl px-6">
          <div className="max-w-3xl">
            <p className="text-blue-200 text-sm font-medium mb-3 uppercase tracking-wider">
              NDT Career Guide · Updated February 2026
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mb-5 leading-tight">
              NDT Technician Salary Guide 2026: By Method, Level & Location
            </h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              NDT technicians earn $28–$85/hour depending on method, level, location, and industry. Median annual salary: $55,000–$95,000 in the USA. PAUT and AUT specialists command the highest premiums. Here is the complete picture.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/asnt-certification"
                className="bg-white text-[#004aad] font-semibold px-6 py-3 rounded-lg hover:bg-blue-50 transition"
              >
                ASNT Certification Info
              </Link>
              <Link
                to="/training"
                className="border border-white text-white font-semibold px-6 py-3 rounded-lg hover:bg-white/10 transition"
              >
                NDT Training Courses
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
              { label: "USA Median (Level II)", value: "$55K–$95K" },
              { label: "Hourly Range (USA)", value: "$28–$85/hr" },
              { label: "Top Method (PAUT/AUT)", value: "40–80% Premium" },
              { label: "Level III Premium vs II", value: "+30–60%" },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-2xl font-bold text-[#004aad]">{s.value}</div>
                <div className="text-sm text-slate-500 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Nav */}
      <div className="bg-white border-b border-slate-200 sticky top-0 z-10 shadow-sm">
        <div className="container mx-auto max-w-6xl px-6 overflow-x-auto">
          <nav className="flex gap-6 text-sm font-medium text-slate-600 py-3 whitespace-nowrap">
            {["By Level", "By Method", "By Location", "Industries", "Career Path", "How to Increase Salary", "FAQ"].map(
              (s) => (
                <a
                  key={s}
                  href={`#${s.toLowerCase().replace(/ /g, "-")}`}
                  className="hover:text-[#004aad] transition py-1"
                >
                  {s}
                </a>
              )
            )}
          </nav>
        </div>
      </div>

      <div className="container mx-auto max-w-6xl px-6 py-12 grid md:grid-cols-3 gap-12">
        <article className="md:col-span-2 space-y-14">

          {/* Overview */}
          <motion.section
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-5" style={{ color: "#004aad" }}>
              NDT Technician Salary Overview 2026
            </h2>
            <p className="text-lg text-slate-700 leading-relaxed mb-5">
              Non-destructive testing (NDT) is one of the few skilled technical trades that offers strong salary growth, global mobility, and long-term career security in a regulated, safety-critical industry. NDT salaries vary significantly based on four key variables: <strong>method</strong> (with PAUT/AUT commanding a 40–80% premium over MT/PT baseline), <strong>certification level</strong> (Level III earns 30–60% more than Level II), <strong>industry</strong> (offshore oil & gas pays highest; manufacturing pays lowest), and <strong>location</strong> (Houston, offshore installations, and certain Middle East roles pay the highest absolute salaries).
            </p>
            <p className="text-lg text-slate-700 leading-relaxed mb-5">
              The salary figures in this guide are based on industry surveys, job posting analysis, ASNT salary data, and Atlantis NDT's direct experience placing and training NDT professionals globally. All USD figures are approximate annual base salary unless otherwise noted; total compensation including overtime, offshore premiums, rotation allowances, and benefits can be 20–50% higher than base salary in many roles.
            </p>
            <div className="bg-blue-50 border-l-4 border-[#004aad] rounded-r-xl p-6">
              <h3 className="font-bold text-[#004aad] mb-3">Key Salary Facts for 2026</h3>
              <ul className="space-y-2 text-slate-700">
                {[
                  "NDT Level II technicians are the most in-demand category — 70% of all NDT job postings seek Level II",
                  "PAUT and AUT technicians consistently command the highest rates across all markets and industries",
                  "Offshore and hazardous duty assignments add 20–40% premium over equivalent onshore roles",
                  "Multi-method technicians (e.g., UT + RT + PAUT) command higher rates than single-method specialists",
                  "UAE and Middle East tax-free salaries are purchasing-power equivalent to 20–30% higher US salaries",
                  "NDT Level III shortage is acute — fewer than 15% of NDT professionals hold Level III certification",
                ].map((item, i) => (
                  <li key={i} className="flex gap-2">
                    <DollarSign className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.section>

          {/* Salary by Level */}
          <motion.section
            id="by-level"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h2 className="text-3xl font-bold mb-5" style={{ color: "#004aad" }}>
              NDT Salary by ASNT Certification Level
            </h2>
            <p className="text-slate-700 leading-relaxed mb-5">
              ASNT certification level is the primary salary driver within the NDT field. Each level comes with specific responsibilities, required training hours, and field experience — and corresponding salary expectations. These figures reflect 2026 market conditions for all-method generalist NDT technicians.
            </p>
            <div className="overflow-x-auto rounded-xl border border-slate-200 shadow">
              <table className="w-full text-sm">
                <thead className="bg-[#004aad] text-white">
                  <tr>
                    <th className="text-left p-4 font-semibold">Level</th>
                    <th className="text-left p-4 font-semibold">Role</th>
                    <th className="text-left p-4 font-semibold">USA ($/year)</th>
                    <th className="text-left p-4 font-semibold">UAE (USD/year)</th>
                    <th className="text-left p-4 font-semibold">India (INR/year)</th>
                    <th className="text-left p-4 font-semibold">UK (£/year)</th>
                  </tr>
                </thead>
                <tbody>
                  {salaryByLevel.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <td className="p-4 font-bold text-[#004aad]">{row.level}</td>
                      <td className="p-4 text-slate-600">{row.role}</td>
                      <td className="p-4 font-semibold text-slate-800">{row.usa}</td>
                      <td className="p-4 text-slate-700">{row.uae}</td>
                      <td className="p-4 text-slate-700">{row.india}</td>
                      <td className="p-4 text-slate-700">{row.uk}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-slate-500 text-xs mt-2">
              All figures are approximate annual base salary (2026 data). UAE figures are tax-free. Offshore premiums, bonuses, and allowances not included.
            </p>
          </motion.section>

          {/* Salary by Method */}
          <motion.section
            id="by-method"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <h2 className="text-3xl font-bold mb-5" style={{ color: "#004aad" }}>
              NDT Salary by Method — Level II USA Average
            </h2>
            <p className="text-slate-700 leading-relaxed mb-5">
              NDT method is the second most important salary variable after level. Advanced inspection methods — particularly PAUT, AUT, TOFD, and guided wave — command significant premiums because they require additional dedicated training, hands-on qualification, and produce more defensible, quantitative inspection data than conventional methods.
            </p>
            <div className="overflow-x-auto rounded-xl border border-slate-200 shadow">
              <table className="w-full text-sm">
                <thead className="bg-[#004aad] text-white">
                  <tr>
                    <th className="text-left p-4 font-semibold">NDT Method</th>
                    <th className="text-left p-4 font-semibold">Avg USA Level II ($/year)</th>
                    <th className="text-left p-4 font-semibold">Premium vs MT/PT</th>
                  </tr>
                </thead>
                <tbody>
                  {salaryByMethod.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <td className="p-4 font-semibold text-slate-800">{row.method}</td>
                      <td className="p-4 text-slate-700">{row.avg}</td>
                      <td className={`p-4 font-semibold ${row.premium === "Baseline" ? "text-slate-500" : "text-green-700"}`}>
                        {row.premium}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-5 bg-green-50 border border-green-200 rounded-xl p-5">
              <div className="flex items-start gap-3">
                <TrendingUp className="w-5 h-5 text-green-700 flex-shrink-0 mt-0.5" />
                <p className="text-green-800 text-sm">
                  <strong>Career tip:</strong> The highest salary acceleration comes from adding PAUT to an existing UT Level II qualification. PAUT training (80–120 hours) can increase earning potential by $20,000–$40,000/year for the same number of working hours. TOFD + PAUT combination is the most valued advanced UT package in the oil & gas market.
                </p>
              </div>
            </div>
          </motion.section>

          {/* Salary by Location */}
          <motion.section
            id="by-location"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold mb-5" style={{ color: "#004aad" }}>
              NDT Salary by Location — Key Global Markets
            </h2>
            <p className="text-slate-700 leading-relaxed mb-5">
              Location significantly affects NDT salaries — both the absolute figure and the purchasing power. The figures below represent Level II technicians with 3–7 years of experience in mainstream methods (UT, RT, PAUT). Advanced method specialists earn proportionally more in each market.
            </p>
            <div className="grid md:grid-cols-2 gap-5">
              {locationSalaries.map((loc, i) => (
                <div key={i} className="bg-white rounded-xl p-5 shadow border border-slate-100">
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin className="w-4 h-4 text-[#004aad]" />
                    <h3 className="font-bold text-[#004aad]">{loc.city}</h3>
                  </div>
                  <p className="text-xl font-bold text-slate-800 mb-2">{loc.level2}</p>
                  <p className="text-slate-500 text-xs leading-relaxed">{loc.notes}</p>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Industries */}
          <motion.section
            id="industries"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
          >
            <h2 className="text-3xl font-bold mb-5" style={{ color: "#004aad" }}>
              Top-Paying Industries for NDT Technicians
            </h2>
            <p className="text-slate-700 leading-relaxed mb-5">
              Industry sector is the third key salary variable. High-consequence, regulated industries with limited inspection windows (offshore, nuclear) pay the highest premiums. General manufacturing is the lowest-paying sector for NDT.
            </p>
            <div className="space-y-3">
              {[
                {
                  rank: 1,
                  industry: "Offshore Oil & Gas",
                  premium: "Highest — 30–50% above onshore equivalent",
                  detail: "Rotation allowances, offshore premiums, risk pay. PAUT/AUT technicians in GoM and North Sea earn $100,000–$160,000+ on day rates.",
                },
                {
                  rank: 2,
                  industry: "Oil & Gas Refinery / Petrochemical (Onshore)",
                  premium: "+20–35% vs manufacturing",
                  detail: "Turnaround inspection is the most intensive (and highest-paid) work. API certification holders earn premium rates during planned shutdowns.",
                },
                {
                  rank: 3,
                  industry: "Nuclear Power",
                  premium: "+20–30% vs conventional power",
                  detail: "Rigorous qualification requirements (10CFR50 Appendix B, ASME Section XI) create a shortage of qualified personnel, driving premium rates.",
                },
                {
                  rank: 4,
                  industry: "Aerospace / Defence",
                  premium: "+15–25% vs industrial",
                  detail: "NAS-410 / nadcap qualified technicians with aerospace experience are in demand. Strong benefits packages typical.",
                },
                {
                  rank: 5,
                  industry: "Power Generation (Conventional)",
                  premium: "+10–15% vs manufacturing",
                  detail: "Outage inspection work provides overtime opportunities. ASME V and ASME Section I experience valued.",
                },
                {
                  rank: 6,
                  industry: "Manufacturing / Construction",
                  premium: "Baseline",
                  detail: "Entry point for many Level I and Level II technicians. Good for building experience, lower earning potential than regulated industries.",
                },
              ].map((item) => (
                <div key={item.rank} className="flex gap-4 bg-white rounded-xl p-5 shadow border border-slate-100">
                  <div className="w-8 h-8 bg-[#004aad] text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                    {item.rank}
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <p className="font-semibold text-slate-800">{item.industry}</p>
                      <span className="text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded-full font-medium">{item.premium}</span>
                    </div>
                    <p className="text-slate-600 text-sm leading-relaxed">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Career Path */}
          <motion.section
            id="career-path"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h2 className="text-3xl font-bold mb-6" style={{ color: "#004aad" }}>
              NDT Career Path & Salary Progression
            </h2>
            <div className="grid md:grid-cols-2 gap-5">
              {careerPath.map((stage, i) => (
                <Card key={i} className="shadow border-slate-100">
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-3">
                      <stage.icon className="w-6 h-6 text-[#004aad]" />
                      <CardTitle className="text-lg text-[#004aad]">{stage.stage}</CardTitle>
                    </div>
                    <div className="flex gap-3 mt-1">
                      <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">{stage.years}</span>
                      <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full font-semibold">{stage.salary}</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 text-sm leading-relaxed">{stage.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.section>

          {/* How to Increase Salary */}
          <motion.section
            id="how-to-increase-salary"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="bg-slate-100 rounded-2xl p-8 border border-slate-200"
          >
            <h2 className="text-2xl font-bold mb-5" style={{ color: "#004aad" }}>
              How to Increase Your NDT Salary
            </h2>
            <p className="text-slate-700 leading-relaxed mb-5">
              NDT salary growth is directly correlated with skill development and certification. The following actions have the highest return on investment for increasing your NDT earning potential:
            </p>
            <div className="space-y-4">
              {[
                {
                  action: "Get PAUT / TOFD Certification",
                  impact: "+$15,000–$40,000/year typical",
                  detail: "This is the highest-ROI investment for an existing UT Level II technician. PAUT training (80–120 hours) plus field experience qualifies you for the most in-demand inspection roles. Combined PAUT + TOFD is the gold standard package for oil & gas weld inspection.",
                },
                {
                  action: "Add API Certifications (API 510, 570, 653)",
                  impact: "+$8,000–$20,000/year typical",
                  detail: "API inspector certifications qualify you for pressure vessel, piping, and tank inspection roles in oil & gas — the highest-paying industry sector. API certification holders are often required on refinery turnarounds and can command day rates rather than salaries.",
                },
                {
                  action: "Pursue Level III Certification",
                  impact: "+$20,000–$50,000/year typical",
                  detail: "The jump from Level II to Level III is the largest single salary step in the NDT career path. ASNT ACCP Level III exam preparation requires significant study investment but opens consulting, management, and expert witness roles.",
                },
                {
                  action: "Move to Offshore / Hazardous Duty",
                  impact: "+20–40% premium over onshore equivalent",
                  detail: "Offshore rotation work (28/28, 28/21 schedules) in Gulf of Mexico or North Sea pays significantly more than onshore roles with comparable skill requirements. The lifestyle trade-off is significant, but the financial upside for 2–5 year stints is substantial.",
                },
                {
                  action: "Add AUT / Corrosion Mapping Skills",
                  impact: "Access to $85K–$115K range",
                  detail: "Automated UT scanner operation (automated corrosion mapping, zonal pulse-echo, PAUT C-scan on pipelines) is the highest-paying NDT specialty. AUT operators who understand data analysis and can prepare fitness-for-service inputs are in critically short supply.",
                },
                {
                  action: "Geographic Mobility (Middle East / Australia)",
                  impact: "Tax-free or high-wage markets",
                  detail: "UAE and Qatar offer tax-free salaries with accommodation allowances — effectively increasing net income by 25–35% vs an equivalent US salary. Australia (Perth, LNG sector) offers high AUD salaries with standard of living comparable to major US cities.",
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 bg-white rounded-xl p-5 border border-slate-200">
                  <ArrowRight className="w-5 h-5 text-[#004aad] flex-shrink-0 mt-1" />
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <p className="font-semibold text-slate-800">{item.action}</p>
                      <span className="text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded-full font-medium">{item.impact}</span>
                    </div>
                    <p className="text-slate-600 text-sm leading-relaxed">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Related Links */}
          <section>
            <h2 className="text-2xl font-bold mb-5" style={{ color: "#004aad" }}>
              Related Resources
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { href: "/asnt-certification", label: "ASNT Certification — Level I, II, III" },
                { href: "/training", label: "NDT Training Courses" },
                { href: "/phased-array-ut", label: "PAUT Training — Phased Array UT" },
                { href: "/ndt-for-oil-gas", label: "NDT for Oil & Gas — Career Guide" },
                { href: "/api-570-certification", label: "API 570 Certification Training" },
                { href: "/blog/ndt-career-guide", label: "NDT Career Guide — Full Version" },
                { href: "/ndt-training-online", label: "Online NDT Training" },
                { href: "/contact", label: "Contact Our Training Team" },
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
              NDT Technician Salary — Frequently Asked Questions
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
              Advance Your NDT Career with Atlantis NDT
            </h2>
            <p className="text-blue-100 mb-6 leading-relaxed">
              Atlantis NDT offers ASNT-aligned certification training for all NDT levels and methods — including PAUT, TOFD, AUT, and multi-method programs. Our Level III instructors provide the hands-on, application-focused training that prepares you for the highest-paying NDT roles. Training available in Houston, Dubai, Hyderabad, and online.
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
                ASNT Certification Guide
              </Link>
              <Link
                to="/contact"
                className="border border-white text-white px-6 py-3 rounded-lg hover:bg-white/10 transition"
              >
                Talk to Our Team
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
                ["#by-level", "Salary by ASNT Level"],
                ["#by-method", "Salary by NDT Method"],
                ["#by-location", "Salary by Location"],
                ["#industries", "Top-Paying Industries"],
                ["#career-path", "Career Path"],
                ["#how-to-increase-salary", "How to Increase Salary"],
                ["#faq", "FAQ (8 questions)"],
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
            <h3 className="text-lg font-bold mb-3 text-green-800">Quick Salary Facts</h3>
            <ul className="space-y-3 text-sm text-green-800">
              {[
                { label: "Level II USA Median", value: "$62K–$75K" },
                { label: "PAUT Level II USA", value: "$80K–$110K" },
                { label: "Level III USA", value: "$80K–$130K" },
                { label: "Offshore Premium", value: "+20–40%" },
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
              Advance Your Career
            </h3>
            <ul className="space-y-2 text-sm">
              {[
                ["/asnt-certification", "ASNT Certification"],
                ["/training", "NDT Training Courses"],
                ["/phased-array-ut", "PAUT Training"],
                ["/api-570-certification", "API 570 Cert"],
                ["/ndt-training-online", "Online NDT Training"],
              ].map(([href, label]) => (
                <li key={href}>
                  <Link to={href} className="text-[#004aad] hover:underline">
                    → {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-[#004aad] p-6 rounded-xl shadow text-white">
            <h3 className="text-lg font-bold mb-3">Start Your NDT Career</h3>
            <p className="text-blue-100 text-sm mb-4">
              Our Level III instructors help NDT professionals at every stage — from Level I entry to Level III and beyond. Classes in Houston, Dubai, Hyderabad and online.
            </p>
            <Link
              to="/contact"
              className="block bg-white text-[#004aad] text-center font-bold px-4 py-3 rounded-lg hover:bg-blue-50 transition text-sm"
            >
              Get Career Guidance
            </Link>
          </div>
        </aside>
      </div>

      {/* 2026-05-17 additive: Related salary + cost guides */}
      <section className="bg-slate-50 py-12">
        <div className="container mx-auto max-w-6xl px-6">
          <h2 className="text-2xl font-bold mb-6 text-slate-900">More 2026 Salary & Cost Guides</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link to="/blog/paut-technician-salary-2026-region-cert-industry" className="block bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition group">
              <h3 className="font-bold group-hover:text-blue-600 transition">PAUT Technician Salary 2026</h3>
              <p className="text-slate-600 text-sm mt-2">Heat map by region × ASNT L2/L3 × industry + per-diem rates</p>
            </Link>
            <Link to="/blog/api-570-inspector-salary-2026-by-region-experience" className="block bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition group">
              <h3 className="font-bold group-hover:text-blue-600 transition">API 570 Inspector Salary 2026</h3>
              <p className="text-slate-600 text-sm mt-2">USA, Gulf, India + Triple Crown premium + consulting day rates</p>
            </Link>
            <Link to="/blog/ndt-inspection-cost-2026-by-method-pricing-matrix" className="block bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition group">
              <h3 className="font-bold group-hover:text-blue-600 transition">NDT Inspection Cost 2026</h3>
              <p className="text-slate-600 text-sm mt-2">Method × region pricing matrix — what NDT services actually cost</p>
            </Link>
          </div>
        </div>
      </section>
      <ContactDetails />
    </div>
  );
}
