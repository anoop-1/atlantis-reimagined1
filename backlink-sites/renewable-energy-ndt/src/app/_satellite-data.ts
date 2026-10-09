// Generated from scripts/satellite-upgrade/catalog.mjs. Edit the source and regenerate.
export const site = {
  "slug": "renewable-energy-ndt",
  "name": "Renewable Energy NDT",
  "primary": "inspection",
  "related": [
    "consulting",
    "twin"
  ],
  "audience": "Renewable asset owners and maintenance planners",
  "headline": "Choose the inspection approach for the component, not the energy label.",
  "introduction": "Renewable projects include very different materials and structures, from welded support steel to composite components. Start with the component, suspected condition and access. Organize inspection records around repeatable locations so future campaigns can compare the same areas.",
  "questions": [
    "Which asset components and material systems are involved?",
    "What defect or degradation question should the examination address?",
    "Which access and customer approval requirements affect the work?"
  ],
  "boundary": "Composite, offshore and elevated-access work each require specific capability confirmation. A general NDT resource does not imply all delivery methods are available.",
  "domain": "https://renewable-energy-ndt.vercel.app",
  "guides": [
    {
      "href": "/geothermal",
      "label": "Geothermal"
    },
    {
      "href": "/renewables",
      "label": "Renewables"
    },
    {
      "href": "/solar",
      "label": "Solar"
    },
    {
      "href": "/wind",
      "label": "Wind"
    }
  ],
  "googleVerification": "",
  "description": "Renewable Energy NDT: practical scoping questions and subject guides for renewable asset owners and maintenance planners. Explore relevant Atlantis NDT support."
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
