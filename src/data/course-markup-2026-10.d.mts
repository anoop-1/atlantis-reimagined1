// Types for course-markup-2026-10.mjs (shared by React and the crawler; 2026-10-12 training release).
export type Json = Record<string, unknown>;
export interface FactsData { pages: Record<string, Json>; prereqByLevel: string[] }
export interface HoursData { classroom: Record<string, string[]>; ojt: Record<string, string[]> }
export interface SessionsData { venues: Record<string, Json>; sessions: Json[] }
export interface SessionRow { course: string; dates: string; format: string; venue: string }
export const SITE: string;
export const ORG: Json;
export const INSTRUCTOR: Json;
export const COURSE_MODES: string[];
export const FIVE_METHODS: string[];
export const OFFER_CATEGORIES: string[];
export function isoHours(h: number): string;
export function classroomHours(hours: HoursData, keys: string[], levels: number[]): number | null;
export function workloadFor(entry: Json | null | undefined, hours: HoursData): number | null;
export function packageHours(hours: HoursData, levelIdx: number): number | null;
export interface MethodRow { key: string; method: string; l1: string; l2: string; pages: [string, string][] }
export function methodRows(facts: FactsData, hours: HoursData): MethodRow[];
export function hoursCell(entry: Json | null | undefined, hours: HoursData): { pre: string; post: string } | null;
export function sessionsFor(path: string, sessions: SessionsData, now?: Date | number | string): Json[];
export function sessionInstance(s: Json, sessions: SessionsData): Json;
export function sessionRows(path: string, sessions: SessionsData, now?: Date | number | string): SessionRow[];
export function methodCourseNode(path: string, d: { facts: FactsData; hours: HoursData; sessions: SessionsData; now?: Date | number | string }): Json | null;
export function programmeCourseNode(path: string, d: { name: string; description: string; hours: HoursData; sessions: SessionsData; now?: Date | number | string; modes?: string[] }): Json;
export function programmeFor(path: string, copy: Json): { name: string; description: string; modes?: string[] } | null;
export function coursePathsFor(facts: FactsData, copy: Json): string[];
export function courseNodeForPath(path: string, d: { facts: FactsData; hours: HoursData; sessions: SessionsData; copy: Json; now?: Date | number | string }): Json | null;
export function validateCourseNode(c: Json): string[];
export function validateSessionsData(data: SessionsData, builtPaths?: Set<string>): string[];
