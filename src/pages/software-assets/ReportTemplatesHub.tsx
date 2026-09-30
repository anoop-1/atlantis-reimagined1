// /ndt-report-templates — hub for the NDT report template library (2026-09-29).
import { Link } from "react-router-dom";
import { FileText } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import ContactDetails from "@/components/ContactDetails";
import RichHtml from "@/components/software-assets/RichHtml";
import data from "@/data/software-assets/report-templates.json";

export default function ReportTemplatesHub() {
  const h = data.hub;
  return (
    <div className="min-h-screen pt-20">
      <Navigation />
      <SEOHead
        title={h.title}
        description={h.description}
        canonical={`https://atlantisndt.com${h.path}`}
        faq={h.faqs.map((f) => ({ question: f.q, answer: f.a }))}
      />
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "NDT Report Templates", href: h.path }]} />
      <section className="py-12 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <p className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full bg-primary/10 text-primary text-sm font-medium">
            <FileText className="w-4 h-4" /> Free downloads
          </p>
          <h1 className="text-3xl md:text-5xl font-bold mb-4">{h.h1}</h1>
          <p className="text-lg text-muted-foreground">{h.lead}</p>
        </div>
      </section>
      <section className="container mx-auto px-6 max-w-5xl py-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {data.methods.map((m) => (
            <Link key={m.slug} to={m.path} className="p-5 rounded-xl border bg-white hover:border-primary transition">
              <div className="text-sm font-semibold text-primary mb-1">{m.short}</div>
              <div className="font-semibold">{m.h1.replace(/ Template$/, "")}</div>
            </Link>
          ))}
        </div>
        <div className="max-w-4xl mx-auto">
          <RichHtml html={h.bodyHtml} />
        </div>
      </section>
      <ContactDetails />
    </div>
  );
}
