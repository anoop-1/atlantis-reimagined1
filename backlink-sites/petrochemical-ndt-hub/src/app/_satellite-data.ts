// Generated from scripts/satellite-upgrade/catalog.mjs. Edit the source and regenerate.
export const site = {
  "slug": "petrochemical-ndt-hub",
  "name": "Petrochemical NDT Planning",
  "primary": "inspection",
  "related": [
    "consulting",
    "twin"
  ],
  "audience": "Petrochemical maintenance and turnaround teams",
  "headline": "Plan examinations around the process unit and expected damage.",
  "introduction": "A unit-level scope benefits from equipment identification, process context and known degradation concerns. Keep material information and previous findings available for the technical review. Agree how field exceptions are escalated during the outage rather than leaving reporting questions until demobilization.",
  "questions": [
    "Which unit, equipment types and damage mechanisms are in scope?",
    "What inspection history and process information can be shared?",
    "Who resolves scope changes during the available outage window?"
  ],
  "boundary": "Damage-mechanism review and fitness decisions require competent engineering judgment. Confirm the boundaries of the requested inspection and consulting work.",
  "domain": "https://petrochemical-ndt-hub.vercel.app",
  "guides": [
    {
      "href": "/equipment",
      "label": "Equipment"
    },
    {
      "href": "/processes",
      "label": "Processes"
    },
    {
      "href": "/safety",
      "label": "Safety"
    }
  ],
  "googleVerification": "dlNM5ly7deh5YYSr3uXXCL_lyNXxdluY229Ywzm34nE",
  "description": "Petrochemical NDT Planning: practical scoping questions and subject guides for petrochemical maintenance and turnaround teams. Explore relevant Atlantis NDT support."
};
export const offers = [
  {
    "key": "inspection",
    "name": "NDT inspection services",
    "path": "/inspection-services",
    "service": "inspection",
    "cta": "Request an inspection scope review",
    "description": "Share the asset, location, applicable requirements and work window. Atlantis confirms method suitability, personnel, delivery availability and quotation scope."
  },
  {
    "key": "consulting",
    "name": "NDT Level III consulting",
    "path": "/consulting",
    "service": "consulting",
    "cta": "Discuss Level III support",
    "description": "Scope written-practice review, procedures, qualification programmes or audit support around your governing documents and employer responsibilities."
  },
  {
    "key": "twin",
    "name": "Digital Twin NDT reporting",
    "path": "/digital-twin-reporting",
    "service": "digital-twins",
    "cta": "Request a Digital Twin demo",
    "description": "Explore inspection results in the context of an asset model. Discuss the asset, available records and whether a standalone product or ERP module fits your requirements."
  }
];
type Offer = typeof offers[number];
export function contactUrl(offer: Offer, placement: string) {
  const url = new URL('/contact', 'https://atlantisndt.com');
  url.search = new URLSearchParams({ service: offer.service, subject: site.name + ': ' + offer.name, satellite: site.slug, cta: placement, utm_source: site.slug, utm_medium: 'referral', utm_campaign: 'satellite-product-funnels', utm_content: placement }).toString();
  return url.toString();
}
export function productUrl(offer: Offer) { const url = new URL(offer.path, 'https://atlantisndt.com'); url.search = new URLSearchParams({ satellite: site.slug, cta: 'product', utm_source: site.slug, utm_medium: 'referral', utm_campaign: 'satellite-product-funnels', utm_content: 'product' }).toString(); return url.toString(); }
