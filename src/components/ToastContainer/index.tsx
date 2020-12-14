import React from 'react';

import Toast from './Toast';

import { ToastMessage } from '../../context/hooks/Toast';

import { Container } from './styles';

interface ToastContainerProps {
  messages: ToastMessage[];
}

const ToastContainer: React.FC<ToastContainerProps> = ({ messages }) => (
  <Container>
    {messages.map(message => (
      <Toast key={message.id} message={message} />
    ))}
  </Container>
);

export default ToastContainer;
