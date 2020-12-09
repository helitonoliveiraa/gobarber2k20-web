import React from 'react';

import Theme from './context/theme';

import GlobalStyle from './styles/global';

const App: React.FC = () => (
  <Theme>
    <h1>Hello</h1>
    <GlobalStyle />
  </Theme>
);

export default App;
