// INSPECTION-L3 stream (2026-09-30) — inspection service landing upgrades,
// the inspection RFQ no-JS fallback form, the Level III engagement sections on
// the consulting owner page, exact-anchor routing into that owner page, and
// short contextual service blocks on three high-impression guides.
//
// Everything is ADDITIVE: blocks are inserted before </main> (or before a
// guide's FAQ heading); no existing section is removed. The text comes from
// src/data/inspection-l3-content.json, which src/components/InspectionL3Content.tsx
// renders for the React layer, so crawlers and visitors see the same copy.
//
// Two narrowly targeted phrase fixes on /inspection-services remove claims that
// Atlantis offers fitness-for-service or RBI work (owner direction 2026-09-27:
// neither is offered). They replace a clause; they do not remove a section.
import { readFileSync } from 'fs';

const DATA = JSON.parse(readFileSync(new URL('../src/data/inspection-l3-content.json', import.meta.url), 'utf-8'));
const SITE = 'https://atlantisndt.com';

const esc = (s) => String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

/** [text](/url) and **bold** -> HTML. Kept identical to renderInline() in InspectionL3Content.tsx. */
export function inline(s) {
  return esc(s)
    .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
    .replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, '<a href="$2">$1</a>');
}
const plain = (s) => String(s ?? '').replace(/\*\*([^*]+)\*\*/g, '$1').replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, '$1');

const contactHref = (subject) => `/contact?service=consulting&amp;subject=${encodeURIComponent(subject)}`;
const rfqHref = (subject) => `/contact?service=inspection&amp;subject=${encodeURIComponent(subject)}`;

// ── Static RFQ form (no-JS fallback) ───────────────────────────────────────
// JS visitors get <InspectionRfqWizard>; this copy only serves crawlers and
// no-JS browsers, so it posts to mailto: (always deliverable, no endpoint
// dependency). Field names match the wizard's payload keys.
export function rfqFallbackForm({ method = '', asset = '' } = {}) {
  const opt = (v, sel) => `<option value="${esc(v)}"${v === sel ? ' selected' : ''}>${esc(v)}</option>`;
  const assets = ['Welds (vessel, piping, pipeline or structural)', 'Vessel, piping or tank wall', 'Aboveground storage tank', 'Pressure vessel, process piping or pipeline', 'Procedure or technique to be qualified', 'Other'];
  const methods = ['PAUT / TOFD', 'Corrosion mapping (AUT / PAUT C-scan)', 'API 653 tank NDE (MFL / UT / settlement)', 'UT thickness / PAUT / MT / PT / VT', 'Procedure qualification / demonstration', 'Not sure yet'];
  return `
    <section class="inspection-rfq" aria-label="Inspection RFQ">
      <h2>Request an inspection quote (RFQ)</h2>
      <p>Tell us the asset, the method, where it is, the governing code, your dates, the size of the job and the report you need. We reply with questions or a quote. Affordable, accessible, fully customizable &mdash; no published pricing.</p>
      <form action="mailto:info@atlantisndt.com?subject=${encodeURIComponent('Inspection RFQ')}" method="post" enctype="text/plain" data-form="inspection-rfq-fallback">
        <p><label for="rfq-asset">Asset type</label><br><select id="rfq-asset" name="asset_type">${assets.map((a) => opt(a, asset)).join('')}</select></p>
        <p><label for="rfq-method">Method(s)</label><br><select id="rfq-method" name="methods">${methods.map((m) => opt(m, method)).join('')}</select></p>
        <p><label for="rfq-location">Location (site, city, state or province)</label><br><input id="rfq-location" name="location" type="text" required></p>
        <p><label for="rfq-code">Applicable code or specification</label><br><input id="rfq-code" name="applicable_code" type="text" placeholder="e.g. ASME VIII, B31.3, AWS D1.1, API 1104, API 510/570/653"></p>
        <p><label for="rfq-dates">Target dates</label><br><input id="rfq-dates" name="target_dates" type="text" placeholder="e.g. outage window or required-by date"></p>
        <p><label for="rfq-size">Size / quantity</label><br><input id="rfq-size" name="size_quantity" type="text" placeholder="e.g. 40 welds, 3 tanks, 120 CMLs"></p>
        <p><label for="rfq-deliverable">Deliverable needed</label><br><input id="rfq-deliverable" name="deliverable" type="text" placeholder="e.g. report per weld, C-scan + thickness grid, tank floor map"></p>
        <p><label for="rfq-name">Your name</label><br><input id="rfq-name" name="name" type="text" required></p>
        <p><label for="rfq-email">Work email</label><br><input id="rfq-email" name="email" type="email" required></p>
        <p><label for="rfq-company">Company</label><br><input id="rfq-company" name="company" type="text"></p>
        <p><label for="rfq-phone">Phone (optional)</label><br><input id="rfq-phone" name="phone" type="tel"></p>
        <p><button type="submit">Send RFQ</button></p>
      </form>
      <p>Or email the same details to <a href="mailto:info@atlantisndt.com">info@atlantisndt.com</a>. Mobilisation: North America; confirm your location in your RFQ.</p>
    </section>`;
}

// ── Service module ────────────────────────────────────────────────────────
export function serviceModuleHtml(s) {
  const out = [`<section class="inspection-service-module" id="service-${esc(s.key)}" aria-label="${esc(s.heading)}">`];
  out.push(`<h2>${esc(s.heading)}</h2>`);
  out.push(`<p>${inline(s.intro)}</p>`);
  for (const sec of s.sections) {
    out.push(`<h2>${esc(sec.h)}</h2>`);
    if (sec.ul && sec.ul.length && !(sec.p && sec.p.length && sec.pFirst)) {
      // lists come first when a section has both (deliverables then a note)
      out.push(`<ul>${sec.ul.map((li) => `<li>${inline(li)}</li>`).join('')}</ul>`);
    }
    for (const p of sec.p || []) out.push(`<p>${inline(p)}</p>`);
  }
  out.push(`<h2>Frequently asked questions: ${esc(s.serviceName)}</h2>`);
  for (const f of s.faqs) out.push(`<h3>${esc(f.q)}</h3><p>${inline(f.a)}</p>`);
  out.push(`<p><a href="${rfqHref(s.ctaSubject)}"><strong>Request a quote for ${esc(s.serviceName.toLowerCase())}</strong></a> or use the RFQ form below. See all <a href="/inspection-services">inspection services</a> and <a href="/consulting/ndt-consulting-level-iii">ASNT Level III consulting</a>.</p>`);
  out.push('</section>');
  return out.join('\n');
}

export function serviceSchema(s) {
  return {
    '@type': 'Service',
    '@id': `${SITE}${s.path}#service`,
    name: s.serviceName,
    serviceType: s.serviceType,
    description: s.description,
    url: `${SITE}${s.path}`,
    provider: { '@type': 'Organization', name: 'Atlantis NDT', url: SITE, email: 'info@atlantisndt.com' },
    areaServed: [{ '@type': 'Country', name: 'United States' }, { '@type': 'Country', name: 'Canada' }],
    datePublished: DATA.publishedAt,
  };
}

function faqNodes(faqs) {
  return faqs.map((f) => ({ '@type': 'Question', name: plain(f.q), acceptedAnswer: { '@type': 'Answer', text: plain(f.a) } }));
}

// ── Level III owner-page sections ─────────────────────────────────────────
export function levelIiiHtml(l3 = DATA.level3) {
  const out = [`<section class="level-iii-engagements" aria-label="${esc(l3.heading)}">`];
  out.push(`<h2>${esc(l3.heading)}</h2>`);
  out.push(`<p>${inline(l3.intro)}</p>`);
  out.push(`<ul>${l3.sections.map((s) => `<li><a href="#${esc(s.id)}">${esc(s.h)}</a></li>`).join('')}</ul>`);
  for (const s of l3.sections) {
    out.push(`<section id="${esc(s.id)}" aria-label="${esc(s.h)}">`);
    out.push(`<h2>${esc(s.h)}</h2>`);
    out.push(`<h3>Who it is for</h3><p>${inline(s.whoFor)}</p>`);
    out.push(`<h3>Deliverables</h3><ul>${s.deliverables.map((d) => `<li>${inline(d)}</li>`).join('')}</ul>`);
    out.push(`<h3>How the engagement runs</h3><ol>${s.flow.map((d) => `<li>${inline(d)}</li>`).join('')}</ol>`);
    for (const f of s.faqs) out.push(`<h3>${esc(f.q)}</h3><p>${inline(f.a)}</p>`);
    out.push(`<p><a href="${contactHref(s.ctaSubject)}"><strong>Enquire about ${esc(s.h.toLowerCase())}</strong></a></p>`);
    out.push('</section>');
  }
  out.push('</section>');
  return out.join('\n');
}

// ── Contextual block for guides ───────────────────────────────────────────
export function contextBlockHtml(b) {
  return `<section class="service-context-block" aria-label="${esc(b.h)}"><h2>${esc(b.h)}</h2><p>${inline(b.p)}</p></section>`;
}

// ── City consulting scope anchor (exact anchor to the owner page) ────────
const OWNER = DATA.level3.path;
function cityName(slug) {
  return slug.split('-').map((w) => (w.length <= 2 && w !== 'st' ? w.toUpperCase() : w[0].toUpperCase() + w.slice(1))).join(' ');
}
export function cityScopeHtml(slug) {
  const c = cityName(slug);
  return `<section class="city-scope" aria-label="Scope of this page"><h2>Level III support in ${esc(c)}</h2><p>This page covers NDT consulting for work in ${esc(c)}. For the national engagement &mdash; a named Level III of record, written-practice ownership, procedure approval, audit support and retainer cover delivered wherever your sites are &mdash; see <a href="${OWNER}">ASNT Level III consulting</a>.</p></section>`;
}
const ROUTER_EXTRA = {
  '/consulting-usa': 'Looking for a named Level III for your company rather than a project? See <a href="' + OWNER + '">ASNT Level III consulting</a> for outsourced Level III, written practices, procedure approval, audit support and retainer cover.',
};

// ── helpers ───────────────────────────────────────────────────────────────
function insertBeforeMainEnd(body, block) {
  const i = body.lastIndexOf('</main>');
  return i >= 0 ? body.slice(0, i) + '\n' + block + '\n' + body.slice(i) : body + '\n' + block;
}
function insertBeforeFaqHeading(body, block) {
  const re = /<h2[^>]*>\s*(Frequently Asked Questions|FAQs?\b|Frequently asked)[^<]*<\/h2>/i;
  const m = body.match(re);
  if (m && m.index !== undefined) return body.slice(0, m.index) + block + '\n' + body.slice(m.index);
  return insertBeforeMainEnd(body, block);
}
function addNode(route, node) {
  const sd = route.structuredData;
  if (!sd) { route.structuredData = { '@context': 'https://schema.org', '@graph': [node] }; return; }
  if (Array.isArray(sd['@graph'])) { sd['@graph'].push(node); return; }
  const { '@context': _ctx, ...rest } = sd;
  route.structuredData = { '@context': 'https://schema.org', '@graph': [rest, node] };
}
function findFaqPage(sd) {
  if (!sd) return null;
  const nodes = Array.isArray(sd['@graph']) ? sd['@graph'] : [sd];
  return nodes.find((n) => n && (n['@type'] === 'FAQPage' || (Array.isArray(n['@type']) && n['@type'].includes('FAQPage')))) || null;
}
function mergeFaq(route, faqs) {
  const nodes = faqNodes(faqs);
  const faq = findFaqPage(route.structuredData);
  if (faq) { faq.mainEntity = [...(Array.isArray(faq.mainEntity) ? faq.mainEntity : faq.mainEntity ? [faq.mainEntity] : []), ...nodes]; return; }
  addNode(route, { '@type': 'FAQPage', mainEntity: nodes });
}

/** Hub phrase fixes: remove "Atlantis offers FFS/RBI" clauses only. */
function fixHubClaims(body) {
  return body
    .replace(/settlement measurement, fitness-for-service\./, 'settlement measurement, with results reported to your API 653 inspector.')
    .replace(/MIC assessment, feeding directly into RBI programs\./, 'MIC assessment, with located results reported for your own integrity programme.');
}

export function applyInspectionL3(routes) {
  const byPath = new Map();
  for (const r of routes) if (r && r.path && typeof r.bodyContent === 'string') byPath.set(r.path, r);
  const out = { services: 0, hub: 0, level3: 0, context: 0, cityScope: 0, routers: 0, missing: [] };

  for (const s of DATA.services) {
    const r = byPath.get(s.path);
    if (!r) { out.missing.push(s.path); continue; }
    if (r.bodyContent.includes(`id="service-${s.key}"`)) continue;
    r.bodyContent = insertBeforeMainEnd(r.bodyContent, serviceModuleHtml(s) + rfqFallbackForm({ method: s.rfqMethod, asset: s.rfqAsset }));
    addNode(r, serviceSchema(s));
    mergeFaq(r, s.faqs);
    out.services++;
  }

  {
    const h = DATA.hub;
    const r = byPath.get(h.path);
    if (!r) out.missing.push(h.path);
    else if (!r.bodyContent.includes('data-form="inspection-rfq-fallback"')) {
      const links = `<section class="inspection-service-pages" aria-label="${esc(h.heading)}"><h2>${esc(h.heading)}</h2><p>${inline(h.intro)}</p><ul>${h.links.map((l) => `<li><a href="${l.href}">${esc(l.text)}</a></li>`).join('')}</ul></section>`;
      r.bodyContent = insertBeforeMainEnd(fixHubClaims(r.bodyContent), links + rfqFallbackForm());
      addNode(r, {
        '@type': 'Service', '@id': `${SITE}/inspection-services#service`, name: 'NDT Inspection Services',
        serviceType: 'Third-party NDT inspection (PAUT/TOFD, corrosion mapping, API 653 tanks, API 510/570 pressure equipment, procedure qualification)',
        description: 'In-service and new-construction NDT inspection with Level III-reviewed, code-referenced reporting. Mobilisation within North America.',
        url: `${SITE}/inspection-services`,
        provider: { '@type': 'Organization', name: 'Atlantis NDT', url: SITE, email: 'info@atlantisndt.com' },
        areaServed: [{ '@type': 'Country', name: 'United States' }, { '@type': 'Country', name: 'Canada' }],
      });
      out.hub++;
    }
  }

  {
    const r = byPath.get(OWNER);
    if (!r) out.missing.push(OWNER);
    else if (!r.bodyContent.includes('class="level-iii-engagements"')) {
      r.bodyContent = insertBeforeMainEnd(r.bodyContent, levelIiiHtml());
      mergeFaq(r, DATA.level3.sections.flatMap((s) => s.faqs));
      out.level3++;
    }
  }

  for (const b of DATA.contextBlocks) {
    const r = byPath.get(b.path);
    if (!r) { out.missing.push(b.path); continue; }
    if (r.bodyContent.includes('class="service-context-block"')) continue;
    r.bodyContent = insertBeforeFaqHeading(r.bodyContent, contextBlockHtml(b));
    out.context++;
  }

  for (const r of byPath.values()) {
    if (!r.path.startsWith('/consulting/ndt-consulting-') || r.path === OWNER) continue;
    if (r.noindex || /<meta name="robots" content="noindex/.test(r.bodyContent)) continue;
    if (r.bodyContent.includes(`href="${OWNER}"`) && /This page covers [^<]*not the national service/.test(r.bodyContent)) continue;
    if (r.bodyContent.includes('class="city-scope"')) continue;
    r.bodyContent = insertBeforeMainEnd(r.bodyContent, cityScopeHtml(r.path.replace('/consulting/ndt-consulting-', '')));
    out.cityScope++;
  }

  for (const [p, text] of Object.entries(ROUTER_EXTRA)) {
    const r = byPath.get(p);
    if (!r) { out.missing.push(p); continue; }
    if (r.bodyContent.includes(`href="${OWNER}">ASNT Level III consulting<`)) continue;
    r.bodyContent = insertBeforeMainEnd(r.bodyContent, `<section aria-label="National Level III engagement"><h2>National ASNT Level III engagement</h2><p>${text}</p></section>`);
    out.routers++;
  }
  return out;
}

/** Guards: no Atlantis pricing, no "Odoo", no RBI/FFS wording, no response-time promises in our copy. */
export function assertInspectionL3Clean() {
  const blob = JSON.stringify(DATA) + rfqFallbackForm() + levelIiiHtml();
  const bad = [
    [/[$£€₹]\s?\d|\bper (day|hour)\b|\bday[- ]rate\b|price|pricing (starts|from)/i, 'pricing'],
    [/odoo/i, 'Odoo'],
    [/\bRBI\b|risk-based inspection|fitness[- ]for[- ]service|\bFFS\b|API 579|API 58[01]/i, 'RBI/FFS'],
    [/within \d+\s*(hours?|h\b|days?|business days?)|\b24\s*h|same[- ]day/i, 'response-time promise'],
  ];
  const hits = bad.filter(([re]) => re.test(blob.replace(/no published pricing/gi, ''))).map(([, n]) => n);
  if (hits.length) throw new Error(`inspection-l3 copy failed guard: ${hits.join(', ')}`);
  return true;
}

export const INSPECTION_L3_DATA = DATA;
