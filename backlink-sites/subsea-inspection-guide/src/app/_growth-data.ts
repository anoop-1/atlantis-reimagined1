// Generated from scripts/satellite-upgrade/growth-content.json.
import { site } from "./_satellite-data";
export const growth = {
  "site": "subsea-inspection-guide",
  "slug": "subsea-data-deliverable-specification",
  "title": "Specify subsea inspection data before the campaign begins",
  "description": "Define location confidence, video references, measurement records and review responsibilities for a useful subsea data handover.",
  "keywords": [
    "subsea inspection data management",
    "subsea inspection reporting",
    "subsea asset visualization"
  ],
  "offer": "twin",
  "answer": "Begin with the evidence the owner needs to review after the campaign. Video, still images and measurements are most useful when they share a clear asset and location reference, time context and statement of uncertainty. Agree the data deliverables with the operational provider before acquisition. Keep inspection planning and data review separate from diving or vehicle operations. A visualization pilot can organize the delivered evidence, but it cannot recover location certainty that was never recorded.",
  "decisions": [
    {
      "label": "Location confidence",
      "evidence": "Define the reference system, asset identifiers and how uncertainty or relocation is recorded. Keep observations distinct from confirmed feature identity.",
      "question": "How will a reviewer know whether two observations refer to the same feature?"
    },
    {
      "label": "Media and measurements",
      "evidence": "Specify file naming, timestamps, annotation references and links between media and reported values. Preserve original source files where agreed.",
      "question": "Can the reviewer find the source frame or record behind an annotation?"
    },
    {
      "label": "Review and exchange",
      "evidence": "Agree the deliverable manifest, file formats, revision process and receiving roles. Confirm what a visualization system can actually import.",
      "question": "Who resolves a missing file, conflicting annotation or uncertain location?"
    }
  ],
  "example": "Hypothetical handover: a video annotation identifies a feature, but the location reference is uncertain. The data team preserves the annotation and marks its confidence for review instead of placing it as a precise point on a model. Related images and source timestamps remain accessible. The owner can request clarification from the operational team without confusing a visually polished location marker with verified positioning.",
  "fields": [
    {
      "label": "Owner question",
      "hint": "State the condition or comparison the review must support."
    },
    {
      "label": "Location system",
      "hint": "Describe asset references, positioning evidence and uncertainty records."
    },
    {
      "label": "Media package",
      "hint": "List video, image and measurement formats and cross-references."
    },
    {
      "label": "Data review",
      "hint": "Assign clarification and annotation approval responsibilities."
    },
    {
      "label": "Visualization needs",
      "hint": "Identify the pilot asset and import or export functions to demonstrate."
    }
  ],
  "links": [
    {
      "path": "/digital-twin-reporting",
      "label": "subsea inspection data visualization",
      "context": "Discuss requirements for"
    },
    {
      "path": "/consulting",
      "label": "inspection data review support",
      "context": "Clarify the scope of"
    }
  ],
  "boundary": "Diving, ROV operation, positioning accuracy and offshore delivery are not claimed. Operational capability and data suitability must be confirmed with the responsible providers."
};
export function referralUrl(path: string, placement: string) { const url = new URL(path, "https://atlantisndt.com"); url.search = new URLSearchParams({ satellite: site.slug, cta: placement, utm_source: site.slug, utm_medium: "referral", utm_campaign: "satellite-product-funnels", utm_content: placement }).toString(); return url.toString(); }
