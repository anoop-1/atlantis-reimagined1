// Generated from scripts/satellite-upgrade/growth-content.json.
import { site } from "./_satellite-data";
export const growth = {
  "site": "power-generation-ndt",
  "slug": "outage-inspection-priority-work-pack",
  "title": "Power outage NDT: plan around access, component history and decision time",
  "description": "Prepare an outage inspection brief that separates routine work, triggered examinations and engineering hold points.",
  "keywords": [
    "power generation NDT",
    "outage inspection planning",
    "power station inspection reporting"
  ],
  "offer": "inspection",
  "answer": "An outage schedule needs more than a list of examinations. Connect each task to component identity, preparation, access and the point when the responsible reviewer needs the result. Separate routine work from examinations triggered by a finding or repair. Where specialist capability is required, obtain confirmation before locking the schedule. An early report is only useful if its status and coverage are clear enough for the next decision; a preliminary observation should not be mistaken for final acceptance.",
  "decisions": [
    {
      "label": "Component history",
      "evidence": "Gather drawings, material information, prior findings and repair records relevant to the planned task. Identify changes since the previous outage.",
      "question": "Does the current scope address the installed component and known history?"
    },
    {
      "label": "Access dependency",
      "evidence": "Link inspection tasks to disassembly, cleaning and other preparation owned by the site. Identify decision points before access is lost.",
      "question": "When must the report be reviewed to avoid closing an unresolved area?"
    },
    {
      "label": "Triggered work",
      "evidence": "Define how new findings, repair examinations and schedule changes are authorized. Preserve the distinction between preliminary and issued records.",
      "question": "Who can request added scope and who decides whether the evidence is sufficient?"
    }
  ],
  "example": "Hypothetical outage: a component becomes accessible later than planned, leaving little time before reassembly. The coordinator identifies the required review point and asks the technical authority to assess the schedule impact. The provider reports the actual examination coverage and outstanding questions. Reassembly authorization remains with the designated authority rather than being inferred from a partially completed inspection task in the schedule.",
  "fields": [
    {
      "label": "Component package",
      "hint": "List components, drawings and relevant inspection history."
    },
    {
      "label": "Preparation sequence",
      "hint": "Describe access and cleaning dependencies."
    },
    {
      "label": "Decision deadlines",
      "hint": "Identify review points before reassembly or loss of access."
    },
    {
      "label": "Unexpected findings",
      "hint": "Define the route for added scope and repair follow-up."
    },
    {
      "label": "Report status",
      "hint": "Agree how preliminary observations and approved reports are distinguished."
    }
  ],
  "links": [
    {
      "path": "/inspection-services",
      "label": "power-generation inspection scope",
      "context": "Discuss the"
    },
    {
      "path": "/erp/apps/ndt-reports",
      "label": "outage inspection reporting",
      "context": "Explore review and issue control for"
    }
  ],
  "boundary": "Component-specific qualifications, acceptance and return-to-service decisions require the responsible technical authority. No specialist turbine or fleet capability is assumed."
};
export function referralUrl(path: string, placement: string) { const url = new URL(path, "https://atlantisndt.com"); url.search = new URLSearchParams({ satellite: site.slug, cta: placement, utm_source: site.slug, utm_medium: "referral", utm_campaign: "satellite-product-funnels", utm_content: placement }).toString(); return url.toString(); }
