export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: {enabled: false},
  ssr: true,

  runtimeConfig: {
    public: {
      backOptions: {
        storage: process.env.STORAGE_PATH,
        api: process.env.API_URL,
      },
    },
  },

  nitro: {
      routeRules: {
        '/**': {
          headers: {
            'X-Frame-Options': 'SAMEORIGIN',
            'X-Content-Type-Options': 'nosniff',
            'Referrer-Policy': 'strict-origin-when-cross-origin',
          }
        },
      }
  },

  routeRules: {
    "/": {isr: 300, headers: {"Cache-Control": "public, max-age=300"}},
    "/_nuxt/**": {headers: {"Cache-Control": "public, max-age=31536000, immutable"}},
    "/static/**": {headers: {"Cache-Control": "public, max-age=86400"}},

    "/api/user/**": {headers: {"Cache-Control": "no-store, no-cache, must-revalidate"}},
    "/api/orders/**": {headers: {"Cache-Control": "no-store, no-cache, must-revalidate"}},

    "/api/**": {swr: 300, headers: {"Cache-Control": "public, max-age=300"}},

    "/lk/**": {headers: {"Cache-Control": "private, max-age=0, no-cache,no-store, must-revalidate"}},
  },

  icon: {
    provider: "server",
    clientBundle: {
      scan: true,
    }
  },

  // experimental: {
    // payloadExtraction: true,
    // viewTransition: true, // Плавные переходы между страницами
  // },

  modules: [
    '@nuxt/icon',
    '@pinia/nuxt',
    '@nuxtjs/google-fonts',
    '@nuxtjs/seo',
    'yandex-metrika-module-nuxt3',
    'nuxt-headlessui',
  ],

  css: ['~/assets/css/main.css'],

  headlessui: {
    prefix: ''
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  site: {
    indexable: false, // запретить индексацию
    url: '',
    name: 'Всё для кондитера',
    defaultLocal: 'ru',
  },

  sitemap: {
    defaults: {
      changefreq: 'daily',
      priority: 0.5,
      lastmod: new Date().toISOString(),
    },
    sources: [process.env.API_URL + '/sitemap/generate'],
  },

  app: {
    head: {
      htmlAttrs: {
        lang: 'ru'
      },
      charset: 'utf-8',
      title: '',
      viewport: 'width=device-width, initial-scale=1',
      // templateParams: {
      //   separator: ' - '
      // },
      script: [
        // {src: 'https://www.googletagmanager.com/gtag/js?id=G-5H3XLN9HST', async: true},
      ]
    },
  },

  router: {
    prefetchLinks: false,
    options: {
      scrollBehaviorType: 'smooth'
    },
  },

  googleFonts: {
    families: {
      'Open Sans': '400..600',
      Montserrat: '400..600',
    },
    // text: "Привет мир",
    // subsets: 'cyrillic',
    overwriting: true,
    display: 'swap',
    preload: true,
    prefetch: true,
    preconnect: true,
    useStylesheet: true,
  },

  yandexMetrika: {
    id: process.env.YANDEX_METRIKA_ID || '65355439',
    webvisor: true,
    consoleLog: false,
    defer: true
  },

  schemaOrg: {
    defaults: false,
  },

  devServer: {
    host: '127.0.0.1',
  },
})