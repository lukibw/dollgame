import { useMemo } from "react";
import { Link as WouterLink } from "wouter";
import { GAME_ROUTE } from "../../constants";
import { story, StoryChoice } from "../../story";
import {
  DialogCharacter,
  DialogChoice,
  DialogChoices,
  DialogLabel,
  DialogReturn,
  DialogText,
} from "../styled";

export interface GameDialogProps {
  text: string;
  characterId: number;
  choices: StoryChoice[];
  onChoice: (choice: StoryChoice) => void;
}

export function GameDialog({
  characterId,
  choices,
  text,
  onChoice,
}: GameDialogProps) {
  const character = useMemo(() => {
    return story.characters[characterId];
  }, [characterId]);
  return (
    <>
      <DialogCharacter source={character.image} />
      <DialogLabel>{character.name}</DialogLabel>
      <DialogText>{text}</DialogText>
      <DialogChoices>
        {choices.map((choice, index) => (
          <DialogChoice key={index} onClick={() => onChoice(choice)}>
            {choice.text}
          </DialogChoice>
        ))}
      </DialogChoices>
      <WouterLink href={GAME_ROUTE}>
        <DialogReturn>Powrót</DialogReturn>
      </WouterLink>
    </>
  );
}
