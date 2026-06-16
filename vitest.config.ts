import { defineVitestConfig } from '@nuxt/test-utils/config'

export default defineVitestConfig({
  test: {
    environment: 'nuxt',
    environmentOptions: {
      nuxt: {
        domEnvironment: 'happy-dom'
      }
    },
    testTimeout: 120000,
    hookTimeout: 120000,
    // Nuxt environment requires a non-VM pool (vmForks/vmThreads are unsupported)
    pool: 'forks',
    setupFiles: ['./tests/setup.ts'],
    coverage: {
      provider: 'v8',
      include: ['app/**/*.{vue,ts}'],
      exclude: ['app/assets/**', '**/*.d.ts']
    }
  }
})
