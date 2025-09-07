import http from "node:http"
import { json } from "express";
import { Server } from "socket.io";

import type { Express } from "express";
import { PingRouter } from "@Routers/PingRouter";
import { PingSocket } from "@Sockets/PingSocket";

export class Bootstrap {
  public socket: Server;
  private server: http.Server;

  constructor(private app: Express) {
    this.server = http.createServer(app);
    this.socket = new Server(this.server);
  };

  public addRouting(): void {
    this.app.use("/ping", PingRouter);
  };

  public addMiddleware(): void {
    this.app.use(json());
  };

  public addSockets(): void {
    this.socket.of("/ping").on("connection", PingSocket.bind);
  };

  public startup(port: number): void {
    this.server.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
  };
};
