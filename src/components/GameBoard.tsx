import React from "react";
import styled from "styled-components";
import { RESOURCES, ICost } from "../config/utils";
import { Button } from "./style";

export const GameBoard: React.FC = () => (
  <Wrapper>
    {RESOURCES.map((resource) => (
      <>
        <Button>+ 1 {resource.name}</Button>
        <NbRobotsUsed></NbRobotsUsed>
        <Cost>{getCostString(resource.cost)}</Cost>
        <Time>{resource.time}</Time>
      </>
    ))}

    <p>Ne fait rien</p>
    <NbRobotsUsed>2 robots</NbRobotsUsed>
  </Wrapper>
);

const getCostString = (cost: ICost) => {
  if (cost === null) {
    return "gratuit";
  }

  const stringifyCostResource = (costResource: "foo" | "bar" | "foobar") => {
    if (cost[costResource] === 0) {
      return null;
    }

    return `${cost[costResource]} ${costResource}${
      cost[costResource] > 1 ? "s" : ""
    }`;
  };

  return [
    stringifyCostResource("foo"),
    stringifyCostResource("bar"),
    stringifyCostResource("foobar"),
  ]
    .filter((c) => c !== null)
    .join(", ");
};

const Wrapper = styled.div`
  max-width: 700px;
  display: grid;
  grid-template-columns: 1fr 1fr 2fr 2fr;
  align-items: center;
  gap: ${({ theme }) => theme.spacings.xs};
`;
const NbRobotsUsed = styled.div`
  padding: ${({ theme }) => theme.spacings.s};
`;
const Cost = styled.div`
  padding: ${({ theme }) => theme.spacings.s};
`;
const Time = styled.div`
  padding: ${({ theme }) => theme.spacings.s};
`;
