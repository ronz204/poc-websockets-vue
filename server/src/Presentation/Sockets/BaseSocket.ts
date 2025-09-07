import { Socket } from "socket.io";

export abstract class BaseSocket {
  protected socket: Socket;

  constructor(socket: Socket) {
    this.socket = socket;
    this.listening();
  };

  protected abstract listening(): void;

  protected emit<T>(event: string, data: T) {
    this.socket.emit(event, data);
  };

  protected broadcast<T>(event: string, data: T) {
    this.socket.broadcast.emit(event, data);
  };
};
