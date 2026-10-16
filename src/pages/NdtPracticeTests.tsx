/**
 * /ndt-practice-tests — NDT practice-test hub (2026-10-16).
 * One model for both layers: practiceHubModel() in src/data/practice-tests/index.mjs builds the
 * copy, cards and links from the set files in src/data/practice-tests/*.json. The crawler HTML
 * (scripts/practice-tests-2026-10.mjs → practiceHubHtml) renders the same model, so the two
 * layers say the same thing. No prices, no FAQ schema (the page has no FAQ).
 */
import { Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import {
  practiceHubModel,
  practiceHubSchema,
  cardLabel,
  cardText,
  linkNoteText,
  type PracticeSet,
  type HubLink,
} from "@/data/practice-tests/index.mjs";

// Same file set the build reads (scripts/practice-tests-2026-10.mjs: <method>-level-<n>.json).
const SET_FILES = import.meta.glob("../data/practice-tests/*-level-*.json", { eager: true, import: "default" }) as Record<string, PracticeSet>;
const MODEL = practiceHubModel(Object.values(SET_FILES));
const SCHEMA = practiceHubSchema(MODEL);

const LINK = "text-primary underline underline-offset-2 hover:no-underline";

function LinkList({ links }: { links: HubLink[] }) {
  return (
    <ul className="list-disc pl-6 space-y-2">
      {links.map(([href, label, note]) => (
        <li key={href} className="leading-relaxed">
          <Link to={href} className={LINK}>{label}</Link>
          {linkNoteText(note)}
        </li>
      ))}
    </ul>
  );
}

export default function NdtPracticeTests() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <SEOHead title={MODEL.title} description={MODEL.description} canonical={MODEL.canonical} structuredData={SCHEMA} />
      <main className="container mx-auto max-w-4xl px-6 pt-24 pb-16">
        <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-4">{MODEL.h1}</h1>
        <p data-practice-hub="2026-10" className="text-lg text-muted-foreground mb-10 leading-relaxed">{MODEL.answer}</p>

        <section id="sets" aria-label={MODEL.cardsHeading} className="mb-12">
          <h2 className="text-2xl font-bold mb-2">{MODEL.cardsHeading}</h2>
          <p className="text-muted-foreground mb-5">{MODEL.cardsIntro}</p>
          <ul className="grid gap-4 sm:grid-cols-2">
            {MODEL.cards.map((c) => (
              <li key={c.id} className="rounded-xl border border-border bg-card p-5">
                <Link to={c.href} className={`font-semibold ${LINK}`}>{cardLabel(c)}</Link>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{cardText(c)}</p>
              </li>
            ))}
          </ul>
        </section>

        {MODEL.sections.map((s) => (
          <section key={s.id} id={s.id} aria-label={s.h} className="mb-10">
            <h2 className="text-2xl font-bold mb-3">{s.h}</h2>
            {s.p && <p className="mb-4 leading-relaxed">{s.p}</p>}
            {s.list && (
              <ul className="list-disc pl-6 space-y-2 mb-4">
                {s.list.map((x) => <li key={x} className="leading-relaxed">{x}</li>)}
              </ul>
            )}
            {s.links && <LinkList links={s.links} />}
            {s.cta && (
              <p className="mt-5 leading-relaxed">
                <Link to={s.cta[0]} className={`font-semibold ${LINK}`}>{s.cta[1]}</Link> {s.cta[2]}
              </p>
            )}
          </section>
        ))}
      </main>
    </div>
  );
}
