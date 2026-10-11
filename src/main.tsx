import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { captureSatelliteReferral } from './lib/satellite-referral';
import { beginHandover, armReadySafetyNet } from './lib/prerender-handover';

captureSatelliteReferral();

const rootEl = document.getElementById("root")!;
// Soft-404 guard: keep the prerendered page so NotFound can fall back to it (PrerenderedFallback.tsx).
window.__PRERENDERED__ = { path: window.location.pathname, html: rootEl.innerHTML };
// The prerendered copy stays painted (it is the LCP) while React renders out of
// sight; the two swap in one frame once the page is ready (lib/prerender-handover.ts).
const appEl = beginHandover(rootEl);
createRoot(appEl).render(<App />);
// Navigation marks the root ready once a real page has mounted; this is only a
// safety net for pages without Navigation.
armReadySafetyNet(appEl);
// Build: 20260315T150128Z
