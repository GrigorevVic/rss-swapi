import '@testing-library/jest-dom';
import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import Page404 from './not-found';

describe('404 component', () => {
  test('render 404', () => {
    render(<Page404 />);
    expect(screen.getByText('Page not found')).toBeInTheDocument();
  });
});
