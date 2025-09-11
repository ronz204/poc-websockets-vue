import { eq } from "drizzle-orm";
import { Users } from "@Models/Users";
import { PgColumn } from "drizzle-orm/pg-core";
import { NodePgDatabase } from "drizzle-orm/node-postgres";

export class UserRepository {
  constructor(private db: NodePgDatabase) {};

  public find() {
    return this.db.select().from(Users).$dynamic();
  };

  public select(projection: Record<string, PgColumn>) {
    return this.db.select(projection).from(Users).$dynamic();
  };

  public async insert(user: typeof Users.$inferInsert) {
    const query = this.db.insert(Users).values(user);
    return await query.returning({ id: Users.id }).execute();
  };

  public async delete(id: number) {
    const query = this.db.delete(Users).where(eq(Users.id, id));
    return await query.returning({ id: Users.id }).execute();
  };

  public async update(id: number, data: Partial<typeof Users.$inferInsert>) {
    const query = this.db.update(Users).set(data).where(eq(Users.id, id));
    return await query.returning({ id: Users.id }).execute();
  };
};
