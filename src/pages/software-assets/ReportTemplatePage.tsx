// /ndt-report-templates/<method> — NDT report template pages (2026-09-29).
// Copy and HTML live in src/data/software-assets/report-templates.json, the
// same JSON scripts/software-assets-routes.mjs prerenders for crawlers.
import { Link } from "react-router-dom";
import { Download, FileText, Printer } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import ContactDetails from "@/components/ContactDetails";
import RichHtml from "@/components/software-assets/RichHtml";
import TemplateRequestForm from "@/components/software-assets/TemplateRequestForm";
import data from "@/data/software-assets/report-templates.json";

export default function ReportTemplatePage({ slug }: { slug: string }) {
  const m = data.methods.find((x) => x.slug === slug) ?? data.methods[0];
  const canonical = `https://atlantisndt.com${m.path}`;
  return (
    <div className="min-h-screen pt-20">
      <Navigation />
      <SEOHead
        title={m.title}
        description={m.description}
        canonical={canonical}
        faq={m.faqs.map((f) => ({ question: f.q, answer: f.a }))}
      />
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "NDT Report Templates", href: data.hub.path },
          { label: m.short, href: m.path },
        ]}
      />
      <section className="py-12 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="container mx-auto px-6 max-w-4xl">
          <p className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full bg-primary/10 text-primary text-sm font-medium">
            <FileText className="w-4 h-4" /> Free NDT report template
          </p>
          <h1 className="text-3xl md:text-5xl font-bold mb-4">{m.h1}</h1>
          <p className="text-lg text-muted-foreground mb-6">{m.lead}</p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a href={m.printUrl} target="_blank" rel="noopener" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg">
              <Printer className="w-4 h-4" /> Print / save as PDF
            </a>
            <a href={m.csvUrl} download className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-primary text-primary font-semibold rounded-lg">
              <Download className="w-4 h-4" /> Download CSV
            </a>
            <a href="#request-template" className="inline-flex items-center justify-center px-6 py-3 border border-primary text-primary font-semibold rounded-lg">
              Editable Word/Excel version
            </a>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 max-w-4xl py-10">
        <RichHtml html={m.bodyHtml} />
      </section>

      <TemplateRequestForm method={m.short} templateName={m.h1.replace(/ Template$/, " template")} />

      <section className="py-12 bg-muted/40 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-3">Stop retyping {m.short} reports</h2>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          Capture {m.short} reports offline in the field, review and approve them, and issue them in your own format with Atlantis NDT Reporting.
        </p>
        <Link
          to={`/contact?service=reporting&subject=${encodeURIComponent(`${m.short} report automation demo`)}`}
          data-cta-variant="report-template-footer"
          className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg"
        >
          See it with your own report
        </Link>
      </section>
      <ContactDetails />
    </div>
  );
}
