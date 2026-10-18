type Faq = { h2: string; items: [string, string][] };
type Hours = { classroom: Record<string, string[]>; ojt: Record<string, string[]> };
export function fillTrainingHours(s: string, HOURS: Hours): string;
export function trainingHubFaq(FAQ: Faq, HOURS: Hours): { q: string; html: string; text: string }[];
export function trainingHubFaqHtml(FAQ: Faq, HOURS: Hours): string;
