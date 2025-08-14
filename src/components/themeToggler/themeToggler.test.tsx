import '@testing-library/jest-dom';
import { describe, expect, test } from 'vitest';
import { render } from '@testing-library/react';
import { ThemeToggler } from './themeToggler';
import { ThemeProvider } from '../../contexts/ThemeContextProvider';

describe('ThemeToggler Component', () => {
  test('renders ThemeToggler', () => {
    const { container } = render(
      <ThemeProvider>
        <ThemeToggler />
      </ThemeProvider>
    );
    const togglerBtn = container.querySelector('.toggler');
    expect(togglerBtn).toBeInTheDocument();
  });
});
