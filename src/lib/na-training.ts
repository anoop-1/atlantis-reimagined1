// North American training pages — React side of scripts/training-na.mjs.
// Both layers read src/data/na-training-cities.json so the SEOHead title/H1
// here always matches the prerendered HTML crawlers see.
import naData from "@/data/na-training-cities.json";
import { MS_FORM_URL } from "@/lib/enquiry-endpoint";
import hoursData from "@/data/snt-tc-1a-hours.json";
import sessionsData from "@/data/course-sessions.json";
import { programmeCourseNode, type HoursData, type SessionsData } from "@/data/course-markup-2026-10.mjs";
import canadaData from "@/data/canada-certification-2026-10.json"; // 2026-10-17: Canadian titles/metas/H1s (ASNT SNT-TC-1A)
import { canadaPageMeta, type CanadaData } from "@/data/canada-certification-2026-10.mjs";

type Entry = [string, string, string, string];
const NA = (naData as unknown as { cities: Record<string, Entry> }).cities;

export const EMPLOYER_PROGRAM_PATH = "/snt-tc-1a-employer-certification-program";
export const CONSULTING_OWNER_PATH = "/consulting";
export const INDIVIDUAL_ENQUIRY_URL = `${MS_FORM_URL}&path=individual`;
export const COMPANY_QUOTE_URL = "/contact?service=training&subject=Company%20team%20training";

export interface NaTrainingMeta {
  slug: string;
  name: string;
  st: string;
  country: string;
  kind: string;
  label: string;
  title: string;
  h1: string;
  description: string;
}

export function naTrainingMeta(slug: string): NaTrainingMeta | null {
  const e = NA[slug];
  if (!e) return null;
  const [name, st, country, kind] = e;
  const label = kind === "city" ? `${name}, ${st}` : name;
  const title =
    kind === "country"
      ? `NDT Training in ${name} — Online & Onsite ASNT SNT-TC-1A Courses`
      : `NDT Training in ${label} — Online & Onsite ASNT Courses`;
  // Canadian pages: hand-sized title, meta and H1 from src/data/canada-certification-2026-10.json
  // (same entry scripts/training-na.mjs reads for the crawler HTML).
  const ca = country === "Canada" ? canadaPageMeta(canadaData as unknown as CanadaData, `/ndt-training-${slug}`) : null;
  if (ca) return { slug, name, st, country, kind, label, title: ca.title, h1: ca.h1, description: ca.description };
  return {
    slug, name, st, country, kind, label, title, h1: title,
    description: `ASNT SNT-TC-1A Level I, II & III NDT training for ${label} employers and technicians — live online or onsite at your facility. Quote within one business day.`,
  };
}

export function allNaTrainingMeta(): NaTrainingMeta[] {
  return Object.keys(NA).map((s) => naTrainingMeta(s)!).filter(Boolean);
}

/**
 * Course schema without prices (CLAUDE.md §18): Google "Course info" fields — offers category,
 * one courseMode per CourseInstance (Online / Onsite / Blended) and courseWorkload from the
 * SNT-TC-1A five-method package hours (src/data/course-markup-2026-10.mjs, shared with the
 * crawler). Dated sessions appear only when src/data/course-sessions.json lists them.
 */
export function naCourseSchema(url: string, name: string, description: string) {
  const path = url.replace("https://atlantisndt.com", "") || "/";
  const node = programmeCourseNode(path, {
    name,
    description,
    hours: hoursData as unknown as HoursData,
    sessions: sessionsData as unknown as SessionsData,
  });
  return { ...node, "@id": `${url}#course`, url };
}
