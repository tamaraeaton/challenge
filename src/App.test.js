import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders app', () => {
  const { getByText } = render(<App />);
  const headerElement = getByText('Input the name of the show you want to search:');
  expect(headerElement).toBeInTheDocument();
});
