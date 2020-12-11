/* eslint-disable indent */
import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) =>
    theme &&
    css`
      position: relative;
      cursor: help;

      &::after {
        content: attr(data-title);

        position: absolute;
        display: block;
        width: max-content;
        padding: 0.8rem;
        border-radius: 0.6rem;

        background: ${theme.colors.orange};
        color: ${theme.colors.background};
        font-weight: 500;
        font-size: 1.2rem;

        bottom: calc(100% + 1.2rem);

        left: 50%;
        transform: translateX(-50%);
      }

      &::before {
        content: '';
        position: absolute;
        width: 0;
        height: 0;
        top: -1.3rem;
        bottom: 0;

        border-left: 0.8rem solid transparent;
        border-right: 0.8rem solid transparent;

        border-top: 0.8rem solid ${theme.colors.orange};

        left: 50%;
        transform: translateX(-50%);
      }

      &::after,
      ::before {
        opacity: 0;
        visibility: hidden;
        transition: 0.4s ease-in-out;
      }

      &:hover {
        ::after,
        ::before {
          opacity: 1;
          visibility: visible;
        }
      }
    `}
`;
