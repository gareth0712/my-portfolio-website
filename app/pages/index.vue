<script setup lang="ts">
import '~/assets/css/cinematic.css'

definePageMeta({ layout: false })
</script>

<template>
  <main class="cinematic">
    <ClientOnly>
      <CinematicGrainOverlay />
    </ClientOnly>
    <CinematicHeroOrbit />
    <CinematicStatsStrip />
    <CinematicPillarsSection />
    <CinematicWorkSection />
    <CinematicFinaleCta />
  </main>
</template>
