import { User } from "@Models/User";
import { eq, asc, desc } from "drizzle-orm";
import { getTableColumns } from "drizzle-orm";

import { Specification } from "./Specification";
import type { PgColumn } from "drizzle-orm/pg-core";

export abstract class UserSpec extends Specification {
  public projection: Record<string, PgColumn> = getTableColumns(User);
  public abstract apply(): void;

  public static ByIdSortingAsc = () => asc(User.id);
  public static ByIdSortingDesc = () => desc(User.id);

  public static ByIdPredicate = (id: number) => eq(User.id, id);
  public static ByNamePredicate = (name: string) => eq(User.name, name);
};
