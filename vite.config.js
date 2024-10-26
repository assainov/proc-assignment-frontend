import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { config } from 'dotenv';

config();

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      'views': path.resolve(__dirname, './src/views'),  // eslint-disable-line no-undef
      'components': path.resolve(__dirname, './src/views/components'),  // eslint-disable-line no-undef
    },
  },
  define: {
    'process.env': process.env // eslint-disable-line no-undef
  }
});
