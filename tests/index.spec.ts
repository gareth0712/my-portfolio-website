import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import IndexPage from '~/pages/index.vue'

const Contact = { name: 'Contact', template: '<div class="contact-stub" />' }
const AboutSection = { name: 'AboutSection', template: '<section class="about-stub" />' }

describe('Index page', () => {
  const mountIndex = () => mount(IndexPage, {
    global: {
      components: { Contact, AboutSection }
    }
  })

  it('renders hero h1 with name', () => {
    const wrapper = mountIndex()
    const h1 = wrapper.find('h1')
    expect(h1.exists()).toBe(true)
    expect(h1.text()).toContain('Gareth Lau')
  })

  it('renders hero h2 with subtitle', () => {
    const wrapper = mountIndex()
    const h2 = wrapper.find('h2')
    expect(h2.exists()).toBe(true)
    expect(h2.text()).toContain('Full stack developer')
  })

  it('renders Contact section', () => {
    const wrapper = mountIndex()
    const section = wrapper.findAll('section')
    expect(section.length).toBeGreaterThan(0)
  })
})
