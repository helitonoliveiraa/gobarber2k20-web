import styled, { css } from 'styled-components';

interface ToastProps {
  type?: 'success' | 'error' | 'info';
  hasDescription: boolean;
}

const toastTypeVariations = {
  info: css`
    background: #ebf8ff;
    color: #3172b7;
  `,
  success: css`
    background: #e6fffa;
    color: #2e656a;
  `,
  error: css`
    background: #fddede;
    color: #f03442;
  `,
};

export const Container = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  padding: 3rem;
  overflow: hidden;
`;

export const Toast = styled.div<ToastProps>`
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
