/**
 * /ndt-training-faq — questions prospects and students actually asked (owner, 2026-10-18).
 * One model for both layers: src/data/training-conversion-2026-10.json, rendered for the
 * crawler by faqPageHtml() in src/data/training-conversion-2026-10.mjs. FAQPage schema is
 * built from the same visible Q&A. No prices: the portal shows the fee for each country.
 */
import { Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import { TrainingCtaBarView } from "@/components/TrainingCtaBar";
import data from "@/data/training-conversion-2026-10.json";
import { ELIGIBILITY_PATH, faqPageSchema, type TrainingConversion } from "@/data/training-conversion-2026-10.mjs";

const DATA = data as unknown as TrainingConversion;
const F = DATA.faq;
const SCHEMA = faqPageSchema(DATA);
const LINK = "text-primary underline underline-offset-2 hover:no-underline";

export default function NdtTrainingFaq() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <SEOHead title={F.title} description={F.description} canonical={`https://atlantisndt.com${F.path}`} structuredData={SCHEMA} />
      <main className="container mx-auto max-w-4xl px-6 pt-24 pb-16">
        <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-4">{F.h1}</h1>
        <p data-training-faq="2026-10" className="text-lg text-muted-foreground mb-2 leading-relaxed">{F.answer}</p>
        <TrainingCtaBarView path={F.path} />

        <section id="course-includes" aria-label={DATA.includes.h2} className="mb-12 rounded-xl border bg-card p-6">
          <h2 className="text-2xl font-bold mb-2">{DATA.includes.h2}</h2>
          <p className="text-muted-foreground mb-4">{DATA.includes.intro}</p>
          <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2 list-disc pl-6">
            {DATA.includes.items.map((x) => <li key={x}>{x}</li>)}
          </ul>
        </section>

        {F.sections.map((s) => (
          <section key={s.id} id={s.id} aria-label={s.h2} className="mb-10">
            <h2 className="text-2xl font-bold mb-4">{s.h2}</h2>
            {s.items.map(([q, a]) => (
              <div key={q} className="mb-5">
                <h3 className="text-lg font-semibold mb-1">{q}</h3>
                <p className="text-muted-foreground leading-relaxed">{a}</p>
              </div>
            ))}
          </section>
        ))}

        <p className="mt-8 leading-relaxed">
          <Link to={F.callHref} className={`font-semibold ${LINK}`}>{F.callLabel}</Link> ·{" "}
          <Link to={ELIGIBILITY_PATH} className={LINK}>Check your SNT-TC-1A eligibility</Link> ·{" "}
          <Link to="/training" className={LINK}>All NDT training</Link> ·{" "}
          <Link to="/ndt-practice-tests" className={LINK}>Free NDT practice tests</Link>
        </p>
      </main>
    </div>
  );
}
