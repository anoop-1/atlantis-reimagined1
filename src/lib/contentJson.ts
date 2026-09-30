/**
 * Runtime loader for the per-item content JSON emitted at build time by
 * scripts/emit-content-json.mjs (public/data/...). 2026-09-29 (PERF).
 *
 * Blog posts and depth pages used to be bundled whole into their JS chunks
 * (~2 MB + ~3.7 MB gzip); now each page fetches only its own record.
 *
 * Results are memoised per URL so a revisit (or a re-render) resolves
 * synchronously via peekContentJson() and never shows a loading state twice.
 */
import { useEffect, useState } from "react";

type Entry = { promise: Promise<unknown>; value?: unknown; done: boolean };
const cache = new Map<string, Entry>();

export const blogJsonUrl = (slug: string) => `/data/blogs/${slug}.json`;
export const blogsIndexUrl = "/data/blogs-index.json";
/** Depth-page slugs are site paths ("/inspection/x") -> /data/depth/inspection/x.json */
export const depthJsonUrl = (path: string) => `/data/depth${path.replace(/\/+$/, "")}.json`;

export const complianceJsonUrl = (path: string) => `/data/compliance${path.replace(/\/+$/, "")}.json`;

const SAFE_URL = /^\/data\/[a-z0-9/-]+\.json$/;

/** Resolves to the parsed JSON, or null when missing/invalid (never rejects). */
export function loadContentJson<T>(url: string): Promise<T | null> {
  if (!SAFE_URL.test(url)) return Promise.resolve(null);
  let e = cache.get(url);
  if (!e) {
    const entry: Entry = { done: false, promise: Promise.resolve() };
    entry.promise = fetch(url, { headers: { Accept: "application/json" } })
      .then((r) => {
        // A missing file may come back as the SPA index.html with 200, so the
        // content type is checked, not just the status.
        const ct = r.headers.get("content-type") || "";
        if (!r.ok || !ct.includes("json")) return null;
        return r.json();
      })
      .catch(() => null)
      .then((v) => {
        entry.value = v ?? null;
        entry.done = true;
        // Don't pin failures: allow a later retry (e.g. transient network error).
        if (entry.value === null) cache.delete(url);
        return entry.value;
      });
    cache.set(url, entry);
    e = entry;
  }
  return e.promise as Promise<T | null>;
}

/** Synchronous read of an already-loaded URL (undefined = not loaded yet). */
export function peekContentJson<T>(url: string): T | null | undefined {
  const e = cache.get(url);
  return e && e.done ? (e.value as T | null) : undefined;
}

/**
 * React hook: { data, loading }. `data` is null when the file does not exist.
 * Pass null as url to skip loading.
 */
export function useContentJson<T>(url: string | null): { data: T | null; loading: boolean } {
  const initial = url ? peekContentJson<T>(url) : null;
  const [state, setState] = useState<{ url: string | null; data: T | null; loading: boolean }>({
    url,
    data: initial ?? null,
    loading: initial === undefined,
  });

  // URL changed during client-side navigation: reset synchronously so the old
  // item is never rendered under the new route.
  let current = state;
  if (state.url !== url) {
    const peek = url ? peekContentJson<T>(url) : null;
    current = { url, data: peek ?? null, loading: peek === undefined };
    setState(current);
  }

  useEffect(() => {
    if (!url || !current.loading) return;
    let alive = true;
    loadContentJson<T>(url).then((data) => {
      if (alive) setState({ url, data, loading: false });
    });
    return () => {
      alive = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url, current.loading]);

  return { data: current.data, loading: current.loading };
}

/**
 * True once the splash that hides the prerendered HTML has been lifted
 * (index.html + Navigation set #root[data-ready]). Before that, a page that is
 * still fetching should render nothing (the splash stays up) rather than a
 * spinner, so a first load never flashes an empty shell.
 */
export function isSplashLifted(): boolean {
  if (typeof document === "undefined") return true;
  return document.getElementById("root")?.hasAttribute("data-ready") ?? true;
}
