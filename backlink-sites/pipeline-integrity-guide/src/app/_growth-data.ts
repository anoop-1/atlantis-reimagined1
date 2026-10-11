// Generated from scripts/satellite-upgrade/growth-content.json.
import { site } from "./_satellite-data";
export const growth = {
  "site": "pipeline-integrity-guide",
  "slug": "pipeline-inspection-scope-boundaries",
  "title": "Construction weld, local field NDT or integrity programme: define the pipeline scope",
  "description": "Distinguish three pipeline inspection needs and prepare the location, material and review evidence each request requires.",
  "keywords": [
    "pipeline weld inspection",
    "pipeline integrity inspection planning",
    "localized pipeline NDT"
  ],
  "offer": "inspection",
  "answer": "Pipeline inspection requests can describe very different tasks. Construction weld examination, a localized field investigation and an integrity programme review do not have the same inputs or deliverables. Identify the task first, then provide location references, material information and the governing requirements. Keep access and coating assumptions explicit. A local NDT offer should not be interpreted as in-line inspection capability or ownership of the operator’s integrity-management responsibilities.",
  "decisions": [
    {
      "label": "Construction or repair weld",
      "evidence": "Provide joint identity, drawing references, material and geometry, specified examination extent and acceptance documents.",
      "question": "How will each report be linked to the joint and any repair cycle?"
    },
    {
      "label": "Localized field examination",
      "evidence": "Supply the location evidence, condition prompting the work and access constraints. Identify the expected examined area and limitations.",
      "question": "Can the field team locate the same feature referenced by the engineering review?"
    },
    {
      "label": "Programme review",
      "evidence": "Identify the operator’s question, available inspection history and the review authority. Distinguish programme support from field-data collection.",
      "question": "Which decisions remain with the operator and responsible integrity engineer?"
    }
  ],
  "example": "Hypothetical request: an operator needs follow-up at a reported feature but the location references use different coordinate and chainage systems. The planner reconciles the references and records the remaining location uncertainty before mobilization. The local examination scope can then be reviewed against the intended feature. Its report does not claim that a localized result represents the condition of the entire pipeline.",
  "fields": [
    {
      "label": "Task type",
      "hint": "Choose construction weld, local investigation or programme support."
    },
    {
      "label": "Location references",
      "hint": "List joint, feature, chainage or coordinate references and uncertainties."
    },
    {
      "label": "Material and geometry",
      "hint": "Describe known component information and relevant drawings."
    },
    {
      "label": "Access assumptions",
      "hint": "Record coating, preparation and access responsibilities."
    },
    {
      "label": "Review boundary",
      "hint": "Identify the decision, reviewer and limits of the requested deliverable."
    }
  ],
  "links": [
    {
      "path": "/inspection-services",
      "label": "pipeline NDT scope review",
      "context": "Request an application-specific"
    },
    {
      "path": "/digital-twin-reporting",
      "label": "location-linked inspection history",
      "context": "Explore"
    }
  ],
  "boundary": "In-line inspection, excavation, operator authorization and integrity-management capability are not implied. Confirm exact service boundaries before procurement."
};
export function referralUrl(path: string, placement: string) { const url = new URL(path, "https://atlantisndt.com"); url.search = new URLSearchParams({ satellite: site.slug, cta: placement, utm_source: site.slug, utm_medium: "referral", utm_campaign: "satellite-product-funnels", utm_content: placement }).toString(); return url.toString(); }
