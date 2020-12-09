import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  padding: 1.55rem 1.6rem;
  border-radius: 1rem;
  border: 2px solid ${({ theme }) => theme.colors.inputs};
  background: ${({ theme }) => theme.colors.inputs};
  color: ${({ theme }) => theme.colors.grayHard};
  font-size: 1.6rem;

  & + div {
    margin-top: 0.8rem;
  }

  svg {
    margin-right: 1.6rem;
  }

  input {
    flex: 1;
    background: transparent;
    border: none;
    color: ${({ theme }) => theme.colors.white};

    &::placeholder {
      color: ${({ theme }) => theme.colors.grayHard};
      font-size: 1.6rem;
    }
  }
`;
