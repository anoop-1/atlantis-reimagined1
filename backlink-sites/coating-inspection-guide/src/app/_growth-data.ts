// Generated from scripts/satellite-upgrade/growth-content.json.
import { site } from "./_satellite-data";
export const growth = {
  "site": "coating-inspection-guide",
  "slug": "coating-inspection-report-scope",
  "title": "Coating inspection reports: define the evidence before mobilization",
  "description": "Connect the coating specification, inspection stage and location records without substituting generic acceptance values.",
  "keywords": [
    "coating inspection records",
    "coating quality inspection",
    "inspection reporting workflow"
  ],
  "offer": "reporting",
  "answer": "A coating report is useful when the reader can connect the observation to a surface, a process stage and the governing specification. Begin with the coating system and inspection plan, then identify the records required at each agreed stage. Measurements taken under different conditions or recorded against unclear locations can be difficult to interpret later. Keep the specification’s requirements separate from the report template so a convenient form does not become an unofficial source of acceptance criteria.",
  "decisions": [
    {
      "label": "Specification and stage",
      "evidence": "Identify the coating system, surface preparation requirements and the inspection stage covered. Record the specification revision and who resolves a conflict.",
      "question": "Does the report make clear which stage was observed and which was not?"
    },
    {
      "label": "Location and measurement record",
      "evidence": "Agree location references, units, instrument identity and the supporting records required by the procedure. Preserve observations that need clarification.",
      "question": "Can a reviewer locate the area and understand the conditions associated with the result?"
    },
    {
      "label": "Disposition and handover",
      "evidence": "Separate the inspector’s observation from acceptance, repair instructions and subsequent verification. Link later records to the original issue.",
      "question": "Who decides the disposition and how is the completed follow-up recorded?"
    }
  ],
  "example": "Hypothetical handover: several readings are recorded against “north side,” but the drawing uses numbered panels. Before reporting, the team resolves the location references and retains the original field notation. A repaired area receives a linked follow-up record instead of replacing the initial observation. The final package lets the reviewer see the sequence and apply the project requirements without reconstructing the work from photographs alone.",
  "fields": [
    {
      "label": "Coating system",
      "hint": "Identify the project specification and revision."
    },
    {
      "label": "Inspection stages",
      "hint": "List the stages included and their required records."
    },
    {
      "label": "Location convention",
      "hint": "Describe panel, area or drawing references for results."
    },
    {
      "label": "Evidence package",
      "hint": "List instrument, environmental and photographic records required by the project."
    },
    {
      "label": "Disposition workflow",
      "hint": "Name the acceptance and follow-up roles."
    }
  ],
  "links": [
    {
      "path": "/erp/apps/ndt-reports",
      "label": "inspection reporting workflow",
      "context": "Discuss templates and review control for an"
    },
    {
      "path": "/inspection-services",
      "label": "inspection scope review",
      "context": "Confirm the required service through an"
    }
  ],
  "boundary": "No coating acceptance limits or environmental thresholds are supplied here. Use the project specification, approved procedure and responsible coating specialist."
};
export function referralUrl(path: string, placement: string) { const url = new URL(path, "https://atlantisndt.com"); url.search = new URLSearchParams({ satellite: site.slug, cta: placement, utm_source: site.slug, utm_medium: "referral", utm_campaign: "satellite-product-funnels", utm_content: placement }).toString(); return url.toString(); }
