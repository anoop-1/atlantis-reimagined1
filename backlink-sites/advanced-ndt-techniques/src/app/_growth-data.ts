// Generated from scripts/satellite-upgrade/growth-content.json.
import { site } from "./_satellite-data";
export const growth = {
  "site": "advanced-ndt-techniques",
  "slug": "paut-tofd-simulation-training-brief",
  "title": "PAUT, TOFD and simulation: write an application-focused learning brief",
  "description": "Distinguish interpretation practice, acquisition training and procedure work when requesting advanced NDT training.",
  "keywords": [
    "PAUT training",
    "TOFD training",
    "NDT simulation software",
    "ultrasonic testing simulator",
    "virtual NDT training",
    "NDT simulation for training institutions"
  ],
  "offer": "simulation",
  "answer": "Define the learning task before selecting an advanced-method course or simulator. PAUT and TOFD interpretation, acquisition setup and production procedure approval are different activities. A learner may understand an idealized display yet struggle with geometry, incomplete coverage or an uncertain indication. Request exercises that make those limitations visible. Record which controls learners can change and which assumptions are fixed. An educational demonstration should explain its boundaries rather than being presented as evidence that an inspection technique is validated.",
  "decisions": [
    {
      "label": "Interpretation practice",
      "evidence": "Ask for an exercise with an identifiable learning objective, source of the sample signals and an explanation of uncertainty. Include a case where the information is insufficient.",
      "question": "Does the feedback explain the reasoning, or only reveal a preferred answer?"
    },
    {
      "label": "Acquisition learning",
      "evidence": "State geometry, access and the setup decisions learners need to understand. Confirm which of these are represented in the course or software.",
      "question": "What must still be practiced with physical equipment and representative specimens?"
    },
    {
      "label": "Institutional use",
      "evidence": "Define instructor review, learner access and required records before discussing licenses or integration. Request a demonstration of supported functions.",
      "question": "Can the instructor distinguish completion of an exercise from demonstrated practical competence?"
    }
  ],
  "example": "Hypothetical lesson: learners compare a clean indication with a case affected by geometry. The exercise asks them to record what they know, what they infer and which additional evidence would help. The instructor reviews the reasoning before showing an explanation. This makes the lesson useful even when a simplified simulator cannot reproduce every field condition. Any claimed training credit must be agreed under the applicable programme.",
  "fields": [
    {
      "label": "Learning objective",
      "hint": "State whether learners need interpretation, setup reasoning or application familiarization."
    },
    {
      "label": "Representative geometry",
      "hint": "Describe material, weld form, access and the limitations to discuss."
    },
    {
      "label": "Exercise evidence",
      "hint": "Request signal provenance, adjustable controls and the fixed assumptions."
    },
    {
      "label": "Instructor review",
      "hint": "Define how learner reasoning and unanswered questions will be reviewed."
    },
    {
      "label": "Delivery and access",
      "hint": "State learner group, location, devices and institutional access requirements."
    }
  ],
  "links": [
    {
      "path": "/practical-ndt",
      "label": "Practical NDT Simulation software",
      "context": "Discuss supported exercises and licensing for"
    },
    {
      "path": "/training",
      "label": "PAUT and TOFD training",
      "context": "For a broader course pathway, enquire about"
    }
  ],
  "boundary": "Simulation supplements learning. It does not replace required experience, practical examinations, calibrated equipment or an approved production procedure."
};
export function referralUrl(path: string, placement: string) { const url = new URL(path, "https://atlantisndt.com"); url.search = new URLSearchParams({ satellite: site.slug, cta: placement, utm_source: site.slug, utm_medium: "referral", utm_campaign: "satellite-product-funnels", utm_content: placement }).toString(); return url.toString(); }
