
import {
    //these are all types
    pgTable,
    serial,
    varchar,
  } from "drizzle-orm/pg-core";
  import { drizzle } from "drizzle-orm/vercel-postgres";
  
  import { sql } from "@vercel/postgres";
import { InferModel } from "drizzle-orm";
  
  export const todoTable = pgTable("todose", {
    id: serial("id").primaryKey(),
    task: varchar("task", {length:255}).notNull()
  });
  
  export type Todo = InferModel<typeof todoTable>
  export type NewTodo = InferModel<typeof todoTable, "insert">; // insert type
  
  export const db = drizzle(sql);


// //now you insert any value with the help of drizzle it is type save also
//   db.insert(todoTable).values({
//     status: true,  //or false no other type is allowed
//     id : 234
//   })