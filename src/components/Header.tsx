import React, { useContext } from "react";
import styled from "styled-components";
import { GameContext } from "../contexts/GameContext";
import { Button } from "./style";

export const Header: React.FC = () => {
  const { nbBars, nbFoobars, nbFoos, nbRobots, nbFreeRobots, dispatchGame } =
    useContext(GameContext);

  const startNewGame = () => {
    dispatchGame({ type: "resetGame" });
  };

  return (
    <StyledHeader>
      <Button onClick={startNewGame}>Nouveau jeu</Button>

      <StyledUl>
        <StyledLi>{nbRobots} robots</StyledLi>
        <StyledLi>{nbFreeRobots} robots disponibles</StyledLi>
        <StyledLi>{nbFoos} foo</StyledLi>
        <StyledLi>{nbBars} bar</StyledLi>
        <StyledLi>{nbFoobars} foobar</StyledLi>
      </StyledUl>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  margin-bottom: ${({ theme }) => theme.spacings.m};
  display: flex;
  align-items: center;
`;
const StyledUl = styled.ul`
  display: flex;
  border: 1px solid ${({ theme }) => theme.colors.grey};
  width: fit-content;
  border-radius: ${({ theme }) => theme.spacings.xs};
  margin-left: ${({ theme }) => theme.spacings.m};
`;
const StyledLi = styled.li`
  padding: ${({ theme }) => theme.spacings.s};

  :not(:last-child) {
    border-right: 1px solid ${({ theme }) => theme.colors.grey};
  }
`;
