import React, { useContext } from "react";
import styled from "styled-components";
import { ResourcesContext } from "../contexts/ResourcesContext";
import { Button } from "./style";

export const Header: React.FC = () => {
  const { foo, bar, foobar, robot, dispatchResource } =
    useContext(ResourcesContext);

  const startNewGame = () => {
    dispatchResource({ type: "resetGame" });
  };

  return (
    <StyledHeader>
      <Button onClick={startNewGame}>Nouveau jeu</Button>

      <StyledUl>
        <StyledLi>{robot.nbResting} robots inactifs</StyledLi>
        <StyledLi>
          <div>{robot.nbMoving} robots en mouvement</div>
        </StyledLi>
        <StyledLi>{robot.nbMining} robots qui minent</StyledLi>
        <StyledLi>{foo.quantity} foo</StyledLi>
        <StyledLi>{bar.quantity} bar</StyledLi>
        <StyledLi>{foobar.quantity} foobar</StyledLi>
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
