import { db, connection } from "./index";
import { decks } from "./schema";

async function seed() {
  console.log("Seeding the database...");

  // Clean the tables
  console.log("Cleaning existing data...");
  await db.delete(decks);

  console.log("Inserting new seed data...");
  // Insert sample decks
  const [deck1] = await db
    .insert(decks)
    .values({
      title: "Title 1",
      numberOfCards: 0,
    })
    .returning({ id: decks.id });

  const [deck2] = await db
    .insert(decks)
    .values({
      title: "Title 2",
      numberOfCards: 0,
    })
    .returning({ id: decks.id });

  const [deck3] = await db
    .insert(decks)
    .values({
      title: "Title 3",
      numberOfCards: 0,
    })
    .returning({ id: decks.id });

  console.log("Seeding completed successfully.");
}

seed()
  .catch((e) => {
    console.error("Seeding failed:");
    console.error(e);
  })
  .finally(() => {
    connection.close();
  });