import '@testing-library/jest-dom';
import { describe, expect, test } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { CardItem } from './CardItem';
import { MemoryRouter } from 'react-router-dom';
import { mockedCharacters } from '../../test/mocks';
import { Provider } from 'react-redux';
import { store } from '../../store/store';

describe('Card component', () => {
  test('the card component renders the relevant card data', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <CardItem people={mockedCharacters.peopleList[0]} />
          <CardItem people={mockedCharacters.peopleList[9]} />
        </MemoryRouter>
      </Provider>
    );
    expect(screen.getByText('Luke Skywalker')).toBeInTheDocument();
    expect(screen.getByText('Obi-Wan Kenobi')).toBeInTheDocument();
  });

  test('click close button', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <CardItem people={mockedCharacters.peopleList[0]} />
        </MemoryRouter>
      </Provider>
    );
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).not.toBeChecked();
    fireEvent.click(checkbox);
    expect(checkbox).toBeChecked();
  });
});
