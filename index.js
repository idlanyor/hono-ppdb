import { createServer } from "http";
const server = createServer();
server.on("request", (req, res) => {
    switch (req.url) {
        case "/":
            res.end(JSON.stringify({ message: "Hello from express" }));
            break;
        default:
            res.end(JSON.stringify({ message: "not found" }));
    }
});
server.listen(8000, "localhost", () => console.log(`server berjalan di http://localhost${8000}`));
