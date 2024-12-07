import { Button } from "@/components/ui/button";
import { TrashIcon, Pencil2Icon, DotsVerticalIcon } from "@radix-ui/react-icons";
import { DeckType } from "@/data/types";
import { deleteDeck } from "@/data/api";

type DeckActionsProps = {
  deck: DeckType;
  setDecks: React.Dispatch<React.SetStateAction<DeckType[]>>;
};

const DeckActions = ({ deck, setDecks }: DeckActionsProps) => {
  const handleDelete = async () => {
    await deleteDeck(deck.id);
    setDecks((prevDecks: DeckType[]) =>
      prevDecks.filter((p: DeckType) => p.id !== deck.id),
    );
  };

  return (
    <div className="flex justify-end pr-4 h-1">
      <Button variant={"ghost"} size={"icon"}>
        <DotsVerticalIcon className="w-5 h-5" />
      </Button>
      <Button variant={"ghost"} size={"icon"}>
        <Pencil2Icon className="w-4 h-4" />
      </Button>
      <Button variant={"ghost"} size={"icon"} onClick={handleDelete}>
        <TrashIcon className="w-4 h-4" />
      </Button>
    </div>
  );
};

export default DeckActions;