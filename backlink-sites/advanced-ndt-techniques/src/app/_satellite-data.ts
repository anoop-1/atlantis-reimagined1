// Generated from scripts/satellite-upgrade/catalog.mjs. Edit the source and regenerate.
export const site = {
  "slug": "advanced-ndt-techniques",
  "name": "Advanced NDT Techniques",
  "primary": "training",
  "related": [
    "simulation",
    "inspection"
  ],
  "audience": "PAUT and TOFD learners and inspection planners",
  "headline": "Match advanced techniques to geometry, coverage and interpretation needs.",
  "introduction": "PAUT and TOFD planning begins with the examination objective, access and component geometry. Learning how acquisition choices affect interpretation is distinct from approving a production procedure. Bring representative applications to a training discussion so the programme can address the decisions your team makes.",
  "questions": [
    "Which weld geometries, materials and thickness ranges are involved?",
    "Does the team need introductory training, application practice or inspection delivery?",
    "What governing procedure and reporting expectations apply?"
  ],
  "boundary": "Educational simulations support learning; they are not a substitute for validated procedures, equipment calibration or required practical experience.",
  "domain": "https://advanced-ndt-techniques.vercel.app",
  "guides": [
    {
      "href": "/automation",
      "label": "Automation"
    },
    {
      "href": "/blog",
      "label": "Blog"
    },
    {
      "href": "/deepdives",
      "label": "Deepdives"
    },
    {
      "href": "/phased-array",
      "label": "Phased array"
    },
    {
      "href": "/software",
      "label": "Software"
    }
  ],
  "googleVerification": "",
  "description": "Advanced NDT Techniques: practical scoping questions and subject guides for paut and tofd learners and inspection planners. Explore relevant Atlantis NDT support."
};
export const offers = [
  {
    "key": "training",
    "name": "NDT training",
    "path": "/training",
    "service": "training",
    "cta": "Ask about NDT training",
    "description": "Discuss method, level, experience, delivery format and course availability. Individual learners and employer-sponsored teams can request a suitable pathway."
  },
  {
    "key": "simulation",
    "name": "Practical NDT Simulation",
    "path": "/practical-ndt",
    "service": "practical-ndt",
    "cta": "Request a Simulation demo",
    "description": "Explore practical learning scenarios for technicians and training teams. Confirm supported methods, assessment needs and standalone or ERP-linked access with Atlantis."
  },
  {
    "key": "inspection",
    "name": "NDT inspection services",
    "path": "/inspection-services",
    "service": "inspection",
    "cta": "Request an inspection scope review",
    "description": "Share the asset, location, applicable requirements and work window. Atlantis confirms method suitability, personnel, delivery availability and quotation scope."
  }
];
type Offer = typeof offers[number];
export function contactUrl(offer: Offer, placement: string) {
  const url = new URL('/contact', 'https://atlantisndt.com');
  url.search = new URLSearchParams({ service: offer.service, subject: site.name + ': ' + offer.name, satellite: site.slug, cta: placement, utm_source: site.slug, utm_medium: 'referral', utm_campaign: 'satellite-product-funnels', utm_content: placement }).toString();
  return url.toString();
}
export function productUrl(offer: Offer) { const url = new URL(offer.path, 'https://atlantisndt.com'); url.search = new URLSearchParams({ satellite: site.slug, cta: 'product', utm_source: site.slug, utm_medium: 'referral', utm_campaign: 'satellite-product-funnels', utm_content: 'product' }).toString(); return url.toString(); }
