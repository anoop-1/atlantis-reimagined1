export interface DownloadItem { key: string; kind: "xlsx" | "pdf"; title: string; file: string; badge: string; note: string; page: string | null }
export interface DownloadsBlock { items: DownloadItem[]; secondary: [string, string][] }
export const TEMPLATES: Record<string, { title: string; method: string; file: string; page: string }>;
export const PACKS: Record<string, { title: string; method: string; kind: string; count: number; methodName: string; file: string }>;
export const PLACEMENTS: [string[], string[]][];
export const DOWNLOADS_COPY: {
  h2: string; intro: string; templateNote: string; packNote: string;
  cta: { h3: string; p: string; button: string; href: string; secondary: [string, string][] };
};
export const DOWNLOADS_MARKER: string;
export const DL_STYLE: { button: string; ctaButton: string; onDark: string };
export function downloadsFor(path: string): DownloadsBlock | null;
export function downloadsHtml(block: DownloadsBlock): string;
