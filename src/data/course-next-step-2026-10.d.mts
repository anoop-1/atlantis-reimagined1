// Types for course-next-step-2026-10.mjs (shared by React and scripts/prerender.mjs).
export type CourseLink = { href: string; label: string; covers: string };
export type CourseNextStep = {
  kind: string;
  heading: string;
  lead: string;
  course: CourseLink | null;
  note: string;
  short?: (linked: string) => string;
};
export const COURSE_NEXT_STEP_MARKER: string;
export const LEVEL3: { href: string; label: string };
export const COURSES: Record<string, CourseLink>;
export const RELATED_QUESTION: Map<string, [string, string]>;
export const COURSE_NEXT_STEP_PAGES: Map<string, { course: string | null; code: string; kind: string; central: boolean }>;
export function courseNextStepFor(path: string): CourseNextStep | null;
export function courseNextStepHtml(path: string, placement?: "answer" | "end"): string;
export function insertCourseNextStep(html: string, path: string): string;
