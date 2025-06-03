import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Vite設定
export default defineConfig({
  plugins: [react()],
  // アセットのベースパスを設定
  base: './',
  // ビルド設定
  build: {
    // バンドルサイズを最適化
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true
      }
    }
  }
})
