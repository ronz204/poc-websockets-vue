export abstract class Seeder {
  public name: string = "<seeder-name>";
  public abstract seed(): Promise<void>;
};
