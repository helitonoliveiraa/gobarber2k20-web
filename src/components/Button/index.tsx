import { darken } from 'polished';
import React, { ButtonHTMLAttributes } from 'react';
import Loader from 'react-loader-spinner';

import { Container } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  loading?: boolean;
};

const Button: React.FC<ButtonProps> = ({ children, loading, ...rest }) => (
  <Container type="button" {...rest}>
    {loading ? (
      <Loader
        type="ThreeDots"
        width="5rem"
        height="3rem"
        color={darken(0.2, '#ff9000')}
      />
    ) : (
      children
    )}
  </Container>
);

export default Button;
