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
  const [loop, setLoop] = useState(false);

  useEffect(() => {
    setError(null);
  }, [nbMiningRobots, quantity, cost, time, successRate]);

  useEffect(() => {
    if (nbMiningRobots < 1 || robot.quantity >= 20) {
      return;
    }

    const timer = setTimeout(() => {
      if (
        !cost ||
        (foo.quantity >= cost.foo &&
          bar.quantity >= cost.bar &&
          foobar.quantity >= cost.foobar)
      ) {
        if (Math.random() + successRate >= 1) {
          dispatchResource({ type: `create${name}` });
        } else {
          dispatchResource({ type: `destroyFoo`, quantity: 1 });
        }
        setLoop(!loop);
      } else {
        setError("ressource insuffisante pour le minage");
      }
    }, (time.max !== time.min ? Math.random() * time.max - time.min : time.max) * 1000);
    return () => clearTimeout(timer);
  }, [
    nbMiningRobots,
    loop,
    foo,
    bar,
    foobar,
    name,
    time.max,
    time.min,
    cost,
    dispatchResource,
    robot.quantity,
    successRate,
  ]);

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

  const createRobot = () => {
    if (
      cost &&
      foo.quantity >= cost.foo &&
      bar.quantity >= cost.bar &&
      foobar.quantity >= cost.foobar
    ) {
      dispatchResource({ type: "createRobot" });
      return;
    }
  };

  return (
    <div>
      <Title>{name}</Title>

      <Grid>
        <div>
          <ButtonsColumn>
            {name === "Robot" ? (
              <Button
                onClick={createRobot}
                disabled={
                  !(
                    cost &&
                    foo.quantity >= cost.foo &&
                    bar.quantity >= cost.bar &&
                    foobar.quantity >= cost.foobar
                  )
                }
              >
                + 1 robot
              </Button>
            ) : (
              <>
                <Button
                  onClick={addMiningRobot}
                  disabled={
                    !!(
                      cost &&
                      (foo.quantity < cost.foo ||
                        bar.quantity < cost.bar ||
                        foobar.quantity < cost.foobar)
                    )
                  }
                >
                  + 1 mineur
                </Button>
                <Button
                  onClick={removeMiningRobot}
                  disabled={nbMiningRobots < 1}
                >
                  - 1 mineur
                </Button>
              </>
            )}
          </ButtonsColumn>
          {error && <Error>{error}</Error>}
        </div>

        {name === "Robot" ? (
          <div />
        ) : (
          <Column>
            {nbMiningRobots} robot{nbMiningRobots > 1 ? "s" : ""} qui minent
            {nbMiningRobots > 1 ? "s" : ""}
          </Column>
        )}
        <Column>{getCostString(cost)}</Column>
        <Column>
          {time.max !== time.min
            ? `entre ${time.min} et ${time.max} secondes`
            : `${time.max} seconde${time.max > 1 ? "s" : ""}`}
        </Column>
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
const Column = styled.div`
  padding: ${({ theme }) => theme.spacings.s};
`;
const ButtonsColumn = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.spacings.s};
`;
const Error = styled.p`
  color: ${({ theme }) => theme.colors.red};
  margin-top: ${({ theme }) => theme.spacings.xs};
`;
