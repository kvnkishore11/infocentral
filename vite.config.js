import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      'crypto-js': 'crypto-js'
    }
  },
  optimizeDeps: {
    include: ['crypto-js']
  },
  server: {
    port: 3001,
    strictPort: true,
    open: true
  },
  build: {
    commonjsOptions: {
      include: [/node_modules/],
      transformMixedEsModules: true
    }
  }
}); 