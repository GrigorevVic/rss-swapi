import './App.css';
import type { ReactNode } from 'react';
import { Outlet } from 'react-router-dom';
import { ErrorBoundary } from './components/errorBoundary/ErrorBoundary';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { ThemeProvider } from './contexts/ThemeContextProvider';

export function App(): ReactNode {
  return (
    <ErrorBoundary>
      <ThemeProvider>
        <Provider store={store}>
          <Outlet />
        </Provider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}
