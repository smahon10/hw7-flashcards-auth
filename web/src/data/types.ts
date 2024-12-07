export interface DeckType {
    id: number;
    title: string;
    numberOfCards: number;
}

export interface CardType {
    id: string;
    front: string;
    back: string;
}