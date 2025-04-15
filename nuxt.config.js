import redirects from './temp_redirects.json'
export default defineNuxtConfig({
    compatibilityDate: '2024-04-03',
    devtools: {enabled: false},
    ssr: true,

    runtimeConfig: {
        telegramBotToken: process.env.TELEGRAM_BOT_TOKEN,
        telegramChatId: process.env.TELEGRAM_CHAT_ID,
        public: {
            backOptions: {
                app_env: process.env.APP_ENV,
                storage: process.env.STORAGE_PATH,
                api: process.env.API_URL,
            },
        },
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
        'nuxt-yandex-metrika',
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

    robots: {
        disallow: [
            '/lk',
            '/_nuxt/**',
        ]
    },

    site: {
        indexable: process.env.APP_ENV === 'production',
        url: 'https://dljakonditera.ru',
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

    // serverMiddleware: [
    //     {path: '/', handler: '~/server/middleware/redirects.ts'}
    // ],

    app: {
        head: {
            htmlAttrs: {
                lang: 'ru'
            },
            charset: 'utf-8',
            title: 'Всё для кондитера',
            viewport: 'width=device-width, initial-scale=1',
            templateParams: {
                separator: '–'
            },
            link: [
                {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
            ],
            script: [
                {src: 'https://www.googletagmanager.com/gtag/js?id=G-8TWE0J1QGG', async: true},
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
        overwriting: true,
        display: 'swap',
        preload: true,
        prefetch: true,
        preconnect: true,
        useStylesheet: true,
    },

    yandexMetrika: {
        id: process.env.APP_ENV === 'production' ? process.env.YANDEX_METRIKA_ID : '',
        options: {
            webvisor: true,
            defer: true,
            ecommerce: true,
        },
    },

    schemaOrg: {
        defaults: false,
    },

    devServer: {
        host: '127.0.0.1',
    },
})
