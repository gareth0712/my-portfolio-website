export function usePrefersReducedMotion(): boolean {
  if (import.meta.server) return false
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}
