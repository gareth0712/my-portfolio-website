<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
const instagramLink = 'https://www.instagram.com/garetpark/'
const linkedinLink = 'https://www.linkedin.com/in/gareth-lau-8b091b9b/'
const emailLink = 'mailto:gareth07120712@gmail.com'

function openLink(url: string): void {
  const target = url.startsWith('mailto:') ? '_parent' : '_blank'
  window.open(url, target)
}
</script>

<template>
  <section class="flex gap-6 items-center justify-center">
    <UButton
      variant="ghost"
      size="xl"
      color="neutral"
      aria-label="Instagram"
      @click="openLink(instagramLink)"
    >
      <UIcon name="i-mdi-instagram" class="text-4xl text-white" />
    </UButton>
    <UButton
      variant="ghost"
      size="xl"
      color="neutral"
      aria-label="LinkedIn"
      @click="openLink(linkedinLink)"
    >
      <UIcon name="i-mdi-linkedin" class="text-4xl text-white" />
    </UButton>
    <UButton
      variant="ghost"
      size="xl"
      color="neutral"
      aria-label="Email"
      @click="openLink(emailLink)"
    >
      <UIcon name="i-mdi-email" class="text-4xl text-white" />
    </UButton>
  </section>
</template>
