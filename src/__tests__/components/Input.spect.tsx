import React from 'react';
import { render } from '@testing-library/react';
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
        <Input name="email" placeholder="E-email" />
      </ThemeProvider>,
    );

    expect(getByPlaceholderText('E-email')).toBeTruthy();
  });
});
