import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Home from '../components/Home';

describe('Home', () => {
  test('renders the Home component', () => {
    render(<Home />);

    const homePageElement = screen.getByRole('heading', { name: /welcome to our home page/i });
    expect(homePageElement).toBeInTheDocument();

    const loremIpsum2 = screen.getByText(/fuga sed architecto/i);

    expect(loremIpsum2).toBeInTheDocument();
  });

  test('applies the correct CSS class', () => {
    render(<Home />);

    const pageContainer = screen.getByTestId('page-container');
    expect(pageContainer).toHaveClass('pageContainer');
  });
});
