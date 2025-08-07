import '@testing-library/jest-dom';
import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Footer } from './Footer';

describe('Footer component', () => {
  test('render Footer', () => {
    render(<Footer />);
    expect(screen.getByText('GitHub: GrigorevVic')).toBeInTheDocument();
  });
});
