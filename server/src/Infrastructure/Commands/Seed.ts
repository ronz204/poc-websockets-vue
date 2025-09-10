import { Seeder } from "@Interfaces/Seeder";
import { Command } from "@Interfaces/Command";
import { AdminSeeder } from "@Seeders/AdminSeeder";

import { eq } from "drizzle-orm";
import { Seeders } from "@Models/Seeders";
import { Drizzle } from "@Database/Drizzle";

class Seed extends Command {
  private seeders: Seeder[] = [
    new AdminSeeder()
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

const command = new Seed();
await command.run();
