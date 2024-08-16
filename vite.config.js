// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // The output directory for the build files
    rollupOptions: {
      input: {
        main: 'public/index.html', // Ensure the entry point is correctly set
      },
    },
  },
});
