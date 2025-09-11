import { Command } from "./Command";
import { Seeder } from "@Seeders/Seeder";
import { UserSeeder } from "@Seeders/UserSeeder";

import { eq } from "drizzle-orm";
import { Seeders } from "@Models/Seeders";
import { Drizzle } from "@Database/Drizzle";

class SeedCommand extends Command {
  private seeders: Seeder[] = [
    new UserSeeder(),
  ];

  public async run(): Promise<void> {
    for (const seeder of this.seeders) {
      const existing = await Drizzle.select()
        .from(Seeders).where(eq(Seeders.name, seeder.name));

      if (existing.length) continue;
      await seeder.seed();

      await Drizzle.insert(Seeders).values({ name: seeder.name });
      console.log(`Seeded: ${seeder.name}`);
    };
  };
};

const command = new SeedCommand();
await command.run();
