import React from "react";
import { ThemeProvider } from "styled-components";
import { GameBoard } from "./components/GameBoard";
import { Header } from "./components/Header";
import { theme } from "./config/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <GameBoard />
    </ThemeProvider>
  );
}

export default App;
