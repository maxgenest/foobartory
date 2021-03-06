import { DefaultTheme } from "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    name: string;
    spacings: typeof spacings;
    colors: typeof colors;
    fontSizes: typeof fontSizes;
  }
}

const colors = {
  white: "#fff",
  black: "#111111",
  grey: "#dedede",
  greyDark: "#424242",
  red: "#d14545",
};

const spacings = {
  xs: "8px",
  s: "16px",
  m: "32px",
  l: "64px",
};

const fontSizes = {
  s: "12px",
  m: "16px",
};

export const theme: DefaultTheme = {
  name: "foobartory",
  spacings,
  colors,
  fontSizes,
};
