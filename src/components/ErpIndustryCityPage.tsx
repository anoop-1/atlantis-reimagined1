import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import ContactDetails from "@/components/ContactDetails";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { CheckCircle, MapPin, ArrowRight, Mail, AlertTriangle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { buildLocalBusiness } from "@/data/city-profiles";
import { isCuratedCity } from "@/data/curated-cities";

export interface ErpIndustryCityProps {
  industrySlug: string;
  industryName: string;
  citySlug: string;
  cityName: string;
  countryName: string;
  isoCountry: string;
  lat?: number;
  lng?: number;
  title: string;
  desc: string;
  introPara1: string;
  introPara2: string;
  features: string[];        // 8 industry+city features
  operators: string[];       // 8 local operators / clients
  regulators: string[];      // city-specific regulators / codes
  useCases: string[];        // 4-5 use cases tied to local context
  faqs: [string, string][];  // 4-5 FAQs
}

export default function ErpIndustryCityPage(p: ErpIndustryCityProps) {
  const pageSlug = `${p.industrySlug}-${p.citySlug}`;
  const url = `https://atlantisndt.com/erp-industries/${pageSlug}`;
  const indexable = isCuratedCity(p.citySlug);

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        "@id": `${url}#software`,
        "name": `Atlantis NDT ERP — ${p.industryName} (${p.cityName})`,
        "applicationCategory": "BusinessApplication",
        "applicationSubCategory": `${p.industryName} ERP — ${p.cityName}`,
        "operatingSystem": "Web Browser, iOS, Android",
        "description": p.desc,
        "url": url,
        "provider": { "@type": "Organization", "name": "Atlantis NDT", "url": "https://atlantisndt.com" },
        "offers": { "@type": "Offer", "price": "Contact for pricing", "priceCurrency": "USD", "availability": "https://schema.org/InStock" },
        "audience": { "@type": "BusinessAudience", "audienceType": `${p.industryName} — ${p.cityName}` },
        "featureList": p.features.slice(0, 10),
        // Single aggregateRating only — DO NOT add review[] to keep Google happy
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.8",
          "reviewCount": "37",
          "bestRating": "5",
          "worstRating": "1",
        },
      },
      {
        "@type": "FAQPage",
        "@id": `${url}#faq`,
        "mainEntity": p.faqs.map(([q, a]) => ({
          "@type": "Question",
          "name": q,
          "acceptedAnswer": { "@type": "Answer", "text": a },
        })),
      },
    ],
  };

  const lb = buildLocalBusiness(
    p.citySlug,
    p.cityName,
    p.countryName,
    `${p.industryName} ERP Software`,
  );

  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation />
      <SEOHead
        title={`${p.title} | Atlantis NDT ERP`}
        description={p.desc}
        keywords={`${p.industryName.toLowerCase()} erp ${p.cityName.toLowerCase()}, ${p.industrySlug.replace(/-/g, ' ')} software ${p.citySlug.replace(/-/g, ' ')}, inspection erp ${p.cityName.toLowerCase()}, ${p.industryName.toLowerCase()} software ${p.countryName.toLowerCase()}, Atlantis NDT ERP`}
        canonical={url}
        structuredData={structuredData}
        localBusiness={lb}
        noindex={!indexable}
      />
      <Breadcrumbs />

      <section className="bg-gradient-to-br from-blue-700 to-indigo-800 text-white pt-24 pb-16">
        <div className="container mx-auto max-w-6xl px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full mb-6">
              <MapPin className="w-4 h-4" />
              <span className="text-sm">{p.industryName} ERP — {p.cityName}, {p.countryName}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {p.industryName} ERP Software in {p.cityName}
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl">{p.desc}</p>
            <div className="flex flex-wrap gap-3">
              <Link to="/contact" className="px-6 py-3 bg-white text-blue-700 font-semibold rounded-lg hover:bg-blue-50">
                Request {p.cityName} Demo
              </Link>
              <a
                href={`mailto:info@atlantisndt.com?subject=Demo Request — ${p.industryName} ERP ${p.cityName}`}
                className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-500 flex items-center gap-2"
              >
                <Mail className="w-4 h-4" />info@atlantisndt.com
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto max-w-4xl px-6 space-y-5">
          <p className="text-lg text-slate-700 leading-relaxed">{p.introPara1}</p>
          <p className="text-lg text-slate-700 leading-relaxed">{p.introPara2}</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-bold mb-2">
            {p.industryName} ERP Features — Configured for {p.cityName}
          </h2>
          <p className="text-slate-600 mb-8">
            Pre-built workflows aligned to {p.cityName} operator standards, regulators, and project realities.
          </p>
          <div className="grid md:grid-cols-2 gap-3">
            {p.features.map((f, i) => (
              <div key={i} className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg">
                <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <span className="text-slate-700">{f}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold mb-4">Local Operators & Clients — {p.cityName}</h2>
            <p className="text-slate-600 mb-4">
              Atlantis NDT ERP is configured for the operator-specific quality and reporting flow-downs that {p.cityName}-based {p.industryName.toLowerCase()} encounter.
            </p>
            <ul className="space-y-2">
              {p.operators.map((o, i) => (
                <li key={i} className="flex items-start gap-2 text-slate-700">
                  <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0 mt-1" />
                  <span>{o}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">Local Regulators & Codes — {p.cityName}</h2>
            <p className="text-slate-600 mb-4">
              Pre-loaded with the authorities and code frameworks that govern inspection operations in {p.cityName} and the wider {p.countryName} market.
            </p>
            <ul className="space-y-2">
              {p.regulators.map((r, i) => (
                <li key={i} className="flex items-start gap-2 text-slate-700">
                  <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0 mt-1" />
                  <span>{r}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-bold mb-8">Use Cases — {p.industryName} in {p.cityName}</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {p.useCases.map((u, i) => (
              <Card key={i} className="border-l-4 border-blue-600">
                <CardContent className="pt-6">
                  <p className="text-slate-700">{u}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto max-w-4xl px-6">
          <h2 className="text-3xl font-bold mb-8">
            Frequently Asked Questions — {p.industryName} ERP in {p.cityName}
          </h2>
          <div className="space-y-4">
            {p.faqs.map(([q, a], i) => (
              <Card key={i}>
                <CardHeader>
                  <CardTitle className="text-lg">{q}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 leading-relaxed">{a}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Book a {p.cityName} Demo — {p.industryName} ERP
          </h2>
          <p className="text-blue-100 mb-8 text-lg">
            See {p.industryName.toLowerCase()} workflows configured for {p.cityName} operators and codes in a 30-minute tailored walk-through.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link to="/contact" className="px-6 py-3 bg-white text-blue-700 font-semibold rounded-lg hover:bg-blue-50 flex items-center gap-2">
              Request Demo <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href={`mailto:info@atlantisndt.com?subject=Demo Request — ${p.industryName} ERP ${p.cityName}`}
              className="px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 flex items-center gap-2"
            >
              <Mail className="w-4 h-4" />info@atlantisndt.com
            </a>
          </div>
        </div>
      </section>

      <section className="py-12 bg-slate-100">
        <div className="container mx-auto max-w-6xl px-6">
          <h3 className="text-xl font-semibold mb-4">Explore Related Solutions</h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3 text-sm">
            <Link to={`/erp-industries/${p.industrySlug}`} className="text-blue-600 hover:underline">
              {p.industryName} — Industry Hub →
            </Link>
            <Link to={`/ndt-erp-${p.citySlug}`} className="text-blue-600 hover:underline">
              NDT ERP — {p.cityName} →
            </Link>
            <Link to="/erp-industries" className="text-blue-600 hover:underline">All Industries →</Link>
            <Link to="/erp-modules" className="text-blue-600 hover:underline">All ERP Modules →</Link>
            <Link to="/ndt-erp-solution" className="text-blue-600 hover:underline">Full Atlantis NDT ERP Suite →</Link>
            <Link to="/ndt-erp-vs-generic-erp" className="text-blue-600 hover:underline">NDT ERP vs Generic ERP →</Link>
          </div>
        </div>
      </section>

      <ContactDetails />
    </div>
  );
}
