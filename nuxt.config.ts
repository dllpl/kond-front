// https://nuxt.com/docs/api/configuration/nuxt-config
// @ts-ignore
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: {enabled: false},

  modules: [
    '@nuxt/icon',
    '@pinia/nuxt',
    '@nuxtjs/google-fonts',
    '@nuxtjs/seo',
    '@vee-validate/nuxt',
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
    url: '',
    name: 'Разработка веб сайта под ключ Webseed.ru',
    defaultLocal: 'ru'
  },


  app: {
    pageTransition: {name: 'page', mode: 'out-in'},
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
  },

})
