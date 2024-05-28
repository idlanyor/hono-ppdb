import { serve } from "@hono/node-server";
import { Hono } from "hono";
import userRouter from "./controllers/userController";
const app = new Hono();
app.route("/users", userRouter);
app.get("/", async (c) => {
  return c.json({
    status: "Success",
    endpoint: "/users",
    data: [],
  });
});

const port = 3000;
console.log(`Server is running on port ${port}`);

serve({
  fetch: app.fetch,
  port,
});
