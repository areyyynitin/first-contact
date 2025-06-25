import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { useOptimistic } from 'react'

// https://vite.dev/config/
export default defineConfig({
  server:{
    watch:{
      usePolling:true
    }
  },
  plugins: [react()],
})
