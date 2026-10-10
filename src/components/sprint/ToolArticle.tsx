/**
 * Shared explanatory body for the 2026-10-09 sprint calculators (formulas, worked
 * example, notes, FAQ, related links). Text comes from src/data/sprint-tools.json,
 * the same text the crawler HTML carries (scripts/sprint-2026-10.mjs).
 */
import { Link } from "react-router-dom";

export interface ToolText {
  formulas: string[][];
  example: string;
  notes: string[];
  faq: { q: string; a: string }[];
  /** 2026-10-10: tools outside the UT family pass their own related links and closing line. */
  related?: { href: string; label: string }[];
  cta?: string;
}

export const TOOL_RELATED = [
  { href: "/practical-ndt#ut-demo", label: "Try the simplified A-scan demo" },
  { href: "/tools/sound-velocity-reference", label: "Sound velocity reference table" },
  { href: "/tools/ultrasonic-thickness-calculator", label: "Ultrasonic thickness calculator" },
  { href: "/training#training-pathway", label: "UT, PAUT and TOFD training: how training, exams and certification fit" },
];

export default function ToolArticle({ t }: { t: ToolText }) {
  return (
    <div className="prose prose-lg max-w-none prose-a:text-primary">
      <h2>Formulas used</h2>
      <table>
        <tbody>
          {t.formulas.map(([k, v]) => (
            <tr key={k}><th scope="row" className="text-left">{k}</th><td><code>{v}</code></td></tr>
          ))}
        </tbody>
      </table>
      <h2>Worked example</h2>
      <p>{t.example}</p>
      <h2>Before you rely on the numbers</h2>
      <ul>{t.notes.map((n) => <li key={n}>{n}</li>)}</ul>
      <h2>Frequently asked questions</h2>
      {t.faq.map((f) => (
        <div key={f.q}>
          <h3>{f.q}</h3>
          <p>{f.a}</p>
        </div>
      ))}
      <h2>Related</h2>
      <ul>
        {(t.related ?? TOOL_RELATED).map((r) => <li key={r.href}><Link to={r.href}>{r.label}</Link></li>)}
      </ul>
      {t.cta ? (
        <p>{t.cta} <Link to="/contact">Contact Atlantis NDT</Link>.</p>
      ) : (
        <p>
          Building UT, PAUT or TOFD skills for a team? <Link to="/training">Atlantis NDT training</Link> is led by an ASNT Level III, and
          the <Link to="/practical-ndt">Practical NDT simulator</Link> gives hands-on practice between courses.
        </p>
      )}
    </div>
  );
}
