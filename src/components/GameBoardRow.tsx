import React, { useState } from "react";
import { useContext } from "react";
import { GameContext } from "../contexts/GameContext";
import { Button } from "./style";
import styled from "styled-components";
import { IResource, ICost } from "../config/utils";

interface IProps {
  resource: IResource;
}

export const GameBoardRow: React.FC<IProps> = ({ resource }) => {
  const { nbBars, nbFoobars, nbFoos, nbFreeRobots, dispatchGame } =
    useContext(GameContext);
  const [error, setError] = useState<null | string>(null);

  const onClick = (resource: IResource) => {
    setError(null);

    if (nbFreeRobots < 1) {
      setError("Aucun robot disponible");
    }

    switch (resource.name) {
      case "foo":
        dispatchGame({ type: "addFoos", nbNewFoos: 1 });
        break;

      case "bar":
        dispatchGame({ type: "addBars", nbNewBars: 1 });
        break;

      case "foobar":
        if (nbFoos >= 1 && nbBars >= 1) {
          dispatchGame({ type: "addFoobars", nbNewFoobars: 1 });
          dispatchGame({ type: "removeFoos", nbRmFoos: 1 });
          dispatchGame({ type: "removeBars", nbRmBars: 1 });
        } else {
          setError("Ressource insuffisante");
        }
        break;

      case "robot":
        if (nbFoobars >= 3 && nbFoos >= 6) {
          dispatchGame({ type: "addRobots", nbNewRobots: 1 });
          dispatchGame({ type: "removeFoobars", nbRmFoobars: 3 });
          dispatchGame({ type: "removeFoos", nbRmFoos: 6 });
        } else {
          setError("Ressource insuffisante");
        }
        break;

      default:
        return;
    }
  };

  return (
    <>
      <div>
        <Button onClick={() => onClick(resource)}>+ 1 {resource.name}</Button>
        {error && <Error>{error}</Error>}
      </div>
      <NbRobotsUsed></NbRobotsUsed>
      <Cost>{getCostString(resource.cost)}</Cost>
      <Time>{resource.time}</Time>
    </>
  );
};

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

export const NbRobotsUsed = styled.div`
  padding: ${({ theme }) => theme.spacings.s};
`;
const Cost = styled.div`
  padding: ${({ theme }) => theme.spacings.s};
`;
const Time = styled.div`
  padding: ${({ theme }) => theme.spacings.s};
`;
const Error = styled.p`
  color: ${({ theme }) => theme.colors.red};
`;
