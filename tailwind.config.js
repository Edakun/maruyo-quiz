/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // 丸洋建設のテーマカラー（仮定）
        'primary': {
          '50': '#f0f7ff',
          '100': '#e0effe',
          '200': '#bae0fd',
          '300': '#7ac9fb',
          '400': '#36aff6',
          '500': '#0c94e0',
          '600': '#0076bf',
          '700': '#005e9b',
          '800': '#024f80',
          '900': '#06426b',
        },
        'secondary': {
          '50': '#fff9eb',
          '100': '#ffefc6',
          '200': '#ffdb86',
          '300': '#ffc046',
          '400': '#ffa51b',
          '500': '#ff8800',
          '600': '#e26200',
          '700': '#bc4400',
          '800': '#983600',
          '900': '#7c2e00',
        },
      },
      fontFamily: {
        'sans': ['"Noto Sans JP"', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-in-right': 'slideInRight 0.5s ease-out',
        'slide-out-left': 'slideOutLeft 0.5s ease-in',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        slideOutLeft: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
    },
  },
  plugins: [
    require('tailwindcss/nesting')
  ],
}
