import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Vite設定
export default defineConfig({
  plugins: [react()],
  // アセットのベースパスを設定
  base: '/maruyo-quiz/',
  // ビルド設定
  build: {
    // ビルド関連の設定をここに追加可能
  }
})
