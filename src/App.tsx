import React from 'react';

// import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

import Theme from './context/theme';
import GlobalStyle from './styles/global';

const App: React.FC = () => (
  <Theme>
    <SignUp />
    <GlobalStyle />
  </Theme>
);

export default App;
