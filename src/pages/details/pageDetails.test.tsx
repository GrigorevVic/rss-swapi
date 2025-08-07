import '@testing-library/jest-dom';
import { describe, test, expect } from 'vitest';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { PageDetails } from './pageDetails';
import { Provider } from 'react-redux';
import { store } from '../../store/store';

describe('pageDetails Component', () => {
  test('render pageDetails', async () => {
    const { container } = render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['?page=1&details=10']}>
          <PageDetails />
        </MemoryRouter>
      </Provider>
    );
    const element = container.querySelector('.loader-container');
    expect(element).toBeInTheDocument();
  });
});
