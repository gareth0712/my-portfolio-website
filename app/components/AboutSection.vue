<script setup lang="ts">
const { data: aboutPage } = await useAsyncData('about', () =>
  queryCollection('pages').path('/about').first()
)
</script>

<template>
  <section
    v-if="aboutPage"
    class="text-gray-100 dark:text-gray-100 text-left rounded-xl bg-black/30 backdrop-blur-sm p-8 appear"
  >
    <ContentRenderer :value="aboutPage" />
  </section>
</template>
