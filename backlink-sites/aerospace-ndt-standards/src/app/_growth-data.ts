// Generated from scripts/satellite-upgrade/growth-content.json.
import { site } from "./_satellite-data";
export const growth = {
  "site": "aerospace-ndt-standards",
  "slug": "aerospace-ndt-supplier-review",
  "title": "Prepare an aerospace NDT supplier review without assuming approval",
  "description": "Map customer requirements, personnel scope and technique evidence to a focused aerospace NDT support enquiry.",
  "keywords": [
    "aerospace NDT qualification",
    "NAS 410 training requirements",
    "aerospace NDT procedure review"
  ],
  "offer": "consulting",
  "answer": "Begin with the customer flowdown and the specific product and process. Aerospace NDT requirements can involve personnel qualification, technique approval, supplier authorization and record retention; evidence for one does not prove the others. Build a review matrix that identifies the requirement owner and the exact evidence expected. Where a document is missing or its revision is unclear, record an open question rather than treating a broadly worded capability statement as approval for the work.",
  "decisions": [
    {
      "label": "Customer and product scope",
      "evidence": "Identify the customer specifications, drawing revisions, materials and product forms included in the request. Preserve any process restrictions.",
      "question": "Does the requested support cover this product and customer requirement?"
    },
    {
      "label": "Personnel and technique",
      "evidence": "Separate the personnel programme from the examination technique and its approval evidence. Ask who reviews method-specific scope and changes.",
      "question": "Which customer or employer approvals must exist before production work is authorized?"
    },
    {
      "label": "Supplier evidence",
      "evidence": "Request the evidence required by the purchasing organization for the proposed engagement. A general training record or marketing claim is not equivalent to approved-supplier status.",
      "question": "Who verifies the evidence and records the supplier decision?"
    }
  ],
  "example": "Hypothetical review: a supplier offers procedure-writing support, while the customer pack also requires approval of the production technique. The buyer keeps those deliverables separate and identifies who has authority to approve the technique. The scope can then cover a document review without implying permission to inspect or release parts. Any missing flowdown remains visible until the customer or authorized quality function resolves it.",
  "fields": [
    {
      "label": "Product and customer",
      "hint": "Describe the product form and customer requirements without controlled drawings."
    },
    {
      "label": "Personnel framework",
      "hint": "Identify applicable qualification requirements for confirmation."
    },
    {
      "label": "Technique scope",
      "hint": "State whether the need is drafting, review, demonstration or approval support."
    },
    {
      "label": "Evidence required",
      "hint": "List supplier, personnel and procedure evidence expected by the buyer."
    },
    {
      "label": "Approval owner",
      "hint": "Identify who accepts each deliverable and authorizes production use."
    }
  ],
  "links": [
    {
      "path": "/consulting/ndt-consulting-level-iii",
      "label": "NDT procedure review",
      "context": "Discuss the defined scope for"
    },
    {
      "path": "/training",
      "label": "method-specific NDT training",
      "context": "For learning needs, enquire about"
    }
  ],
  "boundary": "No aerospace accreditation, customer approval or NAS 410 programme acceptance is claimed by this resource. Confirm the required authorizations for each engagement."
};
export function referralUrl(path: string, placement: string) { const url = new URL(path, "https://atlantisndt.com"); url.search = new URLSearchParams({ satellite: site.slug, cta: placement, utm_source: site.slug, utm_medium: "referral", utm_campaign: "satellite-product-funnels", utm_content: placement }).toString(); return url.toString(); }
