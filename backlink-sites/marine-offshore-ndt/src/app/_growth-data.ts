// Generated from scripts/satellite-upgrade/growth-content.json.
import { site } from "./_satellite-data";
export const growth = {
  "site": "marine-offshore-ndt",
  "slug": "marine-survey-ndt-scope",
  "title": "Marine survey and NDT scope: make the responsibility boundary explicit",
  "description": "Coordinate owner, survey and examination requirements for vessel or offshore maintenance without assuming class approval.",
  "keywords": [
    "marine NDT inspection",
    "offshore inspection planning",
    "marine inspection report handover"
  ],
  "offer": "inspection",
  "answer": "A marine maintenance scope may involve the owner, repair contractor, survey organization and NDT provider. Write down what each party is expected to inspect, witness, review or approve. A request for NDT does not by itself include survey approval or every access and mobilization service. Identify the asset location and the work window, then reconcile the examination requirements with the repair and survey plan. The final report should make coverage and limitations understandable to the shore team as well as the people present onboard.",
  "decisions": [
    {
      "label": "Survey requirements",
      "evidence": "Collect the applicable owner and survey instructions, including any witness or approval points. Confirm the party authorized to interpret them.",
      "question": "Which examinations require coordination with a survey representative?"
    },
    {
      "label": "Access and execution",
      "evidence": "Describe onboard locations, preparation, access arrangements and the maintenance window. Assign operational coordination responsibilities.",
      "question": "What dependencies could prevent the agreed examination coverage?"
    },
    {
      "label": "Evidence handover",
      "evidence": "Agree drawings, location references and the report package expected by the owner and reviewer. Keep survey disposition distinct from NDT observations.",
      "question": "Can the shore team identify the examined area and unresolved limitations?"
    }
  ],
  "example": "Hypothetical repair period: the repair contractor requests a weld examination, while the owner’s survey plan requires a separate witness step. The coordinator records both activities and aligns their timing before closing access. The NDT report documents the examination performed, and the survey disposition remains a separate controlled record. This avoids treating a completed examination as automatic closure of the wider repair package.",
  "fields": [
    {
      "label": "Asset and location",
      "hint": "Identify vessel or offshore component and drawing references."
    },
    {
      "label": "Required roles",
      "hint": "List owner, repair contractor, survey and NDT responsibilities."
    },
    {
      "label": "Work window",
      "hint": "Describe access, preparation and scheduling dependencies."
    },
    {
      "label": "Examination scope",
      "hint": "State the specified work and any witness requirements for confirmation."
    },
    {
      "label": "Handover",
      "hint": "Define report references, unresolved items and receiving reviewer."
    }
  ],
  "links": [
    {
      "path": "/inspection-services",
      "label": "marine inspection scope review",
      "context": "Discuss the required NDT work through a"
    },
    {
      "path": "/digital-twin-reporting",
      "label": "asset-linked inspection records",
      "context": "Explore"
    }
  ],
  "boundary": "Class-society approval, offshore mobilization and specialist access capability must be confirmed for the specific scope. This resource does not establish those authorizations."
};
export function referralUrl(path: string, placement: string) { const url = new URL(path, "https://atlantisndt.com"); url.search = new URLSearchParams({ satellite: site.slug, cta: placement, utm_source: site.slug, utm_medium: "referral", utm_campaign: "satellite-product-funnels", utm_content: placement }).toString(); return url.toString(); }
