// Generated from scripts/satellite-upgrade/catalog.mjs. Edit the source and regenerate.
export const site = {
  "slug": "ndt-training-academy",
  "name": "NDT Training Pathways",
  "primary": "training",
  "related": [
    "simulation",
    "consulting"
  ],
  "audience": "Individual technicians and employer training managers",
  "headline": "Build a training pathway around the method, level and employer requirement.",
  "introduction": "Training, examinations, experience and certification are different parts of a qualification pathway. Gather existing training and experience records before choosing a course. An employer planning a cohort should also define the inspection applications the team will perform after training.",
  "questions": [
    "Which method and level are required for the intended work?",
    "What training and experience evidence is already available?",
    "How many learners need which delivery format, location and target dates?"
  ],
  "boundary": "Course attendance alone does not establish certification. Confirm the applicable scheme and employer responsibilities. Atlantis enquiries here cover NDT training, not API exam-preparation courses.",
  "domain": "https://ndt-training-academy.vercel.app",
  "guides": [
    {
      "href": "/career",
      "label": "Career"
    },
    {
      "href": "/certifications",
      "label": "Certifications"
    },
    {
      "href": "/curriculum",
      "label": "Curriculum"
    },
    {
      "href": "/regional",
      "label": "Regional"
    },
    {
      "href": "/training",
      "label": "Training"
    }
  ],
  "googleVerification": "",
  "description": "NDT Training Pathways: practical scoping questions and subject guides for individual technicians and employer training managers. Explore relevant Atlantis NDT support."
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
    "key": "consulting",
    "name": "NDT Level III consulting",
    "path": "/consulting",
    "service": "consulting",
    "cta": "Discuss Level III support",
    "description": "Scope written-practice review, procedures, qualification programmes or audit support around your governing documents and employer responsibilities."
  },
  {
    "key": "erp",
    "name": "Atlantis NDT ERP",
    "path": "/erp",
    "service": "erp",
    "cta": "Request an ERP walkthrough",
    "description": "Connect technician records, calibration, dispatch and inspection reporting. Start with the workflow that needs attention and agree the rollout scope with Atlantis."
  },
  {
    "key": "reporting",
    "name": "NDT reporting software",
    "path": "/erp/apps/ndt-reports",
    "service": "reporting",
    "cta": "Discuss your reporting workflow",
    "description": "Explore field data capture, company report templates and review workflows. Discuss standalone reporting or its role within Atlantis ERP."
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
