import * as path from 'path';

import browserslistToEsbuild from 'browserslist-to-esbuild';
import Unfonts from 'unplugin-fonts/vite';
import { defineConfig } from 'vite';
import viteCompression from 'vite-plugin-compression';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import svgr from 'vite-plugin-svgr';

import react from '@vitejs/plugin-react';

export default defineConfig({
  server: {
    port: 3000,
  },
  plugins: [
    react(),
    svgr(),
    ViteImageOptimizer(),
    viteCompression({
      filter: /\.(js|css|html|svg)$/,
    }),
    Unfonts({
      custom: {
        families: [
          {
            name: 'Roboto Regular',
            local: 'Roboto-regular',
            src: './src/shared/assets/fonts/Regular/Roboto-Regular.woff2',
          },
          {
            name: 'Roboto Medium',
            local: 'Roboto-medium',
            src: './src/shared/assets/fonts/Medium/Roboto-Medium.woff2',
          },
          {
            name: 'Roboto Bold',
            local: 'Roboto-bold',
            src: './src/shared/assets/fonts/Bold/Roboto-Bold.woff2',
          },
        ],
      },
    }),
  ],
  base: '/doda/',
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
  },
  build: {
    target: browserslistToEsbuild(),
    sourcemap: 'hidden',
    manifest: true,
    outDir: 'dist',
    cssCodeSplit: true,
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      input: './index.html',
      output: {
        chunkFileNames: 'assets/js/chunk-[name].[hash].js',
        entryFileNames: 'assets/js/entry-[name].[hash].js',
        assetFileNames: 'assets/[ext]/[name]-[hash].[ext]',
        manualChunks: (id: string | string[]) => {
          if (!id.includes('node_modules')) return;
          if (id.includes('xlsx')) return;
          if (id.includes('react')) return 'vendor_react';

          return 'vendor';
        },
      },
      onLog(level, log, handler) {
        if (log.cause) {
          const message = (log.cause as { message: string }).message;
          if (message === `Can't resolve original location of error.`) return;
        }
        handler(level, log);
      },
    },
  },
  optimizeDeps: {
    esbuildOptions: {
      define: {
        global: 'globalThis',
      },
    },
  },
});
