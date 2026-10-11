// Prerendered-copy handover — Core Web Vitals / LCP (SEO audit action 7, 2026-10-12 release).
//
// Every page ships its complete crawler HTML inside <div id="root">. From 2026-09-27
// until this release a splash in index.html hid that copy behind a logo until React had
// mounted, so LCP waited for the ~325 KB (gzip) app bundle plus the route chunk:
// Search Console showed 0 "good" URLs (desktop LCP > 2.5 s).
//
// Now the prerendered copy paints at once and stays on screen while React builds the
// page out of sight; then the two are swapped in a single frame:
//  1. The prerendered container is renamed #prerender-veil. No node moves, so what is
//     already painted keeps its paint and position (index.html and index.css style
//     #prerender-veil exactly like the prerendered #root).
//  2. A fresh, empty <div id="root"> goes in front of it. React renders there, kept
//     out of sight by html.atl-handover (absolute, one viewport tall, visibility:hidden,
//     so it cannot be clicked or tabbed into and the screen reader tree stays clean).
//  3. When the page is ready (#root[data-ready], set by Navigation or by the safety net
//     below), the full stylesheet has applied and the first-screen entrance animations
//     have finished, the veil is removed
//     and #root revealed in the same task: no spinner, no blank frame, and nothing that
//     was visible moves, so CLS stays 0.
// Without JavaScript none of this runs and the prerendered copy simply stays.
//
// Kept deliberately small: no framework code, nothing here touches page content.

const VEIL_ID = "prerender-veil";
const HANDOVER_CLASS = "atl-handover";
const SETTLE_CAP_MS = 1500; // longest we wait for entrance animations after "ready"
const POLL_MS = 50;

/** Starts the handover and returns the element React should render into. */
export function beginHandover(prerendered: HTMLElement): HTMLElement {
  // Nothing prerendered (e.g. the dev server shell without content): render in place.
  if (!prerendered.firstElementChild) return prerendered;

  prerendered.id = VEIL_ID;
  const app = document.createElement("div");
  app.id = "root";
  // React's root goes first in document order, so getElementById() and the global
  // blocks' main/footer lookups find React's page rather than the veil's copy.
  prerendered.before(app);
  document.documentElement.classList.add(HANDOVER_CLASS);

  const observer = new MutationObserver(() => {
    if (!app.hasAttribute("data-ready")) return;
    observer.disconnect();
    whenSettled(app, () => swap(prerendered, app));
  });
  observer.observe(app, { attributes: true, attributeFilter: ["data-ready"] });
  return app;
}

/**
 * Safety net for pages that never mount Navigation (which normally sets data-ready).
 * From 4 s on, mark the page ready once React shows real page content (an <h1>) and
 * not the route-loading spinner; from 15 s on, accept any non-spinner content. Until
 * then the prerendered copy stays visible instead of handing over to a spinner.
 */
export function armReadySafetyNet(app: HTMLElement): void {
  const start = performance.now();
  const tick = () => {
    if (app.hasAttribute("data-ready")) return;
    const elapsed = performance.now() - start;
    const spinner = app.querySelector("[data-page-loader]");
    const content = app.querySelector("h1") || (elapsed >= 15000 && app.firstElementChild);
    if (!spinner && content) { app.setAttribute("data-ready", ""); return; }
    if (elapsed < 60000) window.setTimeout(tick, 250);
  };
  window.setTimeout(tick, 4000);
}

// Wait until (a) the full stylesheet has applied — scripts/inline-critical-css.mjs
// inlines only the rules the prerendered copy needs and loads the rest without
// blocking paint — and (b) the first screen has finished its entrance animations
// (framer-motion runs opacity fades as Web Animations), so React's page appears styled
// and in its final state rather than fading in over the copy it replaces. Infinite
// loops (pulses, spinners) are ignored; the animation wait is capped. If the stylesheet
// never arrives the prerendered copy simply stays.
function whenSettled(app: HTMLElement, done: () => void): void {
  const start = performance.now();
  let checks = 0;
  const check = () => {
    checks++;
    const animating = checks < 3 || entranceRunning(app);
    if (stylesheetsApplied() && (!animating || performance.now() - start > SETTLE_CAP_MS)) done();
    else window.setTimeout(check, POLL_MS);
  };
  window.setTimeout(check, POLL_MS);
}

function stylesheetsApplied(): boolean {
  return Array.from(document.querySelectorAll<HTMLLinkElement>("link[data-async-css]")).every((l) => l.media !== "print" && !!l.sheet);
}

function entranceRunning(app: HTMLElement): boolean {
  if (typeof document.getAnimations !== "function") return false;
  return document.getAnimations().some((a) => {
    if (a.playState !== "running") return false;
    const effect = a.effect as KeyframeEffect | null;
    const end = Number(effect?.getComputedTiming().endTime);
    if (!effect || !Number.isFinite(end)) return false;
    return !!effect.target && app.contains(effect.target as Node);
  });
}

const FIELD = /^(INPUT|TEXTAREA|SELECT)$/;
const norm = (s: string | null) => (s || "").replace(/\s+/g, " ").trim().toLowerCase();

function swap(veil: HTMLElement, app: HTMLElement): void {
  // Someone is typing into the prerendered copy: wait until focus leaves its fields.
  const active = document.activeElement as HTMLElement | null;
  if (active && veil.contains(active) && FIELD.test(active.tagName)) {
    active.addEventListener("focusout", () => window.setTimeout(() => swap(veil, app), 0), { once: true });
    return;
  }

  // Keep the visitor's place: remember the heading nearest the top of the screen.
  let anchor: { text: string; top: number } | null = null;
  if (window.scrollY > 0) {
    const h = Array.from(veil.querySelectorAll("h1, h2, h3")).find((el) => el.getBoundingClientRect().bottom > 0);
    if (h) anchor = { text: norm(h.textContent), top: h.getBoundingClientRect().top };
  }
  carryOverFieldValues(veil, app);

  veil.remove();
  document.documentElement.classList.remove(HANDOVER_CLASS);

  const match = anchor && Array.from(app.querySelectorAll("h1, h2, h3")).find((el) => norm(el.textContent) === anchor!.text);
  if (match) { window.scrollBy(0, match.getBoundingClientRect().top - anchor!.top); return; }
  if (window.location.hash.length > 1) {
    try { document.getElementById(decodeURIComponent(window.location.hash.slice(1)))?.scrollIntoView(); } catch { /* malformed hash */ }
  }
}

// Values typed into prerendered form fields move to React's fields with the same id
// (or name), through the native setter + input/change events React listens for.
function carryOverFieldValues(veil: HTMLElement, app: HTMLElement): void {
  veil.querySelectorAll<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>("input, textarea, select").forEach((src) => {
    if (!src.value || src.type === "hidden" || src.type === "submit" || src.type === "checkbox" || src.type === "radio") return;
    let dst: Element | null = null;
    try {
      dst = (src.id && app.querySelector(`#${CSS.escape(src.id)}`)) || (src.name && app.querySelector(`${src.tagName.toLowerCase()}[name="${CSS.escape(src.name)}"]`)) || null;
    } catch { return; }
    if (!dst || dst.tagName !== src.tagName || (dst as HTMLInputElement).value) return;
    const proto = Object.getPrototypeOf(dst);
    const setter = Object.getOwnPropertyDescriptor(proto, "value")?.set;
    if (!setter) return;
    setter.call(dst, src.value);
    dst.dispatchEvent(new Event(dst.tagName === "SELECT" ? "change" : "input", { bubbles: true }));
  });
}
