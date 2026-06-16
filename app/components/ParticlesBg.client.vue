<script setup lang="ts">
import { ref } from 'vue'
import { loadSlim } from '@tsparticles/slim'
import { tsParticles } from '@tsparticles/engine'
import type { Container, ISourceOptions } from '@tsparticles/engine'

// Initialise tsparticles engine once per app lifecycle
let initialised = false
async function initParticles(): Promise<void> {
  if (initialised) return
  initialised = true
  await loadSlim(tsParticles)
  await tsParticles.init()
}

const particlesRef = ref<HTMLDivElement | null>(null)
let container: Container | undefined

async function mountParticles(): Promise<void> {
  await initParticles()
  const el = particlesRef.value
  if (!el) return
  if (container) {
    container.destroy()
    container = undefined
  }
  container = await tsParticles.load({ id: 'tsparticles', element: el, options: particleOptions })
}

onMounted(() => {
  void mountParticles()
})

onUnmounted(() => {
  container?.destroy()
  container = undefined
})

const particleOptions: ISourceOptions = {
  fullScreen: { enable: false },
  background: {
    image: "url('/background_cosmic_darkorchid.jpg')",
    size: 'cover',
    position: 'center'
  },
  fpsLimit: 60,
  interactivity: {
    events: {
      onHover: { enable: true, mode: 'repulse' }
    },
    modes: {
      repulse: { distance: 100, duration: 0.4 }
    }
  },
  particles: {
    color: { value: '#ffffff' },
    links: { color: '#ffffff', distance: 150, enable: true, opacity: 0.5, width: 1 },
    move: {
      direction: 'none',
      enable: true,
      outModes: { default: 'bounce' },
      random: false,
      speed: 1.5,
      straight: false
    },
    number: { density: { enable: true, width: 800, height: 800 }, value: 80 },
    opacity: { value: 0.5 },
    shape: { type: 'circle' },
    size: { value: { min: 1, max: 3 } }
  },
  detectRetina: false
}
</script>

<template>
  <div
    id="tsparticles"
    ref="particlesRef"
    class="fixed inset-0 z-0"
  />
</template>
