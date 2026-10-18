import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import ContactDetails from "@/components/ContactDetails";
import EnquiryCaptureForm from "@/components/EnquiryCaptureForm";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, XCircle } from "lucide-react";
import owners from "@/data/software-owners-2026-10.json";
import wave16 from "@/data/ctr-wave16/software.json";
import { FOUNDER_ID, ORG_ID, SITE, founderPageNodes, faqPageNode } from "@/lib/founder-person";

/**
 * /ndt-inspection-software — product page (2026-10-18, software workstream).
 * ONE source: src/data/software-owners-2026-10.json. The crawler HTML is built from the same
 * object by scripts/software-owners-2026-10.mjs (last body writer for the path), in the same
 * order: H1, lead, CTAs, reviewed line, real screens, trailer, definition, facts at a glance,
 * what the software does, industries, scope boundary, two comparison tables, evaluation,
 * FAQ (the FAQPage is built from this list only), related reading, enquiry.
 * Title and description: src/data/ctr-wave16/software.json (the crawler <title>).
 */
type L = { href: string; label: string };
type Faq = { q: string; a: string; links?: string[][] };
const P = (owners as Record<string, any>)["/ndt-inspection-software"];
const META = (wave16 as Record<string, any>)["/ndt-inspection-software"];
const URL = `${SITE}${P.path}`;

/** "[text](/path)" markup and FAQ link phrases → React nodes (same output as the crawler). */
function Inline({ text, links }: { text: string; links?: string[][] }) {
  const parts: (string | JSX.Element)[] = [];
  let rest = text;
  const pairs = (links || []).slice();
  let k = 0;
  while (rest.length) {
    let best: { i: number; phrase: string; href: string } | null = null;
    for (const [phrase, href] of pairs) {
      const i = rest.indexOf(phrase);
      if (i >= 0 && (!best || i < best.i)) best = { i, phrase, href };
    }
    if (!best) { parts.push(rest); break; }
    if (best.i) parts.push(rest.slice(0, best.i));
    parts.push(<Link key={k++} to={best.href} className="text-blue-700 underline underline-offset-2 hover:text-blue-900">{best.phrase}</Link>);
    rest = rest.slice(best.i + best.phrase.length);
    pairs.splice(pairs.findIndex((x) => x[0] === best!.phrase), 1);
  }
  return <>{parts}</>;
}

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      "@id": `${URL}#software`,
      name: "Atlantis NDT ERP",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web browser; installable offline field app",
      url: URL,
      description: META.description,
      publisher: { "@id": ORG_ID },
      creator: { "@id": FOUNDER_ID },
    },
    ...founderPageNodes(P.path, META.title, `${URL}#software`).map((n: any) =>
      n["@type"] === "WebPage" ? { ...n, dateModified: P.reviewed.date } : n),
    faqPageNode(P.path, P.faq.map((f: Faq) => ({ q: f.q, a: f.a }))),
  ],
};

function Table({ t }: { t: any }) {
  return (
    <div className="mt-6 overflow-x-auto rounded-xl border border-slate-200 bg-white">
      <table className="w-full text-left text-sm">
        <caption className="sr-only">{t.caption}</caption>
        <thead className="bg-slate-100">
          <tr>{t.headers.map((h: string) => <th key={h} scope="col" className="px-4 py-3 font-semibold text-slate-900 align-top">{h}</th>)}</tr>
        </thead>
        <tbody>
          {t.rows.map((r: string[], i: number) => (
            <tr key={i} className="border-t border-slate-200 align-top">
              {r.map((c, j) => (j === 0
                ? <th key={j} scope="row" className="px-4 py-3 font-medium text-slate-900">{c}</th>
                : <td key={j} className="px-4 py-3 text-slate-700 leading-relaxed">{c}</td>))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function NdtInspectionSoftware() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation />
      <SEOHead title={META.title} description={META.description} canonical={URL} structuredData={structuredData} />
      <Breadcrumbs />

      <main>
        <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 text-white pt-24 pb-14">
          <div className="container mx-auto max-w-5xl px-6">
            <div className="text-blue-300 text-sm font-medium tracking-wide uppercase mb-4">{P.eyebrow}</div>
            <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-5">{P.h1}</h1>
            <p className="text-lg text-slate-100 leading-relaxed max-w-3xl">{P.lead}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              {P.ctas.map((c: L, i: number) => (
                <Link key={c.href} to={c.href}
                  className={i === 0
                    ? "inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-blue-500 hover:bg-blue-400 font-semibold transition"
                    : "inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-white/30 hover:bg-white/10 font-semibold transition"}>
                  {c.label}{i === 0 && <ArrowRight className="w-4 h-4" />}
                </Link>
              ))}
            </div>
            <p className="mt-6 text-sm text-slate-300" data-last-reviewed={P.reviewed.date}>{P.reviewed.text}</p>
          </div>
        </section>

        {/* Real screens (§53) and the trailer (§52) attach here, as in the crawler HTML. */}
        <div data-slot-anchor="shots" />
        <div data-slot-anchor="video" />

        <section className="py-12 bg-white" data-citation-block="answer" aria-label="Direct answer">
          <div className="container mx-auto max-w-4xl px-6">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">{P.answer.h2}</h2>
            <p className="text-lg text-slate-700 leading-relaxed">{P.answer.text}</p>
          </div>
        </section>

        <section className="py-12 bg-slate-50" id="at-a-glance">
          <div className="container mx-auto max-w-5xl px-6">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">{P.facts.h2}</h2>
            <p className="text-slate-700 mb-6">{P.facts.intro}</p>
            <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white">
              <table className="w-full text-left text-sm">
                <caption className="sr-only">{P.facts.h2}</caption>
                <thead className="bg-slate-100"><tr><th scope="col" className="px-4 py-3 font-semibold text-slate-900">Question</th><th scope="col" className="px-4 py-3 font-semibold text-slate-900">Answer</th></tr></thead>
                <tbody>
                  {P.facts.rows.map(([q, a, href]: string[]) => (
                    <tr key={q} className="border-t border-slate-200 align-top">
                      <th scope="row" className="px-4 py-3 font-medium text-slate-900">
                        <span className="inline-flex items-start gap-2">
                          {/^No\b/.test(a) ? <XCircle className="w-4 h-4 text-slate-500 mt-0.5 shrink-0" /> : <CheckCircle2 className="w-4 h-4 text-blue-600 mt-0.5 shrink-0" />}
                          <Link to={href} className="text-blue-800 hover:text-blue-950 underline-offset-2 hover:underline">{q}</Link>
                        </span>
                      </th>
                      <td className="px-4 py-3 text-slate-700 leading-relaxed">{a}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="py-14 bg-white" id="what-it-does">
          <div className="container mx-auto max-w-5xl px-6">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">{P.does.h2}</h2>
            <p className="text-slate-700 mb-8 max-w-4xl">{P.does.intro}</p>
            <div className="grid md:grid-cols-2 gap-6">
              {P.does.items.map((it: any) => (
                <div key={it.h3} className="rounded-xl border border-slate-200 bg-slate-50 p-6">
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{it.h3}</h3>
                  <p className="text-slate-700 leading-relaxed mb-3">{it.p}</p>
                  <Link to={it.link.href} className="inline-flex items-center gap-1 text-sm font-semibold text-blue-700 hover:text-blue-900">{it.link.label} <ArrowRight className="w-3.5 h-3.5" /></Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-14 bg-slate-50" id="industries">
          <div className="container mx-auto max-w-5xl px-6">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">{P.industries.h2}</h2>
            <p className="text-slate-700 mb-8">{P.industries.intro}</p>
            <div className="grid md:grid-cols-3 gap-5">
              {P.industries.items.map((it: any) => (
                <div key={it.href} className="rounded-xl border border-slate-200 bg-white p-5">
                  <h3 className="font-bold text-slate-900 mb-2"><Link to={it.href} className="text-blue-800 hover:text-blue-950 underline-offset-2 hover:underline">{it.label}</Link></h3>
                  <p className="text-sm text-slate-700 leading-relaxed">{it.p}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-14 bg-white" id={P.scope.id}>
          <div className="container mx-auto max-w-4xl px-6">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-5">{P.scope.h2}</h2>
            {P.scope.paragraphs.map((p: string, i: number) => <p key={i} className="text-slate-700 leading-relaxed mb-4">{p}</p>)}
          </div>
        </section>

        {P.tables.map((t: any, i: number) => (
          <section key={t.h2} className={i % 2 === 0 ? "py-14 bg-slate-50" : "py-14 bg-white"}>
            <div className="container mx-auto max-w-5xl px-6">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">{t.h2}</h2>
              <p className="text-slate-700 leading-relaxed max-w-4xl">{t.intro}</p>
              <Table t={t} />
            </div>
          </section>
        ))}

        <section className="py-14 bg-slate-50">
          <div className="container mx-auto max-w-4xl px-6">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-5">{P.evaluation.h2}</h2>
            <ul className="space-y-3">
              {P.evaluation.bullets.map((b: string) => (
                <li key={b} className="flex gap-3 text-slate-700 leading-relaxed"><CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" /><span>{b}</span></li>
              ))}
            </ul>
          </div>
        </section>

        <section className="py-14 bg-white" id="faq">
          <div className="container mx-auto max-w-4xl px-6">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">Frequently asked questions</h2>
            <div className="space-y-5">
              {P.faq.map((f: Faq) => (
                <div key={f.q}>
                  <h3 className="font-semibold text-slate-900 mb-1">{f.q}</h3>
                  <p className="text-slate-700 leading-relaxed"><Inline text={f.a} links={f.links} /></p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 bg-slate-50">
          <div className="container mx-auto max-w-5xl px-6">
            <h2 className="text-xl font-bold text-slate-900 mb-4">{P.related.h2}</h2>
            <ul className="flex flex-wrap gap-3">
              {P.related.links.map((r: L) => (
                <li key={r.href}><Link to={r.href} className="block px-4 py-2 rounded-lg bg-white border border-slate-200 text-slate-700 hover:border-blue-400 hover:text-blue-700 transition text-sm">{r.label}</Link></li>
              ))}
            </ul>
          </div>
        </section>

        <section className="py-14 bg-white" id="erp-enquiry">
          <div className="container mx-auto max-w-3xl px-6">
            <h2 className="text-2xl font-bold text-slate-900 mb-2">{P.enquiry.h2}</h2>
            <p className="text-slate-600 mb-6"><Inline text={P.enquiry.p} links={P.enquiry.links} /></p>
            <EnquiryCaptureForm variant="erp" />
          </div>
        </section>
      </main>

      <ContactDetails />
    </div>
  );
}
