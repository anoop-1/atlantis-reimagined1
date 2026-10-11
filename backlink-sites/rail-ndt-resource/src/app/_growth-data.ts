// Generated from scripts/satellite-upgrade/growth-content.json.
import { site } from "./_satellite-data";
export const growth = {
  "site": "rail-ndt-resource",
  "slug": "rail-component-ndt-approval-brief",
  "title": "Rail NDT: match the component to the operator’s approval requirements",
  "description": "Prepare component, procedure and personnel evidence before requesting rail-related NDT support.",
  "keywords": [
    "rail component NDT",
    "rail NDT qualification",
    "railway inspection procedure review"
  ],
  "offer": "consulting",
  "answer": "Specify the component and the operator or customer requirements before procuring rail-related NDT. Rail, wheel, axle and fabricated assemblies should not be treated as one interchangeable application. Identify the applicable procedure, personnel approval route and record requirements. A general qualification in an NDT method may not establish authorization under the relevant maintenance programme. Keep document support, training and examination execution as distinct requests so the supplier can confirm the specific engagement.",
  "decisions": [
    {
      "label": "Component and programme",
      "evidence": "Provide the component type, identity and applicable maintenance or manufacturing requirements. Identify the controlling document revisions.",
      "question": "Which operator or customer programme governs this task?"
    },
    {
      "label": "Technique and personnel",
      "evidence": "State the required procedure and approval evidence, including who can review changes. Avoid assuming a generic method certificate covers the application.",
      "question": "Who verifies the proposed personnel and procedure for the specific scope?"
    },
    {
      "label": "Disposition record",
      "evidence": "Agree how findings, limitations and component status reach the authorized reviewer. Maintain identity through removal or replacement.",
      "question": "Who decides whether the component is released, restricted or withdrawn?"
    }
  ],
  "example": "Hypothetical request: a maintenance organization seeks training support for a component-specific examination. The brief identifies the operator’s procedure and the approval requirements for personnel. The provider can discuss training scope while the operator retains authority over qualification and service use. A course completion record is not presented as authorization to examine every component in the fleet.",
  "fields": [
    {
      "label": "Component type",
      "hint": "Identify rail, wheel, axle or fabricated assembly and its record reference."
    },
    {
      "label": "Programme",
      "hint": "List operator or customer requirements and document revisions."
    },
    {
      "label": "Requested support",
      "hint": "Separate training, procedure review and examination execution."
    },
    {
      "label": "Approval evidence",
      "hint": "Identify required personnel and supplier approvals."
    },
    {
      "label": "Disposition owner",
      "hint": "State the role receiving results and deciding component status."
    }
  ],
  "links": [
    {
      "path": "/consulting/ndt-consulting-level-iii",
      "label": "NDT procedure and qualification support",
      "context": "Discuss"
    },
    {
      "path": "/training",
      "label": "application-focused NDT training",
      "context": "Prepare a scope for"
    }
  ],
  "boundary": "No railway operator approval or specialist fleet capability is implied. Confirm required authorizations before arranging work or relying on training records."
};
export function referralUrl(path: string, placement: string) { const url = new URL(path, "https://atlantisndt.com"); url.search = new URLSearchParams({ satellite: site.slug, cta: placement, utm_source: site.slug, utm_medium: "referral", utm_campaign: "satellite-product-funnels", utm_content: placement }).toString(); return url.toString(); }
