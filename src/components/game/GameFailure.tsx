import { Link as WouterLink } from "wouter";
import { HOME_ROUTE } from "../../constants";
import { Button, DialogLabel, DialogText } from "../styled";

export interface GameFailureProps {
  message: string;
}

export function GameFailure({ message }: GameFailureProps) {
  return (
    <>
      <DialogLabel>Przegrana</DialogLabel>
      <DialogText>{message}</DialogText>
      <WouterLink href={HOME_ROUTE}>
        <Button>Zakończ</Button>
      </WouterLink>
    </>
  );
}
