import React from 'react';
import { render } from '@testing-library/react';
import Quote from '../components/Quote';

describe('Quote', () => {
  test('should render the Quote component', () => {
    const { container } = render(<Quote />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
