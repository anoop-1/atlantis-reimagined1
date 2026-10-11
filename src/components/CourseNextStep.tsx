// Course next step (2026-10-12 release, SEO audit action 5). Renders the same HTML the
// crawler copy carries (src/data/course-next-step-2026-10.mjs → scripts/course-next-step-2026-10.mjs),
// so the two layers cannot drift. Placed by each renderer: "answer" right after the page's
// first answer, "end" at the end of the article. Unmapped paths render nothing.
import { courseNextStepHtml, insertCourseNextStep } from "@/data/course-next-step-2026-10.mjs";

export default function CourseNextStep({ path, placement }: { path: string; placement: "answer" | "end" }) {
  const html = courseNextStepHtml((path || "").replace(/\/+$/, "") || "/", placement);
  if (!html) return null;
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}

/** For pages whose body is an HTML string (blogs.json): both placements, same rule as the crawler. */
export function withCourseNextStep(path: string, html: string) {
  return insertCourseNextStep(html, (path || "").replace(/\/+$/, "") || "/");
}
