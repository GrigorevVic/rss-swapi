import '@testing-library/jest-dom';
import { describe, expect, test } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Pagination } from './Pagination';
import { ApiResponse } from '../../types/types';

describe('Pagination Component', () => {
  test('renders next and prev buttons', () => {
    const currentPage = 1;
    const response: ApiResponse = {
      count: 82,
      previous: 'http://example.com/api/characters?page=1',
      next: 'http://example.com/api/characters?page=3',
      results: [],
    };

    render(
      <MemoryRouter>
        <Pagination
          currentPage={currentPage}
          response={response}
          onPageChange={() => {}}
        />
      </MemoryRouter>
    );

    expect(screen.getByText('Prev')).toBeInTheDocument();
    expect(screen.getByText('Next')).toBeInTheDocument();
  });

  test('disables prev button', () => {
    const currentPage = 1;
    const response: ApiResponse = {
      count: 82,
      previous: null,
      next: 'https://swapi.dev/api/people/?page=2',
      results: [],
    };

    render(
      <MemoryRouter>
        <Pagination
          currentPage={currentPage}
          response={response}
          onPageChange={() => {}}
        />
      </MemoryRouter>
    );

    expect(screen.getByText('Prev')).toBeDisabled();
    expect(screen.getByText('Next')).not.toBeDisabled();
  });

  test('disables next button', () => {
    const currentPage = 8;
    const response: ApiResponse = {
      count: 82,
      previous: 'https://swapi.dev/api/people/?page=8',
      next: null,
      results: [],
    };

    render(
      <MemoryRouter>
        <Pagination
          currentPage={currentPage}
          response={response}
          onPageChange={() => {}}
        />
      </MemoryRouter>
    );

    expect(screen.getByText('Prev')).not.toBeDisabled();
    expect(screen.getByText('Next')).toBeDisabled();
  });

  test('click next button', () => {
    const currentPage = 1;
    const response: ApiResponse = {
      count: 82,
      previous: null,
      next: 'https://swapi.dev/api/people/?page=2',
      results: [],
    };

    render(
      <MemoryRouter>
        <Pagination
          currentPage={currentPage}
          response={response}
          onPageChange={() => {}}
        />
      </MemoryRouter>
    );

    const nextButton = screen.getByText('Next');
    fireEvent.click(nextButton);
    expect(screen.getByText('Page: 1 / 9')).toBeInTheDocument();
  });
});
