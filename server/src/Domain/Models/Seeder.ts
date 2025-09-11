import { pgTable, integer, varchar } from "drizzle-orm/pg-core";

export const Seeder = pgTable("seeders", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 255 }).notNull(),
});
