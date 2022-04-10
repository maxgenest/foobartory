import React from "react";
import styled from "styled-components";
import { RESOURCES } from "../config/utils";
import { GameBoardRow, NbRobotsUsed } from "./GameBoardRow";

export const GameBoard: React.FC = () => (
  <Wrapper>
    {RESOURCES.map((resource) => (
      <GameBoardRow resource={resource} />
    ))}

    <p>Ne fait rien</p>
    <NbRobotsUsed>2 robots</NbRobotsUsed>
  </Wrapper>
);

const Wrapper = styled.div`
  max-width: 700px;
  display: grid;
  grid-template-columns: 1fr 1fr 2fr 2fr;
  align-items: center;
  gap: ${({ theme }) => theme.spacings.xs};
`;
