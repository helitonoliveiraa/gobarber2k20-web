import styled from 'styled-components';
import { shade } from 'polished';
import { motion } from 'framer-motion';
import { APPEAR_FROM_LEFT, FADE } from '../../constants/animations';

import backgroundImg from '../../assets/sign-in-background.png';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`;

export const Content = styled(motion.main)`
  max-width: 66rem;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const AnimationContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  animation: ${APPEAR_FROM_LEFT} 0.7s ease-in;

  img {
    width: 23.1rem;
  }

  form {
    max-width: 36rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    text-align: center;
    margin: 8rem 0;

    h1 {
      margin-bottom: 2.4rem;
      font-size: 2.4rem;
    }

    button {
      margin-top: 2.4rem;
    }

    a {
      display: block;
      margin-top: 2.4rem;
      text-decoration: none;
      font-size: 1.6rem;
      color: ${({ theme }) => theme.colors.white};

      transition: color 0.2s;

      &:hover {
        color: ${({ theme }) => shade(0.2, theme.colors.white)};
      }
    }
  }

  > a {
    text-decoration: none;
    display: flex;
    align-items: center;
    font-size: 1.6rem;
    color: ${({ theme }) => theme.colors.orange};

    transition: color 0.2s;

    &:hover {
      color: ${({ theme }) => shade(0.2, theme.colors.orange)};
    }

    svg {
      margin-right: 1.6rem;
    }
  }
`;

export const Background = styled(motion.div)`
  flex: 1;
  background: url(${backgroundImg}) no-repeat center;
  background-size: cover;

  animation: ${FADE} 0.7s ease-in;
`;
