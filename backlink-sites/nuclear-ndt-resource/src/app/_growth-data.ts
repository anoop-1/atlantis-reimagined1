// Generated from scripts/satellite-upgrade/growth-content.json.
import { site } from "./_satellite-data";
export const growth = {
  "site": "nuclear-ndt-resource",
  "slug": "nuclear-ndt-document-support-boundary",
  "title": "Nuclear NDT support: define document access and authorization before engagement",
  "description": "Prepare a controlled support enquiry that separates document assistance, qualification requirements and authorized inspection work.",
  "keywords": [
    "nuclear NDT programme support",
    "nuclear inspection documentation",
    "NDT quality programme review"
  ],
  "offer": "consulting",
  "answer": "Define the requested support within the owner’s approved programme before exchanging a technical package. Document review, training assistance and examination execution can carry different qualification and supplier requirements. State the component classification and governing programme through an approved channel, and identify who is permitted to receive and review the information. A general NDT capability statement does not establish nuclear authorization. An initial enquiry can describe the task boundary without disclosing controlled plant or security information.",
  "decisions": [
    {
      "label": "Programme and scope",
      "evidence": "Identify the governing programme and the type of support required. Keep drafting assistance separate from approval or execution authority.",
      "question": "Which programme requirements apply specifically to the proposed deliverable?"
    },
    {
      "label": "Supplier and personnel evidence",
      "evidence": "List the qualifications, approvals and quality requirements that the owner will verify before engagement.",
      "question": "Who determines whether the proposed supplier is eligible for this scope?"
    },
    {
      "label": "Information and acceptance",
      "evidence": "Agree the permitted exchange channel, revision control and receiving authority. Record how comments and unresolved issues are returned.",
      "question": "Who accepts the completed support work and authorizes any subsequent use?"
    }
  ],
  "example": "Hypothetical enquiry: a programme team needs help organizing a document review package. The initial brief describes the administrative deliverable and applicable approval process without providing controlled drawings. Supplier eligibility and the permitted information channel are confirmed before documents are exchanged. Completing that package does not confer authority to approve a procedure or perform examinations under the programme.",
  "fields": [
    {
      "label": "Support boundary",
      "hint": "Describe the administrative or technical task at a non-sensitive level."
    },
    {
      "label": "Programme requirements",
      "hint": "Identify the requirements to be reviewed through an approved channel."
    },
    {
      "label": "Eligibility evidence",
      "hint": "List supplier and personnel approvals the owner must verify."
    },
    {
      "label": "Information handling",
      "hint": "State the authorized exchange and revision-control arrangements."
    },
    {
      "label": "Acceptance role",
      "hint": "Identify who accepts the deliverable and controls its subsequent use."
    }
  ],
  "links": [
    {
      "path": "/consulting",
      "label": "NDT programme consulting",
      "context": "Request a capability and scope discussion for"
    },
    {
      "path": "/erp/apps/ndt-reports",
      "label": "controlled inspection reporting requirements",
      "context": "For software evaluation, discuss"
    }
  ],
  "boundary": "Atlantis nuclear authorization, accreditation and approved-supplier status are not assumed. Do not enter controlled or security-sensitive information in this public worksheet."
};
export function referralUrl(path: string, placement: string) { const url = new URL(path, "https://atlantisndt.com"); url.search = new URLSearchParams({ satellite: site.slug, cta: placement, utm_source: site.slug, utm_medium: "referral", utm_campaign: "satellite-product-funnels", utm_content: placement }).toString(); return url.toString(); }
