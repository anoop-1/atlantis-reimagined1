// Types for ascan-model-2026-10.mjs (shared by UtAscanDemo.tsx and scripts/ascan-simulator-2026-10.mjs).
export type MaterialKey = 'steel' | 'ss' | 'al';
export const MATERIALS: { key: MaterialKey; label: string; v: number }[];
export const PLATE_LEN: number;
export const FLAW: { from: number; to: number; depthFrac: number };
export const LIMITS: Record<'thickness' | 'gain' | 'range' | 'gateStart' | 'gateWidth' | 'gateLevel', [number, number]>;
export const DEFAULTS: { pos: number; gain: number; thickness: number; material: MaterialKey; range: number; gateStart: number; gateWidth: number; gateLevel: number };
export const SAMPLES: number;
export const AMP: Record<'pulse' | 'flaw' | 'flawRepeat' | 'shadowedBackwall' | 'backwall' | 'secondBackwall' | 'grass', number>;
export function timeOf(depthMm: number, v: number): number;
export function depthOf(tUs: number, v: number): number;
export interface AscanInput { pos?: number; gain?: number; thickness?: number; material?: MaterialKey; range?: number; gateStart?: number; gateWidth?: number; gateLevel?: number }
export interface AscanResult {
  v: number; flawDepth: number; overFlaw: boolean; rangeUs: number; tBack: number; tFlaw: number; amps: number[];
  backwallOnScreen: boolean; mainPeak: number; backwallPeak: number; saturated: boolean;
  gate: { start: number; end: number; level: number; peak: number; depth: number | null; time: number | null; alarm: boolean };
}
export function computeAscan(input?: AscanInput): AscanResult;
export function workedExample(): { setup: string; steps: string[]; check: string };
