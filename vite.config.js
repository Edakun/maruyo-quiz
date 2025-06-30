import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
export default defineConfig({
    plugins: [react()],
    base: '/maruyo-quiz/', // GitHub Pages用に設定
    build: {
        outDir: 'dist',
        assetsDir: 'assets',
        emptyOutDir: true
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
    }
});
