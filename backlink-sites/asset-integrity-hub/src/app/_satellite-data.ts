// Generated from scripts/satellite-upgrade/catalog.mjs. Edit the source and regenerate.
export const site = {
  "slug": "asset-integrity-hub",
  "name": "Asset Integrity Hub",
  "primary": "twin",
  "related": [
    "inspection",
    "consulting"
  ],
  "audience": "Asset integrity and reliability managers",
  "headline": "Connect inspection history to the asset decisions it supports.",
  "introduction": "Start with an asset register and consistent inspection locations. A visual model becomes useful when a finding can be traced to its date, method, source report and review status. Prioritize one asset class and a repeatable data structure before expanding the model across a facility.",
  "questions": [
    "Can the same inspection location be identified across campaigns?",
    "Which source records, drawings and models are available and reliable?",
    "Who reviews changes in condition and approves follow-up work?"
  ],
  "boundary": "A Digital Twin organizes evidence; engineering assessment and inspection intervals still require the applicable procedure and responsible technical authority.",
  "domain": "https://asset-integrity-hub.vercel.app",
  "guides": [
    {
      "href": "/digital-twins",
      "label": "Digital Twins Guide"
    },
    {
      "href": "/erp-solutions",
      "label": "ERP Implementation"
    }
  ],
  "googleVerification": "",
  "description": "Asset Integrity Hub: practical scoping questions and subject guides for asset integrity and reliability managers. Explore relevant Atlantis NDT support."
};
export const offers = [
  {
    "key": "twin",
    "name": "Digital Twin NDT reporting",
    "path": "/digital-twin-reporting",
    "service": "digital-twins",
    "cta": "Request a Digital Twin demo",
    "description": "Explore inspection results in the context of an asset model. Discuss the asset, available records and whether a standalone product or ERP module fits your requirements."
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
