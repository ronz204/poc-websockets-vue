import { Command } from "./Command";
import { Seeder as Seed } from "@Seeders/Seeder";
import { UserSeeder } from "@Seeders/UserSeeder";

import { eq } from "drizzle-orm";
import { Seeder } from "@Models/Seeder";
import { Drizzle } from "@Database/Drizzle";

class SeedCommand extends Command {
  private seeders: Seed[] = [
    new UserSeeder(),
  ];

  public async run(): Promise<void> {
    for (const seeder of this.seeders) {
      const existing = await Drizzle.select()
        .from(Seeder).where(eq(Seeder.name, seeder.name));

      if (existing.length) continue;
      await seeder.seed();

      await Drizzle.insert(Seeder).values({ name: seeder.name });
      console.log(`Seeded: ${seeder.name}`);
    };
  };
};

const command = new SeedCommand();
await command.run();
