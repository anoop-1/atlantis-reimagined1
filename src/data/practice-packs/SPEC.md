# Downloadable Level II practice packs — authoring spec (2026-10-24)

Owner request: downloadable Level II practice questions for UT, MT, PT and RT, a **General**
set and a **Specific** set per method, branded Atlantis NDT, built from Atlantis's own material
and public knowledge. These files are rendered to PDF by `scripts/build-practice-packs.py`.

## File and schema
One file per method: `src/data/practice-packs/{ut,mt,pt,rt}-level-2.json`

```json
{
  "id": "ut-level-2",
  "method": "UT",
  "methodName": "Ultrasonic Testing",
  "level": "Level II",
  "lastReviewed": "2026-10-24",
  "general": {
    "intro": "One or two sentences on what the General set covers.",
    "questions": [ QUESTION, ... ]          // exactly 40
  },
  "specific": {
    "intro": "One or two sentences: written against the documents named below; check the edition your written practice and contract name.",
    "documents": ["ASME BPVC Section V, Article 4 (2023 edition)", "..."],
    "questions": [ QUESTION, ... ]          // exactly 20
  }
}
```

QUESTION:
```json
{ "id": "ut2g-01", "topic": "Principles", "q": "Question text?", "options": ["A text", "B text", "C text", "D text"],
  "answer": 2, "explanation": "Why the answer is right (and why a tempting wrong option is wrong).", "ref": "Source of the fact" }
```
- `answer` is the 0-based index of the correct option. Exactly 4 options.
- ids: `{m}2g-NN` for General (01–40), `{m}2s-NN` for Specific (01–20), m = ut|mt|pt|rt.

## Content rules (all mandatory)
1. **Original wording only.** Do not reproduce or paraphrase questions from the ASNT Question &
   Answer Books, any training-company question bank, any client or employer document, or any
   other copyrighted source. Write new questions from the underlying knowledge.
2. **Do not duplicate** the 30 on-site questions in `src/data/practice-tests/{m}-level-2.json`
   (read it first; testing the same fact with a different scenario is fine, re-wording it is not).
3. **Technically correct, one unambiguous answer.** If a fact depends on a code edition, name the
   edition in `ref` and only use values you are certain of. If you are not certain of a code value,
   write the question about procedure logic instead (what must happen when a calibration check
   fails, what the report must record, who may interpret) rather than guess a number.
   Never cite paragraph numbers unless you are certain; "ASME BPVC Section V, Article 6 (2023)" is enough.
4. **Level II difficulty.** Mix recall, application and calculation. General sets must include
   worked calculations where the method has them:
   - UT: wavelength, near field, Snell's law / refracted angle, dB ratios, sound path / depth / surface distance on angle beam, attenuation, beam spread.
   - RT: inverse square law, exposure conversion (mA·min or Ci·min), geometric unsharpness Ug = F·t/d, source decay / half-life (Ir-192 ≈ 74 days, Co-60 ≈ 5.27 years, Se-75 ≈ 120 days), film density arithmetic, radiation dose rate and distance.
   - MT: field direction for coil vs. head shot vs. prods, L/D effects, current types (AC/HWDC/FWDC) and depth, wet vs dry, demagnetisation, field indicators.
   - PT: process sequence, penetrant types/methods (Type I/II; Methods A, B, C, D), dwell and development, temperature effects, removal errors, sensitivity levels, contaminants.
   General topics should spread across: principles/physics, equipment & materials, technique & calibration/standardisation, interpretation & discontinuities, and (RT) radiation safety.
5. **Specific sets** test applying a written procedure and the codes most often named in US work:
   ASME BPVC Section V (the method's article), plus acceptance criteria that a Level II commonly
   applies (ASME VIII Div. 1 mandatory appendices, ASME B31.3, AWS D1.1). Questions should look like
   what an employer's Specific exam asks: required calibration/standardisation steps, what the
   procedure must specify, reporting requirements, essential variables, recording/evaluation levels,
   acceptance decisions on a described indication. Name the document and edition in `ref`.
   Do not invent table values. Prefer requirements that have been stable across recent editions.
6. **Answer key balance.** Across each set, the correct position should be spread roughly evenly
   (each of 0–3 used 8–12 times in General, 4–6 times in Specific). The correct option must not
   be systematically the longest. At most two "all of the above"/"none of the above" per set.
7. **Plain, professional US English.** No claims about Atlantis. No prices or fees.
8. Explanations: 1–3 sentences, teach the point, show the arithmetic for calculations.

## Self-check before finishing
- `node -e` validation: counts (40/20), 4 options each, answer in 0..3, unique ids, balanced key.
- Re-solve every calculation independently.
- List in your final message any question you are less than certain about (none is the goal).
