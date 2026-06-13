import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import ContactDetails from "@/components/ContactDetails";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { CheckCircle, MapPin, ArrowRight, Mail, AlertTriangle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export interface ErpModuleCityProps {
  moduleSlug: string;
  moduleName: string;
  citySlug: string;
  cityName: string;
  country: string;
  title: string;
  desc: string;
  intro: string;
  cityFeatures: string[];
  cityUseCases: string[];
  cityOperators: string[];
  cityRegulators: string[];
  cityPain: string[];
  faqs: [string, string][];
  lat?: number;
  lng?: number;
}

export default function ErpModuleCityPage(p: ErpModuleCityProps) {
  const url = `https://atlantisndt.com/erp-modules/${p.moduleSlug}-${p.citySlug}`;
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        "@id": `${url}#software`,
        "name": `Atlantis NDT ERP — ${p.moduleName} in ${p.cityName}`,
        "applicationCategory": "BusinessApplication",
        "applicationSubCategory": p.moduleName,
        "operatingSystem": "Web Browser, iOS, Android",
        "description": p.desc,
        "url": url,
        "provider": { "@type": "Organization", "name": "Atlantis NDT", "url": "https://atlantisndt.com" },
        "offers": { "@type": "Offer", "availability": "https://schema.org/InStock" },
        "areaServed": { "@type": "City", "name": p.cityName, "containedInPlace": { "@type": "Country", "name": p.country } },
        "featureList": p.cityFeatures.slice(0, 10),
      },
      {
        "@type": "FAQPage",
        "@id": `${url}#faq`,
        "mainEntity": p.faqs.map(([q, a]) => ({ "@type": "Question", "name": q, "acceptedAnswer": { "@type": "Answer", "text": a } })),
      },
    ],
  };

  const localBusiness = (p.lat !== undefined && p.lng !== undefined) ? {
    city: p.cityName,
    country: p.country,
    serviceType: `${p.moduleName} ERP`,
    description: p.desc,
    lat: p.lat,
    lng: p.lng,
  } : undefined;

  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation />
      <SEOHead
        title={`${p.title} | Atlantis NDT ERP`}
        description={p.desc}
        keywords={`${p.moduleName.toLowerCase()} ${p.cityName.toLowerCase()}, ${p.moduleSlug.replace(/-/g, ' ')} ${p.citySlug.replace(/-/g, ' ')}, ${p.cityName.toLowerCase()} ${p.moduleName.toLowerCase()} software, Atlantis NDT ERP ${p.cityName}, inspection management ${p.cityName}`}
        canonical={url}
        structuredData={structuredData}
        localBusiness={localBusiness}
      />
      <Breadcrumbs />

      <section className="bg-gradient-to-br from-blue-700 to-indigo-800 text-white pt-24 pb-16">
        <div className="container mx-auto max-w-6xl px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full mb-6">
              <MapPin className="w-4 h-4" /><span className="text-sm">{p.moduleName} — {p.cityName}, {p.country}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{p.title}</h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl">{p.desc}</p>
            <div className="flex flex-wrap gap-3">
              <Link to="/contact" className="px-6 py-3 bg-white text-blue-700 font-semibold rounded-lg hover:bg-blue-50">Request {p.cityName} Demo</Link>
              <a href={`mailto:info@atlantisndt.com?subject=Demo Request — ${p.moduleName} in ${p.cityName}`} className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-500 flex items-center gap-2"><Mail className="w-4 h-4" />info@atlantisndt.com</a>
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
          <h2 className="text-3xl font-bold mb-2">{p.moduleName} — Configured for {p.cityName}</h2>
          <p className="text-slate-600 mb-8">Module features tailored to {p.cityName} operator workflow, regulatory environment, and language requirements.</p>
          <div className="grid md:grid-cols-2 gap-3">
            {p.cityFeatures.map((f, i) => (
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
          <h2 className="text-3xl font-bold mb-8">Pain Points {p.cityName} Inspection Teams Face</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {p.cityPain.map((u, i) => (
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
          <h2 className="text-3xl font-bold mb-8">{p.cityName} Use Cases</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {p.cityUseCases.map((u, i) => (
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
            <h2 className="text-2xl font-bold mb-4">Typical {p.cityName} Operators / Clients</h2>
            <ul className="space-y-2">
              {p.cityOperators.map((o, i) => (<li key={i} className="flex items-center gap-2 text-slate-700"><CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0" />{o}</li>))}
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">{p.cityName} Regulators & Frameworks</h2>
            <ul className="space-y-2">
              {p.cityRegulators.map((r, i) => (<li key={i} className="flex items-center gap-2 text-slate-700"><CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0" />{r}</li>))}
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
          <h2 className="text-3xl font-bold mb-4">{p.moduleName} for {p.cityName} — Book a Demo</h2>
          <p className="text-blue-100 mb-8 text-lg">30-minute walkthrough using {p.cityName} operator templates and regulators. Your workflow, your codes, your data.</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link to="/contact" className="px-6 py-3 bg-white text-blue-700 font-semibold rounded-lg hover:bg-blue-50 flex items-center gap-2">Request Demo <ArrowRight className="w-4 h-4" /></Link>
            <a href={`mailto:info@atlantisndt.com?subject=Demo Request — ${p.moduleName} ${p.cityName}`} className="px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 flex items-center gap-2"><Mail className="w-4 h-4" />info@atlantisndt.com</a>
          </div>
        </div>
      </section>

      <section className="py-12 bg-slate-100">
        <div className="container mx-auto max-w-6xl px-6">
          <h3 className="text-xl font-semibold mb-4">Explore Related Solutions in {p.cityName}</h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3 text-sm">
            <Link to={`/erp-modules/${p.moduleSlug}`} className="text-blue-600 hover:underline">{p.moduleName} — Full Module →</Link>
            <Link to={`/ndt-erp-${p.citySlug}`} className="text-blue-600 hover:underline">NDT ERP — {p.cityName} →</Link>
            <Link to={`/ndt-consulting-${p.citySlug}`} className="text-blue-600 hover:underline">NDT Consulting — {p.cityName} →</Link>
            <Link to="/erp-modules" className="text-blue-600 hover:underline">All ERP Modules →</Link>
            <Link to="/erp-industries" className="text-blue-600 hover:underline">ERP by Industry →</Link>
            <Link to="/ndt-erp-solution" className="text-blue-600 hover:underline">Full Atlantis NDT ERP Suite →</Link>
          </div>
        </div>
      </section>

      <ContactDetails />
    </div>
  );
}
