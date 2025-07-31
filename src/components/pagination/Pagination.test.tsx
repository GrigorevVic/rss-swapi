import '@testing-library/jest-dom';

import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { Pagination } from './Pagination';

describe('Pagination Component', () => {
  const onPageChangeMock = vi.fn();

  it('renders correctly with provided props', () => {
    render(
      <Pagination
        onPageChange={onPageChangeMock}
        peopleNumber={45}
        currentPage={1}
      />
    );

    expect(screen.getByText(/Page: 1\/5/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /prev/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /next/i })).toBeInTheDocument();
  });

  it('calls onPageChange with the correct value when next button is clicked', () => {
    render(
      <Pagination
        onPageChange={onPageChangeMock}
        peopleNumber={45}
        currentPage={1}
      />
    );

    fireEvent.click(screen.getByRole('button', { name: /next/i }));
    expect(onPageChangeMock).toHaveBeenCalledWith(2);
  });

  it('calls onPageChange with the correct value when prev button is clicked', () => {
    render(
      <Pagination
        onPageChange={onPageChangeMock}
        peopleNumber={45}
        currentPage={2}
      />
    );

    fireEvent.click(screen.getByRole('button', { name: /prev/i }));
    expect(onPageChangeMock).toHaveBeenCalledWith(1);
  });

  it('disables the prev button on the first page', () => {
    render(
      <Pagination
        onPageChange={onPageChangeMock}
        peopleNumber={45}
        currentPage={1}
      />
    );

    expect(screen.getByRole('button', { name: /prev/i })).toBeDisabled();
  });

  it('disables the next button on the last page', () => {
    render(
      <Pagination
        onPageChange={onPageChangeMock}
        peopleNumber={45}
        currentPage={5}
      />
    );

    expect(screen.getByRole('button', { name: /next/i })).toBeDisabled();
  });

  it('shows the correct page number when total peopleNumber changes', () => {
    render(
      <Pagination
        onPageChange={onPageChangeMock}
        peopleNumber={20}
        currentPage={1}
      />
    );

    expect(screen.getByText(/Page: 1\/2/i)).toBeInTheDocument();
  });
});
