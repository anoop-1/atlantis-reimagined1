// 2026-10-16 — "Canada: which certification does your job need?" React side of
// scripts/canada-certification-2026-10.mjs; both read
// src/data/canada-certification-2026-10.json (one source per fact, CLAUDE.md §19.1).
// Rendered inline by TrainingLocationPage (after the Canada lead block) and by
// GeoHubRoute (after the hub content) on the paths listed in the JSON.
import { Link } from "react-router-dom";
import data from "@/data/canada-certification-2026-10.json";

type Copy = {
  paths: string[];
  id: string;
  h2: string;
  intro: string;
  tableCaption: string;
  columns: string[];
  rows: [string, string, string][];
  points: [string, string][];
  offerH3: string;
  offer: [string, string, string][];
  examsH3: string;
  exams: string;
  sourcesLabel: string;
  sources: [string, string][];
};

const C = data as unknown as Copy;

export function showsCanadaCertification(path: string) {
  return C.paths.includes(path.replace(/\/+$/, "") || "/");
}

export default function CanadaCertificationBlock() {
  return (
    <section
      id={C.id}
      data-canada-certification="2026-10"
      aria-labelledby={`${C.id}-h`}
      className="container mx-auto max-w-4xl px-6 py-10 scroll-mt-24"
    >
      <div className="rounded-xl border bg-card shadow-sm p-6">
        <h2 id={`${C.id}-h`} className="text-2xl md:text-3xl font-bold mb-3">{C.h2}</h2>
        <p className="text-muted-foreground mb-6">{C.intro}</p>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border border-border">
            <caption className="text-left font-semibold p-3 bg-primary/10">{C.tableCaption}</caption>
            <thead>
              <tr>
                {C.columns.map((h, i) => (
                  <th key={i} scope="col" className="text-left p-3 border border-border">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {C.rows.map(([label, a, b]) => (
                <tr key={label}>
                  <th scope="row" className="text-left p-3 border border-border font-medium align-top">{label}</th>
                  <td className="p-3 border border-border align-top">{a}</td>
                  <td className="p-3 border border-border align-top">{b}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {C.points.map(([t, d]) => (
          <p key={t} className="mb-4">
            <strong>{t}.</strong> {d}
          </p>
        ))}
        <h3 className="text-xl font-semibold mt-6 mb-3">{C.offerH3}</h3>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          {C.offer.map(([t, href, d]) => (
            <li key={t}>
              <strong>
                <Link to={href} className="text-primary underline">{t}</Link>
              </strong>
              : {d}
            </li>
          ))}
        </ul>
        <h3 className="text-xl font-semibold mb-3">{C.examsH3}</h3>
        <p className="text-muted-foreground mb-4">{C.exams}</p>
        <p className="text-sm text-muted-foreground mb-2">{C.sourcesLabel}:</p>
        <ul className="list-disc pl-6 space-y-1 text-sm">
          {C.sources.map(([t, href]) => (
            <li key={href}>
              <a href={href} target="_blank" rel="noopener noreferrer" className="text-primary underline">{t}</a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
