import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import ContactDetails from "@/components/ContactDetails";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Compass,
  Calculator,
  TrendingUp,
  Table,
  ArrowRight,
  Zap,
  BarChart3,
  Share2,
} from "lucide-react";

const tools = [
  {
    title: "NDT Method Selector",
    description: "Find the right testing method for your application",
    href: "/tools/ndt-method-selector",
    icon: Compass,
    color: "bg-blue-100 text-blue-700",
  },
  {
    title: "Certification Cost Calculator",
    description: "Calculate certification costs & 5-year ROI",
    href: "/tools/ndt-certification-cost-calculator",
    icon: Calculator,
    color: "bg-green-100 text-green-700",
  },
  {
    title: "Inspection ROI Calculator",
    description: "Compare time-based vs risk-based inspection savings",
    href: "/tools/ndt-roi-calculator",
    icon: TrendingUp,
    color: "bg-amber-100 text-amber-700",
  },
  {
    title: "NDT Quick Reference",
    description: "Compare all 6 NDT methods at a glance",
    href: "/tools/ndt-quick-reference",
    icon: Table,
    color: "bg-purple-100 text-purple-700",
  },
];

const features = [
  {
    icon: Zap,
    title: "Instant Results",
    description:
      "No sign-up, no downloads. Get answers immediately with our browser-based tools built for NDT professionals.",
  },
  {
    icon: BarChart3,
    title: "Industry Data",
    description:
      "Every calculator is backed by real industry data from ASNT, ISO 9712, and field experience across oil & gas, aerospace, and power generation.",
  },
  {
    icon: Share2,
    title: "Shareable",
    description:
      "Share results with colleagues, include them in proposals, or embed our reference charts on your own site.",
  },
];

export default function ToolsHub() {
  return (
    <div className="min-h-screen bg-slate-50">
      <SEOHead
        title="Free NDT Tools & Calculators | Method Selector, Cost Calculator, ROI | Atlantis NDT"
        description="Free interactive NDT tools: Method Selector, Certification Cost Calculator, Inspection ROI Calculator, and Quick Reference Chart. Built for NDT professionals by Level III experts."
        canonical="https://atlantisndt.com/tools"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Free NDT Tools & Calculators",
          description:
            "Free interactive NDT tools: Method Selector, Certification Cost Calculator, Inspection ROI Calculator, and Quick Reference Chart.",
          url: "https://atlantisndt.com/tools",
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
          { label: "Tools" },
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
            Free NDT Tools & Calculators
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Interactive tools to help NDT professionals make better decisions
          </motion.p>
        </div>
      </section>

      {/* Tool Cards Grid */}
      <section className="container mx-auto max-w-6xl px-6 py-12">
        <div className="grid md:grid-cols-2 gap-6">
          {tools.map((tool, i) => (
            <motion.div
              key={tool.href}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <Link
                to={tool.href}
                className="block bg-white rounded-xl shadow border border-slate-100 p-6 hover:shadow-lg hover:border-[#004aad]/30 transition group"
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 ${tool.color}`}
                  >
                    <tool.icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-xl font-bold text-slate-900 group-hover:text-[#004aad] transition mb-1">
                      {tool.title}
                    </h2>
                    <p className="text-slate-600 text-sm leading-relaxed mb-3">
                      {tool.description}
                    </p>
                    <span className="inline-flex items-center gap-1 text-[#004aad] font-semibold text-sm group-hover:gap-2 transition-all">
                      Use Tool <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Use Our Tools */}
      <section className="container mx-auto max-w-6xl px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h2
            className="text-3xl font-bold mb-8 text-center"
            style={{ color: "#004aad" }}
          >
            Why Use Our Tools?
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="bg-white rounded-xl shadow border border-slate-100 p-6 text-center"
              >
                <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-6 h-6 text-[#004aad]" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* CTA */}
      <section className="container mx-auto max-w-6xl px-6 pb-12">
        <motion.div
          className="bg-[#004aad] rounded-2xl p-8 text-white text-center"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="text-2xl font-bold mb-3">
            Need Expert NDT Guidance?
          </h2>
          <p className="text-blue-100 mb-6 max-w-xl mx-auto leading-relaxed">
            Our ASNT Level III consultants can help you select the right
            inspection strategy, optimize costs, and build a certification
            program tailored to your operations.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-[#004aad] font-bold px-6 py-3 rounded-lg hover:bg-blue-50 transition"
          >
            Talk to an NDT Expert
          </Link>
        </motion.div>
      </section>

      <ContactDetails />
    </div>
  );
}
