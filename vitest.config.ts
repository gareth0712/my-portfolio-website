import { defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'node:path'

// Standalone vitest config — does NOT boot a Nuxt app at config time.
// Uses path aliases from .nuxt/tsconfig.json so that ~/... and #imports resolve.
const nuxtDir = resolve(__dirname, '.nuxt')
const appDir = resolve(__dirname, 'app')
const rootDir = resolve(__dirname)

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '~': appDir,
      '@': appDir,
      '~~': rootDir,
      '@@': rootDir,
      '#app': resolve(rootDir, 'node_modules/nuxt/dist/app'),
      '#imports': resolve(nuxtDir, 'imports.d.ts'),
      '#components': resolve(nuxtDir, 'components.d.ts'),
      '#ui': resolve(rootDir, 'node_modules/@nuxt/ui/dist/runtime'),
      '#vue-router': resolve(rootDir, 'node_modules/vue-router'),
    }
  },
  test: {
    environment: 'happy-dom',
    pool: 'vmForks',
    testTimeout: 30000,
    hookTimeout: 30000,
    setupFiles: ['./tests/setup.ts'],
    coverage: {
      provider: 'v8',
      include: ['app/**/*.{vue,ts}'],
      exclude: ['app/assets/**', '**/*.d.ts']
    }
  }
})
