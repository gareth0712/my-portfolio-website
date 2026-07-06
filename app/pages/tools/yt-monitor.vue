<script setup lang="ts">
import type { CategoryOption, ChannelInfo, VideoCardData, YoutubeMode } from '~/composables/useYoutube'

interface ModeTab {
  value: YoutubeMode
  number: string
  label: string
}

interface StatusState {
  type: 'loading' | 'error' | 'empty'
  message: string
}

const MODE_TABS: ModeTab[] = [
  { value: 'trending', number: 'MODE 1', label: '地區熱門' },
  { value: 'keyword', number: 'MODE 2', label: '關鍵字搜尋' },
  { value: 'category', number: 'MODE 3', label: '分類熱門' },
  { value: 'channel', number: 'MODE 4', label: '頻道分析' }
]

const {
  apiKey,
  hasApiKey,
  loadApiKey,
  saveApiKey,
  clearApiKey,
  fetchTrending,
  searchKeyword,
  fetchCategories,
  fetchCategoryPopular,
  analyzeChannel
} = useYoutube()

const apiKeyInput = ref('')
const currentMode = ref<YoutubeMode>('trending')

const trendRegion = ref('TW')
const kwQuery = ref('')
const kwRegion = ref('TW')
const catRegion = ref('TW')
const catId = ref('')
const catOptions = ref<CategoryOption[]>([])
const chInput = ref('')

const isRunning = ref(false)
const isLoadingCats = ref(false)
const status = ref<StatusState | null>(null)
const channelInfo = ref<ChannelInfo | null>(null)
const videos = ref<VideoCardData[]>([])

onMounted(() => {
  loadApiKey()
  apiKeyInput.value = apiKey.value
})

function setStatus(type: StatusState['type'], message: string): void {
  status.value = { type, message }
}

function setError(message: string): void {
  setStatus('error', message)
  videos.value = []
  channelInfo.value = null
}

function clearResults(): void {
  status.value = null
  channelInfo.value = null
  videos.value = []
}

function handleSaveKey(): void {
  const value = apiKeyInput.value.trim()
  if (!value) {
    setError('請輸入 API 金鑰')
    return
  }
  saveApiKey(value)
  clearResults()
}

function handleClearKey(): void {
  clearApiKey()
  apiKeyInput.value = ''
  clearResults()
}

function selectMode(mode: YoutubeMode): void {
  currentMode.value = mode
  clearResults()
}

async function handleLoadCategories(): Promise<void> {
  if (!hasApiKey.value) {
    setError('請先儲存 API 金鑰')
    return
  }

  isLoadingCats.value = true
  catOptions.value = []
  catId.value = ''

  try {
    const categories = await fetchCategories(catRegion.value)
    catOptions.value = categories
    if (categories.length === 0) setError('無可用分類')
  } catch (err) {
    setError(err instanceof Error ? err.message : '載入分類失敗')
  } finally {
    isLoadingCats.value = false
  }
}

async function handleRun(): Promise<void> {
  if (!hasApiKey.value) {
    setError('請先儲存 API 金鑰')
    return
  }

  channelInfo.value = null
  videos.value = []
  isRunning.value = true

  try {
    switch (currentMode.value) {
      case 'trending':
        setStatus('loading', `載入中：${trendRegion.value} 地區熱門影片…`)
        videos.value = await fetchTrending(trendRegion.value)
        break

      case 'keyword': {
        const query = kwQuery.value.trim()
        if (!query) {
          setError('請輸入關鍵字')
          return
        }
        setStatus('loading', `搜尋中：「${query}」…`)
        videos.value = await searchKeyword(query, kwRegion.value)
        break
      }

      case 'category':
        if (!catId.value) {
          setError('請先載入並選擇分類')
          return
        }
        setStatus('loading', '載入中：分類熱門影片…')
        videos.value = await fetchCategoryPopular(catRegion.value, catId.value)
        break

      case 'channel': {
        const raw = chInput.value.trim()
        if (!raw) {
          setError('請輸入頻道網址、Handle 或 ID')
          return
        }
        setStatus('loading', '解析頻道中…')
        const result = await analyzeChannel(raw)
        channelInfo.value = result.channel
        videos.value = result.videos
        break
      }
    }

    status.value = videos.value.length === 0 ? { type: 'empty', message: '查無結果' } : null
  } catch (err) {
    setError(err instanceof Error ? err.message : '未知錯誤，請稍後再試')
  } finally {
    isRunning.value = false
  }
}
</script>

<template>
  <UContainer class="py-8">
    <h1 class="mb-6 font-mono text-2xl font-bold text-primary-600 dark:text-primary-400">
      ▶ YouTube<span class="text-gray-400 dark:text-gray-500">.</span>爆款監控
    </h1>

    <div class="grid grid-cols-1 gap-6 lg:grid-cols-[280px_1fr]">
      <!-- Sidebar -->
      <aside class="flex flex-col gap-4">
        <!-- API Key -->
        <UCard>
          <template #header>
            <p class="font-mono text-xs uppercase tracking-widest text-primary-600 dark:text-primary-400">
              API 金鑰
            </p>
          </template>

          <UFormField label="YouTube Data API v3 Key">
            <UInput
              v-model="apiKeyInput"
              type="password"
              placeholder="AIza..."
              autocomplete="off"
              class="w-full"
            />
          </UFormField>

          <UBadge :color="hasApiKey ? 'success' : 'neutral'" variant="subtle" class="mt-2">
            {{ hasApiKey ? '金鑰已儲存 ✓' : '尚未設定金鑰' }}
          </UBadge>

          <div class="mt-3 flex gap-2">
            <UButton color="primary" block @click="handleSaveKey">
              儲存金鑰
            </UButton>
            <UButton color="error" variant="outline" aria-label="清除金鑰" @click="handleClearKey">
              <UIcon name="i-mdi-close" />
            </UButton>
          </div>
        </UCard>

        <!-- Mode Selector -->
        <UCard>
          <template #header>
            <p class="font-mono text-xs uppercase tracking-widest text-primary-600 dark:text-primary-400">
              查詢模式
            </p>
          </template>

          <div class="grid grid-cols-2 gap-2">
            <UButton
              v-for="tab in MODE_TABS"
              :key="tab.value"
              :variant="currentMode === tab.value ? 'soft' : 'outline'"
              :color="currentMode === tab.value ? 'primary' : 'neutral'"
              block
              class="h-auto flex-col py-2"
              @click="selectMode(tab.value)"
            >
              <span class="block font-mono text-[10px] opacity-70">{{ tab.number }}</span>
              <span class="block text-xs">{{ tab.label }}</span>
            </UButton>
          </div>
        </UCard>

        <!-- Mode Params -->
        <UCard>
          <template #header>
            <p class="font-mono text-xs uppercase tracking-widest text-primary-600 dark:text-primary-400">
              查詢參數
            </p>
          </template>

          <!-- MODE 1: Trending -->
          <UFormField v-if="currentMode === 'trending'" label="地區">
            <USelect v-model="trendRegion" :items="YOUTUBE_REGIONS" class="w-full" />
          </UFormField>

          <!-- MODE 2: Keyword -->
          <template v-else-if="currentMode === 'keyword'">
            <UFormField label="關鍵字">
              <UInput v-model="kwQuery" placeholder="輸入搜尋關鍵字..." class="w-full" />
            </UFormField>
            <UFormField label="地區" class="mt-3">
              <USelect v-model="kwRegion" :items="YOUTUBE_REGIONS" class="w-full" />
            </UFormField>
          </template>

          <!-- MODE 3: Category -->
          <template v-else-if="currentMode === 'category'">
            <UFormField label="地區">
              <USelect v-model="catRegion" :items="YOUTUBE_REGIONS" class="w-full" />
            </UFormField>
            <UFormField label="影片分類" class="mt-3">
              <USelect
                v-model="catId"
                :items="catOptions"
                :placeholder="catOptions.length === 0 ? '-- 先選地區並載入分類 --' : '請選擇分類'"
                :disabled="catOptions.length === 0"
                class="w-full"
              />
            </UFormField>
            <UButton
              variant="outline"
              color="neutral"
              block
              class="mt-2"
              :loading="isLoadingCats"
              @click="handleLoadCategories"
            >
              載入分類清單
            </UButton>
          </template>

          <!-- MODE 4: Channel -->
          <UFormField
            v-else
            label="頻道網址 / Handle / ID"
            description="支援 @handle、/channel/UC...、/c/name、或純 UCxxxx"
          >
            <UInput v-model="chInput" placeholder="https://www.youtube.com/@handle 或 UCxxxx" class="w-full" />
          </UFormField>

          <UButton color="primary" block class="mt-4" :loading="isRunning" @click="handleRun">
            ▶ 執行查詢
          </UButton>
        </UCard>
      </aside>

      <!-- Content -->
      <main class="min-h-[400px]">
        <UAlert
          v-if="status"
          :color="status.type === 'error' ? 'error' : status.type === 'loading' ? 'info' : 'neutral'"
          :title="status.message"
          variant="soft"
          class="mb-4"
        />

        <UCard v-if="channelInfo" class="mb-4 border-l-4 border-l-purple-500">
          <p class="text-lg font-bold text-gray-900 dark:text-gray-100">
            {{ channelInfo.name }}
          </p>
          <p class="font-mono text-sm text-gray-500 dark:text-gray-400">
            訂閱數：{{ channelInfo.subscriberCount ? formatNum(channelInfo.subscriberCount) : '隱藏' }}
            ｜ 總觀看：{{ channelInfo.viewCount ? formatViews(channelInfo.viewCount) : '—' }}
          </p>
        </UCard>

        <div v-if="isRunning" class="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          <div v-for="n in 24" :key="n" class="overflow-hidden rounded-lg border border-gray-200 dark:border-gray-800">
            <USkeleton class="aspect-video w-full" />
            <div class="space-y-2 p-3">
              <USkeleton class="h-3 w-full" />
              <USkeleton class="h-3 w-3/5" />
              <USkeleton class="h-3 w-2/5" />
            </div>
          </div>
        </div>

        <div v-else-if="videos.length > 0" class="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          <VideoCard v-for="video in videos" :key="video.videoId" :video="video" />
        </div>
      </main>
    </div>
  </UContainer>
</template>
