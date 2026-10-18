// First-screen course fact block for per-method Level I/II course pages.
// Data: src/data/course-facts.json + src/data/snt-tc-1a-hours.json (the same
// figures /resources/training-requirements-matrix renders). Mirrors
// courseFactsHtml() in scripts/training-na.mjs. No prices, no dates.
import { Link } from "react-router-dom";
import facts from "@/data/course-facts.json";
import hours from "@/data/snt-tc-1a-hours.json";
import sessions from "@/data/course-sessions.json";
// 2026-10-12: one Course/hours builder for both layers (scripts/training-na.mjs uses the same).
import { hoursCell, methodCourseNode, type FactsData, type HoursData, type SessionsData } from "@/data/course-markup-2026-10.mjs";
import { CourseSessionsTable } from "@/components/TrainingReleaseBlocks";

type Fact = { method: string; short: string; level: string; levelIdx: number; hoursKey: string | null; prereq?: string };
const PAGES = facts.pages as Record<string, Fact>;
const H = hours as unknown as HoursData;

export function hasCourseFacts(path: string) {
  return Boolean(PAGES[path]);
}

/** Google "Course info" node: offers category, one courseMode per instance, courseWorkload from SNT-TC-1A hours. */
export function courseFactsSchema(path: string) {
  if (!PAGES[path]) return null;
  return methodCourseNode(path, { facts: facts as unknown as FactsData, hours: H, sessions: sessions as unknown as SessionsData });
}

export default function CourseFactsBlock({ path }: { path: string }) {
  const f = PAGES[path];
  if (!f) return null;
  const matrix = (
    <Link to="/resources/training-requirements-matrix" className="text-primary underline">
      training requirements matrix
    </Link>
  );
  let hoursText: React.ReactNode;
  const cell = hoursCell(f as unknown as Record<string, unknown>, H); // same words as courseFactsHtml() in scripts/training-na.mjs
  if (cell) {
    hoursText = <>{cell.pre}{matrix}{cell.post}</>;
  } else {
    hoursText = <>Set by your employer&apos;s written practice — see the {matrix} for SNT-TC-1A recommended hours by method and level</>;
  }
  const rows: [string, React.ReactNode][] = [
    ["Method", f.method],
    ["Level", f.level],
    ["Scheme", "ASNT SNT-TC-1A (employer-based)"],
    ["Prerequisites", f.prereq || facts.prereqByLevel[f.levelIdx]],
    ["Training hours", hoursText],
    ["Delivery", "Live online · Onsite at your facility"],
    ["Practical exam", "Administered by an ASNT Level III under your written practice"],
    ["Practice", <><Link to="/practical-ndt" className="text-primary underline">Practical NDT simulator</Link> (practice only — not a substitute for the practical exam)</>],
    ["Instructor", "Anoop Rayavarapu, ASNT NDT Level III"],
  ];
  const subject = encodeURIComponent(`Course quote - ${f.short} ${f.level}`);
  return (
    <section className="container mx-auto max-w-4xl px-6 py-8" aria-label="Course facts">
      <div className="rounded-xl border bg-card shadow-sm overflow-hidden">
        <table className="w-full text-sm">
          <caption className="text-left font-semibold p-4 bg-primary/10">{f.short} {f.level} course facts</caption>
          <tbody>
            {rows.map(([k, v]) => (
              <tr key={k} className="border-t">
                <th scope="row" className="text-left p-3 w-40 align-top font-medium">{k}</th>
                <td className="p-3 text-muted-foreground">{v}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="p-4 border-t">
          <Link to={`/contact?service=training&subject=${subject}`} className="bg-primary text-primary-foreground px-4 py-2 rounded-md font-medium inline-block">
            Request a course quote
          </Link>
          <span className="text-xs text-muted-foreground ml-3">We reply within one business day; published US fees are on the <Link to="/training-usa#training-fees" className="underline text-primary">US training page</Link>.</span>
        </div>
      </div>
      <CourseSessionsTable path={path} />
    </section>
  );
}
