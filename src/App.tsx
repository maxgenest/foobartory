import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { GameBoard } from "./components/GameBoard";
import { Header } from "./components/Header";
import { theme } from "./config/theme";
import GlobalCss from "./global.css";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalCss />

      <Wrapper>
        <Header />
        <GameBoard />
      </Wrapper>
    </ThemeProvider>
  );
}

const Wrapper = styled.div`
  padding: ${({ theme }) => theme.spacings.l};
`;

export default App;
