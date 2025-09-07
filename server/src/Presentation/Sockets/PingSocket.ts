import { Socket } from "socket.io";

export class PingSocket {
  public static bind(socket: Socket): void {
    PingSocket.onConnect(socket.id);

    socket.on("disconnect", () => {
      PingSocket.onDisconnect(socket.id)
    });
  };

  public static onConnect(id: string): void {
    console.log("a user connected to PingSocket", id);
  };

  public static onDisconnect(id: string): void {
    console.log("user disconnected from PingSocket", id);
  };
};
