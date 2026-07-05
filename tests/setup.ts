// Shim Nuxt compiler macro for standalone vitest (no Nuxt runtime):
// definePageMeta is a no-op outside the Nuxt app context
;(globalThis as Record<string, unknown>).definePageMeta = () => {}

// Mock localStorage for color-mode plugin compatibility
// happy-dom provides window.localStorage but setItem may not be callable
const localStorageStore: Record<string, string | undefined> = {}
const localStorageMock: Storage = {
  getItem: (key: string) => localStorageStore[key] ?? null,
  setItem: (key: string, value: string) => { localStorageStore[key] = value },
  removeItem: (key: string) => { localStorageStore[key] = undefined },
  clear: () => {
    const keys = Object.keys(localStorageStore)
    for (const k of keys) {
      localStorageStore[k] = undefined
    }
  },
  get length() { return Object.keys(localStorageStore).filter(k => localStorageStore[k] !== undefined).length },
  key: (i: number) => Object.keys(localStorageStore).filter(k => localStorageStore[k] !== undefined)[i] ?? null
}

Object.defineProperty(globalThis, 'localStorage', {
  value: localStorageMock,
  writable: true,
  configurable: true
})

// Ensure window.open is spyable
if (typeof window !== 'undefined' && !window.open) {
  window.open = () => null
}

// Ensure window.location.pathname exists for nuxt-root.vue
if (typeof window !== 'undefined' && (!window.location || window.location.pathname === undefined)) {
  Object.defineProperty(window, 'location', {
    value: {
      pathname: '/',
      href: 'http://localhost/',
      search: '',
      hash: '',
      origin: 'http://localhost',
      hostname: 'localhost',
      port: '',
      protocol: 'http:',
      assign: () => {},
      replace: () => {},
      reload: () => {}
    },
    writable: true,
    configurable: true
  })
}
