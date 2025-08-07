import '@testing-library/jest-dom';
import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Header } from './Header';

describe('Footer component', () => {
  test('render Footer', () => {
    render(<Header />);
    expect(screen.getByText('Star Wars Сharacters')).toBeInTheDocument();
  });
});
