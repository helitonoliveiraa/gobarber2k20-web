import React from 'react';

import Theme from './theme';
import { AuthProvider } from './hooks/Auth';
import { ToastProvider } from './hooks/Toast';

const AppProvider: React.FC = ({ children }) => (
  <Theme>
    <AuthProvider>
      <ToastProvider>{children}</ToastProvider>
    </AuthProvider>
  </Theme>
);

export default AppProvider;
