// 2026-10-12 training release (SEO audit actions 6 and 10) — React side of
// scripts/training-release-2026-10.mjs. Same copy (src/data/training-release-2026-10.json),
// same hours (src/data/snt-tc-1a-hours.json + course-facts.json) and the same Course
// builder (src/data/course-markup-2026-10.mjs), so both layers say the same thing.
// No prices, dates, venues or client names: fees are linked, never repeated.
import { Link } from "react-router-dom";
import copyData from "@/data/training-release-2026-10.json";
import factsData from "@/data/course-facts.json";
import hoursData from "@/data/snt-tc-1a-hours.json";
import sessionsData from "@/data/course-sessions.json";
import {
  courseNodeForPath,
  methodRows,
  packageHours,
  sessionRows,
  type FactsData,
  type HoursData,
  type SessionsData,
  type Json,
} from "@/data/course-markup-2026-10.mjs";

type Pair = [string, string];
type Copy = {
  nearMe: {
    id: string; h2: string; answer: string; formatsH3: string; formats: Pair[]; certH3: string; certAnswer: string;
    citiesH3: string; cities: Pair[]; citiesNote: string; ctaHref: string; ctaText: string; ctaAfter: string; schoolNote?: string;
  };
  onlinePointer: { html: string };
  cityCourses: {
    pages: Record<string, { label: string; fees: string }>;
    h2: string; intro: string; caption: string; columns: string[]; packages: string; advanced: string;
    practicalH3: string; practical: string[]; fees: Record<string, string>; ctaText: string; ctaAfter: string;
  };
  canada: { paths: string[]; h2: string; intro: string; items: [string, string, string][]; after: string };
};

export const RELEASE_COPY = copyData as unknown as Copy & Json;
export const FACTS = factsData as unknown as FactsData;
export const HOURS = hoursData as unknown as HoursData;
export const SESSIONS = sessionsData as unknown as SessionsData;

const fill = (s: string, vars: Record<string, string | number>) => s.replace(/\{(\w+)\}/g, (m, k) => (k in vars ? String(vars[k]) : m));
/** Copy strings carry a few internal links as HTML; render them as router links. */
function Rich({ html, vars = {} }: { html: string; vars?: Record<string, string | number> }) {
  const text = fill(html, vars);
  const parts: React.ReactNode[] = [];
  const rx = /<a href="([^"]+)">([^<]+)<\/a>/g;
  let last = 0;
  let m: RegExpExecArray | null;
  while ((m = rx.exec(text)) !== null) {
    if (m.index > last) parts.push(text.slice(last, m.index));
    parts.push(<Link key={m.index} to={m[1]} className="text-primary underline">{m[2]}</Link>);
    last = m.index + m[0].length;
  }
  if (last < text.length) parts.push(text.slice(last));
  return <>{parts}</>;
}

/** The one Course JSON-LD node for a path (same call as the crawler). */
export function releaseCourseNode(path: string): Json | null {
  return courseNodeForPath(path, { facts: FACTS, hours: HOURS, sessions: SESSIONS, copy: RELEASE_COPY });
}

export function isCanadianTrainingPath(path: string) {
  return RELEASE_COPY.canada.paths.includes(path);
}
export function hasCityCourses(path: string) {
  return Boolean(RELEASE_COPY.cityCourses.pages[path]);
}

export function NearMeTrainingBlock() {
  const c = RELEASE_COPY.nearMe;
  return (
    <section id={c.id} data-training-release="near-me" aria-labelledby={`${c.id}-h`} className="container mx-auto max-w-4xl px-6 py-12 scroll-mt-24">
      <h2 id={`${c.id}-h`} className="text-3xl md:text-4xl font-bold mb-4">{c.h2}</h2>
      <p className="text-lg text-muted-foreground mb-6">{c.answer}</p>
      <h3 className="text-xl font-semibold mb-3">{c.formatsH3}</h3>
      <ul className="list-disc pl-6 space-y-2 mb-6">
        {c.formats.map(([t, d]) => (
          <li key={t}><strong>{t}.</strong> <Rich html={d} /></li>
        ))}
      </ul>
      <h3 className="text-xl font-semibold mb-3">{c.certH3}</h3>
      <p className="text-muted-foreground mb-6">{c.certAnswer}</p>
      <h3 className="text-xl font-semibold mb-3">{c.citiesH3}</h3>
      <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-1 list-disc pl-6 mb-4">
        {c.cities.map(([href, label]) => (
          <li key={href}><Link to={href} className="text-primary underline">NDT training in {label}</Link></li>
        ))}
      </ul>
      <p className="text-muted-foreground">
        {c.citiesNote}{" "}
        <Link to={c.ctaHref} className="text-primary underline font-semibold">{c.ctaText}</Link>
        {c.ctaAfter}
      </p>
      {c.schoolNote && <p className="text-muted-foreground mt-3"><Rich html={c.schoolNote} /></p>}
    </section>
  );
}

export function OnlineNearMePointer() {
  return (
    <p data-training-release="near-me-pointer" className="container mx-auto max-w-4xl px-6 pt-8 text-muted-foreground">
      <Rich html={RELEASE_COPY.onlinePointer.html} />
    </p>
  );
}

export function CourseHoursTable({ caption }: { caption: string }) {
  const cc = RELEASE_COPY.cityCourses;
  return (
    <div className="overflow-x-auto mb-4">
      <table className="w-full text-sm border border-border">
        <caption className="text-left font-semibold p-3 bg-primary/10">{caption}</caption>
        <thead>
          <tr>{cc.columns.map((h) => <th key={h} scope="col" className="text-left p-3 border border-border">{h}</th>)}</tr>
        </thead>
        <tbody>
          {methodRows(FACTS, HOURS).map((r) => (
            <tr key={r.key}>
              <th scope="row" className="text-left p-3 border border-border font-medium">{r.method}</th>
              <td className="p-3 border border-border">{r.l1}</td>
              <td className="p-3 border border-border">{r.l2}</td>
              <td className="p-3 border border-border">
                {r.pages.map(([p, t], i) => (
                  <span key={p}>{i > 0 ? " · " : ""}<Link to={p} className="text-primary underline">{t}</Link></span>
                ))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function PracticalSessionsList({ label }: { label: string }) {
  return (
    <ul className="list-disc pl-6 space-y-2 mb-4 text-muted-foreground">
      {RELEASE_COPY.cityCourses.practical.map((p) => <li key={p.slice(0, 40)}><Rich html={p} vars={{ label }} /></li>)}
    </ul>
  );
}

export function CityCoursesBlock({ path }: { path: string }) {
  const cc = RELEASE_COPY.cityCourses;
  const c = cc.pages[path];
  if (!c) return null;
  const vars = { label: c.label, l1: packageHours(HOURS, 0) ?? "", l2: packageHours(HOURS, 1) ?? "" };
  const subject = encodeURIComponent(`Course enquiry - ${c.label}`);
  return (
    <section data-training-release="city-courses" aria-label={fill(cc.h2, vars)} className="container mx-auto max-w-5xl px-6 py-12">
      <h2 className="text-3xl font-bold mb-4">{fill(cc.h2, vars)}</h2>
      <p className="text-muted-foreground mb-6">{fill(cc.intro, vars)}</p>
      <CourseHoursTable caption={cc.caption} />
      <p className="text-muted-foreground mb-6">{fill(cc.packages, vars)} <Rich html={cc.advanced} /></p>
      <h3 className="text-xl font-semibold mb-3">{cc.practicalH3}</h3>
      <PracticalSessionsList label={c.label} />
      <p className="text-muted-foreground">
        <Rich html={cc.fees[c.fees]} vars={vars} />{" "}
        <Link to={`/contact?service=training&subject=${subject}`} className="text-primary underline font-semibold">{fill(cc.ctaText, vars)}</Link>
        {cc.ctaAfter}
      </p>
    </section>
  );
}

export function CanadaLeadBlock({ label }: { label: string }) {
  const c = RELEASE_COPY.canada;
  return (
    <section data-training-release="canada-lead" aria-label={c.h2} className="container mx-auto max-w-4xl px-6 py-10">
      <div className="rounded-xl border bg-card shadow-sm p-6">
        <h2 className="text-2xl md:text-3xl font-bold mb-3">{c.h2}</h2>
        <p className="text-muted-foreground mb-4">{c.intro}</p>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          {c.items.map(([t, d, href]) => (
            <li key={href}>
              <strong><Link to={href} className="text-primary underline">{t}</Link></strong>: <Rich html={d} />
            </li>
          ))}
        </ul>
        <p className="text-muted-foreground">{fill(c.after, { label })}</p>
      </div>
    </section>
  );
}

/** Visible table of dated sessions from src/data/course-sessions.json (renders nothing while it is empty). */
export function CourseSessionsTable({ path }: { path: string }) {
  const rows = sessionRows(path, SESSIONS);
  if (!rows.length) return null;
  return (
    <section data-training-release="sessions" aria-label="Scheduled sessions" className="container mx-auto max-w-4xl px-6 py-8">
      <h2 className="text-2xl font-bold mb-3">Scheduled sessions</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm border border-border">
          <caption className="text-left font-semibold p-3 bg-primary/10">Scheduled course sessions</caption>
          <thead>
            <tr>{["Course", "Dates", "Format", "Venue"].map((h) => <th key={h} scope="col" className="text-left p-3 border border-border">{h}</th>)}</tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={`${r.course}-${r.dates}`}>
                <th scope="row" className="text-left p-3 border border-border font-medium">{r.course}</th>
                <td className="p-3 border border-border">{r.dates}</td>
                <td className="p-3 border border-border">{r.format}</td>
                <td className="p-3 border border-border">{r.venue}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-3"><Link to="/contact?service=training&subject=Scheduled%20session" className="text-primary underline">Ask about a scheduled session</Link>.</p>
    </section>
  );
}
