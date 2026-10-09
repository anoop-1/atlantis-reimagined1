// Generated from scripts/satellite-upgrade/catalog.mjs. Edit the source and regenerate.
export const site = {
  "slug": "heat-exchanger-ndt",
  "name": "Heat Exchanger Inspection Resources",
  "primary": "inspection",
  "related": [
    "twin",
    "consulting"
  ],
  "audience": "Maintenance planners and exchanger integrity teams",
  "headline": "Prepare the tube population and history before selecting the examination.",
  "introduction": "Tube material, dimensions, access and anticipated degradation shape an exchanger examination. A useful data package links tube identification with prior findings, plugging history and operating context. Agree how suspect indications will be confirmed and reported before mobilization.",
  "questions": [
    "What tube materials, dimensions and exchanger configurations are present?",
    "Which degradation mechanisms and prior tube records are available?",
    "What cleaning, access and outage window can be provided?"
  ],
  "boundary": "Confirm technique suitability and service availability for the tube application. Examination results require the responsible engineer’s interpretation.",
  "domain": "https://heat-exchanger-ndt.vercel.app",
  "guides": [
    {
      "href": "/tube-inspection",
      "label": "Tube inspection"
    },
    {
      "href": "/tubes",
      "label": "Tubes"
    }
  ],
  "googleVerification": "",
  "description": "Heat Exchanger Inspection Resources: practical scoping questions and subject guides for maintenance planners and exchanger integrity teams. Explore relevant Atlantis NDT support."
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
    "key": "twin",
    "name": "Digital Twin NDT reporting",
    "path": "/digital-twin-reporting",
    "service": "digital-twins",
    "cta": "Request a Digital Twin demo",
    "description": "Explore inspection results in the context of an asset model. Discuss the asset, available records and whether a standalone product or ERP module fits your requirements."
  },
  {
    "key": "consulting",
    "name": "NDT Level III consulting",
    "path": "/consulting",
    "service": "consulting",
    "cta": "Discuss Level III support",
    "description": "Scope written-practice review, procedures, qualification programmes or audit support around your governing documents and employer responsibilities."
  }
];
type Offer = typeof offers[number];
export function contactUrl(offer: Offer, placement: string) {
  const url = new URL('/contact', 'https://atlantisndt.com');
  url.search = new URLSearchParams({ service: offer.service, subject: site.name + ': ' + offer.name, satellite: site.slug, cta: placement, utm_source: site.slug, utm_medium: 'referral', utm_campaign: 'satellite-product-funnels', utm_content: placement }).toString();
  return url.toString();
}
export function productUrl(offer: Offer) { const url = new URL(offer.path, 'https://atlantisndt.com'); url.search = new URLSearchParams({ satellite: site.slug, cta: 'product', utm_source: site.slug, utm_medium: 'referral', utm_campaign: 'satellite-product-funnels', utm_content: 'product' }).toString(); return url.toString(); }
