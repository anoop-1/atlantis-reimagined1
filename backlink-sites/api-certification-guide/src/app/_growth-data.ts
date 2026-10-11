// Generated from scripts/satellite-upgrade/growth-content.json.
import { site } from "./_satellite-data";
export const growth = {
  "site": "api-certification-guide",
  "slug": "api-510-570-653-service-scope",
  "title": "API 510, 570 or 653: clarify the asset and service you are requesting",
  "description": "Separate pressure-vessel, piping and storage-tank service enquiries from individual certification and NDT examination work.",
  "keywords": [
    "API 510 inspection services",
    "API 570 piping inspection services",
    "API 653 tank inspection services"
  ],
  "offer": "inspection",
  "answer": "Start by identifying the equipment and the service required. API 510, API 570 and API 653 references commonly arise in pressure-vessel, piping and aboveground storage-tank programmes respectively. A request may concern programme review, an inspector’s responsibilities, specific NDT examinations or engineering assessment. Those are not interchangeable purchases. State the governing requirements, owner responsibilities and expected deliverables so the supplier can confirm the actual scope and required personnel. Candidates seeking individual certification should consult API directly.",
  "decisions": [
    {
      "label": "Pressure equipment",
      "evidence": "Provide the vessel identification, construction and service records, prior findings and whether the request relates to planned work or a repair.",
      "question": "Is the requested deliverable an examination report, an inspection review or an engineering assessment?"
    },
    {
      "label": "Piping circuits",
      "evidence": "Describe the circuit boundaries, material records, location references and the reason for the current examination. Identify changes since the previous campaign.",
      "question": "Who determines the required locations and interprets the results within the piping programme?"
    },
    {
      "label": "Storage tanks",
      "evidence": "Separate floor, shell, roof and associated work, with drawings and preparation requirements. Clarify which inspection and assessment roles are being procured.",
      "question": "Are cleaning, access, specialist examinations and final review separately assigned?"
    }
  ],
  "example": "Hypothetical enquiry: a buyer asks for “API inspection” but provides only a list of thickness readings required on piping. The clarified brief identifies the piping circuit, the owner’s programme, the specified examination and the person responsible for assessment. If additional inspector or engineering services are needed, they are stated separately. This gives bidders a comparable scope without implying that collecting readings satisfies the entire programme.",
  "fields": [
    {
      "label": "Asset category",
      "hint": "Identify vessel, piping or tank and provide an anonymized asset reference."
    },
    {
      "label": "Required service",
      "hint": "Separate examination, inspection review, programme support and assessment."
    },
    {
      "label": "Governing documents",
      "hint": "List requirements and editions for the authorized reviewer to confirm."
    },
    {
      "label": "Available records",
      "hint": "Describe drawings, previous reports, repairs and preparation status."
    },
    {
      "label": "Role boundaries",
      "hint": "Assign owner, inspector, examiner and engineering responsibilities."
    }
  ],
  "links": [
    {
      "path": "/consulting/api-510-pressure-vessel-inspector-services",
      "label": "pressure vessel inspection services",
      "context": "For vessel-specific requirements, review"
    },
    {
      "path": "/consulting/api-570-piping-inspector-services",
      "label": "API 570 piping inspection services",
      "context": "For circuit-specific requirements, review"
    },
    {
      "path": "/consulting/api-653-tank-inspector-services",
      "label": "API 653 tank inspection services",
      "context": "For tank-specific requirements, review"
    }
  ],
  "boundary": "Atlantis does not offer API training through this resource. Confirm inspection capabilities and qualifications for the particular engagement; this guide establishes no intervals or acceptance decisions."
};
export function referralUrl(path: string, placement: string) { const url = new URL(path, "https://atlantisndt.com"); url.search = new URLSearchParams({ satellite: site.slug, cta: placement, utm_source: site.slug, utm_medium: "referral", utm_campaign: "satellite-product-funnels", utm_content: placement }).toString(); return url.toString(); }
