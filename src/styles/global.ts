import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: #f0f0f5;
    -webkit-font-smoothing: antialiased;
    color: ${({ theme }) => theme.text};
  }

  body,
  input,
  button {
    font-family: Roboto, Arial, Helvetica, sans-serif;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: var(--title-color);
    color: ${({ theme }) => theme.title};
    font-family: Ubuntu;
  }
`;
