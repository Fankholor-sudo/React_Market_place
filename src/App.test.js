import { render, screen } from '@testing-library/react';
import React from 'react';
import { act } from "react-dom/test-utils";
import { BrowserRouter } from 'react-router-dom';
import App from './App';


test('renders learn react link',() => {

  render(<BrowserRouter>
    <App />
  </BrowserRouter>);
  const linkElement = screen.getByText('Computers & Electronics');
  expect(linkElement).toBeInTheDocument();

});
