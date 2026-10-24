export interface IntentRoute { kind: string; h: string; p: string; links: [string, string][] }
export const ROUTE_MARKER: string;
export function methodFor(path: string): string | null;
export function intentRouteFor(path: string): IntentRoute | null;
export function allRouteTargets(): string[];
export function intentRouteHtml(b: IntentRoute): string;
