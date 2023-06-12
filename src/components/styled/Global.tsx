import { createGlobalStyle } from "styled-components";

import SourceSansPro from "../../assets/fonts/SourceSansPro.ttf";
import DancingScript from "../../assets/fonts/DancingScript.ttf";
import Raleway from "../../assets/fonts/Raleway.ttf";

export const Global = createGlobalStyle`
  @font-face {
    font-weight: 600;
    font-family: 'Raleway';
    font-display: swap;
    src: url(${Raleway}) format("truetype");
  }

  @font-face {
    font-weight: 400;
    font-family: 'Dancing Script';
    font-display: swap;
    src: url(${DancingScript}) format("truetype");
  }

  @font-face {
    font-weight: 400;
    font-family: 'Source Sans Pro';
    font-display: swap;
    src: url(${SourceSansPro}) format("truetype");
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Source Sans Pro';
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;
