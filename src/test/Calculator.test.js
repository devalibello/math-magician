import React from 'react';
import { render, screen } from '@testing-library/react';
import Calculator from '../components/Calculator';

describe('Calculator', () => {
  test('should render the Calculator component', () => {
    render(<Calculator />);
    expect(screen.getByTestId('calculator-input')).toMatchSnapshot();
  });
});
