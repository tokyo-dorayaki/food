import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig, loadEnv} from 'vite';

export default defineConfig(({mode}) => {
  const env = loadEnv(mode, '.', '');
  return {
    plugins: [react(), tailwindcss()],
    base: './',
    build: {
      rollupOptions: {
        output: {
          entryFileNames: `script.js`,
          chunkFileNames: `[name].js`,
          assetFileNames: (assetInfo) => {
            const info = assetInfo.name?.split('.');
            const ext = info ? info[info.length - 1] : '';
            if (ext === 'css') return 'style.css';
            if (['png', 'jpg', 'jpeg', 'gif', 'svg', 'webp'].includes(ext.toLowerCase())) {
              return 'images/[name][extname]';
            }
            if (['mp4', 'webm', 'ogg'].includes(ext.toLowerCase())) {
              return 'video/[name][extname]';
            }
            return '[name][extname]';
          },
        },
      },
    },
    define: {
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
