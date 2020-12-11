/* eslint-disable prettier/prettier */
import styled, { css } from 'styled-components';
import Tooltip from '../Tooltip';

interface InputProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
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

  ${({ isErrored }) => isErrored && css`
    border-color: ${({ theme }) => theme.colors.error};
  `}

  ${({ isFilled }) =>
    isFilled &&
    css`
      color: ${({ theme }) => theme.colors.orange};
    `}

  ${({ isFocused }) =>
    isFocused &&
    css`
      border-color: ${({ theme }) => theme.colors.orange};
      color: ${({ theme }) => theme.colors.orange};
    `}

  & + div {
    margin-top: 0.8rem;
  }

  > svg {
    margin-right: 1.6rem;
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

export const Error = styled(Tooltip)`
  ${({ theme }) => css`

  width: 2rem;
  height: 2rem;
  margin-left: 1.6rem;
  color: ${theme.colors.error};

  &::after{
    background: ${theme.colors.error};
    color: ${theme.colors.white};
  }

  &::before {
    border-left: 0.8rem solid transparent;
    border-right: 0.8rem solid transparent;

    border-top: 0.8rem solid ${theme.colors.error};
  }
  `}
`;
