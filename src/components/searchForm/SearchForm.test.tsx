import '@testing-library/jest-dom';
import { describe, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { SearchForm } from './SearchForm';

describe('Pagination Component', () => {
  it('renders next and prev buttons', () => {
    render(
      <MemoryRouter>
        <SearchForm handleSearch={() => {}} />
      </MemoryRouter>
    );

    expect(screen.getByText('Search')).toBeInTheDocument();
    expect(screen.getByText('Error')).toBeInTheDocument();
  });

  it('throws an error when Error button is clicked', () => {
    render(<SearchForm handleSearch={vi.fn()} />);
    const errorButton = screen.getByRole('button', { name: /Error/i });

    expect(() => fireEvent.click(errorButton)).toThrow('An error has occurred');
  });
});
