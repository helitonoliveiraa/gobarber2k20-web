import { createGlobalStyle } from 'styled-components';

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

export default createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%; /* 1rem to equal 10px */
  }

  @media(max-width: 1080px) {
    html {
      font-size: 56.3%;
    }
  }

  @media(max-width: 950px) {
    html {
      font-size: 53.13%;
    }
  }

  @media(max-width: 900px) {
    html {
      font-size: 50%;
    }
  }

  @media(max-width: 1280px) and (max-height: 650px) {
    html {
      font-size: 50%;
    }
  }

  body {
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.white};
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-family: 'Roboto Slab', serif;
    font-size: 1.6rem;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }

  button {
    cursor: pointer;
  }
`;
