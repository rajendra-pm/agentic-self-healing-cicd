const express = require("express");
const { trace } = require("@opentelemetry/api");

const app = express();
const tracer = trace.getTracer("agentic-tracer");

app.get("/", (req, res) => {
  const span = tracer.startSpan("root");
  console.log("Telemetry: Request received");
  span.end();
  res.send("Self-Healing CI/CD Running");
});

app.listen(3000, () => {
  console.log("App running on port 3000");
});
