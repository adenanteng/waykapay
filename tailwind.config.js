const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './vendor/laravel/jetstream/**/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.vue',
        './node_modules/@protonemedia/inertiajs-tables-laravel-query-builder/**/*.{js,vue}',
    ],
    darkMode: 'class',
    theme: {
        colors: {
            primary: colors.sky,
            transparent: 'transparent',
            current: 'currentColor',
            neutral: colors.neutral,
            black: colors.black,
            white: colors.white,
            gray: colors.gray,
            green: colors.green,
            lime: colors.lime,
            cyan: colors.cyan,
            teal: colors.teal,
            sky: colors.sky,
            blue: colors.blue,
            indigo: colors.indigo,
            amber: colors.amber,
            red: colors.red
        },
        extend: {
            fontFamily: {
                sans: ['Poppins', ...defaultTheme.fontFamily.sans],
            },
            backgroundImage: {
                'glass': "url('/img/glass.png')",
                'hero': "url('/img/hero.jpg')",
            },
        },
        nightwind: {
            transitionDuration: "1000ms", // default '300ms'
            typography: true,
            transitionClasses: "full",
            colors: {
                white: "gray.900",
                black: "gray.50",
            },
            colorScale: {
                50: 900,
                100: 800,
                200: 700,
                300: 600,
                400: 500,
                500: 400,
                600: 300,
                700: 200,
                800: 100,
                900: 50,
            },
        },
    },

    plugins: [
        require('@tailwindcss/forms'),
        require('@tailwindcss/typography'),
        require('tailwindcss-hero-patterns'),
        require("nightwind"),
    ],
};
