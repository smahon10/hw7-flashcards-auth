import { Hono } from "hono";
import { cors } from "hono/cors";
import decksRoute from "./routes/deck"

const app = new Hono();

app.use("/*", cors());

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

app.route("/", decksRoute);

export default app;
