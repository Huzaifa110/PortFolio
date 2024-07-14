import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/PortFolio/',
  plugins: [react()],
  assetsInclude: ['**/*.png', '**/*.PNG', '**/*.mp4']
});
