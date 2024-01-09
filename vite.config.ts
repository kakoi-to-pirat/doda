import * as path from 'path';

import { defineConfig } from 'vite';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import svgr from 'vite-plugin-svgr';

import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react(), svgr(), ViteImageOptimizer()],
  base: '/doda/',
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
  },
});
