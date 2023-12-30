import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import Unfonts from 'unplugin-fonts/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    Unfonts({
      custom: {
        families: [
          {
            name: 'Poppins',
            local: 'Poppins-Regular',
            src: './src/assets/fonts/Poppins/400/*.{ttf,woff,woff2}',
            transform(font) {
              if (font.basename === 'Poppins-Regular') {
                font.weight = 400
              }
              return font
            }
          },
          {
            name: 'Poppins',
            local: 'Poppins-Medium',
            src: './src/assets/fonts/Poppins/500/*.{ttf,woff,woff2}',
            transform(font) {
              if (font.basename === 'Poppins-Medium') {
                font.weight = 500
              }
              return font
            }
          },
          {
            name: 'Poppins',
            local: 'Poppins-SemiBold',
            src: './src/assets/fonts/Poppins/600/*.{ttf,woff,woff2}',
            transform(font) {
              if (font.basename === 'Poppins-SemiBold') {
                font.weight = 600
              }
              return font
            }
          }
        ],
        display: 'swap',
        preload: true,
        prefetch: false,
        injectTo: 'head-prepend'
      }
    })
  ]
})
