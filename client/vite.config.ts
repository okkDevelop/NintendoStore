import { defineConfig } from 'vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'
import mkcert from 'vite-plugin-mkcert'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
    server: {
        port: 3000,
    },
    plugins: [
        react(),
        mkcert(),
        tailwindcss(),
        babel({ presets: [reactCompilerPreset()] })
    ]
})
