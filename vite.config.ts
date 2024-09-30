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
    proxy:{
      '/api':{
        target:'http://localhost:3008',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, '')
      }
    }
  }
})
