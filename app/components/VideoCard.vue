<script setup lang="ts">
import type { VideoCardData } from '~/composables/useYoutube'

const props = defineProps<{ video: VideoCardData }>()

const href = computed<string>(() => `https://www.youtube.com/watch?v=${props.video.videoId}`)
</script>

<template>
  <a
    :href="href"
    target="_blank"
    rel="noopener noreferrer"
    class="group block overflow-hidden rounded-lg border border-gray-200 bg-white transition hover:-translate-y-0.5 hover:border-primary-500 hover:shadow-lg dark:border-gray-800 dark:bg-gray-900"
  >
    <div class="relative aspect-video overflow-hidden bg-gray-100 dark:bg-gray-800">
      <img
        :src="video.thumbnail"
        :alt="video.title"
        loading="lazy"
        class="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
      >
    </div>
    <div class="p-3">
      <p class="mb-1.5 line-clamp-2 text-sm font-medium text-gray-900 dark:text-gray-100">
        {{ video.title }}
      </p>
      <p class="mb-2 truncate text-xs text-gray-500 dark:text-gray-400">
        {{ video.channel }}
      </p>
      <div class="flex flex-wrap gap-3 text-xs">
        <span class="flex items-center gap-1 font-mono text-primary-600 dark:text-primary-400">
          <UIcon name="i-mdi-play" />{{ formatViews(video.viewCount) }}
        </span>
        <span class="flex items-center gap-1 font-mono text-gray-500 dark:text-gray-400">
          <UIcon name="i-mdi-heart" />{{ formatViews(video.likeCount) }}
        </span>
      </div>
      <p v-if="video.publishedAt" class="mt-1.5 font-mono text-[11px] text-gray-400 dark:text-gray-500">
        {{ relativeTime(video.publishedAt) }}
      </p>
    </div>
  </a>
</template>
