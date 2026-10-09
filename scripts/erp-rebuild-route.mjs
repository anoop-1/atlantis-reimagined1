// ERP decision experience — crawler layer (2026-09-30, audit plan item 9).
//
// React replaces #root on load (createRoot), so the static HTML below is what
// crawlers and no-JS visitors get. It mirrors src/components/erp/* from the same
// data file (src/data/erp-decision.json). Capabilities come ONLY from
// erp-apps-catalog.json + the FEATURE FACTS in scripts/erp-apps-content-brief.md.
// No prices, no budget bands, never the underlying platform's name.
//
// Hook (prerender.mjs, render loop, right before writeRoute):
//   route = applyErpRebuild(route);
import { readFileSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const D = JSON.parse(readFileSync(join(ROOT, 'src/data/erp-decision.json'), 'utf-8'));
const CAT = JSON.parse(readFileSync(join(ROOT, 'src/data/erp-apps-catalog.json'), 'utf-8'));
const APPS = Object.fromEntries(CAT.apps.map((a) => [a.slug, a]));

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const WALK = D.walkthroughHref.replace(/&/g, '&amp;');
const appLink = (slug) => `<a href="/erp/apps/${slug}">${esc(APPS[slug]?.name || slug)}</a>`;
const appList = (slugs) => slugs.map(appLink).join(', ');
const SUBJECT = 'ERP enquiry (from /erp)';

export const ERP_REBUILD_MARKER = 'data-erp-rebuild="2026-09-30"';

export function renderErpDecisionHtml() {
  const problems = D.problems.map((p) => `      <li id="erp-fix-${p.key}"><h3>${esc(p.label)}</h3><p><strong>The problem:</strong> ${esc(p.problem)}</p><p><strong>What changes:</strong> ${esc(p.solves)}</p><p>Apps that handle it: ${appList(p.apps)}.</p></li>`).join('\n');

  const questions = D.assessment.questions.map((q) =>
    `      <li><fieldset><legend>${esc(q.q)}</legend>${q.options.map((o, i) => `<label><input type="radio" name="assess_${q.key}" value="${i}"> ${esc(o)}</label>`).join(' ')}</fieldset><p>Related module: ${appLink(q.module)}.</p></li>`).join('\n');
  const bands = D.assessment.bands.map((b) => `<li><strong>${b.min} to ${b.max} points: ${esc(b.label)}.</strong> ${esc(b.text)}</li>`).join('');

  const cfg = D.configurator;
  const phases = cfg.phases.map((ph) => `<li><strong>${esc(ph.label)}</strong>: ${appList(ph.apps)}.</li>`).join('');

  const workflow = D.workflow.map((w) => `<li><h3>${esc(w.step)}</h3><p>${esc(w.text)} (${appLink(w.app)} app)</p></li>`).join('\n');
  const products = D.products.map((p) => `<li><h3><a href="${p.path}">${esc(p.name)}</a></h3><p><strong>On its own:</strong> ${esc(p.standalone)}</p><p><strong>As an ERP module:</strong> ${esc(p.asModule)} See the ${appLink(p.app)} app.</p></li>`).join('\n');
  const security = D.security.map((x) => `<li><h3>${esc(x.h)}</h3><p>${esc(x.p)}</p></li>`).join('\n');

  const needOpts = D.problems.map((p) => `<option value="${p.key}">${esc(p.label)}</option>`).join('');
  const crewOpts = D.form.crewOptions.map((c) => `<option value="${esc(c)}">${esc(c)}</option>`).join('');

  return `
    <div ${ERP_REBUILD_MARKER}>
    <p><strong>${esc(D.valueProp)}</strong></p>
    <p><a href="${WALK}">Book a guided walkthrough</a> · <a href="#erp-fix">Find your modules</a></p>
    <section id="erp-fix">
      <h2>What are you trying to fix?</h2>
      <p>Pick the problem that costs you most. Each option below lists the apps that handle it and what changes.</p>
      <ul>
${problems}
      </ul>
    </section>
    <section id="erp-assessment">
      <h2>Operations maturity assessment</h2>
      <p>${esc(D.assessment.intro)} Each answer scores 0, 1 or 2 points, in the order shown.</p>
      <ol>
${questions}
      </ol>
      <p>Your score out of 10 places you in one of three bands, and the questions where you scored lowest become your recommended starting modules:</p>
      <ul>${bands}</ul>
    </section>
    <section id="erp-configurator">
      <h2>ERP workflow configurator</h2>
      <p>${esc(cfg.intro)}</p>
      <p>How you run it today — the configurator gives migration notes and a kickoff checklist for each starting point:</p>
      <ul>${(cfg.workflows || []).map((w) => `<li><strong>${esc(w.label)}:</strong> ${esc(w.note)} Have ready: ${w.prepare.map(esc).join('; ')}.</li>`).join('')}</ul>
      <p>Biggest challenge (sets where you start): ${D.problems.map((p) => esc(p.label)).join(', ')}. Crew size bands: ${cfg.crewBands.map((b) => esc(b.label)).join('; ')}. Methods: ${cfg.methods.join(', ')}. Modules wanted: ${D.problems.map((p) => esc(p.label)).join(', ')}.</p>
      <p>Your plan can be copied or downloaded as a summary, or sent with a demo request.</p>
      <p>The configurator recommends modules from your needs (running RT adds ${appLink('fleet')}, which records whether a vehicle can carry radioactive sources; three or more methods add ${appLink('procedures')}) and orders them into rollout phases:</p>
      <ol>${phases}</ol>
      <p>${esc(cfg.timelineNote)}</p>
    </section>
    <section id="erp-workflow">
      <h2>One job, start to finish</h2>
      <p>A sample inspection job as it moves through the ERP, from the request to the invoice.</p>
      <ol>
${workflow}
      </ol>
    </section>
    <section id="erp-products">
      <h2>Two products that also run inside the ERP</h2>
      <ul>
${products}
      </ul>
    </section>
    <section id="erp-security">
      <h2>Security and data hosting</h2>
      <ul>
${security}
      </ul>
    </section>
    <section id="erp-enquiry">
      <h2>${esc(D.form.heading)}</h2>
      <p>${esc(D.form.sub)}</p>
      <form name="erp-short" method="post" action="mailto:info@atlantisndt.com?subject=${encodeURIComponent(SUBJECT)}" enctype="text/plain">
        <input type="hidden" name="form_id" value="erp-short">
        <input type="hidden" name="business_line" value="erp">
        <p><label for="erp-short-name">Name</label> <input id="erp-short-name" name="name" type="text" required autocomplete="name"></p>
        <p><label for="erp-short-company">Company</label> <input id="erp-short-company" name="company" type="text" required autocomplete="organization"></p>
        <p><label for="erp-short-email">Work email</label> <input id="erp-short-email" name="email" type="email" required autocomplete="email"></p>
        <p><label for="erp-short-need">What do you want to fix?</label> <select id="erp-short-need" name="need" required>${needOpts}</select></p>
        <p><label for="erp-short-crew">Crew size</label> <select id="erp-short-crew" name="crew_size" required>${crewOpts}</select></p>
        <p><button type="submit">Send my enquiry</button></p>
      </form>
      <p>After you send it you can <a href="${WALK}">book a guided walkthrough</a>, or reach us on the <a href="/contact?service=erp">contact page</a>.</p>
    </section>
    </div>
`;
}

export function renderErpCompactSelectorHtml() {
  const items = D.problems.map((p) => `<li><strong>${esc(p.label)}:</strong> ${esc(p.problem)} Start with ${appList(p.apps.slice(0, 3))}. <a href="/erp#erp-fix">See the module path</a>.</li>`).join('');
  return `
    <section id="erp-fix-compact" ${ERP_REBUILD_MARKER}>
      <h2>What are you trying to fix?</h2>
      <ul>${items}</ul>
      <p>Not sure where to start? Take the five-question <a href="/erp#erp-assessment">operations maturity assessment</a>, or <a href="${WALK}">book a guided walkthrough</a> and we will show the apps running on an NDT workflow.</p>
    </section>
`;
}

function insertAfterIntro(body, html) {
  // After the first paragraph that follows the H1; fall back to straight after <main>.
  const h1 = body.search(/<h1[\s>]/i);
  if (h1 >= 0) {
    const pEnd = body.indexOf('</p>', h1);
    if (pEnd >= 0) return body.slice(0, pEnd + 4) + html + body.slice(pEnd + 4);
  }
  return body.replace(/<main[^>]*>/i, (m) => m + html);
}

function insertBeforeSecondH2AfterAnswer(body, html) {
  // First answer section = "What is an NDT ERP?" block; insert before the next <h2>.
  const q = body.search(/<h2[^>]*>\s*What is an NDT ERP\?/i);
  if (q >= 0) {
    const next = body.indexOf('<h2', q + 4);
    if (next >= 0) return body.slice(0, next) + html + body.slice(next);
  }
  const faq = body.search(/<h2[^>]*>\s*Frequently asked/i);
  if (faq >= 0) return body.slice(0, faq) + html + body.slice(faq);
  return body.replace(/<\/main>/i, html + '</main>');
}

export function applyErpRebuild(route) {
  if (!route || !route.bodyContent || route.bodyContent.includes(ERP_REBUILD_MARKER)) return route;
  if (route.path === '/erp') return { ...route, bodyContent: insertAfterIntro(route.bodyContent, renderErpDecisionHtml()) };
  if (route.path === '/ndt-erp-solution') return { ...route, bodyContent: insertBeforeSecondH2AfterAnswer(route.bodyContent, renderErpCompactSelectorHtml()) };
  return route;
}
