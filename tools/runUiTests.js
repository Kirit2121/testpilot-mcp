import { exec } from "child_process";

export function runUiTests(suite) {
  return new Promise((resolve) => {
    exec("npx playwright test --reporter=json", (err) => {
      resolve({
        status: err ? "FAILED" : "PASSED",
        reportPath: "./reports/report.json"
      });
    });
  });
}