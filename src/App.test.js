import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const navBar = screen.getByText(/login/i);
  const sitename = screen.getByText(/triple b books/i);
  
  expect(navBar).toBeInTheDocument();
  expect(sitename).toBeInTheDocument();
});
