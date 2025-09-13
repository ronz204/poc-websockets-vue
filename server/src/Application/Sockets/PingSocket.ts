import { Socket } from "socket.io";
import { BaseSocket } from "./BaseSocket";

export class PingSocket extends BaseSocket {
  constructor(socket: Socket) {super(socket)};

  protected listening(): void {
    this.socket.on("ping", () => this.onPingPong());
  };

  private onPingPong(): void {
    this.broadcast("pong", { message: "ping pong" });
  };

  public static bind(socket: Socket): PingSocket {
    return new PingSocket(socket);
  };
};
