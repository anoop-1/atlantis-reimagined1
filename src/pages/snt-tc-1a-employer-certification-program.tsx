// /snt-tc-1a-employer-certification-program — 2026-09-29.
// Content lives in src/data/snt-tc-1a-employer-program.json; the prerender
// (scripts/training-na.mjs) builds the crawler HTML from the same file.
import { Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import ContactDetails from "@/components/ContactDetails";
import NaTrainingNationwide from "@/components/NaTrainingNationwide";
import { msFormLinkProps } from "@/lib/enquiry-endpoint";
import { naCourseSchema } from "@/lib/na-training";
import data from "@/data/snt-tc-1a-employer-program.json";

const URL = `https://atlantisndt.com${data.path}`;
const strip = (s: string) => s.replace(/<[^>]+>/g, "");

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": `${URL}#service`,
      name: "SNT-TC-1A Certification Programme for NDT Companies",
      serviceType: "Employer NDT personnel qualification and certification programme (ASNT SNT-TC-1A)",
      provider: { "@type": "Organization", name: "Atlantis NDT", url: "https://atlantisndt.com" },
      areaServed: [{ "@type": "Country", name: "United States" }, { "@type": "Country", name: "Canada" }],
      url: URL,
      description: data.description,
    },
    naCourseSchema(URL, "Employer SNT-TC-1A Level I and II training and certification programme", "Written practice, method training, general/specific/practical examinations, OJT logging and certification records for an NDT company crew, under ASNT Level III oversight."),
    {
      "@type": "FAQPage",
      mainEntity: data.faqs.map((f) => ({ "@type": "Question", name: strip(f.q), acceptedAnswer: { "@type": "Answer", text: strip(f.a) } })),
    },
  ],
};

export default function SntTc1aEmployerCertificationProgram() {
  return (
    <div className="min-h-screen pt-20">
      <Navigation />
      <SEOHead title={data.title} description={data.description} canonical={URL} structuredData={structuredData} />
      <Breadcrumbs />
      <main>
        <section className="py-16 bg-gradient-to-r from-primary/10 to-accent/10">
          <div className="container mx-auto max-w-4xl px-6">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{data.h1}</h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">{data.intro}</p>
            <div className="flex flex-wrap gap-3">
              <a {...msFormLinkProps} href={`${msFormLinkProps.href}&path=company`} className="bg-primary text-primary-foreground px-5 py-3 rounded-md font-semibold">
                Request a programme quote
              </a>
              <Link to="/contact?service=training&subject=SNT-TC-1A%20employer%20programme" className="border px-5 py-3 rounded-md font-semibold">
                Talk to an ASNT Level III
              </Link>
            </div>
            <p className="text-sm text-muted-foreground mt-3">Quote within one business day. No published prices.</p>
          </div>
        </section>
        <section className="py-12">
          <div className="container mx-auto max-w-4xl px-6 prose prose-lg max-w-none prose-a:text-primary">
            {data.sections.map((s) => (
              <div key={s.h2}>
                <h2>{s.h2}</h2>
                <div dangerouslySetInnerHTML={{ __html: s.html }} />
              </div>
            ))}
            <h2>Frequently asked questions</h2>
            {data.faqs.map((f) => (
              <div key={f.q}>
                <h3>{f.q}</h3>
                <p dangerouslySetInnerHTML={{ __html: f.a }} />
              </div>
            ))}
          </div>
        </section>
        <NaTrainingNationwide />
      </main>
      <ContactDetails />
    </div>
  );
}
