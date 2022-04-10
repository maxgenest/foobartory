import React from "react";
import styled from "styled-components";
import { Button } from "./style";

export const Header: React.FC = () => {
  const startNewGame = () => {
    console.log("go");
  };

  return (
    <StyledHeader>
      <StyledButton onClick={startNewGame}>Nouveau jeu</StyledButton>

      <StyledUl>
        <StyledLi>X robots</StyledLi>
        <StyledLi>X foo</StyledLi>
        <StyledLi>X bar</StyledLi>
        <StyledLi>X foobar</StyledLi>
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
`;
const StyledLi = styled.li`
  padding: ${({ theme }) => theme.spacings.s};

  :not(:last-child) {
    border-right: 1px solid ${({ theme }) => theme.colors.grey};
  }
`;
const StyledButton = styled(Button)`
  margin-right: ${({ theme }) => theme.spacings.m};
`;
