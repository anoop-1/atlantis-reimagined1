// /asnt-level-iii-training cost + exam-preparation sections (2026-10-18, training.md §5.3).
// Same data as the crawler block (scripts/level3-training-2026-10.mjs): src/data/level3-training-2026-10.json,
// ASNT exam formats and fees from src/data/asnt-certification-2026-10.json, and the Atlantis refresher fees
// only through the path-driven <ApprovedTrainingFees /> (approved-training-fees.json). No amount typed here.
import { Link } from "react-router-dom";
import LEVEL3 from "@/data/level3-training-2026-10.json";
import ASNT from "@/data/asnt-certification-2026-10.json";
import ApprovedTrainingFees from "@/components/ApprovedTrainingFees";

const linkClass = "text-primary underline underline-offset-2";

export default function Level3CostPrepBlock() {
  const fees = ASNT.fees.tables.find((t) => /Level III/.test(t.caption));
  const exams = ASNT.level3.exams.map((e) => [e.label, String(e.items), `${e.hours} hours`]);
  return (
    <section data-level3-cost-prep className="py-16" aria-labelledby="level3-cost">
      <div className="container mx-auto max-w-4xl px-6">
        <h2 id="level3-cost" className="text-3xl font-bold mb-4">{LEVEL3.cost.h2}</h2>
        {LEVEL3.cost.paras.map((p) => <p key={p} className="text-muted-foreground mb-4">{p}</p>)}
      </div>
      <ApprovedTrainingFees />
      <div className="container mx-auto max-w-4xl px-6">
        {fees && (
          <>
            <h3 className="text-xl font-semibold mt-6 mb-3">{LEVEL3.cost.asntH3}</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border">
                <caption className="text-left p-2 font-medium">{fees.caption}</caption>
                <thead><tr>{ASNT.fees.head.map((h) => <th key={h} scope="col" className="text-left p-2 border-b">{h}</th>)}</tr></thead>
                <tbody>{fees.rows.map((r) => <tr key={r[0]}><th scope="row" className="text-left p-2 font-medium">{r[0]}</th><td className="p-2">{r[1]}</td><td className="p-2">{r[2]}</td></tr>)}</tbody>
              </table>
            </div>
            <p className="text-muted-foreground mt-3">
              Source: <a href={fees.url} rel="noopener" className={linkClass}>{fees.urlLabel}</a>. {LEVEL3.cost.salaryNote}{" "}
              <Link to="/ndt-level-3-salary" className={linkClass}>NDT Level 3 salary</Link>.
            </p>
          </>
        )}
        {LEVEL3.faq.map(([q, a]) => (
          <div key={q} className="mt-6">
            <h3 className="text-lg font-bold mb-2">{q}</h3>
            <p className="text-muted-foreground">{a}</p>
          </div>
        ))}
        <h2 id="level3-prep" className="text-3xl font-bold mt-12 mb-4">{LEVEL3.prep.h2}</h2>
        <p className="text-muted-foreground mb-4">{LEVEL3.prep.intro}</p>
        <ol className="list-decimal pl-6 space-y-2 text-muted-foreground">
          {LEVEL3.prep.domains.map(([t, d]) => <li key={t}><strong className="text-foreground">{t}.</strong> {d}</li>)}
        </ol>
        <p className="text-muted-foreground mt-6 mb-3">{LEVEL3.prep.examsLead}</p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border">
            <caption className="text-left p-2 font-medium">{ASNT.level3.examsCaption}</caption>
            <thead><tr>{ASNT.level3.examsHead.map((h) => <th key={h} scope="col" className="text-left p-2 border-b">{h}</th>)}</tr></thead>
            <tbody>{exams.map((r) => <tr key={r[0]}><th scope="row" className="text-left p-2 font-medium">{r[0]}</th><td className="p-2">{r[1]}</td><td className="p-2">{r[2]}</td></tr>)}</tbody>
          </table>
        </div>
        <p className="text-muted-foreground mt-4" dangerouslySetInnerHTML={{ __html: LEVEL3.prep.after }} />
      </div>
    </section>
  );
}
