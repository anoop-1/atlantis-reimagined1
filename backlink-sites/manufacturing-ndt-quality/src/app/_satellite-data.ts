// Generated from scripts/satellite-upgrade/catalog.mjs. Edit the source and regenerate.
export const site = {
  "slug": "manufacturing-ndt-quality",
  "name": "Manufacturing NDT Quality",
  "primary": "consulting",
  "related": [
    "inspection",
    "reporting"
  ],
  "audience": "Manufacturing quality and production teams",
  "headline": "Define the release decision and the inspection evidence behind it.",
  "introduction": "A repeatable manufacturing examination links part identification, process stage and acceptance requirements. Consider how variations in geometry and surface condition affect technique suitability. Define who reviews results and how rejected or reworked items re-enter the inspection process.",
  "questions": [
    "Which parts, materials and production stages are in scope?",
    "What sampling or examination extent and acceptance documents apply?",
    "How are serial numbers, rework and final release recorded?"
  ],
  "boundary": "Inspection supports a defined quality process; it does not by itself certify the product or replace the customer’s release requirements.",
  "domain": "https://manufacturing-ndt-quality.vercel.app",
  "guides": [
    {
      "href": "/industries",
      "label": "Manufacturing NDT by Industry"
    },
    {
      "href": "/industries/automotive",
      "label": "Automotive NDT"
    },
    {
      "href": "/industries/semiconductor",
      "label": "Semiconductor Inspection"
    },
    {
      "href": "/industries/electronics",
      "label": "Electronics Manufacturing Testing"
    },
    {
      "href": "/industries/heavy-equipment",
      "label": "Heavy Equipment NDT"
    }
  ],
  "googleVerification": "",
  "description": "Manufacturing NDT Quality: practical scoping questions and subject guides for manufacturing quality and production teams. Explore relevant Atlantis NDT support."
};
export const offers = [
  {
    "key": "consulting",
    "name": "NDT Level III consulting",
    "path": "/consulting",
    "service": "consulting",
    "cta": "Discuss Level III support",
    "description": "Scope written-practice review, procedures, qualification programmes or audit support around your governing documents and employer responsibilities."
  },
  {
    "key": "inspection",
    "name": "NDT inspection services",
    "path": "/inspection-services",
    "service": "inspection",
    "cta": "Request an inspection scope review",
    "description": "Share the asset, location, applicable requirements and work window. Atlantis confirms method suitability, personnel, delivery availability and quotation scope."
  },
  {
    "key": "reporting",
    "name": "NDT reporting software",
    "path": "/erp/apps/ndt-reports",
    "service": "reporting",
    "cta": "Discuss your reporting workflow",
    "description": "Explore field data capture, company report templates and review workflows. Discuss standalone reporting or its role within Atlantis ERP."
  }
];
type Offer = typeof offers[number];
export function contactUrl(offer: Offer, placement: string) {
  const url = new URL('/contact', 'https://atlantisndt.com');
  url.search = new URLSearchParams({ service: offer.service, subject: site.name + ': ' + offer.name, satellite: site.slug, cta: placement, utm_source: site.slug, utm_medium: 'referral', utm_campaign: 'satellite-product-funnels', utm_content: placement }).toString();
  return url.toString();
}
export function productUrl(offer: Offer) { const url = new URL(offer.path, 'https://atlantisndt.com'); url.search = new URLSearchParams({ satellite: site.slug, cta: 'product', utm_source: site.slug, utm_medium: 'referral', utm_campaign: 'satellite-product-funnels', utm_content: 'product' }).toString(); return url.toString(); }
