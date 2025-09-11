import { Users } from "@Models/Users";
import { Seeder } from "@Seeders/Seeder";
import { Drizzle } from "@Database/Drizzle";

export class UserSeeder extends Seeder {
  public name: string = "admin-seeder";

  public async seed(): Promise<void> {
    const admin: typeof Users.$inferInsert = {
      name: process.env.ADMIN_NAME!,
      password: process.env.ADMIN_PASSWORD!
    };

    await Drizzle.insert(Users).values(admin);
  };
};
