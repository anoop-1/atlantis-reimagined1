// Generated from scripts/satellite-upgrade/growth-content.json.
import { site } from "./_satellite-data";
export const growth = {
  "site": "asset-integrity-hub",
  "slug": "digital-twin-readiness-for-inspection-history",
  "title": "Is your inspection history ready for a Digital Twin?",
  "description": "Check asset identity, location mapping and report provenance before evaluating digital twin inspection reporting.",
  "keywords": [
    "digital twins for NDT",
    "digital twin inspection reporting",
    "asset integrity visualization",
    "NDT data visualization",
    "inspection history management",
    "digital twin integration with ERP"
  ],
  "offer": "twin",
  "answer": "Start with a traceable inspection location, not the appearance of the model. A useful demonstration should connect a visible point to the asset identifier, inspection date, source report and review state. If location references are inconsistent, document the uncertainty before presenting historical trends. A simplified asset representation can be a better pilot than a detailed model with untraceable readings. Agree who maintains the asset register and whether the proposed software is used independently or exchanges data with an ERP.",
  "decisions": [
    {
      "label": "Asset and location identity",
      "evidence": "Choose a small set of locations with drawings, tags and known changes. Retain the original reference when a location is renamed or a component replaced.",
      "question": "Can a reviewer explain why two records refer to the same physical location?"
    },
    {
      "label": "Evidence and history",
      "evidence": "Bring source reports with dates, methods, units and issue status. Different coverage or measurement conditions can limit a historical comparison.",
      "question": "Can the model open the exact report behind a displayed value?"
    },
    {
      "label": "Integration boundary",
      "evidence": "Map the owner of each identifier and the direction of data exchange. An export file, a scheduled import and a supported live integration are different arrangements.",
      "question": "Which system remains authoritative if the model and ERP disagree?"
    }
  ],
  "example": "Hypothetical pilot: an asset has drawings and two thickness campaigns, but several points moved during a repair. Keep unchanged locations in the comparison set and place relocated points in a review queue. Show the source evidence and the reason for exclusion. A model that displays this uncertainty is more useful than a smooth trend built from mismatched points. Ask the integrity engineer what decisions the pilot should support before expanding it.",
  "fields": [
    {
      "label": "Pilot asset",
      "hint": "Identify the asset class and the engineering question, using an anonymized tag."
    },
    {
      "label": "Location references",
      "hint": "List drawings, coordinates or point IDs and any mapping uncertainty."
    },
    {
      "label": "Available evidence",
      "hint": "Describe source reports, date ranges, units and review status."
    },
    {
      "label": "System ownership",
      "hint": "Name the register or ERP that owns identifiers and proposed exchange formats."
    },
    {
      "label": "Review outcome",
      "hint": "State what the responsible engineer needs to trace or compare."
    }
  ],
  "links": [
    {
      "path": "/digital-twin-reporting",
      "label": "digital twin inspection reporting",
      "context": "Explore software requirements for"
    },
    {
      "path": "/digital-twins",
      "label": "asset integrity visualization",
      "context": "Review the broader context for"
    }
  ],
  "boundary": "Visualizing evidence does not determine fitness for service, corrosion limits or inspection intervals. Technical decisions remain with the responsible authority."
};
export function referralUrl(path: string, placement: string) { const url = new URL(path, "https://atlantisndt.com"); url.search = new URLSearchParams({ satellite: site.slug, cta: placement, utm_source: site.slug, utm_medium: "referral", utm_campaign: "satellite-product-funnels", utm_content: placement }).toString(); return url.toString(); }
