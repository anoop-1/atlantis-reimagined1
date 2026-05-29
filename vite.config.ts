import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
// lovable-tagger is imported DYNAMICALLY and ONLY in development. This keeps it
// out of the production build path so Vercel builds never resolve its nested
// esbuild (that nested-dep resolution under `bun install` caused intermittent
// "Cannot find package …/lovable-tagger/node_modules/esbuild" build failures
// and flaky auto-deploys). 2026-05-29.
export default defineConfig(async ({ mode }) => {
   const plugins: any[] = [react()];
   if (mode === "development") {
      const { componentTagger } = await import("lovable-tagger");
      plugins.push(componentTagger());
   }
   return {
      server: {
         host: "::",
         port: 8080,
      },
      plugins,
      resolve: {
         alias: {
            "@": path.resolve(__dirname, "./src"),
         },
      },
      build: {
         target: "es2020", // es2020 supports BigInt literals (required by @splinetool/runtime wasm loader)
         chunkSizeWarningLimit: 600,
         // NOTE: do NOT split react / react-dom into separate manual chunks.
         rollupOptions: {
            output: {
               manualChunks: (id: string) => {
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
   };
});
