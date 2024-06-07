import { serve } from "@hono/node-server";
import { Hono } from "hono";

const app = new Hono();

app.get("/", (c) => {
  return c.text("Hello World");
});

const PORT = 3000;

serve({
  fetch: app.fetch,
  port: PORT,
});
