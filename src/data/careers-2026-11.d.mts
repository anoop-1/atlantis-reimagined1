// Types for src/data/careers-2026-11.mjs
export type CareerSection = { h: string; p?: string[]; items?: string[]; steps?: string[] };
export type CareerJob = {
  slug: string; path: string; status: 'open' | 'closed'; datePosted: string; validThrough: string;
  title: string; description: string; h1: string; jobTitle: string; summary: string;
  card: { location: string; type: string; text: string };
  snapshot: [string, string][];
  sections: CareerSection[];
  apply: { subject: string; text: string; next: string; phone?: string; phoneText?: string };
  schema: Record<string, string | number>;
};
export type CareersData = {
  hub: {
    path: string; title: string; description: string; eyebrow: string; h1: string; intro: string;
    positionsHeading: string; positionsSub: string; whyHeading: string; why: { h: string; p: string }[];
    whereHeading: string; where: string; applyHeading: string; apply: string[]; noFee: string; equal: string;
  };
  jobs: CareerJob[];
};
export const SITE: string;
export const CAREERS_PATH: string;
export const CR: Record<string, string>;
export function isOpen(job: CareerJob, today?: Date): boolean;
export function openJobs(data: CareersData, today?: Date): CareerJob[];
export function jobFor(data: CareersData, pathname: string): CareerJob | null;
export function careersHubHtml(data: CareersData, today?: Date): string;
export function careerJobHtml(data: CareersData, job: CareerJob, today?: Date): string;
export function careersHubSchema(data: CareersData, today?: Date): Record<string, unknown>;
export function jobPostingSchema(data: CareersData, job: CareerJob, today?: Date): Record<string, unknown>;
export function assertCareersClean(data: CareersData, builtPaths?: Set<string>): void;
