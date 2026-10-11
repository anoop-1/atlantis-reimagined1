// Generated from scripts/satellite-upgrade/growth-content.json.
import { site } from "./_satellite-data";
export const growth = {
  "site": "tank-inspection-resource",
  "slug": "tank-floor-shell-roof-rfq",
  "title": "Storage tank inspection RFQ: separate floor, shell and roof deliverables",
  "description": "Prepare a tank inspection package with component boundaries, preparation assumptions and assessment responsibilities.",
  "keywords": [
    "storage tank inspection services",
    "API 653 tank inspection",
    "tank floor inspection planning"
  ],
  "offer": "inspection",
  "answer": "Build the tank scope component by component. Floor, shell, roof and associated details can require different access, examination and reporting arrangements. Provide drawings, previous findings, repair history and the owner’s governing programme. Identify what cleaning and preparation will be completed before the provider arrives. Keep examination results distinct from the inspector’s review and engineering decisions. A clear RFQ makes it possible to confirm service scope without assuming every tank-related activity is included.",
  "decisions": [
    {
      "label": "Floor package",
      "evidence": "Provide plate layout, repair records, accessible areas and the proposed examination objective. Ask how limitations and any follow-up verification will be recorded.",
      "question": "Can findings be located on the current floor map and traced to supporting evidence?"
    },
    {
      "label": "Shell and roof package",
      "evidence": "Identify components, locations and access arrangements relevant to the specified work. Keep each package’s coverage visible.",
      "question": "Which areas require separate preparation or specialist access confirmation?"
    },
    {
      "label": "Assessment and closeout",
      "evidence": "State the roles for report review, repair disposition and any interval or fitness decision. Agree the final dossier contents.",
      "question": "Who accepts the complete package and resolves outstanding limitations?"
    }
  ],
  "example": "Hypothetical RFQ: a tank owner requests a floor examination, but the historical report references a plate map that predates repairs. The owner supplies the repair revision and flags unresolved plate identities. The provider states preparation and coverage assumptions, and the reviewer receives a traceable location map with the results. Shell and roof work remain separate line items rather than implied inclusions.",
  "fields": [
    {
      "label": "Tank records",
      "hint": "List drawings, previous reports and repairs available."
    },
    {
      "label": "Component scope",
      "hint": "Separate floor, shell, roof and associated work."
    },
    {
      "label": "Preparation",
      "hint": "Assign cleaning, isolation and access prerequisites to the appropriate site roles."
    },
    {
      "label": "Coverage reporting",
      "hint": "Define location maps, limitations and supporting files required."
    },
    {
      "label": "Assessment responsibility",
      "hint": "Identify the inspector, engineer and owner decisions included or excluded."
    }
  ],
  "links": [
    {
      "path": "/consulting/api-653-tank-inspector-services",
      "label": "API 653 tank inspection services",
      "context": "Review the scope of"
    },
    {
      "path": "/digital-twin-reporting",
      "label": "tank inspection history visualization",
      "context": "Explore"
    }
  ],
  "boundary": "This worksheet establishes no tank acceptance limits or inspection intervals. Confirm the programme, qualified personnel, service availability and responsible assessment roles."
};
export function referralUrl(path: string, placement: string) { const url = new URL(path, "https://atlantisndt.com"); url.search = new URLSearchParams({ satellite: site.slug, cta: placement, utm_source: site.slug, utm_medium: "referral", utm_campaign: "satellite-product-funnels", utm_content: placement }).toString(); return url.toString(); }
