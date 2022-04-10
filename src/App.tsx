import React from "react";
import { ThemeProvider } from "styled-components";
import { GameStatus } from "./components/GameStatus";
import { Header } from "./components/Header";
import { theme } from "./config/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <GameStatus />
    </ThemeProvider>
  );
}

export default App;
