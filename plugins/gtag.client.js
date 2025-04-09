export default defineNuxtPlugin({
    name: 'gtag',
    parallel: true,
    async setup(nuxtApp) {

        const config = useRuntimeConfig()

        if (config.APP_ENV !== 'production') return

        window.dataLayer = window.dataLayer || [];

        function gtag() {
            dataLayer.push(arguments);
        }

        gtag('js', new Date());

        gtag('config', 'G-8TWE0J1QGG');
    }
})