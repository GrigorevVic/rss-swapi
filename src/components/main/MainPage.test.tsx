import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider';
import { Main } from './Main';
import { useGetCharactersQuery } from '../../api/api';
import { vi, Mock } from 'vitest';

vi.mock('../../api/api', () => ({
  useGetCharactersQuery: vi.fn(),
}));

vi.mock('next/navigation', () => ({
  useRouter: () => ({
    basePath: '',
    pathname: '/',
    route: '/',
    query: {},
    asPath: '/',
    back: vi.fn(),
    beforePopState: vi.fn(),
    prefetch: vi.fn(),
    push: vi.fn(),
    reload: vi.fn(),
    replace: vi.fn(),
    events: {
      on: vi.fn(),
      off: vi.fn(),
      emit: vi.fn(),
    },
    isFallback: false,
    isLocaleDomain: false,
    isReady: true,
    defaultLocale: 'en',
    domainLocales: [],
    isPreview: false,
    forward: vi.fn(),
  }),
  useSearchParams: vi.fn(() => {
    const searchParams = new URLSearchParams({});
    return searchParams;
  }),
}));

describe('Main Component', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  test('should render the SearchForm', () => {
    (useGetCharactersQuery as Mock).mockReturnValue({
      data: null,
      isFetching: true,
    });
    render(
      <MemoryRouterProvider>
        <Main />
      </MemoryRouterProvider>
    );

    expect(screen.getByText('Search')).toBeInTheDocument();
  });

  test('should render Loader when fetching data', () => {
    (useGetCharactersQuery as Mock).mockReturnValue({
      data: null,
      isFetching: true,
    });

    const { container } = render(
      <MemoryRouterProvider>
        <Main />
      </MemoryRouterProvider>
    );
    const loader = container.querySelector('.loader');
    expect(loader).toBeInTheDocument();
  });
});
