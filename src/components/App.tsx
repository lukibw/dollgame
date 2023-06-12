import { ThemeProvider } from "styled-components";
import { Global, Container, Button, Header, Paragraph } from "./styled";
import { theme } from "../theme";

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <Global />
      <Container>
        <Header>Lalka</Header>
        <Paragraph>
          Gra przeglądarkowa inspirowana powieścią Bolesława Prusa
        </Paragraph>
        <Paragraph gutter>Zagraj teraz za darmo</Paragraph>
        <Button>Zacznij teraz</Button>
      </Container>
    </ThemeProvider>
  );
}
