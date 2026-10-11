// Generated from scripts/satellite-upgrade/growth-content.json.
import { site } from "./_satellite-data";
export const growth = {
  "site": "industrial-inspection-resources",
  "slug": "inspection-quotation-comparison",
  "title": "Compare NDT quotations by scope before comparing totals",
  "description": "Normalize deliverables, assumptions, exclusions and review responsibilities in competing inspection quotations.",
  "keywords": [
    "industrial NDT inspection services",
    "NDT inspection quotation",
    "inspection RFQ checklist"
  ],
  "offer": "inspection",
  "answer": "A lower quotation may describe a smaller scope rather than a more efficient service. Build a comparison around the asset population, examination requirements, preparation responsibilities and deliverables. Ask each bidder to make exclusions and provisional assumptions explicit. Keep technical capability confirmation separate from the commercial comparison. Where one proposal includes engineering review and another only supplies examination reports, resolve that difference before treating the totals as comparable.",
  "decisions": [
    {
      "label": "Scope baseline",
      "evidence": "Use the same asset list, drawings, method requirements and examination extent for each bidder. Record any questions that change the baseline.",
      "question": "Which quantity or requirement is still provisional?"
    },
    {
      "label": "Execution assumptions",
      "evidence": "Compare site preparation, access, work windows, standby conditions and report timing. Confirm who supplies each prerequisite.",
      "question": "Which owner-provided condition would change the price or schedule if unavailable?"
    },
    {
      "label": "Deliverable and review",
      "evidence": "List the reports, source files and review responsibilities included. Identify any separate engineering or certification service.",
      "question": "Does the quotation include the decision you need, or only the data feeding that decision?"
    }
  ],
  "example": "Hypothetical procurement: one bid includes a consolidated report register, while another prices individual reports only. The buyer records the difference and asks both providers to price the same handover requirement. A separate access assumption remains unresolved with the site team. The comparison can proceed transparently, with that dependency visible, instead of presenting a single total that conceals different obligations.",
  "fields": [
    {
      "label": "Common baseline",
      "hint": "Reference the asset list, drawings and examination requirements sent to all bidders."
    },
    {
      "label": "Assumptions",
      "hint": "List quantities, access and scheduling assumptions requiring confirmation."
    },
    {
      "label": "Deliverables",
      "hint": "Specify report, register and source-data requirements."
    },
    {
      "label": "Technical confirmation",
      "hint": "Record credentials or approvals that the buyer must verify."
    },
    {
      "label": "Commercial clarification",
      "hint": "Identify exclusions or optional work to resolve before award."
    }
  ],
  "links": [
    {
      "path": "/inspection-services",
      "label": "industrial NDT inspection services",
      "context": "Use the normalized brief to request"
    },
    {
      "path": "/consulting",
      "label": "NDT technical consulting",
      "context": "For unresolved programme questions, discuss"
    }
  ],
  "boundary": "This comparison does not verify a supplier’s credentials or establish service availability. Obtain written scope and capability confirmation before award."
};
export function referralUrl(path: string, placement: string) { const url = new URL(path, "https://atlantisndt.com"); url.search = new URLSearchParams({ satellite: site.slug, cta: placement, utm_source: site.slug, utm_medium: "referral", utm_campaign: "satellite-product-funnels", utm_content: placement }).toString(); return url.toString(); }
