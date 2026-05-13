import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
   server: {
      host: "::",
      port: 8080,
   },
   plugins: [react(), mode === "development" && componentTagger()].filter(
      Boolean
   ),
   resolve: {
      alias: {
         "@": path.resolve(__dirname, "./src"),
      },
   },
   build: {
      target: "es2015", // <-- transpile modern JS down for Puppeteer
      chunkSizeWarningLimit: 600,
      rollupOptions: {
         output: {
            manualChunks: (id) => {
               // Sprint 15 perf — split heavy vendor + per-route chunks.
               if (id.includes("node_modules")) {
                  if (id.includes("react-dom") || id.includes("scheduler")) return "vendor-react";
                  if (id.includes("@radix-ui") || id.includes("lucide-react")) return "vendor-ui";
                  if (id.includes("framer-motion")) return "vendor-motion";
                  if (id.includes("recharts") || id.includes("d3")) return "vendor-charts";
                  if (id.includes("@tanstack")) return "vendor-tanstack";
                  if (id.includes("three") || id.includes("@react-three")) return "vendor-three";
                  return "vendor-misc";
               }
               // Digital twin 3D models — heaviest content, split off
               if (id.includes("/components/InteractiveJet") || id.includes("/components/InteractivePlant") || id.includes("/components/InteractivePipe")) {
                  return "dt-3d-models";
               }
               if (id.includes("/pages/blog/")) return "blog-pages";
               if (id.includes("/pages/compare/")) return "compare-pages";
               if (id.includes("/pages/erp-modules/") || id.includes("/pages/erp-industries/") || id.includes("/pages/erp/")) return "erp-pages";
               if (id.includes("/pages/case-studies/")) return "case-studies";
               if (id.includes("/pages/press/")) return "press-pages";
            },
         },
      },
   },
}));
