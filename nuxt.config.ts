// https://nuxt.com/docs/api/configuration/nuxt-config
// @ts-ignore
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: {enabled: false},

  runtimeConfig: {
    public: {
      // @ts-ignore
      backOptions: {
        storage: process.env.STORAGE_PATH,
        api: process.env.API_URL,
      },
    },
  },
  routeRules: {
    "/_nuxt/**": { headers: { "Cache-Control": "public, max-age=31536000, immutable" } },
    "/static/**": { headers: { "Cache-Control": "public, max-age=86400" } }, // Кэш на сутки
    "/api/**": { headers: { "Cache-Control": "no-store" } }, // API не кэшируем
    "/*": { headers: { "Cache-Control": "public, max-age=3600" } }, // Кэш страниц на 1 час
  },

  modules: [
    '@nuxt/icon',
    '@pinia/nuxt',
    '@nuxtjs/google-fonts',
    '@nuxtjs/seo',
    '@vee-validate/nuxt',
    'yandex-metrika-module-nuxt3',
    'nuxt-headlessui',
  ],
  
// @ts-ignore
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
    url: '',
    name: 'Все для кондитера',
    defaultLocal: 'ru'
  },


  app: {
    // pageTransition: {name: 'page', mode: 'out-in'},
    head: {
      htmlAttrs: {
        lang: 'ru'
      },
      charset: 'utf-8',
      title: '',
      viewport: 'width=device-width, initial-scale=1',
      templateParams: {
        separator: ' - '
      },
      script: [
        // {src: 'https://www.googletagmanager.com/gtag/js?id=G-5H3XLN9HST', async: true},
      ]
    }
  },

  router: {
    options: {
      scrollBehaviorType: 'smooth'
    },
  },

  veeValidate: {
    autoImports: true,
    componentNames: {
      Form: 'VeeForm',
      Field: 'VeeField',
      FieldArray: 'VeeFieldArray',
      ErrorMessage: 'VeeErrorMessage',
    },
  },

  googleFonts: {
    families: {
      'Open Sans': '400..600',
      Montserrat: '400..600',
    },
    display: 'swap',
    preload: true,
    useStylesheet: true,
  },

  ...(process.env.APP_ENV === 'prod' && {
    svgSprite: {
      iconsPath: false,
    }
  }),

  // @ts-ignore
  yandexMetrika: {
    id: process.env.YANDEX_METRIKA_ID || '65355439',
    webvisor: true,
    consoleLog: true,
    defer: true
  },

  schemaOrg: {
    defaults: false,
  },

  devServer: {
    host: '127.0.0.1',
    // host: '192.168.1.242',
  },
})