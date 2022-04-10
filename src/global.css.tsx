import { createGlobalStyle } from "styled-components";

// eslint-disable-next-line import/no-default-export
export default createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  ul {
    list-style: none;
    margin-bottom: 0;
    padding-left: 0;
  }

  body {
    font-size: ${({ theme }) => theme.fontSizes.m};
    color: ${({ theme }) => theme.colors.black};
  }

  button {
    font-size: ${({ theme }) => theme.fontSizes.m};
    background: transparent;
    border: none;
    color: inherit;
    cursor: pointer;
    text-align: center;
  }

  input:focus,
  select:focus,
  textarea:focus {
    outline: none
  }
`;
