import { BASE_URL } from "@/env";
import { DeckType, CardType } from "./types";

// Fetch all decks
export const fetchDecks = async (): Promise<DeckType[]> => {
  const response = await fetch(`${BASE_URL}/decks?sort=desc`);
  if (!response.ok) {
    throw new Error(`API request failed! with status: ${response.status}`);
  }
  const { data }: { data: DeckType[] } = await response.json();
  return data;
};

// Create a deck
export const createDeck = async (title: string): Promise<DeckType> => {
    const response = await fetch(`${BASE_URL}/decks`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title }),
    });
    if (!response.ok) {
      throw new Error(`API request failed! with status: ${response.status}`);
    }
    const data: DeckType = await response.json();
    return data;
};

// Edit a deck
export const editDeck = async (
    id: number,
    title: string,
  ): Promise<DeckType> => {
    const response = await fetch(`${BASE_URL}/decks/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title }),
    });
    if (!response.ok) {
      throw new Error(`API request failed! with status: ${response.status}`);
    }
    const data: DeckType = await response.json();
    return data;
};

// Delete a deck by id
export const deleteDeck = async (id: number): Promise<boolean> => {
    const response = await fetch(`${BASE_URL}/decks/${id}`, { method: "DELETE" });
    if (!response.ok) {
      throw new Error(`API request failed! with status: ${response.status}`);
    }
    return true;
};

// Fetch all cards from a deck
export const fetchCard = async (deckId: number): Promise<CardType[]> => {
  const response = await fetch(`${BASE_URL}/decks/${deckId}/cards?sort=desc`);
  if (!response.ok) {
    throw new Error(`API request failed! with status: ${response.status}`);
  }
  const { data }: { data: CardType[] } = await response.json();
  return data;
};

// Create a card for a deck
export const createCard = async (
  deckId: number,
  content: string,
): Promise<CardType> => {
  const response = await fetch(`${BASE_URL}/decks/${deckId}/cards`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ content }),
  });
  if (!response.ok) {
    throw new Error(`API request failed! with status: ${response.status}`);
  }
  const data: CardType = await response.json();
  return data;
};

// Edit a card from a deck
export const editCard = async (
  deckId: string,
  cardId: string,
  content: string,
): Promise<CardType> => {
  const response = await fetch(
    `${BASE_URL}/decks/${deckId}/cards/${cardId}`,
    {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ content }),
    },
  );
  if (!response.ok) {
    throw new Error(`API request failed! with status: ${response.status}`);
  }
  const data: CardType = await response.json();
  return data;
};

// Delete a card from a deck
export const deleteCard = async (
  deckId: string,
  cardId: string,
): Promise<boolean> => {
  const response = await fetch(
    `${BASE_URL}/decks/${deckId}/cards/${cardId}`,
    {
      method: "DELETE",
    },
  );
  if (!response.ok) {
    throw new Error(`API request failed! with status: ${response.status}`);
  }
  return true;
};