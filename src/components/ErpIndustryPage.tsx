import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import ContactDetails from "@/components/ContactDetails";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { CheckCircle, Building2, ArrowRight, Mail, AlertTriangle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export interface ErpIndustryProps {
  slug: string;
  name: string;
  title: string;
  h1: string;
  desc: string;
  intro: string;
  modules: string[];     // module slugs
  regs: string[];        // regulatory bodies / codes
  operators: string[];   // typical clients / operators
  pain: string[];        // pain points
  faqs: [string, string][];
}

const MODULE_LABELS: Record<string, string> = {
  "certification-tracking": "Certification & Personnel Qualification",
  "work-order-management": "Work Order & Job Management",
  "inspection-scheduling": "Inspection Scheduling & Interval Management",
  "asset-management": "Asset Integrity & Equipment Register",
  "corrosion-tracking": "Corrosion Tracking & RBI",
  "quality-management": "Quality Management & NCR",
  "document-control": "Document Control & QMS",
  "inventory-management": "Inventory Management",
  "calibration-management": "Calibration Management",
  "audit-management": "Audit & Compliance Management",
  "project-management": "Project Management & Turnaround Support",
};

export default function ErpIndustryPage(p: ErpIndustryProps) {
  const url = `https://atlantisndt.com/erp-industries/${p.slug}`;
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        "@id": `${url}#software`,
        "name": `Atlantis NDT ERP — ${p.name}`,
        "applicationCategory": "BusinessApplication",
        "applicationSubCategory": p.name,
        "operatingSystem": "Web Browser, iOS, Android",
        "description": p.desc,
        "url": url,
        "provider": { "@type": "Organization", "name": "Atlantis NDT", "url": "https://atlantisndt.com" },
        "offers": { "@type": "Offer", "price": "Contact for pricing", "priceCurrency": "USD", "availability": "https://schema.org/InStock" },
        "audience": { "@type": "BusinessAudience", "audienceType": p.name },
      },
      {
        "@type": "FAQPage",
        "@id": `${url}#faq`,
        "mainEntity": p.faqs.map(([q, a]) => ({ "@type": "Question", "name": q, "acceptedAnswer": { "@type": "Answer", "text": a } })),
      },
    ],
  };
  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation />
      <SEOHead
        title={`${p.title} | Atlantis NDT ERP`}
        description={p.desc}
        keywords={`${p.name.toLowerCase()} ERP, ERP for ${p.name.toLowerCase()}, inspection management ${p.name.toLowerCase()}, ${p.slug.replace(/-/g, ' ')} software, Atlantis NDT`}
        canonical={url}
        structuredData={structuredData}
      />
      <Breadcrumbs />

      <section className="bg-gradient-to-br from-blue-700 to-indigo-800 text-white pt-24 pb-16">
        <div className="container mx-auto max-w-6xl px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full mb-6">
              <Building2 className="w-4 h-4" />
              <span className="text-sm">ERP by Industry — Tailor-Made by Atlantis NDT</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{p.h1}</h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl">{p.desc}</p>
            <div className="flex flex-wrap gap-3">
              <Link to="/contact" className="px-6 py-3 bg-white text-blue-700 font-semibold rounded-lg hover:bg-blue-50">Request Tailored Demo</Link>
              <a href="mailto:info@atlantisndt.com?subject=Demo Request — ERP for {p.name}" className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-500 flex items-center gap-2"><Mail className="w-4 h-4" />info@atlantisndt.com</a>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto max-w-4xl px-6">
          <p className="text-lg text-slate-700 leading-relaxed whitespace-pre-line">{p.intro}</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-bold mb-2">Pain Points We Eliminate</h2>
          <p className="text-slate-600 mb-8">The reasons {p.name.toLowerCase()} replace spreadsheets, file shares, and disconnected SaaS with Atlantis NDT ERP.</p>
          <div className="grid md:grid-cols-2 gap-4">
            {p.pain.map((u, i) => (
              <div key={i} className="flex items-start gap-3 p-4 bg-red-50 border-l-4 border-red-400 rounded">
                <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                <span className="text-slate-700">{u}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-bold mb-8">Modules Included for {p.name}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {p.modules.map(slug => (
              <Card key={slug} className="border-l-4 border-blue-600 hover:shadow-md">
                <CardHeader><CardTitle className="text-lg">{MODULE_LABELS[slug] ?? slug}</CardTitle></CardHeader>
                <CardContent>
                  <Link to={`/erp-modules/${slug}`} className="text-blue-600 hover:underline text-sm">View module details →</Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold mb-4">Codes, Standards & Regulators</h2>
            <ul className="space-y-2">
              {p.regs.map((r, i) => (<li key={i} className="flex items-center gap-2 text-slate-700"><CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0" />{r}</li>))}
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">Typical Operators & Clients</h2>
            <ul className="space-y-2">
              {p.operators.map((o, i) => (<li key={i} className="flex items-center gap-2 text-slate-700"><CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0" />{o}</li>))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto max-w-4xl px-6">
          <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {p.faqs.map(([q, a], i) => (
              <Card key={i}>
                <CardHeader><CardTitle className="text-lg">{q}</CardTitle></CardHeader>
                <CardContent><p className="text-slate-600 leading-relaxed">{a}</p></CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">ERP Tailored to {p.name} — Book a Demo</h2>
          <p className="text-blue-100 mb-8 text-lg">Atlantis NDT customizes the platform to your operator, code base, and workflow. See it live in 30 minutes.</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link to="/contact" className="px-6 py-3 bg-white text-blue-700 font-semibold rounded-lg hover:bg-blue-50 flex items-center gap-2">Request Demo <ArrowRight className="w-4 h-4" /></Link>
            <a href="mailto:info@atlantisndt.com?subject=Demo Request — ERP for Industry" className="px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 flex items-center gap-2"><Mail className="w-4 h-4" />info@atlantisndt.com</a>
          </div>
        </div>
      </section>

      <section className="py-12 bg-slate-100">
        <div className="container mx-auto max-w-6xl px-6">
          <h3 className="text-xl font-semibold mb-4">Explore More</h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3 text-sm">
            <Link to="/erp-industries" className="text-blue-600 hover:underline">All Industries →</Link>
            <Link to="/erp-modules" className="text-blue-600 hover:underline">All ERP Modules →</Link>
            <Link to="/ndt-erp-solution" className="text-blue-600 hover:underline">Full Atlantis NDT ERP Suite →</Link>
            <Link to="/ndt-erp-vs-generic-erp" className="text-blue-600 hover:underline">NDT ERP vs Generic ERP →</Link>
            <Link to="/ndt-erp-software-comparison" className="text-blue-600 hover:underline">ERP Software Comparison →</Link>
            <Link to="/ndt-erp-roi-calculator" className="text-blue-600 hover:underline">ERP ROI Calculator →</Link>
          </div>
        </div>
      </section>

      <ContactDetails />
    </div>
  );
}
