import styled, { css } from 'styled-components';
import { lighten, shade } from 'polished';
import {
  APPEAR_FROM_LEFT,
  APPEAR_FROM_RIGHT,
  FADE_IN_TEXT,
  FADE,
  BLINK_NEXT_APPOINTMENT,
} from '../../constants/animations';

import { CustumCalendar } from '../../components/CustomCalendar/styles';

export const Container = styled.div``;

export const Header = styled.header`
  ${({ theme }) =>
    css`
      background: ${theme.colors.blackMedium};
      align-items: center;
      padding: 3.2rem 2rem;

      box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.19),
        0 0.6rem 0.6rem rgba(0, 0, 0, 0.23);
    `}
`;

export const HeaderContent = styled.div`
  ${({ theme }) =>
    css`
      max-width: 1120px;
      margin: 0 auto;
      display: flex;
      align-items: center;

      @media (max-width: 600px) {
        > img {
          display: none;
        }
      }

      > img {
        height: 8rem;
        animation: ${APPEAR_FROM_LEFT} 1s ease-in;
      }

      button {
        margin-left: auto;
        border: 0;
        background: transparent;
        color: ${theme.colors.gray};
        transition: color 0.2s ease-in-out;

        animation: ${FADE} 1s ease-in;

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

      animation: ${FADE} 1s ease-in;

      > img {
        width: 5.6rem;
        height: 5.6rem;
        border-radius: 50%;
        margin: 0 1.6rem 0 8rem;
        object-fit: cover;

        @media (max-width: 600px) {
          margin-left: 0;
        }
      }

      div {
        span {
          display: block;
          font-size: 1.6rem;
          color: ${theme.colors.gray};
          line-height: 2.6rem;
        }

        a {
          text-decoration: none;
          font-size: 1.6rem;
          color: ${theme.colors.orange};
          line-height: 2.6rem;
          transition: color 0.2s;

          &:hover {
            color: ${shade(0.2, theme.colors.orange)};
          }
        }
      }
    `}
`;

export const Content = styled.main`
  position: relative;
  max-width: 1120px;
  margin: 6.4rem auto;

  display: flex;

  @media (max-width: 1160px) {
    padding: 0 2rem;
  }

  @media (max-width: 900px) {
    flex-direction: column;
  }
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

    @media (max-width: 1040px) {
      margin-right: 6rem;
    }

    @media (max-width: 980px) {
      margin-right: 3rem;
    }

    @media (max-width: 900px) {
      margin-top: 40rem;
      margin-right: 0;
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
      z-index: 5;

      animation: ${BLINK_NEXT_APPOINTMENT} 2s infinite;
      animation: ${APPEAR_FROM_RIGHT} 1s linear;

      box-shadow: 0 0.5rem 0.6rem rgba(0, 0, 0, 0.19),
        0 0.3rem 0.3rem rgba(0, 0, 0, 0.23);

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
        object-fit: cover;
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
    display: flex;
    flex-direction: column;

    > strong {
      ${strongText}
      display: block;
      padding-bottom: 1.6rem;
      margin-bottom: 2.4rem;
      border-bottom: 0.1rem solid ${theme.colors.shape};
    }

    > p {
      animation: ${FADE_IN_TEXT} 1s ease-in;
      color: ${lighten(0.4, theme.colors.gray)};
      opacity: 0.2;
    }
  `}
`;

export const Appointment = styled.div`
  display: flex;
  align-items: center;

  animation: ${FADE} 1s ease-in;

  & + & {
    margin-top: 1.6rem;
  }

  span {
    ${clockWrapper};
    margin-left: 0;
    font-size: 1.6rem;
    width: 7rem;

    svg {
      ${clockSvg}
    }
  }

  div {
    ${appointmentCard};
    margin-top: 0;
    margin-left: 2.6rem;
    padding: 1.6rem;
    box-shadow: 0 0.5rem 0.6rem rgba(0, 0, 0, 0.19),
      0 0.3rem 0.3rem rgba(0, 0, 0, 0.23);

    animation: ${APPEAR_FROM_RIGHT} 1s linear;

    img {
      width: 5.6rem;
      height: 5.6rem;
      border-radius: 50%;
      object-fit: cover;
      background-color: #333;
    }

    strong {
      font-size: 2rem;
      margin-left: 1.6rem;
    }
  }
`;

export const Calendar = styled.aside`
  max-width: 380px;
  width: 100%;

  animation: ${FADE} 1s ease-in;

  ${CustumCalendar};

  @media (max-width: 900px) {
    position: absolute;
    right: 0;
    left: 0;

    margin: 0 auto;
    padding: 0 2rem;
  }
`;
