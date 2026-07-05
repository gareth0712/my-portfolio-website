<script setup lang="ts">
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

interface FrameManifest {
  count: number
  width: number
  height: number
}

const NAME = 'GAREN'

const sectionRef = ref<HTMLElement | null>(null)
const canvasRef = ref<HTMLCanvasElement | null>(null)
const subtitleRef = ref<HTMLElement | null>(null)

const isLoading = ref(true)
const loadProgress = ref(0)
const reducedMotion = usePrefersReducedMotion()

const letters = NAME.split('')
const letterRefs = ref<HTMLElement[]>([])

function setLetterRef(el: Element | null, index: number): void {
  if (el instanceof HTMLElement) letterRefs.value[index] = el
}

let ctx: gsap.Context | undefined
const images: HTMLImageElement[] = []
let manifest: FrameManifest | null = null
let currentFrame = 0
let targetFrame = 0
let rafId = 0

function drawFrame(index: number): void {
  const canvas = canvasRef.value
  const img = images[Math.round(index)]
  if (!canvas || !img || !img.complete) return
  const ctx2d = canvas.getContext('2d')
  if (!ctx2d) return

  const canvasRatio = canvas.width / canvas.height
  const imgRatio = img.width / img.height
  let drawWidth = canvas.width
  let drawHeight = canvas.height
  let offsetX = 0
  let offsetY = 0

  if (imgRatio > canvasRatio) {
    drawHeight = canvas.height
    drawWidth = drawHeight * imgRatio
    offsetX = (canvas.width - drawWidth) / 2
  } else {
    drawWidth = canvas.width
    drawHeight = drawWidth / imgRatio
    offsetY = (canvas.height - drawHeight) / 2
  }

  ctx2d.clearRect(0, 0, canvas.width, canvas.height)
  ctx2d.drawImage(img, offsetX, offsetY, drawWidth, drawHeight)
}

function resizeCanvas(): void {
  const canvas = canvasRef.value
  if (!canvas) return
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight
  drawFrame(currentFrame)
}

function tick(): void {
  currentFrame += (targetFrame - currentFrame) * 0.12
  drawFrame(currentFrame)
  rafId = requestAnimationFrame(tick)
}

async function loadFrames(): Promise<void> {
  const res = await fetch('/frames/hero/manifest.json')
  manifest = await res.json() as FrameManifest

  const first = new Image()
  first.src = `/frames/hero/frame_0001.webp`
  await new Promise<void>((resolve) => {
    first.onload = () => resolve()
    first.onerror = () => resolve()
  })
  images[0] = first
  isLoading.value = false
  drawFrame(0)

  let loaded = 1
  const total = manifest.count
  const rest = Array.from({ length: total - 1 }, (_, i) => i + 2)

  await Promise.all(rest.map((frameNumber) => {
    return new Promise<void>((resolve) => {
      const img = new Image()
      const padded = String(frameNumber).padStart(4, '0')
      img.src = `/frames/hero/frame_${padded}.webp`
      const onDone = (): void => {
        loaded += 1
        loadProgress.value = loaded / total
        resolve()
      }
      img.onload = onDone
      img.onerror = onDone
      images[frameNumber - 1] = img
    })
  }))
}

onMounted(async () => {
  resizeCanvas()
  window.addEventListener('resize', resizeCanvas)

  await loadFrames()

  if (reducedMotion) {
    targetFrame = (manifest?.count ?? 1) - 1
    currentFrame = targetFrame
    drawFrame(currentFrame)
    return
  }

  rafId = requestAnimationFrame(tick)

  ctx = gsap.context(() => {
    const frameCount = manifest?.count ?? 1

    ScrollTrigger.create({
      trigger: sectionRef.value,
      start: 'top top',
      end: '+=400%',
      pin: true,
      scrub: true,
      onUpdate: (self) => {
        targetFrame = self.progress * (frameCount - 1)
      }
    })

    letterRefs.value.forEach((el, i) => {
      gsap.fromTo(el,
        { yPercent: 120, letterSpacing: '-0.02em', opacity: 0 },
        {
          yPercent: 0,
          letterSpacing: '0em',
          opacity: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.value,
            start: 'top top',
            end: '+=140%',
            scrub: true
          },
          delay: i * 0.02
        }
      )
    })

    gsap.fromTo(subtitleRef.value,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: sectionRef.value,
          start: '20% top',
          end: '45% top',
          scrub: true
        }
      }
    )
  }, sectionRef.value ?? undefined)
})

onUnmounted(() => {
  window.removeEventListener('resize', resizeCanvas)
  cancelAnimationFrame(rafId)
  ctx?.revert()
})
</script>

<template>
  <section ref="sectionRef" class="hero-orbit relative h-screen w-full overflow-hidden">
    <canvas ref="canvasRef" class="absolute inset-0 h-full w-full" />

    <div v-if="isLoading" class="absolute inset-x-0 bottom-0 h-[2px] bg-white/10">
      <div
        class="h-full bg-[var(--emerald)] transition-[width] duration-150 ease-out"
        :style="{ width: `${loadProgress * 100}%` }"
      />
    </div>

    <div class="relative z-10 flex h-full w-full flex-col items-center justify-center px-4 text-center">
      <h1 class="hero-orbit-name font-display flex select-none" aria-label="GAREN">
        <span
          v-for="(letter, i) in letters"
          :key="i"
          :ref="(el) => setLetterRef(el as Element | null, i)"
          class="inline-block"
          :class="{ 'text-[var(--emerald-bright)]': i === letters.length - 1 }"
        >{{ letter }}</span>
      </h1>
      <p ref="subtitleRef" class="mt-6 max-w-xl text-lg text-[var(--cream-dim)] md:text-xl">
        Full-stack developer crafting cinematic web experiences.
      </p>
      <div class="scroll-cue mt-12 h-16 w-px bg-[var(--cream-dim)]" />
    </div>
  </section>
</template>

<style scoped>
/* Override the global `body canvas { position: fixed }` rule (main.css, for
   the tsparticles background) so this canvas stays local to the pinned section. */
.hero-orbit canvas {
  position: absolute !important;
  inset: 0 !important;
  width: 100% !important;
  height: 100% !important;
  z-index: auto !important;
}

.hero-orbit-name {
  font-size: clamp(6rem, 22vw, 22rem);
  line-height: 0.85;
  letter-spacing: -0.02em;
}

.scroll-cue {
  animation: scroll-cue-pulse 2s ease-in-out infinite;
  transform-origin: top;
}

@keyframes scroll-cue-pulse {
  0%, 100% {
    transform: scaleY(0.4);
    opacity: 0.3;
  }
  50% {
    transform: scaleY(1);
    opacity: 0.8;
  }
}
</style>
