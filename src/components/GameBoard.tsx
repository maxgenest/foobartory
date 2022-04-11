import React, { useContext } from "react";
import styled from "styled-components";
import { ResourcesContext } from "../contexts/ResourcesContext";
import { GameBoardRow } from "./GameBoardRow";

export const GameBoard: React.FC = () => {
  const { foo, bar, foobar, robot } = useContext(ResourcesContext);

  return (
    <Wrapper>
      <GameBoardRow resource={foo} />
      <GameBoardRow resource={bar} />
      <GameBoardRow resource={foobar} />
      <GameBoardRow resource={robot} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  max-width: 700px;
  display: grid;
  grid-template-columns: 1fr 1fr 2fr 2fr;
  align-items: center;
  gap: ${({ theme }) => theme.spacings.xs};
`;
