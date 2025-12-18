import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";

import { runUiTests } from "./tools/runUiTests.js";
import { readReport } from "./tools/readReport.js";
import { rerunFailures } from "./tools/rerunFailures.js";

const server = new Server(
  { name: "testpilot-mcp", version: "1.0.0" },
  { capabilities: { tools: {} } }
);

server.tool("run_ui_tests", { suite: "string" }, async ({ suite }) =>
  runUiTests(suite)
);

server.tool("read_test_report", { path: "string" }, async ({ path }) =>
  readReport(path)
);

server.tool("rerun_failed_tests", {}, async () => rerunFailures());

const transport = new StdioServerTransport();
await server.connect(transport);