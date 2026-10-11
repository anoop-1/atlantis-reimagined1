// Generated from scripts/satellite-upgrade/growth-content.json.
import { site } from "./_satellite-data";
export const growth = {
  "site": "lng-inspection-hub",
  "slug": "lng-inspection-package-boundaries",
  "title": "LNG inspection packages: separate construction evidence from operating questions",
  "description": "Define the equipment, lifecycle stage and review responsibilities before assembling an LNG-related NDT scope.",
  "keywords": [
    "LNG inspection planning",
    "LNG facility NDT",
    "cryogenic equipment inspection records"
  ],
  "offer": "inspection",
  "answer": "An LNG facility contains different equipment and structures with different requirements. Identify the asset and lifecycle stage before carrying a fabrication inspection plan into an operating inspection request. Construction records can establish useful history, but they do not automatically answer a current condition question. Keep the design basis, owner programme and requested examination distinct. Where cryogenic service or a specific regulatory framework is relevant, provide that context for the responsible technical review rather than assuming a generic scope is sufficient.",
  "decisions": [
    {
      "label": "Asset boundary",
      "evidence": "Identify the vessel, piping, tank or structural item and its material records. Do not treat the facility name as a complete technical description.",
      "question": "Which components are included and where does this work package stop?"
    },
    {
      "label": "Lifecycle question",
      "evidence": "Separate fabrication verification, repair support and in-service condition work. Gather records relevant to the current question.",
      "question": "What has changed since the previous examination or original construction?"
    },
    {
      "label": "Review and handover",
      "evidence": "Identify the owner, engineering and regulatory responsibilities that apply to the package. Agree traceable report and location references.",
      "question": "Who determines whether the evidence supports the intended operating or maintenance decision?"
    }
  ],
  "example": "Hypothetical package: a maintenance team supplies fabrication weld reports for a piping section now requiring a condition review. The planner retains those reports as history but adds current service context, component changes and the owner’s inspection objective. The examination scope is then reviewed for the present question. The old dossier is neither discarded nor treated as proof of current condition.",
  "fields": [
    {
      "label": "Equipment boundary",
      "hint": "Identify the asset class, materials and relevant drawings."
    },
    {
      "label": "Lifecycle stage",
      "hint": "State fabrication, repair or in-service purpose."
    },
    {
      "label": "Service context",
      "hint": "Describe the operating context needed for technical review without confidential process details."
    },
    {
      "label": "Historical evidence",
      "hint": "List construction reports, repairs and prior inspections available."
    },
    {
      "label": "Approval route",
      "hint": "Identify the owner and technical roles that accept the deliverables."
    }
  ],
  "links": [
    {
      "path": "/inspection-services",
      "label": "LNG-related NDT scope review",
      "context": "Request an application-specific"
    },
    {
      "path": "/consulting",
      "label": "inspection programme consulting",
      "context": "For programme boundaries, discuss"
    }
  ],
  "boundary": "LNG, cryogenic or regulatory authorization is not implied. Confirm the specific capability, governing requirements and responsible approvals for the engagement."
};
export function referralUrl(path: string, placement: string) { const url = new URL(path, "https://atlantisndt.com"); url.search = new URLSearchParams({ satellite: site.slug, cta: placement, utm_source: site.slug, utm_medium: "referral", utm_campaign: "satellite-product-funnels", utm_content: placement }).toString(); return url.toString(); }
