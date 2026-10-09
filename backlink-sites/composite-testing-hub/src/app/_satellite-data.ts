// Generated from scripts/satellite-upgrade/catalog.mjs. Edit the source and regenerate.
export const site = {
  "slug": "composite-testing-hub",
  "name": "Composite Inspection Planning",
  "primary": "consulting",
  "related": [
    "inspection",
    "simulation"
  ],
  "audience": "Composite manufacturing and maintenance teams",
  "headline": "Plan composite inspection around the layup and the damage question.",
  "introduction": "Composite geometry, construction and accessibility influence what an examination can establish. Reference samples and known limitations are important when evaluating a technique. Define how indications will be recorded and escalated before comparing instruments or requesting a service.",
  "questions": [
    "What layup, thickness, geometry and bonding features are involved?",
    "Which suspected damage and reference samples define the examination?",
    "Who supplies acceptance requirements and reviews ambiguous findings?"
  ],
  "boundary": "Method selection and acceptance must be application-specific. Do not infer composite inspection capability or approval from a general service list.",
  "domain": "https://composite-testing-hub.vercel.app",
  "guides": [
    {
      "href": "/blog",
      "label": "Blog"
    },
    {
      "href": "/defects",
      "label": "Defects"
    },
    {
      "href": "/methods",
      "label": "Methods"
    },
    {
      "href": "/techniques",
      "label": "Techniques"
    }
  ],
  "googleVerification": "",
  "description": "Composite Inspection Planning: practical scoping questions and subject guides for composite manufacturing and maintenance teams. Explore relevant Atlantis NDT support."
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
    "key": "simulation",
    "name": "Practical NDT Simulation",
    "path": "/practical-ndt",
    "service": "practical-ndt",
    "cta": "Request a Simulation demo",
    "description": "Explore practical learning scenarios for technicians and training teams. Confirm supported methods, assessment needs and standalone or ERP-linked access with Atlantis."
  }
];
type Offer = typeof offers[number];
export function contactUrl(offer: Offer, placement: string) {
  const url = new URL('/contact', 'https://atlantisndt.com');
  url.search = new URLSearchParams({ service: offer.service, subject: site.name + ': ' + offer.name, satellite: site.slug, cta: placement, utm_source: site.slug, utm_medium: 'referral', utm_campaign: 'satellite-product-funnels', utm_content: placement }).toString();
  return url.toString();
}
export function productUrl(offer: Offer) { const url = new URL(offer.path, 'https://atlantisndt.com'); url.search = new URLSearchParams({ satellite: site.slug, cta: 'product', utm_source: site.slug, utm_medium: 'referral', utm_campaign: 'satellite-product-funnels', utm_content: 'product' }).toString(); return url.toString(); }
