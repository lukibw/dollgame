import { Link as WouterLink } from "wouter";
import { HOME_ROUTE } from "../../constants";
import { Button, DialogLabel, DialogText } from "../styled";

export interface GameSuccessProps {
  message: string;
}

export function GameSuccess({ message }: GameSuccessProps) {
  return (
    <>
      <DialogLabel>Wygrana</DialogLabel>
      <DialogText>{message}</DialogText>
      <WouterLink href={HOME_ROUTE}>
        <Button>Strona Główna</Button>
      </WouterLink>
    </>
  );
}
