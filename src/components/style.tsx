import styled from "styled-components";

export const Button = styled.button`
  padding: ${({ theme }) => theme.spacings.s};
  height: fit-content;
  border-radius: ${({ theme }) => theme.spacings.xs};
  background: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
  border: none;

  :hover {
    background: ${({ theme }) => theme.colors.greyDark};
  }
`;
