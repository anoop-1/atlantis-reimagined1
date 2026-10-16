// Global training upgrade block (2026-10-16). Mounted once in App.tsx and portalled into
// the page's <main> (useMainSlot, slot "training:"), where the crawler HTML puts the same
// block. Content: src/data/training-upgrade-2026-10.json resolved by
// src/data/training-upgrade-2026-10.mjs, the same resolver scripts/training-upgrade-2026-10.mjs
// renders for crawlers; hours from src/data/snt-tc-1a-hours.json in both layers.
// Pages marked react:false (the six method training pages, which have no React route of
// their own) and published pages show the crawler copy, which already carries the block.
import { createPortal } from "react-dom";
import { Link, useLocation } from "react-router-dom";
import data from "@/data/training-upgrade-2026-10.json";
import hours from "@/data/snt-tc-1a-hours.json";
import { trainingUpgradeFor } from "@/data/training-upgrade-2026-10.mjs";
import { usesPublishedContent } from "@/lib/published-pages";
import { useMainSlot } from "@/lib/use-main-slot";

const CRAWLER_MARKER = '[data-training-upgrade="2026-10"]';
const linkClass = "text-primary underline underline-offset-4 hover:text-primary/80";

function A({ href, label }: { href: string; label: string }) {
  return /^https?:\/\//.test(href)
    ? <a href={href} rel="noopener" target="_blank" className={linkClass}>{label}</a>
    : <Link to={href} className={linkClass}>{label}</Link>;
}

const H2 = ({ children }: { children: string }) => <h2 className="text-2xl md:text-3xl font-bold mt-10 mb-4">{children}</h2>;
const H3 = ({ children }: { children: string }) => <h3 className="text-lg font-semibold mt-6 mb-2">{children}</h3>;
const List = ({ items }: { items: string[] }) => (
  <ul className="list-disc pl-6 space-y-1 text-muted-foreground">{items.map((i) => <li key={i}>{i}</li>)}</ul>
);

export default function TrainingUpgradeBlock() {
  const { pathname } = useLocation();
  const path = pathname.replace(/\/$/, "") || "/";
  const b = trainingUpgradeFor(path, data, hours);
  const active = Boolean(b && b.react) && (import.meta.env.DEV || !usesPublishedContent(path));
  const slot = useMainSlot(`training:${path}`, active);
  if (!b || !active) return null;
  // A prerendered fallback page (PrerenderedPage) already carries the crawler block.
  if (typeof document !== "undefined" && document.getElementById("root")?.querySelector(CRAWLER_MARKER)) return null;
  const m = b.method;
  const block = (
    <section className="container mx-auto max-w-4xl px-6 py-10" data-training-upgrade-react="2026-10" aria-label="Training details">
      {m && (
        <>
          <H2>{m.topicsH2}</H2>
          <List items={m.topics} />
          <H2>{m.hoursH2}</H2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <caption className="caption-bottom text-xs text-muted-foreground mt-2 text-left">{m.hoursCaption}</caption>
              <thead>
                <tr className="bg-primary/10">
                  {m.hoursHead.map((h) => <th key={h} scope="col" className="text-left p-3 font-semibold border border-border">{h}</th>)}
                </tr>
              </thead>
              <tbody>
                {m.hoursRows.map(([lvl, c, o]) => (
                  <tr key={lvl}>
                    <th scope="row" className="text-left p-3 font-medium border border-border">{lvl}</th>
                    <td className="p-3 border border-border">{c}</td>
                    <td className="p-3 border border-border">{o}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <H2>{m.checksH2}</H2>
          <p className="text-muted-foreground mb-3">{m.checksIntro}</p>
          <List items={m.checks} />
        </>
      )}

      <H2>{b.who.h2}</H2>
      <p className="text-base md:text-lg text-muted-foreground mb-2">{b.who.intro}</p>
      <div className="grid md:grid-cols-3 gap-6">
        {b.who.columns.map((c) => (
          <div key={c.h3}>
            <H3>{c.h3}</H3>
            <List items={c.items} />
            {c.link && <p className="mt-3"><A href={c.link[0]} label={c.link[1]} /></p>}
          </div>
        ))}
      </div>
      <p className="mt-6 font-medium">{b.who.closing}</p>

      <H2>{b.practical.h2}</H2>
      <p className="text-muted-foreground mb-3">{b.practical.intro}</p>
      <ol className="list-decimal pl-6 space-y-2">
        {b.practical.steps.map(([t, x]) => <li key={t}><strong>{t}.</strong> {x}</li>)}
      </ol>
      <div className="grid md:grid-cols-2 gap-6">
        <div><H3>{b.practical.trains.h3}</H3><List items={b.practical.trains.items} /></div>
        <div><H3>{b.practical.cannot.h3}</H3><List items={b.practical.cannot.items} /></div>
      </div>
      <p className="mt-4 text-muted-foreground">{b.practical.note}</p>
      <p className="mt-3 flex flex-wrap gap-x-4 gap-y-1">
        {b.practical.links.map(([href, label]) => <A key={href} href={href} label={label} />)}
      </p>

      <H2>{b.instructor.h2}</H2>
      <p className="mb-2">{b.instructor.lead} <A href={b.instructor.authorLink[0]} label={b.instructor.authorLink[1]} />.</p>
      <p className="text-muted-foreground">{b.instructor.verify} <A href={b.instructor.verifyLink[0]} label={b.instructor.verifyLink[1]} />.</p>
      {b.instructor.note && <p className="mt-2 text-muted-foreground">{b.instructor.note}</p>}

      {m && (
        <>
          <H2>{m.linksH2}</H2>
          <ul className="list-disc pl-6 space-y-1">
            {m.links.map(([href, label]) => <li key={href}><A href={href} label={label} /></li>)}
          </ul>
        </>
      )}
    </section>
  );
  return slot ? createPortal(block, slot) : block;
}
