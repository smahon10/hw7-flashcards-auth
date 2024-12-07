import { atom } from "nanostores";
import { DeckType, CardType } from "@/data/types";

export const $decks = atom<DeckType[]>([]);

export const $cards = atom<CardType[]>([]);

export function setCard(cards: CardType[]) {
    $cards.set(cards);
}

export function addCard(card: CardType) {
    $cards.set([card, ...$cards.get()]);
}

export function removeCard(id: string) {
    $cards.set($cards.get().filter((card) => card.id !== id));
}

export function updateCardContent(id: string, content: string) {
    $cards.set(
      $cards.get().map((card) => {
        if (card.id === id) {
          return { ...card, content: content };
        }
        return card;
      }),
    );
}