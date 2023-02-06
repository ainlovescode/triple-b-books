import { render, screen } from '@testing-library/react';
import Home from './Home';

test('renders Home page with site name and slogan', () => {
  render(<Home />);
  
  const siteName = screen.getByText(/Triple B Books/i);
  const slogan = screen.getByText(/where words make your dreams come true/i);
  
  expect(siteName).toBeInTheDocument();
  expect(slogan).toBeInTheDocument();
}); 
