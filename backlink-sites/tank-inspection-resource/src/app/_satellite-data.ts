// Generated from scripts/satellite-upgrade/catalog.mjs. Edit the source and regenerate.
export const site = {
  "slug": "tank-inspection-resource",
  "name": "Storage Tank Inspection",
  "primary": "inspection",
  "related": [
    "twin",
    "consulting"
  ],
  "audience": "Tank owners and maintenance planners",
  "headline": "Build the tank inspection scope before the outage begins.",
  "introduction": "A tank package should distinguish floor, shell, roof and associated component requirements. Gather drawings, previous reports and repair history. Define preparation and access so the chosen examinations can cover their intended areas, then agree how findings will reach the responsible inspector or engineer.",
  "questions": [
    "Which tank components, materials and prior findings require attention?",
    "What cleaning, access and isolation will be completed before inspection?",
    "Which API 653 or other project requirements and report deliverables apply?"
  ],
  "boundary": "NDT findings support the tank inspection programme; they do not independently establish fitness or the next inspection interval. Confirm assessment responsibility.",
  "domain": "https://tank-inspection-resource.vercel.app",
  "guides": [
    {
      "href": "/above-ground",
      "label": "Above ground"
    },
    {
      "href": "/blog",
      "label": "Blog"
    },
    {
      "href": "/maintenance",
      "label": "Maintenance"
    },
    {
      "href": "/tanks",
      "label": "Tanks"
    },
    {
      "href": "/underground",
      "label": "Underground"
    }
  ],
  "googleVerification": "dlNM5ly7deh5YYSr3uXXCL_lyNXxdluY229Ywzm34nE",
  "description": "Storage Tank Inspection: practical scoping questions and subject guides for tank owners and maintenance planners. Explore relevant Atlantis NDT support."
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
