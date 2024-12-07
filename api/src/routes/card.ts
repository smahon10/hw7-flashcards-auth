import { Hono } from "hono";

const cardsRoute = new Hono();

type CardType = {
  id: number;
  question: string;
  answer: string;
};

// Sample cards data
const cards: CardType[] = [
    {
      id: 1,
      question: "Question 1",
      answer: "Answer 1",
    },
    {
      id: 2,
      question: "Question 2",
      answer: "Answer 2",
    },
    {
      id: 3,
      question: "Question 3",
      answer: "Answer 3",
    },
  ];
  
  let nextId = 4;

// Get a list of cards in a deck
cardsRoute.get("/decks/:deckId/cards", (c) => {
  return c.json(cards);
});

// Get a specific card
cardsRoute.get("/decks/:deckId/cards/:cardId", (c) => {
  const id = parseInt(c.req.param("cardId"));
  const card = cards.find((p) => p.id === id);
  if (card) {
    return c.json(card);
  }
  return c.json({ error: "Card not found" }, 404);
});

// Create a new card in a deck
cardsRoute.post("/decks/:deckId/cards", async (c) => {
  const { question } = await c.req.json();
  const newCard = {
    id: nextId++,
    question: "",
    answer: "",
  };
  cards.push(newCard);
  return c.json(newCard, 201);
});

// Update a card
cardsRoute.patch("/decks/:deckId/cards/:cardId", async (c) => {
  const id = parseInt(c.req.param("cardId"));
  const { question } = await c.req.json();
  const cardIndex = cards.findIndex((p) => p.id === id);
  if (cardIndex !== -1) {
    cards[cardIndex] = { ...cards[cardIndex], question };
    return c.json(cards[cardIndex]);
  }
  return c.json({ error: "Card not found" }, 404);
});

// Delete a card
cardsRoute.delete("/decks/:deckId/cards/:cardId", (c) => {
    const id = parseInt(c.req.param("cardId"));
    const cardIndex = cards.findIndex((p) => p.id === id);
    if (cardIndex !== -1) {
      const deleteCard = cards.splice(cardIndex, 1)[0];
      return c.json(deleteCard);
    }
    return c.json({ error: "Card not found" }, 404);
  });

export default cardsRoute;