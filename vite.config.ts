import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
    plugins: [react(), tsconfigPaths({ root: '.' })],
    resolve: {
        alias: {
            src: path.resolve(__dirname, './src'),
        },
    },
});
