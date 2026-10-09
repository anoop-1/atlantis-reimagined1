// Generated from scripts/satellite-upgrade/catalog.mjs. Edit the source and regenerate.
export const site = {
  "slug": "power-generation-ndt",
  "name": "Power Generation NDT",
  "primary": "inspection",
  "related": [
    "consulting",
    "twin"
  ],
  "audience": "Power-station outage and reliability teams",
  "headline": "Fit the inspection package to the outage and component history.",
  "introduction": "Outage inspection requires coordination between access, cleaning, component condition and specialist availability. Separate routine examinations from investigations prompted by a finding or repair. Preserve component identification and prior results so the current examination can be compared meaningfully.",
  "questions": [
    "Which components, materials and prior findings define the work?",
    "What preparation and access will be ready when inspectors arrive?",
    "Who approves changes, repairs and follow-up examinations?"
  ],
  "boundary": "Equipment-specific requirements and technical authority govern the examination. Confirm competence and availability before including work in an outage plan.",
  "domain": "https://power-generation-ndt.vercel.app",
  "guides": [
    {
      "href": "/plant-types",
      "label": "Power Plant Types & NDT Requirements"
    },
    {
      "href": "/plant-types/nuclear",
      "label": "Nuclear Plant NDT"
    },
    {
      "href": "/plant-types/gas-turbine",
      "label": "Gas Turbine Inspection"
    },
    {
      "href": "/plant-types/boiler",
      "label": "Boiler Inspection Guide"
    },
    {
      "href": "/plant-types/wind-turbine",
      "label": "Wind Turbine NDT"
    }
  ],
  "googleVerification": "",
  "description": "Power Generation NDT: practical scoping questions and subject guides for power-station outage and reliability teams. Explore relevant Atlantis NDT support."
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
