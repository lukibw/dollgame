import { ThemeProvider } from "styled-components";
import { Global } from "./styled";
import { Router } from "./Router";
import { theme } from "../theme";

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <Global />
      <Router />
    </ThemeProvider>
  );
}
