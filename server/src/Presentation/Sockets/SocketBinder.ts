import { Socket } from "socket.io";

export class SocketBinder {
  public static bind(socket: Socket): void {
    console.log("a user connected", socket.id);

    socket.on("disconnect", async () => {
      console.log("user disconnected", socket.id);
    });
  };
};
