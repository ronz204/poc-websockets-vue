import { pgTable, integer, varchar } from "drizzle-orm/pg-core";

export const User = pgTable("users", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 255 }).notNull(),
  password: varchar({ length: 255 }).notNull(),
});
