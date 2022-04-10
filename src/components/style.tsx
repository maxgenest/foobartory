import styled from "styled-components";

export const Button = styled.button<{ disabled?: boolean }>`
  padding: ${({ theme }) => theme.spacings.s};
  height: fit-content;
  border-radius: ${({ theme }) => theme.spacings.xs};
  background: ${({ theme, disabled }) =>
    disabled ? theme.colors.grey : theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
  border: none;
  cursor: ${({ disabled }) => (disabled ? "default" : "pointer")};

  :hover {
    background: ${({ theme, disabled }) =>
      disabled ? theme.colors.grey : theme.colors.greyDark};
  }
`;
