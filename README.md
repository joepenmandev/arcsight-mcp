# ArcSight MCP — Stop Cursor & Claude from Breaking Working Code

**ArcSight** gives Cursor, Claude Code, and Windsurf deterministic x-ray vision into your codebase's dependency graph (TypeScript, JavaScript, Python, and PHP).

One command automatically configures your MCP server and agent guardrails so your AI checks downstream blast radius—and stops to ask confirmation—before editing high-impact shared files.

## Quickstart (30 Seconds)

Run this inside the root of any Git repository:

```bash
npx arcsight init
```

Then **reload Cursor** (or restart Claude Code once) so the `arcsight` MCP server activates.

### What `npx arcsight init` Does
1. **Auto-configures your AI editors:** Writes `.cursor/mcp.json`, `.mcp.json` (Claude Code), and `.windsurf/mcp.json` pointing to `npx -y arcsight mcp`.
2. **Injects pre-edit guardrails:** Adds `.cursor/rules/arcsight.mdc` and a marked block in `CLAUDE.md` instructing the agent to run `check_file_impact` before editing shared files and `architecture_status` before finishing.
3. **Reveals single points of failure:** Immediately prints your top shared hubs in plain English (e.g., `src/auth/session — 26 files depend on this. It sits on Login.`).

## MCP Tools Included
* **`check_file_impact`**: Computes direct callers and full downstream blast radius before an agent edits a file. Flags high-impact hubs (`>20` dependents) and instructs the agent to stop and confirm.
* **`architecture_status`**: Verifies that recent edits did not introduce new circular dependencies or structural regressions.

## Privacy & Security
* **100% Local:** All dependency parsing and graph analysis run locally on your machine. Your source code is never uploaded.
* **Free:** All CLI and MCP commands are free to use via `npx arcsight init`.

## Server entrypoint

This repository does not contain the ArcSight engine. `index.js` starts the published `arcsight@1.0.30` package over stdio:

```bash
npm install
node index.js
```

## Links
* Website & Observatory Reports: [https://arcsight.ai](https://arcsight.ai)
* npm Package: [https://www.npmjs.com/package/arcsight](https://www.npmjs.com/package/arcsight)
* Issues & Feedback: [Open an issue](https://github.com/joepenmandev/arcsight-mcp/issues)
