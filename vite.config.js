import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      'views': path.resolve(__dirname, './src/views'),  // eslint-disable-line no-undef
    },
  },
});
