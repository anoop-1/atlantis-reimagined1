/**
 * ndt-level-2-salary — see src/data/salary-level-pages.ts for the GSC evidence
 * behind this page's existence and targeting.
 */
import SalaryLevelPage from "@/components/SalaryLevelPage";
import { SALARY_LEVEL_PAGES } from "@/data/salary-level-pages";

const config = SALARY_LEVEL_PAGES.find((p) => p.path === "/ndt-level-2-salary")!;

export default function Page() {
  return <SalaryLevelPage config={config} />;
}
