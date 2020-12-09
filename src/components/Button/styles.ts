import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  height: 5.6rem;
  border: none;
  border-radius: 1rem;
  margin-top: 2.4rem;
  background: ${({ theme }) => theme.colors.orange};

  color: ${({ theme }) => theme.colors.background};
  font-size: 1.6rem;
  font-weight: 500;

  transition: background 0.2s;

  &:hover {
    background: ${({ theme }) => shade(0.2, theme.colors.orange)};
  }
`;
