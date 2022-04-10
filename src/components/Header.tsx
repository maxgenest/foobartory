import React from "react";
import styled from "styled-components";

export const Header: React.FC = () => {
  const startNewGame = () => {
    console.log("go");
  };

  return (
    <Wrapper>
      <StyledButton onClick={startNewGame}>Nouveau jeu</StyledButton>
      <List>
        <Item>X robots</Item>
        <Item>X foo</Item>
        <Item>X bar</Item>
        <Item>X foobar</Item>
      </List>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  padding: ${({ theme }) => theme.spacings.m};
  display: flex;
`;
const List = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
`;
const Item = styled.li`
  padding: ${({ theme }) => theme.spacings.s};
  border: 1px solid ${({ theme }) => theme.colors.grey};
`;
const StyledButton = styled.button`
  padding: ${({ theme }) => theme.spacings.s};
  height: fit-content;
`;
