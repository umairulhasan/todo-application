import { InferModel } from 'drizzle-orm';
import {
    //these are all types
    pgTable,
    serial,
    text,
    varchar,
    timestamp,
    boolean,
  } from "drizzle-orm/pg-core";
  import { drizzle } from "drizzle-orm/vercel-postgres";
  
  import { sql } from "@vercel/postgres";
  
  export const todoTable = pgTable("todo", {
    id: serial("id").primaryKey(),
    title: text("title"),
    description: varchar("description"),
    status: boolean("status").default(true).notNull(),
  });
  
  export type Todo = InferModel<typeof todoTable>;
  export type NewTodo = InferModel<typeof todoTable, "insert">; // insert type
  
  export const db = drizzle(sql);


// //now you insert any value with the help of drizzle it is type save also
//   db.insert(todoTable).values({
//     status: true,  //or false no other type is allowed
//     id : 234
//   })