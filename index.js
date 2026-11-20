#!/usr/bin/env node
const { spawn } = require("node:child_process");

const cli = require.resolve("arcsight");
const child = spawn(process.execPath, [cli, "mcp"], { stdio: "inherit" });

child.on("exit", (code, signal) => {
  if (signal) {
    process.kill(process.pid, signal);
    return;
  }
  process.exit(code ?? 1);
});
