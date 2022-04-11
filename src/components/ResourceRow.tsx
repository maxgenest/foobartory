import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { Button } from "./style";
import styled from "styled-components";
import { ResourcesContext } from "../contexts/ResourcesContext";
import { IResource, IRobot, ICost } from "../reducers/resourcesReducer";

interface IProps {
  resource: IResource | IRobot;
}

export const ResourceRow: React.FC<IProps> = ({ resource }) => {
  const { name, nbMiningRobots, quantity, cost, time, successRate } = resource;
  const { foo, bar, foobar, robot, dispatchResource } =
    useContext(ResourcesContext);
  const [error, setError] = useState<null | string>(null);
  const [isResourceBuilding, setIsResourceBuilding] = useState(false);
  const [loop, setLoop] = useState(false);

  // const timer = setTimeout(() => {
  //   dispatchResource({ type: `create${name}` });
  // }, (time.max !== time.min ? Math.random() * time.max - time.min : time.max) * 1000);

  useEffect(() => {
    setError(null);
  }, [nbMiningRobots, quantity, cost, time, successRate]);

  useEffect(() => {
    if (nbMiningRobots < 1) {
      return;
    }

    const timer = setTimeout(() => {
      console.log("foo.quantity", foo.quantity);
      console.log("cost.foo", cost?.foo);

      if (
        !cost ||
        (foo.quantity >= cost.foo &&
          bar.quantity >= cost.bar &&
          foobar.quantity >= cost.foobar)
      ) {
        console.log(name);
        setLoop(!loop);
      } else {
        setError("ressource insuffisante pour le minage");
      }
    }, (time.max !== time.min ? Math.random() * time.max - time.min : time.max) * 1000);
    return () => clearTimeout(timer);
  }, [nbMiningRobots, loop, foo, bar, foobar]);

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

  const addMiningRobot = () => {
    if (robot.nbResting < 1) {
      setError("aucun robot disponible");
      return;
    }

    dispatchResource({ type: "moveRobot" });

    setTimeout(() => {
      dispatchResource({ type: `mine${name}` });
    }, 5000);
  };

  const removeMiningRobot = () => {
    if (nbMiningRobots < 1) {
      setError("aucun robot ne mine cette ressource");
      return;
    }

    dispatchResource({ type: `rm${name}MiningRobot` });

    setTimeout(() => {
      dispatchResource({ type: "addRestingRobot" });
    }, 5000);
  };

  return (
    <div>
      <Title>{name}</Title>

      <Grid>
        <div>
          <ButtonsWrapper>
            <Button
              onClick={() => addMiningRobot()}
              disabled={isResourceBuilding}
            >
              + 1 robot
            </Button>
            <Button
              onClick={() => removeMiningRobot()}
              disabled={isResourceBuilding}
            >
              - 1 robot
            </Button>
          </ButtonsWrapper>
          {error && <Error>{error}</Error>}
        </div>

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
      </Grid>
    </div>
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

const Grid = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr 2fr 2fr;
  align-items: center;
`;
const Title = styled.h2`
  margin-bottom: ${({ theme }) => theme.spacings.xs};
  border-bottom: 1px solid ${({ theme }) => theme.colors.grey};
  padding-bottom: ${({ theme }) => theme.spacings.xs};
`;
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
  margin-top: ${({ theme }) => theme.spacings.xs};
`;
const ButtonsWrapper = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.spacings.s};
`;
