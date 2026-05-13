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
      // NOTE: do NOT split react / react-dom into separate manual chunks.
      // react-dom relies on react's internal `__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED`
      // and a split breaks module init order at runtime. Vite/Rollup's default
      // chunking already groups them correctly. Manual splits are only safe
      // for libraries that don't share runtime state with React.
      // Sprint 15 perf — content-cluster splits only (no React vendor split).
      rollupOptions: {
         output: {
            manualChunks: (id) => {
               // Heavy 3D content — split off
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
