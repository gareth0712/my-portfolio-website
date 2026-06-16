<script setup lang="ts">
import { useThemeStore } from '~/stores/theme'

const theme = useThemeStore()
</script>

<template>
  <ClientOnly>
    <UButton
      variant="ghost"
      color="neutral"
      :aria-label="theme.isDark ? 'Switch to light mode' : 'Switch to dark mode'"
      @click="theme.toggle()"
    >
      <UIcon
        :name="theme.isDark ? 'i-mdi-weather-sunny' : 'i-mdi-weather-night'"
        class="text-2xl text-gray-900 dark:text-white"
      />
    </UButton>
    <template #fallback>
      <div class="w-8 h-8" />
    </template>
  </ClientOnly>
</template>
