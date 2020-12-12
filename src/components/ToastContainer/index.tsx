import React from 'react';
import { FiAlertCircle, FiXCircle } from 'react-icons/fi';

import { Container, Toast } from './styles';

const ToastContainer: React.FC = () => (
  <Container>
    <Toast hasDescription>
      <FiAlertCircle size={20} />

      <div>
        <strong>Error!</strong>
        <p>
          Aconteceu um erro na hora de realizar o seu cadastro, tente novamente!
        </p>
      </div>

      <button type="button">
        <FiXCircle size={18} />
      </button>
    </Toast>

    <Toast type="success" hasDescription={false}>
      <FiAlertCircle size={20} />

      <div>
        <strong>Error!</strong>
        <p />
      </div>

      <button type="button">
        <FiXCircle size={18} />
      </button>
    </Toast>

    <Toast type="error" hasDescription>
      <FiAlertCircle size={20} />

      <div>
        <strong>Error!</strong>
        <p>
          Aconteceu um erro na hora de realizar o seu cadastro, tente novamente!
        </p>
      </div>

      <button type="button">
        <FiXCircle size={18} />
      </button>
    </Toast>
  </Container>
);

export default ToastContainer;
