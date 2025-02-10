/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./nuxt.config.{js,ts}",
        "./app.vue",
    ],
    theme: {
        extend: {
            fontFamily: {
                main: ['Montserrat', 'sans-serif'],
                title: ['Open Sans', 'sans-serif'],
            },
        },

        screens: {
            '2xl': { max: '1440px' },
            // => @media (max-width: 1440px) { ... }

            'xl': { max: '1280px' },
            // => @media (max-width: 1280px) { ... }

            'lg': { max: '1024px' },
            // => @media (max-width: 1024px) { ... }

            'md': { max: '768px' },
            // => @media (max-width: 768px) { ... }

            'sm': { max: '640px' },
            // => @media (max-width: 640px) { ... }

            'xs': { max: '576px' },
            // => @media (max-width: 640px) { ... }
        },

        container: {
            padding: {
                DEFAULT: '1rem',
                sm: '2rem',
                lg: '4rem',
                xl: '5rem',
                '2xl': '3rem',
            },

        },
    },
    plugins: [],
    // corePlugins: {
    //     preflight: false,
    // },
}
