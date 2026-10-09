// Generated from scripts/satellite-upgrade/catalog.mjs. Edit the source and regenerate.
export const site = {
  "slug": "subsea-inspection-guide",
  "name": "Subsea Inspection Planning",
  "primary": "consulting",
  "related": [
    "twin",
    "inspection"
  ],
  "audience": "Subsea asset and inspection programme teams",
  "headline": "Define the evidence needed from a subsea inspection campaign.",
  "introduction": "A subsea scope should make clear which condition is being assessed, how locations are referenced and what data the delivery team can collect. Separate inspection planning and data review from diving or vehicle operations. Agree record formats before mobilization to support later comparison.",
  "questions": [
    "What structures, components and inspection questions are in scope?",
    "Who provides diving or vehicle operations and required approvals?",
    "What location, image and measurement records must be handed over?"
  ],
  "boundary": "Atlantis diving, ROV operation and offshore mobilization are not assumed. Request a scope review to establish available support and required delivery partners.",
  "domain": "https://subsea-inspection-guide.vercel.app",
  "guides": [
    {
      "href": "/certification",
      "label": "Certification"
    },
    {
      "href": "/deepwater",
      "label": "Deepwater"
    },
    {
      "href": "/materials",
      "label": "Materials"
    }
  ],
  "googleVerification": "",
  "description": "Subsea Inspection Planning: practical scoping questions and subject guides for subsea asset and inspection programme teams. Explore relevant Atlantis NDT support."
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
  }
];
type Offer = typeof offers[number];
export function contactUrl(offer: Offer, placement: string) {
  const url = new URL('/contact', 'https://atlantisndt.com');
  url.search = new URLSearchParams({ service: offer.service, subject: site.name + ': ' + offer.name, satellite: site.slug, cta: placement, utm_source: site.slug, utm_medium: 'referral', utm_campaign: 'satellite-product-funnels', utm_content: placement }).toString();
  return url.toString();
}
export function productUrl(offer: Offer) { const url = new URL(offer.path, 'https://atlantisndt.com'); url.search = new URLSearchParams({ satellite: site.slug, cta: 'product', utm_source: site.slug, utm_medium: 'referral', utm_campaign: 'satellite-product-funnels', utm_content: 'product' }).toString(); return url.toString(); }
