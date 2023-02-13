import { fireEvent, screen } from '@testing-library/react';
import { Sidebar } from './Sidebar';
import { renderWithTranslation } from 'shared/lib/tests/renderWithTranslation/renderWithTranslation';

describe('Sidebar', () => {
  it('on the screen', async () => {
    renderWithTranslation(<Sidebar />);
    const toggleBtn = screen.getByTestId('sidebar-toggle');
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    fireEvent.click(toggleBtn);
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
  });
});
