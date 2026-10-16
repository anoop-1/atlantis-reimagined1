// Types for training-upgrade-2026-10.mjs (shared by React and scripts/training-upgrade-2026-10.mjs).
export type Link = [string, string];
export type TrainingUpgradeMethod = {
  key: string;
  short: string;
  name: string;
  topicsH2: string;
  topics: string[];
  hoursH2: string;
  hoursCaption: string;
  hoursHead: string[];
  hoursRows: [string, string, string][];
  checksH2: string;
  checksIntro: string;
  checks: string[];
  linksH2: string;
  links: Link[];
};
export type TrainingUpgrade = {
  path: string;
  react: boolean;
  method: TrainingUpgradeMethod | null;
  who: {
    h2: string;
    intro: string;
    columns: { h3: string; items: string[]; link?: Link }[];
    closing: string;
  };
  practical: {
    h2: string;
    intro: string;
    steps: [string, string][];
    trains: { h3: string; items: string[] };
    cannot: { h3: string; items: string[] };
    note: string;
    links: Link[];
  };
  instructor: {
    h2: string;
    lead: string;
    authorLink: Link;
    verify: string;
    verifyLink: Link;
    note: string | null;
  };
};
export function trainingUpgradeFor(path: string, data: unknown, hours: unknown): TrainingUpgrade | null;
export function trainingUpgradePaths(data: unknown): string[];
