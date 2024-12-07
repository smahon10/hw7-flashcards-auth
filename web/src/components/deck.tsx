import { DeckType } from "@/data/types";
import DeckActions from "./deck-actions";

type DeckProps = {
    deck: DeckType;
    setDecks: React.Dispatch<React.SetStateAction<DeckType[]>>;
};

const Deck = ({ deck, setDecks }: DeckProps) => {
  return (
    <div className="p-1 border-b">
      <div className="flex items-center justify-between pl-4">
        <b className="p-4 h-4">{deck.title}</b>
        <DeckActions deck={deck} setDecks={setDecks} />
      </div>
      <div className="flex items-center justify-between pl-4 pb-20">
        <b className="p-4">{deck.numberOfCards + " cards"}</b>
      </div>
    </div>
  );
};

export default Deck;