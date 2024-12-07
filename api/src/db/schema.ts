import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";

export const decks = sqliteTable("decks", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  title: text("title").notNull(),
  numberOfCards: integer("numberOfCards").notNull(),
});