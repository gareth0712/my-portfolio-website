import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import IndexPage from '~/pages/index.vue'

const CinematicGrainOverlay = { name: 'CinematicGrainOverlay', template: '<div class="grain-stub" />' }
const CinematicHeroOrbit = { name: 'CinematicHeroOrbit', template: '<section class="hero-orbit-stub"><h1>GAREN</h1></section>' }
const CinematicStatsStrip = { name: 'CinematicStatsStrip', template: '<section class="stats-strip-stub" />' }
const CinematicPillarsSection = { name: 'CinematicPillarsSection', template: '<section class="pillars-stub" />' }
const CinematicWorkSection = { name: 'CinematicWorkSection', template: '<section class="work-stub" />' }
const CinematicFinaleCta = { name: 'CinematicFinaleCta', template: '<section class="finale-stub" />' }

describe('Index page', () => {
  const mountIndex = () => mount(IndexPage, {
    global: {
      components: {
        CinematicGrainOverlay,
        CinematicHeroOrbit,
        CinematicStatsStrip,
        CinematicPillarsSection,
        CinematicWorkSection,
        CinematicFinaleCta
      },
      stubs: { ClientOnly: { template: '<div><slot /></div>' } }
    }
  })

  it('renders the cinematic main wrapper', () => {
    const wrapper = mountIndex()
    expect(wrapper.find('main.cinematic').exists()).toBe(true)
  })

  it('renders hero h1 with GAREN', () => {
    const wrapper = mountIndex()
    const h1 = wrapper.find('h1')
    expect(h1.exists()).toBe(true)
    expect(h1.text()).toContain('GAREN')
  })

  it('renders all cinematic sections', () => {
    const wrapper = mountIndex()
    expect(wrapper.find('.hero-orbit-stub').exists()).toBe(true)
    expect(wrapper.find('.stats-strip-stub').exists()).toBe(true)
    expect(wrapper.find('.pillars-stub').exists()).toBe(true)
    expect(wrapper.find('.work-stub').exists()).toBe(true)
    expect(wrapper.find('.finale-stub').exists()).toBe(true)
  })
})
