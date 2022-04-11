import React, { useContext } from "react";
import styled from "styled-components";
import { ResourcesContext } from "../contexts/ResourcesContext";
import { ResourceRow } from "./ResourceRow";

export const GameBoard: React.FC = () => {
  const { foo, bar, foobar, robot } = useContext(ResourcesContext);

  return (
    <Wrapper>
      <h1>Foobartory</h1>
      {robot.quantity >= 20 ? (
        <p>VICTOIRE, tu as créé 20 robots</p>
      ) : (
        <>
          <ResourceRow resource={foo} />
          <ResourceRow resource={bar} />
          <ResourceRow resource={foobar} />
          <ResourceRow resource={robot} />
        </>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  max-width: 700px;
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  gap: ${({ theme }) => theme.spacings.xs};
`;
