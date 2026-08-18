/**
 * Citation prompt panel — Phase 3 measurement. 2026-08-18.
 * ─────────────────────────────────────────────────────────────────────────────
 * THE MEASUREMENT PROBLEM THIS SOLVES
 *
 * A retrieved passage can shape an AI answer, receive no visible citation, and
 * generate no click. Clicks are therefore a lagging, lossy proxy for whether the
 * citation work is landing — and during the first two quarters they will be
 * further confounded by the ongoing decay of the definitional layer, which lost
 * 82% of its impressions to AI Overviews at unchanged positions.
 *
 * So the primary KPI for Phase 3 is not clicks. It is the share of a FIXED panel
 * of prompts on which atlantisndt.com is retrieved or cited. Clicks remain the
 * confirming indicator, because on the same SERP a cited page earns 2.07% CTR
 * against 0.94% uncited.
 *
 * WHY THE PANEL IS FROZEN
 *
 * The panel is fixed for 12 months and must not be edited to chase good news.
 * A moving panel produces a series that cannot be compared with itself, which is
 * the most common way this kind of measurement quietly becomes decorative. Add
 * new prompts only as a clearly labelled second cohort with its own baseline.
 *
 * COMPOSITION follows where this site can realistically be cited. The competitor
 * research found the NDT citation pool is NOT locked to giants — unlike consumer
 * verticals dominated by Wikipedia and Reddit, every NDT query tested returned
 * specialist sources, and Atlantis was already cited on two of four. Weighting
 * favours certification and code questions, where a named ASNT Level III and a
 * decomposition table beat an aggregator.
 *
 * HONEST LIMIT: scripts/track-citations.mjs cannot query ChatGPT, Perplexity or
 * Gemini directly — there is no API access configured here. It measures the
 * observable proxy (whether the domain surfaces in search for the prompt) and
 * supports manual entry of true citation checks. Treat the automated series as
 * directional and the manual series as authoritative.
 */

export const PANEL_VERSION = '2026-08-18';
export const PANEL_FROZEN_UNTIL = '2027-08-18';

/**
 * category weights reflect where citation is winnable, not where volume is.
 *   certification  the strongest fit: employer-based rules, hours, authority
 *   code           clause-level questions where specificity wins
 *   method         comparison questions, where a table beats prose
 *   career         salary and pathway, where this site already out-cites aggregators
 *   software       buyer-side questions no vendor answers
 *   twin           the NDT-to-digital-twin intersection, currently unoccupied
 */
export const PROMPT_PANEL = [
  // ── certification and personnel authority ──────────────────────────────────
  { id: 'c01', category: 'certification', prompt: 'Can an outside agency certify my NDT employees under SNT-TC-1A?' },
  { id: 'c02', category: 'certification', prompt: 'What must an SNT-TC-1A written practice contain?' },
  { id: 'c03', category: 'certification', prompt: 'Who signs an NDT certification, the employer or the Level III?' },
  { id: 'c04', category: 'certification', prompt: 'What is the difference between SNT-TC-1A and CP-189?' },
  { id: 'c05', category: 'certification', prompt: 'What does NAS 410 require that SNT-TC-1A does not?' },
  { id: 'c06', category: 'certification', prompt: 'How many training hours are required for NDT Level II?' },
  { id: 'c07', category: 'certification', prompt: 'What is a Responsible Level 3 under NAS 410?' },
  { id: 'c08', category: 'certification', prompt: 'How do I become an ASNT NDT Level III?' },
  { id: 'c09', category: 'certification', prompt: 'What happens to our certifications if our Level III resigns?' },
  { id: 'c10', category: 'certification', prompt: 'Is ASNT certification employer-based or third-party?' },
  { id: 'c11', category: 'certification', prompt: 'What are the eligibility requirements for API 653 certification?' },
  { id: 'c12', category: 'certification', prompt: 'How does ISO 9712 differ from ASNT certification?' },
  { id: 'c13', category: 'certification', prompt: 'What is required to recertify an ASNT Level III?' },
  { id: 'c14', category: 'certification', prompt: 'Can a Level II interpret NDT results without a Level III present?' },
  { id: 'c15', category: 'certification', prompt: 'What vision testing is required for NDT technicians?' },
  { id: 'c16', category: 'certification', prompt: 'Do I need UT Level II before PAUT certification?' },
  { id: 'c17', category: 'certification', prompt: 'What experience counts as OJT for NDT certification?' },
  { id: 'c18', category: 'certification', prompt: 'How long does it take to become an NDT Level II technician?' },
  { id: 'c19', category: 'certification', prompt: 'What is Nadcap AC7114 and what does it audit?' },
  { id: 'c20', category: 'certification', prompt: 'Who is allowed to approve an NDT procedure?' },

  // ── codes and standards ────────────────────────────────────────────────────
  { id: 'k01', category: 'code', prompt: 'Does ASME Section V Article 4 contain weld acceptance criteria?' },
  { id: 'k02', category: 'code', prompt: 'What is the difference between ASME Section V Article 4 and Article 5?' },
  { id: 'k03', category: 'code', prompt: 'What are the AWS D1.1 visual weld acceptance criteria?' },
  { id: 'k04', category: 'code', prompt: 'Which ASME code section gives UT acceptance criteria for pressure vessels?' },
  { id: 'k05', category: 'code', prompt: 'What calibration block does ASME Section V require for weld UT?' },
  { id: 'k06', category: 'code', prompt: 'How does AWS D1.1 treat cracks in a weld?' },
  { id: 'k07', category: 'code', prompt: 'What NDE does ASME B31.3 require for process piping?' },
  { id: 'k08', category: 'code', prompt: 'What does API 653 require for tank inspection intervals?' },
  { id: 'k09', category: 'code', prompt: 'What is a CML under API 570?' },
  { id: 'k10', category: 'code', prompt: 'How is corrosion rate calculated for piping inspection?' },
  { id: 'k11', category: 'code', prompt: 'What is the difference between API 510, 570 and 653?' },
  { id: 'k12', category: 'code', prompt: 'When does ASME require radiographic examination of a weld?' },
  { id: 'k13', category: 'code', prompt: 'What must an NDT report contain to satisfy ASME Section V?' },
  { id: 'k14', category: 'code', prompt: 'How often must ultrasonic calibration be verified during examination?' },
  { id: 'k15', category: 'code', prompt: 'What is API 579 fitness for service used for?' },

  // ── method comparison ──────────────────────────────────────────────────────
  { id: 'm01', category: 'method', prompt: 'RT vs UT for weld inspection, which should I use?' },
  { id: 'm02', category: 'method', prompt: 'What can phased array ultrasonic testing detect that conventional UT cannot?' },
  { id: 'm03', category: 'method', prompt: 'When should I use TOFD instead of phased array?' },
  { id: 'm04', category: 'method', prompt: 'What are the limitations of magnetic particle testing?' },
  { id: 'm05', category: 'method', prompt: 'Eddy current vs ultrasonic testing for tube inspection' },
  { id: 'm06', category: 'method', prompt: 'Which NDT method is best for detecting corrosion under insulation?' },
  { id: 'm07', category: 'method', prompt: 'What NDT methods find subsurface defects?' },
  { id: 'm08', category: 'method', prompt: 'How accurate is ultrasonic thickness measurement?' },
  { id: 'm09', category: 'method', prompt: 'What is the difference between PT and MT?' },
  { id: 'm10', category: 'method', prompt: 'Which NDT method is used for aerospace composite inspection?' },

  // ── career, pay and pathway ────────────────────────────────────────────────
  { id: 'r01', category: 'career', prompt: 'How much does an NDT Level II technician earn in the US?' },
  { id: 'r02', category: 'career', prompt: 'What is an ASNT Level III salary?' },
  { id: 'r03', category: 'career', prompt: 'Does PAUT certification increase NDT pay?' },
  { id: 'r04', category: 'career', prompt: 'How much do API 510 inspectors make?' },
  { id: 'r05', category: 'career', prompt: 'Is NDT a good career in the United States?' },
  { id: 'r06', category: 'career', prompt: 'How do I go from NDT Level II to Level III?' },
  { id: 'r07', category: 'career', prompt: 'Which NDT method pays the most?' },
  { id: 'r08', category: 'career', prompt: 'Does welding experience count toward API 510 requirements?' },
  { id: 'r09', category: 'career', prompt: 'What is the AWS CWI exam pass rate?' },
  { id: 'r10', category: 'career', prompt: 'Which part of the CWI exam is hardest?' },

  // ── software and buying ────────────────────────────────────────────────────
  { id: 's01', category: 'software', prompt: 'What is the best NDT reporting software?' },
  { id: 's02', category: 'software', prompt: 'How do I get OmniScan data into an inspection report?' },
  { id: 's03', category: 'software', prompt: 'What should an NDT software RFP ask vendors?' },
  { id: 's04', category: 'software', prompt: 'NDT inspection software that works offline in the field' },
  { id: 's05', category: 'software', prompt: 'Should we build or buy NDT inspection software?' },
  { id: 's06', category: 'software', prompt: 'How do I track NDT technician certification expiry?' },
  { id: 's07', category: 'software', prompt: 'What software do ISO 17020 inspection bodies use?' },
  { id: 's08', category: 'software', prompt: 'How do I replace Excel for NDT inspection records?' },
  { id: 's09', category: 'software', prompt: 'What software tracks NDT equipment calibration due dates?' },
  { id: 's10', category: 'software', prompt: 'Alternatives to Floodlight NDT software' },

  // ── digital twin and asset integrity ───────────────────────────────────────
  { id: 't01', category: 'twin', prompt: 'What is the difference between a digital twin and an IDMS?' },
  { id: 't02', category: 'twin', prompt: 'Which NDT methods feed a digital twin?' },
  { id: 't03', category: 'twin', prompt: 'How do you overlay UT thickness readings on a 3D model?' },
  { id: 't04', category: 'twin', prompt: 'What is DICONDE and why does it matter for inspection data?' },
  { id: 't05', category: 'twin', prompt: 'Why do industrial digital twin projects fail?' },
  { id: 't06', category: 'twin', prompt: 'What does a digital twin cost for an industrial plant?' },
  { id: 't07', category: 'twin', prompt: 'How do I deliver twin-ready NDT data to a client?' },
  { id: 't08', category: 'twin', prompt: 'Digital twin for API 653 tank inspection' },
  { id: 't09', category: 'twin', prompt: 'What is asset integrity management software?' },
  { id: 't10', category: 'twin', prompt: 'How does RBI relate to a digital twin?' },
];

export const PANEL_BY_CATEGORY = PROMPT_PANEL.reduce((acc, p) => {
  (acc[p.category] ??= []).push(p);
  return acc;
}, {});
