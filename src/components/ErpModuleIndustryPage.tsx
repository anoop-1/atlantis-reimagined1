import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import ContactDetails from "@/components/ContactDetails";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { CheckCircle, Layers, ArrowRight, Mail, AlertTriangle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export interface ErpModuleIndustryProps {
  moduleSlug: string;
  moduleName: string;
  industrySlug: string;
  industryName: string;
  title: string;
  desc: string;
  intro: string;
  industryFeatures: string[];   // module features tailored to industry
  industryUseCases: string[];   // 3-4 real use cases tying module+industry
  industryCodes: string[];      // codes/regs at intersection
  industryOperators: string[];  // typical operators / clients
  industryPain: string[];       // pain points specific to combo
  faqs: [string, string][];
}

export default function ErpModuleIndustryPage(p: ErpModuleIndustryProps) {
  const url = `https://atlantisndt.com/erp-modules/${p.moduleSlug}-for-${p.industrySlug}`;
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        "@id": `${url}#software`,
        "name": `Atlantis NDT ERP — ${p.moduleName} for ${p.industryName}`,
        "applicationCategory": "BusinessApplication",
        "applicationSubCategory": p.moduleName,
        "operatingSystem": "Web Browser, iOS, Android",
        "description": p.desc,
        "url": url,
        "provider": { "@type": "Organization", "name": "Atlantis NDT", "url": "https://atlantisndt.com" },
        "offers": { "@type": "Offer", "price": "Contact for pricing", "priceCurrency": "USD", "availability": "https://schema.org/InStock" },
        "audience": { "@type": "BusinessAudience", "audienceType": p.industryName },
        "featureList": p.industryFeatures.slice(0, 10),
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
        keywords={`${p.moduleName.toLowerCase()} for ${p.industryName.toLowerCase()}, ${p.moduleSlug.replace(/-/g, ' ')} ${p.industrySlug.replace(/-/g, ' ')}, ${p.industryName.toLowerCase()} ${p.moduleName.toLowerCase()} software, Atlantis NDT ERP`}
        canonical={url}
        structuredData={structuredData}
      />
      <Breadcrumbs />

      <section className="bg-gradient-to-br from-blue-700 to-indigo-800 text-white pt-24 pb-16">
        <div className="container mx-auto max-w-6xl px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full mb-6">
              <Layers className="w-4 h-4" /><span className="text-sm">{p.moduleName} × {p.industryName}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{p.title}</h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl">{p.desc}</p>
            <div className="flex flex-wrap gap-3">
              <Link to="/contact" className="px-6 py-3 bg-white text-blue-700 font-semibold rounded-lg hover:bg-blue-50">Request Demo</Link>
              <a href={`mailto:info@atlantisndt.com?subject=Demo Request — ${p.moduleName} for ${p.industryName}`} className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-500 flex items-center gap-2"><Mail className="w-4 h-4" />info@atlantisndt.com</a>
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
          <h2 className="text-3xl font-bold mb-2">{p.moduleName} — Tailored for {p.industryName}</h2>
          <p className="text-slate-600 mb-8">Specific features of this module that solve {p.industryName.toLowerCase()} workflow.</p>
          <div className="grid md:grid-cols-2 gap-3">
            {p.industryFeatures.map((f, i) => (
              <div key={i} className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg">
                <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <span className="text-slate-700">{f}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-bold mb-8">Pain Points Eliminated</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {p.industryPain.map((u, i) => (
              <div key={i} className="flex items-start gap-3 p-4 bg-red-50 border-l-4 border-red-400 rounded">
                <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                <span className="text-slate-700">{u}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-bold mb-8">Use Cases — {p.industryName}</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {p.industryUseCases.map((u, i) => (
              <Card key={i} className="border-l-4 border-blue-600">
                <CardContent className="pt-6"><p className="text-slate-700">{u}</p></CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold mb-4">Relevant Codes, Standards & Regulators</h2>
            <ul className="space-y-2">
              {p.industryCodes.map((c, i) => (<li key={i} className="flex items-center gap-2 text-slate-700"><CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0" />{c}</li>))}
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">Typical Clients & Operators</h2>
            <ul className="space-y-2">
              {p.industryOperators.map((o, i) => (<li key={i} className="flex items-center gap-2 text-slate-700"><CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0" />{o}</li>))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
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
          <h2 className="text-3xl font-bold mb-4">See {p.moduleName} for {p.industryName} Live</h2>
          <p className="text-blue-100 mb-8 text-lg">30-minute tailored demo using your codes, your operators, your workflow.</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link to="/contact" className="px-6 py-3 bg-white text-blue-700 font-semibold rounded-lg hover:bg-blue-50 flex items-center gap-2">Request Demo <ArrowRight className="w-4 h-4" /></Link>
            <a href={`mailto:info@atlantisndt.com?subject=Demo Request — ${p.moduleName} for ${p.industryName}`} className="px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 flex items-center gap-2"><Mail className="w-4 h-4" />info@atlantisndt.com</a>
          </div>
        </div>
      </section>

      <section className="py-12 bg-slate-100">
        <div className="container mx-auto max-w-6xl px-6">
          <h3 className="text-xl font-semibold mb-4">Explore Related Solutions</h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3 text-sm">
            <Link to={`/erp-modules/${p.moduleSlug}`} className="text-blue-600 hover:underline">{p.moduleName} — Full Module →</Link>
            <Link to={`/erp-industries/${p.industrySlug}`} className="text-blue-600 hover:underline">{p.industryName} — All Modules →</Link>
            <Link to="/erp-modules" className="text-blue-600 hover:underline">All ERP Modules →</Link>
            <Link to="/erp-industries" className="text-blue-600 hover:underline">All Industries →</Link>
            <Link to="/ndt-erp-solution" className="text-blue-600 hover:underline">Full Atlantis NDT ERP Suite →</Link>
            <Link to="/ndt-erp-vs-generic-erp" className="text-blue-600 hover:underline">NDT ERP vs Generic ERP →</Link>
          </div>
        </div>
      </section>

      <ContactDetails />
    </div>
  );
}
