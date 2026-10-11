// Generated from scripts/satellite-upgrade/growth-content.json.
import { site } from "./_satellite-data";
export const growth = {
  "site": "pressure-vessel-ndt",
  "slug": "vessel-thickness-weld-repair-scope",
  "title": "Pressure-vessel inspection enquiries: distinguish thickness, weld and repair work",
  "description": "Prepare a vessel-specific scope with drawings, service history, examination objectives and assessment responsibilities.",
  "keywords": [
    "pressure vessel inspection services",
    "API 510 inspection support",
    "pressure vessel NDT"
  ],
  "offer": "inspection",
  "answer": "State what the examination is intended to establish. Thickness monitoring, weld examination and repair verification provide different evidence and may require different preparation and review. Identify the vessel, material records, service context and governing requirements. Keep examination reporting distinct from the inspector’s programme responsibilities and engineering assessment. An RFQ that separates those roles is easier to review than one that simply requests a vessel to be “certified” after NDT.",
  "decisions": [
    {
      "label": "Thickness work",
      "evidence": "Provide location references, previous reports and any component changes. Ask how measurement conditions and coverage will be documented.",
      "question": "Who confirms that the new measurements can be compared with earlier records?"
    },
    {
      "label": "Weld examination",
      "evidence": "Supply weld identities, geometry, access and the specified examination requirements. Identify applicable technique and acceptance documents.",
      "question": "What evidence will show the actual coverage and any limitation?"
    },
    {
      "label": "Repair support",
      "evidence": "Link repair drawings and revisions to the proposed examinations and required review points. Keep repair approval separate from examination completion.",
      "question": "Who accepts the repair package and determines subsequent operating decisions?"
    }
  ],
  "example": "Hypothetical scope: a vessel has routine monitoring points and a recently repaired nozzle area. The planner creates separate tasks with their own location references and objectives. The provider can confirm the examinations and reporting requirements for each. The final package connects the repair records and inspection reports without implying that the NDT provider has performed every required engineering assessment.",
  "fields": [
    {
      "label": "Vessel identity",
      "hint": "Describe asset reference, materials and drawings available."
    },
    {
      "label": "Examination purpose",
      "hint": "Separate thickness monitoring, weld examination and repair verification."
    },
    {
      "label": "Historical evidence",
      "hint": "List previous readings, reports and known changes."
    },
    {
      "label": "Preparation and access",
      "hint": "Identify internal or external access assumptions for review."
    },
    {
      "label": "Assessment roles",
      "hint": "Assign inspector, engineering and owner decisions."
    }
  ],
  "links": [
    {
      "path": "/consulting/api-510-pressure-vessel-inspector-services",
      "label": "pressure vessel inspection services",
      "context": "Review the scope of"
    },
    {
      "path": "/inspection-services",
      "label": "vessel NDT examination services",
      "context": "Confirm the required"
    }
  ],
  "boundary": "NDT results alone do not establish fitness for service, remaining life or operating authorization. Confirm the responsible inspector and engineering roles."
};
export function referralUrl(path: string, placement: string) { const url = new URL(path, "https://atlantisndt.com"); url.search = new URLSearchParams({ satellite: site.slug, cta: placement, utm_source: site.slug, utm_medium: "referral", utm_campaign: "satellite-product-funnels", utm_content: placement }).toString(); return url.toString(); }
