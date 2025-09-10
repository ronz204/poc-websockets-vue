export abstract class Command {
  public abstract run(): Promise<void>;
};
