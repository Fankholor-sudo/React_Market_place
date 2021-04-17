import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
<<<<<<< HEAD

=======
>>>>>>> 1fa6b33616af3cc33355692538f6e6ee4a0ec578
import App from './App';

test('renders learn react link', () => {
  render(<BrowserRouter>
    <App />
  </BrowserRouter>);
  const linkElement = screen.getByText('Password');
  expect(linkElement).toBeInTheDocument();
});
