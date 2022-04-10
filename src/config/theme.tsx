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
  s: "15px",
  m: "30px",
  l: "60px",
};

export const theme: DefaultTheme = {
  name: "foobartory",
  spacings,
  colors,
};
