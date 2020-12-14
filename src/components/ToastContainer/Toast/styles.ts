import styled, { css } from 'styled-components';
import { animated } from 'react-spring';
import { lighten } from 'polished';

interface ContainerProps {
  type?: 'success' | 'error' | 'info';
  hasDescription: boolean;
}

const toastTypeVariations = {
  info: css`
    background: ${({ theme }) => lighten(0.5, theme.colors.blue)};
    color: ${({ theme }) => theme.colors.blue};
  `,
  success: css`
    background: ${({ theme }) => lighten(0.6, theme.colors.green)};
    color: ${({ theme }) => theme.colors.green};
  `,
  error: css`
    background: ${({ theme }) => lighten(0.37, theme.colors.error)};
    color: ${({ theme }) => theme.colors.error};
  `,
};

export const Container = styled(animated.div)<ContainerProps>`
  position: relative;
  display: flex;

  width: 36rem;
  padding: 1.6rem 3rem 1.6rem 1.6rem;
  border-radius: 1rem;
  box-shadow: 0.2rem 0.2rem 0.8rem rgba(0, 0, 0, 0.2);

  & + div {
    margin-top: 0.8rem;
  }

  ${({ type }) => toastTypeVariations[type || 'info']}

  > svg {
    margin: 0.4rem 1.2rem 0 0;
  }

  div {
    flex: 1;

    P {
      margin-top: 0.4rem;
      font-size: 1.4rem;
      opacity: 0.8;
      line-height: 2rem;
    }
  }

  button {
    position: absolute;
    top: 1.9rem;
    right: 1.6rem;
    border: 0;
    background: transparent;
    color: inherit;
  }

  ${({ hasDescription }) =>
    !hasDescription &&
    css`
      align-items: center;

      svg {
        margin-top: 0;
      }
    `}
`;
