import React, { useContext } from "react";
import styled from "styled-components";
import { ResourcesContext } from "../contexts/ResourcesContext";
import { ResourceRow } from "./ResourceRow";

export const GameBoard: React.FC = () => {
  const { foo, bar, foobar, robot } = useContext(ResourcesContext);

  return (
    <Wrapper>
      <h1>Foobartory</h1>
      <ResourceRow resource={foo} />
      <ResourceRow resource={bar} />
      <ResourceRow resource={foobar} />
      <ResourceRow resource={robot} />
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
