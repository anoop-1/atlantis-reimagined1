import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { execFileSync } from "child_process";

// https://vitejs.dev/config/
// lovable-tagger is imported DYNAMICALLY and ONLY in development. This keeps it
// out of the production build path so Vercel builds never resolve its nested
// esbuild (that nested-dep resolution under `bun install` caused intermittent
// "Cannot find package …/lovable-tagger/node_modules/esbuild" build failures
// and flaky auto-deploys). 2026-05-29.
// 2026-09-29 (PERF): blog posts and depth pages are fetched per item at runtime
// from public/data/ instead of being bundled. Generate those files on every
// build/dev start so no build path (npm run build, build:full, plain `vite`)
// can ship without them. See scripts/emit-content-json.mjs.
const emitContentJson = {
   name: "atlantis-emit-content-json",
   buildStart() {
      execFileSync(process.execPath, ["scripts/emit-content-json.mjs"], { stdio: "inherit", cwd: __dirname });
   },
};

export default defineConfig(async ({ mode }) => {
   const plugins: any[] = [emitContentJson, react()];
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
         // Read (then deleted) by scripts/preload-route-chunks.mjs to add each
         // page's route-chunk modulepreload tags to its prerendered HTML.
         manifest: true,
         // Let Rollup follow the existing lazy route boundaries. The old
         // manual groups absorbed shared dependencies and preloaded the full
         // blog and 3D bundles on every page, including text-only articles.
      },
   };
});
