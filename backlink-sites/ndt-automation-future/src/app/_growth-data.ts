// Generated from scripts/satellite-upgrade/growth-content.json.
import { site } from "./_satellite-data";
export const growth = {
  "site": "ndt-automation-future",
  "slug": "ndt-automation-pilot-selection",
  "title": "Choose an NDT automation pilot that exposes the exceptions",
  "description": "Compare dispatch, equipment checks and report review as automation pilots, with a practical baseline and human review boundary.",
  "keywords": [
    "NDT workflow automation",
    "inspection scheduling software",
    "technician certification tracking",
    "equipment calibration tracking software"
  ],
  "offer": "erp",
  "answer": "Select a recurring handoff whose inputs and owner are already understood. Automating an ambiguous process can distribute inconsistent records faster. For an NDT pilot, describe the ordinary case, one missing input and one disputed input before evaluating software. Keep the person authorized to resolve an exception visible. Measure the work the team actually performs, including corrections, rather than counting notifications as productivity. A useful pilot ends with evidence that the next person can use, not simply an automated status change.",
  "decisions": [
    {
      "label": "Dispatch readiness",
      "evidence": "Collect the assignment, method, personnel authorization and equipment references used by the coordinator. Identify which checks are advisory and which require an authorized decision.",
      "question": "What happens when the record is missing even though the technician says it is current?"
    },
    {
      "label": "Calibration record handoff",
      "evidence": "Test serial-number matching, report retrieval and an instrument exchanged after scheduling. Calendar reminders do not establish instrument suitability for an examination.",
      "question": "Can the team see which record was checked for the actual instrument used?"
    },
    {
      "label": "Report review queue",
      "evidence": "Use a rejected report with an attachment change and reassignment. The workflow should retain the reason for return and make the current reviewer clear.",
      "question": "Can someone distinguish a draft, a submitted report and an approved issue?"
    }
  ],
  "example": "Hypothetical pilot: dispatch staff receive a last-minute instrument substitution. The demonstration should show the replacement serial number, the supporting record and the unresolved suitability question. It should not silently inherit the previous instrument’s status. Compare the time spent finding evidence and the number of corrections with the existing process. Define what constitutes an exception before the pilot so a lower exception count does not merely reflect weaker reporting.",
  "fields": [
    {
      "label": "Repeated task",
      "hint": "Describe the handoff and how often the team encounters it."
    },
    {
      "label": "Record owners",
      "hint": "List who creates, checks and approves each input."
    },
    {
      "label": "Exception to test",
      "hint": "Provide an anonymized missing, disputed or changed record."
    },
    {
      "label": "Baseline measure",
      "hint": "Choose elapsed handoff time, re-entry or correction counts with a clear definition."
    },
    {
      "label": "Human decision",
      "hint": "State which action requires review before the workflow can continue."
    }
  ],
  "links": [
    {
      "path": "/erp",
      "label": "NDT workflow management",
      "context": "Use the pilot brief to discuss"
    },
    {
      "path": "/ndt-inspection-software",
      "label": "inspection management software for NDT companies",
      "context": "Compare the operational requirements for"
    }
  ],
  "boundary": "An automated record check is not authorization to perform inspection, and a successful pilot is not evidence that every workflow is supported."
};
export function referralUrl(path: string, placement: string) { const url = new URL(path, "https://atlantisndt.com"); url.search = new URLSearchParams({ satellite: site.slug, cta: placement, utm_source: site.slug, utm_medium: "referral", utm_campaign: "satellite-product-funnels", utm_content: placement }).toString(); return url.toString(); }
