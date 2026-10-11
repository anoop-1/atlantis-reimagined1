// Generated from scripts/satellite-upgrade/growth-content.json.
import { site } from "./_satellite-data";
export const growth = {
  "site": "petrochemical-ndt-hub",
  "slug": "damage-question-to-examination-scope",
  "title": "From damage concern to examination scope in a petrochemical unit",
  "description": "Prepare service context and evidence for the technical team without treating a generic NDT method as a damage assessment.",
  "keywords": [
    "petrochemical NDT inspection",
    "damage mechanism review inputs",
    "process piping inspection planning"
  ],
  "offer": "inspection",
  "answer": "Record the concern and the evidence behind it before asking for a particular examination. Material, service history, operating changes and previous findings provide context for a competent damage-mechanism review. The NDT scope should then state the examination objective and limitations agreed by the technical authority. Keep that engineering review distinct from collecting field data. A clear brief helps a provider understand the question while avoiding an unsupported diagnosis based on a short description.",
  "decisions": [
    {
      "label": "Service context",
      "evidence": "Gather material records, relevant operating history and changes identified by the owner. Mark unavailable information explicitly.",
      "question": "What context does the responsible engineer need before defining the examination?"
    },
    {
      "label": "Evidence and locations",
      "evidence": "Connect prior findings and observations to equipment and location references. Identify whether the concern is localized or part of a wider review.",
      "question": "Can the proposed examination area be related to the evidence prompting it?"
    },
    {
      "label": "Decision and escalation",
      "evidence": "Define who interprets the results and how unexpected findings are escalated. Keep urgent scheduling separate from technical acceptance.",
      "question": "Who decides whether additional examination or assessment is needed?"
    }
  ],
  "example": "Hypothetical unit review: a process change prompts concern about several piping locations. The team supplies the change history and material records to the technical reviewer, who defines the examination question. The field scope retains the selected location references and records any inaccessible area. When a result needs clarification, the agreed reviewer decides the next step rather than the crew inferring a disposition from the work order.",
  "fields": [
    {
      "label": "Concern",
      "hint": "Describe the owner’s observation or review trigger without diagnosing damage."
    },
    {
      "label": "Service information",
      "hint": "List material and operating-history evidence available."
    },
    {
      "label": "Locations",
      "hint": "Identify the equipment and examination areas for review."
    },
    {
      "label": "Required evidence",
      "hint": "State the report and supporting data the technical team needs."
    },
    {
      "label": "Escalation",
      "hint": "Assign decisions on unexpected results and additional work."
    }
  ],
  "links": [
    {
      "path": "/inspection-services",
      "label": "petrochemical inspection scope review",
      "context": "Discuss the defined examination through a"
    },
    {
      "path": "/consulting/api-570-piping-inspector-services",
      "label": "process piping inspection services",
      "context": "For piping programme requirements, review"
    }
  ],
  "boundary": "Damage-mechanism conclusions and fitness decisions require competent engineering review. This guide offers planning inputs, not operating or acceptance limits."
};
export function referralUrl(path: string, placement: string) { const url = new URL(path, "https://atlantisndt.com"); url.search = new URLSearchParams({ satellite: site.slug, cta: placement, utm_source: site.slug, utm_medium: "referral", utm_campaign: "satellite-product-funnels", utm_content: placement }).toString(); return url.toString(); }
