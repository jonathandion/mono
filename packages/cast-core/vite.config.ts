import { resolve } from 'path'
import { defineConfig } from 'vite'

// eslint-disable-next-line import/no-default-export
export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      fileName: 'cast',
    },
    rollupOptions: {
      output: [{
        format: 'esm',
      }, {
        format: 'cjs',
      }, {
        format: 'umd',
        name: 'cast',
      }],
    },
  },
})
