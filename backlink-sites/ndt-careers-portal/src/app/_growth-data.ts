// Generated from scripts/satellite-upgrade/growth-content.json.
import { site } from "./_satellite-data";
export const growth = {
  "site": "ndt-careers-portal",
  "slug": "ndt-career-training-route-map",
  "title": "Plan an NDT career pathway from the role requirements",
  "description": "Turn a job description into a learning and experience plan without assuming a course guarantees certification or employment.",
  "keywords": [
    "NDT technician training",
    "NDT certification pathway",
    "entry level NDT training",
    "NDT Level III exam preparation"
  ],
  "offer": "training",
  "answer": "Start with a real role description and the employer’s requirements. Separate what you can study now from experience that must be gained under appropriate supervision. A list of course certificates is not a substitute for a method-specific evidence record. If the target role references a central certification scheme, check its current eligibility and recognized-training rules directly. If it uses employer-based certification, ask how the employer evaluates prior training, examinations and experience when appointing a new technician.",
  "decisions": [
    {
      "label": "First role",
      "evidence": "Identify the inspection methods and application rather than choosing courses only by their advertised duration. Ask how supervised work will be arranged.",
      "question": "Which tasks would a trainee actually observe or perform under supervision?"
    },
    {
      "label": "Adding a method",
      "evidence": "Compare the new method’s requirements with existing evidence. Avoid counting unrelated work as method-specific experience without review.",
      "question": "Who will review the activity log and confirm which experience is relevant?"
    },
    {
      "label": "Preparing for Level III",
      "evidence": "Distinguish examination preparation from the wider responsibility for procedures, personnel programmes and technical decisions. Confirm current eligibility with the examining body.",
      "question": "What evidence and employer responsibilities remain outside the preparation course?"
    }
  ],
  "example": "Hypothetical pathway: a technician working in visual inspection wants a role involving ultrasonic testing. The next step is to obtain the role’s method and qualification requirements, review existing records with the employer and plan supervised experience. Buying several unrelated courses would not resolve the missing UT experience. The learning plan should identify a review point and a responsible person instead of promising a fixed date for promotion.",
  "fields": [
    {
      "label": "Target role",
      "hint": "Summarize an actual job requirement without employer-confidential information."
    },
    {
      "label": "Method gap",
      "hint": "Identify the method, level and application you need to learn."
    },
    {
      "label": "Evidence available",
      "hint": "List course records, examinations and experience categories already documented."
    },
    {
      "label": "Experience route",
      "hint": "Describe how supervised work could be arranged and reviewed."
    },
    {
      "label": "Next review",
      "hint": "Name the role that can confirm eligibility and the question to resolve first."
    }
  ],
  "links": [
    {
      "path": "/training",
      "label": "NDT technician training",
      "context": "Use the pathway to prepare an enquiry about"
    },
    {
      "path": "/tools/snt-tc-1a-hours-planner",
      "label": "training and experience hours planner",
      "context": "Review planning assumptions with the employer using the"
    }
  ],
  "boundary": "This is educational career planning. Training does not guarantee employment, salary, promotion or certification, and the worksheet does not assess eligibility."
};
export function referralUrl(path: string, placement: string) { const url = new URL(path, "https://atlantisndt.com"); url.search = new URLSearchParams({ satellite: site.slug, cta: placement, utm_source: site.slug, utm_medium: "referral", utm_campaign: "satellite-product-funnels", utm_content: placement }).toString(); return url.toString(); }
