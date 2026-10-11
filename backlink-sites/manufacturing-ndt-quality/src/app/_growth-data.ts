// Generated from scripts/satellite-upgrade/growth-content.json.
import { site } from "./_satellite-data";
export const growth = {
  "site": "manufacturing-ndt-quality",
  "slug": "production-ndt-first-article-to-batch",
  "title": "Production NDT: connect first-article evidence to the batch inspection plan",
  "description": "Record part families, process changes and traceability before extending an examination instruction across production.",
  "keywords": [
    "manufacturing NDT quality control",
    "production inspection traceability",
    "NDT reporting for manufacturing"
  ],
  "offer": "reporting",
  "answer": "An examination demonstrated on one part does not automatically cover every part in a production family. Record the material, geometry, manufacturing stage and procedure scope represented by the first article. Identify which differences require technical review before the instruction is reused. In production records, preserve the connection between each item or lot, its examination and any rework. A clean final report should still allow the quality team to understand the route by which the item reached release.",
  "decisions": [
    {
      "label": "Part family",
      "evidence": "List the characteristics the technical reviewer uses to define the procedure’s applicability. Keep drawing revisions and process changes visible.",
      "question": "Which variation moves a part outside the reviewed scope?"
    },
    {
      "label": "Production identity",
      "evidence": "Agree serial, batch or lot references and the examination stage. Prevent reworked items from losing their original identity.",
      "question": "Can the report be connected to the exact item or defined population examined?"
    },
    {
      "label": "Release evidence",
      "evidence": "Separate examination results, nonconformance disposition and the customer’s release authority. Link repeat examinations to the relevant rework.",
      "question": "Who confirms that all required evidence is complete before release?"
    }
  ],
  "example": "Hypothetical production change: a supplier introduces a geometry revision within an existing part number family. The quality team checks whether the examination instruction still applies and records the decision before reusing the old setup. Reports retain the drawing revision and lot identity. A reworked item receives a linked re-examination record, allowing the reviewer to see both the original finding and the evidence supporting its disposition.",
  "fields": [
    {
      "label": "Part scope",
      "hint": "Describe part families, materials and drawing revisions."
    },
    {
      "label": "Procedure applicability",
      "hint": "List the changes that require review by the technical authority."
    },
    {
      "label": "Traceability key",
      "hint": "State whether reports use serial, batch or lot identity."
    },
    {
      "label": "Rework route",
      "hint": "Describe how repaired or reworked items return for examination."
    },
    {
      "label": "Release responsibility",
      "hint": "Identify the quality role and evidence required for final release."
    }
  ],
  "links": [
    {
      "path": "/erp/apps/ndt-reports",
      "label": "manufacturing inspection reporting",
      "context": "Discuss templates and traceability for"
    },
    {
      "path": "/consulting/ndt-consulting-level-iii",
      "label": "NDT procedure development",
      "context": "Resolve applicability questions through"
    }
  ],
  "boundary": "This guide does not define sampling, acceptance limits or product-release authority. Apply the customer requirements and approved quality process."
};
export function referralUrl(path: string, placement: string) { const url = new URL(path, "https://atlantisndt.com"); url.search = new URLSearchParams({ satellite: site.slug, cta: placement, utm_source: site.slug, utm_medium: "referral", utm_campaign: "satellite-product-funnels", utm_content: placement }).toString(); return url.toString(); }
