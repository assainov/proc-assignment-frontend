import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:5173',
    browser: 'chrome',
    supportFile: false
  },
  component: {
    devServer: {
      framework: 'react',
      bundler: 'vite',
    },
  },
});