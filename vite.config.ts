/// <reference types="vitest" />
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
    coverage: {
      all: true,
      exclude: [
        'src/test/**/*',
        '**/types.ts',
        '**/types/*',
        'src/config/**/*',
      ],
      extension: ['.tsx'],
      include: ['src/**/*'],
      provider: 'v8',
      reporter: ['text'],
    },
  },
});
