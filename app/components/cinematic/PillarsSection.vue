<script setup lang="ts">
import { gsap } from 'gsap'

interface Pillar {
  index: string
  title: string
  description: string
}

const pillars: Pillar[] = [
  { index: '01', title: 'Web Engineering', description: 'Fast, resilient products from database to pixel.' },
  { index: '02', title: 'Web3 & Blockchain', description: 'Smart contracts and onchain apps that hold up under mainnet.' },
  { index: '03', title: 'AI Automation', description: 'Agents and pipelines that do the boring work for you.' }
]

const sectionRef = ref<HTMLElement | null>(null)
const videoRef = ref<HTMLVideoElement | null>(null)
const pillarRefs = ref<HTMLElement[]>([])
const videoFailed = ref(false)

function setPillarRef(el: Element | null, index: number): void {
  if (el instanceof HTMLElement) pillarRefs.value[index] = el
}

function onVideoError(): void {
  videoFailed.value = true
}

let ctx: gsap.Context | undefined

onMounted(() => {
  const reducedMotion = usePrefersReducedMotion()

  if (reducedMotion) {
    pillarRefs.value.forEach((el) => {
      gsap.set(el, { opacity: 1, y: 0 })
    })
    return
  }

  ctx = gsap.context(() => {
    gsap.set(pillarRefs.value.slice(1), { opacity: 0, y: 40 })

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.value,
        start: 'top top',
        end: '+=300%',
        pin: true,
        scrub: true
      }
    })

    pillars.forEach((_, i) => {
      if (i > 0) {
        timeline.to(pillarRefs.value[i - 1], { opacity: 0.15, y: -40, duration: 0.3 })
        timeline.to(pillarRefs.value[i], { opacity: 1, y: 0, duration: 0.3 }, '<')
      }
    })
  }, sectionRef.value ?? undefined)
})

onUnmounted(() => {
  ctx?.revert()
})
</script>

<template>
  <section ref="sectionRef" class="pillars-section relative h-screen w-full overflow-hidden">
    <video
      v-if="!videoFailed"
      ref="videoRef"
      class="absolute inset-0 h-full w-full object-cover"
      src="/video/builder.mp4"
      autoplay
      muted
      loop
      playsinline
      @error="onVideoError"
    />
    <div v-else class="pillars-fallback absolute inset-0 h-full w-full" />
    <div class="absolute inset-0 bg-gradient-to-b from-[var(--ink)]/80 via-[var(--ink)]/60 to-[var(--ink)]/90" />

    <div class="relative z-10 flex h-full w-full items-center justify-center px-6">
      <div class="relative h-80 w-full max-w-3xl md:h-96">
        <div
          v-for="(pillar, i) in pillars"
          :key="pillar.index"
          :ref="(el) => setPillarRef(el as Element | null, i)"
          class="pillar-item absolute inset-0 flex flex-col items-center justify-center text-center"
        >
          <span class="font-display text-lg text-[var(--emerald-bright)] md:text-2xl">{{ pillar.index }}</span>
          <h3 class="font-display mt-2 text-4xl text-[var(--cream)] md:text-6xl">{{ pillar.title }}</h3>
          <p class="mt-4 max-w-lg text-base text-[var(--cream-dim)] md:text-lg">{{ pillar.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.pillars-fallback {
  background: radial-gradient(circle at 30% 30%, rgba(16, 185, 129, 0.25), transparent 60%),
    linear-gradient(160deg, #07080a 0%, #0b1512 60%, #07080a 100%);
}
</style>
