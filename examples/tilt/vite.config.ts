import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// eslint-disable-next-line import/no-default-export
export default defineConfig({
  plugins: [react()],
})
