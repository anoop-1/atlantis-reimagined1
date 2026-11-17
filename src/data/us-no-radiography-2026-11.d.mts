export function setUsPlaces(usPlaces: Iterable<string>): void;
export function isUsInspectionPath(path: string): boolean;
export function stripUsRtOffer(text: string, opts?: { force?: boolean }): { text: string; n: number };
export const US_RT_NOTE_TEXT: string;
export const US_RT_NOTE_HTML: string;
export const US_RT_DEPTH_PATHS: string[];
