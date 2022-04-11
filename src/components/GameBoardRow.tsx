import React, { useState } from "react";
import { useContext } from "react";
import { GameContext } from "../contexts/GameContext";
import { Button } from "./style";
import styled from "styled-components";
import { ResourcesContext } from "../contexts/ResourcesContext";
import { IResource2, IRobot, ICost } from "../reducers/resourcesRducer";

interface IProps {
  resource: IResource2 | IRobot;
}

export const GameBoardRow: React.FC<IProps> = ({ resource }) => {
  const { foo, bar, foobar, robot, dispatchResource } =
    useContext(ResourcesContext);
  const [error, setError] = useState<null | string>(null);
  const [isResourceBuilding, setIsResourceBuilding] = useState(false);

  const { nbMiningRobots, quantity, cost, time, successRate } = resource;

  // const onClick = (resource: IResource) => {
  //   setError(null);

  //   if (nbFreeRobots < 1) {
  //     setError("Aucun robot disponible");
  //     return;
  //   }

  //   switch (name) {
  //     case "foo":
  //       buildResource(() => {
  //         dispatchGame({ type: "addFoos", nbNewFoos: 1 });
  //       }, 1);
  //       break;

  //     case "bar":
  //       buildResource(() => {
  //         dispatchGame({ type: "addBars", nbNewBars: 1 });
  //       }, Math.random() * 2 - 0.5);
  //       break;

  //     case "foobar":
  //       if (nbFoos >= 1 && nbBars >= 1) {
  //         buildResource(() => {
  //           dispatchGame({ type: "addFoobars", nbNewFoobars: 1 });
  //           dispatchGame({ type: "removeFoos", nbRmFoos: 1 });
  //           dispatchGame({ type: "removeBars", nbRmBars: 1 });
  //         }, 2);
  //       } else {
  //         setError("Ressource insuffisante");
  //       }
  //       break;

  //     case "robot":
  //       if (nbFoobars >= 3 && nbFoos >= 6) {
  //         buildResource(() => {
  //           dispatchGame({ type: "addRobots", nbNewRobots: 1 });
  //           dispatchGame({ type: "removeFoobars", nbRmFoobars: 3 });
  //           dispatchGame({ type: "removeFoos", nbRmFoos: 6 });
  //         }, 0);
  //       } else {
  //         setError("Ressource insuffisante");
  //       }
  //       break;

  //     default:
  //       return;
  //   }
  // };

  // const buildResource = (build: () => void, nbSeconds: number) => {
  //   setIsResourceBuilding(true);
  //   dispatchGame({ type: "removeFreeRobots", nbRmFreeRobots: 1 });
  //   setNbRobotUsed(1);

  //   const timer = setTimeout(() => {
  //     build();
  //     setIsResourceBuilding(false);
  //     dispatchGame({ type: "addFreeRobots", nbNewFreeRobots: 1 });
  //     setNbRobotUsed(0);
  //   }, nbSeconds * 1000);

  //   return () => clearTimeout(timer);
  // };

  const addMiningRobot = (resource: IResource2) => {
    console.log("resource", resource);
    if (robot.nbResting < 1) {
      setError("aucun robot disponible");
      return;
    }

    // if cost and enough resources then setTimeout 5s for moving robot
  };

  const removeMiningRobot = (resource: IResource2) => {
    console.log("resource", resource);
  };

  return (
    <>
      <ButtonsWrapper>
        <Button
          onClick={() => addMiningRobot(resource as IResource2)}
          disabled={isResourceBuilding}
        >
          + 1 robot
        </Button>
        <Button
          onClick={() => removeMiningRobot(resource as IResource2)}
          disabled={isResourceBuilding}
        >
          - 1 robot
        </Button>
        {error && <Error>{error}</Error>}
      </ButtonsWrapper>
      <NbRobotsUsed>
        {nbMiningRobots} robot{nbMiningRobots > 1 ? "s" : ""} qui minent
        {nbMiningRobots > 1 ? "s" : ""}
      </NbRobotsUsed>
      <Cost>{getCostString(cost)}</Cost>
      <Time>
        {time.max !== time.min
          ? `entre ${time.min} et ${time.max} secondes`
          : `${time.max} seconde${time.max > 1 ? "s" : ""}`}
      </Time>
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
const ButtonsWrapper = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.spacings.s};
`;
