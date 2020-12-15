import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import AppProvider from './context';

import Routes from './routes';

import Theme from './context/theme';
import GlobalStyle from './styles/global';

const App: React.FC = () => (
  <BrowserRouter>
    <Theme>
      <AppProvider>
        <Routes />
      </AppProvider>

      <GlobalStyle />
    </Theme>
  </BrowserRouter>
);

export default App;
