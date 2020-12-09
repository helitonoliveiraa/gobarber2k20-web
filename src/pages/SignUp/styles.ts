import styled from 'styled-components';
import { shade } from 'polished';

import backgroundImg from '../../assets/sign-up-background.png';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  max-width: 66rem;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

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

export const Background = styled.div`
  flex: 1;
  background: url(${backgroundImg}) no-repeat center;
  background-size: cover;
`;
