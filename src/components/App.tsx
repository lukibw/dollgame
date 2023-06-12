import { ThemeProvider } from "styled-components";
import { Global, Container } from "./styled";
import { Nav } from "./Nav";
import { Router } from "./Router";
import { theme } from "../theme";

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <Global />
      <Container>
        <Nav />
        <Router />
      </Container>
    </ThemeProvider>
  );
}
