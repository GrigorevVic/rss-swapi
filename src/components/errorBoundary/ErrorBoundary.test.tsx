import '@testing-library/jest-dom';
import { describe, test } from 'vitest';
import { render } from '@testing-library/react';
import { ErrorBoundary } from './ErrorBoundary';

const ErrorThrowingComponent = () => {
  throw new Error('Test error');
};

describe('test ErrorBoundary', () => {
  test('render Footer', () => {
    render(
      <ErrorBoundary>
        <div>Hello, World!</div>
      </ErrorBoundary>
    );
  });

  test('renders error message when child throws an error', () => {
    render(
      <ErrorBoundary>
        <ErrorThrowingComponent />
      </ErrorBoundary>
    );
  });
});
