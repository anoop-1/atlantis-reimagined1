// Generated from scripts/satellite-upgrade/growth-content.json.
import { site } from "./_satellite-data";
export const growth = {
  "site": "welding-inspection-hub",
  "slug": "welding-inspection-itp-handover",
  "title": "Welding inspection planning: connect the ITP to the report register",
  "description": "Prepare inspection stages, witness responsibilities and report references so the fabrication team can track what remains open.",
  "keywords": [
    "welding inspection services",
    "welding inspection test plan",
    "weld report register"
  ],
  "offer": "inspection",
  "answer": "Use the inspection and test plan to identify what must be checked, when it is checked and who must be present or review the evidence. Then connect those activities to a weld register and report references. Visual checks, specified NDT and final dossier review may have different personnel and approval requirements. Keeping them separate helps the buyer see what has actually been completed and avoids treating a report number as proof that every inspection stage is closed.",
  "decisions": [
    {
      "label": "Inspection stages",
      "evidence": "Identify the fabrication stages and required checks from the approved plan. State any witness or hold requirements for confirmation.",
      "question": "Which activity must occur before the next fabrication step removes access?"
    },
    {
      "label": "Personnel and methods",
      "evidence": "List the specified inspection and NDT responsibilities, with the evidence required for each role. Do not bundle unspecified methods into a generic request.",
      "question": "Who is authorized to perform and accept each part of the work?"
    },
    {
      "label": "Register and dossier",
      "evidence": "Agree joint identifiers, stage status, report references and unresolved-item categories. Link repairs and repeat examinations without overwriting history.",
      "question": "Can the buyer distinguish work complete from documentation awaiting review?"
    }
  ],
  "example": "Hypothetical fabrication package: the weld register shows a report number, but the corresponding inspection stage still needs customer review. The coordinator records the examination as performed and the review as pending. When the customer requests clarification, the response is linked to that stage and report. This preserves useful progress information without presenting the entire joint package as released prematurely.",
  "fields": [
    {
      "label": "Plan references",
      "hint": "Identify the approved inspection plan and drawings."
    },
    {
      "label": "Stages and witnesses",
      "hint": "List required checks, review points and attendance responsibilities."
    },
    {
      "label": "Personnel scope",
      "hint": "State inspection and NDT roles for capability confirmation."
    },
    {
      "label": "Register fields",
      "hint": "Define joint identity, stage status and report references."
    },
    {
      "label": "Closeout process",
      "hint": "Assign outstanding-item review and final dossier acceptance."
    }
  ],
  "links": [
    {
      "path": "/inspection-services",
      "label": "welding inspection services",
      "context": "Use the stage-by-stage brief to request"
    },
    {
      "path": "/erp/apps/ndt-reports",
      "label": "weld inspection reporting",
      "context": "Discuss the register and review requirements for"
    }
  ],
  "boundary": "This is an administrative guide to the approved inspection plan. It does not create witness requirements, approve personnel or release fabricated work."
};
export function referralUrl(path: string, placement: string) { const url = new URL(path, "https://atlantisndt.com"); url.search = new URLSearchParams({ satellite: site.slug, cta: placement, utm_source: site.slug, utm_medium: "referral", utm_campaign: "satellite-product-funnels", utm_content: placement }).toString(); return url.toString(); }
