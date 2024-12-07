import { useState, useEffect } from "react";
import { DeckType } from "@/data/types";
import { fetchDecks } from "@/data/api";
import Deck from "./deck";

const Decks = () => {
  const [decks, setDecks] = useState<DeckType[]>([]);

  useEffect(() => {
    fetchDecks().then((data) => setDecks(data));
  }, []) 

  return (
    <div>
      {decks
        .map((deck) => (
            <Deck key={deck.id} deck={deck} setDecks={setDecks}/>
        ))}
    </div>
  );
};

export default Decks;