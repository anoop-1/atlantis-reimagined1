// North American training pages — React side of scripts/training-na.mjs.
// Both layers read src/data/na-training-cities.json so the SEOHead title/H1
// here always matches the prerendered HTML crawlers see.
import naData from "@/data/na-training-cities.json";
import { MS_FORM_URL } from "@/lib/enquiry-endpoint";

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
  return {
    slug, name, st, country, kind, label, title, h1: title,
    description: `ASNT SNT-TC-1A Level I, II & III NDT training for ${label} employers and technicians — live online or onsite at your facility. Quote within one business day.`,
  };
}

export function allNaTrainingMeta(): NaTrainingMeta[] {
  return Object.keys(NA).map((s) => naTrainingMeta(s)!).filter(Boolean);
}

/** Course schema without dates or prices: online / onsite / blended, delivered online or at the employer's facility. */
export function naCourseSchema(url: string, name: string, description: string) {
  return {
    "@type": "Course",
    "@id": `${url}#course`,
    name,
    description,
    url,
    provider: { "@type": "Organization", name: "Atlantis NDT", url: "https://atlantisndt.com" },
    courseMode: ["online", "onsite", "blended"],
    hasCourseInstance: [
      {
        "@type": "CourseInstance",
        courseMode: ["online", "onsite", "blended"],
        location: "Online / at your facility",
        inLanguage: "en",
      },
    ],
  };
}
