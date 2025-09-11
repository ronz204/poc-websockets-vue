import { SQL } from "drizzle-orm";
import type { PgSelect } from "drizzle-orm/pg-core";

export class Specification {
  protected offset: number = 0;
  protected limit: number = 10;

  constructor(protected query: PgSelect) {};

  protected withPagination(): this {
    this.query.offset(this.offset).limit(this.limit);
    return this;
  };

  protected withOrdering(direction: SQL): this {
    this.query.orderBy(direction);
    return this;
  };

  public async execute() {
    return this.query.execute();
  };
};
