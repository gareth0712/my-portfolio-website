// https://nuxt.com/docs/api/configuration/nuxt-config
const isTest = process.env.NODE_ENV === 'test' || process.env.VITEST === 'true'

export default defineNuxtConfig({
  compatibilityDate: '2025-01-01',
  future: {
    compatibilityVersion: 4
  },
  ssr: true,

  modules: [
    '@nuxt/ui',
    '@nuxt/content',
    '@nuxt/fonts',
    '@pinia/nuxt',
    ...(isTest ? [] : ['@vite-pwa/nuxt']),
    '@nuxt/eslint'
  ],

  css: ['~/assets/css/main.css'],

  app: {
    head: {
      title: "Gareth Lau's Portolio Website",
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: "Gareth Lau's Portfolio Website" }
      ],
      link: [
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '32x32',
          href: '/favicon/favicon-32x32.png'
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '16x16',
          href: '/favicon/favicon-16x16.png'
        },
        {
          rel: 'apple-touch-icon',
          sizes: '180x180',
          href: '/favicon/apple-touch-icon.png'
        },
        { rel: 'manifest', href: '/favicon/site.webmanifest' },
        {
          rel: 'mask-icon',
          color: '#5bbad5',
          href: '/favicon/safari-pinned-tab.svg'
        }
      ]
    }
  },

  nitro: {
    prerender: {
      routes: ['/']
    }
  },

  fonts: {
    families: [{ name: 'Quicksand', provider: 'google' }]
  },

  ...(isTest ? {} : {
    pwa: {
      registerType: 'autoUpdate',
      manifest: {
        name: 'Gareth Lau',
        short_name: 'GarethLau',
        theme_color: '#ffffff',
        background_color: '#ffffff',
        display: 'standalone',
        icons: [
          {
            src: '/favicon/android-chrome-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/favicon/android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    }
  }),

  colorMode: {
    classSuffix: '',
    preference: 'dark',
    fallback: 'dark'
  },

  content: {
    experimental: {
      nativeSqlite: true
    }
  },

  eslint: {
    config: {
      stylistic: false
    }
  },

  devtools: { enabled: false }
})
