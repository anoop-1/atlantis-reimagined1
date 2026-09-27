import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

const rootEl = document.getElementById("root")!;
createRoot(rootEl).render(<App />);
// Navigation marks the root ready once a real page has mounted; this is only a
// safety net so a page without Navigation is never left behind the splash.
window.setTimeout(() => rootEl.setAttribute("data-ready", ""), 4000);
// Build: 20260315T150128Z
