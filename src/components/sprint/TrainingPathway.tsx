/**
 * Training funnel — 2026-10-09 sprint (Day 5).
 * Training vs exam vs certification, prerequisites, what decides the quote (no
 * prices), the enquiry-to-enrolment steps and a short form. Choosing "Ready to
 * enrol" makes the accepted enquiry a training_enrolment; anything else is a
 * training_enquiry. "Anything that could stop you" records lost-lead reasons at
 * enquiry time. Content: src/data/sprint-funnels.json (mirrored for crawlers by
 * scripts/sprint-2026-10.mjs).
 */
import data from "@/data/sprint-funnels.json";
import DemoRequestForm from "@/components/sprint/DemoRequestForm";
import { MS_FORM_URL } from "@/lib/enquiry-endpoint";

export default function TrainingPathway() {
  const t = data.training;
  return (
    <section id={t.id} className="py-16 bg-secondary/30 scroll-mt-24" aria-labelledby={`${t.id}-h`}>
      <div className="container mx-auto px-6 max-w-6xl">
        <h2 id={`${t.id}-h`} className="text-3xl md:text-4xl font-bold mb-3 text-center">{t.heading}</h2>
        <p className="text-lg text-muted-foreground mb-10 text-center max-w-3xl mx-auto">{t.intro}</p>
        <div className="grid md:grid-cols-3 gap-6">
          {t.stages.map((s, i) => (
            <div key={s.h} className="rounded-xl border bg-card p-6">
              <p className="text-sm font-semibold text-primary mb-1">Step {i + 1}</p>
              <h3 className="text-xl font-bold mb-2">{s.h}</h3>
              <p className="text-sm text-muted-foreground mb-3">{s.p}</p>
              <p className="text-sm"><span className="font-semibold">From Atlantis:</span> {s.you}</p>
            </div>
          ))}
        </div>
        <div className="grid lg:grid-cols-2 gap-8 mt-10">
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold mb-3">{t.prereqHeading}</h3>
              <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground">
                {t.prereqs.map((x) => <li key={x}>{x}</li>)}
              </ul>
              <p className="text-sm mt-2">
                No written practice yet? <a className="text-primary underline" href="/consulting#level3-paths">See written-practice support</a>.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-3">{t.quoteHeading}</h3>
              <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                {t.quote.map((x) => <li key={x}>{x}</li>)}
              </ul>
              <p className="text-sm mt-2">{t.quoteNote}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-3">{t.flowHeading}</h3>
              <ol className="space-y-2">
                {t.flow.map((f, i) => (
                  <li key={f.h} className="flex gap-3 text-sm">
                    <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">{i + 1}</span>
                    <span><span className="font-semibold">{f.h}.</span> <span className="text-muted-foreground">{f.p}</span></span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
          <DemoRequestForm
            formId="training-pathway"
            service="training"
            businessLine="training"
            leadType="training_enquiry"
            subject="Training enquiry (pathway)"
            heading={t.formHeading}
            intro="Methods, levels and dates in the message help us quote first time."
            submitLabel="Send my training enquiry"
            choice={{ name: "goal", label: "What do you need?", choices: t.goals }}
            stages={t.stagesOptions}
            stageLabel="Where are you in the process?"
            stageLeadType={{ match: /ready to enrol/i, leadType: "training_enrolment" }}
            selects={[{ name: "blocker", label: "Anything that could stop you going ahead?", choices: t.blockers }]}
            successText="We reply within one business day. To speed up the quote, complete the short enrolment and requirements form now: methods, levels, headcount and timing."
            successLink={{ href: MS_FORM_URL, label: "Complete the enrolment form", external: true }}
          />
        </div>
      </div>
    </section>
  );
}
