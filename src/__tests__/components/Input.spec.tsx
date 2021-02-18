import React from 'react';
import { fireEvent, render, waitFor } from '@testing-library/react';
import 'jest-styled-components';
import { ThemeProvider } from 'styled-components';

import { theme } from '../../styles/theme';
import Input from '../../components/Input';

jest.mock('@unform/core', () => ({
  useField() {
    return {
      fieldName: 'email',
      defaultValue: '',
      error: '',
      registerField: jest.fn(),
    };
  },
}));
describe('Input component', () => {
  it('should be able to render an input', () => {
    const { getByPlaceholderText } = render(
      <ThemeProvider theme={theme}>
        <Input name="email" placeholder="E-mail" />
      </ThemeProvider>,
    );

    expect(getByPlaceholderText('E-mail')).toBeTruthy();
  });

  it('should render highlight on input focus', async () => {
    const { getByPlaceholderText, getByTestId } = render(
      <ThemeProvider theme={theme}>
        <Input name="email" placeholder="E-mail" />
      </ThemeProvider>,
    );

    const inputElement = getByPlaceholderText('E-mail');
    const containerElement = getByTestId('input-container');

    fireEvent.focus(inputElement);

    await waitFor(() => {
      expect(containerElement).toHaveStyle(
        `border-color: ${theme.colors.orange}`,
      );
      expect(containerElement).toHaveStyle(`color: ${theme.colors.orange}`);
    });

    fireEvent.blur(inputElement);

    await waitFor(() => {
      expect(containerElement).not.toHaveStyle(
        `border-color: ${theme.colors.orange}`,
      );
      expect(containerElement).not.toHaveStyle(`color: ${theme.colors.orange}`);
    });
  });

  it('should keep input border highlight when input filled', async () => {
    const { getByPlaceholderText, getByTestId } = render(
      <ThemeProvider theme={theme}>
        <Input name="email" placeholder="E-mail" />
      </ThemeProvider>,
    );

    const inputElement = getByPlaceholderText('E-mail');
    const containerElement = getByTestId('input-container');

    fireEvent.change(inputElement, {
      target: { value: 'johndoe@example.com' },
    });

    fireEvent.blur(inputElement);

    await waitFor(() => {
      expect(containerElement).toHaveStyle(`color: ${theme.colors.orange}`);
    });
  });
});
