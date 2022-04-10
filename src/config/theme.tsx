import { DefaultTheme } from "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    name: string;
    spacings: typeof spacings;
    colors: typeof colors;
  }
}

const colors = {
  white: "#fff",
  black: "#111111",
  grey: "#dedede",
};

const spacings = {
  xs: "8px",
  s: "16px",
  m: "32px",
  l: "64px",
};

export const theme: DefaultTheme = {
  name: "foobartory",
  spacings,
  colors,
};
