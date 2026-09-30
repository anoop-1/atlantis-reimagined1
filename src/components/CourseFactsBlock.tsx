// First-screen course fact block for per-method Level I/II course pages.
// Data: src/data/course-facts.json + src/data/snt-tc-1a-hours.json (the same
// figures /resources/training-requirements-matrix renders). Mirrors
// courseFactsHtml() in scripts/training-na.mjs. No prices, no dates.
import { Link } from "react-router-dom";
import facts from "@/data/course-facts.json";
import hours from "@/data/snt-tc-1a-hours.json";

type Fact = { method: string; short: string; level: string; levelIdx: number; hoursKey: string | null; prereq?: string };
const PAGES = facts.pages as Record<string, Fact>;
const H = hours as unknown as { classroom: Record<string, string[]>; ojt: Record<string, string[]> };

export function hasCourseFacts(path: string) {
  return Boolean(PAGES[path]);
}

export function courseFactsSchema(path: string) {
  const f = PAGES[path];
  if (!f) return null;
  const url = `https://atlantisndt.com${path}`;
  return {
    "@type": "Course",
    "@id": `${url}#course`,
    name: `${f.short} ${f.level} Training — ASNT SNT-TC-1A`,
    description: `${f.method} ${f.level} training to ASNT SNT-TC-1A (employer-based certification), delivered live online or onsite at your facility, with practical examinations administered by an ASNT Level III under the employer's written practice.`,
    url,
    provider: { "@type": "Organization", name: "Atlantis NDT", url: "https://atlantisndt.com" },
    educationalCredentialAwarded: `${f.level} certification issued by the employer under its SNT-TC-1A written practice`,
    coursePrerequisites: f.prereq || facts.prereqByLevel[f.levelIdx],
    courseMode: ["online", "onsite", "blended"],
    instructor: { "@type": "Person", name: "Anoop Rayavarapu", jobTitle: "ASNT NDT Level III" },
    hasCourseInstance: [
      { "@type": "CourseInstance", courseMode: ["online", "onsite", "blended"], location: "Online / at your facility", inLanguage: "en" },
    ],
  };
}

export default function CourseFactsBlock({ path }: { path: string }) {
  const f = PAGES[path];
  if (!f) return null;
  const matrix = (
    <Link to="/resources/training-requirements-matrix" className="text-primary underline">
      training requirements matrix
    </Link>
  );
  let hoursCell: React.ReactNode;
  if (f.hoursKey && H.classroom[f.hoursKey]) {
    const i = f.levelIdx;
    const addl = i > 0 ? ` (in addition to Level I: ${H.classroom[f.hoursKey][0]} h classroom, ${H.ojt[f.hoursKey][0]} h OJT)` : "";
    hoursCell = (
      <>
        {H.classroom[f.hoursKey][i]} h classroom + {H.ojt[f.hoursKey][i]} h on-the-job experience{addl} — SNT-TC-1A
        recommended minimums from our {matrix}; your written practice sets the binding figures
      </>
    );
  } else {
    hoursCell = <>Set by your employer&apos;s written practice — see the {matrix} for SNT-TC-1A recommended hours by method and level</>;
  }
  const rows: [string, React.ReactNode][] = [
    ["Method", f.method],
    ["Level", f.level],
    ["Scheme", "ASNT SNT-TC-1A (employer-based)"],
    ["Prerequisites", f.prereq || facts.prereqByLevel[f.levelIdx]],
    ["Training hours", hoursCell],
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
          <span className="text-xs text-muted-foreground ml-3">No published prices; quote within one business day.</span>
        </div>
      </div>
    </section>
  );
}
