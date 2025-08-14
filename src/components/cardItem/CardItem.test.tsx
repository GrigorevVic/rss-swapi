import '@testing-library/jest-dom';
import { describe, expect, test } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { CardItem } from './CardItem';
import { mockedCharacters } from '../../test/mocks';
import { Provider } from 'react-redux';
import { store } from '../../store/store';
import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider';

describe('Card component', () => {
  test('the card component renders the relevant card data', () => {
    render(
      <MemoryRouterProvider>
        <Provider store={store}>
          <CardItem people={mockedCharacters.peopleList[0]} />
          <CardItem people={mockedCharacters.peopleList[9]} />
        </Provider>
      </MemoryRouterProvider>
    );
    expect(screen.getByText('Luke Skywalker')).toBeInTheDocument();
    expect(screen.getByText('Obi-Wan Kenobi')).toBeInTheDocument();
  });

  test('click checkbox', () => {
    render(
      <MemoryRouterProvider>
        <Provider store={store}>
          <CardItem people={mockedCharacters.peopleList[0]} />
        </Provider>
      </MemoryRouterProvider>
    );
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).not.toBeChecked();
    fireEvent.click(checkbox);
    expect(checkbox).toBeChecked();
  });
});
