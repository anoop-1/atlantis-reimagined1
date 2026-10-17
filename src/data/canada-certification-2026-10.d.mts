// Types for canada-certification-2026-10.mjs (shared by React and the crawler; 2026-10-17).
export interface CanadaPageMeta { title: string; description: string; h1: string }
export interface CanadaData { paths: string[]; pages: Record<string, CanadaPageMeta> }
export function isCanadaTrainingPath(data: CanadaData, path: string): boolean;
export function canadaPageMeta(data: CanadaData, path: string): CanadaPageMeta | null;
export function firstH2InsertIndex(html: string, from?: number, end?: number): number;
