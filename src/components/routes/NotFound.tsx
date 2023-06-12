import { Header, Paragraph } from "../styled";

export function NotFound() {
  return (
    <>
      <Header>404</Header>
      <Paragraph>Nie znaleziono strony</Paragraph>
      <Paragraph>Upewnij się, czy podałeś właściwy adres URL</Paragraph>
    </>
  );
}
