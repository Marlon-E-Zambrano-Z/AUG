import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css:{
    modules:{
      generateScopedName: "[name]__[local]__[hash:base64:5]"
    },
    preprocessorOptions:{
      less: {
        javascriptEnabled : true
      }
    }
  },
  server:{
    proxy: {
      '/api/v1': {
        target: 'http://localhost:3308',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api\/v1/, '')
      },
      '/api/v2': {
        target: 'http://localhost:3308',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api\/v2/, '')
      },
      '/auth': {
        target: 'http://localhost:3308',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/auth/, '')
      }
    }
  }
})
