import { Hono } from "hono";

const decksRoute = new Hono();

type DeckType = {
  id: number;
  title: string;
  numberOfCards: number;
};

// Sample decks data
const decks: DeckType[] = [
  {
    id: 1,
    title: "JavaScript Basics",
    numberOfCards: 0,
  },
  {
    id: 2,
    title: "JavaScript Control Flow", 
    numberOfCards: 0,
  },
  {
    id: 3,
    title: "JavaScript Functions",
    numberOfCards: 0,
  },
];

let nextId = 4;

// Get a list of decks
decksRoute.get("/decks", (c) => {
  return c.json(decks);
});

// Get a specific deck
decksRoute.get("/decks/:id", (c) => {
  const id = parseInt(c.req.param("id"));
  const deck = decks.find((p) => p.id === id);
  if (deck) {
    return c.json(deck);
  }
  return c.json({ error: "Deck not found" }, 404);
});

// Create a new deck
decksRoute.post("/decks", async (c) => {
  const { title } = await c.req.json();
  const newDeck = {
    id: nextId++,
    title: "",
    numberOfCards: 0,
  };
  decks.push(newDeck);
  return c.json(newDeck, 201);
});

// Update a deck
decksRoute.patch("/decks/:id", async (c) => {
  const id = parseInt(c.req.param("id"));
  const { title } = await c.req.json();
  const deckIndex = decks.findIndex((p) => p.id === id);
  if (deckIndex !== -1) {
    decks[deckIndex] = { ...decks[deckIndex], title };
    return c.json(decks[deckIndex]);
  }
  return c.json({ error: "Deck not found" }, 404);
});

// Delete a deck
decksRoute.delete("/decks/:id", (c) => {
    const id = parseInt(c.req.param("id"));
    const deckIndex = decks.findIndex((p) => p.id === id);
    if (deckIndex !== -1) {
      const deletedDeck = decks.splice(deckIndex, 1)[0];
      return c.json(deletedDeck);
    }
    return c.json({ error: "Deck not found" }, 404);
  });

export default decksRoute;