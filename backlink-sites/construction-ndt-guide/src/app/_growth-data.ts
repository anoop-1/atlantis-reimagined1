// Generated from scripts/satellite-upgrade/growth-content.json.
import { site } from "./_satellite-data";
export const growth = {
  "site": "construction-ndt-guide",
  "slug": "construction-weld-inspection-rfq",
  "title": "Construction weld NDT: make the RFQ measurable before requesting a price",
  "description": "Define the weld population, examination extent, access and reporting boundaries for a comparable construction inspection quotation.",
  "keywords": [
    "construction NDT services",
    "weld inspection RFQ",
    "third party inspection services"
  ],
  "offer": "inspection",
  "answer": "A useful construction RFQ connects each requested examination to an identifiable weld population and a governing requirement. A total weld quantity without joint details, access or examination extent can leave bidders pricing different jobs. Separate planned work from re-examination and changes introduced by drawing revisions. State who supplies access and preparation, who authorizes scope changes and what report register the project needs. A clear package improves the comparability of quotations without prescribing a method that has not been technically reviewed.",
  "decisions": [
    {
      "label": "Weld population",
      "evidence": "Provide joint identifiers, drawings, revisions, materials and dimensions needed for review. State which quantities are confirmed and which remain provisional.",
      "question": "Can the bidder match the requested examination to the same weld list used by the project?"
    },
    {
      "label": "Extent and access",
      "evidence": "Identify specified methods and examination extent, with access, preparation and scheduling assumptions. Resolve ambiguous percentages against the contract.",
      "question": "What happens if the actual access or weld population differs from the RFQ?"
    },
    {
      "label": "Reporting and changes",
      "evidence": "Agree report references, weld status categories and the approval route for extra work or re-examination. Preserve the original scope baseline.",
      "question": "How will the buyer distinguish planned examinations from approved variations?"
    }
  ],
  "example": "Hypothetical RFQ: a contractor lists a total weld length but omits the joint map. Before obtaining comparable prices, the buyer supplies the map and flags provisional joints. The inspection provider can then identify access assumptions and reporting needs. A later drawing revision is logged as a scope change instead of silently increasing the original quantity, helping both the field team and commercial reviewer understand what was authorized.",
  "fields": [
    {
      "label": "Weld list",
      "hint": "Identify drawings, joint IDs, revisions and provisional quantities."
    },
    {
      "label": "Specified examination",
      "hint": "State methods and extent for technical confirmation."
    },
    {
      "label": "Access responsibility",
      "hint": "Assign preparation, access equipment and work-window coordination."
    },
    {
      "label": "Report requirements",
      "hint": "Describe joint-level status and required deliverable formats."
    },
    {
      "label": "Variation approval",
      "hint": "Name the role that authorizes added work and re-examination."
    }
  ],
  "links": [
    {
      "path": "/inspection-services",
      "label": "weld inspection services",
      "context": "Send the clarified scope for"
    },
    {
      "path": "/consulting/ndt-consulting-level-iii",
      "label": "NDT procedure development",
      "context": "Resolve technical instruction gaps through"
    }
  ],
  "boundary": "The RFQ worksheet does not choose acceptance criteria or authorize site work. Technical requirements and safety arrangements require the designated project authorities."
};
export function referralUrl(path: string, placement: string) { const url = new URL(path, "https://atlantisndt.com"); url.search = new URLSearchParams({ satellite: site.slug, cta: placement, utm_source: site.slug, utm_medium: "referral", utm_campaign: "satellite-product-funnels", utm_content: placement }).toString(); return url.toString(); }
