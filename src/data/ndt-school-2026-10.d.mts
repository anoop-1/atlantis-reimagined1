export function schoolCompareTable(
  SCHOOL: { compare: { h2: string; intro: string; caption: string; dropColumn: number; feesRow: string; feesCell: string } },
  HOUSTON: { routes: { head: string[]; rows: string[][] } },
): { h2: string; intro: string; caption: string; head: string[]; rows: string[][] };
