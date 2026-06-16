import { describe, it, expect } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import IndexPage from '~/pages/index.vue'

describe('Index page', () => {
  it('renders hero h1 with name', async () => {
    const wrapper = await mountSuspended(IndexPage)
    const h1 = wrapper.find('h1')
    expect(h1.exists()).toBe(true)
    expect(h1.text()).toContain('Gareth Lau')
  })

  it('renders hero h2 with subtitle', async () => {
    const wrapper = await mountSuspended(IndexPage)
    const h2 = wrapper.find('h2')
    expect(h2.exists()).toBe(true)
    expect(h2.text()).toContain('Full stack developer')
  })

  it('renders Contact section', async () => {
    const wrapper = await mountSuspended(IndexPage)
    const section = wrapper.findAll('section')
    expect(section.length).toBeGreaterThan(0)
  })
})
