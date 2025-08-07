import '@testing-library/jest-dom';
import { describe, expect, test } from 'vitest';
import { render } from '@testing-library/react';
import { MainPage } from './MainPage';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../../store/store';
import { ThemeProvider } from '../../contexts/ThemeContextProvider';

describe('MainPage Component', () => {
  test('render MainPage', () => {
    try {
      const { container } = render(
        <ThemeProvider>
          <Provider store={store}>
            <MemoryRouter initialEntries={['?page=1']}>
              <MainPage />
            </MemoryRouter>
          </Provider>
        </ThemeProvider>
      );
      const element = container.querySelector('.main');
      expect(element).toBeInTheDocument();
    } catch (error) {
      expect(error).toEqual(new Error('context error'));
    }
  });
});
