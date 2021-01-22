import styled, { css } from 'styled-components';

export const Container = styled.div``;

export const Header = styled.header`
  ${({ theme }) =>
    css`
      background: ${theme.colors.blackMedium};
      align-items: center;
      padding: 3.2rem 0;
    `}
`;

export const HeaderContent = styled.div`
  ${({ theme }) =>
    css`
      max-width: 1120px;
      margin: 0 auto;
      display: flex;
      align-items: center;

      > img {
        height: 8rem;
      }

      button {
        margin-left: auto;
        border: 0;
        background: transparent;
        color: ${theme.colors.gray};
        transition: color 0.2s;

        &:hover {
          color: ${theme.colors.error};
        }
      }
    `}
`;

export const Profile = styled.div`
  ${({ theme }) =>
    css`
      display: flex;
      align-items: center;

      > img {
        width: 5.6rem;
        height: 5.6rem;
        border-radius: 50%;
        margin: 0 1.6rem 0 8rem;
      }

      div {
        span {
          display: block;
          font-size: 1.6rem;
          color: ${theme.colors.gray};
          line-height: 2.6rem;
        }

        strong {
          font-size: 1.6rem;
          color: ${theme.colors.orange};
          line-height: 2.6rem;
        }
      }
    `}
`;

export const Content = styled.main`
  max-width: 1120px;
  margin: 6.4rem auto;

  display: flex;
`;

export const Schedule = styled.div`
  ${({ theme }) => css`
    flex: 1;
    margin-right: 12rem;

    h1 {
      font-size: 3.6rem;
      color: ${theme.colors.white};
    }

    p {
      margin-top: 1.2rem;
      color: ${theme.colors.orange};
      display: flex;
      align-items: center;

      span {
        display: flex;
        align-items: center;
        font-weight: 500;

        & + span::before {
          content: '';
          width: 0.1rem;
          height: 1.2rem;
          background: ${theme.colors.orange};
          margin: 0 0.8rem;
        }
      }
    }
  `}
`;

// Global variables to this page
const strongText = css`
  font-weight: 400;
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.gray};
`;

const clockWrapper = css`
  margin-left: auto;
  display: flex;
  align-items: center;
  font-size: 2rem;
  font-weight: 400;
`;

const clockSvg = css`
  color: ${({ theme }) => theme.colors.orange};
  margin-right: 1rem;
`;

const appointmentCard = css`
  display: flex;
  flex: 1;
  align-items: center;
  margin-top: 2.4rem;
  padding: 1.6rem 2.4rem;
  border-radius: 1rem;
  background: ${({ theme }) => theme.colors.shape};
  position: relative;
`;

export const NextAppointment = styled.div`
  ${({ theme }) => css`
    margin-top: 6.4rem;

    > strong {
      ${strongText}
    }

    div {
      ${appointmentCard};

      &::before {
        content: '';
        width: 0.2rem;
        height: 70%;
        background: ${theme.colors.orange};
        position: absolute;
        left: 0;
      }

      img {
        width: 8rem;
        height: 8rem;
        border-radius: 50%;
      }

      strong {
        font-size: 2.4rem;
        margin-left: 2.4rem;
      }

      span {
        ${clockWrapper}

        svg {
          ${clockSvg}
        }
      }
    }
  `}
`;

export const Section = styled.section`
  ${({ theme }) => css`
    margin-top: 4.8rem;

    > strong {
      ${strongText}
      display: block;
      padding-bottom: 1.6rem;
      margin-bottom: 2.4rem;
      border-bottom: 0.1rem solid ${theme.colors.shape};
    }
  `}
`;

export const Appointment = styled.div`
  display: flex;
  align-items: center;

  & + & {
    margin-top: 1.6rem;
  }

  span {
    ${clockWrapper};
    margin-left: 0;
    font-size: 1.6rem;

    svg {
      ${clockSvg}
    }
  }

  div {
    ${appointmentCard};
    margin-top: 0;
    margin-left: 2.6rem;
    padding: 1.6rem;

    img {
      width: 5.6rem;
      height: 5.6rem;
      border-radius: 50%;
    }

    strong {
      font-size: 2rem;
      margin-left: 1.6rem;
    }
  }
`;

export const Calendar = styled.aside`
  ${({ theme }) => css`
    flex: 1;
    max-width: 360px;
    width: 100%;
    background: ${theme.colors.gray};
  `}
`;
