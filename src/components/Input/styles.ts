/* eslint-disable prettier/prettier */
import styled, { css } from 'styled-components';

interface InputProps {
  isFocused: boolean;
  isFilled: boolean;
}

export const Container = styled.div<InputProps>`
  width: 100%;
  display: flex;
  align-items: center;

  padding: 1.55rem 1.6rem;
  border-radius: 1rem;
  border: 2px solid ${({ theme }) => theme.colors.inputs};
  background: ${({ theme }) => theme.colors.inputs};
  color: ${({ theme }) => theme.colors.grayHard};
  font-size: 1.6rem;

  ${({ isFocused }) =>
    isFocused &&
    css`
      border-color: ${({ theme }) => theme.colors.orange};
      color: ${({ theme }) => theme.colors.orange};
    `}

  & + div {
    margin-top: 0.8rem;
  }

  svg {
    margin-right: 1.6rem;

    ${({ isFilled }) =>
    isFilled &&
      css`
        color: ${({ theme }) => theme.colors.orange};
      `}
  }

  input {
    flex: 1;
    background: transparent;
    border: none;
    color: ${({ theme }) => theme.colors.white};

    &::placeholder {
      color: ${({ theme }) => theme.colors.grayHard};
      font-size: 1.6rem;
    }
  }
`;
