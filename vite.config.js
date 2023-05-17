import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv'

// https://vitejs.dev/config/
export default defineConfig(({mode})=>{
  dotenv.config({ path: `,e.env.${mode}` })
  return {
    plugins: [react()],
  }
})
