import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/dialog";
  import { Button } from "@/components/ui/button";
  import { PlusCircledIcon } from "@radix-ui/react-icons";
  import { DeckType } from "@/data/types";
  import { createDeck } from "@/data/api";
  
  type CreateDeckDialogProps = {
    deck: DeckType;
    setDecks: React.Dispatch<React.SetStateAction<DeckType[]>>;
  };
  
  const CreateDeckDialog = ({ deck, setDecks }: CreateDeckDialogProps) => {
    const handleCreate = async () => {
      await createDeck(deck.title);
      setDecks((prevDecks: DeckType[]) =>
        prevDecks.filter((p: DeckType) => p.id !== deck.id),
      );
    };
  
    return (
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button variant={"ghost"} size={"icon"}>
            <PlusCircledIcon className="w-4 h-4" />
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete your post
              and remove it from our servers.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleCreate}>Save</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    );
  };
  
  export default CreateDeckDialog;