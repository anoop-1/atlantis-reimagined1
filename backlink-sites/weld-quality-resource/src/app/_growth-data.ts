// Generated from scripts/satellite-upgrade/growth-content.json.
import { site } from "./_satellite-data";
export const growth = {
  "site": "weld-quality-resource",
  "slug": "weld-acceptance-document-map",
  "title": "Weld examination and weld acceptance: build a document map",
  "description": "Connect joint identity, examination instructions, acceptance requirements and repair review without conflating their roles.",
  "keywords": [
    "weld quality inspection",
    "weld acceptance criteria review",
    "NDT procedure development for welds"
  ],
  "offer": "consulting",
  "answer": "A weld examination procedure and the product’s acceptance requirements may be defined in different documents. Map both to the joint, material and governing contract before work begins. Add the responsibilities for reporting, disposition and repair verification. This is especially useful when a project includes several joint types or customer supplements. A report template should capture the applicable references; it should not silently supply acceptance criteria that were never confirmed for the work.",
  "decisions": [
    {
      "label": "Joint and instruction",
      "evidence": "Link joint identifiers and drawing revisions to the approved examination instruction. Identify which geometry or material changes need review.",
      "question": "Does the procedure apply to this joint as currently fabricated?"
    },
    {
      "label": "Acceptance source",
      "evidence": "Record the governing acceptance document, edition and any customer additions. Assign ambiguous or conflicting requirements to the authorized reviewer.",
      "question": "Which document controls the decision and who confirms that interpretation?"
    },
    {
      "label": "Repair sequence",
      "evidence": "Define how repair authorization and repeat examination connect to the original joint record. Preserve the reason for each new issue.",
      "question": "Can the reviewer follow the complete sequence without losing earlier findings?"
    }
  ],
  "example": "Hypothetical review: two weld groups use the same NDT method but have different customer acceptance requirements. The document map keeps separate acceptance references while retaining the appropriate examination procedure. When one joint is repaired, the linked record identifies the repair cycle and required re-examination. The reviewer can then evaluate the evidence against the correct requirement instead of relying on a generic pass/fail box.",
  "fields": [
    {
      "label": "Joint population",
      "hint": "Describe weld groups, material and drawing revisions."
    },
    {
      "label": "Method instruction",
      "hint": "Identify the procedure and technique references."
    },
    {
      "label": "Acceptance documents",
      "hint": "List editions, supplements and unresolved conflicts."
    },
    {
      "label": "Repair control",
      "hint": "State how repair cycles and re-examination are linked."
    },
    {
      "label": "Approval roles",
      "hint": "Name the technical and customer authorities for disposition."
    }
  ],
  "links": [
    {
      "path": "/consulting/ndt-consulting-level-iii",
      "label": "weld NDT procedure development",
      "context": "Discuss the scope for"
    },
    {
      "path": "/inspection-services",
      "label": "weld examination services",
      "context": "Confirm the delivery requirements for"
    }
  ],
  "boundary": "No weld acceptance values are reproduced here. Use licensed governing documents, the contract and the authorized technical reviewer."
};
export function referralUrl(path: string, placement: string) { const url = new URL(path, "https://atlantisndt.com"); url.search = new URLSearchParams({ satellite: site.slug, cta: placement, utm_source: site.slug, utm_medium: "referral", utm_campaign: "satellite-product-funnels", utm_content: placement }).toString(); return url.toString(); }
