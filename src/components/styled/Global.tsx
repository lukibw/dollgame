import { createGlobalStyle } from "styled-components";
import {
  RalewayFont,
  DancingScriptFont,
  SourceSansProFont,
} from "../../assets";

export const Global = createGlobalStyle`
  @font-face {
    font-weight: 600;
    font-family: 'Raleway';
    font-display: swap;
    src: url(${RalewayFont}) format("truetype");
  }

  @font-face {
    font-weight: 400;
    font-family: 'Dancing Script';
    font-display: swap;
    src: url(${DancingScriptFont}) format("truetype");
  }

  @font-face {
    font-weight: 400;
    font-family: 'Source Sans Pro';
    font-display: swap;
    src: url(${SourceSansProFont}) format("truetype");
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
