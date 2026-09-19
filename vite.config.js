import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    babel({ presets: [reactCompilerPreset()] }),
  ],
  build: {
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('/node_modules/gsap/')) return 'animation'
          if (id.includes('/node_modules/lucide-react/')) return 'icons'
          if (id.includes('/node_modules/react/') || id.includes('/node_modules/react-dom/')) return 'react'
          return undefined
        },
      },
    },
  },
})
