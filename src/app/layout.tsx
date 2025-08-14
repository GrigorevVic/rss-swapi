'use client';

import './styles.css';
import { store } from '../store/store';
import { Provider } from 'react-redux';
import Head from 'next/head';
import { ThemeProvider } from '../contexts/ThemeContextProvider';
import { ErrorBoundary } from '../components/errorBoundary/ErrorBoundary';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <title>Star Wars Characters</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Pages Router educational project at the RSS"
        />
      </Head>
      <body>
        <ErrorBoundary>
          <ThemeProvider>
            <Provider store={store}>{children}</Provider>
          </ThemeProvider>
        </ErrorBoundary>
      </body>
    </html>
  );
}
