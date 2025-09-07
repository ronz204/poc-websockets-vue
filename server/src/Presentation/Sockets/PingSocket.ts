import { Socket } from "socket.io";
import { BaseSocket } from "./BaseSocket";

export class PingSocket extends BaseSocket {
  constructor(socket: Socket) {super(socket)};

  protected listening(): void {
    this.onConnection();
    this.socket.on("ping", () => this.onPingPong());
    this.socket.on("disconnect", () => this.onDisconnect());
  };

  private onConnection(): void {
    console.log(`New client connected to /ping: ${this.socket.id}`);
  };

  private onDisconnect(): void {
    console.log(`Client disconnected from /ping: ${this.socket.id}`);
  };

  private onPingPong(): void {
    this.broadcast<{ message: string }>("pong", { message: "ping pong" });
  };

  public static bind(socket: Socket): PingSocket {
    return new PingSocket(socket);
  };
};
