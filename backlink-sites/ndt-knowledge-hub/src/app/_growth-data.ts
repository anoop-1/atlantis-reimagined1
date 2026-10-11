// Generated from scripts/satellite-upgrade/growth-content.json.
import { site } from "./_satellite-data";
export const growth = {
  "site": "ndt-knowledge-hub",
  "slug": "surface-or-volumetric-ndt-question-map",
  "title": "Surface or volumetric NDT? Build the question before selecting a method",
  "description": "A beginner-friendly decision brief for material, discontinuity, geometry and access, with clear limits on method selection.",
  "keywords": [
    "nondestructive testing methods",
    "ultrasonic testing training",
    "magnetic particle testing",
    "liquid penetrant testing"
  ],
  "offer": "training",
  "answer": "Begin with what needs to be learned about the component. Surface condition, a suspected internal discontinuity and remaining wall thickness are different inspection questions. Material properties, geometry and access narrow the options, while the governing requirements establish what is permitted and how results are judged. Use this guide to assemble the facts for a technical discussion. It deliberately does not select a production technique or provide acceptance criteria from a few form answers.",
  "decisions": [
    {
      "label": "Condition of interest",
      "evidence": "Describe where the suspected condition may occur and why it is being investigated. Keep a maintenance observation separate from a confirmed discontinuity.",
      "question": "Is the question about a visible feature, surface-breaking condition, internal indication or thickness?"
    },
    {
      "label": "Material and geometry",
      "evidence": "Supply the material identification, product form and drawings where available. Curvature, joints, coatings and restricted surfaces can change what an examination establishes.",
      "question": "Which material facts are confirmed and which are assumptions?"
    },
    {
      "label": "Required decision",
      "evidence": "Identify who needs the result and what governing document applies. Detecting an indication and deciding whether it is acceptable are separate tasks.",
      "question": "What will the responsible reviewer need in order to interpret the report?"
    }
  ],
  "example": "Hypothetical discussion: a maintenance team requests “ultrasonic testing” after seeing a surface mark. Before arranging work, the planner records the material, accessible faces, component drawing and the reason for concern. The technical reviewer can then consider the intended examination rather than assume the requested method answers the question. The final scope records any limitation so “no indication reported” is not misread as proof of absence everywhere.",
  "fields": [
    {
      "label": "Inspection question",
      "hint": "Describe the condition to investigate using observations rather than a diagnosis."
    },
    {
      "label": "Material evidence",
      "hint": "List material records and any uncertainties."
    },
    {
      "label": "Geometry and access",
      "hint": "Identify available drawings, coatings and accessible surfaces."
    },
    {
      "label": "Governing requirement",
      "hint": "Record the specified document and who confirms the applicable edition."
    },
    {
      "label": "Result use",
      "hint": "Explain what decision the report is intended to support."
    }
  ],
  "links": [
    {
      "path": "/training",
      "label": "NDT method training",
      "context": "Build foundational understanding through"
    },
    {
      "path": "/consulting/ndt-consulting-level-iii",
      "label": "NDT procedure development",
      "context": "Discuss application-specific questions through"
    }
  ],
  "boundary": "The worksheet gathers information; it does not determine technique suitability, coverage or acceptance. Obtain review under the applicable procedure."
};
export function referralUrl(path: string, placement: string) { const url = new URL(path, "https://atlantisndt.com"); url.search = new URLSearchParams({ satellite: site.slug, cta: placement, utm_source: site.slug, utm_medium: "referral", utm_campaign: "satellite-product-funnels", utm_content: placement }).toString(); return url.toString(); }
