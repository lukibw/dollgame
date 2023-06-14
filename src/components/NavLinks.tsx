import { Link as WouterLink } from "wouter";
import { Link } from "./styled";
import {
  AUTHORS_ROUTE,
  HOME_ROUTE,
  PROJECT_ROUTE,
  GITHUB_REPO,
  GAME_ROUTE,
} from "../constants";

export interface NavLinksProps {
  location: string;
}

export function NavLinks({ location }: NavLinksProps) {
  return (
    <>
      <WouterLink href={HOME_ROUTE}>
        <Link active={location === HOME_ROUTE}>Strona Główna</Link>
      </WouterLink>
      <WouterLink href={GAME_ROUTE}>
        <Link active={location.startsWith(GAME_ROUTE)}>Gra</Link>
      </WouterLink>
      <WouterLink href={PROJECT_ROUTE}>
        <Link active={location === PROJECT_ROUTE}>Projekt</Link>
      </WouterLink>
      <WouterLink href={AUTHORS_ROUTE}>
        <Link active={location === AUTHORS_ROUTE}>Autorzy</Link>
      </WouterLink>
      <Link target="_blank" rel="noopener noreferrer" href={GITHUB_REPO}>
        Github
      </Link>
    </>
  );
}
