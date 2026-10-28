/**
 * Level/role-specific NDT salary page configs — 2026-08-09, rebuilt 2026-10-18.
 *
 * TARGETING EVIDENCE (GSC USA, 90d to 2026-08-06 — scripts/us-deepdive-2026-08-09.json)
 *   /ndt-level-3-salary   "ndt level 3 salary", "ndt salary level 3", "level 3 ndt salary"
 *   /ndt-level-2-salary   "level 2 ndt technician salary", "ndt salary level 2", "ndt level 2 salary"
 *   /ndt-level-1-salary   "ndt salary level 1", "ndt level 1 salary", "ndt trainee salary"
 *   /ndt-inspector-salary "ndt inspector salary", "ndt tech salary", "ndt specialist salary"
 *
 * 2026-10-18 (traffic workstream, competitor teardown): every unsourced pay range is gone
 * (the guide and these pages had given four contradictory Level II/III sets, none with a
 * source). Each page now leads with figures read on a named source on 18 October 2026, held
 * in ONE file, src/data/salary-sources-2026-10.json, and shows them in a "what each published
 * source says" table with dates and sample sizes. Where no source covers a level, the page
 * says so in words. Titles and descriptions come from the wave-16 file, so the crawler
 * <title> and the description React shows under the H1 are the same text.
 *
 * Both layers read this file: React via src/components/SalaryLevelPage.tsx, the crawler via
 * scripts/salary-static-render.mjs. CLAUDE.md §18: salary figures are the salary carve-out;
 * no Atlantis price appears here.
 */
import type { SalaryLevelConfig } from "@/components/SalaryLevelPage";
import W16 from "./ctr-wave16/traffic.json";

const meta = (path: string) => (W16 as Record<string, { title: string; description: string }>)[path];

const RELATED_CORE = [
  { to: "/blog/ndt-salary-guide-2026-global", label: "NDT technician salary guide" },
  { to: "/training", label: "NDT training courses" },
  { to: "/asnt-certification", label: "ASNT certification requirements by level" },
  { to: "/blog/how-to-become-ndt-technician", label: "How to become an NDT technician" },
];

export const SALARY_LEVEL_PAGES: SalaryLevelConfig[] = [
  /* ─────────────────────────────── LEVEL III ─────────────────────────────── */
  {
    path: "/ndt-level-3-salary",
    h1: "NDT Level 3 Salary in 2026: What ASNT Level III Actually Pays",
    title: meta("/ndt-level-3-salary").title,
    description: meta("/ndt-level-3-salary").description,
    quickAnswer:
      "PayScale’s self-reported data puts the average base salary of people holding an NDT PT Level III certification at $102,000 (30 profiles, updated January 2026), against an O*NET median of $78,350 a year for all NDT specialists. No public source reports Level III pay across every method, so treat the PayScale figure as indicative.",
    sourceIds: ["psPt3", "onet", "gdL2"],
    drivers: [
      {
        h: "Method scope matters more than tenure",
        body:
          "Level III is certified per method, and the value of the credential grows with the number of methods you can sign for. A single-method Level III approves procedures and qualifies personnel in that method only. A Level III in several methods can act as the responsible Level III for an inspection company’s whole written practice, which is a different job. That is one reason Level III pay varies so much between people with similar years of experience.",
      },
      {
        h: "Employed versus independent is a different question from salary",
        body:
          "Independent Level III consulting is billed by the day and paid only for days worked. Once travel, business development and administration are taken out, not every working day is billable, and an independent pays for the benefits, leave, certification renewal and insurance that an employer would cover. The honest comparison is a total staff package against expected billable days, not a day rate against a salary.",
      },
      {
        h: "Industry documentation regimes narrow the pool",
        body:
          "Nuclear work under ASNT CP-189 and aerospace work under customer specifications add documentation requirements that narrow the qualified pool. Oil and gas work follows the capital and turnaround cycle. None of the public sources above reports Level III pay by industry, so treat these as reasons pay differs, not as figures.",
      },
      {
        h: "An API inspector certification opens a separate track",
        body:
          "API 510, API 570 and API 653 are code inspector certifications for pressure vessels, piping and storage tanks. Adding one to a Level III changes which roles you are eligible for, such as Authorized Inspector work, rather than making you better paid in the role you already hold.",
      },
    ],
    progression: [
      {
        h: "If you are a Level II now",
        body:
          "The gate to Level III is documented experience plus examination: the ASNT Level III Basic examination and a method examination for each method you intend to hold. The practical constraint for most candidates is assembling verifiable experience records across the methods they have actually worked. Start that record now; reconstructing years of work history from memory is the step that delays most applications.",
      },
      {
        h: "If you already hold Level III in one method",
        body:
          "Adding methods changes the roles you can fill rather than your standing within the role you have. An API inspector certification is the alternative when your work is concentrated in fixed equipment, piping or tanks, because it opens a different category of work.",
      },
      {
        h: "If you are considering the consulting route",
        body:
          "Whether independent work pays better depends on how steady the client work is. Many independents build those relationships while still employed rather than leaving first and prospecting afterwards. See [what a Level III consultant does](/consulting/ndt-consulting-level-iii) for the scope of the work.",
      },
    ],
    faqs: [
      { q: "What is the average NDT Level 3 salary in the US?", a: "PayScale reports an average base salary of $102,000 for people holding an NDT PT Level III certification, from 30 self-reported profiles updated in January 2026. O*NET’s median for all NDT specialists is $78,350 a year. No public source reports an all-method Level III average, so the PayScale figure is the closest published number." },
      { q: "How much does an NDT Level 3 make per month?", a: "PayScale’s $102,000 average base for PT Level III holders works out to about $8,500 a month before tax, overtime and per diem. O*NET’s $78,350 median for all NDT specialists is about $6,530 a month. Field roles that work turnarounds earn more in outage months and less between them." },
      { q: "Is ASNT Level III worth it?", a: "For anyone staying in NDT long term it changes what you can sign for: procedures, written practices, examinations and personnel qualification in your methods. That authority is what employers pay a Level III for. It is worth less to someone planning to leave inspection work." },
      { q: "How long does it take to become an NDT Level 3?", a: "ASNT sets Level III eligibility by documented experience, and the experience required falls as formal education rises. The examination can be prepared for in months; assembling and verifying the experience record usually sets the timeline. ASNT’s current requirements are summarised on our ASNT certification page." },
      { q: "Does a degree increase NDT Level 3 salary?", a: "No public source isolates the effect of a degree on Level III pay. A degree reduces the experience required for ASNT Level III eligibility and helps in engineering-led management roles, but a working Level III is paid mainly for method authority." },
    ],
    related: [
      ...RELATED_CORE,
      { to: "/asnt-level-iii-training", label: "ASNT Level III exam preparation" },
      { to: "/ndt-level-2-salary", label: "NDT Level 2 salary" },
      { to: "/blog/ndt-level-iii-career-path-complete-guide", label: "Level III career path in detail" },
    ],
  },

  /* ─────────────────────────────── LEVEL II ──────────────────────────────── */
  {
    path: "/ndt-level-2-salary",
    h1: "NDT Level 2 Salary in 2026: What a Certified Level II Technician Earns",
    title: meta("/ndt-level-2-salary").title,
    description: meta("/ndt-level-2-salary").description,
    quickAnswer:
      "ZipRecruiter puts the US average for NDT RT Level 2 at $61,725 a year ($29.68 an hour) as of October 2026. Glassdoor’s self-reported median total pay for NDT Technician Level II is $77,000 from 50 salaries, of which base pay is $50,000 to $73,000 and additional pay, such as overtime, $12,000 to $23,000.",
    sourceIds: ["zrRt2", "gdL2", "onet"],
    drivers: [
      {
        h: "Method is a large factor",
        body:
          "Magnetic particle and penetrant testing have the widest qualified pool. Ultrasonics, and then phased array and time-of-flight diffraction, take longer to learn and to interpret, and radiography carries radiation-safety responsibility. The public sources above do not publish US Level II pay for every method, so the method effect is described here rather than priced.",
      },
      {
        h: "Overtime is not a rounding error in field roles",
        body:
          "Turnaround and outage work runs long shifts for concentrated periods. Glassdoor’s Level II data shows how much of total pay can come from additional pay: $12,000 to $23,000 on top of base pay. That is why a quoted base salary for a plant role and total pay for a field role are not like-for-like.",
      },
      {
        h: "Multi-method capability changes how you are scheduled",
        body:
          "A technician qualified in one method can only be sent to jobs needing that method. A technician holding three or four can be scheduled on almost anything, which makes them more useful to an employer than the individual qualifications suggest.",
      },
      {
        h: "Where you are willing to work",
        body:
          "Offshore rotations, remote sites and international assignments usually carry allowances that onshore roles do not. Rotation schedules and time away are the real cost. None of the sources above reports these allowances separately, so ask for the full package in writing when comparing offers.",
      },
    ],
    progression: [
      {
        h: "Add an advanced method",
        body:
          "Phased array is a common next qualification for UT Level IIs because more work specifies it. Under SNT-TC-1A your employer qualifies you in it through its written practice, with its own training and practical examination. You can rehearse the set-up in the [phased array UT simulator](/practical-ndt/phased-array-ut-simulator).",
      },
      {
        h: "Consider the API route if you work fixed equipment",
        body:
          "If your work is concentrated in pressure vessels, piping or storage tanks, an API inspector certification changes the category of role you can hold. It is a different examination discipline from NDT method certification (code knowledge rather than technique) and usually needs dedicated preparation.",
      },
      {
        h: "Level III is the long game",
        body:
          "Level III changes what you can sign for, and the requirement is documented experience across methods. Keep a contemporaneous record of the work you do in each method, because the eventual application depends on it and it is very hard to reconstruct later.",
      },
    ],
    faqs: [
      { q: "What is the average NDT Level 2 salary in the US?", a: "ZipRecruiter’s US average for NDT RT Level 2 is $61,725 a year as of October 2026. Glassdoor’s self-reported median total pay for NDT Technician Level II is $77,000 from 50 salaries, including additional pay such as overtime. The two differ because one averages job advertisements and the other averages what technicians report." },
      { q: "How much does a UT Level 2 make?", a: "We found no public US figure for UT Level 2 on its own. The closest published Level II figures are ZipRecruiter’s $61,725 average for NDT RT Level 2 and Glassdoor’s $77,000 median total pay for NDT Technician Level II, which covers several methods." },
      { q: "How long does it take to get to Level 2?", a: "It depends on the training hours and on-the-job experience your employer’s written practice requires for the method, and on how consistently you work in that method. Use the SNT-TC-1A hours planner to see the recommended minimum hours for each method." },
      { q: "Do Level 2 technicians earn more offshore?", a: "Offshore and rotation roles usually add allowances to base pay, but none of the public sources we checked reports them separately. Compare offers on total package: base pay, overtime rules, rotation allowance, per diem and travel." },
      { q: "Is NDT Level 2 enough to make a good living?", a: "Glassdoor’s self-reported median total pay for NDT Technician Level II is $77,000, close to O*NET’s $78,350 median for all NDT specialists. Many technicians stay at Level II by choice; people move to Level III mainly for procedure, programme and personnel responsibility." },
    ],
    related: [
      ...RELATED_CORE,
      { to: "/blog/ut-level-2-practice-questions", label: "UT Level 2 practice test" },
      { to: "/ut-level-2-training", label: "UT Level 2 training" },
      { to: "/practical-ndt/ultrasonic-testing-simulator", label: "Practise UT in a browser" },
      { to: "/ndt-level-3-salary", label: "NDT Level 3 salary" },
      { to: "/ndt-level-1-salary", label: "NDT Level 1 salary" },
    ],
  },

  /* ─────────────────────────────── LEVEL I ───────────────────────────────── */
  {
    path: "/ndt-level-1-salary",
    h1: "NDT Level 1 Salary in 2026: Entry-Level Pay and How Fast It Rises",
    title: meta("/ndt-level-1-salary").title,
    description: meta("/ndt-level-1-salary").description,
    quickAnswer:
      "No public source reports US pay for NDT Level I on its own. The nearest published figures are ZipRecruiter’s national average of $54,939 a year ($26.41 an hour) for non-destructive inspectors, as of October 2026, and O*NET’s median of $78,350 for all NDT specialists, which includes experienced technicians. Level I is a training stage, and pay rises with certification.",
    sourceIds: ["zrInspector", "onet", "gdL2"],
    drivers: [
      {
        h: "Level I is a stage, not a career grade",
        body:
          "Under both SNT-TC-1A and ISO 9712, a Level I performs examinations to written instruction and does not independently evaluate results. That limitation is why entry pay sits below the figures for certified Level II technicians, and why employers hiring at Level I are usually hiring for Level II later.",
      },
      {
        h: "Who is paying makes a large difference at entry",
        body:
          "Entry pay varies by employer type. Inspection service companies and industrial employers with structured training programmes often progress people faster because they have a pipeline to fill. Smaller shops can offer broader exposure across methods, which can help later.",
      },
      {
        h: "The method you enter through shapes the next steps",
        body:
          "Many people enter through magnetic particle and penetrant testing because the training burden is lowest. Entering through, or moving quickly into, ultrasonics puts you on the branch of the career that leads to phased array and TOFD.",
      },
      {
        h: "Employer-sponsored training changes the economics",
        body:
          "Many employers fund training and examination for new technicians, often in exchange for a commitment period. For anyone weighing entry, finding an employer who sponsors is usually worth more than a slightly higher starting wage.",
      },
    ],
    progression: [
      {
        h: "Getting to Level II is the objective",
        body:
          "The requirement is documented training hours plus on-the-job experience in the specific method, then examination. Because the experience must be in the method you are certifying in, consistent work in one or two methods is faster than scattered exposure across many. Ask about this when taking an entry role.",
      },
      {
        h: "Keep your own experience record from day one",
        body:
          "Your employer keeps records, but employers change. Technicians who keep a personal, contemporaneous log of methods, hours, equipment and supervisors find every later certification step easier, including Level III years later.",
      },
      {
        h: "Check the vision requirement first",
        body:
          "Certification schemes require a near-vision examination, repeated at least annually, and a colour contrast check. This catches people out at entry and again at renewal, so check it before committing to the path.",
      },
    ],
    faqs: [
      { q: "What is the starting salary for NDT?", a: "No public source reports US Level I pay on its own. ZipRecruiter’s national average for non-destructive inspectors is $54,939 a year ($26.41 an hour) as of October 2026, and that title includes certified inspectors as well as new starters. O*NET’s $78,350 median covers the whole NDT specialist occupation." },
      { q: "Can I get into NDT with a GED or high school diploma?", a: "Yes. In O*NET’s survey of the occupation, 68% of respondents said a new hire needs a high school diploma or equivalent. Neither SNT-TC-1A nor ISO 9712 requires a college degree for Level I or Level II; certification rests on documented training, experience and examination." },
      { q: "How much does an NDT trainee earn?", a: "We found no public US figure for NDT trainees before certification. Ask employers for the trainee rate, the rate after Level I and Level II certification, and whether they fund the training and examinations." },
      { q: "How long do you stay at Level 1?", a: "It depends on the experience your employer’s written practice requires for Level II in the method and on how consistently you work in that method. The SNT-TC-1A hours planner shows the recommended minimum training and experience hours by method." },
      { q: "Is NDT worth getting into at entry-level pay?", a: "Entry pay is modest, but published figures for certified technicians are higher: Glassdoor’s self-reported median total pay for NDT Technician Level II is $77,000, and O*NET’s median for all NDT specialists is $78,350 a year." },
    ],
    related: [
      ...RELATED_CORE,
      { to: "/tools/snt-tc-1a-hours-planner", label: "SNT-TC-1A hours planner" },
      { to: "/ndt-level-2-salary", label: "NDT Level 2 salary" },
      { to: "/blog/what-is-ndt-beginners-guide", label: "What is NDT? A beginner's guide" },
      { to: "/blog/is-ndt-a-good-career", label: "Is NDT a good career?" },
    ],
  },

  /* ────────────────────────────── INSPECTOR ──────────────────────────────── */
  {
    path: "/ndt-inspector-salary",
    h1: "NDT Inspector Salary in 2026: What Certified Inspectors Earn in the US",
    title: meta("/ndt-inspector-salary").title,
    description: meta("/ndt-inspector-salary").description,
    quickAnswer:
      "ZipRecruiter’s US average for non-destructive inspectors is $54,939 a year ($26.41 an hour) as of 17 October 2026, while O*NET reports a median of $78,350 a year for NDT specialists from BLS wage data for a broader occupational group. The two measure different populations: job-advertisement averages for one title against government wage data for the occupation.",
    sourceIds: ["zrInspector", "onet", "gdL2", "psPt3"],
    drivers: [
      {
        h: "Why the published averages disagree",
        body:
          "Government data does not isolate NDT inspectors: O*NET’s figure for Non-Destructive Testing Specialists comes from BLS wage data for the wider SOC 17-3029 group of engineering technologists and technicians. Job-site averages such as ZipRecruiter’s come from advertisements and user data for one job title. Neither is wrong about what it measures, and neither measures a certified inspector at a given level, which is why the table above names each source’s measure, sample and date.",
      },
      {
        h: "Certification level is the primary determinant",
        body:
          "Pay follows certification authority. A Level I performs to instruction, a Level II interprets and reports, and a Level III approves procedures and qualifies people. Each step changes what you are permitted to sign for. Job titles vary between companies; certification level does not.",
      },
      {
        h: "API certifications create a separate track",
        body:
          "API 510, 570 and 653 are code inspector certifications rather than NDT method certifications, and they qualify holders for inspector roles on pressure vessels, piping and storage tanks. Inspectors holding both an NDT level and an API certification can be assigned to a wider range of work.",
      },
      {
        h: "Industry and setting",
        body:
          "Glassdoor’s industry list for NDT Technician Level II puts Aerospace & Defense highest at $66,984, ahead of Energy, Mining & Utilities at $62,716 and Manufacturing at $62,475. Field roles add overtime and allowances on top of base pay.",
      },
    ],
    progression: [
      {
        h: "Identify which track you are on",
        body:
          "There are two advancement routes. The method track runs Level I to II to III and is about examination authority. The code track runs through API certifications and is about inspection authority over equipment. Many senior inspectors hold both, but they are separate examinations with separate preparation.",
      },
      {
        h: "Advanced methods are a common mid-career move",
        body:
          "For inspectors already at Level II, phased array and TOFD are common additions because more work specifies them. Your employer qualifies you in each through its written practice.",
      },
      {
        h: "Document everything, continuously",
        body:
          "Every later certification step depends on verifiable experience records. Inspectors who keep their own contemporaneous log of methods, hours, equipment and the supervising Level III progress more easily than equally experienced colleagues who have to reconstruct it.",
      },
    ],
    faqs: [
      { q: "How much do NDT inspectors make?", a: "ZipRecruiter’s US average for non-destructive inspectors is $54,939 a year ($26.41 an hour) as of 17 October 2026. O*NET’s median for NDT specialists is $78,350 a year, and Glassdoor’s self-reported median total pay for NDT Technician Level II is $77,000 from 50 salaries." },
      { q: "Why do NDT salary figures vary so much online?", a: "The sources count different things. O*NET reports a median for a wider occupational group from government wage data, ZipRecruiter averages job advertisements for one title, and Glassdoor and PayScale average what individuals report from small samples. Base pay and total pay with overtime also differ in field roles." },
      { q: "What certification pays the most in NDT?", a: "No public source ranks NDT certifications by pay. The highest single figure we found is PayScale’s $102,000 average base for NDT PT Level III holders, from 30 profiles. Level III, and API inspector certifications held alongside an NDT level, change what you can sign for, which is what employers pay for." },
      { q: "Do NDT inspectors need a degree?", a: "No. Certification under SNT-TC-1A and ISO 9712 rests on documented training, experience and examination. In O*NET’s survey, 68% of respondents said a new hire needs a high school diploma or equivalent. A degree can reduce the experience required for ASNT Level III." },
      { q: "Is NDT inspection a stable career?", a: "Inspection in regulated industries is required by codes and owners rather than chosen, so it continues through downturns more than discretionary work does. O*NET projects average growth for the occupation group, 3% to 4% from 2025 to 2035, with 5,400 projected openings." },
    ],
    related: [
      ...RELATED_CORE,
      { to: "/ndt-level-3-salary", label: "NDT Level 3 salary" },
      { to: "/ndt-level-2-salary", label: "NDT Level 2 salary" },
      { to: "/api-inspector-guide", label: "API 510, 570 and 653 inspector guide" },
    ],
  },
];
