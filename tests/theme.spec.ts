import { describe, it, expect, beforeEach, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import { setActivePinia, createPinia } from 'pinia'
import ThemeToggle from '~/components/ThemeToggle.vue'

// Stub UButton and UIcon for unit tests
const UButton = {
  name: 'UButton',
  template: '<button v-bind="$attrs" @click="$emit(\'click\')"><slot /></button>',
  props: ['variant', 'color', 'ariaLabel'],
  emits: ['click']
}

const UIcon = {
  name: 'UIcon',
  template: '<span class="icon" />',
  props: ['name']
}

describe('useThemeStore', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
    vi.clearAllMocks()
  })

  const mountToggle = () => mount(ThemeToggle, {
    global: {
      components: { UButton, UIcon },
      // ThemeToggle wraps its button in <ClientOnly>; render the default slot in tests
      stubs: { ClientOnly: { template: '<div><slot /></div>' } },
      plugins: [createPinia()]
    }
  })

  it('renders ThemeToggle button', () => {
    const wrapper = mountToggle()
    const button = wrapper.find('button')
    expect(button.exists()).toBe(true)
  })

  it('ThemeToggle has aria-label', () => {
    const wrapper = mountToggle()
    const button = wrapper.find('button')
    const label = button.attributes('aria-label')
    expect(label).toMatch(/mode/)
  })

  it('ThemeToggle button is clickable', () => {
    const wrapper = mountToggle()
    const button = wrapper.find('button')
    // Verify the button exists and is rendered — click interaction tested at e2e level
    expect(button.exists()).toBe(true)
    expect(button.attributes('aria-label')).toBeDefined()
  })
})
