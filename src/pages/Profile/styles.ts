/* eslint-disable indent */
import styled, { keyframes, css } from 'styled-components';
import { shade } from 'polished';

const fade = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const apearFromTop = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-8rem);
  }
  10% {
    opacity: 1;
    transform: translateY(0);
  }
  30% {
    opacity: 1;
    transform: translateY(-1.5rem);
  }
  50% {
    opacity: 1;
    transform: translateY(0);
  }
  65% {
    opacity: 1;
    transform: translateY(-0.7rem);
  }
  80% {
    opacity: 1;
    transform: translateY(0);
  }
  90% {
    opacity: 1;
    transform: translateY(-0.3rem);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const fadeIcon = keyframes`
  0% {
    opacity: 0;
  }
  90% {
    opacity: 0.01;
  }
  100% {
    opacity: 1;
  }
`;

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
      padding: 3.2rem 2rem;
      height: 14.4rem;

      box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.19),
        0 0.6rem 0.6rem rgba(0, 0, 0, 0.23);
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

        animation: ${fade} 1s ease-in;

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

export const PhotoContainer = styled.div`
  ${({ theme }) => css`
    width: 18.6rem;
    height: 18.6rem;
    position: absolute;
    margin: 0 auto;
    top: 0;
    right: 0;
    left: 0;

    animation: ${apearFromTop} 1s;

    img {
      width: 18.6rem;
      height: 18.6rem;
      border-radius: 50%;
      object-fit: cover;

      box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.19),
        0 0.6rem 0.6rem rgba(0, 0, 0, 0.23);
    }

    > label {
      width: 4.8rem;
      height: 4.8rem;
      border-radius: 50%;
      background: ${theme.colors.orange};
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      right: 0.5rem;
      bottom: 0.5rem;
      cursor: pointer;
      transition: background 0.2s;

      animation: ${fadeIcon} 1s;

      &:hover {
        background: ${shade(0.2, theme.colors.orange)};
      }

      > svg {
        color: ${theme.colors.background};
        width: 2rem;
        height: 2rem;
      }

      input {
        display: none;
      }
    }
  `}
`;

export const Content = styled.div`
  max-width: 66rem;
  width: 100%;
  margin: 3.2rem auto 0;
  padding: 0 2rem;

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

  animation: ${fade} 1s ease-in;

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
