import { describe, it, expect, vi, afterEach } from 'vitest'
import { mount } from '@vue/test-utils'
import Contact from '~/components/Contact.vue'

// Stub UButton and UIcon for unit tests
const UButton = {
  name: 'UButton',
  template: '<button v-bind="$attrs" @click="$emit(\'click\')"><slot /></button>',
  props: ['variant', 'size', 'color', 'ariaLabel'],
  emits: ['click']
}

const UIcon = {
  name: 'UIcon',
  template: '<span class="icon" />',
  props: ['name']
}

describe('Contact', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  const mountContact = () => mount(Contact, {
    global: {
      components: { UButton, UIcon }
    }
  })

  it('renders 3 buttons', () => {
    const wrapper = mountContact()
    const buttons = wrapper.findAll('button')
    expect(buttons.length).toBe(3)
  })

  it('has Instagram aria-label', () => {
    const wrapper = mountContact()
    const buttons = wrapper.findAll('button')
    expect(buttons[0]?.attributes('aria-label')).toBe('Instagram')
  })

  it('has LinkedIn aria-label', () => {
    const wrapper = mountContact()
    const buttons = wrapper.findAll('button')
    expect(buttons[1]?.attributes('aria-label')).toBe('LinkedIn')
  })

  it('has Email aria-label', () => {
    const wrapper = mountContact()
    const buttons = wrapper.findAll('button')
    expect(buttons[2]?.attributes('aria-label')).toBe('Email')
  })

  it('opens instagram with _blank target', async () => {
    const mockOpen = vi.spyOn(window, 'open').mockImplementation(() => null)
    const wrapper = mountContact()
    await wrapper.findAll('button')[0]?.trigger('click')
    expect(mockOpen).toHaveBeenCalledWith(
      'https://www.instagram.com/garetpark/',
      '_blank'
    )
  })

  it('opens linkedin with _blank target', async () => {
    const mockOpen = vi.spyOn(window, 'open').mockImplementation(() => null)
    const wrapper = mountContact()
    await wrapper.findAll('button')[1]?.trigger('click')
    expect(mockOpen).toHaveBeenCalledWith(
      'https://www.linkedin.com/in/gareth-lau-8b091b9b/',
      '_blank'
    )
  })

  it('opens email with _parent target', async () => {
    const mockOpen = vi.spyOn(window, 'open').mockImplementation(() => null)
    const wrapper = mountContact()
    await wrapper.findAll('button')[2]?.trigger('click')
    expect(mockOpen).toHaveBeenCalledWith(
      'mailto:gareth07120712@gmail.com',
      '_parent'
    )
  })
})
