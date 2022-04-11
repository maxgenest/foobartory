import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { GameBoard } from "./components/GameBoard";
import { Header } from "./components/Header";
import { theme } from "./config/theme";
import { ResourcesContextProvider } from "./contexts/ResourcesContext";
import GlobalCss from "./global.css";

export const VICTORY_NB_ROBOTS = 20;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ResourcesContextProvider>
        <GlobalCss />

        <Wrapper>
          <Header />
          <GameBoard />
        </Wrapper>
      </ResourcesContextProvider>
    </ThemeProvider>
  );
}

const Wrapper = styled.div`
  padding: ${({ theme }) => theme.spacings.l};
`;

export default App;
