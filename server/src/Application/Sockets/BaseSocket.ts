import { Socket } from "socket.io";

export abstract class BaseSocket {
  protected socket: Socket;

  constructor(socket: Socket) {
    this.socket = socket;
    this.listening();
  };

  protected abstract listening(): void;

  protected emit(event: string, data: any) {
    this.socket.emit(event, data);
  };

  protected broadcast(event: string, data: any) {
    this.socket.broadcast.emit(event, data);
  };
};
