import styled from 'styled-components';
import { shade } from 'polished';
import { motion } from 'framer-motion';
import { APPEAR_FROM_RIGHT, FADE } from '../../constants/animations';

import backgroundImg from '../../assets/sign-up-background.png';

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
  padding: 0 2rem;
`;

export const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  max-width: 36rem;
  width: 100%;

  animation: ${APPEAR_FROM_RIGHT} 0.7s ease-in;

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
      margin-top: 1.6rem;
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

export const Background = styled(motion.div)`
  flex: 1;
  background: url(${backgroundImg}) no-repeat center;
  background-size: cover;

  animation: ${FADE} 0.7s ease-in;
`;
