// Ranking release 2026-10-17 (CLAUDE.md §58): the React side of the direct-answer,
// service and salary-note blocks. Same JSON and the same HTML renderer as the crawler
// HTML (scripts/rank-wave14-2026-10.mjs), so the two layers cannot drift. Placed by the
// page itself, straight after its H1 / hero, on the pages React draws (DepthPage,
// /ndt-school, the Level III study guide, /weld-inspection, /inspection-services,
// SalaryLevelPage); editorial pages already show the crawler <main>.
import RANK14 from "@/data/rank-wave14-2026-10.json";
import { answerBlockHtml, salaryNoteHtml } from "@/data/rank-wave14-2026-10.mjs";

const BOX =
  "rank14 my-8 rounded-xl border border-slate-200 bg-white p-6 text-slate-800 shadow-sm " +
  "[&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-slate-900 [&_h2]:mb-3 " +
  "[&_h3]:text-lg [&_h3]:font-semibold [&_h3]:text-slate-900 [&_h3]:mt-5 [&_h3]:mb-2 " +
  "[&_p]:leading-relaxed [&_p]:mb-3 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-1 [&_ul]:mb-3 " +
  "[&_a]:text-[#004aad] [&_a]:underline [&_a]:underline-offset-2";

/** Direct answer (+ service detail) for `path`, or nothing. */
export function RankAnswer({ path, className = "" }: { path: string; className?: string }) {
  const html = answerBlockHtml(RANK14, path);
  if (!html) return null;
  return <div className={`${BOX} ${className}`} dangerouslySetInnerHTML={{ __html: html }} />;
}

/** Sourced salary data note with author and date, on the salary owners only. */
export function RankSalaryNote({ path, className = "" }: { path: string; className?: string }) {
  const html = salaryNoteHtml(RANK14, path);
  if (!html) return null;
  return (
    <div
      className={`rank14 my-6 rounded-lg border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700 [&_p]:mb-2 [&_a]:text-[#004aad] [&_a]:underline ${className}`}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

export default RankAnswer;
