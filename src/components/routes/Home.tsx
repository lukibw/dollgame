import { Link as WouterLink } from "wouter";
import { Header, Paragraph, Button } from "../styled";

export function Home() {
  return (
    <>
      <Header>Lalka</Header>
      <Paragraph>
        Gra przeglądarkowa inspirowana powieścią Bolesława Prusa
      </Paragraph>
      <Paragraph gutter>Zagraj teraz za darmo</Paragraph>
      <WouterLink href="/game">
        <Button as="a">Zacznij teraz</Button>
      </WouterLink>
    </>
  );
}
