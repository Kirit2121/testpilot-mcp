import fs from "fs-extra";

export function readReport(path) {
  if (!fs.existsSync(path)) return { error: "Report not found" };
  const report = fs.readJsonSync(path);
  return {
    total: report.stats?.total,
    passed: report.stats?.passed,
    failed: report.stats?.failed,
    duration: report.stats?.duration
  };
}