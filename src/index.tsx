import * as React from "react";
import { render } from "react-dom";
import { ThemeProvider } from "styled-components";

import App from "./App";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/theme";

const rootElement = document.getElementById("root");

render(
  <ThemeProvider theme={defaultTheme}>
    <GlobalStyle />
    <App />
  </ThemeProvider>,
  rootElement
);
