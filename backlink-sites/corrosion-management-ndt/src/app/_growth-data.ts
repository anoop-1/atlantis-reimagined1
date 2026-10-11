// Generated from scripts/satellite-upgrade/growth-content.json.
import { site } from "./_satellite-data";
export const growth = {
  "site": "corrosion-management-ndt",
  "slug": "thickness-campaign-comparability",
  "title": "Can two thickness campaigns be compared? Check before plotting a trend",
  "description": "Review locations, measurement context and component changes before using inspection history for corrosion assessment.",
  "keywords": [
    "corrosion mapping services",
    "ultrasonic thickness measurement services",
    "inspection history management"
  ],
  "offer": "inspection",
  "answer": "A difference between recorded thickness values is not automatically evidence of a corrosion rate. First confirm that the measurements refer to the same component and comparable locations, with compatible units and documented examination conditions. Repairs, relocated points, coatings and changed coverage can complicate interpretation. Prepare a comparability review for the responsible engineer before asking software to plot a trend. Keep excluded or uncertain records visible so the graph does not imply more continuity than the evidence supports.",
  "decisions": [
    {
      "label": "Location continuity",
      "evidence": "Check component identity, CML or point reference, drawing revision and physical location. Retain records of replacement or relocation.",
      "question": "Are the two values associated with the same intended measurement location?"
    },
    {
      "label": "Measurement context",
      "evidence": "Review method, equipment references, surface or coating condition, units and reported limitations. Clarify missing metadata before combining records.",
      "question": "Which differences could affect the meaning of the comparison?"
    },
    {
      "label": "Engineering use",
      "evidence": "Identify the assessment the owner needs and who confirms whether the data is suitable. A planning worksheet cannot establish remaining life or an interval.",
      "question": "Which values are accepted for assessment, and which require further examination?"
    }
  ],
  "example": "Hypothetical campaign: an old report uses point names that were reassigned after a spool replacement. A spreadsheet initially shows an apparent increase in thickness. The reviewer separates the replacement component’s baseline from the previous history and documents the mapping decision. The corrected dataset can support a responsible review without presenting the change as measurement error or an improvement in the original component’s condition.",
  "fields": [
    {
      "label": "Comparison purpose",
      "hint": "State the question the integrity engineer needs answered."
    },
    {
      "label": "Location evidence",
      "hint": "Describe point IDs, drawings and any component changes."
    },
    {
      "label": "Measurement metadata",
      "hint": "List dates, units, methods and relevant limitations."
    },
    {
      "label": "Uncertain records",
      "hint": "Identify missing or conflicting information requiring review."
    },
    {
      "label": "Assessment owner",
      "hint": "Name the role that approves the comparison dataset and next actions."
    }
  ],
  "links": [
    {
      "path": "/inspection-services",
      "label": "ultrasonic thickness measurement services",
      "context": "Discuss the examination scope for"
    },
    {
      "path": "/digital-twin-reporting",
      "label": "inspection history visualization",
      "context": "Explore traceable"
    }
  ],
  "boundary": "This guide does not calculate corrosion rates, remaining life, fitness for service or inspection intervals. Those decisions require suitable data and authorized engineering assessment."
};
export function referralUrl(path: string, placement: string) { const url = new URL(path, "https://atlantisndt.com"); url.search = new URLSearchParams({ satellite: site.slug, cta: placement, utm_source: site.slug, utm_medium: "referral", utm_campaign: "satellite-product-funnels", utm_content: placement }).toString(); return url.toString(); }
