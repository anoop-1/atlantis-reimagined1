// Generated from scripts/satellite-upgrade/catalog.mjs. Edit the source and regenerate.
export const site = {
  "slug": "industrial-inspection-resources",
  "name": "Industrial Inspection Resources",
  "primary": "inspection",
  "related": [
    "consulting",
    "erp"
  ],
  "audience": "Industrial buyers preparing an inspection enquiry",
  "headline": "Write an inspection scope that a provider can actually price and schedule.",
  "introduction": "A useful RFQ identifies the asset, examination objective, governing requirement and access conditions. Separate mandatory deliverables from optional work. Providing a realistic work window and known site constraints helps a provider explain dependencies before quoting.",
  "questions": [
    "What asset, material and quantity require inspection?",
    "Which specification, reporting format and acceptance authority apply?",
    "What location, access preparation and work window are available?"
  ],
  "boundary": "The final method, staffing and delivery commitment follow a technical scope review. A general enquiry is not a confirmed inspection booking.",
  "domain": "https://industrial-inspection-resources.vercel.app",
  "guides": [
    {
      "href": "/industries",
      "label": "Start Exploring Resources"
    },
    {
      "href": "/standards",
      "label": "View Standards"
    }
  ],
  "googleVerification": "",
  "description": "Industrial Inspection Resources: practical scoping questions and subject guides for industrial buyers preparing an inspection enquiry. Explore relevant Atlantis NDT support."
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
    "key": "erp",
    "name": "Atlantis NDT ERP",
    "path": "/erp",
    "service": "erp",
    "cta": "Request an ERP walkthrough",
    "description": "Connect technician records, calibration, dispatch and inspection reporting. Start with the workflow that needs attention and agree the rollout scope with Atlantis."
  }
];
type Offer = typeof offers[number];
export function contactUrl(offer: Offer, placement: string) {
  const url = new URL('/contact', 'https://atlantisndt.com');
  url.search = new URLSearchParams({ service: offer.service, subject: site.name + ': ' + offer.name, satellite: site.slug, cta: placement, utm_source: site.slug, utm_medium: 'referral', utm_campaign: 'satellite-product-funnels', utm_content: placement }).toString();
  return url.toString();
}
export function productUrl(offer: Offer) { const url = new URL(offer.path, 'https://atlantisndt.com'); url.search = new URLSearchParams({ satellite: site.slug, cta: 'product', utm_source: site.slug, utm_medium: 'referral', utm_campaign: 'satellite-product-funnels', utm_content: 'product' }).toString(); return url.toString(); }
