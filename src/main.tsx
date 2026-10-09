import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { captureSatelliteReferral } from './lib/satellite-referral';

captureSatelliteReferral();

const rootEl = document.getElementById("root")!;
// Soft-404 guard: keep the prerendered page so NotFound can fall back to it (PrerenderedFallback.tsx).
window.__PRERENDERED__ = { path: window.location.pathname, html: rootEl.innerHTML };
createRoot(rootEl).render(<App />);
// Navigation marks the root ready once a real page has mounted; this is only a
// safety net so a page without Navigation is never left behind the splash.
window.setTimeout(() => rootEl.setAttribute("data-ready", ""), 4000);
// Build: 20260315T150128Z
