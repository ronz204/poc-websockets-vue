import { SQL } from "drizzle-orm";
import type { PgSelect } from "drizzle-orm/pg-core";

export class Specification {
  protected offset: number = 0;
  protected limit: number = 10;

  protected query: PgSelect | null = null;
  public setQuery(query: PgSelect): this {
    this.query = query;
    return this;
  };

  public withPagination(): void {
    this.query?.offset(this.offset).limit(this.limit);
  };

  public withSorting(direction: SQL): void {
    this.query?.orderBy(direction);
  };

  public withPredicate(predicate: SQL): void {
    this.query?.where(predicate);
  };
};
