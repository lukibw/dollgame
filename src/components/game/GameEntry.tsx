import { Button, DialogLabel, DialogText } from "../styled";

export interface GameEntryProps {
  name: string;
  description: string;
  onStart: () => void;
}

export function GameEntry({ description, name, onStart }: GameEntryProps) {
  return (
    <>
      <DialogLabel>{name}</DialogLabel>
      <DialogText>{description}</DialogText>
      <Button onClick={onStart}>Rozpocznij</Button>
    </>
  );
}
