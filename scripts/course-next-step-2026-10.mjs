/**
 * Course next step — crawler-HTML side (SEO audit 2026-10-11, action 5).
 * Copy, page map and insertion rule: src/data/course-next-step-2026-10.mjs, which React
 * also renders (DepthPage, StandardDetail, BlogDetail, the Level III study guide), so the
 * two layers carry the same block. Runs in the prerender write loop after applyCycleRoute,
 * so the end block is the last thing in <main>; the compact block sits after the page's
 * first answer section.
 */
import {
  COURSE_NEXT_STEP_MARKER, COURSE_NEXT_STEP_PAGES, COURSES, LEVEL3, RELATED_QUESTION,
  courseNextStepHtml, insertCourseNextStep,
} from '../src/data/course-next-step-2026-10.mjs';

export const courseNextStepStats = { pages: 0, byCourse: {}, missingAnswerAnchor: [] };

export function applyCourseNextStepRoute(route) {
  const p = route?.path;
  if (!p || typeof route.bodyContent !== 'string' || route.bodyContent.includes(COURSE_NEXT_STEP_MARKER)) return route;
  const e = COURSE_NEXT_STEP_PAGES.get(p);
  if (!e) return route;
  const body = insertCourseNextStep(route.bodyContent, p);
  if (body === route.bodyContent) return route;
  courseNextStepStats.pages++;
  const k = e.course || 'level3-only';
  courseNextStepStats.byCourse[k] = (courseNextStepStats.byCourse[k] || 0) + 1;
  if (!/data-placement="answer"/.test(body)) courseNextStepStats.missingAnswerAnchor.push(p);
  return { ...route, bodyContent: body };
}

/** Every mapped page and every link target is a built page; the copy carries no prices. */
export function assertCourseNextStepClean(knownPaths) {
  const price = /[$£€₹]\s?\d|\b(?:USD|AED|SAR|INR|CAD|GBP|EUR)\s?\d|\bper (?:day|hour|seat|student)\b|\bday[- ]rate\b|\b(?:price|pricing|fee|fees|tuition|discount)\b/i;
  const claims = /\b(?:guaranteed|#1|best|leading|world-class|first-ever|pass rate|accredited)\b/i;
  const targets = [LEVEL3.href, ...Object.values(COURSES).map((c) => c.href), ...[...RELATED_QUESTION.values()].map(([h]) => h)];
  for (const p of RELATED_QUESTION.keys()) if (!COURSE_NEXT_STEP_PAGES.has(p)) throw new Error(`course-next-step: related question on unmapped page ${p}`);
  if (knownPaths) {
    for (const t of targets) if (!knownPaths.has(t)) throw new Error(`course-next-step: target ${t} is not a built page`);
    for (const p of COURSE_NEXT_STEP_PAGES.keys()) if (!knownPaths.has(p)) throw new Error(`course-next-step: mapped page ${p} is not a built page`);
  }
  for (const p of COURSE_NEXT_STEP_PAGES.keys()) {
    for (const placement of ['answer', 'end']) {
      const text = courseNextStepHtml(p, placement).replace(/<[^>]+>/g, ' ');
      if (!text.trim()) throw new Error(`course-next-step: empty ${placement} block for ${p}`);
      if (price.test(text)) throw new Error(`course-next-step: pricing word in ${placement} block for ${p}`);
      if (claims.test(text)) throw new Error(`course-next-step: claim word in ${placement} block for ${p}`);
    }
  }
  return true;
}
