import React from 'react';

import { Container } from './styles';

interface TooltipProp {
  title: string;
  className?: string;
}

const Tooltip: React.FC<TooltipProp> = ({ title, className, children }) => (
  <Container className={className} data-title={title}>
    {children}
    {/* <span>{title}</span> */}
  </Container>
);

export default Tooltip;
