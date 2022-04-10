import React from "react";
import styled from "styled-components";
import { RESOURCES } from "../config/utils";
import { GameBoardRow, NbRobotsUsed } from "./GameBoardRow";

export const GameBoard: React.FC = () => (
  <Wrapper>
    {RESOURCES.map((resource) => (
      <GameBoardRow resource={resource} />
    ))}
  </Wrapper>
);

const Wrapper = styled.div`
  max-width: 700px;
  display: grid;
  grid-template-columns: 1fr 1fr 2fr 2fr;
  align-items: center;
  gap: ${({ theme }) => theme.spacings.xs};
`;
