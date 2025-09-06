import http from "node:http"
import express from "express"
import { Bootstrap } from "./Bootstrap"
import type { Request, Response } from "express"

const app = express()
const bootstrap = new Bootstrap()
const server = http.createServer(app)

app.get("/", (req: Request, res: Response) => {
  res.json({ message: "Hello, World!" });
});

server.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
