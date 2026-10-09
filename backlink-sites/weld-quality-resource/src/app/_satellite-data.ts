// Generated from scripts/satellite-upgrade/catalog.mjs. Edit the source and regenerate.
export const site = {
  "slug": "weld-quality-resource",
  "name": "Weld Quality Resources",
  "primary": "consulting",
  "related": [
    "inspection",
    "training"
  ],
  "audience": "Welding quality and fabrication teams",
  "headline": "Keep weld identification, technique and acceptance requirements aligned.",
  "introduction": "A weld examination should be traceable to the joint, material and applicable drawing revision. The method procedure and acceptance criteria may come from different documents. Agree repair and re-examination records before work begins so the final dossier explains the disposition of every relevant joint.",
  "questions": [
    "Which weld types, materials and geometry are involved?",
    "What documents define examination technique, extent and acceptance?",
    "How are repairs, re-examinations and final dispositions tracked?"
  ],
  "boundary": "Welding and NDT responsibilities are distinct. Confirm the approving authority and qualified personnel for each part of the work.",
  "domain": "https://weld-quality-resource.vercel.app",
  "guides": [
    {
      "href": "/defects",
      "label": "Defects"
    },
    {
      "href": "/methods",
      "label": "Methods"
    }
  ],
  "googleVerification": "",
  "description": "Weld Quality Resources: practical scoping questions and subject guides for welding quality and fabrication teams. Explore relevant Atlantis NDT support."
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
    "key": "training",
    "name": "NDT training",
    "path": "/training",
    "service": "training",
    "cta": "Ask about NDT training",
    "description": "Discuss method, level, experience, delivery format and course availability. Individual learners and employer-sponsored teams can request a suitable pathway."
  }
];
type Offer = typeof offers[number];
export function contactUrl(offer: Offer, placement: string) {
  const url = new URL('/contact', 'https://atlantisndt.com');
  url.search = new URLSearchParams({ service: offer.service, subject: site.name + ': ' + offer.name, satellite: site.slug, cta: placement, utm_source: site.slug, utm_medium: 'referral', utm_campaign: 'satellite-product-funnels', utm_content: placement }).toString();
  return url.toString();
}
export function productUrl(offer: Offer) { const url = new URL(offer.path, 'https://atlantisndt.com'); url.search = new URLSearchParams({ satellite: site.slug, cta: 'product', utm_source: site.slug, utm_medium: 'referral', utm_campaign: 'satellite-product-funnels', utm_content: 'product' }).toString(); return url.toString(); }
