// Generated from scripts/satellite-upgrade/growth-content.json.
import { site } from "./_satellite-data";
export const growth = {
  "site": "composite-testing-hub",
  "slug": "composite-inspection-access-brief",
  "title": "Composite inspection: document construction and access before requesting a method",
  "description": "Prepare a component-specific brief for laminates, sandwich structures and bonded assemblies with uncertainty made explicit.",
  "keywords": [
    "composite NDT inspection",
    "composite inspection planning",
    "composite testing methods"
  ],
  "offer": "consulting",
  "answer": "Describe the construction and the question before requesting a generic composite scan. A laminate, sandwich panel and bonded assembly can present different examination challenges. Drawings, material information, repairs and accessible surfaces help the technical reviewer decide what evidence a proposed method could provide. Keep uncertain construction details visible. An inspection plan should state the intended coverage and limitations; it should not imply that one demonstration sample represents every layup, thickness transition or repair configuration.",
  "decisions": [
    {
      "label": "Construction record",
      "evidence": "Gather layup or construction information, thickness transitions, core or bond details and known repairs where available. Mark inferred information separately.",
      "question": "Which differences between the actual component and the reference sample matter to the review?"
    },
    {
      "label": "Access and surface",
      "evidence": "Map accessible faces, curvature, coatings and obstacles. Explain whether the inspection can be performed in the proposed maintenance condition.",
      "question": "What areas cannot be examined as intended, and who reviews that limitation?"
    },
    {
      "label": "Damage question",
      "evidence": "Describe the observed event or condition and the evidence needed by the design or maintenance authority. Avoid translating an observation into a confirmed damage type.",
      "question": "What decision will the report support, and what is outside the examination scope?"
    }
  ],
  "example": "Hypothetical component: a repaired sandwich panel has accessible skin on one side and incomplete repair drawings. The planner records the repair boundary and uncertain core details, then asks the technical reviewer what additional information or representative sample is needed. The proposed examination is scoped around those known limits. A report should preserve the uncertainty rather than label the whole assembly sound based only on accessible areas.",
  "fields": [
    {
      "label": "Construction",
      "hint": "Describe laminate, sandwich or bonded assembly and available material evidence."
    },
    {
      "label": "Condition of interest",
      "hint": "Record the event or observation that prompted inspection."
    },
    {
      "label": "Access map",
      "hint": "Identify accessible faces, transitions, obstacles and surface condition."
    },
    {
      "label": "Reference evidence",
      "hint": "List representative samples, drawings and repair records available."
    },
    {
      "label": "Review decision",
      "hint": "State the responsible authority and what it needs to decide."
    }
  ],
  "links": [
    {
      "path": "/consulting",
      "label": "composite inspection planning support",
      "context": "Request a scope discussion for"
    },
    {
      "path": "/inspection-services",
      "label": "NDT inspection services",
      "context": "Confirm application-specific availability under"
    }
  ],
  "boundary": "Method suitability and acceptance require the applicable component requirements and competent technical review. Composite delivery capability must be confirmed for the specific construction."
};
export function referralUrl(path: string, placement: string) { const url = new URL(path, "https://atlantisndt.com"); url.search = new URLSearchParams({ satellite: site.slug, cta: placement, utm_source: site.slug, utm_medium: "referral", utm_campaign: "satellite-product-funnels", utm_content: placement }).toString(); return url.toString(); }
