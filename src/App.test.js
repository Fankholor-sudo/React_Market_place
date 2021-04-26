import { render, screen } from '@testing-library/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

test('renders learn react link', () => {
  act(() => {
  render(<BrowserRouter>
    <App />
  </BrowserRouter>);
   });
  const linkElement = screen.getByText('Computers & Electronics');
  expect(linkElement).toBeInTheDocument();
});
