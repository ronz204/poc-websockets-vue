import { desc } from "drizzle-orm";
import { Users } from "@Models/Users";

import { Specification } from "./Specification";
import type { PgSelect } from "drizzle-orm/pg-core";

export class UserSpecification extends Specification {
  public limit: number = 2;

  constructor(query: PgSelect) {super(query)};

  public async execute() {
    this.withPagination();
    this.withOrdering(desc(Users.id));
    return this.query.execute();
  };
};
