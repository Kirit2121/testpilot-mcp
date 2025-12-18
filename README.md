# TestPilot MCP

TestPilot MCP is an open-source **Model Context Protocol (MCP) server** that allows AI models
(Claude, ChatGPT, GitHub Copilot) to **run tests, analyze results, and orchestrate QA workflows locally**.

It works with your **existing UI and API test frameworks** — no rewrites, no lock-in.

---

## 🚀 What TestPilot MCP Does

TestPilot MCP enables AI to:

- Run Playwright UI tests
- Run existing API test suites (any framework)
- Read and summarize test reports
- Rerun failed tests
- Explain failures in plain English

All **locally**, using your current test setup.

---

## 🧠 What TestPilot MCP Is NOT

- ❌ Not a test framework
- ❌ Not a Playwright replacement
- ❌ Not a cloud service
- ❌ Not automatic test generation

TestPilot MCP is a **controller / orchestrator** that lets AI interact with real tools via MCP.

---

## 📦 Requirements

You must already have:

- Node.js (v18+ recommended)
- A working test setup (UI and/or API)
- Tests that can run via CLI

If this works on your machine:
```bash
npx playwright test
```

or:
```bash
npm run api-tests
```

Then TestPilot MCP will work.

---

## 🔧 Installation

```bash
git clone https://github.com/Kirit2121/testpilot-mcp
cd testpilot-mcp
npm install
npx playwright install
```

---

## ▶️ Running the MCP Server

```bash
node server.js
```

This starts the MCP server and exposes TestPilot tools to MCP-compatible AI clients.

---

## 🤖 Using with AI Clients

### Claude Desktop / ChatGPT MCP

Add this to your MCP configuration:

```json
{
  "mcpServers": {
    "testpilot": {
      "command": "node",
      "args": ["server.js"]
    }
  }
}
```

Restart the AI client after saving.

---

## 🧪 Available Tools

### UI Testing
- `run_ui_tests` – Executes Playwright tests
- `read_test_report` – Reads Playwright JSON report
- `rerun_failed_tests` – Reruns failed Playwright tests

### API Testing
- `run_api_tests` – Runs any API test command (framework-agnostic)

---

## 🧪 API Testing Usage Example

If your project already supports:
```bash
npm run api-tests
```

You can tell the AI:
> “Run API tests using npm run api-tests and summarize failures.”

TestPilot MCP will:
- Execute the command
- Capture output
- Return structured results to the AI

No framework changes required.

---

## 📁 Recommended Project Structure

```
your-project/
├── tests/
├── playwright.config.ts
├── package.json
├── testpilot-mcp/
```

TestPilot MCP can live alongside your existing test repository.

---

## 🔐 Security Model

- TestPilot MCP only executes tools you explicitly expose
- No remote execution unless you configure it
- Runs locally under your user permissions
- No hidden network access

---

## 🧩 Extending TestPilot MCP

You can extend TestPilot MCP with:
- CI/CD triggers (GitHub Actions, Jenkins)
- Jira issue creation
- Slack / Teams notifications
- Docker support
- Release readiness scoring

Pull requests are welcome.

---

## 🤝 Who Is This For?

- QA Engineers
- SDETs
- Developers
- DevOps teams
- AI tooling enthusiasts

If you already have tests, TestPilot MCP helps AI **control and reason about them**.

---

## 📄 License

MIT
