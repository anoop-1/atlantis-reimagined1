import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { execFileSync } from "child_process";
import { createHash } from "crypto";

// 2026-11-18 (CLAUDE.md §80): the admin login used to compare against
// import.meta.env.VITE_ADMIN_EMAIL / VITE_ADMIN_PASSWORD, which Vite inlines, so both
// shipped in plain text in the public entry chunk. Only a salted SHA-256 of the pair is
// injected now; src/context/AuthContext.tsx hashes what the user types the same way.
// Keep ADMIN_AUTH_SALT in step with AuthContext.tsx.
const ADMIN_AUTH_SALT = "atlantisndt-admin-v1";
const adminAuthHash = (env: Record<string, string>) => {
   const email = (env.VITE_ADMIN_EMAIL || "").trim().toLowerCase();
   const password = env.VITE_ADMIN_PASSWORD || "";
   if (!email || !password) return "";
   return createHash("sha256").update(`${ADMIN_AUTH_SALT}\n${email}\n${password}`).digest("hex");
};

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
   const env = { ...loadEnv(mode, process.cwd(), "VITE_"), ...process.env } as Record<string, string>;
   return {
      define: {
         __ADMIN_AUTH_HASH__: JSON.stringify(adminAuthHash(env)),
      },
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
