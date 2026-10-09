/**
 * Level III consulting paths — 2026-10-09 sprint (Day 5).
 * Four structured paths (written practice, procedures, qualification and
 * certification programmes, audits and ongoing Level III support), each with what
 * you get and what we need, and a short form with the path preselected. Accepted
 * submissions fire level3_consulting_enquiry centrally. Content:
 * src/data/sprint-funnels.json (mirrored for crawlers by scripts/sprint-2026-10.mjs).
 */
import { useState } from "react";
import data from "@/data/sprint-funnels.json";
import DemoRequestForm from "@/components/sprint/DemoRequestForm";
import { trackEngagement } from "@/lib/enquiry-analytics";

export default function Level3Paths() {
  const l = data.level3;
  const [path, setPath] = useState("");
  return (
    <section id={l.id} className="py-16 scroll-mt-24" aria-labelledby={`${l.id}-h`}>
      <div className="container mx-auto px-6 max-w-6xl">
        <h2 id={`${l.id}-h`} className="text-3xl md:text-4xl font-bold mb-3 text-center">{l.heading}</h2>
        <p className="text-lg text-muted-foreground mb-10 text-center max-w-3xl mx-auto">{l.intro}</p>
        <div className="grid md:grid-cols-2 gap-6">
          {l.paths.map((p) => (
            <div key={p.key} className={`rounded-xl border-2 bg-card p-6 flex flex-col ${path === p.option ? "border-primary" : "border-border"}`}>
              <h3 className="text-xl font-bold mb-2">{p.h}</h3>
              <p className="text-sm text-muted-foreground mb-4">{p.p}</p>
              <div className="grid sm:grid-cols-2 gap-4 text-sm flex-1">
                <div>
                  <p className="font-semibold mb-1">You get</p>
                  <ul className="list-disc pl-5 space-y-1 text-muted-foreground">{p.get.map((x) => <li key={x}>{x}</li>)}</ul>
                </div>
                <div>
                  <p className="font-semibold mb-1">We need from you</p>
                  <ul className="list-disc pl-5 space-y-1 text-muted-foreground">{p.need.map((x) => <li key={x}>{x}</li>)}</ul>
                </div>
              </div>
              <button
                type="button"
                onClick={() => { setPath(p.option); trackEngagement("level3_path_select", { path: p.key }); }}
                className="mt-5 rounded-lg bg-primary px-5 py-3 font-semibold text-primary-foreground hover:opacity-90"
              >
                Start with {p.h.toLowerCase()}
              </button>
            </div>
          ))}
        </div>
        <p className="text-center text-sm mt-6">
          Want the full detail first? <a className="text-primary underline" href={l.detailHref}>Every Level III engagement, set out separately</a>.
        </p>
        {path && (
          <div className="mt-8 max-w-2xl mx-auto">
            <DemoRequestForm
              key={path}
              formId="level3-paths"
              service="consulting"
              businessLine="consulting"
              leadType="level3_consultation"
              subject={`Level III consulting enquiry: ${path}`}
              heading="Tell us about your Level III need"
              intro="A short note on methods, the governing document and any deadline is enough to start."
              submitLabel="Send my Level III enquiry"
              choice={{ name: "level3_path", label: "Which path?", choices: l.paths.map((p) => p.option) }}
              defaultChoice={path}
              stages={["Audit or deadline within 30 days", "Within this quarter", "No fixed date"]}
              stageLabel="Deadline"
              selects={[{ name: "standard", label: "Governing document", choices: ["SNT-TC-1A", "ANSI/ASNT CP-189", "NAS 410 / EN 4179", "ISO 9712", "Customer specification", "Not sure"] }]}
            />
          </div>
        )}
      </div>
    </section>
  );
}
