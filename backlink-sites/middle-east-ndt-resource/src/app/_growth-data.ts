// Generated from scripts/satellite-upgrade/growth-content.json.
import { site } from "./_satellite-data";
export const growth = {
  "site": "middle-east-ndt-resource",
  "slug": "cross-border-ndt-training-project-brief",
  "title": "Plan a cross-border NDT training or project enquiry",
  "description": "Clarify country, employer requirements, time zones and delivery responsibilities without relying on assumed local presence.",
  "keywords": [
    "corporate NDT training Middle East",
    "onsite NDT training enquiry",
    "international NDT consulting"
  ],
  "offer": "training",
  "answer": "Begin with the country, employer and required outcome. A regional webpage is not evidence of a local office, approved supplier status or available onsite personnel. For training, identify the applicable pathway and where practical work will occur. For consulting or inspection, identify site requirements and approval responsibilities before discussing travel. A cross-border brief should also clarify document language, time zones and who can resolve technical questions, so scheduling convenience does not conceal a mismatch in requirements.",
  "decisions": [
    {
      "label": "Employer requirements",
      "evidence": "Collect the written practice, customer requirements or programme documents relevant to the enquiry. Ask who confirms recognition or approval.",
      "question": "Which requirements must be satisfied before the employer accepts the deliverable?"
    },
    {
      "label": "Delivery arrangements",
      "evidence": "Separate remote sessions, practical work and any proposed onsite activity. State country, location, time zone and dates as requirements to confirm.",
      "question": "What personnel, facilities or permissions must the employer arrange locally?"
    },
    {
      "label": "Technical communication",
      "evidence": "Agree the controlling document language and review process for translations. Keep interpretation questions assigned to a named role.",
      "question": "How will the team resolve inconsistent terminology before instruction or work begins?"
    }
  ],
  "example": "Hypothetical cohort: an employer has technicians at two sites working different shifts. The enquiry specifies the methods, learner records, controlling documents and practical arrangements at each site. The provider can then discuss a realistic schedule and confirm which delivery components are available. No local office or operator approval needs to be implied to produce a clear and useful proposal.",
  "fields": [
    {
      "label": "Country and buyer",
      "hint": "State the country, employer type and individual or corporate requirement."
    },
    {
      "label": "Outcome",
      "hint": "Separate training, document review and inspection execution."
    },
    {
      "label": "Recognition or approval",
      "hint": "Identify the employer or customer documents to be checked."
    },
    {
      "label": "Delivery logistics",
      "hint": "List time zones, dates, facilities and proposed practical arrangements."
    },
    {
      "label": "Language and review",
      "hint": "Specify document language and the role resolving technical questions."
    }
  ],
  "links": [
    {
      "path": "/training",
      "label": "corporate NDT training",
      "context": "Prepare a location-specific enquiry for"
    },
    {
      "path": "/consulting",
      "label": "international NDT consulting",
      "context": "For programme or document support, discuss"
    }
  ],
  "boundary": "Availability, travel and local approvals require confirmation. No country listing establishes local facilities, employment authorization or customer acceptance."
};
export function referralUrl(path: string, placement: string) { const url = new URL(path, "https://atlantisndt.com"); url.search = new URLSearchParams({ satellite: site.slug, cta: placement, utm_source: site.slug, utm_medium: "referral", utm_campaign: "satellite-product-funnels", utm_content: placement }).toString(); return url.toString(); }
