import '@testing-library/jest-dom';
import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import { CardList } from './CardList';
import { mockedCharacters } from '../../test/mocks';
import { Provider } from 'react-redux';
import { store } from '../../store/store';
import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider';

describe('CardList component', () => {
  test('CardList component displays the correct list of cards', () => {
    render(
      <MemoryRouterProvider>
        <Provider store={store}>
          <CardList peopleList={mockedCharacters.peopleList} />
        </Provider>
      </MemoryRouterProvider>
    );
    expect(screen.getAllByRole('link').length).toBe(10);
  });

  test('if there is no data, displays a message', () => {
    render(
      <MemoryRouterProvider>
        <Provider store={store}>
          <CardList />
        </Provider>
      </MemoryRouterProvider>
    );
    expect(
      screen.getByText('Nothing found for your request')
    ).toBeInTheDocument();
  });
});
