import '@testing-library/jest-dom';
import { beforeEach, describe, expect, test } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { SearchForm } from './SearchForm';

describe('SearchForm Component', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  test('saving the entered value to localstorage', () => {
    const fakeName = 'FakeName';
    render(<SearchForm handleSearch={() => {}} />);
    const searchButton = screen.getByText('Search');
    const inputElement = screen.getByPlaceholderText(
      'Enter a character name...'
    );
    fireEvent.change(inputElement, { target: { value: fakeName } });
    fireEvent.click(searchButton);
    expect(localStorage.getItem('searchString')).toBe(fakeName);
  });
});
