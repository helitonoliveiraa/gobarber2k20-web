import React from 'react';

import { AuthProvider } from './context/AuthContext';

import SignIn from './pages/SignIn';
// import SignUp from './pages/SignUp';

import Theme from './context/theme';
import GlobalStyle from './styles/global';

const App: React.FC = () => (
  <Theme>
    <AuthProvider>
      <SignIn />
    </AuthProvider>
    <GlobalStyle />
  </Theme>
);

export default App;
