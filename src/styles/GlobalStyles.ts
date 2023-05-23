import { createGlobalStyle } from 'styled-components';
import { theme } from './theme';

const GlobalStyle = createGlobalStyle`
*, *::before, *::after{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body{
    background-color: ${theme.color.background};
}

ul,li{
  list-style: none;
}

`;

export default GlobalStyle;
