// Generated from scripts/satellite-upgrade/growth-content.json.
import { site } from "./_satellite-data";
export const growth = {
  "site": "oil-gas-inspection-guide",
  "slug": "oil-gas-inspection-work-package",
  "title": "Build an oil and gas inspection work package that bidders can use",
  "description": "Connect asset boundaries, inspection objectives, preparation and reporting for a defined oil and gas NDT enquiry.",
  "keywords": [
    "oil and gas NDT inspection services",
    "turnaround inspection planning",
    "industrial inspection RFQ"
  ],
  "offer": "inspection",
  "answer": "Organize the work package around the asset and the condition question. A facility-wide list of methods is less useful than a scoped set of examinations connected to drawings, service context and prior findings. Separate planned monitoring, repair verification and investigation work so the technical review can address each objective. State what the owner will prepare and who resolves emergent questions. The package should let the provider explain its assumptions without implying that a generic capability page covers every operation.",
  "decisions": [
    {
      "label": "Asset and objective",
      "evidence": "Identify equipment boundaries, material records and the reason each examination is requested. Preserve links to relevant earlier findings.",
      "question": "Which owner decision will this examination support?"
    },
    {
      "label": "Preparation and timing",
      "evidence": "Describe isolation, cleaning, access and the available work window as site-owned prerequisites. Assign coordination roles.",
      "question": "Which dependencies must be confirmed before the provider can deliver the planned coverage?"
    },
    {
      "label": "Reporting and escalation",
      "evidence": "Agree location references, report status and the route for unexpected findings or added scope. Keep technical disposition separate from schedule pressure.",
      "question": "Who can authorize a scope change and who reviews the resulting evidence?"
    }
  ],
  "example": "Hypothetical turnaround package: a maintenance list combines routine readings with examination of repaired welds. The planner separates the objectives, supplies location references and identifies which items depend on access becoming available. The provider can then confirm the methods, personnel and assumptions for each part. An unexpected finding enters the agreed review route instead of being treated as an informal extension of the original order.",
  "fields": [
    {
      "label": "Asset list",
      "hint": "Describe equipment, materials and drawing references."
    },
    {
      "label": "Inspection objective",
      "hint": "Separate monitoring, repair verification and investigation."
    },
    {
      "label": "Previous findings",
      "hint": "Identify relevant reports and known unresolved questions."
    },
    {
      "label": "Site prerequisites",
      "hint": "Assign preparation, access and work-window confirmation."
    },
    {
      "label": "Scope-change route",
      "hint": "Name the technical reviewer and the authority for additional work."
    }
  ],
  "links": [
    {
      "path": "/inspection-services",
      "label": "oil and gas inspection scope review",
      "context": "Prepare the package for an"
    },
    {
      "path": "/consulting",
      "label": "inspection programme support",
      "context": "For programme questions, discuss"
    }
  ],
  "boundary": "Operator approval, mobilization and method availability require engagement-specific confirmation. This worksheet does not authorize isolation, access or inspection intervals."
};
export function referralUrl(path: string, placement: string) { const url = new URL(path, "https://atlantisndt.com"); url.search = new URLSearchParams({ satellite: site.slug, cta: placement, utm_source: site.slug, utm_medium: "referral", utm_campaign: "satellite-product-funnels", utm_content: placement }).toString(); return url.toString(); }
