import MethodCoursePage, { MethodCourseData } from "@/components/MethodCoursePage";

const data: MethodCourseData = {
  slug: "eddy-current-testing-level-2-course",
  seoTitle: "Eddy Current Testing (ET) Level 2 Certification Course | Atlantis NDT",
  seoDescription:
    "Eddy current testing (ET) Level 2 certification course: tube inspection, surface-crack detection, impedance-plane analysis. SNT-TC-1A/NAS 410 pathway. Online + on-site + hybrid. Free consultation.",
  keywords:
    "eddy current testing Level 2 certification course, ET Level 2 course, eddy current testing certification, ET Level II training, eddy current tube inspection course",
  h1: "Eddy Current Testing (ET) Level 2 Course",
  badgeLabel: "ET Level II Certification Pathway",
  heroSubtitle:
    "Eddy Current Testing (ET) Level II training — coil selection, impedance-plane signal analysis, tube inspection, and surface-crack detection on non-ferromagnetic materials.",
  methodName: "Eddy Current Testing (ET)",
  levelLabel: "Level II",
  hoursLabel: "≈80 classroom hours for Level II, per SNT-TC-1A recommended training-hour guidance.",
  stats: [
    { label: "Certification Level", value: "Level II" },
    { label: "Typical Hours", value: "≈80 hrs" },
    { label: "Recert Cycle", value: "5 Years" },
    { label: "Delivery", value: "Online + On-site" },
  ],
  overview: [
    "Eddy Current Testing (ET) uses electromagnetic induction — an alternating-current coil generates a magnetic field, which induces circulating 'eddy' currents in a nearby conductive material; a surface crack, corrosion, wall loss, or a change in material conductivity distorts those eddy currents in a detectable way. It's a non-contact, fast-scanning method, which makes it especially well suited to production-line surface inspection and internal tube inspection where physical access is limited.",
    "A Level II ET technician works independently: selecting coil type and frequency, interpreting the impedance-plane display, distinguishing real defect signals from lift-off and edge-effect noise, and reporting findings against applicable acceptance criteria. Two applications dominate real-world ET work — surface-crack detection on non-ferromagnetic materials (where MT can't be used), and internal bobbin-probe or array inspection of heat-exchanger and condenser tube bundles.",
    "This ET Level 2 certification course covers both applications, delivered ASNT NDT Level III-led with online theory and on-site hands-on practical, and maps directly onto NAS 410 requirements for aerospace-sector candidates alongside the SNT-TC-1A pathway used across oil & gas and power generation.",
  ],
  highlightTitle: "Where ET Fits",
  highlightBody:
    "ET is the go-to method for surface cracking on aluminium, stainless steel, and other non-ferromagnetic materials MT can't inspect, and it's the standard technique for internal heat-exchanger and condenser tube inspection — bobbin probes for full-length wall-loss and cracking, array probes for tube-support and expansion-zone detail.",
  curriculum: [
    "Electromagnetic induction and eddy-current theory",
    "Coil types — surface probes, bobbin probes, array probes",
    "Impedance-plane signal analysis and phase-angle interpretation",
    "Lift-off and fill-factor effects and how to compensate for them",
    "Frequency selection and multi-frequency signal mixing",
    "Heat-exchanger and condenser tube inspection technique",
    "Conductivity sorting and material/alloy verification",
    "Surface-crack detection on aluminium, stainless and non-ferrous alloys",
    "Reference-standard calibration and defect classification",
    "Reporting and correlation with visual/UT follow-up",
  ],
  pathwaySteps: [
    {
      title: "Eligibility & vision screening",
      detail:
        "Confirm ET Level I certification (or equivalent documented experience) and complete a current vision and colour-vision screening.",
    },
    {
      title: "Formal Level II training",
      detail:
        "Complete online theory on induction physics, coil selection and impedance-plane analysis, then on-site practical covering calibration and scanning on tube and surface samples.",
    },
    {
      title: "General, specific and practical examination",
      detail:
        "Sit the written and practical exam per your employer's written practice, or the NAS 410 pathway for aerospace-sector candidates.",
    },
    {
      title: "Certification issued and documented",
      detail:
        "Your Level II ET certification is recorded with training hours, exam results and vision-test documentation.",
    },
    {
      title: "5-year recertification cycle",
      detail:
        "ET certification runs on the standard 5-year SNT-TC-1A/CP-189 cycle, with the annual vision test tracked on its own shorter clock.",
    },
  ],
  faqs: [
    {
      question: "What is eddy current testing used for?",
      answer:
        "Two main uses dominate in industry: surface and near-surface crack detection on non-ferromagnetic materials (aluminium, stainless steel, non-ferrous alloys) where MT doesn't apply, and internal inspection of heat-exchanger and condenser tube bundles for wall loss and cracking using bobbin or array probes.",
    },
    {
      question: "How is ET different from magnetic particle testing (MT)?",
      answer:
        "MT only works on ferromagnetic materials and relies on magnetic flux leakage at a surface-breaking discontinuity. ET works on any electrically conductive material — ferromagnetic or not — using induced eddy currents, and can also inspect below the surface (e.g., inside a tube wall) in ways MT cannot.",
    },
    {
      question: "Is ET Level 2 training relevant for aerospace work?",
      answer:
        "Yes — eddy current is one of the core methods under NAS 410 (and EN 4179 in Europe) for aerospace component inspection. The fundamentals taught in this course apply directly; the certification pathway documentation differs slightly by scheme, which we cover during enrollment scoping.",
    },
    {
      question: "How many hours does the ET Level 2 course take?",
      answer:
        "SNT-TC-1A recommended training-hour guidance puts Level II at roughly 80 classroom hours, plus documented on-the-job experience specific to the application (surface inspection vs tube inspection can carry different practical-hour expectations under some written practices).",
    },
    {
      question: "Can ET be delivered online?",
      answer:
        "Theory — induction physics, impedance-plane interpretation, coil selection — is delivered online. Hands-on coil handling, calibration against reference standards, and tube-scanning practice require in-person equipment time, delivered on-site or in a blended format.",
    },
  ],
  relatedLinks: [
    { to: "/asnt-level-2-ut-online-course", label: "ASNT Level 2 UT Online Course", desc: "Ultrasonic testing Level II certification" },
    { to: "/magnetic-particle-testing-certification-course", label: "Magnetic Particle Testing Course", desc: "Surface crack detection on ferromagnetic materials" },
    { to: "/asnt-certification", label: "ASNT Certification Guide", desc: "Full Level I/II/III pathway across all methods" },
  ],
  courseName: "ET Level II Eddy Current Testing Course",
  courseDescription:
    "Eddy Current Testing Level II training covering coil selection, impedance-plane signal analysis, tube-inspection technique for heat exchangers and condensers, and surface-crack detection on non-ferromagnetic materials.",
  courseTeaches:
    "Electromagnetic induction principles, coil selection (absolute/differential/reflection), impedance-plane signal analysis, tube-inspection technique for heat exchangers and condensers, and surface-crack detection on non-ferromagnetic materials",
  coursePrerequisites:
    "ET Level I certification (or equivalent documented experience) plus current vision screening; NAS 410 pathway available for aerospace-sector candidates",
  educationalCredentialAwarded: "Level II Eddy Current Testing certificate of training completion",
  educationalLevel: "Professional",
  durationISO: "PT80H",
  articleHeadline: "Eddy Current Testing (ET) Level 2 Certification Course: Curriculum & Pathway",
  articleDescription:
    "What the ET Level 2 course covers — tube inspection, surface-crack detection, impedance-plane analysis — and the SNT-TC-1A/NAS 410 certification pathway.",
  articleSection: "NDT Training",
  articleKeywords: "eddy current testing Level 2, ET certification, tube inspection, impedance plane",
};

export default function EddyCurrentTestingLevel2Course() {
  return <MethodCoursePage data={data} />;
}
