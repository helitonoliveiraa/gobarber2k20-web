/* eslint-disable indent */
import styled, { keyframes, css } from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  height: 100vh;

  align-items: stretch;
`;

export const Header = styled.header`
  ${({ theme }) =>
    css`
      background: ${theme.colors.blackMedium};
      display: flex;
      align-items: center;
      padding: 3.2rem 0;
      height: 14.4rem;
    `}
`;

export const HeaderContent = styled.div`
  ${({ theme }) =>
    css`
      max-width: 1120px;
      margin: 0 auto;
      display: flex;
      flex: 1;
      align-items: center;
      position: relative;

      a {
        text-decoration: none;
        color: ${theme.colors.gray};
        padding: 1rem;
        transition: color 0.2s;

        &:hover {
          color: ${shade(0.2, theme.colors.gray)};
        }

        > svg {
          width: 2.5rem;
          height: 2.5rem;
        }
      }
    `}
`;

const fade = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const PhotoContainer = styled.div`
  ${({ theme }) => css`
    width: 18.6rem;
    height: 18.6rem;
    position: absolute;
    margin: 0 auto;
    top: 0;
    right: 0;
    left: 0;

    animation: ${fade} 0.7s ease-in;

    img {
      width: 18.6rem;
      height: 18.6rem;
      border-radius: 50%;
    }

    > button {
      width: 4.8rem;
      height: 4.8rem;
      border: none;
      border-radius: 50%;
      background: ${theme.colors.orange};
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      right: 0.5rem;
      bottom: 0.5rem;
      transition: background 0.2s;

      &:hover {
        background: ${shade(0.2, theme.colors.orange)};
      }

      > svg {
        color: ${theme.colors.background};
        width: 2rem;
        height: 2rem;
      }
    }
  `}
`;

export const Content = styled.div`
  max-width: 66rem;
  width: 100%;
  margin: 3.2rem auto 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  max-width: 36rem;
  width: 100%;

  animation: ${fade} 0.7s ease-in;

  form {
    max-width: 36rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 8rem 0;

    h1 {
      font-size: 2rem;
      margin-bottom: 2.4rem;
    }

    button {
      margin-top: 2.4rem;
    }
  }

  a {
    text-decoration: none;
    display: flex;
    align-items: center;
    font-size: 1.6rem;
    color: ${({ theme }) => theme.colors.white};

    transition: color 0.2s;

    &:hover {
      color: ${({ theme }) => shade(0.2, theme.colors.white)};
    }

    svg {
      margin-right: 1.6rem;
    }
  }
`;
