import { defineStore } from 'pinia'
import { computed } from 'vue'

export const useThemeStore = defineStore('theme', () => {
  const colorMode = useColorMode()

  const isDark = computed<boolean>(() => colorMode.value === 'dark')

  function toggle(): void {
    colorMode.preference = isDark.value ? 'light' : 'dark'
  }

  return { isDark, toggle }
})
