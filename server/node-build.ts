import { createServer } from "./index";

const app = createServer();
const port = process.env.PORT || 3000;

// Return 404 for all non-API routes (Vercel routes them to SPA)
app.all("*", (req, res) => {
  res.status(404).json({ error: "API endpoint not found" });
});

app.listen(port, () => {
  console.log(`🚀 Fusion Starter API running on port ${port}`);
  console.log(`🔧 API: http://localhost:${port}/api`);
});

// Graceful shutdown
process.on("SIGTERM", () => {
  console.log("🛑 Received SIGTERM, shutting down gracefully");
  process.exit(0);
});

process.on("SIGINT", () => {
  console.log("🛑 Received SIGINT, shutting down gracefully");
  process.exit(0);
});
