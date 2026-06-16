// Type shim for packages without bundled declarations
// @tsparticles/vue3 main entry does not ship a .d.ts; the engine and slim
// packages ship proper types, so we declare the vue3 wrapper here.
declare module '@tsparticles/vue3' {
  import type { App } from 'vue'
  const install: (app: App, options?: { init?: (engine: unknown) => Promise<void> | void }) => void
  export default install
}
