/**
 * Citation layers — GENERATED, do not hand-edit.
 * ─────────────────────────────────────────────────────────────────────────────
 * Produced by scripts/build-citation-layers.mjs from drafted JSON, and every
 * entry passed the spec: 40-70 word lead, self-contained expansion, a named
 * authority, a captioned table with 3+ columns and 3+ rows, exactly six
 * question-form facets, no hedging, and no Atlantis price.
 *
 * Consumed by scripts/prerender.mjs, which emits these into the STATIC HTML.
 * That matters: React components never reach crawlers on this site, because
 * prerender builds pages from its own bodyContent strings. A citation layer
 * that exists only in React is worth nothing.
 *
 * To change a layer, edit the source JSON and re-run the generator.
 *
 * Generated: 2026-08-20T11:58:51.858Z
 * Layers: 121
 */

export const CITATION_LAYERS_GENERATED = {
  "/blog/asnt-snt-tc-1a-certification-requirements": {
      "answer": "ASNT SNT-TC-1A is a recommended practice, not a standard, and not a certificate ASNT issues. It tells a US employer how to write its own Written Practice covering training hours, on-the-job experience, examinations, vision testing and recertification for NDT Level I, II and III personnel. The employer certifies its own people, and the credential is valid inside that employer's programme.",
      "expansion": "Under ASNT SNT-TC-1A the employer, not ASNT, is the certifying body. The employer publishes a Written Practice naming the responsible NDT Level III, the training and on-the-job experience hours required for each method and level, the examination structure and grading rule, the near-vision and colour-perception testing regime, and the recertification interval. An auditor at a US refinery, fabrication shop or inspection company does not ask to see SNT-TC-1A itself; it asks for the Written Practice and the personnel files proving the practice was followed. Level I performs set-ups and records data under supervision. Level II sets up, calibrates, interprets, and owns the accept or reject call. Level III writes and approves procedures and examines and certifies Level I and II personnel. Because the document recommends rather than mandates, an employer may impose requirements more stringent than SNT-TC-1A, and must justify any deviation in writing. ANSI/ASNT CP-189 is the mandatory-standard sibling; ISO 9712 is the third-party alternative.",
      "source": "ASNT Recommended Practice No. SNT-TC-1A (2024 edition), with ANSI/ASNT CP-189 as the mandatory-standard equivalent and ISO 9712 as the third-party alternative",
      "table": {
          "caption": "What SNT-TC-1A actually requires in an employer's Written Practice — element by element",
          "columns": [
              "Written Practice element",
              "What SNT-TC-1A asks the employer to define",
              "Who owns it",
              "Most common audit finding"
          ],
          "rows": [
              [
                  "Training hours",
                  "Minimum classroom hours stated per method and per level, following the recommended-practice tables (40 hours for UT Level I)",
                  "Employer, delivered by employer or training provider",
                  "Hours claimed with no attendance record and no instructor qualification on file"
              ],
              [
                  "Experience hours",
                  "Documented on-the-job hours per method and level, performed under supervision and signed off",
                  "Employer, verified by the responsible Level III",
                  "Hours reconstructed retroactively at exam time instead of logged as the work was done"
              ],
              [
                  "Examinations",
                  "General, specific and practical examinations per method, with the composite grading rule fixed in the Written Practice",
                  "Responsible NDT Level III",
                  "Question banks and answer keys not access-controlled or not retained for audit"
              ],
              [
                  "Vision testing",
                  "Near-vision acuity checked annually and colour perception on the stated cycle, both recorded",
                  "Employer",
                  "Annual near-vision test lapsed, putting every report signed in that window in question"
              ],
              [
                  "Recertification",
                  "Interval stated in the Written Practice, satisfied by examination or by evidence of continuing work in the method",
                  "Employer",
                  "Expiry tracked in a personal spreadsheet, so a lapsed technician is dispatched to a job"
              ],
              [
                  "Level III authority",
                  "A named Level III responsible for the programme, either employed or contracted from outside",
                  "Employer",
                  "Outside Level III named on paper with no evidence of involvement in examinations or procedure approval"
              ]
          ],
          "note": "SNT-TC-1A is a recommended practice: the auditable requirement is the employer's own Written Practice, not the ASNT document it was written from."
      },
      "facets": [
          {
              "q": "Is SNT-TC-1A a standard or a recommended practice?",
              "a": "SNT-TC-1A is a recommended practice. It sets out what an employer's NDT personnel qualification programme should contain rather than imposing binding requirements, which is why an employer may write requirements more stringent than the document but must justify anything less. ANSI/ASNT CP-189 is the mandatory-standard version, used when a client specification calls for a standard rather than a recommended practice."
          },
          {
              "q": "Who issues an SNT-TC-1A certificate — ASNT or my employer?",
              "a": "Your employer. Under SNT-TC-1A the employer administers the examinations under its responsible Level III's authority and issues the certificate against its own Written Practice. ASNT does not hold your file or issue the certificate. ASNT's own central programmes, the NDT Level III certificate and ACCP, are the ones ASNT examines and issues directly to the individual."
          },
          {
              "q": "Does my SNT-TC-1A certification transfer if I change companies?",
              "a": "No. An employer-based certification is valid within the Written Practice that issued it and lapses when you leave. A new employer may credit your documented training and experience hours toward re-certifying you, which is usually fast, but it must examine and certify you under its own practice. Central schemes such as ASNT NDT Level III, ACCP, ISO 9712 and PCN travel with the individual."
          },
          {
              "q": "What is the difference between SNT-TC-1A and CP-189?",
              "a": "SNT-TC-1A recommends; ANSI/ASNT CP-189 requires. CP-189 is written as a mandatory standard, so its qualification and certification requirements are fixed rather than adjustable in an employer's Written Practice, and it is what a specification names when the client will not accept employer discretion. Many US employers run SNT-TC-1A as the baseline and add CP-189 for contracts that demand it."
          },
          {
              "q": "How often does SNT-TC-1A require a vision test?",
              "a": "Near-vision acuity is checked annually, using a Jaeger No. 1 chart or equivalent at the distance the work requires, and colour perception is checked on the longer cycle stated in the Written Practice. A lapsed annual vision test is one of the cheapest findings to prevent and one of the most damaging to receive, because it calls into question every report the technician signed in the lapsed period."
          },
          {
              "q": "Can an employer use an outside Level III to run its SNT-TC-1A programme?",
              "a": "Yes. SNT-TC-1A allows the responsible Level III to be a contracted outside Level III rather than an employee, which is how most small and mid-size inspection companies run a compliant programme. The Written Practice must name that person, and the audit test is evidence of real involvement: procedures actually signed, examinations actually administered or approved, and personnel files actually reviewed."
          }
      ]
  },

  "/asnt-certification": {
      "answer": "ASNT certification runs through three separate documents. SNT-TC-1A is employer-based: your employer certifies you under its own Written Practice. ANSI/ASNT CP-189 is the mandatory-standard version of the same model. ASNT's central programmes — the NDT Level III certificate and ACCP — are examined and issued by ASNT itself, so those stay with you when you change employers.",
      "expansion": "The ASNT NDT Level III certificate is earned by examination rather than employer attestation. A candidate sits the Basic examination once, covering materials and processes, common discontinuities, and the certification schemes themselves, then a separate Method examination for every method sought — so a three-method Level III means four examinations and four examination fees. ASNT publishes its current fee schedule with separate member and non-member rates, and fees are charged per examination, which means cost scales with the number of methods rather than with the level. Eligibility combines education with documented NDT experience, and a qualifying engineering or science degree materially reduces the documented hours required against the high-school entry route. A current near-vision test is required throughout. Certification runs a fixed term and is then renewed by examination or by accumulating structured continuing-education and technical-activity credit.",
      "source": "ASNT SNT-TC-1A (2024 edition), ANSI/ASNT CP-189, and the ASNT ACCP programme document; examination fees per ASNT's current published fee schedule at asnt.org",
      "table": {
          "caption": "ASNT's three schemes and the two international alternatives — who examines, who holds the certificate",
          "columns": [
              "Scheme",
              "Who examines",
              "Who holds the certificate",
              "Portable between employers",
              "Typically named by"
          ],
          "rows": [
              [
                  "ASNT SNT-TC-1A",
                  "Employer's responsible NDT Level III",
                  "The employer",
                  "No — lapses when you leave",
                  "US inspection companies, fabrication, OSHA-regulated industry"
              ],
              [
                  "ANSI/ASNT CP-189",
                  "Employer under a mandatory standard, using ASNT Level III examinations",
                  "The employer, to fixed requirements",
                  "No, but the requirements are fixed rather than discretionary",
                  "Client specifications that require a standard, not a recommended practice"
              ],
              [
                  "ASNT NDT Level III",
                  "ASNT — one Basic examination plus a Method examination per method",
                  "The individual",
                  "Yes",
                  "Procedure approval, written-practice authority, Level III consulting"
              ],
              [
                  "ASNT ACCP",
                  "ASNT, with field experience verified by ASNT directly",
                  "The individual",
                  "Yes",
                  "Aerospace and central-certification requirements"
              ],
              [
                  "ISO 9712",
                  "An accredited national certification body",
                  "The individual",
                  "Yes",
                  "Europe, Middle East, and PED-regulated pressure equipment work"
              ],
              [
                  "PCN (BINDT)",
                  "BINDT-approved examination centre",
                  "The individual",
                  "Yes",
                  "UK, North Sea, and Commonwealth contracts"
              ]
          ],
          "note": "Employer-based schemes are faster and cheaper for an employer building a crew. Central schemes are what an individual carries between jobs, which is why most senior inspectors end up holding both."
      },
      "facets": [
          {
              "q": "How much are ASNT Level III exam fees?",
              "a": "ASNT charges per examination, not per certification, and publishes current member and non-member rates in its fee schedule at asnt.org. The structure matters more than any single figure: you pay an application fee, one fee for the Basic examination, and a further fee for each Method examination you sit. Adding methods, not advancing levels, is what drives the total up."
          },
          {
              "q": "How many exams do I need for ASNT Level III in three methods?",
              "a": "Four. The Basic examination is taken once and covers materials and processes, common discontinuities, and the certification schemes, and it is the single strongest discriminator between first-time passes and failures. On top of it you sit one Method examination for each method sought, so three methods means three method exams plus the Basic. Candidates from a single-method background consistently underestimate the Basic."
          },
          {
              "q": "Do I need a college degree for ASNT certification?",
              "a": "No degree is required for NDT Level I or Level II — a high-school education plus the required training hours and documented supervised experience is enough. At Level III a qualifying engineering or science degree is optional but valuable: it substantially reduces the documented-experience requirement compared with the high-school entry route, which is often the difference between qualifying this year and in three years."
          },
          {
              "q": "How long does it take to reach ASNT Level II from zero?",
              "a": "Roughly four to six months for a single method such as UT. That covers Level I classroom hours, the Level I supervised experience hours, the additional Level II classroom hours, and the larger block of Level II experience hours logged under a Level III. Classroom time can be compressed into intensive weeks; the field-experience hours cannot, because they must be worked and signed as they happen."
          },
          {
              "q": "Does ASNT certification expire?",
              "a": "Yes. Every scheme runs a fixed term and then requires recertification, either by re-examination or by documented continuing work and structured credit, depending on the scheme and how long you have held the certificate. Vision testing runs on its own annual cycle underneath. Lapsed recertification is a routine audit finding and entirely avoidable if renewal dates sit in the system that controls job dispatch."
          },
          {
              "q": "Is ASNT certification recognised outside North America?",
              "a": "Widely, but not universally. ASNT schemes dominate the Americas, the Middle East and much of Asia — Saudi Aramco, ADNOC and most US-headquartered operators name SNT-TC-1A or CP-189. The UK and much of Europe name PCN or ISO 9712 instead, and European pressure-equipment work generally requires third-party certification. Inspectors working internationally commonly hold an ASNT credential and an ISO 9712 or PCN certificate together."
          }
      ]
  },

  "/ndt-certification-guide": {
      "answer": "NDT certification cost splits into five separately priced items: the training course, the examination fee, the current-edition reference documents, the vision test, and recertification. In the United States most employers pay training and examination costs for their own technicians, so the figure a self-funding candidate faces and the figure an employer budgets per technician are two different numbers.",
      "expansion": "Every NDT certification cost is charged per method, which makes method count — not level — the real multiplier. A technician certified in two methods pays two training courses, two sets of examinations, two practical examinations and two recertifications. The certifying body sets the examination fee and publishes it: ASNT for SNT-TC-1A, CP-189 and ACCP examinations, BINDT for PCN, and the accredited national body for ISO 9712. Training providers set course fees independently of the certifying body. Reference documents are bought from ASME, API and ISO publishers, and must be the edition in force for the examination cycle. On-the-job experience hours carry no fee but are the longest and least compressible part of the pathway, because they must be worked under supervision and signed as they occur. Certification is renewed on a three-to-five-year cycle depending on scheme, and near-vision testing runs annually underneath all of it.",
      "source": "ASNT SNT-TC-1A (2024 edition) and ANSI/ASNT CP-189 for the US pathway; ISO 9712:2021 for third-party certification; examination fees per each certifying body's published schedule",
      "table": {
          "caption": "NDT certification cost, decomposed by component — who sets it, who pays it, how often",
          "columns": [
              "Cost component",
              "Who sets the price",
              "Charged per",
              "How often",
              "Usually paid by"
          ],
          "rows": [
              [
                  "Classroom training course",
                  "Training provider",
                  "Method and level",
                  "Once per method per level",
                  "Employer for staff technicians; the candidate when self-funding"
              ],
              [
                  "Examination fee",
                  "Certifying body — ASNT, BINDT, or the national ISO 9712 body",
                  "Each examination sat",
                  "Once per attempt, including retakes",
                  "Candidate or employer, per company policy"
              ],
              [
                  "Reference documents",
                  "ASME, API and ISO publishers",
                  "Each document and edition",
                  "Repurchased when the edition in force changes",
                  "Candidate for individual exams; employer for the site library"
              ],
              [
                  "Practical examination and specimens",
                  "Employer or training provider",
                  "Method",
                  "Once per method per level",
                  "Employer"
              ],
              [
                  "Vision test — near vision and colour",
                  "Optometrist or occupational-health provider",
                  "Person",
                  "Near vision annually",
                  "Employer"
              ],
              [
                  "Recertification",
                  "Certifying body, or the employer's Written Practice",
                  "Method",
                  "Every three to five years by scheme",
                  "Employer"
              ],
              [
                  "On-the-job experience hours",
                  "No fee — supervised paid work time",
                  "Method",
                  "Continuous until the hour requirement is met",
                  "Employer, as productive work"
              ]
          ],
          "note": "Cost scales with method count, not with level. A dual-method Level II technician pays two of nearly every line above, which is why VT plus PT is the standard low-cost entry pairing."
      },
      "facets": [
          {
              "q": "How much does NDT certification cost in the United States?",
              "a": "There is no single figure, because five separately priced items combine and each is charged per method. Examination fees are published by the certifying body — ASNT for SNT-TC-1A, CP-189 and ACCP — with member and non-member rates. Training course fees are set independently by the provider and vary by method, level and delivery format. Most US employers absorb both for their own technicians."
          },
          {
              "q": "Does my employer pay for NDT certification?",
              "a": "In the US inspection industry, usually yes for staff technicians — training and examination costs are treated as a workforce investment, often with a service commitment attached. The employer also supplies the on-the-job experience hours, which is the part a self-funding candidate cannot buy at any price. Choosing an employer with a real training programme is the single largest cost variable in an NDT career."
          },
          {
              "q": "Which NDT method is cheapest and fastest to certify in?",
              "a": "Liquid penetrant and visual testing. Both carry the shortest recommended training hours and the lowest experience-hour requirements of the six primary methods, and their practical examinations are the least equipment-dependent. Magnetic particle sits just above them. Ultrasonic, radiographic and eddy current carry the longest training and experience requirements, and radiography adds radiation-safety training and often a state licence."
          },
          {
              "q": "How long does it take to go from Level I to Level III?",
              "a": "Level I takes weeks — the classroom block plus the method's supervised experience hours. Most technicians reach Level II within six to twelve months in a first method. Level III requires several years of documented experience on top of Level II, or a shorter documented-experience path if you hold a qualifying engineering degree, plus passing the Basic examination and a Method examination for each method."
          },
          {
              "q": "Which certification scheme should I choose — ASNT, ISO 9712, PCN or CSWIP?",
              "a": "Choose by the region and the client specification you are working toward, not by scheme quality. ASNT dominates North America, the Middle East and much of Asia. ISO 9712 through an accredited national body is the standard across Europe. PCN is dominant in the UK and North Sea. CSWIP is preferred for welding inspection roles specifically. Working internationally usually means holding two."
          },
          {
              "q": "Do NDT certifications expire?",
              "a": "Yes, every one of them. Terms run three to five years depending on scheme and level, renewed either by re-examination or by documented continuing work and structured credit. Near-vision testing runs on a separate annual cycle and a lapse there invalidates the certification period regardless of the certificate date. Renewal dates belong in the system that blocks job dispatch, not in a personal calendar."
          }
      ]
  },

  "/api-570-certification": {
      "answer": "API 570 certifies the piping inspector: the person who sets inspection intervals for in-service process piping, evaluates thickness data against minimum required thickness, and approves repairs, alterations and reratings. The examination is a single Pearson VUE sitting of about 7.5 hours combining closed-book and open-book portions, pass mark 70%, with no prerequisite — API 510 is not required first.",
      "expansion": "API 570 eligibility combines education with documented in-service piping experience: an engineering degree plus one year, a two-year technical degree plus two years, a high-school diploma plus three years, or no formal qualification plus five years, all in design, fabrication, repair, alteration or inspection of in-service piping. The open-book portion is examined against a named publication set — API 570 itself, ASME B31.3 as the construction code, ASME Section V and Section IX, and API RP 571, 574, 577 and 578 plus API 579-1/ASME FFS-1 as supporting documents. API publishes a body of knowledge for each examination cycle naming the exact editions and addenda in force, and buying an out-of-date edition is the most expensive avoidable mistake in preparation because clause numbering moves between editions. Certification runs three years before recertification. The marks concentrate in minimum required thickness, corrosion rate, remaining life, and interval determination by piping class.",
      "source": "API 570, Piping Inspection Code — Section 6 (inspection intervals) and Section 7 (inspection data evaluation), with ASME B31.3 as the construction code; eligibility and exam structure per the API ICP body of knowledge for the current cycle",
      "table": {
          "caption": "API 570 inspection intervals by piping class and circuit feature",
          "columns": [
              "Piping class or feature",
              "Service it covers",
              "Thickness measurement interval",
              "External visual interval",
              "What drives it shorter"
          ],
          "rows": [
              [
                  "Class 1",
                  "Highest consequence — flammable services that flash on release, toxic services, hydrogen and high H2S",
                  "5 years maximum",
                  "5 years maximum",
                  "Half the calculated remaining life whenever that is shorter"
              ],
              [
                  "Class 2",
                  "General process services not classified as Class 1 or Class 3 — the bulk of a refinery",
                  "10 years maximum",
                  "5 years maximum",
                  "Half the calculated remaining life"
              ],
              [
                  "Class 3",
                  "Low consequence — flammable but with low probability of significant harm on release",
                  "10 years maximum",
                  "10 years maximum",
                  "Half the calculated remaining life"
              ],
              [
                  "Injection points",
                  "Any class, wherever a chemical, water wash or additive enters the stream",
                  "Treated as its own circuit, scanned upstream and downstream of the injection",
                  "With the parent circuit",
                  "Turbulence and mixing corrosion; client specifications often impose quarterly thickness"
              ],
              [
                  "Soil-to-air interface",
                  "The buried-to-above-grade transition on any class",
                  "Inspected above and below grade at the interface",
                  "With the parent circuit",
                  "Localised external pitting concentrated at the moisture line"
              ],
              [
                  "Dead legs and CUI-susceptible lines",
                  "Stagnant legs; insulated carbon steel sitting in the corrosion-under-insulation temperature window",
                  "Parent circuit interval plus targeted strip inspection under insulation",
                  "Follows the parent circuit",
                  "Water ingress under insulation, and microbiologically influenced corrosion in stagnant legs"
              ]
          ],
          "note": "The class intervals are ceilings, not schedules. API 570 requires the shorter of the class maximum and half the calculated remaining life, and the remaining-life calculation uses the higher of the short-term and long-term corrosion rate."
      },
      "facets": [
          {
              "q": "What is the API 570 body of knowledge for 2026?",
              "a": "API publishes a body of knowledge for each examination cycle listing every publication examined and the exact edition and addenda in force for that cycle. For API 570 it centres on API 570 itself, ASME B31.3, ASME Section V and Section IX, and API RP 571, 574, 577, 578 and API 579-1/ASME FFS-1. Verify the current cycle's document before buying anything, because clause numbering moves between editions."
          },
          {
              "q": "What are the eligibility requirements for API 570 certification?",
              "a": "Education plus documented experience in the design, fabrication, repair, alteration or inspection of in-service piping, with the experience requirement falling as formal education rises: an engineering degree needs one year, a two-year technical degree two years, a high-school diploma three years, and no formal qualification five years. Experience must be attested by an employer, not self-declared, and weak documentation delays more applications than the exam fails."
          },
          {
              "q": "How long is the API 570 exam and what is the pass mark?",
              "a": "About 7.5 hours in a single Pearson VUE sitting, split into a closed-book portion on inspection practices, repair, alteration, rerating and pressure testing, and a longer open-book portion examined against the published reference set. The pass mark is 70%. The open-book half is a navigation test under time pressure, not a reading test — locating the governing clause fast is a drilled skill."
          },
          {
              "q": "Do I need API 510 before taking API 570?",
              "a": "No. API 570 has no certification prerequisite and is independently eligible on its own education-and-experience criteria. Most working piping inspectors eventually stack API 570 with API 510 for pressure vessels and API 653 for storage tanks, because client specifications frequently name a combination rather than a single credential. The efficient order is whichever certification your current work is already generating documented experience toward."
          },
          {
              "q": "How often do I have to recertify API 570?",
              "a": "Every three years. Recertification requirements and any waiting period after a failed attempt are set by API and published in its ICP candidate documentation, so verify against the current publication rather than a remembered figure. Practically, a lapse costs more than the renewal: a candidate who misses the window re-sits in a later examination cycle, which means losing months of assignable scope, not weeks."
          },
          {
              "q": "Can an ASNT Level III replace an API 570 inspector on a piping scope?",
              "a": "No, and the two are not interchangeable. An ASNT Level III holds technical authority over the NDT — writing and approving the UT procedure and qualifying the technicians who run it — which API certification does not confer. The inspection decision, meaning interval determination, fitness assessment and return-to-service sign-off, sits with the API-certified inspector under the governing code. Clean contracts name both roles separately."
          }
      ]
  },

  "/api-653-certification": {
      "answer": "API 653 certifies the aboveground storage tank inspector: the person who evaluates tank bottoms, shell courses, roofs and foundations, calculates minimum required thickness and remaining life, and approves repairs, alterations and reconstruction. The examination is a single Pearson VUE sitting of about 7.5 hours with closed-book and open-book portions, and eligibility is education plus documented AST inspection experience.",
      "expansion": "API 653 is examined against a wider reference set than the other API inspector certifications, because a tank inspector must be fluent in new-construction acceptance criteria as well as in-service evaluation. The open-book portion covers API 653 itself, API 650 as the construction code, API RP 575 for in-service inspection practice, API RP 651 for cathodic protection, API RP 652 for internal lining, API RP 571 for damage mechanisms, API 579-1/ASME FFS-1, and ASME Section V and Section IX. Major repair and reconstruction scope effectively imposes API 650 weld, plate and nozzle requirements on field work, which is why candidates who treat new construction as out of scope fail. The marks concentrate in minimum shell thickness by course including the one-foot method, corrosion rate and remaining life, floor evaluation and MFL interpretation, settlement acceptance under Annex B, and hydrostatic testing after repair.",
      "source": "API 653, Tank Inspection, Repair, Alteration, and Reconstruction — Section 4 (suitability for service), Section 6 (inspection) and Annex B (settlement); API 650 as the construction code and API RP 575, 651 and 652 as supporting practices",
      "table": {
          "caption": "API 653 inspection scope decomposed by tank component",
          "columns": [
              "Tank component",
              "Primary technique",
              "Dominant damage mechanism",
              "Governing reference",
              "Interval or trigger"
          ],
          "rows": [
              [
                  "Bottom plates",
                  "Magnetic flux leakage full-floor scanning, with UT verification of indications and vacuum-box testing on welds",
                  "Soil-side (underside) corrosion, microbiologically influenced corrosion, under-deposit pitting",
                  "API 653 Section 6; API RP 575",
                  "At internal inspection — 20 years maximum, shorter wherever the corrosion rate demands"
              ],
              [
                  "Shell courses",
                  "UT thickness on a grid, densest on the bottom course where hydrostatic head is greatest",
                  "General and localised metal loss",
                  "API 653 Section 4 for minimum thickness; API 650 for construction",
                  "External inspection at 5 years maximum, less on corrosive service"
              ],
              [
                  "Fixed cone roof",
                  "Visual inspection plus UT at the roof-to-shell junction",
                  "Vapour-space corrosion concentrated in the annular junction zone",
                  "API 653 Section 6",
                  "With each external and internal inspection"
              ],
              [
                  "Floating roof",
                  "Pontoon and deck UT, seal-gap measurement, roof-leg landing inspection",
                  "Pontoon leakage, seal-gap loss, deck dish",
                  "API 650 Annex H with API 653",
                  "Seal-gap surveys on the client-specified frequency, commonly quarterly on regulated service"
              ],
              [
                  "Foundation and settlement",
                  "Optical level or laser survey at a minimum of eight equidistant points around the shell, least-squares plane fit",
                  "Planar tilt, dish, edge settlement and differential settlement",
                  "API 653 Annex B",
                  "Each external and internal inspection; annually on environmentally sensitive service"
              ],
              [
                  "Cathodic protection",
                  "Instant-off polarised potential survey, not native-on potential",
                  "Continuing soil-side corrosion despite apparent paper compliance",
                  "API RP 651; NACE SP0169",
                  "Annual survey"
              ]
          ],
          "note": "Remaining life uses the higher of the short-term and long-term corrosion rate. A programme holding only top-side thickness data systematically over-states bottom remaining life, because underside attack is invisible and under-reported."
      },
      "facets": [
          {
              "q": "What are the API 653 inspection intervals for an aboveground storage tank?",
              "a": "External inspection by a certified inspector runs at five years maximum and internal inspection at twenty years maximum for non-corrosive service, with both shortened whenever the calculated corrosion rate and remaining life demand it. Owner personnel perform routine in-service walk-arounds far more frequently between formal inspections. A risk-based inspection assessment under API 580/581 can extend intervals with owner-user engineer approval."
          },
          {
              "q": "What is the API 653 body of knowledge for 2026?",
              "a": "API publishes a body of knowledge per examination cycle naming every examined publication and the exact edition and addenda in force. For API 653 that set spans API 653, API 650, API RP 575, API RP 651, API RP 652, API RP 571, API 579-1/ASME FFS-1, and ASME Section V and Section IX. Confirm the current cycle's list before purchasing references."
          },
          {
              "q": "Can I get API 653 certified without a degree?",
              "a": "Yes. API eligibility is education and experience in combination, so less formal education is offset by proportionally more documented inspection experience — a candidate with substantial tank field time qualifies without a degree, and welders, NDT technicians and maintenance craft moving into inspection is a well-trodden route. The real obstacles are documenting that experience in the form the application requires, and code-navigation discipline under exam time pressure."
          },
          {
              "q": "Why is MFL used on tank bottoms instead of UT?",
              "a": "Coverage. A tank floor is thousands of square feet and the corrosion that matters is on the soil side, where it is invisible from above. Magnetic flux leakage scanners cover the full floor quickly and flag metal loss from either surface; UT is then used to verify and size the indications MFL finds. Vacuum-box testing checks weld tightness separately. Roughly the majority of bottom failures originate from underside attack."
          },
          {
              "q": "What does API 653 Annex B require for a settlement survey?",
              "a": "Elevation measurements at a minimum of eight equidistant points around the shell circumference, more on large-diameter tanks, taken with a calibrated optical level or laser instrument. A least-squares plane fitted to those points separates rigid-body planar tilt from the deviation components — dish and edge settlement. Annex B sets separate acceptance criteria for each, with edge settlement the most restrictive; exceedance escalates to a fitness-for-service assessment."
          },
          {
              "q": "How often must API 653 certification be renewed?",
              "a": "Every three years. Renewal requirements, waiting periods after a failed attempt, and any limit on attempts are set by API and published in its ICP candidate documentation, which changes periodically — check the current publication rather than relying on a remembered figure. Renewal dates belong in the same system that blocks dispatch on any other expired qualification, because lapses are a routine and entirely avoidable audit finding."
          }
      ]
  },

  "/blog/ut-level-2-practice-questions": {
      "answer": "Four calculations decide most UT Level II written questions: wavelength (λ = c/f), near-field length (N = D²/4λ), refracted angle by Snell's law, and skip distance (2T tan θ). In carbon steel at 5,900 m/s longitudinal, a 5 MHz probe gives λ = 1.18 mm; a 10 mm crystal then gives a 21.2 mm near field.",
      "expansion": "UT Level II candidates lose marks on arithmetic, not theory. Sound velocity in carbon steel is taken as 5,900 m/s longitudinal and 3,240 m/s shear; in aluminium 6,320 and 3,130 m/s; in acrylic wedge material 2,730 m/s. From those three numbers every standard exam calculation follows. Snell's law, sin θ₁/c₁ = sin θ₂/c₂, converts a wedge incident angle into a refracted shear angle: 36.6° in acrylic produces a 45° shear beam in steel. The same equation gives the first critical angle, 27.6°, and the second, 57.4°, which bound the range in which a pure shear wave exists. Skip distance on a 25 mm plate with a 60° probe is 2 × 25 × tan 60° = 86.6 mm, with a 100 mm sound path. Amplitude comparisons use dB = 20 log₁₀(A₁/A₂), so 80% screen height against 20% is exactly 12 dB.",
      "source": "ASTM E494 (measuring ultrasonic velocity in materials) and ASME Boiler and Pressure Vessel Code, Section V, Article 4; personnel qualification per ASNT SNT-TC-1A (2024 edition).",
      "table": {
          "caption": "Worked UT Level II calculations — carbon steel at 5,900 m/s longitudinal, 3,240 m/s shear",
          "columns": [
              "Calculation",
              "Formula",
              "Worked example",
              "Answer",
              "Where it appears"
          ],
          "rows": [
              [
                  "Wavelength",
                  "λ = c / f",
                  "5 MHz longitudinal in steel: 5,900 ÷ 5,000,000",
                  "1.18 mm",
                  "Beam characteristics, resolution"
              ],
              [
                  "Near-field length",
                  "N = D² / 4λ",
                  "10 mm crystal, λ = 1.18 mm: 100 ÷ 4.72",
                  "21.2 mm",
                  "Probe selection, focal depth"
              ],
              [
                  "Beam spread (−6 dB half-angle)",
                  "sin θ = 0.56 λ / D",
                  "0.56 × 1.18 ÷ 10 = 0.066",
                  "3.8°",
                  "Coverage and scan overlap"
              ],
              [
                  "Refracted angle",
                  "sin θ₁ / c₁ = sin θ₂ / c₂",
                  "36.6° in acrylic (2,730 m/s) into steel shear (3,240 m/s)",
                  "45.0° shear",
                  "Angle-beam setup"
              ],
              [
                  "First / second critical angle",
                  "θ = arcsin(c_wedge / c_steel)",
                  "2,730 ÷ 5,900, then 2,730 ÷ 3,240",
                  "27.6° / 57.4°",
                  "Mode conversion"
              ],
              [
                  "Skip distance",
                  "S = 2T tan θ",
                  "25 mm plate, 60° probe: 2 × 25 × 1.732",
                  "86.6 mm surface, 100 mm sound path",
                  "Weld scanning plan"
              ],
              [
                  "Amplitude difference",
                  "dB = 20 log₁₀(A₁ / A₂)",
                  "80% FSH against 20% FSH: 20 log₁₀ 4",
                  "12.0 dB",
                  "DAC, transfer correction"
              ],
              [
                  "Thickness from time of flight",
                  "t = c × TOF / 2",
                  "8.47 µs in steel: 5,900 × 8.47 × 10⁻⁶ ÷ 2",
                  "25.0 mm",
                  "Thickness gauging"
              ]
          ],
          "note": "DAC construction uses the same amplitude arithmetic. Peak the response from the side-drilled holes at 1/4T, 1/2T and 3/4T in the ASME Section V, Article 4 basic calibration block, record the gain, join the peaks, then place the recording and evaluation levels at the fixed dB offsets below that curve required by the referencing construction code."
      },
      "facets": [
          {
              "q": "How do you calculate near-field length in ultrasonic testing?",
              "a": "Near-field length N = D² / 4λ, where D is the crystal diameter and λ the wavelength. A 10 mm diameter 5 MHz probe in carbon steel has λ = 5,900 ÷ 5,000,000 = 1.18 mm, so N = 100 ÷ 4.72 = 21.2 mm. Amplitude readings taken inside that 21.2 mm are unreliable because the beam has not yet formed a single lobe."
          },
          {
              "q": "What incident angle in an acrylic wedge gives a 45 degree shear wave in steel?",
              "a": "36.6 degrees. Snell's law gives sin θ₁ / c₁ = sin θ₂ / c₂. With acrylic wedge velocity 2,730 m/s and shear velocity in carbon steel 3,240 m/s, sin θ₁ = 2,730 × sin 45° ÷ 3,240 = 0.596, so θ₁ = 36.6°. Wedge wear shifts the actual refracted angle, which is why angle verification on a calibration block precedes every examination."
          },
          {
              "q": "How do you construct a DAC curve?",
              "a": "Peak the response from each side-drilled hole in the basic calibration block — placed at 1/4T, 1/2T and 3/4T of the examination thickness under ASME Section V, Article 4 — set the shallowest to a chosen screen height, record that gain, then plot each subsequent peak at the same gain and join them. Recording and evaluation levels sit at fixed dB offsets below the curve, set by the referencing construction code."
          },
          {
              "q": "What are the first and second critical angles for a steel component?",
              "a": "27.6 degrees and 57.4 degrees for an acrylic wedge on carbon steel. The first is arcsin(2,730 ÷ 5,900), where the longitudinal wave refracts to 90° and only shear remains. The second is arcsin(2,730 ÷ 3,240), where the shear wave also reaches 90° and a surface wave forms. Standard 45, 60 and 70 degree shear probes exist because their incident angles fall between those two limits."
          },
          {
              "q": "How do you calculate skip distance for angle-beam weld inspection?",
              "a": "Full skip distance S = 2T tan θ. On a 25 mm plate with a 60 degree probe, S = 2 × 25 × 1.732 = 86.6 mm of surface travel, and the sound path is 2T ÷ cos θ = 100 mm. Half skip is 43.3 mm surface travel and 50 mm sound path. Those two numbers set the width of the scanning band on each side of the weld cap."
          },
          {
              "q": "Does a higher frequency probe detect smaller flaws?",
              "a": "Yes, up to the point attenuation stops it. Wavelength falls as frequency rises — 1.18 mm at 5 MHz in steel, 0.59 mm at 10 MHz — and detectability scales with wavelength, so resolution improves. Scatter from grain structure rises with frequency too, which is why coarse-grained castings and austenitic welds are examined at 1 to 2.25 MHz despite the resolution penalty."
          }
      ]
  },

  "/glossary/phased-array-ultrasonic-testing-paut": {
      "answer": "PAUT uses a 16-to-256-element probe with electronically calculated delay laws to steer and focus one beam through a range of angles from a fixed probe position. In US practice it is qualified under ASME Section V, Article 4, and accepted against the referencing construction code — ASME Section VIII, ASME B31.3 or AWS D1.1 — never against Article 4 itself.",
      "expansion": "Choosing phased array is a coverage-and-record decision, not an image-quality one. On a thick-section girth weld a 5 MHz 64-element linear array on a shear wedge sweeps roughly 40 to 70 degrees from one position, replacing three or four fixed-angle conventional probes and producing an encoded record that can be re-examined months later. Below about 8 mm wall the sectorial scan runs out of usable metal path, and higher-frequency arrays or TOFD do better. Austenitic and dissimilar-metal welds scatter and skew the beam, which is why dual-matrix transmit-receive longitudinal probes at 1.5 to 2.25 MHz exist. Corrosion mapping uses a 0-degree linear array with an encoder rather than a sector scan. The failure mode in every case is identical: the sectorial image is a reconstruction from the programmed focal laws, so a wrong wedge delay or velocity produces a plausible, confidently wrong picture.",
      "source": "ASME Boiler and Pressure Vessel Code, Section V, Article 4 with its phased-array appendices; ISO 13588 (ultrasonic testing of welds, phased array), with acceptance to ISO 19285 or the referencing construction code.",
      "table": {
          "caption": "PAUT configuration by inspection task — what to set up, and what it will not solve",
          "columns": [
              "Inspection task",
              "Typical array and wedge",
              "What the setup resolves",
              "Main limitation",
              "Governing standard"
          ],
          "rows": [
              [
                  "Thick-section girth weld, above 12 mm",
                  "5 MHz, 64 elements, shear wedge sweeping about 40–70°",
                  "Lack of fusion and lack of penetration located in the weld cross-section",
                  "Root and cap geometry echoes mimic flaws until the operator learns the profile",
                  "ASME Section V, Article 4 / ISO 13588"
              ],
              [
                  "Thin-wall weld, below 8 mm",
                  "7.5–10 MHz, small aperture — or TOFD in place of PAUT",
                  "Near-surface resolution and fewer skips in short metal path",
                  "Dead zone and wedge delay consume the usable sector range",
                  "ISO 13588 thickness limits"
              ],
              [
                  "Austenitic or dissimilar-metal weld",
                  "1.5–2.25 MHz dual-matrix transmit-receive longitudinal (TRL)",
                  "Penetration through coarse, anisotropic, columnar grain",
                  "Beam skew displaces the indication from where the focal law places it",
                  "ASME Section V, Article 4 demonstration on a representative mock-up"
              ],
              [
                  "Corrosion mapping, plate and vessel",
                  "5 MHz 64-element linear array at 0°, encoded raster",
                  "Remaining-thickness C-scan with a positional record for repeat surveys",
                  "Pitting narrower than the element pitch is under-read",
                  "ASME Section V, Article 4; API 653 for tank floors and shells"
              ],
              [
                  "T-K-Y and nodal joints",
                  "Sectorial scan with curved-surface wedge, multiple probe positions",
                  "Coverage of a variable bevel without reindexing several conventional probes",
                  "Coupling on compound curvature; wedge contact varies with position",
                  "AWS D1.1 Annex K"
              ],
              [
                  "Height sizing of a known flaw",
                  "PAUT sector plus TOFD, or TFM from full matrix capture",
                  "Tip-diffraction height instead of an amplitude-derived estimate",
                  "Requires a separate sizing procedure and its own demonstration",
                  "ISO 19285 / referencing construction code"
              ]
          ],
          "note": "Acceptance criteria never come from ASME Section V, Article 4, which is a technique document. They come from the referencing construction code — the ultrasonic acceptance appendix of ASME Section VIII, ASME B31.3, AWS D1.1, or ISO 19285 on the ISO route."
      },
      "facets": [
          {
              "q": "When should you use PAUT instead of conventional ultrasonic testing?",
              "a": "When coverage, geometry or the permanent record matters. One phased-array probe sweeping 40 to 70 degrees from a fixed position replaces three or four conventional angle probes, and with an encoder it produces data that can be re-examined after the crew has left site. For a straightforward remaining-thickness check on plate, conventional ultrasonic testing is faster and no less valid."
          },
          {
              "q": "Can PAUT replace radiography on pressure welds?",
              "a": "Several construction codes now permit ultrasonic examination, including phased array, as an alternative to radiography on thick-section welds, and it detects planar flaws such as lack of fusion that film can miss. The substitution has to be agreed in the referencing code and the purchase specification before the work starts, because the record produced is not film-equivalent."
          },
          {
              "q": "What thickness range is PAUT suitable for?",
              "a": "Phased array is strongest above roughly 12 mm wall, where a sectorial sweep has enough metal path to develop distinct angles. Between 8 and 12 mm it works with a higher-frequency, smaller aperture. Below about 8 mm the dead zone and wedge delay consume the useful range, and TOFD or a dedicated thin-wall technique gives better near-surface resolution."
          },
          {
              "q": "Why is PAUT difficult on austenitic stainless steel welds?",
              "a": "Austenitic weld metal solidifies into large columnar anisotropic grains that scatter, attenuate and skew the beam, so the reflector is not where the focal law places it. The working answer is a low-frequency dual-matrix transmit-receive longitudinal probe at 1.5 to 2.25 MHz, plus procedure demonstration on a mock-up of the same material, thickness and welding process."
          },
          {
              "q": "What certification does a PAUT technician need in the US?",
              "a": "UT Level II under the employer's written practice, with phased array recorded as a documented scope or endorsement on that certificate, because ASNT SNT-TC-1A treats phased array as a technique within the ultrasonic method rather than a separate method. Many owner specifications add a practical performance demonstration on representative welds before a technician is approved for their work."
          },
          {
              "q": "What is the difference between PAUT and TFM?",
              "a": "PAUT fires a programmed focal law and displays the returning A-scans as a sector or linear image, focused at one depth at a time. TFM post-processes a full matrix capture — every element transmitting in turn while all elements receive — to synthesise a focus at every pixel in the region of interest, giving higher resolution at the cost of acquisition speed and file size."
          }
      ]
  },

  "/training-usa": {
      "answer": "In the United States, NDT certification is issued by the employer, not by a training school. ASNT SNT-TC-1A is a recommended practice the employer adopts into a written practice; the training provider supplies classroom and practical hours, and an NDT Level III administers the general, specific and practical examinations under that written practice.",
      "expansion": "An employer-sponsored NDT programme in the US has four moving parts a course catalogue never shows. First, the written practice: the employer's own controlled document stating training hours, experience hours and examination rules per method and level, for which SNT-TC-1A only supplies recommended defaults. Second, training hours — SNT-TC-1A recommends 40 hours for ultrasonic Level I and a further 40 for Level II, but only 4 then 8 for liquid penetrant, so a five-method crew is not five equal weeks. Third, examination: general, specific and practical papers, with a composite pass of 80 percent and no individual part below 70. Fourth, maintenance: annual near-vision acuity to Jaeger Number 1 at not less than 12 inches, an annual colour-contrast check, and recertification at intervals not exceeding five years. Miss the fourth and an otherwise valid certificate fails a client audit.",
      "source": "ASNT SNT-TC-1A (2024 edition), Recommended Practice No. SNT-TC-1A, Personnel Qualification and Certification in Nondestructive Testing; ANSI/ASNT CP-189 where a national standard is required; ISO 9712 for the third-party route.",
      "table": {
          "caption": "Who is responsible for each step of a US employer-sponsored NDT certification",
          "columns": [
              "Step",
              "Responsible party",
              "Document produced",
              "Basis"
          ],
          "rows": [
              [
                  "Written practice",
                  "Employer, approved by its NDT Level III",
                  "Revision-controlled Written Practice covering every method and level used",
                  "ASNT SNT-TC-1A"
              ],
              [
                  "Classroom and practical training",
                  "Training provider, in-house or contracted",
                  "Attendance and hours record, per method and per level",
                  "SNT-TC-1A recommended training hours"
              ],
              [
                  "Experience hours",
                  "Employer",
                  "Signed on-the-job hours log, per method",
                  "The employer's own written practice"
              ],
              [
                  "General and specific examinations",
                  "Employer's NDT Level III",
                  "Graded papers: composite 80 percent, no part below 70",
                  "ASNT SNT-TC-1A"
              ],
              [
                  "Practical examination",
                  "Employer's NDT Level III or a designated examiner",
                  "Practical grading sheet, on specimens representative of the work",
                  "ASNT SNT-TC-1A"
              ],
              [
                  "Certification issue",
                  "Employer only",
                  "Certificate signed by the employer's NDT Level III",
                  "SNT-TC-1A employer-based certification"
              ],
              [
                  "Vision test and recertification",
                  "Employer",
                  "Annual vision record; recertification at intervals not exceeding five years",
                  "ASNT SNT-TC-1A"
              ]
          ],
          "note": "No training provider can issue SNT-TC-1A certification and no course confers it. ASNT's own central examination programmes and ISO 9712 through an accredited certification body are separate, third-party routes whose certificates travel with the individual between employers."
      },
      "facets": [
          {
              "q": "Can a training company certify my technicians to ASNT Level II?",
              "a": "No. Under ASNT SNT-TC-1A the employer certifies its own personnel against its written practice, and the certificate is signed by the employer's NDT Level III. A training provider supplies the classroom and practical hours and can administer examinations on the employer's behalf, but it cannot issue the certification. ISO 9712 and ASNT's central programmes are the separate third-party routes."
          },
          {
              "q": "How many hours of training does each NDT method require?",
              "a": "SNT-TC-1A's recommended minimums differ sharply by method. Ultrasonic, radiographic and eddy current testing are 40 hours at Level I and another 40 at Level II. Magnetic particle is 12 then 8, liquid penetrant 4 then 8, visual testing 8 then 16. The employer's written practice may raise any of these, and it is the written practice that binds at audit."
          },
          {
              "q": "What is a written practice and who has to write it?",
              "a": "The written practice is the employer's own controlled document setting out how its NDT personnel are trained, examined, certified and recertified, method by method and level by level. The employer owns it and its NDT Level III approves it. SNT-TC-1A supplies recommended values; the written practice states the values the employer will actually be audited against."
          },
          {
              "q": "How long is an ASNT Level II certification valid?",
              "a": "SNT-TC-1A recommends recertification at intervals not exceeding five years, with annual near-vision acuity to Jaeger Number 1 at not less than 12 inches and an annual colour-contrast check in between. ISO 9712 certificates run five years, renewed on evidence of continued activity and vision, with re-examination at ten years. API inspector certifications run on a three-year cycle."
          },
          {
              "q": "Should a US employer use SNT-TC-1A, CP-189 or ISO 9712?",
              "a": "SNT-TC-1A is a recommended practice the employer tailors, which is why most US inspection contractors build on it. ANSI/ASNT CP-189 is a national standard with mandatory requirements and no tailoring, chosen when a client or a nuclear specification demands it. ISO 9712 is third-party and travels with the individual, which matters for international work and cross-border crewing."
          },
          {
              "q": "How do you train a crew without shutting down operations?",
              "a": "Deliver on site and split the cohort. Theory runs online or in a room at the facility around the shift pattern, and the practical block is scheduled so half the crew stays on the tools. Using specimens that match the geometry and material the technicians actually examine shortens the practical too, because competence transfers directly rather than through generic coupons."
          }
      ]
  },

  "/ndt-training-near-me": {
      "answer": "NDT training in the US is delivered three ways: on site at the employer's own facility anywhere in the country, at an arranged venue in a metro area, and blended — theory online with the practical in person. Only the supervised practical hours and the practical examination require physical presence, and that is the smaller share of the programme.",
      "expansion": "Distance is the wrong variable for a crew. The cost of travel-based NDT training is not airfare; it is several technicians off the tools at once, which is why on-site delivery at the employer's facility becomes the default above roughly four candidates. On site also lets the practical run on specimens representative of the equipment the crew actually examines rather than generic coupons, and lets the schedule follow the shift pattern. For a single candidate geography matters more, but less than the search implies: the theory portion transfers to online delivery, while the supervised practical hours and the practical examination do not. The constraint nobody advertises is that under ASNT SNT-TC-1A the certificate is issued by an employer under its written practice, not by whichever school is nearest — so the useful question is which provider satisfies that written practice, not which one is closest.",
      "source": "ASNT SNT-TC-1A (2024 edition) for recommended training hours and employer-based certification; ISO 9712 for the third-party route where a portable certificate is required.",
      "table": {
          "caption": "NDT training delivery models in the US — what each one actually solves",
          "columns": [
              "Delivery model",
              "What is delivered",
              "What still requires physical presence",
              "Best fit",
              "Limitation"
          ],
          "rows": [
              [
                  "On site at the employer",
                  "Full theory and practical at the client facility, nationwide",
                  "All of it — but at your site, with zero candidate travel",
                  "Crews of four or more; continuous shift operations",
                  "Needs a room, instrument access and representative specimens on site"
              ],
              [
                  "Arranged venue cohort",
                  "Scheduled classroom plus practical in a metro area",
                  "The whole programme; every candidate travels",
                  "Small numbers from several employers at once",
                  "Fixed dates, plus travel and lost production for every attendee"
              ],
              [
                  "Blended — online theory, in-person practical",
                  "Self-paced theory online, practical condensed into one block",
                  "The practical hours and the practical examination only",
                  "Individuals and shift workers",
                  "The practical block still has to be scheduled and hosted somewhere"
              ],
              [
                  "Online theory only",
                  "Classroom hours and examination preparation",
                  "Nothing — but no practical hours are earned",
                  "Refreshers and written-examination preparation",
                  "Cannot satisfy the practical requirement of a written practice on its own"
              ],
              [
                  "Employer's own in-house programme",
                  "Everything, run under the employer's own NDT Level III",
                  "On site by definition",
                  "Large inspection contractors with standing training capability",
                  "Requires a qualified Level III, controlled specimens and audit records"
              ]
          ],
          "note": "None of these is a local-search question. Atlantis does not run walk-in training centres: corporate programmes are delivered on site across the United States and Canada, and individuals are served through scheduled cohorts and blended delivery. Where a local provider is genuinely the better answer for one candidate, that is the honest answer."
      },
      "facets": [
          {
              "q": "Is there NDT training near me if there is no school in my state?",
              "a": "Yes. On-site delivery removes geography entirely — the instructor and equipment travel to the employer's facility anywhere in the United States, and the practical runs on specimens representative of what that crew inspects. For an individual, blended delivery puts the theory online and concentrates the in-person requirement into a single practical block that can be scheduled around shift work."
          },
          {
              "q": "Can I get NDT certified entirely online?",
              "a": "No. The classroom hours can be delivered online, and for many candidates that is most of the programme, but the supervised practical hours and the practical examination require physical presence with the instrument and representative specimens. An online-only course satisfies the training-hours element of an employer's written practice and nothing else in it."
          },
          {
              "q": "How many technicians make on-site training worthwhile?",
              "a": "Around four. Below that, sending people to a scheduled cohort usually costs less than mobilising a programme. At four or more the arithmetic reverses, because the dominant cost is not airfare but several technicians off the tools simultaneously — and on-site delivery lets the schedule bend around the shift pattern instead of the other way round."
          },
          {
              "q": "Does a training certificate make me ASNT Level II certified?",
              "a": "No. A course completion certificate records training hours. Under ASNT SNT-TC-1A the Level II certification is issued by an employer, under its written practice, after documented experience hours and general, specific and practical examinations administered under a Level III. Candidates who grasp this early look for an employer with a certification pathway rather than a school promising a certificate."
          },
          {
              "q": "How long does an on-site NDT training programme take?",
              "a": "SNT-TC-1A recommends 40 hours for ultrasonic Level I and a further 40 for Level II, so a single ultrasonic level is roughly a working week. Magnetic particle at 12 then 8 hours and liquid penetrant at 4 then 8 are far shorter, and are commonly combined with visual testing into a single week on site."
          },
          {
              "q": "What should I ask a training provider before booking?",
              "a": "Five questions. Which methods and levels are covered, and who teaches — a practising Level III or a career instructor? How many of the hours are genuine supervised practical, and on what specimens? Does the programme map to my employer's written practice hour requirements, in writing? What happens after a failed practical? Will you deliver at my site?"
          }
      ]
  },

  "/best-ndt-reporting-software-2026": {
      "answer": "Four criteria decide the best NDT reporting software for a US inspection company: ASME Section V-aligned templates for every method you run, verified offline field capture, technician certification enforced at the moment of signature, and structured indication output that feeds API 579 fitness-for-service without re-keying. Feature counts, dashboards and AI claims are secondary to those four.",
      "expansion": "NDT reporting software generates the formal examination record for ultrasonic, radiographic, magnetic particle, penetrant, visual, eddy current, phased array and TOFD inspections, and carries the metadata that makes that record defensible: inspector identity and certification level, instrument serial number, calibration block ID and calibration date, technique parameters, and the acceptance-criteria clause applied. The 2026 market splits into four classes. Acquisition and analysis software from instrument makers (Evident/Olympus, Zetec, Eddyfi, Waygate) is strong on scan data and weak on multi-method reporting. Standalone NDT reporting applications cover the methods but sit apart from dispatch, certification and invoicing. Generic form builders support everything nominally and nothing natively. Integrated NDT ERP-plus-reporting stacks inherit job, client, asset and technician data from one database and hand structured indications onward to risk-based inspection and fitness-for-service work. No vendor in this category publishes a head-to-head comparison, so buyers should score candidates themselves against their own methods and codes.",
      "source": "ASME Boiler & Pressure Vessel Code, Section V (Nondestructive Examination) — Article 2 (RT), Article 4 (UT), Article 6 (PT), Article 7 (MT), Article 8 (ET), Article 9 (VT); ASNT SNT-TC-1A (2024 edition) for personnel qualification; ASTM E2339 (DICONDE) for digital NDE image data.",
      "table": {
          "id": "ndt-reporting-software-classes-2026",
          "caption": "NDT reporting software by product class — capability profile, 2026",
          "columns": [
              "Product class",
              "Representative products",
              "Method report templates",
              "Offline field capture",
              "Certification-aware sign-off",
              "Integrity / ERP handoff"
          ],
          "rows": [
              [
                  "Instrument analysis software",
                  "Evident (Olympus) WeldSight, Zetec UltraVision, Eddyfi Capture / Magnifi",
                  "Single-method: PAUT, TOFD or ECT",
                  "Runs on the instrument or a laptop; not a field sync architecture",
                  "No — holds no personnel records",
                  "Scan files and screenshots, not structured indications"
              ],
              [
                  "Standalone NDT reporting apps",
                  "Floodlight, IntelliSPEC (Sonomatic)",
                  "Multi-method UT, RT, MT, PT, VT",
                  "Yes in current products",
                  "Bolt-on or absent",
                  "API available; no shared job, client or equipment master"
              ],
              [
                  "Generic form builders",
                  "Configurable eForm and mobile-forms platforms",
                  "You build and maintain every template",
                  "Yes",
                  "No",
                  "Flat exports to spreadsheet or PDF"
              ],
              [
                  "CMMS / EAM with attached report",
                  "IBM Maximo, SAP Plant Maintenance",
                  "Report arrives as an attached PDF document",
                  "Via the EAM mobile client",
                  "Separate HR qualification module",
                  "Native asset linkage; no indication trending across campaigns"
              ],
              [
                  "Word / Excel plus shared drive",
                  "The incumbent process at most small contractors",
                  "Per-inspector format drift",
                  "Paper in the field, retyped later",
                  "Manual spreadsheet expiry tracking",
                  "None"
              ],
              [
                  "Integrated NDT ERP + reporting",
                  "Atlantis NDT Reporting + Atlantis ERP",
                  "ASME Section V Articles 2, 4, 6, 7, 8 and 9 templates, customisable",
                  "iOS and Android offline capture with bidirectional sync",
                  "Enforced at signature against SNT-TC-1A, CP-189 or ISO 9712 currency",
                  "Structured API 579 input bundle plus digital twin overlay"
              ]
          ],
          "note": "No vendor in this category publishes a head-to-head comparison table, so classes are compared on design intent rather than marketing claims. Verify every cell against the current release during your own trial, with airplane mode on."
      },
      "facets": [
          {
              "q": "Can AI finalise an NDT report without a Level III signature?",
              "a": "No. AI defect detection on phased array C-scans and digital radiographs compresses review time, but every flag routes to ASNT Level III adjudication before the report is issued. Qualification schemes — SNT-TC-1A, CP-189 and ISO 9712 — place interpretation and acceptance authority with a certified person, not an algorithm. Treat any vendor claiming fully automated sign-off as disqualified."
          },
          {
              "q": "Does NDT reporting software need to work offline?",
              "a": "Yes. Reports are written where connectivity dies: tank farms, offshore decks, refinery units, vessel internals, basements. Cloud-only tools produce the familiar failure — technicians write on paper all day and retype at the hotel, doubling effort and inserting transcription errors. Offline capture must include photos, instrument data and cached procedures, with automatic bidirectional sync and conflict resolution at indication level."
          },
          {
              "q": "What is DICONDE and does my reporting software need it?",
              "a": "DICONDE is the vendor-neutral standard for storing nondestructive evaluation images together with their acquisition metadata, defined by ASTM E2339 and extended by method-specific companion practices. It keeps computed and digital radiographs readable after the acquisition system is replaced or the vendor changes. Any inspection company performing CR or DR should treat DICONDE export as a hard requirement, not a preference."
          },
          {
              "q": "What metadata must an ultrasonic thickness reading carry to be defensible?",
              "a": "Ten fields at minimum: inspector identity and certification level, instrument make and serial number, transducer type and frequency, couplant, calibration block identity, calibration date with traceability to NIST or an equivalent national institute, temperature compensation applied, thickness monitoring location identifier, the measured value, and the acceptance reference used. Free-text PDF reports cannot carry these as queryable fields."
          },
          {
              "q": "Should reporting software sit inside the ERP or stand alone?",
              "a": "Inside, if you want job, client, asset, equipment and technician data to arrive without retyping and invoices to trigger when reports are approved. Standalone reporting apps create an island: job numbers rekeyed from accounting, results locked away from integrity systems. The counter-argument is switching cost — a standalone tool is faster to trial and harder to grow into."
          },
          {
              "q": "How long does an NDT reporting software rollout take?",
              "a": "Four to eight weeks from kickoff to live for a single asset class, and twelve to sixteen weeks for a full enterprise rollout including SAP or Maximo integration. What extends timelines is rarely the software — it is data cleanliness, template sign-off, and deciding who owns which decision on the customer side. Agree those owners in week one."
          }
      ]
  },

  "/ndt-reporting-software-comparison": {
      "answer": "Five dimensions separate NDT reporting products in practice: template coverage per method and code, built-in certification currency, verified offline field capture, configurable review and sign-off with an audit trail, and integration depth with ERP and integrity systems. Score every shortlisted product 1-5 on each, weighted by what fails most often today — most often offline use and review workflow, not template count.",
      "expansion": "A useful NDT reporting software comparison tests behaviour, not feature lists. Template coverage means the product ships report formats carrying the fields each method requires — couplant, calibration block and reference reflector for ultrasonic; source, film or detector and IQI data for radiographic; focal law and encoder parameters for phased array — and still allows client-specific formats without vendor change requests. Certification currency means the system knows each technician's method, level, expiry and vision-exam date under SNT-TC-1A, CP-189 or ISO 9712 and blocks a lapsed signature. Offline capture must be verified in the demo with airplane mode on, because a cloud-only architecture cannot be configured away and silently doubles reporting labour. Review workflow means configurable Level II review and Level III approval chains with a revision-level audit trail of who changed what and which revision the client received. Integration decides whether readings become remaining-life trends or stay trapped in PDFs.",
      "source": "ISO/IEC 17025:2017, Clause 7.5 (technical records); ASNT SNT-TC-1A (2024 edition) and ANSI/ASNT CP-189 for personnel qualification and written practice; ASME Boiler & Pressure Vessel Code Section V for method-specific report content.",
      "table": {
          "id": "ndt-reporting-software-comparison-matrix",
          "caption": "The five dimensions that decide NDT reporting software — weak vs strong, and how to test each",
          "columns": [
              "Dimension",
              "Weak implementation",
              "Strong implementation",
              "How to verify in a 30-minute demo",
              "Cost of getting it wrong"
          ],
          "rows": [
              [
                  "Template coverage per method and code",
                  "Generic form builder; your Level III rebuilds every method",
                  "Code-aware templates for UT, RT, MT, PT, VT, ET, PAUT and TOFD, fully customisable",
                  "Hand them one of your real client templates and ask them to build it live",
                  "Level III hours burned on form maintenance instead of technical work"
              ],
              [
                  "Certification-aware sign-off",
                  "Certs tracked in a separate spreadsheet; nothing enforces currency",
                  "Method, level, expiry and vision-exam date held beside the report; lapsed signature refused",
                  "Try to sign a report as a technician whose certification you expire on the spot",
                  "Client audit finding: work signed by an unqualified or lapsed technician"
              ],
              [
                  "Offline field capture",
                  "Cloud-only, or a read-only cache that cannot create records",
                  "Full create-and-complete offline with photos, instrument data and automatic sync",
                  "Airplane mode on before the demo starts; complete a whole report, then resync",
                  "Paper-then-retype workflow; reporting labour doubles, transcription errors enter"
              ],
              [
                  "Review and sign-off workflow",
                  "PDFs emailed around; revisions tracked by filename",
                  "Configurable Level II review and Level III approval chains with a revision-level audit trail",
                  "Ask to see the audit trail of a corrected report, including which revision the client received",
                  "No defensible answer when a finding is disputed or a revision is challenged"
              ],
              [
                  "ERP and integrity integration",
                  "Standalone island; job numbers retyped, results locked in PDFs",
                  "Job, client, equipment and technician inherited from the ERP; indications flow to RBI and FFS",
                  "Ask where a thickness reading goes after approval, and show the remaining-life trend",
                  "Rekeying at both ends, and an API engineer re-extracting data for every FFS case"
              ],
              [
                  "Data export and exit",
                  "Vague answer; extraction quoted as a project",
                  "Complete, structured, self-service export including attachments and images",
                  "Ask for a sample export file of a finished job during the demo, not after",
                  "Your clients' inspection history and your liability defence held hostage"
              ]
          ],
          "note": "Weight the dimensions by what fails most often in your current process. Template gaps are configuration problems; a cloud-only architecture and an absent audit trail are architecture problems, and architecture does not get fixed after purchase."
      },
      "facets": [
          {
              "q": "What is the difference between NDT reporting software and an NDT ERP?",
              "a": "Reporting software produces the examination record. An NDT ERP holds the business around it — clients, quotes, jobs, dispatch, technician certifications, equipment calibration, procedure document control, invoicing — and populates the report header automatically. A reporting-only tool must be integrated with all of that or your team retypes job data every shift. An ERP without NDT-specific report templates fails the opposite way."
          },
          {
              "q": "How do I test offline mode during a software demo?",
              "a": "Put the device in airplane mode before the demo starts, then create a job, attach photos and instrument data, complete a full report and close the app. Restore connectivity and confirm the record syncs without loss or duplication. Vendors whose offline mode is a read-only cache or a single queued form will reveal it in under five minutes."
          },
          {
              "q": "Can reporting software stop a lapsed technician from signing a report?",
              "a": "Yes, when certification records live in the same system as the report. The system holds method, level, expiry, vision-exam date and the written-practice basis under SNT-TC-1A, CP-189 or ISO 9712, and refuses the signature once currency has lapsed. Where certification sits in a separate spreadsheet, nothing enforces it and client auditors find the gap first."
          },
          {
              "q": "Do generic form builders work for NDT reports?",
              "a": "They work for the first template and fail at the tenth. A generic builder has no concept of calibration blocks, focal laws, IQI sensitivity, technique sheets or code-clause acceptance, so your Level III rebuilds each method from scratch and maintains it forever. Nominal support for everything means native support for nothing — budget the Level III hours before choosing this route."
          },
          {
              "q": "What do client and accreditation auditors ask to see first?",
              "a": "Four things: that the person who performed the work was qualified in that method and level at the time, that the equipment was in calibration on that date, that the procedure revision followed was the one in force, and that all of it can be produced on request. The difference at audit is retrieving evidence versus reconstructing it."
          },
          {
              "q": "Can we get our data out if we leave the vendor?",
              "a": "Ask before signing, and treat a vague answer as an answer. Examination records are your clients' inspection history and your own liability defence, so the export must be complete, structured and self-service rather than a paid extraction project. Confirm the formats, whether attachments and images come with it, and how long access persists after termination."
          }
      ]
  },

  "/erp/ndt-inspection-software-comparison": {
      "answer": "Ten systems dominate NDT inspection software shortlists, and they resolve into three categories: NDT-native platforms built around the examination record, asset-owner EAM and CMMS suites (IBM Maximo, SAP Plant Maintenance, Oracle) built around the work order, and general project or form tools (Procore, form builders, spreadsheets). Contractors whose deliverable is the report need NDT-native; operators whose deliverable is uptime can run hybrid.",
      "expansion": "NDT inspection software plans the examination — which method, on which asset, on which date, by which technician, under which client procedure — captures the field result, produces the compliant report, and threads that report into the integrity decision: fitness-for-service, remaining life, risk-based inspection re-interval, nonconformance closeout. The category test is where the software's primary record lives. In an EAM such as IBM Maximo or SAP Plant Maintenance the primary record is the work order and the inspection report arrives as an attached document, so indications cannot be trended across campaigns. In construction and project tools the primary record is the task or checklist. In an NDT-native platform the primary record is the examination itself, with method, technique, instrument serial, calibration reference, inspector certification level and code-clause acceptance held as structured fields. Contractors, certification labs and integrity consultancies should shortlist on that test first, then on certification tracking, offline capture and export.",
      "source": "ASNT SNT-TC-1A (2024 edition) and ANSI/ASNT CP-189 for written practice and personnel records; ISO/IEC 17025:2017 for calibration traceability; API 580 and API 581 for risk-based inspection; API 579-1/ASME FFS-1 for fitness-for-service input data.",
      "table": {
          "id": "ndt-inspection-software-vendors-2026",
          "caption": "NDT inspection software vendors compared — where each system's primary record lives",
          "columns": [
              "System",
              "Category",
              "Built primarily for",
              "NDT method report library",
              "Personnel certification currency",
              "Where the inspection record lives"
          ],
          "rows": [
              [
                  "Atlantis NDT ERP",
                  "NDT-native ERP with integrated inspection module",
                  "NDT contractors, certification labs, asset-integrity consultancies",
                  "Native: UT, RT, MT, PT, VT, ET, PAUT, TOFD, LRUT, IRIS, MFL, ACFM",
                  "SNT-TC-1A, CP-189, ACCP, ISO 9712, PCN, CSWIP, AWS CWI, AMPP, API ICP",
                  "Structured examination record in the same database as jobs, invoices and calibration"
              ],
              [
                  "IBM Maximo",
                  "Asset-owner EAM",
                  "Refinery, plant and infrastructure owner-operators",
                  "None native; report attached as a document",
                  "Generic qualifications module",
                  "Work order history against the asset"
              ],
              [
                  "SAP Plant Maintenance (PM / EAM)",
                  "Maintenance embedded in the ERP",
                  "Enterprise asset owners already standardised on SAP",
                  "None native; notification and order structures",
                  "HR-module qualifications",
                  "SAP asset master and order history"
              ],
              [
                  "Oracle Fusion Cloud Maintenance",
                  "Asset-owner EAM",
                  "Enterprise asset owners on Oracle",
                  "None native",
                  "HCM-linked qualifications",
                  "Maintenance work order"
              ],
              [
                  "Procore",
                  "Construction project management",
                  "General contractors and capital projects",
                  "Inspection checklists, not NDE technique sheets",
                  "Not method- or level-aware",
                  "Project document register"
              ],
              [
                  "Pragma On Key",
                  "Asset management / EAM",
                  "Maintenance-led asset owners",
                  "Maintenance task definitions",
                  "Generic competency records",
                  "Asset register and job card"
              ],
              [
                  "Instrument analysis software (Evident WeldSight, Zetec UltraVision, Eddyfi Capture)",
                  "Acquisition and analysis",
                  "Level II and Level III analysts at the instrument",
                  "Single-method scan data only",
                  "None",
                  "Proprietary scan files"
              ],
              [
                  "Spreadsheets, QuickBooks and a SharePoint archive",
                  "The incumbent stack",
                  "Contractors under roughly 25 technicians",
                  "Per-project Word and Excel templates",
                  "Manual expiry spreadsheet",
                  "Files in folders; no trending, no query"
              ]
          ],
          "note": "The decisive question is not feature count but which record the system was designed around — the examination, the work order, or the task. Hybrid deployments are common: NDT-native capture at the contractor, bidirectional sync into the operator's SAP, Maximo or Oracle asset master."
      },
      "facets": [
          {
              "q": "Is IBM Maximo enough for an NDT inspection contractor?",
              "a": "For an owner-operator managing uptime, yes — Maximo's primary record is the work order and that matches the job. For a contractor whose deliverable is the inspection report, no: NDE technique data, code-clause acceptance and indication trending are not native, so reports arrive as attached documents. The workable pattern is NDT-native capture with bidirectional sync into the client's Maximo."
          },
          {
              "q": "Can NDT inspection software push records into a client's SAP or Maximo?",
              "a": "Yes, through bidirectional integration on the asset master and work order. The contractor keeps the structured examination record; the operator receives inspection results against their own asset hierarchy without manual rekeying. Agree the mapping early — asset identifiers, thickness monitoring location IDs and units are where these integrations fail, not the transport layer."
          },
          {
              "q": "Which certification schemes should an NDT inspection system track?",
              "a": "ASNT SNT-TC-1A and ANSI/ASNT CP-189 written practices, ASNT ACCP, ISO 9712, PCN and CSWIP for NDT personnel; AWS CWI for welding inspection; AMPP (formerly NACE) for coating inspection; and API individual certification programs 510, 570, 580, 653 and 1163 for in-service inspectors. Each carries its own expiry, vision-exam and continuing-activity rules."
          },
          {
              "q": "Do we need NDT software if we already run QuickBooks and a SharePoint archive?",
              "a": "That stack works until the point where one person can no longer hold the schedule in their head. The failure modes are consistent: certification expiries missed until a stop-work, report revisions ambiguous, bid packages assembled by hand, and no way to trend an indication across campaigns. The trigger is headcount growth and audit exposure, not software age."
          },
          {
              "q": "What measurable changes do contractors report after replacing spreadsheets?",
              "a": "Reported outcomes from anonymised deployments: inspection-report turnaround falling from 5.2 days to 1.4 days at a 120-technician Gulf Coast contractor; certification expiry alerts eliminating eleven stop-work events per quarter; bid response dropping from four days to under six hours; and compliance-pack assembly falling from six staff-days per scope to under eight hours."
          },
          {
              "q": "Which operator and supplier portals should the system feed?",
              "a": "For Gulf and international work: Saudi Aramco APQS qualification status, ADNOC Tejari vendor profile, Achilles for UK and European supply chains, and Avetta and ISNetworld for HSSE prequalification. The value is assembling bid and prequalification packages from structured records — certifications, procedures, calibration evidence — rather than rebuilding each submission by hand."
          }
      ]
  },

  "/consulting": {
      "answer": "No outside consultant can certify your technicians — under ASNT SNT-TC-1A, certification is employer-based. An outsourced ASNT Level III does everything up to that line: authors the Written Practice, prepares and grades general, specific and practical examinations, approves NDT procedures, and provides multi-method technical oversight. The employer signs the certificate and holds the record.",
      "expansion": "NDT consulting engagements fall into five recurring problems. The programme problem: an inspection function that grew job by job and now faces a client audit with no coherent Written Practice and procedures of mixed parentage. The authority problem: work requiring an ASNT Level III signature — procedure approval, personnel qualification — with no Level III on staff. The interval problem: equipment on default inspection intervals that risk-based inspection to API 580 and API 581 would rationalise in both directions. The verdict problem: a finding needing an engineering disposition through fitness-for-service to API 579-1/ASME FFS-1 rather than an automatic repair. The build problem: a new facility or contract needing inspection capability designed before day one. Scope every engagement from the artefact produced at the end — an audit-ready Written Practice, an approved procedure set, an RBI programme a regulator accepts, or an FFS assessment carrying a signed run-or-repair decision.",
      "source": "ASNT SNT-TC-1A (2024 edition) and ANSI/ASNT CP-189 for employer-based certification; ISO 9712 for third-party certification; API 580 and API 581 for risk-based inspection; API 579-1/ASME FFS-1 for fitness-for-service.",
      "table": {
          "id": "outsourced-level-iii-scope-limits",
          "caption": "What a contracted ASNT Level III can and cannot do — SNT-TC-1A versus ISO 9712",
          "columns": [
              "Activity",
              "Contracted outside Level III (SNT-TC-1A / CP-189)",
              "Third-party certification body (ISO 9712 / PCN / CSWIP)",
              "Who holds the record"
          ],
          "rows": [
              [
                  "Author the Written Practice",
                  "Yes — drafted for the employer to review and adopt",
                  "Not applicable; the scheme document takes its place",
                  "Employer"
              ],
              [
                  "Prepare and grade qualification examinations",
                  "Yes — general, specific and practical examinations",
                  "Body sets and administers its own central examinations",
                  "Employer / certification body"
              ],
              [
                  "Approve NDT procedures",
                  "Yes — acting as the employer's designated Level III",
                  "Outside the scope of the certification scheme",
                  "Employer"
              ],
              [
                  "Issue the certification itself",
                  "No — certification is an act of the employer and cannot be delegated",
                  "Yes — certificate issued to the individual, portable between employers",
                  "Employer / certification body"
              ],
              [
                  "Near-vision and colour-contrast examination",
                  "Specifies the requirement; the employer arranges and records the examination",
                  "Required by the scheme before examination",
                  "Employer / certification body"
              ],
              [
                  "Recertification decision and records retention",
                  "Advises and evaluates; cannot decide on the employer's behalf",
                  "Body manages renewal on its own published cycle",
                  "Employer / certification body"
              ]
          ],
          "note": "Under ASNT SNT-TC-1A certification is employer-based: the employer certifies its own personnel and cannot transfer that act to an agency, even when the agency performs all of the technical work. ISO 9712 inverts this — an accredited body certifies the individual, and the certificate travels with the person. This is the single most misunderstood boundary in Level III consulting."
      },
      "facets": [
          {
              "q": "Can we use an outside agency Level III instead of employing one?",
              "a": "Yes. SNT-TC-1A allows an employer to engage an outside agency ASNT Level III for the technical work — Written Practice authoring, examination preparation and grading, procedure approval and method oversight — provided the arrangement is documented in the employer's Written Practice. Responsibility for certifying personnel remains with the employer and does not transfer to the agency."
          },
          {
              "q": "What responsibilities stay with the employer when the Level III is outsourced?",
              "a": "The employer adopts and maintains the Written Practice, holds training and documented experience records, arranges near-vision and colour-contrast examinations, issues the certificate, decides recertification, and retains the records for audit. A consultant produces and signs the technical work; the employer's name is on the certification. Auditors ask the employer, not the consultant, to produce that evidence."
          },
          {
              "q": "How is ISO 9712 certification different from ASNT SNT-TC-1A?",
              "a": "SNT-TC-1A is a recommended practice for employer-based certification: the employer certifies its own personnel against its own Written Practice. ISO 9712 is third-party certification — an accredited certification body examines and certifies the individual, and the certificate travels with that person between employers. Many inspectors hold both: SNT-TC-1A for US work, ISO 9712 for international mobility."
          },
          {
              "q": "When is fitness-for-service to API 579 the right answer instead of repair?",
              "a": "When a finding sits within a known damage mechanism and the real question is run, repair or re-rate rather than automatic replacement. API 579-1/ASME FFS-1 covers general and localised metal loss, pitting, blisters and HIC/SOHIC, crack-like flaws, creep and fire damage at Levels 1, 2 and 3. It needs the structured inspection record — thickness profiles and flaw dimensions — not a PDF."
          },
          {
              "q": "How does risk-based inspection under API 580 and API 581 change intervals?",
              "a": "RBI replaces fixed intervals with intervals derived from probability and consequence of failure, mapped to credible damage mechanisms per API 571 and calibrated by inspection effectiveness. Intervals move in both directions — extending on low-consequence equipment, shortening where a mechanism is active and prior inspection was ineffective. What an auditor accepts is the documented basis, not the interval alone."
          },
          {
              "q": "What is a Written Practice, and who is required to have one?",
              "a": "A Written Practice is the employer's own document describing how it trains, examines, qualifies and certifies NDT personnel: methods, levels, training hours, experience requirements, examination content, vision requirements, recertification and records retention. Under SNT-TC-1A every employer certifying its own NDT personnel needs one, and it is normally the first document a client or accreditation auditor requests."
          }
      ]
  },

  "/blog/asme-section-v-article-4-ut-requirements-explained": {
      "answer": "ASME Section V, Article 4 governs ultrasonic examination of welds: written procedure and essential variables, instrument linearity, basic calibration blocks, scanning technique, and how indications are recorded. It contains no flaw acceptance criteria. Accept or reject comes from the referencing code — ASME Section VIII Division 1, Mandatory Appendix 12, or ASME B31.3 Table 341.3.2 for process piping.",
      "expansion": "ASME Boiler and Pressure Vessel Code, Section V, Article 4 is the nondestructive examination standard for ultrasonic examination of welds; Article 5 covers ultrasonic examination of materials, and thickness measurement is normally run to the ASTM standards adopted in Article 23. Article 4 requires a written UT procedure whose essential variables are listed in Table T-421, so changing search-unit frequency, wedge angle, couplant, or examination surface condition beyond the procedure's stated range requires requalification. Instrument screen-height and amplitude-control linearity are verified against the appendices of Article 5. Distance-amplitude correction is built on a basic calibration block of the same material specification and heat treatment as the production weld, with side-drilled holes and notches sized from the weld thickness, and the block and part surface temperatures kept within 25°F. Scanning runs at least 6 dB above the primary reference level with ten percent search-unit overlap; evaluation is performed at reference level.",
      "source": "ASME BPVC Section V (Nondestructive Examination), Article 4 — Ultrasonic Examination Methods for Welds; acceptance criteria supplied by the referencing code, e.g. ASME Section VIII Division 1, Mandatory Appendix 12, or ASME B31.3, Table 341.3.2.",
      "table": {
          "caption": "ASME Section V Article 4 vs. the referencing code — which document decides what in a weld UT examination",
          "columns": [
              "Decision",
              "Fixed by Section V, Article 4",
              "Fixed by the referencing code",
              "Where to look"
          ],
          "rows": [
              [
                  "Written procedure and essential variables",
                  "Yes — the variable list a UT procedure must address",
                  "No",
                  "ASME V, Article 4, Table T-421"
              ],
              [
                  "Instrument screen-height and amplitude linearity",
                  "Yes — invoked from Article 5",
                  "No",
                  "ASME V, Article 5 mandatory appendices"
              ],
              [
                  "Calibration block material, thickness, reflectors",
                  "Yes — matched to the production weld",
                  "No",
                  "ASME V, Article 4, T-434"
              ],
              [
                  "Scanning sensitivity, speed and overlap",
                  "Yes — scan at 6 dB above reference, 10% overlap",
                  "No",
                  "ASME V, Article 4, T-471"
              ],
              [
                  "Flaw accept or reject",
                  "No",
                  "Yes — this is the referencing code's job",
                  "ASME VIII-1 Mandatory Appendix 12; B31.3 Table 341.3.2"
              ],
              [
                  "Which welds get examined, and what percentage",
                  "No",
                  "Yes",
                  "ASME VIII-1, UW-11; B31.3 Table 341.3.2"
              ],
              [
                  "Personnel qualification route",
                  "Points to the referencing code",
                  "Yes",
                  "ASME V, Article 1, T-120; ASNT SNT-TC-1A or CP-189"
              ]
          ],
          "note": "The single most common Article 4 misreading is treating it as an acceptance standard. Section V is a method standard throughout: it tells you how to examine, and the construction or piping code you are building to tells you what is acceptable. A UT report citing only Section V has not stated an acceptance basis."
      },
      "facets": [
          {
              "q": "What is the difference between ASME Section V Article 4 and Article 5?",
              "a": "Article 4 covers ultrasonic examination methods for welds; Article 5 covers ultrasonic examination methods for materials such as plate, forgings, castings, bolting and tube. A weld UT procedure is written to Article 4; a plate lamination check or a thickness survey runs to Article 5 and the ASTM standards adopted in Article 23. Article 4 invokes the instrument linearity checks that live in Article 5."
          },
          {
              "q": "Does ASME Section V Article 4 contain weld acceptance criteria?",
              "a": "No. Section V is a method standard — it tells you how to examine, not what to accept. Article 4 defines procedure, calibration, scanning and recording; the referencing code section supplies accept or reject. For pressure vessels that is ASME Section VIII Division 1, Mandatory Appendix 12; for process piping it is ASME B31.3, Table 341.3.2."
          },
          {
              "q": "Which appendices of Article 4 cover phased array and TOFD?",
              "a": "Article 4 handles advanced techniques through mandatory appendices rather than the base paragraphs. Mandatory Appendix III covers the time-of-flight diffraction technique. Two further mandatory appendices cover phased array — manual raster scanning with linear arrays, and E-scan and S-scan linear scanning. Separate mandatory appendices split ultrasonic requirements for workmanship-based acceptance criteria from those written for fracture-mechanics-based acceptance criteria."
          },
          {
              "q": "What calibration block does ASME Section V Article 4 require?",
              "a": "A basic calibration block of the same material specification, product form and heat treatment condition as the component being examined, carrying side-drilled holes and notches whose size is fixed by the weld thickness. Surface finish must represent the examination surface, and block and part surface temperatures must stay within 25°F of each other. The block is what builds the distance-amplitude correction curve."
          },
          {
              "q": "How often must ultrasonic calibration be checked under Article 4?",
              "a": "A calibration check is required at the finish of each examination or series of similar examinations, whenever examination personnel change, and any time instrument malfunction is suspected. Changing the search unit, wedge, cable, couplant or instrument invalidates the calibration. If a distance-amplitude point has dropped by 20% or 2 dB, data recorded since the last valid calibration is void and the area is re-examined."
          },
          {
              "q": "What certification does a technician need to perform ASME Section V ultrasonic testing?",
              "a": "ASME Section V, Article 1 requires personnel to be qualified under the referencing code section, which in United States practice means an employer written practice built on ASNT SNT-TC-1A or ANSI/ASNT CP-189, with Level II certification in ultrasonic testing to interpret and report results. Procedures are approved by a Level III. ISO 9712 Level 2 is the common equivalent outside North America."
          }
      ]
  },

  "/blog/aws-d1-1-weld-acceptance-criteria-comprehensive-guide": {
      "answer": "AWS D1.1 rejects every crack, regardless of size or location. Beyond that, acceptance splits by loading: statically loaded members allow undercut up to 1/32 in. on base metal under 1 in. thick, while cyclically loaded members allow only 0.01 in. where the weld is transverse to tensile stress. Visual limits sit in Table 8.1 — Table 6.1 before the 2020 edition.",
      "expansion": "AWS D1.1/D1.1M, Structural Welding Code — Steel, places weld acceptance criteria in Clause 8, Inspection; editions before 2020 numbered the same material Clause 6, which is why older procedures cite Table 6.1 for visual and Table 6.2 for ultrasonic. The code applies to carbon and low-alloy steels 1/8 in. and thicker; thinner sheet steel falls to AWS D1.3, stainless to D1.6, aluminum to D1.2, reinforcing steel to D1.4, and bridges to AASHTO/AWS D1.5. Ultrasonic acceptance in D1.1 applies to complete-joint-penetration groove welds from 5/16 in. through 8 in. thick, and works on a decibel rating, d = a − b − c, where a is the indication level, b is the reference level, and c is an attenuation factor of two decibels per inch of sound path beyond the first inch. The resulting rating falls into a severity class from A to D by thickness and probe angle.",
      "source": "AWS D1.1/D1.1M:2020, Structural Welding Code — Steel, Clause 8 (Inspection): Table 8.1 visual acceptance criteria, Table 8.2 UT acceptance–rejection criteria. In editions through 2015 the same material is Clause 6, Tables 6.1 and 6.2.",
      "table": {
          "caption": "AWS D1.1 visual acceptance criteria by discontinuity and loading condition (nontubular connections)",
          "columns": [
              "Discontinuity",
              "Statically loaded nontubular",
              "Cyclically loaded nontubular"
          ],
          "rows": [
              [
                  "Cracks",
                  "Rejected — any size, any location",
                  "Rejected — any size, any location"
              ],
              [
                  "Weld / base-metal fusion",
                  "Complete fusion required",
                  "Complete fusion required"
              ],
              [
                  "Crater cross section",
                  "Craters filled to the full weld cross section, except at the ends of intermittent fillet welds outside their effective length",
                  "Craters filled to the full weld cross section"
              ],
              [
                  "Undercut, base metal under 1 in.",
                  "1/32 in. maximum; 1/16 in. allowed for an accumulated 2 in. in any 12 in. of weld",
                  "0.01 in. maximum where the weld is transverse to tensile stress; 1/32 in. for all other cases"
              ],
              [
                  "Undercut, base metal 1 in. and thicker",
                  "1/16 in. maximum for any length of weld",
                  "0.01 in. / 1/32 in. as above — the limit is set by stress direction, not thickness"
              ],
              [
                  "Piping porosity, CJP butt weld transverse to computed tensile stress",
                  "No visible piping porosity",
                  "No visible piping porosity"
              ],
              [
                  "Piping porosity, other groove welds and fillet welds",
                  "Sum of diameters 1/32 in. and larger not over 3/8 in. in any linear inch, and not over 3/4 in. in any 12 in. of weld",
                  "Frequency not over one in each 4 in. of weld length, maximum diameter 3/32 in."
              ],
              [
                  "Fillet weld leg size",
                  "1/16 in. underrun permitted over a length not exceeding 10% of the total weld length",
                  "1/16 in. underrun permitted over a length not exceeding 10% of the total weld length"
              ]
          ],
          "note": "These are visual-inspection limits for nontubular connections. Tubular connections carry their own criteria in the tubular clause. Ultrasonic acceptance is separate and sits in Table 8.2 as a decibel-rating class; radiographic acceptance is separate again within Clause 8. Contract documents may impose tighter limits than the code, and frequently do on fracture-critical work."
      },
      "facets": [
          {
              "q": "Are cracks ever acceptable under AWS D1.1?",
              "a": "No. AWS D1.1 rejects cracks of any size in any location, in both statically and cyclically loaded connections, and no evaluation inside the code makes a crack acceptable. The crack must be removed, the joint repaired to a qualified procedure, and the repair re-examined by the same method. This is the only D1.1 visual criterion carrying no dimensional allowance at all."
          },
          {
              "q": "How much undercut does AWS D1.1 allow?",
              "a": "For statically loaded nontubular connections, undercut may not exceed 1/32 in. on base metal thinner than 1 in., with 1/16 in. permitted for an accumulated length of 2 in. in any 12 in. of weld; on base metal 1 in. and thicker the limit is 1/16 in. for any weld length. Cyclically loaded members allow 0.01 in. where the weld is transverse to tensile stress, 1/32 in. otherwise."
          },
          {
              "q": "What weld thickness range does AWS D1.1 ultrasonic testing cover?",
              "a": "D1.1 ultrasonic acceptance criteria apply to complete-joint-penetration groove welds in base metal from 5/16 in. through 8 in. thick. Material outside that band, tubular T-, Y- and K-connections, and joints other than CJP groove welds need either the separate tubular provisions or an alternative technique qualified by demonstration and approved by the Engineer before use."
          },
          {
              "q": "Why do older AWS D1.1 procedures cite Table 6.1 instead of Table 8.1?",
              "a": "AWS renumbered the code clauses in the 2020 edition. Inspection moved from Clause 6 to Clause 8, so visual acceptance criteria moved from Table 6.1 to Table 8.1 and ultrasonic acceptance from Table 6.2 to Table 8.2. Technical content largely carried over; the citation did not. Any procedure or inspection test plan still citing Clause 6 is written against the 2015 or an earlier edition."
          },
          {
              "q": "Does AWS D1.1 require ultrasonic or radiographic testing?",
              "a": "No. D1.1 requires visual inspection of all welds as the default method. Ultrasonic, radiographic, magnetic particle and penetrant testing apply only when the contract documents call for them, which is why the drawings and project specification — not the code — determine how much NDT a structure receives. Once called for, D1.1 supplies both the procedure requirements and the acceptance criteria."
          },
          {
              "q": "Who is qualified to inspect welds to AWS D1.1?",
              "a": "D1.1 recognizes three routes for the inspector: current or previous certification as an AWS Certified Welding Inspector under AWS QC1; current or previous certification as a welding inspector under the Canadian Welding Bureau scheme to CSA W178.2; or an engineer or technician whose training and experience the Engineer accepts as competent. Personnel performing NDT are qualified separately under ASNT SNT-TC-1A."
          }
      ]
  },

  "/blog/rt-vs-ut-complete-comparison": {
      "answer": "Ultrasonic testing finds tight planar flaws — cracks, sidewall lack of fusion — that radiography misses when they sit more than a few degrees off the beam axis, and it reports through-wall depth. Radiography images volumetric flaws such as porosity, slag and incomplete penetration, and leaves a permanent film or digital record. UT needs one-sided access; RT needs two.",
      "expansion": "Radiographic and ultrasonic testing are the two volumetric methods recognized by ASME Boiler and Pressure Vessel Code Section V — radiography in Article 2, ultrasonic examination of welds in Article 4 — and by AWS D1.1 Clause 8 and by API 1104 for pipeline girth welds. The physics sets the split. Radiography measures how much radiation the material absorbs, so a flaw shows only if it removes enough material along the beam path; a tight crack must lie within roughly a few degrees of the beam to register at all. Ultrasonics measures echo time and amplitude, so a planar flaw normal to the sound path is the easiest thing it sees, and time of flight yields a depth a radiograph cannot supply. Radiography also carries regulatory overhead in the United States: industrial radiographers work under 10 CFR Part 34 or an Agreement State equivalent, with dosimetry, area control and a Radiation Safety Officer.",
      "source": "ASME BPVC Section V, Article 2 (Radiographic Examination) and Article 4 (Ultrasonic Examination Methods for Welds); AWS D1.1, Clause 8; API 1104 acceptance standards for nondestructive testing; US industrial radiography licensing under 10 CFR Part 34 and Agreement State equivalents.",
      "table": {
          "caption": "RT vs UT by flaw type — which method actually finds it",
          "columns": [
              "Flaw type",
              "Radiography (RT)",
              "Ultrasonics (UT)",
              "Preferred"
          ],
          "rows": [
              [
                  "Tight planar crack, transverse to the weld",
                  "Poor — detected only when the beam lies within a few degrees of the crack face",
                  "Strong — the crack face reflects the beam and returns depth",
                  "UT"
              ],
              [
                  "Sidewall lack of fusion in a bevel",
                  "Poor — almost no change in absorbed radiation along the beam",
                  "Strong when the probe angle is matched to the bevel angle",
                  "UT (angle beam or phased array)"
              ],
              [
                  "Incomplete penetration at the root",
                  "Strong — clear straight-line density change on the image",
                  "Strong — distinct root geometry echo",
                  "Either"
              ],
              [
                  "Slag inclusion",
                  "Strong — shape, length and distribution are directly readable",
                  "Detected, but shape and type are harder to characterize",
                  "RT"
              ],
              [
                  "Scattered or cluster porosity",
                  "Strong — the pattern itself is the evidence",
                  "Scattered low-amplitude echoes, poorly characterized",
                  "RT"
              ],
              [
                  "Lamination in plate or in the scan path",
                  "Poor — the flaw lies parallel to the beam",
                  "Strong with a 0° straight beam",
                  "UT"
              ],
              [
                  "General wall loss and corrosion thinning",
                  "Only approximate, via a profile technique",
                  "Direct pulse-echo thickness measurement",
                  "UT"
              ],
              [
                  "Through-wall flaw height for fitness-for-service",
                  "Not obtainable from a projection image",
                  "Obtainable by time-of-flight diffraction or phased array tip diffraction",
                  "UT"
              ]
          ],
          "note": "Detection capability is one axis; contract and code are the other. Some projects specify RT because a permanent image is a required deliverable rather than because RT detects better. ASME Section VIII Division 1 permits ultrasonic examination in place of radiography for certain welds under UW-11, subject to procedure and personnel requirements."
      },
      "facets": [
          {
              "q": "Can ultrasonic testing replace radiography for weld inspection?",
              "a": "Often, yes. ASME Section VIII Division 1 permits ultrasonic examination in place of radiography for certain welds under UW-11, and modern API 1104 practice accepts automated ultrasonics or phased array on pipeline girth welds. The substitution is never automatic: it needs a qualified procedure, qualified personnel, and agreement from the owner or Engineer before the first weld is scanned."
          },
          {
              "q": "Which is faster for production welds, UT or RT?",
              "a": "Ultrasonics. A technician scans a typical weld in roughly 5 to 15 minutes and reads indications on the spot, while radiography needs source and detector setup, exposure, processing and interpretation, commonly 45 to 120 minutes per weld. Radiography also halts other trades inside the exclusion boundary during exposure, so schedule loss exceeds the inspection time itself."
          },
          {
              "q": "Why does radiography miss cracks?",
              "a": "A radiograph records how much radiation the material absorbs along the beam path. A tight crack removes almost no material in that direction unless the beam runs nearly parallel to the crack face — practically, within a few degrees. Sidewall lack of fusion fails for the same reason. Ultrasonics carries the opposite bias: a planar flaw facing the beam is the strongest reflector it can meet."
          },
          {
              "q": "Which method tells you how deep a flaw is?",
              "a": "Ultrasonics. Echo transit time converts directly to sound path and, with the known probe angle, to depth below the surface. That is why through-wall height for a fitness-for-service assessment under API 579-1/ASME FFS-1 comes from UT — usually time-of-flight diffraction or phased array tip diffraction. A radiograph is a two-dimensional projection and carries no depth information."
          },
          {
              "q": "What extra certification does an industrial radiographer need in the United States?",
              "a": "Beyond ASNT Level II in radiographic testing, a US industrial radiographer needs radiation safety certification through a certifying entity recognized by the Nuclear Regulatory Commission or an Agreement State, and must work under a licensee's radiation safety program per 10 CFR Part 34 — personal dosimetry, calibrated survey instruments, area posting and a designated Radiation Safety Officer. Ultrasonic testing carries no equivalent licensing burden."
          },
          {
              "q": "When is it worth running both RT and UT on the same weld?",
              "a": "When the expected flaw population is mixed and the consequence of a miss is high. Ultrasonics screens every weld quickly and catches planar flaws; radiography then confirms and characterizes the small percentage showing indications, and supplies the permanent image some contracts require as a deliverable. Fatigue-loaded and fracture-critical joints are the usual candidates for both methods."
          }
      ]
  },

  "/blog/api-653-tank-inspection-guide": {
      "answer": "API 653 governs inspection, repair, alteration and reconstruction of aboveground storage tanks after they enter service. Formal external inspection runs at a maximum of 5 years and internal inspection at a maximum of 20 years, and both shorten when the measured corrosion rate says so. An API 653 certified inspector authorizes repairs and signs the fitness-for-service decision.",
      "expansion": "API 653 applies to aboveground welded or riveted steel storage tanks originally built to API 650 or its predecessor API 12C, and it sets each interval from measurement rather than from a calendar. The external inspection interval is the lesser of five years and RCA divided by 4N, where RCA is the difference between measured and minimum required shell thickness in mils and N is the shell corrosion rate in mils per year. External ultrasonic thickness surveys run at five years when the corrosion rate is unknown, and at the lesser of RCA divided by 2N or fifteen years once a rate is established. Internal inspection is driven by remaining bottom-plate thickness and the bottom corrosion rate, with a twenty-year ceiling that a risk-based inspection assessment under API 580 and API 581 can justify approaching but not exceed. Routine owner or operator visual checks run monthly.",
      "source": "API 653, Tank Inspection, Repair, Alteration, and Reconstruction — Section 4 (Suitability for Service), Section 6 (Inspection), Section 9 (Repairs and Alterations), Annex B (Evaluation of Tank Bottom Settlement); construction standard API 650; fitness-for-service via API 579-1/ASME FFS-1.",
      "table": {
          "caption": "API 653 inspection types — maximum interval, who performs it, and what actually sets the interval",
          "columns": [
              "Inspection",
              "Maximum interval",
              "Who performs it",
              "What sets the interval"
          ],
          "rows": [
              [
                  "Routine in-service visual check",
                  "1 month",
                  "Owner or operator personnel; API 653 certification not required",
                  "Fixed by the standard, independent of corrosion rate"
              ],
              [
                  "Formal external inspection",
                  "5 years",
                  "API 653 certified inspector",
                  "Lesser of 5 years and RCA/4N from the shell corrosion rate"
              ],
              [
                  "External ultrasonic thickness survey",
                  "15 years, or 5 years if the corrosion rate is not established",
                  "NDT technician; results evaluated by the certified inspector",
                  "Lesser of RCA/2N and 15 years"
              ],
              [
                  "Internal (out-of-service) inspection",
                  "20 years",
                  "API 653 certified inspector with NDT support",
                  "Remaining bottom-plate thickness and bottom corrosion rate; RBI per API 580/581 within the 20-year cap"
              ],
              [
                  "Tank bottom scan (magnetic flux leakage)",
                  "Performed during the internal inspection",
                  "NDT technician qualified for the bottom examination procedure",
                  "Coverage and UT prove-up defined by the qualified bottom examination procedure"
              ],
              [
                  "Settlement survey",
                  "Set by the owner's programme; repeated when movement is shown",
                  "Survey crew; evaluated against API 653 Annex B",
                  "Pattern of settlement — uniform, planar tilt or out-of-plane — not magnitude alone"
              ],
              [
                  "Repair authorization and acceptance",
                  "Before and after every repair or alteration",
                  "API 653 certified inspector only",
                  "Triggered by the finding, not by a clock"
              ]
          ],
          "note": "Intervals are maxima, not entitlements: a jurisdiction, an insurer or the owner's own programme can require shorter. RCA is the difference between measured and minimum required shell thickness in mils; N is the corrosion rate in mils per year. A corrosion rate resting on two readings inside measurement scatter is arithmetic, not evidence."
      },
      "facets": [
          {
              "q": "How often does API 653 require an internal tank inspection?",
              "a": "The interval comes from the bottom-plate corrosion rate and the remaining thickness rather than a fixed schedule, and API 653 caps it at 20 years. Tanks with high measured corrosion, critical service or a failure history land at 5 years or less. A documented risk-based inspection assessment under API 580 and API 581 can justify a longer interval up to that ceiling."
          },
          {
              "q": "What minimum bottom plate thickness does API 653 allow?",
              "a": "API 653 Table 4.4 sets the minimum bottom-plate thickness that must still remain at the next scheduled internal inspection — not at the time of measurement. The commonly applied figures are 0.100 in. for a tank bottom with no release prevention barrier and 0.050 in. where an RPB with leak detection is installed. Annular plates and the critical zone at the shell-to-bottom weld are evaluated separately."
          },
          {
              "q": "Who can sign an API 653 inspection report?",
              "a": "An API 653 certified Authorized Inspector, whose certification can be verified against API's public individual certification directory. The physical NDT — ultrasonic thickness readings, magnetic flux leakage floor scanning, magnetic particle on welds — is performed by ASNT Level II technicians working to a written practice, but the evaluation, the fitness-for-service decision and the repair authorization belong to the certified inspector."
          },
          {
              "q": "What is the difference between API 650 and API 653?",
              "a": "API 650 is the construction standard: it governs how a new welded aboveground storage tank is designed, fabricated, erected and tested. API 653 takes over once the tank is in service, covering inspection, repair, alteration and reconstruction. API 653 is a fitness-for-service standard, so a tank that no longer meets its original API 650 as-built requirements can still be accepted for continued operation."
          },
          {
              "q": "How is remaining life calculated for a tank shell under API 653?",
              "a": "Remaining life equals measured thickness minus minimum required thickness, divided by the corrosion rate derived from successive thickness surveys. Minimum required shell thickness comes from the API 653 evaluation formulas, including the one-foot method, which scales with fill height, tank diameter, product specific gravity, allowable stress and joint efficiency. Successive readings must be separated by more than measurement scatter for the rate to be defensible."
          },
          {
              "q": "What do you need to sit the API 653 certification exam?",
              "a": "API's Individual Certification Programs sets eligibility by education plus inspection experience — broadly one year with a four-year engineering or technology degree, two years with a two-year degree or certificate, three years with a high school diploma, and five years with none. The examination is part closed-book and part open-book across API 653, API 650 and supporting ASME material, and certification runs on a three-year recertification cycle."
          }
      ]
  },

  "/ndt-level-1-training": {
      "answer": "NDT Level I qualifies a technician to set up equipment to a written instruction, perform the test, and record results — under the supervision of a certified Level II or Level III. Level I does not interpret or evaluate results against acceptance criteria and does not sign an accept/reject decision. Certification comes from the employer under SNT-TC-1A, not from ASNT.",
      "expansion": "Level I is the entry certification in the ASNT SNT-TC-1A scheme and the only level with no prior NDT certification prerequisite. A candidate needs a current annual near-vision acuity test (Jaeger 1 or equivalent) and a colour-contrast test, the classroom training hours for the method — 40 hours for UT, RT and ET, 12 for MT, 8 for PT and VT — and 130 to 210 logged on-the-job hours under a certified Level II or III. Certification follows a general written exam, a method written exam and a practical demonstration on reference specimens, all administered against the employer's Written Practice. The authority granted is deliberately narrow: perform the test, record the data, hand the interpretation upward. ASNT's third-party ACCP programme issues no Level I credential at all; it begins at Level II. US Level I roles run $40,000–$55,000.",
      "source": "ASNT Recommended Practice No. SNT-TC-1A (2020 edition), Personnel Qualification and Certification in Nondestructive Testing — recommended initial training and experience table; ANSI/ASNT CP-189; ASNT Central Certification Program (ACCP) scope. US pay bands cross-referenced from /blog/ndt-salary-guide-2026-global.",
      "table": {
          "caption": "NDT Level I authority boundary — which level may perform, interpret and sign each task",
          "columns": [
              "Task",
              "Level I",
              "Level II",
              "Level III"
          ],
          "rows": [
              [
                  "Set up and operate equipment to a written instruction",
                  "Yes, under supervision",
                  "Yes, independently",
                  "Yes"
              ],
              [
                  "Calibrate equipment and select technique parameters",
                  "No",
                  "Yes, within an approved procedure",
                  "Yes, and qualifies the parameters"
              ],
              [
                  "Interpret indications and evaluate against acceptance criteria",
                  "No",
                  "Yes",
                  "Yes"
              ],
              [
                  "Sign the accept/reject disposition on a report",
                  "No",
                  "Yes",
                  "Yes"
              ],
              [
                  "Write a technique sheet under an approved procedure",
                  "No",
                  "Yes",
                  "Yes"
              ],
              [
                  "Write and approve the inspection procedure",
                  "No",
                  "No",
                  "Yes"
              ],
              [
                  "Train, examine and certify Level I and Level II personnel",
                  "No",
                  "No",
                  "Yes"
              ],
              [
                  "Third-party portable credential available (ASNT ACCP)",
                  "No — ACCP starts at Level II",
                  "Yes",
                  "Yes"
              ]
          ],
          "note": "Authority is method-specific: a Level II in MT holds none of these rights in UT. Boundaries follow SNT-TC-1A; an employer's Written Practice can narrow them further and cannot widen them beyond the level held."
      },
      "facets": [
          {
              "q": "What does an NDT Level I technician get paid in the United States?",
              "a": "US NDT Level I roles run $40,000–$55,000 a year, against $55,000–$80,000 at Level II and $80,000–$130,000 at Level III. Level I sits at the bottom of the ladder because it carries no interpretation authority — pay rises with the right to sign an accept/reject decision, not with time served. Method mix and travel move the figure. Full bands are in the NDT Salary Guide 2026."
          },
          {
              "q": "Can a Level I technician sign an inspection report?",
              "a": "No. A Level I records data and hands it to a certified Level II or Level III, who interprets the indications, evaluates them against the acceptance criteria and signs. A report carrying only a Level I signature fails an audit against SNT-TC-1A and against most client quality specifications. Level I output is raw data, not a disposition."
          },
          {
              "q": "How many classroom hours does Level I require for each method?",
              "a": "Under SNT-TC-1A recommended minimums: Ultrasonic, Radiographic and Eddy Current require 40 classroom hours each; Magnetic Particle requires 12; Liquid Penetrant and Visual Testing require 8 each. Those cover theory only. Logged on-the-job experience of 130 to 210 hours per method, supervised by a certified Level II or III, is separate and additional to the classroom requirement."
          },
          {
              "q": "Does ASNT issue the Level I certificate?",
              "a": "No. SNT-TC-1A is a recommended practice, not a certifying body. Your employer writes a Written Practice describing how it implements the recommendation and certifies you against that document once training hours, experience hours and exam results are on file. ASNT's third-party ACCP programme issues no Level I credential — it starts at Level II. Changing employers means re-certifying under the new Written Practice."
          },
          {
              "q": "Which method should a new technician certify in first at Level I?",
              "a": "MT and PT reach Level I fastest — 12 and 8 classroom hours. UT carries 40 classroom hours and the strongest pay trajectory: US MT and PT technicians earn $50,000–$65,000 at Level II, while PAUT and TOFD specialists built on a UT foundation earn $80,000–$110,000. Fabrication and weld shops start technicians on MT and PT; refineries and pipelines want UT."
          },
          {
              "q": "What comes after Level I, and how long does it take to get there?",
              "a": "Level II in the same method. It adds classroom hours on top of the Level I hours — 40 more for UT, RT and ET, 24 for MT, 16 for PT and VT — plus substantially more logged experience. Technicians with steady exposure to the method reach Level II 6 to 12 months after Level I. Level II is where interpretation authority and the accept/reject signature arrive."
          }
      ]
  },

  "/ndt-level-2-training": {
      "answer": "NDT Level II is the working certification. The holder calibrates equipment, selects technique parameters within an approved procedure, interprets indications, evaluates them against acceptance criteria, writes technique sheets and signs the accept/reject disposition on a report. Level II requires current Level I in the same method plus additional classroom and logged experience hours. Two routes issue it: employer SNT-TC-1A, or portable ASNT ACCP.",
      "expansion": "Level II is where an NDT programme's output becomes defensible, because it is the first level permitted to interpret. The prerequisite is current Level I certification in that same method — Level II is method-specific, not a general promotion. Classroom hours stack on the Level I hours: UT, RT and ET add 40 each for 80 cumulative; MT adds 24 for 36 cumulative; PT and VT add 16 each for 24 cumulative. Logged on-the-job experience increases substantially and sets the real timeline. The examination adds calibration, code interpretation and acceptance-criteria judgement to the Level I written and practical format. Two issuing routes exist: an employer certifies against its own Written Practice under SNT-TC-1A, or ASNT certifies directly under ACCP, whose credential is portable between employers. Neither route accepts a fully online pathway. US Level II roles run $55,000–$80,000.",
      "source": "ASNT Recommended Practice No. SNT-TC-1A (2020 edition) — recommended initial training and experience table; ASNT Central Certification Program (ACCP) Level II requirements; ANSI/ASNT CP-189. US pay bands cross-referenced from /blog/ndt-salary-guide-2026-global.",
      "table": {
          "caption": "Level II classroom-hour ladder by method, and the authority the added hours unlock",
          "columns": [
              "Method",
              "Level I classroom hours",
              "Level II additional hours",
              "Cumulative through Level II",
              "Interpretation authority added at Level II"
          ],
          "rows": [
              [
                  "Ultrasonic (UT)",
                  "40",
                  "40",
                  "80",
                  "Calibration block setup, DAC/TCG construction, thickness and weld flaw evaluation to code"
              ],
              [
                  "Radiographic (RT)",
                  "40",
                  "40",
                  "80",
                  "Density and IQI verification, radiograph interpretation and film disposition to code"
              ],
              [
                  "Eddy Current (ET)",
                  "40",
                  "40",
                  "80",
                  "Reference standard setup, phase and impedance signal interpretation, sizing calls"
              ],
              [
                  "Magnetic Particle (MT)",
                  "12",
                  "24",
                  "36",
                  "Field direction and technique selection, indication classification, demagnetisation judgement"
              ],
              [
                  "Liquid Penetrant (PT)",
                  "8",
                  "16",
                  "24",
                  "Penetrant system selection, dwell and developer control, indication evaluation"
              ],
              [
                  "Visual (VT)",
                  "8",
                  "16",
                  "24",
                  "Weld acceptance criteria evaluation, lighting and equipment verification, direct disposition"
              ]
          ],
          "note": "Classroom hours only. Logged on-the-job experience under a certified Level II or III is separate, rises sharply at Level II, and is the step that sets the calendar. Hours are per method and do not transfer between methods."
      },
      "facets": [
          {
              "q": "What does an NDT Level II technician earn in the United States?",
              "a": "US NDT Level II roles run $55,000–$80,000 a year, above the $40,000–$55,000 Level I band and below $80,000–$130,000 at Level III. Method drives the spread: MT and PT technicians sit at $50,000–$65,000, while PAUT and TOFD specialists reach $80,000–$110,000. Offshore rotations add 30–50%. Full segmentation by method, industry and country is in the NDT Salary Guide 2026."
          },
          {
              "q": "What exactly can a Level II sign that a Level I cannot?",
              "a": "The accept/reject disposition. A Level II calibrates the equipment, selects technique parameters within an approved procedure, interprets indications, evaluates them against the code acceptance criteria, writes technique sheets and signs the report. A Level II also supervises Level I technicians and verifies their recorded data. A Level II cannot write or approve the governing procedure itself — that authority belongs to Level III."
          },
          {
              "q": "Is ACCP Level II worth adding if I already hold SNT-TC-1A Level II?",
              "a": "Add ACCP when portability has value: multi-site employers, aerospace and government-adjacent contracts prefer or specify a third-party credential. ASNT administers the standardised exam and issues the certificate, so it survives a change of employer. SNT-TC-1A Level II is tied to one employer's Written Practice and is re-issued on every move. ACCP has no Level I tier, so Level II is its entry point."
          },
          {
              "q": "Can NDT Level II training be completed online?",
              "a": "Theory yes, practical no. Calibration principles, code and standard interpretation and acceptance-criteria evaluation are delivered live-virtual or self-paced under both SNT-TC-1A and ACCP. Equipment setup, calibration on real specimens, indication interpretation and the supervised experience hours require physical equipment and an in-person assessor. No legitimate scheme certifies a Level II from theory alone."
          },
          {
              "q": "Does Level II in one method carry over to another method?",
              "a": "No. Certification is per method. A technician holding Level II in MT starts a second method at Level I, with that method's own classroom hours, its own logged experience and its own examinations. The annual vision test and general theory background carry across; the method training and experience do not. Adding PT to an existing MT Level II starts with 8 Level I classroom hours."
          },
          {
              "q": "What has to happen before a Level II can move up to Level III?",
              "a": "Documented experience, measured in years. SNT-TC-1A equivalency provisions set 4,200 hours for a candidate holding a qualifying engineering or science degree and 12,600 hours on the high-school-diploma path, on top of Level II certification in the method. Most Level IIs need 18 to 36 months of further qualifying work before enough hours exist to sit the Basic and Method examinations."
          }
      ]
  },

  "/asnt-level-iii-training": {
      "answer": "ASNT Level III is the technical-authority certification. The holder writes and approves inspection procedures, selects methods for a given application, authors and owns the employer's Written Practice, and trains, examines and certifies Level I and Level II personnel. Entry requires prior Level II in the method plus documented experience — 4,200 hours with a qualifying engineering or science degree, 12,600 hours without.",
      "expansion": "Level III is the only level that creates authority rather than exercising it. A Level II works inside an approved procedure; a Level III writes that procedure, qualifies it for a specific material, thickness range and geometry, approves it, and answers for it to an auditor. The same person is named in the employer's Written Practice as the authority who trains, examines and certifies Level I and Level II personnel. Examination has three parts: a Basic exam on materials, processes, discontinuities and the certification schemes, taken once and carried across every method; a Method exam per method sought; and an employer-specific exam where a Written Practice calls for one. Prior Level II certification in the method plus 4,200 documented hours with a qualifying degree, or 12,600 hours without, is the standard route. US Level III roles run $80,000–$130,000.",
      "source": "ASNT Recommended Practice No. SNT-TC-1A (2020 edition) equivalency provisions; ANSI/ASNT CP-189, Standard for Qualification and Certification of Nondestructive Testing Personnel; ANSI/ASNT CP-105 topical outlines for the Basic and Method examinations; ASNT ACCP Professional Level III. US pay bands cross-referenced from /blog/ndt-salary-guide-2026-global.",
      "table": {
          "caption": "Five ways to hold Level III authority — issuer, portability, prerequisite and scope",
          "columns": [
              "Level III route",
              "Issued by",
              "Portable between employers",
              "Prerequisite",
              "Authority it carries"
          ],
          "rows": [
              [
                  "SNT-TC-1A employer Level III",
                  "Your employer, under its own Written Practice",
                  "No — re-appointed on each move",
                  "Level II in the method, exams and experience per that Written Practice",
                  "Procedure approval, Written Practice authorship and personnel certification for that employer"
              ],
              [
                  "ANSI/ASNT CP-189 Level III",
                  "Employer, against a national standard rather than a recommended practice",
                  "No",
                  "Level II plus the CP-189 education and experience criteria",
                  "Same authority, held to a standard an auditor enforces clause by clause"
              ],
              [
                  "ASNT NDT Level III",
                  "ASNT directly",
                  "Yes",
                  "Basic examination plus one Method examination per method sought",
                  "Third-party evidence of Level III competence; the employer still names the Level III in its Written Practice"
              ],
              [
                  "ACCP Professional Level III",
                  "ASNT directly",
                  "Yes",
                  "Level II experience route plus ASNT examination",
                  "Portable third-party Level III, preferred in aerospace and government-adjacent work"
              ],
              [
                  "Contract / outsourced Level III of record",
                  "Engaged from an external provider",
                  "Held by the provider, not the employer",
                  "None on your own staff",
                  "Named technical authority of record who approves procedures and owns the Written Practice from day one"
              ]
          ],
          "note": "The contract route is the only one that delivers Level III authority without first accumulating 4,200 or 12,600 documented hours — see NDT Level III consulting. ASNT-issued routes prove competence; an employer still names a Level III in its own Written Practice."
      },
      "facets": [
          {
              "q": "What does an ASNT Level III earn in the United States?",
              "a": "US Level III roles run $80,000–$130,000 a year, a 30–60% step over the $55,000–$80,000 Level II band. The step is paid for authority, not tenure: procedure approval, personnel certification and audit defence are liabilities an employer cannot delegate downward. Consulting-track Level IIIs bill hourly and annualise higher at realistic utilisation. Full bands sit in the NDT Salary Guide 2026."
          },
          {
              "q": "What can a Level III approve that a Level II cannot?",
              "a": "The procedure itself, and the people. A Level III writes and approves the inspection procedure qualified for a specific material, thickness range and geometry; authors the employer's Written Practice; selects the method for an application; validates techniques; and trains, examines and certifies Level I and Level II personnel. A Level II works inside that procedure and signs individual accept/reject results."
          },
          {
              "q": "How many hours of documented experience does Level III require?",
              "a": "4,200 hours for a candidate holding a qualifying engineering or science degree, 12,600 hours on the high-school-diploma path, under SNT-TC-1A equivalency provisions. Both figures sit on top of prior Level II certification in the method, not instead of it. A current annual near-vision acuity and colour-contrast test must also be on file at the time of examination."
          },
          {
              "q": "Do I need a separate Level III exam for every method?",
              "a": "One Basic examination, then one Method examination per method. The Basic covers materials and processes, common discontinuities and the certification schemes themselves; it is taken once and carries across every method added later. Each additional method needs only its own Method examination. A third Specific examination, covering one employer's codes and procedures, applies where that employer's Written Practice calls for it."
          },
          {
              "q": "Can a company use a contract Level III instead of certifying its own?",
              "a": "Yes. An outsourced Level III is named as the technical authority of record, approves procedures, owns the Written Practice and certifies Level I and II staff — available before an internal candidate has accumulated 4,200 or 12,600 hours. Employers facing a client audit or a contract prerequisite run both tracks: contract Level III now, internal candidate qualifying in parallel. See NDT Level III consulting."
          },
          {
              "q": "Does ASNT Level III certification expire?",
              "a": "Yes. Recertification runs on a periodic cycle set by ASNT for ASNT-issued Level III and ACCP, or by the employer's Written Practice under SNT-TC-1A and CP-189. Refresher preparation targets what has changed in the relevant codes and standards since the last certification plus a Basic and Method content review, not first-time theory instruction. The annual vision test is separate and must stay current."
          }
      ]
  },

  "/manufacturing-ndt-training": {
      "answer": "Manufacturing NDT training qualifies fabrication, foundry and mill technicians against construction codes — AWS D1.1 for structural steel, ASME Section VIII and B31.3 for pressure parts. Under ASNT SNT-TC-1A the surface methods certify fastest: PT Level I needs 4 classroom hours and MT Level I needs 12, against 40 hours for UT or RT.",
      "expansion": "A fabrication shop's NDT programme is built method by method around what the product demands. Visual testing is the first gate on every weld: AWS D1.1/D1.1M:2020 places inspection in Clause 8, with visual acceptance criteria tabulated and a CWI qualified to AWS QC1 making the call. Magnetic particle covers surface and near-surface discontinuities on ferromagnetic structural steel at production pace; penetrant covers the same scope on aluminium, stainless and non-magnetic castings. Ultrasonic and radiographic testing carry volumetric acceptance on complete-joint-penetration welds and on pressure-boundary work under ASME Section VIII and B31.3. ASNT SNT-TC-1A sets the recommended floor for each — 12 classroom hours for MT Level I against 40 for UT Level I — but the employer's written practice is the binding document, and the employer, not the school, issues the certificate. That is why shops buy this training as an on-site cohort run against their own procedures.",
      "source": "ASNT SNT-TC-1A (2020 edition), recommended initial training and experience levels; AWS D1.1/D1.1M:2020 Structural Welding Code — Steel, Clause 8 (Inspection); AWS QC1 (Certified Welding Inspector); ASME BPVC Section V, Articles 2, 4, 6, 7 and 9.",
      "table": {
          "caption": "Manufacturing NDT methods: production role, governing acceptance, and what SNT-TC-1A recommends to certify",
          "columns": [
              "Method",
              "Role on a fab-shop or mill floor",
              "Governing acceptance",
              "Classroom hours (L I / L II)",
              "Experience hours in method (L I / additional for L II)"
          ],
          "rows": [
              [
                  "VT",
                  "First gate on every weld; applied to 100% of production",
                  "AWS D1.1:2020 Clause 8 visual acceptance; CWI per AWS QC1",
                  "8 / 16",
                  "70 / 140"
              ],
              [
                  "MT",
                  "Surface and near-surface cracks on ferromagnetic structural steel, at production pace",
                  "AWS D1.1:2020 Clause 8; ASME Section V Article 7",
                  "12 / 8",
                  "70 / 210"
              ],
              [
                  "PT",
                  "Same surface scope on aluminium, stainless and non-magnetic castings",
                  "ASME Section V Article 6; customer specification",
                  "4 / 8",
                  "70 / 140"
              ],
              [
                  "UT",
                  "Volumetric acceptance on complete-joint-penetration welds, forgings, plate and billet",
                  "AWS D1.1:2020 Clause 8; ASME Section V Articles 4 and 5",
                  "40 / 40",
                  "210 / 630"
              ],
              [
                  "RT",
                  "Internal soundness in castings and pressure-boundary welds",
                  "ASME Section V Article 2; ASME Section VIII Division 1",
                  "40 / 40",
                  "210 / 630"
              ],
              [
                  "ET",
                  "In-line screening of tube, bar and mill product as part of the production process",
                  "ASTM E309; customer and mill specification",
                  "40 / 40",
                  "210 / 630"
              ]
          ],
          "note": "Hours are the SNT-TC-1A recommended minimums for a high-school-graduate candidate; Level II experience is additional to Level I, and the recommended practice pairs hour counts with minimum elapsed-time requirements. The employer's written practice may set higher figures and is the binding document."
      },
      "facets": [
          {
              "q": "Does AWS D1.1 require ASNT-certified NDT technicians?",
              "a": "Yes. AWS D1.1/D1.1M:2020 requires NDT personnel to be qualified under ASNT SNT-TC-1A or an equivalent employer written practice, with Level II performing and interpreting examinations and Level I working under Level II direction. Visual inspection is handled separately: D1.1 accepts an AWS Certified Welding Inspector qualified to AWS QC1, a CWB-qualified inspector, or an individual the Engineer accepts as competent by training and experience."
          },
          {
              "q": "Which NDT method should a fabrication shop certify first?",
              "a": "Visual testing. It is the first gate on every weld under AWS D1.1/D1.1M:2020 Clause 8, it costs 8 classroom hours at Level I, and it catches profile, undercut and porosity problems before any other method is set up. Magnetic particle and penetrant follow for the surface scope at production volume, then ultrasonics for volumetric acceptance on complete-joint-penetration welds."
          },
          {
              "q": "How long does it take to move a new hire from zero to MT Level II?",
              "a": "20 classroom hours and 280 documented on-the-job hours in the method. SNT-TC-1A recommends 12 training hours and 70 experience hours for Level I, then 8 further training hours and 210 further experience hours for Level II. The recommended practice pairs those hour counts with minimum elapsed-time requirements, so the calendar governs the schedule as much as the hour log does."
          },
          {
              "q": "Can a welder cross into weld inspection without a degree?",
              "a": "Yes. SNT-TC-1A sets education, training and experience as alternative qualifying routes rather than imposing a degree requirement, and a welder already reads joint geometry, fit-up and weld sequence — the part that takes newcomers longest to learn. The usual path is VT first against the shop's code, MT or PT next for the surface scope, then UT for volumetric work."
          },
          {
              "q": "Is a Level II certification portable to another fabrication shop?",
              "a": "No. Under SNT-TC-1A the certificate is issued by the employer against that employer's written practice, so it ends when the employment does. The new shop's Level III may credit documented training and on-the-job hours from the previous file, then examines and certifies the technician afresh. This is why a complete hour log matters more to a career than the certificate itself."
          },
          {
              "q": "What must a shop have in place before an on-site cohort can certify anyone?",
              "a": "A written practice signed by a Level III, approved written procedures for each method and technique, calibrated equipment, representative specimens containing known discontinuities cut from the shop's own product, and current vision test records for each candidate. Without the specimens the practical examination cannot be run; without the written practice there is nothing to certify against."
          }
      ]
  },

  "/aviation-ndt-training": {
      "answer": "Aviation MRO NDT training certifies technicians under NAS 410 — a standard whose requirements are mandatory — rather than the general-industry recommended practice SNT-TC-1A. A named Responsible Level 3 approves the training, sets the examinations and signs the certificate, the employer issues it, and it expires at five years. 14 CFR Part 145 governs the repair station wrapped around all of it.",
      "expansion": "In-service aviation inspection is a different qualification regime from aerospace manufacturing and from general industry. NAS 410, published through the Aerospace Industries Association, states its requirements as shall — the employer writes a written practice that meets them, not one that merely considers them. EN 4179 is its European counterpart and the two are maintained in step. Every method needs a named Responsible Level 3 qualified in that method; candidates sit general, specific and practical examinations; near-vision acuity is tested annually; and certification lapses at five years unless recertified. The FAA does not certify NDI personnel. It certifies the repair station under 14 CFR Part 145 and the mechanic under Part 65, and Advisory Circular 65-31B is where it points operators and stations for the personnel standard. OEM engine and airframe manuals then layer type-specific technique approvals on top, which is why an MRO technician's value compounds with each programme qualification.",
      "source": "NAS 410, AIA/NAS Certification and Qualification of Nondestructive Test Personnel; EN 4179:2021; ATA Specification 105; FAA Advisory Circular 65-31B; 14 CFR Part 145 Subpart D (Personnel).",
      "table": {
          "caption": "Aviation MRO (NAS 410) versus general industry (SNT-TC-1A): what changes when an employer hires across",
          "columns": [
              "Qualification element",
              "Aviation MRO — NAS 410 / EN 4179",
              "General industry — ASNT SNT-TC-1A",
              "What the MRO employer must do"
          ],
          "rows": [
              [
                  "Status of the document",
                  "Standard; requirements are mandatory",
                  "Recommended practice; the employer's written practice is what binds",
                  "Write the practice to meet NAS 410, not around it"
              ],
              [
                  "Who issues the certificate",
                  "The employer, under a named Responsible Level 3",
                  "The employer, under a Level III",
                  "Name the Responsible Level 3 for every method in the practice"
              ],
              [
                  "Level 3 authority",
                  "NAS 410 Level 3 qualification held or contracted, per method",
                  "ASNT NDT Level III or an equivalent route defined in the practice",
                  "Verify the Level 3 covers every method the station is rated for"
              ],
              [
                  "Examination",
                  "General, specific and practical, per method",
                  "General, specific and practical, per method",
                  "Re-examine incoming SNT-TC-1A technicians; scores do not transfer"
              ],
              [
                  "Vision",
                  "Near-vision acuity tested annually, plus colour contrast differentiation",
                  "Near-vision acuity tested annually",
                  "Put vision testing on the same annual cycle as other personnel records"
              ],
              [
                  "Certification life",
                  "Five years maximum, then recertify",
                  "Five years recommended, then recertify",
                  "Track expiry per person per method, not one date per person"
              ],
              [
                  "Portability between employers",
                  "None; the receiving employer certifies",
                  "None; the receiving employer certifies",
                  "Credit documented prior training and OJT, then examine and certify"
              ],
              [
                  "Regulatory wrapper",
                  "14 CFR Part 145; OEM engine and airframe manuals per type",
                  "Construction or in-service code — ASME, AWS, API",
                  "Map every approved technique to the OEM manual that calls for it"
              ]
          ],
          "note": "NAS 410 and EN 4179 are harmonised, but a technician qualified under one is not automatically certified under the other, because certification is always issued by the employer. Aerospace manufacturing keeps the same personnel standard and adds Nadcap accreditation audited to AC7114."
      },
      "facets": [
          {
              "q": "Does the FAA certify NDT technicians?",
              "a": "No. The FAA certifies repair stations under 14 CFR Part 145 and mechanics under Part 65; it issues no NDI certificate to an individual. The technician is certified by the employer against NAS 410 or ATA Specification 105, and Advisory Circular 65-31B is where the FAA points operators and repair stations for that personnel standard."
          },
          {
              "q": "Can an SNT-TC-1A Level II from oil and gas move straight into a Part 145 shop?",
              "a": "Not automatically. The methods transfer; the certification does not. The repair station's Responsible Level 3 reviews documented prior training and on-the-job hours, credits what the records support, then re-examines the candidate general, specific and practical under the station's NAS 410 written practice. Budget the bridge as weeks of examination and technique familiarisation, not a paperwork transfer."
          },
          {
              "q": "What is ATA Specification 105 and how does it relate to NAS 410?",
              "a": "ATA Specification 105 is the airline industry's guideline for training, qualifying and certifying NDT personnel. It covers the same ground as NAS 410 — written practice, Level 3 authority, three-part examination, vision testing, recertification — from the operator side rather than the manufacturer side. Carrier maintenance programmes commonly cite 105; MRO and OEM-driven work more often cites NAS 410."
          },
          {
              "q": "Which method does an aviation MRO hire for first?",
              "a": "Fluorescent penetrant and eddy current. The FPI line carries the highest part volume in an engine shop, so it is where new technicians start and where a cohort pays back fastest. Eddy current is aviation's signature method — surface crack detection on discs, blades, wheels and airframe structure at sensitivities general industry never asks for. Ultrasonics follows for structure, bond lines and composites."
          },
          {
              "q": "How does aerospace manufacturing differ from MRO for NDT qualification?",
              "a": "Same personnel standard, different audit. Manufacturing runs NAS 410 qualification underneath Nadcap accreditation, where the NDT process itself is audited against AC7114 and the prime contractor's own specification. MRO runs NAS 410 underneath 14 CFR Part 145 and the OEM maintenance manual. Manufacturing hunts process escapes in new material; MRO hunts fatigue and corrosion damage accumulated in service."
          },
          {
              "q": "What NDI personnel records must a Part 145 repair station produce on request?",
              "a": "The written practice itself, the named Responsible Level 3's qualification in each method, and for every technician: education and experience, training hours, documented on-the-job hours, general, specific and practical examination results, a current vision test, the Level 3's signature, and the certification date with its five-year expiry. Auditors read the expiry column first."
          }
      ]
  },

  "/corporate-ndt-training": {
      "answer": "Corporate NDT training qualifies a whole crew at once, on your equipment, against your written practice. Under ASNT SNT-TC-1A the employer certifies the technician — the trainer never does — so the deliverable is a personnel file per person: training hours, documented OJT, general, specific and practical examination scores, vision test, and the Level III signature.",
      "expansion": "An employer-sponsored cohort exists because certification in the United States is an employer act, not a school act. SNT-TC-1A is a recommended practice; what binds is the written practice the employer signs, and the certificate carries the employer's name. Training a crew against that document — on the shop's own equipment, its own procedures, and specimens cut from its own product — closes the gap that opens when technicians are sent to public courses one at a time and return certified against somebody else's procedure. The commercial arithmetic follows: no travel and per diem for six to twenty people, no rota gaps while technicians are away, one examination cycle instead of a dozen, and one set of records in one format an auditor can read end to end. Atlantis runs cohorts on-site under ASNT Level III oversight and does not operate walk-in classrooms. Quote on request.",
      "source": "ASNT SNT-TC-1A (2020 edition) — written practice, training, examination, certification and records; ANSI/ASNT CP-189 where a national standard is contractually required; ISO 9712:2021 for third-party certification.",
      "table": {
          "caption": "Cohort types an employer buys, and what each one has to produce",
          "columns": [
              "Cohort type",
              "Who is in it",
              "SNT-TC-1A classroom hours",
              "Documented OJT in the method",
              "What the employer files afterwards"
          ],
          "rows": [
              [
                  "New-hire Level I, surface methods",
                  "Hires with no NDT background, going onto MT and PT work",
                  "MT 12, PT 4",
                  "MT 70, PT 70",
                  "Training record, three examination scores per method, vision test, Level III signature"
              ],
              [
                  "New-hire Level I, volumetric methods",
                  "Hires going onto UT or RT",
                  "40 per method",
                  "210 per method",
                  "Same file, plus the specimen set used in the practical examination"
              ],
              [
                  "Level I to Level II upgrade",
                  "Certified Level I technicians with hours already logged",
                  "40 for UT or RT, 8 for MT or PT",
                  "630 additional for UT or RT; 210 additional for MT",
                  "Upgrade certificate, cumulative OJT log, practical run on production specimens"
              ],
              [
                  "Cross-method add-on",
                  "Existing Level II adding a second method",
                  "From 4 hours (PT Level I) to 40 hours (UT Level I)",
                  "From 70 hours to 210 hours, by method",
                  "One file per person per method — never one file per person"
              ],
              [
                  "Recertification cycle",
                  "Anyone approaching the five-year mark",
                  "Refresher as set by the written practice",
                  "Continuous documented activity in the method",
                  "Re-examination or documented performance, fresh vision test, new expiry date"
              ],
              [
                  "Level III programme authority",
                  "The person who signs everything above",
                  "Per the SNT-TC-1A education and experience route",
                  "Per method held",
                  "Level III credentials, approved procedures, annual programme review record"
              ]
          ],
          "note": "Hours are SNT-TC-1A recommended minimums for a high-school-graduate candidate; Level II experience is additional to Level I, and a written practice may set higher figures. Batch sizes run 4 to 25 technicians. Atlantis delivers these cohorts on-site under ASNT Level III oversight — scope and quote on request."
      },
      "facets": [
          {
              "q": "Who certifies the technician — the training provider or the employer?",
              "a": "The employer. ASNT SNT-TC-1A places certification with the employer, issued against the employer's own written practice and signed by a Level III. A training provider delivers the classroom hours, builds and administers the examinations, and supplies Level III oversight, but the certificate carries the employer's name. That is exactly why a cohort trained on your own procedures is the cleaner route."
          },
          {
              "q": "What does an employer need in place before an on-site cohort starts?",
              "a": "A written practice, or a Level III engaged to write one; approved procedures for each method and technique; calibrated equipment the crew will use in production; specimens containing known discontinuities cut from your own product; a room that holds the classroom sessions; and a current vision test for every candidate. The specimens are the item most often missing on day one."
          },
          {
              "q": "How many technicians make a workable on-site cohort?",
              "a": "Four to twenty-five per batch. Below four, the fixed cost of mobilising an instructor and a full examination set is spread too thin. Above twenty-five, the practical stations queue and hands-on time per technician collapses — and hands-on time is what produces a defensible practical examination. Larger crews run as sequential batches on a single mobilisation."
          },
          {
              "q": "Do cohort certifications survive a client audit?",
              "a": "They survive when the file does. An auditor checks the written practice against SNT-TC-1A or ANSI/ASNT CP-189, then samples technicians for training hours, documented OJT, three examination scores, a current vision test, the Level III signature, and an unexpired certification date. A cohort produces all of that in one format on one date, so sampling closes faster than with piecemeal certifications."
          },
          {
              "q": "If a technician leaves, does the certification go with them?",
              "a": "No. Employer-based certification ends with the employment. What the technician keeps is the record — training hours, documented on-the-job hours and examination history — which the next employer's Level III can credit before examining and certifying afresh. For the employer, that argues for complete records and for building bench depth rather than single points of failure on a method."
          },
          {
              "q": "SNT-TC-1A or ISO 9712 — which does a US crew need?",
              "a": "SNT-TC-1A for US work. It is the employer-based route that American clients, AWS D1.1 fabrication and ASME pressure work expect. ISO 9712:2021 is third-party certification issued by an accredited body, valid five years and renewable for a further five. European, Middle East and marine clients ask for it. Crews working both markets carry both, which one cohort programme can sequence."
          }
      ]
  },

  "/oil-gas-ndt-training": {
      "answer": "Oil and gas NDT training in the US qualifies technicians under ASNT SNT-TC-1A to method certification — UT first, then MT, PT, VT, RT and ET — because refinery, midstream and upstream acceptance answers to API 510, 570 and 653 with ASME Section V supplying the method rules. UT Level II is the hiring trigger; API ICP endorsements come later and are examined by API, not by a training provider.",
      "expansion": "Oil and gas is the largest NDT employment market in the United States, and its training path is set by the in-service codes rather than by construction work. API 510 governs pressure vessels, API 570 process piping and API 653 aboveground storage tanks; ASME Boiler and Pressure Vessel Code Section V supplies the examination method rules those codes invoke, while Section VIII and the ASME B31 piping series set construction acceptance. Ultrasonic testing carries the volume — thickness readings at condition monitoring locations, corrosion mapping, and shear-wave examination of repair and tie-in welds — with phased array standard on turnaround scopes. Radiography clears welds where a permanent image is contractually required, magnetic particle covers wet H2S cracking service, penetrant covers the stainless and alloy scope, and eddy current runs exchanger bundles every turnaround. A technician certified to ASNT SNT-TC-1A Level II in ultrasonics is hireable; one who understands why a condition monitoring location exists is promotable.",
      "source": "ASNT SNT-TC-1A (2020 edition), Table 6.3.1A recommended training and experience; ASME BPVC Section V, Article 1; API 510, API 570 and API 653 in-service inspection codes; API RP 583 (Corrosion Under Insulation and Fireproofing); API RP 571 damage mechanisms; 49 CFR Parts 192 and 195.",
      "table": {
          "caption": "Oil and gas NDT: what each asset class certifies for",
          "columns": [
              "Asset class",
              "In-service code that governs",
              "Methods that carry the work",
              "Credential buyers name in contract",
              "What the technician produces"
          ],
          "rows": [
              [
                  "Pressure vessels and columns",
                  "API 510 (ASME Section VIII construction)",
                  "UT thickness, UT shear-wave, MT/PT on repair welds",
                  "ASNT UT Level II; API 510 for the inspector role",
                  "CML thickness readings feeding remaining-life calculation"
              ],
              [
                  "Process piping and circuits",
                  "API 570 (ASME B31.3 construction)",
                  "UT thickness at CMLs, phased array, RT on tie-ins",
                  "ASNT UT and RT Level II; API 570 for the inspector role",
                  "Circuit thickness data and weld acceptance records"
              ],
              [
                  "Aboveground storage tanks",
                  "API 653",
                  "UT shell course thickness, MFL floor scanning, VT",
                  "ASNT UT Level II; API 653 for the inspector role",
                  "Floor MFL map and shell thickness profile"
              ],
              [
                  "Insulated systems with CUI exposure",
                  "API RP 583 with API RP 571 damage mechanisms",
                  "Pulsed eddy current, profile and digital radiography, guided wave UT",
                  "ASNT ET and RT Level II",
                  "Wall-loss screening through the jacket, insulation-removal targeting"
              ],
              [
                  "Fired heater and boiler tubes",
                  "API 573",
                  "UT thickness, RT of tube butt welds, infrared survey",
                  "ASNT UT Level II",
                  "Tube wall loss and bulge data for retirement decisions"
              ],
              [
                  "Shell-and-tube exchanger bundles",
                  "ASME Section VIII with owner exchanger specification",
                  "Eddy current, remote field, IRIS ultrasonics",
                  "ASNT ET Level II",
                  "Tube-by-tube wall-loss report before retubing decisions"
              ],
              [
                  "Transmission pipeline construction",
                  "ASME B31.4 and B31.8 with 49 CFR 192/195",
                  "RT and automated UT of girth welds, MT",
                  "ASNT RT Level II with radiation safety card; API 1169",
                  "Girth weld acceptance record for the as-built package"
              ]
          ],
          "note": "API ICP credentials (510, 570, 653, 1169) are examined and issued by API against documented inspection experience. Atlantis training covers the ASNT method certification underneath them; Atlantis does not sell API 510, 570 or 653 preparation."
      },
      "facets": [
          {
              "q": "What certifications do oil and gas employers actually require for NDT technicians?",
              "a": "ASNT SNT-TC-1A Level II in ultrasonics first — that is the hiring trigger — plus MT, PT and VT for the surface scope, and RT Level II with a state or NRC radiation safety card where shooting is in scope. Refinery and midstream contracts then name API ICP credentials for inspector roles: API 510 for vessels, API 570 for piping, API 653 for tanks, API 1169 for pipeline construction."
          },
          {
              "q": "How many training hours does UT Level II require for refinery work?",
              "a": "ASNT SNT-TC-1A (2020) recommends 40 hours of classroom training for UT Level I and a further 40 hours for Level II, with 210 hours of in-method experience before Level I certification and 630 cumulative in-method hours before Level II. The employer sets the binding figures in its Written Practice, and that document is what an audit reads."
          },
          {
              "q": "Do I need API 510 or API 570 to work as an NDT technician in a refinery?",
              "a": "No. API 510 and API 570 are inspector certifications issued by API through its Individual Certification Programs, examined by API and gated on documented inspection experience — a bachelor's degree plus one year, a two-year technical certificate plus two years, a high school diploma plus three years, or five years with no formal education. The technician credential underneath is ASNT method certification."
          },
          {
              "q": "Which NDT methods find corrosion under insulation without stripping the jacket?",
              "a": "Pulsed eddy current screens wall loss through insulation and thin cladding, profile and digital radiography images the pipe wall through the jacket, and guided wave ultrasonics screens long runs from a single access point. API RP 583 places carbon steel CUI susceptibility between 10°F and 350°F, and external chloride stress corrosion cracking of austenitic stainless between 140°F and 400°F."
          },
          {
              "q": "How does turnaround season change NDT hiring on the Gulf Coast?",
              "a": "Refinery and petrochemical turnarounds cluster in spring and autumn, and inspection contractors staff against fixed outage windows. UT Level II technicians, phased array operators and RT crews absorb most of that demand, with exchanger bundle eddy current running alongside. Certified supply, not demand, is the constraint, so contractors hire months ahead of the outage schedule and hold crews between windows."
          },
          {
              "q": "Does Atlantis run open-enrolment oil and gas NDT classes?",
              "a": "No. Atlantis delivers training on site at employer facilities — your equipment, your procedures, your Written Practice — under ASNT Level III oversight, with an examination and records package built to survive an audit. Cohorts for individuals form around employer demand. Atlantis does not sell API 510, 570 or 653 preparation. Request a scoped programme and a quote."
          }
      ]
  },

  "/aerospace-ndt-training": {
      "answer": "Aerospace NDT training in the US qualifies personnel to NAS 410 Rev 5, not SNT-TC-1A. The employer certifies Level 1 and Level 2 through a designated Responsible Level 3, and Nadcap audits that programme against AC7114 and its method slash sheets. Fluorescent penetrant, eddy current and ultrasonics on composites and forgings carry the work; EN 4179 is the harmonized European equivalent.",
      "expansion": "Aerospace NDT training is built backwards from the audit. NAS 410, published by the Aerospace Industries Association and current at Revision 5, replaces SNT-TC-1A as the qualification standard across the US aerospace supply chain, and EN 4179 is its harmonized European counterpart. Under NAS 410 the employer certifies Level 1 and Level 2 personnel through a designated Responsible Level 3, who owns the written practice, the examination material and the technique approvals. Nadcap, administered by the Performance Review Institute for SAE, audits that programme to AC7114 and its method slash sheets — AC7114/1 penetrant, AC7114/2 magnetic particle, AC7114/3 ultrasonic, AC7114/4 eddy current — and reads training records, examination results and vision records as closely as the technique itself. Fluorescent penetrant runs as a controlled special process to ASTM E1417 using AMS 2644 qualified materials. Eddy current owns engine and airframe surface inspection. Ultrasonics addresses composite bond lines, disbonds and forgings rather than weld flaws.",
      "source": "NAS 410 Rev 5 (Aerospace Industries Association, NDT Personnel Qualification and Certification); EN 4179 (ASD-STAN); Nadcap AC7114 audit criteria and method slash sheets (Performance Review Institute / SAE); ASTM E1417 liquid penetrant practice; AMS 2644 penetrant material qualification; ISO 9712 for comparison.",
      "table": {
          "caption": "NAS 410 against SNT-TC-1A, EN 4179 and ISO 9712 — what changes when the buyer is aerospace",
          "columns": [
              "Requirement",
              "NAS 410 Rev 5 (US aerospace)",
              "SNT-TC-1A (US general industry)",
              "EN 4179 (Europe aerospace)",
              "ISO 9712 (international)"
          ],
          "rows": [
              [
                  "Publishing body",
                  "Aerospace Industries Association",
                  "ASNT",
                  "ASD-STAN",
                  "ISO"
              ],
              [
                  "Document character",
                  "Contractually mandated by primes and by Nadcap accreditation",
                  "Recommended practice; the employer writes its own practice",
                  "Technically harmonized with NAS 410",
                  "Central certification standard"
              ],
              [
                  "Who certifies Level 1 and 2",
                  "The employer, through a designated Responsible Level 3",
                  "The employer, per its Written Practice",
                  "The employer, under a Level 3 accepted by the national aerospace board",
                  "An independent certification body accredited to ISO/IEC 17024"
              ],
              [
                  "Level 3 qualification route",
                  "Outside Agency examination or a National Aerospace NDT Board",
                  "ASNT Level III examination or employer examination",
                  "National Aerospace NDT Board",
                  "Certification body examination"
              ],
              [
                  "Vision requirement",
                  "Annual near-vision plus colour differentiation, recorded",
                  "Annual near-vision; colour requirement set by the Written Practice",
                  "Annual near-vision plus colour differentiation",
                  "Annual near-vision plus colour differentiation"
              ],
              [
                  "Audit that reads the records",
                  "Nadcap AC7114 plus prime source audits",
                  "Customer audit or ISO 9001 surveillance",
                  "Nadcap plus national aerospace board oversight",
                  "Accreditation body assessment of the certification body"
              ],
              [
                  "Where it is named in contracts",
                  "Boeing, Airbus, GE, RTX and their tiers",
                  "Refinery, pipeline, fabrication and power",
                  "European aerospace supply chain",
                  "Markets that recognise ISO personnel certification"
              ]
          ],
          "note": "Atlantis builds and delivers the classroom, OJT and examination package that satisfies a NAS 410 written practice on your site. The certification itself is issued by your company through its Responsible Level 3 — no training provider can issue a NAS 410 certificate on an employer's behalf."
      },
      "facets": [
          {
              "q": "Does an ASNT Level II certificate qualify me for aerospace NDT work?",
              "a": "Not on its own. US aerospace qualifies personnel to NAS 410, where the employer certifies Level 1 and Level 2 against its own written practice through a designated Responsible Level 3. Prior SNT-TC-1A training and documented experience count toward that record, but the certification itself is issued by the aerospace employer and audited by Nadcap. Europe applies EN 4179 the same way."
          },
          {
              "q": "What is Nadcap AC7114 and who has to pass it?",
              "a": "AC7114 is the Nadcap audit criteria for non-destructive testing, administered by the Performance Review Institute for SAE, with method slash sheets covering penetrant (AC7114/1), magnetic particle (AC7114/2), ultrasonic (AC7114/3) and eddy current (AC7114/4), and separate criteria for radiography. Boeing, Airbus, GE, RTX and their supply tiers require Nadcap NDT accreditation from suppliers running those processes. Audit intervals extend on demonstrated merit."
          },
          {
              "q": "Which NDT methods dominate aerospace inspection?",
              "a": "Fluorescent penetrant inspection carries the largest volume, run as a controlled special process to ASTM E1417 using AMS 2644 qualified materials, with bath concentration, ultraviolet intensity, dark-adaptation and process-control records. Eddy current is the primary surface method on engine discs, blades and fastener holes. Ultrasonics covers composites, bonded structure and forgings. Radiography and computed tomography cover castings and assemblies."
          },
          {
              "q": "How is composite ultrasonic inspection different from weld ultrasonics?",
              "a": "The target changes. Weld UT hunts crack-like reflectors in steel with shear-wave angle beams. Composite UT hunts delaminations, disbonds, porosity and foreign material inside an attenuative, anisotropic laminate, using low-frequency longitudinal probes, through-transmission setups and phased array C-scans. Acceptance comes from the OEM process specification and reference standards containing engineered defects, not from a welding code."
          },
          {
              "q": "Who is the Responsible Level 3 and why does every aerospace supplier need one?",
              "a": "NAS 410 requires the employer to designate a Responsible Level 3 who owns the written practice, approves techniques and procedures, sets and grades examinations, and certifies Level 1 and Level 2 personnel. That individual qualifies through an Outside Agency examination or a National Aerospace NDT Board. The role is filled by an employee or by contract, and Nadcap verifies the designation and its scope."
          },
          {
              "q": "Can Atlantis deliver aerospace NDT training at our facility?",
              "a": "Yes. Atlantis builds the classroom, on-the-job training and examination package to your NAS 410 written practice and approval scope, delivers it on your equipment under ASNT Level III oversight, and hands over records structured for a Nadcap AC7114 audit. Certification remains yours to issue through your Responsible Level 3. Request a scoped programme and a quote."
          }
      ]
  },

  "/nuclear-ndt-training": {
      "answer": "Nuclear NDT training stacks overlays on top of ordinary method certification. ASME Section XI IWA-2300 sets NDE personnel qualification for inservice inspection, Mandatory Appendix VII adds ultrasonic examiner requirements, and Mandatory Appendix VIII requires performance demonstration on blind flawed specimens. A 10 CFR 50 Appendix B quality programme and unescorted site access sit above all of it. UT Level II is the entry ticket.",
      "expansion": "Nuclear NDT training is general-industry certification plus four overlays. Method certification comes first, under ASNT SNT-TC-1A or ANSI/ASNT CP-189 as invoked by ASME Boiler and Pressure Vessel Code Section V, Article 1. ASME Section XI then governs inservice inspection at commercial plants: IWA-2300 sets NDE personnel qualification, Mandatory Appendix VII adds ultrasonic examiner requirements, and Mandatory Appendix VIII requires performance demonstration — finding and sizing real flaws in blind specimens, implemented in the US through the EPRI Performance Demonstration Initiative. A 10 CFR 50 Appendix B quality assurance programme, built to ASME NQA-1, governs the paperwork. Unescorted access under 10 CFR 73.56 and fitness for duty under 10 CFR Part 26 govern who reaches the work. Across the DOE complex the overlay is DOE O 414.1D instead of Section XI. Ultrasonics carries the inservice load, eddy current owns steam generator tubing, and visual examination is formalised into VT-1, VT-2 and VT-3 categories.",
      "source": "ASME BPVC Section XI, IWA-2300 and Mandatory Appendices VII and VIII; ASME BPVC Section V, Article 1; ANSI/ASNT CP-189; 10 CFR 50.55a and 10 CFR Part 50 Appendix B; 10 CFR 73.56; 10 CFR Part 26; ASME NQA-1; EPRI Performance Demonstration Initiative; DOE O 414.1D.",
      "table": {
          "caption": "The nuclear qualification stack — what each layer adds above general-industry certification",
          "columns": [
              "Layer",
              "What it requires",
              "Governing document",
              "Who imposes it",
              "When it is needed"
          ],
          "rows": [
              [
                  "Method certification",
                  "Classroom hours, in-method experience, general, specific and practical examinations",
                  "ASNT SNT-TC-1A or ANSI/ASNT CP-189, invoked through ASME Section V Article 1",
                  "The employer's Written Practice",
                  "Before performing any examination"
              ],
              [
                  "Inservice inspection qualification",
                  "Certification written specifically to the ISI scope and its examination categories",
                  "ASME Section XI, IWA-2300",
                  "The owner's ISI programme",
                  "All Section XI work at a commercial plant"
              ],
              [
                  "Ultrasonic examiner augmentation",
                  "Added ultrasonic training and examination beyond the base Level II",
                  "ASME Section XI, Mandatory Appendix VII",
                  "The owner's ISI programme",
                  "Ultrasonic examination of Class 1 and Class 2 components"
              ],
              [
                  "Performance demonstration",
                  "Detect and size real flaws in blind test specimens; procedure, equipment and examiner qualified together",
                  "ASME Section XI, Mandatory Appendix VIII",
                  "Owner, implemented through EPRI PDI",
                  "Reactor vessel, piping weld and nozzle ultrasonic scopes"
              ],
              [
                  "Quality assurance indoctrination",
                  "Documented QA training, procedure adherence, traceable records and corrective action",
                  "10 CFR 50 Appendix B, implemented to ASME NQA-1",
                  "Licensee and contractor QA organisations",
                  "Before badging onto site"
              ],
              [
                  "Unescorted access authorization",
                  "Background investigation, psychological assessment, fitness-for-duty testing",
                  "10 CFR 73.56 and 10 CFR Part 26",
                  "Licensee security organisation",
                  "Before entering the protected area"
              ],
              [
                  "DOE complex overlay",
                  "Site quality programme layered over the SNT-TC-1A practice",
                  "DOE O 414.1D",
                  "DOE site management and operations contractor",
                  "Hanford, Savannah River, Idaho and Oak Ridge scopes"
              ]
          ],
          "note": "Appendix VIII performance demonstration qualifies the examination system — procedure, equipment and examiner together — and is scope-specific. It does not transfer automatically between owners or between examination categories."
      },
      "facets": [
          {
              "q": "What is ASME Section XI Appendix VIII performance demonstration?",
              "a": "Mandatory Appendix VIII of ASME Section XI qualifies the ultrasonic examination system — procedure, equipment and examiner together — by requiring detection and sizing of real flaws in blind test specimens that mimic plant welds. In the United States it is implemented through the EPRI Performance Demonstration Initiative. Qualification is scope-specific: passing on piping welds does not carry across to reactor vessel examination."
          },
          {
              "q": "Do I need a security clearance for nuclear NDT work?",
              "a": "Commercial plants require unescorted access authorization rather than a federal clearance: background investigation and psychological assessment under 10 CFR 73.56, plus fitness-for-duty testing under 10 CFR Part 26. DOE complex sites and naval nuclear work add federal clearances — DOE L or Q — above method certification. Access processing runs weeks, so outage contractors start it long before mobilisation."
          },
          {
              "q": "How do outage schedules shape nuclear NDT work?",
              "a": "US reactors refuel on 18-month and 24-month cycles, and outages cluster in spring and autumn when grid demand is lowest. Inservice inspection under ASME Section XI runs on a 10-year interval divided into three inspection periods, so each outage carries a defined slice of the examination programme. Outage contractors hire against that calendar, and the work is compressed and round-the-clock."
          },
          {
              "q": "Which methods carry the most nuclear NDT work?",
              "a": "Ultrasonics leads: Class 1 and Class 2 piping welds, nozzle inner radii, reactor vessel shell and bolting under Section XI. Eddy current owns steam generator tubing examination. Visual examination is formalised into VT-1 for surface condition, VT-2 for leakage during system pressure tests, and VT-3 for structural and support integrity. Magnetic particle and penetrant cover the surface scope."
          },
          {
              "q": "Why are nuclear MT and PT consumables different from industrial ones?",
              "a": "Penetrants, developers, couplants and cleaners used on austenitic stainless steel and nickel alloys carry certified limits on total halogens and sulphur, because chloride and sulphur residues drive stress corrosion cracking in reactor materials. Each batch ships with a certificate of contaminant analysis, and that certificate becomes part of the examination record. ASTM E165 and ASTM E1417 govern the penetrant practice itself."
          },
          {
              "q": "Can Atlantis train our technicians for nuclear work on site?",
              "a": "Yes. Atlantis delivers method training on your equipment, against your procedures and Written Practice, under ASNT Level III oversight, with examination and records built for a 10 CFR 50 Appendix B audit. Atlantis does not run walk-in classrooms and does not administer Appendix VIII performance demonstration, which the owner and EPRI PDI control. Request a scoped programme and a quote."
          }
      ]
  },

  "/maritime-ndt-training": {
      "answer": "Maritime NDT training answers to two acceptance regimes. Commercial hull and weld work certifies to classification society rules — ABS, DNV and Lloyd's Register — with service suppliers approved under IACS UR Z17; naval construction and repair answers to NAVSEA technical publications layered over SNT-TC-1A. Ultrasonics and magnetic particle carry the volume on thick-section steel welds, and penetrant covers the aluminium superstructure.",
      "expansion": "Maritime NDT training splits along the acceptance authority, and the split decides the syllabus. Commercial work answers to classification societies — ABS, DNV, Lloyd's Register — whose surveyors accept examination records only in class-recognisable form; firms performing hull thickness measurement or in-water survey must hold service-supplier approval under IACS UR Z17, which requires operators certified to Level II under a recognised scheme such as SNT-TC-1A or ISO 9712. Tanker and bulk carrier hull surveys run under the IMO 2011 ESP Code, which drives close-up visual and thickness-measurement volume. Naval construction and repair answers instead to NAVSEA technical publications, with NDT requirements layered over SNT-TC-1A and audited harder than anything in general industry. Offshore structural fabrication brings API RP 2X and AWS D1.1 into the same technician's scope. Volumetric weld examination dominates: UT and phased array on hull butts and seams, magnetic particle as the everyday surface method, penetrant on aluminium.",
      "source": "IACS UR Z17 (Procedural Requirements for Service Suppliers); IMO 2011 ESP Code, adopted by Resolution A.1049(27); ABS Rules for Building and Classing Marine Vessels; NAVSEA T9074-AS-GIB-010/271 (Requirements for Nondestructive Testing Methods); AWS D1.1 Structural Welding Code — Steel; AWS D3.6M Underwater Welding Code; API RP 2X.",
      "table": {
          "caption": "Maritime and offshore NDT: which regime you are certifying into",
          "columns": [
              "Work stream",
              "Acceptance authority",
              "Governing document named in contract",
              "Personnel qualification the buyer names",
              "Methods that carry the work"
          ],
          "rows": [
              [
                  "Commercial newbuild hull welds",
                  "Attending classification society surveyor",
                  "Class rules for building and classing marine vessels",
                  "ASNT SNT-TC-1A or ISO 9712 Level II",
                  "UT and phased array on butts and seams, MT, RT"
              ],
              [
                  "In-service hull thickness measurement",
                  "Class-approved service supplier under survey",
                  "IACS UR Z17",
                  "Level II operator employed by an approved firm",
                  "UT thickness gauging, close-up VT"
              ],
              [
                  "Tanker and bulk carrier enhanced survey",
                  "Classification society with flag state",
                  "IMO 2011 ESP Code (Res. A.1049(27))",
                  "Class-approved thickness measurement firm operators",
                  "UT thickness grids, close-up VT of structure"
              ],
              [
                  "Naval surface and submarine construction",
                  "NAVSEA and the shipyard technical authority",
                  "NAVSEA T9074-AS-GIB-010/271",
                  "SNT-TC-1A Level II plus NAVSEA-specific qualification",
                  "UT, MT, PT and RT under prescribed techniques"
              ],
              [
                  "Offshore fixed structure fabrication",
                  "Operator and certifying authority",
                  "API RP 2X with AWS D1.1",
                  "Technicians qualified to API RP 2X guidelines",
                  "UT of tubular node joints, MT of node and brace welds"
              ],
              [
                  "Underwater and in-water survey",
                  "Class society, accepted in lieu of drydocking",
                  "Class in-water survey rules with AWS D3.6M",
                  "CSWIP diver inspector 3.1U and 3.2U",
                  "Underwater VT, UT thickness, MPI, cathodic protection readings"
              ],
              [
                  "Repair yard weld inspection",
                  "Owner with class endorsement",
                  "AWS D1.1 and class repair rules",
                  "AWS Certified Welding Inspector plus ASNT Level II",
                  "VT, MT, UT of repair and insert welds"
              ]
          ],
          "note": "Rotation shape follows the stream, not the method. Shipyard NDT is a day-and-night-shift trade on one site; Gulf of Mexico offshore inspection runs 14-and-14 and 21-and-21 with survival and medical prerequisites before mobilisation."
      },
      "facets": [
          {
              "q": "What certifications do US shipyards require for NDT technicians?",
              "a": "ASNT SNT-TC-1A Level II, certified by the yard against its own Written Practice: VT and MT first because those carry the volume, then UT for thick-section hull welds. RT adds a state or NRC radiation safety card. Weld inspection roles name the AWS Certified Welding Inspector. Naval yards layer NAVSEA-specific qualification and technical-authority procedure approval over all of it."
          },
          {
              "q": "What is IACS UR Z17 and why does it matter to a technician?",
              "a": "IACS Unified Requirement Z17 sets approval rules for firms supplying services to classification societies, including hull thickness measurement and in-water survey. Approved firms must employ operators certified to Level II under a recognised scheme — SNT-TC-1A or ISO 9712 — with documented training, supervision and equipment control. Readings taken by an unapproved firm are refused by the attending surveyor."
          },
          {
              "q": "How does naval NDT qualification differ from commercial class work?",
              "a": "Naval work answers to NAVSEA technical publications, which prescribe examination techniques and personnel requirements above SNT-TC-1A and require procedure approval by the shipyard technical authority, with records audited continuously. Commercial work answers to an independent classification society whose surveyor accepts records in class-recognisable form. One authority is the customer; the other is a third-party certifier acting for underwriters and flag states."
          },
          {
              "q": "Which NDT methods does offshore structural inspection use?",
              "a": "Ultrasonics on tubular node joints and weld roots, magnetic particle on node and brace welds including underwater MPI, close visual examination through the splash zone, flooded member detection on braces, and cathodic protection potential readings. API RP 2X covers ultrasonic and magnetic examination of offshore structural fabrication and supplies the technician qualification guidelines operators name directly in scopes of work."
          },
          {
              "q": "What does an offshore NDT rotation involve?",
              "a": "Gulf of Mexico inspection crews work 14-and-14 and 21-and-21 rotations on 12-hour shifts. Access requires offshore survival and helicopter underwater escape training to OPITO standards, a current offshore medical, and drug screening completed before mobilisation. Rope access certification through SPRAT or IRATA is paired with NDT certification on structural scopes, because the inspection point is the access problem."
          },
          {
              "q": "Can Atlantis train our yard's technicians on site?",
              "a": "Yes. Atlantis delivers method training at your facility on your equipment, written to your Written Practice and to the class or NAVSEA requirements your contracts invoke, under ASNT Level III oversight, with an audit-ready examination and records package. Atlantis does not operate walk-in classrooms; cohorts form around employer demand. Request a scoped programme and a quote."
          }
      ]
  },

  "/ultrasonic-testing-training": {
      "answer": "In the US, UT certification runs under ASNT SNT-TC-1A, and your employer's Written Practice is the document that binds. SNT-TC-1A recommends 40 hours of formal training plus 210 hours of UT experience for Level I, and 40 further training hours plus 630 cumulative method hours for Level II. Passing general, specific and practical examinations completes certification.",
      "expansion": "Two certification routes operate in the United States. Under ASNT SNT-TC-1A the employer certifies its own personnel against a Written Practice it authors, and the certification ends when the employment ends. Under ISO 9712 an accredited certification body examines and certifies, and the certificate belongs to the technician. SNT-TC-1A's recommended initial training and experience table lists UT Level I at 40 formal training hours, 210 hours of UT experience and 400 total NDT hours, and UT Level II at 40 further training hours, 630 cumulative UT hours and 1,200 total NDT hours. Level III carries no recommended classroom figure — it is reached through education plus experience comparable to Level II: four years for a high-school graduate, two years with a two-year technical degree, one year with a four-year engineering or science degree. All three routes end in general, specific and practical examinations. US employers write UT work to ASME BPVC Section V Articles 4 and 5 and AWS D1.1 Clause 8.",
      "source": "ASNT SNT-TC-1A (2020 edition), Recommended Practice for Personnel Qualification and Certification in Nondestructive Testing; ANSI/ASNT CP-189; ASME BPVC Section V, Articles 4 and 5; AWS D1.1/D1.1M Structural Welding Code — Steel, Clause 8; ISO 9712:2021.",
      "table": {
          "caption": "ASNT SNT-TC-1A recommended minimums for UT certification, by level",
          "columns": [
              "Level",
              "Formal training hours",
              "UT experience hours",
              "Total NDT experience hours",
              "What that level signs off"
          ],
          "rows": [
              [
                  "UT Level I",
                  "40",
                  "210 in UT",
                  "400 across all methods",
                  "Performs calibration and scanning to a written instruction and records results. Signs no interpretation."
              ],
              [
                  "UT Level II",
                  "40 further (80 cumulative)",
                  "630 cumulative in UT",
                  "1,200 across all methods",
                  "Sets up the technique, interprets, evaluates against the code and signs the examination report."
              ],
              [
                  "UT Level III",
                  "No recommended classroom figure",
                  "4 years beyond Level II for a high-school graduate; 2 years with a two-year technical degree; 1 year with a four-year engineering or science degree",
                  "Counted as time comparable to Level II",
                  "Writes and approves procedures, qualifies Level I and II personnel, defends contested calls."
              ],
              [
                  "PAUT or TOFD sub-method",
                  "Set by the employer's Written Practice",
                  "Documented separately on the sub-method, on top of conventional UT hours",
                  "Counted within the UT totals",
                  "Encoded scan plans and sizing, and only where the Written Practice names the sub-method on the certificate."
              ]
          ],
          "note": "These are SNT-TC-1A recommendations, not law. The employer's Written Practice is the binding document and can require more. ANSI/ASNT CP-189, written in mandatory language, removes that latitude when a contract invokes it. Under ISO 9712 the certification body sets the hours instead and the certificate transfers with the technician."
      },
      "facets": [
          {
              "q": "Does an ASNT UT certificate transfer when I change employers?",
              "a": "Under SNT-TC-1A, no. The certification is issued by the employer against its own Written Practice and lapses when you leave. Your documented training and experience hours travel with you, and the new employer certifies you against its practice on the strength of that log plus its own examinations. An ISO 9712 certificate is issued to you personally and moves with you."
          },
          {
              "q": "What is the difference between SNT-TC-1A and ANSI/ASNT CP-189?",
              "a": "SNT-TC-1A is a recommended practice — guidance the employer adapts inside its Written Practice. ANSI/ASNT CP-189 is an American National Standard written in mandatory language, so its requirements bind once a contract invokes it, and it requires the employer's NDT Level III to hold ASNT Level III certification. Contracts naming CP-189 remove the employer's freedom to set lower hours."
          },
          {
              "q": "How long does it take to reach UT Level II from zero experience?",
              "a": "The experience log sets the pace, not the classroom. 630 cumulative UT hours equals sixteen forty-hour weeks of ultrasonic work alone, and 1,200 total NDT hours must accrue alongside it. A technician employed full time on UT reaches Level II inside a year. One splitting time across five methods takes two years or more. Start the log on day one."
          },
          {
              "q": "Does UT Level II qualify me for phased array or TOFD work?",
              "a": "No. Phased array and TOFD are sub-methods. The employer's Written Practice names them separately, and qualification requires documented additional training plus a practical demonstration on encoded data before the certificate covers them. ASNT publishes separate topical outlines for UT phased array and UT TOFD. A Level II who cannot read a raw A-scan will not defend a phased-array sizing call."
          },
          {
              "q": "How often must UT certification be renewed?",
              "a": "SNT-TC-1A recommends recertification at intervals not exceeding five years for every level, by examination or by documented evidence of continuing satisfactory performance. Near-vision acuity is retested annually — Jaeger No. 1 at not less than twelve inches, or an equivalent. ISO 9712 certificates run five years, renew once for a second five years, then require recertification with a practical examination at ten."
          },
          {
              "q": "Which codes does a US UT technician actually work to?",
              "a": "ASME BPVC Section V Article 4 for weld examination and Article 5 for materials and components, with acceptance criteria drawn from the referencing construction code — Section VIII for pressure vessels, B31.3 for process piping. Structural steel runs to AWS D1.1 Clause 8. In-service thickness data feeds remaining-life calculation under API 510, 570 and 653."
          }
      ]
  },

  "/radiographic-testing-training": {
      "answer": "US radiography carries two separate qualifications. RT method certification runs under ASNT SNT-TC-1A — 40 training hours and 210 RT hours for Level I, 40 further hours and 630 cumulative hours for Level II. Radiation safety is regulated separately under 10 CFR Part 34 or the equivalent Agreement State rule, and requires certification through a recognised certifying entity.",
      "expansion": "An RT Level II certificate does not authorise you to operate a gamma source, and a radiation safety card does not qualify you to interpret a radiograph. US employers satisfy both. Method certification follows the employer's SNT-TC-1A Written Practice, or ANSI/ASNT CP-189 where a contract invokes it, or ISO 9712. Industrial radiography operations are licensed under 10 CFR Part 34 by the NRC, or under the equivalent regulation in an Agreement State, which covers the majority of US states. Part 34 requires each radiographer to be certified through a certifying entity recognised under Appendix A to Part 34 — in practice the ASNT Industrial Radiography Radiation Safety Personnel examination — to complete documented training on the licensee's operating and emergency procedures, and to work under a Radiation Safety Officer named on the licence. Occupational dose is capped at 5 rem total effective dose equivalent per year by 10 CFR 20.1201.",
      "source": "10 CFR Part 34, Licenses for Industrial Radiography and Radiation Safety Requirements for Industrial Radiographic Operations, including 10 CFR 34.43 and Appendix A; 10 CFR 20.1201 and 20.1208; ASNT SNT-TC-1A (2020 edition); ASME BPVC Section V, Article 2; API 1104; ISO 17636-1 and ISO 17636-2.",
      "table": {
          "caption": "The two credential tracks a US industrial radiographer must hold",
          "columns": [
              "Credential",
              "Governing document",
              "Minimum required",
              "What it authorises"
          ],
          "rows": [
              [
                  "RT Level I",
                  "Employer Written Practice per ASNT SNT-TC-1A",
                  "40 training hours, 210 RT experience hours, 400 total NDT hours",
                  "Make exposures to a written technique and process the image. No interpretation."
              ],
              [
                  "RT Level II",
                  "Employer Written Practice per ASNT SNT-TC-1A",
                  "40 further training hours, 630 cumulative RT hours, 1,200 total NDT hours",
                  "Develop the technique, interpret the radiograph, evaluate against acceptance criteria and sign the report."
              ],
              [
                  "RT Level III",
                  "ASNT SNT-TC-1A education-plus-experience route",
                  "4 years beyond Level II for a high-school graduate; 2 years with a two-year technical degree; 1 year with a four-year engineering or science degree",
                  "Write and approve procedures and techniques, qualify RT personnel, own the interface with the radiation safety programme."
              ],
              [
                  "Radiographer certification",
                  "10 CFR 34.43 and Appendix A to 10 CFR Part 34, or the Agreement State equivalent",
                  "Pass a recognised certifying-entity examination (ASNT IRRSP), plus licensee training on operating and emergency procedures and a documented practical",
                  "Operate a radiographic exposure device without personal supervision."
              ],
              [
                  "Radiographer's assistant",
                  "10 CFR Part 34, or the Agreement State equivalent",
                  "Licensee training and demonstrated competence, documented",
                  "Assist only under the personal supervision of a certified radiographer."
              ]
          ],
          "note": "The two tracks are independent. Holding one never implies the other. Method certification is granted by the employer under its Written Practice; radiographer certification is a regulatory requirement enforced against the licence, and NRC or Agreement State inspectors audit it directly. Atlantis delivers RT method training; radiation safety certification is issued by the certifying entity."
      },
      "facets": [
          {
              "q": "Does an ASNT RT Level II certificate allow me to operate a gamma source?",
              "a": "No. Method certification and radiographer certification are separate. Operating an exposure device requires certification through a certifying entity recognised under Appendix A to 10 CFR Part 34 — in practice the ASNT IRRSP examination — plus documented training on the licensee's operating and emergency procedures. An RT Level III without radiographer certification still cannot make the exposure."
          },
          {
              "q": "What is ASNT IRRSP and who has to hold it?",
              "a": "IRRSP is ASNT's Industrial Radiography Radiation Safety Personnel certification, the examination that satisfies the certifying-entity requirement in 10 CFR 34.43 and Appendix A to Part 34. Every individual acting as a radiographer on a US industrial radiography licence holds it. Radiographer's assistants work under the personal supervision of a certified radiographer instead. The certification runs on a five-year cycle."
          },
          {
              "q": "What is the annual radiation dose limit for a US industrial radiographer?",
              "a": "5 rem, or 0.05 sievert, total effective dose equivalent per year, set by 10 CFR 20.1201. A declared pregnant worker's embryo or fetus is limited to 0.5 rem across the entire gestation period under 10 CFR 20.1208. Monitoring requires a film badge or OSL dosimeter processed by an accredited service, plus a direct-reading dosimeter and an alarming ratemeter worn during operations."
          },
          {
              "q": "Can digital radiography replace film on ASME Section V work?",
              "a": "Yes. ASME BPVC Section V Article 2 carries mandatory appendices covering computed radiography and digital detector arrays, and ISO 17636-2 is the digital counterpart to film's 17636-1. Interpretation qualification does not change — an RT Level II reads either. What changes is the image-quality demonstration, the file integrity chain and long-term storage, all of which the written procedure addresses."
          },
          {
              "q": "What film density does ASME Section V Article 2 require?",
              "a": "Through the body of the hole-type image quality indicator, transmitted density is 1.8 minimum for X-ray sources and 2.0 minimum for gamma sources, with 4.0 the maximum for single-film viewing. Density through the area of interest holds within minus 15 percent to plus 30 percent of the density measured through the IQI. Density is measured with a densitometer, not judged."
          },
          {
              "q": "How does pipeline radiography under API 1104 differ from ASME work?",
              "a": "API 1104 governs welding and inspection of pipeline girth welds, and its acceptance criteria for porosity, slag inclusions and incomplete penetration differ from ASME Section VIII and B31.3. Personnel qualification still comes from the employer's written practice under SNT-TC-1A. A radiographer moving from fabrication to pipeline construction relearns acceptance criteria, not technique."
          }
      ]
  },

  "/magnetic-particle-testing-training": {
      "answer": "MT certification in the US runs under ASNT SNT-TC-1A, which recommends 12 training hours and 70 MT experience hours for Level I, and 8 further training hours with 210 cumulative MT hours for Level II. ASTM E1444/E1444M and ASTM E709 govern how the examination is performed; the ISO 9934 series is the international equivalent.",
      "expansion": "MT carries the shortest classroom recommendation of the mainstream weld methods and the highest practical failure rate on coverage discipline. SNT-TC-1A's recommended initial training and experience table lists MT Level I at 12 training hours, 70 hours of MT experience and 130 total NDT hours, and MT Level II at 8 further training hours, 210 cumulative MT hours and 400 total NDT hours. Those are recommendations — the employer's Written Practice binds, and aerospace employers working to NAS 410 set their own figures. Two ASTM documents govern the examination and they are not interchangeable: E709 is a Standard Guide, presenting technique options, while E1444/E1444M is a Standard Practice written in mandatory language, and it is the one aerospace and defence contracts invoke. ASME BPVC Section V Article 7 governs pressure equipment. ISO 9934-1, -2 and -3 cover general principles, detection media and equipment. MT applies only to ferromagnetic material.",
      "source": "ASTM E1444/E1444M Standard Practice for Magnetic Particle Testing; ASTM E709 Standard Guide for Magnetic Particle Testing; ASNT SNT-TC-1A (2020 edition); ASME BPVC Section V, Article 7; ISO 9934-1, ISO 9934-2 and ISO 9934-3; NAS 410 for aerospace personnel qualification.",
      "table": {
          "caption": "ASNT SNT-TC-1A recommended minimums for MT certification, and how MT compares with the 40-hour methods",
          "columns": [
              "Level",
              "MT training hours",
              "MT experience hours",
              "Total NDT experience hours",
              "What that level signs off"
          ],
          "rows": [
              [
                  "MT Level I",
                  "12",
                  "70 in MT",
                  "130 across all methods",
                  "Performs magnetisation and particle application to a written instruction, verifies field adequacy and records indications."
              ],
              [
                  "MT Level II",
                  "8 further (20 cumulative)",
                  "210 cumulative in MT",
                  "400 across all methods",
                  "Selects technique and amperage, interprets indications, evaluates against the code and signs the examination report."
              ],
              [
                  "MT Level III",
                  "No recommended classroom figure",
                  "4 years beyond Level II for a high-school graduate; 2 years with a two-year technical degree; 1 year with a four-year engineering or science degree",
                  "Counted as time comparable to Level II",
                  "Writes and approves procedures, qualifies MT personnel, owns bath and bench process controls."
              ],
              [
                  "Limited MT certification",
                  "Set by the employer's Written Practice for the named technique",
                  "Set by the employer's Written Practice",
                  "Set by the employer's Written Practice",
                  "Only the specific technique, part family and scope written on the certificate."
              ],
              [
                  "UT, RT or ET Level I, for comparison",
                  "40",
                  "210 in the method",
                  "400 across all methods",
                  "The same authority as MT Level I. The hours differ by method, not by rank."
              ]
          ],
          "note": "SNT-TC-1A recommends; the employer's Written Practice binds and can require more. MT's 12-hour Level I recommendation reflects equipment simplicity, not a lower standard of competence — coverage discipline is where candidates fail the practical, because a yoke examines a small patch per placement and a weld is a mosaic of overlapping placements in two perpendicular directions."
      },
      "facets": [
          {
              "q": "What is the difference between ASTM E709 and ASTM E1444?",
              "a": "E709 is a Standard Guide — it presents magnetic particle techniques and options without mandating any of them. E1444/E1444M is a Standard Practice, written in mandatory language, and it is the document aerospace and defence contracts invoke. A procedure written to E709 alone satisfies a guide. A procedure written to E1444 satisfies an auditor."
          },
          {
              "q": "Can magnetic particle testing be used on stainless steel or aluminum?",
              "a": "No for austenitic 300-series stainless, aluminum, copper, titanium and nickel alloys — none are ferromagnetic, so no leakage field forms at a discontinuity. Martensitic and ferritic 400-series stainless and duplex grades are ferromagnetic and are examinable. Where the material is non-magnetic, penetrant testing covers surface-breaking flaws and eddy current covers surface and near-surface flaws."
          },
          {
              "q": "How is magnetic field adequacy verified during an MT examination?",
              "a": "With an artificial flaw shim or a pie-shaped field indicator placed on the part, not with a meter reading alone. ASME BPVC Section V Article 7 also requires a lifting-power check on yokes at the maximum pole spacing to be used: 10 pounds for an alternating-current yoke and 40 pounds for a direct-current or permanent-magnet yoke."
          },
          {
              "q": "When is demagnetisation required after magnetic particle testing?",
              "a": "When residual magnetism interferes with what happens next — arc blow during subsequent welding, chip adhesion during machining, instrument error on assembled equipment, or a residual-field limit stated on the drawing. The examination procedure names the requirement and the verification method, and a residual field meter records the result. Demagnetisation is a controlled, documented step."
          },
          {
              "q": "How often must MT certification and examiner vision be renewed?",
              "a": "SNT-TC-1A recommends recertification at intervals not exceeding five years for all levels. Near-vision acuity is retested annually at Jaeger No. 1 or an equivalent, and colour-contrast differentiation is documented. That second test carries more weight in MT than in most methods, because the decision rests on contrast between the particle indication and the contrast-paint background."
          },
          {
              "q": "Do I need MT and PT together to be employable in US fabrication?",
              "a": "US fabrication and refinery job postings pair MT, PT and VT as a surface-methods set, because MT covers ferromagnetic material and PT covers everything else. The combined SNT-TC-1A Level I classroom recommendation across all three is 24 hours. The experience log, not the coursework, decides how fast a candidate becomes hireable on all three."
          }
      ]
  },

  "/penetrant-testing-training": {
      "answer": "PT certification in the US runs under ASNT SNT-TC-1A, which recommends 4 training hours and 70 PT experience hours for Level I, and 8 further training hours with 140 cumulative PT hours for Level II. ASTM E1417/E1417M is the governing practice for how the examination is performed and process-controlled.",
      "expansion": "PT carries the shortest classroom recommendation in NDT — SNT-TC-1A lists 4 training hours for Level I and 8 further hours for Level II, against 70 and 140 hours of PT experience and 130 and 270 total NDT hours. That brevity is why US aerospace does not rely on SNT-TC-1A alone: fluorescent penetrant inspection is a Nadcap-audited special process, personnel qualify under NAS 410 in the US or EN 4179 in Europe, and the employer's NDT Level 3 grants written method approval per person. ASTM E1417/E1417M is the governing document — a Practice, not a guide, so its requirements bind once invoked, covering dwell, removal, developer, process controls and system monitoring. ASTM E165 covers general industry, ASME BPVC Section V Article 6 covers pressure equipment, and ISO 3452-1 through -6 is the international series.",
      "source": "ASTM E1417/E1417M Standard Practice for Liquid Penetrant Testing; ASTM E165 Standard Practice for Liquid Penetrant Examination for General Industry; SAE AMS 2644 Inspection Material, Penetrant; ASNT SNT-TC-1A (2020 edition); ASME BPVC Section V, Article 6; ISO 3452-1; NAS 410 and EN 4179 for aerospace personnel qualification.",
      "table": {
          "caption": "Penetrant systems under ASTM E1417 and AMS 2644 — which one a US employer trains toward",
          "columns": [
              "Penetrant type and removal method",
              "Designation",
              "What it is chosen for",
              "Where US employers run it"
          ],
          "rows": [
              [
                  "Visible dye, solvent removable",
                  "Type II, Method C",
                  "Discrete surface-breaking cracks on machined and welded surfaces, examined under white light with no booth",
                  "Field weld inspection, refinery turnarounds, structural and pressure fabrication"
              ],
              [
                  "Fluorescent, water washable",
                  "Type I, Method A",
                  "High-throughput screening of small parts with open, well-formed flaws",
                  "Casting and forging production lines, general manufacturing"
              ],
              [
                  "Fluorescent, post-emulsifiable lipophilic",
                  "Type I, Method B",
                  "Shallow, tight flaws where over-washing empties the indication before it can bleed out",
                  "Aerospace engine and airframe component manufacture"
              ],
              [
                  "Fluorescent, post-emulsifiable hydrophilic",
                  "Type I, Method D",
                  "The tightest fatigue cracks, at the highest sensitivity levels, with controlled emulsifier contact time",
                  "Nadcap-audited aerospace manufacture and overhaul"
              ],
              [
                  "Fluorescent, solvent removable",
                  "Type I, Method C",
                  "Localised examination where immersion processing is impossible",
                  "In-service and on-wing aircraft inspection, field repair verification"
              ]
          ],
          "note": "Type and Method designations come from ASTM E1417/E1417M and ASTM E165. Fluorescent penetrant sensitivity levels run from ½ (ultra-low) to 4 (ultra-high) under SAE AMS 2644, and the level is specified by the drawing or the referencing code rather than chosen by the technician. SNT-TC-1A training hours do not change with the system selected. The process discipline does."
      },
      "facets": [
          {
              "q": "How many training hours does ASNT PT Level II require?",
              "a": "SNT-TC-1A recommends 4 formal training hours and 70 hours of PT experience for Level I against 130 total NDT hours, then 8 further training hours and 140 cumulative PT hours against 270 total NDT hours for Level II. Those are recommendations. The employer's Written Practice is the binding document, and aerospace employers set higher figures under NAS 410."
          },
          {
              "q": "Why does US aerospace use NAS 410 instead of SNT-TC-1A for penetrant?",
              "a": "Fluorescent penetrant inspection is a Nadcap-audited special process, and the audit checks personnel qualification against NAS 410 in the US or EN 4179 in Europe. Under NAS 410 the employer's NDT Level 3 issues written approval per person per method, examinations follow a controlled format, and the four-hour SNT-TC-1A classroom recommendation is superseded by the employer's written practice."
          },
          {
              "q": "What UV-A intensity does fluorescent penetrant inspection require?",
              "a": "A minimum of 1,000 microwatts per square centimetre of UV-A at the examination surface, with ambient white light held at 2 foot-candles or less inside the inspection booth. Lamp output is verified on a documented schedule with a calibrated radiometer, and the examiner completes a dark-adaptation period before evaluating. Each of these becomes an audit finding when left undocumented."
          },
          {
              "q": "Can penetrant testing be used after grinding, blasting or shot peening?",
              "a": "Not without etching first. Machining, grinding, blasting and peening smear metal across flaw openings and close the capillary path the penetrant needs, producing false negatives on real cracks. ASTM E1417 requires an etch step after those processes. Porous materials — unfired ceramics, powder metal, unsealed castings — retain penetrant everywhere and are unsuitable for the method."
          },
          {
              "q": "How long must penetrant dwell before the developer is applied?",
              "a": "The referencing document sets it, and the technician reads it off a table rather than choosing it. ASME BPVC Section V Article 6 tabulates minimum penetrant and developer dwell by material form, process and temperature, and ASTM E1417 carries its own table for aerospace work. Shortening dwell to save time is the leading cause of a missed indication."
          },
          {
              "q": "Should I train in PT or MT first?",
              "a": "MT first if you work in fabrication, structural steel or oil and gas, where the material is carbon steel and MT reaches subsurface flaws PT cannot. PT first if you target aerospace, castings, or stainless and nickel alloy work, where the material is non-magnetic and fluorescent penetrant is the dominant surface method. Most US employers want both certifications on one technician."
          }
      ]
  },

  "/visual-testing-training": {
      "answer": "VT is a certified NDT method, not an informal look. ASNT SNT-TC-1A recommends 8 training hours and 70 VT experience hours for Level I, and 16 further training hours with 140 cumulative VT hours for Level II — more classroom time at Level II than any other surface method. ASME BPVC Section V Article 9 governs the examination.",
      "expansion": "Visual testing is the method every other method depends on, and the one US employers most often assume needs no certificate. The codes disagree. ASME BPVC Section V Article 9 requires a written procedure, and direct visual examination performed with the eye within 24 inches of the surface at an angle no less than 30 degrees, under a minimum of 100 foot-candles — roughly 1,000 lux — measured at the surface. SNT-TC-1A's recommended table lists VT Level I at 8 training hours, 70 VT hours and 130 total NDT hours, and VT Level II at 16 further training hours, 140 cumulative VT hours and 270 total NDT hours. Every level requires a documented near-vision acuity examination, Jaeger No. 1 at not less than 12 inches or an equivalent, repeated annually, plus colour-contrast differentiation. For structural steel, AWS D1.1 Clause 8 supplies the acceptance criteria a VT Level II applies.",
      "source": "ASME BPVC Section V, Article 9; AWS D1.1/D1.1M Structural Welding Code — Steel, Clause 8 visual inspection acceptance criteria; ASNT SNT-TC-1A (2020 edition), vision examination and recommended training requirements; API 510, API 570 and API 653 in-service visual requirements.",
      "table": {
          "caption": "What US codes require of a visual examination — the parameters a VT Level II must be able to measure",
          "columns": [
              "Parameter",
              "Requirement",
              "Governing document",
              "Who verifies and records it"
          ],
          "rows": [
              [
                  "Illumination, direct visual examination",
                  "100 foot-candles (about 1,000 lux) minimum, measured at the surface being examined",
                  "ASME BPVC Section V, Article 9",
                  "VT Level II, with a calibrated light meter; source and meter recorded"
              ],
              [
                  "Eye position, direct visual examination",
                  "Within 24 inches (600 mm) of the surface, at an angle of 30 degrees or greater to it",
                  "ASME BPVC Section V, Article 9",
                  "VT Level II, recorded on the examination report"
              ],
              [
                  "Remote visual examination",
                  "Resolution at least equivalent to direct visual examination, demonstrated on the system in use",
                  "ASME BPVC Section V, Article 9",
                  "VT Level III on the written procedure, with the demonstration retained"
              ],
              [
                  "Examiner near-vision acuity",
                  "Jaeger No. 1 type at not less than 12 inches, or an equivalent, one eye or both, natural or corrected",
                  "ASNT SNT-TC-1A, examined annually",
                  "Employer, documented per person on the certification file"
              ],
              [
                  "Examiner colour-contrast differentiation",
                  "Ability to distinguish and differentiate the colours used in the method",
                  "ASNT SNT-TC-1A",
                  "Employer, documented per person on the certification file"
              ],
              [
                  "Undercut, statically loaded structural weld",
                  "1/32 inch maximum, with 1/16 inch permitted for an accumulated 2 inches in any 12 inches of weld",
                  "AWS D1.1 Clause 8",
                  "VT Level II or CWI, measured with a gauge"
              ]
          ],
          "note": "VT is the only NDT method whose acceptance decision is made without an instrument reading of the flaw itself, which is exactly why the codes turn the examiner's eyesight, the light level and the viewing geometry into measurable, auditable quantities. Cyclically loaded connections carry tighter undercut limits than the statically loaded values shown. The employer's Written Practice binds on training hours."
      },
      "facets": [
          {
              "q": "Does an AWS CWI certification replace VT Level II?",
              "a": "No, and the reverse is also false. A CWI covers welding processes, procedure and welder qualification, and code application. A VT Level II is an NDT method certification issued under the employer's Written Practice, which is what ASME BPVC Section V Article 9 work calls for. Employers running both structural and pressure-equipment work hire people holding both credentials."
          },
          {
              "q": "What lighting does ASME Section V require for visual examination?",
              "a": "A minimum of 100 foot-candles, roughly 1,000 lux, measured at the surface being examined — not at the workbench, and not estimated. The light source and the calibrated meter used are recorded on the examination report. Remote visual examination using borescopes, mirrors, fibrescopes or cameras is demonstrated to have resolution at least equivalent to direct visual examination."
          },
          {
              "q": "How often is an NDT examiner's vision tested, and to what standard?",
              "a": "Near-vision acuity is examined annually under SNT-TC-1A: the candidate reads Jaeger No. 1 type at not less than twelve inches, or an equivalent such as Times Roman N-4.5, with one eye or both, natural or corrected. Colour-contrast differentiation is documented separately. Failing the vision examination suspends the certification regardless of how many experience hours are logged."
          },
          {
              "q": "Is visual inspection alone enough to accept a weld under AWS D1.1?",
              "a": "Yes, unless the contract documents specify otherwise. AWS D1.1 requires visual inspection of all welds and makes additional NDT applicable only where the contract designates it. That places the whole acceptance decision on a VT-qualified examiner measuring undercut, reinforcement, profile, porosity and cracking against Clause 8 criteria with gauges rather than by eye."
          },
          {
              "q": "What is the difference between direct and remote visual examination?",
              "a": "Direct visual examination places the examiner's eye within 24 inches of the surface at an angle of 30 degrees or greater. Remote visual examination substitutes mirrors, borescopes, fibrescopes or cameras where access prevents that, and the system is demonstrated to have at least equivalent resolution. Internal examination under API 510, 570 and 653 relies heavily on remote visual."
          },
          {
              "q": "Can a VT Level II give final acceptance on an ASME Section VIII vessel?",
              "a": "A VT Level II performs the examination, evaluates against the acceptance criteria and signs the examination report. Final acceptance of the completed vessel rests with the Authorized Inspector, who signs the Manufacturer's Data Report. The distinction matters on audit: NDT personnel certify examinations, and the Authorized Inspector certifies code compliance of the finished item."
          }
      ]
  },

  "/eddy-current-testing-training": {
      "answer": "ET certification in the US runs under ASNT SNT-TC-1A, which recommends 40 training hours and 210 ET experience hours for Level I, and 40 further training hours with 630 cumulative ET hours for Level II — the same tier as UT and RT. ASME BPVC Section V Article 8 governs tubular product examination.",
      "expansion": "Eddy current carries the same 40-hour classroom recommendation as UT and RT because the interpretation is electromagnetic rather than geometric: the technician reads phase angle and amplitude together on the impedance plane, and phase is what separates a through-wall defect from lift-off. SNT-TC-1A's recommended table lists ET Level I at 40 training hours, 210 hours of ET experience and 400 total NDT hours, and ET Level II at 40 further training hours, 630 cumulative ET hours and 1,200 total NDT hours. Test frequency governs what depth is examinable: standard depth of penetration is the depth at which eddy current density falls to about 37 percent of the surface value, and it decreases as frequency, conductivity or permeability rises. US demand concentrates in two places — heat-exchanger and condenser tube inspection across refining, petrochemical and power generation, and aerospace surface and bolt-hole examination under NAS 410.",
      "source": "ASNT SNT-TC-1A (2020 edition); ASME BPVC Section V, Article 8 and its mandatory appendices for tubular products; ISO 15548-1 and ISO 15548-2 (eddy current equipment characteristics); ASTM E243 Standard Practice for Electromagnetic (Eddy Current) Examination of Copper and Copper-Alloy Tubes; NAS 410 for aerospace personnel qualification.",
      "table": {
          "caption": "Eddy current techniques — what each detects, what it cannot, and the US industry that runs it",
          "columns": [
              "Technique",
              "Detects",
              "Does not detect",
              "Primary US application"
          ],
          "rows": [
              [
                  "Bobbin coil, tube",
                  "Volumetric wall loss, pitting, general thinning and through-wall holes, at full-bundle screening speed",
                  "Circumferential cracking, and flaws masked at tubesheets and support plates without supplementary probes",
                  "Heat exchanger and condenser screening across refining, petrochemical and power generation"
              ],
              [
                  "Array probe, tube",
                  "Axially and circumferentially oriented cracking with positional resolution around the tube circumference",
                  "Outer-diameter wall loss in ferromagnetic tube without magnetic saturation",
                  "Prosecution of bobbin indications; air cooler and steam generator tubing"
              ],
              [
                  "Rotating pancake coil",
                  "Discrete cracks with length and orientation, at the highest spatial resolution of the tube techniques",
                  "Full-length coverage at production speed — inspection rate is a fraction of bobbin",
                  "Confirmation of bobbin calls; nuclear steam generator tubing"
              ],
              [
                  "Surface and pencil probe",
                  "Surface-breaking cracks on non-ferrous, painted and thinly coated components",
                  "Subsurface flaws beyond a few standard depths of penetration; anything under thick ferromagnetic material",
                  "Aerospace airframe and engine component inspection"
              ],
              [
                  "Bolt-hole probe",
                  "Fatigue cracking initiating at fastener holes, with the fastener removed",
                  "Cracks masked by an interference-fit bushing without a qualified technique",
                  "Aircraft structural inspection to the OEM NDT manual"
              ],
              [
                  "Remote field testing",
                  "Wall loss through the full wall of ferromagnetic tube — carbon steel and ferritic stainless",
                  "Small, sharp surface-breaking cracks; RFT is a volumetric wall-loss technique",
                  "Boiler, feedwater heater and carbon-steel exchanger tubing"
              ]
          ],
          "note": "Under SNT-TC-1A the employer's Written Practice names which of these techniques a certificate covers. A conventional ET Level II certificate does not automatically authorise array, rotating-probe or remote field work — each is a sub-method requiring documented training and a practical demonstration on that technique's data. ASME BPVC Section V Article 8 covers tubular products, ASTM E243 covers copper and copper-alloy tube, and ISO 15548 covers equipment characteristics."
      },
      "facets": [
          {
              "q": "Why is eddy current training 40 hours when magnetic particle is 12?",
              "a": "Because ET interpretation is indirect. MT produces a visible indication at the flaw. ET produces a point moving on an impedance plane, and lift-off, conductivity change, permeability change and a real defect each move it along a different path at a different phase angle. Reading amplitude alone fails the practical examination. The classroom hours buy the theory that makes the display legible."
          },
          {
              "q": "Does an ET Level II certificate cover array probes and remote field testing?",
              "a": "No. Conventional ET, array eddy current, rotating-probe examination and remote field testing are separate sub-methods. The employer's Written Practice names which techniques a certificate covers, and adding one requires documented training plus a practical demonstration on that technique's data. Nuclear steam generator work layers site-specific performance demonstration on top of that."
          },
          {
              "q": "How do I choose the eddy current test frequency?",
              "a": "Frequency sets standard depth of penetration, the depth at which current density falls to about 37 percent of the surface value. Penetration falls as frequency, conductivity or permeability rises, so high frequency buys surface resolution and low frequency buys depth. Tube work adds a second constraint: the frequency that cleanly separates outer-diameter from inner-diameter phase response on the reference standard."
          },
          {
              "q": "Can eddy current testing inspect carbon steel?",
              "a": "Not with conventional ET alone — permeability variation in ferromagnetic material swamps the defect signal. Two routes exist. Magnetic saturation coils suppress the permeability response and let conventional or array ET work on ferritic tube. Remote field testing operates through the wall instead and measures volumetric wall loss in carbon steel and ferritic stainless tubing directly."
          },
          {
              "q": "When is IRIS used instead of eddy current for heat exchanger tubes?",
              "a": "When absolute wall thickness is required, when the tube is ferromagnetic or thick-walled, and when eddy current indications need quantifying. IRIS is an ultrasonic internal rotary technique: slower, requiring clean tubes and water coupling, but it measures thickness rather than inferring it. Standard practice screens the full bundle with eddy current and prosecutes a sample with IRIS."
          },
          {
              "q": "Is ASNT ET certification accepted in US aerospace?",
              "a": "Aerospace qualifies personnel under NAS 410 rather than SNT-TC-1A alone, with the employer's NDT Level 3 issuing written method approval per person. On top of that, airframe and engine work requires qualification to the OEM's NDT manual procedure for the specific part and technique — bolt-hole, sliding-probe and conductivity examinations each qualify separately."
          }
      ]
  },

  "/": {
      "answer": "Atlantis NDT runs four lines from Houston, Texas and Hyderabad, India: NDT training and certification to ASNT SNT-TC-1A and ISO 9712, outsourced ASNT Level III consulting, an inspection-management ERP, and a digital twin platform for asset integrity. Fifty-plus certified Level III specialists cover ultrasonic, radiographic, magnetic particle, penetrant, eddy current and visual testing. Founded 2018 by Anoop Rayavarapu.",
      "expansion": "Delivery covers the United States, Canada, the UK, the UAE, Saudi Arabia, Qatar, Singapore, Australia and India. Training runs Level I, II and III across UT, RT, MT, PT, ET and VT plus phased array and TOFD, authored by practising ASNT Level III professionals and carrying a 96% first-attempt pass rate. Consulting supplies outsourced Level III of record, written practice development, procedure development and qualification, API risk-based inspection program design, and fitness-for-service work under API 579. Atlantis ERP is built on 30-plus integrated business apps: work orders, technician certification tracking, calibration management, quoting and invoicing. The Digital Twins platform overlays defect maps, corrosion data and predictive analytics on a navigable 3D asset model, delivered by web or VR/AR. Field capability adds corrosion mapping, phased array UT, tank floor MFL and 3D laser scanning with LiDAR, photogrammetry and drone capture. Affordable, accessible, fully customizable — quote on request.",
      "source": "ASNT SNT-TC-1A (Recommended Practice, Personnel Qualification and Certification in Nondestructive Testing) and ANSI/ASNT CP-189; ISO 9712 (Qualification and Certification of NDT Personnel); ISO 9001:2015 quality management.",
      "table": {
          "caption": "Atlantis NDT segments — what each delivers and which standard governs it",
          "columns": [
              "Segment",
              "What it delivers",
              "Governing framework",
              "Delivery model",
              "Buyer"
          ],
          "rows": [
              [
                  "NDT Training & Certification",
                  "Level I / II / III in UT, RT, MT, PT, ET, VT, PAUT, TOFD; 96% first-attempt pass rate",
                  "ASNT SNT-TC-1A, ANSI/ASNT CP-189, ISO 9712",
                  "Classroom (Houston, Hyderabad, Dubai), on-site corporate cohort, blended online theory",
                  "Inspection contractors, EPCs building crew capability"
              ],
              [
                  "ASNT Level III Consulting",
                  "Outsourced Level III of record, written practices, procedure development and qualification, RBI design, fitness-for-service",
                  "ASME, API 579 / 580 / 581, AWS, ISO, EN",
                  "Remote procedure authoring with Level III sign-off, or on-site",
                  "Asset owners and contractors without an in-house Level III"
              ],
              [
                  "Atlantis ERP",
                  "Work orders, technician certification tracking, calibration management, quoting, invoicing, audit-ready records",
                  "ISO 9001:2015, ISO 17020, ISO 17025, ISO 17024",
                  "Hosted, built on 30+ integrated business apps",
                  "NDT service companies running multi-crew operations"
              ],
              [
                  "Digital Twins",
                  "3D asset visualisation, defect mapping, corrosion overlay, predictive analytics, turnaround planning",
                  "API 580 / 581 RBI tiers, API 579 FFS workflow",
                  "Web or VR/AR",
                  "Refinery, petrochemical and power integrity teams"
              ],
              [
                  "NDT Reporting Software",
                  "Mobile offline field capture, code-aligned templates, client-ready report generation",
                  "ASME Section V method articles; ISO / ASNT report content",
                  "Mobile plus web, offline capable",
                  "Field crews and report reviewers"
              ],
              [
                  "Inspection Services & 3D Scanning",
                  "Corrosion mapping, phased array UT, tank floor MFL, LiDAR and drone as-built capture",
                  "ASME Section V, API 510 / 570 / 653 driven programs",
                  "Mobilisation from Houston, Dubai, Mumbai, Singapore, London hubs",
                  "Operators needing field execution, not software"
              ]
          ],
          "note": "Atlantis NDT publishes no pricing. Scope, region, team size and delivery model set the number; a tailored quote follows a free consultation within 24 hours. Affordable. Accessible. Fully customizable."
      },
      "facets": [
          {
              "q": "Which NDT methods does Atlantis NDT cover?",
              "a": "Ultrasonic, radiographic, magnetic particle, liquid penetrant, eddy current and visual testing form the base six, with phased array ultrasonic testing and time-of-flight diffraction as advanced methods. Field service adds corrosion mapping, tank floor magnetic flux leakage and 3D laser scanning. Every method is backed by ASNT Level III authorship for procedure writing and final disposition on the engagement."
          },
          {
              "q": "Does Atlantis train to ASNT SNT-TC-1A or to ISO 9712?",
              "a": "Both. SNT-TC-1A is employer-based: your Level III certifies your people under your own written practice, which is faster and the North American default. ISO 9712 is central certification issued by an accredited third party, so the certificate travels with the technician between employers. Atlantis writes the written practice for the first route and prepares candidates for the examination on the second."
          },
          {
              "q": "Can Atlantis act as our outsourced ASNT Level III of record?",
              "a": "Yes. Outsourced Level III services cover written practice development, examination administration, procedure development and qualification, and final disposition on inspection results. Remote engagements return procedure authoring and Level III sign-off on a 24-hour turnaround; hybrid engagements pair a local Level II with Atlantis Level III oversight. This is the standard route for a company that has inspection volume but no certified Level III in house."
          },
          {
              "q": "What does the Digital Twins platform do that reporting software does not?",
              "a": "Reporting software produces the record of one examination. The digital twin binds every examination to the asset it describes: thickness readings land on the 3D model at their condition monitoring location, corrosion overlays show wall loss across the surface, and API 580/581 risk tiers and API 579 fitness-for-service workflows run off measured corrosion rates rather than default assumptions. Turnaround planning uses the same model."
          },
          {
              "q": "Where does Atlantis NDT deliver in North America?",
              "a": "Houston, Texas is the operating base for United States work, covering Gulf Coast refining, petrochemical and fabrication clients, with delivery across the United States and Canada. Training runs as instructor-led classes in Houston, as on-site corporate cohorts at client facilities, and as blended online theory with in-person practical assessment. Same-week scheduling applies to inspection and consulting engagements."
          },
          {
              "q": "How do I get a quote from Atlantis NDT?",
              "a": "Book a free consultation. Atlantis publishes no pricing because scope, region, delivery model and team size determine it — an on-site cohort of twenty technicians and a remote procedure package are different engagements entirely. Give headcount, timeline and the codes your contracts name, and a tailored proposal returns within 24 hours. Positioning is affordable, accessible and fully customizable."
          }
      ]
  },

  "/blog/radiographic-testing-complete-guide": {
      "answer": "Select Se-75 below 30 mm steel, Ir-192 from 20 to 75 mm, Co-60 above 50 mm, and a 4 to 15 MeV linear accelerator above 150 mm. ASME Section V Article 2 governs the technique in North America: film density between 2.0 and 4.0 H&D units, signal-to-noise ratio at or above 130 for digital detector arrays, image quality indicator placed source-side.",
      "expansion": "Radiography records differential photon attenuation following Beer-Lambert, I = I0 x e^(-ut), so a void or slag pocket transmits more intensity and prints darker than the parent metal. Three parameters decide whether the shot is code-compliant. Geometric unsharpness Ug = F x t / d must hold at or below 0.5 mm for thickness under 50 mm and 0.76 mm above 100 mm. Density must fall between 2.0 and 4.0 H&D units on film, or signal-to-noise ratio above 130 for a digital detector array under ISO 17636-2 class B. Definition is proved by an image quality indicator placed source-side at the area of interest, moved film-side only where source-side access is impossible and then marked with the letter F. Geometry follows access: single-wall single-image for reachable welds, double-wall single-image on 3 to 3.5 inch pipe, double-wall double-image elliptical at 3 inch and below.",
      "source": "ASME Boiler and Pressure Vessel Code, Section V, Article 2 (Radiographic Examination), with Mandatory Appendix VIII for digital detector arrays; ASTM E94/E94M Standard Guide for Radiographic Examination; ISO 17636-1 (film) and ISO 17636-2 (CR and digital detectors), class A and class B.",
      "table": {
          "caption": "Radiation source selection by steel thickness — US practice",
          "columns": [
              "Source",
              "Energy",
              "Steel thickness range",
              "Half-life",
              "Where it wins"
          ],
          "rows": [
              [
                  "Selenium-75",
                  "320 keV average",
                  "Below 30 mm",
                  "120 days",
                  "Highest contrast on thin wall; smallest exclusion boundary of the common isotopes"
              ],
              [
                  "Iridium-192",
                  "380 keV average",
                  "20 to 75 mm",
                  "74 days",
                  "Pipeline girth welds and process piping; a 36-inch panoramic exposure completes in about 4 minutes"
              ],
              [
                  "Cobalt-60",
                  "1.17 and 1.33 MeV",
                  "Above 50 mm",
                  "5.27 years",
                  "Heavy castings and thick-wall vessels where lower energies will not penetrate"
              ],
              [
                  "X-ray tube, constant potential",
                  "160 / 300 / 450 kV",
                  "Up to about 75 mm",
                  "Not applicable — switchable off",
                  "Shop and fabrication bays; the source is inert between exposures, which removes source-transport licensing"
              ],
              [
                  "Linear accelerator",
                  "4, 6, 9 or 15 MeV",
                  "Above 150 mm, to about 300 mm",
                  "Not applicable",
                  "Reactor pressure vessel girth welds, thick castings, concrete"
              ]
          ],
          "note": "Article 2 sets how the radiograph is made. Acceptance comes from the referencing construction code — ASME B31.3 Table 341.3.2, API 1104 Section 9, or AWS D1.1 Clause 10.21. A crack-like indication is rejectable under all three regardless of length."
      },
      "facets": [
          {
              "q": "Which source do I use on a 25 mm carbon steel pipe weld?",
              "a": "Iridium-192. The 20 to 75 mm band is its working range, and at 380 keV average energy it holds enough contrast at that wall while completing a panoramic exposure in minutes. Selenium-75 gives better contrast but is a below-30 mm source and sits at the edge of usefulness here. Cobalt-60 at 1.17/1.33 MeV over-penetrates 25 mm and loses the density difference that reveals slag."
          },
          {
              "q": "How do I calculate geometric unsharpness before an exposure?",
              "a": "Ug = F x t / d, where F is the focal spot or source size, t is the object-to-film distance, and d is the source-to-object distance. Increase the source-to-film distance or reduce the object-to-film gap to bring Ug down. Code-compliant radiography holds Ug at or below 0.5 mm below 50 mm thickness and 0.76 mm above 100 mm. Verify the number before the shot, not after."
          },
          {
              "q": "When is PAUT the better choice than radiography on a weld?",
              "a": "Above roughly 12 mm wall on pipeline and pressure work. Phased array detects planar flaws — lack of fusion and cracking — that a beam-unfavourable radiograph misses, provides through-wall depth that radiography never gives, needs no evacuation of the area, and scans a 6-inch weld in 1 to 3 minutes against 4 to 10 for RT. Below 8 mm wall and under 4-inch NPS, radiography stays the more economical method."
          },
          {
              "q": "How many training and experience hours does RT Level II require under SNT-TC-1A?",
              "a": "Radiographic testing carries the highest hour requirement of the common methods. Level I calls for 40 hours classroom plus 210 hours of on-the-job experience. Level II adds a further 40 hours classroom and takes cumulative experience to 630 hours. Level III requires passing basic, method and specific examinations plus four years of documented work history. ISO 9712 asks 80 training hours for Level 2 RT against the same 630-hour experience minimum."
          },
          {
              "q": "What radiation boundary must be posted around an Ir-192 exposure?",
              "a": "Two boundaries are posted and surveyed: the high-radiation area at 0.02 mSv/h and the restricted area at 0.0025 mSv/h, established with a calibrated survey meter before the source leaves the camera. In field practice this puts the exclusion zone 60 to 100 m out from an Ir-192 source. The radiographer carries triple dosimetry — OSL badge, electronic dosimeter, and an audible alarming dosimeter set at 2 mSv/h."
          },
          {
              "q": "Is digital radiography worth converting to from film?",
              "a": "For a shop above 4,000 shots per year, the break-even on a four-crew conversion lands at 12 to 20 months. Digital detector arrays remove film, chemistry, darkroom and physical storage, cut consumable spend by about 60% and compress the report cycle by about 70%. Field DR panels image up to 1.5 inch steel in 30 seconds. Computed radiography sits roughly cost-neutral to film while still buying the turnaround gain."
          }
      ]
  },

  "/ndt-training-jubail": {
      "answer": "ASNT Level II is the working ticket in Jubail: contractor packages cite SAEP-1112, SAES-W-012 and the Saudi Aramco 175-series specifications, and CSWIP 3.1 is required for any welding inspection role. Examination and practical facilities operate at Saudi Aramco Jubail Training Center, TUV NORD Saudi Arabia Jubail branch, and Velosi Jubail. Atlantis delivers on-site corporate cohorts, not a walk-in centre.",
      "expansion": "Jubail Industrial City concentrates more petrochemical capacity than any comparable site: SABIC affiliates PetroKemya, SAFCO, Saudi Kayan and Yansab sit side by side on the Royal Commission grid, alongside Sadara, the SATORP refinery, Marafiq power and desalination, and the fabrication yards feeding them. A turnaround runs somewhere in Jubail nearly every month, and each one absorbs hundreds of mobile technicians who must hold current certification. Train against the local work: ultrasonic and radiographic testing for construction and revamp welds, eddy current for exchanger campaigns, ultrasonic thickness and phased array for refining assets, magnetic particle during outages. Certification schemes split two ways. SNT-TC-1A is employer-based and faster; ISO 9712 and PCN are central, and the certificate moves with the technician between employers. Aramco-linked work adds SAES standards and operator-specific approval on top of either route.",
      "source": "ASNT SNT-TC-1A (employer-based written practice route) and ISO 9712 (central certification); Saudi Aramco engineering procedure SAEP-1112 and standard SAES-W-012 as cited in Jubail contractor packages; CSWIP 3.1 issued by TWI.",
      "table": {
          "caption": "Certification routes recognised in the Jubail market",
          "columns": [
              "Route",
              "Issued by",
              "What it qualifies you to do",
              "Portability between employers",
              "Where it is named"
          ],
          "rows": [
              [
                  "ASNT Level II (SNT-TC-1A)",
                  "Your employer, under a written practice approved by a qualified Level III",
                  "Set up, calibrate, interpret against the code and sign the report",
                  "Tied to the employer; re-certification on moving",
                  "The level Jubail contracts actually specify"
              ],
              [
                  "ASNT Level III",
                  "ASNT examination plus documented experience",
                  "Write and approve procedures, qualify Level I and II personnel",
                  "Held by the individual",
                  "Required where an inspection function owns its own written practice"
              ],
              [
                  "ISO 9712 Level 2",
                  "Accredited third-party body after proctored examination",
                  "Same technical scope as Level II, certified centrally",
                  "Travels with the technician",
                  "EPC and international contractor scopes"
              ],
              [
                  "SAEP (Saudi Aramco)",
                  "Saudi Aramco, via approved training centres",
                  "Work on Aramco-linked assets and contracts",
                  "Aramco-specific endorsement",
                  "SAEP-1112 with the Saudi Aramco 175-series specifications"
              ],
              [
                  "CSWIP 3.1",
                  "TWI",
                  "Welding inspection, distinct from NDT method certification",
                  "Travels with the inspector",
                  "Mandatory for any welding inspection role in Jubail"
              ],
              [
                  "PCN Level 2",
                  "BINDT",
                  "Central NDT method certification, European route",
                  "Travels with the inspector",
                  "Alternative central scheme where ISO 9712 is accepted"
              ]
          ],
          "note": "Certification is training hours plus documented experience hours. A candidate already working under supervision progresses faster than a cold start, which is why on-site cohorts sequenced around a shift pattern qualify a crew without stopping the work."
      },
      "facets": [
          {
              "q": "Where can I sit ASNT examinations in Jubail?",
              "a": "Three facilities serve the city. Saudi Aramco Jubail Training Center covers ASNT and SAEP. TUV NORD Saudi Arabia, Jubail branch, covers ASNT and ISO 9712. Velosi Jubail covers ASNT, PCN and ISO 9712. Choose on the scheme your target employer names in its contract, not on proximity — an ISO 9712 certificate and an employer-based SNT-TC-1A certificate are not interchangeable at contract award."
          },
          {
              "q": "Does Atlantis run a walk-in training centre in Jubail?",
              "a": "No. Corporate programmes are delivered on-site at your facility, which is the stronger arrangement for a team because practical specimens can match the crackers and derivative units across the SABIC complexes your people examine. Individuals are served through scheduled cohorts or blended delivery — online theory with supervised practical assessment. For a single candidate on a short timeline, a local provider is sometimes the honest answer."
          },
          {
              "q": "SNT-TC-1A or ISO 9712 for a Jubail contractor role?",
              "a": "Follow the contract. Aramco-linked work runs on SAES standards and Aramco contractor approval, SABIC affiliate plants run their own vendor and inspector approval, and Royal Commission requirements sit over construction — in each case certification means an ASNT-based scheme with operator-specific endorsement. Where both routes circulate, weigh the central ISO 9712 certificate that moves between employers against the faster employer-based SNT-TC-1A route."
          },
          {
              "q": "Which methods should a Jubail technician certify in first?",
              "a": "Ultrasonic and radiographic testing for construction and revamp welds, because turnaround and expansion work in the petrochemical complexes is weld-dominated. Eddy current follows for exchanger tube campaigns. Refining scopes add ultrasonic thickness and corrosion monitoring plus phased array on welds. A candidate who certifies against what local employers actually examine is employable months sooner than one spread thinly across every method."
          },
          {
              "q": "Can a whole crew be certified on-site during a turnaround window?",
              "a": "Yes — that is the core corporate model. Theory and practical are delivered at your site around the shift pattern, examinations are administered under a compliant written practice, and certification records are handed over in a form that survives an audit. Multi-method programmes are sequenced so the crew keeps working while it qualifies. Written practice review and Level III oversight bundle into the same programme."
          },
          {
              "q": "What separates Level I, II and III on a Jubail contract?",
              "a": "Level I performs calibrations and examinations under supervision and is the entry point, reached in one method first. Level II sets up the technique, interprets against the code and signs the report — the level Jubail contracts specify by name. Level III writes and approves procedures and qualifies the Level I and II personnel, which a growing inspection function eventually has to own or engage from outside."
          }
      ]
  },

  "/blog/asme-section-v-article-7-magnetic-particle-mt-requirements-explained": {
      "answer": "ASME Section V Article 7 sets how magnetic particle testing is performed on ferromagnetic materials and defines no acceptance criteria. Acceptance comes from the referencing construction code: ASME Section VIII Division 1 UW-51, ASME B31.3 344.3, AWS D1.1 Clause 8.14, API 1104 Section 9.5. Article 7 recognises seven magnetisation techniques; the yoke lift test is 4.5 kg on AC and 18 kg on DC.",
      "expansion": "Article 7 applies to ferromagnetic materials only — carbon steel, low-alloy steel, ferritic stainless, ductile iron and nickel-iron alloys. Austenitic stainless and aluminium require liquid penetrant testing under Article 6. Detection reaches surface and slightly subsurface discontinuities, 1 to 6 mm deep depending on current type, frequency and material permeability. Current selection drives that depth: alternating current concentrates at the surface through skin effect, penetrating about 0.3 mm in carbon steel at 60 Hz and producing the highest tangential field for fine fatigue cracks, while direct current and half-wave DC distribute through the section to 3 to 6 mm for just-subsurface flaws. Field strength is verified every shift and in every part orientation using an ASTM E709 pie gauge on the part, a Ketos ring for procedure qualification, or a Hall-effect gaussmeter reading at least 30 gauss tangential at the surface during particle build-up.",
      "source": "ASME Boiler and Pressure Vessel Code, Section V, Article 7 (Magnetic Particle Examination), paragraphs T-710 through T-776; ASTM E709 Standard Guide for Magnetic Particle Testing; ASTM E1444/E1444M Standard Practice for Magnetic Particle Testing.",
      "table": {
          "caption": "Article 7 magnetisation techniques — selection and constraint",
          "columns": [
              "Technique",
              "Article 7 reference",
              "Current type",
              "Field produced",
              "Where it is used",
              "Main constraint"
          ],
          "rows": [
              [
                  "Yoke",
                  "T-721.1",
                  "AC or DC",
                  "Longitudinal, between poles spaced 75 to 300 mm",
                  "The dominant field technique on pressure equipment and in-service welds",
                  "Lift test must pass: 4.5 kg on AC, 18 kg on DC, verified each shift"
              ],
              [
                  "Prods",
                  "T-721.2",
                  "AC, HWDC or DC",
                  "Circular field around each contact point",
                  "Heavy fabrication and structural weld work",
                  "Arc burn risk; copper or brass tips, controlled contact, post-test grinding of contact areas"
              ],
              [
                  "Central conductor",
                  "T-721.3",
                  "AC or DC through a non-magnetic bar",
                  "Circumferential, around the bore",
                  "Bolts, hollow castings, short pipe sections",
                  "Part must be hollow and fit over the conductor"
              ],
              [
                  "Cable wrap / coil",
                  "T-720 series",
                  "HWDC",
                  "Longitudinal along the part axis",
                  "Long pipe lengths and large vessels",
                  "Field falls off with distance from the coil; multiple shots required"
              ],
              [
                  "Multidirectional",
                  "T-721.5",
                  "Sequenced AC and DC",
                  "Longitudinal and circumferential simultaneously",
                  "Production bench units in a shop",
                  "Requires demonstration in every orientation being claimed"
              ]
          ],
          "note": "Field-strength verification under T-754 and T-764 is the most-rejected Article 7 audit point. Verify on every shift and in every part orientation, and record the pie gauge or gaussmeter result with the technique sheet."
      },
      "facets": [
          {
              "q": "If Article 7 has no acceptance criteria, where do they come from?",
              "a": "From the construction code that references it. ASME Section VIII Division 1 UW-51 rejects all cracks and permits linear indications to 1/16 inch and rounded to 1/8 inch. ASME B31.3 344.3 with Table 341.3.2A tightens for Category M and Severe Cyclic service. AWS D1.1 Clause 8.14 sets length limits by weld thickness. API 1104 Section 9.5 defines pipeline acceptance per joint thickness."
          },
          {
              "q": "Should I use AC or DC to find a surface fatigue crack?",
              "a": "AC. Alternating current concentrates near the conductor surface through skin effect, penetrating roughly 0.3 mm in carbon steel at 60 Hz, which drives the tangential field at the surface as high as it goes and makes tight fatigue cracks reveal strongly. DC and half-wave DC spread current through the cross-section to 3 to 6 mm — the right choice for just-subsurface inclusions and incomplete-penetration root flaws, and the wrong one for fine surface cracking."
          },
          {
              "q": "Pie gauge or Ketos ring — which does Article 7 require?",
              "a": "Both, for different purposes. The ASTM E709 pie gauge verifies the technique on the actual part being examined, every shift and every orientation: all eight slots must reveal particle build-up. The Ketos or Betz ring qualifies the procedure, proving the technique resolves known reference flaws at known depths — commonly three holes for medium sensitivity and five or more for high. Most fabrication specifications call for both."
          },
          {
              "q": "Can I run magnetic particle testing on a stainless steel weld?",
              "a": "Only on ferritic grades such as 410 and 430. Austenitic 304 and 316 are non-magnetic and will not support a field — use liquid penetrant testing under Article 6 instead. Duplex grades such as 2205 and 2507 are partly ferritic, so MT can produce indications, but penetrant is the defensible choice because field strength across a two-phase microstructure is not reliably demonstrable."
          },
          {
              "q": "What lighting does Article 7 require for fluorescent versus visible particles?",
              "a": "Visible-particle examination requires 100 foot-candles, equal to 1000 lux, of white light at the examination surface, verified with a photometer. Fluorescent examination requires ambient light at or below 2 foot-candles plus at least 1000 microwatts per square centimetre of UV-A at the surface, verified with a radiometer, and the inspector dark-adapted for five minutes before reading. Record both verifications on the technique sheet."
          },
          {
              "q": "When is demagnetisation mandatory after magnetic particle testing?",
              "a": "When residual magnetism would interfere with a downstream operation — machining, welding, or assembly where a magnetised part deflects an arc or holds swarf. Methods are AC step-down with a gradually reducing field, DC reversal with step-down, or thermal treatment above the Curie point at 770 C for carbon steel, which is rarely practical. Verify with a field indicator; 3 gauss residual is the common ceiling for parts to be re-welded or machined."
          }
      ]
  },

  "/api-653-india": {
      "answer": "API 653 examinations in India run through Prometric centres in Mumbai, Hyderabad, Delhi NCR, Chennai, Bangalore, Pune, Kolkata and Ahmedabad. Register on api.org 8 to 12 weeks before your preferred window; Mumbai and Hyderabad hold the best slot availability. Certified tank inspectors earn Rs 8L to Rs 14L at 1 to 3 years post-certification and Rs 22L to Rs 32L at 7 to 12 years.",
      "expansion": "API 653 covers aboveground storage tanks built to API 650 — low-pressure storage assets where the inspection burden sits on the floor and shell rather than on process internals. Day-to-day work is floor magnetic flux leakage scanning, shell-course ultrasonic thickness, settlement surveys, vacuum-box testing of floor welds, cathodic protection assessment, and remaining-life calculation against API 653 retirement criteria. India's 200-plus MMTPA refining capacity puts thousands of operating tanks across IOCL, BPCL and HPCL marketing terminals, refinery crude and product storage, and third-party tank farms — each on a 5-year external and 10-year internal cycle. That fixed calendar makes API 653 work more schedulable than API 510 vessel or API 570 piping inspection, which run continuously against process units and transfer lines. Senior fixed-equipment roles at refineries holding all three asset classes stack the certifications.",
      "source": "API 653, Tank Inspection, Repair, Alteration, and Reconstruction, with API 650 as the construction basis; API Individual Certification Programs (ICP), examinations administered through Prometric test centres.",
      "table": {
          "caption": "API 653 tank inspector compensation in India by experience band",
          "columns": [
              "Experience band",
              "India permanent (per annum)",
              "India contract",
              "Employer tier",
              "Common certification stack"
          ],
          "rows": [
              [
                  "Junior, 1 to 3 years post-certification",
                  "Rs 8L to Rs 14L",
                  "Rs 40K to Rs 65K per month",
                  "TPI trainee desks, EPC site inspection",
                  "API 653 alone"
              ],
              [
                  "Mid-level, 3 to 7 years",
                  "Rs 14L to Rs 22L",
                  "Rate negotiated per campaign",
                  "Terminal and refinery operators, third-party inspection",
                  "API 653 plus ASNT Level II UT"
              ],
              [
                  "Senior, 7 to 12 years",
                  "Rs 22L to Rs 32L",
                  "Rate negotiated per campaign",
                  "Refinery fixed-equipment teams",
                  "API 653 with API 510 and/or API 570 stacked"
              ],
              [
                  "Lead / Principal, 12-plus years",
                  "Rs 32L to Rs 50L and above",
                  "Rate negotiated per campaign",
                  "Operator integrity leadership, TPI principal roles",
                  "API 653 plus API 510/570 plus ASNT Level III"
              ],
              [
                  "Gulf rotation, Indian passport holder",
                  "USD 80K to USD 135K tax-free plus housing",
                  "Rotational contract",
                  "ARAMCO terminal programmes, ADNOC export terminals",
                  "API 653, often with ASNT Level II or III"
              ]
          ],
          "note": "Figures are market compensation bands for certified inspectors, not Atlantis rates. The Gulf rotation uplift is the single largest step in the table and is the reason experienced Indian tank inspectors leave domestic terminal roles."
      },
      "facets": [
          {
              "q": "Where can I sit the API 653 examination in India?",
              "a": "Prometric administers API examinations at centres in Mumbai, Hyderabad, Delhi NCR, Chennai, Bangalore, Pune, Kolkata and Ahmedabad. Register through api.org 8 to 12 weeks ahead of your preferred window, since slots close early — Mumbai and Hyderabad carry the widest availability. Prometric handles ID verification, scratch-pad provision and printed code-book inspection on exam day under API policy."
          },
          {
              "q": "What does an API 653 inspector actually do day to day?",
              "a": "Floor magnetic flux leakage scanning to find underside corrosion, shell-course ultrasonic thickness readings, settlement surveys against API 653 tolerance, vacuum-box testing of floor lap welds, cathodic protection assessment, and remaining-life calculation against retirement thickness. The output is a disposition: continue in service to a calculated next inspection date, repair, or take out of service. Floor and shell dominate the workload, not internals."
          },
          {
              "q": "Which Indian employers hire API 653 tank inspectors?",
              "a": "Operator side: Indian Oil, the largest tank-farm operator with 20-plus marketing terminals nationwide, plus BPCL and HPCL terminals, Reliance Jamnagar tank farms, Adani port terminals, Vopak third-party storage, GAIL LPG bullets and Petronet LNG cryogenic tanks. Third-party inspection: Bureau Veritas, TUV India, TUV Rheinland, DNV, Lloyd's Register, SGS, Apave, Velosi. EPC: L&T Hydrocarbon, Tata Projects, Engineers India Ltd, Petrofac India."
          },
          {
              "q": "How much more does a Gulf rotation pay than an India-domestic tank role?",
              "a": "USD 80K to USD 135K tax-free plus housing on ARAMCO terminal programmes and ADNOC export terminals, against Rs 22L to Rs 32L for the equivalent 7-to-12-year domestic role. The gap is roughly two to four times on a post-tax basis once housing is counted. It is the dominant reason experienced Indian API 653 holders rotate out rather than progress inside a domestic terminal organisation."
          },
          {
              "q": "What are the API 653 external and internal inspection intervals?",
              "a": "Aboveground storage tanks run a 5-year external inspection cycle and a 10-year internal cycle, with the internal interval extended or shortened by measured corrosion rate and remaining thickness rather than left at the default. That fixed calendar is what makes API 653 work plannable: a terminal knows years ahead which tanks come out of service and when, unlike API 510 vessel and API 570 piping programmes tied to turnaround windows."
          },
          {
              "q": "Should I stack API 510 or API 570 with API 653?",
              "a": "Stack them for senior fixed-equipment roles at refineries, which hold vessels, piping and tanks in one asset register and prefer one inspector who can disposition all three. API 653 alone is sufficient for marketing terminals and third-party tank farms, where storage is the only asset class. Inspectors at the Rs 22L-and-above band commonly hold API 653 with API 510, API 570, or both."
          }
      ]
  },

  "/blog/asme-section-v-article-6-liquid-penetrant-pt-requirements-explained": {
      "answer": "Article 6 permits six penetrant combinations — Type I fluorescent or Type II visible dye, each removed by Method A water wash, Method B post-emulsifier, or Method C solvent. Minimum penetrant dwell is 5 minutes, doubled below 16 °C; developer dwell never runs shorter than penetrant dwell. Acceptance limits come from the construction code, not Article 6.",
      "expansion": "US pressure-equipment work runs Type II Method C — solvent-removable visible dye from aerosol cleaner, penetrant and non-aqueous developer — because it needs no water source, no dark booth and no power. Surface temperature must sit between 5 °C and 50 °C; outside that window Article 6 requires a penetrant qualified under Mandatory Appendix III. Excess penetrant is wiped with a lint-free cloth dampened with remover, never sprayed — spraying flushes penetrant out of the crack and produces the false negative that dominates PT failures. Water-washable removal uses a ≤50 psi, ≤43 °C spray at 30° to the surface. Developer goes on as a light uniform coat from 15–30 cm and dwells 7 to 60 minutes. Visible-dye evaluation needs 100 fc (1,000 lux) at the surface; fluorescent evaluation needs ≥1,000 µW/cm² UV-A, ambient white light ≤2 fc, a 5-minute lamp warm-up and 5 minutes of inspector dark adaptation.",
      "source": "ASME BPVC Section V, Article 6 — Liquid Penetrant Examination, T-610 through T-680, with penetrant families qualified to ASTM E165/E165M. Acceptance criteria from the referencing construction code: ASME BPVC Section VIII Division 1 UW-51, ASME B31.3 para. 344.4 with Table 341.3.2A, AWS D1.1/D1.1M Clause 8 and Annex M.",
      "table": {
          "caption": "Article 6 penetrant process combinations — removal, viewing condition and where each is used in US practice",
          "columns": [
              "Type × Method",
              "Excess-penetrant removal",
              "Viewing condition",
              "Where it is used (US practice)"
          ],
          "rows": [
              [
                  "Type II / Method C — visible dye, solvent-removable",
                  "Lint-free cloth dampened with solvent remover",
                  "100 fc (1,000 lux) white light at the surface",
                  "The field workhorse: aerosol kits on B31.3 piping and ASME VIII welds"
              ],
              [
                  "Type I / Method A — fluorescent, water-washable",
                  "Low-pressure water spray, ≤50 psi (350 kPa), ≤43 °C, 30° to surface",
                  "UV-A ≥1,000 µW/cm²; ambient white light ≤2 fc",
                  "High-volume shop lines, castings and forgings"
              ],
              [
                  "Type I / Method B — fluorescent, post-emulsifiable",
                  "Hydrophilic or lipophilic emulsifier applied after dwell, then water rinse",
                  "UV-A ≥1,000 µW/cm² in a dark booth",
                  "Aerospace — highest sensitivity of the six combinations"
              ],
              [
                  "Type I / Method C — fluorescent, solvent-removable",
                  "Lint-free cloth dampened with solvent remover",
                  "UV-A ≥1,000 µW/cm² from a portable lamp",
                  "Field fluorescent work at height and in confined spaces"
              ],
              [
                  "Type II / Method A — visible dye, water-washable",
                  "Low-pressure water spray",
                  "100 fc (1,000 lux) white light",
                  "Shop work with no UV booth available"
              ],
              [
                  "Type II / Method B — visible dye, post-emulsifiable",
                  "Emulsifier applied after dwell, then water rinse",
                  "100 fc (1,000 lux) white light",
                  "Permitted by Article 6; rare in US pressure work"
              ]
          ],
          "note": "Penetrant dwell: 5 minutes minimum, up to 60 minutes for tight fatigue cracks and stress corrosion cracking, doubled below 16 °C. Surface window 5–50 °C; outside it a penetrant qualified under Mandatory Appendix III is required. Dwell must be documented for every shot. Sensitivity level (½ through 4) is a property of the penetrant family under ASTM E165, not of Article 6."
      },
      "facets": [
          {
              "q": "How long does the developer have to stay on before I read the part?",
              "a": "7 to 60 minutes, and never less than the penetrant dwell that preceded it. The developer pulls trapped penetrant back out of the discontinuity, and indication width grows with defect depth across that period. Reading early misses tight cracks; reading past 60 minutes lets indications bleed until length measurement against the code limit is unreliable."
          },
          {
              "q": "What UV-A intensity does fluorescent PT require, and how do I prove it?",
              "a": "1,000 µW/cm² minimum at the examination surface in the 320–400 nm band, measured with a calibrated radiometer after a 5-minute lamp warm-up. Ambient white light stays at or below 2 fc (20 lux), and the inspector dark-adapts for 5 minutes before reading. Light verification is the second most common audit finding, behind missing dwell records."
          },
          {
              "q": "Can PT be performed below 5 °C?",
              "a": "Yes — with a penetrant qualified for low temperature under Mandatory Appendix III, or by locally heating the surface back into the 5–50 °C window. Between 5 °C and 16 °C a standard penetrant still runs, but the documented dwell doubles because rising viscosity slows capillary flow into tight cracks. The qualification authorises the deviation, not the inspector's judgement."
          },
          {
              "q": "Who decides whether a PT indication is rejectable?",
              "a": "The construction code, not Article 6. ASME VIII Div 1 UW-51 rejects all cracks, linear indications 1.5 mm and longer, and rounded indications 5 mm and larger. AWS D1.1 rejects cracks and linear indications over 1/16 in. on weld surfaces. B31.3 tightens limits for Severe Cyclic and Category M service. Article 6 governs technique only."
          },
          {
              "q": "What has to be in the PT record for a client audit?",
              "a": "Penetrant, remover and developer batch and lot numbers; the documented penetrant and developer dwell; surface temperature; white-light or UV-A readings with the meter's calibration certificate; the inspector's SNT-TC-1A or ISO 9712 Level II PT certification; a sketch locating every indication; and the accept/reject call cited against the named construction code clause."
          },
          {
              "q": "Why is over-washing the leading cause of missed cracks?",
              "a": "Water above 50 psi, above 43 °C, or aimed normal to the surface drives water into the discontinuity and flushes the penetrant back out, so no developer bleed forms and the crack reads clean. Solvent remover sprayed straight onto the part does the same thing. Wiping with a dampened lint-free cloth is the controlled alternative."
          }
      ]
  },

  "/blog/asnt-snt-tc-1a-vs-cp-189-comparison": {
      "answer": "CP-189 is an ANSI-approved consensus standard written in \"shall\" language and requiring ASNT-administered general and specific examinations. SNT-TC-1A is a recommended practice written in \"should\" language, where the employer writes or selects its own exams. In US oil and gas, API 510, 570 and 653 default to SNT-TC-1A; nuclear NQA-1 and defense programs specify CP-189. Both carry 2020 editions.",
      "expansion": "The obligation lands on the employer either way: both documents require a written practice, and neither certifies anyone by itself — the employer's Level III does. Under SNT-TC-1A the written practice can depart from the recommendations where the deviation is documented and justified, so two contractors on one refinery can hold different training hours, different exam banks and different experience credits and both be compliant. Under CP-189 every \"shall\" is binding: ASNT supplies the general and specific examinations, the employer supplies only the practical, minimum training hours cannot be reduced, and Level III certification requires ASNT examination. Recertification runs at intervals not exceeding five years under both, but CP-189 makes re-examination mandatory — accumulated experience alone does not renew a certificate. Certifications under either document lapse the moment the holder changes employer, though CP-189's standardised exams make requalification faster.",
      "source": "ASNT Recommended Practice No. SNT-TC-1A (2020 edition, first published 1966) and ANSI/ASNT CP-189, Standard for Qualification and Certification of Nondestructive Testing Personnel (2020 edition, first published 1991), read against ASME BPVC Section V Article 1, API 510 11th edition, API 570, API 653 and AWS D1.1/D1.1M Clause 8.",
      "table": {
          "caption": "Which personnel-qualification document your code or client actually names — US practice first",
          "columns": [
              "Referencing code or client program",
              "Personnel document named",
              "Who writes the general and specific exams",
              "Employer latitude"
          ],
          "rows": [
              [
                  "API 510 / 570 / 653 owner-user inspection programs",
                  "SNT-TC-1A",
                  "Employer's NDT Level III",
                  "High — the written practice sets hours and exam content"
              ],
              [
                  "AWS D1.1 structural welding",
                  "SNT-TC-1A",
                  "Employer's NDT Level III",
                  "High"
              ],
              [
                  "ASME BPVC Section V, Article 1",
                  "SNT-TC-1A or CP-189, both accepted",
                  "Employer (TC-1A) or ASNT (CP-189)",
                  "Set by the referencing construction code or purchase spec"
              ],
              [
                  "ASME Section III with NQA-1 (nuclear)",
                  "CP-189 or equivalent",
                  "ASNT",
                  "None on \"shall\" requirements"
              ],
              [
                  "DoD and defense prime specifications",
                  "CP-189, increasingly referenced",
                  "ASNT",
                  "None on \"shall\" requirements"
              ],
              [
                  "EPC and asset-owner contract specifications",
                  "Whichever the contract names",
                  "Per the named document",
                  "Zero — the contract governs"
              ]
          ],
          "note": "ASNT NDT Level III and ACCP certificates are issued by ASNT and travel with the individual. SNT-TC-1A and CP-189 certificates are issued by the employer and stop at the employer's door. ISO 9712 is the third-party-certification equivalent used outside North America."
      },
      "facets": [
          {
              "q": "Does CP-189 replace SNT-TC-1A?",
              "a": "No. Both are current at their 2020 editions and ASME Section V Article 1 accepts either. CP-189 was published in 1991 to answer inconsistent SNT-TC-1A implementation across employers, not to withdraw it. Oil and gas, petrochemical and structural steel stayed on SNT-TC-1A; nuclear and defense moved to CP-189. Employers serving both markets run one written practice satisfying the stricter document."
          },
          {
              "q": "Who is allowed to certify Level I and Level II technicians?",
              "a": "The employer's NDT Level III, under both documents. Under SNT-TC-1A that Level III can be qualified by employer examination; under CP-189 the Level III must hold ASNT examination results. A Level III can certify only in methods they are themselves qualified in — signing outside your own method list is one of the most frequent audit findings raised against personnel programs."
          },
          {
              "q": "How often do NDT personnel have to be recertified?",
              "a": "At intervals not exceeding five years under both documents. SNT-TC-1A leaves the mechanism flexible, so continued satisfactory performance plus the Level III's evaluation can renew a certificate. CP-189 requires re-examination — time served does not renew. Near-vision acuity is tested annually under both, and a lapsed vision test invalidates every certificate that depends on it."
          },
          {
              "q": "Can one written practice cover both documents?",
              "a": "Yes — write to CP-189's mandatory requirements and note where each clause also satisfies SNT-TC-1A. The practice then survives an audit against either. The cost is permanent: ASNT-sourced examinations, fixed minimum training hours and full record retention then apply to every technician, including those working only API and AWS scopes where SNT-TC-1A alone would suffice."
          },
          {
              "q": "Are these certifications portable to a new employer?",
              "a": "No. Both documents place certification with the employer, so a technician who resigns starts requalification on day one at the new company. CP-189's ASNT-administered general and specific exam results shorten that path because the new employer can credit them. ASNT NDT Level III, ACCP and ISO 9712 certificates are the portable alternatives, since a certifying body issues them."
          },
          {
              "q": "What do auditors keep finding against personnel qualification programs?",
              "a": "Written practices describing a program the company no longer runs; incomplete or missing training records; vision tests past twelve months; expired certificates still on the dispatch list; exam papers not retained; Level IIIs certifying in methods they are not qualified in; and technicians performing methods they hold no certificate in. Every one is a records failure, not a competence failure."
          }
      ]
  },

  "/blog/api-510-body-of-knowledge-2026-changes-explained": {
      "answer": "The September 2025 Body of Knowledge governs every API 510 sitting from January 2026 through May 2027. It moved damage mechanisms (API 571) from 12% to 16% and RBI (API 580/581) from 6% to 8%, expanded API 579-1 Part 4 and Part 5 sub-topics, added PAUT and ASME IX QW-322 welder-qualification renewal, and locked ASME VIII Div 1 to the 2023 edition.",
      "expansion": "150 questions across 6 hours 15 minutes, both parts sat in one session at a Prometric centre: Part 1 closed-book is 70 questions in 2 hours 45 minutes, Part 2 open-book is 80 questions in 3 hours 30 minutes. That is 2 minutes 22 seconds per closed-book question and 2 minutes 37 seconds per open-book question. The twelve permitted references must match the editions the BoK names — API 510 11th edition with 1st Addendum, ASME VIII Div 1 2023, API 571 4th edition, API 579-1/ASME FFS-1 2021 — and a proctor inspects them at check-in. Tabs, highlighting and underlining are allowed; written sticky notes, loose paper and electronics are not. The 2023 ASME VIII Div 1 renumbered paragraphs and consolidated appendices, so tab indexes built on the 2021 edition point at the wrong pages and need eight to ten hours of retabbing before the first timed practice exam.",
      "source": "API Individual Certification Programs (ICP), API 510 Pressure Vessel Inspector Certification Body of Knowledge, September 2025 edition, effective for exams January 2026 through May 2027; superseding the March 2024 BoK. Effective references include API 510 11th edition (May 2022) + 1st Addendum (May 2024), ASME BPVC Section VIII Division 1 (2023), API RP 571 4th edition (April 2024), API 579-1/ASME FFS-1 (2021).",
      "table": {
          "caption": "API 510 2026 exam load by subject area — question counts per part and what the September 2025 BoK changed",
          "columns": [
              "Subject area",
              "Effective reference edition",
              "Part 1 closed-book Qs",
              "Part 2 open-book Qs",
              "Change vs March 2024 BoK"
          ],
          "rows": [
              [
                  "API 510 in-service code",
                  "11th ed. (May 2022) + 1st Addendum (May 2024)",
                  "~15",
                  "~22",
                  "Repair/alteration weight down slightly"
              ],
              [
                  "Damage mechanisms",
                  "API RP 571, 4th ed. (April 2024)",
                  "~12",
                  "—",
                  "12% → 16%; DMW cracking added, HTHA thresholds revised"
              ],
              [
                  "Pressure vessel design",
                  "ASME BPVC VIII Div 1 (2023)",
                  "~10",
                  "~16",
                  "Appendices consolidated, paragraphs renumbered"
              ],
              [
                  "Fitness-for-service",
                  "API 579-1/ASME FFS-1 (2021)",
                  "—",
                  "~12",
                  "Part 4 (general metal loss) and Part 5 (local metal loss) expanded"
              ],
              [
                  "NDE methods",
                  "ASME BPVC Section V (2023)",
                  "~8",
                  "~10",
                  "PAUT added; deprecated acceptance criteria removed"
              ],
              [
                  "Welding and qualification",
                  "ASME BPVC Section IX (2023); API RP 577 3rd ed. (Dec 2022)",
                  "~8",
                  "~8",
                  "QW-322 welder-qualification renewal added"
              ],
              [
                  "Risk-based inspection",
                  "API RP 580 4th ed. (Feb 2024); API RP 581 4th ed.",
                  "—",
                  "~6",
                  "6% → 8%"
              ],
              [
                  "Relief devices and PMI",
                  "API RP 576 4th ed. (Aug 2024); API RP 578 3rd ed. (Oct 2023)",
                  "—",
                  "~6",
                  "Unchanged"
              ]
          ],
          "note": "150 questions total. The closed-book counts above sum to 53; the remaining ~17 closed-book questions cover cross-code interactions. Reported first-attempt pass rates from the January–March 2026 sittings ran 38–42%, against a 45–50% historical range under the March 2024 BoK."
      },
      "facets": [
          {
              "q": "Can I bring the API 510 10th edition into the exam?",
              "a": "No. The September 2025 BoK names API 510 11th edition (May 2022) with the 1st Addendum (May 2024), and proctors inspect references at check-in. The 11th edition revised inspection-interval methodology, rerating procedures and hot-tapping requirements; the Addendum clarified Section 5 owner-user program requirements. An 11th edition without the Addendum is an incomplete reference set."
          },
          {
              "q": "What happens if API publishes a new BoK between my registration and my exam date?",
              "a": "The BoK in force on your sitting date governs, not the one in force when you registered. Reschedule or re-tab — carrying an edition the current BoK does not name is a disqualification at the testing centre. API pre-announces changes 60–90 days ahead through the ICP website and candidate email, and that window is when to decide."
          },
          {
              "q": "Why did pass rates fall under the 2026 BoK?",
              "a": "Three structural shifts. API 579-1 now carries 12 open-book questions demanding multi-step Part 4 and Part 5 Level 1 and Level 2 work with RSF and tmin calculations, each running 4–6 minutes. API 571 4th edition renumbered mechanisms and revised HTHA threshold data. ASME VIII Div 1 2023 renumbered paragraphs, breaking tab indexes built on the 2021 edition."
          },
          {
              "q": "How many study hours does the 2026 BoK take?",
              "a": "350–450 hours over 15 weeks: two weeks on API 510 itself, two on ASME VIII Div 1 (UG-22 to UG-45, UCS, UW, Mandatory Appendix 1), two on the top 20 API 571 mechanisms, two on API 579-1 Parts 1, 2, 4, 5 and 9, one on API 576/577/578, one on ASME V and IX, one on API 580/581 and 572, three on timed practice exams, one on tabbing."
          },
          {
              "q": "What separates a closed-book question from an open-book one?",
              "a": "Closed-book questions test recall — naming the mechanism that produces stepwise cracking in carbon steel in wet H2S service, for instance. Open-book questions test lookup plus arithmetic: applying UG-27(c)(1) to get required shell thickness, or comparing a calculated RSF against RSFa for a Part 5 Level 1 assessment. The 2026 BoK shifted weight toward the calculation format."
          },
          {
              "q": "When does the next API 510 BoK take effect?",
              "a": "API's publication cycle runs 18–24 months, putting the next BoK at Q2 2027 and effective for sittings from July 2027 forward. The September 2025 BoK governs through May 2027. Sitting before that date avoids re-studying; moving past it means budgeting another 40–60 hours, with API 579-1 and ASME VIII Div 1 absorbing the largest updates between cycles."
          }
      ]
  },

  "/blog/api-570-inspector-salary-2026-by-region-experience": {
      "answer": "USA median base for an API 570 piping inspector in 2026 is $95,000, on a 10th-to-90th-percentile band of $75,000 to $140,000. The certification adds $25,000–$45,000 a year over an uncertified ASNT Level II doing the same piping work — a 35–50% uplift. Turnaround premiums, per diem and overtime add another 20–50% on top of base.",
      "expansion": "The premium is structural rather than reputational: API 570 confers authority to approve piping repairs, alterations and re-ratings and to set inspection intervals, and owner-operators must staff that authority. Against annual demand of 5,000–6,000, only 3,500–4,500 new certifications are issued worldwide each year. Canada tracks the US closely at C$85,000 to C$195,000 across the four experience tiers. Within the US, sector matters more than title: offshore platforms pay $125,000–$185,000 and LNG $115,000–$165,000, while midstream, power and onshore upstream sit at $85,000–$125,000. Gulf of Mexico rotations on 14/14 or 21/21 schedules run $130,000–$190,000 plus per diem. The compounding move is the Triple Crown — API 510 plus 570 plus 653 — held by an estimated 8,000–12,000 people worldwide and worth 15–25% over single-certification pay. Sequenced over three to five years, that path returns more per study hour than any other credential in inspection.",
      "source": "Industry compensation benchmarks compiled across ten regions and four experience tiers from operator, EPC and staffing-agency offers, cross-checked against API Individual Certification Programs (ICP) issuance volumes for API 510, 570 and 653. All figures are third-party industry estimates and do not represent Atlantis NDT pricing.",
      "table": {
          "caption": "API 570 piping inspector base pay by experience tier — USA and Canada first, with the multipliers that sit on top",
          "columns": [
              "Experience / certification status",
              "USA base (USD)",
              "Canada base (CAD)",
              "Role",
              "Multiplier that applies"
          ],
          "rows": [
              [
                  "ASNT Level II, no API 570",
                  "$58,000–$78,000",
                  "—",
                  "NDT Technician",
                  "None — cannot approve repairs or set intervals"
              ],
              [
                  "0–3 yrs certified",
                  "$78,000–$95,000",
                  "C$85,000–C$105,000",
                  "Inspector II",
                  "Turnaround overtime and per diem, +20–50%"
              ],
              [
                  "4–7 yrs",
                  "$95,000–$115,000",
                  "C$105,000–C$130,000",
                  "Senior Inspector",
                  "Offshore rotation, +25–50% over onshore"
              ],
              [
                  "8–15 yrs",
                  "$115,000–$140,000",
                  "C$130,000–C$160,000",
                  "Lead Inspector / Inspection Supervisor",
                  "LNG and offshore sector premium"
              ],
              [
                  "15+ yrs",
                  "$140,000–$170,000",
                  "C$160,000–C$195,000",
                  "Inspection Manager",
                  "Asset Integrity Manager track to $240,000+"
              ],
              [
                  "Triple Crown (API 510 + 570 + 653)",
                  "$130,000–$180,000+",
                  "—",
                  "Multi-discipline Authorized Inspector",
                  "+15–25% over single certification"
              ]
          ],
          "note": "USA distribution detail: 10th percentile $75,000, median $95,000, 75th percentile $118,000, 90th percentile $140,000+, top 5% above $165,000 (Gulf Coast refining, Triple Crown holders, manager track). Base excludes turnaround premiums, per diem, overtime and bonus, which add 20–50% to total compensation. Third-party industry benchmarks, not Atlantis NDT rates."
      },
      "facets": [
          {
              "q": "How much does API 570 add over an uncertified ASNT Level II?",
              "a": "$25,000 to $45,000 a year in the USA. An uncertified Level II performing piping inspection earns $58,000–$78,000; the same person holding API 570 commands $85,000–$120,000, a 35–50% uplift. The gap holds because the certificate carries authority no uncertified technician can exercise — approving repairs, alterations and re-ratings, and setting RBI inspection intervals the owner-operator is legally required to staff."
          },
          {
              "q": "Which US sectors pay API 570 inspectors the most?",
              "a": "Offshore platforms lead at $125,000–$185,000, then LNG at $115,000–$165,000 and petrochemical at $100,000–$145,000. Refining runs $95,000–$135,000. Midstream, power and onshore upstream trail at $85,000–$125,000. Gulf of Mexico rotations on 14/14 or 21/21 schedules reach $130,000–$190,000 with per diem, reflecting rotation logistics and a constrained inspector pool."
          },
          {
              "q": "Do tax-free Gulf packages actually beat US pay?",
              "a": "For experienced inspectors, yes. Saudi Arabia, UAE and Qatar packages of $110,000–$180,000 USD arrive tax-free, with housing, schooling and flights attached, against a taxed US median of $95,000. Qatar tops the three at $180,000–$225,000 for 15+ year inspectors. The trade is residency, rotation schedule, and the loss of US employer retirement contributions."
          },
          {
              "q": "How does an API 570 inspector clear $250,000?",
              "a": "By layering income onto a base role instead of chasing a larger salary. Turnaround callouts bill $1,000–$1,500 per day, so a 30–60 day shutdown returns $40,000–$90,000. Expert-witness work bills $400–$800 per hour, training instruction $1,500–$3,500 per day, procedure and RBI review $200–$350 per hour. Two or three streams on a $120,000 base pass $250,000."
          },
          {
              "q": "What do independent API 570 consultants bill?",
              "a": "$600–$900 per day for standard contract inspection, $900–$1,400 per day as turnaround lead, $1,200–$1,800 per day for RBI program development, and $1,200–$2,200 per day offshore plus per diem. At 60–70% utilisation that spans $130,000–$280,000 a year, with top independents above $300,000. These are third-party industry rates, not Atlantis NDT rates."
          },
          {
              "q": "What does the career progression look like, and how long does it take?",
              "a": "Inspector II ($75,000–$95,000) to Senior Inspector ($95,000–$120,000) to Lead Inspector ($115,000–$140,000) to Inspection Supervisor ($130,000–$160,000) to Inspection Manager ($150,000–$190,000) to Asset Integrity Manager ($175,000–$240,000+), across 15–20 years. Accelerators: adding API 510 within two years, leading a turnaround, publishing an RBI implementation, earning ASNT Level III, and taking one Gulf or LNG assignment."
          }
      ]
  },

  "/blog/asme-section-v-article-5-ultrasonic-thickness-measurement-requirements": {
      "answer": "T-530 requires the thickness instrument to demonstrate ±0.1 mm (±0.004 in.) accuracy across its operating range, verified on a calibrated step wedge whose steps bracket the expected wall. Two-point calibration is performed at shift start and every two hours during the survey, with material velocity entered explicitly — 5,920 m/s carbon steel, 5,740 m/s austenitic stainless, 6,070 m/s titanium.",
      "expansion": "Every API 510 external survey, API 570 circuit reading and API 653 shell profile traces to Article 5, because the API in-service codes call out ultrasonic thickness measurement per ASME Section V Article 5 or equivalent. Article 5 measures remaining wall between 0 °C and 540 °C on metallic materials and does nothing else: crack detection and flaw sizing belong to Article 4. Transducer choice drives the error budget. Dual-element 5 MHz probes are required on 3–25 mm wall, corroded surfaces and curved geometry; single-element 5–10 MHz probes suit clean walls above 25 mm; delay-line probes with silicone hot couplant cover 150–540 °C; EMAT works couplant-free on hot, dry or coated surfaces. Coupling on rough or coated steel is the dominant accuracy killer, which is why surface prep to bright metal precedes the calibration shot and every reading.",
      "source": "ASME BPVC Section V, Article 5 — Ultrasonic Examination Methods for Materials, T-510 through T-590 (equipment qualification T-530, calibration T-561, procedure qualification T-563), with instrument accuracy verified on a step wedge per ASTM E797/E797M. Referenced by API 510 Section 8.3, API 570 Section 8.2 and API 653 Section 12.3; disposition via ASME VIII Div 1 UG-27, ASME B31.3 para. 304, and API 579-1/ASME FFS-1.",
      "table": {
          "caption": "Article 5 transducer and technique selection by wall thickness, surface condition and temperature",
          "columns": [
              "Condition at the CML",
              "Transducer",
              "Frequency",
              "Couplant / surface prep",
              "Known limitation"
          ],
          "rows": [
              [
                  "3–25 mm wall, corroded or curved",
                  "Dual element (Olympus D790 / D791 / D7227 class)",
                  "5 MHz",
                  "Standard gel on wire-brushed bright metal",
                  "V-path error unless calibrated on matching curvature"
              ],
              [
                  "Clean wall above 25 mm",
                  "Single element, 0.25 in. element",
                  "5–10 MHz",
                  "Standard gel on bright metal",
                  "Degrades on rough or irregular back-wall geometry"
              ],
              [
                  "Surface 150–540 °C",
                  "High-temperature delay line",
                  "Per probe rating",
                  "Silicone-based hot couplant (IRT-X, Sonotrace HT-260 class)",
                  "Sound velocity shifts with temperature; correction required"
              ],
              [
                  "Hot, dry or coated surface",
                  "EMAT (electromagnetic-acoustic)",
                  "Per probe rating",
                  "Couplant-free, no surface prep",
                  "Lower signal-to-noise; conductive/ferromagnetic materials only"
              ],
              [
                  "Coating left in place",
                  "Dual element, through-coating UT-T",
                  "5 MHz",
                  "Coating thickness subtracted from the gross reading",
                  "Requires documented procedure qualification per T-563"
              ],
              [
                  "Surface above 540 °C",
                  "Outside Article 5 scope",
                  "—",
                  "—",
                  "Use creep-monitoring techniques per API 579 Part 10"
              ]
          ],
          "note": "Instrument accuracy ±0.1 mm / ±0.004 in., with an in-date ISO/IEC 17025-traceable calibration certificate. Qualified instruments in common use: Olympus 38DL Plus, Olympus EPOCH 650 in thickness mode, Sonatest Master Scan / Sitescan, GE USM Go+, Modsonic Einstein III. Re-calibrate at shift start, every two hours, and after any transducer or cable change. Personnel: SNT-TC-1A Level II UT, ISO 9712 Level 2 UT, or NAS 410 Level 2 UT."
      },
      "facets": [
          {
              "q": "How often must the gauge be recalibrated during a survey?",
              "a": "Shift start, every two hours in use, and after any transducer or cable change. T-561 states \"as often as necessary to assure accuracy\" and inspection procedures pin that to two-hour intervals. The two-point calibration must bracket the expected wall — 5 mm and 25 mm steps for 6–20 mm piping — because readings extrapolated outside the bracketed range are not defensible."
          },
          {
              "q": "How many readings does one CML need, and what gets recorded?",
              "a": "Four readings minimum per CML, with minimum, average and maximum all recorded. API 510 vessels take one CML per square foot of shell, three to five around each nozzle, one at each weld crossing. API 570 piping places CMLs at 10/2, 4/8 and 6/12 o'clock at each TML station, every 50 ft on Class 1 straight runs, intensified at elbows, tees, reducers and valves."
          },
          {
              "q": "How does Article 5 data become a remaining-life number?",
              "a": "Long-term corrosion rate = (initial − current) / years in service; short-term rate = (previous − current) / interval. Remaining life = (measured thickness − code tmin) / corrosion rate. tmin comes from ASME B31.3 para. 304 for piping, t = PD/(2(SE+PY)), or ASME VIII Div 1 UG-27 for cylindrical shells, t = PR/(SE−0.6P). Inspection interval is the lesser of half the remaining life and the code maximum."
          },
          {
              "q": "Why can a CML read thinner than the metal actually is?",
              "a": "A mid-wall lamination, hydrogen blister or lamellar crack reflects the beam early, so the gauge reports depth-to-flaw instead of the back wall. Bunched pitting scatters the back-wall echo and drops the reading. Any CML reading suspiciously thin gets confirmed with Article 4 flaw detection before that number is allowed into a corrosion-rate trend."
          },
          {
              "q": "Does Article 5 cover automated corrosion mapping?",
              "a": "Yes, for thickness-only output. Encoded B-scan and C-scan mapping is accepted under Article 5 where the procedure is qualified per T-563; the same scan used to size a flaw falls under Article 4. Mapping supplements spot readings because a single deep pit can sit between grid points and never be caught by a CML survey."
          },
          {
              "q": "How long must CML data be retained?",
              "a": "Life of equipment, minimum. A remaining-life calculation is a slope through historical points, so losing a 1990 baseline reading destroys the long-term corrosion rate for that CML permanently and forces a fall back to conservative default rates. The record also carries the calibration certificate, the CML grid sketch and the technician's Level II UT certification for each survey."
          }
      ]
  },

  "/blog/asnt-level-3-fees-2026-complete-pricing-table": {
      "answer": "ASNT Level III bills as four separate charges, not one figure: an application fee, a one-time Basic Exam, a Method Exam for each method, and recertification every five years. ASNT publishes current amounts in its certification fee schedule at asnt.org, and members pay reduced exam rates. The Basic Exam is charged once in a lifetime.",
      "expansion": "The ASNT Level III Basic Exam is the structural pivot. You sit it once — SNT-TC-1A and CP-189 content, materials and processes, common discontinuities, all-method fundamentals — and it never renews while you hold one active method certification. Every method added afterwards costs only its application and Method Exam, so stacking UT, RT and MT gets cheaper per credential. Three routes carry different totals. The Method Exam Path leaves certification with your employer under its written practice: lowest outlay, non-portable. ACCP adds ASNT-issued central certification with a practical component and verified experience: higher cost, travels between employers, preferred on EPC and consulting bids. IRRSP is a radiation-safety credential for radiographers, held alongside a Level III rather than instead of one. Non-exam costs decide outcomes — CP-105 topical outlines, the method Recommended Practice, a structured prep course, travel to a test center, and one to two days out of the field.",
      "source": "ASNT Certification Services fee schedule, asnt.org (current edition); ASNT Recommended Practice No. SNT-TC-1A (2024 edition); ANSI/ASNT CP-189-2020; ASNT CP-105 topical outlines",
      "table": {
          "caption": "ASNT Level III fee components — what is charged, when it repeats, and what reduces it",
          "columns": [
              "Fee component",
              "When charged",
              "Repeats?",
              "What it covers",
              "Cost lever"
          ],
          "rows": [
              [
                  "Application / processing",
                  "Per application submitted",
                  "Every application",
                  "Eligibility review and administration",
                  "Bundle method applications in one cycle"
              ],
              [
                  "Basic Exam",
                  "With your first Method Exam",
                  "Never again",
                  "SNT-TC-1A, CP-189, materials and processes, common discontinuities, all-method fundamentals",
                  "Sit it once; it covers every method you ever add"
              ],
              [
                  "Method Exam",
                  "Once per method (UT, RT, MT, PT, VT, ET, AE, LT, TIR, NR)",
                  "Per new method",
                  "Method principles, equipment, codes, interpretation",
                  "Each added method skips the Basic Exam charge"
              ],
              [
                  "ASNT membership",
                  "Annual, optional",
                  "Yearly",
                  "Discounted exam, application and renewal rates",
                  "Pays for itself inside one exam cycle"
              ],
              [
                  "5-year recertification",
                  "Per method, per cycle",
                  "Every 5 years",
                  "Renewal by shortened exam or by 25 continuing-education points",
                  "Points route removes the exam charge entirely"
              ],
              [
                  "Lapsed recertification",
                  "Missing the window by over 6 months",
                  "Only on lapse",
                  "Full re-examination plus penalty",
                  "Calendar renewal 6 months early"
              ]
          ],
          "note": "ASNT sets and periodically adjusts these amounts; the authoritative figures are the current fee schedule at asnt.org. Atlantis NDT program pricing is region-specific — affordable, accessible, fully customizable — and quoted on request."
      },
      "facets": [
          {
              "q": "What earns the 25 recertification points ASNT requires?",
              "a": "Points accrue from work performed in the method, teaching NDT courses, attending ASNT conferences and section meetings, publishing papers, serving on committees, and completing continuing-education units. An active Level III doing normal method work, mentoring Level IIs and attending one annual conference clears 25 points inside a five-year cycle without sitting an exam. Log each activity when it happens rather than reconstructing it at renewal."
          },
          {
              "q": "What happens if my ASNT Level III lapses?",
              "a": "Missing the renewal window by more than six months forces full recertification by examination plus penalty charges, replacing a points submission that would have cost nothing but paperwork. The certification also stops being claimable on bids and client audits during the gap. Calendar renewal six months before expiry and submit points early — lapsing is the most expensive avoidable mistake in the pathway."
          },
          {
              "q": "Which method should I certify in first for ASNT Level III?",
              "a": "Certify in the method your current work already documents experience in: UT for fixed equipment and pressure-boundary work, RT where weld radiography dominates, MT or PT in fabrication. The first method carries the one-time Basic Exam, so it costs the most. Later methods need only an application and a Method Exam. UT plus RT plus MT is the classic stack for refinery and pipeline technical authority."
          },
          {
              "q": "Does an ASNT Level III certificate move with me to a new employer?",
              "a": "ACCP certification is issued by ASNT itself and travels with you. Method Exam Path certification is issued by your employer against its written practice, so a new employer certifies you under its own document. Your passed Basic and Method Exam results carry over as evidence, but the certificate does not. Consultants and technicians bidding EPC work choose ACCP for exactly this reason."
          },
          {
              "q": "What does the ASNT Basic Exam actually test?",
              "a": "SNT-TC-1A and CP-189 personnel-qualification requirements, materials, fabrication and product technology, common discontinuities and their origins, and the fundamentals of methods other than your own. It is deliberately cross-method: the exam tests whether you can supervise, examine and qualify technicians in methods you do not personally practise. Candidates from a single-method background lose most marks on materials and processes."
          },
          {
              "q": "Is ASNT cheaper to maintain than ISO 9712 Level 3?",
              "a": "Yes. ASNT allows renewal by 25 continuing-education points with no examination, so an active Level III maintains certification through normal work, teaching and conference attendance. ISO 9712 returns the candidate to the certification body with formal requirements at the end of each five-year cycle. Across a twenty-year career the ASNT points route removes several examination events from the calendar and the budget."
          }
      ]
  },

  "/blog/iso-9712-vs-asnt-snt-tc-1a-certification-comparison": {
      "answer": "For work inside the United States, SNT-TC-1A is the answer: your employer certifies you against its own written practice, and roughly 95% of US employers accept it. ISO 9712 is issued by an independent certification body, so the certificate belongs to the technician and moves between employers — which is why Europe, the Gulf and most international contracts name it first.",
      "expansion": "The split is ownership of the certificate. Under ASNT SNT-TC-1A the employer certifies you, so leaving the company ends the certification and the next employer re-qualifies you under its written practice. Under ISO 9712:2021 an accredited certification body examines and certifies you, and that certificate stays valid across employers for five years. Canada accepts both, issuing ISO 9712 as CAN/CGSB-48.9712 through Natural Resources Canada's National NDT Certification Body. The practical sequence for a North American technician is ASNT first — faster, and what US job postings require — then ISO 9712 within one to two years if international work is the goal. Converting is not a paperwork exercise: ISO 9712 examinations are passed separately, though documented ASNT training hours and on-the-job experience count toward eligibility. The examination is also graded by the certification body rather than by your employer, which is what makes the result portable.",
      "source": "ISO 9712:2021 Non-destructive testing — Qualification and certification of NDT personnel; ASNT Recommended Practice No. SNT-TC-1A (2024 edition); ANSI/ASNT CP-189-2020; CAN/CGSB-48.9712 administered by NRCan's NDTCB",
      "table": {
          "caption": "Which certification scheme employers name, by market",
          "columns": [
              "Market",
              "Scheme employers specify",
              "Certificate issued by",
              "Moves with the technician",
              "Validity"
          ],
          "rows": [
              [
                  "United States",
                  "SNT-TC-1A; CP-189 where a national standard is contracted",
                  "Employer, against its written practice",
                  "No",
                  "Level I/II 3 years, Level III 5 years"
              ],
              [
                  "Canada",
                  "Both accepted equally",
                  "Employer (ASNT) or NRCan NDTCB (CAN/CGSB-48.9712)",
                  "Yes on the ISO route",
                  "5 years on the ISO route"
              ],
              [
                  "UK and Europe",
                  "ISO 9712 and PCN; national bodies such as TWI and TÜV",
                  "Accredited certification body",
                  "Yes",
                  "5 years"
              ],
              [
                  "Middle East (UAE, Saudi, Qatar)",
                  "ISO 9712 named first, ASNT accepted alongside",
                  "Accredited body, or employer on the ASNT route",
                  "Yes on the ISO route",
                  "5 years on the ISO route"
              ],
              [
                  "Aerospace (US and Europe)",
                  "NAS 410 and EN 4179",
                  "Employer, under a Responsible Level 3",
                  "No",
                  "Per the employer's written practice"
              ],
              [
                  "US nuclear (ASME Section XI work)",
                  "SNT-TC-1A or CP-189 as invoked by the owner's program",
                  "Employer",
                  "No",
                  "Per the employer's written practice"
              ]
          ],
          "note": "Validity intervals are recommended maxima. Under SNT-TC-1A the employer's written practice governs and may set shorter intervals. Atlantis NDT trains toward ASNT and ISO 9712 pathways; the certification decision rests with the employer or the certification body."
      },
      "facets": [
          {
              "q": "Which scheme do Gulf operators name in their inspection contracts?",
              "a": "Gulf tenders name ISO 9712 first and accept ASNT alongside it. UAE, Saudi and Qatari operators write clauses in the form \"ISO 9712 or equivalent with ASNT Level II/III.\" A technician holding only ASNT is shortlisted less often on those contracts. Aviation MRO work in the region runs separately under NAS 410 or EN 4179 personnel rules, not under either general scheme."
          },
          {
              "q": "Does ISO 9712 require re-examination at renewal?",
              "a": "ISO 9712 certificates run five years. Renewal turns on documented continuity of work in the method and a current vision examination; recertification at the end of the extended cycle returns the candidate to the certification body for examination. That is the structural cost difference from ASNT, where 25 continuing-education points renew a Level III with no examination at all."
          },
          {
              "q": "How long does it take to add ISO 9712 after an ASNT Level II?",
              "a": "Six to twelve months for a technician already holding ASNT Level II in that method. The examinations are passed separately — there is no conversion or equivalency letter — but documented ASNT training hours and on-the-job experience count toward ISO 9712 eligibility. The gate becomes exam scheduling with an accredited certification body rather than accumulating fresh experience."
          },
          {
              "q": "What happens to my SNT-TC-1A certification when I change employers?",
              "a": "It ends. SNT-TC-1A certification is granted by the employer against its written practice and is valid only inside that organisation. The new employer re-certifies you under its own written practice, crediting your documented training hours, OJT records and examination history, so the rebuild is administrative rather than starting from zero. Keep personal copies of every training record, OJT log and vision test."
          },
          {
              "q": "Which scheme does aerospace NDT work run under?",
              "a": "NAS 410 in the United States and EN 4179 in Europe, which are technically aligned. Both keep certification employer-based under a Responsible Level 3 who is separately qualified, and both are invoked by the prime contractor — Boeing, Airbus, GE — through supplier quality requirements. An ASNT or ISO 9712 certificate on its own does not satisfy an aerospace supplier audit."
          },
          {
              "q": "Is ANSI/ASNT CP-189 different from SNT-TC-1A?",
              "a": "CP-189 is a consensus national standard stating requirements; SNT-TC-1A is a recommended practice the employer adapts into its own written practice. CP-189 is prescriptive where SNT-TC-1A is advisory, which is why nuclear, defense and some government owners invoke CP-189 by name in their programs. Both draw course content from the ASNT CP-105 topical outlines."
          }
      ]
  },

  "/ndt-training-dubai": {
      "answer": "Atlantis NDT delivers NDT training in Dubai in two formats: on-site corporate cohorts run at your own facility with your equipment and specimens, and blended cohorts pairing online theory with a supervised practical block. There is no walk-in Dubai training centre. Programmes cover Level I and Level II in UT, RT, MT, PT, VT and ET, led by practising ASNT Level IIIs.",
      "expansion": "Dubai's inspection demand comes from four asset populations examined on code intervals: Emirates' MRO fleet, the drydocks on the creek and at Jebel Ali, dense structural and pressure-equipment fabrication, and DEWA's power and desalination plant — with ENOC's Jebel Ali refinery adding process work. Each pulls a different method first. Aviation runs eddy current, PT on components and UT on composites under NAS 410 or EN 4179 personnel rules. Marine runs UT thickness gauging at survey scale, MT on fatigue details and disciplined visual survey. Fabrication runs VT to welding-code acceptance, then UT and RT for coded work. Certification scheme follows the same logic: Dubai Municipality and DM-accredited third parties govern statutory equipment, GCAA-approved organisations govern aviation, and multinationals name ASNT or PCN in their contracts. Train toward the scheme your target employers write into contracts before booking any course.",
      "source": "ASNT Recommended Practice No. SNT-TC-1A (2024 edition); ISO 9712:2021; NAS 410 and EN 4179 for aerospace personnel; BINDT PCN scheme documents; Dubai Municipality third-party inspection requirements",
      "table": {
          "caption": "Certification schemes named in UAE contracts — who issues them and who accepts them",
          "columns": [
              "Scheme",
              "Certificate issued by",
              "Where it is named in the UAE",
              "Moves with the technician",
              "Renewal"
          ],
          "rows": [
              [
                  "ASNT SNT-TC-1A",
                  "Employer, against its written practice",
                  "Multinational EPC and oil & gas contracts",
                  "No",
                  "3 years Level I/II, 5 years Level III per written practice"
              ],
              [
                  "ANSI/ASNT CP-189",
                  "Employer, against a national standard",
                  "Owners requiring a prescriptive personnel standard",
                  "No",
                  "Per the employer's written practice"
              ],
              [
                  "ISO 9712:2021",
                  "Accredited third-party certification body",
                  "Statutory work and most GCC tenders",
                  "Yes",
                  "5 years"
              ],
              [
                  "PCN (BINDT)",
                  "BINDT, to ISO 9712",
                  "British-linked operators and EPC contractors",
                  "Yes",
                  "5 years"
              ],
              [
                  "NAS 410 / EN 4179",
                  "Employer, under a Responsible Level 3",
                  "Aviation MRO inside GCAA-approved organisations",
                  "No",
                  "Per the employer's written practice"
              ],
              [
                  "AWS CWI",
                  "AWS, centrally",
                  "Structural and fabrication welding inspection",
                  "Yes",
                  "3-year renewal, 9-year recertification"
              ]
          ],
          "note": "Atlantis NDT delivers ASNT- and ISO 9712-pathway training and prepares candidates for the examinations local operators specify. AWS CWI and the API individual certification programs are administered centrally by AWS and API. Programme scope is affordable, accessible, fully customizable and quoted on request."
      },
      "facets": [
          {
              "q": "Does Atlantis run a walk-in training centre in Dubai?",
              "a": "No. Corporate programmes are delivered on-site at your own facility, which lets practical specimens match the components your technicians actually examine, and individuals are served through scheduled cohorts or blended delivery with online theory and a supervised practical block. Send headcount and timeline and Atlantis will state plainly which route fits — including when a local provider is the better answer for one candidate."
          },
          {
              "q": "Which NDT method should a Dubai candidate certify in first?",
              "a": "Certify in the method local employers examine with. Aviation MRO work runs eddy current first, then PT on components and UT on composites. Marine and drydock work runs UT thickness gauging and MT on fatigue details. Fabrication runs VT to welding-code acceptance, then UT and RT. A candidate matched to local demand is employable months sooner than one spread thinly across every method."
          },
          {
              "q": "What does a UAE employer need to see beyond an exam pass?",
              "a": "Documented training hours, documented on-the-job experience hours, a general examination, a specific examination on the employer's own procedures, a graded practical examination, and a current near-vision acuity and colour-contrast test. Under SNT-TC-1A the employer certifies against its written practice, so that document is part of the requirement itself — and it is the first thing a client audit asks to see."
          },
          {
              "q": "Will an ISO 9712 certificate earned in the UAE be accepted in Saudi Arabia?",
              "a": "Yes — an ISO 9712 certificate is issued by an accredited body and is recognised across the GCC. Individual operators run their own approval gates on top: qualification registers, site-specific assessments and contractor approval lists controlled by the operator, not by the certification body. Budget time for that second gate separately from certification, because it is scheduled by the operator."
          },
          {
              "q": "Can the theory be completed online with the practical done in Dubai?",
              "a": "Yes — that is the blended format. Theory is completed online at the candidate's pace, then the practical block is delivered and supervised in person, which is the part that cannot be remote because it requires specimens, equipment and a graded demonstration. Corporate cohorts run the same split around your shift pattern so the crew keeps working while it qualifies."
          },
          {
              "q": "How long does a first Level II take from a cold start?",
              "a": "Months rather than weeks. Classroom hours are the fast part; documented on-the-job experience is the binding constraint, and it accumulates alongside the training and examinations rather than after them. A candidate already working under supervision in the method progresses considerably faster than someone entering NDT with no logged hours, because their OJT clock is already running."
          }
      ]
  },

  "/blog/mfl-pipeline-inspection-cost-vendors-when-to-use-vs-ut": {
      "answer": "MFL is the default in-line inspection tool for US gas transmission because it needs no coupling fluid: magnetize the wall, and Hall-effect sensors read flux leaking where metal is missing. Choose UT ILI instead when crack detection is mandatory, when wall thickness exceeds 25 mm, or when API 579 needs directly measured thickness. Crack-threat lines run MFL paired with EMAT or UT.",
      "expansion": "MFL detects volume loss, not planar flaws. External and internal corrosion, pitting, gouges, manufacturing anomalies and new-construction baselines all read cleanly, in gas, dry or liquid product. Tight axial cracks — SCC and seam-weld fatigue — hook cracks in pre-1995 ERW pipe, laminations, HIC, dents without metal loss and sub-threshold pitting are missed or undersized, and non-ferromagnetic material cannot be magnetized at all. Tool selection follows the gap. High-resolution MFL tightens sizing to roughly ±10% of wall thickness against ±15–20% for standard resolution, which is what fitness-for-service work requires. Transverse field inspection rotates the field 90° to catch axially oriented defects; spiral MFL magnetizes helically to catch any orientation in one pass; triax adds three sensor axes for classification. On high-consequence lines the industry default is a combo tool — MFL plus caliper plus IMU, optionally EMAT or UT — because it buys full threat coverage inside one shutdown window.",
      "source": "API 1163 In-line Inspection Systems Qualification; ASME B31.8S Managing System Integrity of Gas Pipelines; PHMSA 49 CFR Part 192 Subpart O and 49 CFR 195.452; NACE/AMPP SP0102 In-Line Inspection of Pipelines; ASME B31G for remaining strength",
      "table": {
          "caption": "Pipeline threat vs tool — what MFL covers and what it hands off",
          "columns": [
              "Threat",
              "MFL result",
              "Tool that resolves it",
              "Sizing expectation",
              "Framework driver"
          ],
          "rows": [
              [
                  "External and internal corrosion, general metal loss",
                  "Detected — primary application",
                  "High-resolution MFL",
                  "±10% wall (HR), ±15–20% wall (standard)",
                  "ASME B31.8S metal-loss threat"
              ],
              [
                  "Pitting above detection threshold",
                  "Detected",
                  "High-resolution MFL",
                  "±10% wall",
                  "ASME B31G remaining strength"
              ],
              [
                  "Axial cracking, SCC, seam-weld fatigue",
                  "Blind",
                  "EMAT, UT crack tool, TFI or spiral MFL",
                  "Depth from the crack tool, never from MFL",
                  "ASME B31.8S crack threat"
              ],
              [
                  "Hook cracks, pre-1995 ERW seam",
                  "Metal loss only",
                  "UT crack tool or EMAT — combo mandatory",
                  "Crack-tool specification",
                  "PHMSA seam-threat assessment"
              ],
              [
                  "Dents and geometry with no metal loss",
                  "Missed",
                  "Caliper plus IMU",
                  "Depth as percentage of OD",
                  "49 CFR 192 and 195 dent criteria"
              ],
              [
                  "Laminations and HIC",
                  "Missed",
                  "UT ILI in liquid service",
                  "Direct wall-thickness measurement",
                  "API 579 assessment input"
              ],
              [
                  "Heavy wall above 25 mm",
                  "Sizing accuracy drops",
                  "UT ILI with liquid coupling",
                  "Direct thickness",
                  "API 579 Level 2 input"
              ]
          ],
          "note": "Every sizing figure is a qualified performance claim under API 1163, not a measurement — it holds only when validated by dig verification of the anomaly population. Bid three vendors against a performance specification rather than a named tool. Atlantis NDT works for operators on bid analysis and dig-program oversight, not for tool vendors; scope is quoted on request."
      },
      "facets": [
          {
              "q": "How far ahead do I need to book an MFL run?",
              "a": "Top-tier fleets carry four to six month lead times, and the full sequence from contract award to GPS dig sheets spans three to six months on top. Cluster adjacent lines under one mobilization and sign multi-year vendor agreements to hold a place in the schedule. Rush scheduling is one of the largest single cost drivers in an ILI program, entirely by choice."
          },
          {
              "q": "What does a combo tool add over a straight MFL run?",
              "a": "One launch instead of three. MFL plus caliper plus IMU captures metal loss, geometry and precise anomaly positioning in a single pass, and adding EMAT or UT brings crack threats into the same run. The saving is the shutdown window and the mobilization, not the tool rental — which is why combo configuration is the industry default on high-consequence area pipelines."
          },
          {
              "q": "How do I compare MFL bids that are not quoted the same way?",
              "a": "Write a performance-based specification against API 1163 — required probability of detection, probability of identification, sizing accuracy and depth threshold — rather than naming a vendor's tool. That forces every bid onto the same axis and opens the bidding to mid-market fleets. Normalize the bids independently of the vendors, then hold the winner to those numbers at dig verification."
          },
          {
              "q": "Can an unpiggable pipeline be inspected with MFL?",
              "a": "Free-swimming tools cannot traverse multi-diameter, tight-bend or low-flow lines, but tethered MFL tools, robotic crawlers and bidirectional tools do, at a premium over a standard run. Physical modification — installing launchers and receivers, replacing tight bends — converts the line permanently and pays back across repeated assessment cycles. Quest Integrity and similar specialists build their business on these lines."
          },
          {
              "q": "Which vendors run credible MFL fleets?",
              "a": "ROSEN Group leads on high-resolution MFL and analyst depth; Baker Hughes/PII carries the MagneScan gas transmission heritage; NDT Global runs the strongest MFL-plus-UT combos for liquid lines; T.D. Williamson runs spiral SpirALL. Mid-market and specialty fleets include Onstream for North American gathering, Quest Integrity for unpiggable lines, Enduro for low-pressure systems, and Pipesurvey International for European small diameters."
          },
          {
              "q": "What happens between the tool run and the dig sheet?",
              "a": "Eight steps: engineering and tool selection, cleaning pig runs, a gauge plate run, tool launch with one to three days of data acquisition, data download and tool performance verification, a Level 1 preliminary report, Level 2 analysis with ASME B31G remaining-strength calculations and GPS dig sheets, then dig verification of five to twenty anomalies to validate the vendor's sizing claims."
          }
      ]
  },

  "/blog/defect-sizing-techniques-in-ultrasonic-inspection": {
      "answer": "Through-wall height comes from time, not amplitude. Tip diffraction and TOFD time the signal shed by the crack tip and size height to about ±1 mm; 6 dB and 20 dB drop are amplitude methods that size length and systematically undersize any flaw smaller than the beam. Fitness-for-service assessment under API 579 requires a diffraction-based height, not an amplitude estimate.",
      "expansion": "Ultrasonic sizing splits into three families with three different uses. Amplitude drop — 6 dB for the half-amplitude boundary, 20 dB for the wider beam edge — traces flaw extent by moving the probe until the echo falls a set number of decibels. It is fast, it works for length, and it fails for anything smaller than the beam width because the echo never originates at the flaw edge. Diffraction methods time the low-amplitude signal shed by the flaw tip: tip echo in pulse-echo, and TOFD with separate transmitter and receiver timing lateral wave, tip and backwall arrivals. Height accuracy stops depending on how loud the indication is, which is why TOFD survives awkward flaw orientation. Imaging methods — phased array sectorial scanning, and full matrix capture with total focusing — reconstruct the flaw geometrically and are the practical route where access allows a single side only.",
      "source": "ASTM E2192 Standard Guide for Planar Flaw Height Sizing by Ultrasonics; ASME BPVC Section V, Article 4 (ultrasonic examination of welds, including its TOFD appendix); ISO 10863 (TOFD technique) and ISO 15626 (TOFD acceptance levels); ISO 16827 (characterization and sizing of discontinuities); API 579-1/ASME FFS-1 Part 9",
      "table": {
          "caption": "UT sizing techniques — what each one actually measures",
          "columns": [
              "Technique",
              "What it measures",
              "Through-wall height accuracy",
              "Fails when",
              "Reference"
          ],
          "rows": [
              [
                  "6 dB drop",
                  "Length and lateral extent",
                  "None — no height output",
                  "The flaw is smaller than the beam width",
                  "ISO 16827"
              ],
              [
                  "20 dB drop",
                  "Extent at the wider beam edge",
                  "None — no height output",
                  "Coarse grain or attenuation distorts the beam",
                  "ISO 16827"
              ],
              [
                  "DAC / DGS amplitude comparison",
                  "Equivalent reflector size against a reference",
                  "None — no height output",
                  "Flaw orientation is off-normal to the beam",
                  "ASME BPVC Section V, Article 4"
              ],
              [
                  "Tip echo / back-diffraction",
                  "Through-wall height",
                  "About ±1 mm",
                  "The tip signal is buried in structural noise",
                  "ASTM E2192"
              ],
              [
                  "TOFD",
                  "Through-wall height and depth",
                  "About ±1 mm",
                  "Near-surface flaws sit in the lateral-wave dead zone",
                  "ISO 10863 and ISO 15626"
              ],
              [
                  "Phased array sectorial scan",
                  "Height, depth and flaw profile",
                  "Better than amplitude, below TOFD",
                  "The focal law does not match the geometry",
                  "ASME BPVC Section V, Article 4"
              ],
              [
                  "FMC with total focusing (TFM)",
                  "Height and geometric profile",
                  "Approaches TOFD with a correct velocity model",
                  "Velocity model or wedge geometry is misassumed",
                  "Vendor-qualified procedure approved by a Level III"
              ]
          ],
          "note": "Sizing accuracy is a property of the qualified procedure, not of the instrument: it holds only against the reference blocks the technique was demonstrated on, and the procedure must be approved by a Level III. API 579 and BS 7910 assessments consume through-wall height, so an amplitude-only result cannot feed them."
      },
      "facets": [
          {
              "q": "Why does 6 dB drop undersize small flaws?",
              "a": "The 6 dB drop method assumes the echo falls by half when the beam centre passes the flaw edge, which holds only when the flaw is larger than the beam at that depth. Below that size the whole flaw sits inside the beam, the echo amplitude reflects reflectivity rather than extent, and the traced boundary is the beam profile — not the flaw. The error is systematic and always non-conservative."
          },
          {
              "q": "When is TOFD the wrong choice for sizing?",
              "a": "TOFD loses near-surface flaws under the lateral wave dead zone and loses far-surface flaws in the backwall echo, so thin-wall components give it two blind bands and little usable window between them. Coarse-grained austenitic and dissimilar-metal welds scatter the tip signal below the noise floor. Complex geometry that prevents symmetric transmitter-receiver placement removes the timing basis entirely."
          },
          {
              "q": "What sizing accuracy does an API 579 assessment actually need?",
              "a": "API 579-1/ASME FFS-1 Part 9 evaluates crack-like flaws using through-wall height and length as direct inputs, so the assessment inherits the sizing error. Qualified procedures add the demonstrated sizing uncertainty to the measured height before the assessment is run. An amplitude-based estimate provides no height at all and cannot enter a Part 9 evaluation regardless of how the indication was reported."
          },
          {
              "q": "Can phased array replace TOFD for height sizing?",
              "a": "Phased array sectorial scanning sizes height and profile better than any amplitude method and produces an image an auditor can read, but it stays amplitude-dependent unless the focal law resolves the tip signal. Coded procedures pair the two: TOFD for through-wall height, phased array for position, profile and coverage mapping. Full matrix capture with total focusing closes much of the gap when the velocity model is correct."
          },
          {
              "q": "What certification is required to size flaws for a code report?",
              "a": "An SNT-TC-1A Level II or ISO 9712 Level 2 in ultrasonics performs the examination and records the sizing. A Level III writes and approves the sizing procedure and signs the technical disposition — the sizing result is only defensible if a Level III approved the procedure it came from. Advanced techniques such as TOFD, phased array and TFM usually add a separate technique-specific qualification."
          },
          {
              "q": "How do I qualify a sizing procedure so an auditor accepts it?",
              "a": "Demonstrate the procedure on reference blocks containing flaws of known height and orientation representative of the component, record the measured versus actual heights, and state the resulting sizing error in the procedure itself. Keep the block certification traceable, the operator certification current, and the raw data files timestamped. That evidence chain — not the instrument brand — is what an audit examines."
          }
      ]
  },

  "/blog/vt-level-2-practice-questions-2026-free-mock-exam": {
      "answer": "VT Level II exams score three things: ASME Section V Article 9 technique rules, the employer's written procedure, and a graded practical. Article 9 direct visual requires the eye within 24 in (600 mm) of the surface, a viewing angle of at least 30° to the surface, and a minimum 100 fc (1000 lux) of illumination — the numbers that appear on almost every paper.",
      "expansion": "Study the parameters that carry numbers, because those are what an examination can score objectively. Direct visual examination under ASME BPVC Section V, Article 9: eye within 24 in (600 mm) of the surface, viewing angle no less than 30° to the surface, and illumination of at least 100 fc (1000 lux) measured at the examination surface rather than at the lamp. Remote or indirect visual examination — borescope, camera, mirror — must demonstrate resolution at least equivalent to direct visual observation, which is why a compliant procedure includes a resolution check before the examination begins. Personnel requirements sit in SNT-TC-1A: near-vision acuity to Jaeger No. 1 or equivalent at not less than 12 in, examined annually, plus colour-contrast differentiation demonstrated per the employer's written practice. AWS D1.1 sets a separate bar for welding inspectors at Jaeger J2 at 12 in. Every VT procedure requires Level III approval.",
      "source": "ASME BPVC Section V, Article 9 (Visual Examination); ASNT Recommended Practice No. SNT-TC-1A (2024 edition); ANSI/ASNT CP-189-2020; ASNT CP-105 topical outlines; AWS D1.1 Structural Welding Code — Steel; ASTM E165 (liquid penetrant, referenced in cross-method questions)",
      "table": {
          "caption": "VT Level II — the parameters exams actually score",
          "columns": [
              "Parameter",
              "Requirement",
              "Source",
              "Common exam trap"
          ],
          "rows": [
              [
                  "Illumination, direct visual",
                  "Minimum 100 fc (1000 lux) at the examination surface",
                  "ASME BPVC Section V, Article 9",
                  "Measuring at the lamp instead of at the surface"
              ],
              [
                  "Eye-to-surface distance",
                  "Not more than 24 in (600 mm)",
                  "ASME BPVC Section V, Article 9",
                  "Answering in inches when the paper is set in millimetres"
              ],
              [
                  "Viewing angle",
                  "Not less than 30° to the surface",
                  "ASME BPVC Section V, Article 9",
                  "Reading it as 30° from the normal instead of from the surface"
              ],
              [
                  "Remote / indirect visual",
                  "Resolution at least equivalent to direct visual observation",
                  "ASME BPVC Section V, Article 9",
                  "Assuming any borescope automatically qualifies"
              ],
              [
                  "Near-vision acuity",
                  "Jaeger No. 1 or equivalent at not less than 12 in, annually",
                  "ASNT SNT-TC-1A (2024)",
                  "Confusing the annual near-vision test with the colour-test interval"
              ],
              [
                  "Colour-contrast differentiation",
                  "Demonstrated per the employer's written practice",
                  "ASNT SNT-TC-1A (2024)",
                  "Assuming the Ishihara plates are mandated by code"
              ],
              [
                  "Welding inspector vision",
                  "Jaeger J2 at 12 in (300 mm)",
                  "AWS D1.1",
                  "Applying the AWS limit to an ASME Section V examination"
              ],
              [
                  "Procedure approval",
                  "Written VT procedure approved by a Level III",
                  "ASME BPVC Section V, Article 9 with SNT-TC-1A",
                  "Treating the written practice and the procedure as one document"
              ]
          ],
          "note": "Verify every figure against the code edition your employer's written practice invokes — EPC and nuclear contracts sometimes lock an older ASME edition. Under SNT-TC-1A the general, specific and practical examinations are graded separately and composited, and the employer's written practice sets the pass mark."
      },
      "facets": [
          {
              "q": "How many questions are on the ASNT VT Level II exam?",
              "a": "The method-specific portion runs around 40 questions, and a candidate sits roughly 140 questions across the general, specific and practical components combined, inside a two to three hour window. Weighting follows the topical outline: technique and procedure carries the largest share, then equipment and calibration, then interpretation and acceptance, with codes and standards close behind."
          },
          {
              "q": "Is the VT Level II exam open book?",
              "a": "The ASNT method examination is closed book. The specific examination — the employer-authored paper covering its own procedures, equipment and acceptance criteria — is open book where the employer's written practice permits it, because it tests navigation of documents you would have in hand on the job. Confirm which applies before the exam; the two are administered separately."
          },
          {
              "q": "What is the difference between direct and remote visual examination?",
              "a": "Direct visual is performed with unaided eye or simple aids where access allows the eye within 24 in (600 mm) of the surface at 30° or more. Remote or indirect visual uses mirrors, borescopes, fibre optics or cameras where that access does not exist, and ASME Section V Article 9 requires the remote system to demonstrate resolution at least equivalent to what direct observation would achieve."
          },
          {
              "q": "Which documents should I read before a VT Level II exam?",
              "a": "ASME BPVC Section V, Article 9 in the edition your employer invokes; your employer's written practice and its VT procedure; SNT-TC-1A (2024 edition) for the qualification and vision requirements. Add AWS D1.1 for structural fabrication work and API 510, 570 or 653 if your role covers in-service equipment. Highlight referenced sections rather than reading each straight through."
          },
          {
              "q": "What does the VT practical examination require?",
              "a": "Examining specimens under the employer's written procedure and being graded on detection, characterization and reporting — set up the examination, verify illumination, apply the technique, then record the indications against the acceptance criteria. Checkpoints are defined in the employer's written practice. Candidates lose marks on documentation and on verifying conditions before examining, not on spotting the discontinuity."
          },
          {
              "q": "Why do self-study candidates fail on code-navigation questions?",
              "a": "Code-navigation questions are timed against people who have drilled the document, and a candidate who has read Article 9 once cannot locate the paragraph fast enough to finish the paper. Self-study pass rates sit near 70–75%; the gap closes with timed mock exams, repeated navigation drills against the actual code, and reference-standard interpretation practice rather than more reading."
          }
      ]
  },

  "/blog/asme-b31-3-process-piping-requirements": {
      "answer": "ASME B31.3 scales weld examination to fluid service, not to pipe size. Normal Fluid Service requires random radiography or ultrasonic examination of at least 5% of circumferential butt and miter groove welds, with every welder represented. Category D requires visual examination only. Severe Cyclic Conditions requires 100% radiography of those welds plus 100% surface examination of fillet and socket welds.",
      "expansion": "Fluid service is decided in design, before any weld is made. Category D covers nonflammable, nontoxic fluid at design gauge pressure not exceeding 150 psi and design temperature between −20°F and 366°F. Category M covers fluid where a single exposure to a very small leaked quantity can cause serious irreversible harm. High Pressure Fluid Service is Chapter IX, invoked by the owner when pressure exceeds ASME B16.5 Class 2500 limits for that material and design temperature. Everything else is Normal Fluid Service. Under Normal Fluid Service the 5% random radiography sample must include work from every welder and welding operator, and in-process examination per para. 344.7 may be substituted where the engineering design specifies it. When a sampled weld fails, para. 341.3.4 progressive sampling requires two additional welds of the same kind by the same welder; if either fails, two more for each, until the extent of the deficient work is established.",
      "source": "ASME B31.3 Process Piping (2022 edition) — para. 341.4 Extent of Required Examination, para. 341.3.4 Progressive Sampling for Examination, Table 341.3.2 Acceptance Criteria for Welds, para. 300.2 Definitions, and para. 345 Leak Tests.",
      "table": {
          "caption": "ASME B31.3 examination and leak test by fluid service",
          "columns": [
              "Fluid service",
              "Weld examination minimum",
              "Visual examination",
              "Leak test",
              "Code location"
          ],
          "rows": [
              [
                  "Category D",
                  "No radiography or ultrasonic examination required",
                  "Visual examination per para. 344.2",
                  "Initial service leak test permitted in place of hydrostatic",
                  "para. 341.4.2"
              ],
              [
                  "Normal Fluid Service",
                  "At least 5% of circumferential butt and miter groove welds by random RT or UT, every welder represented",
                  "At least 5% of fabrication; 100% of longitudinal welds not made to a listed specification",
                  "Hydrostatic at 1.5 × design pressure, corrected by the stress ratio at test temperature",
                  "para. 341.4.1"
              ],
              [
                  "Severe Cyclic Conditions",
                  "100% radiography of circumferential butt and miter groove welds; 100% magnetic particle or penetrant on fillet, socket and branch welds",
                  "100% of fabrication",
                  "Hydrostatic",
                  "para. 341.4"
              ],
              [
                  "Category M (Chapter VIII)",
                  "Chapter VIII raises the Normal Fluid Service requirement; visual coverage goes above the 5% sample",
                  "Set by Chapter VIII, above the Normal Fluid Service sample",
                  "Sensitive leak test required in addition to the specified leak test",
                  "Chapter VIII, para. M341.4 with para. 345.1"
              ],
              [
                  "High Pressure Fluid Service (Chapter IX)",
                  "100% volumetric examination of welds by radiography or ultrasonics, plus 100% surface examination",
                  "100%",
                  "Hydrostatic per Chapter IX",
                  "Chapter IX, para. K341.4"
              ]
          ],
          "note": "These are code minimums. The engineering design, owner's specification or jurisdiction can raise any of them and frequently does; none of them can be lowered."
      },
      "facets": [
          {
              "q": "Does ASME B31.3 require 100% radiography of piping welds?",
              "a": "No. Only Severe Cyclic Conditions and Chapter IX High Pressure Fluid Service demand 100% volumetric examination. Normal Fluid Service stops at 5% random radiography or ultrasonics of circumferential butt and miter groove welds, and Category D needs no volumetric examination at all. Owners who want 100% on a Normal Fluid Service line buy it through the engineering design, not through the code."
          },
          {
              "q": "What hydrostatic test pressure does ASME B31.3 require?",
              "a": "1.5 times design pressure. When test temperature differs from design temperature, the test pressure is multiplied by the ratio of allowable stress at test temperature to allowable stress at design temperature, capped so the test does not yield the piping. Pneumatic testing is the alternative when hydrostatic is impractical, run at a lower multiple of design pressure with a stepped pressurisation sequence."
          },
          {
              "q": "Who is qualified to perform examinations under ASME B31.3?",
              "a": "Two separate roles. The examiner works under para. 342: qualified by training and experience under the employer's written practice, with ASNT SNT-TC-1A or ASME BPVC Section V Article 1 as the usual basis. The Owner's Inspector under para. 340.4 is a different person, requiring 10 years of experience in design, fabrication or inspection of industrial pressure piping, with engineering education creditable up to 5 of those years."
          },
          {
              "q": "What happens when a randomly examined weld fails?",
              "a": "Progressive sampling under para. 341.3.4 takes over. Two additional welds of the same kind made by the same welder or operator must be examined by the same method. If either of those fails, two further welds are examined for each failure. The escalation continues until the extent of the deficient work is established, or the welder's work of that kind is fully examined and repaired."
          },
          {
              "q": "When does ASME B31.3 require post-weld heat treatment?",
              "a": "Table 331.1.1 sets PWHT by base metal P-Number and nominal wall thickness. P-No. 1 carbon steel requires PWHT above 3/4 in. (19 mm) nominal thickness. Soak time is 1 hour per inch of thickness with a 15-minute minimum, at the metal temperature band listed for that P-Number, with heating and cooling rate limits and recorded thermocouple traces as the audit evidence."
          },
          {
              "q": "How does ASME B31.3 differ from ASME B31.1?",
              "a": "B31.3 governs process piping in refineries, chemical plants and gas processing, and sets examination by fluid service category. B31.1 governs power piping and boiler external piping, is referenced by ASME BPVC Section I, and sets examination by pipe size, wall thickness and pressure class under state boiler-code jurisdiction. A plant with both a process unit and a steam plant runs both codes on the same site."
          }
      ]
  },

  "/resources/asnt-level-iii-study-guide": {
      "answer": "The ASNT NDT Level III credential takes two examinations: the Basic exam, 135 multiple-choice questions in 4 hours, passed once and never repeated, and a Method exam for each method certified. Basic covers certification programs (SNT-TC-1A, CP-189, ISO 9712), materials, fabrication and product technology, and general familiarity with the common NDT methods. Adding a method later costs only that Method exam.",
      "expansion": "Eligibility is settled before a seat is booked: documented education plus NDT experience, verified by an employer or a Level III. The SNT-TC-1A route to Level III is a four-year engineering or science degree plus one year of NDT experience at Level II responsibility, two years of engineering or science study plus two years of experience, or four years of experience in a comparable position. A working plan runs 3 to 6 months at 8 to 12 hours a week: four weeks on materials science and metallurgy, six weeks reading ASME BPVC Section V Articles cover to cover and summarising each, six weeks on method-specific calculations, four weeks of timed practice papers, then a final pass on formulas and code paragraphs. Marks are lost most often on near field, beam spread, geometric unsharpness and Snell's law arithmetic, on shall/should/may code interpretation, and on separating SNT-TC-1A from CP-189 from ISO 9712.",
      "source": "ASNT SNT-TC-1A-2020 Recommended Practice (Table 6.3.1A education and experience) and ANSI/ASNT CP-189-2020, with method scope per ASME BPVC Section V Articles 1, 2, 4–9 and 23 and AWS D1.1 Clause 6.",
      "table": {
          "caption": "ASNT Level III exam structure and what each part tests",
          "columns": [
              "Exam",
              "Questions / time limit",
              "Core content tested",
              "Primary reference"
          ],
          "rows": [
              [
                  "Basic (passed once)",
                  "135 questions / 4 hours",
                  "Certification programs and written practices, materials, fabrication and product technology, general familiarity with the common NDT methods",
                  "SNT-TC-1A, CP-189, ISO 9712"
              ],
              [
                  "Method — Ultrasonic (UT)",
                  "60–80 questions / 2–3 hours",
                  "Wave modes, acoustic impedance, Snell's law and mode conversion, near field and beam spread, attenuation, DAC/TCG and DGS, TOFD and phased array, IIW, DSC and V1/V2 blocks",
                  "ASME BPVC Section V Article 4; AWS D1.1"
              ],
              [
                  "Method — Radiographic (RT)",
                  "60–80 questions / 2–3 hours",
                  "Ir-192, Co-60 and Se-75 sources, inverse square law, half-value layers, film and CR/DR, IQIs, geometric unsharpness, exposure calculation, ALARA",
                  "ASME BPVC Section V Article 2"
              ],
              [
                  "Method — Magnetic Particle (MT)",
                  "60–80 questions / 2–3 hours",
                  "Flux density and permeability, hysteresis, yoke, prod, coil and central conductor magnetisation, ampere-turns, continuous versus residual, demagnetisation, Ketos ring, QQI, pie gauge",
                  "ASME BPVC Section V Article 7"
              ],
              [
                  "Method — Liquid Penetrant (PT)",
                  "60–80 questions / 2–3 hours",
                  "Penetrant types and removal methods A–D, sensitivity levels, capillary action, dwell and development times, developer forms, UV-A and white-light levels, TAM and PSM-5 panels",
                  "ASME BPVC Section V Article 6"
              ],
              [
                  "Method — Eddy Current (ET)",
                  "60–80 questions / 2–3 hours",
                  "Electromagnetic induction and standard depth of penetration, impedance plane analysis, frequency selection, lift-off and fill factor, probe types, array, tube inspection, conductivity sorting",
                  "ASME BPVC Section V Article 8"
              ],
              [
                  "Method — Visual (VT)",
                  "60–80 questions / 2–3 hours",
                  "Light measurement to 50 fc / 500 lux, Jaeger near-vision requirement, direct versus remote viewing, weld gauges, discontinuity identification",
                  "ASME BPVC Section V Article 9; AWS D1.1"
              ]
          ],
          "note": "Computer-based at Prometric or Pearson VUE, closed book, non-programmable calculator permitted. 30-day wait between attempts, three attempts per 12-month period."
      },
      "facets": [
          {
              "q": "What experience do you need before ASNT will let you sit the Level III exam?",
              "a": "One of three documented routes under SNT-TC-1A: a four-year college degree in engineering or science plus one year of NDT experience at Level II responsibility; two years of engineering or science study plus two years of that experience; or four years of experience in a comparable Level II position. The employer or a certifying Level III signs the experience record, and ASNT reviews it before scheduling."
          },
          {
              "q": "How long does an ASNT Level III certificate last, and how is it renewed?",
              "a": "Five years. Renewal runs on documented professional activity and continuing involvement in NDT, with re-examination as the fallback route. Vision is separate and annual: near-vision acuity to Jaeger #2 or equivalent at not less than 12 inches in at least one eye, corrected or uncorrected, plus the ability to distinguish contrast among the colours used in the methods certified."
          },
          {
              "q": "What is the difference between an ASNT Level III certificate and employer certification?",
              "a": "ASNT issues a personal credential proving Level III knowledge; it travels with the individual. Certification to perform work is still issued by the employer under its own written practice, which cites SNT-TC-1A or CP-189. A client audit looks for both: the ASNT certificate as the technical basis, and the employer's signed certification record showing method, level, examination results and vision date."
          },
          {
              "q": "Which method should you certify in first?",
              "a": "Ultrasonics. It carries the widest exam scope, the heaviest calculation load, and the interpretive base that phased array and TOFD sit on, so passing UT first makes every later method cheaper in study time. Radiography follows for volumetric coverage. MT, PT and VT are the fastest additions because the Basic exam is already behind you and each needs only its Method paper."
          },
          {
              "q": "Is the ASNT Level III exam open book?",
              "a": "Closed book. Bring photo ID, the confirmation, and a non-programmable calculator; nothing else enters the room. That means acceptance tables, formula constants and code paragraph numbers have to be memorised, not looked up. Budget roughly 1.8 minutes per Basic question and 2 minutes per Method question, flag hard items, and answer every question because there is no guessing penalty."
          },
          {
              "q": "How does ASNT Level III compare with ISO 9712 Level 3?",
              "a": "ASNT Level III is an American credential written around SNT-TC-1A and CP-189, where the employer certifies and ASNT supplies the examination. ISO 9712 Level 3 is issued by a third-party certification body accredited to ISO/IEC 17024, scoped to a named product or industrial sector, and recognised across Europe, the Gulf, Asia-Pacific and Canada. Inspectors working internationally hold both."
          }
      ]
  },

  "/resources": {
      "answer": "Twenty-one NDT documents download free here in editable DOCX or XLSX with no registration: an inspection checklist, API 510, 570 and 653 report templates, an ITP carrying 17 standard QA/QC activities with H/W/R codes, an ASNT Level III study guide, an SNT-TC-1A written practice, an ISO/IEC 17025 calibration certificate, an ASME Section IX WPQR, and an API 581 RBI worksheet.",
      "expansion": "Each template is built around the record its governing document expects an auditor to find. The API 510 vessel report carries condition monitoring location thickness readings, corrosion rate, remaining life and the next inspection date. The API 570 piping record carries the same chain for piping circuits, with long-term and short-term corrosion rates computed side by side so the more conservative one drives remaining life. The API 653 template splits shell course readings, floor scanning, roof and settlement survey into separate sign-off sheets. The written practice follows the SNT-TC-1A clause order: scope, methods and levels, training and experience, examinations, vision, recertification and audits. The ISO/IEC 17025 calibration certificate carries as-found and as-left results, measurement uncertainty, the decision rule and traceability. The API 581 worksheet scores damage mechanisms into probability and consequence of failure on a 5x5 matrix that then sets inspection scope.",
      "source": "API 510, API 570 and API 653 in-service inspection codes; API RP 581 Risk-Based Inspection Methodology; ASME BPVC Section V and Section IX; ASNT SNT-TC-1A-2020; ISO/IEC 17025:2017; ISO 9712:2021.",
      "table": {
          "caption": "Free template, its governing document, and the record an auditor opens it to find",
          "columns": [
              "Template",
              "Governing document",
              "Record it must carry",
              "Format"
          ],
          "rows": [
              [
                  "NDT Inspection Checklist",
                  "ASME BPVC Section V Article 1 and the employer's procedure",
                  "Pre-job planning, equipment and calibration verification, in-process controls, reporting close-out",
                  "DOCX"
              ],
              [
                  "API 510 Pressure Vessel Inspection Report",
                  "API 510",
                  "Cover data, shell UT condition monitoring locations, nozzle and weld inspection, API 579 fitness-for-service screening, recommendations",
                  "DOCX"
              ],
              [
                  "API 570 Piping Inspection Record",
                  "API 570",
                  "CML thickness readings, long-term and short-term corrosion rates, remaining life, RBI risk score",
                  "XLSX"
              ],
              [
                  "API 653 Tank Inspection Template",
                  "API 653",
                  "Shell course readings, floor and annular plate results, roof, settlement survey, sign-off",
                  "DOCX"
              ],
              [
                  "NDT Written Practice",
                  "ASNT SNT-TC-1A",
                  "Scope, methods and levels, training and experience, examination and grading, vision testing, recertification, internal audit",
                  "DOCX"
              ],
              [
                  "Calibration Certificate",
                  "ISO/IEC 17025:2017",
                  "As-found and as-left results, measurement uncertainty, decision rule, metrological traceability, environmental conditions, authorising signature",
                  "DOCX"
              ],
              [
                  "Welder Qualification Record (WPQR)",
                  "ASME BPVC Section IX",
                  "Essential variables, coupon and test position, mechanical test results, welder continuity log",
                  "DOCX"
              ],
              [
                  "RBI Worksheet",
                  "API RP 581",
                  "Damage mechanism screening, probability and consequence of failure, 5x5 risk matrix, resulting inspection plan",
                  "XLSX"
              ]
          ],
          "note": "A template is a starting structure, not a compliance certificate. Verify every clause reference against the current code edition and the client specification before issue."
      },
      "facets": [
          {
              "q": "Do you have to register or pay to download these NDT templates?",
              "a": "No. Every checklist, template and study guide on this page downloads free in editable DOCX or XLSX with no email gate and no account. They can be rebranded with a company logo, renumbered into an existing document control system, and issued on live projects. The only condition is verification against the current code edition before the first controlled issue."
          },
          {
              "q": "Which template do you start with for a new in-service inspection program?",
              "a": "Start with the NDT Inspection Checklist to fix execution discipline in the field. Add the API 510, 570 or 653 report template that matches the equipment type. Run the API 581 RBI Worksheet to rank equipment so inspection scope goes where risk is, not where access is easy. The SNT-TC-1A Written Practice underpins all of it by making personnel certification defensible."
          },
          {
              "q": "How do you calculate remaining life on the API 570 piping record?",
              "a": "Remaining life equals actual thickness minus required thickness, divided by the corrosion rate. The long-term rate uses the first and current readings across the full service period; the short-term rate uses the previous and current readings. Both are computed and the inspector applies the more conservative result. The next inspection date falls at half the remaining life or the code interval, whichever comes first."
          },
          {
              "q": "What must a calibration certificate contain to satisfy ISO/IEC 17025?",
              "a": "Identification of the item and the reference standards used, the calibration date, as-found and as-left results, measurement uncertainty stated with the result, the decision rule applied when conformity is declared, metrological traceability to national or international standards, environmental conditions where they affect the result, and the signature of the person authorising release. Omitting uncertainty or the decision rule is the finding auditors write most often."
          },
          {
              "q": "What does SNT-TC-1A require a written practice to contain?",
              "a": "Scope and the organisation it covers; each NDT method and level used; training hours and documented experience per method and level; examination content, grading and administration; the certifying agent; vision requirements and their frequency; recertification interval and route; the technical performance evaluation for reinstatement; and internal audit of the program. The written practice is the controlling document, not SNT-TC-1A itself, which is a recommended practice."
          },
          {
              "q": "Are these templates accepted by API and ASME auditors?",
              "a": "No template carries code approval, because neither API nor ASME certifies forms. An auditor judges the content of the completed record against the code clause it serves. These templates are structured to carry exactly that content, which is why they survive audit; what fails audit is a record missing thickness locations, uncertainty statements, essential variables or signatures, whatever the form it sits on."
          }
      ]
  },

  "/blog/iso-9712-certification-process-step-by-step-guide": {
      "answer": "ISO 9712 certification runs five fixed steps: complete training with a body the certification body recognises, log the minimum industrial experience for that method and level, pass the vision test, pass the written general, written specific and practical examinations at 70% each, then receive a certificate issued by an ISO/IEC 17024-accredited certification body. North American candidates route through TWI, TÜV or Canada's CAN/CGSB-48.9712 program.",
      "expansion": "Examination is three parts for Levels 1 and 2: a general written paper on the method's principles, a specific written paper on the codes, equipment and acceptance criteria of the sector, and a practical examination on real specimens with a written report. Level 3 replaces that with a basic examination covering materials and process technology, the certification body's qualification and certification system, and Level 2 general knowledge of four methods the candidate chooses, plus a main method examination that includes drafting an NDT procedure. A minimum grade of 70% is required in each part separately; averaging across parts is not permitted. Certification is granted within a named product or industrial sector, so a Level 2 ultrasonic certificate for welds does not cover castings. The certificate runs five years, is renewed once on evidence of continued work and a current vision test, and is recertified at ten years by examination.",
      "source": "ISO 9712:2021, Non-destructive testing — Qualification and certification of NDT personnel (third edition), issued by certification bodies accredited to ISO/IEC 17024; Canadian adoption CAN/CGSB-48.9712 administered through NRCan.",
      "table": {
          "caption": "ISO 9712:2021 certification, step by step",
          "columns": [
              "Step",
              "What it requires",
              "Level 3 difference",
              "Verified by"
          ],
          "rows": [
              [
                  "1. Training",
                  "Formal instruction in the method at a training organisation the certification body recognises, with minimum hours set per method and level in ISO 9712 Table 2",
                  "Adds the basic examination syllabus: materials and process technology plus the certification system",
                  "Certification body"
              ],
              [
                  "2. Industrial experience",
                  "Documented on-the-job experience in the method, counted in months against the level sought",
                  "Requires prior Level 2 experience and Level 2 general knowledge in four methods",
                  "Employer declaration submitted to the certification body"
              ],
              [
                  "3. Vision test",
                  "Near vision to Jaeger 1 or Times Roman N4.5 at not less than 30 cm, one or both eyes, corrected or uncorrected, plus colour contrast; repeated annually",
                  "Same requirement",
                  "Employer or approved medical practitioner"
              ],
              [
                  "4. Written examination",
                  "General paper on method principles plus specific paper on the sector's codes, equipment and acceptance criteria",
                  "Basic examination in three parts plus a main method examination",
                  "Certification body"
              ],
              [
                  "5. Practical examination",
                  "Specimens examined, equipment set up and calibrated, results recorded against acceptance criteria",
                  "Drafting an NDT procedure in place of routine testing",
                  "Certification body examiner"
              ],
              [
                  "6. Grading",
                  "Minimum 70% in each part separately",
                  "Same threshold, applied to each part of the basic and main examinations",
                  "Certification body"
              ],
              [
                  "7. Certificate",
                  "Issued for a named method, level and product or industrial sector; valid five years",
                  "Level 3 certificate carries authority to write and approve procedures",
                  "ISO/IEC 17024-accredited body"
              ],
              [
                  "8. Renewal and recertification",
                  "Renewed once at five years on continued activity and current vision; recertified at ten years by practical examination for Levels 1 and 2",
                  "Level 3 recertifies through a structured credit system or a written examination",
                  "Certification body"
              ]
          ],
          "note": "The certificate belongs to the individual and is issued by a third-party body, not the employer. That is the structural difference from ASNT SNT-TC-1A, where the employer certifies its own staff."
      },
      "facets": [
          {
              "q": "Can a US-based inspector get ISO 9712 certified without leaving North America?",
              "a": "Yes. Certification bodies including TWI, TÜV Rheinland and Bureau Veritas examine candidates at North American venues, and Canada runs its own adoption as CAN/CGSB-48.9712 through NRCan. Before booking, confirm the body's accreditation scope covers the exact method, level and sector wanted, because the certificate's value abroad depends on the ISO/IEC 17024 accreditation behind it."
          },
          {
              "q": "Does ASNT Level II transfer directly to ISO 9712 Level 2?",
              "a": "No automatic transfer exists. ISO 9712 requires examination by the certification body itself, so the general, specific and practical papers must be sat regardless of an existing ASNT credential. Some bodies grant credit against training hours or documented experience for ASNT-certified candidates, which shortens the route without removing the examination. Confirm the credit policy with the specific body before enrolling."
          },
          {
              "q": "What happens if you fail one part of the ISO 9712 examination?",
              "a": "Only the failed parts are re-sat; passed parts stand. Re-examination is permitted twice, inside a waiting period and a deadline the standard fixes, after which a candidate who has still not passed must requalify through fresh training and experience before applying again. This is why the practical examination, the part most often failed, is worth rehearsing on real specimens rather than photographs."
          },
          {
              "q": "What is a sector on an ISO 9712 certificate and why does it matter?",
              "a": "The sector fixes what the certificate authorises. Product sectors include welds, castings, forgings, tubes and pipes, and wrought products; industrial sectors include manufacturing, pre-service and in-service testing, railway maintenance and aerospace. A Level 2 ultrasonic certificate scoped to welds does not authorise casting inspection. Client audits check the sector line, and mismatched scope is a common reason for a technician being turned off site."
          },
          {
              "q": "What is a significant interruption and how does it affect an ISO 9712 certificate?",
              "a": "An absence from the duties of the certified method and level, long enough to break continuity, invalidates the certificate's continued validity. The holder must be re-examined before resuming work in that method. Employers avoid this by logging method-specific work activity continuously rather than reconstructing it at renewal, since the certification body asks for evidence of continued practice, not an assertion."
          },
          {
              "q": "Does an ISO 9712 certificate by itself authorise a technician to work?",
              "a": "No. Certification attests competence; the employer still issues written authorisation to operate, naming the equipment, procedures and scope the individual may work to. That split is deliberate and is what audit trails check: a valid third-party certificate, a current annual vision record, and an employer authorisation covering the specific job. Missing any of the three stops the technician at the gate."
          }
      ]
  },

  "/blog/api-617-centrifugal-compressor-inspection": {
      "answer": "API 617 governs the design, materials, fabrication and shop testing of new axial and centrifugal compressors, not in-service inspection intervals. Its inspection teeth are factory acceptance tests: hydrostatic testing of pressure-containing parts at 1.5 times maximum allowable working pressure, impeller overspeed at 115% of maximum continuous speed, and a four-hour mechanical running test at maximum continuous speed.",
      "expansion": "API 617 is organised in four parts: general requirements, non-integrally geared centrifugal and axial compressors, integrally geared centrifugal compressors, and expander-compressors. Acceptance in the shop is numeric. Unfiltered vibration during the mechanical running test must stay within A = 25.4 × √(12,000 / N) micrometres peak-to-peak, where N is maximum continuous speed in rpm. Residual unbalance is limited to 4W/N ounce-inches per plane, W being the static journal load in pounds. Thermodynamic performance is verified against ASME PTC 10, and shaft vibration and axial position instrumentation follows API 670. Nothing in API 617 sets a turnaround interval. In the United States the internal inspection frequency for a compressor in a covered process comes from the owner's mechanical integrity program under OSHA 29 CFR 1910.119(j), risk ranking per API RP 581, and the OEM manual. API 617 supplies the acceptance datum those later inspections are measured against.",
      "source": "API Standard 617, Axial and Centrifugal Compressors and Expander-compressors for Petroleum, Chemical and Gas Industry Services (8th edition and later), Parts 1–4; with ASME PTC 10, API Standard 670 Machinery Protection Systems, API Standard 614 lubrication and sealing systems, and API RP 684 for rotordynamics.",
      "table": {
          "caption": "API 617 shop acceptance tests — what a compressor must pass before it ships",
          "columns": [
              "Shop test",
              "Condition",
              "Acceptance criterion",
              "Purchaser witness"
          ],
          "rows": [
              [
                  "Hydrostatic test, pressure-containing parts",
                  "1.5 × maximum allowable working pressure",
                  "No visible leakage or weeping after a minimum 30-minute hold at pressure",
                  "Witnessed"
              ],
              [
                  "Casing gas leak test",
                  "Gas applied after hydrostatic test with the sealing arrangement in place",
                  "No detectable leakage across the specified hold period",
                  "Witnessed"
              ],
              [
                  "Impeller overspeed test",
                  "115% of maximum continuous speed, held not less than 1 minute",
                  "No permanent deformation; dimensional check and surface NDE repeated afterwards",
                  "Witnessed"
              ],
              [
                  "Residual unbalance check",
                  "Each correction plane after final rotor balance",
                  "4W/N ounce-inches per plane, W = static journal load in lb, N = maximum continuous speed in rpm",
                  "Witnessed"
              ],
              [
                  "Mechanical running test",
                  "4 hours continuous at maximum continuous speed after bearing temperatures and vibration stabilise",
                  "Unfiltered vibration within 25.4 × √(12,000 / N) micrometres peak-to-peak",
                  "Witnessed"
              ],
              [
                  "Performance test",
                  "ASME PTC 10 Type 1 on the specified gas, or Type 2 on an equivalent gas",
                  "Head, flow and power inside the PTC 10 tolerance bands",
                  "Purchaser-specified option"
              ],
              [
                  "Auxiliary system check",
                  "Lube and seal oil console built to API 614",
                  "Flushing cleanliness verified and function proven before the running test starts",
                  "Witnessed"
              ]
          ],
          "note": "Every row is a factory acceptance test. API 617 sets no in-service inspection interval; that comes from the owner's mechanical integrity program and risk ranking."
      },
      "facets": [
          {
              "q": "How often should a centrifugal compressor be opened for internal inspection?",
              "a": "API 617 sets no interval. For a US process unit covered by OSHA 29 CFR 1910.119, the interval is fixed by the owner's mechanical integrity program under paragraph (j), which requires inspection and testing to follow recognised and generally accepted good engineering practice at a frequency consistent with manufacturer recommendations and prior operating experience. API RP 581 risk ranking and vibration trend data then move individual machines earlier or later."
          },
          {
              "q": "What NDE is required on a compressor impeller?",
              "a": "Surface examination after final machining — magnetic particle on ferromagnetic materials, liquid penetrant on austenitic and other non-ferromagnetic materials — covering blade roots, fillets and cover-to-blade joints where fatigue initiates. Welded impellers get their welds examined before and after heat treatment. The examination is repeated after the 115% overspeed test, because the point of the overspeed run is to reveal what the machining inspection did not."
          },
          {
              "q": "What vibration level fails a compressor on the shop test?",
              "a": "Anything above A = 25.4 × √(12,000 / N) micrometres peak-to-peak unfiltered, with N in rpm, measured at the shaft during the four-hour mechanical running test. A 10,000 rpm machine therefore fails above roughly 28 micrometres. Field alarm and trip setpoints on the same machine come from API 670 instrumentation and are set against that shop baseline, not independently of it."
          },
          {
              "q": "What is the difference between API 617, API 618 and API 619?",
              "a": "API 617 covers axial and centrifugal compressors and expander-compressors — dynamic machines. API 618 covers reciprocating compressors for petroleum, chemical and gas service, with pulsation study requirements API 617 has no equivalent of. API 619 covers rotary-type positive displacement compressors, principally dry and oil-flooded screw machines. Drivers, gears, couplings and control systems sit in API 616, 613, 671 and 670 respectively."
          },
          {
              "q": "Does API 617 apply to a compressor already in service?",
              "a": "API 617 is a purchase specification, so it binds at procurement, fabrication and factory acceptance. After shipment its numbers keep working as the condition-monitoring datum: the shop vibration plots, residual unbalance record, as-built clearances and PTC 10 performance curve are what later readings are compared against. Rerates, rotor replacements and casing repairs are commonly written to API 617 clauses even decades after the original order."
          },
          {
              "q": "What baseline records do you need before an API 617 machine's first overhaul?",
              "a": "The as-built clearance record, the residual unbalance report per plane, the mechanical running test vibration data with Bode and polar plots, the rotor lateral analysis including critical speeds and amplification factors, the ASME PTC 10 performance curve, and the API 670 setpoint schedule. Without those, an overhaul measures the machine against nothing and every finding becomes an argument with the OEM."
          }
      ]
  },

  "/blog/asme-section-viii-division-1-pressure-vessel-ndt": {
      "answer": "Division 1 ties NDE extent to joint efficiency. Table UW-12 pays E = 1.00 on a Type 1 butt weld fully radiographed, 0.85 spot-radiographed, 0.70 unexamined — so the radiography decision sets shell thickness at design. UW-11(a) removes the choice for lethal service, for carbon steel above 1-1/2 in nominal thickness, and for unfired steam boilers above 50 psi.",
      "expansion": "Three paragraphs of Division 1 carry the NDE program. UW-11 states when radiography is compulsory rather than elective. Table UW-12 prices the election, because joint efficiency multiplies allowable stress in the thickness formula — dropping from full radiography to none costs roughly 40% more shell metal for the same design pressure. UW-51 and UW-52 give the acceptance criteria for full and spot radiography; Mandatory Appendix 4 governs rounded indications. Surface examination runs to Mandatory Appendix 6 for magnetic particle and Appendix 8 for penetrant, both rejecting any crack or linear indication and any rounded indication over 3/16 in. Section V supplies the technique — Article 2 for radiography, Article 4 for ultrasonics, Articles 6 and 7 for penetrant and magnetic particle, Article 9 for visual. UG-116(e) then stamps the extent achieved on the nameplate as RT-1 through RT-4, which is what an inspector reads before opening the manufacturer's data report.",
      "source": "ASME BPVC Section VIII, Division 1 (2023 Edition) — UW-2(a), UW-11, Table UW-12, UW-51, UW-52, UG-116(e), Mandatory Appendices 4, 6, 8 and 12; ASME BPVC Section V (2023 Edition), Articles 1, 2, 4, 6, 7 and 9; ASME Code Case 2235 (ultrasonic examination in lieu of radiography).",
      "table": {
          "caption": "NDE extent versus joint efficiency under ASME Section VIII Division 1",
          "columns": [
              "Examination scope",
              "E — Type 1 butt joint",
              "E — Type 2 butt joint",
              "When Division 1 compels it",
              "Acceptance standard"
          ],
          "rows": [
              [
                  "Full radiography",
                  "1.00",
                  "0.90",
                  "Lethal service; carbon steel over 1-1/2 in nominal thickness (lower thresholds per UCS-57); unfired steam boilers above 50 psi",
                  "UW-51 plus Mandatory Appendix 4"
              ],
              [
                  "Spot radiography",
                  "0.85",
                  "0.80",
                  "Elected to buy joint efficiency; one spot per 50 ft increment of weld, 6 in minimum film length",
                  "UW-52"
              ],
              [
                  "No radiography",
                  "0.70",
                  "0.65",
                  "Barred wherever UW-11(a) applies",
                  "Visual examination and weld-profile limits only"
              ],
              [
                  "Ultrasonic in lieu of radiography",
                  "As fully radiographed",
                  "As fully radiographed",
                  "Where radiography is impracticable or geometry defeats the image",
                  "Mandatory Appendix 12 / Code Case 2235"
              ],
              [
                  "Magnetic particle, ferromagnetic surfaces",
                  "Not applicable",
                  "Not applicable",
                  "Where the code, drawing or Authorized Inspector calls for surface examination",
                  "Appendix 6: no crack or linear indication; rounded indication over 3/16 in rejectable"
              ],
              [
                  "Liquid penetrant, non-ferromagnetic surfaces",
                  "Not applicable",
                  "Not applicable",
                  "Same trigger, non-magnetic materials",
                  "Appendix 8: indication limits identical to Appendix 6"
              ]
          ],
          "note": "Joint efficiency is a design multiplier, not a quality score. 1.00 against 0.70 is a 43% difference in required shell thickness at the same design pressure, which is why the radiography extent is fixed in the design calculation and stamped on the nameplate under UG-116(e)."
      },
      "facets": [
          {
              "q": "When does Division 1 require full radiography instead of spot?",
              "a": "UW-11(a) mandates full radiography for vessels in lethal service, for butt welds where nominal thickness exceeds 1-1/2 in (UCS-57, UNF-57, UHA-33 and UCL-35 set lower thresholds by material), for unfired steam boilers above 50 psi design pressure, and for nozzles and communicating chambers above the size and thickness limits in that paragraph. Everything else is the manufacturer's election against Table UW-12."
          },
          {
              "q": "Can ultrasonic testing replace radiography on a Division 1 vessel?",
              "a": "Yes, by two routes. Mandatory Appendix 12 covers ultrasonic examination of welds where Division 1 permits it, and ASME Code Case 2235 authorizes ultrasonics in lieu of radiography above a minimum thickness set in the Case. Both require a written procedure demonstrated on representative flaws, personnel qualified to the employer's written practice, and Authorized Inspector concurrence. Acceptance is flaw-based, not image interpretation."
          },
          {
              "q": "What does UW-51 reject on a full radiograph?",
              "a": "Any crack, and any zone of incomplete fusion or incomplete penetration, unconditionally. Elongated slag inclusions are rejected above 1/4 in where thickness is up to 3/4 in, above t/3 between 3/4 in and 2-1/4 in, and above 3/4 in beyond that. Groups of aligned inclusions are rejected when aggregate length exceeds t within a 12t span. Rounded indications go to Mandatory Appendix 4."
          },
          {
              "q": "Who is allowed to perform and interpret the NDE?",
              "a": "Personnel qualified under the manufacturer's written practice, which is built on ASNT SNT-TC-1A or ANSI/ASNT CP-189, with Section V Article 1 T-120 setting the baseline. A Level II interprets and evaluates against the acceptance criteria; a Level III writes and approves the procedure. Vision records, training hours and experience hours are part of the evidence an Authorized Inspector audits, alongside the radiographs."
          },
          {
              "q": "What do the RT-1, RT-2, RT-3 and RT-4 nameplate stamps mean?",
              "a": "UG-116(e) markings for radiography extent. RT-1 means the complete vessel satisfies full radiography under UW-11(a). RT-2 means Category A and D welds are fully radiographed with spot radiography on B and C. RT-3 means the complete vessel is spot radiographed to UW-52. RT-4 means partial radiography of less scope than the above. The stamp fixes which joint efficiency the design was permitted to use."
          },
          {
              "q": "What does lethal service change under UW-2(a)?",
              "a": "All butt-welded joints are fully radiographed, Category A and B joints are restricted to Type 1 or Type 2 butt welds, and carbon and low-alloy steel vessels are postweld heat treated regardless of thickness. The elective spot-radiography route in Table UW-12 closes entirely. Lethal service is a user designation, so the specification sheet — not the fabricator — triggers it."
          }
      ]
  },

  "/blog/ndt-inspection-cost-2026-by-method-pricing-matrix": {
      "answer": "Four billing structures set an NDT quote: day rate, piece rate (per joint, per film, per square metre), unit rate with a daily minimum, and lump sum. Method fixes which one applies — ultrasonic thickness prices per area, PAUT and TOFD per joint or crew hour, radiography per exposure, MT, PT and VT per crew hour. Mobilisation, standby and Level III review sit outside the unit rate.",
      "expansion": "Six variables move an NDT price before any provider's margin enters: method and equipment intensity, certification level required, access, governing code, volume and schedule, and geography. Radiography carries a regulatory cost floor the others do not — US NRC 10 CFR Part 34 requires at least two qualified individuals at a temporary jobsite, licensing covers the source, 49 CFR governs transport, and the area clearance stops production while the crew works. Code scope drives documentation: ASME Section V technique, API 510, 570 or 653 in-service criteria, and AWS D1.1 Clause 8 acceptance each carry different procedure and review burden. Compare bids by converting every pricing model into cost per completed and reported joint or square metre, then check what the cheapest bid removed — calibration certificates, procedure qualification, POD demonstration on PAUT, or Level III review. Atlantis NDT publishes no rate card; scopes are quoted against an asset list, code and access conditions.",
      "source": "US NRC 10 CFR Part 34 (industrial radiographic operations, including 34.41 on temporary jobsites); 49 CFR Parts 171–180 (radioactive material transport); ASME BPVC Section V (2023 Edition); API 510, API 570, API 653; AWS D1.1/D1.1M:2020 Clause 8; ASNT SNT-TC-1A (2020).",
      "table": {
          "caption": "Billing unit, crew and out-of-scope lines by NDT method",
          "columns": [
              "Method",
              "Standard billing unit",
              "Minimum crew",
              "Billed as separate lines",
              "Cost driver buyers miss"
          ],
          "rows": [
              [
                  "Ultrasonic thickness / corrosion mapping",
                  "Per square metre or per grid point",
                  "One Level II",
                  "Surface prep, insulation removal, scaffold",
                  "Grid density is set by the CML register, not by the wall area"
              ],
              [
                  "Phased array (PAUT)",
                  "Per joint or per crew hour",
                  "Level II with PAUT qualification, plus analyst",
                  "Procedure qualification, POD demonstration, encoder setup",
                  "Offline analysis and reporting land after the crew demobilises"
              ],
              [
                  "Radiographic testing (gamma or X-ray)",
                  "Per exposure or per film",
                  "Two qualified individuals minimum at a temporary jobsite (10 CFR 34.41)",
                  "Barricading, area clearance, night-shift premium, source transport",
                  "Production stopped inside the barricade while shots are taken"
              ],
              [
                  "TOFD",
                  "Per joint",
                  "Level II with TOFD qualification",
                  "Pairing with PAUT or manual UT for near-surface coverage",
                  "Near-surface dead zone forces a complementary technique"
              ],
              [
                  "Magnetic particle (MT)",
                  "Per crew hour",
                  "One Level II",
                  "Surface prep, demagnetisation, consumables",
                  "Wet fluorescent needs darkened conditions and light-meter verification"
              ],
              [
                  "Liquid penetrant (PT)",
                  "Per crew hour",
                  "One Level II",
                  "Consumables, inter-stage cleaning, waste handling",
                  "Dwell times bill as crew time with no production against them"
              ],
              [
                  "Eddy current tube inspection (ET)",
                  "Per tube or per crew hour",
                  "Level II plus data analyst",
                  "Probe sets matched to tube ID, bundle access, prove-up",
                  "Analysis is priced per tube, so bundle count drives the total"
              ],
              [
                  "MFL tank floor / pipeline",
                  "Per square metre of floor or per pipeline kilometre",
                  "Crew plus analyst",
                  "Cleaning, degassing, entry permits, cleaning runs",
                  "Every MFL indication needs UT prove-up before it means anything"
              ]
          ],
          "note": "None of these figures is a price. The table fixes what the unit of billing is per method, so competing quotes on different models can be normalised before comparison. Atlantis NDT quotes on scope — asset list, methods, governing code, volume and access."
      },
      "facets": [
          {
              "q": "How do I compare NDT bids priced on different models?",
              "a": "Convert each to cost per completed and reported unit — per joint, per square metre, per tube. A day rate hides throughput, a piece rate hides standby, and a lump sum embeds a risk premium sized to how vague your RFP was. Ask every bidder to price the same defined volume under all models they offer, and to break out mobilisation and demobilisation as separate lines."
          },
          {
              "q": "Why does radiography cost more per shift than ultrasonic testing?",
              "a": "Regulation, not equipment. 10 CFR Part 34 requires a licensed source, a radiation safety programme, and at least two qualified individuals present at a temporary jobsite, while 49 CFR governs transport of the source to site. The barricade clears production personnel from the area, so the plant loses working time the ultrasonic crew never costs it. Night and shutdown scheduling follows from that."
          },
          {
              "q": "Is PAUT more expensive than conventional UT?",
              "a": "Per crew hour, yes — specialist certification, higher equipment value, encoder scanning and analyst time. Per completed weld, the picture reverses on volume scopes: PAUT covers welds several times faster, characterises flaws rather than just detecting them, and removes the radiation barricade that stops adjacent work. Price the campaign, not the hour, and require POD demonstration before award."
          },
          {
              "q": "What belongs in an NDT RFP to stop contingency loading?",
              "a": "An asset scope sheet, the exact methods and governing code, a volume estimate with a tolerance band, schedule and shift pattern, access conditions, deliverable format, certification requirements, preferred pricing model, separate mobilisation and demobilisation lines, and safety metrics. Vague RFPs are priced for the worst case the bidder can imagine, and that contingency never comes back to you as a rebate."
          },
          {
              "q": "Which extras are legitimate rather than padding?",
              "a": "Mobilisation and demobilisation, per diem for out-of-town crews, overtime and shift premiums, offshore and sour-service uplifts, safety standby, calibration blocks and reference standards, consumables, procedure development, rush reporting, and standby during client delays. Each is a real cost. The test is whether it appears in the quote as a named line or arrives later as a change order."
          },
          {
              "q": "What does the cheapest NDT bid usually leave out?",
              "a": "Current calibration certificates on the instruments, a qualified written procedure for the technique, verified personnel certifications, POD validation on PAUT, Level III review of the results, and a reporting format your integrity system can actually ingest. Every one of those is invisible at award and expensive at audit — re-inspection at best, a missed defect in service at worst."
          }
      ]
  },

  "/visual-testing": {
      "answer": "ASME Section V Article 9 makes visual examination measurable: 100 fc (1000 lux) minimum at the surface, the eye within 24 in (600 mm), and a viewing angle no flatter than 30 degrees. Examiners hold an annual near-vision test to Jaeger J-1 at 12 in. Remote visual is acceptable once its resolution is demonstrated equivalent to direct viewing.",
      "expansion": "Visual examination fails audits more often than any other method because the conditions are specified and most providers do not record them. Article 9 sets the illumination, the distance and the angle for direct examination, T-953 sets the equivalence test for remote systems, and T-921 sets the vision requirement for the examiner. Acceptance comes from elsewhere: AWS D1.1 Clause 8 for structural welds, API 510, 570 and 653 for in-service condition, ASME PCC-2 for repairs, ISO 17637 in Europe. Remote visual inspection carries the same discipline through borescopes, videoscopes and crawlers into vessels, tube bundles and spaces where entry costs money or risk, with imagery retained so a finding survives re-examination. Drone capture reaches flare tips, columns and tank roofs under a written, Level III-approved procedure. What visual cannot do is subsurface: tight fatigue cracks stay invisible until magnetic particle or penetrant opens them up.",
      "source": "ASME BPVC Section V (2023 Edition), Article 9 — T-921 vision requirement, T-952 direct visual, T-953 remote visual, T-954 translucent visual; AWS D1.1/D1.1M:2020 Clause 8 and Table 8.1 (Table 6.1 in editions through 2015); API 510, API 570, API 653; ASNT SNT-TC-1A (2020).",
      "table": {
          "caption": "Visual examination modes and the conditions each has to evidence",
          "columns": [
              "Mode",
              "Governing paragraph",
              "Lighting or resolution requirement",
              "Access condition",
              "Primary application"
          ],
          "rows": [
              [
                  "Direct visual",
                  "ASME V T-952",
                  "100 fc (1000 lux) minimum at the surface, verified with a calibrated light meter",
                  "Eye within 24 in (600 mm) of the surface, viewing angle 30 degrees or steeper",
                  "Weld acceptance, external walkdown, in-service condition"
              ],
              [
                  "Remote visual",
                  "ASME V T-953",
                  "Resolution demonstrated at least equivalent to direct visual examination",
                  "No entry; borescope, videoscope, crawler or pan-tilt-zoom camera",
                  "Vessel and boiler internals, tube bundles, turbine and engine internals"
              ],
              [
                  "Translucent visual",
                  "ASME V T-954",
                  "Artificial light source directed through the part, supplementing direct visual",
                  "Direct visual conditions apply in addition",
                  "Translucent materials where transmitted light reveals the discontinuity"
              ],
              [
                  "Structural weld visual",
                  "AWS D1.1:2020 Clause 8, Table 8.1",
                  "Clause 8 lighting and inspector qualification (CWI or equivalent)",
                  "Contact access to the joint",
                  "Undercut, profile, porosity, fillet size, arc strikes, cracks"
              ],
              [
                  "In-service visual",
                  "API 510, API 570, API 653",
                  "Direct visual conditions at the examined surface",
                  "Scaffold, rope access, insulation removal or drone",
                  "External condition, CUI evidence, internal inspection at code interval"
              ],
              [
                  "Drone / UAV visual",
                  "Written procedure route, ASME V Article 1",
                  "Camera resolution demonstrated against the acceptance criteria in use",
                  "Line of sight; FAA Part 107 pilot certification in the US",
                  "Flare stacks, columns, tank roofs, offshore structures, hull externals"
              ]
          ],
          "note": "Two records decide whether a visual examination survives audit: the light-meter reading taken at the surface, and the examiner's current vision certificate. Their absence is a finding in its own right, whatever the examination reported."
      },
      "facets": [
          {
              "q": "What is the minimum light level for direct visual examination?",
              "a": "100 fc, equal to 1000 lux, at the examined surface under ASME Section V T-952 — measured at the surface with a calibrated light meter, not estimated from ambient plant lighting. The reading is recorded with the examination. Fine surface detail and low-contrast conditions warrant more, and the written procedure states the figure used along with the verification method."
          },
          {
              "q": "How often must a visual examiner's eyesight be tested?",
              "a": "Annually. ASME Section V Article 9 T-921 requires a near-distance acuity test demonstrating the ability to read standard Jaeger J-1 letters at not less than 12 in, with natural or corrected vision. Colour contrast differentiation is set by the employer's written practice under SNT-TC-1A. Both records live in the examiner's certification file and are the first thing an auditor asks for."
          },
          {
              "q": "Can remote visual inspection replace vessel entry?",
              "a": "Where equivalence is demonstrated, yes. T-953 accepts remote systems whose resolution is at least equivalent to direct visual examination, proven on the actual or a representative surface rather than assumed from a camera specification. Recorded imagery lets a finding be re-examined without re-mobilising. Where the damage mechanism or the code demands close-up coverage of a specific location, entry remains the right call."
          },
          {
              "q": "AWS CWI or ASNT VT Level II — which does weld inspection need?",
              "a": "The contract decides. CWI is a welding-specific certification issued by AWS and covers visual weld acceptance to D1.1 and D1.6, and Clause 8 names it for structural work. ASNT VT Level II is a broader NDT method certification issued by the employer under SNT-TC-1A and covers visual examination across all scenarios. Many inspectors hold both because their client base names both."
          },
          {
              "q": "What undercut does AWS D1.1 accept?",
              "a": "On statically loaded structures, undercut is limited to 1/32 in where base metal is under 1 in thick, with 1/16 in permitted over an accumulated length of 2 in in any 12 in of weld; for material 1 in and thicker the limit is 1/16 in. Cyclically loaded members are tighter. Cracks are rejected at any size, in every category."
          },
          {
              "q": "What does visual examination miss?",
              "a": "Everything subsurface, and anything the eye cannot resolve at the specified distance and lighting. Tight fatigue cracks stay invisible until a surface method opens them, laminations and lack of fusion need volumetric methods, and coating hides the metal entirely. Visual examination is the scoping method: it decides where the ultrasonic and radiographic budget goes, then hands the confirmation to MT or PT."
          }
      ]
  },

  "/ndt-training-malaysia": {
      "answer": "Petronas Technical Specifications accept ASNT SNT-TC-1A and ISO 9712 interchangeably, so the Malaysian question is portability rather than acceptance. SNT-TC-1A certificates are issued by your employer and stop at the gate; ISO 9712 certificates are issued by an accredited body and travel between employers. Examinations run at PETRONAS Leadership Centre Bangi, TUV NORD Malaysia and Bureau Veritas in Kuala Lumpur.",
      "expansion": "ASNT SNT-TC-1A is the United States model and it certifies through the employer: the employer writes a written practice, a qualified Level III administers the general, specific and practical examinations, and the certificate is valid inside that company. ISO 9712:2021 inverts it — an accredited certification body examines and certifies, and the certificate follows the technician. Malaysian demand splits along that line. Petronas and its subsidiaries accept either on PTS scopes covering Pengerang RAPID, Petronas Chemicals and Carigali assets. PCN and CSWIP carry weight on UK-led FPSO and offshore packages, and MMHE Pasir Gudang works to ABS and Lloyd's Register protocols under IACS marine NDE acceptance. Radiography adds a second gate no method certificate satisfies: industrial radiography in Malaysia is licensed by the Atomic Energy Licensing Board under the Atomic Energy Licensing Act 1984 (Act 304), covering the source, the facility and the operator.",
      "source": "ASNT SNT-TC-1A (2020) and ANSI/ASNT CP-189; ISO 9712:2021; Petronas Technical Specifications (PTS) personnel certification requirements; Atomic Energy Licensing Act 1984 (Act 304), administered by the Atomic Energy Licensing Board (AELB); IACS Rec. 20 for marine and offshore NDE.",
      "table": {
          "caption": "Certification schemes on Malaysian scopes — who issues the certificate and whether it travels",
          "columns": [
              "Scheme",
              "Certificate issued by",
              "Portable between employers",
              "Validity and renewal",
              "Where it carries weight in Malaysia"
          ],
          "rows": [
              [
                  "ASNT SNT-TC-1A",
                  "The employer, against its own written practice",
                  "No — reissued on change of employer",
                  "5-year recertification cycle recommended",
                  "Petronas PTS scopes, US-linked EPC, general onshore work"
              ],
              [
                  "ANSI/ASNT CP-189",
                  "The employer, but against a standard rather than a recommended practice",
                  "No",
                  "5-year cycle",
                  "Contracts that name a standard instead of a recommended practice"
              ],
              [
                  "ASNT NDT Level III",
                  "ASNT, centrally examined",
                  "Yes",
                  "5-year cycle",
                  "Level III oversight, written-practice approval, audit defence"
              ],
              [
                  "ISO 9712:2021",
                  "Accredited third-party certification body",
                  "Yes",
                  "Valid 5 years, renewed at 5, recertified at 10",
                  "PTS scopes, EU and Japanese EPC, most owner approvals"
              ],
              [
                  "PCN",
                  "BINDT through approved examination centres",
                  "Yes",
                  "Valid 5 years, recertification at 10",
                  "UK-led FPSO and offshore packages"
              ],
              [
                  "CSWIP",
                  "TWI Certification Ltd",
                  "Yes",
                  "5-year cycle",
                  "Welding inspection and offshore fabrication, including MMHE yard work"
              ],
              [
                  "API ICP (510 / 570 / 653)",
                  "API, centrally examined",
                  "Yes",
                  "3-year recertification cycle",
                  "Owner-operator inspector roles, not NDT method examination"
              ]
          ],
          "note": "SNT-TC-1A is a recommended practice, not a standard. The binding document is the employer's written practice, which is why a Malaysian employer hiring an ASNT-certified technician re-examines rather than accepts the certificate. ISO 9712 removes that step, and that is the whole basis for choosing between them."
      },
      "facets": [
          {
              "q": "Does Petronas require ISO 9712, or is ASNT accepted?",
              "a": "Petronas Technical Specifications accept ASNT SNT-TC-1A and ISO 9712 interchangeably, so an ASNT-certified technician is not shut out of PTS scopes. The practical difference appears on movement: an ASNT certificate is granted by one employer and is re-examined by the next, while an ISO 9712 certificate is granted by a certification body and transfers intact. Contractors rotating crews between operators favour ISO 9712 for that reason."
          },
          {
              "q": "What licence does an industrial radiographer need in Malaysia?",
              "a": "Authorisation from the Atomic Energy Licensing Board under the Atomic Energy Licensing Act 1984 (Act 304), covering the source, the storage facility and the individual operating it. An RT Level II certificate qualifies the technician to interpret radiographs; it does not authorise possession or use of a radioactive source. Both are required before a gamma crew works a Malaysian site, and the licensing timeline is the longer of the two."
          },
          {
              "q": "Does an ASNT Level II from a US employer transfer to a Malaysian employer?",
              "a": "The certificate does not; the hours behind it do. Under SNT-TC-1A the new employer certifies against its own written practice, which means fresh general, specific and practical examinations — but documented training hours and on-the-job experience hours carry across and satisfy the prerequisite. Have training records and experience logs in hand at interview. ISO 9712, PCN and CSWIP transfer without re-examination."
          },
          {
              "q": "How long is an ISO 9712 certificate valid?",
              "a": "Five years. Renewal at the five-year point requires evidence of continued activity in the method without significant interruption and a current vision test. At ten years the holder recertifies, which brings back a practical or structured examination rather than a paperwork check. Missing the renewal window costs far more than meeting it, because lapsed certification restarts the examination sequence."
          },
          {
              "q": "Which method should a Malaysian technician certify in first?",
              "a": "Ultrasonic testing. It carries the fixed-equipment and piping work that PTS scopes generate across Pengerang, Petronas Chemicals and Carigali assets, and it is the base for PAUT and TOFD progression on MMHE and FPSO fabrication. Magnetic particle and penetrant reach Level II fastest on experience hours and pair well with UT. Radiography is gated by AELB licensing on top of the certification."
          },
          {
              "q": "What must on-site corporate training include to survive an audit?",
              "a": "A compliant written practice the certifications are issued against, a qualified Level III administering the examinations, method-specific practical work on your own equipment and specimens, the three examination records per candidate, documented training hours, on-the-job experience logs, and current vision records. Auditors examine the written practice and the personnel file, not the course brochure — the training only matters as evidence inside them."
          }
      ]
  },

  "/ndt-training-atlanta": {
      "answer": "Atlantis delivers NDT training on-site at your facility across Georgia rather than from a classroom in Atlanta. Under ASNT SNT-TC-1A the employer certifies the technician against its own written practice, so a training provider supplies hours, examinations and Level III oversight — never the certificate. Level II ultrasonic recommends 40 hours of Level I training plus 40 at Level II, and 630 documented hours of in-method experience.",
      "expansion": "Atlanta's inspection demand comes from Southeast power generation, aerospace manufacturing and MRO, structural fabrication, and pressure equipment across Georgia — assets examined on code intervals by people whose qualification can be evidenced. That pulls ultrasonic testing and radiography hardest in fixed equipment, magnetic particle and penetrant in fabrication, and eddy current and fluorescent penetrant in aerospace MRO, where NAS 410 and EN 4179 govern personnel rather than SNT-TC-1A. Two certification models operate in the United States and they are not interchangeable. SNT-TC-1A certification is granted by the employer against its written practice, which is why auditors ask for that document rather than a certificate. ISO 9712, PCN and CSWIP certify through an independent body, so the certificate is portable. ANSI/ASNT CP-189 sits between them as a standard rather than a recommended practice. Which one you need is a contractual question your client base has already answered.",
      "source": "ASNT SNT-TC-1A (2020), Table 6.3.1A recommended initial training and experience; ANSI/ASNT CP-189; ISO 9712:2021; NAS 410 / EN 4179 for aerospace NDT personnel qualification; ASME BPVC Section V (2023 Edition), Article 1 T-120.",
      "table": {
          "caption": "SNT-TC-1A recommended initial training and in-method experience, by method",
          "columns": [
              "Method",
              "Level I training (hours)",
              "Level II training (additional hours)",
              "Level I experience in method (hours)",
              "Level II experience in method (hours)"
          ],
          "rows": [
              [
                  "Ultrasonic testing (UT)",
                  "40",
                  "40",
                  "210",
                  "630"
              ],
              [
                  "Radiographic testing (RT)",
                  "40",
                  "40",
                  "210",
                  "630"
              ],
              [
                  "Eddy current testing (ET)",
                  "40",
                  "40",
                  "210",
                  "630"
              ],
              [
                  "Magnetic particle testing (MT)",
                  "12",
                  "8",
                  "70",
                  "210"
              ],
              [
                  "Liquid penetrant testing (PT)",
                  "4",
                  "8",
                  "70",
                  "140"
              ],
              [
                  "Visual testing (VT)",
                  "8",
                  "16",
                  "70",
                  "140"
              ]
          ],
          "note": "SNT-TC-1A figures are recommendations. The binding document is the employer's written practice, which raises them on aerospace scopes qualified to NAS 410 or EN 4179 and on many Georgia contracts. Experience hours, not classroom hours, are the constraint on how fast a technician reaches Level II."
      },
      "facets": [
          {
              "q": "Does Atlantis run a classroom in Atlanta?",
              "a": "No. Training is delivered on-site at your own facility anywhere in Georgia and the surrounding Southeast, which for a corporate buyer removes travel days and lets the practical specimens match the boilers, steam piping or aerospace components your people actually examine. Individuals are served by scheduled cohorts at other locations or by blended delivery — online theory with supervised practical arranged locally."
          },
          {
              "q": "Who issues the certificate — the training provider or the employer?",
              "a": "The employer, under SNT-TC-1A. A training provider supplies the classroom hours, administers examinations, and provides the Level III who approves the written practice and signs off — but the certification document is issued by the employing company against its own written practice. That is why an auditor asks to see the written practice first and the certificates second, and why a course completion record alone certifies nobody."
          },
          {
              "q": "What examinations does Level II require, and what counts as a pass?",
              "a": "Three: a general examination on method principles, a specific examination on the employer's own procedures and equipment, and a practical examination on representative specimens. SNT-TC-1A sets the pass as a composite grade of at least 80% with no individual examination below 70%. Documented training hours, in-method experience hours and a current near-vision and colour-contrast test are prerequisites, not alternatives."
          },
          {
              "q": "Does my Level II transfer if I change employers in Georgia?",
              "a": "Not as a certificate. The new employer certifies you against its written practice, which means new examinations — but your documented training and experience hours transfer and satisfy the prerequisites, so the sequence is short. Keep the hour logs and examination records yourself rather than leaving them with a former employer. ISO 9712, PCN and CSWIP certificates are portable and skip this entirely."
          },
          {
              "q": "Which methods does Atlanta's industrial base certify in most?",
              "a": "Ultrasonic testing and radiography for power generation and pressure equipment across Georgia; magnetic particle and penetrant for structural and fabrication work; eddy current and fluorescent penetrant for aerospace manufacturing and MRO, where personnel qualify under NAS 410 or EN 4179 rather than SNT-TC-1A. A Georgia programme built on that demand beats one covering every method thinly."
          },
          {
              "q": "Can we certify our own technicians without an outside body?",
              "a": "Yes — that is exactly the SNT-TC-1A model, and it requires two things: a compliant written practice, and a qualified Level III to approve procedures and administer examinations. Operators without an in-house Level III use an outsourced one. Close that gap before certifying anyone, because certifications issued without a qualified Level III behind the written practice do not survive a client audit."
          }
      ]
  },

  "/3d-scanning-singapore": {
      "answer": "Survey-grade terrestrial LiDAR across Jurong Island and the Tuas and Pasir Gudang yards registers to low-millimetre accuracy over a process unit — but the governing figure is registered-network accuracy, not the single-scan number on the instrument datasheet. Deliverables ship as LAS, E57, RCP or RCS point clouds, Revit, IFC or DWG as-builts, deformation comparison, or geometry prepared for a digital twin.",
      "expansion": "Singapore's scanning demand is refining, marine and offshore EPC: ExxonMobil, Shell and Singapore Refining Company units on Jurong Island, Keppel and Sembcorp Marine yards, FPSO conversion, Tuas port construction. Each attaches the scan to a code deliverable. API 653 Annex B evaluates tank bottom settlement from shell elevation measurements at a minimum of eight equally spaced points no more than 32 ft apart — a single scan captures that plus verticality, roundness and peaking in one mobilisation. API 510 uses the same capture for pressure-vessel deformation, and IACS Rec. 20 governs marine NDE acceptance on classification surveys for ABS, DNV, Lloyd's Register and Bureau Veritas. Specify accuracy and model detail as two separate numbers: the USIBD Level of Accuracy specification for tolerance, the BIMForum Level of Development specification for how much geometry gets modelled. Modelling detail, not capture, dominates schedule and cost.",
      "source": "API 653 (5th Edition) Annex B, tank bottom settlement evaluation; API 510; ASME BPVC Section V (2023 Edition); USIBD Level of Accuracy (LOA) Specification, Guide C120; BIMForum Level of Development (LOD) Specification; IACS Rec. 20; manufacturer datasheets for Leica RTC360, FARO Focus Premium and RIEGL VZ-400i.",
      "table": {
          "caption": "Reality-capture methods on Singapore process and marine assets, by published accuracy",
          "columns": [
              "Capture method",
              "Representative instrument",
              "Manufacturer-stated accuracy",
              "Practical range",
              "Best fit"
          ],
          "rows": [
              [
                  "Survey-grade terrestrial LiDAR",
                  "Leica RTC360",
                  "3D point accuracy 2.9 mm at 20 m",
                  "Up to 130 m",
                  "Congested process units, pipe racks, module interfaces"
              ],
              [
                  "Mid-range terrestrial LiDAR",
                  "FARO Focus Premium",
                  "Ranging error ±1 mm",
                  "Up to 350 m",
                  "Vessels, tank shells, structural steel, plant buildings"
              ],
              [
                  "Long-range terrestrial LiDAR",
                  "RIEGL VZ-400i",
                  "5 mm accuracy, 3 mm precision",
                  "Up to 800 m",
                  "Flare stacks, jetties, whole-yard control and tie-in"
              ],
              [
                  "Drone / UAV photogrammetry",
                  "RTK multirotor with 20–45 MP sensor",
                  "Centimetre class, driven by ground sample distance and ground control",
                  "Visual line of sight",
                  "Tank roofs, flare tips, hull externals, elevated structures"
              ],
              [
                  "SLAM mobile scanning",
                  "Handheld or wearable mobile mapper",
                  "Centimetre class",
                  "Walking speed, continuous",
                  "First-pass coverage, confined spaces, congested routes"
              ],
              [
                  "Tactile metrology",
                  "Portable arm CMM",
                  "0.03–0.1 mm volumetric, by arm size",
                  "Arm envelope",
                  "Flange faces, machined interfaces, nozzle and seat geometry"
              ]
          ],
          "note": "Instrument accuracy is not deliverable accuracy. Multi-station registration and the control survey tying it together set the number engineering can rely on. State the tolerance the downstream work needs before capture, and require the registration report to ship with the point cloud."
      },
      "facets": [
          {
              "q": "What accuracy does a laser scan actually deliver on a process unit?",
              "a": "Low millimetres across a registered network on survey-grade terrestrial scanning — which is a different number from the single-scan specification the instrument manufacturer quotes. Registration error accumulates across stations and is controlled by target placement and a total-station control network. The registration report states the achieved figure, and that is the value engineering tolerances are checked against, not the datasheet."
          },
          {
              "q": "How do I specify accuracy in a scanning contract?",
              "a": "Use two independent specifications. The USIBD Level of Accuracy specification defines graded tolerance tiers and separates Measured Accuracy — how well the capture matches reality — from Represented Accuracy, how well the delivered model matches the capture. The BIMForum Level of Development specification defines how much geometry is modelled. Naming one without the other is what produces a model that is precise and useless, or detailed and wrong."
          },
          {
              "q": "Can a laser scan satisfy an API 653 settlement survey?",
              "a": "It captures the measurements. API 653 Annex B evaluates bottom settlement from shell elevations at a minimum of eight equally spaced points spaced no more than 32 ft apart, and a registered scan yields those elevations plus verticality, roundness and peaking from one mobilisation. The evaluation — the cosine-curve fit separating rigid-body tilt from out-of-plane settlement — remains an engineering judgement made against the code."
          },
          {
              "q": "Which deliverable format goes with which downstream tool?",
              "a": "E57 is the open exchange format and the one to demand as the archival copy. RCP and RCS feed Autodesk products. LAS suits survey and GIS workflows. As-built geometry ships as Revit, IFC, AutoCAD DWG or MicroStation. IFC is the format that survives a change of engineering contractor. Where the scan feeds an integrity programme, geometry is prepared so inspection data binds to locations on the model."
          },
          {
              "q": "How long does scanning a Jurong Island unit take?",
              "a": "Capture is the short part — a process unit is scanned in days. Registration, quality control and as-built modelling take longer and scale directly with the level of detail requested, which is why agreeing that level against the actual downstream use is the largest single lever on both schedule and cost. Mobilisation on Singapore sites runs within 24 to 72 hours of scope agreement."
          },
          {
              "q": "Should I scan the whole site or start with one unit?",
              "a": "Start where condition data justifies it. Scanning an entire plant at high density before deciding what data attaches to the geometry is the standard way to overspend on reality capture. On integrity programmes the binding constraint is reconciling the corrosion monitoring location register against the model, not capturing geometry — solve that on one unit, then replicate the pattern across the site."
          }
      ]
  },

  "/resources/calibration-certificate-template": {
      "answer": "Download the DOCX and issue it unchanged: it carries every ISO/IEC 17025:2017 §7.8 reporting element — certificate number, laboratory and customer identity, instrument under test, environmental conditions, reference standards, as-found and as-left results, expanded uncertainty at k=2, decision rule, traceability statement, and authorised signature. Certificates missing uncertainty, decision rule or traceability are the three that fail audits.",
      "expansion": "North American certificates are assessed against ISO/IEC 17025:2017 §7.8 by A2LA, ANAB and NVLAP, with metrological traceability carried to NIST through an unbroken chain of comparisons. Three elements fail assessment more than the rest. Expanded uncertainty must be reported with its coverage factor and stated level of confidence — k=2 for a 95 percent interval. The decision rule must be stated whenever the certificate declares in-tolerance or out-of-tolerance, because the uncertainty interval straddles the tolerance limit; guard-banding shrinks the acceptance zone by a defined multiple of uncertainty, simple acceptance does not shrink it at all. As-found data must appear before any adjustment, because that record alone establishes whether thickness readings taken since the previous calibration remain defensible. One more trap: the laboratory cannot print a recommended calibration interval on the certificate unless the customer agreed to it — interval ownership sits with the equipment owner, not the lab.",
      "source": "ISO/IEC 17025:2017, §7.8 (Reporting of results) and §7.8.6 (Reporting statements of conformity); JCGM 100:2008 (GUM) for uncertainty evaluation; ILAC-G8:09/2019 for decision rules and guard-banding.",
      "table": {
          "caption": "The eleven ISO/IEC 17025:2017 §7.8 certificate elements and how each one fails an audit",
          "columns": [
              "§7.8 element",
              "What must appear on the certificate",
              "How it fails an audit",
              "NDT example"
          ],
          "rows": [
              [
                  "Certificate identification",
                  "Unique number, issue date, page x of y, issuing laboratory and its accreditation number",
                  "A reissued certificate reuses the original number, breaking the record chain",
                  "Certificate number cited on the equipment log line of every weld report that used the instrument"
              ],
              [
                  "Customer and item under test",
                  "Customer identity, plus description, manufacturer, model, serial number, owner asset tag, range and resolution",
                  "Serial number omitted, so the certificate cannot be tied to the instrument in the field",
                  "Flaw detector serial recorded alongside the specific probe and wedge serials"
              ],
              [
                  "Environmental conditions",
                  "Temperature, humidity and pressure where they affect the result",
                  "Recorded as \"ambient\" with no measured value",
                  "Thickness gauge calibrated at 21 °C, then used on a hot line without velocity correction"
              ],
              [
                  "Reference standards used",
                  "Identity, certificate number and traceability chain of each standard",
                  "Standard listed by name only, with no certificate number to follow upstream",
                  "IIW V1 block and step wedge, each carrying its own traceable certificate"
              ],
              [
                  "As-found results",
                  "Measured values and errors recorded before any adjustment",
                  "Only as-left reported, so work done since the last calibration cannot be judged",
                  "Gauge found reading high — every survey since the previous calibration is re-evaluated"
              ],
              [
                  "As-left results",
                  "Measured values after adjustment or repair",
                  "Reported identical to as-found with no statement that no adjustment was made",
                  "Post-adjustment step-wedge readings inside stated tolerance"
              ],
              [
                  "Measurement uncertainty",
                  "Expanded uncertainty with coverage factor and confidence level",
                  "A bare ± figure with no k value, unusable by the reader",
                  "Uncertainty stated with k=2 and 95 percent coverage across the gauge working range"
              ],
              [
                  "Decision rule and traceability",
                  "The rule applied to any conformity statement, plus the SI traceability statement and authorised signature",
                  "\"Pass\" printed with no rule stated and no named technical signatory",
                  "Guard-banded acceptance: reject where measured error plus expanded uncertainty crosses the tolerance limit"
              ]
          ],
          "note": "The template covers all eleven §7.8 elements. The four that fail assessment most often are expanded uncertainty, decision rule, traceability and as-found data. Atlantis NDT builds branded, auto-numbered versions with an integrated uncertainty budget and QR-code traceability, and the ERP calibration module issues them automatically with due-date alerts — demo or quote on request."
      },
      "facets": [
          {
              "q": "How long is a calibration certificate valid?",
              "a": "The certificate has no expiry. It records the instrument's condition on the calibration date, and the interval that follows belongs to the equipment owner's calibration programme — set from usage, drift history and the consequence of an out-of-tolerance finding. ISO/IEC 17025 bars the laboratory from printing a recommended interval on the certificate unless the customer agreed to it during contract review."
          },
          {
              "q": "What happens when an instrument comes back out of tolerance?",
              "a": "The as-found data triggers a reverse-traceability review: every measurement made with that instrument since the previous calibration is re-evaluated against the size of the error, and any result that would change an accept or reject decision is reported to the customer. ISO/IEC 17025 handles this under nonconforming work, which requires the action, the decision and the notification to be recorded."
          },
          {
              "q": "What coverage factor should a calibration certificate report?",
              "a": "k=2, giving a 95 percent coverage interval for a normal distribution — the default across A2LA, UKAS and NABL scopes. The certificate must print the k value beside the uncertainty; a bare ± figure is unusable because the reader cannot tell whether it is one standard uncertainty or two. JCGM 100:2008, the GUM, is the evaluation method behind the number."
          },
          {
              "q": "Who is allowed to sign a calibration certificate?",
              "a": "An authorised signatory named on the laboratory's scope of accreditation for the specific measurement discipline on the certificate. A2LA, UKAS and NABL assess signatories individually on technical competence, and a certificate signed outside the signatory's approved discipline is invalid even where the measurement itself was correct. The template carries separate calibrated-by and technical-signatory blocks for exactly this reason."
          },
          {
              "q": "Does ASME Section V require accredited calibration for UT equipment?",
              "a": "ASME Section V requires ultrasonic instruments to be calibrated against reference blocks and linearity standards, and requires those blocks to be traceable. It does not itself mandate an ISO/IEC 17025-accredited laboratory. Owner-user specifications and client audits do, which is why NDT companies pull the accreditation certificate number and the scope of accreditation from every calibration supplier before accepting a certificate."
          },
          {
              "q": "What is guard-banding and when should a laboratory apply it?",
              "a": "Guard-banding shrinks the acceptance zone inward from the tolerance limit by a multiple of the measurement uncertainty, so a reading sitting close to the limit is declared out of tolerance rather than passed. Apply it where a false accept carries real consequence — safety-critical measurement, code-mandated equipment, aerospace. ILAC-G8:09/2019 sets out the decision-rule options that must be stated on the certificate."
          }
      ]
  },

  "/blog/pipe-wall-thickness-inspection-ut-procedures": {
      "answer": "Take three to four readings per CML at the 12, 3, 6 and 9 o'clock positions, on bare metal, with the gauge calibrated on a block of the same material and thickness range before and after the survey. Report the minimum reading, not the mean. Accuracy on 3–10 mm carbon steel is ±0.1–0.2 mm — the noise floor every corrosion rate must clear.",
      "expansion": "API 570 governs in-service piping in US refineries and sets the thickness-measurement interval as the lesser of half the remaining life or the maximum interval for the piping class. Remaining life is current thickness minus minimum required thickness, divided by corrosion rate, and API 570 asks for two rates: long-term, measured from the original or baseline thickness, and short-term, measured from the previous survey. The higher of the two sets the interval. This is why CML locations must repeat to the millimetre between surveys — a 0.15 mm relocation error on a 5 mm wall reads as 0.15 mm of metal loss and doubles an apparent corrosion rate. Fix CMLs with permanent low-stress stamps or weld-attached datum plates, photograph them, and record grid coordinates. Where the wall falls below minimum required thickness, API 579-1/ASME FFS-1 Level 1 screening decides repair, derate or continued service.",
      "source": "API 570 Piping Inspection Code; ASME B31.3 Process Piping; ASME BPVC Section V Article 4; ASTM E797 (Standard Practice for Measuring Thickness by Manual Ultrasonic Pulse-Echo Contact Method); API 579-1/ASME FFS-1; API RP 583 for corrosion-under-insulation susceptibility ranges.",
      "table": {
          "caption": "CML placement by credible damage mechanism — carbon steel process piping",
          "columns": [
              "Damage mechanism",
              "Where it attacks the circuit",
              "CML placement",
              "Confirming technique"
          ],
          "rows": [
              [
                  "Uniform corrosion",
                  "Whole circuit, even loss at 0.1–0.2 mm/yr in cooling water service",
                  "Fixed grid on straight runs, one CML per spool",
                  "Single- or dual-element pulse-echo thickness"
              ],
              [
                  "Erosion-corrosion",
                  "Elbows, tees, reducers and control-valve outlets above 2–3 m/s",
                  "Extrados of every elbow, plus 3 to 5 diameters downstream of the valve",
                  "Dual-element gauge with PAUT corrosion mapping over the affected arc"
              ],
              [
                  "Pitting corrosion",
                  "Low points, dead legs and water-collecting sections",
                  "Bottom-of-pipe 6 o'clock plus a scanned patch — never a single point",
                  "PAUT or automated C-scan; a spot reading walks past a pit"
              ],
              [
                  "Microbiologically influenced corrosion",
                  "Stagnant dead legs, untreated water circuits, tank drains",
                  "Full length of every dead leg, root to blind",
                  "C-scan mapping, confirmed by sampling for sulfate-reducing bacteria"
              ],
              [
                  "Corrosion under insulation",
                  "Carbon steel from −12 °C to 175 °C per API 583, at damaged jacketing",
                  "Penetrations, supports, low points and anywhere jacketing is breached",
                  "Pulsed eddy current to screen, UT to produce the number"
              ],
              [
                  "Thermal fatigue cracking",
                  "Valve connections, support attachments and weld toes on cycling lines",
                  "Attachment welds — thickness surveys will not find this mechanism",
                  "Magnetic particle or shear-wave UT, not thickness gauging"
              ],
              [
                  "Sulfidic and naphthenic corrosion",
                  "Crude and vacuum unit hot circuits",
                  "High-velocity, high-temperature elbows named on the corrosion loop drawing",
                  "UT thickness with high-temperature couplant and dual-element probe"
              ]
          ],
          "note": "Grid density follows the mechanism, not the pipe. Uniform corrosion is served by one CML per spool; localised mechanisms demand a scanned area, because a point reading beside a pit reports full wall. Atlantis NDT holds CML history, damage-mechanism assignment and next-inspection dates as structured data rather than filed PDFs — demo or quote on request."
      },
      "facets": [
          {
              "q": "How many thickness readings does API 570 require at each CML?",
              "a": "API 570 fixes no count. The owner-user's written procedure does, and the working convention is three to four readings around the circumference at each CML with the minimum value reported. A single reading is defensible only on a circuit where the credible damage mechanism is uniform corrosion. Anywhere pitting or erosion-corrosion is credible, one point walks past the damage."
          },
          {
              "q": "What corrosion rate do you use when only one thickness survey exists?",
              "a": "A default rate, set by the owner-user's corrosion specialist from published data for the same material in the same service, from an identical circuit elsewhere in the plant, or from process-fluid modelling. API 570 permits this until two surveys exist. Once a second survey lands, the measured rate replaces the default and the inspection interval is recalculated from it."
          },
          {
              "q": "Short-term or long-term corrosion rate — which one sets the next inspection date?",
              "a": "The higher of the two. Long-term rate runs from the original or baseline thickness and smooths measurement noise. Short-term rate runs from the previous survey and catches an acceleration the long-term average hides — a chemistry change, a new dead leg, a failed inhibitor programme. When short-term exceeds long-term, the circuit's damage mechanism has changed and the interval shortens."
          },
          {
              "q": "Can wall thickness be measured while the line is hot?",
              "a": "Yes, with a high-temperature couplant rated for the surface and a dual-element probe carrying a thermal-barrier delay line, lifted between readings so the probe does not heat-soak. Steel velocity shifts 0.3–0.5 percent per 100 °C, so the gauge reads high on a hot line unless velocity is corrected or the reading is normalised against a known-thickness spot at the same temperature."
          },
          {
              "q": "Why use a dual-element probe instead of a single-element probe for corrosion work?",
              "a": "A corroded internal surface is rough and irregular, and it scatters sound away from a single-element probe. Dual-element probes cross the transmit and receive elements so the pseudo-focus sits inside the wall, recovering a backwall echo off pitted metal, and they carry no interface dead zone — which is what lets them read thin, heavily pitted walls a single-element probe cannot resolve."
          },
          {
              "q": "What triggers a fitness-for-service assessment instead of a straight repair?",
              "a": "Measured thickness below the minimum required thickness. API 579-1/ASME FFS-1 Level 1 screening runs first — conservative and table-driven, using the remaining thickness ratio and the extent of the thin area. Level 2 uses the actual measured profile and material properties. Level 3 goes to finite element analysis and fracture mechanics. Passing Level 1 keeps the circuit in service on a defined re-inspection interval."
          }
      ]
  },

  "/blog/eddy-current-testing-complete-guide": {
      "answer": "Frequency sets everything in eddy current testing. Standard depth of penetration falls as one over the square root of frequency, permeability and conductivity, so probes above 100 kHz reach 1–2 mm, mid-frequency reaches 3–5 mm, low frequency reaches 5–10 mm, and pulsed eddy current screens 10–25 mm through insulation. Pick the frequency that puts the flaw inside one standard depth, then read phase, not amplitude.",
      "expansion": "ASME BPVC Section V Article 8 governs eddy current examination of tubular products in North America, with mandatory appendices covering installed non-ferromagnetic heat-exchanger tubing; ASTM E309, ASTM E426 and ISO 15549 carry the general practice. Calibration decides the result. A reference tube of the same material, outside diameter and wall thickness carries a 100 percent through-wall hole plus flat-bottom holes at graded depths, and the instrument phase is rotated so lift-off runs horizontally across the impedance plane. Depth then reads off phase angle; amplitude reads volume. Carbon and ferritic steel tubing breaks conventional eddy current testing, because permeability variation from stress and microstructure produces signals larger than the flaw — remote field testing, magnetic flux leakage or near-field testing replace it. Coatings, paint and oxide break nothing: eddy current inspects straight through them, which is precisely where it beats magnetic particle testing on coated components.",
      "source": "ASME BPVC Section V Article 8 (Eddy Current Examination of Tubular Products); ASTM E309 and ASTM E426; ASTM E1004 for conductivity measurement; ISO 15549; ASNT SNT-TC-1A for ET personnel qualification.",
      "table": {
          "caption": "ECT probe, frequency and depth reached by inspection task",
          "columns": [
              "Inspection task",
              "Probe type",
              "Frequency band",
              "Depth reached",
              "Governing practice"
          ],
          "rows": [
              [
                  "Aerospace surface fatigue crack",
                  "Pencil or differential surface probe",
                  "100–500 kHz",
                  "1–2 mm",
                  "ASTM E309 plus the OEM structural specification"
              ],
              [
                  "Fastener hole crack",
                  "Rotating bolt-hole probe",
                  "100–500 kHz",
                  "Hole wall to 2 mm",
                  "OEM structural specification"
              ],
              [
                  "Non-ferrous heat-exchanger tubing",
                  "Bobbin coil",
                  "20–100 kHz",
                  "Full wall of thin-wall tube",
                  "ASME Section V Article 8, ASTM E426"
              ],
              [
                  "Circumferential cracking at supports and expansion transitions",
                  "Array probe with C-scan output",
                  "20–100 kHz",
                  "Full wall",
                  "ASME Section V Article 8"
              ],
              [
                  "Ferromagnetic tubing",
                  "Remote field, near-field or magnetic flux leakage",
                  "Low",
                  "Full wall",
                  "Conventional ECT fails here — permeability variation swamps the flaw signal"
              ],
              [
                  "Corrosion under insulation screening",
                  "Pulsed eddy current",
                  "0.1–10 kHz",
                  "10–25 mm of steel through insulation and cladding",
                  "Screening only; UT produces the thickness number"
              ],
              [
                  "Alloy sorting, conductivity, coating thickness",
                  "Absolute surface probe",
                  "60 kHz–2 MHz",
                  "Surface",
                  "ASTM E1004"
              ]
          ],
          "note": "Two rows carry the decisions people get wrong most often: bobbin coils are near-blind to circumferential cracking, and conventional eddy current does not work on carbon or ferritic steel tubing without saturation. Atlantis NDT ties every ECT result to the asset, the technician's certification state and the instrument's calibration status at the time of test — demo or quote on request."
      },
      "facets": [
          {
              "q": "Why does phase angle matter more than signal amplitude in eddy current testing?",
              "a": "Phase encodes depth. As a flaw sits deeper below the surface, the response lags further, rotating the impedance signal by an angle that maps to depth against a calibration curve. Amplitude encodes volume, but amplitude is also corrupted by lift-off, fill factor and probe wobble. Calibration rotates the display so lift-off runs horizontally, leaving the vertical component readable as flaw response."
          },
          {
              "q": "Can eddy current testing inspect carbon steel welds?",
              "a": "Not with a conventional probe. Magnetic permeability in ferritic steel changes with stress, heat-affected-zone microstructure and residual field, and that variation produces signals larger than the crack. Two routes work: magnetically saturate the material so permeability stops varying, or switch to alternating current field measurement, which reads surface field distortion and sizes cracks straight through paint and coating."
          },
          {
              "q": "How is a heat-exchanger tube eddy current examination calibrated?",
              "a": "On a reference tube of the same material, outside diameter and wall thickness as the bundle, machined with a 100 percent through-wall hole plus flat-bottom holes at graded fractions of the wall. The through-wall hole sets the phase reference; the graded holes build the phase-versus-depth curve every indication is read against. The reference tube travels with the crew and is re-run through the shift."
          },
          {
              "q": "When does array eddy current beat a bobbin coil?",
              "a": "Circumferential cracking. A bobbin coil drives circumferential eddy currents, so a circumferential crack barely disturbs them and the coil reads near nothing — the classic missed defect at tube-to-tubesheet expansion transitions and baffle supports. Array probes drive current in multiple orientations and produce a C-scan image, resolving crack orientation and position around the tube. Bobbin stays faster for general wall loss."
          },
          {
              "q": "What is fill factor and how does it change tube inspection results?",
              "a": "Fill factor is the ratio of bobbin coil cross-sectional area to tube inside-diameter area, and it drives coupling. A loose coil in an oversized tube loses sensitivity to small flaws and adds wobble noise; a tight coil sticks or scores the tube. Probe diameter is selected against the as-built tube inside diameter, not the nominal, after a gauging pass through the bundle."
          },
          {
              "q": "How many training and experience hours does ASNT recommend for ET Level II?",
              "a": "ASNT SNT-TC-1A recommends 40 hours of ET training and 210 hours of method experience for Level I, then a further 40 hours of training and 630 cumulative hours of experience for Level II. These are recommendations the employer adopts or modifies in its written practice. ISO 9712 sets 40 hours at each level, with three months of Level 1 and nine months of Level 2 industrial experience."
          }
      ]
  },

  "/blog/ultrasonic-testing-ultimate-guide": {
      "answer": "Thickness equals velocity times time-of-flight divided by two. Steel carries longitudinal sound at 5,850 m/s, so a 3.4 microsecond round trip is 10.0 mm of wall. That one relation drives every UT output: pulse-echo thickness at ±0.1–0.5 mm, angle-beam weld examination at 45 to 70 degrees, phased array steering 32 to 256 elements, and TOFD sizing crack height to ±0.5 mm on 25 mm sections.",
      "expansion": "ASME BPVC Section V Article 4 governs ultrasonic examination of pressure equipment in North America, and it controls the procedure rather than the accept-or-reject line — acceptance comes from the construction code: Section VIII Division 1 for vessels, AWS D1.1 for structural welds, API 1104 for pipeline girth welds. Article 4 requires a written procedure listing essential and non-essential variables, instrument linearity verification, calibration on a block matching the part in material, thickness range and surface finish, and it carries mandatory appendices for time-of-flight diffraction and for encoded phased array. Two field corrections decide whether that calibration still holds. Transfer correction adds decibels for the attenuation and roughness difference between block and component. Temperature shifts steel velocity, so a hot component reads thick. Angle-beam wedges at 45, 60 and 70 degrees reach the fusion faces a zero-degree beam never sees.",
      "source": "ASME BPVC Section V Article 4 (Ultrasonic Examination Methods for Welds) and its TOFD and phased-array appendices; ASME Code Case 2235 for UT in lieu of RT; AWS D1.1; API 1104; ASTM E797 and ASTM E164; ISO 17640; ASNT SNT-TC-1A for UT personnel qualification.",
      "table": {
          "caption": "UT technique selected by the question the examination has to answer",
          "columns": [
              "Question the examination must answer",
              "Technique",
              "Frequency",
              "Sizing accuracy",
              "Code reference"
          ],
          "rows": [
              [
                  "How much wall is left?",
                  "Pulse-echo thickness, dual-element on corroded backwall",
                  "2–5 MHz",
                  "±0.1–0.5 mm",
                  "ASTM E797, API 570"
              ],
              [
                  "Is this weld acceptable?",
                  "Angle beam at 45, 60 and 70 degrees, or encoded phased array",
                  "2–5 MHz",
                  "Length and amplitude against DAC or DGS",
                  "ASME Section V Article 4; acceptance in Section VIII, AWS D1.1, API 1104"
              ],
              [
                  "How tall is this crack?",
                  "TOFD, paired transmit-receive probes bracketing the weld",
                  "1–2 MHz",
                  "±0.5 mm on 25 mm sections",
                  "ASME Section V Article 4 TOFD appendix; feeds API 579"
              ],
              [
                  "Is the whole tank floor sound?",
                  "Automated UT or MFL floor scanning with follow-up prove-up",
                  "1–5 MHz",
                  "Area coverage rather than point accuracy",
                  "API 653"
              ],
              [
                  "Has this composite disbonded?",
                  "Through-transmission, or pulse-echo with a delay line",
                  "1–5 MHz",
                  "Disbond area and boundary",
                  "ASTM composite practices"
              ],
              [
                  "Can I inspect this austenitic or dissimilar-metal weld?",
                  "Low-frequency dual-matrix transmit-receive longitudinal phased array",
                  "1–2 MHz",
                  "Reduced by beam skew and attenuation",
                  "ASME Section V Article 4 with procedure demonstration on a mock-up"
              ]
          ],
          "note": "The technique follows the decision, not the equipment on the truck. Thickness gauging answers remaining life; TOFD answers crack height for fitness-for-service; angle beam and PAUT answer code acceptance. Atlantis NDT structures the resulting records so the calibration state, technician certification and acceptance criteria survive a client audit years later — demo or quote on request."
      },
      "facets": [
          {
              "q": "DAC or DGS — which sizing curve should the procedure use?",
              "a": "DAC where the code names it and reference reflectors matching the expected flaw type are available; the curve is drawn from side-drilled holes at increasing sound path in a block matching the part. DGS uses a theoretical diagram tied to the probe's own beam characteristics, needs a single reference reflector, and holds up better on thick sections where a full DAC block becomes impractical to machine and carry."
          },
          {
              "q": "Why does UT miss flaws breaking the scanning surface?",
              "a": "The initial pulse and the probe near field create a dead zone directly under a zero-degree probe, where a surface-breaking flaw hides inside the main bang. Angle-beam probes solve it by inserting sound at 45 to 70 degrees and reaching the near surface on a skip, and magnetic particle or penetrant testing covers the accessible surface directly. UT and surface methods are complements, not substitutes."
          },
          {
              "q": "What limits ultrasonic testing on austenitic and dissimilar-metal welds?",
              "a": "Coarse, columnar, anisotropic grain structure. Sound velocity changes with direction through the weld metal, so the beam skews off its nominal angle, splits, and attenuates, while grain boundaries scatter energy back as noise that buries small reflectors. The answer is low-frequency dual-matrix transmit-receive longitudinal phased array, plus procedure demonstration on a mock-up containing the flaw type being sought."
          },
          {
              "q": "What is transfer correction and when is it required?",
              "a": "Transfer correction is the decibel adjustment compensating for the attenuation and surface-roughness difference between the calibration block and the actual component. It is measured by comparing the same reflector response through both, then added to the reference level. It is required whenever component surface finish, curvature or grain structure differs materially from the block. Skipping it undersizes flaws on rough or attenuative components."
          },
          {
              "q": "Does ASME allow ultrasonic examination in place of radiography?",
              "a": "Yes. ASME Code Case 2235 permits UT in lieu of RT on welds from 1/2 inch (13 mm) thickness upward, subject to a qualified procedure demonstrated on specimens containing flaws representative of those being sought, and to personnel qualified for the technique. Encoded phased array with permanent data recording is what makes the substitution auditable years after the weld was made."
          },
          {
              "q": "How many training and experience hours does ASNT recommend for UT Level II?",
              "a": "ASNT SNT-TC-1A recommends 40 hours of UT training and 210 hours of method experience for Level I, then a further 40 hours of training and 630 cumulative hours of experience for Level II. Phased array and TOFD sit on top as separate technique training. ISO 9712 sets 40 hours at each level, with three months of Level 1 and nine months of Level 2 industrial experience."
          }
      ]
  },

  "/blog/magnetic-particle-testing-complete-guide": {
      "answer": "Magnetise every test area twice, in perpendicular directions. Flux leakage forms only where the field crosses the discontinuity at 30 degrees or more, so a crack lying parallel to the field produces nothing at all. Hold the tangential field at 24–48 A/cm (30–60 gauss) at the surface, apply particles while the current is on, and prove the setup with a pie gauge or QQI shim.",
      "expansion": "ASME BPVC Section V Article 7 and ASTM E1444/E1444M govern magnetic particle examination in North America; acceptance criteria come from the construction code — Section VIII Division 1 Mandatory Appendix 6 for vessels, AWS D1.1 for structural welds. Four verification steps run before any part is examined. Yoke lift force is proven at maximum pole spacing, with separate acceptance weights for AC and DC yokes. Wet bath concentration is settled in a centrifuge pear tube: 0.1–0.4 mL per 100 mL for fluorescent particles, 1.2–2.4 mL per 100 mL for visible. UV-A irradiance reads at least 1,000 µW/cm² at 380 mm, with ambient white light at or below 20 lux and one minute of dark adaptation before examining. Residual field after demagnetisation reads 3 gauss or less. Skip any one of the four and a false negative looks exactly like a clean weld.",
      "source": "ASME BPVC Section V Article 7 (Magnetic Particle Examination), including the yoke lift test and lighting requirements; ASTM E1444/E1444M and ASTM E709; ASTM E3022 for UV-A measurement; ISO 9934-1/-2/-3 and ISO 17638; AWS D1.1 Clause 8.14; ASNT SNT-TC-1A for MT personnel qualification.",
      "table": {
          "caption": "Magnetising technique by geometry and the crack orientation it actually finds",
          "columns": [
              "Technique",
              "Field produced",
              "Finds",
              "Current guidance",
              "Watch-out"
          ],
          "rows": [
              [
                  "Yoke, AC or DC electromagnet",
                  "Longitudinal, pole to pole",
                  "Cracks perpendicular to the pole axis — rotate 90 degrees for the second shot",
                  "Lift test at maximum pole spacing before use, with separate AC and DC acceptance weights",
                  "AC reaches surface only; DC reaches near-surface flaws"
              ],
              [
                  "Prods",
                  "Circular, around the current path",
                  "Cracks parallel to the current path",
                  "100 A per inch of prod spacing, at 75–200 mm spacing",
                  "Arc burn — prohibited on many critical materials without a written permit"
              ],
              [
                  "Coil, encircling",
                  "Longitudinal, along the part axis",
                  "Transverse cracks in shafts, bars and long parts",
                  "Amp-turns derived from the part length-to-diameter ratio per ASTM E1444",
                  "Field falls off with distance from the coil; work the part in segments"
              ],
              [
                  "Central conductor",
                  "Circular, around the bore",
                  "Longitudinal cracks on tube inside and outside surfaces",
                  "Current scaled to part diameter per ASTM E1444",
                  "Conductor must be repositioned around large-diameter parts to keep coverage"
              ],
              [
                  "Head shot, direct contact",
                  "Circular, through the part",
                  "Longitudinal cracks in bench work on forgings and castings",
                  "Amperage per inch of part diameter",
                  "Contact burn at the head pads where clamping contact is poor"
              ],
              [
                  "Multi-directional bench",
                  "Rotating vector field, full 360 degrees per cycle",
                  "All crack orientations in a single 2–3 second energisation",
                  "Three staggered sources energised together at different frequencies",
                  "Field verification is harder — QQI shims are the proof of coverage"
              ]
          ],
          "note": "Two perpendicular magnetisations are mandatory on every test area under ASME Section V Article 7, which is exactly what multi-directional benches collapse into one pass. Atlantis NDT replaces hand-drawn indication maps with photo-tagged digital records carrying weld ID, procedure revision and the technician's certification state — demo or quote on request."
      },
      "facets": [
          {
              "q": "How is field adequacy verified — gaussmeter, pie gauge or QQI shim?",
              "a": "All three, at different points in the job. A tangential-field Hall-effect gaussmeter reads 24–48 A/cm at the surface and proves field strength numerically. A pie gauge proves strength and direction together at each setup — all eight segments must show particle build-up. A QQI shim etched to a known depth proves the whole procedure detects the smallest specified flaw, and codes require it for procedure qualification."
          },
          {
              "q": "When is demagnetisation actually required after magnetic particle testing?",
              "a": "Whenever residual magnetism affects what happens next: welding, where residual field deflects the arc; machining, where swarf clings to the surface; assembly into rotating equipment or near instrumentation. Codes call for a residual field of 3 gauss or less measured at the surface. Demagnetisation is skipped only where the part goes on to heat treatment above 760 °C, the Curie point of iron."
          },
          {
              "q": "Wet fluorescent or dry visible particles for field weld inspection?",
              "a": "Dry visible. Field weld surfaces are rough, ambient light cannot be darkened to the 20 lux fluorescent inspection demands, and there is no bath to maintain or spill. Dry particles also work hot — high-temperature grades run to 315 °C. Wet fluorescent wins where the surface is machined or ground and a darkened booth exists: production castings, forgings, aerospace overhaul."
          },
          {
              "q": "How do you tell magnetic writing from a real crack?",
              "a": "Demagnetise and re-run the examination. Magnetic writing is local polarisation from mechanical contact — a chain dragged across the part, a magnet set down nearby — and it disappears once the residual field is removed. A real discontinuity produces flux leakage every time the part is magnetised. Writing also reads wide and wandering, ignoring the weld geometry a real crack follows."
          },
          {
              "q": "Can magnetic particle testing be used on 316 stainless or Inconel?",
              "a": "No. Austenitic 300-series stainless and nickel alloys are non-magnetic, so no flux leakage forms and no indication develops. Ferritic and martensitic 400-series grades and precipitation-hardening alloys after ageing are ferromagnetic and inspect normally. Check with a hand magnet before mobilising. Where the material is non-magnetic, penetrant testing or eddy current testing replaces MT."
          },
          {
              "q": "How many training and experience hours does ASNT recommend for MT Level II?",
              "a": "ASNT SNT-TC-1A recommends 12 hours of MT training and 70 hours of method experience for Level I, then a further 8 hours of training — 20 cumulative — and 210 cumulative hours of experience for Level II. MT carries the lowest classroom requirement of the major methods and the heaviest reliance on supervised hours, because separating relevant from non-relevant indications is learned on parts."
          }
      ]
  },

  "/ndt-training-nigeria": {
      "answer": "ASNT SNT-TC-1A is the scheme NNPC, Shell SPDC, Chevron and ExxonMobil name in Nigerian contracts. ISO 9712 sits second, PCN and CSWIP are accepted on UK-led contracting, and Dangote's 650,000 bpd Lekki refinery accepts ASNT and ISO 9712. Examinations run through Lloyd's Register in Lagos and Port Harcourt, Bureau Veritas Lagos and DNV Lagos.",
      "expansion": "ASNT SNT-TC-1A is employer-based certification: the written practice belongs to the employer, the employer's Level III examines and certifies, and the certificate does not travel to the next company — a technician moving between Nigerian contractors re-qualifies under the new employer's written practice every time. ISO 9712, PCN and CSWIP are central schemes; the certification body holds the record and the certificate moves with the holder, which is why technicians working across NNPC, Shell SPDC, Chevron and TotalEnergies contracts carry both kinds. Demand concentrates in the Niger Delta — offshore platforms and FPSOs, an ageing pipeline network under constant integrity pressure, and the Dangote refinery, which dropped a world-scale process complex into Lagos. That asset mix makes UT thickness and phased array, magnetic particle on fatigue-critical welds, radiography to API 1104 on girth welds, and eddy current through coatings the four methods worth certifying in first.",
      "source": "ASNT SNT-TC-1A (employer-based qualification and certification); ISO 9712:2021 (central certification of NDT personnel); BINDT PCN and TWI CSWIP scheme documents; API Individual Certification Programs for 510, 570 and 653; Nigerian Oil and Gas Industry Content Development Act 2010, administered by the NCDMB.",
      "table": {
          "caption": "Certification schemes recognised in Nigeria — who holds the certificate and whether it travels",
          "columns": [
              "Scheme",
              "Certificate held by",
              "Travels between employers",
              "Renewal cycle",
              "Examined in Nigeria at"
          ],
          "rows": [
              [
                  "ASNT SNT-TC-1A",
                  "The employer, under its own written practice",
                  "No — re-qualification at each new employer",
                  "Recertification recommended at intervals not exceeding 5 years",
                  "Bureau Veritas Lagos; employer sites under Level III oversight"
              ],
              [
                  "ISO 9712",
                  "The certification body",
                  "Yes",
                  "5-year validity, renewal at 5, recertification examination at 10",
                  "Bureau Veritas Lagos, DNV Lagos"
              ],
              [
                  "PCN (BINDT)",
                  "BINDT",
                  "Yes",
                  "5-year renewal, recertification at 10",
                  "Lloyd's Register Lagos and Port Harcourt"
              ],
              [
                  "CSWIP (TWI)",
                  "TWI Certification",
                  "Yes",
                  "5-year renewal, recertification at 10",
                  "Lloyd's Register Lagos and Port Harcourt"
              ],
              [
                  "API ICP — 510, 570, 653",
                  "API",
                  "Yes",
                  "3-year recertification cycle administered by API",
                  "API-administered examination; no training provider issues this certificate"
              ]
          ],
          "note": "The scheme decides the route before any course is booked: train toward what your target employers name in their contracts. Atlantis NDT delivers ASNT and ISO 9712 pathway training in Nigeria as on-site corporate cohorts at your facility and as blended online theory with supervised practical — there is no walk-in Atlantis centre in Nigeria. API ICP examinations are set and administered by API. Ask about the next cohort."
      },
      "facets": [
          {
              "q": "Which NDT method should a technician in Nigeria certify in first?",
              "a": "Ultrasonic testing. Niger Delta offshore structures, FPSO hulls, the pipeline network and the Dangote refinery all run on thickness surveys and weld examination, which puts UT Level II on more Nigerian job specifications than any other method. Magnetic particle is the natural second — fatigue-critical weld examination on topsides and structures — and it carries the shortest classroom requirement of the major methods."
          },
          {
              "q": "Does an ASNT SNT-TC-1A certificate transfer when you change employer in Nigeria?",
              "a": "No. SNT-TC-1A certification is employer-based: the written practice, the examinations and the certificate belong to the company that issued them, and a new employer re-examines and re-certifies under its own written practice. ISO 9712, PCN and CSWIP are held by the certification body and travel with the holder, which is why technicians moving between contractors carry a central certificate alongside the employer one."
          },
          {
              "q": "Can NDT theory be taken online for certification in Nigeria?",
              "a": "Yes for theory hours, no for practical. Blended delivery puts classroom instruction online through an LMS, then runs supervised practical sessions and the practical examination in person on real specimens. Experience hours are logged under supervision on actual work. PCN and CSWIP examinations run through Lloyd's Register in Lagos and Port Harcourt; ASNT and ISO 9712 through Bureau Veritas Lagos and DNV Lagos."
          },
          {
              "q": "What does Nigerian local content law mean for inspection crew composition?",
              "a": "The Nigerian Oil and Gas Industry Content Development Act 2010, administered by the NCDMB, requires operators and contractors to give first consideration to Nigerian personnel and to submit content plans for approval. On inspection contracts that pushes work toward locally certified technicians and makes in-country certification of an existing crew cheaper than importing inspectors. NUPRC and NMDPRA frame the upstream and midstream regulatory side."
          },
          {
              "q": "Is API 510, 570 or 653 the same thing as an NDT Level II certificate?",
              "a": "No, and they do different jobs. ASNT or ISO 9712 Level II qualifies a technician to perform and interpret an examination in a specific method. API ICP certifies an inspector to decide whether in-service equipment stays in service, using examination data someone else produced. API sets and administers the ICP examinations directly — no training provider issues that certificate."
          },
          {
              "q": "How does an operator get an entire crew certified on-site in Nigeria?",
              "a": "Theory and practical run at the facility around the shift pattern, using the client's own equipment and specimens so the practical maps to the FPSO topsides, hulls or piping the crew actually examines. Examinations are administered under a compliant written practice with ASNT Level III oversight, methods are sequenced so the crew keeps working while it qualifies, and records are handed over in a form that survives an audit."
          }
      ]
  },

  "/api-510-certification": {
      "answer": "API ICP sets API 510 eligibility on a sliding scale: a bachelor's degree in engineering or technology plus 1 year of pressure-vessel experience, a two-year technical degree plus 2 years, a high school diploma plus 3 years, or 5 years with no formal education. The examination is one day, split closed-book then open-book, and certification runs a 3-year cycle.",
      "expansion": "Two things decide an API 510 result, and neither is reading volume. The first is the eligibility file: API ICP requires employer-attested experience in in-service inspection, repair, alteration and rerating of pressure vessels, and applications stall on documentation that cannot be substantiated far more often than on exam performance. The second is calculation speed. The open-book half is scored against API 510, ASME Section VIII Division 1 (UG-27 for shells, UG-32 for heads), ASME Section V, ASME Section IX, and API Recommended Practices 571, 572, 576 and 577. Marks concentrate in minimum required thickness, MAWP, short-term and long-term corrosion rate, remaining life, and inspection-interval derivation. The recurring error is treating nominal mill thickness as required thickness. Candidates who tab their code books to the clause and drill the arithmetic to automaticity pass; candidates who read widely and calculate rarely do not. Editions are locked per exam cycle, so buy from the current body of knowledge.",
      "source": "API Individual Certification Programs (API ICP) — API 510 Pressure Vessel Inspector Certification, Body of Knowledge and Publications Effectivity Sheet; API 510, Pressure Vessel Inspection Code, 11th Edition; ASME BPVC Section VIII Division 1.",
      "table": {
          "caption": "API 510 eligibility by education level — API ICP minimum documented experience (US applicants)",
          "columns": [
              "Highest education attained",
              "Minimum documented experience",
              "Experience must be in",
              "Most common cause of application rejection"
          ],
          "rows": [
              [
                  "BS or higher in engineering or technology",
                  "1 year",
                  "Supervision, design, or inspection of in-service pressure vessels",
                  "A degree in an unrelated discipline claimed as engineering or technology"
              ],
              [
                  "Two-year degree or certificate in engineering or technology",
                  "2 years",
                  "The same work at technician or engineer grade",
                  "A certificate from a non-technical program"
              ],
              [
                  "High school diploma or equivalent",
                  "3 years",
                  "The same work, attested by the employer",
                  "Self-declared hours with no employer attestation"
              ],
              [
                  "No formal education",
                  "5 years",
                  "The same work, attested by the employer",
                  "Gaps in the employment record across the qualifying period"
              ]
          ],
          "note": "API ICP publishes the governing eligibility table, the publications effectivity sheet and the current fee schedule at api.org. Confirm all three against your specific exam window before applying — the effectivity sheet is what fixes which editions you may bring."
      },
      "facets": [
          {
              "q": "Does API 510 certification give me legal authority to inspect pressure vessels in the United States?",
              "a": "No. API 510 is a competence credential issued by API ICP. Legal authority over in-service pressure equipment in the US belongs to the state or municipal jurisdiction, which normally works through a National Board commission held under the NBIC. Many refiners accept an API 510 holder as their owner-user inspector; jurisdictional repairs and R-stamp work still route through a commissioned inspector."
          },
          {
              "q": "How do API 510, API 570 and API 653 differ, and which should I sit first?",
              "a": "API 510 covers pressure vessels, API 570 in-service piping, API 653 aboveground atmospheric storage tanks. Sit the one your current work already documents experience toward, because the experience file gates the application, not the exam. Refinery and petrochemical inspectors commonly hold all three; a technician who never touches tanks gains only a renewal obligation from API 653."
          },
          {
              "q": "When does an API 510 evaluation stop and an API 579 fitness-for-service assessment start?",
              "a": "API 510 evaluates remaining thickness against code-minimum and sets the next inspection date. When general metal loss, local metal loss, pitting, blisters and hydrogen-induced damage, weld misalignment, crack-like flaws, creep or fire damage exceed API 510 screening, the assessment moves to API 579-1/ASME FFS-1, whose Parts address each damage class at three assessment levels. Level 1 screening sits inside the API 510 body of knowledge."
          },
          {
              "q": "Can I bring my own code books into the API 510 exam, and can they be tabbed?",
              "a": "Yes, for the open-book half. API ICP requires the exact editions named on the publications effectivity sheet for your exam window, permits permanent tabs and highlighting, and prohibits handwritten notes, loose inserts and any reference not on the list. The closed-book half admits nothing. Wrong-edition books are the most expensive avoidable preparation error, because clause numbering moves between editions."
          },
          {
              "q": "How does an employer prove an inspector's API 510 certification is still current at audit?",
              "a": "API ICP publishes a public certification search returning holder name, certification number and expiry date, and that lookup is what auditors use. The failure mode is not a fraudulent certificate; it is a genuine one that lapsed mid-contract. Currency belongs in the same system that blocks dispatch on an expired vision exam or radiation badge, not in a personal calendar."
          },
          {
              "q": "Which NDT method certification does an API 510 inspector still need?",
              "a": "API 510 authorises interpretation and disposition, not examination. Thickness readings, radiographs and phased-array data must be produced by personnel certified to ASNT SNT-TC-1A, ANSI/ASNT CP-189 or ISO 9712 in the applicable method, under a procedure a Level III approved. An API 510 inspector who takes their own UT readings needs UT Level II qualification to do so defensibly."
          }
      ]
  },

  "/blog/ndt-level-iii-certification-requirements-guide": {
      "answer": "ASNT NDT Level III certification requires passing the Basic examination once plus a Method examination for every method claimed, holding a current near-vision and colour-contrast examination, and meeting education-and-experience minimums that fall as formal education rises. Certification runs a 5-year cycle. Employer-based certification under SNT-TC-1A and third-party certification by ASNT are separate routes and do not substitute for each other.",
      "expansion": "The scheme decides what the certificate is worth, not the exam score. Under ASNT Recommended Practice No. SNT-TC-1A the employer certifies its own personnel against a written practice, and the certification dies with the employment relationship — it is valid inside that organisation only. ANSI/ASNT CP-189 is a standard rather than a recommended practice: it removes the employer's discretion over examination content by mandating ASNT-administered examinations and prescriptive documentation. ASNT's own central certification is third-party and portable. ISO 9712 certification is issued by an accredited certification body independent of the employer, and CAN/CGSB-48.9712 is the Canadian adoption of it. The consequence for a candidate is practical: a client specification names one of these, and an inspector holding the wrong one is not deficient in competence but is unusable on that contract. Read the specification before choosing the route. The Basic examination is where single-method candidates fail, on materials and processes.",
      "source": "ASNT Recommended Practice No. SNT-TC-1A; ANSI/ASNT CP-189, ASNT Standard for Qualification and Certification of Nondestructive Testing Personnel; ISO 9712:2021, Non-destructive testing — Qualification and certification of NDT personnel.",
      "table": {
          "caption": "Level III schemes — who issues the certificate, who sets the exam, and what survives an employer change",
          "columns": [
              "Scheme",
              "Certificate issued by",
              "Examinations set by",
              "Survives an employer change",
              "Named in specifications by"
          ],
          "rows": [
              [
                  "SNT-TC-1A (employer written practice)",
                  "The employer",
                  "The employer's Level III",
                  "No — void on leaving",
                  "US owner-users, ASME Section V scope"
              ],
              [
                  "ANSI/ASNT CP-189",
                  "The employer, against a standard",
                  "ASNT (mandated)",
                  "No, but the ASNT exam record persists",
                  "Contracts demanding a standard, not a recommended practice"
              ],
              [
                  "ASNT central certification",
                  "ASNT",
                  "ASNT",
                  "Yes",
                  "Clients requiring third-party proof of competence"
              ],
              [
                  "ISO 9712:2021",
                  "An accredited certification body",
                  "The certification body",
                  "Yes",
                  "European, Middle East and Asian EPC packages"
              ],
              [
                  "CAN/CGSB-48.9712",
                  "NRCan NDT Certification Body",
                  "NRCan NDT Certification Body",
                  "Yes",
                  "Canadian pressure equipment, CSA B51 scope"
              ],
              [
                  "PCN",
                  "BINDT",
                  "BINDT-approved examination centres",
                  "Yes",
                  "UK and Commonwealth contracts"
              ]
          ],
          "note": "Portability is the axis that decides audit outcomes. An employer-based certificate is not defective — it is simply not transferable, and a new employer must re-certify against its own written practice using the prior training and examination evidence."
      },
      "facets": [
          {
              "q": "Why do single-method candidates fail the ASNT Level III Basic examination?",
              "a": "The Basic examination is not a method exam. It covers materials and processes, the origin of discontinuities in casting, forming, welding and service, the certification schemes themselves including SNT-TC-1A and ANSI/ASNT CP-189, and general awareness of methods the candidate is not certifying in. A career UT technician can be fluent in ultrasonics and still fail on weld metallurgy and heat-treatment content."
          },
          {
              "q": "Can a company operate without a certified Level III on staff?",
              "a": "Yes, by contracting one. Codes including ASME Section V, API 510 and AWS D1.1 require Level III involvement in procedure approval and personnel qualification, not Level III employment. An outsourced Level III signs the written practice, approves procedures and examines Level I and Level II personnel. The accountability transfers with the signature, which is why the engagement must be documented rather than informal."
          },
          {
              "q": "How many methods should a Level III candidate certify in?",
              "a": "Two to three carries most inspection programmes: UT and RT cover volumetric work, MT or PT covers surface. Each additional method means another Method examination and another recertification obligation every cycle. Certify in the methods your written practice names and your company sells. A method certification never exercised is a recurring renewal cost with no revenue attached to it."
          },
          {
              "q": "What does the vision requirement involve, and how often is it repeated?",
              "a": "Near-vision acuity to read Jaeger No. 1 or equivalent type at not less than 12 inches in at least one eye, corrected or uncorrected, plus colour-contrast differentiation across the colours used in the methods performed. SNT-TC-1A sets near-vision verification annually and leaves the colour-contrast interval to the written practice. It applies at every level, Level III included, and lapsed records are a routine audit finding."
          },
          {
              "q": "Does holding API 510, 570 or 653 make the Level III examination easier?",
              "a": "Yes, on the codes-and-standards content. API inspector certification already drills ASME Section V examination methods, acceptance criteria and clause navigation, which is a large share of the Basic and Method examination material. It does nothing for materials and processes, and nothing for procedure writing and technique development, which is where the practical portion concentrates its marks."
          },
          {
              "q": "What is the fastest realistic route from Level II to Level III?",
              "a": "Documented experience is the binding constraint, not study time. Most candidates reach eligibility after several years at Level II in the methods concerned, then prepare for months across the Basic and each Method examination. The part that compresses is administrative: log on-the-job hours contemporaneously against the written practice rather than reconstructing them, because unreconstructable hours delay the application, not the exam."
          }
      ]
  },

  "/ndt-training-uae": {
      "answer": "ADNOC contractor specifications accept ASNT SNT-TC-1A and ISO 9712 interchangeably, so the choice is driven by where the certificate travels, not by which is stronger. Atlantis delivers UAE cohorts three ways: on-site at your Mussafah, Hamriyah or Ruwais facility using your own equipment and specimens, at an arranged classroom venue, or as blended online theory with in-person practical assessment.",
      "expansion": "Radiography is the constraint that reorders a UAE training plan. The Federal Authority for Nuclear Regulation licenses industrial radiography practices in the UAE and registers the individuals who work with sources, so an RT Level II certificate alone does not put a technician on site — the licensing and radiation-worker registration must exist alongside it, and that clock runs independently of the training calendar. Book RT cohorts against the licensing lead time, not the other way round. The second constraint is portability across schemes. A crew rotating between ADNOC packages and UK or European EPC scopes needs certificates two schemes will honour: ISO 9712 issued by an accredited body travels into Europe, PCN is named on UK-origin packages, CSWIP 3.1 is the welding-inspection credential ADNOC contractors ask for by name, and ASNT SNT-TC-1A is employer-based and stops at the employer's gate. Certify to what the contract names, then add the second scheme.",
      "source": "UAE Federal Authority for Nuclear Regulation (FANR) — licensing regime for industrial radiography practices and registered radiation workers; ISO 9712:2021; ASNT Recommended Practice No. SNT-TC-1A; TWI CSWIP 3.1 Welding Inspector scheme.",
      "table": {
          "caption": "Choosing a UAE delivery format — what each one is actually constrained by",
          "columns": [
              "Delivery format",
              "Where practical hours are logged",
              "Best when",
              "Hard constraint"
          ],
          "rows": [
              [
                  "On-site corporate cohort at your facility",
                  "Your own equipment and your own specimens, at your plant",
                  "Six or more candidates from one employer",
                  "Site access, permit-to-work, and a controlled area for any RT content"
              ],
              [
                  "Arranged classroom venue with a practical block",
                  "Training venue instruments and reference blocks",
                  "Candidates drawn from several employers, or a single candidate",
                  "Venue booking and examiner availability set the date, not the enquiry"
              ],
              [
                  "Blended — online theory, in-person practical",
                  "A compressed in-person block after the online theory",
                  "Crews on rotation or split across Abu Dhabi, Dubai and Sharjah",
                  "Practical assessment cannot be conducted remotely under any scheme"
              ],
              [
                  "Method top-up for already-certified staff",
                  "Your equipment, worked against the new method's procedure",
                  "Adding PAUT, TOFD or ET to an existing UT team",
                  "The existing certification must be current, not lapsed"
              ]
          ],
          "note": "Delivery format does not change the certificate. The certifying scheme and the examining body do. Choose the format for logistics and the scheme for where the certificate has to be accepted."
      },
      "facets": [
          {
              "q": "Does an ASNT certificate earned in the United States transfer to a UAE employer?",
              "a": "The examination record transfers; the certification does not. ASNT SNT-TC-1A certification is employer-based, so a UAE employer re-certifies the technician against its own written practice and accepts the prior training and examination evidence toward that. ISO 9712 certification issued by an accredited body transfers intact, because the certificate belongs to the individual rather than to the employer."
          },
          {
              "q": "Do UAE radiography technicians need anything beyond an RT Level II certificate?",
              "a": "Yes. The Federal Authority for Nuclear Regulation licenses industrial radiography practices in the UAE and registers the individuals who work with sources. A technician needs RT method certification, employer licensing under FANR, radiation-worker registration and current dosimetry before entering a controlled area. The certification course and the licensing process run on separate calendars and must be started together."
          },
          {
              "q": "Which certification does ADNOC actually name in its contractor specifications?",
              "a": "ADNOC contractor specifications accept ASNT SNT-TC-1A and ISO 9712 interchangeably for NDT method personnel, and name CSWIP 3.1 specifically for welding inspector roles. The practical read is that method certification is scheme-agnostic on ADNOC packages while welding inspection is not. Confirm against the specification revision attached to your package, because approved-scheme lists are revised between contract cycles."
          },
          {
              "q": "How do UAE-certified inspectors qualify for work in the United States or Canada?",
              "a": "North American work runs on different schemes. US employers certify to ASNT SNT-TC-1A or ANSI/ASNT CP-189 under their own written practice, so an ISO 9712 holder is re-certified on arrival using the existing training and experience record. Canada requires CAN/CGSB-48.9712 certification through Natural Resources Canada's NDT Certification Body for most pressure-equipment scope."
          },
          {
              "q": "Can practical examination hours be completed online?",
              "a": "No. ASNT SNT-TC-1A, ANSI/ASNT CP-189, ISO 9712, PCN and CGSB each require supervised hands-on examination on real specimens with a physical instrument. Online delivery covers theory, procedure interpretation and general examination preparation. Blended programmes exist to compress the in-person block, not to eliminate it, and a provider claiming otherwise will not survive a client audit."
          },
          {
              "q": "What does an employer need in place before hosting an on-site cohort in the UAE?",
              "a": "Calibrated instruments matching the method, reference blocks or representative specimens with known discontinuities, a room that meets examination conditions, and site access cleared for the instructor. RT cohorts additionally need a controlled area and FANR-compliant source handling. Employers who supply their own production coupons get training mapped to their actual weld configurations and material grades."
          }
      ]
  },

  "/ndt-training-halifax": {
      "answer": "CGSB is the operative scheme in Halifax: Natural Resources Canada's NDT Certification Body certifies to CAN/CGSB-48.9712, the Canadian adoption of ISO 9712, and Irving Shipbuilding contracts run on it alongside AWS D1.1, AWS D1.6 and class-society protocols. Atlantis delivers Halifax cohorts on-site at your yard, at an arranged venue, or as blended online theory with in-person practical.",
      "expansion": "An American ASNT certificate does not carry into Canadian pressure-equipment work, and that is the single most expensive assumption a technician relocating to Halifax makes. Certification under CAN/CGSB-48.9712 is issued to the individual by Natural Resources Canada's NDT Certification Body after examinations that body sets, and provincial pressure-equipment regulation reached through CSA B51 is written around it. ASNT SNT-TC-1A certification is employer-based and ends at the employer's gate, so it is evidence toward a CGSB application rather than a substitute for one. Shipbuilding adds a second layer that has nothing to do with either: weld acceptance on Irving's frigate and Arctic patrol vessel work is judged against AWS D1.1 for structural carbon steel and AWS D1.6 for stainless, with class-society survey requirements from ABS or Lloyd's Register sitting on top. Plan the CGSB examination sequence first, because it gates site assignment, then layer the code training.",
      "source": "CAN/CGSB-48.9712, Qualification and Certification of Non-Destructive Testing Personnel, administered by the Natural Resources Canada NDT Certification Body; CSA B51, Boiler, Pressure Vessel, and Pressure Piping Code; AWS D1.1/D1.1M, Structural Welding Code — Steel; CSA W178.2, Certification of Welding Inspectors.",
      "table": {
          "caption": "Halifax work scopes and the certification each one actually gates",
          "columns": [
              "Scope",
              "Personnel certification that gates it",
              "Weld acceptance criteria applied",
              "Who audits it"
          ],
          "rows": [
              [
                  "Irving Shipbuilding hull and structural welds",
                  "CAN/CGSB-48.9712",
                  "AWS D1.1 for carbon steel, AWS D1.6 for stainless",
                  "Shipyard QA and the attending class surveyor"
              ],
              [
                  "Class-society survey scope (ABS, Lloyd's Register)",
                  "CGSB, plus class-society approval of the NDT firm",
                  "The class rules for the vessel type",
                  "The attending surveyor"
              ],
              [
                  "Provincial pressure equipment and boilers",
                  "CGSB, invoked through CSA B51",
                  "ASME BPVC Section VIII and Section IX",
                  "Nova Scotia technical safety inspector"
              ],
              [
                  "Welding inspection roles on shipbuilding contracts",
                  "CSWIP 3.1, or CSA W178.2 through the CWB",
                  "The contract's governing welding code",
                  "Client QA"
              ],
              [
                  "East Coast offshore tie-back and topsides",
                  "CGSB, plus operator-specific approval",
                  "ASME B31.3 for piping, AWS D1.1 for structure",
                  "The operator's inspection authority"
              ]
          ],
          "note": "Method certification and code competence are separate purchases. CGSB certifies that a technician can perform and interpret a method; AWS D1.1 or CSA W178.2 training is what makes their acceptance calls defensible in front of a surveyor."
      },
      "facets": [
          {
              "q": "Does an ASNT Level II certificate let me work NDT in Nova Scotia?",
              "a": "Not on pressure-equipment scope. Canadian pressure equipment regulation reached through CSA B51 is built around CAN/CGSB-48.9712 certification issued by Natural Resources Canada's NDT Certification Body. An ASNT SNT-TC-1A certificate is employer-based US documentation and supports a CGSB application as training and experience evidence, but it is not accepted in place of the CGSB certificate itself."
          },
          {
              "q": "Where are CGSB examinations actually sat in Atlantic Canada?",
              "a": "CGSB examinations are administered at examination centres authorised by the Natural Resources Canada NDT Certification Body, including a centre operating in Halifax. Training and examination are separate transactions with separate parties: a training body prepares the candidate, the NDT Certification Body sets and marks the examination. Book the examination window before booking the course around it."
          },
          {
              "q": "Do I need CWB or CSWIP for welding inspection on shipbuilding contracts?",
              "a": "Both exist and they answer different specifications. CSA W178.2 welding inspector certification through the Canadian Welding Bureau is the domestic route and is what CSA W47.1-certified fabricators recognise. CSWIP 3.1 through TWI is heavily used on shipbuilding and offshore contracts because it travels internationally. Read the contract — shipyard packages frequently name CSWIP by title."
          },
          {
              "q": "How does on-site delivery work when the yard is a controlled site?",
              "a": "Training runs inside your facility on your equipment, which requires site access clearance for the instructor, a room meeting examination conditions, calibrated instruments and representative specimens. Yards supply production coupons with known discontinuities, which is why on-site cohorts outperform generic classroom delivery: candidates practise on the actual joint configurations, plate thicknesses and material grades they will inspect."
          },
          {
              "q": "Can Level 3 be certified under CGSB, or does it require a different route?",
              "a": "CAN/CGSB-48.9712 certifies at Levels 1, 2 and 3, so Level 3 is available through the Natural Resources Canada NDT Certification Body directly. Employers who need Level 3 authority before any candidate is eligible contract the function instead, with the contracted Level 3 approving procedures and written practices and qualifying Level 1 and Level 2 personnel under signature."
          },
          {
              "q": "How long does a CGSB certificate stay valid, and what does renewal require?",
              "a": "CAN/CGSB-48.9712 follows the ISO 9712 model: a defined validity period, renewal on evidence of continued activity and current vision, then recertification requiring re-examination at the end of the second period. Annual near-vision and colour-contrast records are the piece that lapses first. Track expiry in the same system that blocks dispatch on any other expired qualification."
          }
      ]
  },

  "/ndt-training-oman": {
      "answer": "NDT certification in Oman runs on ASNT SNT-TC-1A as the baseline, because PDO and OQ contractor specifications are written against it. ISO 9712 is the portable alternative accepted on OQ and Oman LNG scopes, and PCN appears on UK and EU-led EPC packages. Atlantis delivers on-site at your facility or blended online theory plus supervised practical — there is no walk-in centre in Muscat.",
      "expansion": "Oman's inspection demand is created by asset mix, not by geography: PDO's interior gathering systems, OQ and Oman LNG at Qalhat, the Duqm refinery and the Sohar industrial port put brand-new capital plant and mature corroding systems inside the same maintenance programme. Both are examined on code-set intervals by certified personnel, which is what converts plant activity into certification demand. The scheme question resolves before any course is booked. PDO and OQ contractor specifications are written against ASNT SNT-TC-1A, so an employer-based certificate under a compliant Written Practice is the fastest route into local work — but it stays with the employer, and a job change means re-qualification. ISO 9712 and PCN certificates are issued by a certification body and travel with the individual, which matters when the next contract is a UK or EU-led EPC package. Atlantis runs Oman programmes on-site at client facilities or as blended online theory with supervised in-person practical.",
      "source": "ASNT Recommended Practice No. SNT-TC-1A (2024 edition), Personnel Qualification and Certification in Nondestructive Testing; ISO 9712:2022, Non-destructive testing — Qualification and certification of NDT personnel.",
      "table": {
          "caption": "Which certification scheme to train toward in Oman, by contract owner",
          "columns": [
              "Contract owner or scope",
              "Scheme named in the specification",
              "Certificate held by",
              "Survives a job change"
          ],
          "rows": [
              [
                  "PDO concessions (Shell-operated)",
                  "ASNT SNT-TC-1A pathway",
                  "The employer, under its Written Practice",
                  "No — re-qualify under the new employer's Written Practice"
              ],
              [
                  "OQ, Oman LNG at Qalhat",
                  "ISO 9712",
                  "Certification body",
                  "Yes"
              ],
              [
                  "UK or EU-led EPC packages",
                  "PCN, issued by BINDT to ISO 9712",
                  "BINDT",
                  "Yes"
              ],
              [
                  "Return to US or Gulf Coast work",
                  "ASNT CP-189",
                  "ASNT",
                  "Yes"
              ],
              [
                  "Owning procedures and qualifying others",
                  "ASNT NDT Level III",
                  "The individual",
                  "Yes"
              ]
          ],
          "note": "Atlantis runs no walk-in centre in Oman. Corporate cohorts are delivered on-site at the client facility using your equipment and specimens; individuals go through scheduled cohorts or blended online theory with supervised in-person practical."
      },
      "facets": [
          {
              "q": "If I certify under an Omani employer's Written Practice and then change companies, does the certification transfer?",
              "a": "No. An SNT-TC-1A certificate is issued by the employer against that employer's Written Practice, so it ends at the employer's gate. The new employer must qualify you under its own Written Practice, though documented training hours, experience hours and examination records carry across as supporting evidence and shorten the process. ISO 9712 and PCN certificates are issued by a certification body and move with you."
          },
          {
              "q": "Is there an ASNT or ISO 9712 examination centre in Oman?",
              "a": "Yes. Bureau Veritas and TUV Middle East operate examination facilities in Muscat, and Bureau Veritas also examines in Sohar, covering both ASNT and ISO 9712 routes. Atlantis does not run a walk-in training centre in Oman — corporate cohorts are delivered on-site at your facility, and individual candidates go through scheduled cohorts or blended online theory with supervised practical assessment."
          },
          {
              "q": "How many training and experience hours does Level II require?",
              "a": "The hours are set by your employer's Written Practice, which uses the recommended tables in ASNT SNT-TC-1A as its baseline. They differ sharply by method — ultrasonic and radiographic demand far more of both training and experience than penetrant or visual. Anyone already working under Level II supervision accrues experience hours while employed, which is why in-service candidates certify faster than cold starts."
          },
          {
              "q": "Does Omanisation affect who can be NDT certified?",
              "a": "Omanisation governs the national composition of a workforce, not certification eligibility. It shapes which crew positions an operator expects to be filled by Omani nationals, so it changes who an employer sends for training rather than who is permitted to hold ASNT or ISO 9712 certification. Eligibility is set by the scheme itself: training hours, experience hours, vision testing and examination."
          },
          {
              "q": "Which method should a technician in Oman certify in first?",
              "a": "Ultrasonic. UT thickness and corrosion monitoring is the volume work across PDO's interior fields, the Sohar and Duqm refining units and Oman LNG at Qalhat, and it is the foundation for phased array on welds later. Radiography follows where pipeline girth welds to API 1104 feature, and penetrant matters on the stainless and nickel systems in LNG service."
          },
          {
              "q": "How long does an ISO 9712 certificate stay valid?",
              "a": "Five years. Renewal at five years requires evidence of continued work in the method without significant interruption, plus a current vision test. At ten years the holder recertifies by examination against the current body of knowledge, which since ISO 9712:2022 means the revised text rather than the 2012 or 2015 version the original certificate was issued under."
          }
      ]
  },

  "/compare/asnt-vs-pcn": {
      "answer": "Hold ASNT for North America and the GCC; hold PCN for the UK, EU and Norwegian shelf. The split is legal, not technical: EU pressure-equipment work in the higher categories requires third-party approval of NDT personnel under PED 2014/68/EU, and PCN is the UK body issuing it. SNT-TC-1A certification is employer-held and does not travel; CP-189, ACCP and PCN do.",
      "expansion": "The two schemes differ in who holds the certificate, and that single fact drives every practical consequence. SNT-TC-1A is a recommended practice: the employer writes a Written Practice, qualifies the individual against it, and holds the certificate — so it ends at the employer's gate. ASNT CP-189, ACCP and PCN are central certifications held by the individual and carried between employers. Geography then decides which one is enforceable. In the United States and Canada, ASNT-based certification is the working default, and Canada layers its own national scheme on top through the Natural Resources Canada certification body to CAN/CGSB-48.9712. Across the EU, third-party approval of NDT personnel is a legal requirement for higher pressure-equipment categories under PED 2014/68/EU, which is why PCN and ISO 9712 dominate UK, EU and Norwegian-shelf work. Inspectors who mobilise across both blocs hold one central certificate from each side rather than re-qualifying at every border.",
      "source": "ASNT SNT-TC-1A (2024 edition) §6.3; ASNT CP-189-2020; ISO 9712:2022; Directive 2014/68/EU (PED) Annex I §3.1.3, third-party approval of NDT personnel; CAN/CGSB-48.9712.",
      "table": {
          "caption": "Certification sequence by career anchor — North America first",
          "columns": [
              "Career anchor",
              "Certify first",
              "Add second",
              "What the sequence buys"
          ],
          "rows": [
              [
                  "US Gulf Coast, Permian, Midwest refining",
                  "ASNT SNT-TC-1A Level II",
                  "ASNT CP-189 Level II",
                  "Portability the day you leave the employer that certified you"
              ],
              [
                  "Canada — pipelines and federally regulated work",
                  "CGSB to CAN/CGSB-48.9712",
                  "ASNT CP-189 Level II",
                  "The regulator names CGSB; ASNT covers private-sector and cross-border scopes"
              ],
              [
                  "UK and Norwegian shelf",
                  "PCN Level 2",
                  "PCN Level 3",
                  "Operator frameworks and NORSOK-anchored scopes are written to ISO 9712"
              ],
              [
                  "EU fabrication inside PED scope",
                  "PCN or ISO 9712 Level 2",
                  "—",
                  "Third-party personnel approval is a legal requirement, not a preference"
              ],
              [
                  "GCC — Aramco, ADNOC, QatarEnergy",
                  "ASNT CP-189 Level II",
                  "ISO 9712 bridge",
                  "ASNT is the baseline; the bridge opens UK and EU-led EPC packages"
              ],
              [
                  "Aerospace tier-1 supply",
                  "ACCP Professional Level III",
                  "PCN Level 3",
                  "Boeing and Airbus supplier audits evaluate candidates against both stacks"
              ]
          ],
          "note": "SNT-TC-1A is the only employer-held scheme in this table. Every other row produces a certificate the individual keeps on a job change."
      },
      "facets": [
          {
              "q": "I hold SNT-TC-1A Level II and I am changing employers — what happens to it?",
              "a": "It does not travel, because your employer issued it against its own Written Practice. The new employer re-qualifies you under its Written Practice, and your documented training hours, experience hours and examination records transfer as supporting evidence rather than as certification. Holding ASNT CP-189 alongside it removes the problem entirely, because CP-189 is centrally issued and portable between employers."
          },
          {
              "q": "Does PCN require an employer at all?",
              "a": "No. PCN is issued by BINDT to the individual, valid five years, with an annual vision check and full re-examination at ten years. There is no employer dependency and no re-qualification on a job change. That is why it is the working currency for contract inspectors moving between North Sea operators, EU fabrication shops and decommissioning packages."
          },
          {
              "q": "Which scheme qualifies me for US nuclear in-service inspection?",
              "a": "Neither on its own. US nuclear ISI layers a performance-demonstration requirement on top of personnel certification: you qualify by detecting and sizing flaws in blind test blocks representative of the components in scope. Holding ASNT Level II or Level III is the prerequisite, not the qualification. Plan the demonstration programme as a separate step from certification."
          },
          {
              "q": "What does each scheme require at renewal?",
              "a": "SNT-TC-1A runs a five-year cycle with annual near-vision testing and periodic colour-perception testing, renewed by your employer. CP-189 and ACCP run five-year cycles through ASNT. PCN runs five years with an annual vision check, then full re-examination at ten years against the current ISO 9712 body of knowledge. Letting any of them lapse means re-examination, not reinstatement."
          },
          {
              "q": "Can PCN experience count toward an ASNT Level III application?",
              "a": "Yes as experience, no as certification. There is no automatic equivalency between the schemes, so PCN Level 3 does not convert into ASNT Level III. Documented method experience, training hours and examination history are accepted as supporting evidence on the ASNT application, which is exactly what makes a bridging route shorter than starting the body of knowledge from zero."
          },
          {
              "q": "Which scheme do Canadian employers name?",
              "a": "CGSB. Canada runs its own national certification through the Natural Resources Canada certification body to CAN/CGSB-48.9712, aligned to ISO 9712 and required for federally regulated work including pipelines. ASNT certification is widely held in Canada and accepted on many private-sector scopes, but it does not substitute for CGSB where the regulator names CGSB explicitly."
          }
      ]
  },

  "/blog/api-579-fitness-for-service-guide": {
      "answer": "An FFS assessment is triggered the moment inspection data puts equipment outside its original code acceptance criteria — thickness below t-min, a crack, a bulge, pitting, fire exposure or creep. API 579-1/ASME FFS-1 then answers three questions in order: run as-is, run at reduced conditions, or repair now — and returns the remaining life that fixes the next inspection date.",
      "expansion": "The escalation is a data problem before it is an engineering problem. Level 1 uses screening rules and conservative assumptions, needs little more than the thickness or dimensional data an inspector already holds, and can be closed by an API-qualified inspector or plant engineer. Level 2 uses actual flaw dimensions, real material properties and equipment-specific stresses, and carries an engineering signature. Level 3 opens finite element analysis, fracture mechanics and creep modelling for geometries and loadings the lower levels do not cover. Escalating buys operating margin, so a flaw rejected at Level 1 is not a flaw that has failed — it is a flaw that has not yet been assessed with enough data. That is why the NDT specification decides the commercial outcome: TOFD or phased-array height sizing on a crack, a corrosion-mapping grid instead of spot readings, replication and hardness for creep. Better data moves the answer up a level and buys run time.",
      "source": "API 579-1/ASME FFS-1, Fitness-For-Service (2021 edition), Parts 4, 5, 6, 7, 8, 9, 10 and 13; invoked by API 510, API 570 and API 653.",
      "table": {
          "caption": "Which API 579 Part applies, the NDT data it runs on, and what pushes it past Level 1",
          "columns": [
              "Damage found by inspection",
              "API 579 Part",
              "Inspection data that governs the result",
              "What forces escalation beyond Level 1"
          ],
          "rows": [
              [
                  "Uniform wall thinning",
                  "Part 4 — General Metal Loss",
                  "UT thickness grid reduced to a critical thickness profile",
                  "Readings scattered enough that the profile, not the average, governs"
              ],
              [
                  "Local thin area, groove, gouge-free wastage",
                  "Part 5 — Local Metal Loss",
                  "Corrosion-mapping UT giving length, width and depth",
                  "Remaining Strength Factor below the allowable value"
              ],
              [
                  "Pitting",
                  "Part 6 — Pitting Damage",
                  "Pit depth and density against the pit charts",
                  "Pit couples deeper or denser than the screening charts cover"
              ],
              [
                  "Blistering, HIC, SOHIC",
                  "Part 7 — Blisters and HIC/SOHIC",
                  "UT and PAUT mapping plus wet H2S service history",
                  "Blister vented, or damage tied through to the ID or OD surface"
              ],
              [
                  "Weld misalignment, peaking, ovality, bulging",
                  "Part 8 — Weld Misalignment and Shell Distortion",
                  "Dimensional survey or 3D laser scan of the as-found shape",
                  "Distortion combined with pressure or thermal cycling"
              ],
              [
                  "Crack-like flaw",
                  "Part 9 — Crack-Like Flaws",
                  "TOFD or PAUT through-wall height plus material toughness",
                  "Toughness not established from mill records or testing"
              ],
              [
                  "Creep damage",
                  "Part 10 — Creep Damage",
                  "Metallographic replication, hardness, operating temperature history",
                  "Every case — Omega and Larson-Miller work needs full analysis"
              ],
              [
                  "Mid-wall lamination",
                  "Part 13 — Laminations",
                  "Straight-beam UT mapping of extent and through-wall position",
                  "Lamination near a weld, nozzle or other structural discontinuity"
              ]
          ],
          "note": "The assessment level is a choice, not a verdict. Failing at one level means escalating with better data, not condemning the equipment."
      },
      "facets": [
          {
              "q": "What thickness data does a Part 4 assessment need to avoid an over-conservative answer?",
              "a": "A grid, not spot readings. Part 4 works from a critical thickness profile taken along the governing meridional and circumferential planes, so scattered single-point readings force the assessment to assume the worst reading applies everywhere. Automated corrosion-mapping UT across the affected area produces a defensible profile and returns more usable remaining wall than spot data does."
          },
          {
              "q": "Who can sign a Level 2 assessment?",
              "a": "An engineer trained in fitness-for-service, not the inspector who took the readings. Level 1 is a screening calculation an API-qualified inspector or plant engineer closes. Level 2 requires flaw-specific dimensions, material properties and stress analysis, so it carries an engineering signature. Level 3 adds finite element analysis or fracture mechanics and goes to a specialist with that background."
          },
          {
              "q": "Does a failed Level 1 mean the equipment must be repaired now?",
              "a": "No. A Level 1 failure means the screening rules cannot demonstrate acceptability using the conservative assumptions they carry. The next step is Level 2 with real flaw dimensions and material data, or Level 3 with FEA. Repair, re-rating to a lower MAWP, and continued operation at reduced conditions are all valid outcomes of the higher levels."
          },
          {
              "q": "How does an FFS result change the inspection interval?",
              "a": "Through remaining life. API 510 sets the internal or on-stream inspection interval at the lesser of one-half the remaining life or ten years, so the remaining life an FFS produces directly fixes the next inspection date. A shortened remaining life pulls the interval in; an assessment that recovers margin pushes it back out and feeds the RBI model."
          },
          {
              "q": "Does API 579 apply to piping and storage tanks, or only pressure vessels?",
              "a": "All three. API 579-1/ASME FFS-1 is written for pressurised equipment generally and is invoked by API 510 for vessels, API 570 for in-service piping and API 653 for aboveground storage tanks. The Parts do not change by equipment type — Part 5 local metal loss works the same way on a piping elbow, a vessel shell and a tank course."
          },
          {
              "q": "Which NDT gets a less conservative answer on a crack-like flaw?",
              "a": "Height sizing. Part 9 evaluates cracks on a Failure Assessment Diagram, and the through-wall height dominates the result — so TOFD or phased-array height measurement replaces an assumed worst-case depth with a measured one. Pair it with material toughness recovered from mill records or testing, because assumed lower-bound toughness is the other conservatism consuming the margin."
          }
      ]
  },

  "/blog/asme-section-v-ndt-requirements-guide": {
      "answer": "Section V tells you how to perform an examination; it never tells you whether the result is acceptable. Acceptance criteria live in the referencing construction code — Section VIII Division 1 for vessels, Section I for power boilers, B31.1 and B31.3 for piping. Article 2 is radiography, Article 4 ultrasonic examination of welds, Article 6 penetrant, Article 7 magnetic particle, Article 9 visual.",
      "expansion": "Section V is split into two subsections. Subsection A contains the examination methods themselves, article by article; Subsection B contains the standards adopted by reference, largely ASTM documents republished under SE numbers. A procedure that cites Section V correctly can still be non-compliant, because Section V defines how an examination is performed and the referencing construction code defines whether the result is accepted. Two article numbers cause most of the confusion in circulation. Phased array and time-of-flight diffraction are not standalone articles — both are handled as appendices inside Article 4, ultrasonic examination of welds. Articles 11 and 12 are acoustic emission: Article 11 for fibre-reinforced plastic vessels, Article 12 for metallic vessels during pressure testing. Edition control is the other recurring finding. Work is assessed under the edition in force when it was performed and accepted; applying a newer edition retrospectively invalidates the original acceptance decision rather than strengthening it.",
      "source": "ASME Boiler and Pressure Vessel Code, Section V, Nondestructive Examination (2023 edition), Subsection A examination articles and Subsection B documents adopted by reference; acceptance criteria in ASME Section VIII Division 1, ASME Section I, ASME B31.1 and ASME B31.3.",
      "table": {
          "caption": "ASME Section V Article map — and where the acceptance criteria actually come from",
          "columns": [
              "Examination method",
              "Section V Article (Subsection A)",
              "Personnel qualification basis",
              "Acceptance criteria set by"
          ],
          "rows": [
              [
                  "Radiographic examination (RT)",
                  "Article 2",
                  "SNT-TC-1A, CP-189 or ISO 9712 Level II",
                  "Section VIII Div 1 (vessels), Section I (boilers), B31.3 (process piping)"
              ],
              [
                  "Ultrasonic examination of welds",
                  "Article 4",
                  "Level II, procedure approved by a Level III",
                  "The referencing construction code"
              ],
              [
                  "Ultrasonic examination of materials and thickness",
                  "Article 5",
                  "Level II",
                  "Referencing code for new build; API 510/570/653 in service"
              ],
              [
                  "Liquid penetrant examination (PT)",
                  "Article 6",
                  "Level II",
                  "The referencing construction code"
              ],
              [
                  "Magnetic particle examination (MT)",
                  "Article 7",
                  "Level II",
                  "The referencing construction code"
              ],
              [
                  "Eddy current examination (ET)",
                  "Article 8",
                  "Level II",
                  "The referencing construction code"
              ],
              [
                  "Visual examination (VT)",
                  "Article 9",
                  "Level II with documented current vision test",
                  "The referencing construction code"
              ],
              [
                  "Leak testing (LT)",
                  "Article 10",
                  "Level II",
                  "The referencing construction code"
              ]
          ],
          "note": "PAUT and TOFD are not standalone articles — both sit as appendices inside Article 4. Articles 11 and 12 are acoustic emission: Article 11 for fibre-reinforced plastic vessels, Article 12 for metallic vessels during pressure testing."
      },
      "facets": [
          {
              "q": "Does Section V set the acceptance criteria for weld defects?",
              "a": "No. Section V defines how an examination is performed — equipment, calibration, technique, personnel, written procedure and reporting. Whether an indication is acceptable comes from the referencing construction code: Section VIII Division 1 for pressure vessels, Section I for power boilers, B31.1 for power piping, B31.3 for process piping. A procedure citing Section V perfectly can still apply the wrong acceptance criteria."
          },
          {
              "q": "Where do PAUT and TOFD sit in Section V?",
              "a": "Inside Article 4, ultrasonic examination of welds, as appendices — not as standalone articles. That trips people up because both are marketed as separate methods. Articles 11 and 12 are acoustic emission: Article 11 covers fibre-reinforced plastic vessels, Article 12 covers metallic vessels during pressure testing. Writing PAUT as Article 11 in a procedure is a straightforward audit finding."
          },
          {
              "q": "Which edition applies to a weld examined in 2019?",
              "a": "The edition in force when the work was performed and accepted. New work moves to a newer edition from an effective date the organisation records and controls, and historical dispositions stay assessed under the edition then applicable. Re-assessing a 2019 weld against the 2023 edition invalidates the original acceptance decision and creates a far larger problem than it solves."
          },
          {
              "q": "Who has to approve an NDE procedure?",
              "a": "A certified Level III, and the certification basis has to be stated — SNT-TC-1A, CP-189 or ISO 9712. The procedure must be specific to the materials, thickness ranges and configurations in scope. A single generic procedure written to cover everything a shop might ever examine is the second most common finding after expired or missing personnel certifications."
          },
          {
              "q": "What separates a mandatory from a non-mandatory appendix?",
              "a": "Enforceability. A mandatory appendix is part of the requirement — reference standards, calibration blocks, radiographic image quality criteria — and departing from it is a code violation. A non-mandatory appendix is guidance: interpretation aids, technique advice, examples of indications. Auditors check mandatory appendices against your procedure line by line; non-mandatory ones matter only once your procedure invokes them."
          },
          {
              "q": "How do Section V and Section IX records connect during an audit?",
              "a": "Through weld identity. Section IX governs the WPS, PQR and welder performance qualification; Section V governs the examination of the weld those documents produced. An audit that opens with an NDE report almost always ends in the Section IX file, so keeping both record sets keyed to the same weld number turns a multi-day retrieval into minutes."
          }
      ]
  },

  "/api-510-india": {
      "answer": "API 510 is issued by API and examined at Prometric centres worldwide, so the credential earned from India is the same one held in Houston. Eligibility is set by education plus documented pressure-vessel inspection experience: one year with an engineering degree, two years with a two-year technical certificate, three years with a high-school diploma, five years with no formal education.",
      "expansion": "The credential is identical worldwide; only the logistics are local. API administers the Individual Certification Program, publishes an effectivity sheet naming the exact editions of API 510, API RP 571, API RP 572, API RP 576, API RP 577, ASME Section V, ASME Section VIII Division 1 and ASME Section IX that are in scope, and delivers the exam at Prometric centres — Mumbai, Hyderabad, Delhi NCR, Chennai, Bangalore, Pune, Kolkata and Ahmedabad among them. The exam runs in two parts: a closed-book portion testing recall, then an open-book portion in which only the printed publications API names may be used. Eligibility is decided on education plus documented pressure-vessel inspection experience, not on NDT method certification. That distinction shapes the Indian route, and it is why third-party inspection firms are the usual entry point: a TPI assignment generates the signed inspection-day records that both the original application and every recertification cycle demand.",
      "source": "API Individual Certification Programs — API 510 Pressure Vessel Inspector Certification Requirements and Body of Knowledge, with the published exam effectivity sheet; API 510, Pressure Vessel Inspection Code, in the edition named on that sheet. Exam delivery by Prometric.",
      "table": {
          "caption": "API 510 eligibility — education against required pressure-vessel inspection experience",
          "columns": [
              "Highest education",
              "Pressure-vessel inspection experience required",
              "Where Indian candidates normally accrue it",
              "What does not count toward it"
          ],
          "rows": [
              [
                  "BE, BTech or higher in engineering or technology",
                  "1 year",
                  "TPI assignments — Bureau Veritas India, TUV, DNV, SGS, Velosi — on refinery turnarounds",
                  "Design or fabrication engineering carrying no inspection duty"
              ],
              [
                  "Two-year diploma or certificate in engineering or technology",
                  "2 years",
                  "Operator inspection cells at IOCL, BPCL, HPCL, ONGC and Reliance",
                  "NDT technician hours with no inspection or supervision responsibility"
              ],
              [
                  "High school diploma or equivalent",
                  "3 years",
                  "Contractor NDT crew progressing into an inspection role",
                  "QA document control and records administration"
              ],
              [
                  "No formal education",
                  "5 years",
                  "Long-service plant inspection at a single operator",
                  "Operations and maintenance work outside inspection scope"
              ]
          ],
          "note": "Experience is counted as supervising or performing pressure-vessel inspection activities and must be signed off by an employer. The exam runs closed-book then open-book, and only the printed editions named on API's effectivity sheet may be carried into the centre."
      },
      "facets": [
          {
              "q": "Does ASNT Level II count as API 510 experience?",
              "a": "Not by itself. API measures eligibility in pressure-vessel inspection experience — supervising or performing inspection activities — not in NDT method certification. ASNT Level II in UT, MT and PT strengthens the application and is increasingly expected by Indian employers, but hours spent shooting film or taking thickness readings without inspection responsibility do not satisfy the experience requirement."
          },
          {
              "q": "How long is API 510 valid and what does recertification require?",
              "a": "Three years. The first recertification is by application demonstrating continued work in pressure-vessel inspection across the cycle, which is why signed inspection-day records matter from the first assignment. The second cycle escalates to a recertification examination. Letting the certification lapse means re-entering through the full original examination rather than through a renewal route."
          },
          {
              "q": "Which publications can I use in the open-book portion?",
              "a": "Only those API names on the effectivity sheet for your exam window, in the editions listed: API 510 itself plus API RP 571, 572, 576 and 577, ASME Section V, Section VIII Division 1 and Section IX. They must be printed copies and Prometric inspects them at the door. Tabbing and highlighting are permitted; handwritten notes are not."
          },
          {
              "q": "Can I sit API 510 while on a Gulf assignment instead of in India?",
              "a": "Yes. API ICP exams are delivered at Prometric centres worldwide, so a candidate on rotation books in Dubai, Abu Dhabi, Dammam or Doha exactly as they would in Mumbai, against the same body of knowledge and the same effectivity sheet. Register through api.org well ahead of the window — slot availability, not eligibility, is the usual constraint."
          },
          {
              "q": "What do API 510 holders earn in India compared with a Gulf rotation?",
              "a": "India-domestic bands run Rs 8L to Rs 15L at one to three years post-certification, Rs 15L to Rs 25L at the Reliance Jamnagar, IOCL and BPCL tier, Rs 25L to Rs 40L at seven to twelve years, and Rs 40L to Rs 65L+ at lead level. Indian passport-holders on Middle East rotations run $80K to $140K tax-free plus housing and per diem."
          },
          {
              "q": "Do I still need API 510 if I already hold API 570 or API 653?",
              "a": "Yes, wherever the scope is pressure vessels. The three are separate credentials against separate codes: 510 for pressure vessels, 570 for in-service piping, 653 for aboveground storage tanks. Holding more than one is common in Indian refinery inspection cells and lifts the senior band, because a single inspector can then cover an entire unit rather than one equipment class."
          }
      ]
  },

  "/api-inspector-guide": {
      "answer": "API 510 certifies in-service inspection of pressure vessels and heat exchangers, API 570 covers process piping, and API 653 covers aboveground storage tanks. Each is a separate American Petroleum Institute Individual Certification Program exam of 170 questions over 7.75 hours, valid three years. Choose by the equipment you inspect; API 570 transfers most widely because piping exists at every facility that has vessels.",
      "expansion": "API 510, API 570 and API 653 are three separate American Petroleum Institute Individual Certification Program credentials, not three levels of one. API 510 governs in-service inspection, repair, alteration and rerating of pressure vessels and heat exchangers built to ASME BPVC Section VIII, and carries corrosion rate, remaining life and MAWP recalculation content. API 570 governs process piping built to ASME B31.3, and carries corrosion monitoring location selection, minimum thickness, deadlegs and injection points. API 653 governs aboveground storage tanks built to API 650 and API 620, including bottom and floor scanning, shell evaluation, settlement survey, roofs and cathodic protection. Every exam runs 170 questions across 7.75 hours, and each certification runs a three-year cycle. Eligibility runs on inspection experience rather than a degree: five years with a high school diploma, three with a two-year degree, two with a bachelor's, all within the last ten years and verified by employer letters.",
      "source": "API Individual Certification Programs (ICP) Body of Knowledge and Publications Effectivity Sheet for API 510, API 570 and API 653; API 510 Pressure Vessel Inspection Code; API 570 Piping Inspection Code; API 653 Tank Inspection, Repair, Alteration and Reconstruction; ASME BPVC Section VIII Division 1; ASME B31.3 Process Piping; API 579-1/ASME FFS-1; API RP 580 and API RP 581.",
      "table": {
          "caption": "Which inspector credential to specify in an RFP, by asset and phase of life",
          "columns": [
              "Work scope",
              "Credential to specify",
              "In-service code",
              "Construction code behind it",
              "Commonly paired with"
          ],
          "rows": [
              [
                  "Pressure vessel and heat exchanger reinspection, remaining life, rerating",
                  "API 510",
                  "API 510",
                  "ASME BPVC Section VIII Division 1",
                  "API 571; ASNT UT Level II for thickness data"
              ],
              [
                  "Process piping CML survey, deadleg and injection point review",
                  "API 570",
                  "API 570",
                  "ASME B31.3",
                  "API 571; ASNT UT Level II"
              ],
              [
                  "Aboveground storage tank in-service and out-of-service inspection",
                  "API 653",
                  "API 653",
                  "API 650, API 620",
                  "API RP 651 and API RP 652; MFL floor scanning"
              ],
              [
                  "Tank reconstruction, relocation or bottom replacement",
                  "API 653",
                  "API 653",
                  "API 650",
                  "AWS Certified Welding Inspector for the weld fabrication"
              ],
              [
                  "Risk-based inspection programme design and interval setting",
                  "Equipment credential plus API 580/581 competence",
                  "API RP 580, API RP 581",
                  "—",
                  "API 579-1/ASME FFS-1 for flaw assessment"
              ],
              [
                  "Weld inspection during new fabrication",
                  "AWS Certified Welding Inspector (CWI)",
                  "—",
                  "AWS D1.1 or ASME BPVC Section IX",
                  "ASNT RT and UT Level II"
              ],
              [
                  "ASME Code stamped new construction sign-off",
                  "National Board commissioned Authorized Inspector",
                  "NBIC (NB-23)",
                  "ASME BPVC Section VIII",
                  "Authorized inspection agency employment"
              ]
          ],
          "note": "API 510, API 570 and API 653 are independent — none is a prerequisite for another, and each requires experience on its own equipment class. Certification is awarded solely by the American Petroleum Institute; no training provider issues it."
      },
      "facets": [
          {
              "q": "Can I bring my own tabbed and highlighted code books into the API exam?",
              "a": "Yes. API permits the specific publications named on the Individual Certification Program Publications Effectivity Sheet for your exam date, and permanent tabs, highlighting and underlining inside those books are allowed. Loose notes, printed summaries and additional documents are not. With 170 questions in 7.75 hours, navigation speed inside those tabs decides the outcome more than memorisation."
          },
          {
              "q": "Does API 653 require holding API 510 or API 570 first?",
              "a": "No. API 510, API 570 and API 653 are independent certifications with no prerequisite chain. Each is earned by meeting the education-and-experience threshold for that equipment class and passing its own exam. The experience must relate to the equipment type: vessel work for API 510, piping for API 570, tanks for API 653. Holding all three is the Triple Crown."
          },
          {
              "q": "What happens when an API inspector certification lapses?",
              "a": "The credential is void and the holder cannot sign as a certified API inspector. API 510, API 570 and API 653 run on a three-year cycle renewed by re-examination or by documented professional development hours earned from conferences, courses, teaching or technical publication. Once the renewal window closes, recovery is by sitting the full exam again, not by back-filing hours."
          },
          {
              "q": "Does API 510 qualify me to inspect new ASME Section VIII construction?",
              "a": "No. New construction inspection under ASME BPVC Section VIII is performed by an Authorized Inspector commissioned by the National Board of Boiler and Pressure Vessel Inspectors and employed by an authorized inspection agency. API 510 governs the vessel after it enters service: inspection intervals, corrosion rate, remaining life, repair, alteration and rerating. Different credential, different phase of life."
          },
          {
              "q": "Which API certification covers damage mechanisms rather than a single equipment class?",
              "a": "API 571. The API 571 Corrosion and Materials Professional certification is a separate Individual Certification Program exam covering damage mechanisms in refining and petrochemical plant: sulfidation, high-temperature hydrogen attack, chloride stress corrosion cracking, corrosion under insulation and more. It pairs with API 510, 570 or 653 rather than replacing any of them, and underpins risk-based inspection work under API 580 and 581."
          },
          {
              "q": "How is the inspection experience requirement proven to API?",
              "a": "By employer verification letters. API requires documented inspection experience within the last ten years — five years with a high school diploma, three with a two-year associate degree, two with a bachelor's in engineering or technology — attested in writing describing the equipment class and the work performed. Experience unrelated to the certification's equipment type does not count toward that certification."
          }
      ]
  },

  "/ultrasonic-testing-singapore": {
      "answer": "Yes. Atlantis NDT delivers conventional UT, phased array and TOFD in Singapore to a written procedure qualified against the governing code, by technicians certified under ASNT SNT-TC-1A or ISO 9712, with an ASNT NDT Level III signing final disposition. Scopes cover Jurong Island process plant, marine and offshore yards, and structural steel. Crews mobilise within 24-72 hours from Houston, Dubai, Mumbai, Singapore and London hubs.",
      "expansion": "Ultrasonic testing in Singapore splits into four jobs. Thickness surveys on Jurong Island process plant establish corrosion rates against fixed corrosion monitoring locations so trends stay continuous between turnarounds. Weld examination on pressure equipment and process piping runs to ASME BPVC Section V Article 4 or ISO 17640, with acceptance taken from the construction code. Phased array replaces radiography where a live plant cannot be cordoned or evacuated, and TOFD supplies the through-wall height that decides whether a flaw is accepted, repaired or assessed under API 579-1/ASME FFS-1. Marine and offshore yard work runs to IACS Recommendation No. 20 and class society rules. None of that engages a radiation licence, which is why UT and PAUT keep production running while radiography does not. Atlantis NDT delivers through a hybrid model: certified Level II technicians on site, remote ASNT NDT Level III procedure authorship and disposition sign-off, code and edition agreed before mobilisation.",
      "source": "ISO 17640:2018 (manual UT of welds) and ISO 11666:2018 (acceptance levels); ISO 13588 (phased array of welds); ISO 10863 (TOFD); ASME BPVC Section V Articles 4, 5 and 23; ASME B31.3 and ASME BPVC Section VIII for acceptance; ASNT SNT-TC-1A (2024 edition), ANSI/ASNT CP-189-2020 and ISO 9712:2021 for personnel; ISO/IEC 17025 for calibration traceability; Singapore's Radiation Protection Act, administered by the National Environment Agency, for radiography licensing; IACS Recommendation No. 20 for marine.",
      "table": {
          "caption": "Method selection for a Singapore weld or thickness scope, and what each costs in site access",
          "columns": [
              "Scope",
              "Method",
              "Standard",
              "Site access impact",
              "What it delivers"
          ],
          "rows": [
              [
                  "Corrosion rate trending on Jurong Island piping and vessels",
                  "Conventional UT thickness at fixed CMLs",
                  "ASME BPVC Section V Article 23; API 570",
                  "Live plant, no exclusion zone",
                  "Remaining life and next inspection date per CML"
              ],
              [
                  "Butt weld volumetric examination on a running unit",
                  "Phased array UT",
                  "ISO 13588; ASME BPVC Section V Article 4",
                  "Single-side access, no evacuation",
                  "Encoded, archived volumetric record with defect position"
              ],
              [
                  "Through-wall sizing of a known flaw for fitness-for-service",
                  "TOFD",
                  "ISO 10863; ASME BPVC Section V Article 4",
                  "No exclusion zone",
                  "Flaw height feeding API 579-1/ASME FFS-1"
              ],
              [
                  "Weld examination to ISO acceptance levels for yard and class work",
                  "Manual angle-beam UT",
                  "ISO 17640:2018; ISO 11666:2018",
                  "No exclusion zone",
                  "Accept or reject against the stated ISO acceptance level"
              ],
              [
                  "Marine hull, offshore structure and structural steel in yard",
                  "UT thickness plus weld UT",
                  "IACS Recommendation No. 20; AWS D1.1",
                  "Yard permit, no radiation control",
                  "Class-submittable thickness diminution record"
              ],
              [
                  "Volumetric examination where UT is not qualified for the material",
                  "Radiographic testing",
                  "ASME BPVC Section V Article 2",
                  "NEA radiation licence, cordon, evacuation, night shift",
                  "Film or digital radiograph"
              ]
          ],
          "note": "Ultrasonic methods engage no licence under Singapore's Radiation Protection Act; industrial radiography does, and that permit governs the schedule more than crew availability. Procedure revision, code and edition are agreed before mobilisation and recorded against the examination."
      },
      "facets": [
          {
              "q": "Does ultrasonic testing in Singapore require a radiation licence?",
              "a": "No. Ultrasonic testing, phased array and TOFD use no ionising radiation, so no licence under Singapore's Radiation Protection Act is engaged and no exclusion zone is required. Industrial radiography does require National Environment Agency licensing, source security and a cordoned area, which is why RT scopes on Jurong Island are pushed to night shift or shutdown windows."
          },
          {
              "q": "What gates access to a Jurong Island site for an inspection crew?",
              "a": "Pass approval, not crew availability. Jurong Island is a controlled-access site requiring prior clearance for personnel and vehicles, on top of client-specific safety inductions, permit-to-work, confined space entry and work-at-height requirements under Singapore's Workplace Safety and Health framework. Those approvals are confirmed at quotation stage so the mobilisation date reflects gate reality rather than an optimistic assumption."
          },
          {
              "q": "Are ISO 9712 certificates accepted by Singapore yards, or is ASNT required?",
              "a": "Both are accepted, and the governing specification decides which. ISO 9712 third-party certification is the standard for European-owned and class-society-driven marine and offshore work; ASNT SNT-TC-1A employer-based certification is the standard for ASME and API scopes serving US-owned operators. Atlantis technicians carry dual-scheme certification so one crew satisfies either specification without a second mobilisation."
          },
          {
              "q": "Can phased array UT replace radiography for a code-required volumetric examination?",
              "a": "Yes, where the procedure is qualified and the owner accepts it. ASME BPVC and ASME B31.3 both provide for ultrasonic examination in lieu of radiography subject to a demonstrated procedure, qualified personnel and defined acceptance criteria. The practical driver on a live plant is access: PAUT needs one side and no exclusion zone, radiography needs both sides and evacuation."
          },
          {
              "q": "Who signs the final disposition, and what does the client receive?",
              "a": "An ASNT NDT Level III signs. The deliverable is a report in the client's required format with indications located against the component and against a persistent corrosion monitoring location, raw data in the instrument-native format plus an open export, and the procedure revision, technician certification state and instrument calibration status current at the time of examination — the bundle an accreditation audit asks for."
          },
          {
              "q": "Is Singapore work executed by a local crew or flown in?",
              "a": "Hybrid. Certified Level II technicians execute on site while ASNT NDT Level III procedure authorship, technique review and final disposition sign-off run remotely with 24-hour turnaround. Crews mobilise within 24-72 hours from Houston, Dubai, Mumbai, Singapore and London hubs. Multi-region EPC and asset-owner clients use this structure because Level III oversight stays identical across every country in the contract."
          }
      ]
  },

  "/blog/forging-defect-detection-and-assessment": {
      "answer": "A lap folds surface metal over without bonding and breaks the surface at a shallow angle. A seam is a tight, oxide-filled linear discontinuity carried forward from the ingot or billet and elongated by working. A burst is an internal rupture opened in the core. Wet fluorescent magnetic particle finds laps and seams; penetrant misses tight oxide-filled seams; ultrasonic testing finds bursts because they never reach the surface.",
      "expansion": "Forging defects sort by origin, and origin decides the method. A lap forms when a fold of surface metal is forced back into the workpiece and closed by oxide rather than bonded metal; it meets the surface at a shallow angle, so wet fluorescent magnetic particle catches it while a straight-beam ultrasonic shot aimed normal to the surface passes over it. A seam is a tight, oxide-filled linear discontinuity carried forward from the ingot or billet and drawn out by working; that oxide packing is why penetrant yields a weak or absent bleed-out on a defect magnetic particle displays clearly, since flux leakage needs no open volume to enter. A burst opens in the core when the metal is worked too cold, too fast or with too little ductility, never reaches the surface, and is found ultrasonically through a discrete core reflector combined with loss of back-wall echo. Examine after final heat treatment, before machining removes the evidence.",
      "source": "ASTM A388/A388M, Standard Practice for Ultrasonic Examination of Heavy Steel Forgings; ASTM E1444/E1444M, Standard Practice for Magnetic Particle Testing; ASTM E709, Standard Guide for Magnetic Particle Testing; ASTM E165, Standard Practice for Liquid Penetrant Testing; ASME BPVC Section V Article 5 (ultrasonic examination of materials and components), Article 6 (liquid penetrant) and Article 7 (magnetic particle); AMS 2154 for ultrasonic inspection of wrought metals; AMS 2300 and AMS 2301 magnetic particle quality classes for premium aircraft-quality steel.",
      "table": {
          "caption": "Forging defect, origin, and the method that finds it",
          "columns": [
              "Defect",
              "Origin",
              "Surface or internal",
              "Primary method",
              "Standard",
              "Stage to examine"
          ],
          "rows": [
              [
                  "Lap",
                  "Surface metal folded over during forging and closed by oxide, not bonded",
                  "Surface, shallow entry angle",
                  "Wet fluorescent magnetic particle",
                  "ASTM E1444/E1444M; ASME BPVC Section V Article 7",
                  "After final heat treatment, before machining"
              ],
              [
                  "Seam",
                  "Ingot or billet discontinuity drawn out by working, oxide-filled",
                  "Surface-connected and tight",
                  "Wet fluorescent magnetic particle; eddy current on bar stock",
                  "ASTM E1444/E1444M; ASTM E709",
                  "On the billet, and again on the finished forging"
              ],
              [
                  "Centre burst",
                  "Core rupture from working too cold, too fast or with too little ductility",
                  "Internal, core",
                  "Straight-beam UT with back-reflection loss assessment",
                  "ASTM A388/A388M; ASME BPVC Section V Article 5",
                  "After final heat treatment"
              ],
              [
                  "Nonmetallic inclusion and stringer",
                  "Refractory and deoxidation products carried from the melt",
                  "Internal, elongated along flow lines",
                  "UT, straight beam plus angle beam across flow direction",
                  "ASTM A388/A388M; AMS 2154",
                  "After final heat treatment"
              ],
              [
                  "Quench or heat-treat crack",
                  "Thermal and transformation stress in hardenable steel",
                  "Surface",
                  "Magnetic particle on ferromagnetic steel; penetrant on non-ferromagnetic alloys",
                  "ASTM E1444/E1444M; ASTM E165",
                  "Immediately after quench and temper"
              ],
              [
                  "Segregation and coarse grain",
                  "Non-uniform solidification and abnormal grain growth",
                  "Internal",
                  "UT attenuation and noise-floor assessment; macroetch confirmation",
                  "ASTM A388/A388M",
                  "After final heat treatment"
              ],
              [
                  "Grinding crack from lap removal",
                  "Local overheating during blend grinding of a repaired area",
                  "Surface, in the ground pocket",
                  "Magnetic particle or penetrant on the ground area",
                  "ASTM E1444/E1444M; ASTM E165",
                  "After repair grinding, before acceptance"
              ]
          ],
          "note": "Method follows origin, not defect name: surface-connected discontinuities go to magnetic particle or penetrant, core discontinuities go to ultrasonic. Radiography confirms UT findings on first-article forgings and loses practicality as section thickness increases."
      },
      "facets": [
          {
              "q": "Why does liquid penetrant miss seams that magnetic particle finds?",
              "a": "Oxide packing. A seam is drawn out from the ingot with oxide and scale compacted into it, so the opening does not accept penetrant and yields a weak or absent bleed-out. Magnetic particle needs no open volume — it needs a flux leakage field, which the discontinuity produces regardless of what fills it. Wet fluorescent magnetic particle is the method of record for seams in ferromagnetic forgings."
          },
          {
              "q": "At what stage of manufacture should a forging be examined?",
              "a": "After final heat treatment and before machining or plating. Heat treatment introduces quench and transformation cracks that an earlier examination cannot see, and machining strips the surface layer carrying laps and seams along with the evidence of them. Ultrasonic examination per ASTM A388/A388M is performed at a stage that gives parallel entry and back-wall surfaces so back-reflection loss stays meaningful."
          },
          {
              "q": "Can a lap be ground out and the forging accepted?",
              "a": "Yes, when three conditions hold. The lap is removed completely with a smoothly blended cavity, the remaining wall stays above the drawing or code minimum after removal, and the ground area is re-examined by magnetic particle or penetrant confirming no residual indication and no grinding crack. Internal defects — bursts, segregation, large inclusion clusters — cannot be reliably repaired and drive rejection and reforging."
          },
          {
              "q": "Why do coarse-grained austenitic stainless steel forgings defeat ultrasonic testing?",
              "a": "Grain scattering. Austenitic and duplex forgings carry large anisotropic grains that scatter and attenuate the beam, raising the noise floor until small reflectors disappear into grass and the back-wall echo drops. Countermeasures are lower examination frequency, dual-element transmit-receive longitudinal probes, and phased array sweeping multiple angles. Eddy current covers the surface layer where ultrasonic sensitivity falls away."
          },
          {
              "q": "How is a forging burst distinguished from an inclusion cluster on the A-scan?",
              "a": "By back-wall behaviour and reflector character. A burst returns a large, ragged, strongly orientation-dependent reflection from the core along with a measurable drop in back-wall amplitude across the affected area. Inclusion stringers return discrete low-amplitude reflectors while the back-wall echo holds. ASTM A388/A388M evaluates back-reflection loss alongside discontinuity amplitude precisely because that pair separates the two."
          },
          {
              "q": "Is 100% ultrasonic plus surface examination enough for aerospace and power generation forgings?",
              "a": "That is the baseline, not the ceiling. Safety-critical forgings — landing gear, turbine rotors, crankshafts — add specification-driven requirements: AMS 2154 for ultrasonic inspection of wrought metals, AMS 2300 or AMS 2301 magnetic particle quality classes for premium aircraft-quality steel, and encoded phased array with archived data so the defect map is reconstructable years later. First-article forgings add radiography of critical sections."
          }
      ]
  },

  "/ndt-training-saudi-arabia": {
      "answer": "NDT certification in Saudi Arabia runs on ASNT SNT-TC-1A employer-based qualification, with ISO 9712 accepted on SABIC and Sadara scopes. Saudi Aramco adds a second gate above both: SAEP-1112 contractor pre-qualification, which audits the employer's written practice rather than the individual certificate. Atlantis delivers on-site at your facility in Dammam, Jubail, Yanbu, Riyadh and Jeddah.",
      "expansion": "Two gates stand between a technician and Aramco work, and they are not the same gate. The first is method certification: under ASNT SNT-TC-1A the employer certifies, and the recommended minimum for ultrasonic testing is 40 hours of classroom instruction plus 210 hours of documented method experience at Level I, then a further 40 hours and 630 cumulative hours at Level II. Radiographic and eddy current testing carry the same 40-hour classroom figure. The second gate is Saudi Aramco SAEP-1112 contractor pre-qualification, which audits the contractor's written practice, procedures and personnel records rather than the individual certificate — a valid Level II held under a written practice that fails the audit does not mobilise. SABIC and Sadara scopes accept ISO 9712 third-party certification, which travels with the technician between employers. On-site delivery lets practical specimens match the gas plants, crude trains and tank farms the crew examines.",
      "source": "ASNT SNT-TC-1A (2020 Edition), Section 6 employer written practice and Table 6.3.1A recommended initial training and experience hours; ANSI/ASNT CP-189 (2020); ISO 9712:2021; Saudi Aramco SAEP-1112 contractor personnel qualification and certification.",
      "table": {
          "caption": "Which certification scheme to train toward, by who buys the work in the Kingdom",
          "columns": [
              "Buyer or scope",
              "Scheme named",
              "Who holds the certificate",
              "Travels with the technician",
              "Gate above the certificate"
          ],
          "rows": [
              [
                  "Saudi Aramco contractor scopes",
                  "ASNT SNT-TC-1A",
                  "The employing contractor",
                  "No — reissued on change of employer",
                  "SAEP-1112 contractor pre-qualification audit of the written practice"
              ],
              [
                  "SABIC affiliates (Petrokemya, Saudi Kayan, Yansab)",
                  "SNT-TC-1A or ISO 9712",
                  "Employer, or the certification body under ISO 9712",
                  "ISO 9712 only",
                  "SABIC vendor approval and procedure acceptance"
              ],
              [
                  "Sadara, YASREF and Petro Rabigh joint ventures",
                  "ISO 9712 accepted alongside SNT-TC-1A",
                  "Certification body",
                  "Yes",
                  "JV partner specification layered on the Saudi scope"
              ],
              [
                  "Critical-service and third-party-audited scopes",
                  "ANSI/ASNT CP-189",
                  "Employer, with the Level III examined by ASNT",
                  "No",
                  "Client audit of the written practice and procedure portfolio"
              ],
              [
                  "Export fabrication into the European Union",
                  "EN ISO 9712",
                  "Certification body",
                  "Yes",
                  "Notified body involvement under the Pressure Equipment Directive"
              ],
              [
                  "Technician planning to change employer or country",
                  "ISO 9712 or PCN",
                  "Certification body (BINDT for PCN)",
                  "Yes",
                  "The new employer still issues authorisation to work"
              ]
          ],
          "note": "The certificate is necessary and never sufficient in the Kingdom. Aramco audits the employer's system — written practice, procedures, Level III approvals, personnel records, calibration ledger — so a technically sound Level II under a non-compliant written practice does not reach site."
      },
      "facets": [
          {
              "q": "What happens to an SNT-TC-1A certificate when a technician changes employer?",
              "a": "It stops being valid. Under ASNT SNT-TC-1A the employer holds the certification, so the new employer re-certifies the technician under its own written practice, by examination, crediting documented prior training and experience hours from the records the technician carries. ISO 9712 behaves differently: the accredited certification body holds the certificate and it moves with the technician."
          },
          {
              "q": "Can a crew be certified without leaving the plant?",
              "a": "Yes. Theory and practical run on site around the shift pattern, examinations are administered under a written practice compliant with SNT-TC-1A, and the certification records are handed over in a form an auditor can open. Practical specimens are cut to match the gas plants, crude trains and tank farms the crew examines, which no external classroom reproduces."
          },
          {
              "q": "Does attending a Saudi cohort require a work visa?",
              "a": "No. Atlantis issues a training-invitation letter supporting a Saudi business visa for cohort attendance. Work-visa sponsorship is a separate matter handled by the employer or the contractor pool the technician mobilises through — Atlantis does not sponsor work visas. Technicians already resident in the Kingdom attend on their existing iqama with no additional documentation."
          },
          {
              "q": "Does Atlantis operate a walk-in training centre in Saudi Arabia?",
              "a": "No walk-in centre. Corporate programmes run on-site at the client facility in Dammam, Jubail, Yanbu, Riyadh and Jeddah; individuals are served through scheduled cohorts or blended delivery with online theory and supervised in-person practical. Where a single candidate is better served by an established Eastern Province provider, we say so rather than book the seat."
          },
          {
              "q": "ISO 9712 or ASNT for a technician who wants to work outside the Kingdom?",
              "a": "ISO 9712. The certification body holds it, it travels between employers, and it satisfies the European Pressure Equipment Directive route that Gulf technicians hit when they move to European or export fabrication work. ASNT SNT-TC-1A is faster to obtain and is what Aramco contractor scopes name, so technicians staying in the Kingdom start there and bridge later."
          },
          {
              "q": "What does an Aramco contractor pre-qualification audit ask for?",
              "a": "The written practice itself, the NDT procedures it authorises, the Level III's qualifications and evidence that the Level III approved each procedure, personnel certification records with examination papers and vision tests, and the equipment calibration ledger with traceability certificates. SAEP-1112 audits the contractor's system, which is why a strong technician inside a weak programme fails mobilisation."
          }
      ]
  },

  "/ndt-training-dammam": {
      "answer": "Atlantis operates no walk-in training centre in Dammam. Corporate cohorts run on-site at your facility in the Dammam–Dhahran–Khobar corridor, with practical specimens matched to Ras Tanura refinery and terminal equipment. Individuals take blended delivery — online theory, supervised practical in person. Examinations are administered under a written practice built to survive an Aramco audit.",
      "expansion": "Delivery is decided by headcount, not by geography. Above six technicians at one facility, on-site is cheaper and better: theory and practical run at the plant around the shift pattern, practical specimens come from the equipment the crew actually examines, and nobody loses travel days. Below six, blended delivery carries the theory online and books the supervised practical against a scheduled cohort. Dammam makes the on-site case unusually strong because the work is concentrated — Saudi Aramco is headquartered next door in Dhahran, Ras Tanura's refinery and export terminal sit up the coast, and King Abdulaziz Port brings marine and cargo-gear examination alongside the fabrication yards serving Aramco programmes. Third-party examination capacity exists in the Eastern Province: the Saudi Aramco Industrial Training Centre in Dhahran, TUV Middle East and Bureau Veritas in Al-Khobar. Certification examinations therefore need no travel outside the province.",
      "source": "ASNT SNT-TC-1A (2020 Edition), Section 6 employer written practice and Table 6.3.1A recommended training and experience hours; ISO 9712:2021; Saudi Aramco SAEP-1112 contractor personnel qualification; API 510, API 570 and API 653 for the in-service inspector track.",
      "table": {
          "caption": "How NDT training is actually delivered in Dammam, by cohort shape",
          "columns": [
              "Format",
              "Fits",
              "Where theory happens",
              "Where practical happens",
              "What the employer supplies",
              "Where the examination is administered"
          ],
          "rows": [
              [
                  "On-site corporate",
                  "Six or more technicians at one facility",
                  "Your training room, around the shift pattern",
                  "Your shop floor, your instruments, specimens cut from your equipment",
                  "Room, equipment, specimens, shift access, a supervising Level III or ours",
                  "On site, under the employer's written practice"
              ],
              [
                  "Blended",
                  "One to five technicians, or shift crews that cannot stand down together",
                  "Online, self-paced through the LMS",
                  "Booked practical week at an arranged venue",
                  "Nothing beyond release time",
                  "At the practical week"
              ],
              [
                  "Arranged-venue cohort",
                  "Individuals with no employer sponsor",
                  "Arranged venue in the Dammam–Khobar corridor",
                  "Same venue",
                  "Nothing",
                  "Same venue, or a third-party centre in Al-Khobar"
              ],
              [
                  "Level III oversight only",
                  "Employers who already run in-house trainers",
                  "Your existing programme",
                  "Your existing programme",
                  "The entire programme",
                  "Your programme, with examinations approved by the Level III of record"
              ],
              [
                  "Recertification and renewal",
                  "Inspectors at the end of the five-year cycle",
                  "Online refresher on current code editions",
                  "Practical re-demonstration where the method requires it",
                  "Current vision-test record",
                  "Under the employer's written practice"
              ]
          ],
          "note": "Every route ends in the same place: a written practice, examinations administered under it, and a records file an auditor can open. Where one candidate is better served by an established Eastern Province provider, that is the answer we give."
      },
      "facets": [
          {
              "q": "Is there a walk-in NDT training centre in Dammam?",
              "a": "Atlantis runs no walk-in centre in Dammam. Corporate cohorts are delivered on site at client facilities across the Dammam–Dhahran–Khobar corridor, and individuals take blended delivery: online theory with a supervised practical week. Third-party examination capacity in the Eastern Province includes the Saudi Aramco Industrial Training Centre in Dhahran and accredited providers in Al-Khobar."
          },
          {
              "q": "Where can an inspector sit a certification examination in the Eastern Province?",
              "a": "The Saudi Aramco Industrial Training Centre in Dhahran administers ASNT and SAEP examinations. TUV Middle East in Al-Khobar administers ASNT, ISO 9712 and PCN. Bureau Veritas in Al-Khobar administers ASNT and ISO 9712. Employer-based SNT-TC-1A examinations are administered under the employer's own written practice and need no external venue at all."
          },
          {
              "q": "How many technicians justify on-site training over sending people out?",
              "a": "Six at one facility. Above that headcount, travel, accommodation and lost shift days exceed the cost of bringing the programme to the plant, and the practical improves because specimens come from the equipment the crew examines. Below six, blended delivery — online theory plus a booked supervised practical week — moves people through faster and cheaper."
          },
          {
              "q": "Can experience hours be logged on the plant's own equipment?",
              "a": "Yes, and they should be. SNT-TC-1A counts documented work in the method under the supervision of a certified individual, so hours accrued on the plant's own flaw detectors, calibration blocks and weld configurations transfer straight into the qualification record. Training hours and experience hours are logged separately, because an auditor checks them separately."
          },
          {
              "q": "Which method should an inspector in Dammam certify in first?",
              "a": "Ultrasonic testing. Thickness monitoring and corrosion mapping on refinery, terminal and offshore assets is the steady work in the Eastern Province, phased array on welds follows it, and API in-service inspection knowledge stacks on top. Fabrication yards invert that order: visual against structural acceptance criteria first, then radiography for coded work."
          },
          {
              "q": "How long does Level II ultrasonic certification take from a cold start?",
              "a": "The classroom compresses to weeks; the experience does not. SNT-TC-1A recommends 210 hours of documented ultrasonic work for Level I and 630 cumulative hours for Level II, and those hours arrive at the rate the work arrives. A technician already employed and examining under supervision reaches Level II months ahead of someone with no site access."
          }
      ]
  },

  "/training": {
      "answer": "ASNT SNT-TC-1A is the US route: the employer certifies, and the recommended minimum for ultrasonic testing is 40 hours of classroom plus 210 hours of documented method experience at Level I, then 40 more hours and 630 cumulative hours at Level II. ISO 9712 is the central-certification route used across Europe and the Gulf. No school can certify you under SNT-TC-1A.",
      "expansion": "Two structures certify NDT technicians and they behave differently. Under ASNT SNT-TC-1A the employer holds the certificate, writes the written practice, administers the examinations, and the certification ends when the technician leaves — the route is fast, and the certificate does not travel. Under ISO 9712 an accredited certification body holds the certificate, which moves with the technician between employers and satisfies the European Pressure Equipment Directive route. ANSI/ASNT CP-189 sits between them: still employer-issued, but against a national standard with tighter requirements and an ASNT-administered Level III examination, which is why critical-service specifications name it. Every route counts two separate quantities. Training hours are classroom and laboratory instruction and compress into a scheduled course. Experience hours are documented work in the method under supervision and do not compress — they accrue at the rate the work arrives, which is why an employed technician reaches Level II months ahead of a cold start.",
      "source": "ASNT SNT-TC-1A (2020 Edition), Table 6.3.1A recommended initial training and experience hours and Section 8 vision requirements; ANSI/ASNT CP-189 (2020); ASNT ACCP; ISO 9712:2021; PCN scheme administered by BINDT; ASME BPVC Section V (2023 Edition) Articles 2, 4, 6, 7, 8 and 9.",
      "table": {
          "caption": "SNT-TC-1A recommended minimum hours by method and level, and the ASME Section V article each method is examined under",
          "columns": [
              "Method",
              "Level I classroom hours",
              "Level I experience in method (hours)",
              "Level II classroom hours",
              "Level II experience in method (hours)",
              "ASME Section V article"
          ],
          "rows": [
              [
                  "Ultrasonic testing (UT)",
                  "40",
                  "210",
                  "40",
                  "630",
                  "Article 4"
              ],
              [
                  "Radiographic testing (RT)",
                  "40",
                  "210",
                  "40",
                  "630",
                  "Article 2"
              ],
              [
                  "Eddy current testing (ET)",
                  "40",
                  "210",
                  "40",
                  "630",
                  "Article 8"
              ],
              [
                  "Magnetic particle testing (MT)",
                  "12",
                  "70",
                  "8",
                  "210",
                  "Article 7"
              ],
              [
                  "Liquid penetrant testing (PT)",
                  "4",
                  "70",
                  "8",
                  "140",
                  "Article 6"
              ],
              [
                  "Visual testing (VT)",
                  "8",
                  "70",
                  "16",
                  "140",
                  "Article 9"
              ]
          ],
          "note": "These are the recommended minimums an auditor checks, not a syllabus. Delivered course lengths run longer because employers add code, procedure, equipment and acceptance-criteria content on top. Training hours compress into a scheduled week; experience hours accrue only as the work arrives, which is what sets the calendar."
      },
      "facets": [
          {
              "q": "Can an NDT school certify a technician?",
              "a": "No school certifies anyone under ASNT SNT-TC-1A. The employer certifies, against its own written practice, once the technician meets the training hours, the experience hours, the examinations and the vision test. A school supplies training hours and examination preparation. ISO 9712 is the route where an accredited certification body — not the employer and not a school — issues the certificate."
          },
          {
              "q": "What is the difference between training hours and experience hours?",
              "a": "Training hours are classroom and laboratory instruction and compress into a scheduled course. Experience hours are documented work in the method under the supervision of a certified individual and accrue only as the work arrives. SNT-TC-1A recommends 40 training hours against 210 experience hours for Level I ultrasonic testing — the second number is what sets the calendar."
          },
          {
              "q": "How often does NDT certification have to be renewed?",
              "a": "Every five years under ASNT SNT-TC-1A and ANSI/ASNT CP-189, for Levels I, II and III, on evidence of continued satisfactory performance or by re-examination. The near-vision test is annual, not five-yearly, and colour differentiation is set by the employer's written practice. A lapsed vision record invalidates the certification wherever the five-year cycle sits."
          },
          {
              "q": "Which NDT method should a new technician certify in first?",
              "a": "Ultrasonic testing in oil, gas and power; visual first in structural fabrication. UT carries the largest hour requirement, the widest employer demand, and the clearest progression into phased array and API in-service work. Penetrant and magnetic particle certify fastest and add least on their own. Certify against what local employers examine, not across every method thinly."
          },
          {
              "q": "Does ISO 9712 certification work in the United States?",
              "a": "US employers accept it as evidence of training and examination, then certify the technician under their own written practice to SNT-TC-1A or CP-189, because US construction codes reference the employer-based scheme. ISO 9712 is the required route into European pressure equipment work. Technicians moving between the two markets hold both and bridge by examination rather than starting over."
          },
          {
              "q": "What does Level III authorise that Level II does not?",
              "a": "Writing and approving NDT procedures, selecting the method and technique for a given examination, qualifying and examining Level I and Level II personnel, and interpreting codes and standards on the employer's behalf. Level II sets up equipment, interprets results against established acceptance criteria and signs the report. Every employer-based programme requires a Level III of record."
          }
      ]
  },

  "/blog/asme-b31-1-power-piping-code-explained": {
      "answer": "ASME B31.1 splits power piping into Boiler External Piping, which is jurisdictional, code-stamped and accepted by an Authorized Inspector holding a National Board commission, and Non-Boiler External Piping, which follows the same design and examination rules without a stamp. Examination scope is set by paragraph 136.4 and rises with class: 100% volumetric on Class 1 butt welds, spot on Class 2, visual on Class 3.",
      "expansion": "The document that governs a power piping weld changes at the first valve outside the boiler. Inside that boundary, set by ASME Section I PG-58, the boiler proper — drum, tubes, headers — is Section I work. Outside it, Boiler External Piping is designed and examined to B31.1 but stays jurisdictional: it carries an ASME S or PP stamp, and an Authorized Inspector holding a National Board commission accepts it under the state boiler and pressure vessel act. Everything downstream is Non-Boiler External Piping — identical B31.1 design, welding and examination rules, no stamp, no Authorized Inspector. Welding qualifies to ASME Section IX in both cases. The alloy then drives the rest: chromium-bearing materials trigger preheat under paragraph 131 and post-weld heat treatment under paragraph 132, and Grade 91 main-steam and hot-reheat piping adds a weld hardness ceiling because Type IV cracking in the heat-affected zone dominates in-service failure at 540 to 620 °C.",
      "source": "ASME B31.1-2022 Power Piping — paragraphs 102 (allowable stress), 104 (pressure design), 127 (welding), 131 (preheat), 132 (post-weld heat treatment), 136.4 (examination); ASME BPVC Section I, PG-58 (boiler external piping boundary); ASME BPVC Section IX (2023 Edition); ASME BPVC Section II Part D; ASME PCC-3 (in-service inspection planning); NFPA 85 (Boiler and Combustion Systems Hazards Code).",
      "table": {
          "caption": "Which code owns the joint, who accepts it, and what sets the examination scope",
          "columns": [
              "Piping segment",
              "Governing code",
              "Stamp required",
              "Who accepts the weld",
              "What drives examination scope"
          ],
          "rows": [
              [
                  "Boiler proper — drum, tubes, headers",
                  "ASME BPVC Section I",
                  "ASME S stamp",
                  "Authorized Inspector, National Board commissioned",
                  "Section I rules for the pressure part"
              ],
              [
                  "Boiler External Piping, out to the first valve",
                  "ASME B31.1, administered under Section I",
                  "ASME S or PP stamp",
                  "Authorized Inspector, National Board commissioned",
                  "B31.1 paragraph 136.4 by class, plus jurisdictional review"
              ],
              [
                  "Non-Boiler External Piping, Class 1",
                  "ASME B31.1",
                  "None",
                  "Owner or the owner's inspector",
                  "100% RT or UT on butt welds; MT or PT on socket and fillet welds; visual on all"
              ],
              [
                  "Non-Boiler External Piping, Class 2",
                  "ASME B31.1",
                  "None",
                  "Owner or the owner's inspector",
                  "Spot volumetric on butt welds; 100% visual"
              ],
              [
                  "Non-Boiler External Piping, Class 3",
                  "ASME B31.1",
                  "None",
                  "Owner or the owner's inspector",
                  "Visual only — most utility and low-pressure heating service"
              ],
              [
                  "Nuclear safety-related piping",
                  "ASME BPVC Section III",
                  "ASME N stamp",
                  "Authorized Nuclear Inspector",
                  "Section III nuclear class rules; NRC jurisdiction"
              ],
              [
                  "Process piping in the same plant",
                  "ASME B31.3",
                  "None",
                  "Owner's inspector",
                  "Fluid service category — Normal, Category D, Category M, Severe Cyclic, High Pressure"
              ]
          ],
          "note": "The jurisdictional boundary is the first valve, not the wall of the boiler house. Placing it wrong produces either an unstamped joint sitting inside jurisdictional scope, or an Authorized Inspector hold on piping that never needed one."
      },
      "facets": [
          {
              "q": "Where does ASME Section I stop and B31.1 begin?",
              "a": "At the boiler external piping boundary defined in ASME Section I PG-58 — in practice the first valve outside the boiler. Inside it, the drum, tubes and headers are Section I work. Outside it, boiler external piping is designed and examined to B31.1 while remaining jurisdictional and stamped. Everything beyond that valve is non-boiler external piping."
          },
          {
              "q": "Who accepts a Boiler External Piping weld?",
              "a": "An Authorized Inspector holding a National Board commission, acting under the state boiler and pressure vessel act. The joint carries an ASME S or PP stamp and a manufacturer's data report goes with it. Non-Boiler External Piping needs no Authorized Inspector and no stamp: the owner or the owner's inspector accepts it against the same B31.1 examination rules."
          },
          {
              "q": "Why does Grade 91 piping carry a weld hardness limit?",
              "a": "Hardness is the field proxy for post-weld heat treatment. Under-tempered Grade 91 weld metal reads hard, and the fine-grained heat-affected zone left behind is where Type IV creep cracking initiates at main-steam and hot-reheat temperatures of 540 to 620 °C. B31.1 caps weld hardness on chromium-molybdenum materials so an inadequate PWHT is caught before the piping enters service."
          },
          {
              "q": "Does B31.1 cover in-service inspection of power piping?",
              "a": "No. B31.1 is a construction code governing design, materials, fabrication, examination and testing up to the point the piping enters service. In-service inspection runs on ASME PCC-3, state jurisdictional rules and owner procedures. Many plants apply API 570 methodology to B31.1 lines because the inspection technique is identical even where the code reference differs."
          },
          {
              "q": "Can ultrasonic testing replace radiography on B31.1 butt welds?",
              "a": "Yes, at the owner's election. Paragraph 136.4 accepts volumetric examination by radiography under ASME Section V Article 2 or by ultrasonics under Article 4, and the choice sits with the owner's engineering. UT wins on thick-wall Grade 91 and where radiation control would shut down surrounding trades; radiography wins where a permanent image is contractually required."
          },
          {
              "q": "How does B31.1 differ from B31.3 on the same weld?",
              "a": "The examination trigger and the heat treatment. B31.1 sets examination scope by piping class — Class 1 volumetric on all butt welds, Class 2 spot, Class 3 visual. B31.3 sets it by fluid service category: Normal, Category D, Category M, Severe Cyclic and High Pressure. B31.1 preheat and post-weld heat treatment on chromium alloys are stricter, because steam service runs hotter for longer."
          }
      ]
  },

  "/tools": {
      "answer": "Remaining life = (t_actual − t_required) ÷ corrosion rate. API 510, 570 and 653 all require the higher of the short-term and long-term corrosion rates, and t_required is the code-minimum thickness from the design calculation — not the nominal mill thickness. Substituting nominal for required is the single most common error in a remaining-life number.",
      "expansion": "Three numbers decide a next-inspection date and two of them are routinely wrong. Short-term corrosion rate is the previous thickness minus the current thickness, divided by the years between those two readings. Long-term corrosion rate is the initial thickness minus the current thickness, divided by the years in service. API 510, API 570 and API 653 each instruct the inspector to carry the higher of the two forward, because a process change, a new feedstock or a failed injection point moves the short-term rate years before it disturbs the long-term average. Required thickness comes from the design equation for the component: ASME Section VIII Division 1 UG-27 for cylindrical shells, UG-32 for formed heads, ASME B31.3 paragraph 304 for straight pipe, and the API 653 shell equations for tank courses where liquid height and specific gravity drive the stress. Nominal thickness carries corrosion allowance and mill tolerance; using it inflates remaining life.",
      "source": "API 510 Pressure Vessel Inspection Code, API 570 Piping Inspection Code and API 653 Tank Inspection, Repair, Alteration and Reconstruction — corrosion rate, required thickness and remaining life provisions; ASME BPVC Section VIII Division 1 (2023 Edition), UG-27, UG-32 and UW-12; ASME BPVC Section II Part D (allowable stress); ASME B31.3-2022 paragraph 304 and Table 304.1.1; ASME B31.1-2022 paragraph 104; ASTM E797 (manual ultrasonic pulse-echo contact thickness measurement); API 579-1/ASME FFS-1.",
      "table": {
          "caption": "Where required thickness comes from, component by component",
          "columns": [
              "Component",
              "Required-thickness source",
              "What drives the equation",
              "Where the input values come from",
              "The error that inflates remaining life"
          ],
          "rows": [
              [
                  "Cylindrical pressure vessel shell",
                  "ASME Section VIII Div 1, UG-27",
                  "Design pressure, inside radius, allowable stress, joint efficiency",
                  "Section II Part D for allowable stress; UW-12 for joint efficiency",
                  "Using the nameplate MAWP in place of the design pressure"
              ],
              [
                  "Formed head — ellipsoidal, torispherical, hemispherical",
                  "ASME Section VIII Div 1, UG-32",
                  "Design pressure, head diameter, head geometry factor, allowable stress, joint efficiency",
                  "Section II Part D; UG-32 and UG-37 geometry rules",
                  "Applying the hemispherical equation to an ellipsoidal head"
              ],
              [
                  "Straight process pipe",
                  "ASME B31.3 paragraph 304",
                  "Design pressure, outside diameter, allowable stress, quality factor, weld joint reduction factor, Y coefficient",
                  "Table A-1 for stress; Table 304.1.1 for Y",
                  "Ignoring the 12.5% mill tolerance on the purchased pipe"
              ],
              [
                  "Power piping",
                  "ASME B31.1 paragraph 104",
                  "Design pressure, outside diameter, allowable stress, Y coefficient",
                  "Section II Part D; Table 104.1.2-1 for Y",
                  "Applying B31.3 allowable stresses to B31.1 piping"
              ],
              [
                  "Tank shell course",
                  "API 653 shell equations",
                  "Diameter, liquid height above the course, specific gravity, allowable stress, joint efficiency",
                  "API 653 and the original API 650 design basis",
                  "Judging the whole course against a single bottom-of-course reading"
              ],
              [
                  "Tank bottom plate",
                  "API 653 minimum bottom thickness provisions",
                  "Measured remaining thickness, corrosion rate, interval to the next internal inspection",
                  "API 653 bottom plate tables and the corrosion rate from the last internal",
                  "Treating MFL scan indications as thickness values without UT confirmation"
              ]
          ],
          "note": "Nominal thickness is what was purchased; required thickness is what the code needs today. Corrosion allowance and mill tolerance sit between the two, and every remaining-life figure that skips the design calculation overstates the inspection interval."
      },
      "facets": [
          {
              "q": "Which corrosion rate does API 510 require, short-term or long-term?",
              "a": "The higher of the two. Short-term uses the previous and current thickness readings over the interval between them; long-term uses the initial and current readings over the years in service. A process change, a feedstock switch or a failed injection point shows in the short-term rate years before it moves the long-term average, so the higher figure governs the interval."
          },
          {
              "q": "What is required thickness and where does it come from?",
              "a": "The code-minimum thickness the component needs at its design conditions, calculated from the design equation — ASME Section VIII Division 1 UG-27 for cylindrical shells, UG-32 for formed heads, ASME B31.3 paragraph 304 for straight pipe, the API 653 shell equations for tank courses. It excludes corrosion allowance and mill tolerance, which is exactly why nominal thickness inflates remaining life when substituted for it."
          },
          {
              "q": "How is the next inspection date set once remaining life is known?",
              "a": "At the lesser of half the remaining life or the code ceiling. API 510 caps internal or on-stream inspection of pressure vessels at ten years and external visual at five. API 570 applies the same half-life rule to piping thickness intervals by class. API 653 derives the tank internal interval from corrosion rate and minimum bottom thickness against a hard ceiling."
          },
          {
              "q": "What does an IIW V1 block calibrate?",
              "a": "Beam index point, refracted angle, sweep range and sensitivity for shear-wave weld inspection. The radiused quadrant peaks the signal to locate the index point, the 1.5 mm side-drilled hole verifies the refracted angle against the transducer's marked value, and back-wall echoes through the block set the sweep. The V2 block performs the same checks in a smaller field-portable form."
          },
          {
              "q": "Why do two inspectors get different thickness readings at the same location?",
              "a": "Couplant, surface condition, probe zero and velocity setting. A doubled reading on thin wall, a paint layer read as steel, an uncorrected zero offset, and a velocity left at the last material examined each shift the number by more than the corrosion rate being measured. Repeat readings at a permanently marked location under one procedure, and record the instrument and probe used."
          },
          {
              "q": "When does a thickness reading trigger fitness-for-service instead of repair?",
              "a": "When measured thickness falls below required thickness but the component remains fit to operate at defined conditions for a defined period. API 579-1/ASME FFS-1 routes it by flaw type: Part 4 for general metal loss, Part 5 for local thin areas, Part 6 for pitting, Part 9 for crack-like flaws. The assessment returns a run, repair or replace decision with a remaining-life figure."
          }
      ]
  },

  "/digital-twins": {
      "answer": "An asset integrity digital twin is judged on one thing: whether every thickness reading is bound to a CML on the model rather than attached as a PDF. Atlantis DT stores each UT, PAUT, RT and MFL result as a located object carrying method, code reference, inspector, instrument and calibration-block traceability, which is what makes API 581 damage factors and API 579 assessments computable instead of manual.",
      "expansion": "The value of an integrity twin is decided by the data model, not the renderer. A corrosion rate is computable only when successive thickness readings resolve to the same condition monitoring location, on the same component, with the inspection date, instrument, transducer and calibration block recorded against each reading — otherwise the short-term and long-term rates that API 510, 570 and 653 use to set the next inspection interval cannot be trusted. API 581 then consumes that measured condition: the thinning damage factor is driven by the observed rate against the corrosion allowance remaining, so a twin populated from PDF reports produces a risk ranking built on estimates rather than measurements. API 579 reuses the same grid — a Part 5 local thin area assessment needs the thickness profile along critical inspection planes, which is exactly what a CML-bound reading history already stores. Geometry supplies where; the inspection record supplies what and when.",
      "source": "API RP 581, Risk-Based Inspection Methodology, 3rd edition — Part 2 damage factors (Annexes 2.B–2.I) and Part 3 consequence of failure; API 579-1/ASME FFS-1, Fitness-For-Service, 2021 edition, Parts 4, 5, 6, 7, 8 and 9; ISO 15926 Parts 2, 4 and 7 for reference-data interoperability; API 510, API 570 and API 653 for in-service interval setting.",
      "table": {
          "caption": "Where each platform class sits in a fixed-equipment integrity stack — and what it does not own",
          "columns": [
              "Platform class (examples)",
              "Primary object it stores",
              "Computes corrosion rate and remaining life",
              "Runs API 581 risk ranking on measured condition",
              "Assembles the API 579 assessment input bundle"
          ],
          "rows": [
              [
                  "CMMS / EAM — SAP PM, IBM Maximo",
                  "Asset master, work orders, notifications",
                  "No",
                  "No",
                  "No"
              ],
              [
                  "Process historian — AVEVA PI System (OSIsoft PI)",
                  "Time-series process tags",
                  "No",
                  "Supplies the operating envelope only",
                  "Supplies operating data only"
              ],
              [
                  "IoT / APM — PTC ThingWorx, Siemens MindSphere, GE Predix",
                  "Machine telemetry and rotating-equipment condition",
                  "No",
                  "No",
                  "No"
              ],
              [
                  "Reality and BIM — Bentley iTwin, laser-scan platforms",
                  "Geometry, point cloud, component model",
                  "No",
                  "No",
                  "Supplies geometry only"
              ],
              [
                  "Data fusion — Cognite Data Fusion",
                  "Contextualised data graph across connected sources",
                  "Only where an NDE data model is built on top",
                  "Only where an RBI engine is built on top",
                  "Only where the schema is built on top"
              ],
              [
                  "Inspection-first integrity twin — Atlantis DT",
                  "CML-bound NDE readings carrying method, date, inspector, instrument and calibration traceability",
                  "Yes",
                  "Yes",
                  "Yes"
              ]
          ],
          "note": "The column that decides the stack is the second one. A platform computes a corrosion rate only if it stores a reading bound to a condition monitoring location, not a document attached to an asset. That is a data-model property rather than a feature toggle, which is why bolting an RBI module onto a historian produces risk ranked on estimates."
      },
      "facets": [
          {
              "q": "What has to be true about existing inspection data before a digital twin is worth building?",
              "a": "Every thickness reading needs a component, a condition monitoring location and a date that resolve unambiguously. Where CMLs were renumbered between turnarounds, or readings live as scanned PDFs, the twin inherits the ambiguity and computes corrosion rates from mismatched points. Data reconciliation comes first: map historical readings onto a stable CML register, then load. That step, not the 3D model, sets the schedule."
          },
          {
              "q": "How does a twin shorten an API 579 Part 5 local thin area assessment?",
              "a": "Part 5 needs the thickness profile along critical inspection planes through the flaw, plus component geometry, material, design pressure and design temperature. A twin already holds the thickness grid bound to the component and the material record bound to the equipment, so the input bundle is assembled rather than reconstructed. The engineer spends the time on evaluation and sign-off instead of on data archaeology."
          },
          {
              "q": "Why does ISO 15926 alignment matter more than the quality of the 3D viewer?",
              "a": "A viewer is replaced within one procurement cycle; the integrity dataset has to outlive several. ISO 15926 gives asset and inspection data a neutral reference-data schema, so it exports to AVEVA PI, Cognite Data Fusion, Bentley iTwin, SAP PM or IBM Maximo without re-keying. Proprietary native models turn migration into a re-entry project, which is how operators stay locked to a platform they have outgrown."
          },
          {
              "q": "Where does the geometry come from when no CAD model of the plant exists?",
              "a": "Laser scanning. A terrestrial scan produces a registered point cloud of the unit, converted into a component model that CMLs attach to. For vessels, tanks and piping the as-built dimensions matter more than visual fidelity, because API 579 Part 4 and Part 5 assessments consume them. Isometrics and P&IDs supply the circuit topology a scan cannot see."
          },
          {
              "q": "Can process sensors predict fixed-equipment failure without inspection data?",
              "a": "No. Sensor telemetry reports how equipment is operating — pressure, temperature, flow, vibration — while thinning, HTHA, HIC and stress corrosion cracking are governed by cumulative exposure and are measured by NDE, not inferred from a process tag. Sensors sharpen the damage-mechanism picture by defining the operating envelope that API 571 mechanisms depend on. They do not replace a thickness reading."
          },
          {
              "q": "What breaks when a twin is populated from scanned inspection reports?",
              "a": "Trending. A scanned PDF carries a number a human reads and a machine cannot bind to a CML, so the twin stores an attachment instead of a measurement. Corrosion rates stop computing, API 581 thinning damage factors fall back to default estimates, and the risk ranking loses its link to measured condition — the exact link that justified building the twin."
          }
      ]
  },

  "/ndt-training-new-orleans": {
      "answer": "Atlantis delivers NDT training for New Orleans on-site at your own facility anywhere in Louisiana, through scheduled cohorts, or blended — online theory with a supervised in-person practical block. No Atlantis classroom operates in New Orleans. Programmes run Level I and Level II across UT, RT, MT, PT, VT and ET, plus API 510, API 570 and API 653 inspector preparation.",
      "expansion": "Louisiana's inspection demand is set by three asset populations with different code drivers. Gulf Coast refining and petrochemical units run in-service inspection under API 510 for vessels, API 570 for piping and API 653 for storage tanks, which pulls hardest on ultrasonic thickness work, shear-wave weld examination and tank bottom scanning. Fabrication along the Mississippi corridor examines new construction to ASME Section VIII Division 1 and B31.3, where radiography and penetrant carry most of the volume. Shipyard and marine repair works to ABS and USCG survey requirements, with magnetic particle on fatigue-critical structural welds. A New Orleans candidate should certify in the method their target employers actually examine with, not thinly across all six. Under SNT-TC-1A the employer issues that certification against its own Written Practice, so the employer rather than a school owns the certificate — and an auditor asks for the Written Practice first.",
      "source": "ASNT Recommended Practice No. SNT-TC-1A; ANSI/ASNT CP-189; ISO 9712:2021, Non-destructive testing — Qualification and certification of NDT personnel; ISO/IEC 17024 for certification-body accreditation; API 510, API 570 and API 653 for in-service inspection.",
      "table": {
          "caption": "Certification routes Gulf Coast contracts name — and what each one actually gives the technician",
          "columns": [
              "Route",
              "Who issues the certificate",
              "Travels with the technician",
              "What an auditor asks to see",
              "Where it is named on the Gulf Coast"
          ],
          "rows": [
              [
                  "ASNT SNT-TC-1A (Recommended Practice)",
                  "The employer",
                  "No — it ends with the employment",
                  "The employer's Written Practice, plus training, experience and examination records",
                  "Most US refinery, petrochemical and fabrication contracts"
              ],
              [
                  "ANSI/ASNT CP-189 (national standard)",
                  "The employer, conforming to a standard rather than a recommended practice",
                  "No",
                  "A Written Practice demonstrating conformance to CP-189",
                  "Owner specifications that require a standard, not a recommended practice"
              ],
              [
                  "ISO 9712",
                  "An independent certification body accredited to ISO/IEC 17024",
                  "Yes",
                  "The body's certificate and a current vision record",
                  "International EPC scopes and non-US operators working the Gulf"
              ],
              [
                  "CSWIP / PCN",
                  "TWI or BINDT",
                  "Yes",
                  "The scheme certificate and the scheme document",
                  "Offshore and marine scopes tied to North Sea practice"
              ],
              [
                  "NAS 410 / EN 4179",
                  "The employer, under a designated Responsible Level 3",
                  "No",
                  "The written practice and the Responsible Level 3's approval records",
                  "Aerospace and defence supply chains, not refinery work"
              ]
          ],
          "note": "SNT-TC-1A is a recommended practice, not a standard: it recommends training and experience hours that the employer's Written Practice adopts or modifies with documented justification. That is why an auditor reads the Written Practice before the certificate, and why two Level II certificates from different Gulf Coast employers are not equivalent documents."
      },
      "facets": [
          {
              "q": "Does an SNT-TC-1A certification transfer when a technician changes employer?",
              "a": "No. Under SNT-TC-1A the certificate is issued by the employer against that employer's Written Practice, so it ends with the employment. The new employer reviews the documented training and experience hours, administers its own specific and practical examinations, and certifies afresh. ISO 9712, PCN and CSWIP certificates are issued by an independent body and do travel with the individual."
          },
          {
              "q": "What does a Gulf Coast turnaround contract require of a technician at the gate?",
              "a": "A current method-level Level II certificate for every method the technician will interpret, the certifying employer's Written Practice on file, the documented training and experience hours behind that certificate, and a current near-vision acuity and colour-contrast record. Site safety training and, for radiography, a radiation-safety qualification sit on top. The certificate alone clears nothing without the record behind it."
          },
          {
              "q": "How is the practical examination handled when training is delivered on-site?",
              "a": "It runs on your own specimens under a qualified Level III, which is the point of on-site delivery. The candidate calibrates the equipment they will use in production, examines representative welds or components, interprets against the code the contract names, and writes the report. That examination record goes into the employer's personnel file, where a client audit reads it."
          },
          {
              "q": "What does API 653 certification require beyond a method-level Level II?",
              "a": "A separate API Individual Certification Program examination, administered by API rather than by an employer, with eligibility set by a documented combination of education and inspection experience. API 653 certifies the inspector who directs and evaluates the tank inspection; the NDE itself is still performed by personnel certified in the method. Neither certification substitutes for the other."
          },
          {
              "q": "Can a single candidate in New Orleans qualify without a corporate cohort?",
              "a": "Yes — through a scheduled cohort or blended delivery, with online theory and a supervised practical block arranged locally. The constraint after that is experience: SNT-TC-1A and ISO 9712 both require documented on-the-job hours alongside training, and those accrue only inside employment. A candidate with no employer completes the training and then stalls at the experience requirement."
          },
          {
              "q": "What does an inspection company need in place before certifying its own technicians?",
              "a": "A Written Practice conforming to SNT-TC-1A, a Level III qualified in each method to write and approve the examinations, general, specific and practical examination sets, per-person training and experience records, and current vision records. Companies without an in-house Level III engage an outsourced Level III of record. Certificates issued without those elements fail the first client audit."
          }
      ]
  },

  "/ndt-training-dallas": {
      "answer": "Atlantis delivers NDT training for Dallas–Fort Worth on-site at your own facility anywhere in Texas, through scheduled cohorts, or blended — online theory with a supervised practical block. No Atlantis classroom operates in DFW. Programmes run Level I and Level II across UT, PAUT, RT, MT, PT, VT and ET, with API 510, API 570 and API 653 inspector preparation.",
      "expansion": "Dallas–Fort Worth splits into two inspection economies running different rulebooks. Aerospace and defence manufacturing — airframe structure, engine hardware, castings and forgings — qualifies personnel under NAS 410 and its European equivalent EN 4179, where a designated Responsible Level 3 approves the written practice and accepts the qualification of every Level 1 and Level 2, and the process itself is audited to the Nadcap AC7114 criteria administered by the Performance Review Institute. Fluorescent penetrant and eddy current dominate that work. North Texas pipeline, midstream and structural fabrication runs the other rulebook: SNT-TC-1A or ANSI/ASNT CP-189 personnel certification, with acceptance drawn from ASME Section VIII Division 1, ASME B31.3, API 1104 and AWS D1.1. A technician certified for one economy is not automatically acceptable in the other, and choosing the wrong route first is the most expensive sequencing error in this market.",
      "source": "ASNT Recommended Practice No. SNT-TC-1A, 2024 edition; ANSI/ASNT CP-189; AIA/NAS 410 and EN 4179 for aerospace personnel qualification; Nadcap NDT audit criteria AC7114 series (Performance Review Institute); ASME BPVC Section VIII Division 1, ASME B31.3, API 1104 and AWS D1.1/D1.1M for acceptance.",
      "table": {
          "caption": "Choosing a delivery route for a Dallas–Fort Worth NDT programme",
          "columns": [
              "Route",
              "Who it fits",
              "Where the practical block happens",
              "What the specimens are",
              "Days lost to travel"
          ],
          "rows": [
              [
                  "On-site corporate at your facility",
                  "A crew of several technicians at one site",
                  "Your own shop or plant",
                  "Your own parts, welds and production hardware",
                  "None"
              ],
              [
                  "Scheduled cohort",
                  "One or two candidates with no in-house practical facility",
                  "An Atlantis training location",
                  "Standard reference specimens",
                  "Travel plus the full course duration"
              ],
              [
                  "Blended — online theory, supervised practical",
                  "Candidates who cannot leave shift for the whole programme",
                  "An arranged venue or the employer's facility",
                  "Employer specimens where available",
                  "The practical block only"
              ],
              [
                  "Employer-run under your own Written Practice with an outsourced Level III",
                  "Companies certifying their own people continuously",
                  "Your facility, year-round",
                  "Your production hardware",
                  "None"
              ]
          ],
          "note": "Under SNT-TC-1A the employer issues the certification, so the delivery route also decides who holds the personnel record afterwards. Aerospace work in DFW adds a second constraint: NAS 410 and EN 4179 require a designated Responsible Level 3 to approve the written practice and the qualification of personnel, whichever route the training arrives by."
      },
      "facets": [
          {
              "q": "What makes aerospace NDT certification in Fort Worth different from refinery work?",
              "a": "NAS 410 and EN 4179 require a designated Responsible Level 3 who approves the employer's written practice and personally accepts the qualification of each Level 1 and Level 2, and prime contractors flow down Nadcap accreditation to the AC7114 criteria. The process, the operator and the paperwork are all audited. SNT-TC-1A leaves far more of that to the employer's own judgement."
          },
          {
              "q": "Which method should a DFW machine or fabrication shop certify first?",
              "a": "Penetrant, then magnetic particle. Machined parts and aluminium, titanium and stainless assemblies are examined for surface-breaking discontinuities, penetrant carries the lowest equipment burden, and it works on the non-magnetic alloys that dominate aerospace hardware. Magnetic particle follows for ferromagnetic steel parts. Ultrasonic and radiography come after, once weld volume in the shop justifies the equipment and the training hours."
          },
          {
              "q": "Can the Responsible Level 3 role be outsourced?",
              "a": "Yes. The employer designates the Responsible Level 3 and documents the designation, the method scope and the approval records; a contracted Level 3 of record is ordinary in supplier shops too small to carry one in-house. What cannot be outsourced is the documentation — the designation letter, the approved written practice and the qualification approvals all live in the employer's system."
          },
          {
              "q": "Why does aerospace run fluorescent penetrant while refinery work runs visible dye?",
              "a": "Sensitivity against portability. Fluorescent post-emulsifiable penetrant is the highest-sensitivity combination recognised in ASME Section V Article 6 and finds the tight fatigue cracks aerospace hardware is examined for, but it needs a dark booth, UV-A lamps and a process line. Solvent-removable visible dye reads under 1,000 lux of ordinary light from an aerosol kit, which is what a piping weld at height allows."
          },
          {
              "q": "What do North Texas pipeline and midstream contracts name?",
              "a": "API 1104 for welding and acceptance on pipelines and related facilities, with ASME B31.4 for liquid and ASME B31.8 for gas transmission piping, and API 570 where the piping is in-service plant piping rather than transmission line. Personnel certification runs through SNT-TC-1A. Radiography carries most girth-weld volume, with automated ultrasonic testing on mechanised welding spreads."
          },
          {
              "q": "Does a Level II from a DFW aerospace shop satisfy a refinery contract?",
              "a": "No, not on its own. A NAS 410 qualification is issued against that employer's written practice and product scope, while a refinery contract names SNT-TC-1A or ISO 9712 with acceptance to ASME and API codes the aerospace qualification never covered. The documented training and experience hours carry across and shorten the route; the certificate itself does not."
          }
      ]
  },

  "/ndt-training-qatar": {
      "answer": "Atlantis runs NDT training for Qatar on-site at client facilities in and around Doha, through scheduled cohorts, and blended — online theory with supervised practical. No walk-in Atlantis centre operates in Qatar. QatarEnergy contractor specifications name ASNT SNT-TC-1A and ISO 9712 interchangeably for method-level personnel, and CSWIP 3.1 is the de-facto welding-inspection ticket on North Field EPC packages.",
      "expansion": "Qatar's inspection demand runs on two cycles at once. The North Field expansion is adding LNG trains toward 142 MTPA by 2030, which is construction-phase examination: radiography on new welds, penetrant on austenitic and nickel systems, and ultrasonic on cryogenic-service materials against demanding acceptance criteria. The operating fleet at Ras Laffan and the petrochemical plants at Mesaieed run the second cycle — in-service inspection on code intervals, exchanger eddy current campaigns and tank work. Method-level personnel are certified under ASNT SNT-TC-1A or ISO 9712, and examinations are sat in Doha at Bureau Veritas, TÜV NORD Qatar and the QatarEnergy CP Examination Centre. Certification is verified at vendor registration and re-checked at gate level, and EPC quality regimes run full-time client surveillance over NDT subcontractors — so the personnel file, not the certificate alone, is what clears a crew onto site.",
      "source": "QatarEnergy contractor and vendor-registration specifications; ASNT Recommended Practice No. SNT-TC-1A; ISO 9712:2021, Non-destructive testing — Qualification and certification of NDT personnel; ISO/IEC 17024 for certification-body accreditation; TWI CSWIP 3.1 Welding Inspector scheme document; API 571 for in-service damage mechanisms.",
      "table": {
          "caption": "What a QatarEnergy or NFE EPC package asks an inspection contractor to evidence",
          "columns": [
              "Requirement",
              "Scheme or document that satisfies it",
              "Who issues it",
              "Where it is checked"
          ],
          "rows": [
              [
                  "Method-level NDT competence (UT, RT, MT, PT, VT, ET)",
                  "ASNT SNT-TC-1A Level II or ISO 9712 Level 2",
                  "The employer (SNT-TC-1A) or an accredited body (ISO 9712)",
                  "Vendor registration, then gate verification"
              ],
              [
                  "Welding inspection competence",
                  "CSWIP 3.1",
                  "TWI",
                  "EPC quality gate on NFE packages"
              ],
              [
                  "Procedure approval and personnel qualification",
                  "ASNT NDT Level III or ISO 9712 Level 3",
                  "The employer or an accredited body",
                  "Client surveillance of the NDT subcontractor"
              ],
              [
                  "The certification scheme itself",
                  "Employer Written Practice under SNT-TC-1A, or the body's scheme document under ISO 9712",
                  "The employer or the certification body",
                  "Vendor-registration document audit"
              ],
              [
                  "Radiation safety for site radiography",
                  "National radiation-protection licence and source registration",
                  "Qatar's national radiation-protection authority",
                  "Site permit-to-work"
              ],
              [
                  "Fitness to examine",
                  "Annual near-vision acuity and colour-contrast examination",
                  "Optometrist, recorded by the employer",
                  "Personnel file audit"
              ]
          ],
          "note": "Method certification is the row contractors prepare for and the scheme document is the row that fails them. Under SNT-TC-1A the certificate is only as strong as the Written Practice behind it, so vendor registration reads that document first; under ISO 9712 the equivalent check is that the issuing body holds ISO/IEC 17024 accreditation."
      },
      "facets": [
          {
              "q": "Is an ISO 9712 certificate issued in India or the Philippines accepted on a QatarEnergy site?",
              "a": "Yes, where the issuing body is accredited to ISO/IEC 17024, the certificate is current and the vision record is in date. Acceptance is decided at vendor registration and re-checked at the gate, so the contractor submits the certificate, the body's scheme document and the personnel file together. Certificates issued by unaccredited training providers are the common rejection at that step."
          },
          {
              "q": "What does CSWIP 3.1 cover that an ASNT Level II does not?",
              "a": "Welding inspection rather than a single NDT method: consumable and process control, WPS and WPQR review, joint preparation and fit-up, visual acceptance to the fabrication code, and the surveillance role over an NDT subcontractor. An ASNT UT Level II interprets ultrasonic results against an acceptance standard. On an NFE EPC package the two roles sit on different personnel and both are named."
          },
          {
              "q": "Which ultrasonic problems are specific to LNG cryogenic service?",
              "a": "Austenitic stainless and nickel-base weld metal scatters and attenuates the beam through coarse columnar grain, raising noise and cutting penetration against carbon steel. Nine-percent nickel plate used for LNG containment is welded with nickel-base consumables, so the weld metal is austenitic even where the base metal is not. Technique qualification on representative material, not a carbon-steel block, is what makes the examination defensible."
          },
          {
              "q": "Where are ASNT and ISO 9712 examinations actually sat in Doha?",
              "a": "Bureau Veritas Doha, TÜV NORD Qatar and the QatarEnergy CP Examination Centre administer ASNT and ISO 9712 examinations locally. A contractor running an on-site programme schedules the training and practical against the examination window at one of those centres rather than the reverse, because the centre's calendar is the fixed constraint in the whole plan."
          },
          {
              "q": "Can a contractor certify its own technicians in Qatar under SNT-TC-1A?",
              "a": "Yes — employer certification is exactly the SNT-TC-1A model. It requires a conforming Written Practice, a Level III qualified in each method to write and approve the general, specific and practical examinations, and complete training, experience and vision records per person. QatarEnergy vendor registration inspects those documents. Contractors without an in-house Level III engage an outsourced Level III of record."
          },
          {
              "q": "What changes for a crew moving from NFE construction work to a Ras Laffan turnaround?",
              "a": "The code basis shifts from construction acceptance to in-service evaluation. Construction examines new welds against the fabrication code; turnaround work measures degradation — thickness surveys against corrosion allowance, exchanger tube eddy current, and crack detection at the damage-mechanism locations API 571 predicts. The same Level II certificates apply, while the interpretation task and the report format both change."
          }
      ]
  },

  "/api-570-india": {
      "answer": "API 570 is issued by API's Individual Certification Programs, not by any training provider, and the gate is education plus documented piping inspection experience: one year with an engineering or technology degree, two years with a two-year technical diploma, three years with a higher secondary certificate, five years with none. Indian candidates sit the identical computer-based exam at Prometric centres.",
      "expansion": "Order the sequence correctly and the certification takes one application cycle. API publishes a publication effectivity sheet for each exam window that names the exact edition of every reference; buying a later edition of ASME B31.3 than the sheet lists is a common and self-inflicted failure. The open-book reference set for API 570 is API 570 itself, API RP 571, 574, 576, 577, 578 and 580, ASME B16.5, ASME B31.3, and ASME Boiler and Pressure Vessel Code Sections V and IX. Only printed, tabbed copies enter the Prometric room; digital copies are refused at the door in Mumbai exactly as in Houston. Experience is verified against the application, so it has to be piping inspection work performed or supervised, evidenced by an employer. Certification then runs on a three-year cycle, with a recertification examination at six years rather than a paperwork renewal.",
      "source": "American Petroleum Institute, Individual Certification Programs — API 570 Piping Inspector Certification: Body of Knowledge and Publication Effectivity Sheet for the applicable exam window, together with the ICP candidate documentation covering eligibility, application and recertification; API 570, Piping Inspection Code, in the edition named on that effectivity sheet.",
      "table": {
          "caption": "API 570 eligibility from India — education route against documented experience",
          "columns": [
              "Route",
              "Education held",
              "Minimum documented piping inspection experience",
              "Evidence API requires",
              "Where Indian candidates accumulate it"
          ],
          "rows": [
              [
                  "Degree route",
                  "BE, B.Tech or BSc in engineering or technology",
                  "1 year",
                  "Employer letter describing piping inspection duties performed or supervised",
                  "Refinery turnaround inspection teams, EPC piping QA/QC, third-party inspection agencies"
              ],
              [
                  "Diploma route",
                  "Two-year engineering or technology diploma",
                  "2 years",
                  "Same employer attestation, dated and role-specific",
                  "Fabrication shop inspection cells, contractor QC departments"
              ],
              [
                  "Secondary route",
                  "Higher secondary certificate or trade certificate",
                  "3 years",
                  "Same, with continuity across employers documented",
                  "Site QC on piping erection, hydrotest and fabrication inspection"
              ],
              [
                  "No-education route",
                  "No formal education",
                  "5 years",
                  "Same, spanning the full claimed period",
                  "Long-service site inspection and shutdown work"
              ],
              [
                  "Recertification, year 3",
                  "Already certified",
                  "Continued work in the field since certification",
                  "Attestation of continued piping inspection activity",
                  "No examination at this stage"
              ],
              [
                  "Recertification, year 6",
                  "Already certified",
                  "Continued work in the field since the year-3 renewal",
                  "Attestation plus a shortened recertification examination",
                  "Prometric centre, same network as the original exam"
              ]
          ],
          "note": "Experience is counted in piping inspection work performed or supervised, not in total years employed. A mechanical engineer with eight years in rotating equipment or process operations starts at zero for API 570."
      },
      "facets": [
          {
              "q": "Which publications can I take into the API 570 exam room?",
              "a": "Only the editions named on API's publication effectivity sheet for your exam window, in printed and tabbed form. The set covers API 570, API RP 571, 574, 576, 577, 578 and 580, ASME B16.5, ASME B31.3, and ASME Boiler and Pressure Vessel Code Sections V and IX. Prometric refuses digital copies and unlisted editions at the door."
          },
          {
              "q": "Does an ASNT or ISO 9712 certificate count toward API 570 eligibility?",
              "a": "No. ASNT and ISO 9712 certify competence in an NDT method — ultrasonics, radiography, penetrant. API 570 eligibility counts documented piping inspection experience performed or supervised, which is a different activity. The two stack powerfully in hiring, because an API 570 inspector who also interprets ultrasonic data commands more, and neither substitutes for the other on the application."
          },
          {
              "q": "How is API 570 recertified, and what happens if it lapses?",
              "a": "Certification runs three years. The three-year recertification is evidence-based: continued work in the field, attested and submitted. The six-year point requires a recertification examination, shorter than the original and still an examination. Allowing the certificate to expire past API's reinstatement window sends the holder back to the full application and the full exam, including fresh eligibility evidence."
          },
          {
              "q": "Is an API 570 earned in India recognised in the Gulf and the United States?",
              "a": "Yes. API ICP issues one certification globally and the certificate carries no country of issue. Saudi Aramco, ADNOC, QatarEnergy and US refiners name API 570 directly in their specifications. What changes across borders is the employer's own screening — Gulf operators add contractor approval processes and site competence testing on top of the API certificate before granting access."
          },
          {
              "q": "What does the API 570 exam test beyond memorising the code?",
              "a": "Calculation and lookup under time pressure. Required thickness and pressure design of piping to ASME B31.3, corrosion rate and remaining life from thickness readings, inspection interval determination, selecting the examination method from ASME Section V, and checking a welding procedure and welder qualification against Section IX. The closed-book section tests recall; the open-book section tests whether your tabs are usable."
          },
          {
              "q": "Can experience gained outside India count toward the application?",
              "a": "Yes. API counts documented piping inspection experience regardless of where it was performed, so Gulf rotation work at Aramco, ADNOC or QatarEnergy sites counts identically to work at Jamnagar or Paradip. The evidence requirement is unchanged: an employer able to describe the piping inspection duties performed or supervised, reachable if API verifies the claim."
          }
      ]
  },

  "/ndt-training-denver": {
      "answer": "Atlantis operates no classroom in Denver. Colorado programmes reach candidates three ways: on-site at your own facility using your equipment and specimens, a scheduled cohort at an Atlantis location, or blended delivery with online theory and supervised in-person practical. Under ASNT SNT-TC-1A the employer certifies the technician, so delivery format decides logistics and never validity.",
      "expansion": "Classroom hours are the smallest part of the requirement, which is why the delivery format matters less than most buyers expect. ASNT SNT-TC-1A sets recommended minimum training hours per method and level, then requires documented on-the-job experience in that method, a general examination, a specific examination on the employer's own procedures, a practical examination, and current near-vision and colour-contrast acuity. The employer certifies against its own written practice, and a Level III administers and approves. For a Front Range crew the binding constraint is experience hours accumulating under supervision, not seat time — which is the argument for training the whole crew on site, on the gathering lines, compressor stations and vessels they already examine. DJ Basin midstream work pulls ultrasonic and radiographic weld examination hardest; Front Range aerospace pulls eddy current and penetrant. A programme built for Colorado follows that split rather than covering ten methods thinly.",
      "source": "ASNT SNT-TC-1A, Personnel Qualification and Certification in Nondestructive Testing, 2020 edition — recommended initial training hours and experience table, examination requirements and vision requirements; ANSI/ASNT CP-189 where a national standard is contractually specified instead of a recommended practice.",
      "table": {
          "caption": "SNT-TC-1A recommended initial training hours by method, against what Colorado work actually pulls",
          "columns": [
              "Method",
              "Level I classroom hours (recommended)",
              "Additional Level II hours",
              "Front Range demand driver",
              "Required beyond the classroom"
          ],
          "rows": [
              [
                  "Ultrasonic (UT)",
                  "40",
                  "40",
                  "DJ Basin girth welds, compressor station piping, vessel and tank thickness surveys",
                  "Documented experience hours, then general, specific and practical examinations"
              ],
              [
                  "Radiographic (RT)",
                  "40",
                  "40",
                  "Gathering line and fabrication weld radiography across the Rockies corridor",
                  "Same three examinations, plus a state radiation licence held by the employer"
              ],
              [
                  "Magnetic particle (MT)",
                  "12",
                  "8",
                  "Castings, forgings, structural welds and drilling equipment inspection",
                  "Same three examinations; practical on your own specimens"
              ],
              [
                  "Liquid penetrant (PT)",
                  "4",
                  "8",
                  "Aerospace machined parts and non-ferrous components on the Front Range",
                  "Same three examinations; short course, full experience requirement"
              ],
              [
                  "Visual (VT)",
                  "8",
                  "16",
                  "In-service surveys and fabrication acceptance; precedes every other method",
                  "Same three examinations, plus documented vision acuity"
              ],
              [
                  "Eddy current (ET)",
                  "40",
                  "40",
                  "Aerospace fastener holes, tubing and conductivity work in Colorado manufacturing",
                  "Same three examinations; equipment-specific practical"
              ]
          ],
          "note": "These are recommendations, not law. The employer's written practice is the binding document and can require more. A client audit asks for the written practice first and the certificates second."
      },
      "facets": [
          {
              "q": "Do we need a Colorado-based provider to certify our technicians?",
              "a": "No. Under ASNT SNT-TC-1A the employer certifies, not a school — the provider supplies training, examinations and Level III oversight, and the certificate is issued on your letterhead against your written practice. A Denver address buys nothing on its own. What matters is whether the Level III administering your examinations is qualified, named in the written practice, and reachable when an auditor calls."
          },
          {
              "q": "What has to be in our written practice before we can certify anyone?",
              "a": "Scope of methods and levels, education, training and experience requirements per method, examination content and grading, the Level III responsible for administration, certification and recertification intervals, vision examination requirements, interrupted-service rules, and records retention. It has to name SNT-TC-1A or CP-189 as its basis and describe what your company actually does — a downloaded template nobody follows fails the audit."
          },
          {
              "q": "Does radiographic work in Colorado need a state licence as well as certification?",
              "a": "Yes. Colorado is an NRC Agreement State, so radioactive material licences and industrial radiography authorisations come from the state radiation control program, and radiographer requirements are enforced through that licence. An RT Level II certificate qualifies interpretation of the radiograph; it authorises nothing about possessing, transporting or exposing a source. The two approvals are obtained separately and audited separately."
          },
          {
              "q": "How do we keep certification current across a crew that turns over?",
              "a": "Track four clocks per technician: the recertification interval set in your written practice, the annual vision examination, accumulated experience hours toward the next level, and the interrupted-service rule that applies when someone stops working in a method. New hires holding prior certificates are certified afresh against your written practice — their training and experience records transfer, the certificate does not."
          },
          {
              "q": "Can one on-site cohort cover technicians at different levels?",
              "a": "Yes, and it is the normal arrangement for a crew of mixed experience. The classroom block runs to the highest level in the room, examinations are set per candidate at the level being certified, and the practical block uses your own specimens so each candidate is examined on the geometry they inspect. Level I and Level II candidates share theory and split at examination."
          },
          {
              "q": "What records does a client audit ask for after training?",
              "a": "The written practice first, then per technician: training records showing hours and content, documented experience hours in the method, graded general, specific and practical examination papers, current vision examination results, and the certificate signed by the Level III. Auditors also request the Level III's own credentials and the revision of the procedure that applied on the inspection date."
          }
      ]
  },

  "/ndt-training-port-harcourt": {
      "answer": "Niger Delta client specifications name three schemes, not one. Shell SPDC fabrication packages call CSWIP 3.1 for welding inspection, operator in-service inspection runs on ASNT SNT-TC-1A employer certification, and European EPC contracts accept PCN or ISO 9712. Atlantis delivers in Port Harcourt on-site at your yard, as a classroom cohort, or blended — online theory with supervised practical.",
      "expansion": "Two certification models are in play, and a Port Harcourt contractor that owns only one loses bids. ASNT SNT-TC-1A is an employer-based model: your company certifies its own technicians against its own written practice, administered by a Level III, and the certificate travels no further than your payroll. ISO 9712, PCN and CSWIP are third-party models: an accredited certification body examines and certifies the individual, and the certificate survives a change of employer — which is exactly what a European EPC or an IOC procurement package is asking for when it refuses employer certification. Industrial radiography adds a statutory layer no training scheme covers: a practice licence and authorised personnel registered with the Nigerian Nuclear Regulatory Authority. Certificates from every scheme expire, and lapsed personnel records are the single most common finding when an operator audits a Niger Delta inspection contractor before award.",
      "source": "ISO 9712:2021, Non-destructive testing — Qualification and certification of NDT personnel; ASNT SNT-TC-1A, 2020 edition; CSWIP requirements document WI-6-92 for certification of welding inspectors, TWI Certification Ltd; Nigerian Nuclear Regulatory Authority licensing requirements for industrial radiography practice.",
      "table": {
          "caption": "Which certification a Port Harcourt work package actually requires",
          "columns": [
              "Work package",
              "Scheme the specification names",
              "Who issues the certificate",
              "Validity before renewal",
              "Statutory or client gate on top"
          ],
          "rows": [
              [
                  "IOC fabrication and welding inspection (Shell SPDC packages)",
                  "CSWIP 3.1 Welding Inspector",
                  "TWI Certification Ltd through an approved examination centre",
                  "5 years, re-examination at 10",
                  "Client site-entry and competence verification"
              ],
              [
                  "Operator in-service inspection of vessels, piping and tanks",
                  "ASNT SNT-TC-1A Level II, with API 510, 570 or 653 for the inspector role",
                  "Your own company, against its written practice",
                  "Interval set in the written practice; SNT-TC-1A recommends 5 years",
                  "API ICP runs its own separate 3-year cycle"
              ],
              [
                  "European and Norwegian EPC scopes",
                  "ISO 9712 or PCN",
                  "Certification body accredited to ISO/IEC 17024",
                  "5 years, recertification at 10",
                  "Client vendor-approval registration"
              ],
              [
                  "Industrial radiography, onshore or shallow-water offshore",
                  "ASNT or ISO 9712 RT Level II",
                  "Employer or certification body",
                  "As per the governing scheme",
                  "Practice licence and registered radiographers, Nigerian Nuclear Regulatory Authority"
              ],
              [
                  "Offshore and marine classification scopes",
                  "ISO 9712 with client-witnessed practical",
                  "Certification body",
                  "5 years",
                  "Class society approval, offshore medical and survival certification"
              ],
              [
                  "Work placed through third-party agencies (BV, LR, SGS)",
                  "Third-party scheme mandatory; employer certification refused",
                  "Certification body",
                  "5 years",
                  "The agency's own internal technician approval"
              ]
          ],
          "note": "Employer-based ASNT certification is valid and audit-defensible, and it stops at the company gate. A technician who resigns takes no portable certificate with him, which is why Niger Delta crews carry both models."
      },
      "facets": [
          {
              "q": "Will an international operator accept an ASNT certificate issued by a Nigerian employer?",
              "a": "Yes for operator in-service inspection work, where SNT-TC-1A employer certification is the Niger Delta baseline. No for packages whose specification names third-party certification — a European EPC or Norwegian operator asking for PCN or ISO 9712 is explicitly refusing employer-issued certificates, because it wants a body outside your payroll to have examined the technician."
          },
          {
              "q": "What does industrial radiography in Nigeria require beyond an RT Level II certificate?",
              "a": "Authorisation from the Nigerian Nuclear Regulatory Authority. The company holds a practice licence covering the source, its storage and its transport; the individuals working with it are registered and approved separately, with dosimetry and a designated radiation safety role. An ASNT or ISO 9712 RT Level II certificate qualifies interpretation of the radiograph and authorises nothing about possessing or exposing a source."
          },
          {
              "q": "How do CSWIP 3.1 and an ASNT UT Level II differ in what they qualify you to do?",
              "a": "CSWIP 3.1 qualifies a welding inspector: visual examination of welds, reading drawings and welding procedure specifications, verifying consumables and welder qualification, and accepting or rejecting against the fabrication code. ASNT UT Level II qualifies an ultrasonic operator to calibrate, scan, interpret and report. A yard needs both roles, and Shell SPDC fabrication packages name CSWIP 3.1 for the first."
          },
          {
              "q": "Can a technician convert an existing ASNT certificate straight to ISO 9712?",
              "a": "No. ISO 9712 requires the certification body to examine the candidate itself — general, specific and practical — because independence from the employer is the entire point of the scheme. Documented training hours and experience already accumulated do count toward eligibility, so the move is an examination exercise rather than starting from zero."
          },
          {
              "q": "What happens to a technician's certification when he changes employer?",
              "a": "ASNT SNT-TC-1A certification ends. It was your company's certificate, issued against your written practice, and the new employer re-examines and re-certifies under its own. ISO 9712, PCN and CSWIP certificates belong to the individual and move with him. That asymmetry is why Niger Delta contractors holding only employer certification lose people and qualified capability at the same moment."
          },
          {
              "q": "How long does it take to get a crew of ten to Level II in one method?",
              "a": "The classroom block is measured in days; the documented experience hours are the binding constraint and accumulate on live work under a certified Level II or III. A crew already performing the method under supervision reaches examination far sooner than one starting cold. Map existing documented hours against your written practice before scheduling, because that mapping sets the date."
          }
      ]
  },

  "/training-india": {
      "answer": "Industrial radiography in India is gated by the Atomic Energy Regulatory Board, not by any NDT certificate. An RT Level II under ASNT or ISO 9712 qualifies interpretation; AERB approval through the e-LORA system authorises the person and the source. Indian refinery work runs on ASNT plus API ICP; Gulf mobilisation to Aramco and ADNOC contractor pools runs on ISO 9712.",
      "expansion": "Three separate stacks decide whether an Indian inspector can work, and candidates routinely buy the wrong one first. Method certification qualifies you to perform and interpret a test: ASNT SNT-TC-1A through your employer's written practice, or ISO 9712 through a certification body accredited to ISO/IEC 17024. Inspector certification qualifies you to make in-service fitness decisions: API 510 for vessels, API 570 for piping, API 653 for tanks, each demanding documented inspection experience no classroom shortens. Statutory licensing sits above both and is India-specific — the Atomic Energy Regulatory Board authorises industrial radiography personnel and sources through e-LORA, and the Indian Boiler Regulations govern who inspects a boiler under statute. A foreign certificate satisfies none of the statutory layer. For candidates targeting Aramco or ADNOC contractor pools, the ISO 9712 dual stamp is what the contractor pre-qualification form asks for.",
      "source": "ASNT SNT-TC-1A, 2020 edition; ISO 9712:2021, Non-destructive testing — Qualification and certification of NDT personnel; AERB Safety Code AERB/SC/IR-1 for industrial radiography, administered through the Atomic Energy Regulatory Board's e-LORA licensing system; API Individual Certification Programs documentation for API 510, 570 and 653.",
      "table": {
          "caption": "Which qualification an Indian assignment actually requires",
          "columns": [
              "Where you intend to work",
              "Method certification named",
              "Inspector certification expected",
              "India-specific statutory gate",
              "Who issues it"
          ],
          "rows": [
              [
                  "Reliance, IOCL, BPCL, HPCL in-service inspection",
                  "ASNT Level II under the employer's written practice; ISO 9712 accepted",
                  "API 510, 570 or 653 for the inspector role",
                  "AERB authorisation where the scope includes radiography",
                  "Employer for ASNT, API for ICP, AERB for radiography"
              ],
              [
                  "NTPC and thermal power boiler inspection",
                  "ASNT or ISO 9712 Level II, ultrasonics weighted",
                  "API 510 for pressure parts outside statutory boiler scope",
                  "Indian Boiler Regulations inspector authorisation",
                  "State boiler directorate under IBR"
              ],
              [
                  "Aramco, ADNOC and QatarEnergy contractor pools",
                  "ISO 9712 Level II, third-party issued",
                  "API ICP where the role is inspector rather than technician",
                  "None in India; client-administered written and practical test on arrival",
                  "Certification body accredited to ISO/IEC 17024"
              ],
              [
                  "Industrial radiography anywhere in India",
                  "ASNT or ISO 9712 RT Level II",
                  "Not applicable",
                  "Radiographer and Radiation Safety Officer approval",
                  "Atomic Energy Regulatory Board, through e-LORA"
              ],
              [
                  "Aerospace: HAL, ISRO, Boeing India supplier network",
                  "NAS 410 or EN 4179 employer certification, ASNT-aligned",
                  "Not applicable",
                  "Prime contractor approval of the NDT programme itself",
                  "Employer's responsible NDT Level 3, approved by the prime"
              ],
              [
                  "European or UK EPC packages executed from India",
                  "PCN or ISO 9712",
                  "CSWIP 3.1 where the role is welding inspection",
                  "None",
                  "Certification body; TWI Certification for CSWIP"
              ]
          ],
          "note": "AERB approval is a licence to possess and expose a source, not a competence certificate, and no ASNT or ISO 9712 certificate substitutes for it. Companies discover this when a mobilised crew is stopped at the gate."
      },
      "facets": [
          {
              "q": "Does an ASNT certificate earned at one Indian employer transfer to the next?",
              "a": "No. SNT-TC-1A certification is issued by the employer against its own written practice and ends at resignation. The new employer re-examines and re-certifies. Training records and documented experience hours do carry across and count toward eligibility, so keep the originals. ISO 9712 is the portable alternative, which is why inspectors planning to move between contractors hold both."
          },
          {
              "q": "What experience does API 510 or API 570 require before an Indian candidate can apply?",
              "a": "One year of documented vessel or piping inspection with an engineering or technology degree, two years with a two-year technical diploma, three years with a higher secondary certificate, five years with no formal education. The experience must be inspection work performed or supervised — years spent in maintenance, operations or rotating equipment count for nothing on the application."
          },
          {
              "q": "Which certification do Aramco and ADNOC contractor pre-qualification forms name?",
              "a": "Third-party certification — ISO 9712 or equivalent — for NDT technicians, and API ICP for inspector roles, followed by the client's own screening. Saudi Aramco and ADNOC each run contractor approval processes that add a written and practical test administered by or for the client, so the certificate gets a candidate onto the list rather than onto the site."
          },
          {
              "q": "How is ISO 9712 certification renewed?",
              "a": "Five years of validity, then renewal on evidence of continued work in the method without significant interruption plus a current vision examination. At the end of the second five-year period, recertification requires a practical examination for Levels 1 and 2. Level 3 recertification runs through a structured credit system or examination. Missing the renewal date restarts the process."
          },
          {
              "q": "Do HAL, ISRO and Boeing's Indian suppliers accept ASNT certification?",
              "a": "Aerospace runs on NAS 410 in the United States and EN 4179 in Europe, both employer-based schemes requiring a qualified NDT Level 3 responsible for the programme and prime-contractor approval of that programme. An ASNT certificate maps closely and is widely used as the underlying qualification, and on its own it does not satisfy a prime's supplier audit."
          },
          {
              "q": "What does an ISO 17020 or ISO 9001 audit ask an Indian inspection company for?",
              "a": "The written practice or certification scheme document, personnel qualification records with training hours, experience hours, graded examinations and vision results, equipment calibration certificates traceable to national standards, approved procedures under revision control, and evidence that the revision applied on the inspection date is retrievable. Impartiality and confidentiality arrangements are examined separately under ISO 17020."
          }
      ]
  },

  "/ndt-training-sharjah": {
      "answer": "Sharjah fabrication yards follow the client's specification, not a UAE national scheme. US-affiliated owners name ASNT SNT-TC-1A, UK and Norwegian operators name PCN or CSWIP 3.1, and ISO 9712 sits underneath both as the third-party route. Industrial radiography additionally requires a Federal Authority for Nuclear Regulation licence held by the company and its registered radiographers.",
      "expansion": "Certificates expire on schedules that do not line up, and a Hamriyah fabricator discovers the mismatch at a client audit rather than in advance. ISO 9712 certification runs five years, renews on evidence of continued work and a current vision test, and requires a recertification examination at ten. PCN and CSWIP follow the same five-and-ten rhythm through their certification bodies. ASNT SNT-TC-1A is employer-based, so the interval lives in your own written practice and the certificate ends when the technician leaves. API 510, 570 and 653 run a separate three-year cycle with an examination at six. Radiography adds a regulatory clock that nothing in the training world controls: FANR licences the practice and registers the radiographers, and a lapse stops the source, not just the paperwork. One recertification calendar covering all four cycles is what keeps a Sharjah yard bid-eligible.",
      "source": "ISO 9712:2021, Non-destructive testing — Qualification and certification of NDT personnel; ASNT SNT-TC-1A, 2020 edition; CSWIP requirements document WI-6-92 for welding inspector certification, TWI Certification Ltd; UAE Federal Authority for Nuclear Regulation (FANR) regulations governing the use of radiation sources in industrial radiography.",
      "table": {
          "caption": "Certification clocks a Sharjah inspection employer has to track",
          "columns": [
              "Scheme",
              "Who certifies",
              "Validity",
              "What renewal requires",
              "Where it is named in Sharjah specifications"
          ],
          "rows": [
              [
                  "ASNT SNT-TC-1A Level I and II",
                  "Your company, against its written practice, administered by a Level III",
                  "Interval set in the written practice; SNT-TC-1A recommends 5 years",
                  "Re-examination or documented continued competence, plus annual vision test",
                  "US-affiliated owners and ADNOC-linked EPC packages"
              ],
              [
                  "ASNT NDT Level III",
                  "ASNT central examination",
                  "ASNT's own recertification cycle",
                  "Recertification credits or examination, plus annual vision test",
                  "Procedure approval and written-practice sign-off"
              ],
              [
                  "ISO 9712 Level 1, 2 and 3",
                  "Certification body accredited to ISO/IEC 17024",
                  "5 years",
                  "Vision test and evidence of continuous work; practical recertification at 10 years",
                  "Bureau Veritas and TUV Rheinland routes in Sharjah"
              ],
              [
                  "PCN",
                  "BINDT-appointed certification body",
                  "5 years",
                  "Vision test and evidence of continuous work; recertification at 10 years",
                  "UK operator and North Sea-linked scopes"
              ],
              [
                  "CSWIP 3.1 Welding Inspector",
                  "TWI Certification Ltd",
                  "5 years",
                  "Evidence of continued activity; re-examination at 10 years",
                  "Welding inspector hiring across Hamriyah fabrication yards"
              ],
              [
                  "API 510, 570 and 653",
                  "American Petroleum Institute ICP",
                  "3 years",
                  "Continued-work evidence at 3 years; examination at 6 years",
                  "Owner and third-party in-service inspection roles"
              ],
              [
                  "FANR radiography authorisation",
                  "UAE Federal Authority for Nuclear Regulation",
                  "Term stated on the licence",
                  "Company licence renewal plus trained, registered radiation workers",
                  "Every UAE site using gamma or X-ray sources"
              ]
          ],
          "note": "Only the FANR authorisation stops work the day it lapses. The others stop bids instead — which a fabrication yard feels one tender later, when a pre-qualification screen rejects the personnel matrix."
      },
      "facets": [
          {
              "q": "Which scheme does a Hamriyah yard need if it bids to both US and UK owners?",
              "a": "Both models. Maintain an ASNT SNT-TC-1A written practice with an in-house or outsourced Level III for US-affiliated owners and ADNOC-linked packages, and hold ISO 9712 or PCN certified technicians for UK and Norwegian scopes. CSWIP 3.1 covers the welding inspector role either way. Running one properly and improvising the other is what loses tenders at pre-qualification."
          },
          {
              "q": "Does a UAE employer's ASNT certification satisfy a European EPC audit?",
              "a": "No, where the specification names third-party certification. The auditor's objection is structural rather than technical: your company examined, certified and employs the same person. ISO 9712 or PCN places an accredited certification body between the two. Where the specification names SNT-TC-1A, employer certification is fully acceptable and the written practice becomes the document under examination."
          },
          {
              "q": "What does FANR require before a contractor can shoot radiography in Sharjah?",
              "a": "A facility or practice licence issued by the Federal Authority for Nuclear Regulation covering the source, its storage, transport and use, plus registered radiation workers, a designated radiation safety officer, dosimetry, and approved emergency arrangements. The RT Level II certificate sits inside that licence as evidence of technical competence and replaces no part of it."
          },
          {
              "q": "Can practical training hours be logged at our own yard instead of a training centre?",
              "a": "Yes, and on-site delivery is the stronger arrangement for a group. The practical block uses your equipment, your specimens and the weld configurations your crews actually examine, and the hours are logged against the training and experience requirements in your written practice. Level III supervision has to be present or documented for those hours to survive an audit."
          },
          {
              "q": "How does a CSWIP 3.1 welding inspector move into an ASNT UT Level II?",
              "a": "As a fresh qualification in a different discipline. CSWIP 3.1 covers visual weld inspection and welding documentation; ultrasonics is a separate method with its own training hours, documented experience, and general, specific and practical examinations under the employer's written practice. The welding knowledge sharpens interpretation of what the ultrasonic data means, and it shortens no requirement."
          },
          {
              "q": "What personnel records does a client audit ask a Sharjah contractor for?",
              "a": "The written practice or certification scheme document, each technician's certificate with its expiry date, training hours and content, documented experience in the method, graded examination papers, a current vision test, and the Level III's credentials. Where radiography is in scope, the FANR licence, individual radiation worker registrations and dosimetry records for the period are requested alongside."
          }
      ]
  },

  "/glossary/ultrasonic-testing": {
      "answer": "Specify UT when the flaw is buried and orientation is known well enough to aim a beam at it. Straight beam finds laminations and remaining wall; angle-beam shear finds weld flaws a straight beam never reaches. UT is blind to planar flaws lying parallel to the beam, so ASME Section V Article 4 fixes calibration on a reference reflector rather than promising a flaw size.",
      "expansion": "In US pressure work the stack runs: ASME BPVC Section V Article 4 sets how a weld is ultrasonically examined and Article 5 sets thickness measurement, while the construction code — ASME Section VIII Division 1, ASME B31.3, or API 1104 — sets what is acceptable in the result. API 570 and API 653 then convert the thickness data into corrosion rate and remaining life, which is where a UT number actually reaches a decision. Sensitivity is not a property of the instrument. It is set on a calibration block against a reference reflector — a side-drilled hole, a flat-bottom hole, a notch — and then transfer-corrected for the difference between block surface and component surface. Velocity is the other lever: it changes with material and with temperature, so a reading taken hot and calibrated cold carries an error larger than the decimal places on the display. Personnel qualify under ASNT SNT-TC-1A or ISO 9712.",
      "source": "ASME Boiler and Pressure Vessel Code, Section V, Article 4 — Ultrasonic Examination Methods for Welds (2023 Edition); Article 5 — Ultrasonic Examination Methods for Materials. Personnel qualification: ASNT SNT-TC-1A (2020) and ISO 9712:2021.",
      "table": {
          "caption": "Ultrasonic technique selected by flaw type — what each resolves and what it will not",
          "columns": [
              "Technique",
              "Beam and setup",
              "Detects well",
              "Will not detect",
              "Where specified"
          ],
          "rows": [
              [
                  "Straight beam (0° longitudinal)",
                  "Normal incidence, single or dual element",
                  "Laminations, remaining wall, plate inclusions, bond-line disbond",
                  "Weld flaws lying on a bevel face; anything inside the dead zone",
                  "ASME V Art. 5; ASTM A435 and ASTM A578 for plate"
              ],
              [
                  "Angle-beam shear (45/60/70°)",
                  "Wedge-mounted, half-skip and full-skip paths",
                  "Fusion-face flaws, root and toe cracking in welds",
                  "Flaws lying parallel to the beam path; sizing beyond amplitude comparison",
                  "ASME V Art. 4; AWS D1.1; ISO 17640"
              ],
              [
                  "Phased array (PAUT)",
                  "Multi-element aperture, electronic sweep and focus",
                  "The same weld flaws with sectorial coverage and encoded position",
                  "Anything outside the swept aperture; coarse austenitic weld metal",
                  "ASME V Art. 4; ISO 13588"
              ],
              [
                  "TOFD",
                  "Transmit-receive pair reading diffraction, not reflection",
                  "Through-wall height of embedded flaws and crack growth between outages",
                  "Near-surface lateral-wave dead zone and the back-wall dead zone",
                  "ASME V Art. 4; ISO 10863; ISO 15626 for acceptance"
              ],
              [
                  "Thickness gauging",
                  "Dual-element or delay-line probe in corrosion mode",
                  "Remaining wall under coating and general metal loss at fixed CMLs",
                  "Isolated pitting falling between grid points; flaw discrimination",
                  "ASME V Art. 5; API 570; API 653"
              ],
              [
                  "Immersion and automated UT",
                  "Water-path coupling with encoded scanning",
                  "Repeatable full-body coverage on machined parts and pipeline girth welds",
                  "Complex geometry that breaks the water column or the encoder path",
                  "ASTM E2375; API 1104 automated UT provisions"
              ]
          ],
          "note": "Acceptance criteria are not in these examination standards. ASME Section VIII Division 1, ASME B31.3, AWS D1.1 and API 1104 each publish their own, so identical A-scan data passes under one construction code and fails under another."
      },
      "facets": [
          {
              "q": "Does UT or RT get specified for a thick-section pressure vessel weld in the US?",
              "a": "Both, for different flaw families. ASME Section VIII Division 1 permits ultrasonic examination in place of radiography for welds above defined thicknesses, and Section V Article 4 governs how that UT is performed. RT images volumetric flaws and leaves a re-readable record; UT catches the planar lack of fusion that RT misses on a bevel face. Critical thick-section welds get both."
          },
          {
              "q": "Why does the same weld measure a different thickness on two shifts?",
              "a": "Four causes account for nearly all of it: couplant film thickness, surface condition and scale, probe pressure on a dual-element probe, and calibration against the wrong velocity. Temperature adds a fifth, since sound velocity in steel falls as the metal heats. A procedure that fixes all five, and requires calibration re-verification during the shift rather than only at its start, removes the spread."
          },
          {
              "q": "What does UT sensitivity actually mean on an inspection report?",
              "a": "It means the reference reflector the instrument was calibrated against, not a flaw size. A report that names the side-drilled hole or notch, the depth it sat at, the gain set on it, and the transfer correction applied states exactly what the examination could resolve. A report omitting them states nothing. ASME Section V Article 4 and ISO 17640 both build sensitivity outward from the reference block."
          },
          {
              "q": "Which materials defeat ultrasonic testing?",
              "a": "Coarse-grained and anisotropic structures. Austenitic stainless weld metal, nickel alloy welds, centrifugally cast stainless and some heavy castings scatter and steer the beam until the noise floor swallows the signal. Low-frequency, dual-matrix or transmit-receive longitudinal probes recover part of it. Where they do not, radiography or a surface method carries the examination instead."
          },
          {
              "q": "Do UT thickness readings satisfy API 570 and API 653 on their own?",
              "a": "Only with the surrounding record. API 570 and API 653 use thickness data to compute corrosion rate and remaining life, which requires the same condition monitoring location measured the same way at each interval, instrument calibration traceable, and the inspector qualified. A number without the location, the datum and the calibration history cannot support a next-inspection interval."
          },
          {
              "q": "How does an inspector qualify to run UT in the United States?",
              "a": "Employer-based certification under ASNT SNT-TC-1A, written into the employer's written practice, is the dominant US route: the employer trains, examines and certifies to Level I, II or III. ASNT's own Level III examination provides third-party assessment on top of it. Europe and much of Asia run ISO 9712 central certification instead, which is not automatically interchangeable."
          }
      ]
  },

  "/glossary/eddy-current-testing": {
      "answer": "Choose eddy current when the flaw is at or near the surface, the material conducts, and couplant is unavailable. Penetration falls exponentially with depth, so the depth of interest sets frequency before anything else is decided. On carbon steel, permeability variation swamps flaw signals unless the material is magnetically saturated — which is why ASME Section V Article 8 is written around tubular products.",
      "expansion": "Standard depth of penetration is 1/√(πfμσ): raise frequency, conductivity or permeability and the currents crowd into a thinner skin. That single relation drives every setup decision. High frequency resolves fine surface cracking and loses depth; low frequency reaches further into the wall and blurs small indications. Phase, not amplitude, carries depth information, which is why the instrument is nulled on sound material and phase-rotated on a reference standard with machined artificial defects until lift-off runs along a known axis and flaw signals depart from it. In US heat-exchanger work the stack is ASME Section V Article 8 for the examination, ASTM E2884 for installed tubing, ASTM E309 where magnetic saturation is required on steel tubes, and ASTM E571 for nickel alloys. ISO 15549 states general principles and the ISO 15548 series covers instrument and probe verification. Acceptance — plug or leave — belongs to the owner's programme, not to the examination standard.",
      "source": "ASME Boiler and Pressure Vessel Code, Section V, Article 8 — Eddy Current Examination (2023 Edition); ASTM E2884 Standard Guide for Eddy Current Testing of Installed Heat Exchanger Tubing; ISO 15549 Non-destructive testing — Eddy current testing — General principles.",
      "table": {
          "caption": "Eddy current probe selected by geometry — what it resolves, what it is blind to, and where it is specified",
          "columns": [
              "Probe or technique",
              "Geometry it fits",
              "Resolves",
              "Blind to",
              "Where specified"
          ],
          "rows": [
              [
                  "Bobbin coil, differential and absolute",
                  "Heat-exchanger and condenser tubing with ID access",
                  "Volumetric wall loss, pitting and general thinning at full production speed",
                  "Circumferential cracking; flaws under support plates and in the U-bend without extra channels",
                  "ASME V Art. 8; ASTM E2884"
              ],
              [
                  "Rotating pancake or motorised probe",
                  "The same tubing, as targeted follow-up on flagged tubes",
                  "Crack orientation and circumferential defects the bobbin cannot resolve",
                  "Nothing the bobbin catches at speed — inspection rate drops by an order",
                  "ASME V Art. 8; ASTM E2884"
              ],
              [
                  "Eddy current array (ECA)",
                  "Welds, plate, tube sheets and complex surfaces",
                  "Surface cracking with encoded C-scan coverage in a single pass",
                  "Flaws beyond the standard depth of penetration at the frequency chosen",
                  "ASTM E3052; ISO 20339; ISO 17643 for welds"
              ],
              [
                  "Surface or pencil coil",
                  "Local weld toes, machined radii, spot checks",
                  "Fine surface-breaking cracks, weld toe cracking through paint",
                  "Anything requiring area coverage — it inspects only where it is placed",
                  "ISO 17643; ASTM E3052"
              ],
              [
                  "Encircling coil",
                  "Bar, wire and tube moving through a production line",
                  "Continuous in-line flaw and dimensional sorting at line speed",
                  "Circumferential location of the flaw; end effects at bar and tube ends",
                  "ASTM E426; ASTM E309"
              ],
              [
                  "Bolt-hole rotating probe",
                  "Fastener holes in aerospace structure",
                  "Cracks radiating from the hole bore, resolved layer by layer",
                  "Cracks in lower layers without disassembly or low-frequency ET",
                  "OEM NDT manual; NAS 410 personnel qualification"
              ],
              [
                  "Magnetic saturation ET",
                  "Ferromagnetic and duplex tubing",
                  "Wall loss once permeability noise is suppressed by a saturating DC field",
                  "Flaws still masked by residual permeability variation; deep ID defects",
                  "ASTM E309"
              ]
          ],
          "note": "Eddy current is a near-surface method in every configuration listed. Where the flaw sits deep in the wall of a ferromagnetic component, magnetic flux leakage, remote-field testing or ultrasonics carry the examination instead."
      },
      "facets": [
          {
              "q": "Which eddy current probe should a US refinery specify for heat-exchanger tubes?",
              "a": "Bobbin first, rotating probe or array second. A bobbin differential coil covers a full bundle at production speed and finds volumetric wall loss and pitting. It reads circumferential cracking poorly, so the accepted programme runs bobbin across the whole bundle and follows up flagged tubes with a rotating pancake or array probe. ASTM E2884 describes both stages for installed tubing."
          },
          {
              "q": "Can eddy current inspect carbon steel piping?",
              "a": "Not usefully in the plain configuration. Permeability variation in ferromagnetic steel produces impedance swings larger than most flaw signals. Magnetic saturation probes suppress it on tubing, and ASTM E309 covers that case. For plant piping the working answers are magnetic flux leakage for wall loss, pulsed eddy current through insulation, and ACFM or magnetic particle for surface cracking."
          },
          {
              "q": "What is standard depth of penetration and why does it decide frequency?",
              "a": "It is the depth at which eddy current density falls to about 37 percent of its surface value, given by 1/√(πfμσ). Frequency is the only term the inspector controls. Doubling frequency shrinks the skin by about 30 percent and sharpens small surface cracks; halving it reaches deeper and blurs them. Frequency selection is therefore a statement about the depth of interest."
          },
          {
              "q": "Does coating have to be stripped before eddy current examination?",
              "a": "No, when the coating is non-conductive, reasonably uniform, and accounted for during setup. It adds lift-off, which phase rotation on the reference standard separates from flaw signals. Thick or irregular coatings cost sensitivity because the coil sits further from the currents it is trying to induce. Past that point stripping is the honest option, not a preference."
          },
          {
              "q": "How is eddy current data on a tube bundle turned into a plug decision?",
              "a": "By the owner's plugging criterion, not by the examination standard. ASME Section V Article 8 and ASTM E2884 say how to acquire and calibrate the data. The percentage through-wall at which a tube gets plugged comes from the exchanger's design margin, the service and the owner's integrity programme. Nuclear steam generator tubing is the exception, where ASME Section XI and plant technical specifications set it."
          },
          {
              "q": "What separates lift-off from a real flaw on the impedance plane?",
              "a": "The angle. On a reference standard with machined artificial defects, lift-off traces a repeatable direction and flaw signals depart from it at a phase angle that shifts with depth. Setup rotates the display so lift-off runs along a known axis. Phasing it out too aggressively takes shallow flaw signals with it, which is the most common way an examination quietly under-reports."
          }
      ]
  },

  "/glossary/radiographic-testing": {
      "answer": "Radiography earns its place when the flaw is volumetric and the owner needs a re-readable permanent image. Source selection comes first: X-ray tube for thin section and best contrast, Ir-192 where power and access are unavailable, Co-60 for heavy wall. Tight planar flaws lying across the beam escape it, which is why ultrasonics is specified alongside radiography on critical thick-section welds rather than instead of it.",
      "expansion": "US radiography sits on two separate legal stacks and one technical one. Radiation safety runs through NRC 10 CFR Part 34 for industrial radiography licences, equipment and radiographer certification, and 10 CFR Part 20 for dose limits and area control — with Agreement States enforcing equivalent rules of their own. The technical stack is ASME Boiler and Pressure Vessel Code Section V Article 2, which sets technique, image quality indicator selection and placement, and density or grey-level requirements. Acceptance is somewhere else again: ASME Section VIII Division 1, ASME B31.3, AWS D1.1 and API 1104 each publish their own criteria, so one radiograph passes under one construction code and fails under another. The IQI is the load-bearing element. It is placed on the source side wherever access permits, and if its designated hole or wire is not visible the image has failed to demonstrate its own sensitivity — no interpretation drawn from it stands.",
      "source": "ASME Boiler and Pressure Vessel Code, Section V, Article 2 — Radiographic Examination (2023 Edition); IQI design per ASTM E1025 (hole type) and ASTM E747 (wire type). US radiation safety: 10 CFR Part 34 and 10 CFR Part 20 (NRC), or the equivalent Agreement State regulation.",
      "table": {
          "caption": "Radiation source selected by section thickness and access — decay, energy, and what rules each one out",
          "columns": [
              "Source",
              "Half-life",
              "Photon energy character",
              "Chosen when",
              "Constraint that rules it out"
          ],
          "rows": [
              [
                  "X-ray tube",
                  "Not applicable — switches off",
                  "Continuous bremsstrahlung spectrum, kilovoltage set by the operator",
                  "Thin to medium section, shop conditions, best contrast and image quality",
                  "Needs power and cable access; head size defeats confined geometry"
              ],
              [
                  "Ir-192",
                  "73.8 days",
                  "Gamma lines centred near 0.3–0.6 MeV",
                  "Field girth welds, medium to heavy wall, no power at the shot",
                  "Lower contrast than X-ray on thin section; exposures lengthen as the source decays"
              ],
              [
                  "Co-60",
                  "5.27 years",
                  "Two gamma lines at 1.17 and 1.33 MeV",
                  "Heavy wall where Ir-192 cannot penetrate in a workable exposure",
                  "Large shielding mass and exclusion boundary; poor contrast on thin section"
              ],
              [
                  "Se-75",
                  "120 days",
                  "Softer gamma spectrum than Ir-192",
                  "Thin to medium steel where a smaller exclusion zone is wanted",
                  "Insufficient penetration for heavy wall"
              ],
              [
                  "Yb-169",
                  "32 days",
                  "Low-energy gamma, close to X-ray character",
                  "Thin-wall small-bore pipe and light alloys",
                  "Very limited penetration and a short useful source life"
              ],
              [
                  "Linear accelerator",
                  "Not applicable — switches off",
                  "Megavoltage bremsstrahlung",
                  "Very heavy castings and sections beyond isotope range",
                  "Fixed installation; capital cost and permanent shielding"
              ]
          ],
          "note": "Half-life governs the exposure schedule, not the image. A source late in its useful life produces the same radiograph with a longer exposure, until that exposure exceeds what the site controls allow — which is when the source is replaced."
      },
      "facets": [
          {
              "q": "Why does the same radiograph pass one code and fail another?",
              "a": "Because the examination standard and the acceptance standard are different documents. ASME Section V Article 2 says how to make the radiograph — technique, IQI, density. ASME Section VIII Division 1, ASME B31.3, AWS D1.1 and API 1104 each set what may remain in it. API 1104 in particular judges pipeline girth welds against criteria written for that service, not for pressure vessels."
          },
          {
              "q": "What does an invisible IQI hole actually mean?",
              "a": "That the radiograph is void, not marginal. The image quality indicator is the only evidence in the frame that the required sensitivity was achieved. If the designated hole or wire cannot be seen, the technique did not deliver, and every call made from that image — accept or reject — is unsupported. The shot is retaken with corrected technique, not argued."
          },
          {
              "q": "Does radiography or ultrasonics find lack of fusion in a bevel weld?",
              "a": "Ultrasonics, by a wide margin. Lack of fusion on a bevel face presents a fraction of a millimetre of missing material along the radiation path and produces almost no density change. Angle-beam shear waves strike that same face near normal incidence and reflect strongly. This is why ASME Section VIII Division 1 allows ultrasonic examination in place of radiography on thick sections."
          },
          {
              "q": "Who is legally allowed to shoot industrial radiography in the United States?",
              "a": "A radiographer certified under a programme meeting NRC requirements in 10 CFR Part 34, working for an entity holding a specific licence for industrial radiography, or the Agreement State equivalent. Certifying entities assess against ANSI/ASNT CP-189. Method-level NDT qualification under SNT-TC-1A is a separate matter and does not by itself confer legal authority to operate a source."
          },
          {
              "q": "Which is right for a field pipeline girth weld — Ir-192 or a crawler X-ray?",
              "a": "Crawler where the line is large enough to take it and the schedule rewards a panoramic single-wall shot: one exposure images the whole circumference at good contrast. Ir-192 double-wall where diameter, terrain or the absence of power rules the crawler out. API 1104 accepts both and applies its own acceptance criteria to the resulting image."
          },
          {
              "q": "How long must radiographs be retained?",
              "a": "By the construction code and the owner's contract, not by a universal rule. ASME work retains examination records inside the manufacturer's data report package; pipeline and plant owners set retention in their integrity programme. The practical answer is the life of the asset, because a girth weld questioned twenty years on is defended with the original image and the technique sheet that produced it."
          }
      ]
  },

  "/glossary/half-value-layer-hvl": {
      "answer": "HVL is the unit shielding gets designed in, and it is valid only for the energy and material it was quoted for. Ir-192 and Co-60 differ by more than a factor of two in lead, so a barrier sized on the wrong isotope is wrong, not conservative. Convert by counting halvings: n = log₂(I₀/I), and one tenth-value layer equals 3.3 half-value layers.",
      "expansion": "Two properties make HVL the working unit rather than a curiosity. Attenuation is exponential, so halvings stack multiplicatively: ten HVLs leave about one part in a thousand and twenty leave one in a million. And because it is defined by ratio, it converts cleanly to the tenth-value layer used in barrier tables — one TVL is 3.32 HVL, because log₂10 is 3.32. The trap is that HVL is not a property of the shield alone. It is a property of the shield and the beam together. A polychromatic X-ray beam hardens as it passes through absorber, so the first HVL is thinner than the second, and a first-HVL figure applied to a thick barrier under-sizes it. Sealed-source gamma beams sit close enough to monoenergetic that a single figure holds throughout. In US industrial radiography the number HVL has to satisfy comes from 10 CFR Part 20, which caps dose in unrestricted areas at 2 mrem in any one hour.",
      "source": "IAEA Safety Standards Series No. SSG-11, Radiation Safety in Industrial Radiography (2011); NCRP Report No. 49 for barrier calculation method; dose limits and area classification from 10 CFR Part 20 (NRC) or the equivalent Agreement State regulation.",
      "table": {
          "caption": "Barrier thickness by required reduction — Ir-192 in three shielding materials, derived from its half-value layers",
          "columns": [
              "Reduction required",
              "Half-value layers",
              "Lead (HVL 4.8 mm)",
              "Steel (HVL 13 mm)",
              "Concrete (HVL 44 mm)"
          ],
          "rows": [
              [
                  "1/2",
                  "1",
                  "4.8 mm",
                  "13 mm",
                  "44 mm"
              ],
              [
                  "1/10 — one tenth-value layer",
                  "3.3",
                  "16 mm",
                  "43 mm",
                  "145 mm"
              ],
              [
                  "1/100",
                  "6.6",
                  "32 mm",
                  "86 mm",
                  "290 mm"
              ],
              [
                  "1/1,000",
                  "10",
                  "48 mm",
                  "130 mm",
                  "440 mm"
              ],
              [
                  "1/10,000",
                  "13.3",
                  "64 mm",
                  "173 mm",
                  "585 mm"
              ],
              [
                  "1/100,000",
                  "16.6",
                  "80 mm",
                  "216 mm",
                  "730 mm"
              ],
              [
                  "1/1,000,000",
                  "19.9",
                  "96 mm",
                  "259 mm",
                  "876 mm"
              ]
          ],
          "note": "These are narrow-beam figures. A real barrier also sees scattered radiation, so broad-beam buildup adds thickness beyond the arithmetic — an HVL count is a floor, not a finished design. Co-60 needs roughly 2.6 times the lead of Ir-192 for the same reduction. Take every HVL from the reference that applies to the source and material actually in use."
      },
      "facets": [
          {
              "q": "How many half-value layers does a radiography barrier need?",
              "a": "Count backwards from the dose limit. 10 CFR Part 20 caps unrestricted-area dose at 2 mrem in any one hour, so divide the unshielded dose rate at the boundary by that limit, take log base 2 of the ratio, and that is the HVL count. Multiply by the HVL for the source and material in use, then add margin for scatter buildup."
          },
          {
              "q": "Why is half-value layer different for X-rays than for a gamma source?",
              "a": "An X-ray tube emits a continuous spectrum. Low-energy photons are absorbed first, so the beam emerging from the shield is harder than the one that entered and the second HVL exceeds the first. A sealed gamma source emits discrete lines close enough to monoenergetic that one HVL figure holds throughout the shield. First-HVL figures under-size thick X-ray barriers."
          },
          {
              "q": "How does half-value layer relate to tenth-value layer?",
              "a": "One TVL equals 3.32 HVL, because reducing intensity to a tenth takes log₂10 halvings. Barrier tables publish TVL because industrial radiography barriers routinely span four or five orders of magnitude, and counting in TVLs keeps the numbers small. The two are interchangeable inside the same calculation as long as source energy and shield material stay fixed."
          },
          {
              "q": "Does distance or shielding cut dose faster on a radiography site?",
              "a": "Distance, and it costs nothing. Intensity falls as the inverse square, so doubling the distance quarters the dose — equivalent to two half-value layers of shielding with no material at all. Site controls exploit this first by setting a barrier distance, then add collimation and shielding where geometry, adjacent work or the property line stops the distance from growing."
          },
          {
              "q": "Can existing plant steel be counted as shielding?",
              "a": "Yes, when the geometry is documented and the result surveyed. A vessel wall, pipe rack or concrete deck between source and boundary attenuates by its own HVL count. What makes it legitimate is a survey confirming the calculated dose rate at the boundary before the exposure, not the calculation alone. Scatter around the obstruction routinely dominates what passes straight through it."
          },
          {
              "q": "Which HVL figure applies to a Se-75 source?",
              "a": "Its own, and it is substantially thinner than Ir-192 in every material because the Se-75 spectrum is softer. Reading an Ir-192 table for a Se-75 shot over-sizes the barrier, which is safe but wasteful; reading a Se-75 table for an Ir-192 shot under-sizes it, which is not. Take the figure from the source certificate or the applicable IAEA or NCRP table."
          }
      ]
  },

  "/glossary/digital-radiography-dr": {
      "answer": "DR changes the record, the throughput and the audit exposure — not the physics. It finds the same volumetric flaws as film and misses the same tight planar ones. The decision that matters is qualification: a digital detector's basic spatial resolution and signal-to-noise ratio must be measured and re-verified, and the processing applied to an image must be recorded, because a digital image can be adjusted in ways film cannot.",
      "expansion": "Film density substitutes for two things at once: it proves the exposure landed in the usable range and it fixes the image permanently. Digital splits those jobs. Basic spatial resolution, measured with a duplex wire image quality indicator under ASTM E2002, replaces geometric unsharpness as the resolution statement. Normalised signal-to-noise ratio replaces density as the exposure-adequacy statement. Detector qualification and long-term stability run under ASTM E2597 and ASTM E2737, with ASTM E2698 covering the practice of examining with a digital detector array and ASTM E2736 the general guidance. ISO 17636-2 is the weld equivalent outside the US. Archiving is the third job film did for free: DICONDE, standardised in ASTM E2339, keeps the image bound to the technique, the detector calibration and the bad-pixel map that produced it. An unprocessed original retained alongside the reviewed image is what makes a DR result defensible years later.",
      "source": "ASME Boiler and Pressure Vessel Code, Section V, Article 2 with its digital radiography Mandatory Appendix (2023 Edition); ASTM E2698 Standard Practice for Radiographic Examination Using Digital Detector Arrays; ASTM E2002 for basic spatial resolution; ASTM E2339 for DICONDE archiving; ISO 17636-2 for welds.",
      "table": {
          "caption": "Radiographic imaging technologies — how the image forms and what qualifies it",
          "columns": [
              "Technology",
              "Image formation",
              "Resolution limit set by",
              "Exposure-adequacy metric",
              "Qualification standard"
          ],
          "rows": [
              [
                  "Film (silver halide)",
                  "Latent image developed in chemistry",
                  "Film grain plus geometric unsharpness",
                  "Optical density read on a densitometer",
                  "ASTM E1815 film system classification; ASME V Art. 2"
              ],
              [
                  "Computed radiography (CR)",
                  "Photostimulable phosphor plate read out by laser scanner",
                  "Laser spot size, scan pitch and phosphor light scatter",
                  "Normalised signal-to-noise ratio",
                  "ASTM E2446 classification; ASTM E2445 performance and stability"
              ],
              [
                  "DR indirect (a-Si with scintillator)",
                  "Scintillator converts X-rays to light, photodiode array reads it",
                  "Pixel pitch plus light spread inside the scintillator",
                  "Normalised signal-to-noise ratio",
                  "ASTM E2597; ASTM E2737; ASTM E2698"
              ],
              [
                  "DR direct (a-Se)",
                  "Photoconductor converts X-rays straight to charge",
                  "Pixel pitch, with no light-spread penalty",
                  "Normalised signal-to-noise ratio",
                  "ASTM E2597; ASTM E2737; ASTM E2698"
              ],
              [
                  "Linear diode array",
                  "A single detector line, with part or source translated past it",
                  "Line pitch and scan speed",
                  "Normalised signal-to-noise ratio",
                  "ASTM E2698; ASTM E2736"
              ],
              [
                  "Real-time radioscopy",
                  "Image intensifier or panel displayed live",
                  "Detector response plus frame integration",
                  "Contrast sensitivity demonstrated on an IQI in the live image",
                  "ASTM E1000 guide for radioscopy"
              ]
          ],
          "note": "Digital does not change what radiation does inside the part. Every row here finds volumetric flaws and misses tight planar flaws lying across the beam. What the rows differ on is throughput, the nature of the record, and how the image proves its own adequacy."
      },
      "facets": [
          {
              "q": "Is digital radiography accepted in place of film under ASME?",
              "a": "Yes, through the digital appendices ASME added to Section V Article 2, and with conditions film never carried: demonstrated basic spatial resolution, a signal-to-noise requirement, detector calibration including a current bad-pixel map, and constrained processing. Where a job specification predates those provisions and names film, substitution needs written agreement with the owner rather than an inspector's judgement."
          },
          {
              "q": "What replaces film density as proof a DR exposure was adequate?",
              "a": "Normalised signal-to-noise ratio, measured in the image itself. Film density proved the exposure sat in the range where the eye can discriminate; a digital detector responds linearly across a far wider exposure range, so density has no equivalent. SNR normalised to basic spatial resolution states whether enough photons reached the detector for the required contrast sensitivity."
          },
          {
              "q": "How is DR resolution verified rather than assumed?",
              "a": "With a duplex wire image quality indicator, per ASTM E2002. The gauge holds pairs of wires at decreasing separation; the last pair resolving as two gives the basic spatial resolution of the whole imaging chain — detector pixel pitch, scintillator light spread, geometric unsharpness and processing combined. A manufacturer's pixel pitch is a component specification, not the achieved resolution."
          },
          {
              "q": "Which digital technology suits field pipeline radiography?",
              "a": "Computed radiography plates where the shot has to wrap a pipe, because a flexible plate conforms to the curvature and needs no cabling at the exposure. Flat panels win in shops and on repeat setups where geometry is fixed and cycle time dominates. Linear diode arrays suit continuous production lines. Detector choice follows the geometry, not the image quality claim."
          },
          {
              "q": "How does post-processing get controlled on a digital radiograph?",
              "a": "By recording it and retaining the original. Filtering that sharpens edges can create apparent indications and smoothing can erase real ones, so the procedure fixes which operations are permitted and the archive keeps unprocessed data alongside the reviewed image. An interpretation made on a processed image that nobody can reproduce from the original is not evidence."
          },
          {
              "q": "What does DICONDE do that a folder of image files does not?",
              "a": "It binds the image to its own provenance. ASTM E2339 standardises a DICOM-derived format for NDE that carries technique parameters, detector identity and calibration state inside the file, so an image pulled from an archive years later still states how it was made. Loose files separate from that metadata the first time someone reorganises a directory."
          }
      ]
  },

  "/glossary/calibration-block": {
      "answer": "A calibration block does two separable jobs. System blocks — IIW V1 to ISO 2400, V2 to ISO 7963 — set screen range, probe index point, beam angle and resolution. Reference blocks carrying side-drilled or flat-bottom holes set sensitivity and build the DAC or TCG curve. ASME Section V, Article 4 governs which block a weld examination uses.",
      "expansion": "In US fabrication and in-service work the controlling document is ASME BPVC Section V, Article 4, which requires the basic calibration block to match the component in material specification, product form and heat treatment, and to carry side-drilled holes at one-quarter, one-half and three-quarter thickness plus surface notches. Curvature matters: Article 4 requires a curved block for small-diameter pipe and allows one curved block to serve components from 0.9 to 1.5 times its own diameter. Where the block and the component differ in surface finish, grain structure or coating, the sensitivity established on the block is not the sensitivity applied to the part, and transfer correction closes that gap by comparing two-probe response on each. The audit question is narrower than the technical one: every block needs a unique identifier, a dimensional verification record and a named procedure that calls it, or the examination it supported cannot be reconstructed.",
      "source": "ASME BPVC Section V, Article 4 — Ultrasonic Examination Methods for Welds (2025 Edition); ISO 2400:2012 and ISO 7963:2006 (calibration blocks No. 1 and No. 2); ASTM E127 and ASTM E428 (reference block fabrication and control)",
      "table": {
          "caption": "Calibration block types by what each one actually sets",
          "columns": [
              "Block",
              "Reflectors it carries",
              "What it establishes",
              "Governing document",
              "Where it is called up"
          ],
          "rows": [
              [
                  "IIW V1",
                  "Machined 100 mm radius, acrylic insert, small side-drilled hole, stepped section",
                  "Screen range, probe index point, beam angle, resolution, dead zone",
                  "ISO 2400:2012",
                  "Angle-beam probe setup before any weld scan"
              ],
              [
                  "IIW V2 (miniature)",
                  "25 mm and 50 mm radii, single through hole",
                  "The same geometry checks as V1, in a block a technician can carry up scaffold",
                  "ISO 7963:2006",
                  "Field verification of exit point and beam angle"
              ],
              [
                  "ASME basic calibration block",
                  "Side-drilled holes at 1/4T, 1/2T and 3/4T, plus notches on both surfaces",
                  "Reference sensitivity, DAC/TCG curve, scanning gain for weld examination",
                  "ASME BPVC Section V, Article 4",
                  "Weld examination under ASME Section VIII and Section I"
              ],
              [
                  "Area- and distance-amplitude reference blocks",
                  "Flat-bottom hole of specified diameter at a set metal distance",
                  "Straight-beam sensitivity and amplitude-versus-depth response",
                  "ASTM E127 (aluminium alloy); ASTM E428 (other metals)",
                  "Straight-beam examination of plate, forgings and billets"
              ],
              [
                  "Step wedge",
                  "Machined steps of certified thickness",
                  "Velocity and zero offset for thickness gauging",
                  "ASTM E797",
                  "Corrosion thickness surveys read against API 510 and API 570 limits"
              ],
              [
                  "Notched corrosion / ID-crack block",
                  "EDM notches of set depth on ID and OD surfaces",
                  "Sensitivity for surface-connected cracking and remaining-wall techniques",
                  "ISO 16811:2014",
                  "Corrosion mapping and ID-crack techniques"
              ]
          ],
          "note": "Two families, two jobs: a system block never sets sensitivity and a reference block never verifies beam angle. Where block and component differ in material, curvature or surface finish, transfer correction is applied before scanning, not after."
      },
      "facets": [
          {
              "q": "Does a calibration block have to be the same material as the part being inspected?",
              "a": "ASME Section V, Article 4 requires the basic calibration block to match the component in material specification, product form and heat treatment condition. Where it does not — a wrought plate block used for a casting, or a different heat-treat condition — the examination becomes valid only once transfer correction quantifies the acoustic difference in decibels and that correction is applied to the reference level."
          },
          {
              "q": "Can an IIW V1 block be used to set sensitivity for a weld examination?",
              "a": "No. The V1 block to ISO 2400 establishes screen range, probe index point, beam angle, resolution and dead zone — instrument and probe geometry only. Sensitivity for a weld examination comes from a reference block carrying side-drilled holes at graded depths, which is what generates the DAC or TCG curve against which indications are evaluated and recorded."
          },
          {
              "q": "Which reference reflector does a code require — side-drilled hole, flat-bottom hole or notch?",
              "a": "The reflector follows the beam. Side-drilled holes respond consistently across a range of incident angles, so codes use them for angle-beam weld examination and DAC construction. Flat-bottom holes present a flat face to a normal beam and suit straight-beam area-amplitude work per ASTM E127 and E428. Notches simulate surface-connected cracking and set sensitivity for corrosion and ID-crack techniques."
          },
          {
              "q": "Do calibration blocks need curvature to match the pipe being inspected?",
              "a": "ASME Section V, Article 4 requires a curved calibration block for pipe below 20 in. (500 mm) outside diameter and permits one curved block to cover components from 0.9 to 1.5 times its own diameter. Above that size a flat block is acceptable. Ignoring curvature on small-bore pipe changes contact area and coupling, so the sensitivity set on a flat block overstates what reaches the part."
          },
          {
              "q": "How is transfer correction actually measured?",
              "a": "Place two identical angle-beam probes on the calibration block in pitch-catch at a fixed separation and record peak amplitude, then repeat on the component at the same separation and skip distance. The decibel difference between the two readings is the transfer loss, and it is added to the reference level before scanning. One measurement per surface condition, not one per job."
          },
          {
              "q": "What does an auditor look for in a calibration block record?",
              "a": "A unique block identifier, a dimensional and material certificate traceable to that block, the procedure revision that names it, and the calibration record linking the block to the specific examination and instrument. A block with no identifier makes every examination it supported unreproducible, which becomes a finding against the procedure and the written practice rather than against the technician."
          }
      ]
  },

  "/glossary/leak-testing": {
      "answer": "Leak testing techniques separate by sensitivity, not by preference. Bubble and vacuum-box methods resolve gross leakage; pressure change suits closed systems of known volume; halogen and helium mass spectrometry reach the fine end. ASME Section V, Article 10 and its mandatory appendices define each technique, and the required sensitivity is set by the referencing code, not by the technician.",
      "expansion": "Selection runs backwards from the leak rate that matters to the owner. A US pressure vessel built to ASME Section VIII, Division 1 gets a hydrostatic or pneumatic pressure test as a matter of construction; a sensitive leak test is an addition, invoked when the user's design specification, lethal-service rules or the purchase order names one. Refinery and petrochemical operators carry a second driver: EPA Method 21 fugitive-emission monitoring under 40 CFR Part 60 sets its own detection threshold on flanges, valves and pump seals, and that requirement is regulatory rather than code-driven. Three variables decide whether any result means anything — hold time relative to the system's thermal time constant, temperature correction, and cleanliness of the surfaces a bubble or tracer must reach. A pressure-change test read without temperature compensation reports weather. Every technique needs its sensitivity demonstrated on a calibrated leak before the test, not asserted from the equipment specification.",
      "source": "ASME BPVC Section V, Article 10 — Leak Testing (2025 Edition), with its mandatory appendices covering bubble, pressure change, halogen diode, helium mass spectrometer and ultrasonic techniques; US EPA Method 21, 40 CFR Part 60",
      "table": {
          "caption": "Leak test techniques ranked by the leak rate each can resolve",
          "columns": [
              "Technique",
              "Detection mechanism",
              "Approximate sensitivity (Pa·m³/s)",
              "What the test needs",
              "Where it is used"
          ],
          "rows": [
              [
                  "Bubble — direct pressure",
                  "Solution applied to the surface forms bubbles at the leak site",
                  "10⁻⁴",
                  "Access to the pressurised side, clean dry surface, adequate light",
                  "Weld and flange checks on fabricated assemblies"
              ],
              [
                  "Bubble — vacuum box",
                  "Box evacuated over the weld, soap film draws bubbles inward",
                  "10⁻⁴",
                  "Flat accessible weld, sound box seal, solution that survives the dwell",
                  "Tank floor lap welds and roof seams"
              ],
              [
                  "Pressure change (decay or rise)",
                  "Pressure drop across a timed hold, corrected for temperature",
                  "10⁻³ and coarser, degrading as system volume rises",
                  "Isolatable volume, thermal equilibrium, calibrated gauge, long hold",
                  "Closed piping systems and vessels"
              ],
              [
                  "Halogen diode probe",
                  "Heated element responds to a halogenated tracer gas",
                  "10⁻⁶",
                  "Halogen tracer charge, ventilated area, probe calibration check",
                  "Refrigeration and process systems"
              ],
              [
                  "Helium mass spectrometer — detector probe",
                  "Probe traverses the outside of a helium-charged system",
                  "10⁻⁸",
                  "Helium charge, calibrated leak standard, controlled traverse speed",
                  "Locating individual leaks on assembled equipment"
              ],
              [
                  "Helium mass spectrometer — tracer probe",
                  "Helium sprayed on the outside of an evacuated system",
                  "10⁻⁹",
                  "System under vacuum, controlled spray rate, spectrometer response time",
                  "Vacuum systems and vessels under evacuation"
              ],
              [
                  "Helium mass spectrometer — hood",
                  "Whole item enclosed in a helium atmosphere",
                  "10⁻¹⁰ and finer",
                  "Enclosure, evacuated item, helium fill, background control",
                  "Total leak rate acceptance on sealed components"
              ],
              [
                  "Ultrasonic leak detector",
                  "Turbulent gas escaping through the breach emits airborne ultrasound",
                  "Gross leakage only — no quantified rate",
                  "Line of sight to the leak, low ambient ultrasonic noise",
                  "In-service surveys of valves, steam traps and compressed air systems"
              ]
          ],
          "note": "Sensitivities are order-of-magnitude capability, not acceptance criteria; 1 std cm³/s ≈ 0.1 Pa·m³/s. Every technique must have its sensitivity demonstrated on a calibrated leak standard before the test, and the required leak rate comes from the referencing code or the user's design specification."
      },
      "facets": [
          {
              "q": "Does ASME Section VIII require a leak test before a vessel enters service?",
              "a": "Section VIII, Division 1 requires a hydrostatic or pneumatic pressure test at completion — a strength and gross-tightness demonstration. A sensitive leak test to Section V, Article 10 is separate and applies when the user's design specification calls for it, when lethal-service rules govern, or when the purchase order names a technique and a leak rate. Absent one of those, no leak test is mandated."
          },
          {
              "q": "How do I choose between helium mass spectrometry and pressure decay?",
              "a": "System volume decides it. Pressure decay measures the whole boundary at once and its resolution degrades as volume rises, so it suits small isolatable systems held long enough for pressure to settle. Helium mass spectrometry locates the leak and reaches roughly six orders of magnitude finer, at the cost of tracer gas, evacuation or hooding, and a much longer setup."
          },
          {
              "q": "Why does a pressure-decay test fail on a hot day?",
              "a": "Gas pressure tracks absolute temperature. A few degrees of ambient swing across a test volume moves indicated pressure enough to imitate a leak, or to cancel a real one. The fix is measuring gas temperature at multiple points, correcting the reading to a reference temperature, and holding long enough that the system reaches thermal equilibrium before the timed period starts."
          },
          {
              "q": "Can leak testing substitute for ultrasonic wall-thickness inspection?",
              "a": "No. Leak testing answers containment and detects only a breach that already passes through the wall. Corrosion that has consumed 80 percent of the thickness leaks nothing and passes. The two are sequenced: volumetric and surface examination find degradation while there is remaining life to manage, and leak testing confirms the boundary is intact once repairs are complete."
          },
          {
              "q": "What qualification does a leak-testing technician need in the United States?",
              "a": "For code work, LT Level II certified by the employer against its written practice, which is written to ASNT SNT-TC-1A. The written practice sets training hours, experience and examination content technique by technique, because bubble testing and helium mass spectrometry are separate skills. Contracts that reference ISO 9712 instead require third-party certification, which an employer certificate does not satisfy."
          },
          {
              "q": "Which leak test applies to an in-service storage tank bottom?",
              "a": "Vacuum box testing over the bottom lap and butt welds is the established technique: a transparent box with a soap film is placed over the weld and evacuated, and bubbles mark through-welds. API 653 inspection also uses tracer-gas monitoring beneath the floor and product detection in the containment, because a tank bottom leaks downward where no observer stands."
          }
      ]
  },

  "/glossary/attenuation": {
      "answer": "Attenuation splits into absorption and three distinct scattering regimes, and which one dominates depends on grain size relative to wavelength. Rayleigh scattering, where grains are far smaller than the wavelength, rises with the fourth power of frequency; stochastic scattering with the square; the diffusive regime is frequency-independent. That relationship, not a material name, decides the inspection frequency.",
      "expansion": "The practical consequence is that two carbon steels with the same specification attenuate differently after different heat treatment, and a centrifugally cast austenitic component defeats a technique that works on a forging of identical chemistry. ISO 16811:2014 puts transfer correction into the sensitivity-setting procedure for exactly this reason: the value is measured by comparing two-probe response over a fixed separation on the calibration block and on the component and taking the decibel difference. ASME Section V, Article 4 requires the difference between block and component to be addressed. Raising gain does not solve high attenuation, because grain noise rises with the signal and signal-to-noise ratio is what limits detection. For austenitic and dissimilar-metal welds the working answer is a lower frequency and a transmit-receive longitudinal probe, which trades resolution for penetration and avoids the mode conversion that makes shear-wave examination of those welds unreliable.",
      "source": "ISO 16811:2014 — Non-destructive testing — Ultrasonic testing — Sensitivity and range setting; ASME BPVC Section V, Article 4 (2025 Edition)",
      "table": {
          "caption": "Attenuation mechanisms and which one is governing your setup",
          "columns": [
              "Loss mechanism",
              "Frequency dependence",
              "Condition that makes it dominant",
              "How it shows on the A-scan",
              "Compensation"
          ],
          "rows": [
              [
                  "Absorption",
                  "Rises with frequency",
                  "Polymers, composites, elastomer-lined and coated components",
                  "Uniform amplitude loss against a clean baseline",
                  "Lower frequency; raise reference gain with the noise floor checked"
              ],
              [
                  "Rayleigh scattering",
                  "Rises with the fourth power of frequency",
                  "Grain diameter far below wavelength — fine-grained steels examined at high frequency",
                  "Amplitude loss with a rising grass-like baseline",
                  "Halving frequency cuts scattering loss sixteenfold"
              ],
              [
                  "Stochastic scattering",
                  "Rises with the square of frequency",
                  "Grain diameter comparable to wavelength — coarse castings, austenitic weld metal",
                  "Grain noise climbing toward the evaluation level",
                  "Low frequency, focused or TRL probes, or a technique change"
              ],
              [
                  "Diffusive scattering",
                  "Frequency-independent",
                  "Grain diameter far above wavelength",
                  "Back-wall echo lost entirely, no usable penetration",
                  "Ultrasonics is the wrong method here; radiography or an alternative technique"
              ],
              [
                  "Beam divergence",
                  "Falls as frequency and element size rise",
                  "Small crystals over long sound paths",
                  "Amplitude falling with distance for reasons unrelated to the material",
                  "DAC or TCG curve; DGS sizing already accounts for it"
              ],
              [
                  "Interface and couplant loss",
                  "Weak",
                  "Rough, scaled, painted or sharply curved surfaces",
                  "Unstable back-wall echo, amplitude changing with probe pressure",
                  "Surface preparation, then transfer correction measured on the actual surface"
              ],
              [
                  "Anisotropy and beam skew",
                  "Weak, but strongly geometry-dependent",
                  "Austenitic and dissimilar-metal welds with columnar grain growth",
                  "Beam arrives where it was not aimed; back-wall echo displaced sideways",
                  "TRL longitudinal probes, modelled scan plan, mock-up demonstration"
              ]
          ],
          "note": "Attenuation is measured, not looked up: it is the decibel difference between calibration block and component taken with two probes at fixed separation. A transfer loss below 2 dB is customarily recorded and ignored; above that it is added to the reference level before scanning."
      },
      "facets": [
          {
              "q": "How do I choose inspection frequency for a coarse-grained material?",
              "a": "Compare grain size to wavelength. When average grain diameter sits far below the wavelength, scattering rises with the fourth power of frequency, so halving frequency cuts scattering loss sixteenfold. Set frequency low enough that back-wall echo and grain noise separate by the signal-to-noise margin the procedure demands, then confirm the resulting wavelength still resolves the smallest flaw that must be found."
          },
          {
              "q": "Why does raising the gain not fix a noisy austenitic weld?",
              "a": "Gain amplifies grain noise and flaw signal together, so signal-to-noise ratio is unchanged. Detection depends on that ratio, not on absolute amplitude. What improves it is lowering frequency, using a transmit-receive longitudinal probe that suppresses near-surface interface noise, focusing at the depth of interest, or moving to an imaging technique whose processing averages the random noise."
          },
          {
              "q": "What probe works on dissimilar-metal and austenitic welds?",
              "a": "A transmit-receive longitudinal (TRL) probe at low frequency, commonly 1 to 2.25 MHz. Longitudinal waves attenuate and skew less than shear waves in anisotropic weld metal, and separating transmitter from receiver kills the interface noise that swamps a single-crystal probe. The trade is coarser resolution and a fixed focal depth, so the setup targets a defined depth band."
          },
          {
              "q": "Does attenuation affect TOFD sizing the same way it affects amplitude-based sizing?",
              "a": "It affects both, differently. Amplitude-based sizing compares a signal to a reference level, so any attenuation difference between block and component biases the result directly. TOFD sizes from the arrival time of diffracted tip signals, which attenuation does not shift; what attenuation costs TOFD is the visibility of those weak tip signals, so a flaw is missed rather than mis-sized."
          },
          {
              "q": "Is high attenuation itself a rejectable condition?",
              "a": "No code rejects material for attenuation. What high attenuation does is invalidate the examination: when grain noise rises to the evaluation level, or the back-wall echo cannot be maintained at the required amplitude, the technique has no demonstrated detection capability and the report cannot claim coverage. The correct outcome is a technique change recorded in the report, not an acceptance."
          },
          {
              "q": "How much attenuation difference between block and part is too much?",
              "a": "No universal threshold exists; the procedure sets one. Common practice records a transfer loss below 2 dB and ignores it, and adds anything larger to the reference level. Once the measured difference exceeds the margin between the recording level and the noise floor, the block no longer represents the part and a representative block has to be made."
          }
      ]
  },

  "/glossary/automated-ultrasonic-testing-aut": {
      "answer": "AUT is not one configuration. Pipeline girth welds use zone-discriminated phased array plus TOFD on a band scanner; heavy-wall vessel welds use encoded raster PAUT; corrosion mapping uses an encoded zero-degree array. Each carries a different sizing basis and a different acceptance route, and ISO 13588 governs the automated phased array system rather than the weld acceptance.",
      "expansion": "On a US pipeline spread the decision to run AUT instead of radiography is commercial before it is technical: no radiation exclusion zone means welding continues alongside inspection, and the crew works through the night without clearing the right-of-way. What the owner buys with that is a qualification burden. Zone discrimination is built around the weld bevel, so the setup is qualified on a mock-up carrying deliberately placed flaws at the bevel geometry actually being welded, and a bevel change voids it. Sizing accuracy claimed for the system has to be demonstrated on that mock-up, because girth weld acceptance on most projects runs through an engineering critical assessment that consumes flaw height as an input. Data analysis is a separate competence from scanning, and specifications routinely require the analyst to hold a distinct qualification. The scan record is the deliverable, so archive the raw encoded data with its setup and calibration files.",
      "source": "ISO 13588:2019 — Non-destructive testing of welds — Ultrasonic testing — Use of automated phased array technology; API 1104, Welding of Pipelines and Related Facilities; ASME BPVC Section V, Article 4 (2025 Edition)",
      "table": {
          "caption": "AUT configurations by application, sizing basis and acceptance route",
          "columns": [
              "Application",
              "Configuration",
              "Sizing basis",
              "Acceptance route",
              "Record produced"
          ],
          "rows": [
              [
                  "Pipeline girth weld",
                  "Band scanner carrying zone-discriminated PAUT plus TOFD, single circumferential pass",
                  "Zone amplitude for detection, TOFD tip diffraction for through-wall height",
                  "API 1104 workmanship criteria or engineering critical assessment criteria",
                  "Encoded strip chart: zone gates, TOFD D-scan, coupling and position traces"
              ],
              [
                  "Heavy-wall vessel and nozzle weld",
                  "Encoded raster PAUT, sectorial scan from both sides where access allows",
                  "DAC or DGS amplitude, tip diffraction for through-wall extent",
                  "ASME Section VIII acceptance, examined to Section V Article 4",
                  "Encoded volumetric C-scan and S-scan data set"
              ],
              [
                  "Corrosion mapping",
                  "Encoded zero-degree linear array on a two-axis or magnetic-wheel scanner",
                  "Minimum remaining thickness per grid cell",
                  "API 510 or API 570 evaluation against required minimum thickness",
                  "Thickness C-scan with grid coordinates and a minimum-value map"
              ],
              [
                  "Tube and pipe mill inspection",
                  "Rotating or immersion AUT at fixed helical pitch",
                  "Reference notch amplitude",
                  "API 5L or the product specification, examined per ASTM E213",
                  "Continuous alarm-channel trace logged against pipe identity"
              ],
              [
                  "In-service crack and damage monitoring",
                  "Encoded PAUT or TFM from a repeatable fixed datum",
                  "Tip diffraction through-wall height, compared scan to scan",
                  "Fitness-for-service assessment per API 579-1/ASME FFS-1",
                  "Repeat-scan data set referenced to a permanent datum for growth comparison"
              ],
              [
                  "Weld overlay and cladding",
                  "Encoded PAUT in a low-frequency transmit-receive longitudinal configuration",
                  "Amplitude against a clad reference block, with interface tracking",
                  "ASME Section V Article 4 with the construction code acceptance",
                  "Encoded C-scan of the bond line"
              ]
          ],
          "note": "The encoder records position only. Coverage of the weld volume is proved by the scan plan and the mock-up qualification, and a change of bevel, thickness or material sends the setup back through qualification before any data is acceptable."
      },
      "facets": [
          {
              "q": "Can AUT replace radiography on a US pipeline construction spread?",
              "a": "Yes, where the construction code and the owner permit ultrasonic examination as an alternative to radiography, which API 1104 does through its ultrasonic provisions and alternative acceptance criteria. The operational driver is the absence of a radiation exclusion zone: welding, coating and inspection run concurrently instead of clearing the right-of-way for every exposure, which is where the schedule saving comes from."
          },
          {
              "q": "What has to be qualified before AUT data can be used for acceptance?",
              "a": "Three things independently. The procedure, demonstrated on a mock-up of the same material, thickness and bevel geometry with flaws at known positions. The system, including scanner, encoder, focal laws and analysis software, verified against that mock-up. And the personnel, both the operator running the scan and the analyst interpreting the data. Changing an essential variable sends the procedure back through qualification."
          },
          {
              "q": "Does an encoded scan prove volumetric coverage?",
              "a": "It proves where the probe travelled, not what the beam interrogated. Coverage of the weld volume additionally requires the focal laws, wedge position and beam angles to have insonified every zone at an angle capable of detecting the expected flaw orientation. That is proved by the scan plan and the mock-up qualification; only the position axis comes from the encoder."
          },
          {
              "q": "What happens to an AUT setup when the weld bevel changes?",
              "a": "A zone-discriminated setup maps each focal law to a specific height band of the bevel, so a change in bevel angle, root land or wall thickness moves the fusion faces out from under the zones. The setup is void and requires requalification on a mock-up of the new geometry. Field bevel changes made for fit-up reasons are the common cause of invalidated data."
          },
          {
              "q": "Who is allowed to analyse AUT data?",
              "a": "Scanning and analysis are separate competences. Project specifications commonly require the analyst to hold Level II or III certification in the technique plus documented qualification on the specific system and the project mock-up. Data reviewed remotely by an analyst who never qualified on that mock-up is the finding auditors raise most often against AUT contractors."
          },
          {
              "q": "What must an AUT record contain to be defensible years later?",
              "a": "The raw encoded data rather than a screenshot report; the setup and focal-law files used to acquire it; calibration and verification records naming the block; the scan plan and the procedure revision in force that day; and certification records for both operator and analyst. Without the setup files the data cannot be re-analysed, which removes the main reason for running AUT."
          }
      ]
  },

  "/glossary/cswip": {
      "answer": "For US work the practical question is not what CSWIP means but whether it is accepted. AWS D1.1 lets the Engineer accept an inspector qualified under AWS QC1 as a CWI, under the Canadian CWB scheme, or by demonstrated training and experience — which is the door CSWIP walks through. Acceptance is contractual, decided contract by contract.",
      "expansion": "The two schemes diverge most in their renewal arithmetic, and that is where holders get caught. An AWS CWI certificate runs three years, renews at three and six on evidence of continued activity and vision testing, and at nine years requires recertification — by examination or by documented continuing education. CSWIP runs a five-year certificate with renewal at five and re-examination at ten. Holding both means running two clocks that never align. On the NDT side the comparison is cleaner: CSWIP NDT certification and BINDT PCN both operate under ISO 9712:2021, a third-party central certification model, while ASNT SNT-TC-1A certification is issued by the employer against its own written practice. A US owner who writes \"ISO 9712 Level II or equivalent\" into a specification is asking for third-party certification and will not accept an employer certificate, whatever the examination content behind it.",
      "source": "TWI Certification Ltd CSWIP scheme documents; AWS QC1:2016 — Standard for AWS Certification of Welding Inspectors; ISO 9712:2021; ASNT SNT-TC-1A (2020 Edition)",
      "table": {
          "caption": "CSWIP against the schemes it competes with on a contract",
          "columns": [
              "Scheme",
              "Certification model",
              "Governing document",
              "Validity and renewal",
              "Where it is normally specified"
          ],
          "rows": [
              [
                  "CSWIP 3.1 Welding Inspector",
                  "Third party — TWI Certification Ltd",
                  "CSWIP scheme document for welding inspectors",
                  "5-year certificate; renewal at 5 on evidence of activity; re-examination at 10",
                  "UK, EU, Middle East and offshore fabrication contracts"
              ],
              [
                  "CSWIP 3.2 Senior Welding Inspector",
                  "Third party — TWI Certification Ltd",
                  "CSWIP scheme document for welding inspectors",
                  "Same 5- and 10-year cycle; entry requires 3.1 held with logged experience",
                  "Contracts requiring supervision of inspectors and procedure review"
              ],
              [
                  "AWS CWI",
                  "Third party — American Welding Society",
                  "AWS QC1",
                  "3-year certificate; renewal at 3 and 6 with vision test; recertification by examination or continuing education at 9",
                  "US fabrication and construction, AWS D1.1 and owner specifications"
              ],
              [
                  "CSWIP NDT Level 2",
                  "Third-party central certification",
                  "ISO 9712:2021",
                  "5-year certificate; renewal at 5; recertification at 10",
                  "International NDT contracts that name ISO 9712"
              ],
              [
                  "BINDT PCN Level 2",
                  "Third-party central certification",
                  "ISO 9712:2021",
                  "5-year certificate; renewal at 5; recertification at 10",
                  "UK and international NDT contracts"
              ],
              [
                  "ASNT NDT Level II",
                  "Employer-certified against a written practice",
                  "ASNT SNT-TC-1A (2020 Edition)",
                  "Interval set by the employer's written practice; certification does not travel to a new employer",
                  "US code work under ASME and API"
              ],
              [
                  "ASNT NDT Level III",
                  "Third-party examination, employer certification",
                  "ASNT SNT-TC-1A; ANSI/ASNT CP-189",
                  "5-year ASNT certificate, renewed by examination or documented points",
                  "Written practice approval and procedure sign-off in the US"
              ]
          ],
          "note": "Equivalence is not a property of the certificate; it is a decision the owner or the Engineer records in the specification. Confirm in writing which scheme a contract names before mobilising, because a certificate accepted on one project is refused on the next."
      },
      "facets": [
          {
              "q": "Does a CSWIP certificate qualify someone as a welding inspector in the United States?",
              "a": "No legal barrier exists, but AWS D1.1 places acceptance with the Engineer, who may accept a CWI qualified under AWS QC1, an inspector under the Canadian CWB scheme, or one whose training and experience the Engineer judges adequate. CSWIP is accepted under that third route on many US projects and refused on others. Confirm in writing before mobilising."
          },
          {
              "q": "Which CSWIP grade matches the scope I am being hired for?",
              "a": "The grades ascend in scope. CSWIP 3.0 covers visual inspection of welds against a straightforward acceptance standard. CSWIP 3.1 is the general welding inspector grade that most contracts name. CSWIP 3.2 is the senior grade, adding supervision of inspection personnel, review of welding procedures and welder qualification records, and sign-off responsibility. Progression to 3.2 requires holding 3.1 with logged experience."
          },
          {
              "q": "What happens if a CSWIP certificate lapses?",
              "a": "Renewal falls due at five years on evidence of continued relevant work, and re-examination falls due at ten. Miss the renewal window and reinstatement is not automatic — the holder re-sits the examination. Employers carrying inspectors on multiple schemes track these dates centrally, because a lapsed certificate found during an audit undermines every report signed after the expiry date."
          },
          {
              "q": "Is it worth holding both CSWIP and AWS CWI?",
              "a": "For anyone moving between US and international contracts, yes, because specifications name a scheme and rarely entertain a case for equivalence. The cost is two renewal cycles that never coincide: CWI at three, six and nine years, CSWIP at five and ten. Budget continuing-education evidence against both, since neither scheme accepts the other's activity record."
          },
          {
              "q": "Does CSWIP cover NDT methods or only welding inspection?",
              "a": "Both, through separate routes. The welding inspector grades sit in their own scheme documents, while CSWIP NDT certification for UT, RT, MT, PT, ET and VT operates under ISO 9712:2021 as third-party central certification. A CSWIP welding inspector certificate carries no NDT method authority, and an NDT Level II certificate carries no welding inspection authority."
          },
          {
              "q": "Which certifications does a US refinery turnaround actually specify?",
              "a": "For welding inspection, AWS CWI under QC1 is the default written into most US owner specifications. For NDT methods, Level II certified to the contractor's written practice under ASNT SNT-TC-1A, with that written practice submitted for owner review. Fixed-equipment inspection runs on a separate API individual certification track held by the owner's inspectors, not by the NDT contractor."
          }
      ]
  },

  "/ndt-industry-statistics": {
      "answer": "Published NDT market totals disagree because they count different pools. Three distinct revenue streams get labelled \"the NDT market\": third-party inspection services, instrument and consumable sales, and inspection software. A US services-only figure and an all-in global figure differ by an order of magnitude and both are defensible. Establish counted scope first — most apparent contradictions between two studies dissolve there.",
      "expansion": "In the United States the binding constraint on NDT revenue is certified technician supply, not demand. Asset age drives examination scope mechanically: API 510, API 570 and API 653 tie inspection intervals to measured corrosion rate and remaining life, so an ageing refining, chemical and power fleet generates more billable examinations each cycle with no new construction at all. PHMSA integrity-management rules do the same for pipelines, and state jurisdictional boiler and pressure vessel programmes for fired equipment. Capital projects — LNG trains, data-centre power, grid and generation build — add fabrication-side examination that is lumpy and concentrated on the Gulf Coast. Against that, contractor capacity is capped by how many Level II technicians hold current certification in the required method, which is why US contractors report booked backlog rather than order shortfall. Any market model that projects demand without modelling certified headcount overstates servable revenue.",
      "source": "U.S. Bureau of Labor Statistics, Occupational Employment and Wage Statistics, SOC 51-9061 (Inspectors, Testers, Sorters, Samplers and Weighers) for workforce counts; API 510, API 570 and API 653 for the inspection-interval rules that convert asset age into examination scope; 49 CFR Parts 192 and 195 (PHMSA) for pipeline integrity-driven demand.",
      "table": {
          "caption": "What each published \"NDT market\" number actually counts",
          "columns": [
              "Segment",
              "Counted",
              "Excluded",
              "Cycle driver",
              "Where a credible figure comes from"
          ],
          "rows": [
              [
                  "Third-party inspection services",
                  "Contractor labour, mobilisation and report deliverables billed per campaign, turnaround or contract term",
                  "Owner in-house inspection departments; equipment purchases",
                  "Turnaround calendars and code-mandated inspection intervals",
                  "Contractor filings and published turnaround schedules"
              ],
              [
                  "Instruments and probes",
                  "UT, PAUT, RT, ET hardware, probes, wedges and scanners sold to contractors and owner-operators",
                  "Service labour; consumables counted separately",
                  "Technology transitions — film to digital radiography, conventional UT to phased array",
                  "Manufacturer segment reporting"
              ],
              [
                  "Consumables",
                  "Penetrant, developer, magnetic particles, couplant, film and imaging plates",
                  "Capital hardware",
                  "Examination volume, near-proportional to crew hours worked",
                  "Distributor volume data"
              ],
              [
                  "Training and certification",
                  "Course fees, examination fees and certification-body revenue",
                  "Employer internal training time and on-job experience hours",
                  "Technician attrition and retirement replacement",
                  "ASNT, ISO 9712 certification bodies, PCN scheme statistics"
              ],
              [
                  "Inspection software and data",
                  "Reporting platforms, asset-integrity databases, RBI and FFS tooling, digital twins",
                  "Generic ERP and document management",
                  "Owner mandates to receive inspection evidence as queryable data rather than PDFs",
                  "Vendor disclosures and owner procurement specifications"
              ],
              [
                  "In-house owner inspection",
                  "Salaried owner-operator inspection staff and the equipment they hold",
                  "Contracted third-party work",
                  "Owner headcount policy and insourcing cycles",
                  "Owner headcount, rarely published — the usual source of a phantom number"
              ]
          ],
          "note": "Two studies that disagree by a factor of five are measuring row 1 against rows 1+2+3+5. Neither is wrong; they answer different questions."
      },
      "facets": [
          {
              "q": "Why do two NDT market reports published the same year differ by more than double?",
              "a": "Because the segment boundary moved. One counted third-party inspection services only; the other added instrument sales, consumables and software, or folded owner in-house inspection in as notional spend. Region and currency base shift it further. Read the scope statement in each methodology section before treating the gap as a forecasting disagreement."
          },
          {
              "q": "What actually caps US NDT contractor revenue growth?",
              "a": "Certified technician headcount. Work cannot be signed off without a technician holding current Level II certification in the specific method, and that certification requires documented training hours, experience hours and a passed practical examination. Contractors decline scope when crews are committed elsewhere, so backlog rises while revenue does not. Capacity, not order intake, is the binding constraint."
          },
          {
              "q": "Which figure should I use when building an NDT budget for a US refinery?",
              "a": "None of the published market totals. Budget bottom-up from your own examination scope: the API 510, 570 and 653 intervals falling due in the period, the method mix each item requires, estimated crew days and mobilisation. Market-size figures describe the supply side and carry no information about your asset register."
          },
          {
              "q": "Is the inspector shortage structural or just a hiring-cycle story?",
              "a": "Structural. The workforce skews old, and replacement requires years of documented experience hours before a technician can certify to Level II — a pipeline that pay alone cannot accelerate. Retirements remove certified capacity immediately; replacements arrive only after the experience clock has run. The gap widens whenever turnaround volume rises faster than the training pipeline."
          },
          {
              "q": "How do I tell a demand-driven NDT growth number from a price-driven one?",
              "a": "Ask whether the study reports examination volume or revenue. Revenue growth combines rate inflation, method-mix shift toward higher-priced techniques such as phased array and TOFD, and genuine volume. A market growing on mix shift means the same number of welds examined at a higher price per weld — a different planning input from more welds."
          },
          {
              "q": "Does AI-assisted defect detection reduce the number of inspectors needed?",
              "a": "It reduces analysis hours, not certified headcount. Data acquisition still puts a technician at the asset, and the examination result still requires sign-off by certified personnel under the governing written practice. AI compresses review of PAUT C-scans and digital radiographs, shifting where the hours are spent rather than removing the certification requirement."
          }
      ]
  },

  "/blog/surface-breaking-crack-detection-comprehensive-methods": {
      "answer": "Material magnetism decides the method before crack size or geometry does. On ferromagnetic carbon and low-alloy steel, magnetic particle testing wins — it reaches flaws lying a millimetre or two beneath the surface that penetrant cannot see. On austenitic stainless, aluminium, titanium and nickel alloys, penetrant or eddy current is the only valid choice. Coatings and hot surfaces rule out both and push the job to eddy current or ACFM.",
      "expansion": "Order the decision: magnetism, then surface condition, then access, then required sensitivity. Penetrant demands a clean, dry, open crack — a smeared, peened or shot-blasted surface closes the opening and the indication never bleeds back. Grinding does the same, which is why penetrant after grinding needs an etch step to reopen the surface. Magnetic particle needs flux perpendicular to the crack, so every surface is examined in two orthogonal directions; a single-direction shot misses cracks lying near-parallel to the field whatever their size. Eddy current tolerates coatings, works through paint of known thickness and needs no consumables, but it responds to permeability and geometry change as strongly as to cracks, so it demands reference notches and an operator who can separate lift-off from a real signal. ACFM extends that tolerance to coated and subsea weld toes. Where a missed crack means loss of containment, two methods with different physics beat one method run twice.",
      "source": "ASME BPVC Section V (2023 Edition), Article 6 (liquid penetrant examination) and Article 7 (magnetic particle examination); ASTM E1417/E1417M and ASTM E1444/E1444M; SAE AMS 2644 for fluorescent penetrant sensitivity levels; ASTM E2261 for alternating current field measurement; ISO 3452-1 and ISO 9934-1 for the ISO equivalents.",
      "table": {
          "caption": "Surface-crack methods by material, reach and blind spot",
          "columns": [
              "Method",
              "Materials it couples to",
              "Reaches",
              "Blind to",
              "Governing standard"
          ],
          "rows": [
              [
                  "Magnetic particle, wet fluorescent",
                  "Ferromagnetic — carbon, low-alloy, ferritic and martensitic stainless",
                  "Surface-breaking plus flaws lying a short depth below the surface",
                  "Cracks near-parallel to the applied flux; every non-ferromagnetic alloy",
                  "ASME V Article 7; ASTM E1444/E1444M; ISO 9934-1"
              ],
              [
                  "Magnetic particle, dry powder",
                  "Same, plus rough as-welded and hot surfaces where a suspension will not wet",
                  "Surface-breaking flaws on rough and irregular surfaces",
                  "Fine tight cracks that wet fluorescent would show; non-magnetic alloys",
                  "ASME V Article 7; ASTM E709"
              ],
              [
                  "Liquid penetrant, fluorescent",
                  "Any non-porous material, magnetic or not",
                  "Flaws open to the surface only",
                  "Anything not open at the surface; cracks closed by grinding, peening or blasting; coated surfaces",
                  "ASME V Article 6; ASTM E1417/E1417M; AMS 2644 sensitivity levels"
              ],
              [
                  "Liquid penetrant, visible dye",
                  "Any non-porous material; field use without a darkened area",
                  "Open surface flaws at lower sensitivity than fluorescent",
                  "Fine tight cracks; the same closure and coating limits",
                  "ASME V Article 6; ISO 3452-1"
              ],
              [
                  "Eddy current, surface probe or array",
                  "Electrically conductive — magnetic and non-magnetic alike, through thin coatings",
                  "Surface-breaking and shallow subsurface cracks with no surface preparation",
                  "Non-conductive materials; deep flaws; signals masked by geometry and permeability change",
                  "ASME V Article 8; ISO 15549"
              ],
              [
                  "ACFM",
                  "Ferromagnetic weld toes, including painted and subsea",
                  "Surface-breaking cracks through coating, with a length and depth estimate",
                  "Non-magnetic alloys; flaws away from the modelled geometry",
                  "ASTM E2261"
              ]
          ],
          "note": "Magnetism is the first filter, not sensitivity. A method that cannot couple to the material is not a lower-sensitivity option — it returns nothing at all."
      },
      "facets": [
          {
              "q": "The weld was ground flush — does that change which surface method I can use?",
              "a": "Yes. Grinding smears metal across crack openings, and penetrant cannot enter an opening that has been closed. Magnetic particle still works, because flux leakage does not require the crack to be open. Where penetrant is contractually required after grinding, an etch step must reopen the smeared surface before the penetrant is applied."
          },
          {
              "q": "Can I inspect through paint?",
              "a": "Not with penetrant or magnetic particle — both need bare metal, and coating removal becomes part of the scope. Eddy current works through a coating of known, stable thickness when calibrated at the same lift-off. ACFM tolerates coating on ferromagnetic weld toes. Where stripping the coating is unacceptable, the method choice is already made for you."
          },
          {
              "q": "What is the smallest crack these methods find?",
              "a": "No method carries a guaranteed minimum. Detection is set by crack opening, depth, orientation to the field, surface roughness, illumination and operator. The defensible way to state capability is a probability-of-detection curve built for your material, geometry and written procedure on representative flawed specimens — not a single millimetre figure quoted from a brochure."
          },
          {
              "q": "Austenitic stainless weld with suspected toe cracking — what runs?",
              "a": "Penetrant or eddy current. Austenitic 304 and 316 are non-magnetic, so magnetic particle returns nothing. Fluorescent penetrant is the default for fabrication acceptance; eddy current is the choice when the surface is coated or the weld is in service and stripping is impractical. Duplex grades are a separate case decided by ferrite content."
          },
          {
              "q": "How many magnetising directions does an MT examination need?",
              "a": "Two orthogonal directions on every surface examined. Leakage flux forms only where the discontinuity cuts across the field, so a crack lying near-parallel to a single applied field produces no indication whatever its size. Rotating the yoke ninety degrees and repeating with overlapping coverage is the requirement — gaps beneath the pole feet under-inspect."
          },
          {
              "q": "When is one surface method not enough?",
              "a": "When the failure consequence is loss of containment or a fracture-critical component. Two methods with different physics fail differently: penetrant misses closed cracks that magnetic particle finds, and magnetic particle misses parallel-to-flux cracks that penetrant finds. Running the same method twice repeats the same blind spot. Aerospace and nuclear regimes formalise this by stacking methods at different manufacturing stages."
          }
      ]
  },

  "/blog/shear-wave-ut-for-thick-section-inspection": {
      "answer": "Refracted angle follows bevel geometry, not preference. The beam must strike the fusion face as near to perpendicular as the joint allows — 70 degrees on thin sections, 60 or 45 degrees as thickness grows, because sound path and attenuation climb with angle. Thick sections need lower frequency, more than one angle, and both half-skip and full-skip passes to cover the whole weld volume.",
      "expansion": "Two geometric relations control everything at the scanner. Half-skip surface distance from the probe index point is thickness times tan θ, and the sound path is thickness divided by cos θ; full skip doubles both. At 70 degrees the path is 2.9 times section thickness, so on a 100 mm section one leg runs past a quarter metre of steel — attenuation and beam spread wreck signal-to-noise long before the far toe is covered. Dropping to 45 degrees shortens the path to 1.4 times thickness and buys that sensitivity back. Frequency moves the same way: 4 to 5 MHz on thin plate for resolution, 2.25 MHz as the general-purpose choice, 1 to 2.25 MHz on heavy wall where grain scatter dominates. Shear velocity in steel runs near 3230 m/s against 5900 m/s longitudinal, so at equal frequency the shear wavelength is close to half — the resolution gain that pays for the geometric complexity.",
      "source": "ASME BPVC Section V (2023 Edition), Article 4 — Ultrasonic Examination Methods for Welds; AWS D1.1/D1.1M Structural Welding Code — Steel, which tabulates the required search-unit angle against material thickness; ISO 17640 for ultrasonic testing of welded joints; ISO 10863 for time-of-flight diffraction where thickness defeats amplitude-based pulse-echo.",
      "table": {
          "caption": "Angle-beam setup by section thickness",
          "columns": [
              "Section thickness",
              "Refracted angles",
              "Frequency",
              "Coverage strategy",
              "Limiting factor"
          ],
          "rows": [
              [
                  "Under 13 mm (1/2 in)",
                  "70 degrees",
                  "4–5 MHz",
                  "Full skip from one side; the whole volume sits inside one leg",
                  "Dead zone and near-field length relative to thickness; wedge noise"
              ],
              [
                  "13–38 mm (1/2–1-1/2 in)",
                  "70 degrees, 60 degrees to confirm",
                  "2.25–5 MHz",
                  "Half skip and full skip, both sides of the weld where access allows",
                  "Root geometry echoes confused with lack of penetration"
              ],
              [
                  "38–75 mm (1-1/2–3 in)",
                  "60 and 45 degrees",
                  "2.25 MHz",
                  "Multiple angles, both sides, both surfaces; weld volume split into depth zones",
                  "Sound path length; attenuation across the far third of the volume"
              ],
              [
                  "75–150 mm (3–6 in)",
                  "45 degrees, 60 degrees for the upper zone",
                  "1–2.25 MHz",
                  "Half skip only, scanning from both surfaces; transverse scan for cracks along the weld axis",
                  "Beam spread and attenuation; index-point drift on curved surfaces"
              ],
              [
                  "Over 150 mm (6 in)",
                  "45 degrees plus tandem pairs or PAUT sectorial",
                  "1–2 MHz",
                  "Tandem for vertically oriented fusion-face flaws; TOFD for through-wall sizing",
                  "Amplitude response no longer sizes reliably at that path length"
              ],
              [
                  "Austenitic or clad, any thickness",
                  "Shear wave unreliable",
                  "1–2 MHz",
                  "Dual-matrix transmit-receive longitudinal, or TOFD",
                  "Coarse columnar grain scatters and skews the shear beam"
              ]
          ],
          "note": "These angles are the engineering starting point; the applicable code tabulates the required search-unit angle against thickness and that table governs. Thickness bands are cumulative — a 100 mm weld gets the thick-section coverage strategy, not just the thick-section angle."
      },
      "facets": [
          {
              "q": "Why not use 70 degrees on everything?",
              "a": "The sound path at 70 degrees is 2.9 times section thickness against 1.4 at 45 degrees. On heavy wall that multiplies attenuation loss and widens beam spread, dropping far-side flaw signals below reference level. The 70 degree probe earns its place on thin sections, where a shallower angle would put the full-skip index point beyond the reachable scanning surface."
          },
          {
              "q": "How far back from the weld do I scan?",
              "a": "Half-skip distance from the index point is section thickness times tan θ; full skip doubles the thickness term, and half the weld cap width is added to reach the centreline. At 45 degrees on 50 mm that is 50 mm to half skip and 100 mm to full skip. Confirm scanning-surface clearance before writing the technique — obstructions decide angle as often as physics does."
          },
          {
              "q": "Do I need to scan from both sides of the weld?",
              "a": "Both sides where access allows. A planar flaw on one fusion face reflects poorly to a probe approaching from the same side at an unfavourable angle, so single-sided coverage leaves a real detection gap. Where nozzle welds or pipe-to-shell joints force one-sided access, record it as a technique limitation; phased array sectorial scanning is what recovers the missing angles."
          },
          {
              "q": "Why does shear wave fail on austenitic stainless and clad welds?",
              "a": "Coarse columnar grains growing along the solidification direction scatter and refract the shear beam. The beam skews off its nominal angle, the noise floor climbs, and a real flaw signal cannot be separated from grain noise. Low-frequency dual-matrix transmit-receive longitudinal probes or time-of-flight diffraction replace it, both chosen because longitudinal waves scatter less in that structure."
          },
          {
              "q": "Amplitude says the flaw is rejectable — does it tell me the height?",
              "a": "Not on thick sections. Amplitude response is governed by flaw orientation and face roughness as much as by size, and a badly oriented planar flaw returns very little. Through-wall height for fitness-for-service input comes from tip-diffraction technique or time-of-flight diffraction, which measure arrival time rather than echo strength. Workmanship acceptance uses amplitude; engineering critical assessment does not."
          },
          {
              "q": "What calibration proves the technique before scanning starts?",
              "a": "Three things, all recorded. Refracted angle and probe index point verified on a calibration block at the wedge temperature you will scan at. A distance-amplitude correction curve or reference level built from the specified reference reflectors. Then transfer correction measured on the component itself, covering the difference in surface roughness and attenuation between block and part."
          }
      ]
  },

  "/magnetic-particle-testing": {
      "answer": "Choose the magnetising technique from the crack orientation you expect, not from what is in the van. A yoke finds cracks lying across the pole-to-pole line and is blind to those parallel to it. A coil finds circumferential cracks; a central conductor finds axial ones. Every technique has a blind orientation, which is why each surface is magnetised in two orthogonal directions.",
      "expansion": "Field direction is the whole method. Leakage flux forms only where a discontinuity cuts across the flux path, so detection collapses as the crack rotates toward parallel with the field — which makes two orthogonal shots per surface a requirement rather than good practice. Current type sets depth: alternating current confines flux to a thin surface layer through skin effect, making an AC yoke a surface-breaking instrument, while direct and half-wave rectified current drive flux deeper and reach flaws sitting just beneath the surface. Lifting power reflects that split — 4.5 kg for AC and 18 kg for DC at maximum pole spacing. Neither number proves the field is adequate inside the part; only a field indicator does that. A pie gauge shows direction, a shim placed on the actual inspection surface shows a real flux level reached the actual geometry, and on complex shapes those two disagree often enough that the shim is the one to trust.",
      "source": "ASME BPVC Section V (2023 Edition), Article 7 — Magnetic Particle Examination; ASTM E709 Standard Guide for Magnetic Particle Testing; ASTM E1444/E1444M Standard Practice for Magnetic Particle Testing; ISO 9934-1 and ISO 17638 for the ISO stack.",
      "table": {
          "caption": "Magnetising technique versus the crack it will and will not find",
          "columns": [
              "Technique",
              "Field produced",
              "Finds cracks oriented",
              "Misses",
              "Where specified"
          ],
          "rows": [
              [
                  "Yoke, AC",
                  "Longitudinal field between the two poles, held near the surface by skin effect",
                  "Across the pole-to-pole line",
                  "Cracks parallel to the pole line; anything below the surface skin",
                  "ASME V Article 7; ASTM E709; ISO 17638 — lifting power 4.5 kg"
              ],
              [
                  "Yoke, DC or permanent magnet",
                  "Longitudinal field between the poles, penetrating deeper into the section",
                  "Across the pole-to-pole line, including flaws slightly below the surface",
                  "Cracks parallel to the pole line; deep flaws",
                  "ASME V Article 7; ASTM E709 — lifting power 18 kg"
              ],
              [
                  "Prods",
                  "Circular field encircling the current path between the prod tips",
                  "Parallel to the prod-to-prod line",
                  "Cracks across the prod line; anything outside the effective prod spacing",
                  "ASME V Article 7 — arc-strike risk; owner approval required on pressure-boundary welds"
              ],
              [
                  "Encircling coil",
                  "Longitudinal field along the part axis",
                  "Circumferential, transverse to the part axis",
                  "Axial cracks; part ends where fill factor and length-to-diameter ratio fall short",
                  "ASME V Article 7; ASTM E1444/E1444M"
              ],
              [
                  "Central conductor",
                  "Circular field around the bore, strongest at the inner surface",
                  "Axial, on bore and outer surface",
                  "Circumferential cracks; the outer surface of heavy-wall parts where field strength falls away",
                  "ASME V Article 7"
              ],
              [
                  "Direct contact, head shot",
                  "Circular field around the current path through the part",
                  "Axial, along the current path",
                  "Circumferential cracks; burn and overheating risk at the contact pads",
                  "ASME V Article 7; ASTM E1444/E1444M"
              ]
          ],
          "note": "Every row has a blind orientation. That is the reason for the two-direction rule — no single technique covers a surface on its own."
      },
      "facets": [
          {
              "q": "AC or DC yoke for an in-service weld?",
              "a": "AC when the target is surface-breaking cracking — toe fatigue, hydrogen cracking, service-induced cracks — because skin effect concentrates flux exactly where those cracks open. DC or half-wave rectified when the concern is near-surface porosity, inclusions or lack of fusion under a thin skin. Fabrication acceptance regimes call surface-breaking, so AC covers the bulk of weld work."
          },
          {
              "q": "The lifting-power check passed — is the field strong enough?",
              "a": "No. Lifting power qualifies the yoke, not the examination. It is measured on a flat test weight at maximum pole spacing, which no real component resembles. Field adequacy in the actual part is proved on the part: a pie gauge for direction and a shim on the inspection surface for level. Curvature, section change and pole contact all cut the delivered field."
          },
          {
              "q": "Why can prods be refused on a pressure-boundary weld?",
              "a": "Prods pass examination current through the component at the contact tip, and a poor contact arcs. An arc strike leaves a localised hard, untempered martensitic spot carrying microcrack risk in the heat-affected zone — a new defect created by the inspection itself. Owner specifications require written approval, arc-strike mitigation, and removal plus re-examination of any strike found."
          },
          {
              "q": "Duplex stainless — is MT valid?",
              "a": "Partially. Duplex grades contain ferrite and respond to a magnetic field, but the response tracks ferrite content and the weld metal behaves differently from the base metal. Do not assume yoke settings transfer from carbon steel. Qualify the technique on a representative sample with a shim on the actual weld and record the ferrite basis. Where response is weak, penetrant is the defensible method."
          },
          {
              "q": "Does the part need demagnetising after examination?",
              "a": "Whenever residual field would interfere with the next operation — machining where chips cling to the cutting edge, subsequent arc welding where residual field deflects the arc, nearby instrumentation or bearings, or a customer specification setting a residual limit. Structural steel left in place after examination is the common exception. Measure with a field indicator and record the result either way."
          },
          {
              "q": "Where in the fabrication sequence should MT run?",
              "a": "On the final surface condition and after any post-weld heat treatment, because PWHT can open cracks that were tight before and hydrogen cracking is delayed. Aerospace forging practice examines after each machining stage and again after final heat treatment, since machining exposes subsurface flaws and heat treatment initiates new ones. Examining before the last operation examines the wrong surface."
          }
      ]
  },

  "/3d-scanning-abu-dhabi": {
      "answer": "Atlantis NDT delivers survey-grade LiDAR, photogrammetry and drone reality capture in Abu Dhabi through its Middle East operations — on site within 24–72 hours. Scopes run across refining, gas processing and LNG, offshore jackets and FPSOs, ports and desalination, shipping registered point clouds, Revit and IFC as-builts, API 653 settlement surveys and IACS classification support, every bundle reviewed by an ASNT NDT Level III.",
      "expansion": "Abu Dhabi attaches scanning to the code stack of an oil and gas economy. Sandy soils make tank settlement the signature scope: API 653 Annex B evaluates bottom settlement from shell elevation measurements, and a scan captures elevations, verticality, roundness and peaking in one mobilisation, comparable campaign to campaign. API 510 and API 570 reuse the same capture for vessel deformation and piping as-builts. Offshore, IACS Recommendation No. 20 governs NDE acceptance on classification surveys for ABS, DNV, Lloyd's Register and Bureau Veritas across jacket, topside and FPSO work. Sour service is routine here, so scanning pairs with XRF positive material identification per ASTM E1476 against NACE MR0175 and MR0103 in the same site visit. Drone capture takes flare stacks, tank roofs and structural edges without scaffold. State two numbers before capture: registered-network accuracy for tolerance, and level of development for modelling — modelling, not capture, drives the schedule.",
      "source": "API 653 (5th Edition) Annex B; API 510; API 570; NACE MR0175/ISO 15156 and NACE MR0103 for sour-service materials; ASTM E1476 for XRF positive material identification; IACS Recommendation No. 20 for marine and offshore NDE acceptance.",
      "table": {
          "caption": "Scan-to-code deliverables on Abu Dhabi assets",
          "columns": [
              "Deliverable",
              "Governing reference",
              "What the scan captures",
              "Why it matters in Abu Dhabi"
          ],
          "rows": [
              [
                  "Tank bottom settlement survey",
                  "API 653 Annex B",
                  "Shell elevations, verticality, roundness, peaking",
                  "Sandy-soil settlement patterns on tank farms"
              ],
              [
                  "Pressure-vessel deformation",
                  "API 510",
                  "Shell profile against design geometry",
                  "Ageing refining and gas-processing fleet"
              ],
              [
                  "Piping as-builts and tie-in dimensions",
                  "API 570",
                  "Rack geometry registered to plant coordinates",
                  "Brownfield expansion without fabrication rework"
              ],
              [
                  "FPSO and jacket classification support",
                  "IACS Recommendation No. 20",
                  "Hull and topside deformation record",
                  "ABS, DNV, Lloyd's Register, Bureau Veritas surveys"
              ],
              [
                  "Sour-service alloy verification (paired scope)",
                  "NACE MR0175/MR0103; ASTM E1476",
                  "XRF PMI alongside the capture visit",
                  "H2S-service material assurance in one mobilisation"
              ]
          ],
          "note": "Delivered locally through Atlantis NDT Middle East operations; every bundle ships SHA-256 hashed with ASNT NDT Level III review."
      },
      "facets": [
          {
              "q": "Why are tank settlement surveys the signature scanning scope in Abu Dhabi?",
              "a": "Sandy soils drive tank bottom settlement, and API 653 Annex B evaluates it from shell elevation measurements — a scan captures elevations, verticality, roundness and peaking together and stays comparable campaign to campaign."
          },
          {
              "q": "Does Atlantis NDT deliver 3D scanning locally in Abu Dhabi?",
              "a": "Yes — delivery runs through Atlantis NDT's Middle East operations with on-site mobilisation in 24–72 hours and a tailored quote within 24 hours of the free consultation."
          },
          {
              "q": "How do scans support FPSO and jacket classification surveys?",
              "a": "The scan supplies the hull, topside and jacket deformation record that classification surveyors from ABS, DNV, Lloyd's Register or Bureau Veritas accept against, with IACS Recommendation No. 20 governing NDE acceptance."
          },
          {
              "q": "Can drone capture replace scaffold on flare stacks and tank roofs?",
              "a": "Yes. UAV LiDAR and photogrammetry take elevated, confined-access and structural-edge work that would otherwise need scaffold or rope access, cutting cost and inspector exposure."
          },
          {
              "q": "How is sour-service material verification paired with a scan visit?",
              "a": "XRF positive material identification per ASTM E1476 runs against NACE MR0175 and MR0103 requirements in the same mobilisation, so alloy verification and geometry capture share one site visit."
          },
          {
              "q": "What accuracy should an Abu Dhabi scan contract state?",
              "a": "Registered-network accuracy verified against targets — not the instrument datasheet figure — plus a separately stated level of development for how much geometry gets modelled."
          }
      ]
  },

  "/3d-scanning-services": {
      "answer": "A 3D scan produces a measured record of what is physically on site, not what the drawings say. It answers geometry questions: brownfield tie-in dimensions, turnaround access planning, tank settlement and out-of-roundness, as-built records where none exist. It does not measure wall thickness or find cracks — capture and NDT answer different questions. Atlantis NDT mobilises LiDAR, photogrammetry and drone crews globally.",
      "expansion": "A walkthrough model, a clash check against a proposed tie-in, an as-built drawing set and dimensional verification against design tolerance are four different jobs with four different accuracy requirements — scope the job, not the point density. Scanning earns its keep where geometry decisions are expensive: a connection area scanned before fabrication converts site rework into a shop dimension, and a pre-shutdown scan lets scaffolding, access and lift plans build against measured reality, which is where most turnaround schedule slip originates. Shell distortion, settlement and out-of-roundness are measurable from a scan faster than by manual survey and comparable campaign to campaign. Before commissioning, decide what condition data will attach to the geometry and at what resolution — the constraint on a digital twin programme is reconciling the corrosion monitoring location register, not capturing geometry, and whole-plant high-density capture before that decision is the most common overspend. If existing as-builts are trustworthy, re-scanning may change no decision.",
      "source": "USIBD Level of Accuracy (LOA) Specification, Guide C120, for capture tolerance; BIMForum Level of Development (LOD) Specification for modelling detail; API 653 Annex B and API 510 where the deliverable is settlement or deformation evaluation.",
      "table": {
          "caption": "Four scanning jobs, four accuracy requirements",
          "columns": [
              "Use case",
              "Deliverable",
              "Accuracy driver",
              "Typical method"
          ],
          "rows": [
              [
                  "Brownfield tie-in",
                  "Connection-area point cloud and dimensions",
                  "Fabrication tolerance of the new spool",
                  "Terrestrial LiDAR"
              ],
              [
                  "Turnaround planning",
                  "Walkthrough model, access and lift plans",
                  "Clash margins, not millimetres",
                  "Terrestrial and mobile LiDAR"
              ],
              [
                  "Tank and vessel geometry",
                  "Settlement, verticality, out-of-roundness",
                  "API 653 / API 510 evaluation",
                  "Terrestrial LiDAR"
              ],
              [
                  "As-built record where none exists",
                  "Revit, IFC or DWG model set",
                  "Agreed level of development, not maximised",
                  "LiDAR plus photogrammetry"
              ],
              [
                  "Surface condition documentation",
                  "Colourised mesh, orthomosaic",
                  "Image resolution, not geometry",
                  "Photogrammetry"
              ],
              [
                  "Digital twin geometry",
                  "DT-ready model bound to the CML register",
                  "CML location resolution",
                  "LiDAR, scoped per unit"
              ]
          ],
          "note": "A scan records surfaces only — no wall thickness, no cracks, nothing internal. Pair it with NDT; the scan gives geometry, the examination gives condition."
      },
      "facets": [
          {
              "q": "Does a 3D scan detect cracks or wall loss?",
              "a": "No. A scan records surfaces — it cannot measure wall thickness, find cracks or see inside anything. Reality capture and NDT are complementary: geometry from the scan, condition from the examination."
          },
          {
              "q": "When is re-scanning a waste of money?",
              "a": "When existing BIM, CAD or isometrics are trustworthy. If the as-builts already support the decision at hand, a new scan adds nothing that changes it — verify the drawings before commissioning capture."
          },
          {
              "q": "What is the most common way to overspend on reality capture?",
              "a": "Scanning an entire plant at high density before deciding what condition data attaches to the geometry. The digital twin constraint is reconciling the corrosion monitoring location register, not capturing geometry — scope the scan to units where condition data justifies it."
          },
          {
              "q": "How should a scanning contract specify accuracy and detail?",
              "a": "As two separate numbers: the USIBD Level of Accuracy specification for capture tolerance, and the BIMForum Level of Development specification for how much geometry gets modelled."
          },
          {
              "q": "Where does scanning save the most on a brownfield site?",
              "a": "Tie-ins. Scanning the connection area before fabrication catches pipework that moved during unrecorded modifications, converting a site rework into a shop dimension."
          },
          {
              "q": "Why scan before a turnaround?",
              "a": "So scaffolding, access and lift plans are built against measured reality rather than drawings — mismatches there are where most turnaround schedule slip originates."
          }
      ]
  },

  "/3d-scanning-cape-town": {
      "answer": "Atlantis NDT delivers survey-grade LiDAR, photogrammetry and drone capture in Cape Town — South Africa's gateway to deep-water energy and marine fabrication. Scopes cover FPSO conversion and drydock deformation, Saldanha steel and bulk-port structures, refinery tank settlement and municipal BIM, shipping registered point clouds and Revit or IFC as-builts, with crews mobilised within 24–72 hours through Middle East and Hyderabad operations.",
      "expansion": "Cape Town's demand centres on marine work: FPSO conversion, drydock deformation surveys and deep-water decommissioning run under IACS Recommendation No. 20 and the class rules of ABS, DNV, Lloyd's Register and Bureau Veritas, with the scan supplying the hull and topside geometry the surveyor accepts against. Refinery and terminal tank farms use API 653 Annex B settlement evaluation from shell elevations — one scan captures settlement, verticality and roundness together. Port and steel infrastructure at Saldanha and the container terminal takes structural as-builts at an agreed level of development, and heritage and municipal BIM programmes reuse the same capture chain. Drone flights over berths, tank roofs and elevated steel run under South African Civil Aviation Authority RPAS rules, replacing rope access. State registered-network accuracy and modelling detail as two separate numbers before capture — modelling, not capture, drives schedule and cost. Delivery mobilises within 24–72 hours through Atlantis NDT's Middle East and Hyderabad operations.",
      "source": "IACS Recommendation No. 20 for marine and offshore NDE acceptance; API 653 (5th Edition) Annex B for tank settlement evaluation; USIBD Level of Accuracy Specification and BIMForum Level of Development Specification; South African Civil Aviation Regulations Part 101 for RPAS operations.",
      "table": {
          "caption": "Cape Town scanning scopes by asset class",
          "columns": [
              "Asset class",
              "Scan deliverable",
              "Governing reference",
              "Method"
          ],
          "rows": [
              [
                  "FPSO conversion and drydock",
                  "Hull and topside deformation survey",
                  "IACS Recommendation No. 20; class rules",
                  "Terrestrial LiDAR plus drone"
              ],
              [
                  "Refinery and terminal tank farms",
                  "Settlement, verticality, roundness",
                  "API 653 Annex B",
                  "Terrestrial LiDAR"
              ],
              [
                  "Saldanha steel and bulk port",
                  "Structural as-builts, berth infrastructure",
                  "Owner specification; agreed LOD",
                  "LiDAR plus UAV photogrammetry"
              ],
              [
                  "Deep-water decommissioning",
                  "Dimensional record ahead of cut and lift plans",
                  "Class and project specification",
                  "Drone plus terrestrial capture"
              ],
              [
                  "Heritage and municipal BIM",
                  "Revit and IFC models",
                  "BIMForum Level of Development",
                  "Photogrammetry plus LiDAR"
              ]
          ],
          "note": "Drone flights run under SACAA RPAS rules; deliverable bundles ship SHA-256 hashed with ASNT NDT Level III review."
      },
      "facets": [
          {
              "q": "What 3D scanning work does Cape Town actually demand?",
              "a": "Marine fabrication and FPSO conversion, drydock deformation surveys, deep-water decommissioning, Saldanha steel and bulk-port structures, refinery tank settlement, and heritage and municipal BIM programmes."
          },
          {
              "q": "How are drydock and FPSO deformation surveys governed?",
              "a": "IACS Recommendation No. 20 governs NDE acceptance, layered with the class rules of ABS, DNV, Lloyd's Register or Bureau Veritas — the scan supplies the geometry record the classification surveyor accepts against."
          },
          {
              "q": "How does Atlantis NDT deliver 3D scanning in Cape Town?",
              "a": "Crews mobilise on site within 24–72 hours through Atlantis NDT's Middle East and Hyderabad operations, with every deliverable reviewed by an ASNT NDT Level III and a tailored quote within 24 hours."
          },
          {
              "q": "Can drones fly over Cape Town port and refinery sites?",
              "a": "Yes, under South African Civil Aviation Authority RPAS rules (Part 101). UAV capture takes berths, tank roofs and elevated steel that would otherwise need rope access or scaffold."
          },
          {
              "q": "What deliverable formats ship from a Cape Town scan?",
              "a": "Registered point clouds in LAS, E57, RCP or RCS; as-builts in Revit, IFC or AutoCAD DWG; deformation comparison; digital-twin-ready geometry — bundled with SHA-256 hashes and a full audit trail."
          },
          {
              "q": "What should be specified before capture starts?",
              "a": "Two separate numbers: registered-network accuracy for the tolerance downstream engineering depends on, and the level of development for how much geometry gets modelled — stated before capture, not discovered afterwards."
          }
      ]
  },

  "/ultrasonic-testing-denver": {
      "answer": "UT work in Denver concentrates on four asset bases: DJ Basin gathering and processing systems (girth-weld AUT to API 1104, ILI verification digs), the Commerce City refinery's corrosion-monitoring circuits (API 570 thickness at CMLs), mountain-west mining equipment, and Front Range aerospace hardware. Atlantis serves all four with crews mobilised to site — 24–72 hour mobilisation, ASNT Level III sign-off, tailored quote within 24 hours.",
      "expansion": "Each asset base carries its own code path. DJ Basin operators use manual shear-wave and automated UT on new girth welds to API 1104, plus direct-assessment digs that verify in-line-inspection metal-loss calls against measured wall thickness. At Commerce City, readings at established condition monitoring locations feed API 570 and API 510 remaining-life calculations across crude, vacuum and coker circuits; repair welds get shear-wave or phased array to ASME Section V, Article 4. Mining sites schedule wear-plate and chute thickness surveys plus weld examination on dragline booms and mill trunnions, typically to AWS D1.1 acceptance. Engagement follows one pattern regardless of sector: scope is defined in a free consultation, a written procedure is qualified against the governing code, technicians certified under SNT-TC-1A or ISO 9712 perform the examination on site, and an ASNT Level III signs the final disposition. There are no Atlantis premises in Denver — crews mobilise in 24–72 hours.",
      "source": "ASME Boiler and Pressure Vessel Code, Section V, Article 4 (2023 edition)",
      "table": {
          "caption": "UT work across Denver's industrial base — asset, technique, code, trigger",
          "columns": [
              "Asset base",
              "What gets examined",
              "UT technique",
              "Governing code",
              "Typical trigger"
          ],
          "rows": [
              [
                  "DJ Basin gathering & processing",
                  "New girth welds; ILI anomaly digs",
                  "AUT, manual shear wave, compression-wave thickness",
                  "API 1104",
                  "New construction; ILI verification"
              ],
              [
                  "Commerce City refining",
                  "CML thickness; repair welds",
                  "0° thickness, phased array, high-temperature UT",
                  "API 570 / API 510; ASME V Art. 4",
                  "Turnaround; on-stream monitoring"
              ],
              [
                  "Storage terminals",
                  "Shell courses, nozzle welds",
                  "Thickness scans, corrosion mapping",
                  "API 653",
                  "In-service external; out-of-service internal"
              ],
              [
                  "Mining (mountain west)",
                  "Wear plates, dragline boom welds, mill trunnions",
                  "Thickness, shear wave",
                  "AWS D1.1",
                  "Planned maintenance shutdowns"
              ],
              [
                  "Power generation",
                  "Boiler tubes, rotor bores, blade roots",
                  "Thickness campaigns, phased array",
                  "ASME V Arts. 4–5",
                  "Outage windows"
              ],
              [
                  "Front Range aerospace",
                  "Machined parts, bonded structure",
                  "Contact and immersion UT",
                  "Customer spec; NAS 410 / EN 4179 personnel",
                  "Production and receiving inspection"
              ]
          ],
          "note": "Code and edition are agreed before mobilisation and recorded against each examination. Delivery is a mobilised-crew model — no local premises implied."
      },
      "facets": [
          {
              "q": "Which code governs UT on DJ Basin pipeline girth welds?",
              "a": "API 1104 governs girth-weld examination on new pipeline construction in the DJ Basin, with AUT or manual shear wave performed to a procedure qualified against the agreed edition; in-service metal-loss digs are evaluated against the operator's integrity-management basis."
          },
          {
              "q": "Can ILI metal-loss calls be verified by UT in Denver?",
              "a": "Yes. Direct-assessment digs use compression-wave thickness and corrosion mapping to confirm the depth and extent of anomalies reported by in-line inspection, giving the pipeline operator measured wall values at the reported locations."
          },
          {
              "q": "Who signs the final disposition on a Denver UT examination?",
              "a": "An ASNT NDT Level III reviews and signs every disposition. Technicians performing the work are certified under SNT-TC-1A or ISO 9712, with instrument and reference-block calibration traceable under ISO 17025."
          },
          {
              "q": "Does Atlantis operate a local office in Denver?",
              "a": "No. Delivery is a mobilised-crew model — inspectors, qualified procedures and calibrated equipment arrive at the site in 24–72 hours, matched to the scope. For planned inspection work the crew-to-site arrangement is usually the better one anyway."
          },
          {
              "q": "How does Denver refinery thickness data get used?",
              "a": "Readings taken at established condition monitoring locations feed API 570 and API 510 remaining-life and next-inspection-interval calculations, keeping corrosion trends continuous between turnaround campaigns at Commerce City and similar units."
          },
          {
              "q": "How do I engage Atlantis for UT work in Denver?",
              "a": "Request a free 30-minute consultation; scope, governing code and delivery model are agreed and a tailored quote returns within 24 hours. Atlantis publishes no pricing — affordable, accessible, fully customizable, quote on request."
          }
      ]
  },

  "/ultrasonic-testing-detroit": {
      "answer": "Detroit UT demand comes from automotive stamping and powertrain plants (press frames, crane runway welds, tooling), the downriver steel mills, refinery corrosion-monitoring circuits (API 570/510 thickness at CMLs), the regional power fleet, and structural fabrication. Atlantis performs this work with crews mobilised to the plant — written procedure, SNT-TC-1A or ISO 9712 technicians, ASNT Level III disposition — quoted within 24 hours.",
      "expansion": "Automotive plants schedule UT inside planned line shutdowns because press downtime, not inspection time, is the constraint — press frames, crane runway welds and lifting equipment are examined by shear wave to AWS D1.1 and D14.1 acceptance. The downriver steel mills add roll journals, mill housings and caster components on roll-shop and outage cycles. Refinery scope follows API 570 and API 510: compression-wave thickness at established condition monitoring locations feeds remaining-life calculation, with phased array on repair welds to ASME Section V, Article 4. Power-generation work runs boiler-tube thickness campaigns in outage windows. The engagement pattern is identical across sectors: scope defined in a free consultation, a written procedure qualified against the governing code and edition, technicians certified under SNT-TC-1A or ISO 9712, and an ASNT Level III signing the final disposition. Findings can land as work orders in SAP PM, Maximo or ServiceNow. Crews mobilise to the plant in 24–72 hours — there are no Atlantis premises in Detroit.",
      "source": "AWS D1.1/D1.1M:2020, Structural Welding Code — Steel",
      "table": {
          "caption": "UT work across Detroit's industrial base — asset, technique, code, window",
          "columns": [
              "Asset base",
              "What gets examined",
              "UT technique",
              "Governing code",
              "Scheduling window"
          ],
          "rows": [
              [
                  "Automotive stamping & assembly",
                  "Press frames, crane runway welds, lifting equipment",
                  "Shear wave, straight-beam thickness",
                  "AWS D1.1; AWS D14.1",
                  "Planned line shutdowns, holiday outages"
              ],
              [
                  "Steel mills (downriver)",
                  "Roll journals, mill housings, caster components",
                  "Straight-beam, shear wave",
                  "AWS D1.1 / D14.1; mill specification",
                  "Roll-shop cycles; scheduled outages"
              ],
              [
                  "Refining",
                  "CML thickness, repair welds",
                  "0° thickness, phased array, high-temperature UT",
                  "API 570 / API 510; ASME V Art. 4",
                  "Turnaround; on-stream monitoring"
              ],
              [
                  "Power generation",
                  "Boiler tubes, headers, drums",
                  "Thickness campaigns, shear wave",
                  "ASME Section V Arts. 4–5",
                  "Outage windows"
              ],
              [
                  "Structural fabrication",
                  "CJP groove welds, bridge and building steel",
                  "Shear wave per contract documents",
                  "AWS D1.1 / D1.5",
                  "Fabrication QA and erection"
              ]
          ],
          "note": "Code and edition are agreed before mobilisation and recorded against each examination. Delivery is a mobilised-crew model — no local premises implied."
      },
      "facets": [
          {
              "q": "Which welding codes cover UT in a Detroit automotive plant?",
              "a": "AWS D1.1 governs structural welds such as press frames and building steel; AWS D14.1 covers industrial and mill cranes and material-handling equipment — the crane runway and hoist scope that dominates plant maintenance UT."
          },
          {
              "q": "Can UT crews work inside a planned line shutdown in Detroit?",
              "a": "Yes. Crews mobilise in 24–72 hours and are scheduled to the shutdown window, because press and line downtime — not examination time — is the constraint automotive maintenance planners actually manage."
          },
          {
              "q": "What refinery UT scope does Atlantis run in Detroit?",
              "a": "Compression-wave thickness at established condition monitoring locations feeding API 570 and API 510 remaining-life calculation, plus shear-wave and phased-array examination of repair welds to ASME Section V, Article 4."
          },
          {
              "q": "Who certifies the technicians on Detroit UT work?",
              "a": "Technicians are certified under ASNT SNT-TC-1A or ISO 9712 for the method and level, instruments and reference blocks carry ISO 17025-traceable calibration, and an ASNT NDT Level III signs the final disposition."
          },
          {
              "q": "Can Detroit findings feed our maintenance system?",
              "a": "Yes. Results can be delivered as notifications or work orders into SAP PM, Oracle eAM, IBM Maximo or ServiceNow, or onto a 3D asset model where remaining life and inspection ranking update as new data arrives."
          },
          {
              "q": "Does Atlantis have premises in Detroit?",
              "a": "No. Delivery is a mobilised-crew model: the crew, qualified procedures and calibrated equipment arrive matched to the scope. Scope and governing code are agreed at quotation, and a tailored quote returns within 24 hours."
          }
      ]
  },

  "/penetrant-testing-toronto": {
      "answer": "Toronto PT work splits four ways: nuclear-fleet support components under CSA N285/N286 programmes, automotive castings and machined safety parts on fluorescent lines controlled per ASTM E1417, stainless and alloy fab-shop welds that magnetic particle cannot examine, and rail-overhaul scope such as axle journals. Personnel carry CGSB certification where Ontario acceptance requires it; ASME Section V, Article 6 governs technique. Quotes return within 24 hours.",
      "expansion": "Ontario statutory pressure equipment registers under CSA B51 and operates under TSSA jurisdiction, so PT on registered vessels and piping follows ASME Section V, Article 6 with acceptance criteria taken from the referencing construction code. Nuclear-adjacent scope adds CSA N285/N286 programme compliance and site security clearances whose lead times run to weeks — which is why nuclear work is scoped early, at quotation. Automotive fluorescent lines run under ASTM E1417 process control, with bath sensitivity verified against known-defect panels so production-rate examination stays honest. Fabrication shops use visible dye at the bench for stainless and alloy pressure-part welds and fluorescent where the component class demands it; rail workshops apply PT to axle journals, aluminium body repairs and stainless brake components during overhaul cycles. Technicians carry CGSB certification where Ontario acceptance requires it, ASNT-scheme otherwise, and an ASNT Level III signs every disposition. Crews mobilise to site — Atlantis holds no Toronto premises.",
      "source": "ASME Boiler and Pressure Vessel Code, Section V, Article 6 (2023 edition)",
      "table": {
          "caption": "PT work across the Greater Toronto industrial base — sector, scope, technique, governing documents",
          "columns": [
              "Sector",
              "Components examined",
              "Technique",
              "Governing documents",
              "Access note"
          ],
          "rows": [
              [
                  "Nuclear fleet support (Bruce, Pickering, Darlington)",
                  "Repair excavations, stainless welds, balance-of-plant",
                  "Fluorescent in shops; visible dye at the machine",
                  "CSA N285 / N286; ASME V Art. 6",
                  "Security clearances — weeks of lead time"
              ],
              [
                  "Automotive plants",
                  "Non-ferrous castings, machined safety components",
                  "Fluorescent at production rate",
                  "ASTM E1417 process control",
                  "Scheduled around production shifts"
              ],
              [
                  "Fabrication shops",
                  "Stainless and alloy pressure-part welds, food/pharma finishes",
                  "Visible dye at bench; fluorescent by class",
                  "ASME V Art. 6; ASTM E165; ISO 3452 series",
                  "Shop access straightforward"
              ],
              [
                  "Rail workshops",
                  "Axle journals, aluminium body repairs, stainless brake parts",
                  "Visible and fluorescent",
                  "Client overhaul specification; ASME V Art. 6",
                  "Overhaul cycle windows"
              ],
              [
                  "Statutory pressure equipment",
                  "Registered vessel and piping welds",
                  "Per referencing construction code",
                  "CSA B51 registration; TSSA jurisdiction",
                  "Code edition agreed pre-mobilisation"
              ]
          ],
          "note": "Acceptance criteria always come from the referencing construction code, not the method standard. Delivery is a mobilised-team model — no local premises implied."
      },
      "facets": [
          {
              "q": "What personnel certification does Toronto PT work carry?",
              "a": "CGSB certification is the standard Ontario credential and is provided where the client's acceptance basis requires it; ASNT SNT-TC-1A or ISO 9712 certification applies otherwise, and an ASNT NDT Level III signs every final disposition."
          },
          {
              "q": "Which standards govern the PT technique itself in Toronto?",
              "a": "ASME Section V, Article 6, ASTM E165 and E1417, and the ISO 3452 series govern technique; acceptance criteria come from the referencing construction code for the component being examined."
          },
          {
              "q": "How long does nuclear site access take in Ontario?",
              "a": "Security clearances and CSA N285/N286 programme requirements carry lead times measured in weeks, so nuclear-adjacent PT scope is confirmed at quotation stage rather than assumed into the schedule."
          },
          {
              "q": "Why PT rather than MT on Toronto fabrication work?",
              "a": "Stainless steel, nickel alloy and aluminium are non-magnetic, so magnetic particle testing cannot examine them. Penetrant testing clears that scope — pressure-part welds, machined components and food-and-pharma finishes — that MT physically cannot touch."
          },
          {
              "q": "What evidence arrives with a Toronto PT report?",
              "a": "The audit bundle: technician certification current on the day, penetrant-system process-control and calibration status, and the procedure revision in force — plus indications located against the component, so the disposition can be reconstructed later."
          },
          {
              "q": "Does Atlantis keep a Toronto office?",
              "a": "No. Penetrant teams mobilise to the site under Atlantis procedures with ASNT Level III oversight — for planned inspection work the crew, consumables and procedures arriving matched to scope is usually the better arrangement anyway."
          }
      ]
  },

  "/3d-scanning-louisville": {
      "answer": "Point-cloud scanning in Louisville serves four workloads: as-built capture of Rubbertown chemical-corridor units ahead of revamps, tank-settlement and shell-deformation surveys at Ohio River terminal tank farms evaluated under API 653 Annex B, dimensional control for automotive and appliance plant retooling, and distillery infrastructure — rickhouses, cookers, fermenters. Atlantis mobilises scan crews in 24–72 hours; deliverables land as registered E57/RCP clouds or Revit/IFC models.",
      "expansion": "Revamp scanning in the Rubbertown chemical corridor replaces manual field verification: a registered point cloud at low-millimetre network accuracy lets the design contractor route new piping against actual rack geometry instead of drawings that stopped matching the plant years ago. Terminal tank farms along the Ohio River use external LiDAR to capture shell profile and bottom-edge settlement without taking the tank out of service, with the survey evaluated under API 653 Annex B. Automotive and appliance plants scan press lines and conveyor envelopes ahead of retooling so new equipment checks fit before installation week. Distilleries document rickhouse rack structures, cookers and fermenters — both as condition baselines and as inputs to expansion design. Every engagement starts by fixing the deliverable specification — point density, level of detail, formats — before capture, because that decision drives cost more than field time does. Capture typically runs days; registration accuracy is reported with the deliverable. Crews mobilise in 24–72 hours.",
      "source": "API Standard 653, Fifth Edition, Annex B (tank bottom settlement evaluation)",
      "table": {
          "caption": "Point-cloud scanning workloads across Louisville's industrial base",
          "columns": [
              "Workload",
              "Assets",
              "Capture method",
              "Deliverable",
              "Used for"
          ],
          "rows": [
              [
                  "Chemical revamp as-builts (Rubbertown corridor)",
                  "Process units, pipe racks",
                  "Multi-station terrestrial LiDAR",
                  "Registered E57/RCP cloud; Revit/IFC model",
                  "Design verification, clash avoidance"
              ],
              [
                  "Terminal tank farms (Ohio River)",
                  "AST shells and roofs",
                  "LiDAR; drone for roofs",
                  "Shell profile, settlement plot",
                  "API 653 Annex B settlement evaluation"
              ],
              [
                  "Automotive & appliance retooling",
                  "Press lines, conveyors, building steel",
                  "LiDAR dimensional control",
                  "Scan-to-CAD comparison",
                  "Tooling fit-up before installation"
              ],
              [
                  "Distillery infrastructure",
                  "Rickhouses, cookers, fermenters, warehouses",
                  "LiDAR plus photogrammetry",
                  "Structural documentation, as-builts",
                  "Condition baseline, expansion design"
              ],
              [
                  "Port & bridge infrastructure",
                  "Docks, terminals, clearance envelopes",
                  "LiDAR, drone",
                  "Deformation versus prior scan",
                  "Asset-integrity monitoring"
              ]
          ],
          "note": "Registration accuracy of the network — not the instrument's single-scan specification — is reported with every deliverable; bundles ship SHA-256 hashed with a full audit trail."
      },
      "facets": [
          {
              "q": "What accuracy does a Louisville point-cloud survey deliver?",
              "a": "Low-millimetre registered network accuracy across a typical plant area. The number that matters is the registered network, not the instrument's single-scan spec, and any tolerance the downstream engineering depends on is stated before capture."
          },
          {
              "q": "Can a scan support an API 653 tank settlement evaluation?",
              "a": "Yes. External LiDAR captures shell profile and bottom-edge elevation with the tank in service, and the survey is evaluated under API 653 Annex B — the settlement-evaluation annex — with results feeding the tank's inspection record."
          },
          {
              "q": "Which formats do Louisville scan deliverables ship in?",
              "a": "Registered point clouds in LAS, E57, RCP or RCS; as-built models in Revit, IFC, AutoCAD DWG or MicroStation at an agreed level of detail; deformation comparisons; and digital-twin-ready geometry — all SHA-256 hashed with an audit trail."
          },
          {
              "q": "How long is a scan crew on site in Louisville?",
              "a": "Capture is the short part — a typical process unit scans in days, not weeks. Registration, QC and as-built modelling scale with the requested level of detail, which is the single biggest lever on both cost and schedule."
          },
          {
              "q": "Does Atlantis have a Louisville office?",
              "a": "No. Scan crews mobilise to the site in 24–72 hours with the deliverable specification — density, level of detail, formats — agreed before capture. Free 30-minute consultation; tailored quote within 24 hours."
          },
          {
              "q": "Should we scan the whole Louisville plant or one unit?",
              "a": "Start with the units where condition data justifies it. The most common way to overspend on reality capture is scanning an entire plant at high density before deciding what data will actually attach to the geometry."
          }
      ]
  },

  "/3d-scanning-florida": {
      "answer": "Florida scanning work concentrates on fuel-terminal tank farms at Tampa, Port Everglades and Jacksonville — settlement and shell-deformation surveys evaluated under API 653 Annex B — phosphate and fertilizer plant as-builts in the central-Florida corridor, port and terminal infrastructure, and structural documentation supporting coastal condominium milestone inspections. Atlantis mobilises statewide in 24–72 hours; deliverables are registered point clouds and Revit/IFC as-builts.",
      "expansion": "Tank farms at Tampa, Port Everglades and Jacksonville sit on soft coastal soils, which makes settlement the live integrity question: external LiDAR captures shell profile and bottom-edge elevation while the tank stays in service, drones cover roofs without scaffold, and the survey is evaluated under API 653 Annex B. The central-Florida phosphate corridor generates as-built and deformation work on aging process structures. Since 2022, Florida's milestone structural inspection law (SB 4-D) has required engineer-led inspections of coastal condominiums as they age; scanning gives the engineer of record measurable facade and frame geometry and a repeatable baseline for the next cycle. Space Coast launch-support structures add dimensional-control scope. The engagement pattern is uniform: deliverable specification — density, level of detail, formats — fixed before capture, registration accuracy reported with the deliverable, and geometry prepared for digital-twin ingestion where the scan feeds an integrity programme. Crews mobilise statewide in 24–72 hours; Atlantis holds no Florida premises.",
      "source": "API Standard 653, Fifth Edition, Annex B (tank bottom settlement evaluation)",
      "table": {
          "caption": "3D scanning workloads across Florida's industrial base",
          "columns": [
              "Workload",
              "Region",
              "Assets",
              "Capture method",
              "Output / use"
          ],
          "rows": [
              [
                  "Fuel-terminal tank farms",
                  "Tampa, Port Everglades, Jacksonville",
                  "AST shells and roofs",
                  "LiDAR; drone for roofs",
                  "API 653 Annex B settlement evaluation"
              ],
              [
                  "Phosphate & fertilizer plants",
                  "Central Florida",
                  "Process structures, materials handling",
                  "LiDAR, UAV",
                  "As-builts; deformation versus prior scan"
              ],
              [
                  "Condominium milestone inspections",
                  "Coastal, statewide",
                  "Facades, balconies, structural frames",
                  "LiDAR plus photogrammetry",
                  "Measurable baseline for the engineer of record"
              ],
              [
                  "Ports & terminals",
                  "Miami, Everglades, Tampa, Jacksonville",
                  "Docks, cranes, clearance envelopes",
                  "LiDAR, drone",
                  "Deformation monitoring, expansion design"
              ],
              [
                  "Space Coast infrastructure",
                  "Cape Canaveral corridor",
                  "Launch-support and processing structures",
                  "LiDAR dimensional control",
                  "Fit-up and modification design"
              ],
              [
                  "Power generation",
                  "Statewide",
                  "Turbine halls, boiler structures",
                  "LiDAR",
                  "Outage planning, retrofit as-builts"
              ]
          ],
          "note": "Crews mobilise statewide from national capture teams; registration accuracy of the network is reported with every deliverable — no local premises implied."
      },
      "facets": [
          {
              "q": "Can tank settlement be scanned while the tank stays in service?",
              "a": "Yes. External LiDAR captures shell profile and bottom-edge elevation without taking the tank down, drones cover the roof without scaffold, and the survey is evaluated under API 653 Annex B for the tank's inspection record."
          },
          {
              "q": "What drives condominium scanning demand in Florida?",
              "a": "Florida's 2022 milestone structural inspection law (SB 4-D) requires engineer-led inspections of coastal condominiums as they age. Scanning gives the engineer of record measurable facade and frame geometry and a repeatable baseline for the next inspection cycle."
          },
          {
              "q": "Which Florida regions does Atlantis cover for scanning?",
              "a": "Statewide on a mobilised model — Tampa, Port Everglades, Jacksonville and Miami terminals, the central-Florida phosphate corridor, the Space Coast and power sites — with crews arriving in 24–72 hours rather than from local premises."
          },
          {
              "q": "What deliverable formats are provided on Florida scans?",
              "a": "Registered point clouds in LAS, E57, RCP or RCS; as-built models in Revit, IFC, AutoCAD DWG or MicroStation at an agreed level of detail; deformation comparisons; and digital-twin-ready geometry, shipped as SHA-256 hashed bundles."
          },
          {
              "q": "How fast can a scan crew reach a Florida site?",
              "a": "On-site mobilisation runs 24–72 hours. Scope, access constraints and the deliverable specification are agreed in a free 30-minute consultation, and a tailored quote returns within 24 hours — pricing on request only."
          },
          {
              "q": "How is accuracy reported on a Florida scan?",
              "a": "As the accuracy of the registered network across the surveyed area — reported with the deliverable — not the instrument manufacturer's single-scan specification. Any tolerance the downstream engineering depends on is stated before capture."
          }
      ]
  },

  "/blog/nas-410-aerospace-ndt-certification-explained": {
      "answer": "NAS 410 Rev 5 (2021) is the aerospace NDT personnel-certification standard published by the Aerospace Industries Association and administered through NANDTB. Every major US prime — Boeing, Lockheed Martin, Northrop Grumman, GE Aviation, SpaceX — and the DoD require it. Europe's equivalent is EN 4179; the two are mutually recognized by formal industry agreement. Recertification runs every five years with an annual eye test.",
      "expansion": "Certification is employer-based: NAS 410 §5 requires a Written Practice naming the certifying Level III, training records, OJT logs, exam administration and the eye-test schedule, and primes audit it every recertification cycle. Level I performs under written instructions and cannot interpret or sign off — Table 1 training hours run 40 for UT, RT and ET, 12 for MT, 8 for PT and VT. Level II adds 40+ training hours and 1,200–2,000 OJT hours per method, interprets, signs off and certifies Level I. Level III approves procedures, writes the Written Practice and must pass the ASNT or NANDTB-administered Level III exam — employer-graded exams are not accepted at Level III. §7.7 mandates an annual Jaeger J1 near-vision test at 12 inches plus color perception; an expired eye test suspends the inspector automatically. Boeing layers NDT 2 Pri-Lev1 D1-9000 procedural training on top, and Lockheed, Pratt & Whitney and GE maintain equivalent overlays.",
      "source": "NAS 410, Revision 5 (2021), Aerospace Industries Association, administered via the National Aerospace NDT Board (NANDTB); EN 4179 for European primes under EASA Part 21/145; FAA AC 65-31B for repair-station NDT personnel.",
      "table": {
          "caption": "NAS 410 certification levels — authority, training hours, and examination path",
          "columns": [
              "Level",
              "Authority",
              "Training hours (Table 1)",
              "OJT hours",
              "Exam administered by"
          ],
          "rows": [
              [
                  "Level I",
                  "Performs under written instructions; sets up equipment, records data; no interpretation or sign-off",
                  "40 UT / 40 RT / 40 ET / 12 MT / 8 PT / 8 VT",
                  "Per method per Table 1",
                  "Employer's NANDTB-listed Level III"
              ],
              [
                  "Level II",
                  "Performs, interprets, signs off; certifies Level I; drafts technique sheets under Level III supervision",
                  "40+ beyond Level I",
                  "1,200–2,000 per method",
                  "Employer's NANDTB-listed Level III"
              ],
              [
                  "Level III",
                  "Approves procedures; certifies Level I/II; writes the Written Practice; represents employer to NANDTB",
                  "Per method history and Written Practice",
                  "—",
                  "ASNT or NANDTB Level III exam plus employer practical"
              ]
          ],
          "note": "Recertification every 5 years per §9; a gap over 1 year in the method forces re-examination per §9.3. The annual §7.7 eye test (Jaeger J1 at 12 in., Ishihara color) suspends the inspector on lapse until retested."
      },
      "facets": [
          {
              "q": "Is NAS 410 the same as SNT-TC-1A?",
              "a": "No. SNT-TC-1A is the employer-based recommended practice for general industry — refineries, power, pipelines. NAS 410 is aerospace-specific with a stricter eye test, NANDTB-graded Level III exams instead of employer-graded, deeper Level III oversight and a fixed five-year recertification cycle. Both share the Level I/II/III structure, but SNT-TC-1A inspectors are not automatically accepted on aerospace contracts."
          },
          {
              "q": "How do I get NAS 410 certified?",
              "a": "Through an aerospace employer. The employer's Written Practice plus its NANDTB-listed Level III certify you — independent certification without an employer sponsor is not the path. An existing SNT-TC-1A Level II gets no automatic conversion: the Level III can credit prior training hours and OJT, but you must still complete NAS 410-specific employer training and pass the exam the employer's Level III administers."
          },
          {
              "q": "How does NAS 410 differ from EN 4179?",
              "a": "They are formally cross-recognized. EN 4179 is the European aerospace standard referenced by EASA Part 21 and Part 145, used by Airbus, Safran, MTU, Leonardo and BAE Systems; NAS 410 covers US primes. The US and European aerospace industry associations jointly declare equivalency, so a certificate under one is accepted by the other after a paperwork check — though the receiving prime can require local-language exam coverage and country-specific procedure review."
          },
          {
              "q": "What does the NAS 410 §7.7 eye test require?",
              "a": "Annually: near-vision acuity reading Jaeger J1 letters at 12 inches (305 mm), one eye at a time, wearing the same corrective lenses used during inspection; color perception via Ishihara plates identifying red, green, blue and yellow, with a special color test for fluorescent UV work. The record lives in the personnel file — an expired eye test suspends the inspector from all NDT work until retested."
          },
          {
              "q": "What is Boeing's NDT 2 Pri-Lev1 requirement?",
              "a": "A Boeing overlay above NAS 410. Boeing's D1-9000 quality specification requires inspectors to hold NAS 410 certification and complete Boeing-specific procedural training in the D1-1000-series documents for the parts they inspect. Other primes run equivalent layers — Lockheed's LM Aero Quality Notes, Pratt & Whitney's PWA documents, GE Aviation's GE-AS plant specifications — so NAS 410 alone does not clear you onto a prime's hardware."
          },
          {
              "q": "Is NAS 410 required for FAA repair stations?",
              "a": "FAA AC 65-31B references NAS 410 as the standard for repair-station NDT personnel, and Part 145 maintenance organizations comply with NAS 410 — or EN 4179 outside the US. State and military overlays add further requirements on top. Aerospace certification also pays: the premium over general-industry SNT-TC-1A work for the same method and level runs 15–30%."
          }
      ]
  },

  "/blog/ut-vs-rt-comparison": {
      "answer": "Choose ultrasonic testing (UT) for weld inspection when you need defect depth and through-thickness sizing: probability of detection runs 80-95% versus 70-90% for radiographic testing (RT), results are immediate, and no radiation controls apply. Choose RT when the governing code requires a radiographic record. Phased array UT (PAUT) replaces RT on most weld inspections; the two remain complementary.",
      "expansion": "UT and RT measure different physics, which decides the choice. UT reads acoustic reflections, so it sizes defect depth precisely and excels on planar defects — cracks and lack of fusion — where probability of detection reaches 80-95%. RT records density differences on a 2D image, so it excels on volumetric defects like porosity and slag, with 70-90% POD and poor depth information. Safety and speed favor UT: results are immediate and no ionizing radiation is involved, while RT demands licensed operators, controlled exclusion areas, exposure time, and film or DR/CR processing. Code coverage exists for both: AWS D1.1 and ASME BPVC Section V provide UT and RT paths for welds, API 1104 governs pipeline girth welds, and ISO 17640 and ISO 17636 cover UT and RT of welds internationally. PAUT replaces RT on most weld inspections; where a code names RT explicitly, shoot RT. An ASNT Level III makes the final method selection.",
      "source": "ASME Boiler and Pressure Vessel Code, Section V (2023 edition); AWS D1.1/D1.1M Structural Welding Code — Steel; API 1104; ISO 17640; ISO 17636",
      "table": {
          "caption": "UT vs RT for weld inspection — decision by criterion",
          "columns": [
              "Criterion",
              "Ultrasonic Testing (UT)",
              "Radiographic Testing (RT)"
          ],
          "rows": [
              [
                  "Probability of detection",
                  "80-95%",
                  "70-90%"
              ],
              [
                  "Best defect types",
                  "Planar — cracks, lack of fusion",
                  "Volumetric — porosity, slag inclusions"
              ],
              [
                  "Depth information",
                  "Direct through-thickness sizing",
                  "Poor — 2D projection only"
              ],
              [
                  "Permanent record",
                  "Encoded PAUT scan data",
                  "2D film or digital image"
              ],
              [
                  "Safety burden",
                  "None — sound waves",
                  "Ionizing radiation: licensed operators, controlled areas"
              ],
              [
                  "Speed to result",
                  "Immediate, on-screen",
                  "Setup, exposure, film or DR/CR processing"
              ],
              [
                  "Governing weld codes",
                  "AWS D1.1, ASME BPVC Section V, ISO 17640",
                  "ASME BPVC Section V, API 1104, ISO 17636"
              ]
          ],
          "note": "PAUT replaces RT on most weld inspections; where the contract or code names RT explicitly, RT is shot. The methods are complementary on critical welds."
      },
      "facets": [
          {
              "q": "Which method has higher probability of detection for weld defects?",
              "a": "UT detects 80-95% of weld defects versus 70-90% for RT. The gap widens on planar defects: tight cracks and lack of fusion reflect sound strongly but produce weak radiographic contrast unless the beam aligns with the defect plane. RT closes the gap on volumetric defects — porosity and slag inclusions image clearly on film or digital detectors."
          },
          {
              "q": "Can PAUT replace RT for code weld inspection?",
              "a": "For most weld inspections, yes — phased array UT delivers sizing, depth and an encoded permanent record that satisfies the ultrasonic acceptance paths in AWS D1.1 and ASME BPVC Section V. Some codes and client specifications still name RT explicitly; where the contract says radiography, shoot radiography. The two methods are complementary, and many critical welds get both."
          },
          {
              "q": "Why is UT safer than RT on an active site?",
              "a": "UT uses sound waves — no ionizing radiation, no exclusion zones, no licensed radiographers, and other trades keep working alongside the inspector. RT requires licensed operators, controlled areas, radiation monitoring and safety equipment, and on congested sites the exposure window pushes radiography into night shifts, which adds cost and schedule pressure before a single image is produced."
          },
          {
              "q": "Which is faster, UT or RT?",
              "a": "UT is faster. Results appear on the instrument screen during scanning, so a weld is dispositioned on the spot. RT stacks setup, area clearance, exposure time, and film processing or DR/CR scanning before anyone sees an image — and repair-and-reshoot cycles multiply that delay. On schedule-critical tie-ins, the immediacy of UT is the deciding factor as much as the physics."
          },
          {
              "q": "What does each method show about defect depth?",
              "a": "UT measures depth directly: time-of-flight converts to through-thickness position, so a crack is sized and located in all three dimensions for fitness-for-service decisions. RT produces a 2D projection — defect length and position in the plane of the film are clear, but depth information is poor without multiple angled exposures. When an engineer asks how deep, the answer comes from UT."
          },
          {
              "q": "What certification do UT and RT technicians need?",
              "a": "In the US, ASNT UT Level II or RT Level II under the employer's SNT-TC-1A written practice signs routine inspection reports. RT adds a radiation-safety layer on top of method certification — licensed operators and regulatory compliance for source handling. An ASNT Level III approves the procedures both methods run against and selects the method or combination for each application."
          }
      ]
  },

  "/blog/heat-exchanger-tube-inspection-methods-procedures": {
      "answer": "Eddy current testing is the primary method for heat exchanger tube inspection in US plants: a bobbin probe screens the full bundle, rotating pancake coils map suspect tubes, and UT confirms wall loss at flagged locations. Tube walls run 0.7–4 mm. Pits read by ECT extend 20–50% deeper than the signal amplitude suggests, so confirmation before plugging decisions is mandatory.",
      "expansion": "The inspection sequence runs probe selection, calibration, systematic bundle coverage, then confirmation. Bobbin coils give fast full-length wall assessment on nonferromagnetic tubes; rotating pancake coils resolve circumferential position and defect morphology; ferromagnetic tubes and support-plate zones move to array eddy current or ACFM. Calibration runs on tube standards carrying artificial defects at the acceptance threshold — 50 percent wall-loss pits — and the procedure must hold false calls below 5 percent. Multi-frequency acquisition separates damage depths: 200 kHz and above reads the surface, 10–50 kHz penetrates the wall, and phase analysis classifies pitting against uniform thinning against cracking. UT thickness follows at every flagged location plus reference zones, because corrosion-rate arithmetic needs a quantitative wall number ECT does not supply. Tubes holding design minimum thickness with rates below 0.5 mm/year continue unrestricted; tubes below 80 percent of design thickness come out within 6–12 months unless API 579-1/ASME FFS-1 assessment supports continued service.",
      "source": "ASME BPVC Section V, Articles 4 and 8; ASME BPVC Section VIII, Division 1; API 579-1/ASME FFS-1 (2021 Edition); ASTM E494; EPRI heat exchanger tube NDE guidance",
      "table": {
          "caption": "Heat exchanger tube damage — mechanism, probe, and confirmation step",
          "columns": [
              "Damage mechanism",
              "Where it concentrates",
              "Primary probe",
              "Confirmation"
          ],
          "rows": [
              [
                  "Uniform corrosion",
                  "Full tube length; admiralty brass at 0.1–0.3 mm/year in untreated cooling water",
                  "Bobbin coil, full-bundle screen",
                  "UT wall thickness at flagged and reference zones for rate calculation"
              ],
              [
                  "Pitting and crevice corrosion",
                  "Under deposits; stainless above the critical pitting temperature in chlorides",
                  "Rotating pancake coil, multi-frequency",
                  "UT or pulled-tube metallurgy — pits run 20–50% deeper than the ECT amplitude suggests"
              ],
              [
                  "Erosion-corrosion",
                  "Tube inlets; copper-nickel in seawater above 2.4 m/s",
                  "Bobbin coil plus borescope",
                  "RVI confirms flow-aligned grooving; hold design velocity at 1.2–2.0 m/s"
              ],
              [
                  "Stress corrosion cracking",
                  "Ammonia SCC in brass and copper-nickel; chloride SCC in austenitic stainless; initiates at 20–50% of yield",
                  "Multi-frequency ECT with phase analysis",
                  "Defect classification by frequency-dependent phase and amplitude"
              ],
              [
                  "MIC and fouling",
                  "Biofilm and deposit sites creating oxygen-starved crevices",
                  "ECT plus remote visual for deposit mapping",
                  "Clean when fouling passes 5% efficiency loss; re-inspect underneath"
              ],
              [
                  "Support-plate and ferromagnetic zones",
                  "Tube-to-support contact points",
                  "Array eddy current or ACFM",
                  "Bobbin signal is masked by the plate — specialized technique required"
              ]
          ],
          "note": "Uniform corrosion and pitting cause roughly 60% of tube failures, SCC another 15% — bobbin screening plus pancake-coil follow-up covers the dominant population. Condenser bundles in US power plants rerun every 12–24 months."
      },
      "facets": [
          {
              "q": "How often should heat exchanger tube bundles be inspected?",
              "a": "Aggressive services run 12-month intervals; carbon steel bundles in petrochemical service run 3–5 years and alloy bundles 5–7. Power plant condensers, hammered by cooling-water fouling, rerun every 12–24 months during outages. The interval must land before any tube reaches minimum acceptable thickness at the documented corrosion rate — a 2.5 mm tube with a 1.2 mm limit corroding at 0.3 mm/year gets a 2–3 year interval."
          },
          {
              "q": "Can a tube below design minimum thickness stay in service?",
              "a": "Yes, with API 579-1/ASME FFS-1 fitness-for-service assessment on measured wall thickness and a documented corrosion rate. Level 2 assessment extends life when the rate is documented below 0.2 mm/year; operation at 80 percent of design minimum is supportable with stable or declining rates. Extension carries conditions — reduced operating pressure or shortened inspection intervals to monitor continued degradation."
          },
          {
              "q": "Why do ECT pit-depth calls need ultrasonic confirmation?",
              "a": "Eddy current amplitude correlates with pit depth but is bent by pit shape, orientation, and surrounding corrosion — a pit runs 20–50 percent deeper than the signal suggests. UT wall-thickness measurement at the flagged location, or metallurgy on pulled tubes, supplies the true depth. Correlation studies on tubes from your own service are the defensible basis for converting ECT amplitude into plugging decisions."
          },
          {
              "q": "Which probe handles ferromagnetic tubes and support-plate zones?",
              "a": "Bobbin coils lose sensitivity where ferromagnetic tube support plates dominate the signal, and ferromagnetic tube alloys defeat conventional ECT entirely. Array eddy current and alternating current field measurement (ACFM) recover those zones. The probe lineup: bobbin for full-bundle wall screening, rotating pancake coils for high-resolution defect mapping, encircling coils for fast scanning — chosen by tube material, wall thickness, and the defect of concern."
          },
          {
              "q": "How is an eddy current procedure validated for a new exchanger design?",
              "a": "Demonstrate on calibration standards carrying artificial defects of known size — pit depths at the critical acceptance threshold of 50 percent wall loss. The demonstration must show consistent detection of critical defects with false-call rates under 5 percent, across multiple operators and instruments. Documentation of block specifications, thresholds, and demonstration data is what makes the procedure defensible at audit."
          },
          {
              "q": "What actually breaks heat exchanger tubes most often?",
              "a": "Uniform corrosion and pitting cause roughly 60 percent of tube failures. Stress corrosion cracking adds 15 percent — ammonia SCC in copper alloys, chloride SCC in austenitic stainless, initiating at 20–50 percent of yield strength. Erosion-corrosion and fouling-driven damage cover the remainder; copper-nickel condenser tubes erode in seawater above 2.4 m/s. Root-cause analysis of your own failure history sets the inspection emphasis."
          }
      ]
  },

  "/blog/asme-b31-3-process-piping-code-explained": {
      "answer": "ASME B31.3 sets examination extent by fluid service category under paragraph 341.4. Normal Fluid Service takes 5% random radiography or ultrasonics on butt welds; Category D takes visual only; Category M and Severe Cyclic take 100% volumetric plus surface examination on root and finish; High Pressure (Chapter IX) takes 100% volumetric and 100% penetrant. Acceptance for every category sits in Table 341.3.2A.",
      "expansion": "The fluid service category is assigned by the owner or process licensor, not the fabricator, and it flows down through the P&ID legend to every weld on the line. Category D is the benign floor — non-flammable, non-toxic, design pressure to 150 psig between −29 and 186 °C — covering cooling water and instrument air with visual examination only. Normal is the default for most refinery and chemical process piping: 5% random volumetric coverage plus 100% visual. Category M — fluids where a single exposure causes serious irreversible harm, such as HF acid and phosgene — escalates to 100% RT or UT with penetrant on the root pass and tighter Table 341.3.2A acceptance. Severe Cyclic adds a fatigue-design check under paragraph 302.3.5 to the Category M examination scope. High Pressure Fluid Service, design pressure at or above 15,000 psig, runs under Chapter IX: every weld volumetric, every weld surface-examined, hydrotest at 1.5 times design, full material traceability.",
      "source": "ASME B31.3-2022 Process Piping — paragraphs 300.2 (fluid service definitions), 302.3.5, 341.4 (extent of examination), 344, 345 (pressure testing), Table 341.3.2A, Chapter IX (High Pressure Piping); NDT technique per ASME BPVC Section V, Articles 2, 4, 6 and 7.",
      "table": {
          "caption": "B31.3 examination extent by fluid service category — paragraph 341.4",
          "columns": [
              "Category",
              "Service assigned to it",
              "Volumetric on butt welds",
              "Surface examination",
              "Extra requirement"
          ],
          "rows": [
              [
                  "Category D",
                  "Non-flammable, non-toxic, design pressure to 150 psig, −29 to 186 °C — cooling water, instrument air",
                  "None required",
                  "None required",
                  "100% visual is the entire code scope"
              ],
              [
                  "Normal",
                  "Default for most refinery and chemical process piping",
                  "5% random RT or UT",
                  "MT or PT root and finish on branch and socket welds over 2 in nominal",
                  "Standard Table 341.3.2A acceptance"
              ],
              [
                  "Category M",
                  "Single exposure causes serious irreversible harm — HF acid, phosgene, ethylene oxide",
                  "100% RT or UT",
                  "100% MT or PT, root and finish",
                  "Tighter Table 341.3.2A criteria"
              ],
              [
                  "Severe Cyclic",
                  "Stress range above 0.8 × allowable for more than 7,000 design cycles",
                  "100% RT or UT",
                  "100% MT or PT, root and finish",
                  "Fatigue-design check per paragraph 302.3.5"
              ],
              [
                  "High Pressure (Chapter IX)",
                  "Design pressure at or above 15,000 psig (1,034 bar)",
                  "100% RT or UT, every weld",
                  "100% PT, root and finish",
                  "Hydrotest 1.5 × design; strict material traceability"
              ]
          ],
          "note": "Every category above Category D also requires 100% visual examination. The owner or process licensor assigns the category; it reaches the fabricator through the P&ID legend and line class."
      },
      "facets": [
          {
              "q": "How do I know if my piping is Category M?",
              "a": "The owner or process licensor assigns the fluid service category — it is not the fabricator's call. Check the project P&ID legend, where Category M services are explicitly flagged. Fluids that land there include HF acid, phosgene, hydrogen sulfide above threshold concentrations, ethylene oxide, vinyl chloride monomer, and anhydrous ammonia at some concentrations. When the legend is silent, the process safety engineer makes the determination."
          },
          {
              "q": "What does the joint quality factor E cost if I skip radiography?",
              "a": "E runs from 0.60 for straight-seam ERW pipe with no examination to 1.00 for seamless pipe or a fully radiographed weld, and it multiplies allowable stress in the B31.3 wall-thickness calculation under paragraph 304. A lower E buys thicker pipe at the same design pressure, so the examination decision is priced into the material order before the first weld is made."
          },
          {
              "q": "What pressure test does B31.3 require before service?",
              "a": "Hydrostatic test at 1.5 times design pressure per paragraph 345.4.2 is the default. Pneumatic testing at 1.1 times design per paragraph 345.5 is permitted under stricter safety rules. Paragraph 345.9 allows an initial-service leak test or sensitive leak test as alternatives where the code conditions are met. Minimum hold is 10 minutes — large-bore systems hold an hour or more — and any visible leak or pressure drop stops the test."
          },
          {
              "q": "Who governs the piping once it enters service?",
              "a": "API 570 takes over. B31.3 is the construction code; in service, API 570 sets thickness monitoring locations per circuit, corrosion-rate calculation, and inspection intervals, with remaining life run under API 579 fitness-for-service and risk-based inspection under API 580 and 581. The B31.3 construction record — WPS, NDT reports per joint, hydrotest record — becomes the baseline every later corrosion reading is trended against."
          },
          {
              "q": "Where does B31.3 stop and ASME Section VIII begin?",
              "a": "At the vessel nozzle. Drums, towers, heat exchangers, and separators are ASME Section VIII pressure vessels; the connected piping flange is B31.3. Both codes pull welding qualification from ASME Section IX and examination technique from ASME Section V, so the WPS and NDT engine is shared — the acceptance criteria and design rules change at the interface, which the owner and EPC team manage joint by joint."
          },
          {
              "q": "Does B31.3 apply where no regulation adopts it?",
              "a": "Yes. B31.3 is a private consensus standard, and the owner or EPC contract makes it governing law for the project even where no government regulation requires it. National overlays then stack on top — Saudi Aramco SAES-L-150 and ADNOC specifications both build on B31.3 rather than replace it. In the United States, OSHA process safety management under 29 CFR 1910.119 references it as a recognized engineering practice."
          }
      ]
  },

  "/resources/training-requirements-matrix": {
      "answer": "ASNT SNT-TC-1A (2020) recommends 40 hours of classroom training for UT Level I and 40 more for Level II; ISO 9712:2021 mandates 64 and 80 hours for the same levels. The schemes diverge hardest on experience: SNT-TC-1A lets the employer's Written Practice define it, while ISO 9712 and PCN require documented method-and-sector experience verified by a Level 3.",
      "expansion": "The three schemes answer the same question differently. SNT-TC-1A is a recommended practice: its Table 6.3.1A hours — 40 per level for UT and RT, 12 and 8 for MT, 4 and 8 for PT, 8 and 16 for VT — bind only when the employer's Written Practice adopts them, and the employer certifies its own personnel. ISO 9712 is a hard standard: a third-party certification body verifies mandated training hours and industrial experience measured in months — 3 for Level 1 and 9 for Level 2 in UT, RT and ET, 1 and 3 in MT, PT and VT — before any examination is scheduled. PCN, operated by BINDT, implements ISO 9712 and layers on its own rules: 10 percent of experience in the product sector applied for, logs submitted to BINDT, and a demanding practical and oral component at Level 3. Formal science or engineering education reduces the experience requirement under defined conditions.",
      "source": "ASNT SNT-TC-1A (2020 edition), Table 6.3.1A; ISO 9712:2021, Non-destructive testing — Qualification and certification of NDT personnel; PCN requirements per BINDT PCN/GEN documents.",
      "table": {
          "caption": "Minimum classroom training hours by method: SNT-TC-1A recommendation vs ISO 9712 requirement",
          "columns": [
              "Method",
              "SNT-TC-1A Level I (hours)",
              "SNT-TC-1A Level II (hours)",
              "ISO 9712 Level 1 (hours)",
              "ISO 9712 Level 2 (hours)"
          ],
          "rows": [
              [
                  "Ultrasonic Testing (UT)",
                  "40",
                  "40",
                  "64",
                  "80"
              ],
              [
                  "Radiographic Testing (RT)",
                  "40",
                  "40",
                  "72",
                  "80"
              ],
              [
                  "Magnetic Particle Testing (MT)",
                  "12",
                  "8",
                  "16",
                  "24"
              ],
              [
                  "Liquid Penetrant Testing (PT)",
                  "4",
                  "8",
                  "16",
                  "24"
              ],
              [
                  "Visual Testing (VT)",
                  "8",
                  "16",
                  "16",
                  "24"
              ],
              [
                  "Eddy Current Testing (ET)",
                  "40",
                  "40",
                  "40",
                  "48"
              ]
          ],
          "note": "SNT-TC-1A figures are recommended minimums from Table 6.3.1A that bind through the employer's Written Practice; ISO 9712 figures are mandatory minimums verified by the certification body. PCN applies the ISO 9712 hours with BINDT's additional documentation. Direct Level-2 entry requires the combined Level 1 + Level 2 hours under both international schemes."
      },
      "facets": [
          {
              "q": "Who decides the actual training requirement under SNT-TC-1A?",
              "a": "The employer. SNT-TC-1A is a recommended practice, and the hour tables bind only once the employer's Written Practice adopts or modifies them. Experience must be gained under Level II or Level III supervision, documentation is employer-controlled, and clients or regulators can demand more than the published minimums — nuclear and aerospace programmes set significantly higher bars."
          },
          {
              "q": "Can a candidate certify directly at Level 2 without holding Level 1?",
              "a": "Under ISO 9712 and PCN, yes — direct access is allowed, but the candidate must complete both the Level 1 and Level 2 training hours and the combined experience requirement before examination. Under SNT-TC-1A the Written Practice decides; employers routinely qualify technicians straight to Level II on the same combined-hours logic."
          },
          {
              "q": "How do ISO 9712 and PCN treat experience differently?",
              "a": "ISO 9712 requires at least 50 percent of experience in the product sector for which certification is sought, with the log verified by the employer and countersigned by a Level 3. PCN, operated by BINDT, requires a minimum of 10 percent of total experience in the specific product sector applied for — and the experience logs are submitted to BINDT itself, not just held by the employer."
          },
          {
              "q": "Does formal education shorten the path to certification?",
              "a": "Yes. Formal education in science, engineering or technology reduces the experience requirement under defined scheme rules — the clearest case is ASNT Level III eligibility, where a four-year engineering or science degree cuts the required experience to one year at Level II responsibility, against four years for a candidate qualifying on experience alone."
          },
          {
              "q": "Do training hours carry over between NDT methods?",
              "a": "No. Hours are independent per method — certifying in both UT and RT means completing the full training hours for each, although general and basic topics overlap. Advanced techniques stack further: PAUT, TOFD and digital RT call for additional training beyond the base method hours, with the exact requirement set by the certification scheme."
          },
          {
              "q": "What do the schemes require at recertification?",
              "a": "Evidence of continuing professional development: keep records of training courses, conferences, seminars and NDT-related professional activity. ISO 9712 and PCN certificates run a five-year validity with renewal on documented continuity and a recertification examination at ten years. SNT-TC-1A leaves the interval to the Written Practice, with five years as the recommended maximum."
          }
      ]
  },

  "/resources/ndt-inspection-checklist": {
      "answer": "An NDT inspection checklist runs four phases: pre-inspection planning (scope, governing code edition, technician certifications, calibration status, access and permits), equipment and calibration verification, during-inspection discipline (procedure compliance, 100% coverage tracking, indication documentation), and post-inspection reporting with Level III review. Code-specific reminders for ASME Section V and API 510/570/653 prevent the findings auditors write most.",
      "expansion": "Each phase has a failure mode. Planning fails when the crew mobilises against the wrong code edition or with certifications that lapse mid-project — verify both against the purchase order and the employer's written practice before travel. Equipment fails on block mismatch: reference standards (IIW/V1, V2, DSC) must match the component material where the procedure requires it, and every serial number goes on the technique sheet. During inspection, calibration verification runs at the frequency the procedure sets — commonly at the start and end of each examination and at fixed intervals — and a failed check voids every examination since the last valid one. Reporting closes with Level III review, attached calibration records, and archiving for five years minimum, longer for nuclear and some pressure vessel codes. The code reminders carry the specifics: acceptance criteria live in the referencing code, not ASME Section V; API 570 pushes attention to injection points, deadlegs and CUI; API 653 wants settlement at eight perimeter points minimum.",
      "source": "ASME BPVC Section V (2023 Edition), Articles 1–9; API 510, API 570 and API 653 in-service inspection codes; personnel certification per SNT-TC-1A, ISO 9712, PCN and ACCP.",
      "table": {
          "caption": "The NDT inspection checklist decomposed by phase and governing code",
          "columns": [
              "Phase or code",
              "What the checklist verifies",
              "The finding it prevents"
          ],
          "rows": [
              [
                  "Phase 1 — Pre-inspection planning",
                  "Scope vs purchase order; governing code and correct edition; certifications valid per written practice (SNT-TC-1A) or scheme (ISO 9712, PCN, ACCP); previous reports and corrosion rates; access, permits, PPE",
                  "Crew mobilised against a superseded code edition or with a certification that lapses mid-project"
              ],
              [
                  "Phase 2 — Equipment and calibration",
                  "Calibration valid through the project; blocks (IIW/V1, V2, DSC) match component material where required; consumable expiry dates; function tests; serial numbers on the technique sheet",
                  "Instrument calibration expiring on site, or a reference block that does not match the component"
              ],
              [
                  "Phase 3 — During inspection",
                  "Procedure followed exactly (deviations need Level III authorization); coverage tracked to 100% with grids or digital mapping; every indication documented with location, size, orientation, classification; periodic calibration checks",
                  "Lost calibration not caught — every examination since the last valid check must be repeated"
              ],
              [
                  "Phase 4 — Post-inspection and reporting",
                  "All mandatory data fields, sketches, acceptance criteria and signatures; calibration records attached; Level III review and approval; archive five years minimum",
                  "A report that cannot survive audit because fields, traceability or approval are missing"
              ],
              [
                  "ASME Section V",
                  "Correct Article per method — Art. 4 UT, Art. 2 RT, Art. 7 MT, Art. 6 PT, Art. 8 ET, Art. 9 VT; procedures address all mandatory variables (Table T-421 for UT)",
                  "Acceptance criteria applied from Section V instead of the referencing code (e.g., ASME VIII UW-51/52)"
              ],
              [
                  "API 510 — pressure vessels",
                  "Minimum thickness calculations, short- and long-term corrosion rates, remaining life, CML records",
                  "Remaining life computed from the wrong corrosion rate or without CML history"
              ],
              [
                  "API 570 — piping",
                  "Circuits classified by service class; injection points, deadlegs and CUI areas prioritised; small-bore and socket welds included; MAWP checked at measured thickness",
                  "Small-bore and socket welds silently excluded from scope"
              ],
              [
                  "API 653 — storage tanks",
                  "Settlement at a minimum of 8 perimeter points; shell readings per Table 6.1; critical zone at the shell-to-bottom weld; annular plates per Table 4.4",
                  "A settlement survey with too few points to evaluate against the annex criteria"
              ]
          ],
          "note": "Acceptance criteria live in the referencing code, not ASME Section V — the checklist's most repeated reminder. The download is an editable Excel workbook; Atlantis Level III consultants build project-specific versions, and Atlantis ERP turns them into digital forms with automatic report generation — quote on request."
      },
      "facets": [
          {
              "q": "How often must calibration be verified during an examination?",
              "a": "At the frequency the approved procedure specifies — commonly at the start and end of each examination and at set intervals such as every two hours. The rule with teeth is the failure clause: when a verification check fails, every examination performed since the last valid check must be repeated, which is why long scan runs get interim checks."
          },
          {
              "q": "Where do acceptance criteria come from on an ASME Section V job?",
              "a": "From the referencing code, not Section V. Section V's Articles define how to perform the examination — Article 4 for UT, Article 2 for RT, Article 7 MT, Article 6 PT, Article 8 ET, Article 9 VT — while accept/reject limits sit in the construction or in-service code, such as ASME Section VIII UW-51 and UW-52 for vessel radiography."
          },
          {
              "q": "What must be recorded for every indication found?",
              "a": "Location, size, orientation and classification — evaluated against the specific code paragraph, table or figure, not against memory of it. Reportable findings are photographed with a scale reference, rejectable indication locations are marked on the component itself, and environmental conditions are logged at intervals so the record shows the examination stayed inside procedure limits."
          },
          {
              "q": "How long must NDT inspection records be retained?",
              "a": "Five years minimum is the working baseline, with nuclear work and some pressure vessel codes requiring longer. The archive package is more than the report: attach calibration records and traceability documentation, capture Level III review and approval, and distribute to stakeholders before archiving so the record trail survives an audit years after the crew has moved on."
          },
          {
              "q": "What does API 570 tell you to prioritise on piping?",
              "a": "Classify piping circuits by service class first, then weight attention toward injection points, deadlegs and corrosion-under-insulation areas — the locations where localised attack outruns the circuit average. Include small-bore and socket welds in scope rather than exempting them, and check MAWP at the measured thickness, not the nominal."
          },
          {
              "q": "Which tank-specific checks does API 653 add?",
              "a": "Settlement measured at a minimum of eight perimeter points, shell thickness readings taken per Table 6.1, inspection of the critical zone at the shell-to-bottom weld, and evaluation of annular plates per Table 4.4. Each targets a tank-only failure mode: shell settlement, course-by-course thinning and bottom-side corrosion have no piping or vessel equivalent."
          }
      ]
  },

  "/press/free-templates-2026-launch": {
      "answer": "Atlantis NDT has released 16 free editable templates for inspection contractors: an SNT-TC-1A NDT procedure, API 510, 570 and 653 report forms, PWHT records, an API 581 RBI worksheet, ISO/IEC 17025 calibration certificates, welder qualification (WPQR) forms, and inspection and test plans (ITPs). Every template downloads free from the Atlantis resources library and edits in Word or Excel.",
      "expansion": "The templates target the documents auditors ask for first. The SNT-TC-1A procedure template carries the structure a written practice references; the API 510, 570 and 653 report forms map to the data fields those in-service codes require — thickness readings, corrosion rates, remaining life, CML records; the API 581 worksheet frames a quantitative risk-based inspection screening; the calibration certificate follows the ISO/IEC 17025:2017 §7.8 reporting elements, uncertainty, decision rule and traceability included; the WPQR form records welder qualification variables per ASME Section IX; and the ITP sets hold, witness and review points for fabrication surveillance. Behind the free layer sits the Atlantis stack — ERP with certification and calibration tracking, a digital twin platform with RBI and FFS workflows, mobile offline reporting software, and Level III consulting — with records structured for ISO 9001, ISO 17020 and ISO 17025 audits. Quotes are tailored per region, scope, delivery model and team size, returned within 24 hours.",
      "source": "ASNT SNT-TC-1A; API 510, API 570, API 653 and API 581; ISO/IEC 17025:2017, §7.8; ASME BPVC Section IX (welding qualification).",
      "table": {
          "caption": "The 16-template release decomposed: each named template and the document it answers to",
          "columns": [
              "Template",
              "Governing document",
              "What it captures"
          ],
          "rows": [
              [
                  "NDT procedure",
                  "ASNT SNT-TC-1A",
                  "Method scope, technique, equipment, personnel levels, acceptance-criteria reference to the governing code"
              ],
              [
                  "API 510 vessel report",
                  "API 510",
                  "Thickness readings, corrosion rates, remaining life, CML records for pressure vessels"
              ],
              [
                  "API 570 piping report",
                  "API 570",
                  "Circuit classification, CML data, injection point and deadleg findings, MAWP at measured thickness"
              ],
              [
                  "API 653 tank report",
                  "API 653",
                  "Shell course readings, settlement survey, critical zone and annular plate findings"
              ],
              [
                  "PWHT record",
                  "ASME B&PV / B31 fabrication requirements",
                  "Post-weld heat treatment cycle: temperatures, hold times, and the record trail the code requires"
              ],
              [
                  "RBI worksheet",
                  "API 581 (API 580 framework)",
                  "Probability and consequence factors, risk ranking, inspection planning inputs"
              ],
              [
                  "Calibration certificate",
                  "ISO/IEC 17025:2017 §7.8",
                  "As-found/as-left results, measurement uncertainty, decision rule, traceability, authorised signatures"
              ],
              [
                  "Welder qualification (WPQR)",
                  "ASME Section IX",
                  "Qualification variables, test results and qualified ranges for welder performance"
              ]
          ],
          "note": "Nine template families are named in the release; the set totals 16 editable documents, including the ITP, all downloadable from the Atlantis free resources library. Productised versions generate the same records automatically inside Atlantis ERP and the reporting software — demo or quote on request."
      },
      "facets": [
          {
              "q": "What does the free NDT procedure template provide?",
              "a": "A procedure skeleton aligned to SNT-TC-1A, structured so the employer's written practice can reference it directly: the sections a code-compliant procedure carries — method scope, equipment and calibration requirements, personnel level assignments, examination technique, and the acceptance-criteria reference back to the governing code. It pairs with the written practice template and the training requirements matrix in the same free library."
          },
          {
              "q": "Are the templates free, and what does Atlantis charge for?",
              "a": "All 16 templates are free and editable. Atlantis publishes no pricing for its products: the ERP, digital twin platform, reporting software, training and consulting are positioned as affordable, accessible and fully customizable, priced per region, scope, delivery model and team size through a tailored quote returned within 24 hours — opened by a free 30-minute consultation with the founder."
          },
          {
              "q": "Which codes does the Atlantis compliance stack cover?",
              "a": "Management-system audits run against ISO 9001:2015, ISO 17020 for inspection bodies, ISO 17025 for calibration laboratories and ISO 17024 for personnel certification. Technical coverage spans ASME B&PV Sections V, VIII, IX and XI plus the B31 piping series; API 510, 570, 571, 579, 580, 581, 653, 936 and 1169; NACE MR0175 and MR0103 sour service; AMPP CIP coating; and IACS Rec-20 marine and offshore."
          },
          {
              "q": "How fast can Atlantis mobilise when a template turns into a project?",
              "a": "Three delivery models are published: on-site mobilisation in 24 to 72 hours through Houston, Dubai, Mumbai, Singapore and London hubs; remote procedure authoring and Level III sign-off on a 24-hour turnaround; and a hybrid model pairing a local Level II with Atlantis Level III oversight delivered remotely. Every engagement carries ASNT NDT Level III final disposition and procedure approval."
          },
          {
              "q": "Who stands behind the templates technically?",
              "a": "Anoop Rayavarapu, Atlantis NDT's founder — ASNT NDT Level III across multiple methods, API 653 certified, and an ISO 9001 Lead Auditor. Inspector certification runs dual-scheme, ASNT NDT Level II/III alongside ISO 9712, and the consultation the release offers is a free 30-minute session with him, followed by a tailored quote within 24 hours."
          },
          {
              "q": "How do the free templates connect to the paid software stack?",
              "a": "Each template has a productised counterpart. Atlantis ERP maintains the asset register and circuit hierarchy and tracks ASNT, ISO 9712, API ICP, AWS CWI and NACE CIP certifications with audit-ready records; the digital twin platform adds a damage-mechanism heat-map, RBI tier visualisation and FFS workflow; the reporting software captures field data mobile and offline against code-aligned templates."
          }
      ]
  },
};
