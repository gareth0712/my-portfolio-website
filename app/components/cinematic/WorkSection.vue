<script setup lang="ts">
import { gsap } from 'gsap'

interface Project {
  title: string
  description: string
}

const projects: Project[] = [
  { title: 'Algo Trading Bot', description: 'Automated crypto strategies that trade while I sleep.' },
  { title: 'Realtime Chat App', description: 'Sub-100ms messaging with presence, typing, and zero dropped sockets.' },
  { title: 'Onchain Explorer', description: 'Blockchain data, finally readable by humans.' }
]

const sectionRef = ref<HTMLElement | null>(null)
const headingRef = ref<HTMLElement | null>(null)
const cardRefs = ref<HTMLElement[]>([])
const videoFailed = ref(false)

function setCardRef(el: Element | null, index: number): void {
  if (el instanceof HTMLElement) cardRefs.value[index] = el
}

function onVideoError(): void {
  videoFailed.value = true
}

function onCardMove(event: MouseEvent, el: HTMLElement): void {
  const rect = el.getBoundingClientRect()
  const x = event.clientX - rect.left
  const y = event.clientY - rect.top
  const rotateX = ((y / rect.height) - 0.5) * -10
  const rotateY = ((x / rect.width) - 0.5) * 10
  gsap.to(el, { rotateX, rotateY, duration: 0.4, ease: 'power2.out', transformPerspective: 800 })
}

function onCardLeave(el: HTMLElement): void {
  gsap.to(el, { rotateX: 0, rotateY: 0, duration: 0.5, ease: 'power2.out' })
}

let ctx: gsap.Context | undefined

onMounted(() => {
  const reducedMotion = usePrefersReducedMotion()

  ctx = gsap.context(() => {
    if (reducedMotion) {
      gsap.set([headingRef.value, ...cardRefs.value], { opacity: 1, y: 0 })
      return
    }

    gsap.from(headingRef.value, {
      opacity: 0,
      y: 30,
      scrollTrigger: {
        trigger: sectionRef.value,
        start: 'top 70%'
      }
    })

    gsap.from(cardRefs.value, {
      opacity: 0,
      y: 60,
      stagger: 0.15,
      duration: 0.8,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: sectionRef.value,
        start: 'top 60%'
      }
    })
  }, sectionRef.value ?? undefined)
})

onUnmounted(() => {
  ctx?.revert()
})
</script>

<template>
  <section ref="sectionRef" class="work-section relative w-full overflow-hidden px-6 py-32">
    <video
      v-if="!videoFailed"
      class="absolute inset-0 h-full w-full object-cover"
      src="/video/closer.mp4"
      autoplay
      muted
      loop
      playsinline
      @error="onVideoError"
    />
    <div v-else class="work-fallback absolute inset-0 h-full w-full" />
    <div class="absolute inset-0 bg-[var(--ink)]/85" />

    <div class="relative z-10 mx-auto max-w-6xl">
      <h2 ref="headingRef" class="font-display text-center text-4xl text-[var(--cream)] md:text-6xl">
        SELECTED WORK
      </h2>

      <div class="mt-16 grid gap-8 md:grid-cols-3">
        <div
          v-for="(project, i) in projects"
          :key="project.title"
          :ref="(el) => setCardRef(el as Element | null, i)"
          class="work-card group rounded-xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-[border-color,box-shadow] duration-300 hover:border-[var(--emerald)] hover:shadow-[0_0_40px_rgba(16,185,129,0.25)]"
          @mousemove="(e) => onCardMove(e, cardRefs[i])"
          @mouseleave="() => onCardLeave(cardRefs[i])"
        >
          <div class="work-card-image h-40 w-full rounded-lg bg-gradient-to-br from-white/10 to-transparent transition-transform duration-500 group-hover:scale-105" />
          <h3 class="font-display mt-6 text-2xl text-[var(--cream)] md:text-3xl">{{ project.title }}</h3>
          <p class="mt-3 text-sm text-[var(--cream-dim)] md:text-base">{{ project.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.work-fallback {
  background: radial-gradient(circle at 70% 40%, rgba(16, 185, 129, 0.2), transparent 55%),
    linear-gradient(200deg, #07080a 0%, #0d1a16 55%, #07080a 100%);
}

.work-card {
  transform-style: preserve-3d;
  will-change: transform;
}
</style>
