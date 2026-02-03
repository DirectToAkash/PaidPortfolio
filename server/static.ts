import express, { type Express } from "express";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export function serveStatic(app: Express) {
  // In production, server runs from /dist, and client build is in /dist/public
  const distPath = path.join(__dirname, "public");

  if (!fs.existsSync(distPath)) {
    console.error("Static path not found:", distPath);
    throw new Error("Frontend build folder missing");
  }

  app.use(express.static(distPath));

  // SPA fallback
  app.get("*", (_req, res) => {
    res.sendFile(path.join(distPath, "index.html"));
  });
}