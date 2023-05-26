import { createGlobalStyle } from 'styled-components';
import { theme } from './theme';

const GlobalStyle = createGlobalStyle`
*, *::before, *::after{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html{
  scroll-behavior: smooth;
}

body{
    background-color: ${theme.color.background};
    font-family: 'Founders Grotesk', sans-serif;
    overflow-x: hidden;
    max-width: 100vw;
}

ul,li{
  list-style: none;
}

@font-face {
    font-family: 'Founders Grotesk';
    src: url("/founders-grotesk.woff2") format("woff2");
    font-weight: 300;
    font-style: normal;
    font-display: auto;
  }
@font-face {
    font-family: 'Oggtext';
    src: url("/OggText.woff2") format("woff2");
    font-weight: 300;
    font-style: normal;
    font-display: auto;
  }
@font-face {
    font-family: 'Oggtext';
    src: url("/OggText-Italic.woff2") format("woff2");
    font-weight: 300;
    font-style: italic;
    font-display: auto;
  }

  svg:not(:root) {
    overflow: hidden;
}

  ::selection {
    color: ${theme.color.selection};
    background: ${theme.color.selectionBackground}
}

`;

export default GlobalStyle;
