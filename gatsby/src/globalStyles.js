import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    *, :after, :before {
        box-sizing: inherit;
    }

    body {
        display: block;
        margin: 0;
        word-wrap: break-word;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
`
  