// Faithful TypeScript port of the fetch/formatting logic from
// S:\git\14-cicd\gareth0712.github.io\tools\yt-monitor\index.html

const API_BASE = 'https://youtube.googleapis.com/youtube/v3/'
const LS_KEY_NAME = 'yt_monitor_api_key'

export type YoutubeMode = 'trending' | 'keyword' | 'category' | 'channel'

export interface YoutubeRegionOption {
  value: string
  label: string
}

export const YOUTUBE_REGIONS: YoutubeRegionOption[] = [
  { value: 'TW', label: '🇹🇼 台灣 (TW)' },
  { value: 'HK', label: '🇭🇰 香港 (HK)' },
  { value: 'US', label: '🇺🇸 美國 (US)' },
  { value: 'JP', label: '🇯🇵 日本 (JP)' },
  { value: 'KR', label: '🇰🇷 韓國 (KR)' },
  { value: 'GB', label: '🇬🇧 英國 (GB)' },
  { value: 'SG', label: '🇸🇬 新加坡 (SG)' },
  { value: 'MY', label: '🇲🇾 馬來西亞 (MY)' }
]

export interface VideoCardData {
  videoId: string
  thumbnail: string
  title: string
  channel: string
  publishedAt: string
  viewCount?: string
  likeCount?: string
}

export interface CategoryOption {
  value: string
  label: string
}

export interface ChannelInfo {
  name: string
  subscriberCount?: string
  viewCount?: string
}

interface YoutubeThumbnailInfo {
  url?: string
}

interface YoutubeSnippet {
  title?: string
  channelTitle?: string
  publishedAt?: string
  assignable?: boolean
  thumbnails?: {
    medium?: YoutubeThumbnailInfo
    high?: YoutubeThumbnailInfo
  }
}

interface YoutubeStatistics {
  viewCount?: string
  likeCount?: string
  subscriberCount?: string
}

interface YoutubeContentDetails {
  videoId?: string
  relatedPlaylists?: {
    uploads?: string
  }
}

interface YoutubeApiItem {
  id?: string | { videoId?: string }
  snippet?: YoutubeSnippet
  statistics?: YoutubeStatistics
  contentDetails?: YoutubeContentDetails
}

interface YoutubeApiResponse {
  items?: YoutubeApiItem[]
  error?: {
    code?: number
    message?: string
  }
}

/* ===================== API FETCH UTILITY ===================== */
async function ytFetch(apiKey: string, endpoint: string, params: Record<string, string>): Promise<YoutubeApiResponse> {
  const url = new URL(API_BASE + endpoint)
  for (const [key, value] of Object.entries(params)) {
    url.searchParams.set(key, value)
  }
  url.searchParams.set('key', apiKey)

  const res = await fetch(url.toString())
  const data: YoutubeApiResponse = await res.json()

  if (!res.ok) {
    const message = data.error?.message ?? `HTTP ${res.status}`
    const code = data.error?.code ?? res.status
    if (code === 400) throw new Error(`金鑰無效或請求錯誤：${message}`)
    if (code === 403) throw new Error(`金鑰無效或配額用盡：${message}`)
    if (code === 404) throw new Error(`找不到資源：${message}`)
    throw new Error(`API 錯誤 (${code})：${message}`)
  }
  return data
}

/* ===================== NUMBER FORMATTING ===================== */
export function formatViews(value: string | undefined): string {
  if (value === undefined) return '—'
  const num = Number.parseInt(value, 10)
  if (Number.isNaN(num)) return '—'
  if (num >= 100_000_000) return `${(num / 100_000_000).toFixed(1).replace(/\.0$/, '')} 億`
  if (num >= 10_000) return `${(num / 10_000).toFixed(1).replace(/\.0$/, '')} 萬`
  return num.toLocaleString('zh-TW')
}

export function formatNum(value: string | undefined): string {
  if (value === undefined) return '—'
  const num = Number.parseInt(value, 10)
  if (Number.isNaN(num)) return '—'
  return num.toLocaleString('zh-TW')
}

/* ===================== RELATIVE TIME ===================== */
export function relativeTime(dateStr: string): string {
  const now = Date.now()
  const then = new Date(dateStr).getTime()
  const diff = Math.floor((now - then) / 1000)

  if (diff < 60) return '剛剛'
  if (diff < 3600) return `${Math.floor(diff / 60)} 分鐘前`
  if (diff < 86400) return `${Math.floor(diff / 3600)} 小時前`
  if (diff < 86400 * 7) return `${Math.floor(diff / 86400)} 天前`
  if (diff < 86400 * 30) return `${Math.floor(diff / (86400 * 7))} 週前`
  if (diff < 86400 * 365) return `${Math.floor(diff / (86400 * 30))} 個月前`
  return `${Math.floor(diff / (86400 * 365))} 年前`
}

function extractVideoId(item: YoutubeApiItem): string {
  if (typeof item.id === 'string') return item.id
  return item.id?.videoId ?? ''
}

function toCategoryOption(item: YoutubeApiItem): CategoryOption | null {
  if (typeof item.id !== 'string') return null
  return { value: item.id, label: item.snippet?.title ?? '' }
}

function normalizeVideos(items: YoutubeApiItem[]): VideoCardData[] {
  return items.map((item) => {
    const snippet = item.snippet ?? {}
    const statistics = item.statistics ?? {}
    return {
      videoId: extractVideoId(item),
      thumbnail: snippet.thumbnails?.medium?.url ?? snippet.thumbnails?.high?.url ?? '',
      title: snippet.title ?? '(無標題)',
      channel: snippet.channelTitle ?? '',
      publishedAt: snippet.publishedAt ?? '',
      viewCount: statistics.viewCount,
      likeCount: statistics.likeCount
    }
  })
}

/* ===================== MODE 4: CHANNEL INPUT PARSING ===================== */
interface ParsedChannelInput {
  type: 'id' | 'handle'
  value: string
}

function parseChannelInput(raw: string): ParsedChannelInput {
  const s = raw.trim()

  // Raw UC... channel ID
  if (/^UC[\w-]{21,}$/.test(s)) return { type: 'id', value: s }

  // Raw @handle
  if (/^@[\w.%-]+$/.test(s)) return { type: 'handle', value: s.slice(1) }

  try {
    const url = new URL(s.startsWith('http') ? s : `https://${s}`)
    const path = url.pathname

    // /channel/UCxxxx
    const channelMatch = path.match(/\/channel\/(UC[\w-]+)/)
    if (channelMatch?.[1]) return { type: 'id', value: channelMatch[1] }

    // /@handle
    const handleMatch = path.match(/\/@([\w.%-]+)/)
    if (handleMatch?.[1]) return { type: 'handle', value: handleMatch[1] }

    // /c/name — treat as handle (forHandle may not resolve custom names, but best effort)
    const cMatch = path.match(/\/c\/([\w.%-]+)/)
    if (cMatch?.[1]) return { type: 'handle', value: cMatch[1] }

    // /user/name
    const userMatch = path.match(/\/user\/([\w.%-]+)/)
    if (userMatch?.[1]) return { type: 'handle', value: userMatch[1] }
  } catch {
    // not a URL — fall through to handle fallback
  }

  // Fallback: assume handle without @
  return { type: 'handle', value: s.replace(/^@/, '') }
}

export function useYoutube() {
  const apiKey = ref('')

  const hasApiKey = computed<boolean>(() => apiKey.value.length > 0)

  function loadApiKey(): void {
    const saved = localStorage.getItem(LS_KEY_NAME)
    if (saved) apiKey.value = saved
  }

  function saveApiKey(key: string): void {
    apiKey.value = key
    localStorage.setItem(LS_KEY_NAME, key)
  }

  function clearApiKey(): void {
    apiKey.value = ''
    localStorage.removeItem(LS_KEY_NAME)
  }

  /* ===================== MODE 1: TRENDING ===================== */
  async function fetchTrending(region: string): Promise<VideoCardData[]> {
    const data = await ytFetch(apiKey.value, 'videos', {
      part: 'snippet,statistics',
      chart: 'mostPopular',
      regionCode: region,
      maxResults: '24'
    })
    return normalizeVideos(data.items ?? [])
  }

  /* ===================== MODE 2: KEYWORD ===================== */
  async function searchKeyword(query: string, region: string): Promise<VideoCardData[]> {
    const searchData = await ytFetch(apiKey.value, 'search', {
      part: 'snippet',
      q: query,
      type: 'video',
      order: 'viewCount',
      regionCode: region,
      maxResults: '24'
    })

    const items = searchData.items ?? []
    if (items.length === 0) return []

    const ids = items
      .map(item => extractVideoId(item))
      .filter(id => id !== '')
      .join(',')

    const videoData = await ytFetch(apiKey.value, 'videos', {
      part: 'snippet,statistics',
      id: ids
    })
    return normalizeVideos(videoData.items ?? [])
  }

  /* ===================== MODE 3: CATEGORY ===================== */
  async function fetchCategories(region: string): Promise<CategoryOption[]> {
    const data = await ytFetch(apiKey.value, 'videoCategories', {
      part: 'snippet',
      regionCode: region
    })

    return (data.items ?? [])
      .filter(item => item.snippet?.assignable !== false)
      .map(item => toCategoryOption(item))
      .filter((option): option is CategoryOption => option !== null)
  }

  async function fetchCategoryPopular(region: string, categoryId: string): Promise<VideoCardData[]> {
    const data = await ytFetch(apiKey.value, 'videos', {
      part: 'snippet,statistics',
      chart: 'mostPopular',
      videoCategoryId: categoryId,
      regionCode: region,
      maxResults: '24'
    })
    return normalizeVideos(data.items ?? [])
  }

  /* ===================== MODE 4: CHANNEL ===================== */
  async function analyzeChannel(raw: string): Promise<{ channel: ChannelInfo, videos: VideoCardData[] }> {
    const parsed = parseChannelInput(raw)

    const channelData = await ytFetch(apiKey.value, 'channels', {
      part: 'snippet,statistics,contentDetails',
      ...(parsed.type === 'id' ? { id: parsed.value } : { forHandle: parsed.value })
    })

    const channelItem = (channelData.items ?? [])[0]
    if (!channelItem) throw new Error('找不到頻道，請確認輸入是否正確')

    const channel: ChannelInfo = {
      name: channelItem.snippet?.title ?? '',
      subscriberCount: channelItem.statistics?.subscriberCount,
      viewCount: channelItem.statistics?.viewCount
    }

    const uploadsId = channelItem.contentDetails?.relatedPlaylists?.uploads
    if (!uploadsId) throw new Error('找不到上傳播放清單')

    const playlistData = await ytFetch(apiKey.value, 'playlistItems', {
      part: 'contentDetails',
      playlistId: uploadsId,
      maxResults: '24'
    })

    const videoIds = (playlistData.items ?? [])
      .map(item => item.contentDetails?.videoId)
      .filter((id): id is string => Boolean(id))
      .join(',')

    if (!videoIds) return { channel, videos: [] }

    const videoData = await ytFetch(apiKey.value, 'videos', {
      part: 'snippet,statistics',
      id: videoIds
    })

    return { channel, videos: normalizeVideos(videoData.items ?? []) }
  }

  return {
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
  }
}
