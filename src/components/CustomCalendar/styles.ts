import { css } from 'styled-components';
import { shade } from 'polished';

export const CustumCalendar = css`
  ${({ theme }) => css`
    .DayPicker {
      background: ${theme.colors.blackMedium};
      border-radius: 1rem;
    }

    .DayPicker-wrapper {
      position: relative;
      padding-bottom: 0;
      border-radius: 0 0 1rem 1rem;
      box-shadow: 0 0.5rem 0.6rem rgba(0, 0, 0, 0.19),
        0 0.3rem 0.3rem rgba(0, 0, 0, 0.23);
    }

    .DayPicker,
    .DayPicker-Month {
      width: 100%;
    }

    .DayPicker-NavBar {
      top: 0;
      right: 0;
      left: 0;
      bottom: 0;

      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;

      span {
        width: 2rem;
        margin-top: 0.8rem;
        color: ${theme.colors.gray};
      }

      span:first-child {
        left: 1.6rem;
      }

      span:last-child {
        right: 1.6rem;
      }
    }

    .DayPicker-Month {
      border-collapse: separate;
      border-spacing: 0.8rem;
      margin: 0;
      margin-bottom: 1.6rem;
    }

    .DayPicker-Day {
      width: 4rem;
      height: 4rem;
    }

    .DayPicker-WeekdaysRow,
    .DayPicker-Body,
    .DayPicker-Caption {
      font-size: 1.6rem;
    }

    .DayPicker-Caption {
      text-align: center;

      background: ${theme.colors.shape};
      height: 5rem;
      border-radius: 1rem 1rem 0 0;
      padding: 1.2rem;
    }

    .DayPicker-Day--available:not(.DayPicker-Day--outside) {
      background: ${theme.colors.shape};
      border-radius: 1rem;
      color: ${theme.colors.white};
    }

    .DayPicker:not(.DayPicker--interactionDisabled)
      .DayPicker-Day:not(.DayPicker-Day--disabled):not(.DayPicker-Day--selected):not(.DayPicker-Day--outside):hover {
      background: ${shade(0.2, theme.colors.shape)};
    }

    .DayPicker-Day--today {
      font-weight: normal;
    }

    .DayPicker-Day--disabled {
      color: ${theme.colors.grayHard} !important;
      background: transparent !important;
    }

    .DayPicker-Day--selected {
      background: ${theme.colors.orange} !important;
      border-radius: 1rem;
      color: ${theme.colors.inputs} !important;
    }
  `}
`;
