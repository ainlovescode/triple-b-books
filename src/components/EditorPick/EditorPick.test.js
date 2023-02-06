import { render, screen } from '@testing-library/react';
import EditorPick from './EditorPick';

test('renders Editors Pick', () => {
  render(<EditorPick />);
  
  const editor_title = screen.getByText(/Editor's Picks/i);
  const editor_slogan = screen.getByText(/the ultimate booklist/i);
  
  expect(editor_title).toBeInTheDocument();
  expect(editor_slogan).toBeInTheDocument();
}); 
