import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  root: '.',
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        events: resolve(__dirname, 'events.html'),
        recruiting: resolve(__dirname, 'recruiting.html'),
        leadership: resolve(__dirname, 'leadership.html'),
        merch: resolve(__dirname, 'merch.html'),
        contact: resolve(__dirname, 'contact.html'),
      },
    },
  },
  server: {
    open: false,
  },
});
