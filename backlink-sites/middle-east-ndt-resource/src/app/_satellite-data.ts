// Generated from scripts/satellite-upgrade/catalog.mjs. Edit the source and regenerate.
export const site = {
  "slug": "middle-east-ndt-resource",
  "name": "Middle East NDT Resources",
  "primary": "training",
  "related": [
    "inspection",
    "consulting"
  ],
  "audience": "Middle East employers and technicians planning NDT work",
  "headline": "Prepare a regional enquiry with the country, employer and required outcome.",
  "introduction": "Training and inspection arrangements vary with the location, customer requirements and work schedule. For a training enquiry, provide methods, learner experience and delivery preferences. For project support, identify the site, required personnel approvals and scope before arranging mobilization.",
  "questions": [
    "Which country and site or training location are involved?",
    "Is the requirement individual training, a company cohort or project support?",
    "What employer documents, approvals and dates govern the work?"
  ],
  "boundary": "Regional content does not imply a local office or operator approval. Availability and project requirements are confirmed directly with Atlantis.",
  "domain": "https://middle-east-ndt-resource.vercel.app",
  "guides": [
    {
      "href": "/countries",
      "label": "NDT by Country"
    },
    {
      "href": "/countries/uae",
      "label": "NDT in UAE"
    },
    {
      "href": "/countries/saudi-arabia",
      "label": "NDT in Saudi Arabia"
    },
    {
      "href": "/countries/qatar",
      "label": "NDT in Qatar"
    },
    {
      "href": "/countries/kuwait",
      "label": "NDT in Kuwait"
    }
  ],
  "googleVerification": "",
  "description": "Middle East NDT Resources: practical scoping questions and subject guides for middle east employers and technicians planning ndt work. Explore relevant Atlantis NDT support."
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
