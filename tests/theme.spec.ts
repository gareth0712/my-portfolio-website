import { describe, it, expect, beforeEach, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import { setActivePinia, createPinia } from 'pinia'

import ThemeToggle from '~/components/ThemeToggle.vue'

// Mock the theme store to bypass useColorMode() Nuxt auto-import dependency
vi.mock('~/stores/theme', () => ({
  useThemeStore: () => ({
    isDark: false,
    toggle: vi.fn()
  })
}))

const UButton = {
  name: 'UButton',
  template: '<button v-bind="$attrs" @click="$emit(\'click\')"><slot /></button>',
  props: ['variant', 'color'],
  emits: ['click']
}

const UIcon = {
  name: 'UIcon',
  template: '<span class="icon" />',
  props: ['name']
}

describe('ThemeToggle', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  const mountToggle = () => mount(ThemeToggle, {
    global: {
      components: { UButton, UIcon },
      stubs: { ClientOnly: { template: '<div><slot /></div>' } },
      plugins: [createPinia()]
    }
  })

  it('renders ThemeToggle button', () => {
    const wrapper = mountToggle()
    const button = wrapper.find('button')
    expect(button.exists()).toBe(true)
  })

  it('ThemeToggle has aria-label containing "mode"', () => {
    const wrapper = mountToggle()
    const button = wrapper.find('button')
    const label = button.attributes('aria-label')
    expect(label).toMatch(/mode/)
  })

  it('ThemeToggle button aria-label is defined', () => {
    const wrapper = mountToggle()
    const button = wrapper.find('button')
    expect(button.exists()).toBe(true)
    expect(button.attributes('aria-label')).toBeDefined()
  })
})
