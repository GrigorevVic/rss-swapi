import '@testing-library/jest-dom';
import { describe, expect, test } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Details } from './Details';
import { mockedCharacters } from '../../test/mocks';

describe('Details Component', () => {
  test('render character data', () => {
    render(
      <MemoryRouter>
        <Details character={mockedCharacters.peopleList[0]} />
      </MemoryRouter>
    );
    expect(screen.getByText('Luke Skywalker')).toBeInTheDocument();
    expect(screen.getByText('Gender: male')).toBeInTheDocument();
  });

  test('click close button', () => {
    render(
      <MemoryRouter>
        <Details character={mockedCharacters.peopleList[0]} />
      </MemoryRouter>
    );
    const closeButton = screen.getByText('Close');
    fireEvent.click(closeButton);
    expect(screen.getByText('Close')).toBeInTheDocument();
  });
});
