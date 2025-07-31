import '@testing-library/jest-dom';
import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import { CardList } from './CardList';
import { MemoryRouter } from 'react-router-dom';
import { mockedCharacters } from '../../test/mocks';
import { Provider } from 'react-redux';
import { store } from '../../store/store';

describe('CardList component', () => {
  test('CardList component displays the correct list of cards', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <CardList peopleList={mockedCharacters.peopleList} />
        </MemoryRouter>
      </Provider>
    );
    expect(screen.getAllByRole('link').length).toBe(10);
  });

  test('if there is no data, displays a message', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <CardList />
        </MemoryRouter>
      </Provider>
    );
    expect(
      screen.getByText('Nothing found for your request')
    ).toBeInTheDocument();
  });
});
