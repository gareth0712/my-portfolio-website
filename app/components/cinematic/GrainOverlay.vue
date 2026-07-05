<script setup lang="ts">
// Fixed full-screen SVG noise overlay, purely decorative.
</script>

<template>
  <svg
    class="cinematic-grain"
    aria-hidden="true"
    focusable="false"
  >
    <filter id="cinematic-grain-filter">
      <feTurbulence
        type="fractalNoise"
        baseFrequency="0.85"
        numOctaves="2"
        stitchTiles="stitch"
      />
      <feColorMatrix type="saturate" values="0" />
    </filter>
    <rect width="100%" height="100%" filter="url(#cinematic-grain-filter)" />
  </svg>
</template>
