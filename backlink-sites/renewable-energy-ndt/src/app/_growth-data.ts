// Generated from scripts/satellite-upgrade/growth-content.json.
import { site } from "./_satellite-data";
export const growth = {
  "site": "renewable-energy-ndt",
  "slug": "wind-asset-inspection-component-map",
  "title": "Wind asset inspection: separate composite, welded and balance-of-plant questions",
  "description": "Build component-specific inspection briefs for renewable assets instead of applying one method to an entire installation.",
  "keywords": [
    "wind turbine NDT planning",
    "renewable energy inspection",
    "wind asset inspection history"
  ],
  "offer": "inspection",
  "answer": "A renewable installation includes components with different materials, geometry and access constraints. A composite blade, welded support structure and balance-of-plant pressure component do not present the same inspection question. Divide the asset into meaningful scopes and identify the responsible reviewer for each. Keep specialist access and operational arrangements separate from the examination itself. A consolidated record system can organize these packages without implying that one supplier or technique covers every component.",
  "decisions": [
    {
      "label": "Composite component",
      "evidence": "Provide construction information, repair history and accessible surfaces. Ask for application-specific method review and explicit limitations.",
      "question": "What representative evidence supports the proposed examination for this construction?"
    },
    {
      "label": "Welded structure",
      "evidence": "Identify joints, material records, drawings and the governing examination requirements. Preserve location references across campaigns.",
      "question": "Can findings be linked to the same joint after maintenance or modification?"
    },
    {
      "label": "Supporting equipment",
      "evidence": "Define the particular piping, vessel or other component and its owner programme. Avoid inheriting requirements merely from the site’s energy label.",
      "question": "Which technical authority accepts the evidence for this equipment?"
    }
  ],
  "example": "Hypothetical planning exercise: an owner groups a blade concern and support-structure weld checks under one “turbine inspection” order. The planner separates the technical briefs and access responsibilities, then confirms capability for each package. The final record register links both to the asset while retaining their different procedures, limitations and reviewers. This improves visibility without disguising the boundaries between disciplines.",
  "fields": [
    {
      "label": "Component group",
      "hint": "Identify composite, welded structural or supporting equipment scope."
    },
    {
      "label": "Condition question",
      "hint": "Describe the observation or maintenance objective for each component."
    },
    {
      "label": "Evidence available",
      "hint": "List drawings, repair history and previous reports."
    },
    {
      "label": "Access responsibilities",
      "hint": "Assign specialist access and site coordination requirements."
    },
    {
      "label": "Record handover",
      "hint": "Define component identifiers and receiving technical reviewers."
    }
  ],
  "links": [
    {
      "path": "/inspection-services",
      "label": "renewable-asset inspection scope",
      "context": "Request confirmation of the"
    },
    {
      "path": "/digital-twin-reporting",
      "label": "asset integrity visualization",
      "context": "Explore component-linked"
    }
  ],
  "boundary": "Elevated access, offshore work and composite inspection capabilities require separate confirmation. This worksheet does not authorize access or determine component fitness."
};
export function referralUrl(path: string, placement: string) { const url = new URL(path, "https://atlantisndt.com"); url.search = new URLSearchParams({ satellite: site.slug, cta: placement, utm_source: site.slug, utm_medium: "referral", utm_campaign: "satellite-product-funnels", utm_content: placement }).toString(); return url.toString(); }
