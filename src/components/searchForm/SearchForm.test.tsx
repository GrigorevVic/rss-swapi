import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { SearchForm } from './SearchForm';

describe('SearchForm', () => {
  const handleSearchMock = vi.fn();

  beforeEach(() => {
    render(<SearchForm handleSearch={handleSearchMock} />);
  });

  it('renders the search input and button', () => {
    expect(
      screen.getByPlaceholderText(/enter a character name.../i)
    ).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /search/i })).toBeInTheDocument();
  });

  it('updates the input value on change', () => {
    const input = screen.getByPlaceholderText(/enter a character name.../i);
    fireEvent.change(input, { target: { value: 'Luke Skywalker' } });

    expect(input).toHaveValue('Luke Skywalker');
  });

  it('calls handleSearch with the input value on form submit', () => {
    const input = screen.getByPlaceholderText(/enter a character name.../i);
    fireEvent.change(input, { target: { value: 'Darth Vader' } });
    fireEvent.submit(screen.getByRole('form'));

    expect(handleSearchMock).toHaveBeenCalledWith('Darth Vader');
    expect(handleSearchMock).toHaveBeenCalledTimes(1);
  });

  it('trims the input value before calling handleSearch', () => {
    const input = screen.getByPlaceholderText(/enter a character name.../i);
    fireEvent.change(input, { target: { value: '  Luke Skywalker  ' } });
    fireEvent.submit(screen.getByRole('form'));

    expect(handleSearchMock).toHaveBeenCalledWith('Luke Skywalker');
  });
});
