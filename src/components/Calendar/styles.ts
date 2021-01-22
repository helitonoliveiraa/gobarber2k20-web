import styled, { css } from 'styled-components';
import {
  Calendar as DatePicker,
  DayValue,
} from 'react-modern-calendar-datepicker';

const headerTextCalendar = css`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: 1.6rem;
    font-weight: 500;

    :hover {
      color: ${theme.colors.blackMedium};
      background: ${theme.colors.orange};
    }
  `}
`;

export const CustomCalendar = css`
  ${({ theme }) => css`
    flex: 1;
    max-width: 380px;

    .Calendar {
      width: 100%;
      padding-top: 0;
      background: ${theme.colors.blackMedium};
    }

    .Calendar__monthArrowWrapper {
      color: ${theme.colors.gray};
    }

    .Calendar__sectionWrapper {
      position: relative;
      width: 100%;
      min-height: 33rem;
      overflow: hidden;
    }

    .Calendar__section.-hiddenNext {
      opacity: 0.5;
      margin-left: 1rem;
      transform: translateX(90%);
    }

    .Calendar__section.-hiddenPrevious {
      opacity: 0.5;
      padding-right: 4rem;
      transform: translateX(-90%);
    }

    .Calendar__header {
      background: ${theme.colors.shape};
      border-radius: 1rem 1rem 0 0;
      margin-bottom: 1.7rem;
      height: 5rem;

      .Calendar__monthText {
        ${headerTextCalendar};
      }

      .Calendar__yearText {
        ${headerTextCalendar};
      }

      .Calendar__monthArrow {
        button {
          color: ${theme.colors.gray};
        }
      }
    }

    .Calendar__weekDays {
      abbr {
        color: ${theme.colors.grayHard};
        font-size: 1.6rem;
        font-weight: 400;
      }
    }

    .Calendar__weekRow {
      div {
        margin-top: 0.8rem;

        & + div {
          margin-left: 0.8rem;
        }
      }
    }

    .Calendar__day {
      color: ${theme.colors.grayHard};
      background: ${theme.colors.shape};
      border-radius: 1rem;
      width: 4rem;
      height: 4rem;
      padding: 0;

      :hover {
        color: ${theme.colors.blackMedium};
        background: ${theme.colors.orange};
      }
    }

    [aria-label='Sunday'] {
      background-color: yellow;
    }

    [data-is-default-selectable='false'] {
      background: ${theme.colors.blackMedium};
    }

    .Calendar__day:not(.-blank):not(.-selectedStart):not(.-selectedEnd):not(.-selectedBetween):not(.-selected):hover {
      background: ${theme.colors.orange};
      border-radius: 1rem;
    }

    .Calendar__day.-today:not(.-selectedStart):not(.-selectedEnd):not(.-selectedBetween) {
      font-weight: 400;
      color: ${theme.colors.inputs};
      background: ${theme.colors.orange};
      border-radius: 1rem;
      position: relative;

      :hover {
        font-weight: 400;
        color: ${theme.colors.blackMedium};
        background: ${theme.colors.orange};
        border-radius: 1rem;
        position: relative;
      }
    }
  `}
`;
