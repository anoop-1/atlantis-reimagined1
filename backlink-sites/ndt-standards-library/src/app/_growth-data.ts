// Generated from scripts/satellite-upgrade/growth-content.json.
import { site } from "./_satellite-data";
export const growth = {
  "site": "ndt-standards-library",
  "slug": "written-practice-procedure-acceptance",
  "title": "Written practice, examination procedure and acceptance criteria: who owns what?",
  "description": "Separate personnel qualification rules, examination instructions and product acceptance before requesting Level III support.",
  "keywords": [
    "NDT written practice development",
    "SNT-TC-1A consulting",
    "NDT procedure development",
    "NDT Level III consulting services",
    "ASNT Level III consultant"
  ],
  "offer": "consulting",
  "answer": "These documents answer different questions. A written practice describes an employer’s personnel qualification and certification arrangements under the applicable framework. An examination procedure describes how a specified examination is performed. Acceptance requirements determine how results are judged for the particular product or contract. Connecting their references does not make them interchangeable. Before requesting technical support, list the documents, editions, customer supplements and approval roles already in place, together with the specific gap you need resolved.",
  "decisions": [
    {
      "label": "Personnel programme",
      "evidence": "Collect the employer’s written practice, responsibility assignments and relevant method scopes. Record the framework and edition required by the contract.",
      "question": "Who certifies and authorizes personnel for the intended work?"
    },
    {
      "label": "Examination instructions",
      "evidence": "Identify the procedure and technique sheet, their approval state and the component range covered. Document any customer approval requirements.",
      "question": "Does the instruction cover the actual material, geometry and examination objective?"
    },
    {
      "label": "Acceptance and disposition",
      "evidence": "Identify where acceptance criteria come from and who handles ambiguity or a conflict. Do not use a method standard as a substitute without checking the contract.",
      "question": "Who can decide the disposition when two referenced requirements differ?"
    }
  ],
  "example": "Hypothetical review: a fabrication job has a current personnel written practice and a weld examination procedure, but the purchase order references a different edition of the construction code. Updating the personnel document does not resolve the acceptance question. The quality team records the conflict, identifies the contract authority and holds the affected decision for clarification. The consultant’s deliverable should state the reviewed scope and outstanding owner decisions.",
  "fields": [
    {
      "label": "Document register",
      "hint": "List the written practice, procedure, acceptance documents and editions."
    },
    {
      "label": "Requested support",
      "hint": "Choose the specific document or programme question needing review."
    },
    {
      "label": "Contract supplements",
      "hint": "Identify customer requirements and any conflict with existing instructions."
    },
    {
      "label": "Approval responsibilities",
      "hint": "Name the employer, Level III and customer roles that must approve changes."
    },
    {
      "label": "Deliverable",
      "hint": "State whether you need a gap review, draft revision, examination support or audit evidence."
    }
  ],
  "links": [
    {
      "path": "/consulting/ndt-consulting-level-iii",
      "label": "written practice and procedure development",
      "context": "Prepare a defined scope for"
    },
    {
      "path": "/consulting",
      "label": "NDT Level III consulting services",
      "context": "Review the wider range of"
    }
  ],
  "boundary": "This guide does not reproduce licensed standards or interpret a contract. Use the governing documents and the authorized technical and contractual reviewers."
};
export function referralUrl(path: string, placement: string) { const url = new URL(path, "https://atlantisndt.com"); url.search = new URLSearchParams({ satellite: site.slug, cta: placement, utm_source: site.slug, utm_medium: "referral", utm_campaign: "satellite-product-funnels", utm_content: placement }).toString(); return url.toString(); }
