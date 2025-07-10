import '@testing-library/jest-dom';
import { describe, expect, test } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Pagination } from './Pagination';

describe('Pagination Component', () => {
  test('renders next and prev buttons', () => {
    render(
      <MemoryRouter>
        <Pagination pageNumber={20} currentPage={1} onPageChange={() => {}} />
      </MemoryRouter>
    );

    expect(screen.getByText('Prev')).toBeInTheDocument();
    expect(screen.getByText('Next')).toBeInTheDocument();
  });

  test('disables prev button', () => {
    render(
      <MemoryRouter>
        <Pagination pageNumber={20} currentPage={1} onPageChange={() => {}} />
      </MemoryRouter>
    );

    expect(screen.getByText('Prev')).toBeDisabled();
    expect(screen.getByText('Next')).not.toBeDisabled();
  });

  test('disables next button', () => {
    render(
      <MemoryRouter>
        <Pagination pageNumber={20} currentPage={5} onPageChange={() => {}} />
      </MemoryRouter>
    );

    expect(screen.getByText('Prev')).not.toBeDisabled();
    expect(screen.getByText('Next')).toBeDisabled();
  });

  test('click next button', () => {
    render(
      <MemoryRouter>
        <Pagination pageNumber={20} currentPage={5} onPageChange={() => {}} />
      </MemoryRouter>
    );

    const nextButton = screen.getByText('Next');
    fireEvent.click(nextButton);
    expect(screen.getByText('Page: 5')).toBeInTheDocument();
  });
});
