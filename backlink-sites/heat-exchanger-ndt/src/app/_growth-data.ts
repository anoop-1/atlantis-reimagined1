// Generated from scripts/satellite-upgrade/growth-content.json.
import { site } from "./_satellite-data";
export const growth = {
  "site": "heat-exchanger-ndt",
  "slug": "tube-inspection-scope-comparison",
  "title": "Heat exchanger tube inspection: compare scope, coverage and deliverables",
  "description": "Prepare a tube inspection enquiry with material, tube layout, preparation and follow-up requirements clearly defined.",
  "keywords": [
    "heat exchanger tube inspection",
    "eddy current tube inspection planning",
    "tube inspection reporting"
  ],
  "offer": "inspection",
  "answer": "Start with the exchanger configuration and the inspection objective rather than requesting a technique by name alone. Tube material, geometry, deposits, accessibility and the condition of interest affect the technical review. Provide the tube sheet layout and previous plugging or replacement history. Agree how the provider will record examined tubes, coverage limitations and locations needing follow-up. A method label and a percentage of tubes are not enough to explain what evidence the owner will receive.",
  "decisions": [
    {
      "label": "Tube population",
      "evidence": "Identify exchanger and bundle references, tube material and dimensions, layout orientation and known plugging or replacement. Mark uncertain records.",
      "question": "Can every result be placed on the same tube map used by maintenance?"
    },
    {
      "label": "Preparation and coverage",
      "evidence": "Describe cleaning, access and the proposed examination extent. Ask the technical reviewer to identify method limitations and required verification.",
      "question": "How will unexamined or restricted areas be distinguished from examined areas?"
    },
    {
      "label": "Results and follow-up",
      "evidence": "Agree tube-level identifiers, result files, review status and the process for resolving ambiguous findings. Keep disposition decisions with the owner’s authority.",
      "question": "Who selects follow-up work and how is it linked to the original examination?"
    }
  ],
  "example": "Hypothetical enquiry: the owner requests inspection of a bundle but the latest tube map omits several plugged tubes. Before mobilization, the team reconciles the map and flags unresolved positions. The provider quotes against the clarified population and states cleaning assumptions. During reporting, inaccessible tubes retain their own status rather than disappearing from the denominator or being counted as acceptable.",
  "fields": [
    {
      "label": "Exchanger details",
      "hint": "List bundle reference, material, tube dimensions and available drawings."
    },
    {
      "label": "Tube map",
      "hint": "Describe orientation, numbering and plugging or replacement history."
    },
    {
      "label": "Inspection objective",
      "hint": "State the suspected condition and the decision the owner needs to make."
    },
    {
      "label": "Preparation",
      "hint": "Assign cleaning, access and availability of the bundle."
    },
    {
      "label": "Report and review",
      "hint": "Define coverage records, file formats and follow-up authority."
    }
  ],
  "links": [
    {
      "path": "/inspection-services",
      "label": "tube inspection scope review",
      "context": "Request a"
    },
    {
      "path": "/digital-twin-reporting",
      "label": "inspection data visualization",
      "context": "Discuss traceable presentation of the results through"
    }
  ],
  "boundary": "Technique suitability, examination capability and any tube disposition require application-specific confirmation. This guide does not rank techniques or set plugging criteria."
};
export function referralUrl(path: string, placement: string) { const url = new URL(path, "https://atlantisndt.com"); url.search = new URLSearchParams({ satellite: site.slug, cta: placement, utm_source: site.slug, utm_medium: "referral", utm_campaign: "satellite-product-funnels", utm_content: placement }).toString(); return url.toString(); }
