import MethodCoursePage, { MethodCourseData } from "@/components/MethodCoursePage";

const data: MethodCourseData = {
  slug: "magnetic-particle-testing-certification-course",
  seoTitle: "Magnetic Particle Testing (MT) Certification Course | Atlantis NDT",
  seoDescription:
    "Magnetic particle testing (MT) certification course: magnetization technique, wet/dry particle media, demagnetization, weld and casting inspection. SNT-TC-1A pathway. Free consultation.",
  keywords:
    "magnetic particle testing certification course, MT certification, MT Level 1 Level 2 course, magnetic particle inspection training, MPI certification",
  h1: "Magnetic Particle Testing (MT) Certification Course",
  badgeLabel: "MT Level I & II Certification Pathway",
  heroSubtitle:
    "Magnetic Particle Testing (MT) certification — magnetization technique, particle media, demagnetization, and surface/near-surface discontinuity detection on ferromagnetic welds, castings and forgings.",
  methodName: "Magnetic Particle Testing (MT)",
  levelLabel: "Level I & Level II",
  hoursLabel: "≈40 classroom hours for Level I and ≈80 hours for Level II, per SNT-TC-1A recommended training-hour guidance.",
  stats: [
    { label: "Certification Levels", value: "I & II" },
    { label: "Typical Hours", value: "40 / 80 hrs" },
    { label: "Recert Cycle", value: "5 Years" },
    { label: "Delivery", value: "Online + On-site" },
  ],
  overview: [
    "Magnetic Particle Testing (MT) detects surface and near-surface discontinuities in ferromagnetic materials — steel and iron alloys — by inducing a magnetic field and applying fine iron-oxide particles to the surface. Where a discontinuity like a crack or lap interrupts the magnetic field, flux leaks out at the surface and pulls the particles into a visible line following the flaw's shape, making even hairline surface cracks easy to see under the right lighting and technique.",
    "MT is fast, relatively inexpensive per inspection point, and doesn't require the elaborate setup of volumetric methods like UT or RT — which is exactly why it's the default first-pass surface method for weld inspection, and for casting and forging inspection where surface-breaking defects are a primary failure mode.",
    "This certification course covers both Level I (perform tests under supervision, following documented technique) and Level II (select technique independently, interpret results, and report), including the magnetization-technique decisions, particle-media selection, and demagnetization requirements that determine whether an MT inspection is actually reliable rather than just technically performed.",
  ],
  highlightTitle: "MT vs PT — When to Use Which",
  highlightBody:
    "MT only works on ferromagnetic materials but can detect some sub-surface indications through flux leakage. PT works on any non-porous material, ferrous or not, but is limited to discontinuities that are genuinely open to the surface. On a carbon-steel weld, MT is usually the first choice; on stainless steel or aluminium, PT (or ET) takes over.",
  curriculum: [
    "Ferromagnetism and magnetic field theory",
    "Magnetization techniques — yoke, prods, coil, central conductor",
    "Current type selection (AC, DC, half-wave DC) and field strength",
    "Wet fluorescent vs dry visible particle media selection",
    "Continuous vs residual magnetization method",
    "Demagnetization technique and verification",
    "Surface and near-surface discontinuity identification — cracks, laps, seams, porosity",
    "Application to welds, castings and forgings",
    "Code acceptance criteria and reporting",
    "Lighting requirements — UV-A intensity for fluorescent, white light for visible particles",
  ],
  pathwaySteps: [
    {
      title: "Eligibility & vision screening",
      detail:
        "Meet your employer's SNT-TC-1A written practice minimum education/experience, plus a current vision and colour-vision screening.",
    },
    {
      title: "Level I formal training",
      detail:
        "Online theory on magnetic field theory and particle media, then on-site practical performing tests under supervision with documented technique.",
    },
    {
      title: "Level II formal training",
      detail:
        "Additional theory and practical hours covering independent technique selection, demagnetization verification, and code-based interpretation and reporting.",
    },
    {
      title: "General, specific and practical examination",
      detail:
        "Sit the written and practical exam at the level being certified, per your employer's SNT-TC-1A written practice.",
    },
    {
      title: "5-year recertification cycle",
      detail:
        "MT certification runs on the standard 5-year SNT-TC-1A/CP-189 cycle, with an annual vision test tracked separately.",
    },
  ],
  faqs: [
    {
      question: "Does magnetic particle testing work on stainless steel?",
      answer:
        "Only on ferromagnetic (magnetic) stainless grades. Most austenitic stainless steels are non-ferromagnetic and cannot be reliably inspected by MT — liquid penetrant testing (PT) or eddy current testing (ET) is used instead for those alloys.",
    },
    {
      question: "What's the difference between wet and dry particle methods?",
      answer:
        "Wet particles are suspended in a liquid carrier and typically fluorescent, viewed under UV-A light — more sensitive, and standard for shop/field weld inspection. Dry particles are applied as a powder and viewed under white light — faster to set up and often used for portable, on-site field inspection where a wet-bath system isn't practical.",
    },
    {
      question: "Why is demagnetization required after MT inspection?",
      answer:
        "Residual magnetism left in a ferromagnetic part can attract stray iron particles, interfere with welding arc deflection, or affect certain instrumentation nearby. Demagnetization technique and verification is a required, examinable part of the Level II curriculum, not an optional afterthought.",
    },
    {
      question: "How long does MT certification take?",
      answer:
        "Roughly 40 classroom hours at Level I and an additional 80 hours at Level II, per SNT-TC-1A recommended training-hour guidance, plus documented on-the-job experience hours. Actual pacing depends on your prior NDT background and the certifying scheme.",
    },
    {
      question: "How is MT certification renewed?",
      answer:
        "MT runs on the standard 5-year SNT-TC-1A or CP-189 recertification cycle, with an annual vision test (near-vision and colour-vision) required on a separate, shorter clock.",
    },
  ],
  relatedLinks: [
    { to: "/liquid-penetrant-testing-level-1-course", label: "Liquid Penetrant Testing (PT) Level 1 Course", desc: "Surface inspection for non-ferromagnetic materials" },
    { to: "/eddy-current-testing-level-2-course", label: "Eddy Current Testing (ET) Level 2 Course", desc: "Alternative for non-ferromagnetic surface inspection" },
    { to: "/asnt-certification", label: "ASNT Certification Guide", desc: "Full Level I/II/III pathway across all methods" },
  ],
  courseName: "MT Level I & II Magnetic Particle Testing Certification Course",
  courseDescription:
    "Magnetic Particle Testing certification covering magnetization technique selection, wet/dry particle media, demagnetization, and surface/near-surface discontinuity detection on ferromagnetic welds, castings and forgings.",
  courseTeaches:
    "Magnetization technique selection (yoke, prods, coil, central conductor), wet and dry particle media, AC/DC/HWDC current selection, demagnetization, and surface/near-surface discontinuity detection on ferromagnetic welds, castings and forgings",
  coursePrerequisites:
    "Meets employer's SNT-TC-1A written practice for MT — high-school education or equivalent industrial experience, plus vision and colour-vision screening",
  educationalCredentialAwarded: "Level I and/or Level II Magnetic Particle Testing certificate of training completion",
  educationalLevel: "Professional",
  articleHeadline: "Magnetic Particle Testing (MT) Certification Course: Curriculum & Pathway",
  articleDescription:
    "What the MT certification course covers — magnetization technique, particle media, demagnetization — across Level I and Level II, and the SNT-TC-1A certification pathway.",
  articleSection: "NDT Training",
  articleKeywords: "magnetic particle testing, MT certification, MPI, weld inspection",
};

export default function MagneticParticleTestingCertificationCourse() {
  return <MethodCoursePage data={data} />;
}
