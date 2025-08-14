import '@testing-library/jest-dom';
import { Mock, describe, expect, test, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Details } from './Details';
import { mockedCharacters } from '../../test/mocks';
import { useGetCharacterByIdQuery } from '../../api/api';
import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider';

vi.mock('../../api/api', () => ({
  useGetCharacterByIdQuery: vi.fn(),
}));

vi.mock('next/navigation', () => ({
  useRouter: () => ({
    query: {},
    push: vi.fn(),
    pathname: '/mock-pathname',
  }),
  useSearchParams: vi.fn(() => {
    const searchParams = new URLSearchParams({});
    return searchParams;
  }),
}));

describe('Details Component', () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  test('renders loading state while fetching data', () => {
    (useGetCharacterByIdQuery as Mock).mockReturnValue({
      data: null,
      isFetching: true,
    });

    const { container } = render(
      <MemoryRouterProvider>
        <Details id="1" />
      </MemoryRouterProvider>
    );
    const loader = container.querySelector('.loader');
    expect(loader).toBeInTheDocument();
  });

  test('renders character details when data is fetched', async () => {
    (useGetCharacterByIdQuery as Mock).mockReturnValue({
      data: mockedCharacters.peopleList[0],
      isFetching: false,
    });

    render(
      <MemoryRouterProvider>
        <Details id="1" />
      </MemoryRouterProvider>
    );
    expect(screen.getByText('Luke Skywalker')).toBeInTheDocument();
  });
});
