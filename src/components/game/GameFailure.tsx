import { Link as WouterLink } from "wouter";
import { Audio, Button, DialogLabel, DialogText } from "../styled";
import { HOME_ROUTE } from "../../constants";
import { FailureAudio } from "../../assets";

export interface GameFailureProps {
  message: string;
}

export function GameFailure({ message }: GameFailureProps) {
  return (
    <>
      <Audio src={FailureAudio} autoPlay loop />
      <DialogLabel>Przegrana</DialogLabel>
      <DialogText>{message}</DialogText>
      <WouterLink href={HOME_ROUTE}>
        <Button>Zakończ</Button>
      </WouterLink>
    </>
  );
}
