import { exec } from "child_process";

export function rerunFailures() {
  return new Promise((resolve) => {
    exec("npx playwright test --last-failed", () => {
      resolve({ status: "RERUN_COMPLETED" });
    });
  });
}