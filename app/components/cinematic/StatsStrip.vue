<script setup lang="ts">
import { gsap } from 'gsap'

interface Stat {
  value: number
  suffix: string
  label: string
}

const stats: Stat[] = [
  { value: 6, suffix: '+', label: 'Years Shipping' },
  { value: 42, suffix: '', label: 'Projects Delivered' },
  { value: 15, suffix: '', label: 'Happy Clients' },
  { value: 120, suffix: 'K+', label: 'Lines of Code' }
]

const sectionRef = ref<HTMLElement | null>(null)
const numberRefs = ref<HTMLElement[]>([])
const displayValues = ref(stats.map(() => 0))

function setNumberRef(el: Element | null, index: number): void {
  if (el instanceof HTMLElement) numberRefs.value[index] = el
}

let ctx: gsap.Context | undefined

onMounted(() => {
  const reducedMotion = usePrefersReducedMotion()

  if (reducedMotion) {
    displayValues.value = stats.map(s => s.value)
    return
  }

  ctx = gsap.context(() => {
    stats.forEach((stat, i) => {
      const counter = { value: 0 }
      gsap.to(counter, {
        value: stat.value,
        duration: 1.6,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: sectionRef.value,
          start: 'top 75%',
          once: true
        },
        onUpdate: () => {
          displayValues.value[i] = Math.round(counter.value)
        }
      })
    })
  }, sectionRef.value ?? undefined)
})

onUnmounted(() => {
  ctx?.revert()
})
</script>

<template>
  <section ref="sectionRef" class="stats-strip relative w-full px-6 py-24 md:py-32">
    <div class="mx-auto grid max-w-6xl grid-cols-2 gap-10 md:grid-cols-4">
      <div v-for="(stat, i) in stats" :key="stat.label" class="text-center">
        <p :ref="(el) => setNumberRef(el as Element | null, i)" class="font-display text-5xl text-[var(--cream)] md:text-7xl">
          {{ displayValues[i] }}{{ stat.suffix }}
        </p>
        <p class="mt-3 text-sm uppercase tracking-widest text-[var(--cream-dim)] md:text-base">
          {{ stat.label }}
        </p>
      </div>
    </div>
  </section>
</template>
