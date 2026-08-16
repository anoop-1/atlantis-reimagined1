/**
 * ConsultingIndustryPage — data-driven renderer for the five consulting ×
 * industry nationals (Phase C, 2026-08-16). Data shared with the prerender
 * generator via src/data/consulting-industry-matrix.mjs — no two-layer drift.
 * §18 no pricing · §24.2 mobilised model stated on every page.
 */
import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import ContactDetails from "@/components/ContactDetails";
import EnquiryCaptureForm from "@/components/EnquiryCaptureForm";
import { Link } from "react-router-dom";
import { ShieldCheck, MapPin, ArrowRight } from "lucide-react";
// @ts-ignore — .mjs data module shared with the prerender layer
import { CONSULTING_INDUSTRIES, CONSULTING_MODEL_NOTE } from "@/data/consulting-industry-matrix.mjs";

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="text-2xl md:text-3xl font-bold mb-4">{title}</h2>
      <div className="text-muted-foreground space-y-4">{children}</div>
    </section>
  );
}

export default function ConsultingIndustryPage({ slug }: { slug: string }) {
  const c = CONSULTING_INDUSTRIES[slug];
  if (!c) return null;
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title={`${c.title} | Atlantis NDT`}
        description={c.desc}
        canonicalUrl={`https://atlantisndt.com/consulting/${slug}-ndt-consulting`}
      />
      <Navigation />
      <Breadcrumbs items={[{ label: "Consulting", href: "/consulting" }, { label: `${c.name} NDT Consulting` }]} />
      <section className="bg-gradient-to-br from-[#003366] to-[#004aad] text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold mb-6">{c.h1}</h1>
          <p className="text-lg text-white/90 max-w-3xl">{c.problem}</p>
        </div>
      </section>
      <main className="max-w-4xl mx-auto px-4 py-12 space-y-12">
        <Section title={`What a ${c.name.toLowerCase()} engagement delivers`}>
          <p dangerouslySetInnerHTML={{ __html: c.delivers }} />
        </Section>
        <Section title="The damage mechanisms the programme is built around"><p>{c.mechanisms}</p></Section>
        <Section title="The governing regime"><p>{c.regime}</p></Section>
        <section className="border-l-4 border-[#004aad] bg-muted/40 p-5 rounded-r-lg">
          <div className="flex items-start gap-3">
            <ShieldCheck className="w-6 h-6 text-[#004aad] shrink-0 mt-1" />
            <p className="text-muted-foreground">
              {CONSULTING_MODEL_NOTE} The general engagement structure is set out on{" "}
              <Link className="text-[#004aad] hover:underline" to="/consulting/ndt-consulting-level-iii">ASNT Level III consulting</Link>;
              this page covers how it lands in {c.name.toLowerCase()} work specifically.
            </p>
          </div>
        </section>
        <Section title="Markets where the sector's examination base is documented">
          <ul className="grid sm:grid-cols-2 gap-3">
            {c.markets.map(([href, label]: [string, string]) => (
              <li key={href}>
                <Link to={href} className="text-[#004aad] hover:underline inline-flex items-center gap-1">
                  <MapPin className="w-4 h-4" /> {label} <ArrowRight className="w-4 h-4" />
                </Link>
              </li>
            ))}
          </ul>
        </Section>
        <Section title="Related">
          <p>
            {c.related.map(([href, label]: [string, string], i: number) => (
              <span key={href}>
                {i > 0 && " · "}
                <Link className="text-[#004aad] hover:underline" to={href}>{label}</Link>
              </span>
            ))}
            {" · "}
            <Link className="text-[#004aad] hover:underline" to="/consulting">the consulting practice</Link>
          </p>
          <EnquiryCaptureForm variant="consulting" />
        </Section>
      </main>
      <ContactDetails />
    </div>
  );
}
