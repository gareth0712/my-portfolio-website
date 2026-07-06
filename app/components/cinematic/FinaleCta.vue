<script setup lang="ts">
import { gsap } from 'gsap'

interface SocialLink {
  label: string
  href: string
}

const socials: SocialLink[] = [
  { label: 'GitHub', href: 'https://github.com/gareth0712' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/gareth-lau-8b091b9b/' },
  { label: 'X', href: 'https://x.com/' },
  { label: 'Email', href: 'mailto:gareth07120712@gmail.com' }
]

const HEADLINE = 'LET\'S BUILD SOMETHING UNREAL.'
const words = HEADLINE.split(' ')

const sectionRef = ref<HTMLElement | null>(null)
const wordRefs = ref<HTMLElement[]>([])

function setWordRef(el: Element | null, index: number): void {
  if (el instanceof HTMLElement) wordRefs.value[index] = el
}

let ctx: gsap.Context | undefined

onMounted(() => {
  const reducedMotion = usePrefersReducedMotion()

  if (reducedMotion) {
    gsap.set(wordRefs.value, { opacity: 1, y: 0 })
    return
  }

  ctx = gsap.context(() => {
    gsap.from(wordRefs.value, {
      opacity: 0,
      y: 40,
      stagger: 0.08,
      duration: 0.7,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: sectionRef.value,
        start: 'top 65%'
      }
    })
  }, sectionRef.value ?? undefined)
})

onUnmounted(() => {
  ctx?.revert()
})
</script>

<template>
  <section ref="sectionRef" class="finale-cta relative w-full px-6 py-32 text-center">
    <h2 class="font-display mx-auto flex max-w-4xl flex-wrap items-center justify-center gap-x-4 text-4xl text-[var(--cream)] md:text-6xl">
      <span
        v-for="(word, i) in words"
        :key="i"
        :ref="(el) => setWordRef(el as Element | null, i)"
        class="inline-block"
      >{{ word }}</span>
    </h2>

    <div class="mt-12 flex flex-wrap items-center justify-center gap-6">
      <a
        href="mailto:gareth07120712@gmail.com"
        class="rounded-full bg-[var(--emerald)] px-8 py-4 text-sm font-semibold uppercase tracking-wider text-[var(--ink)] transition-colors hover:bg-[var(--emerald-bright)]"
      >
        Start a project
      </a>
      <a
        href="https://github.com/gareth0712"
        target="_blank"
        rel="noopener noreferrer"
        class="rounded-full border border-[var(--cream-dim)] px-8 py-4 text-sm font-semibold uppercase tracking-wider text-[var(--cream)] transition-colors hover:border-[var(--emerald)] hover:text-[var(--emerald-bright)]"
      >
        See my code
      </a>
    </div>

    <div class="mt-16 flex justify-center">
      <NuxtLink
        to="/tools/yt-monitor"
        class="group inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[var(--cream-dim)] transition-colors hover:text-[var(--emerald-bright)]"
      >
        <span>Tools</span>
        <span>/</span>
        <span>YouTube 爆款監控</span>
        <span class="inline-block transition-transform group-hover:translate-x-1">↗</span>
      </NuxtLink>
    </div>

    <footer class="mt-24 flex flex-wrap items-center justify-center gap-8">
      <a
        v-for="social in socials"
        :key="social.label"
        :href="social.href"
        target="_blank"
        rel="noopener noreferrer"
        class="text-sm text-[var(--cream-dim)] transition-colors hover:text-[var(--emerald-bright)]"
      >
        {{ social.label }}
      </a>
    </footer>
  </section>
</template>
