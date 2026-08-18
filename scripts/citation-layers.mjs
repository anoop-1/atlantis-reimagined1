/**
 * Citation layers for the prerendered HTML — 2026-08-18.
 * ─────────────────────────────────────────────────────────────────────────────
 * WHY THIS FILE EXISTS AT ALL
 *
 * This site renders in two layers. React components run in the browser, and
 * scripts/prerender.mjs writes the static HTML that crawlers and AI retrievers
 * actually receive — built from its own `bodyContent` strings, NOT by rendering
 * React. So a component added to a .tsx page is invisible to Googlebot and to
 * every AI retrieval fetcher.
 *
 * That was caught by scripts/lint-citation-spec.mjs immediately after the first
 * AnswerBlock was added to the salary guide: the component was in the bundle and
 * absent from the served HTML. URL accessibility is the highest-evidenced
 * citation factor (9.5/10), so a citation layer that exists only in React is
 * worth exactly nothing.
 *
 * Every entry below therefore MIRRORS the React implementation on the same page.
 * When one changes, change the other — the render-parity check in the lint
 * script is what catches drift.
 *
 * CONTENT RULES (all enforced by scripts/lint-citation-spec.mjs)
 *   - lead answer 40-70 words, declarative, no hedging
 *   - expansion 130-165 words, self-contained
 *   - a named authority inside the block (cited ~2.1x more often)
 *   - at least one real <table> with a <caption>
 *   - at least six headings phrased as questions (the fan-out surface)
 *   - US answer first
 *   - never an Atlantis price; third-party fees and market salary data are fine
 */

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

/** Renders one citation layer to static HTML for injection into bodyContent. */
export function renderCitationLayer(layer) {
  const parts = [];

  parts.push(
    '<section data-citation-block="answer" aria-label="Direct answer">' +
      `<p>${esc(layer.answer)}</p>` +
      (layer.expansion ? `<p>${esc(layer.expansion)}</p>` : '') +
      (layer.source ? `<p><strong>Source:</strong> ${esc(layer.source)}</p>` : '') +
      '</section>'
  );

  if (layer.byline !== false) {
    parts.push(
      '<div data-citation-block="byline">Technically reviewed by ' +
        '<a href="/authors/anoop-rayavarapu">Anoop Rayavarapu</a> — ' +
        'ASNT NDT Level III (UT, RT, MT, PT, VT, ET) · API 653 · ISO 9001:2015 Lead Auditor</div>'
    );
  }

  if (layer.table) {
    const t = layer.table;
    const head = t.columns.map((c) => `<th scope="col">${esc(c)}</th>`).join('');
    const body = t.rows
      .map(
        (r) =>
          '<tr>' +
          r
            .map((cell, i) => (i === 0 ? `<th scope="row">${esc(cell)}</th>` : `<td>${esc(cell)}</td>`))
            .join('') +
          '</tr>'
      )
      .join('');
    parts.push(
      `<figure data-citation-block="table"${t.id ? ` id="${esc(t.id)}"` : ''}>` +
        `<table><caption>${esc(t.caption)}</caption>` +
        `<thead><tr>${head}</tr></thead><tbody>${body}</tbody></table>` +
        (t.note ? `<figcaption>${esc(t.note)}</figcaption>` : '') +
        '</figure>'
    );
  }

  for (const f of layer.facets || []) {
    parts.push(`<section data-citation-block="facet"><h2>${esc(f.q)}</h2><p>${esc(f.a)}</p></section>`);
  }

  return parts.join('\n');
}

export const CITATION_LAYERS = {
  '/blog/ndt-salary-guide-2026-global': {
    answer:
      'A US NDT technician earns $52,000 to $95,000 in 2026, and certification level moves that band more than any other factor. ASNT Level II sits at $55,000 to $80,000, while Level III reaches $95,000 to $145,000. Method matters next: PAUT and TOFD specialists earn 25 to 40 percent above conventional UT.',
    expansion:
      'Three multipliers stack on top of the base band. Certification level is the largest: an ASNT Level III earns 60 to 120 percent above a Level II in the same country, because the role carries procedure approval and personnel qualification authority under SNT-TC-1A rather than inspection alone. Method is second: phased array, TOFD and other advanced ultrasonic techniques pay 25 to 40 percent above conventional UT, MT and PT because the qualified population is small. Work environment is third: offshore and sour-service assignments pay 30 to 50 percent above onshore industrial work, though that premium reflects rotation schedules and hazard exposure rather than higher hourly value. API inspector certifications stack on top of ASNT credentials rather than replacing them entirely.',
    source:
      'ASNT SNT-TC-1A (2024 edition) for level definitions; US Bureau of Labor Statistics occupational data for base bands',
    table: {
      id: 'us-salary-by-level',
      caption: 'US NDT salary by certification level and method specialisation, 2026',
      columns: ['Certification level', 'Base band (USD)', 'With PAUT / TOFD', 'Offshore or sour service', 'Typical authority'],
      rows: [
        ['ASNT Level I', '$42,000 - $58,000', 'n/a - Level I cannot interpret', '$55,000 - $72,000', 'Performs set-ups and readings under supervision'],
        ['ASNT Level II', '$55,000 - $80,000', '$70,000 - $105,000', '$78,000 - $118,000', 'Interprets and reports to an approved procedure'],
        ['ASNT Level III', '$95,000 - $145,000', '$110,000 - $165,000', '$130,000 - $190,000', 'Approves procedures, qualifies personnel'],
        ['API 510 / 570 / 653 inspector', '$85,000 - $130,000', 'n/a - separate scheme', '$115,000 - $175,000', 'Signs in-service inspection findings'],
        ['AWS CWI', '$70,000 - $105,000', 'n/a - separate scheme', '$95,000 - $140,000', 'Signs weld inspection to AWS D1.1'],
      ],
      note: 'Industry market ranges for the United States, 2026. Base salary excluding per-diem and rotation uplift. Level definitions follow ASNT SNT-TC-1A; API and AWS schemes are independent of the ASNT level ladder.',
    },
    facets: [
      {
        q: 'Which NDT certification level pays the most?',
        a: 'ASNT Level III pays the most within the ASNT ladder, at $95,000 to $145,000 in the US against $55,000 to $80,000 for Level II. The gap exists because Level III carries authority a Level II does not have: approving procedures, writing the employer written practice, and qualifying other technicians under SNT-TC-1A.',
      },
      {
        q: 'Does PAUT certification actually increase pay?',
        a: 'Yes. Phased array and TOFD specialists earn 25 to 40 percent above conventional ultrasonic technicians at the same certification level. The premium reflects scarcity rather than difficulty — PAUT requires a current UT Level II first, plus documented phased-array experience, so the qualified population stays small relative to demand.',
      },
      {
        q: 'How much do API inspectors earn compared with ASNT technicians?',
        a: 'API 510, 570 and 653 inspectors earn $85,000 to $130,000 in the US, overlapping the top of the ASNT Level II band and the bottom of Level III. API certification is a separate scheme rather than a rung on the ASNT ladder, and most holders carry both credentials.',
      },
      {
        q: 'Is offshore NDT work worth the pay premium?',
        a: 'Offshore and sour-service assignments pay 30 to 50 percent above equivalent onshore work. That premium compensates rotation schedules, hazard exposure and time away rather than a higher hourly value for the same inspection, so the effective annual comparison depends on the rotation pattern.',
      },
      {
        q: 'What raises an NDT salary fastest?',
        a: 'Adding an advanced ultrasonic method to an existing Level II is the fastest single step, worth 25 to 40 percent. Moving from Level II to Level III is larger at 60 to 120 percent but requires the Basic exam plus documented method hours, which typically takes 12 to 24 months to assemble.',
      },
      {
        q: 'Do NDT salaries differ by state in the US?',
        a: 'Yes, and the driver is industry rather than cost of living. Gulf Coast refining states — Texas and Louisiana — pay above the national band for UT and RT because turnaround demand concentrates there. Aerospace clusters in Washington and Kansas pay above band for ET and NAS 410 qualified technicians.',
      },
    ],
  },
};
