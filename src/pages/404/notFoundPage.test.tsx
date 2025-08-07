import '@testing-library/jest-dom';
import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import { NotFoundPage } from './notFoundPage';
import { MemoryRouter } from 'react-router-dom';

describe('404 component', () => {
  test('render 404', () => {
    render(
      <MemoryRouter>
        <NotFoundPage />
      </MemoryRouter>
    );
    expect(screen.getByText('Page not found')).toBeInTheDocument();
  });
});
