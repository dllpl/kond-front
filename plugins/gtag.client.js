export default defineNuxtPlugin({
    name: 'gtag',
    parallel: true,
    async setup(nuxtApp) {
        window.dataLayer = window.dataLayer || [];
        function gtag() {
            dataLayer.push(arguments);
        }

        gtag('js', new Date());

        gtag('config', 'G-8TWE0J1QGG');
    }
})