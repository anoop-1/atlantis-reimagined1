import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import ContactDetails from "@/components/ContactDetails";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Copy,
  Check,
  Activity,
  Zap,
  Target,
  Shield,
  Eye,
  Radio,
} from "lucide-react";
import { useState } from "react";

/* ─── Comparison Table Data ─── */
const comparisonRows = [
  {
    method: "Ultrasonic Testing (UT)",
    abbr: "UT",
    type: "Volumetric",
    defects: "Internal flaws, wall thinning, lack of fusion, laminations",
    materials: "Metals, composites, plastics",
    surfacePrep: "Clean, smooth (couplant needed)",
    skillLevel: "High",
    relativeCost: "$$",
    speed: "Fast (real-time)",
  },
  {
    method: "Radiographic Testing (RT)",
    abbr: "RT",
    type: "Volumetric",
    defects: "Porosity, inclusions, cracks, incomplete penetration",
    materials: "Most materials",
    surfacePrep: "Minimal",
    skillLevel: "Moderate-High",
    relativeCost: "$$$",
    speed: "Slow (exposure + processing)",
  },
  {
    method: "Magnetic Particle Testing (MT)",
    abbr: "MT",
    type: "Surface / Near-surface",
    defects: "Surface cracks, seams, laps, near-surface voids",
    materials: "Ferromagnetic only",
    surfacePrep: "Clean, remove loose scale",
    skillLevel: "Moderate",
    relativeCost: "$",
    speed: "Fast",
  },
  {
    method: "Liquid Penetrant Testing (PT)",
    abbr: "PT",
    type: "Surface",
    defects: "Surface-breaking cracks, porosity, laps",
    materials: "All non-porous materials",
    surfacePrep: "Thoroughly cleaned & dried",
    skillLevel: "Low-Moderate",
    relativeCost: "$",
    speed: "Moderate (dwell time)",
  },
  {
    method: "Eddy Current Testing (ET)",
    abbr: "ET",
    type: "Surface / Near-surface",
    defects: "Surface cracks, corrosion, conductivity changes, coating thickness",
    materials: "Conductive materials",
    surfacePrep: "Minimal (non-conductive coatings OK)",
    skillLevel: "High",
    relativeCost: "$$",
    speed: "Very fast (automated)",
  },
  {
    method: "Visual Testing (VT)",
    abbr: "VT",
    type: "Surface",
    defects: "Surface defects, misalignment, corrosion, weld profile",
    materials: "Any material",
    surfacePrep: "Adequate lighting & access",
    skillLevel: "Low-Moderate",
    relativeCost: "$",
    speed: "Very fast",
  },
];

/* ─── Method Cards Data ─── */
const methodCards = [
  {
    abbr: "UT",
    name: "Ultrasonic Testing",
    icon: Activity,
    color: "border-t-blue-600",
    facts: [
      "Frequency range: 0.5 - 25 MHz",
      "Detects flaws as small as 0.5 mm",
      "Real-time results with digital equipment",
      "Advanced: PAUT, TOFD, Full Matrix Capture",
    ],
    href: "/ultrasonic-testing",
  },
  {
    abbr: "RT",
    name: "Radiographic Testing",
    icon: Zap,
    color: "border-t-purple-600",
    facts: [
      "Uses X-rays or gamma rays (Ir-192, Co-60)",
      "Produces permanent film or digital record",
      "Excellent for porosity and volumetric defects",
      "Requires radiation safety program",
    ],
    href: "/radiographic-testing",
  },
  {
    abbr: "MT",
    name: "Magnetic Particle Testing",
    icon: Target,
    color: "border-t-amber-600",
    facts: [
      "Detects surface & near-surface defects (~3 mm depth)",
      "Wet fluorescent MT (WFMT) extremely sensitive",
      "Fast, low-cost field method",
      "Ferromagnetic materials only (steel, iron, nickel)",
    ],
    href: "/magnetic-particle-testing",
  },
  {
    abbr: "PT",
    name: "Liquid Penetrant Testing",
    icon: Shield,
    color: "border-t-red-600",
    facts: [
      "Works on any non-porous material",
      "Visible or fluorescent penetrants",
      "Low equipment cost, highly portable",
      "Requires 10-30 min dwell time",
    ],
    href: "/penetrant-testing",
  },
  {
    abbr: "ET",
    name: "Eddy Current Testing",
    icon: Radio,
    color: "border-t-teal-600",
    facts: [
      "Non-contact inspection possible",
      "Ideal for tube and heat exchanger inspection",
      "Measures conductivity, permeability, coating thickness",
      "Very high scanning speeds (automated)",
    ],
    href: "/eddy-current-testing",
  },
  {
    abbr: "VT",
    name: "Visual Testing",
    icon: Eye,
    color: "border-t-emerald-600",
    facts: [
      "Most widely used NDT method (>80% of inspections)",
      "Direct and remote (borescope, drone, RVI)",
      "Required before and after all other NDT methods",
      "Governed by ASME V Art 9, AWS D1.1 Chapter 6",
    ],
    href: "/visual-testing",
  },
];

const embedCode = `<iframe src="https://atlantisndt.com/embed/ndt-reference" width="100%" height="600" frameborder="0" title="NDT Quick Reference - Atlantis NDT"></iframe>`;

export default function NDTQuickReference() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(embedCode).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <SEOHead
        title="NDT Quick Reference Chart | All 6 Methods Compared | Atlantis NDT"
        description="Compare all 6 NDT methods: UT, RT, MT, PT, ET, VT. Detection, materials, cost, speed, skill level in one reference chart. Free to embed."
        canonical="https://atlantisndt.com/tools/ndt-quick-reference"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "NDT Quick Reference Chart - All 6 Methods Compared",
          description:
            "Compare all 6 NDT methods at a glance: UT, RT, MT, PT, ET, VT. Detection capabilities, materials, cost, speed, and skill level.",
          url: "https://atlantisndt.com/tools/ndt-quick-reference",
          publisher: {
            "@type": "Organization",
            name: "Atlantis NDT",
            url: "https://atlantisndt.com",
          },
        }}
      />
      <Navigation />
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Tools", href: "/tools" },
          { label: "NDT Quick Reference" },
        ]}
      />

      {/* Hero */}
      <section className="bg-[#004aad] text-white py-16">
        <div className="container mx-auto max-w-6xl px-6 text-center">
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            NDT Quick Reference Chart
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            All 6 NDT methods compared side-by-side — detection type, defects,
            materials, cost, speed, and skill level
          </motion.p>
        </div>
      </section>

      <div className="container mx-auto max-w-6xl px-6 py-12 space-y-14">
        {/* Comparison Table */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2
            className="text-3xl font-bold mb-6"
            style={{ color: "#004aad" }}
          >
            NDT Method Comparison Table
          </h2>
          <div className="overflow-x-auto rounded-xl border border-slate-200 shadow">
            <table className="w-full text-sm">
              <thead className="bg-[#004aad] text-white">
                <tr>
                  <th className="text-left p-4 font-semibold whitespace-nowrap">
                    Method
                  </th>
                  <th className="text-left p-4 font-semibold">Type</th>
                  <th className="text-left p-4 font-semibold">
                    Defects Detected
                  </th>
                  <th className="text-left p-4 font-semibold">Materials</th>
                  <th className="text-left p-4 font-semibold whitespace-nowrap">
                    Surface Prep
                  </th>
                  <th className="text-left p-4 font-semibold whitespace-nowrap">
                    Skill Level
                  </th>
                  <th className="text-left p-4 font-semibold whitespace-nowrap">
                    Relative Cost
                  </th>
                  <th className="text-left p-4 font-semibold">Speed</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, i) => (
                  <tr
                    key={row.abbr}
                    className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}
                  >
                    <td className="p-4 font-bold text-[#004aad] whitespace-nowrap">
                      {row.abbr}
                    </td>
                    <td className="p-4 text-slate-700">{row.type}</td>
                    <td className="p-4 text-slate-700">{row.defects}</td>
                    <td className="p-4 text-slate-700">{row.materials}</td>
                    <td className="p-4 text-slate-600">{row.surfacePrep}</td>
                    <td className="p-4 text-slate-600">{row.skillLevel}</td>
                    <td className="p-4 text-slate-700 font-semibold">
                      {row.relativeCost}
                    </td>
                    <td className="p-4 text-slate-600">{row.speed}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-3">
            Cost key: $ = Low (&lt;$200/test), $$ = Moderate ($150-$500), $$$ =
            High ($300-$800+). Actual costs vary by scope, location, and
            complexity.
          </p>
        </motion.section>

        {/* Method Comparison Cards */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h2
            className="text-3xl font-bold mb-6"
            style={{ color: "#004aad" }}
          >
            Method Quick Facts
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {methodCards.map((card) => (
              <div
                key={card.abbr}
                className={`bg-white rounded-xl shadow border border-slate-100 border-t-4 ${card.color} p-6`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center">
                    <card.icon className="w-5 h-5 text-slate-700" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">
                      {card.name}
                    </h3>
                    <span className="text-xs text-slate-500 font-semibold">
                      {card.abbr}
                    </span>
                  </div>
                </div>
                <ul className="space-y-2 mb-4">
                  {card.facts.map((fact, j) => (
                    <li
                      key={j}
                      className="flex items-start gap-2 text-sm text-slate-700"
                    >
                      <span className="w-1.5 h-1.5 bg-[#004aad] rounded-full flex-shrink-0 mt-1.5" />
                      {fact}
                    </li>
                  ))}
                </ul>
                <Link
                  to={card.href}
                  className="inline-flex items-center gap-1 text-[#004aad] font-semibold text-sm hover:gap-2 transition-all"
                >
                  Full {card.abbr} Guide <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Embed Section */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2
            className="text-3xl font-bold mb-3"
            style={{ color: "#004aad" }}
          >
            Embed on Your Site
          </h2>
          <p className="text-slate-700 leading-relaxed mb-5">
            Add our NDT Quick Reference widget to your website, training portal,
            or internal wiki. Copy the code below and paste it into your HTML.
          </p>

          <div className="bg-white rounded-xl shadow border border-slate-100 overflow-hidden">
            {/* Code block */}
            <div className="bg-slate-900 p-4 relative">
              <button
                onClick={handleCopy}
                className="absolute top-3 right-3 flex items-center gap-1.5 bg-slate-700 hover:bg-slate-600 text-white text-xs font-medium px-3 py-1.5 rounded-md transition"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5" /> Copied
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" /> Copy Code
                  </>
                )}
              </button>
              <pre className="text-green-400 text-sm overflow-x-auto pr-24">
                <code>{embedCode}</code>
              </pre>
            </div>

            {/* Preview */}
            <div className="p-6 border-t border-slate-200">
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">
                Preview
              </p>
              <div className="border border-slate-200 rounded-lg overflow-hidden">
                <iframe
                  src="/embed/ndt-reference"
                  width="100%"
                  height="400"
                  frameBorder="0"
                  title="NDT Quick Reference Preview"
                  className="bg-white"
                />
              </div>
            </div>
          </div>
        </motion.section>

        {/* Links to Full Method Pages */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
        >
          <h2
            className="text-2xl font-bold mb-5"
            style={{ color: "#004aad" }}
          >
            Explore Each Method in Detail
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                href: "/ultrasonic-testing",
                label: "Ultrasonic Testing (UT) - Complete Guide",
              },
              {
                href: "/radiographic-testing",
                label: "Radiographic Testing (RT) - Complete Guide",
              },
              {
                href: "/magnetic-particle-testing",
                label: "Magnetic Particle Testing (MT) - Complete Guide",
              },
              {
                href: "/penetrant-testing",
                label: "Liquid Penetrant Testing (PT) - Complete Guide",
              },
              {
                href: "/eddy-current-testing",
                label: "Eddy Current Testing (ET) - Complete Guide",
              },
              {
                href: "/visual-testing",
                label: "Visual Testing (VT) - Complete Guide",
              },
              {
                href: "/ndt-methods-comparison",
                label: "Full NDT Methods Comparison (10-factor matrix)",
              },
              {
                href: "/ndt-certification-guide",
                label: "NDT Certification Guide - All Schemes Compared",
              },
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
        </motion.section>

        {/* CTA */}
        <section className="bg-[#004aad] rounded-2xl p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-3">
            Need Help Choosing the Right NDT Method?
          </h2>
          <p className="text-blue-100 mb-6 max-w-xl mx-auto leading-relaxed">
            Our ASNT Level III consultants help clients select the optimal
            inspection strategy for their specific materials, defect types, and
            code requirements. Available globally.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/tools/ndt-method-selector"
              className="bg-white text-[#004aad] font-bold px-6 py-3 rounded-lg hover:bg-blue-50 transition"
            >
              Try Method Selector Tool
            </Link>
            <Link
              to="/contact"
              className="border border-white text-white px-6 py-3 rounded-lg hover:bg-white/10 transition"
            >
              Talk to an NDT Expert
            </Link>
          </div>
        </section>
      </div>

      <ContactDetails />
    </div>
  );
}
