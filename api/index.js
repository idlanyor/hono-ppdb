import { Hono } from "hono";
import { handle } from "hono/vercel";
export const config = {
    runtime: "edge",
};
const app = new Hono().basePath("/api");
app.get("/", (c) => {
    return c.json({ code: 200, message: "Hello Hono!" }, 200);
});
app.get("*", (c) => {
    return c.json({ code: 404, message: "Not Found" }, 404);
});
export default handle(app);
