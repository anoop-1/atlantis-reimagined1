// Generated from scripts/satellite-upgrade/growth-content.json.
import { site } from "./_satellite-data";
export const growth = {
  "site": "ndt-training-academy",
  "slug": "online-blended-ndt-training-comparison",
  "title": "Online, blended or employer-based NDT training: what to compare",
  "description": "Prepare a course enquiry that separates theory, practical work, experience and certification responsibilities.",
  "keywords": [
    "online NDT training",
    "corporate NDT training",
    "NDT Level II training",
    "ASNT Level III training",
    "Ultrasonic Testing Level II training",
    "Magnetic Particle Testing training",
    "Liquid Penetrant Testing training"
  ],
  "offer": "training",
  "answer": "Choose the training route by the work and qualification pathway you intend to follow. A course title does not tell you how practical work, documented experience and examinations will be arranged. Ask the employer or relevant certification body to confirm recognition before booking. For an employer-based route, bring the written practice and existing records to the discussion. For a corporate cohort, separate learners who need foundation instruction from those preparing for a new method or a more advanced responsibility.",
  "decisions": [
    {
      "label": "Online theory",
      "evidence": "Compare live instruction, recorded study, tutor access and attendance records. Ask how the syllabus relates to the required method and level.",
      "question": "What practical arrangements and additional evidence are needed beyond the online course?"
    },
    {
      "label": "Blended delivery",
      "evidence": "Identify where hands-on work happens, who supervises it and which equipment or specimens are available. Do not assume travel, access or assessment is included.",
      "question": "Who confirms that the practical portion meets the applicable pathway requirements?"
    },
    {
      "label": "Employer cohort",
      "evidence": "Define the application, learner starting points, shift patterns and training documentation. Obtain agreement on delivery location and instructor availability.",
      "question": "How will different experience levels be accommodated without implying identical certification outcomes?"
    }
  ],
  "example": "Hypothetical enquiry: an employer requests Ultrasonic Testing Level II training for a mixed-experience group. The training manager first collects existing course records and asks the employer’s Level III to identify gaps. The resulting enquiry distinguishes theory needs, practical arrangements and experience still to be gained. It requests a syllabus, schedule and quotation for that defined scope, without treating the course completion date as the date everyone becomes certified.",
  "fields": [
    {
      "label": "Learner and method",
      "hint": "State individual or corporate enquiry, method, level and intended application."
    },
    {
      "label": "Existing evidence",
      "hint": "Summarize training and experience already documented; do not upload personal records here."
    },
    {
      "label": "Required pathway",
      "hint": "Identify the employer written practice or certification scheme to be checked."
    },
    {
      "label": "Delivery needs",
      "hint": "Give country, time zone, available dates and practical training arrangements."
    },
    {
      "label": "Confirmation needed",
      "hint": "Request syllabus, prerequisites, documentation, assessment arrangements and quotation scope."
    }
  ],
  "links": [
    {
      "path": "/ndt-training-online",
      "label": "online NDT courses",
      "context": "Check the current delivery information for"
    },
    {
      "path": "/training",
      "label": "NDT training courses",
      "context": "Discuss method and level requirements through"
    },
    {
      "path": "/practical-ndt",
      "label": "NDT training simulator",
      "context": "For supplementary practice, explore the"
    }
  ],
  "boundary": "Course completion is distinct from personnel certification. Confirm current course availability and recognition. This resource does not offer API exam-preparation training."
};
export function referralUrl(path: string, placement: string) { const url = new URL(path, "https://atlantisndt.com"); url.search = new URLSearchParams({ satellite: site.slug, cta: placement, utm_source: site.slug, utm_medium: "referral", utm_campaign: "satellite-product-funnels", utm_content: placement }).toString(); return url.toString(); }
