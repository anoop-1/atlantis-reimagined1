/**
 * /inspection section (2026-10-18): landing, NDT hub, advanced/conventional lists, service pages
 * and method pages. One model for both layers: src/data/inspection-section/index.mjs. The crawler
 * HTML (scripts/inspection-section-2026-10.mjs) renders the same pages, so the two layers say the
 * same thing. No prices, no client names.
 */
import { Link, useLocation } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import {
  ENQUIRY,
  INSPECTION_PAGES,
  inspectionPage,
  inspectionBreadcrumbs,
  inspectionSchema,
  listFor,
  type InspPage,
  type InspSection,
} from "@/data/inspection-section/index.mjs";

const LINK = "text-primary underline underline-offset-2 hover:no-underline";

function SectionBlock({ s }: { s: InspSection }) {
  const paras = Array.isArray(s.p) ? s.p : s.p ? [s.p] : [];
  return (
    <section id={s.id} className="mt-12 scroll-mt-24">
      <h2 className="text-2xl font-bold mb-4">{s.h}</h2>
      {paras.map((t, i) => (
        <p key={i} className="text-muted-foreground leading-relaxed mb-4">{t}</p>
      ))}
      {s.list && (
        <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
          {s.list.map((li) => <li key={li} className="leading-relaxed">{li}</li>)}
        </ul>
      )}
      {s.table && (
        <div className="overflow-x-auto rounded-lg border">
          <table className="w-full text-sm">
            <thead className="bg-muted">
              <tr>{s.table.head.map((c) => <th key={c} className="text-left p-3 font-semibold">{c}</th>)}</tr>
            </thead>
            <tbody>
              {s.table.rows.map((r) => (
                <tr key={r[0]} className="border-t align-top">
                  {r.map((c, i) => <td key={i} className="p-3">{c}</td>)}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
}

function Bullets({ id, h, items }: { id: string; h: string; items?: string[] }) {
  if (!items?.length) return null;
  return (
    <section id={id} className="mt-12 scroll-mt-24">
      <h2 className="text-2xl font-bold mb-4">{h}</h2>
      <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
        {items.map((x) => <li key={x}>{x}</li>)}
      </ul>
    </section>
  );
}

function PageBody({ page }: { page: InspPage }) {
  const crumbs = inspectionBreadcrumbs(page);
  const list = listFor(page);
  const kids =
    page.kind === "landing"
      ? []
      : INSPECTION_PAGES.filter((c) => c.parent === page.path && !(list || []).some((m) => m.href === c.path));
  return (
    <main className="container mx-auto max-w-5xl px-6 pt-24 pb-16">
      <nav aria-label="Breadcrumb" className="text-sm text-muted-foreground mb-6">
        <ol className="flex flex-wrap gap-1">
          {crumbs.map((c, i) => (
            <li key={c.path} className="flex items-center gap-1">
              {i > 0 && <span aria-hidden="true">/</span>}
              {i === crumbs.length - 1 ? <span>{c.label}</span> : <Link to={c.path} className="hover:underline">{c.label}</Link>}
            </li>
          ))}
        </ol>
      </nav>

      <header className={page.kind === "landing" ? "rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 p-8 md:p-12" : ""}>
        <p className="text-sm font-semibold uppercase tracking-wide text-primary mb-3">{page.eyebrow || "Inspection"}</p>
        <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-5">{page.h1}</h1>
        <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">{page.intro}</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link to={ENQUIRY} className="inline-flex items-center rounded-md bg-primary px-5 py-3 font-semibold text-primary-foreground hover:bg-primary/90">
            Request an inspection quote
          </Link>
          {page.kind === "landing" && (
            <Link to="#services" className="inline-flex items-center rounded-md border px-5 py-3 font-semibold hover:bg-muted">
              Explore services
            </Link>
          )}
        </div>
      </header>

      {page.highlights && (
        <section id="highlights" className="mt-10 grid gap-4 md:grid-cols-3">
          {page.highlights.map((x) => (
            <div key={x.h} className="rounded-xl border p-5">
              <h2 className="font-semibold mb-2">{x.h}</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">{x.p}</p>
            </div>
          ))}
        </section>
      )}

      {page.cards && (
        <section id="services" className="mt-12 scroll-mt-24">
          <h2 className="text-2xl font-bold mb-4">{page.kind === "landing" ? "Inspection services" : "Choose a service line"}</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {page.cards.map((c) => (
              <Link key={c.href} to={c.href} className="group rounded-xl border p-5 transition hover:border-primary hover:shadow-md">
                <h3 className="font-semibold text-lg group-hover:text-primary">{c.label} →</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{c.text}</p>
              </Link>
            ))}
          </div>
        </section>
      )}

      {list && (
        <section id="methods" className="mt-12 scroll-mt-24">
          <h2 className="text-2xl font-bold mb-4">{page.group === "advanced" ? "Advanced NDT methods" : "Conventional NDT methods"}</h2>
          <div className="overflow-x-auto rounded-lg border">
            <table className="w-full text-sm">
              <thead className="bg-muted">
                <tr><th className="text-left p-3">Method</th><th className="text-left p-3">What it is used for</th><th className="text-left p-3">Key codes</th></tr>
              </thead>
              <tbody>
                {list.map((m) => (
                  <tr key={m.href} className="border-t align-top">
                    <td className="p-3 font-medium"><Link to={m.href} className={LINK}>{m.label}</Link></td>
                    <td className="p-3 text-muted-foreground">{m.text}</td>
                    <td className="p-3 text-muted-foreground">{m.codes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )}

      {(page.sections || []).map((s) => <SectionBlock key={s.id} s={s} />)}
      <Bullets id="codes" h="Governing codes and standards" items={page.codes} />
      <Bullets id="deliverables" h="What you receive" items={page.deliverables} />
      <Bullets id="industries" h="Industries served" items={page.industries} />

      {page.faqs?.length ? (
        <section id="faq" className="mt-12 scroll-mt-24">
          <h2 className="text-2xl font-bold mb-4">Frequently asked questions</h2>
          {page.faqs.map((f) => (
            <div key={f.q} className="mb-5">
              <h3 className="font-semibold mb-1">{f.q}</h3>
              <p className="text-muted-foreground leading-relaxed">{f.a}</p>
            </div>
          ))}
        </section>
      ) : null}

      {kids.length > 0 && (
        <section id="subpages" className="mt-12">
          <h2 className="text-2xl font-bold mb-4">In this section</h2>
          <ul className="list-disc pl-6 space-y-2">
            {kids.map((c) => <li key={c.path}><Link to={c.path} className={LINK}>{c.navLabel}</Link></li>)}
          </ul>
        </section>
      )}

      {page.related?.length ? (
        <section id="related" className="mt-12">
          <h2 className="text-2xl font-bold mb-4">Related</h2>
          <ul className="list-disc pl-6 space-y-2">
            {page.related.map(([h, l]) => <li key={h}><Link to={h} className={LINK}>{l}</Link></li>)}
          </ul>
        </section>
      ) : null}

      <section id="enquire" className="mt-14 rounded-2xl bg-primary/5 p-8">
        <h2 className="text-2xl font-bold mb-3">Talk to an inspection engineer</h2>
        <p className="text-muted-foreground mb-5">
          Send the equipment list or drawings, the inspection you need and your timing. Quotes are prepared for each scope and region.
        </p>
        <Link to={ENQUIRY} className="inline-flex items-center rounded-md bg-primary px-5 py-3 font-semibold text-primary-foreground hover:bg-primary/90">
          Request an inspection quote
        </Link>
      </section>
    </main>
  );
}

export default function InspectionSection() {
  const { pathname } = useLocation();
  const page = inspectionPage(pathname) || inspectionPage("/inspection")!;
  return (
    <>
      <SEOHead
        title={page.title}
        description={page.description}
        canonical={`https://atlantisndt.com${page.path}`}
        structuredData={inspectionSchema(page)}
      />
      <Navigation />
      <PageBody page={page} />
    </>
  );
}
