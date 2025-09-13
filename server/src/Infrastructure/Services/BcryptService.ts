import bcrypt from "bcryptjs";

export class BcryptService {
  private readonly saltRounds: number = 10;

  public async hash(password: string): Promise<string> {
    return await bcrypt.hash(password, this.saltRounds);
  };

  public async compare(password: string, hash: string): Promise<boolean> {
    return await bcrypt.compare(password, hash);
  };
};
