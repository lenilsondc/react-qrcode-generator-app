import "styled-components";

// Overrides the DefaultTheme interface in order to
// enable intelisense with a custom DefaultTheme interface.
declare module "styled-components" {
  export interface DefaultTheme {
    name: string;
    primary: string;
    primaryTint: string;
    title: string;
    text: string;
  }
}
