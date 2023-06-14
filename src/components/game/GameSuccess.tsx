import { Link as WouterLink } from "wouter";
import { HOME_ROUTE } from "../../constants";
import { Audio, Button, DialogLabel, DialogText } from "../styled";
import { SuccessAudio } from "../../assets";

export interface GameSuccessProps {
  message: string;
}

export function GameSuccess({ message }: GameSuccessProps) {
  return (
    <>
      <Audio src={SuccessAudio} autoPlay loop />
      <DialogLabel>Wygrana</DialogLabel>
      <DialogText>{message}</DialogText>
      <WouterLink href={HOME_ROUTE}>
        <Button>Strona Główna</Button>
      </WouterLink>
    </>
  );
}
