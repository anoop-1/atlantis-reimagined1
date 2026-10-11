// Generated from scripts/satellite-upgrade/growth-content.json.
import { site } from "./_satellite-data";
export const growth = {
  "site": "ndt-equipment-reviews",
  "slug": "ndt-equipment-demo-checklist",
  "title": "How to prepare a fair NDT equipment demonstration",
  "description": "Build an application-led equipment comparison covering geometry, reference samples, operator workflow and data export.",
  "keywords": [
    "NDT equipment selection",
    "ultrasonic testing equipment evaluation",
    "NDT calibration records"
  ],
  "offer": "consulting",
  "answer": "A fair equipment comparison starts with a documented application and a repeatable demonstration brief. The instrument display alone cannot establish suitability. State the material, geometry, access and inspection question, then ask the responsible Level III to define what evidence the demonstration must produce. Compare setup, data interpretation and record recovery as well as acquisition. If a supplier uses a different sample or procedure, record that difference so the results are not presented as a like-for-like comparison.",
  "decisions": [
    {
      "label": "Application fit",
      "evidence": "Supply representative geometry and surface condition, with known limitations on access. Separate the production objective from a convenient demonstration specimen.",
      "question": "Which parts of the intended examination are represented by the proposed demonstration?"
    },
    {
      "label": "Reference and settings",
      "evidence": "Ask for identification of reference samples, probes and configuration records. Keep calibration traceability separate from application-specific setup verification.",
      "question": "Could another authorized operator understand and reproduce the documented setup?"
    },
    {
      "label": "Operator and data workflow",
      "evidence": "Include setup changes, saving a record, reopening it and exporting it for review. File formats and licensed viewers can affect long-term access.",
      "question": "Can your reviewer use the exported evidence without the supplier operating the instrument?"
    }
  ],
  "example": "Hypothetical comparison: two instruments produce clear displays on a flat sample, but the production component has restricted access. The demonstration organizer records that limitation and requests a representative access trial before scoring application fit. Meanwhile, both suppliers export their records for the same reviewer to open. This separates an unresolved geometry question from a demonstrated data-handover requirement without declaring either instrument the winner prematurely.",
  "fields": [
    {
      "label": "Application",
      "hint": "Describe material, shape, likely discontinuity and accessible surfaces."
    },
    {
      "label": "Representative sample",
      "hint": "Identify what the sample represents and what it does not."
    },
    {
      "label": "Procedure owner",
      "hint": "Name the role that sets the demonstration criteria."
    },
    {
      "label": "Records to retain",
      "hint": "List configuration, reference sample identification and export needs."
    },
    {
      "label": "Unresolved comparison",
      "hint": "Record differences between supplier demonstrations that affect the conclusion."
    }
  ],
  "links": [
    {
      "path": "/consulting/ndt-consulting-level-iii",
      "label": "NDT Level III technical support",
      "context": "Discuss application and procedure questions through"
    },
    {
      "path": "/erp",
      "label": "equipment calibration tracking",
      "context": "For record ownership across jobs, explore"
    }
  ],
  "boundary": "This page contains no independent instrument test results or manufacturer ranking. Demonstration observations do not replace procedure qualification or required calibration."
};
export function referralUrl(path: string, placement: string) { const url = new URL(path, "https://atlantisndt.com"); url.search = new URLSearchParams({ satellite: site.slug, cta: placement, utm_source: site.slug, utm_medium: "referral", utm_campaign: "satellite-product-funnels", utm_content: placement }).toString(); return url.toString(); }
