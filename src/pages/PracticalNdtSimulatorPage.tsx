/**
 * /practical-ndt/{slug} — Practical NDT method and workplace pages (2026-10-17, p17 practical).
 * One data file for both layers: src/data/practical-ndt-simulators-2026-10.mjs (copy, links, FAQ,
 * schema) with SNT-TC-1A hours from src/data/snt-tc-1a-hours.json. The crawler HTML is rendered
 * from the same model by scripts/practical-ndt-simulators-2026-10.mjs (pageBody), so the two
 * layers say the same thing in the same order. No prices, no Offer, no ratings.
 */
import { Link } from "react-router-dom";
import { ArrowRight, Gamepad2 } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import ContactDetails from "@/components/ContactDetails";
import EnquiryCaptureForm from "@/components/EnquiryCaptureForm";
import { SimInline } from "@/components/PracticalSimBlocks";
import HOURS from "@/data/snt-tc-1a-hours.json";
import { PAGE_BY_SLUG, pageModel, pageSchema, type SimBlock } from "@/data/practical-ndt-simulators-2026-10.mjs";

const LINK = "text-primary underline underline-offset-2 hover:no-underline";

function Block({ b }: { b: SimBlock }) {
  if (b.p) return <p className="leading-relaxed"><SimInline text={b.p} /></p>;
  if (b.ul) return <ul className="list-disc pl-6 space-y-2">{b.ul.map((x) => <li key={x} className="leading-relaxed"><SimInline text={x} /></li>)}</ul>;
  if (b.ol) return <ol className="list-decimal pl-6 space-y-2">{b.ol.map((x) => <li key={x} className="leading-relaxed"><SimInline text={x} /></li>)}</ol>;
  return null;
}

export default function PracticalNdtSimulatorPage({ slug }: { slug: string }) {
  const page = PAGE_BY_SLUG[slug];
  if (!page) return null;
  const m = pageModel(page, HOURS);
  const schema = pageSchema(m);

  return (
    <div className="min-h-screen pt-20">
      <Navigation />
      <SEOHead title={m.title} description={m.description} canonical={m.canonical} structuredData={schema} />
      <Breadcrumbs items={m.breadcrumbs.map(([href, label]) => ({ label, href }))} />

      <section className="py-14 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-5">
            <Gamepad2 className="w-4 h-4" /> Practical NDT
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-5 leading-tight">{m.h1}</h1>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            <SimInline text={m.intro} />
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              to={m.demo[0]}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg shadow hover:opacity-90 transition"
            >
              {m.demo[1]} <ArrowRight className="w-4 h-4" />
            </Link>
            {m.practise && (
              <Link
                to={m.practise[0]}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary/10 transition"
              >
                {m.practise[1]}
              </Link>
            )}
          </div>
        </div>
      </section>

      <main className="container mx-auto px-6 py-12 max-w-4xl space-y-10" data-practical-sim="2026-10">
        {m.sections.map((s) => (
          <section key={s.id} id={s.id} className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold">{s.h2}</h2>
            {s.body.map((b, i) => <Block key={i} b={b} />)}
          </section>
        ))}

        <section id="faq" className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold">Frequently asked questions</h2>
          {m.faq.map((f) => (
            <div key={f.q}>
              <h3 className="text-lg font-semibold mb-1">{f.q}</h3>
              <p className="text-muted-foreground leading-relaxed"><SimInline text={f.a} /></p>
            </div>
          ))}
        </section>

        <section id="next-steps" className="rounded-xl border border-primary/20 bg-card p-6">
          <h2 className="text-xl md:text-2xl font-bold mb-3">{m.linksHeading}</h2>
          <ul className="list-disc pl-6 space-y-1">
            {m.links.map(([href, label, note]) => (
              <li key={href}>
                <Link to={href} className={LINK}>{label}</Link>
                {note ? `: ${note}` : ""}
              </li>
            ))}
          </ul>
        </section>

        <p className="text-sm text-muted-foreground border-l-4 border-primary/40 pl-4">{m.closer}</p>
      </main>

      <div id="practical-ndt-enquiry">
        <EnquiryCaptureForm variant="practical-ndt" />
      </div>
      <ContactDetails />
    </div>
  );
}
