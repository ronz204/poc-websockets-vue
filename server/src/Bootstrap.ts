import http from "node:http"
import { json } from "express";

import type { Express } from "express";
import { PingRouter } from "@Routers/PingRouter";

export class Bootstrap {
  private server: http.Server;

  constructor(private app: Express) {
    this.server = http.createServer(app);
  };

  public addRouting(): void {
    this.app.use("/ping", PingRouter);
  };

  public addMiddleware(): void {
    this.app.use(json());
  };

  public startup(port: number): void {
    this.server.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
  };
};
