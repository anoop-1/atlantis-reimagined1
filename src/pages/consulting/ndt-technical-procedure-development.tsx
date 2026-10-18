// NDT procedure development and review (consulting teardown 2026-10-18, CLAUDE.md §59).
// One source: src/data/consulting-release-2026-10-18.json (procedure). In production this path is
// published (src/lib/published-pages.ts), so visitors see the crawler <main> that
// scripts/consulting-release-2026-10-18.mjs renders from the same JSON; this component is the
// development view and renders the same content in the same order.
import { Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import PillarHubNav from "@/components/PillarHubNav";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import ContactDetails from "@/components/ContactDetails";
import CR from "@/data/consulting-release-2026-10-18.json";
import WAVE16 from "@/data/ctr-wave16/consulting.json";

const P = CR.procedure;
const META = (WAVE16 as Record<string, { title: string; description: string }>)[P.path];
const SITE = "https://atlantisndt.com";

/** **bold** and [text](/url), the same rules as the crawler module's md(). */
function Inline({ text }: { text: string }) {
  const parts = text.split(/(\*\*[^*]+\*\*|\[[^\]]+\]\([^)\s]+\))/);
  return (
    <>
      {parts.map((part, i) => {
        const b = part.match(/^\*\*([^*]+)\*\*$/);
        if (b) return <strong key={i}>{b[1]}</strong>;
        const l = part.match(/^\[([^\]]+)\]\(([^)\s]+)\)$/);
        if (l) return <Link key={i} to={l[2]} className="text-[#004aad] underline">{l[1]}</Link>;
        return part;
      })}
    </>
  );
}
const plain = (s: string) => s.replace(/\*\*([^*]+)\*\*/g, "$1").replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, "$1");

export default function NdtTechnicalProcedureDevelopment() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${SITE}${P.path}#service`,
        name: "NDT procedure development and review",
        serviceType: "NDT procedure writing, review and ASNT Level III approval",
        description: plain(P.intro[0]),
        url: `${SITE}${P.path}`,
        provider: { "@id": `${SITE}/#organization` },
        areaServed: [{ "@type": "Country", name: "United States" }, { "@type": "Country", name: "Canada" }],
      },
      {
        "@type": "FAQPage",
        "@id": `${SITE}${P.path}#faq`,
        mainEntity: P.faq.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: plain(f.a) } })),
      },
    ],
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation />
      <PillarHubNav active="consulting" />
      <SEOHead title={META?.title ?? P.h1} description={META?.description ?? plain(P.intro[0])} canonical={`${SITE}${P.path}`} structuredData={structuredData} />
      <Breadcrumbs />

      <main className="container mx-auto max-w-4xl px-6 py-12 text-slate-700 space-y-10">
        <header className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900">{P.h1}</h1>
          {P.intro.map((t) => <p key={t.slice(0, 40)} className="text-lg leading-relaxed"><Inline text={t} /></p>)}
        </header>

        {P.sections.map((s) => (
          <section key={s.id} id={s.id} className="space-y-3 scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900">{s.h2}</h2>
            {(s.p ?? []).map((t) => <p key={t.slice(0, 40)} className="leading-relaxed"><Inline text={t} /></p>)}
            {s.ul && <ul className="list-disc pl-6 space-y-2">{s.ul.map((t) => <li key={t.slice(0, 40)}><Inline text={t} /></li>)}</ul>}
            {s.ol && <ol className="list-decimal pl-6 space-y-2">{s.ol.map((t) => <li key={t.slice(0, 40)}><Inline text={t} /></li>)}</ol>}
            {s.table && (
              <div className="overflow-x-auto">
                <table className="w-full text-sm border">
                  <caption className="caption-top text-left pb-2 text-slate-500">{s.table.caption}</caption>
                  <thead><tr>{s.table.columns.map((c) => <th key={c} scope="col" className="border p-2 text-left bg-slate-100">{c}</th>)}</tr></thead>
                  <tbody>
                    {s.table.rows.map((r) => (
                      <tr key={r[0]}>{r.map((c, i) => (i === 0 ? <th key={i} scope="row" className="border p-2 text-left">{c}</th> : <td key={i} className="border p-2">{c}</td>))}</tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </section>
        ))}

        <section id="procedure-faq" className="space-y-4">
          <h2 className="text-2xl font-bold text-slate-900">Frequently asked questions</h2>
          {P.faq.map((f) => (
            <div key={f.q}>
              <h3 className="text-lg font-semibold text-slate-900 mb-1">{f.q}</h3>
              <p className="leading-relaxed"><Inline text={f.a} /></p>
            </div>
          ))}
        </section>

        <section id="procedure-enquiry" className="rounded-xl border bg-white p-6 space-y-3">
          <h2 className="text-2xl font-bold text-slate-900">{P.cta.h2}</h2>
          <p><Inline text={P.cta.p} /></p>
          <Link to={P.cta.href} className="inline-block rounded-md bg-[#004aad] px-5 py-2.5 text-white font-semibold">{P.cta.label}</Link>
        </section>

        <nav id="procedure-related" aria-label={P.related.h2}>
          <h2 className="text-2xl font-bold text-slate-900 mb-3">{P.related.h2}</h2>
          <ul className="list-disc pl-6 space-y-1">
            {P.related.links.map((l) => <li key={l.href}><Link to={l.href} className="text-[#004aad] underline">{l.label}</Link></li>)}
          </ul>
        </nav>
      </main>
      <ContactDetails />
    </div>
  );
}
