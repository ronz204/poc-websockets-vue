import { SQL } from "drizzle-orm";
import { User } from "@Models/User";
import { UserSpec } from "@Specs/UserSpec";
import { NodePgDatabase } from "drizzle-orm/node-postgres";

type InsertPayload = typeof User.$inferInsert;
type UpdatePayload = Partial<typeof User.$inferInsert>;

export class UserRepository {
  constructor(private db: NodePgDatabase) {};

  public async find(predicate: SQL) {
    const query = this.db.select().from(User)
      .where(predicate).limit(1);
    return await query.execute();
  };

  /* public async select(spec: UserSpec) {
    const query = this.db.select(spec.projection).from(User);
    spec.setQuery(query.$dynamic()).apply();
    return await query.execute();
  }; */

  public async insert(data: InsertPayload) {
    const query = this.db.insert(User).values(data);
    return await query.returning({ id: User.id }).execute();
  };

  public async delete(id: number) {
    const query = this.db.delete(User)
      .where(UserSpec.ByIdPredicate(id));
    return await query.returning({ id: User.id }).execute();
  };

  public async update(id: number, data: UpdatePayload) {
    const query = this.db.update(User).set(data)
      .where(UserSpec.ByIdPredicate(id));
    return await query.returning({ id: User.id }).execute();
  };
};
