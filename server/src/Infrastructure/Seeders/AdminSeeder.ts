import { Seeder } from "./Seeder";
import { Users } from "@Models/Users";
import { Drizzle } from "@Database/Drizzle";

export class AdminSeeder extends Seeder {
  public name: string = "admin-seeder";

  public async seed(): Promise<void> {
    const admin: typeof Users.$inferInsert = {
      name: process.env.ADMIN_NAME!,
      password: process.env.ADMIN_PASSWORD!
    };

    await Drizzle.insert(Users).values(admin);
  };
};
