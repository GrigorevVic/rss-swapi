import '@testing-library/jest-dom';
import React from 'react';
import { describe, expect, test } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import { ThemeProvider } from './ThemeContextProvider';
import { ThemeContext, IThemeContext } from './ThemeContext';

const TestComponent = () => {
  const { isDark, toggleTheme } = React.useContext(
    ThemeContext
  ) as IThemeContext;

  return (
    <div>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <p>The current theme is: {isDark ? 'Dark' : 'Light'}</p>
    </div>
  );
};

describe('ThemeProvider', () => {
  test('should toggle theme from light to dark', () => {
    render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>
    );

    expect(screen.getByText('The current theme is: Light')).toBeInTheDocument();
    fireEvent.click(screen.getByText('Toggle Theme'));
    expect(screen.getByText('The current theme is: Dark')).toBeInTheDocument();
    fireEvent.click(screen.getByText('Toggle Theme'));
    expect(screen.getByText('The current theme is: Light')).toBeInTheDocument();
  });
});
