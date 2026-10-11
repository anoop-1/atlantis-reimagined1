// Generated from scripts/satellite-upgrade/growth-content.json.
import { site } from "./_satellite-data";
export const growth = {
  "site": "mining-ndt-hub",
  "slug": "mining-component-inspection-priorities",
  "title": "Mining component inspection: turn maintenance observations into a usable brief",
  "description": "Document component identity, loading history, repairs and access before selecting NDT for mining equipment.",
  "keywords": [
    "mining equipment NDT",
    "mining maintenance inspection",
    "component inspection planning"
  ],
  "offer": "inspection",
  "answer": "Use the component and the maintenance question as the starting point. A machine name alone does not identify material, geometry, examination area or the consequence of the suspected condition. Gather available manufacturer information, repair history and the observations prompting inspection. Distinguish a planned condition check from an investigation after an event. The responsible engineer should define how the examination evidence will be used and who can decide whether the equipment returns to service.",
  "decisions": [
    {
      "label": "Component identity",
      "evidence": "Record the component reference, material evidence, drawing revision and known replacements. Keep the component’s history separate from the machine’s operating log.",
      "question": "Does the historical report belong to the installed component?"
    },
    {
      "label": "Condition and history",
      "evidence": "Describe observations, loading or event context and previous repairs without diagnosing the damage from a photograph alone.",
      "question": "What question does the engineer need the examination to answer?"
    },
    {
      "label": "Access and return to service",
      "evidence": "Define preparation, accessible areas and the work window. Assign the decision on coverage limitations and the return-to-service process.",
      "question": "Who reviews the findings before operational decisions are made?"
    }
  ],
  "example": "Hypothetical maintenance request: an indication is suspected near a repaired attachment. The planner provides the repair record and identifies which surfaces can be prepared during the shutdown. The examination scope is reviewed around that location and history. If part of the area remains inaccessible, the report retains the limitation and the engineer decides what further evidence is needed instead of assuming the whole component has been cleared.",
  "fields": [
    {
      "label": "Component",
      "hint": "Describe the component, identity and material evidence."
    },
    {
      "label": "Observation",
      "hint": "Record the event or visible condition prompting the request."
    },
    {
      "label": "Repair history",
      "hint": "List known repairs, replacements and available reports."
    },
    {
      "label": "Access plan",
      "hint": "Describe preparation, accessible areas and shutdown constraints."
    },
    {
      "label": "Decision authority",
      "hint": "Identify the engineering and operational review roles."
    }
  ],
  "links": [
    {
      "path": "/inspection-services",
      "label": "mining component inspection scope",
      "context": "Discuss the"
    },
    {
      "path": "/digital-twin-reporting",
      "label": "component inspection history",
      "context": "Explore ways to organize"
    }
  ],
  "boundary": "This worksheet does not establish safe operating limits or authorize return to service. Use the manufacturer and responsible engineering requirements."
};
export function referralUrl(path: string, placement: string) { const url = new URL(path, "https://atlantisndt.com"); url.search = new URLSearchParams({ satellite: site.slug, cta: placement, utm_source: site.slug, utm_medium: "referral", utm_campaign: "satellite-product-funnels", utm_content: placement }).toString(); return url.toString(); }
