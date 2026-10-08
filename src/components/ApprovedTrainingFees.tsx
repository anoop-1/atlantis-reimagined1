// Published training fee table (CLAUDE.md §18, revised 2026-10-07).
// Path-driven: renders ONLY on pages listed in src/data/approved-training-fees.json
// for a region, and never on an India page. Safe to place in shared templates.
// The crawler layer emits the same table from the same JSON (scripts/approved-pricing.mjs).
import { Link, useLocation } from "react-router-dom";
import { TRAINING_FEES, fmtMoney, trainingRegionForPath } from "@/lib/approved-pricing";

export default function ApprovedTrainingFees({ className = "" }: { className?: string }) {
  const { pathname } = useLocation();
  const key = trainingRegionForPath(pathname);
  if (!key) return null;
  const r = TRAINING_FEES.regions[key];
  const others = Object.entries(TRAINING_FEES.otherRegionLinks).filter(([k]) => k !== key);

  return (
    <section id="training-fees" data-approved-training-fees={key} aria-labelledby="training-fees-h" className={`container mx-auto px-6 max-w-5xl py-12 ${className}`}>
      <h2 id="training-fees-h" className="text-2xl md:text-3xl font-bold mb-3">{r.heading}</h2>
      <p className="text-muted-foreground mb-6">{r.intro}</p>
      <div className="space-y-6">
        {r.tables.map((t) => (
          <div key={t.caption} className="overflow-x-auto rounded-xl border bg-card">
            <table className="w-full text-sm">
              <caption className="text-left font-semibold p-3">{t.caption}</caption>
              <thead className="bg-muted/50">
                <tr>
                  {t.columns.map((c) => (
                    <th key={c} scope="col" className="text-left p-3 border-t">{c}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {t.rows.map((row, ri) => (
                  <tr key={ri} className="border-t">
                    {row.map((cell, ci) => {
                      const v = typeof cell === "string" ? cell : fmtMoney(cell);
                      return ci === 0 ? (
                        <th key={ci} scope="row" className="text-left p-3 font-medium">{v}</th>
                      ) : (
                        <td key={ci} className="p-3 text-primary font-semibold whitespace-nowrap">{v}</td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}
      </div>
      <ul className="list-disc pl-6 mt-6 space-y-1 text-sm text-muted-foreground">
        {r.notes.map((n) => (
          <li key={n}>{n}</li>
        ))}
      </ul>
      <p className="mt-4 text-sm text-muted-foreground">
        Published fees for other regions:{" "}
        {others.map(([k, href], i) => (
          <span key={k}>
            <Link to={href} className="text-primary underline">{TRAINING_FEES.regions[k].label}</Link>
            {i < others.length - 1 ? ", " : ". "}
          </span>
        ))}
        {TRAINING_FEES.contactText}{" "}
        <Link to={TRAINING_FEES.contactHref} className="text-primary underline" data-cta-variant="training-fees-other-region">
          Contact us for fees in your region
        </Link>
        .
      </p>
    </section>
  );
}
